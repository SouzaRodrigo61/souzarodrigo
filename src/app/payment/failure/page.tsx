import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PaymentFailure() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader className="space-y-4">
            {/* Ícone de erro */}
            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-red-600 dark:text-red-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </div>
            
            <div className="space-y-2">
              <CardTitle className="text-2xl text-red-600 dark:text-red-400">
                Pagamento Falhou
              </CardTitle>
              <CardDescription className="text-base">
                Não foi possível processar seu pagamento
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Detalhes do pagamento */}
            <div className="space-y-3 text-left">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                  Falhou
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
            
            {/* Mensagem de erro */}
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-sm text-red-800 dark:text-red-200">
                O pagamento não pôde ser processado. Isso pode ter acontecido por diversos motivos:
              </p>
              <ul className="text-sm text-red-700 dark:text-red-300 mt-2 space-y-1 text-left">
                <li>• Dados do cartão incorretos</li>
                <li>• Saldo insuficiente</li>
                <li>• Cartão bloqueado</li>
                <li>• Problemas de conectividade</li>
              </ul>
            </div>
            
            {/* Possíveis soluções */}
            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                O que você pode fazer:
              </h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 text-left">
                <li>• Verificar os dados do cartão</li>
                <li>• Tentar novamente com outro cartão</li>
                <li>• Entrar em contato com seu banco</li>
                <li>• Verificar sua conexão com a internet</li>
              </ul>
            </div>
            
            {/* Botões de ação */}
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/payment/pending">
                  Tentar Novamente
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link href="/">
                  Voltar ao Início
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Informações de suporte */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Ainda com problemas? Entre em contato conosco em{" "}
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
