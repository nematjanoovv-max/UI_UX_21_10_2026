import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  FlaskConical,
  HeartPulse,
  Leaf,
  Moon,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import {
  Avatar,
  Counter,
  FAQ,
  Footer,
  InlineNewsletter,
  Marquee,
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
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-fg)]">
        <Leaf size={15} />
      </span>
      <span className="serif text-[22px]">Verdant</span>
    </span>
  );
}

const products = [
  {
    name: "Daily Greens",
    tag: "Energy · Immunity",
    price: "$38",
    rating: "4.9",
    reviews: 312,
    bg: "#e2ecdb",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Deep Sleep",
    tag: "Sleep · Calm",
    price: "$34",
    rating: "4.8",
    reviews: 208,
    bg: "#e5e7f3",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Focus Flow",
    tag: "Focus · Memory",
    price: "$42",
    rating: "4.9",
    reviews: 176,
    bg: "#f6e8d8",
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Gut Reset",
    tag: "Digestion · Balance",
    price: "$36",
    rating: "4.7",
    reviews: 154,
    bg: "#e4efec",
    img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80",
  },
];

const benefits = [
  { icon: HeartPulse, t: "Clean energy", d: "B-vitamins and adaptogens that lift the afternoon dip without the jitters." },
  { icon: Moon, t: "Deeper sleep", d: "Magnesium glycinate and L-theanine, dosed to help you fall asleep — not knock you out." },
  { icon: Brain, t: "Sharper focus", d: "Clinical-strength nootropics for the hours that actually pay the bills." },
  { icon: ShieldCheck, t: "Real immunity", d: "Vitamin D3+K2 and zinc at levels that studies actually support." },
];

const ingredients = [
  { name: "Ashwagandha KSM-66®", dose: "300 mg", note: "Root-only extract, India — the most studied form available." },
  { name: "Magnesium glycinate", dose: "200 mg", note: "Gentle, highly absorbable; no laxative effect." },
  { name: "L-theanine", dose: "100 mg", note: "Green-tea amino acid for calm focus." },
  { name: "Vitamin D3 + K2", dose: "2,000 IU", note: "Algae-sourced D3 with K2 for calcium direction." },
  { name: "Omega-3 (algal)", dose: "500 mg", note: "Vegan EPA/DHA, tested for heavy metals per batch." },
];

const reviews = [
  {
    quote: "Six weeks on Daily Greens and my 3pm crash is just… gone. I've stopped buying the fancy coffee.",
    name: "Camille Fontaine",
    role: "Verified buyer · Daily Greens",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "I'm a pharmacist and a serial skeptic. The doses are clinical, the labels are honest, and the third-party reports are actually published.",
    name: "Daniel Okafor",
    role: "Verified buyer · Deep Sleep",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "First supplement brand that respected my stomach. Gut Reset did more in a month than two years of guessing.",
    name: "Sofia Marchetti",
    role: "Verified buyer · Gut Reset",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

const plans = [
  { name: "Monthly", price: 38, note: "Billed monthly", save: "", features: ["Cancel anytime", "Free shipping over $45", "60-day guarantee"] },
  {
    name: "Quarterly",
    price: 34,
    note: "Billed every 3 months",
    save: "Save 10%",
    featured: true,
    features: ["Everything in Monthly", "Free shipping always", "Free formula check-in", "Pause or swap anytime"],
  },
  { name: "Yearly", price: 29, note: "Billed annually", save: "Save 24%", features: ["Everything in Quarterly", "Priority support", "Annual bloodwork guide"] },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Free shipping over $45 · 60-day money-back guarantee · Third-party tested in every batch"
        links={[
          { label: "Shop", href: "#shop" },
          { label: "Formula", href: "#formula" },
          { label: "Plans", href: "#plans" },
          { label: "FAQ", href: "#faq" },
        ]}
        cta={{ label: "Start the quiz", href: "#shop" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Reveal>
              <div className="flex flex-wrap gap-2">
                <span className="pill-badge">
                  <FlaskConical size={13} className="text-[var(--accent)]" /> Third-party tested
                </span>
                <span className="pill-badge">
                  <Leaf size={13} className="text-[var(--accent)]" /> Vegan &amp; sugar-free
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-6">
                Supplements that
                <br />
                <em>earn</em> their shelf space.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Five formulas. Clinical doses. Nothing sprinkled in for the label. We publish every batch certificate —
                because “trust us” isn&apos;t an ingredient.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#shop" className="btn btn-primary">
                  Shop the range
                  <ArrowRight />
                </a>
                <a href="#formula" className="btn btn-ghost">
                  See what&apos;s inside
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--line)] pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
                    ].map((src) => (
                      <span key={src} className="rounded-full border-2 border-[var(--bg)]">
                        <Avatar src={src} alt="Customer" size={30} />
                      </span>
                    ))}
                  </div>
                  <div>
                    <Stars />
                    <p className="mt-0.5 text-[11px] text-[var(--muted)]">4.9 from 1,240 reviews</p>
                  </div>
                </div>
                <p className="flex items-center gap-2 text-xs text-[var(--muted)]">
                  <Truck size={14} className="text-[var(--accent)]" /> Delivered in 2–4 days
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={34}>
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="blob-card p-8 md:p-12">
                <img
                  src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80"
                  alt="Verdant supplement bottle"
                  className="mx-auto h-[320px] w-auto rounded-[24px] object-cover md:h-[400px]"
                />
              </div>
              <div className="float-a float-card absolute -right-2 top-8 hidden w-[200px] p-4 sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Key ingredient</p>
                <p className="mt-1.5 text-sm font-semibold">Ashwagandha KSM-66®</p>
                <p className="mt-1 text-[12px] text-[var(--accent)]">300 mg · root only</p>
              </div>
              <div className="float-b float-card absolute -bottom-6 -left-2 hidden items-center gap-3 p-4 sm:flex">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[rgba(63,125,84,.12)] text-[var(--accent)]">
                  <Sparkles size={17} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Small batches</p>
                  <p className="text-[11px] text-[var(--muted)]">Made in Oregon, monthly</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* press */}
      <section className="border-y border-[var(--line)] py-5">
        <div className="wrap flex flex-col gap-4 md:flex-row md:items-center">
          <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">As seen in</p>
          <Marquee className="md:flex-1">
            {["Well+Good", "Healthline", "Men's Health", "Vogue Wellness", "The Times", "Outside"].map((p) => (
              <span key={p} className="serif px-9 text-xl text-[var(--muted)]">
                {p}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* shop */}
      <section id="shop" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Bestsellers"
              title="Start with one. Feel the difference in three weeks."
              sub="Every formula is dosed at levels used in published research — not at the minimum the label legally allows."
            />
            <Reveal delay={0.1}>
              <a href="#plans" className="btn btn-ghost">
                Compare plans
                <ArrowRight />
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <StaggerItem key={p.name}>
                <article className="prod-card h-full p-3">
                  <div className="prod-img h-56" style={{ background: p.bg }}>
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">{p.tag}</span>
                      <span className="flex items-center gap-1 text-[11px] text-[var(--muted)]">
                        <Stars count={1} /> {p.rating} ({p.reviews})
                      </span>
                    </div>
                    <h3 className="serif mt-2.5 text-2xl">{p.name}</h3>
                    <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-4">
                      <span className="text-lg font-semibold">{p.price}</span>
                      <a href="#plans" className="btn btn-primary !px-4 !py-2.5 text-[11px]">
                        Add to bag
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* benefits */}
      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Why people stay"
            title="Built around four daily foundations."
            sub="Not forty. Four. The things most people are actually short on — done properly."
            align="center"
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <StaggerItem key={b.t}>
                <div className="benefit-tile h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(63,125,84,.1)] text-[var(--accent)]">
                    <b.icon size={20} />
                  </span>
                  <h3 className="serif mt-5 text-xl">{b.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{b.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* formula */}
      <section id="formula" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=1200&q=80"
                  alt="Verdant capsules and botanical ingredients"
                  loading="lazy"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="float-card absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-x-6 gap-y-2 p-5 sm:right-auto">
                <span className="flex items-center gap-2 text-[12px] font-medium">
                  <Check size={14} className="text-[var(--accent)]" /> Non-GMO
                </span>
                <span className="flex items-center gap-2 text-[12px] font-medium">
                  <Check size={14} className="text-[var(--accent)]" /> Vegan capsules
                </span>
                <span className="flex items-center gap-2 text-[12px] font-medium">
                  <Check size={14} className="text-[var(--accent)]" /> No fillers
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="The formula"
              title="Five ingredients. Every milligram accounted for."
              sub="We publish the full composition and the batch certificate for every run. If an ingredient is there, it is there on purpose."
            />
            <Reveal delay={0.1}>
              <div className="mt-9">
                {ingredients.map((i) => (
                  <div key={i.name} className="ing-row">
                    <span>
                      <span className="font-semibold">{i.name}</span>
                      <span className="mt-1 block text-[12px] text-[var(--muted)]">{i.note}</span>
                    </span>
                    <span className="ing-dose">{i.dose}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <a href="#faq" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                Read the lab reports <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ritual */}
      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="The ritual" title="Two capsules. With breakfast. That's it." align="center" />
          <Stagger className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              { n: "01", t: "Take two, with food", d: "Fat-soluble vitamins need a meal. Breakfast is the easiest habit to keep." },
              { n: "02", t: "Stack for 21 days", d: "Most benefits build gradually. Missing a day is fine — quitting early is not." },
              { n: "03", t: "Track how you feel", d: "A simple weekly check-in inside your account helps you see the shift." },
            ].map((s, i) => (
              <StaggerItem key={s.n}>
                <div className={`ritual-line ${i < 2 ? "md:pr-4" : ""}`}>
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--card)] font-semibold text-[var(--accent)] ring-1 ring-[var(--line)]">
                      {s.n}
                    </span>
                    <h3 className="serif text-xl">{s.t}</h3>
                  </div>
                  <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[var(--muted)]">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* results */}
      <section className="py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <div className="result-band grid items-center gap-10 p-9 md:grid-cols-[1.2fr_.8fr] md:p-14">
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-70">
                  Self-reported results · 1,200 participants
                </p>
                <h2 className="serif mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.08]">
                  What people notice
                  <br />
                  by week four.
                </h2>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    { v: 87, suf: "%", l: "More daily energy" },
                    { v: 79, suf: "%", l: "Better sleep" },
                    { v: 92, suf: "%", l: "Would reorder" },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="result-fig">
                        <Counter to={s.v} suffix={s.suf} />
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.14em] opacity-70">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 rounded-3xl border border-[rgba(244,249,241,.25)] p-6">
                <p className="serif text-lg italic leading-relaxed">
                  “I&apos;ve reviewed a lot of supplement labels. Verdant is one of the few I&apos;d put my own name on.”
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] opacity-70">Dr. Aaron Feld · Sports nutritionist</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* reviews */}
      <section className="border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Reviews" title="1,240 reviews. Here are three." align="center" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="review-card flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <Stars />
                    <span className="rounded-full bg-[rgba(63,125,84,.1)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                      Verified
                    </span>
                  </div>
                  <blockquote className="mt-5 flex-1 text-[14px] leading-relaxed">“{r.quote}”</blockquote>
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
      <section id="plans" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Subscribe & save"
            title="Same formula, better price, total flexibility."
            sub="Pause, swap or cancel in two clicks. Your 60-day guarantee never expires."
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <StaggerItem key={p.name}>
                <div className={`plan h-full ${p.featured ? "featured" : ""}`}>
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent-fg)]">
                      Most popular
                    </span>
                  ) : null}
                  <div className="flex items-center justify-between">
                    <h3 className="serif text-2xl">{p.name}</h3>
                    {p.save ? (
                      <span className="rounded-full bg-[rgba(63,125,84,.1)] px-3 py-1 text-[11px] font-semibold text-[var(--accent)]">
                        {p.save}
                      </span>
                    ) : null}
                  </div>
                  <p className="plan-price mt-6">
                    ${p.price}
                    <span className="text-base font-normal text-[var(--muted)]">/mo</span>
                  </p>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">{p.note}</p>
                  <ul className="mt-6 space-y-3 border-t border-[var(--line)] pt-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px]">
                        <Check size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#shop" className={`btn mt-7 w-full ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                    Choose {p.name.toLowerCase()}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[var(--accent)]" /> 60-day money-back guarantee
              </span>
              <span className="flex items-center gap-2">
                <Truck size={14} className="text-[var(--accent)]" /> Free shipping on subscriptions
              </span>
              <span className="flex items-center gap-2">
                <FlaskConical size={14} className="text-[var(--accent)]" /> Batch certificates published
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHead
            eyebrow="Questions"
            title="The things people ask before their first order."
            sub="Still unsure? Email hello@verdant.co — a human replies within a day."
          />
          <Reveal delay={0.1}>
            <FAQ
              items={[
                {
                  q: "Are your products third-party tested?",
                  a: "Every batch is tested for potency, heavy metals, microbials and residual solvents by an ISO-17025 lab. The certificate for your exact batch is linked from your order confirmation.",
                },
                {
                  q: "Can I take these with medication?",
                  a: "Our formulas use well-studied ingredients, but interactions are possible. Share the label with your doctor or pharmacist first — we are happy to send the full composition sheet.",
                },
                {
                  q: "How long until I feel something?",
                  a: "Most people notice energy and sleep changes in two to three weeks. Magnesium and ashwagandha build gradually; the 60-day guarantee exists precisely because of that.",
                },
                {
                  q: "Can I pause or cancel my subscription?",
                  a: "Yes — two clicks in your account, no emails, no phone calls, no retention offers. You can also swap formulas at any renewal.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* cta */}
      <section className="pb-24">
        <div className="wrap">
          <Reveal>
            <div className="blob-card grid items-center gap-10 p-9 md:grid-cols-[1.15fr_.85fr] md:p-14">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Take 15% off your first order</p>
                <h2 className="serif mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06]">
                  Your shelf deserves
                  <br />
                  better bottles.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  Join 32,000 subscribers. One email a month: new formulas, lab results, and honest notes on what we
                  would — and would not — take.
                </p>
                <InlineNewsletter label="Get 15% off" className="mt-7 max-w-md" />
              </div>
              <div className="hidden overflow-hidden rounded-[32px] md:block">
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"
                  alt="Verdant daily ritual"
                  loading="lazy"
                  className="h-[300px] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="Small-batch daily supplements, dosed at clinical levels and tested in every batch. Made in Oregon, shipped worldwide."
        socials={["instagram", "youtube", "x"]}
        copyright="© 2026 Verdant Labs Inc. All rights reserved."
        columns={[
          {
            title: "Shop",
            links: [
              { label: "Daily Greens", href: "#shop" },
              { label: "Deep Sleep", href: "#shop" },
              { label: "Focus Flow", href: "#shop" },
              { label: "Gut Reset", href: "#shop" },
            ],
          },
          {
            title: "Learn",
            links: [
              { label: "The formula", href: "#formula" },
              { label: "Lab reports", href: "#faq" },
              { label: "The ritual", href: "#" },
              { label: "Reviews", href: "#" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Plans & billing", href: "#plans" },
              { label: "Shipping", href: "#" },
              { label: "Guarantee", href: "#" },
              { label: "Contact", href: "#faq" },
            ],
          },
        ]}
      />
    </main>
  );
}
