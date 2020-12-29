const IS_I18N = process.env.IS_I18N === 'true';

export const ENV = {
    PRODUCT: {
        // 正式环境
        APP_ID: '1400115281',
    },
    TEST: {
        // 测试环境
        APP_ID: '1400143280',
    },
    EXTERNAL_TEST: {
        // 对外联调环境
        APP_ID: '1400244218',
    },
    PRE_RELEASE: {
        // 预发布环境
        APP_ID: '1400212767',
    },
};

/**
 * 文档类型
 */
export const DOC_TYPE = {
    WORD: 0,
    EXCEL: 1,
    PPT: 4,
    PDF: 6,
    MEETING_MINUTES: 100, // 会议纪要文档
};

export const MEETING_STATE = {
    NON_EXISTENT: -1, // 会议不存在
    READY: 0, // 待开始(未到预约结束时间且会议中无人)
    CANCELED: 1, // 已取消(结束时间前且会议中无人时，被主持人取消，无法再进入)
    ACTIVE: 2, // 进行中(会议中有人)
    DELETED: 3, // 已删除(结束时间后且会议中无人时，被主持人删除，无法再进入)
    // AboutToBegin: 4, // 即将开始
    // Arrived: 5, // 已到预约开始时间
    ENDED: 6, // 无状态(过了预定结束时间，会议中无人)
    RECYCLED: 7, // 已回收(过了30天被回收，无法再进入)
};

/**
 * 腾讯会议应用包名
 */
export const PACKAGE_NAME = 'com.tencent.wemeet.app';

export const DOWNLOAD_APP_URL = {
    WINDOWS: 'https://work.medialab.qq.com/?auth_type=download&os=windows',
    MAC: 'https://work.medialab.qq.com/?auth_type=download&os=mac',
    IOS: 'https://work.medialab.qq.com/?auth_type=download&os=ios',
    ANDROID: 'https://work.medialab.qq.com/?auth_type=download&os=android',
};

export const DOWNLOAD_APP_URL_OUTER_NET = {
    WINDOWS: `${window.location.origin}/download-win.html`,
    MAC: `${window.location.origin}/download-mac.html`,
    IOS: `${window.location.origin}/download-ios.html`,
    ANDROID: `${window.location.origin}/download-android.html`,
};

export const SCHEME_URL = {
    // 进入会议 `wemeet://page/inmeeting?meeting_code=${this.meetingCode}&token=${this.token}&launch_id=${this.launchId}`
    INMEETING: 'wemeet://page/inmeeting',
    LAUNCH: 'wemeet://launch',
    SCHEME_AUTH_SSO: 'wemeet://auth/sso',
};

export const JUMP_URL = {
    CONTACT_SALES: `${window.location.origin}/advisory.html`,
    AUTO_RENEW_SERVICE_RULES: `${window.location.origin}/service-auto-continue.html`,
    USER_SERVICE_AGREEMENT: `${window.location.origin}/pro-user-service-agreement.html`,
    PRIVACY_POLICY: `${window.location.origin}/privacy-policy.html`,
};

export const ANDROID_APK_DOWNLOAD_URL =
    'https://down.qq.com/download/TencentMeeting_0300000000_1.3.6.411.publish_shield.apk';
export const ANDROID_TOUTIAO_APK_DOWNLOAD_URL =
    'https://down.qq.com/download/TencentMeeting_1410000040_1.3.6.411.publish.apk';
export const WINDOW_APK_DOWNLOAD_URL =
    'https://down.qq.com/download/TencentMeeting_0300000000_1.3.7.402.publish.exe';
export const MAC_APK_DOWNLOAD_URL =
    'https://down.qq.com/download/TencentMeeting_0300000000_1.3.7.402.publish.dmg';

// 下载中心，各端对应的渠道号
export const downloadConfig = IS_I18N ?
    [{
            instance: 'mac',
            type: '1410000198',
        },
        {
            instance: 'windows',
            type: '1410000197',
        },
        {
            instance: 'ios',
            type: '1410000146',
        },
        {
            instance: 'android',
            type: '1410000194',
        },
    ] :
    [{
            instance: 'mac',
            type: '0300000000',
        },
        {
            instance: 'windows',
            type: '0300000000',
        },
        {
            instance: 'ios',
            type: '1410000001',
        },
        {
            instance: 'android',
            type: '0300000000',
        },
    ];

/**
 * 周期性会议类型
 */
export const RECURRING_TYPE = {
    0: '每天',
    1: '每个工作日',
    2: '每周',
    3: '每两周',
    4: '每月',
};

export const TX_CORP_ID = 'wxab249edd27d57738';

/**
 * 会议类型常量
 */
export const MEETING_TYPE = {
    NORMAL_MEETING: 0, // 普通会议
    PERIODICAL_MEETING: 1, // 周期性会议
    SPECIALLY_INVITED_MEETING: 2, // 特邀会议
};

export const PERSONAL_ACCOUNT_APPID = '200000001';

/**
 * 会议号长度范围
 */
export const MIN_MEETING_CODE_LENGTH = 5;
export const MAX_MEETING_CODE_LENGTH = 12;

/**
 * 加载更多组件状态码
 */
export const SLIDE_UP_LOAD = {
    INIT: 0, // 普通会议
    LOADING: 1, // 周期性会议
    END: 2, // 特邀会议
};