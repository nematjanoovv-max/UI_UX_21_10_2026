"use client";

import {
  Activity,
  Apple,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Dumbbell,
  Flame,
  Heart,
  MapPin,
  Moon,
  Send,
  Sparkles,
  Timer,
  Trophy,
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
      <span className="grid h-9 w-9 place-items-center rounded-[14px] bg-[var(--accent)] text-[var(--accent-fg)]">
        <Dumbbell size={16} />
      </span>
      <span className="display text-[22px]">Gummi</span>
    </span>
  );
}

const NAV = [
  { label: "Classes", href: "#classes" },
  { label: "Timetable", href: "#timetable" },
  { label: "App", href: "#app" },
  { label: "Membership", href: "#membership" },
  { label: "Coaches", href: "#coaches" },
];

const CLASSES = [
  { icon: <Dumbbell size={17} />, h: "Strength", p: "Barbell fundamentals with a coach who fixes your setup before adding weight. Six people per platform.", tags: ["45 min", "All levels"], acid: false },
  { icon: <Flame size={17} />, h: "HIIT Sweat", p: "Intervals on rower, ski and sled. Loud music, no mirrors, twelve stations and a wipe-down towel.", tags: ["30 min", "Hard"], acid: true },
  { icon: <Moon size={17} />, h: "Yoga & Breath", p: "Slow flow with proper breath work at the end. Heated to 26°C, mats and blocks provided.", tags: ["60 min", "Calm"], acid: false },
  { icon: <Activity size={17} />, h: "Mobility", p: "Hips, shoulders and ankles — the boring work that keeps the other classes painless.", tags: ["40 min", "Easy"], acid: true },
  { icon: <Timer size={17} />, h: "Run Club", p: "Tuesday intervals on the track, Sunday long runs along the river. Pace groups from 4:30 to 7:00.", tags: ["Free", "Outdoors"], acid: false },
  { icon: <Heart size={17} />, h: "Recovery", p: "Sauna, cold plunge and guided stretching. Members can book 45-minute slots from the app.", tags: ["45 min", "Rest"], acid: true },
];

const SCHEDULE = [
  { day: "Mon", a: { h: "Strength", t: "06:30 · 12:15 · 19:00" }, b: { h: "HIIT Sweat", t: "07:30 · 18:00" }, c: { h: "Yoga & Breath", t: "20:15" }, hot: 1 },
  { day: "Tue", a: { h: "HIIT Sweat", t: "06:45 · 17:30" }, b: { h: "Run Club", t: "19:00 · track" }, c: { h: "Mobility", t: "12:30" }, hot: 1 },
  { day: "Wed", a: { h: "Strength", t: "06:30 · 19:00" }, b: { h: "Yoga & Breath", t: "08:00 · 20:15" }, c: { h: "Recovery", t: "18:00" }, hot: 2 },
  { day: "Thu", a: { h: "HIIT Sweat", t: "06:45 · 18:00" }, b: { h: "Mobility", t: "12:30 · 19:30" }, c: { h: "Run Club", t: "19:00 · track" }, hot: 1 },
  { day: "Fri", a: { h: "Strength", t: "06:30 · 17:45" }, b: { h: "HIIT Sweat", t: "12:00" }, c: { h: "Yoga & Breath", t: "19:15" }, hot: 0 },
  { day: "Sat", a: { h: "Strength", t: "09:00 · 10:30" }, b: { h: "HIIT Sweat", t: "11:00" }, c: { h: "Recovery", t: "12:30" }, hot: 2 },
];

const PLANS = [
  {
    name: "Studio",
    price: "€39",
    note: "per month · rolling",
    blurb: "One home studio, unlimited classes and the recovery room at off-peak hours.",
    features: ["1 studio of your choice", "Unlimited group classes", "App booking up to 14 days ahead", "Cancel anytime, no fee"],
    featured: false,
  },
  {
    name: "All-Access",
    price: "€59",
    note: "per month · rolling",
    blurb: "Every Gummi studio, recovery whenever you like, plus one coached session a month.",
    features: ["All 7 studios", "Recovery room, any hour", "1 coach session monthly", "Bring a friend on Sundays", "Free run club kit", "Pause for up to 3 months a year"],
    featured: true,
  },
  {
    name: "Coached",
    price: "€149",
    note: "per month · 3-month term",
    blurb: "Everything in All-Access plus weekly one-to-one programming and a check-in body scan.",
    features: ["All-Access included", "Weekly 1:1 session", "Personal programme in the app", "Monthly body scan", "Nutrition call each quarter"],
    featured: false,
  },
];

const COACHES = [
  { name: "Mira Halvarsson", role: "Strength & barbell", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
  { name: "Deniz Aydın", role: "HIIT & conditioning", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
  { name: "Noa Fernández", role: "Yoga & mobility", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
];

const STATS = [
  { to: 2900, dec: 0, suffix: "+", label: "Members training weekly" },
  { to: 240, dec: 0, suffix: "", label: "Classes every week" },
  { to: 7, dec: 0, suffix: "", label: "Studios across the city" },
  { to: 82, dec: 0, suffix: "%", label: "Still with us after a year" },
];

const QUOTES = [
  {
    text: "I have cancelled four gym memberships in my life. This is the first one where I actually show up — the timetable fits a shift worker and the coaches know my name.",
    name: "Iris Vermeer",
    role: "All-Access · 2 years",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "The strength class taught me to deadlift properly at 44 with a bad back. Zero injuries since, and I lift more than I did at 30.",
    name: "Ravi Menon",
    role: "Studio · 14 months",
    img: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Recovery room plus yoga is the only reason I survived marathon training. Booking takes ten seconds in the app.",
    name: "Sofia Lindqvist",
    role: "Coached · 8 months",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
];

const FAQS = [
  {
    q: "Is the 14-day trial really free?",
    a: "Yes — full access to every studio and class for 14 days, no card required to start. If you carry on, the first payment happens on day 15 and you can cancel in the app in two taps.",
  },
  {
    q: "I am a complete beginner. Which class first?",
    a: "Start with Strength Foundations or Mobility. Both assume nothing: your coach walks through every movement before any weight goes on the bar, and you can book the same slot for four weeks so the routine sticks.",
  },
  {
    q: "How far ahead can I book, and what if I miss a class?",
    a: "Unlimited members book 14 days ahead; Studio members 7. Cancel more than 4 hours before the start and nothing is charged. Miss without cancelling three times in a month and booking is paused for a week — that keeps the waitlists honest.",
  },
  {
    q: "Do you have showers and lockers?",
    a: "All seven studios have showers, towels, hair dryers and free lockers with digital locks. Bring shoes, we handle the rest.",
  },
];

const CITIES = ["Rotterdam Centrum", "Rotterdam Noord", "Delft", "Utrecht", "Den Haag", "Eindhoven", "Amsterdam West"];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        variant="pill"
        brand={<Wordmark />}
        note="14-day free trial · no card needed to start"
        links={NAV}
        cta={{ label: "Start free trial", href: "#membership" }}
      />

      {/* ------------------------------- hero ------------------------------- */}
      <section className="wrap mt-10 md:mt-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Reveal>
              <p className="kicker">240 classes a week · 7 studios</p>
              <h1 className="hero-title mt-7">
                The gym you
                <br />
                <span className="pop">actually</span> come back to.
              </h1>
              <p className="mt-7 max-w-lg text-[15.5px] leading-relaxed text-[var(--muted)]">
                Small classes, coaches who know your name, and a timetable built around real life. Strength, sweat, yoga,
                mobility and recovery — all under one membership.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#membership" className="btn btn-primary">
                  Start 14 days free
                  <ArrowRight />
                </a>
                <a href="#timetable" className="btn btn-ghost">
                  See this week&apos;s timetable
                </a>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12.5px] text-[var(--muted)]">
                <span className="flex items-center gap-2.5">
                  <Trophy size={15} className="text-[var(--accent)]" />
                  4.9 from 1,180 reviews
                </span>
                <span className="flex items-center gap-2.5">
                  <Users size={15} className="text-[var(--accent)]" />
                  Max 12 per class
                </span>
                <span className="flex items-center gap-2.5">
                  <Calendar size={15} className="text-[var(--accent)]" />
                  Cancel anytime
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <figure className="overflow-hidden rounded-[34px] border border-[var(--line)]" style={{ height: 480 }}>
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80"
                  alt="Gummi members in a strength class"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div
                className="blobby absolute -left-4 top-8 hidden w-[210px] p-4 sm:block"
                style={{ animation: "bob 7s ease-in-out infinite" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Next class</p>
                <p className="display mt-2 text-[17px]">Strength · 19:00</p>
                <p className="mt-1 text-[12px] text-[var(--muted)]">3 spots left · Centrum</p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[rgba(47,52,55,0.1)]">
                  <div className="h-full w-[75%] rounded-full bg-[var(--accent)]" />
                </div>
              </div>
              <div
                className="blobby absolute -right-3 bottom-10 hidden w-[196px] p-4 sm:block"
                style={{ animation: "bob 9s ease-in-out infinite reverse" }}
              >
                <div className="flex items-center gap-3">
                  <span className="ring">
                    <span>76%</span>
                  </span>
                  <div>
                    <p className="text-[12.5px] font-semibold">This week</p>
                    <p className="text-[11.5px] text-[var(--muted)]">4 of 5 sessions done</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ studios ----------------------------- */}
      <section className="mt-16 border-y border-[var(--line)] py-5">
        <Marquee>
          <div className="flex items-center gap-11 pr-11">
            {CITIES.map((c) => (
              <span key={c} className="flex items-center gap-3 whitespace-nowrap text-[12.5px] font-medium text-[var(--muted)]">
                <MapPin size={13} className="text-[var(--accent)]" />
                {c}
              </span>
            ))}
          </div>
        </Marquee>
      </section>

      {/* ------------------------------ classes ----------------------------- */}
      <section id="classes" className="wrap mt-24">
        <SectionHead
          eyebrow="Six ways to move"
          title="Pick a class. We handle the rest."
          sub="Every session is coached, capped at twelve people, and scaled up or down to whoever walks in."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((c) => (
            <StaggerItem key={c.h} className="h-full">
              <article className={`class-tile ${c.acid ? "acid" : ""}`}>
                <span className="ico">{c.icon}</span>
                <h3 className="text-[17px] font-bold tracking-[-0.01em]">{c.h}</h3>
                <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">{c.p}</p>
                <div className="meta mt-auto">
                  {c.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ----------------------------- timetable ---------------------------- */}
      <section id="timetable" className="wrap mt-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="This week"
            title="A timetable that fits a real week."
            sub="Early mornings, lunch slots and evenings — plus run club outdoors when the weather behaves."
          />
          <Reveal delay={0.08}>
            <a href="#membership" className="btn btn-ghost">
              Book from the app
              <ArrowUpRight />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="sched mt-10">
            <div className="sched-head">
              <span>Day</span>
              <span>Early</span>
              <span>Midday / evening</span>
              <span>Late</span>
            </div>
            {SCHEDULE.map((r) => (
              <div key={r.day} className="sched-row">
                <span className="day">{r.day}</span>
                <span className={`slot ${r.hot === 1 ? "hot" : ""}`}>
                  <b>{r.a.h}</b>
                  {r.a.t}
                </span>
                <span className={`slot ${r.hot === 2 ? "hot" : ""}`}>
                  <b>{r.b.h}</b>
                  {r.b.t}
                </span>
                <span className="slot">
                  <b>{r.c.h}</b>
                  {r.c.t}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* -------------------------------- app ------------------------------- */}
      <section id="app" className="wrap mt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHead
              eyebrow="The Gummi app"
              title="Book, track, and stop guessing."
              sub="Your plan, your streaks and your recovery slots in one place. It syncs with Apple Health, Google Fit and Strava."
            />
            <Stagger className="mt-9 space-y-5">
              {[
                { icon: <Calendar size={16} />, h: "Book 14 days ahead", p: "See exactly how many spots are left, join a waitlist, and get pinged the second one opens." },
                { icon: <Activity size={16} />, h: "Progress you can read", p: "Session history, personal bests and mobility scores — no vanity metrics, no leaderboards." },
                { icon: <Apple size={16} />, h: "Works with your watch", p: "Apple Health, Google Fit, Garmin and Strava sync both directions, automatically." },
              ].map((r) => (
                <StaggerItem key={r.h}>
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[16px] border border-[var(--line)] bg-[var(--card)] text-[var(--accent)]">
                      {r.icon}
                    </span>
                    <div>
                      <h4 className="text-[15px] font-semibold">{r.h}</h4>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--muted)]">{r.p}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.1}>
            <div className="phone">
              <div className="phone-screen">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Good morning</p>
                    <p className="display mt-1 text-[20px]">Your week</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)] text-white">
                    <Sparkles size={16} />
                  </span>
                </div>
                <div className="mt-5 space-y-2.5">
                  <div className="phone-row">
                    <span>
                      <b className="block text-[13px]">Strength</b>
                      <span className="text-[11.5px] text-[var(--muted)]">Mon 19:00 · Centrum</span>
                    </span>
                    <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-[11px] font-semibold text-white">Booked</span>
                  </div>
                  <div className="phone-row">
                    <span>
                      <b className="block text-[13px]">Run Club</b>
                      <span className="text-[11.5px] text-[var(--muted)]">Tue 19:00 · Track</span>
                    </span>
                    <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] font-semibold text-[var(--muted)]">Join</span>
                  </div>
                  <div className="phone-row">
                    <span>
                      <b className="block text-[13px]">Recovery</b>
                      <span className="text-[11.5px] text-[var(--muted)]">Sat 12:30 · Noord</span>
                    </span>
                    <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] font-semibold text-[var(--muted)]">Join</span>
                  </div>
                </div>
                <div className="mt-4 rounded-[18px] border border-[var(--line)] bg-white p-4">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Consistency</p>
                  <div className="mt-3 flex items-end gap-1.5">
                    {[40, 62, 48, 78, 92, 66, 84].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-t-[4px]"
                        style={{ height: h, background: i === 4 ? "var(--accent)" : "rgba(47,52,55,0.14)" }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-[11.5px] text-[var(--muted)]">7 sessions this month · best streak 11 weeks</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------- membership ---------------------------- */}
      <section id="membership" className="wrap mt-28">
        <SectionHead
          align="center"
          eyebrow="Membership"
          title="Three plans. No joining fee, ever."
          sub="Every membership includes towels, lockers, showers and the 14-day trial. Student and shift-worker rates available at reception."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={0.06 * i} className="h-full">
              <article className={`plan h-full ${p.featured ? "featured" : ""}`}>
                <div>
                  <h3 className="display text-[1.5rem]">{p.name}</h3>
                  <p className="mt-2 text-[13px] opacity-80">{p.blurb}</p>
                </div>
                <div>
                  <p className="plan-price">{p.price}</p>
                  <p className="plan-note mt-1.5">{p.note}</p>
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
                  {p.featured ? "Start free trial" : "Choose plan"}
                  <ArrowRight />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ coaches ----------------------------- */}
      <section id="coaches" className="wrap mt-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHead
            eyebrow="Coaches"
            title="Twenty-four coaches who correct, not shout."
            sub="Every coach holds a recognised certification and re-tests yearly. You will always see the same faces at your usual slots."
          />
          <Stagger className="space-y-4">
            {COACHES.map((c) => (
              <StaggerItem key={c.name}>
                <div className="coach-card">
                  <Avatar src={c.img} alt={c.name} size={56} />
                  <div>
                    <p className="text-[15px] font-semibold">{c.name}</p>
                    <p className="text-[12.5px] text-[var(--muted)]">{c.role}</p>
                  </div>
                  <span className="ml-auto rounded-full border border-[var(--line)] px-3 py-1.5 text-[11.5px] font-medium text-[var(--muted)]">
                    4.9 ★
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ------------------------------- stats ------------------------------ */}
      <section className="wrap mt-24">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div className="stat-blob">
                <p className="stat-num">
                  <Counter to={s.to} decimals={s.dec} suffix={s.suffix} />
                </p>
                <p className="stat-label">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --------------------------- testimonials --------------------------- */}
      <section className="wrap mt-28">
        <SectionHead eyebrow="Members" title="Why people stay past month three." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={0.06 * i} className="h-full">
              <figure className="quote">
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

      {/* -------------------------------- faq ------------------------------- */}
      <section className="wrap mt-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHead eyebrow="Questions" title="Everything before your first class." />
          <Reveal delay={0.08}>
            <FAQ items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ contact ----------------------------- */}
      <section id="contact" className="wrap mt-28">
        <Reveal>
          <div className="band">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="kicker">Two weeks free</p>
                <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.2rem)]">
                  Your first class is closer than you think.
                </h2>
                <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-[rgba(255,255,255,0.72)]">
                  Leave your email and we send a trial pass, the timetable for your nearest studio, and one honest tip about
                  which class to start with. No sales calls.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12.5px] text-[rgba(255,255,255,0.66)]">
                  <span className="flex items-center gap-2.5">
                    <Check size={15} className="text-[#ffb59a]" />
                    No card to start
                  </span>
                  <span className="flex items-center gap-2.5">
                    <Check size={15} className="text-[#ffb59a]" />
                    Cancel in two taps
                  </span>
                  <span className="flex items-center gap-2.5">
                    <Check size={15} className="text-[#ffb59a]" />
                    All 7 studios included
                  </span>
                </div>
              </div>

              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const note = e.currentTarget.querySelector<HTMLParagraphElement>("[data-note]");
                  if (note) note.textContent = "Check your inbox — your trial pass is on the way.";
                  e.currentTarget.reset();
                }}
              >
                <input required placeholder="Your name" aria-label="Your name" className="field" />
                <input required type="email" placeholder="you@example.com" aria-label="Email" className="field" />
                <label htmlFor="g-studio" className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.6)]">Nearest studio</span>
                  <select id="g-studio" className="field" defaultValue="Rotterdam Centrum">
                    {CITIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <button type="submit" className="btn btn-primary w-full">
                  Get my trial pass
                  <Send />
                </button>
                <p data-note className="text-[12px] text-[#ffb59a]" />
              </form>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="Gummi is a seven-studio gym group with 240 coached classes a week. Small groups, real coaches, and a recovery room you will actually use."
        socials={["instagram", "x", "youtube"]}
        copyright="© 2026 Gummi Fitness Group BV. All rights reserved."
        columns={[
          {
            title: "Train",
            links: [
              { label: "Classes", href: "#classes" },
              { label: "Timetable", href: "#timetable" },
              { label: "Coaches", href: "#coaches" },
              { label: "Run club", href: "#classes" },
            ],
          },
          {
            title: "Join",
            links: [
              { label: "Membership", href: "#membership" },
              { label: "Free trial", href: "#contact" },
              { label: "Student rate", href: "#membership" },
              { label: "Corporate plans", href: "#" },
            ],
          },
          {
            title: "Studios",
            links: [
              { label: "Rotterdam Centrum", href: "#" },
              { label: "Rotterdam Noord", href: "#" },
              { label: "Delft", href: "#" },
              { label: "All locations", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
