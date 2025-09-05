import Badge from "./ui/Badge";
import { getStockColor } from "../utils/getStockColor";
import type { Product } from "../interfaces/Product";

type TableRowProps = {
    item: Product;
};

const TableRow = ({ item }: TableRowProps) => {
    return (
        <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium truncate ">
                {item.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${item.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.rating.toFixed(1)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <Badge stock={item.stock} color={getStockColor(item.stock)} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.category}
            </td>
        </tr>
    );
};

export default TableRow;
