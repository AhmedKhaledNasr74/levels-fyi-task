import { useEffect, useState } from "react";

const useCtrlClick = () => {
    const [isCtrl, setIsCtrl] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Control") setIsCtrl(true);
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === "Control") setIsCtrl(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return { isCtrl };
};

export default useCtrlClick;
