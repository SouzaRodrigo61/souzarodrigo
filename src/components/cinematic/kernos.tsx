"use client"

import { motion, useReducedMotion } from "framer-motion"
import { IconArrowUpRight } from "@tabler/icons-react"

// Textos: landing do Kernos (kernos-site/app/page.tsx e GUIDES) e o CV. Sem cliente nem número de tração: ainda não existem.
const PILLARS = [
  { k: "Recebimento", v: "Entrada pela nota, conferida no celular, na doca." },
  { k: "Endereçamento", v: "Cada posição tem endereço: rua, nível, posição. Achar deixa de ser perguntar." },
  { k: "Separação", v: "Pedido conferido bipando o endereço; a fila de trabalho no aparelho da equipe." },
]

const SEGMENTS = ["Distribuidora e atacado", "Autopeças", "Bebidas", "Material de construção", "Varejo com depósito"]

function Phone() {
  const reduce = useReducedMotion()
  return (
    <div className="relative mx-auto w-[250px] sm:w-[280px]">
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-emerald-500/15 blur-[90px]" />
      <div className="rounded-[2.6rem] border border-white/15 bg-[#0b0b0e] p-3 shadow-2xl shadow-black/60">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101014] px-4 pb-6 pt-8">
          <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/10" />
          <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Separação</div>

          {/* etiqueta de prateleira com leitor */}
          <div className="relative mt-3 overflow-hidden rounded-xl bg-[#f3efe7] p-4 text-[#0f0f0f]">
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#0e7250]">Endereço</div>
            <div className="text-3xl font-black tracking-tight">A-03-02</div>
            <div className="mt-3 flex h-10 items-stretch gap-[2px]" aria-hidden>
              {[3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 2].map((w, i) => (
                <span key={i} className="bg-[#0f0f0f]" style={{ width: w * 2 }} />
              ))}
            </div>
            <motion.div
              aria-hidden
              className="absolute inset-x-2 h-[2px] bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.7)]"
              initial={{ top: "18%" }}
              animate={reduce ? { top: "62%" } : { top: ["18%", "86%", "18%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-4 space-y-2">
            {["Rua A · nível 03 · posição 02", "Conferido na separação"].map((t, i) => (
              <div key={t} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-zinc-300">
                <span className={`h-1.5 w-1.5 rounded-full ${i ? "bg-emerald-400" : "bg-zinc-500"}`} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function KernosShowcase() {
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
    <section id="kernos" className="relative isolate overflow-hidden bg-[#050507] px-5 py-24 text-zinc-100 sm:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div {...rise()} className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-300/80">
            Cena 03 · O produto
          </motion.div>
          <motion.h2 {...rise(1)} className="text-[clamp(2.2rem,5.4vw,4.2rem)] font-semibold leading-[1.05] tracking-tight">
            O galpão inteiro <span className="font-serif font-normal italic text-emerald-200">cabe no celular.</span>
          </motion.h2>
          <motion.p {...rise(2)} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            <strong className="font-semibold text-zinc-100">Kernos</strong> é o WMS que construí para distribuidoras de Brasília e entorno: endereçamento, separação de pedidos e a fila, no aparelho que a equipe já leva no bolso. Sem coletor, ao lado do ERP.
          </motion.p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <motion.div key={p.k} {...rise(i + 2)} className="rounded-2xl border border-white/10 bg-[#0b0b0e] p-4 transition hover:border-emerald-300/30">
                <div className="mb-2 font-serif text-xl italic text-zinc-100">{p.k}</div>
                <p className="text-xs leading-relaxed text-zinc-400">{p.v}</p>
              </motion.div>
            ))}
          </div>

          <motion.ul {...rise(5)} className="mt-8 flex flex-wrap gap-2">
            {SEGMENTS.map((s) => (
              <li key={s} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-400">{s}</li>
            ))}
          </motion.ul>

          <motion.div {...rise(6)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="https://kernos.com.br" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition active:scale-[0.98]">
              kernos.com.br
              <IconArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="font-mono text-[11px] text-zinc-500">Rust (Axum) · Postgres multi-tenant · React</span>
          </motion.div>
        </div>

        <motion.div {...rise(2)} className="lg:col-span-5">
          <Phone />
        </motion.div>
      </div>
    </section>
  )
}
