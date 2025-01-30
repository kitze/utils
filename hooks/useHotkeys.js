import { useEffect } from "react";
export const useHotkeys = (hotkeys) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            const handler = hotkeys[e.key];
            if (handler) {
                handler(e);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [hotkeys]);
};
