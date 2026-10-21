import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Globe2,
  Leaf,
  MapPin,
  Plane,
  Radar,
  Ship,
  ShieldCheck,
  Truck,
  Warehouse,
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

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-[var(--accent)] text-[var(--accent-fg)]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 17 12 5l8 12" />
          <path d="M8 17h8" />
        </svg>
      </span>
      <span className="font-display text-[15px] font-bold tracking-[0.22em]">PORTAGE</span>
    </span>
  );
}

const services = [
  {
    icon: Ship,
    title: "Ocean freight",
    desc: "FCL and LCL across 120+ lanes, with space secured even in peak season.",
    meta: "FCL · LCL · Reefer",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
    tag: "Most used",
  },
  {
    icon: Plane,
    title: "Air freight",
    desc: "Priority uplift and consolidated charters for cargo that cannot wait.",
    meta: "Next-flight-out · 48h",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Truck,
    title: "Road & rail",
    desc: "Cross-border trucking and rail corridors with live ETAs at every mile.",
    meta: "FTL · LTL · Rail",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Bonded storage, pick-and-pack and returns handled from one dashboard.",
    meta: "8 hubs · 42k m²",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80",
  },
];

const clients = ["Northwind", "Atlas Foods", "Vela Studio", "Meridian", "Orbital", "Helix Labs", "Kinetic", "Harvest & Co"];

const stats = [
  { value: 120, suffix: "+", label: "Countries served" },
  { value: 2.4, suffix: "M", label: "Shipments a year", decimals: 1 },
  { value: 99.2, suffix: "%", label: "On-time delivery", decimals: 1 },
  { value: 48, suffix: "h", label: "Average door-to-door" },
];

const testimonials = [
  {
    quote:
      "Portage cut our lead time from 34 days to 19. The tracking alone paid for itself in the first quarter — our team stopped chasing carriers and started planning.",
    name: "Mira Chen",
    role: "Head of Supply Chain, Northwind",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "The first freight partner that answers before we ask. One dashboard, one invoice, zero surprises at customs.",
    name: "Daniel Okafor",
    role: "COO, Atlas Foods",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "We ship fragile studio equipment to 14 countries. Nothing has arrived damaged in two years. That is the whole review.",
    name: "Sofia Marchetti",
    role: "Logistics Lead, Vela Studio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative">
      <ScrollProgress />
      <div className="grain" aria-hidden />
      <Navbar
        brand={<Wordmark />}
        links={[
          { label: "Services", href: "#services" },
          { label: "Network", href: "#network" },
          { label: "Process", href: "#process" },
          { label: "Stories", href: "#stories" },
        ]}
        cta={{ label: "Get a quote", href: "#contact" }}
      />

      <section className="relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="line-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Reveal>
              <span className="chip">
                <span className="dot" />
                Live network · 42 lanes active today
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="hero-title mt-6">
                Freight that moves
                <br className="hidden sm:block" /> at the speed of <em>now.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)] md:text-base">
                Ocean, air and road freight — planned, tracked and delivered by one team that treats your cargo like
                its own. No black boxes. No hold music.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn btn-primary">
                  Get a quote
                  <ArrowUpRight />
                </a>
                <a href="#track" className="btn btn-ghost">
                  <Radar />
                  Track a shipment
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--line)] pt-6">
                <div className="flex items-center gap-3">
                  <Stars />
                  <span className="text-xs text-[var(--muted)]">4.9/5 from 380+ shippers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                  <ShieldCheck size={15} className="text-[var(--accent)]" />
                  Fully insured, AEO certified
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={36}>
            <div id="track" className="relative mx-auto w-full max-w-[520px] scroll-mt-28">
              <div className="float-a absolute -right-2 -top-5 z-20 hidden items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-[11px] shadow-xl sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                99.2% on-time this month
              </div>

              <div className="tk-card rounded-[24px] border border-[var(--line)] p-2">
                <div className="rounded-[18px] bg-[#08141b] p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Live shipment</p>
                      <p className="mt-1.5 font-mono text-sm tracking-wide">PRT-4820-SHA</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(201,246,92,.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                      In transit
                    </span>
                  </div>

                  <div className="relative mt-5 h-44 overflow-hidden rounded-xl border border-[var(--line)] bg-[#071119]">
                    <div className="tk-grid absolute inset-0" aria-hidden />
                    <svg viewBox="0 0 420 180" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
                      <path
                        d="M36 132 C 100 140 118 58 196 66 S 330 100 384 44"
                        fill="none"
                        stroke="rgba(201,246,92,.8)"
                        strokeWidth="1.6"
                        className="route-line"
                      />
                      <circle cx="36" cy="132" r="4" fill="#c9f65c" />
                      <circle cx="384" cy="44" r="4" fill="#c9f65c" />
                      <circle cx="196" cy="66" r="10" fill="rgba(201,246,92,.13)" />
                      <circle cx="196" cy="66" r="3.5" fill="#c9f65c" />
                    </svg>
                    <span className="absolute bottom-3 left-4 flex items-center gap-1 text-[10px] text-[var(--muted)]">
                      <MapPin size={11} /> Shanghai
                    </span>
                    <span className="absolute right-4 top-3 flex items-center gap-1 text-[10px] text-[var(--muted)]">
                      Hamburg <MapPin size={11} />
                    </span>
                    <span className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 rounded-full border border-[var(--line)] bg-[rgba(8,20,27,.9)] px-2.5 py-1 text-[9px] tracking-wide text-[var(--fg)]">
                      MV Northern Star
                    </span>
                    <div className="float-b absolute bottom-4 right-4 rounded-lg border border-[var(--line)] bg-[rgba(8,20,27,.92)] px-2.5 py-2 text-[10px]">
                      <p className="text-[var(--muted)]">Sea temp</p>
                      <p className="mt-0.5 font-mono text-[var(--accent)]">-18.2°C</p>
                    </div>
                  </div>

                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-[rgba(255,255,255,.08)]">
                    <div className="h-full w-[72%] rounded-full bg-[var(--accent)]" />
                  </div>
                  <div className="mt-3 flex justify-between text-[10px] text-[var(--muted)]">
                    <span>Booked</span>
                    <span>Departed</span>
                    <span className="text-[var(--accent)]">At sea · 72%</span>
                    <span>Arrives Tue</span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[var(--line)] pt-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Vessel</p>
                      <p className="mt-1 text-[11px] font-medium">Northern Star</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Container</p>
                      <p className="mt-1 font-mono text-[11px]">MSCU 774 210 3</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">ETA</p>
                      <p className="mt-1 text-[11px] font-medium text-[var(--accent)]">Tue, 08:40</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="float-b absolute -bottom-8 -left-3 z-20 hidden items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 shadow-2xl sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(201,246,92,.12)] text-[var(--accent)]">
                  <Leaf size={16} />
                </span>
                <div>
                  <p className="text-[10px] text-[var(--muted)]">CO₂ per container</p>
                  <p className="text-xs font-semibold">−18% vs. last year</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--line)] py-7">
        <div className="wrap flex flex-col gap-5 md:flex-row md:items-center">
          <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] md:max-w-[170px]">
            Trusted by supply chains that can&apos;t stand still
          </p>
          <Marquee className="md:flex-1">
            {clients.map((c) => (
              <span key={c} className="logo-item px-8">
                {c}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="What we move"
              title={
                <>
                  Every mode. One <span className="text-[var(--accent)]">standard.</span>
                </>
              }
              sub="Pick a lane or let us design the whole route. Either way, you get the same visibility, the same team and the same answer when something changes."
            />
            <Reveal delay={0.1}>
              <a href="#contact" className="btn btn-ghost">
                Compare modes
                <ArrowRight />
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <a href="#contact" className="svc card block h-full p-2">
                  <div className="relative h-52 overflow-hidden rounded-[14px]">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061018] via-transparent to-transparent" />
                    {s.tag ? (
                      <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[var(--accent-fg)]">
                        {s.tag}
                      </span>
                    ) : null}
                    <span className="absolute bottom-3 left-3 font-mono text-[10px] text-white/70">{s.meta}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <s.icon size={16} className="text-[var(--accent)]" />
                        <h3 className="font-display text-lg font-medium tracking-tight">{s.title}</h3>
                      </div>
                      <span className="svc-arrow grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--line)]">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--muted)]">{s.desc}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="network" className="scroll-mt-24 border-y border-[var(--line)] bg-[rgba(255,255,255,.015)] py-20 md:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[26px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80"
                  alt="Warehouse operations at Portage"
                  loading="lazy"
                  className="h-[420px] w-full object-cover grayscale-[35%] md:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061018] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[var(--line)] bg-[rgba(8,20,27,.85)] p-4 backdrop-blur-md sm:right-auto sm:w-[300px]">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Control tower</p>
                  <span className="flex items-center gap-1.5 text-[10px] text-[var(--accent)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> Live
                  </span>
                </div>
                <div className="mt-4 space-y-3 text-[11px]">
                  {[
                    ["SHA → HAM", "On schedule", "text-[var(--accent)]"],
                    ["NGB → LAX", "Customs cleared", "text-[var(--accent)]"],
                    ["RTM → BER", "Weather delay", "text-amber-300"],
                  ].map(([route, status, color]) => (
                    <div key={route} className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] text-[var(--muted)]">{route}</span>
                      <span className={color}>{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="One control tower"
              title={
                <>
                  See every mile.
                  <br />
                  Fix problems <span className="text-[var(--accent)]">early.</span>
                </>
              }
              sub="Your dedicated operations team watches the same live board you do. Exceptions are flagged before they become delays, and every decision is logged."
            />
            <Stagger className="mt-8 space-y-4">
              {[
                ["Live milestone tracking", "GPS, port and carrier data merged into one clean timeline — no more refreshing five websites."],
                ["Exception management", "Weather, customs or capacity issues get a named owner and a new ETA within the hour."],
                ["One invoice, every mode", "Landed cost, duties and fees in a single document your finance team will actually like."],
              ].map(([title, desc]) => (
                <StaggerItem key={title} className="flex gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[rgba(201,246,92,.12)] text-[var(--accent)]">
                    <Check size={13} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">{desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Book a walkthrough
                  <ArrowRight />
                </a>
                <a href="#process" className="btn btn-ghost">
                  How it works
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-l border-[var(--line)] pl-5">
                <p className="stat-num">
                  <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-2 text-xs text-[var(--muted)]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-24 pb-20 md:pb-28">
        <div className="wrap">
          <SectionHead
            eyebrow="How it works"
            title="Three steps. No mystery."
            sub="From first quote to final proof of delivery — the whole journey lives in one place."
            align="center"
          />
          <Stagger className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
            {[
              {
                n: "01",
                icon: Globe2,
                title: "Tell us what moves",
                desc: "Share the cargo, the lane and the deadline. A real specialist replies with options — not a form letter — within 2 hours.",
              },
              {
                n: "02",
                icon: Radar,
                title: "We plan and move it",
                desc: "We book capacity, handle documents and clear customs. You approve the plan once and watch it happen live.",
              },
              {
                n: "03",
                icon: ShieldCheck,
                title: "Arrives, proven",
                desc: "Proof of delivery, condition photos and a clean invoice land in your inbox before the truck leaves the gate.",
              },
            ].map((step, i) => (
              <StaggerItem key={step.n}>
                <div className={`step-line relative ${i < 2 ? "md:pr-6" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--accent)]">
                      <step.icon size={18} />
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">{step.n}</span>
                  </div>
                  <h3 className="font-display mt-5 text-xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-[var(--muted)]">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="stories" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHead eyebrow="Shipper stories" title={<>Quietly reliable.<br />Loudly recommended.</>} />
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                <Stars />
                <span>4.9 average across 380 reviews</span>
              </div>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <figure className="card flex h-full flex-col p-7">
                  <span className="quote-mark" aria-hidden>
                    “
                  </span>
                  <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-[var(--fg)]/90">{t.quote}</blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-[var(--line)] pt-5">
                    <Avatar src={t.avatar} alt={t.name} size={38} />
                    <div>
                      <p className="text-xs font-semibold">{t.name}</p>
                      <p className="mt-0.5 text-[11px] text-[var(--muted)]">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <div className="cta-band p-8 sm:p-12 md:p-16">
              <div className="relative z-10 max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] opacity-70">Ready when you are</p>
                <h2 className="font-display mt-4 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                  Your cargo has somewhere to be.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-75">
                  Tell us the lane. We&apos;ll come back within two hours with a route, a price and a plan you can hold us
                  to.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="mailto:hello@portage.co" className="btn btn-dark">
                    Talk to a specialist
                    <ArrowUpRight />
                  </a>
                  <a href="tel:+13125550148" className="flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium underline decoration-1 underline-offset-4 opacity-80">
                    <Clock size={15} />
                    +1 312 555 0148 · 24/7
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-1/3 items-end justify-end p-8 opacity-70 md:flex" aria-hidden>
                <svg viewBox="0 0 200 120" className="w-full max-w-[280px]" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M10 100 C 55 100 55 30 100 34 S 160 74 190 24" strokeDasharray="3 6" />
                  <circle cx="10" cy="100" r="3" fill="currentColor" stroke="none" />
                  <circle cx="190" cy="24" r="3" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="A modern freight partner for teams who would rather build than chase carriers. Ocean, air, road and warehousing — one window."
        socials={["linkedin", "instagram", "x"]}
        copyright="© 2026 Portage Logistics Ltd. All rights reserved."
        columns={[
          {
            title: "Company",
            links: [
              { label: "About", href: "#network" },
              { label: "Careers", href: "#" },
              { label: "Press", href: "#" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Services",
            links: [
              { label: "Ocean freight", href: "#services" },
              { label: "Air freight", href: "#services" },
              { label: "Road & rail", href: "#services" },
              { label: "Warehousing", href: "#services" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Track shipment", href: "#track" },
              { label: "Rate calculator", href: "#contact" },
              { label: "Customs guide", href: "#" },
              { label: "Status", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
