/**
 * 处理 `R | (...args) => R` 类似类型
 * （ts <= 3.2 时无法依赖 typeof x === "function" 自动推导）
 */
export function isCallable(target) {
    return typeof target === "function";
}
//# sourceMappingURL=is-callable.js.map