"use client";

import { useState } from "react";
import {
  Aperture,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Camera,
  Check,
  Focus,
  Image as ImageIcon,
  Layers,
  MapPin,
  Palette,
  Send,
  Sparkles,
  Sun,
  Users,
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
      <span className="grid h-8 w-8 place-items-center rounded-[3px] border border-[var(--line)] text-[var(--accent)]">
        <Aperture size={15} />
      </span>
      <span className="display text-[21px] tracking-[0.02em]">Kugoo</span>
    </span>
  );
}

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Journal", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const FILTERS = ["All", "Weddings", "Editorial", "Product", "Portrait"] as const;

const SHOTS = [
  {
    cat: "Weddings",
    title: "Elena & Marek",
    place: "Lake Bled, Slovenia",
    span: "lg:col-span-7",
    tall: true,
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  },
  {
    cat: "Editorial",
    title: "Slow Wool, No. 4",
    place: "Kinfolk, Issue 41",
    span: "lg:col-span-5",
    tall: false,
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cat: "Product",
    title: "Ceramic Series",
    place: "Studio commission — Aesop",
    span: "lg:col-span-4",
    tall: false,
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Portrait",
    title: "Hands of the Archive",
    place: "Amsterdam, March",
    span: "lg:col-span-4",
    tall: false,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Editorial",
    title: "Salt Flats at Dawn",
    place: "Wanderer Magazine",
    span: "lg:col-span-4",
    tall: false,
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Weddings",
    title: "A garden, late light",
    place: "Provence, France",
    span: "lg:col-span-6",
    tall: true,
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    cat: "Product",
    title: "Brass & Linen",
    place: "Mollen Home, campaign",
    span: "lg:col-span-6",
    tall: false,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
];

const SERVICES = [
  {
    no: "01",
    name: "Weddings",
    desc: "Full-day documentary coverage, no posing queue, no shot list marathon. Two photographers, film and digital, gallery in three weeks.",
    price: "from €3,400",
  },
  {
    no: "02",
    name: "Brand & editorial",
    desc: "Campaigns, lookbooks and magazine features. Art direction, location scouting, retouch and print-ready delivery in one crew.",
    price: "from €2,100 / day",
  },
  {
    no: "03",
    name: "Product",
    desc: "Tabletop studio with controlled light, styling and macro. E-commerce sets at volume or hero imagery for launch.",
    price: "from €28 / frame",
  },
  {
    no: "04",
    name: "Portrait",
    desc: "Founder portraits, press kits and castings. Calm 90-minute session, five retouched selects, studio or your space.",
    price: "from €480",
  },
];

const INCLUDED = [
  { k: "Lead photographer", v: "Mira Kugoo" },
  { k: "Second unit", v: "On request" },
  { k: "Delivery window", v: "14–21 days" },
  { k: "Files", v: "RAW + print TIFF" },
  { k: "Licence", v: "Commercial, perpetual" },
];

const STATS = [
  { to: 12, suffix: "", label: "Years behind the lens" },
  { to: 480, suffix: "+", label: "Commissions shot" },
  { to: 26, suffix: "", label: "Countries travelled" },
  { to: 94, suffix: "%", label: "Clients who rebook" },
];

const QUOTES = [
  {
    text: "Mira disappeared into the day and came back with the parts we were too busy to notice. The gallery made my mother cry twice.",
    name: "Elena Perović",
    role: "Wedding, Lake Bled",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Four days of campaign shooting and not a single reshoot. The light work is on another level, and the retouch never looks plastic.",
    name: "Tomas Reiter",
    role: "Creative Director, Mollen",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Our product pages finally look like the objects feel in hand. Conversion on the brass series went up 31% in the first month.",
    name: "Amara Sowole",
    role: "Head of Brand, Aesop Home",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
];

const STEPS = [
  { n: "01", h: "A conversation, not a brief", p: "Thirty minutes on a call with you. What the day or the launch should feel like, what we must not miss, who will be in the room." },
  { n: "02", h: "Light plan", p: "You get a written plan: timeline, locations, best window for light at each site, backup route for rain. Nothing improvised on the day." },
  { n: "03", h: "The shoot", p: "We arrive early, shoot quietly, and keep a second card running. Nine hours on a wedding day without you ever managing us." },
  { n: "04", h: "Gallery & prints", p: "Contact sheet in 72 hours, full gallery in three weeks, hand-picked prints and a digital licence in the same delivery." },
];

const FAQS = [
  {
    q: "Do you travel outside Europe?",
    a: "Yes. Destinations up to three hours of flight are included in every quote. Longer trips add flights, accommodation and one travel day — it is always itemised before you commit.",
  },
  {
    q: "How do we pick the final images?",
    a: "You get a contact sheet of the full shoot within three days. You mark favourites (most couples choose 400–600), we retouch them, and you keep every frame from the day as well.",
  },
  {
    q: "Can you shoot film as well as digital?",
    a: "Both. Medium-format film for portraits and detail, digital for the fast moments. Film scans are developed in-house and colour-matched to the digital set.",
  },
  {
    q: "What if it rains?",
    a: "Then we shoot in the rain — it is often better. Every location in your plan has a covered alternative within five minutes, and we carry lighting for it.",
  },
];

const LOGOS = ["Kinfolk", "Monocle", "Cereal", "Wanderer", "Aesop Home", "Mollen", "Vogue Living"];

export default function Home() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shots = filter === "All" ? SHOTS : SHOTS.filter((s) => s.cat === filter);

  return (
    <main id="top">
      <Navbar
        variant="center"
        brand={<Wordmark />}
        links={NAV}
        cta={{ label: "Book a shoot", href: "#contact" }}
      />

      <section className="relative">
        <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden md:h-[76vh]">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2000&q=80"
            alt="Photographer working in low light"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0dcc] to-[#0c0c0d33]" />
        </div>

        <div className="wrap absolute inset-x-0 bottom-0 pb-10 md:pb-16">
          <Reveal>
            <p className="kicker">Kugoo · Photography studio, since 2014</p>
            <h1 className="hero-title mt-6 max-w-[19ch]">
              Light, held <em>still</em> — weddings, brands, people.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary">
                View the work
                <ArrowRight />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Check availability
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="wrap mt-12">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: <Sun size={15} />, h: "Shoot days", p: "Natural light first, a small kit second. No crew of twelve." },
            { icon: <Focus size={15} />, h: "Delivery in 3 weeks", p: "Contact sheet in 72 hours, retouched gallery in 21 days." },
            { icon: <MapPin size={15} />, h: "Based in Rotterdam", p: "Travelling across Europe — destination fees included." },
          ].map((c) => (
            <Reveal key={c.h} delay={0.05}>
              <div className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[3px] border border-[var(--line)] text-[var(--accent)]">
                  {c.icon}
                </span>
                <div>
                  <h3 className="text-[14px] font-medium tracking-[0.02em]">{c.h}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">{c.p}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 border-y border-[var(--line)] py-6">
        <Marquee>
          <div className="flex items-center gap-14 pr-14">
            {LOGOS.map((l) => (
              <span key={l} className="display whitespace-nowrap text-[19px] tracking-[0.06em] text-[var(--muted)]">
                {l}
              </span>
            ))}
          </div>
        </Marquee>
      </section>

      <section id="work" className="wrap mt-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="Selected work"
            title={<>Frames that keep the day, not just the pose.</>}
            sub="Seven recent commissions, from a garden in Provence to a tabletop in our Rotterdam studio."
          />
          <Reveal delay={0.1}>
            <div className="filter-row lg:justify-end">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className="filter-btn"
                  data-active={filter === f}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {shots.map((s, i) => (
            <Reveal key={s.title} delay={0.04 * i} className={s.span}>
              <figure className={`frame group ${s.tall ? "h-[380px] md:h-[520px]" : "h-[330px] md:h-[400px]"}`}>
                <img src={s.img} alt={s.title} loading="lazy" />
                <figcaption>
                  <div>
                    <p className="font-medium tracking-[0.01em] text-[var(--fg)]">{s.title}</p>
                    <p className="mt-1 text-[11.5px] text-[var(--muted)]">{s.place}</p>
                  </div>
                  <span className="meta hidden sm:block">{s.cat}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-[12.5px] text-[var(--muted)]">
            {shots.length} of {SHOTS.length} pieces shown · full archive on request
          </p>
        </Reveal>
      </section>

      <section id="services" className="wrap mt-28">
        <SectionHead
          eyebrow="What we shoot"
          title="Four ways to work with the studio."
          sub="Every quote is fixed before we start. No hourly surprises, no licence fees discovered after delivery."
        />
        <div className="mt-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={0.04 * i}>
              <article className="svc">
                <p className="no">{s.no}</p>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <p className="price">{s.price}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="studio" className="wrap mt-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <figure className="frame h-[420px] md:h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1400&q=80"
                alt="Camera and lens on a studio table"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <div>
            <SectionHead
              eyebrow="The studio"
              title={<>One photographer, a darkroom, and a stubborn preference for real light.</>}
              sub="Mira Kugoo started shooting weddings for friends in 2014 and never stopped. The studio still develops its own film, still prints by hand, and still says no to jobs that need a factory rather than an eye."
            />
            <Stagger className="mt-8 space-y-4">
              {[
                { icon: <Camera size={15} />, t: "Medium format, plus a pocket camera" },
                { icon: <Palette size={15} />, t: "In-house colour grading and print" },
                { icon: <Layers size={15} />, t: "Second shooter for weddings over 120 guests" },
                { icon: <ImageIcon size={15} />, t: "Archive of 140,000 negatives and frames" },
              ].map((r) => (
                <StaggerItem key={r.t}>
                  <p className="flex items-center gap-3 text-[13.5px]">
                    <span className="text-[var(--accent)]">{r.icon}</span>
                    {r.t}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.15}>
              <div className="ledger mt-10">
                {INCLUDED.map((r) => (
                  <div key={r.k} className="ledger-row">
                    <span className="text-[var(--muted)]">{r.k}</span>
                    <span>{r.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wrap mt-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-y-10 border-y border-[var(--line)] py-12 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="stat-cell">
                <p className="stat-num">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="wrap mt-28">
        <SectionHead
          align="center"
          eyebrow="Kind words"
          title="What people say after the gallery lands."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={0.06 * i}>
              <figure className="quote-card h-full">
                <Sparkles size={16} className="text-[var(--accent)]" />
                <blockquote>{q.text}</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-2">
                  <Avatar src={q.img} alt={q.name} size={38} />
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

      <section id="process" className="wrap mt-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHead
            eyebrow="How it runs"
            title="Four steps from first email to printed album."
            sub="A steady process is what makes a relaxed shoot possible. You always know what happens next."
          />
          <div>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.05 * i}>
                <div className="step-line">
                  <p className="idx">{s.n}</p>
                  <div>
                    <h4>{s.h}</h4>
                    <p>{s.p}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap mt-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHead eyebrow="Questions" title="Before you write." />
          <Reveal delay={0.08}>
            <FAQ items={FAQS} />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="wrap mt-28">
        <Reveal>
          <div className="band-cta">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <div>
                <p className="kicker">2026 dates</p>
                <h2 className="display mt-5 text-[clamp(2rem,4vw,3.1rem)] leading-[1.03]">
                  Saturdays book out a year ahead. Tell us the date and we&apos;ll tell you honestly.
                </h2>
                <ul className="mt-8 space-y-3 text-[13.5px] text-[var(--muted)]">
                  <li className="flex items-center gap-3">
                    <Calendar size={15} className="text-[var(--accent)]" />
                    Currently booking May – October 2026
                  </li>
                  <li className="flex items-center gap-3">
                    <Users size={15} className="text-[var(--accent)]" />
                    Two weddings per month, kept deliberately small
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={15} className="text-[var(--accent)]" />
                    Quotes fixed in writing within 24 hours
                  </li>
                </ul>
              </div>

              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = e.currentTarget;
                  const note = f.querySelector<HTMLParagraphElement>("[data-note]");
                  if (note) note.textContent = "Thank you — we reply within one working day.";
                  f.reset();
                }}
              >
                {[
                  { id: "k-name", label: "Full name", type: "text", ph: "Elena Perović" },
                  { id: "k-mail", label: "Email", type: "email", ph: "you@example.com" },
                ].map((f) => (
                  <label key={f.id} htmlFor={f.id} className="block">
                    <span className="mb-2 block text-[10.5px] uppercase tracking-[0.2em] text-[var(--muted)]">{f.label}</span>
                    <input id={f.id} required type={f.type} placeholder={f.ph} className="field" />
                  </label>
                ))}
                <label htmlFor="k-date" className="block">
                  <span className="mb-2 block text-[10.5px] uppercase tracking-[0.2em] text-[var(--muted)]">Shoot date</span>
                  <input id="k-date" type="date" className="field" />
                </label>
                <label htmlFor="k-msg" className="block">
                  <span className="mb-2 block text-[10.5px] uppercase tracking-[0.2em] text-[var(--muted)]">Tell us about it</span>
                  <textarea id="k-msg" rows={3} placeholder="Location, rough guest count, what matters most." className="field" />
                </label>
                <button type="submit" className="btn btn-primary w-full">
                  Send enquiry
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
        blurb="Kugoo is a photography studio in Rotterdam shooting weddings, campaigns, product and portraits across Europe. Film and digital, one crew, no factory."
        socials={["instagram", "pinterest", "behance"]}
        copyright="© 2026 Kugoo Studio BV. All rights reserved."
        columns={[
          {
            title: "Studio",
            links: [
              { label: "Selected work", href: "#work" },
              { label: "Services", href: "#services" },
              { label: "About Mira", href: "#studio" },
              { label: "Print shop", href: "#" },
            ],
          },
          {
            title: "Booking",
            links: [
              { label: "Check a date", href: "#contact" },
              { label: "Wedding guide", href: "#" },
              { label: "Brand deck", href: "#" },
              { label: "Licence terms", href: "#" },
            ],
          },
          {
            title: "Elsewhere",
            links: [
              { label: "Journal", href: "#process" },
              { label: "Archive request", href: "#" },
              { label: "Workshops", href: "#" },
              { label: "hello@kugoo.studio", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
