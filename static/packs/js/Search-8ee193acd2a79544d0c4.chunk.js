(window.webpackJsonp = window.webpackJsonp || []).push([
    [8, 1, 3, 4, 109, 122, 131], {
        0: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "render", (function() { return D })), n.d(t, "hydrate", (function() { return z })), n.d(t, "createElement", (function() { return b })), n.d(t, "h", (function() { return b })), n.d(t, "Fragment", (function() { return g })), n.d(t, "createRef", (function() { return y })), n.d(t, "isValidElement", (function() { return a })), n.d(t, "Component", (function() { return O })), n.d(t, "cloneElement", (function() { return q })), n.d(t, "createContext", (function() { return H })), n.d(t, "toChildArray", (function() { return E })), n.d(t, "options", (function() { return o }));
            var r, o, i, a, c, l, u, s, d = {},
                f = [],
                p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function h(e, t) { for (var n in t) e[n] = t[n]; return e }

            function v(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function b(e, t, n) {
                var o, i, a, c = {};
                for (a in t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : c[a] = t[a];
                if (arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                    for (a in e.defaultProps) void 0 === c[a] && (c[a] = e.defaultProps[a]);
                return m(e, c, o, i, null)
            }

            function m(e, t, n, r, a) { var c = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == a ? ++i : a }; return null == a && null != o.vnode && o.vnode(c), c }

            function y() { return { current: null } }

            function g(e) { return e.children }

            function O(e, t) { this.props = e, this.context = t }

            function w(e, t) {
                if (null == t) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? w(e) : null
            }

            function S(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                        if (null != (n = e.__k[t]) && null != n.__e) { e.__e = e.__c.base = n.__e; break }
                    return S(e)
                }
            }

            function j(e) {
                (!e.__d && (e.__d = !0) && c.push(e) && !_.__r++ || u !== o.debounceRendering) && ((u = o.debounceRendering) || l)(_)
            }

            function _() {
                for (var e; _.__r = c.length;) e = c.sort((function(e, t) { return e.__v.__b - t.__v.__b })), c = [], e.some((function(e) {
                    var t, n, r, o, i, a;
                    e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = h({}, o)).__v = o.__v + 1, N(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? w(o) : i, o.__h), M(n, o), o.__e != i && S(o)))
                }))
            }

            function x(e, t, n, r, o, i, a, c, l, u) {
                var s, p, h, v, b, y, O, S = r && r.__k || f,
                    j = S.length;
                for (n.__k = [], s = 0; s < t.length; s++)
                    if (null != (v = n.__k[s] = null == (v = t[s]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? m(null, v, null, null, v) : Array.isArray(v) ? m(g, { children: v }, null, null, null) : v.__b > 0 ? m(v.type, v.props, v.key, null, v.__v) : v)) {
                        if (v.__ = n, v.__b = n.__b + 1, null === (h = S[s]) || h && v.key == h.key && v.type === h.type) S[s] = void 0;
                        else
                            for (p = 0; p < j; p++) {
                                if ((h = S[p]) && v.key == h.key && v.type === h.type) { S[p] = void 0; break }
                                h = null
                            }
                        N(e, v, h = h || d, o, i, a, c, l, u), b = v.__e, (p = v.ref) && h.ref != p && (O || (O = []), h.ref && O.push(h.ref, null, v), O.push(p, v.__c || b, v)), null != b ? (null == y && (y = b), "function" == typeof v.type && v.__k === h.__k ? v.__d = l = k(v, l, e) : l = C(e, v, h, S, b, l), "function" == typeof n.type && (n.__d = l)) : l && h.__e == l && l.parentNode != e && (l = w(h))
                    }
                for (n.__e = y, s = j; s--;) null != S[s] && ("function" == typeof n.type && null != S[s].__e && S[s].__e == n.__d && (n.__d = w(r, s + 1)), L(S[s], S[s]));
                if (O)
                    for (s = 0; s < O.length; s++) U(O[s], O[++s], O[++s])
            }

            function k(e, t, n) { for (var r, o = e.__k, i = 0; o && i < o.length; i++)(r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? k(r, t, n) : C(n, r, r, o, r.__e, t)); return t }

            function E(e, t) { return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) { E(e, t) })) : t.push(e)), t }

            function C(e, t, n, r, o, i) {
                var a, c, l;
                if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
                else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), a = null;
                    else {
                        for (c = i, l = 0;
                            (c = c.nextSibling) && l < r.length; l += 2)
                            if (c == o) break e;
                        e.insertBefore(o, i), a = i
                    }
                return void 0 !== a ? a : o.nextSibling
            }

            function I(e, t, n) { "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px" }

            function P(e, t, n, r, o) {
                var i;
                e: if ("style" === t)
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if ("string" == typeof r && (e.style.cssText = r = ""), r)
                            for (t in r) n && t in n || I(e.style, t, "");
                        if (n)
                            for (t in n) r && n[t] === r[t] || I(e.style, t, n[t])
                    }
                else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? A : T, i) : e.removeEventListener(t, i ? A : T, i);
                else if ("dangerouslySetInnerHTML" !== t) {
                    if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                    else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try { e[t] = null == n ? "" : n; break e } catch (e) {}
                    "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
                }
            }

            function T(e) { this.l[e.type + !1](o.event ? o.event(e) : e) }

            function A(e) { this.l[e.type + !0](o.event ? o.event(e) : e) }

            function N(e, t, n, r, i, a, c, l, u) {
                var s, d, f, p, v, b, m, y, w, S, j, _ = t.type;
                if (void 0 !== t.constructor) return null;
                null != n.__h && (u = n.__h, l = t.__e = n.__e, t.__h = null, a = [l]), (s = o.__b) && s(t);
                try {
                    e: if ("function" == typeof _) {
                            if (y = t.props, w = (s = _.contextType) && r[s.__c], S = s ? w ? w.props.value : s.__ : r, n.__c ? m = (d = t.__c = n.__c).__ = d.__E : ("prototype" in _ && _.prototype.render ? t.__c = d = new _(y, S) : (t.__c = d = new O(y, S), d.constructor = _, d.render = B), w && w.sub(d), d.props = y, d.state || (d.state = {}), d.context = S, d.__n = r, f = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != _.getDerivedStateFromProps && (d.__s == d.state && (d.__s = h({}, d.__s)), h(d.__s, _.getDerivedStateFromProps(y, d.__s))), p = d.props, v = d.state, f) null == _.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                            else {
                                if (null == _.getDerivedStateFromProps && y !== p && null != d.componentWillReceiveProps && d.componentWillReceiveProps(y, S), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(y, d.__s, S) || t.__v === n.__v) { d.props = y, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) { e && (e.__ = t) })), d.__h.length && c.push(d); break e }
                                null != d.componentWillUpdate && d.componentWillUpdate(y, d.__s, S), null != d.componentDidUpdate && d.__h.push((function() { d.componentDidUpdate(p, v, b) }))
                            }
                            d.context = S, d.props = y, d.state = d.__s, (s = o.__r) && s(t), d.__d = !1, d.__v = t, d.__P = e, s = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (r = h(h({}, r), d.getChildContext())), f || null == d.getSnapshotBeforeUpdate || (b = d.getSnapshotBeforeUpdate(p, v)), j = null != s && s.type === g && null == s.key ? s.props.children : s, x(e, Array.isArray(j) ? j : [j], t, n, r, i, a, c, l, u), d.base = t.__e, t.__h = null, d.__h.length && c.push(d), m && (d.__E = d.__ = null), d.__e = !1
                        } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = R(n.__e, t, n, r, i, a, c, u);
                        (s = o.diffed) && s(t)
                }
                catch (e) { t.__v = null, (u || null != a) && (t.__e = l, t.__h = !!u, a[a.indexOf(l)] = null), o.__e(e, t, n) }
            }

            function M(e, t) { o.__c && o.__c(t, e), e.some((function(t) { try { e = t.__h, t.__h = [], e.some((function(e) { e.call(t) })) } catch (e) { o.__e(e, t.__v) } })) }

            function R(e, t, n, o, i, a, c, l) {
                var u, s, f, p = n.props,
                    h = t.props,
                    b = t.type,
                    m = 0;
                if ("svg" === b && (i = !0), null != a)
                    for (; m < a.length; m++)
                        if ((u = a[m]) && "setAttribute" in u == !!b && (b ? u.localName === b : 3 === u.nodeType)) { e = u, a[m] = null; break }
                if (null == e) {
                    if (null === b) return document.createTextNode(h);
                    e = i ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, h.is && h), a = null, l = !1
                }
                if (null === b) p === h || l && e.data === h || (e.data = h);
                else {
                    if (a = a && r.call(e.childNodes), s = (p = n.props || d).dangerouslySetInnerHTML, f = h.dangerouslySetInnerHTML, !l) {
                        if (null != a)
                            for (p = {}, m = 0; m < e.attributes.length; m++) p[e.attributes[m].name] = e.attributes[m].value;
                        (f || s) && (f && (s && f.__html == s.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
                    }
                    if (function(e, t, n, r, o) { var i; for (i in n) "children" === i || "key" === i || i in t || P(e, i, null, n[i], r); for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || P(e, i, t[i], n[i], r) }(e, h, p, i, l), f) t.__k = [];
                    else if (m = t.props.children, x(e, Array.isArray(m) ? m : [m], t, n, o, i && "foreignObject" !== b, a, c, a ? a[0] : n.__k && w(n, 0), l), null != a)
                        for (m = a.length; m--;) null != a[m] && v(a[m]);
                    l || ("value" in h && void 0 !== (m = h.value) && (m !== e.value || "progress" === b && !m || "option" === b && m !== p.value) && P(e, "value", m, p.value, !1), "checked" in h && void 0 !== (m = h.checked) && m !== e.checked && P(e, "checked", m, p.checked, !1))
                }
                return e
            }

            function U(e, t, n) { try { "function" == typeof e ? e(t) : e.current = t } catch (e) { o.__e(e, n) } }

            function L(e, t, n) {
                var r, i;
                if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || U(r, null, t)), null != (r = e.__c)) {
                    if (r.componentWillUnmount) try { r.componentWillUnmount() } catch (e) { o.__e(e, t) }
                    r.base = r.__P = null
                }
                if (r = e.__k)
                    for (i = 0; i < r.length; i++) r[i] && L(r[i], t, "function" != typeof e.type);
                n || null == e.__e || v(e.__e), e.__e = e.__d = void 0
            }

            function B(e, t, n) { return this.constructor(e, n) }

            function D(e, t, n) {
                var i, a, c;
                o.__ && o.__(e, t), a = (i = "function" == typeof n) ? null : n && n.__k || t.__k, c = [], N(t, e = (!i && n || t).__k = b(g, null, [e]), a || d, d, void 0 !== t.ownerSVGElement, !i && n ? [n] : a ? null : t.firstChild ? r.call(t.childNodes) : null, c, !i && n ? n : a ? a.__e : t.firstChild, i), M(c, e)
            }

            function z(e, t) { D(e, t, z) }

            function q(e, t, n) { var o, i, a, c = h({}, e.props); for (a in t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : c[a] = t[a]; return arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), m(e.type, c, o || e.key, i || e.ref, null) }

            function H(e, t) {
                var n = {
                    __c: t = "__cC" + s++,
                    __: e,
                    Consumer: function(e, t) { return e.children(t) },
                    Provider: function(e) {
                        var n, r;
                        return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() { return r }, this.shouldComponentUpdate = function(e) { this.props.value !== e.value && n.some(j) }, this.sub = function(e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() { n.splice(n.indexOf(e), 1), t && t.call(e) }
                        }), e.children
                    }
                };
                return n.Provider.__ = n.Consumer.contextType = n
            }
            r = f.slice, o = {
                __e: function(e, t) {
                    for (var n, r, o; t = t.__;)
                        if ((n = t.__c) && !n.__) try { if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n } catch (t) { e = t }
                    throw e
                }
            }, i = 0, a = function(e) { return null != e && void 0 === e.constructor }, O.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(h({}, n), this.props)), e && h(n, e), null != e && this.__v && (t && this.__h.push(t), j(this))
            }, O.prototype.forceUpdate = function(e) { this.__v && (this.__e = !0, e && this.__h.push(e), j(this)) }, O.prototype.render = g, c = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, _.__r = 0, s = 0
        },
        10: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c })), n.d(t, "b", (function() { return d }));
            var r = n(9),
                o = n(11);

            function i(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) { if (!e) return; if ("string" === typeof e) return a(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t) }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return { s: o, n: function() { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] } }, e: function(e) { throw e }, f: o }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    l = !1;
                return { s: function() { n = n.call(e) }, n: function() { var e = n.next(); return c = e.done, e }, e: function(e) { l = !0, i = e }, f: function() { try { c || null == n.return || n.return() } finally { if (l) throw i } } }
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var c = function() { return Object(o.a)(l) },
                l = function() {
                    var e, t = i(document.querySelectorAll("[data-repositioning-dropdown]"));
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value;
                            n.classList.remove("reverse");
                            var o = "block" === n.style.display;
                            o || (n.style.opacity = 0, n.style.display = "block"), Object(r.a)({ element: n }) || n.classList.add("reverse"), o || (n.style.removeProperty("display"), n.style.removeProperty("opacity"))
                        }
                    } catch (a) { t.e(a) } finally { t.f() }
                },
                u = 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex="0"]',
                s = function(e) {
                    var t, n = e.triggerElementId,
                        r = e.dropdownContentId,
                        o = e.onClose,
                        i = document.getElementById(r);
                    i && (null === (t = document.getElementById(n)) || void 0 === t || t.setAttribute("aria-expanded", "false"), i.style.removeProperty("display"), null === o || void 0 === o || o())
                },
                d = function(e) {
                    var t = e.triggerElementId,
                        n = e.dropdownContentId,
                        r = e.dropdownContentCloseButtonId,
                        o = e.onClose,
                        i = e.onOpen,
                        a = document.getElementById(t),
                        c = document.getElementById(n);
                    if (a && c) {
                        a.setAttribute("aria-expanded", "false"), a.setAttribute("aria-controls", n), a.setAttribute("aria-haspopup", "true");
                        var l, d = function(e) {
                                var r = e.key;
                                if ("Escape" === r) "true" === a.getAttribute("aria-expanded") && (s({ triggerElementId: t, dropdownContentId: n, onClose: p }), a.focus());
                                else if ("Tab" === r) {
                                    (null === c || void 0 === c ? void 0 : c.contains(document.activeElement)) || s({ triggerElementId: t, dropdownContentId: n, onClose: p })
                                }
                            },
                            f = function(e) {
                                var r = e.target;
                                r === a || c.contains(r) || a.contains(r) || (s({ triggerElementId: t, dropdownContentId: n, onClose: p }), r.matches(u) || a.focus())
                            },
                            p = function() { null === o || void 0 === o || o(), document.removeEventListener("keyup", d), document.removeEventListener("click", f) };
                        if (a.addEventListener("click", (function() {
                                var e;
                                "true" === (null === (e = document.getElementById(t)) || void 0 === e ? void 0 : e.getAttribute("aria-expanded")) ? s({ triggerElementId: t, dropdownContentId: n, onClose: p }): (! function(e) {
                                    var t, n = e.triggerElementId,
                                        r = e.dropdownContentId,
                                        o = document.getElementById(r);
                                    document.getElementById(n).setAttribute("aria-expanded", "true"), o.style.display = "block", null === (t = o.querySelector(u)) || void 0 === t || t.focus()
                                }({ triggerElementId: t, dropdownContentId: n }), null === i || void 0 === i || i(), document.addEventListener("keyup", d), document.addEventListener("click", f))
                            })), r) null === (l = document.getElementById(r)) || void 0 === l || l.addEventListener("click", (function() {
                            var e;
                            s({ triggerElementId: t, dropdownContentId: n, onClose: p }), null === (e = document.getElementById(t)) || void 0 === e || e.focus()
                        }));
                        return { closeDropdown: function() { s({ triggerElementId: t, dropdownContentId: n, onClose: p }) } }
                    }
                }
        },
        11: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return l }));
            var r = n(12),
                o = n.n(r);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) { c(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function c(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.time,
                    r = void 0 === n ? 300 : n,
                    i = t.config,
                    c = void 0 === i ? { leading: !1 } : i,
                    l = a({}, c);
                return o()(e, r, l)
            }
        },
        12: function(e, t, n) {
            (function(t) {
                var n = /^\s+|\s+$/g,
                    r = /^[-+]0x[0-9a-f]+$/i,
                    o = /^0b[01]+$/i,
                    i = /^0o[0-7]+$/i,
                    a = parseInt,
                    c = "object" == typeof t && t && t.Object === Object && t,
                    l = "object" == typeof self && self && self.Object === Object && self,
                    u = c || l || Function("return this")(),
                    s = Object.prototype.toString,
                    d = Math.max,
                    f = Math.min,
                    p = function() { return u.Date.now() };

                function h(e) { var t = typeof e; return !!e && ("object" == t || "function" == t) }

                function v(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) { return "symbol" == typeof e || function(e) { return !!e && "object" == typeof e }(e) && "[object Symbol]" == s.call(e) }(e)) return NaN;
                    if (h(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = h(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(n, "");
                    var c = o.test(e);
                    return c || i.test(e) ? a(e.slice(2), c ? 2 : 8) : r.test(e) ? NaN : +e
                }
                e.exports = function(e, t, n) {
                    var r, o, i, a, c, l, u = 0,
                        s = !1,
                        b = !1,
                        m = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function y(t) {
                        var n = r,
                            i = o;
                        return r = o = void 0, u = t, a = e.apply(i, n)
                    }

                    function g(e) { return u = e, c = setTimeout(w, t), s ? y(e) : a }

                    function O(e) { var n = e - l; return void 0 === l || n >= t || n < 0 || b && e - u >= i }

                    function w() {
                        var e = p();
                        if (O(e)) return S(e);
                        c = setTimeout(w, function(e) { var n = t - (e - l); return b ? f(n, i - (e - u)) : n }(e))
                    }

                    function S(e) { return c = void 0, m && r ? y(e) : (r = o = void 0, a) }

                    function j() {
                        var e = p(),
                            n = O(e);
                        if (r = arguments, o = this, l = e, n) { if (void 0 === c) return g(l); if (b) return c = setTimeout(w, t), y(l) }
                        return void 0 === c && (c = setTimeout(w, t)), a
                    }
                    return t = v(t) || 0, h(n) && (s = !!n.leading, i = (b = "maxWait" in n) ? d(v(n.maxWait) || 0, t) : i, m = "trailing" in n ? !!n.trailing : m), j.cancel = function() { void 0 !== c && clearTimeout(c), u = 0, r = l = o = c = void 0 }, j.flush = function() { return void 0 === c ? a : S(p()) }, j
                }
            }).call(this, n(22))
        },
        125: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                o = n(2),
                i = n(4),
                a = n(1),
                c = n.n(a),
                l = n(26),
                u = n(13),
                s = n(34),
                d = n(3),
                f = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" })) };
            f.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var p = Object(i.f)((function(e, t) {
                var n = e.searchTerm,
                    o = e.onSubmitSearch;
                return Object(r.h)("form", { action: "/search", acceptCharset: "UTF-8", method: "get", onSubmit: o, role: "search" }, Object(r.h)("input", { name: "utf8", type: "hidden", value: "\u2713" }), Object(r.h)("div", { class: "crayons-fields crayons-fields--horizontal" }, Object(r.h)("div", { class: "crayons-field flex-1 relative" }, Object(r.h)("input", { ref: t, className: "crayons-header--search-input crayons-textfield", type: "text", name: "q", placeholder: "".concat(Object(s.a)("core.search"), "..."), autoComplete: "off", "aria-label": "Search term", value: n }), Object(r.h)(d.c, { type: "submit", icon: f, className: "absolute inset-px left-auto mt-0 py-0", "aria-label": "Search" }))))
            }));

            function h(e) { return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, h(e) }

            function v(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function b(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function m(e, t) { return m = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, m(e, t) }

            function y(e) {
                var t = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n, r = w(e);
                    if (t) {
                        var o = w(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }

            function g(e, t) { if (t && ("object" === h(t) || "function" === typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return O(e) }

            function O(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function w(e) { return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, w(e) }
            p.propTypes = { searchTerm: c.a.string.isRequired, onSubmitSearch: c.a.func.isRequired };
            var S = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && m(e, t)
                }(a, e);
                var t, n, o, i = y(a);

                function a(e) {
                    var t;
                    return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a), (t = i.call(this, e)).enableSearchPageListener = function() { t.enableSearchPageChecker = !0 }, t.hasKeyModifiers = function(e) { return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey }, t.submit = function(e) {
                        e.preventDefault();
                        var n = t.searchInputRef.current.value,
                            r = t.props.searchTerm;
                        (t.enableSearchPageChecker = !1, Object(l.hasInstantClick)() && n !== r) && ((0, t.props.setSearchTerm)(n), Object(l.preloadSearchResults)({ searchTerm: n }), Object(l.displaySearchResults)({ searchTerm: n }))
                    }, t.minimizeHeader = function(e) { e.preventDefault(), document.body.classList.toggle("zen-mode") }, t.focusOnSearchBox = function(e) {
                        e.preventDefault(), document.body.classList.remove("zen-mode");
                        var n = t.searchInputRef.current;
                        n.focus(), n.select()
                    }, t.enableSearchPageChecker = !0, t.syncSearchUrlWithInput = t.syncSearchUrlWithInput.bind(O(t)), t.searchInputRef = Object(r.createRef)(null), t
                }
                return t = a, (n = [{
                    key: "componentWillMount",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.searchTerm,
                            r = t.setSearchTerm;
                        ! function t() { e.enableSearchPageChecker && "" !== n && null === /^http(s)?:\/\/[^/]+\/search/.exec(window.location.href) && r(""), setTimeout(t, 500) }()
                    }
                }, {
                    key: "syncSearchUrlWithInput",
                    value: function() {
                        var e = this.props.setSearchTerm,
                            t = Object(l.getSearchTermFromUrl)(window.location.search);
                        this.searchInputRef.current.value = t, e(t)
                    }
                }, { key: "componentDidMount", value: function() { InstantClick.on("change", this.enableSearchPageListener), window.addEventListener("popstate", this.syncSearchUrlWithInput) } }, { key: "componentWillUnmount", value: function() { document.removeEventListener("keydown", this.globalKeysListener), window.removeEventListener("popstate", this.syncSearchUrlWithInput), InstantClick.off && InstantClick.off("change", this.enableSearchPageListener) } }, { key: "render", value: function(e) { var t, n = e.searchTerm; return Object(r.h)(r.Fragment, null, Object(r.h)(u.a, { shortcuts: (t = {}, v(t, "/", this.focusOnSearchBox), v(t, "Digit0", this.minimizeHeader), t) }), Object(r.h)(p, { searchTerm: n, onSubmitSearch: this.submit, ref: this.searchInputRef })) } }]) && b(t.prototype, n), o && b(t, o), Object.defineProperty(t, "prototype", { writable: !1 }), a
            }(r.Component);

            function j(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return _(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function x() {
                var e = j(Object(o.j)((function() { return Object(l.getSearchTermFromUrl)(location.search) })), 2),
                    t = e[0],
                    n = e[1],
                    a = j(Object(o.j)(null), 2),
                    c = a[0],
                    u = a[1];

                function s(e) {
                    var t = e.detail.querystring,
                        r = Object(l.getSearchTermFromUrl)(t),
                        o = document.getElementById("mobile-search-container");
                    if (c && o !== c && Object(i.h)(c), o) {
                        var a = o.querySelector("form");
                        a && o.removeChild(a)
                    }
                    u(o), n(r)
                }
                return Object(o.d)((function() {
                    return window.addEventListener("syncSearchForms", s),
                        function() { window.removeEventListener("syncSearchForms", s) }
                })), Object(r.h)(i.a, null, Object(r.h)(S, { searchTerm: t, setSearchTerm: n }), c && Object(i.d)(Object(r.h)(S, { searchTerm: t, setSearchTerm: n }), c))
            }
            S.propTypes = { searchTerm: c.a.string.isRequired, setSearchTerm: c.a.func.isRequired }, document.addEventListener("DOMContentLoaded", (function() {
                var e = document.getElementById("header-search");
                Object(r.render)(Object(r.h)(x, null), e)
            }))
        },
        13: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return b })), n.d(t, "a", (function() { return m }));
            var r = n(2),
                o = n(1),
                i = n.n(o);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) { l(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function l(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function u(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || d(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function s(e) { return function(e) { if (Array.isArray(e)) return f(e) }(e) || function(e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || d(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function d(e, t) { if (e) { if ("string" === typeof e) return f(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0 } }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e) {
                if (e instanceof HTMLElement === !1) return !1;
                var t = e.nodeName.toLowerCase(),
                    n = (e.getAttribute("type") || "").toLowerCase();
                return "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n && "checkbox" !== n && "radio" !== n || e.isContentEditable
            }
            var h = function(e, t, n, r) { var o = n && n.length > 0 ? r["".concat(n.join("~"), "~").concat(e.code)] : r["".concat(t).concat(e.code)] || r["".concat(t).concat(e.key.toLowerCase())]; return o ? (o(e), []) : t || "Shift" === e.key ? [] : [].concat(s(n), [e.code]) },
                v = { timeout: 0 };

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = Object(r.j)(e),
                    i = u(o, 1),
                    a = i[0],
                    l = Object(r.j)([]),
                    s = u(l, 2),
                    d = s[0],
                    f = s[1],
                    b = Object(r.j)(c(c({}, v), n)),
                    m = u(b, 2),
                    y = m[0],
                    g = m[1];
                Object(r.d)((function() { var e = {}; "number" === typeof n.timeout && (e.timeout = n.timeout), g(c(c({}, v), e)) }), [n.timeout]), Object(r.d)((function() { if (!(d.length <= 0)) { var e = window.setTimeout((function() { clearTimeout(e), f([]) }), y.timeout); return function() { return clearTimeout(e) } } }), [d.length, y.timeout]), Object(r.d)((function() {
                    if (a && 0 !== Object.keys(a).length) {
                        var e = function(e) {
                            if (!e.defaultPrevented) {
                                var t = e.ctrlKey ? "ctrl+" : "",
                                    n = e.metaKey ? "cmd+" : "",
                                    r = e.altKey ? "alt+" : "",
                                    o = e.shiftKey ? "shift+" : "",
                                    i = "".concat(t).concat(n).concat(r).concat(o);
                                if (!(e.target instanceof Node && p(e.target)) || i) {
                                    var c = h(e, i, d, a);
                                    f(c)
                                }
                            }
                        };
                        return t.addEventListener("keydown", e),
                            function() { return t.removeEventListener("keydown", e) }
                    }
                }), [d, a, t])
            }

            function m(e) { return b(e.shortcuts, e.eventTarget, e.options), null }
            m.propTypes = { shortcuts: i.a.object.isRequired, options: i.a.shape({ timeout: i.a.number }), eventTarget: i.a.oneOfType([i.a.instanceOf(Element), i.a.instanceOf(Window)]) }, m.defaultProps = { shortcuts: {}, options: {}, eventTarget: window }
        },
        14: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(31);
            n.d(t, "addSnackbarItem", (function() { return r.b })), n.d(t, "Snackbar", (function() { return r.a }));
            var o = n(20);
            n.d(t, "snackbarItemProps", (function() { return o.b })), n.d(t, "SnackbarItem", (function() { return o.a }))
        },
        15: function(e, t, n) {
            "use strict";

            function r(e) { if (e.ok) return e; try { e.json().then((function(e) { throw new Error(e.error) })) } catch (t) { throw t instanceof SyntaxError ? new Error(e.statusText) : t } }
            n.d(t, "a", (function() { return r })), n.d(t, "b", (function() { return o.a }));
            var o = n(17)
        },
        16: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "validateFileInputs", (function() { return s }));
            var r = Object.freeze({ image: 25, video: 50 }),
                o = ["image"];

            function i(e, t) {
                var n = e,
                    r = document.createElement("div");
                r.style.color = "red", r.innerHTML = t, r.classList.add("file-upload-error"), n.parentNode.append(r)
            }

            function a(e, t, n) {
                var o = n.dataset.maxFileSizeMb,
                    a = n.dataset.fileSizeErrorHandler,
                    c = (e.size / 1048576).toFixed(2),
                    l = c <= (o = Number(o || r[t]));
                return l || function(e, t, n, r) {
                    if (t.value = null, e) e();
                    else {
                        var o = "File size too large (".concat(n, " MB).");
                        r >= 0 && (o += " The limit is ".concat(r, " MB.")), i(t, o)
                    }
                }(a, n, c, o), l
            }

            function c(e, t, n) {
                var r = n.dataset.permittedFileTypes;
                r && (r = JSON.parse(r)), r = r || o;
                var a = n.dataset.fileTypeErrorHandler,
                    c = r.includes(t);
                return c || function(e, t, n, r) { t.value = null, e ? e() : i(t, "Invalid file format (".concat(n, "). Only ").concat(r.join(", "), " files are permitted.")) }(a, n, t, r), c
            }

            function l(e, t) {
                var n = t.dataset.maxFileNameLength;
                n = Number(n || 250);
                var r = t.dataset.fileNameLengthErrorHandler,
                    o = e.name.length <= n;
                return o || function(e, t, n) { t.value = null, e ? e() : i(t, "File name is too long. It can't be longer than ".concat(n, " characters.")) }(r, t, n), o
            }

            function u(e) {
                var t = !0;
                ! function(e) {
                    var t = e.parentNode.querySelector("div.file-upload-error");
                    t && t.remove()
                }(e);
                for (var n = Array.from(e.files), r = 0; r < n.length; r += 1) {
                    var o = n[r],
                        i = o.type.split("/")[0];
                    if (!a(o, i, e)) { t = !1; break }
                    if (!c(0, i, e)) { t = !1; break }
                    if (!l(o, e)) { t = !1; break }
                }
                return t
            }

            function s() { for (var e = !0, t = document.querySelectorAll('input[type="file"]'), n = 0; n < t.length; n += 1) { if (!u(t[n])) { e = !1; break } } return e }
            document.querySelectorAll('input[type="file"]').forEach((function(e) { e.addEventListener("change", (function() { u(e) })) }))
        },
        17: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return s }));
            var r = ["headers", "body", "method", "csrfToken"];

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) { a(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function a(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }

            function l(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (u) { return void n(u) }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) { l(i, r, o, a, c, "next", e) }

                        function c(e) { l(i, r, o, a, c, "throw", e) }
                        a(void 0)
                    }))
                }
            }

            function s(e) { return d.apply(this, arguments) }

            function d() {
                return d = u((function*(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.headers,
                        o = t.body,
                        a = t.method,
                        l = void 0 === a ? "GET" : a,
                        u = t.csrfToken,
                        s = void 0 === u ? yield getCsrfToken() : u,
                        d = c(t, r),
                        f = { body: o && "string" !== typeof o ? JSON.stringify(o) : o },
                        p = i(i({ method: l, headers: i({ Accept: "application/json", "X-CSRF-Token": s, "Content-Type": "application/json" }, n), credentials: "same-origin" }, f), d);
                    return fetch(e, p)
                })), d.apply(this, arguments)
            }
        },
        19: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "b", (function() { return c }));
            var r = n(2);

            function o(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return i(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var a = Object.freeze({ Small: 640, Medium: 768, Large: 1024 }),
                c = function(e) {
                    var t = window.matchMedia(e),
                        n = o(Object(r.j)(!!t.matches), 2),
                        i = n[0],
                        a = n[1];
                    return Object(r.d)((function() {
                        var e = function() { a(!!t.matches) };
                        return t.addListener(e),
                            function() { return t.removeListener(e) }
                    })), i
                }
        },
        20: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return l })), n.d(t, "a", (function() { return u }));
            var r = n(0),
                o = n(1),
                i = n.n(o),
                a = n(6),
                c = n(3),
                l = { children: a.c.isRequired, actions: i.a.arrayOf(i.a.shape({ message: i.a.string.isRequired, handler: i.a.func.isRequired, lifespan: i.a.number.isRequired })) },
                u = function(e) {
                    var t = e.message,
                        n = e.actions,
                        o = void 0 === n ? [] : n;
                    return Object(r.h)("div", { className: "crayons-snackbar__item flex", "data-testid": "snackbar" }, Object(r.h)("div", { className: "crayons-snackbar__body", role: "alert" }, t), Object(r.h)("div", { className: "crayons-snackbar__actions" }, o.map((function(e) {
                        var t = e.text,
                            n = e.handler;
                        return Object(r.h)(c.a, { variant: "ghost-success", inverted: !0, onClick: n, key: t }, t)
                    }))))
                };
            u.displayName = "SnackbarItem", u.propTypes = l.isRequired
        },
        21: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return s }));
            var r = n(1),
                o = n.n(r),
                i = n(0),
                a = n(2),
                c = n(39),
                l = n(6),
                u = n(13),
                s = function(e) {
                    var t = e.selector,
                        n = e.children,
                        r = e.onDeactivate,
                        o = e.clickOutsideDeactivates,
                        l = void 0 !== o && o,
                        s = Object(a.i)(null),
                        d = Object(a.a)((function() { return r() }), [r]);
                    Object(a.f)((function() {
                        var e = document.location.href,
                            n = new MutationObserver((function(t) {
                                var r;
                                t.some((function() { return e !== document.location.href })) && (null === (r = s.current) || void 0 === r || r.deactivate(), n.disconnect())
                            }));
                        return s.current = Object(c.a)(t, { escapeDeactivates: !1, clickOutsideDeactivates: l, onDeactivate: d }), s.current.activate(), n.observe(document.querySelector("body"), { childList: !0 }),
                            function() { s.current.deactivate(), n.disconnect() }
                    }), [l, t, d]);
                    var f = { escape: r };
                    return Object(i.h)(i.Fragment, null, n, Object(i.h)(u.a, { shortcuts: f }))
                };
            s.defaultProps = { selector: ".crayons-modal", onDeactivate: function() {} }, s.propTypes = { selector: o.a.string, children: l.c.isRequired, onDeactivate: o.a.func }
        },
        22: function(e, t) {
            var n;
            n = function() { return this }();
            try { n = n || new Function("return this")() } catch (r) { "object" === typeof window && (n = window) }
            e.exports = n
        },
        23: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return u })), n.d(t, "d", (function() { return d })), n.d(t, "a", (function() { return p })), n.d(t, "c", (function() { return h }));
            var r = n(16),
                o = ["previewShowing", "helpShowing", "previewResponse", "helpHTML", "imageManagementShowing", "moreConfigShowing", "errors"];

            function i(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return a(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }

            function l(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (u) { return void n(u) }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function u(e, t, n) {
                fetch("/articles/preview", { method: "POST", headers: { Accept: "application/json", "X-CSRF-Token": window.csrfToken, "Content-Type": "application/json" }, body: JSON.stringify({ article_body: e }), credentials: "same-origin" }).then(function() {
                    var e, t = (e = function*(e) { var t = yield e.json(); if (200 !== e.status) throw t; return t }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) { l(i, r, o, a, c, "next", e) }

                            function c(e) { l(i, r, o, a, c, "throw", e) }
                            a(void 0)
                        }))
                    });
                    return function(e) { return t.apply(this, arguments) }
                }()).then(t).catch(n)
            }

            function s(e) { e.previewShowing, e.helpShowing, e.previewResponse, e.helpHTML, e.imageManagementShowing, e.moreConfigShowing, e.errors; return c(e, o) }

            function d(e) {
                var t = e.payload,
                    n = e.onSuccess,
                    r = e.onError,
                    o = t.id ? "PUT" : "POST",
                    i = t.id ? "/articles/".concat(t.id) : "/articles";
                fetch(i, { method: o, headers: { Accept: "application/json", "X-CSRF-Token": window.csrfToken, "Content-Type": "application/json" }, body: JSON.stringify({ article: s(t) }), credentials: "same-origin" }).then((function(e) { return e.json() })).then((function(e) { e.current_state_path ? (n(), window.location.replace(e.current_state_path)) : r(e) })).catch(r)
            }

            function f(e) {
                var t = window.csrfToken,
                    n = new FormData;
                return n.append("authenticity_token", t), Object.entries(e.image).forEach((function(e) {
                    var t = i(e, 2),
                        r = (t[0], t[1]);
                    return n.append("image[]", r)
                })), n
            }

            function p(e) {
                var t = e.payload,
                    n = e.successCb,
                    r = e.failureCb,
                    o = e.signal;
                fetch("/image_uploads", { method: "POST", headers: { "X-CSRF-Token": window.csrfToken }, body: f(t), credentials: "same-origin", signal: o }).then((function(e) { return e.json() })).then((function(e) {
                    if (e.error) throw new Error(e.error);
                    var r = e.links,
                        o = t.image;
                    return n({ links: r, image: o })
                })).catch(r)
            }

            function h(e, t, n) { e.length > 0 && Object(r.validateFileInputs)() && p({ payload: { image: e }, successCb: t, failureCb: n }) }
        },
        24: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return i })), n.d(t, "a", (function() { return a }));
            var r = n(1),
                o = n.n(r),
                i = o.a.shape({ body_text: o.a.arrayOf(o.a.string) }),
                a = o.a.shape({ id: o.a.number.isRequired, title: o.a.string.isRequired, path: o.a.string.isRequired, cloudinary_video_url: o.a.string, video_duration_in_minutes: o.a.string, type_of: o.a.oneOf(["podcast_episodes"]), class_name: o.a.oneOf(["PodcastEpisode", "User", "Article"]), flare_tag: o.a.shape({ name: o.a.string.isRequired, bg_color_hex: o.a.string, text_color_hex: o.a.string }), tag_list: o.a.arrayOf(o.a.string), cached_tag_list_array: o.a.arrayOf(o.a.string), podcast: o.a.shape({ slug: o.a.string.isRequired, title: o.a.string.isRequired, image_url: o.a.string.isRequired }), user_id: o.a.number.isRequired, user: o.a.shape({ username: o.a.string.isRequired, name: o.a.string.isRequired }), organization: o.a.shape({ name: o.a.string.isRequired, profile_image_90: o.a.string.isRequired, slug: o.a.string.isRequired }), highlight: i, public_reactions_count: o.a.number, reactions_count: o.a.number, comments_count: o.a.number, reading_time: o.a.number })
        },
        25: function(e, t, n) {
            "use strict";
            var r = n(29);
            n.d(t, "a", (function() { return r.a }))
        },
        26: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "hasInstantClick", (function() { return a })), n.d(t, "displaySearchResults", (function() { return l })), n.d(t, "getSearchTermFromUrl", (function() { return u })), n.d(t, "preloadSearchResults", (function() { return s })), n.d(t, "fetchSearch", (function() { return d }));
            var r = n(15);

            function o(e, t) {
                var n = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
                        n = e.replace(/[[\]]/g, "\\$&"),
                        r = new RegExp("[?&]".concat(n, "(=([^&#]*)|&|#|$)")).exec(t);
                    return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
                }(e, t);
                return n ? "&".concat(e, "=").concat(n) : ""
            }

            function i(e) { return o("filters", e) }

            function a() { return "undefined" !== typeof instantClick }

            function c(e) { return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) { return "%".concat(e.charCodeAt(0).toString(16)) })) }

            function l(e) {
                var t, n = e.searchTerm,
                    r = e.location,
                    a = void 0 === r ? window.location : r,
                    l = a.origin,
                    u = c(n),
                    s = i(a.href),
                    d = o("sort_by", t = a.href) + o("sort_direction", t);
                InstantClick.display("".concat(l, "/search?q=").concat(u).concat(s).concat(d))
            }

            function u(e) {
                var t, n = new URLSearchParams(e),
                    r = null !== (t = filterXSS(n.get("q"))) && void 0 !== t ? t : "",
                    o = document.createElement("div");
                return o.innerHTML = r, null !== o.firstChild ? o.firstChild.nodeValue : r
            }

            function s(e) {
                var t = e.searchTerm,
                    n = e.location,
                    r = void 0 === n ? window.location : n,
                    o = c(t.replace(/^[ ]+|[ ]+$/g, "")),
                    a = "".concat(r.origin, "/search?q=").concat(o).concat(i(r.href));
                InstantClick.preload(a)
            }

            function d(e, t) {
                var n = function(e) {
                    var t = new URLSearchParams;
                    return Object.keys(e).forEach((function(n) {
                        var r = e[n];
                        Array.isArray(r) ? r.forEach((function(e) { t.append("".concat(n, "[]"), e) })) : t.append(n, r)
                    })), t.toString()
                }(t);
                return Object(r.b)("/search/".concat(e, "?").concat(n)).then((function(e) { return e.json() }))
            }
        },
        28: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(35);
            n.d(t, "Modal", (function() { return r.Modal }))
        },
        29: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return h }));
            var r = n(0),
                o = n(2),
                i = n(1),
                a = n.n(i),
                c = n(6),
                l = ["children", "variant", "tagName", "inverted", "contentType", "size", "className", "icon", "url", "buttonType", "disabled", "onClick", "onMouseOver", "onMouseOut", "onFocus", "onBlur", "onKeyUp", "tabIndex", "title", "tooltip"];

            function u() { return u = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, u.apply(this, arguments) }

            function s(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return d(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }

            function p(e) {
                var t = e.variant,
                    n = e.className,
                    r = e.contentType,
                    o = e.size,
                    i = e.inverted,
                    a = e.disabled,
                    c = e.tooltip,
                    l = "";
                return t && t.length > 0 && "primary" !== t && (l += " crayons-btn--".concat(t)), o && o.length > 0 && "default" !== o && (l += " crayons-btn--".concat(o)), r && r.length > 0 && "text" !== r && (l += " crayons-btn--".concat(r)), a && (l += " crayons-btn--disabled"), i && (l += " crayons-btn--inverted"), n && n.length > 0 && (l += " ".concat(n)), c && (l += " crayons-tooltip__activator"), l
            }
            var h = function(e) {
                var t = e.children,
                    n = e.variant,
                    i = void 0 === n ? "primary" : n,
                    a = e.tagName,
                    c = e.inverted,
                    d = e.contentType,
                    h = e.size,
                    v = e.className,
                    b = e.icon,
                    m = e.url,
                    y = e.buttonType,
                    g = e.disabled,
                    O = e.onClick,
                    w = e.onMouseOver,
                    S = e.onMouseOut,
                    j = e.onFocus,
                    _ = e.onBlur,
                    x = e.onKeyUp,
                    k = e.tabIndex,
                    E = e.title,
                    C = e.tooltip,
                    I = f(e, l),
                    P = s(Object(o.j)(!1), 2),
                    T = P[0],
                    A = P[1],
                    N = a,
                    M = b,
                    R = "button" === a ? { type: y, disabled: g } : { href: g ? void 0 : m };
                return Object(r.h)(N, u({ className: "crayons-btn".concat(p({ variant: i, size: h, contentType: d, className: v, icon: b, inverted: c, disabled: "a" === a && g, children: t, tooltip: C })), onClick: O, onMouseOver: w, onMouseOut: S, onFocus: j, onBlur: _, onKeyUp: function(e) { null === x || void 0 === x || x(e), C && A("Escape" === e.key) }, tabIndex: k, title: E }, R, I), "text" !== d && "icon-right" !== d && M && Object(r.h)(M, null), ("text" === d || "icon-left" === d || "icon-right" === d) && t, "text" !== d && "icon-right" === d && M && Object(r.h)(M, null), C ? Object(r.h)("span", { className: "crayons-tooltip__content ".concat(T ? "crayons-tooltip__suppressed" : "") }, C) : null)
            };
            h.displayName = "Button", h.defaultProps = { className: void 0, icon: void 0, url: void 0, buttonType: "button", disabled: !1, inverted: !1, onClick: void 0, onMouseOver: void 0, onMouseOut: void 0, onFocus: void 0, onBlur: void 0, tabIndex: void 0, title: void 0, tagName: "button", size: "default", contentType: "text", variant: "primary" }, h.propTypes = { children: c.c, variant: a.a.oneOf(["primary", "secondary", "outlined", "danger", "ghost", "ghost-brand", "ghost-success", "ghost-warning", "ghost-danger"]), contentType: a.a.oneOf(["text", "icon-left", "icon-right", "icon", "icon-rounded"]).isRequired, inverted: a.a.bool, tagName: a.a.oneOf(["a", "button"]).isRequired, className: a.a.string, icon: a.a.oneOfType([a.a.node, a.a.func]), url: a.a.string, buttonType: a.a.string, disabled: a.a.bool, size: a.a.oneOf(["default", "s", "l", "xl"]).isRequired, onClick: a.a.func, onMouseOver: a.a.func, onMouseOut: a.a.func, onFocus: a.a.func, onBlur: a.a.func, tabIndex: a.a.number, title: a.a.string, tooltip: a.a.node }
        },
        3: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return r.a })), n.d(t, "c", (function() { return m })), n.d(t, "g", (function() { return S })), n.d(t, "b", (function() { return C })), n.d(t, "d", (function() { return R })), n.d(t, "e", (function() { return L })), n.d(t, "j", (function() { return q })), n.d(t, "f", (function() { return W })), n.d(t, "h", (function() { return K.Modal })), n.d(t, "k", (function() { return $.a })), n.d(t, "i", (function() { return he }));
            var r = n(25),
                o = n(0),
                i = n(1),
                a = n.n(i),
                c = n(2),
                l = n(8),
                u = n.n(l),
                s = n(7),
                d = ["children", "variant", "icon", "rounded", "destructive", "type", "className", "tooltip", "onKeyUp"];

            function f() { return f = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, f.apply(this, arguments) }

            function p(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function h(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return v(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }
            var m = function(e) {
                var t, n = e.children,
                    r = e.variant,
                    i = void 0 === r ? "default" : r,
                    a = e.icon,
                    l = e.rounded,
                    s = e.destructive,
                    v = e.type,
                    m = void 0 === v ? "button" : v,
                    y = e.className,
                    g = e.tooltip,
                    O = e.onKeyUp,
                    w = b(e, d),
                    S = h(Object(c.j)(!1), 2),
                    j = S[0],
                    _ = S[1],
                    x = u()("c-btn", (p(t = {}, "c-btn--".concat(i), i && "default" !== i), p(t, "c-btn--destructive", s && "secondary" !== i), p(t, "c-btn--icon-left", a && n), p(t, "c-btn--icon-alone", a && !n), p(t, "crayons-tooltip__activator", g), p(t, "radius-full", l), p(t, y, y), t));
                return Object(o.h)("button", f({ type: m, className: x, onKeyUp: function(e) { null === O || void 0 === O || O(e), g && _("Escape" === e.key) } }, w), a && Object(o.h)(W, { "aria-hidden": "true", focusable: "false", src: a, className: "c-btn__icon" }), n, g ? Object(o.h)("span", { "data-testid": "tooltip", className: u()("crayons-tooltip__content", { "crayons-tooltip__suppressed": j }) }, g) : null)
            };
            m.displayName = "ButtonNew", m.propTypes = { children: s.a, variant: a.a.oneOf(["default", "primary", "secondary"]), rounded: a.a.bool, destructive: a.a.bool, type: a.a.oneOf(["button", "submit"]), className: a.a.string, tooltip: a.a.oneOfType([a.a.string, a.a.node]), onKeyUp: a.a.func, icon: a.a.elementType };
            var y = ["children", "href", "variant", "block", "icon", "rounded", "className"];

            function g() { return g = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, g.apply(this, arguments) }

            function O(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function w(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }
            var S = function(e) {
                var t, n = e.children,
                    r = e.href,
                    i = void 0 === r ? "#" : r,
                    a = e.variant,
                    c = void 0 === a ? "default" : a,
                    l = e.block,
                    s = e.icon,
                    d = e.rounded,
                    f = e.className,
                    p = w(e, y),
                    h = u()("c-link", (O(t = {}, "c-link--".concat(c), c && "default" !== c), O(t, "c-link--icon-left", s && n), O(t, "c-link--icon-alone", s && !n), O(t, "c-link--block", l), O(t, "radius-full", d), O(t, f, f), t));
                return Object(o.h)("a", g({ href: i, className: h }, p), s && Object(o.h)(W, { src: s, "aria-hidden": "true", focusable: "false", className: "c-link__icon" }), n)
            };
            S.displayName = "Link", S.propTypes = { variant: a.a.oneOf(["default", "branded"]), block: a.a.bool, rounded: a.a.bool, href: a.a.string.isRequired, className: a.a.string, children: s.a, icon: a.a.elementType };
            var j = ["children", "href", "variant", "icon", "className"];

            function _() { return _ = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, _.apply(this, arguments) }

            function x(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function k(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }
            var E = function(e) {
                var t, n = e.children,
                    r = e.href,
                    i = void 0 === r ? "#" : r,
                    a = e.variant,
                    c = void 0 === a ? "default" : a,
                    l = e.icon,
                    s = e.className,
                    d = k(e, j),
                    f = u()("c-cta", (x(t = {}, "c-cta--".concat(c), c && "default" !== c), x(t, "c-cta--icon-left", l && n), x(t, s, s), t));
                return Object(o.h)("a", _({ href: i, className: f }, d), l && Object(o.h)(W, { src: l, "aria-hidden": "true", focusable: "false", className: "c-cta__icon" }), n)
            };
            E.displayName = "CTA", E.propTypes = { variant: a.a.oneOf(["default", "branded"]), rounded: a.a.bool, href: a.a.string.isRequired, className: a.a.string, children: s.a.isRequired, icon: a.a.elementType };
            var C = function(e) {
                var t = e.children,
                    n = e.labelText;
                return Object(o.h)("div", { role: "group", "aria-label": n, className: "crayons-btn-group" }, t)
            };
            C.displayName = "ButtonGroup", C.propTypes = { children: s.a, labelText: a.a.string.isRequired };
            var I = n(10),
                P = ["children", "className", "triggerButtonId", "dropdownContentId", "dropdownContentCloseButtonId", "onOpen", "onClose"];

            function T() { return T = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, T.apply(this, arguments) }

            function A(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return N(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function M(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }
            var R = function(e) {
                var t = e.children,
                    n = e.className,
                    r = e.triggerButtonId,
                    i = e.dropdownContentId,
                    a = e.dropdownContentCloseButtonId,
                    l = e.onOpen,
                    u = void 0 === l ? function() {} : l,
                    s = e.onClose,
                    d = void 0 === s ? function() {} : s,
                    f = M(e, P),
                    p = A(Object(c.j)(!1), 2),
                    h = p[0],
                    v = p[1];
                return Object(c.f)((function() { h || (Object(I.b)({ triggerElementId: r, dropdownContentId: i, dropdownContentCloseButtonId: a, onOpen: u, onClose: d }), v(!0)) }), [i, r, a, h, u, d]), Object(o.h)("div", T({ id: i, className: "crayons-dropdown".concat(n && n.length > 0 ? " ".concat(n) : "") }, f), t)
            };
            R.defaultProps = { className: void 0 }, R.displayName = "Dropdown", R.propTypes = { children: s.a.isRequired, className: a.a.string, triggerButtonId: a.a.string.isRequired, dropdownContentId: a.a.string.isRequired, dropdownContentCloseButtonId: a.a.string, onOpen: a.a.func, onClose: a.a.func };
            var U = n(6),
                L = function(e) {
                    var t = e.children,
                        n = e.variant;
                    return Object(o.h)("div", { className: "crayons-field".concat(n && n.length > 0 ? " crayons-field--".concat(n) : "") }, t)
                };
            L.displayName = "FormField", L.defaultProps = { variant: void 0 }, L.propTypes = { children: U.c.isRequired, variant: a.a.oneOf(["radio", "checkbox"]) };
            var B = ["id", "value", "name", "className", "checked", "onClick"];

            function D() { return D = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, D.apply(this, arguments) }

            function z(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }
            var q = function(e) {
                var t = e.id,
                    n = e.value,
                    r = e.name,
                    i = e.className,
                    a = e.checked,
                    c = e.onClick,
                    l = z(e, B);
                return Object(o.h)("input", D({ id: t, value: n, name: r, className: "crayons-radio".concat(i && i.length > 0 ? " ".concat(i) : ""), checked: a, onClick: c, type: "radio" }, l))
            };
            q.displayName = "RadioButton", q.defaultProps = { id: void 0, className: void 0, checked: !1, name: void 0 }, q.propTypes = { id: a.a.string, value: a.a.string.isRequired, className: a.a.string, checked: a.a.bool, name: a.a.string, onClick: a.a.func.isRequired };
            n(36);
            a.a.string.isRequired, a.a.string.isRequired, a.a.string, a.a.object;
            var H = ["src", "native", "className"];

            function F() { return F = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, F.apply(this, arguments) }

            function V(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }
            var W = function(e) {
                var t, n, r, i = e.src,
                    a = e.native,
                    c = e.className,
                    l = V(e, H);
                return Object(o.h)(i, F({ className: u()("crayons-icon", (t = { "crayons-icon--default": a }, n = c, r = c, n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r, t)) }, l))
            };
            W.displayName = "Icon", W.propTypes = { native: a.a.bool, className: a.a.string, src: a.a.elementType.isRequired };
            var K = n(28),
                $ = n(30);
            n(21);
            U.c.isRequired, a.a.string.isRequired, a.a.func;
            n(32), n(4);
            var Z = function(e) { return Object(o.h)("svg", e, Object(o.h)("path", { d: "m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" })) };
            Z.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var J = function(e) {
                var t = e.name,
                    n = e.onEdit,
                    r = e.onDeselect;
                return Object(o.h)("div", { role: "group", "aria-label": t, className: "flex mr-1 mb-1 w-max" }, Object(o.h)(m, { variant: "secondary", className: "c-autocomplete--multi__selected p-1 cursor-text", "aria-label": "Edit ".concat(t), onClick: n }, t), Object(o.h)(m, { variant: "secondary", className: "c-autocomplete--multi__selected p-1", "aria-label": "Remove ".concat(t), onClick: r }, Object(o.h)(W, { src: Z })))
            };

            function X() { return X = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, X.apply(this, arguments) }

            function G(e) { return function(e) { if (Array.isArray(e)) return te(e) }(e) || function(e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || ee(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function Q(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (u) { return void n(u) }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Y(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || ee(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function ee(e, t) { if (e) { if ("string" === typeof e) return te(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? te(e, t) : void 0 } }

            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(n), !0).forEach((function(t) { oe(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function oe(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var ie = "ArrowUp",
                ae = "ArrowDown",
                ce = "Enter",
                le = "Escape",
                ue = "Backspace",
                se = ",",
                de = " ",
                fe = /([a-zA-Z0-9])/,
                pe = function(e, t) {
                    var n;
                    switch (t.type) {
                        case "setSelectedItems":
                            return re(re({}, e), {}, { selectedItems: t.payload.selectedItems, suggestions: null !== (n = t.payload.suggestions) && void 0 !== n ? n : e.suggestions, activeDescendentIndex: null });
                        case "setSuggestions":
                            return re(re({}, e), {}, { suggestions: t.payload, activeDescendentIndex: null });
                        case "updateEditState":
                            return re(re({}, e), {}, { editValue: t.payload.editValue, inputPosition: t.payload.inputPosition });
                        case "setActiveDescendentIndex":
                            return re(re({}, e), {}, { activeDescendentIndex: t.payload });
                        case "setIgnoreBlur":
                            return re(re({}, e), {}, { ignoreBlur: t.payload });
                        case "setShowMaxSelectionsReached":
                            return re(re({}, e), {}, { showMaxSelectionsReached: t.payload });
                        default:
                            return e
                    }
                },
                he = function(e) {
                    var t, n = e.labelText,
                        r = e.showLabel,
                        i = void 0 === r || r,
                        a = e.fetchSuggestions,
                        l = e.defaultValue,
                        u = void 0 === l ? [] : l,
                        s = e.staticSuggestions,
                        d = void 0 === s ? [] : s,
                        f = e.staticSuggestionsHeading,
                        p = e.border,
                        h = void 0 === p || p,
                        v = e.placeholder,
                        b = void 0 === v ? "Add..." : v,
                        m = e.inputId,
                        y = e.maxSelections,
                        g = e.onSelectionsChanged,
                        O = e.onFocus,
                        w = e.SuggestionTemplate,
                        S = e.SelectionTemplate,
                        j = void 0 === S ? J : S,
                        _ = Y(Object(c.h)(pe, { suggestions: [], selectedItems: u, inputPosition: null, editValue: null, activeDescendentIndex: null, ignoreBlur: !1, showMaxSelectionsReached: !1 }), 2),
                        x = _[0],
                        k = _[1],
                        E = x.selectedItems,
                        C = x.suggestions,
                        I = x.inputPosition,
                        P = x.editValue,
                        T = x.activeDescendentIndex,
                        A = x.ignoreBlur,
                        N = x.showMaxSelectionsReached,
                        M = Object(c.i)(null),
                        R = Object(c.i)(null),
                        U = Object(c.i)(null),
                        L = Object(c.i)(null),
                        B = !y || E.length < y;
                    Object(c.d)((function() { u.length > 0 && k({ type: "setSelectedItems", payload: { selectedItems: u } }) }), [u]);
                    Object(c.d)((function() {
                        if (null !== P) {
                            var e = M.current;
                            if (e && null !== I) {
                                H(), e.value = P;
                                var t = P.length;
                                e.focus(), e.setSelectionRange(t, t);
                                var n = new Event("input");
                                e.dispatchEvent(n)
                            }
                        }
                    }), [I, P]), Object(c.d)((function() {
                        if (null !== T) {
                            var e = L.current,
                                t = null === e || void 0 === e ? void 0 : e.querySelector('[aria-selected="true"]');
                            if (!e || !t) return;
                            var n = t.offsetHeight,
                                r = t.offsetTop,
                                o = e.offsetHeight,
                                i = e.scrollTop,
                                a = r + n > i + o;
                            r < i ? e.scrollTo(0, r) : a && e.scrollTo(0, r - o + n)
                        }
                    }), [T]);
                    var D = function(e) {
                            var t = e.textValue,
                                n = e.nextInputValue,
                                r = void 0 === n ? "" : n,
                                o = e.keepSelecting,
                                i = void 0 === o || o,
                                a = C.find((function(e) { return e.name === t }));
                            K({ selectedItem: a || { name: t }, nextInputValue: r, keepSelecting: i })
                        },
                        z = function(e, t) { R.current.innerText = e.name, $(e), k({ type: "updateEditState", payload: { editValue: e.name, inputPosition: t } }) },
                        q = function(e) {
                            var t, n, r = e.nextInputValue,
                                o = void 0 === r ? "" : r,
                                i = e.keepSelecting,
                                a = void 0 === i || i;
                            null === (t = M.current) || void 0 === t || null === (n = t.style) || void 0 === n || n.removeProperty("width"), R.current.innerText = o, k({ type: "updateEditState", payload: { editValue: o, inputPosition: "" === o ? null : I + 1 } }), a || "" !== o || (M.current.value = "")
                        },
                        H = function() {
                            var e = M.current;
                            e && (e.style.width = "".concat(R.current.clientWidth, "px"))
                        },
                        F = function() {
                            var e, t = (e = function*(e) {
                                var t = e.target.value;
                                if (R.current.innerText = t, null !== I && H(), B)
                                    if ("" !== t) {
                                        var n = yield a(t);
                                        0 === n.length && "" !== t && n.push({ name: t }), k({ type: "setSuggestions", payload: n.filter((function(e) { return !E.some((function(t) { return t.name === e.name })) })) })
                                    } else k({ type: "setSuggestions", payload: d.filter((function(e) { return !E.some((function(t) { return t.name === e.name })) })) })
                            }, function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, o) {
                                    var i = e.apply(t, n);

                                    function a(e) { Q(i, r, o, a, c, "next", e) }

                                    function c(e) { Q(i, r, o, a, c, "throw", e) }
                                    a(void 0)
                                }))
                            });
                            return function(e) { return t.apply(this, arguments) }
                        }(),
                        V = function() { M.current.value = "", k({ type: "setSuggestions", payload: [] }) },
                        W = function() {
                            if (E.length > 0 && 0 !== I) {
                                var e = null !== I ? I - 1 : E.length - 1,
                                    t = E[e];
                                $(t), z(t, e)
                            }
                        },
                        K = function(e) {
                            var t = e.selectedItem,
                                n = e.nextInputValue,
                                r = void 0 === n ? "" : n,
                                o = e.keepSelecting,
                                i = void 0 === o || o;
                            if (E.some((function(e) { return e.name === t.name }))) V();
                            else {
                                var a, c, l, u = null !== I ? I : E.length,
                                    s = [].concat(G(E.slice(0, u)), [t], G(E.slice(u))),
                                    f = document.createElement("li");
                                f.innerText = t.name, U.current.appendChild(f), q({ nextInputValue: r, keepSelecting: i }), k({ type: "setSelectedItems", payload: { selectedItems: s, suggestions: i ? (a = { currentSelections: s }, c = a.currentSelections, l = void 0 === c ? E : c, d.length > 0 ? d.filter((function(e) { return !l.some((function(t) { return t.name === e.name })) })) : []) : [] } }), null === g || void 0 === g || g(s);
                                var p = M.current;
                                p.value = r, i && (k({ type: "setShowMaxSelectionsReached", payload: y && s.length >= y }), setTimeout((function() { p.focus() })))
                            }
                        },
                        $ = function(e) {
                            var t = E.filter((function(t) { return t.name !== e.name }));
                            k({ type: "setSelectedItems", payload: { selectedItems: t, suggestions: C } }), k({ type: "setShowMaxSelectionsReached", payload: y && t.length >= y }), null === g || void 0 === g || g(t), U.current.querySelectorAll("li").forEach((function(t) { t.innerText === e.name && t.remove() }))
                        },
                        Z = E.map((function(e, t) {
                            var n = t + 1,
                                r = null === I || t < I ? n : n + 1,
                                i = e.name;
                            return Object(o.h)("li", { key: i, className: "c-autocomplete--multi__selection-list-item w-max", style: { order: r } }, Object(o.h)(j, X({}, e, { onEdit: function() { return z(e, t) }, onDeselect: function() { return $(e) } })))
                        })),
                        ee = E.length > 0 ? "Add another..." : b,
                        te = B ? ee : null;
                    return Object(o.h)(o.Fragment, null, Object(o.h)("span", { ref: R, "aria-hidden": "true", className: "absolute pointer-events-none opacity-0 p-2" }), Object(o.h)("label", { id: "multi-select-label", className: i ? "" : "screen-reader-only" }, n), Object(o.h)("span", { id: "input-description", className: "screen-reader-only" }, y ? "Maximum ".concat(y, " selections") : ""), Object(o.h)("div", { className: "screen-reader-only" }, Object(o.h)("p", null, "Selected items:"), Object(o.h)("ul", { ref: U, className: "screen-reader-only list-none", "aria-live": "assertive", "aria-atomic": "false", "aria-relevant": "additions removals" })), Object(o.h)("div", { className: "c-autocomplete--multi relative" }, Object(o.h)("div", { role: "combobox", "aria-haspopup": "listbox", "aria-expanded": C.length > 0, "aria-owns": "listbox1", className: "c-autocomplete--multi__wrapper".concat(h ? "-border crayons-textfield" : " border-none p-0", " flex items-center  cursor-text"), onClick: function() { var e; return null === (e = M.current) || void 0 === e ? void 0 : e.focus() } }, Object(o.h)("ul", { id: "combo-selected", className: "list-none flex flex-wrap w-100" }, Z, Object(o.h)("li", { className: "self-center", style: { order: null === I ? E.length + 1 : I + 1 } }, Object(o.h)("input", {
                        id: m,
                        ref: M,
                        autocomplete: "off",
                        className: "c-autocomplete--multi__input",
                        "aria-activedescendant": null !== T ? C[T] : null,
                        "aria-autocomplete": "list",
                        "aria-labelledby": "multi-select-label selected-items-list",
                        "aria-describedby": "input-description",
                        "aria-disabled": !B,
                        type: "text",
                        onChange: F,
                        onKeyDown: function(e) {
                            var t = M.current,
                                n = t.selectionStart,
                                r = t.value;
                            switch (e.key) {
                                case ae:
                                    e.preventDefault(), null !== T && T < C.length - 1 ? k({ type: "setActiveDescendentIndex", payload: T + 1 }) : k({ type: "setActiveDescendentIndex", payload: 0 });
                                    break;
                                case ie:
                                    e.preventDefault(), k({ type: "setActiveDescendentIndex", payload: T >= 1 ? T - 1 : C.length - 1 });
                                    break;
                                case ce:
                                    e.preventDefault(), null !== T && K({ selectedItem: C[T] });
                                    break;
                                case le:
                                    e.preventDefault(), V();
                                    break;
                                case se:
                                case de:
                                    e.preventDefault(), "" !== r && B && D({ textValue: r.slice(0, n), nextInputValue: r.slice(n) });
                                    break;
                                case ue:
                                    "" === r && (e.preventDefault(), W());
                                    break;
                                default:
                                    fe.test(e.key) || e.preventDefault()
                            }
                        },
                        onBlur: function() {
                            k({ type: "setShowMaxSelectionsReached", payload: !1 });
                            var e = M.current.value;
                            A || !B || "" === e ? (A || k({ type: "setSuggestions", payload: [] }), q({ keepSelecting: !1 }), k({ type: "setIgnoreBlur", payload: !1 })) : D({ textValue: e, keepSelecting: !1 })
                        },
                        onFocus: function(e) {
                            var t;
                            null === O || void 0 === O || O(e), null === I && (B ? d.length > 0 && "" === (null === (t = M.current) || void 0 === t ? void 0 : t.value) && k({ type: "setSuggestions", payload: d.filter((function(e) { return !E.some((function(t) { return t.name === e.name })) })) }) : k({ type: "setShowMaxSelectionsReached", payload: !0 }))
                        },
                        placeholder: null === I ? te : null
                    })))), N ? Object(o.h)("div", { className: "c-autocomplete--multi__popover" }, Object(o.h)("span", { className: "p-3" }, "Only ", y, " selections allowed")) : null, C.length > 0 && B ? Object(o.h)("div", { className: "c-autocomplete--multi__popover", ref: L }, "" === (null === (t = M.current) || void 0 === t ? void 0 : t.value) ? f : null, Object(o.h)("ul", { className: "list-none", "aria-labelledby": "multi-select-label", role: "listbox", "aria-multiselectable": "true", id: "listbox1" }, C.map((function(e, t) { var n = e.name; return Object(o.h)("li", { id: n, role: "option", "aria-selected": t === T, key: n, onMouseDown: function() { K({ selectedItem: e }), k({ type: "setIgnoreBlur", payload: !0 }) } }, w ? Object(o.h)(w, e) : n) })))) : null))
                },
                ve = a.a.shape({ name: a.a.string });
            he.propTypes = { labelText: a.a.string.isRequired, showLabel: a.a.bool, fetchSuggestions: a.a.func.isRequired, defaultValue: a.a.arrayOf(ve), staticSuggestions: a.a.arrayOf(ve), staticSuggestionsHeading: a.a.oneOfType([a.a.element, a.a.string]), border: a.a.bool, placeholder: a.a.string, inputId: a.a.string, maxSelections: a.a.number, onSelectionsChanged: a.a.func, onFocus: a.a.func, SuggestionTemplate: a.a.func, SelectionTemplate: a.a.func }
        },
        30: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return o }));
            var r = n(0),
                o = function() { return Object(r.h)("svg", { className: "crayons-icon crayons-spinner", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Object(r.h)("path", { d: "M18.364 5.636L16.95 7.05A7 7 0 1019 12h2a9 9 0 11-2.636-6.364z", fill: "currentColor" })) }
        },
        31: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return O })), n.d(t, "a", (function() { return w }));
            var r = n(0),
                o = n(1),
                i = n.n(o),
                a = n(20);

            function c(e) { return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, c(e) }

            function l(e) { return function(e) { if (Array.isArray(e)) return u(e) }(e) || function(e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || function(e, t) { if (!e) return; if ("string" === typeof e) return u(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) { f(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function f(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function p(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function v(e, t) { return v = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, v(e, t) }

            function b(e) {
                var t = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }

            function m(e, t) { if (t && ("object" === c(t) || "function" === typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) }

            function y(e) { return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, y(e) }
            var g = [];

            function O(e) { Array.isArray(e.actions) || (e.actions = []), g.push(e) }
            var w = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && v(e, t)
                }(c, e);
                var t, n, o, i = b(c);

                function c() {
                    var e;
                    p(this, c);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return (e = i.call.apply(i, [this].concat(n))).state = { snacks: [] }, e.pollingId = void 0, e.paused = !1, e.pauseLifespan = void 0, e.resumeLifespan = void 0, e
                }
                return t = c, (n = [{ key: "componentDidMount", value: function() { this.initializePolling() } }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this;
                        this.pauseLifespan || (this.pauseLifespan = function(t) { e.paused = !0 }, this.resumeLifespan = function(t) { t.stopPropagation(), e.paused = !1 }, this.element.addEventListener("mouseover", this.pauseLifespan), this.element.addEventListener("mouseout", this.resumeLifespan, !0))
                    }
                }, { key: "componentWillUnmount", value: function() { this.element && (this.element.removeEventListener("mouseover", this.pauseLifespan), this.element.addEventListener("mouseout", this.resumeLifespan)) } }, {
                    key: "initializePolling",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.pollingTime,
                            r = t.lifespan;
                        this.pollingId = setInterval((function() {
                            if (g.length > 0) {
                                var t = g.map((function(e) { return d(d({}, e), {}, { lifespan: r }) }));
                                g = [], e.updateSnackbarItems(t), t.forEach((function(t) { t.lifespanTimeoutId = setTimeout((function() { e.decreaseLifespan(t) }), 1e3), t.addCloseButton && t.actions.push({ text: "Dismiss", handler: function() { e.setState((function(e) { return { prevState: e, snacks: e.snacks.filter((function(e) { return e !== t })) } })) } }) }))
                            }
                        }), n)
                    }
                }, {
                    key: "updateSnackbarItems",
                    value: function(e) {
                        this.setState((function(t) {
                            var n = [].concat(l(t.snacks), l(e));
                            return n.length > 3 && (n.slice(0, n.length - 3).forEach((function(e) {
                                var t = e.lifespanTimeoutId;
                                clearTimeout(t)
                            })), n = n.slice(n.length - 3)), d(d({}, t), {}, { snacks: n })
                        }))
                    }
                }, {
                    key: "decreaseLifespan",
                    value: function(e) {
                        var t = this;
                        if (!this.paused && 0 === e.lifespan) return clearTimeout(e.lifespanTimeoutId), void this.setState((function(t) { var n = t.snacks.filter((function(t) { return t !== e })); return d(d({}, t), {}, { snacks: n }) }));
                        this.paused || (e.lifespan -= 1), e.lifespanTimeoutId = setTimeout((function() { t.decreaseLifespan(e) }), 1e3)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state.snacks;
                        return Object(r.h)("div", { className: t.length > 0 ? "crayons-snackbar" : "hidden", ref: function(t) { e.element = t } }, t.map((function(e, t) {
                            var n = e.message,
                                o = e.actions,
                                i = void 0 === o ? [] : o;
                            return Object(r.h)(a.a, { message: n, actions: i, key: t })
                        })))
                    }
                }]) && h(t.prototype, n), o && h(t, o), Object.defineProperty(t, "prototype", { writable: !1 }), c
            }(r.Component);
            w.defaultProps = { lifespan: 5, pollingTime: 300 }, w.displayName = "Snackbar", w.propTypes = { lifespan: i.a.number, pollingTime: i.a.number }
        },
        32: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return B }));
            n(4);
            var r = n(0),
                o = n(2),
                i = n(33),
                a = n(5),
                c = n(3),
                l = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z" })) };
            l.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var u = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z" })) };
            u.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var s = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" })) };
            s.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var d = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z" })) };
            d.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var f = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z" })) };
            f.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var p = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" })) };
            p.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var h = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z" })) };
            h.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var v = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z" })) };
            v.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var b = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5zm15 7-3.536 3.536-1.414-1.415L16.172 12 14.05 9.879l1.414-1.415zM7.828 12l2.122 2.121-1.414 1.415L5 12l3.536-3.536L9.95 9.88z" })) };
            b.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var m = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3zM4 20h16v2H4z" })) };
            m.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var y = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.087 4.087 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099s.974.562 1.613.75c.62.18 1.297.414 2.03.699z" })) };
            y.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var g = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M2 11h6v2H2z" }), Object(r.h)("path", { d: "M2 11h6v2H2zm7 0h6v2H9zm7 0h6v2h-6z" }), Object(r.h)("path", { d: "M12 6.586 9.707 4.293 8.293 5.707 12 9.414l3.707-3.707-1.414-1.414zm0 10.828-2.293 2.293-1.414-1.414L12 14.586l3.707 3.707-1.414 1.414z", clipRule: "evenodd", fillRule: "evenodd" })) };
            g.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
            var O = /^\d+\.\s+.*/,
                w = /^\[([\w\s\d]*)\]\((url|(https?:\/\/[\w\d./?=#]+))\)$/,
                S = "url",
                j = function(e) {
                    var t = e.selectionStart,
                        n = e.selectionEnd,
                        r = e.value,
                        o = Object(a.f)({ selectionStart: t, value: r }),
                        i = Object(a.e)({ selectionEnd: n, value: r }),
                        c = 0 === t ? 0 : 2 - o;
                    return { newLinesPrefix: String.prototype.padStart(c, "\n"), newLinesSuffix: i >= 1 ? "" : "\n" }
                },
                _ = function(e) {
                    var t = e.value,
                        n = e.selectionStart,
                        r = e.selectionEnd,
                        o = e.prefix,
                        i = e.suffix,
                        c = o.length,
                        l = i.length,
                        u = Object(a.g)({ selectionStart: n, selectionEnd: r, value: t }),
                        s = u.selectedText,
                        d = u.textBeforeSelection,
                        f = u.textAfterSelection;
                    return s.slice(0, c) === o && s.slice(-1 * l) === i ? { editSelectionStart: n, editSelectionEnd: r, replaceSelectionWith: s.slice(c, -1 * l), newCursorStart: n, newCursorEnd: r - (c + l) } : d.substring(d.length - c) === o && f.substring(0, l) === i ? { editSelectionStart: n - c, editSelectionEnd: r + l, replaceSelectionWith: s, newCursorStart: n - c, newCursorEnd: r - c } : { editSelectionStart: n, editSelectionEnd: r, replaceSelectionWith: "".concat(o).concat(s).concat(i), newCursorStart: n + c, newCursorEnd: r + c }
                },
                x = function(e) {
                    var t = e.selectionStart,
                        n = e.selectionEnd,
                        r = e.value,
                        o = e.linePrefix,
                        i = e.blockPrefix,
                        c = e.blockSuffix,
                        l = Object(a.g)({ selectionStart: t, selectionEnd: n, value: r }),
                        u = l.selectedText,
                        s = l.textBeforeSelection,
                        d = l.textAfterSelection,
                        f = u;
                    if (o) {
                        var p = o.length;
                        if ("" === u) {
                            var h = "" === s ? -1 : Object(a.b)({ content: r, selectionIndex: t - 1, character: "\n" }),
                                v = -1 === h ? 0 : h + 1;
                            if (s.slice(v, v + p) === o) return { editSelectionStart: v, editSelectionEnd: v + p, replaceSelectionWith: "", newCursorStart: t - p, newCursorEnd: n - p }
                        }
                        var b = u.split("\n").filter((function(e) { return "" !== e }));
                        if (b.length > 0 && b.every((function(e) { return e.slice(0, p) === o }))) { var m = b.map((function(e) { return e.slice(p) })).join("\n"); return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: m, newCursorStart: t, newCursorEnd: n + (m.length - u.length) } }
                        f = "" === u ? o : b.map((function(e) { return "".concat(o).concat(e) })).join("\n")
                    } else {
                        var y = i.length,
                            g = c.length;
                        if (u.slice(0, y) === i && u.slice(-1 * g) === c) return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: u.slice(y, -1 * g), newCursorStart: t, newCursorEnd: n - y - g };
                        if (s.slice(-1 * y) === i && d.slice(0, g) === c) return { editSelectionStart: t - y, editSelectionEnd: n + g, replaceSelectionWith: u, newCursorStart: t - y, newCursorEnd: n - y }
                    }
                    var O = j({ selectionStart: t, selectionEnd: n, value: r }),
                        w = O.newLinesPrefix,
                        S = O.newLinesSuffix,
                        _ = w.length,
                        x = t + _,
                        k = i ? i.length : 0,
                        E = "" === u && o ? o.length : 0;
                    return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: "".concat(w).concat(i || "").concat(f).concat(c || "").concat(S), newCursorStart: x + k + E, newCursorEnd: n + f.length - u.length + _ + ((null === i || void 0 === i ? void 0 : i.length) || 0) }
                },
                k = {
                    bold: {
                        icon: function() { return Object(r.h)(c.f, { src: l }) },
                        label: "Bold",
                        getKeyboardShortcut: function() { var e = Runtime.getOSKeyboardModifierKeyString(); return { command: "".concat(e, "+b"), tooltipHint: "".concat(e.toUpperCase(), " + B") } },
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return _({ selectionStart: t, selectionEnd: n, value: r, prefix: "**", suffix: "**" })
                        }
                    },
                    italic: {
                        icon: function() { return Object(r.h)(c.f, { src: u }) },
                        label: "Italic",
                        getKeyboardShortcut: function() { var e = Runtime.getOSKeyboardModifierKeyString(); return { command: "".concat(e, "+i"), tooltipHint: "".concat(e.toUpperCase(), " + I") } },
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return _({ selectionStart: t, selectionEnd: n, value: r, prefix: "_", suffix: "_" })
                        }
                    },
                    link: {
                        icon: function() { return Object(r.h)(c.f, { src: s }) },
                        label: "Link",
                        getKeyboardShortcut: function() { var e = Runtime.getOSKeyboardModifierKeyString(); return { command: "".concat(e, "+k"), tooltipHint: "".concat(e.toUpperCase(), " + K") } },
                        getFormatting: function(e) {
                            var t, n = e.selectionStart,
                                r = e.selectionEnd,
                                o = e.value,
                                i = Object(a.g)({ selectionStart: n, selectionEnd: r, value: o }),
                                c = i.selectedText,
                                l = i.textBeforeSelection,
                                u = i.textAfterSelection;
                            return "" === c ? function(e) {
                                var t = e.textBeforeSelection,
                                    n = e.textAfterSelection,
                                    r = e.value,
                                    o = e.selectionStart,
                                    i = e.selectionEnd,
                                    c = { editSelectionStart: o, editSelectionEnd: i, replaceSelectionWith: "[](".concat(S, ")"), newCursorStart: o + 3, newCursorEnd: i + 6 };
                                if ("[" !== t.slice(-1) || "](" !== n.slice(0, 2)) return c;
                                var l = Object(a.d)({ content: r, selectionIndex: o, character: ")", breakOnCharacters: [" ", "\n"] });
                                if (-1 === l) return c;
                                var u = r.slice(i + 2, l);
                                return { editSelectionStart: o - 1, editSelectionEnd: l + 1, replaceSelectionWith: u === S ? "" : u, newCursorStart: o - 1, newCursorEnd: i - 1 }
                            }({ textBeforeSelection: l, textAfterSelection: u, value: o, selectionStart: n, selectionEnd: r }) : "https://" === (t = c.substring(0, 8)) || t.startsWith("http://") || c === S ? function(e) {
                                var t = e.textBeforeSelection,
                                    n = e.textAfterSelection,
                                    r = e.value,
                                    o = e.selectionStart,
                                    i = e.selectionEnd,
                                    c = e.selectedText,
                                    l = { editSelectionStart: o, editSelectionEnd: i, replaceSelectionWith: "[](".concat(c, ")"), newCursorStart: o + 1, newCursorEnd: o + 1 };
                                if ("](" !== t.slice(-2) || ")" !== n.slice(0, 1)) return l;
                                var u = Object(a.b)({ content: r, selectionIndex: o, character: "[" });
                                if (-1 === u) return l;
                                var s = t.slice(u + 1, -2);
                                return "" === s && (s = c === S ? "" : c), { editSelectionStart: u, editSelectionEnd: i + 1, replaceSelectionWith: s, newCursorStart: u, newCursorEnd: u + s.length }
                            }({ textBeforeSelection: l, textAfterSelection: u, value: o, selectionStart: n, selectedText: c, selectionEnd: r }) : c.match(w) ? function(e) {
                                var t = e.selectedText,
                                    n = e.selectionStart,
                                    r = e.selectionEnd,
                                    o = Object(a.d)({ content: t, selectionIndex: 0, character: "]" }),
                                    i = t.slice(1, o);
                                if ("" === i) {
                                    var c = t.slice(o + 2, -1);
                                    i = c === S ? "" : c
                                }
                                return { editSelectionStart: n, editSelectionEnd: r, replaceSelectionWith: i, newCursorStart: n, newCursorEnd: n + i.length }
                            }({ selectedText: c, selectionStart: n, selectionEnd: r, textBeforeSelection: l, textAfterSelection: u }) : { editSelectionStart: n, editSelectionEnd: r, replaceSelectionWith: "[".concat(c, "](").concat(S, ")"), newCursorStart: n + c.length + 3, newCursorEnd: r + 6 }
                        }
                    },
                    orderedList: {
                        icon: function() { return Object(r.h)(c.f, { src: d }) },
                        label: "Ordered list",
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value,
                                o = Object(a.g)({ selectionStart: t, selectionEnd: n, value: r }),
                                i = o.selectedText,
                                c = o.textBeforeSelection,
                                l = j({ selectionStart: t, selectionEnd: n, value: r }),
                                u = l.newLinesPrefix,
                                s = l.newLinesSuffix,
                                d = u.length,
                                f = s.length;
                            if ("" === i) {
                                var p = "" === c ? -1 : Object(a.b)({ content: r, selectionIndex: t - 1, character: "\n" }),
                                    h = -1 === p ? 0 : p + 1;
                                if ("1. " === c.slice(h, h + 3)) return { editSelectionStart: h, editSelectionEnd: h + 3, replaceSelectionWith: "", newCursorStart: t - 3, newCursorEnd: n - 3 }
                            }
                            if ("" === i) return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: "".concat(u, "1. ").concat(s), newCursorStart: t + 3 + d, newCursorEnd: n + 3 + d };
                            var v = i.split("\n");
                            if (v.every((function(e) { return e.match(O) || "" === e }))) { var b = v.filter((function(e) { return "" !== e })).map((function(e) { var t = e.indexOf("."); return e.substring(t + 2) })).join("\n"); return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: b, newCursorStart: t + i.indexOf(".") - 1, newCursorEnd: n + b.length - i.length } }
                            var m = "".concat(u).concat(v.map((function(e, t) { return "".concat(t + 1, ". ").concat(e) })).join("\n")).concat(s);
                            return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: m, newCursorStart: t + (0 === i.length ? 4 : d), newCursorEnd: t + m.length - f }
                        }
                    },
                    unorderedList: {
                        icon: function() { return Object(r.h)(c.f, { src: f }) },
                        label: "Unordered list",
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return x({ selectionStart: t, selectionEnd: n, value: r, linePrefix: "- " })
                        }
                    },
                    heading: {
                        icon: function() { return Object(r.h)(c.f, { src: p }) },
                        label: "Heading",
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value,
                                o = t;
                            if (t > 0) {
                                var i = Object(a.b)({ content: r, selectionIndex: t - 1, character: "\n" }),
                                    c = -1 === i ? 0 : i + 1;
                                "#" === r.charAt(c) && (o = c)
                            }
                            for (var l = Object(a.g)({ selectionStart: o, selectionEnd: n, value: r }).selectedText, u = 0;
                                "#" === l.charAt(u);) u++;
                            if (u >= 4) return { editSelectionStart: o, editSelectionEnd: n, replaceSelectionWith: l.substring(5), newCursorStart: t - 5, newCursorEnd: n - 5 };
                            var s = j({ selectionStart: t, selectionEnd: n, value: r }),
                                d = s.newLinesPrefix,
                                f = s.newLinesSuffix,
                                p = d.length,
                                h = u > 0,
                                v = h ? 1 : 3 + p;
                            return { editSelectionStart: h ? o : t, editSelectionEnd: n, replaceSelectionWith: h ? "#".concat(l) : "".concat(d, "## ").concat(l).concat(f), newCursorStart: t + v, newCursorEnd: n + v }
                        }
                    },
                    quote: {
                        icon: function() { return Object(r.h)(c.f, { src: h }) },
                        label: "Quote",
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return x({ selectionStart: t, selectionEnd: n, value: r, linePrefix: "> " })
                        }
                    },
                    code: {
                        icon: function() { return Object(r.h)(c.f, { src: v }) },
                        label: "Code",
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return _({ selectionStart: t, selectionEnd: n, value: r, prefix: "`", suffix: "`" })
                        }
                    },
                    codeBlock: {
                        icon: function() { return Object(r.h)(c.f, { src: b }) },
                        label: "Code block",
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return x({ selectionStart: t, selectionEnd: n, value: r, blockPrefix: "```\n", blockSuffix: "\n```" })
                        }
                    }
                },
                E = {
                    underline: {
                        icon: function() { return Object(r.h)(c.f, { src: m }) },
                        label: "Underline",
                        getKeyboardShortcut: function() { var e = Runtime.getOSKeyboardModifierKeyString(); return { command: "".concat(e, "+u"), tooltipHint: "".concat(e.toUpperCase(), " + U") } },
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return _({ selectionStart: t, selectionEnd: n, value: r, prefix: "<u>", suffix: "</u>" })
                        }
                    },
                    strikethrough: {
                        icon: function() { return Object(r.h)(c.f, { src: y }) },
                        label: "Strikethrough",
                        getKeyboardShortcut: function() { var e = Runtime.getOSKeyboardModifierKeyString(); return { command: "".concat(e, "+shift+x"), tooltipHint: "".concat(e.toUpperCase(), " + SHIFT + X") } },
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return _({ selectionStart: t, selectionEnd: n, value: r, prefix: "~~", suffix: "~~" })
                        }
                    },
                    divider: {
                        icon: function() { return Object(r.h)(c.f, { src: g }) },
                        label: "Line divider",
                        getFormatting: function(e) {
                            var t = e.selectionStart,
                                n = e.selectionEnd,
                                r = e.value;
                            return x({ selectionStart: t, selectionEnd: n, value: r, blockPrefix: "---\n", blockSuffix: "" })
                        }
                    }
                },
                C = n(13),
                I = n(19);

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) { A(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function A(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function N(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return M(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var R = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" })) };
            R.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var U = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20Zm-1-5h2v2h-2v-2Zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.5 3.5 0 1 1 13 13.355Z" })) };
            U.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var L = "![Uploading image](...)",
                B = function(e) {
                    var t = e.textAreaId,
                        n = N(Object(o.j)(null), 2),
                        l = n[0],
                        u = n[1],
                        s = N(Object(o.j)(!1), 2),
                        d = s[0],
                        f = s[1],
                        p = N(Object(o.j)({}), 2),
                        h = p[0],
                        v = p[1],
                        b = Object(I.b)("(max-width: ".concat(I.a.Medium - 1, "px)")),
                        m = T(T({}, k), E),
                        y = Object.fromEntries(Object.keys(m).filter((function(e) { return !!m[e].getKeyboardShortcut })).map((function(e) { return [m[e].getKeyboardShortcut().command, function(t) { t.preventDefault(), O(e) }] })));
                    Object(o.f)((function() { u(document.getElementById(t)) }), [t]), Object(o.f)((function() { document.querySelector('.toolbar-btn[tabindex="0"]') || document.querySelector(".toolbar-btn").setAttribute("tabindex", "0") }), [b]), Object(o.f)((function() {
                        var e = function(e) { "overflow-menu-button" !== e.target.id && f(!1) },
                            t = function(e) { var t = e.key; "Escape" === t && (f(!1), document.getElementById("overflow-menu-button").focus()), "Tab" === t && f(!1) };
                        return d ? (document.getElementById("overflow-menu").getElementsByClassName("overflow-menu-btn")[0].focus(), document.addEventListener("keyup", t), document.addEventListener("click", e)) : (document.removeEventListener("keyup", t), document.removeEventListener("click", e)),
                            function() { document.removeEventListener("keyup", t), document.removeEventListener("click", e) }
                    }), [d]);
                    var g = function(e, t) {
                            var n = e.key,
                                r = e.target,
                                o = function(e, t) {
                                    for (var n = e.nextElementSibling; n;) {
                                        if (n.matches(t)) return n;
                                        n = n.nextElementSibling
                                    }
                                }(r, ".".concat(t)),
                                i = function(e, t) {
                                    for (var n = e.previousElementSibling; n;) {
                                        if (n.matches(t)) return n;
                                        n = n.previousElementSibling
                                    }
                                }(r, ".".concat(t));
                            switch (n) {
                                case "ArrowRight":
                                    if (e.preventDefault(), r.setAttribute("tabindex", "-1"), o) o.setAttribute("tabindex", 0), o.focus();
                                    else {
                                        var a = document.querySelector(".".concat(t));
                                        a.setAttribute("tabindex", "0"), a.focus()
                                    }
                                    break;
                                case "ArrowLeft":
                                    if (e.preventDefault(), r.setAttribute("tabindex", "-1"), i) i.setAttribute("tabindex", 0), i.focus();
                                    else {
                                        var c = document.getElementsByClassName(t),
                                            l = c[c.length - 1];
                                        l.setAttribute("tabindex", "0"), l.focus()
                                    }
                                    break;
                                case "ArrowDown":
                                    "overflow-menu-button" === r.id && (e.preventDefault(), f(!0))
                            }
                        },
                        O = function(e) {
                            f(!1);
                            var t = m[e].getFormatting(l),
                                n = t.newCursorStart,
                                r = t.newCursorEnd,
                                o = t.editSelectionStart,
                                i = t.editSelectionEnd,
                                a = t.replaceSelectionWith;
                            l.contentEditable = "true", l.focus({ preventScroll: !0 }), l.setSelectionRange(o, i);
                            try { "" === a ? document.execCommand("delete", !1) : document.execCommand("insertText", !1, a) } catch (c) {
                                l.value = function(e) {
                                    var t = e.textAreaValue,
                                        n = e.editSelectionStart,
                                        r = e.editSelectionEnd,
                                        o = e.replaceSelectionWith;
                                    return "".concat(t.substring(0, n)).concat(o).concat(t.substring(r))
                                }({ textAreaValue: l.value, editSelectionStart: o, editSelectionEnd: i, replaceSelectionWith: a })
                            }
                            l.contentEditable = "false", l.dispatchEvent(new Event("input")), l.setSelectionRange(n, r)
                        },
                        w = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = l.selectionStart,
                                n = l.selectionEnd,
                                r = l.value,
                                o = r.indexOf(L);
                            if (-1 !== o) {
                                var i = l.value.replace(L, e);
                                if (l.value = i, l.dispatchEvent(new Event("input")), o > t) l.setSelectionRange(t, n);
                                else {
                                    var a = e.length - L.length;
                                    l.setSelectionRange(t + a, n + a)
                                }
                            }
                        },
                        S = function(e) {
                            return Object.keys(E).map((function(t, n) {
                                var o = E[t],
                                    i = o.icon,
                                    a = o.label,
                                    l = o.getKeyboardShortcut;
                                return Object(r.h)(c.c, { key: "".concat(t, "-btn"), role: e ? "menuitem" : "button", icon: i, className: e ? "overflow-menu-btn hidden m:block mr-1" : "toolbar-btn m:hidden mr-1", tabindex: e && 0 === n ? "0" : "-1", onClick: function() { return O(t) }, onKeyUp: function(t) { return g(t, e ? "overflow-menu-btn" : "toolbar-btn") }, "aria-label": a, tooltip: b ? null : Object(r.h)("span", { "aria-hidden": "true" }, a, l ? Object(r.h)("span", { className: "opacity-75" }, " ".concat(l().tooltipHint)) : null) })
                            }))
                        };
                    return Object(r.h)("div", { className: "editor-toolbar relative", "aria-label": "Markdown formatting toolbar", role: "toolbar", "aria-controls": t }, Object.keys(k).map((function(e, t) {
                        var n = k[e],
                            o = n.icon,
                            i = n.label,
                            a = n.getKeyboardShortcut;
                        return Object(r.h)(c.c, { key: "".concat(e, "-btn"), icon: o, className: "toolbar-btn mr-1", tabindex: 0 === t ? "0" : "-1", onClick: function() { return O(e) }, onKeyUp: function(e) { return g(e, "toolbar-btn") }, "aria-label": i, tooltip: b ? null : Object(r.h)("span", { "aria-hidden": "true" }, i, a ? Object(r.h)("span", { className: "opacity-75" }, " ".concat(a().tooltipHint)) : null) })
                    })), Object(r.h)(i.a, {
                        editorVersion: "v2",
                        onImageUploadStart: function() {
                            var e = Object(a.g)(l),
                                t = e.textBeforeSelection,
                                n = e.textAfterSelection,
                                r = h.selectionEnd,
                                o = "".concat(t, "\n").concat(L).concat(n);
                            l.value = o, l.dispatchEvent(new Event("input")), l.focus({ preventScroll: !0 });
                            var i = r + L.length + 1;
                            l.setSelectionRange(i, i)
                        },
                        onImageUploadSuccess: w,
                        onImageUploadError: w,
                        buttonProps: {
                            onKeyUp: function(e) { return g(e, "toolbar-btn") },
                            onClick: function() {
                                var e = l.selectionStart,
                                    t = l.selectionEnd;
                                v({ selectionStart: e, selectionEnd: t })
                            },
                            tooltip: b ? null : Object(r.h)("span", { "aria-hidden": "true" }, "Upload image"),
                            key: "image-btn",
                            className: "toolbar-btn formatter-btn mr-1",
                            tabindex: "-1"
                        }
                    }), b ? S(!1) : null, b ? null : Object(r.h)(c.c, { id: "overflow-menu-button", onClick: function() { return f(!d) }, onKeyUp: function(e) { return g(e, "toolbar-btn") }, "aria-expanded": d ? "true" : "false", "aria-haspopup": "true", icon: R, className: "toolbar-btn ml-auto hidden m:block", tabindex: "-1", "aria-label": "More options" }), d && Object(r.h)("div", { id: "overflow-menu", role: "menu", className: "crayons-dropdown flex p-2 min-w-unset right-0 top-100" }, S(!0), Object(r.h)(c.g, { block: !0, role: "menuitem", href: "/p/editor_guide", target: "_blank", rel: "noopener noreferrer", icon: U, className: "overflow-menu-btn", tabindex: "-1", "aria-label": "Help", onKeyUp: function(e) { return g(e, "overflow-menu-btn") } })), l && Object(r.h)(C.a, { shortcuts: y, eventTarget: l }))
                }
        },
        33: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return E }));
            n(4);
            var r = n(0),
                o = n(2),
                i = n(23),
                a = n(16),
                c = n(14),
                l = n(1),
                u = n.n(l),
                s = n(3),
                d = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z" })) };
            d.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var f = function(e) {
                var t, n = e.onCopy,
                    o = e.imageUrls,
                    i = e.showCopyMessage,
                    a = void 0 !== i && i;
                return Object(r.h)("clipboard-copy", { onClick: n, for: "image-markdown-copy-link-input", "aria-live": "polite", className: "flex items-center flex-1", "aria-controls": "image-markdown-copy-link-announcer" }, Object(r.h)("input", { "data-testid": "markdown-copy-link", type: "text", className: "crayons-textfield mr-2", id: "image-markdown-copy-link-input", readOnly: "true", value: (t = o, t.map((function(e) { return "![Image description](".concat(e, ")") })).join("\n")) }), Object(r.h)(s.c, { className: "spec__image-markdown-copy whitespace-nowrap fw-normal", icon: d, title: "Copy markdown for image" }, a ? "Copied!" : "Copy..."))
            };

            function p() { return p = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, p.apply(this, arguments) }

            function h(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return v(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) { y(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function y(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            f.displayName = "ClipboardButton", f.propTypes = { onCopy: u.a.func.isRequired, imageUrls: u.a.arrayOf(u.a.string).isRequired, showCopyMessage: u.a.bool.isRequired };
            var g = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" })) };
            g.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var O = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" })) };
            O.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var w = function() { return Object(r.h)("span", { className: "spinner-or-cancel" }, Object(r.h)(s.k, null), Object(r.h)(s.f, { className: "cancel", src: O })) };

            function S(e, t) {
                var n = t.type,
                    r = t.payload;
                switch (n) {
                    case "uploading_image":
                        return m(m({}, e), {}, { uploadErrorMessage: null, uploadingImage: !0, insertionImageUrls: [] });
                    case "upload_error":
                        return m(m({}, e), {}, { insertionImageUrls: [], uploadErrorMessage: r.errorMessage, uploadingImage: !1 });
                    case "upload_image_success":
                        return m(m({}, e), {}, { insertionImageUrls: r.insertionImageUrls, uploadingImage: !1, uploadErrorMessage: null });
                    default:
                        return e
                }
            }

            function j(e) {
                var t;
                e.preventDefault(), null === (t = window.ForemMobile) || void 0 === t || t.injectNativeMessage("imageUpload", { action: "imageUpload" })
            }
            var _ = function(e) { var t = e.uploadingImage; return Object(r.h)(r.Fragment, null, !t && Object(r.h)(s.c, { "aria-label": "Upload an image", className: "mr-2", icon: g, onClick: j }, "Upload image")) },
                x = function(e) {
                    var t = e.buttonProps,
                        n = e.handleInsertionImageUpload,
                        i = e.uploadingImage,
                        a = e.useNativeUpload,
                        l = e.handleNativeMessage,
                        u = e.uploadErrorMessage;
                    Object(o.d)((function() { u && Object(c.addSnackbarItem)({ message: u, addCloseButton: !0 }) }), [u]);
                    var d = h(Object(o.j)(null), 2),
                        f = d[0],
                        v = d[1],
                        b = t.tooltip;
                    return Object(r.h)(r.Fragment, null, a ? Object(r.h)("input", { type: "hidden", id: "native-image-upload-message", value: "", onChange: l }) : Object(r.h)("input", {
                        type: "file",
                        tabindex: "-1",
                        "aria-label": "Upload image",
                        id: "image-upload-field",
                        onChange: function(e) {
                            var t = new AbortController;
                            v(t), n(e, t.signal)
                        },
                        className: "screen-reader-only",
                        accept: "image/*",
                        "data-max-file-size-mb": "25"
                    }), i ? Object(r.h)(s.c, p({}, t, { icon: w, onClick: function() { f.abort(), v(null) }, "aria-label": "Cancel image upload", tooltip: "Cancel upload" })) : Object(r.h)(s.c, p({}, t, {
                        icon: g,
                        onClick: function(e) {
                            var n;
                            null === (n = t.onClick) || void 0 === n || n.call(t, e), a ? j(e) : document.getElementById("image-upload-field").click()
                        },
                        "aria-label": "Upload image",
                        tooltip: b
                    })))
                },
                k = function(e) {
                    var t = e.uploadingImage,
                        n = e.useNativeUpload,
                        i = e.handleNativeMessage,
                        a = e.handleInsertionImageUpload,
                        l = e.insertionImageUrls,
                        u = e.uploadErrorMessage,
                        d = h(Object(o.j)(!1), 2),
                        p = d[0],
                        v = d[1];
                    Object(o.d)((function() { t && v(!1) }), [t]);
                    return Object(r.h)("div", { className: "flex items-center" }, t && Object(r.h)("span", { class: "lh-base pl-3 border-0 py-2 inline-block" }, Object(r.h)(s.k, null), " Uploading..."), n ? Object(r.h)(_, { uploadingImage: t, handleNativeMessage: i }) : t ? null : Object(r.h)(r.Fragment, null, Object(r.h)("label", { className: "cursor-pointer c-btn" }, Object(r.h)(s.f, { src: g, className: "c-btn__icon crayons-icon" }), " Upload image", Object(r.h)("input", { type: "file", id: "image-upload-field", onChange: a, className: "screen-reader-only", multiple: !0, accept: "image/*", "data-max-file-size-mb": "25" }))), l.length > 0 && Object(r.h)(f, {
                        onCopy: function() {
                            var e = document.getElementById("image-markdown-copy-link-input");
                            Runtime.copyToClipboard(e.value).then((function() { v(!0) })).catch((function(e) { Object(c.addSnackbarItem)({ message: e, addCloseButton: !0 }), Honeybadger.notify(e) }))
                        },
                        imageUrls: l,
                        showCopyMessage: p
                    }), u ? Object(r.h)("span", { className: "color-accent-danger" }, u) : null)
                },
                E = function(e) {
                    var t = e.editorVersion,
                        n = void 0 === t ? "v2" : t,
                        c = e.buttonProps,
                        l = void 0 === c ? {} : c,
                        u = e.onImageUploadStart,
                        s = e.onImageUploadSuccess,
                        d = e.onImageUploadError,
                        f = h(Object(o.h)(S, { insertionImageUrls: [], uploadErrorMessage: null, uploadingImage: !1 }), 2),
                        p = f[0],
                        v = f[1],
                        b = p.uploadingImage,
                        m = p.uploadErrorMessage,
                        y = p.insertionImageUrls;

                    function g(e) { null === d || void 0 === d || d(), v({ type: "upload_error", payload: { errorMessage: e.message } }) }

                    function O(e, t) {
                        var n = e.target.files;
                        if (n.length > 0 && Object(a.validateFileInputs)()) {
                            var r = { image: n };
                            v({ type: "uploading_image" }), null === u || void 0 === u || u(), Object(i.a)({ payload: r, successCb: w, failureCb: g, signal: t })
                        }
                    }

                    function w(e) { v({ type: "upload_image_success", payload: { insertionImageUrls: e.links } }), null === s || void 0 === s || s("![Image description](".concat(e.links, ")")), document.getElementById("upload-success-info").innerText = "image upload complete" }

                    function j(e) {
                        var t = JSON.parse(e.detail);
                        if ("imageUpload" === t.namespace) switch (t.action) {
                            case "uploading":
                                null === u || void 0 === u || u(), v({ type: "uploading_image" });
                                break;
                            case "error":
                                v({ type: "upload_error", payload: { errorMessage: t.error } });
                                break;
                            case "success":
                                null === s || void 0 === s || s("![Image description](".concat(t.link, ")")), v({ type: "upload_image_success", payload: { insertionImageUrls: [t.link] } })
                        }
                    }
                    var _ = Runtime.isNativeIOS("imageUpload_disabled");
                    return document.addEventListener("ForemMobile", j), Object(r.h)(r.Fragment, null, Object(r.h)("div", { id: "upload-success-info", "aria-live": "polite", className: "screen-reader-only" }), "v2" === n ? Object(r.h)(x, { buttonProps: l, uploadingImage: b, handleInsertionImageUpload: O, useNativeUpload: _, handleNativeMessage: j, uploadErrorMessage: m }) : Object(r.h)(k, { uploadingImage: b, useNativeUpload: _, handleNativeMessage: j, handleInsertionImageUpload: O, insertionImageUrls: y, uploadErrorMessage: m }))
                };
            E.displayName = "ImageUploader"
        },
        34: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a }));
            var r = n(27),
                o = n.n(r),
                i = document.getElementById("i18n-translations");

            function a(e) { return o.a.t(e) }
            i && (o.a.translations = JSON.parse(i.dataset.translations)), o.a.defaultLocale = "en", o.a.locale = document.body.dataset.locale
        },
        35: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Modal", (function() { return p }));
            n(4);
            var r = n(0),
                o = n(1),
                i = n.n(o),
                a = n(8),
                c = n.n(a),
                l = n(21),
                u = n(6),
                s = n(3);

            function d(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var f = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" })) };
            f.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
            var p = function(e) {
                var t, n = e.children,
                    o = e.size,
                    i = e.className,
                    a = e.title,
                    u = e.prompt,
                    p = e.centered,
                    h = e.noBackdrop,
                    v = e.backdropDismissible,
                    b = void 0 !== v && v,
                    m = e.onClose,
                    y = void 0 === m ? function() {} : m,
                    g = e.focusTrapSelector,
                    O = void 0 === g ? ".crayons-modal__box" : g,
                    w = c()("crayons-modal", (d(t = {}, "crayons-modal--".concat(o), o && "medium" !== o), d(t, "crayons-modal--prompt", u), d(t, "crayons-modal--centered", p && u), d(t, "crayons-modal--bg-dismissible", !h && b), d(t, i, i), t));
                return Object(r.h)(l.a, { onDeactivate: y, clickOutsideDeactivates: b, selector: O }, Object(r.h)("div", { "data-testid": "modal-container", className: w }, Object(r.h)("div", { role: "dialog", "aria-modal": "true", "aria-label": "modal", className: "crayons-modal__box" }, Object(r.h)("header", { className: "crayons-modal__box__header" }, Object(r.h)("h2", { class: "crayons-subtitle-2" }, a), Object(r.h)(s.c, { icon: f, "aria-label": "Close", className: "crayons-modal__dismiss", onClick: y })), Object(r.h)("div", { className: "crayons-modal__box__body" }, n)), !h && Object(r.h)("div", { "data-testid": "modal-overlay", className: "crayons-modal__backdrop" })))
            };
            p.displayName = "Modal", p.propTypes = { children: u.c.isRequired, className: i.a.string, title: i.a.string.isRequired, backdrop: i.a.bool, backdropDismissible: i.a.bool, prompt: i.a.bool, centered: i.a.bool, onClose: i.a.func, size: i.a.oneOf(["small", "medium", "large"]), focusTrapSelector: i.a.string }
        },
        5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return d })), n.d(t, "c", (function() { return f })), n.d(t, "b", (function() { return p })), n.d(t, "d", (function() { return h })), n.d(t, "f", (function() { return v })), n.d(t, "e", (function() { return b })), n.d(t, "g", (function() { return m })), n.d(t, "h", (function() { return y }));
            var r, o = n(2),
                i = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"],
                a = function(e) {
                    var t = window.getComputedStyle(e),
                        n = t.getPropertyValue("box-sizing") || t.getPropertyValue("-moz-box-sizing") || t.getPropertyValue("-webkit-box-sizing"),
                        r = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
                        o = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
                    return { sizingStyle: i.map((function(e) { return "".concat(e, ":").concat(t.getPropertyValue(e)) })).join(";"), paddingSize: r, borderSize: o, boxSizing: n }
                };

            function c(e) { return function(e) { if (Array.isArray(e)) return s(e) }(e) || function(e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || u(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function l(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try { for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0); } catch (l) { c = !0, o = l } finally { try { a || null == n.return || n.return() } finally { if (c) throw o } }
                    return i
                }(e, t) || u(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function u(e, t) { if (e) { if ("string" === typeof e) return s(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0 } }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var d = function(e, t) {
                    var n, r = document.body.getBoundingClientRect(),
                        o = e.getBoundingClientRect(),
                        i = o.top - r.top - e.scrollTop,
                        a = o.left - r.left - e.scrollLeft,
                        c = document.createElement("div"),
                        l = getComputedStyle(e),
                        s = function(e, t) {
                            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!n) {
                                if (Array.isArray(e) || (n = u(e)) || t && e && "number" === typeof e.length) {
                                    n && (e = n);
                                    var r = 0,
                                        o = function() {};
                                    return { s: o, n: function() { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] } }, e: function(e) { throw e }, f: o }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var i, a = !0,
                                c = !1;
                            return { s: function() { n = n.call(e) }, n: function() { var e = n.next(); return a = e.done, e }, e: function(e) { c = !0, i = e }, f: function() { try { a || null == n.return || n.return() } finally { if (c) throw i } } }
                        }(l);
                    try {
                        for (s.s(); !(n = s.n()).done;) {
                            var d = n.value;
                            c.style[d] = l[d]
                        }
                    } catch (b) { s.e(b) } finally { s.f() }
                    c.style.position = "absolute", c.style.top = "".concat(i, "px"), c.style.left = "".concat(a, "px"), c.style.opacity = 0;
                    var f = "INPUT" === e.tagName ? e.value.replace(/ /g, ".") : e.value;
                    c.textContent = f.substr(0, t), "TEXTAREA" === e.tagName && (c.style.height = "auto"), "INPUT" === e.tagName && (c.style.width = "auto");
                    var p = document.createElement("span");
                    p.textContent = f.substr(t) || ".", c.appendChild(p), document.body.appendChild(c);
                    var h = p.offsetLeft,
                        v = p.offsetTop;
                    return document.body.removeChild(c), { x: a + h, y: i + v }
                },
                f = function(e) {
                    var t = e.selectionStart,
                        n = e.value;
                    if (0 === t || "" === n) return { isUserMention: !1, indexOfMentionStart: -1 };
                    var r = p({ content: n, selectionIndex: t, character: "@", breakOnCharacters: [" ", "", "\n"] });
                    return { isUserMention: -1 !== r, indexOfMentionStart: r }
                },
                p = function e(t) {
                    var n = t.content,
                        r = t.selectionIndex,
                        o = t.character,
                        i = t.breakOnCharacters,
                        a = void 0 === i ? [] : i,
                        c = n.charAt(r),
                        l = n.charAt(r - 1);
                    return c === o ? r : 0 === r || a.includes(l) ? -1 : e({ content: n, selectionIndex: r - 1, character: o, breakOnCharacters: a })
                },
                h = function e(t) {
                    var n = t.content,
                        r = t.selectionIndex,
                        o = t.character,
                        i = t.breakOnCharacters,
                        a = void 0 === i ? [] : i,
                        c = n.charAt(r),
                        l = n.charAt(r + 1);
                    return c === o ? r : r <= n.length && !a.includes(l) ? e({ content: n, selectionIndex: r + 1, character: o, breakOnCharacters: a }) : -1
                },
                v = function(e) {
                    var t = e.selectionStart,
                        n = e.value;
                    if (0 === t) return 0;
                    for (var r = 0, o = t - 1; o >= 0 && "\n" === n.charAt(o);) r++, o--;
                    return r
                },
                b = function(e) {
                    var t = e.selectionEnd,
                        n = e.value;
                    if (t === n.length) return 0;
                    for (var r = 0, o = t; o < n.length && "\n" === n.charAt(o);) r++, o++;
                    return r
                },
                m = function(e) {
                    var t = e.selectionStart,
                        n = e.selectionEnd,
                        r = e.value;
                    return { textBeforeSelection: r.substring(0, t), textAfterSelection: r.substring(n, r.length), selectedText: r.substring(t, n) }
                },
                y = function() {
                    var e = l(Object(o.j)(null), 2),
                        t = e[0],
                        n = e[1],
                        i = l(Object(o.j)(!1), 2),
                        u = i[0],
                        s = i[1],
                        d = l(Object(o.j)([]), 2),
                        f = d[0],
                        p = d[1];
                    return Object(o.d)((function() {
                        if (t) {
                            var e = function() {
                                var e = [t].concat(c(f)).map((function(e) {
                                        return function(e) {
                                            r || (r = document.createElement("textarea"), document.body.appendChild(r));
                                            var t = a(e),
                                                n = t.paddingSize,
                                                o = t.borderSize,
                                                i = t.boxSizing,
                                                c = t.sizingStyle;
                                            r.setAttribute("style", "".concat(c, ";").concat("\nmin-height:0 !important;\nmax-height:none !important;\nheight:0 !important;\nvisibility:hidden !important;\noverflow:hidden !important;\nposition:absolute !important;\nz-index:-1000 !important;\ntop:0 !important;\nright:0 !important\n")), r.value = e.value || e.placeholder || "x";
                                            var l = r.scrollHeight;
                                            return "border-box" === i ? { height: l + o } : "content-box" === i ? { height: l - n } : { height: l }
                                        }(e).height
                                    })),
                                    n = Math.max.apply(Math, c(e)),
                                    o = "".concat(n, "px");
                                [t].concat(c(f)).forEach((function(e) { e.style["min-height"] = o, u && (e.style["max-height"] = o) }))
                            };
                            return e(), t.addEventListener("input", e),
                                function() { return t.removeEventListener("input", e) }
                        }
                    }), [t, f, u]), { setTextArea: n, setAdditionalElements: p, setConstrainToContentHeight: s }
                }
        },
        6: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() { return i })), n.d(t, "c", (function() { return a.a })), n.d(t, "b", (function() { return c.b })), n.d(t, "a", (function() { return c.a })), n.d(t, "d", (function() { return l }));
            var r = n(1),
                o = n.n(r),
                i = o.a.shape({ id: o.a.string.isRequired, name: o.a.string.isRequired, profile_image_url: o.a.string.isRequired, summary: o.a.string.isRequired }),
                a = n(7),
                c = n(24),
                l = o.a.shape({ tags: o.a.arrayOf(o.a.string).isRequired, onClick: o.a.func.isRequired, onKeyPress: o.a.func.isRequired })
        },
        7: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var r = n(1),
                o = n.n(r),
                i = o.a.oneOfType([o.a.arrayOf(o.a.node), o.a.node, o.a.object, o.a.arrayOf(o.a.object)])
        },
        9: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.element,
                    n = e.offsetTop,
                    r = void 0 === n ? 0 : n,
                    o = e.allowPartialVisibility,
                    i = void 0 !== o && o,
                    a = t.getBoundingClientRect(),
                    c = window.innerHeight || document.documentElement.clientHeight,
                    l = window.innerWidth || document.documentElement.clientWidth,
                    u = a.top <= c && a.top >= r,
                    s = a.right >= 0 && a.right <= l,
                    d = a.bottom >= r && a.bottom <= c,
                    f = a.left <= l && a.left >= 0,
                    p = a.top <= r,
                    h = a.bottom >= c;
                return i ? (u || d || p && h) && (f || s) : u && d && f && s
            }
            n.d(t, "a", (function() { return r }))
        }
    },
    [
        [125, 52, 0, 2]
    ]
]);
//# sourceMappingURL=Search-8ee193acd2a79544d0c4.chunk.js.map