import type { FC } from "react";
import type { ComponentStatus } from "../routes";

const STATUS_STYLES: Record<ComponentStatus, string> = {
  stable: "bg-success-500/15 text-success-600 ring-success-500/30",
  beta: "bg-warning-500/15 text-warning-600 ring-warning-500/30",
  planned: "bg-neutral-500/15 text-fg-muted ring-neutral-500/30",
};

const STATUS_LABELS: Record<ComponentStatus, string> = {
  stable: "Stable",
  beta: "Beta",
  planned: "Planned",
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
