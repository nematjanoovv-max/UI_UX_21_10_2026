import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers,
  Megaphone,
  Palette,
  PenTool,
  Play,
  Smartphone,
  Sparkles,
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
    <span className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[var(--fg)] text-[var(--bg)]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 18V6l12 12V6" />
        </svg>
      </span>
      <span className="display text-[18px] tracking-tight">Northlight</span>
    </span>
  );
}

function Seal() {
  return (
    <div className="relative h-24 w-24">
      <svg viewBox="0 0 120 120" className="spin-slow h-full w-full" aria-hidden>
        <defs>
          <path id="nl-seal" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill="currentColor" fontSize="9.4" letterSpacing="3.1" style={{ fontFamily: "Inter, sans-serif" }}>
          <textPath href="#nl-seal">BRAND · WEB · PRODUCT · MOTION · SINCE 2017 · </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <Sparkles size={20} className="text-[var(--accent)]" />
      </span>
    </div>
  );
}

const cases = [
  {
    n: "01",
    client: "Vantage Fintech",
    title: "Rebrand + product site that tripled qualified demos",
    result: "+312% demo requests",
    tags: "Brand · Web",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    client: "Kestrel Coffee",
    title: "Packaging and D2C store for 40 new doors",
    result: "4.2x online revenue",
    tags: "Identity · E-commerce",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    client: "Helio Health",
    title: "Onboarding product design that cut drop-off in half",
    result: "−48% drop-off",
    tags: "Product · UX",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    client: "Northwind Freight",
    title: "Motion system for a 9-market launch campaign",
    result: "1.4B impressions",
    tags: "Campaign · Motion",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
];

const services = [
  { icon: Palette, n: "01", t: "Brand identity", d: "Positioning, naming, identity systems and guidelines your whole company can actually use." },
  { icon: Code2, n: "02", t: "Websites", d: "Fast, accessible marketing sites in Next.js — designed and built by the same studio." },
  { icon: Smartphone, n: "03", t: "Product design", d: "End-to-end UX and UI for apps and dashboards, from first flow to design system." },
  { icon: Megaphone, n: "04", t: "Campaigns", d: "Launch concepts, art direction and motion that hold up in every market." },
  { icon: Layers, n: "05", t: "Design systems", d: "Tokens, components and documentation so your team ships consistently." },
  { icon: PenTool, n: "06", t: "Content & copy", d: "Voice, story and words — because most “brand problems” are sentence problems." },
];

const awards = [
  { name: "Site of the Day", org: "Awwwards", year: "2026" },
  { name: "Brand Identity, Gold", org: "European Design Awards", year: "2025" },
  { name: "Best Design System", org: "UX Awards", year: "2025" },
  { name: "Webby Honoree", org: "The Webby Awards", year: "2024" },
  { name: "Studio of the Year, Finalist", org: "D&AD", year: "2024" },
];

const reviews = [
  {
    quote: "They rebuilt our brand in six weeks and our demo pipeline tripled inside a quarter. The team acts like founders, not vendors.",
    name: "Priya Raghunathan",
    role: "CEO, Vantage Fintech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "The only studio we've worked with that argued with us — politely — and was right every single time.",
    name: "Marcus Reid",
    role: "CMO, Kestrel Coffee",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "Clean handoff, real documentation, zero drama. Our engineers still use their design system daily.",
    name: "Elena Ilie",
    role: "VP Product, Helio Health",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
];

const clients = ["Vantage", "Kestrel Coffee", "Helio Health", "Northwind", "Orbital", "Vela Studio", "Meridian", "Atlas Foods"];

export default function Home() {
  return (
    <main id="top" className="relative">
      <Navbar
        brand={<Wordmark />}
        links={[
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "Studio", href: "#studio" },
          { label: "Awards", href: "#awards" },
        ]}
        cta={{ label: "Start a project", href: "#contact" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="blob h-[420px] w-[420px]" style={{ background: "#7f6bff", top: "-120px", right: "-80px" }} aria-hidden />
        <div className="blob h-[320px] w-[320px]" style={{ background: "#ffb27f", bottom: "-140px", left: "-100px" }} aria-hidden />

        <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Reveal>
              <span className="pill-live">
                <span className="dot" />
                Booking projects for Q1 2027
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mega mt-7">
                We make brands
                <br />
                impossible to <span className="accent">ignore.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Northlight is a brand, web and product studio of nine people. We take on twelve projects a year — and
                treat every one like our own launch.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn btn-primary">
                  Start a project
                  <ArrowUpRight />
                </a>
                <a href="#work" className="btn btn-ghost">
                  <Play size={14} />
                  See selected work
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-12 flex items-center gap-6">
                <div className="text-[var(--accent)]">
                  <Seal />
                </div>
                <div className="grid gap-1 text-[13px] text-[var(--muted)]">
                  <p className="flex items-center gap-2">
                    <Stars /> 4.9/5 from 60+ founders
                  </p>
                  <p>120+ projects shipped · 14 awards</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={36}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="tilt-l reel-card">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Northlight studio at work"
                  className="h-[360px] w-full object-cover md:h-[440px]"
                />
              </div>
              <div className="tilt-r absolute -bottom-10 -left-4 w-[230px] rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-xl">
                <p className="micro">Latest launch</p>
                <p className="display mt-2 text-lg leading-snug">Vantage Fintech</p>
                <p className="mt-2 text-[12px] text-[var(--muted)]">Brand + site in 6 weeks</p>
                <p className="mt-3 text-sm font-semibold text-[var(--accent)]">+312% demos</p>
              </div>
              <div className="absolute -right-3 top-10 hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] px-5 py-4 shadow-lg md:block">
                <p className="micro">Studio size</p>
                <p className="display mt-1 text-2xl">9 people</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* services marquee */}
      <section className="border-y border-[var(--line)] py-5">
        <Marquee>
          {["Brand identity", "Websites", "Product design", "Motion", "Campaigns", "Design systems", "Copy"].map((t) => (
            <span key={t} className="display px-8 text-2xl text-[var(--fg)]/85">
              {t} <span className="text-[var(--accent)]">◆</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* numbers */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {[
            { v: 120, suf: "+", label: "Projects shipped" },
            { v: 14, suf: "", label: "Design awards" },
            { v: 9, suf: " yrs", label: "Independent" },
            { v: 92, suf: "%", label: "Clients who return" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-l border-[var(--line)] pl-6">
                <p className="display text-[clamp(2.2rem,4.4vw,3.4rem)]">
                  <Counter to={s.v} suffix={s.suf} />
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* work */}
      <section id="work" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Selected work"
              title={<span className="display">Work that moved a number.</span>}
              sub="We measure ourselves on outcomes, not moodboards. A few recent projects and what they did for the business."
            />
            <Reveal delay={0.1}>
              <a href="#contact" className="btn btn-ghost">
                Request full portfolio
                <ArrowRight />
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {cases.map((c) => (
              <StaggerItem key={c.n}>
                <a href="#contact" className="reel-card block h-full overflow-hidden">
                  <div className="relative">
                    <img src={c.img} alt={c.client} loading="lazy" className="h-64 w-full object-cover md:h-80" />
                    <span className="absolute left-5 top-5 rounded-full bg-[rgba(255,254,252,.92)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur">
                      {c.tags}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="micro">{c.client}</p>
                        <h3 className="display mt-2.5 text-[22px] leading-snug">{c.title}</h3>
                      </div>
                      <span className="case-index shrink-0">{c.n}</span>
                    </div>
                    <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-[12px] font-semibold text-[var(--accent)]">
                      {c.result}
                      <ArrowUpRight size={13} />
                    </p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* services */}
      <section id="services" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="What we do"
            title={<span className="display">Six things, done properly.</span>}
            sub="No twenty-line service menu. These are the things we are genuinely best-in-class at — the rest we refer out."
            align="center"
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.n}>
                <div className="svc-tile h-full">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[rgba(59,43,255,.08)] text-[var(--accent)]">
                      <s.icon size={19} />
                    </span>
                    <span className="svc-num">{s.n}</span>
                  </div>
                  <h3 className="display mt-6 text-xl">{s.t}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--muted)]">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* studio */}
      <section id="studio" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <div className="reel-card">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Northlight team in a working session"
                loading="lazy"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>
          </Reveal>
          <div>
            <SectionHead
              eyebrow="The studio"
              title={
                <span className="display">
                  Small on purpose.
                  <br />
                  Senior by default.
                </span>
              }
              sub="No account managers between you and the people doing the work. The person who pitches your project is the person who designs it."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  "A maximum of twelve projects a year — your work never queues",
                  "Fixed scope, fixed fee, weekly demos from week one",
                  "Everything handed over: files, code, tokens, documentation",
                  "We say no to work we cannot make brilliant",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px]">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[rgba(59,43,255,.1)] text-[var(--accent)]">
                      <Check size={13} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Client words" title={<span className="display">Trusted with the important launches.</span>} align="center" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="quote-card flex h-full flex-col p-7">
                  <Stars />
                  <blockquote className="quote-big mt-5 flex-1">“{r.quote}”</blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-[var(--line)] pt-5">
                    <Avatar src={r.avatar} alt={r.name} size={40} />
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

      {/* awards + clients */}
      <section id="awards" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead eyebrow="Recognition" title={<span className="display">Kept the receipts.</span>} />
            <div className="mt-8">
              {awards.map((a, i) => (
                <Reveal key={a.name} delay={i * 0.04}>
                  <div className="award-row">
                    <span className="flex items-center gap-3">
                      <Sparkles size={14} className="text-[var(--accent)]" />
                      <span className="font-medium">{a.name}</span>
                    </span>
                    <span className="text-[12px] text-[var(--muted)]">
                      {a.org} · {a.year}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Clients" title={<span className="display">Brands we&apos;ve grown with.</span>} />
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)]">
              {clients.map((c) => (
                <div key={c} className="grid h-24 place-items-center bg-[var(--card)] px-4 text-center">
                  <span className="display text-lg text-[var(--muted)]">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="contact" className="scroll-mt-24 pb-24">
        <div className="wrap">
          <Reveal>
            <div className="cta-big px-8 py-14 text-center md:px-16 md:py-20">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] opacity-60">Two slots left for Q1 2027</p>
              <h2 className="mega mt-6 text-[clamp(2.4rem,5.6vw,4.8rem)]">
                Let&apos;s make something
                <br />
                people <span className="accent">remember.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed opacity-70">
                Tell us about the project — goals, deadline, budget range. You&apos;ll get a straight answer and a plan
                within two working days.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:studio@northlight.agency" className="btn bg-[var(--bg)] text-[var(--fg)]">
                  studio@northlight.agency
                  <ArrowUpRight />
                </a>
                <a href="#work" className="btn btn-ghost border-[rgba(244,242,238,.3)] text-[var(--bg)]">
                  Review our work first
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="An independent brand, web and product studio of nine people. Twelve projects a year, every one treated like our own launch."
        socials={["instagram", "dribbble", "behance", "linkedin"]}
        copyright="© 2026 Northlight Studio BV. All rights reserved."
        columns={[
          {
            title: "Studio",
            links: [
              { label: "Work", href: "#work" },
              { label: "Services", href: "#services" },
              { label: "About", href: "#studio" },
              { label: "Awards", href: "#awards" },
            ],
          },
          {
            title: "Services",
            links: [
              { label: "Brand identity", href: "#services" },
              { label: "Websites", href: "#services" },
              { label: "Product design", href: "#services" },
              { label: "Design systems", href: "#services" },
            ],
          },
          {
            title: "Say hello",
            links: [
              { label: "Start a project", href: "#contact" },
              { label: "Careers", href: "#" },
              { label: "Press kit", href: "#" },
              { label: "Newsletter", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
