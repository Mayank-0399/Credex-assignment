import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Spend Audit",
  description: "Audit your AI stack and reduce unnecessary spend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}