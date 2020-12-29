import { __assign, __read, __rest } from "tslib";
import React, { forwardRef } from "react";
import classNames from "classnames";
import { useConfig } from "../_util/config-context";
// 三角朝向和 placement 位置是相对的
var POSITION_MAP = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
};
export var BubbleContent = forwardRef(function (props, ref) {
    var _a;
    var _b = props.placement, placement = _b === void 0 ? "top" : _b, children = props.children, className = props.className, error = props.error, dark = props.dark, tooltip = props.tooltip, htmlProps = __rest(props, ["placement", "children", "className", "error", "dark", "tooltip"]);
    var classPrefix = useConfig().classPrefix;
    // placement 可能是 "top-start" 的形式，需要拆成两个词来使用
    var _c = __read(placement.split("-"), 2), basePlacement = _c[0], placementModifier = _c[1]; // eslint-disable-line prefer-const
    if (basePlacement === "auto") {
        basePlacement = "top";
    }
    var focusPosition = POSITION_MAP[basePlacement] || "bottom";
    if (tooltip) {
        return (React.createElement("div", __assign({ className: classPrefix + "-tooltip", ref: ref }, htmlProps),
            React.createElement("div", { className: classPrefix + "-tooltip__inner" }, children)));
    }
    return (React.createElement("div", __assign({ ref: ref, className: classNames((_a = {},
            _a[classPrefix + "-bubble"] = true,
            _a[classPrefix + "-bubble--" + focusPosition] = focusPosition,
            _a[classPrefix + "-bubble--" + placementModifier] = placementModifier,
            _a[classPrefix + "-bubble--error"] = error,
            _a[classPrefix + "-bubble--reverse"] = dark,
            _a[className] = className,
            _a)) }, htmlProps),
        React.createElement("div", { className: classPrefix + "-bubble__inner" }, children)));
});
BubbleContent.displayName = "BubbleContent";
//# sourceMappingURL=BubbleContent.js.map