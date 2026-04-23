import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LiveChatPlaceholder } from "@/components/live-chat-placeholder";
import { CartDrawer } from "@/components/cart-drawer";
import { ForexScene } from "@/components/forex-scene";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ForexAI Bots | AI-Powered Forex Trading",
  description: "Automated Forex Trading with AI Precision. Buy intelligent forex bots with verified performance.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "ForexAI Bots",
    description: "AI-powered forex bots with risk-managed automation.",
    type: "website",
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} min-h-screen bg-[#1b0749] text-slate-100`}>
        <Providers>
          <ForexScene />
          <Navbar />
          <main className="relative z-10 w-full flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <LiveChatPlaceholder />
        </Providers>
      </body>
    </html>
  );
}
