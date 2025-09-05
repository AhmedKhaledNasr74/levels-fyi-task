import { ChartLine } from "lucide-react";
import type { Product } from "../interfaces/Product";

type StatisticsCardProps = {
    length: number;
    data: Product[];
};

const StatisticsCard = ({ length, data }: StatisticsCardProps) => {
    return (
        <div className="flex justify-between gap-4">
            {/* Main card */}
            <div className="shadow-md w-xs h-40 rounded-xl bg-radial from-green-700 via-green-800 to-green-900 p-4 text-white">
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col justify-between w-fit bg-white rounded-lg p-2 text-green-800">
                        <ChartLine size={20} />
                    </div>
                    <h2 className="text-sm">Products number</h2>
                </div>
                <h1 className="text-3xl font-bold mt-4">{length}</h1>
                <p className="text-sm mt-2 text-white/90">In total</p>
            </div>

            {/* Other 3 cards with same UI but gray theme */}
            {/* {secondaryData.map((item, idx) => (
                <div
                    key={idx}
                    className="shadow-md w-xs h-40 rounded-xl bg-radial from-gray-200 via-white to-white p-4 text-gray-800"
                >
                    <div className="flex gap-2 items-center">
                        <div className="flex flex-col justify-between w-fit bg-white rounded-lg p-2 text-green-800">
                            <ChartLine size={20} />
                        </div>
                        <h2 className="text-sm">{item?.title}</h2>
                    </div>
                    <h1 className="text-3xl font-bold mt-4">{item?.value}</h1>
                    <p className="text-sm mt-2 text-gray-600">
                        {item?.description}
                    </p>
                </div>
            ))} */}
        </div>
    );
};

export default StatisticsCard;
