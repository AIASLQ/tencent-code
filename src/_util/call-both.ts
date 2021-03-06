import { __read, __spread, __values } from "tslib";
export function callBoth() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return (function () {
        var e_1, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var lastResult;
        try {
            for (var fns_1 = __values(fns), fns_1_1 = fns_1.next(); !fns_1_1.done; fns_1_1 = fns_1.next()) {
                var fn = fns_1_1.value;
                if (typeof fn === "function") {
                    lastResult = fn.apply(void 0, __spread(args));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fns_1_1 && !fns_1_1.done && (_a = fns_1.return)) _a.call(fns_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return lastResult;
    });
}
//# sourceMappingURL=call-both.js.map