import { __read, __spread } from "tslib";
import { useState, useRef } from "react";
import { noop } from "./noop";
export function useDefault(value, defaultValue, onChange) {
    var isControlledRef = useRef(false);
    var _a = __read(useState(defaultValue), 2), internalValue = _a[0], setInternalValue = _a[1];
    // 受控模式
    if (isControlledRef.current || typeof value !== "undefined") {
        isControlledRef.current = true;
        return [value, onChange || noop];
    }
    // 非受控模式
    return [
        internalValue,
        function (newValue) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            setInternalValue(newValue);
            if (typeof onChange === "function") {
                onChange.apply(void 0, __spread([newValue], args));
            }
        },
    ];
}
//# sourceMappingURL=use-default.js.map