import StatisticsCard from "../components/StatisticsCard";
import Table from "../components/Table";
import { useProducts } from "../context/ProductsContext";

const Dashboard = () => {
    const { products, loading } = useProducts();
    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-5 min-h-screen">
            <StatisticsCard length={products.length} data={products} />
            <Table data={products} />
        </div>
    );
};

export default Dashboard;
