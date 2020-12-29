/* eslint-disable @typescript-eslint/camelcase */
import { useEffect, useState } from "react";
import { zh_cn } from "./locale/zh_cn";
import { useConfig } from "../_util/config-context";
import { translationMap } from "./translationMap";
// 约定中语言名不规范
var lngs = {
    zh: "zh_cn",
    en: "en_us",
    jp: "ja",
};
export function setLocale() {
    console.error("`setLocale()` 方法已废弃");
}
export function useTranslation(moment) {
    var configLocale = useConfig().locale;
    var t = translationMap[configLocale] || zh_cn;
    var locale = lngs[t.locale] || t.locale;
    useState(function () {
        if (moment) {
            moment.locale(locale);
        }
    });
    useEffect(function () {
        if (moment) {
            moment.locale(locale);
        }
    }, [locale]); // eslint-disable-line react-hooks/exhaustive-deps
    return t;
}
/* eslint-enable @typescript-eslint/camelcase */
//# sourceMappingURL=translation.js.map