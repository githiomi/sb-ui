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
                        fill="none"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" />
                        <path d="M6 3v12a6 6 0 0 0 12 0V3" />
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
