import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { submitContact } from "../fns/contact";
const portrait = { url: "/udhaya-portrait-nobg.png" };
import {
  Phone, Mail, Linkedin, Github, Instagram,
  BarChart3, Database, Palette, Brain, Star, GitFork, ExternalLink, X, ZoomIn,
  Download, ArrowRight, Menu,
} from "lucide-react";

function XBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import StarBorder from "@/components/StarBorder";
import RotatingText from "@/components/RotatingText";
import AIChat from "@/components/AIChat";

const projects = [
  {
    title: "Food Waste System",
    description: "An AI-based smart system designed to reduce food waste by leveraging technology to monitor, predict, and optimize food usage across supply chains and households.",
    tags: ["AI", "Smart System", "Sustainability"],
    github: "https://github.com/udhayaprakashv24-ship-it/food-waste-sustem",
  },
  {
    title: "Bus Tracking Website",
    description: "A web application to track bus routes and improve transportation visibility, providing real-time updates and better commuter experience.",
    tags: ["Web App", "Tracking", "Transportation"],
    github: "https://github.com/udhayaprakashv24-ship-it/bus-tracking-website",
  },
  {
    title: "AutoFinder App",
    description: "A mobile/web application to help users find and discover automobiles, streamlining the vehicle search and discovery experience.",
    tags: ["App", "Automotive", "Search"],
    github: "https://github.com/udhayaprakashv24-ship-it/autofinder-app-development",
  },
  {
    title: "UI/UX Figma Prototype",
    description: "A modern, user-friendly UI/UX design prototype built in Figma. Focuses on smooth navigation, clean visual hierarchy, responsiveness, and intuitive user experience with interactive screens and real-world application flow.",
    tags: ["Figma", "UI/UX", "Prototype"],
    github: null,
    figma: "https://www.figma.com/proto/4wn7n5nucSaWxamUsIT3NJ",
  },
  {
    title: "Insurance Management Desktop App — UI/UX",
    description: "A desktop UI/UX design prototype for an Insurance Management Application built in Figma. Features a dashboard-style interface for managing insurance policies, customer details, claims, and reports — with organised navigation, data visualisation sections, and consistent design elements optimised for professional desktop workflows.",
    tags: ["Figma", "UI/UX", "Dashboard", "Desktop", "Prototype"],
    github: null,
    figma: "https://www.figma.com/proto/QfNlTbOdDj5QzE6JlEKcU0",
  },
  {
    title: "Responsive UI/UX Design Prototype",
    description: "A modern UI/UX design prototype built in Figma with a focus on clean, responsive layouts and structured design systems. Demonstrates a complete user flow with interactive screens suitable for real-world web or mobile applications, emphasising clarity, smooth navigation, consistent spacing, typography, and color harmony.",
    tags: ["Figma", "UI/UX", "Responsive", "Prototype"],
    github: null,
    figma: "https://www.figma.com/proto/k8HPj9evRa9fU0RmNopkKt",
  },
  {
    title: "Graphic Design — MAKE Labs",
    description: "Informational graphic design poster created during internship at MAKE Labs, showcasing design tools including Adobe Illustrator, Photoshop, Figma, CorelDraw, and Canva.",
    tags: ["Graphic Design", "MAKE Labs", "Figma"],
    github: null,
    poster: "/posters/graphic-design-poster.jpg",
  },
  {
    title: "Construction Ad Design",
    description: "A professional advertisement design for a construction company, featuring bold typography, imagery, and layout crafted to communicate services effectively.",
    tags: ["Ad Design", "Typography", "Branding"],
    github: null,
    poster: "/posters/construction-poster.jpg",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio 2026 — Udhaya Prakash V" },
      { name: "description", content: "Udhaya Prakash V — Data Analytics & UI/UX Designer. B.Tech AI & Data Science." },
      { property: "og:title", content: "Portfolio 2026 — Udhaya Prakash V" },
      { property: "og:description", content: "Data Analytics & UI/UX Designer portfolio." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const skills = [
  { name: "Data Analytics", icon: BarChart3 },
  { name: "Data Visualization", icon: BarChart3 },
  { name: "Python", icon: Brain },
  { name: "SQL", icon: Database },
  { name: "Microsoft Excel", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: BarChart3 },
  { name: "UI/UX Design", icon: Palette },
  { name: "Figma", icon: Palette },
  { name: "Wireframing & Prototyping", icon: Palette },
  { name: "Problem Solving", icon: Brain },
  { name: "Continuous Learning", icon: Brain },
];

const contacts = [
  { icon: Phone, label: "9025294998", href: "tel:9025294998" },
  { icon: Mail, label: "udhayaprakashv24@gmail.com", href: "mailto:udhayaprakashv24@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/udhaya-prakash-v-022b22374", href: "https://linkedin.com/in/udhaya-prakash-v-022b22374" },
  { icon: Github, label: "github.com/udhayaprakashv24-ship-it", href: "https://github.com/udhayaprakashv24-ship-it" },
  { icon: XBrandIcon, label: "x.com/VUdhaya63542", href: "https://x.com/VUdhaya63542" },
  { icon: Instagram, label: "instagram.com/the_usos_boy", href: "https://instagram.com/the_usos_boy" },
];

function Portfolio() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [contactEmail, setContactEmail] = useState("");
  const [contactQuery, setContactQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!contactEmail.trim()) {
      setFormError("Email address is required.");
      return;
    }
    if (!validateEmail(contactEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!contactQuery.trim()) {
      setFormError("Query is required.");
      return;
    }
    if (contactQuery.trim().length < 5) {
      setFormError("Query must be at least 5 characters.");
      return;
    }

    setFormStatus("submitting");
    try {
      await submitContact({ data: { email: contactEmail.trim(), query: contactQuery.trim() } });
      setFormStatus("success");
      setContactEmail("");
      setContactQuery("");
    } catch (err: unknown) {
      setFormStatus("error");
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setFormError(msg.includes("Too many") ? msg : "Submission failed. Please try again.");
    }
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  // Close mobile menu on outside click / scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = () => setMobileMenuOpen(false);
    document.addEventListener("scroll", close, { passive: true });
    return () => document.removeEventListener("scroll", close);
  }, [mobileMenuOpen]);

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Ambient glow accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]" />
      </div>

      {/* ── Full-screen Hero (100vh) ── */}
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden">

        {/* ── Header ── */}
        <header className="relative z-20 flex shrink-0 items-center justify-between px-4 py-3 md:px-10 md:py-4">
          {/* Left: avatar + name */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full border-2 border-primary/60 shadow-lg shadow-primary/20 shrink-0">
              <img
                src={portrait.url}
                alt="Udhaya Prakash V"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <span className="font-display text-xs font-semibold tracking-wide text-foreground sm:text-sm">
              Udhaya Prakash V
            </span>
          </div>

          {/* Right: social icons (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop social icons */}
            <div className="hidden md:flex items-center gap-4">
              {contacts.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Mobile: show 3 most-used icons + hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              {contacts.slice(2, 4).map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <button
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div
              className="absolute top-full left-0 right-0 z-30 mx-4 mt-1 rounded-2xl p-4 shadow-2xl md:hidden"
              style={{
                background: "rgba(8,12,28,0.97)",
                border: "1px solid rgba(56,189,248,0.2)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                {contacts.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* ── Split Hero Body ── */}
        <div className="relative flex flex-1 flex-col md:flex-row overflow-hidden">

          {/* LEFT — photo */}
          <div className="relative flex shrink-0 items-end justify-center md:w-[52%] h-[38vh] min-h-[240px] md:h-auto">
            {/* Glow behind photo */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 40% 80%, oklch(0.28 0.18 242 / 0.35) 0%, transparent 65%)",
              }}
              aria-hidden
            />
            {/* Portrait */}
            <img
              src={portrait.url}
              alt="Portrait of Udhaya Prakash V"
              className="relative z-10 h-full w-full object-contain object-bottom select-none"
            />
            {/* Right-edge fade on desktop */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-32 md:block z-20"
              style={{ background: "linear-gradient(to right, transparent, oklch(0.08 0.018 255))" }}
              aria-hidden
            />
            {/* Bottom-edge fade on mobile */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:hidden z-20"
              style={{ background: "linear-gradient(to bottom, transparent, oklch(0.08 0.018 255))" }}
              aria-hidden
            />
          </div>

          {/* RIGHT — text content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-6 text-center md:items-start md:px-12 md:py-0 md:text-left lg:px-16">
            {/* Small name label */}
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground sm:text-xs sm:tracking-[0.35em]">
              Udhaya Prakash V
            </p>

            {/* Large "I'm [ROLE]" heading */}
            <h1
              className="mt-2 font-display font-bold leading-[1.0] tracking-tight md:mt-3"
              style={{ fontSize: "clamp(1.75rem, 7vw, 5rem)" }}
            >
              I'M{" "}
              <span className="inline-block overflow-hidden align-bottom">
                <RotatingText
                  texts={["DESIGNER", "ANALYST", "CREATOR", "LEARNER"]}
                  mainClassName="text-primary"
                  splitLevelClassName="overflow-hidden"
                  rotationInterval={2000}
                />
              </span>
            </h1>

            {/* Divider */}
            <div className="mt-3 h-px w-10 bg-primary/70 md:mt-4 md:w-12" />

            {/* Short intro */}
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">
              B.Tech student in AI & Data Science. Turning raw data into clear stories and crafting interfaces that make those stories feel effortless.
            </p>

            {/* Learn More — square box button */}
            <a
              href="#about"
              className="mt-5 inline-flex items-center gap-2 rounded-none border-2 border-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-95 sm:text-sm md:mt-6 md:px-8 md:py-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <div id="about" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-12 md:py-16">

        {/* About */}
        <section className="mt-12 md:mt-24">
          <div className="mb-6 md:mb-8">
            <SectionLabel title="About Me" />
          </div>
          <div className="max-w-4xl">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-foreground/90 border-l-2 border-primary/60 pl-4 font-light">
                B.Tech student in Artificial Intelligence & Data Science. Turning raw data into clear stories and crafting interfaces that make those stories feel effortless.
              </p>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground pl-4">
                Passionate about Data Analytics and UI/UX Design, blending structured scientific inquiry with intuitive digital aesthetics. Skilled in Python, SQL, Excel, Power BI, Tableau, and Figma. I focus on bridging the gap between numbers and human experiences to build recruiter-friendly systems and high-impact designs.
              </p>
            </div>
          </div>
        </section>

        {/* Core Skills */}
        <section className="mt-12 md:mt-24">
          <div className="mb-6 md:mb-8">
            <SectionLabel title="Core Skills" />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
            {skills.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-3 backdrop-blur transition hover:border-primary/60 hover:bg-card hover:shadow-[0_0_30px_-10px_var(--color-primary)] md:gap-3 md:px-4"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs font-medium text-foreground/90 leading-snug sm:text-sm">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-12 md:mt-24">
          <div className="mb-6 md:mb-8">
            <SectionLabel title="Experience" />
          </div>
          <div className="max-w-4xl">
            <div className="relative border-l border-border/60 pl-5 ml-3 space-y-10 md:pl-8 md:ml-4 md:space-y-12">
              {/* Timeline Node */}
              <div className="relative">
                <span className="absolute -left-[29px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-primary md:-left-[37px]">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>

                <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur transition hover:border-primary/60 hover:bg-card hover:shadow-[0_0_30px_-10px_var(--color-primary)] p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-5">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center justify-center bg-white border border-border w-10 h-10 p-1 md:w-16 md:h-16 md:p-1.5">
                      <img
                        src="/whiteandbox-logo.jpg"
                        alt="White and Box logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors md:text-xl">UI/UX Design Intern</h3>
                      <p className="text-xs font-semibold text-primary mt-1 leading-snug sm:text-sm">
                        White and Box – Tech Products & Services | Bengaluru, Karnataka
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        Dec 2025 – Jan 2026
                      </p>
                      <p className="hidden md:block mt-3 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-3">
                        White and Box is a technology company providing innovative digital products and services in the tech industry. During my internship as a UI/UX Design Intern, I contributed to designing user-centered digital experiences, improving interface usability, and creating visually engaging designs for web and mobile platforms.
                      </p>
                      <ul className="hidden md:grid mt-4 grid-cols-1 gap-2.5 text-sm text-foreground/85 md:mt-6 md:gap-3">
                        {[
                          "Assisted in user research, wireframing, and prototype development for web and mobile applications.",
                          "Created intuitive and visually appealing user interface designs using Figma and design systems.",
                          "Collaborated with developers and product teams to ensure seamless implementation of design solutions.",
                          "Improved user experience by analyzing user behavior and identifying usability issues.",
                          "Supported the creation of responsive layouts, design documentation, and interactive prototypes.",
                          "Followed industry-standard UI/UX principles, accessibility guidelines, and design best practices as part of the internship program."
                        ].map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAKE Labs */}
              <div className="relative">
                <span className="absolute -left-[29px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-primary md:-left-[37px]">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>

                <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur transition hover:border-primary/60 hover:bg-card hover:shadow-[0_0_30px_-10px_var(--color-primary)] p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-5">
                    <div className="shrink-0 flex items-center justify-center bg-white border border-border w-10 h-10 p-1 md:w-16 md:h-16 md:p-1.5">
                      <img
                        src="/makelabs-logo.jpg"
                        alt="MAKE Labs logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors md:text-xl">UI/UX Design Intern</h3>
                      <p className="text-xs font-semibold text-primary mt-1 leading-snug sm:text-sm">
                        MAKE Labs | Krishnagiri & Bengaluru
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        June 2025 – July 2025
                      </p>
                      <p className="hidden md:block mt-3 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-3">
                        MAKE Labs is a technology startup specializing in web design, product development, research and development, robotics, and innovative technology solutions. I worked as a UI/UX Design Intern, contributing to the design and development of user-friendly digital experiences for web and mobile platforms.
                      </p>
                      <ul className="hidden md:grid mt-4 grid-cols-1 gap-2.5 text-sm text-foreground/85 md:mt-6 md:gap-3">
                        {[
                          "Assisted in designing intuitive and visually appealing user interfaces for websites and digital products.",
                          "Created wireframes, user flows, and interactive prototypes to enhance user experience and usability.",
                          "Collaborated with development and design teams to ensure seamless implementation of design concepts.",
                          "Conducted user research and analyzed feedback to improve interface functionality and accessibility.",
                          "Designed responsive layouts, landing pages, and branding materials while maintaining visual consistency.",
                          "Followed modern UI/UX design principles, design system standards, and user-centered design practices throughout the internship."
                        ].map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-12 md:mt-24">
          <div className="mb-6 md:mb-8">
            <SectionLabel title="Projects" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-2xl border border-border bg-card/40 overflow-hidden backdrop-blur transition hover:border-primary/60 hover:bg-card hover:shadow-[0_0_30px_-10px_var(--color-primary)]"
              >
                {/* Figma live preview */}
                {"figma" in project && project.figma && !("poster" in project && project.poster) && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block w-full overflow-hidden bg-[#1e1e2e] focus:outline-none"
                    style={{ aspectRatio: "16/9" }}
                    aria-label={`Open ${project.title} prototype`}
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <iframe
                        src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.figma)}&hide-ui=1`}
                        style={{
                          width: "200%",
                          height: "200%",
                          transform: "scale(0.5)",
                          transformOrigin: "top left",
                          border: "none",
                          pointerEvents: "none",
                        }}
                        title={`${project.title} preview`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="rounded-full bg-black/60 p-3 backdrop-blur-sm">
                        <ExternalLink className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-mono text-xs text-white/90 uppercase tracking-widest">
                        View Prototype
                      </span>
                    </div>
                  </a>
                )}

                {/* Poster image */}
                {"poster" in project && project.poster && (
                  <button
                    className="relative w-full overflow-hidden cursor-zoom-in focus:outline-none"
                    style={{ aspectRatio: "16/9" }}
                    onClick={() => setLightbox({ src: project.poster!, alt: `${project.title} poster` })}
                    aria-label={`View ${project.title} poster fullscreen`}
                  >
                    <img
                      src={project.poster}
                      alt={`${project.title} poster`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="rounded-full bg-black/50 p-3 backdrop-blur-sm">
                        <ZoomIn className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </button>
                )}

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <div className="mb-3 h-1 w-10 rounded-full bg-primary group-hover:w-16 transition-all duration-300" />
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Tags + Star/Fork row */}
                  <div className="mt-4 flex items-start justify-between gap-2 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary${i >= 2 ? " hidden md:inline-flex" : ""}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <div className="flex items-center gap-3 text-muted-foreground shrink-0">
                        <a
                          href={`${project.github}/stargazers`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs hover:text-primary transition-colors"
                          title="Star"
                        >
                          <Star className="h-3.5 w-3.5" />
                          <span>Star</span>
                        </a>
                        <a
                          href={`${project.github}/fork`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs hover:text-primary transition-colors"
                          title="Fork"
                        >
                          <GitFork className="h-3.5 w-3.5" />
                          <span>Fork</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* View Project / View Prototype button */}
                  {(project.github || ("figma" in project && project.figma)) && (
                    <div className="mt-5">
                      <StarBorder
                        as="a"
                        href={project.github ?? ("figma" in project ? project.figma : "#")}
                        target="_blank"
                        rel="noreferrer"
                        color="#38bdf8"
                        speed="4s"
                        className="w-full"
                      >
                        <span className="flex items-center justify-center gap-2 text-sm font-medium">
                          <ExternalLink className="h-4 w-4" />
                          {"figma" in project && project.figma && !project.github
                            ? "View Prototype"
                            : "View Project"}
                        </span>
                      </StarBorder>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connecting, Learning, and Growing Together */}
        <section className="mt-12 md:mt-24">
          <div className="mb-6 md:mb-8">
            <SectionLabel title="Connecting, Learning & Growing" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Explore my insights and experiences from various industry events, certifications, workshops, hackathons, and professional meetups where I share key learnings, valuable connections, achievements, and moments that have shaped my journey in Data Analytics, AI, and UI/UX Design.
            </p>
          </div>

          {/* Highlights Wall — masonry infinite-scroll */}
          {(() => {
            const col1 = [1,4,7,10,13,16,19].map(n => `/linkedin-posts/post-${String(n).padStart(2,"0")}.jpeg`);
            const col2 = [2,5,8,11,14,17,20].map(n => `/linkedin-posts/post-${String(n).padStart(2,"0")}.jpeg`);
            const col3 = [3,6,9,12,15,18].map(n => `/linkedin-posts/post-${String(n).padStart(2,"0")}.jpeg`);

            const Column = ({ posts, duration, delay = "0s" }: { posts: string[]; duration: string; delay?: string }) => (
              <div className="flex-1 min-w-0 overflow-hidden" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
                <div
                  className="linkedin-wall-col flex flex-col gap-2 md:gap-3"
                  style={{ animation: `wallScroll ${duration} linear ${delay} infinite` }}
                >
                  {[...posts, ...posts].map((src, i) => (
                    <a
                      key={i}
                      href="https://linkedin.com/in/udhaya-prakash-v-022b22374"
                      target="_blank"
                      rel="noreferrer"
                      className="linkedin-post-card group relative block overflow-hidden rounded-xl transition-all duration-300 cursor-pointer"
                      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
                    >
                      <img
                        src={src}
                        alt={`LinkedIn post`}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            );

            return (
              <div
                className="linkedin-feed-frame relative w-full overflow-hidden rounded-[20px] transition-all duration-300"
                style={{
                  height: "clamp(280px, 50vh, 680px)",
                  background: "rgba(8, 8, 18, 0.80)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  boxShadow: "0 0 40px -10px rgba(56, 189, 248, 0.3), inset 0 0 80px rgba(0,0,0,0.4), 0 12px 50px rgba(0,0,0,0.7)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                {/* 3-column masonry wall — 2 cols on mobile */}
                <div className="flex gap-2 p-2 h-full overflow-hidden md:gap-3 md:p-3">
                  <Column posts={col1} duration="45s" delay="0s" />
                  <Column posts={col2} duration="55s" delay="-18s" />
                  <div className="hidden sm:flex flex-1 min-w-0 overflow-hidden" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
                    <div className="linkedin-wall-col flex flex-col gap-2 w-full md:gap-3" style={{ animation: `wallScroll 40s linear -8s infinite` }}>
                      {[...col3, ...col3].map((src, i) => (
                        <a key={i} href="https://linkedin.com/in/udhaya-prakash-v-022b22374" target="_blank" rel="noreferrer" className="linkedin-post-card group relative block overflow-hidden rounded-xl transition-all duration-300 cursor-pointer" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                          <img src={src} alt="LinkedIn post" className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" draggable={false} />
                          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top & bottom atmospheric fades */}
                <div className="pointer-events-none absolute top-[44px] left-0 right-0 h-12 z-10" style={{ background: "linear-gradient(to bottom, rgba(8,8,18,0.85) 0%, transparent 100%)" }} />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 z-10" style={{ background: "linear-gradient(to top, rgba(8,8,18,0.85) 0%, transparent 100%)" }} />
              </div>
            );
          })()}
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 md:mt-24">
          {/* Open for header */}
          <div className="mb-8 max-w-2xl md:mb-16">
            <h2
              className="font-display font-bold leading-tight text-foreground"
              style={{ fontSize: "clamp(1.75rem, 6vw, 4.5rem)" }}
            >
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                I'm open for
                <RotatingText
                  texts={["Networking", "Collaboration", "Suggestions"]}
                  rotationInterval={1800}
                  auto={true}
                  loop={true}
                  staggerFrom="last"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  staggerDuration={0.025}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  mainClassName="inline-flex px-3 py-1 rounded-lg bg-cyan-400 text-black font-semibold overflow-hidden"
                  splitLevelClassName="overflow-hidden"
                />
              </span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              I appreciate your interest in connecting with me. I'm excited to explore new opportunities, receive feedback, collaborate on projects, and broaden my network.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For any specific questions or comments, please don't hesitate to contact me directly at{" "}
              <a href="mailto:udhayaprakashv.24@gmail.com" className="text-sky-400 hover:text-cyan-300 transition-colors duration-200 font-medium break-all sm:break-normal">
                udhayaprakashv.24@gmail.com
              </a>
              . I strive to respond to all messages within 24 hours, although it may take a bit longer during busy periods.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If you prefer social media, you can also find me on Instagram at{" "}
              <a href="https://instagram.com/the_usos_boy" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-cyan-300 transition-colors duration-200 font-medium">
                @the_usos_boy
              </a>
              .
            </p>
          </div>

          {/* Contact card */}
          <div
            className="w-full rounded-3xl p-5 sm:p-8 md:p-12"
            style={{
              background: "rgba(8, 12, 28, 0.85)",
              border: "1px solid rgba(56, 189, 248, 0.18)",
              boxShadow: "0 0 60px -20px rgba(56, 189, 248, 0.15), 0 24px 80px rgba(0,0,0,0.6)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Card header */}
            <div className="mb-6 text-center md:mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                Keep the Connection
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">Sign up to get the latest news</p>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="mx-auto max-w-2xl" noValidate>

              {/* Success notification */}
              {formStatus === "success" && (
                <div
                  className="mb-5 flex items-start gap-3 rounded-xl px-4 py-3 text-sm sm:px-5 sm:py-4"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.35)",
                    color: "#6ee7b7",
                  }}
                  role="alert"
                >
                  <span className="mt-0.5 shrink-0 text-base">✅</span>
                  <span>
                    <strong className="block font-semibold text-emerald-400">Thank you for reaching out!</strong>
                    Your message has been received successfully. I'll get back to you within 24 hours.
                  </span>
                  <button
                    type="button"
                    onClick={() => setFormStatus("idle")}
                    className="ml-auto shrink-0 opacity-50 hover:opacity-100 transition-opacity"
                    aria-label="Dismiss"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}

              {/* Error notification */}
              {(formStatus === "error" || formError) && formStatus !== "success" && (
                <div
                  className="mb-5 flex items-start gap-3 rounded-xl px-4 py-3 text-sm sm:px-5 sm:py-4"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    color: "#fca5a5",
                  }}
                  role="alert"
                >
                  <span className="mt-0.5 shrink-0">⚠️</span>
                  <span>{formError ?? "Something went wrong. Please try again."}</span>
                  <button
                    type="button"
                    onClick={() => { setFormStatus("idle"); setFormError(null); }}
                    className="ml-auto shrink-0 opacity-50 hover:opacity-100 transition-opacity"
                    aria-label="Dismiss"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={e => { setContactEmail(e.target.value); if (formError) setFormError(null); }}
                    placeholder="Enter your email *"
                    required
                    disabled={formStatus === "submitting"}
                    aria-label="Email address"
                    className="w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-1 focus:ring-sky-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(56,189,248,0.18)",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.55)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)")}
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={contactQuery}
                    onChange={e => { setContactQuery(e.target.value); if (formError) setFormError(null); }}
                    placeholder="Enter your query *"
                    required
                    disabled={formStatus === "submitting"}
                    aria-label="Your query"
                    className="w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-1 focus:ring-sky-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(56,189,248,0.18)",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.55)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)")}
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  type="submit"
                  disabled={formStatus === "submitting" || formStatus === "success"}
                  className="relative overflow-hidden rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 sm:px-10"
                  style={{
                    background: "rgba(8,12,28,0.9)",
                    border: "1px solid rgba(56,189,248,0.55)",
                    boxShadow: formStatus === "success"
                      ? "0 0 30px rgba(34,211,238,0.6)"
                      : "0 0 18px rgba(56,189,248,0.25)",
                    minWidth: "140px",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formStatus === "submitting" ? (
                      <>
                        <span className="flex gap-1">
                          {[0,1,2].map(i => (
                            <span
                              key={i}
                              className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-bounce"
                              style={{ animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </span>
                        <span>Sending…</span>
                      </>
                    ) : formStatus === "success" ? (
                      "✓ Sent!"
                    ) : (
                      "Submit"
                    )}
                  </span>
                  <span
                    className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "radial-gradient(circle at center, rgba(56,189,248,0.12) 0%, transparent 70%)" }}
                  />
                </button>
              </div>

              <p className="mt-3 text-center font-mono text-[10px] tracking-widest text-muted-foreground/40 uppercase">
                Both fields required · Rate-limited · Stored securely
              </p>
            </form>

            {/* Divider */}
            <div className="mx-auto mt-8 max-w-2xl h-px md:mt-10" style={{ background: "linear-gradient(to right, transparent, rgba(56,189,248,0.25), transparent)" }} />

            {/* Star rating */}
            <div className="mt-6 flex flex-col items-center gap-4 md:mt-8">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Rate your experience
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                {[1,2,3,4,5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform duration-150 hover:scale-125 active:scale-95"
                    aria-label={`Rate ${star} stars`}
                  >
                    <svg
                      width="28" height="28" viewBox="0 0 24 24" fill="none"
                      stroke={(hoverRating || rating) >= star ? "#38bdf8" : "rgba(56,189,248,0.35)"}
                      strokeWidth="1.5"
                      style={{
                        filter: (hoverRating || rating) >= star ? "drop-shadow(0 0 6px rgba(56,189,248,0.7))" : "none",
                        fill: (hoverRating || rating) >= star ? "rgba(56,189,248,0.15)" : "none",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="font-mono text-[11px] text-sky-400/70 tracking-widest">
                  {["", "Poor", "Fair", "Good", "Great", "Excellent!"][rating]}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 flex flex-col items-center justify-center gap-2 border-t border-border/30 pt-8 pb-6 text-center font-mono text-xs text-muted-foreground/60 md:mt-16">
          <span className="tracking-widest uppercase">Always be caffeinated!</span>
          <span className="tracking-[0.2em]">© Udhaya Prakash V (usos_boy)</span>
        </footer>
      </div>
      <AIChat />
    </main>
  );
}

function SectionLabel({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-display tracking-wide text-foreground" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>{title}</h2>
      <div className="mt-3 h-px w-12 bg-primary md:mt-4 md:w-16" />
    </div>
  );
}
