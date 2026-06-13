import type { PropRow } from '@layouts/shared';

export const TableProps: PropRow[] = [
    {
        name: 'id',
        type: 'string',
        required: true,
        description: 'Unique id applied to the table element.'
    },
    {
        name: 'columns',
        type: 'ColumnProps[]',
        required: true,
        description:
            'Column definitions with `key`, `title`, `dataIndex`, and optional `render`.'
    },
    {
        name: 'data',
        type: 'RowData[]',
        required: true,
        description: 'Array of row objects keyed by each column `dataIndex`.'
    },
    {
        name: 'variant',
        type: '"default" | "striped" | "bordered" | "borderless" | "compact"',
        defaultValue: '"default"',
        description: 'Visual style preset for the table surface.'
    },
    {
        name: 'hover',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Highlights rows on hover.'
    },
    {
        name: 'pagination',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Enables built-in page controls when data exceeds `pageSize`.'
    },
    {
        name: 'pageSize',
        type: 'number',
        defaultValue: '10',
        description: 'Rows shown per page when pagination is enabled.'
    },
    {
        name: 'selectable',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Allows row selection via click.'
    },
    {
        name: 'selectMode',
        type: '"single" | "multiple"',
        defaultValue: '"single"',
        description: 'Whether one or many rows can be selected.'
    },
    {
        name: 'onRowClick',
        type: '(rowData: object) => void',
        description: 'Called when a row is clicked.'
    },
    {
        name: 'emptyMessage',
        type: 'string',
        description: 'Message shown when `data` is empty.'
    },
    {
        name: 'caption',
        type: 'string | ReactNode',
        description: 'Accessible caption rendered above the table.'
    }
];
