export const mqStrings = {
  maxWidth: (width: number): string => `(max-width: ${width}px)`,
  minWidth: (width: number): string => `(min-width: ${width}px)`,
};

export const makeQuery = (query: string): string => `@media ${query}`;

type StyleObject = Record<string, any>;

export const smaller = (
  width: number,
  styles: StyleObject
): Record<string, StyleObject> => ({
  [makeQuery(mqStrings.maxWidth(width))]: styles,
});

export const bigger = (
  width: number,
  styles: StyleObject
): Record<string, StyleObject> => ({
  [makeQuery(mqStrings.minWidth(width))]: styles,
});
