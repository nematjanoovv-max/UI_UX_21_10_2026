import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portage — Freight without the friction",
  description:
    "Portage is a modern logistics partner for ocean, air and road freight. Live tracking, one control tower, and a network that never sleeps.",
  openGraph: {
    title: "Portage — Freight without the friction",
    description: "Ocean, air and road freight with live tracking and one control tower.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#071018" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
