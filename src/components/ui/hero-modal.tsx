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
  }, [isOpen, item, loadMarkdownContent])

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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <IconX className="h-5 w-5" />
            </button>

            {/* Image */}
            {imageSrc && (
              <div className="relative h-64 w-full">
                <BlurImage src={imageSrc} alt={title} className="object-cover" fill />
              </div>
            )}

            {/* Text Content */}
            <div className="p-6 md:p-8 max-h-[calc(90vh-16rem)] overflow-y-auto">
              <h2 className="mb-2 text-3xl font-bold text-foreground">{title}</h2>
              <p className="mb-4 text-lg text-muted-foreground">{subtitle}</p>
              
              {isLoadingMarkdown ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : markdownContent ? (
                <MarkdownRenderer content={markdownContent} skipFirstH1={true} />
              ) : (
                <div className="space-y-4">
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {link && (
                <div className="mt-6">
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline text-lg font-medium"
                  >
                    Ver Projeto →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
