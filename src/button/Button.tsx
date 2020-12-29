import { __assign, __read, __rest, __spread } from "tslib";
import React from "react";
import classNames from "classnames";
import { Tooltip } from "../tooltip";
import { Icon } from "../icon";
import { forwardRefWithStatics } from "../_util/forward-ref-with-statics";
import { useConfig } from "../_util/config-context";
export var Button = forwardRefWithStatics(function (props, ref) {
    var disabled = props.disabled, icon = props.icon, _loading = props.loading, _type = props.type, className = props.className, style = props.style, onClick = props.onClick, children = props.children, tooltip = props.tooltip, htmlType = props.htmlType, buttonProps = __rest(props, ["disabled", "icon", "loading", "type", "className", "style", "onClick", "children", "tooltip", "htmlType"]);
    var classPrefix = useConfig().classPrefix;
    var _a = __read([_loading, _type], 2), loading = _a[0], type = _a[1];
    // 指定了图标的话，
    if (!type) {
        type = "weak";
    }
    if (icon) {
        type = "icon";
    }
    // 只有下面三种类型的按钮支持 loading
    if (["primary", "weak", "pay", "error"].indexOf(type) === -1 &&
        typeof loading !== "undefined") {
        loading = false;
    }
    // 计算类名
    var btnClassName = classPrefix + "-btn";
    var classList = [classPrefix + "-btn"];
    // 类型类名
    if (type !== "primary") {
        classList.push(btnClassName + "--" + type);
    }
    // 状态类名
    classList.push({
        "is-disabled": disabled,
        "is-loading": loading,
    });
    // 用户自定义类名
    if (className) {
        classList.push(className);
    }
    /* eslint-disable react/button-has-type */
    var button = (React.createElement("button", __assign({ ref: ref, className: classNames.apply(void 0, __spread(classList)), onClick: (!disabled && !loading && onClick) || null, style: style || {}, type: htmlType, disabled: disabled }, buttonProps),
        loading && React.createElement(Icon, { type: "loading" }),
        icon ? React.createElement(Icon, { type: icon }) : children));
    /* eslint-enable react/button-has-type */
    if (tooltip) {
        button = React.createElement(Tooltip, { title: tooltip }, button);
    }
    return button;
}, {
    defaultLabelAlign: "middle",
});
//# sourceMappingURL=Button.js.map