# Aplicativo iOS das Loterias Caixa

## Contexto

Desenvolvimento do aplicativo iOS das Loterias (Caixa Econômica Federal), usado por milhões de pessoas, entre 10/2022 e 12/2025. Time de quatro desenvolvedores iOS, git flow e deploy via Xcode archive.

## O que este trabalho demonstra

### iOS nativo em produção
- Swift 5.5+, UIKit (Storyboard e XIB), MVVM e Combine para fluxo de dados reativo;
- listas com UICollectionView e Diffable Data Source, para atualizações e animações fluidas;
- persistência local com Core Data.

### Features entregues
- **Apostas favoritas**: layouts dinâmicos de acordo com o tipo de aposta;
- **Marketplace**: listagem de produtos e integração com pagamentos.

![Apostas Favoritas Demo](/data/markdown/media/apostas-favoritas.MP4)
![Marketplace Demo](/data/markdown/media/marketplace.MP4)
![Marketplace UI](/data/markdown/media/marketplace-ui.PNG)

### Acessibilidade e plataforma
- suporte a VoiceOver e integração com Apple Wallet, dentro das diretrizes da Apple.

## Stack

Swift, UIKit, Combine, Core Data, MVVM, Diffable Data Sources, Apple Wallet, VoiceOver, Xcode.
