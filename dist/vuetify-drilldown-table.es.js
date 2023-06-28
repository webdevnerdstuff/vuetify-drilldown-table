import { Fragment as ae, reactive as At, computed as g, watchEffect as Re, toRefs as ia, capitalize as $t, warn as pl, watch as Z, onScopeDispose as _e, effectScope as Hl, ref as H, unref as h, provide as ye, inject as ve, shallowRef as ce, defineComponent as Ye, camelize as ua, h as ft, getCurrentInstance as pr, TransitionGroup as vr, Transition as lt, createVNode as d, mergeProps as X, nextTick as Ie, isRef as mt, onMounted as gt, toRaw as Ue, resolveDynamicComponent as ca, toRef as G, readonly as Kl, Teleport as fr, withDirectives as Fe, vShow as yt, resolveDirective as qe, onBeforeUnmount as nt, Text as mr, onBeforeMount as Ul, cloneVNode as gr, createTextVNode as Yt, withModifiers as Fl, renderSlot as ue, resolveComponent as da, openBlock as q, createElementBlock as ie, normalizeClass as re, normalizeStyle as Ae, createElementVNode as Me, createBlock as me, withCtx as oe, normalizeProps as be, guardReactiveProps as Ve, createCommentVNode as ge, toDisplayString as yr, useSlots as Ft, renderList as Le, getCurrentScope as hr, toHandlers as br, mergeDefaults as Sr, useAttrs as wr, onUnmounted as xr, createSlots as Qe } from "vue";
import { useTheme as vl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-7
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
function pa(e, l, t) {
  const n = l.length - 1;
  if (n < 0)
    return e === void 0 ? t : e;
  for (let o = 0; o < n; o++) {
    if (e == null)
      return t;
    e = e[l[o]];
  }
  return e == null || e[l[n]] === void 0 ? t : e[l[n]];
}
function at(e, l) {
  if (e === l)
    return !0;
  if (e instanceof Date && l instanceof Date && e.getTime() !== l.getTime() || e !== Object(e) || l !== Object(l))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(l).length && t.every((n) => at(e[n], l[n]));
}
function Xt(e, l, t) {
  return e != null && l && typeof l == "string" ? e[l] !== void 0 ? e[l] : pa(e, (l = (l = l.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function Ce(e, l, t) {
  if (l == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof l != "function")
      return t;
    const o = l(e, t);
    return o === void 0 ? t : o;
  }
  if (typeof l == "string")
    return Xt(e, l, t);
  if (Array.isArray(l))
    return pa(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
function hn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (t, n) => l + n);
}
function J(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${l}` : void 0;
}
function Vl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function El(e) {
  return e && "$el" in e ? e.$el : e;
}
const bn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Vt(e, l, t) {
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    l.some((a) => a instanceof RegExp ? a.test(r) : a === r) && !(t != null && t.some((a) => a === r)) ? n[r] = e[r] : o[r] = e[r];
  return [n, o];
}
function ql(e, l) {
  const t = { ...e };
  return l.forEach((n) => delete t[n]), t;
}
function Yl(e) {
  return Vt(e, ["class", "style", "id", /^data-/]);
}
function De(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function kt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(l, Math.min(t, e));
}
function rt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const o in e)
    n[o] = e[o];
  for (const o in l) {
    const r = e[o], a = l[o];
    Vl(r) && Vl(a) ? n[o] = rt(r, a, t) : Array.isArray(r) && Array.isArray(a) && t ? n[o] = t(r, a) : n[o] = a;
  }
  return n;
}
function va(e) {
  return e.map((l) => l.type === ae ? va(l.children) : l).flat();
}
function et() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (et.cache.has(e))
    return et.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return et.cache.set(e, l), l;
}
function Kt(e, l) {
  if (!l || typeof l != "object")
    return [];
  if (Array.isArray(l))
    return l.map((t) => Kt(e, t)).flat(1);
  if (Array.isArray(l.children))
    return l.children.map((t) => Kt(e, t)).flat(1);
  if (l.component) {
    if (Object.getOwnPropertySymbols(l.component.provides).includes(e))
      return [l.component];
    if (l.component.subTree)
      return Kt(e, l.component.subTree).flat(1);
  }
  return [];
}
function Xl(e) {
  const l = At({}), t = g(e);
  return Re(() => {
    for (const n in t.value)
      l[n] = t.value[n];
  }, { flush: "sync" }), ia(l);
}
function Jt(e, l) {
  return e.includes(l);
}
et.cache = /* @__PURE__ */ new Map();
const kr = /^on[^a-z]/, Il = (e) => kr.test(e);
function Sn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ne = () => [Function, Array];
function wn(e, l) {
  return !!(e[l = "on" + $t(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function Zt(e, l) {
  var o, r, a;
  const t = function(s) {
    const i = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((c) => `${c}:not([tabindex="-1"]):not([disabled])`).join(", ");
    return [...s.querySelectorAll(i)];
  }(e), n = t.indexOf(document.activeElement);
  if (l)
    if (l === "first")
      (o = t[0]) == null || o.focus();
    else if (l === "last")
      (r = t.at(-1)) == null || r.focus();
    else {
      let s, i = n;
      const c = l === "next" ? 1 : -1;
      do
        i += c, s = t[i];
      while ((!s || s.offsetParent == null) && i < t.length && i >= 0);
      s ? s.focus() : Zt(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((a = t[0]) == null || a.focus());
}
function Wt(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
const fa = ["top", "bottom"], Cr = ["start", "end", "left", "right"];
function Ol(e, l) {
  let [t, n] = e.split(" ");
  return n || (n = Jt(fa, t) ? "start" : Jt(Cr, t) ? "top" : "center"), { side: xn(t, l), align: xn(n, l) };
}
function xn(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function wl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function xl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function kn(e) {
  return { side: e.align, align: e.side };
}
function Cn(e) {
  return Jt(fa, e.side) ? "y" : "x";
}
class ct {
  constructor(l) {
    let { x: t, y: n, width: o, height: r } = l;
    this.x = t, this.y = n, this.width = o, this.height = r;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Bn(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function Jl(e) {
  const l = e.getBoundingClientRect(), t = getComputedStyle(e), n = t.transform;
  if (n) {
    let o, r, a, s, i;
    if (n.startsWith("matrix3d("))
      o = n.slice(9, -1).split(/, /), r = +o[0], a = +o[5], s = +o[12], i = +o[13];
    else {
      if (!n.startsWith("matrix("))
        return new ct(l);
      o = n.slice(7, -1).split(/, /), r = +o[0], a = +o[3], s = +o[4], i = +o[5];
    }
    const c = t.transformOrigin, v = l.x - s - (1 - r) * parseFloat(c), p = l.y - i - (1 - a) * parseFloat(c.slice(c.indexOf(" ") + 1)), u = r ? l.width / r : e.offsetWidth + 1, f = a ? l.height / a : e.offsetHeight + 1;
    return new ct({ x: v, y: p, width: u, height: f });
  }
  return new ct(l);
}
function st(e, l, t) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let n;
  try {
    n = e.animate(l, t);
  } catch {
    return { finished: Promise.resolve() };
  }
  return n.finished === void 0 && (n.finished = new Promise((o) => {
    n.onfinish = () => {
      o(n);
    };
  })), n;
}
const zt = /* @__PURE__ */ new WeakMap();
function ma(e) {
  pl(`Vuetify: ${e}`);
}
function Pn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function N(e, l) {
  return (t) => Object.keys(e).reduce((n, o) => {
    const r = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return n[o] = t && o in t ? { ...r, default: t[o] } : r, l && !n[o].source && (n[o].source = l), n;
  }, {});
}
const se = N({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function tt(e, l) {
  let t;
  function n() {
    t = Hl(), t.run(() => l.length ? l(() => {
      t == null || t.stop(), n();
    }) : l());
  }
  Z(e, (o) => {
    o && !t ? n() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), _e(() => {
    t == null || t.stop();
  });
}
const Zl = Symbol.for("vuetify:defaults");
function Ql() {
  const e = ve(Zl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Xe(e, l) {
  const t = Ql(), n = H(e), o = g(() => {
    if (h(l == null ? void 0 : l.disabled))
      return t.value;
    const r = h(l == null ? void 0 : l.scoped), a = h(l == null ? void 0 : l.reset), s = h(l == null ? void 0 : l.root);
    let i = rt(n.value, { prev: t.value });
    if (r)
      return i;
    if (a || s) {
      const c = Number(a || 1 / 0);
      for (let v = 0; v <= c && i && "prev" in i; v++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = rt(rt(i, { prev: i }), i[s])), i;
    }
    return i.prev ? rt(i.prev, i) : i;
  });
  return ye(Zl, o), o;
}
function Br() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ql();
  const n = we("useDefaults");
  if (l = l ?? n.type.name ?? n.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const o = g(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? l];
  }), r = new Proxy(e, { get(s, i) {
    var v, p, u, f;
    const c = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(v = o.value) == null ? void 0 : v[i], c].filter((y) => y != null) : typeof i != "string" || function(y, C) {
      var m, S;
      return ((m = y.props) == null ? void 0 : m[C]) !== void 0 || ((S = y.props) == null ? void 0 : S[et(C)]) !== void 0;
    }(n.vnode, i) ? c : ((p = o.value) == null ? void 0 : p[i]) ?? ((f = (u = t.value) == null ? void 0 : u.global) == null ? void 0 : f[i]) ?? c;
  } }), a = ce();
  return Re(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((i) => {
        let [c] = i;
        return c.startsWith(c[0].toUpperCase());
      });
      s.length && (a.value = Object.fromEntries(s));
    }
  }), { props: r, provideSubDefaults: function() {
    tt(a, () => {
      var s;
      Xe(rt(((s = function(i) {
        const { provides: c } = we("injectSelf");
        if (c && i in c)
          return c[i];
      }(Zl)) == null ? void 0 : s.value) ?? {}, a.value));
    });
  } };
}
function dt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return ma("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = N(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(t) {
      return Vt(t, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, n) {
      const o = Ql();
      if (!o.value)
        return e._setup(t, n);
      const { props: r, provideSubDefaults: a } = Br(t, t._as ?? e.name, o), s = e._setup(r, n);
      return a(), s;
    };
  }
  return e;
}
function Y() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? dt : Ye)(l);
}
function ga(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return Y()({ name: t ?? $t(ua(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...se() }, setup(n, o) {
    let { slots: r } = o;
    return () => {
      var a;
      return ft(n.tag, { class: [e, n.class], style: n.style }, (a = r.default) == null ? void 0 : a.call(r));
    };
  } });
}
function ya(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const Qt = "cubic-bezier(0.4, 0, 0.2, 1)";
function we(e, l) {
  const t = pr();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return t;
}
function ze() {
  const e = we(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return et((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ha = 0, Ut = /* @__PURE__ */ new WeakMap();
function je() {
  const e = we("getUid");
  if (Ut.has(e))
    return Ut.get(e);
  {
    const l = ha++;
    return Ut.set(e, l), l;
  }
}
function el(e, l) {
  const t = [];
  if (l && e && !l.contains(e))
    return t;
  for (; e && (en(e) && t.push(e), e !== l); )
    e = e.parentElement;
  return t;
}
function en(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
je.reset = () => {
  ha = 0, Ut = /* @__PURE__ */ new WeakMap();
};
const Oe = typeof window < "u", tn = Oe && "IntersectionObserver" in window, Dl = Oe && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function le(e) {
  we("useRender").render = e;
}
const Pr = N({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Pe(e, l, t) {
  return Y()({ name: e, props: Pr({ mode: t, origin: l }), setup(n, o) {
    let { slots: r } = o;
    const a = { onBeforeEnter(s) {
      n.origin && (s.style.transformOrigin = n.origin);
    }, onLeave(s) {
      if (n.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: c, offsetWidth: v, offsetHeight: p } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${i}px`, s.style.left = `${c}px`, s.style.width = `${v}px`, s.style.height = `${p}px`;
      }
      n.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (n.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: i, top: c, left: v, width: p, height: u } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = i || "", s.style.top = c || "", s.style.left = v || "", s.style.width = p || "", s.style.height = u || "";
      }
    } };
    return () => {
      const s = n.group ? vr : lt;
      return ft(s, { name: n.disabled ? "" : e, css: !n.disabled, ...n.group ? void 0 : { mode: n.mode }, ...n.disabled ? {} : a }, r.default);
    };
  } });
}
function ba(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Y()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(n, o) {
    let { slots: r } = o;
    return () => ft(lt, { name: n.disabled ? "" : e, css: !n.disabled, ...n.disabled ? {} : l }, r.default);
  } });
}
function Sa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = ua(`offset-${l}`);
  return { onBeforeEnter(r) {
    r._parent = r.parentNode, r._initialStyle = { transition: r.style.transition, overflow: r.style.overflow, [l]: r.style[l] };
  }, onEnter(r) {
    const a = r._initialStyle;
    r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
    const s = `${r[t]}px`;
    r.style[l] = "0", r.offsetHeight, r.style.transition = a.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
      r.style[l] = s;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(r) {
    r._initialStyle = { transition: "", overflow: r.style.overflow, [l]: r.style[l] }, r.style.overflow = "hidden", r.style[l] = `${r[t]}px`, r.offsetHeight, requestAnimationFrame(() => r.style[l] = "0");
  }, onAfterLeave: n, onLeaveCancelled: n };
  function n(r) {
    e && r._parent && r._parent.classList.remove(e), o(r);
  }
  function o(r) {
    const a = r._initialStyle[l];
    r.style.overflow = r._initialStyle.overflow, a != null && (r.style[l] = a), delete r._initialStyle;
  }
}
const _r = N({ target: Object }, "v-dialog-transition"), wa = Y()({ name: "VDialogTransition", props: _r(), setup(e, l) {
  let { slots: t } = l;
  const n = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, r) {
    var u;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), o.style.visibility = "";
    const { x: a, y: s, sx: i, sy: c, speed: v } = An(e.target, o), p = st(o, [{ transform: `translate(${a}px, ${s}px) scale(${i}, ${c})`, opacity: 0 }, {}], { duration: 225 * v, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (u = _n(o)) == null || u.forEach((f) => {
      st(f, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * v, easing: Qt });
    }), p.finished.then(() => r());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, r) {
    var p;
    await new Promise((u) => requestAnimationFrame(u));
    const { x: a, y: s, sx: i, sy: c, speed: v } = An(e.target, o);
    st(o, [{}, { transform: `translate(${a}px, ${s}px) scale(${i}, ${c})`, opacity: 0 }], { duration: 125 * v, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => r()), (p = _n(o)) == null || p.forEach((u) => {
      st(u, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * v, easing: Qt });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(lt, X({ name: "dialog-transition" }, n, { css: !1 }), t) : d(lt, { name: "dialog-transition" }, t);
} });
function _n(e) {
  var t;
  const l = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return l && [...l];
}
function An(e, l) {
  const t = e.getBoundingClientRect(), n = Jl(l), [o, r] = getComputedStyle(l).transformOrigin.split(" ").map((S) => parseFloat(S)), [a, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  a === "left" || s === "left" ? i -= t.width / 2 : a !== "right" && s !== "right" || (i += t.width / 2);
  let c = t.top + t.height / 2;
  a === "top" || s === "top" ? c -= t.height / 2 : a !== "bottom" && s !== "bottom" || (c += t.height / 2);
  const v = t.width / n.width, p = t.height / n.height, u = Math.max(1, v, p), f = v / u || 0, y = p / u || 0, C = n.width * n.height / (window.innerWidth * window.innerHeight), m = C > 0.12 ? Math.min(1.5, 10 * (C - 0.12) + 1) : 1;
  return { x: i - (o + n.left), y: c - (r + n.top), sx: f, sy: y, speed: m };
}
Pe("fab-transition", "center center", "out-in"), Pe("dialog-bottom-transition"), Pe("dialog-top-transition"), Pe("fade-transition"), Pe("scale-transition"), Pe("scroll-x-transition"), Pe("scroll-x-reverse-transition"), Pe("scroll-y-transition"), Pe("scroll-y-reverse-transition"), Pe("slide-x-transition"), Pe("slide-x-reverse-transition");
const xa = Pe("slide-y-transition");
Pe("slide-y-reverse-transition");
const Ar = ba("expand-transition", Sa()), ka = ba("expand-x-transition", Sa("", !0)), $r = N({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ee = Y(!1)({ name: "VDefaultsProvider", props: $r(), setup(e, l) {
  let { slots: t } = l;
  const { defaults: n, disabled: o, reset: r, root: a, scoped: s } = ia(e);
  return Xe(n, { reset: r, root: a, scoped: s, disabled: o }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} });
function kl(e, l) {
  return { x: e.x + l.x, y: e.y + l.y };
}
function $n(e, l) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: n } = e;
    return kl({ x: n === "left" ? 0 : n === "center" ? l.width / 2 : n === "right" ? l.width : n, y: t === "top" ? 0 : t === "bottom" ? l.height : t }, l);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: n } = e;
    return kl({ x: t === "left" ? 0 : t === "right" ? l.width : t, y: n === "top" ? 0 : n === "center" ? l.height / 2 : n === "bottom" ? l.height : n }, l);
  }
  return kl({ x: l.width / 2, y: l.height / 2 }, l);
}
const Ca = { static: function() {
}, connected: function(e, l, t) {
  (function(f) {
    for (; f; ) {
      if (window.getComputedStyle(f).position === "fixed")
        return !0;
      f = f.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: n, preferredOrigin: o } = Xl(() => {
    const f = Ol(l.location, e.isRtl.value), y = l.origin === "overlap" ? f : l.origin === "auto" ? wl(f) : Ol(l.origin, e.isRtl.value);
    return f.side === y.side && f.align === xl(y).align ? { preferredAnchor: kn(f), preferredOrigin: kn(y) } : { preferredAnchor: f, preferredOrigin: y };
  }), [r, a, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((f) => g(() => {
    const y = parseFloat(l[f]);
    return isNaN(y) ? 1 / 0 : y;
  })), c = g(() => {
    if (Array.isArray(l.offset))
      return l.offset;
    if (typeof l.offset == "string") {
      const f = l.offset.split(" ").map(parseFloat);
      return f.length < 2 && f.push(0), f;
    }
    return typeof l.offset == "number" ? [l.offset, 0] : [0, 0];
  });
  let v = !1;
  const p = new ResizeObserver(() => {
    v && u();
  });
  function u() {
    if (v = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => v = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const f = e.activatorEl.value.getBoundingClientRect(), y = function(x, D) {
      const b = Jl(x);
      return D ? b.x += parseFloat(x.style.right || 0) : b.x -= parseFloat(x.style.left || 0), b.y -= parseFloat(x.style.top || 0), b;
    }(e.contentEl.value, e.isRtl.value), C = el(e.contentEl.value);
    C.length || (C.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const m = C.reduce((x, D) => {
      const b = D.getBoundingClientRect(), V = new ct({ x: D === document.documentElement ? 0 : b.x, y: D === document.documentElement ? 0 : b.y, width: D.clientWidth, height: D.clientHeight });
      return x ? new ct({ x: Math.max(x.left, V.left), y: Math.max(x.top, V.top), width: Math.min(x.right, V.right) - Math.max(x.left, V.left), height: Math.min(x.bottom, V.bottom) - Math.max(x.top, V.top) }) : V;
    }, void 0);
    m.x += 12, m.y += 12, m.width -= 24, m.height -= 24;
    let S = { anchor: n.value, origin: o.value };
    function w(x) {
      const D = new ct(y), b = $n(x.anchor, f), V = $n(x.origin, D);
      let { x: _, y: F } = (T = V, { x: (I = b).x - T.x, y: I.y - T.y });
      var I, T;
      switch (x.anchor.side) {
        case "top":
          F -= c.value[0];
          break;
        case "bottom":
          F += c.value[0];
          break;
        case "left":
          _ -= c.value[0];
          break;
        case "right":
          _ += c.value[0];
      }
      switch (x.anchor.align) {
        case "top":
          F -= c.value[1];
          break;
        case "bottom":
          F += c.value[1];
          break;
        case "left":
          _ -= c.value[1];
          break;
        case "right":
          _ += c.value[1];
      }
      return D.x += _, D.y += F, D.width = Math.min(D.width, s.value), D.height = Math.min(D.height, i.value), { overflows: Bn(D, m), x: _, y: F };
    }
    let B = 0, $ = 0;
    const A = { x: 0, y: 0 }, E = { x: !1, y: !1 };
    let k = -1;
    for (; ; ) {
      if (k++ > 10) {
        pl("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x, y: D, overflows: b } = w(S);
      B += x, $ += D, y.x += x, y.y += D;
      {
        const V = Cn(S.anchor), _ = b.x.before || b.x.after, F = b.y.before || b.y.after;
        let I = !1;
        if (["x", "y"].forEach((T) => {
          if (T === "x" && _ && !E.x || T === "y" && F && !E.y) {
            const M = { anchor: { ...S.anchor }, origin: { ...S.origin } }, O = T === "x" ? V === "y" ? xl : wl : V === "y" ? wl : xl;
            M.anchor = O(M.anchor), M.origin = O(M.origin);
            const { overflows: j } = w(M);
            (j[T].before <= b[T].before && j[T].after <= b[T].after || j[T].before + j[T].after < (b[T].before + b[T].after) / 2) && (S = M, I = E[T] = !0);
          }
        }), I)
          continue;
      }
      b.x.before && (B += b.x.before, y.x += b.x.before), b.x.after && (B -= b.x.after, y.x -= b.x.after), b.y.before && ($ += b.y.before, y.y += b.y.before), b.y.after && ($ -= b.y.after, y.y -= b.y.after);
      {
        const V = Bn(y, m);
        A.x = m.width - V.x.before - V.x.after, A.y = m.height - V.y.before - V.y.after, B += V.x.before, y.x += V.x.before, $ += V.y.before, y.y += V.y.before;
      }
      break;
    }
    const P = Cn(S.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: J(Cl($)), left: e.isRtl.value ? void 0 : J(Cl(B)), right: e.isRtl.value ? J(Cl(-B)) : void 0, minWidth: J(P === "y" ? Math.min(r.value, f.width) : r.value), maxWidth: J(Fn(kt(A.x, r.value === 1 / 0 ? 0 : r.value, s.value))), maxHeight: J(Fn(kt(A.y, a.value === 1 / 0 ? 0 : a.value, i.value))) }), { available: A, contentBox: y };
  }
  return Z([e.activatorEl, e.contentEl], (f, y) => {
    let [C, m] = f, [S, w] = y;
    S && p.unobserve(S), C && p.observe(C), w && p.unobserve(w), m && p.observe(m);
  }, { immediate: !0 }), _e(() => {
    p.disconnect();
  }), Z(() => [n.value, o.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => u()), Ie(() => {
    const f = u();
    if (!f)
      return;
    const { available: y, contentBox: C } = f;
    C.height > y.y && requestAnimationFrame(() => {
      u(), requestAnimationFrame(() => {
        u();
      });
    });
  }), { updateLocation: u };
} }, Fr = N({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ca }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Cl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Fn(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Tl = !0;
const tl = [];
let Vn = -1;
function Ll() {
  cancelAnimationFrame(Vn), Vn = requestAnimationFrame(() => {
    const e = tl.shift();
    e && e(), tl.length ? Ll() : Tl = !0;
  });
}
const qt = { none: null, close: function(e) {
  En(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, n = [.../* @__PURE__ */ new Set([...el(e.activatorEl.value, l.contained ? t : void 0), ...el(e.contentEl.value, l.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, r = (a = t || document.documentElement, en(a) && a);
  var a;
  r && e.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((i, c) => {
    i.style.setProperty("--v-body-scroll-x", J(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", J(-i.scrollTop)), i.style.setProperty("--v-scrollbar-offset", J(o)), i.classList.add("v-overlay-scroll-blocked");
  }), _e(() => {
    n.forEach((i, c) => {
      const v = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), p = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -v, i.scrollTop = -p;
    }), r && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, t) {
  let n = !1, o = -1, r = -1;
  function a(s) {
    var i;
    i = () => {
      var p, u;
      const c = performance.now();
      (u = (p = e.updateLocation).value) == null || u.call(p, s), n = (performance.now() - c) / (1e3 / 60) > 2;
    }, !Tl || tl.length ? (tl.push(i), Ll()) : (Tl = !1, i(), Ll());
  }
  r = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      En(e.activatorEl.value ?? e.contentEl.value, (s) => {
        n ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            a(s);
          });
        })) : a(s);
      });
    });
  }), _e(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(r), cancelAnimationFrame(o);
  });
} }, Vr = N({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in qt } }, "VOverlay-scroll-strategies");
function En(e, l) {
  const t = [document, ...el(e)];
  t.forEach((n) => {
    n.addEventListener("scroll", l, { passive: !0 });
  }), _e(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", l);
    });
  });
}
const Ml = Symbol.for("vuetify:v-menu"), Er = N({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Ir = N({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Er() }, "VOverlay-activator");
function Or(e, l) {
  let { isActive: t, isTop: n } = l;
  const o = H();
  let r = !1, a = !1, s = !0;
  const i = g(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), c = g(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: v, runCloseDelay: p } = function(k, P) {
    const x = {}, D = (b) => () => {
      if (!Oe)
        return Promise.resolve(!0);
      const V = b === "openDelay";
      return x.closeDelay && window.clearTimeout(x.closeDelay), delete x.closeDelay, x.openDelay && window.clearTimeout(x.openDelay), delete x.openDelay, new Promise((_) => {
        const F = parseInt(k[b] ?? 0, 10);
        x[b] = window.setTimeout(() => {
          P == null || P(V), _(V);
        }, F);
      });
    };
    return { runCloseDelay: D("closeDelay"), runOpenDelay: D("openDelay") };
  }(e, (k) => {
    k !== (e.openOnHover && r || i.value && a) || e.openOnHover && t.value && !n.value || (t.value !== k && (s = !0), t.value = k);
  }), u = (k) => {
    k.stopPropagation(), o.value = k.currentTarget || k.target, t.value = !t.value;
  }, f = (k) => {
    var P;
    (P = k.sourceCapabilities) != null && P.firesTouchEvents || (r = !0, o.value = k.currentTarget || k.target, v());
  }, y = (k) => {
    r = !1, p();
  }, C = (k) => {
    Dl && !k.target.matches(":focus-visible") || (a = !0, k.stopPropagation(), o.value = k.currentTarget || k.target, v());
  }, m = (k) => {
    a = !1, k.stopPropagation(), p();
  }, S = g(() => {
    const k = {};
    return c.value && (k.onClick = u), e.openOnHover && (k.onMouseenter = f, k.onMouseleave = y), i.value && (k.onFocus = C, k.onBlur = m), k;
  }), w = g(() => {
    const k = {};
    if (e.openOnHover && (k.onMouseenter = () => {
      r = !0, v();
    }, k.onMouseleave = () => {
      r = !1, p();
    }), i.value && (k.onFocusin = () => {
      a = !0, v();
    }, k.onFocusout = () => {
      a = !1, p();
    }), e.closeOnContentClick) {
      const P = ve(Ml, null);
      k.onClick = () => {
        t.value = !1, P == null || P.closeParents();
      };
    }
    return k;
  }), B = g(() => {
    const k = {};
    return e.openOnHover && (k.onMouseenter = () => {
      s && (r = !0, s = !1, v());
    }, k.onMouseleave = () => {
      r = !1, p();
    }), k;
  });
  Z(n, (k) => {
    !k || (!e.openOnHover || r || i.value && a) && (!i.value || a || e.openOnHover && r) || (t.value = !1);
  });
  const $ = H();
  Re(() => {
    $.value && Ie(() => {
      o.value = El($.value);
    });
  });
  const A = we("useActivator");
  let E;
  return Z(() => !!e.activator, (k) => {
    k && Oe ? (E = Hl(), E.run(() => {
      (function(P, x, D) {
        let { activatorEl: b, activatorEvents: V } = D;
        function _() {
          let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I(), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.activatorProps;
          T && function(O, j) {
            Object.keys(j).forEach((z) => {
              if (Il(z)) {
                const K = Sn(z), L = zt.get(O);
                if (j[z] == null)
                  L == null || L.forEach((R) => {
                    const [W, U] = R;
                    W === K && (O.removeEventListener(K, U), L.delete(R));
                  });
                else if (!L || ![...L].some((R) => R[0] === K && R[1] === j[z])) {
                  O.addEventListener(K, j[z]);
                  const R = L || /* @__PURE__ */ new Set();
                  R.add([K, j[z]]), zt.has(O) || zt.set(O, R);
                }
              } else
                j[z] == null ? O.removeAttribute(z) : O.setAttribute(z, j[z]);
            });
          }(T, X(V.value, M));
        }
        function F() {
          let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I(), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.activatorProps;
          T && function(O, j) {
            Object.keys(j).forEach((z) => {
              if (Il(z)) {
                const K = Sn(z), L = zt.get(O);
                L == null || L.forEach((R) => {
                  const [W, U] = R;
                  W === K && (O.removeEventListener(K, U), L.delete(R));
                });
              } else
                O.removeAttribute(z);
            });
          }(T, X(V.value, M));
        }
        function I() {
          var O, j;
          let T, M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P.activator;
          if (M)
            if (M === "parent") {
              let z = (j = (O = x == null ? void 0 : x.proxy) == null ? void 0 : O.$el) == null ? void 0 : j.parentNode;
              for (; z.hasAttribute("data-no-activator"); )
                z = z.parentNode;
              T = z;
            } else
              T = typeof M == "string" ? document.querySelector(M) : "$el" in M ? M.$el : M;
          return b.value = (T == null ? void 0 : T.nodeType) === Node.ELEMENT_NODE ? T : null, b.value;
        }
        Z(() => P.activator, (T, M) => {
          if (M && T !== M) {
            const O = I(M);
            O && F(O);
          }
          T && Ie(() => _());
        }, { immediate: !0 }), Z(() => P.activatorProps, () => {
          _();
        }), _e(() => {
          F();
        });
      })(e, A, { activatorEl: o, activatorEvents: S });
    })) : E && E.stop();
  }, { flush: "post", immediate: !0 }), _e(() => {
    E == null || E.stop();
  }), { activatorEl: o, activatorRef: $, activatorEvents: S, contentEvents: w, scrimEvents: B };
}
function ln(e) {
  return Xl(() => {
    const l = [], t = {};
    return e.value.background && (Pn(e.value.background) ? t.backgroundColor = e.value.background : l.push(`bg-${e.value.background}`)), e.value.text && (Pn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: t };
  });
}
function We(e, l) {
  const t = g(() => ({ text: mt(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = ln(t);
  return { textColorClasses: n, textColorStyles: o };
}
function pt(e, l) {
  const t = g(() => ({ background: mt(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = ln(t);
  return { backgroundColorClasses: n, backgroundColorStyles: o };
}
const Et = N({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function It(e) {
  return { dimensionStyles: g(() => ({ height: J(e.height), maxHeight: J(e.maxHeight), maxWidth: J(e.maxWidth), minHeight: J(e.minHeight), minWidth: J(e.minWidth), width: J(e.width) })) };
}
const fl = ["sm", "md", "lg", "xl", "xxl"], Dr = Symbol.for("vuetify:display");
function Tr() {
  if (!Oe)
    return ce(!1);
  const { ssr: e } = function() {
    const l = ve(Dr);
    if (!l)
      throw new Error("Could not find Vuetify display injection");
    return l;
  }();
  if (e) {
    const l = ce(!1);
    return gt(() => {
      l.value = !0;
    }), l;
  }
  return ce(!0);
}
const Lr = N({ eager: Boolean }, "lazy");
function fe(e, l, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const r = we("useProxiedModel"), a = H(e[l] !== void 0 ? e[l] : t), s = et(l), i = g(s !== l ? () => {
    var v, p, u, f;
    return e[l], !(!((v = r.vnode.props) != null && v.hasOwnProperty(l)) && !((p = r.vnode.props) != null && p.hasOwnProperty(s)) || !((u = r.vnode.props) != null && u.hasOwnProperty(`onUpdate:${l}`)) && !((f = r.vnode.props) != null && f.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var v, p;
    return e[l], !(!((v = r.vnode.props) != null && v.hasOwnProperty(l)) || !((p = r.vnode.props) != null && p.hasOwnProperty(`onUpdate:${l}`)));
  });
  tt(() => !i.value, () => {
    Z(() => e[l], (v) => {
      a.value = v;
    });
  });
  const c = g({ get() {
    const v = e[l];
    return n(i.value ? v : a.value);
  }, set(v) {
    const p = o(v), u = Ue(i.value ? e[l] : a.value);
    u !== p && n(u) !== v && (a.value = p, r == null || r.emit(`update:${l}`, p));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => i.value ? e[l] : a.value }), c;
}
const Ba = Symbol.for("vuetify:locale");
function ht() {
  const e = ve(Ba);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ot() {
  const e = ve(Ba);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function nn(e, l) {
  const t = ca("RouterLink"), n = g(() => !(!e.href && !e.to)), o = g(() => (n == null ? void 0 : n.value) || wn(l, "click") || wn(e, "click"));
  if (typeof t == "string")
    return { isLink: n, isClickable: o, href: G(e, "href") };
  const r = e.to ? t.useLink(e) : void 0;
  return { isLink: n, isClickable: o, route: r == null ? void 0 : r.route, navigate: r == null ? void 0 : r.navigate, isActive: r && g(() => {
    var a, s;
    return e.exact ? (a = r.isExactActive) == null ? void 0 : a.value : (s = r.isActive) == null ? void 0 : s.value;
  }), href: g(() => e.to ? r == null ? void 0 : r.route.value.href : e.href) };
}
const an = N({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Bl = !1;
function Pa() {
  const e = we("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const In = Symbol.for("vuetify:stack"), St = At([]), On = Symbol.for("vuetify:theme"), Se = N({ theme: String }, "theme");
function Be(e) {
  we("provideTheme");
  const l = ve(On, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const t = g(() => e.theme ?? (l == null ? void 0 : l.name.value)), n = g(() => l.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...l, name: t, themeClasses: n };
  return ye(On, o), o;
}
const Dt = N({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ke = (e, l) => {
  let { slots: t } = l;
  const { transition: n, disabled: o, ...r } = e, { component: a = lt, ...s } = typeof n == "object" ? n : {};
  return ft(a, X(typeof n == "string" ? { name: o ? "" : n } : s, r, { disabled: o }), t);
};
function Mr() {
  return !0;
}
function Dn(e, l, t) {
  if (!e || _a(e, t) === !1)
    return !1;
  const n = ya(l);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(l), !o.some((r) => r == null ? void 0 : r.contains(e.target));
}
function _a(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || Mr)(e);
}
function Tn(e, l) {
  const t = ya(e);
  l(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && l(t);
}
const Nr = { mounted(e, l) {
  const t = (o) => function(r, a, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    a._clickOutside.lastMousedownWasOutside && Dn(r, a, s) && setTimeout(() => {
      _a(r, s) && i && i(r);
    }, 0);
  }(o, e, l), n = (o) => {
    e._clickOutside.lastMousedownWasOutside = Dn(o, e, l);
  };
  Tn(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", n, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: t, onMousedown: n };
}, unmounted(e, l) {
  e._clickOutside && (Tn(e, (t) => {
    var r;
    if (!t || !((r = e._clickOutside) != null && r[l.instance.$.uid]))
      return;
    const { onClick: n, onMousedown: o } = e._clickOutside[l.instance.$.uid];
    t.removeEventListener("click", n, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function jr(e) {
  const { modelValue: l, color: t, ...n } = e;
  return d(lt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", X({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, n), null)] });
}
const Aa = N({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Ir(), ...se(), ...Et(), ...Lr(), ...Fr(), ...Vr(), ...Se(), ...Dt() }, "VOverlay"), Ln = Y()({ name: "VOverlay", directives: { ClickOutside: Nr }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Aa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var z, K;
  let { slots: t, attrs: n, emit: o } = l;
  const r = fe(e, "modelValue"), a = g({ get: () => r.value, set: (L) => {
    L && e.disabled || (r.value = L);
  } }), { teleportTarget: s } = (i = g(() => e.attach || e.contained), { teleportTarget: g(() => {
    const L = i.value;
    if (L === !0 || !Oe)
      return;
    const R = L === !1 ? document.body : typeof L == "string" ? document.querySelector(L) : L;
    if (R == null)
      return void pl(`Unable to locate target ${L}`);
    let W = R.querySelector(":scope > .v-overlay-container");
    return W || (W = document.createElement("div"), W.className = "v-overlay-container", R.appendChild(W)), W;
  }) });
  var i;
  const { themeClasses: c } = Be(e), { rtlClasses: v, isRtl: p } = Ot(), { hasContent: u, onAfterLeave: f } = function(L, R) {
    const W = ce(!1), U = g(() => W.value || L.eager || R.value);
    return Z(R, () => W.value = !0), { isBooted: W, hasContent: U, onAfterLeave: function() {
      L.eager || (W.value = !1);
    } };
  }(e, a), y = pt(g(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: C, localTop: m, stackStyles: S } = function(L, R, W) {
    const U = we("useStack"), ne = !W, ee = ve(In, void 0), Q = At({ activeChildren: /* @__PURE__ */ new Set() });
    ye(In, Q);
    const de = ce(+R.value);
    tt(L, () => {
      var bt;
      const Te = (bt = St.at(-1)) == null ? void 0 : bt[1];
      de.value = Te ? Te + 10 : +R.value, ne && St.push([U.uid, de.value]), ee == null || ee.activeChildren.add(U.uid), _e(() => {
        if (ne) {
          const cr = Ue(St).findIndex((dr) => dr[0] === U.uid);
          St.splice(cr, 1);
        }
        ee == null || ee.activeChildren.delete(U.uid);
      });
    });
    const ke = ce(!0);
    ne && Re(() => {
      var bt;
      const Te = ((bt = St.at(-1)) == null ? void 0 : bt[0]) === U.uid;
      setTimeout(() => ke.value = Te);
    });
    const Sl = g(() => !Q.activeChildren.size);
    return { globalTop: Kl(ke), localTop: Sl, stackStyles: g(() => ({ zIndex: de.value })) };
  }(a, G(e, "zIndex"), e._disableGlobalStack), { activatorEl: w, activatorRef: B, activatorEvents: $, contentEvents: A, scrimEvents: E } = Or(e, { isActive: a, isTop: m }), { dimensionStyles: k } = It(e), P = Tr(), { scopeId: x } = Pa();
  Z(() => e.disabled, (L) => {
    L && (a.value = !1);
  });
  const D = H(), b = H(), { contentStyles: V, updateLocation: _ } = function(L, R) {
    const W = H({}), U = H();
    function ne(ee) {
      var Q;
      (Q = U.value) == null || Q.call(U, ee);
    }
    return Oe && (tt(() => !(!R.isActive.value || !L.locationStrategy), (ee) => {
      var Q, de;
      Z(() => L.locationStrategy, ee), _e(() => {
        U.value = void 0;
      }), typeof L.locationStrategy == "function" ? U.value = (Q = L.locationStrategy(R, L, W)) == null ? void 0 : Q.updateLocation : U.value = (de = Ca[L.locationStrategy](R, L, W)) == null ? void 0 : de.updateLocation;
    }), window.addEventListener("resize", ne, { passive: !0 }), _e(() => {
      window.removeEventListener("resize", ne), U.value = void 0;
    })), { contentStyles: W, updateLocation: U };
  }(e, { isRtl: p, contentEl: b, activatorEl: w, isActive: a });
  function F(L) {
    o("click:outside", L), e.persistent ? j() : a.value = !1;
  }
  function I() {
    return a.value && C.value;
  }
  function T(L) {
    var R, W;
    L.key === "Escape" && C.value && (e.persistent ? j() : (a.value = !1, (R = b.value) != null && R.contains(document.activeElement) && ((W = w.value) == null || W.focus())));
  }
  (function(L, R) {
    if (!Oe)
      return;
    let W;
    Re(async () => {
      W == null || W.stop(), R.isActive.value && L.scrollStrategy && (W = Hl(), await Ie(), W.active && W.run(() => {
        var U;
        typeof L.scrollStrategy == "function" ? L.scrollStrategy(R, L, W) : (U = qt[L.scrollStrategy]) == null || U.call(qt, R, L, W);
      }));
    }), _e(() => {
      W == null || W.stop();
    });
  })(e, { root: D, contentEl: b, activatorEl: w, isActive: a, updateLocation: _ }), Oe && Z(a, (L) => {
    L ? window.addEventListener("keydown", T) : window.removeEventListener("keydown", T);
  }, { immediate: !0 });
  const M = (K = (z = we("useRouter")) == null ? void 0 : z.proxy) == null ? void 0 : K.$router;
  tt(() => e.closeOnBack, () => {
    (function(L, R) {
      let W, U, ne = !1;
      function ee(Q) {
        var de;
        (de = Q.state) != null && de.replaced || (ne = !0, setTimeout(() => ne = !1));
      }
      Oe && (Ie(() => {
        window.addEventListener("popstate", ee), W = L == null ? void 0 : L.beforeEach((Q, de, ke) => {
          Bl ? ne ? R(ke) : ke() : setTimeout(() => ne ? R(ke) : ke()), Bl = !0;
        }), U = L == null ? void 0 : L.afterEach(() => {
          Bl = !1;
        });
      }), _e(() => {
        window.removeEventListener("popstate", ee), W == null || W(), U == null || U();
      }));
    })(M, (L) => {
      C.value && a.value ? (L(!1), e.persistent ? j() : a.value = !1) : L();
    });
  });
  const O = H();
  function j() {
    e.noClickAnimation || b.value && st(b.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Qt });
  }
  return Z(() => a.value && (e.absolute || e.contained) && s.value == null, (L) => {
    if (L) {
      const R = function(W) {
        for (; W; ) {
          if (en(W))
            return W;
          W = W.parentElement;
        }
        return document.scrollingElement;
      }(D.value);
      R && R !== document.scrollingElement && (O.value = R.scrollTop);
    }
  }), le(() => {
    var L;
    return d(ae, null, [(L = t.activator) == null ? void 0 : L.call(t, { isActive: a.value, props: X({ ref: B }, $.value, e.activatorProps) }), P.value && d(fr, { disabled: !s.value, to: s.value }, { default: () => [u.value && d("div", X({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": a.value, "v-overlay--contained": e.contained }, c.value, v.value, e.class], style: [S.value, { top: J(O.value) }, e.style], ref: D }, x, n), [d(jr, X({ color: y, modelValue: a.value && !!e.scrim }, E.value), null), d(Ke, { appear: !0, persisted: !0, transition: e.transition, target: w.value, onAfterLeave: () => {
      f(), o("afterLeave");
    } }, { default: () => {
      var R;
      return [Fe(d("div", X({ ref: b, class: ["v-overlay__content", e.contentClass], style: [k.value, V.value] }, A.value, e.contentProps), [(R = t.default) == null ? void 0 : R.call(t, { isActive: a })]), [[yt, a.value], [qe("click-outside"), { handler: F, closeConditional: I, include: () => [w.value] }]])];
    } })])] })]);
  }), { activatorEl: w, animateClick: j, contentEl: b, globalTop: C, localTop: m, updateLocation: _ };
} }), Pl = Symbol("Forwarded refs");
function _l(e, l) {
  let t = e;
  for (; t; ) {
    const n = Reflect.getOwnPropertyDescriptor(t, l);
    if (n)
      return n;
    t = Object.getPrototypeOf(t);
  }
}
function on(e) {
  for (var l = arguments.length, t = new Array(l > 1 ? l - 1 : 0), n = 1; n < l; n++)
    t[n - 1] = arguments[n];
  return e[Pl] = t, new Proxy(e, { get(o, r) {
    if (Reflect.has(o, r))
      return Reflect.get(o, r);
    if (typeof r != "symbol" && !r.startsWith("__")) {
      for (const a of t)
        if (a.value && Reflect.has(a.value, r)) {
          const s = Reflect.get(a.value, r);
          return typeof s == "function" ? s.bind(a.value) : s;
        }
    }
  }, has(o, r) {
    if (Reflect.has(o, r))
      return !0;
    if (typeof r == "symbol" || r.startsWith("__"))
      return !1;
    for (const a of t)
      if (a.value && Reflect.has(a.value, r))
        return !0;
    return !1;
  }, getOwnPropertyDescriptor(o, r) {
    var s;
    const a = Reflect.getOwnPropertyDescriptor(o, r);
    if (a)
      return a;
    if (typeof r != "symbol" && !r.startsWith("__")) {
      for (const i of t) {
        if (!i.value)
          continue;
        const c = _l(i.value, r) ?? ("_" in i.value ? _l((s = i.value._) == null ? void 0 : s.setupState, r) : void 0);
        if (c)
          return c;
      }
      for (const i of t) {
        const c = i.value && i.value[Pl];
        if (!c)
          continue;
        const v = c.slice();
        for (; v.length; ) {
          const p = v.shift(), u = _l(p.value, r);
          if (u)
            return u;
          const f = p.value && p.value[Pl];
          f && v.push(...f);
        }
      }
    }
  } });
}
const Rr = (e, l, t) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), Wr = N({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function zr(e, l, t, n) {
  const o = g(() => typeof (t == null ? void 0 : t.value) != "string" && typeof (t == null ? void 0 : t.value) != "number" ? "" : String(t.value)), r = H([]), a = H(/* @__PURE__ */ new Map()), s = g(() => n != null && n.transform ? h(l).map(n == null ? void 0 : n.transform) : h(l));
  return Re(() => {
    r.value = [], a.value = /* @__PURE__ */ new Map();
    const i = function(v, p, u) {
      var S;
      const f = [], y = (u == null ? void 0 : u.default) ?? Rr, C = !!(u != null && u.filterKeys) && De(u.filterKeys), m = Object.keys((u == null ? void 0 : u.customKeyFilter) ?? {}).length;
      if (!(v != null && v.length))
        return f;
      e:
        for (let w = 0; w < v.length; w++) {
          const B = v[w], $ = {}, A = {};
          let E = -1;
          if (p && !(u != null && u.noFilter)) {
            if (typeof B == "object") {
              const x = C || Object.keys(B);
              for (const D of x) {
                const b = Ce(B, D, B), V = (S = u == null ? void 0 : u.customKeyFilter) == null ? void 0 : S[D];
                if (E = V ? V(b, p, B) : y(b, p, B), E !== -1 && E !== !1)
                  V ? $[D] = E : A[D] = E;
                else if ((u == null ? void 0 : u.filterMode) === "every")
                  continue e;
              }
            } else
              E = y(B, p, B), E !== -1 && E !== !1 && (A.title = E);
            const k = Object.keys(A).length, P = Object.keys($).length;
            if (!k && !P || (u == null ? void 0 : u.filterMode) === "union" && P !== m && !k || (u == null ? void 0 : u.filterMode) === "intersection" && (P !== m || !k))
              continue;
          }
          f.push({ index: w, matches: { ...A, ...$ } });
        }
      return f;
    }(s.value, o.value, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), c = h(l);
    i.forEach((v) => {
      let { index: p, matches: u } = v;
      const f = c[p];
      r.value.push(f), a.value.set(f.value, u);
    });
  }), { filteredItems: r, filteredMatches: a, getMatches: function(i) {
    return a.value.get(i.value);
  } };
}
const xe = N({ tag: { type: String, default: "div" } }, "tag"), Gr = N({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), $a = Symbol.for("vuetify:datatable:expanded");
function Fa(e) {
  const l = G(e, "expandOnClick"), t = fe(e, "expanded", e.expanded, (a) => new Set(a), (a) => [...a.values()]);
  function n(a, s) {
    const i = new Set(t.value);
    s ? i.add(a.value) : i.delete(a.value), t.value = i;
  }
  function o(a) {
    return t.value.has(a.value);
  }
  const r = { expand: n, expanded: t, expandOnClick: l, isExpanded: o, toggleExpand: function(a) {
    n(a, !o(a));
  } };
  return ye($a, r), r;
}
function Va() {
  const e = ve($a);
  if (!e)
    throw new Error("foo");
  return e;
}
const Hr = N({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), Ea = Symbol.for("vuetify:data-table-group");
function Ia(e) {
  return { groupBy: fe(e, "groupBy") };
}
function Oa(e) {
  const { groupBy: l, sortBy: t } = e, n = H(/* @__PURE__ */ new Set());
  function o(a) {
    return n.value.has(a.id);
  }
  const r = { sortByWithGroups: g(() => l.value.map((a) => ({ ...a, order: a.order ?? !1 })).concat(t.value)), toggleGroup: function(a) {
    const s = new Set(n.value);
    o(a) ? s.delete(a.id) : s.add(a.id), n.value = s;
  }, opened: n, groupBy: l, extractRows: function(a) {
    return function s(i) {
      const c = [];
      for (const v of i.items)
        "type" in v && v.type === "group" ? c.push(...s(v)) : c.push(v);
      return c;
    }({ type: "group", items: a, id: "dummy", key: "dummy", value: "dummy", depth: 0 });
  }, isGroupOpen: o };
  return ye(Ea, r), r;
}
function Da() {
  const e = ve(Ea);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function Ta(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!l.length)
    return [];
  const o = function(s, i) {
    if (!s.length)
      return [];
    const c = /* @__PURE__ */ new Map();
    for (const v of s) {
      const p = Xt(v.raw, i);
      c.has(p) || c.set(p, []), c.get(p).push(v);
    }
    return c;
  }(e, l[0]), r = [], a = l.slice(1);
  return o.forEach((s, i) => {
    const c = l[0], v = `${n}_${c}_${i}`;
    r.push({ depth: t, id: v, key: c, value: i, items: a.length ? Ta(s, a, t + 1, v) : s, type: "group" });
  }), r;
}
function La(e, l) {
  const t = [];
  for (const n of e)
    "type" in n && n.type === "group" ? (n.value != null && t.push(n), (l.has(n.id) || n.value == null) && t.push(...La(n.items, l))) : t.push(n);
  return t;
}
function Ma(e, l, t) {
  return { flatItems: g(() => l.value.length ? La(Ta(e.value, l.value.map((n) => n.key)), t.value) : e.value) };
}
function Na(e) {
  let { page: l, itemsPerPage: t, sortBy: n, groupBy: o, search: r } = e;
  const a = we("VDataTable"), s = g(() => ({ page: l.value, itemsPerPage: t.value, sortBy: n.value, groupBy: o.value, search: r.value }));
  Z(() => r == null ? void 0 : r.value, () => {
    l.value = 1;
  });
  let i = null;
  Z(s, () => {
    at(i, s.value) || (a.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const ja = N({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), Ra = Symbol.for("vuetify:data-table-pagination");
function Wa(e) {
  return { page: fe(e, "page", void 0, (l) => +(l ?? 1)), itemsPerPage: fe(e, "itemsPerPage", void 0, (l) => +(l ?? 10)) };
}
function za(e) {
  const { page: l, itemsPerPage: t, itemsLength: n } = e, o = g(() => t.value === -1 ? 0 : t.value * (l.value - 1)), r = g(() => t.value === -1 ? n.value : Math.min(n.value, o.value + t.value)), a = g(() => t.value === -1 || n.value === 0 ? 1 : Math.ceil(n.value / t.value));
  Re(() => {
    l.value > a.value && (l.value = a.value);
  });
  const s = { page: l, itemsPerPage: t, startIndex: o, stopIndex: r, pageCount: a, itemsLength: n, nextPage: function() {
    l.value = kt(l.value + 1, 1, a.value);
  }, prevPage: function() {
    l.value = kt(l.value - 1, 1, a.value);
  }, setPage: function(i) {
    l.value = kt(i, 1, a.value);
  }, setItemsPerPage: function(i) {
    t.value = i, l.value = 1;
  } };
  return ye(Ra, s), s;
}
const Kr = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var n;
  let { items: l, value: t } = e;
  return new Set(t ? [(n = l[0]) == null ? void 0 : n.value] : []);
}, selectAll: (e) => {
  let { selected: l } = e;
  return l;
} }, Ga = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, currentPage: t, selected: n } = e;
  return Ga.select({ items: t, value: l, selected: n });
} }, Ha = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, allItems: t, selected: n } = e;
  return Ha.select({ items: t, value: l, selected: n });
} }, Ur = N({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] } }, "DataTable-select"), Ka = Symbol.for("vuetify:data-table-selection");
function Ua(e, l) {
  let { allItems: t, currentPage: n } = l;
  const o = fe(e, "modelValue", e.modelValue, (f) => new Set(f), (f) => [...f.values()]), r = g(() => t.value.filter((f) => f.selectable)), a = g(() => n.value.filter((f) => f.selectable)), s = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Kr;
      case "all":
        return Ha;
      default:
        return Ga;
    }
  });
  function i(f) {
    return De(f).every((y) => o.value.has(y.value));
  }
  function c(f, y) {
    const C = s.value.select({ items: f, value: y, selected: new Set(o.value) });
    o.value = C;
  }
  const v = g(() => o.value.size > 0), p = g(() => i(s.value.allSelected({ allItems: r.value, currentPage: a.value }))), u = { toggleSelect: function(f) {
    c([f], !i([f]));
  }, select: c, selectAll: function(f) {
    const y = s.value.selectAll({ value: f, allItems: r.value, currentPage: a.value, selected: new Set(o.value) });
    o.value = y;
  }, isSelected: i, isSomeSelected: function(f) {
    return De(f).some((y) => o.value.has(y.value));
  }, someSelected: v, allSelected: p, showSelectAll: s.value.showSelectAll };
  return ye(Ka, u), u;
}
function ml() {
  const e = ve(Ka);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const qr = N({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), qa = Symbol.for("vuetify:data-table-sort");
function Ya(e) {
  return { sortBy: fe(e, "sortBy"), mustSort: G(e, "mustSort"), multiSort: G(e, "multiSort") };
}
function Xa(e) {
  const { sortBy: l, mustSort: t, multiSort: n, page: o } = e, r = { sortBy: l, toggleSort: (a) => {
    let s = l.value.map((c) => ({ ...c })) ?? [];
    const i = s.find((c) => c.key === a.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((c) => c.key !== a.key) : i.order = "desc" : s = n.value ? [...s, { key: a.key, order: "asc" }] : [{ key: a.key, order: "asc" }], l.value = s, o && (o.value = 1);
  }, isSorted: function(a) {
    return !!l.value.find((s) => s.key === a.key);
  } };
  return ye(qa, r), r;
}
function Yr(e, l, t) {
  const n = ht();
  return { sortedItems: g(() => t.value.length ? function(r, a, s, i) {
    const c = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...r].sort((v, p) => {
      for (let u = 0; u < a.length; u++) {
        const f = a[u].key, y = a[u].order ?? "asc";
        if (y === !1)
          continue;
        let C = Xt(v.raw, f), m = Xt(p.raw, f);
        if (y === "desc" && ([C, m] = [m, C]), i == null ? void 0 : i[f]) {
          const S = i[f](C, m);
          if (!S)
            continue;
          return S;
        }
        if (C instanceof Date && m instanceof Date)
          return C.getTime() - m.getTime();
        if ([C, m] = [C, m].map((S) => S != null ? S.toString().toLocaleLowerCase() : S), C !== m)
          return Wt(C) && Wt(m) ? 0 : Wt(C) ? -1 : Wt(m) ? 1 : isNaN(C) || isNaN(m) ? c.compare(C, m) : Number(C) - Number(m);
      }
      return 0;
    });
  }(l.value, t.value, n.current.value, e.customKeySort) : l.value) };
}
const Tt = N({ border: [Boolean, Number, String] }, "border");
function Lt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { borderClasses: g(() => {
    const t = mt(e) ? e.value : e.border, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        n.push(`border-${o}`);
    return n;
  }) };
}
const Xr = [null, "default", "comfortable", "compact"], Ge = N({ density: { type: String, default: "default", validator: (e) => Xr.includes(e) } }, "density");
function He(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { densityClasses: g(() => `${l}--density-${e.density}`) };
}
const Mt = N({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Nt(e) {
  return { elevationClasses: g(() => {
    const l = mt(e) ? e.value : e.elevation, t = [];
    return l == null || t.push(`elevation-${l}`), t;
  }) };
}
const Je = N({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ze(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { roundedClasses: g(() => {
    const t = mt(e) ? e.value : e.rounded, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        n.push(`rounded-${o}`);
    return n;
  }) };
}
const Jr = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function gl(e, l) {
  return d(ae, null, [e && d("span", { key: "overlay", class: `${l}__overlay` }, null), d("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const ot = N({ color: String, variant: { type: String, default: "elevated", validator: (e) => Jr.includes(e) } }, "variant");
function yl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = g(() => {
    const { variant: r } = h(e);
    return `${l}--variant-${r}`;
  }), { colorClasses: n, colorStyles: o } = ln(g(() => {
    const { variant: r, color: a } = h(e);
    return { [["elevated", "flat"].includes(r) ? "background" : "text"]: a };
  }));
  return { colorClasses: n, colorStyles: o, variantClasses: t };
}
const Ja = N({ divided: Boolean, ...Tt(), ...se(), ...Ge(), ...Mt(), ...Je(), ...xe(), ...Se(), ...ot() }, "VBtnGroup"), Mn = Y()({ name: "VBtnGroup", props: Ja(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Be(e), { densityClasses: o } = He(e), { borderClasses: r } = Lt(e), { elevationClasses: a } = Nt(e), { roundedClasses: s } = Ze(e);
  Xe({ VBtn: { height: "auto", color: G(e, "color"), density: G(e, "density"), flat: !0, variant: G(e, "variant") } }), le(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, n.value, r.value, o.value, a.value, s.value, e.class], style: e.style }, t));
} }), Za = N({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Qa = N({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function eo(e, l) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const n = we("useGroupItem");
  if (!n)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = je();
  ye(Symbol.for(`${l.description}:id`), o);
  const r = ve(l, null);
  if (!r) {
    if (!t)
      return r;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const a = G(e, "value"), s = g(() => r.disabled.value || e.disabled);
  r.register({ id: o, value: a, disabled: s }, n), nt(() => {
    r.unregister(o);
  });
  const i = g(() => r.isSelected(o)), c = g(() => i.value && [r.selectedClass.value, e.selectedClass]);
  return Z(i, (v) => {
    n.emit("group:selected", { value: v });
  }), { id: o, isSelected: i, toggle: () => r.select(o, !i.value), select: (v) => r.select(o, v), selectedClass: c, value: a, disabled: s, group: r };
}
function to(e, l) {
  let t = !1;
  const n = At([]), o = fe(e, "modelValue", [], (c) => c == null ? [] : Nn(n, De(c)), (c) => {
    const v = function(p, u) {
      const f = [];
      return u.forEach((y) => {
        const C = p.findIndex((m) => m.id === y);
        if (~C) {
          const m = p[C];
          f.push(m.value != null ? m.value : C);
        }
      }), f;
    }(n, c);
    return e.multiple ? v : v[0];
  }), r = we("useGroup");
  function a() {
    const c = n.find((v) => !v.disabled);
    c && e.mandatory === "force" && !o.value.length && (o.value = [c.id]);
  }
  function s(c) {
    if (e.multiple && ma('This method is not supported when using "multiple" prop'), o.value.length) {
      const v = o.value[0], p = n.findIndex((y) => y.id === v);
      let u = (p + c) % n.length, f = n[u];
      for (; f.disabled && u !== p; )
        u = (u + c) % n.length, f = n[u];
      if (f.disabled)
        return;
      o.value = [n[u].id];
    } else {
      const v = n.find((p) => !p.disabled);
      v && (o.value = [v.id]);
    }
  }
  gt(() => {
    a();
  }), nt(() => {
    t = !0;
  });
  const i = { register: function(c, v) {
    const p = c, u = Kt(Symbol.for(`${l.description}:id`), r == null ? void 0 : r.vnode).indexOf(v);
    u > -1 ? n.splice(u, 0, p) : n.push(p);
  }, unregister: function(c) {
    if (t)
      return;
    a();
    const v = n.findIndex((p) => p.id === c);
    n.splice(v, 1);
  }, selected: o, select: function(c, v) {
    const p = n.find((u) => u.id === c);
    if (!v || !(p != null && p.disabled))
      if (e.multiple) {
        const u = o.value.slice(), f = u.findIndex((C) => C === c), y = ~f;
        if (v = v ?? !y, y && e.mandatory && u.length <= 1 || !y && e.max != null && u.length + 1 > e.max)
          return;
        f < 0 && v ? u.push(c) : f >= 0 && !v && u.splice(f, 1), o.value = u;
      } else {
        const u = o.value.includes(c);
        if (e.mandatory && u)
          return;
        o.value = v ?? !u ? [c] : [];
      }
  }, disabled: G(e, "disabled"), prev: () => s(n.length - 1), next: () => s(1), isSelected: (c) => o.value.includes(c), selectedClass: g(() => e.selectedClass), items: g(() => n), getItemIndex: (c) => function(v, p) {
    const u = Nn(v, [p]);
    return u.length ? v.findIndex((f) => f.id === u[0]) : -1;
  }(n, c) };
  return ye(l, i), i;
}
function Nn(e, l) {
  const t = [];
  return l.forEach((n) => {
    const o = e.find((a) => at(n, a.value)), r = e[n];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : r != null && t.push(r.id);
  }), t;
}
const lo = Symbol.for("vuetify:v-btn-toggle"), Zr = N({ ...Ja(), ...Za() }, "VBtnToggle");
Y()({ name: "VBtnToggle", props: Zr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, next: o, prev: r, select: a, selected: s } = to(e, lo);
  return le(() => {
    const [i] = Mn.filterProps(e);
    return d(Mn, X({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var c;
      return [(c = t.default) == null ? void 0 : c.call(t, { isSelected: n, next: o, prev: r, select: a, selected: s })];
    } });
  }), { next: o, prev: r, select: a };
} });
const pe = [String, Function, Object, Array], Qr = Symbol.for("vuetify:icons"), ll = N({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), jn = Y()({ name: "VComponentIcon", props: ll(), setup(e, l) {
  let { slots: t } = l;
  return () => {
    const n = e.icon;
    return d(e.tag, null, { default: () => {
      var o;
      return [e.icon ? d(n, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), es = dt({ name: "VSvgIcon", inheritAttrs: !1, props: ll(), setup(e, l) {
  let { attrs: t } = l;
  return () => d(e.tag, X(t, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? d("path", { d: n[0], "fill-opacity": n[1] }, null) : d("path", { d: n }, null)) : d("path", { d: e.icon }, null)])] });
} });
dt({ name: "VLigatureIcon", props: ll(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), dt({ name: "VClassIcon", props: ll(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const ts = ["x-small", "small", "default", "large", "x-large"], jt = N({ size: { type: [String, Number], default: "default" } }, "size");
function Rt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return Xl(() => {
    let t, n;
    return Jt(ts, e.size) ? t = `${l}--size-${e.size}` : e.size && (n = { width: J(e.size), height: J(e.size) }), { sizeClasses: t, sizeStyles: n };
  });
}
const ls = N({ color: String, start: Boolean, end: Boolean, icon: pe, ...se(), ...jt(), ...xe({ tag: "i" }), ...Se() }, "VIcon"), he = Y()({ name: "VIcon", props: ls(), setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = H(), { themeClasses: r } = Be(e), { iconData: a } = ((v) => {
    const p = ve(Qr);
    if (!p)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: g(() => {
      var m;
      const u = h(v);
      if (!u)
        return { component: jn };
      let f = u;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (m = p.aliases) == null ? void 0 : m[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${u}"`);
      if (Array.isArray(f))
        return { component: es, icon: f };
      if (typeof f != "string")
        return { component: jn, icon: f };
      const y = Object.keys(p.sets).find((S) => typeof f == "string" && f.startsWith(`${S}:`)), C = y ? f.slice(y.length + 1) : f;
      return { component: p.sets[y ?? p.defaultSet].component, icon: C };
    }) };
  })(g(() => o.value || e.icon)), { sizeClasses: s } = Rt(e), { textColorClasses: i, textColorStyles: c } = We(G(e, "color"));
  return le(() => {
    var p, u;
    const v = (p = n.default) == null ? void 0 : p.call(n);
    return v && (o.value = (u = va(v).filter((f) => f.type === mr && f.children && typeof f.children == "string")[0]) == null ? void 0 : u.children), d(a.value.component, { tag: e.tag, icon: a.value.icon, class: ["v-icon", "notranslate", r.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: J(e.size), height: J(e.size), width: J(e.size) }, c.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [v] });
  }), {};
} });
function no(e, l) {
  const t = H(), n = ce(!1);
  if (tn) {
    const o = new IntersectionObserver((r) => {
      e == null || e(r, o), n.value = !!r.find((a) => a.isIntersecting);
    }, l);
    nt(() => {
      o.disconnect();
    }), Z(t, (r, a) => {
      a && (o.unobserve(a), n.value = !1), r && o.observe(r);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: n };
}
const ns = N({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...jt(), ...xe({ tag: "div" }), ...Se() }, "VProgressCircular"), ao = Y()({ name: "VProgressCircular", props: ns(), setup(e, l) {
  let { slots: t } = l;
  const n = 2 * Math.PI * 20, o = H(), { themeClasses: r } = Be(e), { sizeClasses: a, sizeStyles: s } = Rt(e), { textColorClasses: i, textColorStyles: c } = We(G(e, "color")), { textColorClasses: v, textColorStyles: p } = We(G(e, "bgColor")), { intersectionRef: u, isIntersecting: f } = no(), { resizeRef: y, contentRect: C } = function(E) {
    const k = H(), P = H();
    if (Oe) {
      const x = new ResizeObserver((D) => {
        E == null || E(D, x), D.length && (P.value = D[0].contentRect);
      });
      nt(() => {
        x.disconnect();
      }), Z(k, (D, b) => {
        b && (x.unobserve(El(b)), P.value = void 0), D && x.observe(El(D));
      }, { flush: "post" });
    }
    return { resizeRef: k, contentRect: Kl(P) };
  }(), m = g(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = g(() => Number(e.width)), w = g(() => s.value ? Number(e.size) : C.value ? C.value.width : Math.max(S.value, 32)), B = g(() => 20 / (1 - S.value / w.value) * 2), $ = g(() => S.value / w.value * B.value), A = g(() => J((100 - m.value) / 100 * n));
  return Re(() => {
    u.value = o.value, y.value = o.value;
  }), le(() => d(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": f.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, r.value, a.value, i.value, e.class], style: [s.value, c.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : m.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${B.value} ${B.value}` }, [d("circle", { class: ["v-progress-circular__underlay", v.value], style: p.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": $.value, "stroke-dasharray": n, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": $.value, "stroke-dasharray": n, "stroke-dashoffset": A.value }, null)]), t.default && d("div", { class: "v-progress-circular__content" }, [t.default({ value: m.value })])] })), {};
} }), Rn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, oo = N({ location: String }, "location");
function ro(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: n } = Ot();
  return { locationStyles: g(() => {
    if (!e.location)
      return {};
    const { side: r, align: a } = Ol(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, n.value);
    function s(c) {
      return t ? t(c) : 0;
    }
    const i = {};
    return r !== "center" && (l ? i[Rn[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0), a !== "center" ? l ? i[Rn[a]] = `calc(100% - ${s(a)}px)` : i[a] = 0 : (r === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[r]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[r]), i;
  }) };
}
const as = N({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...oo({ location: "top" }), ...Je(), ...xe(), ...Se() }, "VProgressLinear"), so = Y()({ name: "VProgressLinear", props: as(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { isRtl: o, rtlClasses: r } = Ot(), { themeClasses: a } = Be(e), { locationStyles: s } = ro(e), { textColorClasses: i, textColorStyles: c } = We(e, "color"), { backgroundColorClasses: v, backgroundColorStyles: p } = pt(g(() => e.bgColor || e.color)), { backgroundColorClasses: u, backgroundColorStyles: f } = pt(e, "color"), { roundedClasses: y } = Ze(e), { intersectionRef: C, isIntersecting: m } = no(), S = g(() => parseInt(e.max, 10)), w = g(() => parseInt(e.height, 10)), B = g(() => parseFloat(e.bufferValue) / S.value * 100), $ = g(() => parseFloat(n.value) / S.value * 100), A = g(() => o.value !== e.reverse), E = g(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), k = g(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function P(x) {
    if (!C.value)
      return;
    const { left: D, right: b, width: V } = C.value.getBoundingClientRect(), _ = A.value ? V - x.clientX + (b - V) : x.clientX - D;
    n.value = Math.round(_ / V * S.value);
  }
  return le(() => d(e.tag, { ref: C, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && m.value, "v-progress-linear--reverse": A.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, y.value, a.value, r.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? J(w.value) : 0, "--v-progress-linear-height": J(w.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : $.value, onClick: e.clickable && P }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...c.value, [A.value ? "left" : "right"]: J(-w.value), borderTop: `${J(w.value / 2)} dotted`, opacity: k.value, top: `calc(50% - ${J(w.value / 4)})`, width: J(100 - B.value, "%"), "--v-progress-linear-stream-to": J(w.value * (A.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", v.value], style: [p.value, { opacity: k.value, width: J(e.stream ? B.value : 100, "%") }] }, null), d(lt, { name: E.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((x) => d("div", { key: x, class: ["v-progress-linear__indeterminate", x, u.value], style: f.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", u.value], style: [f.value, { width: J($.value, "%") }] }, null)] }), t.default && d("div", { class: "v-progress-linear__content" }, [t.default({ value: $.value, buffer: B.value })])] })), {};
} }), rn = N({ loading: [Boolean, String] }, "loader");
function sn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { loaderClasses: g(() => ({ [`${l}--loading`]: e.loading })) };
}
function io(e, l) {
  var n;
  let { slots: t } = l;
  return d("div", { class: `${e.name}__loader` }, [((n = t.default) == null ? void 0 : n.call(t, { color: e.color, isActive: e.active })) || d(so, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const os = ["static", "relative", "fixed", "absolute", "sticky"], rs = N({ position: { type: String, validator: (e) => os.includes(e) } }, "position"), Nl = Symbol("rippleStop"), ss = 80;
function Wn(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function jl(e) {
  return e.constructor.name === "TouchEvent";
}
function uo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const nl = { show(e, l) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((f = l == null ? void 0 : l._ripple) != null && f.enabled))
    return;
  const n = document.createElement("span"), o = document.createElement("span");
  n.appendChild(o), n.className = "v-ripple__container", t.class && (n.className += ` ${t.class}`);
  const { radius: r, scale: a, x: s, y: i, centerX: c, centerY: v } = function(y, C) {
    var k;
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = 0, w = 0;
    if (!uo(y)) {
      const P = C.getBoundingClientRect(), x = jl(y) ? y.touches[y.touches.length - 1] : y;
      S = x.clientX - P.left, w = x.clientY - P.top;
    }
    let B = 0, $ = 0.3;
    (k = C._ripple) != null && k.circle ? ($ = 0.15, B = C.clientWidth / 2, B = m.center ? B : B + Math.sqrt((S - B) ** 2 + (w - B) ** 2) / 4) : B = Math.sqrt(C.clientWidth ** 2 + C.clientHeight ** 2) / 2;
    const A = (C.clientWidth - 2 * B) / 2 + "px", E = (C.clientHeight - 2 * B) / 2 + "px";
    return { radius: B, scale: $, x: m.center ? A : S - B + "px", y: m.center ? E : w - B + "px", centerX: A, centerY: E };
  }(e, l, t), p = 2 * r + "px";
  o.className = "v-ripple__animation", o.style.width = p, o.style.height = p, l.appendChild(n);
  const u = window.getComputedStyle(l);
  u && u.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Wn(o, `translate(${s}, ${i}) scale3d(${a},${a},${a})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Wn(o, `translate(${c}, ${v}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var r;
  if (!((r = e == null ? void 0 : e._ripple) != null && r.enabled))
    return;
  const l = e.getElementsByClassName("v-ripple__animation");
  if (l.length === 0)
    return;
  const t = l[l.length - 1];
  if (t.dataset.isHiding)
    return;
  t.dataset.isHiding = "true";
  const n = performance.now() - Number(t.dataset.activated), o = Math.max(250 - n, 0);
  setTimeout(() => {
    t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var a;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((a = t.parentNode) == null ? void 0 : a.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, o);
} };
function co(e) {
  return e === void 0 || !!e;
}
function Bt(e) {
  const l = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Nl]) {
    if (e[Nl] = !0, jl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (l.center = t._ripple.centered || uo(e), t._ripple.class && (l.class = t._ripple.class), jl(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        nl.show(e, t, l);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var n;
        (n = t == null ? void 0 : t._ripple) != null && n.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, ss);
    } else
      nl.show(e, t, l);
  }
}
function zn(e) {
  e[Nl] = !0;
}
function $e(e) {
  const l = e.currentTarget;
  if (l != null && l._ripple) {
    if (window.clearTimeout(l._ripple.showTimer), e.type === "touchend" && l._ripple.showTimerCommit)
      return l._ripple.showTimerCommit(), l._ripple.showTimerCommit = null, void (l._ripple.showTimer = window.setTimeout(() => {
        $e(e);
      }));
    window.setTimeout(() => {
      l._ripple && (l._ripple.touched = !1);
    }), nl.hide(l);
  }
}
function po(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let Pt = !1;
function vo(e) {
  Pt || e.keyCode !== bn.enter && e.keyCode !== bn.space || (Pt = !0, Bt(e));
}
function fo(e) {
  Pt = !1, $e(e);
}
function mo(e) {
  Pt && (Pt = !1, $e(e));
}
function Gn(e, l, t) {
  const { value: n, modifiers: o } = l, r = co(n);
  if (r || nl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = r, e._ripple.centered = o.center, e._ripple.circle = o.circle, Vl(n) && n.class && (e._ripple.class = n.class), r && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", zn, { passive: !0 }), void e.addEventListener("mousedown", zn);
    e.addEventListener("touchstart", Bt, { passive: !0 }), e.addEventListener("touchend", $e, { passive: !0 }), e.addEventListener("touchmove", po, { passive: !0 }), e.addEventListener("touchcancel", $e), e.addEventListener("mousedown", Bt), e.addEventListener("mouseup", $e), e.addEventListener("mouseleave", $e), e.addEventListener("keydown", vo), e.addEventListener("keyup", fo), e.addEventListener("blur", mo), e.addEventListener("dragstart", $e, { passive: !0 });
  } else
    !r && t && go(e);
}
function go(e) {
  e.removeEventListener("mousedown", Bt), e.removeEventListener("touchstart", Bt), e.removeEventListener("touchend", $e), e.removeEventListener("touchmove", po), e.removeEventListener("touchcancel", $e), e.removeEventListener("mouseup", $e), e.removeEventListener("mouseleave", $e), e.removeEventListener("keydown", vo), e.removeEventListener("keyup", fo), e.removeEventListener("dragstart", $e), e.removeEventListener("blur", mo);
}
const hl = { mounted: function(e, l) {
  Gn(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, go(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && Gn(e, l, co(l.oldValue));
} }, is = N({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: lo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), ...Qa(), ...rn(), ...oo(), ...rs(), ...Je(), ...an(), ...jt(), ...xe({ tag: "button" }), ...Se(), ...ot({ variant: "elevated" }) }, "VBtn"), it = Y()({ name: "VBtn", directives: { Ripple: hl }, props: is(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { themeClasses: o } = Be(e), { borderClasses: r } = Lt(e), { colorClasses: a, colorStyles: s, variantClasses: i } = yl(e), { densityClasses: c } = He(e), { dimensionStyles: v } = It(e), { elevationClasses: p } = Nt(e), { loaderClasses: u } = sn(e), { locationStyles: f } = ro(e), { positionClasses: y } = function(x) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
    return { positionClasses: g(() => x.position ? `${D}--${x.position}` : void 0) };
  }(e), { roundedClasses: C } = Ze(e), { sizeClasses: m, sizeStyles: S } = Rt(e), w = eo(e, e.symbol, !1), B = nn(e, t), $ = g(() => {
    var x;
    return e.active !== void 0 ? e.active : B.isLink.value ? (x = B.isActive) == null ? void 0 : x.value : w == null ? void 0 : w.isSelected.value;
  }), A = g(() => (w == null ? void 0 : w.disabled.value) || e.disabled), E = g(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), k = g(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(x) {
    var D;
    A.value || ((D = B.navigate) == null || D.call(B, x), w == null || w.toggle());
  }
  return function(x, D) {
    Z(() => {
      var b;
      return (b = x.isActive) == null ? void 0 : b.value;
    }, (b) => {
      x.isLink.value && b && D && Ie(() => {
        D(!0);
      });
    }, { immediate: !0 });
  }(B, w == null ? void 0 : w.select), le(() => {
    var F, I;
    const x = B.isLink.value ? "a" : e.tag, D = !(!e.prependIcon && !n.prepend), b = !(!e.appendIcon && !n.append), V = !(!e.icon || e.icon === !0), _ = (w == null ? void 0 : w.isSelected.value) && (!B.isLink.value || ((F = B.isActive) == null ? void 0 : F.value)) || !w || ((I = B.isActive) == null ? void 0 : I.value);
    return Fe(d(x, { type: x === "a" ? void 0 : "button", class: ["v-btn", w == null ? void 0 : w.selectedClass.value, { "v-btn--active": $.value, "v-btn--block": e.block, "v-btn--disabled": A.value, "v-btn--elevated": E.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, r.value, _ ? a.value : void 0, c.value, p.value, u.value, y.value, C.value, m.value, i.value, e.class], style: [_ ? s.value : void 0, v.value, f.value, S.value, e.style], disabled: A.value || void 0, href: B.href.value, onClick: P, value: k.value }, { default: () => {
      var T;
      return [gl(!0, "v-btn"), !e.icon && D && d("span", { key: "prepend", class: "v-btn__prepend" }, [n.prepend ? d(Ee, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, n.prepend) : d(he, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!n.default && V ? d(he, { key: "content-icon", icon: e.icon }, null) : d(Ee, { key: "content-defaults", disabled: !V, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var M;
        return [((M = n.default) == null ? void 0 : M.call(n)) ?? e.text];
      } })]), !e.icon && b && d("span", { key: "append", class: "v-btn__append" }, [n.append ? d(Ee, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, n.append) : d(he, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((T = n.loader) == null ? void 0 : T.call(n)) ?? d(ao, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[qe("ripple"), !A.value && e.ripple, null]]);
  }), {};
} }), us = N({ text: String, clickable: Boolean, ...se(), ...Se() }, "VLabel"), yo = Y()({ name: "VLabel", props: us(), setup(e, l) {
  let { slots: t } = l;
  return le(() => {
    var n;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (n = t.default) == null ? void 0 : n.call(t)]);
  }), {};
} }), ho = Symbol.for("vuetify:selection-control-group"), bo = N({ color: String, disabled: Boolean, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: at }, ...se(), ...Ge(), ...Se() }, "SelectionControlGroup"), cs = N({ ...bo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
Y()({ name: "VSelectionControlGroup", props: cs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), o = je(), r = g(() => e.id || `v-selection-control-group-${o}`), a = g(() => e.name || r.value), s = /* @__PURE__ */ new Set();
  return ye(ho, { modelValue: n, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), _e(() => {
      s.delete(i);
    });
  } }), Xe({ [e.defaultsTarget]: { color: G(e, "color"), disabled: G(e, "disabled"), density: G(e, "density"), error: G(e, "error"), inline: G(e, "inline"), modelValue: n, multiple: g(() => !!e.multiple || e.multiple == null && Array.isArray(n.value)), name: a, falseIcon: G(e, "falseIcon"), trueIcon: G(e, "trueIcon"), readonly: G(e, "readonly"), ripple: G(e, "ripple"), type: G(e, "type"), valueComparator: G(e, "valueComparator") } }), le(() => {
    var i;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const So = N({ label: String, trueValue: null, falseValue: null, value: null, ...se(), ...bo() }, "VSelectionControl"), ds = Y()({ name: "VSelectionControl", directives: { Ripple: hl }, inheritAttrs: !1, props: So(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { group: o, densityClasses: r, icon: a, model: s, textColorClasses: i, textColorStyles: c, trueValue: v } = function(B) {
    const $ = ve(ho, void 0), { densityClasses: A } = He(B), E = fe(B, "modelValue"), k = g(() => B.trueValue !== void 0 ? B.trueValue : B.value === void 0 || B.value), P = g(() => B.falseValue !== void 0 && B.falseValue), x = g(() => !!B.multiple || B.multiple == null && Array.isArray(E.value)), D = g({ get() {
      const F = $ ? $.modelValue.value : E.value;
      return x.value ? F.some((I) => B.valueComparator(I, k.value)) : B.valueComparator(F, k.value);
    }, set(F) {
      if (B.readonly)
        return;
      const I = F ? k.value : P.value;
      let T = I;
      x.value && (T = F ? [...De(E.value), I] : De(E.value).filter((M) => !B.valueComparator(M, k.value))), $ ? $.modelValue.value = T : E.value = T;
    } }), { textColorClasses: b, textColorStyles: V } = We(g(() => !D.value || B.error || B.disabled ? void 0 : B.color)), _ = g(() => D.value ? B.trueIcon : B.falseIcon);
    return { group: $, densityClasses: A, trueValue: k, falseValue: P, model: D, textColorClasses: b, textColorStyles: V, icon: _ };
  }(e), p = je(), u = g(() => e.id || `input-${p}`), f = ce(!1), y = ce(!1), C = H();
  function m(B) {
    f.value = !0, (!Dl || Dl && B.target.matches(":focus-visible")) && (y.value = !0);
  }
  function S() {
    f.value = !1, y.value = !1;
  }
  function w(B) {
    e.readonly && o && Ie(() => o.forceUpdate()), s.value = B.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    C.value && (C.value.checked = s.value);
  }), le(() => {
    var E, k;
    const B = n.label ? n.label({ label: e.label, props: { for: u.value } }) : e.label, [$, A] = Yl(t);
    return d("div", X({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": f.value, "v-selection-control--focus-visible": y.value, "v-selection-control--inline": e.inline }, r.value, e.class] }, $, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", i.value], style: c.value }, [(E = n.default) == null ? void 0 : E.call(n), Fe(d("div", { class: ["v-selection-control__input"] }, [a.value && d(he, { key: "icon", icon: a.value }, null), d("input", X({ ref: C, checked: s.value, disabled: e.disabled, id: u.value, onBlur: S, onFocus: m, onInput: w, "aria-disabled": e.readonly, type: e.type, value: v.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, A), null), (k = n.input) == null ? void 0 : k.call(n, { model: s, textColorClasses: i, textColorStyles: c, props: { onFocus: m, onBlur: S, id: u.value } })]), [[qe("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), B && d(yo, { for: u.value, clickable: !0 }, { default: () => [B] })]);
  }), { isFocused: f, input: C };
} }), wo = N({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...So({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), vt = Y()({ name: "VCheckboxBtn", props: wo(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "indeterminate"), o = fe(e, "modelValue");
  function r(i) {
    n.value && (n.value = !1);
  }
  const a = g(() => n.value ? e.indeterminateIcon : e.falseIcon), s = g(() => n.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => d(ds, X(e, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, r], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: a.value, trueIcon: s.value, "aria-checked": n.value ? "mixed" : void 0 }), t)), {};
} });
function xo(e) {
  const { t: l } = ht();
  return { InputIcon: function(t) {
    let { name: n } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[n], r = e[`onClick:${n}`], a = r && o ? l(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return d(he, { icon: e[`${n}Icon`], "aria-label": a, onClick: r }, null);
  } };
}
const ps = N({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...Dt({ transition: { component: xa, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), vs = Y()({ name: "VMessages", props: ps(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => De(e.messages)), { textColorClasses: o, textColorStyles: r } = We(g(() => e.color));
  return le(() => d(Ke, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [r.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && n.value.map((a, s) => d("div", { class: "v-messages__message", key: `${s}-${n.value}` }, [t.message ? t.message({ message: a }) : a]))] })), {};
} }), ko = N({ focused: Boolean, "onUpdate:focused": Ne() }, "focus");
function un(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = fe(e, "focused");
  return { focusClasses: g(() => ({ [`${l}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const fs = Symbol.for("vuetify:form");
function Co() {
  return ve(fs, null);
}
const ms = N({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...ko() }, "validation"), cn = N({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ne(), "onClick:append": Ne(), ...se(), ...Ge(), ...ms() }, "VInput"), al = Y()({ name: "VInput", props: { ...cn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const { densityClasses: r } = He(e), { rtlClasses: a } = Ot(), { InputIcon: s } = xo(e), i = je(), c = g(() => e.id || `input-${i}`), v = g(() => `${c.value}-messages`), { errorMessages: p, isDirty: u, isDisabled: f, isReadonly: y, isPristine: C, isValid: m, isValidating: S, reset: w, resetValidation: B, validate: $, validationClasses: A } = function(P) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze(), D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : je();
    const b = fe(P, "modelValue"), V = g(() => P.validationValue === void 0 ? b.value : P.validationValue), _ = Co(), F = H([]), I = ce(!0), T = g(() => !(!De(b.value === "" ? null : b.value).length && !De(V.value === "" ? null : V.value).length)), M = g(() => !!(P.disabled ?? (_ == null ? void 0 : _.isDisabled.value))), O = g(() => !!(P.readonly ?? (_ == null ? void 0 : _.isReadonly.value))), j = g(() => P.errorMessages.length ? De(P.errorMessages).slice(0, Math.max(0, +P.maxErrors)) : F.value), z = g(() => {
      let Q = (P.validateOn ?? (_ == null ? void 0 : _.validateOn.value)) || "input";
      Q === "lazy" && (Q = "input lazy");
      const de = new Set((Q == null ? void 0 : Q.split(" ")) ?? []);
      return { blur: de.has("blur") || de.has("input"), input: de.has("input"), submit: de.has("submit"), lazy: de.has("lazy") };
    }), K = g(() => !P.error && !P.errorMessages.length && (!P.rules.length || (I.value ? !F.value.length && !z.value.lazy || null : !F.value.length))), L = ce(!1), R = g(() => ({ [`${x}--error`]: K.value === !1, [`${x}--dirty`]: T.value, [`${x}--disabled`]: M.value, [`${x}--readonly`]: O.value })), W = g(() => P.name ?? h(D));
    function U() {
      b.value = null, Ie(ne);
    }
    function ne() {
      I.value = !0, z.value.lazy ? F.value = [] : ee(!0);
    }
    async function ee() {
      let Q = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const de = [];
      L.value = !0;
      for (const ke of P.rules) {
        if (de.length >= +(P.maxErrors ?? 1))
          break;
        const Sl = typeof ke == "function" ? ke : () => ke, Te = await Sl(V.value);
        Te !== !0 && (Te === !1 || typeof Te == "string" ? de.push(Te || "") : console.warn(`${Te} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return F.value = de, L.value = !1, I.value = Q, F.value;
    }
    return Ul(() => {
      _ == null || _.register({ id: W.value, validate: ee, reset: U, resetValidation: ne });
    }), nt(() => {
      _ == null || _.unregister(W.value);
    }), gt(async () => {
      z.value.lazy || await ee(!0), _ == null || _.update(W.value, K.value, j.value);
    }), tt(() => z.value.input, () => {
      Z(V, () => {
        if (V.value != null)
          ee();
        else if (P.focused) {
          const Q = Z(() => P.focused, (de) => {
            de || ee(), Q();
          });
        }
      });
    }), tt(() => z.value.blur, () => {
      Z(() => P.focused, (Q) => {
        Q || ee();
      });
    }), Z(K, () => {
      _ == null || _.update(W.value, K.value, j.value);
    }), { errorMessages: j, isDirty: T, isDisabled: M, isReadonly: O, isPristine: I, isValid: K, isValidating: L, reset: U, resetValidation: ne, validate: ee, validationClasses: R };
  }(e, "v-input", c), E = g(() => ({ id: c, messagesId: v, isDirty: u, isDisabled: f, isReadonly: y, isPristine: C, isValid: m, isValidating: S, reset: w, resetValidation: B, validate: $ })), k = g(() => {
    var P;
    return (P = e.errorMessages) != null && P.length || !C.value && p.value.length ? p.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return le(() => {
    var V, _, F, I;
    const P = !(!n.prepend && !e.prependIcon), x = !(!n.append && !e.appendIcon), D = k.value.length > 0, b = !e.hideDetails || e.hideDetails === "auto" && (D || !!n.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, r.value, a.value, A.value, e.class], style: e.style }, [P && d("div", { key: "prepend", class: "v-input__prepend" }, [(V = n.prepend) == null ? void 0 : V.call(n, E.value), e.prependIcon && d(s, { key: "prepend-icon", name: "prepend" }, null)]), n.default && d("div", { class: "v-input__control" }, [(_ = n.default) == null ? void 0 : _.call(n, E.value)]), x && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(s, { key: "append-icon", name: "append" }, null), (F = n.append) == null ? void 0 : F.call(n, E.value)]), b && d("div", { class: "v-input__details" }, [d(vs, { id: v.value, active: D, messages: k.value }, { message: n.message }), (I = n.details) == null ? void 0 : I.call(n, E.value)])]);
  }), { reset: w, resetValidation: B, validate: $ };
} }), gs = N({ ...cn(), ...ql(wo(), ["inline"]) }, "VCheckbox"), dn = Y()({ name: "VCheckbox", inheritAttrs: !1, props: gs(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = fe(e, "modelValue"), { isFocused: r, focus: a, blur: s } = un(e), i = je(), c = g(() => e.id || `checkbox-${i}`);
  return le(() => {
    const [v, p] = Yl(t), [u, f] = al.filterProps(e), [y, C] = vt.filterProps(e);
    return d(al, X({ class: ["v-checkbox", e.class] }, v, u, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, id: c.value, focused: r.value, style: e.style }), { ...n, default: (m) => {
      let { id: S, messagesId: w, isDisabled: B, isReadonly: $ } = m;
      return d(vt, X(y, { id: S.value, "aria-describedby": w.value, disabled: B.value, readonly: $.value }, p, { modelValue: o.value, "onUpdate:modelValue": (A) => o.value = A, onFocus: a, onBlur: s }), n);
    } });
  }), {};
} }), Bo = N({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...Et() }, "VResponsive"), Hn = Y()({ name: "VResponsive", props: Bo(), setup(e, l) {
  let { slots: t } = l;
  const { aspectStyles: n } = function(r) {
    return { aspectStyles: g(() => {
      const a = Number(r.aspectRatio);
      return a ? { paddingBottom: String(1 / a * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = It(e);
  return le(() => {
    var r;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: n.value }, null), (r = t.additional) == null ? void 0 : r.call(t), t.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function Kn(e, l) {
  var n;
  const t = (n = e._observe) == null ? void 0 : n[l.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Po = { mounted: function(e, l) {
  if (!tn)
    return;
  const t = l.modifiers || {}, n = l.value, { handler: o, options: r } = typeof n == "object" ? n : { handler: n, options: {} }, a = new IntersectionObserver(function() {
    var p;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const c = (p = e._observe) == null ? void 0 : p[l.instance.$.uid];
    if (!c)
      return;
    const v = s.some((u) => u.isIntersecting);
    !o || t.quiet && !c.init || t.once && !v && !c.init || o(v, s, i), v && t.once ? Kn(e, l) : c.init = !0;
  }, r);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: a }, a.observe(e);
}, unmounted: Kn }, ys = N({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...Bo(), ...se(), ...Dt() }, "VImg"), hs = Y()({ name: "VImg", directives: { intersect: Po }, props: ys(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const o = ce(""), r = H(), a = ce(e.eager ? "loading" : "idle"), s = ce(), i = ce(), c = g(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), v = g(() => c.value.aspect || s.value / i.value || 0);
  function p(P) {
    if ((!e.eager || !P) && (!tn || P || e.eager)) {
      if (a.value = "loading", c.value.lazySrc) {
        const x = new Image();
        x.src = c.value.lazySrc, m(x, null);
      }
      c.value.src && Ie(() => {
        var x, D;
        if (t("loadstart", ((x = r.value) == null ? void 0 : x.currentSrc) || c.value.src), (D = r.value) == null ? void 0 : D.complete) {
          if (r.value.naturalWidth || f(), a.value === "error")
            return;
          v.value || m(r.value, null), u();
        } else
          v.value || m(r.value), y();
      });
    }
  }
  function u() {
    var P;
    y(), a.value = "loaded", t("load", ((P = r.value) == null ? void 0 : P.currentSrc) || c.value.src);
  }
  function f() {
    var P;
    a.value = "error", t("error", ((P = r.value) == null ? void 0 : P.currentSrc) || c.value.src);
  }
  function y() {
    const P = r.value;
    P && (o.value = P.currentSrc || P.src);
  }
  Z(() => e.src, () => {
    p(a.value !== "idle");
  }), Z(v, (P, x) => {
    !P && x && r.value && m(r.value);
  }), Ul(() => p());
  let C = -1;
  function m(P) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const D = () => {
      clearTimeout(C);
      const { naturalHeight: b, naturalWidth: V } = P;
      b || V ? (s.value = V, i.value = b) : P.complete || a.value !== "loading" || x == null ? (P.currentSrc.endsWith(".svg") || P.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : C = window.setTimeout(D, x);
    };
    D();
  }
  const S = g(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), w = () => {
    var D;
    if (!c.value.src || a.value === "idle")
      return null;
    const P = d("img", { class: ["v-img__img", S.value], src: c.value.src, srcset: c.value.srcset, alt: e.alt, sizes: e.sizes, ref: r, onLoad: u, onError: f }, null), x = (D = n.sources) == null ? void 0 : D.call(n);
    return d(Ke, { transition: e.transition, appear: !0 }, { default: () => [Fe(x ? d("picture", { class: "v-img__picture" }, [x, P]) : P, [[yt, a.value === "loaded"]])] });
  }, B = () => d(Ke, { transition: e.transition }, { default: () => [c.value.lazySrc && a.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", S.value], src: c.value.lazySrc, alt: e.alt }, null)] }), $ = () => n.placeholder ? d(Ke, { transition: e.transition, appear: !0 }, { default: () => [(a.value === "loading" || a.value === "error" && !n.error) && d("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null, A = () => n.error ? d(Ke, { transition: e.transition, appear: !0 }, { default: () => [a.value === "error" && d("div", { class: "v-img__error" }, [n.error()])] }) : null, E = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, k = ce(!1);
  {
    const P = Z(v, (x) => {
      x && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          k.value = !0;
        });
      }), P());
    });
  }
  return le(() => {
    const [P] = Hn.filterProps(e);
    return Fe(d(Hn, X({ class: ["v-img", { "v-img--booting": !k.value }, e.class], style: e.style }, P, { aspectRatio: v.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(ae, null, [d(w, null, null), d(B, null, null), d(E, null, null), d($, null, null), d(A, null, null)]), default: n.default }), [[qe("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: r, state: a, naturalWidth: s, naturalHeight: i };
} }), bs = N({ start: Boolean, end: Boolean, icon: pe, image: String, ...se(), ...Ge(), ...Je(), ...jt(), ...xe(), ...Se(), ...ot({ variant: "flat" }) }, "VAvatar"), ol = Y()({ name: "VAvatar", props: bs(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Be(e), { colorClasses: o, colorStyles: r, variantClasses: a } = yl(e), { densityClasses: s } = He(e), { roundedClasses: i } = Ze(e), { sizeClasses: c, sizeStyles: v } = Rt(e);
  return le(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, o.value, s.value, i.value, c.value, a.value, e.class], style: [r.value, v.value, e.style] }, { default: () => {
    var p;
    return [e.image ? d(hs, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(he, { key: "icon", icon: e.icon }, null) : (p = t.default) == null ? void 0 : p.call(t), gl(!1, "v-avatar")];
  } })), {};
} }), _o = Symbol.for("vuetify:v-chip-group"), Ss = N({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: at }, ...se(), ...Za({ selectedClass: "v-chip--selected" }), ...xe(), ...Se(), ...ot({ variant: "tonal" }) }, "VChipGroup");
Y()({ name: "VChipGroup", props: Ss(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Be(e), { isSelected: o, select: r, next: a, prev: s, selected: i } = to(e, _o);
  return Xe({ VChip: { color: G(e, "color"), disabled: G(e, "disabled"), filter: G(e, "filter"), variant: G(e, "variant") } }), le(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, n.value, e.class], style: e.style }, { default: () => {
    var c;
    return [(c = t.default) == null ? void 0 : c.call(t, { isSelected: o, select: r, next: a, prev: s, selected: i.value })];
  } })), {};
} });
const ws = N({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Ne(), onClickOnce: Ne(), ...Tt(), ...se(), ...Ge(), ...Mt(), ...Qa(), ...Je(), ...an(), ...jt(), ...xe({ tag: "span" }), ...Se(), ...ot({ variant: "tonal" }) }, "VChip"), xs = Y()({ name: "VChip", directives: { Ripple: hl }, props: ws(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { t: r } = ht(), { borderClasses: a } = Lt(e), { colorClasses: s, colorStyles: i, variantClasses: c } = yl(e), { densityClasses: v } = He(e), { elevationClasses: p } = Nt(e), { roundedClasses: u } = Ze(e), { sizeClasses: f } = Rt(e), { themeClasses: y } = Be(e), C = fe(e, "modelValue"), m = eo(e, _o, !1), S = nn(e, t), w = g(() => e.link !== !1 && S.isLink.value), B = g(() => !e.disabled && e.link !== !1 && (!!m || e.link || S.isClickable.value)), $ = g(() => ({ "aria-label": r(e.closeLabel), onClick(k) {
    C.value = !1, n("click:close", k);
  } }));
  function A(k) {
    var P;
    n("click", k), B.value && ((P = S.navigate) == null || P.call(S, k), m == null || m.toggle());
  }
  function E(k) {
    k.key !== "Enter" && k.key !== " " || (k.preventDefault(), A(k));
  }
  return () => {
    const k = S.isLink.value ? "a" : e.tag, P = !(!e.appendIcon && !e.appendAvatar), x = !(!P && !o.append), D = !(!o.close && !e.closable), b = !(!o.filter && !e.filter) && m, V = !(!e.prependIcon && !e.prependAvatar), _ = !(!V && !o.prepend), F = !m || m.isSelected.value;
    return C.value && Fe(d(k, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": B.value, "v-chip--filter": b, "v-chip--pill": e.pill }, y.value, a.value, F ? s.value : void 0, v.value, p.value, u.value, f.value, c.value, m == null ? void 0 : m.selectedClass.value, e.class], style: [F ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: S.href.value, tabindex: B.value ? 0 : void 0, onClick: A, onKeydown: B.value && !w.value && E }, { default: () => {
      var I;
      return [gl(B.value, "v-chip"), b && d(ka, { key: "filter" }, { default: () => [Fe(d("div", { class: "v-chip__filter" }, [o.filter ? Fe(d(Ee, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[qe("slot"), o.filter, "default"]]) : d(he, { key: "filter-icon", icon: e.filterIcon }, null)]), [[yt, m.isSelected.value]])] }), _ && d("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? d(Ee, { key: "prepend-defaults", disabled: !V, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : d(ae, null, [e.prependIcon && d(he, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(ol, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((I = o.default) == null ? void 0 : I.call(o, { isSelected: m == null ? void 0 : m.isSelected.value, selectedClass: m == null ? void 0 : m.selectedClass.value, select: m == null ? void 0 : m.select, toggle: m == null ? void 0 : m.toggle, value: m == null ? void 0 : m.value.value, disabled: e.disabled })) ?? e.text]), x && d("div", { key: "append", class: "v-chip__append" }, [o.append ? d(Ee, { key: "append-defaults", disabled: !P, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : d(ae, null, [e.appendIcon && d(he, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(ol, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), D && d("div", X({ key: "close", class: "v-chip__close" }, $.value), [o.close ? d(Ee, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : d(he, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[qe("ripple"), B.value && e.ripple, null]]);
  };
} }), Rl = Symbol.for("vuetify:list");
function Ao() {
  const e = ve(Rl, { hasPrepend: ce(!1), updateHasPrepend: () => null }), l = { hasPrepend: ce(!1), updateHasPrepend: (t) => {
    t && (l.hasPrepend.value = t);
  } };
  return ye(Rl, l), e;
}
function $o() {
  return ve(Rl, null);
}
const ks = { open: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (t) {
    const r = /* @__PURE__ */ new Set();
    r.add(l);
    let a = o.get(l);
    for (; a != null; )
      r.add(a), a = o.get(a);
    return r;
  }
  return n.delete(l), n;
}, select: () => null }, Fo = { open: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (t) {
    let r = o.get(l);
    for (n.add(l); r != null && r !== l; )
      n.add(r), r = o.get(r);
    return n;
  }
  return n.delete(l), n;
}, select: () => null }, Cs = { open: Fo.open, select: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (!t)
    return n;
  const r = [];
  let a = o.get(l);
  for (; a != null; )
    r.push(a), a = o.get(a);
  return new Set(r);
} }, Wl = (e) => {
  const l = { select: (t) => {
    let { id: n, value: o, selected: r } = t;
    if (n = Ue(n), e && !o) {
      const a = Array.from(r.entries()).reduce((s, i) => {
        let [c, v] = i;
        return v === "on" ? [...s, c] : s;
      }, []);
      if (a.length === 1 && a[0] === n)
        return r;
    }
    return r.set(n, o ? "on" : "off"), r;
  }, in: (t, n, o) => {
    let r = /* @__PURE__ */ new Map();
    for (const a of t || [])
      r = l.select({ id: a, value: !0, selected: new Map(r), children: n, parents: o });
    return r;
  }, out: (t) => {
    const n = [];
    for (const [o, r] of t.entries())
      r === "on" && n.push(o);
    return n;
  } };
  return l;
}, Un = (e) => {
  const l = Wl(e);
  return { select: (t) => {
    let { selected: n, id: o, ...r } = t;
    o = Ue(o);
    const a = n.has(o) ? /* @__PURE__ */ new Map([[o, n.get(o)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...r, id: o, selected: a });
  }, in: (t, n, o) => {
    let r = /* @__PURE__ */ new Map();
    return t != null && t.length && (r = l.in(t.slice(0, 1), n, o)), r;
  }, out: (t, n, o) => l.out(t, n, o) };
}, _t = Symbol.for("vuetify:nested"), Vo = { id: ce(), root: { register: () => null, unregister: () => null, parents: H(/* @__PURE__ */ new Map()), children: H(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: H(/* @__PURE__ */ new Set()), selected: H(/* @__PURE__ */ new Map()), selectedValues: H([]) } }, Bs = N({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Ps = (e) => {
  let l = !1;
  const t = H(/* @__PURE__ */ new Map()), n = H(/* @__PURE__ */ new Map()), o = fe(e, "opened", e.opened, (p) => new Set(p), (p) => [...p.values()]), r = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((p) => {
          const u = Un(p);
          return { select: (f) => {
            let { id: y, selected: C, children: m, ...S } = f;
            return y = Ue(y), m.has(y) ? C : u.select({ id: y, selected: C, children: m, ...S });
          }, in: u.in, out: u.out };
        })(e.mandatory);
      case "leaf":
        return ((p) => {
          const u = Wl(p);
          return { select: (f) => {
            let { id: y, selected: C, children: m, ...S } = f;
            return y = Ue(y), m.has(y) ? C : u.select({ id: y, selected: C, children: m, ...S });
          }, in: u.in, out: u.out };
        })(e.mandatory);
      case "independent":
        return Wl(e.mandatory);
      case "single-independent":
        return Un(e.mandatory);
      default:
        return ((p) => {
          const u = { select: (f) => {
            let { id: y, value: C, selected: m, children: S, parents: w } = f;
            y = Ue(y);
            const B = new Map(m), $ = [y];
            for (; $.length; ) {
              const E = $.shift();
              m.set(E, C ? "on" : "off"), S.has(E) && $.push(...S.get(E));
            }
            let A = w.get(y);
            for (; A; ) {
              const E = S.get(A), k = E.every((x) => m.get(x) === "on"), P = E.every((x) => !m.has(x) || m.get(x) === "off");
              m.set(A, k ? "on" : P ? "off" : "indeterminate"), A = w.get(A);
            }
            return p && !C && Array.from(m.entries()).reduce((k, P) => {
              let [x, D] = P;
              return D === "on" ? [...k, x] : k;
            }, []).length === 0 ? B : m;
          }, in: (f, y, C) => {
            let m = /* @__PURE__ */ new Map();
            for (const S of f || [])
              m = u.select({ id: S, value: !0, selected: new Map(m), children: y, parents: C });
            return m;
          }, out: (f, y) => {
            const C = [];
            for (const [m, S] of f.entries())
              S !== "on" || y.has(m) || C.push(m);
            return C;
          } };
          return u;
        })(e.mandatory);
    }
  }), a = g(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Cs;
      case "single":
        return ks;
      default:
        return Fo;
    }
  }), s = fe(e, "selected", e.selected, (p) => r.value.in(p, t.value, n.value), (p) => r.value.out(p, t.value, n.value));
  function i(p) {
    const u = [];
    let f = p;
    for (; f != null; )
      u.unshift(f), f = n.value.get(f);
    return u;
  }
  nt(() => {
    l = !0;
  });
  const c = we("nested"), v = { id: ce(), root: { opened: o, selected: s, selectedValues: g(() => {
    const p = [];
    for (const [u, f] of s.value.entries())
      f === "on" && p.push(u);
    return p;
  }), register: (p, u, f) => {
    u && p !== u && n.value.set(p, u), f && t.value.set(p, []), u != null && t.value.set(u, [...t.value.get(u) || [], p]);
  }, unregister: (p) => {
    if (l)
      return;
    t.value.delete(p);
    const u = n.value.get(p);
    if (u) {
      const f = t.value.get(u) ?? [];
      t.value.set(u, f.filter((y) => y !== p));
    }
    n.value.delete(p), o.value.delete(p);
  }, open: (p, u, f) => {
    c.emit("click:open", { id: p, value: u, path: i(p), event: f });
    const y = a.value.open({ id: p, value: u, opened: new Set(o.value), children: t.value, parents: n.value, event: f });
    y && (o.value = y);
  }, openOnSelect: (p, u, f) => {
    const y = a.value.select({ id: p, value: u, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: n.value, event: f });
    y && (o.value = y);
  }, select: (p, u, f) => {
    c.emit("click:select", { id: p, value: u, path: i(p), event: f });
    const y = r.value.select({ id: p, value: u, selected: new Map(s.value), children: t.value, parents: n.value, event: f });
    y && (s.value = y), v.root.openOnSelect(p, u, f);
  }, children: t, parents: n } };
  return ye(_t, v), v.root;
}, Eo = (e, l) => {
  const t = ve(_t, Vo), n = Symbol(je()), o = g(() => e.value !== void 0 ? e.value : n), r = { ...t, id: o, open: (a, s) => t.root.open(o.value, a, s), openOnSelect: (a, s) => t.root.openOnSelect(o.value, a, s), isOpen: g(() => t.root.opened.value.has(o.value)), parent: g(() => t.root.parents.value.get(o.value)), select: (a, s) => t.root.select(o.value, a, s), isSelected: g(() => t.root.selected.value.get(Ue(o.value)) === "on"), isIndeterminate: g(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: g(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, l), nt(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), l && ye(_t, r), r;
}, _s = dt({ name: "VListGroupActivator", setup(e, l) {
  let { slots: t } = l;
  return (() => {
    const n = ve(_t, Vo);
    ye(_t, { ...n, isGroupActivator: !0 });
  })(), () => {
    var n;
    return (n = t.default) == null ? void 0 : n.call(t);
  };
} }), As = N({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...xe() }, "VListGroup"), qn = Y()({ name: "VListGroup", props: As(), setup(e, l) {
  let { slots: t } = l;
  const { isOpen: n, open: o, id: r } = Eo(G(e, "value"), !0), a = g(() => `v-list-group--id-${String(r.value)}`), s = $o(), { isBooted: i } = function() {
    const f = ce(!1);
    return gt(() => {
      window.requestAnimationFrame(() => {
        f.value = !0;
      });
    }), { ssrBootStyles: g(() => f.value ? void 0 : { transition: "none !important" }), isBooted: Kl(f) };
  }();
  function c(f) {
    o(!n.value, f);
  }
  const v = g(() => ({ onClick: c, class: "v-list-group__header", id: a.value })), p = g(() => n.value ? e.collapseIcon : e.expandIcon), u = g(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && p.value, appendIcon: e.appendIcon || !e.subgroup && p.value, title: e.title, value: e.value } }));
  return le(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style }, { default: () => [t.activator && d(Ee, { defaults: u.value }, { default: () => [d(_s, null, { default: () => [t.activator({ props: v.value, isOpen: n.value })] })] }), d(Ke, { transition: { component: Ar }, disabled: !i.value }, { default: () => {
    var f;
    return [Fe(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": a.value }, [(f = t.default) == null ? void 0 : f.call(t)]), [[yt, n.value]])];
  } })] })), {};
} }), $s = ga("v-list-item-subtitle"), Fs = ga("v-list-item-title"), Vs = N({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Ne(), onClickOnce: Ne(), ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), ...Je(), ...an(), ...xe(), ...Se(), ...ot({ variant: "text" }) }, "VListItem"), rl = Y()({ name: "VListItem", directives: { Ripple: hl }, props: Vs(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const r = nn(e, t), a = g(() => e.value === void 0 ? r.href.value : e.value), { select: s, isSelected: i, isIndeterminate: c, isGroupActivator: v, root: p, parent: u, openOnSelect: f } = Eo(a, !1), y = $o(), C = g(() => {
    var O;
    return e.active !== !1 && (e.active || ((O = r.isActive) == null ? void 0 : O.value) || i.value);
  }), m = g(() => e.link !== !1 && r.isLink.value), S = g(() => !e.disabled && e.link !== !1 && (e.link || r.isClickable.value || e.value != null && !!y)), w = g(() => e.rounded || e.nav), B = g(() => e.color ?? e.activeColor), $ = g(() => ({ color: C.value ? B.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Z(() => {
    var O;
    return (O = r.isActive) == null ? void 0 : O.value;
  }, (O) => {
    O && u.value != null && p.open(u.value, !0), O && f(O);
  }, { immediate: !0 });
  const { themeClasses: A } = Be(e), { borderClasses: E } = Lt(e), { colorClasses: k, colorStyles: P, variantClasses: x } = yl($), { densityClasses: D } = He(e), { dimensionStyles: b } = It(e), { elevationClasses: V } = Nt(e), { roundedClasses: _ } = Ze(w), F = g(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), I = g(() => ({ isActive: C.value, select: s, isSelected: i.value, isIndeterminate: c.value }));
  function T(O) {
    var j;
    o("click", O), !v && S.value && ((j = r.navigate) == null || j.call(r, O), e.value != null && s(!i.value, O));
  }
  function M(O) {
    O.key !== "Enter" && O.key !== " " || (O.preventDefault(), T(O));
  }
  return le(() => {
    const O = m.value ? "a" : e.tag, j = n.title || e.title, z = n.subtitle || e.subtitle, K = !(!e.appendAvatar && !e.appendIcon), L = !(!K && !n.append), R = !(!e.prependAvatar && !e.prependIcon), W = !(!R && !n.prepend);
    var U, ne;
    return y == null || y.updateHasPrepend(W), e.activeColor && (U = "active-color", ne = ["color", "base-color"], ne = Array.isArray(ne) ? ne.slice(0, -1).map((ee) => `'${ee}'`).join(", ") + ` or '${ne.at(-1)}'` : `'${ne}'`, pl(`[Vuetify UPGRADE] '${U}' is deprecated, use ${ne} instead.`)), Fe(d(O, { class: ["v-list-item", { "v-list-item--active": C.value, "v-list-item--disabled": e.disabled, "v-list-item--link": S.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !W && (y == null ? void 0 : y.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && C.value }, A.value, E.value, k.value, D.value, V.value, F.value, _.value, x.value, e.class], style: [P.value, b.value, e.style], href: r.href.value, tabindex: S.value ? y ? -2 : 0 : void 0, onClick: T, onKeydown: S.value && !m.value && M }, { default: () => {
      var ee;
      return [gl(S.value || C.value, "v-list-item"), W && d("div", { key: "prepend", class: "v-list-item__prepend" }, [n.prepend ? d(Ee, { key: "prepend-defaults", disabled: !R, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.prepend) == null ? void 0 : Q.call(n, I.value)];
      } }) : d(ae, null, [e.prependAvatar && d(ol, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(he, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [j && d(Fs, { key: "title" }, { default: () => {
        var Q;
        return [((Q = n.title) == null ? void 0 : Q.call(n, { title: e.title })) ?? e.title];
      } }), z && d($s, { key: "subtitle" }, { default: () => {
        var Q;
        return [((Q = n.subtitle) == null ? void 0 : Q.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ee = n.default) == null ? void 0 : ee.call(n, I.value)]), L && d("div", { key: "append", class: "v-list-item__append" }, [n.append ? d(Ee, { key: "append-defaults", disabled: !K, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.append) == null ? void 0 : Q.call(n, I.value)];
      } }) : d(ae, null, [e.appendIcon && d(he, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(ol, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[qe("ripple"), S.value && e.ripple]]);
  }), {};
} }), Es = N({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...xe() }, "VListSubheader"), Is = Y()({ name: "VListSubheader", props: Es(), setup(e, l) {
  let { slots: t } = l;
  const { textColorClasses: n, textColorStyles: o } = We(G(e, "color"));
  return le(() => {
    const r = !(!t.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var a;
      return [r && d("div", { class: "v-list-subheader__text" }, [((a = t.default) == null ? void 0 : a.call(t)) ?? e.title])];
    } });
  }), {};
} }), Os = N({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...Se() }, "VDivider"), Ds = Y()({ name: "VDivider", props: Os(), setup(e, l) {
  let { attrs: t } = l;
  const { themeClasses: n } = Be(e), { textColorClasses: o, textColorStyles: r } = We(G(e, "color")), a = g(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = J(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = J(e.thickness)), s;
  });
  return le(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, n.value, o.value, e.class], style: [a.value, r.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), Ts = N({ items: Array }, "VListChildren"), Io = Y()({ name: "VListChildren", props: Ts(), setup(e, l) {
  let { slots: t } = l;
  return Ao(), () => {
    var n, o;
    return ((n = t.default) == null ? void 0 : n.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((r) => {
      var f, y;
      let { children: a, props: s, type: i, raw: c } = r;
      if (i === "divider")
        return ((f = t.divider) == null ? void 0 : f.call(t, { props: s })) ?? d(Ds, s, null);
      if (i === "subheader")
        return ((y = t.subheader) == null ? void 0 : y.call(t, { props: s })) ?? d(Is, s, null);
      const v = { subtitle: t.subtitle ? (C) => {
        var m;
        return (m = t.subtitle) == null ? void 0 : m.call(t, { ...C, item: c });
      } : void 0, prepend: t.prepend ? (C) => {
        var m;
        return (m = t.prepend) == null ? void 0 : m.call(t, { ...C, item: c });
      } : void 0, append: t.append ? (C) => {
        var m;
        return (m = t.append) == null ? void 0 : m.call(t, { ...C, item: c });
      } : void 0, title: t.title ? (C) => {
        var m;
        return (m = t.title) == null ? void 0 : m.call(t, { ...C, item: c });
      } : void 0 }, [p, u] = qn.filterProps(s);
      return a ? d(qn, X({ value: s == null ? void 0 : s.value }, p), { activator: (C) => {
        let { props: m } = C;
        return t.header ? t.header({ props: { ...s, ...m } }) : d(rl, X(s, m), v);
      }, default: () => d(Io, { items: a }, t) }) : t.item ? t.item({ props: s }) : d(rl, s, v);
    }));
  };
} }), Oo = N({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Do(e, l) {
  const t = Ce(l, e.itemTitle, l), n = e.returnObject ? l : Ce(l, e.itemValue, t), o = Ce(l, e.itemChildren), r = { title: t, value: n, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? Vt(l, ["children"])[1] : l : Ce(l, e.itemProps) };
  return { title: String(r.title ?? ""), value: r.value, props: r, children: Array.isArray(o) ? To(e, o) : void 0, raw: l };
}
function To(e, l) {
  const t = [];
  for (const n of l)
    t.push(Do(e, n));
  return t;
}
function Ls(e) {
  return function(l, t) {
    function n(r) {
      return r.filter((a) => a !== null || l.value.some((s) => s.value === null)).map((a) => l.value.find((s) => at(a, s.value)) ?? t(a));
    }
    function o(r) {
      return r.map((a) => {
        let { value: s } = a;
        return s;
      });
    }
    return { items: l, transformIn: n, transformOut: o };
  }(g(() => To(e, e.items)), (l) => Do(e, l));
}
function Ms(e, l) {
  const t = Ce(l, e.itemType, "item"), n = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : Ce(l, e.itemTitle), o = Ce(l, e.itemValue, void 0), r = Ce(l, e.itemChildren), a = { title: n, value: o, ...e.itemProps === !0 ? Vt(l, ["children"])[1] : Ce(l, e.itemProps) };
  return { type: t, title: a.title, value: a.value, props: a, children: t === "item" && r ? Lo(e, r) : void 0, raw: l };
}
function Lo(e, l) {
  const t = [];
  for (const n of l)
    t.push(Ms(e, n));
  return t;
}
const Ns = N({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...Bs({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), itemType: { type: String, default: "type" }, ...Oo(), ...Je(), ...xe(), ...Se(), ...ot({ variant: "text" }) }, "VList"), js = Y()({ name: "VList", props: Ns(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { items: n } = function(x) {
    return { items: g(() => Lo(x, x.items)) };
  }(e), { themeClasses: o } = Be(e), { backgroundColorClasses: r, backgroundColorStyles: a } = pt(G(e, "bgColor")), { borderClasses: s } = Lt(e), { densityClasses: i } = He(e), { dimensionStyles: c } = It(e), { elevationClasses: v } = Nt(e), { roundedClasses: p } = Ze(e), { open: u, select: f } = Ps(e), y = g(() => e.lines ? `v-list--${e.lines}-line` : void 0), C = G(e, "activeColor"), m = G(e, "baseColor"), S = G(e, "color");
  Ao(), Xe({ VListGroup: { activeColor: C, baseColor: m, color: S }, VListItem: { activeClass: G(e, "activeClass"), activeColor: C, baseColor: m, color: S, density: G(e, "density"), disabled: G(e, "disabled"), lines: G(e, "lines"), nav: G(e, "nav"), variant: G(e, "variant") } });
  const w = ce(!1), B = H();
  function $(x) {
    w.value = !0;
  }
  function A(x) {
    w.value = !1;
  }
  function E(x) {
    var D;
    w.value || x.relatedTarget && ((D = B.value) != null && D.contains(x.relatedTarget)) || P();
  }
  function k(x) {
    if (B.value) {
      if (x.key === "ArrowDown")
        P("next");
      else if (x.key === "ArrowUp")
        P("prev");
      else if (x.key === "Home")
        P("first");
      else {
        if (x.key !== "End")
          return;
        P("last");
      }
      x.preventDefault();
    }
  }
  function P(x) {
    if (B.value)
      return Zt(B.value, x);
  }
  return le(() => d(e.tag, { ref: B, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, r.value, s.value, i.value, v.value, y.value, p.value, e.class], style: [a.value, c.value, e.style], tabindex: e.disabled || w.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: $, onFocusout: A, onFocus: E, onKeydown: k }, { default: () => [d(Io, { items: n.value }, t)] })), { open: u, select: f, focus: P };
} }), Rs = N({ id: String, ...ql(Aa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: wa } }), ["absolute"]) }, "VMenu"), Ws = Y()({ name: "VMenu", props: Rs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { scopeId: o } = Pa(), r = je(), a = g(() => e.id || `v-menu-${r}`), s = H(), i = ve(Ml, null), c = ce(0);
  function v() {
    i == null || i.closeParents();
  }
  function p(y) {
    var C, m;
    e.disabled || y.key === "Tab" && (n.value = !1, (m = (C = s.value) == null ? void 0 : C.activatorEl) == null || m.focus());
  }
  function u(y) {
    var m;
    if (e.disabled)
      return;
    const C = (m = s.value) == null ? void 0 : m.contentEl;
    C && n.value ? y.key === "ArrowDown" ? (y.preventDefault(), Zt(C, "next")) : y.key === "ArrowUp" && (y.preventDefault(), Zt(C, "prev")) : ["ArrowDown", "ArrowUp"].includes(y.key) && (n.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => u(y))));
  }
  ye(Ml, { register() {
    ++c.value;
  }, unregister() {
    --c.value;
  }, closeParents() {
    setTimeout(() => {
      c.value || (n.value = !1, i == null || i.closeParents());
    }, 40);
  } }), Z(n, (y) => {
    y ? i == null || i.register() : i == null || i.unregister();
  });
  const f = g(() => X({ "aria-haspopup": "menu", "aria-expanded": String(n.value), "aria-owns": a.value, onKeydown: u }, e.activatorProps));
  return le(() => {
    const [y] = Ln.filterProps(e);
    return d(Ln, X({ ref: s, class: ["v-menu", e.class], style: e.style }, y, { modelValue: n.value, "onUpdate:modelValue": (C) => n.value = C, absolute: !0, activatorProps: f.value, "onClick:outside": v, onKeydown: p }, o), { activator: t.activator, default: function() {
      for (var C = arguments.length, m = new Array(C), S = 0; S < C; S++)
        m[S] = arguments[S];
      return d(Ee, { root: "VMenu" }, { default: () => {
        var w;
        return [(w = t.default) == null ? void 0 : w.call(t, ...m)];
      } });
    } });
  }), on({ id: a, ΨopenChildren: c }, s);
} }), zs = N({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...Dt({ transition: { component: xa } }) }, "VCounter"), Gs = Y()({ name: "VCounter", functional: !0, props: zs(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => d(Ke, { transition: e.transition }, { default: () => [Fe(d("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: n.value, max: e.max, value: e.value }) : n.value]), [[yt, e.active]])] })), {};
} }), Hs = N({ floating: Boolean, ...se() }, "VFieldLabel"), Gt = Y()({ name: "VFieldLabel", props: Hs(), setup(e, l) {
  let { slots: t } = l;
  return le(() => d(yo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Ks = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Mo = N({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Ks.includes(e) }, "onClick:clear": Ne(), "onClick:appendInner": Ne(), "onClick:prependInner": Ne(), ...se(), ...rn(), ...Je(), ...Se() }, "VField"), Yn = Y()({ name: "VField", inheritAttrs: !1, props: { id: String, ...ko(), ...Mo() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { themeClasses: r } = Be(e), { loaderClasses: a } = sn(e), { focusClasses: s, isFocused: i, focus: c, blur: v } = un(e), { InputIcon: p } = xo(e), { roundedClasses: u } = Ze(e), { rtlClasses: f } = Ot(), y = g(() => e.dirty || e.active), C = g(() => !(e.singleLine || !e.label && !o.label)), m = je(), S = g(() => e.id || `input-${m}`), w = g(() => `${S.value}-messages`), B = H(), $ = H(), A = H(), E = g(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: k, backgroundColorStyles: P } = pt(G(e, "bgColor")), { textColorClasses: x, textColorStyles: D } = We(g(() => e.error || e.disabled ? void 0 : y.value && i.value ? e.color : e.baseColor));
  Z(y, (_) => {
    if (C.value) {
      const F = B.value.$el, I = $.value.$el;
      requestAnimationFrame(() => {
        const T = Jl(F), M = I.getBoundingClientRect(), O = M.x - T.x, j = M.y - T.y - (T.height / 2 - M.height / 2), z = M.width / 0.75, K = Math.abs(z - T.width) > 1 ? { maxWidth: J(z) } : void 0, L = getComputedStyle(F), R = getComputedStyle(I), W = 1e3 * parseFloat(L.transitionDuration) || 150, U = parseFloat(R.getPropertyValue("--v-field-label-scale")), ne = R.getPropertyValue("color");
        F.style.visibility = "visible", I.style.visibility = "hidden", st(F, { transform: `translate(${O}px, ${j}px) scale(${U})`, color: ne, ...K }, { duration: W, easing: Qt, direction: _ ? "normal" : "reverse" }).finished.then(() => {
          F.style.removeProperty("visibility"), I.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const b = g(() => ({ isActive: y, isFocused: i, controlRef: A, blur: v, focus: c }));
  function V(_) {
    _.target !== document.activeElement && _.preventDefault();
  }
  return le(() => {
    var O, j, z;
    const _ = e.variant === "outlined", F = o["prepend-inner"] || e.prependInnerIcon, I = !(!e.clearable && !o.clear), T = !!(o["append-inner"] || e.appendInnerIcon || I), M = o.label ? o.label({ ...b.value, label: e.label, props: { for: S.value } }) : e.label;
    return d("div", X({ class: ["v-field", { "v-field--active": y.value, "v-field--appended": T, "v-field--center-affix": e.centerAffix ?? !E.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": F, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !M, [`v-field--variant-${e.variant}`]: !0 }, r.value, k.value, s.value, a.value, u.value, f.value, e.class], style: [P.value, D.value, e.style], onClick: V }, t), [d("div", { class: "v-field__overlay" }, null), d(io, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), F && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(p, { key: "prepend-icon", name: "prependInner" }, null), (O = o["prepend-inner"]) == null ? void 0 : O.call(o, b.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && C.value && d(Gt, { key: "floating-label", ref: $, class: [x.value], floating: !0, for: S.value }, { default: () => [M] }), d(Gt, { ref: B, for: S.value }, { default: () => [M] }), (j = o.default) == null ? void 0 : j.call(o, { ...b.value, props: { id: S.value, class: "v-field__input", "aria-describedby": w.value }, focus: c, blur: v })]), I && d(ka, { key: "clear" }, { default: () => [Fe(d("div", { class: "v-field__clearable", onMousedown: (K) => {
      K.preventDefault(), K.stopPropagation();
    } }, [o.clear ? o.clear() : d(p, { name: "clear" }, null)]), [[yt, e.dirty]])] }), T && d("div", { key: "append", class: "v-field__append-inner" }, [(z = o["append-inner"]) == null ? void 0 : z.call(o, b.value), e.appendInnerIcon && d(p, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", x.value] }, [_ && d(ae, null, [d("div", { class: "v-field__outline__start" }, null), C.value && d("div", { class: "v-field__outline__notch" }, [d(Gt, { ref: $, floating: !0, for: S.value }, { default: () => [M] })]), d("div", { class: "v-field__outline__end" }, null)]), E.value && C.value && d(Gt, { ref: $, floating: !0, for: S.value }, { default: () => [M] })])]);
  }), { controlRef: A };
} }), Us = ["color", "file", "time", "date", "datetime-local", "week", "month"], No = N({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...cn(), ...Mo() }, "VTextField"), zl = Y()({ name: "VTextField", directives: { Intersect: Po }, inheritAttrs: !1, props: No(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const r = fe(e, "modelValue"), { isFocused: a, focus: s, blur: i } = un(e), c = g(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : (r.value ?? "").toString().length), v = g(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), p = g(() => ["plain", "underlined"].includes(e.variant));
  function u(E, k) {
    var P, x;
    e.autofocus && E && ((x = (P = k[0].target) == null ? void 0 : P.focus) == null || x.call(P));
  }
  const f = H(), y = H(), C = H(), m = g(() => Us.includes(e.type) || e.persistentPlaceholder || a.value || e.active);
  function S() {
    var E;
    C.value !== document.activeElement && ((E = C.value) == null || E.focus()), a.value || s();
  }
  function w(E) {
    n("mousedown:control", E), E.target !== C.value && (S(), E.preventDefault());
  }
  function B(E) {
    S(), n("click:control", E);
  }
  function $(E) {
    E.stopPropagation(), S(), Ie(() => {
      r.value = null, function(k) {
        for (var P = arguments.length, x = new Array(P > 1 ? P - 1 : 0), D = 1; D < P; D++)
          x[D - 1] = arguments[D];
        if (Array.isArray(k))
          for (const b of k)
            b(...x);
        else
          typeof k == "function" && k(...x);
      }(e["onClick:clear"], E);
    });
  }
  function A(E) {
    var P;
    const k = E.target;
    if (r.value = k.value, ((P = e.modelModifiers) == null ? void 0 : P.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const x = [k.selectionStart, k.selectionEnd];
      Ie(() => {
        k.selectionStart = x[0], k.selectionEnd = x[1];
      });
    }
  }
  return le(() => {
    const E = !!(o.counter || e.counter || e.counterValue), k = !(!E && !o.details), [P, x] = Yl(t), [{ modelValue: D, ...b }] = al.filterProps(e), [V] = function(_) {
      return Vt(_, Object.keys(Yn.props).filter((F) => !Il(F) && F !== "class" && F !== "style"));
    }(e);
    return d(al, X({ ref: f, modelValue: r.value, "onUpdate:modelValue": (_) => r.value = _, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, P, b, { centerAffix: !p.value, focused: a.value }), { ...o, default: (_) => {
      let { id: F, isDisabled: I, isDirty: T, isReadonly: M, isValid: O } = _;
      return d(Yn, X({ ref: y, onMousedown: w, onClick: B, "onClick:clear": $, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, V, { id: F.value, active: m.value || T.value, dirty: T.value || e.dirty, disabled: I.value, focused: a.value, error: O.value === !1 }), { ...o, default: (j) => {
        let { props: { class: z, ...K } } = j;
        const L = Fe(d("input", X({ ref: C, value: r.value, onInput: A, autofocus: e.autofocus, readonly: M.value, disabled: I.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: S, onBlur: i }, K, x), null), [[qe("intersect"), { handler: u }, null, { once: !0 }]]);
        return d(ae, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), d("div", { class: z, "data-no-activator": "" }, [o.default ? d(ae, null, [o.default(), L]) : gr(L)]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: k ? (_) => {
      var F;
      return d(ae, null, [(F = o.details) == null ? void 0 : F.call(o, _), E && d(ae, null, [d("span", null, null), d(Gs, { active: e.persistentCounter || a.value, value: c.value, max: v.value }, o.counter)])]);
    } : void 0 });
  }), on({}, f, y, C);
} }), qs = N({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: at }, ...Oo({ itemChildren: !1 }) }, "Select"), Ys = N({ ...qs(), ...ql(No({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...Dt({ transition: { component: wa } }) }, "VSelect"), Xs = Y()({ name: "VSelect", props: Ys(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { t: n } = ht(), o = H(), r = H(), a = fe(e, "menu"), s = g({ get: () => a.value, set: (_) => {
    var F;
    a.value && !_ && ((F = r.value) != null && F.ΨopenChildren) || (a.value = _);
  } }), { items: i, transformIn: c, transformOut: v } = Ls(e), p = fe(e, "modelValue", [], (_) => c(_ === null ? [null] : De(_)), (_) => {
    const F = v(_);
    return e.multiple ? F : F[0] ?? null;
  }), u = Co(), f = g(() => p.value.map((_) => i.value.find((F) => e.valueComparator(F.value, _.value)) || _)), y = g(() => f.value.map((_) => _.props.value)), C = ce(!1);
  let m, S = "";
  const w = g(() => e.hideSelected ? i.value.filter((_) => !f.value.some((F) => F === _)) : i.value), B = g(() => e.hideNoData && !i.value.length || e.readonly || (u == null ? void 0 : u.isReadonly.value)), $ = H();
  function A(_) {
    e.openOnClear && (s.value = !0);
  }
  function E() {
    B.value || (s.value = !s.value);
  }
  function k(_) {
    var T, M;
    if (e.readonly || u != null && u.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(_.key) && _.preventDefault(), ["Enter", "ArrowDown", " "].includes(_.key) && (s.value = !0), ["Escape", "Tab"].includes(_.key) && (s.value = !1), _.key === "Home" ? (T = $.value) == null || T.focus("first") : _.key === "End" && ((M = $.value) == null || M.focus("last")), e.multiple || !function(O) {
      const j = O.key.length === 1, z = !O.ctrlKey && !O.metaKey && !O.altKey;
      return j && z;
    }(_)))
      return;
    const F = performance.now();
    F - m > 1e3 && (S = ""), S += _.key.toLowerCase(), m = F;
    const I = i.value.find((O) => O.title.toLowerCase().startsWith(S));
    I !== void 0 && (p.value = [I]);
  }
  function P(_) {
    var F;
    _.key === "Tab" && ((F = o.value) == null || F.focus());
  }
  function x(_) {
    if (e.multiple) {
      const F = y.value.findIndex((I) => e.valueComparator(I, _.value));
      if (F === -1)
        p.value = [...p.value, _];
      else {
        const I = [...p.value];
        I.splice(F, 1), p.value = I;
      }
    } else
      p.value = [_], s.value = !1;
  }
  function D(_) {
    var F;
    (F = $.value) != null && F.$el.contains(_.relatedTarget) || (s.value = !1);
  }
  function b() {
    var _;
    C.value && ((_ = o.value) == null || _.focus());
  }
  function V(_) {
    C.value = !0;
  }
  return le(() => {
    const _ = !(!e.chips && !t.chip), F = !!(!e.hideNoData || w.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), I = p.value.length > 0, [T] = zl.filterProps(e), M = I || !C.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(zl, X({ ref: o }, T, { modelValue: p.value.map((O) => O.props.value).join(", "), "onUpdate:modelValue": (O) => {
      O == null && (p.value = []);
    }, focused: C.value, "onUpdate:focused": (O) => C.value = O, validationValue: p.externalValue, dirty: I, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": p.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: M, "onClick:clear": A, "onMousedown:control": E, onBlur: D, onKeydown: k }), { ...t, default: () => d(ae, null, [d(Ws, X({ ref: r, modelValue: s.value, "onUpdate:modelValue": (O) => s.value = O, activator: "parent", contentClass: "v-select__content", disabled: B.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: b }, e.menuProps), { default: () => [F && d(js, { ref: $, selected: y.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (O) => O.preventDefault(), onKeydown: P, onFocusin: V, tabindex: "-1" }, { default: () => {
      var O, j, z;
      return [(O = t["prepend-item"]) == null ? void 0 : O.call(t), !w.value.length && !e.hideNoData && (((j = t["no-data"]) == null ? void 0 : j.call(t)) ?? d(rl, { title: n(e.noDataText) }, null)), w.value.map((K, L) => {
        var W;
        const R = X(K.props, { key: L, onClick: () => x(K) });
        return ((W = t.item) == null ? void 0 : W.call(t, { item: K, index: L, props: R })) ?? d(rl, R, { prepend: (U) => {
          let { isSelected: ne } = U;
          return d(ae, null, [e.multiple && !e.hideSelected ? d(vt, { key: K.value, modelValue: ne, ripple: !1, tabindex: "-1" }, null) : void 0, K.props.prependIcon && d(he, { icon: K.props.prependIcon }, null)]);
        } });
      }), (z = t["append-item"]) == null ? void 0 : z.call(t)];
    } })] }), f.value.map((O, j) => {
      var K;
      const z = { "onClick:close": function(L) {
        L.stopPropagation(), L.preventDefault(), x(O);
      }, onMousedown(L) {
        L.preventDefault(), L.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return d("div", { key: O.value, class: "v-select__selection" }, [_ ? t.chip ? d(Ee, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: O.title } } }, { default: () => {
        var L;
        return [(L = t.chip) == null ? void 0 : L.call(t, { item: O, index: j, props: z })];
      } }) : d(xs, X({ key: "chip", closable: e.closableChips, size: "small", text: O.title }, z), null) : ((K = t.selection) == null ? void 0 : K.call(t, { item: O, index: j })) ?? d("span", { class: "v-select__selection-text" }, [O.title, e.multiple && j < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [Yt(",")])])]);
    })]), "append-inner": function() {
      var K;
      for (var O = arguments.length, j = new Array(O), z = 0; z < O; z++)
        j[z] = arguments[z];
      return d(ae, null, [(K = t["append-inner"]) == null ? void 0 : K.call(t, ...j), e.menuIcon ? d(he, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), on({ isFocused: C, menu: s, select: x }, o);
} }), pn = N({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), sl = Y()({ name: "VDataTableFooter", props: pn(), setup(e, l) {
  let { slots: t } = l;
  const { t: n } = ht(), { page: o, pageCount: r, startIndex: a, stopIndex: s, itemsLength: i, itemsPerPage: c, setItemsPerPage: v } = function() {
    const u = ve(Ra);
    if (!u)
      throw new Error("Missing pagination!");
    return u;
  }(), p = g(() => e.itemsPerPageOptions.map((u) => ({ ...u, title: n(u.title) })));
  return () => {
    var u;
    return d("div", { class: "v-data-table-footer" }, [(u = t.prepend) == null ? void 0 : u.call(t), d("div", { class: "v-data-table-footer__items-per-page" }, [d("span", null, [n(e.itemsPerPageText)]), d(Xs, { items: p.value, modelValue: c.value, "onUpdate:modelValue": (f) => v(Number(f)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), d("div", { class: "v-data-table-footer__info" }, [d("div", null, [n(e.pageText, i.value ? a.value + 1 : 0, s.value, i.value)])]), d("div", { class: "v-data-table-footer__pagination" }, [d(it, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": n(e.firstPageLabel) }, null), d(it, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": n(e.prevPageLabel) }, null), e.showCurrentPage && d("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), d(it, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(r.value, o.value + 1), disabled: o.value === r.value, "aria-label": n(e.nextPageLabel) }, null), d(it, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = r.value, disabled: o.value === r.value, "aria-label": n(e.lastPageLabel) }, null)])]);
  };
} }), vn = (Xn = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Al = (e, l) => {
  let { slots: t, attrs: n } = l;
  const o = e.tag ?? "td";
  return d(o, X({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: J(e.height), width: J(e.width), left: J(e.fixedOffset || null) } }, n), { default: () => {
    var r;
    return [(r = t.default) == null ? void 0 : r.call(t)];
  } });
}, Al.props = Xn, Al);
var Xn, Al;
const Js = N({ headers: { type: Array, default: () => [] } }, "DataTable-header"), jo = Symbol.for("vuetify:data-table-headers");
function Ro(e, l) {
  const t = H([]), n = H([]);
  Re(() => {
    var f, y, C;
    const r = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], a = r.flatMap((m, S) => m.map((w) => ({ column: w, row: S }))), s = r.length, i = { title: "", sortable: !1 }, c = { ...i, width: 48 };
    if ((f = l == null ? void 0 : l.groupBy) != null && f.value.length) {
      const m = a.findIndex((S) => {
        let { column: w } = S;
        return w.key === "data-table-group";
      });
      m < 0 ? a.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : a.splice(m, 1, { column: { ...i, ...a[m].column }, row: a[m].row });
    }
    if ((y = l == null ? void 0 : l.showSelect) != null && y.value) {
      const m = a.findIndex((S) => {
        let { column: w } = S;
        return w.key === "data-table-select";
      });
      m < 0 ? a.unshift({ column: { ...c, key: "data-table-select", rowspan: s }, row: 0 }) : a.splice(m, 1, { column: { ...c, ...a[m].column }, row: a[m].row });
    }
    if ((C = l == null ? void 0 : l.showExpand) != null && C.value) {
      const m = a.findIndex((S) => {
        let { column: w } = S;
        return w.key === "data-table-expand";
      });
      m < 0 ? a.push({ column: { ...c, key: "data-table-expand", rowspan: s }, row: 0 }) : a.splice(m, 1, { column: { ...c, ...a[m].column }, row: a[m].row });
    }
    const v = hn(s).map(() => []), p = hn(s).fill(0);
    a.forEach((m) => {
      let { column: S, row: w } = m;
      const B = S.key;
      for (let $ = w; $ <= w + (S.rowspan ?? 1) - 1; $++)
        v[$].push({ ...S, key: B, fixedOffset: p[$], sortable: S.sortable ?? !!S.key }), p[$] += Number(S.width ?? 0);
    }), v.forEach((m) => {
      for (let S = m.length; S--; S >= 0)
        if (m[S].fixed)
          return void (m[S].lastFixed = !0);
    });
    const u = /* @__PURE__ */ new Set();
    t.value = v.map((m) => {
      const S = [];
      for (const w of m)
        u.has(w.key) || (u.add(w.key), S.push(w));
      return S;
    }), n.value = v.at(-1) ?? [];
  });
  const o = { headers: t, columns: n };
  return ye(jo, o), o;
}
function bl() {
  const e = ve(jo);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Wo = N({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...rn() }, "VDataTableHeaders"), il = Y()({ name: "VDataTableHeaders", props: Wo(), setup(e, l) {
  let { slots: t, emit: n } = l;
  const { toggleSort: o, sortBy: r, isSorted: a } = function() {
    const $ = ve(qa);
    if (!$)
      throw new Error("Missing sort!");
    return $;
  }(), { someSelected: s, allSelected: i, selectAll: c, showSelectAll: v } = ml(), { columns: p, headers: u } = bl(), { loaderClasses: f } = sn(e), y = ($, A) => {
    if (e.sticky || $.fixed)
      return { position: "sticky", zIndex: $.fixed ? 4 : e.sticky ? 3 : void 0, left: $.fixed ? J($.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${A})` : void 0 };
  };
  function C($) {
    const A = r.value.find((E) => E.key === $.key);
    return A ? A.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: m, backgroundColorStyles: S } = pt(e, "color"), w = g(() => ({ headers: u.value, columns: p.value, toggleSort: o, isSorted: a, sortBy: r.value, someSelected: s.value, allSelected: i.value, selectAll: c, getSortIcon: C, getFixedStyles: y })), B = ($) => {
    let { column: A, x: E, y: k } = $;
    const P = A.key === "data-table-select" || A.key === "data-table-expand";
    return d(vn, { tag: "th", align: A.align, class: ["v-data-table__th", { "v-data-table__th--sortable": A.sortable, "v-data-table__th--sorted": a(A) }, f.value], style: { width: J(A.width), minWidth: J(A.width), ...y(A, k) }, colspan: A.colspan, rowspan: A.rowspan, onClick: A.sortable ? () => o(A) : void 0, lastFixed: A.lastFixed, noPadding: P }, { default: () => {
      var b;
      const x = `column.${A.key}`, D = { column: A, selectAll: c, isSorted: a, toggleSort: o, sortBy: r.value, someSelected: s.value, allSelected: i.value, getSortIcon: C };
      return t[x] ? t[x](D) : A.key === "data-table-select" ? ((b = t["column.data-table-select"]) == null ? void 0 : b.call(t, D)) ?? (v && d(vt, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": c }, null)) : d("div", { class: "v-data-table-header__content" }, [d("span", null, [A.title]), A.sortable && d(he, { key: "icon", class: "v-data-table-header__sort-icon", icon: C(A) }, null), e.multiSort && a(A) && d("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...m.value], style: S.value }, [r.value.findIndex((V) => V.key === A.key) + 1])]);
    } });
  };
  le(() => d(ae, null, [t.headers ? t.headers(w.value) : u.value.map(($, A) => d("tr", null, [$.map((E, k) => d(B, { column: E, x: k, y: A }, null))])), e.loading && d("tr", { class: "v-data-table-progress" }, [d("th", { colspan: p.value.length }, [d(io, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), Zs = N({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), Qs = Y()({ name: "VDataTableGroupHeaderRow", props: Zs(), setup(e, l) {
  let { slots: t } = l;
  const { isGroupOpen: n, toggleGroup: o, extractRows: r } = Da(), { isSelected: a, isSomeSelected: s, select: i } = ml(), { columns: c } = bl(), v = g(() => r([e.item]));
  return () => d("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [c.value.map((p) => {
    var u, f;
    if (p.key === "data-table-group") {
      const y = n(e.item) ? "$expand" : "$next", C = () => o(e.item);
      return ((u = t["data-table-group"]) == null ? void 0 : u.call(t, { item: e.item, count: v.value.length, props: { icon: y, onClick: C } })) ?? d(vn, { class: "v-data-table-group-header-row__column" }, { default: () => [d(it, { size: "small", variant: "text", icon: y, onClick: C }, null), d("span", null, [e.item.value]), d("span", null, [Yt("("), v.value.length, Yt(")")])] });
    }
    if (p.key === "data-table-select") {
      const y = a(v.value), C = s(v.value) && !y, m = (S) => i(v.value, S);
      return ((f = t["data-table-select"]) == null ? void 0 : f.call(t, { props: { modelValue: y, indeterminate: C, "onUpdate:modelValue": m } })) ?? d("td", null, [d(vt, { modelValue: y, indeterminate: C, "onUpdate:modelValue": m }, null)]);
    }
    return d("td", null, null);
  })]);
} }), ei = dt({ name: "VDataTableRow", props: N({ index: Number, item: Object, onClick: Function }, "VDataTableRow")(), setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, toggleSelect: o } = ml(), { isExpanded: r, toggleExpand: a } = Va(), { columns: s } = bl();
  le(() => d("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, c) => d(vn, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var f, y;
    const v = e.item, p = `item.${i.key}`, u = { index: e.index, item: e.item, columns: s.value, isSelected: n, toggleSelect: o, isExpanded: r, toggleExpand: a };
    return t[p] ? t[p](u) : i.key === "data-table-select" ? ((f = t["item.data-table-select"]) == null ? void 0 : f.call(t, u)) ?? d(vt, { disabled: !v.selectable, modelValue: n([v]), onClick: Fl(() => o(v), ["stop"]) }, null) : i.key === "data-table-expand" ? ((y = t["item.data-table-expand"]) == null ? void 0 : y.call(t, u)) ?? d(it, { icon: r(v) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: Fl(() => a(v), ["stop"]) }, null) : Ce(v.columns, i.key);
  } }))]));
} }), zo = N({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), ul = Y()({ name: "VDataTableRows", props: zo(), setup(e, l) {
  let { emit: t, slots: n } = l;
  const { columns: o } = bl(), { expandOnClick: r, toggleExpand: a, isExpanded: s } = Va(), { isSelected: i, toggleSelect: c } = ml(), { toggleGroup: v, isGroupOpen: p } = Da(), { t: u } = ht();
  return le(() => {
    var f;
    return e.loading && n.loading ? d("tr", { class: "v-data-table-rows-loading", key: "loading" }, [d("td", { colspan: o.value.length }, [n.loading()])]) : e.loading || e.items.length || e.hideNoData ? d(ae, null, [e.items.map((y, C) => {
      var w;
      if (y.type === "group")
        return n["group-header"] ? n["group-header"]({ index: C, item: y, columns: o.value, isExpanded: s, toggleExpand: a, isSelected: i, toggleSelect: c, toggleGroup: v, isGroupOpen: p }) : d(Qs, { key: `group-header_${y.id}`, item: y }, n);
      const m = { index: C, item: y, columns: o.value, isExpanded: s, toggleExpand: a, isSelected: i, toggleSelect: c }, S = { ...m, props: { key: `item_${y.value}`, onClick: r.value || e["onClick:row"] ? (B) => {
        var $;
        r.value && a(y), ($ = e["onClick:row"]) == null || $.call(e, B, { item: y });
      } : void 0, index: C, item: y } };
      return d(ae, null, [n.item ? n.item(S) : d(ei, S.props, n), s(y) && ((w = n["expanded-row"]) == null ? void 0 : w.call(n, m))]);
    })]) : d("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [d("td", { colspan: o.value.length }, [((f = n["no-data"]) == null ? void 0 : f.call(n)) ?? u(e.noDataText)])]);
  }), {};
} }), Go = N({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...se(), ...Ge(), ...xe(), ...Se() }, "VTable"), cl = Y()({ name: "VTable", props: Go(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Be(e), { densityClasses: o } = He(e);
  return le(() => d(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, n.value, o.value, e.class], style: e.style }, { default: () => {
    var r, a, s;
    return [(r = t.top) == null ? void 0 : r.call(t), t.default ? d("div", { class: "v-table__wrapper", style: { height: J(e.height) } }, [d("table", null, [t.default()])]) : (a = t.wrapper) == null ? void 0 : a.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), ti = N({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function li(e, l, t) {
  return l.map((n, o) => function(r, a, s, i) {
    return { type: "item", index: s, value: r.returnObject ? a : Ce(a, r.itemValue), selectable: Ce(a, r.itemSelectable, !0), columns: i.reduce((c, v) => (c[v.key] = Ce(a, v.value ?? v.key), c), {}), raw: a };
  }(e, n, o, t));
}
function Ho(e, l) {
  return { items: g(() => li(e, e.items, l.value)) };
}
const Ko = N({ ...zo(), width: [String, Number], search: String, ...Gr(), ...Hr(), ...Js(), ...ti(), ...Ur(), ...qr(), ...Wo(), ...Go() }, "DataTable"), ni = N({ ...ja(), ...Ko(), ...Wr(), ...pn() }, "VDataTable"), ai = Y()({ name: "VDataTable", props: ni(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Ia(e), { sortBy: r, multiSort: a, mustSort: s } = Ya(e), { page: i, itemsPerPage: c } = Wa(e), { columns: v, headers: p } = Ro(e, { groupBy: o, showSelect: G(e, "showSelect"), showExpand: G(e, "showExpand") }), { items: u } = Ho(e, v), f = G(e, "search"), { filteredItems: y } = zr(e, u, f, { transform: (R) => R.columns }), { toggleSort: C } = Xa({ sortBy: r, multiSort: a, mustSort: s, page: i }), { sortByWithGroups: m, opened: S, extractRows: w, isGroupOpen: B, toggleGroup: $ } = Oa({ groupBy: o, sortBy: r }), { sortedItems: A } = Yr(e, y, m), { flatItems: E } = Ma(A, o, S), k = g(() => E.value.length), { startIndex: P, stopIndex: x, pageCount: D, setItemsPerPage: b } = za({ page: i, itemsPerPage: c, itemsLength: k }), { paginatedItems: V } = function(R) {
    const { items: W, startIndex: U, stopIndex: ne, itemsPerPage: ee } = R;
    return { paginatedItems: g(() => ee.value <= 0 ? W.value : W.value.slice(U.value, ne.value)) };
  }({ items: E, startIndex: P, stopIndex: x, itemsPerPage: c }), _ = g(() => w(V.value)), { isSelected: F, select: I, selectAll: T, toggleSelect: M, someSelected: O, allSelected: j } = Ua(e, { allItems: u, currentPage: _ }), { isExpanded: z, toggleExpand: K } = Fa(e);
  Na({ page: i, itemsPerPage: c, sortBy: r, groupBy: o, search: f }), Xe({ VDataTableRows: { hideNoData: G(e, "hideNoData"), noDataText: G(e, "noDataText"), loading: G(e, "loading"), loadingText: G(e, "loadingText") } });
  const L = g(() => ({ page: i.value, itemsPerPage: c.value, sortBy: r.value, pageCount: D.value, toggleSort: C, setItemsPerPage: b, someSelected: O.value, allSelected: j.value, isSelected: F, select: I, selectAll: T, toggleSelect: M, isExpanded: z, toggleExpand: K, isGroupOpen: B, toggleGroup: $, items: _.value, groupedItems: V.value, columns: v.value, headers: p.value }));
  return le(() => {
    const [R] = sl.filterProps(e), [W] = il.filterProps(e), [U] = ul.filterProps(e), [ne] = cl.filterProps(e);
    return d(cl, X({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, ne), { top: () => {
      var ee;
      return (ee = n.top) == null ? void 0 : ee.call(n, L.value);
    }, default: () => {
      var ee, Q, de, ke;
      return n.default ? n.default(L.value) : d(ae, null, [(ee = n.colgroup) == null ? void 0 : ee.call(n, L.value), d("thead", null, [d(il, W, n)]), (Q = n.thead) == null ? void 0 : Q.call(n, L.value), d("tbody", null, [n.body ? n.body(L.value) : d(ul, X(U, { items: V.value }), n)]), (de = n.tbody) == null ? void 0 : de.call(n, L.value), (ke = n.tfoot) == null ? void 0 : ke.call(n, L.value)]);
    }, bottom: () => n.bottom ? n.bottom(L.value) : d(ae, null, [d(sl, R, { prepend: n["footer.prepend"] })]) });
  }), {};
} }), oi = N({ itemsLength: { type: [Number, String], required: !0 }, ...ja(), ...Ko(), ...pn() }, "VDataTableServer"), ri = Y()({ name: "VDataTableServer", props: oi(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0, "click:row": (e, l) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Ia(e), { sortBy: r, multiSort: a, mustSort: s } = Ya(e), { page: i, itemsPerPage: c } = Wa(e), v = g(() => parseInt(e.itemsLength, 10)), { columns: p, headers: u } = Ro(e, { groupBy: o, showSelect: G(e, "showSelect"), showExpand: G(e, "showExpand") }), { items: f } = Ho(e, p), { toggleSort: y } = Xa({ sortBy: r, multiSort: a, mustSort: s, page: i }), { opened: C, isGroupOpen: m, toggleGroup: S, extractRows: w } = Oa({ groupBy: o, sortBy: r }), { pageCount: B, setItemsPerPage: $ } = za({ page: i, itemsPerPage: c, itemsLength: v }), { flatItems: A } = Ma(f, o, C), { isSelected: E, select: k, selectAll: P, toggleSelect: x, someSelected: D, allSelected: b } = Ua(e, { allItems: f, currentPage: f }), { isExpanded: V, toggleExpand: _ } = Fa(e), F = g(() => w(f.value));
  Na({ page: i, itemsPerPage: c, sortBy: r, groupBy: o, search: G(e, "search") }), ye("v-data-table", { toggleSort: y, sortBy: r }), Xe({ VDataTableRows: { hideNoData: G(e, "hideNoData"), noDataText: G(e, "noDataText"), loading: G(e, "loading"), loadingText: G(e, "loadingText") } });
  const I = g(() => ({ page: i.value, itemsPerPage: c.value, sortBy: r.value, pageCount: B.value, toggleSort: y, setItemsPerPage: $, someSelected: D.value, allSelected: b.value, isSelected: E, select: k, selectAll: P, toggleSelect: x, isExpanded: V, toggleExpand: _, isGroupOpen: m, toggleGroup: S, items: F.value, groupedItems: A.value, columns: p.value, headers: u.value }));
  le(() => {
    const [T] = sl.filterProps(e), [M] = il.filterProps(e), [O] = ul.filterProps(e), [j] = cl.filterProps(e);
    return d(cl, X({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, j), { top: () => {
      var z;
      return (z = n.top) == null ? void 0 : z.call(n, I.value);
    }, default: () => {
      var z, K, L, R;
      return n.default ? n.default(I.value) : d(ae, null, [(z = n.colgroup) == null ? void 0 : z.call(n, I.value), d("thead", { class: "v-data-table__thead", role: "rowgroup" }, [d(il, X(M, { sticky: e.fixedHeader }), n)]), (K = n.thead) == null ? void 0 : K.call(n, I.value), d("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [n.body ? n.body(I.value) : d(ul, X(O, { items: A.value }), n)]), (L = n.tbody) == null ? void 0 : L.call(n, I.value), (R = n.tfoot) == null ? void 0 : R.call(n, I.value)]);
    }, bottom: () => n.bottom ? n.bottom(I.value) : d(sl, T, { prepend: n["footer.prepend"] }) });
  });
} }), Uo = fl.reduce((e, l) => (e[l] = { type: [Boolean, String, Number], default: !1 }, e), {}), qo = fl.reduce((e, l) => (e["offset" + $t(l)] = { type: [String, Number], default: null }, e), {}), Yo = fl.reduce((e, l) => (e["order" + $t(l)] = { type: [String, Number], default: null }, e), {}), Jn = { col: Object.keys(Uo), offset: Object.keys(qo), order: Object.keys(Yo) };
function si(e, l, t) {
  let n = e;
  if (t != null && t !== !1)
    return l && (n += `-${l.replace(e, "")}`), e === "col" && (n = "v-" + n), (e !== "col" || t !== "" && t !== !0) && (n += `-${t}`), n.toLowerCase();
}
const ii = ["auto", "start", "end", "center", "baseline", "stretch"], ui = N({ cols: { type: [Boolean, String, Number], default: !1 }, ...Uo, offset: { type: [String, Number], default: null }, ...qo, order: { type: [String, Number], default: null }, ...Yo, alignSelf: { type: String, default: null, validator: (e) => ii.includes(e) }, ...se(), ...xe() }, "VCol"), ut = Y()({ name: "VCol", props: ui(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => {
    const o = [];
    let r;
    for (r in Jn)
      Jn[r].forEach((s) => {
        const i = e[s], c = si(r, s, i);
        c && o.push(c);
      });
    const a = o.some((s) => s.startsWith("v-col-"));
    return o.push({ "v-col": !a || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return ft(e.tag, { class: [n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), fn = ["start", "end", "center"], Xo = ["space-between", "space-around", "space-evenly"];
function mn(e, l) {
  return fl.reduce((t, n) => (t[e + $t(n)] = l(), t), {});
}
const ci = [...fn, "baseline", "stretch"], Jo = (e) => ci.includes(e), Zo = mn("align", () => ({ type: String, default: null, validator: Jo })), di = [...fn, ...Xo], Qo = (e) => di.includes(e), er = mn("justify", () => ({ type: String, default: null, validator: Qo })), pi = [...fn, ...Xo, "stretch"], tr = (e) => pi.includes(e), lr = mn("alignContent", () => ({ type: String, default: null, validator: tr })), Zn = { align: Object.keys(Zo), justify: Object.keys(er), alignContent: Object.keys(lr) }, vi = { align: "align", justify: "justify", alignContent: "align-content" };
function fi(e, l, t) {
  let n = vi[e];
  if (t != null)
    return l && (n += `-${l.replace(e, "")}`), n += `-${t}`, n.toLowerCase();
}
const mi = N({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Jo }, ...Zo, justify: { type: String, default: null, validator: Qo }, ...er, alignContent: { type: String, default: null, validator: tr }, ...lr, ...se(), ...xe() }, "VRow"), nr = Y()({ name: "VRow", props: mi(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => {
    const o = [];
    let r;
    for (r in Zn)
      Zn[r].forEach((a) => {
        const s = e[a], i = fi(r, a, s);
        i && o.push(i);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return ft(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), ar = { colors: () => ({ default: { background: "primary", base: "primary", border: "primary", color: "on-primary" }, footer: { background: "--v-theme-surface", color: "--v-theme-on-surface" }, header: { background: "primary", color: "on-primary" }, percentageChange: 15, percentageDirection: "desc", table: { bottomBorder: "primary" } }), columnWidths: () => [], density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footers: () => [], height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, multiSort: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 750, searchEvents: () => ({}), searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }, gi = Ye({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (l, t) => ue(l.$slots, "bottom") }), te = "v-drilldown-table";
function Qn(e, l, t = "") {
  let n = e;
  const o = l.length - 1;
  if (o < 0)
    return n === void 0 ? t : n;
  for (let r = 0; r < o; r++) {
    if (n == null)
      return t;
    n = n[l[r]];
  }
  return n == null || n[l[o]] === void 0 ? t : n[l[o]];
}
function yi(e, l, t = "") {
  if (l == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof l != "function")
      return t;
    const o = l(e, t);
    return o === void 0 ? t : o;
  }
  if (typeof l == "string")
    return function(o, r, a = "") {
      let s = r;
      return o != null && s && typeof s == "string" ? o[s] !== void 0 ? o[s] : (s = s.replace(/\[(\w+)\]/g, ".$1"), s = s.replace(/^\./, ""), Qn(o, s.split("."), a)) : a;
    }(e, l, t);
  if (Array.isArray(l))
    return Qn(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
const ea = (e) => {
  const { id: l, sortBy: t } = e;
  if (t) {
    const n = t.find((o) => o.key === l);
    if (n)
      return n.order;
  }
}, xt = (e) => {
  const { str: l, unit: t = "px" } = e;
  if (l != null && l !== "")
    return +l ? `${Number(l)}${t}` : String(l);
};
function or(e) {
  const l = e.title, t = [l, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : l || "";
}
function $l(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Ct(e, ...l) {
  if (!l.length)
    return e;
  const t = l.shift();
  if ($l(e) && $l(t))
    for (const n in t)
      $l(t[n]) ? (e[n] || Object.assign(e, { [n]: {} }), Ct(e[n], t[n])) : Object.assign(e, { [n]: t[n] });
  return Ct(e, ...l);
}
const rr = (e) => {
  const { align: l } = e;
  return { "d-flex align-center": !0, [`justify-${l}`]: l, "justify-start": !l };
}, sr = (e) => {
  const { level: l } = e;
  return { "d-flex": !0, [`${te}--header-select-all-checkbox`]: !0, [`${te}--header-select-all-checkbox-${l}`]: !0 };
};
function ir(e) {
  return e === "transparent" || e === "none" || e === "inherit" || e === "currentColor" || e === "initial" || e === "unset";
}
function ur(e) {
  return e.includes("--v-theme");
}
const hi = (e, l) => {
  if (ir(e))
    return e;
  if (ur(e))
    return `rgb(var(${e}))`;
  const t = function(n, o) {
    const r = o.global.current.value.colors;
    return Object.entries(r).find(([a]) => a === n);
  }(e, l);
  return t ? `hsl(${dl(t[1])})` : `hsl(${dl(e)})`;
}, bi = (e) => {
  const { colors: l, level: t, prop: n = "default", theme: o, type: r } = e, a = { ...l[n] }, s = l.percentageDirection;
  if (a === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let i = ((c, v, p) => {
    let u = 100, f = c.percentageChange ?? 0;
    return isNaN(f) && (u = 100), f *= v, p !== "desc" && p !== "descending" || (u = 100 - f), p !== "asc" && p !== "ascending" || (u = 0 + f), u < 0 && (u = 0), u > 100 && (u = 100), isNaN(u) && (u = 100), u;
  })(l, t - 1, s);
  return r || Object.entries(a).forEach(([c, v]) => {
    let p = o.global.current.value.colors[v] ?? v;
    if (p || (p = "transparent"), ir(p))
      return void (a[c] = p);
    if ((c === "color" || t === 0 && s === "asc") && (i = 100), ur(p))
      return void (a[c] = `rgb(var(${p}))`);
    const u = `/ ${i}%`, f = dl(p);
    if (f.includes("/"))
      return a[c] = `hsl(${f})`;
    a[c] = `hsl(${dl(p)} ${u})`;
  }), a;
};
function dl(e) {
  let l = function(v) {
    const p = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let u = v;
    return Object.entries(p).forEach(([f, y]) => {
      v.toLowerCase() != f.toLowerCase() || (u = y);
    }), u;
  }(e), t = 0, n = 0, o = 0, r = 0, a = 0, s = 0;
  if (l.substring(0, 1) === "#")
    l = function(v) {
      let p = v.replace("#", "");
      p.length === 3 && (p = p.split("").map((C) => C + C).join(""));
      const u = parseInt(p.substring(0, 2), 16), f = parseInt(p.substring(2, 4), 16), y = parseInt(p.substring(4, 6), 16);
      return [u, f, y];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/\d+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/\d+/g)].map(Number), t = l[0], n = l[1], o = l[2], `${t} ${n}% ${o}%`;
  [r, a, s] = l, r /= 255, a /= 255, s /= 255;
  const i = Math.max(r, a, s), c = Math.min(r, a, s);
  if (i === null || !c === null || isNaN(i) || isNaN(c)) {
    const v = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${v})" in it's place.`), v;
  }
  if (t = (i + c) / 2, n = (i + c) / 2, o = (i + c) / 2, i == c)
    t = n = 0;
  else {
    const v = i - c;
    switch (n = o > 0.5 ? v / (2 - i - c) : v / (i + c), i) {
      case r:
        t = (a - s) / v + (a < s ? 6 : 0);
        break;
      case a:
        t = (s - r) / v + 2;
        break;
      case s:
        t = (r - a) / v + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), n = Math.round(100 * n), o = Math.round(100 * o), `${t} ${n}% ${o}%`;
}
const gn = (e) => {
  const { colors: l, level: t, prop: n = "default", themeColors: o, type: r = null } = e;
  if (typeof l != "object" || l === null)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should not be called.');
  const a = bi({ colors: l, level: t, prop: n, theme: o, type: r });
  return r ? a[r] : a;
}, Si = ["colspan"], wi = Ye({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const l = e, t = vl(), n = g(() => ((S) => {
    const { isLinearOnly: w, loaderHeight: B } = S;
    let $ = { height: 0, minHeight: 0 };
    return h(w) && ($ = { height: h(B), minHeight: h(B) }), $;
  })({ isLinearOnly: c, loaderHeight: i })), o = g(() => ((S) => {
    const { isLinearOnly: w, loaderHeight: B } = S;
    return h(w) ? { height: h(B), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: c, loaderHeight: i })), r = g(() => ((S) => {
    const { isLinearOnly: w } = S;
    return { [`${te}--loader-tr`]: !0, [`${te}--loader-tr-not-linear`]: !h(w), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: c })), a = g(() => ({ [`${te}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), s = g(() => {
    var S;
    return ((S = l.loaderProps) == null ? void 0 : S.linear) ?? {};
  }), i = g(() => {
    var S, w;
    return function(B) {
      return xt({ str: B }) || "2px";
    }(((w = (S = l.loaderProps) == null ? void 0 : S.linear) == null ? void 0 : w.height) || "2px");
  }), c = g(() => {
    let S = !1;
    return l.loaderType !== null && l.loaderType !== !1 && (S = function(w) {
      let B = !1;
      return w === "linear" && (B = !0), Array.isArray(w) && (B = w.length === 1 && w[0] === "linear"), B;
    }(l.loaderType)), S;
  }), v = g(() => {
    var S;
    return ((S = l.loaderProps) == null ? void 0 : S.circular) ?? {};
  }), p = g(() => {
    var S;
    return ((S = l.loaderProps) == null ? void 0 : S.skelton) ?? {};
  }), u = g(() => l.loading), f = g(() => {
    var w, B;
    let S = ((B = (w = l.loaderProps) == null ? void 0 : w.text) == null ? void 0 : B.color) ?? "surface-variant";
    return S = hi(S, t), { color: S };
  }), y = g(() => l.loadingText || "Loading..."), C = (S) => {
    const w = l.loaderType;
    return Array.isArray(w) ? w.indexOf(S) : 1;
  }, m = (S) => {
    const w = l.loaderType;
    return S === l.loaderType || !!Array.isArray(w) && w.includes(S);
  };
  return (S, w) => {
    const B = da("v-skeleton-loader");
    return q(), ie("tr", { class: re(h(r)), style: Ae(h(n)) }, [Me("td", { class: "px-0 ma-0", colspan: S.colspan, style: Ae(h(o)) }, [S.loading ? (q(), me(nr, { key: 0, class: re(h(a)), "no-gutters": "" }, { default: oe(() => [m("linear") ? (q(), me(ut, { key: 0, class: "pa-0 ma-0", order: C("linear") }, { default: oe(() => [d(so, be(Ve(h(s))), null, 16)]), _: 1 }, 8, ["order"])) : ge("", !0), m("circular") ? (q(), me(ut, { key: 1, class: "pa-0 my-2", order: C("circular") }, { default: oe(() => [d(ao, be(Ve(h(v))), null, 16)]), _: 1 }, 8, ["order"])) : ge("", !0), m("skelton") ? (q(), me(ut, { key: 2, class: "pa-0 ma-0", order: C("skelton") }, { default: oe(() => [d(B, X(h(p), { loading: h(u) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : ge("", !0), m("text") ? (q(), me(ut, { key: 3, class: "my-2", order: C("text"), style: Ae(h(f)) }, { default: oe(() => [Yt(yr(h(y)), 1)]), _: 1 }, 8, ["order", "style"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0)], 12, Si)], 6);
  };
} }), yn = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, xi = yn(wi, [["__scopeId", "data-v-fbedf16d"]]), ki = ["colspan"], Ci = ["colspan", "innerHTML"], Bi = ["colspan"], Pi = ["colspan", "innerHTML"], _i = ["colspan", "onClick"], Ai = ["innerHTML"], $i = Ye({ __name: "HeadersSlot", props: { columnWidths: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, colors: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = H(), r = ve(Symbol.for("vuetify:icons")), a = H(!1), s = H(t.items), i = H(t.matchColumnWidths), c = H(t.columnWidths || []), v = H(t.sortAscIcon), p = g(() => t.tableModelValue), u = vl(), f = g(() => function() {
    const k = t.slotProps.columns;
    if (t.level <= 1 || !i.value)
      return k;
    if (c.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(k).forEach(([P]) => {
      Object.keys(k).length !== parseInt(P) + 1 && k[P].width === void 0 && (k[P].width = c.value[parseInt(P)]);
    }), k;
  }());
  Z(() => t.items, (k) => {
    s.value = k, o.value = (k == null ? void 0 : k.filter((P) => P.selectable)) ?? [], o.value = k == null ? void 0 : k.filter((P) => P.selectable !== !1);
  });
  const y = g(() => ((k) => {
    const { level: P } = k;
    return { [`${te}--header-row`]: !0, [`${te}--header-row-${P}`]: !0 };
  })({ level: t.level })), C = (k, P = "") => ((x) => {
    const { colors: D, column: b, level: V, slotName: _ = "" } = x;
    return { [`${te}--header-row-th`]: !0, [`${te}--header-row-th-${_}`]: _ !== "", [`${te}--header-row-th-${_}-${V}`]: _, [`${te}--header-row-th-${V}`]: !0, [`${te}--header-row-th-sortable`]: b.sortable, [`${te}--header-row-th-sortable-default-color`]: b.sortable && D === !1, [`${b.cellClass}`]: b.cellClass };
  })({ colors: t.colors, column: k, level: t.level, slotName: P }), m = (k, P = !1) => ((x) => {
    const { colors: D, column: b, dataTableExpand: V = !1, level: _, theme: F } = x, I = { minWidth: b.width ? xt({ str: b.width }) : "auto", width: b.width ? xt({ str: b.width }) : "auto" };
    if (V && !b.width && (I.width = b.width ? xt({ str: b.width }) : "56px", I.minWidth = b.width ? xt({ str: b.width }) : "56px"), D === !1 || D === null)
      return I;
    const T = gn({ colors: D, level: _, prop: "header", themeColors: F });
    return I.backgroundColor = T.background, I.color = T.color, I;
  })({ colors: t.colors, column: k, dataTableExpand: P, level: t.level, theme: u }), S = g(() => {
    var k;
    return !t.slotProps.allSelected && ((k = p == null ? void 0 : p.value) == null ? void 0 : k.length) !== 0;
  });
  function w() {
    a.value = !a.value, t.slotProps.selectAll(a.value), l("click:selectAll", a.value);
  }
  Z(() => t.slotProps.allSelected, (k) => {
    a.value = k;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const B = g(() => sr({ level: t.level })), $ = (k) => ((P) => {
    const { iconOptions: x, key: D, level: b, sortBy: V } = P;
    return { "fa-fw": (x == null ? void 0 : x.defaultSet) === "fa", "mx-1": !0, [`${te}--header-row-th-sortable-sort-icon`]: !0, [`${te}--header-row-th-sortable-sort-icon-${b}`]: !0, [`${te}--header-row-th-sortable-sort-icon-desc`]: ea({ id: D, sortBy: V }) === "desc", [`${te}--header-row-th-sortable-sort-icon-asc`]: ea({ id: D, sortBy: V }) === "asc" };
  })({ iconOptions: r, key: k, level: t.level, sortBy: t.sortBy }), A = g(() => (r == null ? void 0 : r.defaultSet) === "fa" ? (v.value = (t == null ? void 0 : t.sortAscIcon) ?? "fas fa-arrow-up", "small") : (v.value = (t == null ? void 0 : t.sortAscIcon) ?? "$sortAsc", "default"));
  function E(k) {
    return or(k);
  }
  return (k, P) => (q(), ie(ae, null, [Me("tr", { class: re(h(y)) }, [(q(!0), ie(ae, null, Le(h(f), (x) => {
    return q(), ie(ae, { key: x }, [h(n)[`column.${x.key}`] ? (q(), ie("th", { key: 0, class: re(C(x, x.key)), colspan: x.colspan || 1, style: Ae(m(x, !0)) }, [ue(k.$slots, `column.${x.key}`, { column: x }, void 0, !0)], 14, ki)) : x.key === "data-table-group" || x.key === "data-table-group" ? (q(), ie("th", { key: 1, class: re(C(x, "header-data-table-group")), colspan: x.colspan || 1, style: Ae(m(x, !0)), innerHTML: E(x) }, null, 14, Ci)) : x.key === "data-table-select" || x.key === "data-table-select" && k.showSelect ? (q(), ie("th", { key: 2, class: re(C(x, "header-data-table-select")), colspan: x.colspan || 1, style: Ae(m(x, !0)) }, [k.selectStrategy !== "single" ? (q(), me(dn, { key: 0, class: re(h(B)), density: k.density, focused: !1, indeterminate: h(S), "model-value": h(a), "onUpdate:modelValue": w }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, Bi)) : x.key === "data-table-expand" ? (q(), ie("th", { key: 3, class: re(C(x, "data-table-expand")), colspan: x.colspan || 1, style: Ae(m(x, !0)), innerHTML: E(x) }, null, 14, Pi)) : (q(), ie("th", { key: 4, class: re(C(x)), colspan: x.colspan || 1, style: Ae(m(x)), onClick: (b) => function(V) {
      V.sortable && t.slotProps.toggleSort(V);
    }(x) }, [Me("div", { class: re((D = x.align, rr({ align: D }))) }, [Me("span", { innerHTML: E(x) }, null, 8, Ai), x.sortable && h(n)["header.sortIcon"] ? (q(), ie("span", { key: 0, class: re($(x.key)) }, [ue(k.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : x.sortable ? (q(), me(he, { key: 1, class: re($(x.key)), icon: h(v), size: h(A) }, null, 8, ["class", "icon", "size"])) : ge("", !0)], 2)], 14, _i))], 64);
    var D;
  }), 128))], 2), k.loaderSettings.loaderType && !h(n).loading ? (q(), me(h(xi), { key: 0, colors: k.colors || null, colspan: k.loaderSettings.colspan, height: k.loaderSettings.height, level: k.level, "loader-props": k.loaderProps, "loader-settings": k.loaderSettings, "loader-type": k.loaderSettings.loaderType, loading: k.loaderSettings.loading || !1, "loading-text": k.loaderSettings.loadingText, size: k.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : ge("", !0)], 64));
} }), Fi = yn($i, [["__scopeId", "data-v-2cc4d4ca"]]), Vi = ["colspan"], Ei = ["colspan"], Ii = ["colspan"], Oi = ["colspan"], Di = ["innerHTML"], Ti = Ye({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = ve(Symbol.for("vuetify:icons")), r = g(() => t.slotProps.columns), a = g(() => t.slotProps.index), s = g(() => t.slotProps.isExpanded), i = g(() => t.slotProps.item), c = g(() => t.slotProps.level), v = g(() => t.slotProps.toggleExpand), p = g(() => t.slotProps.toggleSelect), u = g(() => t.itemSelectable), f = g(() => ((w) => {
    const { expandOnClick: B, level: $, levels: A } = w;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": B && $ < A, [`${te}--body-row`]: !0, [`${te}--body-row-${$}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), y = (w) => ((B) => {
    const { column: $, elm: A, level: E } = B;
    return { [`${te}--${A}-row-td`]: !0, [`${te}--${A}-row-td-${E}`]: !0, [`${$.cellClass}`]: $.cellClass };
  })({ column: w, elm: "body", level: t.level });
  function C(w) {
    const { isRow: B, item: $, level: A, toggleExpand: E } = w;
    if (!(t.level >= t.levels || t.expandOnClick && !B) && (!t.expandOnClick || B)) {
      if (w.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", w.$event);
      }
      A === t.level && E($), l("update:expanded", w);
    }
  }
  const m = g(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "x-small" : "default");
  function S(w, B) {
    return function($, A) {
      if (!A.key)
        return "";
      const E = yi($, A.key);
      return A.renderItem ? A.renderItem(E, $, A) : E;
    }(w.raw, B);
  }
  return (w, B) => (q(), ie("tr", { class: re(h(f)), onClick: B[2] || (B[2] = ($) => C({ columns: h(r), index: h(a), isExpanded: h(s), isRow: !0, item: h(i), level: h(c), toggleExpand: h(v), $event: $ })) }, [(q(!0), ie(ae, null, Le(h(r), ($) => (q(), ie(ae, { key: $ }, [w.$slots[`item.${$.key}`] ? (q(), ie("td", { key: 0, class: re(y($)), colspan: $.colspan || 1 }, [ue(w.$slots, `item.${$.key}`, { columns: h(r), index: h(a), item: h(i) }, void 0, !0)], 10, Vi)) : $.key === "data-table-select" || $.key === "data-table-select" && t.showSelect ? (q(), ie("td", { key: 1, class: re(y($)), colspan: $.colspan || 1 }, [h(n)["item.data-table-select"] ? ue(w.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : ge("", !0), d(dn, { class: "d-flex v-simple-checkbox", density: w.density, disabled: h(i).raw.selectable === !1 && h(u) === "selectable", "model-value": w.slotProps.isSelected([h(i)]), onClick: B[0] || (B[0] = Fl((A) => function(E) {
    const { item: k, toggleSelect: P } = E;
    P(k), l("click:row:checkbox", k);
  }({ columns: h(r), index: h(a), item: h(i), level: h(c), toggleSelect: h(p) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, Ei)) : $.key === "data-table-expand" || $.key === "data-table-expand" && w.showExpand ? (q(), ie("td", { key: 2, class: re(y($)), colspan: $.colspan || 1 }, [h(c) < w.levels ? (q(), ie("div", { key: 0, class: re(["v-drilldown-table--expand-icon", h(s)(h(i)) ? "rotate-180" : ""]), onClick: B[1] || (B[1] = (A) => C({ columns: h(r), index: h(a), isExpanded: h(s), item: h(i), level: h(c), toggleExpand: h(v) })) }, [w.$slots["item.data-table-expand"] ? ue(w.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (q(), me(he, { key: 1, icon: "$expand", size: h(m) }, null, 8, ["size"]))], 2)) : ge("", !0)], 10, Ii)) : (q(), ie("td", { key: 3, class: re(y($)), colspan: $.colspan || 1 }, [Me("span", { innerHTML: S(h(i), $) }, null, 8, Di)], 10, Oi))], 64))), 128))], 2));
} }), Li = yn(Ti, [["__scopeId", "data-v-12d9fc59"]]), Mi = ["colspan"], Ni = ["colspan"], ji = ["colspan", "innerHTML"], Ri = ["colspan", "innerHTML"], Wi = ["colspan"], zi = ["innerHTML"], Gi = Ye({ __name: "TfootSlot", props: { footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = H(), r = vl(), a = H(!1), s = H(t.items), i = g(() => t.tableModelValue), c = g(() => t.footers.length ? t.footers : t.slotProps.columns);
  Z(() => t.items, (w) => {
    s.value = w, o.value = (w == null ? void 0 : w.filter((B) => B.selectable)) ?? [], o.value = w == null ? void 0 : w.filter((B) => B.selectable !== !1);
  });
  const v = g(() => ((w) => {
    const { level: B } = w;
    return { [`${te}--tfoot`]: !0, [`${te}--tfoot-${B}`]: !0 };
  })({ level: t.level })), p = g(() => ((w) => {
    const { level: B } = w;
    return { [`${te}--tfoot-row`]: !0, [`${te}--tfoot-row-${B}`]: !0 };
  })({ level: t.level })), u = (w, B = "") => (($) => {
    const { column: A, level: E, slotName: k = "" } = $;
    return { [`${te}--tfoot-row-td`]: !0, [`${te}--tfoot-row-td-${k}`]: k !== "", [`${te}--tfoot-row-td-${k}-${E}`]: k, [`${te}--tfoot-row-td-${E}`]: !0, [`${A.cellClass}`]: A.cellClass };
  })({ column: w, level: t.level, slotName: B }), f = g(() => ((w) => {
    const { colors: B, elm: $, level: A, theme: E } = w;
    if (B === !1 || B === null)
      return {};
    const k = gn({ colors: B, level: A, prop: $, themeColors: E });
    return { backgroundColor: k.background, color: k.color };
  })({ colors: t.colors, elm: "footer", level: t.level, theme: r })), y = g(() => {
    var w;
    return !t.slotProps.allSelected && ((w = i == null ? void 0 : i.value) == null ? void 0 : w.length) !== 0;
  });
  function C() {
    a.value = !a.value, t.slotProps.selectAll(a.value), l("click:selectAll", a.value);
  }
  Z(() => t.slotProps.allSelected, (w) => {
    a.value = w;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const m = g(() => sr({ level: t.level }));
  function S(w) {
    return or(w);
  }
  return (w, B) => {
    var $;
    return ($ = h(c)) != null && $.length ? (q(), ie("tfoot", { key: 0, class: re(h(v)) }, [Me("tr", { class: re(h(p)) }, [(q(!0), ie(ae, null, Le(h(c), (A) => {
      return q(), ie(ae, { key: A }, [h(n)[`tfoot.${A.key}`] ? (q(), ie("th", { key: 0, class: re(u(A, A.key)), colspan: A.colspan || 1, style: Ae(h(f)) }, [ue(w.$slots, `tfoot.${A.key}`, { column: A })], 14, Mi)) : A.key === "data-table-select" ? (q(), ie("th", { key: 1, class: re(u(A, "tfoot-data-table-select")), colspan: A.colspan || 1, style: Ae(h(f)) }, [w.selectStrategy !== "single" ? (q(), me(dn, { key: 0, class: re(h(m)), density: w.density, focused: !1, indeterminate: h(y), "model-value": h(a), "onUpdate:modelValue": C }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, Ni)) : A.key === "data-table-expand" ? (q(), ie("th", { key: 2, class: re(u(A, "tfoot-data-table-expand")), colspan: A.colspan || 1, style: Ae(h(f)), innerHTML: S(A) }, null, 14, ji)) : A.renderFooterCell ? (q(), ie("th", { key: 3, class: re(u(A)), colspan: A.colspan || 1, style: Ae(h(f)), innerHTML: S(A) }, null, 14, Ri)) : (q(), ie("th", { key: 4, class: re(u(A)), colspan: A.colspan || 1, style: Ae(h(f)) }, [Me("div", { class: re((E = A.align, rr({ align: E }))) }, [Me("span", { innerHTML: S(A) }, null, 8, zi)], 2)], 14, Wi))], 64);
      var E;
    }), 128))], 2)], 2)) : ge("", !0);
  };
} });
function ta(e) {
  return typeof e == "function" ? e() : h(e);
}
const la = () => {
}, Hi = (e) => e();
function Ki(e, l = {}) {
  let t, n, o = la;
  const r = (a) => {
    clearTimeout(a), o(), o = la;
  };
  return (a) => {
    const s = ta(e), i = ta(l.maxWait);
    return t && r(t), s <= 0 || i !== void 0 && i <= 0 ? (n && (r(n), n = null), Promise.resolve(a())) : new Promise((c, v) => {
      o = l.rejectOnCancel ? v : c, i && !n && (n = setTimeout(() => {
        t && r(t), n = null, c(a());
      }, i)), t = setTimeout(() => {
        n && r(n), n = null, c(a());
      }, s);
    });
  };
}
var na = Object.getOwnPropertySymbols, Ui = Object.prototype.hasOwnProperty, qi = Object.prototype.propertyIsEnumerable, Yi = (e, l) => {
  var t = {};
  for (var n in e)
    Ui.call(e, n) && l.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && na)
    for (var n of na(e))
      l.indexOf(n) < 0 && qi.call(e, n) && (t[n] = e[n]);
  return t;
};
function Xi(e, l, t = {}) {
  const n = t, { eventFilter: o = Hi } = n, r = Yi(n, ["eventFilter"]);
  return Z(e, (a = o, s = l, function(...i) {
    return new Promise((c, v) => {
      Promise.resolve(a(() => s.apply(this, i), { fn: s, thisArg: this, args: i })).then(c).catch(v);
    });
  }), r);
  var a, s;
}
var Ji = Object.defineProperty, Zi = Object.defineProperties, Qi = Object.getOwnPropertyDescriptors, Ht = Object.getOwnPropertySymbols, aa = Object.prototype.hasOwnProperty, oa = Object.prototype.propertyIsEnumerable, ra = (e, l, t) => l in e ? Ji(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
function Gl(e, l, t = {}) {
  const n = t, { debounce: o = 0, maxWait: r } = n, a = ((c, v) => {
    var p = {};
    for (var u in c)
      aa.call(c, u) && v.indexOf(u) < 0 && (p[u] = c[u]);
    if (c != null && Ht)
      for (var u of Ht(c))
        v.indexOf(u) < 0 && oa.call(c, u) && (p[u] = c[u]);
    return p;
  })(n, ["debounce", "maxWait"]);
  return Xi(e, l, (s = ((c, v) => {
    for (var p in v || (v = {}))
      aa.call(v, p) && ra(c, p, v[p]);
    if (Ht)
      for (var p of Ht(v))
        oa.call(v, p) && ra(c, p, v[p]);
    return c;
  })({}, a), i = { eventFilter: Ki(o, { maxWait: r }) }, Zi(s, Qi(i))));
  var s, i;
}
const wt = /* @__PURE__ */ new Map(), eu = Ye({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchEvents: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = H(""), r = H(!0), a = g(() => t.items), s = g(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: a, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: h(o), selectAll: i, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: c }));
  function i(u) {
    t.slotProps.selectAll(u), l("click:selectAll", u);
  }
  function c() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  gt(() => {
    const u = document.querySelector(`[data-id="vdt-top-id-${t.level}"]`);
    (u == null ? void 0 : u.children.length) === 0 && (r.value = !1);
  }), Gl(o, () => {
    l("update:search", o.value);
  }, { debounce: 750, maxWait: 1e3 });
  const v = g(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...t.searchProps })), p = g(() => {
    const u = t.searchContainerCols ?? ar.searchContainerCols();
    return { [`${te}--search-field`]: !0, [`v-col-${u.xs}`]: !0, [`v-col-sm-${u.sm}`]: !0, [`v-col-md-${u.md}`]: !0, [`v-col-lg-${u.lg}`]: !0, [`v-col-xl-${u.xl}`]: !0, [`v-col-xxl-${u.xxl}`]: !0 };
  });
  return (u, f) => h(n).top ? ue(u.$slots, "top", be(X({ key: 0 }, h(s)))) : (u.showSearch || h(n)["top.left"] || h(n)["top.right"]) && h(r) ? (q(), me(ut, { key: 1, lg: "12" }, { default: oe(() => [d(nr, { "data-id": `vdt-top-id-${t.level}` }, { default: oe(() => [h(n)["top.left"] ? ue(u.$slots, "top.left", be(X({ key: 0 }, h(s)))) : u.showSearch ? (q(), me(ut, { key: 1, class: re(["d-flex align-center justify-end", h(p)]) }, { default: oe(() => [u.showSearch ? (q(), me(zl, X({ key: 0 }, h(v), { modelValue: h(o), "onUpdate:modelValue": f[0] || (f[0] = (y) => mt(o) ? o.value = y : null), class: "mt-0 pt-0" }, br(u.searchEvents)), null, 16, ["modelValue"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0), h(n)["top.right"] ? ue(u.$slots, "top.right", be(X({ key: 2 }, h(s)))) : ge("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : ge("", !0);
} }), tu = Symbol("data"), lu = ["colspan"], sa = Ye({ __name: "VDrilldownTable", props: Sr({ colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footers: {}, groupBy: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchEvents: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { ...ar }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = wr(), r = ce(null);
  gt(() => {
    t.level === 1 && a.level !== 1 || a.server || m();
  }), Ul(() => {
    r.value = Object.assign({}, t.server ? ri : ai);
  });
  let a = At(Object.assign({}, t));
  const s = { ...t, ...a }, i = H(o["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), c = H(""), v = vl(), p = g(() => a.sortBy), u = g(() => !!a.loading || a.hideNoData);
  (function(b, V, _) {
    const F = Z(b, (...I) => (Ie(() => F()), V(...I)), _);
  })(t, () => {
    t.level === 1 && a.level !== 1 || m(), a.itemsPerPage = t.itemsPerPage;
  }, { immediate: !1 }), Z(() => t.items, () => {
    t.loading || m();
  }, { deep: !0 }), Z(() => t.loading, () => {
    if (t.loading)
      return a.loading = t.loading, !1;
    m();
  });
  const f = (b) => {
    const V = a.loaderType;
    return !(b && (V === "skelton" || Array.isArray(V) && V.length === 1 && V[0] === "skelton" || !a.showDrilldownWhenLoading));
  }, y = g(() => ((b) => {
    const { elevation: V, isDrilldown: _, isHover: F, isServerSide: I, level: T, separator: M } = b;
    return { [`${te}--child`]: _, [`${te}--hover`]: F, [`${te}--level-${T}`]: !0, [`${te}--server`]: I, [`${te}--separator-${M}`]: M, [`${te}`]: !0, [`elevation-${V}`]: parseInt(V) > 0 };
  })({ elevation: a.elevation, isDrilldown: t.isDrilldown, isHover: a.hover, isServerSide: !1, level: a.level, separator: a.separator })), C = g(() => ((b) => {
    const { colors: V, level: _, theme: F } = b;
    let I = {};
    typeof V == "object" && V !== null && (I = gn({ colors: V, level: _, prop: "table", themeColors: F }));
    const T = { borderBottom: "none" };
    return I.bottomBorder && (T.borderBottom = `1px solid ${I.bottomBorder}`), T;
  })({ colors: a.colors, level: a.level, theme: v }));
  function m() {
    var b, V;
    t.drilldown ? a = ((_) => {
      const { drilldown: F, rawItem: I, level: T, levels: M, loadedDrilldown: O } = _;
      let j = O;
      j = Ct(O, F);
      const z = (O.items || [{}]).find((K) => {
        const L = K[O.drilldownKey];
        let R = {};
        return I && (R = I[O.drilldownKey]), L === R;
      });
      return j = Ct(O, z[O.itemChildrenKey]), M === T && (j.showExpand = !1), j;
    })({ drilldown: t.drilldown, level: t.level, levels: t.levels, loadedDrilldown: a, matchColumnWidths: t.matchColumnWidths, rawItem: (b = t.item) == null ? void 0 : b.raw }) : (a = Ct(a, t), t.matchColumnWidths && ((V = a == null ? void 0 : a.columnWidths) == null ? void 0 : V.length) === 0 && (a.columnWidths = ((_) => {
      const { tableId: F } = _, I = [], T = h(F), M = document.querySelectorAll(`[data-vdt-id="${T}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(M).length > 0)
        for (let O = 0; O < M.length; O += 1) {
          const j = M[O];
          I.push(j.offsetWidth);
        }
      return I;
    })({ tableId: i })));
  }
  function S(b) {
    let V = { ...s, ...a, ...b };
    t.server && (V = { ...a, ...s, ...b }), ((_) => {
      const { data: F, drilldownData: I, emit: T } = _;
      F.isExpanded(F.item) && T("update:drilldown", I), T("update:expanded", F.item);
    })({ data: b, drilldownData: V, emit: l });
  }
  function w(b) {
    return { items: b.items, itemsPerPage: b.itemsPerPage, page: b.page, search: c.value, server: b.server, sortBy: b.sortBy };
  }
  const B = function(b) {
    const V = hr();
    function _(T) {
      var M;
      const O = wt.get(b) || /* @__PURE__ */ new Set();
      O.add(T), wt.set(b, O);
      const j = () => F(T);
      return (M = V == null ? void 0 : V.cleanups) == null || M.push(j), j;
    }
    function F(T) {
      const M = wt.get(b);
      M && (M.delete(T), M.size || I());
    }
    function I() {
      wt.delete(b);
    }
    return { on: _, once: function(T) {
      return _(function M(...O) {
        F(M), T(...O);
      });
    }, off: F, emit: function(T, M) {
      var O;
      (O = wt.get(b)) == null || O.forEach((j) => j(T, M));
    }, reset: I };
  }(tu), $ = B.on(function(b) {
    t.level === 1 && b.drilldown.server && l("update:options", { ...b });
  });
  function A(b) {
    a.itemsPerPage = b;
    const V = w(a), _ = { drilldown: { ...t, ...V, itemsPerPage: b }, itemsPerPage: b, name: "update:itemsPerPage" };
    B.emit(_), l("update:itemsPerPage", b);
  }
  function E(b) {
    a.page = b;
    const V = w(a), _ = { drilldown: { ...t, ...V, page: b }, name: "update:page", page: b };
    B.emit(_), l("update:page", b);
  }
  xr(() => {
    $();
  });
  const k = { debounce: a.searchDebounce, maxWait: a.searchMaxWait };
  function P() {
    n["top.left"] || (a.search = c.value), n["top.left"] && (c.value = t.search || "");
    const b = w(a), V = { drilldown: { ...t, ...b, search: c.value }, search: c.value };
    B.emit(V), l("update:search", V);
  }
  function x(b) {
    a.sortBy = b;
    const V = w(a), _ = { drilldown: { ...t, ...V, sortBy: b }, name: "update:sortBy", sortBy: b };
    B.emit(_), l("update:sortBy", b);
  }
  function D() {
  }
  return Gl(() => t.search, () => {
    P();
  }, k), Gl(c, () => {
    P();
  }, k), (b, V) => {
    const _ = da("VDrilldownTable", !0);
    return h(r) ? (q(), me(ca(h(r)), X({ key: 0 }, b.$attrs, { modelValue: h(a).modelValue, "onUpdate:modelValue": [V[5] || (V[5] = (F) => h(a).modelValue = F), D], class: h(y), "data-vdt-id": h(i), density: h(a).density, "expand-on-click": h(a).expandOnClick, expanded: h(a).expanded, "group-by": h(a).groupBy, headers: h(a).headers, height: h(a).height, "hide-no-data": h(u), hover: h(a).hover, "item-selectable": h(a).itemSelectable, "item-value": h(a).itemValue, items: h(a).items, "items-length": h(a).itemsLength, "items-per-page": h(a).itemsPerPage, "items-per-page-options": h(a).itemsPerPageOptions, loading: (!h(a).loaderType || h(n).loading) && h(a).loading, "multi-sort": h(a).multiSort, "must-sort": h(a).mustSort, "no-data-text": h(a).noDataText, page: h(a).page, "return-object": h(a).returnObject, search: h(c), "select-strategy": h(a).selectStrategy, "show-expand": h(a).showExpand, "sort-by": h(p), style: h(C), "onUpdate:itemsPerPage": A, "onUpdate:page": E, "onUpdate:sortBy": x }), Qe({ top: oe((F) => [(q(), me(h(eu), { key: b.level, items: h(a).items, level: h(a).level, loading: h(a).loading, "search-container-cols": h(a).searchContainerCols, "search-events": h(a).searchEvents, "search-props": h(a).searchProps, "show-search": h(a).showSearch ?? !1, "slot-props": F, "onUpdate:search": V[0] || (V[0] = (I) => c.value = I) }, Qe({ _: 2 }, [Le(h(n), (I, T) => ({ name: T, fn: oe((M) => [ue(b.$slots, T, be(Ve({ ...M })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-events", "search-props", "show-search", "slot-props"]))]), headers: oe((F) => [(q(), me(h(Fi), { key: b.level, colors: h(a).colors, "column-widths": h(a).columnWidths, density: h(a).density, items: h(a).items, level: b.level, "loader-props": h(a).loaderProps, "loader-settings": { colspan: F.columns.length, loaderType: h(a).loaderType, loading: h(a).loading, loadingText: b.loadingText }, "match-column-widths": h(a).matchColumnWidths, "select-strategy": h(a).selectStrategy, "show-select": h(a).showSelect, "slot-props": { ...F }, "sort-asc-icon": h(a).sortAscIcon, "sort-by": h(a).sortBy, "table-model-value": h(a).modelValue }, Qe({ _: 2 }, [Le(h(n), (I, T) => ({ name: T, fn: oe((M) => [ue(b.$slots, T, be(Ve({ ...M })))]) }))]), 1032, ["colors", "column-widths", "density", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: oe((F) => [(q(), me(h(Li), { key: b.level, density: h(a).density, "expand-on-click": h(a).expandOnClick, "group-by": h(a).groupBy, "item-selectable": h(a).itemSelectable, items: h(a).items, level: h(a).level, levels: h(a).levels, "show-expand": h(a).showExpand, "show-select": h(a).showSelect, "slot-props": { level: b.level, ...F }, "onClick:row": V[1] || (V[1] = (I) => {
      l("click:row", I);
    }), "onClick:row:checkbox": V[2] || (V[2] = (I) => {
      l("click:row:checkbox", I);
    }), "onUpdate:expanded": V[3] || (V[3] = (I) => S(I)) }, Qe({ _: 2 }, [Le(h(n), (I, T) => ({ name: T, fn: oe((M) => [ue(b.$slots, T, be(Ve({ ...M })))]) }))]), 1032, ["density", "expand-on-click", "group-by", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": oe(({ columns: F, item: I }) => {
      var T, M, O, j, z, K, L, R, W;
      return [Me("tr", { class: re(f((T = I.raw[b.itemChildrenKey]) == null ? void 0 : T.loading) ? "" : "d-none") }, [Me("td", { class: "px-0 ma-0", colspan: F.length, style: { "vertical-align": "top" } }, [(q(), me(_, { key: I.raw, "column-widths": h(a).columnWidths, density: h(a).density, drilldown: h(a), headers: (M = I.raw[b.itemChildrenKey]) == null ? void 0 : M.headers, "is-drilldown": !0, item: I, "items-length": (O = I.raw[b.itemChildrenKey]) == null ? void 0 : O.itemsLength, "items-per-page": (j = I.raw[b.itemChildrenKey]) == null ? void 0 : j.itemsPerPage, level: b.level + 1, levels: h(a).levels, loaderProps: (z = I.raw[b.itemChildrenKey]) == null ? void 0 : z.loaderProps, loaderType: (K = I.raw[b.itemChildrenKey]) == null ? void 0 : K.loaderType, loading: (L = I.raw[b.itemChildrenKey]) == null ? void 0 : L.loading, loadingText: b.loadingText, "match-column-widths": h(a).matchColumnWidths, "multi-sort": (R = I.raw[b.itemChildrenKey]) == null ? void 0 : R.multiSort, "no-data-text": h(a).noDataText, server: (W = I.raw[b.itemChildrenKey]) == null ? void 0 : W.server, "sort-by": h(a).sortBy, "table-type": h(r), "onUpdate:drilldown": V[4] || (V[4] = (U) => S(U)), "onUpdate:modelValue": D }, Qe({ default: oe(() => [(q(!0), ie(ae, null, Le(Object.keys(h(n)), (U) => ue(b.$slots, U)), 256))]), _: 2 }, [Le(h(n), (U, ne) => ({ name: ne, fn: oe((ee) => [ue(b.$slots, ne, be(Ve({ ...ee })))]) }))]), 1032, ["column-widths", "density", "drilldown", "headers", "item", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "sort-by", "table-type"]))], 8, lu)], 2)];
    }), "footer.prepend": oe(() => [h(n)["footer.prepend"] ? ue(b.$slots, "footer.prepend", { key: 0 }) : ge("", !0)]), _: 2 }, [h(n).loader ? { name: "loader", fn: oe(() => [ue(b.$slots, "loader")]), key: "0" } : void 0, h(n).loading ? { name: "loading", fn: oe(() => [ue(b.$slots, "loading")]), key: "1" } : void 0, h(n).thead ? { name: "thead", fn: oe((F) => [ue(b.$slots, "thead", be(Ve({ ...F, columnWidths: h(a).columnWidths, items: h(a).items, loaderSettings: { colspan: F.columns.length, loaderType: h(a).loaderType, loading: h(a).loading, loadingText: b.loadingText }, matchColumnWidths: h(a).matchColumnWidths, selectStrategy: h(a).selectStrategy, sortBy: h(a).sortBy })))]), key: "2" } : void 0, h(n).body ? { name: "body", fn: oe((F) => [ue(b.$slots, "body", be(Ve({ ...F })))]), key: "3" } : void 0, h(n)["group-header"] ? { name: "group-header", fn: oe((F) => [ue(b.$slots, "group-header", be(Ve({ ...F })))]), key: "4" } : void 0, h(n).tbody ? { name: "tbody", fn: oe((F) => [ue(b.$slots, "tbody", be(Ve({ ...F })))]), key: "5" } : void 0, h(n)["no-data"] ? { name: "no-data", fn: oe(() => [ue(b.$slots, "no-data")]), key: "6" } : void 0, h(n).tfoot || b.showFooterRow ? { name: "tfoot", fn: oe((F) => [h(n).tfoot ? ue(b.$slots, "tfoot", be(X({ key: 0 }, { ...F }))) : (q(), me(h(Gi), { key: b.level, colors: h(a).colors || null, density: h(a).density, footers: h(a).footers || [], items: h(a).items, level: h(a).level, "select-strategy": h(a).selectStrategy, "show-select": h(a).showSelect, "slot-props": { ...F }, "table-model-value": h(a).modelValue }, Qe({ _: 2 }, [Le(h(n), (I, T) => ({ name: T, fn: oe((M) => [ue(b.$slots, T, be(Ve({ ...M })))]) }))]), 1032, ["colors", "density", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "7" } : void 0, h(n).bottom ? { name: "bottom", fn: oe((F) => [(q(), me(h(gi), { key: b.level, "slot-props": F }, Qe({ _: 2 }, [Le(h(n), (I, T) => ({ name: T, fn: oe((M) => [ue(b.$slots, T, be(Ve({ ...M })))]) }))]), 1032, ["slot-props"]))]), key: "8" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "group-by", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : ge("", !0);
  };
} });
sa.install = (e) => {
  e.component("VDrilldownTable", sa);
};
export {
  sa as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset);overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-data-table{width:100%}.v-data-table__table{width:100%;border-collapse:separate;border-spacing:0}.v-data-table__tr--focus{border:1px dotted black}.v-data-table__tr--clickable{cursor:pointer}.v-data-table .v-table__wrapper>table>thead>tr>td,.v-data-table .v-table__wrapper>table>thead>tr th,.v-data-table .v-table__wrapper>table tbody>tr>td,.v-data-table .v-table__wrapper>table tbody>tr th{background:rgb(var(--v-theme-surface))}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end{text-align:end}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end .v-data-table-header__content{flex-direction:row-reverse}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center{text-align:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center .v-data-table-header__content{justify-content:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--no-padding{padding:0 8px}.v-data-table .v-table__wrapper>table>thead>tr>th,.v-data-table .v-table__wrapper>table tbody>tr>th{align-items:center}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--sortable:hover{cursor:pointer;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon{opacity:0}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon{opacity:.5}.v-data-table-column--fixed{position:sticky;z-index:2;left:0}.v-data-table-column--last-fixed{border-right:1px solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-data-table-group-header-row td{background:lightgrey}.v-data-table-group-header-row td>span{padding-left:5px}.v-data-table--loading .v-data-table__td{opacity:.3}.v-data-table-group-header-row__column{padding-left:calc(var(--v-data-table-group-header-row-depth) * 16px)!important}.v-data-table-header__content{display:flex;align-items:center}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;font-size:.875rem;padding:4px;border-radius:50%;background:rgba(var(--v-border-color),var(--v-border-opacity));min-width:20px;min-height:20px;width:20px;height:20px}.v-data-table-progress>th{border:none!important;height:auto!important;padding:0!important}.v-data-table-rows-loading,.v-data-table-rows-no-data{text-align:center}.v-data-table-footer{display:flex;align-items:center;flex-wrap:wrap;padding:0 8px;justify-content:flex-end}.v-data-table-footer__items-per-page{padding-inline-end:24px;display:flex;align-items:center;justify-content:space-between}.v-data-table-footer__items-per-page>span{padding-inline-end:24px}.v-data-table-footer__info{display:flex;padding-inline-end:24px}.v-data-table-footer__pagination{display:flex;align-items:center}.v-data-table-footer__page{padding:0 8px}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn:not(.v-btn-toggle .v-btn){margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;align-items:center;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{grid-row-start:1;grid-column-start:1;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:grid;grid-template-rows:minmax(100%,1fr);grid-template-columns:1fr;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-grid;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-responsive__sizer,.v-responsive__content{position:relative;grid-row-start:1;grid-column-start:1}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0;margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 54px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 52px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 50px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 46px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 44px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 42px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 38px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 36px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 34px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 46px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 44px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 42px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 38px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 36px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 34px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 30px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 28px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 26px;--v-field-padding-bottom: 0px}.v-field--variant-outlined{--v-input-chips-margin-bottom: 2px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:calc(var(--v-field-input-min-height) + var(--v-input-chips-margin-bottom) + 2px);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%;--v-field-input-min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom))}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-table{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-table .v-table-divider{border-right:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>thead>tr>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity));color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tfoot>tr>td,.v-table .v-table__wrapper>table>tfoot>tr>th{border-top:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{background:rgb(var(--v-theme-surface));box-shadow:inset 0 -1px 0 rgba(var(--v-border-color),var(--v-border-opacity));z-index:1}.v-table.v-table--fixed-footer>tfoot>tr>th,.v-table.v-table--fixed-footer>tfoot>tr>td{background:rgb(var(--v-theme-surface));box-shadow:inset 0 1px 0 rgba(var(--v-border-color),var(--v-border-opacity))}.v-table{--v-table-header-height: 56px;border-radius:inherit;line-height:1.5;max-width:100%}.v-table>.v-table__wrapper>table{width:100%;border-spacing:0}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>th{padding:0 16px;transition:height cubic-bezier(.4,0,.2,1)}.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>th{font-weight:500;user-select:none;text-align:start}.v-table--density-default>.v-table__wrapper>table>tbody>tr>th,.v-table--density-default>.v-table__wrapper>table>thead>tr>th,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) + 0px)}.v-table--density-default>.v-table__wrapper>table>tbody>tr>td,.v-table--density-default>.v-table__wrapper>table>thead>tr>td,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) + 0px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 8px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 8px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>th,.v-table--density-compact>.v-table__wrapper>table>thead>tr>th,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 16px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>td,.v-table--density-compact>.v-table__wrapper>table>thead>tr>td,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 16px)}.v-table__wrapper{border-radius:inherit;overflow:auto}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-table--fixed-height>.v-table__wrapper{overflow-y:auto}.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border-bottom:0px!important;position:sticky;top:0}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th{border-top:0px!important;position:sticky;bottom:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1.v-locale--is-ltr,.v-locale--is-ltr .offset-1{margin-left:8.3333333333%}.offset-1.v-locale--is-rtl,.v-locale--is-rtl .offset-1{margin-right:8.3333333333%}.offset-2.v-locale--is-ltr,.v-locale--is-ltr .offset-2{margin-left:16.6666666667%}.offset-2.v-locale--is-rtl,.v-locale--is-rtl .offset-2{margin-right:16.6666666667%}.offset-3.v-locale--is-ltr,.v-locale--is-ltr .offset-3{margin-left:25%}.offset-3.v-locale--is-rtl,.v-locale--is-rtl .offset-3{margin-right:25%}.offset-4.v-locale--is-ltr,.v-locale--is-ltr .offset-4{margin-left:33.3333333333%}.offset-4.v-locale--is-rtl,.v-locale--is-rtl .offset-4{margin-right:33.3333333333%}.offset-5.v-locale--is-ltr,.v-locale--is-ltr .offset-5{margin-left:41.6666666667%}.offset-5.v-locale--is-rtl,.v-locale--is-rtl .offset-5{margin-right:41.6666666667%}.offset-6.v-locale--is-ltr,.v-locale--is-ltr .offset-6{margin-left:50%}.offset-6.v-locale--is-rtl,.v-locale--is-rtl .offset-6{margin-right:50%}.offset-7.v-locale--is-ltr,.v-locale--is-ltr .offset-7{margin-left:58.3333333333%}.offset-7.v-locale--is-rtl,.v-locale--is-rtl .offset-7{margin-right:58.3333333333%}.offset-8.v-locale--is-ltr,.v-locale--is-ltr .offset-8{margin-left:66.6666666667%}.offset-8.v-locale--is-rtl,.v-locale--is-rtl .offset-8{margin-right:66.6666666667%}.offset-9.v-locale--is-ltr,.v-locale--is-ltr .offset-9{margin-left:75%}.offset-9.v-locale--is-rtl,.v-locale--is-rtl .offset-9{margin-right:75%}.offset-10.v-locale--is-ltr,.v-locale--is-ltr .offset-10{margin-left:83.3333333333%}.offset-10.v-locale--is-rtl,.v-locale--is-rtl .offset-10{margin-right:83.3333333333%}.offset-11.v-locale--is-ltr,.v-locale--is-ltr .offset-11{margin-left:91.6666666667%}.offset-11.v-locale--is-rtl,.v-locale--is-rtl .offset-11{margin-right:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-0{margin-left:0}.offset-sm-0.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-0{margin-right:0}.offset-sm-1.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-1{margin-left:8.3333333333%}.offset-sm-1.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-1{margin-right:8.3333333333%}.offset-sm-2.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-2{margin-left:16.6666666667%}.offset-sm-2.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-2{margin-right:16.6666666667%}.offset-sm-3.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-3{margin-left:25%}.offset-sm-3.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-3{margin-right:25%}.offset-sm-4.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-4{margin-left:33.3333333333%}.offset-sm-4.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-4{margin-right:33.3333333333%}.offset-sm-5.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-5{margin-left:41.6666666667%}.offset-sm-5.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-5{margin-right:41.6666666667%}.offset-sm-6.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-6{margin-left:50%}.offset-sm-6.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-6{margin-right:50%}.offset-sm-7.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-7{margin-left:58.3333333333%}.offset-sm-7.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-7{margin-right:58.3333333333%}.offset-sm-8.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-8{margin-left:66.6666666667%}.offset-sm-8.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-8{margin-right:66.6666666667%}.offset-sm-9.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-9{margin-left:75%}.offset-sm-9.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-9{margin-right:75%}.offset-sm-10.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-10{margin-left:83.3333333333%}.offset-sm-10.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-10{margin-right:83.3333333333%}.offset-sm-11.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-11{margin-left:91.6666666667%}.offset-sm-11.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0.v-locale--is-ltr,.v-locale--is-ltr .offset-md-0{margin-left:0}.offset-md-0.v-locale--is-rtl,.v-locale--is-rtl .offset-md-0{margin-right:0}.offset-md-1.v-locale--is-ltr,.v-locale--is-ltr .offset-md-1{margin-left:8.3333333333%}.offset-md-1.v-locale--is-rtl,.v-locale--is-rtl .offset-md-1{margin-right:8.3333333333%}.offset-md-2.v-locale--is-ltr,.v-locale--is-ltr .offset-md-2{margin-left:16.6666666667%}.offset-md-2.v-locale--is-rtl,.v-locale--is-rtl .offset-md-2{margin-right:16.6666666667%}.offset-md-3.v-locale--is-ltr,.v-locale--is-ltr .offset-md-3{margin-left:25%}.offset-md-3.v-locale--is-rtl,.v-locale--is-rtl .offset-md-3{margin-right:25%}.offset-md-4.v-locale--is-ltr,.v-locale--is-ltr .offset-md-4{margin-left:33.3333333333%}.offset-md-4.v-locale--is-rtl,.v-locale--is-rtl .offset-md-4{margin-right:33.3333333333%}.offset-md-5.v-locale--is-ltr,.v-locale--is-ltr .offset-md-5{margin-left:41.6666666667%}.offset-md-5.v-locale--is-rtl,.v-locale--is-rtl .offset-md-5{margin-right:41.6666666667%}.offset-md-6.v-locale--is-ltr,.v-locale--is-ltr .offset-md-6{margin-left:50%}.offset-md-6.v-locale--is-rtl,.v-locale--is-rtl .offset-md-6{margin-right:50%}.offset-md-7.v-locale--is-ltr,.v-locale--is-ltr .offset-md-7{margin-left:58.3333333333%}.offset-md-7.v-locale--is-rtl,.v-locale--is-rtl .offset-md-7{margin-right:58.3333333333%}.offset-md-8.v-locale--is-ltr,.v-locale--is-ltr .offset-md-8{margin-left:66.6666666667%}.offset-md-8.v-locale--is-rtl,.v-locale--is-rtl .offset-md-8{margin-right:66.6666666667%}.offset-md-9.v-locale--is-ltr,.v-locale--is-ltr .offset-md-9{margin-left:75%}.offset-md-9.v-locale--is-rtl,.v-locale--is-rtl .offset-md-9{margin-right:75%}.offset-md-10.v-locale--is-ltr,.v-locale--is-ltr .offset-md-10{margin-left:83.3333333333%}.offset-md-10.v-locale--is-rtl,.v-locale--is-rtl .offset-md-10{margin-right:83.3333333333%}.offset-md-11.v-locale--is-ltr,.v-locale--is-ltr .offset-md-11{margin-left:91.6666666667%}.offset-md-11.v-locale--is-rtl,.v-locale--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-0{margin-left:0}.offset-lg-0.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-0{margin-right:0}.offset-lg-1.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-1{margin-left:8.3333333333%}.offset-lg-1.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-1{margin-right:8.3333333333%}.offset-lg-2.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-2{margin-left:16.6666666667%}.offset-lg-2.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-2{margin-right:16.6666666667%}.offset-lg-3.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-3{margin-left:25%}.offset-lg-3.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-3{margin-right:25%}.offset-lg-4.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-4{margin-left:33.3333333333%}.offset-lg-4.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-4{margin-right:33.3333333333%}.offset-lg-5.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-5{margin-left:41.6666666667%}.offset-lg-5.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-5{margin-right:41.6666666667%}.offset-lg-6.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-6{margin-left:50%}.offset-lg-6.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-6{margin-right:50%}.offset-lg-7.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-7{margin-left:58.3333333333%}.offset-lg-7.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-7{margin-right:58.3333333333%}.offset-lg-8.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-8{margin-left:66.6666666667%}.offset-lg-8.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-8{margin-right:66.6666666667%}.offset-lg-9.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-9{margin-left:75%}.offset-lg-9.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-9{margin-right:75%}.offset-lg-10.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-10{margin-left:83.3333333333%}.offset-lg-10.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-10{margin-right:83.3333333333%}.offset-lg-11.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-11{margin-left:91.6666666667%}.offset-lg-11.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-0{margin-left:0}.offset-xl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-0{margin-right:0}.offset-xl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-1{margin-left:8.3333333333%}.offset-xl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-1{margin-right:8.3333333333%}.offset-xl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-2{margin-left:16.6666666667%}.offset-xl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-2{margin-right:16.6666666667%}.offset-xl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-3{margin-left:25%}.offset-xl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-3{margin-right:25%}.offset-xl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-4{margin-left:33.3333333333%}.offset-xl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-4{margin-right:33.3333333333%}.offset-xl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-5{margin-left:41.6666666667%}.offset-xl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-5{margin-right:41.6666666667%}.offset-xl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-6{margin-left:50%}.offset-xl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-6{margin-right:50%}.offset-xl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-7{margin-left:58.3333333333%}.offset-xl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-7{margin-right:58.3333333333%}.offset-xl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-8{margin-left:66.6666666667%}.offset-xl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-8{margin-right:66.6666666667%}.offset-xl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-9{margin-left:75%}.offset-xl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-9{margin-right:75%}.offset-xl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-10{margin-left:83.3333333333%}.offset-xl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-10{margin-right:83.3333333333%}.offset-xl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-11{margin-left:91.6666666667%}.offset-xl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-11{margin-right:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-0{margin-left:0}.offset-xxl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-0{margin-right:0}.offset-xxl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-1{margin-right:8.3333333333%}.offset-xxl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-2{margin-right:16.6666666667%}.offset-xxl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-3{margin-left:25%}.offset-xxl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-3{margin-right:25%}.offset-xxl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-4{margin-right:33.3333333333%}.offset-xxl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-5{margin-right:41.6666666667%}.offset-xxl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-6{margin-left:50%}.offset-xxl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-6{margin-right:50%}.offset-xxl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-7{margin-right:58.3333333333%}.offset-xxl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-8{margin-right:66.6666666667%}.offset-xxl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-9{margin-left:75%}.offset-xxl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-9{margin-right:75%}.offset-xxl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-10{margin-right:83.3333333333%}.offset-xxl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-11{margin-left:91.6666666667%}.offset-xxl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-11{margin-right:91.6666666667%}}.v-drilldown-table--loader-tr[data-v-fbedf16d]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-fbedf16d]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-fbedf16d]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-fbedf16d]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-2cc4d4ca]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-2cc4d4ca]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-2cc4d4ca]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-12d9fc59]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgba(var(--v-border-color), var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-top:0!important;border-bottom:var(--vdt-border)}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
