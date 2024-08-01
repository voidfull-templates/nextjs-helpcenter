import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasVoidfullVariables() {
  return !!(
    process.env.NEXT_PUBLIC_VOIDFULL_SITE_ID &&
    process.env.NEXT_PUBLIC_VOIDFULL_CONTENT_TOKEN
  );
}
