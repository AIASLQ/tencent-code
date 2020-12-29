import configureStore from '../../store/configureStore';
import configureLocalStore from './../local-store/configureStore';
import { isNormalEnv, isTestEnv } from './../utils/util';

const IS_I18N = process.env.IS_I18N === 'true';

const { store } = configureStore();

const { localStore, localPersistor } = configureLocalStore();
let _localUserInfos = localStore.getState().userInfos;
// console.log('>>> _localUserInfos:', _localUserInfos);
localPersistor.subscribe(() => {
    _localUserInfos = localStore.getState().userInfos;
    // console.log('>>> _localUserInfos 2:', _localUserInfos);
});

window.version = process.env.WEMEET_PARAM_VERSION;
if (!window.$util) {
    window.$util = {}
};
let isLoadRaven = (isNormalEnv() || isTestEnv());
if ( // SaaS 版本: 正式环境
    isLoadRaven &&
    !process.env.WEMEET_PARAM_PRIVATE
) {
    window.Raven && Raven.config(IS_I18N ? 'https://84c7073eb4414afb897f571ac7871b4d@report.url.cn/sentry/2340' : 'https://16b21993d5174834ba99a6dfddb29bec@report.url.cn/sentry/1915', {
        release: window.version,
        sampleRate: IS_I18N ? 1 : 0.1 // 错误的采样频率，如果值是0.0，则忽略所有错误，如果是1.0，则上报所有错误（默认值）
    }).install();
} else {
    window.Raven = null;
}
window.$util.Raven = function(message, extra, level) {
    if (!isLoadRaven) { // 没有配置 window.Raven
        return;
    }
    if (!message) {
        message = 'Raven.captureMessage';
    }
    if (typeof(extra) !== 'object') {} else {
        extra.search = location.search;
        let userInfos = store.getState().userInfos;
        extra.auth = {
            phone: userInfos.phone,
            userid: userInfos.username,
            userType: userInfos.userType,
        };
        extra.localUserInfos = _localUserInfos;
    }
    if (typeof level === 'undefined' || !level) {
        level = 'error' // one of 'info', 'warning', or 'error'
    }
    if (window.Raven) {
        window.Raven.captureMessage(message, {
            level: level,
            extra: extra
        });
    }
}
window.addEventListener('error', function(e) {
    console.warn('>>>> addEventListener error:\n', e);
    var target = e.target || e.srcElement;
    var isElementTarget = target instanceof HTMLElement;
    if (isElementTarget) { // 资源加载错误
        window.$util.Raven('addEventListener error isElementTarget', {
            message: e.target.tagName + ' ' + e.type,
            stack: e.target.outerHTML,
            filename: e.target.baseURI,
        });
    } else { // js 报错
        window.$util.Raven('addEventListener error', {
            message: e.message + ' (' + e.lineno + ',' + e.colno + ')',
            stack: e.error && e.error.stack,
            error: e.error,
            filename: e.filename,
        });
    }
}, true);