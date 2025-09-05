type TableSearchProps = {
    setSearchTerm: (term: string) => void;
};

const TableSearch = ({ setSearchTerm }: TableSearchProps) => {
    return (
        <div className="group  p-2 rounded-md border  hover:bg-gray-100 cursor-pointer text-center text-sm border-gray-200 transition-all shadow-xs hover:shadow-lg focus:shadow-noneactive:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            <input
                type="search"
                className="outline-none"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default TableSearch;
