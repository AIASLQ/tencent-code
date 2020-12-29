import { __assign, __read, __rest } from "tslib";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Modal } from "./ModalMain";
import { Button } from "../button";
import { ModalMessage } from "./ModalMessage";
import { callBoth } from "../_util/call-both";
import { useTranslation } from "../i18n";
import { mergeRefs } from "../_util/merge-refs";
import { ConfigProvider } from "../configprovider";
import { noop } from "../_util/noop";
/**
 * API 的方式唤起一个告警对话框
 * @param options
 */
export function alert(options) {
    var _a = options.onExited, onExited = _a === void 0 ? noop : _a, restOptions = __rest(options, ["onExited"]);
    return new Promise(function (resolve) {
        var el = document.createElement("div");
        ReactDOM.render(React.createElement(ConfigProvider, null,
            React.createElement(ModalAlertAPI, __assign({}, restOptions, { onButtonClick: function () { return resolve(); }, onExited: function () {
                    onExited();
                    ReactDOM.unmountComponentAtNode(el);
                } }))), el);
    });
}
/**
 * API 的方式唤起一个对话框显示成功信息
 */
export function success(options) {
    return alert(__assign({ type: "success" }, options));
}
/**
 * API 的方式唤起一个对话框显示失败信息
 */
export function error(options) {
    return alert(__assign({ type: "error" }, options));
}
function ModalAlertAPI(_a) {
    var onButtonClick = _a.onButtonClick, _b = _a.onClose, onClose = _b === void 0 ? noop : _b, modalProps = __rest(_a, ["onButtonClick", "onClose"]);
    var _c = __read(useState(false), 2), visible = _c[0], setVisible = _c[1];
    // 渲染之后，马上显示
    useEffect(function () { return setVisible(true); }, []);
    var close = function () {
        onClose();
        setVisible(false);
        onButtonClick();
    };
    return (React.createElement(ModalAlert, __assign({ visible: visible, onButtonClick: close, onClose: close }, modalProps)));
}
/**
 * 提供原始的 ModalAlert 组件。
 * 推荐使用 `Modal.success()` / `Modal.error()` API 来简化用法
 */
export function ModalAlert(_a) {
    var type = _a.type, message = _a.message, description = _a.description, modalProps = __rest(_a, ["type", "message", "description"]);
    useEffect(function () {
        window.focus();
    }, []);
    return (React.createElement(Modal, __assign({ maskClosable: true }, modalProps),
        React.createElement(Modal.Body, null,
            React.createElement(ModalMessage, { icon: type, message: message, description: description })),
        React.createElement(Modal.Footer, null,
            React.createElement(ModalButton, __assign({}, modalProps)))));
}
function ModalButton(_a) {
    var buttons = _a.buttons, buttonText = _a.buttonText, onButtonClick = _a.onButtonClick;
    var t = useTranslation();
    var mainButtonRef = useRef(null);
    useEffect(function () {
        if (mainButtonRef.current) {
            mainButtonRef.current.focus();
        }
    }, []);
    var okText = buttonText || t.okText;
    return (React.createElement(React.Fragment, null, (buttons || [
        React.createElement(Button, { type: "primary", htmlType: "button" }, okText),
    ]).map(function (button, index) {
        return React.cloneElement(button, {
            key: index,
            onClick: callBoth(button.props.onClick, onButtonClick),
            ref: index === 0
                ? mergeRefs(button.props.ref, mainButtonRef)
                : button.props.ref,
        });
    })));
}
//# sourceMappingURL=ModalAlert.js.map