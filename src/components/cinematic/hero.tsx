"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { IconArrowUpRight, IconClock, IconDownload, IconMapPin } from "@tabler/icons-react"

const METRICS = [
  { to: 10, suffix: "+", label: "anos em sistemas financeiros", sub: "Caixa · Banco do Brasil · PagSeguro" },
  { prefix: "R$ ", to: 2, suffix: "M+", label: "em pagamentos cashless", sub: "DivinaPay · 30+ eventos" },
  { to: 3813, label: "tool-calls de agente evitadas", sub: "codemode-cli · 279 execuções" },
  { to: 91, suffix: "%", label: "menos output no contexto", sub: "rtk · 17,8 mil comandos" },
]

const HEADLINE = ["Engenharia", "de", "missão", "crítica,"]
const ACCENT = ["orquestrando", "agentes", "de", "IA."]

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setValue(Math.round(v)) })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function CinematicHero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const [clock, setClock] = useState("")

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", second: "2-digit" })
    const tick = () => setClock(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const word = (i: number, base: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28, filter: "blur(14px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.9, delay: base + i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section ref={ref} className="relative isolate -mt-[84px] flex min-h-[100svh] flex-col overflow-hidden bg-[#050507] text-zinc-100">
      {/* luz: orbes lentos */}
      <motion.div
        aria-hidden
        className="absolute -left-[10%] top-[8%] h-[60vw] w-[60vw] max-w-[820px] max-h-[820px] rounded-full bg-emerald-500/20 blur-[140px]"
        animate={reduce ? undefined : { x: [0, 60, -20, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-[12%] bottom-[0%] h-[50vw] w-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-cyan-500/15 blur-[140px]"
        animate={reduce ? undefined : { x: [0, -50, 20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* flare anamórfico */}
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 top-[42%] -z-0"
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto h-[2px] w-[min(1100px,92%)] bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent blur-[1.5px]" />
        <div className="mx-auto -mt-10 h-20 w-[min(900px,80%)] bg-emerald-300/10 blur-3xl" />
      </motion.div>

      <div aria-hidden className="film-grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-screen" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#000_100%)]" />

      {/* letterbox: cortina que abre */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 z-20 bg-black"
        initial={reduce ? { height: "6%" } : { height: "52%" }}
        animate={{ height: "6%" }}
        transition={{ duration: 1.7, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-20 bg-black"
        initial={reduce ? { height: "6%" } : { height: "52%" }}
        animate={{ height: "6%" }}
        transition={{ duration: 1.7, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div style={reduce ? undefined : { y, opacity: fade }} className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-12 pt-44 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-300/80"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Cena 01 · Abertura
          <span className="hidden text-zinc-500 sm:inline">— Mobile · Fintech · Agentes</span>
        </motion.div>

        <h1 className="max-w-5xl text-[clamp(2.4rem,6.4vw,5.2rem)] font-semibold leading-[1.02] tracking-tight">
          <span className="block">
            {HEADLINE.map((w, i) => (
              <motion.span key={w + i} className="mr-[0.25em] inline-block" {...word(i, 1.1)}>
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block font-serif font-normal italic text-emerald-100">
            {ACCENT.map((w, i) => (
              <motion.span key={w + i} className={`mr-[0.25em] inline-block ${i === ACCENT.length - 1 ? "text-cyan-200" : ""}`} {...word(i, 1.45)}>
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.9 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          Mais de 10 anos entregando mobile e backend em Caixa, Banco do Brasil, PagSeguro e fintechs. Hoje construo em Rust, Swift e Flutter com um harness próprio de agentes, portões e provas.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.9 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#harness" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition active:scale-[0.98]">
            Ver como eu trabalho
            <IconArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="/cv/pt" download="Rodrigo-Santos-de-Souza-CV-PT.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur transition hover:bg-white/10 active:scale-[0.98]">
            <IconDownload className="h-4 w-4 text-zinc-400" />
            CV (PDF)
          </a>
          <a href="/cv/en" download="Rodrigo-Santos-de-Souza-CV-EN.pdf" className="font-mono text-xs text-zinc-500 transition hover:text-emerald-300">
            English CV
          </a>
          <a href="#kernos" className="font-mono text-xs text-emerald-300/80 transition hover:text-emerald-200">
            Kernos, meu produto ↓
          </a>
        </motion.div>
      </motion.div>

      {/* métricas — Linear/Slash: número grande, rótulo curto */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="relative z-30 pb-[10svh] sm:pb-[8svh]"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-t border-white/10 bg-white/10 px-0 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-[#050507]/80 px-5 py-4 backdrop-blur sm:px-8">
              <div className="font-serif text-3xl tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-200/70 sm:text-4xl">
                <Counter to={m.to} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="mt-1 text-xs text-zinc-300">{m.label}</div>
              <div className="font-mono text-[10px] text-zinc-500">{m.sub}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-[1.4svh] z-30 mx-auto flex max-w-6xl items-center justify-between px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:px-8">
        <span className="flex items-center gap-1.5"><IconMapPin className="h-3 w-3" />Brasília, DF</span>
        {clock && <span className="flex items-center gap-1.5 text-emerald-300/70"><IconClock className="h-3 w-3" />{clock} UTC-3</span>}
      </div>

    </section>
  )
}
