import {
  ArrowRight,
  ArrowUpRight,
  Backpack,
  Calendar,
  Check,
  Compass,
  Footprints,
  MapPin,
  Mountain,
  MountainSnow,
  ShieldCheck,
  Tent,
  Thermometer,
  Trophy,
  Users,
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
      <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[var(--accent)] text-[var(--accent-fg)]">
        <Mountain size={17} />
      </span>
      <span className="display text-[18px] tracking-tight">Night Trips</span>
    </span>
  );
}

function Difficulty({ level }: { level: number }) {
  return (
    <span className="diff" aria-label={`Difficulty ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <i key={i} className={i <= level ? "on" : ""} />
      ))}
    </span>
  );
}

const trips = [
  {
    name: "Patagonia — W Trek",
    region: "Chile",
    days: "8 days",
    level: 4,
    altitude: "1,200 m",
    price: "$2,450",
    next: "Departs Nov 14",
    flag: "4 spots left",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Dolomites — Via Ferrata",
    region: "Italy",
    days: "6 days",
    level: 3,
    altitude: "2,800 m",
    price: "$1,890",
    next: "Departs Feb 6",
    flag: "",
    img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Annapurna Base Camp",
    region: "Nepal",
    days: "14 days",
    level: 4,
    altitude: "4,130 m",
    price: "$2,980",
    next: "Departs Oct 3",
    flag: "Popular",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Toubkal Winter Ascent",
    region: "Morocco",
    days: "5 days",
    level: 3,
    altitude: "4,167 m",
    price: "$1,240",
    next: "Departs Jan 18",
    flag: "",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Glacier Traverse",
    region: "Iceland",
    days: "7 days",
    level: 4,
    altitude: "1,400 m",
    price: "$3,120",
    next: "Departs Mar 9",
    flag: "2 spots left",
    img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Cairngorm Winter Skills",
    region: "Scotland",
    days: "4 days",
    level: 2,
    altitude: "1,245 m",
    price: "$890",
    next: "Departs Dec 5",
    flag: "Beginner friendly",
    img: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&q=80",
  },
];

const features = [
  { icon: Users, t: "Twelve people, never more", d: "Small enough that the guide knows your pace by day two, and permits are simpler everywhere we go." },
  { icon: ShieldCheck, t: "Certified mountain guides", d: "Every lead guide holds an IFMGA or UIMLA card, plus wilderness first-response certification." },
  { icon: Thermometer, t: "Honest difficulty grades", d: "We grade like a guidebook, not a brochure. If a route needs fitness, we say so before you book." },
  { icon: Tent, t: "Kit that actually works", d: "Loan boots, crampons and sleeping systems are included — and checked before every departure." },
];

const guides = [
  {
    name: "Nuria Estève",
    role: "Lead guide · Pyrenees & Patagonia",
    bio: "IFMGA since 2011. Has walked the W Trek 46 times and still stops at the same lookout every single trip.",
    img: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tenzin Dorje",
    role: "Lead guide · Himalayas",
    bio: "Twenty seasons in the Annapurna region, fluent in four languages and unshakeable at altitude.",
    img: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Isaac Brandt",
    role: "Lead guide · Iceland & Norway",
    bio: "Glacier safety instructor and former rescue team leader. Makes crevasse rescue look like a morning stretch.",
    img: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=900&q=80",
  },
];

const itinerary = [
  { d: "Day 1", t: "Arrive Punta Arenas, gear check", km: "—" },
  { d: "Day 2", t: "Transfer to Torres del Paine, easy warm-up to Base Las Torres", km: "14 km" },
  { d: "Day 3", t: "Over the pass to Los Cuernos — the long, beautiful day", km: "19 km" },
  { d: "Day 4", t: "Rest day at Cuernos, optional short ridge walk", km: "6 km" },
  { d: "Day 5", t: "French Valley to Británico lookout", km: "17 km" },
  { d: "Day 6", t: "Grey Glacier, boat across the lake", km: "12 km" },
  { d: "Day 7", t: "Catamaran out, celebration dinner in Puerto Natales", km: "—" },
  { d: "Day 8", t: "Flights home, or onwards to El Calafate", km: "—" },
];

const departures = [
  { trip: "Patagonia — W Trek", date: "14 Nov 2026", alt: "1,200 m", spots: "4 left", few: true, price: "$2,450" },
  { trip: "Toubkal Winter Ascent", date: "18 Jan 2027", alt: "4,167 m", spots: "9 left", few: false, price: "$1,240" },
  { trip: "Dolomites — Via Ferrata", date: "6 Feb 2027", alt: "2,800 m", spots: "Waitlist", few: true, price: "$1,890" },
  { trip: "Glacier Traverse", date: "9 Mar 2027", alt: "1,400 m", spots: "2 left", few: true, price: "$3,120" },
  { trip: "Annapurna Base Camp", date: "3 Oct 2027", alt: "4,130 m", spots: "11 left", few: false, price: "$2,980" },
];

const reviews = [
  {
    quote: "I have done three of these trips now. The grading is dead honest — when they say hard, they mean hard, and you get there anyway.",
    name: "Jonas Weber",
    role: "Patagonia · Dolomites · Iceland",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "Twelve clients, one guide, and not once did I feel like a number on a clipboard. The food at camp was genuinely absurd.",
    name: "Priya Menon",
    role: "Annapurna Base Camp, 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "First multi-day trip of my life. They put me in the beginner group, taught me to use crampons properly and never once made me feel slow.",
    name: "Tom Reilly",
    role: "Cairngorm Winter Skills, 2025",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Next departures: Patagonia 14 Nov · Toubkal 18 Jan · Twelve-person groups, always"
        links={[
          { label: "Expeditions", href: "#trips" },
          { label: "Guides", href: "#guides" },
          { label: "Itinerary", href: "#itinerary" },
          { label: "Departures", href: "#departures" },
        ]}
        cta={{ label: "Book a trip", href: "#departures" }}
      />

      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Reveal>
              <p className="kicker">Guided expeditions · since 2009</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-6">
                Real routes.
                <br />
                Honest grades.
                <br />
                <span className="hot">Twelve people.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Night Trips runs multi-day expeditions to the places guides actually choose to walk. Small groups,
                certified leaders, and difficulty grades that match what your legs will feel — because you deserve to
                know before you book.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#trips" className="btn btn-primary">
                  Browse expeditions
                  <ArrowRight />
                </a>
                <a href="#itinerary" className="btn btn-ghost">
                  <Compass size={15} /> See a sample route
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-11 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--line)] pt-7">
                {[
                  { v: 46, suf: "", l: "Departures a year" },
                  { v: 17, suf: "", l: "Countries" },
                  { v: 96, suf: "%", l: "Return or recommend" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="stat-fig">
                      <Counter to={s.v} suffix={s.suf} />
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={32}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[28px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80"
                  alt="Night Trips group on a ridge at sunrise"
                  className="h-[420px] w-full object-cover md:h-[540px]"
                />
              </div>
              <div className="absolute -left-4 top-8 hidden rounded-2xl border border-[var(--line)] bg-[rgba(18,24,52,.9)] px-5 py-4 backdrop-blur sm:block">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                  <MapPin size={12} className="text-[var(--accent)]" /> Torres del Paine
                </p>
                <p className="display mt-2 text-lg">W Trek · 8 days</p>
              </div>
              <div className="absolute -bottom-6 right-2 hidden items-center gap-3 rounded-2xl border border-[var(--line)] bg-[rgba(18,24,52,.9)] px-5 py-4 backdrop-blur sm:flex">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[rgba(91,140,255,.14)] text-[var(--accent)]">
                  <Trophy size={17} />
                </span>
                <div>
                  <p className="text-sm font-semibold">1,240 summits</p>
                  <p className="text-[11px] text-[var(--muted)]">with our groups since 2009</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--line)] py-4">
        <Marquee>
          {["Patagonia", "Dolomites", "Annapurna", "Toubkal", "Vatnajökull", "Cairngorms", "Lofoten", "Atlas Mountains"].map((t) => (
            <span key={t} className="display px-8 text-xl text-[var(--fg)]/85">
              {t} <span className="text-[var(--accent)]">·</span>
            </span>
          ))}
        </Marquee>
      </section>

      <section id="trips" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Expeditions"
              title={<span className="display">Six trips worth clearing your calendar for.</span>}
              sub="Each one has been run at least a dozen times, with the same guide team. No first-time routes sold as adventures."
            />
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {["All trips", "Alpine", "Trekking", "Winter skills"].map((c, i) => (
                  <button key={c} className={`chip ${i === 0 ? "active" : ""}`} type="button">
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trips.map((t) => (
              <StaggerItem key={t.name}>
                <article className="trip-card h-full">
                  <div className="trip-img">
                    <img src={t.img} alt={t.name} loading="lazy" className="h-56 w-full object-cover" />
                    {t.flag ? <span className="trip-flag">{t.flag}</span> : null}
                  </div>
                  <div className="p-6">
                    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                      <MapPin size={12} className="text-[var(--accent)]" /> {t.region}
                    </p>
                    <h3 className="display mt-2.5 text-xl">{t.name}</h3>
                    <div className="trip-meta mt-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {t.days}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MountainSnow size={13} /> {t.altitude}
                      </span>
                      <Difficulty level={t.level} />
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-5">
                      <span>
                        <span className="display text-lg">{t.price}</span>
                        <span className="mt-0.5 block text-[11px] text-[var(--muted)]">{t.next}</span>
                      </span>
                      <a href="#departures" className="btn btn-primary !px-4 !py-2.5 text-[11px]">
                        Details
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="stat-band py-14">
        <div className="wrap grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {[
            { v: 1240, suf: "+", l: "Summits with clients" },
            { v: 17, suf: "", l: "Countries on the roster" },
            { v: 34, suf: "", l: "Certified guides" },
            { v: 96, suf: "%", l: "Would book again" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.06}>
              <div>
                <p className="stat-fig">
                  <Counter to={s.v} suffix={s.suf} />
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Why Night Trips"
            title={<span className="display">The boring parts, done seriously.</span>}
            sub="Permits, kit checks, evacuation plans, weather calls. Adventure is the fun 10% — the other 90% is logistics you never see."
            align="center"
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <StaggerItem key={f.t}>
                <div className="feature-tile h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(91,140,255,.12)] text-[var(--accent)]">
                    <f.icon size={20} />
                  </span>
                  <h3 className="display mt-5 text-lg">{f.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{f.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="guides" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Your guides"
            title={<span className="display">The people you will actually follow.</span>}
            sub="Every expedition is led by one of our twelve lead guides — never by a freelancer booked the week before."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {guides.map((g) => (
              <StaggerItem key={g.name}>
                <article className="guide-card h-full">
                  <img src={g.img} alt={g.name} loading="lazy" className="h-72 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="display text-lg">{g.name}</h3>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{g.role}</p>
                    <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">{g.bio}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="itinerary" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead
              eyebrow="Sample itinerary"
              title={<span className="display">Eight days on the W Trek.</span>}
              sub="This is the real, minute-by-minute shape of the trip — including the rest day most operators skip and the boat day you will remember forever."
            />
            <div className="mt-9">
              {itinerary.map((d, i) => (
                <Reveal key={d.d} delay={i * 0.03}>
                  <div className="day-row">
                    <span className="day-no">{d.d}</span>
                    <span className="text-[14px] leading-snug">{d.t}</span>
                    <span className="day-km flex items-center gap-1.5 text-[12px] text-[var(--muted)]">
                      <Footprints size={13} /> {d.km}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] text-[var(--muted)]">
                <span className="flex items-center gap-2">
                  <Backpack size={14} className="text-[var(--accent)]" /> Kit list and boot fitting included
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[var(--accent)]" /> Satellite comms carried on every route
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={30}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[26px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                  alt="Torres del Paine at dawn"
                  loading="lazy"
                  className="h-[420px] w-full object-cover md:h-[560px]"
                />
              </div>
              <div className="mt-4 rounded-[20px] border border-[var(--line)] bg-[var(--card)] p-6">
                <p className="display text-lg">What&apos;s included</p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Certified lead guide and local support crew",
                    "All park permits, transfers and boat crossings",
                    "Camp kit, cooking and three meals a day",
                    "Loan boots, crampons and poles on request",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-[var(--muted)]">
                      <Check size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Trip reports" title={<span className="display">1,240 summits. Here are three.</span>} align="center" />
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

      <section id="departures" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Upcoming departures"
            title={<span className="display">Pick a date. We handle the rest.</span>}
            sub="Prices include permits, guides, camp kit and meals. Flights and insurance are the only things you book yourself."
          />

          <Reveal delay={0.1}>
            <div className="dep-table mt-12">
              <div className="dep-row head">
                <span>Expedition</span>
                <span className="dep-date">Date</span>
                <span className="dep-alt">Max altitude</span>
                <span>Availability</span>
                <span />
              </div>
              {departures.map((d) => (
                <div key={d.trip + d.date} className="dep-row">
                  <span className="font-medium">{d.trip}</span>
                  <span className="dep-date text-[var(--muted)]">{d.date}</span>
                  <span className="dep-alt text-[var(--muted)]">{d.alt}</span>
                  <span className={`spots ${d.few ? "few" : ""}`}>{d.spots}</span>
                  <span className="flex items-center gap-4">
                    <span className="font-semibold">{d.price}</span>
                    <a href="#join" className="btn btn-primary !px-4 !py-2 text-[11px]">
                      Book
                    </a>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-[12.5px] text-[var(--muted)]">
              Not sure which trip fits your fitness? Send us your last three hikes and we will tell you honestly —
              including when the answer is “train for a season first”.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="join" className="scroll-mt-24 pb-24">
        <div className="wrap">
          <Reveal>
            <div className="cta-panel grid items-center gap-10 p-9 md:grid-cols-[1.15fr_.85fr] md:p-14">
              <div>
                <p className="kicker">Twelve people per departure</p>
                <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">
                  Carry a heavier pack.
                  <br />
                  Come back lighter.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  Tell us the trip and the month. You will hear back within one working day with availability, a kit
                  list and an honest word about the fitness it takes.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:trips@ridgeline.travel" className="btn btn-primary">
                    trips@ridgeline.travel
                    <ArrowUpRight />
                  </a>
                  <a href="#trips" className="btn btn-ghost">
                    Compare expeditions
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[22px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"
                  alt="Camp under the stars"
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
        blurb="Small-group guided expeditions since 2009. Twelve people, certified lead guides, honest difficulty grades and logistics you never have to think about."
        socials={["instagram", "youtube", "facebook"]}
        copyright="© 2026 Night Trips Ltd. All rights reserved."
        columns={[
          {
            title: "Expeditions",
            links: [
              { label: "Patagonia — W Trek", href: "#trips" },
              { label: "Dolomites — Via Ferrata", href: "#trips" },
              { label: "Annapurna Base Camp", href: "#trips" },
              { label: "Cairngorm Winter Skills", href: "#trips" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "Our guides", href: "#guides" },
              { label: "Why Night Trips", href: "#" },
              { label: "Safety & insurance", href: "#" },
              { label: "Sustainability", href: "#" },
            ],
          },
          {
            title: "Plan",
            links: [
              { label: "Departures", href: "#departures" },
              { label: "Sample itinerary", href: "#itinerary" },
              { label: "Kit & fitness", href: "#" },
              { label: "Contact", href: "#join" },
            ],
          },
        ]}
      />
    </main>
  );
}
