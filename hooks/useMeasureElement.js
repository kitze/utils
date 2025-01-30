import { useRef, useState, useEffect } from "react";
export const useMeasureElement = (options = {}) => {
    const { enabled = true } = options;
    const ref = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
        if (enabled && ref?.current) {
            const measure = () => {
                if (ref.current) {
                    const { offsetWidth, offsetHeight } = ref.current;
                    setSize({
                        width: offsetWidth,
                        height: offsetHeight,
                    });
                }
            };
            measure();
            window.addEventListener("resize", measure);
            return () => window.removeEventListener("resize", measure);
        }
    }, [enabled]);
    return [ref, size];
};
