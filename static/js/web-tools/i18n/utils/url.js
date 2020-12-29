/**
 * 将当前网址querystring解析为对象
 * @param {string} querystring
 * @return {object} 解析后的对象
 */
function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = (value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], (value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push((value));
        }
    }
    return query_string;
}

export const getQueryObj = function() {
    return parse_query_string(window.location.search.substring(1));
};

// 把 &a=1&b=2 的url中解析成对象
export const parseObjFromUrl = query => {
    let queryParams = {};
    const vars = query.split('&');
    vars.forEach((v, i) => {
        const pair = v.split('=');
        if (pair[0]) {
            if (!queryParams.hasOwnProperty(pair[0])) {
                queryParams[pair[0]] = decodeURIComponent(pair[1]);
            } else if (typeof queryParams[pair[0]] === 'string') {
                const arr = [queryParams[pair[0]], decodeURIComponent(pair[1])];
                queryParams[pair[0]] = arr;
            } else {
                queryParams[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
    });
    return queryParams;
};

// 获取url中的参数，返回obj，brook专用，上面那个空的时候会返回{"":undefined}
export const getQueryParams = () => {
    const query = window.location.search.substr(1);
    return parseObjFromUrl(query);
};