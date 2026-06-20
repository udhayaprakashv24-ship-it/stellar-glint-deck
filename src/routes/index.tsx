import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/udhaya-portrait-nobg.png.asset.json";
import {
  Phone, Mail, Linkedin, Github, Twitter, Instagram,
  BarChart3, Database, Palette, Brain,
} from "lucide-react";

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

const proficiency = [
  { name: "Python", value: 90 },
  { name: "Excel", value: 90 },
  { name: "SQL", value: 85 },
  { name: "Power BI", value: 85 },
  { name: "Tableau", value: 80 },
  { name: "Figma", value: 75 },
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
            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {"\n"}
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {"\n"}
          </span>
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
              <p className="absolute bottom-4 left-0 right-0 text-center font-display text-2xl uppercase tracking-[0.4em] text-foreground md:text-3xl">
                Portfolio
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
        <section className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="01" title="About Me" />
          </div>
          <div className="md:col-span-8">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 border-l-2 border-primary/60 pl-4 font-light">
                B.Tech student in Artificial Intelligence & Data Science. Turning raw data into clear stories and crafting interfaces that make those stories feel effortless.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground pl-4">
                Passionate about Data Analytics and UI/UX Design, blending structured scientific inquiry with intuitive digital aesthetics. Skilled in Python, SQL, Excel, Power BI, Tableau, and Figma. I focus on bridging the gap between numbers and human experiences to build recruiter-friendly systems and high-impact designs.
              </p>
            </div>
          </div>
        </section>

        {/* Core Skills */}
        <section className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="02" title="Core Skills" />
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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
          </div>
        </section>

        {/* Tools & Proficiency */}
        <section className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="03" title="Tools & Proficiency" />
          </div>
          <div className="md:col-span-8 space-y-5">
            {proficiency.map(({ name, value }) => (
              <div key={name}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wider text-foreground">{name}</span>
                  <span className="font-mono text-sm text-primary">{value}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-[0_0_12px_var(--color-primary)]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="04" title="Contact" />
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contacts.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 backdrop-blur transition hover:border-primary/60 hover:bg-card"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="truncate text-sm text-foreground/90">{label}</span>
                </a>
              ))}
            </div>
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

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="sticky top-8">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{index}</div>
      <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground md:text-5xl">{title}</h2>
      <div className="mt-4 h-px w-16 bg-primary" />
    </div>
  );
}
