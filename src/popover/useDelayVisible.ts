import { useRef, useEffect } from "react";
import { useDefaultValue } from "../form/controlled";
/**
 * @hooks
 *
 * 延迟设置可见值
 */
export function useDelayVisible(option) {
    // 让 visible 属性支持 default
    var _a = useDefaultValue({
        defaultValue: option.defaultVisible,
        value: option.visible,
        onChange: option.onVisibleChange,
    }, false), visible = _a.value, onVisibleChange = _a.onChange;
    var lastTaskCancellation = useRef(null);
    // 延时 timeout 再切换到新的状态，任务保存到 taskRef 中
    // 如果有新的变化，清空上次任务，重新开启新任务
    var setVisible = function (nextVisible, delay) {
        if (delay === void 0) { delay = 0; }
        return new Promise(function (resolve) {
            if (lastTaskCancellation.current) {
                lastTaskCancellation.current();
            }
            var timer = setTimeout(function () {
                onVisibleChange(nextVisible);
                resolve(true);
            }, delay);
            var cancel = function () {
                clearTimeout(timer);
                resolve(false);
            };
            lastTaskCancellation.current = cancel;
        });
    };
    // unmout 的时候无论如何都清除任务
    useEffect(function () { return function () { return lastTaskCancellation.current && lastTaskCancellation.current(); }; }, []);
    return { visible: visible, setVisible: setVisible };
}
//# sourceMappingURL=useDelayVisible.js.map