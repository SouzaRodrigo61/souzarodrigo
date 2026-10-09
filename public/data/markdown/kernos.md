# Kernos — WMS no celular para distribuidoras

## Visão Geral

Produto próprio, do zero: um WMS (sistema de controle de galpão) que roda no celular que a equipe já tem, sem coletor de dados, ao lado do ERP da distribuidora. Endereçamento de cada posição, recebimento pela nota e separação de pedidos conferida, em Brasília e entorno.

- **Papel**: fundador e desenvolvedor — produto, backend, webapp, infraestrutura e operação.
- **Público**: dono de distribuidora ou atacado com um centro de distribuição.
- **Estado**: em piloto. Ainda não há base de clientes para citar, e esta página não finge que há.

## O problema

O sistema diz 20 e a prateleira tem 9. O produto está no depósito e ninguém acha. A solução tradicional é um coletor de dados dedicado, caro para o porte da empresa. O Kernos troca o aparelho: o celular lê o endereço da posição e o código do produto, e a conferência acontece na hora, no ponto onde o erro nasce.

## Arquitetura

Repositórios separados, um produto:

| Repo | Papel |
|---|---|
| `kernos-backend` | Rust (axum). Regra de negócio, SQL, schema, `error_code` e o contrato do fio |
| `kernos-wms` | Webapp Vite + React: coletor de galpão e painel, em três larguras |
| `kernos-provisioning` | Liberar empresa, centro de distribuição e pessoas iniciais |
| `kernos-site` | Landing estática em Next.js, servida por um Worker da Cloudflare |
| `kernos-harness` | O processo de desenvolvimento: agentes, skills e portões |

### Backend: uma crate por feature

O binário `kernos` é axum com handler escrito à mão, rota por rota. São **29 crates**, uma por feature (recebimento, endereço, estoque, separação, relatório, previsão, reposição, integração com ERP, push, agente MCP…), com `kernos-host` montando a cadeia de cada rota: chave, token, empresa do token, membro.

Havia um motor declarativo embutido (`centaur-dmn`) rodando pacotes de regras. Em 23/09/2026 ele e os pacotes foram removidos (ADR 0010): a regra passou a viver em Rust, sem camada de interpretação no meio, e o contrato do fio não mudou.

### Isolamento por empresa

Cada empresa tem o próprio schema Postgres. A garantia mora numa camada só, `chain::transaction`:

- abre um `BEGIN` por requisição, antes de qualquer passo da cadeia;
- o `search_path` da empresa é definido **local à transação** — morre com ela, e a conexão volta ao pool sem o tenant de ninguém;
- fecha em `COMMIT` (status < 400) ou `ROLLBACK`.

Não existe cache da chave do tenant: cada requisição faz um `SELECT`. Um cache em memória seria uma segunda fonte de verdade sobre revogação.

**Prova, não promessa**: um teste de integração sobe o binário de verdade e verifica que duas empresas não se enxergam, nas rotas e no stream de eventos. Há também um controle negativo — sem a transação, o `search_path` vaza para a requisição seguinte — para o teste provar que consegue falhar.

### Decisões registradas

O repositório mantém ADRs numeradas. Algumas que definem o produto:

- **0003** — a transação por empresa é uma camada só;
- **0005** — o contrato do fio é congelado;
- **0006** — os casos de teste são o aceite;
- **0007** — uma crate por feature;
- **0017** — o conector puxa e a API escreve (integração com ERP).

## Integração com agentes de IA

O backend expõe `/v1/mcp`. Um agente se conecta com token próprio (`kat_…`), e uma pessoa, autenticada pelo Clerk, aprova o pedido de acesso. A aprovação exige um piso de permissão específico (`agent.mcp`).

## Como é construído: o harness

O Kernos é desenvolvido com agentes de IA sob processo explícito:

1. **BDD primeiro** — o caso Dado/Quando/Então nasce aterrado no contrato real da rota, antes de a demanda entrar no backlog;
2. **Construtores especialistas** — um agente para backend, um para schema e isolamento por tenant, um para o webapp;
3. **QA que mede** — um agente que não constrói: re-executa o que os construtores alegaram;
4. **Portões por repositório** — e uma skill que documenta o que cada portão pega, o que não pega, e por que verde sozinho não prova nada;
5. **Norma única** — identificador em inglês, prosa em português; commit sem assinatura de ferramenta, cobrado por hook e por workflow de PR.

## Stack

Rust (axum, tokio-postgres, deadpool), PostgreSQL com schema por empresa, Clerk (JWT/JWKS), React + Vite, Next.js estático, Cloudflare Workers e D1 (site), MCP.

## O que falta

- Primeiros contratos pagos: a meta comercial é conseguir os dois primeiros com distribuidoras do DF;
- Medir, em galpão real, o ganho de acurácia de estoque — hoje não há número honesto para publicar;
- Ampliar integrações com ERPs.

## Links

- Produto: [kernos.com.br](https://kernos.com.br)
