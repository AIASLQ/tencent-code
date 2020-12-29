// https://github.com/facebook/create-react-app/issues/5674
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import { isFormalEnv, loadVConsoleScript, isWin, isIE9, addClass, extendPrototype, isMobile } from './../web-tools/utils/util';
import { headWrapBtn, headWrapLiBtn, templateFooter, loadBeaconSdk, beaconReport } from './../web-tools/user-center/index';
import './../web-tools/user-center/prepare-raven';

/**
 * window.$util.Raven
 * window.$util.beaconReportLists 缓存灯塔上报数据
 */
if (!window.$util) {
    window.$util = {};
};
extendPrototype();

/**
 * src/template/header/header.html
 */
window.templateHeader = {
    headWrapBtn,
    headWrapLiBtn,
};
window.$templateFooter = templateFooter;

const setBodyClassName = () => {
    if (isMobile()) {
        addClass(document.body, 'in-mobile');
    } else {
        addClass(document.body, 'in-pc');
    }
    if (isWin()) {
        addClass(document.body, 'in-win');
        if (isIE9()) {
            addClass(document.body, 'is-ie9');
        }
    }
};

function resizeContentCtrl() {
    const elContentCtrl = document.getElementById('contentCtrl');
    const elFootWrapCtrl = document.getElementById('footWrapCtrl');
    const elHeadWrapCtrl = document.getElementById('headWrapCtrl');
    // 获取页面设置的最小高度
    let datasetMinHeight = 0;
    if (elContentCtrl && elContentCtrl.dataset && elContentCtrl.dataset.minHeight) {
        datasetMinHeight = Number(elContentCtrl.dataset.minHeight);
    }
    // 窗口可视高度 - footer高度 - header高度
    if (elContentCtrl && elContentCtrl.style && elFootWrapCtrl && elHeadWrapCtrl) {
        let tmp = (document.body.clientHeight - elFootWrapCtrl.clientHeight - elHeadWrapCtrl.clientHeight);
        tmp = (tmp > datasetMinHeight) ? tmp : datasetMinHeight; // 不能小于页面设置的最小高度
        console.log('>>> :', tmp, document.body.clientHeight, elFootWrapCtrl.clientHeight, elHeadWrapCtrl.clientHeight);
        elContentCtrl.style.minHeight = `${tmp}px`;
    }
    setTimeout(() => {
        if (typeof window.onResizeContentCtrlFinished === 'function') {
            window.onResizeContentCtrlFinished();
        }
    }, 0);
}
window.addEventListener('resize', resizeContentCtrl, false);

// run
setBodyClassName();
resizeContentCtrl();
if (isMobile() && !isFormalEnv()) {
    loadVConsoleScript();
}

window.pageLoadTime = {
    report(data) {
        console.log('page load time listen_type:', data.listen_type);
        beaconReport('page_load_time', {
            wemeet_platform: 'officialWebsite',
            listen_type: data.listen_type,
            page_file: data.page_file,
            page_name: data.page_name,
            load_time: data.load_time,
        });
    },
};

window.addEventListener('load', () => {
    // console.log('page is fully loaded');
    loadBeaconSdk();
});

console.log('common.js finished executing.');