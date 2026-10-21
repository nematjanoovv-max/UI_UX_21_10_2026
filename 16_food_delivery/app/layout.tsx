import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Createx — Food delivery that arrives on time",
  description:
    "Createx delivers from 2,400 local restaurants with live tracking, honest arrival times and free delivery on orders over $25. Average delivery: 24 minutes.",
  openGraph: {
    title: "Createx — Food delivery that arrives on time",
    description: "2,400 restaurants, live tracking, honest ETAs. Free delivery over $25.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#fff5f1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rubik:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
