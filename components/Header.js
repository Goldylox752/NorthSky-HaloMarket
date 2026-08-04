"use client";

import Link from "next/link";
import { Menu, Search, Heart, MessageCircle, ShoppingBag, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-xl font-black text-white">
            H
          </div>

          <div>
            <h1 className="text-xl font-black leading-none">
              Halo Marketplace
            </h1>

            <p className="text-xs text-gray-500">
              Buy & Sell Across Canada
            </p>
          </div>
        </Link>

        {/* Search */}
        <div className="hidden w-full max-w-xl lg:block">
          <div className="flex items-center rounded-xl border bg-gray-50 px-4 py-3">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search electronics, vehicles, furniture..."
              className="ml-3 w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 font-medium lg:flex">
          <Link href="/browse">Browse</Link>

          <Link href="/categories">Categories</Link>

          <Link href="/stores">Stores</Link>

          <Link href="/sell">Sell</Link>
        </nav>

        {/* Icons */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/favorites">
            <Heart className="h-6 w-6" />
          </Link>

          <Link href="/messages">
            <MessageCircle className="h-6 w-6" />
          </Link>

          <Link href="/dashboard">
            <ShoppingBag className="h-6 w-6" />
          </Link>

          <Link href="/profile">
            <User className="h-6 w-6" />
          </Link>

          <Link
            href="/sell"
            className="rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
          >
            Sell Now
          </Link>
        </div>

        {/* Mobile */}
        <button className="lg:hidden">
          <Menu className="h-7 w-7" />
        </button>

      </div>
    </header>
  );
}
