import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MagicRemove | Free Open Source Background Remover",
    template: "%s | MagicRemove"
  },
  description: "A clean, modern, privacy-first open-source background removing tool powered by the Remove.bg API and the GameForSmart ecosystem.",
  applicationName: "MagicRemove",
  authors: [{ name: "GameForSmart" }, { name: "PT UBIG" }],
  generator: "Next.js",
  keywords: ["background remover", "open source", "react", "nextjs", "remove.bg", "gameforsmart", "pt ubig", "free tool", "image editing"],
  creator: "PT UBIG",
  publisher: "GameForSmart",
  openGraph: {
    type: "website",
    url: "https://your-domain.com",
    title: "MagicRemove | Free Open Source Background Remover",
    description: "A beautifully crafted, privacy-first background removing tool built for developers and students.",
    siteName: "MagicRemove",
    images: [{
      url: "https://your-domain.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "MagicRemove Preview"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MagicRemove | Free Open Source Background Remover",
    description: "Remove image backgrounds in milliseconds with this free open-source Next.js tool.",
    creator: "@gameforsmart",
    images: ["https://your-domain.com/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
