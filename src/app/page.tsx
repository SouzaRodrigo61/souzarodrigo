"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconDownload,
  IconArrowUpRight,
  IconDeviceMobile,
  IconServer,
  IconCloud,
  IconCpu,
  IconSparkles,
  IconBuildingBank,
  IconCheck,
  IconCopy,
  IconLayersLinked,
  IconShieldCheck,
  IconBolt,
  IconFileText,
  IconCode,
  IconStar,
  IconGitFork,
  IconMenu2,
  IconX,
  IconFilter
} from "@tabler/icons-react"
import { HeroModal } from "@/components/ui/hero-modal"
import { useProjectStore, Project, Experience } from "@/lib/store"
import { CinematicHero } from "@/components/cinematic/hero"
import { Harness } from "@/components/cinematic/harness"
import { KernosShowcase } from "@/components/cinematic/kernos"
import { CreditsStrip, RevealSection, ScrollProgress } from "@/components/cinematic/scene"
import { ArchitectureSimulator } from "@/components/ui/architecture-simulator"

const allProjectsList: (Project & { highlightMetric: string; highlightLabel: string; type: "mobile" | "backend" | "fintech" })[] = [
  {
    id: "kernos",
    title: "Kernos — WMS no celular",
    category: "WMS para Distribuidoras",
    role: "Fundador e Desenvolvedor",
    period: "2026 - Presente",
    description: "WMS sem coletor, no celular da equipe e ao lado do ERP, para distribuidoras de Brasília e entorno: endereçamento, recebimento pela nota e separação conferida. Backend em Rust, Postgres multi-tenant, webapp React e integração com agentes de IA via MCP.",
    impact: "Do celular ao banco: produto entregue ponta a ponta, com isolamento entre empresas verificado por testes de integração automatizados.",
    technologies: ["Rust", "Axum", "PostgreSQL multi-tenant", "React", "Clerk", "MCP", "Cloudflare Workers"],
    image: "/data/markdown/media/kernos-etiqueta.svg",
    link: "https://kernos.com.br",
    hasHeroModal: true,
    markdownFile: "kernos.md",
    highlightMetric: "Ponta a ponta",
    highlightLabel: "Mobile, API e infra",
    type: "backend"
  },
  {
    id: "divinapay",
    title: "DivinaPay (Divina Cashless)",
    category: "Plataforma de Pagamentos em Eventos",
    role: "Sócio Desenvolvedor",
    period: "2024/01 - Presente",
    description: "Plataforma completa para gestão e pagamentos cashless em eventos de grande porte. Aplicativo móvel moderno em Flutter 3.31+, backend de alta performance em Rust (Axum e Salvo.rs), banco PostgreSQL via Supabase e frontend operacional em Svelte 5.",
    impact: "Processou mais de R$ 2 milhões em transações, atendendo mais de 30 eventos com elevados picos de usuários simultâneos e zero tolerância a downtime.",
    technologies: ["Flutter 3.31+", "Rust", "Axum", "PostgreSQL", "Supabase", "Svelte 5", "Coolify"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "https://divinapay.com",
    hasHeroModal: true,
    markdownFile: "divinapay.md",
    highlightMetric: "R$ 2M+",
    highlightLabel: "Volume em Eventos",
    type: "fintech"
  },
  {
    id: "church-management",
    title: "Sistema de Gestão & Multi-tenant",
    category: "Gestão Financeira & SaaS",
    role: "Desenvolvedor (Voluntário)",
    period: "2023/03 - Presente",
    description: "Sistema completo de campanhas e gestão financeira com evolução de Flutter para Next.js + Rust, implementando arquitetura multi-tenant isolada e otimização total de custos de infraestrutura.",
    impact: "Redução de 100% nos custos fixos de cloud (USD 16 → USD 0) na plataforma Railway com Rust + PostgreSQL, migrando para infraestrutura VPS autogerenciada no Brasil com Coolify.",
    technologies: ["Next.js", "Rust", "Multi-tenant", "PostgreSQL", "VPS", "Coolify", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
    hasHeroModal: true,
    markdownFile: "church-management.md",
    highlightMetric: "100%",
    highlightLabel: "Economia de Cloud",
    type: "backend"
  }
]

const enterpriseClients = [
  { name: "Caixa Econômica Federal", role: "Loterias Caixa iOS (2022–2025)" },
  { name: "Banco do Brasil", role: "Intercâmbio de Cartões & Blockchain SBP" },
  { name: "PagSeguro", role: "Saque Aniversário FGTS Mobile" },
  { name: "Natura & Co", role: "NaturaPay & Natura FVN Mobile" },
  { name: "Polícia Federal", role: "Sustentação de Sistemas Críticos" },
  { name: "DivinaPay", role: "Plataforma de Pagamentos Cashless" }
]

const skillPillars = [
  {
    icon: <IconCpu className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
    title: "Engenharia AI-first",
    description: "Agentes de IA no fluxo diário, sob especificação, verificação independente e testes automatizados, e tooling aplicado: programmatic tool calling (codemode-cli) e compressão de contexto de shell (RTK). Ganhos medidos no uso diário: 3.813 tool-calls evitadas em 279 execuções do codemode; 91% de corte de output em 17,8 mil comandos via RTK.",
    badges: ["codemode-cli", "Rhai", "RTK", "Programmatic tool calling", "Sandbox", "Token reduction"]
  },
  {
    icon: <IconDeviceMobile className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: "Mobile Architecture & iOS Native",
    description: "Especialista em Swift nativo com foco em arquiteturas reativas (Combine, SwiftUI), UIKit avançado, Diffable Data Sources, Apple Wallet e The Composable Architecture (TCA).",
    badges: ["Swift 5.5+", "SwiftUI", "Combine", "UIKit / XIB", "TCA", "Diffable DS", "Apple Wallet", "VoiceOver a11y", "Flutter 3.31+", "React Native"]
  },
  {
    icon: <IconServer className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    title: "High-Performance Systems & Rust",
    description: "Desenvolvimento de microsserviços de altíssimo throughput, baixa latência e consumo mínimo de memória para processamento financeiro e APIs multi-tenant.",
    badges: ["Rust (Axum/Salvo)", "Java Quarkus", "Spring Batch", "Node.js / TS", "PostgreSQL", "Supabase", "Redis", "Microservices"]
  },
  {
    icon: <IconBuildingBank className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    title: "FinTech & Enterprise Scale",
    description: "Sistemas de validação de taxas de intercâmbio de bandeiras (Visa, Mastercard, Elo), gateways de pagamentos cashless e migração de sistemas legados de missão crítica.",
    badges: ["Interchange Rates", "PagSeguro FGTS", "Caixa Loterias", "NaturaPay", "Cashless POS", "COBOL/Natural Legacy Modernization", "Hyperledger Fabric"]
  },
  {
    icon: <IconCloud className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    title: "Infra, Cloud & DevOps",
    description: "Pipelines de CI/CD automatizados para mobile e backend, orquestração de containers e self-hosted infrastructure para máxima economia e performance.",
    badges: ["Docker", "Kubernetes", "Bitrise CI/CD", "GitHub Actions", "Coolify", "VPS Brasil", "Jenkins", "ElasticSearch"]
  }
]

const openSourceProjects = [
  {
    title: "codemode-cli",
    description: "Code mode / programmatic tool calling em um binário Rust: um script Rhai sandboxed substitui N tool-calls por 1. Sem MCP, sem processo residente. Medido: 6 → 1 (83%). Em uso real: 279 execuções, 3.813 tool-calls evitadas, 68% das rodadas colapsam 3+ primitivas.",
    stars: 0,
    forks: 0,
    tech: ["Rust", "Rhai", "AI Agents", "Sandbox"],
    link: "https://github.com/SouzaRodrigo61/codemode-cli"
  },
  {
    title: "rtk",
    description: "Proxy CLI que corta até 90% do output de shell lido pelo agente. Fork público; filtros embutidos in-process no codemode-cli. Uso em produção: 17,8 mil comandos, 91% de redução de output.",
    stars: 0,
    forks: 0,
    tech: ["Rust", "CLI", "Token economy", "AI Agents"],
    link: "https://github.com/SouzaRodrigo61/rtk"
  },
  {
    title: "SwiftDataTCA",
    description: "Arquitetura de integração e sample pioneiro entre SwiftData e The Composable Architecture (TCA) para apps iOS modernos e escaláveis.",
    stars: 82,
    forks: 11,
    tech: ["Swift", "SwiftData", "TCA", "iOS 17+"],
    link: "https://github.com/souzaRodrigo61/SwiftDataTCA"
  },
  {
    title: "cashew",
    description: "Demonstração de Clean Architecture aplicada a apps Swift e ecossistema iOS com separação rígida de camadas e testabilidade.",
    stars: 3,
    forks: 0,
    tech: ["Swift", "iOS", "Clean Arch", "Unit Tests"],
    link: "https://github.com/souzaRodrigo61/cashew"
  },
  {
    title: "ios-health-tracking",
    description: "Rastreador de métricas de saúde e sintomas com integração ao Apple HealthKit e interface reativa.",
    stars: 4,
    forks: 1,
    tech: ["Swift", "HealthKit", "SwiftUI", "Combine"],
    link: "https://github.com/souzaRodrigo61/ios-health-tracking"
  }
]

const educationData = [
  {
    title: "Pós-graduação em Desenvolvimento Mobile",
    institution: "Universidade Católica de Brasília (UCB)",
    period: "Agosto 2019 — Dezembro 2021",
    status: "Concluído",
    description: "Especialização focada em ecossistema Apple iOS, Swift, SwiftUI, arquiteturas reativas e projetos aplicados de saúde (HealthKit) e trader esportivo."
  },
  {
    title: "Bacharelado em Sistemas de Informação",
    institution: "Centro Universitário Projeção",
    period: "Agosto 2016 — Dezembro 2019",
    status: "Concluído",
    description: "Formação integral em engenharia de software, algoritmos, arquitetura de computadores, redes e governança de TI."
  },
  {
    title: "Ciência da Computação (Fundamentos)",
    institution: "Universidade Católica de Brasília (UCB)",
    period: "2014 — 2015",
    status: "Ciclo Básico",
    description: "Fundamentação teórica em estruturas de dados, linguagens estruturadas (C, Java) e matemática discreta."
  }
]

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<(Project | Experience) | null>(null)
  const [selectedLayoutId, setSelectedLayoutId] = useState<string>("")
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState<"all" | "fintech" | "backend">("all")

  const { experiences, loadProjectData } = useProjectStore()

  useEffect(() => {
    loadProjectData()
  }, [loadProjectData])

  // fundo do documento acompanha a home escura (overscroll e faixa abaixo do conteúdo)
  useEffect(() => {
    const el = document.documentElement
    const prev = el.style.backgroundColor
    el.style.backgroundColor = "#050507"
    return () => {
      el.style.backgroundColor = prev
    }
  }, [])

  const handleOpenItem = (item: Project | Experience, layoutId: string) => {
    setSelectedItem(item)
    setSelectedLayoutId(layoutId)
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
    setSelectedLayoutId("")
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("souza.rodrigo61@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2400)
  }

  const filteredProjects = allProjectsList.filter((p) => {
    if (projectFilter === "all") return true
    return p.type === projectFilter
  })

  return (
    <div className="min-h-screen force-dark bg-[#050507] text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 relative overflow-x-hidden font-sans">
      <ScrollProgress />

      {/* Floating Island Navigation */}
      <header className="sticky top-4 z-40 px-4 max-w-5xl mx-auto">
        <nav className="relative flex items-center justify-between px-5 py-3 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-2xl card-bezel">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs group-hover:scale-105 transition-transform">
              RS
            </div>
            <div className="flex flex-col">
              <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Rodrigo Souza
              </span>
              <span className="whitespace-nowrap text-[10px] text-zinc-600 dark:text-zinc-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse" />
                Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 text-xs font-mono whitespace-nowrap text-zinc-600 dark:text-zinc-400">
            <a href="#sobre" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Sobre</a>
            <a href="#ai-first" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">AI-first</a>
            <a href="#kernos" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Kernos</a>
            <a href="#projetos" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projetos</a>
            <a href="#experiencia" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Trajetória</a>
            <a href="#arquitetura" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Simulador</a>
            <a href="#opensource" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Open Source</a>
            <a href="/consultoria" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Consultoria</a>
                      </div>

          {/* Right Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="hidden xl:inline-flex whitespace-nowrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-black/10 dark:border-white/10 transition-all active:scale-95 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Email Copiado!</span>
                </>
              ) : (
                <>
                  <IconCopy className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                  <span>Copiar Email</span>
                </>
              )}
            </button>

            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              <span>Contato</span>
              <IconArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <IconX className="w-4 h-4" /> : <IconMenu2 className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 border border-black/10 dark:border-white/10 backdrop-blur-2xl shadow-xl flex flex-col gap-3 text-sm font-mono"
            >
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400">Sobre</a>
              <a href="#projetos" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400">Projetos</a>
              <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400">Trajetória</a>
              <a href="#arquitetura" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400">Simulador</a>
              <a href="#opensource" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400">Open Source</a>
              <a href="/consultoria" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400">Consultoria</a>
              <a href="https://kernos.com.br" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400">Kernos ↗</a>
              <button
                onClick={() => {
                  handleCopyEmail()
                  setMobileMenuOpen(false)
                }}
                className="mt-2 text-left py-2 px-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center justify-between"
              >
                <span>{copiedEmail ? "Email copiado com sucesso!" : "souza.rodrigo61@gmail.com"}</span>
                <IconCopy className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CinematicHero />
      <Harness />
      <KernosShowcase />

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-32 space-y-24 md:space-y-36">
        
        {/* SOCIAL PROOF */}
        <RevealSection>
          <CreditsStrip items={enterpriseClients} />
        </RevealSection>

        {/* FEATURED PROJECTS (PROJETOS EM DESTAQUE) */}
        <RevealSection id="projetos" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300/80">Cena 04 · Engenharia aplicada</div>
              <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">Projetos <span className="font-serif font-normal italic text-emerald-700 dark:text-emerald-200">de destaque</span></h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-xs font-mono">
              <button
                onClick={() => setProjectFilter("all")}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  projectFilter === "all" ? "bg-zinc-200 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 font-medium" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setProjectFilter("fintech")}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  projectFilter === "fintech" ? "bg-zinc-200 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 font-medium" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                FinTech & Cashless
              </button>
              <button
                onClick={() => setProjectFilter("backend")}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  projectFilter === "backend" ? "bg-zinc-200 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 font-medium" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                Multi-tenant & Rust
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  layoutId={`project-${index}`}
                  onClick={() => handleOpenItem(project, `project-${index}`)}
                  className="group cursor-pointer"
                  style={project.id === "kernos" ? { gridColumn: "1 / -1" } : undefined}
                >
                  <div className="h-full rounded-3xl p-px border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0b0e] hover:border-emerald-500/40 transition-all duration-300">
                    <div className="h-full rounded-[calc(1.5rem-1px)] bg-transparent p-6 flex flex-col justify-between space-y-6 group-hover:bg-white/95 dark:group-hover:bg-zinc-900/95 transition-colors">
                      
                      <div className="space-y-4">
                        {/* Top Metric Bar */}
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono border border-black/10 dark:border-white/5">
                            {project.category}
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">{project.highlightMetric}</span>
                            <span className="text-[10px] text-zinc-600 dark:text-zinc-400 block font-mono">{project.highlightLabel}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                          <span>{project.title}</span>
                          <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-emerald-500/20 text-zinc-600 dark:text-zinc-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 flex items-center justify-center transition-all">
                            <IconArrowUpRight className="w-4 h-4" />
                          </div>
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Impact Highlight */}
                        <div className="p-3 rounded-xl bg-white/70 dark:bg-zinc-950/70 border border-black/10 dark:border-white/5 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          <strong className="text-emerald-600 dark:text-emerald-400 font-medium">Impacto: </strong>
                          {project.impact}
                        </div>
                      </div>

                      {/* Tech Badges & CTA */}
                      <div className="space-y-4 pt-2">
                        <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                          {project.technologies.join(", ")}
                        </p>

                        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          <span>Abrir Estudo de Caso & Arquitetura Completa</span>
                          <span>→</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </RevealSection>

        {/* INTERACTIVE ARCHITECTURE SIMULATOR */}
        <RevealSection id="arquitetura" className="space-y-8 scroll-mt-24">
          <ArchitectureSimulator />
        </RevealSection>

        {/* ABOUT & PHILOSOPHY (SOBRE MIM) */}
        <RevealSection id="sobre" className="space-y-10 scroll-mt-24">
          <div className="rounded-3xl p-px border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0b0e]">
            <div className="rounded-[calc(1.5rem-1px)] bg-transparent p-8 md:p-12">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300/80">Cena 05 · Perfil</div>
                  <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">
                    Rigor de banco, <span className="font-serif font-normal italic text-emerald-700 dark:text-emerald-200">velocidade de agente.</span>
                  </h2>
                  <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    Engenheiro sênior em <strong>mobile e sistemas financeiros</strong>, com <strong>Rust</strong> no backend. Hoje trabalho com agentes de IA no fluxo diário
                    sob especificação, verificação independente e testes automatizados — com ferramentas próprias para isso não virar improviso.
                  </p>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Com ampla bagagem no setor bancário e de pagamentos, atuei diretamente na modernização de rotinas mainframe 
                    no <strong>Banco do Brasil</strong> para arquiteturas cloud, validação de arquivos de taxas de intercâmbio (Visa, Master, Elo), 
                    e na engenharia do app das <strong>Loterias Caixa</strong>, garantindo acessibilidade (VoiceOver), conformidade com a Apple e estabilidade para milhões de usuários.
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-white/70 dark:bg-zinc-950/70 border border-black/10 dark:border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                      <IconShieldCheck className="w-4 h-4" />
                      <span>Prova, não promessa</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Arquitetura desacoplada (Clean Architecture / TCA), testes, CI/CD com Bitrise e GitHub Actions e verificação que não aceita "passou" sem reproduzir.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/70 dark:bg-zinc-950/70 border border-black/10 dark:border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                      <IconBolt className="w-4 h-4" />
                      <span>Performance & Eficiência de Custos</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Uso de Rust para eliminar custos desnecessários com cloud, reduzindo a latência para sub-milissegundos e operando com pegada mínima de memória.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/70 dark:bg-zinc-950/70 border border-black/10 dark:border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-semibold">
                      <IconLayersLinked className="w-4 h-4" />
                      <span>Domínio Ponta a Ponta</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Da concepção de UX/UI reativa no cliente mobile até o provisionamento de servidores bare-metal, VPS e bancos relacionais robustos.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </RevealSection>

        {/* CAREER TIMELINE (EXPERIÊNCIA PROFISSIONAL) */}
        <RevealSection id="experiencia" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300/80">Cena 06 · Histórico</div>
              <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">Trajetória <span className="font-serif font-normal italic text-emerald-700 dark:text-emerald-200">& experiências</span></h2>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              Clique em qualquer experiência para abrir a documentação técnica e arquitetural completa.
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                layoutId={`experience-${exp.id}`}
                onClick={() => handleOpenItem(exp, `experience-${exp.id}`)}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl p-px border border-black/10 dark:border-white/10 hover:border-emerald-500/40 transition-all">
                  <div className="rounded-[calc(1rem-1px)] bg-transparent hover:bg-zinc-100 dark:hover:bg-white/[0.03] p-6 transition-colors space-y-4">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-zinc-200 dark:bg-zinc-800 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-700 dark:text-zinc-300 font-bold text-xs">
                          {exp.company.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                            {exp.company} • {exp.period}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {exp.status === "Atual" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse" />
                            Posição Atual
                          </span>
                        )}
                        {exp.hasHeroModal && (
                          <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center gap-1">
                            <span>Ver Estudo de Caso</span>
                            <IconArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech Badges */}
                    <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 pt-1">
                      {exp.technologies.join(", ")}
                    </p>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        {/* ARCHITECTURE PILLARS (HABILIDADES) */}
        <RevealSection className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300/80">Cena 07 · Domínio técnico</div>
              <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">Pilares <span className="font-serif font-normal italic text-emerald-700 dark:text-emerald-200">de engenharia</span></h2>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              Tecnologias, padrões arquiteturais e frameworks utilizados na entrega de produtos de alto calibre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group rounded-3xl p-px border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0b0e] hover:border-emerald-500/40 transition-all"
              >
                <div className="h-full rounded-[calc(1.5rem-1px)] bg-transparent p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-200 dark:bg-zinc-800 border border-black/10 dark:border-white/10 flex items-center justify-center shadow-inner group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pillar.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="pt-3 border-t border-black/10 dark:border-white/5">
                    <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {pillar.badges.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* OPEN SOURCE & COMMUNITY */}
        <RevealSection id="opensource" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300/80">Cena 08 · Comunidade e pesquisa</div>
              <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">Projetos <span className="font-serif font-normal italic text-emerald-700 dark:text-emerald-200">open source</span></h2>
            </div>
            <a 
              href="https://github.com/souzaRodrigo61" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Ver todos os repositórios no GitHub</span>
              <IconArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {openSourceProjects.map((repo, idx) => (
              <a
                key={idx}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl p-px border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0b0e] hover:border-emerald-500/40 transition-all"
              >
                <div className="h-full rounded-[calc(1.5rem-1px)] bg-transparent p-6 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        <IconBrandGithub className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                        <span>GitHub</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                          <IconStar className="w-3.5 h-3.5 fill-amber-500 dark:fill-amber-400" />
                          {repo.stars}
                        </span>
                        {repo.forks > 0 && (
                          <span className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                            <IconGitFork className="w-3.5 h-3.5" />
                            {repo.forks}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                      <span>{repo.title}</span>
                      <IconArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                    </h3>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/10 dark:border-white/5">
                    <p className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                      {repo.tech.join(", ")}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </RevealSection>

        {/* EDUCATION & ACADEMIC BACKGROUND */}
        <RevealSection id="formacao" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300/80">Cena 09 · Fundamentação</div>
              <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">Formação <span className="font-serif font-normal italic text-emerald-700 dark:text-emerald-200">& especializações</span></h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-px border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0b0e] hover:border-emerald-500/40 transition-all"
              >
                <div className="h-full rounded-[calc(1.5rem-1px)] bg-transparent p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono border border-black/10 dark:border-white/5">
                      {edu.status}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{edu.title}</h3>
                    <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                      {edu.institution}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500">
                      {edu.period}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2 border-t border-black/10 dark:border-white/5">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* CRÉDITOS FINAIS */}
        <RevealSection id="contato" className="scroll-mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0e] px-6 py-16 text-center md:px-14 md:py-24">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
            <div className="relative space-y-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-300/80">Cena 10 · Créditos</div>
              <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5.6vw,4.4rem)] font-semibold leading-[1.05] tracking-tight text-zinc-50">
                Fim da primeira cena. <span className="font-serif font-normal italic text-emerald-200">Vamos para a segunda?</span>
              </h2>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400">
                Conversas sobre mobile em fintech, engenharia AI-first e consultoria técnica.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="mailto:souza.rodrigo61@gmail.com?subject=Contato%20via%20portf%C3%B3lio" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition active:scale-95">
                  <IconMail className="h-4 w-4" />
                  <span>Enviar email</span>
                </a>
                <a href="https://www.linkedin.com/in/souzarodrigo61" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-zinc-200 transition hover:bg-white/10 active:scale-95">
                  <IconBrandLinkedin className="h-4 w-4 text-zinc-400" />
                  <span>LinkedIn</span>
                </a>
                <a href="/cv/pt" download="Rodrigo-Santos-de-Souza-CV-PT.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-zinc-200 transition hover:bg-white/10 active:scale-95">
                  <IconDownload className="h-4 w-4 text-zinc-400" />
                  <span>CV (PDF)</span>
                </a>
                <a href="/cv/en" download="Rodrigo-Santos-de-Souza-CV-EN.pdf" className="font-mono text-xs text-zinc-500 transition hover:text-emerald-300">English CV</a>
              </div>

              <button onClick={handleCopyEmail} className="mx-auto flex cursor-pointer items-center gap-2 font-mono text-xs text-zinc-500 transition hover:text-emerald-300">
                {copiedEmail ? <IconCheck className="h-3.5 w-3.5" /> : <IconCopy className="h-3.5 w-3.5" />}
                <span>{copiedEmail ? "Email copiado!" : "souza.rodrigo61@gmail.com — clique para copiar"}</span>
              </button>

              <dl className="mx-auto grid max-w-3xl gap-6 border-t border-white/10 pt-8 text-left sm:grid-cols-3">
                {[
                  ["Mobile", "Swift · SwiftUI · Flutter · React Native"],
                  ["Backend", "Rust · Node.js · Java · .NET · PostgreSQL"],
                  ["Agentes", "Claude Code · codemode-cli · rtk"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-serif text-xl italic text-zinc-100">{k}</dt>
                    <dd className="mt-1 font-mono text-[11px] leading-relaxed text-zinc-500">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] text-zinc-500">
                <span className="flex items-center gap-2"><IconMapPin className="h-3.5 w-3.5 text-emerald-300/80" />Brasília, DF (UTC-3)</span>
                <span>Português (nativo) · Inglês (intermediário)</span>
              </div>
            </div>
          </div>
        </RevealSection>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-black/10 dark:border-white/5 bg-white/80 dark:bg-zinc-950/80 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} Rodrigo Souza. Engenharia de software com foco em precisão e escala.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/souzaRodrigo61" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/souzarodrigo61" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
              LinkedIn
            </a>
            <a href="#sobre" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </footer>

      {/* UNIVERSAL HERO MODAL */}
      <HeroModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
        layoutId={selectedLayoutId}
      />
    </div>
  )
}
