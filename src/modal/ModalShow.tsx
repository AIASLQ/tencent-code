import { __assign, __read } from "tslib";
import React, { useEffect, useState, forwardRef, useImperativeHandle, } from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { Modal } from "./ModalMain";
import { ConfigProvider } from "../configprovider";
/**
 * API 方式唤起一个对话框内容
 */
export function show(options) {
    var el = document.createElement("div");
    var instanceRef = React.createRef();
    ReactDOM.render(React.createElement(ConfigProvider, null,
        React.createElement(ModalShow, __assign({}, options, { ref: instanceRef, onExited: function () { return unmountComponentAtNode(el); } }))), el);
    return {
        destroy: function () {
            if (instanceRef.current) {
                instanceRef.current.setVisible(false);
            }
        },
    };
}
var ModalShow = forwardRef(function ModalShow(props, ref) {
    var _a = __read(useState(false), 2), visible = _a[0], setVisible = _a[1];
    // 渲染之后，马上显示
    useEffect(function () {
        setVisible(true);
    }, []);
    // 实例 ref 到外部
    useImperativeHandle(ref, function () { return ({ setVisible: setVisible }); });
    return React.createElement(Modal, __assign({}, props, { visible: visible }));
});
//# sourceMappingURL=ModalShow.js.map