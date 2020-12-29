import { __assign } from "tslib";
/* eslint-disable */
import { zh_cn } from "./locale/zh_cn";
import { en_us } from "./locale/en_us";
import { ja } from "./locale/ja";
import { ko } from "./locale/ko";
export var translationMap = {
    zh_cn: zh_cn,
    zh: zh_cn,
    en_us: __assign(__assign({}, zh_cn), en_us),
    en: __assign(__assign({}, zh_cn), en_us),
    ja: __assign(__assign(__assign({}, zh_cn), en_us), ja),
    jp: __assign(__assign(__assign({}, zh_cn), en_us), ja),
    ko: __assign(__assign(__assign({}, zh_cn), en_us), ko),
};
/* eslint-enable */
//# sourceMappingURL=translationMap.js.map