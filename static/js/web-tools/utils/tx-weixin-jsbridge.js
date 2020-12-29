/**
 * 微信JS-SDK: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
 */
import { PACKAGE_NAME } from './constant';

export const connectWeixinJSBridge = () => {
    return new Promise((resolve, reject) => {
        if (window.WeixinJSBridge) {
            resolve(window.WeixinJSBridge);
        } else {
            document.addEventListener('WeixinJSBridgeReady', (res) => {
                console.log('>>> WeixinJSBridgeReady:', res);
                resolve(window.WeixinJSBridge);
            });
        }
    });
}

/**
 * 检查是否安装应用
 * @param {*} packageName 
 * @param {*} platform - android or iphone
 */
export const getInstallState = (platform = 'android', packageName) => {
    console.log('>>> getInstallState:', packageName);
    return new Promise((resolve, reject) => {
        connectWeixinJSBridge().then((WeixinJSBridge) => {
            let param = { // 默认 android
                packageName: (packageName || PACKAGE_NAME),
            }
            if (platform === 'iphone') {
                param = {
                    packageUrl: (packageName || 'wemeet://'),
                }
            }

            WeixinJSBridge.invoke(
                'getInstallState',
                param,
                (res) => {
                    console.log('>>> getInstallState:', res);
                    resolve(res);
                }
            )
        })
    });
}