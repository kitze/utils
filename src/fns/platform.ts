export const isInBrowser = typeof window !== "undefined";

export const platform: string = isInBrowser ? navigator?.platform?.toLowerCase() : "";
export const isMac: boolean = platform.includes("mac");
export const isWindows: boolean = platform.includes("win");
export const isLinux: boolean = platform.includes("linux");

//@ts-ignore
export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;
