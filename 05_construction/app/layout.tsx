import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gridworks — We build the bones of the city",
  description:
    "Gridworks is a general contractor and design-build partner for industrial, commercial and logistics projects. 22 years, 340 projects, zero lost-time incidents.",
  openGraph: {
    title: "Gridworks — General contracting & design-build",
    description: "Industrial, commercial and logistics construction. 340 projects. Zero lost-time incidents.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#131211" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
