import { __assign } from "tslib";
import { useOutsideClick } from "../_util/use-outside-click";
export var buildinTriggers = {
    click: ClickTrigger,
    hover: HoverTrigger,
    focus: FocusTrigger,
    empty: EmptyTrigger,
};
/**
 * 点击的时候打开
 *
 * - children 上绑定 onClick 事件，点击时打开
 * - children 上添加 useClickOutside Hook，外部点击时关闭，并排除 overlayElement
 */
export function ClickTrigger(_a) {
    var childrenElementRef = _a.childrenElementRef, overlayElementRef = _a.overlayElementRef, visible = _a.visible, setVisible = _a.setVisible, _b = _a.openDelay, openDelay = _b === void 0 ? 0 : _b, _c = _a.closeDelay, closeDelay = _c === void 0 ? 0 : _c, render = _a.render;
    var listen = useOutsideClick([childrenElementRef, overlayElementRef]).listen;
    listen(function () { return visible && setVisible(false, closeDelay); });
    return render({
        overlayProps: {},
        childrenProps: {
            onClick: function () { return setVisible(!visible, openDelay); },
        },
    });
}
/**
 * 鼠标经过的时候打开
 */
export function HoverTrigger(_a) {
    var setVisible = _a.setVisible, _b = _a.openDelay, openDelay = _b === void 0 ? 50 : _b, _c = _a.closeDelay, closeDelay = _c === void 0 ? 100 : _c, render = _a.render;
    var commonProps = {
        onMouseEnter: function () { return setVisible(true, openDelay); },
        onMouseLeave: function () { return setVisible(false, closeDelay); },
    };
    return render({
        overlayProps: commonProps,
        childrenProps: commonProps,
    });
}
export function FocusTrigger(_a) {
    var setVisible = _a.setVisible, _b = _a.openDelay, openDelay = _b === void 0 ? 50 : _b, _c = _a.closeDelay, closeDelay = _c === void 0 ? 100 : _c, render = _a.render;
    var commonProps = {
        onFocus: function () { return setVisible(true, openDelay); },
        onBlur: function () { return setVisible(false, closeDelay); },
    };
    return render({
        overlayProps: __assign(__assign({}, commonProps), { tabIndex: 1000 }),
        childrenProps: commonProps,
    });
}
/**
 * 表示空的触发交互
 */
export function EmptyTrigger(props) {
    return props.render({ overlayProps: {}, childrenProps: {} });
}
//# sourceMappingURL=trigger.js.map