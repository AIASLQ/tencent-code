import { ENV } from '@src/web-tools/utils/constant';
import configureStore from '@src/web-tools/store/configureStore';
import { reset, updateWeChatRedirectUrl } from '@src/web-tools/store/actions/index';
import { isLogin, beaconReport } from '@src/web-tools/user-center/index';
import { getWechatMpAuthUrl } from '@src/web-tools/utils/tx-wechat';
import $http from './http';
import {
    deepCopy,
    randomString,
    getRequest,
    addClass,
    removeClass,
    getOsName,
    downloadApp,
    launchWemeet,
    isWin,
    isMac,
    isLeIE9,
    isIE10,
    isIE9,
    isSafari,
    isEdge,
    isFF,
    isIE,
    isMobile,
    isiPad,
    isIPad,
    isWxworkInAndroid,
    utoa,
    atou,
    extendPrototype,
    verifyEmail,
    addURLSearch,
    execCommandCopy,
    compareVersion,
    isWeiXinQBCoreLt,
    isWeiXinGte656,
    isWindowsWechat,
    sleep,
    doWeiXinLaunch,
    jumpScheme,
    divideNum,
    checkLocation,
    isTestEnv,
    isLocalEnv,
    isPreReleaseEnv,
    isNormalEnv,
    loadScript,
    isFormalEnv,
    isWeChat,
} from '@src/web-tools/utils/util';
import { getInstallState } from '@src/web-tools/utils/tx-weixin-jsbridge';
import Toast from '../components/Toast/Toast';

export {
    deepCopy,
    randomString,
    getRequest,
    addClass,
    removeClass,
    getOsName,
    downloadApp,
    launchWemeet,
    isWin,
    isMac,
    isLeIE9,
    isIE10,
    isIE9,
    isSafari,
    isEdge,
    isFF,
    isIE,
    isMobile,
    isiPad,
    isIPad,
    isWxworkInAndroid,
    utoa,
    atou,
    extendPrototype,
    verifyEmail,
    addURLSearch,
    execCommandCopy,
    compareVersion,
    isWeiXinQBCoreLt,
    isWeiXinGte656,
    isWindowsWechat,
    sleep,
    doWeiXinLaunch,
    jumpScheme,
    divideNum,
    checkLocation,
    isTestEnv,
    isLocalEnv,
    isPreReleaseEnv,
    isNormalEnv,
    loadScript,
    beaconReport,
    getInstallState,
};

const { store } = configureStore();

const storageConfig = {
    key: 'web',
    storage: window.sessionStorage,
};

export const setStorage = (params, key = storageConfig.key) => {
    if (storageConfig.storage) {
        try {
            storageConfig.storage.setItem(key, JSON.stringify(params));
        } catch (err) {
            console.error(err);
        }
    } else {
        console.error('storageConfig.storage is undefined.');
    }
};

/**
 * @param {String} rePw.authCode - 重置密码页面数据
 * @param {String} rePw.type - phone or email
 * @param {String} rePw.email - 可选
 * @param {String} rePw.area - 可选
 * @param {String} rePw.phone - 可选
 */
export const getStorage = (key = storageConfig.key) => {
    if (storageConfig.storage) {
        try {
            return JSON.parse(storageConfig.storage.getItem(key)) || {};
        } catch (err) {
            console.error(err);
        }
    } else {
        console.error('storageConfig.storage is undefined.');
    }
};

export const deleteStorageByKey = (key) => {
    const meetData = getStorage();
    if (meetData && meetData[key]) {
        delete meetData[key];
        setStorage(meetData);
    }
};

export const getSdkAppIdByEvnNum = (env) => {
    let res = ENV.PRODUCT.APP_ID;
    switch (env) {
        case 0:
            res = ENV.PRODUCT.APP_ID;
            break;
        case 1:
            res = ENV.TEST.APP_ID;
            break;
        case 2:
            res = ENV.EXTERNAL_TEST.APP_ID;
            break;
        case 3:
            res = ENV.PRE_RELEASE.APP_ID;
            break;
        default:
            console.log('>>> default:');
    }
    return res;
};

export const freeExperience = () => { // 免费体验
    location.href = './regist.html';
    // window.open('https://act.1700.cn/s2/5119222/d1c2/');
};

export const contactSales = () => { // 联系销售
    // location.href = 'https://act.1700.cn/s2/5119222/d1c2/';
    window.open('https://act.1700.cn/s2/5119222/d1c2/');
};

function parseQueryString(query) {
    const vars = query.split('&');
    const queryString = {};
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        const key = decodeURIComponent(pair[0]);
        const value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof queryString[key] === 'undefined') {
            queryString[key] = value;
            // If second entry with this name
        } else if (typeof queryString[key] === 'string') {
            const arr = [queryString[key], value];
            queryString[key] = arr;
            // If third or later entry with this name
        } else {
            queryString[key].push(value);
        }
    }
    return queryString;
}

export const getQueryObject = function() {
    return parseQueryString(window.location.search.substring(1));
};

// Cross-browser DOM event binding
export const addEventListener = (elem, event, fn) => {
    if (elem.addEventListener) {
        return elem.addEventListener(event, fn, false);
    }
    if (elem.attachEvent) {
        return elem.attachEvent(`on${event}`, fn);
    }
};

export const setAttrInputType = (el, show) => {
    const ATTR_INPUT_TYPE = 'data-placeholder-type';
    el.setAttribute(ATTR_INPUT_TYPE, show ? 'text' : 'password');
};

export const gotoUserCenter = (idx) => {
    const host = window.location.origin;
    switch (idx) {
        case 1: // 加入会议
            location.href = `${host}/user-center/join`;
            break;
        case 2: // 预定会议
            location.href = `${host}/user-center/schedule`;
            break;
        case 3: // 发起会议
            location.href = `${host}/user-center/start`;
            break;
        case 4: // 我的会议
            location.href = `${host}/user-center/user-meeting-list`;
            break;
        case 5: // 个人资料
            location.href = `${host}/user-center/personal-information`;
            break;
        default:
            console.log('>>> default');
    }
};

export const loadVConsoleScript = () => {
    if (!isFormalEnv() || window.debugMode) {
        loadScript('https://meeting.tencent.com/static/lib/vconsole.min.js').then(() => {
                if (window.VConsole) {
                    // eslint-disable-next-line no-new
                    new window.VConsole();
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
};

export const shouldLoadBeaconSdk = () => {
    const dbgbeacon = getRequest('dbgbeacon') || false;
    const testUrl = function(url) {
        // return true;
        return /:\/\/meeting.qq.com/.test(url) || /:\/\/meeting.tencent.com/.test(url) || /:\/\/wemeet.qq.com/.test(url);
    };
    return ((testUrl(window.location.href) && !/Trident/i.test(navigator.userAgent)) || dbgbeacon);
};

/**
 * 加载灯塔 sdk
 */
// export const loadBeaconSdk = () => {
//   let dbgbeacon = getRequest('dbgbeacon') || false;
//   let appkey = '00000C2AM539PVHX';
//   if (/Trident/i.test(navigator.userAgent)) {
//     return false;
//   }
//   if (!isFormalEnv() && !dbgbeacon) {
//       return false;
//   }
//   // 默认为 HTTPS
//   let beaconSdkUrl = `https://3gimg.qq.com/mig_op/beacon/js/beacon_release_s.js?appkey=${appkey}&vc=1.0.1`;
//   // 实时联调页面：
//   // http://beacon.tencent.com/beacon.htm?product_id=00000C2AM539PVHX&navId=data2&pageKey=debug_log
//   if (dbgbeacon) {
//     beaconSdkUrl = `https://3gimg.qq.com/mig_op/beacon/js/beacon_release_jrlts.js?appkey=${appkey}&vc=1.0.1`;
//   }
//   loadScript(beaconSdkUrl).then(() => {
//     if (!window.$util) {
//       window.$util = {}
//     };
//     if (!window.$util.beaconReportLists) {
//       window.$util.beaconReportLists = [];
//     }
//     let lists = deepCopy(window.$util.beaconReportLists);
//     window.$util.beaconReportLists = [];
//     for (let i in lists) {
//       beaconReport(lists[i].eventName, lists[i].reportObj);
//     }
//   }).catch((err) => {
//     console.error(err);
//   });
// }

/**
 * 退出登录
 */
export const accountLogout = (cb) => {
    $http.get({
        url: 'v2/account/logout',
        data: {},
        response: (res) => {
            console.log('>>> response:', res);
            if (res.code === 0 && res.data) {
                store.dispatch(reset());
                sessionStorage.clear();
                // localStorage.clear();
                cb && cb();
            } else {
                Toast(res.message);
            }
        },
    }).catch((err) => {
        console.error(err);
    });
};

export const dealHeadLoginFn = (userInfos) => {
    const headLoginBtnEl = document.getElementById('headLoginBtn');
    if (isLogin(userInfos) && headLoginBtnEl) {
        headLoginBtnEl.style.display = 'none';
        document.getElementById('headLoginMsg').style.display = 'inline-block';
        document.getElementById('headLoginMsgImg').src = userInfos.avatar;
        document.getElementById('headLoginMsgPhone').innerText = userInfos.nickName;
    } else if (headLoginBtnEl) {
        headLoginBtnEl.style.display = 'inline-block';
        document.getElementById('headLoginMsg').style.display = 'none';
    }
};

export const apiLoadTime = (apiPath, apiName, loadTime) => {
    console.log('api load time ', apiPath, loadTime);
    beaconReport('api_load_time', {
        wemeet_platform: 'officialWebsite',
        api_path: apiPath,
        api_name: apiName,
        http_time: loadTime,
    });
};

export const LoginRedirect = () => {
    let pageName = 'personal-information';
    const actionId = getRequest('action_id');
    const actionParam = getRequest('action_param');
    let redirectType;
    let redirectLink;
    if (actionId == 100) { // 先判断有无action_id,因为select-account-type.html是带的action_id
        if (actionParam) {
            const params = JSON.parse(decodeURIComponent(actionParam));
            redirectType = params.redirect_type;
            redirectLink = params.redirect_link;
        }
    } else { // 没有则直接从
        redirectType = getRequest('redirect_type');
        redirectLink = getRequest('redirect_link');
    }
    if (redirectLink) {
        pageName = decodeURIComponent(redirectLink);
    }
    /**
     * redirect_type: 1: user-center; 2: 官网;
     */
    if (String(redirectType) === '2') {
        location.href = `${window.location.origin}/${pageName}${filterXss(location.search)}`;
    } else { // 1 to user-center
        location.href = `${window.location.origin}/user-center/${pageName}`;
    }
};

export const loginFn = (loginType = 0) => {
    const params = {
        login_type: loginType,
    };
    if (loginType === 0) { // 未登陆
        params.sync_to_meeting = true;
    }

    if (isWeChat()) { // 微信浏览器
        params.m_login_source_id = 2; // 业务方来源 id; 1 - 直播, 2 - 详情页
        store.dispatch(updateWeChatRedirectUrl(addURLSearch(`detail.html${window.location.search}`, params)));
        getWechatMpAuthUrl(`${window.location.origin}/mobile/login.html#/wechat`);
    } else if (isMobile()) {
        const url = addURLSearch(
            `${window.location.origin}/mobile/login.html#/`, {
                m_login_source_id: 2, // 业务方来源 id; 1 - 直播, 2 - 详情页
                redirect_link: encodeURIComponent(addURLSearch(`detail.html${window.location.search}`, params)),
            },
        );
        // window.location.replace(url);
        window.location.href = url;
    } else { // PC 端
        const url = addURLSearch(
            `${window.location.origin}/password-login.html`, {
                redirect_type: 2,
                m_login_source_id: 2, // 业务方来源 id; 1 - 直播, 2 - 详情页
                redirect_link: encodeURIComponent(addURLSearch(`detail.html${window.location.search}`, params)),
            },
        );
        // window.location.replace(url);
        window.location.href = url;
    }
};

export const filterXss = text => text.replace(/[<>"()]/g, '');

export const vaildURL = sUrl => (!!(/^(https?:\/\/)?([\w\-.]+\.)?(qq|tencent|voovmeeting)\.com($|\/|\\)/i).test(sUrl));