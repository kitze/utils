import { useRef, useState, useEffect } from "react";

type Options = {
  enabled?: boolean;
};

type MeasureResult = [
  React.RefObject<HTMLDivElement>,
  { width: number; height: number }
];

export const useMeasureElement = (options: Options = {}): MeasureResult => {
  const { enabled = true } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (enabled && ref?.current) {
      let measure = () => {
        if (ref.current) {
          const { offsetWidth, offsetHeight } = ref.current as any;

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
  }, []);

  return [ref, size];
};
