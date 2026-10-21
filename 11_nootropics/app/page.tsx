import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  Clock,
  FlaskConical,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import {
  Avatar,
  Counter,
  FAQ,
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
      <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-[var(--accent)] text-[var(--accent-fg)]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
          <path d="M12 4v16M5 8l14 8M19 8 5 16" />
        </svg>
      </span>
      <span className="display text-[19px]">Plato</span>
    </span>
  );
}

const ingredients = [
  { name: "Citicoline (Cognizin®)", amount: "500 mg", evidence: "RCT · Memory", support: 88, note: "Korea — supports acetylcholine and focus endurance" },
  { name: "Lion's mane 8:1", amount: "1,000 mg", evidence: "RCT · Cognition", support: 74, note: "Fruiting body only, no mycelium filler" },
  { name: "L-theanine", amount: "200 mg", evidence: "RCT · Calm focus", support: 91, note: "Green tea amino acid; pairs with caffeine" },
  { name: "Alpha-GPC 50%", amount: "300 mg", evidence: "Meta · Power output", support: 69, note: "Soy-free, sunflower-derived" },
  { name: "Bacopa (Bacognize®)", amount: "300 mg", evidence: "RCT · Recall", support: 77, note: "50% bacosides, standardised" },
  { name: "Vitamin B12 (methyl)", amount: "500 mcg", evidence: "Essential", support: 60, note: "Methylcobalamin, sublingual-grade" },
];

const results = [
  { fig: 32, suf: "%", label: "Improvement in sustained attention", sub: "8-week trial · n=128 · CogTrack battery" },
  { fig: 18, suf: "%", label: "Faster on working-memory tasks", sub: "Versus placebo arm, same period" },
  { fig: 94, suf: "%", label: "Reported zero afternoon jitters", sub: "Self-reported daily log, 1,842 users" },
];

const reviews = [
  {
    quote: "I write code for eight hours a day. This is the first stack where the last hour feels like the second one.",
    name: "Dev Anand Iyer",
    role: "Staff engineer · 14 months on Plato",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "No crash, no weird wired feeling. My patients ask what changed — I tell them to read the ingredient table.",
    name: "Dr. Lena Farrow",
    role: "Psychiatrist · Verified customer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "I have tried eleven nootropic blends. Ten of them hide doses behind a blend label. This one does not.",
    name: "Marco Bianchi",
    role: "PhD candidate · 8 months on Plato",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
];

const plans = [
  {
    name: "One bottle",
    price: 59,
    note: "30-day supply, no commitment",
    features: ["60 capsules", "Batch certificate included", "60-day refund, even if opened"],
  },
  {
    name: "Monthly",
    price: 49,
    note: "Billed monthly, cancel in two clicks",
    featured: true,
    features: ["30-day supply, free shipping", "Swap or pause any month", "Dose-check call with our lead formulator"],
  },
  {
    name: "Annual",
    price: 39,
    note: "Billed yearly — save 34%",
    features: ["12 bottles, shipped quarterly", "Free shipping worldwide", "Founder price locked for life"],
  },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Free shipping over $50 · 60-day guarantee · Batch certificates published for every run"
        links={[
          { label: "How it works", href: "#how" },
          { label: "Formula", href: "#formula" },
          { label: "Results", href: "#results" },
          { label: "FAQ", href: "#faq" },
        ]}
        cta={{ label: "Start now", href: "#plans" }}
      />

      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
          <div>
            <Reveal>
              <p className="micro">Nootropic stack · six ingredients · zero filler</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-5">
                Sharper hours.
                <br />
                <span className="mint">Not jitters.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Plato is a six-ingredient focus stack dosed at the levels used in published research. No proprietary
                blends, no mystery milligrams, no crash at 4pm. If an ingredient is in the capsule, its dose is on the
                label.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#plans" className="btn btn-primary">
                  Start your stack
                  <ArrowRight />
                </a>
                <a href="#formula" className="btn btn-ghost">
                  <FlaskConical size={15} /> See the formula
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                <span className="chip">
                  <strong>01</strong> Third-party tested per batch
                </span>
                <span className="chip">
                  <strong>02</strong> No proprietary blends
                </span>
                <span className="chip">
                  <strong>03</strong> Vegan · sugar-free
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-4 border-t border-[var(--line)] pt-6">
                <Stars />
                <p className="text-[12px] text-[var(--muted)]">
                  <span className="text-[var(--fg)]">4.8 / 5</span> from 1,842 verified customers
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={32}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="glass overflow-hidden p-3">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
                  alt="Plato capsules"
                  className="h-[380px] w-full rounded-[14px] object-cover md:h-[460px]"
                />
              </div>
              <div className="stat-chip absolute -left-3 top-8 hidden sm:block">
                <p className="micro">Focus score</p>
                <p className="display mt-1.5 text-2xl text-[var(--accent)]">+32%</p>
              </div>
              <div className="stat-chip absolute -bottom-6 right-2 hidden sm:block">
                <p className="micro">Trial participants</p>
                <p className="display mt-1.5 text-2xl">
                  <Counter to={1842} />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--line)] py-4">
        <Marquee>
          {[
            "Cognizin® 500 mg",
            "Lion's mane fruiting body",
            "L-theanine 200 mg",
            "Alpha-GPC 300 mg",
            "Bacognize® 300 mg",
            "Methyl-B12 500 mcg",
          ].map((t) => (
            <span key={t} className="micro px-8">
              {t} <span className="text-[var(--accent)]">·</span>
            </span>
          ))}
        </Marquee>
      </section>

      <section id="how" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="How it works"
            title={<span className="display">Built for the hours you actually work.</span>}
            sub="One stack, taken once. It is designed around a working day — not a lab bench."
          />
          <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                icon: Zap,
                t: "Take two capsules",
                d: "With breakfast, or 45 minutes before the work that needs you at your best. Not after 4pm unless you enjoy staring at the ceiling.",
              },
              {
                n: "02",
                icon: Clock,
                t: "Feel it hold for 6–8 hours",
                d: "L-theanine smooths the curve, citicoline sustains it. No spike, no cliff, no third cup of coffee negotiating on your behalf.",
              },
              {
                n: "03",
                icon: Brain,
                t: "Week 4 is the real test",
                d: "Bacopa and lion's mane build gradually. Track how you feel weekly in the app — most users report the shift at week three or four.",
              },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="step-card">
                  <p className="micro">Step {s.n}</p>
                  <span className="mt-5 grid h-12 w-12 place-items-center rounded-[14px] bg-[rgba(46,230,197,.1)] text-[var(--accent)]">
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

      <section id="formula" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="The formula"
              title={<span className="display">Every milligram, on the record.</span>}
              sub="Most brands hide behind the word “blend”. We publish each dose, its source and how strong the human evidence is."
            />
            <Reveal delay={0.1}>
              <a href="#results" className="btn btn-ghost">
                Read the study notes
                <ArrowUpRight />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="matrix mt-12">
              <div className="matrix-row head">
                <span className="micro">Ingredient</span>
                <span className="micro col-amount">Dose</span>
                <span className="micro col-evidence">Evidence</span>
                <span className="micro">Clinical support</span>
              </div>
              {ingredients.map((i) => (
                <div key={i.name} className="matrix-row">
                  <span>
                    <span className="block font-medium">{i.name}</span>
                    <span className="mt-1 block text-[12px] text-[var(--muted)]">{i.note}</span>
                  </span>
                  <span className="col-amount font-medium text-[var(--accent)]">{i.amount}</span>
                  <span className="col-evidence micro">{i.evidence}</span>
                  <span className="flex items-center gap-3">
                    <span className="matrix-bar flex-1">
                      <span style={{ width: `${i.support}%` }} />
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { icon: ShieldCheck, t: "Third-party tested", d: "Heavy metals, microbials, potency — tested on every batch, not once a year." },
                { icon: FlaskConical, t: "No proprietary blends", d: "Every dose printed on the label and in the table above. Nothing hidden behind a summary line." },
                { icon: RefreshCw, t: "Batch certificates", d: "Scan the code on your bottle and the exact lab report for that run opens." },
              ].map((b) => (
                <div key={b.t} className="glass p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-[12px] bg-[rgba(46,230,197,.1)] text-[var(--accent)]">
                    <b.icon size={18} />
                  </span>
                  <h3 className="display mt-4 text-lg">{b.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{b.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="results" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <div className="glow-card p-3">
              <img
                src="https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&w=1200&q=80"
                alt="Neuroscience research"
                loading="lazy"
                className="h-[400px] w-full rounded-[16px] object-cover md:h-[500px]"
              />
            </div>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="Results"
              title={<span className="display">Measured, not marketed.</span>}
              sub="Our 8-week study was run by an independent lab with 128 participants, a placebo arm and a published protocol. Here is what changed."
            />
            <div className="mt-9 space-y-8">
              {results.map((r, i) => (
                <Reveal key={r.label} delay={i * 0.06}>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="bar-fig">
                        <Counter to={r.fig} suffix={r.suf} />
                      </p>
                      <p className="micro text-right">{r.sub}</p>
                    </div>
                    <p className="mt-2 text-[14px]">{r.label}</p>
                    <div className="result-track">
                      <span style={{ width: `${Math.min(r.fig, 100)}%` }} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-8 flex items-start gap-3 border-t border-[var(--line)] pt-6 text-[12.5px] leading-relaxed text-[var(--muted)]">
                <Activity size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                Study notes, full protocol and raw anonymised data are available on request. Supplements support a
                healthy routine — they are not a treatment for any condition.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Reviews" title={<span className="display">1,842 verified customers.</span>} align="center" />
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

      <section id="plans" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Pricing"
            title={<span className="display">One product. Three ways to buy it.</span>}
            sub="No dozen-SKU menu, no upsells at checkout. Same stack every time — cheaper the longer you stay."
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <StaggerItem key={p.name}>
                <div className={`plan h-full ${p.featured ? "featured" : ""}`}>
                  {p.featured ? (
                    <span className="micro absolute -top-3 left-6 rounded-full border border-[rgba(46,230,197,.5)] bg-[var(--bg)] px-3 py-1 text-[var(--accent)]">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="display text-xl">{p.name}</h3>
                  <p className="plan-price mt-5">
                    ${p.price}
                    <span className="text-base font-normal text-[var(--muted)]">/mo</span>
                  </p>
                  <p className="mt-1.5 text-[12px] text-[var(--muted)]">{p.note}</p>
                  <ul className="tick-list mt-6 border-t border-[var(--line)] pt-5">
                    {p.features.map((f) => (
                      <li key={f}>
                        <Check size={14} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#plans" className={`btn mt-7 w-full ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                    Choose {p.name.toLowerCase()}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <Truck size={14} className="text-[var(--accent)]" /> Shipped in 2–4 days
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[var(--accent)]" /> 60-day refund, opened bottles included
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-[var(--accent)]" /> Cancel or swap in two clicks
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHead
            eyebrow="Questions"
            title={<span className="display">Straight answers, on the record.</span>}
            sub="Still curious? hello@synaptic.co reaches our lead formulator, not a script."
          />
          <Reveal delay={0.1}>
            <FAQ
              items={[
                {
                  q: "Will this keep me awake at night?",
                  a: "The stack is designed to taper, not spike. Take it before 2pm and most people sleep normally; if you are sensitive to stimulation, start with one capsule for the first week.",
                },
                {
                  q: "Is it safe to combine with coffee?",
                  a: "Yes — L-theanine is specifically included to smooth caffeine's edge. Most customers keep their morning coffee and report a calmer, longer curve rather than the usual spike.",
                },
                {
                  q: "How is this different from other nootropic blends?",
                  a: "Two things: doses and disclosure. We use the amounts from human trials rather than sub-clinical sprinkle amounts, and we print every dose plus the batch certificate. Nothing hides behind a “proprietary blend” line.",
                },
                {
                  q: "What if it does not work for me?",
                  a: "Write to us within 60 days and we refund the order — opened bottles included. No forms, no retention calls, no arguments. Around 4% of customers do this, and they are welcome back any time.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <Reveal>
            <div className="glow-card grid items-center gap-10 p-9 md:grid-cols-[1.15fr_.85fr] md:p-14">
              <div>
                <p className="micro text-[var(--accent)]">Start today · cancel whenever</p>
                <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">
                  Your best hours are
                  <br />
                  already yours. Claim them.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  Two capsules with breakfast, six ingredients doing real work, and a lab report to prove it. That is
                  the entire pitch.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#plans" className="btn btn-primary">
                    Choose a plan
                    <ArrowUpRight />
                  </a>
                  <a href="#formula" className="btn btn-ghost">
                    <FlaskConical size={15} /> Inspect the formula
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[18px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80"
                  alt="Plato bottle"
                  loading="lazy"
                  className="h-64 w-full object-cover md:h-80"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="A six-ingredient nootropic stack dosed at study levels, tested every batch and published openly. Sharper hours, no jitters."
        socials={["x", "instagram", "youtube"]}
        copyright="© 2026 Plato Labs BV. All rights reserved."
        columns={[
          {
            title: "Product",
            links: [
              { label: "How it works", href: "#how" },
              { label: "The formula", href: "#formula" },
              { label: "Study results", href: "#results" },
              { label: "Pricing", href: "#plans" },
            ],
          },
          {
            title: "Trust",
            links: [
              { label: "Batch certificates", href: "#" },
              { label: "Testing standards", href: "#" },
              { label: "Refund policy", href: "#" },
              { label: "Study notes", href: "#results" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About us", href: "#" },
              { label: "Contact", href: "#faq" },
              { label: "Shipping", href: "#" },
              { label: "Privacy", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
