import { __assign, __read, __rest, __spread } from "tslib";
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { noop } from "../_util/noop";
export function BaseTransition(_a) {
    var enter = _a.in, _b = _a.onExit, onExit = _b === void 0 ? noop : _b, _c = _a.onExited, onExited = _c === void 0 ? noop : _c, children = _a.children, props = __rest(_a, ["in", "onExit", "onExited", "children"]);
    // 离场时保持 children 不变
    var childrenRef = useRef(null);
    return (React.createElement(CSSTransition, __assign({}, props, { in: enter, onExit: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            childrenRef.current = children;
            onExit.apply(void 0, __spread(args));
        }, onExited: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            childrenRef.current = null;
            onExited.apply(void 0, __spread(args));
        } }), childrenRef.current || children));
}
//# sourceMappingURL=BaseTransition.js.map