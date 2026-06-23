import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import portrait from "@/assets/udhaya-portrait-nobg.png.asset.json";
import {
  Phone, Mail, Linkedin, Github, Twitter, Instagram,
  BarChart3, Database, Palette, Brain, Star, GitFork, ExternalLink, X, ZoomIn,
} from "lucide-react";
import StarBorder from "@/components/StarBorder";

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
  { icon: Twitter, label: "x.com/VUdhaya63542", href: "https://x.com/VUdhaya63542" },
  { icon: Instagram, label: "instagram.com/the_usos_boy", href: "https://instagram.com/the_usos_boy" },
];

function Portfolio() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [contactEmail, setContactEmail] = useState("");
  const [contactQuery, setContactQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setContactEmail("");
    setContactQuery("");
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

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-16">
        {/* Header */}
        <header className="mb-12 flex items-center justify-between border-b border-border/40 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-foreground font-semibold">
              UPV
            </span>
          </div>
          <div className="flex items-center gap-4">
            {contacts.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 items-center">
          <div className="relative md:col-span-6">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-transparent blur-2xl" aria-hidden />
            <div className="relative">
              <img
                src={portrait.url}
                alt="Portrait of Udhaya Prakash V"
                className="aspect-[4/5] w-full object-contain scale-105 transition-transform duration-500 hover:scale-110"
              />
              <p className="absolute bottom-4 left-0 right-0 text-center font-display text-2xl uppercase tracking-[0.8em] pl-[0.8em] text-foreground md:text-3xl">
                PORTFOLIO
              </p>
            </div>
          </div>


          <div className="flex flex-col justify-center md:col-span-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-primary">
              {"\n"}
            </p>
            <h1 className="font-display text-6xl leading-[0.95] tracking-tight text-foreground md:text-8xl">
              UDHAYA
              <br />
              PRAKASH <span className="text-primary">V</span>
            </h1>
            <div className="mt-6 h-px w-24 bg-primary" />
            <p className="mt-6 max-w-lg text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground md:text-base">
              Data Analytics <span className="text-primary">·</span> UI/UX Designer
            </p>
          </div>
        </section>

        {/* About */}
        <section className="mt-24">
          <div className="mb-8">
            <SectionLabel title="About Me" />
          </div>
          <div className="max-w-4xl">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 border-l-2 border-primary/60 pl-4 font-light">
                B.Tech student in Artificial Intelligence & Data Science. Turning raw data into clear stories and crafting interfaces that make those stories feel effortless.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground pl-4">
                Passionate about Data Analytics and UI/UX Design, blending structured scientific inquiry with intuitive digital aesthetics. Skilled in Python, SQL, Excel, Power BI, Tableau, and Figma. I focus on bridging the gap between numbers and human experiences to build recruiter-friendly systems and high-impact designs.
              </p>
            </div>
          </div>
        </section>

        {/* Core Skills */}
        <section className="mt-24">
          <div className="mb-8">
            <SectionLabel title="Core Skills" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {skills.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 backdrop-blur transition hover:border-primary/60 hover:bg-card hover:shadow-[0_0_30px_-10px_var(--color-primary)]"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground/90">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-24">
          <div className="mb-8">
            <SectionLabel title="Experience" />
          </div>
          <div className="max-w-4xl">
            <div className="relative border-l border-border/60 pl-8 ml-4 space-y-12">
              {/* Timeline Node */}
              <div className="relative">
                {/* Bullet node on the left line */}
                <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                
                {/* Content Card */}
                <div className="group rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-primary/60 hover:bg-card hover:shadow-[0_0_30px_-10px_var(--color-primary)]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      {/* Logo placeholder - stylized logo representing White & Box */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary font-display font-bold text-lg shadow-[0_0_15px_-5px_var(--color-primary)]">
                        WB
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">UI/UX Design Intern</h3>
                        <p className="text-sm font-semibold text-primary mt-1">
                          White and Box – Tech Products & Services | Bengaluru, Karnataka
                        </p>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">
                          Dec 2025 – Jan 2026
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-3">
                    White and Box is a technology company providing innovative digital products and services in the tech industry. During my internship as a UI/UX Design Intern, I contributed to designing user-centered digital experiences, improving interface usability, and creating visually engaging designs for web and mobile platforms.
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-4 text-sm text-foreground/85">
                    {[
                      "Assisted in user research, wireframing, and prototype development for web and mobile applications.",
                      "Created intuitive and visually appealing user interface designs using Figma and design systems.",
                      "Collaborated with developers and product teams to ensure seamless implementation of design solutions.",
                      "Improved user experience by analyzing user behavior and identifying usability issues.",
                      "Supported the creation of responsive layouts, design documentation, and interactive prototypes.",
                      "Followed industry-standard UI/UX principles, accessibility guidelines, and design best practices as part of the internship program."
                    ].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* MAKE Labs */}
              <div className="relative">
                <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>

                <div className="group rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-primary/60 hover:bg-card hover:shadow-[0_0_30px_-10px_var(--color-primary)]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary font-display font-bold text-lg shadow-[0_0_15px_-5px_var(--color-primary)]">
                        ML
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">UI/UX Design Intern</h3>
                        <p className="text-sm font-semibold text-primary mt-1">
                          MAKE Labs | Krishnagiri & Bengaluru
                        </p>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">
                          Add Your Internship Period
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-3">
                    MAKE Labs is a technology startup specializing in web design, product development, research and development, robotics, and innovative technology solutions. I worked as a UI/UX Design Intern, contributing to the design and development of user-friendly digital experiences for web and mobile platforms.
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-4 text-sm text-foreground/85">
                    {[
                      "Assisted in designing intuitive and visually appealing user interfaces for websites and digital products.",
                      "Created wireframes, user flows, and interactive prototypes to enhance user experience and usability.",
                      "Collaborated with development and design teams to ensure seamless implementation of design concepts.",
                      "Conducted user research and analyzed feedback to improve interface functionality and accessibility.",
                      "Designed responsive layouts, landing pages, and branding materials while maintaining visual consistency.",
                      "Followed modern UI/UX design principles, design system standards, and user-centered design practices throughout the internship."
                    ].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-24">
          <div className="mb-8">
            <SectionLabel title="Projects" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    {/* Scaled iframe showing actual Figma first frame */}
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

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Hover overlay */}
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
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-4 h-1 w-10 rounded-full bg-primary group-hover:w-16 transition-all duration-300" />
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags + Star/Fork row */}
                  <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 font-mono text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <div className="flex items-center gap-3 text-muted-foreground">
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
                    <div className="mt-6">
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
        <section className="mt-24">
          <div className="mb-8">
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
                  className="linkedin-wall-col flex flex-col gap-3"
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
                  height: "680px",
                  background: "rgba(8, 8, 18, 0.80)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  boxShadow: "0 0 40px -10px rgba(56, 189, 248, 0.3), inset 0 0 80px rgba(0,0,0,0.4), 0 12px 50px rgba(0,0,0,0.7)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                {/* 3-column masonry wall */}
                <div className="flex gap-3 p-3 h-full overflow-hidden">
                  <Column posts={col1} duration="45s" delay="0s" />
                  <Column posts={col2} duration="55s" delay="-18s" />
                  <Column posts={col3} duration="40s" delay="-8s" />
                </div>

                {/* Top & bottom atmospheric fades */}
                <div className="pointer-events-none absolute top-[44px] left-0 right-0 h-12 z-10" style={{ background: "linear-gradient(to bottom, rgba(8,8,18,0.85) 0%, transparent 100%)" }} />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 z-10" style={{ background: "linear-gradient(to top, rgba(8,8,18,0.85) 0%, transparent 100%)" }} />
              </div>
            );
          })()}
        </section>

        {/* Contact */}
        <section className="mt-24">
          {/* Open for header */}
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-sky-400/70 uppercase">— Let's Connect</p>
            <h2 className="font-display text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              I'm open for
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              I appreciate your interest in connecting with me. I'm excited to explore new opportunities, receive feedback, collaborate on projects, and broaden my network.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For any specific questions or comments, please don't hesitate to contact me directly at{" "}
              <a href="mailto:udhayaprakashv.24@gmail.com" className="text-sky-400 hover:text-cyan-300 transition-colors duration-200 font-medium">
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
            className="w-full rounded-3xl p-8 md:p-12"
            style={{
              background: "rgba(8, 12, 28, 0.85)",
              border: "1px solid rgba(56, 189, 248, 0.18)",
              boxShadow: "0 0 60px -20px rgba(56, 189, 248, 0.15), 0 24px 80px rgba(0,0,0,0.6)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Card header */}
            <div className="mb-8 text-center">
              <h3 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Keep the Connection
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">Sign up to get the latest news</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-1 focus:ring-sky-400/50"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(56,189,248,0.18)",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.55)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)")}
                />
                <input
                  type="text"
                  value={contactQuery}
                  onChange={e => setContactQuery(e.target.value)}
                  placeholder="Enter your query"
                  className="flex-1 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-1 focus:ring-sky-400/50"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(56,189,248,0.18)",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.55)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)")}
                />
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  type="submit"
                  className="relative overflow-hidden rounded-full px-10 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: "rgba(8,12,28,0.9)",
                    border: "1px solid rgba(56,189,248,0.55)",
                    boxShadow: submitted
                      ? "0 0 30px rgba(34,211,238,0.6)"
                      : "0 0 18px rgba(56,189,248,0.25)",
                  }}
                >
                  <span className="relative z-10">
                    {submitted ? "✓ Message Sent!" : "Submit"}
                  </span>
                  <span
                    className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "radial-gradient(circle at center, rgba(56,189,248,0.12) 0%, transparent 70%)" }}
                  />
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mx-auto mt-10 max-w-2xl h-px" style={{ background: "linear-gradient(to right, transparent, rgba(56,189,248,0.25), transparent)" }} />

            {/* Star rating */}
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Rate your experience
              </p>
              <div className="flex items-center gap-2">
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
        <footer className="mt-16 flex flex-col items-center justify-center gap-2 border-t border-border/30 pt-8 pb-6 text-center font-mono text-xs text-muted-foreground/60">
          <span className="tracking-widest uppercase">Always be caffeinated!</span>
          <span className="tracking-[0.2em]">© Udhaya Prakash V (usos_boy)</span>
        </footer>
      </div>
    </main>
  );
}

function SectionLabel({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-display text-4xl tracking-wide text-foreground md:text-5xl">{title}</h2>
      <div className="mt-4 h-px w-16 bg-primary" />
    </div>
  );
}
