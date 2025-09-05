type BadgeProps = {
    stock: number;
    color: string;
};

export default function Badge({ stock, color }: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center rounded-full  w-[50px]  justify-center py-1 text-xs font-medium   ${color}`}
        >
            {stock}
        </span>
    );
}
