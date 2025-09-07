import { RefreshCcw, X } from "lucide-react";
import FilterDropdown from "./FilterDropdown";
import TableRow from "./TableRow";
import TableSearch from "./TableSearch";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import { useProducts } from "../context/ProductsContext";

const COLUMNS = [
    { label: "Title", field: "title" },
    { label: "Price", field: "price" },
    { label: "Rating", field: "rating" },
    { label: "Stock", field: "stock" },
    { label: "Category", field: "category" },
];

const Table = () => {
    const {
        products,
        filter,
        setFilter,
        setSearchTerm,
        paginatedData,
        clearSelections,
    } = useProducts();
    return (
        <div className="p-4 bg-white mt-5  rounded-2xl border border-gray-300 flex flex-col gap-4">
            <div className="flex justify-between items-center px-1">
                <div className="flex items-center gap-4">
                    <h2 className="font-medium">Products</h2>
                    {filter && (
                        <div className="text-sm bg-green-100/80 border border-green-300/80 px-2 py-1 rounded-full flex items-center  gap-2">
                            <span className="text-sm ">{filter}</span>
                            <X
                                size={14}
                                className="cursor-pointer"
                                onClick={() => setFilter("")}
                            />
                        </div>
                    )}
                </div>

                <div className="">
                    <div className="flex items-center gap-1">
                        <TableSearch setSearchTerm={setSearchTerm} />
                        <FilterDropdown data={products} />
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
                    <TableHeader columns={COLUMNS} />

                    <tbody className="bg-white divide-y divide-gray-200 ">
                        {paginatedData.map((item) => (
                            <TableRow key={item.id} item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </div>
    );
};

export default Table;
