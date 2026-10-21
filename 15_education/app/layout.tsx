import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coursely Academy — 12-week career programmes",
  description:
    "Coursely Academy runs 12-week, mentor-led programmes in data analytics, product design, frontend and growth marketing. Portfolio-first, with career support until you are hired.",
  openGraph: {
    title: "Coursely Academy — 12-week career programmes",
    description: "Mentor-led cohorts in data, design, frontend and growth. Free first week, career support included.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f7f6fb" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
