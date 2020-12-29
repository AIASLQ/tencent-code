var prefix = "dynamic-inserted-css-";
/**
 * insert css to the current page
 * */
export function insertCSS(id, cssText) {
    var style;
    if (typeof document === "object") {
        style = document.getElementById(prefix + id);
        if (!style) {
            style = document.createElement("style");
            style.id = prefix + id;
            // IE8/9 can not use document.head
            document.getElementsByTagName("head")[0].appendChild(style);
        }
        if (style.textContent !== cssText) {
            style.textContent = cssText;
        }
    }
    return style;
}
//# sourceMappingURL=insert-css.js.map