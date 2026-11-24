import Link from "next/link";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://north-sky-auto-green.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NorthSky Auto | Sell Your Vehicle Directly to Canadian Dealers",
  description:
    "Submit your vehicle once and reach verified Canadian dealerships actively sourcing inventory. Fast online listing, direct dealer offers, and zero obligation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NorthSky Auto | Canadian Vehicle Marketplace",
    description:
      "Submit your vehicle once and connect with Canadian dealers looking for inventory.",
    url: SITE_URL,
    siteName: "NorthSky Auto",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthSky Auto | Canadian Vehicle Marketplace",
    description:
      "Submit your vehicle once and connect with Canadian dealers looking for inventory.",
  },
};

const STEPS = [
  {
    number: "01",
    title: "Submit your vehicle",
    text: "Enter your year, make, model, kilometres, condition, postal code, and asking price in under 3 minutes.",
  },
  {
    number: "02",
    title: "Reach Canadian dealers",
    text: "Your listing is shared directly with licensed dealerships actively sourcing used vehicles across Canada.",
  },
  {
    number: "03",
    title: "Get connected & sell",
    text: "Interested dealers reach out directly. Compare interest and close the deal on your terms.",
  },
];

const BENEFITS = [
  {
    icon: "🇨🇦",
    title: "Built for Canada",
    text: "Designed specifically for Canadian sellers, regional markets, and licensed dealerships coast to coast.",
  },
  {
    icon: "⚡",
    title: "One simple submission",
    text: "Skip driving from lot to lot or dealing with endless messages on public classified sites.",
  },
  {
    icon: "🤝",
    title: "Zero obligation",
    text: "Listing is transparent and straightforward—you stay in control of who you talk to and when you sell.",
  },
];

const SELLER_PERKS = [
  "List your vehicle online in minutes",
  "Get exposure to verified Canadian dealerships",
  "Receive direct inquiries without middleman markups",
];

const DEALER_PERKS = [
  "Browse private-party inventory",
  "Verify mileage, trim & condition upfront",
  "Contact sellers directly",
];

const FAQS = [
  {
    question: "Is there any obligation to accept an offer?",
    answer:
      "None at all. Submitting your vehicle puts it in front of interested dealers, and you are completely free to accept, negotiate, or decline any offer.",
  },
  {
    question: "What details do I need to list my vehicle?",
    answer:
      "Just the basics: year, make, model, trim, current odometer reading (in km), general condition, your city or postal code, and your contact information.",
  },
  {
    question: "Which parts of Canada does NorthSky Auto serve?",
    answer:
      "NorthSky Auto is built for sellers and dealerships across Canada, connecting local vehicles with regional and national dealer buyers.",
  },
];

function StepCard({ number, title, text }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 text-sm font-bold tracking-widest text-blue-600">
        {number}
      </div>
      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
      <p className="leading-relaxed text-slate-600">{text}</p>
    </article>
  );
}

function BenefitCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 text-4xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="leading-relaxed text-slate-600">{text}</p>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.28),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.14),transparent_40%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:60px_60px]"
        />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 lg:py-32">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
            Canadian Vehicle Marketplace
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Sell your vehicle.
            <br />
            <span className="text-blue-400">Reach Canadian dealers.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            List your vehicle once and put it directly in front of Canadian
            dealerships actively looking to buy inventory.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sell"
              className="w-full rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
            >
              Sell my vehicle <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/dealer"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              I&apos;m a dealer
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Simple submission &middot; Direct dealer exposure &middot; No obligation
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            How it works
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Submit once. Let dealers come to you.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Replace dozens of dealership calls and appraisals with a single
            online submission.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </section>

      {/* For Sellers */}
      <section className="border-y border-slate-200/80 bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
              For sellers
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get serious dealer eyes on your vehicle.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Whether you&apos;re upgrading, downsizing, or selling a lease
              buyout, NorthSky connects you directly with dealers ready to buy.
            </p>

            <ul className="mt-8 space-y-3.5">
              {SELLER_PERKS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-medium text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/sell"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Start your listing <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Sample Listing Preview Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Sample dealer view
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Active listing
              </span>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    SUV &middot; AWD &middot; Automatic
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    2022 Toyota RAV4 XLE
                  </h3>
                </div>
                <span className="rounded-lg bg-white px-3 py-1 text-sm font-bold text-slate-900 shadow-sm">
                  48,200 km
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-4 text-xs font-medium text-slate-600">
                <div>
                  <span className="block text-slate-400">Location</span>
                  Edmonton, AB
                </div>
                <div>
                  <span className="block text-slate-400">Condition</span>
                  Clean title &middot; Single owner
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Your vehicle details are formatted cleanly so dealerships can
              evaluate your car and reach out quickly.
            </p>

            <Link
              href="/sell"
              className="mt-6 block rounded-xl bg-slate-900 py-3.5 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              List your vehicle <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* For Dealers */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">
            For dealers
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Source local inventory faster.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
            Browse seller-submitted vehicles across Canada and connect directly
            with owners ready to sell.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-300">
            {DEALER_PERKS.map((perk) => (
              <span key={perk}>✓ {perk}</span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dealer"
              className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
            >
              Explore dealer portal <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/buyers"
              className="w-full rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-slate-500 hover:bg-white/5 sm:w-auto"
            >
              View dealer pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why NorthSky Auto */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Why NorthSky Auto
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            A simpler way to connect sellers and dealers.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item) => (
            <BenefitCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
              Common questions
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition hover:border-slate-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-blue-600 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200/80 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Get started
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to make a move?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Whether you&apos;re selling your vehicle or acquiring stock for your
            lot, get started in minutes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sell"
              className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
            >
              Sell a vehicle <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/dealer"
              className="w-full rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            >
              Join as a dealer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
