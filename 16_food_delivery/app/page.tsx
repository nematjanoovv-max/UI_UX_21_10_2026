import {
  ArrowRight,
  ArrowUpRight,
  Bike,
  Check,
  Clock,
  Flame,
  Leaf,
  MapPin,
  Pizza,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Timer,
  Truck,
  Utensils,
} from "lucide-react";
import {
  Avatar,
  Counter,
  Footer,
  Navbar,
  Reveal,
  SectionHead,
  Stagger,
  StaggerItem,
  Stars,
} from "@/components/kit";

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-fg)]">
        <Utensils size={16} />
      </span>
      <span className="display text-[19px]">Createx</span>
    </span>
  );
}

const restaurants = [
  {
    name: "Osteria Bianca",
    cuisine: "Italian · Pasta",
    rating: "4.9",
    reviews: 1284,
    time: "18–24 min",
    fee: "$1.99",
    promo: "20% off",
    img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Sakura Handroll",
    cuisine: "Japanese · Sushi",
    rating: "4.8",
    reviews: 962,
    time: "22–30 min",
    fee: "$2.49",
    promo: "",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "The Bearded Patty",
    cuisine: "Burgers · American",
    rating: "4.7",
    reviews: 2140,
    time: "20–26 min",
    fee: "$0.99",
    promo: "Free delivery",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Green Bowl Co.",
    cuisine: "Salads · Bowls",
    rating: "4.8",
    reviews: 738,
    time: "15–20 min",
    fee: "$1.49",
    promo: "",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Sunny Side",
    cuisine: "Breakfast · Bakery",
    rating: "4.9",
    reviews: 1520,
    time: "14–19 min",
    fee: "$1.49",
    promo: "Popular",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Sugar & Salt",
    cuisine: "Desserts · Coffee",
    rating: "4.8",
    reviews: 611,
    time: "16–22 min",
    fee: "$1.99",
    promo: "",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80",
  },
];

const steps = [
  { icon: Search, t: "Find your place", d: "2,400 local restaurants, filtered by delivery time rather than paid placement. The fastest kitchen near you comes first." },
  { icon: MapPin, t: "Track it honestly", d: "Live courier position plus a kitchen-side timer. If the restaurant is running late, the ETA updates before you have to ask." },
  { icon: Utensils, t: "Eat it hot", d: "Insulated bags on every bike and scooter. If your food arrives cold, that order is free — reported in two taps, no argument." },
];

const dishes = [
  { n: "01", name: "Cacio e pepe, extra pecorino", rest: "Osteria Bianca", price: "$16.50", tag: "Most ordered" },
  { n: "02", name: "Double smash, no pickles", rest: "The Bearded Patty", price: "$13.90", tag: "Fastest" },
  { n: "03", name: "Salmon nigiri set (12 pc)", rest: "Sakura Handroll", price: "$21.00", tag: "" },
  { n: "04", name: "Miso ginger grain bowl", rest: "Green Bowl Co.", price: "$12.40", tag: "Under 20 min" },
  { n: "05", name: "Buttermilk pancakes, berries", rest: "Sunny Side", price: "$11.20", tag: "" },
];

const reviews = [
  {
    quote: "Their ETA has been right within three minutes for every order I have placed this year. I stopped ordering from the other app entirely.",
    name: "Marta Kowalczyk",
    role: "Ordered 61 times · City centre",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "One order arrived lukewarm. I tapped “cold”, got a refund before the courier had left my street. That is how it should work.",
    name: "Rahul Sethi",
    role: "Ordered 34 times · Northgate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "I am a courier on Createx and the app tells me the kitchen's real prep time. I am not standing outside a restaurant for twenty minutes.",
    name: "Aisha Bello",
    role: "Courier partner since 2025",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

const plans = [
  {
    name: "Pay as you go",
    price: "Free",
    note: "No subscription needed",
    features: ["Delivery from $0.99", "Free delivery over $25", "Live tracking", "Refunds in two taps"],
  },
  {
    name: "Dash Pass",
    price: "$9.99",
    note: "per month",
    featured: true,
    features: ["Everything in Pay as you go", "Unlimited free delivery over $15", "5% off every order", "Priority courier matching", "Cancel anytime in the app"],
  },
  {
    name: "Family",
    price: "$19.99",
    note: "per month, up to 4 people",
    features: ["Everything in Dash Pass", "Shared carts and scheduled dinners", "10% off orders over $60", "Free delivery, no minimum"],
  },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Free delivery over $25 · Average city-centre delivery: 24 minutes"
        links={[
          { label: "Restaurants", href: "#restaurants" },
          { label: "How it works", href: "#how" },
          { label: "Top dishes", href: "#dishes" },
          { label: "Plans", href: "#plans" },
        ]}
        cta={{ label: "Order now", href: "#restaurants" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
          <div>
            <Reveal>
              <p className="kicker">2,400 local restaurants · one app</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-6">
                Dinner in 24 minutes,
                <br />
                <span className="hot">still hot.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Createx delivers from the kitchens near you with honest arrival times, insulated bags on every ride and
                refunds that take two taps. Order from a restaurant once — you will not go back to guessing.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <form className="search-bar mt-8 max-w-md" action="#" onSubmit={undefined}>
                <Search size={17} className="shrink-0 text-[var(--accent)]" />
                <input placeholder="Enter your address or postcode" aria-label="Delivery address" />
                <button type="submit" className="btn btn-primary shrink-0 !px-5">
                  Find food
                </button>
              </form>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--line)] pt-7">
                {[
                  { v: 2400, suf: "", l: "Restaurants" },
                  { v: 24, suf: " min", l: "Median delivery" },
                  { v: 4.9, suf: "", l: "App store rating", dec: 1 },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="display text-[clamp(1.6rem,3vw,2.3rem)]">
                      <Counter to={s.v} suffix={s.suf} decimals={s.dec ?? 0} />
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={30}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[30px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
                  alt="Dinner delivered from a local restaurant"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="float-a float-card absolute -left-4 top-10 hidden w-[218px] p-5 sm:block">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  <Timer size={12} className="text-[var(--accent)]" /> Arriving in
                </p>
                <p className="display mt-2 text-2xl">18 min</p>
                <p className="mt-1 text-[11.5px] text-[var(--muted)]">Osteria Bianca · 1.2 km away</p>
              </div>
              <div className="float-b float-card absolute -bottom-6 right-2 hidden items-center gap-3 p-4 sm:flex">
                <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Courier" size={42} />
                <div>
                  <p className="text-sm font-semibold">Aisha is on the way</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[var(--muted)]">
                    <Bike size={12} /> Courier partner · 4.9 rating
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* categories */}
      <section className="border-y border-[var(--line)] py-6">
        <div className="wrap flex flex-wrap gap-2.5">
          {[
            { label: "All food", icon: Sparkles },
            { label: "Pizza", icon: Pizza },
            { label: "Sushi", icon: Utensils },
            { label: "Burgers", icon: Flame },
            { label: "Healthy", icon: Leaf },
            { label: "Desserts", icon: ShoppingBag },
            { label: "Breakfast", icon: Clock },
          ].map((c, i) => (
            <button key={c.label} type="button" className={`chip ${i === 0 ? "active" : ""}`}>
              <c.icon size={13} /> {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* restaurants */}
      <section id="restaurants" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Delivering now"
              title={<span className="display">Kitchens near you, ranked by speed.</span>}
              sub="No paid placements and no “sponsored” surprises. If a place is slow tonight, it moves down the list until it is fast again."
            />
            <Reveal delay={0.1}>
              <a href="#plans" className="btn btn-ghost">
                Compare plans
                <ArrowRight />
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((r) => (
              <StaggerItem key={r.name}>
                <article className="rest-card h-full">
                  <div className="relative">
                    <img src={r.img} alt={r.name} loading="lazy" className="h-48 w-full object-cover" />
                    {r.promo ? <span className="promo-flag">{r.promo}</span> : null}
                    <span className="eta-chip">
                      <Clock size={12} className="text-[var(--accent)]" /> {r.time}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="display text-lg">{r.name}</h3>
                        <p className="mt-1 text-[12.5px] text-[var(--muted)]">{r.cuisine}</p>
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-[rgba(255,209,102,.28)] px-2.5 py-1 text-[12px] font-semibold">
                        <Star size={12} className="fill-current" /> {r.rating}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-5 text-[12.5px] text-[var(--muted)]">
                      <span>{r.reviews.toLocaleString("en-US")} ratings</span>
                      <span className="flex items-center gap-1.5">
                        <Truck size={13} className="text-[var(--accent)]" /> {r.fee}
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="How it works"
            title={<span className="display">Three taps, then somebody else does the work.</span>}
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <StaggerItem key={s.t}>
                <div className="step-card h-full">
                  <span className="step-ico">
                    <s.icon size={20} />
                  </span>
                  <h3 className="display mt-5 text-xl">{s.t}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--muted)]">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* top dishes */}
      <section id="dishes" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <SectionHead
              eyebrow="Popular right now"
              title={<span className="display">What the city is eating tonight.</span>}
              sub="Ranked by orders in the last hour, updated live. No promotional weighting."
            />
            <div className="mt-10">
              {dishes.map((d, i) => (
                <Reveal key={d.n} delay={i * 0.04}>
                  <a href="#restaurants" className="rank-row group">
                    <span className="rank-no">{d.n}</span>
                    <span>
                      <span className="block font-medium transition group-hover:text-[var(--accent)]">{d.name}</span>
                      {d.tag ? (
                        <span className="mt-0.5 inline-flex rounded-full bg-[rgba(240,86,60,.08)] px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                          {d.tag}
                        </span>
                      ) : null}
                    </span>
                    <span className="rank-rest text-[12.5px] text-[var(--muted)]">{d.rest}</span>
                    <span className="font-semibold">{d.price}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} y={28}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[24px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
                  alt="Fresh bowl delivered"
                  loading="lazy"
                  className="h-[380px] w-full object-cover md:h-[440px]"
                />
              </div>
              <div className="mt-4 rounded-[20px] border border-[var(--line)] bg-[var(--card)] p-6">
                <p className="display text-lg">Cold food policy</p>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                  If your order arrives cold or incomplete, tap the issue in the app. Refunds are automatic within five
                  minutes — no chat queue, no photo evidence, no arguing with a bot.
                </p>
                <p className="mt-4 text-[12px] text-[var(--muted)]">
                  Refunded automatically in 98.6% of reported cases last quarter.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* courier band */}
      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <Reveal>
            <div className="courier-band grid items-center gap-10 p-9 md:grid-cols-[1.15fr_.85fr] md:p-14">
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-60">Courier partners</p>
                <h2 className="display mt-4 text-[clamp(1.9rem,4vw,3rem)]">
                  Ride with us.
                  <br />
                  Keep more of the fee.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-70">
                  Createx couriers keep 100% of tips and see the real kitchen prep time before accepting a job. Choose
                  your own hours, get paid weekly, and use e-bikes we lease at cost.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:couriers@morsel.app" className="btn bg-[var(--bg)] text-[var(--fg)]">
                    Apply as a courier
                    <ArrowUpRight />
                  </a>
                  <a href="#plans" className="btn btn-ghost border-[rgba(255,245,241,.3)] text-[var(--bg)]">
                    Order instead
                  </a>
                </div>
              </div>
              <div className="relative z-10 grid gap-3">
                {[
                  { k: "Couriers active weekly", v: "1,860" },
                  { k: "Average delivery distance", v: "1.9 km" },
                  { k: "Tips kept by courier", v: "100%" },
                ].map((row) => (
                  <div key={row.k} className="flex items-center justify-between rounded-xl border border-[rgba(255,245,241,.16)] px-5 py-4">
                    <span className="text-[12.5px] opacity-70">{row.k}</span>
                    <span className="display text-lg">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* reviews */}
      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Reviews" title={<span className="display">4.9 stars from 61,000 people.</span>} align="center" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="review-card flex h-full flex-col">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed">“{r.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--line)] pt-5">
                    <Avatar src={r.avatar} alt={r.name} size={38} />
                    <div>
                      <p className="text-[13px] font-semibold">{r.name}</p>
                      <p className="mt-0.5 text-[11px] text-[var(--muted)]">{r.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* plans */}
      <section id="plans" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Plans"
            title={<span className="display">Order three times a month? Get a pass.</span>}
            sub="Subscriptions are optional, cancellable in two taps and never inflate the menu prices."
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <StaggerItem key={p.name}>
                <div className={`plan h-full ${p.featured ? "featured" : ""}`}>
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent-fg)]">
                      Best for regulars
                    </span>
                  ) : null}
                  <h3 className="display text-xl">{p.name}</h3>
                  <p className="plan-price mt-5">{p.price}</p>
                  <p className="mt-1.5 text-[12.5px] text-[var(--muted)]">{p.note}</p>
                  <ul className="tick-list mt-6 border-t border-[var(--line)] pt-5">
                    {p.features.map((f) => (
                      <li key={f}>
                        <Check size={14} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#restaurants" className={`btn mt-7 w-full ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                    {p.name === "Pay as you go" ? "Start ordering" : `Choose ${p.name}`}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="Food delivery from 2,400 local restaurants with honest arrival times, insulated bags on every ride and refunds in two taps."
        socials={["instagram", "x", "facebook"]}
        copyright="© 2026 Createx Technologies Ltd. All rights reserved."
        columns={[
          {
            title: "Order",
            links: [
              { label: "Restaurants", href: "#restaurants" },
              { label: "Popular tonight", href: "#dishes" },
              { label: "Plans", href: "#plans" },
              { label: "Gift cards", href: "#" },
            ],
          },
          {
            title: "Partners",
            links: [
              { label: "List your restaurant", href: "#" },
              { label: "Become a courier", href: "#" },
              { label: "Courier app", href: "#" },
              { label: "Partner support", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "How it works", href: "#how" },
              { label: "Cold food policy", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
