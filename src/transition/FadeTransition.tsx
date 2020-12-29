import { __assign, __rest } from "tslib";
import React from "react";
import { fade } from "../_util/transition";
import { BaseTransition } from "./BaseTransition";
export function FadeTransition(_a) {
    var opacity = _a.opacity, timeout = _a.timeout, rest = __rest(_a, ["opacity", "timeout"]);
    var enterTimeout;
    var exitTimeout;
    if (typeof timeout === "number") {
        enterTimeout = timeout;
        exitTimeout = timeout;
    }
    else if (timeout && typeof timeout === "object") {
        enterTimeout = timeout.enter;
        exitTimeout = timeout.exit;
    }
    return (React.createElement(BaseTransition, __assign({}, fade(opacity, enterTimeout, exitTimeout), rest)));
}
//# sourceMappingURL=FadeTransition.js.map