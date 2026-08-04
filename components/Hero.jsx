"use client";

import Link from "next/link";

const quickCategories = [
  "Electronics",
  "Vehicles",
  "Furniture",
  "Gaming",
  "Real Estate",
  "Tools",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 text-white">

      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-20 top-16 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute right-20 bottom-16 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20">

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            🇨🇦 Canada's Trusted Marketplace
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Buy, Sell &
            <br />
            Discover
            <span className="block text-cyan-300">
              Everything Local
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-indigo-100">
            Halo Marketplace connects Canadians with trusted buyers and
            sellers. Find vehicles, electronics, furniture, collectibles,
            services, and thousands of local deals every day.
          </p>

          {/* Search */}
          <div className="mt-10 rounded-2xl bg-white p-3 shadow-2xl">

            <form
              action="/browse"
              className="flex flex-col gap-3 lg:flex-row"
            >
              <input
                name="search"
                placeholder="Search anything..."
                className="flex-1 rounded-xl border px-5 py-4 text-black outline-none"
              />

              <select
                name="location"
                className="rounded-xl border px-5 py-4 text-black"
              >
                <option value="">Anywhere</option>
                <option>Alberta</option>
                <option>British Columbia</option>
                <option>Ontario</option>
                <option>Quebec</option>
                <option>Saskatchewan</option>
                <option>Manitoba</option>
              </select>

              <button
                className="rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white transition hover:bg-indigo-700"
              >
                Search
              </button>
            </form>

          </div>

          {/* Quick Categories */}
          <div className="mt-8 flex flex-wrap gap-3">
            {quickCategories.map((category) => (
              <Link
                key={category}
                href={`/browse?category=${encodeURIComponent(category)}`}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/sell"
              className="rounded-xl bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Start Selling
            </Link>

            <Link
              href="/browse"
              className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black"
            >
              Browse Listings
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
