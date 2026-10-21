import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  Check,
  Droplets,
  Feather,
  Leaf,
  RefreshCw,
  Scissors,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import {
  Avatar,
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
    <span className="flex items-baseline gap-1.5">
      <span className="serif text-[23px] font-semibold">Mollen</span>
      <span className="mb-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
    </span>
  );
}

const swatches = [
  { name: "Chalk", code: "N-01", color: "#f3ede3" },
  { name: "Oat", code: "N-04", color: "#e2d5be" },
  { name: "Clay", code: "E-07", color: "#c98a6a" },
  { name: "Sage", code: "G-02", color: "#a9b39a" },
  { name: "Indigo", code: "B-11", color: "#4a5a7a" },
];

const collections = [
  {
    name: "Bedding",
    meta: "Percale & sateen · 14 pieces",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    big: true,
  },
  {
    name: "Bath",
    meta: "Waffle & rib · 9 pieces",
    img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Table",
    meta: "Linen & cotton · 11 pieces",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Throws",
    meta: "Wool & cotton · 6 pieces",
    img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
  },
];

const steps = [
  { n: "01", t: "Long-staple fibres only", d: "Pima and European flax, spun in Guimarães. Longer fibres mean fewer loose ends — which is what makes linen feel softer a year in, not thinner." },
  { n: "02", t: "Woven slowly on shuttle looms", d: "We run our mills 25% slower than they could go. Slower weaving makes a denser, calmer fabric that survives real washing machines." },
  { n: "03", t: "Washed with rain-soft water", d: "A stone-free soft wash finishes the hand feel with no chemical softeners, so nothing coats the fibre or builds up over time." },
  { n: "04", t: "Hand-checked, then folded", d: "Every piece is inspected twice, measured once, and folded by a person who would notice a skipped stitch from across the room." },
];

const specs = [
  { k: "Composition", v: "100% long-staple cotton, or 100% European flax linen" },
  { k: "Weave", v: "Percale 200 TC (cool) · Sateen 300 TC (silky)" },
  { k: "Weight", v: "120 gsm bedding · 380 gsm waffle towels · 240 gsm linen" },
  { k: "Care", v: "Machine wash 40°C, no softener, tumble dry low" },
  { k: "Origin", v: "Woven and finished in Guimarães, Portugal" },
];

const reviews = [
  {
    quote: "Three years of weekly washing and our percale set is still the nicest thing on our bed. The corners have not pilled once.",
    name: "Ingrid Halvorsen",
    role: "Verified customer · Chalk percale set",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "I bought the waffle towels expecting them to be scratchy for a month. They were soft by the third wash and enormous.",
    name: "Daniel Okonkwo",
    role: "Verified customer · Oat waffle towels",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "The linen tablecloth survived a toddler's birthday, a red-wine spill and 40°C washes. It now looks better than when it arrived.",
    name: "Camille Fontaine",
    role: "Verified customer · Clay linen tablecloth",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

const bundles = [
  {
    name: "Starter set",
    price: "$180",
    note: "One bed, one bathroom",
    features: ["Percale sheet set", "Two pillowcases", "Two waffle towels", "100-night trial"],
  },
  {
    name: "Complete home",
    price: "$290",
    note: "Save $95 versus buying loose",
    featured: true,
    features: ["Everything in Starter", "Duvet cover", "Four extra towels", "Throw in choice of colour", "Free shipping, always"],
  },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Free shipping over $95 · 100-night trial · Woven in Portugal, shipped worldwide"
        links={[
          { label: "Shop", href: "#shop" },
          { label: "Craft", href: "#craft" },
          { label: "Specs", href: "#specs" },
          { label: "Sets", href: "#sets" },
        ]}
        cta={{ label: "Shop bedding", href: "#shop" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Reveal>
              <p className="kicker">Home textiles · woven since 1987</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-6">
                Linen that gets softer
                <br />
                <em>every single year.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                We weave bedding, bath and table linen from long-staple cotton and European flax, slowly, in a mill we
                have worked with for thirty years. Nothing is treated to feel soft in the shop — it just becomes soft
                in your home.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#shop" className="btn btn-primary">
                  Shop the collections
                  <ArrowRight />
                </a>
                <a href="#craft" className="btn btn-ghost">
                  <Scissors size={15} /> How it is made
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--line)] pt-6 text-[12px] text-[var(--muted)]">
                <span className="flex items-center gap-2">
                  <Droplets size={14} className="text-[var(--accent)]" /> Softens with every wash
                </span>
                <span className="flex items-center gap-2">
                  <Leaf size={14} className="text-[var(--accent)]" /> OEKO-TEX certified dyes
                </span>
                <span className="flex items-center gap-2">
                  <Truck size={14} className="text-[var(--accent)]" /> 100-night trial
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={32}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[26px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80"
                  alt="Mollen bedding"
                  className="h-[420px] w-full object-cover md:h-[530px]"
                />
              </div>
              <div className="absolute -left-4 bottom-8 hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-xl sm:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">In stock now</p>
                <div className="mt-3 flex gap-2">
                  {swatches.map((s) => (
                    <span key={s.code} className="h-7 w-7 rounded-full border border-[var(--line)]" style={{ background: s.color }} />
                  ))}
                </div>
                <p className="mt-3 text-[12px] text-[var(--muted)]">5 colourways · 6 sizes</p>
              </div>
              <div className="absolute -right-3 top-9 hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] px-5 py-4 shadow-lg sm:block">
                <p className="serif text-2xl">300 TC</p>
                <p className="mt-1 text-[11px] text-[var(--muted)]">sateen, if you like it silky</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* swatches */}
      <section className="border-y border-[var(--line)] py-12">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <p className="kicker">The palette</p>
              <p className="text-[12.5px] text-[var(--muted)]">Dyed in small batches — expect a 2% tone shift between runs, on purpose.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="swatch-strip mt-8">
              {swatches.map((s) => (
                <div key={s.code} className="swatch">
                  <i style={{ background: s.color }} />
                  <span>{s.name}</span>
                  <em>{s.code}</em>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* shop */}
      <section id="shop" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Collections"
              title="Four rooms. One mill."
              sub="Everything is woven from the same two fibres, so bedding, towels and table linen always match — or deliberately, comfortably do not."
            />
            <Reveal delay={0.1}>
              <a href="#sets" className="btn btn-ghost">
                Compare set prices
                <ArrowUpRight />
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {collections.map((c) => (
              <StaggerItem key={c.name} className={c.big ? "md:col-span-2" : ""}>
                <a href="#sets" className="collection-card block h-full">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className={c.big ? "h-[300px] w-full object-cover md:h-[420px]" : "h-[260px] w-full object-cover md:h-[320px]"}
                  />
                  <span className="collection-label">
                    <span>
                      <strong>{c.name}</strong>
                      <span className="mt-0.5 block text-[11.5px] text-[var(--muted)]">{c.meta}</span>
                    </span>
                    <ArrowUpRight size={17} className="text-[var(--accent)]" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* craft */}
      <section id="craft" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead
              eyebrow="The craft"
              title="Four decisions you can feel after a year."
              sub="Nothing on this page is fast. That is precisely the point."
            />
            <div className="mt-8">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <div className="step">
                    <span className="step-no">{s.n}</span>
                    <div>
                      <h3 className="serif text-lg">{s.t}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} y={30}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[24px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1629949009765-40fc74c9ec21?auto=format&fit=crop&w=1200&q=80"
                  alt="Mollen mill and folded linen"
                  loading="lazy"
                  className="h-[420px] w-full object-cover md:h-[560px]"
                />
              </div>
              <div className="mt-4 rounded-[18px] border border-[var(--line)] bg-[var(--card)] p-6">
                <p className="serif text-xl">30 years, one mill</p>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                  We have bought from the same family mill in Guimarães since 1994. When they closed for a month in
                  2023, we waited rather than switch suppliers — and told customers exactly why their order was late.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* specs */}
      <section id="specs" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHead
            eyebrow="Specs, plainly"
            title="The numbers, without the poetry."
            sub="If you care about thread counts and looms, here they are. If you do not, this is the only boring section on the page."
          />
          <Reveal delay={0.1}>
            <dl>
              {specs.map((s) => (
                <div key={s.k} className="spec-row">
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* reviews */}
      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="After the first year" title="Reviews from people who have washed it 100 times." align="center" />
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

      {/* sets */}
      <section id="sets" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Sets"
            title="Buying a room at once costs less."
            sub="Sets are packed from the same dye batch, so everything matches exactly — and they cost about 25% less than loose pieces."
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {bundles.map((b) => (
              <StaggerItem key={b.name}>
                <div className={`bundle h-full ${b.featured ? "featured" : ""}`}>
                  {b.featured ? (
                    <span className="mb-4 inline-flex rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent-fg)]">
                      Best value
                    </span>
                  ) : null}
                  <h3 className="serif text-2xl">{b.name}</h3>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="serif text-4xl">{b.price}</span>
                    <span className="text-[12.5px] text-[var(--muted)]">{b.note}</span>
                  </div>
                  <ul className="tick-list mt-6 border-t border-[var(--line)] pt-5">
                    {b.features.map((f) => (
                      <li key={f}>
                        <Check size={14} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#shop" className={`btn mt-7 w-full ${b.featured ? "btn-primary" : "btn-ghost"}`}>
                    Choose {b.name.toLowerCase()}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <RefreshCw size={14} className="text-[var(--accent)]" /> 100-night trial, free returns
              </span>
              <span className="flex items-center gap-2">
                <Feather size={14} className="text-[var(--accent)]" /> Free monogramming on sets
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-[var(--accent)]" /> Gift wrapping included
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* marquee + newsletter */}
      <section className="pb-24">
        <div className="wrap">
          <Reveal>
            <div className="newsletter-band grid items-center gap-10 p-9 md:grid-cols-[1.1fr_.9fr] md:p-14">
              <div className="relative z-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] opacity-60">Mill notes</p>
                <h2 className="serif mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.08]">
                  New weaves, old mill stories,
                  <br />
                  one email a month.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">
                  Subscribe for first access to limited dye runs — and get 10% off your first order.
                </p>
                <InlineNewsletter inverse label="Get 10% off" className="mt-7 max-w-md" />
              </div>
              <div className="relative z-10 hidden gap-3 md:grid">
                <Marquee className="[--speed:26s]">
                  {["Percale", "Sateen", "Waffle", "Linen", "Herringbone"].map((t) => (
                    <span key={t} className="serif px-6 text-lg italic opacity-80">
                      {t} ·
                    </span>
                  ))}
                </Marquee>
                <p className="flex items-center gap-2 text-[12px] opacity-70">
                  <Bath size={14} /> Basket-woven towels restocked monthly
                </p>
                <p className="flex items-center gap-2 text-[12px] opacity-70">
                  <BedDouble size={14} /> Six bed sizes, from single to emperor
                </p>
                <p className="flex items-center gap-2 text-[12px] opacity-70">
                  <UtensilsCrossed size={14} /> Table linen cut to your measurement, free
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="Home textiles woven slowly in Guimarães, Portugal since 1987. Long-staple cotton, European flax and finishes that improve with every wash."
        socials={["instagram", "pinterest", "facebook"]}
        copyright="© 2026 Mollen Home Lda. All rights reserved."
        columns={[
          {
            title: "Shop",
            links: [
              { label: "Bedding", href: "#shop" },
              { label: "Bath", href: "#shop" },
              { label: "Table", href: "#shop" },
              { label: "Throws", href: "#shop" },
            ],
          },
          {
            title: "About",
            links: [
              { label: "The mill", href: "#craft" },
              { label: "Materials & specs", href: "#specs" },
              { label: "Care guide", href: "#" },
              { label: "Sustainability", href: "#" },
            ],
          },
          {
            title: "Help",
            links: [
              { label: "Sets & pricing", href: "#sets" },
              { label: "Shipping", href: "#" },
              { label: "100-night trial", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
