import { isAndroid, isIOS, isMac, isWin } from '../../utils/util';
import { getCurrentLanguage, getCurrentRegion } from './lang';

// 联系销售
export const contactSales = () => {
    // 联系销售
    // location.href = 'https://act.1700.cn/s2/5119222/d1c2/';
    // 不同语言跳转到不同的问卷地址
    const currentLang = getCurrentLanguage();
    if (currentLang === 'en') {
        window.open('https://wj.qq.com/s2/5544817/7b7c/');
        return;
    }
    window.open('https://act.1700.cn/s2/5119222/d1c2/');
};

// 跳转至指定协议页
export const goToAgreementView = (page, region) => {
    // cookie: 'cookie-policy.html',
    //   privacy: 'privacy-policy.html',
    //   service: 'service-agreement.html'
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
    const link = `/df/redirect.html?page=${page}&region=${region}&lang=${lang}`;

    window.open(link);

    return;
};

// 处理schema逻辑
// schema demo wemeet://page/bind_wechat?auth_code=12345&session=12121'
export const doSchema = schemaStr => {
    // schema 页面映射
    const pageMap = {
        register: './regist.html',
        register_set_password: './register-set-password.html',
    };

    // schemaStr = `wemeet://page/register?session=12121`;
    // 14 为正式page开始的索引
    let page = schemaStr.substr(14, schemaStr.indexOf('?') - 14);
    let urlStr = schemaStr.substr(schemaStr.indexOf('?'));

    if (pageMap[page]) {
        window.location.href = `${pageMap[page]}${urlStr}`;
    }
};

/**
 * 根据用户pstn信息组装成接入信息（国际版）
 * @param userPstnInfo
 * @returns {string}
 */
export const getICalendarDescPhoneInfoI18n = (userPstnInfo = {}, t) => {
    let phoneInfo = '';
    if (userPstnInfo.phone_list) {
        let pstnList = userPstnInfo.phone_list ?
            userPstnInfo.phone_list.map(item => {
                return `${item.phone_num}(${userPstnInfo.country_name})`;
            }) :
            [];
        let pstnStr = pstnList.join('\n');
        phoneInfo =
            `${t('使用PSTN接入：')}\n` +
            pstnStr +
            '\n' +
            '\n' +
            `${t('查找本地号码')}` +
            ' ' +
            `${window.location.origin}/mobile/pstn.html?page=pstn&region=df&lang=en` +
            '\n';
    }

    return phoneInfo;
};