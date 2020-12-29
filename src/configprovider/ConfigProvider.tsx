import { __assign, __extends, __read, __rest } from "tslib";
import React, { useEffect, useState } from "react";
import EventEmitter from "eventemitter3";
import { ConfigContext } from "./ConfigContext";
var ConfigEmitter = /** @class */ (function (_super) {
    __extends(ConfigEmitter, _super);
    function ConfigEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConfigEmitter;
}(EventEmitter));
var configEmitter = new ConfigEmitter();
var configStore = {};
export function setConfig(config) {
    if (config === void 0) { config = {}; }
    Object.assign(configStore, config);
    configEmitter.emit("set", configStore);
}
export function ConfigProvider(_a) {
    var children = _a.children, configProps = __rest(_a, ["children"]);
    var _b = __read(useState(configStore), 2), globalConfig = _b[0], setGlobalConfig = _b[1];
    useEffect(function () {
        var callback = function (config) {
            setGlobalConfig(function (curConfig) { return (__assign(__assign({}, curConfig), config)); });
        };
        configEmitter.on("set", callback);
        return function () { return configEmitter.removeListener("set", callback); };
    }, []);
    useEffect(function () {
        // props 填充全局配置空白
        Object.assign(configStore, __assign(__assign({}, configProps), configStore));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [configProps.classPrefix, configProps.locale]);
    // props 优先级高于全局配置
    var config = Object.assign({}, globalConfig, configProps);
    return (React.createElement(ConfigContext.Provider, { value: config }, children));
}
//# sourceMappingURL=ConfigProvider.js.map