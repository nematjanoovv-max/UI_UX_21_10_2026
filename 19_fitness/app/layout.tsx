import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gummi — A gym people actually stick to",
  description:
    "Gummi runs seven studios with 240 classes a week: strength, HIIT, yoga, mobility, run club and recovery. 14-day free trial, cancel from the app, 2,900 members.",
  openGraph: {
    title: "Gummi — A gym people actually stick to",
    description: "240 classes a week across 7 studios. Start your 14-day free trial.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
