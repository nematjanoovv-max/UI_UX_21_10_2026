import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Nine — Design studio, Copenhagen",
  description:
    "Atelier Nine is a small design studio working on brand, digital and spatial projects for people who care about the details.",
  openGraph: {
    title: "Atelier Nine — Design studio",
    description: "Brand, digital and spatial design. Copenhagen, since 2016.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f7f6f4" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
