import axios from 'axios';
import { randomString, isTestEnv, isLocalEnv, isPreReleaseEnv, addURLSearch, getRequest, getEmonitor } from "./../utils/util";
import { getCurrentLanguage, getCLang } from '../i18n/utils/lang';

const IS_I18N = process.env.IS_I18N === 'true';

const makeUrl = (url) => {
    const regURL = /^(https|http):\/\//;
    if (!regURL.test(url)) {
        let prefix = '/wemeet-webapi';
        if (getRequest('debug') !== 'product') { // add debug=product& 用于在本地调正式环境
            if ( // 测试环境 or https://testweb.wemeet.tencent.com 开头
                isTestEnv()
            ) {
                prefix = '/wemeet-webapi-test';
            } else if (isLocalEnv()) {
                if (getRequest('debug') === 'pre-release') { // add debug=pre-release& 用于在本地调预发布环境
                    prefix = '/wemeet-webapi-pre-release';
                } else {
                    prefix = '/wemeet-webapi-test';
                }
            } else if (isPreReleaseEnv()) {
                prefix = '/wemeet-webapi-pre-release';
            }
        }
        url = prefix + '/' + url;
    }
    return url;
}

const reConstruct = (url) => {
    url = addURLSearch(makeUrl(url), {
        c_os: 'web',
        c_os_version: 1,
        c_os_model: 'web',
        c_timestamp: (+new Date()),
        c_instance_id: 5,
        c_nonce: randomString(8),
        c_app_id: '1400143280',
        c_app_version: IS_I18N ? '1.2.9.0' : 1,
        c_lang: getCLang(getCurrentLanguage()),
        c_district: IS_I18N ? 1 : 0
    });
    return [url];
}

const resCodeError = (req, res, url) => {
    if (res.data && res.data.code !== 0) { // 后台请求错误
        if (
            /\/service\/create-launch-id/i.test(url) ||
            /\/service\/query-launch-id/i.test(url)
        ) {
            return false;
        }

        let obj = {
            api: url,
            req: req,
            res: res.data
        };

        getEmonitor().log({
            level: 3,
            log: {
                ...obj,
                title: 'res.code is not 0.',
            },
        });
    }
}
const setError = (err, url) => {
    let response = err.response || {};
    getEmonitor().log({
        level: 3,
        log: {
            title: 'http error.',
            api: url,
            // data: response.data,
            status: response.status,
            statusText: response.statusText,
            code: err.code || null,
            msg: err.message,
        },
    });
};

const get = (options) => {
    let opts = Object.assign({}, {
        url: '',
        data: {},
        cancelToken: null,
        onUploadProgress: null,
        headers: {},
        timeout: 60000
    }, options);
    // 修改参数
    [opts.url] = reConstruct(opts.url);
    return new Promise((resolve, reject) => {
        axios.get(opts.url, {
            params: opts.data,
            headers: opts.headers,
            cancelToken: opts.cancelToken,
            timeout: opts.timeout,
            onUploadProgress: (progressEvent) => {
                if (typeof opts.onUploadProgress === 'function') {
                    opts.onUploadProgress && opts.onUploadProgress(progressEvent);
                }
            }
        }).then(res => {
            opts.response && opts.response(res.data);
            resolve(res.data);
            resCodeError(opts.data, res, opts.url);
        }).catch(err => {
            reject(err)
            setError(err, opts.url);
        })
    })
}

const post = (options) => {
    let opts = Object.assign({}, {
        url: '',
        data: {},
        cancelToken: null,
        onUploadProgress: null,
        headers: {},
        timeout: 60 * 1000,
        response: () => {}
    }, options);
    // 修改参数
    [opts.url] = reConstruct(opts.url);
    return new Promise((resolve, reject) => {
        axios.post(
            opts.url,
            opts.data, {
                headers: opts.headers,
                cancelToken: opts.cancelToken,
                timeout: opts.timeout,
                onUploadProgress: (progressEvent) => {
                    if (typeof opts.onUploadProgress === 'function') {
                        opts.onUploadProgress && opts.onUploadProgress(progressEvent);
                    }
                }
            }
        ).then(res => {
            opts.response && opts.response(res.data);
            resolve(res.data)
            resCodeError(opts.data, res, opts.url);
        }).catch(err => {
            reject(err)
            setError(err, opts.url);
        })
    })
}

export default {
    get,
    post
};