import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PaymentPending() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader className="space-y-4">
            {/* Ícone de pendente */}
            <div className="mx-auto w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-yellow-600 dark:text-yellow-400 animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            
            <div className="space-y-2">
              <CardTitle className="text-2xl text-yellow-600 dark:text-yellow-400">
                Pagamento Pendente
              </CardTitle>
              <CardDescription className="text-base">
                Seu pagamento está sendo processado
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Detalhes do pagamento */}
            <div className="space-y-3 text-left">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                  Processando
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
            
            {/* Barra de progresso */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Processando pagamento...</span>
                <span>50%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full animate-pulse" 
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
            
            {/* Mensagem informativa */}
            <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Seu pagamento está sendo processado pelo banco. Este processo pode levar alguns minutos.
              </p>
            </div>
            
            {/* Informações sobre o que acontece agora */}
            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                O que acontece agora:
              </h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 text-left">
                <li>• Verificação dos dados do cartão</li>
                <li>• Validação com o banco emissor</li>
                <li>• Processamento da transação</li>
                <li>• Confirmação final</li>
              </ul>
            </div>
            
            {/* Botões de ação */}
            <div className="space-y-3">
              <Button 
                onClick={() => window.location.reload()} 
                className="w-full"
                variant="outline"
              >
                Atualizar Status
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link href="/">
                  Voltar ao Início
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Informações adicionais */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Você receberá uma notificação por e-mail assim que o pagamento for confirmado.
          </p>
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
