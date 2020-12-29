/**
 * 目前使用到的项目: officialWebsite(官网); userCenter(用户中心)
 */
const initialState = {
    userInfos: {
        userid: '',
        appid: '', // appId企业唯一Id
        vipLevel: '', // string 0免费用户 1付费用户
        chineseName: '',
        username: '',
        nickName: ''
    },
    schedule: {
        hideInviteHostNew: false, // “指定主持人” new 标签
        hideTips: false, // 预定会议提示框; false 展示;  true 不再展示
    },
    ssoInfos: {
        loginType: 'email', // 记录用户上一次登录成功的方式: domain or email
        domainName: '',
        email: '',
    },
    collectMeetingHideGuide: false, // 是否展示首次收藏指引
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RESET':
            return Object.assign({}, state, initialState);
        case 'USERINFOS':
            return Object.assign({}, state, {
                userInfos: action.options
            })
        case 'SSOINFOS':
            return Object.assign({}, state, {
                ssoInfos: action.options,
            });
        case 'COLLECT_MEETING_HIDE_GUIDE':
            return Object.assign({}, state, {
                collectMeetingHideGuide: action.hideGuide
            });
        case 'SCHEDULE_HIDETIPS':
            return Object.assign({}, state, {
                schedule: {
                    ...state.schedule,
                    hideTips: action.hideTips,
                }
            });
        case 'SCHEDULE_HIDEINVITEHOSTNEW':
            return Object.assign({}, state, {
                schedule: {
                    ...state.schedule,
                    hideInviteHostNew: action.hideInviteHostNew,
                }
            });
        default:
            return state
    }
};