import React from "react";
type Options = {
    enabled?: boolean;
};
type MeasureResult = [
    React.RefObject<HTMLDivElement>,
    {
        width: number;
        height: number;
    }
];
export declare const useMeasureElement: (options?: Options) => MeasureResult;
export {};
