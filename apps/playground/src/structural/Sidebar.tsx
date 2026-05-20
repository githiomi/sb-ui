import { NavLink } from "react-router-dom";
import { StatusBadge } from "../components/StatusBadge";
import {
    CATEGORY_LABELS,
    componentRoutes,
    groupByCategory,
    type ComponentCategory,
} from "../routes";

const CATEGORY_ORDER: ComponentCategory[] = [
    "atom",
    "molecule",
    "organism",
    "template",
];

export function Sidebar() {
    const grouped = groupByCategory(componentRoutes);

    return (
        <aside className="hidden h-full w-64 shrink-0 overflow-y-auto border-r border-accent bg-surface scrollbar-thin md:block">
            <div className="px-4 py-5">
                <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">
                        Library
                    </p>
                    <span className="rounded-full bg-primary-500/10 px-2 py-0.5 text-[10px] font-medium text-primary-500">
                        v1.0
                    </span>
                </div>

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `mb-4 flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                            isActive
                                ? "bg-primary-500/10 text-fg"
                                : "text-fg-muted hover:bg-neutral-300 hover:text-fg"
                        }`
                    }
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                    >
                        <path d="M3 12 12 3l9 9" />
                        <path d="M5 10v10h14V10" />
                    </svg>
                    Overview
                </NavLink>

                <nav className="flex flex-col gap-6">
                    {CATEGORY_ORDER.map((category) => {
                        const items = grouped[category];
                        if (!items.length) return null;
                        return (
                            <div key={category}>
                                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                                    {CATEGORY_LABELS[category]}
                                </p>
                                <ul className="flex flex-col gap-0.5">
                                    {items.map((route) => (
                                        <li key={route.slug}>
                                            <NavLink
                                                to={route.path}
                                                className={({ isActive }) =>
                                                    `group flex items-center justify-between gap-2 rounded-lg px-3 py-1.5 text-sm transition ${
                                                        isActive
                                                            ? "bg-primary-500/10 text-fg"
                                                            : "text-fg-muted hover:bg-neutral-300 hover:text-fg"
                                                    }`
                                                }
                                            >
                                                <span>{route.title}</span>
                                                <StatusBadge
                                                    status={route.status}
                                                />
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
