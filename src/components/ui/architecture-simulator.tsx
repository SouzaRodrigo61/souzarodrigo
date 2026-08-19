"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  IconDeviceMobile,
  IconServer,
  IconBuildingBank,
  IconCpu,
  IconBolt,
  IconDatabase,
  IconCheck,
  IconArrowRight,
  IconSparkles,
  IconActivity
} from "@tabler/icons-react"

type SystemArchitecture = {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  tag: string
  metrics: { label: string; value: string }[]
  steps: {
    title: string
    tech: string
    description: string
    latency: string
  }[]
  summary: string
}

const architectures: SystemArchitecture[] = [
  {
    id: "ios-loterias",
    title: "Loterias Caixa iOS Architecture",
    subtitle: "Mobile Reativo de Grande Porte (Milhões de Usuários)",
    icon: <IconDeviceMobile className="w-5 h-5 text-emerald-400" />,
    tag: "iOS • Swift 5.5 • Combine",
    metrics: [
      { label: "Taxa de Atualização", value: "120 FPS" },
      { label: "Arquitetura", value: "MVVM + Combine" },
      { label: "Acessibilidade", value: "100% VoiceOver" }
    ],
    steps: [
      {
        title: "1. Entrada de Dados Reativa",
        tech: "Combine Publishers",
        description: "Streams de eventos assíncronos desacoplados da main thread.",
        latency: "< 2ms"
      },
      {
        title: "2. Sincronização de Estado",
        tech: "Diffable Data Sources",
        description: "Cálculo diferencial em background eliminando qualquer jank ou stutter.",
        latency: "< 8ms"
      },
      {
        title: "3. Cache & Persistência Local",
        tech: "Core Data & UserDefaults",
        description: "Armazenamento offline-first com controle de ciclo de vida do iOS.",
        latency: "< 5ms"
      },
      {
        title: "4. Renderização & Feedback Tátil",
        tech: "UIKit / SwiftUI Views",
        description: "Apresentação adaptativa para apostas e integração nativa com Apple Wallet.",
        latency: "Instant"
      }
    ],
    summary: "Arquitetura desenhada para garantir máxima estabilidade e conformidade estrita com padrões de acessibilidade e ciclo de vida Apple."
  },
  {
    id: "rust-divinapay",
    title: "DivinaPay High-Throughput Engine",
    subtitle: "Processamento de Eventos e Pagamentos Cashless",
    icon: <IconServer className="w-5 h-5 text-cyan-400" />,
    tag: "Rust • Axum • PostgreSQL",
    metrics: [
      { label: "Volume Processado", value: "R$ 6M+" },
      { label: "Latência Média", value: "0.8 ms" },
      { label: "Concorrência", value: "Zero Lock" }
    ],
    steps: [
      {
        title: "1. Ingestão de Transações POS",
        tech: "Axum Async Router",
        description: "Recebimento de requisições concorrentes de dezenas de maquininhas simultâneas.",
        latency: "0.2ms"
      },
      {
        title: "2. Validação de Saldo & Regras",
        tech: "Rust Memory-Safe Core",
        description: "Checagem de limites, tokens criptografados e integridade de saldo em memória.",
        latency: "0.3ms"
      },
      {
        title: "3. Persistência Relacional",
        tech: "PostgreSQL & Supabase",
        description: "Transações ACID em lote com pool de conexões otimizado.",
        latency: "1.2ms"
      },
      {
        title: "4. Broadcast em Tempo Real",
        tech: "WebSockets / Svelte 5",
        description: "Atualização instantânea dos dashboards operacionais dos organizadores de eventos.",
        latency: "15ms"
      }
    ],
    summary: "Infraestrutura escalada em VPS com Coolify que substituiu custos de cloud caros por eficiência pura em Rust com zero idle memory."
  },
  {
    id: "bb-interchange",
    title: "Banco do Brasil Interchange Clearing",
    subtitle: "Modernização Mainframe COBOL → Quarkus Cloud",
    icon: <IconBuildingBank className="w-5 h-5 text-amber-400" />,
    tag: "Java Quarkus • Spring Batch • K8s",
    metrics: [
      { label: "Bandeiras Validadas", value: "Visa / Master / Elo" },
      { label: "Processamento", value: "Em Lote & Online" },
      { label: "Ambiente", value: "OpenShift / K8s" }
    ],
    steps: [
      {
        title: "1. Recepção de Arquivos de Bandeiras",
        tech: "Spring Batch Ingest",
        description: "Parsing e saneamento de arquivos massivos de transações das credenciadoras.",
        latency: "Batch stream"
      },
      {
        title: "2. Motor de Regras de Intercâmbio",
        tech: "Quarkus Microservices",
        description: "Cálculo exato de taxas de intercâmbio (interchange fees) por modalidade e emissor.",
        latency: "< 1.5ms/tx"
      },
      {
        title: "3. Integração com Core Bancário 3.0",
        tech: "COBOL Online APIs / BB 3.0",
        description: "Conexão híbrida e segura com os sistemas legados de liquidação do Banco do Brasil.",
        latency: "Auditada"
      },
      {
        title: "4. Monitoramento & Conciliação",
        tech: "Angular & ElasticSearch",
        description: "Painel de auditoria e auditoria contábil de divergências em tempo real.",
        latency: "Real-time"
      }
    ],
    summary: "Ponte arquitetural pioneira entre a robustez histórica do mainframe e a agilidade escalável de microsserviços em containers."
  }
]

export function ArchitectureSimulator() {
  const [activeArchId, setActiveArchId] = useState<string>("ios-loterias")
  const activeArch = architectures.find((a) => a.id === activeArchId) || architectures[0]

  return (
    <div className="rounded-3xl p-1.5 ring-1 ring-white/10 bg-white/[0.02] shadow-2xl card-bezel overflow-hidden">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-zinc-900/90 border border-white/5 p-6 md:p-8 space-y-8">
        
        {/* Header & Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
              <IconActivity className="w-4 h-4 animate-pulse" />
              <span>Simulador Interativo de Topologia</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-50">
              Engenharia de Sistemas em Ação
            </h3>
            <p className="text-xs text-zinc-400">
              Selecione uma arquitetura de produção para inspecionar os pipelines e métricas.
            </p>
          </div>

          {/* Architecture Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-zinc-950/80 border border-white/5">
            {architectures.map((arch) => {
              const isActive = arch.id === activeArchId
              return (
                <button
                  key={arch.id}
                  onClick={() => setActiveArchId(arch.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? "bg-zinc-800 text-zinc-100 shadow-md border border-white/10 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                  }`}
                >
                  <span className="scale-90">{arch.icon}</span>
                  <span className="hidden sm:inline">{arch.title.split(" ")[0]}</span>
                  <span className="sm:hidden">{arch.title.split(" ")[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Architecture Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeArch.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Top Overview & Metric Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-white/5 text-xs font-mono text-emerald-400">
                  {activeArch.tag}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-zinc-100">
                  {activeArch.title}
                </h4>
                <p className="text-xs text-zinc-400">
                  {activeArch.subtitle}
                </p>
              </div>

              {/* Metrics Pill Grid */}
              <div className="grid grid-cols-3 gap-3">
                {activeArch.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-zinc-950/70 border border-white/5 text-center"
                  >
                    <div className="text-sm md:text-base font-bold text-zinc-100 font-mono">{m.value}</div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Pipeline Steps */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                <span>Fluxo de Execução do Pipeline</span>
                <span className="text-emerald-400 font-medium">End-to-End Trace</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeArch.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative group p-4 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                          {step.title}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-white/5">
                          {step.latency}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-zinc-200">{step.tech}</div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                      <IconCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verificado em Produção</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Summary Callout */}
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 flex items-center gap-3.5 text-xs text-zinc-300">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <IconSparkles className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="leading-relaxed font-mono text-[11px] md:text-xs">
                {activeArch.summary}
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
