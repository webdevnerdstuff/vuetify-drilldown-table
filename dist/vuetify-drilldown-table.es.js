import { Fragment as ae, reactive as At, computed as m, watchEffect as Re, toRefs as sa, capitalize as $t, warn as dl, watch as Z, onScopeDispose as _e, effectScope as Gl, ref as H, unref as b, provide as ye, inject as ve, shallowRef as ue, defineComponent as Ye, camelize as ia, h as ft, getCurrentInstance as cr, TransitionGroup as dr, Transition as lt, createVNode as d, mergeProps as X, nextTick as Ee, isRef as mt, onMounted as gt, toRaw as Ue, resolveDynamicComponent as ua, toRef as G, readonly as Hl, Teleport as pr, withDirectives as $e, vShow as yt, resolveDirective as qe, onBeforeUnmount as nt, Text as vr, onBeforeMount as Kl, cloneVNode as fr, createTextVNode as qt, withModifiers as $l, renderSlot as de, resolveComponent as ca, openBlock as q, createElementBlock as ie, normalizeClass as re, normalizeStyle as Fe, createElementVNode as Le, createBlock as me, withCtx as oe, normalizeProps as Se, guardReactiveProps as Ie, createCommentVNode as ge, toDisplayString as mr, useSlots as Ft, renderList as Te, getCurrentScope as gr, toHandlers as yr, mergeDefaults as hr, useAttrs as br, onUnmounted as Sr, createSlots as Qe } from "vue";
import { useTheme as pl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-5
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
function da(e, l, t) {
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
function Yt(e, l, t) {
  return e != null && l && typeof l == "string" ? e[l] !== void 0 ? e[l] : da(e, (l = (l = l.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function ke(e, l, t) {
  if (l == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof l != "function")
      return t;
    const o = l(e, t);
    return o === void 0 ? t : o;
  }
  if (typeof l == "string")
    return Yt(e, l, t);
  if (Array.isArray(l))
    return da(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
function yn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (t, n) => l + n);
}
function J(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${l}` : void 0;
}
function Fl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Vl(e) {
  return e && "$el" in e ? e.$el : e;
}
const hn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Vt(e, l, t) {
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    l.some((a) => a instanceof RegExp ? a.test(r) : a === r) && !(t != null && t.some((a) => a === r)) ? n[r] = e[r] : o[r] = e[r];
  return [n, o];
}
function Ul(e, l) {
  const t = { ...e };
  return l.forEach((n) => delete t[n]), t;
}
function ql(e) {
  return Vt(e, ["class", "style", "id", /^data-/]);
}
function De(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ct(e) {
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
    Fl(r) && Fl(a) ? n[o] = rt(r, a, t) : Array.isArray(r) && Array.isArray(a) && t ? n[o] = t(r, a) : n[o] = a;
  }
  return n;
}
function pa(e) {
  return e.map((l) => l.type === ae ? pa(l.children) : l).flat();
}
function et() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (et.cache.has(e))
    return et.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return et.cache.set(e, l), l;
}
function Ht(e, l) {
  if (!l || typeof l != "object")
    return [];
  if (Array.isArray(l))
    return l.map((t) => Ht(e, t)).flat(1);
  if (Array.isArray(l.children))
    return l.children.map((t) => Ht(e, t)).flat(1);
  if (l.component) {
    if (Object.getOwnPropertySymbols(l.component.provides).includes(e))
      return [l.component];
    if (l.component.subTree)
      return Ht(e, l.component.subTree).flat(1);
  }
  return [];
}
function Yl(e) {
  const l = At({}), t = m(e);
  return Re(() => {
    for (const n in t.value)
      l[n] = t.value[n];
  }, { flush: "sync" }), sa(l);
}
function Xt(e, l) {
  return e.includes(l);
}
et.cache = /* @__PURE__ */ new Map();
const wr = /^on[^a-z]/, El = (e) => wr.test(e);
function bn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Me = () => [Function, Array];
function Sn(e, l) {
  return !!(e[l = "on" + $t(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function Jt(e, l) {
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
      s ? s.focus() : Jt(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((a = t[0]) == null || a.focus());
}
const va = ["top", "bottom"], xr = ["start", "end", "left", "right"];
function Il(e, l) {
  let [t, n] = e.split(" ");
  return n || (n = Xt(va, t) ? "start" : Xt(xr, t) ? "top" : "center"), { side: wn(t, l), align: wn(n, l) };
}
function wn(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function Sl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function wl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function xn(e) {
  return { side: e.align, align: e.side };
}
function Cn(e) {
  return Xt(va, e.side) ? "y" : "x";
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
function kn(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function Xl(e) {
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
const Wt = /* @__PURE__ */ new WeakMap();
function fa(e) {
  dl(`Vuetify: ${e}`);
}
function Bn(e) {
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
    t = Gl(), t.run(() => l.length ? l(() => {
      t == null || t.stop(), n();
    }) : l());
  }
  Z(e, (o) => {
    o && !t ? n() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), _e(() => {
    t == null || t.stop();
  });
}
const Jl = Symbol.for("vuetify:defaults");
function Zl() {
  const e = ve(Jl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Xe(e, l) {
  const t = Zl(), n = H(e), o = m(() => {
    if (b(l == null ? void 0 : l.disabled))
      return t.value;
    const r = b(l == null ? void 0 : l.scoped), a = b(l == null ? void 0 : l.reset), s = b(l == null ? void 0 : l.root);
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
  return ye(Jl, o), o;
}
function Cr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Zl();
  const n = we("useDefaults");
  if (l = l ?? n.type.name ?? n.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const o = m(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? l];
  }), r = new Proxy(e, { get(s, i) {
    var v, p, u, f;
    const c = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(v = o.value) == null ? void 0 : v[i], c].filter((y) => y != null) : typeof i != "string" || function(y, C) {
      var g, k;
      return ((g = y.props) == null ? void 0 : g[C]) !== void 0 || ((k = y.props) == null ? void 0 : k[et(C)]) !== void 0;
    }(n.vnode, i) ? c : ((p = o.value) == null ? void 0 : p[i]) ?? ((f = (u = t.value) == null ? void 0 : u.global) == null ? void 0 : f[i]) ?? c;
  } }), a = ue();
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
      }(Jl)) == null ? void 0 : s.value) ?? {}, a.value));
    });
  } };
}
function dt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return fa("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = N(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(t) {
      return Vt(t, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, n) {
      const o = Zl();
      if (!o.value)
        return e._setup(t, n);
      const { props: r, provideSubDefaults: a } = Cr(t, t._as ?? e.name, o), s = e._setup(r, n);
      return a(), s;
    };
  }
  return e;
}
function Y() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? dt : Ye)(l);
}
function ma(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return Y()({ name: t ?? $t(ia(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...se() }, setup(n, o) {
    let { slots: r } = o;
    return () => {
      var a;
      return ft(n.tag, { class: [e, n.class], style: n.style }, (a = r.default) == null ? void 0 : a.call(r));
    };
  } });
}
function ga(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const Zt = "cubic-bezier(0.4, 0, 0.2, 1)";
function we(e, l) {
  const t = cr();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return t;
}
function ze() {
  const e = we(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return et((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ya = 0, Kt = /* @__PURE__ */ new WeakMap();
function Ne() {
  const e = we("getUid");
  if (Kt.has(e))
    return Kt.get(e);
  {
    const l = ya++;
    return Kt.set(e, l), l;
  }
}
function Qt(e, l) {
  const t = [];
  if (l && e && !l.contains(e))
    return t;
  for (; e && (Ql(e) && t.push(e), e !== l); )
    e = e.parentElement;
  return t;
}
function Ql(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
Ne.reset = () => {
  ya = 0, Kt = /* @__PURE__ */ new WeakMap();
};
const Oe = typeof window < "u", en = Oe && "IntersectionObserver" in window, Ol = Oe && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function le(e) {
  we("useRender").render = e;
}
const kr = N({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Pe(e, l, t) {
  return Y()({ name: e, props: kr({ mode: t, origin: l }), setup(n, o) {
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
      const s = n.group ? dr : lt;
      return ft(s, { name: n.disabled ? "" : e, css: !n.disabled, ...n.group ? void 0 : { mode: n.mode }, ...n.disabled ? {} : a }, r.default);
    };
  } });
}
function ha(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Y()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(n, o) {
    let { slots: r } = o;
    return () => ft(lt, { name: n.disabled ? "" : e, css: !n.disabled, ...n.disabled ? {} : l }, r.default);
  } });
}
function ba() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = ia(`offset-${l}`);
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
const Br = N({ target: Object }, "v-dialog-transition"), Sa = Y()({ name: "VDialogTransition", props: Br(), setup(e, l) {
  let { slots: t } = l;
  const n = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, r) {
    var u;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), o.style.visibility = "";
    const { x: a, y: s, sx: i, sy: c, speed: v } = _n(e.target, o), p = st(o, [{ transform: `translate(${a}px, ${s}px) scale(${i}, ${c})`, opacity: 0 }, {}], { duration: 225 * v, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (u = Pn(o)) == null || u.forEach((f) => {
      st(f, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * v, easing: Zt });
    }), p.finished.then(() => r());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, r) {
    var p;
    await new Promise((u) => requestAnimationFrame(u));
    const { x: a, y: s, sx: i, sy: c, speed: v } = _n(e.target, o);
    st(o, [{}, { transform: `translate(${a}px, ${s}px) scale(${i}, ${c})`, opacity: 0 }], { duration: 125 * v, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => r()), (p = Pn(o)) == null || p.forEach((u) => {
      st(u, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * v, easing: Zt });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(lt, X({ name: "dialog-transition" }, n, { css: !1 }), t) : d(lt, { name: "dialog-transition" }, t);
} });
function Pn(e) {
  var t;
  const l = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return l && [...l];
}
function _n(e, l) {
  const t = e.getBoundingClientRect(), n = Xl(l), [o, r] = getComputedStyle(l).transformOrigin.split(" ").map((k) => parseFloat(k)), [a, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  a === "left" || s === "left" ? i -= t.width / 2 : a !== "right" && s !== "right" || (i += t.width / 2);
  let c = t.top + t.height / 2;
  a === "top" || s === "top" ? c -= t.height / 2 : a !== "bottom" && s !== "bottom" || (c += t.height / 2);
  const v = t.width / n.width, p = t.height / n.height, u = Math.max(1, v, p), f = v / u || 0, y = p / u || 0, C = n.width * n.height / (window.innerWidth * window.innerHeight), g = C > 0.12 ? Math.min(1.5, 10 * (C - 0.12) + 1) : 1;
  return { x: i - (o + n.left), y: c - (r + n.top), sx: f, sy: y, speed: g };
}
Pe("fab-transition", "center center", "out-in"), Pe("dialog-bottom-transition"), Pe("dialog-top-transition"), Pe("fade-transition"), Pe("scale-transition"), Pe("scroll-x-transition"), Pe("scroll-x-reverse-transition"), Pe("scroll-y-transition"), Pe("scroll-y-reverse-transition"), Pe("slide-x-transition"), Pe("slide-x-reverse-transition");
const wa = Pe("slide-y-transition");
Pe("slide-y-reverse-transition");
const Pr = ha("expand-transition", ba()), xa = ha("expand-x-transition", ba("", !0)), _r = N({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ve = Y(!1)({ name: "VDefaultsProvider", props: _r(), setup(e, l) {
  let { slots: t } = l;
  const { defaults: n, disabled: o, reset: r, root: a, scoped: s } = sa(e);
  return Xe(n, { reset: r, root: a, scoped: s, disabled: o }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} });
function xl(e, l) {
  return { x: e.x + l.x, y: e.y + l.y };
}
function An(e, l) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: n } = e;
    return xl({ x: n === "left" ? 0 : n === "center" ? l.width / 2 : n === "right" ? l.width : n, y: t === "top" ? 0 : t === "bottom" ? l.height : t }, l);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: n } = e;
    return xl({ x: t === "left" ? 0 : t === "right" ? l.width : t, y: n === "top" ? 0 : n === "center" ? l.height / 2 : n === "bottom" ? l.height : n }, l);
  }
  return xl({ x: l.width / 2, y: l.height / 2 }, l);
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
  const { preferredAnchor: n, preferredOrigin: o } = Yl(() => {
    const f = Il(l.location, e.isRtl.value), y = l.origin === "overlap" ? f : l.origin === "auto" ? Sl(f) : Il(l.origin, e.isRtl.value);
    return f.side === y.side && f.align === wl(y).align ? { preferredAnchor: xn(f), preferredOrigin: xn(y) } : { preferredAnchor: f, preferredOrigin: y };
  }), [r, a, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((f) => m(() => {
    const y = parseFloat(l[f]);
    return isNaN(y) ? 1 / 0 : y;
  })), c = m(() => {
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
      const h = Xl(x);
      return D ? h.x += parseFloat(x.style.right || 0) : h.x -= parseFloat(x.style.left || 0), h.y -= parseFloat(x.style.top || 0), h;
    }(e.contentEl.value, e.isRtl.value), C = Qt(e.contentEl.value);
    C.length || (C.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const g = C.reduce((x, D) => {
      const h = D.getBoundingClientRect(), F = new ct({ x: D === document.documentElement ? 0 : h.x, y: D === document.documentElement ? 0 : h.y, width: D.clientWidth, height: D.clientHeight });
      return x ? new ct({ x: Math.max(x.left, F.left), y: Math.max(x.top, F.top), width: Math.min(x.right, F.right) - Math.max(x.left, F.left), height: Math.min(x.bottom, F.bottom) - Math.max(x.top, F.top) }) : F;
    }, void 0);
    g.x += 12, g.y += 12, g.width -= 24, g.height -= 24;
    let k = { anchor: n.value, origin: o.value };
    function S(x) {
      const D = new ct(y), h = An(x.anchor, f), F = An(x.origin, D);
      let { x: _, y: V } = (T = F, { x: (I = h).x - T.x, y: I.y - T.y });
      var I, T;
      switch (x.anchor.side) {
        case "top":
          V -= c.value[0];
          break;
        case "bottom":
          V += c.value[0];
          break;
        case "left":
          _ -= c.value[0];
          break;
        case "right":
          _ += c.value[0];
      }
      switch (x.anchor.align) {
        case "top":
          V -= c.value[1];
          break;
        case "bottom":
          V += c.value[1];
          break;
        case "left":
          _ -= c.value[1];
          break;
        case "right":
          _ += c.value[1];
      }
      return D.x += _, D.y += V, D.width = Math.min(D.width, s.value), D.height = Math.min(D.height, i.value), { overflows: kn(D, g), x: _, y: V };
    }
    let B = 0, $ = 0;
    const A = { x: 0, y: 0 }, E = { x: !1, y: !1 };
    let w = -1;
    for (; ; ) {
      if (w++ > 10) {
        dl("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x, y: D, overflows: h } = S(k);
      B += x, $ += D, y.x += x, y.y += D;
      {
        const F = Cn(k.anchor), _ = h.x.before || h.x.after, V = h.y.before || h.y.after;
        let I = !1;
        if (["x", "y"].forEach((T) => {
          if (T === "x" && _ && !E.x || T === "y" && V && !E.y) {
            const M = { anchor: { ...k.anchor }, origin: { ...k.origin } }, O = T === "x" ? F === "y" ? wl : Sl : F === "y" ? Sl : wl;
            M.anchor = O(M.anchor), M.origin = O(M.origin);
            const { overflows: j } = S(M);
            (j[T].before <= h[T].before && j[T].after <= h[T].after || j[T].before + j[T].after < (h[T].before + h[T].after) / 2) && (k = M, I = E[T] = !0);
          }
        }), I)
          continue;
      }
      h.x.before && (B += h.x.before, y.x += h.x.before), h.x.after && (B -= h.x.after, y.x -= h.x.after), h.y.before && ($ += h.y.before, y.y += h.y.before), h.y.after && ($ -= h.y.after, y.y -= h.y.after);
      {
        const F = kn(y, g);
        A.x = g.width - F.x.before - F.x.after, A.y = g.height - F.y.before - F.y.after, B += F.x.before, y.x += F.x.before, $ += F.y.before, y.y += F.y.before;
      }
      break;
    }
    const P = Cn(k.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${k.anchor.side} ${k.anchor.align}`, transformOrigin: `${k.origin.side} ${k.origin.align}`, top: J(Cl($)), left: e.isRtl.value ? void 0 : J(Cl(B)), right: e.isRtl.value ? J(Cl(-B)) : void 0, minWidth: J(P === "y" ? Math.min(r.value, f.width) : r.value), maxWidth: J($n(Ct(A.x, r.value === 1 / 0 ? 0 : r.value, s.value))), maxHeight: J($n(Ct(A.y, a.value === 1 / 0 ? 0 : a.value, i.value))) }), { available: A, contentBox: y };
  }
  return Z([e.activatorEl, e.contentEl], (f, y) => {
    let [C, g] = f, [k, S] = y;
    k && p.unobserve(k), C && p.observe(C), S && p.unobserve(S), g && p.observe(g);
  }, { immediate: !0 }), _e(() => {
    p.disconnect();
  }), Z(() => [n.value, o.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => u()), Ee(() => {
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
} }, Ar = N({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ca }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Cl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function $n(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Dl = !0;
const el = [];
let Fn = -1;
function Tl() {
  cancelAnimationFrame(Fn), Fn = requestAnimationFrame(() => {
    const e = el.shift();
    e && e(), el.length ? Tl() : Dl = !0;
  });
}
const Ut = { none: null, close: function(e) {
  Vn(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, n = [.../* @__PURE__ */ new Set([...Qt(e.activatorEl.value, l.contained ? t : void 0), ...Qt(e.contentEl.value, l.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, r = (a = t || document.documentElement, Ql(a) && a);
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
    }, !Dl || el.length ? (el.push(i), Tl()) : (Dl = !1, i(), Tl());
  }
  r = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      Vn(e.activatorEl.value ?? e.contentEl.value, (s) => {
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
} }, $r = N({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Ut } }, "VOverlay-scroll-strategies");
function Vn(e, l) {
  const t = [document, ...Qt(e)];
  t.forEach((n) => {
    n.addEventListener("scroll", l, { passive: !0 });
  }), _e(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", l);
    });
  });
}
const Ll = Symbol.for("vuetify:v-menu"), Fr = N({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Vr = N({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Fr() }, "VOverlay-activator");
function Er(e, l) {
  let { isActive: t, isTop: n } = l;
  const o = H();
  let r = !1, a = !1, s = !0;
  const i = m(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), c = m(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: v, runCloseDelay: p } = function(w, P) {
    const x = {}, D = (h) => () => {
      if (!Oe)
        return Promise.resolve(!0);
      const F = h === "openDelay";
      return x.closeDelay && window.clearTimeout(x.closeDelay), delete x.closeDelay, x.openDelay && window.clearTimeout(x.openDelay), delete x.openDelay, new Promise((_) => {
        const V = parseInt(w[h] ?? 0, 10);
        x[h] = window.setTimeout(() => {
          P == null || P(F), _(F);
        }, V);
      });
    };
    return { runCloseDelay: D("closeDelay"), runOpenDelay: D("openDelay") };
  }(e, (w) => {
    w !== (e.openOnHover && r || i.value && a) || e.openOnHover && t.value && !n.value || (t.value !== w && (s = !0), t.value = w);
  }), u = (w) => {
    w.stopPropagation(), o.value = w.currentTarget || w.target, t.value = !t.value;
  }, f = (w) => {
    var P;
    (P = w.sourceCapabilities) != null && P.firesTouchEvents || (r = !0, o.value = w.currentTarget || w.target, v());
  }, y = (w) => {
    r = !1, p();
  }, C = (w) => {
    Ol && !w.target.matches(":focus-visible") || (a = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, v());
  }, g = (w) => {
    a = !1, w.stopPropagation(), p();
  }, k = m(() => {
    const w = {};
    return c.value && (w.onClick = u), e.openOnHover && (w.onMouseenter = f, w.onMouseleave = y), i.value && (w.onFocus = C, w.onBlur = g), w;
  }), S = m(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, v();
    }, w.onMouseleave = () => {
      r = !1, p();
    }), i.value && (w.onFocusin = () => {
      a = !0, v();
    }, w.onFocusout = () => {
      a = !1, p();
    }), e.closeOnContentClick) {
      const P = ve(Ll, null);
      w.onClick = () => {
        t.value = !1, P == null || P.closeParents();
      };
    }
    return w;
  }), B = m(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      s && (r = !0, s = !1, v());
    }, w.onMouseleave = () => {
      r = !1, p();
    }), w;
  });
  Z(n, (w) => {
    !w || (!e.openOnHover || r || i.value && a) && (!i.value || a || e.openOnHover && r) || (t.value = !1);
  });
  const $ = H();
  Re(() => {
    $.value && Ee(() => {
      o.value = Vl($.value);
    });
  });
  const A = we("useActivator");
  let E;
  return Z(() => !!e.activator, (w) => {
    w && Oe ? (E = Gl(), E.run(() => {
      (function(P, x, D) {
        let { activatorEl: h, activatorEvents: F } = D;
        function _() {
          let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I(), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.activatorProps;
          T && function(O, j) {
            Object.keys(j).forEach((z) => {
              if (El(z)) {
                const K = bn(z), L = Wt.get(O);
                if (j[z] == null)
                  L == null || L.forEach((R) => {
                    const [W, U] = R;
                    W === K && (O.removeEventListener(K, U), L.delete(R));
                  });
                else if (!L || ![...L].some((R) => R[0] === K && R[1] === j[z])) {
                  O.addEventListener(K, j[z]);
                  const R = L || /* @__PURE__ */ new Set();
                  R.add([K, j[z]]), Wt.has(O) || Wt.set(O, R);
                }
              } else
                j[z] == null ? O.removeAttribute(z) : O.setAttribute(z, j[z]);
            });
          }(T, X(F.value, M));
        }
        function V() {
          let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I(), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.activatorProps;
          T && function(O, j) {
            Object.keys(j).forEach((z) => {
              if (El(z)) {
                const K = bn(z), L = Wt.get(O);
                L == null || L.forEach((R) => {
                  const [W, U] = R;
                  W === K && (O.removeEventListener(K, U), L.delete(R));
                });
              } else
                O.removeAttribute(z);
            });
          }(T, X(F.value, M));
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
          return h.value = (T == null ? void 0 : T.nodeType) === Node.ELEMENT_NODE ? T : null, h.value;
        }
        Z(() => P.activator, (T, M) => {
          if (M && T !== M) {
            const O = I(M);
            O && V(O);
          }
          T && Ee(() => _());
        }, { immediate: !0 }), Z(() => P.activatorProps, () => {
          _();
        }), _e(() => {
          V();
        });
      })(e, A, { activatorEl: o, activatorEvents: k });
    })) : E && E.stop();
  }, { flush: "post", immediate: !0 }), _e(() => {
    E == null || E.stop();
  }), { activatorEl: o, activatorRef: $, activatorEvents: k, contentEvents: S, scrimEvents: B };
}
function tn(e) {
  return Yl(() => {
    const l = [], t = {};
    return e.value.background && (Bn(e.value.background) ? t.backgroundColor = e.value.background : l.push(`bg-${e.value.background}`)), e.value.text && (Bn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: t };
  });
}
function We(e, l) {
  const t = m(() => ({ text: mt(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = tn(t);
  return { textColorClasses: n, textColorStyles: o };
}
function pt(e, l) {
  const t = m(() => ({ background: mt(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = tn(t);
  return { backgroundColorClasses: n, backgroundColorStyles: o };
}
const Et = N({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function It(e) {
  return { dimensionStyles: m(() => ({ height: J(e.height), maxHeight: J(e.maxHeight), maxWidth: J(e.maxWidth), minHeight: J(e.minHeight), minWidth: J(e.minWidth), width: J(e.width) })) };
}
const vl = ["sm", "md", "lg", "xl", "xxl"], Ir = Symbol.for("vuetify:display");
function Or() {
  if (!Oe)
    return ue(!1);
  const { ssr: e } = function() {
    const l = ve(Ir);
    if (!l)
      throw new Error("Could not find Vuetify display injection");
    return l;
  }();
  if (e) {
    const l = ue(!1);
    return gt(() => {
      l.value = !0;
    }), l;
  }
  return ue(!0);
}
const Dr = N({ eager: Boolean }, "lazy");
function fe(e, l, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const r = we("useProxiedModel"), a = H(e[l] !== void 0 ? e[l] : t), s = et(l), i = m(s !== l ? () => {
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
  const c = m({ get() {
    const v = e[l];
    return n(i.value ? v : a.value);
  }, set(v) {
    const p = o(v), u = Ue(i.value ? e[l] : a.value);
    u !== p && n(u) !== v && (a.value = p, r == null || r.emit(`update:${l}`, p));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => i.value ? e[l] : a.value }), c;
}
const ka = Symbol.for("vuetify:locale");
function ht() {
  const e = ve(ka);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ot() {
  const e = ve(ka);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function ln(e, l) {
  const t = ua("RouterLink"), n = m(() => !(!e.href && !e.to)), o = m(() => (n == null ? void 0 : n.value) || Sn(l, "click") || Sn(e, "click"));
  if (typeof t == "string")
    return { isLink: n, isClickable: o, href: G(e, "href") };
  const r = e.to ? t.useLink(e) : void 0;
  return { isLink: n, isClickable: o, route: r == null ? void 0 : r.route, navigate: r == null ? void 0 : r.navigate, isActive: r && m(() => {
    var a, s;
    return e.exact ? (a = r.isExactActive) == null ? void 0 : a.value : (s = r.isActive) == null ? void 0 : s.value;
  }), href: m(() => e.to ? r == null ? void 0 : r.route.value.href : e.href) };
}
const nn = N({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let kl = !1;
function Ba() {
  const e = we("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const En = Symbol.for("vuetify:stack"), St = At([]), In = Symbol.for("vuetify:theme"), be = N({ theme: String }, "theme");
function Be(e) {
  we("provideTheme");
  const l = ve(In, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const t = m(() => e.theme ?? (l == null ? void 0 : l.name.value)), n = m(() => l.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...l, name: t, themeClasses: n };
  return ye(In, o), o;
}
const Dt = N({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ke = (e, l) => {
  let { slots: t } = l;
  const { transition: n, disabled: o, ...r } = e, { component: a = lt, ...s } = typeof n == "object" ? n : {};
  return ft(a, X(typeof n == "string" ? { name: o ? "" : n } : s, r, { disabled: o }), t);
};
function Tr() {
  return !0;
}
function On(e, l, t) {
  if (!e || Pa(e, t) === !1)
    return !1;
  const n = ga(l);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(l), !o.some((r) => r == null ? void 0 : r.contains(e.target));
}
function Pa(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || Tr)(e);
}
function Dn(e, l) {
  const t = ga(e);
  l(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && l(t);
}
const Lr = { mounted(e, l) {
  const t = (o) => function(r, a, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    a._clickOutside.lastMousedownWasOutside && On(r, a, s) && setTimeout(() => {
      Pa(r, s) && i && i(r);
    }, 0);
  }(o, e, l), n = (o) => {
    e._clickOutside.lastMousedownWasOutside = On(o, e, l);
  };
  Dn(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", n, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: t, onMousedown: n };
}, unmounted(e, l) {
  e._clickOutside && (Dn(e, (t) => {
    var r;
    if (!t || !((r = e._clickOutside) != null && r[l.instance.$.uid]))
      return;
    const { onClick: n, onMousedown: o } = e._clickOutside[l.instance.$.uid];
    t.removeEventListener("click", n, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function Mr(e) {
  const { modelValue: l, color: t, ...n } = e;
  return d(lt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", X({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, n), null)] });
}
const _a = N({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [String, Boolean], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Vr(), ...se(), ...Et(), ...Dr(), ...Ar(), ...$r(), ...be(), ...Dt() }, "VOverlay"), Tn = Y()({ name: "VOverlay", directives: { ClickOutside: Lr }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ..._a() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var z, K;
  let { slots: t, attrs: n, emit: o } = l;
  const r = fe(e, "modelValue"), a = m({ get: () => r.value, set: (L) => {
    L && e.disabled || (r.value = L);
  } }), { teleportTarget: s } = (i = m(() => e.attach || e.contained), { teleportTarget: m(() => {
    const L = i.value;
    if (L === !0 || !Oe)
      return;
    const R = L === !1 ? document.body : typeof L == "string" ? document.querySelector(L) : L;
    if (R == null)
      return void dl(`Unable to locate target ${L}`);
    let W = R.querySelector(":scope > .v-overlay-container");
    return W || (W = document.createElement("div"), W.className = "v-overlay-container", R.appendChild(W)), W;
  }) });
  var i;
  const { themeClasses: c } = Be(e), { rtlClasses: v, isRtl: p } = Ot(), { hasContent: u, onAfterLeave: f } = function(L, R) {
    const W = ue(!1), U = m(() => W.value || L.eager || R.value);
    return Z(R, () => W.value = !0), { isBooted: W, hasContent: U, onAfterLeave: function() {
      L.eager || (W.value = !1);
    } };
  }(e, a), y = pt(m(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: C, localTop: g, stackStyles: k } = function(L, R, W) {
    const U = we("useStack"), ne = !W, ee = ve(En, void 0), Q = At({ activeChildren: /* @__PURE__ */ new Set() });
    ye(En, Q);
    const ce = ue(+R.value);
    tt(L, () => {
      var bt;
      const je = (bt = St.at(-1)) == null ? void 0 : bt[1];
      ce.value = je ? je + 10 : +R.value, ne && St.push([U.uid, ce.value]), ee == null || ee.activeChildren.add(U.uid), _e(() => {
        if (ne) {
          const ir = Ue(St).findIndex((ur) => ur[0] === U.uid);
          St.splice(ir, 1);
        }
        ee == null || ee.activeChildren.delete(U.uid);
      });
    });
    const Ce = ue(!0);
    ne && Re(() => {
      var bt;
      const je = ((bt = St.at(-1)) == null ? void 0 : bt[0]) === U.uid;
      setTimeout(() => Ce.value = je);
    });
    const bl = m(() => !Q.activeChildren.size);
    return { globalTop: Hl(Ce), localTop: bl, stackStyles: m(() => ({ zIndex: ce.value })) };
  }(a, G(e, "zIndex"), e._disableGlobalStack), { activatorEl: S, activatorRef: B, activatorEvents: $, contentEvents: A, scrimEvents: E } = Er(e, { isActive: a, isTop: g }), { dimensionStyles: w } = It(e), P = Or(), { scopeId: x } = Ba();
  Z(() => e.disabled, (L) => {
    L && (a.value = !1);
  });
  const D = H(), h = H(), { contentStyles: F, updateLocation: _ } = function(L, R) {
    const W = H({}), U = H();
    function ne(ee) {
      var Q;
      (Q = U.value) == null || Q.call(U, ee);
    }
    return Oe && (tt(() => !(!R.isActive.value || !L.locationStrategy), (ee) => {
      var Q, ce;
      Z(() => L.locationStrategy, ee), _e(() => {
        U.value = void 0;
      }), typeof L.locationStrategy == "function" ? U.value = (Q = L.locationStrategy(R, L, W)) == null ? void 0 : Q.updateLocation : U.value = (ce = Ca[L.locationStrategy](R, L, W)) == null ? void 0 : ce.updateLocation;
    }), window.addEventListener("resize", ne, { passive: !0 }), _e(() => {
      window.removeEventListener("resize", ne), U.value = void 0;
    })), { contentStyles: W, updateLocation: U };
  }(e, { isRtl: p, contentEl: h, activatorEl: S, isActive: a });
  function V(L) {
    o("click:outside", L), e.persistent ? j() : a.value = !1;
  }
  function I() {
    return a.value && C.value;
  }
  function T(L) {
    var R, W;
    L.key === "Escape" && C.value && (e.persistent ? j() : (a.value = !1, (R = h.value) != null && R.contains(document.activeElement) && ((W = S.value) == null || W.focus())));
  }
  (function(L, R) {
    if (!Oe)
      return;
    let W;
    Re(async () => {
      W == null || W.stop(), R.isActive.value && L.scrollStrategy && (W = Gl(), await Ee(), W.active && W.run(() => {
        var U;
        typeof L.scrollStrategy == "function" ? L.scrollStrategy(R, L, W) : (U = Ut[L.scrollStrategy]) == null || U.call(Ut, R, L, W);
      }));
    }), _e(() => {
      W == null || W.stop();
    });
  })(e, { root: D, contentEl: h, activatorEl: S, isActive: a, updateLocation: _ }), Oe && Z(a, (L) => {
    L ? window.addEventListener("keydown", T) : window.removeEventListener("keydown", T);
  }, { immediate: !0 });
  const M = (K = (z = we("useRouter")) == null ? void 0 : z.proxy) == null ? void 0 : K.$router;
  tt(() => e.closeOnBack, () => {
    (function(L, R) {
      let W, U, ne = !1;
      function ee(Q) {
        var ce;
        (ce = Q.state) != null && ce.replaced || (ne = !0, setTimeout(() => ne = !1));
      }
      Oe && (Ee(() => {
        window.addEventListener("popstate", ee), W = L == null ? void 0 : L.beforeEach((Q, ce, Ce) => {
          kl ? ne ? R(Ce) : Ce() : setTimeout(() => ne ? R(Ce) : Ce()), kl = !0;
        }), U = L == null ? void 0 : L.afterEach(() => {
          kl = !1;
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
    e.noClickAnimation || h.value && st(h.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Zt });
  }
  return Z(() => a.value && (e.absolute || e.contained) && s.value == null, (L) => {
    if (L) {
      const R = function(W) {
        for (; W; ) {
          if (Ql(W))
            return W;
          W = W.parentElement;
        }
        return document.scrollingElement;
      }(D.value);
      R && R !== document.scrollingElement && (O.value = R.scrollTop);
    }
  }), le(() => {
    var L;
    return d(ae, null, [(L = t.activator) == null ? void 0 : L.call(t, { isActive: a.value, props: X({ ref: B }, $.value, e.activatorProps) }), P.value && d(pr, { disabled: !s.value, to: s.value }, { default: () => [u.value && d("div", X({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": a.value, "v-overlay--contained": e.contained }, c.value, v.value, e.class], style: [k.value, { top: J(O.value) }, e.style], ref: D }, x, n), [d(Mr, X({ color: y, modelValue: a.value && !!e.scrim }, E.value), null), d(Ke, { appear: !0, persisted: !0, transition: e.transition, target: S.value, onAfterLeave: () => {
      f(), o("afterLeave");
    } }, { default: () => {
      var R;
      return [$e(d("div", X({ ref: h, class: ["v-overlay__content", e.contentClass], style: [w.value, F.value] }, A.value, e.contentProps), [(R = t.default) == null ? void 0 : R.call(t, { isActive: a })]), [[yt, a.value], [qe("click-outside"), { handler: V, closeConditional: I, include: () => [S.value] }]])];
    } })])] })]);
  }), { activatorEl: S, animateClick: j, contentEl: h, globalTop: C, localTop: g, updateLocation: _ };
} }), Bl = Symbol("Forwarded refs");
function Pl(e, l) {
  let t = e;
  for (; t; ) {
    const n = Reflect.getOwnPropertyDescriptor(t, l);
    if (n)
      return n;
    t = Object.getPrototypeOf(t);
  }
}
function an(e) {
  for (var l = arguments.length, t = new Array(l > 1 ? l - 1 : 0), n = 1; n < l; n++)
    t[n - 1] = arguments[n];
  return e[Bl] = t, new Proxy(e, { get(o, r) {
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
        const c = Pl(i.value, r) ?? ("_" in i.value ? Pl((s = i.value._) == null ? void 0 : s.setupState, r) : void 0);
        if (c)
          return c;
      }
      for (const i of t) {
        const c = i.value && i.value[Bl];
        if (!c)
          continue;
        const v = c.slice();
        for (; v.length; ) {
          const p = v.shift(), u = Pl(p.value, r);
          if (u)
            return u;
          const f = p.value && p.value[Bl];
          f && v.push(...f);
        }
      }
    }
  } });
}
const Nr = (e, l, t) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), jr = N({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function Rr(e, l, t, n) {
  const o = m(() => typeof (t == null ? void 0 : t.value) != "string" && typeof (t == null ? void 0 : t.value) != "number" ? "" : String(t.value)), r = H([]), a = H(/* @__PURE__ */ new Map()), s = m(() => n != null && n.transform ? b(l).map(n == null ? void 0 : n.transform) : b(l));
  return Re(() => {
    r.value = [], a.value = /* @__PURE__ */ new Map();
    const i = function(v, p, u) {
      var k;
      const f = [], y = (u == null ? void 0 : u.default) ?? Nr, C = !!(u != null && u.filterKeys) && De(u.filterKeys), g = Object.keys((u == null ? void 0 : u.customKeyFilter) ?? {}).length;
      if (!(v != null && v.length))
        return f;
      e:
        for (let S = 0; S < v.length; S++) {
          const B = v[S], $ = {}, A = {};
          let E = -1;
          if (p && !(u != null && u.noFilter)) {
            if (typeof B == "object") {
              const x = C || Object.keys(B);
              for (const D of x) {
                const h = ke(B, D, B), F = (k = u == null ? void 0 : u.customKeyFilter) == null ? void 0 : k[D];
                if (E = F ? F(h, p, B) : y(h, p, B), E !== -1 && E !== !1)
                  F ? $[D] = E : A[D] = E;
                else if ((u == null ? void 0 : u.filterMode) === "every")
                  continue e;
              }
            } else
              E = y(B, p, B), E !== -1 && E !== !1 && (A.title = E);
            const w = Object.keys(A).length, P = Object.keys($).length;
            if (!w && !P || (u == null ? void 0 : u.filterMode) === "union" && P !== g && !w || (u == null ? void 0 : u.filterMode) === "intersection" && (P !== g || !w))
              continue;
          }
          f.push({ index: S, matches: { ...A, ...$ } });
        }
      return f;
    }(s.value, o.value, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), c = b(l);
    i.forEach((v) => {
      let { index: p, matches: u } = v;
      const f = c[p];
      r.value.push(f), a.value.set(f.value, u);
    });
  }), { filteredItems: r, filteredMatches: a, getMatches: function(i) {
    return a.value.get(i.value);
  } };
}
const xe = N({ tag: { type: String, default: "div" } }, "tag"), Wr = N({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), Aa = Symbol.for("vuetify:datatable:expanded");
function $a(e) {
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
  return ye(Aa, r), r;
}
function Fa() {
  const e = ve(Aa);
  if (!e)
    throw new Error("foo");
  return e;
}
const zr = N({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), Va = Symbol.for("vuetify:data-table-group");
function Ea(e) {
  return { groupBy: fe(e, "groupBy") };
}
function Ia(e) {
  const { groupBy: l, sortBy: t } = e, n = H(/* @__PURE__ */ new Set());
  function o(a) {
    return n.value.has(a.id);
  }
  const r = { sortByWithGroups: m(() => l.value.map((a) => ({ ...a, order: a.order ?? !1 })).concat(t.value)), toggleGroup: function(a) {
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
  return ye(Va, r), r;
}
function Oa() {
  const e = ve(Va);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function Da(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!l.length)
    return [];
  const o = function(s, i) {
    if (!s.length)
      return [];
    const c = /* @__PURE__ */ new Map();
    for (const v of s) {
      const p = Yt(v.raw, i);
      c.has(p) || c.set(p, []), c.get(p).push(v);
    }
    return c;
  }(e, l[0]), r = [], a = l.slice(1);
  return o.forEach((s, i) => {
    const c = l[0], v = `${n}_${c}_${i}`;
    r.push({ depth: t, id: v, key: c, value: i, items: a.length ? Da(s, a, t + 1, v) : s, type: "group" });
  }), r;
}
function Ta(e, l) {
  const t = [];
  for (const n of e)
    "type" in n && n.type === "group" ? (n.value != null && t.push(n), (l.has(n.id) || n.value == null) && t.push(...Ta(n.items, l))) : t.push(n);
  return t;
}
function La(e, l, t) {
  return { flatItems: m(() => l.value.length ? Ta(Da(e.value, l.value.map((n) => n.key)), t.value) : e.value) };
}
function Ma(e) {
  let { page: l, itemsPerPage: t, sortBy: n, groupBy: o, search: r } = e;
  const a = we("VDataTable"), s = m(() => ({ page: l.value, itemsPerPage: t.value, sortBy: n.value, groupBy: o.value, search: r.value }));
  Z(() => r == null ? void 0 : r.value, () => {
    l.value = 1;
  });
  let i = null;
  Z(s, () => {
    at(i, s.value) || (a.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const Na = N({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), ja = Symbol.for("vuetify:data-table-pagination");
function Ra(e) {
  return { page: fe(e, "page", void 0, (l) => +(l ?? 1)), itemsPerPage: fe(e, "itemsPerPage", void 0, (l) => +(l ?? 10)) };
}
function Wa(e) {
  const { page: l, itemsPerPage: t, itemsLength: n } = e, o = m(() => t.value === -1 ? 0 : t.value * (l.value - 1)), r = m(() => t.value === -1 ? n.value : Math.min(n.value, o.value + t.value)), a = m(() => t.value === -1 || n.value === 0 ? 1 : Math.ceil(n.value / t.value));
  Re(() => {
    l.value > a.value && (l.value = a.value);
  });
  const s = { page: l, itemsPerPage: t, startIndex: o, stopIndex: r, pageCount: a, itemsLength: n, nextPage: function() {
    l.value = Ct(l.value + 1, 1, a.value);
  }, prevPage: function() {
    l.value = Ct(l.value - 1, 1, a.value);
  }, setPage: function(i) {
    l.value = Ct(i, 1, a.value);
  }, setItemsPerPage: function(i) {
    t.value = i, l.value = 1;
  } };
  return ye(ja, s), s;
}
const Gr = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var n;
  let { items: l, value: t } = e;
  return new Set(t ? [(n = l[0]) == null ? void 0 : n.value] : []);
}, selectAll: (e) => {
  let { selected: l } = e;
  return l;
} }, za = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, currentPage: t, selected: n } = e;
  return za.select({ items: t, value: l, selected: n });
} }, Ga = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, allItems: t, selected: n } = e;
  return Ga.select({ items: t, value: l, selected: n });
} }, Hr = N({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] } }, "DataTable-select"), Ha = Symbol.for("vuetify:data-table-selection");
function Ka(e, l) {
  let { allItems: t, currentPage: n } = l;
  const o = fe(e, "modelValue", e.modelValue, (f) => new Set(f), (f) => [...f.values()]), r = m(() => t.value.filter((f) => f.selectable)), a = m(() => n.value.filter((f) => f.selectable)), s = m(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Gr;
      case "all":
        return Ga;
      default:
        return za;
    }
  });
  function i(f) {
    return De(f).every((y) => o.value.has(y.value));
  }
  function c(f, y) {
    const C = s.value.select({ items: f, value: y, selected: new Set(o.value) });
    o.value = C;
  }
  const v = m(() => o.value.size > 0), p = m(() => i(s.value.allSelected({ allItems: r.value, currentPage: a.value }))), u = { toggleSelect: function(f) {
    c([f], !i([f]));
  }, select: c, selectAll: function(f) {
    const y = s.value.selectAll({ value: f, allItems: r.value, currentPage: a.value, selected: new Set(o.value) });
    o.value = y;
  }, isSelected: i, isSomeSelected: function(f) {
    return De(f).some((y) => o.value.has(y.value));
  }, someSelected: v, allSelected: p, showSelectAll: s.value.showSelectAll };
  return ye(Ha, u), u;
}
function fl() {
  const e = ve(Ha);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const Kr = N({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), Ua = Symbol.for("vuetify:data-table-sort");
function qa(e) {
  return { sortBy: fe(e, "sortBy"), mustSort: G(e, "mustSort"), multiSort: G(e, "multiSort") };
}
function Ya(e) {
  const { sortBy: l, mustSort: t, multiSort: n, page: o } = e, r = { sortBy: l, toggleSort: (a) => {
    let s = l.value.map((c) => ({ ...c })) ?? [];
    const i = s.find((c) => c.key === a.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((c) => c.key !== a.key) : i.order = "desc" : s = n.value ? [...s, { key: a.key, order: "asc" }] : [{ key: a.key, order: "asc" }], l.value = s, o && (o.value = 1);
  }, isSorted: function(a) {
    return !!l.value.find((s) => s.key === a.key);
  } };
  return ye(Ua, r), r;
}
function Ur(e, l, t) {
  const n = ht();
  return { sortedItems: m(() => t.value.length ? function(r, a, s, i) {
    const c = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...r].sort((v, p) => {
      for (let u = 0; u < a.length; u++) {
        const f = a[u].key, y = a[u].order ?? "asc";
        if (y === !1)
          continue;
        let C = Yt(v.raw, f), g = Yt(p.raw, f);
        if (y === "desc" && ([C, g] = [g, C]), i == null ? void 0 : i[f]) {
          const k = i[f](C, g);
          if (!k)
            continue;
          return k;
        }
        if (C instanceof Date && g instanceof Date)
          return C.getTime() - g.getTime();
        if ([C, g] = [C, g].map((k) => k != null ? k.toString().toLocaleLowerCase() : k), C !== g)
          return isNaN(C) || isNaN(g) ? c.compare(C, g) : Number(C) - Number(g);
      }
      return 0;
    });
  }(l.value, t.value, n.current.value, e.customKeySort) : l.value) };
}
const Tt = N({ border: [Boolean, Number, String] }, "border");
function Lt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { borderClasses: m(() => {
    const t = mt(e) ? e.value : e.border, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        n.push(`border-${o}`);
    return n;
  }) };
}
const qr = [null, "default", "comfortable", "compact"], Ge = N({ density: { type: String, default: "default", validator: (e) => qr.includes(e) } }, "density");
function He(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { densityClasses: m(() => `${l}--density-${e.density}`) };
}
const Mt = N({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Nt(e) {
  return { elevationClasses: m(() => {
    const l = mt(e) ? e.value : e.elevation, t = [];
    return l == null || t.push(`elevation-${l}`), t;
  }) };
}
const Je = N({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ze(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { roundedClasses: m(() => {
    const t = mt(e) ? e.value : e.rounded, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        n.push(`rounded-${o}`);
    return n;
  }) };
}
const Yr = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ml(e, l) {
  return d(ae, null, [e && d("span", { key: "overlay", class: `${l}__overlay` }, null), d("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const ot = N({ color: String, variant: { type: String, default: "elevated", validator: (e) => Yr.includes(e) } }, "variant");
function gl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = m(() => {
    const { variant: r } = b(e);
    return `${l}--variant-${r}`;
  }), { colorClasses: n, colorStyles: o } = tn(m(() => {
    const { variant: r, color: a } = b(e);
    return { [["elevated", "flat"].includes(r) ? "background" : "text"]: a };
  }));
  return { colorClasses: n, colorStyles: o, variantClasses: t };
}
const Xa = N({ divided: Boolean, ...Tt(), ...se(), ...Ge(), ...Mt(), ...Je(), ...xe(), ...be(), ...ot() }, "VBtnGroup"), Ln = Y()({ name: "VBtnGroup", props: Xa(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Be(e), { densityClasses: o } = He(e), { borderClasses: r } = Lt(e), { elevationClasses: a } = Nt(e), { roundedClasses: s } = Ze(e);
  Xe({ VBtn: { height: "auto", color: G(e, "color"), density: G(e, "density"), flat: !0, variant: G(e, "variant") } }), le(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, n.value, r.value, o.value, a.value, s.value, e.class], style: e.style }, t));
} }), Ja = N({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Za = N({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Qa(e, l) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const n = we("useGroupItem");
  if (!n)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = Ne();
  ye(Symbol.for(`${l.description}:id`), o);
  const r = ve(l, null);
  if (!r) {
    if (!t)
      return r;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const a = G(e, "value"), s = m(() => r.disabled.value || e.disabled);
  r.register({ id: o, value: a, disabled: s }, n), nt(() => {
    r.unregister(o);
  });
  const i = m(() => r.isSelected(o)), c = m(() => i.value && [r.selectedClass.value, e.selectedClass]);
  return Z(i, (v) => {
    n.emit("group:selected", { value: v });
  }), { id: o, isSelected: i, toggle: () => r.select(o, !i.value), select: (v) => r.select(o, v), selectedClass: c, value: a, disabled: s, group: r };
}
function eo(e, l) {
  let t = !1;
  const n = At([]), o = fe(e, "modelValue", [], (c) => c == null ? [] : Mn(n, De(c)), (c) => {
    const v = function(p, u) {
      const f = [];
      return u.forEach((y) => {
        const C = p.findIndex((g) => g.id === y);
        if (~C) {
          const g = p[C];
          f.push(g.value != null ? g.value : C);
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
    if (e.multiple && fa('This method is not supported when using "multiple" prop'), o.value.length) {
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
    const p = c, u = Ht(Symbol.for(`${l.description}:id`), r == null ? void 0 : r.vnode).indexOf(v);
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
  }, disabled: G(e, "disabled"), prev: () => s(n.length - 1), next: () => s(1), isSelected: (c) => o.value.includes(c), selectedClass: m(() => e.selectedClass), items: m(() => n), getItemIndex: (c) => function(v, p) {
    const u = Mn(v, [p]);
    return u.length ? v.findIndex((f) => f.id === u[0]) : -1;
  }(n, c) };
  return ye(l, i), i;
}
function Mn(e, l) {
  const t = [];
  return l.forEach((n) => {
    const o = e.find((a) => at(n, a.value)), r = e[n];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : r != null && t.push(r.id);
  }), t;
}
const to = Symbol.for("vuetify:v-btn-toggle"), Xr = N({ ...Xa(), ...Ja() }, "VBtnToggle");
Y()({ name: "VBtnToggle", props: Xr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, next: o, prev: r, select: a, selected: s } = eo(e, to);
  return le(() => {
    const [i] = Ln.filterProps(e);
    return d(Ln, X({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var c;
      return [(c = t.default) == null ? void 0 : c.call(t, { isSelected: n, next: o, prev: r, select: a, selected: s })];
    } });
  }), { next: o, prev: r, select: a };
} });
const pe = [String, Function, Object, Array], Jr = Symbol.for("vuetify:icons"), tl = N({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), Nn = Y()({ name: "VComponentIcon", props: tl(), setup(e, l) {
  let { slots: t } = l;
  return () => {
    const n = e.icon;
    return d(e.tag, null, { default: () => {
      var o;
      return [e.icon ? d(n, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), Zr = dt({ name: "VSvgIcon", inheritAttrs: !1, props: tl(), setup(e, l) {
  let { attrs: t } = l;
  return () => d(e.tag, X(t, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? d("path", { d: n[0], "fill-opacity": n[1] }, null) : d("path", { d: n }, null)) : d("path", { d: e.icon }, null)])] });
} });
dt({ name: "VLigatureIcon", props: tl(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), dt({ name: "VClassIcon", props: tl(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const Qr = ["x-small", "small", "default", "large", "x-large"], jt = N({ size: { type: [String, Number], default: "default" } }, "size");
function Rt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return Yl(() => {
    let t, n;
    return Xt(Qr, e.size) ? t = `${l}--size-${e.size}` : e.size && (n = { width: J(e.size), height: J(e.size) }), { sizeClasses: t, sizeStyles: n };
  });
}
const es = N({ color: String, start: Boolean, end: Boolean, icon: pe, ...se(), ...jt(), ...xe({ tag: "i" }), ...be() }, "VIcon"), he = Y()({ name: "VIcon", props: es(), setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = H(), { themeClasses: r } = Be(e), { iconData: a } = ((v) => {
    const p = ve(Jr);
    if (!p)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: m(() => {
      var g;
      const u = b(v);
      if (!u)
        return { component: Nn };
      let f = u;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (g = p.aliases) == null ? void 0 : g[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${u}"`);
      if (Array.isArray(f))
        return { component: Zr, icon: f };
      if (typeof f != "string")
        return { component: Nn, icon: f };
      const y = Object.keys(p.sets).find((k) => typeof f == "string" && f.startsWith(`${k}:`)), C = y ? f.slice(y.length + 1) : f;
      return { component: p.sets[y ?? p.defaultSet].component, icon: C };
    }) };
  })(m(() => o.value || e.icon)), { sizeClasses: s } = Rt(e), { textColorClasses: i, textColorStyles: c } = We(G(e, "color"));
  return le(() => {
    var p, u;
    const v = (p = n.default) == null ? void 0 : p.call(n);
    return v && (o.value = (u = pa(v).filter((f) => f.type === vr && f.children && typeof f.children == "string")[0]) == null ? void 0 : u.children), d(a.value.component, { tag: e.tag, icon: a.value.icon, class: ["v-icon", "notranslate", r.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: J(e.size), height: J(e.size), width: J(e.size) }, c.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [v] });
  }), {};
} });
function lo(e, l) {
  const t = H(), n = ue(!1);
  if (en) {
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
const ts = N({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...jt(), ...xe({ tag: "div" }), ...be() }, "VProgressCircular"), no = Y()({ name: "VProgressCircular", props: ts(), setup(e, l) {
  let { slots: t } = l;
  const n = 2 * Math.PI * 20, o = H(), { themeClasses: r } = Be(e), { sizeClasses: a, sizeStyles: s } = Rt(e), { textColorClasses: i, textColorStyles: c } = We(G(e, "color")), { textColorClasses: v, textColorStyles: p } = We(G(e, "bgColor")), { intersectionRef: u, isIntersecting: f } = lo(), { resizeRef: y, contentRect: C } = function(E) {
    const w = H(), P = H();
    if (Oe) {
      const x = new ResizeObserver((D) => {
        E == null || E(D, x), D.length && (P.value = D[0].contentRect);
      });
      nt(() => {
        x.disconnect();
      }), Z(w, (D, h) => {
        h && (x.unobserve(Vl(h)), P.value = void 0), D && x.observe(Vl(D));
      }, { flush: "post" });
    }
    return { resizeRef: w, contentRect: Hl(P) };
  }(), g = m(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), k = m(() => Number(e.width)), S = m(() => s.value ? Number(e.size) : C.value ? C.value.width : Math.max(k.value, 32)), B = m(() => 20 / (1 - k.value / S.value) * 2), $ = m(() => k.value / S.value * B.value), A = m(() => J((100 - g.value) / 100 * n));
  return Re(() => {
    u.value = o.value, y.value = o.value;
  }), le(() => d(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": f.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, r.value, a.value, i.value, e.class], style: [s.value, c.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : g.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${B.value} ${B.value}` }, [d("circle", { class: ["v-progress-circular__underlay", v.value], style: p.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": $.value, "stroke-dasharray": n, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": $.value, "stroke-dasharray": n, "stroke-dashoffset": A.value }, null)]), t.default && d("div", { class: "v-progress-circular__content" }, [t.default({ value: g.value })])] })), {};
} }), jn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, ao = N({ location: String }, "location");
function oo(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: n } = Ot();
  return { locationStyles: m(() => {
    if (!e.location)
      return {};
    const { side: r, align: a } = Il(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, n.value);
    function s(c) {
      return t ? t(c) : 0;
    }
    const i = {};
    return r !== "center" && (l ? i[jn[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0), a !== "center" ? l ? i[jn[a]] = `calc(100% - ${s(a)}px)` : i[a] = 0 : (r === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[r]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[r]), i;
  }) };
}
const ls = N({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...ao({ location: "top" }), ...Je(), ...xe(), ...be() }, "VProgressLinear"), ro = Y()({ name: "VProgressLinear", props: ls(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { isRtl: o, rtlClasses: r } = Ot(), { themeClasses: a } = Be(e), { locationStyles: s } = oo(e), { textColorClasses: i, textColorStyles: c } = We(e, "color"), { backgroundColorClasses: v, backgroundColorStyles: p } = pt(m(() => e.bgColor || e.color)), { backgroundColorClasses: u, backgroundColorStyles: f } = pt(e, "color"), { roundedClasses: y } = Ze(e), { intersectionRef: C, isIntersecting: g } = lo(), k = m(() => parseInt(e.max, 10)), S = m(() => parseInt(e.height, 10)), B = m(() => parseFloat(e.bufferValue) / k.value * 100), $ = m(() => parseFloat(n.value) / k.value * 100), A = m(() => o.value !== e.reverse), E = m(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), w = m(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function P(x) {
    if (!C.value)
      return;
    const { left: D, right: h, width: F } = C.value.getBoundingClientRect(), _ = A.value ? F - x.clientX + (h - F) : x.clientX - D;
    n.value = Math.round(_ / F * k.value);
  }
  return le(() => d(e.tag, { ref: C, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && g.value, "v-progress-linear--reverse": A.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, y.value, a.value, r.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? J(S.value) : 0, "--v-progress-linear-height": J(S.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : $.value, onClick: e.clickable && P }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...c.value, [A.value ? "left" : "right"]: J(-S.value), borderTop: `${J(S.value / 2)} dotted`, opacity: w.value, top: `calc(50% - ${J(S.value / 4)})`, width: J(100 - B.value, "%"), "--v-progress-linear-stream-to": J(S.value * (A.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", v.value], style: [p.value, { opacity: w.value, width: J(e.stream ? B.value : 100, "%") }] }, null), d(lt, { name: E.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((x) => d("div", { key: x, class: ["v-progress-linear__indeterminate", x, u.value], style: f.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", u.value], style: [f.value, { width: J($.value, "%") }] }, null)] }), t.default && d("div", { class: "v-progress-linear__content" }, [t.default({ value: $.value, buffer: B.value })])] })), {};
} }), on = N({ loading: [Boolean, String] }, "loader");
function rn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { loaderClasses: m(() => ({ [`${l}--loading`]: e.loading })) };
}
function so(e, l) {
  var n;
  let { slots: t } = l;
  return d("div", { class: `${e.name}__loader` }, [((n = t.default) == null ? void 0 : n.call(t, { color: e.color, isActive: e.active })) || d(ro, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const ns = ["static", "relative", "fixed", "absolute", "sticky"], as = N({ position: { type: String, validator: (e) => ns.includes(e) } }, "position"), Ml = Symbol("rippleStop"), os = 80;
function Rn(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function Nl(e) {
  return e.constructor.name === "TouchEvent";
}
function io(e) {
  return e.constructor.name === "KeyboardEvent";
}
const ll = { show(e, l) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((f = l == null ? void 0 : l._ripple) != null && f.enabled))
    return;
  const n = document.createElement("span"), o = document.createElement("span");
  n.appendChild(o), n.className = "v-ripple__container", t.class && (n.className += ` ${t.class}`);
  const { radius: r, scale: a, x: s, y: i, centerX: c, centerY: v } = function(y, C) {
    var w;
    let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, k = 0, S = 0;
    if (!io(y)) {
      const P = C.getBoundingClientRect(), x = Nl(y) ? y.touches[y.touches.length - 1] : y;
      k = x.clientX - P.left, S = x.clientY - P.top;
    }
    let B = 0, $ = 0.3;
    (w = C._ripple) != null && w.circle ? ($ = 0.15, B = C.clientWidth / 2, B = g.center ? B : B + Math.sqrt((k - B) ** 2 + (S - B) ** 2) / 4) : B = Math.sqrt(C.clientWidth ** 2 + C.clientHeight ** 2) / 2;
    const A = (C.clientWidth - 2 * B) / 2 + "px", E = (C.clientHeight - 2 * B) / 2 + "px";
    return { radius: B, scale: $, x: g.center ? A : k - B + "px", y: g.center ? E : S - B + "px", centerX: A, centerY: E };
  }(e, l, t), p = 2 * r + "px";
  o.className = "v-ripple__animation", o.style.width = p, o.style.height = p, l.appendChild(n);
  const u = window.getComputedStyle(l);
  u && u.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Rn(o, `translate(${s}, ${i}) scale3d(${a},${a},${a})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Rn(o, `translate(${c}, ${v}) scale3d(1,1,1)`);
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
function uo(e) {
  return e === void 0 || !!e;
}
function Bt(e) {
  const l = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Ml]) {
    if (e[Ml] = !0, Nl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (l.center = t._ripple.centered || io(e), t._ripple.class && (l.class = t._ripple.class), Nl(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        ll.show(e, t, l);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var n;
        (n = t == null ? void 0 : t._ripple) != null && n.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, os);
    } else
      ll.show(e, t, l);
  }
}
function Wn(e) {
  e[Ml] = !0;
}
function Ae(e) {
  const l = e.currentTarget;
  if (l != null && l._ripple) {
    if (window.clearTimeout(l._ripple.showTimer), e.type === "touchend" && l._ripple.showTimerCommit)
      return l._ripple.showTimerCommit(), l._ripple.showTimerCommit = null, void (l._ripple.showTimer = window.setTimeout(() => {
        Ae(e);
      }));
    window.setTimeout(() => {
      l._ripple && (l._ripple.touched = !1);
    }), ll.hide(l);
  }
}
function co(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let Pt = !1;
function po(e) {
  Pt || e.keyCode !== hn.enter && e.keyCode !== hn.space || (Pt = !0, Bt(e));
}
function vo(e) {
  Pt = !1, Ae(e);
}
function fo(e) {
  Pt && (Pt = !1, Ae(e));
}
function zn(e, l, t) {
  const { value: n, modifiers: o } = l, r = uo(n);
  if (r || ll.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = r, e._ripple.centered = o.center, e._ripple.circle = o.circle, Fl(n) && n.class && (e._ripple.class = n.class), r && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", Wn, { passive: !0 }), void e.addEventListener("mousedown", Wn);
    e.addEventListener("touchstart", Bt, { passive: !0 }), e.addEventListener("touchend", Ae, { passive: !0 }), e.addEventListener("touchmove", co, { passive: !0 }), e.addEventListener("touchcancel", Ae), e.addEventListener("mousedown", Bt), e.addEventListener("mouseup", Ae), e.addEventListener("mouseleave", Ae), e.addEventListener("keydown", po), e.addEventListener("keyup", vo), e.addEventListener("blur", fo), e.addEventListener("dragstart", Ae, { passive: !0 });
  } else
    !r && t && mo(e);
}
function mo(e) {
  e.removeEventListener("mousedown", Bt), e.removeEventListener("touchstart", Bt), e.removeEventListener("touchend", Ae), e.removeEventListener("touchmove", co), e.removeEventListener("touchcancel", Ae), e.removeEventListener("mouseup", Ae), e.removeEventListener("mouseleave", Ae), e.removeEventListener("keydown", po), e.removeEventListener("keyup", vo), e.removeEventListener("dragstart", Ae), e.removeEventListener("blur", fo);
}
const yl = { mounted: function(e, l) {
  zn(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, mo(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && zn(e, l, uo(l.oldValue));
} }, rs = N({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: to }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), ...Za(), ...on(), ...ao(), ...as(), ...Je(), ...nn(), ...jt(), ...xe({ tag: "button" }), ...be(), ...ot({ variant: "elevated" }) }, "VBtn"), it = Y()({ name: "VBtn", directives: { Ripple: yl }, props: rs(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { themeClasses: o } = Be(e), { borderClasses: r } = Lt(e), { colorClasses: a, colorStyles: s, variantClasses: i } = gl(e), { densityClasses: c } = He(e), { dimensionStyles: v } = It(e), { elevationClasses: p } = Nt(e), { loaderClasses: u } = rn(e), { locationStyles: f } = oo(e), { positionClasses: y } = function(x) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
    return { positionClasses: m(() => x.position ? `${D}--${x.position}` : void 0) };
  }(e), { roundedClasses: C } = Ze(e), { sizeClasses: g, sizeStyles: k } = Rt(e), S = Qa(e, e.symbol, !1), B = ln(e, t), $ = m(() => {
    var x;
    return e.active !== void 0 ? e.active : B.isLink.value ? (x = B.isActive) == null ? void 0 : x.value : S == null ? void 0 : S.isSelected.value;
  }), A = m(() => (S == null ? void 0 : S.disabled.value) || e.disabled), E = m(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), w = m(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(x) {
    var D;
    A.value || ((D = B.navigate) == null || D.call(B, x), S == null || S.toggle());
  }
  return function(x, D) {
    Z(() => {
      var h;
      return (h = x.isActive) == null ? void 0 : h.value;
    }, (h) => {
      x.isLink.value && h && D && Ee(() => {
        D(!0);
      });
    }, { immediate: !0 });
  }(B, S == null ? void 0 : S.select), le(() => {
    var V, I;
    const x = B.isLink.value ? "a" : e.tag, D = !(!e.prependIcon && !n.prepend), h = !(!e.appendIcon && !n.append), F = !(!e.icon || e.icon === !0), _ = (S == null ? void 0 : S.isSelected.value) && (!B.isLink.value || ((V = B.isActive) == null ? void 0 : V.value)) || !S || ((I = B.isActive) == null ? void 0 : I.value);
    return $e(d(x, { type: x === "a" ? void 0 : "button", class: ["v-btn", S == null ? void 0 : S.selectedClass.value, { "v-btn--active": $.value, "v-btn--block": e.block, "v-btn--disabled": A.value, "v-btn--elevated": E.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, r.value, _ ? a.value : void 0, c.value, p.value, u.value, y.value, C.value, g.value, i.value, e.class], style: [_ ? s.value : void 0, v.value, f.value, k.value, e.style], disabled: A.value || void 0, href: B.href.value, onClick: P, value: w.value }, { default: () => {
      var T;
      return [ml(!0, "v-btn"), !e.icon && D && d("span", { key: "prepend", class: "v-btn__prepend" }, [n.prepend ? d(Ve, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, n.prepend) : d(he, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!n.default && F ? d(he, { key: "content-icon", icon: e.icon }, null) : d(Ve, { key: "content-defaults", disabled: !F, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var M;
        return [((M = n.default) == null ? void 0 : M.call(n)) ?? e.text];
      } })]), !e.icon && h && d("span", { key: "append", class: "v-btn__append" }, [n.append ? d(Ve, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, n.append) : d(he, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((T = n.loader) == null ? void 0 : T.call(n)) ?? d(no, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[qe("ripple"), !A.value && e.ripple, null]]);
  }), {};
} }), ss = N({ text: String, clickable: Boolean, ...se(), ...be() }, "VLabel"), go = Y()({ name: "VLabel", props: ss(), setup(e, l) {
  let { slots: t } = l;
  return le(() => {
    var n;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (n = t.default) == null ? void 0 : n.call(t)]);
  }), {};
} }), yo = Symbol.for("vuetify:selection-control-group"), ho = N({ color: String, disabled: Boolean, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: at }, ...se(), ...Ge(), ...be() }, "SelectionControlGroup"), is = N({ ...ho({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
Y()({ name: "VSelectionControlGroup", props: is(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), o = Ne(), r = m(() => e.id || `v-selection-control-group-${o}`), a = m(() => e.name || r.value), s = /* @__PURE__ */ new Set();
  return ye(yo, { modelValue: n, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), _e(() => {
      s.delete(i);
    });
  } }), Xe({ [e.defaultsTarget]: { color: G(e, "color"), disabled: G(e, "disabled"), density: G(e, "density"), error: G(e, "error"), inline: G(e, "inline"), modelValue: n, multiple: m(() => !!e.multiple || e.multiple == null && Array.isArray(n.value)), name: a, falseIcon: G(e, "falseIcon"), trueIcon: G(e, "trueIcon"), readonly: G(e, "readonly"), ripple: G(e, "ripple"), type: G(e, "type"), valueComparator: G(e, "valueComparator") } }), le(() => {
    var i;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const bo = N({ label: String, trueValue: null, falseValue: null, value: null, ...se(), ...ho() }, "VSelectionControl"), us = Y()({ name: "VSelectionControl", directives: { Ripple: yl }, inheritAttrs: !1, props: bo(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { group: o, densityClasses: r, icon: a, model: s, textColorClasses: i, textColorStyles: c, trueValue: v } = function(B) {
    const $ = ve(yo, void 0), { densityClasses: A } = He(B), E = fe(B, "modelValue"), w = m(() => B.trueValue !== void 0 ? B.trueValue : B.value === void 0 || B.value), P = m(() => B.falseValue !== void 0 && B.falseValue), x = m(() => !!B.multiple || B.multiple == null && Array.isArray(E.value)), D = m({ get() {
      const V = $ ? $.modelValue.value : E.value;
      return x.value ? V.some((I) => B.valueComparator(I, w.value)) : B.valueComparator(V, w.value);
    }, set(V) {
      if (B.readonly)
        return;
      const I = V ? w.value : P.value;
      let T = I;
      x.value && (T = V ? [...De(E.value), I] : De(E.value).filter((M) => !B.valueComparator(M, w.value))), $ ? $.modelValue.value = T : E.value = T;
    } }), { textColorClasses: h, textColorStyles: F } = We(m(() => !D.value || B.error || B.disabled ? void 0 : B.color)), _ = m(() => D.value ? B.trueIcon : B.falseIcon);
    return { group: $, densityClasses: A, trueValue: w, falseValue: P, model: D, textColorClasses: h, textColorStyles: F, icon: _ };
  }(e), p = Ne(), u = m(() => e.id || `input-${p}`), f = ue(!1), y = ue(!1), C = H();
  function g(B) {
    f.value = !0, (!Ol || Ol && B.target.matches(":focus-visible")) && (y.value = !0);
  }
  function k() {
    f.value = !1, y.value = !1;
  }
  function S(B) {
    e.readonly && o && Ee(() => o.forceUpdate()), s.value = B.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    C.value && (C.value.checked = s.value);
  }), le(() => {
    var E, w;
    const B = n.label ? n.label({ label: e.label, props: { for: u.value } }) : e.label, [$, A] = ql(t);
    return d("div", X({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": f.value, "v-selection-control--focus-visible": y.value, "v-selection-control--inline": e.inline }, r.value, e.class] }, $, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", i.value], style: c.value }, [(E = n.default) == null ? void 0 : E.call(n), $e(d("div", { class: ["v-selection-control__input"] }, [a.value && d(he, { key: "icon", icon: a.value }, null), d("input", X({ ref: C, checked: s.value, disabled: e.disabled, id: u.value, onBlur: k, onFocus: g, onInput: S, "aria-disabled": e.readonly, type: e.type, value: v.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, A), null), (w = n.input) == null ? void 0 : w.call(n, { model: s, textColorClasses: i, textColorStyles: c, props: { onFocus: g, onBlur: k, id: u.value } })]), [[qe("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), B && d(go, { for: u.value, clickable: !0 }, { default: () => [B] })]);
  }), { isFocused: f, input: C };
} }), So = N({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...bo({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), vt = Y()({ name: "VCheckboxBtn", props: So(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "indeterminate"), o = fe(e, "modelValue");
  function r(i) {
    n.value && (n.value = !1);
  }
  const a = m(() => n.value ? e.indeterminateIcon : e.falseIcon), s = m(() => n.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => d(us, X(e, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, r], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: a.value, trueIcon: s.value, "aria-checked": n.value ? "mixed" : void 0 }), t)), {};
} });
function wo(e) {
  const { t: l } = ht();
  return { InputIcon: function(t) {
    let { name: n } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[n], r = e[`onClick:${n}`], a = r && o ? l(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return d(he, { icon: e[`${n}Icon`], "aria-label": a, onClick: r }, null);
  } };
}
const cs = N({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...Dt({ transition: { component: wa, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), ds = Y()({ name: "VMessages", props: cs(), setup(e, l) {
  let { slots: t } = l;
  const n = m(() => De(e.messages)), { textColorClasses: o, textColorStyles: r } = We(m(() => e.color));
  return le(() => d(Ke, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [r.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && n.value.map((a, s) => d("div", { class: "v-messages__message", key: `${s}-${n.value}` }, [t.message ? t.message({ message: a }) : a]))] })), {};
} }), xo = N({ focused: Boolean, "onUpdate:focused": Me() }, "focus");
function sn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = fe(e, "focused");
  return { focusClasses: m(() => ({ [`${l}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const ps = Symbol.for("vuetify:form");
function Co() {
  return ve(ps, null);
}
const vs = N({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...xo() }, "validation"), un = N({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Me(), "onClick:append": Me(), ...se(), ...Ge(), ...vs() }, "VInput"), nl = Y()({ name: "VInput", props: { ...un() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const { densityClasses: r } = He(e), { rtlClasses: a } = Ot(), { InputIcon: s } = wo(e), i = Ne(), c = m(() => e.id || `input-${i}`), v = m(() => `${c.value}-messages`), { errorMessages: p, isDirty: u, isDisabled: f, isReadonly: y, isPristine: C, isValid: g, isValidating: k, reset: S, resetValidation: B, validate: $, validationClasses: A } = function(P) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze(), D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ne();
    const h = fe(P, "modelValue"), F = m(() => P.validationValue === void 0 ? h.value : P.validationValue), _ = Co(), V = H([]), I = ue(!0), T = m(() => !(!De(h.value === "" ? null : h.value).length && !De(F.value === "" ? null : F.value).length)), M = m(() => !!(P.disabled ?? (_ == null ? void 0 : _.isDisabled.value))), O = m(() => !!(P.readonly ?? (_ == null ? void 0 : _.isReadonly.value))), j = m(() => P.errorMessages.length ? De(P.errorMessages).slice(0, Math.max(0, +P.maxErrors)) : V.value), z = m(() => {
      let Q = (P.validateOn ?? (_ == null ? void 0 : _.validateOn.value)) || "input";
      Q === "lazy" && (Q = "input lazy");
      const ce = new Set((Q == null ? void 0 : Q.split(" ")) ?? []);
      return { blur: ce.has("blur") || ce.has("input"), input: ce.has("input"), submit: ce.has("submit"), lazy: ce.has("lazy") };
    }), K = m(() => !P.error && !P.errorMessages.length && (!P.rules.length || (I.value ? !V.value.length && !z.value.lazy || null : !V.value.length))), L = ue(!1), R = m(() => ({ [`${x}--error`]: K.value === !1, [`${x}--dirty`]: T.value, [`${x}--disabled`]: M.value, [`${x}--readonly`]: O.value })), W = m(() => P.name ?? b(D));
    function U() {
      h.value = null, Ee(ne);
    }
    function ne() {
      I.value = !0, z.value.lazy ? V.value = [] : ee(!0);
    }
    async function ee() {
      let Q = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ce = [];
      L.value = !0;
      for (const Ce of P.rules) {
        if (ce.length >= +(P.maxErrors ?? 1))
          break;
        const bl = typeof Ce == "function" ? Ce : () => Ce, je = await bl(F.value);
        je !== !0 && (typeof je == "string" ? ce.push(je) : console.warn(`${je} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return V.value = ce, L.value = !1, I.value = Q, V.value;
    }
    return Kl(() => {
      _ == null || _.register({ id: W.value, validate: ee, reset: U, resetValidation: ne });
    }), nt(() => {
      _ == null || _.unregister(W.value);
    }), gt(async () => {
      z.value.lazy || await ee(!0), _ == null || _.update(W.value, K.value, j.value);
    }), tt(() => z.value.input, () => {
      Z(F, () => {
        if (F.value != null)
          ee();
        else if (P.focused) {
          const Q = Z(() => P.focused, (ce) => {
            ce || ee(), Q();
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
  }(e, "v-input", c), E = m(() => ({ id: c, messagesId: v, isDirty: u, isDisabled: f, isReadonly: y, isPristine: C, isValid: g, isValidating: k, reset: S, resetValidation: B, validate: $ })), w = m(() => {
    var P;
    return (P = e.errorMessages) != null && P.length || !C.value && p.value.length ? p.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return le(() => {
    var F, _, V, I;
    const P = !(!n.prepend && !e.prependIcon), x = !(!n.append && !e.appendIcon), D = w.value.length > 0, h = !e.hideDetails || e.hideDetails === "auto" && (D || !!n.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, r.value, a.value, A.value, e.class], style: e.style }, [P && d("div", { key: "prepend", class: "v-input__prepend" }, [(F = n.prepend) == null ? void 0 : F.call(n, E.value), e.prependIcon && d(s, { key: "prepend-icon", name: "prepend" }, null)]), n.default && d("div", { class: "v-input__control" }, [(_ = n.default) == null ? void 0 : _.call(n, E.value)]), x && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(s, { key: "append-icon", name: "append" }, null), (V = n.append) == null ? void 0 : V.call(n, E.value)]), h && d("div", { class: "v-input__details" }, [d(ds, { id: v.value, active: D, messages: w.value }, { message: n.message }), (I = n.details) == null ? void 0 : I.call(n, E.value)])]);
  }), { reset: S, resetValidation: B, validate: $ };
} }), fs = N({ ...un(), ...Ul(So(), ["inline"]) }, "VCheckbox"), cn = Y()({ name: "VCheckbox", inheritAttrs: !1, props: fs(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = fe(e, "modelValue"), { isFocused: r, focus: a, blur: s } = sn(e), i = Ne(), c = m(() => e.id || `checkbox-${i}`);
  return le(() => {
    const [v, p] = ql(t), [u, f] = nl.filterProps(e), [y, C] = vt.filterProps(e);
    return d(nl, X({ class: ["v-checkbox", e.class] }, v, u, { modelValue: o.value, "onUpdate:modelValue": (g) => o.value = g, id: c.value, focused: r.value, style: e.style }), { ...n, default: (g) => {
      let { id: k, messagesId: S, isDisabled: B, isReadonly: $ } = g;
      return d(vt, X(y, { id: k.value, "aria-describedby": S.value, disabled: B.value, readonly: $.value }, p, { modelValue: o.value, "onUpdate:modelValue": (A) => o.value = A, onFocus: a, onBlur: s }), n);
    } });
  }), {};
} }), ko = N({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...Et() }, "VResponsive"), Gn = Y()({ name: "VResponsive", props: ko(), setup(e, l) {
  let { slots: t } = l;
  const { aspectStyles: n } = function(r) {
    return { aspectStyles: m(() => {
      const a = Number(r.aspectRatio);
      return a ? { paddingBottom: String(1 / a * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = It(e);
  return le(() => {
    var r;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: n.value }, null), (r = t.additional) == null ? void 0 : r.call(t), t.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function Hn(e, l) {
  var n;
  const t = (n = e._observe) == null ? void 0 : n[l.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Bo = { mounted: function(e, l) {
  if (!en)
    return;
  const t = l.modifiers || {}, n = l.value, { handler: o, options: r } = typeof n == "object" ? n : { handler: n, options: {} }, a = new IntersectionObserver(function() {
    var p;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const c = (p = e._observe) == null ? void 0 : p[l.instance.$.uid];
    if (!c)
      return;
    const v = s.some((u) => u.isIntersecting);
    !o || t.quiet && !c.init || t.once && !v && !c.init || o(v, s, i), v && t.once ? Hn(e, l) : c.init = !0;
  }, r);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: a }, a.observe(e);
}, unmounted: Hn }, ms = N({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...ko(), ...se(), ...Dt() }, "VImg"), gs = Y()({ name: "VImg", directives: { intersect: Bo }, props: ms(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const o = ue(""), r = H(), a = ue(e.eager ? "loading" : "idle"), s = ue(), i = ue(), c = m(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), v = m(() => c.value.aspect || s.value / i.value || 0);
  function p(P) {
    if ((!e.eager || !P) && (!en || P || e.eager)) {
      if (a.value = "loading", c.value.lazySrc) {
        const x = new Image();
        x.src = c.value.lazySrc, g(x, null);
      }
      c.value.src && Ee(() => {
        var x, D;
        if (t("loadstart", ((x = r.value) == null ? void 0 : x.currentSrc) || c.value.src), (D = r.value) == null ? void 0 : D.complete) {
          if (r.value.naturalWidth || f(), a.value === "error")
            return;
          v.value || g(r.value, null), u();
        } else
          v.value || g(r.value), y();
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
    !P && x && r.value && g(r.value);
  }), Kl(() => p());
  let C = -1;
  function g(P) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const D = () => {
      clearTimeout(C);
      const { naturalHeight: h, naturalWidth: F } = P;
      h || F ? (s.value = F, i.value = h) : P.complete || a.value !== "loading" || x == null ? (P.currentSrc.endsWith(".svg") || P.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : C = window.setTimeout(D, x);
    };
    D();
  }
  const k = m(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), S = () => {
    var D;
    if (!c.value.src || a.value === "idle")
      return null;
    const P = d("img", { class: ["v-img__img", k.value], src: c.value.src, srcset: c.value.srcset, alt: e.alt, sizes: e.sizes, ref: r, onLoad: u, onError: f }, null), x = (D = n.sources) == null ? void 0 : D.call(n);
    return d(Ke, { transition: e.transition, appear: !0 }, { default: () => [$e(x ? d("picture", { class: "v-img__picture" }, [x, P]) : P, [[yt, a.value === "loaded"]])] });
  }, B = () => d(Ke, { transition: e.transition }, { default: () => [c.value.lazySrc && a.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", k.value], src: c.value.lazySrc, alt: e.alt }, null)] }), $ = () => n.placeholder ? d(Ke, { transition: e.transition, appear: !0 }, { default: () => [(a.value === "loading" || a.value === "error" && !n.error) && d("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null, A = () => n.error ? d(Ke, { transition: e.transition, appear: !0 }, { default: () => [a.value === "error" && d("div", { class: "v-img__error" }, [n.error()])] }) : null, E = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, w = ue(!1);
  {
    const P = Z(v, (x) => {
      x && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          w.value = !0;
        });
      }), P());
    });
  }
  return le(() => {
    const [P] = Gn.filterProps(e);
    return $e(d(Gn, X({ class: ["v-img", { "v-img--booting": !w.value }, e.class], style: e.style }, P, { aspectRatio: v.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(ae, null, [d(S, null, null), d(B, null, null), d(E, null, null), d($, null, null), d(A, null, null)]), default: n.default }), [[qe("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: r, state: a, naturalWidth: s, naturalHeight: i };
} }), ys = N({ start: Boolean, end: Boolean, icon: pe, image: String, ...se(), ...Ge(), ...Je(), ...jt(), ...xe(), ...be(), ...ot({ variant: "flat" }) }, "VAvatar"), al = Y()({ name: "VAvatar", props: ys(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Be(e), { colorClasses: o, colorStyles: r, variantClasses: a } = gl(e), { densityClasses: s } = He(e), { roundedClasses: i } = Ze(e), { sizeClasses: c, sizeStyles: v } = Rt(e);
  return le(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, o.value, s.value, i.value, c.value, a.value, e.class], style: [r.value, v.value, e.style] }, { default: () => {
    var p;
    return [e.image ? d(gs, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(he, { key: "icon", icon: e.icon }, null) : (p = t.default) == null ? void 0 : p.call(t), ml(!1, "v-avatar")];
  } })), {};
} }), Po = Symbol.for("vuetify:v-chip-group"), hs = N({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: at }, ...se(), ...Ja({ selectedClass: "v-chip--selected" }), ...xe(), ...be(), ...ot({ variant: "tonal" }) }, "VChipGroup");
Y()({ name: "VChipGroup", props: hs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Be(e), { isSelected: o, select: r, next: a, prev: s, selected: i } = eo(e, Po);
  return Xe({ VChip: { color: G(e, "color"), disabled: G(e, "disabled"), filter: G(e, "filter"), variant: G(e, "variant") } }), le(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, n.value, e.class], style: e.style }, { default: () => {
    var c;
    return [(c = t.default) == null ? void 0 : c.call(t, { isSelected: o, select: r, next: a, prev: s, selected: i.value })];
  } })), {};
} });
const bs = N({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Me(), onClickOnce: Me(), ...Tt(), ...se(), ...Ge(), ...Mt(), ...Za(), ...Je(), ...nn(), ...jt(), ...xe({ tag: "span" }), ...be(), ...ot({ variant: "tonal" }) }, "VChip"), Ss = Y()({ name: "VChip", directives: { Ripple: yl }, props: bs(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { t: r } = ht(), { borderClasses: a } = Lt(e), { colorClasses: s, colorStyles: i, variantClasses: c } = gl(e), { densityClasses: v } = He(e), { elevationClasses: p } = Nt(e), { roundedClasses: u } = Ze(e), { sizeClasses: f } = Rt(e), { themeClasses: y } = Be(e), C = fe(e, "modelValue"), g = Qa(e, Po, !1), k = ln(e, t), S = m(() => e.link !== !1 && k.isLink.value), B = m(() => !e.disabled && e.link !== !1 && (!!g || e.link || k.isClickable.value)), $ = m(() => ({ "aria-label": r(e.closeLabel), onClick(w) {
    C.value = !1, n("click:close", w);
  } }));
  function A(w) {
    var P;
    n("click", w), B.value && ((P = k.navigate) == null || P.call(k, w), g == null || g.toggle());
  }
  function E(w) {
    w.key !== "Enter" && w.key !== " " || (w.preventDefault(), A(w));
  }
  return () => {
    const w = k.isLink.value ? "a" : e.tag, P = !(!e.appendIcon && !e.appendAvatar), x = !(!P && !o.append), D = !(!o.close && !e.closable), h = !(!o.filter && !e.filter) && g, F = !(!e.prependIcon && !e.prependAvatar), _ = !(!F && !o.prepend), V = !g || g.isSelected.value;
    return C.value && $e(d(w, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": B.value, "v-chip--filter": h, "v-chip--pill": e.pill }, y.value, a.value, V ? s.value : void 0, v.value, p.value, u.value, f.value, c.value, g == null ? void 0 : g.selectedClass.value, e.class], style: [V ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: k.href.value, tabindex: B.value ? 0 : void 0, onClick: A, onKeydown: B.value && !S.value && E }, { default: () => {
      var I;
      return [ml(B.value, "v-chip"), h && d(xa, { key: "filter" }, { default: () => [$e(d("div", { class: "v-chip__filter" }, [o.filter ? $e(d(Ve, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[qe("slot"), o.filter, "default"]]) : d(he, { key: "filter-icon", icon: e.filterIcon }, null)]), [[yt, g.isSelected.value]])] }), _ && d("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? d(Ve, { key: "prepend-defaults", disabled: !F, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : d(ae, null, [e.prependIcon && d(he, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(al, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((I = o.default) == null ? void 0 : I.call(o, { isSelected: g == null ? void 0 : g.isSelected.value, selectedClass: g == null ? void 0 : g.selectedClass.value, select: g == null ? void 0 : g.select, toggle: g == null ? void 0 : g.toggle, value: g == null ? void 0 : g.value.value, disabled: e.disabled })) ?? e.text]), x && d("div", { key: "append", class: "v-chip__append" }, [o.append ? d(Ve, { key: "append-defaults", disabled: !P, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : d(ae, null, [e.appendIcon && d(he, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(al, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), D && d("div", X({ key: "close", class: "v-chip__close" }, $.value), [o.close ? d(Ve, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : d(he, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[qe("ripple"), B.value && e.ripple, null]]);
  };
} }), jl = Symbol.for("vuetify:list");
function _o() {
  const e = ve(jl, { hasPrepend: ue(!1), updateHasPrepend: () => null }), l = { hasPrepend: ue(!1), updateHasPrepend: (t) => {
    t && (l.hasPrepend.value = t);
  } };
  return ye(jl, l), e;
}
function Ao() {
  return ve(jl, null);
}
const ws = { open: (e) => {
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
}, select: () => null }, $o = { open: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (t) {
    let r = o.get(l);
    for (n.add(l); r != null && r !== l; )
      n.add(r), r = o.get(r);
    return n;
  }
  return n.delete(l), n;
}, select: () => null }, xs = { open: $o.open, select: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (!t)
    return n;
  const r = [];
  let a = o.get(l);
  for (; a != null; )
    r.push(a), a = o.get(a);
  return new Set(r);
} }, Rl = (e) => {
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
}, Kn = (e) => {
  const l = Rl(e);
  return { select: (t) => {
    let { selected: n, id: o, ...r } = t;
    o = Ue(o);
    const a = n.has(o) ? /* @__PURE__ */ new Map([[o, n.get(o)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...r, id: o, selected: a });
  }, in: (t, n, o) => {
    let r = /* @__PURE__ */ new Map();
    return t != null && t.length && (r = l.in(t.slice(0, 1), n, o)), r;
  }, out: (t, n, o) => l.out(t, n, o) };
}, _t = Symbol.for("vuetify:nested"), Fo = { id: ue(), root: { register: () => null, unregister: () => null, parents: H(/* @__PURE__ */ new Map()), children: H(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: H(/* @__PURE__ */ new Set()), selected: H(/* @__PURE__ */ new Map()), selectedValues: H([]) } }, Cs = N({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), ks = (e) => {
  let l = !1;
  const t = H(/* @__PURE__ */ new Map()), n = H(/* @__PURE__ */ new Map()), o = fe(e, "opened", e.opened, (p) => new Set(p), (p) => [...p.values()]), r = m(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((p) => {
          const u = Kn(p);
          return { select: (f) => {
            let { id: y, selected: C, children: g, ...k } = f;
            return y = Ue(y), g.has(y) ? C : u.select({ id: y, selected: C, children: g, ...k });
          }, in: u.in, out: u.out };
        })(e.mandatory);
      case "leaf":
        return ((p) => {
          const u = Rl(p);
          return { select: (f) => {
            let { id: y, selected: C, children: g, ...k } = f;
            return y = Ue(y), g.has(y) ? C : u.select({ id: y, selected: C, children: g, ...k });
          }, in: u.in, out: u.out };
        })(e.mandatory);
      case "independent":
        return Rl(e.mandatory);
      case "single-independent":
        return Kn(e.mandatory);
      default:
        return ((p) => {
          const u = { select: (f) => {
            let { id: y, value: C, selected: g, children: k, parents: S } = f;
            y = Ue(y);
            const B = new Map(g), $ = [y];
            for (; $.length; ) {
              const E = $.shift();
              g.set(E, C ? "on" : "off"), k.has(E) && $.push(...k.get(E));
            }
            let A = S.get(y);
            for (; A; ) {
              const E = k.get(A), w = E.every((x) => g.get(x) === "on"), P = E.every((x) => !g.has(x) || g.get(x) === "off");
              g.set(A, w ? "on" : P ? "off" : "indeterminate"), A = S.get(A);
            }
            return p && !C && Array.from(g.entries()).reduce((w, P) => {
              let [x, D] = P;
              return D === "on" ? [...w, x] : w;
            }, []).length === 0 ? B : g;
          }, in: (f, y, C) => {
            let g = /* @__PURE__ */ new Map();
            for (const k of f || [])
              g = u.select({ id: k, value: !0, selected: new Map(g), children: y, parents: C });
            return g;
          }, out: (f, y) => {
            const C = [];
            for (const [g, k] of f.entries())
              k !== "on" || y.has(g) || C.push(g);
            return C;
          } };
          return u;
        })(e.mandatory);
    }
  }), a = m(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return xs;
      case "single":
        return ws;
      default:
        return $o;
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
  const c = we("nested"), v = { id: ue(), root: { opened: o, selected: s, selectedValues: m(() => {
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
}, Vo = (e, l) => {
  const t = ve(_t, Fo), n = Symbol(Ne()), o = m(() => e.value !== void 0 ? e.value : n), r = { ...t, id: o, open: (a, s) => t.root.open(o.value, a, s), openOnSelect: (a, s) => t.root.openOnSelect(o.value, a, s), isOpen: m(() => t.root.opened.value.has(o.value)), parent: m(() => t.root.parents.value.get(o.value)), select: (a, s) => t.root.select(o.value, a, s), isSelected: m(() => t.root.selected.value.get(Ue(o.value)) === "on"), isIndeterminate: m(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: m(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, l), nt(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), l && ye(_t, r), r;
}, Bs = dt({ name: "VListGroupActivator", setup(e, l) {
  let { slots: t } = l;
  return (() => {
    const n = ve(_t, Fo);
    ye(_t, { ...n, isGroupActivator: !0 });
  })(), () => {
    var n;
    return (n = t.default) == null ? void 0 : n.call(t);
  };
} }), Ps = N({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...xe() }, "VListGroup"), Un = Y()({ name: "VListGroup", props: Ps(), setup(e, l) {
  let { slots: t } = l;
  const { isOpen: n, open: o, id: r } = Vo(G(e, "value"), !0), a = m(() => `v-list-group--id-${String(r.value)}`), s = Ao(), { isBooted: i } = function() {
    const f = ue(!1);
    return gt(() => {
      window.requestAnimationFrame(() => {
        f.value = !0;
      });
    }), { ssrBootStyles: m(() => f.value ? void 0 : { transition: "none !important" }), isBooted: Hl(f) };
  }();
  function c(f) {
    o(!n.value, f);
  }
  const v = m(() => ({ onClick: c, class: "v-list-group__header", id: a.value })), p = m(() => n.value ? e.collapseIcon : e.expandIcon), u = m(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && p.value, appendIcon: e.appendIcon || !e.subgroup && p.value, title: e.title, value: e.value } }));
  return le(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style }, { default: () => [t.activator && d(Ve, { defaults: u.value }, { default: () => [d(Bs, null, { default: () => [t.activator({ props: v.value, isOpen: n.value })] })] }), d(Ke, { transition: { component: Pr }, disabled: !i.value }, { default: () => {
    var f;
    return [$e(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": a.value }, [(f = t.default) == null ? void 0 : f.call(t)]), [[yt, n.value]])];
  } })] })), {};
} }), _s = ma("v-list-item-subtitle"), As = ma("v-list-item-title"), $s = N({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Me(), onClickOnce: Me(), ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), ...Je(), ...nn(), ...xe(), ...be(), ...ot({ variant: "text" }) }, "VListItem"), ol = Y()({ name: "VListItem", directives: { Ripple: yl }, props: $s(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const r = ln(e, t), a = m(() => e.value === void 0 ? r.href.value : e.value), { select: s, isSelected: i, isIndeterminate: c, isGroupActivator: v, root: p, parent: u, openOnSelect: f } = Vo(a, !1), y = Ao(), C = m(() => {
    var O;
    return e.active !== !1 && (e.active || ((O = r.isActive) == null ? void 0 : O.value) || i.value);
  }), g = m(() => e.link !== !1 && r.isLink.value), k = m(() => !e.disabled && e.link !== !1 && (e.link || r.isClickable.value || e.value != null && !!y)), S = m(() => e.rounded || e.nav), B = m(() => e.color ?? e.activeColor), $ = m(() => ({ color: C.value ? B.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Z(() => {
    var O;
    return (O = r.isActive) == null ? void 0 : O.value;
  }, (O) => {
    O && u.value != null && p.open(u.value, !0), O && f(O);
  }, { immediate: !0 });
  const { themeClasses: A } = Be(e), { borderClasses: E } = Lt(e), { colorClasses: w, colorStyles: P, variantClasses: x } = gl($), { densityClasses: D } = He(e), { dimensionStyles: h } = It(e), { elevationClasses: F } = Nt(e), { roundedClasses: _ } = Ze(S), V = m(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), I = m(() => ({ isActive: C.value, select: s, isSelected: i.value, isIndeterminate: c.value }));
  function T(O) {
    var j;
    o("click", O), !v && k.value && ((j = r.navigate) == null || j.call(r, O), e.value != null && s(!i.value, O));
  }
  function M(O) {
    O.key !== "Enter" && O.key !== " " || (O.preventDefault(), T(O));
  }
  return le(() => {
    const O = g.value ? "a" : e.tag, j = n.title || e.title, z = n.subtitle || e.subtitle, K = !(!e.appendAvatar && !e.appendIcon), L = !(!K && !n.append), R = !(!e.prependAvatar && !e.prependIcon), W = !(!R && !n.prepend);
    var U, ne;
    return y == null || y.updateHasPrepend(W), e.activeColor && (U = "active-color", ne = ["color", "base-color"], ne = Array.isArray(ne) ? ne.slice(0, -1).map((ee) => `'${ee}'`).join(", ") + ` or '${ne.at(-1)}'` : `'${ne}'`, dl(`[Vuetify UPGRADE] '${U}' is deprecated, use ${ne} instead.`)), $e(d(O, { class: ["v-list-item", { "v-list-item--active": C.value, "v-list-item--disabled": e.disabled, "v-list-item--link": k.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !W && (y == null ? void 0 : y.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && C.value }, A.value, E.value, w.value, D.value, F.value, V.value, _.value, x.value, e.class], style: [P.value, h.value, e.style], href: r.href.value, tabindex: k.value ? y ? -2 : 0 : void 0, onClick: T, onKeydown: k.value && !g.value && M }, { default: () => {
      var ee;
      return [ml(k.value || C.value, "v-list-item"), W && d("div", { key: "prepend", class: "v-list-item__prepend" }, [n.prepend ? d(Ve, { key: "prepend-defaults", disabled: !R, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.prepend) == null ? void 0 : Q.call(n, I.value)];
      } }) : d(ae, null, [e.prependAvatar && d(al, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(he, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [j && d(As, { key: "title" }, { default: () => {
        var Q;
        return [((Q = n.title) == null ? void 0 : Q.call(n, { title: e.title })) ?? e.title];
      } }), z && d(_s, { key: "subtitle" }, { default: () => {
        var Q;
        return [((Q = n.subtitle) == null ? void 0 : Q.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ee = n.default) == null ? void 0 : ee.call(n, I.value)]), L && d("div", { key: "append", class: "v-list-item__append" }, [n.append ? d(Ve, { key: "append-defaults", disabled: !K, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.append) == null ? void 0 : Q.call(n, I.value)];
      } }) : d(ae, null, [e.appendIcon && d(he, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(al, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[qe("ripple"), k.value && e.ripple]]);
  }), {};
} }), Fs = N({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...xe() }, "VListSubheader"), Vs = Y()({ name: "VListSubheader", props: Fs(), setup(e, l) {
  let { slots: t } = l;
  const { textColorClasses: n, textColorStyles: o } = We(G(e, "color"));
  return le(() => {
    const r = !(!t.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var a;
      return [r && d("div", { class: "v-list-subheader__text" }, [((a = t.default) == null ? void 0 : a.call(t)) ?? e.title])];
    } });
  }), {};
} }), Es = N({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...be() }, "VDivider"), Is = Y()({ name: "VDivider", props: Es(), setup(e, l) {
  let { attrs: t } = l;
  const { themeClasses: n } = Be(e), { textColorClasses: o, textColorStyles: r } = We(G(e, "color")), a = m(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = J(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = J(e.thickness)), s;
  });
  return le(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, n.value, o.value, e.class], style: [a.value, r.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), Os = N({ items: Array }, "VListChildren"), Eo = Y()({ name: "VListChildren", props: Os(), setup(e, l) {
  let { slots: t } = l;
  return _o(), () => {
    var n, o;
    return ((n = t.default) == null ? void 0 : n.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((r) => {
      var f, y;
      let { children: a, props: s, type: i, raw: c } = r;
      if (i === "divider")
        return ((f = t.divider) == null ? void 0 : f.call(t, { props: s })) ?? d(Is, s, null);
      if (i === "subheader")
        return ((y = t.subheader) == null ? void 0 : y.call(t, { props: s })) ?? d(Vs, s, null);
      const v = { subtitle: t.subtitle ? (C) => {
        var g;
        return (g = t.subtitle) == null ? void 0 : g.call(t, { ...C, item: c });
      } : void 0, prepend: t.prepend ? (C) => {
        var g;
        return (g = t.prepend) == null ? void 0 : g.call(t, { ...C, item: c });
      } : void 0, append: t.append ? (C) => {
        var g;
        return (g = t.append) == null ? void 0 : g.call(t, { ...C, item: c });
      } : void 0, title: t.title ? (C) => {
        var g;
        return (g = t.title) == null ? void 0 : g.call(t, { ...C, item: c });
      } : void 0 }, [p, u] = Un.filterProps(s);
      return a ? d(Un, X({ value: s == null ? void 0 : s.value }, p), { activator: (C) => {
        let { props: g } = C;
        return t.header ? t.header({ props: { ...s, ...g } }) : d(ol, X(s, g), v);
      }, default: () => d(Eo, { items: a }, t) }) : t.item ? t.item({ props: s }) : d(ol, s, v);
    }));
  };
} }), Io = N({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Oo(e, l) {
  const t = ke(l, e.itemTitle, l), n = e.returnObject ? l : ke(l, e.itemValue, t), o = ke(l, e.itemChildren), r = { title: t, value: n, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? Vt(l, ["children"])[1] : l : ke(l, e.itemProps) };
  return { title: String(r.title ?? ""), value: r.value, props: r, children: Array.isArray(o) ? Do(e, o) : void 0, raw: l };
}
function Do(e, l) {
  const t = [];
  for (const n of l)
    t.push(Oo(e, n));
  return t;
}
function Ds(e) {
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
  }(m(() => Do(e, e.items)), (l) => Oo(e, l));
}
function Ts(e, l) {
  const t = ke(l, e.itemType, "item"), n = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : ke(l, e.itemTitle), o = ke(l, e.itemValue, void 0), r = ke(l, e.itemChildren), a = { title: n, value: o, ...e.itemProps === !0 ? Vt(l, ["children"])[1] : ke(l, e.itemProps) };
  return { type: t, title: a.title, value: a.value, props: a, children: t === "item" && r ? To(e, r) : void 0, raw: l };
}
function To(e, l) {
  const t = [];
  for (const n of l)
    t.push(Ts(e, n));
  return t;
}
const Ls = N({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...Cs({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), itemType: { type: String, default: "type" }, ...Io(), ...Je(), ...xe(), ...be(), ...ot({ variant: "text" }) }, "VList"), Ms = Y()({ name: "VList", props: Ls(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { items: n } = function(x) {
    return { items: m(() => To(x, x.items)) };
  }(e), { themeClasses: o } = Be(e), { backgroundColorClasses: r, backgroundColorStyles: a } = pt(G(e, "bgColor")), { borderClasses: s } = Lt(e), { densityClasses: i } = He(e), { dimensionStyles: c } = It(e), { elevationClasses: v } = Nt(e), { roundedClasses: p } = Ze(e), { open: u, select: f } = ks(e), y = m(() => e.lines ? `v-list--${e.lines}-line` : void 0), C = G(e, "activeColor"), g = G(e, "baseColor"), k = G(e, "color");
  _o(), Xe({ VListGroup: { activeColor: C, baseColor: g, color: k }, VListItem: { activeClass: G(e, "activeClass"), activeColor: C, baseColor: g, color: k, density: G(e, "density"), disabled: G(e, "disabled"), lines: G(e, "lines"), nav: G(e, "nav"), variant: G(e, "variant") } });
  const S = ue(!1), B = H();
  function $(x) {
    S.value = !0;
  }
  function A(x) {
    S.value = !1;
  }
  function E(x) {
    var D;
    S.value || x.relatedTarget && ((D = B.value) != null && D.contains(x.relatedTarget)) || P();
  }
  function w(x) {
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
      return Jt(B.value, x);
  }
  return le(() => d(e.tag, { ref: B, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, r.value, s.value, i.value, v.value, y.value, p.value, e.class], style: [a.value, c.value, e.style], tabindex: e.disabled || S.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: $, onFocusout: A, onFocus: E, onKeydown: w }, { default: () => [d(Eo, { items: n.value }, t)] })), { open: u, select: f, focus: P };
} }), Ns = N({ id: String, ...Ul(_a({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Sa } }), ["absolute"]) }, "VMenu"), js = Y()({ name: "VMenu", props: Ns(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { scopeId: o } = Ba(), r = Ne(), a = m(() => e.id || `v-menu-${r}`), s = H(), i = ve(Ll, null), c = ue(0);
  function v() {
    i == null || i.closeParents();
  }
  function p(y) {
    var C, g;
    e.disabled || y.key === "Tab" && (n.value = !1, (g = (C = s.value) == null ? void 0 : C.activatorEl) == null || g.focus());
  }
  function u(y) {
    var g;
    if (e.disabled)
      return;
    const C = (g = s.value) == null ? void 0 : g.contentEl;
    C && n.value ? y.key === "ArrowDown" ? (y.preventDefault(), Jt(C, "next")) : y.key === "ArrowUp" && (y.preventDefault(), Jt(C, "prev")) : ["ArrowDown", "ArrowUp"].includes(y.key) && (n.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => u(y))));
  }
  ye(Ll, { register() {
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
  const f = m(() => X({ "aria-haspopup": "menu", "aria-expanded": String(n.value), "aria-owns": a.value, onKeydown: u }, e.activatorProps));
  return le(() => {
    const [y] = Tn.filterProps(e);
    return d(Tn, X({ ref: s, class: ["v-menu", e.class], style: e.style }, y, { modelValue: n.value, "onUpdate:modelValue": (C) => n.value = C, absolute: !0, activatorProps: f.value, "onClick:outside": v, onKeydown: p }, o), { activator: t.activator, default: function() {
      for (var C = arguments.length, g = new Array(C), k = 0; k < C; k++)
        g[k] = arguments[k];
      return d(Ve, { root: "VMenu" }, { default: () => {
        var S;
        return [(S = t.default) == null ? void 0 : S.call(t, ...g)];
      } });
    } });
  }), an({ id: a, ΨopenChildren: c }, s);
} }), Rs = N({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...Dt({ transition: { component: wa } }) }, "VCounter"), Ws = Y()({ name: "VCounter", functional: !0, props: Rs(), setup(e, l) {
  let { slots: t } = l;
  const n = m(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => d(Ke, { transition: e.transition }, { default: () => [$e(d("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: n.value, max: e.max, value: e.value }) : n.value]), [[yt, e.active]])] })), {};
} }), zs = N({ floating: Boolean, ...se() }, "VFieldLabel"), zt = Y()({ name: "VFieldLabel", props: zs(), setup(e, l) {
  let { slots: t } = l;
  return le(() => d(go, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Gs = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Lo = N({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Gs.includes(e) }, "onClick:clear": Me(), "onClick:appendInner": Me(), "onClick:prependInner": Me(), ...se(), ...on(), ...Je(), ...be() }, "VField"), qn = Y()({ name: "VField", inheritAttrs: !1, props: { id: String, ...xo(), ...Lo() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { themeClasses: r } = Be(e), { loaderClasses: a } = rn(e), { focusClasses: s, isFocused: i, focus: c, blur: v } = sn(e), { InputIcon: p } = wo(e), { roundedClasses: u } = Ze(e), { rtlClasses: f } = Ot(), y = m(() => e.dirty || e.active), C = m(() => !(e.singleLine || !e.label && !o.label)), g = Ne(), k = m(() => e.id || `input-${g}`), S = m(() => `${k.value}-messages`), B = H(), $ = H(), A = H(), E = m(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: w, backgroundColorStyles: P } = pt(G(e, "bgColor")), { textColorClasses: x, textColorStyles: D } = We(m(() => e.error || e.disabled ? void 0 : y.value && i.value ? e.color : e.baseColor));
  Z(y, (_) => {
    if (C.value) {
      const V = B.value.$el, I = $.value.$el;
      requestAnimationFrame(() => {
        const T = Xl(V), M = I.getBoundingClientRect(), O = M.x - T.x, j = M.y - T.y - (T.height / 2 - M.height / 2), z = M.width / 0.75, K = Math.abs(z - T.width) > 1 ? { maxWidth: J(z) } : void 0, L = getComputedStyle(V), R = getComputedStyle(I), W = 1e3 * parseFloat(L.transitionDuration) || 150, U = parseFloat(R.getPropertyValue("--v-field-label-scale")), ne = R.getPropertyValue("color");
        V.style.visibility = "visible", I.style.visibility = "hidden", st(V, { transform: `translate(${O}px, ${j}px) scale(${U})`, color: ne, ...K }, { duration: W, easing: Zt, direction: _ ? "normal" : "reverse" }).finished.then(() => {
          V.style.removeProperty("visibility"), I.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const h = m(() => ({ isActive: y, isFocused: i, controlRef: A, blur: v, focus: c }));
  function F(_) {
    _.target !== document.activeElement && _.preventDefault();
  }
  return le(() => {
    var O, j, z;
    const _ = e.variant === "outlined", V = o["prepend-inner"] || e.prependInnerIcon, I = !(!e.clearable && !o.clear), T = !!(o["append-inner"] || e.appendInnerIcon || I), M = o.label ? o.label({ ...h.value, label: e.label, props: { for: k.value } }) : e.label;
    return d("div", X({ class: ["v-field", { "v-field--active": y.value, "v-field--appended": T, "v-field--center-affix": e.centerAffix ?? !E.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": V, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !M, [`v-field--variant-${e.variant}`]: !0 }, r.value, w.value, s.value, a.value, u.value, f.value, e.class], style: [P.value, D.value, e.style], onClick: F }, t), [d("div", { class: "v-field__overlay" }, null), d(so, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), V && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(p, { key: "prepend-icon", name: "prependInner" }, null), (O = o["prepend-inner"]) == null ? void 0 : O.call(o, h.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && C.value && d(zt, { key: "floating-label", ref: $, class: [x.value], floating: !0, for: k.value }, { default: () => [M] }), d(zt, { ref: B, for: k.value }, { default: () => [M] }), (j = o.default) == null ? void 0 : j.call(o, { ...h.value, props: { id: k.value, class: "v-field__input", "aria-describedby": S.value }, focus: c, blur: v })]), I && d(xa, { key: "clear" }, { default: () => [$e(d("div", { class: "v-field__clearable", onMousedown: (K) => {
      K.preventDefault(), K.stopPropagation();
    } }, [o.clear ? o.clear() : d(p, { name: "clear" }, null)]), [[yt, e.dirty]])] }), T && d("div", { key: "append", class: "v-field__append-inner" }, [(z = o["append-inner"]) == null ? void 0 : z.call(o, h.value), e.appendInnerIcon && d(p, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", x.value] }, [_ && d(ae, null, [d("div", { class: "v-field__outline__start" }, null), C.value && d("div", { class: "v-field__outline__notch" }, [d(zt, { ref: $, floating: !0, for: k.value }, { default: () => [M] })]), d("div", { class: "v-field__outline__end" }, null)]), E.value && C.value && d(zt, { ref: $, floating: !0, for: k.value }, { default: () => [M] })])]);
  }), { controlRef: A };
} }), Hs = ["color", "file", "time", "date", "datetime-local", "week", "month"], Mo = N({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...un(), ...Lo() }, "VTextField"), Wl = Y()({ name: "VTextField", directives: { Intersect: Bo }, inheritAttrs: !1, props: Mo(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const r = fe(e, "modelValue"), { isFocused: a, focus: s, blur: i } = sn(e), c = m(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : (r.value ?? "").toString().length), v = m(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), p = m(() => ["plain", "underlined"].includes(e.variant));
  function u(E, w) {
    var P, x;
    e.autofocus && E && ((x = (P = w[0].target) == null ? void 0 : P.focus) == null || x.call(P));
  }
  const f = H(), y = H(), C = H(), g = m(() => Hs.includes(e.type) || e.persistentPlaceholder || a.value || e.active);
  function k() {
    var E;
    C.value !== document.activeElement && ((E = C.value) == null || E.focus()), a.value || s();
  }
  function S(E) {
    n("mousedown:control", E), E.target !== C.value && (k(), E.preventDefault());
  }
  function B(E) {
    k(), n("click:control", E);
  }
  function $(E) {
    E.stopPropagation(), k(), Ee(() => {
      r.value = null, function(w) {
        for (var P = arguments.length, x = new Array(P > 1 ? P - 1 : 0), D = 1; D < P; D++)
          x[D - 1] = arguments[D];
        if (Array.isArray(w))
          for (const h of w)
            h(...x);
        else
          typeof w == "function" && w(...x);
      }(e["onClick:clear"], E);
    });
  }
  function A(E) {
    var P;
    const w = E.target;
    if (r.value = w.value, ((P = e.modelModifiers) == null ? void 0 : P.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const x = [w.selectionStart, w.selectionEnd];
      Ee(() => {
        w.selectionStart = x[0], w.selectionEnd = x[1];
      });
    }
  }
  return le(() => {
    const E = !!(o.counter || e.counter || e.counterValue), w = !(!E && !o.details), [P, x] = ql(t), [{ modelValue: D, ...h }] = nl.filterProps(e), [F] = function(_) {
      return Vt(_, Object.keys(qn.props).filter((V) => !El(V) && V !== "class" && V !== "style"));
    }(e);
    return d(nl, X({ ref: f, modelValue: r.value, "onUpdate:modelValue": (_) => r.value = _, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, P, h, { centerAffix: !p.value, focused: a.value }), { ...o, default: (_) => {
      let { id: V, isDisabled: I, isDirty: T, isReadonly: M, isValid: O } = _;
      return d(qn, X({ ref: y, onMousedown: S, onClick: B, "onClick:clear": $, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, F, { id: V.value, active: g.value || T.value, dirty: T.value || e.dirty, disabled: I.value, focused: a.value, error: O.value === !1 }), { ...o, default: (j) => {
        let { props: { class: z, ...K } } = j;
        const L = $e(d("input", X({ ref: C, value: r.value, onInput: A, autofocus: e.autofocus, readonly: M.value, disabled: I.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: k, onBlur: i }, K, x), null), [[qe("intersect"), { handler: u }, null, { once: !0 }]]);
        return d(ae, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), o.default ? d("div", { class: z, "data-no-activator": "" }, [o.default(), L]) : fr(L, { class: z }), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: w ? (_) => {
      var V;
      return d(ae, null, [(V = o.details) == null ? void 0 : V.call(o, _), E && d(ae, null, [d("span", null, null), d(Ws, { active: e.persistentCounter || a.value, value: c.value, max: v.value }, o.counter)])]);
    } : void 0 });
  }), an({}, f, y, C);
} }), Ks = N({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: at }, ...Io({ itemChildren: !1 }) }, "Select"), Us = N({ ...Ks(), ...Ul(Mo({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...Dt({ transition: { component: Sa } }) }, "VSelect"), qs = Y()({ name: "VSelect", props: Us(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { t: n } = ht(), o = H(), r = H(), a = fe(e, "menu"), s = m({ get: () => a.value, set: (_) => {
    var V;
    a.value && !_ && ((V = r.value) != null && V.ΨopenChildren) || (a.value = _);
  } }), { items: i, transformIn: c, transformOut: v } = Ds(e), p = fe(e, "modelValue", [], (_) => c(_ === null ? [null] : De(_)), (_) => {
    const V = v(_);
    return e.multiple ? V : V[0] ?? null;
  }), u = Co(), f = m(() => p.value.map((_) => i.value.find((V) => e.valueComparator(V.value, _.value)) || _)), y = m(() => f.value.map((_) => _.props.value)), C = ue(!1);
  let g, k = "";
  const S = m(() => e.hideSelected ? i.value.filter((_) => !f.value.some((V) => V === _)) : i.value), B = m(() => e.hideNoData && !i.value.length || e.readonly || (u == null ? void 0 : u.isReadonly.value)), $ = H();
  function A(_) {
    e.openOnClear && (s.value = !0);
  }
  function E() {
    B.value || (s.value = !s.value);
  }
  function w(_) {
    var T, M;
    if (e.readonly || u != null && u.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(_.key) && _.preventDefault(), ["Enter", "ArrowDown", " "].includes(_.key) && (s.value = !0), ["Escape", "Tab"].includes(_.key) && (s.value = !1), _.key === "Home" ? (T = $.value) == null || T.focus("first") : _.key === "End" && ((M = $.value) == null || M.focus("last")), e.multiple || !function(O) {
      const j = O.key.length === 1, z = !O.ctrlKey && !O.metaKey && !O.altKey;
      return j && z;
    }(_)))
      return;
    const V = performance.now();
    V - g > 1e3 && (k = ""), k += _.key.toLowerCase(), g = V;
    const I = i.value.find((O) => O.title.toLowerCase().startsWith(k));
    I !== void 0 && (p.value = [I]);
  }
  function P(_) {
    var V;
    _.key === "Tab" && ((V = o.value) == null || V.focus());
  }
  function x(_) {
    if (e.multiple) {
      const V = y.value.findIndex((I) => e.valueComparator(I, _.value));
      if (V === -1)
        p.value = [...p.value, _];
      else {
        const I = [...p.value];
        I.splice(V, 1), p.value = I;
      }
    } else
      p.value = [_], s.value = !1;
  }
  function D(_) {
    var V;
    (V = $.value) != null && V.$el.contains(_.relatedTarget) || (s.value = !1);
  }
  function h() {
    var _;
    C.value && ((_ = o.value) == null || _.focus());
  }
  function F(_) {
    C.value = !0;
  }
  return le(() => {
    const _ = !(!e.chips && !t.chip), V = !!(!e.hideNoData || S.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), I = p.value.length > 0, [T] = Wl.filterProps(e), M = I || !C.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(Wl, X({ ref: o }, T, { modelValue: p.value.map((O) => O.props.value).join(", "), "onUpdate:modelValue": (O) => {
      O == null && (p.value = []);
    }, focused: C.value, "onUpdate:focused": (O) => C.value = O, validationValue: p.externalValue, dirty: I, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": p.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: M, "onClick:clear": A, "onMousedown:control": E, onBlur: D, onKeydown: w }), { ...t, default: () => d(ae, null, [d(js, X({ ref: r, modelValue: s.value, "onUpdate:modelValue": (O) => s.value = O, activator: "parent", contentClass: "v-select__content", disabled: B.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: h }, e.menuProps), { default: () => [V && d(Ms, { ref: $, selected: y.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (O) => O.preventDefault(), onKeydown: P, onFocusin: F, tabindex: "-1" }, { default: () => {
      var O, j, z;
      return [(O = t["prepend-item"]) == null ? void 0 : O.call(t), !S.value.length && !e.hideNoData && (((j = t["no-data"]) == null ? void 0 : j.call(t)) ?? d(ol, { title: n(e.noDataText) }, null)), S.value.map((K, L) => {
        var W;
        const R = X(K.props, { key: L, onClick: () => x(K) });
        return ((W = t.item) == null ? void 0 : W.call(t, { item: K, index: L, props: R })) ?? d(ol, R, { prepend: (U) => {
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
      return d("div", { key: O.value, class: "v-select__selection" }, [_ ? t.chip ? d(Ve, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: O.title } } }, { default: () => {
        var L;
        return [(L = t.chip) == null ? void 0 : L.call(t, { item: O, index: j, props: z })];
      } }) : d(Ss, X({ key: "chip", closable: e.closableChips, size: "small", text: O.title }, z), null) : ((K = t.selection) == null ? void 0 : K.call(t, { item: O, index: j })) ?? d("span", { class: "v-select__selection-text" }, [O.title, e.multiple && j < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [qt(",")])])]);
    })]), "append-inner": function() {
      var K;
      for (var O = arguments.length, j = new Array(O), z = 0; z < O; z++)
        j[z] = arguments[z];
      return d(ae, null, [(K = t["append-inner"]) == null ? void 0 : K.call(t, ...j), e.menuIcon ? d(he, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), an({ isFocused: C, menu: s, select: x }, o);
} }), dn = N({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), rl = Y()({ name: "VDataTableFooter", props: dn(), setup(e, l) {
  let { slots: t } = l;
  const { t: n } = ht(), { page: o, pageCount: r, startIndex: a, stopIndex: s, itemsLength: i, itemsPerPage: c, setItemsPerPage: v } = function() {
    const u = ve(ja);
    if (!u)
      throw new Error("Missing pagination!");
    return u;
  }(), p = m(() => e.itemsPerPageOptions.map((u) => ({ ...u, title: n(u.title) })));
  return () => {
    var u;
    return d("div", { class: "v-data-table-footer" }, [(u = t.prepend) == null ? void 0 : u.call(t), d("div", { class: "v-data-table-footer__items-per-page" }, [d("span", null, [n(e.itemsPerPageText)]), d(qs, { items: p.value, modelValue: c.value, "onUpdate:modelValue": (f) => v(Number(f)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), d("div", { class: "v-data-table-footer__info" }, [d("div", null, [n(e.pageText, i.value ? a.value + 1 : 0, s.value, i.value)])]), d("div", { class: "v-data-table-footer__pagination" }, [d(it, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": n(e.firstPageLabel) }, null), d(it, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": n(e.prevPageLabel) }, null), e.showCurrentPage && d("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), d(it, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(r.value, o.value + 1), disabled: o.value === r.value, "aria-label": n(e.nextPageLabel) }, null), d(it, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = r.value, disabled: o.value === r.value, "aria-label": n(e.lastPageLabel) }, null)])]);
  };
} }), pn = (Yn = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, _l = (e, l) => {
  let { slots: t, attrs: n } = l;
  const o = e.tag ?? "td";
  return d(o, X({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: J(e.height), width: J(e.width), left: J(e.fixedOffset || null) } }, n), { default: () => {
    var r;
    return [(r = t.default) == null ? void 0 : r.call(t)];
  } });
}, _l.props = Yn, _l);
var Yn, _l;
const Ys = N({ headers: { type: Array, default: () => [] } }, "DataTable-header"), No = Symbol.for("vuetify:data-table-headers");
function jo(e, l) {
  const t = H([]), n = H([]);
  Re(() => {
    var f, y, C;
    const r = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], a = r.flatMap((g, k) => g.map((S) => ({ column: S, row: k }))), s = r.length, i = { title: "", sortable: !1 }, c = { ...i, width: 48 };
    if ((f = l == null ? void 0 : l.groupBy) != null && f.value.length) {
      const g = a.findIndex((k) => {
        let { column: S } = k;
        return S.key === "data-table-group";
      });
      g < 0 ? a.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : a.splice(g, 1, { column: { ...i, ...a[g].column }, row: a[g].row });
    }
    if ((y = l == null ? void 0 : l.showSelect) != null && y.value) {
      const g = a.findIndex((k) => {
        let { column: S } = k;
        return S.key === "data-table-select";
      });
      g < 0 ? a.unshift({ column: { ...c, key: "data-table-select", rowspan: s }, row: 0 }) : a.splice(g, 1, { column: { ...c, ...a[g].column }, row: a[g].row });
    }
    if ((C = l == null ? void 0 : l.showExpand) != null && C.value) {
      const g = a.findIndex((k) => {
        let { column: S } = k;
        return S.key === "data-table-expand";
      });
      g < 0 ? a.push({ column: { ...c, key: "data-table-expand", rowspan: s }, row: 0 }) : a.splice(g, 1, { column: { ...c, ...a[g].column }, row: a[g].row });
    }
    const v = yn(s).map(() => []), p = yn(s).fill(0);
    a.forEach((g) => {
      let { column: k, row: S } = g;
      const B = k.key;
      for (let $ = S; $ <= S + (k.rowspan ?? 1) - 1; $++)
        v[$].push({ ...k, key: B, fixedOffset: p[$], sortable: k.sortable ?? !!k.key }), p[$] += Number(k.width ?? 0);
    }), v.forEach((g) => {
      for (let k = g.length; k--; k >= 0)
        if (g[k].fixed)
          return void (g[k].lastFixed = !0);
    });
    const u = /* @__PURE__ */ new Set();
    t.value = v.map((g) => {
      const k = [];
      for (const S of g)
        u.has(S.key) || (u.add(S.key), k.push(S));
      return k;
    }), n.value = v.at(-1) ?? [];
  });
  const o = { headers: t, columns: n };
  return ye(No, o), o;
}
function hl() {
  const e = ve(No);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Ro = N({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...on() }, "VDataTableHeaders"), sl = Y()({ name: "VDataTableHeaders", props: Ro(), setup(e, l) {
  let { slots: t, emit: n } = l;
  const { toggleSort: o, sortBy: r, isSorted: a } = function() {
    const $ = ve(Ua);
    if (!$)
      throw new Error("Missing sort!");
    return $;
  }(), { someSelected: s, allSelected: i, selectAll: c, showSelectAll: v } = fl(), { columns: p, headers: u } = hl(), { loaderClasses: f } = rn(e), y = ($, A) => {
    if (e.sticky || $.fixed)
      return { position: "sticky", zIndex: $.fixed ? 4 : e.sticky ? 3 : void 0, left: $.fixed ? J($.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${A})` : void 0 };
  };
  function C($) {
    const A = r.value.find((E) => E.key === $.key);
    return A ? A.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: g, backgroundColorStyles: k } = pt(e, "color"), S = m(() => ({ headers: u.value, columns: p.value, toggleSort: o, isSorted: a, sortBy: r.value, someSelected: s.value, allSelected: i.value, selectAll: c, getSortIcon: C, getFixedStyles: y })), B = ($) => {
    let { column: A, x: E, y: w } = $;
    const P = A.key === "data-table-select" || A.key === "data-table-expand";
    return d(pn, { tag: "th", align: A.align, class: ["v-data-table__th", { "v-data-table__th--sortable": A.sortable, "v-data-table__th--sorted": a(A) }, f.value], style: { width: J(A.width), minWidth: J(A.width), ...y(A, w) }, colspan: A.colspan, rowspan: A.rowspan, onClick: A.sortable ? () => o(A) : void 0, lastFixed: A.lastFixed, noPadding: P }, { default: () => {
      var h;
      const x = `column.${A.key}`, D = { column: A, selectAll: c, isSorted: a, toggleSort: o, sortBy: r.value, someSelected: s.value, allSelected: i.value, getSortIcon: C };
      return t[x] ? t[x](D) : A.key === "data-table-select" ? ((h = t["column.data-table-select"]) == null ? void 0 : h.call(t, D)) ?? (v && d(vt, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": c }, null)) : d("div", { class: "v-data-table-header__content" }, [d("span", null, [A.title]), A.sortable && d(he, { key: "icon", class: "v-data-table-header__sort-icon", icon: C(A) }, null), e.multiSort && a(A) && d("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...g.value], style: k.value }, [r.value.findIndex((F) => F.key === A.key) + 1])]);
    } });
  };
  le(() => d(ae, null, [t.headers ? t.headers(S.value) : u.value.map(($, A) => d("tr", null, [$.map((E, w) => d(B, { column: E, x: w, y: A }, null))])), e.loading && d("tr", { class: "v-data-table-progress" }, [d("th", { colspan: p.value.length }, [d(so, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), Xs = N({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), Js = Y()({ name: "VDataTableGroupHeaderRow", props: Xs(), setup(e, l) {
  let { slots: t } = l;
  const { isGroupOpen: n, toggleGroup: o, extractRows: r } = Oa(), { isSelected: a, isSomeSelected: s, select: i } = fl(), { columns: c } = hl(), v = m(() => r([e.item]));
  return () => d("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [c.value.map((p) => {
    var u, f;
    if (p.key === "data-table-group") {
      const y = n(e.item) ? "$expand" : "$next", C = () => o(e.item);
      return ((u = t["data-table-group"]) == null ? void 0 : u.call(t, { item: e.item, count: v.value.length, props: { icon: y, onClick: C } })) ?? d(pn, { class: "v-data-table-group-header-row__column" }, { default: () => [d(it, { size: "small", variant: "text", icon: y, onClick: C }, null), d("span", null, [e.item.value]), d("span", null, [qt("("), v.value.length, qt(")")])] });
    }
    if (p.key === "data-table-select") {
      const y = a(v.value), C = s(v.value) && !y, g = (k) => i(v.value, k);
      return ((f = t["data-table-select"]) == null ? void 0 : f.call(t, { props: { modelValue: y, indeterminate: C, "onUpdate:modelValue": g } })) ?? d("td", null, [d(vt, { modelValue: y, indeterminate: C, "onUpdate:modelValue": g }, null)]);
    }
    return d("td", null, null);
  })]);
} }), Zs = dt({ name: "VDataTableRow", props: N({ index: Number, item: Object, onClick: Function }, "VDataTableRow")(), setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, toggleSelect: o } = fl(), { isExpanded: r, toggleExpand: a } = Fa(), { columns: s } = hl();
  le(() => d("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, c) => d(pn, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var f, y;
    const v = e.item, p = `item.${i.key}`, u = { index: e.index, item: e.item, columns: s.value, isSelected: n, toggleSelect: o, isExpanded: r, toggleExpand: a };
    return t[p] ? t[p](u) : i.key === "data-table-select" ? ((f = t["item.data-table-select"]) == null ? void 0 : f.call(t, u)) ?? d(vt, { disabled: !v.selectable, modelValue: n([v]), onClick: $l(() => o(v), ["stop"]) }, null) : i.key === "data-table-expand" ? ((y = t["item.data-table-expand"]) == null ? void 0 : y.call(t, u)) ?? d(it, { icon: r(v) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: $l(() => a(v), ["stop"]) }, null) : ke(v.columns, i.key);
  } }))]));
} }), Wo = N({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), il = Y()({ name: "VDataTableRows", props: Wo(), setup(e, l) {
  let { emit: t, slots: n } = l;
  const { columns: o } = hl(), { expandOnClick: r, toggleExpand: a, isExpanded: s } = Fa(), { isSelected: i, toggleSelect: c } = fl(), { toggleGroup: v, isGroupOpen: p } = Oa(), { t: u } = ht();
  return le(() => {
    var f;
    return e.loading && n.loading ? d("tr", { class: "v-data-table-rows-loading", key: "loading" }, [d("td", { colspan: o.value.length }, [n.loading()])]) : e.loading || e.items.length || e.hideNoData ? d(ae, null, [e.items.map((y, C) => {
      var S;
      if (y.type === "group")
        return n["group-header"] ? n["group-header"]({ index: C, item: y, columns: o.value, isExpanded: s, toggleExpand: a, isSelected: i, toggleSelect: c, toggleGroup: v, isGroupOpen: p }) : d(Js, { key: `group-header_${y.id}`, item: y }, n);
      const g = { index: C, item: y, columns: o.value, isExpanded: s, toggleExpand: a, isSelected: i, toggleSelect: c }, k = { ...g, props: { key: `item_${y.value}`, onClick: r.value || e["onClick:row"] ? (B) => {
        var $;
        r.value && a(y), ($ = e["onClick:row"]) == null || $.call(e, B, { item: y });
      } : void 0, index: C, item: y } };
      return d(ae, null, [n.item ? n.item(k) : d(Zs, k.props, n), s(y) && ((S = n["expanded-row"]) == null ? void 0 : S.call(n, g))]);
    })]) : d("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [d("td", { colspan: o.value.length }, [((f = n["no-data"]) == null ? void 0 : f.call(n)) ?? u(e.noDataText)])]);
  }), {};
} }), zo = N({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...se(), ...Ge(), ...xe(), ...be() }, "VTable"), ul = Y()({ name: "VTable", props: zo(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Be(e), { densityClasses: o } = He(e);
  return le(() => d(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, n.value, o.value, e.class], style: e.style }, { default: () => {
    var r, a, s;
    return [(r = t.top) == null ? void 0 : r.call(t), t.default ? d("div", { class: "v-table__wrapper", style: { height: J(e.height) } }, [d("table", null, [t.default()])]) : (a = t.wrapper) == null ? void 0 : a.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), Qs = N({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function ei(e, l, t) {
  return l.map((n, o) => function(r, a, s, i) {
    return { type: "item", index: s, value: r.returnObject ? a : ke(a, r.itemValue), selectable: ke(a, r.itemSelectable, !0), columns: i.reduce((c, v) => (c[v.key] = ke(a, v.value ?? v.key), c), {}), raw: a };
  }(e, n, o, t));
}
function Go(e, l) {
  return { items: m(() => ei(e, e.items, l.value)) };
}
const Ho = N({ ...Wo(), width: [String, Number], search: String, ...Wr(), ...zr(), ...Ys(), ...Qs(), ...Hr(), ...Kr(), ...Ro(), ...zo() }, "DataTable"), ti = N({ ...Na(), ...Ho(), ...jr(), ...dn() }, "VDataTable"), li = Y()({ name: "VDataTable", props: ti(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Ea(e), { sortBy: r, multiSort: a, mustSort: s } = qa(e), { page: i, itemsPerPage: c } = Ra(e), { columns: v, headers: p } = jo(e, { groupBy: o, showSelect: G(e, "showSelect"), showExpand: G(e, "showExpand") }), { items: u } = Go(e, v), f = G(e, "search"), { filteredItems: y } = Rr(e, u, f, { transform: (R) => R.columns }), { toggleSort: C } = Ya({ sortBy: r, multiSort: a, mustSort: s, page: i }), { sortByWithGroups: g, opened: k, extractRows: S, isGroupOpen: B, toggleGroup: $ } = Ia({ groupBy: o, sortBy: r }), { sortedItems: A } = Ur(e, y, g), { flatItems: E } = La(A, o, k), w = m(() => E.value.length), { startIndex: P, stopIndex: x, pageCount: D, setItemsPerPage: h } = Wa({ page: i, itemsPerPage: c, itemsLength: w }), { paginatedItems: F } = function(R) {
    const { items: W, startIndex: U, stopIndex: ne, itemsPerPage: ee } = R;
    return { paginatedItems: m(() => ee.value <= 0 ? W.value : W.value.slice(U.value, ne.value)) };
  }({ items: E, startIndex: P, stopIndex: x, itemsPerPage: c }), _ = m(() => S(F.value)), { isSelected: V, select: I, selectAll: T, toggleSelect: M, someSelected: O, allSelected: j } = Ka(e, { allItems: u, currentPage: _ }), { isExpanded: z, toggleExpand: K } = $a(e);
  Ma({ page: i, itemsPerPage: c, sortBy: r, groupBy: o, search: f }), Xe({ VDataTableRows: { hideNoData: G(e, "hideNoData"), noDataText: G(e, "noDataText"), loading: G(e, "loading"), loadingText: G(e, "loadingText") } });
  const L = m(() => ({ page: i.value, itemsPerPage: c.value, sortBy: r.value, pageCount: D.value, toggleSort: C, setItemsPerPage: h, someSelected: O.value, allSelected: j.value, isSelected: V, select: I, selectAll: T, toggleSelect: M, isExpanded: z, toggleExpand: K, isGroupOpen: B, toggleGroup: $, items: _.value, groupedItems: F.value, columns: v.value, headers: p.value }));
  return le(() => {
    const [R] = rl.filterProps(e), [W] = sl.filterProps(e), [U] = il.filterProps(e), [ne] = ul.filterProps(e);
    return d(ul, X({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, ne), { top: () => {
      var ee;
      return (ee = n.top) == null ? void 0 : ee.call(n, L.value);
    }, default: () => {
      var ee, Q, ce, Ce;
      return n.default ? n.default(L.value) : d(ae, null, [(ee = n.colgroup) == null ? void 0 : ee.call(n, L.value), d("thead", null, [d(sl, W, n)]), (Q = n.thead) == null ? void 0 : Q.call(n, L.value), d("tbody", null, [n.body ? n.body(L.value) : d(il, X(U, { items: F.value }), n)]), (ce = n.tbody) == null ? void 0 : ce.call(n, L.value), (Ce = n.tfoot) == null ? void 0 : Ce.call(n, L.value)]);
    }, bottom: () => n.bottom ? n.bottom(L.value) : d(ae, null, [d(rl, R, { prepend: n["footer.prepend"] })]) });
  }), {};
} }), ni = N({ itemsLength: { type: [Number, String], required: !0 }, ...Na(), ...Ho(), ...dn() }, "VDataTableServer"), ai = Y()({ name: "VDataTableServer", props: ni(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0, "click:row": (e, l) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Ea(e), { sortBy: r, multiSort: a, mustSort: s } = qa(e), { page: i, itemsPerPage: c } = Ra(e), v = m(() => parseInt(e.itemsLength, 10)), { columns: p, headers: u } = jo(e, { groupBy: o, showSelect: G(e, "showSelect"), showExpand: G(e, "showExpand") }), { items: f } = Go(e, p), { toggleSort: y } = Ya({ sortBy: r, multiSort: a, mustSort: s, page: i }), { opened: C, isGroupOpen: g, toggleGroup: k, extractRows: S } = Ia({ groupBy: o, sortBy: r }), { pageCount: B, setItemsPerPage: $ } = Wa({ page: i, itemsPerPage: c, itemsLength: v }), { flatItems: A } = La(f, o, C), { isSelected: E, select: w, selectAll: P, toggleSelect: x, someSelected: D, allSelected: h } = Ka(e, { allItems: f, currentPage: f }), { isExpanded: F, toggleExpand: _ } = $a(e), V = m(() => S(f.value));
  Ma({ page: i, itemsPerPage: c, sortBy: r, groupBy: o, search: G(e, "search") }), ye("v-data-table", { toggleSort: y, sortBy: r }), Xe({ VDataTableRows: { hideNoData: G(e, "hideNoData"), noDataText: G(e, "noDataText"), loading: G(e, "loading"), loadingText: G(e, "loadingText") } });
  const I = m(() => ({ page: i.value, itemsPerPage: c.value, sortBy: r.value, pageCount: B.value, toggleSort: y, setItemsPerPage: $, someSelected: D.value, allSelected: h.value, isSelected: E, select: w, selectAll: P, toggleSelect: x, isExpanded: F, toggleExpand: _, isGroupOpen: g, toggleGroup: k, items: V.value, groupedItems: A.value, columns: p.value, headers: u.value }));
  le(() => {
    const [T] = rl.filterProps(e), [M] = sl.filterProps(e), [O] = il.filterProps(e), [j] = ul.filterProps(e);
    return d(ul, X({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, j), { top: () => {
      var z;
      return (z = n.top) == null ? void 0 : z.call(n, I.value);
    }, default: () => {
      var z, K, L, R;
      return n.default ? n.default(I.value) : d(ae, null, [(z = n.colgroup) == null ? void 0 : z.call(n, I.value), d("thead", { class: "v-data-table__thead", role: "rowgroup" }, [d(sl, X(M, { sticky: e.fixedHeader }), n)]), (K = n.thead) == null ? void 0 : K.call(n, I.value), d("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [n.body ? n.body(I.value) : d(il, X(O, { items: A.value }), n)]), (L = n.tbody) == null ? void 0 : L.call(n, I.value), (R = n.tfoot) == null ? void 0 : R.call(n, I.value)]);
    }, bottom: () => n.bottom ? n.bottom(I.value) : d(rl, T, { prepend: n["footer.prepend"] }) });
  });
} }), Ko = vl.reduce((e, l) => (e[l] = { type: [Boolean, String, Number], default: !1 }, e), {}), Uo = vl.reduce((e, l) => (e["offset" + $t(l)] = { type: [String, Number], default: null }, e), {}), qo = vl.reduce((e, l) => (e["order" + $t(l)] = { type: [String, Number], default: null }, e), {}), Xn = { col: Object.keys(Ko), offset: Object.keys(Uo), order: Object.keys(qo) };
function oi(e, l, t) {
  let n = e;
  if (t != null && t !== !1)
    return l && (n += `-${l.replace(e, "")}`), e === "col" && (n = "v-" + n), (e !== "col" || t !== "" && t !== !0) && (n += `-${t}`), n.toLowerCase();
}
const ri = ["auto", "start", "end", "center", "baseline", "stretch"], si = N({ cols: { type: [Boolean, String, Number], default: !1 }, ...Ko, offset: { type: [String, Number], default: null }, ...Uo, order: { type: [String, Number], default: null }, ...qo, alignSelf: { type: String, default: null, validator: (e) => ri.includes(e) }, ...se(), ...xe() }, "VCol"), ut = Y()({ name: "VCol", props: si(), setup(e, l) {
  let { slots: t } = l;
  const n = m(() => {
    const o = [];
    let r;
    for (r in Xn)
      Xn[r].forEach((s) => {
        const i = e[s], c = oi(r, s, i);
        c && o.push(c);
      });
    const a = o.some((s) => s.startsWith("v-col-"));
    return o.push({ "v-col": !a || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return ft(e.tag, { class: [n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), vn = ["start", "end", "center"], Yo = ["space-between", "space-around", "space-evenly"];
function fn(e, l) {
  return vl.reduce((t, n) => (t[e + $t(n)] = l(), t), {});
}
const ii = [...vn, "baseline", "stretch"], Xo = (e) => ii.includes(e), Jo = fn("align", () => ({ type: String, default: null, validator: Xo })), ui = [...vn, ...Yo], Zo = (e) => ui.includes(e), Qo = fn("justify", () => ({ type: String, default: null, validator: Zo })), ci = [...vn, ...Yo, "stretch"], er = (e) => ci.includes(e), tr = fn("alignContent", () => ({ type: String, default: null, validator: er })), Jn = { align: Object.keys(Jo), justify: Object.keys(Qo), alignContent: Object.keys(tr) }, di = { align: "align", justify: "justify", alignContent: "align-content" };
function pi(e, l, t) {
  let n = di[e];
  if (t != null)
    return l && (n += `-${l.replace(e, "")}`), n += `-${t}`, n.toLowerCase();
}
const vi = N({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Xo }, ...Jo, justify: { type: String, default: null, validator: Zo }, ...Qo, alignContent: { type: String, default: null, validator: er }, ...tr, ...se(), ...xe() }, "VRow"), lr = Y()({ name: "VRow", props: vi(), setup(e, l) {
  let { slots: t } = l;
  const n = m(() => {
    const o = [];
    let r;
    for (r in Jn)
      Jn[r].forEach((a) => {
        const s = e[a], i = pi(r, a, s);
        i && o.push(i);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return ft(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), fi = Ye({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (l, t) => de(l.$slots, "bottom") }), te = "v-drilldown-table";
function Zn(e, l, t = "") {
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
function mi(e, l, t = "") {
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
      return o != null && s && typeof s == "string" ? o[s] !== void 0 ? o[s] : (s = s.replace(/\[(\w+)\]/g, ".$1"), s = s.replace(/^\./, ""), Zn(o, s.split("."), a)) : a;
    }(e, l, t);
  if (Array.isArray(l))
    return Zn(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
const Qn = (e) => {
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
function nr(e) {
  const l = e.title, t = [l, e];
  return e.renderer ? e.renderer([...t]) : e.renderHeader ? e.renderHeader([...t]) : e.renderFooter ? e.renderFooter([...t]) : l || "";
}
function Al(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function kt(e, ...l) {
  if (!l.length)
    return e;
  const t = l.shift();
  if (Al(e) && Al(t))
    for (const n in t)
      Al(t[n]) ? (e[n] || Object.assign(e, { [n]: {} }), kt(e[n], t[n])) : Object.assign(e, { [n]: t[n] });
  return kt(e, ...l);
}
const ar = (e) => {
  const { align: l } = e;
  return { "d-flex align-center": !0, [`justify-${l}`]: l, "justify-start": !l };
}, or = (e) => {
  const { level: l } = e;
  return { "d-flex": !0, [`${te}--header-select-all-checkbox`]: !0, [`${te}--header-select-all-checkbox-${l}`]: !0 };
};
function rr(e) {
  return e === "transparent" || e === "none" || e === "inherit" || e === "currentColor" || e === "initial" || e === "unset";
}
function sr(e) {
  return e.includes("--v-theme");
}
const gi = (e, l) => {
  if (rr(e))
    return e;
  if (sr(e))
    return `rgb(var(${e}))`;
  const t = function(n, o) {
    const r = o.global.current.value.colors;
    return Object.entries(r).find(([a]) => a === n);
  }(e, l);
  return t ? `hsl(${cl(t[1])})` : `hsl(${cl(e)})`;
}, yi = (e) => {
  const { colors: l, level: t, prop: n = "default", theme: o, type: r } = e, a = { ...l[n] }, s = l.percentageDirection;
  if (a === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let i = ((c, v, p) => {
    let u = 100, f = c.percentageChange ?? 0;
    return isNaN(f) && (u = 100), f *= v, p !== "desc" && p !== "descending" || (u = 100 - f), p !== "asc" && p !== "ascending" || (u = 0 + f), u < 0 && (u = 0), u > 100 && (u = 100), isNaN(u) && (u = 100), u;
  })(l, t - 1, s);
  return r || Object.entries(a).forEach(([c, v]) => {
    let p = o.global.current.value.colors[v] ?? v;
    if (p || (p = "transparent"), rr(p))
      return void (a[c] = p);
    if (c === "text" && t === 0 && s === "asc" && (i = 100), sr(p))
      return void (a[c] = `rgb(var(${p}))`);
    const u = `/ ${i}%`, f = cl(p);
    if (f.includes("/"))
      return a[c] = `hsl(${f})`;
    a[c] = `hsl(${cl(p)} ${u})`;
  }), a;
};
function cl(e) {
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
const mn = (e) => {
  const { colors: l, level: t, prop: n = "default", themeColors: o, type: r = null } = e;
  if (typeof l != "object" || l === null)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should not be called.');
  const a = yi({ colors: l, level: t, prop: n, theme: o, type: r });
  return r ? a[r] : a;
}, hi = ["colspan"], bi = Ye({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const l = e, t = pl(), n = m(() => ((k) => {
    const { isLinearOnly: S, loaderHeight: B } = k;
    let $ = { height: 0, minHeight: 0 };
    return b(S) && ($ = { height: b(B), minHeight: b(B) }), $;
  })({ isLinearOnly: c, loaderHeight: i })), o = m(() => ((k) => {
    const { isLinearOnly: S, loaderHeight: B } = k;
    return b(S) ? { height: b(B), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: c, loaderHeight: i })), r = m(() => ((k) => {
    const { isLinearOnly: S } = k;
    return { [`${te}--loader-tr`]: !0, [`${te}--loader-tr-not-linear`]: !b(S), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: c })), a = m(() => ({ [`${te}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), s = m(() => l.loaderProps.linear), i = m(() => {
    var k;
    return function(S) {
      return xt({ str: S }) || "2px";
    }(((k = l.loaderProps.linear) == null ? void 0 : k.height) || "2px");
  }), c = m(() => {
    let k = !1;
    return l.loaderType !== null && l.loaderType !== !1 && (k = function(S) {
      let B = !1;
      return S === "linear" && (B = !0), Array.isArray(S) && (B = S.length === 1 && S[0] === "linear"), B;
    }(l.loaderType)), k;
  }), v = m(() => l.loaderProps.circular), p = m(() => l.loaderProps.skelton), u = m(() => l.loading), f = m(() => {
    var S;
    let k = ((S = l.loaderProps.text) == null ? void 0 : S.color) || "surface-variant";
    return k = gi(k, t), { color: k };
  }), y = m(() => l.loadingText || "Loading..."), C = (k) => {
    const S = l.loaderType;
    return Array.isArray(S) ? S.indexOf(k) : 1;
  }, g = (k) => {
    const S = l.loaderType;
    return k === l.loaderType || !!Array.isArray(S) && S.includes(k);
  };
  return (k, S) => {
    const B = ca("v-skeleton-loader");
    return q(), ie("tr", { class: re(b(r)), style: Fe(b(n)) }, [Le("td", { class: "px-0 ma-0", colspan: k.colspan, style: Fe(b(o)) }, [k.loading ? (q(), me(lr, { key: 0, class: re(b(a)), "no-gutters": "" }, { default: oe(() => [g("linear") ? (q(), me(ut, { key: 0, class: "pa-0 ma-0", order: C("linear") }, { default: oe(() => [d(ro, Se(Ie(b(s))), null, 16)]), _: 1 }, 8, ["order"])) : ge("", !0), g("circular") ? (q(), me(ut, { key: 1, class: "pa-0 my-2", order: C("circular") }, { default: oe(() => [d(no, Se(Ie(b(v))), null, 16)]), _: 1 }, 8, ["order"])) : ge("", !0), g("skelton") ? (q(), me(ut, { key: 2, class: "pa-0 ma-0", order: C("skelton") }, { default: oe(() => [d(B, X(b(p), { loading: b(u) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : ge("", !0), g("text") ? (q(), me(ut, { key: 3, class: "my-2", order: C("text"), style: Fe(b(f)) }, { default: oe(() => [qt(mr(b(y)), 1)]), _: 1 }, 8, ["order", "style"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0)], 12, hi)], 6);
  };
} }), gn = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, Si = gn(bi, [["__scopeId", "data-v-3f7f977f"]]), wi = ["colspan"], xi = ["colspan"], Ci = ["colspan", "innerHTML"], ki = ["colspan", "onClick"], Bi = ["innerHTML"], Pi = Ye({ __name: "HeadersSlot", props: { columnWidths: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, colors: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = H(), r = ve(Symbol.for("vuetify:icons")), a = H(!1), s = H(t.items), i = H(t.matchColumnWidths), c = H(t.columnWidths || []), v = H(t.sortAscIcon), p = m(() => t.tableModelValue), u = pl(), f = m(() => function() {
    const w = t.slotProps.columns;
    if (t.level <= 1 || !i.value)
      return w;
    if (c.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(w).forEach(([P]) => {
      Object.keys(w).length !== parseInt(P) + 1 && w[P].width === void 0 && (w[P].width = c.value[parseInt(P)]);
    }), w;
  }());
  Z(() => t.items, (w) => {
    s.value = w, o.value = (w == null ? void 0 : w.filter((P) => P.selectable)) ?? [], o.value = w == null ? void 0 : w.filter((P) => P.selectable !== !1);
  });
  const y = m(() => ((w) => {
    const { level: P } = w;
    return { [`${te}--header-row`]: !0, [`${te}--header-row-${P}`]: !0 };
  })({ level: t.level })), C = (w, P = "") => ((x) => {
    const { colors: D, column: h, level: F, slotName: _ = "" } = x;
    return { [`${te}--header-row-th`]: !0, [`${te}--header-row-th-${_}`]: _ !== "", [`${te}--header-row-th-${_}-${F}`]: _, [`${te}--header-row-th-${F}`]: !0, [`${te}--header-row-th-sortable`]: h.sortable, [`${te}--header-row-th-sortable-default-color`]: h.sortable && D === !1, [`${h.cellClass}`]: h.cellClass };
  })({ colors: t.colors, column: w, level: t.level, slotName: P }), g = (w, P = !1) => ((x) => {
    const { colors: D, column: h, dataTableExpand: F = !1, level: _, theme: V } = x, I = { minWidth: h.width ? xt({ str: h.width }) : "auto", width: h.width ? xt({ str: h.width }) : "auto" };
    if (F && !h.width && (I.width = h.width ? xt({ str: h.width }) : "56px", I.minWidth = h.width ? xt({ str: h.width }) : "56px"), D === !1 || D === null)
      return I;
    const T = mn({ colors: D, level: _, prop: "header", themeColors: V });
    return I.backgroundColor = T.bg, I.color = T.text, I;
  })({ colors: t.colors, column: w, dataTableExpand: P, level: t.level, theme: u }), k = m(() => {
    var w;
    return !t.slotProps.allSelected && ((w = p == null ? void 0 : p.value) == null ? void 0 : w.length) !== 0;
  });
  function S() {
    a.value = !a.value, t.slotProps.selectAll(a.value), l("click:selectAll", a.value);
  }
  Z(() => t.slotProps.allSelected, (w) => {
    a.value = w;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const B = m(() => or({ level: t.level })), $ = (w) => ((P) => {
    const { iconOptions: x, key: D, level: h, sortBy: F } = P;
    return { "fa-fw": (x == null ? void 0 : x.defaultSet) === "fa", "mx-1": !0, [`${te}--header-row-th-sortable-sort-icon`]: !0, [`${te}--header-row-th-sortable-sort-icon-${h}`]: !0, [`${te}--header-row-th-sortable-sort-icon-desc`]: Qn({ id: D, sortBy: F }) === "desc", [`${te}--header-row-th-sortable-sort-icon-asc`]: Qn({ id: D, sortBy: F }) === "asc" };
  })({ iconOptions: r, key: w, level: t.level, sortBy: t.sortBy }), A = m(() => (r == null ? void 0 : r.defaultSet) === "fa" ? (v.value = (t == null ? void 0 : t.sortAscIcon) ?? "fas fa-arrow-up", "small") : (v.value = (t == null ? void 0 : t.sortAscIcon) ?? "$sortAsc", "default"));
  function E(w) {
    return nr(w);
  }
  return (w, P) => (q(), ie(ae, null, [Le("tr", { class: re(b(y)) }, [(q(!0), ie(ae, null, Te(b(f), (x) => {
    return q(), ie(ae, { key: x }, [b(n)[`column.${x.key}`] ? (q(), ie("th", { key: 0, class: re(C(x, x.key)), colspan: x.colspan || 1, style: Fe(g(x, !0)) }, [de(w.$slots, `column.${x.key}`, { column: x }, void 0, !0)], 14, wi)) : x.key === "data-table-select" || x.key === "data-table-select" && w.showSelect ? (q(), ie("th", { key: 1, class: re(C(x, "header-data-table-select")), colspan: x.colspan || 1, style: Fe(g(x, !0)) }, [w.selectStrategy !== "single" ? (q(), me(cn, { key: 0, class: re(b(B)), density: w.density, focused: !1, indeterminate: b(k), "model-value": b(a), "onUpdate:modelValue": S }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, xi)) : x.key === "data-table-expand" ? (q(), ie("th", { key: 2, class: re(C(x, "data-table-expand")), colspan: x.colspan || 1, style: Fe(g(x, !0)), innerHTML: E(x) }, null, 14, Ci)) : (q(), ie("th", { key: 3, class: re(C(x)), colspan: x.colspan || 1, style: Fe(g(x)), onClick: (h) => function(F) {
      F.sortable && t.slotProps.toggleSort(F);
    }(x) }, [Le("div", { class: re((D = x.align, ar({ align: D }))) }, [Le("span", { innerHTML: E(x) }, null, 8, Bi), x.sortable && b(n)["header.sortIcon"] ? (q(), ie("span", { key: 0, class: re($(x.key)) }, [de(w.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : x.sortable ? (q(), me(he, { key: 1, class: re($(x.key)), icon: b(v), size: b(A) }, null, 8, ["class", "icon", "size"])) : ge("", !0)], 2)], 14, ki))], 64);
    var D;
  }), 128))], 2), w.loaderSettings.loaderType && !b(n).loading ? (q(), me(b(Si), { key: 0, colors: w.colors || null, colspan: w.loaderSettings.colspan, height: w.loaderSettings.height, level: w.level, "loader-props": w.loaderProps, "loader-settings": w.loaderSettings, "loader-type": w.loaderSettings.loaderType, loading: w.loaderSettings.loading || !1, "loading-text": w.loaderSettings.loadingText, size: w.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : ge("", !0)], 64));
} }), _i = gn(Pi, [["__scopeId", "data-v-2872a791"]]), Ai = ["colspan"], $i = ["colspan"], Fi = ["colspan"], Vi = ["colspan"], Ei = ["innerHTML"], Ii = Ye({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = ve(Symbol.for("vuetify:icons")), r = m(() => t.slotProps.columns), a = m(() => t.slotProps.index), s = m(() => t.slotProps.isExpanded), i = m(() => t.slotProps.item), c = m(() => t.slotProps.level), v = m(() => t.slotProps.toggleExpand), p = m(() => t.slotProps.toggleSelect), u = m(() => t.itemSelectable), f = m(() => ((S) => {
    const { expandOnClick: B, level: $, levels: A } = S;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": B && $ < A, [`${te}--body-row`]: !0, [`${te}--body-row-${$}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), y = (S) => ((B) => {
    const { column: $, elm: A, level: E } = B;
    return { [`${te}--${A}-row-td`]: !0, [`${te}--${A}-row-td-${E}`]: !0, [`${$.cellClass}`]: $.cellClass };
  })({ column: S, elm: "body", level: t.level });
  function C(S) {
    const { item: B, level: $, toggleExpand: A } = S;
    if (!(t.level >= t.levels)) {
      if (S.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", S.$event);
      }
      $ === t.level && A(B), l("update:expanded", S);
    }
  }
  const g = m(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "x-small" : "default");
  function k(S, B) {
    return function($, A) {
      if (!A.key)
        return "";
      const E = mi($, A.key);
      return A.renderItem ? A.renderItem(E, $, A) : E;
    }(S.raw, B);
  }
  return (S, B) => (q(), ie("tr", { class: re(b(f)), onClick: B[2] || (B[2] = ($) => C({ columns: b(r), index: b(a), isExpanded: b(s), item: b(i), level: b(c), toggleExpand: b(v), $event: $ })) }, [(q(!0), ie(ae, null, Te(b(r), ($) => (q(), ie(ae, { key: $ }, [S.$slots[`item.${$.key}`] ? (q(), ie("td", { key: 0, class: re(y($)), colspan: $.colspan || 1 }, [de(S.$slots, `item.${$.key}`, { columns: b(r), index: b(a), item: b(i) }, void 0, !0)], 10, Ai)) : $.key === "data-table-select" || $.key === "data-table-select" && t.showSelect ? (q(), ie("td", { key: 1, class: re(y($)), colspan: $.colspan || 1 }, [b(n)["item.data-table-select"] ? de(S.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : ge("", !0), d(cn, { class: "d-flex v-simple-checkbox", density: S.density, disabled: b(i).raw.selectable === !1 && b(u) === "selectable", "model-value": S.slotProps.isSelected([b(i)]), onClick: B[0] || (B[0] = $l((A) => function(E) {
    const { item: w, toggleSelect: P } = E;
    P(w), l("click:row:checkbox", w);
  }({ columns: b(r), index: b(a), item: b(i), level: b(c), toggleSelect: b(p) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, $i)) : $.key === "data-table-expand" || $.key === "data-table-expand" && S.showExpand ? (q(), ie("td", { key: 2, class: re(y($)), colspan: $.colspan || 1 }, [b(c) < S.levels ? (q(), ie("div", { key: 0, class: re(["v-drilldown-table--expand-icon", b(s)(b(i)) ? "rotate-180" : ""]), onClick: B[1] || (B[1] = (A) => C({ columns: b(r), index: b(a), isExpanded: b(s), item: b(i), level: b(c), toggleExpand: b(v) })) }, [S.$slots["item.data-table-expand"] ? de(S.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (q(), me(he, { key: 1, icon: "$expand", size: b(g) }, null, 8, ["size"]))], 2)) : ge("", !0)], 10, Fi)) : (q(), ie("td", { key: 3, class: re(y($)), colspan: $.colspan || 1 }, [Le("span", { innerHTML: k(b(i), $) }, null, 8, Ei)], 10, Vi))], 64))), 128))], 2));
} }), Oi = gn(Ii, [["__scopeId", "data-v-f25e6c95"]]), Di = ["colspan"], Ti = ["colspan"], Li = ["colspan", "innerHTML"], Mi = ["colspan", "innerHTML"], Ni = ["colspan"], ji = ["innerHTML"], Ri = Ye({ __name: "TfootSlot", props: { footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = H(), r = pl(), a = H(!1), s = H(t.items), i = m(() => t.tableModelValue), c = m(() => t.footers.length ? t.footers : t.slotProps.columns);
  Z(() => t.items, (S) => {
    s.value = S, o.value = (S == null ? void 0 : S.filter((B) => B.selectable)) ?? [], o.value = S == null ? void 0 : S.filter((B) => B.selectable !== !1);
  });
  const v = m(() => ((S) => {
    const { level: B } = S;
    return { [`${te}--tfoot`]: !0, [`${te}--tfoot-${B}`]: !0 };
  })({ level: t.level })), p = m(() => ((S) => {
    const { level: B } = S;
    return { [`${te}--tfoot-row`]: !0, [`${te}--tfoot-row-${B}`]: !0 };
  })({ level: t.level })), u = (S, B = "") => (($) => {
    const { column: A, level: E, slotName: w = "" } = $;
    return { [`${te}--tfoot-row-td`]: !0, [`${te}--tfoot-row-td-${w}`]: w !== "", [`${te}--tfoot-row-td-${w}-${E}`]: w, [`${te}--tfoot-row-td-${E}`]: !0, [`${A.cellClass}`]: A.cellClass };
  })({ column: S, level: t.level, slotName: B }), f = m(() => ((S) => {
    const { colors: B, elm: $, level: A, theme: E } = S;
    if (B === !1 || B === null)
      return {};
    const w = mn({ colors: B, level: A, prop: $, themeColors: E });
    return { backgroundColor: w.bg, color: w.text };
  })({ colors: t.colors, elm: "footer", level: t.level, theme: r })), y = m(() => {
    var S;
    return !t.slotProps.allSelected && ((S = i == null ? void 0 : i.value) == null ? void 0 : S.length) !== 0;
  });
  function C() {
    a.value = !a.value, t.slotProps.selectAll(a.value), l("click:selectAll", a.value);
  }
  Z(() => t.slotProps.allSelected, (S) => {
    a.value = S;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const g = m(() => or({ level: t.level }));
  function k(S) {
    return nr(S);
  }
  return (S, B) => {
    var $;
    return ($ = b(c)) != null && $.length ? (q(), ie("tfoot", { key: 0, class: re(b(v)) }, [Le("tr", { class: re(b(p)) }, [(q(!0), ie(ae, null, Te(b(c), (A) => {
      return q(), ie(ae, { key: A }, [b(n)[`tfoot.${A.key}`] ? (q(), ie("th", { key: 0, class: re(u(A, A.key)), colspan: A.colspan || 1, style: Fe(b(f)) }, [de(S.$slots, `tfoot.${A.key}`, { column: A })], 14, Di)) : A.key === "data-table-select" ? (q(), ie("th", { key: 1, class: re(u(A, "tfoot-data-table-select")), colspan: A.colspan || 1, style: Fe(b(f)) }, [S.selectStrategy !== "single" ? (q(), me(cn, { key: 0, class: re(b(g)), density: S.density, focused: !1, indeterminate: b(y), "model-value": b(a), "onUpdate:modelValue": C }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, Ti)) : A.key === "data-table-expand" ? (q(), ie("th", { key: 2, class: re(u(A, "tfoot-data-table-expand")), colspan: A.colspan || 1, style: Fe(b(f)), innerHTML: k(A) }, null, 14, Li)) : A.renderFooterCell ? (q(), ie("th", { key: 3, class: re(u(A)), colspan: A.colspan || 1, style: Fe(b(f)), innerHTML: k(A) }, null, 14, Mi)) : (q(), ie("th", { key: 4, class: re(u(A)), colspan: A.colspan || 1, style: Fe(b(f)) }, [Le("div", { class: re((E = A.align, ar({ align: E }))) }, [Le("span", { innerHTML: k(A) }, null, 8, ji)], 2)], 14, Ni))], 64);
      var E;
    }), 128))], 2)], 2)) : ge("", !0);
  };
} });
function ea(e) {
  return typeof e == "function" ? e() : b(e);
}
const ta = () => {
}, Wi = (e) => e();
function zi(e, l = {}) {
  let t, n, o = ta;
  const r = (a) => {
    clearTimeout(a), o(), o = ta;
  };
  return (a) => {
    const s = ea(e), i = ea(l.maxWait);
    return t && r(t), s <= 0 || i !== void 0 && i <= 0 ? (n && (r(n), n = null), Promise.resolve(a())) : new Promise((c, v) => {
      o = l.rejectOnCancel ? v : c, i && !n && (n = setTimeout(() => {
        t && r(t), n = null, c(a());
      }, i)), t = setTimeout(() => {
        n && r(n), n = null, c(a());
      }, s);
    });
  };
}
var la = Object.getOwnPropertySymbols, Gi = Object.prototype.hasOwnProperty, Hi = Object.prototype.propertyIsEnumerable, Ki = (e, l) => {
  var t = {};
  for (var n in e)
    Gi.call(e, n) && l.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && la)
    for (var n of la(e))
      l.indexOf(n) < 0 && Hi.call(e, n) && (t[n] = e[n]);
  return t;
};
function Ui(e, l, t = {}) {
  const n = t, { eventFilter: o = Wi } = n, r = Ki(n, ["eventFilter"]);
  return Z(e, (a = o, s = l, function(...i) {
    return new Promise((c, v) => {
      Promise.resolve(a(() => s.apply(this, i), { fn: s, thisArg: this, args: i })).then(c).catch(v);
    });
  }), r);
  var a, s;
}
var qi = Object.defineProperty, Yi = Object.defineProperties, Xi = Object.getOwnPropertyDescriptors, Gt = Object.getOwnPropertySymbols, na = Object.prototype.hasOwnProperty, aa = Object.prototype.propertyIsEnumerable, oa = (e, l, t) => l in e ? qi(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
function zl(e, l, t = {}) {
  const n = t, { debounce: o = 0, maxWait: r } = n, a = ((c, v) => {
    var p = {};
    for (var u in c)
      na.call(c, u) && v.indexOf(u) < 0 && (p[u] = c[u]);
    if (c != null && Gt)
      for (var u of Gt(c))
        v.indexOf(u) < 0 && aa.call(c, u) && (p[u] = c[u]);
    return p;
  })(n, ["debounce", "maxWait"]);
  return Ui(e, l, (s = ((c, v) => {
    for (var p in v || (v = {}))
      na.call(v, p) && oa(c, p, v[p]);
    if (Gt)
      for (var p of Gt(v))
        aa.call(v, p) && oa(c, p, v[p]);
    return c;
  })({}, a), i = { eventFilter: zi(o, { maxWait: r }) }, Yi(s, Xi(i))));
  var s, i;
}
const wt = /* @__PURE__ */ new Map(), Ji = Ye({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchEvents: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = H(""), r = H(!0), a = m(() => t.items), s = m(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: a, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: b(o), selectAll: i, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: c }));
  function i(u) {
    t.slotProps.selectAll(u), l("click:selectAll", u);
  }
  function c() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  gt(() => {
    const u = document.querySelector(`[data-id="vdt-top-id-${t.level}"]`);
    (u == null ? void 0 : u.children.length) === 0 && (r.value = !1);
  }), zl(o, () => {
    l("update:search", o.value);
  }, { debounce: 750, maxWait: 1e3 });
  const v = m(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...t.searchProps })), p = m(() => {
    const u = t.searchContainerCols;
    return { [`${te}--search-field`]: !0, [`v-col-${u.xs}`]: !0, [`v-col-sm-${u.sm}`]: !0, [`v-col-md-${u.md}`]: !0, [`v-col-lg-${u.lg}`]: !0, [`v-col-xl-${u.xl}`]: !0, [`v-col-xxl-${u.xxl}`]: !0 };
  });
  return (u, f) => b(n).top ? de(u.$slots, "top", Se(X({ key: 0 }, b(s)))) : (u.showSearch || b(n)["top.left"] || b(n)["top.right"]) && b(r) ? (q(), me(ut, { key: 1, lg: "12" }, { default: oe(() => [d(lr, { "data-id": `vdt-top-id-${t.level}` }, { default: oe(() => [b(n)["top.left"] ? de(u.$slots, "top.left", Se(X({ key: 0 }, b(s)))) : u.showSearch ? (q(), me(ut, { key: 1, class: re(["d-flex align-center justify-end", b(p)]) }, { default: oe(() => [u.showSearch ? (q(), me(Wl, X({ key: 0 }, b(v), { modelValue: b(o), "onUpdate:modelValue": f[0] || (f[0] = (y) => mt(o) ? o.value = y : null), class: "mt-0 pt-0" }, yr(u.searchEvents)), null, 16, ["modelValue"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0), b(n)["top.right"] ? de(u.$slots, "top.right", Se(X({ key: 2 }, b(s)))) : ge("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : ge("", !0);
} }), Zi = Symbol("data"), Qi = ["colspan"], ra = Ye({ __name: "VDrilldownTable", props: hr({ colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footers: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchEvents: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { colors: () => ({ body: { base: "--v-theme-surface", bg: "--v-theme-surface", text: "--v-theme-on-surface" }, default: { base: "primary", bg: "primary", border: "primary", text: "on-primary" }, footer: { bg: "--v-theme-surface", text: "--v-theme-on-surface" }, header: { bg: "primary", text: "on-primary" }, percentageChange: 25, percentageDirection: "desc" }), columnWidths: () => [], density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footers: () => [], height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, multiSort: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 750, searchEvents: () => ({}), searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: l }) {
  const t = e, n = Ft(), o = br(), r = ue(null);
  gt(() => {
    t.level === 1 && a.level !== 1 || a.server || g();
  }), Kl(() => {
    r.value = Object.assign({}, t.server ? ai : li);
  });
  let a = At(Object.assign({}, t));
  const s = { ...t, ...a }, i = H(o["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), c = H(""), v = pl(), p = m(() => a.sortBy), u = m(() => !!a.loading || a.hideNoData);
  (function(h, F, _) {
    const V = Z(h, (...I) => (Ee(() => V()), F(...I)), _);
  })(t, () => {
    t.level === 1 && a.level !== 1 || g(), a.itemsPerPage = t.itemsPerPage;
  }, { immediate: !1 }), Z(() => t.items, () => {
    t.loading || g();
  }, { deep: !0 }), Z(() => t.loading, () => {
    if (t.loading)
      return a.loading = t.loading, !1;
    g();
  });
  const f = (h) => {
    const F = a.loaderType;
    return !(h && (F === "skelton" || Array.isArray(F) && F.length === 1 && F[0] === "skelton" || !a.showDrilldownWhenLoading));
  }, y = m(() => ((h) => {
    const { elevation: F, isDrilldown: _, isHover: V, isServerSide: I, level: T, separator: M } = h;
    return { [`${te}--child`]: _, [`${te}--hover`]: V, [`${te}--level-${T}`]: !0, [`${te}--server`]: I, [`${te}--separator-${M}`]: M, [`${te}`]: !0, [`elevation-${F}`]: parseInt(F) > 0 };
  })({ elevation: a.elevation, isDrilldown: t.isDrilldown, isHover: a.hover, isServerSide: !1, level: a.level, separator: a.separator })), C = m(() => ((h) => {
    const { colors: F, level: _, theme: V } = h;
    let I = {};
    typeof F == "object" && F !== null && (I = mn({ colors: F, level: _, prop: "default", themeColors: V }));
    const T = { borderBottom: "none" };
    return I.border && (T.borderBottom = `1px solid ${I.border}`), T;
  })({ colors: a.colors, level: a.level, theme: v }));
  function g() {
    var h, F;
    t.drilldown ? a = ((_) => {
      const { drilldown: V, rawItem: I, level: T, levels: M, loadedDrilldown: O } = _;
      let j = O;
      j = kt(O, V);
      const z = (O.items || [{}]).find((K) => {
        const L = K[O.drilldownKey];
        let R = {};
        return I && (R = I[O.drilldownKey]), L === R;
      });
      return j = kt(O, z[O.itemChildrenKey]), M === T && (j.showExpand = !1), j;
    })({ drilldown: t.drilldown, level: t.level, levels: t.levels, loadedDrilldown: a, matchColumnWidths: t.matchColumnWidths, rawItem: (h = t.item) == null ? void 0 : h.raw }) : (a = kt(a, t), t.matchColumnWidths && ((F = a == null ? void 0 : a.columnWidths) == null ? void 0 : F.length) === 0 && (a.columnWidths = ((_) => {
      const { tableId: V } = _, I = [], T = b(V), M = document.querySelectorAll(`[data-vdt-id="${T}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(M).length > 0)
        for (let O = 0; O < M.length; O += 1) {
          const j = M[O];
          I.push(j.offsetWidth);
        }
      return I;
    })({ tableId: i })));
  }
  function k(h) {
    let F = { ...s, ...a, ...h };
    t.server && (F = { ...a, ...s, ...h }), ((_) => {
      const { data: V, drilldownData: I, emit: T } = _;
      V.isExpanded(V.item) && T("update:drilldown", I), T("update:expanded", V.item);
    })({ data: h, drilldownData: F, emit: l });
  }
  function S(h) {
    return { items: h.items, itemsPerPage: h.itemsPerPage, page: h.page, search: c.value, server: h.server, sortBy: h.sortBy };
  }
  const B = function(h) {
    const F = gr();
    function _(T) {
      var M;
      const O = wt.get(h) || /* @__PURE__ */ new Set();
      O.add(T), wt.set(h, O);
      const j = () => V(T);
      return (M = F == null ? void 0 : F.cleanups) == null || M.push(j), j;
    }
    function V(T) {
      const M = wt.get(h);
      M && (M.delete(T), M.size || I());
    }
    function I() {
      wt.delete(h);
    }
    return { on: _, once: function(T) {
      return _(function M(...O) {
        V(M), T(...O);
      });
    }, off: V, emit: function(T, M) {
      var O;
      (O = wt.get(h)) == null || O.forEach((j) => j(T, M));
    }, reset: I };
  }(Zi), $ = B.on(function(h) {
    t.level === 1 && h.drilldown.server && l("update:options", { ...h });
  });
  function A(h) {
    a.itemsPerPage = h;
    const F = S(a), _ = { drilldown: { ...t, ...F, itemsPerPage: h }, itemsPerPage: h, name: "update:itemsPerPage" };
    B.emit(_), l("update:itemsPerPage", h);
  }
  function E(h) {
    a.page = h;
    const F = S(a), _ = { drilldown: { ...t, ...F, page: h }, name: "update:page", page: h };
    B.emit(_), l("update:page", h);
  }
  Sr(() => {
    $();
  });
  const w = { debounce: a.searchDebounce, maxWait: a.searchMaxWait };
  function P() {
    n["top.left"] || (a.search = c.value), n["top.left"] && (c.value = t.search || "");
    const h = S(a), F = { drilldown: { ...t, ...h, search: c.value }, search: c.value };
    B.emit(F), l("update:search", F);
  }
  function x(h) {
    a.sortBy = h;
    const F = S(a), _ = { drilldown: { ...t, ...F, sortBy: h }, name: "update:sortBy", sortBy: h };
    B.emit(_), l("update:sortBy", h);
  }
  function D() {
  }
  return zl(() => t.search, () => {
    P();
  }, w), zl(c, () => {
    P();
  }, w), (h, F) => {
    const _ = ca("VDrilldownTable", !0);
    return b(r) ? (q(), me(ua(b(r)), X({ key: 0 }, h.$attrs, { modelValue: b(a).modelValue, "onUpdate:modelValue": [F[5] || (F[5] = (V) => b(a).modelValue = V), D], class: b(y), "data-vdt-id": b(i), density: b(a).density, "expand-on-click": b(a).expandOnClick, expanded: b(a).expanded, headers: b(a).headers, height: b(a).height, "hide-no-data": b(u), hover: b(a).hover, "item-selectable": b(a).itemSelectable, "item-value": b(a).itemValue, items: b(a).items, "items-length": b(a).itemsLength, "items-per-page": b(a).itemsPerPage, "items-per-page-options": b(a).itemsPerPageOptions, loading: (!b(a).loaderType || b(n).loading) && b(a).loading, "multi-sort": b(a).multiSort, "must-sort": b(a).mustSort, "no-data-text": b(a).noDataText, page: b(a).page, "return-object": b(a).returnObject, search: b(c), "select-strategy": b(a).selectStrategy, "show-expand": b(a).showExpand, "sort-by": b(p), style: b(C), "onUpdate:itemsPerPage": A, "onUpdate:page": E, "onUpdate:sortBy": x }), Qe({ top: oe((V) => [(q(), me(b(Ji), { key: h.level, items: b(a).items, level: b(a).level, loading: b(a).loading, "search-container-cols": b(a).searchContainerCols, "search-events": b(a).searchEvents, "search-props": b(a).searchProps, "show-search": b(a).showSearch ?? !1, "slot-props": V, "onUpdate:search": F[0] || (F[0] = (I) => c.value = I) }, Qe({ _: 2 }, [Te(b(n), (I, T) => ({ name: T, fn: oe((M) => [de(h.$slots, T, Se(Ie({ ...M })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-events", "search-props", "show-search", "slot-props"]))]), headers: oe((V) => [(q(), me(b(_i), { key: h.level, colors: b(a).colors, "column-widths": b(a).columnWidths, density: b(a).density, items: b(a).items, level: h.level, "loader-props": b(a).loaderProps, "loader-settings": { colspan: V.columns.length, loaderType: b(a).loaderType, loading: b(a).loading, loadingText: h.loadingText }, "match-column-widths": b(a).matchColumnWidths, "select-strategy": b(a).selectStrategy, "show-select": b(a).showSelect, "slot-props": { ...V }, "sort-asc-icon": b(a).sortAscIcon, "sort-by": b(a).sortBy, "table-model-value": b(a).modelValue }, Qe({ _: 2 }, [Te(b(n), (I, T) => ({ name: T, fn: oe((M) => [de(h.$slots, T, Se(Ie({ ...M })))]) }))]), 1032, ["colors", "column-widths", "density", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: oe((V) => [(q(), me(b(Oi), { key: h.level, density: b(a).density, "expand-on-click": b(a).expandOnClick, "item-selectable": b(a).itemSelectable, items: b(a).items, level: b(a).level, levels: b(a).levels, "show-expand": b(a).showExpand, "show-select": b(a).showSelect, "slot-props": { level: h.level, ...V }, "onClick:row": F[1] || (F[1] = (I) => {
      l("click:row", I);
    }), "onClick:row:checkbox": F[2] || (F[2] = (I) => {
      l("click:row:checkbox", I);
    }), "onUpdate:expanded": F[3] || (F[3] = (I) => k(I)) }, Qe({ _: 2 }, [Te(b(n), (I, T) => ({ name: T, fn: oe((M) => [de(h.$slots, T, Se(Ie({ ...M })))]) }))]), 1032, ["density", "expand-on-click", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": oe(({ columns: V, item: I }) => {
      var T, M, O, j, z, K, L, R, W;
      return [Le("tr", { class: re(f((T = I.raw[h.itemChildrenKey]) == null ? void 0 : T.loading) ? "" : "d-none") }, [Le("td", { class: "px-0 ma-0", colspan: V.length, style: { "vertical-align": "top" } }, [(q(), me(_, { key: I.raw, colors: h.colors, "column-widths": b(a).columnWidths, density: b(a).density, drilldown: b(a), headers: (M = I.raw[h.itemChildrenKey]) == null ? void 0 : M.headers, "is-drilldown": !0, item: I, "items-length": (O = I.raw[h.itemChildrenKey]) == null ? void 0 : O.itemsLength, "items-per-page": (j = I.raw[h.itemChildrenKey]) == null ? void 0 : j.itemsPerPage, level: h.level + 1, levels: b(a).levels, loaderProps: (z = I.raw[h.itemChildrenKey]) == null ? void 0 : z.loaderProps, loaderType: (K = I.raw[h.itemChildrenKey]) == null ? void 0 : K.loaderType, loading: (L = I.raw[h.itemChildrenKey]) == null ? void 0 : L.loading, loadingText: h.loadingText, "match-column-widths": b(a).matchColumnWidths, "multi-sort": (R = I.raw[h.itemChildrenKey]) == null ? void 0 : R.multiSort, "no-data-text": b(a).noDataText, server: (W = I.raw[h.itemChildrenKey]) == null ? void 0 : W.server, "sort-by": b(a).sortBy, "table-type": b(r), "onUpdate:drilldown": F[4] || (F[4] = (U) => k(U)), "onUpdate:modelValue": D }, Qe({ default: oe(() => [(q(!0), ie(ae, null, Te(Object.keys(b(n)), (U) => de(h.$slots, U)), 256))]), _: 2 }, [Te(b(n), (U, ne) => ({ name: ne, fn: oe((ee) => [de(h.$slots, ne, Se(Ie({ ...ee })))]) }))]), 1032, ["colors", "column-widths", "density", "drilldown", "headers", "item", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "sort-by", "table-type"]))], 8, Qi)], 2)];
    }), "footer.prepend": oe(() => [b(n)["footer.prepend"] ? de(h.$slots, "footer.prepend", { key: 0 }) : ge("", !0)]), _: 2 }, [b(n).loader ? { name: "loader", fn: oe(() => [de(h.$slots, "loader")]), key: "0" } : void 0, b(n).loading ? { name: "loading", fn: oe(() => [de(h.$slots, "loading")]), key: "1" } : void 0, b(n).thead ? { name: "thead", fn: oe((V) => [de(h.$slots, "thead", Se(Ie({ ...V })))]), key: "2" } : void 0, b(n).body ? { name: "body", fn: oe((V) => [de(h.$slots, "body", Se(Ie({ ...V })))]), key: "3" } : void 0, b(n).tbody ? { name: "tbody", fn: oe((V) => [de(h.$slots, "tbody", Se(Ie({ ...V })))]), key: "4" } : void 0, b(n)["no-data"] ? { name: "no-data", fn: oe(() => [de(h.$slots, "no-data")]), key: "5" } : void 0, b(n).tfoot || h.showFooterRow ? { name: "tfoot", fn: oe((V) => [b(n).tfoot ? de(h.$slots, "tfoot", Se(X({ key: 0 }, { ...V }))) : (q(), me(b(Ri), { key: h.level, colors: b(a).colors || null, density: b(a).density, footers: b(a).footers || [], items: b(a).items, level: b(a).level, "select-strategy": b(a).selectStrategy, "show-select": b(a).showSelect, "slot-props": { ...V }, "table-model-value": b(a).modelValue }, Qe({ _: 2 }, [Te(b(n), (I, T) => ({ name: T, fn: oe((M) => [de(h.$slots, T, Se(Ie({ ...M })))]) }))]), 1032, ["colors", "density", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "6" } : void 0, b(n).bottom ? { name: "bottom", fn: oe((V) => [(q(), me(b(fi), { key: h.level, "slot-props": V }, Qe({ _: 2 }, [Te(b(n), (I, T) => ({ name: T, fn: oe((M) => [de(h.$slots, T, Se(Ie({ ...M })))]) }))]), 1032, ["slot-props"]))]), key: "7" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : ge("", !0);
  };
} });
ra.install = (e) => {
  e.component("VDrilldownTable", ra);
};
export {
  ra as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset);overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-data-table{width:100%}.v-data-table__table{width:100%;border-collapse:separate;border-spacing:0}.v-data-table__tr--focus{border:1px dotted black}.v-data-table__tr--clickable{cursor:pointer}.v-data-table .v-table__wrapper>table>thead>tr>td,.v-data-table .v-table__wrapper>table>thead>tr th,.v-data-table .v-table__wrapper>table tbody>tr>td,.v-data-table .v-table__wrapper>table tbody>tr th{background:rgb(var(--v-theme-surface))}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end{text-align:end}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end .v-data-table-header__content{flex-direction:row-reverse}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center{text-align:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center .v-data-table-header__content{justify-content:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--no-padding{padding:0 8px}.v-data-table .v-table__wrapper>table>thead>tr>th,.v-data-table .v-table__wrapper>table tbody>tr>th{align-items:center}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--sortable:hover{cursor:pointer;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon{opacity:0}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon{opacity:.5}.v-data-table-column--fixed{position:sticky;z-index:2;left:0}.v-data-table-column--last-fixed{border-right:1px solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-data-table-group-header-row td{background:lightgrey}.v-data-table-group-header-row td>span{padding-left:5px}.v-data-table--loading .v-data-table__td{opacity:.3}.v-data-table-group-header-row__column{padding-left:calc(var(--v-data-table-group-header-row-depth) * 16px)!important}.v-data-table-header__content{display:flex;align-items:center}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;font-size:.875rem;padding:4px;border-radius:50%;background:rgba(var(--v-border-color),var(--v-border-opacity));min-width:20px;min-height:20px;width:20px;height:20px}.v-data-table-progress>th{border:none!important;height:auto!important;padding:0!important}.v-data-table-rows-loading,.v-data-table-rows-no-data{text-align:center}.v-data-table-footer{display:flex;align-items:center;flex-wrap:wrap;padding:0 8px;justify-content:flex-end}.v-data-table-footer__items-per-page{padding-inline-end:24px;display:flex;align-items:center;justify-content:space-between}.v-data-table-footer__items-per-page>span{padding-inline-end:24px}.v-data-table-footer__info{display:flex;padding-inline-end:24px}.v-data-table-footer__pagination{display:flex;align-items:center}.v-data-table-footer__page{padding:0 8px}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn{margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-field--single-line .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select--chips .v-select__selection,.v-select--selection-slot .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select--chips .v-select__selection:first-child,.v-select--selection-slot .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{grid-row-start:1;grid-column-start:1;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:grid;grid-template-rows:minmax(100%,1fr);grid-template-columns:1fr;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-grid;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-responsive__sizer,.v-responsive__content{position:relative;grid-row-start:1;grid-column-start:1}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 54px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 52px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 50px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 46px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 44px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 42px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 38px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 36px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 34px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 46px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 44px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 42px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 38px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 36px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 34px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 30px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 28px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 26px;--v-field-padding-bottom: 0px}.v-field--variant-outlined{--v-input-chips-margin-bottom: 2px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:calc(var(--v-field-input-min-height) + var(--v-input-chips-margin-bottom) + 2px);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%;--v-field-input-min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom))}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-table{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-table .v-table-divider{border-right:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>thead>tr>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity));color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tfoot>tr>td,.v-table .v-table__wrapper>table>tfoot>tr>th{border-top:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{background:rgb(var(--v-theme-surface));box-shadow:inset 0 -1px 0 rgba(var(--v-border-color),var(--v-border-opacity));z-index:1}.v-table.v-table--fixed-footer>tfoot>tr>th,.v-table.v-table--fixed-footer>tfoot>tr>td{background:rgb(var(--v-theme-surface));box-shadow:inset 0 1px 0 rgba(var(--v-border-color),var(--v-border-opacity))}.v-table{--v-table-header-height: 56px;border-radius:inherit;line-height:1.5;max-width:100%}.v-table>.v-table__wrapper>table{width:100%;border-spacing:0}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>th{padding:0 16px;transition:height cubic-bezier(.4,0,.2,1)}.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>th{font-weight:500;user-select:none;text-align:start}.v-table--density-default>.v-table__wrapper>table>tbody>tr>th,.v-table--density-default>.v-table__wrapper>table>thead>tr>th,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) + 0px)}.v-table--density-default>.v-table__wrapper>table>tbody>tr>td,.v-table--density-default>.v-table__wrapper>table>thead>tr>td,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) + 0px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 8px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 8px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>th,.v-table--density-compact>.v-table__wrapper>table>thead>tr>th,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 16px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>td,.v-table--density-compact>.v-table__wrapper>table>thead>tr>td,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 16px)}.v-table__wrapper{border-radius:inherit;overflow:auto}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-table--fixed-height>.v-table__wrapper{overflow-y:auto}.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border-bottom:0px!important;position:sticky;top:0}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th{border-top:0px!important;position:sticky;bottom:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1.v-locale--is-ltr,.v-locale--is-ltr .offset-1{margin-left:8.3333333333%}.offset-1.v-locale--is-rtl,.v-locale--is-rtl .offset-1{margin-right:8.3333333333%}.offset-2.v-locale--is-ltr,.v-locale--is-ltr .offset-2{margin-left:16.6666666667%}.offset-2.v-locale--is-rtl,.v-locale--is-rtl .offset-2{margin-right:16.6666666667%}.offset-3.v-locale--is-ltr,.v-locale--is-ltr .offset-3{margin-left:25%}.offset-3.v-locale--is-rtl,.v-locale--is-rtl .offset-3{margin-right:25%}.offset-4.v-locale--is-ltr,.v-locale--is-ltr .offset-4{margin-left:33.3333333333%}.offset-4.v-locale--is-rtl,.v-locale--is-rtl .offset-4{margin-right:33.3333333333%}.offset-5.v-locale--is-ltr,.v-locale--is-ltr .offset-5{margin-left:41.6666666667%}.offset-5.v-locale--is-rtl,.v-locale--is-rtl .offset-5{margin-right:41.6666666667%}.offset-6.v-locale--is-ltr,.v-locale--is-ltr .offset-6{margin-left:50%}.offset-6.v-locale--is-rtl,.v-locale--is-rtl .offset-6{margin-right:50%}.offset-7.v-locale--is-ltr,.v-locale--is-ltr .offset-7{margin-left:58.3333333333%}.offset-7.v-locale--is-rtl,.v-locale--is-rtl .offset-7{margin-right:58.3333333333%}.offset-8.v-locale--is-ltr,.v-locale--is-ltr .offset-8{margin-left:66.6666666667%}.offset-8.v-locale--is-rtl,.v-locale--is-rtl .offset-8{margin-right:66.6666666667%}.offset-9.v-locale--is-ltr,.v-locale--is-ltr .offset-9{margin-left:75%}.offset-9.v-locale--is-rtl,.v-locale--is-rtl .offset-9{margin-right:75%}.offset-10.v-locale--is-ltr,.v-locale--is-ltr .offset-10{margin-left:83.3333333333%}.offset-10.v-locale--is-rtl,.v-locale--is-rtl .offset-10{margin-right:83.3333333333%}.offset-11.v-locale--is-ltr,.v-locale--is-ltr .offset-11{margin-left:91.6666666667%}.offset-11.v-locale--is-rtl,.v-locale--is-rtl .offset-11{margin-right:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-0{margin-left:0}.offset-sm-0.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-0{margin-right:0}.offset-sm-1.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-1{margin-left:8.3333333333%}.offset-sm-1.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-1{margin-right:8.3333333333%}.offset-sm-2.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-2{margin-left:16.6666666667%}.offset-sm-2.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-2{margin-right:16.6666666667%}.offset-sm-3.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-3{margin-left:25%}.offset-sm-3.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-3{margin-right:25%}.offset-sm-4.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-4{margin-left:33.3333333333%}.offset-sm-4.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-4{margin-right:33.3333333333%}.offset-sm-5.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-5{margin-left:41.6666666667%}.offset-sm-5.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-5{margin-right:41.6666666667%}.offset-sm-6.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-6{margin-left:50%}.offset-sm-6.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-6{margin-right:50%}.offset-sm-7.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-7{margin-left:58.3333333333%}.offset-sm-7.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-7{margin-right:58.3333333333%}.offset-sm-8.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-8{margin-left:66.6666666667%}.offset-sm-8.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-8{margin-right:66.6666666667%}.offset-sm-9.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-9{margin-left:75%}.offset-sm-9.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-9{margin-right:75%}.offset-sm-10.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-10{margin-left:83.3333333333%}.offset-sm-10.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-10{margin-right:83.3333333333%}.offset-sm-11.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-11{margin-left:91.6666666667%}.offset-sm-11.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0.v-locale--is-ltr,.v-locale--is-ltr .offset-md-0{margin-left:0}.offset-md-0.v-locale--is-rtl,.v-locale--is-rtl .offset-md-0{margin-right:0}.offset-md-1.v-locale--is-ltr,.v-locale--is-ltr .offset-md-1{margin-left:8.3333333333%}.offset-md-1.v-locale--is-rtl,.v-locale--is-rtl .offset-md-1{margin-right:8.3333333333%}.offset-md-2.v-locale--is-ltr,.v-locale--is-ltr .offset-md-2{margin-left:16.6666666667%}.offset-md-2.v-locale--is-rtl,.v-locale--is-rtl .offset-md-2{margin-right:16.6666666667%}.offset-md-3.v-locale--is-ltr,.v-locale--is-ltr .offset-md-3{margin-left:25%}.offset-md-3.v-locale--is-rtl,.v-locale--is-rtl .offset-md-3{margin-right:25%}.offset-md-4.v-locale--is-ltr,.v-locale--is-ltr .offset-md-4{margin-left:33.3333333333%}.offset-md-4.v-locale--is-rtl,.v-locale--is-rtl .offset-md-4{margin-right:33.3333333333%}.offset-md-5.v-locale--is-ltr,.v-locale--is-ltr .offset-md-5{margin-left:41.6666666667%}.offset-md-5.v-locale--is-rtl,.v-locale--is-rtl .offset-md-5{margin-right:41.6666666667%}.offset-md-6.v-locale--is-ltr,.v-locale--is-ltr .offset-md-6{margin-left:50%}.offset-md-6.v-locale--is-rtl,.v-locale--is-rtl .offset-md-6{margin-right:50%}.offset-md-7.v-locale--is-ltr,.v-locale--is-ltr .offset-md-7{margin-left:58.3333333333%}.offset-md-7.v-locale--is-rtl,.v-locale--is-rtl .offset-md-7{margin-right:58.3333333333%}.offset-md-8.v-locale--is-ltr,.v-locale--is-ltr .offset-md-8{margin-left:66.6666666667%}.offset-md-8.v-locale--is-rtl,.v-locale--is-rtl .offset-md-8{margin-right:66.6666666667%}.offset-md-9.v-locale--is-ltr,.v-locale--is-ltr .offset-md-9{margin-left:75%}.offset-md-9.v-locale--is-rtl,.v-locale--is-rtl .offset-md-9{margin-right:75%}.offset-md-10.v-locale--is-ltr,.v-locale--is-ltr .offset-md-10{margin-left:83.3333333333%}.offset-md-10.v-locale--is-rtl,.v-locale--is-rtl .offset-md-10{margin-right:83.3333333333%}.offset-md-11.v-locale--is-ltr,.v-locale--is-ltr .offset-md-11{margin-left:91.6666666667%}.offset-md-11.v-locale--is-rtl,.v-locale--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-0{margin-left:0}.offset-lg-0.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-0{margin-right:0}.offset-lg-1.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-1{margin-left:8.3333333333%}.offset-lg-1.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-1{margin-right:8.3333333333%}.offset-lg-2.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-2{margin-left:16.6666666667%}.offset-lg-2.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-2{margin-right:16.6666666667%}.offset-lg-3.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-3{margin-left:25%}.offset-lg-3.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-3{margin-right:25%}.offset-lg-4.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-4{margin-left:33.3333333333%}.offset-lg-4.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-4{margin-right:33.3333333333%}.offset-lg-5.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-5{margin-left:41.6666666667%}.offset-lg-5.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-5{margin-right:41.6666666667%}.offset-lg-6.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-6{margin-left:50%}.offset-lg-6.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-6{margin-right:50%}.offset-lg-7.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-7{margin-left:58.3333333333%}.offset-lg-7.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-7{margin-right:58.3333333333%}.offset-lg-8.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-8{margin-left:66.6666666667%}.offset-lg-8.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-8{margin-right:66.6666666667%}.offset-lg-9.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-9{margin-left:75%}.offset-lg-9.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-9{margin-right:75%}.offset-lg-10.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-10{margin-left:83.3333333333%}.offset-lg-10.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-10{margin-right:83.3333333333%}.offset-lg-11.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-11{margin-left:91.6666666667%}.offset-lg-11.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-0{margin-left:0}.offset-xl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-0{margin-right:0}.offset-xl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-1{margin-left:8.3333333333%}.offset-xl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-1{margin-right:8.3333333333%}.offset-xl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-2{margin-left:16.6666666667%}.offset-xl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-2{margin-right:16.6666666667%}.offset-xl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-3{margin-left:25%}.offset-xl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-3{margin-right:25%}.offset-xl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-4{margin-left:33.3333333333%}.offset-xl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-4{margin-right:33.3333333333%}.offset-xl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-5{margin-left:41.6666666667%}.offset-xl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-5{margin-right:41.6666666667%}.offset-xl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-6{margin-left:50%}.offset-xl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-6{margin-right:50%}.offset-xl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-7{margin-left:58.3333333333%}.offset-xl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-7{margin-right:58.3333333333%}.offset-xl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-8{margin-left:66.6666666667%}.offset-xl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-8{margin-right:66.6666666667%}.offset-xl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-9{margin-left:75%}.offset-xl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-9{margin-right:75%}.offset-xl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-10{margin-left:83.3333333333%}.offset-xl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-10{margin-right:83.3333333333%}.offset-xl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-11{margin-left:91.6666666667%}.offset-xl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-11{margin-right:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-0{margin-left:0}.offset-xxl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-0{margin-right:0}.offset-xxl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-1{margin-right:8.3333333333%}.offset-xxl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-2{margin-right:16.6666666667%}.offset-xxl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-3{margin-left:25%}.offset-xxl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-3{margin-right:25%}.offset-xxl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-4{margin-right:33.3333333333%}.offset-xxl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-5{margin-right:41.6666666667%}.offset-xxl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-6{margin-left:50%}.offset-xxl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-6{margin-right:50%}.offset-xxl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-7{margin-right:58.3333333333%}.offset-xxl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-8{margin-right:66.6666666667%}.offset-xxl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-9{margin-left:75%}.offset-xxl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-9{margin-right:75%}.offset-xxl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-10{margin-right:83.3333333333%}.offset-xxl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-11{margin-left:91.6666666667%}.offset-xxl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-11{margin-right:91.6666666667%}}.v-drilldown-table--loader-tr[data-v-3f7f977f]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-3f7f977f]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-3f7f977f]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-3f7f977f]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-2872a791]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-2872a791]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-2872a791]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2872a791],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2872a791]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2872a791]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2872a791]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-2872a791]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2872a791],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2872a791],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-2872a791]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-2872a791]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-f25e6c95]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgba(var(--v-border-color), var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-top:0!important;border-bottom:var(--vdt-border)}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
