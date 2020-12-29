export const updateDocIframe = options => ({
    type: 'DOCIFRAME',
    options,
});

export const updateUserInfos = options => ({
    type: 'USERINFOS',
    options,
});

export const updateDocAuth = options => ({
    type: 'DOCAUTH',
    options,
});

export const updateUserInfosChineseName = (chineseName) => ({
    type: 'USERINFOS_CHINESENAME',
    chineseName
})

export const updateUserInfosPhone = (phone) => ({
    type: 'USERINFOS_PHONE',
    phone
})

export const updateUserInfosAvatar = (avatar) => ({
    type: 'USERINFOS_AVATAR',
    avatar
})

export const updateUserInfosNickName = (nickName) => ({
    type: 'USERINFOS_NICKNAME',
    nickName
})

export const updateMeetingItemInfo = options => ({
    type: 'MEETINGITEMINFO',
    options,
});

export const updateCustomSiderId = (customSiderId) => ({
    type: 'CUSTOMSIDERID',
    customSiderId
})

// export const updateExpandSubMenu = (expandSubMenu) => ({
//   type: 'EXPAND_SUB_MENU',
//   expandSubMenu
// })

export const updateWeChatRedirectUrl = (weChatRedirectUrl) => ({
    type: 'WECHAT_REDIRECT_URL',
    weChatRedirectUrl
})

export const updateJumpInfo = (jumpInfo) => ({
    type: 'JUMPINFO',
    jumpInfo
})

export const updateToken = (token) => ({
    type: 'TOKEN',
    token
})

export const payType = (payType) => ({
    type: 'PAY_TYPE',
    payType
})

export const reset = () => ({
    type: 'RESET'
})

export const updateLiveItemInfo = options => ({
    type: 'LIVEITEMINFO',
    options,
});


export const updateLayoutList = options => ({
    type: 'LAYOUTLIST',
    options,
});

export const updateLayoutOriginList = options => ({
    type: 'LAYOUTORIGINLIST',
    options,
});

export const updateLayoutInfoList = options => ({
    type: 'LAYOUTINFOLIST',
    options,
});

export const updateLayoutInfoOriginList = options => ({
    type: 'LAYOUTINFOORIGINLIST',
    options,
});


export const updateCurrentStoreLayoutId = options => ({
    type: 'CURRENTSTORELAYOUTID',
    options,
});
export const updateAccessList = options => ({
    type: 'ACCESSLIST',
    options,
});

export const updateCustomAccessList = options => ({
    type: 'CUSTOMACCESSLIST',
    options,
});

export const updateCorpInfos = options => ({
    type: 'CORPINFOS',
    options,
});

export const updateRoleCode = options => ({
    type: 'ROLECODE',
    options,
});

export const updateResourceTab = options => ({
    type: 'RESOURCEACTIVETAB',
    options,
});

export const updateUserUIConfig = (userUIConfig) => ({
    type: 'USERUICONFIG',
    userUIConfig,
})