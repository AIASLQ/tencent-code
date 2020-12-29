import { __assign, __read } from "tslib";
import React, { useRef } from "react";
import classNames from "classnames";
import { Overlay } from "../overlay";
import { useDelayVisible } from "./useDelayVisible";
import { useParentScroll } from "../_util/use-parent-scroll";
import { buildinTriggers } from "./trigger";
import { mergeStyle } from "../_util/merge-style";
import { DomRef } from "../domref";
import { mergeRefs } from "../_util/merge-refs";
export function Popover(props) {
    var _a;
    var overlay = props.overlay, _b = props.trigger, trigger = _b === void 0 ? "hover" : _b, _c = props.placement, placement = _c === void 0 ? "top" : _c, _d = props.placementOffset, placementOffset = _d === void 0 ? 10 : _d, escapeWithReference = props.escapeWithReference, popupContainer = props.popupContainer, children = props.children, closeOnScroll = props.closeOnScroll, overlayClassName = props.overlayClassName, overlayStyle = props.overlayStyle, openDelay = props.openDelay, closeDelay = props.closeDelay, updateOnDimensionChange = props.updateOnDimensionChange, animationScaleFrom = props.animationScaleFrom, transitionTimeout = props.transitionTimeout;
    var overlayRef = useRef(null);
    var childrenRef = useRef(null);
    var _e = useDelayVisible(props), visible = _e.visible, setVisible = _e.setVisible;
    // 设置了 closeOnScroll，则使用
    useParentScroll(childrenRef, visible && closeOnScroll && (function () { return setVisible(false, closeDelay); }));
    var Trigger;
    var triggerExtraProps = {};
    // 使用指定的触发交互组件
    if (typeof trigger === "string") {
        Trigger = buildinTriggers[trigger];
    }
    // 支持附加 props 的触发器
    else if (Array.isArray(trigger)) {
        _a = __read(trigger, 2), Trigger = _a[0], triggerExtraProps = _a[1];
    }
    // 本身就是 Trigger 组件
    else {
        Trigger = trigger;
    }
    // fallback
    Trigger = Trigger || buildinTriggers.empty;
    var hasOneValidElement = React.Children.count(children) === 1 &&
        React.isValidElement(React.Children.toArray(children)[0]);
    return (React.createElement(Trigger, __assign({}, triggerExtraProps, { overlayElementRef: overlayRef, childrenElementRef: childrenRef, visible: visible, setVisible: setVisible, openDelay: openDelay, closeDelay: closeDelay, render: function (_a) {
            var overlayProps = _a.overlayProps, childrenProps = _a.childrenProps, referenceElement = _a.referenceElement;
            return (React.createElement(Overlay, { layers: [
                    React.createElement(Overlay.Layer, { key: "popover", visible: visible, placement: placement, placementOffset: placementOffset, animationScaleFrom: animationScaleFrom, referenceElement: props.referenceElement || referenceElement, content: overlay, overlayRef: function (overlayElement) {
                            overlayRef.current = overlayElement;
                        }, overlayProps: __assign(__assign({}, overlayProps), { className: classNames(overlayProps.className, overlayClassName), style: mergeStyle({
                                // 已经隐藏之后，动画过程不响应事件
                                pointerEvents: visible ? null : "none",
                            }, overlayProps.style, overlayStyle) }), updateOnDimensionChange: updateOnDimensionChange, transitionTimeout: transitionTimeout, escapeWithReference: escapeWithReference, popupContainer: popupContainer }),
                ] }, function (ref) { return (React.createElement(DomRef, __assign({}, childrenProps, { ref: mergeRefs(ref, childrenRef) }), hasOneValidElement ? (React.Children.toArray(children)[0]) : (React.createElement("span", null, children)))); }));
        } })));
}
//# sourceMappingURL=Popover.js.map