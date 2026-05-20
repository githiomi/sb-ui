import type { FC, ReactNode } from "react";

interface VariantSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  fullBleed?: boolean;
}

/**
 * Shared "showcase block" used by every component page. Renders a section
 * heading + description on the left, and a bordered preview surface on
 * the right. The preview gets a subtle checker-like background so light
 * components are still legible.
 */
export const VariantSection: FC<VariantSectionProps> = ({
  title,
  description,
  children,
  fullBleed = false,
}) => {
  return (
    <section className="border-b border-outline last:border-b-0">
      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-10 md:grid-cols-[220px,1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-fg-subtle">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              {description}
            </p>
          ) : null}
        </div>
        <div
          className={`overflow-hidden rounded-2xl border border-outline bg-canvas shadow-soft ${
            fullBleed ? "" : "p-6"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
