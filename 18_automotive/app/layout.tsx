import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northline — Commercial fleets that never lose a day",
  description:
    "Northline runs electric and diesel fleets for 340 companies across Europe: leasing, telematics, in-house maintenance and 24/7 roadside. 4,100 vehicles on the road, 98.6% uptime.",
  openGraph: {
    title: "Northline — Commercial fleets that never lose a day",
    description: "Fleet leasing, telematics and 24/7 support. 4,100 vehicles, 98.6% uptime.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f6f5f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira+Condensed:wght@500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
