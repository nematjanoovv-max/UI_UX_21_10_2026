import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brightpaw Veterinary — Care your pet actually enjoys",
  description:
    "Brightpaw is a fear-free veterinary clinic group with three locations and a 24/7 emergency line. Wellness plans, dentistry, surgery and diagnostics under one roof.",
  openGraph: {
    title: "Brightpaw Veterinary — Fear-free pet care",
    description: "Three clinics, 24/7 emergency line, fear-free certified team. Book online in 60 seconds.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#fdf7ef" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
