import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button as HeroButton, Card as HeroCard, Input as HeroInput } from "@heroui/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            shadcn/ui + HeroUI Instalados! 🎉
          </h1>
          <p className="text-xl text-muted-foreground">
            Compare os dois sistemas de componentes
          </p>
        </div>

        {/* shadcn/ui Components */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground border-b pb-2">
            shadcn/ui Components
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card com Input */}
            <Card>
              <CardHeader>
                <CardTitle>Formulário shadcn/ui</CardTitle>
                <CardDescription>
                  Componentes do shadcn/ui
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email-shadcn" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email-shadcn"
                    type="email"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name-shadcn" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name-shadcn"
                    type="text"
                    placeholder="Seu nome"
                  />
                </div>
                <Button className="w-full">
                  Enviar
                </Button>
              </CardContent>
            </Card>

            {/* Card com Botões */}
            <Card>
              <CardHeader>
                <CardTitle>Botões shadcn/ui</CardTitle>
                <CardDescription>
                  Diferentes variações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">
                    Padrão
                  </Button>
                  <Button variant="secondary">
                    Secundário
                  </Button>
                  <Button variant="outline">
                    Outline
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="destructive">
                    Destrutivo
                  </Button>
                  <Button variant="ghost">
                    Ghost
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* HeroUI Components */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground border-b pb-2">
            HeroUI Components
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card com Input */}
            <HeroCard className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Formulário HeroUI</h3>
                  <p className="text-sm text-muted-foreground">
                    Componentes do HeroUI
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email-hero" className="text-sm font-medium">
                      Email
                    </label>
                    <HeroInput
                      id="email-hero"
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="name-hero" className="text-sm font-medium">
                      Nome
                    </label>
                    <HeroInput
                      id="name-hero"
                      type="text"
                      placeholder="Seu nome"
                    />
                  </div>
                  <HeroButton color="primary" className="w-full">
                    Enviar
                  </HeroButton>
                </div>
              </div>
            </HeroCard>

            {/* Card com Botões */}
            <HeroCard className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Botões HeroUI</h3>
                  <p className="text-sm text-muted-foreground">
                    Diferentes variações
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <HeroButton color="primary">
                      Primário
                    </HeroButton>
                    <HeroButton color="secondary">
                      Secundário
                    </HeroButton>
                    <HeroButton variant="bordered">
                      Bordered
                    </HeroButton>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <HeroButton color="danger">
                      Danger
                    </HeroButton>
                    <HeroButton variant="light">
                      Light
                    </HeroButton>
                    <HeroButton variant="flat">
                      Flat
                    </HeroButton>
                  </div>
                </div>
              </div>
            </HeroCard>
          </div>
        </div>

        {/* Comparação */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground border-b pb-2">
            Comparação dos Sistemas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>
                  Vantagens e características
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold">✅ Vantagens:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Componentes copiáveis (não é dependência)</li>
                    <li>• Mais flexível para customização</li>
                    <li>• Estabelecido na comunidade</li>
                    <li>• Baseado em Radix UI</li>
                    <li>• Zero runtime overhead</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">📦 Instalação:</h4>
                  <p className="text-sm text-muted-foreground">
                    Componentes adicionados individualmente via CLI
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>HeroUI</CardTitle>
                <CardDescription>
                  Vantagens e características
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold">✅ Vantagens:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Mais de 210 componentes</li>
                    <li>• Animações com Framer Motion</li>
                    <li>• Design system moderno</li>
                    <li>• CLI avançado</li>
                    <li>• Suporte nativo a Tailwind v4</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">📦 Instalação:</h4>
                  <p className="text-sm text-muted-foreground">
                    Biblioteca completa instalada via npm/pnpm
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Como adicionar mais componentes */}
        <Card>
          <CardHeader>
            <CardTitle>Como Adicionar Mais Componentes</CardTitle>
            <CardDescription>
              Comandos para expandir sua biblioteca
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">shadcn/ui:</h4>
                <code className="block text-sm bg-muted p-2 rounded">
                  pnpm dlx shadcn@latest add dialog
                </code>
                <code className="block text-sm bg-muted p-2 rounded">
                  pnpm dlx shadcn@latest add table
                </code>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">HeroUI:</h4>
                <code className="block text-sm bg-muted p-2 rounded">
                  pnpm dlx heroui@latest add modal
                </code>
                <code className="block text-sm bg-muted p-2 rounded">
                  pnpm dlx heroui@latest add table
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
