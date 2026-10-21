import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  Cat,
  Calendar,
  Check,
  Clock,
  Dog,
  HeartPulse,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Siren,
  Smile,
  Stethoscope,
  Syringe,
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
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-fg)]">
        <Dog size={17} />
      </span>
      <span className="display text-[20px]">Brightpaw</span>
    </span>
  );
}

const services = [
  { icon: Stethoscope, t: "Wellness exams", d: "Head-to-tail checks with time to talk — appointments are 30 minutes, never 10." },
  { icon: Syringe, t: "Vaccinations", d: "Core and lifestyle vaccines, mapped to your pet's real risk, not a generic schedule." },
  { icon: Smile, t: "Dentistry", d: "Ultrasonic cleaning, digital dental X-rays and pain-free extractions under one visit." },
  { icon: HeartPulse, t: "Surgery", d: "Modern anaesthesia protocols with dedicated monitoring and same-day recovery." },
  { icon: Microscope, t: "Diagnostics", d: "In-house bloods, X-ray and ultrasound — most results inside the same appointment." },
  { icon: Bath, t: "Grooming & boarding", d: "Calm, low-noise rooms for nervous animals. The staff your dog remembers by name." },
];

const vets = [
  {
    name: "Dr. Ilona Marsh",
    role: "Chief veterinarian · Surgery",
    bio: "Fifteen years in soft-tissue surgery. Owned by a three-legged lurcher called Pepper.",
    img: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Owen Larkin",
    role: "Internal medicine · Cats",
    bio: "Cat-only clinic hours, zero towel-wraps unless it is genuinely kinder. Two rescue tabbies at home.",
    img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Hana Petrova",
    role: "Dentistry · Dermatology",
    bio: "Runs our dental suite and the allergy clinic. Speaks fluent nervous-dog.",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
  },
];

const principles = [
  { icon: HeartPulse, t: "Exams on the floor", d: "If your dog is calmer on a mat than a steel table, the exam happens on the mat. Medical accuracy is unaffected." },
  { icon: Clock, t: "Thirty-minute appointments", d: "We schedule fewer visits per hour so nobody is rushed — yours or ours." },
  { icon: ShieldCheck, t: "Pain first, always", d: "Pre-visit calming plans, local blocks for every procedure, and take-home pain relief as standard." },
  { icon: Bath, t: "Separation where it matters", d: "Cats are never in the waiting room with barking dogs. Two entrances, two sounds, two smells." },
];

const plans = [
  { name: "Essential", price: 29, note: "per month, per pet", features: ["2 wellness exams a year", "Core vaccinations", "10% off dentistry & surgery"] },
  {
    name: "Complete",
    price: 49,
    note: "per month, per pet",
    featured: true,
    features: ["Everything in Essential", "Unlimited consultations", "Annual bloods + urinalysis", "Free nail trims & anal glands", "24/7 advice line"],
  },
  { name: "Senior Care", price: 69, note: "per month, pets 8+", features: ["Everything in Complete", "6-monthly senior bloods", "2 dental scale & polishes", "Mobility & joint plan"] },
];

const reviews = [
  {
    quote: "Our beagle used to shake in the car park. Now he walks in for his check-up. That is the entire review.",
    name: "Rebecca Nolan",
    role: "Alfie's human · 4 years with us",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "Same-day bloods, phone call within the hour, clear plan and a written estimate. No surprises, no upselling.",
    name: "Viktor Sørensen",
    role: "Miso's human · 2 years with us",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "They caught our cat's thyroid issue that two other clinics missed. Twelve months later she is a kitten again.",
    name: "Amara Diallo",
    role: "Nina's human · 6 years with us",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

const clinics = [
  { name: "Brightpaw Riverside", addr: "12 Mill Lane, Riverside", hours: "Mon–Sat · 8:00–19:00", phone: "+1 312 555 0140" },
  { name: "Brightpaw Northgate", addr: "4 Foundry Square, Northgate", hours: "Mon–Sun · 8:00–20:00", phone: "+1 312 555 0188" },
  { name: "Brightpaw Harbour", addr: "88 Quay Street, Harbour", hours: "Mon–Fri · 9:00–18:00", phone: "+1 312 555 0192" },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar
        brand={<Wordmark />}
        note="Open 7 days · 24/7 emergency line · Three locations across the city"
        links={[
          { label: "Services", href: "#services" },
          { label: "Team", href: "#team" },
          { label: "Plans", href: "#plans" },
          { label: "Clinics", href: "#clinics" },
        ]}
        cta={{ label: "Book online", href: "#book" }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Reveal>
              <div className="flex flex-wrap gap-2">
                <span className="pill-badge">
                  <span className="dot" /> Same-week appointments
                </span>
                <span className="pill-badge">
                  <ShieldCheck size={13} className="text-[var(--accent)]" /> Fear-Free certified team
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-title mt-6">
                Care your pet
                <br />
                actually <span className="teal">enjoys.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                Brightpaw is a fear-free veterinary group. Thirty-minute appointments, transparent pricing and a team
                that meets your animal where they are — on the floor, if that is where they feel safe.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#book" className="btn btn-primary">
                  Book an appointment
                  <Calendar size={15} />
                </a>
                <a href="tel:+13125550140" className="btn btn-ghost">
                  <Phone size={15} /> +1 312 555 0140
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-11 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--line)] pt-7">
                {[
                  { v: 12000, suf: "+", l: "Pets registered" },
                  { v: 3, suf: "", l: "Clinics in the city" },
                  { v: 24, suf: "/7", l: "Emergency line" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="display text-[clamp(1.6rem,3vw,2.2rem)]">
                      <Counter to={s.v} suffix={s.suf} />
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={32}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[36px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80"
                  alt="Veterinarian examining a dog"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="float-a float-card absolute -left-3 top-10 hidden w-[210px] p-4 sm:block">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  <Calendar size={12} className="text-[var(--accent)]" /> Next available
                </p>
                <p className="display mt-2 text-lg">Today · 16:30</p>
                <p className="mt-1 text-[11px] text-[var(--muted)]">Northgate · 30-min slot</p>
              </div>
              <div className="float-b float-card absolute -bottom-6 -right-2 hidden w-[230px] items-center gap-3 p-4 sm:flex">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[rgba(15,138,126,.12)] text-[var(--accent)]">
                  <Stars count={1} />
                </span>
                <div>
                  <p className="text-sm font-semibold">4.9 / 5 rating</p>
                  <p className="text-[11px] text-[var(--muted)]">from 2,140 owner reviews</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* services */}
      <section id="services" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="What we do"
              title={<span className="display">Everything except the scary waiting room.</span>}
              sub="Six services under one roof, so most pets are treated without a referral, a second trip or a stranger's hands."
            />
            <Reveal delay={0.1}>
              <a href="#book" className="btn btn-ghost">
                See our prices
                <ArrowRight />
              </a>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.t}>
                <div className="svc-card h-full">
                  <span className="svc-ico">
                    <s.icon size={20} />
                  </span>
                  <h3 className="display mt-5 text-xl">{s.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* team */}
      <section id="team" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="The team"
            title={<span className="display">The vets your pet will actually meet.</span>}
            sub="Nine vets, fourteen nurses, one rule: whoever starts the case finishes it. You will never repeat your story."
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {vets.map((v) => (
              <StaggerItem key={v.name}>
                <article className="vet-card h-full">
                  <img src={v.img} alt={v.name} loading="lazy" className="h-72 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="display text-lg">{v.name}</h3>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{v.role}</p>
                    <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">{v.bio}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* fear-free */}
      <section className="py-20 md:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[36px] border border-[var(--line)]">
              <img
                src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=1200&q=80"
                alt="Vet and cat in a calm consultation room"
                loading="lazy"
                className="h-[420px] w-full object-cover md:h-[540px]"
              />
            </div>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="The fear-free difference"
              title={<span className="display">Calm pets heal faster. That is not marketing.</span>}
              sub="Stress raises heart rate, blood pressure and recovery time — and it makes exams less accurate. So we designed the whole clinic around lowering it."
            />
            <div className="mt-8">
              {principles.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.05}>
                  <div className="principle">
                    <span className="principle-ico">
                      <p.icon size={18} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold">{p.t}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">{p.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* plans */}
      <section id="plans" className="scroll-mt-24 border-y border-[var(--line)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Pet health plans"
            title={<span className="display">Predictable costs for unpredictable animals.</span>}
            sub="Spread routine care across the year and get 10–20% off everything else. Cancel any time — no exit fees, no small print games."
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <StaggerItem key={p.name}>
                <div className={`plan h-full ${p.featured ? "featured" : ""}`}>
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent-fg)]">
                      Most chosen
                    </span>
                  ) : null}
                  <h3 className="display text-2xl">{p.name}</h3>
                  <p className="plan-price mt-5">
                    ${p.price}
                    <span className="text-base font-normal text-[var(--muted)]">/mo</span>
                  </p>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">{p.note}</p>
                  <ul className="mt-6 space-y-3 border-t border-[var(--line)] pt-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px]">
                        <Check size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#book" className={`btn mt-7 w-full ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                    Choose {p.name}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* reviews */}
      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Owner reviews"
            title={<span className="display">2,140 reviews. These three say it best.</span>}
            align="center"
          />
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

      {/* emergency */}
      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <Reveal>
            <div className="emergency-band flex flex-col items-start gap-8 p-9 md:flex-row md:items-center md:justify-between md:p-12">
              <div className="relative z-10 flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[rgba(253,247,239,.12)] text-[var(--bg)]">
                  <Siren size={22} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-60">Emergencies · 24/7</p>
                  <h2 className="display mt-2 text-[clamp(1.6rem,3.4vw,2.4rem)]">
                    If it cannot wait, neither do we.
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed opacity-70">
                    Call ahead so our team prepares the room before you arrive. A vet — not a call centre — picks up at
                    any hour.
                  </p>
                </div>
              </div>
              <a href="tel:+13125550199" className="btn relative z-10 bg-[var(--bg)] text-[var(--fg)]">
                <Phone size={15} /> Emergency: +1 312 555 0199
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* clinics */}
      <section id="clinics" className="scroll-mt-24 border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHead
              eyebrow="Locations"
              title={<span className="display">Three clinics. One set of records.</span>}
              sub="Take your pet to whichever clinic suits the day — your history, x-rays and plan follow you automatically."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden rounded-[26px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80"
                  alt="Brightpaw clinic exterior"
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div>
              {clinics.map((c) => (
                <div key={c.name} className="clinic-row">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[rgba(15,138,126,.1)] text-[var(--accent)]">
                    <MapPin size={17} />
                  </span>
                  <span>
                    <span className="block font-semibold">{c.name}</span>
                    <span className="mt-0.5 block text-[12px] text-[var(--muted)]">
                      {c.addr} · {c.phone}
                    </span>
                  </span>
                  <span className="clinic-hours flex items-center gap-2">
                    <Clock size={12} /> {c.hours}
                  </span>
                </div>
              ))}
              <p className="mt-6 flex items-center gap-2 text-[12px] text-[var(--muted)]">
                <Cat size={14} className="text-[var(--accent)]" />
                Cat-only hours every weekday 11:00–14:00, at all three clinics.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* faq */}
      <section className="border-t border-[var(--line)] py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHead
            eyebrow="Before your visit"
            title={<span className="display">Good questions, honest answers.</span>}
            sub="Anything else? Email hello@brightpaw.vet and a nurse — not a bot — replies the same day."
          />
          <Reveal delay={0.1}>
            <FAQ
              items={[
                {
                  q: "My dog is terrified of the vet. Can you still help?",
                  a: "That is exactly who we built the clinic for. Tell us at booking and we will send a pre-visit plan: a calming protocol, a quieter appointment slot, and the option to wait in the car until the room is ready.",
                },
                {
                  q: "How quickly can I get an appointment?",
                  a: "Urgent cases are seen the same day, always. Routine appointments are typically available within 48 hours — and you can see live slots when booking online.",
                },
                {
                  q: "Do you treat cats in the same area as dogs?",
                  a: "No. Cats have a separate entrance, waiting area and consultation room at each clinic, plus cat-only hours every weekday between 11:00 and 14:00.",
                },
                {
                  q: "What happens with costs if my pet needs surgery?",
                  a: "You get a written estimate before anything is booked, and a call if anything changes mid-procedure. Plan members receive 10–20% off, and we can split payments over three months.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* book cta */}
      <section id="book" className="scroll-mt-24 pb-24">
        <div className="wrap">
          <Reveal>
            <div className="grid items-center gap-10 overflow-hidden rounded-[36px] border border-[var(--line)] bg-[var(--card)] p-9 md:grid-cols-[1.15fr_.85fr] md:p-14">
              <div>
                <p className="kicker">Booking takes 60 seconds</p>
                <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">
                  Let&apos;s get your pet
                  <br />
                  on the books.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  Choose a clinic, choose a slot, tell us in your own words what has changed. A vet reviews every
                  booking before your visit, so the appointment starts with answers, not paperwork.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:hello@brightpaw.vet" className="btn btn-primary">
                    Book online
                    <ArrowUpRight />
                  </a>
                  <a href="tel:+13125550140" className="btn btn-ghost">
                    <Phone size={15} /> Call instead
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[28px] border border-[var(--line)]">
                <img
                  src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=900&q=80"
                  alt="Happy dog at Brightpaw"
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
        blurb="A fear-free veterinary group with three clinics and a 24/7 emergency line. Thirty-minute appointments, transparent pricing, and pets treated like pets."
        socials={["instagram", "facebook", "youtube"]}
        copyright="© 2026 Brightpaw Veterinary Group. All rights reserved."
        columns={[
          {
            title: "Care",
            links: [
              { label: "Wellness exams", href: "#services" },
              { label: "Dentistry", href: "#services" },
              { label: "Surgery", href: "#services" },
              { label: "Diagnostics", href: "#services" },
            ],
          },
          {
            title: "Clinic",
            links: [
              { label: "Our team", href: "#team" },
              { label: "Health plans", href: "#plans" },
              { label: "Locations & hours", href: "#clinics" },
              { label: "Fear-free approach", href: "#" },
            ],
          },
          {
            title: "Owners",
            links: [
              { label: "Book appointment", href: "#book" },
              { label: "Emergency line", href: "tel:+13125550199" },
              { label: "New patient form", href: "#" },
              { label: "Contact", href: "#book" },
            ],
          },
        ]}
      />
    </main>
  );
}
