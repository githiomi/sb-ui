import type { FC } from 'react';
import type { ComponentStatus } from '@app/routes';

const STATUS_STYLES: Record<ComponentStatus, string> = {
    beta: 'bg-warning-500/25 text-white/75 ring-warning-500/30',
    stable: 'bg-success-500/25 text-white/75 ring-success-500/30',
    planned: 'bg-neutral-500/25 text-white/75 ring-neutral-500/30'
};

const STATUS_LABELS: Record<ComponentStatus, string> = {
    beta: 'Beta',
    stable: 'Stable',
    planned: 'Planned'
};

interface StatusBadgeProps {
    status: ComponentStatus;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 ring-inset ${STATUS_STYLES[status]}`}
        >
            {STATUS_LABELS[status]}
        </span>
    );
};
