import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "WikiUPSC",
  description: "A focused wiki for UPSC Mains preparation with PSIR optional"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>WikiUPSC</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/mains">Mains + PSIR</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
