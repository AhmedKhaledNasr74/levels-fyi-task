import { DotIcon, Filter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Product } from "../interfaces/Product";
import { useProducts } from "../context/ProductsContext";

type FilterDropdownProps = {
    data: Product[];
};

const FilterDropdown = ({ data }: FilterDropdownProps) => {
    const { filter, setFilter } = useProducts();
    const [openFilter, setOpenFilter] = useState(false);
    const categories = [...new Set(data.map((item: Product) => item.category))];

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpenFilter(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <button
                className="rounded-md border flex items-center gap-3 py-2 px-4  hover:bg-gray-100 cursor-pointer text-center text-sm border-gray-200 transition-all shadow-xs hover:shadow-lg focus:shadow-noneactive:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
                onClick={() => setOpenFilter(!openFilter)}
            >
                <Filter size={16} />
                <span>Filter</span>
            </button>
            {openFilter && (
                <ul className="absolute z-10 min-w-[150px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm focus:outline-none">
                    {categories.map((item) => (
                        <li
                            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                            onClick={() => {
                                setFilter(item);
                                setOpenFilter(false);
                            }}
                            key={item}
                        >
                            {item == filter && <DotIcon />}
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FilterDropdown;
