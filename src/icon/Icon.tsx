import { __assign, __rest } from "tslib";
import React, { forwardRef } from "react";
import classNames from "classnames";
import { Tooltip } from "../tooltip";
import { useConfig } from "../_util/config-context";
export var Icon = forwardRef(function (props, ref) {
    var classPrefix = useConfig().classPrefix;
    var type = props.type, size = props.size, className = props.className, tooltip = props.tooltip, link = props.link, htmlProps = __rest(props, ["type", "size", "className", "tooltip", "link"]);
    var iconClassName = classNames(className, classPrefix + "-icon", classPrefix + "-icon-" + type, {
        "size-s": size === "s",
        "size-l": size === "l",
    });
    var Parent = link ? "a" : "i";
    var icon = (React.createElement(Parent, __assign({ ref: ref, className: iconClassName }, htmlProps)));
    if (tooltip) {
        return React.createElement(Tooltip, { title: tooltip }, icon);
    }
    return icon;
});
//# sourceMappingURL=Icon.js.map