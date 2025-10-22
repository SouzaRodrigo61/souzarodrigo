# Sistema de Gerenciamento para Igrejas

## Visão Geral

Sistema completo de gerenciamento de campanhas e finanças para igrejas, com evolução de Flutter para Next.js + Rust, implementando arquitetura multi-tenant.

## Evolução Técnica

### Fase 1: Flutter (2023)
- **Desafio**: App mobile para gestão básica
- **Tecnologia**: Flutter + Firebase
- **Resultado**: MVP funcional em 3 meses

### Fase 2: Migração Web (2024)
- **Desafio**: Escalabilidade e multi-tenant
- **Tecnologia**: Next.js + Rust + PostgreSQL
- **Resultado**: Sistema web robusto

## Arquitetura Multi-Tenant

### Estrutura de Dados
```sql
-- Separação por tenant
CREATE TABLE tenants (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  domain VARCHAR(255) UNIQUE
);

-- Dados isolados por tenant
CREATE TABLE campaigns (
  id UUID PRIMARY KEY,
  tenant_id UUID REFERENCES tenants(id),
  name VARCHAR(255),
  target_amount DECIMAL(10,2)
);
```

### Implementação
- **Isolamento**: Dados completamente separados
- **Segurança**: Row-level security (RLS)
- **Performance**: Índices otimizados por tenant

## Otimização de Custos

### Antes (Railway)
- **Custo**: USD 16/mês
- **Performance**: Limitada
- **Escalabilidade**: Restrita

### Depois (VPS + Rust)
- **Custo**: USD 0/mês
- **Performance**: 3x mais rápida
- **Escalabilidade**: Ilimitada

### Estratégias Implementadas
1. **Rust Backend**: Performance nativa
2. **PostgreSQL**: Banco otimizado
3. **VPS Brasil**: Latência reduzida
4. **Coolify**: Deploy automatizado

## Funcionalidades Principais

### Gestão de Campanhas
- Criação e acompanhamento
- Metas e progresso
- Relatórios detalhados

### Gestão Financeira
- Controle de receitas
- Categorização de gastos
- Relatórios fiscais

### Multi-Tenant
- Isolamento completo
- Customização por igreja
- Escalabilidade horizontal

## Tecnologias Utilizadas

### Backend
- **Rust**: Performance e segurança
- **Axum**: Framework web
- **PostgreSQL**: Banco de dados
- **JWT**: Autenticação

### Frontend
- **Next.js 14**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Styling
- **Shadcn/ui**: Componentes

### DevOps
- **Coolify**: Deploy automatizado
- **VPS**: Infraestrutura própria
- **Docker**: Containerização

## Métricas de Sucesso

### Performance
- **Tempo de resposta**: < 100ms
- **Uptime**: 99.9%
- **Concorrência**: 1000+ usuários

### Negócio
- **Custo**: Redução de 100%
- **Usuários**: 50+ igrejas
- **Satisfação**: 4.9/5.0

## Lições Aprendidas

### Técnicas
- Rust oferece performance excepcional
- Multi-tenant requer planejamento cuidadoso
- VPS oferece mais controle que PaaS

### Negócio
- Custos podem ser drasticamente reduzidos
- Performance impacta diretamente na UX
- Escalabilidade é fundamental

