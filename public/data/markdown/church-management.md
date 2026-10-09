# Sistema de gestão de campanhas e finanças

## Visão Geral

Plataforma de campanhas e gestão financeira, mantida como trabalho voluntário. Nasceu como app em Flutter e evoluiu para Next.js + Rust com arquitetura multi-tenant.

## O que este projeto demonstra

### Evolução de arquitetura
- do MVP mobile em Flutter para web com Next.js e backend em Rust, quando o produto passou a exigir mais de uma organização no mesmo sistema;
- decisão guiada pela necessidade (isolamento e custo), não pela moda.

### Multi-tenancy
- dados separados por organização, com a identificação do tenant presente em todas as consultas;
- autenticação por JWT e backend em Axum.

### Redução de custo de infraestrutura
- saída de uma plataforma PaaS (**USD 16/mês**) para uma VPS autogerenciada no Brasil, com custo fixo de cloud **USD 0**;
- deploy automatizado com Coolify e Docker, mantendo a operação simples para uma pessoa só.

## Stack

Rust (Axum), PostgreSQL, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Docker, Coolify.
