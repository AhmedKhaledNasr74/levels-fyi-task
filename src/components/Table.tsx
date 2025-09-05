import { ArrowDown, ArrowUp, ArrowUpDown, RefreshCcw } from "lucide-react";
import { useMemo, useState } from "react";
import FilterDropdown from "./FilterDropdown";
import TableRow from "./TableRow";
import type { Product } from "../interfaces/Product";
import TableSearch from "./TableSearch";
import Pagination from "./Pagination";
import type PaginationType from "../interfaces/Pagination";

const COLUMNS = [
    { label: "Title", field: "title" },
    { label: "Price", field: "price" },
    { label: "Rating", field: "rating" },
    { label: "Stock", field: "stock" },
    { label: "Category", field: "category" },
];

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

    const sortedData = useMemo(() => {
        return sortData(
            data
                .slice(
                    (pagination.page - 1) * pagination.take,
                    pagination.take * pagination.page
                )
                .filter(
                    (item: Product) =>
                        item.category.includes(filter) &&
                        item.title
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                )
        );
    }, [data, sortObj, filter, searchTerm, pagination]);

    const clearSelections = () => {
        setFilter("");
        setSortObj({ field: "title", direction: "" });
    };

    return (
        <div className="p-4 bg-white mt-8 rounded-2xl border border-gray-300 flex flex-col gap-4">
            <div className="flex justify-between items-center pr-1">
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
            <table className="w-full table-fixed divide-y divide-gray-200 outline outline-gray-300 !rounded-lg overflow-hidden">
                <thead className="bg-gray-100  ">
                    <tr>
                        {COLUMNS.map((col) => (
                            <th
                                key={col.field}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200 !w-1/5 "
                                onClick={() =>
                                    setSortObj((prev) => ({
                                        field: col.field,
                                        direction:
                                            prev.direction == "asc"
                                                ? "desc"
                                                : "asc",
                                    }))
                                }
                            >
                                <div className="flex items-center gap-2">
                                    <h3>{col.label}</h3>
                                    {sortObj.field === col.field ? (
                                        sortObj.direction == "" ? (
                                            <ArrowUpDown size={14} />
                                        ) : sortObj.direction == "asc" ? (
                                            <ArrowUp size={14} />
                                        ) : (
                                            <ArrowDown size={14} />
                                        )
                                    ) : (
                                        <ArrowUpDown size={14} />
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                    {sortedData.map((item) => (
                        <TableRow key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
            <Pagination
                setPagination={setPagination}
                pagination={pagination}
                finalPage={Math.ceil(data.length / pagination.take)}
            />
        </div>
    );
};

export default Table;
