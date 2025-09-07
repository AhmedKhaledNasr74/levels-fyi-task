// hooks/useProductsData.ts
import { useEffect, useMemo, useState } from "react";
import type { Product } from "../interfaces/Product";
import type PaginationType from "../interfaces/Pagination";
import type { SortColumn } from "../context/ProductsContext";

const searchableFields: (keyof Product)[] = ["title", "category"];

export default function useProductsData(products: Product[]) {
    const [sortColumns, setSortColumns] = useState<SortColumn[]>([]);
    const [filter, setFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [pagination, setPagination] = useState<PaginationType>({
        page: 1,
        take: 6,
    });

    useEffect(() => {
        setPagination({ page: 1, take: 6 });
    }, [filter, searchTerm, sortColumns]);

    const sortData = (data: Product[]) => {
        if (sortColumns.length === 0) return data;

        return [...data].sort((a, b) => {
            for (const sortColumn of sortColumns) {
                const valA = a[sortColumn.field as keyof Product];
                const valB = b[sortColumn.field as keyof Product];

                let comparison = 0;

                if (typeof valA === "number" && typeof valB === "number") {
                    comparison = valA - valB;
                } else {
                    comparison = String(valA).localeCompare(String(valB));
                }

                if (comparison !== 0) {
                    return sortColumn.direction === "asc"
                        ? comparison
                        : -comparison;
                }
            }
            return 0;
        });
    };

    const filteredAndSorted = useMemo(() => {
        return sortData(
            products.filter((item) => {
                const search = searchTerm.toLowerCase();
                return (
                    item.category.includes(filter) &&
                    searchableFields.some((field) =>
                        String(item[field]).toLowerCase().includes(search)
                    )
                );
            })
        );
    }, [products, sortColumns, filter, searchTerm]);

    const paginatedData = useMemo(() => {
        return filteredAndSorted.slice(
            (pagination.page - 1) * pagination.take,
            pagination.take * pagination.page
        );
    }, [filteredAndSorted, pagination]);

    const clearSelections = () => {
        setFilter("");
        setSortColumns([]);
        setPagination({ page: 1, take: 6 });
        setSearchTerm("");
    };

    return {
        sortColumns,
        setSortColumns,
        filter,
        setFilter,
        searchTerm,
        setSearchTerm,
        pagination,
        setPagination,
        filteredAndSorted,
        paginatedData,
        clearSelections,
    };
}
