import "./App.css";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <ProductsProvider>
            <Dashboard />
        </ProductsProvider>
    );
}

export default App;
