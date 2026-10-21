import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plato — Nootropics without the noise",
  description:
    "Plato builds six-ingredient nootropic stacks dosed at study levels, third-party tested and published batch-by-batch. Sharper hours, no jitters, no proprietary blends.",
  openGraph: {
    title: "Plato — Nootropics without the noise",
    description: "Six ingredients, study doses, published lab results. Focus without the jitters.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0a0b0d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
