import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurélie — Fine jewellery, made to outlive trends",
  description:
    "Aurélie is a heritage jewellery atelier working in recycled gold and certified stones. Signature collections, made-to-order pieces and lifetime care.",
  openGraph: {
    title: "Aurélie — Fine jewellery since 1974",
    description: "Recycled gold, certified stones, hand-finished in three ateliers.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0b0a09" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
