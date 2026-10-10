import type { Metadata } from "next"

const MAIL =
  "mailto:souza.rodrigo61@gmail.com?subject=Conversa%20sobre%20projeto&body=O%20que%20voc%C3%AA%20quer%20resolver%20(1%20par%C3%A1grafo)%3A%0A%0AStack%20ou%20app%20envolvido%3A%0A%0APrazo%20que%20voc%C3%AA%20tem%20em%20mente%3A"

export const metadata: Metadata = {
  title: "Engenheiro sênior independente: mobile, fintech e IA | Rodrigo Souza",
  description:
    "Diagnóstico de app mobile, SDK e integração para parceiros, engenharia com IA para times e capacidade dedicada. Escopo por escrito, prazo combinado e entrega toda semana.",
  alternates: { canonical: "/consultoria" },
}

const ofertas = [
  {
    nome: "Diagnóstico de app mobile",
    para: "Flutter, iOS ou React Native em produção",
    texto:
      "O app trava, demora para abrir ou ninguém sabe medir o que acontece. Eu olho desempenho, falhas, monitoramento e o caminho de entrega até a loja, e devolvo um relatório com o que arrumar primeiro e por quê.",
    entrega: "Relatório, plano em ordem de prioridade e uma conversa para tirar dúvidas.",
  },
  {
    nome: "SDK e integração para parceiros",
    para: "Produto que precisa rodar dentro do app de outra empresa",
    texto:
      "Já construí SDK white-label em React Native e em Flutter: publicação automatizada, proteção dos dados sensíveis e um jeito de desligar um fluxo à distância se algo der errado.",
    entrega: "Entrega por etapas, com demonstração ao fim de cada uma.",
  },
  {
    nome: "Engenharia com IA para times",
    para: "Times que já usam Claude Code, Copilot ou Cursor e têm resultado irregular",
    texto:
      "Eu ajudo a montar o jeito de trabalhar: especificar antes, conferir depois e saber quando dá para aceitar o que a IA escreveu. Entreguei em produção um sistema de pagamentos feito com IA (R$ 2M+ em mais de 30 eventos) e uso agentes todos os dias.",
    entrega: "Conversa de diagnóstico, um combinado de trabalho para o time e acompanhamento nas primeiras semanas.",
  },
  {
    nome: "Capacidade dedicada",
    para: "Quem precisa de um sênior por algumas horas fixas por semana",
    texto:
      "Horas reservadas todo mês, prioridades definidas em conjunto e uma demonstração por semana. Serve para tocar um app, destravar um time ou cobrir uma fase do projeto.",
    entrega: "Horas fixas, relatório curto por semana e prioridades visíveis para os dois lados.",
  },
]

const combinados = [
  ["Escopo por escrito", "Antes de começar, o que entra e o que fica de fora."],
  ["Prazo meu, com folga", "Eu estimo e explico a conta. Se mudar o pedido, mudamos a conversa, não o relógio escondido."],
  ["Entrega toda semana", "Uma demonstração curta, para você ver andar."],
  ["Mudança vira orçamento", "Pedido fora do combinado é orçado à parte, sem surpresa no fim."],
  ["Pagamento em etapas", "Metade na assinatura, o resto conforme as entregas."],
  ["Poucos clientes por vez", "Para eu responder rápido e não virar fila."],
]

const provas = [
  ["R$ 2M+", "processados em mais de 30 eventos no DivinaPay, uma plataforma de pagamentos que cofundei (encerrada em 2025)"],
  ["10+ anos", "de mobile e backend para banco e fintech: Caixa, Banco do Brasil, PagSeguro"],
  ["RN e Flutter", "SDK entregue a parceiros nas duas tecnologias, com publicação automatizada"],
]

export default function Consultoria() {
  return (
    <div className="force-dark relative min-h-screen bg-[#050507] text-zinc-200">
      <div aria-hidden className="pointer-events-none fixed left-1/2 top-0 -z-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      <main className="relative z-10 mx-auto max-w-4xl space-y-20 px-6 py-16">
        <header className="space-y-6">
          <a href="/" className="font-mono text-xs text-emerald-300/80 hover:underline">
            ← souzarodrigo.com.br
          </a>
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-300/80">
            Engenheiro independente · Mobile, fintech e IA
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl">
            Engenharia sênior sob demanda, com escopo escrito e <span className="font-serif font-normal italic text-emerald-200">prazo combinado.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            Trabalho por conta própria em mobile (iOS, Flutter, React Native), backend e fintech. Você me conta o problema e eu volto com uma proposta simples: o que entrego, em quanto tempo e por quanto.
          </p>
          <a
            href={MAIL}
            className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition active:scale-95"
          >
            Marcar uma conversa de 30 minutos
          </a>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-50">O que eu faço</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {ofertas.map((o) => (
              <article key={o.nome} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0b0b0e] p-5 transition hover:border-emerald-300/30">
                <h3 className="font-serif text-2xl italic text-zinc-50">{o.nome}</h3>
                <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-300/70">{o.para}</p>
                <p className="text-sm leading-relaxed text-zinc-300">{o.texto}</p>
                <p className="mt-auto border-t border-white/10 pt-3 text-xs leading-relaxed text-zinc-500">
                  <span className="text-zinc-400">Você recebe: </span>
                  {o.entrega}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-50">Como eu trabalho</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {combinados.map(([t, d]) => (
              <li key={t} className="rounded-2xl border border-white/10 p-4">
                <div className="text-sm font-semibold text-zinc-100">{t}</div>
                <div className="mt-1 text-sm leading-relaxed text-zinc-400">{d}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-50">Por que eu</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {provas.map(([n, t]) => (
              <div key={n} className="space-y-1 rounded-2xl border border-white/10 p-4">
                <div className="font-serif text-2xl italic text-emerald-200">{n}</div>
                <div className="text-sm leading-relaxed text-zinc-400">{t}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500">
            Também construí o{" "}
            <a className="text-emerald-300 hover:underline" href="https://kernos.com.br" target="_blank" rel="noopener noreferrer">
              Kernos
            </a>
            , um sistema de estoque no celular para distribuidoras.
          </p>
        </section>

        <footer className="flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-zinc-500">
          <a className="hover:text-emerald-300" href={MAIL}>
            souza.rodrigo61@gmail.com
          </a>
          <a className="hover:text-emerald-300" href="https://www.linkedin.com/in/souzarodrigo61" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-emerald-300" href="/cv/pt">
            CV (PDF)
          </a>
        </footer>
      </main>
    </div>
  )
}
