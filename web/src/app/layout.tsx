import "./globals.css"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sorting Visualizer",
  description: "Project created to help programmers understand the iterations that happen in the sorting algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
