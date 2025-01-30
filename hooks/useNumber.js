import { useState, useCallback } from "react";
export const useNumber = ({ min = -Infinity, max = Infinity, loopBefore = false, loopAfter = false, initial = 0, } = {}) => {
    const [value, setValue] = useState(initial);
    const increase = useCallback(() => {
        setValue((current) => {
            if (current >= max) {
                return loopAfter ? min : max;
            }
            return current + 1;
        });
    }, [max, min, loopAfter]);
    const decrease = useCallback(() => {
        setValue((current) => {
            if (current <= min) {
                return loopBefore ? max : min;
            }
            return current - 1;
        });
    }, [max, min, loopBefore]);
    const set = useCallback((newValue) => {
        setValue(Math.min(max, Math.max(min, newValue)));
    }, [max, min]);
    return {
        value,
        increase,
        decrease,
        set,
    };
};
