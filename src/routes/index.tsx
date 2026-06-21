import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/udhaya-portrait-nobg.png.asset.json";
import {
  Phone, Mail, Linkedin, Github, Twitter, Instagram,
  BarChart3, Database, Palette, Brain, Star, GitFork, ExternalLink,
} from "lucide-react";
import StarBorder from "@/components/StarBorder";

const projects = [
  {
    title: "Food Waste System",
    description: "An AI-based smart system designed to reduce food waste by leveraging technology to monitor, predict, and optimize food usage across supply chains and households.",
    tags: ["AI", "Smart System", "Sustainability"],
    github: "https://github.com/udhayaprakashv24-ship-it/food-waste-sustem",
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
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
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
                className="group flex flex-col rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-primary/60 hover:bg-card hover:shadow-[0_0_30px_-10px_var(--color-primary)]"
              >
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
                  {/* Star & Fork */}
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
                </div>

                {/* View Project button */}
                <div className="mt-6">
                  <StarBorder
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    color="hsl(var(--primary))"
                    speed="4s"
                    className="w-full"
                  >
                    <span className="flex items-center justify-center gap-2 text-sm font-medium">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </span>
                  </StarBorder>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Udhaya Prakash V</span>
          <span>Designed & Built with intent</span>
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
