export const localPayType = (payType) => ({
    type: 'PAY_TYPE',
    payType
})

export const localUserInfos = (options) => ({
    type: 'USERINFOS',
    options
})

export const localSsoInfos = (options) => ({
    type: 'SSOINFOS',
    options
})

export const localReset = () => ({
    type: 'RESET'
})

export const localScheduleHideTips = (hideTips) => ({
    type: 'SCHEDULE_HIDETIPS',
    hideTips
})

export const localScheduleHideInviteHostNew = (hideInviteHostNew) => ({
    type: 'SCHEDULE_HIDEINVITEHOSTNEW',
    hideInviteHostNew
})

export const localCollectMeetingHideGuide = (hideGuide) => ({
    type: 'COLLECT_MEETING_HIDE_GUIDE',
    hideGuide
})