"use client";

import { AnimatePresence, animate, motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Star, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------------------------------- motion --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
      style={{ scaleX: scrollYProgress, background: "var(--accent)" }}
    />
  );
}

/* ---------------------------------- counter -------------------------------- */

export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

/* ---------------------------------- navbar --------------------------------- */

type NavLink = { label: string; href: string };

export function Navbar({
  brand,
  links,
  cta,
  note,
  variant = "plain",
  className = "",
}: {
  brand: ReactNode;
  links: NavLink[];
  cta?: { label: string; href: string };
  note?: string;
  variant?: "plain" | "pill" | "center";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className={`sticky top-0 z-50 ${className}`}>
      {note ? (
        <div className="bg-[var(--accent)] px-3 py-2 text-center text-[11px] font-semibold tracking-wide text-[var(--accent-fg)]">
          {note}
        </div>
      ) : null}

      <div
        className={`transition-colors duration-300 ${solid ? "border-b border-[var(--line)] backdrop-blur-xl" : ""}`}
        style={{ background: solid ? "color-mix(in srgb, var(--bg) 86%, transparent)" : "var(--nav-bg, transparent)" }}
      >
        <div
          className={`wrap flex items-center justify-between gap-4 ${
            variant === "pill" ? "my-3 rounded-full border border-[var(--line)] px-5 py-3 backdrop-blur-xl" : "h-[70px]"
          }`}
          style={variant === "pill" ? { background: "var(--nav-bg, color-mix(in srgb, var(--bg) 80%, transparent))" } : undefined}
        >
          <a href="#top" className="relative z-10 shrink-0" aria-label="Home">
            {brand}
          </a>

          <nav
            className={`hidden items-center gap-7 text-[13px] font-medium lg:flex ${
              variant === "center" ? "absolute left-1/2 -translate-x-1/2" : ""
            }`}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="opacity-70 transition hover:opacity-100">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {cta ? (
              <a href={cta.href} className="btn btn-primary hidden !py-2.5 text-[12px] sm:inline-flex">
                {cta.label}
                <ArrowRight />
              </a>
            ) : null}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: EASE }}
              className="overflow-hidden border-t border-[var(--line)] bg-[var(--bg)] lg:hidden"
            >
              <nav className="wrap flex flex-col gap-1 py-5">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="flex items-center justify-between border-b border-[var(--line)] py-3.5 text-base font-medium"
                  >
                    {l.label}
                    <ArrowRight size={15} className="opacity-40" />
                  </motion.a>
                ))}
                {cta ? (
                  <a href={cta.href} onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full">
                    {cta.label}
                    <ArrowRight />
                  </a>
                ) : null}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ---------------------------------- footer --------------------------------- */

const socialPaths: Record<string, ReactNode> = {
  instagram: (
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5-2.6a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
  ),
  x: (
    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L2 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20Z" />
  ),
  linkedin: (
    <path d="M6.4 8.6H3V21h3.4V8.6ZM4.7 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 13.9c0-3.3-1.8-4.9-4.1-4.9-1.9 0-2.7 1-3.2 1.8V8.6H10.3V21h3.4v-6.9c0-1.6.7-2.6 2.1-2.6 1.3 0 1.9.9 1.9 2.6V21H21v-7.1Z" />
  ),
  youtube: (
    <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2C22 15.1 22 12 22 12s0-3.1-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
  ),
  facebook: (
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
  ),
  dribbble: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.6a8.3 8.3 0 0 1 1.8 5c-.3-.1-3-.6-5.8-.3-.1-.3-.3-.6-.5-1 3.1-1.3 4.2-3 4.5-3.7ZM12 3.6c2 0 3.9.8 5.3 2-.2.4-1.3 2-4.3 3.2a43 43 0 0 0-3.1-4.8c.7-.2 1.4-.4 2.1-.4ZM8.2 4.6a51 51 0 0 1 3.1 4.7c-3.8 1-7.2 1-7.6 1a8.5 8.5 0 0 1 4.5-5.7Zm-5 7.4v-.3c.4 0 4.4.1 8.5-1.2.2.5.5 1 .7 1.4-3.9 1.1-6 4.4-6.3 4.9a8.4 8.4 0 0 1-2.9-4.8Zm8.8 8.4a8.4 8.4 0 0 1-5.1-1.7c.2-.4 1.8-3.4 6.2-4.8a35 35 0 0 1 1.8 6.3c-.9.2-1.9.2-2.9.2Zm4.5-1.1a37 37 0 0 0-1.6-6c2.7-.4 5 .3 5.3.4a8.4 8.4 0 0 1-3.7 5.6Z" />
  ),
  behance: (
    <path d="M9.2 11.4c.9-.5 1.4-1.3 1.4-2.4 0-2.1-1.6-3.1-3.9-3.1H2v12.2h4.9c2.5 0 4.4-1.2 4.4-3.7 0-1.6-.8-2.6-2.1-3ZM4.7 8h1.6c.9 0 1.5.4 1.5 1.3 0 .9-.6 1.3-1.5 1.3H4.7V8Zm1.9 7.9H4.7v-3.2h1.9c1.1 0 1.8.5 1.8 1.6 0 1.1-.8 1.6-1.8 1.6ZM18.4 8.2c-3 0-4.9 2-4.9 5 0 3.1 1.9 5 5 5 2.3 0 3.8-1.1 4.3-2.9h-2.6c-.2.5-.8.9-1.6.9-1.1 0-1.8-.7-2-1.9h6.3c0-.3.1-.7.1-1.1 0-3-1.8-5-4.6-5Zm-1.8 4.1c.2-1.1.8-1.8 1.8-1.8 1 0 1.6.7 1.7 1.8h-3.5ZM15.4 5.4h5.3v1.4h-5.3V5.4Z" />
  ),
  pinterest: (
    <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.3-5.4s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-1 3.9-.3 1.2.6 2.1 1.7 2.1 2.1 0 3.7-2.2 3.7-5.4 0-2.8-2-4.8-4.9-4.8-3.3 0-5.2 2.5-5.2 5 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.3c0 .2-.2.3-.4.2-1.4-.7-2.3-2.8-2.3-4.5 0-3.7 2.7-7.1 7.7-7.1 4 0 7.2 2.9 7.2 6.7 0 4.1-2.6 7.4-6.1 7.4-1.2 0-2.3-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.3-1.5 3.1A10 10 0 1 0 12 2Z" />
  ),
};

export function Socials({ names = ["instagram", "x", "linkedin"], className = "" }: { names?: string[]; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {names.map((n) => (
        <a
          key={n}
          href="#"
          aria-label={n}
          className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] opacity-70 transition hover:border-[var(--accent)] hover:text-[var(--accent)] hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
            {socialPaths[n] ?? socialPaths.instagram}
          </svg>
        </a>
      ))}
    </div>
  );
}

export type FooterColumn = { title: string; links: NavLink[] };

export function Footer({
  brand,
  blurb,
  columns,
  socials,
  newsletter = true,
  copyright,
}: {
  brand: ReactNode;
  blurb: string;
  columns: FooterColumn[];
  socials?: string[];
  newsletter?: boolean;
  copyright?: string;
}) {
  const [sent, setSent] = useState(false);
  return (
    <footer className="mt-24 border-t border-[var(--line)]">
      <div className="wrap py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <a href="#top" className="inline-block">
              {brand}
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">{blurb}</p>
            {newsletter ? (
              <div className="mt-6 max-w-sm">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Newsletter</p>
                {sent ? (
                  <p className="text-sm text-[var(--accent)]">Thanks — you&apos;re on the list.</p>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="flex items-center gap-2 rounded-full border border-[var(--line)] p-1.5 focus-within:border-[var(--accent)]"
                  >
                    <input
                      required
                      type="email"
                      aria-label="Email address"
                      placeholder="you@example.com"
                      className="min-w-0 flex-1 bg-transparent px-3 py-1.5 text-sm outline-none placeholder:text-[var(--muted)]"
                    />
                    <button type="submit" aria-label="Subscribe" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-fg)]">
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )}
              </div>
            ) : null}
            <Socials names={socials} className="mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{c.title}</p>
                <ul className="space-y-2.5 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="opacity-75 transition hover:text-[var(--accent)] hover:opacity-100">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-[11px] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright ?? `© ${new Date().getFullYear()} ${typeof brand === "string" ? brand : ""}. All rights reserved.`}</p>
          <p>Designed with care · Built in Next.js</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- bits ----------------------------------- */

export function Marquee({ children, className = "", reverse = false }: { children: ReactNode; className?: string; reverse?: boolean }) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" style={reverse ? { animationDirection: "reverse" } : undefined}>
        {children}
        {children}
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-4 text-balance text-[clamp(2rem,4vw,3.2rem)] leading-[1.02]">{title}</h2>
      {sub ? <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">{sub}</p> : null}
    </Reveal>
  );
}

export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-current text-[var(--accent)]" />
      ))}
    </div>
  );
}

export function FAQ({ items, className = "" }: { items: { q: string; a: string }[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={className}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-b border-[var(--line)]">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 py-5 text-left text-[15px] font-medium"
            >
              {it.q}
              <ChevronDown size={17} className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-[var(--muted)]">{it.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function Avatar({ src, alt, size = 40 }: { src: string; alt: string; size?: number }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
}
