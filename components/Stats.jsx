"use client";

const stats = [
  {
    value: "250K+",
    label: "Active Listings",
    description: "Products available across Canada",
  },
  {
    value: "50K+",
    label: "Verified Sellers",
    description: "Trusted businesses and individuals",
  },
  {
    value: "1M+",
    label: "Monthly Visitors",
    description: "Canadians shopping every month",
  },
  {
    value: "100%",
    label: "Canadian",
    description: "Built for local communities",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 border-b">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Marketplace Growth
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Canada's Fastest Growing Marketplace
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Halo Marketplace connects buyers and sellers from coast to coast,
            making local commerce faster, safer, and easier.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:bg-white hover:shadow-xl"
            >
              <h3 className="text-5xl font-black text-indigo-600">
                {stat.value}
              </h3>

              <p className="mt-4 text-xl font-bold text-gray-900">
                {stat.label}
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
