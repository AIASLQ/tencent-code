// 语言相关配置，for web环境
import { isMobileProject, isUserCenterProject } from './utils/is';
import configBase from './config.base.json';

const {
    pcLangs,
    mobileLangs,
    userCenterLangs,
    eea: _eea,
    regionsMap: _regionsMap,
} = configBase;

export const languages = isMobileProject() ?
    mobileLangs :
    isUserCenterProject() ?
    userCenterLangs :
    pcLangs;

export const eea = _eea;

export const regionsMap = {
    ..._regionsMap,
    df: languages.join(','),
};

export const regionList = Object.keys(regionsMap);