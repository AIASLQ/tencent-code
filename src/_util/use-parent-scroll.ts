import { useEffect } from "react";
import { getScrollParent, getParentNode, } from "popper.js/dist/umd/popper-utils";
export function useParentScroll(elementRef, onScroll) {
    useEffect(function () {
        if (!elementRef.current || !onScroll) {
            return function () { return null; };
        }
        // https://github.com/popperjs/popper-core/blob/v1.x/packages/popper/src/utils/setupEventListeners.js
        var dom = elementRef.current;
        var scrollParents = [];
        var scrollParent = getScrollParent(dom);
        function handleScroll(event) {
            // IE 元素内部滚动会冒泡至 window
            // 导致非 scrollParent 元素滚动触发 onScroll
            if (event.target === document || event.target === event.currentTarget) {
                onScroll(event);
            }
        }
        // Resize event listener on window
        window.addEventListener("resize", handleScroll, { passive: true });
        while (scrollParent) {
            var isBody = scrollParent.nodeName === "BODY";
            var target = isBody
                ? scrollParent.ownerDocument.defaultView
                : scrollParent;
            target.addEventListener("scroll", handleScroll, { passive: true });
            scrollParents.push(target);
            if (isBody) {
                break;
            }
            scrollParent = getScrollParent(getParentNode(scrollParent));
        }
        scrollParent = null;
        // Scroll event listener on scroll parents
        return function () {
            window.removeEventListener("resize", handleScroll);
            scrollParents.forEach(function (parent) {
                return parent.removeEventListener("scroll", handleScroll);
            });
            scrollParents = null;
        };
    }, [Boolean(onScroll), elementRef.current]); // eslint-disable-line react-hooks/exhaustive-deps
}
//# sourceMappingURL=use-parent-scroll.js.map