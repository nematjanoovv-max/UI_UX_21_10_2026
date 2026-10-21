import { ArrowRight, ArrowUpRight, Gem, MapPin, Ruler, ShieldCheck, Sparkles } from "lucide-react";
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

function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.4" aria-hidden>
        <path d="M5 20 12 4l7 16" strokeLinecap="round" />
        <path d="M8.2 14h7.6" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[20px] font-medium tracking-[0.34em]">AURÉLIE</span>
    </span>
  );
}

function Seal() {
  return (
    <div className="relative h-28 w-28 shrink-0">
      <svg viewBox="0 0 120 120" className="spin-slow h-full w-full" aria-hidden>
        <defs>
          <path id="seal-path" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        </defs>
        <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(201,163,95,.28)" />
        <text fill="var(--accent)" fontSize="9" letterSpacing="3.4" style={{ fontFamily: "Inter, sans-serif" }}>
          <textPath href="#seal-path">HAND-FINISHED · EST. 1974 · RECYCLED GOLD · </textPath>
        </text>
      </svg>
      <span className="font-display absolute inset-0 grid place-items-center text-4xl text-[var(--accent)]">A</span>
    </div>
  );
}

const pieces = [
  {
    name: "Solene Signet",
    material: "18k recycled gold · hand-engraved",
    price: "$1,480",
    tag: "Signature",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Ondine Hoops",
    material: "Gold vermeil · freshwater pearl",
    price: "$640",
    tag: "",
    img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Maison Chain",
    material: "18k gold · 42cm, adjustable",
    price: "$2,150",
    tag: "New",
    img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Belier Stack",
    material: "Set of three · certified diamonds",
    price: "$3,900",
    tag: "",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
  },
];

const care = [
  {
    icon: Ruler,
    t: "Resizing & repair",
    d: "Free resizing for life on every ring we make, plus invisible repairs by the same hands that built it.",
  },
  {
    icon: Sparkles,
    t: "Restoration & polish",
    d: "Annual polishing and rhodium care, returned in a linen pouch within seven days.",
  },
  {
    icon: ShieldCheck,
    t: "Valuation & insurance",
    d: "Independent appraisal certificates renewed every three years — accepted by all major insurers.",
  },
  {
    icon: Gem,
    t: "Stone sourcing",
    d: "Certified stones traced to origin. If we cannot trace it, we will not set it.",
  },
];

const reviews = [
  {
    quote:
      "I wear the Maison chain every single day — through airports, kitchens, two toddlers. It still looks like the day it arrived.",
    name: "Camille Fontaine",
    role: "Client since 2019",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "They rebuilt my grandmother's ring around a new stone without erasing a single mark of wear. It still feels like hers.",
    name: "Priya Raghunathan",
    role: "Restoration client",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "We commissioned wedding bands with three weeks' notice. They treated it like the most important order of the year.",
    name: "Jonas & Elsa Meyer",
    role: "Made-to-order",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
];

const stats = [
  { v: 50, suf: " yrs", label: "At the bench" },
  { v: 12000, suf: "+", label: "Pieces delivered" },
  { v: 100, suf: "%", label: "Recycled gold" },
  { v: 3, suf: "", label: "Ateliers, one standard" },
];

export default function Home() {
  return (
    <main id="top">
      <ScrollProgress />
      <Navbar
        variant="center"
        brand={<Wordmark />}
        links={[
          { label: "Collections", href: "#collections" },
          { label: "Atelier", href: "#atelier" },
          { label: "Care", href: "#care" },
          { label: "Contact", href: "#contact" },
        ]}
        cta={{ label: "Book appointment", href: "#contact" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Fine jewellery · Est. 1974</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-6">
                Objects made to
                <br />
                outlive <em>trends.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-md text-[15px] font-light leading-relaxed text-[var(--muted)]">
                Solid gold. Certified stones. Fifty years at the same bench in Lyon. We make few pieces, finish them by
                hand, and look after them for as long as you wear them.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#collections" className="btn btn-primary">
                  View collections
                  <ArrowRight />
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Book a fitting
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-12 flex items-center gap-6">
                <Seal />
                <div className="max-w-[220px] space-y-2 text-[12px] leading-relaxed text-[var(--muted)]">
                  <p className="flex items-center gap-2">
                    <span className="gold-rule inline-block h-px w-6" /> Hallmarked in France
                  </p>
                  <p>Every piece ships insured, in a linen pouch with its certificate.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={34}>
            <div className="relative mx-auto max-w-[480px]">
              <div className="arch">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
                  alt="Aurélie gold ring on silk"
                  className="h-[420px] w-full object-cover md:h-[560px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden w-56 border border-[var(--line)] bg-[var(--card)] p-5 sm:block">
                <p className="field-label !text-[var(--muted)]">Signature piece</p>
                <p className="font-display mt-2 text-2xl">Solene Signet</p>
                <p className="mt-1 text-[12px] text-[var(--muted)]">18k recycled gold · hand engraved</p>
                <p className="mt-3 text-sm text-[var(--accent)]">$1,480</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* marquee */}
      <section className="border-y border-[var(--line)] py-5">
        <Marquee>
          {["Hand-finished in Lyon", "Recycled 18k gold", "Certified stones", "Lifetime care", "Insured worldwide shipping"].map((t) => (
            <span key={t} className="marquee-item">
              <span className="dot-sep">◆</span>
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      {/* collections */}
      <section id="collections" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="The collections"
              title={
                <>
                  Pieces with weight,
                  <br />
                  in every sense.
                </>
              }
              sub="Small runs, numbered by hand. When a piece sells out, we remake it properly — never in a hurry."
            />
            <Reveal delay={0.1}>
              <a href="#contact" className="link-line text-[var(--accent)]">
                Request the full catalogue
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pieces.map((p) => (
              <StaggerItem key={p.name}>
                <a href="#contact" className="piece block">
                  <div className="relative">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-[320px] w-full object-cover md:h-[380px]" />
                    {p.tag ? (
                      <span className="absolute left-4 top-4 border border-[rgba(201,163,95,.6)] bg-[rgba(11,10,9,.7)] px-3 py-1 text-[9px] uppercase tracking-[0.24em] text-[var(--accent)]">
                        {p.tag}
                      </span>
                    ) : null}
                    <div className="piece-meta">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">Discover</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl">{p.name}</h3>
                      <span className="text-[13px] text-[var(--accent)]">{p.price}</span>
                    </div>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">{p.material}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* atelier */}
      <section id="atelier" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap grid items-center gap-16 lg:grid-cols-[.92fr_1.08fr]">
          <Reveal>
            <div className="relative">
              <div className="arch">
                <img
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80"
                  alt="Goldsmith at the Aurélie atelier"
                  loading="lazy"
                  className="h-[460px] w-full object-cover md:h-[580px]"
                />
              </div>
              <div className="gold-rule absolute -right-10 top-1/2 hidden w-24 lg:block" />
            </div>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="Inside the atelier"
              title={
                <>
                  Three benches,
                  <br />
                  <em className="font-display italic text-[var(--accent)]">zero</em> conveyor belts.
                </>
              }
              sub="Every Aurélie piece passes through the same three pairs of hands — from wax carving to final polish. It takes longer. That is the point."
            />
            <Stagger className="mt-10 space-y-8">
              {[
                ["01", "Designed from the stone backwards", "We choose the stone first, then draw the setting around its character — not the other way round."],
                ["02", "Cast in recycled 18k gold", "Our gold is refined in-house from certified recycled sources, hallmarked and traceable to the gram."],
                ["03", "Finished by hand, checked twice", "Every clasp, hinge and prong is tested by a second goldsmith before it is allowed to leave."],
              ].map(([n, t, d]) => (
                <StaggerItem key={n} className="flex gap-6">
                  <span className="craft-num">{n}</span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-2xl">{t}</h3>
                    <p className="mt-2 max-w-md text-[14px] font-light leading-relaxed text-[var(--muted)]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <p className="font-display mt-10 text-xl italic text-[var(--accent)]">— Élodie Marchand, Creative Director</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-l border-[var(--line)] pl-6">
                <p className="stat-fig">
                  <Counter to={s.v} suffix={s.suf} />
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* care */}
      <section id="care" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Lifetime care"
            title="We stay with the piece, not just the sale."
            sub="Buying once and keeping it forever is the whole idea — so the upkeep is on us, for as long as you own it."
          />
          <Stagger className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {care.map((c) => (
              <StaggerItem key={c.t} className="bg-[var(--bg)]">
                <div className="h-full p-7">
                  <c.icon size={20} className="text-[var(--accent)]" />
                  <h3 className="font-display mt-5 text-xl">{c.t}</h3>
                  <p className="mt-2.5 text-[13px] font-light leading-relaxed text-[var(--muted)]">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* reviews */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow="Clients" title="Kept, worn, passed on." align="center" />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="flex h-full flex-col border border-[var(--line)] p-7">
                  <Stars />
                  <blockquote className="quote-serif mt-5 flex-1">“{r.quote}”</blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-[var(--line)] pt-5">
                    <Avatar src={r.avatar} alt={r.name} size={40} />
                    <div>
                      <p className="text-[13px] font-medium">{r.name}</p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">{r.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* appointment */}
      <section id="contact" className="scroll-mt-24 pb-24">
        <div className="wrap">
          <Reveal>
            <div className="appointment px-7 py-12 text-center md:px-16 md:py-20">
              <p className="eyebrow plain">Private appointments · Lyon & Paris</p>
              <h2 className="font-display mx-auto mt-5 max-w-2xl text-[clamp(2.2rem,4.8vw,3.8rem)] font-light leading-[1.02]">
                Sit with the stone.
                <br />
                Then decide, slowly.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[14px] font-light leading-relaxed text-[var(--muted)]">
                One hour, one goldsmith, no obligation. Bring an heirloom to redesign or start from a blank page — tea is
                complimentary.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:atelier@aurelie.boutique" className="btn btn-primary">
                  Book an appointment
                  <ArrowUpRight />
                </a>
                <a href="tel:+33472550119" className="btn btn-ghost">
                  +33 4 72 55 01 19
                </a>
              </div>
              <p className="mt-6 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                <MapPin size={12} className="text-[var(--accent)]" /> 14 Rue des Orfèvres, Lyon · Tue–Sat, 10–19h
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="A family atelier making solid-gold jewellery in small, numbered runs — and caring for each piece for life."
        socials={["instagram", "pinterest", "facebook"]}
        copyright="© 2026 Aurélie Joaillerie. All rights reserved."
        columns={[
          {
            title: "Shop",
            links: [
              { label: "Rings", href: "#collections" },
              { label: "Necklaces", href: "#collections" },
              { label: "Earrings", href: "#collections" },
              { label: "Bridal", href: "#contact" },
            ],
          },
          {
            title: "Atelier",
            links: [
              { label: "Our story", href: "#atelier" },
              { label: "Made to order", href: "#contact" },
              { label: "Restoration", href: "#care" },
              { label: "Journal", href: "#" },
            ],
          },
          {
            title: "Client care",
            links: [
              { label: "Lifetime care", href: "#care" },
              { label: "Shipping & returns", href: "#" },
              { label: "Sizing guide", href: "#" },
              { label: "Contact", href: "#contact" },
            ],
          },
        ]}
      />
    </main>
  );
}
