import { useState } from 'react';

interface Props {
    totalPages: number;
    pageSize: number;
}

export const useTablePageControl = ({ totalPages, pageSize }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageSize, setCurrentPageSize] = useState(pageSize);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageSizeChange = (value: string) => {
        const newSize = parseInt(value, 10);

        setCurrentPageSize(newSize);
        setCurrentPage(1);
    };

    return { currentPage, currentPageSize, handleNextPage, handlePrevPage, handlePageSizeChange };
};