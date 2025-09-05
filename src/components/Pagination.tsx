import { ArrowLeft, ArrowRight } from "lucide-react";
import type PaginationType from "../interfaces/Pagination";

type PaginationProps = {
    setPagination: (pagination: PaginationType) => void;
    pagination: PaginationType;
    finalPage: number;
};

const Pagination = ({
    setPagination,
    pagination,
    finalPage,
}: PaginationProps) => {
    const baseBtn =
        "rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm text-black transition-all " +
        "hover:bg-radial hover:from-green-700 hover:via-green-800 hover:to-green-900 " +
        "hover:text-white  " +
        "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

    return (
        <div className="flex items-center gap-8 scale-90 justify-center">
            <button
                disabled={pagination.page === 1}
                onClick={() =>
                    setPagination({
                        ...pagination,
                        page: pagination.page - 1,
                    })
                }
                className={baseBtn}
                type="button"
            >
                <ArrowLeft size={18} />
            </button>

            <p className="text-slate-600">
                Page{" "}
                <strong className="text-slate-800">{pagination.page}</strong>{" "}
                of&nbsp;
                <strong className="text-slate-800">{finalPage}</strong>
            </p>

            <button
                disabled={pagination.page === finalPage}
                onClick={() =>
                    setPagination({
                        ...pagination,
                        page: pagination.page + 1,
                    })
                }
                className={baseBtn}
                type="button"
            >
                <ArrowRight size={18} />
            </button>
        </div>
    );
};

export default Pagination;
