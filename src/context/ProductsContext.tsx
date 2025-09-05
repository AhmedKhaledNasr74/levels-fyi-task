import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import type { Product } from "../interfaces/Product";

type ProductsContextType = {
    products: Product[];
    loading: boolean;
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
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);

    return (
        <ProductsContext.Provider value={{ products, loading }}>
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
