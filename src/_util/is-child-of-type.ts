/* eslint-disable import/export */
import React from "react";
export function isChildOfType(child, type) {
    if (typeof child === "undefined" || child === null)
        return false;
    if (typeof child === "string") {
        return type === "text";
    }
    if (typeof child === "number") {
        return type === "number";
    }
    if (React.isValidElement(child)) {
        if (typeof type === "string") {
            return child.type === type;
        }
        // React Hot Loader 会对组件进行代理。使用 createElement() 返回的 element.type 才是实际的类型
        // remark: https://github.com/gaearon/react-hot-loader/issues/304#issuecomment-223222772
        return child.type === React.createElement(type, {}).type;
    }
    return false;
}
/* eslint-enable import/export */
//# sourceMappingURL=is-child-of-type.js.map