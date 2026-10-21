import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  Check,
  Clock,
  Compass,
  KeyRound,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  Avatar,
  Counter,
  Footer,
  Marquee,
  Navbar,
  Reveal,
  ScrollProgress,
  SectionHead,
  Stagger,
  StaggerItem,
  Stars,
} from "@/components/kit";

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="grid h-9 w-9 place-items-center rounded-full border"
        style={{
          borderColor: inverse ? "rgba(247,244,237,.35)" : "var(--line)",
          background: inverse ? "rgba(247,244,237,.12)" : "var(--accent)",
          color: inverse ? "var(--accent-fg)" : "var(--accent-fg)",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden>
          <path d="M12 4 3 12v8h6v-5h6v5h6v-8L12 4Z" />
        </svg>
      </span>
      <span className="serif text-[19px] font-semibold tracking-[0.14em]">HABITAT</span>
    </span>
  );
}

const listings = [
  {
    price: "$1,240,000",
    title: "Ashgrove House",
    address: "14 Ridgeway Lane, Riverside",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    tag: "New",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    price: "$785,000",
    title: "The Linden Loft",
    address: "302 Mercer Street, Old Town",
    beds: 2,
    baths: 2,
    sqft: "1,420",
    tag: "Open house",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    price: "$2,150,000",
    title: "Villa Marisol",
    address: "9 Cliffside Avenue, Bay Heights",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    tag: "Off-market",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
  },
  {
    price: "$960,000",
    title: "Fern Cottage",
    address: "77 Willow Bend, Greenfield",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    tag: "",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
  },
  {
    price: "$1,680,000",
    title: "Stonegate Residence",
    address: "21 Bellhouse Road, Hillcrest",
    beds: 4,
    baths: 3,
    sqft: "3,240",
    tag: "Price improved",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
  },
  {
    price: "$645,000",
    title: "The Orchard Flat",
    address: "5 Cider Row, Market Quarter",
    beds: 2,
    baths: 1,
    sqft: "1,050",
    tag: "",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
  },
];

const neighborhoods = [
  {
    name: "Old Town",
    detail: "Cobbled streets, cafés and character flats",
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Riverside",
    detail: "Family homes with gardens that face the water",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Bay Heights",
    detail: "Panoramic views and architectural landmarks",
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Greenfield",
    detail: "Quiet lanes, big oaks, room to grow",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
  },
];

const testimonials = [
  {
    quote:
      "We saw four homes in one weekend and made an offer on the third. Habitat handled the survey, the lawyer and the sellers' nerves. We just picked the paint.",
    name: "Elena & Toma Ilic",
    role: "Bought in Riverside",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "They sold our apartment 6% above asking in eleven days, and talked us out of a renovation that would never have paid back. That honesty is rare.",
    name: "Marcus Reid",
    role: "Sold in Old Town",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
  },
];

export default function Home() {
  return (
    <main id="top">
      <ScrollProgress />
      <Navbar
        variant="pill"
        brand={<Wordmark />}
        note="Open house this weekend · Old Town & Riverside — 14 homes, one afternoon"
        links={[
          { label: "Listings", href: "#listings" },
          { label: "Neighborhoods", href: "#neighborhoods" },
          { label: "About", href: "#about" },
          { label: "Stories", href: "#stories" },
        ]}
        cta={{ label: "Book a viewing", href: "#contact" }}
      />

      <section className="relative overflow-hidden pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.08fr]">
          <div>
            <Reveal>
              <p className="eyebrow plain">Boutique real estate · Est. 2014</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="hero-title mt-5">
                Homes with history,
                <br />
                service <em>without</em> the drama.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
                We represent fewer homes, know every street personally, and answer on the first ring. Curated listings,
                off-market access and a team that stays until the keys change hands.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#listings" className="btn btn-primary">
                  Browse listings
                  <ArrowRight />
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Talk to an agent
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-[var(--line)] pt-6">
                <div>
                  <p className="price text-2xl">$2.4B</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Sold since 2014</p>
                </div>
                <div>
                  <p className="price text-2xl">1,200+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Families moved</p>
                </div>
                <div className="flex items-center gap-2">
                  <Stars />
                  <span className="text-xs text-[var(--muted)]">4.9 · 214 reviews</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={34}>
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80"
                  alt="Featured Habitat home"
                  className="h-[380px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-xl sm:right-auto sm:w-[280px]">
                <div className="flex items-center justify-between">
                  <span className="badge badge-accent">Just sold</span>
                  <span className="text-[11px] text-[var(--muted)]">11 days on market</span>
                </div>
                <p className="price mt-3 text-xl">$1.36M</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-[var(--muted)]">
                  <MapPin size={12} /> 8 Alder Court, Riverside · 4 bed
                </p>
              </div>
              <div className="absolute -right-3 top-8 hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 shadow-lg md:block">
                <p className="flex items-center gap-2 text-xs font-semibold">
                  <KeyRound size={14} className="text-[var(--accent)]" />
                  98% list-to-ask
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="wrap mt-16 md:mt-20">
          <div className="search-panel grid gap-6 p-6 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-end md:p-8">
            <div>
              <label className="field-label" htmlFor="loc">
                Location
              </label>
              <input id="loc" className="input" placeholder="City, street or ZIP" />
            </div>
            <div>
              <label className="field-label" htmlFor="type">
                Property type
              </label>
              <select id="type" className="select" defaultValue="any">
                <option value="any">Any type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="budget">
                Budget
              </label>
              <select id="budget" className="select" defaultValue="any">
                <option value="any">Any budget</option>
                <option>Up to $500k</option>
                <option>$500k – $1M</option>
                <option>$1M – $2M</option>
                <option>$2M+</option>
              </select>
            </div>
            <a href="#listings" className="btn btn-primary h-[46px] px-7">
              Search homes
              <ArrowRight />
            </a>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[var(--line)] py-6">
        <div className="wrap flex flex-col gap-4 md:flex-row md:items-center">
          <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">As featured in</p>
          <Marquee className="md:flex-1">
            {["Architectural Digest", "Dwell", "Monocle", "Elle Decoration", "The Local Review", "Habitat Journal"].map((p) => (
              <span key={p} className="press-item">
                {p}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="listings" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Featured listings"
              title={
                <>
                  Six homes we&apos;d
                  <br />
                  happily live in <span className="serif italic text-[var(--accent)]">ourselves.</span>
                </>
              }
              sub="Every listing is visited, measured and photographed by our own team. What you see is what exists."
            />
            <Reveal delay={0.1}>
              <a href="#contact" className="btn btn-ghost">
                Request the off-market list
                <ArrowUpRight />
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <StaggerItem key={l.title}>
                <article className="listing card h-full">
                  <div className="relative">
                    <img src={l.img} alt={l.title} loading="lazy" className="h-60 w-full object-cover" />
                    {l.tag ? <span className="badge badge-light absolute left-4 top-4">{l.tag}</span> : null}
                    <span className="badge badge-dark absolute right-4 top-4">{l.price}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="serif text-xl font-semibold">{l.title}</h3>
                    <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-[var(--muted)]">
                      <MapPin size={12} /> {l.address}
                    </p>
                    <div className="mt-4 flex items-center gap-5 border-t border-[var(--line)] pt-4 text-[12px] text-[var(--muted)]">
                      <span className="flex items-center gap-1.5">
                        <BedDouble size={14} /> {l.beds} bed
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Building2 size={14} /> {l.baths} bath
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Ruler size={14} /> {l.sqft} sqft
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-[var(--line)] bg-[rgba(255,255,255,.5)] py-20 md:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[26px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                  alt="Habitat agent handing over keys"
                  loading="lazy"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="absolute -right-4 bottom-8 hidden w-56 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-lg md:block">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  <Clock size={13} className="text-[var(--accent)]" /> Average reply
                </p>
                <p className="price mt-2 text-3xl">6 min</p>
                <p className="mt-1 text-xs text-[var(--muted)]">during working hours. Yes, really.</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="Why Habitat"
              title={
                <>
                  Small team.
                  <br />
                  Unreasonably <span className="serif italic text-[var(--accent)]">thorough.</span>
                </>
              }
              sub="We only take on twelve active clients at a time. That is not a marketing line — it is the reason our clients close faster and sleep better."
            />
            <Stagger className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {[
                { n: "01", icon: Compass, t: "Street-level knowledge", d: "We know which lane floods, which street is quiet at night, and which renovation actually pays back." },
                { n: "02", icon: ShieldCheck, t: "Off-market access", d: "A third of what we sell never appears online. Our clients see it first." },
                { n: "03", icon: TrendingUp, t: "Honest pricing", d: "Data-backed valuations — even when the number is lower than you hoped." },
                { n: "04", icon: Sparkles, t: "Full concierge", d: "Survey, lawyer, movers, locksmith. One thread, one team, no chasing." },
              ].map((f) => (
                <StaggerItem key={f.n}>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="feature-num">{f.n}</span>
                      <f.icon size={17} className="text-[var(--accent)]" />
                    </div>
                    <h3 className="serif mt-3 text-lg font-semibold">{f.t}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{f.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section id="neighborhoods" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Neighborhoods"
            title="Know the street before you buy the house."
            sub="Four districts we know block by block — with the honest pros and cons of each."
          />
          <Reveal delay={0.1}>
            <div className="snap-row no-scrollbar mt-12">
              {neighborhoods.map((n) => (
                <a key={n.name} href="#contact" className="group relative w-[75vw] shrink-0 overflow-hidden rounded-[24px] border border-[var(--line)] sm:w-[46%] lg:w-[31%]">
                  <img src={n.img} alt={n.name} loading="lazy" className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[400px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,26,20,.85)] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-[#f7f4ed]">
                    <h3 className="serif text-2xl font-semibold">{n.name}</h3>
                    <p className="mt-1.5 max-w-[26ch] text-[13px] leading-relaxed opacity-80">{n.detail}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]">
                      Explore homes <ArrowRight size={13} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <Reveal>
            <div className="stats-band grid gap-10 p-9 sm:grid-cols-2 md:p-14 lg:grid-cols-4">
              {[
                { v: 2.4, suf: "B", pre: "$", label: "In homes sold" },
                { v: 1200, suf: "+", label: "Families moved" },
                { v: 98, suf: "%", label: "List-to-ask price" },
                { v: 12, suf: " yrs", label: "On the same streets" },
              ].map((s) => (
                <div key={s.label} className="relative z-10">
                  <p className="serif text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-none">
                    <Counter to={s.v} prefix={s.pre ?? ""} suffix={s.suf} decimals={s.v === 2.4 ? 1 : 0} />
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.16em] opacity-70">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="stories" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow="Client stories" title="Bought, sold, and still calling us first." align="center" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <figure className="card flex h-full flex-col p-8">
                  <Stars />
                  <blockquote className="serif mt-5 flex-1 text-[19px] leading-relaxed">“{t.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-[var(--line)] pt-5">
                    <Avatar src={t.avatar} alt={t.name} size={44} />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="mt-0.5 text-[12px] text-[var(--muted)]">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <ul className="tick-list mx-auto mt-12 max-w-2xl">
              {[
                "No obligation valuations, delivered within 48 hours",
                "Photography, floor plans and staging included in every sale",
                "Escrow, taxes and paperwork handled end to end",
              ].map((item) => (
                <li key={item}>
                  <span className="ico">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 pb-24">
        <div className="wrap">
          <Reveal>
            <div className="stats-band grid items-center gap-8 p-9 md:grid-cols-[1.3fr_1fr] md:p-16">
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] opacity-70">Private viewings · 7 days a week</p>
                <h2 className="serif mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.02]">
                  Let&apos;s find the address
                  <br />
                  you&apos;ll stop rewriting.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">
                  Tell us the street, the budget or just the feeling. We&apos;ll reply with three homes worth your
                  Saturday.
                </p>
              </div>
              <div className="relative z-10 flex flex-col gap-3">
                <a href="mailto:hello@habitat.estate" className="btn w-full bg-[var(--accent-fg)] text-[var(--accent)]">
                  Book a viewing
                  <ArrowUpRight />
                </a>
                <a href="tel:+13125550188" className="btn btn-ghost w-full border-[rgba(247,244,237,.35)] text-[var(--accent-fg)]">
                  +1 312 555 0188
                </a>
                <p className="mt-1 text-center text-[11px] opacity-70">Studio at 12 Bellhouse Road · Mon–Sun, 8am–8pm</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="A boutique real estate studio for people who would rather be advised than sold to. Curated listings, honest pricing, concierge service."
        socials={["instagram", "linkedin", "pinterest"]}
        copyright="© 2026 Habitat Estate Studio. All rights reserved."
        columns={[
          {
            title: "Buy",
            links: [
              { label: "Featured listings", href: "#listings" },
              { label: "Off-market list", href: "#contact" },
              { label: "Neighborhoods", href: "#neighborhoods" },
              { label: "Mortgage guide", href: "#" },
            ],
          },
          {
            title: "Sell",
            links: [
              { label: "Free valuation", href: "#contact" },
              { label: "Our process", href: "#about" },
              { label: "Sold gallery", href: "#stories" },
              { label: "Fees", href: "#" },
            ],
          },
          {
            title: "Studio",
            links: [
              { label: "About us", href: "#about" },
              { label: "Journal", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#contact" },
            ],
          },
        ]}
      />
    </main>
  );
}
