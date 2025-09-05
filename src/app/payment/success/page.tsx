import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader className="space-y-4">
            {/* Ícone de sucesso */}
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-green-600 dark:text-green-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            
            <div className="space-y-2">
              <CardTitle className="text-2xl text-green-600 dark:text-green-400">
                Pagamento Aprovado!
              </CardTitle>
              <CardDescription className="text-base">
                Seu pagamento foi processado com sucesso
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Detalhes do pagamento */}
            <div className="space-y-3 text-left">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  Aprovado
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Data:</span>
                <span className="text-sm font-medium">
                  {new Date().toLocaleDateString('pt-BR')}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Hora:</span>
                <span className="text-sm font-medium">
                  {new Date().toLocaleTimeString('pt-BR')}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">ID da Transação:</span>
                <span className="text-sm font-mono text-muted-foreground">
                  {Math.random().toString(36).substring(2, 15).toUpperCase()}
                </span>
              </div>
            </div>
            
            {/* Mensagem de confirmação */}
            <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-sm text-green-800 dark:text-green-200">
                Você receberá um e-mail de confirmação em breve com todos os detalhes da sua transação.
              </p>
            </div>
            
            {/* Botões de ação */}
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/">
                  Voltar ao Início
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link href="/payment/pending">
                  Ver Outros Pagamentos
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Informações adicionais */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Precisa de ajuda? Entre em contato conosco em{" "}
            <a 
              href="mailto:souza.rodrigo61@gmail.com" 
              className="text-primary hover:underline"
            >
              souza.rodrigo61@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
