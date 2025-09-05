export const getStockColor = (rating: number) => {
    if (rating >= 20)
        return "bg-radial from-green-600 via-green-700 to-green-800 text-white";
    if (rating >= 1)
        return "bg-radial from-yellow-400 via-yellow-500 to-yellow-600 text-white";
    return "bg-radial from-red-500 via-red-600 to-red-700 text-white";
};
