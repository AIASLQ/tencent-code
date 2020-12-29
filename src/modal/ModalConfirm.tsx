import { __assign, __awaiter, __generator, __read, __rest } from "tslib";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Modal } from "./ModalMain";
import { Button } from "../button";
import { ModalMessage } from "./ModalMessage";
import { useTranslation } from "../i18n";
import { ConfigProvider } from "../configprovider";
import { noop } from "../_util/noop";
/**
 * API 的方式唤起一个确认对话框
 * @param options
 * @returns 异步返回布尔值，为 true 则表示用户确认，为 false 则表示用户取消
 */
export function confirm(options) {
    var _this = this;
    var _a = options.onOk, onOk = _a === void 0 ? noop : _a, _b = options.onCancel, onCancel = _b === void 0 ? noop : _b, restOptions = __rest(options, ["onOk", "onCancel"]);
    return new Promise(function (resolve) {
        var el = document.createElement("div");
        ReactDOM.render(React.createElement(ConfigProvider, null,
            React.createElement(ModalConfirmAPI, __assign({}, restOptions, { onOk: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, onOk()];
                            case 1:
                                _a.sent();
                                resolve(true);
                                return [2 /*return*/];
                        }
                    });
                }); }, onCancel: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, onCancel()];
                            case 1:
                                _a.sent();
                                resolve(false);
                                return [2 /*return*/];
                        }
                    });
                }); }, onExited: function () {
                    ReactDOM.unmountComponentAtNode(el);
                } }))), el);
    });
}
function ModalConfirmAPI(_a) {
    var _this = this;
    var onOk = _a.onOk, onCancel = _a.onCancel, confirmModalProps = __rest(_a, ["onOk", "onCancel"]);
    var _b = __read(useState(false), 2), visible = _b[0], setVisible = _b[1];
    // 渲染之后，马上显示
    useEffect(function () { return setVisible(true); }, []);
    var ok = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onOk()];
                case 1:
                    _a.sent();
                    setVisible(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var cancel = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onCancel()];
                case 1:
                    _a.sent();
                    setVisible(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(ModalConfirm, __assign({ visible: visible, onOk: ok, onCancel: cancel, onClose: cancel }, confirmModalProps)));
}
/**
 * 提供原始的 ModalConfirm 组件。
 * 推荐使用 `Modal.confirm()` API 来简化用法
 */
export function ModalConfirm(_a) {
    var message = _a.message, description = _a.description, icon = _a.icon, modalProps = __rest(_a, ["message", "description", "icon"]);
    useEffect(function () {
        window.focus();
    }, []);
    return (React.createElement(Modal, __assign({ disableEscape: true }, modalProps),
        React.createElement(Modal.Body, null,
            React.createElement(ModalMessage, { icon: icon, message: message, description: description })),
        React.createElement(Modal.Footer, null,
            React.createElement(ModalButton, __assign({}, modalProps)))));
}
function ModalButton(_a) {
    var _this = this;
    var onOk = _a.onOk, okText = _a.okText, onCancel = _a.onCancel, cancelText = _a.cancelText;
    var t = useTranslation();
    var mainButtonRef = useRef(null);
    var _b = __read(useState(false), 2), okLoading = _b[0], setOkLoading = _b[1];
    var _c = __read(useState(false), 2), cancelLoading = _c[0], setCancelLoading = _c[1];
    useEffect(function () {
        if (mainButtonRef.current) {
            mainButtonRef.current.focus();
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { type: "primary", htmlType: "button", loading: okLoading, disabled: cancelLoading, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setOkLoading(true);
                            return [4 /*yield*/, onOk()];
                        case 1:
                            _a.sent();
                            setOkLoading(false);
                            return [2 /*return*/];
                    }
                });
            }); }, ref: mainButtonRef }, okText || t.okText),
        React.createElement(Button, { htmlType: "button", loading: cancelLoading, disabled: okLoading, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setCancelLoading(true);
                            return [4 /*yield*/, onCancel()];
                        case 1:
                            _a.sent();
                            setCancelLoading(false);
                            return [2 /*return*/];
                    }
                });
            }); } }, cancelText || t.cancelText)));
}
//# sourceMappingURL=ModalConfirm.js.map