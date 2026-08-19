import { ImageResponse } from "next/og";

export const alt = "Rodrigo Souza — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            color: "#10b981",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#10b981",
            }}
          />
          Senior Software Engineer • Brasília, DF
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>
            Rodrigo Souza
          </div>
          <div style={{ fontSize: 34, color: "#a1a1aa", lineHeight: 1.4 }}>
            iOS nativo, Flutter e sistemas distribuídos em Rust para bancos e
            fintechs — Loterias Caixa, crédito consignado, PagSeguro.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#71717a",
          }}
        >
          <div>souzarodrigo.com.br</div>
          <div style={{ color: "#10b981" }}>10+ anos • Swift · Flutter · Rust</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
