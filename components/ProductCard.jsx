export default function ProductCard({ product }) {
  if (!product) {
    return (
      <article className="rounded-2xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">
          Product unavailable.
        </p>
      </article>
    );
  }

  const name = product.name ?? product.title ?? "Untitled Product";
  const location = product.location ?? "Canada";
  const image = product.image ?? "📦";

  const price =
    typeof product.price === "number"
      ? `$${product.price.toLocaleString("en-CA")}`
      : product.price
        ? String(product.price).startsWith("$")
          ? String(product.price)
          : `$${product.price}`
        : "Price unavailable";

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-48 items-center justify-center bg-gray-100 text-6xl transition group-hover:bg-gray-200">
        {image}
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="line-clamp-2 text-xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          📍 {location}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-black text-gray-900">
            {price}
          </p>

          <button
            type="button"
            className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
}