import { __assign, __rest } from "tslib";
import React from "react";
import { slide } from "../_util/transition";
import { BaseTransition } from "./BaseTransition";
export function SlideTransition(_a) {
    var from = _a.from, to = _a.to, timeout = _a.timeout, rest = __rest(_a, ["from", "to", "timeout"]);
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
    return (React.createElement(BaseTransition, __assign({}, slide(from, to, enterTimeout, exitTimeout), rest)));
}
//# sourceMappingURL=SlideTransition.js.map