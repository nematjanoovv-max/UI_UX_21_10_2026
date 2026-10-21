import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  HardHat,
  Mail,
  MoveRight,
  Phone,
  Ruler,
  ShieldCheck,
  Timer,
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
  SectionHead,
  Stagger,
  StaggerItem,
  Stars,
} from "@/components/kit";

function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-8 w-8 place-items-center rounded-[5px] bg-[var(--accent)] text-[var(--accent-fg)]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden>
          <path d="M4 20V4h3v7h10V4h3v16h-3v-6H7v6H4Z" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="anton text-[19px] tracking-[0.14em]">GRIDWORKS</span>
    </span>
  );
}

const capabilities = [
  {
    n: "01",
    icon: HardHat,
    title: "General contracting",
    desc: "Ground-up builds from foundation to final fit-out, run by a superintendent who answers their own phone.",
    meta: "Fixed price · Fixed date",
  },
  {
    n: "02",
    icon: Ruler,
    title: "Design-build",
    desc: "One contract, one team. We draw it, price it and build it — so changes cost hours, not months.",
    meta: "Single contract",
  },
  {
    n: "03",
    icon: Warehouse,
    title: "Industrial & logistics",
    desc: "Warehouses, cold storage and distribution hubs built to keep trucks moving and audits calm.",
    meta: "42,000 m² delivered in 2025",
  },
  {
    n: "04",
    icon: ClipboardCheck,
    title: "Renovation & fit-out",
    desc: "Occupied-site upgrades with night shifts, dust control and a schedule your operations team signs off on.",
    meta: "Zero shutdown handovers",
  },
];

const projects = [
  {
    name: "Northgate Logistics Hub",
    meta: "Industrial · 42,000 m² · 2025",
    detail: "24 dock doors, 12m clear height, delivered 3 weeks early.",
    img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1600&q=80",
    wide: true,
  },
  {
    name: "Helix Research Campus",
    meta: "Commercial · 18,500 m² · 2024",
    detail: "LEED Gold, fully occupied on opening day.",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Harbor Bridge Refit",
    meta: "Infrastructure · 1.2 km · 2023",
    detail: "Full deck replacement with traffic kept open.",
    img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Riverside Cold Store",
    meta: "Cold storage · 26,000 m² · 2026",
    detail: "−25°C racking hall, commissioned in 14 months.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

const clients = ["Northwind Group", "Meridian REIT", "Atlas Foods", "Port of Kestrel", "Orbital Logistics", "Vantage Cold Chain"];

const reviews = [
  {
    quote:
      "Twenty-two weeks, forty-two thousand square metres, and not one surprise invoice. Their superintendent walked our racking contractor through the slab tolerances personally.",
    name: "Dana Whitfield",
    role: "VP Operations, Northwind Group",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "We stayed open through a full fit-out. Three floors, night shifts, zero lost trading days. I have never seen a site that clean.",
    name: "Andre Koval",
    role: "Director, Meridian REIT",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
  },
];

const stats = [
  { v: 340, suf: "+", label: "Projects delivered" },
  { v: 22, suf: " yrs", label: "On the same sites" },
  { v: 0, suf: "", label: "Lost-time incidents" },
  { v: 98, suf: "%", label: "Delivered on budget" },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Now booking Q1 2027 · Licenses A-1184 / B-2207 · 0 lost-time incidents in 1,240 days"
        links={[
          { label: "Capabilities", href: "#capabilities" },
          { label: "Projects", href: "#work" },
          { label: "Safety", href: "#safety" },
          { label: "Process", href: "#process" },
        ]}
        cta={{ label: "Get an estimate", href: "#contact" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.06fr_.94fr]">
          <div>
            <Reveal>
              <p className="kicker">General contracting · Design-build</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-6">
                We build the
                <br />
                <em>bones</em> of the <span className="hollow">city.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Industrial, commercial and logistics construction for owners who measure success in weeks, not
                change-orders. Fixed price, fixed date, one accountable team.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn btn-primary">
                  Start your project
                  <ArrowUpRight />
                </a>
                <a href="#work" className="btn btn-ghost">
                  See the work
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--line)] pt-8 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="stat-fig">
                      <Counter to={s.v} suffix={s.suf} />
                    </p>
                    <p className="stat-label mt-2">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={34}>
            <div className="relative">
              <div className="grid grid-cols-[1fr_.72fr] gap-3">
                <div className="overflow-hidden rounded-[6px] border border-[var(--line)]">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                    alt="Gridworks construction site"
                    className="h-[380px] w-full object-cover md:h-[500px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-[6px] border border-[var(--line)]">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                      alt="Crew on site"
                      loading="lazy"
                      className="h-[184px] w-full object-cover md:h-[242px]"
                    />
                  </div>
                  <div className="hazard rounded-[3px]" aria-hidden />
                  <div className="safety-badge flex flex-1 flex-col justify-center rounded-[6px] p-4">
                    <ShieldCheck size={20} className="text-[var(--accent)]" />
                    <p className="anton mt-3 text-3xl">0 LTI</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                      1,240 days on site
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-[6px] border border-[var(--line)] bg-[var(--card)] px-5 py-3.5 shadow-2xl md:flex">
                <Timer size={18} className="text-[var(--accent)]" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Avg. handover</p>
                  <p className="text-sm font-semibold">3 weeks ahead of schedule</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* marquee */}
      <section className="border-y border-[var(--line)] py-5">
        <Marquee>
          {["Concrete", "Steel", "Cold storage", "Warehouses", "Fit-out", "Infrastructure"].map((t) => (
            <span key={t} className="anton px-8 text-2xl text-[var(--fg)]/85">
              {t} <span className="text-[var(--accent)]">◆</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* capabilities */}
      <section id="capabilities" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Capabilities"
              title={
                <span className="anton not-italic">
                  What we put
                  <br />
                  in the ground.
                </span>
              }
              sub="Four disciplines, one site team. No subcontractor roulette — every trade on our projects is vetted, insured and signed up to our safety standard."
            />
            <Reveal delay={0.1}>
              <a href="#contact" className="btn btn-ghost">
                Request capacity sheet
                <ArrowRight />
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12">
            {capabilities.map((c) => (
              <StaggerItem key={c.n}>
                <a href="#contact" className="cap-row group">
                  <span className="cap-no">{c.n}</span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-3">
                      <c.icon size={17} className="text-[var(--accent)]" />
                      <span className="anton text-xl tracking-wide md:text-2xl">{c.title}</span>
                    </span>
                    <span className="mt-2 block max-w-2xl text-[13px] leading-relaxed text-[var(--muted)]">{c.desc}</span>
                    <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                      {c.meta}
                    </span>
                  </span>
                  <MoveRight className="cap-arrow" size={26} />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* projects */}
      <section id="work" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Recent projects"
            title={<span className="anton">Built, handed over, in use.</span>}
            sub="A few of the sites our crews finished in the last three years — all delivered on fixed-price contracts."
          />

          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <StaggerItem key={p.name} className={p.wide ? "md:col-span-2" : ""}>
                <a href="#contact" className={`project block ${p.wide ? "" : "h-full"}`}>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className={`w-full object-cover ${p.wide ? "h-[300px] md:h-[420px]" : "h-[260px] md:h-[340px]"}`}
                  />
                  <div className="project-info">
                    <p className="project-meta">{p.meta}</p>
                    <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                      <h3 className="anton text-2xl md:text-3xl">{p.name}</h3>
                      <span className="flex items-center gap-1.5 text-[12px] text-[var(--muted)]">
                        {p.detail} <ArrowUpRight size={14} className="text-[var(--accent)]" />
                      </span>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* safety */}
      <section id="safety" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[6px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                  alt="Gridworks engineer reviewing plans"
                  loading="lazy"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="hazard absolute -bottom-3 left-6 right-6 rounded-[3px]" aria-hidden />
            </div>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="Safety & quality"
              title={
                <span className="anton">
                  1,240 days.
                  <br />
                  Zero injuries.
                </span>
              }
              sub="A fast site is a safe site. Our crews stop work for anything that fails an audit — and every project gets a weekly quality walk with photo evidence in your inbox."
            />
            <Reveal delay={0.1}>
              <ul className="checklist mt-9">
                {[
                  "OSHA-30 certified crews and site-specific induction for every worker",
                  "Daily photo audits — you see the site before your own team does",
                  "BIM clash detection before day one, so nothing gets built twice",
                  "Insurance and bonding to $50M, certificates shared before mobilization",
                ].map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn btn-primary">
                  Download safety record
                  <ArrowRight />
                </a>
                <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                  <Stars /> EMR 0.62 · AGC member
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* process */}
      <section id="process" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="How we work"
            title={<span className="anton">From first call to final walk.</span>}
            sub="Four fixed steps. You always know what happens next and what it costs."
          />
          <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              { n: "01", t: "Scope call", d: "One hour, on site or on video. We leave knowing the constraints, the budget and the deadline." },
              { n: "02", t: "Fixed proposal", d: "A priced, dated proposal within five working days — including every allowance we can foresee." },
              { n: "03", t: "Build & report", d: "Weekly progress reports with photos, cost tracking and one point of contact." },
              { n: "04", t: "Handover", d: "Punch list cleared, O&M manuals delivered, 24-month workmanship warranty starts." },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="step border-t border-[var(--line)] pt-6">
                  <p className="step-no">{s.n}</p>
                  <h3 className="anton mt-4 text-2xl">{s.t}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--muted)]">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* clients + reviews */}
      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
            Owners who build with us again
          </p>
          <Marquee className="mt-8">
            {clients.map((c) => (
              <span key={c} className="client-logo px-10">
                {c}
              </span>
            ))}
          </Marquee>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="h-full rounded-[6px] border border-[var(--line)] bg-[var(--card)] p-8">
                  <div className="flex items-center gap-2 text-[var(--accent)]">
                    <Truck size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Verified owner</span>
                  </div>
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed">“{r.quote}”</blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-[var(--line)] pt-5">
                    <Avatar src={r.avatar} alt={r.name} size={42} />
                    <div>
                      <p className="text-sm font-semibold">{r.name}</p>
                      <p className="mt-0.5 text-[12px] text-[var(--muted)]">{r.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* cta */}
      <section id="contact" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <div className="cta-panel">
              <div className="hazard" aria-hidden />
              <div className="grid items-center gap-10 p-9 md:grid-cols-[1.25fr_.75fr] md:p-14">
                <div>
                  <p className="kicker">Estimates in 5 working days</p>
                  <h2 className="anton mt-5 text-[clamp(2.2rem,4.8vw,3.8rem)]">
                    Tell us what
                    <br />
                    you&apos;re building.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
                    Send drawings, a napkin sketch or a street address. A senior estimator — not a sales rep — replies
                    within one working day.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="mailto:build@gridworks.co" className="btn btn-primary w-full">
                    <Mail />
                    build@gridworks.co
                  </a>
                  <a href="tel:+13125550172" className="btn btn-ghost w-full">
                    <Phone />
                    +1 312 555 0172
                  </a>
                  <p className="mt-1 text-center text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    Yard & office · 4400 Foundry Road
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="A general contractor and design-build partner for industrial, commercial and logistics projects. Fixed price, fixed date, one accountable team."
        socials={["linkedin", "facebook", "youtube"]}
        copyright="© 2026 Gridworks Construction Group. All rights reserved."
        columns={[
          {
            title: "Company",
            links: [
              { label: "Capabilities", href: "#capabilities" },
              { label: "Projects", href: "#work" },
              { label: "Safety record", href: "#safety" },
              { label: "Careers", href: "#" },
            ],
          },
          {
            title: "Services",
            links: [
              { label: "General contracting", href: "#capabilities" },
              { label: "Design-build", href: "#capabilities" },
              { label: "Industrial & logistics", href: "#capabilities" },
              { label: "Renovation", href: "#capabilities" },
            ],
          },
          {
            title: "Contractors",
            links: [
              { label: "Bid with us", href: "#" },
              { label: "Supplier portal", href: "#" },
              { label: "Safety standards", href: "#safety" },
              { label: "Contact", href: "#contact" },
            ],
          },
        ]}
      />
    </main>
  );
}
