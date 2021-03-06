import { __read } from "tslib";
import { useState, useEffect, useRef } from "react";
export function useVisibleTransition(visible) {
    /**
     * visible 和 contentIn 用于控制浮层渲染和动画，下面是两个状态组合的解释：
     *
     * state | visible | contentIn | 说明
     * ------|---------|-----------|-----------------------
     * 0     | false   | false     | 初始状态，浮层不渲染，如果 visible 变为 true，则进入 state 1
     * 1     | true    | false     | 浮层渲染，淡入动画还没开始，浮层不可见。会自动进入 state 2
     * 2     | true    | true      | 浮层渲染，淡入动画开始，如果 visible 变为 false，则进入 state 3
     * 3     | false   | true      | 浮层渲染，淡出动画开始，动画结束后，回到 state 0
     */
    var _a = __read(useState(visible), 2), contentIn = _a[0], setContentIn = _a[1];
    var timerRef = useRef(null);
    // visible 变为 true 的时候，让动画进入
    useEffect(function () {
        if (visible) {
            // 这里 setTimeout() 是为了解决 IE11 下动画出现异常的问题
            timerRef.current = setTimeout(function () { return setContentIn(true); }, 0);
        }
    }, [visible]);
    useEffect(function () { return function () { return clearTimeout(timerRef.current); }; }, []);
    return {
        /**
         * 内容是否已渲染
         */
        contentIn: contentIn,
        /**
         * 内容是否应该渲染
         */
        shouldContentRender: visible || contentIn,
        /**
         * 内容是否应该显示
         */
        shouldContentEnter: visible && contentIn,
        /**
         * 内容退出完成后回调
         */
        onContentExit: function () { return setContentIn(false); },
    };
}
//# sourceMappingURL=use-visible-transition.js.map