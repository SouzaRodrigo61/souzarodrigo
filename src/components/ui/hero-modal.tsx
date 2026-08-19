"use client"

import React, { useEffect, useRef, useState } from "react"
import { IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useOnClickOutside } from "@/components/ui/use-on-click-outside"
import { BlurImage } from "@/components/ui/blur-image"
import { MarkdownRenderer } from "@/components/ui/markdown-renderer"
import { useProjectStore, Project, Experience } from "@/lib/store"
import { Badge } from "@/components/ui/badge"

export type ProjectCard = {
  src: string
  title: string
  category: string
  content: React.ReactNode
}

export interface HeroModalProps {
  item: (Project | Experience) | null
  isOpen: boolean
  onClose: () => void
  layoutId: string
}

export const HeroModal = ({ item, isOpen, onClose, layoutId }: HeroModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [markdownContent, setMarkdownContent] = useState<string>("")
  const [isLoadingMarkdown, setIsLoadingMarkdown] = useState(false)
  
  const { loadMarkdownContent } = useProjectStore()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  useOnClickOutside(containerRef, onClose)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Carregar conteúdo markdown quando o modal abrir
  useEffect(() => {
    if (isOpen && item && item.hasHeroModal && item.markdownFile) {
      setIsLoadingMarkdown(true)
      loadMarkdownContent(item.markdownFile)
        .then(content => {
          setMarkdownContent(content)
          setIsLoadingMarkdown(false)
        })
        .catch(error => {
          console.error('Erro ao carregar markdown:', error)
          setIsLoadingMarkdown(false)
        })
    } else {
      setMarkdownContent("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, item?.markdownFile])

  if (!item) return null

  // Type guard para diferenciar Project de Experience
  const isProject = (data: Project | Experience): data is Project => {
    return 'category' in data
  }

  const title = item.title
  const subtitle = isProject(item) ? item.category : item.company
  const imageSrc = isProject(item) ? item.image : undefined
  const link = isProject(item) ? item.link : undefined

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          layoutId={layoutId}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2rem] p-1.5 ring-1 ring-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl"
          >
            <div className="relative w-full h-full rounded-[calc(2rem-0.375rem)] bg-zinc-900/95 border border-white/5 overflow-hidden flex flex-col">
              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="absolute right-4 top-4 z-20 rounded-full bg-zinc-950/70 p-2.5 text-zinc-300 border border-white/10 backdrop-blur-md transition-all hover:bg-zinc-800 hover:text-white active:scale-95 cursor-pointer"
              >
                <IconX className="h-5 w-5" />
              </button>

              {/* Image Header if present */}
              {imageSrc && (
                <div className="relative h-56 md:h-64 w-full bg-zinc-950/60 border-b border-white/5 overflow-hidden">
                  <BlurImage src={imageSrc} alt={title} className="object-cover" fill />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/30" />
                </div>
              )}

              {/* Text Content */}
              <div className="p-6 md:p-10 max-h-[calc(90vh-14rem)] overflow-y-auto space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
                    {subtitle}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-50">{title}</h2>
                </div>
                
                {isLoadingMarkdown ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-emerald-500 border-t-transparent"></div>
                    <span className="text-xs text-zinc-500 font-mono">Carregando detalhes técnicos...</span>
                  </div>
                ) : markdownContent ? (
                  <MarkdownRenderer content={markdownContent} skipFirstH1={true} />
                ) : (
                  <div className="space-y-6">
                    <p className="text-zinc-300 text-base leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {link && (
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-sm font-medium border border-emerald-500/20 transition-all active:scale-[0.98]"
                    >
                      Acessar Aplicação / Site Oficial
                      <span className="text-emerald-400">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
