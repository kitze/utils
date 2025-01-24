import { twc } from "react-twc";
import { ReactFC } from "./types";

type TWCProps = { className?: string };

export const Card: ReactFC<TWCProps> = twc.div`rounded-lg border bg-slate-100 text-white shadow-sm`;
