import Script from "next/script";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestListings from "@/components/LatestListings";
import FeaturedListings from "@/components/FeaturedListings";
import Categories from "@/components/Categories";
import QuickActions from "@/components/QuickActions";
import SellerCTA from "@/components/SellerCTA";
import Footer from "@/components/Footer";

import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Halo Marketplace Canada | Buy & Sell Locally",
  description:
    "Halo Marketplace is a Canadian online marketplace for buying and selling vehicles, electronics, furniture, gaming products, tools, and more.",
  keywords: [
    "Canada marketplace",
    "buy and sell Canada",
    "local marketplace Canada",
    "used products Canada",
    "online marketplace Canada",
    "Halo Marketplace",
  ],
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://halo-market.vercel.app",
  },
  openGraph: {
    title: "Halo Marketplace Canada | Buy & Sell Locally",
    description:
      "Buy and sell vehicles, electronics, furniture, gaming products, tools, and more with Halo Marketplace.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://halo-market.vercel.app",
    siteName: "Halo Marketplace",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halo Marketplace Canada",
    description:
      "Buy and sell locally with Halo Marketplace.",
  },
};

async function getProducts() {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("products")
      .select(`
        id,
        title,
        slug,
        price,
        image,
        images,
        location,
        category,
        condition,
        featured,
        created_at,
        seller_id,
        profiles (
          username,
          avatar,
          verified,
          seller_rating,
          sales_count
        )
      `)
      .eq("status", "active")
      .order("featured", {
        ascending: false,
      })
      .order("created_at", {
        ascending: false,
      })
      .limit(12);

    if (error) {
      console.error("Halo Marketplace products error:", error);
      return [];
    }

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Halo Marketplace homepage error:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  const featuredProducts = products
    .filter((product) => product?.featured === true)
    .slice(0, 4);

  const latestProducts = products.slice(0, 12);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://halo-market.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "Halo Marketplace",
    description:
      "A Canadian online marketplace for buying and selling products locally.",
    url: siteUrl,
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Script
        id="halo-marketplace-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Navbar />

      <Hero />

      <QuickActions />

      {featuredProducts.length > 0 && (
        <FeaturedListings
          products={featuredProducts}
        />
      )}

      <Categories />

      <LatestListings
        products={latestProducts}
      />

      <SellerCTA />

      <Footer />
    </main>
  );
}