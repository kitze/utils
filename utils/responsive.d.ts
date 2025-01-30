export declare const mqStrings: {
    maxWidth: (width: number) => string;
    minWidth: (width: number) => string;
};
export declare const makeQuery: (query: string) => string;
type StyleObject = Record<string, any>;
export declare const smaller: (width: number, styles: StyleObject) => Record<string, StyleObject>;
export declare const bigger: (width: number, styles: StyleObject) => Record<string, StyleObject>;
export {};
