# Fintech de crédito consignado digital

## Visão Geral

Atuação ponta a ponta em um ecossistema de crédito consignado digital: app mobile principal, SDK white-label para parceiros (modelo B2B2C), um microsserviço de elegibilidade e o roteamento web-para-app.

## O que este trabalho demonstra

### App mobile em Flutter
- funil de contratação completo: simulação, biometria e verificação de documento antifraude, OTP, assinatura eletrônica e desembolso, com retomada de jornada interrompida;
- orquestração de estado com BLoC, eliminando condições de corrida e telas em branco causadas por polling concorrente.

### SDK white-label em React Native
- produto distribuído dentro de apps de parceiros, com publicação automatizada no npm via Trusted Publishing (OIDC) e versionamento semântico;
- criptografia de dados sensíveis ponta a ponta e desligamento remoto de fluxos por feature flag;
- falhas do SDK isoladas, sem derrubar o app hospedeiro.

### Observabilidade e qualidade
- Datadog (RUM e Logs) em Flutter e React Native;
- testes unitários e e2e (Maestro), com cobertura total nos módulos críticos de telemetria, cache e feature flags.

### Back-end e web
- contribuições em um microsserviço .NET de elegibilidade por parceiro;
- links universais (Android App Links e iOS Universal Links) no webapp Next.js.

## Stack

Flutter, Dart, BLoC, React Native, TypeScript, .NET Core, Next.js, Datadog, OpenFeature, Maestro, GitHub Actions.
