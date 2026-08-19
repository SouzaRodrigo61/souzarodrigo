import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer"
import { createElement, type ReactElement } from "react"
import { CvDocument } from "@/components/cv-document"
import { cv } from "@/data/cv"

export const dynamic = "force-static"

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }]
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params
  const lang = locale === "en" ? "en" : "pt"
  const buffer = await renderToBuffer(
    createElement(CvDocument, { data: cv[lang] }) as ReactElement<DocumentProps>
  )

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="Rodrigo-Santos-de-Souza-CV-${lang.toUpperCase()}.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  })
}
