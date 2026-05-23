import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoPilot — Privacy-first portfolio analytics for AI",
  description:
    "Connect your crypto and brokerage accounts to Claude and other AI assistants. Read-only, open-source MCP server. Ask about your portfolio in plain language.",
  openGraph: {
    title: "CryptoPilot — Privacy-first portfolio analytics for AI",
    description:
      "Connect your crypto and brokerage accounts to Claude. Read-only, open-source.",
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
      <body className={inter.className}>
        {children}
        <script
          async
          src="https://subscribe-forms.beehiiv.com/attribution.js"
        />
      </body>
    </html>
  );
}
