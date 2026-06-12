import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <div className="grid min-h-[60vh] place-items-center px-6 py-16">
            <div className="max-w-md text-center">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary-500">
                    404
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg">
                    That component hasn't been catalogued yet.
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    The page you're looking for either doesn't exist or hasn't been wired
                    into the playground routes file yet.
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-accent-500 px-4 text-sm font-semibold text-primary-700 transition hover:bg-accent-400"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to overview
                </Link>
            </div>
        </div>
    );
}
