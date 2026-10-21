import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cascade — Ship product work without the status meeting",
  description:
    "Cascade connects roadmap, specs, releases and customer feedback in one workspace. European hosting, SOC 2 Type II, and teams of 5 to 5,000 use it to ship 30% faster.",
  openGraph: {
    title: "Cascade — Ship product work without the status meeting",
    description: "Roadmap, specs, releases and feedback in one workspace. Free for 5 seats.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f7f8fb" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Sans:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
