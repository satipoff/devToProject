(window.webpackJsonp = window.webpackJsonp || []).push([
    [1, 109],
    [, , , function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return r.a })), n.d(t, "c", (function() { return m })), n.d(t, "g", (function() { return S })), n.d(t, "b", (function() { return C })), n.d(t, "d", (function() { return R })), n.d(t, "e", (function() { return U })), n.d(t, "j", (function() { return q })), n.d(t, "f", (function() { return K })), n.d(t, "h", (function() { return W.Modal })), n.d(t, "k", (function() { return Z.a })), n.d(t, "i", (function() { return be }));
        var r = n(25),
            o = n(0),
            a = n(1),
            i = n.n(a),
            c = n(2),
            l = n(8),
            u = n.n(l),
            s = n(7),
            d = ["children", "variant", "icon", "rounded", "destructive", "type", "className", "tooltip", "onKeyUp"];

        function f() { return f = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, f.apply(this, arguments) }

        function p(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function b(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
            }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return h(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function v(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
            return o
        }
        var m = function(e) {
            var t, n = e.children,
                r = e.variant,
                a = void 0 === r ? "default" : r,
                i = e.icon,
                l = e.rounded,
                s = e.destructive,
                h = e.type,
                m = void 0 === h ? "button" : h,
                g = e.className,
                y = e.tooltip,
                O = e.onKeyUp,
                w = v(e, d),
                S = b(Object(c.j)(!1), 2),
                j = S[0],
                x = S[1],
                E = u()("c-btn", (p(t = {}, "c-btn--".concat(a), a && "default" !== a), p(t, "c-btn--destructive", s && "secondary" !== a), p(t, "c-btn--icon-left", i && n), p(t, "c-btn--icon-alone", i && !n), p(t, "crayons-tooltip__activator", y), p(t, "radius-full", l), p(t, g, g), t));
            return Object(o.h)("button", f({ type: m, className: E, onKeyUp: function(e) { null === O || void 0 === O || O(e), y && x("Escape" === e.key) } }, w), i && Object(o.h)(K, { "aria-hidden": "true", focusable: "false", src: i, className: "c-btn__icon" }), n, y ? Object(o.h)("span", { "data-testid": "tooltip", className: u()("crayons-tooltip__content", { "crayons-tooltip__suppressed": j }) }, y) : null)
        };
        m.displayName = "ButtonNew", m.propTypes = { children: s.a, variant: i.a.oneOf(["default", "primary", "secondary"]), rounded: i.a.bool, destructive: i.a.bool, type: i.a.oneOf(["button", "submit"]), className: i.a.string, tooltip: i.a.oneOfType([i.a.string, i.a.node]), onKeyUp: i.a.func, icon: i.a.elementType };
        var g = ["children", "href", "variant", "block", "icon", "rounded", "className"];

        function y() { return y = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, y.apply(this, arguments) }

        function O(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function w(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
            return o
        }
        var S = function(e) {
            var t, n = e.children,
                r = e.href,
                a = void 0 === r ? "#" : r,
                i = e.variant,
                c = void 0 === i ? "default" : i,
                l = e.block,
                s = e.icon,
                d = e.rounded,
                f = e.className,
                p = w(e, g),
                b = u()("c-link", (O(t = {}, "c-link--".concat(c), c && "default" !== c), O(t, "c-link--icon-left", s && n), O(t, "c-link--icon-alone", s && !n), O(t, "c-link--block", l), O(t, "radius-full", d), O(t, f, f), t));
            return Object(o.h)("a", y({ href: a, className: b }, p), s && Object(o.h)(K, { src: s, "aria-hidden": "true", focusable: "false", className: "c-link__icon" }), n)
        };
        S.displayName = "Link", S.propTypes = { variant: i.a.oneOf(["default", "branded"]), block: i.a.bool, rounded: i.a.bool, href: i.a.string.isRequired, className: i.a.string, children: s.a, icon: i.a.elementType };
        var j = ["children", "href", "variant", "icon", "className"];

        function x() { return x = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, x.apply(this, arguments) }

        function E(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function k(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
            return o
        }
        var I = function(e) {
            var t, n = e.children,
                r = e.href,
                a = void 0 === r ? "#" : r,
                i = e.variant,
                c = void 0 === i ? "default" : i,
                l = e.icon,
                s = e.className,
                d = k(e, j),
                f = u()("c-cta", (E(t = {}, "c-cta--".concat(c), c && "default" !== c), E(t, "c-cta--icon-left", l && n), E(t, s, s), t));
            return Object(o.h)("a", x({ href: a, className: f }, d), l && Object(o.h)(K, { src: l, "aria-hidden": "true", focusable: "false", className: "c-cta__icon" }), n)
        };
        I.displayName = "CTA", I.propTypes = { variant: i.a.oneOf(["default", "branded"]), rounded: i.a.bool, href: i.a.string.isRequired, className: i.a.string, children: s.a.isRequired, icon: i.a.elementType };
        var C = function(e) {
            var t = e.children,
                n = e.labelText;
            return Object(o.h)("div", { role: "group", "aria-label": n, className: "crayons-btn-group" }, t)
        };
        C.displayName = "ButtonGroup", C.propTypes = { children: s.a, labelText: i.a.string.isRequired };
        var P = n(10),
            A = ["children", "className", "triggerButtonId", "dropdownContentId", "dropdownContentCloseButtonId", "onOpen", "onClose"];

        function N() { return N = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, N.apply(this, arguments) }

        function T(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
            }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return _(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function M(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
            return o
        }
        var R = function(e) {
            var t = e.children,
                n = e.className,
                r = e.triggerButtonId,
                a = e.dropdownContentId,
                i = e.dropdownContentCloseButtonId,
                l = e.onOpen,
                u = void 0 === l ? function() {} : l,
                s = e.onClose,
                d = void 0 === s ? function() {} : s,
                f = M(e, A),
                p = T(Object(c.j)(!1), 2),
                b = p[0],
                h = p[1];
            return Object(c.f)((function() { b || (Object(P.b)({ triggerElementId: r, dropdownContentId: a, dropdownContentCloseButtonId: i, onOpen: u, onClose: d }), h(!0)) }), [a, r, i, b, u, d]), Object(o.h)("div", N({ id: a, className: "crayons-dropdown".concat(n && n.length > 0 ? " ".concat(n) : "") }, f), t)
        };
        R.defaultProps = { className: void 0 }, R.displayName = "Dropdown", R.propTypes = { children: s.a.isRequired, className: i.a.string, triggerButtonId: i.a.string.isRequired, dropdownContentId: i.a.string.isRequired, dropdownContentCloseButtonId: i.a.string, onOpen: i.a.func, onClose: i.a.func };
        var z = n(6),
            U = function(e) {
                var t = e.children,
                    n = e.variant;
                return Object(o.h)("div", { className: "crayons-field".concat(n && n.length > 0 ? " crayons-field--".concat(n) : "") }, t)
            };
        U.displayName = "FormField", U.defaultProps = { variant: void 0 }, U.propTypes = { children: z.c.isRequired, variant: i.a.oneOf(["radio", "checkbox"]) };
        var B = ["id", "value", "name", "className", "checked", "onClick"];

        function L() { return L = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, L.apply(this, arguments) }

        function D(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
            return o
        }
        var q = function(e) {
            var t = e.id,
                n = e.value,
                r = e.name,
                a = e.className,
                i = e.checked,
                c = e.onClick,
                l = D(e, B);
            return Object(o.h)("input", L({ id: t, value: n, name: r, className: "crayons-radio".concat(a && a.length > 0 ? " ".concat(a) : ""), checked: i, onClick: c, type: "radio" }, l))
        };
        q.displayName = "RadioButton", q.defaultProps = { id: void 0, className: void 0, checked: !1, name: void 0 }, q.propTypes = { id: i.a.string, value: i.a.string.isRequired, className: i.a.string, checked: i.a.bool, name: i.a.string, onClick: i.a.func.isRequired };
        n(36);
        i.a.string.isRequired, i.a.string.isRequired, i.a.string, i.a.object;
        var H = ["src", "native", "className"];

        function F() { return F = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, F.apply(this, arguments) }

        function V(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
            return o
        }
        var K = function(e) {
            var t, n, r, a = e.src,
                i = e.native,
                c = e.className,
                l = V(e, H);
            return Object(o.h)(a, F({ className: u()("crayons-icon", (t = { "crayons-icon--default": i }, n = c, r = c, n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r, t)) }, l))
        };
        K.displayName = "Icon", K.propTypes = { native: i.a.bool, className: i.a.string, src: i.a.elementType.isRequired };
        var W = n(28),
            Z = n(30);
        n(21);
        z.c.isRequired, i.a.string.isRequired, i.a.func;
        n(32), n(4);
        var $ = function(e) { return Object(o.h)("svg", e, Object(o.h)("path", { d: "m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" })) };
        $.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
        var J = function(e) {
            var t = e.name,
                n = e.onEdit,
                r = e.onDeselect;
            return Object(o.h)("div", { role: "group", "aria-label": t, className: "flex mr-1 mb-1 w-max" }, Object(o.h)(m, { variant: "secondary", className: "c-autocomplete--multi__selected p-1 cursor-text", "aria-label": "Edit ".concat(t), onClick: n }, t), Object(o.h)(m, { variant: "secondary", className: "c-autocomplete--multi__selected p-1", "aria-label": "Remove ".concat(t), onClick: r }, Object(o.h)(K, { src: $ })))
        };

        function X() { return X = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, X.apply(this, arguments) }

        function G(e) { return function(e) { if (Array.isArray(e)) return te(e) }(e) || function(e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || ee(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

        function Q(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    l = c.value
            } catch (u) { return void n(u) }
            c.done ? t(l) : Promise.resolve(l).then(r, o)
        }

        function Y(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
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
        var ae = "ArrowUp",
            ie = "ArrowDown",
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
            be = function(e) {
                var t, n = e.labelText,
                    r = e.showLabel,
                    a = void 0 === r || r,
                    i = e.fetchSuggestions,
                    l = e.defaultValue,
                    u = void 0 === l ? [] : l,
                    s = e.staticSuggestions,
                    d = void 0 === s ? [] : s,
                    f = e.staticSuggestionsHeading,
                    p = e.border,
                    b = void 0 === p || p,
                    h = e.placeholder,
                    v = void 0 === h ? "Add..." : h,
                    m = e.inputId,
                    g = e.maxSelections,
                    y = e.onSelectionsChanged,
                    O = e.onFocus,
                    w = e.SuggestionTemplate,
                    S = e.SelectionTemplate,
                    j = void 0 === S ? J : S,
                    x = Y(Object(c.h)(pe, { suggestions: [], selectedItems: u, inputPosition: null, editValue: null, activeDescendentIndex: null, ignoreBlur: !1, showMaxSelectionsReached: !1 }), 2),
                    E = x[0],
                    k = x[1],
                    I = E.selectedItems,
                    C = E.suggestions,
                    P = E.inputPosition,
                    A = E.editValue,
                    N = E.activeDescendentIndex,
                    T = E.ignoreBlur,
                    _ = E.showMaxSelectionsReached,
                    M = Object(c.i)(null),
                    R = Object(c.i)(null),
                    z = Object(c.i)(null),
                    U = Object(c.i)(null),
                    B = !g || I.length < g;
                Object(c.d)((function() { u.length > 0 && k({ type: "setSelectedItems", payload: { selectedItems: u } }) }), [u]);
                Object(c.d)((function() {
                    if (null !== A) {
                        var e = M.current;
                        if (e && null !== P) {
                            H(), e.value = A;
                            var t = A.length;
                            e.focus(), e.setSelectionRange(t, t);
                            var n = new Event("input");
                            e.dispatchEvent(n)
                        }
                    }
                }), [P, A]), Object(c.d)((function() {
                    if (null !== N) {
                        var e = U.current,
                            t = null === e || void 0 === e ? void 0 : e.querySelector('[aria-selected="true"]');
                        if (!e || !t) return;
                        var n = t.offsetHeight,
                            r = t.offsetTop,
                            o = e.offsetHeight,
                            a = e.scrollTop,
                            i = r + n > a + o;
                        r < a ? e.scrollTo(0, r) : i && e.scrollTo(0, r - o + n)
                    }
                }), [N]);
                var L = function(e) {
                        var t = e.textValue,
                            n = e.nextInputValue,
                            r = void 0 === n ? "" : n,
                            o = e.keepSelecting,
                            a = void 0 === o || o,
                            i = C.find((function(e) { return e.name === t }));
                        W({ selectedItem: i || { name: t }, nextInputValue: r, keepSelecting: a })
                    },
                    D = function(e, t) { R.current.innerText = e.name, Z(e), k({ type: "updateEditState", payload: { editValue: e.name, inputPosition: t } }) },
                    q = function(e) {
                        var t, n, r = e.nextInputValue,
                            o = void 0 === r ? "" : r,
                            a = e.keepSelecting,
                            i = void 0 === a || a;
                        null === (t = M.current) || void 0 === t || null === (n = t.style) || void 0 === n || n.removeProperty("width"), R.current.innerText = o, k({ type: "updateEditState", payload: { editValue: o, inputPosition: "" === o ? null : P + 1 } }), i || "" !== o || (M.current.value = "")
                    },
                    H = function() {
                        var e = M.current;
                        e && (e.style.width = "".concat(R.current.clientWidth, "px"))
                    },
                    F = function() {
                        var e, t = (e = function*(e) {
                            var t = e.target.value;
                            if (R.current.innerText = t, null !== P && H(), B)
                                if ("" !== t) {
                                    var n = yield i(t);
                                    0 === n.length && "" !== t && n.push({ name: t }), k({ type: "setSuggestions", payload: n.filter((function(e) { return !I.some((function(t) { return t.name === e.name })) })) })
                                } else k({ type: "setSuggestions", payload: d.filter((function(e) { return !I.some((function(t) { return t.name === e.name })) })) })
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var a = e.apply(t, n);

                                function i(e) { Q(a, r, o, i, c, "next", e) }

                                function c(e) { Q(a, r, o, i, c, "throw", e) }
                                i(void 0)
                            }))
                        });
                        return function(e) { return t.apply(this, arguments) }
                    }(),
                    V = function() { M.current.value = "", k({ type: "setSuggestions", payload: [] }) },
                    K = function() {
                        if (I.length > 0 && 0 !== P) {
                            var e = null !== P ? P - 1 : I.length - 1,
                                t = I[e];
                            Z(t), D(t, e)
                        }
                    },
                    W = function(e) {
                        var t = e.selectedItem,
                            n = e.nextInputValue,
                            r = void 0 === n ? "" : n,
                            o = e.keepSelecting,
                            a = void 0 === o || o;
                        if (I.some((function(e) { return e.name === t.name }))) V();
                        else {
                            var i, c, l, u = null !== P ? P : I.length,
                                s = [].concat(G(I.slice(0, u)), [t], G(I.slice(u))),
                                f = document.createElement("li");
                            f.innerText = t.name, z.current.appendChild(f), q({ nextInputValue: r, keepSelecting: a }), k({ type: "setSelectedItems", payload: { selectedItems: s, suggestions: a ? (i = { currentSelections: s }, c = i.currentSelections, l = void 0 === c ? I : c, d.length > 0 ? d.filter((function(e) { return !l.some((function(t) { return t.name === e.name })) })) : []) : [] } }), null === y || void 0 === y || y(s);
                            var p = M.current;
                            p.value = r, a && (k({ type: "setShowMaxSelectionsReached", payload: g && s.length >= g }), setTimeout((function() { p.focus() })))
                        }
                    },
                    Z = function(e) {
                        var t = I.filter((function(t) { return t.name !== e.name }));
                        k({ type: "setSelectedItems", payload: { selectedItems: t, suggestions: C } }), k({ type: "setShowMaxSelectionsReached", payload: g && t.length >= g }), null === y || void 0 === y || y(t), z.current.querySelectorAll("li").forEach((function(t) { t.innerText === e.name && t.remove() }))
                    },
                    $ = I.map((function(e, t) {
                        var n = t + 1,
                            r = null === P || t < P ? n : n + 1,
                            a = e.name;
                        return Object(o.h)("li", { key: a, className: "c-autocomplete--multi__selection-list-item w-max", style: { order: r } }, Object(o.h)(j, X({}, e, { onEdit: function() { return D(e, t) }, onDeselect: function() { return Z(e) } })))
                    })),
                    ee = I.length > 0 ? "Add another..." : v,
                    te = B ? ee : null;
                return Object(o.h)(o.Fragment, null, Object(o.h)("span", { ref: R, "aria-hidden": "true", className: "absolute pointer-events-none opacity-0 p-2" }), Object(o.h)("label", { id: "multi-select-label", className: a ? "" : "screen-reader-only" }, n), Object(o.h)("span", { id: "input-description", className: "screen-reader-only" }, g ? "Maximum ".concat(g, " selections") : ""), Object(o.h)("div", { className: "screen-reader-only" }, Object(o.h)("p", null, "Selected items:"), Object(o.h)("ul", { ref: z, className: "screen-reader-only list-none", "aria-live": "assertive", "aria-atomic": "false", "aria-relevant": "additions removals" })), Object(o.h)("div", { className: "c-autocomplete--multi relative" }, Object(o.h)("div", { role: "combobox", "aria-haspopup": "listbox", "aria-expanded": C.length > 0, "aria-owns": "listbox1", className: "c-autocomplete--multi__wrapper".concat(b ? "-border crayons-textfield" : " border-none p-0", " flex items-center  cursor-text"), onClick: function() { var e; return null === (e = M.current) || void 0 === e ? void 0 : e.focus() } }, Object(o.h)("ul", { id: "combo-selected", className: "list-none flex flex-wrap w-100" }, $, Object(o.h)("li", { className: "self-center", style: { order: null === P ? I.length + 1 : P + 1 } }, Object(o.h)("input", {
                    id: m,
                    ref: M,
                    autocomplete: "off",
                    className: "c-autocomplete--multi__input",
                    "aria-activedescendant": null !== N ? C[N] : null,
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
                            case ie:
                                e.preventDefault(), null !== N && N < C.length - 1 ? k({ type: "setActiveDescendentIndex", payload: N + 1 }) : k({ type: "setActiveDescendentIndex", payload: 0 });
                                break;
                            case ae:
                                e.preventDefault(), k({ type: "setActiveDescendentIndex", payload: N >= 1 ? N - 1 : C.length - 1 });
                                break;
                            case ce:
                                e.preventDefault(), null !== N && W({ selectedItem: C[N] });
                                break;
                            case le:
                                e.preventDefault(), V();
                                break;
                            case se:
                            case de:
                                e.preventDefault(), "" !== r && B && L({ textValue: r.slice(0, n), nextInputValue: r.slice(n) });
                                break;
                            case ue:
                                "" === r && (e.preventDefault(), K());
                                break;
                            default:
                                fe.test(e.key) || e.preventDefault()
                        }
                    },
                    onBlur: function() {
                        k({ type: "setShowMaxSelectionsReached", payload: !1 });
                        var e = M.current.value;
                        T || !B || "" === e ? (T || k({ type: "setSuggestions", payload: [] }), q({ keepSelecting: !1 }), k({ type: "setIgnoreBlur", payload: !1 })) : L({ textValue: e, keepSelecting: !1 })
                    },
                    onFocus: function(e) {
                        var t;
                        null === O || void 0 === O || O(e), null === P && (B ? d.length > 0 && "" === (null === (t = M.current) || void 0 === t ? void 0 : t.value) && k({ type: "setSuggestions", payload: d.filter((function(e) { return !I.some((function(t) { return t.name === e.name })) })) }) : k({ type: "setShowMaxSelectionsReached", payload: !0 }))
                    },
                    placeholder: null === P ? te : null
                })))), _ ? Object(o.h)("div", { className: "c-autocomplete--multi__popover" }, Object(o.h)("span", { className: "p-3" }, "Only ", g, " selections allowed")) : null, C.length > 0 && B ? Object(o.h)("div", { className: "c-autocomplete--multi__popover", ref: U }, "" === (null === (t = M.current) || void 0 === t ? void 0 : t.value) ? f : null, Object(o.h)("ul", { className: "list-none", "aria-labelledby": "multi-select-label", role: "listbox", "aria-multiselectable": "true", id: "listbox1" }, C.map((function(e, t) { var n = e.name; return Object(o.h)("li", { id: n, role: "option", "aria-selected": t === N, key: n, onMouseDown: function() { W({ selectedItem: e }), k({ type: "setIgnoreBlur", payload: !0 }) } }, w ? Object(o.h)(w, e) : n) })))) : null))
            },
            he = i.a.shape({ name: i.a.string });
        be.propTypes = { labelText: i.a.string.isRequired, showLabel: i.a.bool, fetchSuggestions: i.a.func.isRequired, defaultValue: i.a.arrayOf(he), staticSuggestions: i.a.arrayOf(he), staticSuggestionsHeading: i.a.oneOfType([i.a.element, i.a.string]), border: i.a.bool, placeholder: i.a.string, inputId: i.a.string, maxSelections: i.a.number, onSelectionsChanged: i.a.func, onFocus: i.a.func, SuggestionTemplate: i.a.func, SelectionTemplate: i.a.func }
    }, , function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return d })), n.d(t, "c", (function() { return f })), n.d(t, "b", (function() { return p })), n.d(t, "d", (function() { return b })), n.d(t, "f", (function() { return h })), n.d(t, "e", (function() { return v })), n.d(t, "g", (function() { return m })), n.d(t, "h", (function() { return g }));
        var r, o = n(2),
            a = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"],
            i = function(e) {
                var t = window.getComputedStyle(e),
                    n = t.getPropertyValue("box-sizing") || t.getPropertyValue("-moz-box-sizing") || t.getPropertyValue("-webkit-box-sizing"),
                    r = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
                    o = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
                return { sizingStyle: a.map((function(e) { return "".concat(e, ":").concat(t.getPropertyValue(e)) })).join(";"), paddingSize: r, borderSize: o, boxSizing: n }
            };

        function c(e) { return function(e) { if (Array.isArray(e)) return s(e) }(e) || function(e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || u(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

        function l(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
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
                    a = o.top - r.top - e.scrollTop,
                    i = o.left - r.left - e.scrollLeft,
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
                        var a, i = !0,
                            c = !1;
                        return { s: function() { n = n.call(e) }, n: function() { var e = n.next(); return i = e.done, e }, e: function(e) { c = !0, a = e }, f: function() { try { i || null == n.return || n.return() } finally { if (c) throw a } } }
                    }(l);
                try {
                    for (s.s(); !(n = s.n()).done;) {
                        var d = n.value;
                        c.style[d] = l[d]
                    }
                } catch (v) { s.e(v) } finally { s.f() }
                c.style.position = "absolute", c.style.top = "".concat(a, "px"), c.style.left = "".concat(i, "px"), c.style.opacity = 0;
                var f = "INPUT" === e.tagName ? e.value.replace(/ /g, ".") : e.value;
                c.textContent = f.substr(0, t), "TEXTAREA" === e.tagName && (c.style.height = "auto"), "INPUT" === e.tagName && (c.style.width = "auto");
                var p = document.createElement("span");
                p.textContent = f.substr(t) || ".", c.appendChild(p), document.body.appendChild(c);
                var b = p.offsetLeft,
                    h = p.offsetTop;
                return document.body.removeChild(c), { x: i + b, y: a + h }
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
                    a = t.breakOnCharacters,
                    i = void 0 === a ? [] : a,
                    c = n.charAt(r),
                    l = n.charAt(r - 1);
                return c === o ? r : 0 === r || i.includes(l) ? -1 : e({ content: n, selectionIndex: r - 1, character: o, breakOnCharacters: i })
            },
            b = function e(t) {
                var n = t.content,
                    r = t.selectionIndex,
                    o = t.character,
                    a = t.breakOnCharacters,
                    i = void 0 === a ? [] : a,
                    c = n.charAt(r),
                    l = n.charAt(r + 1);
                return c === o ? r : r <= n.length && !i.includes(l) ? e({ content: n, selectionIndex: r + 1, character: o, breakOnCharacters: i }) : -1
            },
            h = function(e) {
                var t = e.selectionStart,
                    n = e.value;
                if (0 === t) return 0;
                for (var r = 0, o = t - 1; o >= 0 && "\n" === n.charAt(o);) r++, o--;
                return r
            },
            v = function(e) {
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
            g = function() {
                var e = l(Object(o.j)(null), 2),
                    t = e[0],
                    n = e[1],
                    a = l(Object(o.j)(!1), 2),
                    u = a[0],
                    s = a[1],
                    d = l(Object(o.j)([]), 2),
                    f = d[0],
                    p = d[1];
                return Object(o.d)((function() {
                    if (t) {
                        var e = function() {
                            var e = [t].concat(c(f)).map((function(e) {
                                    return function(e) {
                                        r || (r = document.createElement("textarea"), document.body.appendChild(r));
                                        var t = i(e),
                                            n = t.paddingSize,
                                            o = t.borderSize,
                                            a = t.boxSizing,
                                            c = t.sizingStyle;
                                        r.setAttribute("style", "".concat(c, ";").concat("\nmin-height:0 !important;\nmax-height:none !important;\nheight:0 !important;\nvisibility:hidden !important;\noverflow:hidden !important;\nposition:absolute !important;\nz-index:-1000 !important;\ntop:0 !important;\nright:0 !important\n")), r.value = e.value || e.placeholder || "x";
                                        var l = r.scrollHeight;
                                        return "border-box" === a ? { height: l + o } : "content-box" === a ? { height: l - n } : { height: l }
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
    }, function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() { return a })), n.d(t, "c", (function() { return i.a })), n.d(t, "b", (function() { return c.b })), n.d(t, "a", (function() { return c.a })), n.d(t, "d", (function() { return l }));
        var r = n(1),
            o = n.n(r),
            a = o.a.shape({ id: o.a.string.isRequired, name: o.a.string.isRequired, profile_image_url: o.a.string.isRequired, summary: o.a.string.isRequired }),
            i = n(7),
            c = n(24),
            l = o.a.shape({ tags: o.a.arrayOf(o.a.string).isRequired, onClick: o.a.func.isRequired, onKeyPress: o.a.func.isRequired })
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return a }));
        var r = n(1),
            o = n.n(r),
            a = o.a.oneOfType([o.a.arrayOf(o.a.node), o.a.node, o.a.object, o.a.arrayOf(o.a.object)])
    }, , , , , , function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() { return v })), n.d(t, "a", (function() { return m }));
        var r = n(2),
            o = n(1),
            a = n.n(o);

        function i(e, t) {
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
                t % 2 ? i(Object(n), !0).forEach((function(t) { l(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
            }
            return e
        }

        function l(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function u(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
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
        var b = function(e, t, n, r) { var o = n && n.length > 0 ? r["".concat(n.join("~"), "~").concat(e.code)] : r["".concat(t).concat(e.code)] || r["".concat(t).concat(e.key.toLowerCase())]; return o ? (o(e), []) : t || "Shift" === e.key ? [] : [].concat(s(n), [e.code]) },
            h = { timeout: 0 };

        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = Object(r.j)(e),
                a = u(o, 1),
                i = a[0],
                l = Object(r.j)([]),
                s = u(l, 2),
                d = s[0],
                f = s[1],
                v = Object(r.j)(c(c({}, h), n)),
                m = u(v, 2),
                g = m[0],
                y = m[1];
            Object(r.d)((function() { var e = {}; "number" === typeof n.timeout && (e.timeout = n.timeout), y(c(c({}, h), e)) }), [n.timeout]), Object(r.d)((function() { if (!(d.length <= 0)) { var e = window.setTimeout((function() { clearTimeout(e), f([]) }), g.timeout); return function() { return clearTimeout(e) } } }), [d.length, g.timeout]), Object(r.d)((function() {
                if (i && 0 !== Object.keys(i).length) {
                    var e = function(e) {
                        if (!e.defaultPrevented) {
                            var t = e.ctrlKey ? "ctrl+" : "",
                                n = e.metaKey ? "cmd+" : "",
                                r = e.altKey ? "alt+" : "",
                                o = e.shiftKey ? "shift+" : "",
                                a = "".concat(t).concat(n).concat(r).concat(o);
                            if (!(e.target instanceof Node && p(e.target)) || a) {
                                var c = b(e, a, d, i);
                                f(c)
                            }
                        }
                    };
                    return t.addEventListener("keydown", e),
                        function() { return t.removeEventListener("keydown", e) }
                }
            }), [d, i, t])
        }

        function m(e) { return v(e.shortcuts, e.eventTarget, e.options), null }
        m.propTypes = { shortcuts: a.a.object.isRequired, options: a.a.shape({ timeout: a.a.number }), eventTarget: a.a.oneOfType([a.a.instanceOf(Element), a.a.instanceOf(Window)]) }, m.defaultProps = { shortcuts: {}, options: {}, eventTarget: window }
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(31);
        n.d(t, "addSnackbarItem", (function() { return r.b })), n.d(t, "Snackbar", (function() { return r.a }));
        var o = n(20);
        n.d(t, "snackbarItemProps", (function() { return o.b })), n.d(t, "SnackbarItem", (function() { return o.a }))
    }, , function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "validateFileInputs", (function() { return s }));
        var r = Object.freeze({ image: 25, video: 50 }),
            o = ["image"];

        function a(e, t) {
            var n = e,
                r = document.createElement("div");
            r.style.color = "red", r.innerHTML = t, r.classList.add("file-upload-error"), n.parentNode.append(r)
        }

        function i(e, t, n) {
            var o = n.dataset.maxFileSizeMb,
                i = n.dataset.fileSizeErrorHandler,
                c = (e.size / 1048576).toFixed(2),
                l = c <= (o = Number(o || r[t]));
            return l || function(e, t, n, r) {
                if (t.value = null, e) e();
                else {
                    var o = "File size too large (".concat(n, " MB).");
                    r >= 0 && (o += " The limit is ".concat(r, " MB.")), a(t, o)
                }
            }(i, n, c, o), l
        }

        function c(e, t, n) {
            var r = n.dataset.permittedFileTypes;
            r && (r = JSON.parse(r)), r = r || o;
            var i = n.dataset.fileTypeErrorHandler,
                c = r.includes(t);
            return c || function(e, t, n, r) { t.value = null, e ? e() : a(t, "Invalid file format (".concat(n, "). Only ").concat(r.join(", "), " files are permitted.")) }(i, n, t, r), c
        }

        function l(e, t) {
            var n = t.dataset.maxFileNameLength;
            n = Number(n || 250);
            var r = t.dataset.fileNameLengthErrorHandler,
                o = e.name.length <= n;
            return o || function(e, t, n) { t.value = null, e ? e() : a(t, "File name is too long. It can't be longer than ".concat(n, " characters.")) }(r, t, n), o
        }

        function u(e) {
            var t = !0;
            ! function(e) {
                var t = e.parentNode.querySelector("div.file-upload-error");
                t && t.remove()
            }(e);
            for (var n = Array.from(e.files), r = 0; r < n.length; r += 1) {
                var o = n[r],
                    a = o.type.split("/")[0];
                if (!i(o, a, e)) { t = !1; break }
                if (!c(0, a, e)) { t = !1; break }
                if (!l(o, e)) { t = !1; break }
            }
            return t
        }

        function s() { for (var e = !0, t = document.querySelectorAll('input[type="file"]'), n = 0; n < t.length; n += 1) { if (!u(t[n])) { e = !1; break } } return e }
        document.querySelectorAll('input[type="file"]').forEach((function(e) { e.addEventListener("change", (function() { u(e) })) }))
    }, , , function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return i })), n.d(t, "b", (function() { return c }));
        var r = n(2);

        function o(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
            }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return a(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var i = Object.freeze({ Small: 640, Medium: 768, Large: 1024 }),
            c = function(e) {
                var t = window.matchMedia(e),
                    n = o(Object(r.j)(!!t.matches), 2),
                    a = n[0],
                    i = n[1];
                return Object(r.d)((function() {
                    var e = function() { i(!!t.matches) };
                    return t.addListener(e),
                        function() { return t.removeListener(e) }
                })), a
            }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() { return l })), n.d(t, "a", (function() { return u }));
        var r = n(0),
            o = n(1),
            a = n.n(o),
            i = n(6),
            c = n(3),
            l = { children: i.c.isRequired, actions: a.a.arrayOf(a.a.shape({ message: a.a.string.isRequired, handler: a.a.func.isRequired, lifespan: a.a.number.isRequired })) },
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
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return s }));
        var r = n(1),
            o = n.n(r),
            a = n(0),
            i = n(2),
            c = n(39),
            l = n(6),
            u = n(13),
            s = function(e) {
                var t = e.selector,
                    n = e.children,
                    r = e.onDeactivate,
                    o = e.clickOutsideDeactivates,
                    l = void 0 !== o && o,
                    s = Object(i.i)(null),
                    d = Object(i.a)((function() { return r() }), [r]);
                Object(i.f)((function() {
                    var e = document.location.href,
                        n = new MutationObserver((function(t) {
                            var r;
                            t.some((function() { return e !== document.location.href })) && (null === (r = s.current) || void 0 === r || r.deactivate(), n.disconnect())
                        }));
                    return s.current = Object(c.a)(t, { escapeDeactivates: !1, clickOutsideDeactivates: l, onDeactivate: d }), s.current.activate(), n.observe(document.querySelector("body"), { childList: !0 }),
                        function() { s.current.deactivate(), n.disconnect() }
                }), [l, t, d]);
                var f = { escape: r };
                return Object(a.h)(a.Fragment, null, n, Object(a.h)(u.a, { shortcuts: f }))
            };
        s.defaultProps = { selector: ".crayons-modal", onDeactivate: function() {} }, s.propTypes = { selector: o.a.string, children: l.c.isRequired, onDeactivate: o.a.func }
    }, , function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() { return u })), n.d(t, "d", (function() { return d })), n.d(t, "a", (function() { return p })), n.d(t, "c", (function() { return b }));
        var r = n(16),
            o = ["previewShowing", "helpShowing", "previewResponse", "helpHTML", "imageManagementShowing", "moreConfigShowing", "errors"];

        function a(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
            }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return i(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function c(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
            return o
        }

        function l(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
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
                        var a = e.apply(t, n);

                        function i(e) { l(a, r, o, i, c, "next", e) }

                        function c(e) { l(a, r, o, i, c, "throw", e) }
                        i(void 0)
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
                a = t.id ? "/articles/".concat(t.id) : "/articles";
            fetch(a, { method: o, headers: { Accept: "application/json", "X-CSRF-Token": window.csrfToken, "Content-Type": "application/json" }, body: JSON.stringify({ article: s(t) }), credentials: "same-origin" }).then((function(e) { return e.json() })).then((function(e) { e.current_state_path ? (n(), window.location.replace(e.current_state_path)) : r(e) })).catch(r)
        }

        function f(e) {
            var t = window.csrfToken,
                n = new FormData;
            return n.append("authenticity_token", t), Object.entries(e.image).forEach((function(e) {
                var t = a(e, 2),
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

        function b(e, t, n) { e.length > 0 && Object(r.validateFileInputs)() && p({ payload: { image: e }, successCb: t, failureCb: n }) }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() { return a })), n.d(t, "a", (function() { return i }));
        var r = n(1),
            o = n.n(r),
            a = o.a.shape({ body_text: o.a.arrayOf(o.a.string) }),
            i = o.a.shape({ id: o.a.number.isRequired, title: o.a.string.isRequired, path: o.a.string.isRequired, cloudinary_video_url: o.a.string, video_duration_in_minutes: o.a.string, type_of: o.a.oneOf(["podcast_episodes"]), class_name: o.a.oneOf(["PodcastEpisode", "User", "Article"]), flare_tag: o.a.shape({ name: o.a.string.isRequired, bg_color_hex: o.a.string, text_color_hex: o.a.string }), tag_list: o.a.arrayOf(o.a.string), cached_tag_list_array: o.a.arrayOf(o.a.string), podcast: o.a.shape({ slug: o.a.string.isRequired, title: o.a.string.isRequired, image_url: o.a.string.isRequired }), user_id: o.a.number.isRequired, user: o.a.shape({ username: o.a.string.isRequired, name: o.a.string.isRequired }), organization: o.a.shape({ name: o.a.string.isRequired, profile_image_90: o.a.string.isRequired, slug: o.a.string.isRequired }), highlight: a, public_reactions_count: o.a.number, reactions_count: o.a.number, comments_count: o.a.number, reading_time: o.a.number })
    }, function(e, t, n) {
        "use strict";
        var r = n(29);
        n.d(t, "a", (function() { return r.a }))
    }, , , function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(35);
        n.d(t, "Modal", (function() { return r.Modal }))
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return b }));
        var r = n(0),
            o = n(2),
            a = n(1),
            i = n.n(a),
            c = n(6),
            l = ["children", "variant", "tagName", "inverted", "contentType", "size", "className", "icon", "url", "buttonType", "disabled", "onClick", "onMouseOver", "onMouseOut", "onFocus", "onBlur", "onKeyUp", "tabIndex", "title", "tooltip"];

        function u() { return u = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, u.apply(this, arguments) }

        function s(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
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
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
            return o
        }

        function p(e) {
            var t = e.variant,
                n = e.className,
                r = e.contentType,
                o = e.size,
                a = e.inverted,
                i = e.disabled,
                c = e.tooltip,
                l = "";
            return t && t.length > 0 && "primary" !== t && (l += " crayons-btn--".concat(t)), o && o.length > 0 && "default" !== o && (l += " crayons-btn--".concat(o)), r && r.length > 0 && "text" !== r && (l += " crayons-btn--".concat(r)), i && (l += " crayons-btn--disabled"), a && (l += " crayons-btn--inverted"), n && n.length > 0 && (l += " ".concat(n)), c && (l += " crayons-tooltip__activator"), l
        }
        var b = function(e) {
            var t = e.children,
                n = e.variant,
                a = void 0 === n ? "primary" : n,
                i = e.tagName,
                c = e.inverted,
                d = e.contentType,
                b = e.size,
                h = e.className,
                v = e.icon,
                m = e.url,
                g = e.buttonType,
                y = e.disabled,
                O = e.onClick,
                w = e.onMouseOver,
                S = e.onMouseOut,
                j = e.onFocus,
                x = e.onBlur,
                E = e.onKeyUp,
                k = e.tabIndex,
                I = e.title,
                C = e.tooltip,
                P = f(e, l),
                A = s(Object(o.j)(!1), 2),
                N = A[0],
                T = A[1],
                _ = i,
                M = v,
                R = "button" === i ? { type: g, disabled: y } : { href: y ? void 0 : m };
            return Object(r.h)(_, u({ className: "crayons-btn".concat(p({ variant: a, size: b, contentType: d, className: h, icon: v, inverted: c, disabled: "a" === i && y, children: t, tooltip: C })), onClick: O, onMouseOver: w, onMouseOut: S, onFocus: j, onBlur: x, onKeyUp: function(e) { null === E || void 0 === E || E(e), C && T("Escape" === e.key) }, tabIndex: k, title: I }, R, P), "text" !== d && "icon-right" !== d && M && Object(r.h)(M, null), ("text" === d || "icon-left" === d || "icon-right" === d) && t, "text" !== d && "icon-right" === d && M && Object(r.h)(M, null), C ? Object(r.h)("span", { className: "crayons-tooltip__content ".concat(N ? "crayons-tooltip__suppressed" : "") }, C) : null)
        };
        b.displayName = "Button", b.defaultProps = { className: void 0, icon: void 0, url: void 0, buttonType: "button", disabled: !1, inverted: !1, onClick: void 0, onMouseOver: void 0, onMouseOut: void 0, onFocus: void 0, onBlur: void 0, tabIndex: void 0, title: void 0, tagName: "button", size: "default", contentType: "text", variant: "primary" }, b.propTypes = { children: c.c, variant: i.a.oneOf(["primary", "secondary", "outlined", "danger", "ghost", "ghost-brand", "ghost-success", "ghost-warning", "ghost-danger"]), contentType: i.a.oneOf(["text", "icon-left", "icon-right", "icon", "icon-rounded"]).isRequired, inverted: i.a.bool, tagName: i.a.oneOf(["a", "button"]).isRequired, className: i.a.string, icon: i.a.oneOfType([i.a.node, i.a.func]), url: i.a.string, buttonType: i.a.string, disabled: i.a.bool, size: i.a.oneOf(["default", "s", "l", "xl"]).isRequired, onClick: i.a.func, onMouseOver: i.a.func, onMouseOut: i.a.func, onFocus: i.a.func, onBlur: i.a.func, tabIndex: i.a.number, title: i.a.string, tooltip: i.a.node }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return o }));
        var r = n(0),
            o = function() { return Object(r.h)("svg", { className: "crayons-icon crayons-spinner", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Object(r.h)("path", { d: "M18.364 5.636L16.95 7.05A7 7 0 1019 12h2a9 9 0 11-2.636-6.364z", fill: "currentColor" })) }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() { return O })), n.d(t, "a", (function() { return w }));
        var r = n(0),
            o = n(1),
            a = n.n(o),
            i = n(20);

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

        function b(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function h(e, t) { return h = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, h(e, t) }

        function v(e) {
            var t = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
            return function() {
                var n, r = g(e);
                if (t) {
                    var o = g(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return m(this, n)
            }
        }

        function m(e, t) { if (t && ("object" === c(t) || "function" === typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) }

        function g(e) { return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, g(e) }
        var y = [];

        function O(e) { Array.isArray(e.actions) || (e.actions = []), y.push(e) }
        var w = function(e) {
            ! function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && h(e, t)
            }(c, e);
            var t, n, o, a = v(c);

            function c() {
                var e;
                p(this, c);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return (e = a.call.apply(a, [this].concat(n))).state = { snacks: [] }, e.pollingId = void 0, e.paused = !1, e.pauseLifespan = void 0, e.resumeLifespan = void 0, e
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
                        if (y.length > 0) {
                            var t = y.map((function(e) { return d(d({}, e), {}, { lifespan: r }) }));
                            y = [], e.updateSnackbarItems(t), t.forEach((function(t) { t.lifespanTimeoutId = setTimeout((function() { e.decreaseLifespan(t) }), 1e3), t.addCloseButton && t.actions.push({ text: "Dismiss", handler: function() { e.setState((function(e) { return { prevState: e, snacks: e.snacks.filter((function(e) { return e !== t })) } })) } }) }))
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
                            a = void 0 === o ? [] : o;
                        return Object(r.h)(i.a, { message: n, actions: a, key: t })
                    })))
                }
            }]) && b(t.prototype, n), o && b(t, o), Object.defineProperty(t, "prototype", { writable: !1 }), c
        }(r.Component);
        w.defaultProps = { lifespan: 5, pollingTime: 300 }, w.displayName = "Snackbar", w.propTypes = { lifespan: a.a.number, pollingTime: a.a.number }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return B }));
        n(4);
        var r = n(0),
            o = n(2),
            a = n(33),
            i = n(5),
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
        var b = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z" })) };
        b.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
        var h = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z" })) };
        h.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
        var v = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5zm15 7-3.536 3.536-1.414-1.415L16.172 12 14.05 9.879l1.414-1.415zM7.828 12l2.122 2.121-1.414 1.415L5 12l3.536-3.536L9.95 9.88z" })) };
        v.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
        var m = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3zM4 20h16v2H4z" })) };
        m.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
        var g = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.087 4.087 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099s.974.562 1.613.75c.62.18 1.297.414 2.03.699z" })) };
        g.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
        var y = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M2 11h6v2H2z" }), Object(r.h)("path", { d: "M2 11h6v2H2zm7 0h6v2H9zm7 0h6v2h-6z" }), Object(r.h)("path", { d: "M12 6.586 9.707 4.293 8.293 5.707 12 9.414l3.707-3.707-1.414-1.414zm0 10.828-2.293 2.293-1.414-1.414L12 14.586l3.707 3.707-1.414 1.414z", clipRule: "evenodd", fillRule: "evenodd" })) };
        y.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" };
        var O = /^\d+\.\s+.*/,
            w = /^\[([\w\s\d]*)\]\((url|(https?:\/\/[\w\d./?=#]+))\)$/,
            S = "url",
            j = function(e) {
                var t = e.selectionStart,
                    n = e.selectionEnd,
                    r = e.value,
                    o = Object(i.f)({ selectionStart: t, value: r }),
                    a = Object(i.e)({ selectionEnd: n, value: r }),
                    c = 0 === t ? 0 : 2 - o;
                return { newLinesPrefix: String.prototype.padStart(c, "\n"), newLinesSuffix: a >= 1 ? "" : "\n" }
            },
            x = function(e) {
                var t = e.value,
                    n = e.selectionStart,
                    r = e.selectionEnd,
                    o = e.prefix,
                    a = e.suffix,
                    c = o.length,
                    l = a.length,
                    u = Object(i.g)({ selectionStart: n, selectionEnd: r, value: t }),
                    s = u.selectedText,
                    d = u.textBeforeSelection,
                    f = u.textAfterSelection;
                return s.slice(0, c) === o && s.slice(-1 * l) === a ? { editSelectionStart: n, editSelectionEnd: r, replaceSelectionWith: s.slice(c, -1 * l), newCursorStart: n, newCursorEnd: r - (c + l) } : d.substring(d.length - c) === o && f.substring(0, l) === a ? { editSelectionStart: n - c, editSelectionEnd: r + l, replaceSelectionWith: s, newCursorStart: n - c, newCursorEnd: r - c } : { editSelectionStart: n, editSelectionEnd: r, replaceSelectionWith: "".concat(o).concat(s).concat(a), newCursorStart: n + c, newCursorEnd: r + c }
            },
            E = function(e) {
                var t = e.selectionStart,
                    n = e.selectionEnd,
                    r = e.value,
                    o = e.linePrefix,
                    a = e.blockPrefix,
                    c = e.blockSuffix,
                    l = Object(i.g)({ selectionStart: t, selectionEnd: n, value: r }),
                    u = l.selectedText,
                    s = l.textBeforeSelection,
                    d = l.textAfterSelection,
                    f = u;
                if (o) {
                    var p = o.length;
                    if ("" === u) {
                        var b = "" === s ? -1 : Object(i.b)({ content: r, selectionIndex: t - 1, character: "\n" }),
                            h = -1 === b ? 0 : b + 1;
                        if (s.slice(h, h + p) === o) return { editSelectionStart: h, editSelectionEnd: h + p, replaceSelectionWith: "", newCursorStart: t - p, newCursorEnd: n - p }
                    }
                    var v = u.split("\n").filter((function(e) { return "" !== e }));
                    if (v.length > 0 && v.every((function(e) { return e.slice(0, p) === o }))) { var m = v.map((function(e) { return e.slice(p) })).join("\n"); return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: m, newCursorStart: t, newCursorEnd: n + (m.length - u.length) } }
                    f = "" === u ? o : v.map((function(e) { return "".concat(o).concat(e) })).join("\n")
                } else {
                    var g = a.length,
                        y = c.length;
                    if (u.slice(0, g) === a && u.slice(-1 * y) === c) return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: u.slice(g, -1 * y), newCursorStart: t, newCursorEnd: n - g - y };
                    if (s.slice(-1 * g) === a && d.slice(0, y) === c) return { editSelectionStart: t - g, editSelectionEnd: n + y, replaceSelectionWith: u, newCursorStart: t - g, newCursorEnd: n - g }
                }
                var O = j({ selectionStart: t, selectionEnd: n, value: r }),
                    w = O.newLinesPrefix,
                    S = O.newLinesSuffix,
                    x = w.length,
                    E = t + x,
                    k = a ? a.length : 0,
                    I = "" === u && o ? o.length : 0;
                return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: "".concat(w).concat(a || "").concat(f).concat(c || "").concat(S), newCursorStart: E + k + I, newCursorEnd: n + f.length - u.length + x + ((null === a || void 0 === a ? void 0 : a.length) || 0) }
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
                        return x({ selectionStart: t, selectionEnd: n, value: r, prefix: "**", suffix: "**" })
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
                        return x({ selectionStart: t, selectionEnd: n, value: r, prefix: "_", suffix: "_" })
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
                            a = Object(i.g)({ selectionStart: n, selectionEnd: r, value: o }),
                            c = a.selectedText,
                            l = a.textBeforeSelection,
                            u = a.textAfterSelection;
                        return "" === c ? function(e) {
                            var t = e.textBeforeSelection,
                                n = e.textAfterSelection,
                                r = e.value,
                                o = e.selectionStart,
                                a = e.selectionEnd,
                                c = { editSelectionStart: o, editSelectionEnd: a, replaceSelectionWith: "[](".concat(S, ")"), newCursorStart: o + 3, newCursorEnd: a + 6 };
                            if ("[" !== t.slice(-1) || "](" !== n.slice(0, 2)) return c;
                            var l = Object(i.d)({ content: r, selectionIndex: o, character: ")", breakOnCharacters: [" ", "\n"] });
                            if (-1 === l) return c;
                            var u = r.slice(a + 2, l);
                            return { editSelectionStart: o - 1, editSelectionEnd: l + 1, replaceSelectionWith: u === S ? "" : u, newCursorStart: o - 1, newCursorEnd: a - 1 }
                        }({ textBeforeSelection: l, textAfterSelection: u, value: o, selectionStart: n, selectionEnd: r }) : "https://" === (t = c.substring(0, 8)) || t.startsWith("http://") || c === S ? function(e) {
                            var t = e.textBeforeSelection,
                                n = e.textAfterSelection,
                                r = e.value,
                                o = e.selectionStart,
                                a = e.selectionEnd,
                                c = e.selectedText,
                                l = { editSelectionStart: o, editSelectionEnd: a, replaceSelectionWith: "[](".concat(c, ")"), newCursorStart: o + 1, newCursorEnd: o + 1 };
                            if ("](" !== t.slice(-2) || ")" !== n.slice(0, 1)) return l;
                            var u = Object(i.b)({ content: r, selectionIndex: o, character: "[" });
                            if (-1 === u) return l;
                            var s = t.slice(u + 1, -2);
                            return "" === s && (s = c === S ? "" : c), { editSelectionStart: u, editSelectionEnd: a + 1, replaceSelectionWith: s, newCursorStart: u, newCursorEnd: u + s.length }
                        }({ textBeforeSelection: l, textAfterSelection: u, value: o, selectionStart: n, selectedText: c, selectionEnd: r }) : c.match(w) ? function(e) {
                            var t = e.selectedText,
                                n = e.selectionStart,
                                r = e.selectionEnd,
                                o = Object(i.d)({ content: t, selectionIndex: 0, character: "]" }),
                                a = t.slice(1, o);
                            if ("" === a) {
                                var c = t.slice(o + 2, -1);
                                a = c === S ? "" : c
                            }
                            return { editSelectionStart: n, editSelectionEnd: r, replaceSelectionWith: a, newCursorStart: n, newCursorEnd: n + a.length }
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
                            o = Object(i.g)({ selectionStart: t, selectionEnd: n, value: r }),
                            a = o.selectedText,
                            c = o.textBeforeSelection,
                            l = j({ selectionStart: t, selectionEnd: n, value: r }),
                            u = l.newLinesPrefix,
                            s = l.newLinesSuffix,
                            d = u.length,
                            f = s.length;
                        if ("" === a) {
                            var p = "" === c ? -1 : Object(i.b)({ content: r, selectionIndex: t - 1, character: "\n" }),
                                b = -1 === p ? 0 : p + 1;
                            if ("1. " === c.slice(b, b + 3)) return { editSelectionStart: b, editSelectionEnd: b + 3, replaceSelectionWith: "", newCursorStart: t - 3, newCursorEnd: n - 3 }
                        }
                        if ("" === a) return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: "".concat(u, "1. ").concat(s), newCursorStart: t + 3 + d, newCursorEnd: n + 3 + d };
                        var h = a.split("\n");
                        if (h.every((function(e) { return e.match(O) || "" === e }))) { var v = h.filter((function(e) { return "" !== e })).map((function(e) { var t = e.indexOf("."); return e.substring(t + 2) })).join("\n"); return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: v, newCursorStart: t + a.indexOf(".") - 1, newCursorEnd: n + v.length - a.length } }
                        var m = "".concat(u).concat(h.map((function(e, t) { return "".concat(t + 1, ". ").concat(e) })).join("\n")).concat(s);
                        return { editSelectionStart: t, editSelectionEnd: n, replaceSelectionWith: m, newCursorStart: t + (0 === a.length ? 4 : d), newCursorEnd: t + m.length - f }
                    }
                },
                unorderedList: {
                    icon: function() { return Object(r.h)(c.f, { src: f }) },
                    label: "Unordered list",
                    getFormatting: function(e) {
                        var t = e.selectionStart,
                            n = e.selectionEnd,
                            r = e.value;
                        return E({ selectionStart: t, selectionEnd: n, value: r, linePrefix: "- " })
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
                            var a = Object(i.b)({ content: r, selectionIndex: t - 1, character: "\n" }),
                                c = -1 === a ? 0 : a + 1;
                            "#" === r.charAt(c) && (o = c)
                        }
                        for (var l = Object(i.g)({ selectionStart: o, selectionEnd: n, value: r }).selectedText, u = 0;
                            "#" === l.charAt(u);) u++;
                        if (u >= 4) return { editSelectionStart: o, editSelectionEnd: n, replaceSelectionWith: l.substring(5), newCursorStart: t - 5, newCursorEnd: n - 5 };
                        var s = j({ selectionStart: t, selectionEnd: n, value: r }),
                            d = s.newLinesPrefix,
                            f = s.newLinesSuffix,
                            p = d.length,
                            b = u > 0,
                            h = b ? 1 : 3 + p;
                        return { editSelectionStart: b ? o : t, editSelectionEnd: n, replaceSelectionWith: b ? "#".concat(l) : "".concat(d, "## ").concat(l).concat(f), newCursorStart: t + h, newCursorEnd: n + h }
                    }
                },
                quote: {
                    icon: function() { return Object(r.h)(c.f, { src: b }) },
                    label: "Quote",
                    getFormatting: function(e) {
                        var t = e.selectionStart,
                            n = e.selectionEnd,
                            r = e.value;
                        return E({ selectionStart: t, selectionEnd: n, value: r, linePrefix: "> " })
                    }
                },
                code: {
                    icon: function() { return Object(r.h)(c.f, { src: h }) },
                    label: "Code",
                    getFormatting: function(e) {
                        var t = e.selectionStart,
                            n = e.selectionEnd,
                            r = e.value;
                        return x({ selectionStart: t, selectionEnd: n, value: r, prefix: "`", suffix: "`" })
                    }
                },
                codeBlock: {
                    icon: function() { return Object(r.h)(c.f, { src: v }) },
                    label: "Code block",
                    getFormatting: function(e) {
                        var t = e.selectionStart,
                            n = e.selectionEnd,
                            r = e.value;
                        return E({ selectionStart: t, selectionEnd: n, value: r, blockPrefix: "```\n", blockSuffix: "\n```" })
                    }
                }
            },
            I = {
                underline: {
                    icon: function() { return Object(r.h)(c.f, { src: m }) },
                    label: "Underline",
                    getKeyboardShortcut: function() { var e = Runtime.getOSKeyboardModifierKeyString(); return { command: "".concat(e, "+u"), tooltipHint: "".concat(e.toUpperCase(), " + U") } },
                    getFormatting: function(e) {
                        var t = e.selectionStart,
                            n = e.selectionEnd,
                            r = e.value;
                        return x({ selectionStart: t, selectionEnd: n, value: r, prefix: "<u>", suffix: "</u>" })
                    }
                },
                strikethrough: {
                    icon: function() { return Object(r.h)(c.f, { src: g }) },
                    label: "Strikethrough",
                    getKeyboardShortcut: function() { var e = Runtime.getOSKeyboardModifierKeyString(); return { command: "".concat(e, "+shift+x"), tooltipHint: "".concat(e.toUpperCase(), " + SHIFT + X") } },
                    getFormatting: function(e) {
                        var t = e.selectionStart,
                            n = e.selectionEnd,
                            r = e.value;
                        return x({ selectionStart: t, selectionEnd: n, value: r, prefix: "~~", suffix: "~~" })
                    }
                },
                divider: {
                    icon: function() { return Object(r.h)(c.f, { src: y }) },
                    label: "Line divider",
                    getFormatting: function(e) {
                        var t = e.selectionStart,
                            n = e.selectionEnd,
                            r = e.value;
                        return E({ selectionStart: t, selectionEnd: n, value: r, blockPrefix: "---\n", blockSuffix: "" })
                    }
                }
            },
            C = n(13),
            P = n(19);

        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
            }
            return n
        }

        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? A(Object(n), !0).forEach((function(t) { T(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
            }
            return e
        }

        function T(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function _(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
            }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return M(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function M(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var R = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" })) };
        R.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
        var z = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20Zm-1-5h2v2h-2v-2Zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.5 3.5 0 1 1 13 13.355Z" })) };
        z.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
        var U = "![Uploading image](...)",
            B = function(e) {
                var t = e.textAreaId,
                    n = _(Object(o.j)(null), 2),
                    l = n[0],
                    u = n[1],
                    s = _(Object(o.j)(!1), 2),
                    d = s[0],
                    f = s[1],
                    p = _(Object(o.j)({}), 2),
                    b = p[0],
                    h = p[1],
                    v = Object(P.b)("(max-width: ".concat(P.a.Medium - 1, "px)")),
                    m = N(N({}, k), I),
                    g = Object.fromEntries(Object.keys(m).filter((function(e) { return !!m[e].getKeyboardShortcut })).map((function(e) { return [m[e].getKeyboardShortcut().command, function(t) { t.preventDefault(), O(e) }] })));
                Object(o.f)((function() { u(document.getElementById(t)) }), [t]), Object(o.f)((function() { document.querySelector('.toolbar-btn[tabindex="0"]') || document.querySelector(".toolbar-btn").setAttribute("tabindex", "0") }), [v]), Object(o.f)((function() {
                    var e = function(e) { "overflow-menu-button" !== e.target.id && f(!1) },
                        t = function(e) { var t = e.key; "Escape" === t && (f(!1), document.getElementById("overflow-menu-button").focus()), "Tab" === t && f(!1) };
                    return d ? (document.getElementById("overflow-menu").getElementsByClassName("overflow-menu-btn")[0].focus(), document.addEventListener("keyup", t), document.addEventListener("click", e)) : (document.removeEventListener("keyup", t), document.removeEventListener("click", e)),
                        function() { document.removeEventListener("keyup", t), document.removeEventListener("click", e) }
                }), [d]);
                var y = function(e, t) {
                        var n = e.key,
                            r = e.target,
                            o = function(e, t) {
                                for (var n = e.nextElementSibling; n;) {
                                    if (n.matches(t)) return n;
                                    n = n.nextElementSibling
                                }
                            }(r, ".".concat(t)),
                            a = function(e, t) {
                                for (var n = e.previousElementSibling; n;) {
                                    if (n.matches(t)) return n;
                                    n = n.previousElementSibling
                                }
                            }(r, ".".concat(t));
                        switch (n) {
                            case "ArrowRight":
                                if (e.preventDefault(), r.setAttribute("tabindex", "-1"), o) o.setAttribute("tabindex", 0), o.focus();
                                else {
                                    var i = document.querySelector(".".concat(t));
                                    i.setAttribute("tabindex", "0"), i.focus()
                                }
                                break;
                            case "ArrowLeft":
                                if (e.preventDefault(), r.setAttribute("tabindex", "-1"), a) a.setAttribute("tabindex", 0), a.focus();
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
                            a = t.editSelectionEnd,
                            i = t.replaceSelectionWith;
                        l.contentEditable = "true", l.focus({ preventScroll: !0 }), l.setSelectionRange(o, a);
                        try { "" === i ? document.execCommand("delete", !1) : document.execCommand("insertText", !1, i) } catch (c) {
                            l.value = function(e) {
                                var t = e.textAreaValue,
                                    n = e.editSelectionStart,
                                    r = e.editSelectionEnd,
                                    o = e.replaceSelectionWith;
                                return "".concat(t.substring(0, n)).concat(o).concat(t.substring(r))
                            }({ textAreaValue: l.value, editSelectionStart: o, editSelectionEnd: a, replaceSelectionWith: i })
                        }
                        l.contentEditable = "false", l.dispatchEvent(new Event("input")), l.setSelectionRange(n, r)
                    },
                    w = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = l.selectionStart,
                            n = l.selectionEnd,
                            r = l.value,
                            o = r.indexOf(U);
                        if (-1 !== o) {
                            var a = l.value.replace(U, e);
                            if (l.value = a, l.dispatchEvent(new Event("input")), o > t) l.setSelectionRange(t, n);
                            else {
                                var i = e.length - U.length;
                                l.setSelectionRange(t + i, n + i)
                            }
                        }
                    },
                    S = function(e) {
                        return Object.keys(I).map((function(t, n) {
                            var o = I[t],
                                a = o.icon,
                                i = o.label,
                                l = o.getKeyboardShortcut;
                            return Object(r.h)(c.c, { key: "".concat(t, "-btn"), role: e ? "menuitem" : "button", icon: a, className: e ? "overflow-menu-btn hidden m:block mr-1" : "toolbar-btn m:hidden mr-1", tabindex: e && 0 === n ? "0" : "-1", onClick: function() { return O(t) }, onKeyUp: function(t) { return y(t, e ? "overflow-menu-btn" : "toolbar-btn") }, "aria-label": i, tooltip: v ? null : Object(r.h)("span", { "aria-hidden": "true" }, i, l ? Object(r.h)("span", { className: "opacity-75" }, " ".concat(l().tooltipHint)) : null) })
                        }))
                    };
                return Object(r.h)("div", { className: "editor-toolbar relative", "aria-label": "Markdown formatting toolbar", role: "toolbar", "aria-controls": t }, Object.keys(k).map((function(e, t) {
                    var n = k[e],
                        o = n.icon,
                        a = n.label,
                        i = n.getKeyboardShortcut;
                    return Object(r.h)(c.c, { key: "".concat(e, "-btn"), icon: o, className: "toolbar-btn mr-1", tabindex: 0 === t ? "0" : "-1", onClick: function() { return O(e) }, onKeyUp: function(e) { return y(e, "toolbar-btn") }, "aria-label": a, tooltip: v ? null : Object(r.h)("span", { "aria-hidden": "true" }, a, i ? Object(r.h)("span", { className: "opacity-75" }, " ".concat(i().tooltipHint)) : null) })
                })), Object(r.h)(a.a, {
                    editorVersion: "v2",
                    onImageUploadStart: function() {
                        var e = Object(i.g)(l),
                            t = e.textBeforeSelection,
                            n = e.textAfterSelection,
                            r = b.selectionEnd,
                            o = "".concat(t, "\n").concat(U).concat(n);
                        l.value = o, l.dispatchEvent(new Event("input")), l.focus({ preventScroll: !0 });
                        var a = r + U.length + 1;
                        l.setSelectionRange(a, a)
                    },
                    onImageUploadSuccess: w,
                    onImageUploadError: w,
                    buttonProps: {
                        onKeyUp: function(e) { return y(e, "toolbar-btn") },
                        onClick: function() {
                            var e = l.selectionStart,
                                t = l.selectionEnd;
                            h({ selectionStart: e, selectionEnd: t })
                        },
                        tooltip: v ? null : Object(r.h)("span", { "aria-hidden": "true" }, "Upload image"),
                        key: "image-btn",
                        className: "toolbar-btn formatter-btn mr-1",
                        tabindex: "-1"
                    }
                }), v ? S(!1) : null, v ? null : Object(r.h)(c.c, { id: "overflow-menu-button", onClick: function() { return f(!d) }, onKeyUp: function(e) { return y(e, "toolbar-btn") }, "aria-expanded": d ? "true" : "false", "aria-haspopup": "true", icon: R, className: "toolbar-btn ml-auto hidden m:block", tabindex: "-1", "aria-label": "More options" }), d && Object(r.h)("div", { id: "overflow-menu", role: "menu", className: "crayons-dropdown flex p-2 min-w-unset right-0 top-100" }, S(!0), Object(r.h)(c.g, { block: !0, role: "menuitem", href: "/p/editor_guide", target: "_blank", rel: "noopener noreferrer", icon: z, className: "overflow-menu-btn", tabindex: "-1", "aria-label": "Help", onKeyUp: function(e) { return y(e, "overflow-menu-btn") } })), l && Object(r.h)(C.a, { shortcuts: g, eventTarget: l }))
            }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() { return I }));
        n(4);
        var r = n(0),
            o = n(2),
            a = n(23),
            i = n(16),
            c = n(14),
            l = n(1),
            u = n.n(l),
            s = n(3),
            d = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z" })) };
        d.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
        var f = function(e) {
            var t, n = e.onCopy,
                o = e.imageUrls,
                a = e.showCopyMessage,
                i = void 0 !== a && a;
            return Object(r.h)("clipboard-copy", { onClick: n, for: "image-markdown-copy-link-input", "aria-live": "polite", className: "flex items-center flex-1", "aria-controls": "image-markdown-copy-link-announcer" }, Object(r.h)("input", { "data-testid": "markdown-copy-link", type: "text", className: "crayons-textfield mr-2", id: "image-markdown-copy-link-input", readOnly: "true", value: (t = o, t.map((function(e) { return "![Image description](".concat(e, ")") })).join("\n")) }), Object(r.h)(s.c, { className: "spec__image-markdown-copy whitespace-nowrap fw-normal", icon: d, title: "Copy markdown for image" }, i ? "Copied!" : "Copy..."))
        };

        function p() { return p = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, p.apply(this, arguments) }

        function b(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try { for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (l) { c = !0, o = l } finally { try { i || null == n.return || n.return() } finally { if (c) throw o } }
                return a
            }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return h(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function v(e, t) {
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
                t % 2 ? v(Object(n), !0).forEach((function(t) { g(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
            }
            return e
        }

        function g(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        f.displayName = "ClipboardButton", f.propTypes = { onCopy: u.a.func.isRequired, imageUrls: u.a.arrayOf(u.a.string).isRequired, showCopyMessage: u.a.bool.isRequired };
        var y = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" })) };
        y.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
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
        var x = function(e) { var t = e.uploadingImage; return Object(r.h)(r.Fragment, null, !t && Object(r.h)(s.c, { "aria-label": "Upload an image", className: "mr-2", icon: y, onClick: j }, "Upload image")) },
            E = function(e) {
                var t = e.buttonProps,
                    n = e.handleInsertionImageUpload,
                    a = e.uploadingImage,
                    i = e.useNativeUpload,
                    l = e.handleNativeMessage,
                    u = e.uploadErrorMessage;
                Object(o.d)((function() { u && Object(c.addSnackbarItem)({ message: u, addCloseButton: !0 }) }), [u]);
                var d = b(Object(o.j)(null), 2),
                    f = d[0],
                    h = d[1],
                    v = t.tooltip;
                return Object(r.h)(r.Fragment, null, i ? Object(r.h)("input", { type: "hidden", id: "native-image-upload-message", value: "", onChange: l }) : Object(r.h)("input", {
                    type: "file",
                    tabindex: "-1",
                    "aria-label": "Upload image",
                    id: "image-upload-field",
                    onChange: function(e) {
                        var t = new AbortController;
                        h(t), n(e, t.signal)
                    },
                    className: "screen-reader-only",
                    accept: "image/*",
                    "data-max-file-size-mb": "25"
                }), a ? Object(r.h)(s.c, p({}, t, { icon: w, onClick: function() { f.abort(), h(null) }, "aria-label": "Cancel image upload", tooltip: "Cancel upload" })) : Object(r.h)(s.c, p({}, t, {
                    icon: y,
                    onClick: function(e) {
                        var n;
                        null === (n = t.onClick) || void 0 === n || n.call(t, e), i ? j(e) : document.getElementById("image-upload-field").click()
                    },
                    "aria-label": "Upload image",
                    tooltip: v
                })))
            },
            k = function(e) {
                var t = e.uploadingImage,
                    n = e.useNativeUpload,
                    a = e.handleNativeMessage,
                    i = e.handleInsertionImageUpload,
                    l = e.insertionImageUrls,
                    u = e.uploadErrorMessage,
                    d = b(Object(o.j)(!1), 2),
                    p = d[0],
                    h = d[1];
                Object(o.d)((function() { t && h(!1) }), [t]);
                return Object(r.h)("div", { className: "flex items-center" }, t && Object(r.h)("span", { class: "lh-base pl-3 border-0 py-2 inline-block" }, Object(r.h)(s.k, null), " Uploading..."), n ? Object(r.h)(x, { uploadingImage: t, handleNativeMessage: a }) : t ? null : Object(r.h)(r.Fragment, null, Object(r.h)("label", { className: "cursor-pointer c-btn" }, Object(r.h)(s.f, { src: y, className: "c-btn__icon crayons-icon" }), " Upload image", Object(r.h)("input", { type: "file", id: "image-upload-field", onChange: i, className: "screen-reader-only", multiple: !0, accept: "image/*", "data-max-file-size-mb": "25" }))), l.length > 0 && Object(r.h)(f, {
                    onCopy: function() {
                        var e = document.getElementById("image-markdown-copy-link-input");
                        Runtime.copyToClipboard(e.value).then((function() { h(!0) })).catch((function(e) { Object(c.addSnackbarItem)({ message: e, addCloseButton: !0 }), Honeybadger.notify(e) }))
                    },
                    imageUrls: l,
                    showCopyMessage: p
                }), u ? Object(r.h)("span", { className: "color-accent-danger" }, u) : null)
            },
            I = function(e) {
                var t = e.editorVersion,
                    n = void 0 === t ? "v2" : t,
                    c = e.buttonProps,
                    l = void 0 === c ? {} : c,
                    u = e.onImageUploadStart,
                    s = e.onImageUploadSuccess,
                    d = e.onImageUploadError,
                    f = b(Object(o.h)(S, { insertionImageUrls: [], uploadErrorMessage: null, uploadingImage: !1 }), 2),
                    p = f[0],
                    h = f[1],
                    v = p.uploadingImage,
                    m = p.uploadErrorMessage,
                    g = p.insertionImageUrls;

                function y(e) { null === d || void 0 === d || d(), h({ type: "upload_error", payload: { errorMessage: e.message } }) }

                function O(e, t) {
                    var n = e.target.files;
                    if (n.length > 0 && Object(i.validateFileInputs)()) {
                        var r = { image: n };
                        h({ type: "uploading_image" }), null === u || void 0 === u || u(), Object(a.a)({ payload: r, successCb: w, failureCb: y, signal: t })
                    }
                }

                function w(e) { h({ type: "upload_image_success", payload: { insertionImageUrls: e.links } }), null === s || void 0 === s || s("![Image description](".concat(e.links, ")")), document.getElementById("upload-success-info").innerText = "image upload complete" }

                function j(e) {
                    var t = JSON.parse(e.detail);
                    if ("imageUpload" === t.namespace) switch (t.action) {
                        case "uploading":
                            null === u || void 0 === u || u(), h({ type: "uploading_image" });
                            break;
                        case "error":
                            h({ type: "upload_error", payload: { errorMessage: t.error } });
                            break;
                        case "success":
                            null === s || void 0 === s || s("![Image description](".concat(t.link, ")")), h({ type: "upload_image_success", payload: { insertionImageUrls: [t.link] } })
                    }
                }
                var x = Runtime.isNativeIOS("imageUpload_disabled");
                return document.addEventListener("ForemMobile", j), Object(r.h)(r.Fragment, null, Object(r.h)("div", { id: "upload-success-info", "aria-live": "polite", className: "screen-reader-only" }), "v2" === n ? Object(r.h)(E, { buttonProps: l, uploadingImage: v, handleInsertionImageUpload: O, useNativeUpload: x, handleNativeMessage: j, uploadErrorMessage: m }) : Object(r.h)(k, { uploadingImage: v, useNativeUpload: x, handleNativeMessage: j, handleInsertionImageUpload: O, insertionImageUrls: g, uploadErrorMessage: m }))
            };
        I.displayName = "ImageUploader"
    }, , function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "Modal", (function() { return p }));
        n(4);
        var r = n(0),
            o = n(1),
            a = n.n(o),
            i = n(8),
            c = n.n(i),
            l = n(21),
            u = n(6),
            s = n(3);

        function d(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var f = function(e) { return Object(r.h)("svg", e, Object(r.h)("path", { d: "m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" })) };
        f.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
        var p = function(e) {
            var t, n = e.children,
                o = e.size,
                a = e.className,
                i = e.title,
                u = e.prompt,
                p = e.centered,
                b = e.noBackdrop,
                h = e.backdropDismissible,
                v = void 0 !== h && h,
                m = e.onClose,
                g = void 0 === m ? function() {} : m,
                y = e.focusTrapSelector,
                O = void 0 === y ? ".crayons-modal__box" : y,
                w = c()("crayons-modal", (d(t = {}, "crayons-modal--".concat(o), o && "medium" !== o), d(t, "crayons-modal--prompt", u), d(t, "crayons-modal--centered", p && u), d(t, "crayons-modal--bg-dismissible", !b && v), d(t, a, a), t));
            return Object(r.h)(l.a, { onDeactivate: g, clickOutsideDeactivates: v, selector: O }, Object(r.h)("div", { "data-testid": "modal-container", className: w }, Object(r.h)("div", { role: "dialog", "aria-modal": "true", "aria-label": "modal", className: "crayons-modal__box" }, Object(r.h)("header", { className: "crayons-modal__box__header" }, Object(r.h)("h2", { class: "crayons-subtitle-2" }, i), Object(r.h)(s.c, { icon: f, "aria-label": "Close", className: "crayons-modal__dismiss", onClick: g })), Object(r.h)("div", { className: "crayons-modal__box__body" }, n)), !b && Object(r.h)("div", { "data-testid": "modal-overlay", className: "crayons-modal__backdrop" })))
        };
        p.displayName = "Modal", p.propTypes = { children: u.c.isRequired, className: a.a.string, title: a.a.string.isRequired, backdrop: a.a.bool, backdropDismissible: a.a.bool, prompt: a.a.bool, centered: a.a.bool, onClose: a.a.func, size: a.a.oneOf(["small", "medium", "large"]), focusTrapSelector: a.a.string }
    }]
]);
//# sourceMappingURL=1-c484bdb5c4ba85d0bb6a.chunk.js.map