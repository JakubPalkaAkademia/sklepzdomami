import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sklepzdomami — kup dom online",
  description:
    "Internetowy sklep z domami. Przeglądaj oferty domów i apartamentów w całej Polsce i dodawaj je do koszyka.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/10 py-8 text-center text-sm text-neutral-500 dark:border-white/10">
          © {new Date().getFullYear()} sklepzdomami — demo Cloud Agent
        </footer>
      </body>
    </html>
  );
}
