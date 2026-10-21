import { ArrowRight, ArrowUpRight, Bookmark, Clock, Compass, Mail, MapPin, Search } from "lucide-react";
import {
  Avatar,
  Footer,
  InlineNewsletter,
  Marquee,
  Navbar,
  Reveal,
  SectionHead,
  Stagger,
  StaggerItem,
} from "@/components/kit";

function Wordmark() {
  return (
    <span className="flex items-baseline gap-1.5">
      <span className="serif text-[24px] font-bold tracking-tight">Wanderfolk</span>
      <span className="mb-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
    </span>
  );
}

const categories = ["All stories", "Slow travel", "Food & markets", "Wild places", "City walks", "Rail journeys", "Field notes"];

const featured = {
  cat: "Long read · Greenland",
  title: "The last ferry to Kulusuk, and the twelve people who take it every week",
  excerpt:
    "There is no road to Kulusuk. You arrive by helicopter, by boat, or by being born there. For nine days I ate seal stew, learned to read the ice, and understood why nobody leaves.",
  author: "Mira Halvorsen",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  date: "Oct 14, 2026",
  read: "14 min read",
  img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
};

const stories = [
  {
    cat: "Rail journeys",
    title: "Night train to the Arctic: 27 hours, one window seat, zero regrets",
    author: "Tom Beck",
    read: "9 min",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "City walks",
    title: "Venice without the crowds: a route locals actually use in November",
    author: "Giulia Ferro",
    read: "7 min",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Food & markets",
    title: "We ate our way through seven market towns in Morocco for $11 a day",
    author: "Sofia Marchetti",
    read: "11 min",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Wild places",
    title: "Hiking the Carpathians in mud season — what nobody tells you",
    author: "Andrei Popa",
    read: "8 min",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Slow travel",
    title: "Six weeks, one suitcase, and the case for staying put in Lisbon",
    author: "Nadia Osei",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Field notes",
    title: "How to travel for a year without becoming insufferable about it",
    author: "Mira Halvorsen",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
  },
];

const ranked = [
  { n: "01", title: "The 9 best sleeper trains still running in Europe", tag: "Rail", read: "12 min", img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=400&q=80" },
  { n: "02", title: "Kashgar's Sunday market, while you still can", tag: "Markets", read: "15 min", img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=400&q=80" },
  { n: "03", title: "A beginner's guide to reading the weather in the Alps", tag: "Skills", read: "7 min", img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80" },
  { n: "04", title: "The quietest beach in Portugal is not where you think", tag: "Coast", read: "6 min", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
];

const contributors = [
  { name: "Mira Halvorsen", role: "Editor · Arctic & rail", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
  { name: "Tom Beck", role: "Contributor · Trains & cities", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
  { name: "Nadia Osei", role: "Contributor · Food & people", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="New issue every Sunday · The Sunday Dispatch — free, no spam, unsubscribe in one click"
        links={[
          { label: "Stories", href: "#stories" },
          { label: "Guides", href: "#guides" },
          { label: "Writers", href: "#writers" },
          { label: "About", href: "#about" },
        ]}
        cta={{ label: "Subscribe", href: "#newsletter" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="wrap">
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <Reveal>
                <p className="kicker">An independent travel magazine</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="hero-title mt-5">
                  Stories from the <em>slow lane.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                  No listicles. No “hidden gems”. Just long reads and field notes from writers who stay longer than a
                  weekend — and tell you the truth about it.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href="#stories" className="btn btn-primary">
                    Start reading
                    <ArrowRight />
                  </a>
                  <a href="#newsletter" className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent)]">
                    <Mail size={15} /> Get the Sunday Dispatch
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} y={30}>
              <div className="grid grid-cols-[1.4fr_1fr] gap-4">
                <div className="story overflow-hidden rounded-2xl border border-[var(--line)]">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80" alt="Greenland mountains" className="h-[300px] w-full object-cover md:h-[380px]" />
                </div>
                <div className="grid gap-4">
                  <div className="story overflow-hidden rounded-2xl border border-[var(--line)]">
                    <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=700&q=80" alt="Night train" className="h-[142px] w-full object-cover md:h-[182px]" loading="lazy" />
                  </div>
                  <div className="story overflow-hidden rounded-2xl border border-[var(--line)]">
                    <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=700&q=80" alt="Venice canal" className="h-[142px] w-full object-cover md:h-[182px]" loading="lazy" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* chips */}
          <Reveal delay={0.1}>
            <div className="chip-row no-scrollbar mt-12 border-y border-[var(--line)] py-4">
              {categories.map((c, i) => (
                <button key={c} className={`chip ${i === 0 ? "active" : ""}`}>
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* featured */}
      <section id="stories" className="scroll-mt-24 pb-20 md:pb-24">
        <div className="wrap">
          <Reveal>
            <article className="grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
              <a href="#" className="story relative block overflow-hidden rounded-3xl border border-[var(--line)]">
                <img src={featured.img} alt={featured.title} className="h-[340px] w-full object-cover md:h-[500px]" loading="lazy" />
                <span className="absolute left-5 top-5 rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)]">
                  Cover story
                </span>
              </a>
              <div>
                <p className="kicker">{featured.cat}</p>
                <h2 className="serif mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.08]">
                  <a href="#" className="title-link transition">{featured.title}</a>
                </h2>
                <p className="drop-cap mt-5 text-[15px] leading-relaxed text-[var(--muted)]">{featured.excerpt}</p>
                <div className="author-dot mt-7 border-t border-[var(--line)] pt-5">
                  <Avatar src={featured.avatar} alt={featured.author} size={38} />
                  <span className="font-medium text-[var(--fg)]">{featured.author}</span>
                  <span className="mx-1 h-1 w-1 rounded-full bg-[var(--muted)]" />
                  <span>{featured.date}</span>
                  <span className="ml-auto hidden items-center gap-1.5 sm:flex">
                    <Clock size={13} /> {featured.read}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* latest */}
      <section className="border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Just published"
              title="Fresh from the road."
              sub="Written slowly, edited properly. Every story is reported on the ground."
            />
            <Reveal delay={0.1}>
              <a href="#" className="btn btn-ghost">
                <Search size={15} /> Browse all stories
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((s) => (
              <StaggerItem key={s.title}>
                <article className="story group">
                  <a href="#" className="block overflow-hidden rounded-2xl border border-[var(--line)]">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-52 w-full object-cover" />
                  </a>
                  <div className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                    {s.cat}
                    <span className="h-px w-6 bg-current opacity-50" />
                    <span className="text-[var(--muted)]">{s.read}</span>
                  </div>
                  <h3 className="serif mt-3 text-[21px] font-semibold leading-snug">
                    <a href="#" className="title-link transition">{s.title}</a>
                  </h3>
                  <p className="mt-3 text-[13px] text-[var(--muted)]">By {s.author}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ranked guides */}
      <section id="guides" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionHead
                eyebrow="Most read this month"
                title={
                  <>
                    Guides people
                    <br />
                    actually finish.
                  </>
                }
                sub="Ranked by readers who reach the last paragraph — not by clicks."
              />
              <Reveal delay={0.12}>
                <div className="pull-quote mt-10 border-l-2 border-[var(--accent)] pl-6 text-[var(--muted)]">
                  “Wanderfolk is the only travel magazine where the packing list is the least interesting part.”
                  <p className="mt-4 text-[12px] not-italic tracking-[0.14em] text-[var(--fg)]">— The Local Review</p>
                </div>
              </Reveal>
            </div>

            <div>
              {ranked.map((r, i) => (
                <Reveal key={r.n} delay={i * 0.05}>
                  <a href="#" className="rank-row group">
                    <span className="rank-no">{r.n}</span>
                    <span className="overflow-hidden rounded-xl border border-[var(--line)]">
                      <img src={r.img} alt={r.title} loading="lazy" className="h-[52px] w-[84px] object-cover transition duration-700 group-hover:scale-110" />
                    </span>
                    <span>
                      <span className="block text-[15px] font-medium leading-snug transition group-hover:text-[var(--accent)]">{r.title}</span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">{r.tag}</span>
                    </span>
                    <span className="rank-read flex items-center gap-1.5 text-[12px] text-[var(--muted)]">
                      <Bookmark size={13} /> {r.read}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* marquee */}
      <section className="border-y border-[var(--line)] py-6">
        <Marquee reverse>
          {["Issued from 14 countries", "Written by locals", "Zero sponsored trips", "Reader-funded since 2019", "No clickbait, ever"].map((t) => (
            <span key={t} className="serif px-10 text-lg italic text-[var(--muted)]">
              {t} ·
            </span>
          ))}
        </Marquee>
      </section>

      {/* writers */}
      <section id="writers" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="The masthead"
            title="Writers you can actually trust."
            sub="Fourteen contributors, one rule: if you haven't been there, you don't write about it."
            align="center"
          />
          <Stagger className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
            {contributors.map((c) => (
              <StaggerItem key={c.name}>
                <div className="cover-card rounded-2xl p-6 text-center">
                  <div className="mx-auto w-fit rounded-full border-2 border-[var(--accent)] p-0.5">
                    <Avatar src={c.avatar} alt={c.name} size={72} />
                  </div>
                  <p className="serif mt-4 text-lg font-semibold">{c.name}</p>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">{c.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* newsletter */}
      <section id="newsletter" className="scroll-mt-24 pb-24">
        <div className="wrap">
          <Reveal>
            <div className="newsletter-band grid items-center gap-10 p-9 md:grid-cols-[1.2fr_.8fr] md:p-14">
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-70">The Sunday Dispatch</p>
                <h2 className="serif mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.05]">
                  One story, one place,
                  <br />
                  every Sunday morning.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">
                  Our editor picks a single piece worth your coffee. 32,000 readers, zero noise.
                </p>
                <InlineNewsletter inverse label="Subscribe" className="mt-7 max-w-md" />
              </div>
              <div className="relative z-10 hidden md:block">
                <div className="rounded-2xl border border-[rgba(251,247,240,.2)] p-6">
                  <Compass size={22} className="text-[var(--accent)]" />
                  <p className="serif mt-4 text-xl italic">
                    “Read it before the map apps update. Wanderfolk is a decade ahead.”
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-[12px] opacity-70">
                    <MapPin size={13} className="text-[var(--accent)]" /> Tromsø, Norway
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand={<Wordmark />}
        blurb="An independent, reader-funded travel magazine. Long reads, honest guides and field notes from 14 countries."
        socials={["instagram", "x", "youtube"]}
        copyright="© 2026 Wanderfolk Media. All rights reserved."
        columns={[
          {
            title: "Read",
            links: [
              { label: "Cover story", href: "#stories" },
              { label: "Guides", href: "#guides" },
              { label: "Field notes", href: "#" },
              { label: "Archive", href: "#" },
            ],
          },
          {
            title: "The magazine",
            links: [
              { label: "About us", href: "#about" },
              { label: "Writers", href: "#writers" },
              { label: "Ethics policy", href: "#" },
              { label: "Write for us", href: "#" },
            ],
          },
          {
            title: "More",
            links: [
              { label: "Newsletter", href: "#newsletter" },
              { label: "Print issues", href: "#" },
              { label: "Podcast", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
