import { __assign, __read, __rest } from "tslib";
import React, { forwardRef } from "react";
import { useConfig } from "./config-context";
/**
 * 快速创建 DOM 容器组件
 * @param displayName 组件名称
 * @param paths 组件的容器路径，如 div.tea-card__body
 *
 * tea 类名前缀请使用 `@{prefix}` 代替
 */
export var createRocket = function (displayName) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    var parentOf = function (classPrefix) { return function (children, path) {
        var _a = __read(path.split(".")), tag = _a[0], classNames = _a.slice(1);
        return React.createElement(tag, {
            className: classNames
                .map(function (c) { return c.replace(/^(@{prefix}-)/, classPrefix + "-"); })
                .join(" "),
        }, children);
    }; };
    var Rocket = forwardRef(function (props, ref) {
        var children = props.children, className = props.className, restProps = __rest(props, ["children", "className"]);
        var classPrefix = useConfig().classPrefix;
        var element = paths.reduceRight(parentOf(classPrefix), children);
        if (className) {
            var elementProps = element.props;
            return React.cloneElement(element, __assign({ ref: ref, className: [elementProps.className, className]
                    .filter(Boolean)
                    .join(" ") }, restProps));
        }
        return React.cloneElement(element, __assign({ ref: ref }, restProps));
    });
    Rocket.displayName = displayName;
    return Rocket;
};
//# sourceMappingURL=create-rocket.js.map