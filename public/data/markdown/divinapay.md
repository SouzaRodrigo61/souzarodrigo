## Visão Geral

Plataforma de pagamentos cashless para eventos, da qual sou sócio desenvolvedor: cartões com QR Code, operação pelo smartphone e painel de gestão. Processou **R$ 2M+** em transações em **30+ eventos**, com picos de usuários simultâneos.

- **App**: [DivinaPay na App Store](https://apps.apple.com/br/app/divinapay/id6502572908)
- **Site**: [divinapay.com](https://divinapay.com)

## O que este projeto demonstra

### Sistema de pagamentos de ponta a ponta
- app mobile em Flutter, backend em Rust (Axum e Salvo) com PostgreSQL e painel operacional em Svelte 5;
- fluxo de cobrança e saldo pensado para uso em evento, onde a internet e a fila não perdoam.

### Alta concorrência
- backend assíncrono em Rust projetado para picos de acesso concentrados em poucas horas;
- consultas e cache ajustados para manter as transações rápidas sob carga.

### Operação por conta própria
- deploy automatizado com Coolify e Docker, pipeline de CI/CD e autenticação e tempo real via Supabase.

## Stack

Rust (Axum, Salvo), PostgreSQL, Supabase, Flutter/Dart, Svelte 5, TypeScript, Tailwind CSS, Docker, Coolify.
