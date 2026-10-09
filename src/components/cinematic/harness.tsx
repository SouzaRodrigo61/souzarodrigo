"use client"

import { motion, useReducedMotion } from "framer-motion"
import { IconArrowUpRight } from "@tabler/icons-react"

const STEPS = [
  { n: "01", tag: "Especificação", title: "O critério nasce antes do código", text: "Casos Dado/Quando/Então escritos contra o contrato real da API, antes de a demanda virar tarefa." },
  { n: "02", tag: "Orquestração", title: "Agentes especializados", text: "Backend, dados e interface em paralelo, cada agente com escopo e isolamento próprios." },
  { n: "03", tag: "Verificação", title: "Quem mede não constrói", text: "Um revisor independente re-executa o que foi entregue. Alegação sem reprodução não conta." },
  { n: "04", tag: "Qualidade", title: "Portões automáticos", text: "Testes, lint e CI em cada repositório, e clareza sobre o que cada portão pega — e o que não pega." },
  { n: "05", tag: "Prova", title: "Jornada ponta a ponta", text: "A interface exercitada de verdade: de onde vêm os passos, quem afirma o dado, o que pode ser julgado." },
]

export function Harness() {
  const reduce = useReducedMotion()
  const rise = (i = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section id="ai-first" className="relative isolate scroll-mt-0 overflow-hidden bg-[#050507] px-5 py-28 text-zinc-100 sm:px-8 md:py-40">
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="mx-auto max-w-6xl">
        <motion.div {...rise()} className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-300/80">
          Cena 02 · Como eu trabalho
        </motion.div>
        <motion.h2 {...rise(1)} className="max-w-4xl text-[clamp(2.2rem,5.6vw,4.4rem)] font-semibold leading-[1.05] tracking-tight">
          Agentes de IA, com{" "}
          <span className="font-serif font-normal italic text-emerald-200">engenharia no controle.</span>
        </motion.h2>
        <motion.p {...rise(2)} className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Uso agentes de IA no desenvolvimento do dia a dia, sob especificação, verificação independente e testes automatizados. Velocidade sem abrir mão de prova.
        </motion.p>

        {/* linha do tempo */}
        <div className="relative mt-16">
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-[19px] hidden h-px origin-left bg-gradient-to-r from-emerald-400/60 via-white/20 to-transparent lg:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <motion.div key={s.n} {...rise(i)} className="group relative rounded-2xl border border-white/10 bg-[#0b0b0e] p-5 transition hover:border-emerald-300/30 hover:bg-[#101014]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/30 bg-[#050507] font-mono text-xs text-emerald-300">{s.n}</div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-emerald-300/70">{s.tag}</div>
                <h3 className="mb-2 text-base font-semibold leading-snug text-zinc-100">{s.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CLI + ferramentas próprias */}
        <div className="mt-16 grid gap-4 lg:grid-cols-5">
          <motion.div {...rise()} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-3">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-wider text-emerald-300/70">O que isso me permite entregar</div>
            <ul className="grid gap-4 text-sm leading-relaxed text-zinc-300 sm:grid-cols-2">
              {["Features inteiras com testes, não rascunhos", "Refatorações grandes com a rede de segurança de CI", "Revisão sistemática do código gerado por agentes", "Prazos curtos sem dívida escondida"].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />{t}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...rise(1)} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-emerald-300/70">Open source que publiquei</div>
              <p className="text-sm leading-relaxed text-zinc-300">
                <strong className="text-white">codemode-cli</strong> troca N tool-calls por 1 (medido: 6 → 1, 83%). <strong className="text-white">rtk</strong> corta 91% do output de shell antes de entrar no contexto. Os dois são usados todo dia.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href="https://github.com/SouzaRodrigo61/codemode-cli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 font-semibold text-zinc-950 transition active:scale-[0.98]">
                codemode-cli <IconArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
