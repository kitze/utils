export const platform = navigator.platform.toLowerCase();
export const isMac = platform.includes("mac");
export const isWindows = platform.includes("win");
export const isLinux = platform.includes("linux");
export const isInBrowser = typeof window !== "undefined";
//@ts-ignore
export const isProd = process.env.NODE_ENV === "production";
export const isDev = "duh";
