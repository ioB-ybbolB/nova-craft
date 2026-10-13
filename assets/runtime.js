(function () { const n = document.createElement("link").relList; if (n && n.supports && n.supports("modulepreload"))
    return; for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    t(o); new MutationObserver(o => { for (const a of o)
    if (a.type === "childList")
        for (const r of a.addedNodes)
            r.tagName === "LINK" && r.rel === "modulepreload" && t(r); }).observe(document, { childList: !0, subtree: !0 }); function i(o) { const a = {}; return o.integrity && (a.integrity = o.integrity), o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a; } function t(o) { if (o.ep)
    return; o.ep = !0; const a = i(o); fetch(o.href, a); } })();
var W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ol(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Bl = { exports: {} }, Qo = {}, Gl = { exports: {} }, G = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft = Symbol.for("react.element"), Bd = Symbol.for("react.portal"), Gd = Symbol.for("react.fragment"), Id = Symbol.for("react.strict_mode"), xd = Symbol.for("react.profiler"), _d = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), zd = Symbol.for("react.forward_ref"), Ud = Symbol.for("react.suspense"), Qd = Symbol.for("react.memo"), $d = Symbol.for("react.lazy"), sm = Symbol.iterator;
function Kd(e) { return e === null || typeof e != "object" ? null : (e = sm && e[sm] || e["@@iterator"], typeof e == "function" ? e : null); }
var Il = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, xl = Object.assign, _l = {};
function Oi(e, n, i) { this.props = e, this.context = n, this.refs = _l, this.updater = i || Il; }
Oi.prototype.isReactComponent = {};
Oi.prototype.setState = function (e, n) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, n, "setState"); };
Oi.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function Vl() { }
Vl.prototype = Oi.prototype;
function es(e, n, i) { this.props = e, this.context = n, this.refs = _l, this.updater = i || Il; }
var ns = es.prototype = new Vl;
ns.constructor = es;
xl(ns, Oi.prototype);
ns.isPureReactComponent = !0;
var mm = Array.isArray, zl = Object.prototype.hasOwnProperty, is = { current: null }, Ul = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ql(e, n, i) { var t, o = {}, a = null, r = null; if (n != null)
    for (t in n.ref !== void 0 && (r = n.ref), n.key !== void 0 && (a = "" + n.key), n)
        zl.call(n, t) && !Ul.hasOwnProperty(t) && (o[t] = n[t]); var s = arguments.length - 2; if (s === 1)
    o.children = i;
else if (1 < s) {
    for (var m = Array(s), l = 0; l < s; l++)
        m[l] = arguments[l + 2];
    o.children = m;
} if (e && e.defaultProps)
    for (t in s = e.defaultProps, s)
        o[t] === void 0 && (o[t] = s[t]); return { $$typeof: Ft, type: e, key: a, ref: r, props: o, _owner: is.current }; }
function qd(e, n) { return { $$typeof: Ft, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner }; }
function ts(e) { return typeof e == "object" && e !== null && e.$$typeof === Ft; }
function Jd(e) { var n = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (i) { return n[i]; }); }
var lm = /\/+/g;
function Sa(e, n) { return typeof e == "object" && e !== null && e.key != null ? Jd("" + e.key) : n.toString(36); }
function ao(e, n, i, t, o) { var a = typeof e; (a === "undefined" || a === "boolean") && (e = null); var r = !1; if (e === null)
    r = !0;
else
    switch (a) {
        case "string":
        case "number":
            r = !0;
            break;
        case "object": switch (e.$$typeof) {
            case Ft:
            case Bd: r = !0;
        }
    } if (r)
    return r = e, o = o(r), e = t === "" ? "." + Sa(r, 0) : t, mm(o) ? (i = "", e != null && (i = e.replace(lm, "$&/") + "/"), ao(o, n, i, "", function (l) { return l; })) : o != null && (ts(o) && (o = qd(o, i + (!o.key || r && r.key === o.key ? "" : ("" + o.key).replace(lm, "$&/") + "/") + e)), n.push(o)), 1; if (r = 0, t = t === "" ? "." : t + ":", mm(e))
    for (var s = 0; s < e.length; s++) {
        a = e[s];
        var m = t + Sa(a, s);
        r += ao(a, n, i, m, o);
    }
else if (m = Kd(e), typeof m == "function")
    for (e = m.call(e), s = 0; !(a = e.next()).done;)
        a = a.value, m = t + Sa(a, s++), r += ao(a, n, i, m, o);
else if (a === "object")
    throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."); return r; }
function Ot(e, n, i) { if (e == null)
    return e; var t = [], o = 0; return ao(e, t, "", "", function (a) { return n.call(i, a, o++); }), t; }
function Yd(e) { if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function (i) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = i); }, function (i) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = i); }), e._status === -1 && (e._status = 0, e._result = n);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var Ee = { current: null }, ro = { transition: null }, Zd = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: ro, ReactCurrentOwner: is };
function $l() { throw Error("act(...) is not supported in production builds of React."); }
G.Children = { map: Ot, forEach: function (e, n, i) { Ot(e, function () { n.apply(this, arguments); }, i); }, count: function (e) { var n = 0; return Ot(e, function () { n++; }), n; }, toArray: function (e) { return Ot(e, function (n) { return n; }) || []; }, only: function (e) { if (!ts(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
G.Component = Oi;
G.Fragment = Gd;
G.Profiler = xd;
G.PureComponent = es;
G.StrictMode = Id;
G.Suspense = Ud;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zd;
G.act = $l;
G.cloneElement = function (e, n, i) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var t = xl({}, e.props), o = e.key, a = e.ref, r = e._owner; if (n != null) {
    if (n.ref !== void 0 && (a = n.ref, r = is.current), n.key !== void 0 && (o = "" + n.key), e.type && e.type.defaultProps)
        var s = e.type.defaultProps;
    for (m in n)
        zl.call(n, m) && !Ul.hasOwnProperty(m) && (t[m] = n[m] === void 0 && s !== void 0 ? s[m] : n[m]);
} var m = arguments.length - 2; if (m === 1)
    t.children = i;
else if (1 < m) {
    s = Array(m);
    for (var l = 0; l < m; l++)
        s[l] = arguments[l + 2];
    t.children = s;
} return { $$typeof: Ft, type: e.type, key: o, ref: a, props: t, _owner: r }; };
G.createContext = function (e) { return e = { $$typeof: Vd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _d, _context: e }, e.Consumer = e; };
G.createElement = Ql;
G.createFactory = function (e) { var n = Ql.bind(null, e); return n.type = e, n; };
G.createRef = function () { return { current: null }; };
G.forwardRef = function (e) { return { $$typeof: zd, render: e }; };
G.isValidElement = ts;
G.lazy = function (e) { return { $$typeof: $d, _payload: { _status: -1, _result: e }, _init: Yd }; };
G.memo = function (e, n) { return { $$typeof: Qd, type: e, compare: n === void 0 ? null : n }; };
G.startTransition = function (e) { var n = ro.transition; ro.transition = {}; try {
    e();
}
finally {
    ro.transition = n;
} };
G.unstable_act = $l;
G.useCallback = function (e, n) { return Ee.current.useCallback(e, n); };
G.useContext = function (e) { return Ee.current.useContext(e); };
G.useDebugValue = function () { };
G.useDeferredValue = function (e) { return Ee.current.useDeferredValue(e); };
G.useEffect = function (e, n) { return Ee.current.useEffect(e, n); };
G.useId = function () { return Ee.current.useId(); };
G.useImperativeHandle = function (e, n, i) { return Ee.current.useImperativeHandle(e, n, i); };
G.useInsertionEffect = function (e, n) { return Ee.current.useInsertionEffect(e, n); };
G.useLayoutEffect = function (e, n) { return Ee.current.useLayoutEffect(e, n); };
G.useMemo = function (e, n) { return Ee.current.useMemo(e, n); };
G.useReducer = function (e, n, i) { return Ee.current.useReducer(e, n, i); };
G.useRef = function (e) { return Ee.current.useRef(e); };
G.useState = function (e) { return Ee.current.useState(e); };
G.useSyncExternalStore = function (e, n, i) { return Ee.current.useSyncExternalStore(e, n, i); };
G.useTransition = function () { return Ee.current.useTransition(); };
G.version = "18.3.1";
Gl.exports = G;
var D = Gl.exports;
const Xd = Ol(D); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var eh = D, nh = Symbol.for("react.element"), ih = Symbol.for("react.fragment"), th = Object.prototype.hasOwnProperty, oh = eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ah = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kl(e, n, i) { var t, o = {}, a = null, r = null; i !== void 0 && (a = "" + i), n.key !== void 0 && (a = "" + n.key), n.ref !== void 0 && (r = n.ref); for (t in n)
    th.call(n, t) && !ah.hasOwnProperty(t) && (o[t] = n[t]); if (e && e.defaultProps)
    for (t in n = e.defaultProps, n)
        o[t] === void 0 && (o[t] = n[t]); return { $$typeof: nh, type: e, key: a, ref: r, props: o, _owner: oh.current }; }
Qo.Fragment = ih;
Qo.jsx = Kl;
Qo.jsxs = Kl;
Bl.exports = Qo;
var k = Bl.exports, nr = {}, ql = { exports: {} }, Ae = {}, Jl = { exports: {} }, Yl = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function n(v, F) { var A = v.length; v.push(F); e: for (; 0 < A;) {
    var q = A - 1 >>> 1, te = v[q];
    if (0 < o(te, F))
        v[q] = F, v[A] = te, A = q;
    else
        break e;
} } function i(v) { return v.length === 0 ? null : v[0]; } function t(v) { if (v.length === 0)
    return null; var F = v[0], A = v.pop(); if (A !== F) {
    v[0] = A;
    e: for (var q = 0, te = v.length, H = te >>> 1; q < H;) {
        var Q = 2 * (q + 1) - 1, ke = v[Q], ce = Q + 1, Qe = v[ce];
        if (0 > o(ke, A))
            ce < te && 0 > o(Qe, ke) ? (v[q] = Qe, v[ce] = A, q = ce) : (v[q] = ke, v[Q] = A, q = Q);
        else if (ce < te && 0 > o(Qe, A))
            v[q] = Qe, v[ce] = A, q = ce;
        else
            break e;
    }
} return F; } function o(v, F) { var A = v.sortIndex - F.sortIndex; return A !== 0 ? A : v.id - F.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () { return a.now(); };
}
else {
    var r = Date, s = r.now();
    e.unstable_now = function () { return r.now() - s; };
} var m = [], l = [], h = 1, d = null, g = 3, p = !1, y = !1, S = !1, T = typeof setTimeout == "function" ? setTimeout : null, u = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function f(v) { for (var F = i(l); F !== null;) {
    if (F.callback === null)
        t(l);
    else if (F.startTime <= v)
        t(l), F.sortIndex = F.expirationTime, n(m, F);
    else
        break;
    F = i(l);
} } function b(v) { if (S = !1, f(v), !y)
    if (i(m) !== null)
        y = !0, ie(P);
    else {
        var F = i(l);
        F !== null && U(b, F.startTime - v);
    } } function P(v, F) { y = !1, S && (S = !1, u(C), C = -1), p = !0; var A = g; try {
    for (f(F), d = i(m); d !== null && (!(d.expirationTime > F) || v && !E());) {
        var q = d.callback;
        if (typeof q == "function") {
            d.callback = null, g = d.priorityLevel;
            var te = q(d.expirationTime <= F);
            F = e.unstable_now(), typeof te == "function" ? d.callback = te : d === i(m) && t(m), f(F);
        }
        else
            t(m);
        d = i(m);
    }
    if (d !== null)
        var H = !0;
    else {
        var Q = i(l);
        Q !== null && U(b, Q.startTime - F), H = !1;
    }
    return H;
}
finally {
    d = null, g = A, p = !1;
} } var M = !1, L = null, C = -1, x = 5, R = -1; function E() { return !(e.unstable_now() - R < x); } function O() { if (L !== null) {
    var v = e.unstable_now();
    R = v;
    var F = !0;
    try {
        F = L(!0, v);
    }
    finally {
        F ? N() : (M = !1, L = null);
    }
}
else
    M = !1; } var N; if (typeof c == "function")
    N = function () { c(O); };
else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel, I = _.port2;
    _.port1.onmessage = O, N = function () { I.postMessage(null); };
}
else
    N = function () { T(O, 0); }; function ie(v) { L = v, M || (M = !0, N()); } function U(v, F) { C = T(function () { v(e.unstable_now()); }, F); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (v) { v.callback = null; }, e.unstable_continueExecution = function () { y || p || (y = !0, ie(P)); }, e.unstable_forceFrameRate = function (v) { 0 > v || 125 < v ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : x = 0 < v ? Math.floor(1e3 / v) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return g; }, e.unstable_getFirstCallbackNode = function () { return i(m); }, e.unstable_next = function (v) { switch (g) {
    case 1:
    case 2:
    case 3:
        var F = 3;
        break;
    default: F = g;
} var A = g; g = F; try {
    return v();
}
finally {
    g = A;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (v, F) { switch (v) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: v = 3;
} var A = g; g = v; try {
    return F();
}
finally {
    g = A;
} }, e.unstable_scheduleCallback = function (v, F, A) { var q = e.unstable_now(); switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? q + A : q) : A = q, v) {
    case 1:
        var te = -1;
        break;
    case 2:
        te = 250;
        break;
    case 5:
        te = 1073741823;
        break;
    case 4:
        te = 1e4;
        break;
    default: te = 5e3;
} return te = A + te, v = { id: h++, callback: F, priorityLevel: v, startTime: A, expirationTime: te, sortIndex: -1 }, A > q ? (v.sortIndex = A, n(l, v), i(m) === null && v === i(l) && (S ? (u(C), C = -1) : S = !0, U(b, A - q))) : (v.sortIndex = te, n(m, v), y || p || (y = !0, ie(P))), v; }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function (v) { var F = g; return function () { var A = g; g = F; try {
    return v.apply(this, arguments);
}
finally {
    g = A;
} }; }; })(Yl);
Jl.exports = Yl;
var rh = Jl.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var sh = D, He = rh;
function j(e) { for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++)
    n += "&args[]=" + encodeURIComponent(arguments[i]); return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var Zl = new Set, gt = {};
function ri(e, n) { Di(e, n), Di(e + "Capture", n); }
function Di(e, n) { for (gt[e] = n, e = 0; e < n.length; e++)
    Zl.add(n[e]); }
var gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ir = Object.prototype.hasOwnProperty, mh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, cm = {}, um = {};
function lh(e) { return ir.call(um, e) ? !0 : ir.call(cm, e) ? !1 : mh.test(e) ? um[e] = !0 : (cm[e] = !0, !1); }
function ch(e, n, i, t) { if (i !== null && i.type === 0)
    return !1; switch (typeof n) {
    case "function":
    case "symbol": return !0;
    case "boolean": return t ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function uh(e, n, i, t) { if (n === null || typeof n > "u" || ch(e, n, i, t))
    return !0; if (t)
    return !1; if (i !== null)
    switch (i.type) {
        case 3: return !n;
        case 4: return n === !1;
        case 5: return isNaN(n);
        case 6: return isNaN(n) || 1 > n;
    } return !1; }
function Pe(e, n, i, t, o, a, r) { this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = t, this.attributeNamespace = o, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = a, this.removeEmptyString = r; }
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { pe[e] = new Pe(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var n = e[0]; pe[n] = new Pe(n, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { pe[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { pe[e] = new Pe(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { pe[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { pe[e] = new Pe(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { pe[e] = new Pe(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { pe[e] = new Pe(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { pe[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var os = /[\-:]([a-z])/g;
function as(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var n = e.replace(os, as); pe[n] = new Pe(n, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var n = e.replace(os, as); pe[n] = new Pe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var n = e.replace(os, as); pe[n] = new Pe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { pe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1); });
pe.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { pe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function rs(e, n, i, t) { var o = pe.hasOwnProperty(n) ? pe[n] : null; (o !== null ? o.type !== 0 : t || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (uh(n, i, o, t) && (i = null), t || o === null ? lh(n) && (i === null ? e.removeAttribute(n) : e.setAttribute(n, "" + i)) : o.mustUseProperty ? e[o.propertyName] = i === null ? o.type === 3 ? !1 : "" : i : (n = o.attributeName, t = o.attributeNamespace, i === null ? e.removeAttribute(n) : (o = o.type, i = o === 3 || o === 4 && i === !0 ? "" : "" + i, t ? e.setAttributeNS(t, n, i) : e.setAttribute(n, i)))); }
var Sn = sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bt = Symbol.for("react.element"), ui = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), ss = Symbol.for("react.strict_mode"), tr = Symbol.for("react.profiler"), Xl = Symbol.for("react.provider"), ec = Symbol.for("react.context"), ms = Symbol.for("react.forward_ref"), or = Symbol.for("react.suspense"), ar = Symbol.for("react.suspense_list"), ls = Symbol.for("react.memo"), Cn = Symbol.for("react.lazy"), nc = Symbol.for("react.offscreen"), dm = Symbol.iterator;
function xi(e) { return e === null || typeof e != "object" ? null : (e = dm && e[dm] || e["@@iterator"], typeof e == "function" ? e : null); }
var ne = Object.assign, ba;
function Yi(e) {
    if (ba === void 0)
        try {
            throw Error();
        }
        catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            ba = n && n[1] || "";
        }
    return `
` + ba + e;
}
var ja = !1;
function va(e, n) {
    if (!e || ja)
        return "";
    ja = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (n = function () { throw Error(); }, Object.defineProperty(n.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, []);
                }
                catch (l) {
                    var t = l;
                }
                Reflect.construct(e, [], n);
            }
            else {
                try {
                    n.call();
                }
                catch (l) {
                    t = l;
                }
                e.call(n.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (l) {
                t = l;
            }
            e();
        }
    }
    catch (l) {
        if (l && t && typeof l.stack == "string") {
            for (var o = l.stack.split(`
`), a = t.stack.split(`
`), r = o.length - 1, s = a.length - 1; 1 <= r && 0 <= s && o[r] !== a[s];)
                s--;
            for (; 1 <= r && 0 <= s; r--, s--)
                if (o[r] !== a[s]) {
                    if (r !== 1 || s !== 1)
                        do
                            if (r--, s--, 0 > s || o[r] !== a[s]) {
                                var m = `
` + o[r].replace(" at new ", " at ");
                                return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), m;
                            }
                        while (1 <= r && 0 <= s);
                    break;
                }
        }
    }
    finally {
        ja = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? Yi(e) : "";
}
function dh(e) { switch (e.tag) {
    case 5: return Yi(e.type);
    case 16: return Yi("Lazy");
    case 13: return Yi("Suspense");
    case 19: return Yi("SuspenseList");
    case 0:
    case 2:
    case 15: return e = va(e.type, !1), e;
    case 11: return e = va(e.type.render, !1), e;
    case 1: return e = va(e.type, !0), e;
    default: return "";
} }
function rr(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case di: return "Fragment";
    case ui: return "Portal";
    case tr: return "Profiler";
    case ss: return "StrictMode";
    case or: return "Suspense";
    case ar: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case ec: return (e.displayName || "Context") + ".Consumer";
        case Xl: return (e._context.displayName || "Context") + ".Provider";
        case ms:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ls: return n = e.displayName || null, n !== null ? n : rr(e.type) || "Memo";
        case Cn:
            n = e._payload, e = e._init;
            try {
                return rr(e(n));
            }
            catch { }
    } return null; }
function hh(e) { var n = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (n.displayName || "Context") + ".Consumer";
    case 10: return (n._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return n;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return rr(n);
    case 8: return n === ss ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n;
} return null; }
function In(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function ic(e) { var n = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio"); }
function gh(e) { var n = ic(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), t = "" + e[n]; if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
    var o = i.get, a = i.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function () { return o.call(this); }, set: function (r) { t = "" + r, a.call(this, r); } }), Object.defineProperty(e, n, { enumerable: i.enumerable }), { getValue: function () { return t; }, setValue: function (r) { t = "" + r; }, stopTracking: function () { e._valueTracker = null, delete e[n]; } };
} }
function Gt(e) { e._valueTracker || (e._valueTracker = gh(e)); }
function tc(e) { if (!e)
    return !1; var n = e._valueTracker; if (!n)
    return !0; var i = n.getValue(), t = ""; return e && (t = ic(e) ? e.checked ? "true" : "false" : e.value), e = t, e !== i ? (n.setValue(e), !0) : !1; }
function bo(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch {
    return e.body;
} }
function sr(e, n) { var i = n.checked; return ne({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked }); }
function hm(e, n) { var i = n.defaultValue == null ? "" : n.defaultValue, t = n.checked != null ? n.checked : n.defaultChecked; i = In(n.value != null ? n.value : i), e._wrapperState = { initialChecked: t, initialValue: i, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null }; }
function oc(e, n) { n = n.checked, n != null && rs(e, "checked", n, !1); }
function mr(e, n) { oc(e, n); var i = In(n.value), t = n.type; if (i != null)
    t === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
else if (t === "submit" || t === "reset") {
    e.removeAttribute("value");
    return;
} n.hasOwnProperty("value") ? lr(e, n.type, i) : n.hasOwnProperty("defaultValue") && lr(e, n.type, In(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked); }
function gm(e, n, i) { if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var t = n.type;
    if (!(t !== "submit" && t !== "reset" || n.value !== void 0 && n.value !== null))
        return;
    n = "" + e._wrapperState.initialValue, i || n === e.value || (e.value = n), e.defaultValue = n;
} i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i); }
function lr(e, n, i) { (n !== "number" || bo(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i)); }
var Zi = Array.isArray;
function Ei(e, n, i, t) { if (e = e.options, n) {
    n = {};
    for (var o = 0; o < i.length; o++)
        n["$" + i[o]] = !0;
    for (i = 0; i < e.length; i++)
        o = n.hasOwnProperty("$" + e[i].value), e[i].selected !== o && (e[i].selected = o), o && t && (e[i].defaultSelected = !0);
}
else {
    for (i = "" + In(i), n = null, o = 0; o < e.length; o++) {
        if (e[o].value === i) {
            e[o].selected = !0, t && (e[o].defaultSelected = !0);
            return;
        }
        n !== null || e[o].disabled || (n = e[o]);
    }
    n !== null && (n.selected = !0);
} }
function cr(e, n) { if (n.dangerouslySetInnerHTML != null)
    throw Error(j(91)); return ne({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function fm(e, n) { var i = n.value; if (i == null) {
    if (i = n.children, n = n.defaultValue, i != null) {
        if (n != null)
            throw Error(j(92));
        if (Zi(i)) {
            if (1 < i.length)
                throw Error(j(93));
            i = i[0];
        }
        n = i;
    }
    n == null && (n = ""), i = n;
} e._wrapperState = { initialValue: In(i) }; }
function ac(e, n) { var i = In(n.value), t = In(n.defaultValue); i != null && (i = "" + i, i !== e.value && (e.value = i), n.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), t != null && (e.defaultValue = "" + t); }
function pm(e) { var n = e.textContent; n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n); }
function rc(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function ur(e, n) { return e == null || e === "http://www.w3.org/1999/xhtml" ? rc(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var It, sc = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (n, i, t, o) { MSApp.execUnsafeLocalFunction(function () { return e(n, i, t, o); }); } : e; }(function (e, n) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = n;
else {
    for (It = It || document.createElement("div"), It.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = It.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; n.firstChild;)
        e.appendChild(n.firstChild);
} });
function ft(e, n) { if (n) {
    var i = e.firstChild;
    if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
    }
} e.textContent = n; }
var nt = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, fh = ["Webkit", "ms", "Moz", "O"];
Object.keys(nt).forEach(function (e) { fh.forEach(function (n) { n = n + e.charAt(0).toUpperCase() + e.substring(1), nt[n] = nt[e]; }); });
function mc(e, n, i) { return n == null || typeof n == "boolean" || n === "" ? "" : i || typeof n != "number" || n === 0 || nt.hasOwnProperty(e) && nt[e] ? ("" + n).trim() : n + "px"; }
function lc(e, n) { e = e.style; for (var i in n)
    if (n.hasOwnProperty(i)) {
        var t = i.indexOf("--") === 0, o = mc(i, n[i], t);
        i === "float" && (i = "cssFloat"), t ? e.setProperty(i, o) : e[i] = o;
    } }
var ph = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function dr(e, n) { if (n) {
    if (ph[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(j(137, e));
    if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
            throw Error(j(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
            throw Error(j(61));
    }
    if (n.style != null && typeof n.style != "object")
        throw Error(j(62));
} }
function hr(e, n) { if (e.indexOf("-") === -1)
    return typeof n.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var gr = null;
function cs(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var fr = null, Pi = null, Mi = null;
function ym(e) { if (e = Ht(e)) {
    if (typeof fr != "function")
        throw Error(j(280));
    var n = e.stateNode;
    n && (n = Yo(n), fr(e.stateNode, e.type, n));
} }
function cc(e) { Pi ? Mi ? Mi.push(e) : Mi = [e] : Pi = e; }
function uc() { if (Pi) {
    var e = Pi, n = Mi;
    if (Mi = Pi = null, ym(e), n)
        for (e = 0; e < n.length; e++)
            ym(n[e]);
} }
function dc(e, n) { return e(n); }
function hc() { }
var Ca = !1;
function gc(e, n, i) { if (Ca)
    return e(n, i); Ca = !0; try {
    return dc(e, n, i);
}
finally {
    Ca = !1, (Pi !== null || Mi !== null) && (hc(), uc());
} }
function pt(e, n) { var i = e.stateNode; if (i === null)
    return null; var t = Yo(i); if (t === null)
    return null; i = t[n]; e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (t = !t.disabled) || (e = e.type, t = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !t;
        break e;
    default: e = !1;
} if (e)
    return null; if (i && typeof i != "function")
    throw Error(j(231, n, typeof i)); return i; }
var pr = !1;
if (gn)
    try {
        var _i = {};
        Object.defineProperty(_i, "passive", { get: function () { pr = !0; } }), window.addEventListener("test", _i, _i), window.removeEventListener("test", _i, _i);
    }
    catch {
        pr = !1;
    }
function yh(e, n, i, t, o, a, r, s, m) { var l = Array.prototype.slice.call(arguments, 3); try {
    n.apply(i, l);
}
catch (h) {
    this.onError(h);
} }
var it = !1, jo = null, vo = !1, yr = null, Sh = { onError: function (e) { it = !0, jo = e; } };
function bh(e, n, i, t, o, a, r, s, m) { it = !1, jo = null, yh.apply(Sh, arguments); }
function jh(e, n, i, t, o, a, r, s, m) { if (bh.apply(this, arguments), it) {
    if (it) {
        var l = jo;
        it = !1, jo = null;
    }
    else
        throw Error(j(198));
    vo || (vo = !0, yr = l);
} }
function si(e) { var n = e, i = e; if (e.alternate)
    for (; n.return;)
        n = n.return;
else {
    e = n;
    do
        n = e, n.flags & 4098 && (i = n.return), e = n.return;
    while (e);
} return n.tag === 3 ? i : null; }
function fc(e) { if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
} return null; }
function Sm(e) { if (si(e) !== e)
    throw Error(j(188)); }
function vh(e) { var n = e.alternate; if (!n) {
    if (n = si(e), n === null)
        throw Error(j(188));
    return n !== e ? null : e;
} for (var i = e, t = n;;) {
    var o = i.return;
    if (o === null)
        break;
    var a = o.alternate;
    if (a === null) {
        if (t = o.return, t !== null) {
            i = t;
            continue;
        }
        break;
    }
    if (o.child === a.child) {
        for (a = o.child; a;) {
            if (a === i)
                return Sm(o), e;
            if (a === t)
                return Sm(o), n;
            a = a.sibling;
        }
        throw Error(j(188));
    }
    if (i.return !== t.return)
        i = o, t = a;
    else {
        for (var r = !1, s = o.child; s;) {
            if (s === i) {
                r = !0, i = o, t = a;
                break;
            }
            if (s === t) {
                r = !0, t = o, i = a;
                break;
            }
            s = s.sibling;
        }
        if (!r) {
            for (s = a.child; s;) {
                if (s === i) {
                    r = !0, i = a, t = o;
                    break;
                }
                if (s === t) {
                    r = !0, t = a, i = o;
                    break;
                }
                s = s.sibling;
            }
            if (!r)
                throw Error(j(189));
        }
    }
    if (i.alternate !== t)
        throw Error(j(190));
} if (i.tag !== 3)
    throw Error(j(188)); return i.stateNode.current === i ? e : n; }
function pc(e) { return e = vh(e), e !== null ? yc(e) : null; }
function yc(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var n = yc(e);
    if (n !== null)
        return n;
    e = e.sibling;
} return null; }
var Sc = He.unstable_scheduleCallback, bm = He.unstable_cancelCallback, Ch = He.unstable_shouldYield, Eh = He.unstable_requestPaint, ae = He.unstable_now, Ph = He.unstable_getCurrentPriorityLevel, us = He.unstable_ImmediatePriority, bc = He.unstable_UserBlockingPriority, Co = He.unstable_NormalPriority, Mh = He.unstable_LowPriority, jc = He.unstable_IdlePriority, $o = null, rn = null;
function wh(e) { if (rn && typeof rn.onCommitFiberRoot == "function")
    try {
        rn.onCommitFiberRoot($o, e, void 0, (e.current.flags & 128) === 128);
    }
    catch { } }
var Ze = Math.clz32 ? Math.clz32 : Dh, Th = Math.log, Lh = Math.LN2;
function Dh(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Th(e) / Lh | 0) | 0; }
var xt = 64, _t = 4194304;
function Xi(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function Eo(e, n) { var i = e.pendingLanes; if (i === 0)
    return 0; var t = 0, o = e.suspendedLanes, a = e.pingedLanes, r = i & 268435455; if (r !== 0) {
    var s = r & ~o;
    s !== 0 ? t = Xi(s) : (a &= r, a !== 0 && (t = Xi(a)));
}
else
    r = i & ~o, r !== 0 ? t = Xi(r) : a !== 0 && (t = Xi(a)); if (t === 0)
    return 0; if (n !== 0 && n !== t && !(n & o) && (o = t & -t, a = n & -n, o >= a || o === 16 && (a & 4194240) !== 0))
    return n; if (t & 4 && (t |= i & 16), n = e.entangledLanes, n !== 0)
    for (e = e.entanglements, n &= t; 0 < n;)
        i = 31 - Ze(n), o = 1 << i, t |= e[i], n &= ~o; return t; }
function kh(e, n) { switch (e) {
    case 1:
    case 2:
    case 4: return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function Fh(e, n) { for (var i = e.suspendedLanes, t = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
    var r = 31 - Ze(a), s = 1 << r, m = o[r];
    m === -1 ? (!(s & i) || s & t) && (o[r] = kh(s, n)) : m <= n && (e.expiredLanes |= s), a &= ~s;
} }
function Sr(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function vc() { var e = xt; return xt <<= 1, !(xt & 4194240) && (xt = 64), e; }
function Ea(e) { for (var n = [], i = 0; 31 > i; i++)
    n.push(e); return n; }
function Wt(e, n, i) { e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Ze(n), e[n] = i; }
function Wh(e, n) { var i = e.pendingLanes & ~n; e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements; var t = e.eventTimes; for (e = e.expirationTimes; 0 < i;) {
    var o = 31 - Ze(i), a = 1 << o;
    n[o] = 0, t[o] = -1, e[o] = -1, i &= ~a;
} }
function ds(e, n) { var i = e.entangledLanes |= n; for (e = e.entanglements; i;) {
    var t = 31 - Ze(i), o = 1 << t;
    o & n | e[t] & n && (e[t] |= n), i &= ~o;
} }
var z = 0;
function Cc(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var Ec, hs, Pc, Mc, wc, br = !1, Vt = [], Ln = null, Dn = null, kn = null, yt = new Map, St = new Map, Pn = [], Rh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function jm(e, n) { switch (e) {
    case "focusin":
    case "focusout":
        Ln = null;
        break;
    case "dragenter":
    case "dragleave":
        Dn = null;
        break;
    case "mouseover":
    case "mouseout":
        kn = null;
        break;
    case "pointerover":
    case "pointerout":
        yt.delete(n.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": St.delete(n.pointerId);
} }
function Vi(e, n, i, t, o, a) { return e === null || e.nativeEvent !== a ? (e = { blockedOn: n, domEventName: i, eventSystemFlags: t, nativeEvent: a, targetContainers: [o] }, n !== null && (n = Ht(n), n !== null && hs(n)), e) : (e.eventSystemFlags |= t, n = e.targetContainers, o !== null && n.indexOf(o) === -1 && n.push(o), e); }
function Hh(e, n, i, t, o) { switch (n) {
    case "focusin": return Ln = Vi(Ln, e, n, i, t, o), !0;
    case "dragenter": return Dn = Vi(Dn, e, n, i, t, o), !0;
    case "mouseover": return kn = Vi(kn, e, n, i, t, o), !0;
    case "pointerover":
        var a = o.pointerId;
        return yt.set(a, Vi(yt.get(a) || null, e, n, i, t, o)), !0;
    case "gotpointercapture": return a = o.pointerId, St.set(a, Vi(St.get(a) || null, e, n, i, t, o)), !0;
} return !1; }
function Tc(e) { var n = qn(e.target); if (n !== null) {
    var i = si(n);
    if (i !== null) {
        if (n = i.tag, n === 13) {
            if (n = fc(i), n !== null) {
                e.blockedOn = n, wc(e.priority, function () { Pc(i); });
                return;
            }
        }
        else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function so(e) { if (e.blockedOn !== null)
    return !1; for (var n = e.targetContainers; 0 < n.length;) {
    var i = jr(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (i === null) {
        i = e.nativeEvent;
        var t = new i.constructor(i.type, i);
        gr = t, i.target.dispatchEvent(t), gr = null;
    }
    else
        return n = Ht(i), n !== null && hs(n), e.blockedOn = i, !1;
    n.shift();
} return !0; }
function vm(e, n, i) { so(e) && i.delete(n); }
function Ah() { br = !1, Ln !== null && so(Ln) && (Ln = null), Dn !== null && so(Dn) && (Dn = null), kn !== null && so(kn) && (kn = null), yt.forEach(vm), St.forEach(vm); }
function zi(e, n) { e.blockedOn === n && (e.blockedOn = null, br || (br = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, Ah))); }
function bt(e) { function n(o) { return zi(o, e); } if (0 < Vt.length) {
    zi(Vt[0], e);
    for (var i = 1; i < Vt.length; i++) {
        var t = Vt[i];
        t.blockedOn === e && (t.blockedOn = null);
    }
} for (Ln !== null && zi(Ln, e), Dn !== null && zi(Dn, e), kn !== null && zi(kn, e), yt.forEach(n), St.forEach(n), i = 0; i < Pn.length; i++)
    t = Pn[i], t.blockedOn === e && (t.blockedOn = null); for (; 0 < Pn.length && (i = Pn[0], i.blockedOn === null);)
    Tc(i), i.blockedOn === null && Pn.shift(); }
var wi = Sn.ReactCurrentBatchConfig, Po = !0;
function Nh(e, n, i, t) { var o = z, a = wi.transition; wi.transition = null; try {
    z = 1, gs(e, n, i, t);
}
finally {
    z = o, wi.transition = a;
} }
function Oh(e, n, i, t) { var o = z, a = wi.transition; wi.transition = null; try {
    z = 4, gs(e, n, i, t);
}
finally {
    z = o, wi.transition = a;
} }
function gs(e, n, i, t) { if (Po) {
    var o = jr(e, n, i, t);
    if (o === null)
        Ra(e, n, t, Mo, i), jm(e, t);
    else if (Hh(o, e, n, i, t))
        t.stopPropagation();
    else if (jm(e, t), n & 4 && -1 < Rh.indexOf(e)) {
        for (; o !== null;) {
            var a = Ht(o);
            if (a !== null && Ec(a), a = jr(e, n, i, t), a === null && Ra(e, n, t, Mo, i), a === o)
                break;
            o = a;
        }
        o !== null && t.stopPropagation();
    }
    else
        Ra(e, n, t, null, i);
} }
var Mo = null;
function jr(e, n, i, t) { if (Mo = null, e = cs(t), e = qn(e), e !== null)
    if (n = si(e), n === null)
        e = null;
    else if (i = n.tag, i === 13) {
        if (e = fc(n), e !== null)
            return e;
        e = null;
    }
    else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
    }
    else
        n !== e && (e = null); return Mo = e, null; }
function Lc(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (Ph()) {
        case us: return 1;
        case bc: return 4;
        case Co:
        case Mh: return 16;
        case jc: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var wn = null, fs = null, mo = null;
function Dc() { if (mo)
    return mo; var e, n = fs, i = n.length, t, o = "value" in wn ? wn.value : wn.textContent, a = o.length; for (e = 0; e < i && n[e] === o[e]; e++)
    ; var r = i - e; for (t = 1; t <= r && n[i - t] === o[a - t]; t++)
    ; return mo = o.slice(e, 1 < t ? 1 - t : void 0); }
function lo(e) { var n = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function zt() { return !0; }
function Cm() { return !1; }
function Ne(e) { function n(i, t, o, a, r) { this._reactName = i, this._targetInst = o, this.type = t, this.nativeEvent = a, this.target = r, this.currentTarget = null; for (var s in e)
    e.hasOwnProperty(s) && (i = e[s], this[s] = i ? i(a) : a[s]); return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? zt : Cm, this.isPropagationStopped = Cm, this; } return ne(n.prototype, { preventDefault: function () { this.defaultPrevented = !0; var i = this.nativeEvent; i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = zt); }, stopPropagation: function () { var i = this.nativeEvent; i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = zt); }, persist: function () { }, isPersistent: zt }), n; }
var Bi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, ps = Ne(Bi), Rt = ne({}, Bi, { view: 0, detail: 0 }), Bh = Ne(Rt), Pa, Ma, Ui, Ko = ne({}, Rt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ys, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Ui && (Ui && e.type === "mousemove" ? (Pa = e.screenX - Ui.screenX, Ma = e.screenY - Ui.screenY) : Ma = Pa = 0, Ui = e), Pa); }, movementY: function (e) { return "movementY" in e ? e.movementY : Ma; } }), Em = Ne(Ko), Gh = ne({}, Ko, { dataTransfer: 0 }), Ih = Ne(Gh), xh = ne({}, Rt, { relatedTarget: 0 }), wa = Ne(xh), _h = ne({}, Bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vh = Ne(_h), zh = ne({}, Bi, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), Uh = Ne(zh), Qh = ne({}, Bi, { data: 0 }), Pm = Ne(Qh), $h = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Kh = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, qh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jh(e) { var n = this.nativeEvent; return n.getModifierState ? n.getModifierState(e) : (e = qh[e]) ? !!n[e] : !1; }
function ys() { return Jh; }
var Yh = ne({}, Rt, { key: function (e) { if (e.key) {
        var n = $h[e.key] || e.key;
        if (n !== "Unidentified")
            return n;
    } return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kh[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ys, charCode: function (e) { return e.type === "keypress" ? lo(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), Zh = Ne(Yh), Xh = ne({}, Ko, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Mm = Ne(Xh), eg = ne({}, Rt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ys }), ng = Ne(eg), ig = ne({}, Bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tg = Ne(ig), og = ne({}, Ko, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), ag = Ne(og), rg = [9, 13, 27, 32], Ss = gn && "CompositionEvent" in window, tt = null;
gn && "documentMode" in document && (tt = document.documentMode);
var sg = gn && "TextEvent" in window && !tt, kc = gn && (!Ss || tt && 8 < tt && 11 >= tt), wm = " ", Tm = !1;
function Fc(e, n) { switch (e) {
    case "keyup": return rg.indexOf(n.keyCode) !== -1;
    case "keydown": return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Wc(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var hi = !1;
function mg(e, n) { switch (e) {
    case "compositionend": return Wc(n);
    case "keypress": return n.which !== 32 ? null : (Tm = !0, wm);
    case "textInput": return e = n.data, e === wm && Tm ? null : e;
    default: return null;
} }
function lg(e, n) { if (hi)
    return e === "compositionend" || !Ss && Fc(e, n) ? (e = Dc(), mo = fs = wn = null, hi = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
            if (n.char && 1 < n.char.length)
                return n.char;
            if (n.which)
                return String.fromCharCode(n.which);
        }
        return null;
    case "compositionend": return kc && n.locale !== "ko" ? null : n.data;
    default: return null;
} }
var cg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Lm(e) { var n = e && e.nodeName && e.nodeName.toLowerCase(); return n === "input" ? !!cg[e.type] : n === "textarea"; }
function Rc(e, n, i, t) { cc(t), n = wo(n, "onChange"), 0 < n.length && (i = new ps("onChange", "change", null, i, t), e.push({ event: i, listeners: n })); }
var ot = null, jt = null;
function ug(e) { zc(e, 0); }
function qo(e) { var n = pi(e); if (tc(n))
    return e; }
function dg(e, n) { if (e === "change")
    return n; }
var Hc = !1;
if (gn) {
    var Ta;
    if (gn) {
        var La = "oninput" in document;
        if (!La) {
            var Dm = document.createElement("div");
            Dm.setAttribute("oninput", "return;"), La = typeof Dm.oninput == "function";
        }
        Ta = La;
    }
    else
        Ta = !1;
    Hc = Ta && (!document.documentMode || 9 < document.documentMode);
}
function km() { ot && (ot.detachEvent("onpropertychange", Ac), jt = ot = null); }
function Ac(e) { if (e.propertyName === "value" && qo(jt)) {
    var n = [];
    Rc(n, jt, e, cs(e)), gc(ug, n);
} }
function hg(e, n, i) { e === "focusin" ? (km(), ot = n, jt = i, ot.attachEvent("onpropertychange", Ac)) : e === "focusout" && km(); }
function gg(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return qo(jt); }
function fg(e, n) { if (e === "click")
    return qo(n); }
function pg(e, n) { if (e === "input" || e === "change")
    return qo(n); }
function yg(e, n) { return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n; }
var en = typeof Object.is == "function" ? Object.is : yg;
function vt(e, n) { if (en(e, n))
    return !0; if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1; var i = Object.keys(e), t = Object.keys(n); if (i.length !== t.length)
    return !1; for (t = 0; t < i.length; t++) {
    var o = i[t];
    if (!ir.call(n, o) || !en(e[o], n[o]))
        return !1;
} return !0; }
function Fm(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function Wm(e, n) { var i = Fm(e); e = 0; for (var t; i;) {
    if (i.nodeType === 3) {
        if (t = e + i.textContent.length, e <= n && t >= n)
            return { node: i, offset: n - e };
        e = t;
    }
    e: {
        for (; i;) {
            if (i.nextSibling) {
                i = i.nextSibling;
                break e;
            }
            i = i.parentNode;
        }
        i = void 0;
    }
    i = Fm(i);
} }
function Nc(e, n) { return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Nc(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1; }
function Oc() { for (var e = window, n = bo(); n instanceof e.HTMLIFrameElement;) {
    try {
        var i = typeof n.contentWindow.location.href == "string";
    }
    catch {
        i = !1;
    }
    if (i)
        e = n.contentWindow;
    else
        break;
    n = bo(e.document);
} return n; }
function bs(e) { var n = e && e.nodeName && e.nodeName.toLowerCase(); return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true"); }
function Sg(e) { var n = Oc(), i = e.focusedElem, t = e.selectionRange; if (n !== i && i && i.ownerDocument && Nc(i.ownerDocument.documentElement, i)) {
    if (t !== null && bs(i)) {
        if (n = t.start, e = t.end, e === void 0 && (e = n), "selectionStart" in i)
            i.selectionStart = n, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (n = i.ownerDocument || document) && n.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var o = i.textContent.length, a = Math.min(t.start, o);
            t = t.end === void 0 ? a : Math.min(t.end, o), !e.extend && a > t && (o = t, t = a, a = o), o = Wm(i, a);
            var r = Wm(i, t);
            o && r && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== r.node || e.focusOffset !== r.offset) && (n = n.createRange(), n.setStart(o.node, o.offset), e.removeAllRanges(), a > t ? (e.addRange(n), e.extend(r.node, r.offset)) : (n.setEnd(r.node, r.offset), e.addRange(n)));
        }
    }
    for (n = [], e = i; e = e.parentNode;)
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof i.focus == "function" && i.focus(), i = 0; i < n.length; i++)
        e = n[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var bg = gn && "documentMode" in document && 11 >= document.documentMode, gi = null, vr = null, at = null, Cr = !1;
function Rm(e, n, i) { var t = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument; Cr || gi == null || gi !== bo(t) || (t = gi, "selectionStart" in t && bs(t) ? t = { start: t.selectionStart, end: t.selectionEnd } : (t = (t.ownerDocument && t.ownerDocument.defaultView || window).getSelection(), t = { anchorNode: t.anchorNode, anchorOffset: t.anchorOffset, focusNode: t.focusNode, focusOffset: t.focusOffset }), at && vt(at, t) || (at = t, t = wo(vr, "onSelect"), 0 < t.length && (n = new ps("onSelect", "select", null, n, i), e.push({ event: n, listeners: t }), n.target = gi))); }
function Ut(e, n) { var i = {}; return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i; }
var fi = { animationend: Ut("Animation", "AnimationEnd"), animationiteration: Ut("Animation", "AnimationIteration"), animationstart: Ut("Animation", "AnimationStart"), transitionend: Ut("Transition", "TransitionEnd") }, Da = {}, Bc = {};
gn && (Bc = document.createElement("div").style, "AnimationEvent" in window || (delete fi.animationend.animation, delete fi.animationiteration.animation, delete fi.animationstart.animation), "TransitionEvent" in window || delete fi.transitionend.transition);
function Jo(e) { if (Da[e])
    return Da[e]; if (!fi[e])
    return e; var n = fi[e], i; for (i in n)
    if (n.hasOwnProperty(i) && i in Bc)
        return Da[e] = n[i]; return e; }
var Gc = Jo("animationend"), Ic = Jo("animationiteration"), xc = Jo("animationstart"), _c = Jo("transitionend"), Vc = new Map, Hm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _n(e, n) { Vc.set(e, n), ri(n, [e]); }
for (var ka = 0; ka < Hm.length; ka++) {
    var Fa = Hm[ka], jg = Fa.toLowerCase(), vg = Fa[0].toUpperCase() + Fa.slice(1);
    _n(jg, "on" + vg);
}
_n(Gc, "onAnimationEnd");
_n(Ic, "onAnimationIteration");
_n(xc, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(_c, "onTransitionEnd");
Di("onMouseEnter", ["mouseout", "mouseover"]);
Di("onMouseLeave", ["mouseout", "mouseover"]);
Di("onPointerEnter", ["pointerout", "pointerover"]);
Di("onPointerLeave", ["pointerout", "pointerover"]);
ri("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ri("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ri("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ri("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ri("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ri("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cg = new Set("cancel close invalid load scroll toggle".split(" ").concat(et));
function Am(e, n, i) { var t = e.type || "unknown-event"; e.currentTarget = i, jh(t, n, void 0, e), e.currentTarget = null; }
function zc(e, n) { n = (n & 4) !== 0; for (var i = 0; i < e.length; i++) {
    var t = e[i], o = t.event;
    t = t.listeners;
    e: {
        var a = void 0;
        if (n)
            for (var r = t.length - 1; 0 <= r; r--) {
                var s = t[r], m = s.instance, l = s.currentTarget;
                if (s = s.listener, m !== a && o.isPropagationStopped())
                    break e;
                Am(o, s, l), a = m;
            }
        else
            for (r = 0; r < t.length; r++) {
                if (s = t[r], m = s.instance, l = s.currentTarget, s = s.listener, m !== a && o.isPropagationStopped())
                    break e;
                Am(o, s, l), a = m;
            }
    }
} if (vo)
    throw e = yr, vo = !1, yr = null, e; }
function J(e, n) { var i = n[Tr]; i === void 0 && (i = n[Tr] = new Set); var t = e + "__bubble"; i.has(t) || (Uc(n, e, 2, !1), i.add(t)); }
function Wa(e, n, i) { var t = 0; n && (t |= 4), Uc(i, e, t, n); }
var Qt = "_reactListening" + Math.random().toString(36).slice(2);
function Ct(e) { if (!e[Qt]) {
    e[Qt] = !0, Zl.forEach(function (i) { i !== "selectionchange" && (Cg.has(i) || Wa(i, !1, e), Wa(i, !0, e)); });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Qt] || (n[Qt] = !0, Wa("selectionchange", !1, n));
} }
function Uc(e, n, i, t) { switch (Lc(n)) {
    case 1:
        var o = Nh;
        break;
    case 4:
        o = Oh;
        break;
    default: o = gs;
} i = o.bind(null, n, i, e), o = void 0, !pr || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (o = !0), t ? o !== void 0 ? e.addEventListener(n, i, { capture: !0, passive: o }) : e.addEventListener(n, i, !0) : o !== void 0 ? e.addEventListener(n, i, { passive: o }) : e.addEventListener(n, i, !1); }
function Ra(e, n, i, t, o) { var a = t; if (!(n & 1) && !(n & 2) && t !== null)
    e: for (;;) {
        if (t === null)
            return;
        var r = t.tag;
        if (r === 3 || r === 4) {
            var s = t.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o)
                break;
            if (r === 4)
                for (r = t.return; r !== null;) {
                    var m = r.tag;
                    if ((m === 3 || m === 4) && (m = r.stateNode.containerInfo, m === o || m.nodeType === 8 && m.parentNode === o))
                        return;
                    r = r.return;
                }
            for (; s !== null;) {
                if (r = qn(s), r === null)
                    return;
                if (m = r.tag, m === 5 || m === 6) {
                    t = a = r;
                    continue e;
                }
                s = s.parentNode;
            }
        }
        t = t.return;
    } gc(function () { var l = a, h = cs(i), d = []; e: {
    var g = Vc.get(e);
    if (g !== void 0) {
        var p = ps, y = e;
        switch (e) {
            case "keypress": if (lo(i) === 0)
                break e;
            case "keydown":
            case "keyup":
                p = Zh;
                break;
            case "focusin":
                y = "focus", p = wa;
                break;
            case "focusout":
                y = "blur", p = wa;
                break;
            case "beforeblur":
            case "afterblur":
                p = wa;
                break;
            case "click": if (i.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                p = Em;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                p = Ih;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                p = ng;
                break;
            case Gc:
            case Ic:
            case xc:
                p = Vh;
                break;
            case _c:
                p = tg;
                break;
            case "scroll":
                p = Bh;
                break;
            case "wheel":
                p = ag;
                break;
            case "copy":
            case "cut":
            case "paste":
                p = Uh;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": p = Mm;
        }
        var S = (n & 4) !== 0, T = !S && e === "scroll", u = S ? g !== null ? g + "Capture" : null : g;
        S = [];
        for (var c = l, f; c !== null;) {
            f = c;
            var b = f.stateNode;
            if (f.tag === 5 && b !== null && (f = b, u !== null && (b = pt(c, u), b != null && S.push(Et(c, b, f)))), T)
                break;
            c = c.return;
        }
        0 < S.length && (g = new p(g, y, null, i, h), d.push({ event: g, listeners: S }));
    }
} if (!(n & 7)) {
    e: {
        if (g = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", g && i !== gr && (y = i.relatedTarget || i.fromElement) && (qn(y) || y[fn]))
            break e;
        if ((p || g) && (g = h.window === h ? h : (g = h.ownerDocument) ? g.defaultView || g.parentWindow : window, p ? (y = i.relatedTarget || i.toElement, p = l, y = y ? qn(y) : null, y !== null && (T = si(y), y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = l), p !== y)) {
            if (S = Em, b = "onMouseLeave", u = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = Mm, b = "onPointerLeave", u = "onPointerEnter", c = "pointer"), T = p == null ? g : pi(p), f = y == null ? g : pi(y), g = new S(b, c + "leave", p, i, h), g.target = T, g.relatedTarget = f, b = null, qn(h) === l && (S = new S(u, c + "enter", y, i, h), S.target = f, S.relatedTarget = T, b = S), T = b, p && y)
                n: {
                    for (S = p, u = y, c = 0, f = S; f; f = mi(f))
                        c++;
                    for (f = 0, b = u; b; b = mi(b))
                        f++;
                    for (; 0 < c - f;)
                        S = mi(S), c--;
                    for (; 0 < f - c;)
                        u = mi(u), f--;
                    for (; c--;) {
                        if (S === u || u !== null && S === u.alternate)
                            break n;
                        S = mi(S), u = mi(u);
                    }
                    S = null;
                }
            else
                S = null;
            p !== null && Nm(d, g, p, S, !1), y !== null && T !== null && Nm(d, T, y, S, !0);
        }
    }
    e: {
        if (g = l ? pi(l) : window, p = g.nodeName && g.nodeName.toLowerCase(), p === "select" || p === "input" && g.type === "file")
            var P = dg;
        else if (Lm(g))
            if (Hc)
                P = pg;
            else {
                P = gg;
                var M = hg;
            }
        else
            (p = g.nodeName) && p.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (P = fg);
        if (P && (P = P(e, l))) {
            Rc(d, P, i, h);
            break e;
        }
        M && M(e, g, l), e === "focusout" && (M = g._wrapperState) && M.controlled && g.type === "number" && lr(g, "number", g.value);
    }
    switch (M = l ? pi(l) : window, e) {
        case "focusin":
            (Lm(M) || M.contentEditable === "true") && (gi = M, vr = l, at = null);
            break;
        case "focusout":
            at = vr = gi = null;
            break;
        case "mousedown":
            Cr = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            Cr = !1, Rm(d, i, h);
            break;
        case "selectionchange": if (bg)
            break;
        case "keydown":
        case "keyup": Rm(d, i, h);
    }
    var L;
    if (Ss)
        e: {
            switch (e) {
                case "compositionstart":
                    var C = "onCompositionStart";
                    break e;
                case "compositionend":
                    C = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    C = "onCompositionUpdate";
                    break e;
            }
            C = void 0;
        }
    else
        hi ? Fc(e, i) && (C = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (C = "onCompositionStart");
    C && (kc && i.locale !== "ko" && (hi || C !== "onCompositionStart" ? C === "onCompositionEnd" && hi && (L = Dc()) : (wn = h, fs = "value" in wn ? wn.value : wn.textContent, hi = !0)), M = wo(l, C), 0 < M.length && (C = new Pm(C, e, null, i, h), d.push({ event: C, listeners: M }), L ? C.data = L : (L = Wc(i), L !== null && (C.data = L)))), (L = sg ? mg(e, i) : lg(e, i)) && (l = wo(l, "onBeforeInput"), 0 < l.length && (h = new Pm("onBeforeInput", "beforeinput", null, i, h), d.push({ event: h, listeners: l }), h.data = L));
} zc(d, n); }); }
function Et(e, n, i) { return { instance: e, listener: n, currentTarget: i }; }
function wo(e, n) { for (var i = n + "Capture", t = []; e !== null;) {
    var o = e, a = o.stateNode;
    o.tag === 5 && a !== null && (o = a, a = pt(e, i), a != null && t.unshift(Et(e, a, o)), a = pt(e, n), a != null && t.push(Et(e, a, o))), e = e.return;
} return t; }
function mi(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function Nm(e, n, i, t, o) { for (var a = n._reactName, r = []; i !== null && i !== t;) {
    var s = i, m = s.alternate, l = s.stateNode;
    if (m !== null && m === t)
        break;
    s.tag === 5 && l !== null && (s = l, o ? (m = pt(i, a), m != null && r.unshift(Et(i, m, s))) : o || (m = pt(i, a), m != null && r.push(Et(i, m, s)))), i = i.return;
} r.length !== 0 && e.push({ event: n, listeners: r }); }
var Eg = /\r\n?/g, Pg = /\u0000|\uFFFD/g;
function Om(e) {
    return (typeof e == "string" ? e : "" + e).replace(Eg, `
`).replace(Pg, "");
}
function $t(e, n, i) { if (n = Om(n), Om(e) !== n && i)
    throw Error(j(425)); }
function To() { }
var Er = null, Pr = null;
function Mr(e, n) { return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null; }
var wr = typeof setTimeout == "function" ? setTimeout : void 0, Mg = typeof clearTimeout == "function" ? clearTimeout : void 0, Bm = typeof Promise == "function" ? Promise : void 0, wg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bm < "u" ? function (e) { return Bm.resolve(null).then(e).catch(Tg); } : wr;
function Tg(e) { setTimeout(function () { throw e; }); }
function Ha(e, n) { var i = n, t = 0; do {
    var o = i.nextSibling;
    if (e.removeChild(i), o && o.nodeType === 8)
        if (i = o.data, i === "/$") {
            if (t === 0) {
                e.removeChild(o), bt(n);
                return;
            }
            t--;
        }
        else
            i !== "$" && i !== "$?" && i !== "$!" || t++;
    i = o;
} while (i); bt(n); }
function Fn(e) { for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3)
        break;
    if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?")
            break;
        if (n === "/$")
            return null;
    }
} return e; }
function Gm(e) { e = e.previousSibling; for (var n = 0; e;) {
    if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
            if (n === 0)
                return e;
            n--;
        }
        else
            i === "/$" && n++;
    }
    e = e.previousSibling;
} return null; }
var Gi = Math.random().toString(36).slice(2), an = "__reactFiber$" + Gi, Pt = "__reactProps$" + Gi, fn = "__reactContainer$" + Gi, Tr = "__reactEvents$" + Gi, Lg = "__reactListeners$" + Gi, Dg = "__reactHandles$" + Gi;
function qn(e) { var n = e[an]; if (n)
    return n; for (var i = e.parentNode; i;) {
    if (n = i[fn] || i[an]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
            for (e = Gm(e); e !== null;) {
                if (i = e[an])
                    return i;
                e = Gm(e);
            }
        return n;
    }
    e = i, i = e.parentNode;
} return null; }
function Ht(e) { return e = e[an] || e[fn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function pi(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(j(33)); }
function Yo(e) { return e[Pt] || null; }
var Lr = [], yi = -1;
function Vn(e) { return { current: e }; }
function Y(e) { 0 > yi || (e.current = Lr[yi], Lr[yi] = null, yi--); }
function K(e, n) { yi++, Lr[yi] = e.current, e.current = n; }
var xn = {}, je = Vn(xn), Te = Vn(!1), ei = xn;
function ki(e, n) { var i = e.type.contextTypes; if (!i)
    return xn; var t = e.stateNode; if (t && t.__reactInternalMemoizedUnmaskedChildContext === n)
    return t.__reactInternalMemoizedMaskedChildContext; var o = {}, a; for (a in i)
    o[a] = n[a]; return t && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = o), o; }
function Le(e) { return e = e.childContextTypes, e != null; }
function Lo() { Y(Te), Y(je); }
function Im(e, n, i) { if (je.current !== xn)
    throw Error(j(168)); K(je, n), K(Te, i); }
function Qc(e, n, i) { var t = e.stateNode; if (n = n.childContextTypes, typeof t.getChildContext != "function")
    return i; t = t.getChildContext(); for (var o in t)
    if (!(o in n))
        throw Error(j(108, hh(e) || "Unknown", o)); return ne({}, i, t); }
function Do(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, ei = je.current, K(je, e), K(Te, Te.current), !0; }
function xm(e, n, i) { var t = e.stateNode; if (!t)
    throw Error(j(169)); i ? (e = Qc(e, n, ei), t.__reactInternalMemoizedMergedChildContext = e, Y(Te), Y(je), K(je, e)) : Y(Te), K(Te, i); }
var cn = null, Zo = !1, Aa = !1;
function $c(e) { cn === null ? cn = [e] : cn.push(e); }
function kg(e) { Zo = !0, $c(e); }
function zn() { if (!Aa && cn !== null) {
    Aa = !0;
    var e = 0, n = z;
    try {
        var i = cn;
        for (z = 1; e < i.length; e++) {
            var t = i[e];
            do
                t = t(!0);
            while (t !== null);
        }
        cn = null, Zo = !1;
    }
    catch (o) {
        throw cn !== null && (cn = cn.slice(e + 1)), Sc(us, zn), o;
    }
    finally {
        z = n, Aa = !1;
    }
} return null; }
var Si = [], bi = 0, ko = null, Fo = 0, Ge = [], Ie = 0, ni = null, un = 1, dn = "";
function $n(e, n) { Si[bi++] = Fo, Si[bi++] = ko, ko = e, Fo = n; }
function Kc(e, n, i) { Ge[Ie++] = un, Ge[Ie++] = dn, Ge[Ie++] = ni, ni = e; var t = un; e = dn; var o = 32 - Ze(t) - 1; t &= ~(1 << o), i += 1; var a = 32 - Ze(n) + o; if (30 < a) {
    var r = o - o % 5;
    a = (t & (1 << r) - 1).toString(32), t >>= r, o -= r, un = 1 << 32 - Ze(n) + o | i << o | t, dn = a + e;
}
else
    un = 1 << a | i << o | t, dn = e; }
function js(e) { e.return !== null && ($n(e, 1), Kc(e, 1, 0)); }
function vs(e) { for (; e === ko;)
    ko = Si[--bi], Si[bi] = null, Fo = Si[--bi], Si[bi] = null; for (; e === ni;)
    ni = Ge[--Ie], Ge[Ie] = null, dn = Ge[--Ie], Ge[Ie] = null, un = Ge[--Ie], Ge[Ie] = null; }
var Re = null, We = null, Z = !1, Je = null;
function qc(e, n) { var i = _e(5, null, null, 0); i.elementType = "DELETED", i.stateNode = n, i.return = e, n = e.deletions, n === null ? (e.deletions = [i], e.flags |= 16) : n.push(i); }
function _m(e, n) { switch (e.tag) {
    case 5:
        var i = e.type;
        return n = n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Re = e, We = Fn(n.firstChild), !0) : !1;
    case 6: return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Re = e, We = null, !0) : !1;
    case 13: return n = n.nodeType !== 8 ? null : n, n !== null ? (i = ni !== null ? { id: un, overflow: dn } : null, e.memoizedState = { dehydrated: n, treeContext: i, retryLane: 1073741824 }, i = _e(18, null, null, 0), i.stateNode = n, i.return = e, e.child = i, Re = e, We = null, !0) : !1;
    default: return !1;
} }
function Dr(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function kr(e) { if (Z) {
    var n = We;
    if (n) {
        var i = n;
        if (!_m(e, n)) {
            if (Dr(e))
                throw Error(j(418));
            n = Fn(i.nextSibling);
            var t = Re;
            n && _m(e, n) ? qc(t, i) : (e.flags = e.flags & -4097 | 2, Z = !1, Re = e);
        }
    }
    else {
        if (Dr(e))
            throw Error(j(418));
        e.flags = e.flags & -4097 | 2, Z = !1, Re = e;
    }
} }
function Vm(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Re = e; }
function Kt(e) { if (e !== Re)
    return !1; if (!Z)
    return Vm(e), Z = !0, !1; var n; if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Mr(e.type, e.memoizedProps)), n && (n = We)) {
    if (Dr(e))
        throw Jc(), Error(j(418));
    for (; n;)
        qc(e, n), n = Fn(n.nextSibling);
} if (Vm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(j(317));
    e: {
        for (e = e.nextSibling, n = 0; e;) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "/$") {
                    if (n === 0) {
                        We = Fn(e.nextSibling);
                        break e;
                    }
                    n--;
                }
                else
                    i !== "$" && i !== "$!" && i !== "$?" || n++;
            }
            e = e.nextSibling;
        }
        We = null;
    }
}
else
    We = Re ? Fn(e.stateNode.nextSibling) : null; return !0; }
function Jc() { for (var e = We; e;)
    e = Fn(e.nextSibling); }
function Fi() { We = Re = null, Z = !1; }
function Cs(e) { Je === null ? Je = [e] : Je.push(e); }
var Fg = Sn.ReactCurrentBatchConfig;
function Qi(e, n, i) { if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (i._owner) {
        if (i = i._owner, i) {
            if (i.tag !== 1)
                throw Error(j(309));
            var t = i.stateNode;
        }
        if (!t)
            throw Error(j(147, e));
        var o = t, a = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === a ? n.ref : (n = function (r) { var s = o.refs; r === null ? delete s[a] : s[a] = r; }, n._stringRef = a, n);
    }
    if (typeof e != "string")
        throw Error(j(284));
    if (!i._owner)
        throw Error(j(290, e));
} return e; }
function qt(e, n) { throw e = Object.prototype.toString.call(n), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)); }
function zm(e) { var n = e._init; return n(e._payload); }
function Yc(e) { function n(u, c) { if (e) {
    var f = u.deletions;
    f === null ? (u.deletions = [c], u.flags |= 16) : f.push(c);
} } function i(u, c) { if (!e)
    return null; for (; c !== null;)
    n(u, c), c = c.sibling; return null; } function t(u, c) { for (u = new Map; c !== null;)
    c.key !== null ? u.set(c.key, c) : u.set(c.index, c), c = c.sibling; return u; } function o(u, c) { return u = An(u, c), u.index = 0, u.sibling = null, u; } function a(u, c, f) { return u.index = f, e ? (f = u.alternate, f !== null ? (f = f.index, f < c ? (u.flags |= 2, c) : f) : (u.flags |= 2, c)) : (u.flags |= 1048576, c); } function r(u) { return e && u.alternate === null && (u.flags |= 2), u; } function s(u, c, f, b) { return c === null || c.tag !== 6 ? (c = _a(f, u.mode, b), c.return = u, c) : (c = o(c, f), c.return = u, c); } function m(u, c, f, b) { var P = f.type; return P === di ? h(u, c, f.props.children, b, f.key) : c !== null && (c.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Cn && zm(P) === c.type) ? (b = o(c, f.props), b.ref = Qi(u, c, f), b.return = u, b) : (b = yo(f.type, f.key, f.props, null, u.mode, b), b.ref = Qi(u, c, f), b.return = u, b); } function l(u, c, f, b) { return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Va(f, u.mode, b), c.return = u, c) : (c = o(c, f.children || []), c.return = u, c); } function h(u, c, f, b, P) { return c === null || c.tag !== 7 ? (c = Xn(f, u.mode, b, P), c.return = u, c) : (c = o(c, f), c.return = u, c); } function d(u, c, f) { if (typeof c == "string" && c !== "" || typeof c == "number")
    return c = _a("" + c, u.mode, f), c.return = u, c; if (typeof c == "object" && c !== null) {
    switch (c.$$typeof) {
        case Bt: return f = yo(c.type, c.key, c.props, null, u.mode, f), f.ref = Qi(u, null, c), f.return = u, f;
        case ui: return c = Va(c, u.mode, f), c.return = u, c;
        case Cn:
            var b = c._init;
            return d(u, b(c._payload), f);
    }
    if (Zi(c) || xi(c))
        return c = Xn(c, u.mode, f, null), c.return = u, c;
    qt(u, c);
} return null; } function g(u, c, f, b) { var P = c !== null ? c.key : null; if (typeof f == "string" && f !== "" || typeof f == "number")
    return P !== null ? null : s(u, c, "" + f, b); if (typeof f == "object" && f !== null) {
    switch (f.$$typeof) {
        case Bt: return f.key === P ? m(u, c, f, b) : null;
        case ui: return f.key === P ? l(u, c, f, b) : null;
        case Cn: return P = f._init, g(u, c, P(f._payload), b);
    }
    if (Zi(f) || xi(f))
        return P !== null ? null : h(u, c, f, b, null);
    qt(u, f);
} return null; } function p(u, c, f, b, P) { if (typeof b == "string" && b !== "" || typeof b == "number")
    return u = u.get(f) || null, s(c, u, "" + b, P); if (typeof b == "object" && b !== null) {
    switch (b.$$typeof) {
        case Bt: return u = u.get(b.key === null ? f : b.key) || null, m(c, u, b, P);
        case ui: return u = u.get(b.key === null ? f : b.key) || null, l(c, u, b, P);
        case Cn:
            var M = b._init;
            return p(u, c, f, M(b._payload), P);
    }
    if (Zi(b) || xi(b))
        return u = u.get(f) || null, h(c, u, b, P, null);
    qt(c, b);
} return null; } function y(u, c, f, b) { for (var P = null, M = null, L = c, C = c = 0, x = null; L !== null && C < f.length; C++) {
    L.index > C ? (x = L, L = null) : x = L.sibling;
    var R = g(u, L, f[C], b);
    if (R === null) {
        L === null && (L = x);
        break;
    }
    e && L && R.alternate === null && n(u, L), c = a(R, c, C), M === null ? P = R : M.sibling = R, M = R, L = x;
} if (C === f.length)
    return i(u, L), Z && $n(u, C), P; if (L === null) {
    for (; C < f.length; C++)
        L = d(u, f[C], b), L !== null && (c = a(L, c, C), M === null ? P = L : M.sibling = L, M = L);
    return Z && $n(u, C), P;
} for (L = t(u, L); C < f.length; C++)
    x = p(L, u, C, f[C], b), x !== null && (e && x.alternate !== null && L.delete(x.key === null ? C : x.key), c = a(x, c, C), M === null ? P = x : M.sibling = x, M = x); return e && L.forEach(function (E) { return n(u, E); }), Z && $n(u, C), P; } function S(u, c, f, b) { var P = xi(f); if (typeof P != "function")
    throw Error(j(150)); if (f = P.call(f), f == null)
    throw Error(j(151)); for (var M = P = null, L = c, C = c = 0, x = null, R = f.next(); L !== null && !R.done; C++, R = f.next()) {
    L.index > C ? (x = L, L = null) : x = L.sibling;
    var E = g(u, L, R.value, b);
    if (E === null) {
        L === null && (L = x);
        break;
    }
    e && L && E.alternate === null && n(u, L), c = a(E, c, C), M === null ? P = E : M.sibling = E, M = E, L = x;
} if (R.done)
    return i(u, L), Z && $n(u, C), P; if (L === null) {
    for (; !R.done; C++, R = f.next())
        R = d(u, R.value, b), R !== null && (c = a(R, c, C), M === null ? P = R : M.sibling = R, M = R);
    return Z && $n(u, C), P;
} for (L = t(u, L); !R.done; C++, R = f.next())
    R = p(L, u, C, R.value, b), R !== null && (e && R.alternate !== null && L.delete(R.key === null ? C : R.key), c = a(R, c, C), M === null ? P = R : M.sibling = R, M = R); return e && L.forEach(function (O) { return n(u, O); }), Z && $n(u, C), P; } function T(u, c, f, b) { if (typeof f == "object" && f !== null && f.type === di && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
    switch (f.$$typeof) {
        case Bt:
            e: {
                for (var P = f.key, M = c; M !== null;) {
                    if (M.key === P) {
                        if (P = f.type, P === di) {
                            if (M.tag === 7) {
                                i(u, M.sibling), c = o(M, f.props.children), c.return = u, u = c;
                                break e;
                            }
                        }
                        else if (M.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Cn && zm(P) === M.type) {
                            i(u, M.sibling), c = o(M, f.props), c.ref = Qi(u, M, f), c.return = u, u = c;
                            break e;
                        }
                        i(u, M);
                        break;
                    }
                    else
                        n(u, M);
                    M = M.sibling;
                }
                f.type === di ? (c = Xn(f.props.children, u.mode, b, f.key), c.return = u, u = c) : (b = yo(f.type, f.key, f.props, null, u.mode, b), b.ref = Qi(u, c, f), b.return = u, u = b);
            }
            return r(u);
        case ui:
            e: {
                for (M = f.key; c !== null;) {
                    if (c.key === M)
                        if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                            i(u, c.sibling), c = o(c, f.children || []), c.return = u, u = c;
                            break e;
                        }
                        else {
                            i(u, c);
                            break;
                        }
                    else
                        n(u, c);
                    c = c.sibling;
                }
                c = Va(f, u.mode, b), c.return = u, u = c;
            }
            return r(u);
        case Cn: return M = f._init, T(u, c, M(f._payload), b);
    }
    if (Zi(f))
        return y(u, c, f, b);
    if (xi(f))
        return S(u, c, f, b);
    qt(u, f);
} return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (i(u, c.sibling), c = o(c, f), c.return = u, u = c) : (i(u, c), c = _a(f, u.mode, b), c.return = u, u = c), r(u)) : i(u, c); } return T; }
var Wi = Yc(!0), Zc = Yc(!1), Wo = Vn(null), Ro = null, ji = null, Es = null;
function Ps() { Es = ji = Ro = null; }
function Ms(e) { var n = Wo.current; Y(Wo), e._currentValue = n; }
function Fr(e, n, i) { for (; e !== null;) {
    var t = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, t !== null && (t.childLanes |= n)) : t !== null && (t.childLanes & n) !== n && (t.childLanes |= n), e === i)
        break;
    e = e.return;
} }
function Ti(e, n) { Ro = e, Es = ji = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (we = !0), e.firstContext = null); }
function ze(e) { var n = e._currentValue; if (Es !== e)
    if (e = { context: e, memoizedValue: n, next: null }, ji === null) {
        if (Ro === null)
            throw Error(j(308));
        ji = e, Ro.dependencies = { lanes: 0, firstContext: e };
    }
    else
        ji = ji.next = e; return n; }
var Jn = null;
function ws(e) { Jn === null ? Jn = [e] : Jn.push(e); }
function Xc(e, n, i, t) { var o = n.interleaved; return o === null ? (i.next = i, ws(n)) : (i.next = o.next, o.next = i), n.interleaved = i, pn(e, t); }
function pn(e, n) { e.lanes |= n; var i = e.alternate; for (i !== null && (i.lanes |= n), i = e, e = e.return; e !== null;)
    e.childLanes |= n, i = e.alternate, i !== null && (i.childLanes |= n), i = e, e = e.return; return i.tag === 3 ? i.stateNode : null; }
var En = !1;
function Ts(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function eu(e, n) { e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function hn(e, n) { return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null }; }
function Wn(e, n, i) { var t = e.updateQueue; if (t === null)
    return null; if (t = t.shared, V & 2) {
    var o = t.pending;
    return o === null ? n.next = n : (n.next = o.next, o.next = n), t.pending = n, pn(e, i);
} return o = t.interleaved, o === null ? (n.next = n, ws(t)) : (n.next = o.next, o.next = n), t.interleaved = n, pn(e, i); }
function co(e, n, i) { if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194240) !== 0)) {
    var t = n.lanes;
    t &= e.pendingLanes, i |= t, n.lanes = i, ds(e, i);
} }
function Um(e, n) { var i = e.updateQueue, t = e.alternate; if (t !== null && (t = t.updateQueue, i === t)) {
    var o = null, a = null;
    if (i = i.firstBaseUpdate, i !== null) {
        do {
            var r = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
            a === null ? o = a = r : a = a.next = r, i = i.next;
        } while (i !== null);
        a === null ? o = a = n : a = a.next = n;
    }
    else
        o = a = n;
    i = { baseState: t.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: t.shared, effects: t.effects }, e.updateQueue = i;
    return;
} e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n; }
function Ho(e, n, i, t) { var o = e.updateQueue; En = !1; var a = o.firstBaseUpdate, r = o.lastBaseUpdate, s = o.shared.pending; if (s !== null) {
    o.shared.pending = null;
    var m = s, l = m.next;
    m.next = null, r === null ? a = l : r.next = l, r = m;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== r && (s === null ? h.firstBaseUpdate = l : s.next = l, h.lastBaseUpdate = m));
} if (a !== null) {
    var d = o.baseState;
    r = 0, h = l = m = null, s = a;
    do {
        var g = s.lane, p = s.eventTime;
        if ((t & g) === g) {
            h !== null && (h = h.next = { eventTime: p, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
            e: {
                var y = e, S = s;
                switch (g = n, p = i, S.tag) {
                    case 1:
                        if (y = S.payload, typeof y == "function") {
                            d = y.call(p, d, g);
                            break e;
                        }
                        d = y;
                        break e;
                    case 3: y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = S.payload, g = typeof y == "function" ? y.call(p, d, g) : y, g == null)
                            break e;
                        d = ne({}, d, g);
                        break e;
                    case 2: En = !0;
                }
            }
            s.callback !== null && s.lane !== 0 && (e.flags |= 64, g = o.effects, g === null ? o.effects = [s] : g.push(s));
        }
        else
            p = { eventTime: p, lane: g, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (l = h = p, m = d) : h = h.next = p, r |= g;
        if (s = s.next, s === null) {
            if (s = o.shared.pending, s === null)
                break;
            g = s, s = g.next, g.next = null, o.lastBaseUpdate = g, o.shared.pending = null;
        }
    } while (!0);
    if (h === null && (m = d), o.baseState = m, o.firstBaseUpdate = l, o.lastBaseUpdate = h, n = o.shared.interleaved, n !== null) {
        o = n;
        do
            r |= o.lane, o = o.next;
        while (o !== n);
    }
    else
        a === null && (o.shared.lanes = 0);
    ti |= r, e.lanes = r, e.memoizedState = d;
} }
function Qm(e, n, i) { if (e = n.effects, n.effects = null, e !== null)
    for (n = 0; n < e.length; n++) {
        var t = e[n], o = t.callback;
        if (o !== null) {
            if (t.callback = null, t = i, typeof o != "function")
                throw Error(j(191, o));
            o.call(t);
        }
    } }
var At = {}, sn = Vn(At), Mt = Vn(At), wt = Vn(At);
function Yn(e) { if (e === At)
    throw Error(j(174)); return e; }
function Ls(e, n) { switch (K(wt, n), K(Mt, e), K(sn, At), e = n.nodeType, e) {
    case 9:
    case 11:
        n = (n = n.documentElement) ? n.namespaceURI : ur(null, "");
        break;
    default: e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = ur(n, e);
} Y(sn), K(sn, n); }
function Ri() { Y(sn), Y(Mt), Y(wt); }
function nu(e) { Yn(wt.current); var n = Yn(sn.current), i = ur(n, e.type); n !== i && (K(Mt, e), K(sn, i)); }
function Ds(e) { Mt.current === e && (Y(sn), Y(Mt)); }
var X = Vn(0);
function Ao(e) { for (var n = e; n !== null;) {
    if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!"))
            return n;
    }
    else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128)
            return n;
    }
    else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === e)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === e)
            return null;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} return null; }
var Na = [];
function ks() { for (var e = 0; e < Na.length; e++)
    Na[e]._workInProgressVersionPrimary = null; Na.length = 0; }
var uo = Sn.ReactCurrentDispatcher, Oa = Sn.ReactCurrentBatchConfig, ii = 0, ee = null, me = null, ue = null, No = !1, rt = !1, Tt = 0, Wg = 0;
function ye() { throw Error(j(321)); }
function Fs(e, n) { if (n === null)
    return !1; for (var i = 0; i < n.length && i < e.length; i++)
    if (!en(e[i], n[i]))
        return !1; return !0; }
function Ws(e, n, i, t, o, a) { if (ii = a, ee = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, uo.current = e === null || e.memoizedState === null ? Ng : Og, e = i(t, o), rt) {
    a = 0;
    do {
        if (rt = !1, Tt = 0, 25 <= a)
            throw Error(j(301));
        a += 1, ue = me = null, n.updateQueue = null, uo.current = Bg, e = i(t, o);
    } while (rt);
} if (uo.current = Oo, n = me !== null && me.next !== null, ii = 0, ue = me = ee = null, No = !1, n)
    throw Error(j(300)); return e; }
function Rs() { var e = Tt !== 0; return Tt = 0, e; }
function on() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return ue === null ? ee.memoizedState = ue = e : ue = ue.next = e, ue; }
function Ue() { if (me === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = me.next; var n = ue === null ? ee.memoizedState : ue.next; if (n !== null)
    ue = n, me = e;
else {
    if (e === null)
        throw Error(j(310));
    me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ue === null ? ee.memoizedState = ue = e : ue = ue.next = e;
} return ue; }
function Lt(e, n) { return typeof n == "function" ? n(e) : n; }
function Ba(e) { var n = Ue(), i = n.queue; if (i === null)
    throw Error(j(311)); i.lastRenderedReducer = e; var t = me, o = t.baseQueue, a = i.pending; if (a !== null) {
    if (o !== null) {
        var r = o.next;
        o.next = a.next, a.next = r;
    }
    t.baseQueue = o = a, i.pending = null;
} if (o !== null) {
    a = o.next, t = t.baseState;
    var s = r = null, m = null, l = a;
    do {
        var h = l.lane;
        if ((ii & h) === h)
            m !== null && (m = m.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), t = l.hasEagerState ? l.eagerState : e(t, l.action);
        else {
            var d = { lane: h, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null };
            m === null ? (s = m = d, r = t) : m = m.next = d, ee.lanes |= h, ti |= h;
        }
        l = l.next;
    } while (l !== null && l !== a);
    m === null ? r = t : m.next = s, en(t, n.memoizedState) || (we = !0), n.memoizedState = t, n.baseState = r, n.baseQueue = m, i.lastRenderedState = t;
} if (e = i.interleaved, e !== null) {
    o = e;
    do
        a = o.lane, ee.lanes |= a, ti |= a, o = o.next;
    while (o !== e);
}
else
    o === null && (i.lanes = 0); return [n.memoizedState, i.dispatch]; }
function Ga(e) { var n = Ue(), i = n.queue; if (i === null)
    throw Error(j(311)); i.lastRenderedReducer = e; var t = i.dispatch, o = i.pending, a = n.memoizedState; if (o !== null) {
    i.pending = null;
    var r = o = o.next;
    do
        a = e(a, r.action), r = r.next;
    while (r !== o);
    en(a, n.memoizedState) || (we = !0), n.memoizedState = a, n.baseQueue === null && (n.baseState = a), i.lastRenderedState = a;
} return [a, t]; }
function iu() { }
function tu(e, n) { var i = ee, t = Ue(), o = n(), a = !en(t.memoizedState, o); if (a && (t.memoizedState = o, we = !0), t = t.queue, Hs(ru.bind(null, i, t, e), [e]), t.getSnapshot !== n || a || ue !== null && ue.memoizedState.tag & 1) {
    if (i.flags |= 2048, Dt(9, au.bind(null, i, t, o, n), void 0, null), de === null)
        throw Error(j(349));
    ii & 30 || ou(i, n, o);
} return o; }
function ou(e, n, i) { e.flags |= 16384, e = { getSnapshot: n, value: i }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e)); }
function au(e, n, i, t) { n.value = i, n.getSnapshot = t, su(n) && mu(e); }
function ru(e, n, i) { return i(function () { su(n) && mu(e); }); }
function su(e) { var n = e.getSnapshot; e = e.value; try {
    var i = n();
    return !en(e, i);
}
catch {
    return !0;
} }
function mu(e) { var n = pn(e, 1); n !== null && Xe(n, e, 1, -1); }
function $m(e) { var n = on(); return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lt, lastRenderedState: e }, n.queue = e, e = e.dispatch = Ag.bind(null, ee, e), [n.memoizedState, e]; }
function Dt(e, n, i, t) { return e = { tag: e, create: n, destroy: i, deps: t, next: null }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.lastEffect = e.next = e) : (i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (t = i.next, i.next = e, e.next = t, n.lastEffect = e)), e; }
function lu() { return Ue().memoizedState; }
function ho(e, n, i, t) { var o = on(); ee.flags |= e, o.memoizedState = Dt(1 | n, i, void 0, t === void 0 ? null : t); }
function Xo(e, n, i, t) { var o = Ue(); t = t === void 0 ? null : t; var a = void 0; if (me !== null) {
    var r = me.memoizedState;
    if (a = r.destroy, t !== null && Fs(t, r.deps)) {
        o.memoizedState = Dt(n, i, a, t);
        return;
    }
} ee.flags |= e, o.memoizedState = Dt(1 | n, i, a, t); }
function Km(e, n) { return ho(8390656, 8, e, n); }
function Hs(e, n) { return Xo(2048, 8, e, n); }
function cu(e, n) { return Xo(4, 2, e, n); }
function uu(e, n) { return Xo(4, 4, e, n); }
function du(e, n) { if (typeof n == "function")
    return e = e(), n(e), function () { n(null); }; if (n != null)
    return e = e(), n.current = e, function () { n.current = null; }; }
function hu(e, n, i) { return i = i != null ? i.concat([e]) : null, Xo(4, 4, du.bind(null, n, e), i); }
function As() { }
function gu(e, n) { var i = Ue(); n = n === void 0 ? null : n; var t = i.memoizedState; return t !== null && n !== null && Fs(n, t[1]) ? t[0] : (i.memoizedState = [e, n], e); }
function fu(e, n) { var i = Ue(); n = n === void 0 ? null : n; var t = i.memoizedState; return t !== null && n !== null && Fs(n, t[1]) ? t[0] : (e = e(), i.memoizedState = [e, n], e); }
function pu(e, n, i) { return ii & 21 ? (en(i, n) || (i = vc(), ee.lanes |= i, ti |= i, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, we = !0), e.memoizedState = i); }
function Rg(e, n) { var i = z; z = i !== 0 && 4 > i ? i : 4, e(!0); var t = Oa.transition; Oa.transition = {}; try {
    e(!1), n();
}
finally {
    z = i, Oa.transition = t;
} }
function yu() { return Ue().memoizedState; }
function Hg(e, n, i) { var t = Hn(e); if (i = { lane: t, action: i, hasEagerState: !1, eagerState: null, next: null }, Su(e))
    bu(n, i);
else if (i = Xc(e, n, i, t), i !== null) {
    var o = Ce();
    Xe(i, e, t, o), ju(i, n, t);
} }
function Ag(e, n, i) { var t = Hn(e), o = { lane: t, action: i, hasEagerState: !1, eagerState: null, next: null }; if (Su(e))
    bu(n, o);
else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = n.lastRenderedReducer, a !== null))
        try {
            var r = n.lastRenderedState, s = a(r, i);
            if (o.hasEagerState = !0, o.eagerState = s, en(s, r)) {
                var m = n.interleaved;
                m === null ? (o.next = o, ws(n)) : (o.next = m.next, m.next = o), n.interleaved = o;
                return;
            }
        }
        catch { }
        finally { }
    i = Xc(e, n, o, t), i !== null && (o = Ce(), Xe(i, e, t, o), ju(i, n, t));
} }
function Su(e) { var n = e.alternate; return e === ee || n !== null && n === ee; }
function bu(e, n) { rt = No = !0; var i = e.pending; i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n; }
function ju(e, n, i) { if (i & 4194240) {
    var t = n.lanes;
    t &= e.pendingLanes, i |= t, n.lanes = i, ds(e, i);
} }
var Oo = { readContext: ze, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, Ng = { readContext: ze, useCallback: function (e, n) { return on().memoizedState = [e, n === void 0 ? null : n], e; }, useContext: ze, useEffect: Km, useImperativeHandle: function (e, n, i) { return i = i != null ? i.concat([e]) : null, ho(4194308, 4, du.bind(null, n, e), i); }, useLayoutEffect: function (e, n) { return ho(4194308, 4, e, n); }, useInsertionEffect: function (e, n) { return ho(4, 2, e, n); }, useMemo: function (e, n) { var i = on(); return n = n === void 0 ? null : n, e = e(), i.memoizedState = [e, n], e; }, useReducer: function (e, n, i) { var t = on(); return n = i !== void 0 ? i(n) : n, t.memoizedState = t.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, t.queue = e, e = e.dispatch = Hg.bind(null, ee, e), [t.memoizedState, e]; }, useRef: function (e) { var n = on(); return e = { current: e }, n.memoizedState = e; }, useState: $m, useDebugValue: As, useDeferredValue: function (e) { return on().memoizedState = e; }, useTransition: function () { var e = $m(!1), n = e[0]; return e = Rg.bind(null, e[1]), on().memoizedState = e, [n, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, n, i) { var t = ee, o = on(); if (Z) {
        if (i === void 0)
            throw Error(j(407));
        i = i();
    }
    else {
        if (i = n(), de === null)
            throw Error(j(349));
        ii & 30 || ou(t, n, i);
    } o.memoizedState = i; var a = { value: i, getSnapshot: n }; return o.queue = a, Km(ru.bind(null, t, a, e), [e]), t.flags |= 2048, Dt(9, au.bind(null, t, a, i, n), void 0, null), i; }, useId: function () { var e = on(), n = de.identifierPrefix; if (Z) {
        var i = dn, t = un;
        i = (t & ~(1 << 32 - Ze(t) - 1)).toString(32) + i, n = ":" + n + "R" + i, i = Tt++, 0 < i && (n += "H" + i.toString(32)), n += ":";
    }
    else
        i = Wg++, n = ":" + n + "r" + i.toString(32) + ":"; return e.memoizedState = n; }, unstable_isNewReconciler: !1 }, Og = { readContext: ze, useCallback: gu, useContext: ze, useEffect: Hs, useImperativeHandle: hu, useInsertionEffect: cu, useLayoutEffect: uu, useMemo: fu, useReducer: Ba, useRef: lu, useState: function () { return Ba(Lt); }, useDebugValue: As, useDeferredValue: function (e) { var n = Ue(); return pu(n, me.memoizedState, e); }, useTransition: function () { var e = Ba(Lt)[0], n = Ue().memoizedState; return [e, n]; }, useMutableSource: iu, useSyncExternalStore: tu, useId: yu, unstable_isNewReconciler: !1 }, Bg = { readContext: ze, useCallback: gu, useContext: ze, useEffect: Hs, useImperativeHandle: hu, useInsertionEffect: cu, useLayoutEffect: uu, useMemo: fu, useReducer: Ga, useRef: lu, useState: function () { return Ga(Lt); }, useDebugValue: As, useDeferredValue: function (e) { var n = Ue(); return me === null ? n.memoizedState = e : pu(n, me.memoizedState, e); }, useTransition: function () { var e = Ga(Lt)[0], n = Ue().memoizedState; return [e, n]; }, useMutableSource: iu, useSyncExternalStore: tu, useId: yu, unstable_isNewReconciler: !1 };
function Ke(e, n) { if (e && e.defaultProps) {
    n = ne({}, n), e = e.defaultProps;
    for (var i in e)
        n[i] === void 0 && (n[i] = e[i]);
    return n;
} return n; }
function Wr(e, n, i, t) { n = e.memoizedState, i = i(t, n), i = i == null ? n : ne({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i); }
var ea = { isMounted: function (e) { return (e = e._reactInternals) ? si(e) === e : !1; }, enqueueSetState: function (e, n, i) { e = e._reactInternals; var t = Ce(), o = Hn(e), a = hn(t, o); a.payload = n, i != null && (a.callback = i), n = Wn(e, a, o), n !== null && (Xe(n, e, o, t), co(n, e, o)); }, enqueueReplaceState: function (e, n, i) { e = e._reactInternals; var t = Ce(), o = Hn(e), a = hn(t, o); a.tag = 1, a.payload = n, i != null && (a.callback = i), n = Wn(e, a, o), n !== null && (Xe(n, e, o, t), co(n, e, o)); }, enqueueForceUpdate: function (e, n) { e = e._reactInternals; var i = Ce(), t = Hn(e), o = hn(i, t); o.tag = 2, n != null && (o.callback = n), n = Wn(e, o, t), n !== null && (Xe(n, e, t, i), co(n, e, t)); } };
function qm(e, n, i, t, o, a, r) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(t, a, r) : n.prototype && n.prototype.isPureReactComponent ? !vt(i, t) || !vt(o, a) : !0; }
function vu(e, n, i) { var t = !1, o = xn, a = n.contextType; return typeof a == "object" && a !== null ? a = ze(a) : (o = Le(n) ? ei : je.current, t = n.contextTypes, a = (t = t != null) ? ki(e, o) : xn), n = new n(i, a), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ea, e.stateNode = n, n._reactInternals = e, t && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), n; }
function Jm(e, n, i, t) { e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, t), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, t), n.state !== e && ea.enqueueReplaceState(n, n.state, null); }
function Rr(e, n, i, t) { var o = e.stateNode; o.props = i, o.state = e.memoizedState, o.refs = {}, Ts(e); var a = n.contextType; typeof a == "object" && a !== null ? o.context = ze(a) : (a = Le(n) ? ei : je.current, o.context = ki(e, a)), o.state = e.memoizedState, a = n.getDerivedStateFromProps, typeof a == "function" && (Wr(e, n, a, i), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (n = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), n !== o.state && ea.enqueueReplaceState(o, o.state, null), Ho(e, i, o, t), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308); }
function Hi(e, n) {
    try {
        var i = "", t = n;
        do
            i += dh(t), t = t.return;
        while (t);
        var o = i;
    }
    catch (a) {
        o = `
Error generating stack: ` + a.message + `
` + a.stack;
    }
    return { value: e, source: n, stack: o, digest: null };
}
function Ia(e, n, i) { return { value: e, source: null, stack: i ?? null, digest: n ?? null }; }
function Hr(e, n) { try {
    console.error(n.value);
}
catch (i) {
    setTimeout(function () { throw i; });
} }
var Gg = typeof WeakMap == "function" ? WeakMap : Map;
function Cu(e, n, i) { i = hn(-1, i), i.tag = 3, i.payload = { element: null }; var t = n.value; return i.callback = function () { Go || (Go = !0, zr = t), Hr(e, n); }, i; }
function Eu(e, n, i) { i = hn(-1, i), i.tag = 3; var t = e.type.getDerivedStateFromError; if (typeof t == "function") {
    var o = n.value;
    i.payload = function () { return t(o); }, i.callback = function () { Hr(e, n); };
} var a = e.stateNode; return a !== null && typeof a.componentDidCatch == "function" && (i.callback = function () { Hr(e, n), typeof t != "function" && (Rn === null ? Rn = new Set([this]) : Rn.add(this)); var r = n.stack; this.componentDidCatch(n.value, { componentStack: r !== null ? r : "" }); }), i; }
function Ym(e, n, i) { var t = e.pingCache; if (t === null) {
    t = e.pingCache = new Gg;
    var o = new Set;
    t.set(n, o);
}
else
    o = t.get(n), o === void 0 && (o = new Set, t.set(n, o)); o.has(i) || (o.add(i), e = Xg.bind(null, e, n, i), n.then(e, e)); }
function Zm(e) { do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
    e = e.return;
} while (e !== null); return null; }
function Xm(e, n, i, t, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (n = hn(-1, 1), n.tag = 2, Wn(i, n, 1))), i.lanes |= 1), e); }
var Ig = Sn.ReactCurrentOwner, we = !1;
function ve(e, n, i, t) { n.child = e === null ? Zc(n, null, i, t) : Wi(n, e.child, i, t); }
function el(e, n, i, t, o) { i = i.render; var a = n.ref; return Ti(n, o), t = Ws(e, n, i, t, a, o), i = Rs(), e !== null && !we ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o, yn(e, n, o)) : (Z && i && js(n), n.flags |= 1, ve(e, n, t, o), n.child); }
function nl(e, n, i, t, o) { if (e === null) {
    var a = i.type;
    return typeof a == "function" && !Vs(a) && a.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (n.tag = 15, n.type = a, Pu(e, n, a, t, o)) : (e = yo(i.type, null, t, n, n.mode, o), e.ref = n.ref, e.return = n, n.child = e);
} if (a = e.child, !(e.lanes & o)) {
    var r = a.memoizedProps;
    if (i = i.compare, i = i !== null ? i : vt, i(r, t) && e.ref === n.ref)
        return yn(e, n, o);
} return n.flags |= 1, e = An(a, t), e.ref = n.ref, e.return = n, n.child = e; }
function Pu(e, n, i, t, o) { if (e !== null) {
    var a = e.memoizedProps;
    if (vt(a, t) && e.ref === n.ref)
        if (we = !1, n.pendingProps = t = a, (e.lanes & o) !== 0)
            e.flags & 131072 && (we = !0);
        else
            return n.lanes = e.lanes, yn(e, n, o);
} return Ar(e, n, i, t, o); }
function Mu(e, n, i) { var t = n.pendingProps, o = t.children, a = e !== null ? e.memoizedState : null; if (t.mode === "hidden")
    if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Ci, Fe), Fe |= i;
    else {
        if (!(i & 1073741824))
            return e = a !== null ? a.baseLanes | i : i, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, K(Ci, Fe), Fe |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, t = a !== null ? a.baseLanes : i, K(Ci, Fe), Fe |= t;
    }
else
    a !== null ? (t = a.baseLanes | i, n.memoizedState = null) : t = i, K(Ci, Fe), Fe |= t; return ve(e, n, o, i), n.child; }
function wu(e, n) { var i = n.ref; (e === null && i !== null || e !== null && e.ref !== i) && (n.flags |= 512, n.flags |= 2097152); }
function Ar(e, n, i, t, o) { var a = Le(i) ? ei : je.current; return a = ki(n, a), Ti(n, o), i = Ws(e, n, i, t, a, o), t = Rs(), e !== null && !we ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o, yn(e, n, o)) : (Z && t && js(n), n.flags |= 1, ve(e, n, i, o), n.child); }
function il(e, n, i, t, o) { if (Le(i)) {
    var a = !0;
    Do(n);
}
else
    a = !1; if (Ti(n, o), n.stateNode === null)
    go(e, n), vu(n, i, t), Rr(n, i, t, o), t = !0;
else if (e === null) {
    var r = n.stateNode, s = n.memoizedProps;
    r.props = s;
    var m = r.context, l = i.contextType;
    typeof l == "object" && l !== null ? l = ze(l) : (l = Le(i) ? ei : je.current, l = ki(n, l));
    var h = i.getDerivedStateFromProps, d = typeof h == "function" || typeof r.getSnapshotBeforeUpdate == "function";
    d || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (s !== t || m !== l) && Jm(n, r, t, l), En = !1;
    var g = n.memoizedState;
    r.state = g, Ho(n, t, r, o), m = n.memoizedState, s !== t || g !== m || Te.current || En ? (typeof h == "function" && (Wr(n, i, h, t), m = n.memoizedState), (s = En || qm(n, i, s, t, g, m, l)) ? (d || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = t, n.memoizedState = m), r.props = t, r.state = m, r.context = l, t = s) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), t = !1);
}
else {
    r = n.stateNode, eu(e, n), s = n.memoizedProps, l = n.type === n.elementType ? s : Ke(n.type, s), r.props = l, d = n.pendingProps, g = r.context, m = i.contextType, typeof m == "object" && m !== null ? m = ze(m) : (m = Le(i) ? ei : je.current, m = ki(n, m));
    var p = i.getDerivedStateFromProps;
    (h = typeof p == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (s !== d || g !== m) && Jm(n, r, t, m), En = !1, g = n.memoizedState, r.state = g, Ho(n, t, r, o);
    var y = n.memoizedState;
    s !== d || g !== y || Te.current || En ? (typeof p == "function" && (Wr(n, i, p, t), y = n.memoizedState), (l = En || qm(n, i, l, t, g, y, m) || !1) ? (h || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(t, y, m), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(t, y, m)), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (n.flags |= 1024), n.memoizedProps = t, n.memoizedState = y), r.props = t, r.state = y, r.context = m, t = l) : (typeof r.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (n.flags |= 1024), t = !1);
} return Nr(e, n, i, t, a, o); }
function Nr(e, n, i, t, o, a) { wu(e, n); var r = (n.flags & 128) !== 0; if (!t && !r)
    return o && xm(n, i, !1), yn(e, n, a); t = n.stateNode, Ig.current = n; var s = r && typeof i.getDerivedStateFromError != "function" ? null : t.render(); return n.flags |= 1, e !== null && r ? (n.child = Wi(n, e.child, null, a), n.child = Wi(n, null, s, a)) : ve(e, n, s, a), n.memoizedState = t.state, o && xm(n, i, !0), n.child; }
function Tu(e) { var n = e.stateNode; n.pendingContext ? Im(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Im(e, n.context, !1), Ls(e, n.containerInfo); }
function tl(e, n, i, t, o) { return Fi(), Cs(o), n.flags |= 256, ve(e, n, i, t), n.child; }
var Or = { dehydrated: null, treeContext: null, retryLane: 0 };
function Br(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function Lu(e, n, i) { var t = n.pendingProps, o = X.current, a = !1, r = (n.flags & 128) !== 0, s; if ((s = r) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (a = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(X, o & 1), e === null)
    return kr(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (r = t.children, e = t.fallback, a ? (t = n.mode, a = n.child, r = { mode: "hidden", children: r }, !(t & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = r) : a = ta(r, t, 0, null), e = Xn(e, t, i, null), a.return = n, e.return = n, a.sibling = e, n.child = a, n.child.memoizedState = Br(i), n.memoizedState = Or, e) : Ns(n, r)); if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return xg(e, n, r, t, s, o, i); if (a) {
    a = t.fallback, r = n.mode, o = e.child, s = o.sibling;
    var m = { mode: "hidden", children: t.children };
    return !(r & 1) && n.child !== o ? (t = n.child, t.childLanes = 0, t.pendingProps = m, n.deletions = null) : (t = An(o, m), t.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? a = An(s, a) : (a = Xn(a, r, i, null), a.flags |= 2), a.return = n, t.return = n, t.sibling = a, n.child = t, t = a, a = n.child, r = e.child.memoizedState, r = r === null ? Br(i) : { baseLanes: r.baseLanes | i, cachePool: null, transitions: r.transitions }, a.memoizedState = r, a.childLanes = e.childLanes & ~i, n.memoizedState = Or, t;
} return a = e.child, e = a.sibling, t = An(a, { mode: "visible", children: t.children }), !(n.mode & 1) && (t.lanes = i), t.return = n, t.sibling = null, e !== null && (i = n.deletions, i === null ? (n.deletions = [e], n.flags |= 16) : i.push(e)), n.child = t, n.memoizedState = null, t; }
function Ns(e, n) { return n = ta({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n; }
function Jt(e, n, i, t) { return t !== null && Cs(t), Wi(n, e.child, null, i), e = Ns(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e; }
function xg(e, n, i, t, o, a, r) { if (i)
    return n.flags & 256 ? (n.flags &= -257, t = Ia(Error(j(422))), Jt(e, n, r, t)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (a = t.fallback, o = n.mode, t = ta({ mode: "visible", children: t.children }, o, 0, null), a = Xn(a, o, r, null), a.flags |= 2, t.return = n, a.return = n, t.sibling = a, n.child = t, n.mode & 1 && Wi(n, e.child, null, r), n.child.memoizedState = Br(r), n.memoizedState = Or, a); if (!(n.mode & 1))
    return Jt(e, n, r, null); if (o.data === "$!") {
    if (t = o.nextSibling && o.nextSibling.dataset, t)
        var s = t.dgst;
    return t = s, a = Error(j(419)), t = Ia(a, t, void 0), Jt(e, n, r, t);
} if (s = (r & e.childLanes) !== 0, we || s) {
    if (t = de, t !== null) {
        switch (r & -r) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default: o = 0;
        }
        o = o & (t.suspendedLanes | r) ? 0 : o, o !== 0 && o !== a.retryLane && (a.retryLane = o, pn(e, o), Xe(t, e, o, -1));
    }
    return _s(), t = Ia(Error(j(421))), Jt(e, n, r, t);
} return o.data === "$?" ? (n.flags |= 128, n.child = e.child, n = ef.bind(null, e), o._reactRetry = n, null) : (e = a.treeContext, We = Fn(o.nextSibling), Re = n, Z = !0, Je = null, e !== null && (Ge[Ie++] = un, Ge[Ie++] = dn, Ge[Ie++] = ni, un = e.id, dn = e.overflow, ni = n), n = Ns(n, t.children), n.flags |= 4096, n); }
function ol(e, n, i) { e.lanes |= n; var t = e.alternate; t !== null && (t.lanes |= n), Fr(e.return, n, i); }
function xa(e, n, i, t, o) { var a = e.memoizedState; a === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: t, tail: i, tailMode: o } : (a.isBackwards = n, a.rendering = null, a.renderingStartTime = 0, a.last = t, a.tail = i, a.tailMode = o); }
function Du(e, n, i) { var t = n.pendingProps, o = t.revealOrder, a = t.tail; if (ve(e, n, t.children, i), t = X.current, t & 2)
    t = t & 1 | 2, n.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && ol(e, i, n);
            else if (e.tag === 19)
                ol(e, i, n);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === n)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === n)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    t &= 1;
} if (K(X, t), !(n.mode & 1))
    n.memoizedState = null;
else
    switch (o) {
        case "forwards":
            for (i = n.child, o = null; i !== null;)
                e = i.alternate, e !== null && Ao(e) === null && (o = i), i = i.sibling;
            i = o, i === null ? (o = n.child, n.child = null) : (o = i.sibling, i.sibling = null), xa(n, !1, o, i, a);
            break;
        case "backwards":
            for (i = null, o = n.child, n.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Ao(e) === null) {
                    n.child = o;
                    break;
                }
                e = o.sibling, o.sibling = i, i = o, o = e;
            }
            xa(n, !0, i, null, a);
            break;
        case "together":
            xa(n, !1, null, null, void 0);
            break;
        default: n.memoizedState = null;
    } return n.child; }
function go(e, n) { !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2); }
function yn(e, n, i) { if (e !== null && (n.dependencies = e.dependencies), ti |= n.lanes, !(i & n.childLanes))
    return null; if (e !== null && n.child !== e.child)
    throw Error(j(153)); if (n.child !== null) {
    for (e = n.child, i = An(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null;)
        e = e.sibling, i = i.sibling = An(e, e.pendingProps), i.return = n;
    i.sibling = null;
} return n.child; }
function _g(e, n, i) { switch (n.tag) {
    case 3:
        Tu(n), Fi();
        break;
    case 5:
        nu(n);
        break;
    case 1:
        Le(n.type) && Do(n);
        break;
    case 4:
        Ls(n, n.stateNode.containerInfo);
        break;
    case 10:
        var t = n.type._context, o = n.memoizedProps.value;
        K(Wo, t._currentValue), t._currentValue = o;
        break;
    case 13:
        if (t = n.memoizedState, t !== null)
            return t.dehydrated !== null ? (K(X, X.current & 1), n.flags |= 128, null) : i & n.child.childLanes ? Lu(e, n, i) : (K(X, X.current & 1), e = yn(e, n, i), e !== null ? e.sibling : null);
        K(X, X.current & 1);
        break;
    case 19:
        if (t = (i & n.childLanes) !== 0, e.flags & 128) {
            if (t)
                return Du(e, n, i);
            n.flags |= 128;
        }
        if (o = n.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(X, X.current), t)
            break;
        return null;
    case 22:
    case 23: return n.lanes = 0, Mu(e, n, i);
} return yn(e, n, i); }
var ku, Gr, Fu, Wu;
ku = function (e, n) { for (var i = n.child; i !== null;) {
    if (i.tag === 5 || i.tag === 6)
        e.appendChild(i.stateNode);
    else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
    }
    if (i === n)
        break;
    for (; i.sibling === null;) {
        if (i.return === null || i.return === n)
            return;
        i = i.return;
    }
    i.sibling.return = i.return, i = i.sibling;
} };
Gr = function () { };
Fu = function (e, n, i, t) { var o = e.memoizedProps; if (o !== t) {
    e = n.stateNode, Yn(sn.current);
    var a = null;
    switch (i) {
        case "input":
            o = sr(e, o), t = sr(e, t), a = [];
            break;
        case "select":
            o = ne({}, o, { value: void 0 }), t = ne({}, t, { value: void 0 }), a = [];
            break;
        case "textarea":
            o = cr(e, o), t = cr(e, t), a = [];
            break;
        default: typeof o.onClick != "function" && typeof t.onClick == "function" && (e.onclick = To);
    }
    dr(i, t);
    var r;
    i = null;
    for (l in o)
        if (!t.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
            if (l === "style") {
                var s = o[l];
                for (r in s)
                    s.hasOwnProperty(r) && (i || (i = {}), i[r] = "");
            }
            else
                l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (gt.hasOwnProperty(l) ? a || (a = []) : (a = a || []).push(l, null));
    for (l in t) {
        var m = t[l];
        if (s = o != null ? o[l] : void 0, t.hasOwnProperty(l) && m !== s && (m != null || s != null))
            if (l === "style")
                if (s) {
                    for (r in s)
                        !s.hasOwnProperty(r) || m && m.hasOwnProperty(r) || (i || (i = {}), i[r] = "");
                    for (r in m)
                        m.hasOwnProperty(r) && s[r] !== m[r] && (i || (i = {}), i[r] = m[r]);
                }
                else
                    i || (a || (a = []), a.push(l, i)), i = m;
            else
                l === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, s = s ? s.__html : void 0, m != null && s !== m && (a = a || []).push(l, m)) : l === "children" ? typeof m != "string" && typeof m != "number" || (a = a || []).push(l, "" + m) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (gt.hasOwnProperty(l) ? (m != null && l === "onScroll" && J("scroll", e), a || s === m || (a = [])) : (a = a || []).push(l, m));
    }
    i && (a = a || []).push("style", i);
    var l = a;
    (n.updateQueue = l) && (n.flags |= 4);
} };
Wu = function (e, n, i, t) { i !== t && (n.flags |= 4); };
function $i(e, n) { if (!Z)
    switch (e.tailMode) {
        case "hidden":
            n = e.tail;
            for (var i = null; n !== null;)
                n.alternate !== null && (i = n), n = n.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
        case "collapsed":
            i = e.tail;
            for (var t = null; i !== null;)
                i.alternate !== null && (t = i), i = i.sibling;
            t === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : t.sibling = null;
    } }
function Se(e) { var n = e.alternate !== null && e.alternate.child === e.child, i = 0, t = 0; if (n)
    for (var o = e.child; o !== null;)
        i |= o.lanes | o.childLanes, t |= o.subtreeFlags & 14680064, t |= o.flags & 14680064, o.return = e, o = o.sibling;
else
    for (o = e.child; o !== null;)
        i |= o.lanes | o.childLanes, t |= o.subtreeFlags, t |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= t, e.childLanes = i, n; }
function Vg(e, n, i) { var t = n.pendingProps; switch (vs(n), n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return Se(n), null;
    case 1: return Le(n.type) && Lo(), Se(n), null;
    case 3: return t = n.stateNode, Ri(), Y(Te), Y(je), ks(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (Kt(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Je !== null && ($r(Je), Je = null))), Gr(e, n), Se(n), null;
    case 5:
        Ds(n);
        var o = Yn(wt.current);
        if (i = n.type, e !== null && n.stateNode != null)
            Fu(e, n, i, t, o), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
            if (!t) {
                if (n.stateNode === null)
                    throw Error(j(166));
                return Se(n), null;
            }
            if (e = Yn(sn.current), Kt(n)) {
                t = n.stateNode, i = n.type;
                var a = n.memoizedProps;
                switch (t[an] = n, t[Pt] = a, e = (n.mode & 1) !== 0, i) {
                    case "dialog":
                        J("cancel", t), J("close", t);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        J("load", t);
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < et.length; o++)
                            J(et[o], t);
                        break;
                    case "source":
                        J("error", t);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        J("error", t), J("load", t);
                        break;
                    case "details":
                        J("toggle", t);
                        break;
                    case "input":
                        hm(t, a), J("invalid", t);
                        break;
                    case "select":
                        t._wrapperState = { wasMultiple: !!a.multiple }, J("invalid", t);
                        break;
                    case "textarea": fm(t, a), J("invalid", t);
                }
                dr(i, a), o = null;
                for (var r in a)
                    if (a.hasOwnProperty(r)) {
                        var s = a[r];
                        r === "children" ? typeof s == "string" ? t.textContent !== s && (a.suppressHydrationWarning !== !0 && $t(t.textContent, s, e), o = ["children", s]) : typeof s == "number" && t.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && $t(t.textContent, s, e), o = ["children", "" + s]) : gt.hasOwnProperty(r) && s != null && r === "onScroll" && J("scroll", t);
                    }
                switch (i) {
                    case "input":
                        Gt(t), gm(t, a, !0);
                        break;
                    case "textarea":
                        Gt(t), pm(t);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof a.onClick == "function" && (t.onclick = To);
                }
                t = o, n.updateQueue = t, t !== null && (n.flags |= 4);
            }
            else {
                r = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = rc(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = r.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof t.is == "string" ? e = r.createElement(i, { is: t.is }) : (e = r.createElement(i), i === "select" && (r = e, t.multiple ? r.multiple = !0 : t.size && (r.size = t.size))) : e = r.createElementNS(e, i), e[an] = n, e[Pt] = t, ku(e, n, !1, !1), n.stateNode = e;
                e: {
                    switch (r = hr(i, t), i) {
                        case "dialog":
                            J("cancel", e), J("close", e), o = t;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            J("load", e), o = t;
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < et.length; o++)
                                J(et[o], e);
                            o = t;
                            break;
                        case "source":
                            J("error", e), o = t;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            J("error", e), J("load", e), o = t;
                            break;
                        case "details":
                            J("toggle", e), o = t;
                            break;
                        case "input":
                            hm(e, t), o = sr(e, t), J("invalid", e);
                            break;
                        case "option":
                            o = t;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!t.multiple }, o = ne({}, t, { value: void 0 }), J("invalid", e);
                            break;
                        case "textarea":
                            fm(e, t), o = cr(e, t), J("invalid", e);
                            break;
                        default: o = t;
                    }
                    dr(i, o), s = o;
                    for (a in s)
                        if (s.hasOwnProperty(a)) {
                            var m = s[a];
                            a === "style" ? lc(e, m) : a === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && sc(e, m)) : a === "children" ? typeof m == "string" ? (i !== "textarea" || m !== "") && ft(e, m) : typeof m == "number" && ft(e, "" + m) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (gt.hasOwnProperty(a) ? m != null && a === "onScroll" && J("scroll", e) : m != null && rs(e, a, m, r));
                        }
                    switch (i) {
                        case "input":
                            Gt(e), gm(e, t, !1);
                            break;
                        case "textarea":
                            Gt(e), pm(e);
                            break;
                        case "option":
                            t.value != null && e.setAttribute("value", "" + In(t.value));
                            break;
                        case "select":
                            e.multiple = !!t.multiple, a = t.value, a != null ? Ei(e, !!t.multiple, a, !1) : t.defaultValue != null && Ei(e, !!t.multiple, t.defaultValue, !0);
                            break;
                        default: typeof o.onClick == "function" && (e.onclick = To);
                    }
                    switch (i) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            t = !!t.autoFocus;
                            break e;
                        case "img":
                            t = !0;
                            break e;
                        default: t = !1;
                    }
                }
                t && (n.flags |= 4);
            }
            n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return Se(n), null;
    case 6:
        if (e && n.stateNode != null)
            Wu(e, n, e.memoizedProps, t);
        else {
            if (typeof t != "string" && n.stateNode === null)
                throw Error(j(166));
            if (i = Yn(wt.current), Yn(sn.current), Kt(n)) {
                if (t = n.stateNode, i = n.memoizedProps, t[an] = n, (a = t.nodeValue !== i) && (e = Re, e !== null))
                    switch (e.tag) {
                        case 3:
                            $t(t.nodeValue, i, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && $t(t.nodeValue, i, (e.mode & 1) !== 0);
                    }
                a && (n.flags |= 4);
            }
            else
                t = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(t), t[an] = n, n.stateNode = t;
        }
        return Se(n), null;
    case 13:
        if (Y(X), t = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Z && We !== null && n.mode & 1 && !(n.flags & 128))
                Jc(), Fi(), n.flags |= 98560, a = !1;
            else if (a = Kt(n), t !== null && t.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(j(318));
                    if (a = n.memoizedState, a = a !== null ? a.dehydrated : null, !a)
                        throw Error(j(317));
                    a[an] = n;
                }
                else
                    Fi(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
                Se(n), a = !1;
            }
            else
                Je !== null && ($r(Je), Je = null), a = !0;
            if (!a)
                return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = i, n) : (t = t !== null, t !== (e !== null && e.memoizedState !== null) && t && (n.child.flags |= 8192, n.mode & 1 && (e === null || X.current & 1 ? le === 0 && (le = 3) : _s())), n.updateQueue !== null && (n.flags |= 4), Se(n), null);
    case 4: return Ri(), Gr(e, n), e === null && Ct(n.stateNode.containerInfo), Se(n), null;
    case 10: return Ms(n.type._context), Se(n), null;
    case 17: return Le(n.type) && Lo(), Se(n), null;
    case 19:
        if (Y(X), a = n.memoizedState, a === null)
            return Se(n), null;
        if (t = (n.flags & 128) !== 0, r = a.rendering, r === null)
            if (t)
                $i(a, !1);
            else {
                if (le !== 0 || e !== null && e.flags & 128)
                    for (e = n.child; e !== null;) {
                        if (r = Ao(e), r !== null) {
                            for (n.flags |= 128, $i(a, !1), t = r.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), n.subtreeFlags = 0, t = i, i = n.child; i !== null;)
                                a = i, e = t, a.flags &= 14680066, r = a.alternate, r === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = r.childLanes, a.lanes = r.lanes, a.child = r.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = r.memoizedProps, a.memoizedState = r.memoizedState, a.updateQueue = r.updateQueue, a.type = r.type, e = r.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
                            return K(X, X.current & 1 | 2), n.child;
                        }
                        e = e.sibling;
                    }
                a.tail !== null && ae() > Ai && (n.flags |= 128, t = !0, $i(a, !1), n.lanes = 4194304);
            }
        else {
            if (!t)
                if (e = Ao(r), e !== null) {
                    if (n.flags |= 128, t = !0, i = e.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), $i(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !Z)
                        return Se(n), null;
                }
                else
                    2 * ae() - a.renderingStartTime > Ai && i !== 1073741824 && (n.flags |= 128, t = !0, $i(a, !1), n.lanes = 4194304);
            a.isBackwards ? (r.sibling = n.child, n.child = r) : (i = a.last, i !== null ? i.sibling = r : n.child = r, a.last = r);
        }
        return a.tail !== null ? (n = a.tail, a.rendering = n, a.tail = n.sibling, a.renderingStartTime = ae(), n.sibling = null, i = X.current, K(X, t ? i & 1 | 2 : i & 1), n) : (Se(n), null);
    case 22:
    case 23: return xs(), t = n.memoizedState !== null, e !== null && e.memoizedState !== null !== t && (n.flags |= 8192), t && n.mode & 1 ? Fe & 1073741824 && (Se(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Se(n), null;
    case 24: return null;
    case 25: return null;
} throw Error(j(156, n.tag)); }
function zg(e, n) { switch (vs(n), n.tag) {
    case 1: return Le(n.type) && Lo(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3: return Ri(), Y(Te), Y(je), ks(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5: return Ds(n), null;
    case 13:
        if (Y(X), e = n.memoizedState, e !== null && e.dehydrated !== null) {
            if (n.alternate === null)
                throw Error(j(340));
            Fi();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19: return Y(X), null;
    case 4: return Ri(), null;
    case 10: return Ms(n.type._context), null;
    case 22:
    case 23: return xs(), null;
    case 24: return null;
    default: return null;
} }
var Yt = !1, be = !1, Ug = typeof WeakSet == "function" ? WeakSet : Set, w = null;
function vi(e, n) { var i = e.ref; if (i !== null)
    if (typeof i == "function")
        try {
            i(null);
        }
        catch (t) {
            oe(e, n, t);
        }
    else
        i.current = null; }
function Ir(e, n, i) { try {
    i();
}
catch (t) {
    oe(e, n, t);
} }
var al = !1;
function Qg(e, n) { if (Er = Po, e = Oc(), bs(e)) {
    if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            i = (i = e.ownerDocument) && i.defaultView || window;
            var t = i.getSelection && i.getSelection();
            if (t && t.rangeCount !== 0) {
                i = t.anchorNode;
                var o = t.anchorOffset, a = t.focusNode;
                t = t.focusOffset;
                try {
                    i.nodeType, a.nodeType;
                }
                catch {
                    i = null;
                    break e;
                }
                var r = 0, s = -1, m = -1, l = 0, h = 0, d = e, g = null;
                n: for (;;) {
                    for (var p; d !== i || o !== 0 && d.nodeType !== 3 || (s = r + o), d !== a || t !== 0 && d.nodeType !== 3 || (m = r + t), d.nodeType === 3 && (r += d.nodeValue.length), (p = d.firstChild) !== null;)
                        g = d, d = p;
                    for (;;) {
                        if (d === e)
                            break n;
                        if (g === i && ++l === o && (s = r), g === a && ++h === t && (m = r), (p = d.nextSibling) !== null)
                            break;
                        d = g, g = d.parentNode;
                    }
                    d = p;
                }
                i = s === -1 || m === -1 ? null : { start: s, end: m };
            }
            else
                i = null;
        }
    i = i || { start: 0, end: 0 };
}
else
    i = null; for (Pr = { focusedElem: e, selectionRange: i }, Po = !1, w = n; w !== null;)
    if (n = w, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, w = e;
    else
        for (; w !== null;) {
            n = w;
            try {
                var y = n.alternate;
                if (n.flags & 1024)
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (y !== null) {
                                var S = y.memoizedProps, T = y.memoizedState, u = n.stateNode, c = u.getSnapshotBeforeUpdate(n.elementType === n.type ? S : Ke(n.type, S), T);
                                u.__reactInternalSnapshotBeforeUpdate = c;
                            }
                            break;
                        case 3:
                            var f = n.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(j(163));
                    }
            }
            catch (b) {
                oe(n, n.return, b);
            }
            if (e = n.sibling, e !== null) {
                e.return = n.return, w = e;
                break;
            }
            w = n.return;
        } return y = al, al = !1, y; }
function st(e, n, i) { var t = n.updateQueue; if (t = t !== null ? t.lastEffect : null, t !== null) {
    var o = t = t.next;
    do {
        if ((o.tag & e) === e) {
            var a = o.destroy;
            o.destroy = void 0, a !== void 0 && Ir(n, i, a);
        }
        o = o.next;
    } while (o !== t);
} }
function na(e, n) { if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
        if ((i.tag & e) === e) {
            var t = i.create;
            i.destroy = t();
        }
        i = i.next;
    } while (i !== n);
} }
function xr(e) { var n = e.ref; if (n !== null) {
    var i = e.stateNode;
    switch (e.tag) {
        case 5:
            e = i;
            break;
        default: e = i;
    }
    typeof n == "function" ? n(e) : n.current = e;
} }
function Ru(e) { var n = e.alternate; n !== null && (e.alternate = null, Ru(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[an], delete n[Pt], delete n[Tr], delete n[Lg], delete n[Dg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function Hu(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function rl(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || Hu(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function _r(e, n, i) { var t = e.tag; if (t === 5 || t === 6)
    e = e.stateNode, n ? i.nodeType === 8 ? i.parentNode.insertBefore(e, n) : i.insertBefore(e, n) : (i.nodeType === 8 ? (n = i.parentNode, n.insertBefore(e, i)) : (n = i, n.appendChild(e)), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = To));
else if (t !== 4 && (e = e.child, e !== null))
    for (_r(e, n, i), e = e.sibling; e !== null;)
        _r(e, n, i), e = e.sibling; }
function Vr(e, n, i) { var t = e.tag; if (t === 5 || t === 6)
    e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
else if (t !== 4 && (e = e.child, e !== null))
    for (Vr(e, n, i), e = e.sibling; e !== null;)
        Vr(e, n, i), e = e.sibling; }
var ge = null, qe = !1;
function bn(e, n, i) { for (i = i.child; i !== null;)
    Au(e, n, i), i = i.sibling; }
function Au(e, n, i) { if (rn && typeof rn.onCommitFiberUnmount == "function")
    try {
        rn.onCommitFiberUnmount($o, i);
    }
    catch { } switch (i.tag) {
    case 5: be || vi(i, n);
    case 6:
        var t = ge, o = qe;
        ge = null, bn(e, n, i), ge = t, qe = o, ge !== null && (qe ? (e = ge, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : ge.removeChild(i.stateNode));
        break;
    case 18:
        ge !== null && (qe ? (e = ge, i = i.stateNode, e.nodeType === 8 ? Ha(e.parentNode, i) : e.nodeType === 1 && Ha(e, i), bt(e)) : Ha(ge, i.stateNode));
        break;
    case 4:
        t = ge, o = qe, ge = i.stateNode.containerInfo, qe = !0, bn(e, n, i), ge = t, qe = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!be && (t = i.updateQueue, t !== null && (t = t.lastEffect, t !== null))) {
            o = t = t.next;
            do {
                var a = o, r = a.destroy;
                a = a.tag, r !== void 0 && (a & 2 || a & 4) && Ir(i, n, r), o = o.next;
            } while (o !== t);
        }
        bn(e, n, i);
        break;
    case 1:
        if (!be && (vi(i, n), t = i.stateNode, typeof t.componentWillUnmount == "function"))
            try {
                t.props = i.memoizedProps, t.state = i.memoizedState, t.componentWillUnmount();
            }
            catch (s) {
                oe(i, n, s);
            }
        bn(e, n, i);
        break;
    case 21:
        bn(e, n, i);
        break;
    case 22:
        i.mode & 1 ? (be = (t = be) || i.memoizedState !== null, bn(e, n, i), be = t) : bn(e, n, i);
        break;
    default: bn(e, n, i);
} }
function sl(e) { var n = e.updateQueue; if (n !== null) {
    e.updateQueue = null;
    var i = e.stateNode;
    i === null && (i = e.stateNode = new Ug), n.forEach(function (t) { var o = nf.bind(null, e, t); i.has(t) || (i.add(t), t.then(o, o)); });
} }
function $e(e, n) { var i = n.deletions; if (i !== null)
    for (var t = 0; t < i.length; t++) {
        var o = i[t];
        try {
            var a = e, r = n, s = r;
            e: for (; s !== null;) {
                switch (s.tag) {
                    case 5:
                        ge = s.stateNode, qe = !1;
                        break e;
                    case 3:
                        ge = s.stateNode.containerInfo, qe = !0;
                        break e;
                    case 4:
                        ge = s.stateNode.containerInfo, qe = !0;
                        break e;
                }
                s = s.return;
            }
            if (ge === null)
                throw Error(j(160));
            Au(a, r, o), ge = null, qe = !1;
            var m = o.alternate;
            m !== null && (m.return = null), o.return = null;
        }
        catch (l) {
            oe(o, n, l);
        }
    } if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null;)
        Nu(n, e), n = n.sibling; }
function Nu(e, n) { var i = e.alternate, t = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if ($e(n, e), tn(e), t & 4) {
            try {
                st(3, e, e.return), na(3, e);
            }
            catch (S) {
                oe(e, e.return, S);
            }
            try {
                st(5, e, e.return);
            }
            catch (S) {
                oe(e, e.return, S);
            }
        }
        break;
    case 1:
        $e(n, e), tn(e), t & 512 && i !== null && vi(i, i.return);
        break;
    case 5:
        if ($e(n, e), tn(e), t & 512 && i !== null && vi(i, i.return), e.flags & 32) {
            var o = e.stateNode;
            try {
                ft(o, "");
            }
            catch (S) {
                oe(e, e.return, S);
            }
        }
        if (t & 4 && (o = e.stateNode, o != null)) {
            var a = e.memoizedProps, r = i !== null ? i.memoizedProps : a, s = e.type, m = e.updateQueue;
            if (e.updateQueue = null, m !== null)
                try {
                    s === "input" && a.type === "radio" && a.name != null && oc(o, a), hr(s, r);
                    var l = hr(s, a);
                    for (r = 0; r < m.length; r += 2) {
                        var h = m[r], d = m[r + 1];
                        h === "style" ? lc(o, d) : h === "dangerouslySetInnerHTML" ? sc(o, d) : h === "children" ? ft(o, d) : rs(o, h, d, l);
                    }
                    switch (s) {
                        case "input":
                            mr(o, a);
                            break;
                        case "textarea":
                            ac(o, a);
                            break;
                        case "select":
                            var g = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!a.multiple;
                            var p = a.value;
                            p != null ? Ei(o, !!a.multiple, p, !1) : g !== !!a.multiple && (a.defaultValue != null ? Ei(o, !!a.multiple, a.defaultValue, !0) : Ei(o, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    o[Pt] = a;
                }
                catch (S) {
                    oe(e, e.return, S);
                }
        }
        break;
    case 6:
        if ($e(n, e), tn(e), t & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode, a = e.memoizedProps;
            try {
                o.nodeValue = a;
            }
            catch (S) {
                oe(e, e.return, S);
            }
        }
        break;
    case 3:
        if ($e(n, e), tn(e), t & 4 && i !== null && i.memoizedState.isDehydrated)
            try {
                bt(n.containerInfo);
            }
            catch (S) {
                oe(e, e.return, S);
            }
        break;
    case 4:
        $e(n, e), tn(e);
        break;
    case 13:
        $e(n, e), tn(e), o = e.child, o.flags & 8192 && (a = o.memoizedState !== null, o.stateNode.isHidden = a, !a || o.alternate !== null && o.alternate.memoizedState !== null || (Gs = ae())), t & 4 && sl(e);
        break;
    case 22:
        if (h = i !== null && i.memoizedState !== null, e.mode & 1 ? (be = (l = be) || h, $e(n, e), be = l) : $e(n, e), tn(e), t & 8192) {
            if (l = e.memoizedState !== null, (e.stateNode.isHidden = l) && !h && e.mode & 1)
                for (w = e, h = e.child; h !== null;) {
                    for (d = w = h; w !== null;) {
                        switch (g = w, p = g.child, g.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                st(4, g, g.return);
                                break;
                            case 1:
                                vi(g, g.return);
                                var y = g.stateNode;
                                if (typeof y.componentWillUnmount == "function") {
                                    t = g, i = g.return;
                                    try {
                                        n = t, y.props = n.memoizedProps, y.state = n.memoizedState, y.componentWillUnmount();
                                    }
                                    catch (S) {
                                        oe(t, i, S);
                                    }
                                }
                                break;
                            case 5:
                                vi(g, g.return);
                                break;
                            case 22: if (g.memoizedState !== null) {
                                ll(d);
                                continue;
                            }
                        }
                        p !== null ? (p.return = g, w = p) : ll(d);
                    }
                    h = h.sibling;
                }
            e: for (h = null, d = e;;) {
                if (d.tag === 5) {
                    if (h === null) {
                        h = d;
                        try {
                            o = d.stateNode, l ? (a = o.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = d.stateNode, m = d.memoizedProps.style, r = m != null && m.hasOwnProperty("display") ? m.display : null, s.style.display = mc("display", r));
                        }
                        catch (S) {
                            oe(e, e.return, S);
                        }
                    }
                }
                else if (d.tag === 6) {
                    if (h === null)
                        try {
                            d.stateNode.nodeValue = l ? "" : d.memoizedProps;
                        }
                        catch (S) {
                            oe(e, e.return, S);
                        }
                }
                else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d, d = d.child;
                    continue;
                }
                if (d === e)
                    break e;
                for (; d.sibling === null;) {
                    if (d.return === null || d.return === e)
                        break e;
                    h === d && (h = null), d = d.return;
                }
                h === d && (h = null), d.sibling.return = d.return, d = d.sibling;
            }
        }
        break;
    case 19:
        $e(n, e), tn(e), t & 4 && sl(e);
        break;
    case 21: break;
    default: $e(n, e), tn(e);
} }
function tn(e) { var n = e.flags; if (n & 2) {
    try {
        e: {
            for (var i = e.return; i !== null;) {
                if (Hu(i)) {
                    var t = i;
                    break e;
                }
                i = i.return;
            }
            throw Error(j(160));
        }
        switch (t.tag) {
            case 5:
                var o = t.stateNode;
                t.flags & 32 && (ft(o, ""), t.flags &= -33);
                var a = rl(e);
                Vr(e, a, o);
                break;
            case 3:
            case 4:
                var r = t.stateNode.containerInfo, s = rl(e);
                _r(e, s, r);
                break;
            default: throw Error(j(161));
        }
    }
    catch (m) {
        oe(e, e.return, m);
    }
    e.flags &= -3;
} n & 4096 && (e.flags &= -4097); }
function $g(e, n, i) { w = e, Ou(e); }
function Ou(e, n, i) { for (var t = (e.mode & 1) !== 0; w !== null;) {
    var o = w, a = o.child;
    if (o.tag === 22 && t) {
        var r = o.memoizedState !== null || Yt;
        if (!r) {
            var s = o.alternate, m = s !== null && s.memoizedState !== null || be;
            s = Yt;
            var l = be;
            if (Yt = r, (be = m) && !l)
                for (w = o; w !== null;)
                    r = w, m = r.child, r.tag === 22 && r.memoizedState !== null ? cl(o) : m !== null ? (m.return = r, w = m) : cl(o);
            for (; a !== null;)
                w = a, Ou(a), a = a.sibling;
            w = o, Yt = s, be = l;
        }
        ml(e);
    }
    else
        o.subtreeFlags & 8772 && a !== null ? (a.return = o, w = a) : ml(e);
} }
function ml(e) { for (; w !== null;) {
    var n = w;
    if (n.flags & 8772) {
        var i = n.alternate;
        try {
            if (n.flags & 8772)
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        be || na(5, n);
                        break;
                    case 1:
                        var t = n.stateNode;
                        if (n.flags & 4 && !be)
                            if (i === null)
                                t.componentDidMount();
                            else {
                                var o = n.elementType === n.type ? i.memoizedProps : Ke(n.type, i.memoizedProps);
                                t.componentDidUpdate(o, i.memoizedState, t.__reactInternalSnapshotBeforeUpdate);
                            }
                        var a = n.updateQueue;
                        a !== null && Qm(n, a, t);
                        break;
                    case 3:
                        var r = n.updateQueue;
                        if (r !== null) {
                            if (i = null, n.child !== null)
                                switch (n.child.tag) {
                                    case 5:
                                        i = n.child.stateNode;
                                        break;
                                    case 1: i = n.child.stateNode;
                                }
                            Qm(n, r, i);
                        }
                        break;
                    case 5:
                        var s = n.stateNode;
                        if (i === null && n.flags & 4) {
                            i = s;
                            var m = n.memoizedProps;
                            switch (n.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    m.autoFocus && i.focus();
                                    break;
                                case "img": m.src && (i.src = m.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (n.memoizedState === null) {
                            var l = n.alternate;
                            if (l !== null) {
                                var h = l.memoizedState;
                                if (h !== null) {
                                    var d = h.dehydrated;
                                    d !== null && bt(d);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(j(163));
                }
            be || n.flags & 512 && xr(n);
        }
        catch (g) {
            oe(n, n.return, g);
        }
    }
    if (n === e) {
        w = null;
        break;
    }
    if (i = n.sibling, i !== null) {
        i.return = n.return, w = i;
        break;
    }
    w = n.return;
} }
function ll(e) { for (; w !== null;) {
    var n = w;
    if (n === e) {
        w = null;
        break;
    }
    var i = n.sibling;
    if (i !== null) {
        i.return = n.return, w = i;
        break;
    }
    w = n.return;
} }
function cl(e) { for (; w !== null;) {
    var n = w;
    try {
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                var i = n.return;
                try {
                    na(4, n);
                }
                catch (m) {
                    oe(n, i, m);
                }
                break;
            case 1:
                var t = n.stateNode;
                if (typeof t.componentDidMount == "function") {
                    var o = n.return;
                    try {
                        t.componentDidMount();
                    }
                    catch (m) {
                        oe(n, o, m);
                    }
                }
                var a = n.return;
                try {
                    xr(n);
                }
                catch (m) {
                    oe(n, a, m);
                }
                break;
            case 5:
                var r = n.return;
                try {
                    xr(n);
                }
                catch (m) {
                    oe(n, r, m);
                }
        }
    }
    catch (m) {
        oe(n, n.return, m);
    }
    if (n === e) {
        w = null;
        break;
    }
    var s = n.sibling;
    if (s !== null) {
        s.return = n.return, w = s;
        break;
    }
    w = n.return;
} }
var Kg = Math.ceil, Bo = Sn.ReactCurrentDispatcher, Os = Sn.ReactCurrentOwner, Ve = Sn.ReactCurrentBatchConfig, V = 0, de = null, se = null, fe = 0, Fe = 0, Ci = Vn(0), le = 0, kt = null, ti = 0, ia = 0, Bs = 0, mt = null, Me = null, Gs = 0, Ai = 1 / 0, ln = null, Go = !1, zr = null, Rn = null, Zt = !1, Tn = null, Io = 0, lt = 0, Ur = null, fo = -1, po = 0;
function Ce() { return V & 6 ? ae() : fo !== -1 ? fo : fo = ae(); }
function Hn(e) { return e.mode & 1 ? V & 2 && fe !== 0 ? fe & -fe : Fg.transition !== null ? (po === 0 && (po = vc()), po) : (e = z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lc(e.type)), e) : 1; }
function Xe(e, n, i, t) { if (50 < lt)
    throw lt = 0, Ur = null, Error(j(185)); Wt(e, i, t), (!(V & 2) || e !== de) && (e === de && (!(V & 2) && (ia |= i), le === 4 && Mn(e, fe)), De(e, t), i === 1 && V === 0 && !(n.mode & 1) && (Ai = ae() + 500, Zo && zn())); }
function De(e, n) { var i = e.callbackNode; Fh(e, n); var t = Eo(e, e === de ? fe : 0); if (t === 0)
    i !== null && bm(i), e.callbackNode = null, e.callbackPriority = 0;
else if (n = t & -t, e.callbackPriority !== n) {
    if (i != null && bm(i), n === 1)
        e.tag === 0 ? kg(ul.bind(null, e)) : $c(ul.bind(null, e)), wg(function () { !(V & 6) && zn(); }), i = null;
    else {
        switch (Cc(t)) {
            case 1:
                i = us;
                break;
            case 4:
                i = bc;
                break;
            case 16:
                i = Co;
                break;
            case 536870912:
                i = jc;
                break;
            default: i = Co;
        }
        i = Uu(i, Bu.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = i;
} }
function Bu(e, n) { if (fo = -1, po = 0, V & 6)
    throw Error(j(327)); var i = e.callbackNode; if (Li() && e.callbackNode !== i)
    return null; var t = Eo(e, e === de ? fe : 0); if (t === 0)
    return null; if (t & 30 || t & e.expiredLanes || n)
    n = xo(e, t);
else {
    n = t;
    var o = V;
    V |= 2;
    var a = Iu();
    (de !== e || fe !== n) && (ln = null, Ai = ae() + 500, Zn(e, n));
    do
        try {
            Yg();
            break;
        }
        catch (s) {
            Gu(e, s);
        }
    while (!0);
    Ps(), Bo.current = a, V = o, se !== null ? n = 0 : (de = null, fe = 0, n = le);
} if (n !== 0) {
    if (n === 2 && (o = Sr(e), o !== 0 && (t = o, n = Qr(e, o))), n === 1)
        throw i = kt, Zn(e, 0), Mn(e, t), De(e, ae()), i;
    if (n === 6)
        Mn(e, t);
    else {
        if (o = e.current.alternate, !(t & 30) && !qg(o) && (n = xo(e, t), n === 2 && (a = Sr(e), a !== 0 && (t = a, n = Qr(e, a))), n === 1))
            throw i = kt, Zn(e, 0), Mn(e, t), De(e, ae()), i;
        switch (e.finishedWork = o, e.finishedLanes = t, n) {
            case 0:
            case 1: throw Error(j(345));
            case 2:
                Kn(e, Me, ln);
                break;
            case 3:
                if (Mn(e, t), (t & 130023424) === t && (n = Gs + 500 - ae(), 10 < n)) {
                    if (Eo(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes, (o & t) !== t) {
                        Ce(), e.pingedLanes |= e.suspendedLanes & o;
                        break;
                    }
                    e.timeoutHandle = wr(Kn.bind(null, e, Me, ln), n);
                    break;
                }
                Kn(e, Me, ln);
                break;
            case 4:
                if (Mn(e, t), (t & 4194240) === t)
                    break;
                for (n = e.eventTimes, o = -1; 0 < t;) {
                    var r = 31 - Ze(t);
                    a = 1 << r, r = n[r], r > o && (o = r), t &= ~a;
                }
                if (t = o, t = ae() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3e3 > t ? 3e3 : 4320 > t ? 4320 : 1960 * Kg(t / 1960)) - t, 10 < t) {
                    e.timeoutHandle = wr(Kn.bind(null, e, Me, ln), t);
                    break;
                }
                Kn(e, Me, ln);
                break;
            case 5:
                Kn(e, Me, ln);
                break;
            default: throw Error(j(329));
        }
    }
} return De(e, ae()), e.callbackNode === i ? Bu.bind(null, e) : null; }
function Qr(e, n) { var i = mt; return e.current.memoizedState.isDehydrated && (Zn(e, n).flags |= 256), e = xo(e, n), e !== 2 && (n = Me, Me = i, n !== null && $r(n)), e; }
function $r(e) { Me === null ? Me = e : Me.push.apply(Me, e); }
function qg(e) { for (var n = e;;) {
    if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && (i = i.stores, i !== null))
            for (var t = 0; t < i.length; t++) {
                var o = i[t], a = o.getSnapshot;
                o = o.value;
                try {
                    if (!en(a(), o))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
    }
    if (i = n.child, n.subtreeFlags & 16384 && i !== null)
        i.return = n, n = i;
    else {
        if (n === e)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e)
                return !0;
            n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
    }
} return !0; }
function Mn(e, n) { for (n &= ~Bs, n &= ~ia, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
    var i = 31 - Ze(n), t = 1 << i;
    e[i] = -1, n &= ~t;
} }
function ul(e) { if (V & 6)
    throw Error(j(327)); Li(); var n = Eo(e, 0); if (!(n & 1))
    return De(e, ae()), null; var i = xo(e, n); if (e.tag !== 0 && i === 2) {
    var t = Sr(e);
    t !== 0 && (n = t, i = Qr(e, t));
} if (i === 1)
    throw i = kt, Zn(e, 0), Mn(e, n), De(e, ae()), i; if (i === 6)
    throw Error(j(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = n, Kn(e, Me, ln), De(e, ae()), null; }
function Is(e, n) { var i = V; V |= 1; try {
    return e(n);
}
finally {
    V = i, V === 0 && (Ai = ae() + 500, Zo && zn());
} }
function oi(e) { Tn !== null && Tn.tag === 0 && !(V & 6) && Li(); var n = V; V |= 1; var i = Ve.transition, t = z; try {
    if (Ve.transition = null, z = 1, e)
        return e();
}
finally {
    z = t, Ve.transition = i, V = n, !(V & 6) && zn();
} }
function xs() { Fe = Ci.current, Y(Ci); }
function Zn(e, n) { e.finishedWork = null, e.finishedLanes = 0; var i = e.timeoutHandle; if (i !== -1 && (e.timeoutHandle = -1, Mg(i)), se !== null)
    for (i = se.return; i !== null;) {
        var t = i;
        switch (vs(t), t.tag) {
            case 1:
                t = t.type.childContextTypes, t != null && Lo();
                break;
            case 3:
                Ri(), Y(Te), Y(je), ks();
                break;
            case 5:
                Ds(t);
                break;
            case 4:
                Ri();
                break;
            case 13:
                Y(X);
                break;
            case 19:
                Y(X);
                break;
            case 10:
                Ms(t.type._context);
                break;
            case 22:
            case 23: xs();
        }
        i = i.return;
    } if (de = e, se = e = An(e.current, null), fe = Fe = n, le = 0, kt = null, Bs = ia = ti = 0, Me = mt = null, Jn !== null) {
    for (n = 0; n < Jn.length; n++)
        if (i = Jn[n], t = i.interleaved, t !== null) {
            i.interleaved = null;
            var o = t.next, a = i.pending;
            if (a !== null) {
                var r = a.next;
                a.next = o, t.next = r;
            }
            i.pending = t;
        }
    Jn = null;
} return e; }
function Gu(e, n) { do {
    var i = se;
    try {
        if (Ps(), uo.current = Oo, No) {
            for (var t = ee.memoizedState; t !== null;) {
                var o = t.queue;
                o !== null && (o.pending = null), t = t.next;
            }
            No = !1;
        }
        if (ii = 0, ue = me = ee = null, rt = !1, Tt = 0, Os.current = null, i === null || i.return === null) {
            le = 1, kt = n, se = null;
            break;
        }
        e: {
            var a = e, r = i.return, s = i, m = n;
            if (n = fe, s.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
                var l = m, h = s, d = h.tag;
                if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                    var g = h.alternate;
                    g ? (h.updateQueue = g.updateQueue, h.memoizedState = g.memoizedState, h.lanes = g.lanes) : (h.updateQueue = null, h.memoizedState = null);
                }
                var p = Zm(r);
                if (p !== null) {
                    p.flags &= -257, Xm(p, r, s, a, n), p.mode & 1 && Ym(a, l, n), n = p, m = l;
                    var y = n.updateQueue;
                    if (y === null) {
                        var S = new Set;
                        S.add(m), n.updateQueue = S;
                    }
                    else
                        y.add(m);
                    break e;
                }
                else {
                    if (!(n & 1)) {
                        Ym(a, l, n), _s();
                        break e;
                    }
                    m = Error(j(426));
                }
            }
            else if (Z && s.mode & 1) {
                var T = Zm(r);
                if (T !== null) {
                    !(T.flags & 65536) && (T.flags |= 256), Xm(T, r, s, a, n), Cs(Hi(m, s));
                    break e;
                }
            }
            a = m = Hi(m, s), le !== 4 && (le = 2), mt === null ? mt = [a] : mt.push(a), a = r;
            do {
                switch (a.tag) {
                    case 3:
                        a.flags |= 65536, n &= -n, a.lanes |= n;
                        var u = Cu(a, m, n);
                        Um(a, u);
                        break e;
                    case 1:
                        s = m;
                        var c = a.type, f = a.stateNode;
                        if (!(a.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Rn === null || !Rn.has(f)))) {
                            a.flags |= 65536, n &= -n, a.lanes |= n;
                            var b = Eu(a, s, n);
                            Um(a, b);
                            break e;
                        }
                }
                a = a.return;
            } while (a !== null);
        }
        _u(i);
    }
    catch (P) {
        n = P, se === i && i !== null && (se = i = i.return);
        continue;
    }
    break;
} while (!0); }
function Iu() { var e = Bo.current; return Bo.current = Oo, e === null ? Oo : e; }
function _s() { (le === 0 || le === 3 || le === 2) && (le = 4), de === null || !(ti & 268435455) && !(ia & 268435455) || Mn(de, fe); }
function xo(e, n) { var i = V; V |= 2; var t = Iu(); (de !== e || fe !== n) && (ln = null, Zn(e, n)); do
    try {
        Jg();
        break;
    }
    catch (o) {
        Gu(e, o);
    }
while (!0); if (Ps(), V = i, Bo.current = t, se !== null)
    throw Error(j(261)); return de = null, fe = 0, le; }
function Jg() { for (; se !== null;)
    xu(se); }
function Yg() { for (; se !== null && !Ch();)
    xu(se); }
function xu(e) { var n = zu(e.alternate, e, Fe); e.memoizedProps = e.pendingProps, n === null ? _u(e) : se = n, Os.current = null; }
function _u(e) { var n = e; do {
    var i = n.alternate;
    if (e = n.return, n.flags & 32768) {
        if (i = zg(i, n), i !== null) {
            i.flags &= 32767, se = i;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            le = 6, se = null;
            return;
        }
    }
    else if (i = Vg(i, n, Fe), i !== null) {
        se = i;
        return;
    }
    if (n = n.sibling, n !== null) {
        se = n;
        return;
    }
    se = n = e;
} while (n !== null); le === 0 && (le = 5); }
function Kn(e, n, i) { var t = z, o = Ve.transition; try {
    Ve.transition = null, z = 1, Zg(e, n, i, t);
}
finally {
    Ve.transition = o, z = t;
} return null; }
function Zg(e, n, i, t) { do
    Li();
while (Tn !== null); if (V & 6)
    throw Error(j(327)); i = e.finishedWork; var o = e.finishedLanes; if (i === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, i === e.current)
    throw Error(j(177)); e.callbackNode = null, e.callbackPriority = 0; var a = i.lanes | i.childLanes; if (Wh(e, a), e === de && (se = de = null, fe = 0), !(i.subtreeFlags & 2064) && !(i.flags & 2064) || Zt || (Zt = !0, Uu(Co, function () { return Li(), null; })), a = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || a) {
    a = Ve.transition, Ve.transition = null;
    var r = z;
    z = 1;
    var s = V;
    V |= 4, Os.current = null, Qg(e, i), Nu(i, e), Sg(Pr), Po = !!Er, Pr = Er = null, e.current = i, $g(i), Eh(), V = s, z = r, Ve.transition = a;
}
else
    e.current = i; if (Zt && (Zt = !1, Tn = e, Io = o), a = e.pendingLanes, a === 0 && (Rn = null), wh(i.stateNode), De(e, ae()), n !== null)
    for (t = e.onRecoverableError, i = 0; i < n.length; i++)
        o = n[i], t(o.value, { componentStack: o.stack, digest: o.digest }); if (Go)
    throw Go = !1, e = zr, zr = null, e; return Io & 1 && e.tag !== 0 && Li(), a = e.pendingLanes, a & 1 ? e === Ur ? lt++ : (lt = 0, Ur = e) : lt = 0, zn(), null; }
function Li() { if (Tn !== null) {
    var e = Cc(Io), n = Ve.transition, i = z;
    try {
        if (Ve.transition = null, z = 16 > e ? 16 : e, Tn === null)
            var t = !1;
        else {
            if (e = Tn, Tn = null, Io = 0, V & 6)
                throw Error(j(331));
            var o = V;
            for (V |= 4, w = e.current; w !== null;) {
                var a = w, r = a.child;
                if (w.flags & 16) {
                    var s = a.deletions;
                    if (s !== null) {
                        for (var m = 0; m < s.length; m++) {
                            var l = s[m];
                            for (w = l; w !== null;) {
                                var h = w;
                                switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15: st(8, h, a);
                                }
                                var d = h.child;
                                if (d !== null)
                                    d.return = h, w = d;
                                else
                                    for (; w !== null;) {
                                        h = w;
                                        var g = h.sibling, p = h.return;
                                        if (Ru(h), h === l) {
                                            w = null;
                                            break;
                                        }
                                        if (g !== null) {
                                            g.return = p, w = g;
                                            break;
                                        }
                                        w = p;
                                    }
                            }
                        }
                        var y = a.alternate;
                        if (y !== null) {
                            var S = y.child;
                            if (S !== null) {
                                y.child = null;
                                do {
                                    var T = S.sibling;
                                    S.sibling = null, S = T;
                                } while (S !== null);
                            }
                        }
                        w = a;
                    }
                }
                if (a.subtreeFlags & 2064 && r !== null)
                    r.return = a, w = r;
                else
                    e: for (; w !== null;) {
                        if (a = w, a.flags & 2048)
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15: st(9, a, a.return);
                            }
                        var u = a.sibling;
                        if (u !== null) {
                            u.return = a.return, w = u;
                            break e;
                        }
                        w = a.return;
                    }
            }
            var c = e.current;
            for (w = c; w !== null;) {
                r = w;
                var f = r.child;
                if (r.subtreeFlags & 2064 && f !== null)
                    f.return = r, w = f;
                else
                    e: for (r = c; w !== null;) {
                        if (s = w, s.flags & 2048)
                            try {
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15: na(9, s);
                                }
                            }
                            catch (P) {
                                oe(s, s.return, P);
                            }
                        if (s === r) {
                            w = null;
                            break e;
                        }
                        var b = s.sibling;
                        if (b !== null) {
                            b.return = s.return, w = b;
                            break e;
                        }
                        w = s.return;
                    }
            }
            if (V = o, zn(), rn && typeof rn.onPostCommitFiberRoot == "function")
                try {
                    rn.onPostCommitFiberRoot($o, e);
                }
                catch { }
            t = !0;
        }
        return t;
    }
    finally {
        z = i, Ve.transition = n;
    }
} return !1; }
function dl(e, n, i) { n = Hi(i, n), n = Cu(e, n, 1), e = Wn(e, n, 1), n = Ce(), e !== null && (Wt(e, 1, n), De(e, n)); }
function oe(e, n, i) { if (e.tag === 3)
    dl(e, e, i);
else
    for (; n !== null;) {
        if (n.tag === 3) {
            dl(n, e, i);
            break;
        }
        else if (n.tag === 1) {
            var t = n.stateNode;
            if (typeof n.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && (Rn === null || !Rn.has(t))) {
                e = Hi(i, e), e = Eu(n, e, 1), n = Wn(n, e, 1), e = Ce(), n !== null && (Wt(n, 1, e), De(n, e));
                break;
            }
        }
        n = n.return;
    } }
function Xg(e, n, i) { var t = e.pingCache; t !== null && t.delete(n), n = Ce(), e.pingedLanes |= e.suspendedLanes & i, de === e && (fe & i) === i && (le === 4 || le === 3 && (fe & 130023424) === fe && 500 > ae() - Gs ? Zn(e, 0) : Bs |= i), De(e, n); }
function Vu(e, n) { n === 0 && (e.mode & 1 ? (n = _t, _t <<= 1, !(_t & 130023424) && (_t = 4194304)) : n = 1); var i = Ce(); e = pn(e, n), e !== null && (Wt(e, n, i), De(e, i)); }
function ef(e) { var n = e.memoizedState, i = 0; n !== null && (i = n.retryLane), Vu(e, i); }
function nf(e, n) { var i = 0; switch (e.tag) {
    case 13:
        var t = e.stateNode, o = e.memoizedState;
        o !== null && (i = o.retryLane);
        break;
    case 19:
        t = e.stateNode;
        break;
    default: throw Error(j(314));
} t !== null && t.delete(n), Vu(e, i); }
var zu;
zu = function (e, n, i) { if (e !== null)
    if (e.memoizedProps !== n.pendingProps || Te.current)
        we = !0;
    else {
        if (!(e.lanes & i) && !(n.flags & 128))
            return we = !1, _g(e, n, i);
        we = !!(e.flags & 131072);
    }
else
    we = !1, Z && n.flags & 1048576 && Kc(n, Fo, n.index); switch (n.lanes = 0, n.tag) {
    case 2:
        var t = n.type;
        go(e, n), e = n.pendingProps;
        var o = ki(n, je.current);
        Ti(n, i), o = Ws(null, n, t, e, o, i);
        var a = Rs();
        return n.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Le(t) ? (a = !0, Do(n)) : a = !1, n.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ts(n), o.updater = ea, n.stateNode = o, o._reactInternals = n, Rr(n, t, e, i), n = Nr(null, n, t, !0, a, i)) : (n.tag = 0, Z && a && js(n), ve(null, n, o, i), n = n.child), n;
    case 16:
        t = n.elementType;
        e: {
            switch (go(e, n), e = n.pendingProps, o = t._init, t = o(t._payload), n.type = t, o = n.tag = of(t), e = Ke(t, e), o) {
                case 0:
                    n = Ar(null, n, t, e, i);
                    break e;
                case 1:
                    n = il(null, n, t, e, i);
                    break e;
                case 11:
                    n = el(null, n, t, e, i);
                    break e;
                case 14:
                    n = nl(null, n, t, Ke(t.type, e), i);
                    break e;
            }
            throw Error(j(306, t, ""));
        }
        return n;
    case 0: return t = n.type, o = n.pendingProps, o = n.elementType === t ? o : Ke(t, o), Ar(e, n, t, o, i);
    case 1: return t = n.type, o = n.pendingProps, o = n.elementType === t ? o : Ke(t, o), il(e, n, t, o, i);
    case 3:
        e: {
            if (Tu(n), e === null)
                throw Error(j(387));
            t = n.pendingProps, a = n.memoizedState, o = a.element, eu(e, n), Ho(n, t, null, i);
            var r = n.memoizedState;
            if (t = r.element, a.isDehydrated)
                if (a = { element: t, isDehydrated: !1, cache: r.cache, pendingSuspenseBoundaries: r.pendingSuspenseBoundaries, transitions: r.transitions }, n.updateQueue.baseState = a, n.memoizedState = a, n.flags & 256) {
                    o = Hi(Error(j(423)), n), n = tl(e, n, t, i, o);
                    break e;
                }
                else if (t !== o) {
                    o = Hi(Error(j(424)), n), n = tl(e, n, t, i, o);
                    break e;
                }
                else
                    for (We = Fn(n.stateNode.containerInfo.firstChild), Re = n, Z = !0, Je = null, i = Zc(n, null, t, i), n.child = i; i;)
                        i.flags = i.flags & -3 | 4096, i = i.sibling;
            else {
                if (Fi(), t === o) {
                    n = yn(e, n, i);
                    break e;
                }
                ve(e, n, t, i);
            }
            n = n.child;
        }
        return n;
    case 5: return nu(n), e === null && kr(n), t = n.type, o = n.pendingProps, a = e !== null ? e.memoizedProps : null, r = o.children, Mr(t, o) ? r = null : a !== null && Mr(t, a) && (n.flags |= 32), wu(e, n), ve(e, n, r, i), n.child;
    case 6: return e === null && kr(n), null;
    case 13: return Lu(e, n, i);
    case 4: return Ls(n, n.stateNode.containerInfo), t = n.pendingProps, e === null ? n.child = Wi(n, null, t, i) : ve(e, n, t, i), n.child;
    case 11: return t = n.type, o = n.pendingProps, o = n.elementType === t ? o : Ke(t, o), el(e, n, t, o, i);
    case 7: return ve(e, n, n.pendingProps, i), n.child;
    case 8: return ve(e, n, n.pendingProps.children, i), n.child;
    case 12: return ve(e, n, n.pendingProps.children, i), n.child;
    case 10:
        e: {
            if (t = n.type._context, o = n.pendingProps, a = n.memoizedProps, r = o.value, K(Wo, t._currentValue), t._currentValue = r, a !== null)
                if (en(a.value, r)) {
                    if (a.children === o.children && !Te.current) {
                        n = yn(e, n, i);
                        break e;
                    }
                }
                else
                    for (a = n.child, a !== null && (a.return = n); a !== null;) {
                        var s = a.dependencies;
                        if (s !== null) {
                            r = a.child;
                            for (var m = s.firstContext; m !== null;) {
                                if (m.context === t) {
                                    if (a.tag === 1) {
                                        m = hn(-1, i & -i), m.tag = 2;
                                        var l = a.updateQueue;
                                        if (l !== null) {
                                            l = l.shared;
                                            var h = l.pending;
                                            h === null ? m.next = m : (m.next = h.next, h.next = m), l.pending = m;
                                        }
                                    }
                                    a.lanes |= i, m = a.alternate, m !== null && (m.lanes |= i), Fr(a.return, i, n), s.lanes |= i;
                                    break;
                                }
                                m = m.next;
                            }
                        }
                        else if (a.tag === 10)
                            r = a.type === n.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (r = a.return, r === null)
                                throw Error(j(341));
                            r.lanes |= i, s = r.alternate, s !== null && (s.lanes |= i), Fr(r, i, n), r = a.sibling;
                        }
                        else
                            r = a.child;
                        if (r !== null)
                            r.return = a;
                        else
                            for (r = a; r !== null;) {
                                if (r === n) {
                                    r = null;
                                    break;
                                }
                                if (a = r.sibling, a !== null) {
                                    a.return = r.return, r = a;
                                    break;
                                }
                                r = r.return;
                            }
                        a = r;
                    }
            ve(e, n, o.children, i), n = n.child;
        }
        return n;
    case 9: return o = n.type, t = n.pendingProps.children, Ti(n, i), o = ze(o), t = t(o), n.flags |= 1, ve(e, n, t, i), n.child;
    case 14: return t = n.type, o = Ke(t, n.pendingProps), o = Ke(t.type, o), nl(e, n, t, o, i);
    case 15: return Pu(e, n, n.type, n.pendingProps, i);
    case 17: return t = n.type, o = n.pendingProps, o = n.elementType === t ? o : Ke(t, o), go(e, n), n.tag = 1, Le(t) ? (e = !0, Do(n)) : e = !1, Ti(n, i), vu(n, t, o), Rr(n, t, o, i), Nr(null, n, t, !0, e, i);
    case 19: return Du(e, n, i);
    case 22: return Mu(e, n, i);
} throw Error(j(156, n.tag)); };
function Uu(e, n) { return Sc(e, n); }
function tf(e, n, i, t) { this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function _e(e, n, i, t) { return new tf(e, n, i, t); }
function Vs(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function of(e) { if (typeof e == "function")
    return Vs(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === ms)
        return 11;
    if (e === ls)
        return 14;
} return 2; }
function An(e, n) { var i = e.alternate; return i === null ? (i = _e(e.tag, n, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i; }
function yo(e, n, i, t, o, a) { var r = 2; if (t = e, typeof e == "function")
    Vs(e) && (r = 1);
else if (typeof e == "string")
    r = 5;
else
    e: switch (e) {
        case di: return Xn(i.children, o, a, n);
        case ss:
            r = 8, o |= 8;
            break;
        case tr: return e = _e(12, i, n, o | 2), e.elementType = tr, e.lanes = a, e;
        case or: return e = _e(13, i, n, o), e.elementType = or, e.lanes = a, e;
        case ar: return e = _e(19, i, n, o), e.elementType = ar, e.lanes = a, e;
        case nc: return ta(i, o, a, n);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case Xl:
                        r = 10;
                        break e;
                    case ec:
                        r = 9;
                        break e;
                    case ms:
                        r = 11;
                        break e;
                    case ls:
                        r = 14;
                        break e;
                    case Cn:
                        r = 16, t = null;
                        break e;
                }
            throw Error(j(130, e == null ? e : typeof e, ""));
    } return n = _e(r, i, n, o), n.elementType = e, n.type = t, n.lanes = a, n; }
function Xn(e, n, i, t) { return e = _e(7, e, t, n), e.lanes = i, e; }
function ta(e, n, i, t) { return e = _e(22, e, t, n), e.elementType = nc, e.lanes = i, e.stateNode = { isHidden: !1 }, e; }
function _a(e, n, i) { return e = _e(6, e, null, n), e.lanes = i, e; }
function Va(e, n, i) { return n = _e(4, e.children !== null ? e.children : [], e.key, n), n.lanes = i, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n; }
function af(e, n, i, t, o) { this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ea(0), this.expirationTimes = Ea(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ea(0), this.identifierPrefix = t, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null; }
function zs(e, n, i, t, o, a, r, s, m) { return e = new af(e, n, i, s, m), n === 1 ? (n = 1, a === !0 && (n |= 8)) : n = 0, a = _e(3, null, null, n), e.current = a, a.stateNode = e, a.memoizedState = { element: t, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ts(a), e; }
function rf(e, n, i) { var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: ui, key: t == null ? null : "" + t, children: e, containerInfo: n, implementation: i }; }
function Qu(e) { if (!e)
    return xn; e = e._reactInternals; e: {
    if (si(e) !== e || e.tag !== 1)
        throw Error(j(170));
    var n = e;
    do {
        switch (n.tag) {
            case 3:
                n = n.stateNode.context;
                break e;
            case 1: if (Le(n.type)) {
                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        n = n.return;
    } while (n !== null);
    throw Error(j(171));
} if (e.tag === 1) {
    var i = e.type;
    if (Le(i))
        return Qc(e, i, n);
} return n; }
function $u(e, n, i, t, o, a, r, s, m) { return e = zs(i, t, !0, e, o, a, r, s, m), e.context = Qu(null), i = e.current, t = Ce(), o = Hn(i), a = hn(t, o), a.callback = n ?? null, Wn(i, a, o), e.current.lanes = o, Wt(e, o, t), De(e, t), e; }
function oa(e, n, i, t) { var o = n.current, a = Ce(), r = Hn(o); return i = Qu(i), n.context === null ? n.context = i : n.pendingContext = i, n = hn(a, r), n.payload = { element: e }, t = t === void 0 ? null : t, t !== null && (n.callback = t), e = Wn(o, n, r), e !== null && (Xe(e, o, r, a), co(e, o, r)), r; }
function _o(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function hl(e, n) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var i = e.retryLane;
    e.retryLane = i !== 0 && i < n ? i : n;
} }
function Us(e, n) { hl(e, n), (e = e.alternate) && hl(e, n); }
function sf() { return null; }
var Ku = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function Qs(e) { this._internalRoot = e; }
aa.prototype.render = Qs.prototype.render = function (e) { var n = this._internalRoot; if (n === null)
    throw Error(j(409)); oa(e, n, null, null); };
aa.prototype.unmount = Qs.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    oi(function () { oa(null, e, null, null); }), n[fn] = null;
} };
function aa(e) { this._internalRoot = e; }
aa.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var n = Mc();
    e = { blockedOn: null, target: e, priority: n };
    for (var i = 0; i < Pn.length && n !== 0 && n < Pn[i].priority; i++)
        ;
    Pn.splice(i, 0, e), i === 0 && Tc(e);
} };
function $s(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function ra(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function gl() { }
function mf(e, n, i, t, o) { if (o) {
    if (typeof t == "function") {
        var a = t;
        t = function () { var l = _o(r); a.call(l); };
    }
    var r = $u(n, t, e, 0, null, !1, !1, "", gl);
    return e._reactRootContainer = r, e[fn] = r.current, Ct(e.nodeType === 8 ? e.parentNode : e), oi(), r;
} for (; o = e.lastChild;)
    e.removeChild(o); if (typeof t == "function") {
    var s = t;
    t = function () { var l = _o(m); s.call(l); };
} var m = zs(e, 0, !1, null, null, !1, !1, "", gl); return e._reactRootContainer = m, e[fn] = m.current, Ct(e.nodeType === 8 ? e.parentNode : e), oi(function () { oa(n, m, i, t); }), m; }
function sa(e, n, i, t, o) { var a = i._reactRootContainer; if (a) {
    var r = a;
    if (typeof o == "function") {
        var s = o;
        o = function () { var m = _o(r); s.call(m); };
    }
    oa(n, r, e, o);
}
else
    r = mf(i, n, e, o, t); return _o(r); }
Ec = function (e) { switch (e.tag) {
    case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
            var i = Xi(n.pendingLanes);
            i !== 0 && (ds(n, i | 1), De(n, ae()), !(V & 6) && (Ai = ae() + 500, zn()));
        }
        break;
    case 13: oi(function () { var t = pn(e, 1); if (t !== null) {
        var o = Ce();
        Xe(t, e, 1, o);
    } }), Us(e, 1);
} };
hs = function (e) { if (e.tag === 13) {
    var n = pn(e, 134217728);
    if (n !== null) {
        var i = Ce();
        Xe(n, e, 134217728, i);
    }
    Us(e, 134217728);
} };
Pc = function (e) { if (e.tag === 13) {
    var n = Hn(e), i = pn(e, n);
    if (i !== null) {
        var t = Ce();
        Xe(i, e, n, t);
    }
    Us(e, n);
} };
Mc = function () { return z; };
wc = function (e, n) { var i = z; try {
    return z = e, n();
}
finally {
    z = i;
} };
fr = function (e, n, i) { switch (n) {
    case "input":
        if (mr(e, i), n = i.name, i.type === "radio" && n != null) {
            for (i = e; i.parentNode;)
                i = i.parentNode;
            for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < i.length; n++) {
                var t = i[n];
                if (t !== e && t.form === e.form) {
                    var o = Yo(t);
                    if (!o)
                        throw Error(j(90));
                    tc(t), mr(t, o);
                }
            }
        }
        break;
    case "textarea":
        ac(e, i);
        break;
    case "select": n = i.value, n != null && Ei(e, !!i.multiple, n, !1);
} };
dc = Is;
hc = oi;
var lf = { usingClientEntryPoint: !1, Events: [Ht, pi, Yo, cc, uc, Is] }, Ki = { findFiberByHostInstance: qn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, cf = { bundleType: Ki.bundleType, version: Ki.version, rendererPackageName: Ki.rendererPackageName, rendererConfig: Ki.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Sn.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = pc(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Ki.findFiberByHostInstance || sf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xt = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xt.isDisabled && Xt.supportsFiber)
        try {
            $o = Xt.inject(cf), rn = Xt;
        }
        catch { }
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lf;
Ae.createPortal = function (e, n) { var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!$s(n))
    throw Error(j(200)); return rf(e, n, null, i); };
Ae.createRoot = function (e, n) { if (!$s(e))
    throw Error(j(299)); var i = !1, t = "", o = Ku; return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (t = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), n = zs(e, 1, !1, null, null, i, !1, t, o), e[fn] = n.current, Ct(e.nodeType === 8 ? e.parentNode : e), new Qs(n); };
Ae.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var n = e._reactInternals; if (n === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e))); return e = pc(n), e = e === null ? null : e.stateNode, e; };
Ae.flushSync = function (e) { return oi(e); };
Ae.hydrate = function (e, n, i) { if (!ra(n))
    throw Error(j(200)); return sa(null, e, n, !0, i); };
Ae.hydrateRoot = function (e, n, i) { if (!$s(e))
    throw Error(j(405)); var t = i != null && i.hydratedSources || null, o = !1, a = "", r = Ku; if (i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (a = i.identifierPrefix), i.onRecoverableError !== void 0 && (r = i.onRecoverableError)), n = $u(n, null, e, 1, i ?? null, o, !1, a, r), e[fn] = n.current, Ct(e), t)
    for (e = 0; e < t.length; e++)
        i = t[e], o = i._getVersion, o = o(i._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [i, o] : n.mutableSourceEagerHydrationData.push(i, o); return new aa(n); };
Ae.render = function (e, n, i) { if (!ra(n))
    throw Error(j(200)); return sa(null, e, n, !1, i); };
Ae.unmountComponentAtNode = function (e) { if (!ra(e))
    throw Error(j(40)); return e._reactRootContainer ? (oi(function () { sa(null, null, e, !1, function () { e._reactRootContainer = null, e[fn] = null; }); }), !0) : !1; };
Ae.unstable_batchedUpdates = Is;
Ae.unstable_renderSubtreeIntoContainer = function (e, n, i, t) { if (!ra(i))
    throw Error(j(200)); if (e == null || e._reactInternals === void 0)
    throw Error(j(38)); return sa(e, n, i, !1, t); };
Ae.version = "18.3.1-next-f1338f8080-20240426";
function qu() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qu);
    }
    catch (e) {
        console.error(e);
    } }
qu(), ql.exports = Ae;
var uf = ql.exports, fl = uf;
nr.createRoot = fl.createRoot, nr.hydrateRoot = fl.hydrateRoot;
const Ju = D.createContext({ dragDropManager: void 0 });
function Oe(e) { return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "; }
var pl = function () { return typeof Symbol == "function" && Symbol.observable || "@@observable"; }(), za = function () { return Math.random().toString(36).substring(7).split("").join("."); }, yl = { INIT: "@@redux/INIT" + za(), REPLACE: "@@redux/REPLACE" + za(), PROBE_UNKNOWN_ACTION: function () { return "@@redux/PROBE_UNKNOWN_ACTION" + za(); } };
function df(e) { if (typeof e != "object" || e === null)
    return !1; for (var n = e; Object.getPrototypeOf(n) !== null;)
    n = Object.getPrototypeOf(n); return Object.getPrototypeOf(e) === n; }
function Yu(e, n, i) { var t; if (typeof n == "function" && typeof i == "function" || typeof i == "function" && typeof arguments[3] == "function")
    throw new Error(Oe(0)); if (typeof n == "function" && typeof i > "u" && (i = n, n = void 0), typeof i < "u") {
    if (typeof i != "function")
        throw new Error(Oe(1));
    return i(Yu)(e, n);
} if (typeof e != "function")
    throw new Error(Oe(2)); var o = e, a = n, r = [], s = r, m = !1; function l() { s === r && (s = r.slice()); } function h() { if (m)
    throw new Error(Oe(3)); return a; } function d(S) { if (typeof S != "function")
    throw new Error(Oe(4)); if (m)
    throw new Error(Oe(5)); var T = !0; return l(), s.push(S), function () { if (T) {
    if (m)
        throw new Error(Oe(6));
    T = !1, l();
    var c = s.indexOf(S);
    s.splice(c, 1), r = null;
} }; } function g(S) { if (!df(S))
    throw new Error(Oe(7)); if (typeof S.type > "u")
    throw new Error(Oe(8)); if (m)
    throw new Error(Oe(9)); try {
    m = !0, a = o(a, S);
}
finally {
    m = !1;
} for (var T = r = s, u = 0; u < T.length; u++) {
    var c = T[u];
    c();
} return S; } function p(S) { if (typeof S != "function")
    throw new Error(Oe(10)); o = S, g({ type: yl.REPLACE }); } function y() { var S, T = d; return S = { subscribe: function (c) { if (typeof c != "object" || c === null)
        throw new Error(Oe(11)); function f() { c.next && c.next(h()); } f(); var b = T(f); return { unsubscribe: b }; } }, S[pl] = function () { return this; }, S; } return g({ type: yl.INIT }), t = { dispatch: g, subscribe: d, getState: h, replaceReducer: p }, t[pl] = y, t; }
function B(e, n, ...i) { if (hf() && n === void 0)
    throw new Error("invariant requires an error message argument"); if (!e) {
    let t;
    if (n === void 0)
        t = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
        let o = 0;
        t = new Error(n.replace(/%s/g, function () { return i[o++]; })), t.name = "Invariant Violation";
    }
    throw t.framesToPop = 1, t;
} }
function hf() { return typeof process < "u" && !0; }
function gf(e, n, i) { return n.split(".").reduce((t, o) => t && t[o] ? t[o] : i || null, e); }
function ff(e, n) { return e.filter(i => i !== n); }
function Zu(e) { return typeof e == "object"; }
function pf(e, n) { const i = new Map, t = a => { i.set(a, i.has(a) ? i.get(a) + 1 : 1); }; e.forEach(t), n.forEach(t); const o = []; return i.forEach((a, r) => { a === 1 && o.push(r); }), o; }
function yf(e, n) { return e.filter(i => n.indexOf(i) > -1); }
const Ks = "dnd-core/INIT_COORDS", ma = "dnd-core/BEGIN_DRAG", qs = "dnd-core/PUBLISH_DRAG_SOURCE", la = "dnd-core/HOVER", ca = "dnd-core/DROP", ua = "dnd-core/END_DRAG";
function Sl(e, n) { return { type: Ks, payload: { sourceClientOffset: n || null, clientOffset: e || null } }; }
const Sf = { type: Ks, payload: { clientOffset: null, sourceClientOffset: null } };
function bf(e) { return function (i = [], t = { publishSource: !0 }) { const { publishSource: o = !0, clientOffset: a, getSourceClientOffset: r } = t, s = e.getMonitor(), m = e.getRegistry(); e.dispatch(Sl(a)), jf(i, s, m); const l = Ef(i, s); if (l == null) {
    e.dispatch(Sf);
    return;
} let h = null; if (a) {
    if (!r)
        throw new Error("getSourceClientOffset must be defined");
    vf(r), h = r(l);
} e.dispatch(Sl(a, h)); const g = m.getSource(l).beginDrag(s, l); if (g == null)
    return; Cf(g), m.pinSource(l); const p = m.getSourceType(l); return { type: ma, payload: { itemType: p, item: g, sourceId: l, clientOffset: a || null, sourceClientOffset: h || null, isSourcePublic: !!o } }; }; }
function jf(e, n, i) { B(!n.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function (t) { B(i.getSource(t), "Expected sourceIds to be registered."); }); }
function vf(e) { B(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function."); }
function Cf(e) { B(Zu(e), "Item must be an object."); }
function Ef(e, n) { let i = null; for (let t = e.length - 1; t >= 0; t--)
    if (n.canDragSource(e[t])) {
        i = e[t];
        break;
    } return i; }
function Pf(e, n, i) { return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e; }
function Mf(e) { for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {}, t = Object.keys(i);
    typeof Object.getOwnPropertySymbols == "function" && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function (o) { return Object.getOwnPropertyDescriptor(i, o).enumerable; }))), t.forEach(function (o) { Pf(e, o, i[o]); });
} return e; }
function wf(e) { return function (i = {}) { const t = e.getMonitor(), o = e.getRegistry(); Tf(t), kf(t).forEach((r, s) => { const m = Lf(r, s, o, t), l = { type: ca, payload: { dropResult: Mf({}, i, m) } }; e.dispatch(l); }); }; }
function Tf(e) { B(e.isDragging(), "Cannot call drop while not dragging."), B(!e.didDrop(), "Cannot call drop twice during one drag operation."); }
function Lf(e, n, i, t) { const o = i.getTarget(e); let a = o ? o.drop(t, e) : void 0; return Df(a), typeof a > "u" && (a = n === 0 ? {} : t.getDropResult()), a; }
function Df(e) { B(typeof e > "u" || Zu(e), "Drop result must either be an object or undefined."); }
function kf(e) { const n = e.getTargetIds().filter(e.canDropOnTarget, e); return n.reverse(), n; }
function Ff(e) { return function () { const i = e.getMonitor(), t = e.getRegistry(); Wf(i); const o = i.getSourceId(); return o != null && (t.getSource(o, !0).endDrag(i, o), t.unpinSource()), { type: ua }; }; }
function Wf(e) { B(e.isDragging(), "Cannot call endDrag while not dragging."); }
function Kr(e, n) { return n === null ? e === null : Array.isArray(e) ? e.some(i => i === n) : e === n; }
function Rf(e) { return function (i, { clientOffset: t } = {}) { Hf(i); const o = i.slice(0), a = e.getMonitor(), r = e.getRegistry(), s = a.getItemType(); return Nf(o, r, s), Af(o, a, r), Of(o, a, r), { type: la, payload: { targetIds: o, clientOffset: t || null } }; }; }
function Hf(e) { B(Array.isArray(e), "Expected targetIds to be an array."); }
function Af(e, n, i) { B(n.isDragging(), "Cannot call hover while not dragging."), B(!n.didDrop(), "Cannot call hover after drop."); for (let t = 0; t < e.length; t++) {
    const o = e[t];
    B(e.lastIndexOf(o) === t, "Expected targetIds to be unique in the passed array.");
    const a = i.getTarget(o);
    B(a, "Expected targetIds to be registered.");
} }
function Nf(e, n, i) { for (let t = e.length - 1; t >= 0; t--) {
    const o = e[t], a = n.getTargetType(o);
    Kr(a, i) || e.splice(t, 1);
} }
function Of(e, n, i) { e.forEach(function (t) { i.getTarget(t).hover(n, t); }); }
function Bf(e) { return function () { if (e.getMonitor().isDragging())
    return { type: qs }; }; }
function Gf(e) { return { beginDrag: bf(e), publishDragSource: Bf(e), hover: Rf(e), drop: wf(e), endDrag: Ff(e) }; }
class If {
    receiveBackend(n) { this.backend = n; }
    getMonitor() { return this.monitor; }
    getBackend() { return this.backend; }
    getRegistry() { return this.monitor.registry; }
    getActions() { const n = this, { dispatch: i } = this.store; function t(a) { return (...r) => { const s = a.apply(n, r); typeof s < "u" && i(s); }; } const o = Gf(this); return Object.keys(o).reduce((a, r) => { const s = o[r]; return a[r] = t(s), a; }, {}); }
    dispatch(n) { this.store.dispatch(n); }
    constructor(n, i) { this.isSetUp = !1, this.handleRefCountChange = () => { const t = this.store.getState().refCount > 0; this.backend && (t && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !t && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1)); }, this.store = n, this.monitor = i, n.subscribe(this.handleRefCountChange); }
}
function xf(e, n) { return { x: e.x + n.x, y: e.y + n.y }; }
function Xu(e, n) { return { x: e.x - n.x, y: e.y - n.y }; }
function _f(e) { const { clientOffset: n, initialClientOffset: i, initialSourceClientOffset: t } = e; return !n || !i || !t ? null : Xu(xf(n, t), i); }
function Vf(e) { const { clientOffset: n, initialClientOffset: i } = e; return !n || !i ? null : Xu(n, i); }
const ct = [], Js = [];
ct.__IS_NONE__ = !0;
Js.__IS_ALL__ = !0;
function zf(e, n) { return e === ct ? !1 : e === Js || typeof n > "u" ? !0 : yf(n, e).length > 0; }
class Uf {
    subscribeToStateChange(n, i = {}) { const { handlerIds: t } = i; B(typeof n == "function", "listener must be a function."), B(typeof t > "u" || Array.isArray(t), "handlerIds, when specified, must be an array of strings."); let o = this.store.getState().stateId; const a = () => { const r = this.store.getState(), s = r.stateId; try {
        s === o || s === o + 1 && !zf(r.dirtyHandlerIds, t) || n();
    }
    finally {
        o = s;
    } }; return this.store.subscribe(a); }
    subscribeToOffsetChange(n) { B(typeof n == "function", "listener must be a function."); let i = this.store.getState().dragOffset; const t = () => { const o = this.store.getState().dragOffset; o !== i && (i = o, n()); }; return this.store.subscribe(t); }
    canDragSource(n) { if (!n)
        return !1; const i = this.registry.getSource(n); return B(i, `Expected to find a valid source. sourceId=${n}`), this.isDragging() ? !1 : i.canDrag(this, n); }
    canDropOnTarget(n) { if (!n)
        return !1; const i = this.registry.getTarget(n); if (B(i, `Expected to find a valid target. targetId=${n}`), !this.isDragging() || this.didDrop())
        return !1; const t = this.registry.getTargetType(n), o = this.getItemType(); return Kr(t, o) && i.canDrop(this, n); }
    isDragging() { return !!this.getItemType(); }
    isDraggingSource(n) { if (!n)
        return !1; const i = this.registry.getSource(n, !0); if (B(i, `Expected to find a valid source. sourceId=${n}`), !this.isDragging() || !this.isSourcePublic())
        return !1; const t = this.registry.getSourceType(n), o = this.getItemType(); return t !== o ? !1 : i.isDragging(this, n); }
    isOverTarget(n, i = { shallow: !1 }) { if (!n)
        return !1; const { shallow: t } = i; if (!this.isDragging())
        return !1; const o = this.registry.getTargetType(n), a = this.getItemType(); if (a && !Kr(o, a))
        return !1; const r = this.getTargetIds(); if (!r.length)
        return !1; const s = r.indexOf(n); return t ? s === r.length - 1 : s > -1; }
    getItemType() { return this.store.getState().dragOperation.itemType; }
    getItem() { return this.store.getState().dragOperation.item; }
    getSourceId() { return this.store.getState().dragOperation.sourceId; }
    getTargetIds() { return this.store.getState().dragOperation.targetIds; }
    getDropResult() { return this.store.getState().dragOperation.dropResult; }
    didDrop() { return this.store.getState().dragOperation.didDrop; }
    isSourcePublic() { return !!this.store.getState().dragOperation.isSourcePublic; }
    getInitialClientOffset() { return this.store.getState().dragOffset.initialClientOffset; }
    getInitialSourceClientOffset() { return this.store.getState().dragOffset.initialSourceClientOffset; }
    getClientOffset() { return this.store.getState().dragOffset.clientOffset; }
    getSourceClientOffset() { return _f(this.store.getState().dragOffset); }
    getDifferenceFromInitialOffset() { return Vf(this.store.getState().dragOffset); }
    constructor(n, i) { this.store = n, this.registry = i; }
}
const bl = typeof global < "u" ? global : self, ed = bl.MutationObserver || bl.WebKitMutationObserver;
function nd(e) { return function () { const i = setTimeout(o, 0), t = setInterval(o, 50); function o() { clearTimeout(i), clearInterval(t), e(); } }; }
function Qf(e) { let n = 1; const i = new ed(e), t = document.createTextNode(""); return i.observe(t, { characterData: !0 }), function () { n = -n, t.data = n; }; }
const $f = typeof ed == "function" ? Qf : nd;
class Kf {
    enqueueTask(n) { const { queue: i, requestFlush: t } = this; i.length || (t(), this.flushing = !0), i[i.length] = n; }
    constructor() { this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => { const { queue: n } = this; for (; this.index < n.length;) {
        const i = this.index;
        if (this.index++, n[i].call(), this.index > this.capacity) {
            for (let t = 0, o = n.length - this.index; t < o; t++)
                n[t] = n[t + this.index];
            n.length -= this.index, this.index = 0;
        }
    } n.length = 0, this.index = 0, this.flushing = !1; }, this.registerPendingError = n => { this.pendingErrors.push(n), this.requestErrorThrow(); }, this.requestFlush = $f(this.flush), this.requestErrorThrow = nd(() => { if (this.pendingErrors.length)
        throw this.pendingErrors.shift(); }); }
}
class qf {
    call() { try {
        this.task && this.task();
    }
    catch (n) {
        this.onError(n);
    }
    finally {
        this.task = null, this.release(this);
    } }
    constructor(n, i) { this.onError = n, this.release = i, this.task = null; }
}
class Jf {
    create(n) { const i = this.freeTasks, t = i.length ? i.pop() : new qf(this.onError, o => i[i.length] = o); return t.task = n, t; }
    constructor(n) { this.onError = n, this.freeTasks = []; }
}
const id = new Kf, Yf = new Jf(id.registerPendingError);
function Zf(e) { id.enqueueTask(Yf.create(e)); }
const Ys = "dnd-core/ADD_SOURCE", Zs = "dnd-core/ADD_TARGET", Xs = "dnd-core/REMOVE_SOURCE", da = "dnd-core/REMOVE_TARGET";
function Xf(e) { return { type: Ys, payload: { sourceId: e } }; }
function ep(e) { return { type: Zs, payload: { targetId: e } }; }
function np(e) { return { type: Xs, payload: { sourceId: e } }; }
function ip(e) { return { type: da, payload: { targetId: e } }; }
function tp(e) { B(typeof e.canDrag == "function", "Expected canDrag to be a function."), B(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), B(typeof e.endDrag == "function", "Expected endDrag to be a function."); }
function op(e) { B(typeof e.canDrop == "function", "Expected canDrop to be a function."), B(typeof e.hover == "function", "Expected hover to be a function."), B(typeof e.drop == "function", "Expected beginDrag to be a function."); }
function qr(e, n) { if (n && Array.isArray(e)) {
    e.forEach(i => qr(i, !1));
    return;
} B(typeof e == "string" || typeof e == "symbol", n ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol."); }
var xe;
(function (e) { e.SOURCE = "SOURCE", e.TARGET = "TARGET"; })(xe || (xe = {}));
let ap = 0;
function rp() { return ap++; }
function sp(e) { const n = rp().toString(); switch (e) {
    case xe.SOURCE: return `S${n}`;
    case xe.TARGET: return `T${n}`;
    default: throw new Error(`Unknown Handler Role: ${e}`);
} }
function jl(e) { switch (e[0]) {
    case "S": return xe.SOURCE;
    case "T": return xe.TARGET;
    default: throw new Error(`Cannot parse handler ID: ${e}`);
} }
function vl(e, n) { const i = e.entries(); let t = !1; do {
    const { done: o, value: [, a] } = i.next();
    if (a === n)
        return !0;
    t = !!o;
} while (!t); return !1; }
class mp {
    addSource(n, i) { qr(n), tp(i); const t = this.addHandler(xe.SOURCE, n, i); return this.store.dispatch(Xf(t)), t; }
    addTarget(n, i) { qr(n, !0), op(i); const t = this.addHandler(xe.TARGET, n, i); return this.store.dispatch(ep(t)), t; }
    containsHandler(n) { return vl(this.dragSources, n) || vl(this.dropTargets, n); }
    getSource(n, i = !1) { return B(this.isSourceId(n), "Expected a valid source ID."), i && n === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(n); }
    getTarget(n) { return B(this.isTargetId(n), "Expected a valid target ID."), this.dropTargets.get(n); }
    getSourceType(n) { return B(this.isSourceId(n), "Expected a valid source ID."), this.types.get(n); }
    getTargetType(n) { return B(this.isTargetId(n), "Expected a valid target ID."), this.types.get(n); }
    isSourceId(n) { return jl(n) === xe.SOURCE; }
    isTargetId(n) { return jl(n) === xe.TARGET; }
    removeSource(n) { B(this.getSource(n), "Expected an existing source."), this.store.dispatch(np(n)), Zf(() => { this.dragSources.delete(n), this.types.delete(n); }); }
    removeTarget(n) { B(this.getTarget(n), "Expected an existing target."), this.store.dispatch(ip(n)), this.dropTargets.delete(n), this.types.delete(n); }
    pinSource(n) { const i = this.getSource(n); B(i, "Expected an existing source."), this.pinnedSourceId = n, this.pinnedSource = i; }
    unpinSource() { B(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null; }
    addHandler(n, i, t) { const o = sp(n); return this.types.set(o, i), n === xe.SOURCE ? this.dragSources.set(o, t) : n === xe.TARGET && this.dropTargets.set(o, t), o; }
    constructor(n) { this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = n; }
}
const lp = (e, n) => e === n;
function cp(e, n) { return !e && !n ? !0 : !e || !n ? !1 : e.x === n.x && e.y === n.y; }
function up(e, n, i = lp) { if (e.length !== n.length)
    return !1; for (let t = 0; t < e.length; ++t)
    if (!i(e[t], n[t]))
        return !1; return !0; }
function dp(e = ct, n) { switch (n.type) {
    case la: break;
    case Ys:
    case Zs:
    case da:
    case Xs: return ct;
    case ma:
    case qs:
    case ua:
    case ca:
    default: return Js;
} const { targetIds: i = [], prevTargetIds: t = [] } = n.payload, o = pf(i, t); if (!(o.length > 0 || !up(i, t)))
    return ct; const r = t[t.length - 1], s = i[i.length - 1]; return r !== s && (r && o.push(r), s && o.push(s)), o; }
function hp(e, n, i) { return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e; }
function gp(e) { for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {}, t = Object.keys(i);
    typeof Object.getOwnPropertySymbols == "function" && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function (o) { return Object.getOwnPropertyDescriptor(i, o).enumerable; }))), t.forEach(function (o) { hp(e, o, i[o]); });
} return e; }
const Cl = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null };
function fp(e = Cl, n) { const { payload: i } = n; switch (n.type) {
    case Ks:
    case ma: return { initialSourceClientOffset: i.sourceClientOffset, initialClientOffset: i.clientOffset, clientOffset: i.clientOffset };
    case la: return cp(e.clientOffset, i.clientOffset) ? e : gp({}, e, { clientOffset: i.clientOffset });
    case ua:
    case ca: return Cl;
    default: return e;
} }
function pp(e, n, i) { return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e; }
function li(e) { for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {}, t = Object.keys(i);
    typeof Object.getOwnPropertySymbols == "function" && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function (o) { return Object.getOwnPropertyDescriptor(i, o).enumerable; }))), t.forEach(function (o) { pp(e, o, i[o]); });
} return e; }
const yp = { itemType: null, item: null, sourceId: null, targetIds: [], dropResult: null, didDrop: !1, isSourcePublic: null };
function Sp(e = yp, n) { const { payload: i } = n; switch (n.type) {
    case ma: return li({}, e, { itemType: i.itemType, item: i.item, sourceId: i.sourceId, isSourcePublic: i.isSourcePublic, dropResult: null, didDrop: !1 });
    case qs: return li({}, e, { isSourcePublic: !0 });
    case la: return li({}, e, { targetIds: i.targetIds });
    case da: return e.targetIds.indexOf(i.targetId) === -1 ? e : li({}, e, { targetIds: ff(e.targetIds, i.targetId) });
    case ca: return li({}, e, { dropResult: i.dropResult, didDrop: !0, targetIds: [] });
    case ua: return li({}, e, { itemType: null, item: null, sourceId: null, dropResult: null, didDrop: !1, isSourcePublic: null, targetIds: [] });
    default: return e;
} }
function bp(e = 0, n) { switch (n.type) {
    case Ys:
    case Zs: return e + 1;
    case Xs:
    case da: return e - 1;
    default: return e;
} }
function jp(e = 0) { return e + 1; }
function vp(e, n, i) { return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e; }
function Cp(e) { for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {}, t = Object.keys(i);
    typeof Object.getOwnPropertySymbols == "function" && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function (o) { return Object.getOwnPropertyDescriptor(i, o).enumerable; }))), t.forEach(function (o) { vp(e, o, i[o]); });
} return e; }
function Ep(e = {}, n) { return { dirtyHandlerIds: dp(e.dirtyHandlerIds, { type: n.type, payload: Cp({}, n.payload, { prevTargetIds: gf(e, "dragOperation.targetIds", []) }) }), dragOffset: fp(e.dragOffset, n), refCount: bp(e.refCount, n), dragOperation: Sp(e.dragOperation, n), stateId: jp(e.stateId) }; }
function Pp(e, n = void 0, i = {}, t = !1) { const o = Mp(t), a = new Uf(o, new mp(o)), r = new If(o, a), s = e(r, n, i); return r.receiveBackend(s), r; }
function Mp(e) { const n = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__; return Yu(Ep, e && n && n({ name: "dnd-core", instanceId: "dnd-core" })); }
function wp(e, n) { if (e == null)
    return {}; var i = Tp(e, n), t, o; if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
        t = a[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
} return i; }
function Tp(e, n) { if (e == null)
    return {}; var i = {}, t = Object.keys(e), o, a; for (a = 0; a < t.length; a++)
    o = t[a], !(n.indexOf(o) >= 0) && (i[o] = e[o]); return i; }
let El = 0;
const So = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var Lp = D.memo(function (n) { var { children: i } = n, t = wp(n, ["children"]); const [o, a] = Dp(t); return D.useEffect(() => { if (a) {
    const r = td();
    return ++El, () => { --El === 0 && (r[So] = null); };
} }, []), k.jsx(Ju.Provider, { value: o, children: i }); });
function Dp(e) { if ("manager" in e)
    return [{ dragDropManager: e.manager }, !1]; const n = kp(e.backend, e.context, e.options, e.debugMode), i = !e.context; return [n, i]; }
function kp(e, n = td(), i, t) { const o = n; return o[So] || (o[So] = { dragDropManager: Pp(e, n, i, t) }), o[So]; }
function td() { return typeof global < "u" ? global : window; }
var Fp = function e(n, i) { if (n === i)
    return !0; if (n && i && typeof n == "object" && typeof i == "object") {
    if (n.constructor !== i.constructor)
        return !1;
    var t, o, a;
    if (Array.isArray(n)) {
        if (t = n.length, t != i.length)
            return !1;
        for (o = t; o-- !== 0;)
            if (!e(n[o], i[o]))
                return !1;
        return !0;
    }
    if (n.constructor === RegExp)
        return n.source === i.source && n.flags === i.flags;
    if (n.valueOf !== Object.prototype.valueOf)
        return n.valueOf() === i.valueOf();
    if (n.toString !== Object.prototype.toString)
        return n.toString() === i.toString();
    if (a = Object.keys(n), t = a.length, t !== Object.keys(i).length)
        return !1;
    for (o = t; o-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(i, a[o]))
            return !1;
    for (o = t; o-- !== 0;) {
        var r = a[o];
        if (!e(n[r], i[r]))
            return !1;
    }
    return !0;
} return n !== n && i !== i; };
const Wp = Ol(Fp), ai = typeof window < "u" ? D.useLayoutEffect : D.useEffect;
function Rp(e, n, i) { const [t, o] = D.useState(() => n(e)), a = D.useCallback(() => { const r = n(e); Wp(t, r) || (o(r), i && i()); }, [t, e, i]); return ai(a), [t, a]; }
function Hp(e, n, i) { const [t, o] = Rp(e, n, i); return ai(function () { const r = e.getHandlerId(); if (r != null)
    return e.subscribeToStateChange(o, { handlerIds: [r] }); }, [e, o]), t; }
function od(e, n, i) { return Hp(n, e || (() => ({})), () => i.reconnect()); }
function ad(e, n) { const i = []; return typeof e != "function" && i.push(e), D.useMemo(() => typeof e == "function" ? e() : e, i); }
function Ap(e) { return D.useMemo(() => e.hooks.dragSource(), [e]); }
function Np(e) { return D.useMemo(() => e.hooks.dragPreview(), [e]); }
let Ua = !1, Qa = !1;
class Op {
    receiveHandlerId(n) { this.sourceId = n; }
    getHandlerId() { return this.sourceId; }
    canDrag() { B(!Ua, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"); try {
        return Ua = !0, this.internalMonitor.canDragSource(this.sourceId);
    }
    finally {
        Ua = !1;
    } }
    isDragging() { if (!this.sourceId)
        return !1; B(!Qa, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"); try {
        return Qa = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    }
    finally {
        Qa = !1;
    } }
    subscribeToStateChange(n, i) { return this.internalMonitor.subscribeToStateChange(n, i); }
    isDraggingSource(n) { return this.internalMonitor.isDraggingSource(n); }
    isOverTarget(n, i) { return this.internalMonitor.isOverTarget(n, i); }
    getTargetIds() { return this.internalMonitor.getTargetIds(); }
    isSourcePublic() { return this.internalMonitor.isSourcePublic(); }
    getSourceId() { return this.internalMonitor.getSourceId(); }
    subscribeToOffsetChange(n) { return this.internalMonitor.subscribeToOffsetChange(n); }
    canDragSource(n) { return this.internalMonitor.canDragSource(n); }
    canDropOnTarget(n) { return this.internalMonitor.canDropOnTarget(n); }
    getItemType() { return this.internalMonitor.getItemType(); }
    getItem() { return this.internalMonitor.getItem(); }
    getDropResult() { return this.internalMonitor.getDropResult(); }
    didDrop() { return this.internalMonitor.didDrop(); }
    getInitialClientOffset() { return this.internalMonitor.getInitialClientOffset(); }
    getInitialSourceClientOffset() { return this.internalMonitor.getInitialSourceClientOffset(); }
    getSourceClientOffset() { return this.internalMonitor.getSourceClientOffset(); }
    getClientOffset() { return this.internalMonitor.getClientOffset(); }
    getDifferenceFromInitialOffset() { return this.internalMonitor.getDifferenceFromInitialOffset(); }
    constructor(n) { this.sourceId = null, this.internalMonitor = n.getMonitor(); }
}
let $a = !1;
class Bp {
    receiveHandlerId(n) { this.targetId = n; }
    getHandlerId() { return this.targetId; }
    subscribeToStateChange(n, i) { return this.internalMonitor.subscribeToStateChange(n, i); }
    canDrop() { if (!this.targetId)
        return !1; B(!$a, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor"); try {
        return $a = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    }
    finally {
        $a = !1;
    } }
    isOver(n) { return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, n) : !1; }
    getItemType() { return this.internalMonitor.getItemType(); }
    getItem() { return this.internalMonitor.getItem(); }
    getDropResult() { return this.internalMonitor.getDropResult(); }
    didDrop() { return this.internalMonitor.didDrop(); }
    getInitialClientOffset() { return this.internalMonitor.getInitialClientOffset(); }
    getInitialSourceClientOffset() { return this.internalMonitor.getInitialSourceClientOffset(); }
    getSourceClientOffset() { return this.internalMonitor.getSourceClientOffset(); }
    getClientOffset() { return this.internalMonitor.getClientOffset(); }
    getDifferenceFromInitialOffset() { return this.internalMonitor.getDifferenceFromInitialOffset(); }
    constructor(n) { this.targetId = null, this.internalMonitor = n.getMonitor(); }
}
function Gp(e, n, i) { const t = i.getRegistry(), o = t.addTarget(e, n); return [o, () => t.removeTarget(o)]; }
function Ip(e, n, i) { const t = i.getRegistry(), o = t.addSource(e, n); return [o, () => t.removeSource(o)]; }
function Jr(e, n, i, t) { let o; if (o !== void 0)
    return !!o; if (e === n)
    return !0; if (typeof e != "object" || !e || typeof n != "object" || !n)
    return !1; const a = Object.keys(e), r = Object.keys(n); if (a.length !== r.length)
    return !1; const s = Object.prototype.hasOwnProperty.bind(n); for (let m = 0; m < a.length; m++) {
    const l = a[m];
    if (!s(l))
        return !1;
    const h = e[l], d = n[l];
    if (o = void 0, o === !1 || o === void 0 && h !== d)
        return !1;
} return !0; }
function Yr(e) { return e !== null && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current"); }
function xp(e) { if (typeof e.type == "string")
    return; const n = e.type.displayName || e.type.name || "the component"; throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${n} into a <div>, or turn it into a drag source or a drop target itself.`); }
function _p(e) { return (n = null, i = null) => { if (!D.isValidElement(n)) {
    const a = n;
    return e(a, i), a;
} const t = n; return xp(t), Vp(t, i ? a => e(a, i) : e); }; }
function rd(e) { const n = {}; return Object.keys(e).forEach(i => { const t = e[i]; if (i.endsWith("Ref"))
    n[i] = e[i];
else {
    const o = _p(t);
    n[i] = () => o;
} }), n; }
function Pl(e, n) { typeof e == "function" ? e(n) : e.current = n; }
function Vp(e, n) { const i = e.ref; return B(typeof i != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), i ? D.cloneElement(e, { ref: t => { Pl(i, t), Pl(n, t); } }) : D.cloneElement(e, { ref: n }); }
class zp {
    receiveHandlerId(n) { this.handlerId !== n && (this.handlerId = n, this.reconnect()); }
    get connectTarget() { return this.dragSource; }
    get dragSourceOptions() { return this.dragSourceOptionsInternal; }
    set dragSourceOptions(n) { this.dragSourceOptionsInternal = n; }
    get dragPreviewOptions() { return this.dragPreviewOptionsInternal; }
    set dragPreviewOptions(n) { this.dragPreviewOptionsInternal = n; }
    reconnect() { const n = this.reconnectDragSource(); this.reconnectDragPreview(n); }
    reconnectDragSource() { const n = this.dragSource, i = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange(); return i && this.disconnectDragSource(), this.handlerId ? n ? (i && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = n, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, n, this.dragSourceOptions)), i) : (this.lastConnectedDragSource = n, i) : i; }
    reconnectDragPreview(n = !1) { const i = this.dragPreview, t = n || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange(); if (t && this.disconnectDragPreview(), !!this.handlerId) {
        if (!i) {
            this.lastConnectedDragPreview = i;
            return;
        }
        t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = i, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, i, this.dragPreviewOptions));
    } }
    didHandlerIdChange() { return this.lastConnectedHandlerId !== this.handlerId; }
    didConnectedDragSourceChange() { return this.lastConnectedDragSource !== this.dragSource; }
    didConnectedDragPreviewChange() { return this.lastConnectedDragPreview !== this.dragPreview; }
    didDragSourceOptionsChange() { return !Jr(this.lastConnectedDragSourceOptions, this.dragSourceOptions); }
    didDragPreviewOptionsChange() { return !Jr(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions); }
    disconnectDragSource() { this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0); }
    disconnectDragPreview() { this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null); }
    get dragSource() { return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current; }
    get dragPreview() { return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current; }
    clearDragSource() { this.dragSourceNode = null, this.dragSourceRef = null; }
    clearDragPreview() { this.dragPreviewNode = null, this.dragPreviewRef = null; }
    constructor(n) { this.hooks = rd({ dragSource: (i, t) => { this.clearDragSource(), this.dragSourceOptions = t || null, Yr(i) ? this.dragSourceRef = i : this.dragSourceNode = i, this.reconnectDragSource(); }, dragPreview: (i, t) => { this.clearDragPreview(), this.dragPreviewOptions = t || null, Yr(i) ? this.dragPreviewRef = i : this.dragPreviewNode = i, this.reconnectDragPreview(); } }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = n; }
}
class Up {
    get connectTarget() { return this.dropTarget; }
    reconnect() { const n = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange(); n && this.disconnectDropTarget(); const i = this.dropTarget; if (this.handlerId) {
        if (!i) {
            this.lastConnectedDropTarget = i;
            return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = i, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, i, this.dropTargetOptions));
    } }
    receiveHandlerId(n) { n !== this.handlerId && (this.handlerId = n, this.reconnect()); }
    get dropTargetOptions() { return this.dropTargetOptionsInternal; }
    set dropTargetOptions(n) { this.dropTargetOptionsInternal = n; }
    didHandlerIdChange() { return this.lastConnectedHandlerId !== this.handlerId; }
    didDropTargetChange() { return this.lastConnectedDropTarget !== this.dropTarget; }
    didOptionsChange() { return !Jr(this.lastConnectedDropTargetOptions, this.dropTargetOptions); }
    disconnectDropTarget() { this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0); }
    get dropTarget() { return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current; }
    clearDropTarget() { this.dropTargetRef = null, this.dropTargetNode = null; }
    constructor(n) { this.hooks = rd({ dropTarget: (i, t) => { this.clearDropTarget(), this.dropTargetOptions = t, Yr(i) ? this.dropTargetRef = i : this.dropTargetNode = i, this.reconnect(); } }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = n; }
}
function Ii() { const { dragDropManager: e } = D.useContext(Ju); return B(e != null, "Expected drag drop context"), e; }
function Qp(e, n) { const i = Ii(), t = D.useMemo(() => new zp(i.getBackend()), [i]); return ai(() => (t.dragSourceOptions = e || null, t.reconnect(), () => t.disconnectDragSource()), [t, e]), ai(() => (t.dragPreviewOptions = n || null, t.reconnect(), () => t.disconnectDragPreview()), [t, n]), t; }
function $p() { const e = Ii(); return D.useMemo(() => new Op(e), [e]); }
class Kp {
    beginDrag() { const n = this.spec, i = this.monitor; let t = null; return typeof n.item == "object" ? t = n.item : typeof n.item == "function" ? t = n.item(i) : t = {}, t ?? null; }
    canDrag() { const n = this.spec, i = this.monitor; return typeof n.canDrag == "boolean" ? n.canDrag : typeof n.canDrag == "function" ? n.canDrag(i) : !0; }
    isDragging(n, i) { const t = this.spec, o = this.monitor, { isDragging: a } = t; return a ? a(o) : i === n.getSourceId(); }
    endDrag() { const n = this.spec, i = this.monitor, t = this.connector, { end: o } = n; o && o(i.getItem(), i), t.reconnect(); }
    constructor(n, i, t) { this.spec = n, this.monitor = i, this.connector = t; }
}
function qp(e, n, i) { const t = D.useMemo(() => new Kp(e, n, i), [n, i]); return D.useEffect(() => { t.spec = e; }, [e]), t; }
function Jp(e) { return D.useMemo(() => { const n = e.type; return B(n != null, "spec.type must be defined"), n; }, [e]); }
function Yp(e, n, i) { const t = Ii(), o = qp(e, n, i), a = Jp(e); ai(function () { if (a != null) {
    const [s, m] = Ip(a, o, t);
    return n.receiveHandlerId(s), i.receiveHandlerId(s), m;
} }, [t, n, i, o, a]); }
function sd(e, n) { const i = ad(e); B(!i.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)"); const t = $p(), o = Qp(i.options, i.previewOptions); return Yp(i, t, o), [od(i.collect, t, o), Ap(o), Np(o)]; }
function Zp(e) { return D.useMemo(() => e.hooks.dropTarget(), [e]); }
function Xp(e) { const n = Ii(), i = D.useMemo(() => new Up(n.getBackend()), [n]); return ai(() => (i.dropTargetOptions = e || null, i.reconnect(), () => i.disconnectDropTarget()), [e]), i; }
function ey() { const e = Ii(); return D.useMemo(() => new Bp(e), [e]); }
function ny(e) { const { accept: n } = e; return D.useMemo(() => (B(e.accept != null, "accept must be defined"), Array.isArray(n) ? n : [n]), [n]); }
class iy {
    canDrop() { const n = this.spec, i = this.monitor; return n.canDrop ? n.canDrop(i.getItem(), i) : !0; }
    hover() { const n = this.spec, i = this.monitor; n.hover && n.hover(i.getItem(), i); }
    drop() { const n = this.spec, i = this.monitor; if (n.drop)
        return n.drop(i.getItem(), i); }
    constructor(n, i) { this.spec = n, this.monitor = i; }
}
function ty(e, n) { const i = D.useMemo(() => new iy(e, n), [n]); return D.useEffect(() => { i.spec = e; }, [e]), i; }
function oy(e, n, i) { const t = Ii(), o = ty(e, n), a = ny(e); ai(function () { const [s, m] = Gp(a, o, t); return n.receiveHandlerId(s), i.receiveHandlerId(s), m; }, [t, n, o, i, a.map(r => r.toString()).join("|")]); }
function em(e, n) { const i = ad(e), t = ey(), o = Xp(i.options); return oy(i, t, o), [od(i.collect, t, o), Zp(o)]; }
function md(e) { let n = null; return () => (n == null && (n = e()), n); }
function ay(e, n) { return e.filter(i => i !== n); }
function ry(e, n) { const i = new Set, t = a => i.add(a); e.forEach(t), n.forEach(t); const o = []; return i.forEach(a => o.push(a)), o; }
class sy {
    enter(n) { const i = this.entered.length, t = o => this.isNodeInDocument(o) && (!o.contains || o.contains(n)); return this.entered = ry(this.entered.filter(t), [n]), i === 0 && this.entered.length > 0; }
    leave(n) { const i = this.entered.length; return this.entered = ay(this.entered.filter(this.isNodeInDocument), n), i > 0 && this.entered.length === 0; }
    reset() { this.entered = []; }
    constructor(n) { this.entered = [], this.isNodeInDocument = n; }
}
class my {
    initializeExposedProperties() { Object.keys(this.config.exposeProperties).forEach(n => { Object.defineProperty(this.item, n, { configurable: !0, enumerable: !0, get() { return console.warn(`Browser doesn't allow reading "${n}" until the drop event.`), null; } }); }); }
    loadDataTransfer(n) { if (n) {
        const i = {};
        Object.keys(this.config.exposeProperties).forEach(t => { const o = this.config.exposeProperties[t]; o != null && (i[t] = { value: o(n, this.config.matchesTypes), configurable: !0, enumerable: !0 }); }), Object.defineProperties(this.item, i);
    } }
    canDrag() { return !0; }
    beginDrag() { return this.item; }
    isDragging(n, i) { return i === n.getSourceId(); }
    endDrag() { }
    constructor(n) { this.config = n, this.item = {}, this.initializeExposedProperties(); }
}
const ld = "__NATIVE_FILE__", cd = "__NATIVE_URL__", ud = "__NATIVE_TEXT__", dd = "__NATIVE_HTML__", Ml = Object.freeze(Object.defineProperty({ __proto__: null, FILE: ld, HTML: dd, TEXT: ud, URL: cd }, Symbol.toStringTag, { value: "Module" }));
function Ka(e, n, i) { const t = n.reduce((o, a) => o || e.getData(a), ""); return t ?? i; }
const Zr = { [ld]: { exposeProperties: { files: e => Array.prototype.slice.call(e.files), items: e => e.items, dataTransfer: e => e }, matchesTypes: ["Files"] }, [dd]: { exposeProperties: { html: (e, n) => Ka(e, n, ""), dataTransfer: e => e }, matchesTypes: ["Html", "text/html"] }, [cd]: { exposeProperties: { urls: (e, n) => Ka(e, n, "").split(`
`), dataTransfer: e => e }, matchesTypes: ["Url", "text/uri-list"] }, [ud]: { exposeProperties: { text: (e, n) => Ka(e, n, ""), dataTransfer: e => e }, matchesTypes: ["Text", "text/plain"] } };
function ly(e, n) { const i = Zr[e]; if (!i)
    throw new Error(`native type ${e} has no configuration`); const t = new my(i); return t.loadDataTransfer(n), t; }
function qa(e) { if (!e)
    return null; const n = Array.prototype.slice.call(e.types || []); return Object.keys(Zr).filter(i => { const t = Zr[i]; return t != null && t.matchesTypes ? t.matchesTypes.some(o => n.indexOf(o) > -1) : !1; })[0] || null; }
const cy = md(() => /firefox/i.test(navigator.userAgent)), hd = md(() => !!window.safari);
class wl {
    interpolate(n) { const { xs: i, ys: t, c1s: o, c2s: a, c3s: r } = this; let s = i.length - 1; if (n === i[s])
        return t[s]; let m = 0, l = r.length - 1, h; for (; m <= l;) {
        h = Math.floor(.5 * (m + l));
        const p = i[h];
        if (p < n)
            m = h + 1;
        else if (p > n)
            l = h - 1;
        else
            return t[h];
    } s = Math.max(0, l); const d = n - i[s], g = d * d; return t[s] + o[s] * d + a[s] * g + r[s] * d * g; }
    constructor(n, i) { const { length: t } = n, o = []; for (let p = 0; p < t; p++)
        o.push(p); o.sort((p, y) => n[p] < n[y] ? -1 : 1); const a = [], r = []; let s, m; for (let p = 0; p < t - 1; p++)
        s = n[p + 1] - n[p], m = i[p + 1] - i[p], a.push(s), r.push(m / s); const l = [r[0]]; for (let p = 0; p < a.length - 1; p++) {
        const y = r[p], S = r[p + 1];
        if (y * S <= 0)
            l.push(0);
        else {
            s = a[p];
            const T = a[p + 1], u = s + T;
            l.push(3 * u / ((u + T) / y + (u + s) / S));
        }
    } l.push(r[r.length - 1]); const h = [], d = []; let g; for (let p = 0; p < l.length - 1; p++) {
        g = r[p];
        const y = l[p], S = 1 / a[p], T = y + l[p + 1] - g - g;
        h.push((g - y - T) * S), d.push(T * S * S);
    } this.xs = n, this.ys = i, this.c1s = l, this.c2s = h, this.c3s = d; }
}
const uy = 1;
function gd(e) { const n = e.nodeType === uy ? e : e.parentElement; if (!n)
    return null; const { top: i, left: t } = n.getBoundingClientRect(); return { x: t, y: i }; }
function eo(e) { return { x: e.clientX, y: e.clientY }; }
function dy(e) { var n; return e.nodeName === "IMG" && (cy() || !(!((n = document.documentElement) === null || n === void 0) && n.contains(e))); }
function hy(e, n, i, t) { let o = e ? n.width : i, a = e ? n.height : t; return hd() && e && (a /= window.devicePixelRatio, o /= window.devicePixelRatio), { dragPreviewWidth: o, dragPreviewHeight: a }; }
function gy(e, n, i, t, o) { const a = dy(n), s = gd(a ? e : n), m = { x: i.x - s.x, y: i.y - s.y }, { offsetWidth: l, offsetHeight: h } = e, { anchorX: d, anchorY: g } = t, { dragPreviewWidth: p, dragPreviewHeight: y } = hy(a, n, l, h), S = () => { let M = new wl([0, .5, 1], [m.y, m.y / h * y, m.y + y - h]).interpolate(g); return hd() && a && (M += (window.devicePixelRatio - 1) * y), M; }, T = () => new wl([0, .5, 1], [m.x, m.x / l * p, m.x + p - l]).interpolate(d), { offsetX: u, offsetY: c } = o, f = u === 0 || u, b = c === 0 || c; return { x: f ? u : T(), y: b ? c : S() }; }
let fy = class {
    get window() { if (this.globalContext)
        return this.globalContext; if (typeof window < "u")
        return window; }
    get document() { var n; return !((n = this.globalContext) === null || n === void 0) && n.document ? this.globalContext.document : this.window ? this.window.document : void 0; }
    get rootElement() { var n; return ((n = this.optionsArgs) === null || n === void 0 ? void 0 : n.rootElement) || this.window; }
    constructor(n, i) { this.ownerDocument = null, this.globalContext = n, this.optionsArgs = i; }
};
function py(e, n, i) { return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e; }
function Tl(e) { for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {}, t = Object.keys(i);
    typeof Object.getOwnPropertySymbols == "function" && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function (o) { return Object.getOwnPropertyDescriptor(i, o).enumerable; }))), t.forEach(function (o) { py(e, o, i[o]); });
} return e; }
class yy {
    profile() { var n, i; return { sourcePreviewNodes: this.sourcePreviewNodes.size, sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size, sourceNodeOptions: this.sourceNodeOptions.size, sourceNodes: this.sourceNodes.size, dragStartSourceIds: ((n = this.dragStartSourceIds) === null || n === void 0 ? void 0 : n.length) || 0, dropTargetIds: this.dropTargetIds.length, dragEnterTargetIds: this.dragEnterTargetIds.length, dragOverTargetIds: ((i = this.dragOverTargetIds) === null || i === void 0 ? void 0 : i.length) || 0 }; }
    get window() { return this.options.window; }
    get document() { return this.options.document; }
    get rootElement() { return this.options.rootElement; }
    setup() { const n = this.rootElement; if (n !== void 0) {
        if (n.__isReactDndBackendSetUp)
            throw new Error("Cannot have two HTML5 backends at the same time.");
        n.__isReactDndBackendSetUp = !0, this.addEventListeners(n);
    } }
    teardown() { const n = this.rootElement; if (n !== void 0 && (n.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var i;
        (i = this.window) === null || i === void 0 || i.cancelAnimationFrame(this.asyncEndDragFrameId);
    } }
    connectDragPreview(n, i, t) { return this.sourcePreviewNodeOptions.set(n, t), this.sourcePreviewNodes.set(n, i), () => { this.sourcePreviewNodes.delete(n), this.sourcePreviewNodeOptions.delete(n); }; }
    connectDragSource(n, i, t) { this.sourceNodes.set(n, i), this.sourceNodeOptions.set(n, t); const o = r => this.handleDragStart(r, n), a = r => this.handleSelectStart(r); return i.setAttribute("draggable", "true"), i.addEventListener("dragstart", o), i.addEventListener("selectstart", a), () => { this.sourceNodes.delete(n), this.sourceNodeOptions.delete(n), i.removeEventListener("dragstart", o), i.removeEventListener("selectstart", a), i.setAttribute("draggable", "false"); }; }
    connectDropTarget(n, i) { const t = r => this.handleDragEnter(r, n), o = r => this.handleDragOver(r, n), a = r => this.handleDrop(r, n); return i.addEventListener("dragenter", t), i.addEventListener("dragover", o), i.addEventListener("drop", a), () => { i.removeEventListener("dragenter", t), i.removeEventListener("dragover", o), i.removeEventListener("drop", a); }; }
    addEventListeners(n) { n.addEventListener && (n.addEventListener("dragstart", this.handleTopDragStart), n.addEventListener("dragstart", this.handleTopDragStartCapture, !0), n.addEventListener("dragend", this.handleTopDragEndCapture, !0), n.addEventListener("dragenter", this.handleTopDragEnter), n.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), n.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), n.addEventListener("dragover", this.handleTopDragOver), n.addEventListener("dragover", this.handleTopDragOverCapture, !0), n.addEventListener("drop", this.handleTopDrop), n.addEventListener("drop", this.handleTopDropCapture, !0)); }
    removeEventListeners(n) { n.removeEventListener && (n.removeEventListener("dragstart", this.handleTopDragStart), n.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), n.removeEventListener("dragend", this.handleTopDragEndCapture, !0), n.removeEventListener("dragenter", this.handleTopDragEnter), n.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), n.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), n.removeEventListener("dragover", this.handleTopDragOver), n.removeEventListener("dragover", this.handleTopDragOverCapture, !0), n.removeEventListener("drop", this.handleTopDrop), n.removeEventListener("drop", this.handleTopDropCapture, !0)); }
    getCurrentSourceNodeOptions() { const n = this.monitor.getSourceId(), i = this.sourceNodeOptions.get(n); return Tl({ dropEffect: this.altKeyPressed ? "copy" : "move" }, i || {}); }
    getCurrentDropEffect() { return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect; }
    getCurrentSourcePreviewNodeOptions() { const n = this.monitor.getSourceId(), i = this.sourcePreviewNodeOptions.get(n); return Tl({ anchorX: .5, anchorY: .5, captureDraggingState: !1 }, i || {}); }
    isDraggingNativeItem() { const n = this.monitor.getItemType(); return Object.keys(Ml).some(i => Ml[i] === n); }
    beginDragNativeItem(n, i) { this.clearCurrentDragSourceNode(), this.currentNativeSource = ly(n, i), this.currentNativeHandle = this.registry.addSource(n, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]); }
    setCurrentDragSourceNode(n) { this.clearCurrentDragSourceNode(), this.currentDragSourceNode = n; const i = 1e3; this.mouseMoveTimeoutTimer = setTimeout(() => { var t; return (t = this.rootElement) === null || t === void 0 ? void 0 : t.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0); }, i); }
    clearCurrentDragSourceNode() { if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
            var n;
            (n = this.window) === null || n === void 0 || n.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
    } return !1; }
    handleDragStart(n, i) { n.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(i)); }
    handleDragEnter(n, i) { this.dragEnterTargetIds.unshift(i); }
    handleDragOver(n, i) { this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(i); }
    handleDrop(n, i) { this.dropTargetIds.unshift(i); }
    constructor(n, i, t) { this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.sourceNodes = new Map, this.sourceNodeOptions = new Map, this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = o => { const a = this.sourceNodes.get(o); return a && gd(a) || null; }, this.endDragNativeItem = () => { this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null); }, this.isNodeInDocument = o => !!(o && this.document && this.document.body && this.document.body.contains(o)), this.endDragIfSourceWasRemovedFromDOM = () => { const o = this.currentDragSourceNode; o == null || this.isNodeInDocument(o) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover()); }, this.scheduleHover = o => { this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => { this.monitor.isDragging() && this.actions.hover(o || [], { clientOffset: this.lastClientOffset }), this.hoverRafId = null; })); }, this.cancelHover = () => { this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null); }, this.handleTopDragStartCapture = () => { this.clearCurrentDragSourceNode(), this.dragStartSourceIds = []; }, this.handleTopDragStart = o => { if (o.defaultPrevented)
        return; const { dragStartSourceIds: a } = this; this.dragStartSourceIds = null; const r = eo(o); this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(a || [], { publishSource: !1, getSourceClientOffset: this.getSourceClientOffset, clientOffset: r }); const { dataTransfer: s } = o, m = qa(s); if (this.monitor.isDragging()) {
        if (s && typeof s.setDragImage == "function") {
            const h = this.monitor.getSourceId(), d = this.sourceNodes.get(h), g = this.sourcePreviewNodes.get(h) || d;
            if (g) {
                const { anchorX: p, anchorY: y, offsetX: S, offsetY: T } = this.getCurrentSourcePreviewNodeOptions(), f = gy(d, g, r, { anchorX: p, anchorY: y }, { offsetX: S, offsetY: T });
                s.setDragImage(g, f.x, f.y);
            }
        }
        try {
            s == null || s.setData("application/json", {});
        }
        catch { }
        this.setCurrentDragSourceNode(o.target);
        const { captureDraggingState: l } = this.getCurrentSourcePreviewNodeOptions();
        l ? this.actions.publishDragSource() : setTimeout(() => this.actions.publishDragSource(), 0);
    }
    else if (m)
        this.beginDragNativeItem(m);
    else {
        if (s && !s.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
            return;
        o.preventDefault();
    } }, this.handleTopDragEndCapture = () => { this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover(); }, this.handleTopDragEnterCapture = o => { if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var a;
        (a = this.currentNativeSource) === null || a === void 0 || a.loadDataTransfer(o.dataTransfer);
    } if (!this.enterLeaveCounter.enter(o.target) || this.monitor.isDragging())
        return; const { dataTransfer: s } = o, m = qa(s); m && this.beginDragNativeItem(m, s); }, this.handleTopDragEnter = o => { const { dragEnterTargetIds: a } = this; if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return; this.altKeyPressed = o.altKey, a.length > 0 && this.actions.hover(a, { clientOffset: eo(o) }), a.some(s => this.monitor.canDropOnTarget(s)) && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = this.getCurrentDropEffect())); }, this.handleTopDragOverCapture = o => { if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var a;
        (a = this.currentNativeSource) === null || a === void 0 || a.loadDataTransfer(o.dataTransfer);
    } }, this.handleTopDragOver = o => { const { dragOverTargetIds: a } = this; if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
    } this.altKeyPressed = o.altKey, this.lastClientOffset = eo(o), this.scheduleHover(a), (a || []).some(s => this.monitor.canDropOnTarget(s)) ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none")); }, this.handleTopDragLeaveCapture = o => { this.isDraggingNativeItem() && o.preventDefault(), this.enterLeaveCounter.leave(o.target) && (this.isDraggingNativeItem() && setTimeout(() => this.endDragNativeItem(), 0), this.cancelHover()); }, this.handleTopDropCapture = o => { if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var a;
        o.preventDefault(), (a = this.currentNativeSource) === null || a === void 0 || a.loadDataTransfer(o.dataTransfer);
    }
    else
        qa(o.dataTransfer) && o.preventDefault(); this.enterLeaveCounter.reset(); }, this.handleTopDrop = o => { const { dropTargetIds: a } = this; this.dropTargetIds = [], this.actions.hover(a, { clientOffset: eo(o) }), this.actions.drop({ dropEffect: this.getCurrentDropEffect() }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover(); }, this.handleSelectStart = o => { const a = o.target; typeof a.dragDrop == "function" && (a.tagName === "INPUT" || a.tagName === "SELECT" || a.tagName === "TEXTAREA" || a.isContentEditable || (o.preventDefault(), a.dragDrop())); }, this.options = new fy(i, t), this.actions = n.getActions(), this.monitor = n.getMonitor(), this.registry = n.getRegistry(), this.enterLeaveCounter = new sy(this.isNodeInDocument); }
}
const Sy = function (n, i, t) { return new yy(n, i, t); };
var Nn;
(function (e) { e.mouse = "mouse", e.touch = "touch", e.keyboard = "keyboard"; })(Nn || (Nn = {}));
class by {
    get delay() { var n; return (n = this.args.delay) !== null && n !== void 0 ? n : 0; }
    get scrollAngleRanges() { return this.args.scrollAngleRanges; }
    get getDropTargetElementsAtPoint() { return this.args.getDropTargetElementsAtPoint; }
    get ignoreContextMenu() { var n; return (n = this.args.ignoreContextMenu) !== null && n !== void 0 ? n : !1; }
    get enableHoverOutsideTarget() { var n; return (n = this.args.enableHoverOutsideTarget) !== null && n !== void 0 ? n : !1; }
    get enableKeyboardEvents() { var n; return (n = this.args.enableKeyboardEvents) !== null && n !== void 0 ? n : !1; }
    get enableMouseEvents() { var n; return (n = this.args.enableMouseEvents) !== null && n !== void 0 ? n : !1; }
    get enableTouchEvents() { var n; return (n = this.args.enableTouchEvents) !== null && n !== void 0 ? n : !0; }
    get touchSlop() { return this.args.touchSlop || 0; }
    get delayTouchStart() { var n, i, t, o; return (o = (t = (n = this.args) === null || n === void 0 ? void 0 : n.delayTouchStart) !== null && t !== void 0 ? t : (i = this.args) === null || i === void 0 ? void 0 : i.delay) !== null && o !== void 0 ? o : 0; }
    get delayMouseStart() { var n, i, t, o; return (o = (t = (n = this.args) === null || n === void 0 ? void 0 : n.delayMouseStart) !== null && t !== void 0 ? t : (i = this.args) === null || i === void 0 ? void 0 : i.delay) !== null && o !== void 0 ? o : 0; }
    get window() { if (this.context && this.context.window)
        return this.context.window; if (typeof window < "u")
        return window; }
    get document() { var n; if (!((n = this.context) === null || n === void 0) && n.document)
        return this.context.document; if (this.window)
        return this.window.document; }
    get rootElement() { var n; return ((n = this.args) === null || n === void 0 ? void 0 : n.rootElement) || this.document; }
    constructor(n, i) { this.args = n, this.context = i; }
}
function jy(e, n, i, t) { return Math.sqrt(Math.pow(Math.abs(i - e), 2) + Math.pow(Math.abs(t - n), 2)); }
function vy(e, n, i, t, o) { if (!o)
    return !1; const a = Math.atan2(t - n, i - e) * 180 / Math.PI + 180; for (let r = 0; r < o.length; ++r) {
    const s = o[r];
    if (s && (s.start == null || a >= s.start) && (s.end == null || a <= s.end))
        return !0;
} return !1; }
const Cy = { Left: 1, Right: 2, Center: 4 }, Ey = { Left: 0, Center: 1, Right: 2 };
function Ja(e) { return e.button === void 0 || e.button === Ey.Left; }
function Py(e) { return e.buttons === void 0 || (e.buttons & Cy.Left) === 0; }
function fd(e) { return !!e.targetTouches; }
const My = 1;
function wy(e) { const n = e.nodeType === My ? e : e.parentElement; if (!n)
    return; const { top: i, left: t } = n.getBoundingClientRect(); return { x: t, y: i }; }
function Ty(e, n) { if (e.targetTouches.length === 1)
    return Vo(e.targetTouches[0]); if (n && e.touches.length === 1 && e.touches[0].target === n.target)
    return Vo(e.touches[0]); }
function Vo(e, n) { return fd(e) ? Ty(e, n) : { x: e.clientX, y: e.clientY }; }
const qi = { [Nn.mouse]: { start: "mousedown", move: "mousemove", end: "mouseup", contextmenu: "contextmenu" }, [Nn.touch]: { start: "touchstart", move: "touchmove", end: "touchend" }, [Nn.keyboard]: { keydown: "keydown" } };
class ut {
    profile() { var n; return { sourceNodes: this.sourceNodes.size, sourcePreviewNodes: this.sourcePreviewNodes.size, sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size, targetNodes: this.targetNodes.size, dragOverTargetIds: ((n = this.dragOverTargetIds) === null || n === void 0 ? void 0 : n.length) || 0 }; }
    get document() { return this.options.document; }
    setup() { const n = this.options.rootElement; n && (B(!ut.isSetUp, "Cannot have two Touch backends at the same time."), ut.isSetUp = !0, this.addEventListener(n, "start", this.getTopMoveStartHandler()), this.addEventListener(n, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(n, "move", this.handleTopMove), this.addEventListener(n, "move", this.handleTopMoveCapture, !0), this.addEventListener(n, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.addEventListener(n, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.addEventListener(n, "keydown", this.handleCancelOnEscape, !0)); }
    teardown() { const n = this.options.rootElement; n && (ut.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(n, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(n, "start", this.handleTopMoveStart), this.removeEventListener(n, "move", this.handleTopMoveCapture, !0), this.removeEventListener(n, "move", this.handleTopMove), this.removeEventListener(n, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.removeEventListener(n, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.removeEventListener(n, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver()); }
    addEventListener(n, i, t, o = !1) { const a = o; this.listenerTypes.forEach(function (r) { const s = qi[r][i]; s && n.addEventListener(s, t, a); }); }
    removeEventListener(n, i, t, o = !1) { const a = o; this.listenerTypes.forEach(function (r) { const s = qi[r][i]; s && n.removeEventListener(s, t, a); }); }
    connectDragSource(n, i) { const t = this.handleMoveStart.bind(this, n); return this.sourceNodes.set(n, i), this.addEventListener(i, "start", t), () => { this.sourceNodes.delete(n), this.removeEventListener(i, "start", t); }; }
    connectDragPreview(n, i, t) { return this.sourcePreviewNodeOptions.set(n, t), this.sourcePreviewNodes.set(n, i), () => { this.sourcePreviewNodes.delete(n), this.sourcePreviewNodeOptions.delete(n); }; }
    connectDropTarget(n, i) { const t = this.options.rootElement; if (!this.document || !t)
        return () => { }; const o = a => { if (!this.document || !t || !this.monitor.isDragging())
        return; let r; switch (a.type) {
        case qi.mouse.move:
            r = { x: a.clientX, y: a.clientY };
            break;
        case qi.touch.move:
            var s, m;
            r = { x: ((s = a.touches[0]) === null || s === void 0 ? void 0 : s.clientX) || 0, y: ((m = a.touches[0]) === null || m === void 0 ? void 0 : m.clientY) || 0 };
            break;
    } const l = r != null ? this.document.elementFromPoint(r.x, r.y) : void 0, h = l && i.contains(l); if (l === i || h)
        return this.handleMove(a, n); }; return this.addEventListener(this.document.body, "move", o), this.targetNodes.set(n, i), () => { this.document && (this.targetNodes.delete(n), this.removeEventListener(this.document.body, "move", o)); }; }
    getTopMoveStartHandler() { return !this.options.delayTouchStart && !this.options.delayMouseStart ? this.handleTopMoveStart : this.handleTopMoveStartDelay; }
    installSourceNodeRemovalObserver(n) { this.uninstallSourceNodeRemovalObserver(), this.draggedSourceNode = n, this.draggedSourceNodeRemovalObserver = new MutationObserver(() => { n && !n.parentElement && (this.resurrectSourceNode(), this.uninstallSourceNodeRemovalObserver()); }), !(!n || !n.parentElement) && this.draggedSourceNodeRemovalObserver.observe(n.parentElement, { childList: !0 }); }
    resurrectSourceNode() { this.document && this.draggedSourceNode && (this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), this.document.body.appendChild(this.draggedSourceNode)); }
    uninstallSourceNodeRemovalObserver() { this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(), this.draggedSourceNodeRemovalObserver = void 0, this.draggedSourceNode = void 0; }
    constructor(n, i, t) { this.getSourceClientOffset = o => { const a = this.sourceNodes.get(o); return a && wy(a); }, this.handleTopMoveStartCapture = o => { Ja(o) && (this.moveStartSourceIds = []); }, this.handleMoveStart = o => { Array.isArray(this.moveStartSourceIds) && this.moveStartSourceIds.unshift(o); }, this.handleTopMoveStart = o => { if (!Ja(o))
        return; const a = Vo(o); a && (fd(o) && (this.lastTargetTouchFallback = o.targetTouches[0]), this._mouseClientOffset = a), this.waitingForDelay = !1; }, this.handleTopMoveStartDelay = o => { if (!Ja(o))
        return; const a = o.type === qi.touch.start ? this.options.delayTouchStart : this.options.delayMouseStart; this.timeout = setTimeout(this.handleTopMoveStart.bind(this, o), a), this.waitingForDelay = !0; }, this.handleTopMoveCapture = () => { this.dragOverTargetIds = []; }, this.handleMove = (o, a) => { this.dragOverTargetIds && this.dragOverTargetIds.unshift(a); }, this.handleTopMove = o => { if (this.timeout && clearTimeout(this.timeout), !this.document || this.waitingForDelay)
        return; const { moveStartSourceIds: a, dragOverTargetIds: r } = this, s = this.options.enableHoverOutsideTarget, m = Vo(o, this.lastTargetTouchFallback); if (!m)
        return; if (this._isScrolling || !this.monitor.isDragging() && vy(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, m.x, m.y, this.options.scrollAngleRanges)) {
        this._isScrolling = !0;
        return;
    } if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty("x") && a && jy(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, m.x, m.y) > (this.options.touchSlop ? this.options.touchSlop : 0) && (this.moveStartSourceIds = void 0, this.actions.beginDrag(a, { clientOffset: this._mouseClientOffset, getSourceClientOffset: this.getSourceClientOffset, publishSource: !1 })), !this.monitor.isDragging())
        return; const l = this.sourceNodes.get(this.monitor.getSourceId()); this.installSourceNodeRemovalObserver(l), this.actions.publishDragSource(), o.cancelable && o.preventDefault(); const h = (r || []).map(y => this.targetNodes.get(y)).filter(y => !!y), d = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(m.x, m.y, h) : this.document.elementsFromPoint(m.x, m.y), g = []; for (const y in d) {
        if (!d.hasOwnProperty(y))
            continue;
        let S = d[y];
        for (S != null && g.push(S); S;)
            S = S.parentElement, S && g.indexOf(S) === -1 && g.push(S);
    } const p = g.filter(y => h.indexOf(y) > -1).map(y => this._getDropTargetId(y)).filter(y => !!y).filter((y, S, T) => T.indexOf(y) === S); if (s)
        for (const y in this.targetNodes) {
            const S = this.targetNodes.get(y);
            if (l && S && S.contains(l) && p.indexOf(y) === -1) {
                p.unshift(y);
                break;
            }
        } p.reverse(), this.actions.hover(p, { clientOffset: m }); }, this._getDropTargetId = o => { const a = this.targetNodes.keys(); let r = a.next(); for (; r.done === !1;) {
        const s = r.value;
        if (o === this.targetNodes.get(s))
            return s;
        r = a.next();
    } }, this.handleTopMoveEndCapture = o => { if (this._isScrolling = !1, this.lastTargetTouchFallback = void 0, !!Py(o)) {
        if (!this.monitor.isDragging() || this.monitor.didDrop()) {
            this.moveStartSourceIds = void 0;
            return;
        }
        o.cancelable && o.preventDefault(), this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.drop(), this.actions.endDrag();
    } }, this.handleCancelOnEscape = o => { o.key === "Escape" && this.monitor.isDragging() && (this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.endDrag()); }, this.options = new by(t, i), this.actions = n.getActions(), this.monitor = n.getMonitor(), this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(Nn.mouse), this.options.enableTouchEvents && this.listenerTypes.push(Nn.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(Nn.keyboard); }
}
const Ly = function (n, i = {}, t = {}) { return new ut(n, i, t); };

var re = {}, ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.default = { opacity: 1, color: [], resize: !0 };
var ga = {};
Object.defineProperty(ga, "__esModule", { value: !0 });
var pd = { linear: function (e, n, i, t) { return i + (t - i) * e; }, swing: function (e, n, i, t, o) { return pd.easeInOutQuad(e, n, i, t, o); }, easeInOutQuad: function (e, n, i, t, o) { return (n /= o / 2) < 1 ? t / 2 * n * n + i : -t / 2 * (--n * (n - 2) - 1) + i; } };
ga.default = pd;
var fa = {}, nn = {}, $ = {}, mn = {};
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.EVENT_NAMES_SNOW = e.EVENT_NAMES_WAVE_LOADING = e.EVENT_NAMES = e.regExp = e.isRuntimeSupported = e.isIE8 = e.defaultCanvasHeight = e.defaultCanvasWidth = e.objectCtorString = e.funcToString = e.orientationSupport = e.doublePi = e.piBy180 = void 0, e.piBy180 = Math.PI / 180, e.doublePi = Math.PI * 2, e.orientationSupport = !!window.DeviceOrientationEvent, e.funcToString = Function.prototype.toString, e.objectCtorString = e.funcToString.call(Object), e.defaultCanvasWidth = 485, e.defaultCanvasHeight = 300, e.isIE8 = /msie\s8.0/i.test(navigator.userAgent), e.isRuntimeSupported = !!Object.defineProperty && !e.isIE8, e.regExp = { trimAll: /\s/g, http: /^(https?:\/\/|\/\/)/i, shapeStar: /^star(:\d+:\d+(\.\d+)?)?$/, imageBase64: /^data:image\/(png|jpe?g|gif|svg\+xml);base64,/ }, function (n) { n.DESTROY = "DESTROY", n.RESIZE = "RESIZE"; }(e.EVENT_NAMES || (e.EVENT_NAMES = {})), function (n) { n.PROGRESS = "PROGRESS", n.FINISHED = "FINISHED"; }(e.EVENT_NAMES_WAVE_LOADING || (e.EVENT_NAMES_WAVE_LOADING = {})), function (n) { n.FINISHED = "FINISHED"; }(e.EVENT_NAMES_SNOW || (e.EVENT_NAMES_SNOW = {})); })(mn);
Object.defineProperty($, "__esModule", { value: !0 });
$.isElement = $.isNil = $.isNull = $.isUndefined = $.isBoolean = $.isNumber = $.isString = $.isPlainObject = $.isArray = $.isFunction = $.typeChecking = void 0;
var Ll = mn;
function nm(e, n) { return Object.prototype.toString.call(e) === n; }
$.typeChecking = nm;
function ky(e) { return nm(e, "[object Function]"); }
$.isFunction = ky;
function Fy(e) { return Array.isArray(e); }
$.isArray = Fy;
function Wy(e) { if (!nm(e, "[object Object]"))
    return !1; var n = Object.getPrototypeOf(e); if (n === null)
    return !0; var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor; return typeof i == "function" && i instanceof i && Ll.funcToString.call(i) === Ll.objectCtorString; }
$.isPlainObject = Wy;
function Ry(e) { return typeof e == "string"; }
$.isString = Ry;
function Hy(e) { return typeof e == "number"; }
$.isNumber = Hy;
function Ay(e) { return typeof e == "boolean"; }
$.isBoolean = Ay;
function yd(e) { return e === void 0; }
$.isUndefined = yd;
function Sd(e) { return e === null; }
$.isNull = Sd;
function Ny(e) { return yd(e) || Sd(e); }
$.isNil = Ny;
function Oy(e) { return !!(e && e.nodeType === 1); }
$.isElement = Oy;
var On = {}, Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.upperFirst = Ye.trimAll = Ye.toFixed = Ye.pInt = void 0;
var By = mn;
function Gy(e, n) { return n === void 0 && (n = 10), parseInt(e, n); }
Ye.pInt = Gy;
function Iy(e, n) { return n === void 0 && (n = 0), parseFloat(Number(e).toFixed(n)); }
Ye.toFixed = Iy;
function xy(e) { return e.replace(By.regExp.trimAll, ""); }
Ye.trimAll = xy;
function _y(e) { return e[0].toUpperCase() + e.substring(1); }
Ye.upperFirst = _y;
Object.defineProperty(On, "__esModule", { value: !0 });
On.observeElementRemoved = On.offset = On.getNumberValueOfStyle = void 0;
var bd = $, Vy = Ye;
function zy(e, n) { var i = window.getComputedStyle(e)[n]; if (bd.isString(i)) {
    var t = i.match(/\d+/);
    if (t)
        return Vy.pInt(t[0]);
} }
On.getNumberValueOfStyle = zy;
function Uy(e) { var n = e.getBoundingClientRect(); return { left: window.pageXOffset + n.left, top: window.pageYOffset + n.top }; }
On.offset = Uy;
On.observeElementRemoved = function () { var e = window.MutationObserver || window.WebKitMutationObserver, n = function (o, a) { if (o === a)
    return !0; if (bd.isElement(o)) {
    for (var r = o.children, s = r.length; s--;)
        if (n(r[s], a))
            return !0;
} return !1; }, i = function (o, a) { var r = new e(function (s, m) { for (var l = s.length; l--;)
    for (var h = s[l].removedNodes, d = h.length; d--;)
        if (n(h[d], o))
            return m.disconnect(), a(); }); r.observe(document, { childList: !0, subtree: !0 }); }, t = function (o, a) { var r = function (s) { n(s.target, o) && (document.removeEventListener("DOMNodeRemoved", r), a()); }; document.addEventListener("DOMNodeRemoved", r); }; return e ? i : t; }();
var Bn = {};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.calcQuantity = Bn.radiansToDegrees = Bn.degreesToRadians = void 0;
var jd = mn;
function Qy(e) { return e * jd.piBy180; }
Bn.degreesToRadians = Qy;
function $y(e) { return e / jd.piBy180; }
Bn.radiansToDegrees = $y;
function Ky(e, n) { return e > 0 && e < 1 ? e * n : e; }
Bn.calcQuantity = Ky;
var Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.loadImage = Ni.merge = void 0;
var Dl = $;
function vd() { for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n]; for (var i = e.length, t = e[0] || {}, o = 0; o < i; o++)
    for (var a in e[o]) {
        var r = e[o][a], s = Array.isArray(r);
        if (s || Dl.isPlainObject(r)) {
            var m = t[a];
            s ? m = Array.isArray(m) ? m : [] : m = Dl.isPlainObject(m) ? m : {}, t[a] = vd(m, r);
        }
        else
            t[a] = r;
    } return t; }
Ni.merge = vd;
function dt(e, n, i) { if (dt.cachedImages[e]) {
    n(dt.cachedImages[e]);
    return;
} var t = 0; (function o() { var a = new Image; a.addEventListener("load", function () { dt.cachedImages[e] = a, n(a); }), a.addEventListener("error", function (r) { t++, i == null || i(r, t), t <= 3 && o(); }), a.crossOrigin = "Anonymous", a.src = e; })(); }
Ni.loadImage = dt;
dt.cachedImages = {};
var Gn = {};
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.randomColor = Gn.randomSpeed = Gn.randomInRange = void 0;
function Cd(e, n) { return e === n ? e : Math.random() * (e - n) + n; }
Gn.randomInRange = Cd;
function qy(e, n) { return (Cd(e, n) || e) * (Math.random() > .5 ? 1 : -1); }
Gn.randomSpeed = qy;
function Jy() { return "#" + Math.random().toString(16).slice(-6); }
Gn.randomColor = Jy;
(function (e) { var n = W && W.__createBinding || (Object.create ? function (t, o, a, r) { r === void 0 && (r = a), Object.defineProperty(t, r, { enumerable: !0, get: function () { return o[a]; } }); } : function (t, o, a, r) { r === void 0 && (r = a), t[r] = o[a]; }), i = W && W.__exportStar || function (t, o) { for (var a in t)
    a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && n(o, t, a); }; Object.defineProperty(e, "__esModule", { value: !0 }), i($, e), i(On, e), i(Bn, e), i(Ni, e), i(Gn, e), i(Ye, e); })(nn);
Object.defineProperty(fa, "__esModule", { value: !0 });
var Yy = nn, Zy = function () { function e() { this.listenerMap = {}; } return e.prototype.on = function (n) { for (var i = [], t = 1; t < arguments.length; t++)
    i[t - 1] = arguments[t]; this.listenerMap[n] || (this.listenerMap[n] = []); for (var o = 0, a = i; o < a.length; o++) {
    var r = a[o];
    Yy.isFunction(r) && this.listenerMap[n].push(r);
} return this; }, e.prototype.off = function (n, i) { if (!n)
    return this.listenerMap = {}, this; if (!i)
    return this.listenerMap[n] = [], this; var t = this.listenerMap[n], o = t.indexOf(i); return o !== -1 && t.splice(o, 1), this; }, e.prototype.trigger = function (n) { for (var i = [], t = 1; t < arguments.length; t++)
    i[t - 1] = arguments[t]; var o = this.listenerMap[n]; return Array.isArray(o) && o.forEach(function (a) { a.apply(void 0, i); }), this; }, e; }();
fa.default = Zy;
var im = {}, Nt = {};
window.requestAnimationFrame = function (e) { return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (n) { return e.setTimeout(n, 1e3 / 60); }; }(window);
Math.hypot || (Math.hypot = function () { for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n]; for (var i = 0, t = 0, o = !1, a = 0; a < arguments.length; ++a) {
    var r = Math.abs(Number(e[a]));
    r === 1 / 0 && (o = !0), r > i && (t *= i / r * (i / r), i = r), t += r === 0 && i === 0 ? 0 : r / i * (r / i);
} return o || i === 1 / 0 ? 1 / 0 : i * Math.sqrt(t); });
var kl = W && W.__spreadArray || function (e, n) { for (var i = 0, t = n.length, o = e.length; i < t; i++, o++)
    e[o] = n[i]; return e; }, Ed = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(Nt, "__esModule", { value: !0 });
var Xy = Ed(ha), Qn = mn, eS = Ed(fa), jn = nn, nS = function () { function e(n, i, t) { this.elements = [], this.isCanvasRemoved = !1, this.isPaused = !1, this.eventEmitter = new eS.default, this.isRunningSupported = !1, Qn.isRuntimeSupported && (this.container = jn.isElement(i) ? i : document.querySelector(i), this.isRunningSupported = !!this.container, this.container && (this.options = jn.merge({}, Xy.default, n, t), this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.container.innerHTML = "", this.container.appendChild(this.canvas), this.getColor = this.makeColorMethod())); } return e.prototype.bootstrap = function () { this.isRunningSupported && (this.setCanvasDimension(), this.observeCanvasRemoved(), this.resizeEvent(), this.init(), this.draw()); }, e.prototype.clearCanvasAndSetGlobalAttrs = function () { var n = this, i = n.ctx, t = n.canvasWidth, o = n.canvasHeight; i.clearRect(0, 0, t, o), i.globalAlpha = this.options.opacity; }, e.prototype.makeColorMethod = function () { var n = this.options.color, i = Array.isArray(n) ? n.length : 0; return jn.isString(n) ? function () { return n; } : i === 0 ? jn.randomColor : function () { return n[Math.floor(Math.random() * i)]; }; }, e.prototype.setCanvasDimension = function () { var n = window.devicePixelRatio, i = jn.getNumberValueOfStyle(this.container, "width") || Qn.defaultCanvasWidth, t = jn.getNumberValueOfStyle(this.container, "height") || Qn.defaultCanvasHeight; this.canvasWidth = i, this.canvasHeight = t, this.canvas.width = i * n, this.canvas.height = t * n, this.canvas.style.width = i + "px", this.canvas.style.height = t + "px", this.ctx.scale(n, n); }, e.prototype.observeCanvasRemoved = function () { var n = this; jn.observeElementRemoved(this.canvas, function () { n.isCanvasRemoved = !0, n.resizeHandler && window.removeEventListener("resize", n.resizeHandler), n.eventEmitter.trigger(Qn.EVENT_NAMES.DESTROY), n.eventEmitter.off(); }); }, e.prototype.requestAnimationFrame = function () { !this.isPaused && !this.isCanvasRemoved && window.requestAnimationFrame(this.draw.bind(this)); }, e.prototype.resizeEvent = function () { var n = this; this.options.resize && (this.resizeHandler = function () { var i = n.canvasWidth, t = n.canvasHeight; n.setCanvasDimension(); var o = n.canvasWidth / i, a = n.canvasHeight / t; n.elements.forEach(function (r) { jn.isPlainObject(r) && (r.x *= o, r.y *= a); }), n.eventEmitter.trigger(Qn.EVENT_NAMES.RESIZE, o, a), n.isPaused && n.draw(); }, window.addEventListener("resize", this.resizeHandler)); }, e.prototype.pause = function () { this.isRunningSupported && !this.isCanvasRemoved && !this.isPaused && (this.isPaused = !0); }, e.prototype.open = function () { this.isRunningSupported && !this.isCanvasRemoved && this.isPaused && (this.isPaused = !1, this.draw()); }, e.prototype.onDestroy = function () { for (var n, i = [], t = 0; t < arguments.length; t++)
    i[t] = arguments[t]; return (n = this.eventEmitter).on.apply(n, kl([Qn.EVENT_NAMES.DESTROY], i)), this; }, e.prototype.onResize = function () { for (var n, i = [], t = 0; t < arguments.length; t++)
    i[t] = arguments[t]; return (n = this.eventEmitter).on.apply(n, kl([Qn.EVENT_NAMES.RESIZE], i)), this; }, e; }();
Nt.default = nS;
var iS = W && W.__extends || function () { var e = function (n, i) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, o) { t.__proto__ = o; } || function (t, o) { for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]); }, e(n, i); }; return function (n, i) { if (typeof i != "function" && i !== null)
    throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); e(n, i); function t() { this.constructor = n; } n.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t); }; }(), tS = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(im, "__esModule", { value: !0 });
var oS = tS(Nt), ci = nn, aS = function (e) { iS(n, e); function n(i, t) { var o = e.call(this, n.defaultConfig, i, t) || this; return o.specificAngles = [-180, -90, 0, 90, 180], o.bootstrap(), o; } return n.prototype.init = function () { this.createLines(this.options.num), this.createLinesOnClick(); }, n.prototype.createLines = function (i, t) { for (var o = this.options, a = o.maxWidth, r = o.minWidth, s = o.maxSpeed, m = o.minSpeed, l = o.maxDegree, h = o.minDegree; i--;)
    this.elements.push({ x: t ?? Math.random() * this.canvasWidth, width: ci.randomInRange(a, r), color: this.getColor(), speed: ci.randomSpeed(s, m), degree: ci.toFixed(ci.randomInRange(l, h) % 180) }); }, n.prototype.createLinesOnClick = function () { var i = this; if (this.options.createOnClick) {
    var t = function (o) { if (!i.isPaused) {
        var a = o.pageX - ci.offset(i.canvas).left;
        i.createLines(i.options.numberOfCreations, a);
    } };
    this.canvas.addEventListener("click", t), this.onDestroy(function () { i.canvas.removeEventListener("click", t); });
} }, n.prototype.draw = function () { var i = this, t = this, o = t.ctx, a = t.canvasWidth, r = t.canvasHeight, s = this.options, m = s.removeOnOverflow, l = s.overflowCompensation, h = s.reservedLines; this.clearCanvasAndSetGlobalAttrs(); var d = Math.hypot(a, r), g = d * 10, p = Math.max(0, l); this.elements.forEach(function (y, S) { var T = ci.degreesToRadians(-y.degree), u = 0; i.specificAngles.includes(y.degree) || (u = Math.abs(i.canvasHeight / 2 / Math.tan(T))), o.save(), o.beginPath(), o.translate(y.x, i.canvasHeight / 2), o.rotate(T), o.moveTo(-g, 0), o.lineTo(g, 0), o.lineWidth = y.width, o.strokeStyle = y.color, o.stroke(), o.closePath(), o.restore(), i.isPaused || (y.x += y.speed); var c = !1, f = !1; y.x + u + y.width + p < 0 ? (c = !0, f = !0) : y.x > i.canvasWidth + u + y.width + p && (c = !0), c && (m && i.elements.length > h ? i.elements.splice(S, 1) : y.speed = Math.abs(y.speed) * (f ? 1 : -1)); }), this.requestAnimationFrame(); }, n.defaultConfig = { num: 6, maxWidth: 2, minWidth: 1, maxSpeed: 3, minSpeed: 1, maxDegree: 90, minDegree: 80, createOnClick: !0, numberOfCreations: 3, removeOnOverflow: !0, overflowCompensation: 20, reservedLines: 6 }, n; }(oS.default);
im.default = aS;
var tm = {}, pa = {}, rS = W && W.__extends || function () { var e = function (n, i) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, o) { t.__proto__ = o; } || function (t, o) { for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]); }, e(n, i); }; return function (n, i) { if (typeof i != "function" && i !== null)
    throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); e(n, i); function t() { this.constructor = n; } n.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t); }; }(), sS = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(pa, "__esModule", { value: !0 });
var mS = sS(Nt), ht = mn, Xr = nn, lS = ["circle", "triangle", "star", "image"];
function Fl(e) { if (Xr.isString(e)) {
    if (e === "circle" || e === "triangle")
        return { type: e };
    if (ht.regExp.shapeStar.test(e)) {
        var n = e.split(":");
        return { type: "star", sides: Number(n[1]) || 5, dent: Number(n[2]) || .5 };
    }
    if (ht.regExp.http.test(e) || ht.regExp.imageBase64.test(e)) {
        var i = { type: "image", isImageLoaded: !1 };
        return Xr.loadImage(e, function (t) { i.isImageLoaded = !0, i.source = t; }), i;
    }
    console.warn("Shape value of " + e + " is invalid.");
} try {
    if (e instanceof HTMLImageElement || e instanceof HTMLVideoElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap || e instanceof OffscreenCanvas)
        return { type: "image", isImageLoaded: !0, source: e };
}
catch {
    console.warn("Your browser does not support [CanvasImageSource](https://developer.mozilla.org/en-US/docs/Web/API/CanvasImageSource), please upgrade it.");
} return { type: "image", isImageLoaded: !1 }; }
function Wl(e, n, i, t, o, a) { e.translate(n, i), e.moveTo(0, 0 - t); for (var r = 0; r < o; r++)
    e.rotate(Math.PI / o), e.lineTo(0, 0 - t * a), e.rotate(Math.PI / o), e.lineTo(0, 0 - t); }
var cS = function (e) { rS(n, e); function n() { return e !== null && e.apply(this, arguments) || this; } return n.prototype.getShapeData = function () { var i = this.options.shape, t = { type: "circle" }; if (!i)
    return t; if (Xr.isArray(i)) {
    var o = i.length;
    if (o) {
        var a = i[Math.floor(Math.random() * o)];
        return Fl(a);
    }
    return t;
} return Fl(i); }, n.prototype.drawShape = function (i) { var t = i.shape, o = t.type, a = t.isImageLoaded, r = t.source, s = t.sides, m = t.dent; if (lS.indexOf(o) !== -1 && !(o === "image" && (!a || !r))) {
    if (this.ctx.save(), this.ctx.translate(i.x, i.y), this.ctx.rotate(i.rotate * ht.piBy180), o === "image") {
        var l = i.r * 2;
        this.ctx.drawImage(r, 0, 0, r.width || l, r.height || l, -i.r, -i.r, l, l);
    }
    else {
        switch (this.ctx.beginPath(), i.shape.type) {
            case "circle":
                this.ctx.arc(0, 0, i.r, 0, ht.doublePi);
                break;
            case "triangle":
                Wl(this.ctx, 0, 0, i.r, 3, .5);
                break;
            case "star":
                Wl(this.ctx, 0, 0, i.r, s, m);
                break;
        }
        this.ctx.fillStyle = i.color, this.ctx.fill();
    }
    this.ctx.restore();
} }, n; }(mS.default);
pa.default = cS;
var uS = W && W.__extends || function () { var e = function (n, i) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, o) { t.__proto__ = o; } || function (t, o) { for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]); }, e(n, i); }; return function (n, i) { if (typeof i != "function" && i !== null)
    throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); e(n, i); function t() { this.constructor = n; } n.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t); }; }(), zo = W && W.__assign || function () { return zo = Object.assign || function (e) { for (var n, i = 1, t = arguments.length; i < t; i++) {
    n = arguments[i];
    for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
} return e; }, zo.apply(this, arguments); }, dS = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(tm, "__esModule", { value: !0 });
var hS = mn, gS = dS(pa), Be = nn, fS = function (e) { uS(n, e); function n(i, t) { var o = e.call(this, n.defaultConfig, i, t) || this; return o.mouseX = 0, o.mouseY = 0, o.bootstrap(), o; } return n.prototype.init = function () { this.ownResizeEvent(), this.optionsNormalize(), this.options.range > 0 && (this.positionX = Math.random() * this.canvasWidth, this.positionY = Math.random() * this.canvasHeight, this.defineLineShape(), this.positionEvent()), this.mouseX = this.mouseY = 0, this.parallaxEvent(), this.createDots(); }, n.prototype.optionsNormalize = function () { var i = this, t = i.canvasWidth, o = i.options, a = ["num", "proximity", "range"]; a.forEach(function (r) { o[r] = Be.pInt(Be.calcQuantity(o[r], t)); }), !Be.isElement(o.eventElem) && o.eventElem !== document && (o.eventElem = this.canvas); }, n.prototype.defineLineShape = function () { var i = this, t = this.options, o = t.proximity, a = t.range, r = t.lineShape; switch (r) {
    case "cube":
        this.lineShapeMaker = function (s, m, l, h, d) { var g = i, p = g.positionX, y = g.positionY; Math.abs(s - l) <= o && Math.abs(m - h) <= o && Math.abs(s - p) <= a && Math.abs(m - y) <= a && Math.abs(l - p) <= a && Math.abs(h - y) <= a && d(); };
        break;
    default: this.lineShapeMaker = function (s, m, l, h, d) { var g = i, p = g.positionX, y = g.positionY; Math.abs(s - l) <= o && Math.abs(m - h) <= o && (Math.abs(s - p) <= a && Math.abs(m - y) <= a || Math.abs(l - p) <= a && Math.abs(h - y) <= a) && d(); };
} }, n.prototype.createDots = function () { for (var i = this, t = i.canvasWidth, o = i.canvasHeight, a = i.getColor, r = this.options, s = r.maxR, m = r.minR, l = r.maxSpeed, h = r.minSpeed, d = r.parallaxLayer, g = r.spin, p = r.spinMaxSpeed, y = r.spinMinSpeed, S = d.length, T = this.options.num; T--;) {
    var u = Be.randomInRange(s, m);
    this.elements.push({ r: u, x: Be.randomInRange(t - u, u), y: Be.randomInRange(o - u, u), vx: Be.randomSpeed(l, h), vy: Be.randomSpeed(l, h), color: a(), shape: this.getShapeData(), parallaxLayer: d[Math.floor(Math.random() * S)], parallaxOffsetX: 0, parallaxOffsetY: 0, rotate: g ? Be.randomInRange(0, 360) : 0, rotateSpeed: Be.randomSpeed(p, y) });
} }, n.prototype.draw = function () { var i = this, t = this.ctx, o = this.options.lineWidth; this.clearCanvasAndSetGlobalAttrs(), t.lineWidth = o, this.updateXY(), this.elements.forEach(function (a) { var r = a.x, s = a.y, m = a.parallaxOffsetX, l = a.parallaxOffsetY; i.updateElementRotate(a), i.drawShape(zo(zo({}, a), { x: r + m, y: s + l })); }), this.connectDots(), this.requestAnimationFrame(); }, n.prototype.updateElementRotate = function (i) { !this.options.spin || this.isPaused || (i.rotate += i.rotateSpeed, i.rotate >= 360 && (i.rotate = i.rotate - 360)); }, n.prototype.connectDots = function () { if (!(this.options.range <= 0)) {
    var i = this, t = i.elements, o = i.ctx, a = i.lineShapeMaker, r = t.length;
    t.forEach(function (s, m) { for (var l = s.x + s.parallaxOffsetX, h = s.y + s.parallaxOffsetY, d = function () { var g = t[m], p = g.x + g.parallaxOffsetX, y = g.y + g.parallaxOffsetY; a == null || a(l, h, p, y, function () { o.save(), o.beginPath(), o.moveTo(l, h), o.lineTo(p, y), o.strokeStyle = s.color, o.stroke(), o.restore(); }); }; ++m < r;)
        d(); });
} }, n.prototype.updateXY = function () { var i = this, t = i.isPaused, o = i.mouseX, a = i.mouseY, r = i.canvasWidth, s = i.canvasHeight, m = this.options, l = m.parallax, h = m.parallaxStrength; t || this.elements.forEach(function (d) { if (l) {
    var g = h * d.parallaxLayer;
    d.parallaxOffsetX += (o / g - d.parallaxOffsetX) / 10, d.parallaxOffsetY += (a / g - d.parallaxOffsetY) / 10;
} d.x += d.vx, d.y += d.vy; var p = d.r, y = d.parallaxOffsetX, S = d.parallaxOffsetY, T = d.x, u = d.y; T += y, u += S, T + p >= r ? d.vx = -Math.abs(d.vx) : T - p <= 0 && (d.vx = Math.abs(d.vx)), u + p >= s ? d.vy = -Math.abs(d.vy) : u - p <= 0 && (d.vy = Math.abs(d.vy)); }); }, n.prototype.getEventElemOffset = function () { var i = this.options.eventElem; return i === document ? null : Be.offset(i); }, n.prototype.eventProxy = function (i, t) { var o = this, a = this.options.eventElem, r; hS.orientationSupport && (r = function (m) { o.isPaused || Be.isNull(m.beta) || t(Math.min(Math.max(m.beta, -90), 90), m.gamma); }, window.addEventListener("deviceorientation", r)); var s = function (m) { if (!o.isPaused) {
    var l = m.pageX, h = m.pageY, d = o.getEventElemOffset();
    d && (l -= d.left, h -= d.top), i(l, h);
} }; a.addEventListener("mousemove", s), this.onDestroy(function () { window.removeEventListener("deviceorientation", r), a.removeEventListener("mousemove", s); }); }, n.prototype.positionEvent = function () { var i = this, t = this.options.range; t > this.canvasWidth && t > this.canvasHeight || this.eventProxy(function (o, a) { i.positionX = o, i.positionY = a; }, function (o, a) { i.positionX = -(a - 90) / 180 * i.canvasWidth, i.positionY = -(o - 90) / 180 * i.canvasHeight; }); }, n.prototype.parallaxEvent = function () { var i = this; this.options.parallax && this.eventProxy(function (t, o) { i.mouseX = t - i.canvasWidth / 2, i.mouseY = o - i.canvasHeight / 2; }, function (t, o) { i.mouseX = -o * i.canvasWidth / 180, i.mouseY = -t * i.canvasHeight / 180; }); }, n.prototype.ownResizeEvent = function () { var i = this; this.onResize(function (t, o) { i.options.range > 0 && (i.positionX *= t, i.positionY *= o, i.mouseX *= t, i.mouseY *= o); }); }, n.defaultConfig = { num: .12, maxR: 2.4, minR: .6, maxSpeed: 1, minSpeed: .1, proximity: .2, range: .2, lineWidth: .2, lineShape: "spider", eventElem: null, parallax: !1, parallaxLayer: [1, 2, 3], parallaxStrength: 3, spin: !1, spinMaxSpeed: 5, spinMinSpeed: 1 }, n; }(gS.default);
tm.default = fS;
var om = {}, pS = W && W.__extends || function () { var e = function (n, i) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, o) { t.__proto__ = o; } || function (t, o) { for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]); }, e(n, i); }; return function (n, i) { if (typeof i != "function" && i !== null)
    throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); e(n, i); function t() { this.constructor = n; } n.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t); }; }(), yS = W && W.__spreadArray || function (e, n) { for (var i = 0, t = n.length, o = e.length; i < t; i++, o++)
    e[o] = n[i]; return e; }, SS = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(om, "__esModule", { value: !0 });
var bS = SS(pa), Ji = nn, Rl = mn, jS = function (e) { pS(n, e); function n(i, t) { var o = e.call(this, n.defaultConfig, i, t) || this; return o.startTime = Date.now(), o.isFinished = !1, o.bootstrap(), o; } return n.prototype.init = function () { this.createSnowflakes(); }, n.prototype.createSnowflake = function () { var i = this.options, t = i.maxR, o = i.minR, a = i.maxSpeed, r = i.minSpeed, s = i.spin, m = i.spinMaxSpeed, l = i.spinMinSpeed, h = Ji.randomInRange(t, o); return { r: h, x: Math.random() * this.canvasWidth, y: -h, vx: Ji.randomSpeed(a, r), vy: Math.abs(h * Ji.randomSpeed(a, r)), color: this.getColor(), swingAt: Date.now(), shape: this.getShapeData(), rotate: s ? Ji.randomInRange(0, 360) : 0, rotateSpeed: Ji.randomSpeed(m, l) }; }, n.prototype.createSnowflakes = function () { for (var i = Math.max(0, Math.ceil(Math.random() * this.options.num)); i--;)
    this.elements.push(this.createSnowflake()); }, n.prototype.draw = function () { var i = this, t = this, o = t.canvasWidth, a = t.canvasHeight, r = t.isPaused, s = this.options, m = s.maxR, l = s.swing, h = s.swingInterval, d = s.swingProbability, g = s.duration; if (this.clearCanvasAndSetGlobalAttrs(), this.elements.forEach(function (y, S, T) { var u = y.x, c = y.y, f = y.r; i.updateElementRotate(y), i.drawShape(y), !r && (y.x += y.vx, y.y += y.vy, l && Date.now() - y.swingAt > h && Math.random() < f / m * d && (y.swingAt = Date.now(), y.vx *= -1), u + f < 0 || u - f > o ? g ? T.splice(S, 1) : T.splice(S, 1, i.createSnowflake()) : c - f > a && T.splice(S, 1)); }), !r) {
    var p = g ? Date.now() - this.startTime > g : !1;
    !p && Math.random() > .9 && this.createSnowflakes(), this.elements.length ? this.requestAnimationFrame() : (this.isFinished = !0, this.eventEmitter.trigger(Rl.EVENT_NAMES_SNOW.FINISHED));
} }, n.prototype.updateElementRotate = function (i) { !this.options.spin || this.isPaused || (i.rotate += i.rotateSpeed, i.rotate >= 360 && (i.rotate = i.rotate - 360)); }, n.prototype.fallAgain = function () { this.isRunningSupported && !this.isCanvasRemoved && !this.isPaused && this.isFinished && (this.isFinished = !1, this.startTime = Date.now(), this.createSnowflakes(), this.draw()); }, n.prototype.onFinished = function () { for (var i, t = [], o = 0; o < arguments.length; o++)
    t[o] = arguments[o]; return (i = this.eventEmitter).on.apply(i, yS([Rl.EVENT_NAMES_SNOW.FINISHED], t)), this; }, n.defaultConfig = { num: 6, color: "#fff", maxR: 6.5, minR: .5, maxSpeed: .6, minSpeed: .1, swing: !0, swingInterval: 2e3, swingProbability: .06, spin: !1, spinMaxSpeed: 5, spinMinSpeed: 1 }, n; }(bS.default);
om.default = jS;
var ya = {}, am = {}, vS = W && W.__extends || function () { var e = function (n, i) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, o) { t.__proto__ = o; } || function (t, o) { for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]); }, e(n, i); }; return function (n, i) { if (typeof i != "function" && i !== null)
    throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); e(n, i); function t() { this.constructor = n; } n.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t); }; }(), CS = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(am, "__esModule", { value: !0 });
var ES = CS(Nt), Za = nn, PS = function (e) { vS(n, e); function n() { var i = e !== null && e.apply(this, arguments) || this; return i.completedMap = {}, i; } return n.prototype.loadMaskImage = function () { var i = this, t = this.options.mask; if (t)
    if (Za.isString(t)) {
        if (this.completedMap[t]) {
            this.maskImage = this.completedMap[t];
            return;
        }
        Za.loadImage(t, function (o) { i.completedMap[t] = o, i.maskImage = o; });
    }
    else
        this.maskImage = t; }, n.prototype.renderMaskMode = function (i) { if (!this.maskImage) {
    i();
    return;
} var t = this.options.maskMode || "normal"; this.ctx.save(), this["mode" + Za.upperFirst(t)](i), this.ctx.restore(); }, n.prototype.modeNormal = function (i) { this.drawMaskImage(), this.ctx.globalCompositeOperation = "source-atop", i(); }, n.prototype.modeGhost = function (i) { this.ctx.save(), this.ctx.filter = "grayscale(100%)", this.drawMaskImage(), this.ctx.restore(), this.ctx.globalCompositeOperation = "source-atop", i(), this.ctx.clip(), this.drawMaskImage(); }, n.prototype.drawMaskImage = function () { if (this.maskImage) {
    var i = this, t = i.ctx, o = i.canvasWidth, a = i.canvasHeight, r = i.maskImage, s = r.width, m = r.height, l = s / m, h = s > o ? o : s, d = m > a ? a : m;
    s > m ? d = h / l : h = d * l;
    var g = (o - h) / 2, p = (a - d) / 2;
    t.drawImage(r, 0, 0, s, m, g, p, h, d);
} }, n; }(ES.default);
am.default = PS;
var MS = W && W.__extends || function () { var e = function (n, i) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, o) { t.__proto__ = o; } || function (t, o) { for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]); }, e(n, i); }; return function (n, i) { if (typeof i != "function" && i !== null)
    throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); e(n, i); function t() { this.constructor = n; } n.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t); }; }(), Hl = W && W.__spreadArray || function (e, n) { for (var i = 0, t = n.length, o = e.length; i < t; i++, o++)
    e[o] = n[i]; return e; }, wS = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(ya, "__esModule", { value: !0 });
var TS = mn, LS = wS(am), vn = nn, Pd = ["fill", "fillColor", "line", "lineColor", "lineWidth", "offsetLeft", "offsetTop", "crestHeight", "speed"], DS = ["opacity", "mask", "maskMode"], kS = Hl(Hl([], Pd), ["crestCount"]), FS = function (e) { MS(n, e); function n(i, t) { var o = e.call(this, n.defaultConfig, i, t) || this; return o.waveLength = [], o.bootstrap(), o; } return n.prototype.init = function () { this.ownResizeEvent(), this.optionsNormalize(), this.loadMaskImage(), this.createDots(); }, n.prototype.optionsNormalize = function () { var i = this; kS.forEach(function (t) { for (var o = i.options.num, a = i.options[t], r = [], s = t === "offsetLeft" ? i.canvasWidth : i.canvasHeight; o--;) {
    var m = Array.isArray(a) ? a[o] : a;
    r[o] = vn.isUndefined(m) ? i.getOptionDefaultValue(t) : n.getOptionProcessedValue(t, m, s), t === "crestCount" && (i.waveLength[o] = i.canvasWidth / r[o]);
} i.options[t] = r; }); }, n.prototype.getOptionDefaultValue = function (i) { var t = this, o = t.canvasWidth, a = t.canvasHeight; switch (i) {
    case "lineColor":
    case "fillColor": return vn.randomColor();
    case "lineWidth": return vn.randomInRange(2, .2);
    case "offsetLeft": return Math.random() * o;
    case "offsetTop":
    case "crestHeight": return Math.random() * a;
    case "crestCount": return vn.randomInRange(o / 2, 1);
    case "speed": return vn.randomInRange(.4, .1);
    case "fill": return !1;
    case "line": return !0;
} }, n.getOptionProcessedValue = function (i, t, o) { return i === "offsetTop" || i === "offsetLeft" || i === "crestHeight" ? vn.calcQuantity(t, o) : t; }, n.prototype.createDots = function () { for (var i = this, t = i.canvasWidth, o = i.waveLength, a = this.options.num; a--;) {
    for (var r = [], s = TS.doublePi / o[a], m = 0; m <= t; m++)
        r.push({ x: m, y: m * s });
    this.elements[a] = r;
} }, n.prototype.draw = function () { var i = this; this.clearCanvasAndSetGlobalAttrs(), this.renderMaskMode(function () { i.drawWaves(); }), this.requestAnimationFrame(); }, n.prototype.drawWaves = function () { var i = this, t = i.ctx, o = i.canvasWidth, a = i.canvasHeight, r = i.isPaused, s = this.options; this.elements.forEach(function (m, l) { var h = s.crestHeight[l], d = s.offsetLeft[l], g = s.offsetTop[l], p = s.speed[l]; t.save(), t.beginPath(), m.forEach(function (y, S) { t[S ? "lineTo" : "moveTo"](y.x, h * Math.sin(y.y + d) + g), !r && (y.y -= p); }), s.fill[l] && (t.lineTo(o, a), t.lineTo(0, a), t.closePath(), t.fillStyle = s.fillColor[l], t.fill()), s.line[l] && (t.lineWidth = s.lineWidth[l], t.strokeStyle = s.lineColor[l], t.stroke()), t.restore(); }); }, n.prototype.ownResizeEvent = function () { var i = this, t = ["offsetLeft", "offsetTop", "crestHeight"], o = this.options; this.onResize(function (a, r) { t.forEach(function (s) { var m = s === "offsetLeft" ? a : r; o[s].forEach(function (l, h, d) { d[h] = l * m; }); }), i.elements.forEach(function (s) { s.forEach(function (m) { m.x *= a, m.y *= r; }); }); }); }, n.prototype.updateComplexOptions = function (i, t) { if (t) {
    var o = i === "offsetLeft" ? this.canvasWidth : this.canvasHeight, a = this.options, r = Array.isArray(t);
    a[i].forEach(function (s, m, l) { var h = r ? t[m] : t; h = n.getOptionProcessedValue(i, h, o), vn.isUndefined(h) && (h = s), l[m] = h; });
} }, n.prototype.updatePlainOptions = function (i, t) { this.options[i] = t, i === "mask" && this.loadMaskImage(); }, n.prototype.setOptions = function (i) { if (!(!this.isRunningSupported || !vn.isPlainObject(i)))
    for (var t in i)
        Object.hasOwnProperty.call(i, t) && (DS.indexOf(t) !== -1 ? this.updatePlainOptions(t, i[t]) : Pd.indexOf(t) !== -1 && this.updateComplexOptions(t, i[t])); }, n.defaultConfig = { num: 3, fill: !1, fillColor: [], line: !0, lineColor: [], lineWidth: [], offsetLeft: [], offsetTop: [], crestHeight: [], crestCount: [], speed: [] }, n; }(LS.default);
ya.default = FS;
var rm = {}, WS = W && W.__extends || function () { var e = function (n, i) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, o) { t.__proto__ = o; } || function (t, o) { for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]); }, e(n, i); }; return function (n, i) { if (typeof i != "function" && i !== null)
    throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); e(n, i); function t() { this.constructor = n; } n.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t); }; }(), Al = W && W.__spreadArray || function (e, n) { for (var i = 0, t = n.length, o = e.length; i < t; i++, o++)
    e[o] = n[i]; return e; }, Md = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(rm, "__esModule", { value: !0 });
var no = mn, RS = Md(ga), Xa = nn, HS = Md(ya), AS = ["font", "textColor", "textFormatter", "borderRadius"], NS = function (e) { WS(n, e); function n(i, t) { var o = e.call(this, i, Xa.merge({}, n.defaultConfig, t)) || this; return o.progress = 0, o.isCompletedImmediately = !1, o.fastStepValue = 1, o; } return n.prototype.init = function () { this.halfCH = this.canvasHeight / 2, this.setOffsetTop(this.canvasHeight), this.setCanvasStyle(), this.ownResizeEvent(), this.optionsNormalize(), this.loadMaskImage(), this.createDots(), this.waveLoadingResizeEvent(); }, n.prototype.setOffsetTop = function (i) { var t = this.options.offsetTop; Array.isArray(t) ? t.forEach(function (o, a, r) { r[a] = i; }) : this.options.offsetTop = i; }, n.prototype.setCanvasStyle = function () { this.canvas.style.borderRadius = this.options.borderRadius; }, n.prototype.draw = function () { this.calcProgress(), this.progress < 100 ? (this.mainDrawing(), this.requestAnimationFrame()) : (this.progress = 100, this.mainDrawing(), this.eventEmitter.trigger(no.EVENT_NAMES_WAVE_LOADING.FINISHED)); }, n.prototype.mainDrawing = function () { var i = this; this.eventEmitter.trigger(no.EVENT_NAMES_WAVE_LOADING.PROGRESS, this.progress), this.calcOffsetTop(), this.clearCanvasAndSetGlobalAttrs(), this.renderMaskMode(function () { i.drawWaves(); }), this.drawText(); }, n.prototype.drawText = function () { var i = this, t = i.ctx, o = i.canvasWidth, a = i.halfCH, r = i.progress, s = this.options, m = s.font, l = s.textFormatter, h = s.textColor; if (!(!Xa.isString(l) || !l)) {
    var d = l.replace(/%d/g, String(Math.floor(r)));
    t.save(), t.font = m;
    var g = t.measureText(d).width, p = (o - g) / 2;
    t.textBaseline = "middle", t.fillStyle = h, t.font = m, t.fillText(d, p, a), t.restore();
} }, n.prototype.calcProgress = function () { if (this.isCompletedImmediately) {
    this.progress += this.fastStepValue, this.fastStepValue += .5;
    return;
} if (!(this.progress >= n.progressThreshold)) {
    this.startTime || (this.startTime = Date.now());
    var i = Date.now() - this.startTime, t = i / this.options.duration;
    t <= 1 && (this.progress = RS.default[this.options.easing](t, i, 0, 100, this.options.duration), this.progress + .9 >= n.progressThreshold && (this.progress = n.progressThreshold));
} }, n.prototype.calcOffsetTop = function () { if (!(!this.isCompletedImmediately && this.progress >= n.progressThreshold)) {
    var i = Math.max.apply(Math, this.options.crestHeight), t = this.progress === 100 ? -i : Math.ceil((100 - this.progress) / 100 * this.canvasHeight + i);
    this.setOffsetTop(t);
} }, n.prototype.waveLoadingResizeEvent = function () { var i = this; this.onResize(function () { i.halfCH = i.canvasHeight / 2, i.progress === 100 && i.draw(); }); }, n.prototype.setOptions = function (i) { if (!(!this.isRunningSupported || !Xa.isPlainObject(i))) {
    e.prototype.setOptions.call(this, i);
    for (var t in i)
        if (Object.hasOwnProperty.call(i, t) && AS.indexOf(t) !== -1) {
            var o = i[t];
            this.options[t] = o, t === "borderRadius" && this.setCanvasStyle();
        }
} }, n.prototype.done = function () { this.isRunningSupported && !this.isCompletedImmediately && (this.isCompletedImmediately = !0); }, n.prototype.onProgress = function () { for (var i, t = [], o = 0; o < arguments.length; o++)
    t[o] = arguments[o]; return (i = this.eventEmitter).on.apply(i, Al([no.EVENT_NAMES_WAVE_LOADING.PROGRESS], t)), this; }, n.prototype.onFinished = function () { for (var i, t = [], o = 0; o < arguments.length; o++)
    t[o] = arguments[o]; return (i = this.eventEmitter).on.apply(i, Al([no.EVENT_NAMES_WAVE_LOADING.FINISHED], t)), this; }, n.defaultConfig = { num: 1, font: "normal 400 16px Arial", textColor: "#333", textFormatter: "loading...%d%", fill: !0, line: !1, fillColor: "#27C9E5", borderRadius: "50%", offsetLeft: 0, crestHeight: 4, crestCount: 1, speed: .3, duration: 5e3, easing: "swing" }, n.progressThreshold = 99.99, n; }(HS.default);
rm.default = NS;
var OS = W && W.__createBinding || (Object.create ? function (e, n, i, t) { t === void 0 && (t = i), Object.defineProperty(e, t, { enumerable: !0, get: function () { return n[i]; } }); } : function (e, n, i, t) { t === void 0 && (t = i), e[t] = n[i]; }), BS = W && W.__setModuleDefault || (Object.create ? function (e, n) { Object.defineProperty(e, "default", { enumerable: !0, value: n }); } : function (e, n) { e.default = n; }), GS = W && W.__importStar || function (e) { if (e && e.__esModule)
    return e; var n = {}; if (e != null)
    for (var i in e)
        i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && OS(n, e, i); return BS(n, e), n; }, Un = W && W.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(re, "__esModule", { value: !0 });
re.WaveLoading = re.Wave = re.utils = re.Snow = Wd = re.Particle = re.Line = re.Events = re.easing = re.commonConfig = void 0;
var wd = Un(ha);
re.commonConfig = wd.default;
var Td = Un(ga);
re.easing = Td.default;
var Ld = Un(fa);
re.Events = Ld.default;
var Dd = GS(nn);
re.utils = Dd;
var kd = Un(im);
re.Line = kd.default;
var Fd = Un(tm), Wd = re.Particle = Fd.default, Rd = Un(om);
re.Snow = Rd.default;
var Hd = Un(ya);
re.Wave = Hd.default;
var Ad = Un(rm);
re.WaveLoading = Ad.default;
re.default = { Line: kd.default, Particle: Fd.default, Snow: Rd.default, Wave: Hd.default, WaveLoading: Ad.default, commonConfig: wd.default, easing: Td.default, Events: Ld.default, utils: Dd };
const IS = () => { const e = D.useRef(null); return D.useEffect(() => (e.current && new Wd(e.current, { range: 0, num: .1, minSpeed: .01, maxSpeed: .05, minR: .2, maxR: 1.2, color: "#ffffff" }), () => { e.current && (e.current.innerHTML = ""); }), []), k.jsx("div", { ref: e, style: { width: "100%", height: "100vh", background: "#000" } }); };
var he = [];
for (var er = 0; er < 256; ++er)
    he.push((er + 256).toString(16).slice(1));
function xS(e, n = 0) { return (he[e[n + 0]] + he[e[n + 1]] + he[e[n + 2]] + he[e[n + 3]] + "-" + he[e[n + 4]] + he[e[n + 5]] + "-" + he[e[n + 6]] + he[e[n + 7]] + "-" + he[e[n + 8]] + he[e[n + 9]] + "-" + he[e[n + 10]] + he[e[n + 11]] + he[e[n + 12]] + he[e[n + 13]] + he[e[n + 14]] + he[e[n + 15]]).toLowerCase(); }
var io, _S = new Uint8Array(16);
function VS() { if (!io && (io = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !io))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return io(_S); }
var zS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Nl = { randomUUID: zS };
function Uo(e, n, i) { if (Nl.randomUUID && !n && !e)
    return Nl.randomUUID(); e = e || {}; var t = e.random || (e.rng || VS)(); return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, xS(t); }

export {
  D as React,
  k as jsxRuntime,
  Xd as ReactDefault,
  nr as ReactDOM,
  sd as useDrag,
  em as useDrop,
  Lp as DndProvider,
  Sy as HTML5Backend,
  Ly as TouchBackend,
  IS as ParticleBackground,
  Uo as generateUUID
};
