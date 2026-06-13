import React, { ReactNode } from 'react';

export type TableSelectMode = 'single' | 'multiple';

export interface TableProps {
    id: string;
    className?: string;
    headerClassName?: string;
    colClassName?: string;
    rowClassName?: string;
    variant?: 'default' | 'striped' | 'bordered' | 'borderless' | 'compact';
    hover?: boolean;
    shadowOnHover?: 'none' | 'small' | 'medium' | 'large';
    pagination?: boolean;
    pageSize?: number;
    stickyHeader?: boolean;
    stickyColumn?: boolean;
    stickyColumnDir?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large' | 'xs';
    columns: ColumnProps[];
    data: RowData[];
    selectable?: boolean;
    selectMode?: TableSelectMode;
    width?: string;
    height?: string;
    onSelectRow?: (selectedRows: (string | number)[]) => void;
    onDeselectRow?: (deselectedRows: (string | number)[]) => void;
    onRowClick?: (rowData: PrimitiveValue | object) => void;
    emptyMessage?: string;
    headerIndex?: number;
    expandableHeader?: boolean;
    caption?: string | React.ReactNode | (() => React.ReactNode);
    headerTemplate?: string | React.ReactNode | (() => React.ReactNode);
    footerTemplate?: React.ReactNode | (() => React.ReactNode);

    // Lifted select state
    selectedRowId?: string | number | null;
    highlightRowBorder?: boolean;
}

export interface ColumnProps {
    key: string;
    title: string | React.ReactNode;
    dataIndex: string;
    colSpan?: number;
    rowSpan?: number;
    width?: string;
    fixed?: 'left' | 'right';
    onCell?: (
        rowData: RowData,
        rowIndex: number
    ) => { colSpan?: number; rowSpan?: number; [key: string]: PrimitiveValue };
    render?: (value: PrimitiveValue, rowIndex?: number | string) => React.ReactNode;
    className?: string;
    cellClassName?: string;
}

export interface RowData {
    [key: string]: PrimitiveValue;
}

export type PrimitiveValue = string | number | boolean | undefined | ReactNode;