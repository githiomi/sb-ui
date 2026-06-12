import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'uniicy-playground-theme';

function readInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

/**
 * The component library exposes `darkMode: "media"` for its bundled stylesheet,
 * but inside the playground we additionally honor a `.dark` class on `<html>`
 * so the toggle below can flip themes regardless of OS preference.
 */
export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => readInitialTheme());

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-outline/20 bg-surface text-fg-muted transition hover:border-outline-strong hover:text-fg"
        >
            {isDark ? (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path
                        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
            ) : (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
                </svg>
            )}
        </button>
    );
}
