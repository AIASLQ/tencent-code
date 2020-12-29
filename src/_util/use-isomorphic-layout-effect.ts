import { useEffect, useLayoutEffect } from "react";
export var useIsomorphicLayoutEffect = typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
    ? useLayoutEffect
    : useEffect;
//# sourceMappingURL=use-isomorphic-layout-effect.js.map