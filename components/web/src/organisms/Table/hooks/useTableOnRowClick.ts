import { useState } from 'react';
import { PrimitiveValue, TableSelectMode } from './../Table.types';

interface Props {
    selectMode: TableSelectMode;
    onRowClick?: (rowData: PrimitiveValue | object) => void;
    onSelectRow?: (selectedRows: (string | number)[]) => void;
    onDeselectRow?: (deselectedRows: (string | number)[]) => void;
    highlightRowBorder?: boolean;
}

export const useTableOnRowClick = ({
    selectMode,
    onRowClick,
    onSelectRow,
    onDeselectRow,
    highlightRowBorder
}: Props) => {
    const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

    const handleOnRowClick = (rowData: PrimitiveValue | object, index: number) => {
        if (highlightRowBorder) {
            if (selectMode === 'single') {
                setSelectedRows(index === selectedRows[0] ? [] : [index]);
            }

            if (selectMode === 'multiple') {
                setSelectedRows((prevSelected) =>
                    prevSelected.includes(index)
                        ? prevSelected.filter((key) => key !== index)
                        : [...prevSelected, index]
                );
            }
        }

        if (onRowClick) {
            onRowClick(rowData);
        }
        if (selectedRows.length > 0 && onSelectRow) {
            onSelectRow(selectedRows);
        }
        if (onDeselectRow && selectedRows.length === 0) {
            onDeselectRow(selectedRows);
        }
    };

    return { selectedRows, handleOnRowClick };
};