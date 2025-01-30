type HotkeysMap = {
    [key: string]: (e: KeyboardEvent) => void;
};
export declare const useHotkeys: (hotkeys: HotkeysMap) => void;
export {};
