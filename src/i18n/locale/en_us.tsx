import React, { Fragment } from "react";
// prettier-ignore
// eslint-disable-next-line
export var en_us = {
    locale: 'en_us',
    // 操作：确定按钮
    okText: ('OK'),
    // 操作：取消按钮
    cancelText: ('Cancel'),
    // 文案：数据加载中
    loadingText: ('Loading…'),
    // 文案：数据加载失败
    loadErrorText: ('Loading failed'),
    // 操作：重试数据加载
    loadRetryText: ('Retry'),
    // 操作：关闭
    closeText: ('Close'),
    // 文案：帮助
    helpText: ('Help'),
    // 操作：清空
    cleanText: ('Clear'),
    // 操作：搜索
    searchText: ('Search'),
    // 文案：数据为空
    emptyText: ('No data yet'),
    // 操作：全选
    selectAllText: ('Select all'),
    // 文案：分页组件显示总记录数
    paginationRecordCount: function (count) { return (React.createElement(Fragment, null,
        "Total items: ",
        React.createElement("strong", null, count),
        " ")); },
    // 操作：跳到上一页
    paginationPrevPage: ('Previous'),
    // 操作：跳到下一页
    paginationNextPage: ('Next'),
    // 操作：跳到第一页
    paginationToFirstPage: ('First page'),
    // 操作：跳到最后一页
    paginationToLastPage: ('Last page'),
    // 文案：提醒用户当前已经在第一页，无法再跳到上一页
    paginationAtFirst: ('This is the first page'),
    // 文案：提醒用户当前已经在最后一页，无法再跳到上一页
    paginationAtLast: ('This is the last page'),
    // 文案：表示分页组件每页显示多少行记录，后接行数选项
    paginationRecordPerPage: ('/ page'),
    // 文案：表示分页组件总共有多少页，前面是当前的页码
    paginationPageCount: function (count) { return (count > 1 ? " / " + count + " pages" : " / " + count + " page"); },
    // 文案：下拉选择组件默认的提示文案
    pleaseSelect: ('Please select'),
    // 文案：查询到结果
    foundText: ('Found the following results'),
    // 文案：表格中，用于显示找到多少条结果，后面会拼接「返回原列表」
    foundManyText: function (count) { return (count > 1 ? count + " results found" : count + " result found"); },
    // 文案：同 resultText，不过是在有关键字的情况下显示
    foundManyTextWithKeyword: function (keyword, count) { return (count > 1 ? count + " results found for \"" + keyword + "\"" : count + " result found for \"" + keyword + "\""); },
    // 文案：搜索某个关键字的情况下，没有找到结果
    foundNothingWithKeyword: function (keyword) { return ("No results found for \"" + keyword + "\""); },
    // 操作：表格中清空当前筛选结果，返回源列表
    clearResultText: ('Back to list'),
    // 文案：tagSearchBox 使用提示
    tagSearchBoxTips: ('Separate keywords with "|"; press Enter to separate filter tags'),
    // 文案：tagSearchBox 使用提示
    tagSearchBoxEditingTips: ('Click to modify. Press Enter to finish.'),
    // 文案：tagSearchBox 选择框标题
    tagSearchBoxSelectTitle: ('Select a filter'),
    // 文案：tagSearchBox 帮助图片地址
    tagSearchBoxHelpImgUrl: ('//imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/server/css/img/search-dialog-en.png'),
    // 文案：今天
    today: ('Today'),
    // 文案：本月
    curMonth: ('This month'),
    // 文案：下个月
    prevMonth: ('Previous month'),
    // 文案：下个月
    nextMonth: ('Next month'),
    // 文案：今年
    curYear: ('This year'),
    // 文案：下一年
    prevYear: ('Previous year'),
    // 文案：下一年
    nextYear: ('Next year'),
    // 文案：当前二十年
    curTwentyYears: ('Latest 20 years'),
    // 文案：上二十年
    prevTwentyYears: ('Previous 20 years'),
    // 文案：下二十年
    nextTwentyYears: ('Next 20 years'),
    // 变量：该语言日期表达中 [月] 是否在 [年] 之前，是的话为 - true，否则 - false
    monthBeforeYear: (true),
    // 变量：该语言日期表达中 [年] 的表达方式，其中 YYYY 为年份数字
    yearFormat: (' YYYY'),
    // 文案：选择时间
    selectTime: ('Select time'),
    // 文案：开始时间
    startTime: ('Start time'),
    // 文案：结束时间
    endTime: ('End time'),
    // 文案：选择日期
    selectDate: ('Select date'),
    // 文案：跳过
    guideCancel: ("Skip"),
    // 文案：上一步
    guideBack: ("Back"),
    // 文案：下一步
    guideNext: ("Next"),
    // 文案：完成
    guideFinish: ("Done"),
    // 文案：复制
    copy: ("Copy"),
    // 文案：复制成功
    copied: ("Copied"),
    // 文案：点击查看大图
    clickToEnlarge: ('Click to enlarge'),
};
//# sourceMappingURL=en_us.js.map