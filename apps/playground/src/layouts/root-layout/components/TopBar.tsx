import { Logo } from '@components/Logo';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '@components/ThemeToggle';

export function TopBar() {
    return (
        <header className="shrink-0 border-b border-outline/20 bg-surface/80 backdrop-blur">
            <div className="flex h-14 items-center gap-6 px-6">
                <NavLink to="/" className="shrink-0">
                    <Logo />
                </NavLink>

                <nav className="hidden items-center gap-1 text-sm md:flex">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `rounded-md px-3 py-1.5 transition ${
                                isActive
                                    ? 'bg-primary-500/10 text-fg'
                                    : 'text-fg-muted hover:bg-neutral-800 hover:text-fg'
                            }`
                        }
                    >
                        Overview
                    </NavLink>
                    <NavLink
                        to="/components/button"
                        className={({ isActive }) =>
                            `rounded-md px-3 py-1.5 transition ${
                                isActive
                                    ? 'bg-primary-500/10 text-fg'
                                    : 'text-fg-muted hover:bg-neutral-800 hover:text-fg'
                            }`
                        }
                    >
                        Components
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <a
                        href="https://github.com/githiomi/sb-ui"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden h-9 items-center gap-2 rounded-lg border border-outline/20 bg-surface px-3 text-sm text-fg-muted transition hover:border-outline-strong hover:text-fg sm:inline-flex"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden
                            className="h-4 w-4"
                        >
                            <path
                                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56 4.56-1.53 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
