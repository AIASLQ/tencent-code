import { __assign, __extends, __read, __rest, __values } from "tslib";
import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import { mergeRefs } from "../_util/merge-refs";
import { callBoth } from "../_util/call-both";
var DomRefInner = /** @class */ (function (_super) {
    __extends(DomRefInner, _super);
    function DomRefInner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomRefInner.prototype.componentDidMount = function () {
        var dom = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
        var domRef = this.props.domRef;
        mergeRefs(domRef)(dom);
    };
    DomRefInner.prototype.componentDidUpdate = function () {
        var dom = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
        var domRef = this.props.domRef;
        mergeRefs(domRef)(dom);
    };
    DomRefInner.prototype.componentWillUnmount = function () {
        var domRef = this.props.domRef;
        mergeRefs(domRef)(null);
    };
    DomRefInner.prototype.render = function () {
        var e_1, _a;
        var _b = this.props, children = _b.children, domRef = _b.domRef, props = __rest(_b, ["children", "domRef"]);
        var childrenElement = children;
        var attachProps = {};
        // 元素类型的，可以把要求渲染的 childrenProps 和原本的 props 合并
        if (React.isValidElement(childrenElement)) {
            try {
                for (var _c = __values(Object.entries(props)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), propName = _e[0], propValue = _e[1];
                    if (typeof propValue === "function") {
                        // 子节点之前已经有处理函数，则同时调用
                        if (childrenElement.props[propName]) {
                            attachProps[propName] = callBoth(propValue, childrenElement.props[propName]);
                        }
                        else {
                            attachProps[propName] = propValue;
                        }
                    }
                    else {
                        attachProps[propName] = propValue;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return React.cloneElement(childrenElement, attachProps);
        }
        return children;
    };
    return DomRefInner;
}(React.Component));
export var DomRef = forwardRef(function (props, ref) { return (React.createElement(DomRefInner, __assign({}, props, { domRef: ref }))); });
//# sourceMappingURL=DomRef.js.map