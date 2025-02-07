import { useEffect } from "react";

type HotkeysMap = {
  [key: string]: (e: KeyboardEvent) => void;
};

export const useHotkeys = (hotkeys: HotkeysMap) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const handler = hotkeys[e.key];
      if (handler) {
        handler(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hotkeys]);
};
