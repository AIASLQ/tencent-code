import React from "react";
import { Manager, Reference } from "react-popper";
import { OverlayLayer } from "./OverlayLayer";
/**
 * 为定位元素创建一个覆盖层
 *
 * @example
 *
  ```js
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);
  <Overlay
    layers={[
      <Overlay.Layer
        visible={visible}
        content={<div>我是浮层内容，<a onClick={close}>关闭</a></div>}
      />
    ]}
    children={ref => <a ref={ref} onClick={open}>点击弹出浮层</a>}
  />
  ```
 */
export function Overlay(_a) {
    var children = _a.children, layers = _a.layers;
    // 渲染定位组件
    return (React.createElement(Manager, null,
        React.createElement(Reference, null, function (_a) {
            var ref = _a.ref;
            return children(ref);
        }),
        layers));
}
Overlay.Layer = OverlayLayer;
//# sourceMappingURL=Overlay.js.map