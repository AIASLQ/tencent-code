export function mergeStyle() {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    return styles.reduce(function (merged, style) { return (style ? Object.assign(merged, style) : merged); }, {});
}
//# sourceMappingURL=merge-style.js.map