import '@src/assets/less/share.less';

import './../../common/common';
import { extendPrototype, getRequest, isMobile } from './../../common/util';
import Toast from './../../components/Toast/Toast';

extendPrototype();

/**
 * 验证域名是否在白名单域名之内
 * @param url
 * @returns {boolean}
 */
const testDomain = url => (
    /^(http|https):\/\/meeting.tencent.com\//.test(url) ||
    /^(http|https):\/\/cloud.tencent.com\//.test(url) ||
    /^(http|https):\/\/youxi.vip.qq.com\//.test(url)
);

const init = () => {
    const qrcodeUrl = decodeURIComponent(getRequest('qrcode_url'));
    /* eslint-disable no-useless-escape */
    const urlReg = /[http(s)|HTTP(s)]?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    const tipsWrap = document.getElementById('tipsWrap');
    const errorWrap = document.getElementById('errorWrap');
    if (qrcodeUrl && urlReg.test(qrcodeUrl) && testDomain(qrcodeUrl)) {
        if (isMobile()) {
            window.location.href = qrcodeUrl;
        }
        tipsWrap.style.display = 'flex';
        errorWrap.style.display = 'none';
        new window.QRCode(document.getElementById('qrcodeCtrl'), {
            width: 200,
            height: 200,
        }).makeCode(qrcodeUrl);
    } else {
        tipsWrap.style.display = 'none';
        errorWrap.style.display = 'flex';
        Toast('访问参数错误', 2000);
    }
};

init();