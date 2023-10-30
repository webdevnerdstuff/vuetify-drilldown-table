import { Fragment as ae, reactive as Lt, computed as y, watchEffect as je, toRefs as Ba, capitalize as Mt, warn as wl, ref as q, unref as h, provide as ge, inject as ve, shallowRef as ue, defineComponent as Ue, camelize as Pa, h as yt, getCurrentInstance as Ir, TransitionGroup as Tr, Transition as tt, createVNode as c, mergeProps as Q, watch as Z, onScopeDispose as Be, effectScope as tn, nextTick as Ee, isRef as ht, onMounted as nt, toRaw as ke, resolveDynamicComponent as _a, toRef as K, readonly as ln, Teleport as Or, withDirectives as De, vShow as bt, resolveDirective as at, onBeforeUnmount as ot, Text as Dr, onBeforeMount as nn, cloneVNode as Lr, createTextVNode as nl, withModifiers as Nl, toDisplayString as Aa, renderSlot as de, resolveComponent as Fa, openBlock as Y, createElementBlock as ce, normalizeClass as ie, normalizeStyle as Fe, createElementVNode as Ne, createBlock as me, withCtx as se, normalizeProps as Se, guardReactiveProps as Ie, createCommentVNode as ye, useSlots as Nt, renderList as Me, toHandlers as Mr, getCurrentScope as Nr, mergeDefaults as Rr, useAttrs as jr, onUnmounted as Wr, createSlots as Je } from "vue";
import { useTheme as xl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-13
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
const Te = typeof window < "u", an = Te && "IntersectionObserver" in window;
function $a(e, l, t) {
  const n = l.length - 1;
  if (n < 0)
    return e === void 0 ? t : e;
  for (let a = 0; a < n; a++) {
    if (e == null)
      return t;
    e = e[l[a]];
  }
  return e == null || e[l[n]] === void 0 ? t : e[l[n]];
}
function rt(e, l) {
  if (e === l)
    return !0;
  if (e instanceof Date && l instanceof Date && e.getTime() !== l.getTime() || e !== Object(e) || l !== Object(l))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(l).length && t.every((n) => rt(e[n], l[n]));
}
function Vt(e, l, t) {
  return e != null && l && typeof l == "string" ? e[l] !== void 0 ? e[l] : $a(e, (l = (l = l.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function Pe(e, l, t) {
  if (l === !0)
    return e === void 0 ? t : e;
  if (l == null || typeof l == "boolean")
    return t;
  if (e !== Object(e)) {
    if (typeof l != "function")
      return t;
    const a = l(e, t);
    return a === void 0 ? t : a;
  }
  if (typeof l == "string")
    return Vt(e, l, t);
  if (Array.isArray(l))
    return $a(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
function Rl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (t, n) => l + n);
}
function X(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${l}` : void 0;
}
function jl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Wl(e) {
  return e && "$el" in e ? e.$el : e;
}
const _n = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Fl(e, l) {
  return l.every((t) => e.hasOwnProperty(t));
}
function mt(e, l, t) {
  const n = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    l.some((o) => o instanceof RegExp ? o.test(r) : o === r) && !(t != null && t.some((o) => o === r)) ? n[r] = e[r] : a[r] = e[r];
  return [n, a];
}
function Rt(e, l) {
  const t = { ...e };
  return l.forEach((n) => delete t[n]), t;
}
const Va = /^on[^a-z]/, Hl = (e) => Va.test(e), Hr = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function on(e) {
  const [l, t] = mt(e, [Va]), n = Rt(l, Hr), [a, r] = mt(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, l), Object.assign(r, n), [a, r];
}
function Ve(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ze(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(l, Math.min(t, e));
}
function An(e, l) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, l - e.length));
}
function ct() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const a in e)
    n[a] = e[a];
  for (const a in l) {
    const r = e[a], o = l[a];
    jl(r) && jl(o) ? n[a] = ct(r, o, t) : Array.isArray(r) && Array.isArray(o) && t ? n[a] = t(r, o) : n[a] = o;
  }
  return n;
}
function Ea(e) {
  return e.map((l) => l.type === ae ? Ea(l.children) : l).flat();
}
function Qe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Qe.cache.has(e))
    return Qe.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Qe.cache.set(e, l), l;
}
function el(e, l) {
  if (!l || typeof l != "object")
    return [];
  if (Array.isArray(l))
    return l.map((t) => el(e, t)).flat(1);
  if (Array.isArray(l.children))
    return l.children.map((t) => el(e, t)).flat(1);
  if (l.component) {
    if (Object.getOwnPropertySymbols(l.component.provides).includes(e))
      return [l.component];
    if (l.component.subTree)
      return el(e, l.component.subTree).flat(1);
  }
  return [];
}
function rn(e) {
  const l = Lt({}), t = y(e);
  return je(() => {
    for (const n in t.value)
      l[n] = t.value[n];
  }, { flush: "sync" }), Ba(l);
}
function al(e, l) {
  return e.includes(l);
}
function Fn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
Qe.cache = /* @__PURE__ */ new Map();
const Re = () => [Function, Array];
function $n(e, l) {
  return !!(e[l = "on" + Mt(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function zl(e) {
  let l = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((n) => `${n}${l ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Ia(e, l, t) {
  let n, a = e.indexOf(document.activeElement);
  const r = l === "next" ? 1 : -1;
  do
    a += r, n = e[a];
  while ((!n || n.offsetParent == null || !((t == null ? void 0 : t(n)) ?? 1)) && a < e.length && a >= 0);
  return n;
}
function ol(e, l) {
  var n, a, r, o;
  const t = zl(e);
  if (l)
    if (l === "first")
      (n = t[0]) == null || n.focus();
    else if (l === "last")
      (a = t.at(-1)) == null || a.focus();
    else if (typeof l == "number")
      (r = t[l]) == null || r.focus();
    else {
      const s = Ia(t, l);
      s ? s.focus() : ol(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((o = t[0]) == null || o.focus());
}
function Yt(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function rl(e, l) {
  if (!(Te && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${l})`)))
    return null;
  try {
    return !!e && e.matches(l);
  } catch {
    return null;
  }
}
const Ta = ["top", "bottom"], zr = ["start", "end", "left", "right"];
function Gl(e, l) {
  let [t, n] = e.split(" ");
  return n || (n = al(Ta, t) ? "start" : al(zr, t) ? "top" : "center"), { side: Vn(t, l), align: Vn(n, l) };
}
function Vn(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function $l(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Vl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function En(e) {
  return { side: e.align, align: e.side };
}
function In(e) {
  return al(Ta, e.side) ? "y" : "x";
}
class ft {
  constructor(l) {
    let { x: t, y: n, width: a, height: r } = l;
    this.x = t, this.y = n, this.width = a, this.height = r;
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
function Tn(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function sn(e) {
  const l = e.getBoundingClientRect(), t = getComputedStyle(e), n = t.transform;
  if (n) {
    let a, r, o, s, i;
    if (n.startsWith("matrix3d("))
      a = n.slice(9, -1).split(/, /), r = +a[0], o = +a[5], s = +a[12], i = +a[13];
    else {
      if (!n.startsWith("matrix("))
        return new ft(l);
      a = n.slice(7, -1).split(/, /), r = +a[0], o = +a[3], s = +a[4], i = +a[5];
    }
    const u = t.transformOrigin, v = l.x - s - (1 - r) * parseFloat(u), f = l.y - i - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), d = r ? l.width / r : e.offsetWidth + 1, p = o ? l.height / o : e.offsetHeight + 1;
    return new ft({ x: v, y: f, width: d, height: p });
  }
  return new ft(l);
}
function dt(e, l, t) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let n;
  try {
    n = e.animate(l, t);
  } catch {
    return { finished: Promise.resolve() };
  }
  return n.finished === void 0 && (n.finished = new Promise((a) => {
    n.onfinish = () => {
      a(n);
    };
  })), n;
}
const Xt = /* @__PURE__ */ new WeakMap(), ut = 2.4, On = 0.2126729, Dn = 0.7151522, Ln = 0.072175, Gr = 0.55, Kr = 0.58, qr = 0.57, Ur = 0.62, Jt = 0.03, Mn = 1.45, Yr = 5e-4, Xr = 1.25, Jr = 1.25, Nn = 0.078, Rn = 12.82051282051282, Zt = 0.06, jn = 1e-3;
function Wn(e, l) {
  const t = (e.r / 255) ** ut, n = (e.g / 255) ** ut, a = (e.b / 255) ** ut, r = (l.r / 255) ** ut, o = (l.g / 255) ** ut, s = (l.b / 255) ** ut;
  let i, u = t * On + n * Dn + a * Ln, v = r * On + o * Dn + s * Ln;
  if (u <= Jt && (u += (Jt - u) ** Mn), v <= Jt && (v += (Jt - v) ** Mn), Math.abs(v - u) < Yr)
    return 0;
  if (v > u) {
    const f = (v ** Gr - u ** Kr) * Xr;
    i = f < jn ? 0 : f < Nn ? f - f * Rn * Zt : f - Zt;
  } else {
    const f = (v ** Ur - u ** qr) * Jr;
    i = f > -jn ? 0 : f > -Nn ? f - f * Rn * Zt : f + Zt;
  }
  return 100 * i;
}
function Ft(e) {
  wl(`Vuetify: ${e}`);
}
function Hn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const zn = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Zr = { rgb: (e, l, t, n) => ({ r: e, g: l, b: t, a: n }), rgba: (e, l, t, n) => ({ r: e, g: l, b: t, a: n }), hsl: (e, l, t, n) => Gn({ h: e, s: l, l: t, a: n }), hsla: (e, l, t, n) => Gn({ h: e, s: l, l: t, a: n }), hsv: (e, l, t, n) => Et({ h: e, s: l, v: t, a: n }), hsva: (e, l, t, n) => Et({ h: e, s: l, v: t, a: n }) };
function Bt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Ft(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && zn.test(e)) {
    const { groups: l } = e.match(zn), { fn: t, values: n } = l, a = n.split(/,\s*/).map((r) => r.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(r) / 100 : parseFloat(r));
    return Zr[t](...a);
  }
  if (typeof e == "string") {
    let l = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(l.length) ? l = l.split("").map((n) => n + n).join("") : [6, 8].includes(l.length) || Ft(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(l, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Ft(`'${e}' is not a valid hex(a) color`), function(n) {
      n = function(i) {
        return i.startsWith("#") && (i = i.slice(1)), i = i.replace(/([^0-9a-f])/gi, "F"), (i.length === 3 || i.length === 4) && (i = i.split("").map((u) => u + u).join("")), i.length !== 6 && (i = An(An(i, 6), 8, "F")), i;
      }(n);
      let [a, r, o, s] = function(i) {
        let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const v = [];
        let f = 0;
        for (; f < i.length; )
          v.push(i.substr(f, u)), f += u;
        return v;
      }(n, 2).map((i) => parseInt(i, 16));
      return s = s === void 0 ? s : s / 255, { r: a, g: r, b: o, a: s };
    }(l);
  }
  if (typeof e == "object") {
    if (Fl(e, ["r", "g", "b"]))
      return e;
    if (Fl(e, ["h", "s", "l"]))
      return Et(Oa(e));
    if (Fl(e, ["h", "s", "v"]))
      return Et(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Et(e) {
  const { h: l, s: t, v: n, a } = e, r = (s) => {
    const i = (s + l / 60) % 6;
    return n - n * t * Math.max(Math.min(i, 4 - i, 1), 0);
  }, o = [r(5), r(3), r(1)].map((s) => Math.round(255 * s));
  return { r: o[0], g: o[1], b: o[2], a };
}
function Gn(e) {
  return Et(Oa(e));
}
function Oa(e) {
  const { h: l, s: t, l: n, a } = e, r = n + t * Math.min(n, 1 - n);
  return { h: l, s: r === 0 ? 0 : 2 - 2 * n / r, v: r, a };
}
function N(e, l) {
  return (t) => Object.keys(e).reduce((n, a) => {
    const r = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return n[a] = t && a in t ? { ...r, default: t[a] } : r, l && !n[a].source && (n[a].source = l), n;
  }, {});
}
const re = N({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), sl = Symbol.for("vuetify:defaults");
function un() {
  const e = ve(sl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function st(e, l) {
  const t = un(), n = q(e), a = y(() => {
    if (h(l == null ? void 0 : l.disabled))
      return t.value;
    const r = h(l == null ? void 0 : l.scoped), o = h(l == null ? void 0 : l.reset), s = h(l == null ? void 0 : l.root);
    if (n.value == null && !(r || o || s))
      return t.value;
    let i = ct(n.value, { prev: t.value });
    if (r)
      return i;
    if (o || s) {
      const u = Number(o || 1 / 0);
      for (let v = 0; v <= u && i && "prev" in i; v++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = ct(ct(i, { prev: i }), i[s])), i;
    }
    return i.prev ? ct(i.prev, i) : i;
  });
  return ge(sl, a), a;
}
function Qr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : un();
  const n = we("useDefaults");
  if (l = l ?? n.type.name ?? n.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const a = y(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? l];
  }), r = new Proxy(e, { get(s, i) {
    var v, f, d, p;
    const u = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(v = a.value) == null ? void 0 : v[i], u].filter((k) => k != null) : typeof i != "string" || function(k, m) {
      var g, b;
      return ((g = k.props) == null ? void 0 : g[m]) !== void 0 || ((b = k.props) == null ? void 0 : b[Qe(m)]) !== void 0;
    }(n.vnode, i) ? u : ((f = a.value) == null ? void 0 : f[i]) ?? ((p = (d = t.value) == null ? void 0 : d.global) == null ? void 0 : p[i]) ?? u;
  } }), o = ue();
  return je(() => {
    if (a.value) {
      const s = Object.entries(a.value).filter((i) => {
        let [u] = i;
        return u.startsWith(u[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  }), { props: r, provideSubDefaults: function() {
    const s = function(i) {
      let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we("injectSelf");
      const { provides: v } = u;
      if (v && i in v)
        return v[i];
    }(sl, n);
    ge(sl, y(() => o.value ? ct((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  } };
}
function It(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ft("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = N(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(t) {
      return mt(t, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, n) {
      const a = un();
      if (!a.value)
        return e._setup(t, n);
      const { props: r, provideSubDefaults: o } = Qr(t, t._as ?? e.name, a), s = e._setup(r, n);
      return o(), s;
    };
  }
  return e;
}
function U() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? It : Ue)(l);
}
function Da(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return U()({ name: t ?? Mt(Pa(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...re() }, setup(n, a) {
    let { slots: r } = a;
    return () => {
      var o;
      return yt(n.tag, { class: [e, n.class], style: n.style }, (o = r.default) == null ? void 0 : o.call(r));
    };
  } });
}
function La(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const il = "cubic-bezier(0.4, 0, 0.2, 1)";
function we(e, l) {
  const t = Ir();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return t;
}
function ze() {
  const e = we(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Qe((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Ma = 0, tl = /* @__PURE__ */ new WeakMap();
function We() {
  const e = we("getUid");
  if (tl.has(e))
    return tl.get(e);
  {
    const l = Ma++;
    return tl.set(e, l), l;
  }
}
function Na(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (l ? es(e) : cn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function ul(e, l) {
  const t = [];
  if (l && e && !l.contains(e))
    return t;
  for (; e && (cn(e) && t.push(e), e !== l); )
    e = e.parentElement;
  return t;
}
function cn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function es(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(l.overflowY);
}
function le(e) {
  we("useRender").render = e;
}
We.reset = () => {
  Ma = 0, tl = /* @__PURE__ */ new WeakMap();
};
const ts = N({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Ae(e, l, t) {
  return U()({ name: e, props: ts({ mode: t, origin: l }), setup(n, a) {
    let { slots: r } = a;
    const o = { onBeforeEnter(s) {
      n.origin && (s.style.transformOrigin = n.origin);
    }, onLeave(s) {
      if (n.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: u, offsetWidth: v, offsetHeight: f } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${i}px`, s.style.left = `${u}px`, s.style.width = `${v}px`, s.style.height = `${f}px`;
      }
      n.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (n.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: i, top: u, left: v, width: f, height: d } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = i || "", s.style.top = u || "", s.style.left = v || "", s.style.width = f || "", s.style.height = d || "";
      }
    } };
    return () => {
      const s = n.group ? Tr : tt;
      return yt(s, { name: n.disabled ? "" : e, css: !n.disabled, ...n.group ? void 0 : { mode: n.mode }, ...n.disabled ? {} : o }, r.default);
    };
  } });
}
function Ra(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return U()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(n, a) {
    let { slots: r } = a;
    return () => yt(tt, { name: n.disabled ? "" : e, css: !n.disabled, ...n.disabled ? {} : l }, r.default);
  } });
}
function ja() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = Pa(`offset-${l}`);
  return { onBeforeEnter(r) {
    r._parent = r.parentNode, r._initialStyle = { transition: r.style.transition, overflow: r.style.overflow, [l]: r.style[l] };
  }, onEnter(r) {
    const o = r._initialStyle;
    r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
    const s = `${r[t]}px`;
    r.style[l] = "0", r.offsetHeight, r.style.transition = o.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
      r.style[l] = s;
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(r) {
    r._initialStyle = { transition: "", overflow: r.style.overflow, [l]: r.style[l] }, r.style.overflow = "hidden", r.style[l] = `${r[t]}px`, r.offsetHeight, requestAnimationFrame(() => r.style[l] = "0");
  }, onAfterLeave: n, onLeaveCancelled: n };
  function n(r) {
    e && r._parent && r._parent.classList.remove(e), a(r);
  }
  function a(r) {
    const o = r._initialStyle[l];
    r.style.overflow = r._initialStyle.overflow, o != null && (r.style[l] = o), delete r._initialStyle;
  }
}
const ls = N({ target: Object }, "v-dialog-transition"), Wa = U()({ name: "VDialogTransition", props: ls(), setup(e, l) {
  let { slots: t } = l;
  const n = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, r) {
    var d;
    await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => requestAnimationFrame(p)), a.style.visibility = "";
    const { x: o, y: s, sx: i, sy: u, speed: v } = qn(e.target, a), f = dt(a, [{ transform: `translate(${o}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }, {}], { duration: 225 * v, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (d = Kn(a)) == null || d.forEach((p) => {
      dt(p, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * v, easing: il });
    }), f.finished.then(() => r());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, r) {
    var f;
    await new Promise((d) => requestAnimationFrame(d));
    const { x: o, y: s, sx: i, sy: u, speed: v } = qn(e.target, a);
    dt(a, [{}, { transform: `translate(${o}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }], { duration: 125 * v, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => r()), (f = Kn(a)) == null || f.forEach((d) => {
      dt(d, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * v, easing: il });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? c(tt, Q({ name: "dialog-transition" }, n, { css: !1 }), t) : c(tt, { name: "dialog-transition" }, t);
} });
function Kn(e) {
  var t;
  const l = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return l && [...l];
}
function qn(e, l) {
  const t = e.getBoundingClientRect(), n = sn(l), [a, r] = getComputedStyle(l).transformOrigin.split(" ").map((b) => parseFloat(b)), [o, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  o === "left" || s === "left" ? i -= t.width / 2 : o !== "right" && s !== "right" || (i += t.width / 2);
  let u = t.top + t.height / 2;
  o === "top" || s === "top" ? u -= t.height / 2 : o !== "bottom" && s !== "bottom" || (u += t.height / 2);
  const v = t.width / n.width, f = t.height / n.height, d = Math.max(1, v, f), p = v / d || 0, k = f / d || 0, m = n.width * n.height / (window.innerWidth * window.innerHeight), g = m > 0.12 ? Math.min(1.5, 10 * (m - 0.12) + 1) : 1;
  return { x: i - (a + n.left), y: u - (r + n.top), sx: p, sy: k, speed: g };
}
Ae("fab-transition", "center center", "out-in"), Ae("dialog-bottom-transition"), Ae("dialog-top-transition"), Ae("fade-transition"), Ae("scale-transition"), Ae("scroll-x-transition"), Ae("scroll-x-reverse-transition"), Ae("scroll-y-transition"), Ae("scroll-y-reverse-transition"), Ae("slide-x-transition"), Ae("slide-x-reverse-transition");
const Ha = Ae("slide-y-transition");
Ae("slide-y-reverse-transition");
const ns = Ra("expand-transition", ja()), za = Ra("expand-x-transition", ja("", !0)), as = N({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Oe = U(!1)({ name: "VDefaultsProvider", props: as(), setup(e, l) {
  let { slots: t } = l;
  const { defaults: n, disabled: a, reset: r, root: o, scoped: s } = Ba(e);
  return st(n, { reset: r, root: o, scoped: s, disabled: a }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} });
function et(e, l) {
  let t;
  function n() {
    t = tn(), t.run(() => l.length ? l(() => {
      t == null || t.stop(), n();
    }) : l());
  }
  Z(e, (a) => {
    a && !t ? n() : a || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Be(() => {
    t == null || t.stop();
  });
}
function El(e, l) {
  return { x: e.x + l.x, y: e.y + l.y };
}
function Un(e, l) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: n } = e;
    return El({ x: n === "left" ? 0 : n === "center" ? l.width / 2 : n === "right" ? l.width : n, y: t === "top" ? 0 : t === "bottom" ? l.height : t }, l);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: n } = e;
    return El({ x: t === "left" ? 0 : t === "right" ? l.width : t, y: n === "top" ? 0 : n === "center" ? l.height / 2 : n === "bottom" ? l.height : n }, l);
  }
  return El({ x: l.width / 2, y: l.height / 2 }, l);
}
const Ga = { static: function() {
}, connected: function(e, l, t) {
  (function(p) {
    for (; p; ) {
      if (window.getComputedStyle(p).position === "fixed")
        return !0;
      p = p.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: n, preferredOrigin: a } = rn(() => {
    const p = Gl(l.location, e.isRtl.value), k = l.origin === "overlap" ? p : l.origin === "auto" ? $l(p) : Gl(l.origin, e.isRtl.value);
    return p.side === k.side && p.align === Vl(k).align ? { preferredAnchor: En(p), preferredOrigin: En(k) } : { preferredAnchor: p, preferredOrigin: k };
  }), [r, o, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => y(() => {
    const k = parseFloat(l[p]);
    return isNaN(k) ? 1 / 0 : k;
  })), u = y(() => {
    if (Array.isArray(l.offset))
      return l.offset;
    if (typeof l.offset == "string") {
      const p = l.offset.split(" ").map(parseFloat);
      return p.length < 2 && p.push(0), p;
    }
    return typeof l.offset == "number" ? [l.offset, 0] : [0, 0];
  });
  let v = !1;
  const f = new ResizeObserver(() => {
    v && d();
  });
  function d() {
    if (v = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => v = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const p = e.activatorEl.value.getBoundingClientRect(), k = function(x, I) {
      I ? x.style.removeProperty("left") : x.style.removeProperty("right");
      const S = sn(x);
      return I ? S.x += parseFloat(x.style.right || 0) : S.x -= parseFloat(x.style.left || 0), S.y -= parseFloat(x.style.top || 0), S;
    }(e.contentEl.value, e.isRtl.value), m = ul(e.contentEl.value);
    m.length || (m.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (k.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), k.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const g = m.reduce((x, I) => {
      const S = I.getBoundingClientRect(), F = new ft({ x: I === document.documentElement ? 0 : S.x, y: I === document.documentElement ? 0 : S.y, width: I.clientWidth, height: I.clientHeight });
      return x ? new ft({ x: Math.max(x.left, F.left), y: Math.max(x.top, F.top), width: Math.min(x.right, F.right) - Math.max(x.left, F.left), height: Math.min(x.bottom, F.bottom) - Math.max(x.top, F.top) }) : F;
    }, void 0);
    g.x += 12, g.y += 12, g.width -= 24, g.height -= 24;
    let b = { anchor: n.value, origin: a.value };
    function P(x) {
      const I = new ft(k), S = Un(x.anchor, p), F = Un(x.origin, I);
      let { x: O, y: T } = (A = F, { x: (D = S).x - A.x, y: D.y - A.y });
      var D, A;
      switch (x.anchor.side) {
        case "top":
          T -= u.value[0];
          break;
        case "bottom":
          T += u.value[0];
          break;
        case "left":
          O -= u.value[0];
          break;
        case "right":
          O += u.value[0];
      }
      switch (x.anchor.align) {
        case "top":
          T -= u.value[1];
          break;
        case "bottom":
          T += u.value[1];
          break;
        case "left":
          O -= u.value[1];
          break;
        case "right":
          O += u.value[1];
      }
      return I.x += O, I.y += T, I.width = Math.min(I.width, s.value), I.height = Math.min(I.height, i.value), { overflows: Tn(I, g), x: O, y: T };
    }
    let B = 0, $ = 0;
    const w = { x: 0, y: 0 }, V = { x: !1, y: !1 };
    let C = -1;
    for (; ; ) {
      if (C++ > 10) {
        wl("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x, y: I, overflows: S } = P(b);
      B += x, $ += I, k.x += x, k.y += I;
      {
        const F = In(b.anchor), O = S.x.before || S.x.after, T = S.y.before || S.y.after;
        let D = !1;
        if (["x", "y"].forEach((A) => {
          if (A === "x" && O && !V.x || A === "y" && T && !V.y) {
            const E = { anchor: { ...b.anchor }, origin: { ...b.origin } }, M = A === "x" ? F === "y" ? Vl : $l : F === "y" ? $l : Vl;
            E.anchor = M(E.anchor), E.origin = M(E.origin);
            const { overflows: H } = P(E);
            (H[A].before <= S[A].before && H[A].after <= S[A].after || H[A].before + H[A].after < (S[A].before + S[A].after) / 2) && (b = E, D = V[A] = !0);
          }
        }), D)
          continue;
      }
      S.x.before && (B += S.x.before, k.x += S.x.before), S.x.after && (B -= S.x.after, k.x -= S.x.after), S.y.before && ($ += S.y.before, k.y += S.y.before), S.y.after && ($ -= S.y.after, k.y -= S.y.after);
      {
        const F = Tn(k, g);
        w.x = g.width - F.x.before - F.x.after, w.y = g.height - F.y.before - F.y.after, B += F.x.before, k.x += F.x.before, $ += F.y.before, k.y += F.y.before;
      }
      break;
    }
    const _ = In(b.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${b.anchor.side} ${b.anchor.align}`, transformOrigin: `${b.origin.side} ${b.origin.align}`, top: X(Il($)), left: e.isRtl.value ? void 0 : X(Il(B)), right: e.isRtl.value ? X(Il(-B)) : void 0, minWidth: X(_ === "y" ? Math.min(r.value, p.width) : r.value), maxWidth: X(Yn(Ze(w.x, r.value === 1 / 0 ? 0 : r.value, s.value))), maxHeight: X(Yn(Ze(w.y, o.value === 1 / 0 ? 0 : o.value, i.value))) }), { available: w, contentBox: k };
  }
  return Z([e.activatorEl, e.contentEl], (p, k) => {
    let [m, g] = p, [b, P] = k;
    b && f.unobserve(b), m && f.observe(m), P && f.unobserve(P), g && f.observe(g);
  }, { immediate: !0 }), Be(() => {
    f.disconnect();
  }), Z(() => [n.value, a.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => d()), Ee(() => {
    const p = d();
    if (!p)
      return;
    const { available: k, contentBox: m } = p;
    m.height > k.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), { updateLocation: d };
} }, os = N({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ga }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Il(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Yn(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Kl = !0;
const cl = [];
let Xn = -1;
function ql() {
  cancelAnimationFrame(Xn), Xn = requestAnimationFrame(() => {
    const e = cl.shift();
    e && e(), cl.length ? ql() : Kl = !0;
  });
}
const ll = { none: null, close: function(e) {
  Jn(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, n = [.../* @__PURE__ */ new Set([...ul(e.activatorEl.value, l.contained ? t : void 0), ...ul(e.contentEl.value, l.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, r = (o = t || document.documentElement, cn(o) && o);
  var o;
  r && e.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((i, u) => {
    i.style.setProperty("--v-body-scroll-x", X(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", X(-i.scrollTop)), i !== document.documentElement && i.style.setProperty("--v-scrollbar-offset", X(a)), i.classList.add("v-overlay-scroll-blocked");
  }), Be(() => {
    n.forEach((i, u) => {
      const v = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), f = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -v, i.scrollTop = -f;
    }), r && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, t) {
  let n = !1, a = -1, r = -1;
  function o(s) {
    var i;
    i = () => {
      var f, d;
      const u = performance.now();
      (d = (f = e.updateLocation).value) == null || d.call(f, s), n = (performance.now() - u) / (1e3 / 60) > 2;
    }, !Kl || cl.length ? (cl.push(i), ql()) : (Kl = !1, i(), ql());
  }
  r = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      Jn(e.activatorEl.value ?? e.contentEl.value, (s) => {
        n ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            o(s);
          });
        })) : o(s);
      });
    });
  }), Be(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(r), cancelAnimationFrame(a);
  });
} }, rs = N({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in ll } }, "VOverlay-scroll-strategies");
function Jn(e, l) {
  const t = [document, ...ul(e)];
  t.forEach((n) => {
    n.addEventListener("scroll", l, { passive: !0 });
  }), Be(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", l);
    });
  });
}
const Ul = Symbol.for("vuetify:v-menu"), ss = N({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), is = N({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...ss() }, "VOverlay-activator");
function us(e, l) {
  let { isActive: t, isTop: n } = l;
  const a = q();
  let r = !1, o = !1, s = !0;
  const i = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), u = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: v, runCloseDelay: f } = function(C, _) {
    const x = {}, I = (S) => () => {
      if (!Te)
        return Promise.resolve(!0);
      const F = S === "openDelay";
      return x.closeDelay && window.clearTimeout(x.closeDelay), delete x.closeDelay, x.openDelay && window.clearTimeout(x.openDelay), delete x.openDelay, new Promise((O) => {
        const T = parseInt(C[S] ?? 0, 10);
        x[S] = window.setTimeout(() => {
          _ == null || _(F), O(F);
        }, T);
      });
    };
    return { runCloseDelay: I("closeDelay"), runOpenDelay: I("openDelay") };
  }(e, (C) => {
    C !== (e.openOnHover && r || i.value && o) || e.openOnHover && t.value && !n.value || (t.value !== C && (s = !0), t.value = C);
  }), d = (C) => {
    C.stopPropagation(), a.value = C.currentTarget || C.target, t.value = !t.value;
  }, p = (C) => {
    var _;
    (_ = C.sourceCapabilities) != null && _.firesTouchEvents || (r = !0, a.value = C.currentTarget || C.target, v());
  }, k = (C) => {
    r = !1, f();
  }, m = (C) => {
    rl(C.target, ":focus-visible") !== !1 && (o = !0, C.stopPropagation(), a.value = C.currentTarget || C.target, v());
  }, g = (C) => {
    o = !1, C.stopPropagation(), f();
  }, b = y(() => {
    const C = {};
    return u.value && (C.onClick = d), e.openOnHover && (C.onMouseenter = p, C.onMouseleave = k), i.value && (C.onFocus = m, C.onBlur = g), C;
  }), P = y(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      r = !0, v();
    }, C.onMouseleave = () => {
      r = !1, f();
    }), i.value && (C.onFocusin = () => {
      o = !0, v();
    }, C.onFocusout = () => {
      o = !1, f();
    }), e.closeOnContentClick) {
      const _ = ve(Ul, null);
      C.onClick = () => {
        t.value = !1, _ == null || _.closeParents();
      };
    }
    return C;
  }), B = y(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      s && (r = !0, s = !1, v());
    }, C.onMouseleave = () => {
      r = !1, f();
    }), C;
  });
  Z(n, (C) => {
    !C || (!e.openOnHover || r || i.value && o) && (!i.value || o || e.openOnHover && r) || (t.value = !1);
  });
  const $ = q();
  je(() => {
    $.value && Ee(() => {
      a.value = Wl($.value);
    });
  });
  const w = we("useActivator");
  let V;
  return Z(() => !!e.activator, (C) => {
    C && Te ? (V = tn(), V.run(() => {
      (function(_, x, I) {
        let { activatorEl: S, activatorEvents: F } = I;
        function O() {
          let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D(), E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.activatorProps;
          A && function(M, H) {
            Object.keys(H).forEach((W) => {
              if (Hl(W)) {
                const j = Fn(W), L = Xt.get(M);
                if (H[W] == null)
                  L == null || L.forEach((R) => {
                    const [z, G] = R;
                    z === j && (M.removeEventListener(j, G), L.delete(R));
                  });
                else if (!L || ![...L].some((R) => R[0] === j && R[1] === H[W])) {
                  M.addEventListener(j, H[W]);
                  const R = L || /* @__PURE__ */ new Set();
                  R.add([j, H[W]]), Xt.has(M) || Xt.set(M, R);
                }
              } else
                H[W] == null ? M.removeAttribute(W) : M.setAttribute(W, H[W]);
            });
          }(A, Q(F.value, E));
        }
        function T() {
          let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D(), E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.activatorProps;
          A && function(M, H) {
            Object.keys(H).forEach((W) => {
              if (Hl(W)) {
                const j = Fn(W), L = Xt.get(M);
                L == null || L.forEach((R) => {
                  const [z, G] = R;
                  z === j && (M.removeEventListener(j, G), L.delete(R));
                });
              } else
                M.removeAttribute(W);
            });
          }(A, Q(F.value, E));
        }
        function D() {
          var M, H;
          let A, E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _.activator;
          if (E)
            if (E === "parent") {
              let W = (H = (M = x == null ? void 0 : x.proxy) == null ? void 0 : M.$el) == null ? void 0 : H.parentNode;
              for (; W != null && W.hasAttribute("data-no-activator"); )
                W = W.parentNode;
              A = W;
            } else
              A = typeof E == "string" ? document.querySelector(E) : "$el" in E ? E.$el : E;
          return S.value = (A == null ? void 0 : A.nodeType) === Node.ELEMENT_NODE ? A : null, S.value;
        }
        Z(() => _.activator, (A, E) => {
          if (E && A !== E) {
            const M = D(E);
            M && T(M);
          }
          A && Ee(() => O());
        }, { immediate: !0 }), Z(() => _.activatorProps, () => {
          O();
        }), Be(() => {
          T();
        });
      })(e, w, { activatorEl: a, activatorEvents: b });
    })) : V && V.stop();
  }, { flush: "post", immediate: !0 }), Be(() => {
    V == null || V.stop();
  }), { activatorEl: a, activatorRef: $, activatorEvents: b, contentEvents: P, scrimEvents: B };
}
function dn(e) {
  return rn(() => {
    const l = [], t = {};
    if (e.value.background)
      if (Hn(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text) {
          const n = Bt(e.value.background);
          if (n.a == null || n.a === 1) {
            const a = function(r) {
              const o = Math.abs(Wn(Bt(0), Bt(r)));
              return Math.abs(Wn(Bt(16777215), Bt(r))) > Math.min(o, 50) ? "#fff" : "#000";
            }(n);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        l.push(`bg-${e.value.background}`);
    return e.value.text && (Hn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: t };
  });
}
function He(e, l) {
  const t = y(() => ({ text: ht(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: a } = dn(t);
  return { textColorClasses: n, textColorStyles: a };
}
function lt(e, l) {
  const t = y(() => ({ background: ht(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: a } = dn(t);
  return { backgroundColorClasses: n, backgroundColorStyles: a };
}
const St = N({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function wt(e) {
  return { dimensionStyles: y(() => ({ height: X(e.height), maxHeight: X(e.maxHeight), maxWidth: X(e.maxWidth), minHeight: X(e.minHeight), minWidth: X(e.minWidth), width: X(e.width) })) };
}
const kl = ["sm", "md", "lg", "xl", "xxl"], cs = Symbol.for("vuetify:display");
function Ka() {
  const e = ve(cs);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
const ds = N({ eager: Boolean }, "lazy");
function fe(e, l, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const r = we("useProxiedModel"), o = q(e[l] !== void 0 ? e[l] : t), s = Qe(l), i = y(s !== l ? () => {
    var v, f, d, p;
    return e[l], !(!((v = r.vnode.props) != null && v.hasOwnProperty(l)) && !((f = r.vnode.props) != null && f.hasOwnProperty(s)) || !((d = r.vnode.props) != null && d.hasOwnProperty(`onUpdate:${l}`)) && !((p = r.vnode.props) != null && p.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var v, f;
    return e[l], !(!((v = r.vnode.props) != null && v.hasOwnProperty(l)) || !((f = r.vnode.props) != null && f.hasOwnProperty(`onUpdate:${l}`)));
  });
  et(() => !i.value, () => {
    Z(() => e[l], (v) => {
      o.value = v;
    });
  });
  const u = y({ get() {
    const v = e[l];
    return n(i.value ? v : o.value);
  }, set(v) {
    const f = a(v), d = ke(i.value ? e[l] : o.value);
    d !== f && n(d) !== v && (o.value = f, r == null || r.emit(`update:${l}`, f));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => i.value ? e[l] : o.value }), u;
}
const qa = Symbol.for("vuetify:locale");
function xt() {
  const e = ve(qa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function jt() {
  const e = ve(qa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function pn(e, l) {
  const t = _a("RouterLink"), n = y(() => !(!e.href && !e.to)), a = y(() => (n == null ? void 0 : n.value) || $n(l, "click") || $n(e, "click"));
  if (typeof t == "string")
    return { isLink: n, isClickable: a, href: K(e, "href") };
  const r = e.to ? t.useLink(e) : void 0;
  return { isLink: n, isClickable: a, route: r == null ? void 0 : r.route, navigate: r == null ? void 0 : r.navigate, isActive: r && y(() => {
    var o, s;
    return e.exact ? (o = r.isExactActive) == null ? void 0 : o.value : (s = r.isActive) == null ? void 0 : s.value;
  }), href: y(() => e.to ? r == null ? void 0 : r.route.value.href : e.href) };
}
const vn = N({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Tl = !1;
function Ua() {
  const e = we("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Zn = Symbol.for("vuetify:stack"), Pt = Lt([]), Qn = Symbol.for("vuetify:theme"), xe = N({ theme: String }, "theme");
function _e(e) {
  we("provideTheme");
  const l = ve(Qn, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? l.name.value), n = y(() => l.themes.value[t.value]), a = y(() => l.isDisabled ? void 0 : `v-theme--${t.value}`), r = { ...l, name: t, current: n, themeClasses: a };
  return ge(Qn, r), r;
}
const Wt = N({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), qe = (e, l) => {
  let { slots: t } = l;
  const { transition: n, disabled: a, ...r } = e, { component: o = tt, ...s } = typeof n == "object" ? n : {};
  return yt(o, Q(typeof n == "string" ? { name: a ? "" : n } : s, r, { disabled: a }), t);
};
function ps() {
  return !0;
}
function ea(e, l, t) {
  if (!e || Ya(e, t) === !1)
    return !1;
  const n = La(l);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(l), !a.some((r) => r == null ? void 0 : r.contains(e.target));
}
function Ya(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || ps)(e);
}
function ta(e, l) {
  const t = La(e);
  l(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && l(t);
}
const vs = { mounted(e, l) {
  const t = (a) => function(r, o, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    o._clickOutside.lastMousedownWasOutside && ea(r, o, s) && setTimeout(() => {
      Ya(r, s) && i && i(r);
    }, 0);
  }(a, e, l), n = (a) => {
    e._clickOutside.lastMousedownWasOutside = ea(a, e, l);
  };
  ta(e, (a) => {
    a.addEventListener("click", t, !0), a.addEventListener("mousedown", n, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: t, onMousedown: n };
}, unmounted(e, l) {
  e._clickOutside && (ta(e, (t) => {
    var r;
    if (!t || !((r = e._clickOutside) != null && r[l.instance.$.uid]))
      return;
    const { onClick: n, onMousedown: a } = e._clickOutside[l.instance.$.uid];
    t.removeEventListener("click", n, !0), t.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function fs(e) {
  const { modelValue: l, color: t, ...n } = e;
  return c(tt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && c("div", Q({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, n), null)] });
}
const Xa = N({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...is(), ...re(), ...St(), ...ds(), ...os(), ...rs(), ...xe(), ...Wt() }, "VOverlay"), la = U()({ name: "VOverlay", directives: { ClickOutside: vs }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Xa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var W, j;
  let { slots: t, attrs: n, emit: a } = l;
  const r = fe(e, "modelValue"), o = y({ get: () => r.value, set: (L) => {
    L && e.disabled || (r.value = L);
  } }), { teleportTarget: s } = (i = y(() => e.attach || e.contained), { teleportTarget: y(() => {
    const L = i.value;
    if (L === !0 || !Te)
      return;
    const R = L === !1 ? document.body : typeof L == "string" ? document.querySelector(L) : L;
    if (R == null)
      return void wl(`Unable to locate target ${L}`);
    let z = R.querySelector(":scope > .v-overlay-container");
    return z || (z = document.createElement("div"), z.className = "v-overlay-container", R.appendChild(z)), z;
  }) });
  var i;
  const { themeClasses: u } = _e(e), { rtlClasses: v, isRtl: f } = jt(), { hasContent: d, onAfterLeave: p } = function(L, R) {
    const z = ue(!1), G = y(() => z.value || L.eager || R.value);
    return Z(R, () => z.value = !0), { isBooted: z, hasContent: G, onAfterLeave: function() {
      L.eager || (z.value = !1);
    } };
  }(e, o), k = lt(y(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: m, localTop: g, stackStyles: b } = function(L, R, z) {
    const G = we("useStack"), ne = !z, ee = ve(Zn, void 0), J = Lt({ activeChildren: /* @__PURE__ */ new Set() });
    ge(Zn, J);
    const oe = ue(+R.value);
    et(L, () => {
      var Ct;
      const Le = (Ct = Pt.at(-1)) == null ? void 0 : Ct[1];
      oe.value = Le ? Le + 10 : +R.value, ne && Pt.push([G.uid, oe.value]), ee == null || ee.activeChildren.add(G.uid), Be(() => {
        if (ne) {
          const Vr = ke(Pt).findIndex((Er) => Er[0] === G.uid);
          Pt.splice(Vr, 1);
        }
        ee == null || ee.activeChildren.delete(G.uid);
      });
    });
    const be = ue(!0);
    ne && je(() => {
      var Ct;
      const Le = ((Ct = Pt.at(-1)) == null ? void 0 : Ct[0]) === G.uid;
      setTimeout(() => be.value = Le);
    });
    const kt = y(() => !J.activeChildren.size);
    return { globalTop: ln(be), localTop: kt, stackStyles: y(() => ({ zIndex: oe.value })) };
  }(o, K(e, "zIndex"), e._disableGlobalStack), { activatorEl: P, activatorRef: B, activatorEvents: $, contentEvents: w, scrimEvents: V } = us(e, { isActive: o, isTop: g }), { dimensionStyles: C } = wt(e), _ = function() {
    if (!Te)
      return ue(!1);
    const { ssr: L } = Ka();
    if (L) {
      const R = ue(!1);
      return nt(() => {
        R.value = !0;
      }), R;
    }
    return ue(!0);
  }(), { scopeId: x } = Ua();
  Z(() => e.disabled, (L) => {
    L && (o.value = !1);
  });
  const I = q(), S = q(), { contentStyles: F, updateLocation: O } = function(L, R) {
    const z = q({}), G = q();
    function ne(ee) {
      var J;
      (J = G.value) == null || J.call(G, ee);
    }
    return Te && (et(() => !(!R.isActive.value || !L.locationStrategy), (ee) => {
      var J, oe;
      Z(() => L.locationStrategy, ee), Be(() => {
        G.value = void 0;
      }), typeof L.locationStrategy == "function" ? G.value = (J = L.locationStrategy(R, L, z)) == null ? void 0 : J.updateLocation : G.value = (oe = Ga[L.locationStrategy](R, L, z)) == null ? void 0 : oe.updateLocation;
    }), window.addEventListener("resize", ne, { passive: !0 }), Be(() => {
      window.removeEventListener("resize", ne), G.value = void 0;
    })), { contentStyles: z, updateLocation: G };
  }(e, { isRtl: f, contentEl: S, activatorEl: P, isActive: o });
  function T(L) {
    a("click:outside", L), e.persistent ? H() : o.value = !1;
  }
  function D() {
    return o.value && m.value;
  }
  function A(L) {
    var R, z;
    L.key === "Escape" && m.value && (e.persistent ? H() : (o.value = !1, (R = S.value) != null && R.contains(document.activeElement) && ((z = P.value) == null || z.focus())));
  }
  (function(L, R) {
    if (!Te)
      return;
    let z;
    je(async () => {
      z == null || z.stop(), R.isActive.value && L.scrollStrategy && (z = tn(), await Ee(), z.active && z.run(() => {
        var G;
        typeof L.scrollStrategy == "function" ? L.scrollStrategy(R, L, z) : (G = ll[L.scrollStrategy]) == null || G.call(ll, R, L, z);
      }));
    }), Be(() => {
      z == null || z.stop();
    });
  })(e, { root: I, contentEl: S, activatorEl: P, isActive: o, updateLocation: O }), Te && Z(o, (L) => {
    L ? window.addEventListener("keydown", A) : window.removeEventListener("keydown", A);
  }, { immediate: !0 });
  const E = (j = (W = we("useRouter")) == null ? void 0 : W.proxy) == null ? void 0 : j.$router;
  et(() => e.closeOnBack, () => {
    (function(L, R) {
      let z, G, ne = !1;
      function ee(J) {
        var oe;
        (oe = J.state) != null && oe.replaced || (ne = !0, setTimeout(() => ne = !1));
      }
      Te && (Ee(() => {
        window.addEventListener("popstate", ee), z = L == null ? void 0 : L.beforeEach((J, oe, be) => {
          Tl ? ne ? R(be) : be() : setTimeout(() => ne ? R(be) : be()), Tl = !0;
        }), G = L == null ? void 0 : L.afterEach(() => {
          Tl = !1;
        });
      }), Be(() => {
        window.removeEventListener("popstate", ee), z == null || z(), G == null || G();
      }));
    })(E, (L) => {
      m.value && o.value ? (L(!1), e.persistent ? H() : o.value = !1) : L();
    });
  });
  const M = q();
  function H() {
    e.noClickAnimation || S.value && dt(S.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: il });
  }
  return Z(() => o.value && (e.absolute || e.contained) && s.value == null, (L) => {
    if (L) {
      const R = Na(I.value);
      R && R !== document.scrollingElement && (M.value = R.scrollTop);
    }
  }), le(() => {
    var L;
    return c(ae, null, [(L = t.activator) == null ? void 0 : L.call(t, { isActive: o.value, props: Q({ ref: B }, $.value, e.activatorProps) }), _.value && d.value && c(Or, { disabled: !s.value, to: s.value }, { default: () => [c("div", Q({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": o.value, "v-overlay--contained": e.contained }, u.value, v.value, e.class], style: [b.value, { top: X(M.value) }, e.style], ref: I }, x, n), [c(fs, Q({ color: k, modelValue: o.value && !!e.scrim }, V.value), null), c(qe, { appear: !0, persisted: !0, transition: e.transition, target: P.value, onAfterLeave: () => {
      p(), a("afterLeave");
    } }, { default: () => {
      var R;
      return [De(c("div", Q({ ref: S, class: ["v-overlay__content", e.contentClass], style: [C.value, F.value] }, w.value, e.contentProps), [(R = t.default) == null ? void 0 : R.call(t, { isActive: o })]), [[bt, o.value], [at("click-outside"), { handler: T, closeConditional: D, include: () => [P.value] }]])];
    } })])] })]);
  }), { activatorEl: P, animateClick: H, contentEl: S, globalTop: m, localTop: g, updateLocation: O };
} }), Ol = Symbol("Forwarded refs");
function Dl(e, l) {
  let t = e;
  for (; t; ) {
    const n = Reflect.getOwnPropertyDescriptor(t, l);
    if (n)
      return n;
    t = Object.getPrototypeOf(t);
  }
}
function fn(e) {
  for (var l = arguments.length, t = new Array(l > 1 ? l - 1 : 0), n = 1; n < l; n++)
    t[n - 1] = arguments[n];
  return e[Ol] = t, new Proxy(e, { get(a, r) {
    if (Reflect.has(a, r))
      return Reflect.get(a, r);
    if (typeof r != "symbol" && !r.startsWith("__")) {
      for (const o of t)
        if (o.value && Reflect.has(o.value, r)) {
          const s = Reflect.get(o.value, r);
          return typeof s == "function" ? s.bind(o.value) : s;
        }
    }
  }, has(a, r) {
    if (Reflect.has(a, r))
      return !0;
    if (typeof r == "symbol" || r.startsWith("__"))
      return !1;
    for (const o of t)
      if (o.value && Reflect.has(o.value, r))
        return !0;
    return !1;
  }, set(a, r, o) {
    if (Reflect.has(a, r))
      return Reflect.set(a, r, o);
    if (typeof r == "symbol" || r.startsWith("__"))
      return !1;
    for (const s of t)
      if (s.value && Reflect.has(s.value, r))
        return Reflect.set(s.value, r, o);
    return !1;
  }, getOwnPropertyDescriptor(a, r) {
    var s;
    const o = Reflect.getOwnPropertyDescriptor(a, r);
    if (o)
      return o;
    if (typeof r != "symbol" && !r.startsWith("__")) {
      for (const i of t) {
        if (!i.value)
          continue;
        const u = Dl(i.value, r) ?? ("_" in i.value ? Dl((s = i.value._) == null ? void 0 : s.setupState, r) : void 0);
        if (u)
          return u;
      }
      for (const i of t) {
        const u = i.value && i.value[Ol];
        if (!u)
          continue;
        const v = u.slice();
        for (; v.length; ) {
          const f = v.shift(), d = Dl(f.value, r);
          if (d)
            return d;
          const p = f.value && f.value[Ol];
          p && v.push(...p);
        }
      }
    }
  } });
}
const ms = (e, l, t) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), gs = N({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function ys(e, l, t, n) {
  const a = q([]), r = q(/* @__PURE__ */ new Map()), o = y(() => n != null && n.transform ? h(l).map((s) => [s, n.transform(s)]) : h(l));
  return je(() => {
    const s = typeof t == "function" ? t() : h(t), i = typeof s != "string" && typeof s != "number" ? "" : String(s), u = function(p, k, m) {
      var $;
      const g = [], b = (m == null ? void 0 : m.default) ?? ms, P = !!(m != null && m.filterKeys) && Ve(m.filterKeys), B = Object.keys((m == null ? void 0 : m.customKeyFilter) ?? {}).length;
      if (!(p != null && p.length))
        return g;
      e:
        for (let w = 0; w < p.length; w++) {
          const [V, C = V] = Ve(p[w]), _ = {}, x = {};
          let I = -1;
          if (k && !(m != null && m.noFilter)) {
            if (typeof V == "object") {
              const O = P || Object.keys(C);
              for (const T of O) {
                const D = Pe(C, T, C), A = ($ = m == null ? void 0 : m.customKeyFilter) == null ? void 0 : $[T];
                if (I = A ? A(D, k, V) : b(D, k, V), I !== -1 && I !== !1)
                  A ? _[T] = I : x[T] = I;
                else if ((m == null ? void 0 : m.filterMode) === "every")
                  continue e;
              }
            } else
              I = b(V, k, V), I !== -1 && I !== !1 && (x.title = I);
            const S = Object.keys(x).length, F = Object.keys(_).length;
            if (!S && !F || (m == null ? void 0 : m.filterMode) === "union" && F !== B && !S || (m == null ? void 0 : m.filterMode) === "intersection" && (F !== B || !S))
              continue;
          }
          g.push({ index: w, matches: { ...x, ..._ } });
        }
      return g;
    }(o.value, i, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), v = h(l), f = [], d = /* @__PURE__ */ new Map();
    u.forEach((p) => {
      let { index: k, matches: m } = p;
      const g = v[k];
      f.push(g), d.set(g.value, m);
    }), a.value = f, r.value = d;
  }), { filteredItems: a, filteredMatches: r, getMatches: function(s) {
    return r.value.get(s.value);
  } };
}
const Ce = N({ tag: { type: String, default: "div" } }, "tag"), hs = N({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), Ja = Symbol.for("vuetify:datatable:expanded");
function Za(e) {
  const l = K(e, "expandOnClick"), t = fe(e, "expanded", e.expanded, (o) => new Set(o), (o) => [...o.values()]);
  function n(o, s) {
    const i = new Set(t.value);
    s ? i.add(o.value) : i.delete(o.value), t.value = i;
  }
  function a(o) {
    return t.value.has(o.value);
  }
  const r = { expand: n, expanded: t, expandOnClick: l, isExpanded: a, toggleExpand: function(o) {
    n(o, !a(o));
  } };
  return ge(Ja, r), r;
}
function Qa() {
  const e = ve(Ja);
  if (!e)
    throw new Error("foo");
  return e;
}
const bs = N({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), eo = Symbol.for("vuetify:data-table-group");
function to(e) {
  return { groupBy: fe(e, "groupBy") };
}
function lo(e) {
  const { groupBy: l, sortBy: t } = e, n = q(/* @__PURE__ */ new Set());
  function a(o) {
    return n.value.has(o.id);
  }
  const r = { sortByWithGroups: y(() => l.value.map((o) => ({ ...o, order: o.order ?? !1 })).concat(t.value)), toggleGroup: function(o) {
    const s = new Set(n.value);
    a(o) ? s.delete(o.id) : s.add(o.id), n.value = s;
  }, opened: n, groupBy: l, extractRows: function(o) {
    return function s(i) {
      const u = [];
      for (const v of i.items)
        "type" in v && v.type === "group" ? u.push(...s(v)) : u.push(v);
      return u;
    }({ type: "group", items: o, id: "dummy", key: "dummy", value: "dummy", depth: 0 });
  }, isGroupOpen: a };
  return ge(eo, r), r;
}
function no() {
  const e = ve(eo);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function ao(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!l.length)
    return [];
  const a = function(s, i) {
    if (!s.length)
      return [];
    const u = /* @__PURE__ */ new Map();
    for (const v of s) {
      const f = Vt(v.raw, i);
      u.has(f) || u.set(f, []), u.get(f).push(v);
    }
    return u;
  }(e, l[0]), r = [], o = l.slice(1);
  return a.forEach((s, i) => {
    const u = l[0], v = `${n}_${u}_${i}`;
    r.push({ depth: t, id: v, key: u, value: i, items: o.length ? ao(s, o, t + 1, v) : s, type: "group" });
  }), r;
}
function oo(e, l) {
  const t = [];
  for (const n of e)
    "type" in n && n.type === "group" ? (n.value != null && t.push(n), (l.has(n.id) || n.value == null) && t.push(...oo(n.items, l))) : t.push(n);
  return t;
}
function ro(e, l, t) {
  return { flatItems: y(() => l.value.length ? oo(ao(e.value, l.value.map((n) => n.key)), t.value) : e.value) };
}
function so(e) {
  let { page: l, itemsPerPage: t, sortBy: n, groupBy: a, search: r } = e;
  const o = we("VDataTable"), s = y(() => ({ page: l.value, itemsPerPage: t.value, sortBy: n.value, groupBy: a.value, search: r.value }));
  Z(() => r == null ? void 0 : r.value, () => {
    l.value = 1;
  });
  let i = null;
  Z(s, () => {
    rt(i, s.value) || (o.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const io = N({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), uo = Symbol.for("vuetify:data-table-pagination");
function co(e) {
  return { page: fe(e, "page", void 0, (l) => +(l ?? 1)), itemsPerPage: fe(e, "itemsPerPage", void 0, (l) => +(l ?? 10)) };
}
function po(e) {
  const { page: l, itemsPerPage: t, itemsLength: n } = e, a = y(() => t.value === -1 ? 0 : t.value * (l.value - 1)), r = y(() => t.value === -1 ? n.value : Math.min(n.value, a.value + t.value)), o = y(() => t.value === -1 || n.value === 0 ? 1 : Math.ceil(n.value / t.value));
  je(() => {
    l.value > o.value && (l.value = o.value);
  });
  const s = { page: l, itemsPerPage: t, startIndex: a, stopIndex: r, pageCount: o, itemsLength: n, nextPage: function() {
    l.value = Ze(l.value + 1, 1, o.value);
  }, prevPage: function() {
    l.value = Ze(l.value - 1, 1, o.value);
  }, setPage: function(i) {
    l.value = Ze(i, 1, o.value);
  }, setItemsPerPage: function(i) {
    t.value = i, l.value = 1;
  } };
  return ge(uo, s), s;
}
const Ss = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var n;
  let { items: l, value: t } = e;
  return new Set(t ? [ke((n = l[0]) == null ? void 0 : n.value)] : []);
}, selectAll: (e) => {
  let { selected: l } = e;
  return l;
} }, vo = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const a of l)
    t ? n.add(ke(a.value)) : n.delete(ke(a.value));
  return n;
}, selectAll: (e) => {
  let { value: l, currentPage: t, selected: n } = e;
  return vo.select({ items: t, value: l, selected: n });
} }, fo = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const a of l)
    t ? n.add(ke(a.value)) : n.delete(ke(a.value));
  return n;
}, selectAll: (e) => {
  let { value: l, allItems: t, selected: n } = e;
  return fo.select({ items: t, value: l, selected: n });
} }, ws = N({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: { type: Function, default: rt } }, "DataTable-select"), mo = Symbol.for("vuetify:data-table-selection");
function go(e, l) {
  let { allItems: t, currentPage: n } = l;
  const a = fe(e, "modelValue", e.modelValue, (p) => new Set(Ve(p).map((k) => {
    var m;
    return ((m = t.value.find((g) => e.valueComparator(k, g.value))) == null ? void 0 : m.value) ?? k;
  })), (p) => [...p.values()]), r = y(() => t.value.filter((p) => p.selectable)), o = y(() => n.value.filter((p) => p.selectable)), s = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Ss;
      case "all":
        return fo;
      default:
        return vo;
    }
  });
  function i(p) {
    return Ve(p).every((k) => a.value.has(ke(k.value)));
  }
  function u(p, k) {
    const m = s.value.select({ items: p, value: k, selected: new Set(a.value) });
    a.value = m;
  }
  const v = y(() => a.value.size > 0), f = y(() => {
    const p = s.value.allSelected({ allItems: r.value, currentPage: o.value });
    return !!p.length && i(p);
  }), d = { toggleSelect: function(p) {
    u([p], !i([p]));
  }, select: u, selectAll: function(p) {
    const k = s.value.selectAll({ value: p, allItems: r.value, currentPage: o.value, selected: new Set(a.value) });
    a.value = k;
  }, isSelected: i, isSomeSelected: function(p) {
    return Ve(p).some((k) => a.value.has(ke(k.value)));
  }, someSelected: v, allSelected: f, showSelectAll: s.value.showSelectAll };
  return ge(mo, d), d;
}
function Cl() {
  const e = ve(mo);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
function mn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = q(), n = q();
  if (Te) {
    const a = new ResizeObserver((r) => {
      e == null || e(r, a), r.length && (n.value = l === "content" ? r[0].contentRect : r[0].target.getBoundingClientRect());
    });
    ot(() => {
      a.disconnect();
    }), Z(t, (r, o) => {
      o && (a.unobserve(Wl(o)), n.value = void 0), r && a.observe(Wl(r));
    }, { flush: "post" });
  }
  return { resizeRef: t, contentRect: ln(n) };
}
const xs = N({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), yo = Symbol.for("vuetify:data-table-sort");
function ho(e) {
  return { sortBy: fe(e, "sortBy"), mustSort: K(e, "mustSort"), multiSort: K(e, "multiSort") };
}
function bo(e) {
  const { sortBy: l, mustSort: t, multiSort: n, page: a } = e, r = { sortBy: l, toggleSort: (o) => {
    if (o.key == null)
      return;
    let s = l.value.map((u) => ({ ...u })) ?? [];
    const i = s.find((u) => u.key === o.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((u) => u.key !== o.key) : i.order = "desc" : s = n.value ? [...s, { key: o.key, order: "asc" }] : [{ key: o.key, order: "asc" }], l.value = s, a && (a.value = 1);
  }, isSorted: function(o) {
    return !!l.value.find((s) => s.key === o.key);
  } };
  return ge(yo, r), r;
}
function ks(e, l, t) {
  const n = xt();
  return { sortedItems: y(() => t.value.length ? function(r, o, s, i) {
    const u = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...r].sort((v, f) => {
      for (let d = 0; d < o.length; d++) {
        const p = o[d].key, k = o[d].order ?? "asc";
        if (k === !1)
          continue;
        let m = Vt(v.raw, p), g = Vt(f.raw, p);
        if (k === "desc" && ([m, g] = [g, m]), i == null ? void 0 : i[p]) {
          const b = i[p](m, g);
          if (!b)
            continue;
          return b;
        }
        if (m instanceof Date && g instanceof Date)
          return m.getTime() - g.getTime();
        if ([m, g] = [m, g].map((b) => b != null ? b.toString().toLocaleLowerCase() : b), m !== g)
          return Yt(m) && Yt(g) ? 0 : Yt(m) ? -1 : Yt(g) ? 1 : isNaN(m) || isNaN(g) ? u.compare(m, g) : Number(m) - Number(g);
      }
      return 0;
    });
  }(l.value, t.value, n.current.value, e.customKeySort) : l.value) };
}
const Ht = N({ border: [Boolean, Number, String] }, "border");
function zt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { borderClasses: y(() => {
    const t = ht(e) ? e.value : e.border, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--border`);
    else if (typeof t == "string" || t === 0)
      for (const a of String(t).split(" "))
        n.push(`border-${a}`);
    return n;
  }) };
}
const Cs = [null, "default", "comfortable", "compact"], Ge = N({ density: { type: String, default: "default", validator: (e) => Cs.includes(e) } }, "density");
function Ke(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { densityClasses: y(() => `${l}--density-${e.density}`) };
}
const Gt = N({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Kt(e) {
  return { elevationClasses: y(() => {
    const l = ht(e) ? e.value : e.elevation, t = [];
    return l == null || t.push(`elevation-${l}`), t;
  }) };
}
const Ye = N({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Xe(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { roundedClasses: y(() => {
    const t = ht(e) ? e.value : e.rounded, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const a of String(t).split(" "))
        n.push(`rounded-${a}`);
    return n;
  }) };
}
const Bs = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Bl(e, l) {
  return c(ae, null, [e && c("span", { key: "overlay", class: `${l}__overlay` }, null), c("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const it = N({ color: String, variant: { type: String, default: "elevated", validator: (e) => Bs.includes(e) } }, "variant");
function Pl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = y(() => {
    const { variant: r } = h(e);
    return `${l}--variant-${r}`;
  }), { colorClasses: n, colorStyles: a } = dn(y(() => {
    const { variant: r, color: o } = h(e);
    return { [["elevated", "flat"].includes(r) ? "background" : "text"]: o };
  }));
  return { colorClasses: n, colorStyles: a, variantClasses: t };
}
const So = N({ divided: Boolean, ...Ht(), ...re(), ...Ge(), ...Gt(), ...Ye(), ...Ce(), ...xe(), ...it() }, "VBtnGroup"), na = U()({ name: "VBtnGroup", props: So(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = _e(e), { densityClasses: a } = Ke(e), { borderClasses: r } = zt(e), { elevationClasses: o } = Kt(e), { roundedClasses: s } = Xe(e);
  st({ VBtn: { height: "auto", color: K(e, "color"), density: K(e, "density"), flat: !0, variant: K(e, "variant") } }), le(() => c(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, n.value, r.value, a.value, o.value, s.value, e.class], style: e.style }, t));
} }), wo = N({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), xo = N({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function ko(e, l) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const n = we("useGroupItem");
  if (!n)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = We();
  ge(Symbol.for(`${l.description}:id`), a);
  const r = ve(l, null);
  if (!r) {
    if (!t)
      return r;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const o = K(e, "value"), s = y(() => !(!r.disabled.value && !e.disabled));
  r.register({ id: a, value: o, disabled: s }, n), ot(() => {
    r.unregister(a);
  });
  const i = y(() => r.isSelected(a)), u = y(() => i.value && [r.selectedClass.value, e.selectedClass]);
  return Z(i, (v) => {
    n.emit("group:selected", { value: v });
  }), { id: a, isSelected: i, toggle: () => r.select(a, !i.value), select: (v) => r.select(a, v), selectedClass: u, value: o, disabled: s, group: r };
}
function Co(e, l) {
  let t = !1;
  const n = Lt([]), a = fe(e, "modelValue", [], (u) => u == null ? [] : aa(n, Ve(u)), (u) => {
    const v = function(f, d) {
      const p = [];
      return d.forEach((k) => {
        const m = f.findIndex((g) => g.id === k);
        if (~m) {
          const g = f[m];
          p.push(g.value != null ? g.value : m);
        }
      }), p;
    }(n, u);
    return e.multiple ? v : v[0];
  }), r = we("useGroup");
  function o() {
    const u = n.find((v) => !v.disabled);
    u && e.mandatory === "force" && !a.value.length && (a.value = [u.id]);
  }
  function s(u) {
    if (e.multiple && Ft('This method is not supported when using "multiple" prop'), a.value.length) {
      const v = a.value[0], f = n.findIndex((k) => k.id === v);
      let d = (f + u) % n.length, p = n[d];
      for (; p.disabled && d !== f; )
        d = (d + u) % n.length, p = n[d];
      if (p.disabled)
        return;
      a.value = [n[d].id];
    } else {
      const v = n.find((f) => !f.disabled);
      v && (a.value = [v.id]);
    }
  }
  nt(() => {
    o();
  }), ot(() => {
    t = !0;
  });
  const i = { register: function(u, v) {
    const f = u, d = el(Symbol.for(`${l.description}:id`), r == null ? void 0 : r.vnode).indexOf(v);
    d > -1 ? n.splice(d, 0, f) : n.push(f);
  }, unregister: function(u) {
    if (t)
      return;
    o();
    const v = n.findIndex((f) => f.id === u);
    n.splice(v, 1);
  }, selected: a, select: function(u, v) {
    const f = n.find((d) => d.id === u);
    if (!v || !(f != null && f.disabled))
      if (e.multiple) {
        const d = a.value.slice(), p = d.findIndex((m) => m === u), k = ~p;
        if (v = v ?? !k, k && e.mandatory && d.length <= 1 || !k && e.max != null && d.length + 1 > e.max)
          return;
        p < 0 && v ? d.push(u) : p >= 0 && !v && d.splice(p, 1), a.value = d;
      } else {
        const d = a.value.includes(u);
        if (e.mandatory && d)
          return;
        a.value = v ?? !d ? [u] : [];
      }
  }, disabled: K(e, "disabled"), prev: () => s(n.length - 1), next: () => s(1), isSelected: (u) => a.value.includes(u), selectedClass: y(() => e.selectedClass), items: y(() => n), getItemIndex: (u) => function(v, f) {
    const d = aa(v, [f]);
    return d.length ? v.findIndex((p) => p.id === d[0]) : -1;
  }(n, u) };
  return ge(l, i), i;
}
function aa(e, l) {
  const t = [];
  return l.forEach((n) => {
    const a = e.find((o) => rt(n, o.value)), r = e[n];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : r != null && t.push(r.id);
  }), t;
}
const Bo = Symbol.for("vuetify:v-btn-toggle"), Ps = N({ ...So(), ...wo() }, "VBtnToggle");
U()({ name: "VBtnToggle", props: Ps(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, next: a, prev: r, select: o, selected: s } = Co(e, Bo);
  return le(() => {
    const [i] = na.filterProps(e);
    return c(na, Q({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var u;
      return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: n, next: a, prev: r, select: o, selected: s })];
    } });
  }), { next: a, prev: r, select: o };
} });
const pe = [String, Function, Object, Array], _s = Symbol.for("vuetify:icons"), dl = N({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), oa = U()({ name: "VComponentIcon", props: dl(), setup(e, l) {
  let { slots: t } = l;
  return () => {
    const n = e.icon;
    return c(e.tag, null, { default: () => {
      var a;
      return [e.icon ? c(n, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
    } });
  };
} }), As = It({ name: "VSvgIcon", inheritAttrs: !1, props: dl(), setup(e, l) {
  let { attrs: t } = l;
  return () => c(e.tag, Q(t, { style: null }), { default: () => [c("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? c("path", { d: n[0], "fill-opacity": n[1] }, null) : c("path", { d: n }, null)) : c("path", { d: e.icon }, null)])] });
} });
It({ name: "VLigatureIcon", props: dl(), setup: (e) => () => c(e.tag, null, { default: () => [e.icon] }) }), It({ name: "VClassIcon", props: dl(), setup: (e) => () => c(e.tag, { class: e.icon }, null) });
const Fs = ["x-small", "small", "default", "large", "x-large"], qt = N({ size: { type: [String, Number], default: "default" } }, "size");
function Ut(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return rn(() => {
    let t, n;
    return al(Fs, e.size) ? t = `${l}--size-${e.size}` : e.size && (n = { width: X(e.size), height: X(e.size) }), { sizeClasses: t, sizeStyles: n };
  });
}
const $s = N({ color: String, start: Boolean, end: Boolean, icon: pe, ...re(), ...qt(), ...Ce({ tag: "i" }), ...xe() }, "VIcon"), he = U()({ name: "VIcon", props: $s(), setup(e, l) {
  let { attrs: t, slots: n } = l;
  const a = q(), { themeClasses: r } = _e(e), { iconData: o } = ((v) => {
    const f = ve(_s);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: y(() => {
      var g;
      const d = h(v);
      if (!d)
        return { component: oa };
      let p = d;
      if (typeof p == "string" && (p = p.trim(), p.startsWith("$") && (p = (g = f.aliases) == null ? void 0 : g[p.slice(1)])), !p)
        throw new Error(`Could not find aliased icon "${d}"`);
      if (Array.isArray(p))
        return { component: As, icon: p };
      if (typeof p != "string")
        return { component: oa, icon: p };
      const k = Object.keys(f.sets).find((b) => typeof p == "string" && p.startsWith(`${b}:`)), m = k ? p.slice(k.length + 1) : p;
      return { component: f.sets[k ?? f.defaultSet].component, icon: m };
    }) };
  })(y(() => a.value || e.icon)), { sizeClasses: s } = Ut(e), { textColorClasses: i, textColorStyles: u } = He(K(e, "color"));
  return le(() => {
    var f, d;
    const v = (f = n.default) == null ? void 0 : f.call(n);
    return v && (a.value = (d = Ea(v).filter((p) => p.type === Dr && p.children && typeof p.children == "string")[0]) == null ? void 0 : d.children), c(o.value.component, { tag: e.tag, icon: o.value.icon, class: ["v-icon", "notranslate", r.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: X(e.size), height: X(e.size), width: X(e.size) }, u.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [v] });
  }), {};
} });
function Po(e, l) {
  const t = q(), n = ue(!1);
  if (an) {
    const a = new IntersectionObserver((r) => {
      e == null || e(r, a), n.value = !!r.find((o) => o.isIntersecting);
    }, l);
    ot(() => {
      a.disconnect();
    }), Z(t, (r, o) => {
      o && (a.unobserve(o), n.value = !1), r && a.observe(r);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: n };
}
const Vs = N({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...re(), ...qt(), ...Ce({ tag: "div" }), ...xe() }, "VProgressCircular"), _o = U()({ name: "VProgressCircular", props: Vs(), setup(e, l) {
  let { slots: t } = l;
  const n = 2 * Math.PI * 20, a = q(), { themeClasses: r } = _e(e), { sizeClasses: o, sizeStyles: s } = Ut(e), { textColorClasses: i, textColorStyles: u } = He(K(e, "color")), { textColorClasses: v, textColorStyles: f } = He(K(e, "bgColor")), { intersectionRef: d, isIntersecting: p } = Po(), { resizeRef: k, contentRect: m } = mn(), g = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), b = y(() => Number(e.width)), P = y(() => s.value ? Number(e.size) : m.value ? m.value.width : Math.max(b.value, 32)), B = y(() => 20 / (1 - b.value / P.value) * 2), $ = y(() => b.value / P.value * B.value), w = y(() => X((100 - g.value) / 100 * n));
  return je(() => {
    d.value = a.value, k.value = a.value;
  }), le(() => c(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, r.value, o.value, i.value, e.class], style: [s.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : g.value }, { default: () => [c("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${B.value} ${B.value}` }, [c("circle", { class: ["v-progress-circular__underlay", v.value], style: f.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": $.value, "stroke-dasharray": n, "stroke-dashoffset": 0 }, null), c("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": $.value, "stroke-dasharray": n, "stroke-dashoffset": w.value }, null)]), t.default && c("div", { class: "v-progress-circular__content" }, [t.default({ value: g.value })])] })), {};
} }), ra = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Ao = N({ location: String }, "location");
function Fo(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: n } = jt();
  return { locationStyles: y(() => {
    if (!e.location)
      return {};
    const { side: r, align: o } = Gl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, n.value);
    function s(u) {
      return t ? t(u) : 0;
    }
    const i = {};
    return r !== "center" && (l ? i[ra[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0), o !== "center" ? l ? i[ra[o]] = `calc(100% - ${s(o)}px)` : i[o] = 0 : (r === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[r]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[r]), i;
  }) };
}
const Es = N({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...re(), ...Ao({ location: "top" }), ...Ye(), ...Ce(), ...xe() }, "VProgressLinear"), $o = U()({ name: "VProgressLinear", props: Es(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { isRtl: a, rtlClasses: r } = jt(), { themeClasses: o } = _e(e), { locationStyles: s } = Fo(e), { textColorClasses: i, textColorStyles: u } = He(e, "color"), { backgroundColorClasses: v, backgroundColorStyles: f } = lt(y(() => e.bgColor || e.color)), { backgroundColorClasses: d, backgroundColorStyles: p } = lt(e, "color"), { roundedClasses: k } = Xe(e), { intersectionRef: m, isIntersecting: g } = Po(), b = y(() => parseInt(e.max, 10)), P = y(() => parseInt(e.height, 10)), B = y(() => parseFloat(e.bufferValue) / b.value * 100), $ = y(() => parseFloat(n.value) / b.value * 100), w = y(() => a.value !== e.reverse), V = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), C = y(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function _(x) {
    if (!m.value)
      return;
    const { left: I, right: S, width: F } = m.value.getBoundingClientRect(), O = w.value ? F - x.clientX + (S - F) : x.clientX - I;
    n.value = Math.round(O / F * b.value);
  }
  return le(() => c(e.tag, { ref: m, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && g.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, k.value, o.value, r.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? X(P.value) : 0, "--v-progress-linear-height": X(P.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : $.value, onClick: e.clickable && _ }, { default: () => [e.stream && c("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...u.value, [w.value ? "left" : "right"]: X(-P.value), borderTop: `${X(P.value / 2)} dotted`, opacity: C.value, top: `calc(50% - ${X(P.value / 4)})`, width: X(100 - B.value, "%"), "--v-progress-linear-stream-to": X(P.value * (w.value ? 1 : -1)) } }, null), c("div", { class: ["v-progress-linear__background", v.value], style: [f.value, { opacity: C.value, width: X(e.stream ? B.value : 100, "%") }] }, null), c(tt, { name: V.value }, { default: () => [e.indeterminate ? c("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((x) => c("div", { key: x, class: ["v-progress-linear__indeterminate", x, d.value], style: p.value }, null))]) : c("div", { class: ["v-progress-linear__determinate", d.value], style: [p.value, { width: X($.value, "%") }] }, null)] }), t.default && c("div", { class: "v-progress-linear__content" }, [t.default({ value: $.value, buffer: B.value })])] })), {};
} }), gn = N({ loading: [Boolean, String] }, "loader");
function yn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { loaderClasses: y(() => ({ [`${l}--loading`]: e.loading })) };
}
function Vo(e, l) {
  var n;
  let { slots: t } = l;
  return c("div", { class: `${e.name}__loader` }, [((n = t.default) == null ? void 0 : n.call(t, { color: e.color, isActive: e.active })) || c($o, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Is = ["static", "relative", "fixed", "absolute", "sticky"], Ts = N({ position: { type: String, validator: (e) => Is.includes(e) } }, "position"), Yl = Symbol("rippleStop"), Os = 80;
function sa(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function Xl(e) {
  return e.constructor.name === "TouchEvent";
}
function Eo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const pl = { show(e, l) {
  var p;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((p = l == null ? void 0 : l._ripple) != null && p.enabled))
    return;
  const n = document.createElement("span"), a = document.createElement("span");
  n.appendChild(a), n.className = "v-ripple__container", t.class && (n.className += ` ${t.class}`);
  const { radius: r, scale: o, x: s, y: i, centerX: u, centerY: v } = function(k, m) {
    var C;
    let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b = 0, P = 0;
    if (!Eo(k)) {
      const _ = m.getBoundingClientRect(), x = Xl(k) ? k.touches[k.touches.length - 1] : k;
      b = x.clientX - _.left, P = x.clientY - _.top;
    }
    let B = 0, $ = 0.3;
    (C = m._ripple) != null && C.circle ? ($ = 0.15, B = m.clientWidth / 2, B = g.center ? B : B + Math.sqrt((b - B) ** 2 + (P - B) ** 2) / 4) : B = Math.sqrt(m.clientWidth ** 2 + m.clientHeight ** 2) / 2;
    const w = (m.clientWidth - 2 * B) / 2 + "px", V = (m.clientHeight - 2 * B) / 2 + "px";
    return { radius: B, scale: $, x: g.center ? w : b - B + "px", y: g.center ? V : P - B + "px", centerX: w, centerY: V };
  }(e, l, t), f = 2 * r + "px";
  a.className = "v-ripple__animation", a.style.width = f, a.style.height = f, l.appendChild(n);
  const d = window.getComputedStyle(l);
  d && d.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), sa(a, `translate(${s}, ${i}) scale3d(${o},${o},${o})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), sa(a, `translate(${u}, ${v}) scale3d(1,1,1)`);
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
  const n = performance.now() - Number(t.dataset.activated), a = Math.max(250 - n, 0);
  setTimeout(() => {
    t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var o;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((o = t.parentNode) == null ? void 0 : o.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, a);
} };
function Io(e) {
  return e === void 0 || !!e;
}
function Tt(e) {
  const l = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Yl]) {
    if (e[Yl] = !0, Xl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (l.center = t._ripple.centered || Eo(e), t._ripple.class && (l.class = t._ripple.class), Xl(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        pl.show(e, t, l);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var n;
        (n = t == null ? void 0 : t._ripple) != null && n.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Os);
    } else
      pl.show(e, t, l);
  }
}
function ia(e) {
  e[Yl] = !0;
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
    }), pl.hide(l);
  }
}
function To(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let Ot = !1;
function Oo(e) {
  Ot || e.keyCode !== _n.enter && e.keyCode !== _n.space || (Ot = !0, Tt(e));
}
function Do(e) {
  Ot = !1, $e(e);
}
function Lo(e) {
  Ot && (Ot = !1, $e(e));
}
function ua(e, l, t) {
  const { value: n, modifiers: a } = l, r = Io(n);
  if (r || pl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = r, e._ripple.centered = a.center, e._ripple.circle = a.circle, jl(n) && n.class && (e._ripple.class = n.class), r && !t) {
    if (a.stop)
      return e.addEventListener("touchstart", ia, { passive: !0 }), void e.addEventListener("mousedown", ia);
    e.addEventListener("touchstart", Tt, { passive: !0 }), e.addEventListener("touchend", $e, { passive: !0 }), e.addEventListener("touchmove", To, { passive: !0 }), e.addEventListener("touchcancel", $e), e.addEventListener("mousedown", Tt), e.addEventListener("mouseup", $e), e.addEventListener("mouseleave", $e), e.addEventListener("keydown", Oo), e.addEventListener("keyup", Do), e.addEventListener("blur", Lo), e.addEventListener("dragstart", $e, { passive: !0 });
  } else
    !r && t && Mo(e);
}
function Mo(e) {
  e.removeEventListener("mousedown", Tt), e.removeEventListener("touchstart", Tt), e.removeEventListener("touchend", $e), e.removeEventListener("touchmove", To), e.removeEventListener("touchcancel", $e), e.removeEventListener("mouseup", $e), e.removeEventListener("mouseleave", $e), e.removeEventListener("keydown", Oo), e.removeEventListener("keyup", Do), e.removeEventListener("dragstart", $e), e.removeEventListener("blur", Lo);
}
const _l = { mounted: function(e, l) {
  ua(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, Mo(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && ua(e, l, Io(l.oldValue));
} }, Ds = N({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Bo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Ht(), ...re(), ...Ge(), ...St(), ...Gt(), ...xo(), ...gn(), ...Ao(), ...Ts(), ...Ye(), ...vn(), ...qt(), ...Ce({ tag: "button" }), ...xe(), ...it({ variant: "elevated" }) }, "VBtn"), pt = U()({ name: "VBtn", directives: { Ripple: _l }, props: Ds(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { themeClasses: a } = _e(e), { borderClasses: r } = zt(e), { colorClasses: o, colorStyles: s, variantClasses: i } = Pl(e), { densityClasses: u } = Ke(e), { dimensionStyles: v } = wt(e), { elevationClasses: f } = Kt(e), { loaderClasses: d } = yn(e), { locationStyles: p } = Fo(e), { positionClasses: k } = function(x) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
    return { positionClasses: y(() => x.position ? `${I}--${x.position}` : void 0) };
  }(e), { roundedClasses: m } = Xe(e), { sizeClasses: g, sizeStyles: b } = Ut(e), P = ko(e, e.symbol, !1), B = pn(e, t), $ = y(() => {
    var x;
    return e.active !== void 0 ? e.active : B.isLink.value ? (x = B.isActive) == null ? void 0 : x.value : P == null ? void 0 : P.isSelected.value;
  }), w = y(() => (P == null ? void 0 : P.disabled.value) || e.disabled), V = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), C = y(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function _(x) {
    var I;
    w.value || B.isLink.value && (x.metaKey || x.ctrlKey || x.shiftKey || x.button !== 0 || t.target === "_blank") || ((I = B.navigate) == null || I.call(B, x), P == null || P.toggle());
  }
  return function(x, I) {
    Z(() => {
      var S;
      return (S = x.isActive) == null ? void 0 : S.value;
    }, (S) => {
      x.isLink.value && S && I && Ee(() => {
        I(!0);
      });
    }, { immediate: !0 });
  }(B, P == null ? void 0 : P.select), le(() => {
    var T, D;
    const x = B.isLink.value ? "a" : e.tag, I = !(!e.prependIcon && !n.prepend), S = !(!e.appendIcon && !n.append), F = !(!e.icon || e.icon === !0), O = (P == null ? void 0 : P.isSelected.value) && (!B.isLink.value || ((T = B.isActive) == null ? void 0 : T.value)) || !P || ((D = B.isActive) == null ? void 0 : D.value);
    return De(c(x, { type: x === "a" ? void 0 : "button", class: ["v-btn", P == null ? void 0 : P.selectedClass.value, { "v-btn--active": $.value, "v-btn--block": e.block, "v-btn--disabled": w.value, "v-btn--elevated": V.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, a.value, r.value, O ? o.value : void 0, u.value, f.value, d.value, k.value, m.value, g.value, i.value, e.class], style: [O ? s.value : void 0, v.value, p.value, b.value, e.style], disabled: w.value || void 0, href: B.href.value, onClick: _, value: C.value }, { default: () => {
      var A;
      return [Bl(!0, "v-btn"), !e.icon && I && c("span", { key: "prepend", class: "v-btn__prepend" }, [n.prepend ? c(Oe, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, n.prepend) : c(he, { key: "prepend-icon", icon: e.prependIcon }, null)]), c("span", { class: "v-btn__content", "data-no-activator": "" }, [!n.default && F ? c(he, { key: "content-icon", icon: e.icon }, null) : c(Oe, { key: "content-defaults", disabled: !F, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var E;
        return [((E = n.default) == null ? void 0 : E.call(n)) ?? e.text];
      } })]), !e.icon && S && c("span", { key: "append", class: "v-btn__append" }, [n.append ? c(Oe, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, n.append) : c(he, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && c("span", { key: "loader", class: "v-btn__loader" }, [((A = n.loader) == null ? void 0 : A.call(n)) ?? c(_o, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[at("ripple"), !w.value && e.ripple, null]]);
  }), {};
} }), Ls = N({ text: String, clickable: Boolean, ...re(), ...xe() }, "VLabel"), No = U()({ name: "VLabel", props: Ls(), setup(e, l) {
  let { slots: t } = l;
  return le(() => {
    var n;
    return c("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (n = t.default) == null ? void 0 : n.call(t)]);
  }), {};
} }), Ro = Symbol.for("vuetify:selection-control-group"), jo = N({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: rt }, ...re(), ...Ge(), ...xe() }, "SelectionControlGroup"), Ms = N({ ...jo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
U()({ name: "VSelectionControlGroup", props: Ms(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), a = We(), r = y(() => e.id || `v-selection-control-group-${a}`), o = y(() => e.name || r.value), s = /* @__PURE__ */ new Set();
  return ge(Ro, { modelValue: n, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), Be(() => {
      s.delete(i);
    });
  } }), st({ [e.defaultsTarget]: { color: K(e, "color"), disabled: K(e, "disabled"), density: K(e, "density"), error: K(e, "error"), inline: K(e, "inline"), modelValue: n, multiple: y(() => !!e.multiple || e.multiple == null && Array.isArray(n.value)), name: o, falseIcon: K(e, "falseIcon"), trueIcon: K(e, "trueIcon"), readonly: K(e, "readonly"), ripple: K(e, "ripple"), type: K(e, "type"), valueComparator: K(e, "valueComparator") } }), le(() => {
    var i;
    return c("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const Wo = N({ label: String, trueValue: null, falseValue: null, value: null, ...re(), ...jo() }, "VSelectionControl"), ca = U()({ name: "VSelectionControl", directives: { Ripple: _l }, inheritAttrs: !1, props: Wo(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { group: a, densityClasses: r, icon: o, model: s, textColorClasses: i, textColorStyles: u, backgroundColorClasses: v, backgroundColorStyles: f, trueValue: d } = function(w) {
    const V = ve(Ro, void 0), { densityClasses: C } = Ke(w), _ = fe(w, "modelValue"), x = y(() => w.trueValue !== void 0 ? w.trueValue : w.value === void 0 || w.value), I = y(() => w.falseValue !== void 0 && w.falseValue), S = y(() => !!w.multiple || w.multiple == null && Array.isArray(_.value)), F = y({ get() {
      const M = V ? V.modelValue.value : _.value;
      return S.value ? M.some((H) => w.valueComparator(H, x.value)) : w.valueComparator(M, x.value);
    }, set(M) {
      if (w.readonly)
        return;
      const H = M ? x.value : I.value;
      let W = H;
      S.value && (W = M ? [...Ve(_.value), H] : Ve(_.value).filter((j) => !w.valueComparator(j, x.value))), V ? V.modelValue.value = W : _.value = W;
    } }), { textColorClasses: O, textColorStyles: T } = He(y(() => !F.value || w.error || w.disabled ? void 0 : w.color)), { backgroundColorClasses: D, backgroundColorStyles: A } = lt(y(() => !F.value || w.error || w.disabled ? void 0 : w.color)), E = y(() => F.value ? w.trueIcon : w.falseIcon);
    return { group: V, densityClasses: C, trueValue: x, falseValue: I, model: F, textColorClasses: O, textColorStyles: T, backgroundColorClasses: D, backgroundColorStyles: A, icon: E };
  }(e), p = We(), k = y(() => e.id || `input-${p}`), m = ue(!1), g = ue(!1), b = q();
  function P(w) {
    m.value = !0, rl(w.target, ":focus-visible") !== !1 && (g.value = !0);
  }
  function B() {
    m.value = !1, g.value = !1;
  }
  function $(w) {
    e.readonly && a && Ee(() => a.forceUpdate()), s.value = w.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    b.value && (b.value.checked = s.value);
  }), le(() => {
    var x, I;
    const w = n.label ? n.label({ label: e.label, props: { for: k.value } }) : e.label, [V, C] = on(t), _ = c("input", Q({ ref: b, checked: s.value, disabled: !(!e.readonly && !e.disabled), id: k.value, onBlur: B, onFocus: P, onInput: $, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: d.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, C), null);
    return c("div", Q({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": m.value, "v-selection-control--focus-visible": g.value, "v-selection-control--inline": e.inline }, r.value, e.class] }, V, { style: e.style }), [c("div", { class: ["v-selection-control__wrapper", i.value], style: u.value }, [(x = n.default) == null ? void 0 : x.call(n, { backgroundColorClasses: v, backgroundColorStyles: f }), De(c("div", { class: ["v-selection-control__input"] }, [((I = n.input) == null ? void 0 : I.call(n, { model: s, textColorClasses: i, textColorStyles: u, backgroundColorClasses: v, backgroundColorStyles: f, inputNode: _, icon: o.value, props: { onFocus: P, onBlur: B, id: k.value } })) ?? c(ae, null, [o.value && c(he, { key: "icon", icon: o.value }, null), _])]), [[at("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), w && c(No, { for: k.value, clickable: !0, onClick: (S) => S.stopPropagation() }, { default: () => [w] })]);
  }), { isFocused: m, input: b };
} }), Ho = N({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...Wo({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), gt = U()({ name: "VCheckboxBtn", props: Ho(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "indeterminate"), a = fe(e, "modelValue");
  function r(i) {
    n.value && (n.value = !1);
  }
  const o = y(() => n.value ? e.indeterminateIcon : e.falseIcon), s = y(() => n.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => {
    const i = Rt(ca.filterProps(e)[0], ["modelValue"]);
    return c(ca, Q(i, { modelValue: a.value, "onUpdate:modelValue": [(u) => a.value = u, r], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: o.value, trueIcon: s.value, "aria-checked": n.value ? "mixed" : void 0 }), t);
  }), {};
} });
function zo(e) {
  const { t: l } = xt();
  return { InputIcon: function(t) {
    let { name: n } = t;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[n], r = e[`onClick:${n}`], o = r && a ? l(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return c(he, { icon: e[`${n}Icon`], "aria-label": o, onClick: r }, null);
  } };
}
const Ns = N({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...re(), ...Wt({ transition: { component: Ha, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Rs = U()({ name: "VMessages", props: Ns(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => Ve(e.messages)), { textColorClasses: a, textColorStyles: r } = He(y(() => e.color));
  return le(() => c(qe, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [r.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && n.value.map((o, s) => c("div", { class: "v-messages__message", key: `${s}-${n.value}` }, [t.message ? t.message({ message: o }) : o]))] })), {};
} }), Go = N({ focused: Boolean, "onUpdate:focused": Re() }, "focus");
function hn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = fe(e, "focused");
  return { focusClasses: y(() => ({ [`${l}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const js = Symbol.for("vuetify:form");
function Ko() {
  return ve(js, null);
}
const Ws = N({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Go() }, "validation"), bn = N({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Re(), "onClick:append": Re(), ...re(), ...Ge(), ...Ws() }, "VInput"), vl = U()({ name: "VInput", props: { ...bn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: a } = l;
  const { densityClasses: r } = Ke(e), { rtlClasses: o } = jt(), { InputIcon: s } = zo(e), i = We(), u = y(() => e.id || `input-${i}`), v = y(() => `${u.value}-messages`), { errorMessages: f, isDirty: d, isDisabled: p, isReadonly: k, isPristine: m, isValid: g, isValidating: b, reset: P, resetValidation: B, validate: $, validationClasses: w } = function(_) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze(), I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : We();
    const S = fe(_, "modelValue"), F = y(() => _.validationValue === void 0 ? S.value : _.validationValue), O = Ko(), T = q([]), D = ue(!0), A = y(() => !(!Ve(S.value === "" ? null : S.value).length && !Ve(F.value === "" ? null : F.value).length)), E = y(() => !!(_.disabled ?? (O == null ? void 0 : O.isDisabled.value))), M = y(() => !!(_.readonly ?? (O == null ? void 0 : O.isReadonly.value))), H = y(() => _.errorMessages.length ? Ve(_.errorMessages).slice(0, Math.max(0, +_.maxErrors)) : T.value), W = y(() => {
      let J = (_.validateOn ?? (O == null ? void 0 : O.validateOn.value)) || "input";
      J === "lazy" && (J = "input lazy");
      const oe = new Set((J == null ? void 0 : J.split(" ")) ?? []);
      return { blur: oe.has("blur") || oe.has("input"), input: oe.has("input"), submit: oe.has("submit"), lazy: oe.has("lazy") };
    }), j = y(() => !_.error && !_.errorMessages.length && (!_.rules.length || (D.value ? !T.value.length && !W.value.lazy || null : !T.value.length))), L = ue(!1), R = y(() => ({ [`${x}--error`]: j.value === !1, [`${x}--dirty`]: A.value, [`${x}--disabled`]: E.value, [`${x}--readonly`]: M.value })), z = y(() => _.name ?? h(I));
    function G() {
      S.value = null, Ee(ne);
    }
    function ne() {
      D.value = !0, W.value.lazy ? T.value = [] : ee(!0);
    }
    async function ee() {
      let J = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const oe = [];
      L.value = !0;
      for (const be of _.rules) {
        if (oe.length >= +(_.maxErrors ?? 1))
          break;
        const kt = typeof be == "function" ? be : () => be, Le = await kt(F.value);
        Le !== !0 && (Le === !1 || typeof Le == "string" ? oe.push(Le || "") : console.warn(`${Le} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return T.value = oe, L.value = !1, D.value = J, T.value;
    }
    return nn(() => {
      O == null || O.register({ id: z.value, validate: ee, reset: G, resetValidation: ne });
    }), ot(() => {
      O == null || O.unregister(z.value);
    }), nt(async () => {
      W.value.lazy || await ee(!0), O == null || O.update(z.value, j.value, H.value);
    }), et(() => W.value.input, () => {
      Z(F, () => {
        if (F.value != null)
          ee();
        else if (_.focused) {
          const J = Z(() => _.focused, (oe) => {
            oe || ee(), J();
          });
        }
      });
    }), et(() => W.value.blur, () => {
      Z(() => _.focused, (J) => {
        J || ee();
      });
    }), Z(j, () => {
      O == null || O.update(z.value, j.value, H.value);
    }), { errorMessages: H, isDirty: A, isDisabled: E, isReadonly: M, isPristine: D, isValid: j, isValidating: L, reset: G, resetValidation: ne, validate: ee, validationClasses: R };
  }(e, "v-input", u), V = y(() => ({ id: u, messagesId: v, isDirty: d, isDisabled: p, isReadonly: k, isPristine: m, isValid: g, isValidating: b, reset: P, resetValidation: B, validate: $ })), C = y(() => {
    var _;
    return (_ = e.errorMessages) != null && _.length || !m.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return le(() => {
    var F, O, T, D;
    const _ = !(!n.prepend && !e.prependIcon), x = !(!n.append && !e.appendIcon), I = C.value.length > 0, S = !e.hideDetails || e.hideDetails === "auto" && (I || !!n.details);
    return c("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, r.value, o.value, w.value, e.class], style: e.style }, [_ && c("div", { key: "prepend", class: "v-input__prepend" }, [(F = n.prepend) == null ? void 0 : F.call(n, V.value), e.prependIcon && c(s, { key: "prepend-icon", name: "prepend" }, null)]), n.default && c("div", { class: "v-input__control" }, [(O = n.default) == null ? void 0 : O.call(n, V.value)]), x && c("div", { key: "append", class: "v-input__append" }, [e.appendIcon && c(s, { key: "append-icon", name: "append" }, null), (T = n.append) == null ? void 0 : T.call(n, V.value)]), S && c("div", { class: "v-input__details" }, [c(Rs, { id: v.value, active: I, messages: C.value }, { message: n.message }), (D = n.details) == null ? void 0 : D.call(n, V.value)])]);
  }), { reset: P, resetValidation: B, validate: $ };
} }), Hs = N({ ...bn(), ...Rt(Ho(), ["inline"]) }, "VCheckbox"), Sn = U()({ name: "VCheckbox", inheritAttrs: !1, props: Hs(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const a = fe(e, "modelValue"), { isFocused: r, focus: o, blur: s } = hn(e), i = We(), u = y(() => e.id || `checkbox-${i}`);
  return le(() => {
    const [v, f] = on(t), [d, p] = vl.filterProps(e), [k, m] = gt.filterProps(e);
    return c(vl, Q({ class: ["v-checkbox", e.class] }, v, d, { modelValue: a.value, "onUpdate:modelValue": (g) => a.value = g, id: u.value, focused: r.value, style: e.style }), { ...n, default: (g) => {
      let { id: b, messagesId: P, isDisabled: B, isReadonly: $ } = g;
      return c(gt, Q(k, { id: b.value, "aria-describedby": P.value, disabled: B.value, readonly: $.value }, f, { modelValue: a.value, "onUpdate:modelValue": (w) => a.value = w, onFocus: o, onBlur: s }), n);
    } });
  }), {};
} }), qo = N({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...re(), ...St() }, "VResponsive"), da = U()({ name: "VResponsive", props: qo(), setup(e, l) {
  let { slots: t } = l;
  const { aspectStyles: n } = function(r) {
    return { aspectStyles: y(() => {
      const o = Number(r.aspectRatio);
      return o ? { paddingBottom: String(1 / o * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = wt(e);
  return le(() => {
    var r;
    return c("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [c("div", { class: "v-responsive__sizer", style: n.value }, null), (r = t.additional) == null ? void 0 : r.call(t), t.default && c("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function pa(e, l) {
  var n;
  const t = (n = e._observe) == null ? void 0 : n[l.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Uo = { mounted: function(e, l) {
  if (!an)
    return;
  const t = l.modifiers || {}, n = l.value, { handler: a, options: r } = typeof n == "object" ? n : { handler: n, options: {} }, o = new IntersectionObserver(function() {
    var f;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const u = (f = e._observe) == null ? void 0 : f[l.instance.$.uid];
    if (!u)
      return;
    const v = s.some((d) => d.isIntersecting);
    !a || t.quiet && !u.init || t.once && !v && !u.init || a(v, s, i), v && t.once ? pa(e, l) : u.init = !0;
  }, r);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: o }, o.observe(e);
}, unmounted: pa }, zs = N({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...qo(), ...re(), ...Wt() }, "VImg"), Gs = U()({ name: "VImg", directives: { intersect: Uo }, props: zs(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const a = ue(""), r = q(), o = ue(e.eager ? "loading" : "idle"), s = ue(), i = ue(), u = y(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), v = y(() => u.value.aspect || s.value / i.value || 0);
  function f(_) {
    if ((!e.eager || !_) && (!an || _ || e.eager)) {
      if (o.value = "loading", u.value.lazySrc) {
        const x = new Image();
        x.src = u.value.lazySrc, g(x, null);
      }
      u.value.src && Ee(() => {
        var x, I;
        if (t("loadstart", ((x = r.value) == null ? void 0 : x.currentSrc) || u.value.src), (I = r.value) == null ? void 0 : I.complete) {
          if (r.value.naturalWidth || p(), o.value === "error")
            return;
          v.value || g(r.value, null), d();
        } else
          v.value || g(r.value), k();
      });
    }
  }
  function d() {
    var _;
    k(), o.value = "loaded", t("load", ((_ = r.value) == null ? void 0 : _.currentSrc) || u.value.src);
  }
  function p() {
    var _;
    o.value = "error", t("error", ((_ = r.value) == null ? void 0 : _.currentSrc) || u.value.src);
  }
  function k() {
    const _ = r.value;
    _ && (a.value = _.currentSrc || _.src);
  }
  Z(() => e.src, () => {
    f(o.value !== "idle");
  }), Z(v, (_, x) => {
    !_ && x && r.value && g(r.value);
  }), nn(() => f());
  let m = -1;
  function g(_) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const I = () => {
      clearTimeout(m);
      const { naturalHeight: S, naturalWidth: F } = _;
      S || F ? (s.value = F, i.value = S) : _.complete || o.value !== "loading" || x == null ? (_.currentSrc.endsWith(".svg") || _.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : m = window.setTimeout(I, x);
    };
    I();
  }
  const b = y(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), P = () => {
    var I;
    if (!u.value.src || o.value === "idle")
      return null;
    const _ = c("img", { class: ["v-img__img", b.value], src: u.value.src, srcset: u.value.srcset, alt: e.alt, sizes: e.sizes, ref: r, onLoad: d, onError: p }, null), x = (I = n.sources) == null ? void 0 : I.call(n);
    return c(qe, { transition: e.transition, appear: !0 }, { default: () => [De(x ? c("picture", { class: "v-img__picture" }, [x, _]) : _, [[bt, o.value === "loaded"]])] });
  }, B = () => c(qe, { transition: e.transition }, { default: () => [u.value.lazySrc && o.value !== "loaded" && c("img", { class: ["v-img__img", "v-img__img--preload", b.value], src: u.value.lazySrc, alt: e.alt }, null)] }), $ = () => n.placeholder ? c(qe, { transition: e.transition, appear: !0 }, { default: () => [(o.value === "loading" || o.value === "error" && !n.error) && c("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null, w = () => n.error ? c(qe, { transition: e.transition, appear: !0 }, { default: () => [o.value === "error" && c("div", { class: "v-img__error" }, [n.error()])] }) : null, V = () => e.gradient ? c("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, C = ue(!1);
  {
    const _ = Z(v, (x) => {
      x && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          C.value = !0;
        });
      }), _());
    });
  }
  return le(() => {
    const [_] = da.filterProps(e);
    return De(c(da, Q({ class: ["v-img", { "v-img--booting": !C.value }, e.class], style: [{ width: X(e.width === "auto" ? s.value : e.width) }, e.style] }, _, { aspectRatio: v.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => c(ae, null, [c(P, null, null), c(B, null, null), c(V, null, null), c($, null, null), c(w, null, null)]), default: n.default }), [[at("intersect"), { handler: f, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: r, state: o, naturalWidth: s, naturalHeight: i };
} }), Ks = N({ start: Boolean, end: Boolean, icon: pe, image: String, ...re(), ...Ge(), ...Ye(), ...qt(), ...Ce(), ...xe(), ...it({ variant: "flat" }) }, "VAvatar"), fl = U()({ name: "VAvatar", props: Ks(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = _e(e), { colorClasses: a, colorStyles: r, variantClasses: o } = Pl(e), { densityClasses: s } = Ke(e), { roundedClasses: i } = Xe(e), { sizeClasses: u, sizeStyles: v } = Ut(e);
  return le(() => c(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, a.value, s.value, i.value, u.value, o.value, e.class], style: [r.value, v.value, e.style] }, { default: () => {
    var f;
    return [e.image ? c(Gs, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? c(he, { key: "icon", icon: e.icon }, null) : (f = t.default) == null ? void 0 : f.call(t), Bl(!1, "v-avatar")];
  } })), {};
} }), Yo = Symbol.for("vuetify:v-chip-group"), qs = N({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: rt }, ...re(), ...wo({ selectedClass: "v-chip--selected" }), ...Ce(), ...xe(), ...it({ variant: "tonal" }) }, "VChipGroup");
U()({ name: "VChipGroup", props: qs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = _e(e), { isSelected: a, select: r, next: o, prev: s, selected: i } = Co(e, Yo);
  return st({ VChip: { color: K(e, "color"), disabled: K(e, "disabled"), filter: K(e, "filter"), variant: K(e, "variant") } }), le(() => c(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, n.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: a, select: r, next: o, prev: s, selected: i.value })];
  } })), {};
} });
const Us = N({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Re(), onClickOnce: Re(), ...Ht(), ...re(), ...Ge(), ...Gt(), ...xo(), ...Ye(), ...vn(), ...qt(), ...Ce({ tag: "span" }), ...xe(), ...it({ variant: "tonal" }) }, "VChip"), Ys = U()({ name: "VChip", directives: { Ripple: _l }, props: Us(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: a } = l;
  const { t: r } = xt(), { borderClasses: o } = zt(e), { colorClasses: s, colorStyles: i, variantClasses: u } = Pl(e), { densityClasses: v } = Ke(e), { elevationClasses: f } = Kt(e), { roundedClasses: d } = Xe(e), { sizeClasses: p } = Ut(e), { themeClasses: k } = _e(e), m = fe(e, "modelValue"), g = ko(e, Yo, !1), b = pn(e, t), P = y(() => e.link !== !1 && b.isLink.value), B = y(() => !e.disabled && e.link !== !1 && (!!g || e.link || b.isClickable.value)), $ = y(() => ({ "aria-label": r(e.closeLabel), onClick(C) {
    C.stopPropagation(), m.value = !1, n("click:close", C);
  } }));
  function w(C) {
    var _;
    n("click", C), B.value && ((_ = b.navigate) == null || _.call(b, C), g == null || g.toggle());
  }
  function V(C) {
    C.key !== "Enter" && C.key !== " " || (C.preventDefault(), w(C));
  }
  return () => {
    const C = b.isLink.value ? "a" : e.tag, _ = !(!e.appendIcon && !e.appendAvatar), x = !(!_ && !a.append), I = !(!a.close && !e.closable), S = !(!a.filter && !e.filter) && g, F = !(!e.prependIcon && !e.prependAvatar), O = !(!F && !a.prepend), T = !g || g.isSelected.value;
    return m.value && De(c(C, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": B.value, "v-chip--filter": S, "v-chip--pill": e.pill }, k.value, o.value, T ? s.value : void 0, v.value, f.value, d.value, p.value, u.value, g == null ? void 0 : g.selectedClass.value, e.class], style: [T ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: b.href.value, tabindex: B.value ? 0 : void 0, onClick: w, onKeydown: B.value && !P.value && V }, { default: () => {
      var D;
      return [Bl(B.value, "v-chip"), S && c(za, { key: "filter" }, { default: () => [De(c("div", { class: "v-chip__filter" }, [a.filter ? c(Oe, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : c(he, { key: "filter-icon", icon: e.filterIcon }, null)]), [[bt, g.isSelected.value]])] }), O && c("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? c(Oe, { key: "prepend-defaults", disabled: !F, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : c(ae, null, [e.prependIcon && c(he, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && c(fl, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), c("div", { class: "v-chip__content" }, [((D = a.default) == null ? void 0 : D.call(a, { isSelected: g == null ? void 0 : g.isSelected.value, selectedClass: g == null ? void 0 : g.selectedClass.value, select: g == null ? void 0 : g.select, toggle: g == null ? void 0 : g.toggle, value: g == null ? void 0 : g.value.value, disabled: e.disabled })) ?? e.text]), x && c("div", { key: "append", class: "v-chip__append" }, [a.append ? c(Oe, { key: "append-defaults", disabled: !_, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : c(ae, null, [e.appendIcon && c(he, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && c(fl, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), I && c("div", Q({ key: "close", class: "v-chip__close" }, $.value), [a.close ? c(Oe, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : c(he, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[at("ripple"), B.value && e.ripple, null]]);
  };
} }), Jl = Symbol.for("vuetify:list");
function Xo() {
  const e = ve(Jl, { hasPrepend: ue(!1), updateHasPrepend: () => null }), l = { hasPrepend: ue(!1), updateHasPrepend: (t) => {
    t && (l.hasPrepend.value = t);
  } };
  return ge(Jl, l), e;
}
function Jo() {
  return ve(Jl, null);
}
const Xs = { open: (e) => {
  let { id: l, value: t, opened: n, parents: a } = e;
  if (t) {
    const r = /* @__PURE__ */ new Set();
    r.add(l);
    let o = a.get(l);
    for (; o != null; )
      r.add(o), o = a.get(o);
    return r;
  }
  return n.delete(l), n;
}, select: () => null }, Zo = { open: (e) => {
  let { id: l, value: t, opened: n, parents: a } = e;
  if (t) {
    let r = a.get(l);
    for (n.add(l); r != null && r !== l; )
      n.add(r), r = a.get(r);
    return n;
  }
  return n.delete(l), n;
}, select: () => null }, Js = { open: Zo.open, select: (e) => {
  let { id: l, value: t, opened: n, parents: a } = e;
  if (!t)
    return n;
  const r = [];
  let o = a.get(l);
  for (; o != null; )
    r.push(o), o = a.get(o);
  return new Set(r);
} }, Zl = (e) => {
  const l = { select: (t) => {
    let { id: n, value: a, selected: r } = t;
    if (n = ke(n), e && !a) {
      const o = Array.from(r.entries()).reduce((s, i) => {
        let [u, v] = i;
        return v === "on" ? [...s, u] : s;
      }, []);
      if (o.length === 1 && o[0] === n)
        return r;
    }
    return r.set(n, a ? "on" : "off"), r;
  }, in: (t, n, a) => {
    let r = /* @__PURE__ */ new Map();
    for (const o of t || [])
      r = l.select({ id: o, value: !0, selected: new Map(r), children: n, parents: a });
    return r;
  }, out: (t) => {
    const n = [];
    for (const [a, r] of t.entries())
      r === "on" && n.push(a);
    return n;
  } };
  return l;
}, va = (e) => {
  const l = Zl(e);
  return { select: (t) => {
    let { selected: n, id: a, ...r } = t;
    a = ke(a);
    const o = n.has(a) ? /* @__PURE__ */ new Map([[a, n.get(a)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...r, id: a, selected: o });
  }, in: (t, n, a) => {
    let r = /* @__PURE__ */ new Map();
    return t != null && t.length && (r = l.in(t.slice(0, 1), n, a)), r;
  }, out: (t, n, a) => l.out(t, n, a) };
}, Dt = Symbol.for("vuetify:nested"), Qo = { id: ue(), root: { register: () => null, unregister: () => null, parents: q(/* @__PURE__ */ new Map()), children: q(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: q(/* @__PURE__ */ new Set()), selected: q(/* @__PURE__ */ new Map()), selectedValues: q([]) } }, Zs = N({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Qs = (e) => {
  let l = !1;
  const t = q(/* @__PURE__ */ new Map()), n = q(/* @__PURE__ */ new Map()), a = fe(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), r = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((f) => {
          const d = va(f);
          return { select: (p) => {
            let { id: k, selected: m, children: g, ...b } = p;
            return k = ke(k), g.has(k) ? m : d.select({ id: k, selected: m, children: g, ...b });
          }, in: d.in, out: d.out };
        })(e.mandatory);
      case "leaf":
        return ((f) => {
          const d = Zl(f);
          return { select: (p) => {
            let { id: k, selected: m, children: g, ...b } = p;
            return k = ke(k), g.has(k) ? m : d.select({ id: k, selected: m, children: g, ...b });
          }, in: d.in, out: d.out };
        })(e.mandatory);
      case "independent":
        return Zl(e.mandatory);
      case "single-independent":
        return va(e.mandatory);
      default:
        return ((f) => {
          const d = { select: (p) => {
            let { id: k, value: m, selected: g, children: b, parents: P } = p;
            k = ke(k);
            const B = new Map(g), $ = [k];
            for (; $.length; ) {
              const V = $.shift();
              g.set(V, m ? "on" : "off"), b.has(V) && $.push(...b.get(V));
            }
            let w = P.get(k);
            for (; w; ) {
              const V = b.get(w), C = V.every((x) => g.get(x) === "on"), _ = V.every((x) => !g.has(x) || g.get(x) === "off");
              g.set(w, C ? "on" : _ ? "off" : "indeterminate"), w = P.get(w);
            }
            return f && !m && Array.from(g.entries()).reduce((C, _) => {
              let [x, I] = _;
              return I === "on" ? [...C, x] : C;
            }, []).length === 0 ? B : g;
          }, in: (p, k, m) => {
            let g = /* @__PURE__ */ new Map();
            for (const b of p || [])
              g = d.select({ id: b, value: !0, selected: new Map(g), children: k, parents: m });
            return g;
          }, out: (p, k) => {
            const m = [];
            for (const [g, b] of p.entries())
              b !== "on" || k.has(g) || m.push(g);
            return m;
          } };
          return d;
        })(e.mandatory);
    }
  }), o = y(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Js;
      case "single":
        return Xs;
      default:
        return Zo;
    }
  }), s = fe(e, "selected", e.selected, (f) => r.value.in(f, t.value, n.value), (f) => r.value.out(f, t.value, n.value));
  function i(f) {
    const d = [];
    let p = f;
    for (; p != null; )
      d.unshift(p), p = n.value.get(p);
    return d;
  }
  ot(() => {
    l = !0;
  });
  const u = we("nested"), v = { id: ue(), root: { opened: a, selected: s, selectedValues: y(() => {
    const f = [];
    for (const [d, p] of s.value.entries())
      p === "on" && f.push(d);
    return f;
  }), register: (f, d, p) => {
    d && f !== d && n.value.set(f, d), p && t.value.set(f, []), d != null && t.value.set(d, [...t.value.get(d) || [], f]);
  }, unregister: (f) => {
    if (l)
      return;
    t.value.delete(f);
    const d = n.value.get(f);
    if (d) {
      const p = t.value.get(d) ?? [];
      t.value.set(d, p.filter((k) => k !== f));
    }
    n.value.delete(f), a.value.delete(f);
  }, open: (f, d, p) => {
    u.emit("click:open", { id: f, value: d, path: i(f), event: p });
    const k = o.value.open({ id: f, value: d, opened: new Set(a.value), children: t.value, parents: n.value, event: p });
    k && (a.value = k);
  }, openOnSelect: (f, d, p) => {
    const k = o.value.select({ id: f, value: d, selected: new Map(s.value), opened: new Set(a.value), children: t.value, parents: n.value, event: p });
    k && (a.value = k);
  }, select: (f, d, p) => {
    u.emit("click:select", { id: f, value: d, path: i(f), event: p });
    const k = r.value.select({ id: f, value: d, selected: new Map(s.value), children: t.value, parents: n.value, event: p });
    k && (s.value = k), v.root.openOnSelect(f, d, p);
  }, children: t, parents: n } };
  return ge(Dt, v), v.root;
}, er = (e, l) => {
  const t = ve(Dt, Qo), n = Symbol(We()), a = y(() => e.value !== void 0 ? e.value : n), r = { ...t, id: a, open: (o, s) => t.root.open(a.value, o, s), openOnSelect: (o, s) => t.root.openOnSelect(a.value, o, s), isOpen: y(() => t.root.opened.value.has(a.value)), parent: y(() => t.root.parents.value.get(a.value)), select: (o, s) => t.root.select(a.value, o, s), isSelected: y(() => t.root.selected.value.get(ke(a.value)) === "on"), isIndeterminate: y(() => t.root.selected.value.get(a.value) === "indeterminate"), isLeaf: y(() => !t.root.children.value.get(a.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, l), ot(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), l && ge(Dt, r), r;
}, ei = It({ name: "VListGroupActivator", setup(e, l) {
  let { slots: t } = l;
  return (() => {
    const n = ve(Dt, Qo);
    ge(Dt, { ...n, isGroupActivator: !0 });
  })(), () => {
    var n;
    return (n = t.default) == null ? void 0 : n.call(t);
  };
} }), ti = N({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...re(), ...Ce() }, "VListGroup"), fa = U()({ name: "VListGroup", props: ti(), setup(e, l) {
  let { slots: t } = l;
  const { isOpen: n, open: a, id: r } = er(K(e, "value"), !0), o = y(() => `v-list-group--id-${String(r.value)}`), s = Jo(), { isBooted: i } = function() {
    const p = ue(!1);
    return nt(() => {
      window.requestAnimationFrame(() => {
        p.value = !0;
      });
    }), { ssrBootStyles: y(() => p.value ? void 0 : { transition: "none !important" }), isBooted: ln(p) };
  }();
  function u(p) {
    a(!n.value, p);
  }
  const v = y(() => ({ onClick: u, class: "v-list-group__header", id: o.value })), f = y(() => n.value ? e.collapseIcon : e.expandIcon), d = y(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && f.value, appendIcon: e.appendIcon || !e.subgroup && f.value, title: e.title, value: e.value } }));
  return le(() => c(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style }, { default: () => [t.activator && c(Oe, { defaults: d.value }, { default: () => [c(ei, null, { default: () => [t.activator({ props: v.value, isOpen: n.value })] })] }), c(qe, { transition: { component: ns }, disabled: !i.value }, { default: () => {
    var p;
    return [De(c("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(p = t.default) == null ? void 0 : p.call(t)]), [[bt, n.value]])];
  } })] })), {};
} }), li = Da("v-list-item-subtitle"), ni = Da("v-list-item-title"), ai = N({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Re(), onClickOnce: Re(), ...Ht(), ...re(), ...Ge(), ...St(), ...Gt(), ...Ye(), ...vn(), ...Ce(), ...xe(), ...it({ variant: "text" }) }, "VListItem"), ml = U()({ name: "VListItem", directives: { Ripple: _l }, props: ai(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: a } = l;
  const r = pn(e, t), o = y(() => e.value === void 0 ? r.href.value : e.value), { select: s, isSelected: i, isIndeterminate: u, isGroupActivator: v, root: f, parent: d, openOnSelect: p } = er(o, !1), k = Jo(), m = y(() => {
    var M;
    return e.active !== !1 && (e.active || ((M = r.isActive) == null ? void 0 : M.value) || i.value);
  }), g = y(() => e.link !== !1 && r.isLink.value), b = y(() => !e.disabled && e.link !== !1 && (e.link || r.isClickable.value || e.value != null && !!k)), P = y(() => e.rounded || e.nav), B = y(() => e.color ?? e.activeColor), $ = y(() => ({ color: m.value ? B.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Z(() => {
    var M;
    return (M = r.isActive) == null ? void 0 : M.value;
  }, (M) => {
    M && d.value != null && f.open(d.value, !0), M && p(M);
  }, { immediate: !0 });
  const { themeClasses: w } = _e(e), { borderClasses: V } = zt(e), { colorClasses: C, colorStyles: _, variantClasses: x } = Pl($), { densityClasses: I } = Ke(e), { dimensionStyles: S } = wt(e), { elevationClasses: F } = Kt(e), { roundedClasses: O } = Xe(P), T = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), D = y(() => ({ isActive: m.value, select: s, isSelected: i.value, isIndeterminate: u.value }));
  function A(M) {
    var H;
    a("click", M), !v && b.value && ((H = r.navigate) == null || H.call(r, M), e.value != null && s(!i.value, M));
  }
  function E(M) {
    M.key !== "Enter" && M.key !== " " || (M.preventDefault(), A(M));
  }
  return le(() => {
    const M = g.value ? "a" : e.tag, H = n.title || e.title, W = n.subtitle || e.subtitle, j = !(!e.appendAvatar && !e.appendIcon), L = !(!j && !n.append), R = !(!e.prependAvatar && !e.prependIcon), z = !(!R && !n.prepend);
    var G, ne;
    return k == null || k.updateHasPrepend(z), e.activeColor && (G = "active-color", ne = ["color", "base-color"], ne = Array.isArray(ne) ? ne.slice(0, -1).map((ee) => `'${ee}'`).join(", ") + ` or '${ne.at(-1)}'` : `'${ne}'`, wl(`[Vuetify UPGRADE] '${G}' is deprecated, use ${ne} instead.`)), De(c(M, { class: ["v-list-item", { "v-list-item--active": m.value, "v-list-item--disabled": e.disabled, "v-list-item--link": b.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !z && (k == null ? void 0 : k.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && m.value }, w.value, V.value, C.value, I.value, F.value, T.value, O.value, x.value, e.class], style: [_.value, S.value, e.style], href: r.href.value, tabindex: b.value ? k ? -2 : 0 : void 0, onClick: A, onKeydown: b.value && !g.value && E }, { default: () => {
      var ee;
      return [Bl(b.value || m.value, "v-list-item"), z && c("div", { key: "prepend", class: "v-list-item__prepend" }, [n.prepend ? c(Oe, { key: "prepend-defaults", disabled: !R, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var J;
        return [(J = n.prepend) == null ? void 0 : J.call(n, D.value)];
      } }) : c(ae, null, [e.prependAvatar && c(fl, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && c(he, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), c("div", { class: "v-list-item__spacer" }, null)]), c("div", { class: "v-list-item__content", "data-no-activator": "" }, [H && c(ni, { key: "title" }, { default: () => {
        var J;
        return [((J = n.title) == null ? void 0 : J.call(n, { title: e.title })) ?? e.title];
      } }), W && c(li, { key: "subtitle" }, { default: () => {
        var J;
        return [((J = n.subtitle) == null ? void 0 : J.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ee = n.default) == null ? void 0 : ee.call(n, D.value)]), L && c("div", { key: "append", class: "v-list-item__append" }, [n.append ? c(Oe, { key: "append-defaults", disabled: !j, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var J;
        return [(J = n.append) == null ? void 0 : J.call(n, D.value)];
      } }) : c(ae, null, [e.appendIcon && c(he, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && c(fl, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), c("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[at("ripple"), b.value && e.ripple]]);
  }), {};
} }), oi = N({ color: String, inset: Boolean, sticky: Boolean, title: String, ...re(), ...Ce() }, "VListSubheader"), ri = U()({ name: "VListSubheader", props: oi(), setup(e, l) {
  let { slots: t } = l;
  const { textColorClasses: n, textColorStyles: a } = He(K(e, "color"));
  return le(() => {
    const r = !(!t.default && !e.title);
    return c(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var o;
      return [r && c("div", { class: "v-list-subheader__text" }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])];
    } });
  }), {};
} }), si = N({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...re(), ...xe() }, "VDivider"), ii = U()({ name: "VDivider", props: si(), setup(e, l) {
  let { attrs: t } = l;
  const { themeClasses: n } = _e(e), { textColorClasses: a, textColorStyles: r } = He(K(e, "color")), o = y(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = X(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = X(e.thickness)), s;
  });
  return le(() => c("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, n.value, a.value, e.class], style: [o.value, r.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), ui = N({ items: Array, returnObject: Boolean }, "VListChildren"), tr = U()({ name: "VListChildren", props: ui(), setup(e, l) {
  let { slots: t } = l;
  return Xo(), () => {
    var n, a;
    return ((n = t.default) == null ? void 0 : n.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((r) => {
      var p, k;
      let { children: o, props: s, type: i, raw: u } = r;
      if (i === "divider")
        return ((p = t.divider) == null ? void 0 : p.call(t, { props: s })) ?? c(ii, s, null);
      if (i === "subheader")
        return ((k = t.subheader) == null ? void 0 : k.call(t, { props: s })) ?? c(ri, s, null);
      const v = { subtitle: t.subtitle ? (m) => {
        var g;
        return (g = t.subtitle) == null ? void 0 : g.call(t, { ...m, item: u });
      } : void 0, prepend: t.prepend ? (m) => {
        var g;
        return (g = t.prepend) == null ? void 0 : g.call(t, { ...m, item: u });
      } : void 0, append: t.append ? (m) => {
        var g;
        return (g = t.append) == null ? void 0 : g.call(t, { ...m, item: u });
      } : void 0, title: t.title ? (m) => {
        var g;
        return (g = t.title) == null ? void 0 : g.call(t, { ...m, item: u });
      } : void 0 }, [f, d] = fa.filterProps(s);
      return o ? c(fa, Q({ value: s == null ? void 0 : s.value }, f), { activator: (m) => {
        let { props: g } = m;
        const b = { ...s, ...g, value: e.returnObject ? u : s.value };
        return t.header ? t.header({ props: b }) : c(ml, b, v);
      }, default: () => c(tr, { items: o }, t) }) : t.item ? t.item({ props: s }) : c(ml, Q(s, { value: e.returnObject ? u : s.value }), v);
    }));
  };
} }), lr = N({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: rt } }, "list-items");
function Ql(e, l) {
  const t = Pe(l, e.itemTitle, l), n = Pe(l, e.itemValue, t), a = Pe(l, e.itemChildren), r = { title: t, value: n, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? mt(l, ["children"])[1] : l : Pe(l, e.itemProps) };
  return { title: String(r.title ?? ""), value: r.value, props: r, children: Array.isArray(a) ? nr(e, a) : void 0, raw: l };
}
function nr(e, l) {
  const t = [];
  for (const n of l)
    t.push(Ql(e, n));
  return t;
}
function ci(e, l) {
  const t = Pe(l, e.itemType, "item"), n = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : Pe(l, e.itemTitle), a = Pe(l, e.itemValue, void 0), r = Pe(l, e.itemChildren), o = { title: n, value: a, ...e.itemProps === !0 ? mt(l, ["children"])[1] : Pe(l, e.itemProps) };
  return { type: t, title: o.title, value: o.value, props: o, children: t === "item" && r ? ar(e, r) : void 0, raw: l };
}
function ar(e, l) {
  const t = [];
  for (const n of l)
    t.push(ci(e, n));
  return t;
}
const di = N({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...Zs({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ht(), ...re(), ...Ge(), ...St(), ...Gt(), itemType: { type: String, default: "type" }, ...lr(), ...Ye(), ...Ce(), ...xe(), ...it({ variant: "text" }) }, "VList"), pi = U()({ name: "VList", props: di(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { items: n } = function(x) {
    return { items: y(() => ar(x, x.items)) };
  }(e), { themeClasses: a } = _e(e), { backgroundColorClasses: r, backgroundColorStyles: o } = lt(K(e, "bgColor")), { borderClasses: s } = zt(e), { densityClasses: i } = Ke(e), { dimensionStyles: u } = wt(e), { elevationClasses: v } = Kt(e), { roundedClasses: f } = Xe(e), { open: d, select: p } = Qs(e), k = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), m = K(e, "activeColor"), g = K(e, "baseColor"), b = K(e, "color");
  Xo(), st({ VListGroup: { activeColor: m, baseColor: g, color: b }, VListItem: { activeClass: K(e, "activeClass"), activeColor: m, baseColor: g, color: b, density: K(e, "density"), disabled: K(e, "disabled"), lines: K(e, "lines"), nav: K(e, "nav"), variant: K(e, "variant") } });
  const P = ue(!1), B = q();
  function $(x) {
    P.value = !0;
  }
  function w(x) {
    P.value = !1;
  }
  function V(x) {
    var I;
    P.value || x.relatedTarget && ((I = B.value) != null && I.contains(x.relatedTarget)) || _();
  }
  function C(x) {
    if (B.value) {
      if (x.key === "ArrowDown")
        _("next");
      else if (x.key === "ArrowUp")
        _("prev");
      else if (x.key === "Home")
        _("first");
      else {
        if (x.key !== "End")
          return;
        _("last");
      }
      x.preventDefault();
    }
  }
  function _(x) {
    if (B.value)
      return ol(B.value, x);
  }
  return le(() => c(e.tag, { ref: B, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, r.value, s.value, i.value, v.value, k.value, f.value, e.class], style: [o.value, u.value, e.style], tabindex: e.disabled || P.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: $, onFocusout: w, onFocus: V, onKeydown: C }, { default: () => [c(tr, { items: n.value, returnObject: e.returnObject }, t)] })), { open: d, select: p, focus: _ };
} }), vi = N({ id: String, ...Rt(Xa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Wa } }), ["absolute"]) }, "VMenu"), fi = U()({ name: "VMenu", props: vi(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { scopeId: a } = Ua(), r = We(), o = y(() => e.id || `v-menu-${r}`), s = q(), i = ve(Ul, null), u = ue(0);
  async function v(m) {
    var P, B, $;
    const g = m.relatedTarget, b = m.target;
    await Ee(), n.value && g !== b && ((P = s.value) != null && P.contentEl) && ((B = s.value) != null && B.globalTop) && ![document, s.value.contentEl].includes(b) && !s.value.contentEl.contains(b) && (($ = zl(s.value.contentEl)[0]) == null || $.focus());
  }
  function f() {
    i == null || i.closeParents();
  }
  function d(m) {
    var g, b, P;
    !e.disabled && m.key === "Tab" && (Ia(zl((g = s.value) == null ? void 0 : g.contentEl, !1), m.shiftKey ? "prev" : "next", (B) => B.tabIndex >= 0) || (n.value = !1, (P = (b = s.value) == null ? void 0 : b.activatorEl) == null || P.focus()));
  }
  function p(m) {
    var b;
    if (e.disabled)
      return;
    const g = (b = s.value) == null ? void 0 : b.contentEl;
    g && n.value ? m.key === "ArrowDown" ? (m.preventDefault(), ol(g, "next")) : m.key === "ArrowUp" && (m.preventDefault(), ol(g, "prev")) : ["ArrowDown", "ArrowUp"].includes(m.key) && (n.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => p(m))));
  }
  ge(Ul, { register() {
    ++u.value;
  }, unregister() {
    --u.value;
  }, closeParents() {
    setTimeout(() => {
      u.value || (n.value = !1, i == null || i.closeParents());
    }, 40);
  } }), Z(n, (m) => {
    m ? (i == null || i.register(), document.addEventListener("focusin", v, { once: !0 })) : (i == null || i.unregister(), document.removeEventListener("focusin", v));
  });
  const k = y(() => Q({ "aria-haspopup": "menu", "aria-expanded": String(n.value), "aria-owns": o.value, onKeydown: p }, e.activatorProps));
  return le(() => {
    const [m] = la.filterProps(e);
    return c(la, Q({ ref: s, class: ["v-menu", e.class], style: e.style }, m, { modelValue: n.value, "onUpdate:modelValue": (g) => n.value = g, absolute: !0, activatorProps: k.value, "onClick:outside": f, onKeydown: d }, a), { activator: t.activator, default: function() {
      for (var g = arguments.length, b = new Array(g), P = 0; P < g; P++)
        b[P] = arguments[P];
      return c(Oe, { root: "VMenu" }, { default: () => {
        var B;
        return [(B = t.default) == null ? void 0 : B.call(t, ...b)];
      } });
    } });
  }), fn({ id: o, ΨopenChildren: u }, s);
} }), mi = N({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...re(), ...Wt({ transition: { component: Ha } }) }, "VCounter"), gi = U()({ name: "VCounter", functional: !0, props: mi(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => c(qe, { transition: e.transition }, { default: () => [De(c("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: n.value, max: e.max, value: e.value }) : n.value]), [[bt, e.active]])] })), {};
} }), yi = N({ floating: Boolean, ...re() }, "VFieldLabel"), Qt = U()({ name: "VFieldLabel", props: yi(), setup(e, l) {
  let { slots: t } = l;
  return le(() => c(No, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), hi = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], or = N({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => hi.includes(e) }, "onClick:clear": Re(), "onClick:appendInner": Re(), "onClick:prependInner": Re(), ...re(), ...gn(), ...Ye(), ...xe() }, "VField"), ma = U()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Go(), ...or() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: a } = l;
  const { themeClasses: r } = _e(e), { loaderClasses: o } = yn(e), { focusClasses: s, isFocused: i, focus: u, blur: v } = hn(e), { InputIcon: f } = zo(e), { roundedClasses: d } = Xe(e), { rtlClasses: p } = jt(), k = y(() => e.dirty || e.active), m = y(() => !(e.singleLine || !e.label && !a.label)), g = We(), b = y(() => e.id || `input-${g}`), P = y(() => `${b.value}-messages`), B = q(), $ = q(), w = q(), V = y(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: C, backgroundColorStyles: _ } = lt(K(e, "bgColor")), { textColorClasses: x, textColorStyles: I } = He(y(() => e.error || e.disabled ? void 0 : k.value && i.value ? e.color : e.baseColor));
  Z(k, (O) => {
    if (m.value) {
      const T = B.value.$el, D = $.value.$el;
      requestAnimationFrame(() => {
        const A = sn(T), E = D.getBoundingClientRect(), M = E.x - A.x, H = E.y - A.y - (A.height / 2 - E.height / 2), W = E.width / 0.75, j = Math.abs(W - A.width) > 1 ? { maxWidth: X(W) } : void 0, L = getComputedStyle(T), R = getComputedStyle(D), z = 1e3 * parseFloat(L.transitionDuration) || 150, G = parseFloat(R.getPropertyValue("--v-field-label-scale")), ne = R.getPropertyValue("color");
        T.style.visibility = "visible", D.style.visibility = "hidden", dt(T, { transform: `translate(${M}px, ${H}px) scale(${G})`, color: ne, ...j }, { duration: z, easing: il, direction: O ? "normal" : "reverse" }).finished.then(() => {
          T.style.removeProperty("visibility"), D.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const S = y(() => ({ isActive: k, isFocused: i, controlRef: w, blur: v, focus: u }));
  function F(O) {
    O.target !== document.activeElement && O.preventDefault();
  }
  return le(() => {
    var M, H, W;
    const O = e.variant === "outlined", T = a["prepend-inner"] || e.prependInnerIcon, D = !(!e.clearable && !a.clear), A = !!(a["append-inner"] || e.appendInnerIcon || D), E = a.label ? a.label({ ...S.value, label: e.label, props: { for: b.value } }) : e.label;
    return c("div", Q({ class: ["v-field", { "v-field--active": k.value, "v-field--appended": A, "v-field--center-affix": e.centerAffix ?? !V.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": T, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !E, [`v-field--variant-${e.variant}`]: !0 }, r.value, C.value, s.value, o.value, d.value, p.value, e.class], style: [_.value, e.style], onClick: F }, t), [c("div", { class: "v-field__overlay" }, null), c(Vo, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), T && c("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && c(f, { key: "prepend-icon", name: "prependInner" }, null), (M = a["prepend-inner"]) == null ? void 0 : M.call(a, S.value)]), c("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && c(Qt, { key: "floating-label", ref: $, class: [x.value], floating: !0, for: b.value, style: I.value }, { default: () => [E] }), c(Qt, { ref: B, for: b.value }, { default: () => [E] }), (H = a.default) == null ? void 0 : H.call(a, { ...S.value, props: { id: b.value, class: "v-field__input", "aria-describedby": P.value }, focus: u, blur: v })]), D && c(za, { key: "clear" }, { default: () => [De(c("div", { class: "v-field__clearable", onMousedown: (j) => {
      j.preventDefault(), j.stopPropagation();
    } }, [a.clear ? a.clear() : c(f, { name: "clear" }, null)]), [[bt, e.dirty]])] }), A && c("div", { key: "append", class: "v-field__append-inner" }, [(W = a["append-inner"]) == null ? void 0 : W.call(a, S.value), e.appendInnerIcon && c(f, { key: "append-icon", name: "appendInner" }, null)]), c("div", { class: ["v-field__outline", x.value], style: I.value }, [O && c(ae, null, [c("div", { class: "v-field__outline__start" }, null), m.value && c("div", { class: "v-field__outline__notch" }, [c(Qt, { ref: $, floating: !0, for: b.value }, { default: () => [E] })]), c("div", { class: "v-field__outline__end" }, null)]), V.value && m.value && c(Qt, { ref: $, floating: !0, for: b.value }, { default: () => [E] })])]);
  }), { controlRef: w };
} }), bi = ["color", "file", "time", "date", "datetime-local", "week", "month"], rr = N({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...bn(), ...or() }, "VTextField"), en = U()({ name: "VTextField", directives: { Intersect: Uo }, inheritAttrs: !1, props: rr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: a } = l;
  const r = fe(e, "modelValue"), { isFocused: o, focus: s, blur: i } = hn(e), u = y(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : typeof e.counterValue == "number" ? e.counterValue : (r.value ?? "").toString().length), v = y(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), f = y(() => ["plain", "underlined"].includes(e.variant));
  function d(V, C) {
    var _, x;
    e.autofocus && V && ((x = (_ = C[0].target) == null ? void 0 : _.focus) == null || x.call(_));
  }
  const p = q(), k = q(), m = q(), g = y(() => bi.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
  function b() {
    var V;
    m.value !== document.activeElement && ((V = m.value) == null || V.focus()), o.value || s();
  }
  function P(V) {
    n("mousedown:control", V), V.target !== m.value && (b(), V.preventDefault());
  }
  function B(V) {
    b(), n("click:control", V);
  }
  function $(V) {
    V.stopPropagation(), b(), Ee(() => {
      r.value = null, function(C) {
        for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), I = 1; I < _; I++)
          x[I - 1] = arguments[I];
        if (Array.isArray(C))
          for (const S of C)
            S(...x);
        else
          typeof C == "function" && C(...x);
      }(e["onClick:clear"], V);
    });
  }
  function w(V) {
    var _;
    const C = V.target;
    if (r.value = C.value, ((_ = e.modelModifiers) == null ? void 0 : _.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const x = [C.selectionStart, C.selectionEnd];
      Ee(() => {
        C.selectionStart = x[0], C.selectionEnd = x[1];
      });
    }
  }
  return le(() => {
    const V = !!(a.counter || e.counter || e.counterValue), C = !(!V && !a.details), [_, x] = on(t), [{ modelValue: I, ...S }] = vl.filterProps(e), [F] = function(O) {
      return mt(O, Object.keys(ma.props).filter((T) => !Hl(T) && T !== "class" && T !== "style"));
    }(e);
    return c(vl, Q({ ref: p, modelValue: r.value, "onUpdate:modelValue": (O) => r.value = O, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, _, S, { centerAffix: !f.value, focused: o.value }), { ...a, default: (O) => {
      let { id: T, isDisabled: D, isDirty: A, isReadonly: E, isValid: M } = O;
      return c(ma, Q({ ref: k, onMousedown: P, onClick: B, "onClick:clear": $, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, F, { id: T.value, active: g.value || A.value, dirty: A.value || e.dirty, disabled: D.value, focused: o.value, error: M.value === !1 }), { ...a, default: (H) => {
        let { props: { class: W, ...j } } = H;
        const L = De(c("input", Q({ ref: m, value: r.value, onInput: w, autofocus: e.autofocus, readonly: E.value, disabled: D.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: b, onBlur: i }, j, x), null), [[at("intersect"), { handler: d }, null, { once: !0 }]]);
        return c(ae, null, [e.prefix && c("span", { class: "v-text-field__prefix" }, [c("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? c("div", { class: W, "data-no-activator": "" }, [a.default(), L]) : Lr(L, { class: W }), e.suffix && c("span", { class: "v-text-field__suffix" }, [c("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: C ? (O) => {
      var T;
      return c(ae, null, [(T = a.details) == null ? void 0 : T.call(a, O), V && c(ae, null, [c("span", null, null), c(gi, { active: e.persistentCounter || o.value, value: u.value, max: v.value }, a.counter)])]);
    } : void 0 });
  }), fn({}, p, k, m);
} }), Si = N({ renderless: Boolean, ...re() }, "VVirtualScrollItem"), wi = U()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Si(), emits: { "update:height": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: a } = l;
  const { resizeRef: r, contentRect: o } = mn(void 0, "border");
  Z(() => {
    var s;
    return (s = o.value) == null ? void 0 : s.height;
  }, (s) => {
    s != null && n("update:height", s);
  }), le(() => {
    var s, i;
    return e.renderless ? c(ae, null, [(s = a.default) == null ? void 0 : s.call(a, { itemRef: r })]) : c("div", Q({ ref: r, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(i = a.default) == null ? void 0 : i.call(a)]);
  });
} }), xi = N({ itemHeight: { type: [Number, String], default: 48 } }, "virtual");
function ki(e, l, t) {
  const n = ue(0), a = ue(e.itemHeight), r = y({ get: () => parseInt(a.value ?? 0, 10), set(B) {
    a.value = B;
  } }), o = q(), { resizeRef: s, contentRect: i } = mn();
  je(() => {
    s.value = o.value;
  });
  const u = Ka(), v = /* @__PURE__ */ new Map();
  let f = Array.from({ length: l.value.length });
  const d = y(() => {
    const B = (i.value && o.value !== document.documentElement ? i.value.height : u.height.value) - ((t == null ? void 0 : t.value) ?? 0);
    return Math.ceil(B / r.value * 1.7 + 1);
  });
  function p(B) {
    return f.slice(0, B).reduce(($, w) => $ + (w || r.value), 0);
  }
  let k = 0;
  const m = y(() => Math.min(l.value.length, n.value + d.value)), g = y(() => l.value.slice(n.value, m.value).map((B, $) => ({ raw: B, index: $ + n.value }))), b = y(() => p(n.value)), P = y(() => p(l.value.length) - p(m.value));
  return Z(() => l.value.length, () => {
    f = Rl(l.value.length).map(() => r.value), v.forEach((B, $) => {
      const w = l.value.indexOf($);
      w === -1 ? v.delete($) : f[w] = B;
    });
  }), { containerRef: o, computedItems: g, itemHeight: r, paddingTop: b, paddingBottom: P, scrollToIndex: function(B) {
    if (!o.value)
      return;
    const $ = p(B);
    o.value.scrollTop = $;
  }, handleScroll: function() {
    if (!o.value || !i.value)
      return;
    const B = i.value.height - 56, $ = o.value.scrollTop, w = $ < k ? -1 : 1, V = function(I) {
      const S = l.value.length;
      let F = 0, O = 0;
      for (; O < I && F < S; )
        O += f[F++] || r.value;
      return F - 1;
    }($ + B / 2), C = Math.round(d.value / 3), _ = V - C, x = n.value + 2 * C - 1;
    w === -1 && V <= x ? n.value = Ze(_, 0, l.value.length) : w === 1 && V >= x && (n.value = Ze(_, 0, l.value.length - d.value)), k = $;
  }, handleItemResize: function(B, $) {
    r.value = Math.max(r.value, $), f[B] = $, v.set(l.value[B], $);
  } };
}
const Ci = N({ items: { type: Array, default: () => [] }, renderless: Boolean, ...xi(), ...re(), ...St() }, "VVirtualScroll"), Bi = U()({ name: "VVirtualScroll", props: Ci(), setup(e, l) {
  let { slots: t } = l;
  const n = we("VVirtualScroll"), { dimensionStyles: a } = wt(e), { containerRef: r, handleScroll: o, handleItemResize: s, scrollToIndex: i, paddingTop: u, paddingBottom: v, computedItems: f } = ki(e, K(e, "items"));
  return et(() => e.renderless, () => {
    nt(() => {
      var d;
      r.value = Na(n.vnode.el, !0), (d = r.value) == null || d.addEventListener("scroll", o);
    }), Be(() => {
      var d;
      (d = r.value) == null || d.removeEventListener("scroll", o);
    });
  }), le(() => {
    const d = f.value.map((p) => c(wi, { key: p.index, renderless: e.renderless, "onUpdate:height": (k) => s(p.index, k) }, { default: (k) => {
      var m;
      return (m = t.default) == null ? void 0 : m.call(t, { item: p.raw, index: p.index, ...k });
    } }));
    return e.renderless ? c(ae, null, [c("div", { class: "v-virtual-scroll__spacer", style: { paddingTop: X(u.value) } }, null), d, c("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: X(v.value) } }, null)]) : c("div", { ref: r, class: ["v-virtual-scroll", e.class], onScroll: o, style: [a.value, e.style] }, [c("div", { class: "v-virtual-scroll__container", style: { paddingTop: X(u.value), paddingBottom: X(v.value) } }, [d])]);
  }), { scrollToIndex: i };
} });
function Pi(e, l) {
  const t = ue(!1);
  let n;
  return { onListScroll: function(a) {
    cancelAnimationFrame(n), t.value = !0, n = requestAnimationFrame(() => {
      n = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }, onListKeydown: async function(a) {
    var s, i;
    if (a.key === "Tab" && ((s = l.value) == null || s.focus()), !["PageDown", "PageUp", "Home", "End"].includes(a.key))
      return;
    const r = (i = e.value) == null ? void 0 : i.$el;
    if (!r)
      return;
    a.key !== "Home" && a.key !== "End" || r.scrollTo({ top: a.key === "Home" ? 0 : r.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => {
        if (t.value) {
          const v = Z(t, () => {
            v(), u();
          });
        } else
          u();
      });
    }();
    const o = r.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const u = r.getBoundingClientRect().top;
      for (const v of o)
        if (v.getBoundingClientRect().top >= u) {
          v.focus();
          break;
        }
    } else {
      const u = r.getBoundingClientRect().bottom;
      for (const v of [...o].reverse())
        if (v.getBoundingClientRect().bottom <= u) {
          v.focus();
          break;
        }
    }
  } };
}
const _i = N({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...lr({ itemChildren: !1 }) }, "Select"), Ai = N({ ..._i(), ...Rt(rr({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Wt({ transition: { component: Wa } }) }, "VSelect"), Fi = U()({ name: "VSelect", props: Ai(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { t: n } = xt(), a = q(), r = q(), o = q(), s = fe(e, "menu"), i = y({ get: () => s.value, set: (A) => {
    var E;
    s.value && !A && ((E = r.value) != null && E.ΨopenChildren) || (s.value = A);
  } }), { items: u, transformIn: v, transformOut: f } = function(A) {
    const E = y(() => nr(A, A.items)), M = y(() => E.value.some((H) => H.value === null));
    return { items: E, transformIn: function(H) {
      return M.value || (H = H.filter((W) => W !== null)), H.map((W) => A.returnObject && typeof W == "string" ? Ql(A, W) : E.value.find((j) => A.valueComparator(W, j.value)) || Ql(A, W));
    }, transformOut: function(H) {
      return A.returnObject ? H.map((W) => {
        let { raw: j } = W;
        return j;
      }) : H.map((W) => {
        let { value: j } = W;
        return j;
      });
    } };
  }(e), d = fe(e, "modelValue", [], (A) => v(A === null ? [null] : Ve(A)), (A) => {
    const E = f(A);
    return e.multiple ? E : E[0] ?? null;
  }), p = Ko(), k = y(() => d.value.map((A) => A.value)), m = ue(!1), g = y(() => i.value ? e.closeText : e.openText);
  let b, P = "";
  const B = y(() => e.hideSelected ? u.value.filter((A) => !d.value.some((E) => E === A)) : u.value), $ = y(() => e.hideNoData && !u.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), w = q(), { onListScroll: V, onListKeydown: C } = Pi(w, a);
  function _(A) {
    e.openOnClear && (i.value = !0);
  }
  function x() {
    $.value || (i.value = !i.value);
  }
  function I(A) {
    var H, W;
    if (!A.key || e.readonly || p != null && p.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(A.key) && A.preventDefault(), ["Enter", "ArrowDown", " "].includes(A.key) && (i.value = !0), ["Escape", "Tab"].includes(A.key) && (i.value = !1), A.key === "Home" ? (H = w.value) == null || H.focus("first") : A.key === "End" && ((W = w.value) == null || W.focus("last")), e.multiple || !function(j) {
      const L = j.key.length === 1, R = !j.ctrlKey && !j.metaKey && !j.altKey;
      return L && R;
    }(A)))
      return;
    const E = performance.now();
    E - b > 1e3 && (P = ""), P += A.key.toLowerCase(), b = E;
    const M = u.value.find((j) => j.title.toLowerCase().startsWith(P));
    M !== void 0 && (d.value = [M]);
  }
  function S(A) {
    if (e.multiple) {
      const E = d.value.findIndex((M) => e.valueComparator(M.value, A.value));
      if (E === -1)
        d.value = [...d.value, A];
      else {
        const M = [...d.value];
        M.splice(E, 1), d.value = M;
      }
    } else
      d.value = [A], i.value = !1;
  }
  function F(A) {
    var E;
    (E = w.value) != null && E.$el.contains(A.relatedTarget) || (i.value = !1);
  }
  function O() {
    var A;
    m.value && ((A = a.value) == null || A.focus());
  }
  function T(A) {
    m.value = !0;
  }
  function D(A) {
    if (A == null)
      d.value = [];
    else if (rl(a.value, ":autofill") || rl(a.value, ":-webkit-autofill")) {
      const E = u.value.find((M) => M.title === A);
      E && S(E);
    } else
      a.value && (a.value.value = "");
  }
  return Z(i, () => {
    if (!e.hideSelected && i.value && d.value.length) {
      const A = B.value.findIndex((E) => d.value.some((M) => e.valueComparator(M.value, E.value)));
      Te && window.requestAnimationFrame(() => {
        var E;
        A >= 0 && ((E = o.value) == null || E.scrollToIndex(A));
      });
    }
  }), le(() => {
    const A = !(!e.chips && !t.chip), E = !!(!e.hideNoData || B.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), M = d.value.length > 0, [H] = en.filterProps(e), W = M || !m.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return c(en, Q({ ref: a }, H, { modelValue: d.value.map((j) => j.props.value).join(", "), "onUpdate:modelValue": D, focused: m.value, "onUpdate:focused": (j) => m.value = j, validationValue: d.externalValue, counterValue: d.value.length, dirty: M, class: ["v-select", { "v-select--active-menu": i.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": d.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, inputmode: "none", placeholder: W, "onClick:clear": _, "onMousedown:control": x, onBlur: F, onKeydown: I, "aria-label": n(g.value), title: n(g.value) }), { ...t, default: () => c(ae, null, [c(fi, Q({ ref: r, modelValue: i.value, "onUpdate:modelValue": (j) => i.value = j, activator: "parent", contentClass: "v-select__content", disabled: $.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: O }, e.menuProps), { default: () => [E && c(pi, { ref: w, selected: k.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (j) => j.preventDefault(), onKeydown: C, onFocusin: T, onScrollPassive: V, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var j, L, R;
      return [(j = t["prepend-item"]) == null ? void 0 : j.call(t), !B.value.length && !e.hideNoData && (((L = t["no-data"]) == null ? void 0 : L.call(t)) ?? c(ml, { title: n(e.noDataText) }, null)), c(Bi, { ref: o, renderless: !0, items: B.value }, { default: (z) => {
        var oe;
        let { item: G, index: ne, itemRef: ee } = z;
        const J = Q(G.props, { ref: ee, key: ne, onClick: () => S(G) });
        return ((oe = t.item) == null ? void 0 : oe.call(t, { item: G, index: ne, props: J })) ?? c(ml, J, { prepend: (be) => {
          let { isSelected: kt } = be;
          return c(ae, null, [e.multiple && !e.hideSelected ? c(gt, { key: G.value, modelValue: kt, ripple: !1, tabindex: "-1" }, null) : void 0, G.props.prependIcon && c(he, { icon: G.props.prependIcon }, null)]);
        } });
      } }), (R = t["append-item"]) == null ? void 0 : R.call(t)];
    } })] }), d.value.map((j, L) => {
      var z;
      const R = { "onClick:close": function(G) {
        G.stopPropagation(), G.preventDefault(), S(j);
      }, onMousedown(G) {
        G.preventDefault(), G.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return c("div", { key: j.value, class: "v-select__selection" }, [A ? t.chip ? c(Oe, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: j.title } } }, { default: () => {
        var G;
        return [(G = t.chip) == null ? void 0 : G.call(t, { item: j, index: L, props: R })];
      } }) : c(Ys, Q({ key: "chip", closable: e.closableChips, size: "small", text: j.title, disabled: j.props.disabled }, R), null) : ((z = t.selection) == null ? void 0 : z.call(t, { item: j, index: L })) ?? c("span", { class: "v-select__selection-text" }, [j.title, e.multiple && L < d.value.length - 1 && c("span", { class: "v-select__selection-comma" }, [nl(",")])])]);
    })]), "append-inner": function() {
      var z;
      for (var j = arguments.length, L = new Array(j), R = 0; R < j; R++)
        L[R] = arguments[R];
      return c(ae, null, [(z = t["append-inner"]) == null ? void 0 : z.call(t, ...L), e.menuIcon ? c(he, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), fn({ isFocused: m, menu: i, select: S }, a);
} }), wn = N({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), gl = U()({ name: "VDataTableFooter", props: wn(), setup(e, l) {
  let { slots: t } = l;
  const { t: n } = xt(), { page: a, pageCount: r, startIndex: o, stopIndex: s, itemsLength: i, itemsPerPage: u, setItemsPerPage: v } = function() {
    const d = ve(uo);
    if (!d)
      throw new Error("Missing pagination!");
    return d;
  }(), f = y(() => e.itemsPerPageOptions.map((d) => ({ ...d, title: n(d.title) })));
  return () => {
    var d;
    return c("div", { class: "v-data-table-footer" }, [(d = t.prepend) == null ? void 0 : d.call(t), c("div", { class: "v-data-table-footer__items-per-page" }, [c("span", null, [n(e.itemsPerPageText)]), c(Fi, { items: f.value, modelValue: u.value, "onUpdate:modelValue": (p) => v(Number(p)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), c("div", { class: "v-data-table-footer__info" }, [c("div", null, [n(e.pageText, i.value ? o.value + 1 : 0, s.value, i.value)])]), c("div", { class: "v-data-table-footer__pagination" }, [c(pt, { icon: e.firstIcon, variant: "plain", onClick: () => a.value = 1, disabled: a.value === 1, "aria-label": n(e.firstPageLabel) }, null), c(pt, { icon: e.prevIcon, variant: "plain", onClick: () => a.value = Math.max(1, a.value - 1), disabled: a.value === 1, "aria-label": n(e.prevPageLabel) }, null), e.showCurrentPage && c("span", { key: "page", class: "v-data-table-footer__page" }, [a.value]), c(pt, { icon: e.nextIcon, variant: "plain", onClick: () => a.value = Math.min(r.value, a.value + 1), disabled: a.value === r.value, "aria-label": n(e.nextPageLabel) }, null), c(pt, { icon: e.lastIcon, variant: "plain", onClick: () => a.value = r.value, disabled: a.value === r.value, "aria-label": n(e.lastPageLabel) }, null)])]);
  };
} }), xn = (ga = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Ll = (e, l) => {
  let { slots: t, attrs: n } = l;
  const a = e.tag ?? "td";
  return c(a, Q({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: X(e.height), width: X(e.width), left: X(e.fixedOffset || null) } }, n), { default: () => {
    var r;
    return [(r = t.default) == null ? void 0 : r.call(t)];
  } });
}, Ll.props = ga, Ll);
var ga, Ll;
const $i = N({ headers: { type: Array, default: () => [] } }, "DataTable-header"), sr = Symbol.for("vuetify:data-table-headers");
function ir(e, l) {
  const t = q([]), n = q([]);
  je(() => {
    var p, k, m;
    const r = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], o = r.flatMap((g, b) => g.map((P) => ({ column: P, row: b }))), s = r.length, i = { title: "", sortable: !1 }, u = { ...i, width: 48 };
    if ((p = l == null ? void 0 : l.groupBy) != null && p.value.length) {
      const g = o.findIndex((b) => {
        let { column: P } = b;
        return P.key === "data-table-group";
      });
      g < 0 ? o.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : o.splice(g, 1, { column: { ...i, ...o[g].column }, row: o[g].row });
    }
    if ((k = l == null ? void 0 : l.showSelect) != null && k.value) {
      const g = o.findIndex((b) => {
        let { column: P } = b;
        return P.key === "data-table-select";
      });
      g < 0 ? o.unshift({ column: { ...u, key: "data-table-select", rowspan: s }, row: 0 }) : o.splice(g, 1, { column: { ...u, ...o[g].column }, row: o[g].row });
    }
    if ((m = l == null ? void 0 : l.showExpand) != null && m.value) {
      const g = o.findIndex((b) => {
        let { column: P } = b;
        return P.key === "data-table-expand";
      });
      g < 0 ? o.push({ column: { ...u, key: "data-table-expand", rowspan: s }, row: 0 }) : o.splice(g, 1, { column: { ...u, ...o[g].column }, row: o[g].row });
    }
    const v = Rl(s).map(() => []), f = Rl(s).fill(0);
    o.forEach((g) => {
      let { column: b, row: P } = g;
      const B = b.key ?? (typeof b.value == "string" ? b.value : null), $ = b.value ?? b.key ?? null;
      for (let w = P; w <= P + (b.rowspan ?? 1) - 1; w++)
        v[w].push({ ...b, key: B, value: $, fixedOffset: f[w], sortable: b.sortable ?? B != null }), f[w] += Number(b.width ?? 0);
    }), v.forEach((g) => {
      for (let b = g.length; b--; b >= 0)
        if (g[b].fixed)
          return void (g[b].lastFixed = !0);
    });
    const d = /* @__PURE__ */ new Set();
    t.value = v.map((g) => {
      const b = [];
      for (const P of g)
        d.has(P.key) || (d.add(P.key), b.push(P));
      return b;
    }), n.value = v.at(-1) ?? [];
  });
  const a = { headers: t, columns: n };
  return ge(sr, a), a;
}
function Al() {
  const e = ve(sr);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const ur = N({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...gn() }, "VDataTableHeaders"), yl = U()({ name: "VDataTableHeaders", props: ur(), setup(e, l) {
  let { slots: t, emit: n } = l;
  const { toggleSort: a, sortBy: r, isSorted: o } = function() {
    const $ = ve(yo);
    if (!$)
      throw new Error("Missing sort!");
    return $;
  }(), { someSelected: s, allSelected: i, selectAll: u, showSelectAll: v } = Cl(), { columns: f, headers: d } = Al(), { loaderClasses: p } = yn(e), k = ($, w) => {
    if (e.sticky || $.fixed)
      return { position: "sticky", zIndex: $.fixed ? 4 : e.sticky ? 3 : void 0, left: $.fixed ? X($.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${w})` : void 0 };
  };
  function m($) {
    const w = r.value.find((V) => V.key === $.key);
    return w ? w.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: g, backgroundColorStyles: b } = lt(e, "color"), P = y(() => ({ headers: d.value, columns: f.value, toggleSort: a, isSorted: o, sortBy: r.value, someSelected: s.value, allSelected: i.value, selectAll: u, getSortIcon: m, getFixedStyles: k })), B = ($) => {
    let { column: w, x: V, y: C } = $;
    const _ = w.key === "data-table-select" || w.key === "data-table-expand";
    return c(xn, { tag: "th", align: w.align, class: ["v-data-table__th", { "v-data-table__th--sortable": w.sortable, "v-data-table__th--sorted": o(w) }, p.value], style: { width: X(w.width), minWidth: X(w.width), ...k(w, C) }, colspan: w.colspan, rowspan: w.rowspan, onClick: w.sortable ? () => a(w) : void 0, lastFixed: w.lastFixed, noPadding: _ }, { default: () => {
      var S;
      const x = `column.${w.key}`, I = { column: w, selectAll: u, isSorted: o, toggleSort: a, sortBy: r.value, someSelected: s.value, allSelected: i.value, getSortIcon: m };
      return t[x] ? t[x](I) : w.key === "data-table-select" ? ((S = t["column.data-table-select"]) == null ? void 0 : S.call(t, I)) ?? (v && c(gt, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": u }, null)) : c("div", { class: "v-data-table-header__content" }, [c("span", null, [w.title]), w.sortable && c(he, { key: "icon", class: "v-data-table-header__sort-icon", icon: m(w) }, null), e.multiSort && o(w) && c("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...g.value], style: b.value }, [r.value.findIndex((F) => F.key === w.key) + 1])]);
    } });
  };
  le(() => c(ae, null, [t.headers ? t.headers(P.value) : d.value.map(($, w) => c("tr", null, [$.map((V, C) => c(B, { column: V, x: C, y: w }, null))])), e.loading && c("tr", { class: "v-data-table-progress" }, [c("th", { colspan: f.value.length }, [c(Vo, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), Vi = N({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), Ei = U()({ name: "VDataTableGroupHeaderRow", props: Vi(), setup(e, l) {
  let { slots: t } = l;
  const { isGroupOpen: n, toggleGroup: a, extractRows: r } = no(), { isSelected: o, isSomeSelected: s, select: i } = Cl(), { columns: u } = Al(), v = y(() => r([e.item]));
  return () => c("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var d, p;
    if (f.key === "data-table-group") {
      const k = n(e.item) ? "$expand" : "$next", m = () => a(e.item);
      return ((d = t["data-table-group"]) == null ? void 0 : d.call(t, { item: e.item, count: v.value.length, props: { icon: k, onClick: m } })) ?? c(xn, { class: "v-data-table-group-header-row__column" }, { default: () => [c(pt, { size: "small", variant: "text", icon: k, onClick: m }, null), c("span", null, [e.item.value]), c("span", null, [nl("("), v.value.length, nl(")")])] });
    }
    if (f.key === "data-table-select") {
      const k = o(v.value), m = s(v.value) && !k, g = (b) => i(v.value, b);
      return ((p = t["data-table-select"]) == null ? void 0 : p.call(t, { props: { modelValue: k, indeterminate: m, "onUpdate:modelValue": g } })) ?? c("td", null, [c(gt, { modelValue: k, indeterminate: m, "onUpdate:modelValue": g }, null)]);
    }
    return c("td", null, null);
  })]);
} }), Ii = N({ index: Number, item: Object, onClick: Function }, "VDataTableRow"), Ti = U()({ name: "VDataTableRow", props: Ii(), setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, toggleSelect: a } = Cl(), { isExpanded: r, toggleExpand: o } = Qa(), { columns: s } = Al();
  le(() => c("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, u) => c(xn, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var p, k;
    const v = e.item, f = `item.${i.key}`, d = { index: e.index, item: v.raw, internalItem: v, value: Vt(v.columns, i.key), column: i, isSelected: n, toggleSelect: a, isExpanded: r, toggleExpand: o };
    return t[f] ? t[f](d) : i.key === "data-table-select" ? ((p = t["item.data-table-select"]) == null ? void 0 : p.call(t, d)) ?? c(gt, { disabled: !v.selectable, modelValue: n([v]), onClick: Nl(() => a(v), ["stop"]) }, null) : i.key === "data-table-expand" ? ((k = t["item.data-table-expand"]) == null ? void 0 : k.call(t, d)) ?? c(pt, { icon: r(v) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: Nl(() => o(v), ["stop"]) }, null) : Aa(d.value);
  } }))]));
} }), cr = N({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), hl = U()({ name: "VDataTableRows", props: cr(), setup(e, l) {
  let { emit: t, slots: n } = l;
  const { columns: a } = Al(), { expandOnClick: r, toggleExpand: o, isExpanded: s } = Qa(), { isSelected: i, toggleSelect: u } = Cl(), { toggleGroup: v, isGroupOpen: f } = no(), { t: d } = xt();
  return le(() => {
    var p, k;
    return e.loading ? c("tr", { class: "v-data-table-rows-loading", key: "loading" }, [c("td", { colspan: a.value.length }, [((p = n.loading) == null ? void 0 : p.call(n)) ?? d(e.loadingText)])]) : e.loading || e.items.length || e.hideNoData ? c(ae, null, [e.items.map((m, g) => {
      var B;
      if (m.type === "group")
        return n["group-header"] ? n["group-header"]({ index: g, item: m, columns: a.value, isExpanded: s, toggleExpand: o, isSelected: i, toggleSelect: u, toggleGroup: v, isGroupOpen: f }) : c(Ei, { key: `group-header_${m.id}`, item: m }, n);
      const b = { index: g, item: m.raw, internalItem: m, columns: a.value, isExpanded: s, toggleExpand: o, isSelected: i, toggleSelect: u }, P = { ...b, props: { key: `item_${m.key ?? m.index}`, onClick: r.value || e["onClick:row"] ? ($) => {
        var w;
        r.value && o(m), (w = e["onClick:row"]) == null || w.call(e, $, { item: m.raw, internalItem: m });
      } : void 0, index: g, item: m } };
      return c(ae, null, [n.item ? n.item(P) : c(Ti, P.props, n), s(m) && ((B = n["expanded-row"]) == null ? void 0 : B.call(n, b))]);
    })]) : c("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [c("td", { colspan: a.value.length }, [((k = n["no-data"]) == null ? void 0 : k.call(n)) ?? d(e.noDataText)])]);
  }), {};
} }), dr = N({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...re(), ...Ge(), ...Ce(), ...xe() }, "VTable"), bl = U()({ name: "VTable", props: dr(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = _e(e), { densityClasses: a } = Ke(e);
  return le(() => c(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, n.value, a.value, e.class], style: e.style }, { default: () => {
    var r, o, s;
    return [(r = t.top) == null ? void 0 : r.call(t), t.default ? c("div", { class: "v-table__wrapper", style: { height: X(e.height) } }, [c("table", null, [t.default()])]) : (o = t.wrapper) == null ? void 0 : o.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), Oi = N({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function Di(e, l, t) {
  return l.map((n, a) => function(r, o, s, i) {
    const u = r.returnObject ? o : Pe(o, r.itemValue), v = Pe(o, r.itemSelectable, !0), f = i.reduce((d, p) => (p.key != null && (d[p.key] = Pe(o, p.value)), d), {});
    return { type: "item", key: r.returnObject ? Pe(o, r.itemValue) : u, index: s, value: u, selectable: v, columns: f, raw: o };
  }(e, n, a, t));
}
function pr(e, l) {
  return { items: y(() => Di(e, e.items, l.value)) };
}
const vr = N({ ...cr(), width: [String, Number], search: String, ...hs(), ...bs(), ...$i(), ...Oi(), ...ws(), ...xs(), ...ur(), ...dr() }, "DataTable"), Li = N({ ...io(), ...vr(), ...gs(), ...wn() }, "VDataTable"), Mi = U()({ name: "VDataTable", props: Li(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: a } = to(e), { sortBy: r, multiSort: o, mustSort: s } = ho(e), { page: i, itemsPerPage: u } = co(e), { columns: v, headers: f } = ir(e, { groupBy: a, showSelect: K(e, "showSelect"), showExpand: K(e, "showExpand") }), { items: d } = pr(e, v), p = K(e, "search"), { filteredItems: k } = ys(e, d, p, { transform: (R) => R.columns }), { toggleSort: m } = bo({ sortBy: r, multiSort: o, mustSort: s, page: i }), { sortByWithGroups: g, opened: b, extractRows: P, isGroupOpen: B, toggleGroup: $ } = lo({ groupBy: a, sortBy: r }), { sortedItems: w } = ks(e, k, g), { flatItems: V } = ro(w, a, b), C = y(() => V.value.length), { startIndex: _, stopIndex: x, pageCount: I, setItemsPerPage: S } = po({ page: i, itemsPerPage: u, itemsLength: C }), { paginatedItems: F } = function(R) {
    const { items: z, startIndex: G, stopIndex: ne, itemsPerPage: ee } = R;
    return { paginatedItems: y(() => ee.value <= 0 ? z.value : z.value.slice(G.value, ne.value)) };
  }({ items: V, startIndex: _, stopIndex: x, itemsPerPage: u }), O = y(() => P(F.value)), { isSelected: T, select: D, selectAll: A, toggleSelect: E, someSelected: M, allSelected: H } = go(e, { allItems: d, currentPage: O }), { isExpanded: W, toggleExpand: j } = Za(e);
  so({ page: i, itemsPerPage: u, sortBy: r, groupBy: a, search: p }), st({ VDataTableRows: { hideNoData: K(e, "hideNoData"), noDataText: K(e, "noDataText"), loading: K(e, "loading"), loadingText: K(e, "loadingText") } });
  const L = y(() => ({ page: i.value, itemsPerPage: u.value, sortBy: r.value, pageCount: I.value, toggleSort: m, setItemsPerPage: S, someSelected: M.value, allSelected: H.value, isSelected: T, select: D, selectAll: A, toggleSelect: E, isExpanded: W, toggleExpand: j, isGroupOpen: B, toggleGroup: $, items: O.value, groupedItems: F.value, columns: v.value, headers: f.value }));
  return le(() => {
    const [R] = gl.filterProps(e), [z] = yl.filterProps(e), [G] = hl.filterProps(e), [ne] = bl.filterProps(e);
    return c(bl, Q({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, ne), { top: () => {
      var ee;
      return (ee = n.top) == null ? void 0 : ee.call(n, L.value);
    }, default: () => {
      var ee, J, oe, be;
      return n.default ? n.default(L.value) : c(ae, null, [(ee = n.colgroup) == null ? void 0 : ee.call(n, L.value), c("thead", null, [c(yl, z, n)]), (J = n.thead) == null ? void 0 : J.call(n, L.value), c("tbody", null, [n.body ? n.body(L.value) : c(hl, Q(G, { items: F.value }), n)]), (oe = n.tbody) == null ? void 0 : oe.call(n, L.value), (be = n.tfoot) == null ? void 0 : be.call(n, L.value)]);
    }, bottom: () => n.bottom ? n.bottom(L.value) : c(ae, null, [c(gl, R, { prepend: n["footer.prepend"] })]) });
  }), {};
} }), Ni = N({ itemsLength: { type: [Number, String], required: !0 }, ...io(), ...vr(), ...wn() }, "VDataTableServer"), Ri = U()({ name: "VDataTableServer", props: Ni(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: a } = to(e), { sortBy: r, multiSort: o, mustSort: s } = ho(e), { page: i, itemsPerPage: u } = co(e), v = y(() => parseInt(e.itemsLength, 10)), { columns: f, headers: d } = ir(e, { groupBy: a, showSelect: K(e, "showSelect"), showExpand: K(e, "showExpand") }), { items: p } = pr(e, f), { toggleSort: k } = bo({ sortBy: r, multiSort: o, mustSort: s, page: i }), { opened: m, isGroupOpen: g, toggleGroup: b, extractRows: P } = lo({ groupBy: a, sortBy: r }), { pageCount: B, setItemsPerPage: $ } = po({ page: i, itemsPerPage: u, itemsLength: v }), { flatItems: w } = ro(p, a, m), { isSelected: V, select: C, selectAll: _, toggleSelect: x, someSelected: I, allSelected: S } = go(e, { allItems: p, currentPage: p }), { isExpanded: F, toggleExpand: O } = Za(e), T = y(() => P(p.value));
  so({ page: i, itemsPerPage: u, sortBy: r, groupBy: a, search: K(e, "search") }), ge("v-data-table", { toggleSort: k, sortBy: r }), st({ VDataTableRows: { hideNoData: K(e, "hideNoData"), noDataText: K(e, "noDataText"), loading: K(e, "loading"), loadingText: K(e, "loadingText") } });
  const D = y(() => ({ page: i.value, itemsPerPage: u.value, sortBy: r.value, pageCount: B.value, toggleSort: k, setItemsPerPage: $, someSelected: I.value, allSelected: S.value, isSelected: V, select: C, selectAll: _, toggleSelect: x, isExpanded: F, toggleExpand: O, isGroupOpen: g, toggleGroup: b, items: T.value, groupedItems: w.value, columns: f.value, headers: d.value }));
  le(() => {
    const [A] = gl.filterProps(e), [E] = yl.filterProps(e), [M] = hl.filterProps(e), [H] = bl.filterProps(e);
    return c(bl, Q({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, H), { top: () => {
      var W;
      return (W = n.top) == null ? void 0 : W.call(n, D.value);
    }, default: () => {
      var W, j, L, R;
      return n.default ? n.default(D.value) : c(ae, null, [(W = n.colgroup) == null ? void 0 : W.call(n, D.value), c("thead", { class: "v-data-table__thead", role: "rowgroup" }, [c(yl, Q(E, { sticky: e.fixedHeader }), n)]), (j = n.thead) == null ? void 0 : j.call(n, D.value), c("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [n.body ? n.body(D.value) : c(hl, Q(M, { items: w.value }), n)]), (L = n.tbody) == null ? void 0 : L.call(n, D.value), (R = n.tfoot) == null ? void 0 : R.call(n, D.value)]);
    }, bottom: () => n.bottom ? n.bottom(D.value) : c(gl, A, { prepend: n["footer.prepend"] }) });
  });
} }), fr = kl.reduce((e, l) => (e[l] = { type: [Boolean, String, Number], default: !1 }, e), {}), mr = kl.reduce((e, l) => (e["offset" + Mt(l)] = { type: [String, Number], default: null }, e), {}), gr = kl.reduce((e, l) => (e["order" + Mt(l)] = { type: [String, Number], default: null }, e), {}), ya = { col: Object.keys(fr), offset: Object.keys(mr), order: Object.keys(gr) };
function ji(e, l, t) {
  let n = e;
  if (t != null && t !== !1)
    return l && (n += `-${l.replace(e, "")}`), e === "col" && (n = "v-" + n), (e !== "col" || t !== "" && t !== !0) && (n += `-${t}`), n.toLowerCase();
}
const Wi = ["auto", "start", "end", "center", "baseline", "stretch"], Hi = N({ cols: { type: [Boolean, String, Number], default: !1 }, ...fr, offset: { type: [String, Number], default: null }, ...mr, order: { type: [String, Number], default: null }, ...gr, alignSelf: { type: String, default: null, validator: (e) => Wi.includes(e) }, ...re(), ...Ce() }, "VCol"), vt = U()({ name: "VCol", props: Hi(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => {
    const a = [];
    let r;
    for (r in ya)
      ya[r].forEach((s) => {
        const i = e[s], u = ji(r, s, i);
        u && a.push(u);
      });
    const o = a.some((s) => s.startsWith("v-col-"));
    return a.push({ "v-col": !o || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), a;
  });
  return () => {
    var a;
    return yt(e.tag, { class: [n.value, e.class], style: e.style }, (a = t.default) == null ? void 0 : a.call(t));
  };
} }), kn = ["start", "end", "center"], yr = ["space-between", "space-around", "space-evenly"];
function Cn(e, l) {
  return kl.reduce((t, n) => (t[e + Mt(n)] = l(), t), {});
}
const zi = [...kn, "baseline", "stretch"], hr = (e) => zi.includes(e), br = Cn("align", () => ({ type: String, default: null, validator: hr })), Gi = [...kn, ...yr], Sr = (e) => Gi.includes(e), wr = Cn("justify", () => ({ type: String, default: null, validator: Sr })), Ki = [...kn, ...yr, "stretch"], xr = (e) => Ki.includes(e), kr = Cn("alignContent", () => ({ type: String, default: null, validator: xr })), ha = { align: Object.keys(br), justify: Object.keys(wr), alignContent: Object.keys(kr) }, qi = { align: "align", justify: "justify", alignContent: "align-content" };
function Ui(e, l, t) {
  let n = qi[e];
  if (t != null)
    return l && (n += `-${l.replace(e, "")}`), n += `-${t}`, n.toLowerCase();
}
const Yi = N({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: hr }, ...br, justify: { type: String, default: null, validator: Sr }, ...wr, alignContent: { type: String, default: null, validator: xr }, ...kr, ...re(), ...Ce() }, "VRow"), Cr = U()({ name: "VRow", props: Yi(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => {
    const a = [];
    let r;
    for (r in ha)
      ha[r].forEach((o) => {
        const s = e[o], i = Ui(r, o, s);
        i && a.push(i);
      });
    return a.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), a;
  });
  return () => {
    var a;
    return yt(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (a = t.default) == null ? void 0 : a.call(t));
  };
} }), Br = { colors: () => ({ default: { background: "primary", base: "primary", border: "primary", color: "on-primary" }, footer: { background: "--v-theme-surface", color: "--v-theme-on-surface" }, header: { background: "primary", color: "on-primary" }, percentageChange: 15, percentageDirection: "desc", table: { bottomBorder: "primary" } }), columnWidths: () => [], density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footers: () => [], height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, multiSort: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 0, searchEvents: () => ({}), searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }, Xi = Ue({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (l, t) => de(l.$slots, "bottom") }), te = "v-drilldown-table";
function ba(e, l, t = "") {
  let n = e;
  const a = l.length - 1;
  if (a < 0)
    return n === void 0 ? t : n;
  for (let r = 0; r < a; r++) {
    if (n == null)
      return t;
    n = n[l[r]];
  }
  return n == null || n[l[a]] === void 0 ? t : n[l[a]];
}
function Ji(e, l, t = "") {
  if (l == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof l != "function")
      return t;
    const a = l(e, t);
    return a === void 0 ? t : a;
  }
  if (typeof l == "string")
    return function(a, r, o = "") {
      let s = r;
      return a != null && s && typeof s == "string" ? a[s] !== void 0 ? a[s] : (s = s.replace(/\[(\w+)\]/g, ".$1"), s = s.replace(/^\./, ""), ba(a, s.split("."), o)) : o;
    }(e, l, t);
  if (Array.isArray(l))
    return ba(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
const Sa = (e) => {
  const { id: l, sortBy: t } = e;
  if (t) {
    const n = t.find((a) => a.key === l);
    if (n)
      return n.order;
  }
}, At = (e) => {
  const { str: l, unit: t = "px" } = e;
  if (l != null && l !== "")
    return +l ? `${Number(l)}${t}` : String(l);
};
function Pr(e) {
  const l = e.title, t = [l, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : l || "";
}
function Ml(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function $t(e, ...l) {
  if (!l.length)
    return e;
  const t = l.shift();
  if (Ml(e) && Ml(t))
    for (const n in t)
      Ml(t[n]) ? (e[n] || Object.assign(e, { [n]: {} }), $t(e[n], t[n])) : Object.assign(e, { [n]: t[n] });
  return $t(e, ...l);
}
const _r = (e) => {
  const { align: l } = e;
  return { "d-flex align-center": !0, [`justify-${l}`]: l, "justify-start": !l };
}, Ar = (e) => {
  const { level: l } = e;
  return { "d-flex": !0, [`${te}--header-select-all-checkbox`]: !0, [`${te}--header-select-all-checkbox-${l}`]: !0 };
};
function Fr(e) {
  return e === "transparent" || e === "none" || e === "inherit" || e === "currentColor" || e === "initial" || e === "unset";
}
function $r(e) {
  return e.includes("--v-theme");
}
const Zi = (e, l) => {
  if (Fr(e))
    return e;
  if ($r(e))
    return `rgb(var(${e}))`;
  const t = function(n, a) {
    const r = a.global.current.value.colors;
    return Object.entries(r).find(([o]) => o === n);
  }(e, l);
  return t ? `hsl(${Sl(t[1])})` : `hsl(${Sl(e)})`;
}, Qi = (e) => {
  const { colors: l, level: t, prop: n = "default", theme: a, type: r } = e, o = { ...l[n] }, s = l.percentageDirection;
  if (o === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let i = ((u, v, f) => {
    let d = 100, p = u.percentageChange ?? 0;
    return isNaN(p) && (d = 100), p *= v, f !== "desc" && f !== "descending" || (d = 100 - p), f !== "asc" && f !== "ascending" || (d = 0 + p), d < 0 && (d = 0), d > 100 && (d = 100), isNaN(d) && (d = 100), d;
  })(l, t - 1, s);
  return r || Object.entries(o).forEach(([u, v]) => {
    let f = a.global.current.value.colors[v] ?? v;
    if (f || (f = "transparent"), Fr(f))
      return void (o[u] = f);
    if ((u === "color" || t === 0 && s === "asc") && (i = 100), $r(f))
      return void (o[u] = `rgb(var(${f}))`);
    const d = `/ ${i}%`, p = Sl(f);
    if (p.includes("/"))
      return o[u] = `hsl(${p})`;
    o[u] = `hsl(${Sl(f)} ${d})`;
  }), o;
};
function Sl(e) {
  let l = function(v) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let d = v;
    return Object.entries(f).forEach(([p, k]) => {
      v.toLowerCase() != p.toLowerCase() || (d = k);
    }), d;
  }(e), t = 0, n = 0, a = 0, r = 0, o = 0, s = 0;
  if (l.substring(0, 1) === "#")
    l = function(v) {
      let f = v.replace("#", "");
      f.length === 3 && (f = f.split("").map((m) => m + m).join(""));
      const d = parseInt(f.substring(0, 2), 16), p = parseInt(f.substring(2, 4), 16), k = parseInt(f.substring(4, 6), 16);
      return [d, p, k];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/\d+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/\d+/g)].map(Number), t = l[0], n = l[1], a = l[2], `${t} ${n}% ${a}%`;
  [r, o, s] = l, r /= 255, o /= 255, s /= 255;
  const i = Math.max(r, o, s), u = Math.min(r, o, s);
  if (i === null || !u === null || isNaN(i) || isNaN(u)) {
    const v = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${v})" in it's place.`), v;
  }
  if (t = (i + u) / 2, n = (i + u) / 2, a = (i + u) / 2, i == u)
    t = n = 0;
  else {
    const v = i - u;
    switch (n = a > 0.5 ? v / (2 - i - u) : v / (i + u), i) {
      case r:
        t = (o - s) / v + (o < s ? 6 : 0);
        break;
      case o:
        t = (s - r) / v + 2;
        break;
      case s:
        t = (r - o) / v + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), n = Math.round(100 * n), a = Math.round(100 * a), `${t} ${n}% ${a}%`;
}
const Bn = (e) => {
  const { colors: l, level: t, prop: n = "default", themeColors: a, type: r = null } = e;
  if (typeof l != "object" || l === null)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should not be called.');
  const o = Qi({ colors: l, level: t, prop: n, theme: a, type: r });
  return r ? o[r] : o;
}, eu = ["colspan"], tu = Ue({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const l = e, t = xl(), n = y(() => ((b) => {
    const { isLinearOnly: P, loaderHeight: B } = b;
    let $ = { height: 0, minHeight: 0 };
    return h(P) && ($ = { height: h(B), minHeight: h(B) }), $;
  })({ isLinearOnly: u, loaderHeight: i })), a = y(() => ((b) => {
    const { isLinearOnly: P, loaderHeight: B } = b;
    return h(P) ? { height: h(B), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: u, loaderHeight: i })), r = y(() => ((b) => {
    const { isLinearOnly: P } = b;
    return { [`${te}--loader-tr`]: !0, [`${te}--loader-tr-not-linear`]: !h(P), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: u })), o = y(() => ({ [`${te}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), s = y(() => {
    var b;
    return ((b = l.loaderProps) == null ? void 0 : b.linear) ?? {};
  }), i = y(() => {
    var b, P;
    return function(B) {
      return At({ str: B }) || "2px";
    }(((P = (b = l.loaderProps) == null ? void 0 : b.linear) == null ? void 0 : P.height) || "2px");
  }), u = y(() => {
    let b = !1;
    return l.loaderType !== null && l.loaderType !== !1 && (b = function(P) {
      let B = !1;
      return P === "linear" && (B = !0), Array.isArray(P) && (B = P.length === 1 && P[0] === "linear"), B;
    }(l.loaderType)), b;
  }), v = y(() => {
    var b;
    return ((b = l.loaderProps) == null ? void 0 : b.circular) ?? {};
  }), f = y(() => {
    var b;
    return ((b = l.loaderProps) == null ? void 0 : b.skelton) ?? {};
  }), d = y(() => l.loading), p = y(() => {
    var P, B;
    let b = ((B = (P = l.loaderProps) == null ? void 0 : P.text) == null ? void 0 : B.color) ?? "surface-variant";
    return b = Zi(b, t), { color: b };
  }), k = y(() => l.loadingText || "Loading..."), m = (b) => {
    const P = l.loaderType;
    return Array.isArray(P) ? P.indexOf(b) : 1;
  }, g = (b) => {
    const P = l.loaderType;
    return b === l.loaderType || !!Array.isArray(P) && P.includes(b);
  };
  return (b, P) => {
    const B = Fa("v-skeleton-loader");
    return Y(), ce("tr", { class: ie(h(r)), style: Fe(h(n)) }, [Ne("td", { class: "px-0 ma-0", colspan: b.colspan, style: Fe(h(a)) }, [b.loading ? (Y(), me(Cr, { key: 0, class: ie(h(o)), "no-gutters": "" }, { default: se(() => [g("linear") ? (Y(), me(vt, { key: 0, class: "pa-0 ma-0", order: m("linear") }, { default: se(() => [c($o, Se(Ie(h(s))), null, 16)]), _: 1 }, 8, ["order"])) : ye("", !0), g("circular") ? (Y(), me(vt, { key: 1, class: "pa-0 my-2", order: m("circular") }, { default: se(() => [c(_o, Se(Ie(h(v))), null, 16)]), _: 1 }, 8, ["order"])) : ye("", !0), g("skelton") ? (Y(), me(vt, { key: 2, class: "pa-0 ma-0", order: m("skelton") }, { default: se(() => [c(B, Q(h(f), { loading: h(d) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : ye("", !0), g("text") ? (Y(), me(vt, { key: 3, class: "my-2", order: m("text"), style: Fe(h(p)) }, { default: se(() => [nl(Aa(h(k)), 1)]), _: 1 }, 8, ["order", "style"])) : ye("", !0)]), _: 1 }, 8, ["class"])) : ye("", !0)], 12, eu)], 6);
  };
} }), Pn = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of l)
    t[n] = a;
  return t;
}, lu = Pn(tu, [["__scopeId", "data-v-fbedf16d"]]), nu = ["colspan"], au = ["colspan", "innerHTML"], ou = ["colspan"], ru = ["colspan", "innerHTML"], su = ["colspan", "onClick"], iu = ["innerHTML"], uu = Ue({ __name: "HeadersSlot", props: { columnWidths: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, colors: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = Nt(), a = q(), r = ve(Symbol.for("vuetify:icons")), o = q(!1), s = q(t.items), i = q(t.matchColumnWidths), u = q(t.columnWidths || []), v = q(t.sortAscIcon), f = y(() => t.tableModelValue), d = xl(), p = y(() => function() {
    const C = t.slotProps.columns;
    if (t.level <= 1 || !i.value)
      return C;
    if (u.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(C).forEach(([_]) => {
      Object.keys(C).length !== parseInt(_) + 1 && C[_].width === void 0 && (C[_].width = u.value[parseInt(_)]);
    }), C;
  }());
  Z(() => t.items, (C) => {
    s.value = C, a.value = (C == null ? void 0 : C.filter((_) => _.selectable)) ?? [], a.value = C == null ? void 0 : C.filter((_) => _.selectable !== !1);
  });
  const k = y(() => ((C) => {
    const { level: _ } = C;
    return { [`${te}--header-row`]: !0, [`${te}--header-row-${_}`]: !0 };
  })({ level: t.level })), m = (C, _ = "") => ((x) => {
    const { colors: I, column: S, level: F, slotName: O = "" } = x;
    return { [`${te}--header-row-th`]: !0, [`${te}--header-row-th-${O}`]: O !== "", [`${te}--header-row-th-${O}-${F}`]: O, [`${te}--header-row-th-${F}`]: !0, [`${te}--header-row-th-sortable`]: S.sortable, [`${te}--header-row-th-sortable-default-color`]: S.sortable && I === !1, [`${S.cellClass}`]: S.cellClass };
  })({ colors: t.colors, column: C, level: t.level, slotName: _ }), g = (C, _ = !1) => ((x) => {
    const { colors: I, column: S, dataTableExpand: F = !1, level: O, theme: T } = x, D = { minWidth: S.width ? At({ str: S.width }) : "auto", width: S.width ? At({ str: S.width }) : "auto" };
    if (F && !S.width && (D.width = S.width ? At({ str: S.width }) : "56px", D.minWidth = S.width ? At({ str: S.width }) : "56px"), I === !1 || I === null)
      return D;
    const A = Bn({ colors: I, level: O, prop: "header", themeColors: T });
    return D.backgroundColor = A.background, D.color = A.color, D;
  })({ colors: t.colors, column: C, dataTableExpand: _, level: t.level, theme: d }), b = y(() => {
    var C;
    return !t.slotProps.allSelected && ((C = f == null ? void 0 : f.value) == null ? void 0 : C.length) !== 0;
  });
  function P() {
    o.value = !o.value, t.slotProps.selectAll(o.value), l("click:selectAll", o.value);
  }
  Z(() => t.slotProps.allSelected, (C) => {
    o.value = C;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const B = y(() => Ar({ level: t.level })), $ = (C) => ((_) => {
    const { iconOptions: x, key: I, level: S, sortBy: F } = _;
    return { "fa-fw": (x == null ? void 0 : x.defaultSet) === "fa", "mx-1": !0, [`${te}--header-row-th-sortable-sort-icon`]: !0, [`${te}--header-row-th-sortable-sort-icon-${S}`]: !0, [`${te}--header-row-th-sortable-sort-icon-desc`]: Sa({ id: I, sortBy: F }) === "desc", [`${te}--header-row-th-sortable-sort-icon-asc`]: Sa({ id: I, sortBy: F }) === "asc" };
  })({ iconOptions: r, key: C, level: t.level, sortBy: t.sortBy }), w = y(() => (r == null ? void 0 : r.defaultSet) === "fa" ? (v.value = (t == null ? void 0 : t.sortAscIcon) ?? "fas fa-arrow-up", "small") : (v.value = (t == null ? void 0 : t.sortAscIcon) ?? "$sortAsc", "default"));
  function V(C) {
    return Pr(C);
  }
  return (C, _) => (Y(), ce(ae, null, [Ne("tr", { class: ie(h(k)) }, [(Y(!0), ce(ae, null, Me(h(p), (x) => {
    return Y(), ce(ae, { key: x }, [h(n)[`column.${x.key}`] ? (Y(), ce("th", { key: 0, class: ie(m(x, x.key)), colspan: x.colspan || 1, style: Fe(g(x, !0)) }, [de(C.$slots, `column.${x.key}`, { column: x }, void 0, !0)], 14, nu)) : x.key === "data-table-group" || x.key === "data-table-group" ? (Y(), ce("th", { key: 1, class: ie(m(x, "header-data-table-group")), colspan: x.colspan || 1, style: Fe(g(x, !0)), innerHTML: V(x) }, null, 14, au)) : x.key === "data-table-select" || x.key === "data-table-select" && C.showSelect ? (Y(), ce("th", { key: 2, class: ie(m(x, "header-data-table-select")), colspan: x.colspan || 1, style: Fe(g(x, !0)) }, [C.selectStrategy !== "single" ? (Y(), me(Sn, { key: 0, class: ie(h(B)), density: C.density, focused: !1, indeterminate: h(b), "model-value": h(o), "onUpdate:modelValue": P }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ye("", !0)], 14, ou)) : x.key === "data-table-expand" ? (Y(), ce("th", { key: 3, class: ie(m(x, "data-table-expand")), colspan: x.colspan || 1, style: Fe(g(x, !0)), innerHTML: V(x) }, null, 14, ru)) : (Y(), ce("th", { key: 4, class: ie(m(x)), colspan: x.colspan || 1, style: Fe(g(x)), onClick: (S) => function(F) {
      F.sortable && t.slotProps.toggleSort(F);
    }(x) }, [Ne("div", { class: ie((I = x.align, _r({ align: I }))) }, [Ne("span", { innerHTML: V(x) }, null, 8, iu), x.sortable && h(n)["header.sortIcon"] ? (Y(), ce("span", { key: 0, class: ie($(x.key)) }, [de(C.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : x.sortable ? (Y(), me(he, { key: 1, class: ie($(x.key)), icon: h(v), size: h(w) }, null, 8, ["class", "icon", "size"])) : ye("", !0)], 2)], 14, su))], 64);
    var I;
  }), 128))], 2), C.loaderSettings.loaderType && !h(n).loading ? (Y(), me(h(lu), { key: 0, colors: C.colors || null, colspan: C.loaderSettings.colspan, height: C.loaderSettings.height, level: C.level, "loader-props": C.loaderProps, "loader-settings": C.loaderSettings, "loader-type": C.loaderSettings.loaderType, loading: C.loaderSettings.loading || !1, "loading-text": C.loaderSettings.loadingText, size: C.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : ye("", !0)], 64));
} }), cu = Pn(uu, [["__scopeId", "data-v-2cc4d4ca"]]), du = ["colspan"], pu = ["colspan"], vu = ["colspan"], fu = ["colspan"], mu = ["innerHTML"], gu = Ue({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: l }) {
  const t = e, n = Nt(), a = ve(Symbol.for("vuetify:icons")), r = y(() => t.slotProps.columns), o = y(() => t.slotProps.index), s = y(() => t.slotProps.isExpanded), i = y(() => t.slotProps.item), u = y(() => t.slotProps.internalItem), v = y(() => t.slotProps.level), f = y(() => t.slotProps.toggleExpand), d = y(() => t.slotProps.toggleSelect), p = y(() => t.itemSelectable), k = y(() => ((B) => {
    const { expandOnClick: $, level: w, levels: V } = B;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": $ && w < V, [`${te}--body-row`]: !0, [`${te}--body-row-${w}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), m = (B) => (($) => {
    const { column: w, elm: V, level: C } = $;
    return { [`${te}--${V}-row-td`]: !0, [`${te}--${V}-row-td-${C}`]: !0, [`${w.cellClass}`]: w.cellClass };
  })({ column: B, elm: "body", level: t.level });
  function g(B) {
    const { isRow: $, internalItem: w, level: V, toggleExpand: C } = B;
    if (!(t.level >= t.levels || t.expandOnClick && !$) && (!t.expandOnClick || $)) {
      if (B.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", B.$event);
      }
      V === t.level && C(w), l("update:expanded", B);
    }
  }
  const b = y(() => (a == null ? void 0 : a.defaultSet) === "fa" ? "x-small" : "default");
  function P(B, $) {
    return function(w, V) {
      if (!V.key)
        return "";
      const C = Ji(w, V.key);
      return V.renderItem ? V.renderItem(C, w, V) : C;
    }(B, $);
  }
  return (B, $) => (Y(), ce("tr", { class: ie(h(k)), onClick: $[2] || ($[2] = (w) => g({ columns: h(r), index: h(o), isExpanded: h(s), isRow: !0, item: h(i), internalItem: h(u), level: h(v), toggleExpand: h(f), $event: w })) }, [(Y(!0), ce(ae, null, Me(h(r), (w) => (Y(), ce(ae, { key: w }, [B.$slots[`item.${w.key}`] ? (Y(), ce("td", { key: 0, class: ie(m(w)), colspan: w.colspan || 1 }, [de(B.$slots, `item.${w.key}`, { columns: h(r), index: h(o), item: h(i) }, void 0, !0)], 10, du)) : w.key === "data-table-select" || w.key === "data-table-select" && t.showSelect ? (Y(), ce("td", { key: 1, class: ie(m(w)), colspan: w.colspan || 1 }, [h(n)["item.data-table-select"] ? de(B.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : ye("", !0), c(Sn, { class: "d-flex v-simple-checkbox", density: B.density, disabled: h(i).raw.selectable === !1 && h(p) === "selectable", "model-value": B.slotProps.isSelected([h(i)]), onClick: $[0] || ($[0] = Nl((V) => function(C) {
    const { item: _, toggleSelect: x } = C;
    x(_), l("click:row:checkbox", _);
  }({ columns: h(r), index: h(o), item: h(i), level: h(v), toggleSelect: h(d) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, pu)) : w.key === "data-table-expand" || w.key === "data-table-expand" && B.showExpand ? (Y(), ce("td", { key: 2, class: ie(m(w)), colspan: w.colspan || 1 }, [h(v) < B.levels ? (Y(), ce("div", { key: 0, class: ie(["v-drilldown-table--expand-icon", h(s)(h(u)) ? "rotate-180" : ""]), onClick: $[1] || ($[1] = (V) => g({ columns: h(r), index: h(o), isExpanded: h(s), item: h(i), internalItem: h(u), level: h(v), toggleExpand: h(f) })) }, [B.$slots["item.data-table-expand"] ? de(B.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (Y(), me(he, { key: 1, icon: "$expand", size: h(b) }, null, 8, ["size"]))], 2)) : ye("", !0)], 10, vu)) : (Y(), ce("td", { key: 3, class: ie(m(w)), colspan: w.colspan || 1 }, [Ne("span", { innerHTML: P(h(i), w) }, null, 8, mu)], 10, fu))], 64))), 128))], 2));
} }), yu = Pn(gu, [["__scopeId", "data-v-c971a973"]]), hu = ["colspan"], bu = ["colspan"], Su = ["colspan", "innerHTML"], wu = ["colspan", "innerHTML"], xu = ["colspan"], ku = ["innerHTML"], Cu = Ue({ __name: "TfootSlot", props: { footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = Nt(), a = q(), r = xl(), o = q(!1), s = q(t.items), i = y(() => t.tableModelValue), u = y(() => t.footers.length ? t.footers : t.slotProps.columns);
  Z(() => t.items, (P) => {
    s.value = P, a.value = (P == null ? void 0 : P.filter((B) => B.selectable)) ?? [], a.value = P == null ? void 0 : P.filter((B) => B.selectable !== !1);
  });
  const v = y(() => ((P) => {
    const { level: B } = P;
    return { [`${te}--tfoot`]: !0, [`${te}--tfoot-${B}`]: !0 };
  })({ level: t.level })), f = y(() => ((P) => {
    const { level: B } = P;
    return { [`${te}--tfoot-row`]: !0, [`${te}--tfoot-row-${B}`]: !0 };
  })({ level: t.level })), d = (P, B = "") => (($) => {
    const { column: w, level: V, slotName: C = "" } = $;
    return { [`${te}--tfoot-row-td`]: !0, [`${te}--tfoot-row-td-${C}`]: C !== "", [`${te}--tfoot-row-td-${C}-${V}`]: C, [`${te}--tfoot-row-td-${V}`]: !0, [`${w.cellClass}`]: w.cellClass };
  })({ column: P, level: t.level, slotName: B }), p = y(() => ((P) => {
    const { colors: B, elm: $, level: w, theme: V } = P;
    if (B === !1 || B === null)
      return {};
    const C = Bn({ colors: B, level: w, prop: $, themeColors: V });
    return { backgroundColor: C.background, color: C.color };
  })({ colors: t.colors, elm: "footer", level: t.level, theme: r })), k = y(() => {
    var P;
    return !t.slotProps.allSelected && ((P = i == null ? void 0 : i.value) == null ? void 0 : P.length) !== 0;
  });
  function m() {
    o.value = !o.value, t.slotProps.selectAll(o.value), l("click:selectAll", o.value);
  }
  Z(() => t.slotProps.allSelected, (P) => {
    o.value = P;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const g = y(() => Ar({ level: t.level }));
  function b(P) {
    return Pr(P);
  }
  return (P, B) => {
    var $;
    return ($ = h(u)) != null && $.length ? (Y(), ce("tfoot", { key: 0, class: ie(h(v)) }, [Ne("tr", { class: ie(h(f)) }, [(Y(!0), ce(ae, null, Me(h(u), (w) => {
      return Y(), ce(ae, { key: w }, [h(n)[`tfoot.${w.key}`] ? (Y(), ce("th", { key: 0, class: ie(d(w, w.key)), colspan: w.colspan || 1, style: Fe(h(p)) }, [de(P.$slots, `tfoot.${w.key}`, { column: w })], 14, hu)) : w.key === "data-table-select" ? (Y(), ce("th", { key: 1, class: ie(d(w, "tfoot-data-table-select")), colspan: w.colspan || 1, style: Fe(h(p)) }, [P.selectStrategy !== "single" ? (Y(), me(Sn, { key: 0, class: ie(h(g)), density: P.density, focused: !1, indeterminate: h(k), "model-value": h(o), "onUpdate:modelValue": m }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ye("", !0)], 14, bu)) : w.key === "data-table-expand" ? (Y(), ce("th", { key: 2, class: ie(d(w, "tfoot-data-table-expand")), colspan: w.colspan || 1, style: Fe(h(p)), innerHTML: b(w) }, null, 14, Su)) : w.renderFooterCell ? (Y(), ce("th", { key: 3, class: ie(d(w)), colspan: w.colspan || 1, style: Fe(h(p)), innerHTML: b(w) }, null, 14, wu)) : (Y(), ce("th", { key: 4, class: ie(d(w)), colspan: w.colspan || 1, style: Fe(h(p)) }, [Ne("div", { class: ie((V = w.align, _r({ align: V }))) }, [Ne("span", { innerHTML: b(w) }, null, 8, ku)], 2)], 14, xu))], 64);
      var V;
    }), 128))], 2)], 2)) : ye("", !0);
  };
} }), Bu = Ue({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchEvents: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: l }) {
  const t = e, n = Nt(), a = q(""), r = q(!0), o = y(() => t.items), s = y(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: o, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: h(a), selectAll: i, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: u }));
  function i(d) {
    t.slotProps.selectAll(d), l("click:selectAll", d);
  }
  function u() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  nt(() => {
    const d = document.querySelector(`[data-id="vdt-top-id-${t.level}"]`);
    (d == null ? void 0 : d.children.length) === 0 && (r.value = !1);
  }), Z(a, () => {
    l("update:search", a.value);
  });
  const v = y(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...t.searchProps })), f = y(() => {
    const d = t.searchContainerCols ?? Br.searchContainerCols();
    return { [`${te}--search-field`]: !0, [`v-col-${d.xs}`]: !0, [`v-col-sm-${d.sm}`]: !0, [`v-col-md-${d.md}`]: !0, [`v-col-lg-${d.lg}`]: !0, [`v-col-xl-${d.xl}`]: !0, [`v-col-xxl-${d.xxl}`]: !0 };
  });
  return (d, p) => h(n).top ? de(d.$slots, "top", Se(Q({ key: 0 }, h(s)))) : (d.showSearch || h(n)["top.left"] || h(n)["top.right"]) && h(r) ? (Y(), me(vt, { key: 1, lg: "12" }, { default: se(() => [c(Cr, { "data-id": `vdt-top-id-${t.level}` }, { default: se(() => [h(n)["top.left"] ? de(d.$slots, "top.left", Se(Q({ key: 0 }, h(s)))) : d.showSearch ? (Y(), me(vt, { key: 1, class: ie(["d-flex align-center justify-end", h(f)]) }, { default: se(() => [d.showSearch ? (Y(), me(en, Q({ key: 0 }, h(v), { modelValue: h(a), "onUpdate:modelValue": p[0] || (p[0] = (k) => ht(a) ? a.value = k : null), class: "mt-0 pt-0" }, Mr(d.searchEvents)), null, 16, ["modelValue"])) : ye("", !0)]), _: 1 }, 8, ["class"])) : ye("", !0), h(n)["top.right"] ? de(d.$slots, "top.right", Se(Q({ key: 2 }, h(s)))) : ye("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : ye("", !0);
} });
function wa(e) {
  return typeof e == "function" ? e() : h(e);
}
const xa = () => {
}, Pu = (e) => e();
function _u(e, l = {}) {
  let t, n, a = xa;
  const r = (o) => {
    clearTimeout(o), a(), a = xa;
  };
  return (o) => {
    const s = wa(e), i = wa(l.maxWait);
    return t && r(t), s <= 0 || i !== void 0 && i <= 0 ? (n && (r(n), n = null), Promise.resolve(o())) : new Promise((u, v) => {
      a = l.rejectOnCancel ? v : u, i && !n && (n = setTimeout(() => {
        t && r(t), n = null, u(o());
      }, i)), t = setTimeout(() => {
        n && r(n), n = null, u(o());
      }, s);
    });
  };
}
function Au(e, l, t = {}) {
  const { eventFilter: n = Pu, ...a } = t;
  return Z(e, (r = n, o = l, function(...s) {
    return new Promise((i, u) => {
      Promise.resolve(r(() => o.apply(this, s), { fn: o, thisArg: this, args: s })).then(i).catch(u);
    });
  }), a);
  var r, o;
}
function ka(e, l, t = {}) {
  const { debounce: n = 0, maxWait: a, ...r } = t;
  return Au(e, l, { ...r, eventFilter: _u(n, { maxWait: a }) });
}
const _t = /* @__PURE__ */ new Map(), Fu = Symbol("data"), $u = ["colspan"], Ca = Ue({ __name: "VDrilldownTable", props: Rr({ colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footers: {}, groupBy: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchEvents: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { ...Br }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: l }) {
  const t = e, n = Nt(), a = jr(), r = ue(null);
  nt(() => {
    t.level === 1 && o.level !== 1 || o.server || g();
  }), nn(() => {
    r.value = Object.assign({}, t.server ? Ri : Mi);
  });
  let o = Lt(Object.assign({}, t));
  const s = { ...t, ...o }, i = q(a["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), u = q(""), v = xl(), f = y(() => o.sortBy), d = y(() => !!o.loading || o.hideNoData);
  (function(S, F, O) {
    const T = Z(S, (...D) => (Ee(() => T()), F(...D)), O);
  })(t, () => {
    t.level === 1 && o.level !== 1 || g(), o.itemsPerPage = t.itemsPerPage;
  }, { immediate: !1 }), Z(() => t.items, () => {
    t.loading || g();
  }, { deep: !0 }), Z(() => t.loading, () => {
    if (t.loading)
      return o.loading = t.loading, !1;
    g();
  });
  const p = (S) => {
    const F = o.loaderType;
    return !(S && (F === "skelton" || Array.isArray(F) && F.length === 1 && F[0] === "skelton" || !o.showDrilldownWhenLoading));
  }, k = y(() => ((S) => {
    const { elevation: F, fixedHeader: O, isDrilldown: T, isHover: D, isServerSide: A, level: E, separator: M } = S;
    return { [`${te}--child`]: T, [`${te}--fixed-header`]: O, [`${te}--hover`]: D, [`${te}--level-${E}`]: !0, [`${te}--server`]: A, [`${te}--separator-${M}`]: M, [`${te}`]: !0, [`elevation-${F}`]: parseInt(F) > 0 };
  })({ elevation: o.elevation, fixedHeader: o.fixedHeader, isDrilldown: t.isDrilldown, isHover: o.hover, isServerSide: !1, level: o.level, separator: o.separator })), m = y(() => ((S) => {
    const { colors: F, level: O, theme: T } = S;
    let D = {};
    typeof F == "object" && F !== null && (D = Bn({ colors: F, level: O, prop: "table", themeColors: T }));
    const A = { borderBottom: "none" };
    return D.bottomBorder && (A.borderBottom = `1px solid ${D.bottomBorder}`), A;
  })({ colors: o.colors, level: o.level, theme: v }));
  function g() {
    var S;
    t.drilldown ? o = ((F) => {
      const { drilldown: O, item: T, level: D, levels: A, loadedDrilldown: E } = F;
      let M = E;
      const H = T;
      M = $t(E, O);
      const W = (E.items || [{}]).find((j) => {
        const L = j[E.drilldownKey];
        let R = {};
        return H && (R = H[E.drilldownKey]), L === R;
      });
      return M = $t(E, W[E.itemChildrenKey]), A === D && (M.showExpand = !1), M;
    })({ drilldown: t.drilldown, item: t.item, level: t.level, levels: t.levels, loadedDrilldown: o, matchColumnWidths: t.matchColumnWidths }) : (o = $t(o, t), t.matchColumnWidths && ((S = o == null ? void 0 : o.columnWidths) == null ? void 0 : S.length) === 0 && (o.columnWidths = ((F) => {
      const { tableId: O } = F, T = [], D = h(O), A = document.querySelectorAll(`[data-vdt-id="${D}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(A).length > 0)
        for (let E = 0; E < A.length; E += 1) {
          const M = A[E];
          T.push(M.offsetWidth);
        }
      return T;
    })({ tableId: i })));
  }
  function b(S) {
    let F = { ...s, ...o, ...S };
    t.server && (F = { ...o, ...s, ...S }), ((O) => {
      const { data: T, drilldownData: D, emit: A } = O;
      T.isExpanded(T.internalItem) && A("update:drilldown", D), A("update:expanded", T.item);
    })({ data: S, drilldownData: F, emit: l });
  }
  function P(S) {
    return { items: S.items, itemsPerPage: S.itemsPerPage, page: S.page, search: u.value, server: S.server, sortBy: S.sortBy };
  }
  const B = function(S) {
    const F = Nr();
    function O(A) {
      var E;
      const M = _t.get(S) || /* @__PURE__ */ new Set();
      M.add(A), _t.set(S, M);
      const H = () => T(A);
      return (E = F == null ? void 0 : F.cleanups) == null || E.push(H), H;
    }
    function T(A) {
      const E = _t.get(S);
      E && (E.delete(A), E.size || D());
    }
    function D() {
      _t.delete(S);
    }
    return { on: O, once: function(A) {
      return O(function E(...M) {
        T(E), A(...M);
      });
    }, off: T, emit: function(A, E) {
      var M;
      (M = _t.get(S)) == null || M.forEach((H) => H(A, E));
    }, reset: D };
  }(Fu), $ = B.on(function(S) {
    t.level === 1 && S.drilldown.server && l("update:options", { ...S });
  });
  function w(S) {
    o.itemsPerPage = S;
    const F = P(o), O = { drilldown: { ...t, ...F, itemsPerPage: S }, itemsPerPage: S, name: "update:itemsPerPage" };
    B.emit(O), l("update:itemsPerPage", S);
  }
  function V(S) {
    o.page = S;
    const F = P(o), O = { drilldown: { ...t, ...F, page: S }, name: "update:page", page: S };
    B.emit(O), l("update:page", S);
  }
  Wr(() => {
    $();
  });
  const C = { debounce: o.searchDebounce, maxWait: o.searchMaxWait };
  function _() {
    n.top || n["top.left"] || (o.search = u.value), (n.top || n["top.left"]) && (u.value = t.search || "");
    const S = P(o), F = { drilldown: { ...t, ...S, search: u.value }, search: u.value };
    B.emit(F), l("update:search", F);
  }
  function x(S) {
    o.sortBy = S;
    const F = P(o), O = { drilldown: { ...t, ...F, sortBy: S }, name: "update:sortBy", sortBy: S };
    B.emit(O), l("update:sortBy", S);
  }
  function I() {
  }
  return ka(() => t.search, () => {
    _();
  }, C), ka(u, () => {
    n.top || n["top.left"] || _();
  }, C), (S, F) => {
    const O = Fa("VDrilldownTable", !0);
    return h(r) ? (Y(), me(_a(h(r)), Q({ key: 0 }, S.$attrs, { modelValue: h(o).modelValue, "onUpdate:modelValue": [F[5] || (F[5] = (T) => h(o).modelValue = T), I], class: h(k), "data-vdt-id": h(i), density: h(o).density, "expand-on-click": h(o).expandOnClick, expanded: h(o).expanded, "fixed-header": h(o).fixedHeader, "group-by": h(o).groupBy, headers: h(o).headers, height: h(o).height, "hide-no-data": h(d), hover: h(o).hover, "item-selectable": h(o).itemSelectable, "item-value": h(o).itemValue, items: h(o).items, "items-length": h(o).itemsLength, "items-per-page": h(o).itemsPerPage, "items-per-page-options": h(o).itemsPerPageOptions, loading: (!h(o).loaderType || h(n).loading) && h(o).loading, "multi-sort": h(o).multiSort, "must-sort": h(o).mustSort, "no-data-text": h(o).noDataText, page: h(o).page, "return-object": h(o).returnObject, search: h(u), "select-strategy": h(o).selectStrategy, "show-expand": h(o).showExpand, "sort-by": h(f), style: h(m), "onUpdate:itemsPerPage": w, "onUpdate:page": V, "onUpdate:sortBy": x }), Je({ top: se((T) => [(Y(), me(h(Bu), { key: S.level, items: h(o).items, level: h(o).level, loading: h(o).loading, "search-container-cols": h(o).searchContainerCols, "search-events": h(o).searchEvents, "search-props": h(o).searchProps, "show-search": h(o).showSearch ?? !1, "slot-props": T, "onUpdate:search": F[0] || (F[0] = (D) => u.value = D) }, Je({ _: 2 }, [Me(h(n), (D, A) => ({ name: A, fn: se((E) => [de(S.$slots, A, Se(Ie({ ...E })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-events", "search-props", "show-search", "slot-props"]))]), headers: se((T) => [(Y(), me(h(cu), { key: S.level, colors: h(o).colors, "column-widths": h(o).columnWidths, density: h(o).density, items: h(o).items, level: S.level, "loader-props": h(o).loaderProps, "loader-settings": { colspan: T.columns.length, loaderType: h(o).loaderType, loading: h(o).loading, loadingText: S.loadingText }, "match-column-widths": h(o).matchColumnWidths, "select-strategy": h(o).selectStrategy, "show-select": h(o).showSelect, "slot-props": { ...T }, "sort-asc-icon": h(o).sortAscIcon, "sort-by": h(o).sortBy, "table-model-value": h(o).modelValue }, Je({ _: 2 }, [Me(h(n), (D, A) => ({ name: A, fn: se((E) => [de(S.$slots, A, Se(Ie({ ...E })))]) }))]), 1032, ["colors", "column-widths", "density", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: se((T) => [(Y(), me(h(yu), { key: S.level, density: h(o).density, "expand-on-click": h(o).expandOnClick, "group-by": h(o).groupBy, "item-selectable": h(o).itemSelectable, items: h(o).items, level: h(o).level, levels: h(o).levels, "show-expand": h(o).showExpand, "show-select": h(o).showSelect, "slot-props": { level: S.level, ...T }, "onClick:row": F[1] || (F[1] = (D) => {
      l("click:row", D);
    }), "onClick:row:checkbox": F[2] || (F[2] = (D) => {
      l("click:row:checkbox", D);
    }), "onUpdate:expanded": F[3] || (F[3] = (D) => b(D)) }, Je({ _: 2 }, [Me(h(n), (D, A) => ({ name: A, fn: se((E) => [de(S.$slots, A, Se(Ie({ ...E })))]) }))]), 1032, ["density", "expand-on-click", "group-by", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": se(({ columns: T, item: D, internalItem: A }) => {
      var E, M, H, W, j, L, R, z, G, ne;
      return [Ne("tr", { class: ie(p((E = D[S.itemChildrenKey]) == null ? void 0 : E.loading) ? "" : "d-none") }, [Ne("td", { class: "px-0 ma-0", colspan: T.length, style: { "vertical-align": "top" } }, [(Y(), me(O, { key: A.key, "column-widths": h(o).columnWidths, density: h(o).density, drilldown: h(o), headers: (M = D[S.itemChildrenKey]) == null ? void 0 : M.headers, "is-drilldown": !0, item: D, items: (H = D[S.itemChildrenKey]) == null ? void 0 : H.items, "items-length": (W = D[S.itemChildrenKey]) == null ? void 0 : W.itemsLength, "items-per-page": (j = D[S.itemChildrenKey]) == null ? void 0 : j.itemsPerPage, level: S.level + 1, levels: h(o).levels, loaderProps: (L = D[S.itemChildrenKey]) == null ? void 0 : L.loaderProps, loaderType: (R = D[S.itemChildrenKey]) == null ? void 0 : R.loaderType, loading: (z = D[S.itemChildrenKey]) == null ? void 0 : z.loading, loadingText: S.loadingText, "match-column-widths": h(o).matchColumnWidths, "multi-sort": (G = D[S.itemChildrenKey]) == null ? void 0 : G.multiSort, "no-data-text": h(o).noDataText, server: (ne = D[S.itemChildrenKey]) == null ? void 0 : ne.server, "sort-by": h(o).sortBy, "table-type": h(r), "onUpdate:drilldown": F[4] || (F[4] = (ee) => b(ee)), "onUpdate:modelValue": I }, Je({ default: se(() => [(Y(!0), ce(ae, null, Me(Object.keys(h(n)), (ee) => de(S.$slots, ee)), 256))]), _: 2 }, [Me(h(n), (ee, J) => ({ name: J, fn: se((oe) => [de(S.$slots, J, Se(Ie({ ...oe })))]) }))]), 1032, ["column-widths", "density", "drilldown", "headers", "item", "items", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "sort-by", "table-type"]))], 8, $u)], 2)];
    }), "footer.prepend": se(() => [h(n)["footer.prepend"] ? de(S.$slots, "footer.prepend", { key: 0 }) : ye("", !0)]), _: 2 }, [h(n).loader ? { name: "loader", fn: se(() => [de(S.$slots, "loader")]), key: "0" } : void 0, h(n).loading ? { name: "loading", fn: se(() => [de(S.$slots, "loading")]), key: "1" } : void 0, h(n).thead ? { name: "thead", fn: se((T) => [de(S.$slots, "thead", Se(Ie({ ...T, columnWidths: h(o).columnWidths, items: h(o).items, loaderSettings: { colspan: T.columns.length, loaderType: h(o).loaderType, loading: h(o).loading, loadingText: S.loadingText }, matchColumnWidths: h(o).matchColumnWidths, selectStrategy: h(o).selectStrategy, sortBy: h(o).sortBy })))]), key: "2" } : void 0, h(n).body ? { name: "body", fn: se((T) => [de(S.$slots, "body", Se(Ie({ ...T })))]), key: "3" } : void 0, h(n)["group-header"] ? { name: "group-header", fn: se((T) => [de(S.$slots, "group-header", Se(Ie({ ...T })))]), key: "4" } : void 0, h(n).tbody ? { name: "tbody", fn: se((T) => [de(S.$slots, "tbody", Se(Ie({ ...T })))]), key: "5" } : void 0, h(n)["no-data"] ? { name: "no-data", fn: se(() => [de(S.$slots, "no-data")]), key: "6" } : void 0, h(n).tfoot || S.showFooterRow ? { name: "tfoot", fn: se((T) => [h(n).tfoot ? de(S.$slots, "tfoot", Se(Q({ key: 0 }, { ...T }))) : (Y(), me(h(Cu), { key: S.level, colors: h(o).colors || null, density: h(o).density, footers: h(o).footers || [], items: h(o).items, level: h(o).level, "select-strategy": h(o).selectStrategy, "show-select": h(o).showSelect, "slot-props": { ...T }, "table-model-value": h(o).modelValue }, Je({ _: 2 }, [Me(h(n), (D, A) => ({ name: A, fn: se((E) => [de(S.$slots, A, Se(Ie({ ...E })))]) }))]), 1032, ["colors", "density", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "7" } : void 0, h(n).bottom ? { name: "bottom", fn: se((T) => [(Y(), me(h(Xi), { key: S.level, "slot-props": T }, Je({ _: 2 }, [Me(h(n), (D, A) => ({ name: A, fn: se((E) => [de(S.$slots, A, Se(Ie({ ...E })))]) }))]), 1032, ["slot-props"]))]), key: "8" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "fixed-header", "group-by", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : ye("", !0);
  };
} });
Ca.install = (e) => {
  e.component("VDrilldownTable", Ca);
};
export {
  Ca as default
};
(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".v-drilldown-table--loader-tr[data-v-fbedf16d]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-fbedf16d]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-fbedf16d]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-fbedf16d]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-2cc4d4ca]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-2cc4d4ca]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-2cc4d4ca]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-c971a973]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgba(var(--v-border-color), var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-top:0!important;border-bottom:var(--vdt-border)}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{box-shadow:none}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>th{box-shadow:none!important}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>td{background:unset}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
