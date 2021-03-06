import { __values } from "tslib";
import { useRef, useEffect } from "react";
/**
 * 提供一个 DOM，在 DOM 的外部点击之后，会触发回调函数
 * @param domRefs 给定一个或多个 DOM 的 ref，在此 DOM 之外点击认为是外部点击
 */
export function useOutsideClick(domRefs, enabled) {
    if (enabled === void 0) { enabled = true; }
    var timerRef = useRef(null);
    var eventRef = useRef(null);
    var reactEvtRef = useRef(null);
    var listenerRef = useRef(null);
    /**
     * 清理外部点击事件处理器
     */
    var remove = function () {
        listenerRef.current = null;
    };
    /**
     * 注册外部点击事件处理器
     * @param handle DOM 外部点击时的回调函数
     */
    var listen = function (handle) {
        listenerRef.current = function (evt) {
            var e_1, _a;
            var refs = !Array.isArray(domRefs) ? [domRefs] : domRefs;
            try {
                for (var refs_1 = __values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
                    var domRef = refs_1_1.value;
                    if (domRef.current && domRef.current.contains(evt.target)) {
                        return;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (refs_1_1 && !refs_1_1.done && (_a = refs_1.return)) _a.call(refs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Portal 上模拟的冒泡事件比 DOM 事件晚
            timerRef.current = setTimeout(function () {
                if (reactEvtRef.current !== evt) {
                    handle(evt);
                }
            }, 0);
        };
    };
    // 在 unmount 之后，无论如何要清理
    useEffect(function () {
        if (!enabled) {
            return function () { return null; };
        }
        eventRef.current = function (evt) {
            if (listenerRef.current) {
                clearTimeout(timerRef.current);
                listenerRef.current(evt);
            }
        };
        document.addEventListener("mousedown", eventRef.current);
        return function () {
            remove();
            clearTimeout(timerRef.current);
            document.removeEventListener("mousedown", eventRef.current);
        };
    }, [enabled]);
    return {
        listen: listen,
        remove: remove,
        // 需要忽略的组件要传入的 Props
        ignoreProps: {
            onMouseDown: function (evt) {
                reactEvtRef.current = evt.nativeEvent;
                return evt;
            },
        },
    };
}
//# sourceMappingURL=use-outside-click.js.map