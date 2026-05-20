import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CATEGORY_LABELS,
  componentRoutes,
  groupByCategory,
  type ComponentCategory,
} from "../routes";
import { StatusBadge } from "../components/StatusBadge";

const FEATURES = [
  {
    title: "Tokenized by design",
    description:
      "Every component reads from the shared `@uniicy/assets` token set so theming stays consistent across web and mobile.",
    icon: (
      <path d="M12 2l9 4.5v11L12 22 3 17.5v-11L12 2zm0 2.18L4.94 7.5 12 11l7.06-3.5L12 4.18zm-8 5.07v8l7 3.5v-8l-7-3.5zm16 0l-7 3.5v8l7-3.5v-8z" />
    ),
  },
  {
    title: "Atomic & composable",
    description:
      "Atoms, molecules, organisms — small APIs that compose into bigger product surfaces without surprises.",
    icon: (
      <path d="M12 2a3 3 0 1 1-2.83 4H7a2 2 0 0 0-2 2v2.17A3 3 0 1 1 5 16.83V19a2 2 0 0 0 2 2h2.17A3 3 0 1 1 14.83 21H17a2 2 0 0 0 2-2v-2.17A3 3 0 1 1 19 7.17V5a2 2 0 0 0-2-2h-2.17A3 3 0 0 1 12 2z" />
    ),
  },
  {
    title: "Sports-betting native",
    description:
      "Dense layouts, live data states, and odds-friendly affordances are first-class — not afterthoughts.",
    icon: (
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    ),
  },
  {
    title: "Themeable in two lines",
    description:
      "Pull in `ui-web/styles.css` and the Tailwind preset, then style with `bg-surface`, `text-brand`, and friends.",
    icon: (
      <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" />
    ),
  },
];

const CATEGORY_ORDER: ComponentCategory[] = [
  "atom",
  "molecule",
  "organism",
  "template",
];

export function LandingPage() {
  const [query, setQuery] = useState("");

  const filteredRoutes = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return componentRoutes;
    return componentRoutes.filter(
      (route) =>
        route.title.toLowerCase().includes(q) ||
        route.description.toLowerCase().includes(q) ||
        route.category.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(
    () => groupByCategory(filteredRoutes),
    [filteredRoutes]
  );

  const totalCount = componentRoutes.length;

  return (
    <div className="bg-canvas">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-radial">
        <div
          aria-hidden
          className="absolute inset-0 bg-brand-mesh opacity-90"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-500 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Uniicy Component Playground
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
            The interactive lab for{" "}
            <span className="text-accent-500">Uniicy</span> UI components.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg text-balance">
            A live workbench for building, previewing and stress-testing the
            atoms, molecules and organisms that power the Uniicy sports-betting
            experience. Pick a component on the left to see every variant in
            isolation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/components/text-area"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent-500 px-5 text-sm font-semibold text-primary-700 transition hover:bg-accent-400"
            >
              Browse components
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://github.com/githiomi/sb-ui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="h-4 w-4"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56 4.56-1.53 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              View on GitHub
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8 text-white">
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">
                Components
              </dt>
              <dd className="mt-1 text-2xl font-semibold">{totalCount}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">
                Theme modes
              </dt>
              <dd className="mt-1 text-2xl font-semibold">Light · Dark</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">
                Tokens
              </dt>
              <dd className="mt-1 text-2xl font-semibold">@uniicy/assets</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-outline bg-surface">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-500/10 text-primary-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  {feature.icon}
                </svg>
              </span>
              <h3 className="text-base font-semibold text-fg">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-fg-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
                Component catalog
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                Browse every Uniicy primitive
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                Each card opens a dedicated page where the component is rendered
                in isolation across its supported states and variants.
              </p>
            </div>
            <label className="relative block w-full sm:w-72">
              <span className="sr-only">Search components</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="search"
                placeholder="Search components"
                className="h-10 w-full rounded-lg border border-outline bg-surface pl-9 pr-3 text-sm text-fg placeholder:text-fg-subtle focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              />
            </label>
          </div>

          {filteredRoutes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-outline bg-surface px-6 py-12 text-center">
              <p className="text-sm text-fg-muted">
                No components match{" "}
                <span className="font-mono text-fg">"{query}"</span>.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {CATEGORY_ORDER.map((category) => {
                const items = grouped[category];
                if (!items.length) return null;
                return (
                  <div key={category}>
                    <div className="mb-4 flex items-baseline gap-3">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-fg-subtle">
                        {CATEGORY_LABELS[category]}
                      </h3>
                      <span className="text-xs text-fg-subtle">
                        {items.length} component{items.length === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((route) => (
                        <Link
                          key={route.slug}
                          to={route.path}
                          className="group flex flex-col gap-3 rounded-2xl border border-outline bg-surface p-5 transition hover:-translate-y-0.5 hover:border-primary-500/40 hover:shadow-elevated"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                              {CATEGORY_LABELS[route.category].slice(0, -1)}
                            </span>
                            <StatusBadge status={route.status} />
                          </div>
                          <h4 className="text-lg font-semibold tracking-tight text-fg">
                            {route.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-fg-muted">
                            {route.description}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary-500 transition group-hover:gap-2">
                            Open page
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-outline bg-surface">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            Built with React, Vite & Tailwind. Tokens from{" "}
            <span className="font-mono text-fg-muted">@uniicy/assets</span>.
          </p>
          <p>© {new Date().getFullYear()} Uniicy. Internal playground.</p>
        </div>
      </footer>
    </div>
  );
}
