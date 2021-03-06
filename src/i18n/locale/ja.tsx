import React, { Fragment } from "react";
// prettier-ignore
// eslint-disable-next-line
export var ja = {
    locale: 'ja',
    // 操作：确定按钮
    okText: ('OK'),
    // 操作：取消按钮
    cancelText: ('キャンセル'),
    // 文案：数据加载中
    loadingText: ('読み込み中...'),
    // 文案：数据加载失败
    loadErrorText: ('読み込み失敗'),
    // 操作：重试数据加载
    loadRetryText: ('再試行'),
    // 操作：关闭
    closeText: ('無効化'),
    // 文案：帮助
    helpText: ('ヘルプ'),
    // 操作：清空
    cleanText: ('クリア'),
    // 操作：搜索
    searchText: ('検索'),
    // 文案：数据为空
    emptyText: ('データなし'),
    // 操作：全选
    selectAllText: ('すべて選択'),
    // 文案：分页组件显示总记录数
    paginationRecordCount: function (count) { return (React.createElement(Fragment, null,
        "\u5408\u8A08 ",
        React.createElement("strong", null, count),
        " \u9805\u76EE")); },
    // 操作：跳到上一页
    paginationPrevPage: ('前のページ'),
    // 操作：跳到下一页
    paginationNextPage: ('次のページ'),
    // 操作：跳到第一页
    paginationToFirstPage: ('最初ページ'),
    // 操作：跳到最后一页
    paginationToLastPage: ('最終ページ'),
    // 文案：提醒用户当前已经在第一页，无法再跳到上一页
    paginationAtFirst: ('既に最初ページです'),
    // 文案：提醒用户当前已经在最后一页，无法再跳到上一页
    paginationAtLast: ('既に最終ページです'),
    // 文案：表示分页组件每页显示多少行记录，后接行数选项
    paginationRecordPerPage: ('/ ページ'),
    // 文案：表示分页组件总共有多少页，前面是当前的页码
    paginationPageCount: function (count) { return (" / " + count + " \u30DA\u30FC\u30B8"); },
    // 文案：下拉选择组件默认的提示文案
    pleaseSelect: ('選択してください'),
    // 文案：查询到结果
    foundText: ("下記の結果が見つかりました"),
    // 文案：表格中，用于显示找到多少条结果，后面会拼接「返回原列表」
    foundManyText: function (count) { return (count + " \u4EF6\u306E\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F"); },
    // 文案：同 resultText，不过是在有关键字的情况下显示
    foundManyTextWithKeyword: function (keyword, count) { return ("\"" + keyword + "\"\u3092\u691C\u7D22\u3057\u307E\u3059\u3002" + count + " \u4EF6\u306E\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F"); },
    // 文案：搜索某个关键字的情况下，没有找到结果
    foundNothingWithKeyword: function (keyword) { return ("\"" + keyword + "\"\u3092\u691C\u7D22\u3057\u307E\u3059\u3002\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"); },
    // 操作：表格中清空当前筛选结果，返回源列表
    clearResultText: ('元のリストに戻る'),
    // 文案：tagSearchBox 使用提示
    tagSearchBoxTips: ('複数のキーワードは縦棒"|"で区切られ、複数のフィルタタグはEnterキーで区切られます'),
    // 文案：tagSearchBox 使用提示
    tagSearchBoxEditingTips: ('クリックで変更し、Enterキーで変更を完了します'),
    // 文案：tagSearchBox 选择框标题
    tagSearchBoxSelectTitle: ('フィルタするリソースプロパティを選択'),
    // 文案：tagSearchBox 帮助图片地址
    tagSearchBoxHelpImgUrl: ('//imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/server/css/img/search-dialog-en.png'),
    // 文案：今天
    today: ('本日'),
    // 文案：本月
    curMonth: ('今月'),
    // 文案：下个月
    prevMonth: ('先月'),
    // 文案：下个月
    nextMonth: ('来月'),
    // 文案：今年
    curYear: ('今年'),
    // 文案：下一年
    prevYear: ('前年'),
    // 文案：下一年
    nextYear: ('来年'),
    // 文案：当前二十年
    curTwentyYears: ('現在の20年'),
    // 文案：上二十年
    prevTwentyYears: ('この前の20年'),
    // 文案：下二十年
    nextTwentyYears: ('この後の20年'),
    // 变量：该语言日期表达中 [月] 是否在 [年] 之前，是的话为 - true，否则 - false
    monthBeforeYear: (false),
    // 变量：该语言日期表达中 [年] 的表达方式，其中 YYYY 为年份数字
    yearFormat: ('YYYY年 '),
    // 文案：选择时间
    selectTime: ('時間の選択'),
    // 文案：开始时间
    startTime: ('Start time'),
    // 文案：结束时间
    endTime: ('End time'),
    // 文案：选择日期
    selectDate: ('日付の選択'),
    // 文案：跳过
    guideCancel: ("Skip"),
    // 文案：上一步
    guideBack: ("Back"),
    // 文案：下一步
    guideNext: ("Next"),
    // 文案：完成
    guideFinish: ("Done"),
    // 文案：复制
    copy: ("コピー"),
    // 文案：复制成功
    copied: ("コピーに成功"),
    // 文案：点击查看大图
    clickToEnlarge: ('Click to enlarge'),
};
//# sourceMappingURL=ja.js.map