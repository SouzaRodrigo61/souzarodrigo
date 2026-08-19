"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface MarkdownRendererProps {
  content: string
  className?: string
  skipFirstH1?: boolean
}

export const MarkdownRenderer = ({ content, className = "", skipFirstH1 = false }: MarkdownRendererProps) => {
  // Processar o conteúdo para remover o primeiro H1 se necessário
  const processedContent = React.useMemo(() => {
    if (!skipFirstH1) return content
    
    // Remover o primeiro H1 do conteúdo
    const lines = content.split('\n')
    let skipNext = false
    let firstH1Found = false
    
    return lines.filter(line => {
      if (line.startsWith('# ') && !firstH1Found) {
        firstH1Found = true
        return false // Remove a primeira linha H1
      }
      return true
    }).join('\n')
  }, [content, skipFirstH1])

  return (
    <div className={`prose dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100 mb-4 mt-8 pb-2 border-b border-white/5">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 mb-4 mt-8">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg md:text-xl font-semibold text-emerald-400 mb-3 mt-6">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-zinc-300 mb-4 leading-relaxed text-sm md:text-base">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 text-zinc-300 space-y-2 text-sm md:text-base">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 text-zinc-300 space-y-2 text-sm md:text-base">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-zinc-300">{children}</li>
          ),
          code: ({ children, className }) => {
            const isInline = !className
            if (isInline) {
              return (
                <code className="bg-zinc-800/90 text-emerald-300 px-2 py-0.5 rounded text-xs md:text-sm font-mono border border-white/5">
                  {children}
                </code>
              )
            }
            return (
              <code className="block bg-zinc-950/90 p-4 rounded-xl text-xs md:text-sm font-mono text-zinc-200 border border-white/10 overflow-x-auto my-4">
                {children}
              </code>
            )
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-emerald-500/60 bg-emerald-950/10 pl-4 py-2 italic text-zinc-300 my-4 rounded-r-lg">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
              <table className="min-w-full text-sm divide-y divide-white/10">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-zinc-800/50 text-zinc-200">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-white/5 bg-zinc-900/30">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-zinc-800/30 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-semibold text-zinc-200 font-mono text-xs uppercase tracking-wider">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-zinc-300">{children}</td>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors font-medium"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-zinc-100">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-zinc-300">{children}</em>
          ),
          img: ({ src, alt, ...props }) => {
            // Se for um vídeo MP4, renderizar como video element
            if (src && typeof src === 'string' && src.endsWith('.MP4')) {
              return (
                <video 
                  src={src} 
                  controls 
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg my-4"
                >
                  Seu navegador não suporta vídeos.
                </video>
              )
            }
            // Para imagens normais
            return (
              <img 
                src={src} 
                alt={alt} 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg my-4"
                {...props}
              />
            )
          }
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  )
}
