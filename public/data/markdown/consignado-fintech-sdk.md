# FinTech de Crédito Consignado Digital & SDK White-Label

## Visão Geral da Atuação

Atuação técnica ponta a ponta na engenharia de um ecossistema completo de crédito consignado digital e distribuição B2B2C. O escopo abrangeu o desenvolvimento do aplicativo mobile principal (Flutter), um SDK white-label modular para integração de parceiros (React Native), um motor interno de feature flags (OpenFeature), microsserviços de decisão/elegibilidade (.NET Core) e roteamento universal web-to-app (Next.js).

---

## 1. App Mobile Principal (Flutter & Dart)

Desenvolvimento do funil de concessão e aquisição de crédito consignado, com foco em resiliência de estado, segurança e observabilidade em tempo real.

### Principais Entregas:
- **Funil de Contratação CLT (Ponta a Ponta)**: Construção da jornada completa de crédito — simulação financeira em tempo real, validação de dados cadastrais/bancários, seguro prestamista, biometria facial com documentoscopia antifraude, assinatura eletrônica, OTP e liquidação com desembolso.
- **Orquestração de Estado (`HomeCoordinator`)**: Consolidação de múltiplos pollers assíncronos e cubits de retomada de jornada utilizando **BLoC + `restartable()`**, eliminando condições de corrida, telas brancas e flickering de interface.
- **Autenticação Segura & Onboarding**: Fluxo de autenticação com criptografia assimétrica RSA-OAEP e resolução resiliente de deep links (incluindo recuperação em cold-start).
- **Biometria & Antifraude**: Integração com SDKs de documentoscopia e prova de vida facial, telemetria dedicada e regras de segurança contra fraudes.
- **Observabilidade & Telemetria**: Centralização de logs e monitoramento de performance com **Datadog (Logs + RUM)** em fluxos críticos de conversão.
- **Qualidade & Automação**: Suíte de testes automatizados e2e com **Maestro**, testes unitários e de widgets com alta cobertura.

---

## 2. SDK White-Label para Parceiros (React Native & TypeScript)

Construção do SDK embarcado em aplicativos de instituições parceiras, permitindo a distribuição do produto de crédito no modelo "powered by" (B2B2C).

### Principais Entregas:
- **Fundação do SDK**: Publicação automatizada via npm com *Trusted Publishing (OIDC)*, CI/CD e versionamento semântico.
- **Segurança e Conformidade de Dados**: Criptografia ponta a ponta (RSA-OAEP + HMAC-SHA256) para garantir que documentos e dados sensíveis nunca trafeguem em texto claro.
- **Observabilidade & Kill-Switch Remoto**: Instrumentação completa com Datadog RUM/Logs, roteamento seletivo de eventos e desativação remota de fluxos via feature flags em caso de instabilidade externa.
- **Resiliência e Isolamento**: Tratamento de exceções globais e crashes sem interferir no ciclo de vida do aplicativo hospedeiro do parceiro.
- **Alta Cobertura**: 100% de cobertura de testes em módulos críticos de telemetria, cache e feature flags.

---

## 3. Microsserviços de Decisão de Crédito & Elegibilidade (.NET Core)

- Implementação de endpoints de verificação de elegibilidade por parceiro em tempo real.
- Descriptografia segura e geração de hash HMAC-SHA256 para busca e auditoria sem armazenamento de documentos em claro.
- Testes de resiliência e failover com MongoDB e mensageria.

---

## 4. Webapp & Deep Linking Universal (Next.js)

- Configuração e auditoria de **Android App Links** e **iOS Universal Links** com validação de certificados e fingerprints para handoff contínuo entre web e aplicativo nativo.

---

## Tecnologias e Padrões Aplicados

- **Mobile:** Flutter 3.31+, Dart, BLoC, React Native, TypeScript, Reanimated
- **Arquitetura:** Clean Architecture, Coordinator Pattern, SDK Design, Modularization
- **Segurança:** RSA-OAEP, HMAC-SHA256, Biometria / Prova de Vida Antifraude
- **Observabilidade:** Datadog RUM & Logs, OpenFeature Flags
- **Backend & Web:** .NET Core, C#, MongoDB, Next.js, Android App Links
- **Testes & CI/CD:** Maestro e2e, Unit Testing, GitHub Actions, npm OIDC
