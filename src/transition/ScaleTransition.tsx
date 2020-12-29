import { __assign, __rest } from "tslib";
import React from "react";
import { scale } from "../_util/transition";
import { BaseTransition } from "./BaseTransition";
export function ScaleTransition(_a) {
    var from = _a.from, to = _a.to, timeout = _a.timeout, origin = _a.origin, rest = __rest(_a, ["from", "to", "timeout", "origin"]);
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
    return (React.createElement(BaseTransition, __assign({}, scale(from, to, enterTimeout, exitTimeout, origin), rest)));
}
//# sourceMappingURL=ScaleTransition.js.map