# iOS Developer - Qintess (Atual)

## Contexto

Desenvolvimento do aplicativo iOS das Loterias (Caixa Econômica Federal). Trabalho com 4 desenvolvedores iOS seguindo git flow e deploy via Xcode archive.

## Features Desenvolvidas

### Apostas Favoritas

Sistema de gestão de apostas favoritas com interface reativa e layouts dinâmicos.

**Tecnologias Utilizadas:**
- **Combine**: Framework reativo para gestão de dados
- **UICollectionView Diffable**: Para melhor performance e animações
- **MVVM**: Arquitetura para separação de responsabilidades
- **Layout Dinâmico**: Diferentes layouts de acordo com o tipo de aposta

**Implementação Técnica:**
- Gestão reativa de dados com Combine
- UICollectionView com diffable data source para animações suaves
- Layouts adaptativos baseados no tipo de aposta
- Integração com APIs para sincronização de favoritos

![Apostas Favoritas Demo](/data/markdown/media/apostas-favoritas.MP4)

### Marketplace

Sistema de marketplace integrado com gestão de produtos e transações.

**Tecnologias Utilizadas:**
- **MVVM**: Arquitetura consistente com outras features
- **UITableView**: Para listagem de produtos
- **Combine**: Gestão reativa de dados
- **Core Data**: Persistência local de dados

**Implementação Técnica:**
- Arquitetura MVVM para consistência
- UITableView com células customizadas
- Gestão de estado reativa com Combine
- Integração com APIs de pagamento

![Marketplace Demo](/data/markdown/media/marketplace.MP4)
![Marketplace UI](/data/markdown/media/marketplace-ui.PNG)

### Controle de Horário com Servidor

Sistema centralizado de controle de horário baseado no servidor para sincronização global.

**Tecnologias Utilizadas:**
- **Server Time Sync**: Sincronização com horário do servidor
- **App Lifecycle**: Controle de estados do app
- **Background Tasks**: Sincronização em background
- **UserDefaults**: Cache de configurações

**Implementação Técnica:**
- Centralização do horário do público via servidor
- Controle de estados do app dentro do ciclo de vida do iOS
- Sincronização automática em background
- Cache inteligente para reduzir chamadas de API

![Calendar Control](/data/markdown/media/calendar.PNG)

## Arquitetura Técnica

### Padrões Utilizados
- **MVVM**: Arquitetura principal para todas as features
- **Combine**: Framework reativo para gestão de dados
- **Diffable Data Sources**: Para performance otimizada
- **Protocol-Oriented Programming**: Para flexibilidade

### Gerenciamento de Estado
- **Combine Publishers**: Para fluxo de dados reativo
- **ObservableObject**: Para binding com SwiftUI
- **@Published**: Para propriedades reativas
- **State Management**: Centralizado e consistente

### Performance
- **Lazy Loading**: Carregamento sob demanda
- **Image Caching**: Cache inteligente de imagens
- **Memory Management**: Gestão eficiente de memória
- **Background Processing**: Tarefas em background

## Desafios Técnicos

### Sincronização de Dados
- **Problema**: Múltiplas fontes de dados em tempo real
- **Solução**: Combine + Core Data para sincronização
- **Resultado**: Dados sempre atualizados e consistentes

### Performance em Listas
- **Problema**: Listas com milhares de itens
- **Solução**: Diffable Data Sources + Lazy Loading
- **Resultado**: Scroll fluido e responsivo

### Gestão de Estado
- **Problema**: Estados complexos entre telas
- **Solução**: MVVM + Combine para gestão reativa
- **Resultado**: Código limpo e testável

## Impacto no Produto

### Melhorias de UX
- **Interface Reativa**: Resposta imediata às ações do usuário
- **Animações Suaves**: Transições fluidas entre estados
- **Performance**: Carregamento rápido e responsivo

### Funcionalidades
- **Apostas Favoritas**: Gestão personalizada de apostas
- **Marketplace**: Sistema completo de compras
- **Sincronização**: Dados sempre atualizados

## Tecnologias Utilizadas

### iOS Development
- **Swift 5.5**: Linguagem principal
- **UIKit**: Interface de usuário
- **Combine**: Framework reativo
- **Core Data**: Persistência de dados

### Arquitetura
- **MVVM**: Padrão arquitetural
- **Protocol-Oriented**: Programação orientada a protocolos
- **Dependency Injection**: Injeção de dependências
- **Repository Pattern**: Padrão de repositório

### Ferramentas
- **Xcode 15+**: Ambiente de desenvolvimento

## Lições Aprendidas

### Desenvolvimento
- Combine oferece poderosa gestão reativa de dados
- Diffable Data Sources melhoram significativamente a performance
- MVVM facilita manutenção e testes
- Sincronização com servidor é crítica para apps financeiros

### Arquitetura
- Separação clara de responsabilidades é fundamental
- Gestão de estado reativa simplifica o código
- Protocolos aumentam flexibilidade e testabilidade
- Background tasks são essenciais para UX

### Performance
- Lazy loading é crucial para listas grandes
- Cache inteligente reduz chamadas de API
- Gestão de memória impacta diretamente na performance
- Animações suaves melhoram a percepção de velocidade
