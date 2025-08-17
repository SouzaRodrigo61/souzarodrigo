"use client"

import { Button as HeroButton, Card as HeroCard, Input as HeroInput } from "@heroui/react"

export function HeroDemo() {
  return (
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
  )
}
