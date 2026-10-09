# Kernos — WMS no celular

## Visão Geral

Produto que concebi e construí do zero: um WMS (sistema de controle de galpão) que roda no celular que a equipe já tem, sem coletor de dados, ao lado do ERP. Cobre endereçamento de posições, recebimento pela nota e separação de pedidos conferida.

- **Papel**: fundador e desenvolvedor — produto, backend, webapp e infraestrutura.
- **Link**: [kernos.com.br](https://kernos.com.br)

## O desafio

Estoque que o sistema diz ter e a prateleira não tem; produto no depósito que ninguém acha. Em vez de exigir um coletor dedicado, o celular lê o endereço da posição e o código do produto, e a conferência acontece na hora, onde o erro nasce.

## O que este projeto demonstra

### Backend em Rust
- API em axum com handlers escritos à mão e contrato estável entre cliente e servidor;
- uma crate por funcionalidade, mantendo regra de negócio e acesso a dados separados do restante;
- decisões de arquitetura registradas por escrito, para o código explicar o porquê e não só o quê.

### Multi-tenancy com isolamento verificado
- dados de cada empresa isolados no banco, com a garantia concentrada em uma camada única;
- testes de integração que sobem o serviço de verdade e conferem que uma empresa não enxerga a outra, incluindo um controle negativo para provar que o teste é capaz de falhar.

### Webapp responsivo
- React + Vite, desenhado para o uso real em galpão: celular na mão, três larguras de tela, telas de painel para a gestão.

### Integração com agentes de IA
- endpoint MCP para que agentes operem o sistema, com autorização explícita de uma pessoa antes de qualquer acesso.

### Desenvolvimento orientado a agentes, com prova
- especificação por exemplos antes do código, agentes especializados por área e uma etapa independente que re-executa o que foi entregue;
- testes e CI automatizados em todos os repositórios.

## Stack

Rust (axum, tokio-postgres), PostgreSQL, React + Vite, Next.js estático, Cloudflare Workers, Clerk (autenticação) e MCP.
