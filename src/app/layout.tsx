import type { Metadata } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { KeepInTouch } from "@/components/KeepInTouch";
import { SiteFooter } from "@/components/SiteFooter";
import { copy } from "@/lib/company";

const display = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-face",
  style: ["normal", "italic"],
});

const sans = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-face",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#222325] text-white">
        <Header />
        <main>{children}</main>
        <SiteFooter />
        <KeepInTouch />
      </body>
    </html>
  );
}
