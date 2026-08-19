// Fonte única do CV — editar aqui e fazer deploy regenera /cv/pt e /cv/en.

export interface CvExperience {
  role: string
  company: string
  location?: string
  period: string
  bullets: string[]
}

export interface CvProject {
  name: string
  description: string
  link?: string
}

export interface CvEducation {
  title: string
  institution: string
  period: string
}

export interface CvData {
  name: string
  title: string
  location: string
  contacts: string[]
  summary: string
  sections: {
    experience: string
    projects: string
    education: string
    skills: string
    languages: string
  }
  experiences: CvExperience[]
  projects: CvProject[]
  education: CvEducation[]
  skills: { group: string; items: string }[]
  languages: string[]
}

const CONTACTS = [
  "Brasília, DF, Brasil",
  "souza.rodrigo61@gmail.com",
  "linkedin.com/in/souzarodrigo61",
  "github.com/souzaRodrigo61",
  "souzarodrigo.com.br",
]

export const cv: Record<"pt" | "en", CvData> = {
  pt: {
    name: "Rodrigo Santos de Souza",
    title: "Senior Software Engineer — Mobile & Sistemas Distribuídos",
    location: "Brasília, DF, Brasil",
    contacts: CONTACTS,
    summary:
      "Engenheiro de software sênior com 10+ anos em aplicações de missão crítica para instituições financeiras (Caixa, Banco do Brasil, PagSeguro) e fintechs. Especialista em mobile nativo e multiplataforma (Swift/SwiftUI, Flutter, React Native) e em backends de alta performance em Rust e .NET. Histórico de entregas ponta a ponta: do funil de crédito digital com biometria antifraude ao processamento de R$ 6M+ em pagamentos cashless.",
    sections: {
      experience: "Experiência Profissional",
      projects: "Projetos Selecionados",
      education: "Formação Acadêmica",
      skills: "Competências Técnicas",
      languages: "Idiomas",
    },
    experiences: [
      {
        role: "Desenvolvedor Full-Stack Mobile",
        company: "Vale Consignado (fintech de crédito consignado)",
        period: "02/2026 – presente",
        bullets: [
          "Construí do zero o funil de crédito consignado CLT no app Flutter (435 commits): simulação, biometria/documentoscopia antifraude, OTP, assinatura eletrônica e desembolso, com retomada de jornada interrompida.",
          "Consolidei a orquestração da Home (múltiplos pollers e cubits) em arquitetura única com BLoC + restartable(), eliminando condições de corrida e bugs de produção (tela branca, polling concorrente).",
          "Desenvolvi o SDK white-label React Native para parceiros (modelo B2B2C): publicação npm com Trusted Publishing (OIDC), criptografia de CPF ponta a ponta (RSA-OAEP + HMAC-SHA256) e kill switch remoto por feature flag.",
          "Implementei observabilidade com Datadog (RUM + Logs) em Flutter e React Native, com 100% de cobertura de testes nos módulos críticos de telemetria, cache e feature flags.",
          "Contribuí no microsserviço .NET de decisão de crédito (elegibilidade por parceiro, descriptografia RSA e hash HMAC para lookup seguro) e no deep linking universal do webapp Next.js.",
        ],
      },
      {
        role: "iOS Developer",
        company: "Qintess — Loterias Caixa (Caixa Econômica Federal)",
        period: "10/2022 – 12/2025",
        bullets: [
          "Desenvolvi o aplicativo iOS das Loterias Caixa, usado por milhões de usuários, em Swift 5.5+ (Storyboard/XIB, MVC), em time de 4 desenvolvedores com git flow.",
          "Implementei acessibilidade VoiceOver e integração com Apple Wallet, garantindo conformidade com as diretrizes da Apple.",
        ],
      },
      {
        role: "iOS Developer",
        company: "Invillia — PagSeguro",
        period: "12/2021 – 09/2022",
        bullets: [
          "Desenvolvi a plataforma de saque-aniversário FGTS no ecossistema PagSeguro (Swift, SwiftUI, Flutter Method Channel), com feature toggles e CI/CD no Bitrise.",
        ],
      },
      {
        role: "Mobile Developer",
        company: "Vizir — Natura & Co",
        period: "04/2021 – 12/2021",
        bullets: [
          "Desenvolvi Natura Pay e Natura FVN em projeto híbrido iOS nativo + React Native (iOS Native Modules), com backend Node.js/TypeScript na AWS.",
        ],
      },
      {
        role: "Analista de Sistemas Sênior",
        company: "Connectis — Banco do Brasil",
        period: "10/2019 – 11/2020",
        bullets: [
          "Migrei o sistema de validação de taxas de intercâmbio das bandeiras (Visa, Mastercard, Elo) do mainframe COBOL para arquitetura híbrida com Java Quarkus, Spring Batch e Angular 8 na plataforma 3.0 do BB.",
        ],
      },
      {
        role: "Analista de Sistemas Pleno",
        company: "Cast Group — Banco do Brasil",
        period: "08/2018 – 11/2019",
        bullets: [
          "Desenvolvi o projeto Blockchain SBP (Sistema Brasileiro de Poderes) com Hyperledger Fabric, Node.js e OpenShift, além de sustentação de rotinas mainframe (COBOL/Natural).",
        ],
      },
      {
        role: "Analista de Sistemas Júnior",
        company: "Stefanini",
        period: "06/2016 – 08/2018",
        bullets: [
          "Mantive e migrei rotinas mainframe (COBOL e Natural) e desenvolvi rotinas em Java com frontend AngularJS.",
        ],
      },
    ],
    projects: [
      {
        name: "DivinaPay (Divina Cashless) — Sócio Desenvolvedor",
        description:
          "Plataforma de pagamentos cashless para eventos: app Flutter, backend Rust (Axum/Salvo) e PostgreSQL. Processou R$ 6M+ em transações em 30+ eventos, com picos elevados de usuários simultâneos.",
        link: "divinapay.com",
      },
      {
        name: "Sistema de gestão de campanhas — Desenvolvedor (trabalho voluntário)",
        description:
          "Plataforma de campanhas e gestão financeira em Next.js + Rust com arquitetura multi-tenant, mantida como serviço voluntário; redução de 100% do custo fixo de cloud (USD 16 -> USD 0) e migração para VPS autogerenciada.",
      },
      {
        name: "codemode-cli — Open source",
        description:
          "Binário Rust de programmatic tool calling para agentes de IA: um script Rhai sandboxed substitui N tool-calls por 1 (medido: 6 -> 1, redução de 83%).",
        link: "github.com/SouzaRodrigo61/codemode-cli",
      },
    ],
    education: [
      {
        title: "Pós-graduação em Desenvolvimento Mobile",
        institution: "Universidade Católica de Brasília (UCB)",
        period: "2019 – 2021",
      },
      {
        title: "Bacharelado em Sistemas de Informação",
        institution: "Centro Universitário Projeção",
        period: "2016 – 2019",
      },
    ],
    skills: [
      { group: "Mobile", items: "Swift, SwiftUI, Combine, UIKit, TCA, Flutter, Dart, BLoC, React Native, TypeScript" },
      { group: "Backend", items: "Rust (Axum/Salvo), .NET Core, C#, Node.js, Java Quarkus, PostgreSQL, MongoDB, Supabase" },
      { group: "Infra & Qualidade", items: "Docker, Kubernetes, GitHub Actions, Bitrise, Datadog (RUM/Logs), OpenFeature, Maestro e2e, testes unitários" },
    ],
    languages: ["Português (nativo)", "Inglês (intermediário)"],
  },
  en: {
    name: "Rodrigo Santos de Souza",
    title: "Senior Software Engineer — Mobile & Distributed Systems",
    location: "Brasília, Brazil",
    contacts: CONTACTS,
    summary:
      "Senior software engineer with 10+ years building mission-critical applications for financial institutions (Caixa, Banco do Brasil, PagSeguro) and fintechs. Specialist in native and cross-platform mobile (Swift/SwiftUI, Flutter, React Native) and high-performance backends in Rust and .NET. Track record of end-to-end delivery: from a digital credit funnel with anti-fraud biometrics to processing R$ 6M+ (BRL) in cashless payments.",
    sections: {
      experience: "Professional Experience",
      projects: "Selected Projects",
      education: "Education",
      skills: "Technical Skills",
      languages: "Languages",
    },
    experiences: [
      {
        role: "Full-Stack Mobile Developer",
        company: "Vale Consignado (payroll-loan fintech)",
        period: "02/2026 – present",
        bullets: [
          "Built the payroll-loan credit funnel from scratch in the main Flutter app (435 commits): simulation, anti-fraud biometrics/document verification, OTP, e-signature and disbursement, with interrupted-journey resumption.",
          "Consolidated home-screen orchestration (multiple pollers and cubits) into a single BLoC + restartable() architecture, eliminating race conditions and production bugs (blank screen, concurrent polling).",
          "Developed the white-label React Native SDK for partners (B2B2C model): npm Trusted Publishing (OIDC), end-to-end document encryption (RSA-OAEP + HMAC-SHA256) and remote feature-flag kill switch.",
          "Implemented observability with Datadog (RUM + Logs) across Flutter and React Native, with 100% test coverage in critical telemetry, cache and feature-flag modules.",
          "Contributed to the .NET credit-decision microservice (per-partner eligibility, RSA decryption and HMAC hashing for secure lookup) and to universal deep linking in the Next.js web app.",
        ],
      },
      {
        role: "iOS Developer",
        company: "Qintess — Loterias Caixa (Caixa Econômica Federal, national lottery app)",
        period: "10/2022 – 12/2025",
        bullets: [
          "Developed the official Caixa Lotteries iOS app, used by millions of users, in Swift 5.5+ (Storyboard/XIB, MVC), in a 4-developer team using git flow.",
          "Implemented VoiceOver accessibility and Apple Wallet integration, ensuring compliance with Apple guidelines.",
        ],
      },
      {
        role: "iOS Developer",
        company: "Invillia — PagSeguro",
        period: "12/2021 – 09/2022",
        bullets: [
          "Developed the FGTS anniversary-withdrawal platform in the PagSeguro ecosystem (Swift, SwiftUI, Flutter Method Channel), with feature toggles and CI/CD on Bitrise.",
        ],
      },
      {
        role: "Mobile Developer",
        company: "Vizir — Natura & Co",
        period: "04/2021 – 12/2021",
        bullets: [
          "Developed Natura Pay and Natura FVN in a hybrid native-iOS + React Native project (iOS Native Modules), with a Node.js/TypeScript backend on AWS.",
        ],
      },
      {
        role: "Senior Systems Analyst",
        company: "Connectis — Banco do Brasil",
        period: "10/2019 – 11/2020",
        bullets: [
          "Migrated the card-network interchange-fee validation system (Visa, Mastercard, Elo) from COBOL mainframe to a hybrid architecture with Java Quarkus, Spring Batch and Angular 8 on BB's 3.0 platform.",
        ],
      },
      {
        role: "Systems Analyst",
        company: "Cast Group — Banco do Brasil",
        period: "08/2018 – 11/2019",
        bullets: [
          "Developed the SBP Blockchain project (Brazilian powers-of-attorney system) with Hyperledger Fabric, Node.js and OpenShift, plus mainframe maintenance (COBOL/Natural).",
        ],
      },
      {
        role: "Junior Systems Analyst",
        company: "Stefanini",
        period: "06/2016 – 08/2018",
        bullets: [
          "Maintained and migrated mainframe routines (COBOL and Natural) and developed Java services with AngularJS frontends.",
        ],
      },
    ],
    projects: [
      {
        name: "DivinaPay (Divina Cashless) — Founding Developer",
        description:
          "Cashless payments platform for live events: Flutter app, Rust backend (Axum/Salvo) and PostgreSQL. Processed R$ 6M+ (BRL) across 30+ events with high concurrent-user peaks.",
        link: "divinapay.com",
      },
      {
        name: "Campaign management system — Developer (volunteer work)",
        description:
          "Campaign and financial-management platform in Next.js + Rust with multi-tenant architecture, maintained as volunteer work; cut fixed cloud costs by 100% (USD 16 -> USD 0) and migrated to self-managed VPS infrastructure.",
      },
      {
        name: "codemode-cli — Open source",
        description:
          "Rust binary for programmatic tool calling in AI agents: one sandboxed Rhai script replaces N tool calls (measured: 6 -> 1, an 83% reduction).",
        link: "github.com/SouzaRodrigo61/codemode-cli",
      },
    ],
    education: [
      {
        title: "Postgraduate degree in Mobile Development",
        institution: "Universidade Católica de Brasília (UCB)",
        period: "2019 – 2021",
      },
      {
        title: "B.Sc. in Information Systems",
        institution: "Centro Universitário Projeção",
        period: "2016 – 2019",
      },
    ],
    skills: [
      { group: "Mobile", items: "Swift, SwiftUI, Combine, UIKit, TCA, Flutter, Dart, BLoC, React Native, TypeScript" },
      { group: "Backend", items: "Rust (Axum/Salvo), .NET Core, C#, Node.js, Java Quarkus, PostgreSQL, MongoDB, Supabase" },
      { group: "Infra & Quality", items: "Docker, Kubernetes, GitHub Actions, Bitrise, Datadog (RUM/Logs), OpenFeature, Maestro e2e, unit testing" },
    ],
    languages: ["Portuguese (native)", "English (intermediate)"],
  },
}
