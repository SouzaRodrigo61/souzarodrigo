"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"

export function RevealSection({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.section
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  )
}

// Linha fina no topo: o "tempo de projeção" do filme
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400" />
}

// Faixa de créditos: nomes em serifa, rolagem lenta; parada com prefers-reduced-motion
export function CreditsStrip({ items }: { items: { name: string; role: string }[] }) {
  const row = (key: string) => (
    <ul key={key} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={key === "b"}>
      {items.map((c) => (
        <li key={c.name} className="flex shrink-0 items-baseline gap-3 whitespace-nowrap">
          <span className="font-serif text-3xl italic text-zinc-100 sm:text-4xl">{c.name}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{c.role}</span>
        </li>
      ))}
    </ul>
  )
  return (
    <div className="space-y-5">
      <div className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">Elenco · onde a engenharia rodou</div>
      <div className="credits-mask overflow-hidden border-y border-white/10 py-6">
        <div className="credits-track flex w-max">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </div>
  )
}
