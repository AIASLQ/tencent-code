import { __values } from "tslib";
export function mergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (instance) {
        var e_1, _a;
        try {
            for (var refs_1 = __values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
                var ref = refs_1_1.value;
                if (typeof ref === "function") {
                    ref(instance);
                }
                else if (ref) {
                    ref.current = instance;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (refs_1_1 && !refs_1_1.done && (_a = refs_1.return)) _a.call(refs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
}
//# sourceMappingURL=merge-refs.js.map