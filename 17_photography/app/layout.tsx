import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kugoo — Photography studio for brands and people",
  description:
    "Kugoo is an editorial photography studio shooting weddings, campaigns, products and portraits. Twelve years, 480 shoots, one obsession: light that feels like the moment.",
  openGraph: {
    title: "Kugoo — Photography studio for brands and people",
    description: "Editorial, weddings, product and portrait photography. Book a shoot.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0a0a14" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
