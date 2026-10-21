import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oneflow — Payments infrastructure for growing teams",
  description:
    "Oneflow is payment infrastructure for companies that outgrew spreadsheets: processing, payouts, a real double-entry ledger and reconciliation that closes in hours, not weeks.",
  openGraph: {
    title: "Oneflow — Payments infrastructure for growing teams",
    description: "Processing, payouts, a real ledger and reconciliation. SOC 2 Type II, PCI DSS Level 1.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#fdf1f6" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
