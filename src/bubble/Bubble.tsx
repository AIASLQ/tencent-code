import { __assign, __read, __rest } from "tslib";
import React, { useRef } from "react";
import { BubbleContent } from "./BubbleContent";
import { Popover } from "../popover";
import { isChildOfType } from "../_util/is-child-of-type";
import { Button } from "../button";
import { useIsomorphicLayoutEffect } from "../_util/use-isomorphic-layout-effect";
export function Bubble(_a) {
    var visible = _a.visible, onVisibleChange = _a.onVisibleChange, content = _a.content, arrowPointAtCenter = _a.arrowPointAtCenter, trigger = _a.trigger, overlayClassName = _a.overlayClassName, overlayStyle = _a.overlayStyle, openDelay = _a.openDelay, closeDelay = _a.closeDelay, closeOnScroll = _a.closeOnScroll, updateOnDimensionChange = _a.updateOnDimensionChange, transitionTimeout = _a.transitionTimeout, escapeWithReference = _a.escapeWithReference, referenceElement = _a.referenceElement, popupContainer = _a.popupContainer, _b = _a.placement, placement = _b === void 0 ? "top" : _b, placementOffset = _a.placementOffset, animationScaleFrom = _a.animationScaleFrom, children = _a.children, _c = _a.updateDeps, updateDeps = _c === void 0 ? [content] : _c, bubbleProps = __rest(_a, ["visible", "onVisibleChange", "content", "arrowPointAtCenter", "trigger", "overlayClassName", "overlayStyle", "openDelay", "closeDelay", "closeOnScroll", "updateOnDimensionChange", "transitionTimeout", "escapeWithReference", "referenceElement", "popupContainer", "placement", "placementOffset", "animationScaleFrom", "children", "updateDeps"]);
    // 内容变化时更新位置
    var scheduleUpdateRef = useRef(null);
    var deps = Array.isArray(updateDeps) ? updateDeps : [content];
    useIsomorphicLayoutEffect(function () { return function () {
        if (scheduleUpdateRef.current) {
            scheduleUpdateRef.current();
        }
    }; }, deps // eslint-disable-line react-hooks/exhaustive-deps
    );
    // issue: https://github.com/facebook/react/issues/4251
    if (React.Children.count(children) === 1 &&
        (isChildOfType(children, Button) || isChildOfType(children, "button")) &&
        children.props.disabled) {
        // eslint-disable-next-line no-param-reassign
        children = (React.createElement("span", { style: {
                display: "inline-block",
                cursor: "not-allowed",
            } }, React.cloneElement(children, {
            style: __assign(__assign({}, (children.props.style || {})), { pointerEvents: "none" }),
        })));
    }
    var offset = placementOffset || 10;
    if (arrowPointAtCenter) {
        offset = Array.isArray(offset) ? offset[1] : offset;
        var _d = __read(placement.split("-"), 2), placementModifier = _d[1];
        if (placementModifier === "start") {
            offset = ["50%-26", offset];
        }
        else if (placementModifier === "end") {
            offset = ["26-50%", offset];
        }
    }
    return (React.createElement(Popover, { visible: visible, onVisibleChange: onVisibleChange, closeOnScroll: closeOnScroll, trigger: trigger, placement: placement, placementOffset: offset, animationScaleFrom: animationScaleFrom, referenceElement: referenceElement, overlay: function (_a) {
            var scheduleUpdate = _a.scheduleUpdate, placement = _a.placement;
            scheduleUpdateRef.current = scheduleUpdate;
            if (!content && content !== 0) {
                return null;
            }
            return (React.createElement(BubbleContent, __assign({}, bubbleProps, { placement: placement }), content));
        }, overlayClassName: overlayClassName, overlayStyle: overlayStyle, openDelay: openDelay, closeDelay: closeDelay, updateOnDimensionChange: updateOnDimensionChange, transitionTimeout: transitionTimeout, escapeWithReference: escapeWithReference, popupContainer: popupContainer }, children));
}
//# sourceMappingURL=Bubble.js.map