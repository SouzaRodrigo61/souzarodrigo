"use client"

import { motion, useReducedMotion } from "framer-motion"
import { IconArrowUpRight } from "@tabler/icons-react"

// Fonte: README e agentes do plugin kernos-harness (0.14.0). Nada aqui é métrica inventada.
const STEPS = [
  { n: "01", tag: "kernos:bdd", title: "O caso nasce antes do código", text: "Dado/Quando/Então aterrado no contrato real da rota, antes de a demanda entrar no backlog." },
  { n: "02", tag: "backend · dba · react", title: "Construtores especialistas", text: "Rust/axum e cadeia de rota, schema com isolamento por tenant, webapp nas três larguras. Cada agente no seu repo." },
  { n: "03", tag: "kernos:qa", title: "Quem mede não constrói", text: "O QA re-executa o que os construtores alegaram — e morde de propósito. Alegação sem reprodução não conta." },
  { n: "04", tag: "kernos:portoes", title: "Portões, e o que verde não prova", text: "Cada repo tem os seus. A skill diz o que cada um pega, o que não pega, e por que verde sozinho não é prova." },
  { n: "05", tag: "kernos:proof · journey", title: "A jornada ponta a ponta", text: "Na UI: de onde vêm os passos, quem afirma o dado e o que pode ser julgado." },
]

const COMMANDS = [
  ["kernos claude", "sincroniza o plugin e abre o Claude Code com a norma do repo"],
  ["kernos codex", "gera o AGENTS.md do repo e abre o Codex — mesma norma, outro agente"],
  ["kernos doctor", "mostra o que está instalado e qual repo está sem norma"],
  ["kernos memoria", "um banco de lições compartilhado entre todos os repos e agentes"],
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
    <section id="harness" className="relative isolate scroll-mt-0 overflow-hidden bg-[#050507] px-5 py-28 text-zinc-100 sm:px-8 md:py-40">
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="mx-auto max-w-6xl">
        <motion.div {...rise()} className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-300/80">
          Cena 02 · Os bastidores
        </motion.div>
        <motion.h2 {...rise(1)} className="max-w-4xl text-[clamp(2.2rem,5.6vw,4.4rem)] font-semibold leading-[1.05] tracking-tight">
          Agente sem processo é improviso.{" "}
          <span className="font-serif font-normal italic text-emerald-200">Isto é processo.</span>
        </motion.h2>
        <motion.p {...rise(2)} className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          O Kernos é o produto. O harness é como ele é construído: cinco agentes com papéis separados, skills de disciplina e um QA que não acredita em ninguém.
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
          <motion.div {...rise()} className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-[13px] lg:col-span-3">
            <div className="mb-4 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <ul className="space-y-3">
              {COMMANDS.map(([cmd, desc]) => (
                <li key={cmd} className="leading-relaxed">
                  <span className="text-emerald-300">$ {cmd}</span>
                  <span className="block text-zinc-500 sm:ml-0">{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...rise(1)} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-emerald-300/70">Ferramentas próprias, open source</div>
              <p className="text-sm leading-relaxed text-zinc-300">
                <strong className="text-white">codemode-cli</strong> troca N tool-calls por 1 (medido: 6 → 1, 83%). <strong className="text-white">rtk</strong> corta 91% do output de shell antes de entrar no contexto. Os dois rodam todo dia, neste mesmo fluxo.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href="https://github.com/SouzaRodrigo61/codemode-cli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 font-semibold text-zinc-950 transition active:scale-[0.98]">
                codemode-cli <IconArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://kernos.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-zinc-200 transition hover:bg-white/10">
                kernos.com.br <IconArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
