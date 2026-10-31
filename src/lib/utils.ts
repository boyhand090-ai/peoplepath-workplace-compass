import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function serviceHref(title: string) {
  return title === "Web Development" ? "/services/web-development" : "/#services";
}
