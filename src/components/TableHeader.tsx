import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import useCtrlClick from "../hooks/useCtrlClick";
import { useProducts } from "../context/ProductsContext";
type TableHeaderProps = {
    columns: { label: string; field: string }[];
};
const TableHeader = ({ columns }: TableHeaderProps) => {
    const { handleClick } = useCtrlClick();
    const { sortObj, setSortObj } = useProducts();
    return (
        <thead className="bg-gray-100  ">
            <tr>
                {columns.map((col) => (
                    <th
                        key={col.field}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-600 hover:text-gray-800 uppercase tracking-wider cursor-pointer hover:bg-gray-200 !w-1/5 "
                        onClick={() => {
                            setSortObj((prev) => ({
                                field: col.field,
                                direction:
                                    prev.direction == "asc" ? "desc" : "asc",
                            }));
                            handleClick();
                        }}
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
    );
};

export default TableHeader;
