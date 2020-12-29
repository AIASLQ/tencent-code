import React from "react";
import { Icon } from "../icon";
import { useConfig } from "../_util/config-context";
export function ModalMessage(_a) {
    var icon = _a.icon, message = _a.message, description = _a.description;
    var classPrefix = useConfig().classPrefix;
    return (React.createElement("div", { className: classPrefix + "-media" },
        icon && (React.createElement("div", { className: classPrefix + "-media__left" },
            React.createElement(Icon, { type: icon, size: "l" }))),
        React.createElement("div", { className: classPrefix + "-media__body" },
            message && (React.createElement("h3", { className: classPrefix + "-dialog__messagetitle" }, message)),
            description && (React.createElement("div", { className: classPrefix + "-dialog__messagetext" }, description)))));
}
//# sourceMappingURL=ModalMessage.js.map