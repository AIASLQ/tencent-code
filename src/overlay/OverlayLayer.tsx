import { __assign } from "tslib";
import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { Popper, } from "react-popper";
import { getOverlayRoot } from "../_util/get-overlay-root";
import { mergeStyle } from "../_util/merge-style";
import { callBoth } from "../_util/call-both";
import { ScaleTransition } from "../transition";
import { useVisibleTransition } from "../_util/use-visible-transition";
import { injectValue } from "../_util/inject-value";
import { useConfig } from "../_util/config-context";
var scaleOriginForPlacement = (function (originMap) { return function (placement) {
    var basePlacement = placement.split("-").shift();
    return originMap[basePlacement];
}; })({
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
});
/**
 * 为定位元素创建一个覆盖层
 *
 * @example
 *
  ```js
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);
  <Overlay
    visible={visible}
    content={<div>我是浮层内容，<a onClick={close}>关闭</a></div>}
    children={ref => <a ref={ref} onClick={open}>点击弹出浮层</a>}
  />
  ```
 */
export function OverlayLayer(_a) {
    var content = _a.content, overlayRef = _a.overlayRef, _b = _a.overlayProps, overlayProps = _b === void 0 ? {} : _b, _c = _a.placement, placement = _c === void 0 ? "bottom-start" : _c, visible = _a.visible, _d = _a.placementOffset, placementOffset = _d === void 0 ? 5 : _d, _e = _a.transitionTimeout, transitionTimeout = _e === void 0 ? { enter: 50, exit: 300 } : _e, updateOnDimensionChange = _a.updateOnDimensionChange, referenceElement = _a.referenceElement, _f = _a.animationScaleFrom, animationScaleFrom = _f === void 0 ? 0.94 : _f, // 为什么？因为此时效果比较好
    escapeWithReference = _a.escapeWithReference, popupContainer = _a.popupContainer, _g = _a.modifiers, modifiers = _g === void 0 ? {} : _g;
    var _h = useConfig(), classPrefix = _h.classPrefix, globalPopupContainer = _h.popupContainer;
    // visible 启动时，才开始渲染内容，进行动画
    var _j = useVisibleTransition(visible), shouldContentRender = _j.shouldContentRender, shouldContentEnter = _j.shouldContentEnter, onContentExit = _j.onContentExit;
    if (!shouldContentRender) {
        return null;
    }
    // 渲染定位组件
    return ReactDOM.createPortal(React.createElement(Popper, { referenceElement: referenceElement, placement: placement, modifiers: __assign({ offset: {
                enabled: true,
                offset: Array.isArray(placementOffset)
                    ? placementOffset[0] + ", " + placementOffset[1]
                    : "0," + placementOffset,
            }, preventOverflow: {
                escapeWithReference: escapeWithReference,
                boundariesElement: "viewport",
            }, computeStyle: {
                // 使用 translate3d() 在 Windows 下有 DPI 缩放时会导致模糊
                // 只有在 resize 和 scroll 的时候才会有更新的需求，暂时关闭 GPU 加速
                gpuAcceleration: false,
            } }, modifiers), eventsEnabled: updateOnDimensionChange, positionFixed: true }, function (popper) {
        var overlayContent = injectValue(content)(__assign(__assign({}, popper), { visible: visible }));
        return (React.createElement(ScaleTransition, { from: animationScaleFrom, origin: scaleOriginForPlacement(placement), timeout: transitionTimeout, in: shouldContentEnter, onEnter: function () { return popper.scheduleUpdate(); }, onExited: onContentExit },
            React.createElement("div", __assign({}, overlayProps, { 
                // 覆盖层类名，样式表中包含 z-index 来确定覆盖层的层级
                className: classNames(classPrefix + "-overlay", overlayProps.className), 
                // ref 同时提供给 popper 和 contentRef
                ref: callBoth(popper.ref, overlayRef), 
                // popper.style 为 overlay 浮层提供定位
                // contentStyle 提供给用户改写的可能
                style: mergeStyle(popper.style, { willChange: null }, overlayProps.style), "data-placement": popper.placement || placement }), React.isValidElement(overlayContent) ? (overlayContent) : (React.createElement("span", null, overlayContent)))));
    }), getOverlayRoot(popupContainer || globalPopupContainer));
}
//# sourceMappingURL=OverlayLayer.js.map