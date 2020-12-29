/**
 * 微信登录流程
 */
import { setUserInfos } from './../user-center/index';
import $http from './../user-center/http';
import Toast from './../user-center/components/Toast/Toast';
import { getRequest } from './util';

export { setUserInfos };

/**
 * 获取公众帐号网页授权链接
 * @returns {String} res.data.we_chat_auth_url - 
 *  https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf1946c1a454310b3&redirect_uri=https%3A%2F%2Fwork.medialab.qq.com%2Ftest%2Fv2%2Fwe-chat-auth%2Fauthorize-user-info-call-back&response_type=code&scope=snsapi_userinfo&state=15867701449nNgRTeqVKlohmO2cbUfdFu5at6ABXYW#wechat_redirect
 */
export const getWechatMpAuthUrl = (redirectUri) => {
    // http://cowork.yapi.oa.com/project/41/interface/api/220
    $http.post({
        url: 'v2/account/auth/get-wechat-mp-auth-url',
        data: {
            // `${window.location.origin}/mobile/login.html#/wechat?redirect_link=https%3A%2F%2Ftestweb.wemeet.tencent.com%2Fdetail.html%3Ftoken%3DRUY2TFz8gqRD1V-JRNxvwjLoNouDpWHH76TC*YxunoCjJt5ziLg*KQ__%26meetingcode%3D905610180%26sdkappid%3D1400115281%26show8k%3D1`
            redirect_uri: redirectUri,
        },
        response: (res) => {
            console.log('getWechatMpAuthUrl res:', res);
            if (res && res.code === 0 &&
                res.data && res.data.we_chat_auth_url
            ) {
                /**
                 * 跳去 https://open.weixin.qq.com/connect/oauth2/authorize 去认证;
                 * 认证成功后，返回 redirectUri;
                 */
                // window.location.href = res.data.we_chat_auth_url;
                // 不会有历史记录
                window.location.replace(res.data.we_chat_auth_url);
            } else {
                Toast(res.message);
            }
        }
    }).catch((err) => {
        console.log('getWechatMpAuthUrl err:', err);
    });
}

/**
 * 查询公众帐号微信网页授权用户是否绑定注册
 * @param {*} code 
 * @param {*} state 
 */
export const wechatLoginMp = (code, state) => {
    // http://cowork.yapi.oa.com/project/41/interface/api/219
    $http.get({
        url: 'v2/account/auth/wechat-login-mp',
        data: {
            code: code, // 微信授权临时票据
            state: state, // 用于保持请求和回调的状态，授权请求后原样带回。
        },
        response: (res) => {
            console.log('wechatLoginMp res:', res);
            if (res && res.code === 0 && res.data) {
                // 1、如果该微信帐号已经绑定注册过，则用auth_code去登录
                if (res.data.is_register) {
                    loginByAuthCode(res.data.auth_code);
                } else {

                }
            } else {
                Toast(res.message);
            }
        }
    }).catch((err) => {
        console.log('wechatLoginMp err:', err);
    });
}

export const checkWechatLogin = () => {
    let code = getRequest('code') || '';
    let state = getRequest('state') || '';
    if (code && state) {
        wechatLoginMp(code, state);
    }
}

export const loginByAuthCode = (authCode) => {
    $http.post({
        url: 'v2/account/login/auth-code',
        data: {
            auth_code: authCode,
            identity_type: 1 // 1个人帐号
        },
        response: (res) => {
            console.log('loginByAuthCode res:', res);
            if (res && res.code === 0 && res.data) {
                setUserInfos(res.data);
            } else {
                Toast(res.message);
            }
        }
    }).catch((err) => {
        console.log('loginByAuthCode err:', err);
    });
}