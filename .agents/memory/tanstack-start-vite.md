---
name: TanStack Start Vite Config
description: Correct plugin order for tanstackStart + react in vite.config.ts to avoid HMR/React Refresh conflicts
---

The correct vite.config.ts plugin order for this project is:

```ts
plugins: [
  tsconfigPaths(),
  tailwindcss(),
  tanstackStart({ server: { entry: "src/server.ts" } }),
  react(),
]
```

**Why:** `tanstackStart` from `@tanstack/react-start/plugin/vite` already handles router code splitting and SSR. Adding `TanStackRouterVite` separately causes duplicate HMR plugin registration and a "Duplicate declaration 'hot'" error. The `react()` plugin must come AFTER `tanstackStart` so React Refresh is injected correctly without conflict.

**How to apply:** Any time the vite config is modified, keep this order. Do not add `TanStackRouterVite` separately — it is included inside `tanstackStart`.
