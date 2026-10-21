import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mollen — Home textiles woven to outlast trends",
  description:
    "Mollen makes bedding, bath and table linen from long-staple cotton and European flax — woven in small mills in Portugal, softened with every wash.",
  openGraph: {
    title: "Mollen — Home textiles woven to last",
    description: "Percale and sateen bedding, waffle towels and table linen. 100-night trial, woven in Portugal.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f7f1e8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
