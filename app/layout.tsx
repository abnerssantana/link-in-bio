import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abner Santana - Seu Alienígena Favorito!",
  description: "Compartilhando conhecimento sobre corrida de rua, treinos e experiências. Do iniciante ao avançado, todos são bem-vindos nessa jornada!",
  metadataBase: new URL("https://links.magictraining.run"),
  openGraph: {
    title: "Abner Santana - Seu Alienígena Favorito!",
    description: "Compartilhando conhecimento sobre corrida de rua, treinos e experiências. Do iniciante ao avançado, todos são bem-vindos nessa jornada!",
    url: "https://links.magictraining.run",
    siteName: "Magic Training",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}