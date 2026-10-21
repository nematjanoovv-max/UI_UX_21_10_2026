import { ArrowUpRight } from "lucide-react";
import { Footer, Navbar, Reveal, SectionHead, Stagger, StaggerItem } from "@/components/kit";

function Wordmark() {
  return (
    <span className="flex items-baseline gap-1">
      <span className="text-[15px] font-semibold uppercase tracking-[0.28em]">Atelier</span>
      <span className="text-[15px] font-semibold tracking-[0.28em] text-[var(--accent)]">IX</span>
    </span>
  );
}

const work = [
  { n: "01", title: "Vantage Fintech", tag: "Identity · Digital", year: "2026", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80" },
  { n: "02", title: "Kestrel Coffee Roasters", tag: "Packaging · Retail", year: "2026", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80" },
  { n: "03", title: "Museum of Coastal Life", tag: "Exhibition · Wayfinding", year: "2025", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80" },
  { n: "04", title: "Helio Health", tag: "Product · Design system", year: "2025", img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=600&q=80" },
  { n: "05", title: "Norr Furniture", tag: "Identity · Catalogue", year: "2024", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=600&q=80" },
  { n: "06", title: "Studio Praxis", tag: "Website · Art direction", year: "2024", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80" },
];

const services = [
  { t: "Brand", items: ["Positioning & narrative", "Naming", "Identity systems", "Guidelines & training", "Packaging"] },
  { t: "Digital", items: ["Websites (design + build)", "Product UI & UX", "Design systems", "Prototyping", "Motion"] },
  { t: "Spatial", items: ["Signage & wayfinding", "Exhibition design", "Retail concepts", "Interior styling", "Art direction"] },
];

const principles = [
  { n: "01", t: "Start with the sentence", d: "If the idea cannot be said in one sentence, it is not an idea yet. We spend the first week finding that sentence." },
  { n: "02", t: "Fewer, better decisions", d: "Twelve strong choices beat sixty safe ones. Every option we show you has a reason attached." },
  { n: "03", t: "Finish properly", d: "Files named, fonts licensed, systems documented. A handover day is part of the project, not an afterthought." },
];

const clients = ["Vantage", "Kestrel Coffee", "Helio Health", "Norr Furniture", "Museum of Coastal Life", "Praxis", "Valby Bryghus", "Orbital"];
const awards = ["D&AD Wood Pencil", "Type Directors Club", "Danish Design Award", "Awwwards SOTD ×3", "Red Dot: Brands"];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Studio open for two projects in 2027 · Copenhagen · working worldwide"
        links={[
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "Approach", href: "#approach" },
          { label: "Contact", href: "#contact" },
        ]}
        cta={{ label: "Enquire", href: "#contact" }}
      />

      <section className="pb-16 pt-14 md:pb-20">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--fg)] pb-4">
              <p className="meta-label">Design studio · est. 2016</p>
              <p className="meta-label">Copenhagen · 55.6761° N, 12.5683° E</p>
              <p className="meta-label hidden sm:block">Brand — Digital — Spatial</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="hero-title mt-12 max-w-5xl">
              We design the obvious,
              <br />
              <span className="red">beautifully.</span> Usually, it&apos;s
              <br />
              the hard part.
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-[1.2fr_.8fr]">
            <Reveal>
              <p className="max-w-xl text-[17px] leading-relaxed text-[var(--muted)]">
                Atelier Nine is a studio of six. We work on one brand, one product or one place at a time — close enough
                to the details to argue about kerning, far enough to see the whole picture.{" "}
                <span className="serif-it text-[19px] text-[var(--fg)]">Clients stay for years, not quarters.</span>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="meta-label">Currently</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    Booking two projects for Q1 2027. Typical engagement: 6–12 weeks.
                  </p>
                </div>
                <div>
                  <p className="meta-label">Selected for</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    Founders, museums and family businesses that plan in decades.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-14 grid gap-4 md:grid-cols-[1.5fr_1fr_1fr]">
              <figure>
                <div className="overflow-hidden border border-[var(--line)]">
                  <img
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
                    alt="Atelier Nine studio space"
                    className="h-[320px] w-full object-cover md:h-[420px]"
                  />
                </div>
                <figcaption className="img-cap">
                  <span>The studio, Refshaleøen</span>
                  <span>01 / 03</span>
                </figcaption>
              </figure>
              <figure>
                <div className="overflow-hidden border border-[var(--line)]">
                  <img
                    src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=800&q=80"
                    alt="Sketching and prototyping"
                    loading="lazy"
                    className="h-[320px] w-full object-cover md:h-[420px]"
                  />
                </div>
                <figcaption className="img-cap">
                  <span>Prototyping, week 3</span>
                  <span>02 / 03</span>
                </figcaption>
              </figure>
              <figure>
                <div className="overflow-hidden border border-[var(--line)]">
                  <img
                    src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
                    alt="Material studies"
                    loading="lazy"
                    className="h-[320px] w-full object-cover md:h-[420px]"
                  />
                </div>
                <figcaption className="img-cap">
                  <span>Material studies</span>
                  <span>03 / 03</span>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Selected work"
            title="Twelve projects a year. Here are six."
            sub="Full case studies available on request — we would rather talk you through the thinking than write it up for strangers."
          />

          <div className="mt-12">
            {work.map((w, i) => (
              <Reveal key={w.n} delay={i * 0.04}>
                <a href="#contact" className="work-row group">
                  <span className="work-num">{w.n}</span>
                  <span className="work-title">{w.title}</span>
                  <span className="work-tag">{w.tag}</span>
                  <span className="work-year flex items-center justify-between gap-3">
                    {w.year}
                    <ArrowUpRight size={16} className="opacity-0 transition group-hover:opacity-100" />
                  </span>
                  <img src={w.img} alt="" aria-hidden className="work-thumb" loading="lazy" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Services"
            title="Three disciplines, one team."
            sub="No account layer, no handoffs between studios. The people in the first meeting are the people who do the work."
          />
          <Stagger className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.t}>
                <div className="svc-col">
                  <h3>{s.t}</h3>
                  <ul className="mt-2">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Approach" title="Three rules we don't bend." />
          <Stagger className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map((p) => (
              <StaggerItem key={p.n}>
                <div className="border-t border-[var(--fg)] pt-6">
                  <p className="principle-num">{p.n}</p>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.t}</h3>
                  <p className="mt-2.5 max-w-xs text-[14px] leading-relaxed text-[var(--muted)]">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-20 grid items-center gap-10 border-t border-[var(--line)] pt-14 md:grid-cols-[1.4fr_.6fr]">
              <blockquote className="quote-xl">
                “They removed half of what we asked for, and the work got twice as good. That is the whole review.”
              </blockquote>
              <div>
                <p className="text-sm font-medium">Helena Brandt</p>
                <p className="mt-1 text-[13px] text-[var(--muted)]">Director, Museum of Coastal Life</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap grid gap-14 md:grid-cols-2">
          <div>
            <p className="meta-label">Clients</p>
            <ul className="list-plain mt-5">
              {clients.map((c) => (
                <li key={c}>
                  <span>{c}</span>
                  <span>Ongoing</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta-label">Recognition</p>
            <ul className="list-plain mt-5">
              {awards.map((a) => (
                <li key={a}>
                  <span>{a}</span>
                  <span>2019–2026</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-[var(--fg)] py-20 md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-[1.3fr_.7fr]">
          <Reveal>
            <p className="meta-label">New projects</p>
            <p className="contact-mega mt-5">
              Tell us what you&apos;re making.
              <br />
              <a href="mailto:studio@ateliernine.dk">studio@ateliernine.dk</a>
            </p>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-[var(--muted)]">
              Include the deadline and the budget range — that way our first reply is useful, not polite.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-6">
              <div>
                <p className="meta-label">Studio</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  Refshalevej 157A
                  <br />
                  1432 Copenhagen K, Denmark
                </p>
              </div>
              <div>
                <p className="meta-label">Elsewhere</p>
                <div className="mt-2 flex gap-5 text-sm">
                  <a href="#" className="hover:text-[var(--accent)]">Instagram</a>
                  <a href="#" className="hover:text-[var(--accent)]">LinkedIn</a>
                  <a href="#" className="hover:text-[var(--accent)]">Are.na</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="A studio of six in Copenhagen, working on brand, digital and spatial projects for people who plan in decades."
        socials={["instagram", "linkedin", "dribbble"]}
        newsletter={false}
        copyright="© 2026 Atelier Nine ApS. All rights reserved."
        columns={[
          {
            title: "Studio",
            links: [
              { label: "Work", href: "#work" },
              { label: "Services", href: "#services" },
              { label: "Approach", href: "#approach" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Disciplines",
            links: [
              { label: "Brand", href: "#services" },
              { label: "Digital", href: "#services" },
              { label: "Spatial", href: "#services" },
              { label: "Art direction", href: "#services" },
            ],
          },
          {
            title: "Practical",
            links: [
              { label: "Availability", href: "#contact" },
              { label: "Press kit", href: "#" },
              { label: "Journal", href: "#" },
              { label: "Imprint", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
