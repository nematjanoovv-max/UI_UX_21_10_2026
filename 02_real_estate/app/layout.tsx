import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habitat — Homes with history, service without",
  description:
    "Habitat is a boutique real estate studio: curated listings, off-market access and a concierge team that handles everything from first viewing to final signature.",
  openGraph: {
    title: "Habitat — Homes with history, service without",
    description: "Curated homes, off-market access and concierge service from viewing to signature.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f6f2ea" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
