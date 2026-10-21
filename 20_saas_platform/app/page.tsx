"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Blocks,
  Check,
  Database,
  GitBranch,
  Globe,
  Layers,
  Lock,
  MessageSquare,
  Rocket,
  Send,
  Server,
  Settings,
  Shield,
  Sparkles,
  Terminal,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import {
  Avatar,
  Counter,
  FAQ,
  Footer,
  Navbar,
  Reveal,
  SectionHead,
  Stagger,
  StaggerItem,
} from "@/components/kit";

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#1c2a4a] text-[#7c9cff]">
        <Workflow size={16} />
      </span>
      <span className="display text-[20px]">Cascade</span>
    </span>
  );
}

const NAV = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
];

const TICKETS = {
  Now: [
    { t: "Release health dashboard", tag: "eng", badge: "blue" as const },
    { t: "SSO for enterprise tier", tag: "security", badge: "green" as const },
  ],
  "In review": [
    { t: "Feedback → roadmap sync", tag: "product", badge: "blue" as const },
    { t: "Slack digest v2", tag: "integrations", badge: "green" as const },
  ],
  Shipped: [
    { t: "EU data residency", tag: "infra", badge: "green" as const },
    { t: "GraphQL API v3", tag: "platform", badge: "blue" as const },
  ],
};

const FEATURES = [
  { icon: <Layers size={17} />, h: "One roadmap, every team", p: "Product, design and engineering plan on the same objects. No more pasting the same status into four documents." },
  { icon: <MessageSquare size={17} />, h: "Feedback that closes the loop", p: "Every customer request links to the ticket that shipped it, and the customer hears about it automatically." },
  { icon: <Rocket size={17} />, h: "Releases, not changelogs", p: "Ship notes generated from merged work, published to your own domain, with per-customer visibility rules." },
  { icon: <BarChart3 size={17} />, h: "Metrics with a spine", p: "Cycle time, review load and scope creep tracked per squad. Numbers you can defend, not dashboards nobody opens." },
  { icon: <Shield size={17} />, h: "Audit-ready by default", p: "Every field change is versioned with who, when and why. Export the whole history for SOC 2 or ISO reviews." },
  { icon: <Terminal size={17} />, h: "API and CLI first", p: "GraphQL API, a typed SDK, and a CLI that turns a branch into a linked ticket. If it exists in the UI, it exists in the API." },
];

const INTEGRATIONS = [
  { icon: <GitBranch size={16} />, h: "GitHub & GitLab", p: "Branches, PRs and deploys linked to tickets" },
  { icon: <MessageSquare size={16} />, h: "Slack & Teams", p: "Digests, approvals and one-click triage" },
  { icon: <Database size={16} />, h: "Snowflake & BigQuery", p: "Ship metrics next to product data" },
  { icon: <Bell size={16} />, h: "Zendesk & Intercom", p: "Support tickets become linked feedback" },
  { icon: <Server size={16} />, h: "Vercel & AWS", p: "Deploy events attached to releases" },
  { icon: <Blocks size={16} />, h: "Figma & Notion", p: "Embed the design in the spec itself" },
];

const STEPS = [
  { n: "01", h: "Import in an afternoon", p: "Bring Jira, Linear, Asana or a spreadsheet. Field mapping runs automatically and you approve the diff before anything moves." },
  { n: "02", h: "Set the ritual", p: "Choose how your team plans: weekly cycles, continuous flow, or quarterly bets. Cascade adapts the boards, not your process." },
  { n: "03", h: "Let the reports write themselves", p: "Standups fill from real activity. Status updates go out at 9 a.m. every Monday, drafted and ready for one click." },
];

const METRICS = [
  { k: "Cycle time", v: "2.4 days", d: "−41% after two quarters" },
  { k: "Meetings per squad", v: "3 / week", d: "down from 9" },
  { k: "Roadmap confidence", v: "87%", d: "self-reported, quarterly" },
  { k: "Release frequency", v: "11 / week", d: "median across customers" },
];

const PLANS = [
  {
    name: "Team",
    price: "€0",
    note: "free for 5 seats, forever",
    blurb: "For small product teams who want a sane board and a public changelog.",
    features: ["Up to 5 members", "Unlimited tickets", "Roadmap + releases", "GitHub & Slack", "Community support"],
    featured: false,
  },
  {
    name: "Growth",
    price: "€14",
    note: "per member / month, billed yearly",
    blurb: "The plan most teams move to once they pass ten people and two squads.",
    features: ["Unlimited members", "Feedback inbox + portal", "Cycle and delivery analytics", "All integrations", "SSO (SAML)", "Audit log, 12-month retention", "Priority support, 4 h response"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "annual agreement",
    blurb: "For regulated teams with their own hosting and procurement questions.",
    features: ["EU or US data residency", "Dedicated single-tenant option", "SCIM provisioning", "Unlimited audit retention", "Legal & security review pack", "Named success engineer"],
    featured: false,
  },
];

const QUOTES = [
  {
    text: "We cancelled the Monday status meeting nine months ago. Nobody has asked for it back, and roadmap slips are visible three weeks earlier than they used to be.",
    name: "Hanne Riis",
    role: "VP Product, Kade Digital",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "The audit log alone got us through ISO 27001 in a third of the usual time. Legal loved it, which is not a sentence I expected to write.",
    name: "Omar Haddad",
    role: "CTO, Saltire Freight",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Migration from our old tracker took four hours, including field mapping. We shipped a release the same afternoon.",
    name: "Lucia Marchetti",
    role: "Head of Engineering, Boreal",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
];

const FAQS = [
  {
    q: "How long does migration actually take?",
    a: "For teams under 50 people it is usually one afternoon. You import from Jira, Linear, Asana, Trello or CSV; Cascade maps fields, shows you a preview and only writes after you approve. Historical comments and attachments come across too.",
  },
  {
    q: "Where is our data stored?",
    a: "In the EU (Frankfurt and Amsterdam) by default, or in the US if you choose it at setup. Enterprise customers can pick a single-tenant deployment in their own region. Backups run every six hours with a 35-day point-in-time window.",
  },
  {
    q: "What happens if we stop paying?",
    a: "Your workspace becomes read-only for 60 days, and you can export everything — tickets, comments, attachments, audit log — as JSON or CSV at any point, on any plan. Nothing is held hostage.",
  },
  {
    q: "Do you have an SLA?",
    a: "Growth has a 4-hour first-response target during business hours. Enterprise adds a 99.95% uptime commitment, a 30-minute response on severity-one incidents and a shared incident channel.",
  },
];

const LOGOS = ["Kade Digital", "Saltire Freight", "Boreal", "Vermeer Labs", "Northgate", "Hansa Cloud", "Wexford Tech"];

export default function Home() {
  const [tab, setTab] = useState<"Now" | "In review" | "Shipped">("Now");

  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        links={NAV}
        cta={{ label: "Start free", href: "#pricing" }}
      />

      {/* ------------------------------- hero ------------------------------- */}
      <section className="wrap mt-14 md:mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="kicker">
              <span className="dot" />
              SOC 2 Type II · EU hosting · 4,200 teams shipping with us
            </p>
            <h1 className="hero-title mt-6 text-balance">
              Ship product work <span className="grad">without the status meeting</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-[var(--muted)]">
              Cascade puts roadmap, specs, releases and customer feedback in one workspace — then writes the updates for you.
              Free for five seats, honest pricing after that.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="#pricing" className="btn btn-primary">
                Start free — 5 seats
                <ArrowRight />
              </a>
              <a href="#product" className="btn btn-ghost">
                Take the 2-minute tour
              </a>
            </div>
            <p className="mt-4 text-[12px] text-[var(--muted)]">No card required · import from Jira or Linear in one afternoon</p>
          </Reveal>
        </div>

        {/* app mock */}
        <Reveal delay={0.12}>
          <div id="product" className="app mt-14">
            <div className="app-top">
              <span className="app-dot" />
              <span className="app-dot" />
              <span className="app-dot" />
              <span className="app-url">app.cascade.dev/kade-digital/board</span>
            </div>
            <div className="app-body">
              <aside className="app-side">
                {[
                  { icon: <Layers size={14} />, t: "Board", on: true },
                  { icon: <BarChart3 size={14} />, t: "Roadmap" },
                  { icon: <MessageSquare size={14} />, t: "Feedback" },
                  { icon: <Rocket size={14} />, t: "Releases" },
                  { icon: <Users size={14} />, t: "Teams" },
                  { icon: <Settings size={14} />, t: "Settings" },
                ].map((s) => (
                  <div key={s.t} className={`side-item ${s.on ? "on" : ""}`}>
                    {s.icon}
                    {s.t}
                  </div>
                ))}
                <div className="mt-4 rounded-[10px] border border-[var(--line)] p-3">
                  <p className="mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">Cycle 24</p>
                  <p className="mt-2 text-[12px] font-medium">Day 7 of 10</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[rgba(19,23,32,0.08)]">
                    <div className="h-full w-[70%] rounded-full bg-[var(--accent)]" />
                  </div>
                </div>
              </aside>

              <div>
                <div className="flex flex-wrap items-center gap-2 border-b border-[var(--line)] px-4 py-3">
                  {(["Now", "In review", "Shipped"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTab(t)}
                      aria-pressed={tab === t}
                      className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition ${
                        tab === t ? "bg-[rgba(60,91,214,0.1)] text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--fg)]"
                      }`}
                    >
                      {t} · {TICKETS[t].length}
                    </button>
                  ))}
                  <span className="mono ml-auto text-[10.5px] text-[var(--muted)]">auto-saved 2s ago</span>
                </div>

                <div className="kanban">
                  {[tab, "In review", "Shipped"].map((col) => (
                    <div key={col} className="kanban-col">
                      <p className="col-title">{col}</p>
                      {TICKETS[col as keyof typeof TICKETS].map((tk) => (
                        <div key={tk.t} className="ticket">
                          {tk.t}
                          <div className="tagline">
                            <span className={`badge ${tk.badge}`}>{tk.tag}</span>
                            <span className="badge">
                              <span className="mono">T-{Math.floor(tk.t.length * 37)}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-y border-[var(--line)] py-7">
            <p className="text-[12.5px] text-[var(--muted)]">Trusted by product teams at</p>
            <div className="logo-row">
              {LOGOS.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ----------------------------- features ----------------------------- */}
      <section id="features" className="wrap mt-28">
        <SectionHead
          align="center"
          eyebrow="Why teams switch"
          title="Everything in one place, nothing in a spreadsheet."
          sub="Cascade replaces the tracker, the roadmap doc, the release notes and the feedback inbox — without becoming an admin job of its own."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <StaggerItem key={f.h} className="h-full">
              <article className="feature">
                <span className="ico">{f.icon}</span>
                <h3 className="mt-5 text-[16px] font-semibold">{f.h}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--muted)]">{f.p}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* --------------------------- integrations --------------------------- */}
      <section id="integrations" className="wrap mt-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHead
            eyebrow="Integrations"
            title="Sits next to the tools you already pay for."
            sub="Two-way sync, scoped tokens and webhooks that survive a rate limit. Nothing here needs an engineer to babysit."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {INTEGRATIONS.map((i) => (
              <StaggerItem key={i.h}>
                <div className="integration">
                  <span className="mark">{i.icon}</span>
                  <div>
                    <p className="text-[14px] font-medium">{i.h}</p>
                    <p className="text-[12px] text-[var(--muted)]">{i.p}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ------------------------------- steps ------------------------------ */}
      <section className="wrap mt-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            eyebrow="Switching"
            title="Live in a day, not a quarter."
            sub="Most migrations finish before lunch. Our team reviews the import diff with you so nothing lands in the wrong project."
          />
          <div>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.05 * i}>
                <div className="flex gap-5 border-t border-[var(--line)] py-6">
                  <span className="mono pt-0.5 text-[12px] text-[var(--accent)]">{s.n}</span>
                  <div>
                    <h4 className="text-[15.5px] font-semibold">{s.h}</h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--muted)]">{s.p}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ metrics ----------------------------- */}
      <section className="wrap mt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Numbers</p>
              <h3 className="display mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)]">
                What changes after two quarters.
              </h3>
              <div className="mt-8">
                {METRICS.map((m) => (
                  <div key={m.k} className="metric-row">
                    <span className="text-[var(--muted)]">{m.k}</span>
                    <span className="metric-val">{m.v}</span>
                    <span className="mono hidden text-[11px] text-[var(--muted)] sm:block">{m.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { to: 4200, dec: 0, suffix: "", label: "Teams shipping on Cascade" },
                { to: 31, dec: 0, suffix: "%", label: "Median cycle-time reduction" },
                { to: 99.98, dec: 2, suffix: "%", label: "Uptime, last 12 months" },
                { to: 11, dec: 0, suffix: "min", label: "Median first support reply" },
              ].map((s) => (
                <div key={s.label} className="feature">
                  <p className="display text-[clamp(1.8rem,3.4vw,2.5rem)]">
                    <Counter to={s.to} decimals={s.dec} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-[12.5px] text-[var(--muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ pricing ----------------------------- */}
      <section id="pricing" className="wrap mt-28">
        <SectionHead
          align="center"
          eyebrow="Pricing"
          title="Priced per person, not per feature."
          sub="Every plan includes the API, the CLI and unlimited guests. Yearly billing saves two months."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={0.06 * i} className="h-full">
              <article className={`price-card h-full ${p.featured ? "featured" : ""}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="display text-[1.35rem]">{p.name}</h3>
                  {p.featured ? (
                    <span className="rounded-full bg-[rgba(60,91,214,0.1)] px-3 py-1 text-[11px] font-medium text-[var(--accent)]">
                      Most chosen
                    </span>
                  ) : null}
                </div>
                <p className="text-[13px] text-[var(--muted)]">{p.blurb}</p>
                <div>
                  <p className="price-amount">{p.price}</p>
                  <p className="price-note mt-1.5">{p.note}</p>
                </div>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="tick">
                      <Check size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`btn mt-auto ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                  {p.price === "Custom" ? "Talk to sales" : "Start free"}
                  <ArrowUpRight />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[12.5px] text-[var(--muted)]">
            Non-profit and open-source projects get Growth free — just ask. Students and educators too.
          </p>
        </Reveal>
      </section>

      {/* ---------------------------- testimonials -------------------------- */}
      <section id="customers" className="wrap mt-28">
        <SectionHead eyebrow="Customers" title="Teams who stopped writing status updates by hand." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={0.06 * i} className="h-full">
              <figure className="quote-card">
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <Sparkles size={15} />
                  <span className="mono text-[11px] uppercase tracking-[0.12em]">Verified customer</span>
                </div>
                <p className="text-[14px] leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <figcaption className="mt-auto flex items-center gap-3">
                  <Avatar src={q.img} alt={q.name} size={40} />
                  <div>
                    <p className="text-[13px] font-medium">{q.name}</p>
                    <p className="text-[11.5px] text-[var(--muted)]">{q.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------- security & faq --------------------------- */}
      <section className="wrap mt-28">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionHead
              eyebrow="Questions"
              title="The ones procurement always asks."
            />
            <Reveal delay={0.08}>
              <div className="mt-8 space-y-4">
                {[
                  { icon: <Lock size={15} />, t: "SOC 2 Type II, ISO 27001" },
                  { icon: <Globe size={15} />, t: "EU or US data residency" },
                  { icon: <Zap size={15} />, t: "99.98% uptime, last 12 months" },
                ].map((r) => (
                  <p key={r.t} className="flex items-center gap-3 text-[13.5px] text-[var(--muted)]">
                    <span className="text-[var(--accent)]">{r.icon}</span>
                    {r.t}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ cta/contact ------------------------- */}
      <section id="contact" className="wrap mt-28">
        <Reveal>
          <div className="band">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="eyebrow">Start today</p>
                <h2 className="display mt-5 text-[clamp(1.95rem,4vw,3rem)]">
                  Bring the board you have. Leave with one that runs itself.
                </h2>
                <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-[var(--muted)]">
                  Import your current tracker, invite your team and see the first auto-generated status update on Monday
                  morning. If it does not save that meeting, tell us and we will help you uninstall.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12.5px] text-[var(--muted)]">
                  <span className="flex items-center gap-2.5">
                    <Check size={15} className="text-[var(--accent)]" />
                    Free plan, 5 seats
                  </span>
                  <span className="flex items-center gap-2.5">
                    <Check size={15} className="text-[var(--accent)]" />
                    Migration call included
                  </span>
                  <span className="flex items-center gap-2.5">
                    <Check size={15} className="text-[var(--accent)]" />
                    Cancel in two clicks
                  </span>
                </div>
              </div>

              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const note = e.currentTarget.querySelector<HTMLParagraphElement>("[data-note]");
                  if (note) note.textContent = "Thanks — your workspace invite is on its way.";
                  e.currentTarget.reset();
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label htmlFor="c-name" className="block">
                    <span className="mono mb-2 block text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">Name</span>
                    <input id="c-name" required placeholder="Hanne Riis" className="field" />
                  </label>
                  <label htmlFor="c-mail" className="block">
                    <span className="mono mb-2 block text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">Work email</span>
                    <input id="c-mail" required type="email" placeholder="you@company.com" className="field" />
                  </label>
                </div>
                <label htmlFor="c-size" className="block">
                  <span className="mono mb-2 block text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">Team size</span>
                  <select id="c-size" className="field" defaultValue="11–50">
                    {["1–5", "6–10", "11–50", "51–200", "200+"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label htmlFor="c-tool" className="block">
                  <span className="mono mb-2 block text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">What do you use today?</span>
                  <input id="c-tool" placeholder="Jira, Linear, a spreadsheet…" className="field" />
                </label>
                <button type="submit" className="btn btn-primary w-full">
                  Create my workspace
                  <Send />
                </button>
                <p data-note className="text-[12px] text-[var(--accent)]" />
              </form>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="Cascade is the product workspace for teams who would rather ship than report. Roadmap, specs, releases and feedback — with the status updates written for you."
        socials={["linkedin", "x", "youtube"]}
        copyright="© 2026 Cascade Software BV. All rights reserved."
        columns={[
          {
            title: "Product",
            links: [
              { label: "Board", href: "#product" },
              { label: "Roadmap", href: "#features" },
              { label: "Releases", href: "#features" },
              { label: "Feedback inbox", href: "#features" },
            ],
          },
          {
            title: "Developers",
            links: [
              { label: "GraphQL API", href: "#" },
              { label: "CLI", href: "#" },
              { label: "Webhooks", href: "#" },
              { label: "Status page", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "Pricing", href: "#pricing" },
              { label: "Security", href: "#" },
              { label: "Customers", href: "#customers" },
              { label: "Careers", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
