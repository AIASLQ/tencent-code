import { __assign, __read, __rest } from "tslib";
import { noop } from "../_util/noop";
import { useDefault } from "../_util/use-default";
export function useDefaultValue(props, defaultDefaultValue) {
    var defaultValue = props.defaultValue, value = props.value, _a = props.onChange, onChange = _a === void 0 ? noop : _a, restProps = __rest(props, ["defaultValue", "value", "onChange"]);
    var _b = __read(useDefault(value, typeof defaultValue === "undefined" ? defaultDefaultValue : defaultValue, onChange), 2), finalValue = _b[0], finalOnChange = _b[1];
    /* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
    return __assign({ value: finalValue, onChange: finalOnChange }, restProps);
    /* eslint-enable @typescript-eslint/no-object-literal-type-assertion */
}
//# sourceMappingURL=controlled.js.map