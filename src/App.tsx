import "./App.css";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./pages/Dashboard";
const data = [
    {
        id: 1,
        title: "b",
        price: 9.99,
        rating: 4.94,
        stock: 5,
        category: "Makeup",
    },
    {
        id: 2,
        title: "a",
        price: 12.5,
        rating: 4.8,
        stock: 20,
        category: "Makeup",
    },
    {
        id: 3,
        title: "h",
        price: 15.0,
        rating: 3,
        stock: 15,
        category: "Skincare",
    },
    {
        id: 4,
        title: "c",
        price: 29.99,
        rating: 4.75,
        stock: 4,
        category: "Makeup",
    },
    {
        id: 5,
        title: "e",
        price: 35.0,
        rating: 1.25,
        stock: 68,
        category: "Makeup",
    },
    {
        id: 6,
        title: "d",
        price: 19.0,
        rating: 4.7,
        stock: 18,
        category: "Makeup",
    },
    {
        id: 7,
        title: "g",
        price: 25.0,
        rating: 4.9,
        stock: 30,
        category: "Skincare",
    },
    {
        id: 8,
        title: "f",
        price: 33.0,
        rating: 4.88,
        stock: 6,
        category: "Makeup",
    },
    {
        id: 9,
        title: "j",
        price: 24.0,
        rating: 4.65,
        stock: 10,
        category: "Makeup",
    },
    {
        id: 10,
        title: "i",
        price: 28.0,
        rating: 4.78,
        stock: 8,
        category: "Makeup",
    },
];

function App() {
    return (
        <ProductsProvider>
            <Dashboard />
        </ProductsProvider>
    );
}

export default App;
