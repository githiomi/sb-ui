import { Link } from 'react-router-dom';
import type { FC, ReactNode } from 'react';
import { StatusBadge } from '@components/StatusBadge';
import { CATEGORY_LABELS, type ComponentCategory, type ComponentStatus } from '@app/routes';

interface PageHeaderProps {
    category: ComponentCategory;
    title: string;
    description: string;
    status: ComponentStatus;
    actions?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({
    category,
    title,
    description,
    status,
    actions
}) => {
    return (
        <header className="border-b border-outline/20 bg-surface">
            <div className="mx-auto max-w-5xl px-6 py-10">
                <nav className="mb-3 flex items-center gap-1.5 text-xs text-fg-subtle">
                    <Link to="/" className="hover:text-fg-muted">
                        Playground
                    </Link>
                    <span aria-hidden>/</span>
                    <span>{CATEGORY_LABELS[category]}</span>
                    <span aria-hidden>/</span>
                    <span className="text-fg-muted">{title}</span>
                </nav>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-2 flex items-center gap-3">
                            <h1 className="text-3xl font-semibold tracking-tight text-fg">
                                {title}
                            </h1>
                            <StatusBadge status={status} />
                        </div>
                        <p className="text-base leading-relaxed text-fg-muted text-balance">
                            {description}
                        </p>
                    </div>
                    {actions ? (
                        <div className="flex items-center gap-2">{actions}</div>
                    ) : null}
                </div>
            </div>
        </header>
    );
};
