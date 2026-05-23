import type { FC } from "react";

export interface PropRow {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description: string;
}

interface PropsTableProps {
  rows: PropRow[];
}

export const PropsTable: FC<PropsTableProps> = ({ rows }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-outline/20 bg-surface">
      <table className="w-full text-left text-sm">
        <thead className="bg-neutral-800 text-xs uppercase tracking-wider text-fg">
          <tr>
            <th className="px-4 py-3 font-medium">Prop</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Default</th>
            <th className="px-4 py-3 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.name}
              className={
                idx === rows.length - 1
                  ? ""
                  : "border-b border-outline-subtle/10"
              }
            >
              <td className="px-4 py-3 align-top font-mono text-[13px] text-fg">
                <span>{row.name}</span>
                {row.required ? (
                  <span className="ml-1 text-error-500" aria-label="required">
                    *
                  </span>
                ) : null}
              </td>
              <td className="px-4 py-3 align-top font-mono text-[13px] text-primary-500">
                {row.type}
              </td>
              <td className="px-4 py-3 align-top font-mono text-[13px] text-fg-muted">
                {row.defaultValue ?? "—"}
              </td>
              <td className="px-4 py-3 align-top text-fg-muted">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
