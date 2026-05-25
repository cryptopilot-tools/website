import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { translations } from "@/lib/translations";
import { LanguageProvider } from "@/app/language-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoPilot — Privacy-first portfolio analytics for AI",
  description: translations.en.hero.subtitle,
  openGraph: {
    title: "CryptoPilot — Privacy-first portfolio analytics for AI",
    description: translations.en.footer.tagline,
    url: "https://cryptopilot.tools",
    siteName: "CryptoPilot",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1C1B18] text-[#F5F4EF]`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </LanguageProvider>
        <script
          async
          src="https://subscribe-forms.beehiiv.com/attribution.js"
        />
      </body>
    </html>
  );
}
