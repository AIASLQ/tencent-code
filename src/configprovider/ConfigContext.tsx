import { createContext } from "react";
// 支持 webpack 注入
export var DEFAULT_CLASS_PREFIX = typeof TEA_CLASS_PREFIX !== "undefined" ? TEA_CLASS_PREFIX : "tea";
export var DEFAULT_LOCALE = typeof WEBPACK_BUILD_LOCALE !== "undefined" ? WEBPACK_BUILD_LOCALE : "zh";
export var ConfigContext = createContext({
    classPrefix: DEFAULT_CLASS_PREFIX,
    locale: DEFAULT_LOCALE,
});
//# sourceMappingURL=ConfigContext.js.map