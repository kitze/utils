interface UseNumberOptions {
    min?: number;
    max?: number;
    loopBefore?: boolean;
    loopAfter?: boolean;
    initial?: number;
}
export declare const useNumber: ({ min, max, loopBefore, loopAfter, initial, }?: UseNumberOptions) => {
    value: number;
    increase: () => void;
    decrease: () => void;
    set: (newValue: number) => void;
};
export {};
