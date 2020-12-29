import { __assign } from "tslib";
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { Button } from "../button";
import { FadeTransition, SlideTransition } from "../transition";
import { createRocket } from "../_util/create-rocket";
import { getOverlayRoot } from "../_util/get-overlay-root";
import { useVisibleTransition } from "../_util/use-visible-transition";
import { callBoth } from "../_util/call-both";
import { ModalMessage } from "./ModalMessage";
import { useOutsideClick } from "../_util/use-outside-click";
import { useConfig } from "../_util/config-context";
import { uuid } from "../_util/uuid";
import { zStack } from "../_util/z-stack";
import { BackDrop } from "../backdrop";
import { useOverlayFocus } from "../_util/use-overlay-focus";
var modelConfigOptions = {};
// 容器们
var ModalHeader = createRocket("ModalHeader", "div.@{prefix}-dialog__header");
var ModalBody = createRocket("ModalBody", "div.@{prefix}-dialog__body");
var ModalFooter = createRocket("ModalFooter", "div.@{prefix}-dialog__footer", "div.@{prefix}-dialog__btnwrap");
/**
 * 模态对话框组件
 */
export function Modal(props) {
    var _a = Object.assign({}, modelConfigOptions, props), visible = _a.visible, caption = _a.caption, size = _a.size, onClose = _a.onClose, onExited = _a.onExited, disableEscape = _a.disableEscape, disableCloseIcon = _a.disableCloseIcon, maskClosable = _a.maskClosable, _b = _a.destroyOnClose, destroyOnClose = _b === void 0 ? true : _b, className = _a.className, style = _a.style, children = _a.children, popupContainer = _a.popupContainer, maskStyle = _a.maskStyle;
    var _c = useConfig(), classPrefix = _c.classPrefix, globalPopupContainer = _c.popupContainer;
    var ref = useRef(null);
    var focusRef = useRef(null);
    var idRef = useRef(uuid());
    var _d = useOutsideClick(ref), listen = _d.listen, ignoreProps = _d.ignoreProps;
    listen(function () {
        if (maskClosable && visible && zStack.top === idRef.current && onClose) {
            onClose();
        }
    });
    // 监听 ESC 键
    useEffect(function () {
        if (!visible) {
            return function () { return null; };
        }
        var handleKeydown = function (evt) {
            if (evt.keyCode === 27 &&
                !disableEscape &&
                zStack.top === idRef.current &&
                onClose) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeydown);
        return function () { return window.removeEventListener("keydown", handleKeydown); };
    }, [visible, disableEscape, onClose]);
    var _e = useVisibleTransition(visible), contentIn = _e.contentIn, shouldContentEnter = _e.shouldContentEnter, shouldContentRender = _e.shouldContentRender, onContentExit = _e.onContentExit;
    useEffect(function () {
        if (contentIn) {
            var id_1 = idRef.current;
            zStack.push(id_1);
            return function () {
                zStack.remove(id_1);
            };
        }
        return function () { };
    }, [contentIn]);
    useOverlayFocus(visible, focusRef);
    if (!shouldContentRender && destroyOnClose) {
        return null;
    }
    // 有标题，或者有图标，就需要渲染 header
    var hasHeader = Boolean(caption) || !disableCloseIcon;
    // 内置尺寸名称
    var sizeClassName = null;
    if (typeof size === "string" && ["s", "l", "xl", "auto"].indexOf(size) > -1) {
        sizeClassName = "size-" + size;
    }
    var dialog = (React.createElement("div", { className: classPrefix + "-overlay " + classPrefix + "-dialog-parent", style: {
            display: !destroyOnClose && !contentIn ? "none" : undefined,
        } },
        React.createElement(FadeTransition, { in: shouldContentEnter, opacity: 1 },
            React.createElement(BackDrop, { style: maskStyle })),
        React.createElement("div", { tabIndex: 0, "aria-hidden": "true", style: { width: 0, height: 0, overflow: "hidden", outline: "none" }, ref: focusRef }),
        React.createElement(SlideTransition, { unmountOnExit: destroyOnClose, in: shouldContentEnter, onExited: callBoth(onExited, onContentExit) },
            React.createElement("div", { className: classNames(classPrefix + "-dialog", className), style: style, onClick: function (e) { return e.stopPropagation(); } },
                React.createElement("div", __assign({ ref: ref, className: classNames(classPrefix + "-dialog__inner", sizeClassName), style: size > 0 || /%$/.test(String(size)) ? { width: size } : null }, ignoreProps),
                    hasHeader && (React.createElement(ModalHeader, null,
                        caption && (React.createElement("h3", { className: classPrefix + "-dialog__headertitle" }, caption)),
                        !disableCloseIcon && (React.createElement(Button, { icon: "close", htmlType: "button", onClick: onClose })))),
                    children))),
        React.createElement("div", { tabIndex: 0, "aria-hidden": "true", style: { width: 0, height: 0, overflow: "hidden", outline: "none" }, onFocus: function () {
                if (focusRef.current) {
                    focusRef.current.focus();
                }
            } })));
    return createPortal(dialog, getOverlayRoot(popupContainer || globalPopupContainer));
}
/**
 * 渲染对话框的主要内容
 */
Modal.Body = ModalBody;
/**
 * 渲染对话框的底部内容
 */
Modal.Footer = ModalFooter;
/**
 * 对话框消息内容，可置于 Modal.Body 中
 */
Modal.Message = ModalMessage;
/**
 *
 */
Modal.config = function (options) {
    if (options === void 0) { options = {}; }
    Object.assign(modelConfigOptions, options);
};
//# sourceMappingURL=ModalMain.js.map