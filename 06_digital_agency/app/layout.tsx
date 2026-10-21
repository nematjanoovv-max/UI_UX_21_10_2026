import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northlight — Brand, web & product studio",
  description:
    "Northlight is an independent design studio building brands, websites and digital products with a bias for work people remember.",
  openGraph: {
    title: "Northlight — Brand, web & product studio",
    description: "Brand identity, websites and digital products. 120+ projects, 14 awards.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f4f2ee" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
