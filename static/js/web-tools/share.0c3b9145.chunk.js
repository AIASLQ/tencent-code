(this["webpackJsonpshared-detail-page"] = this["webpackJsonpshared-detail-page"] || []).push([
    [8], { 0: function(e, t, n) { "use strict";
            n.d(t, "e", (function() { return f })), n.d(t, "S", (function() { return p })), n.d(t, "p", (function() { return w })), n.d(t, "U", (function() { return g })), n.d(t, "m", (function() { return h })), n.d(t, "n", (function() { return m })), n.d(t, "O", (function() { return b })), n.d(t, "a", (function() { return v })), n.d(t, "T", (function() { return _ })), n.d(t, "o", (function() { return O })), n.d(t, "h", (function() { return j })), n.d(t, "w", (function() { return E })), n.d(t, "G", (function() { return y })), n.d(t, "t", (function() { return I })), n.d(t, "y", (function() { return x })), n.d(t, "K", (function() { return R })), n.d(t, "E", (function() { return N })), n.d(t, "B", (function() { return A })), n.d(t, "J", (function() { return L })), n.d(t, "I", (function() { return P })), n.d(t, "r", (function() { return U })), n.d(t, "u", (function() { return D })), n.d(t, "V", (function() { return M })), n.d(t, "c", (function() { return W })), n.d(t, "k", (function() { return B })), n.d(t, "f", (function() { return H })), n.d(t, "b", (function() { return F })), n.d(t, "j", (function() { return $ })), n.d(t, "F", (function() { return J })), n.d(t, "H", (function() { return G })), n.d(t, "L", (function() { return K })), n.d(t, "v", (function() { return X })), n.d(t, "M", (function() { return Q })), n.d(t, "g", (function() { return Z })), n.d(t, "D", (function() { return ee })), n.d(t, "x", (function() { return te })), n.d(t, "A", (function() { return ne })), n.d(t, "z", (function() { return oe })), n.d(t, "s", (function() { return ie })), n.d(t, "R", (function() { return ce })), n.d(t, "i", (function() { return ae })), n.d(t, "P", (function() { return se })), n.d(t, "N", (function() { return ue })), n.d(t, "Q", (function() { return de })), n.d(t, "d", (function() { return le })), n.d(t, "C", (function() { return fe })), n.d(t, "q", (function() { return pe })), n.d(t, "l", (function() { return we })); var o = n(8),
                i = n.n(o),
                r = n(13),
                c = n(11),
                a = (n(6), n(1)),
                s = n.n(a),
                u = n(19),
                d = n.n(u);
            n(126);

            function l(e) { var t = e.tips,
                    n = void 0 === t ? "" : t,
                    o = e.dialogWrapClassName,
                    i = void 0 === o ? "" : o; return s.a.createElement("div", { className: "masking-layer ".concat(i), style: { display: e.show ? "flex" : "none" }, onClick: function() { l.close() } }, s.a.createElement("div", { className: "msg" }, s.a.createElement("span", { className: "txt" }, n ? "".concat(n) : L() && !x() ? "\u8bf7\u9009\u62e9\u201c\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u201d" : "\u70b9\u51fb \xb7\xb7\xb7 \u5e76\u9009\u62e9\u201c\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u201d"), s.a.createElement("img", { className: "logo-img", src: "https://meeting.tencent.com/static/imgs/launch-app/arrow.png", alt: "logo" }))) }
            l.show = function(e) { var t = Object.assign({}, { id: "masking-layer-root", dialogWrapClassName: "", show: !0 }, e),
                    n = document.getElementById(t.id);
                n || ((n = document.createElement("div")).id = t.id, document.body.appendChild(n)), d.a.render(s.a.createElement(l, t), n) }, l.close = function(e) { var t = Object.assign({}, { show: !1 }, e);
                l.show(t) };

            function f(e) { if (e instanceof Array) { for (var t = [], n = 0; n < e.length; ++n) t[n] = f(e[n]); return t } if (e instanceof Object) { var o = {}; for (var i in e) o[i] = f(e[i]); return o } return e } var p = function() { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 9, t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = "", o = 0; o < e; o++) n += t[Math.floor(Math.random() * t.length)]; return n },
                w = function(e, t) { t ? t.split("?")[1] && (t = t.split("?")[1]) : t = window.location.href.split("?")[1], t && (t = String(t).split("#")[0]); var n = new RegExp("(^|&)".concat(e, "=([^&]*)")).exec(t); return !!n && n[2] },
                g = function(e, t, n) { var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        i = new Date;
                    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3); var r = "expires=".concat(i.toGMTString()),
                        c = "";
                    o && (c = "; path=".concat(o)), document.cookie = "".concat(e, "=").concat(t, "; ").concat(r).concat(c) },
                h = function(e) { var t, n = new RegExp("(^| )".concat(e, "=([^;]*)(;|$)")); return (t = document.cookie.match(n)) ? unescape(t[2]) : null },
                m = function() { return { log: function(e) { var t = e.level,
                                n = void 0 === t ? 0 : t,
                                o = e.log,
                                i = void 0 === o ? {} : o; if (!Object({ NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, IS_I18N: void 0 }).WEMEET_PARAM_PRIVATE)
                                if (window.emonitorIns && "function" === typeof window.emonitorIns.log) { var r = i; if ("object" === Object(c.a)(i)) try { r = JSON.stringify(i) } catch (s) { console.error(s) }
                                    var a = { level: n, log: r };
                                    console.info("emonitorIns.log:\n", a), window.emonitorIns.log(a) } else console.warn("emonitorIns.log: window.emonitorIns is undefined:\n", i) } } },
                b = function(e) { return new Promise((function(t, n) { var o = document.createElement("script");
                        o.src = e, o.onload = function() { t() }, o.onerror = function(e) { n(e) }, document.body.appendChild(o) })) },
                v = function(e, t) { var n = e.className.split(" "); - 1 === n.indexOf(t) && (n.push(t), e.className = n.join(" ")) },
                _ = function(e, t) { var n = e.className.split(" ");
                    n = n.filter((function(e) { return e !== t })), e.className = n.join(" ") },
                O = function() { return navigator.appVersion.includes("Win") ? "windows" : navigator.appVersion.includes("Android") ? "android" : navigator.appVersion.includes("iPhone") || navigator.appVersion.includes("iPad") ? "ios" : navigator.appVersion.includes("Mac") ? "mac" : navigator.userAgent.includes("Linux") ? "linux" : "unknown" },
                j = function() { window.open("https://meeting.tencent.com/download.html") },
                E = function() { return "linux" === O() },
                y = function() { return /windows|win32|win64/i.test(navigator.userAgent) },
                I = function() { return "Microsoft Internet Explorer" === navigator.appName && 9 === parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) },
                T = function() { var e, t = navigator.userAgent.toLowerCase(),
                        n = function(e) { return -1 === t.indexOf(e) },
                        o = (e = "safari/", t.indexOf(e) > -1),
                        i = n("chrome/"),
                        r = n("qq/") && n("mqqbrowser"); return o && i && r },
                S = function() { return /Edge/.test(navigator.userAgent) },
                k = function() { return -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") },
                C = function() { return /Trident/.test(navigator.userAgent) },
                x = function() { return !(!T() || !navigator.maxTouchPoints) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) },
                R = function(e) { return /Android/i.test(e) && /wxwork/i.test(e) },
                N = function() { var e = navigator.userAgent.toLowerCase(),
                        t = /micromessenger/i.test(e) && !/wxwork/i.test(e); return console.log(">>> \u5fae\u4fe1\u6d4f\u89c8\u5668\u73af\u5883:", t), t },
                A = function() { return null !== navigator.userAgent.toLowerCase().match(/\sqq/i) },
                L = function(e) { return -1 !== navigator.userAgent.toLowerCase().indexOf("wxwork") },
                P = function() { return L() && !(-1 !== navigator.userAgent.toLowerCase().indexOf("wxworklocal")) },
                U = function() { return /android|adr/i.test(navigator.userAgent.toLowerCase()) },
                D = function() { return /iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase()) },
                M = function(e) { return window.btoa(unescape(encodeURIComponent(e))) },
                W = function(e) { e = e || ""; try { return decodeURIComponent(escape(window.atob(e))) } catch (t) { return e } },
                B = function() { window.location.origin || (window.location.origin = "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ":".concat(window.location.port) : "")), String.prototype.trim || (String.prototype.trim = function() { return this.replace(/\s+/g, "") }), window.$util || (window.$util = {}), Date.prototype.Format = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "yyyy-MM-dd hh:mm:ss",
                            t = { "M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "q+": Math.floor((this.getMonth() + 3) / 3), S: this.getMilliseconds() }; for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, "".concat(this.getFullYear()).substr(4 - RegExp.$1.length))), t) new RegExp("(".concat(n, ")")).test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? t[n] : "00".concat(t[n]).substr("".concat(t[n]).length))); return e } }; var q = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        o = "",
                        i = Object.assign({}, e, t),
                        r = 0; for (var c in i) o += "".concat((0 !== r ? "&" : "") + c, "=").concat(i[c]), r++; return n && (o += "#".concat(n)), 0 !== r && (o = "?".concat(o)), o },
                H = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = e.split("?"),
                        o = ""; if (n[1]) { var i = n[1].split("#"),
                            r = i[0].split("&"),
                            c = {}; for (var a in r) { var s = r[a].split("=");
                            s[0] !== t && (c[s[0]] = s[1] || "") }
                        o = q(c, {}, i[1]) } else o = q({}, {}, n[0].split("#")[1]); return n[0] + o },
                F = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.split("?"),
                        o = ""; if (n[1]) { var i = n[1].split("#"),
                            r = i[0].split("&"),
                            c = {}; for (var a in r) { var s = r[a].split("=");
                            c[s[0]] = s[1] || "" }
                        o = q(c, t, i[1]) } else o = q({}, t, n[0].split("#")[1]); return n[0] + o },
                $ = function(e) { if ("function" !== typeof document.execCommand) return !1; var t = document.createElement("textarea");
                    t.setAttribute("readonly", "readonly"), t.value = e, document.body.appendChild(t), t.select(); var n = document.execCommand("copy"); return console.log(">>> execCommand copy:", n), document.body.removeChild(t), n },
                V = function(e, t) { if ("string" !== typeof e) throw new Error("version1 should be type of string: ".concat(e)); if ("string" !== typeof t) throw new Error("version2 should be type of string: ".concat(t)); for (var n = e.split("."), o = t.split("."), i = n.length, r = o.length, c = 0; c < i && c < r; c++) { var a = parseInt(n[c], 10); if (isNaN(a) || a < 0) throw new Error("invalid version1: ".concat(n)); var s = parseInt(o[c], 10); if (isNaN(s) || s < 0) throw new Error("invalid version2: ".concat(o)); if (a < s) return -1; if (a > s) return 1 } if (i === r) return 0; if (i > r) { for (var u = r; u < i; u++)
                            if ("0" !== n[u]) return 1;
                        return 0 } for (var d = i; d < r; d++)
                        if ("0" !== o[d]) return -1;
                    return 0 },
                z = function(e) { var t = window.navigator.userAgent,
                        n = t.match(/QBCore\/([\d.]+)/i); return /MicroMessenger/i.test(t) && !t.includes("wxwork") && n && n.length >= 2 && V(n[1], e) < 0 },
                J = function() { var e = window.navigator.userAgent,
                        t = e.match(/MicroMessenger\/([\d.]+)/i); return !e.includes("wxwork") && t && t.length >= 2 && V(t[1], "6.5.6") >= 0 },
                G = function() { return /WindowsWechat/.test(navigator.userAgent) },
                Y = function() { var e = Object(r.a)(i.a.mark((function e(t) { var n, o, r = arguments; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = r.length > 1 && void 0 !== r[1] && r[1], (o = r.length > 2 && void 0 !== r[2] ? r[2] : null) && o("web_do_wx_launch"), m().log({ level: 1, log: { title: "doWeiXinLaunch 1", schemeUrl: t, WeixinJSBridge: "undefined" !== typeof window.WeixinJSBridge } }), window.WeixinJSBridge ? (console.log("invoking WeixinJSBridge launchApplication..."), n && alert("invoking!!"), o && o("web_wx_invoke_launch"), window.WeixinJSBridge.invoke("launchApplication", { schemeUrl: t }, (function(e) { if (n && alert("invoke res:".concat(JSON.stringify(e))), console.log("WeixinJSBridge invoke result:", e), m().log({ level: 1, log: { title: "doWeiXinLaunch 2", api: "launchApplication", schemeUrl: t, result: e } }), o) { e && e.err_msg && e.err_msg } }))) : (o && o("web_no_wxjsbridge_at_last"), n && alert("no WeixinJSBridge in doWeiXinLaunch"), "object" === ("undefined" === typeof window ? "undefined" : Object(c.a)(window)) && "object" === Object(c.a)(window.$util) && "function" === typeof window.$util.Raven && window.$util.Raven("tm-Fatal: WeixinJSBridge does not exist", {}));
                                case 5:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                K = function() { return !!/iPad/i.test(navigator.userAgent) || !(!T() || x() || !navigator.maxTouchPoints) },
                X = function(e) { return K() },
                Q = function() { var e = Object(r.a)(i.a.mark((function e(t) { var n, o, c, a, s, u, d, l = arguments; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = l.length > 1 && void 0 !== l[1] && l[1], (o = l.length > 2 && void 0 !== l[2] ? l[2] : null) && o("web_jump_scheme"), c = z("4.0.1194.400"), m().log({ level: 1, log: { title: "jumpScheme 1", schemeUrl: t, isWeiXinQBCoreLt: c } }), !c) { e.next = 7; break } return e.abrupt("return", { msg: { title: "\u63d0\u793a", content: "\u5f53\u524d\u5fae\u4fe1\u7248\u672c\u8f83\u4f4e\uff0c\u60a8\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u5de5\u5177\u680f\u4e0a\u9009\u62e9\u201c\u590d\u5236\u94fe\u63a5\u201d\u6216\u201c\u6d4f\u89c8\u5668\u6253\u5f00\u201d" } });
                                case 7:
                                    if (a = J() && !G(), m().log({ level: 1, log: { title: "jumpScheme 2", schemeUrl: t, useWeixinJSBridge: a } }), !a) { e.next = 21; break } if (console.log(">>> window.WeixinJSBridge:", window.WeixinJSBridge), !window.WeixinJSBridge) { e.next = 16; break } return e.next = 14, Y(t, n, o);
                                case 14:
                                    e.next = 19; break;
                                case 16:
                                    console.log("WeixinJSBridge not ready yet."), o && o("web_wxjsbridge_not_ready_yet"), document.addEventListener("WeixinJSBridgeReady", Object(r.a)(i.a.mark((function e() { return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, Y(t, n, o);
                                                case 2:
                                                case "end":
                                                    return e.stop() } }), e) }))));
                                case 19:
                                    e.next = 25; break;
                                case 21:
                                    s = T() && !x(), u = s || S() || C() || k(), m().log({ level: 1, log: { title: "jumpScheme 3", schemeUrl: t, useIframe: u } }), u ? ((d = document.createElement("iframe")).style.display = "none", d.src = t, document.body.appendChild(d), setTimeout((function() { document.body.removeChild(d) }), 3e3), s && navigator && navigator.maxTouchPoints && (window.location.href = t)) : window.location.href = t;
                                case 25:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                Z = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : " ";
                    void 0 !== e && null !== e || (e = ""); for (var i = String(e), r = "", c = i.length, a = !(i.length % n) && c > 9 ? n : t; i.length > a;) r = r + i.slice(0, a) + o, a = !((i = i.slice(a)).length % n) && c > 9 ? n : t; return i && (r += i), r },
                ee = function() { return /\.com\/test\//.test(document.location.href) || /:8081\/test\//.test(document.location.href) || /^https?:\/\/test(-\d+)?\.txmeeting\.tencent\.com/.test(document.location.href) || /^https?:\/\/test(-\d+)?\.cicd\.tencentmeeting\.com/.test(window.location.href) || /^(http|https):\/\/9\.221\.7\.217/i.test(window.location.href) || /^https?:\/\/testweb\.wemeet\.tencent\.com/i.test(window.location.href) || /^https?:\/\/test\.web\.voovmeeting\.com/i.test(window.location.href) },
                te = function() { return /:\/\/localhost/.test(document.location.href) || /:\/\/wemeet-dev/.test(document.location.href) },
                ne = function() { return /\.com\/pre-release\//.test(document.location.href) || /:8081\/pre-release\//.test(document.location.href) || /https:\/\/pre(-\d+)?\.txmeeting\.tencent\.com/.test(document.location.href) || /^https?:\/\/pre(-\d+)?\.cicd\.tencentmeeting\.com/.test(window.location.href) },
                oe = function() { return !(!/^(http|https):\/\/(cloud|meeting|wemeet)\.(qq|tencent)\.com/.test(document.location.href) && !/^(http|https):\/\/voovmeeting\.com/.test(document.location.href)) },
                ie = function() { return oe() },
                re = function(e, t, n) { var o = "",
                        i = ",",
                        r = ",,,,",
                        a = e[t]; return "object" !== Object(c.a)(a) ? (console.log("ERROR: makePhoneLink dialInfo not object!"), !1) : ("string" === typeof e.switchboard_extension_interval && (i = e.switchboard_extension_interval), "string" === typeof a.completed ? o = "".concat(a.completed).concat(i).concat(n) : ("string" === typeof e.phone_language_interval && (r = e.phone_language_interval), o = "".concat(a.switchboard), "string" === typeof a.extension && a.extension.length && (o += i + a.extension), o += r + a.language, o += i + n), o) },
                ce = function(e, t, n, o) { var i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                        a = e[t]; if ("object" !== Object(c.a)(a)) return console.log("ERROR: makePhoneLink dialInfo not object!"), !1; var s = re(e, t, n),
                        u = ",",
                        d = "#",
                        l = "#"; return "string" === typeof e.password_interval && (u = e.password_interval), "string" === typeof e.terminator && (d = e.terminator), s += i ? encodeURIComponent(d) : d, o.length && (s += u + o + (i ? encodeURIComponent(d) : d)), r || (s += u + (i ? encodeURIComponent(l) : l)), s },
                ae = function(e, t) { if (window.navigator.msSaveBlob) { var n = new Blob(["\ufeff".concat(t)], { type: "text/plain" });
                        window.navigator.msSaveBlob(n, e) } else { var o = document.createElement("a");
                        o.setAttribute("href", "data:text/plain;charset=utf-8,".concat(encodeURIComponent(t))), o.setAttribute("download", e), o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o) } },
                se = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "https://pingjs.qq.com/tcss.ping.https.js"; return new Promise((function(t, n) { b(e).then((function(e) { "function" === typeof window.pgvMain && ("meeting.qq.com" !== window.location.host && "meeting.tencent.com" !== window.location.host && "wemeet.qq.com" !== window.location.host || window.pgvMain({ virtualDomain: "meeting.qq.com" }), "voovmeeting.com" === window.location.host && window.pgvMain({ virtualDomain: "voovmeeting.qq.com" })), t(e) })).catch((function(e) { console.error(e), n(e) })) })) },
                ue = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "https://meeting.tencent.com/static/lib/jweixin-1.2.0.js"; return window.$util || (window.$util = { jweixinScriptReady: !1 }), new Promise((function(t, n) { if (window.$util && window.$util.jweixinScriptReady) return t(), !0;
                        b(e).then((function(e) { window.$util.jweixinScriptReady = !0, t(e) })).catch((function(e) { console.error(e), n(e) })) })) },
                de = function() { return new Promise((function(e, t) { window.VConsole ? e(window.VConsole) : b("https://meeting.tencent.com/static/lib/vconsole.min.js").then((function(t) { console.log(">>> loadScript:", t), window.VConsole && new window.VConsole, e(window.VConsole) })).catch((function(e) { console.error(e), t(e) })) })) },
                le = function(e) { return e.then((function(e) { return [e, null] })).catch((function(e) { return [null, e] })) },
                fe = function() { try { return 0 === document.createElement("canvas").toDataURL("image/webp", .5).indexOf("data:image/webp") } catch (e) { return !1 } },
                pe = function() { oe() ? window.location.href = "https://buy.cloud.tencent.com/tm" : window.location.href = "https://buy.cloud.tencent.com/tm?buy-config=access" },
                we = function(e) { return e.replace(/[<>"()]/g, "") } }, 126: function(e, t, n) {}, 127: function(e, t, n) {}, 128: function(e, t, n) {}, 129: function(e, t, n) {}, 130: function(e, t, n) { "use strict";
            n(164), n(181); var o = n(0),
                i = n(17),
                r = n(11),
                c = n(37),
                a = n(56),
                s = Object(c.a)().store,
                u = Object(a.a)(),
                d = u.localStore,
                l = u.localPersistor,
                f = d.getState().userInfos;
            l.subscribe((function() { f = d.getState().userInfos })), window.version = Object({ NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, IS_I18N: void 0 }).WEMEET_PARAM_VERSION, window.$util || (window.$util = {}); var p = Object(o.z)() || Object(o.D)();
            p && !Object({ NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, IS_I18N: void 0 }).WEMEET_PARAM_PRIVATE ? window.Raven && Raven.config("https://16b21993d5174834ba99a6dfddb29bec@report.url.cn/sentry/1915", { release: window.version, sampleRate: .1 }).install() : window.Raven = null, window.$util.Raven = function(e, t, n) { if (p) { if (e || (e = "Raven.captureMessage"), "object" !== Object(r.a)(t));
                    else { t.search = location.search; var o = s.getState().userInfos;
                        t.auth = { phone: o.phone, userid: o.username, userType: o.userType }, t.localUserInfos = f } "undefined" !== typeof n && n || (n = "error"), window.Raven && window.Raven.captureMessage(e, { level: n, extra: t }) } }, window.addEventListener("error", (function(e) { console.warn(">>>> addEventListener error:\n", e), (e.target || e.srcElement) instanceof HTMLElement ? window.$util.Raven("addEventListener error isElementTarget", { message: e.target.tagName + " " + e.type, stack: e.target.outerHTML, filename: e.target.baseURI }) : window.$util.Raven("addEventListener error", { message: e.message + " (" + e.lineno + "," + e.colno + ")", stack: e.error && e.error.stack, error: e.error, filename: e.filename }) }), !0), window.$util || (window.$util = {}), Object(o.k)(), window.templateHeader = { headWrapBtn: i.c, headWrapLiBtn: i.d }, window.$templateFooter = i.i;

            function w() { var e = document.getElementById("contentCtrl"),
                    t = document.getElementById("footWrapCtrl"),
                    n = document.getElementById("headWrapCtrl"),
                    o = 0; if (e && e.dataset && e.dataset.minHeight && (o = Number(e.dataset.minHeight)), e && e.style && t && n) { var i = document.body.clientHeight - t.clientHeight - n.clientHeight;
                    i = i > o ? i : o, console.log(">>> :", i, document.body.clientHeight, t.clientHeight, n.clientHeight), e.style.minHeight = "".concat(i, "px") }
                setTimeout((function() { "function" === typeof window.onResizeContentCtrlFinished && window.onResizeContentCtrlFinished() }), 0) }
            window.addEventListener("resize", w, !1), Object(o.y)() ? Object(o.a)(document.body, "in-mobile") : Object(o.a)(document.body, "in-pc"), Object(o.G)() && (Object(o.a)(document.body, "in-win"), Object(o.t)() && Object(o.a)(document.body, "is-ie9")), w(), Object(o.y)() && !Object(o.s)() && Object(o.Q)(), window.pageLoadTime = { report: function(e) { console.log("page load time listen_type:", e.listen_type), Object(i.b)("page_load_time", { wemeet_platform: "officialWebsite", listen_type: e.listen_type, page_file: e.page_file, page_name: e.page_name, load_time: e.load_time }) } }, window.addEventListener("load", (function() { Object(i.f)() })), console.log("common.js finished executing.") }, 14: function(e, t, n) { "use strict";
            n(129); var o = "root-toast2-components",
                i = document.getElementById(o);
            i || ((i = document.createElement("div")).id = o, document.body.appendChild(i)); var r = null;

            function c(e, t) { console.log(">>> Toast2:", e); var n = i.querySelector(".toast2"); if (!n) return i.innerHTML = '<div class="toast2">\n        <div class="toast2-wrap">\n           <span class="txt">'.concat(t, "</span>\n        </div>\n      </div>"), !0;
                i.querySelector(".toast2 .toast2-wrap .txt").innerHTML = t, n.style.display = e ? "block" : "none" }
            t.a = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3;
                clearTimeout(r), c(!0, e), r = setTimeout((function() { c(!1) }), t) } }, 16: function(e, t, n) { "use strict"; var o = n(23),
                i = n(9),
                r = n(48),
                c = n.n(r),
                a = n(0),
                s = n(7),
                u = function(e) { return [e = Object(a.b)(function(e) { if (!/^(https|http):\/\//.test(e)) { var t = "/wemeet-webapi"; "product" !== Object(a.p)("debug") && (Object(a.D)() ? t = "/wemeet-webapi-test" : Object(a.x)() ? t = "pre-release" === Object(a.p)("debug") ? "/wemeet-webapi-pre-release" : "/wemeet-webapi-test" : Object(a.A)() && (t = "/wemeet-webapi-pre-release")), e = t + "/" + e } return e }(e), { c_os: "web", c_os_version: 1, c_os_model: "web", c_timestamp: +new Date, c_instance_id: 5, c_nonce: Object(a.S)(8), c_app_id: "1400143280", c_app_version: 1, c_lang: Object(s.a)(Object(s.b)()), c_district: 0 })] },
                d = function(e, t, n) { if (t.data && 0 !== t.data.code) { if (/\/service\/create-launch-id/i.test(n) || /\/service\/query-launch-id/i.test(n)) return !1; var o = { api: n, req: e, res: t.data };
                        Object(a.n)().log({ level: 3, log: Object(i.a)(Object(i.a)({}, o), {}, { title: "res.code is not 0." }) }) } },
                l = function(e, t) { var n = e.response || {};
                    Object(a.n)().log({ level: 3, log: { title: "http error.", api: t, status: n.status, statusText: n.statusText, code: e.code || null, msg: e.message } }) };
            t.a = { get: function(e) { var t = Object.assign({}, { url: "", data: {}, cancelToken: null, onUploadProgress: null, headers: {}, timeout: 6e4 }, e),
                        n = u(t.url),
                        i = Object(o.a)(n, 1); return t.url = i[0], new Promise((function(e, n) { c.a.get(t.url, { params: t.data, headers: t.headers, cancelToken: t.cancelToken, timeout: t.timeout, onUploadProgress: function(e) { "function" === typeof t.onUploadProgress && t.onUploadProgress && t.onUploadProgress(e) } }).then((function(n) { t.response && t.response(n.data), e(n.data), d(t.data, n, t.url) })).catch((function(e) { n(e), l(e, t.url) })) })) }, post: function(e) { var t = Object.assign({}, { url: "", data: {}, cancelToken: null, onUploadProgress: null, headers: {}, timeout: 6e4, response: function() {} }, e),
                        n = u(t.url),
                        i = Object(o.a)(n, 1); return t.url = i[0], new Promise((function(e, n) { c.a.post(t.url, t.data, { headers: t.headers, cancelToken: t.cancelToken, timeout: t.timeout, onUploadProgress: function(e) { "function" === typeof t.onUploadProgress && t.onUploadProgress && t.onUploadProgress(e) } }).then((function(n) { t.response && t.response(n.data), e(n.data), d(t.data, n, t.url) })).catch((function(e) { n(e), l(e, t.url) })) })) } } }, 17: function(e, t, n) { "use strict";
            n.d(t, "e", (function() { return C })), n.d(t, "f", (function() { return x })), n.d(t, "b", (function() { return R })), n.d(t, "a", (function() { return A })), n.d(t, "c", (function() { return L })), n.d(t, "d", (function() { return U })), n.d(t, "i", (function() { return D })), n.d(t, "h", (function() { return M })), n.d(t, "g", (function() { return W }));
            n(9), n(69); var o = n(11),
                i = n(8),
                r = n.n(i),
                c = n(13),
                a = n(7),
                s = (n(52), n(6)),
                u = n(76),
                d = n(56),
                l = n(43),
                f = n(37),
                p = n(0),
                w = n(23),
                g = n(1),
                h = n.n(g),
                m = n(19),
                b = n.n(m),
                v = n(597),
                _ = n(598);
            n(127);

            function O() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "el-auth-code-block-modal",
                    t = document.getElementById(e); return t || ((t = document.createElement("div")).id = e, document.body.appendChild(t)), t }

            function j(e) { var t = Object(g.useState)(e.show),
                    n = Object(w.a)(t, 2),
                    o = n[0],
                    i = n[1],
                    r = function() { j.close(); var t = e.closeCallback;
                        t && t() }; return Object(g.useEffect)((function() { i(e.show) }), [e.show]), h.a.createElement(h.a.Fragment, null, h.a.createElement(v.a, { visible: o, caption: e.title, onClose: r, className: "auth-code-hint-modal" }, h.a.createElement(v.a.Body, null, e.content), h.a.createElement(v.a.Footer, null, e.showCancelBtn ? h.a.createElement(_.a, { type: "weak", onClick: r, style: { width: "88px" } }, "\u77e5\u9053\u4e86") : null, h.a.createElement(_.a, { type: "primary", onClick: function() { e.sureCb && e.sureCb(), r() }, style: { width: "88px" } }, e.sureTxt)))) }
            j.showModal = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.title,
                    n = void 0 === t ? "" : t,
                    o = e.content,
                    i = void 0 === o ? "" : o,
                    r = e.closeCallback,
                    c = e.sureCb,
                    a = e.sureTxt,
                    s = void 0 === a ? "" : a,
                    u = e.showCancelBtn,
                    d = void 0 !== u && u,
                    l = O();
                b.a.render(h.a.createElement(j, { title: n, content: i, show: !0, closeCallback: r, sureCb: c, sureTxt: s, showCancelBtn: d }), l) }, j.close = function() { var e = O();
                b.a.render(h.a.createElement(j, { title: "", content: "", show: !1, sureTxt: "", showCancelBtn: !1 }), e) }; var E = j,
                y = n(39),
                I = n(16),
                T = n(47),
                S = Object(f.a)().store,
                k = Object(d.a)().localStore,
                C = function(e) { return e && (e.avatar || e.userid) },
                x = function() { var e = Object(c.a)(r.a.mark((function e() { var t, n, o, i, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = Object(p.p)("dbgbeacon") || !1, n = "00000C2AM539PVHX", o = "LOGDEBUGKEY00028", Object(p.s)() || t) { e.next = 5; break } return e.abrupt("return", !1);
                                case 5:
                                    if (window.BeaconAction) { e.next = 8; break } return e.next = 8, new Promise((function(e, t) { var n = "/static/lib/beacon_web.3.1.51.min.js";
                                        Object(p.O)(n).then((function() { e() })).catch((function(e) { console.error(e), t(e) })) })).catch((function(e) { return console.error("load-beacon-sdk:", e), null }));
                                case 8:
                                    if (window.BeaconAction && (window.BeaconAction = new window.BeaconAction({ appkey: t ? o : n }), window.$util && window.$util.beaconReportLists)) { for (c in i = Object(p.e)(window.$util.beaconReportLists)) R(i[c].eventName, i[c].reportObj);
                                        window.$util.beaconReportLists = [] }
                                case 9:
                                case "end":
                                    return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                R = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!Object({ NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, IS_I18N: void 0 }).WEMEET_PARAM_PRIVATE) { if (window.BeaconAction) { if ("object" === Object(o.a)(t)) { var n = S.getState().userInfos;
                                t.userid = t.userid || n && n.username || "", t.device_type = t.device_type || (Object(p.y)() ? "mobile" : "pc"), t.user_agent = window.navigator.userAgent, t.is_overseas = "no"; var i = "";
                                window.navigator && window.navigator.platform && (i = window.navigator.platform), t.nav_platform = i } return window.BeaconAction.onDirectUserAction && window.BeaconAction.onDirectUserAction(e, t), !0 } return window.$util || (window.$util = {}), window.$util.beaconReportLists || (window.$util.beaconReportLists = []), window.$util.beaconReportLists.push({ eventName: e, reportObj: t }), !1 } },
                N = function() { window.open("https://act.1700.cn/s2/5119222/d1c2/") },
                A = function(e, t) { I.a.get({ url: "v2/account/logout", data: {}, response: function(n) { console.log(">>> response:", n), 0 === n.code && n.data ? (sessionStorage.clear(), e && e()) : (Object(y.a)(n.message), "function" === typeof t && t(n)) } }).catch((function(e) { console.error(e), "function" === typeof t && t(e) })) },
                L = function(e, t) { var n = S.getState().corpInfos; switch (console.log(">>> headWrapBtn:", e, n), e) {
                        case 0:
                            R("web_head_tencent_cloud_click", {}), window.open("https://cloud.tencent.com"); break;
                        case 12:
                            R("web_head_tencent_meeting_click", {}), window.location.href = "".concat(Object(a.d)(), "/index.html"); break;
                        case 1:
                            break;
                        case 2:
                            R("web_head_buy_click", {}), window.location.href = "".concat(Object(a.d)(), "/buy.html"); break;
                        case 3:
                            R("web_head_download_click", {}), window.location.href = "".concat(Object(a.d)(), "/download-center.html?from=1001"); break;
                        case 4:
                            N(); break;
                        case 5:
                            R("web_head_support_click", {}), window.location.href = "".concat(Object(a.d)(), "/support.html"); break;
                        case 6:
                            R("web_head_uc_join_click", {}), P(n, (function() { window.location.href = "".concat(Object(a.e)(), "/join") })); break;
                        case 7:
                            R("web_head_uc_schedulet_click", {}), P(n, (function() { window.location.href = "".concat(Object(a.e)(), "/schedule") })); break;
                        case 8:
                            R("web_head_uc_start_click", {}), P(n, (function() { window.location.href = "".concat(Object(a.e)(), "/start") })); break;
                        case 9:
                            console.log(">>> \u767b\u5f55:"), window.location.href = "".concat(Object(a.d)(), "/password-login.html").concat(Object(p.f)(window.location.search, "wxwork-error-type")); break;
                        case 10:
                            window.location.href = "".concat(Object(a.d)(), "/regist.html").concat(Object(p.l)(window.location.search)); break;
                        case 11:
                            window.location.href = "".concat(Object(a.e)(), "/user-meeting-list"); break;
                        case 13:
                            window.location.href = "".concat(Object(a.d)(), "/cooperative-partners.html"); break;
                        case 14:
                            A((function() { window.location.href = "".concat(Object(a.d)(), "/index.html") })); break;
                        case 15:
                            window.location.href = "".concat(Object(a.e)(), "/personal-information"); break;
                        case 16:
                            window.location.href = "".concat(Object(a.d)(), "/new-features.html"); break;
                        case 18:
                            R("web-openapi-openapi", {}), window.location.href = "".concat(Object(a.d)(), "/open-api.html"); break;
                        case 19:
                            R("changeaccount_null_null_null_null_null_click", {}); var o = S.getState().userInfos;
                            window.location.href = "".concat(Object(a.d)(), "/select-account-type.html?change-account=1&appid=").concat(o.appid); break;
                        default:
                            console.log(">>> default") } },
                P = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return console.log("???managerExpiredBlockHint", e), 2 === Number(e.payTagStatus) || Number(e.payGuideType) > 0 ? (E.showModal({ title: "\u8be5\u5e10\u53f7\u4e0d\u53ef\u4f7f\u7528", content: "\u670d\u52a1\u5230\u671f\uff0c\u611f\u8c22\u4f7f\u7528\u817e\u8baf\u4f1a\u8bae", sureTxt: "\u7acb\u5373\u8d2d\u4e70", sureCb: p.q, showCancelBtn: !0 }), !0) : (t && t(), !1) },
                U = function(e) { switch (console.log(">>> headWrapLiBtn:", e), e) {
                        case 10:
                            R("web_head_cloud_meeting_click", {}), window.location.href = "".concat(Object(a.d)(), "/cloud-meeting.html"); break;
                        case 11:
                            window.location.href = "".concat(Object(a.d)(), "/cloud-mra.html"); break;
                        case 12:
                            window.location.href = "".concat(Object(a.d)(), "/open-api.html"); break;
                        case 13:
                            window.location.href = "".concat(Object(a.d)(), "/cloud-rooms.html"); break;
                        default:
                            console.log(">>> default") } },
                D = function(e) { switch (e) {
                        case 0:
                            R("web_foot_support_faq_click", {}), window.location.href = "".concat(Object(a.d)(), "/support.html?tab=0"); break;
                        case 1:
                            R("web_foot_support_tutorial_click", {}), window.location.href = "".concat(Object(a.d)(), "/support.html?tab=1"); break;
                        case 2:
                            R("web_foot_buy_click", {}), window.location.href = "".concat(Object(a.d)(), "/buy.html"); break;
                        case 3:
                            R("web_head_contact_sales_click", {}), N(); break;
                        case 4:
                            window.location.href = "".concat(Object(a.d)(), "/cooperative-partners.html"); break;
                        case 5:
                        case 6:
                            break;
                        case 71:
                            R("web_foot_download_windows_click", {}), window.open(s.c.WINDOWS); break;
                        case 72:
                            R("web_foot_download_macos_click", {}), window.open(s.c.MAC); break;
                        case 73:
                            R("web_foot_download_android_click", {}), window.open(s.c.ANDROID); break;
                        case 74:
                            R("web_foot_download_ios_click", {}), window.open(s.c.IOS); break;
                        case 8:
                            R("web_foot_feedback_click", {}), window.open("https://support.qq.com/products/42324?"); break;
                        case 9:
                            R("web_foot_privacy_click", {}), window.open("".concat(s.e.PRIVACY_POLICY)); break;
                        case 10:
                            R("web_foot_declare_click", {}), window.open("".concat(Object(a.d)(), "/declare.html")); break;
                        case 11:
                            R("web_foot_tencent_cloud_click", {}), window.open("https://cloud.tencent.com"); break;
                        case 12:
                            Object(p.s)() ? window.open("https://work.medialab.qq.com/v2/feedback?from=tencent-meeting&source=official&platform=pc&os=".concat(Object(p.o)())) : window.open("https://work.medialab.qq.com/test/v2/feedback?from=tencent-meeting&source=official&platform=pc&os=".concat(Object(p.o)())); break;
                        default:
                            console.log(">>> default") } },
                M = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        o = e.nick_name; "" === o && 2 === Number(e.user_type) && (o = "\u4f01\u4e1a\u5fae\u4fe1\u7528\u6237"); var i = Object.assign({}, t.getState().userInfos, { chineseName: e.name, username: e.userid, avatar: Object(T.d)({ username: o || e.userid, avatar: e.avatar, needDecode: n }), area: e.area, phone: e.phone, email: e.email, userid: e.userid, vipLevel: e.vip_level, appid: e.app_id, userType: Number(e.user_type), isResetPassword: e.is_reset_password, qyWechatOpenUserid: e.qywechat_open_userid, nickName: o, roleId: e.role_id, department: e.department }); return t.dispatch(Object(l.c)(i)), k.dispatch(Object(u.b)(Object.assign({}, k.getState().userInfos, { userid: e.userid, appid: e.app_id, vipLevel: e.vip_level, chineseName: e.name, username: e.userid, nickName: o }))), window.Raven && window.Raven.setUserContext({ username: e.userid, chineseName: e.name }), window.emonitorIns && "function" === typeof window.emonitorIns.config && (Object(p.U)("openid", e.userid, 30), window.emonitorIns.config({ qq: e.userid, uin: e.userid, openid: e.userid })), i },
                W = function(e, t) { I.a.post({ url: "v2/account/login/refresh-token", data: { refresh_token: 0 }, response: function(n) { if (0 === n.code && n.data) { var i = M(n.data, void 0, !1);
                                e && e(i), setTimeout((function() { if ("object" === Object(o.a)(n.data.tips)) { var e = n.data.tips,
                                            t = e.buttons[0],
                                            i = document.getElementById("voov__header-tips-container");
                                        i && (i.innerHTML = '<div class="voov__header-tips">'.concat(e.content, ' <a href="').concat(t.url, '">').concat(t.text, " &gt;</a></div>")) } })) } else t && t(n) } }).catch((function(e) { console.error(e), t && t(e) })) } }, 3: function(e, t, n) { "use strict";
            n.d(t, "r", (function() { return s.S })), n.d(t, "i", (function() { return s.p })), n.d(t, "c", (function() { return s.h })), n.d(t, "l", (function() { return s.y })), n.d(t, "p", (function() { return s.L })), n.d(t, "k", (function() { return s.v })), n.d(t, "o", (function() { return s.K })), n.d(t, "e", (function() { return s.k })), n.d(t, "d", (function() { return s.j })), n.d(t, "m", (function() { return s.F })), n.d(t, "n", (function() { return s.H })), n.d(t, "b", (function() { return s.g })), n.d(t, "a", (function() { return c.b })), n.d(t, "g", (function() { return d })), n.d(t, "j", (function() { return f })), n.d(t, "h", (function() { return p })), n.d(t, "s", (function() { return w })), n.d(t, "q", (function() { return g })), n.d(t, "f", (function() { return h })); var o = n(6),
                i = n(37),
                r = n(43),
                c = n(17),
                a = n(77),
                s = (n(33), n(0)),
                u = function() { return new Promise((function(e, t) { window.WeixinJSBridge ? e(window.WeixinJSBridge) : document.addEventListener("WeixinJSBridgeReady", (function(t) { console.log(">>> WeixinJSBridgeReady:", t), e(window.WeixinJSBridge) })) })) },
                d = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "android",
                        t = arguments.length > 1 ? arguments[1] : void 0; return console.log(">>> getInstallState:", t), new Promise((function(n, i) { u().then((function(i) { var r = { packageName: t || o.i }; "iphone" === e && (r = { packageUrl: t || "wemeet://" }), i.invoke("getInstallState", r, (function(e) { console.log(">>> getInstallState:", e), n(e) })) })) })) },
                l = (n(14), Object(i.a)().store),
                f = (window.sessionStorage, function(e) { var t = o.d.PRODUCT.APP_ID; switch (e) {
                        case 0:
                            t = o.d.PRODUCT.APP_ID; break;
                        case 1:
                            t = o.d.TEST.APP_ID; break;
                        case 2:
                            t = o.d.EXTERNAL_TEST.APP_ID; break;
                        case 3:
                            t = o.d.PRE_RELEASE.APP_ID; break;
                        default:
                            console.log(">>> default:") } return t }); var p = function() { return function(e) { for (var t = e.split("&"), n = {}, o = 0; o < t.length; o++) { var i = t[o].split("="),
                                r = decodeURIComponent(i[0]),
                                c = decodeURIComponent(i[1]); if ("undefined" === typeof n[r]) n[r] = c;
                            else if ("string" === typeof n[r]) { var a = [n[r], c];
                                n[r] = a } else n[r].push(c) } return n }(window.location.search.substring(1)) },
                w = function(e, t) { e.setAttribute("data-placeholder-type", t ? "text" : "password") },
                g = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = { login_type: e }; if (0 === e && (t.sync_to_meeting = !0), Object(s.E)()) t.m_login_source_id = 2, l.dispatch(Object(r.d)(Object(s.b)("detail.html".concat(window.location.search), t))), Object(a.b)("".concat(window.location.origin, "/mobile/login.html#/wechat"));
                    else if (Object(s.y)()) { var n = Object(s.b)("".concat(window.location.origin, "/mobile/login.html#/"), { m_login_source_id: 2, redirect_link: encodeURIComponent(Object(s.b)("detail.html".concat(window.location.search), t)) });
                        window.location.href = n } else { var o = Object(s.b)("".concat(window.location.origin, "/password-login.html"), { redirect_type: 2, m_login_source_id: 2, redirect_link: encodeURIComponent(Object(s.b)("detail.html".concat(window.location.search), t)) });
                        window.location.href = o } },
                h = function(e) { return e.replace(/[<>"()]/g, "") } }, 33: function(e, t, n) { "use strict"; var o = n(23),
                i = n(9),
                r = n(48),
                c = n.n(r),
                a = n(0),
                s = function(e) { return [e = Object(a.b)(function(e) { if (!/^(https|http):\/\//.test(e)) { var t = "/wemeet-webapi"; "product" !== Object(a.p)("debug") && (Object(a.D)() ? (t = "/wemeet-webapi-test", /^(https|http):\/\/testweb\.wemeet\.tencent\.com/i.test(window.location.href) && (t = "/wemeet-webapi-test-3")) : Object(a.x)() ? t = "pre-release" === Object(a.p)("debug") ? "/wemeet-webapi-pre-release" : "/wemeet-webapi-test" : Object(a.A)() && (t = "/wemeet-webapi-pre-release")), e = "".concat(t, "/").concat(e) } return e }(e), { c_os: "web", c_os_version: 1, c_os_model: "web", c_timestamp: +new Date, c_instance_id: 5, c_nonce: Object(a.S)(8), c_app_id: "1400143280", c_app_version: 1 })] },
                u = function(e, t, n) { if (t.data && 0 !== t.data.code) { if (/\/service\/create-launch-id/i.test(n) || /\/service\/query-launch-id/i.test(n)) return !1; var o = { api: n, req: e, res: t.data };
                        Object(a.n)().log({ level: 3, log: Object(i.a)(Object(i.a)({}, o), {}, { title: "res.code is not 0." }) }) } },
                d = function(e, t) { var n = e.response || {};
                    Object(a.n)().log({ level: 3, log: { title: "http error.", api: t, status: n.status, statusText: n.statusText, code: e.code || null, msg: e.message } }) };
            t.a = { get: function(e) { var t = Object.assign({}, { url: "", data: {}, cancelToken: null, onUploadProgress: null, headers: {}, timeout: 6e4 }, e),
                        n = s(t.url),
                        i = Object(o.a)(n, 1); return t.url = i[0], new Promise((function(e, n) { c.a.get(t.url, { params: t.data, headers: t.headers, cancelToken: t.cancelToken, timeout: t.timeout, onUploadProgress: function(e) { "function" === typeof t.onUploadProgress && t.onUploadProgress && t.onUploadProgress(e) } }).then((function(n) { t.response && t.response(n.data), e(n.data), u(t.data, n, t.url) })).catch((function(e) { n(e), d(e, t.url) })) })) }, post: function(e) { var t = Object.assign({}, { url: "", data: {}, cancelToken: null, onUploadProgress: null, headers: {}, timeout: 6e4, response: function() {} }, e),
                        n = s(t.url),
                        i = Object(o.a)(n, 1); return t.url = i[0], new Promise((function(e, n) { c.a.post(t.url, t.data, { headers: t.headers, cancelToken: t.cancelToken, timeout: t.timeout, onUploadProgress: function(e) { "function" === typeof t.onUploadProgress && t.onUploadProgress && t.onUploadProgress(e) } }).then((function(n) { t.response(n.data, t.url), e(n.data), u(t.data, n, t.url) })).catch((function(e) { n({ err: e, finalReqUrl: t.url }), d(e, t.url) })) })) } } }, 37: function(e, t, n) { "use strict"; var o = n(57),
                i = n(49),
                r = n(108),
                c = n.n(r),
                a = n(55),
                s = n(9),
                u = n(62),
                d = { customSiderId: "personal-information", userInfos: { userid: "", appid: "", vipLevel: "", chineseName: "", username: "", avatar: "", lang: "", area: "", phone: "", email: "", userType: "", isResetPassword: "", qyWechatOpenUserid: "", nickName: "", roleId: "", department: "" }, docAuth: { appId: "", toid: "", toidKey: "" }, weChatRedirectUrl: "", jumpInfo: { jumpType: 2 }, docIframe: {}, meetingItemInfo: {}, payType: "", liveItemInfo: {}, layoutList: [], layoutOriginList: [], layoutInfoList: [], layoutInfoOriginList: [], currentStoreLayoutId: "", accessList: [], customAccessList: [], roleCode: "NORMAL_ROLE", corpInfos: { multiCorp: !1, corpId: "", corpName: "", payTag: "", payTagStatus: "", payGuideType: 0, meetingOnlineMember: 25 }, resourceActiveTab: "", userUIConfig: {} },
                l = { key: a.a, storage: c.a, blacklist: [] },
                f = Object(i.a)(l, (function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                        t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                        case "RESET":
                            return Object.assign({}, e, d);
                        case "DOCIFRAME":
                            return Object.assign({}, e, { docIframe: t.options });
                        case "USERINFOS":
                            return Object.assign({}, e, { userInfos: t.options });
                        case "USERINFOS_PHONE":
                            return e.userInfos.phone = t.phone, e;
                        case "USERINFOS_AVATAR":
                            return e.userInfos.avatar = t.avatar, e;
                        case "USERINFOS_NICKNAME":
                            return e.userInfos.nickName = t.nickName, e;
                        case "USERINFOS_CHINESENAME":
                            return e.userInfos.chineseName = t.chineseName, e;
                        case "DOCAUTH":
                            return Object.assign({}, e, { docAuth: t.options });
                        case "WECHAT_REDIRECT_URL":
                            return Object.assign({}, e, { weChatRedirectUrl: t.weChatRedirectUrl });
                        case "JUMPINFO":
                            return Object.assign({}, e, { jumpInfo: t.jumpInfo });
                        case "MEETINGITEMINFO":
                            return Object.assign({}, e, { meetingItemInfo: t.options });
                        case "CUSTOMSIDERID":
                            return Object.assign({}, e, { customSiderId: t.customSiderId });
                        case "TOKEN":
                            return Object.assign({}, e, { token: t.token });
                        case "PAY_TYPE":
                            return Object.assign({}, e, { payType: t.payType });
                        case "LIVEITEMINFO":
                            return Object.assign({}, e, { liveItemInfo: t.options });
                        case "LAYOUTLIST":
                            return Object.assign({}, e, { layoutList: t.options });
                        case "LAYOUTORIGINLIST":
                            return Object.assign({}, e, { layoutOriginList: t.options });
                        case "LAYOUTINFOLIST":
                            return Object.assign({}, e, { layoutInfoList: t.options });
                        case "LAYOUTINFOORIGINLIST":
                            return Object.assign({}, e, { layoutInfoOriginList: t.options });
                        case "CURRENTSTORELAYOUTID":
                            return Object.assign({}, e, { currentStoreLayoutId: t.options });
                        case "ACCESSLIST":
                            return Object.assign({}, e, { accessList: t.options });
                        case "CUSTOMACCESSLIST":
                            if (Array.isArray(t.options)) return Object.assign({}, e, { customAccessList: Object(u.a)(new Set(t.options)) }); var n = [].concat(Object(u.a)(e.customAccessList), [t.options]); return Object.assign({}, e, { customAccessList: Object(u.a)(new Set(n)) });
                        case "ROLECODE":
                            return Object.assign({}, e, { roleCode: t.options });
                        case "CORPINFOS":
                            return Object.assign({}, e, { corpInfos: Object(s.a)(Object(s.a)({}, e.corpInfos), t.options) });
                        case "RESOURCEACTIVETAB":
                            return Object.assign({}, e, { resourceActiveTab: t.options });
                        case "USERUICONFIG":
                            return Object.assign({}, e, { userUIConfig: t.userUIConfig });
                        default:
                            return e } })),
                p = Object(o.b)(f),
                w = Object(i.b)(p);
            t.a = function() { return { store: p, persistor: w } } }, 39: function(e, t, n) { "use strict";
            n(128); var o = document.getElementById("root-toast2");
            o || ((o = document.createElement("div")).id = "root-toast2", document.body.appendChild(o)); var i = null;

            function r(e, t) { console.log(">>> Toast2:", e); var n = o.querySelector(".toast2"); if (!n) return o.innerHTML = '<div class="toast2">\n        <span class="toast2-wrap">\n          <span class="txt">'.concat(t, "</span>\n        </span>\n      </div>"), !0;
                o.querySelector(".toast2 .toast2-wrap .txt").innerHTML = t, n.style.display = e ? "block" : "none" }
            t.a = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3;
                clearTimeout(i), r(!0, e), i = setTimeout((function() { r(!1) }), t) } }, 43: function(e, t, n) { "use strict";
            n.d(t, "c", (function() { return o })), n.d(t, "d", (function() { return i })), n.d(t, "a", (function() { return r })), n.d(t, "b", (function() { return c })); var o = function(e) { return { type: "USERINFOS", options: e } },
                i = function(e) { return { type: "WECHAT_REDIRECT_URL", weChatRedirectUrl: e } },
                r = function() { return { type: "RESET" } },
                c = function(e) { return { type: "CORPINFOS", options: e } } }, 46: function(e) { e.exports = JSON.parse('{"pcLangs":["en","zh-CN","zh-TW"],"userCenterLangs":["en","zh-CN","zh-TW"],"mobileLangs":["en","zh-CN","zh-TW","ja","ko","ms"],"eea":["gb","at","be","bg","hr","cy","cz","dk","ee","fi","fr","de","gr","hu","ie","it","lv","lt","lu","mt","nl","pl","pt","ro","sk","si","es","no","is","li","se"],"regionsMap":{"cn":"zh-CN,zh-TW,en","eea":"en","df":"","kr":"en,ko","gb":"en","hk":"zh-TW,en","mo":"en","in":"en","th":"en","sg":"zh-CN,en","jp":"en","my":"ms"}}') }, 47: function(e, t, n) { "use strict";
            n.d(t, "c", (function() { return i })), n.d(t, "b", (function() { return r })), n.d(t, "d", (function() { return c })), n.d(t, "a", (function() { return a })); var o = n(0),
                i = function(e, t, n) { var i = ""; for (var r in t)
                        if (t[r].english_name === e) { i = " ".concat(Object(o.c)(t[r].local_name)); break }
                    for (var c in n)
                        if (n[c].english_name === e) { i = " ".concat(Object(o.c)(n[c].local_name)); break }
                    return i },
                r = function(e, t, n) { var i = "",
                        r = Object(o.e)(t); for (var c in e) { var s = !1; for (var u in t)
                            if (e[c].english_name === t[u].english_name) { s = !0; break }
                        s || r.push(e[c]) } for (var d in r) { var l = r[d],
                            f = l.english_name,
                            p = l.local_name,
                            w = a({ englishName: f, localName: p });
                        w && (i += "".concat(w, ";")) } return i },
                c = function(e) { var t = e.username,
                        n = void 0 === t ? "" : t,
                        i = e.avatar,
                        r = void 0 === i ? "" : i,
                        c = e.isDefaultAvatar,
                        a = void 0 === c ? -1 : c,
                        s = e.fsize,
                        u = void 0 === s ? 60 : s,
                        d = e.from,
                        l = void 0 === d ? "" : d,
                        f = e.canvasWidth,
                        p = void 0 === f ? 120 : f,
                        w = e.canvasHeight,
                        g = void 0 === w ? 120 : w,
                        h = e.fillTextX,
                        m = void 0 === h ? 60 : h,
                        b = e.fillTextY,
                        v = void 0 === b ? 60 : b,
                        _ = e.needDecode,
                        O = void 0 === _ || _; if (!n) return r; var j = r && -1 !== r.indexOf("madialab-storage-1256380422.cos.ap-guangzhou.myqcloud.com/img/vst_ico80x80_2x.png"); if (!r || j || 1 === a) { var E = n; if (O && (E = Object(o.c)(n)), E = E.trim(), /^[a-zA-Z]+$/.test(E)) E = E.substring(0, 1).toUpperCase();
                        else { "pmi-detail" !== l && (u = 45); var y = E.length - 2;
                            E = E.substring(y) } return function(e) { var t = e.txt,
                                n = void 0 === t ? "" : t,
                                o = e.fsize,
                                i = void 0 === o ? 40 : o,
                                r = e.canvasWidth,
                                c = void 0 === r ? 120 : r,
                                a = e.canvasHeight,
                                s = void 0 === a ? 120 : a,
                                u = e.fillTextX,
                                d = void 0 === u ? 60 : u,
                                l = e.fillTextY,
                                f = void 0 === l ? 60 : l,
                                p = document.createElement("canvas");
                            p.width = c, p.height = s; var w = p.getContext("2d"); return w.fillStyle = "#006FFF", w.fillRect(0, 0, p.width, p.height), w.fillStyle = "#FFF", w.font = "bold " + i + "px sans-serif", w.textAlign = "center", w.textBaseline = "middle", w.fillText(n, d, f), p.toDataURL("image/png") }({ txt: E, canvasWidth: p, canvasHeight: g, fsize: u, fillTextX: m, fillTextY: v }) } return r },
                a = function(e) { var t = e.englishName,
                        n = void 0 === t ? "" : t,
                        i = e.localName,
                        r = void 0 === i ? "" : i,
                        c = e.uuid,
                        a = void 0 === c ? "" : c; return a && r && n || a && r && !n ? a + "(" + Object(o.c)(r) + ")" : a && !r && n ? a + "(" + n + ")" : !a && r && n ? n + "(" + Object(o.c)(r) + ")" : a || r || !n ? a || !r || n ? !a || r || n ? "" : a : Object(o.c)(r) : n } }, 52: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return i })), n.d(t, "c", (function() { return r })), n.d(t, "b", (function() { return c }));
            n(0); var o = n(7),
                i = function() { "en" !== Object(o.b)() ? window.open("https://act.1700.cn/s2/5119222/d1c2/") : window.open("https://wj.qq.com/s2/5544817/7b7c/") },
                r = function(e, t) { var n = Object(o.c)(),
                        i = Object(o.b)(); "zh" === i ? i = "zh-CN" : "hk" === i && (i = "zh-TW"), "df" === (t = t || n) && "sg" === n && (t = n); var r = "/df/redirect.html?page=".concat(e, "&region=").concat(t, "&lang=").concat(i);
                    window.open(r) },
                c = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = ""; if (e.phone_list) { var o = e.phone_list ? e.phone_list.map((function(t) { return "".concat(t.phone_num, "(").concat(e.country_name, ")") })) : [],
                            i = o.join("\n");
                        n = "".concat(t("\u4f7f\u7528PSTN\u63a5\u5165\uff1a"), "\n") + i + "\n\n" + "".concat(t("\u67e5\u627e\u672c\u5730\u53f7\u7801")) + " " + "".concat(window.location.origin, "/mobile/pstn.html?page=pstn&region=df&lang=en") + "\n" } return n } }, 55: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return o })); var o = "root" }, 56: function(e, t, n) { "use strict"; var o = n(57),
                i = n(49),
                r = n(107),
                c = n.n(r),
                a = n(55),
                s = n(9),
                u = { userInfos: { userid: "", appid: "", vipLevel: "", chineseName: "", username: "", nickName: "" }, schedule: { hideInviteHostNew: !1, hideTips: !1 }, ssoInfos: { loginType: "email", domainName: "", email: "" }, collectMeetingHideGuide: !1 },
                d = { key: a.a, storage: c.a, blacklist: [] },
                l = Object(i.a)(d, (function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                        t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                        case "RESET":
                            return Object.assign({}, e, u);
                        case "USERINFOS":
                            return Object.assign({}, e, { userInfos: t.options });
                        case "SSOINFOS":
                            return Object.assign({}, e, { ssoInfos: t.options });
                        case "COLLECT_MEETING_HIDE_GUIDE":
                            return Object.assign({}, e, { collectMeetingHideGuide: t.hideGuide });
                        case "SCHEDULE_HIDETIPS":
                            return Object.assign({}, e, { schedule: Object(s.a)(Object(s.a)({}, e.schedule), {}, { hideTips: t.hideTips }) });
                        case "SCHEDULE_HIDEINVITEHOSTNEW":
                            return Object.assign({}, e, { schedule: Object(s.a)(Object(s.a)({}, e.schedule), {}, { hideInviteHostNew: t.hideInviteHostNew }) });
                        default:
                            return e } })),
                f = Object(o.b)(l),
                p = Object(i.b)(f);
            t.a = function() { return { localStore: f, localPersistor: p } } }, 585: function(e, t, n) { e.exports = n(586) }, 586: function(e, t, n) { "use strict";
            n.r(t);
            n(587), n(130); var o = n(3),
                i = n(14);
            Object(o.e)();! function() { var e, t = decodeURIComponent(Object(o.i)("qrcode_url")),
                    n = document.getElementById("tipsWrap"),
                    r = document.getElementById("errorWrap");
                t && /[http(s)|HTTP(s)]?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(t) && (/^(http|https):\/\/meeting.tencent.com\//.test(e = t) || /^(http|https):\/\/cloud.tencent.com\//.test(e) || /^(http|https):\/\/youxi.vip.qq.com\//.test(e)) ? (Object(o.l)() && (window.location.href = t), n.style.display = "flex", r.style.display = "none", new window.QRCode(document.getElementById("qrcodeCtrl"), { width: 200, height: 200 }).makeCode(t)) : (n.style.display = "none", r.style.display = "flex", Object(i.a)("\u8bbf\u95ee\u53c2\u6570\u9519\u8bef", 2e3)) }() }, 587: function(e, t, n) {}, 6: function(e, t, n) { "use strict";
            n.d(t, "d", (function() { return o })), n.d(t, "g", (function() { return i })), n.d(t, "i", (function() { return r })), n.d(t, "c", (function() { return c })), n.d(t, "k", (function() { return a })), n.d(t, "e", (function() { return s })), n.d(t, "a", (function() { return u })), n.d(t, "b", (function() { return d })), n.d(t, "m", (function() { return l })), n.d(t, "f", (function() { return f })), n.d(t, "j", (function() { return p })), n.d(t, "l", (function() { return w })), n.d(t, "h", (function() { return g })); var o = { PRODUCT: { APP_ID: "1400115281" }, TEST: { APP_ID: "1400143280" }, EXTERNAL_TEST: { APP_ID: "1400244218" }, PRE_RELEASE: { APP_ID: "1400212767" } },
                i = { NON_EXISTENT: -1, READY: 0, CANCELED: 1, ACTIVE: 2, DELETED: 3, ENDED: 6, RECYCLED: 7 },
                r = "com.tencent.wemeet.app",
                c = { WINDOWS: "".concat(window.location.origin, "/download-win.html"), MAC: "".concat(window.location.origin, "/download-mac.html"), IOS: "".concat(window.location.origin, "/download-ios.html"), ANDROID: "".concat(window.location.origin, "/download-android.html") },
                a = { INMEETING: "wemeet://page/inmeeting", LAUNCH: "wemeet://launch", SCHEME_AUTH_SSO: "wemeet://auth/sso" },
                s = { CONTACT_SALES: "".concat(window.location.origin, "/advisory.html"), AUTO_RENEW_SERVICE_RULES: "".concat(window.location.origin, "/service-auto-continue.html"), USER_SERVICE_AGREEMENT: "".concat(window.location.origin, "/pro-user-service-agreement.html"), PRIVACY_POLICY: "".concat(window.location.origin, "/privacy-policy.html") },
                u = "https://down.qq.com/download/TencentMeeting_0300000000_1.3.6.411.publish_shield.apk",
                d = "https://down.qq.com/download/TencentMeeting_1410000040_1.3.6.411.publish.apk",
                l = "https://down.qq.com/download/TencentMeeting_0300000000_1.3.7.402.publish.exe",
                f = "https://down.qq.com/download/TencentMeeting_0300000000_1.3.7.402.publish.dmg",
                p = { 0: "\u6bcf\u5929", 1: "\u6bcf\u4e2a\u5de5\u4f5c\u65e5", 2: "\u6bcf\u5468", 3: "\u6bcf\u4e24\u5468", 4: "\u6bcf\u6708" },
                w = "wxab249edd27d57738",
                g = { NORMAL_MEETING: 0, PERIODICAL_MEETING: 1, SPECIALLY_INVITED_MEETING: 2 } }, 7: function(e, t, n) { "use strict";
            n.d(t, "b", (function() { return g })), n.d(t, "c", (function() { return h })), n.d(t, "d", (function() { return v })), n.d(t, "e", (function() { return _ })), n.d(t, "a", (function() { return O })); var o = n(9),
                i = n(46),
                r = i.pcLangs,
                c = i.mobileLangs,
                a = i.userCenterLangs,
                s = i.eea,
                u = i.regionsMap,
                d = window.location.pathname.startsWith("/mobile") ? c : window.location.pathname.startsWith("/user-center") ? a : r,
                l = s,
                f = Object(o.a)(Object(o.a)({}, u), {}, { df: d.join(",") }),
                p = Object.keys(f); var w = function() { return function(e) { for (var t = e.split("&"), n = {}, o = 0; o < t.length; o++) { var i = t[o].split("="),
                                r = decodeURIComponent(i[0]),
                                c = decodeURIComponent(i[1]); if ("undefined" === typeof n[r]) n[r] = c;
                            else if ("string" === typeof n[r]) { var a = [n[r], c];
                                n[r] = a } else n[r].push(c) } return n }(window.location.search.substring(1)) },
                g = function() { var e = window.location.pathname.split("/"),
                        t = e.find((function(e) { return "redirect" === e })),
                        n = window.location.search.includes("lang"); if (t || n) { var o = w(),
                            i = o.region,
                            r = o.lang,
                            c = m(i); return b(c, r) } var a = e.find((function(e) { return d.indexOf(e) > -1 })); if (a) return a; var s = e.find((function(e) { return l.indexOf(e) > -1 })); return (s = s ? "eea" : e.find((function(e) { return p.indexOf(e) > -1 }))) ? f[s].split(",")[0] : "zh-CN" },
                h = function() { return window.location.href.split("/").find((function(e) { return p.indexOf(e) > -1 })) || "df" },
                m = function(e) { var t = e; return l.indexOf(t) > -1 && (t = "eea"), -1 === p.indexOf(t) && (t = "df"), t },
                b = function(e, t) { var n = f[e].split(","),
                        o = t; return -1 === n.indexOf(t) && (o = n[0] || "en"), o },
                v = function() { return "" },
                _ = function() { return "/user-center".concat(v()) },
                O = function(e) { return { en: "en-us", "zh-CN": "zh-cn", "zh-TW": "zh-tc" }[e] || "en-us" } }, 76: function(e, t, n) { "use strict";
            n.d(t, "b", (function() { return o })), n.d(t, "a", (function() { return i })); var o = function(e) { return { type: "USERINFOS", options: e } },
                i = function(e) { return { type: "COLLECT_MEETING_HIDE_GUIDE", hideGuide: e } } }, 77: function(e, t, n) { "use strict";
            n.d(t, "b", (function() { return a })), n.d(t, "a", (function() { return s })); var o = n(17),
                i = n(16),
                r = n(39),
                c = n(0),
                a = function(e) { i.a.post({ url: "v2/account/auth/get-wechat-mp-auth-url", data: { redirect_uri: e }, response: function(e) { console.log("getWechatMpAuthUrl res:", e), e && 0 === e.code && e.data && e.data.we_chat_auth_url ? window.location.replace(e.data.we_chat_auth_url) : Object(r.a)(e.message) } }).catch((function(e) { console.log("getWechatMpAuthUrl err:", e) })) },
                s = function() { var e = Object(c.p)("code") || "",
                        t = Object(c.p)("state") || "";
                    e && t && function(e, t) { i.a.get({ url: "v2/account/auth/wechat-login-mp", data: { code: e, state: t }, response: function(e) { console.log("wechatLoginMp res:", e), e && 0 === e.code && e.data ? e.data.is_register && u(e.data.auth_code) : Object(r.a)(e.message) } }).catch((function(e) { console.log("wechatLoginMp err:", e) })) }(e, t) },
                u = function(e) { i.a.post({ url: "v2/account/login/auth-code", data: { auth_code: e, identity_type: 1 }, response: function(e) { console.log("loginByAuthCode res:", e), e && 0 === e.code && e.data ? Object(o.h)(e.data) : Object(r.a)(e.message) } }).catch((function(e) { console.log("loginByAuthCode err:", e) })) } } },
    [
        [585, 7, 0]
    ]
]);
//# sourceMappingURL=share.0c3b9145.chunk.js.map