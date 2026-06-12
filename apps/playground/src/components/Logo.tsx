import type { FC } from 'react';

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
                        fill="none"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 5h12" />
                        <path d="M4 12h10" />
                        <path d="M12 19h8" />
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
