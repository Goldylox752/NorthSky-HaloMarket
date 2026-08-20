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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://halo-market.vercel.app";

export const metadata = {
  title: "Halo Marketplace Canada | Buy & Sell Locally",
  description:
    "Buy and sell vehicles, electronics, furniture, gaming products, tools, fashion, and more across Canada with Halo Marketplace.",
  keywords: [
    "Halo Marketplace",
    "Canadian marketplace",
    "buy and sell Canada",
    "local marketplace Canada",
    "used products Canada",
    "online marketplace Canada",
    "buy used items Canada",
    "sell items Canada",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Halo Marketplace Canada | Buy & Sell Locally",
    description:
      "Buy and sell vehicles, electronics, furniture, gaming products, tools, and more across Canada.",
    url: SITE_URL,
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
        seller_id
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
      console.error(
        "Halo Marketplace products query failed:",
        error.message
      );

      return [];
    }

    if (!Array.isArray(data)) {
      return [];
    }

    return data
      .filter((product) => product?.id)
      .map((product) => ({
        id: product.id,
        title: product.title ?? "Untitled Listing",
        name: product.title ?? "Untitled Listing",
        slug: product.slug ?? null,
        price: product.price ?? null,
        image: product.image ?? null,
        images: Array.isArray(product.images)
          ? product.images
          : [],
        location: product.location ?? "Canada",
        category: product.category ?? "Other",
        condition: product.condition ?? "Used",
        featured: product.featured === true,
        created_at: product.created_at ?? null,
        seller_id: product.seller_id ?? null,
      }));
  } catch (error) {
    console.error(
      "Halo Marketplace homepage data error:",
      error
    );

    return [];
  }
}

function MarketplaceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "Halo Marketplace",
    description:
      "A Canadian online marketplace for buying and selling products locally.",
    url: SITE_URL,
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
  };

  return (
    <Script
      id="halo-marketplace-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default async function Home() {
  const products = await getProducts();

  const featuredProducts = products
    .filter((product) => product?.featured === true)
    .slice(0, 4);

  const latestProducts = products.slice(0, 12);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <MarketplaceSchema />

      <Navbar />

      <Hero />

      <QuickActions />

      {featuredProducts.length > 0 && (
        <FeaturedListings products={featuredProducts} />
      )}

      <Categories />

      <LatestListings products={latestProducts} />

      <SellerCTA />

      <Footer />
    </main>
  );
}