import { __awaiter, __generator } from "tslib";
import React, { useRef, useEffect } from "react";
import { Bubble } from "../bubble";
var visibleTooltipCount = 0;
/**
 * 控制 Tooltip 的触发机制
 *
 * Tooltip 跟普通的 Bubble 不一样：
 *
 * 1. 出现位置不参考元素，参考鼠标
 * 2. 如果场上无 Tooltip 实例，则激活后 0.6s 后弹出
 * 3. 如果场上有 Tooltip 实例，则激活后 0.3s 后弹出
 *
 * 设计上面的规则，是为了对齐系统 Tooltip 的交互
 */
var TooltipTrigger = function (_a) {
    var delay = _a.delay, _b = _a.openDelay, openDelay = _b === void 0 ? delay : _b, _c = _a.closeDelay, closeDelay = _c === void 0 ? 0 : _c, setVisible = _a.setVisible, render = _a.render, openDelayWhenHasInstance = _a.openDelayWhenHasInstance;
    // 当前鼠标的位置，用作 Tooltip 弹出位置的参考
    var mouseElement = useRef(null);
    // Tooltip 确定要激活，在延时出来期间，需要监听鼠标新位置，这个引用保存监听的取消方法
    var mouseWatching = useRef(null);
    // 从鼠标事件获得的坐标信息，构造鼠标参考位置
    var mark = useRef(function (evt) {
        var width = 0;
        var height = 0;
        var clientX = Math.round(evt.clientX);
        var clientY = Math.round(evt.clientY);
        mouseElement.current = {
            clientWidth: width,
            clientHeight: height,
            getBoundingClientRect: function () { return ({
                left: clientX,
                top: clientY,
                right: clientX + width,
                bottom: clientY + height,
                width: width,
                height: height,
            }); },
            // IE10 下 Popper 读取这两个值计算
            scrollTop: 0,
            scrollLeft: 0,
        };
    });
    // 监听鼠标位置变化，更新位置
    var watch = function () {
        document.addEventListener("mousemove", mark.current);
        mouseWatching.current = function () {
            return document.removeEventListener("mousemove", mark.current);
        };
        return mouseWatching.current;
    };
    // 取消当前的位置变化监听
    var unwatch = function () {
        if (mouseWatching.current) {
            mouseWatching.current();
            mouseWatching.current = null;
        }
    };
    // 用户鼠标进入目标元素
    var enter = function (evt) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // 记录鼠标位置并跟踪
                    mark.current(evt.nativeEvent);
                    watch();
                    // Tooltip 出来后，更新实例数量，并且可以取消跟踪了（Tooltip 出来的时候，鼠标在哪儿，就在哪儿，无需跟随）
                    return [4 /*yield*/, setVisible(true, visibleTooltipCount > 0 ? openDelayWhenHasInstance : openDelay)];
                case 1:
                    // Tooltip 出来后，更新实例数量，并且可以取消跟踪了（Tooltip 出来的时候，鼠标在哪儿，就在哪儿，无需跟随）
                    _a.sent();
                    visibleTooltipCount += 1;
                    unwatch();
                    return [2 /*return*/];
            }
        });
    }); };
    // 用户鼠标离开目标元素
    var leave = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // 取消原有的跟踪
                    unwatch();
                    // 完全隐藏后，延时 1 秒更新实例数量
                    // 这里延时 1 秒是给用户留足够的空间，不至于由于鼠标走的慢导致下次 Tooltip 又要等很久
                    return [4 /*yield*/, setVisible(false, closeDelay)];
                case 1:
                    // 完全隐藏后，延时 1 秒更新实例数量
                    // 这里延时 1 秒是给用户留足够的空间，不至于由于鼠标走的慢导致下次 Tooltip 又要等很久
                    _a.sent();
                    // CD 1 秒
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 2:
                    // CD 1 秒
                    _a.sent();
                    visibleTooltipCount -= 1;
                    return [2 /*return*/];
            }
        });
    }); };
    // 组件 unmount 的时候，清理一切
    useEffect(function () { return function () {
        mouseElement.current = null;
        mark.current = null;
        unwatch();
    }; }, []);
    return render({
        childrenProps: {
            onMouseEnter: enter,
            onMouseLeave: leave,
        },
        overlayProps: {},
        referenceElement: mouseElement.current,
    });
};
export function Tooltip(_a) {
    var title = _a.title, _b = _a.placement, placement = _b === void 0 ? "bottom-start" : _b, children = _a.children, _c = _a.openDelay, openDelay = _c === void 0 ? 600 : _c, _d = _a.openDelayWhenHasInstance, openDelayWhenHasInstance = _d === void 0 ? 300 : _d, popupContainer = _a.popupContainer;
    return (React.createElement(Bubble, { tooltip: true, trigger: [TooltipTrigger, { delay: openDelay, openDelayWhenHasInstance: openDelayWhenHasInstance }], closeOnScroll: true, placement: placement, placementOffset: 20, content: title, overlayStyle: { pointerEvents: "none" }, updateOnDimensionChange: false, popupContainer: popupContainer }, children));
}
//# sourceMappingURL=Tooltip.js.map