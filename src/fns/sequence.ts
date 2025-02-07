type SequenceItem = number | (() => any);

export const sequence = (b: SequenceItem[]) =>
  b.every((a, i) => {
    if (typeof a === "function") {
      return !a();
    }
    return !setTimeout(() => sequence(b.slice(++i)), a);
  });
