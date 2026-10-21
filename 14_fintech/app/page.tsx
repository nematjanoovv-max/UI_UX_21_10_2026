import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CreditCard,
  FileText,
  Globe,
  Landmark,
  Lock,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
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
      <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-[var(--accent)] text-[var(--accent-fg)]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden>
          <path d="M5 18V7M12 18v-8M19 18V4" />
        </svg>
      </span>
      <span className="display text-[18px]">Oneflow</span>
    </span>
  );
}

const features = [
  { icon: CreditCard, t: "Payments", d: "Cards, bank transfers, wallets and 40+ local methods through a single API and a single dashboard." },
  { icon: Wallet, t: "Payouts", d: "Pay sellers, drivers or affiliates on a schedule — or the moment a job completes. 42 currencies." },
  { icon: FileText, t: "Real ledger", d: "Double-entry accounting built in. Every payment, fee and refund lands in the right account, always." },
  { icon: Receipt, t: "Invoicing", d: "Send invoices, chase them politely and reconcile the payment automatically when it arrives." },
  { icon: RefreshCw, t: "Reconciliation", d: "Bank feeds matched against your ledger each morning. Month-end close in hours, not weeks." },
  { icon: ShieldCheck, t: "Risk & fraud", d: "Machine scoring tuned on your own data, with manual review queues your team actually likes using." },
];

const fees = [
  { k: "Card processing", us: "0.9% + 20¢", them: "2.9% + 30¢" },
  { k: "Local bank transfers", us: "0.25%", them: "1.4%" },
  { k: "Payouts", us: "Free, 42 currencies", them: "$1.50 each" },
  { k: "Chargeback handling", us: "$8 flat", them: "$25 + fees" },
  { k: "Platform fee", us: "None", them: "0.3% of volume" },
  { k: "Ledger & reporting", us: "Included", them: "$99/mo add-on" },
];

const plans = [
  {
    name: "Starter",
    price: "0.9%",
    note: "+ 20¢ per transaction",
    features: ["No monthly fee up to $50k volume", "Core payments and payouts", "Real ledger and statements", "Email support, 4-hour response"],
  },
  {
    name: "Growth",
    price: "0.7%",
    note: "+ 20¢ per transaction",
    featured: true,
    features: ["Everything in Starter", "Invoicing and dunning", "Fraud rules + manual review queue", "Priority support, 1-hour response", "Slack channel with our engineers"],
  },
  {
    name: "Scale",
    price: "Custom",
    note: "Volume from $5M / year",
    features: ["Everything in Growth", "Interchange-plus pricing", "Dedicated infrastructure and SLAs", "Named solutions engineer"],
  },
];

const secrets = [
  { icon: ShieldCheck, t: "SOC 2 Type II", d: "Audited annually, report available under NDA before you sign anything." },
  { icon: Lock, t: "PCI DSS Level 1", d: "Card data is tokenised — it never touches your servers, and we cannot read it either." },
  { icon: Globe, t: "99.99% uptime", d: "Multi-region failover with a public status page and honest incident write-ups." },
  { icon: Landmark, t: "Funds segregated", d: "Customer money is held at tier-1 banks, ring-fenced from our own working capital." },
];

const reviews = [
  {
    quote: "We closed our previous month in nine hours. It used to take two people and eleven days of spreadsheet archaeology.",
    name: "Anneke Visser",
    role: "CFO, Vela Marketplace",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "Switching processors took a weekend. The ledger import matched 99.4% of our history on the first run, which honestly surprised everyone.",
    name: "Rahul Sethi",
    role: "Head of Engineering, Kestrel Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "Paying 4,000 drivers every Friday used to be our worst day of the week. Now it is a cron job nobody talks about.",
    name: "Marta Kowalczyk",
    role: "Ops Director, CityFleet",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

const clients = ["Vela Marketplace", "Kestrel Logistics", "CityFleet", "Northbeam", "Orbital Pay", "Atlas Foods", "Meridian", "Tavola"];

export default function Home() {
  return (
    <main id="top" className="relative">
      <Navbar
        brand={<Wordmark />}
        note="No monthly fee for the first $50k processed · SOC 2 Type II · Live in 42 currencies"
        links={[
          { label: "Product", href: "#product" },
          { label: "Fees", href: "#fees" },
          { label: "Security", href: "#security" },
          { label: "Pricing", href: "#pricing" },
        ]}
        cta={{ label: "Open an account", href: "#cta" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="grid-lines" aria-hidden />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Reveal>
              <span className="chip">
                <span className="dot" /> Accepting new accounts · onboarding in 3 days
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-7">
                Payments that close
                <br />
                the books <span className="blue">by Monday.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Oneflow is payment infrastructure for teams that outgrew spreadsheets: processing, payouts, invoicing
                and a genuine double-entry ledger in one place. Your finance team stops reconciling by hand, forever.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#cta" className="btn btn-primary">
                  Start integrating
                  <ArrowRight />
                </a>
                <a href="#fees" className="btn btn-ghost">
                  <BarChart3 size={15} /> Compare our fees
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--line)] pt-7">
                {[
                  { v: 4.2, suf: "B", l: "Processed annually", dec: 1 },
                  { v: 42, suf: "", l: "Currencies", dec: 0 },
                  { v: 99.99, suf: "%", l: "Uptime, 12 months", dec: 2 },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="num text-[clamp(1.6rem,3vw,2.3rem)]">
                      <Counter to={s.v} suffix={s.suf} decimals={s.dec ?? 0} />
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* dashboard mock */}
          <Reveal delay={0.15} y={30}>
            <div className="relative">
              <div className="panel p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="micro">Net volume today</p>
                    <p className="num mt-1.5 text-3xl">$182,400.22</p>
                  </div>
                  <span className="rounded-full bg-[rgba(14,143,125,.1)] px-3 py-1.5 text-[11px] font-semibold text-[#0e8f7d]">
                    +18.4% vs last Tue
                  </span>
                </div>
                <div className="chart mt-6">
                  {[38, 52, 44, 66, 58, 74, 62, 88, 70, 96, 84, 100].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mt-6 space-y-3 border-t border-[var(--line)] pt-5">
                  {[
                    { l: "Card payments", v: "$128,904", s: "1,482 transactions" },
                    { l: "Local transfers", v: "$41,220", s: "388 transactions" },
                    { l: "Payouts queued", v: "$96,310", s: "runs 17:00 UTC" },
                  ].map((row) => (
                    <div key={row.l} className="flex items-center justify-between text-[13px]">
                      <span className="text-[var(--muted)]">{row.l}</span>
                      <span className="text-right">
                        <span className="num block">{row.v}</span>
                        <span className="block text-[11px] text-[var(--muted)]">{row.s}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 rounded-xl bg-[rgba(236,47,116,.06)] px-4 py-3 text-[12px]">
                  <Check size={14} className="text-[var(--accent)]" />
                  <span>Reconciliation complete — 0 unmatched items, 2h 14m before close.</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-4 hidden w-[220px] rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-xl sm:block">
                <p className="micro">Fees saved this month</p>
                <p className="num mt-2 text-2xl text-[var(--accent)]">$8,412</p>
                <p className="mt-1 text-[11.5px] text-[var(--muted)]">versus our previous processor</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* clients */}
      <section className="band py-5">
        <div className="wrap flex flex-col gap-4 md:flex-row md:items-center">
          <p className="micro shrink-0">Trusted by finance teams at</p>
          <Marquee className="md:flex-1">
            {clients.map((c) => (
              <span key={c} className="display px-9 text-lg text-[var(--muted)]">
                {c}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* features */}
      <section id="product" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="The product"
            title={<span className="display">Six modules. One ledger underneath.</span>}
            sub="Most stacks bolt five vendors together and reconcile the gaps manually. Oneflow is one system, so the numbers agree by construction."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.t}>
                <div className="feat-tile h-full">
                  <span className="feat-ico">
                    <f.icon size={19} />
                  </span>
                  <h3 className="display mt-5 text-lg">{f.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{f.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* fees */}
      <section id="fees" className="scroll-mt-24 band py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHead
              eyebrow="Fees"
              title={<span className="display">The pricing page, in one table.</span>}
              sub="Our typical competitor is the stack you already have. Here is the same set of services, line by line."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] text-[var(--muted)]">
                <span className="flex items-center gap-2">
                  <Zap size={14} className="text-[var(--accent)]" /> No setup or migration fees
                </span>
                <span className="flex items-center gap-2">
                  <Users size={14} className="text-[var(--accent)]" /> Unlimited team seats
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="fee-table">
              <div className="fee-row head">
                <span className="micro">Service</span>
                <span className="micro">Oneflow</span>
                <span className="micro them">Typical stack</span>
              </div>
              {fees.map((f) => (
                <div key={f.k} className="fee-row">
                  <span>{f.k}</span>
                  <span className="us">{f.us}</span>
                  <span className="them text-[var(--muted)] line-through">{f.them}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* security */}
      <section id="security" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Security & compliance"
            title={<span className="display">Boring security is the feature.</span>}
            sub="We handle other people's money, so everything here is verifiable, audited and documented — not a badge wall."
            align="center"
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {secrets.map((s) => (
              <StaggerItem key={s.t}>
                <div className="secret-card h-full">
                  <span className="secret-ico">
                    <s.icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-semibold">{s.t}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--muted)]">{s.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <div className="panel mt-10 grid items-center gap-8 p-7 md:grid-cols-[1.1fr_.9fr] md:p-10">
              <div>
                <p className="micro">Migration promise</p>
                <h3 className="display mt-3 text-2xl">Move your history in one weekend.</h3>
                <p className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-[var(--muted)]">
                  Export from your current processor, drop the file in, and we map it to the ledger with a solutions
                  engineer on a shared call. If the import does not match to 99% of transactions, you do not pay for
                  the first quarter.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#cta" className="btn btn-primary">
                  Book a migration call
                  <ArrowUpRight />
                </a>
                <a href="#pricing" className="btn btn-ghost">
                  See pricing
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* reviews */}
      <section className="band py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Customers" title={<span className="display">Run by finance teams who count everything.</span>} align="center" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="quote-card flex h-full flex-col">
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

      {/* pricing */}
      <section id="pricing" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Pricing"
            title={<span className="display">Pay per transaction, not per seat.</span>}
            sub="No platform fee, no integration fee, no per-report invoice. The price on the site is the price on the invoice."
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <StaggerItem key={p.name}>
                <div className={`plan h-full ${p.featured ? "featured" : ""}`}>
                  {p.featured ? (
                    <span className="absolute -top-3 left-6 rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent-fg)]">
                      Most chosen
                    </span>
                  ) : null}
                  <h3 className="display text-xl">{p.name}</h3>
                  <p className="plan-price mt-5">{p.price}</p>
                  <p className="mt-1.5 text-[12.5px] text-[var(--muted)]">{p.note}</p>
                  <ul className="tick-list mt-6 border-t border-[var(--line)] pt-5">
                    {p.features.map((f) => (
                      <li key={f}>
                        <Check size={14} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#cta" className={`btn mt-7 w-full ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                    Choose {p.name}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* cta */}
      <section id="cta" className="scroll-mt-24 pb-24">
        <div className="wrap">
          <Reveal>
            <div className="cta-band grid items-center gap-10 p-9 md:grid-cols-[1.15fr_.85fr] md:p-14">
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-60">Sandbox in 15 minutes</p>
                <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">
                  Bring your volumes.
                  <br />
                  We&apos;ll bring the ledger.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">
                  Tell us your monthly volume and where you are today. You will get a fee comparison, a migration plan
                  and access to a sandbox — no sales sequence, no discovery call marathon.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:sales@ledgerline.io" className="btn bg-[var(--bg)] text-[var(--fg)]">
                    sales@ledgerline.io
                    <ArrowUpRight />
                  </a>
                  <a href="#product" className="btn btn-ghost border-[rgba(253,241,246,.3)] text-[var(--bg)]">
                    Read the docs first
                  </a>
                </div>
              </div>
              <div className="relative z-10 grid gap-3">
                {[
                  { k: "Median integration time", v: "6 days" },
                  { k: "Migration matched", v: "99.4%" },
                  { k: "Support first response", v: "1 hour" },
                ].map((row) => (
                  <div key={row.k} className="flex items-center justify-between rounded-xl border border-[rgba(253,241,246,.16)] px-5 py-4">
                    <span className="text-[12.5px] opacity-70">{row.k}</span>
                    <span className="num text-lg">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="Payment infrastructure with a genuine double-entry ledger: processing, payouts, invoicing and reconciliation in one system."
        socials={["linkedin", "x", "youtube"]}
        copyright="© 2026 Oneflow Technologies Ltd. All rights reserved."
        columns={[
          {
            title: "Product",
            links: [
              { label: "Payments", href: "#product" },
              { label: "Payouts", href: "#product" },
              { label: "Ledger", href: "#product" },
              { label: "Invoicing", href: "#product" },
            ],
          },
          {
            title: "Developers",
            links: [
              { label: "API reference", href: "#" },
              { label: "Sandbox", href: "#cta" },
              { label: "Status page", href: "#" },
              { label: "Changelog", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "Fees", href: "#fees" },
              { label: "Pricing", href: "#pricing" },
              { label: "Security", href: "#security" },
              { label: "Contact", href: "#cta" },
            ],
          },
        ]}
      />
    </main>
  );
}
