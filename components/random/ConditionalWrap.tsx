import React from "react";
import { ReactFC } from "../../utils/types";

export const ConditionalWrap: ReactFC<{
  condition?: boolean;
  children: React.ReactNode;
  wrap: (children: React.ReactNode) => React.ReactNode;
  elseWrap?: (children: React.ReactNode) => React.ReactNode;
}> = ({ condition, children, wrap, elseWrap }) =>
  !!condition
    ? React.cloneElement(wrap(children))
    : elseWrap
    ? elseWrap(children)
    : children;
