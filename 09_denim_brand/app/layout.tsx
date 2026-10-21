import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rivet & Co — Selvedge denim, repaired for life",
  description:
    "Rivet & Co makes 12 oz selvedge denim in small runs — jeans, jackets and workwear built to fade, and repaired free for life.",
  openGraph: {
    title: "Rivet & Co — Made to be worn hard",
    description: "12 oz selvedge denim. Made in Portugal. Repaired free, forever.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#eae4d8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
