import Loading from "../components/Loading";
import StatisticsCard from "../components/StatisticsCard";
import Table from "../components/Table";
import { useProducts } from "../context/ProductsContext";

const Dashboard = () => {
    const { loading } = useProducts();
    if (loading) return <Loading />;

    return (
        <div className="p-5 pb-2 min-h-screen">
            <StatisticsCard />
            <Table />
        </div>
    );
};

export default Dashboard;
