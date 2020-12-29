import { useEffect, useRef } from "react";
export function useOverlayFocus(visible, innerElementRef) {
    var outSideActiveElementRef = useRef(null);
    useEffect(function () {
        if (visible) {
            if (innerElementRef.current) {
                outSideActiveElementRef.current = document.activeElement;
                innerElementRef.current.focus({ preventScroll: true });
            }
        }
        else if (outSideActiveElementRef.current) {
            outSideActiveElementRef.current.focus({ preventScroll: true });
            outSideActiveElementRef.current = null;
        }
    }, [innerElementRef, visible]);
}
//# sourceMappingURL=use-overlay-focus.js.map