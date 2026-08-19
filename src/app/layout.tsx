import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Rodrigo Souza — Senior Software Engineer | iOS & Distributed Systems",
  description: "Senior Software Engineer especializado em iOS nativo (Swift/SwiftUI/TCA), Rust, arquiteturas distribuídas de alta escala e modernização para instituições financeiras e produtos de grande porte.",
  keywords: ["Rodrigo Souza", "Software Engineer", "iOS Developer", "Swift", "Rust", "Distributed Systems", "Caixa", "Banco do Brasil", "Flutter", "Fullstack", "FinTech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300 min-h-screen relative`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
