import { forwardRef } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
export function forwardRefWithStatics(component, statics) {
    return hoistNonReactStatics(forwardRef(component), statics);
}
//# sourceMappingURL=forward-ref-with-statics.js.map