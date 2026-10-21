import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Check,
  Code2,
  GraduationCap,
  Megaphone,
  Palette,
  Play,
  Sparkles,
  Target,
  Users,
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
  Stars,
} from "@/components/kit";

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#2a2d7c] text-[var(--accent)]">
        <GraduationCap size={17} />
      </span>
      <span className="display text-[18px]">Coursely</span>
    </span>
  );
}

const tracks = [
  {
    name: "Data Analytics",
    tag: "Most hired",
    level: "Beginner friendly",
    weeks: "12 weeks",
    projects: "6 projects",
    price: "$2,400",
    next: "Starts 4 Nov",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    icon: BarChart3,
  },
  {
    name: "Product Design",
    tag: "",
    level: "Beginner friendly",
    weeks: "12 weeks",
    projects: "5 projects",
    price: "$2,400",
    next: "Starts 4 Nov",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    icon: Palette,
  },
  {
    name: "Frontend Engineering",
    tag: "New cohort",
    level: "Some code helps",
    weeks: "14 weeks",
    projects: "7 projects",
    price: "$2,900",
    next: "Starts 18 Nov",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    icon: Code2,
  },
  {
    name: "Growth Marketing",
    tag: "",
    level: "Beginner friendly",
    weeks: "10 weeks",
    projects: "4 projects",
    price: "$2,100",
    next: "Starts 11 Nov",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    icon: Megaphone,
  },
];

const steps = [
  { n: "01", t: "Apply in 10 minutes", d: "No CV, no cover letter. Tell us what you want to build and how many hours a week you actually have." },
  { n: "02", t: "Onboard with your mentor", d: "A 45-minute call to set your target role, review your starting point and agree the portfolio you will finish with." },
  { n: "03", t: "Build in weekly sprints", d: "Live sessions twice a week, plus one graded project per fortnight. Your mentor reviews every submission personally." },
  { n: "04", t: "Graduate and get hired", d: "Portfolio review, interview practice and intros to hiring partners — for as long as it takes, up to 12 months." },
];

const mentors = [
  {
    name: "Sofia Lindberg",
    role: "Lead mentor · Data Analytics",
    bio: "Twelve years in analytics at Klarna and Spotify. Has reviewed more than 2,000 student dashboards.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Joseph Adeyemi",
    role: "Lead mentor · Frontend",
    bio: "Ex-Engineering Manager, still codes daily. Teaches JavaScript the way it is used in real teams.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nora Haddad",
    role: "Lead mentor · Product Design",
    bio: "Design lead turned educator. Obsessed with research notes and portfolio stories that survive interviews.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
];

const reviews = [
  {
    quote: "I went from a call-centre job to a junior analyst role in five months. The graded projects are the reason — I had real work to show.",
    name: "Khaled Mansour",
    role: "Analyst at Vela · Data Analytics cohort 41",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "The mentoring is the product. My mentor rewrote one of my case studies with me line by line, twice, until it was genuinely good.",
    name: "Elise Duarte",
    role: "Product designer at Meridian · Cohort 38",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "Fourteen weeks, seven projects, and a job offer from one of the hiring partners. My only regret is not doing it a year earlier.",
    name: "Tomasz Nowak",
    role: "Frontend engineer at Orbital · Cohort 44",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
  },
];

const plans = [
  {
    name: "Self-paced",
    price: "$890",
    note: "One-time, learn on your schedule",
    features: ["All lessons and project briefs", "Community Slack access", "Portfolio templates", "No mentor reviews"],
  },
  {
    name: "Cohort",
    price: "$2,400",
    note: "12 weeks, mentor-led",
    featured: true,
    features: ["Everything in Self-paced", "Twice-weekly live sessions", "Personal mentor reviews on every project", "Career support for 12 months", "Free first week — leave if it is not for you"],
  },
  {
    name: "Cohort + 1:1",
    price: "$3,600",
    note: "Cohort plus weekly private sessions",
    features: ["Everything in Cohort", "Weekly 1:1 with your mentor", "Two extra portfolio projects", "Interview coaching and mock panels"],
  },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="New cohorts start 4 Nov · Free first week · Career support included for 12 months"
        links={[
          { label: "Programmes", href: "#tracks" },
          { label: "How it works", href: "#how" },
          { label: "Mentors", href: "#mentors" },
          { label: "Pricing", href: "#pricing" },
        ]}
        cta={{ label: "Apply now", href: "#apply" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
          <div>
            <Reveal>
              <p className="kicker">Career-change programmes · since 2018</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-6">
                Learn the skill.
                <br />
                Build the <mark>proof.</mark>
                <br />
                Get the job.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Coursely is a 12-week, mentor-led academy. You finish with six graded projects, a portfolio that
                survives interview scrutiny, and career support until you sign an offer.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#apply" className="btn btn-primary">
                  Apply for the next cohort
                  <ArrowRight />
                </a>
                <a href="#how" className="btn btn-ghost">
                  <Play size={14} /> See how a week runs
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--line)] pt-7">
                {[
                  { v: 4200, suf: "+", l: "Graduates since 2018" },
                  { v: 87, suf: "%", l: "Hired within 6 months" },
                  { v: 42, suf: "", l: "Hiring partners" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="display text-[clamp(1.6rem,3vw,2.3rem)]">
                      <Counter to={s.v} suffix={s.suf} />
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={30}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[28px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Coursely students working on a project"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="absolute -left-4 top-8 hidden w-[230px] sm:block">
                <div className="progress-card">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Cohort 47 · week 4 of 12</p>
                  <div className="progress-track mt-3">
                    <span style={{ width: "33%" }} />
                  </div>
                  <p className="mt-3 text-[12px] text-[var(--muted)]">Project 3 graded: 91/100</p>
                </div>
              </div>
              <div className="absolute -bottom-6 right-2 hidden items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] px-5 py-4 shadow-xl sm:flex">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[rgba(245,179,1,.2)] text-[#8a6400]">
                  <Briefcase size={17} />
                </span>
                <div>
                  <p className="text-sm font-semibold">42 hiring partners</p>
                  <p className="text-[11px] text-[var(--muted)]">from seed startups to banks</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* tracks */}
      <section id="tracks" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Programmes"
              title={<span className="display">Four tracks. One promise: proof of work.</span>}
              sub="Every programme ends with a portfolio, not a certificate. Employers cannot interview a certificate."
            />
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {["All tracks", "Data", "Design", "Engineering"].map((c, i) => (
                  <button key={c} type="button" className={`chip ${i === 0 ? "border-[#2a2d7c] text-[#2a2d7c]" : ""}`}>
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((t) => (
              <StaggerItem key={t.name}>
                <article className="track-card h-full">
                  <div className="relative">
                    <img src={t.img} alt={t.name} loading="lazy" className="h-44 w-full object-cover" />
                    {t.tag ? <span className="track-tag">{t.tag}</span> : null}
                  </div>
                  <div className="p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[rgba(42,45,124,.08)] text-[#2a2d7c]">
                      <t.icon size={18} />
                    </span>
                    <h3 className="display mt-4 text-lg">{t.name}</h3>
                    <div className="track-meta mt-3">
                      <span>{t.weeks}</span>
                      <span>{t.projects}</span>
                      <span>{t.level}</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-5">
                      <span>
                        <span className="display text-base">{t.price}</span>
                        <span className="mt-0.5 block text-[11px] text-[var(--muted)]">{t.next}</span>
                      </span>
                      <a href="#apply" className="btn btn-primary !px-4 !py-2.5 text-[11px]">
                        Apply
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="How it works"
            title={<span className="display">A week looks like this.</span>}
            sub="Two live sessions, one graded project, one 1:1 with your mentor. Roughly 12–14 hours a week — designed for people with jobs."
            align="center"
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="step-card h-full">
                  <p className="step-no">{s.n}</p>
                  <h3 className="display mt-4 text-lg">{s.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* mentors */}
      <section id="mentors" className="scroll-mt-24 py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Mentors"
            title={<span className="display">Practitioners, not lecturers.</span>}
            sub="Every mentor still works in the field they teach. Cohorts are capped at 18 students so reviews stay personal."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {mentors.map((m) => (
              <StaggerItem key={m.name}>
                <div className="mentor-card h-full">
                  <div className="mx-auto w-fit rounded-full border-2 border-[var(--accent)] p-1">
                    <Avatar src={m.avatar} alt={m.name} size={84} />
                  </div>
                  <h3 className="display mt-4 text-lg">{m.name}</h3>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2a2d7c]">{m.role}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">{m.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* outcomes */}
      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <Reveal>
            <div className="outcome-band grid items-center gap-10 p-9 md:grid-cols-[1.15fr_.85fr] md:p-14">
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-70">Outcomes · last 12 months</p>
                <h2 className="display mt-4 text-[clamp(1.9rem,4vw,3rem)]">
                  We count hires,
                  <br />
                  not enrolment numbers.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-75">
                  Career support runs for twelve months after graduation and does not stop at a CV template: portfolio
                  reviews, mock interviews and warm intros to partners who already hire from our cohorts.
                </p>
              </div>
              <div className="relative z-10 grid grid-cols-3 gap-6 md:grid-cols-1 md:gap-7">
                {[
                  { v: 87, suf: "%", l: "Hired within 6 months" },
                  { v: 68, suf: "%", l: "Changed industry entirely" },
                  { v: 31, suf: "%", l: "Average salary increase" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="outcome-fig">
                      <Counter to={s.v} suffix={s.suf} />
                    </p>
                    <p className="mt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] opacity-70">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* reviews */}
      <section className="border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Graduates" title={<span className="display">4,200 people have finished a cohort. Here are three.</span>} align="center" />
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

      {/* pricing */}
      <section id="pricing" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Pricing"
            title={<span className="display">Pay once. No subscriptions, no surprise modules.</span>}
            sub="Instalments are available at no extra cost. If you leave during the free first week, you pay nothing at all."
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <StaggerItem key={p.name}>
                <div className={`plan h-full ${p.featured ? "featured" : ""}`}>
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2a2d7c] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f4f4ff]">
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
                  <a href="#apply" className={`btn mt-7 w-full ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                    Choose {p.name}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <Users size={14} className="text-[#2a2d7c]" /> Cohorts capped at 18 students
              </span>
              <span className="flex items-center gap-2">
                <Target size={14} className="text-[#2a2d7c]" /> Career support for 12 months
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#2a2d7c]" /> Free first week, no questions
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* faq */}
      <section className="border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHead
            eyebrow="Questions"
            title={<span className="display">The honest FAQ.</span>}
            sub="Undecided? Email hello@fieldstone.academy and a mentor replies — not an admissions funnel."
          />
          <Reveal delay={0.1}>
            <FAQ
              items={[
                {
                  q: "Do I need experience to join?",
                  a: "Data Analytics, Product Design and Growth Marketing assume no background at all. Frontend Engineering assumes you have written some code before — even a hobby project counts.",
                },
                {
                  q: "How much time does it take each week?",
                  a: "Between 12 and 14 hours: two live 90-minute sessions, one graded project and one 1:1. Most students keep working full-time and study in the evenings and on weekends.",
                },
                {
                  q: "What happens if I do not get hired?",
                  a: "Career support continues for twelve months after graduation — portfolio reviews, mock interviews and hiring-partner intros. You keep access to the whole curriculum for two years either way.",
                },
                {
                  q: "Is there any way to try before paying?",
                  a: "Yes. The first week is free: live sessions, project brief and mentor feedback. If it is not right for you, you walk away and pay nothing, and we will not follow up more than once.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* apply */}
      <section id="apply" className="scroll-mt-24 pb-24">
        <div className="wrap">
          <Reveal>
            <div className="cta-panel grid items-center gap-10 p-9 md:grid-cols-[1.15fr_.85fr] md:p-14">
              <div>
                <p className="kicker">Next cohort: 4 November</p>
                <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">
                  Twelve weeks from now,
                  <br />
                  you could have the proof.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  Applying takes ten minutes and there is no entrance exam. Tell us the role you are aiming for and the
                  hours you can genuinely commit — we will tell you honestly whether the timing works.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:hello@fieldstone.academy" className="btn btn-primary">
                    hello@fieldstone.academy
                    <ArrowUpRight />
                  </a>
                  <a href="#tracks" className="btn btn-ghost">
                    Compare programmes
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[24px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
                  alt="Coursely classroom session"
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
        blurb="Twelve-week, mentor-led career programmes in data, design, frontend and growth marketing. Portfolio-first, with career support for twelve months."
        socials={["linkedin", "youtube", "instagram"]}
        copyright="© 2026 Coursely Academy Ltd. All rights reserved."
        columns={[
          {
            title: "Programmes",
            links: [
              { label: "Data Analytics", href: "#tracks" },
              { label: "Product Design", href: "#tracks" },
              { label: "Frontend Engineering", href: "#tracks" },
              { label: "Growth Marketing", href: "#tracks" },
            ],
          },
          {
            title: "Academy",
            links: [
              { label: "How it works", href: "#how" },
              { label: "Mentors", href: "#mentors" },
              { label: "Outcomes", href: "#" },
              { label: "Hiring partners", href: "#" },
            ],
          },
          {
            title: "Practical",
            links: [
              { label: "Pricing & instalments", href: "#pricing" },
              { label: "Cohort calendar", href: "#apply" },
              { label: "Student stories", href: "#" },
              { label: "Contact", href: "#apply" },
            ],
          },
        ]}
      />
    </main>
  );
}
