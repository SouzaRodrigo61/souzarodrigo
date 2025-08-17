import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-foreground">Rodrigo Souza</div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
              <a href="#projetos" className="text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
              <a href="#experiencias" className="text-muted-foreground hover:text-foreground transition-colors">Experiências</a>
              <a href="#formacao" className="text-muted-foreground hover:text-foreground transition-colors">Formação</a>
              <a href="#habilidades" className="text-muted-foreground hover:text-foreground transition-colors">Habilidades</a>
              <a href="#open-source" className="text-muted-foreground hover:text-foreground transition-colors">Open Source</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Rodrigo Souza
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Software Engineer
            </p>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especialista em soluções de alta complexidade, desde aplicativos iOS nativos até sistemas 
              de processamento de dados em larga escala. Experiência comprovada em projetos estratégicos 
              para grandes empresas como Caixa Econômica Federal, PagSeguro e Banco do Brasil.
            </p> */}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Ver Projetos
            </Button>
            <a href="/Rodrigo_Santos_de_Souza_-_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Baixar CV
              </Button>
            </a>
          </div>

          {/* Contato no Hero */}
          <div className="pt-8 border-t border-border/40">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-muted-foreground">souza.rodrigo61@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-muted-foreground">Brasília, Brasil</span>
              </div>
              <div className="flex space-x-2">
                <a href="https://github.com/souzaRodrigo61/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/souzarodrigo61" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground">
              Desenvolvedor Mobile & Fullstack apaixonado por soluções de alta complexidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor versátil e orientado a resultados, com histórico comprovado na construção 
                de soluções de alta complexidade, desde aplicativos de grande escala até sistemas de processamento de dados.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atualmente atuo no app Loterias iOS da Caixa Econômica Federal. Minha carreira inclui projetos 
                estratégicos no PagSeguro e no app NaturaPay, além de contribuições para o Banco do Brasil no 
                processamento de arquivos de transações (interchange rate) da Visa, Mastercard e Elo.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Especialidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Mobile Development</Badge>
                    <Badge variant="secondary">iOS/Swift</Badge>
                    <Badge variant="secondary">Flutter</Badge>
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Rust</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Cloud Computing</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos de Destaque Section */}
      <section id="projetos" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Projetos de Destaque</h2>
            <p className="text-lg text-muted-foreground">
              Projetos que demonstram minha capacidade técnica e impacto nos negócios
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>DivinaPay (Divina Cashless)</CardTitle>
                <CardDescription>Sócio Desenvolvedor • 2024/01 - Presente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Plataforma para Gestão e Pagamentos em Eventos. Sistema moderno desenvolvido com Flutter 3.31+, 
                  backend robusto em Rust (Axum e Salvo.rs), PostgreSQL via Supabase e frontend interativo em Svelte 5.
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Impacto:</p>
                  <p className="text-sm text-muted-foreground">
                    Processou mais de R$ 6 milhões em transações, atendendo mais de 30 eventos 
                    com elevados picos de usuários concorrentes.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Flutter 3.31+</Badge>
                  <Badge variant="outline" className="text-xs">Rust</Badge>
                  <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                  <Badge variant="outline" className="text-xs">Svelte 5</Badge>
                  <Badge variant="outline" className="text-xs">Coolify</Badge>
                </div>
                <a href="https://divinapay.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:underline">
                  divinapay.com →
                </a>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Sistema de Gerenciamento para Igrejas</CardTitle>
                <CardDescription>Gestor Financeiro • 2023/03 - Presente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Sistema de gerenciamento de campanhas com evolução de Flutter para Next.js + Rust, 
                  implementando arquitetura multi-tenant e otimização de infraestrutura.
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Resultado:</p>
                  <p className="text-muted-foreground">
                    Redução de 100% nos custos (USD 16 → USD 0) na plataforma Railway com o uso do Rust e PostgreSQL. 
                    Atualmente estou em processo de migração para VPS no Brasil com Coolify para aumentar a velocidade de resposta e implementação de multi-tenant.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Next.js</Badge>
                  <Badge variant="outline" className="text-xs">Rust</Badge>
                  <Badge variant="outline" className="text-xs">Multi-tenant</Badge>
                  <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                  <Badge variant="outline" className="text-xs">VPS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experiências Section */}
      <section id="experiencias" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experiência Profissional</h2>
            <p className="text-lg text-muted-foreground">
              Minha jornada profissional e projetos realizados
            </p>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>iOS Developer</CardTitle>
                    <CardDescription>Qintess • Out, 2022 - Presente</CardDescription>
                  </div>
                  <Badge variant="secondary">Atual</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Desenvolvimento do aplicativo iOS das Loterias (Caixa Econômica Federal). 
                  Trabalho com 4 desenvolvedores iOS seguindo git flow e deploy via Xcode archive.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Swift 5.5</Badge>
                  <Badge variant="outline">Storyboard/XIB</Badge>
                  <Badge variant="outline">MVC</Badge>
                  <Badge variant="outline">Voice Over</Badge>
                  <Badge variant="outline">Apple Wallet</Badge>
                  <Badge variant="outline">Xcode 15+</Badge>
                  <Badge variant="outline">Git Flow</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>iOS Developer</CardTitle>
                <CardDescription>Invillia • Dez, 2021 - Set, 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Desenvolvimento da plataforma de saque aniversário (FGTS) no contexto do PagSeguro. 
                  Implementação de feature toggles e CI/CD no Bitrise.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Swift 5.4</Badge>
                  <Badge variant="outline">XIB/ViewCode</Badge>
                  <Badge variant="outline">SwiftUI</Badge>
                  <Badge variant="outline">Flutter Method Channel</Badge>
                  <Badge variant="outline">Bitrise CI/CD</Badge>
                  <Badge variant="outline">Feature Toggles</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mobile Developer</CardTitle>
                <CardDescription>Vizir • Abr, 2021 - Dez, 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Desenvolvimento dos projetos Natura Pay e Natura FVN. Projeto híbrido com integração 
                  entre código nativo iOS e React Native usando iOS Native Modules.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Swift</Badge>
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">ViewCode</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Elasticsearch</Badge>
                  <Badge variant="outline">GitHub Actions</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analista de Sistema</CardTitle>
                <CardDescription>Qintess • Nov, 2020 - Mar, 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Projeto na Polícia Federal. Atuação com desenvolvimento de sistemas legados e sustentação.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Java 6-8</Badge>
                  <Badge variant="outline">Sistemas Legados</Badge>
                  <Badge variant="outline">Sustentação</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analista de Sistema</CardTitle>
                <CardDescription>Connectis • Out, 2019 - Nov, 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cliente: Banco do Brasil. Projeto Interchange - VIP - Validação das taxas de intercâmbio 
                  das bandeiras do Banco do Brasil.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Java Quarkus</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">Spring Batch</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Jenkins</Badge>
                  <Badge variant="outline">Rancher</Badge>
                  <Badge variant="outline">ElasticSearch</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analista de Sistema Pleno</CardTitle>
                <CardDescription>Cast Group • Ago, 2018 - Nov, 2019</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cliente: Banco do Brasil. Projetos: Blockchain SBP (Sistema Brasileiro de Poderes), 
                  Evidenciação de modelos de dados e Manter reunião da AD.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Hyperledger Fabric</Badge>
                  <Badge variant="outline">OpenShift</Badge>
                  <Badge variant="outline">CouchDB</Badge>
                  <Badge variant="outline">COBOL</Badge>
                  <Badge variant="outline">JCL</Badge>
                  <Badge variant="outline">AngularJS</Badge>
                  <Badge variant="outline">Java</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analista de Sistema Junior</CardTitle>
                <CardDescription>Stefanini • Jun, 2016 - Ago, 2018</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manutenção e migração de rotinas mainframe (COBOL e Natural). 
                  Desenvolvimento de rotinas em Java com frontend em AngularJS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">COBOL</Badge>
                  <Badge variant="outline">Natural</Badge>
                  <Badge variant="outline">Mainframe</Badge>
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">AngularJS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section id="formacao" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Formação Acadêmica</h2>
            <p className="text-lg text-muted-foreground">
              Minha jornada educacional e especializações
            </p>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Pós-graduação em Mobile</CardTitle>
                    <CardDescription>Universidade Católica de Brasília • Agosto 2019 — Dezembro 2021</CardDescription>
                  </div>
                  <Badge variant="secondary">Concluído</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pós-graduação focada no desenvolvimento de aplicativos móveis. Construí um projeto sobre health tracking 
                  do COVID nos países brasileiros utilizando Swift (SwiftUI) e toda a stack do mundo iOS.
                </p>
                <p className="text-muted-foreground mb-4">
                  Trabalhei no projeto de conclusão do curso sobre trader esportivo, onde utilizei a mesma stack 
                  para desenvolvimento da aplicação.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Swift</Badge>
                  <Badge variant="outline">SwiftUI</Badge>
                  <Badge variant="outline">Health Tracking</Badge>
                  <Badge variant="outline">COVID-19</Badge>
                  <Badge variant="outline">Trader Esportivo</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Sistemas da Informação</CardTitle>
                    <CardDescription>Centro Universitário Projeção • Agosto 2016 — Dezembro 2019</CardDescription>
                  </div>
                  <Badge variant="secondary">Concluído</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Graduação em Sistemas da Informação, fornecendo base sólida em desenvolvimento de software, 
                  arquitetura de sistemas e gestão de projetos de TI.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Swift</Badge>
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">Redes de Computadores</Badge>
                  <Badge variant="outline">Arquitetura de Computadores</Badge>
                  <Badge variant="outline">Gestão de TI</Badge>
                  <Badge variant="outline">Gestão de Projetos</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>  
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Ciências da Computação</CardTitle>
                    <CardDescription>Universidade Católica de Brasília • 2014 — 2015</CardDescription>
                  </div>
                  <Badge variant="secondary">Não pude finalizar</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Início da formação em Ciências da Computação, estabelecendo fundamentos teóricos e práticos 
                  em programação e computação.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">C</Badge>
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">Banco de Dados</Badge>
                  <Badge variant="outline">Arquitetura de Computadores</Badge>
                  <Badge variant="outline">Empreendedorismo</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
            <p className="text-lg text-muted-foreground">
              Tecnologias e ferramentas que utilizo no dia a dia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>Desenvolvimento nativo e cross-platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">iOS/Swift</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Xcode</Badge>
                  <Badge variant="secondary">Android/Kotlin</Badge>
                  <Badge variant="secondary">Storyboard/XIB</Badge>
                  <Badge variant="secondary">SwiftUI</Badge>
                  <Badge variant="secondary">Jetpack Compose</Badge>
                  <Badge variant="secondary">Material 3</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frontend & Web</CardTitle>
                <CardDescription>Interfaces modernas e responsivas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Svelte 5</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend & Cloud</CardTitle>
                <CardDescription>APIs robustas e infraestrutura escalável</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Rust</Badge>
                  <Badge variant="secondary">Java/Spring</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Ferramentas & DevOps</CardTitle>
                <CardDescription>CI/CD e colaboração</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git/GitHub</Badge>
                  <Badge variant="secondary">Bitrise CI/CD</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                  <Badge variant="secondary">ElasticSearch</Badge>
                  <Badge variant="secondary">Coolify</Badge>
                  <Badge variant="secondary">VPS</Badge>
                  <Badge variant="secondary">Railway</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soft Skills & Idiomas</CardTitle>
                <CardDescription>Habilidades interpessoais e comunicação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Liderança & Colaboração</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Ponto Focal</Badge>
                      <Badge variant="outline">Perfil Ativo</Badge>
                      <Badge variant="outline">Scrum</Badge>
                      <Badge variant="outline">Times Multi-complementares</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Idiomas</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Português (Nativo)</Badge>
                      <Badge variant="outline">Inglês (Intermediário)</Badge>
                      <Badge variant="outline">Alemão (Iniciante)</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Colaboração com</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Product Owners</Badge>
                      <Badge variant="outline">Stakeholders</Badge>
                      <Badge variant="outline">Backend Teams</Badge>
                      <Badge variant="outline">Mobile Teams</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projetos Open Source Section */}
      <section id="open-source" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Projetos Open Source</h2>
            <p className="text-lg text-muted-foreground">
              Contribuições para a comunidade de desenvolvedores
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>SwiftDataTCA</CardTitle>
                <CardDescription>Swift • 82 stars • 11 forks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Sample sobre SwiftData com Composable Architecture em fase inicial de desenvolvimento. 
                  Projeto que demonstra a integração entre SwiftData e TCA (The Composable Architecture).
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Swift</Badge>
                    <Badge variant="outline" className="text-xs">SwiftData</Badge>
                    <Badge variant="outline" className="text-xs">TCA</Badge>
                    <Badge variant="outline" className="text-xs">iOS</Badge>
                  </div>
                </div>
                <a href="https://github.com/souzaRodrigo61/SwiftDataTCA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:underline">
                  Ver no GitHub →
                </a>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>cashew</CardTitle>
                <CardDescription>Swift • 3 stars</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Projeto em Swift que demonstra boas práticas de desenvolvimento iOS e arquitetura limpa.
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Swift</Badge>
                    <Badge variant="outline" className="text-xs">iOS</Badge>
                    <Badge variant="outline" className="text-xs">Clean Architecture</Badge>
                  </div>
                </div>
                <a href="https://github.com/souzaRodrigo61/cashew" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:underline">
                  Ver no GitHub →
                </a>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>ios-health-tracking</CardTitle>
                <CardDescription>Swift • 4 stars • 1 fork</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Health tracking - Covid e outras condições de saúde. Aplicativo iOS para monitoramento 
                  de saúde com foco em rastreamento de sintomas relacionados ao Covid-19.
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Swift</Badge>
                    <Badge variant="outline" className="text-xs">HealthKit</Badge>
                    <Badge variant="outline" className="text-xs">iOS</Badge>
                    <Badge variant="outline" className="text-xs">Covid Tracking</Badge>
                  </div>
                </div>
                <a href="https://github.com/souzaRodrigo61/ios-health-tracking" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:underline">
                  Ver no GitHub →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Rodrigo Souza. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
