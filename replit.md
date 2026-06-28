# Portfolio 2026 — Udhaya Prakash V

A personal portfolio website for Udhaya Prakash V, a B.Tech student in Artificial Intelligence & Data Science. Showcases skills in Data Analytics and UI/UX Design, along with internship experience, projects, and social links.

## Tech Stack

- **Framework:** TanStack Start (full-stack React with SSR)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **Animations:** Motion (Framer Motion)
- **Build/Runtime:** Vite + Bun
- **Routing:** TanStack Router (file-based)

## Running the App

```bash
bun run dev
```

The app runs on port 5000.

## Project Structure

- `src/routes/` — File-based routes (`index.tsx` is the main portfolio page)
- `src/components/` — UI components (Shadcn/ui + custom)
- `src/lib/` — Utility functions and error handling
- `public/` — Static assets (posters, images)

## Notes

- The hero portrait image (`udhaya-portrait-nobg.png`) was originally hosted on Lovable's CDN. Upload your portrait image to the `public/` folder and update `portrait.url` in `src/routes/index.tsx`.
- No authentication or external API integrations are used.

## User Preferences

- Use Bun as the package manager (not npm/yarn).
