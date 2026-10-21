"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  Cog,
  Fuel,
  Gauge,
  MapPin,
  Phone,
  Route,
  Send,
  ShieldCheck,
  Timer,
  Truck,
  Users,
  Wrench,
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
} from "@/components/kit";

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-[3px] bg-[var(--accent)] text-[var(--accent-fg)]">
        <Truck size={15} />
      </span>
      <span className="display text-[22px]">Northline</span>
    </span>
  );
}

const NAV = [
  { label: "Fleet", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Uptime", href: "#uptime" },
  { label: "Coverage", href: "#coverage" },
  { label: "Plans", href: "#plans" },
];

const SPECS = [
  { k: "Vehicles managed", to: 4100, dec: 0, suffix: "" },
  { k: "Fleet uptime", to: 98.6, dec: 1, suffix: "%" },
  { k: "Depots", to: 34, dec: 0, suffix: "" },
  { k: "Million km / year", to: 118, dec: 0, suffix: "" },
];

const VEHICLES = [
  {
    name: "Northline N7 Electric",
    type: "Rigid 7.5 t",
    tag: "Electric",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { k: "Payload", v: "2,950 kg" },
      { k: "Range", v: "310 km" },
      { k: "Charge 20→80%", v: "42 min" },
      { k: "Odometer cap", v: "180,000 km" },
    ],
    blurb: "Urban distribution with zero emissions, a 7.5 t gross weight and a cab that drivers stop complaining about.",
  },
  {
    name: "Northline H16",
    type: "Tractor unit",
    tag: "Diesel",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { k: "Gross train", v: "44 t" },
      { k: "Range", v: "1,450 km" },
      { k: "Tank", v: "1,200 L" },
      { k: "Odometer cap", v: "600,000 km" },
    ],
    blurb: "The long-haul workhorse. Averaged 3.1 L/100 km better than our 2019 baseline across 22 million km.",
  },
  {
    name: "Northline V3 City",
    type: "Panel van 3.5 t",
    tag: "Electric",
    img: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { k: "Payload", v: "1,180 kg" },
      { k: "Range", v: "265 km" },
      { k: "Charge 20→80%", v: "31 min" },
      { k: "Odometer cap", v: "140,000 km" },
    ],
    blurb: "Last-mile van with a walk-in load bay, telematics, and a charging report your finance team can actually read.",
  },
  {
    name: "Northline X9 Chassis",
    type: "Specialist build",
    tag: "Hybrid",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { k: "Payload", v: "5,400 kg" },
      { k: "Range", v: "620 km" },
      { k: "Body options", v: "12" },
      { k: "Odometer cap", v: "320,000 km" },
    ],
    blurb: "Chassis cab for cranes, tippers and refrigerated bodies. Built with your body builder, delivered inspected.",
  },
];

const SERVICES = [
  { icon: <Truck size={16} />, h: "Contract lease", p: "Fixed monthly cost covering vehicle, tyres, maintenance and replacement. Terms from 12 to 72 months." },
  { icon: <Route size={16} />, h: "Telematics", p: "Live position, driver scoring, fuel and charging data. One dashboard, API access, no per-seat fees." },
  { icon: <Wrench size={16} />, h: "In-house maintenance", p: "34 own workshops plus mobile vans. Book a slot from the dashboard and we come to your yard." },
  { icon: <ShieldCheck size={16} />, h: "Compliance", p: "Tachograph analysis, driver CPC records, roadworthiness and insurance paperwork kept audit-ready." },
  { icon: <BatteryCharging size={16} />, h: "Charging build-out", p: "Depot surveys, grid applications, hardware and load balancing. We take the wait off your desk." },
  { icon: <Users size={16} />, h: "Driver training", p: "Fuel-efficient driving, EV handling and load security. Average 8.4% consumption drop after the first course." },
];

const UPTIME = [
  { h: "Replacement in 4 hours", p: "Any vehicle off the road gets a like-for-like unit on site within four working hours, anywhere we operate." },
  { h: "Two-way roadside", p: "One number for everything. 71% of breakdowns finish at the roadside, so the load still arrives." },
  { h: "Predictive service", p: "Fault codes and mileage trigger the booking before a driver notices. 68% of our faults are caught off-shift." },
];

const DEPOTS = [
  { name: "Rotterdam — Waalhaven", region: "Core hub, 24/7" },
  { name: "Antwerp — Deurne", region: "Workshop + charging" },
  { name: "Hamburg — Billwerder", region: "Workshop + parts" },
  { name: "Lyon — Saint-Priest", region: "Workshop" },
  { name: "Poznań — Franowo", region: "Charging hub" },
  { name: "Leeds — Stourton", region: "Mobile vans" },
];

const PLANS = [
  {
    name: "Fleet 5",
    price: "€1,290",
    per: "/ vehicle / month",
    blurb: "For small operators replacing their first handful of vans.",
    features: ["Up to 5 vehicles", "Standard telematics", "Maintenance included", "48 h replacement SLA", "Monthly cost report"],
    featured: false,
  },
  {
    name: "Fleet 25",
    price: "€1,140",
    per: "/ vehicle / month",
    blurb: "Our most common agreement: growing regional fleets with mixed fuel types.",
    features: ["Up to 25 vehicles", "Full telematics + API", "In-house workshop priority", "4 h replacement SLA", "Charging survey included", "Dedicated account engineer"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "multi-site contracts",
    blurb: "For 100+ vehicles across borders with its own compliance burden.",
    features: ["Unlimited fleet size", "Cross-border compliance", "Depot charging build-out", "On-site mechanic option", "Quarterly board reporting", "Named 24/7 escalation line"],
    featured: false,
  },
];

const QUOTES = [
  {
    text: "We moved 210 vans off diesel in fourteen months. Northline handled the grid application, the chargers and the driver training — we only had to hand over the keys.",
    name: "Joost Beekman",
    role: "Fleet Director, Vermeer Logistics",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Downtime was the number we could never control. Now every off-road event has a clock on it and someone in Rotterdam who answers the phone at 3 a.m.",
    name: "Sandra Ilić",
    role: "Operations, Boreal Fresh",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "The telematics data cut idle time by 19% in the first quarter. That paid for the contract upgrade on its own.",
    name: "Marc Duval",
    role: "Head of Transport, Groupe Lamy",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

const FAQS = [
  {
    q: "How fast can a new contract start?",
    a: "Five-vehicle contracts go live in 10 working days: credit check, vehicle sourcing from our own stock, telematics fitting and delivery. Larger and multi-site orders are phased, usually 30 to 45 days for the first batch.",
  },
  {
    q: "What happens at the end of a lease?",
    a: "You return the vehicle at any of our 34 depots, or we collect it. Fair-wear standards are published in the contract, damage is assessed by photos both sides sign off, and any surplus mileage is charged at a rate fixed on day one.",
  },
  {
    q: "Do you lease electric only?",
    a: "No. Around 43% of our current fleet is electric, the rest is diesel and hybrid where range or payload demands it. Our engineers will tell you honestly which routes an EV will not handle yet.",
  },
  {
    q: "Can we use our own workshop?",
    a: "Yes. Maintenance can be excluded from the contract at a discount, and we still supply parts, telematics and compliance records. Your workshop keeps the relationship with your own mechanics.",
  },
];

const PARTNERS = ["Vermeer Logistics", "Boreal Fresh", "Groupe Lamy", "Kade Groep", "Saltire Freight", "Hansa Kühl", "Wexford Dairy"];

export default function Home() {
  const [active, setActive] = useState(0);
  const v = VEHICLES[active];

  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Fleet off the road? 24/7 control room — +31 20 555 0148"
        links={NAV}
        cta={{ label: "Request a quote", href: "#plans" }}
      />

      <section className="wrap mt-12 md:mt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="kicker">Fleet operations · Europe</p>
              <h1 className="hero-title mt-6">
                4,100 vehicles.
                <br />
                <span className="hot">Zero</span> lost days.
              </h1>
              <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Northline leases, tracks and maintains commercial fleets for 340 companies. One contract, one dashboard, one
                number to call when a truck stops on the A2 at midnight.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#plans" className="btn btn-primary">
                  Price my fleet
                  <ArrowRight />
                </a>
                <a href="#fleet" className="btn btn-ghost">
                  See the fleet
                </a>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12.5px] text-[var(--muted)]">
                <span className="flex items-center gap-2.5">
                  <Timer size={15} className="text-[var(--accent)]" />
                  4-hour replacement SLA
                </span>
                <span className="flex items-center gap-2.5">
                  <Phone size={15} className="text-[var(--accent)]" />
                  Human answer, 24/7
                </span>
                <span className="flex items-center gap-2.5">
                  <ShieldCheck size={15} className="text-[var(--accent)]" />
                  All-inclusive monthly rate
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="hero-visual h-[340px] md:h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80"
                alt="Northline haulage vehicle on the motorway"
              />
              <div className="absolute inset-x-4 bottom-4 z-10 flex flex-wrap items-center justify-between gap-3 rounded-[4px] border border-[var(--line)] bg-[rgba(255,255,255,0.92)] px-4 py-3 backdrop-blur-md">
                <p className="mono text-[11px] tracking-[0.1em] text-[var(--muted)]">NL-4417 / N7 ELECTRIC</p>
                <p className="mono flex items-center gap-2 text-[11px]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#48c78e]" />
                  ON ROUTE · ETA 18:42
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="spec-strip mt-14">
            {SPECS.map((s) => (
              <div key={s.k} className="spec-cell px-1 md:px-6">
                <p className="spec-k">{s.k}</p>
                <p className="spec-v">
                  <Counter to={s.to} decimals={s.dec ?? 0} suffix={s.suffix ?? ""} />
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-16 border-y border-[var(--line)] py-5">
        <Marquee>
          <div className="flex items-center gap-12 pr-12">
            {PARTNERS.map((p) => (
              <span key={p} className="mono whitespace-nowrap text-[12.5px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {p}
              </span>
            ))}
          </div>
        </Marquee>
      </section>

      <section id="fleet" className="wrap mt-24">
        <SectionHead
          eyebrow="The fleet"
          title="Four platforms, specced for real routes."
          sub="Pick the one that fits the work. We will tell you if it does not."
        />

        <Reveal delay={0.08}>
          <div className="no-scrollbar mt-10 flex gap-8 overflow-x-auto border-b border-[var(--line)]">
            {VEHICLES.map((item, i) => (
              <button
                key={item.name}
                type="button"
                className="fleet-tab"
                data-active={active === i}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal key={v.name}>
            <figure className="vehicle-card">
              <img src={v.img} alt={v.name} loading="lazy" />
              <figcaption className="body">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="mono rounded-[3px] border border-[var(--line)] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]">
                    {v.tag}
                  </span>
                  <span className="mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{v.type}</span>
                </div>
                <h3 className="display mt-4 text-[1.7rem]">{v.name}</h3>
                <div className="grid-spec">
                  {v.specs.map((s) => (
                    <div key={s.k}>
                      <p className="k">{s.k}</p>
                      <p className="v">{s.v}</p>
                    </div>
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal delay={0.06}>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">{v.blurb}</p>
            </Reveal>
            <Stagger className="mt-8 space-y-5">
              {[
                { icon: <Gauge size={16} />, h: "Delivered inspected", p: "Every unit arrives with a 140-point check, new tyres under 4 mm wear and photos in your dashboard." },
                { icon: <Fuel size={16} />, h: "Fuel or charge card", p: "One card for the whole fleet, itemised per vehicle and driver, reconciled monthly against telematics." },
                { icon: <Cog size={16} />, h: "Fitted your way", p: "Racking, tail lifts, refrigeration, livery wrap. Spec once, repeat on every replacement." },
              ].map((r) => (
                <StaggerItem key={r.h}>
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[4px] border border-[var(--line)] text-[var(--accent)]">
                      {r.icon}
                    </span>
                    <div>
                      <h4 className="text-[14.5px] font-medium">{r.h}</h4>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--muted)]">{r.p}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.12}>
              <a href="#plans" className="btn btn-ghost mt-9">
                Request this spec
                <ArrowUpRight />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="wrap mt-28">
        <SectionHead
          eyebrow="Inside the contract"
          title="Everything that keeps a vehicle earning."
          sub="Six services, priced into one monthly figure. Take the ones you need, leave the rest with your own team."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <StaggerItem key={s.h} className="h-full">
              <article className="svc-tile">
                <span className="ico">{s.icon}</span>
                <h3 className="mt-5 text-[16px] font-semibold">{s.h}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--muted)]">{s.p}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="uptime" className="wrap mt-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHead
              eyebrow="Uptime"
              title={<>A vehicle off the road is a customer not served.</>}
              sub="So we built the reporting first and the excuses never happened. Every fault, every driver, every hour is visible to you and to us."
            />
            <Stagger className="mt-9 space-y-6">
              {UPTIME.map((u) => (
                <StaggerItem key={u.h}>
                  <div className="border-l-2 border-[var(--accent)] pl-5">
                    <h4 className="text-[15px] font-semibold">{u.h}</h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--muted)]">{u.p}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.1}>
            <div className="dash">
              <div className="dash-head">
                <span className="flex items-center gap-2">
                  <Zap size={13} className="text-[var(--accent)]" />
                  Live fleet status
                </span>
                <span>v4.2 · 340 clients</span>
              </div>
              {[
                { id: "NL-4417", model: "N7 Electric", state: "ok", label: "On route" , extra: "18:42" },
                { id: "NL-2038", model: "V3 City", state: "ok", label: "Charging", extra: "84%" },
                { id: "NL-9902", model: "H16", state: "warn", label: "Service due", extra: "2,140 km" },
                { id: "NL-1180", model: "X9 Chassis", state: "ok", label: "In yard", extra: "Depot 04" },
                { id: "NL-7751", model: "V3 City", state: "warn", label: "Tyre wear", extra: "3.2 mm" },
                { id: "NL-3320", model: "H16", state: "ok", label: "On route", extra: "21:07" },
              ].map((r) => (
                <div key={r.id} className="dash-row">
                  <span className="mono">{r.id}</span>
                  <span className="hidden text-[var(--muted)] sm:block">{r.model}</span>
                  <span className="flex items-center justify-end gap-3">
                    <span className={r.state === "ok" ? "pill-ok" : "pill-warn"}>{r.label}</span>
                    <span className="mono hidden w-[74px] text-right text-[var(--muted)] md:inline">{r.extra}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="mono mt-4 text-[11px] tracking-[0.1em] text-[var(--muted)]">
              SAMPLE VIEW · REFRESHED EVERY 60 SECONDS
            </p>
          </Reveal>
        </div>
      </section>

      <section id="coverage" className="wrap mt-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            eyebrow="Coverage"
            title="34 depots. One number."
            sub="Where we have a depot, a mobile van reaches you within four working hours. Outside it, we agree the SLA in writing before you sign."
          />
          <Reveal delay={0.08}>
            <div>
              {DEPOTS.map((d) => (
                <div key={d.name} className="depot-row">
                  <span className="flex items-center gap-3">
                    <MapPin size={14} className="text-[var(--accent)]" />
                    {d.name}
                  </span>
                  <span className="m hidden sm:block">{d.region}</span>
                  <span className="mono text-[12px] text-[var(--muted)]">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              ))}
              <p className="mt-6 text-[13px] text-[var(--muted)]">
                Not on the list? Tell us where your lanes run — 11 of these depots opened because a customer asked the same question.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="plans" className="wrap mt-28">
        <SectionHead
          align="center"
          eyebrow="Contracts"
          title="Transparent monthly rates."
          sub="Illustrative pricing for a 48-month contract, 30,000 km per year, maintenance and telematics included."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={0.06 * i} className="h-full">
              <article className={`plan h-full ${p.featured ? "featured" : ""}`}>
                <div>
                  <h3 className="display text-[1.4rem]">{p.name}</h3>
                  <p className="mt-2 text-[13px] text-[var(--muted)]">{p.blurb}</p>
                </div>
                <div>
                  <p className="plan-price">{p.price}</p>
                  <p className="mono mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{p.per}</p>
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
                  {p.featured ? "Start a quote" : "Talk to sales"}
                  <ArrowRight />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap mt-28">
        <SectionHead eyebrow="Operators" title="Fleet managers who stopped firefighting." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={0.06 * i} className="h-full">
              <figure className="svc-tile flex h-full flex-col gap-6">
                <p className="text-[14px] leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <figcaption className="mt-auto flex items-center gap-3">
                  <Avatar src={q.img} alt={q.name} size={40} />
                  <div>
                    <p className="text-[13px] font-semibold">{q.name}</p>
                    <p className="text-[11.5px] text-[var(--muted)]">{q.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap mt-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHead eyebrow="Questions" title="Contracts, plainly explained." />
          <Reveal delay={0.08}>
            <FAQ items={FAQS} />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="wrap mt-28">
        <Reveal>
          <div className="band">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="kicker">Next step</p>
                <h2 className="display mt-5 text-[clamp(1.9rem,4vw,3rem)]">
                  Send us your routes and we&apos;ll price the fleet in 24 hours.
                </h2>
                <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-[var(--muted)]">
                  Tell us vehicle count, types, annual mileage and where they sleep at night. You get a written quote with the
                  replacement SLA included — no follow-up calls you did not ask for.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12.5px] text-[var(--muted)]">
                  <span className="flex items-center gap-2.5">
                    <Timer size={15} className="text-[var(--accent)]" />
                    Quote in 1 working day
                  </span>
                  <span className="flex items-center gap-2.5">
                    <Users size={15} className="text-[var(--accent)]" />
                    Named account engineer
                  </span>
                </div>
              </div>

              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const note = e.currentTarget.querySelector<HTMLParagraphElement>("[data-note]");
                  if (note) note.textContent = "Received — a fleet engineer replies within one working day.";
                  e.currentTarget.reset();
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label htmlFor="n-company" className="block">
                    <span className="mono mb-2 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Company</span>
                    <input id="n-company" required placeholder="Vermeer Logistics" className="field" />
                  </label>
                  <label htmlFor="n-email" className="block">
                    <span className="mono mb-2 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Work email</span>
                    <input id="n-email" required type="email" placeholder="you@company.com" className="field" />
                  </label>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label htmlFor="n-size" className="block">
                    <span className="mono mb-2 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Fleet size</span>
                    <select id="n-size" className="field" defaultValue="6–25">
                      {["1–5", "6–25", "26–100", "100+"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                  <label htmlFor="n-type" className="block">
                    <span className="mono mb-2 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Vehicle type</span>
                    <select id="n-type" className="field" defaultValue="Mixed">
                      {["Vans", "Rigid trucks", "Tractor units", "Mixed"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label htmlFor="n-msg" className="block">
                  <span className="mono mb-2 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Where do they run?</span>
                  <textarea id="n-msg" rows={3} placeholder="Routes, depots, annual mileage, current contract end date." className="field" />
                </label>
                <button type="submit" className="btn btn-primary w-full">
                  Request the quote
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
        blurb="Northline leases and maintains commercial fleets across Europe — 4,100 vehicles, 34 depots, one control room that answers at any hour."
        socials={["linkedin", "youtube", "x"]}
        copyright="© 2026 Northline Fleet Services BV. All rights reserved."
        columns={[
          {
            title: "Fleet",
            links: [
              { label: "N7 Electric", href: "#fleet" },
              { label: "H16 Tractor", href: "#fleet" },
              { label: "V3 City", href: "#fleet" },
              { label: "X9 Chassis", href: "#fleet" },
            ],
          },
          {
            title: "Services",
            links: [
              { label: "Lease", href: "#services" },
              { label: "Telematics", href: "#services" },
              { label: "Maintenance", href: "#services" },
              { label: "Compliance", href: "#services" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "Coverage", href: "#coverage" },
              { label: "Contracts", href: "#plans" },
              { label: "Control room", href: "#contact" },
              { label: "Careers", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
