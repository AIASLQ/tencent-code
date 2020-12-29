/**
 * 企业微信的userAgent：Mozilla/5.0 (Linux; Android 9; Pixel 2 Build/PQ2A.190405.003; wv)
 * AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126
 * MQQBrowser/6.2 TBS/044605 Mobile Safari/537.36 wxwork/2.7.8 MicroMessenger/7.0.1 NetType/WIFI Language/zh
 */
export const isWeiXinGte656 = () => {
    const { userAgent } = window.navigator;
    const wxInfo = userAgent.match(/MicroMessenger\/([\d.]+)/i);
    return (!userAgent.includes('wxwork') &&
        wxInfo &&
        wxInfo.length >= 2 &&
        wxInfo[1] >= '6.5.6'
    );
};

export const isWindowsWechat = () => {
    return /WindowsWechat/.test(navigator.userAgent);
};

// 判断当前项目是否是移动官网
export const isMobileProject = () => {
    return window.location.pathname.startsWith('/mobile');
}

// 判断当前项目是否是用户中心
export const isUserCenterProject = () => {
    return window.location.pathname.startsWith('/user-center');
}