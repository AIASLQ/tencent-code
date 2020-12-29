import { __assign } from "tslib";
import { useContext } from "react";
import { ConfigContext, DEFAULT_CLASS_PREFIX, DEFAULT_LOCALE, } from "../../configprovider/ConfigContext";
export function useConfig() {
    var context = useContext(ConfigContext) || {};
    return __assign({ classPrefix: DEFAULT_CLASS_PREFIX, locale: DEFAULT_LOCALE }, context);
}
//# sourceMappingURL=use-config.js.map