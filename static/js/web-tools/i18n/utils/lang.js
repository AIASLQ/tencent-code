import { regionsMap, regionList, eea, languages } from '../config.web';
import { getQueryObj } from './url';

const IS_I18N = process.env.IS_I18N === 'true';

// 根据url获取当前的语言
export const getCurrentLanguage = () => {
    const url = window.location.pathname;

    const urlPathList = url.split('/');
    let isRedirect = urlPathList.find((x) => x === 'redirect');
    const isSearchLange = window.location.search.includes('lang');
    if (isRedirect || isSearchLange) {
        const { region, lang } = getQueryObj();
        // 这种情况判断region和lang，组织出默认lang
        let curRegion = getNormalRegion(region);
        return getNormalLang(curRegion, lang);
    }
    let currentLang = urlPathList.find((x) => languages.indexOf(x) > -1);
    if (currentLang) {
        return currentLang;
    }
    // 如果路径中没有语言，则看一下有没有对应的地区，欧盟国家先匹配到eea，匹配到取地区的默认第一个语言
    let currentRegion = urlPathList.find((x) => eea.indexOf(x) > -1);
    if (currentRegion) {
        currentRegion = 'eea';
    } else {
        currentRegion = urlPathList.find((x) => regionList.indexOf(x) > -1);
    }
    if (currentRegion) {
        return regionsMap[currentRegion].split(',')[0];
    } else {
        // 都找不到时候依据部署环境国内 zh-CN   国外 en
        return IS_I18N ? 'en' : 'zh-CN';
    }
};

// 判断当前lang是否在url中而且在语言范围内
export const isCurrentLangInUrl = (lang) => {
    const url = window.location.pathname;
    const urlPathList = url.split('/');
    return urlPathList.find(
        (item) => languages.indexOf(item) > -1 && lang === item
    );
};

// 根据url获取当前的地区
export const getCurrentRegion = () => {
    const url = window.location.href;
    return url.split('/').find((x) => regionList.indexOf(x) > -1) || 'df';
    // return url.split('/').find((x, idx) => idx < 2) || 'cn'
};

// 根据参数的region获取项目中可用的region
export const getNormalRegion = (region) => {
    let curRegion = region;
    if (eea.indexOf(curRegion) > -1) {
        curRegion = 'eea';
    }
    if (regionList.indexOf(curRegion) === -1) {
        curRegion = 'df';
    }
    return curRegion;
};

// 根据当前region和参数语言获取正常的 语言参数
export const getNormalLang = (curRegion, lang) => {
    const langs = regionsMap[curRegion].split(',');
    let curLang = lang;

    if (langs.indexOf(lang) === -1) {
        curLang = langs[0] || 'en';
    }
    return curLang;
};

export const getAgreementURL = (page, region) => {
    if (!page) return;

    let currentRegion = getCurrentRegion();
    let lang = getCurrentLanguage();
    region = region || currentRegion;

    if (lang === 'zh') {
        lang = 'zh-CN';
    } else if (lang === 'hk') {
        lang = 'zh-TW';
    }

    // 产品需求，如果地区为新加坡，跳到新加坡的服务协议，其他的默认到df下找服务协议
    if (region === 'df' && currentRegion === 'sg') {
        region = currentRegion;
    }
    return `/df/redirect.html?page=${page}&region=${region}&lang=${lang}`;
};

// PC官网，国际化根目录地址
export const getURLRoot = () => {
    if (!IS_I18N) return '';

    const pathnameArr = window.location.pathname.split('/');

    // 手机官网合并目录中的 mobile 不再需要
    if (pathnameArr.indexOf('mobile') > -1) return '';

    let rootUrl = pathnameArr.join('/');

    if (
        pathnameArr[pathnameArr.length - 1].indexOf('.html') > -1 || // 去掉 xxx.html
        pathnameArr[pathnameArr.length - 1].indexOf('') > -1 // 去掉 /
    ) {
        rootUrl = pathnameArr.slice(0, -1).join('/');
    }

    return rootUrl === '/' ? '' : rootUrl;
};

// 用户中心，国际化根目录地址
export const getUserCenterURLRoot = () => {
    return `/user-center${getURLRoot()}`;
};

// 获取请求参数的 c_lang 字段
export const getCLang = (currentLang) => {
    // 其他语言的 c_lang 字段值注意与后端同学沟通
    const c_lang_map = {
        en: 'en-us',
        'zh-CN': 'zh-cn',
        'zh-TW': 'zh-tc',
    };

    return c_lang_map[currentLang] || 'en-us';
};