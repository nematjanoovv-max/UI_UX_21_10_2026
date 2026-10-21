import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Package,
  RefreshCw,
  Ruler,
  Scissors,
  ShieldCheck,
  Truck,
} from "lucide-react";
import {
  Avatar,
  Counter,
  Footer,
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
    <span className="flex items-baseline gap-2">
      <span className="bebas text-[26px] tracking-[0.06em]">RIVET &amp; CO</span>
      <span className="mb-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
    </span>
  );
}

const products = [
  {
    name: "The 021 Straight",
    fit: "Straight · 12 oz",
    price: "$148",
    tag: "Best seller",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "The Chore Jacket",
    fit: "Boxy · 14 oz",
    price: "$215",
    tag: "New",
    img: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "The 004 Slim",
    fit: "Slim · 11 oz",
    price: "$138",
    tag: "",
    img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "The Selvedge Tote",
    fit: "One size · 16 oz",
    price: "$86",
    tag: "Repairable",
    img: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=1000&q=80",
  },
];

const craft = [
  {
    n: "01",
    title: "Kaihara mill denim",
    d: "Woven on shuttle looms in Okayama, Japan. Slow, narrow, and worth the wait — the selvedge edge you see is the loom's signature.",
  },
  {
    n: "02",
    title: "Chain-stitch hem",
    d: "The hem is sewn on a 1940s Union Special. It ropes and fades in a way modern machines simply cannot fake.",
  },
  {
    n: "03",
    title: "Copper rivets & hidden bar-tacks",
    d: "Stress points get rivets and bar-tacks, not shortcuts. That is why pockets outlive the phone you keep in them.",
  },
  {
    n: "04",
    title: "Repaired free, forever",
    d: "Blown crotch, torn pocket, lost button — send it back. We mend it and post it home, whatever year you bought it.",
  },
];

const fits = [
  { name: "The 004 Slim", waist: "Mid rise", leg: "Tapered", size: "28–36" },
  { name: "The 021 Straight", waist: "Mid rise", leg: "Straight", size: "28–40" },
  { name: "The Chore Jacket", waist: "Boxy", leg: "—", size: "XS–XXL" },
  { name: "The Rider Overshirt", waist: "Relaxed", leg: "—", size: "XS–XXL" },
];

const reviews = [
  {
    quote: "Two years of daily wear, one repair, and they still look better than the day they arrived. The fade is unreal.",
    name: "Tomas Lindqvist",
    role: "Verified buyer · The 021 Straight",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "I sent a pair back after a bike crash tore the knee. They patched it with matching denim in ten days. Free.",
    name: "Aisha Bello",
    role: "Verified buyer · The 004 Slim",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "The only jacket I've owned that got better the more careless I was with it.",
    name: "Marco Ferretti",
    role: "Verified buyer · The Chore Jacket",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Free repairs for life · Free shipping over $120 · Made in Portugal"
        links={[
          { label: "Shop", href: "#shop" },
          { label: "Lookbook", href: "#lookbook" },
          { label: "Craft", href: "#craft" },
          { label: "Fit guide", href: "#fit" },
        ]}
        cta={{ label: "Shop denim", href: "#shop" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="wrap grid items-end gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <Reveal>
              <p className="kicker">Selvedge denim · small runs</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-5">
                Made to be
                <br />
                worn <span className="rust">hard.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Twelve-ounce selvedge, sewn in small runs and built to fade for years. If it tears, we mend it. If it
                wears out, we replace it. That is the whole business model.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#shop" className="btn btn-primary">
                  Shop the range
                  <ArrowRight />
                </a>
                <a href="#lookbook" className="btn btn-ghost">
                  See the lookbook
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="stitch-top mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] text-[var(--muted)]">
                <span className="flex items-center gap-2">
                  <Scissors size={14} className="text-[var(--accent)]" /> Repairs free, forever
                </span>
                <span className="flex items-center gap-2">
                  <Truck size={14} className="text-[var(--accent)]" /> Ships in 2–4 days
                </span>
                <span className="flex items-center gap-2">
                  <RefreshCw size={14} className="text-[var(--accent)]" /> 60-day returns
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={32}>
            <div className="relative">
              <div className="look-strip h-[380px] md:h-[520px]">
                <img
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80"
                  alt="Rivet & Co selvedge denim"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="stitch absolute -left-4 bottom-8 bg-[var(--card)] px-5 py-4">
                <p className="bebas text-2xl">12 oz</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Kaihara selvedge
                </p>
              </div>
              <div className="absolute right-4 top-4 bg-[var(--fg)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bg)]">
                Batch 47 · 300 pairs
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* marquee */}
      <section className="border-y border-[var(--line)] py-4">
        <Marquee>
          {["12 oz selvedge", "Repaired free, forever", "Made in Portugal", "Chain-stitch hems", "Small batches only"].map((t) => (
            <span key={t} className="bebas px-8 text-3xl text-[var(--fg)]/85">
              {t} <span className="text-[var(--accent)]">/</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* shop */}
      <section id="shop" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="This season"
              title={<span className="bebas text-[clamp(2.2rem,4.6vw,3.6rem)]">Four things. Done right.</span>}
              sub="We release in small batches instead of seasons. When a run sells out, it stays sold out — the next batch will be slightly better."
            />
            <Reveal delay={0.1}>
              <a href="#fit" className="btn btn-ghost">
                <Ruler size={15} /> Find your fit
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <StaggerItem key={p.name}>
                <article className="prod-card h-full">
                  <div className="relative">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-72 w-full object-cover" />
                    {p.tag ? <span className="prod-tag">{p.tag}</span> : null}
                  </div>
                  <div className="p-5">
                    <span className="fit-chip">{p.fit}</span>
                    <h3 className="bebas mt-3 text-2xl">{p.name}</h3>
                    <div className="stitch-top mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">{p.price}</span>
                      <a href="#shop" className="btn btn-primary !px-4 !py-2 text-[11px]">
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

      {/* lookbook */}
      <section id="lookbook" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <div className="flex gap-5">
                <span className="vtext hidden sm:block">Lookbook · SS26</span>
                <div className="grid flex-1 gap-4">
                  <div className="look-strip">
                    <img
                      src="https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1000&q=80"
                      alt="Rivet & Co lookbook"
                      className="h-[300px] w-full object-cover md:h-[380px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="look-strip">
                      <img
                        src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=700&q=80"
                        alt="Denim detail"
                        loading="lazy"
                        className="h-[180px] w-full object-cover md:h-[220px]"
                      />
                    </div>
                    <div className="look-strip">
                      <img
                        src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80"
                        alt="Fit in use"
                        loading="lazy"
                        className="h-[180px] w-full object-cover md:h-[220px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHead
                eyebrow="SS26 lookbook"
                title={<span className="bebas text-[clamp(2.2rem,4.6vw,3.6rem)]">The 30-wash diary.</span>}
                sub="We photographed one pair every month for two and a half years — no props, no styling, just real wear. The lookbook is that diary, plus the six pieces we would still buy today."
              />
              <Reveal delay={0.1}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Real wear, not campaign shots", "Fade guides for every fit", "Care routine that saves water", "Trade-in credit for old pairs"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px]">
                        <Check size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </Reveal>
              <Reveal delay={0.15}>
                <a href="#craft" className="btn btn-primary mt-9">
                  Read the batch notes
                  <ArrowUpRight />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* craft */}
      <section id="craft" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead
              eyebrow="Craft"
              title={<span className="bebas text-[clamp(2.2rem,4.6vw,3.6rem)]">Why ours fade better.</span>}
              sub="Four decisions we refuse to cut, even when the margin says we should."
            />
            <div className="mt-6">
              {craft.map((c, i) => (
                <Reveal key={c.n} delay={i * 0.05}>
                  <div className="craft-row">
                    <span className="craft-no">{c.n}</span>
                    <div>
                      <h3 className="text-[15px] font-semibold">{c.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">{c.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} y={30}>
            <div className="lg:sticky lg:top-28">
              <div className="look-strip">
                <img
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80"
                  alt="Selvedge denim detail"
                  loading="lazy"
                  className="h-[420px] w-full object-cover md:h-[560px]"
                />
              </div>
              <div className="stitch mt-4 bg-[var(--card)] p-5">
                <p className="bebas text-2xl">The repair promise</p>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                  Send any Rivet &amp; Co garment back at any age. We mend, patch and post it home — no receipt, no
                  questions, no charge.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* fit guide */}
      <section id="fit" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionHead
              eyebrow="Fit guide"
              title={<span className="bebas text-[clamp(2rem,4vw,3rem)]">Pick the right size the first time.</span>}
              sub="Our denim runs true to size. If between sizes, take the smaller — selvedge relaxes about half a size after a month of wear."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="fit-chip">
                  <Ruler size={12} className="mr-2 text-[var(--accent)]" /> Mid & high rise
                </span>
                <span className="fit-chip">
                  <Package size={12} className="mr-2 text-[var(--accent)]" /> Free exchanges
                </span>
                <span className="fit-chip">
                  <ShieldCheck size={12} className="mr-2 text-[var(--accent)]" /> 60-day returns
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="fit-table">
              <div className="ft-head">
                <span>Fit</span>
                <span>Rise</span>
                <span>Leg</span>
                <span>Sizes</span>
              </div>
              {fits.map((f) => (
                <div key={f.name} className="ft-row">
                  <strong>{f.name}</strong>
                  <span>{f.waist}</span>
                  <span>{f.leg}</span>
                  <span>{f.size}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-[var(--muted)]">
              Need a hand? Email fit@rivetandco.com with your height, weight and how you like your jeans — we answer
              with one size, not a chart.
            </p>
          </Reveal>
        </div>
      </section>

      {/* reviews */}
      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Reviews"
            title={<span className="bebas text-[clamp(2rem,4vw,3rem)]">Worn daily. Reviewed honestly.</span>}
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="review-card flex h-full flex-col">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed">“{r.quote}”</blockquote>
                  <figcaption className="stitch-top mt-6 flex items-center gap-3">
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

      {/* sustainability */}
      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <Reveal>
            <div className="sustain-band rounded-[3px] p-9 md:p-14">
              <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-60">
                    Repair, don&apos;t replace
                  </p>
                  <h2 className="bebas mt-4 text-[clamp(2.2rem,4.8vw,3.8rem)]">
                    The greenest pair of jeans
                    <br />
                    is the one you already own.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-70">
                    A new pair of jeans takes roughly 7,500 litres of water. A repair takes a needle, twenty minutes and
                    a patch of leftover denim. We know which one we would rather sell you.
                  </p>
                  <a href="#shop" className="btn mt-8 bg-[var(--bg)] text-[var(--fg)]">
                    Send a pair for repair
                    <ArrowRight />
                  </a>
                </div>
                <div className="relative z-10 grid grid-cols-3 gap-6 md:grid-cols-1 md:gap-8">
                  {[
                    { v: 11400, suf: "", l: "Repairs completed" },
                    { v: 92, suf: "%", l: "Pairs still worn after 3 yrs" },
                    { v: 68, suf: "k L", l: "Water saved vs. buying new" },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="sustain-fig">
                        <Counter to={s.v} suffix={s.suf} />
                      </p>
                      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] opacity-60">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* cta */}
      <section className="pb-24">
        <div className="wrap">
          <Reveal>
            <div className="grid items-center gap-10 border border-[var(--line)] bg-[var(--card)] p-9 md:grid-cols-[1.1fr_.9fr] md:p-14">
              <div>
                <p className="kicker">Batch 48 drops soon</p>
                <h2 className="bebas mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">
                  300 pairs. One email.
                  <br />
                  No spam, ever.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  Batch drops sell out in about eleven days. Subscribers get a 24-hour head start and first pick on
                  one-off fabrics.
                </p>
              </div>
              <div className="stitch bg-[var(--bg)] p-6">
                <p className="bebas text-2xl">Early access</p>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                  Add your email and we will write once per batch — roughly every ten weeks.
                </p>
                <a href="#shop" className="btn btn-primary mt-6 w-full">
                  Get early access
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="12 oz selvedge denim sewn in small runs in Portugal. Repaired free, forever — because the best pair of jeans is the one you keep."
        socials={["instagram", "x", "youtube"]}
        copyright="© 2026 Rivet & Co Garments Lda. All rights reserved."
        columns={[
          {
            title: "Shop",
            links: [
              { label: "The 021 Straight", href: "#shop" },
              { label: "The Chore Jacket", href: "#shop" },
              { label: "The 004 Slim", href: "#shop" },
              { label: "Accessories", href: "#shop" },
            ],
          },
          {
            title: "Brand",
            links: [
              { label: "Craft & fabric", href: "#craft" },
              { label: "Lookbook", href: "#lookbook" },
              { label: "Fit guide", href: "#fit" },
              { label: "Repairs", href: "#" },
            ],
          },
          {
            title: "Help",
            links: [
              { label: "Shipping", href: "#" },
              { label: "Returns & exchanges", href: "#" },
              { label: "Care instructions", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
