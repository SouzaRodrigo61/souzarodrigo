import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://souzarodrigo.com.br";
const TITLE = "Rodrigo Souza — Senior Software Engineer | iOS, Mobile & Sistemas Distribuídos";
const DESCRIPTION =
  "Engenheiro de software sênior em Brasília com 10+ anos em apps de missão crítica: Loterias Caixa iOS, fintech de crédito consignado (Flutter/React Native), Banco do Brasil, PagSeguro. Swift, Flutter, Rust e sistemas distribuídos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Rodrigo Souza",
    "Rodrigo Santos de Souza",
    "Senior Software Engineer",
    "iOS Developer",
    "Desenvolvedor iOS Brasília",
    "Swift",
    "SwiftUI",
    "Flutter",
    "React Native",
    "Rust",
    "Sistemas Distribuídos",
    "FinTech",
    "Mobile Developer",
    "Tech Lead",
  ],
  authors: [{ name: "Rodrigo Santos de Souza", url: SITE_URL }],
  creator: "Rodrigo Santos de Souza",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Rodrigo Souza — Portfólio",
    title: TITLE,
    description: DESCRIPTION,
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rodrigo Santos de Souza",
  alternateName: "Rodrigo Souza",
  url: SITE_URL,
  email: "mailto:souza.rodrigo61@gmail.com",
  jobTitle: "Senior Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brasília",
    addressRegion: "DF",
    addressCountry: "BR",
  },
  sameAs: [
    "https://github.com/souzaRodrigo61",
    "https://www.linkedin.com/in/souzarodrigo61",
  ],
  knowsAbout: [
    "iOS",
    "Swift",
    "SwiftUI",
    "Flutter",
    "React Native",
    "Rust",
    "Distributed Systems",
    "FinTech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 min-h-screen relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
