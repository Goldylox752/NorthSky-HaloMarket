import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://halo-market.vercel.app"
  ),

  title: {
    default: "Halo Marketplace Canada | Buy & Sell Locally",
    template: "%s | Halo Marketplace",
  },

  description:
    "Halo Marketplace is Canada's modern online marketplace for buying and selling vehicles, electronics, furniture, gaming products, tools, and more.",

  keywords: [
    "Halo Marketplace",
    "Canada marketplace",
    "buy and sell Canada",
    "local marketplace",
    "online marketplace",
    "classified ads Canada",
    "used products Canada",
  ],

  authors: [
    {
      name: "Halo Marketplace",
    },
  ],

  creator: "Halo Marketplace",

  publisher: "Halo Marketplace",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Halo Marketplace Canada | Buy & Sell Locally",

    description:
      "Buy and sell vehicles, electronics, furniture, gaming products, tools, and more across Canada.",

    type: "website",

    locale: "en_CA",

    siteName: "Halo Marketplace",

    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://halo-market.vercel.app",
  },

  twitter: {
    card: "summary_large_image",

    title: "Halo Marketplace Canada | Buy & Sell Locally",

    description:
      "Canada's modern marketplace for buying and selling locally.",
  },

  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://halo-market.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}