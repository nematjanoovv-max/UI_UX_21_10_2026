import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderfolk — Travel stories from the slow lane",
  description:
    "An independent travel magazine: long reads, field notes and honest guides from writers who stay longer than a weekend.",
  openGraph: {
    title: "Wanderfolk — Travel stories from the slow lane",
    description: "Long reads and field notes from writers who stay longer than a weekend.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#fbf7f0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,500..800;1,500..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
