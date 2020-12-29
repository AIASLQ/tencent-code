import { __read, __spread } from "tslib";
import { isCallable } from "./is-callable";
/**
 * 处理 `R | (...args) => R` 类似类型
 * （ts <= 3.2 时无法依赖 typeof x === "function" 自动推导）
 */
export function injectValue(target) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (isCallable(target) ? target.apply(void 0, __spread(args)) : target);
    };
}
//# sourceMappingURL=inject-value.js.map