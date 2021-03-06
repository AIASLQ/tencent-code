import React, { Fragment } from "react";
// prettier-ignore
// eslint-disable-next-line
export var zh_cn = {
    locale: 'zh_cn',
    // 操作：确定按钮
    okText: ('确定'),
    // 操作：取消按钮
    cancelText: ('取消'),
    // 文案：数据加载中
    loadingText: ('加载中...'),
    // 文案：数据加载失败
    loadErrorText: ('加载失败'),
    // 操作：重试数据加载
    loadRetryText: ('重试'),
    // 操作：关闭
    closeText: ('关闭'),
    // 文案：帮助
    helpText: ('帮助'),
    // 操作：清空
    cleanText: ('清空'),
    // 操作：搜索
    searchText: ('搜索'),
    // 文案：数据为空
    emptyText: ('暂无数据'),
    // 操作：全选
    selectAllText: ('全选'),
    // 文案：分页组件显示总记录数
    paginationRecordCount: function (count) { return (React.createElement(Fragment, null,
        "\u5171 ",
        React.createElement("strong", null, count),
        " \u6761")); },
    // 操作：跳到上一页
    paginationPrevPage: ('上一页'),
    // 操作：跳到下一页
    paginationNextPage: ('下一页'),
    // 操作：跳到第一页
    paginationToFirstPage: ('第一页'),
    // 操作：跳到最后一页
    paginationToLastPage: ('最后一页'),
    // 文案：提醒用户当前已经在第一页，无法再跳到上一页
    paginationAtFirst: ('当前已在第一页'),
    // 文案：提醒用户当前已经在最后一页，无法再跳到上一页
    paginationAtLast: ('当前已在最后一页'),
    // 文案：表示分页组件每页显示多少行记录，后接行数选项
    paginationRecordPerPage: ('条 / 页'),
    // 文案：表示分页组件总共有多少页，前面是当前的页码
    paginationPageCount: function (count) { return (" / " + count + " \u9875"); },
    // 文案：下拉选择组件默认的提示文案
    pleaseSelect: ('请选择'),
    // 文案：查询到结果
    foundText: ("找到下列结果"),
    // 文案：表格中，用于显示找到多少条结果，后面会拼接「返回原列表」
    foundManyText: function (count) { return ("\u627E\u5230 " + count + " \u6761\u7ED3\u679C"); },
    // 文案：同 resultText，不过是在有关键字的情况下显示
    foundManyTextWithKeyword: function (keyword, count) { return ("\u641C\u7D22 \u201C" + keyword + "\u201D\uFF0C\u627E\u5230 " + count + " \u6761\u7ED3\u679C"); },
    // 文案：搜索某个关键字的情况下，没有找到结果
    foundNothingWithKeyword: function (keyword) { return ("\u641C\u7D22 \u201C" + keyword + "\u201D \u65E0\u7ED3\u679C"); },
    // 操作：表格中清空当前筛选结果，返回源列表
    clearResultText: ('返回原列表'),
    // 文案：tagSearchBox 使用提示
    tagSearchBoxTips: ('多个关键字用竖线 “|” 分隔，多个过滤标签用回车键分隔'),
    // 文案：tagSearchBox 使用提示
    tagSearchBoxEditingTips: ('点击进行修改，按回车键完成修改'),
    // 文案：tagSearchBox 选择框标题
    tagSearchBoxSelectTitle: ('选择资源属性进行过滤'),
    // 文案：tagSearchBox 帮助图片地址
    tagSearchBoxHelpImgUrl: ('//imgcache.qq.com/open_proj/proj_qcloud_v2/bee/css/img/search-dialog.png'),
    // 文案：今天
    today: ('今天'),
    // 文案：本月
    curMonth: ('本月'),
    // 文案：下个月
    prevMonth: ('上个月'),
    // 文案：下个月
    nextMonth: ('下个月'),
    // 文案：今年
    curYear: ('今年'),
    // 文案：下一年
    prevYear: ('上一年'),
    // 文案：下一年
    nextYear: ('下一年'),
    // 文案：当前二十年
    curTwentyYears: ('当前二十年'),
    // 文案：上二十年
    prevTwentyYears: ('上二十年'),
    // 文案：下二十年
    nextTwentyYears: ('下二十年'),
    // 变量：该语言日期表达中 [月] 是否在 [年] 之前，是的话为 - true，否则 - false
    monthBeforeYear: (false),
    // 变量：该语言日期表达中 [年] 的表达方式，其中 YYYY 为年份数字
    yearFormat: ('YYYY年 '),
    // 文案：选择时间
    selectTime: ('选择时间'),
    // 文案：开始时间
    startTime: ('开始时间'),
    // 文案：结束时间
    endTime: ('结束时间'),
    // 文案：选择日期
    selectDate: ('选择日期'),
    // 文案：跳过
    guideCancel: ("跳过"),
    // 文案：上一步
    guideBack: ("上一步"),
    // 文案：下一步
    guideNext: ("下一步"),
    // 文案：完成
    guideFinish: ("完成"),
    // 文案：复制
    copy: ("复制"),
    // 文案：复制成功
    copied: ("复制成功"),
    // 文案：点击查看大图
    clickToEnlarge: ('点击查看大图'),
};
//# sourceMappingURL=zh_cn.js.map