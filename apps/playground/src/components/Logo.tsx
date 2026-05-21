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
                    className="grid size-7 place-items-center rounded-lg bg-brand-radial text-accent-500 shadow-elevated"
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
                        <path d="M4 4v16" />
                        <path d="M8 8v12" />
                        <path d="M12 6v14" />
                        <path d="m16 6 4 14" />
                    </svg>
                </span>
                <span className="text-fg">
                    Uniicy<span className="text-primary-500">.</span>
                    <span className="text-fg-muted font-normal">
                        playground
                    </span>
                </span>
            </span>
        </div>
    );
};
