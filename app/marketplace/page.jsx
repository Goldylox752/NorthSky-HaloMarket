import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";

export const metadata = {
  title: "Marketplace | Halo Market",
  description:
    "Explore products, vehicles, electronics, fashion, home goods, and more across Canada.",
};

const categories = [
  {
    title: "Electronics",
    icon: "📱",
  },
  {
    title: "Vehicles",
    icon: "🚗",
  },
  {
    title: "Home",
    icon: "🏠",
  },
  {
    title: "Fashion",
    icon: "👕",
  },
];

const products = [
  {
    id: 1,
    name: "MacBook Pro M3",
    price: 1899,
    location: "Edmonton, AB",
    image: "💻",
  },
  {
    id: 2,
    name: "Toyota Tacoma TRD",
    price: 34500,
    location: "Calgary, AB",
    image: "🚙",
  },
  {
    id: 3,
    name: "Gaming PC",
    price: 2200,
    location: "Toronto, ON",
    image: "🎮",
  },
  {
    id: 4,
    name: "Mountain Bike",
    price: 750,
    location: "Vancouver, BC",
    image: "🚲",
  },
];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="bg-indigo-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              🇨🇦 Canadian Marketplace
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Explore Halo Marketplace
            </h1>

            <p className="mt-5 text-lg leading-8 text-white/80 sm:text-xl">
              Discover products, vehicles, electronics, fashion, home goods,
              and more from sellers across Canada.
            </p>

            <div className="mt-8 max-w-2xl">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Browse
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Popular Categories
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Marketplace
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Latest Products
            </h2>

            <p className="mt-2 text-gray-600">
              Fresh listings from sellers across Canada.
            </p>
          </div>

          <select
            aria-label="Sort products"
            className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            defaultValue="newest"
          >
            <option value="newest">Newest</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}