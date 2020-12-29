/**
 * 获取/创建浮层容器
 */
import { injectValue } from "./inject-value";
var rootId = "tea-overlay-root";
var root;
export function getOverlayRoot(popupContainer) {
    if (popupContainer) {
        return injectValue(popupContainer)();
    }
    if (typeof document === "object") {
        root = root || document.getElementById(rootId);
        if (!root) {
            root = document.createElement("div");
            root.id = rootId;
            document.body.appendChild(root);
        }
    }
    return root;
}
//# sourceMappingURL=get-overlay-root.js.map