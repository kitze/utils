import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
