import { ENV } from './constant';
import MaskingLayer from './../user-center/components/MaskingLayer/MaskingLayer';

const IS_I18N = process.env.IS_I18N === 'true';

/**
 * 深拷贝 数组 或 对象
 * */
export function deepCopy(o) {
    if (o instanceof Array) {
        const n = [];
        for (let i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    }
    if (o instanceof Object) {
        const n = {};
        for (const i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    }
    return o;
}

/**
 * 获取 generateId 函数用于生成不重复的 id
 */
export const getGenerateId = () => {
    let num = 0;
    return [
        function() {
            return ++num;
        },
        function() {
            // reset
            num = 0;
        },
    ];
};

/**
 * 生成随机字符串，默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
 * @param {number} len 要生成字符串的长度
 * @return {string} 随机字符串
 */
export const randomString = (len = 9) => {
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
};

/**
 * 获取 url 搜索部分key所对应的值
 * @param {String} name 需要获取所对应值的 key
 * @param {String} urlSearch eg: ?name=Tony&id=1234 or name=Tony&id=1234
 * @return 匹配键所得到的值 or false
 */
export const getRequest = (name, urlSearch) => {
    if (!urlSearch) {
        urlSearch = window.location.href.split('?')[1];
    } else if (urlSearch.split('?')[1]) {
        urlSearch = urlSearch.split('?')[1];
    }
    if (urlSearch) {
        // 去除 hash 值
        urlSearch = String(urlSearch).split('#')[0];
    }
    const res = new RegExp(`(^|&)${name}=([^&]*)`).exec(urlSearch);
    return !!res && res[2];
};

/**
 * 设置 cookie
 * @param {*} cname
 * @param {*} cvalue
 * @param {*} exdays 单位: 天
 * @param {*} pathValue 写入路径
 */
export const setCookie = (cname, cvalue, exdays, pathValue = '') => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toGMTString()}`;
    let cookiePath = '';
    if (pathValue) {
        cookiePath = `; path=${pathValue}`;
    }
    document.cookie = `${cname}=${cvalue}; ${expires}${cookiePath}`;
};

/**
 * 获取 cookie
 * @param {*} cname
 */

export const getCookie = (cname) => {
    let arr;
    const reg = new RegExp(`(^| )${cname}=([^;]*)(;|$)`);

    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    return null;
};

export const getEmonitor = () => ({
    /**
     * @param {Object} options
     * @param {Number} options.level 日志级别，建议按这几个级别区分：debug:0, info: 1, warn: 2, error: 3;
     * 这里啄木鸟官方实例是用string类型如'info'，但是他们的数据表设计有误，表里面是bigint类型，如果上报string类型，会导致根据日志级别过滤日志时有问题
     * @param {String} options.log 日志内容
     */
    log: ({
        level = 0,
        log = {},
    }) => {
        // 私有化版本不做日志上报
        if (process.env.WEMEET_PARAM_PRIVATE) {
            return;
        }

        if (
            window.emonitorIns &&
            typeof window.emonitorIns.log === 'function'
        ) {
            let str = log;
            if (typeof(log) === 'object') {
                try {
                    str = JSON.stringify(log);
                } catch (err) {
                    console.error(err);
                }
            }

            const tmp = {
                // 日志级别，建议按这几个级别区分：debug: 0, info: 1, warn: 2, error: 3;
                level,
                log: str,
            };

            console.info('emonitorIns.log:\n', tmp);
            window.emonitorIns.log(tmp);
        } else {
            console.warn('emonitorIns.log: window.emonitorIns is undefined:\n', log);
        }
    },
});

/**
 * http://www.w3help.org/zh-cn/causes/BX2040
 */
export const getLanguage = () => (navigator.language || navigator.browserLanguage).toLowerCase();

// export const loadElementUI = () => {
//   return new Promise((resolve, reject) => {
//     import(/* webpackChunkName: 'ElementUI' */ 'element-ui').then(res => {
//       resolve(res.default);
//     }).catch(err => {
//       reject(err);
//     });
//   })
// }

export const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    // onload 事件会在页面或图像加载完成后立即发生。
    script.onload = () => {
        resolve();
    };
    // 发生在脚本加载期间的 error 会被 error 事件跟踪到。
    script.onerror = (err) => {
        reject(err);
    };
    document.body.appendChild(script);
});

export const haveClass = (el, className) => {
    const classList = el.className.split(' ');
    return classList.indexOf(className) !== -1;
};

export const addClass = (el, className) => {
    const classList = el.className.split(' ');
    if (classList.indexOf(className) === -1) { // 新增 - 不包含
        classList.push(className);
        el.className = classList.join(' ');
    }
};

export const removeClass = (el, className) => {
    let classList = el.className.split(' ');
    classList = classList.filter((c) => c !== className);
    el.className = classList.join(' ');
};

export const removeElement = (el) => {
    const _parentElement = el.parentNode;
    if (_parentElement) {
        _parentElement.removeChild(el);
    }
};

export const getOsName = function() {
    if (navigator.appVersion.includes('Win')) {
        return 'windows';
    }
    if (navigator.appVersion.includes('Android')) {
        return 'android';
    }
    // iOS和Mac的顺序不能变，经测试发现Mac的浏览器里会有iOS的字样
    if (navigator.appVersion.includes('iPhone')) {
        return 'ios';
    }
    if (navigator.appVersion.includes('iPad')) {
        return 'ios';
    }
    if (navigator.appVersion.includes('Mac')) {
        return 'mac';
    }
    if (navigator.userAgent.includes('Linux')) {
        return 'linux';
    }
    return 'unknown';
};

export const downloadApp = () => {
    // let osName = getOsName();
    const url = IS_I18N ? 'https://voovmeeting.com/download.html' : 'https://meeting.tencent.com/download.html';
    window.open(url);
};

export const downloadAppInLaunchPage = () => {
    if (isMobile()) {
        if (isAndroid()) {
            const ua = navigator.userAgent;
            if ( // 点击 ··· 并选择“在浏览器中打开”
                /mqqbrowser/i.test(ua) &&
                /micromessenger/i.test(ua) &&
                !(/wxwork/i.test(ua))
            ) {
                window.history.pushState(
                    // 在不刷新浏览器的情况下，更改 url 为安卓下载地址
                    { url: window.location.href },
                    document.title,
                    `${window.location.origin}/download-android.html?from=1002`,
                );
                // document.getElementById('android-download-guide').style.display='';
                MaskingLayer.show({});
            } else {
                window.location.href = `${window.location.origin}/download-android.html?from=1002`;
            }
        } else {
            window.location.href = IS_I18N ?
                'https://apps.apple.com/app/tencent-meeting/id1497685373' :
                'https://itunes.apple.com/cn/app/id1484048379';
        }
    } else {
        window.location.href = `${window.location.origin}/download-center.html?from=1002`;
    }
};

export const launchWemeet = () => {
    window.location.href = 'wemeet://launch';
};

/**
 * Linux 系统
 */
export const isLinux = () => {
    const os = getOsName();
    if (os === 'linux') {
        return true;
    }
    return false;
};

/**
 * Windows 系统
 */
export const isWin = () => /windows|win32|win64/i.test(navigator.userAgent);

/**
 * mac 系统
 */
export const isMac = () => /macintosh|mac os x/i.test(navigator.userAgent);

export const isLeIE9 = () => (navigator.appName === 'Microsoft Internet Explorer' && parseInt(navigator.appVersion.split(';')[1].replace(/[ ]/g, '').replace('MSIE', '')) <= 9);

export const isIE10 = () => (navigator.appName === 'Microsoft Internet Explorer' && parseInt(navigator.appVersion.split(';')[1].replace(/[ ]/g, '').replace('MSIE', '')) === 10);

export const isIE9 = () => (navigator.appName === 'Microsoft Internet Explorer' && parseInt(navigator.appVersion.split(';')[1].replace(/[ ]/g, '').replace('MSIE', '')) === 9);

export const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    const fd = ss => ua.indexOf(ss) > -1;
    const nf = ss => ua.indexOf(ss) === -1;
    const a = fd('safari/');
    const b = nf('chrome/');
    const c = nf('qq/') && nf('mqqbrowser');
    return a && b && c;
};

export const isEdge = () => /Edge/.test(navigator.userAgent);

export const isFF = () => navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;

export const isIE = () => /Trident/.test(navigator.userAgent);

export const isMobile = () => {
    if (isSafari() && navigator.maxTouchPoints) {
        // some iPads just does not have `iPad` in UA
        return true;
    }
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
};

/**
 * 腾讯会议内部版本号
 */
export const tencentAppVersion = () => {
    let res = '';
    const ua = navigator.userAgent.toLowerCase();
    // 不是企业微信
    const regStr_saf = /app_version\/[\d._]*/gi;
    let verinfo = ua.match(regStr_saf);
    if (verinfo && verinfo.length > 0) {
        res = verinfo[0].split('/')[1];
    }
    // console.log('tencentAppVersion--->', res);
    return res;
};

/**
 * 是否在腾讯会议内部
 */
export const isTencentApp = () => {
    var ua = navigator.userAgent.toLowerCase();
    // 不是企业微信
    var res = /\wemeet/i.test(ua);
    return res;
};

/**
 * 企业微信安卓版
 */
export const isWxworkInAndroid = ua => /Android/i.test(ua) && /wxwork/i.test(ua);

/**
 * 微信浏览器
 */
export const isWeChat = () => {
    const ua = navigator.userAgent.toLowerCase();
    // 不是企业微信
    const res = /micromessenger/i.test(ua) && !(/wxwork/i.test(ua));
    console.log('>>> 微信浏览器环境:', res);
    return res;
};

/**
 * 手机qq环境
 */
export const isQQ = () => {
    const ua = navigator.userAgent.toLowerCase();
    const res = ua.match(/\sqq/i) !== null;
    // console.log('>>> QQ浏览器环境:', res);
    return res;
};

/**
 * 企业微信
 */
export const isWxwork = ua => navigator.userAgent.toLowerCase().indexOf('wxwork') !== -1;

/*
 * 企业微信私有化
 */
export const isWxworkLocal = ua => navigator.userAgent.toLowerCase().indexOf('wxworklocal') !== -1;

/**
 * Saas企业微信（非私有化企业微信）
 */
export const isWxWorkSaas = () => isWxwork() && !isWxworkLocal();

/**
 * Android
 */
export const isAndroid = () => /android|adr/i.test(navigator.userAgent.toLowerCase());

/**
 * IOS
 */
export const isIOS = () => /iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase());

/**
 * ucs-2 string to base64 encoded ascii
 * [https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa]()
 * @param {*} str
 */
export const utoa = str => window.btoa(unescape(encodeURIComponent(str)));

/**
 * base64 encoded ascii to ucs-2 string
 * @param {*} str
 */
export const atou = (str) => {
    str = str || '';
    try {
        // 修复 password
        return decodeURIComponent(escape(window.atob(str)));
    } catch (e) {
        // console.error(e);
        return str;
    }
};

export const extendPrototype = () => {
        /**
         * 在 ie 中的兼容性处理 location.origin
         */
        if (!window.location.origin) {
            window.location.origin = `${window.location.protocol}//${
      window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
  }
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/\s+/g, '');
    };
  }
  if (!window.$util) {
    window.$util = {};
  }
  /**
   * 对Date的扩展，将 Date 转化为指定格式的String
   * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   * 例子：
   *    (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
   *    (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
   */
  // eslint-disable-next-line no-extend-native
  Date.prototype.Format = function (fmt = 'yyyy-MM-dd hh:mm:ss') {
    const o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
      }
    }
    return fmt;
  };
};

export function verifyEmail(val) {
  // eslint-disable-next-line
  let Regex = /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/;
  return Regex.test(val);
}

export const checkPhoneNumber = function (inputText) {
  return /^\d+$/.test(inputText);
};

/**
 * 手机号码掩码
 * @description 13714565742 -> 137****5742
 * */
export function phoneCover(val) {
  val = String(val);
  let newVal = '';
  if (val.length > 8) {
    newVal += val.substr(0, 4);
    newVal += ' ********';
    newVal += val.substr(val.length - 4, val.length - 1);
  }
  return newVal;
}

/**
 * 校验手机号码
 * @param val
 * @return true or false
 * */
export function verifyPhone(val) {
  // let Regex = /^[1][3,5,6,7,8,9][0-9]{9}$/
  // 支持13、15、16、17（除170、171）、18、19的号段
  const Regex = /^(13[0-9]{9}|14[5,7][0-9]{8}|15[0-9]{9}|16[0-9]{9}|17[2-9][0-9]{8}|18[0-9]{9}|19[0-9]{9})$/;
  // console.log('isPhoneAvailable ' + Regex.test(val))
  return Regex.test(val);
}

/**
 * 校验名称 -- 允许输入数字、中文、英文、短划线
 * @param val
 * @return true or false
 * */
export function verifyName(val) {
  // eslint-disable-next-line
  let Regex = /[^a-zA-Z0-9\u4E00-\u9FA5_]/g; // [^xxxx] 查找任何不在方括号之间的字符。
  return !Regex.test(val);
}

/**
 * 校验合法正整数
 * @param val
 * @return true or false
 * */
export function verifyInt(val) {
  // eslint-disable-next-line
  let Regex = /^[1-9][0-9]*$/;
  return Regex.test(val);
}

/**
 * 校验数字 -- 不含 e 科学技术法
 * @param val
 * @return true or false
 * */
export function verifyNum(val) {
  // eslint-disable-next-line
  let Regex = /^[1-9]+[0-9]*\.?[0-9]+$/;
  return Regex.test(val);
}

/**
 * 正小数
 * @param val
 * @return true or false
 * */
export function verifyPositiveDecimal(val) {
  return /^[1-9]+[0-9]*\.[0-9]+$/.test(val) || /^0\.[0-9]+$/.test(val);
}

/**
 * 校验数字或字母
 * @param val
 * @return true or false
 * */
export function verifyNumORLetter(val) {
  // eslint-disable-next-line
  let Regex = /^[a-zA-Z0-9]+$/;
  return Regex.test(val);
}

/**
 * 校验数字或字母或下划线
 * @param val
 * @return true or false
 * */
export function verifyNumORLetterORUnderline(val) {
  // eslint-disable-next-line
  let Regex = /^[a-zA-Z0-9_]+$/;
  return Regex.test(val);
}

/**
 * 校验是否全是中文字符
 * @param {*} val
 */
export function verifyChineseChar(val) {
  return /^[\u4E00-\u9FA5]+$/.test(val);
}

/**
 * 检查是否含有中文字符
 * @param {*} val
 */
export function includeChineseChar(val) {
  return /[\u4E00-\u9FA5]/g.test(val);
}

/**
 * 校验 URL
 * @param val
 * @return true or false
 * */
export function verifyURL(val) {
  // eslint-disable-next-line
  return !!val.match(
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g
  );
}

const dealSearchStr = (obj = {}, options = {}, hash = '') => {
  let searchStr = '';
  const tmp = Object.assign({}, obj, options);
  let t = 0;
  for (const i in tmp) {
    searchStr += (`${(t !== 0 ? '&' : '') + i}=${tmp[i]}`);
    t++;
  }
  if (hash) { // add hash #
    searchStr += (`#${hash}`);
  }
  if (t !== 0) { // add ?
    searchStr = `?${searchStr}`;
  }
  return searchStr;
};

export const deleteURLSearch = (url = window.location.href, key) => {
  const urlArr = url.split('?');
  let resStr = '';
  if (urlArr[1]) { // extract location.search
    const searchArr = urlArr[1].split('#');
    const lists = searchArr[0].split('&');
    const obj = {};
    for (const i in lists) {
      const arr = lists[i].split('=');
      if (arr[0] !== key) { // 与 addURLSearch 的区别; 另外dealSearchStr的 options 为 {}
        obj[arr[0]] = arr[1] || '';
      }
    }
    resStr = dealSearchStr(obj, {}, searchArr[1]);
  } else {
    resStr = dealSearchStr({}, {}, urlArr[0].split('#')[1]);
  }
  return urlArr[0] + resStr;
};

export const addURLSearch = (url = window.location.href, options = {}) => {
  const urlArr = url.split('?');
  let resStr = '';
  if (urlArr[1]) { // extract location.search
    const searchArr = urlArr[1].split('#');
    const lists = searchArr[0].split('&');
    const obj = {};
    for (const i in lists) {
      const arr = lists[i].split('=');
      obj[arr[0]] = arr[1] || '';
    }
    resStr = dealSearchStr(obj, options, searchArr[1]);
  } else {
    resStr = dealSearchStr({}, options, urlArr[0].split('#')[1]);
  }
  return urlArr[0] + resStr;
};

/**
 * 函数防抖 - 当调用动作过n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间
 * @param {Function} fn 调用函数
 * @param {Number} delay 延迟时间 n毫秒
 */
export const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

/**
 * 函数节流 - 预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期
 * @param {*} fn 调用函数
 * @param {*} wait 执行周期
 */
export const throttle = (fn, wait) => {
  let prev = Date.now();
  return function () {
    const now = Date.now();
    if (now - prev >= wait) {
      fn.apply(this, arguments);
      prev = Date.now();
    }
  };
};

/**
 * 将 val 复制到剪切板
 * @param {String} val
 * @returns {Boolean} res - 是否成功复制到剪切板
 */
export const execCommandCopy = (val) => {
  if (typeof document.execCommand !== 'function') {
    return false;
  }
  const textarea = document.createElement('textarea');
  textarea.setAttribute('readonly', 'readonly');
  textarea.value = val;
  // textarea.setAttribute('value', val)
  document.body.appendChild(textarea);
  textarea.select();
  const res = document.execCommand('copy');
  console.log('>>> execCommand copy:', res);
  document.body.removeChild(textarea);
  return res;
};

/**
 * compare two versions
 *
 * @param ver1
 * @param ver2
 * @returns {Number} Returns a number indicates the relationship about ver1 and ver2.
 * A number less than 0 indicates ver1 is less than ver2,
 * a number greater than 0 indicates ver1 is greater than ver2.
 * Otherwise, a number of 0 means ver1 equals to ver2.
 *
 * eg: compareVersion('1.7.1', '1.6.35')
 * -1 (ver1 < ver2); 1 (ver1 > ver2); 0 (ver1 = ver2)
 *
 */
export const compareVersion = (ver1, ver2) => {
  if (typeof ver1 !== 'string') {
    throw new Error(`version1 should be type of string: ${ver1}`);
  }
  if (typeof ver2 !== 'string') {
    throw new Error(`version2 should be type of string: ${ver2}`);
  }

  // TODO: should check the format precisely
  const v1 = ver1.split('.');
  const v2 = ver2.split('.');
  const len1 = v1.length;
  const len2 = v2.length;
  for (let i = 0; i < len1 && i < len2; i++) {
    const num1 = parseInt(v1[i], 10);
    if (isNaN(num1) || num1 < 0) {
      throw new Error(`invalid version1: ${v1}`);
    }
    const num2 = parseInt(v2[i], 10);
    if (isNaN(num2) || num2 < 0) {
      throw new Error(`invalid version2: ${v2}`);
    }
    if (num1 < num2) {
      return -1;
    } if (num1 > num2) {
      return 1;
    }
  }

  if (len1 === len2) {
    return 0;
  }

  // 1.2.0 vs 1.2, should be considered as equal
  if (len1 > len2) {
    for (let i = len2; i < len1; i++) {
      if (v1[i] !== '0') {
        return 1;
      }
    }
    return 0;
  }
  for (let i = len1; i < len2; i++) {
    if (v2[i] !== '0') {
      return -1;
    }
  }
  return 0;
};

/**
 * Determine whether QBCore version of the web browser embedded in the WeiXin PC client
 * is less than the given parameter QBCoreVer.
 * @param QBCoreVer the QBCore version you want do compare against
 */
export const isWeiXinQBCoreLt = (QBCoreVer) => {
  const { userAgent } = window.navigator;
  const QBCoreInfo = userAgent.match(/QBCore\/([\d.]+)/i);
  const isWeiXin = /MicroMessenger/i.test(userAgent);
  return isWeiXin
    && !userAgent.includes('wxwork')
    && QBCoreInfo
    && QBCoreInfo.length >= 2
    && compareVersion(QBCoreInfo[1], QBCoreVer) < 0;
};

/**
 * 企业微信的userAgent：Mozilla/5.0 (Linux; Android 9; Pixel 2 Build/PQ2A.190405.003; wv)
 * AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126
 * MQQBrowser/6.2 TBS/044605 Mobile Safari/537.36 wxwork/2.7.8 MicroMessenger/7.0.1 NetType/WIFI Language/zh
 */
export const isWeiXinGte656 = () => {
  const { userAgent } = window.navigator;
  const wxInfo = userAgent.match(/MicroMessenger\/([\d.]+)/i);
  return (
    !userAgent.includes('wxwork') &&
    wxInfo &&
    wxInfo.length >= 2 &&
    compareVersion(wxInfo[1], '6.5.6') >= 0
  );
};

export const isWindowsWechat = () => /WindowsWechat/.test(navigator.userAgent);

/**
 * sleep promise
 * @param {number} ms sleep毫秒数
 * @return {Promise} promise sleep function
 */
export const sleep = ms => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export const doWeiXinLaunch = async (schemeUrl, debugMode = false, reportCallback = null) => {
  if (reportCallback) {
    reportCallback('web_do_wx_launch');
  }

  getEmonitor().log({
    level: 1, log: {
      title: 'doWeiXinLaunch 1',
      schemeUrl,
      WeixinJSBridge: (typeof (window.WeixinJSBridge) !== 'undefined'),
    },
  });
  if (window.WeixinJSBridge) {
    console.log('invoking WeixinJSBridge launchApplication...');
    if (debugMode) {
      alert('invoking!!');
    }
    if (reportCallback) {
      reportCallback('web_wx_invoke_launch');
    }
    window.WeixinJSBridge.invoke('launchApplication', {
      schemeUrl,
    }, (res) => {
      if (debugMode) {
        alert(`invoke res:${JSON.stringify(res)}`);
      }
      console.log('WeixinJSBridge invoke result:', res);
      getEmonitor().log({
        level: 1, log: {
          title: 'doWeiXinLaunch 2',
          api: 'launchApplication',
          schemeUrl,
          result: res,
        },
      });
      if (reportCallback) {
        let result_msg = '';
        if (res && res.err_msg) {
          result_msg = res.err_msg;
        }
      }
    });
  } else {
    if (reportCallback) {
      reportCallback('web_no_wxjsbridge_at_last');
    }
    if (debugMode) {
      alert('no WeixinJSBridge in doWeiXinLaunch');
    }
    if (
      typeof window === 'object' &&
      typeof window.$util === 'object' &&
      typeof window.$util.Raven === 'function'
    ) {
      window.$util.Raven('tm-Fatal: WeixinJSBridge does not exist', {});
    }
  }
};

/**
 * 判断 ipad 环境
 */
export const isiPad = () => {
  if (/iPad/i.test(navigator.userAgent)) {
    return true;
  }
  // 之前发现对于（当时来说）新版iPad，存在其safari浏览器的UA不带iPad字样的情况。
  // 这种情况的一个ua实例是：
  // Mozilla/5.0 (Macintosh;Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Safari/605.1.15
  // 实际上我认为这是苹果的bug。对于这种情况，判断如下：
  if (isSafari() && !isMobile() && navigator.maxTouchPoints) {
    // some iPads just does not have `iPad` in UA
    return true;
  }
  return false;
};

export const isIPad = ua => isiPad();

/**
 * 适配微信 & 企业微信的scheme跳转
 * @param schemeUrl
 */
export const jumpScheme = async (schemeUrl, debugMode = false, reportCallback = null) => {
  if (reportCallback) {
    reportCallback('web_jump_scheme');
  }

  const _isWeiXinQBCoreLt = isWeiXinQBCoreLt('4.0.1194.400');
  getEmonitor().log({
    level: 1, log: {
      title: 'jumpScheme 1',
      schemeUrl,
      isWeiXinQBCoreLt: _isWeiXinQBCoreLt,
    },
  });
  if (_isWeiXinQBCoreLt) {
    return {
      msg: {
        title: '提示',
        content: '当前微信版本较低，您可以在浏览器工具栏上选择“复制链接”或“浏览器打开”',
      },
    };
  }

  const useWeixinJSBridge = isWeiXinGte656() && !isWindowsWechat();
  getEmonitor().log({
    level: 1, log: {
      title: 'jumpScheme 2',
      schemeUrl,
      useWeixinJSBridge,
    },
  });
  // 企业微信：找微信同事，launchApplication 打开第三方 app
  if (useWeixinJSBridge) {
    console.log('>>> window.WeixinJSBridge:', window.WeixinJSBridge);
    if (window.WeixinJSBridge) {
      await doWeiXinLaunch(schemeUrl, debugMode, reportCallback);
    } else {
      console.log('WeixinJSBridge not ready yet.');
      if (reportCallback) {
        reportCallback('web_wxjsbridge_not_ready_yet');
      }
      document.addEventListener('WeixinJSBridgeReady', async () => {
        await doWeiXinLaunch(schemeUrl, debugMode, reportCallback); // //此时立即调用权限可能还未准备好，所以doLaunch里需要延迟调用
      });
    }
  } else {
    const isSafariMAC = isSafari() && !isMobile();
    const useIframe = isSafariMAC || isEdge() || isIE() || isFF();
    getEmonitor().log({
      level: 1, log: {
        title: 'jumpScheme 3',
        schemeUrl,
        useIframe,
      },
    });

    if (useIframe) {
      const el = document.createElement('iframe');
      el.style.display = 'none';
      el.src = schemeUrl;
      document.body.appendChild(el);
      setTimeout(() => {
        document.body.removeChild(el);
      }, 3000);
      // one more thing
      if (isSafariMAC && navigator && navigator.maxTouchPoints) {
        window.location.href = schemeUrl;
      }
    } else {
      window.location.href = schemeUrl;
    }
  }
};

/**
 * 分割数字
 * @param {*} val
 * @param {*} n
 * @param {*} format
 * eg: divideNum(123456789, 4, ',')
 */
export const divideNum = (val, n1 = 3, n2 = 4, format = ' ') => {
  if (val === undefined || val === null) {
    val = '';
  }
  let tmp = String(val);
  let res = '';
  const valLength = tmp.length;
  let sliceNum = !(tmp.length % n2) && valLength > 9 ? n2 : n1;
  while (tmp.length > sliceNum) {
    res = res + tmp.slice(0, sliceNum) + format;
    tmp = tmp.slice(sliceNum);
    sliceNum = !(tmp.length % n2) && valLength > 9 ? n2 : n1;
  }
  if (tmp) {
    res += tmp;
  }
  return res;
};

/**
 * check location.href
 * @param {String} val
 */
export const checkLocation = val => window.location.href.indexOf(val) !== -1;

// Cross-browser DOM event binding
export const addEventListener = (elem, event, fn) => {
  if (elem.addEventListener) {
    return elem.addEventListener(event, fn, false);
  }
  if (elem.attachEvent) {
    return elem.attachEvent(`on${event}`, fn);
  }
};

/**
 * 获取元素位置
 */
export const getElementViewLeft = (element) => {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;
  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  let elementScrollLeft = document.documentElement.scrollLeft;
  if (document.compatMode === 'BackCompat') {
    elementScrollLeft = document.body.scrollLeft;
  }
  return actualLeft - elementScrollLeft;
};

/**
 * 获取元素位置
 */
export const getElementViewTop = (element) => {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  let elementScrollTop = document.documentElement.scrollTop;
  if (document.compatMode === 'BackCompat') {
    elementScrollTop = document.body.scrollTop;
  }
  return actualTop - elementScrollTop;
};

/**
 * http://test.txmeeting.oa.com/test/index.html - 未使用 80 端口
 * http://test.txmeeting.oa.com:8081/test/index.html
 * http://10.100.69.245:8081/test/index.html
 */
export const isTestEnv = function () {
  return /\.com\/test\//.test(document.location.href)
    || /:8081\/test\//.test(document.location.href)
    || /^https?:\/\/test(-\d+)?\.txmeeting\.tencent\.com/.test(document.location.href)
    || /^https?:\/\/test(-\d+)?\.cicd\.tencentmeeting\.com/.test(window.location.href)
    || /^(http|https):\/\/9\.221\.7\.217/i.test(window.location.href)
    || /^https?:\/\/testweb\.wemeet\.tencent\.com/i.test(window.location.href)
    || /^https?:\/\/test\.web\.voovmeeting\.com/i.test(window.location.href);
};

export const isLocalEnv = function () {
  return /:\/\/localhost/.test(document.location.href)
    || /:\/\/wemeet-dev/.test(document.location.href);
};

/**
 * http://test.txmeeting.oa.com/pre-release/index.html - 未使用 80 端口
 * http://test.txmeeting.oa.com:8081/pre-release/index.html
 * http://10.100.69.245:8081/pre-release/index.html
 */
export const isPreReleaseEnv = function () {
  return /\.com\/pre-release\//.test(document.location.href)
    || /:8081\/pre-release\//.test(document.location.href)
    || /https:\/\/pre(-\d+)?\.txmeeting\.tencent\.com/.test(document.location.href)
    || /^https?:\/\/pre(-\d+)?\.cicd\.tencentmeeting\.com/.test(window.location.href);
};

/**
 * 正式环境:
 *    meeting.tencent.com
 *    cloud.tencent.com // sem落地页
 *    meeting.qq.com
 *    wemeet.qq.com
 *    voovmeeting.com
 *
 * 小龙虾运营域名:
 *     youxi.vip.qq.com
 *
 */
export const isNormalEnv = function () {
  if (
    /^(http|https):\/\/(cloud|meeting|wemeet)\.(qq|tencent)\.com/.test(
      document.location.href
    ) ||
    /^(http|https):\/\/voovmeeting\.com/.test(document.location.href)
  ) {
    return true;
  }

  return false;
};

export const isOAEnv = function () {
  return /:\/\/wemeet.oa.com/.test(document.location.href);
};

export const isFormalEnv = function () {
  return isNormalEnv();
};

export const escapeHtml = unsafe => String(unsafe)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/'/g, '&quot;')
  .replace(/'/g, '&#039;');

export const makePhoneLinkWithoutTerminator = (
  dialObj,
  areaName,
  meetingCode
) => {
  let phoneUri = '';
  let switchboard_extension_interval = ',';
  let phone_language_interval = ',,,,';
  const dialInfo = dialObj[areaName];

  if (typeof dialInfo !== 'object') {
    console.log('ERROR: makePhoneLink dialInfo not object!');
    return false;
  }
  if (typeof dialObj.switchboard_extension_interval === 'string') {
    switchboard_extension_interval = dialObj.switchboard_extension_interval;
  }

  if (typeof dialInfo.completed === 'string') {
    phoneUri = `${dialInfo.completed}${switchboard_extension_interval}${meetingCode}`;
  } else {
    if (typeof dialObj.phone_language_interval === 'string') {
      phone_language_interval = dialObj.phone_language_interval;
    }

    phoneUri = `${dialInfo.switchboard}`;
    // console.log('make phone step 1:', phoneUri);
    // console.log('dialInfo.extension:', dialInfo.extension);
    // console.log('switchboard_extension_interval:', switchboard_extension_interval);
    if (typeof dialInfo.extension === 'string' && dialInfo.extension.length) {
      phoneUri += switchboard_extension_interval + dialInfo.extension;
    }
    // console.log('make phone step 2:', phoneUri);
    // console.log('phone_language_interval:', phone_language_interval);
    // console.log('dialInfo.language:', dialInfo.language);
    phoneUri += phone_language_interval + dialInfo.language;
    // console.log('make phone step 3:', phoneUri);

    phoneUri += switchboard_extension_interval + meetingCode;
  }


  return phoneUri;
};

export const makePhoneLink = (dialObj, areaName, meetingCode, password, encodeTerminator = true, hasPassword = true) => {
  const dialInfo = dialObj[areaName];
  if (typeof dialInfo !== 'object') {
    console.log('ERROR: makePhoneLink dialInfo not object!');
    return false;
  }

  let phoneUri = makePhoneLinkWithoutTerminator(dialObj, areaName, meetingCode);

  let password_interval = ',';
  let terminator = '#';
  const localTerminator = '#';

  if (typeof dialObj.password_interval === 'string') {
    password_interval = dialObj.password_interval;
  }

  if (typeof dialObj.terminator === 'string') {
    terminator = dialObj.terminator;
  }

  phoneUri += encodeTerminator ? encodeURIComponent(terminator) : terminator;
  if (password.length) {
    phoneUri +=
      password_interval +
      password +
      (encodeTerminator ? encodeURIComponent(terminator) : terminator);
  }
  // 没有密码的会议最后添加 ,#
  if (!hasPassword) {
    phoneUri += password_interval + (encodeTerminator ? encodeURIComponent(localTerminator) : localTerminator);
  }

  return phoneUri;
};

/**
 * download file
 * @param {String} filename
 * @param {String} text
 */
export const downloadFile = (filename, text) => {
  if (window.navigator.msSaveBlob) { // IE10+
    const file = new Blob([`\ufeff${text}`], { type: 'text/plain' });
    window.navigator.msSaveBlob(file, filename);
  } else {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
};

/**
 * 下载 .csv 格式文件
 * @param {*} filename
 * @param {*} text
 */
export const downloadFileInCsv = (filename, text) => {
  if (window.navigator.msSaveBlob) { // IE10+
    const file = new Blob([`\ufeff${text}`], { type: 'text/csv' });
    window.navigator.msSaveBlob(file, filename);
  } else {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/csv;charset=utf-8,\ufeff${encodeURIComponent(text)}`);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
};

/**
 * 输出标准格式电话号码
 * @param {object} switchboard 电话号码
 * @param {*} extension 转接号码
 * @returns "xxxx 转xxx" || "xxxx"
 */
export const getHumanReadableDialText = (switchboard, extension) => {
  let ret = switchboard;
  if (typeof extension === 'string' && extension.length) {
    ret += ` 转${extension}`;
  }
  return ret;
};

export const networkHandler = (cb) => {
  // online网络连接事件
  window.addEventListener('online', () => {
    console.log('网络连接已建立');
    cb && cb('online');
  });
  // offline网络连接事件
  window.addEventListener('offline', () => {
    console.log('网络连接已断开');
    // 网络异常，请检查网络设置
    cb && cb('offline');
  });
};

export const loadMomentTimezone = () => new Promise((resolve, reject) => {
  if (typeof window.moment === 'undefined') {
    import(/* webpackChunkName: "moment-timezone" */ 'moment-timezone').then((res) => {
      console.log('>>> moment-timezone:', res.default);
      resolve(res.default);
    }).catch((err) => {
      reject(err);
    });
  } else {
    resolve(window.moment);
  }
});

export const loadTcssScript = (url = 'https://pingjs.qq.com/tcss.ping.https.js') => new Promise((resolve, reject) => {
  loadScript(url).then((res) => {
    if (typeof (window.pgvMain) === 'function') {
      // 国内正式环境域名
      if (
        window.location.host === 'meeting.qq.com'
        || window.location.host === 'meeting.tencent.com'
        || window.location.host === 'wemeet.qq.com'
      ) {
        window.pgvMain({ virtualDomain: 'meeting.qq.com' });
      }

      // 国际化域名
      if (
        window.location.host === 'voovmeeting.com'
      ) {
        window.pgvMain({ virtualDomain: 'voovmeeting.qq.com' });
      }
    }

    resolve(res);
  })
    .catch((err) => {
      console.error(err);
      reject(err);
    });
});

/**
 * 加载 jweixin-1.2.0.js
 */
export const loadJweixinScript = (
  url = 'https://meeting.tencent.com/static/lib/jweixin-1.2.0.js'
) => {
  if (!window.$util) {
    window.$util = {
      jweixinScriptReady: false,
    };
  };
  return new Promise((resolve, reject) => {
    if (window.$util && window.$util.jweixinScriptReady) {
      resolve();
      return true;
    }
    loadScript(url).then((res) => {
      window.$util.jweixinScriptReady = true;
      resolve(res);
    })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const loadSha1Script = () => new Promise((resolve, reject) => {
  if (window.sha1) {
    resolve(window.sha1);
  } else {
    loadScript('https://meeting.tencent.com/static/lib/sha1.min.js').then((res) => {
      resolve(window.sha1);
    })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  }
});

export const loadVConsoleScript = () => new Promise((resolve, reject) => {
  if (window.VConsole) {
    resolve(window.VConsole);
  } else {
    loadScript('https://meeting.tencent.com/static/lib/vconsole.min.js').then((res) => {
      console.log('>>> loadScript:', res);
      if (window.VConsole) {
        // eslint-disable-next-line no-new
        new window.VConsole();
      }
      resolve(window.VConsole);
    })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  }
});

/**
 * 数组去重: 利用 indexOf 判断是否存在于新数组中，不存在则 push 到新数组
 * @param {Array} arr
 */
export const uniqueArr = (arr = []) => {
  const newArr = [];
  for (const i in arr) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

/**
 * 取出两个数组的不同元素
 *
 * eg:
 *    getArrDiff([0,1,2,3,4,5], [0,4,6,1,3,9]); // [2, 5, 6, 9]
 */
export const getArrDiff = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);

  const res = newArr.filter((curValue, i, arr) => arr.indexOf(curValue) === arr.lastIndexOf(curValue));

  return res;
};

/**
 * 取出两个数组的相同元素
 */
export const getArrEqual = (arr1, arr2) => {
  const newArr = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        newArr.push(arr1[j]);
        break;
      }
    }
  }

  return newArr;
};

/**
 * 按照对象的 key 按ASCII码来排序
 * @param {Object} obj
 */
export const sortObj = (obj) => {
  const keysArr = Object.keys(obj).sort();
  const res = {};
  for (const i in keysArr) {
    res[keysArr[i]] = obj[keysArr[i]];
  }
  return res;
};

/**
 * js-sha1 签名算法
 * @param {*} opts
 */
export const getSignature = (sha1, obj) => {
  let str = '';
  const tmp = sortObj(obj);
  const arr = [];
  console.log('>>> sort:', tmp);
  for (const i in tmp) {
    arr.push(`${i}=${tmp[i]}`);
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      // 最后一位
      str += arr[i];
    } else {
      str += (`${arr[i]}&`);
    }
  }
  const res = sha1(str);
  console.log('sha1 :\n', str, '\n\n', res);
  return res;
};

/**
 *
 * @param {*} promise
 * @returns [data, err]
 */
export const awaitWrap = promise => promise
  .then(data => [data, null])
  .catch(err => [null, err]);

export const getAppId = () => {
  if (isTestEnv()) {
    return ENV.TEST.APP_ID;
  } if (isPreReleaseEnv()) {
    return ENV.PRE_RELEASE.APP_ID;
  }
  return ENV.PRODUCT.APP_ID;
};

/**
 * 获取中英文字符串长度：中文算两个，英文算一个
 * @param str
 * @returns {number}
 */
export const getStrLength = (str) => {
  let strLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 128) {
      strLength += 1;
    } else {
      strLength += 2;
    }
  }
  return strLength;
};

// 用于处理安卓 文字巨无霸模式
export const resetMobileFontSize = () => {
  if (!isAndroid()) {
    return false;
  }

  const $dom = document.createElement('div');
  $dom.style = 'font-size:10px;';
  document.body.appendChild($dom);
  const scaledFontSize = parseInt(window.getComputedStyle($dom, null).getPropertyValue('font-size'));
  document.body.removeChild($dom);
  const scaleFactor = 10 / scaledFontSize;
  const originRootFontSize = parseInt(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
  document.documentElement.style.fontSize = `${originRootFontSize * scaleFactor * scaleFactor}px`;
};

/**
 * 判断浏览器是否支持webp格式
 */
export const isSupportWebp = () => {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5)
      .indexOf('data:image/webp') === 0;
  } catch (err) {
    return false;
  }
};

/**
 * 返回的url保留当前url参数
 */
export const queryParamUrl = (itemUrl) => {
  try {
    const urlSearch = window.location.search || '';
    const urlArr = itemUrl.split('#');
    let url = urlArr[0] || '';
    if (url.indexOf('?') > -1) {
      url =
        url +
        urlSearch.replace('?', '&') +
        (urlArr.length > 1 ? `#${urlArr[1]}` : '');
    } else {
      url = url + urlSearch + (urlArr.length > 1 ? `#${urlArr[1]}` : '');
    }
    return url;
  } catch (err) {
    return itemUrl;
  }
};

/**
 * 跳转去腾讯云的购买页
 */
export const handleGoToBuy = () => {
  if (isNormalEnv()) {
    window.location.href = 'https://buy.cloud.tencent.com/tm';
  } else {
    window.location.href = 'https://buy.cloud.tencent.com/tm?buy-config=access';
  }
};
/* 获取官网当前页面path https://docs.qq.com/sheet/DV2RwVWhlY3BsSkp1?tab=BB08J2
*/
export const getOfficialCurrentPageName = () => {
  const path = window.location.pathname;
  switch (path) {
    case '/':
    case '/index.html':
      return 1;
    case '/cloud-meeting.html':
      return 2;
    case '/cloud-rooms.html':
      return 3;
    case '/cloud-mra.html':
      return 4;
    case '/buy.html':
      return 5;
    case '/cooperative-partners.html':
      return 6;
    case '/open-api.html':
      return 7;
    case '/support.html':
      return 8;
    case '/download-center.html':
      return 9;
    default:
      console.log('???path', path);
  }
};

/**
 * 是否是函数
 */

export const isFunction = (func) => {
  return typeof func === 'function';
};

export const filterXss = text => text.replace(/[<>"()]/g, '');

/**
 * 用正则表达式实现html编码（转义）
 **/
export const htmlEncodeByRegExp = (str = '') => {
  let temp = '';
  if (str.length == 0){
    return '';
  }
  temp = str.replace(/&/g, "&amp;");
  temp = temp.replace(/</g, "&lt;");
  temp = temp.replace(/>/g, "&gt;");
  temp = temp.replace(/\s/g, "&nbsp;");
  temp = temp.replace(/\'/g, "&#39;");
  temp = temp.replace(/\"/g, "&quot;");
  return temp;
};

/**
 * 获取客户端ua中的android版本号
 */
export const getAndroidVersion = (ua) => {
  ua = (ua || navigator.userAgent).toLowerCase();
  let match = ua.match(/android\s([0-9.]*)/i);
  return match ? match[1] : undefined;
}

/**
 * 获取客户端ua中的ios版本号
 */
export const getIosVersion = (ua) => {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    let version = (navigator.userAgent || ua).match(/OS\s+(\d+)_(\d+)_?(\d+)?/);
    return [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)];
  }
}