// hooks/useProductsData.ts
import { useEffect, useMemo, useState } from "react";
import type { Product } from "../interfaces/Product";
import type PaginationType from "../interfaces/Pagination";

const searchableFields: (keyof Product)[] = ["title", "category"];

export default function useProductsData(products: Product[]) {
    const [sortObj, setSortObj] = useState({ field: "", direction: "" });
    const [filter, setFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [pagination, setPagination] = useState<PaginationType>({
        page: 1,
        take: 6,
    });

    useEffect(() => {
        setPagination({ page: 1, take: 6 });
    }, [filter, searchTerm, sortObj]);

    const sortData = (data: Product[]) => {
        if (!sortObj.direction) return data;
        return [...data].sort((a, b) => {
            const valA = a[sortObj.field as keyof Product];
            const valB = b[sortObj.field as keyof Product];
            if (typeof valA === "number" && typeof valB === "number") {
                return sortObj.direction === "asc" ? valA - valB : valB - valA;
            }
            return sortObj.direction === "asc"
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
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
    }, [products, sortObj, filter, searchTerm]);

    const paginatedData = useMemo(() => {
        return filteredAndSorted.slice(
            (pagination.page - 1) * pagination.take,
            pagination.take * pagination.page
        );
    }, [filteredAndSorted, pagination]);

    const clearSelections = () => {
        setFilter("");
        setSortObj({ field: "title", direction: "" });
        setPagination({ page: 1, take: 6 });
        setSearchTerm("");
    };

    return {
        sortObj,
        setSortObj,
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
