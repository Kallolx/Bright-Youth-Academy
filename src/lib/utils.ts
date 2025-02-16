import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitArray<T>(array: T[], numColumns: number): T[][] {
  const result: T[][] = Array.from({ length: numColumns }, () => []);
  array.forEach((item, index) => {
    result[index % numColumns].push(item);
  });
  return result;
}
