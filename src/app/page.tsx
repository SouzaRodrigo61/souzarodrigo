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
  IconTerminal2,
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
  IconClock,
  IconFilter
} from "@tabler/icons-react"
import { HeroModal } from "@/components/ui/hero-modal"
import { useProjectStore, Project, Experience } from "@/lib/store"
import { ArchitectureSimulator } from "@/components/ui/architecture-simulator"

const allProjectsList: (Project & { highlightMetric: string; highlightLabel: string; type: "mobile" | "backend" | "fintech" })[] = [
  {
    id: "divinapay",
    title: "DivinaPay (Divina Cashless)",
    category: "Plataforma de Pagamentos em Eventos",
    role: "Sócio Desenvolvedor",
    period: "2024/01 - Presente",
    description: "Plataforma completa para gestão e pagamentos cashless em eventos de grande porte. Aplicativo móvel moderno em Flutter 3.31+, backend de alta performance em Rust (Axum e Salvo.rs), banco PostgreSQL via Supabase e frontend operacional em Svelte 5.",
    impact: "Processou mais de R$ 6 milhões em transações, atendendo mais de 30 eventos com elevados picos de usuários simultâneos e zero tolerância a downtime.",
    technologies: ["Flutter 3.31+", "Rust", "Axum", "PostgreSQL", "Supabase", "Svelte 5", "Coolify"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "https://divinapay.com",
    hasHeroModal: true,
    markdownFile: "divinapay.md",
    highlightMetric: "R$ 6M+",
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
    description: "Code mode / programmatic tool calling para agentes de IA em um único binário Rust: um script Rhai sandboxed substitui N tool-calls por 1. Medido em tarefa real: 6 tool-calls → 1 (83% de redução de chamadas). Sem MCP, sem processo residente.",
    stars: 0,
    forks: 0,
    tech: ["Rust", "Rhai", "AI Agents", "Sandbox"],
    link: "https://github.com/SouzaRodrigo61/codemode-cli"
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
  const [currentTime, setCurrentTime] = useState<string>("")

  const { experiences, loadProjectData } = useProjectStore()

  useEffect(() => {
    loadProjectData()
  }, [loadProjectData])

  // Real-time Brasília Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
      setCurrentTime(formatter.format(now))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
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
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 relative overflow-x-hidden font-sans">
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-0 opacity-40" />
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-t from-emerald-500/5 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Floating Island Navigation */}
      <header className="sticky top-4 z-40 px-4 max-w-5xl mx-auto">
        <nav className="relative flex items-center justify-between px-5 py-3 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-2xl card-bezel">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs group-hover:scale-105 transition-transform">
              RS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Rodrigo Souza
              </span>
              <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse" />
                Staff / Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <a href="#sobre" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projetos</a>
            <a href="#experiencia" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Trajetória</a>
            <a href="#arquitetura" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Simulador</a>
            <a href="#opensource" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Open Source</a>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-black/10 dark:border-white/10 transition-all active:scale-95 cursor-pointer"
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

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-32 space-y-24 md:space-y-36">
        
        {/* HERO SECTION */}
        <section className="space-y-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-ping inline-block" />
                Senior Software Engineer • iOS & Distributed Systems
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.08]">
                Arquiteturas mobile nativas e sistemas distribuídos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 dark:from-emerald-400 via-teal-600 dark:via-teal-300 to-cyan-600 dark:to-cyan-400">Rust & Swift</span>.
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                Mais de 10 anos construindo aplicações de alta complexidade e missão crítica. 
                Atualmente em uma <strong>fintech de crédito consignado</strong> (Flutter, React Native e .NET),
                com passagens por <strong>Loterias Caixa iOS</strong> (Caixa Econômica Federal), <strong>Banco do Brasil</strong>, <strong>PagSeguro</strong> (Saque FGTS) e <strong>NaturaPay</strong>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projetos"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-950 font-semibold text-sm transition-all active:scale-[0.98] shadow-lg shadow-black/10 dark:shadow-white/5"
                >
                  <span>Explorar Casos de Estudo</span>
                  <div className="w-6 h-6 rounded-full bg-zinc-100/40 dark:bg-zinc-900/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <IconArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <a
                  href="/cv/pt"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-medium border border-black/10 dark:border-white/10 transition-all active:scale-[0.98]"
                >
                  <IconDownload className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                  <span>Baixar CV (PDF)</span>
                </a>
                <a href="/cv/en" className="text-xs font-mono text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">English CV</a>
              </div>

              {/* Quick Contacts & Local Clock */}
              <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <IconMapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Brasília, DF</span>
                </div>
                {currentTime && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <IconClock className="w-3.5 h-3.5" />
                      <span>{currentTime} (UTC-3)</span>
                    </div>
                  </>
                )}
                <span>•</span>
                <a 
                  href="https://github.com/souzaRodrigo61" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <IconBrandGithub className="w-3.5 h-3.5" />
                  <span>souzaRodrigo61</span>
                </a>
                <span>•</span>
                <a 
                  href="https://www.linkedin.com/in/souzarodrigo61" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <IconBrandLinkedin className="w-3.5 h-3.5" />
                  <span>in/souzarodrigo61</span>
                </a>
              </div>
            </div>

            {/* Right Hero Column: Machined Bento Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-1.5 ring-1 ring-black/10 dark:ring-white/10 bg-black/[0.03] dark:bg-white/[0.02] shadow-2xl backdrop-blur-xl card-bezel">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/5 p-6 space-y-5">
                  
                  {/* Card Header Status */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-medium">Arquitetura em Produção</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">2024 • 2026</span>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-950/60 border border-black/10 dark:border-white/5">
                      <div className="text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400 font-mono">R$ 6M+</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">Transações Processadas</div>
                      <div className="text-[10px] text-zinc-500 font-mono mt-1">DivinaPay Cashless</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-950/60 border border-black/10 dark:border-white/5">
                      <div className="text-2xl font-bold tracking-tight text-cyan-600 dark:text-cyan-400 font-mono">100%</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">Otimização de Infra</div>
                      <div className="text-[10px] text-zinc-500 font-mono mt-1">Rust + PostgreSQL</div>
                    </div>
                  </div>

                  {/* Focus Badges */}
                  <div className="space-y-2.5 pt-1">
                    <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
                      <span>Stack Principal Ativa</span>
                      <span className="text-emerald-600 dark:text-emerald-400">10+ Anos Exp</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Swift 5.5+", "Combine", "SwiftUI", "TCA", "Rust Axum", "PostgreSQL", "Flutter", "Kubernetes"].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Micro Terminal Quote */}
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-950/80 border border-black/10 dark:border-white/5 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                    <IconTerminal2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">Loterias Caixa • Saque FGTS • Interchange BB</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Social Proof Bar */}
          <div className="pt-8 border-t border-black/10 dark:border-white/5">
            <div className="text-center mb-5">
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-zinc-600 dark:text-zinc-400">
                Soluções e Engenharia Estratégica para Grandes Players
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {enterpriseClients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-black/10 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all text-center flex flex-col justify-center"
                >
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight">{client.name}</div>
                  <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono mt-0.5 truncate">{client.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS (PROJETOS EM DESTAQUE) */}
        <section id="projetos" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Engenharia Aplicada</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Projetos de Destaque</h2>
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
                >
                  <div className="h-full rounded-3xl p-1.5 ring-1 ring-black/10 dark:ring-white/10 bg-black/[0.03] dark:bg-white/[0.02] hover:ring-emerald-500/30 transition-all duration-300 card-bezel">
                    <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/5 p-6 flex flex-col justify-between space-y-6 group-hover:bg-white/95 dark:group-hover:bg-zinc-900/95 transition-colors">
                      
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
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>

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
        </section>

        {/* INTERACTIVE ARCHITECTURE SIMULATOR */}
        <section id="arquitetura" className="space-y-8 scroll-mt-24">
          <ArchitectureSimulator />
        </section>

        {/* ABOUT & PHILOSOPHY (SOBRE MIM) */}
        <section id="sobre" className="space-y-10 scroll-mt-24">
          <div className="rounded-3xl p-1.5 ring-1 ring-black/10 dark:ring-white/10 bg-black/[0.03] dark:bg-white/[0.02] card-bezel">
            <div className="rounded-[calc(1.5rem-0.375rem)] bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/5 p-8 md:p-12">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Perfil & Filosofia de Engenharia</div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                    Construindo software resiliente onde precisão e escala importam.
                  </h2>
                  <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    Sou um engenheiro de software versátil, focado em resolver gargalos de alta complexidade. 
                    Minha trajetória combina o rigor do <strong>desenvolvimento nativo Apple (iOS/Swift)</strong> com a 
                    eficiência extrema de <strong>sistemas de baixo nível em Rust</strong> e microsserviços modernos.
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
                      <span>Zero-Defect Delivery</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Foco em código limpo, arquitetura desacoplada (Clean Architecture / TCA), testes e CI/CD automatizado com Bitrise e GitHub Actions.
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
        </section>

        {/* CAREER TIMELINE (EXPERIÊNCIA PROFISSIONAL) */}
        <section id="experiencia" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Histórico Profissional</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Trajetória & Experiências</h2>
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
                <div className="rounded-2xl p-1 ring-1 ring-black/10 dark:ring-white/10 bg-black/[0.02] dark:bg-white/[0.01] hover:ring-black/15 dark:hover:ring-white/20 transition-all card-bezel">
                  <div className="rounded-[calc(1rem-0.125rem)] bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-900 p-6 transition-colors space-y-4">
                    
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
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-100/80 dark:bg-zinc-950/60 text-zinc-600 dark:text-zinc-400 border border-black/10 dark:border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE PILLARS (HABILIDADES) */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Domínio Técnico</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Pilares de Engenharia</h2>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              Tecnologias, padrões arquiteturais e frameworks utilizados na entrega de produtos de alto calibre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-1.5 ring-1 ring-black/10 dark:ring-white/10 bg-black/[0.03] dark:bg-white/[0.02] card-bezel"
              >
                <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/5 p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-200 dark:bg-zinc-800 border border-black/10 dark:border-white/10 flex items-center justify-center shadow-inner">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pillar.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="pt-3 border-t border-black/10 dark:border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.badges.map((b) => (
                        <span key={b} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-200/90 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/5">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OPEN SOURCE & COMMUNITY */}
        <section id="opensource" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Comunidade & Pesquisa</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Projetos Open Source</h2>
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
                className="group block rounded-3xl p-1.5 ring-1 ring-black/10 dark:ring-white/10 bg-black/[0.03] dark:bg-white/[0.02] hover:ring-emerald-500/30 transition-all card-bezel"
              >
                <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/5 p-6 flex flex-col justify-between space-y-5">
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

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/10 dark:border-white/5">
                    {repo.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* EDUCATION & ACADEMIC BACKGROUND */}
        <section id="formacao" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Fundamentação Acadêmica</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Formação & Especializações</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-1.5 ring-1 ring-black/10 dark:ring-white/10 bg-black/[0.03] dark:bg-white/[0.02] card-bezel"
              >
                <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/5 p-6 flex flex-col justify-between space-y-4">
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
        </section>

        {/* DIRECT CONTACT & CONNECT SECTION */}
        <section id="contato" className="scroll-mt-24">
          <div className="rounded-3xl p-1.5 ring-1 ring-black/10 dark:ring-white/10 bg-gradient-to-b from-black/[0.04] dark:from-white/[0.04] to-emerald-500/[0.03] card-bezel">
            <div className="rounded-[calc(1.5rem-0.375rem)] bg-white/95 dark:bg-zinc-900/95 border border-black/10 dark:border-white/5 p-8 md:p-14 text-center space-y-8">
              
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse" />
                  Pronto para novos desafios e arquiteturas
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Vamos construir algo de alto impacto juntos?
                </h2>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Disponível para projetos estratégicos, consultoria em arquitetura iOS / Rust, e posições de liderança técnica.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:souza.rodrigo61@gmail.com?subject=Contato%20via%20portf%C3%B3lio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 font-semibold text-sm transition-all active:scale-95 shadow-xl shadow-emerald-500/20"
                >
                  <IconMail className="w-4 h-4" />
                  <span>Enviar email</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/souzarodrigo61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-sm border border-black/10 dark:border-white/10 transition-all active:scale-95"
                >
                  <IconBrandLinkedin className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                  <span>Conectar no LinkedIn</span>
                </a>

                <a
                  href="/cv/pt"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-sm border border-black/10 dark:border-white/10 transition-all active:scale-95"
                >
                  <IconDownload className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                  <span>Baixar CV (PDF)</span>
                </a>
                <a href="/cv/en" className="text-xs font-mono text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">English CV</a>
              </div>

              <button
                onClick={handleCopyEmail}
                className="mx-auto flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
              >
                {copiedEmail ? <IconCheck className="w-3.5 h-3.5" /> : <IconCopy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Email copiado!" : "souza.rodrigo61@gmail.com — clique para copiar"}</span>
              </button>

              <div className="pt-8 border-t border-black/10 dark:border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <IconMapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Brasília, DF (UTC-3)</span>
                </div>
                <div>•</div>
                <div>Português (Nativo) • Inglês (Intermediário)</div>
                <div>•</div>
                <div>iOS • Rust • Cloud • FinTech</div>
              </div>

            </div>
          </div>
        </section>

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
