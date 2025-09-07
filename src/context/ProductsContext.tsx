import { createContext, useContext, type ReactNode } from "react";
import type { Product } from "../interfaces/Product";
import { useEffect, useState } from "react";
import type PaginationType from "../interfaces/Pagination";
import useProductsData from "../hooks/useProductsData";
import { fetchProducts } from "../api/products";

type ProductsContextType = {
    products: Product[];
    loading: boolean;
    clearSelections: () => void;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    paginatedData: Product[];
    sortObj: { field: string; direction: string };
    setSortObj: React.Dispatch<
        React.SetStateAction<{ field: string; direction: string }>
    >;
    pagination: PaginationType;
    setPagination: React.Dispatch<React.SetStateAction<PaginationType>>;
    filteredAndSorted: Product[];
};

const ProductsContext = createContext<ProductsContextType | undefined>(
    undefined
);

type ProductsProviderProps = {
    children: ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .finally(() => setLoading(false));
    }, []);

    const productsState = useProductsData(products);

    return (
        <ProductsContext.Provider
            value={{
                products,
                loading,
                ...productsState,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context;
};
