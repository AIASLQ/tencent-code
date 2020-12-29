import { __assign } from "tslib";
import React from "react";
import { useConfig } from "../_util/config-context";
export function BackDrop(_a) {
    var zIndex = _a.zIndex, _b = _a.style, style = _b === void 0 ? {} : _b;
    var classPrefix = useConfig().classPrefix;
    return (React.createElement("div", { className: classPrefix + "-backdrop", style: __assign({ zIndex: zIndex }, style) }));
}
//# sourceMappingURL=BackDrop.js.map