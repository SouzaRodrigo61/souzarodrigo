import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            shadcn/ui Instalado com Sucesso! 🎉
          </h1>
          <p className="text-xl text-muted-foreground">
            Seus componentes estão prontos para uso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card com Input */}
          <Card>
            <CardHeader>
              <CardTitle>Formulário de Exemplo</CardTitle>
              <CardDescription>
                Demonstração do componente Input
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <Input
                  id="name"
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
              <CardTitle>Botões</CardTitle>
              <CardDescription>
                Diferentes variações de botões
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
                <Button variant="ghost">
                  Ghost
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="destructive">
                  Destrutivo
                </Button>
                <Button variant="link">
                  Link
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Card de Informações */}
        <Card>
          <CardHeader>
            <CardTitle>Componentes Instalados</CardTitle>
            <CardDescription>
              Lista dos componentes disponíveis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Button</h3>
                <p className="text-sm text-muted-foreground">
                  Botões com diferentes variantes e estados
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Card</h3>
                <p className="text-sm text-muted-foreground">
                  Containers para organizar conteúdo
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Input</h3>
                <p className="text-sm text-muted-foreground">
                  Campos de entrada de dados
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
