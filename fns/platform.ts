export const platform = navigator.platform.toLowerCase();
export const isMac: boolean = platform.includes("mac");
export const isWindows: boolean = platform.includes("win");
export const isLinux: boolean = platform.includes("linux");
