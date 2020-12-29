/**
 * 目前使用到的项目: officialWebsite(官网); userCenter(用户中心)
 */
const initialState = {
    /**
     * customSiderId 控制 CustomSider active tab
     *    personal-information
     *    user-meeting-list
     *    doc-meeting-list
     *    account-management
     *    setting
     */
    customSiderId: 'personal-information',
    // expandSubMenu: '',
    userInfos: {
        userid: '', // 用户ID
        appid: '', // appId企业唯一Id
        vipLevel: '', // string 0免费用户 1付费用户
        chineseName: '',
        username: '',
        avatar: '',
        lang: '', // zh-cn: 中文; en-us：英文;
        area: '', // 手机号码区号
        phone: '',
        email: '',
        userType: '', // 帐号类型 1 个人用户 2 企业用户
        isResetPassword: '', // 是否已经设置密码 true是
        qyWechatOpenUserid: '',
        /**
         * 昵称：
         *    企业用户，是自动设置为我们的英文名，不可修改。
         *    个人用户，没设置昵称，就是手机号码中间打星星，有设置就设置的昵称。
         */
        nickName: '',
        /**
         * 0 普通用户
         * 1 超级管理员
         * 2 会服
         */
        roleId: '',
        /**
         * 部门
         */
        department: '',
    },
    docAuth: { // 腾讯文档开放API
        appId: '', // 文档appid
        toid: '', // 文档用户toid
        toidKey: '', // 文档用户toid_key
    },
    weChatRedirectUrl: '', // 用于 WeChat 登录流程页面回调
    jumpInfo: {
        jumpType: 2, // 1: 立即注册，2:绑定微信，3:免费体验
    },
    docIframe: {},
    meetingItemInfo: {}, // `wemeet/meeting/query-meeting-item`
    payType: '',
    liveItemInfo: {}, // `v2/wemeet/live/get-live-basic-info`
    layoutList: [],
    layoutOriginList: [],
    layoutInfoList: [],
    layoutInfoOriginList: [],
    currentStoreLayoutId: '',
    accessList: [], // `v2/corp/user-role/auth-code`
    customAccessList: [], // 本地维护的自定义权限位数组，用于产品自定义的，不在后台权限接口列表中的权限位
    roleCode: 'NORMAL_ROLE',
    corpInfos: { // 企业信息
        multiCorp: false, // 是否是多企业
        corpId: '',
        corpName: '', // 企业名
        payTag: '', // 付费类型 0免费个人版本 1付费个人专业版本 2付费企业版本 11付费商业版本 15免费企业
        payTagStatus: '', // 付费状态 0非付费 1正常 2到期 3被禁用
        payGuideType: 0, // 付费引导 0不需要引导 1引导新购 2引导续费
        meetingOnlineMember: 25, // 会议人数上限
    },
    resourceActiveTab: '', // 资源配置当前tab
    userUIConfig: {}, //  用户 UI 配置，主要用来控制一些表单选项的显示, 对应接口
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RESET':
            return Object.assign({}, state, initialState);
        case 'DOCIFRAME':
            return Object.assign({}, state, {
                docIframe: action.options,
            });
        case 'USERINFOS':
            return Object.assign({}, state, {
                userInfos: action.options,
            });
        case 'USERINFOS_PHONE':
            state.userInfos.phone = action.phone;
            return state;
        case 'USERINFOS_AVATAR':
            state.userInfos.avatar = action.avatar;
            return state;
        case 'USERINFOS_NICKNAME':
            state.userInfos.nickName = action.nickName;
            return state;
        case 'USERINFOS_CHINESENAME':
            state.userInfos.chineseName = action.chineseName;
            return state;
        case 'DOCAUTH':
            return Object.assign({}, state, {
                docAuth: action.options,
            });
        case 'WECHAT_REDIRECT_URL':
            return Object.assign({}, state, {
                weChatRedirectUrl: action.weChatRedirectUrl,
            });
        case 'JUMPINFO':
            return Object.assign({}, state, {
                jumpInfo: action.jumpInfo,
            });
        case 'MEETINGITEMINFO':
            return Object.assign({}, state, {
                meetingItemInfo: action.options,
            });
        case 'CUSTOMSIDERID':
            return Object.assign({}, state, {
                customSiderId: action.customSiderId,
            });
            // case 'EXPAND_SUB_MENU':
            //   return Object.assign({}, state, {
            //     expandSubMenu: action.expandSubMenu
            //   })
        case 'TOKEN':
            return Object.assign({}, state, {
                token: action.token,
            });
        case 'PAY_TYPE':
            return Object.assign({}, state, {
                payType: action.payType,
            });
        case 'LIVEITEMINFO':
            return Object.assign({}, state, {
                liveItemInfo: action.options,
            });
        case 'LAYOUTLIST':
            return Object.assign({}, state, {
                layoutList: action.options,
            });
        case 'LAYOUTORIGINLIST':
            return Object.assign({}, state, {
                layoutOriginList: action.options,
            });
        case 'LAYOUTINFOLIST':
            return Object.assign({}, state, {
                layoutInfoList: action.options,
            });
        case 'LAYOUTINFOORIGINLIST':
            return Object.assign({}, state, {
                layoutInfoOriginList: action.options,
            });
        case 'CURRENTSTORELAYOUTID':
            return Object.assign({}, state, {
                currentStoreLayoutId: action.options,
            });
        case 'ACCESSLIST':
            return Object.assign({}, state, {
                accessList: action.options,
            });
        case 'CUSTOMACCESSLIST':
            { // 自定义的权限列表因为数据源不唯一，所以要保证每次被更新时旧的不会被覆盖，同时要防止同一个权限被添加多次
                // 数据的是一个数组，代表数据整体更新
                if (Array.isArray(action.options)) {
                    return Object.assign({}, state, {
                        customAccessList: [...new Set(action.options)],
                    });
                }
                // 数据的是一个字符串，插入数据
                const tmpList = [...state.customAccessList, action.options];
                return Object.assign({}, state, {
                    customAccessList: [...new Set(tmpList)],
                });
            }
        case 'ROLECODE':
            return Object.assign({}, state, {
                roleCode: action.options,
            });
        case 'CORPINFOS':
            return Object.assign({}, state, {
                corpInfos: {
                    ...state.corpInfos,
                    ...action.options,
                },
            });
        case 'RESOURCEACTIVETAB':
            return Object.assign({}, state, {
                resourceActiveTab: action.options,
            });
        case 'USERUICONFIG':
            return Object.assign({}, state, {
                userUIConfig: action.userUIConfig,
            });
        default:
            return state;
    }
};