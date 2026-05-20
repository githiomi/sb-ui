import type { FC } from "react";

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <span className="flex items-center gap-2 font-semibold tracking-tight">
        <span
          aria-hidden
          className="grid h-7 w-7 place-items-center rounded-lg bg-brand-radial text-accent-500 shadow-elevated"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M4 7v6a8 8 0 0 0 16 0V7" />
            <path d="M4 7h16" />
          </svg>
        </span>
        <span className="text-fg">
          Uniicy<span className="text-primary-500">.</span>
          <span className="text-fg-muted font-normal">playground</span>
        </span>
      </span>
    </div>
  );
};
