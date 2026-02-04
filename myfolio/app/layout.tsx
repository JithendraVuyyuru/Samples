import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Myfolio",
  description: "A Bento-inspired portfolio builder with live theming.",
  openGraph: {
    title: "Myfolio",
    description: "A Bento-inspired portfolio builder with live theming.",
    images: [
      {
        url: "/api/og?title=Myfolio&subtitle=Bento%20profile%20builder",
        width: 1200,
        height: 630,
        alt: "Myfolio Bento profile builder",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
