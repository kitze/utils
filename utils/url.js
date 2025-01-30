import isUrlCheck from "is-url";
export function isLocalhostURL(str) {
    try {
        if (!hasProtocol(str)) {
            str = `http://${str}`;
        }
        const url = new URL(str);
        const localhostRegex = /^(?:[\w.-]+)(?:\:[\d]+)$/;
        return localhostRegex.test(url.host);
    }
    catch (e) {
        return false;
    }
}
export function isURL(str) {
    if (!str)
        return false;
    if (isUrlCheck(str))
        return true;
    if (isLocalhostURL(str))
        return true;
    // Regular expression that checks for a valid URL, including localhost URLs
    const urlRegex = /^(?:http(s)?:\/\/)?(?:[\w.-]+)(?:\:[\d]+)?(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return urlRegex.test(str);
}
export const hasProtocol = (url) => {
    return (url.startsWith("http:") ||
        url.startsWith("https:") ||
        url.startsWith("about:") ||
        url.startsWith("file:") ||
        url.startsWith("chrome-extension:") ||
        url.startsWith("crx:"));
};
export const validateAndModifyUrl = (url) => {
    try {
        if (!hasProtocol(url)) {
            url = `http://${url}`;
        }
        if (url.trim().includes(" ")) {
            return null;
        }
        new URL(url);
    }
    catch (e) {
        return null;
    }
    return url;
};
export const removeHttp = (url) => {
    if (url === "")
        return url;
    try {
        return new URL(url).href.replace(/^(https?:|)\/\//, "");
    }
    catch (err) {
        return url;
    }
};
export const urlEquals = (url = "", anotherUrl = "", ignoreProtocol = true) => {
    if (ignoreProtocol) {
        return removeHttp(url || "") === removeHttp(anotherUrl || "");
    }
    else {
        try {
            if (url) {
                url = new URL(url).href;
            }
        }
        catch (err) { }
        try {
            if (anotherUrl) {
                anotherUrl = new URL(anotherUrl).href;
            }
        }
        catch (err) { }
        return url === anotherUrl;
    }
};
export const hasSameHost = (url, newUrl) => {
    try {
        return new URL(url).host === new URL(newUrl).host;
    }
    catch (e) {
        return false;
    }
};
export const isSearchTerm = (url) => {
    try {
        if (url.trim().includes(" ")) {
            return true;
        }
        if (isLocalhostURL(url))
            return false;
        if (!hasProtocol(url)) {
            url = `http://${url}`;
        }
        const urlObj = new URL(url);
        return (!urlObj.hostname.includes(".") &&
            urlObj.hostname !== "localhost" &&
            urlObj.protocol !== "file:" &&
            urlObj.protocol !== "crx:" &&
            urlObj.protocol !== "chrome-extension:");
    }
    catch (e) {
        return true;
    }
};
export const getUrlType = (input) => {
    if (isSearchTerm(input)) {
        return "search";
    }
    return "navigation";
};
export const formatUrl = (url) => {
    const validUrl = validateAndModifyUrl(url);
    if (!validUrl) {
        return `https://${url}`;
    }
    return validUrl;
};
