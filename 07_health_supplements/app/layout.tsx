import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verdant — Daily supplements that earn their shelf space",
  description:
    "Verdant makes small-batch daily supplements: third-party tested, sugar-free and dosed at clinical levels. Free shipping over $45, 60-day guarantee.",
  openGraph: {
    title: "Verdant — Daily supplements, clinically dosed",
    description: "Third-party tested daily supplements. 60-day guarantee, cancel anytime.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#edf2e8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
