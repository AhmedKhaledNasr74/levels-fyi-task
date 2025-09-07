import { useEffect, useState } from "react";

const useCtrlClick = () => {
    const [isCtrl, setIsCtrl] = useState(false);
    const [isClick, setIsClick] = useState(false);

    const handleCtrl = (e: React.KeyboardEvent) => {
        if (e.key === "Control" && e.type === "keydown") {
            setIsCtrl(true);
        }
    };

    const handleClick = () => {
        if (isCtrl) setIsClick(true);
        else setIsClick(!isClick);
    };

    useEffect(() => {
        const upTimer = window.addEventListener("keyup", (e) => {
            if (e.key === "Control") setIsCtrl(false);
        });
        const downTimer = window.addEventListener("keydown", (e) => {
            if (e.key === "Control") setIsCtrl(true);
        });

        return () => {
            window.removeEventListener("keyup", () => upTimer);
            window.removeEventListener("keydown", () => downTimer);
        };
    }, []);

    return { handleCtrl, handleClick };
};

export default useCtrlClick;
