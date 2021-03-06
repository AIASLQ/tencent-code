import React, { Fragment } from "react";
// prettier-ignore
// eslint-disable-next-line
export var ko = {
    locale: 'ko',
    // 操作：确定按钮
    okText: ('확인'),
    // 操作：取消按钮
    cancelText: ('취소'),
    // 文案：数据加载中
    loadingText: ('로딩 중...'),
    // 文案：数据加载失败
    loadErrorText: ('로딩 실패'),
    // 操作：重试数据加载
    loadRetryText: ('다시 시도'),
    // 操作：关闭
    closeText: ('종료'),
    // 文案：帮助
    helpText: ('도움말'),
    // 操作：清空
    cleanText: ('비우기'),
    // 操作：搜索
    searchText: ('검색'),
    // 文案：数据为空
    emptyText: ('데이터가 없습니다.'),
    // 操作：全选
    selectAllText: ('전체 선택'),
    // 文案：分页组件显示总记录数
    paginationRecordCount: function (count) { return (React.createElement(Fragment, null,
        "\uCD1D ",
        React.createElement("strong", null, count),
        "\uAC1C")); },
    // 操作：跳到上一页
    paginationPrevPage: ('이전 페이지'),
    // 操作：跳到下一页
    paginationNextPage: ('다음 페이지'),
    // 操作：跳到第一页
    paginationToFirstPage: ('첫 페이지'),
    // 操作：跳到最后一页
    paginationToLastPage: ('마지막 페이지'),
    // 文案：提醒用户当前已经在第一页，无法再跳到上一页
    paginationAtFirst: ('첫 페이지입니다'),
    // 文案：提醒用户当前已经在最后一页，无法再跳到上一页
    paginationAtLast: ('마지막 페이지입니다'),
    // 文案：表示分页组件每页显示多少行记录，后接行数选项
    paginationRecordPerPage: ('/ 쪽'),
    // 文案：表示分页组件总共有多少页，前面是当前的页码
    paginationPageCount: function (count) { return (" / " + count + " \uD398\uC774\uC9C0"); },
    // 文案：下拉选择组件默认的提示文案
    pleaseSelect: ('선택하십시오'),
    // 文案：查询到结果
    foundText: ("다음 결과를 찾았습니다"),
    // 文案：表格中，用于显示找到多少条结果，后面会拼接「返回原列表」
    foundManyText: function (count) { return (count + "\uAC1C \uACB0\uACFC\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4"); },
    // 文案：同 resultText，不过是在有关键字的情况下显示
    foundManyTextWithKeyword: function (keyword, count) { return ("\"" + keyword + "\"\uC744(\uB97C) \uAC80\uC0C9\uD558\uC5EC " + count + "\uAC1C \uACB0\uACFC\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4"); },
    // 文案：搜索某个关键字的情况下，没有找到结果
    foundNothingWithKeyword: function (keyword) { return ("\"" + keyword + "\"\uC744(\uB97C) \uAC80\uC0C9\uD558\uC5EC \uCC3E\uC740 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"); },
    // 操作：表格中清空当前筛选结果，返回源列表
    clearResultText: ('기존 리스트로 돌아가기'),
    // 文案：tagSearchBox 使用提示
    tagSearchBoxTips: ('여러 개의 키워드는 "|"으로 구분되며 여러 개의 필터 태그는 Enter 키로 구분됩니다.'),
    // 文案：tagSearchBox 使用提示
    tagSearchBoxEditingTips: ('클릭하여 수정합니다. Enter 키를 눌러 수정을 완료합니다.'),
    // 文案：tagSearchBox 选择框标题
    tagSearchBoxSelectTitle: ('리소스 속성을 선택하여 필터링합니다.'),
    // 文案：tagSearchBox 帮助图片地址
    tagSearchBoxHelpImgUrl: ('//imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/server/css/img/search-dialog-en.png'),
    // 文案：今天
    today: ('오늘'),
    // 文案：本月
    curMonth: ('이번 달'),
    // 文案：下个月
    prevMonth: ('지난 달'),
    // 文案：下个月
    nextMonth: ('다음 달'),
    // 文案：今年
    curYear: ('금해'),
    // 文案：下一年
    prevYear: ('지난 해'),
    // 文案：下一年
    nextYear: ('다음 해'),
    // 文案：当前二十年
    curTwentyYears: ('현재 20년'),
    // 文案：上二十年
    prevTwentyYears: ('지난 20년'),
    // 文案：下二十年
    nextTwentyYears: ('다음 20년'),
    // 变量：该语言日期表达中 [月] 是否在 [年] 之前，是的话为 - true，否则 - false
    monthBeforeYear: (false),
    // 变量：该语言日期表达中 [年] 的表达方式，其中 YYYY 为年份数字
    yearFormat: ('YYYY년 '),
    // 文案：选择时间
    selectTime: ('시간 선택'),
    // 文案：开始时间
    startTime: ('Start time'),
    // 文案：结束时间
    endTime: ('End time'),
    // 文案：选择日期
    selectDate: ('날짜 선택'),
    // 文案：跳过
    guideCancel: ("Skip"),
    // 文案：上一步
    guideBack: ("Back"),
    // 文案：下一步
    guideNext: ("Next"),
    // 文案：完成
    guideFinish: ("Done"),
    // 文案：复制
    copy: ("복사"),
    // 文案：复制成功
    copied: ("복사 성공"),
    // 文案：点击查看大图
    clickToEnlarge: ('Click to enlarge'),
};
//# sourceMappingURL=ko.js.map