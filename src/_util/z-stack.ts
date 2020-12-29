import { getScrollBarSize } from "./get-scrollbar-size";
/**
 * 管理弹窗/抽屉等组件层级
 */
var stack = [];
function hasScrollbar() {
    return document.body.scrollHeight > window.innerHeight;
}
function setBodyStyle(style) {
    var prevStyle = {};
    var styleKeys = Object.keys(style);
    styleKeys.forEach(function (key) {
        prevStyle[key] = document.body.style[key];
    });
    styleKeys.forEach(function (key) {
        document.body.style[key] = style[key];
    });
    return prevStyle;
}
var originalStyle = {};
function push(id) {
    stack.push(id);
    if (stack.length === 1) {
        originalStyle = setBodyStyle({
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden",
            position: "relative",
            width: hasScrollbar()
                ? "calc(100% - " + getScrollBarSize() + "px)"
                : undefined,
        });
    }
}
function remove(id) {
    stack = stack.filter(function (i) { return i !== id; });
    if (!stack.length) {
        setBodyStyle(originalStyle);
        originalStyle = {};
    }
}
export var zStack = {
    push: push,
    remove: remove,
    get top() {
        return stack[stack.length - 1];
    },
    get length() {
        return stack.length;
    },
};
//# sourceMappingURL=z-stack.js.map