import { ChartBarStacked, ChartLine, DollarSign, Wallet } from "lucide-react";
import type { Product } from "../interfaces/Product";
import { useProducts } from "../context/ProductsContext";

const StatisticsCard = () => {
    const { products } = useProducts();

    const secondaryData = [
        {
            title: "Categories",
            value: [...new Set(products.map((item: Product) => item.category))]
                .length,
            description: "In total",
            icon: <ChartBarStacked size={20} />,
        },
        {
            title: "Average Price",
            value: `$${(
                products.reduce((acc, item) => acc + item.price, 0) /
                products.length
            ).toFixed(2)}`,
            description: "Per product",
            icon: <DollarSign size={20} />,
        },
        {
            title: "Total Value",
            value: `$${products
                .reduce((acc, item) => acc + item.price, 0)
                .toFixed(2)}`,
            description: "All products",
            icon: <Wallet size={20} />,
        },
    ];
    if (products.length === 0) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="shadow-md w-full h-40 rounded-xl bg-gray-200"
                    ></div>
                ))}
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main card */}
            <div className="shadow-md w-full h-40 rounded-xl bg-radial from-green-700 via-green-800 to-green-900 p-4 text-white">
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col justify-between w-fit bg-white rounded-lg p-2 text-green-800">
                        <ChartLine size={20} />
                    </div>
                    <h2 className="text-sm">Products number</h2>
                </div>
                <h1 className="text-3xl font-bold mt-4">{products?.length}</h1>
                <p className="text-sm mt-2 text-white/90">In total</p>
            </div>

            {secondaryData.map((item, idx) => (
                <div
                    key={idx}
                    className="shadow-md w-full h-40 rounded-xl bg-radial from-gray-200 via-white to-white p-4 text-gray-800"
                >
                    <div className="flex gap-2 items-center">
                        <div className="flex flex-col justify-between w-fit bg-radial from-green-700 via-green-800 to-green-900 rounded-lg p-2 text-white">
                            {item.icon}
                        </div>
                        <h2 className="text-sm">{item.title}</h2>
                    </div>
                    <h1 className="text-3xl font-bold mt-4">{item.value}</h1>
                    <p className="text-sm mt-2 text-gray-600">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default StatisticsCard;
