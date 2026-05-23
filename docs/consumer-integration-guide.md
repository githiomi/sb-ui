# Integrating the UI Web Component Library

This guide explains how another team can use the published React component library in a **React** (Vite, CRA, etc.) or **Next.js** app. It reflects how the library is built today (`components/web`, npm name **`ui-web`** until you publish under a different scope).

---

## What you are integrating

| Piece | Purpose |
|--------|---------|
| **JavaScript bundle** (`ui-web`) | React components (`TextArea`, `Tooltip`, …) and TypeScript types |
| **Stylesheet** (`ui-web/styles.css`) | Design tokens (CSS variables), Tailwind utilities, and component-specific CSS (animations, tooltip arrows, etc.) |
| **Tailwind preset** (`ui-web/tailwind-preset`) | Optional — lets the host app use the same color/semantic tokens (`text-fg`, `bg-surface`, …) in its own JSX |

The library is **not** “CSS-in-JS only.” Consumers should import the **pre-built stylesheet once** at the app root. Components rely on global classes and CSS variables from that file.

---

## Requirements

| Dependency | Version (peer) | Notes |
|------------|----------------|--------|
| `react` | `^19.0.0` | Required peer |
| `react-dom` | `^19.0.0` | Required peer |
| `tailwindcss` | `^3.4.0` | Optional peer — only needed if the host app uses Tailwind with the preset |

**Recommended:** TypeScript, PostCSS, and Autoprefixer in the host app if they use Tailwind v3.

---

## Before publishing (maintainers)

Complete these steps so npm consumers do not hit missing-module errors:

1. **Set the public package name** — e.g. `ui-web` or `@your-org/ui-web` (update `components/web/package.json`, remove `"private": true`).
2. **Publish satellite packages or bundle them** — The library build currently treats `@uniicy/icons` and `@uniicy/assets` as **externals**. Either:
   - Publish `@uniicy/icons` and `@uniicy/assets` to npm and list them as **dependencies** of `ui-web`, or
   - Bundle them into `ui-web` and stop externalizing them in `tsup.config.ts`.
3. **Ship the `files` field contents** — `dist/`, `tailwind.preset.ts`, `tailwind-theme.ts` (as configured in `package.json`).
4. **Run a full build** before publish:
   ```bash
   cd components/web
   bun run build          # JS + d.ts (tsup; onSuccess rebuilds styles)
   bun run build:styles   # if you need styles without a full tsup run
   ```
5. **Verify exports** — Consumers rely on:
   - `ui-web` → components
   - `ui-web/styles.css` → stylesheet
   - `ui-web/tailwind-preset` → Tailwind preset (TypeScript)

6. **Document the published name** in README (replace `ui-web` below if you use a scope).

---

## Step-by-step for consumers

### 1. Install the package

```bash
# npm
npm install ui-web

# yarn
yarn add ui-web

# pnpm
pnpm add ui-web

# bun
bun add ui-web
```

Install peers if the package manager does not do it automatically:

```bash
npm install react react-dom
```

If the host app uses the Tailwind preset for its own UI:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Also install any **documented companion packages** (e.g. `@uniicy/icons`) if they are not bundled inside `ui-web`.

---

### 2. Import the stylesheet (required)

Import **once** at the application entry so tokens and component CSS load globally.

**React (Vite) — `src/main.tsx`:**

```ts
import "ui-web/styles.css";
import "./index.css"; // your app styles after, if you need overrides
```

**Next.js App Router — `app/layout.tsx`:**

```tsx
import "ui-web/styles.css";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**Next.js Pages Router — `pages/_app.tsx`:**

```tsx
import "ui-web/styles.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Without this import, components may render unstyled (missing colors, animations, tooltip styles).

---

### 3. Use components

Import from the main entry:

```tsx
import { TextArea, Tooltip } from "ui-web";

export function NotesField() {
  const [value, setValue] = useState("");

  return (
    <TextArea
      id="notes"
      value={value}
      onChange={setValue}
      placeholder="Add a note…"
    />
  );
}
```

**Next.js App Router:** Interactive components (state, effects, event handlers) must live in a **Client Component**:

```tsx
"use client";

import { useState } from "react";
import { TextArea } from "ui-web";

export function NotesField() {
  // ...
}
```

---

### 4. Tailwind in the host app (optional but common)

Use this when the host app writes its **own** Tailwind classes using the same design tokens (`text-fg`, `bg-canvas`, `border-outline`, …).

**4a. Initialize Tailwind** (if not already):

```bash
npx tailwindcss init -p
```

**4b. Add the library preset** — `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import uiPreset from "ui-web/tailwind-preset";

export default {
  presets: [uiPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // Scan the published package so any class names referenced in app code match
    "./node_modules/ui-web/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
```

**4c. Keep app-level CSS minimal** — e.g. `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Important:** The library’s **component styles** still come from `ui-web/styles.css`. The preset does not replace that import; it aligns **your** Tailwind build with the same token names.

---

### 5. Next.js-specific configuration

**`transpilePackages`** (recommended if you see untranspiled `node_modules` errors):

```js
// next.config.js or next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui-web"],
};

export default nextConfig;
```

**App Router:** Put `"use client"` on files that import interactive components.

**Server Components:** Do not import client-only components in server files without a client boundary wrapper.

---

### 6. TypeScript

Types ship with the package (`dist/index.d.ts`). No extra `@types` package is required.

If path aliases are used in the host app, they are independent of the library — import only from `"ui-web"`.

---

### 7. Dark mode and theming

The shipped stylesheet includes:

- `:root` CSS variables (light)
- `@media (prefers-color-scheme: dark)` overrides
- `.dark` class overrides (for manual dark mode)

To force dark mode in the host app, add `class="dark"` on `<html>` or a layout wrapper and toggle it from your theme provider.

Semantic utilities (`text-fg`, `bg-surface`, `text-link`, …) read from those variables, so they track the active theme without prop drilling.

---

## Mental model: two layers of styling

```
┌─────────────────────────────────────────────────────────┐
│  Host app (React / Next.js)                             │
├─────────────────────────────────────────────────────────┤
│  1. import "ui-web/styles.css"  ← library look & feel   │
│  2. import { TextArea } from "ui-web"  ← components     │
│  3. (optional) tailwind preset  ← your own utilities     │
└─────────────────────────────────────────────────────────┘
```

- **Layer 1** — Required for library components to look correct.
- **Layer 3** — Only needed when *your* JSX uses the same Tailwind token classes.

---

## Checklist

| Step | Done? |
|------|--------|
| Install `ui-web` + `react` + `react-dom` | ☐ |
| Install companion packages if documented (`@uniicy/icons`, etc.) | ☐ |
| Import `ui-web/styles.css` at app root | ☐ |
| Use `"use client"` in Next.js for interactive usage | ☐ |
| Add `transpilePackages: ["ui-web"]` if needed | ☐ |
| (Optional) Tailwind preset + `content` includes `node_modules/ui-web/dist/**` | ☐ |
| Verify one screen in light and dark | ☐ |

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|----------------|-----|
| Unstyled / no colors | Stylesheet not imported | Add `import "ui-web/styles.css"` at root |
| `Cannot find module '@uniicy/icons'` | Icons not published / not installed | Install peer package or use a build that bundles icons |
| Tailwind classes in *your* code have no effect | Preset or `content` paths missing | Add preset and scan `node_modules/ui-web/dist` |
| Tooltip animations missing | Old or missing `styles.css` | Reinstall package; ensure latest `dist/styles.css` |
| Next.js: hooks error in Server Component | Client component boundary missing | Add `"use client"` to the file using the library |
| Types not found | Old publish without `dist/index.d.ts` | Upgrade package version |

---

## Minimal examples

### Vite + React

```tsx
// main.tsx
import "ui-web/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

```tsx
// App.tsx
import { TextArea } from "ui-web";
import { useState } from "react";

export default function App() {
  const [v, setV] = useState("");
  return <TextArea id="demo" value={v} onChange={setV} placeholder="Hello" />;
}
```

### Next.js App Router

```tsx
// app/layout.tsx
import "ui-web/styles.css";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx
import { DemoField } from "./demo-field";

export default function Page() {
  return <DemoField />;
}
```

```tsx
// app/demo-field.tsx
"use client";

import { useState } from "react";
import { TextArea } from "ui-web";

export function DemoField() {
  const [v, setV] = useState("");
  return <TextArea id="demo" value={v} onChange={setV} />;
}
```

---

## Versioning and upgrades

- Treat **minor** releases as potentially adding CSS — always import the stylesheet from the installed version after upgrades.
- If a release notes mention new peer dependencies, install them before deploying.
- Pin versions in production apps (`package.json` exact or lockfile).

---

## Summary

1. **Install** `ui-web` and React peers (and any documented satellite packages).
2. **Import** `ui-web/styles.css` once at the root.
3. **Import components** from `"ui-web"`.
4. **Next.js:** use Client Components + optional `transpilePackages`.
5. **Optional:** wire `ui-web/tailwind-preset` into the host Tailwind config if the app uses the same design tokens.

That is the full integration path for React and Next.js consumers.
