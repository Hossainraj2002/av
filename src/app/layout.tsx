import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advantage Venture | Crypto Venture Network",
  description: "Advantage Venture helps blockchain and Web3 startups with fundraising, CEX collaboration, KOL marketing, strategic partnerships, and early-stage investments.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Advantage Venture | Crypto Venture Network",
    description: "Advantage Venture helps blockchain and Web3 startups with fundraising, CEX collaboration, KOL marketing, strategic partnerships, and early-stage investments.",
    type: "website",
    locale: "en_US",
    siteName: "Advantage Venture",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advantage Venture | Crypto Venture Network",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advantage Venture | Crypto Venture Network",
    description: "Advantage Venture helps blockchain and Web3 startups with fundraising, CEX collaboration, KOL marketing, strategic partnerships, and early-stage investments.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Advantage Venture",
              "url": "https://advantageventure.xyz",
              "logo": "https://advantageventure.xyz/logo.jpg",
              "sameAs": [
                "https://x.com/AdvantageVentur",
                "https://t.me/dealorhossain7"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#05070A] text-[#94A3B8] font-sans selection:bg-[#2563EB]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
