import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import useCtrlClick from "../hooks/useCtrlClick";
import { useProducts } from "../context/ProductsContext";

type TableHeaderProps = {
    columns: { label: string; field: string }[];
};

const TableHeader = ({ columns }: TableHeaderProps) => {
    const { isCtrl } = useCtrlClick();
    const { sortColumns, setSortColumns } = useProducts();

    const handleSort = (field: string) => {
        setSortColumns((prevSortColumns) => {
            const existingIndex = prevSortColumns.findIndex(
                (col) => col.field === field
            );

            if (isCtrl) {
                if (existingIndex >= 0) {
                    const existingSort = prevSortColumns[existingIndex];
                    if (existingSort.direction === "asc") {
                        // Change to desc
                        const newSortColumns = [...prevSortColumns];
                        newSortColumns[existingIndex] = {
                            field,
                            direction: "desc",
                        };
                        return newSortColumns;
                    } else {
                        // Remove this sort column
                        return prevSortColumns.filter(
                            (col) => col.field !== field
                        );
                    }
                } else {
                    // Add new sort column as asc
                    return [
                        ...prevSortColumns,
                        { field, direction: "asc" as const },
                    ];
                }
            } else {
                if (existingIndex >= 0 && prevSortColumns.length === 1) {
                    const currentSort = prevSortColumns[0];
                    if (currentSort.direction === "asc") {
                        return [{ field, direction: "desc" as const }];
                    } else {
                        return [];
                    }
                } else {
                    return [{ field, direction: "asc" as const }];
                }
            }
        });
    };

    const getSortInfo = (field: string) => {
        const sortColumn = sortColumns.find((col) => col.field === field);
        const sortIndex = sortColumns.findIndex((col) => col.field === field);
        return { sortColumn, sortIndex };
    };

    return (
        <thead className="bg-gray-100  ">
            <tr>
                {columns.map((col) => {
                    const { sortColumn, sortIndex } = getSortInfo(col.field);
                    const isActive = sortColumn !== undefined;

                    return (
                        <th
                            key={col.field}
                            scope="col"
                            className={`px-6 py-3 text-left text-xs font-medium text-gray-600 hover:text-gray-800 uppercase tracking-wider cursor-pointer hover:bg-gray-200 !w-1/5 relative ${
                                isActive && "bg-gray-200 text-gray-800"
                            }`}
                            onClick={() => handleSort(col.field)}
                        >
                            <div className="flex items-center gap-2">
                                <h3>{col.label}</h3>
                                {isActive ? (
                                    <div className="flex items-center gap-1">
                                        {sortColumn.direction === "asc" ? (
                                            <ArrowUp size={14} />
                                        ) : (
                                            <ArrowDown size={14} />
                                        )}
                                        {sortColumns.length > 1 && (
                                            <span className="text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                                                {sortIndex + 1}
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <ArrowUpDown size={14} />
                                )}
                            </div>
                            {isCtrl && (
                                <div className="absolute -top-1 -right-1 text-xs bg-yellow-400 text-black px-1 rounded">
                                    Ctrl
                                </div>
                            )}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
