import { cn } from '@uniicy/libs';
import React, { useMemo } from 'react';
import { RowData, TableProps } from './Table.types';
import { AnimatePresence, motion } from 'motion/react';
import { useTableOnRowClick, useTablePageControl } from './hooks';

export const Table: React.FC<TableProps> = ({
    id,
    headerIndex,
    className = '',
    headerClassName = '',
    colClassName = '',
    rowClassName = '',
    variant = 'default',
    hover = false,
    shadowOnHover = 'none',
    pagination = false,
    pageSize = 10,
    stickyHeader = false,
    stickyColumn = false,
    size = 'medium',
    columns,
    data,
    width,
    height,
    selectable = false,
    selectMode = 'single',
    emptyMessage,
    onSelectRow,
    onDeselectRow,
    onRowClick,
    headerTemplate,
    caption,
    footerTemplate,
    expandableHeader = true,
    // Lifted select state
    selectedRowId,
    highlightRowBorder
}) => {
    const { selectedRows, handleOnRowClick } = useTableOnRowClick({
        selectMode,
        onSelectRow,
        onRowClick,
        onDeselectRow,
        highlightRowBorder
    });

    const tableClasses = cn(
        'table ',
        {
            'table--hover  transition duration-200 ease-in-out': hover,
            'shadow-none': shadowOnHover === 'none',
            'shadow-sm': shadowOnHover === 'small',
            'shadow-md': shadowOnHover === 'medium',
            'shadow-lg': shadowOnHover === 'large',
            'table--sticky-header': stickyHeader,
            'table--sticky-column': stickyColumn,
            'table--small': size === 'small',
            'table--medium': size === 'medium',
            'table--large': size === 'large',
            'table--xs': size === 'xs',
            'table--default': variant === 'default',
            'table--striped': variant === 'striped',
            'table--bordered ': variant === 'bordered',
            'table--borderless': variant === 'borderless',
            'table--compact': variant === 'compact',
            'table--selectable': selectable,
            'table--selected': selectedRows.length > 0,
            'table--deselected': selectedRows.length === 0
        },
        className
    );

    const { handlePrevPage, currentPage, currentPageSize, handleNextPage, handlePageSizeChange } =
        useTablePageControl({
            totalPages: Math.ceil(data.length / pageSize),
            pageSize: pageSize
        });

    const totalPages = Math.ceil(data.length / currentPageSize);

    const indexOfLastRow = currentPage * currentPageSize;
    const indexOfFirstRow = indexOfLastRow - currentPageSize;
    const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

    const handleRowKeyDown = (
        e: React.KeyboardEvent<HTMLTableRowElement>,
        rowData: RowData,
        rowIndex: number
    ) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleOnRowClick(rowData, rowIndex);
        }
    };

    const renderTableHead = () => {
        return (
            <thead>
            {headerTemplate && headerIndex !== undefined && headerIndex !== 1 && (
                <tr className="header-caption">
                    {typeof headerTemplate === 'function' ? headerTemplate() : headerTemplate}
                </tr>
            )}
            <AnimatePresence initial={false}>
                {expandableHeader && (
                    <motion.tr
                        key="header-row"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.15,
                            ease: [0.3, 0.6, 0.3, 1]
                        }}
                        layout
                        className={cn(rowClassName, 'table_head_row overflow-hidden')}
                    >
                        {columns.map((col) => {
                            const colClassname = cn(
                                {
                                    [`table--sticky-column-${col.fixed}`]: stickyColumn && col.fixed
                                },
                                headerClassName,
                                colClassName,
                                col.className
                            );

                            return col.colSpan !== 0 ? (
                                <th
                                    key={`th-${col.key}`}
                                    style={{ width: col.width }}
                                    className={colClassname}
                                    colSpan={col.colSpan || 1}
                                    rowSpan={col.rowSpan || 1}
                                >
                                    {col.title}
                                </th>
                            ) : null;
                        })}
                    </motion.tr>
                )}
            </AnimatePresence>
            </thead>
        );
    };

    const renderTableBody = useMemo(() => {
        if (!currentData || currentData.length === 0) {
            return (
                <tbody>
                <tr>
                    <td colSpan={columns.length} className="text-center">
                        {emptyMessage ? emptyMessage : 'No data available'}
                    </td>
                </tr>
                </tbody>
            );
        }

        return (
            <tbody>
            {currentData.map((rowData: RowData, rowIndex: number) => (
                <tr
                    key={`tr-${rowIndex}`}
                    tabIndex={selectable ? 0 : undefined}
                    aria-selected={selectedRows.includes(rowIndex)}
                    aria-disabled={!selectable}
                    onKeyDown={(e) => handleRowKeyDown(e, rowData, rowIndex)}
                    onClick={selectable ? () => handleOnRowClick(rowData, rowIndex) : undefined}
                    className={cn(
                        {
                            'row--clickable': selectable,
                            'row--selected':
                                selectedRows.includes(rowIndex) ||
                                (selectable && selectedRowId && selectedRowId === rowData.id)
                        },
                        `row_${rowData.id}`,
                        rowClassName
                    )}
                >
                    {columns.map((col, index) => {
                        const colClassnames = cn(
                            {
                                [`table--sticky-column-${col.fixed}`]: stickyColumn && col.fixed
                            },
                            colClassName,
                            col.className
                        );
                        const cellProps = col.onCell ? col.onCell(rowData, rowIndex) : {};

                        return (
                            <td
                                key={`td-${index}`}
                                className={cn(col.cellClassName, colClassnames)}
                                {...cellProps}
                            >
                                {col.render
                                    ? col.render(rowData[col.dataIndex], rowIndex)
                                    : rowData[col.dataIndex]}
                            </td>
                        );
                    })}
                </tr>
            ))}
            </tbody>
        );
    }, [currentData, selectedRows]);

    const renderPagination = () => {
        if (!pagination) return null;

        console.log('currentPage', currentPage);
        console.log('currentPageSize', currentPageSize);

        return (
            <div className="paginator-wrapper m-2 flex flex-row-reverse">
                <nav className="paginator-controls" aria-label="Pagination">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className=""
                        aria-label="Previous Page"
                    >
                        Prev
                    </button>
                    <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className=""
                        aria-label="Next Page"
                    >
                        Next
                    </button>
                </nav>

                <div className="page-size-selector mx-4 mt-1">
                    <label htmlFor="page-size" className="mx-3">
                        Items per page:
                    </label>
                    <select
                        id="page-size"
                        value={currentPageSize}
                        className="page-size-select"
                        onChange={(e) => handlePageSizeChange(e.target.value)}
                    >
                        {[10, 20, 50, 100].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    };

    return (
        <div
            id={id}
            data-testid={id}
            className={`table-container ${variant} ${size} ${className} `}
            style={{ width, height }}
        >
            <table className={tableClasses}>
                {caption && <caption>{typeof caption === 'function' ? caption() : caption}</caption>}
                {renderTableHead()}
                {renderTableBody}
            </table>
            {footerTemplate && (
                <div className="table-footer">
                    {typeof footerTemplate === 'function' ? footerTemplate() : footerTemplate}
                </div>
            )}

            {renderPagination()}
        </div>
    );
};

export default Table;