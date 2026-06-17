import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: `${business.nama} — Variasi & Racing Parts Motor | Jakarta Barat`,
  description:
    "Beng Motor: jual knalpot, jeroan mesin, spion, saklar, lampu & variasi motor di Jakarta Barat. Harga bengkel, pesan langsung via WhatsApp.",
  keywords: [
    "variasi motor jakarta barat",
    "knalpot racing",
    "sparepart motor",
    "spion cnc",
    "bore up",
    "beng motor",
  ],
  openGraph: {
    title: `${business.nama} — Variasi & Racing Parts Motor`,
    description:
      "Knalpot, jeroan, spion, saklar, lampu & variasi motor. Harga bengkel, pesan via WhatsApp.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,400;0,600;0,800;0,900;1,800;1,900&family=Saira+Condensed:wght@600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
