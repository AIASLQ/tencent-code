import {
    getCurrentLanguage,
    getCurrentRegion,
    getURLRoot,
    getUserCenterURLRoot
} from '../i18n/utils/lang';
import { contactSales as i18n_contactSales, goToAgreementView } from '../i18n/utils/page';
import { JUMP_URL } from '../utils/constant';
import { localUserInfos } from './../local-store/actions/index';
import configureLocalStore from './../local-store/configureStore';
import { updateCorpInfos, updateUserInfos } from '../../store/actions/index';
import configureStore from '../../store/configureStore';
import { ANDROID_APK_DOWNLOAD_URL, ANDROID_TOUTIAO_APK_DOWNLOAD_URL, DOWNLOAD_APP_URL_OUTER_NET, MAC_APK_DOWNLOAD_URL, WINDOW_APK_DOWNLOAD_URL } from './../utils/constant';
import { addClass, deepCopy, deleteURLSearch, filterXss, getOsName, getRequest, handleGoToBuy, isFormalEnv, isMobile, loadScript, removeClass, setCookie } from './../utils/util';
import HintModal from './components/HintModal/HintModal';
import Toast from './components/Toast/Toast';
import $http from './http';
import { handleAvatar } from './util';

const IS_I18N = process.env.IS_I18N === 'true';

// const txAppId = ['1400143280','1400212767','1400115281']

const { store } = configureStore();
const { localStore } = configureLocalStore();

export const isLogin = function(userInfos) {
    return (userInfos && (userInfos.avatar || userInfos.userid));
}

/**
 *
 * @returns 1 - 免费用户, 2 - 企业版用户, 3 - “专业版用户”
 */
export const getUserType = (opts) => {
    console.log(">>> getUserType:", String(opts.user_type), opts.expiration, (Date.now() / 1000));
    if (String(opts.user_type) === '2') { // 用户类型(1:个人用户，2:企业用户)
        return '2';
    } else { // “免费用户” 或 “专业版用户”
        if (opts.expiration > (Date.now() / 1000)) { // opts.expiration - 会员过期时间
            return '3';
        } else { // “免费用户”
            return '1';
        }
    }
}

const _loadBeaconSdk = () => {
    return new Promise((resolve, reject) => {
        let beaconSdkUrl = `/static/lib/beacon_web.3.1.51.min.js`;
        if (IS_I18N) {
            beaconSdkUrl = `/static/lib/voov_beacon_release_3.1.51.js`;
        }
        loadScript(beaconSdkUrl).then(() => {
            resolve()
        }).catch((err) => {
            console.error(err);
            reject(err);
        });
    });
}

/**
 * 加载灯塔 sdk
 *
 * 实时联调页面: http://datahub.tencent.com/common/view_debug
 */
export const loadBeaconSdk = async() => {
    let dbgbeacon = getRequest('dbgbeacon') || false;
    let appkey = '00000C2AM539PVHX';
    let dbgAppKey = 'LOGDEBUGKEY00028';

    if (!isFormalEnv() && !dbgbeacon) {
        return false;
    }
    if (!window.BeaconAction) {
        await _loadBeaconSdk().catch((err) => {
            console.error('load-beacon-sdk:', err);
            return null;
        });
    }

    if (window.BeaconAction) {
        // 2020.8.25 window.BeaconAction要使用new之后的实例，才有BeaconAction.onDirectUserAction方法
        window.BeaconAction = new window.BeaconAction({
            appkey: dbgbeacon ? dbgAppKey : appkey, // 系统或项目id, 必填
            // versionCode: '2.11.1', //项目版本,选填
            // channelID: 'channel', //渠道,选填
            // openid: 'openid', // 用户id, 选填
            // delay: 1000, // 普通事件延迟上报时间(单位毫秒), 默认3000(3秒),选填
            // onReportSuccess: success, // 上报成功回调,选填
            // onReportFail: fail, // 上报失败回调,选填
        });

        /**
         * 当 sdk 未加载时调用 beaconReport 会先缓存到 window.$util.beaconReportLists 变量中
         */
        if (
            window.$util && window.$util.beaconReportLists
        ) {
            let lists = deepCopy(window.$util.beaconReportLists);
            for (let i in lists) {
                beaconReport(lists[i].eventName, lists[i].reportObj);
            }
            // 清空上报缓存的数据
            window.$util.beaconReportLists = [];
        }
    }
}

/**
 * report to beacon event
 * 需要加载灯塔 sdk : loadBeaconSdk();
 * @param {string} eventName
 * @param {object} reportObj
 */
export const beaconReport = (eventName, reportObj = {}) => {
    // 私有化版本不做数据上报
    if (process.env.WEMEET_PARAM_PRIVATE) {
        return;
    }

    if (window.BeaconAction) {
        if (typeof(reportObj) === 'object') {
            let userInfos = store.getState().userInfos;
            reportObj.userid = reportObj.userid || (userInfos && userInfos.username) || '';
            reportObj.device_type = reportObj.device_type || (isMobile() ? 'mobile' : 'pc');
            reportObj.user_agent = window.navigator.userAgent;
            // 是否为海外版本: yes or no;
            reportObj.is_overseas = IS_I18N ? 'yes' : 'no';
            let nav_platform = '';
            if (window.navigator && window.navigator.platform) {
                nav_platform = window.navigator.platform;
            }
            reportObj.nav_platform = nav_platform;
        }
        window.BeaconAction.onDirectUserAction && window.BeaconAction.onDirectUserAction(eventName, reportObj);

        return true;
    } else { // 未初始化好时, 缓存上报数据到 window.$util.beaconReportLists
        if (!window.$util) {
            window.$util = {}
        };
        if (!window.$util.beaconReportLists) {
            window.$util.beaconReportLists = [];
        }
        window.$util.beaconReportLists.push({
            eventName: eventName,
            reportObj: reportObj
        });

        return false;
    }
};

export const contactSales = () => { // 联系销售
    if (IS_I18N) {
        return i18n_contactSales();
    }

    window.open('https://act.1700.cn/s2/5119222/d1c2/');
}

/**
 * 退出登录
 */
export const accountLogout = (cb, errCb) => {
    $http.get({
        url: 'v2/account/logout',
        data: {},
        response: (res) => {
            console.log('>>> response:', res);
            if (res.code === 0 && res.data) {
                sessionStorage.clear();
                cb && cb();
            } else {
                Toast(res.message);
                if (typeof(errCb) === 'function') {
                    errCb(res);
                }
            }
        }
    }).catch((err) => {
        console.error(err);
        if (typeof(errCb) === 'function') {
            errCb(err);
        }
    });
}

export const dealHeadLoginFn = (userInfos) => {
    let headLoginBtnEl = document.getElementById('headLoginBtn');
    let headChangeAccountBtnEl = document.getElementById('changeAccountBtn');
    if (isLogin(userInfos) && headLoginBtnEl) {
        // let corpInfos = store.getState().corpInfos;
        // if (headChangeAccountBtnEl) {
        //   headChangeAccountBtnEl.style.display = corpInfos.multiCorp ? 'block' : 'none';
        // }
        if (headChangeAccountBtnEl) {
            // 查询当前帐号可切换帐号详情
            $http.get({
                url: 'v2/account/profile/change-account',
                data: {},
                response: (res) => {
                    if (res.code === 0 && res.data && res.data.is_can_change_account) {
                        headChangeAccountBtnEl.style.display = 'block';
                    } else if (res.code === -521000) { //被禁用状况下出弹窗并退出登录
                        headChangeAccountBtnEl.style.display = 'none';
                        // 禁用
                        accountLogout(() => {
                            authCodeBlockHint(
                                '该帐号不可使用',
                                '您的帐号已被管理员禁用',
                                '知道了'
                            );
                            setTimeout(() => {
                                window.location.href = `${window.location.origin}/password-login.html`;
                            }, 1000);
                        });
                    } else {
                        headChangeAccountBtnEl.style.display = 'none';
                    }
                }
            }).catch((err) => {
                headChangeAccountBtnEl.style.display = 'none';
                console.error(err);
            });
        }
        headLoginBtnEl.style.display = 'none';
        document.getElementById('headLoginMsg').style.display = 'inline-block';
        document.getElementById('headLoginMsgImg').src = userInfos.avatar;
        let headLoginMsgPhoneEl = document.getElementById('headLoginMsgPhone');
        if (headLoginMsgPhoneEl) {
            // 企业微信用户且没有昵称。
            if (Number(userInfos.userType) === 2 && (userInfos.nickName === "企业微信用户" || userInfos.nickName === "")) {
                // 有open_userid则尝试调用SDK
                let WWOpenDataEl = headLoginMsgPhoneEl.querySelector('ww-open-data');
                if (WWOpenDataEl && userInfos.qyWechatOpenUserid) {
                    WWOpenDataEl.setAttribute('openid', userInfos.qyWechatOpenUserid)
                    window.WWOpenData.bind(WWOpenDataEl)
                } else { // 没有open_userid的话显示为：企业微信用户
                    headLoginMsgPhoneEl.innerText = "企业微信用户";
                }
            } else {
                headLoginMsgPhoneEl.innerText = userInfos.nickName;
            }
            // if(userInfos.nickName) {
            // } else if(Number(userInfos.userType) === 2) {

            // }
        }
    } else if (headLoginBtnEl) {
        headLoginBtnEl.style.display = 'inline-block';
        document.getElementById('headLoginMsg').style.display = 'none';
    }
}

export const headLanguageBtn = (idx) => {
    switch (idx) {
        case 0: // 简体中文
            beaconReport('ClickChinaMainlandSite', {});
            window.location.href = `https://meeting.tencent.com/`;
            break;
        case 1: // English
            beaconReport('ClickInternationalSite', {});
            window.location.href = `https://voovmeeting.com/`;
            break;
        case 2: // 繁體中文(香港)
            beaconReport('ClickHKSite', {});
            window.location.href = `https://voovmeeting.com/hk`;
            break;

        case 100: // 国际版-英文
            window.location.href = `${window.location.origin}/`;
            break;
        case 101: // 国际版-新加坡-简体中文
            window.location.href = `${window.location.origin}/sg`;
            break;
        case 102: // 国际版-中国大陆-简体中文
            window.location.href = `https://meeting.tencent.com/`;
            break;
        case 103: // 国际版-中国大陆-繁体中文
            window.location.href = `${window.location.origin}/hk`;
            break;
        default:
            console.log('>>> headLanguageBtn default');
    }
};

export const headWrapBtn = (idx, element) => {
    let corpInfos = store.getState().corpInfos;
    console.log('>>> headWrapBtn:', idx, corpInfos);
    switch (idx) {
        case 0: // 腾讯云
            beaconReport('web_head_tencent_cloud_click', {});
            window.open('https://cloud.tencent.com');
            break;
        case 12: // logo
            beaconReport('web_head_tencent_meeting_click', {});
            window.location.href = `${getURLRoot()}/index.html`;
            break;
        case 1: // 产品服务
            break;
        case 2: // 定价与购买
            beaconReport('web_head_buy_click', {});
            window.location.href = `${getURLRoot()}/buy.html`;
            break;
        case 3: // 下载中心
            beaconReport('web_head_download_click', {});
            window.location.href = `${getURLRoot()}/download-center.html?from=1001`;
            break;
        case 4: // 联系销售
            contactSales();
            break;
        case 5: // 支持中心
            beaconReport('web_head_support_click', {});
            window.location.href = `${getURLRoot()}/support.html`;
            break;
        case 6: // 加入会议
            beaconReport('web_head_uc_join_click', {});
            managerExpiredBlockHint(corpInfos, () => {
                window.location.href = `${getUserCenterURLRoot()}/join`;
            });
            break;
        case 7: // 预定会议
            beaconReport('web_head_uc_schedulet_click', {});
            managerExpiredBlockHint(corpInfos, () => {
                window.location.href = `${getUserCenterURLRoot()}/schedule`;
            });
            break;
        case 8: // 发起会议
            beaconReport('web_head_uc_start_click', {});
            managerExpiredBlockHint(corpInfos, () => {
                window.location.href = `${getUserCenterURLRoot()}/start`;
            });
            break;
        case 9: // 登录
            console.log('>>> 登录:');
            window.location.href = `${getURLRoot()}/password-login.html${deleteURLSearch(window.location.search, 'wxwork-error-type')}`;
            break;
        case 10: // 免费注册
            if (IS_I18N) {
                // 国际版需要跳转到移动端合规页, mobile 合并完之后用 html
                let iframeSrc = encodeURIComponent(
                    `/mobile/fillInRegionAndBirth.html?page=fillInRegionAndBirth&platform=web&from_page=register&region=${
            getCurrentRegion() || 'df'
          }&lang=${getCurrentLanguage()}&scheme=register`,
                );
                const LIMIT_AGE_LOCALSTORAGE_KEY = 'limit_age_data';
                localStorage.removeItem(LIMIT_AGE_LOCALSTORAGE_KEY);
                window.location.href = `${getURLRoot()}/container.html?src=${iframeSrc}`;
                return;
            }

            window.location.href = `${getURLRoot()}/regist.html${filterXss(window.location.search)}`;
            break;
        case 11: // 我的会议
            window.location.href = `${getUserCenterURLRoot()}/user-meeting-list`;
            break;
        case 13: // 合作伙伴
            window.location.href = `${getURLRoot()}/cooperative-partners.html`;
            break;
        case 14: // 退出登录
            accountLogout(() => {
                window.location.href = `${getURLRoot()}/index.html`;
            });
            break;
        case 15: // 用户中心 - 个人资料
            window.location.href = `${getUserCenterURLRoot()}/personal-information`;
            break;
        case 16: // 上线预告
            window.location.href = `${getURLRoot()}/new-features.html`;
            break;
        case 18: // 开放平台
            beaconReport('web-openapi-openapi', {});
            window.location.href = `${getURLRoot()}/open-api.html`;
            break;
        case 19:
            { // 切换帐号
                beaconReport('changeaccount_null_null_null_null_null_click', {});
                let userInfos = store.getState().userInfos;
                window.location.href = `${getURLRoot()}/select-account-type.html?change-account=1&appid=${userInfos.appid}`;
                break;
            }
        default:
            console.log('>>> default');
    }
};

export const managerExpiredBlockHint = (corpInfos, cb = null) => {
    console.log('???managerExpiredBlockHint', corpInfos);
    if ((Number(corpInfos.payTagStatus) === 2) || (Number(corpInfos.payGuideType) > 0)) {
        HintModal.showModal({
            title: '该帐号不可使用',
            content: '服务到期，感谢使用腾讯会议',
            sureTxt: '立即购买',
            sureCb: handleGoToBuy,
            showCancelBtn: true,
        });
        return true;
    }
    cb && cb();
    return false;
}

export const authCodeBlockHint = (title = '', content = '', sureTxt = '知道了', sureCb = null, showCancelBtn = false) => {
    HintModal.showModal({
        title,
        content,
        sureTxt,
        sureCb,
        showCancelBtn,
    });
}

export const setCurrentLinkActive = (className) => {
    let itemClassArr = document.querySelectorAll('span.item');
    for (let item of itemClassArr) {
        removeClass(item, 'active')
    }
    let activeItem = document.getElementsByClassName(className)[0];
    if (activeItem) {
        addClass(activeItem, 'active')
    }
}

export const setCurrentDropdownHover = (element) => {
    let headElement = document.getElementById('headWrapCtrl');
    let allLis = headElement.getElementsByTagName('li');
    for (let item of allLis) {
        removeClass(item, 'focus-dropdown-li')
    }
    addClass(element, 'focus-dropdown-li')
}
export const headWrapLiBtn = (idx) => {
    console.log('>>> headWrapLiBtn:', idx);
    switch (idx) {
        case 10: // 云会议
            beaconReport('web_head_cloud_meeting_click', {});
            window.location.href = `${getURLRoot()}/cloud-meeting.html`;
            break;
        case 11: // 会议室连接器
            window.location.href = `${getURLRoot()}/cloud-mra.html`;
            break;
        case 12: // API / SDK
            window.location.href = `${getURLRoot()}/open-api.html`;
            break;
        case 13: // 腾讯会议 Rooms
            window.location.href = `${getURLRoot()}/cloud-rooms.html`;
            break;
        default:
            console.log('>>> default');
    }
}

export const templateFooter = (idx) => {
    switch (idx) {
        case 0: // 常见问题
            beaconReport('web_foot_support_faq_click', {});
            window.location.href = `${getURLRoot()}/support.html?tab=0`;
            break;
        case 1: // 使用手册
            beaconReport('web_foot_support_tutorial_click', {});
            window.location.href = `${getURLRoot()}/support.html?tab=1`;
            break;
        case 2: // 定价与购买
            beaconReport('web_foot_buy_click', {});
            window.location.href = `${getURLRoot()}/buy.html`;
            break;
        case 3: // 联系销售
            beaconReport('web_head_contact_sales_click', {});
            contactSales();
            break;
        case 4: // 合作伙伴
            window.location.href = `${getURLRoot()}/cooperative-partners.html`;
            break;
        case 5: // 更新公告
            break;
        case 6: // 媒体新闻
            break;
        case 71: // 下载
            beaconReport('web_foot_download_windows_click', {});
            window.open(DOWNLOAD_APP_URL_OUTER_NET.WINDOWS);
            break;
        case 72: // 下载
            beaconReport('web_foot_download_macos_click', {});
            window.open(DOWNLOAD_APP_URL_OUTER_NET.MAC);
            break;
        case 73: // 下载
            beaconReport('web_foot_download_android_click', {});
            window.open(DOWNLOAD_APP_URL_OUTER_NET.ANDROID);
            break;
        case 74: // 下载
            beaconReport('web_foot_download_ios_click', {});
            window.open(DOWNLOAD_APP_URL_OUTER_NET.IOS);
            break;
        case 8: // 意见反馈
            beaconReport('web_foot_feedback_click', {});
            window.open('https://support.qq.com/products/42324?');
            break;
        case 9: // 隐私政策
            beaconReport('web_foot_privacy_click', {});

            if (IS_I18N) {
                return goToAgreementView('privacy', 'df');
            };

            window.open(`${JUMP_URL.PRIVACY_POLICY}`);
            break;
        case 10: // 用户协议
            beaconReport('web_foot_declare_click', {});

            if (IS_I18N) {
                return goToAgreementView('service', 'df')
            };

            window.open(`${getURLRoot()}/declare.html`);
            break;
        case 11: // 腾讯云
            beaconReport('web_foot_tencent_cloud_click', {});
            window.open('https://cloud.tencent.com');
            break;
        case 12: // 智能客服
            /**
             *  platform : pc 电脑端/mobile 手机端
             source: wx 公众号/official 官网
             from: tencent-meeting 腾讯会议
             os: ios/android/mac/windows.    基于现有的字段，我们这样调整看是否合适
             */
            if (isFormalEnv()) {
                window.open(`https://work.medialab.qq.com/v2/feedback?from=tencent-meeting&source=official&platform=pc&os=${getOsName()}`);
            } else { // 测试环境地址
                window.open(`https://work.medialab.qq.com/test/v2/feedback?from=tencent-meeting&source=official&platform=pc&os=${getOsName()}`);
            }
            break;
        default:
            console.log('>>> default');
    }
}


/**
 * 更新用户信息state.userInfos
 * @param obj {object}
 * @param $store
 * @param needDecode
 * @return {state.userInfos}
 */
export const setUserInfos = (obj, $store = store, needDecode = true) => {
    // 如果企业微信登录且没有名字则需要特殊处理。
    let nickName = obj.nick_name;
    if (nickName === '' && Number(obj.user_type) === 2) {
        nickName = "企业微信用户"
    }
    let _userInfos = Object.assign({}, $store.getState().userInfos, {
        chineseName: obj.name,
        username: obj.userid,
        avatar: handleAvatar({
            username: nickName || obj.userid,
            avatar: obj.avatar,
            needDecode,
        }),
        area: obj.area, // 手机号码国际区号
        phone: obj.phone,
        email: obj.email,
        userid: obj.userid,
        vipLevel: obj.vip_level,
        appid: obj.app_id,
        userType: Number(obj.user_type),
        isResetPassword: obj.is_reset_password,
        qyWechatOpenUserid: obj.qywechat_open_userid,
        nickName: nickName,
        roleId: obj.role_id,
        department: obj.department
    });
    $store.dispatch(updateUserInfos(_userInfos));
    localStore.dispatch(localUserInfos(
        Object.assign({}, localStore.getState().userInfos, {
            userid: obj.userid,
            appid: obj.app_id,
            vipLevel: obj.vip_level,
            chineseName: obj.name,
            username: obj.userid,
            nickName: nickName,
        })
    ));

    if (window.Raven) {
        window.Raven.setUserContext({ // add USER
            username: obj.userid,
            chineseName: obj.name,
        });
    }

    if (window.emonitorIns && typeof window.emonitorIns.config === 'function') {
        // 设置有效期 30天
        setCookie("openid", obj.userid, 30);
        window.emonitorIns.config({
            qq: obj.userid,
            uin: obj.userid,
            openid: obj.userid, // 业务中用户的openid
        });
    }

    return _userInfos;
}

/**
 * 消费sso_auth_code登陆
 */
export const accountSsoLoginSsoAuthCode = (authCode, cb) => {
    $http.post({
        url: 'v2/account/sso-login/sso-auth-code',
        data: {
            auth_code: authCode,
        },
        response: (res) => {
            console.log('>>> response:', res);
            if (res.code === 0 && res.data) {
                let _userInfos = setUserInfos(res.data);
                cb && cb(_userInfos);
            } else {
                Toast(res.message);
            }
        }
    }).catch((err) => {
        console.error(err);
    });
}

export const refreshToken = (cb, errCb) => {
    $http.post({
        url: 'v2/account/login/refresh-token',
        data: {
            refresh_token: 0, // 是否刷新token: 1 - 刷新, 0 - 获取用户信息;
        },
        response: (res) => {
            if (res.code === 0 && res.data) {
                // wyf 2020-10-21 15:16:53
                // bugfix: http://tapd.oa.com/20375092/bugtrace/bugs/view/1020375092082855453
                // refresh-token 的username不需要解码，第三个参数
                let _userInfos = setUserInfos(res.data, undefined, false);
                cb && cb(_userInfos);
                setTimeout(() => {
                    // 导流需求，顶部提示
                    if (typeof res.data.tips === 'object') {
                        const { tips } = res.data;
                        const confirmBtn = tips.buttons[0];
                        const headerTipsContainerEl = document.getElementById('voov__header-tips-container');
                        if (headerTipsContainerEl) {
                            headerTipsContainerEl.innerHTML = `<div class="voov__header-tips">${tips.content} <a href="${confirmBtn.url}">${confirmBtn.text} &gt;</a></div>`;
                        }
                    }
                });
            } else {
                errCb && errCb(res);
            }
        }
    }).catch((err) => {
        console.error(err);
        errCb && errCb(err);
    });
}

export const queryDownloadInfo = (instance, type = '0300000000', prefixUrl) => {
    let downloadUrl, resCode = -1,
        url = '';
    const fromSource = getRequest('fromSource') || false;
    if (fromSource) {
        url = prefixUrl ? prefixUrl + window.location.search : `v2/config/query-download-info${window.location.search}`;
    } else {
        url = prefixUrl || 'v2/config/query-download-info'
    }
    switch (instance) {
        case 'windows':
            downloadUrl = WINDOW_APK_DOWNLOAD_URL;
            break;
        case 'mac':
            downloadUrl = MAC_APK_DOWNLOAD_URL;
            break;
        case 'android':
            downloadUrl = type === '0300000000' ? ANDROID_APK_DOWNLOAD_URL : ANDROID_TOUTIAO_APK_DOWNLOAD_URL;
            break;
    }

    return new Promise((resolve, reject) => {
        $http.post({
                url,
                data: [{ instance, type }],
                response: (res) => {
                    resCode = res.code
                    if (res.code == 0 && res.data) {
                        if (res.data.length > 0) {
                            downloadUrl = res.data[0].url || downloadUrl
                        }
                    }
                }
            })
            .catch((e) => {})
            .finally(() => {
                resolve({
                    url: downloadUrl,
                    code: resCode
                })
            })
    })
}

export const dealHeadChangeAccountFn = (isCorpUser, accountStatus = {}, $store = store) => {
    console.log('???dealHeadChangeAccountFn', isCorpUser, accountStatus);
    let corpDetail = {
        ...accountStatus,
        multiCorp: isCorpUser
    }
    $store.dispatch(updateCorpInfos(corpDetail));
}