import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night Trips — Small-group adventure travel",
  description:
    "Night Trips runs twelve-person expeditions to Patagonia, the Dolomites, Nepal and beyond. Real routes, certified guides, honest difficulty grades.",
  openGraph: {
    title: "Night Trips — Small-group adventure travel",
    description: "Twelve-person expeditions with certified guides. Patagonia, Dolomites, Nepal, Morocco.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#121834" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
