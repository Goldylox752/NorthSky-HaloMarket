import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

async function getFeaturedProducts() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("products")
    .select(`
      id,
      title,
      slug,
      image,
      price,
      location,
      featured,
      category,
      profiles(
        username,
        verified,
        seller_rating
      )
    `)
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(8);

  return data || [];
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price || 0);
}

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  if (!products.length) {
    return null;
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-center justify-between">

          <div>

            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              ⭐ Featured Listings
            </span>

            <h2 className="mt-5 text-4xl font-black">
              Trending On Halo
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Hand-picked listings from trusted Canadian sellers.
            </p>

          </div>

          <Link
            href="/browse"
            className="rounded-xl border border-indigo-600 px-6 py-3 font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
          >
            Browse All
          </Link>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-60 bg-gray-100">

                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-7xl">
                    📦
                  </div>
                )}

                <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                  Featured
                </div>

              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold">
                    {product.category}
                  </span>

                  {product.profiles?.verified && (
                    <span className="text-xs font-bold text-green-600">
                      ✓ Verified
                    </span>
                  )}

                </div>

                <h3 className="mt-4 line-clamp-2 text-lg font-black">
                  {product.title}
                </h3>

                <p className="mt-4 text-3xl font-black text-indigo-600">
                  {formatPrice(product.price)}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  📍 {product.location}
                </p>

                <div className="mt-6 flex items-center justify-between border-t pt-4">

                  <span className="font-semibold">
                    {product.profiles?.username || "Halo Seller"}
                  </span>

                  <span className="text-yellow-500">
                    ⭐ {product.profiles?.seller_rating ?? "5.0"}
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}
