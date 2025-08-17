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
              <a href="#habilidades" className="text-muted-foreground hover:text-foreground transition-colors">Habilidades</a>
              <a href="#experiencias" className="text-muted-foreground hover:text-foreground transition-colors">Experiências</a>
              <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a>
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
              Desenvolvedor Fullstack
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformando ideias em experiências digitais excepcionais através de código limpo, 
              arquitetura escalável e soluções inovadoras.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Ver Projetos
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Baixar CV
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground">
              Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor fullstack com experiência em criar aplicações web modernas e escaláveis. 
                Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam, 
                e hoje transformo essa paixão em soluções práticas e inovadoras.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalho com as mais recentes tecnologias e frameworks, sempre buscando aprender e 
                aplicar as melhores práticas do mercado. Acredito que o código limpo e bem estruturado 
                é fundamental para o sucesso de qualquer projeto.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Educação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Ciência da Computação</h4>
                    <p className="text-muted-foreground">Universidade XYZ</p>
                    <p className="text-sm text-muted-foreground">2020 - 2024</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Interesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Arquitetura de Software</Badge>
                    <Badge variant="secondary">Cloud Computing</Badge>
                    <Badge variant="secondary">DevOps</Badge>
                    <Badge variant="secondary">UI/UX Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
            <p className="text-lg text-muted-foreground">
              Tecnologias e ferramentas que utilizo no dia a dia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Interfaces modernas e responsivas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>React/Next.js</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>TypeScript</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tailwind CSS</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Vue.js</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>APIs robustas e escaláveis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Node.js</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Python</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>PostgreSQL</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>MongoDB</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ferramentas</CardTitle>
                <CardDescription>DevOps e colaboração</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Git/GitHub</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Docker</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>AWS</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>CI/CD</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
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
                    <CardTitle>Desenvolvedor Fullstack Senior</CardTitle>
                    <CardDescription>TechCorp • 2022 - Presente</CardDescription>
                  </div>
                  <Badge variant="secondary">Atual</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Lidero o desenvolvimento de aplicações web escaláveis, trabalhando com React, Node.js e AWS. 
                  Responsável por arquitetura de sistemas, code review e mentoria de desenvolvedores júnior.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Desenvolvedor Fullstack</CardTitle>
                <CardDescription>StartupXYZ • 2020 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Desenvolvi e mantive aplicações web completas, desde o frontend até o backend. 
                  Trabalhei com Vue.js, Python/Django e implementei integrações com APIs de terceiros.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Django</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Desenvolvedor Frontend</CardTitle>
                <CardDescription>WebAgency • 2019 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Criei interfaces responsivas e interativas para clientes de diversos setores. 
                  Foquei em performance, acessibilidade e experiência do usuário.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Sass</Badge>
                  <Badge variant="outline">Figma</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Vamos Conversar</h2>
            <p className="text-lg text-muted-foreground">
              Interessado em trabalhar juntos? Entre em contato!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">rodrigo@exemplo.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Estou sempre aberto a novas oportunidades e colaborações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>
                <Button className="w-full">Enviar Mensagem</Button>
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
