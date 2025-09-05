import { RefreshCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import FilterDropdown from "./FilterDropdown";
import TableRow from "./TableRow";
import type { Product } from "../interfaces/Product";
import TableSearch from "./TableSearch";
import Pagination from "./Pagination";
import type PaginationType from "../interfaces/Pagination";
import TableHeader from "./TableHeader";

const COLUMNS = [
    { label: "Title", field: "title" },
    { label: "Price", field: "price" },
    { label: "Rating", field: "rating" },
    { label: "Stock", field: "stock" },
    { label: "Category", field: "category" },
];

const searchableFields: (keyof Product)[] = ["title", "category"];

type TableProps = {
    data: Product[];
};

const Table = ({ data }: TableProps) => {
    const [sortObj, setSortObj] = useState({
        field: "title",
        direction: "",
    });
    const [filter, setFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const [pagination, setPagination] = useState<PaginationType>({
        page: 1,
        take: 6,
    });

    useEffect(() => {
        // Reset to first page on filter or search change
        setPagination({ page: 1, take: 6 });
    }, [filter, searchTerm]);

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
            data.filter((item: Product) => {
                const search = searchTerm.toLowerCase();
                return (
                    item.category.includes(filter) &&
                    searchableFields.some((field) =>
                        String(item[field]).toLowerCase().includes(search)
                    )
                );
            })
        );
    }, [data, sortObj, filter, searchTerm]);

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

    return (
        <div className="p-4 bg-white mt-5  rounded-2xl border border-gray-300 flex flex-col gap-4">
            <div className="flex justify-between items-center px-1">
                <h2 className="font-medium">Products</h2>
                <div className="">
                    <div className="flex items-center gap-1">
                        <TableSearch setSearchTerm={setSearchTerm} />
                        <FilterDropdown
                            data={data}
                            filter={filter}
                            setFilter={setFilter}
                        />
                        <div
                            className="group  p-2 rounded-md border  hover:bg-gray-100 cursor-pointer text-center text-sm border-gray-200 transition-all shadow-xs hover:shadow-lg focus:shadow-noneactive:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                            onClick={clearSelections}
                        >
                            <RefreshCcw
                                size={18}
                                className="group-active:rotate-90 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto p-1">
                <table className="w-full min-w-[600px] table-fixed divide-y divide-gray-200 outline outline-gray-300 !rounded-lg ">
                    <TableHeader
                        columns={COLUMNS}
                        sortObj={sortObj}
                        setSortObj={setSortObj}
                    />

                    <tbody className="bg-white divide-y divide-gray-200 ">
                        {paginatedData.map((item) => (
                            <TableRow key={item.id} item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                setPagination={setPagination}
                pagination={pagination}
                finalPage={Math.max(
                    1,
                    Math.ceil(filteredAndSorted.length / pagination.take)
                )}
            />
        </div>
    );
};

export default Table;
