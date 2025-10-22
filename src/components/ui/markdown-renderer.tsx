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
            <h1 className="text-2xl font-bold text-foreground mb-4 mt-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 text-muted-foreground space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 text-muted-foreground space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-muted-foreground">{children}</li>
          ),
          code: ({ children, className }) => {
            const isInline = !className
            if (isInline) {
              return (
                <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              )
            }
            return (
              <code className="block bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">
                {children}
              </code>
            )
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-border rounded-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-border">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-muted/50">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left font-semibold text-foreground">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-muted-foreground">{children}</td>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-muted-foreground">{children}</em>
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
