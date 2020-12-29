import { deepCopy, atou } from './../utils/util';
import { convertTextToImg } from './../utils/canvas';

export const getLocalName = (userid, hostAppUid, inviteList) => {
    let res = '';
    for (let i in hostAppUid) {
        if (hostAppUid[i].english_name === userid) {
            res = ` ${atou(hostAppUid[i].local_name)}`;
            break;
        }
    }
    for (let t in inviteList) {
        if (inviteList[t].english_name === userid) {
            res = ` ${atou(inviteList[t].local_name)}`;
            break;
        }
    }
    return res;
}

export const getInviteList = (hostAppUid, inviteList, userType) => {
    let res = '';
    let lists = deepCopy(inviteList);
    for (let t in hostAppUid) {
        let isContain = false;
        for (let j in inviteList) {
            if (hostAppUid[t].english_name === inviteList[j].english_name) {
                isContain = true;
                break;
            }
        }
        if (!isContain) {
            lists.push(hostAppUid[t]);
        }
    }
    for (let i in lists) {
        const { english_name: englishName, local_name: localName } = lists[i];
        const tmpName = dealLiName({ englishName, localName });
        if (tmpName) {
            res += `${tmpName};`;
        }
    }
    return res;
}

/**
 * 处理默认头像
 * @param {*} param0.avatar - 头像
 *    https://madialab-storage-1256380422.cos.ap-guangzhou.myqcloud.com/img/vst_ico80x80_2x.png
 */
export const handleAvatar = ({
    username = '',
    avatar = '',
    isDefaultAvatar = -1, // 0: 自己图片。1: 默认; avatar_type ---- 1 默认
    fsize = 60, // 图片中字体的大小
    from = '', // pmi-detail 不自动修改 fsize
    canvasWidth = 120,
    canvasHeight = 120,
    // 设置字体的位置
    fillTextX = 60,
    fillTextY = 60,
    needDecode = true, // 用户名是否需要解码，默认=true，需要解码
}) => {
    if (!username) {
        return avatar;
    }

    const isDefaultAvatarUrl = (
        avatar &&
        avatar.indexOf('madialab-storage-1256380422.cos.ap-guangzhou.myqcloud.com/img/vst_ico80x80_2x.png') !== -1
    );
    if (!avatar || isDefaultAvatarUrl ||
        isDefaultAvatar === 1
    ) {
        let str = username;
        if (needDecode) {
            str = atou(username);
        }
        str = str.trim();

        /**
         * 英文字：RICKKKSUN  头像展示为R（取首字母）
         */
        // eslint-disable-next-line
        if (/^[a-zA-Z]+$/.test(str)) { // 纯英文
            str = str.substring(0, 1).toUpperCase();
        } else { // 取后两位
            // PMI 会议的头像可以修改 fsize 字段。
            if (from !== 'pmi-detail') {
                fsize = 45;
            }

            const len = str.length - 2;
            str = str.substring(len);
        }

        const res = convertTextToImg({
            txt: str,
            canvasWidth,
            canvasHeight,
            fsize,
            fillTextX,
            fillTextY,
        });
        // console.log('>>> handle-avatar:', res);
        return res;
    }

    return avatar;
}


/**
 * 展示用户的名称:
 *    1、存在 englishName 且不为纯数字：
 *        1.1、存在 localName，显示“test(测试)”
 *        1.2、显示 “test”
 *    2、englishName 不存在或为纯数字: 显示 localName “测试”
 */

export const dealLiName = ({ englishName = '', localName = '', uuid = '' }) => {
    if (uuid && localName && englishName) {
        // uuid、localName、englishName非空
        return uuid + '(' + atou(localName) + ')';
    } else if (uuid && localName && !englishName) {
        // uuid、localName非空
        return uuid + '(' + atou(localName) + ')';
    } else if (uuid && !localName && englishName) {
        // uuid、englishName非空
        return uuid + '(' + englishName + ')';
    } else if (!uuid && localName && englishName) {
        // uuid空，localName和englishName 不为空
        return englishName + '(' + atou(localName) + ')';
    } else if (!uuid && !localName && englishName) {
        // 仅englishName非空
        return englishName;
    } else if (!uuid && localName && !englishName) {
        // 仅localName非空
        return atou(localName);
    } else if (uuid && !localName && !englishName) {
        // 仅uuid非空
        return uuid;
    } else {
        return '';
    }
};