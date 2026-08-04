"use client";

import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    icon: "📱",
    count: "18,400+ Listings",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Vehicles",
    icon: "🚗",
    count: "12,900+ Listings",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Real Estate",
    icon: "🏡",
    count: "6,300+ Listings",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Furniture",
    icon: "🛋️",
    count: "15,100+ Listings",
    color: "from-yellow-500 to-orange-400",
  },
  {
    name: "Gaming",
    icon: "🎮",
    count: "9,800+ Listings",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Fashion",
    icon: "👕",
    count: "14,200+ Listings",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Tools",
    icon: "🛠️",
    count: "5,700+ Listings",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "Sports",
    icon: "⚽",
    count: "4,600+ Listings",
    color: "from-emerald-500 to-green-600",
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">

          <div>
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Browse Categories
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
              Shop Everything
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Discover thousands of products across Canada's most popular
              marketplace categories.
            </p>
          </div>

          <Link
            href="/categories"
            className="rounded-xl border border-indigo-600 px-6 py-3 font-bold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
          >
            View All Categories →
          </Link>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/browse?category=${encodeURIComponent(category.name)}`}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"
            >

              <div
                className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}
              >
                <span className="text-6xl transition duration-300 group-hover:scale-110">
                  {category.icon}
                </span>
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-black text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {category.count}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold text-indigo-600">
                    Explore
                  </span>

                  <span className="text-xl transition group-hover:translate-x-2">
                    →
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
