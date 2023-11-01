import { Fragment as ae, reactive as Lt, computed as y, watchEffect as Le, toRefs as rn, isVNode as Rr, Comment as jr, capitalize as Mt, warn as Bl, ref as X, unref as h, provide as ye, inject as ve, shallowRef as ue, defineComponent as Xe, camelize as Io, h as bt, getCurrentInstance as Wr, TransitionGroup as Hr, Transition as nt, createVNode as v, mergeProps as te, watch as ee, onScopeDispose as Be, effectScope as sn, nextTick as Ee, isRef as St, onMounted as at, toRaw as Ye, resolveDynamicComponent as Do, toRef as Y, readonly as un, Teleport as zr, withDirectives as Oe, vShow as Ct, resolveDirective as rt, onBeforeUnmount as st, Text as Gr, onBeforeMount as cn, cloneVNode as Kr, createTextVNode as rl, withModifiers as zl, toDisplayString as To, renderSlot as de, resolveComponent as Oo, openBlock as Z, createElementBlock as ce, normalizeClass as ie, normalizeStyle as $e, createElementVNode as Re, createBlock as ge, withCtx as se, normalizeProps as Ce, guardReactiveProps as Ie, createCommentVNode as he, useSlots as Nt, renderList as Ne, toHandlers as qr, getCurrentScope as Ur, mergeDefaults as Yr, useAttrs as Xr, onUnmounted as Jr, createSlots as Qe } from "vue";
import { useTheme as Pl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-14
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
const De = typeof window < "u", dn = De && "IntersectionObserver" in window;
function Lo(e, n, t) {
  const l = n.length - 1;
  if (l < 0)
    return e === void 0 ? t : e;
  for (let o = 0; o < l; o++) {
    if (e == null)
      return t;
    e = e[n[o]];
  }
  return e == null || e[n[l]] === void 0 ? t : e[n[l]];
}
function it(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(n).length && t.every((l) => it(e[l], n[l]));
}
function Vt(e, n, t) {
  return e != null && n && typeof n == "string" ? e[n] !== void 0 ? e[n] : Lo(e, (n = (n = n.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function Pe(e, n, t) {
  if (n === !0)
    return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean")
    return t;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const o = n(e, t);
    return o === void 0 ? t : o;
  }
  if (typeof n == "string")
    return Vt(e, n, t);
  if (Array.isArray(n))
    return Lo(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
function Gl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (t, l) => n + l);
}
function Q(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Kl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ql(e) {
  return e && "$el" in e ? e.$el : e;
}
const Tn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Il(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function yt(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    n.some((r) => r instanceof RegExp ? r.test(a) : r === a) && !(t != null && t.some((r) => r === a)) ? l[a] = e[a] : o[a] = e[a];
  return [l, o];
}
function Rt(e, n) {
  const t = { ...e };
  return n.forEach((l) => delete t[l]), t;
}
const Mo = /^on[^a-z]/, Ul = (e) => Mo.test(e), Zr = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function pn(e) {
  const [n, t] = yt(e, [Mo]), l = Rt(n, Zr), [o, a] = yt(t, ["class", "style", "id", /^data-/]);
  return Object.assign(o, n), Object.assign(a, l), [o, a];
}
function Ve(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function et(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function On(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function pt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const o in e)
    l[o] = e[o];
  for (const o in n) {
    const a = e[o], r = n[o];
    Kl(a) && Kl(r) ? l[o] = pt(a, r, t) : Array.isArray(a) && Array.isArray(r) && t ? l[o] = t(a, r) : l[o] = r;
  }
  return l;
}
function No(e) {
  return e.map((n) => n.type === ae ? No(n.children) : n).flat();
}
function tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (tt.cache.has(e))
    return tt.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return tt.cache.set(e, n), n;
}
function nl(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => nl(e, t)).flat(1);
  if (Array.isArray(n.children))
    return n.children.map((t) => nl(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return nl(e, n.component.subTree).flat(1);
  }
  return [];
}
function vn(e) {
  const n = Lt({}), t = y(e);
  return Le(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, { flush: "sync" }), rn(n);
}
function sl(e, n) {
  return e.includes(n);
}
function Ln(e) {
  return e[2].toLowerCase() + e.slice(3);
}
tt.cache = /* @__PURE__ */ new Map();
const je = () => [Function, Array];
function Mn(e, n) {
  return !!(e[n = "on" + Mt(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function Yl(e) {
  let n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Ro(e, n, t) {
  let l, o = e.indexOf(document.activeElement);
  const a = n === "next" ? 1 : -1;
  do
    o += a, l = e[o];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? 1)) && o < e.length && o >= 0);
  return l;
}
function il(e, n) {
  var l, o, a, r;
  const t = Yl(e);
  if (n)
    if (n === "first")
      (l = t[0]) == null || l.focus();
    else if (n === "last")
      (o = t.at(-1)) == null || o.focus();
    else if (typeof n == "number")
      (a = t[n]) == null || a.focus();
    else {
      const s = Ro(t, n);
      s ? s.focus() : il(e, n === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((r = t[0]) == null || r.focus());
}
function Zt(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function ul(e, n) {
  if (!(De && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function jo(e) {
  return e.some((n) => !Rr(n) || n.type !== jr && (n.type !== ae || jo(n.children))) ? e : null;
}
const Wo = ["top", "bottom"], Qr = ["start", "end", "left", "right"];
function Xl(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = sl(Wo, t) ? "start" : sl(Qr, t) ? "top" : "center"), { side: Nn(t, n), align: Nn(l, n) };
}
function Nn(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function Dl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Tl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Rn(e) {
  return { side: e.align, align: e.side };
}
function jn(e) {
  return sl(Wo, e.side) ? "y" : "x";
}
class gt {
  constructor(n) {
    let { x: t, y: l, width: o, height: a } = n;
    this.x = t, this.y = l, this.width = o, this.height = a;
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
function Wn(e, n) {
  return { x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) }, y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) } };
}
function fn(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let o, a, r, s, i;
    if (l.startsWith("matrix3d("))
      o = l.slice(9, -1).split(/, /), a = +o[0], r = +o[5], s = +o[12], i = +o[13];
    else {
      if (!l.startsWith("matrix("))
        return new gt(n);
      o = l.slice(7, -1).split(/, /), a = +o[0], r = +o[3], s = +o[4], i = +o[5];
    }
    const c = t.transformOrigin, m = n.x - s - (1 - a) * parseFloat(c), f = n.y - i - (1 - r) * parseFloat(c.slice(c.indexOf(" ") + 1)), d = a ? n.width / a : e.offsetWidth + 1, p = r ? n.height / r : e.offsetHeight + 1;
    return new gt({ x: m, y: f, width: d, height: p });
  }
  return new gt(n);
}
function vt(e, n, t) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let l;
  try {
    l = e.animate(n, t);
  } catch {
    return { finished: Promise.resolve() };
  }
  return l.finished === void 0 && (l.finished = new Promise((o) => {
    l.onfinish = () => {
      o(l);
    };
  })), l;
}
const Qt = /* @__PURE__ */ new WeakMap(), dt = 2.4, Hn = 0.2126729, zn = 0.7151522, Gn = 0.072175, es = 0.55, ts = 0.58, ls = 0.57, ns = 0.62, el = 0.03, Kn = 1.45, os = 5e-4, as = 1.25, rs = 1.25, qn = 0.078, Un = 12.82051282051282, tl = 0.06, Yn = 1e-3;
function Xn(e, n) {
  const t = (e.r / 255) ** dt, l = (e.g / 255) ** dt, o = (e.b / 255) ** dt, a = (n.r / 255) ** dt, r = (n.g / 255) ** dt, s = (n.b / 255) ** dt;
  let i, c = t * Hn + l * zn + o * Gn, m = a * Hn + r * zn + s * Gn;
  if (c <= el && (c += (el - c) ** Kn), m <= el && (m += (el - m) ** Kn), Math.abs(m - c) < os)
    return 0;
  if (m > c) {
    const f = (m ** es - c ** ts) * as;
    i = f < Yn ? 0 : f < qn ? f - f * Un * tl : f - tl;
  } else {
    const f = (m ** ns - c ** ls) * rs;
    i = f > -Yn ? 0 : f > -qn ? f - f * Un * tl : f + tl;
  }
  return 100 * i;
}
function $t(e) {
  Bl(`Vuetify: ${e}`);
}
function Ol(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Jn = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, ss = { rgb: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), rgba: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), hsl: (e, n, t, l) => Zn({ h: e, s: n, l: t, a: l }), hsla: (e, n, t, l) => Zn({ h: e, s: n, l: t, a: l }), hsv: (e, n, t, l) => Et({ h: e, s: n, v: t, a: l }), hsva: (e, n, t, l) => Et({ h: e, s: n, v: t, a: l }) };
function Bt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && $t(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Jn.test(e)) {
    const { groups: n } = e.match(Jn), { fn: t, values: l } = n, o = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(a) / 100 : parseFloat(a));
    return ss[t](...o);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || $t(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && $t(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(i) {
        return i.startsWith("#") && (i = i.slice(1)), i = i.replace(/([^0-9a-f])/gi, "F"), (i.length === 3 || i.length === 4) && (i = i.split("").map((c) => c + c).join("")), i.length !== 6 && (i = On(On(i, 6), 8, "F")), i;
      }(l);
      let [o, a, r, s] = function(i) {
        let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const m = [];
        let f = 0;
        for (; f < i.length; )
          m.push(i.substr(f, c)), f += c;
        return m;
      }(l, 2).map((i) => parseInt(i, 16));
      return s = s === void 0 ? s : s / 255, { r: o, g: a, b: r, a: s };
    }(n);
  }
  if (typeof e == "object") {
    if (Il(e, ["r", "g", "b"]))
      return e;
    if (Il(e, ["h", "s", "l"]))
      return Et(Ho(e));
    if (Il(e, ["h", "s", "v"]))
      return Et(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Et(e) {
  const { h: n, s: t, v: l, a: o } = e, a = (s) => {
    const i = (s + n / 60) % 6;
    return l - l * t * Math.max(Math.min(i, 4 - i, 1), 0);
  }, r = [a(5), a(3), a(1)].map((s) => Math.round(255 * s));
  return { r: r[0], g: r[1], b: r[2], a: o };
}
function Zn(e) {
  return Et(Ho(e));
}
function Ho(e) {
  const { h: n, s: t, l, a: o } = e, a = l + t * Math.min(l, 1 - l);
  return { h: n, s: a === 0 ? 0 : 2 - 2 * l / a, v: a, a: o };
}
function W(e, n) {
  return (t) => Object.keys(e).reduce((l, o) => {
    const a = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = t && o in t ? { ...a, default: t[o] } : a, n && !l[o].source && (l[o].source = n), l;
  }, {});
}
const re = W({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), cl = Symbol.for("vuetify:defaults");
function mn() {
  const e = ve(cl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ut(e, n) {
  const t = mn(), l = X(e), o = y(() => {
    if (h(n == null ? void 0 : n.disabled))
      return t.value;
    const a = h(n == null ? void 0 : n.scoped), r = h(n == null ? void 0 : n.reset), s = h(n == null ? void 0 : n.root);
    if (l.value == null && !(a || r || s))
      return t.value;
    let i = pt(l.value, { prev: t.value });
    if (a)
      return i;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let m = 0; m <= c && i && "prev" in i; m++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = pt(pt(i, { prev: i }), i[s])), i;
    }
    return i.prev ? pt(i.prev, i) : i;
  });
  return ye(cl, o), o;
}
function is() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mn();
  const l = we("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const o = y(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), a = new Proxy(e, { get(s, i) {
    var m, f, d, p;
    const c = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(m = o.value) == null ? void 0 : m[i], c].filter((C) => C != null) : typeof i != "string" || function(C, u) {
      var g, S;
      return ((g = C.props) == null ? void 0 : g[u]) !== void 0 || ((S = C.props) == null ? void 0 : S[tt(u)]) !== void 0;
    }(l.vnode, i) ? c : ((f = o.value) == null ? void 0 : f[i]) ?? ((p = (d = t.value) == null ? void 0 : d.global) == null ? void 0 : p[i]) ?? c;
  } }), r = ue();
  return Le(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((i) => {
        let [c] = i;
        return c.startsWith(c[0].toUpperCase());
      });
      r.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      r.value = void 0;
  }), { props: a, provideSubDefaults: function() {
    const s = function(i) {
      let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we("injectSelf");
      const { provides: m } = c;
      if (m && i in m)
        return m[i];
    }(cl, l);
    ye(cl, y(() => r.value ? pt((s == null ? void 0 : s.value) ?? {}, r.value) : s == null ? void 0 : s.value));
  } };
}
function It(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return $t("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = W(e.props ?? {}, e.name)();
    const n = Object.keys(e.props);
    e.filterProps = function(t) {
      return yt(t, n, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, l) {
      const o = mn();
      if (!o.value)
        return e._setup(t, l);
      const { props: a, provideSubDefaults: r } = is(t, t._as ?? e.name, o), s = e._setup(a, l);
      return r(), s;
    };
  }
  return e;
}
function J() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? It : Xe)(n);
}
function zo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return J()({ name: t ?? Mt(Io(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...re() }, setup(l, o) {
    let { slots: a } = o;
    return () => {
      var r;
      return bt(l.tag, { class: [e, l.class], style: l.style }, (r = a.default) == null ? void 0 : r.call(a));
    };
  } });
}
function Go(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const dl = "cubic-bezier(0.4, 0, 0.2, 1)";
function we(e, n) {
  const t = Wr();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function ze() {
  const e = we(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return tt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Ko = 0, ol = /* @__PURE__ */ new WeakMap();
function We() {
  const e = we("getUid");
  if (ol.has(e))
    return ol.get(e);
  {
    const n = Ko++;
    return ol.set(e, n), n;
  }
}
function qo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (n ? us(e) : gn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function pl(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (gn(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function gn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function us(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function ne(e) {
  we("useRender").render = e;
}
We.reset = () => {
  Ko = 0, ol = /* @__PURE__ */ new WeakMap();
};
const cs = W({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Ae(e, n, t) {
  return J()({ name: e, props: cs({ mode: t, origin: n }), setup(l, o) {
    let { slots: a } = o;
    const r = { onBeforeEnter(s) {
      l.origin && (s.style.transformOrigin = l.origin);
    }, onLeave(s) {
      if (l.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: c, offsetWidth: m, offsetHeight: f } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${i}px`, s.style.left = `${c}px`, s.style.width = `${m}px`, s.style.height = `${f}px`;
      }
      l.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (l.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: i, top: c, left: m, width: f, height: d } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = i || "", s.style.top = c || "", s.style.left = m || "", s.style.width = f || "", s.style.height = d || "";
      }
    } };
    return () => {
      const s = l.group ? Hr : nt;
      return bt(s, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : r }, a.default);
    };
  } });
}
function Uo(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return J()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(l, o) {
    let { slots: a } = o;
    return () => bt(nt, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : n }, a.default);
  } });
}
function Yo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = Io(`offset-${n}`);
  return { onBeforeEnter(a) {
    a._parent = a.parentNode, a._initialStyle = { transition: a.style.transition, overflow: a.style.overflow, [n]: a.style[n] };
  }, onEnter(a) {
    const r = a._initialStyle;
    a.style.setProperty("transition", "none", "important"), a.style.overflow = "hidden";
    const s = `${a[t]}px`;
    a.style[n] = "0", a.offsetHeight, a.style.transition = r.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
      a.style[n] = s;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(a) {
    a._initialStyle = { transition: "", overflow: a.style.overflow, [n]: a.style[n] }, a.style.overflow = "hidden", a.style[n] = `${a[t]}px`, a.offsetHeight, requestAnimationFrame(() => a.style[n] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(a) {
    e && a._parent && a._parent.classList.remove(e), o(a);
  }
  function o(a) {
    const r = a._initialStyle[n];
    a.style.overflow = a._initialStyle.overflow, r != null && (a.style[n] = r), delete a._initialStyle;
  }
}
const ds = W({ target: Object }, "v-dialog-transition"), Xo = J()({ name: "VDialogTransition", props: ds(), setup(e, n) {
  let { slots: t } = n;
  const l = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, a) {
    var d;
    await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => requestAnimationFrame(p)), o.style.visibility = "";
    const { x: r, y: s, sx: i, sy: c, speed: m } = eo(e.target, o), f = vt(o, [{ transform: `translate(${r}px, ${s}px) scale(${i}, ${c})`, opacity: 0 }, {}], { duration: 225 * m, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (d = Qn(o)) == null || d.forEach((p) => {
      vt(p, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * m, easing: dl });
    }), f.finished.then(() => a());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, a) {
    var f;
    await new Promise((d) => requestAnimationFrame(d));
    const { x: r, y: s, sx: i, sy: c, speed: m } = eo(e.target, o);
    vt(o, [{}, { transform: `translate(${r}px, ${s}px) scale(${i}, ${c})`, opacity: 0 }], { duration: 125 * m, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => a()), (f = Qn(o)) == null || f.forEach((d) => {
      vt(d, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * m, easing: dl });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? v(nt, te({ name: "dialog-transition" }, l, { css: !1 }), t) : v(nt, { name: "dialog-transition" }, t);
} });
function Qn(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function eo(e, n) {
  const t = e.getBoundingClientRect(), l = fn(n), [o, a] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [r, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  r === "left" || s === "left" ? i -= t.width / 2 : r !== "right" && s !== "right" || (i += t.width / 2);
  let c = t.top + t.height / 2;
  r === "top" || s === "top" ? c -= t.height / 2 : r !== "bottom" && s !== "bottom" || (c += t.height / 2);
  const m = t.width / l.width, f = t.height / l.height, d = Math.max(1, m, f), p = m / d || 0, C = f / d || 0, u = l.width * l.height / (window.innerWidth * window.innerHeight), g = u > 0.12 ? Math.min(1.5, 10 * (u - 0.12) + 1) : 1;
  return { x: i - (o + l.left), y: c - (a + l.top), sx: p, sy: C, speed: g };
}
Ae("fab-transition", "center center", "out-in"), Ae("dialog-bottom-transition"), Ae("dialog-top-transition"), Ae("fade-transition"), Ae("scale-transition"), Ae("scroll-x-transition"), Ae("scroll-x-reverse-transition"), Ae("scroll-y-transition"), Ae("scroll-y-reverse-transition"), Ae("slide-x-transition"), Ae("slide-x-reverse-transition");
const Jo = Ae("slide-y-transition");
Ae("slide-y-reverse-transition");
const ps = Uo("expand-transition", Yo()), Zo = Uo("expand-x-transition", Yo("", !0)), vs = W({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Te = J(!1)({ name: "VDefaultsProvider", props: vs(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: l, disabled: o, reset: a, root: r, scoped: s } = rn(e);
  return ut(l, { reset: a, root: r, scoped: s, disabled: o }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} });
function lt(e, n) {
  let t;
  function l() {
    t = sn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  ee(e, (o) => {
    o && !t ? l() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Be(() => {
    t == null || t.stop();
  });
}
function Ll(e, n) {
  return { x: e.x + n.x, y: e.y + n.y };
}
function to(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: l } = e;
    return Ll({ x: l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, y: t === "top" ? 0 : t === "bottom" ? n.height : t }, n);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: l } = e;
    return Ll({ x: t === "left" ? 0 : t === "right" ? n.width : t, y: l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l }, n);
  }
  return Ll({ x: n.width / 2, y: n.height / 2 }, n);
}
const Qo = { static: function() {
}, connected: function(e, n, t) {
  (function(p) {
    for (; p; ) {
      if (window.getComputedStyle(p).position === "fixed")
        return !0;
      p = p.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = vn(() => {
    const p = Xl(n.location, e.isRtl.value), C = n.origin === "overlap" ? p : n.origin === "auto" ? Dl(p) : Xl(n.origin, e.isRtl.value);
    return p.side === C.side && p.align === Tl(C).align ? { preferredAnchor: Rn(p), preferredOrigin: Rn(C) } : { preferredAnchor: p, preferredOrigin: C };
  }), [a, r, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => y(() => {
    const C = parseFloat(n[p]);
    return isNaN(C) ? 1 / 0 : C;
  })), c = y(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const p = n.offset.split(" ").map(parseFloat);
      return p.length < 2 && p.push(0), p;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let m = !1;
  const f = new ResizeObserver(() => {
    m && d();
  });
  function d() {
    if (m = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => m = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const p = e.activatorEl.value.getBoundingClientRect(), C = function(b, E) {
      E ? b.style.removeProperty("left") : b.style.removeProperty("right");
      const A = fn(b);
      return E ? A.x += parseFloat(b.style.right || 0) : A.x -= parseFloat(b.style.left || 0), A.y -= parseFloat(b.style.top || 0), A;
    }(e.contentEl.value, e.isRtl.value), u = pl(e.contentEl.value);
    u.length || (u.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (C.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), C.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const g = u.reduce((b, E) => {
      const A = E.getBoundingClientRect(), L = new gt({ x: E === document.documentElement ? 0 : A.x, y: E === document.documentElement ? 0 : A.y, width: E.clientWidth, height: E.clientHeight });
      return b ? new gt({ x: Math.max(b.left, L.left), y: Math.max(b.top, L.top), width: Math.min(b.right, L.right) - Math.max(b.left, L.left), height: Math.min(b.bottom, L.bottom) - Math.max(b.top, L.top) }) : L;
    }, void 0);
    g.x += 12, g.y += 12, g.width -= 24, g.height -= 24;
    let S = { anchor: l.value, origin: o.value };
    function k(b) {
      const E = new gt(C), A = to(b.anchor, p), L = to(b.origin, E);
      let { x: M, y: H } = (I = L, { x: (K = A).x - I.x, y: K.y - I.y });
      var K, I;
      switch (b.anchor.side) {
        case "top":
          H -= c.value[0];
          break;
        case "bottom":
          H += c.value[0];
          break;
        case "left":
          M -= c.value[0];
          break;
        case "right":
          M += c.value[0];
      }
      switch (b.anchor.align) {
        case "top":
          H -= c.value[1];
          break;
        case "bottom":
          H += c.value[1];
          break;
        case "left":
          M -= c.value[1];
          break;
        case "right":
          M += c.value[1];
      }
      return E.x += M, E.y += H, E.width = Math.min(E.width, s.value), E.height = Math.min(E.height, i.value), { overflows: Wn(E, g), x: M, y: H };
    }
    let $ = 0, P = 0;
    const w = { x: 0, y: 0 }, F = { x: !1, y: !1 };
    let x = -1;
    for (; ; ) {
      if (x++ > 10) {
        Bl("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: b, y: E, overflows: A } = k(S);
      $ += b, P += E, C.x += b, C.y += E;
      {
        const L = jn(S.anchor), M = A.x.before || A.x.after, H = A.y.before || A.y.after;
        let K = !1;
        if (["x", "y"].forEach((I) => {
          if (I === "x" && M && !F.x || I === "y" && H && !F.y) {
            const N = { anchor: { ...S.anchor }, origin: { ...S.origin } }, j = I === "x" ? L === "y" ? Tl : Dl : L === "y" ? Dl : Tl;
            N.anchor = j(N.anchor), N.origin = j(N.origin);
            const { overflows: G } = k(N);
            (G[I].before <= A[I].before && G[I].after <= A[I].after || G[I].before + G[I].after < (A[I].before + A[I].after) / 2) && (S = N, K = F[I] = !0);
          }
        }), K)
          continue;
      }
      A.x.before && ($ += A.x.before, C.x += A.x.before), A.x.after && ($ -= A.x.after, C.x -= A.x.after), A.y.before && (P += A.y.before, C.y += A.y.before), A.y.after && (P -= A.y.after, C.y -= A.y.after);
      {
        const L = Wn(C, g);
        w.x = g.width - L.x.before - L.x.after, w.y = g.height - L.y.before - L.y.after, $ += L.x.before, C.x += L.x.before, P += L.y.before, C.y += L.y.before;
      }
      break;
    }
    const B = jn(S.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: Q(Ml(P)), left: e.isRtl.value ? void 0 : Q(Ml($)), right: e.isRtl.value ? Q(Ml(-$)) : void 0, minWidth: Q(B === "y" ? Math.min(a.value, p.width) : a.value), maxWidth: Q(lo(et(w.x, a.value === 1 / 0 ? 0 : a.value, s.value))), maxHeight: Q(lo(et(w.y, r.value === 1 / 0 ? 0 : r.value, i.value))) }), { available: w, contentBox: C };
  }
  return ee([e.activatorEl, e.contentEl], (p, C) => {
    let [u, g] = p, [S, k] = C;
    S && f.unobserve(S), u && f.observe(u), k && f.unobserve(k), g && f.observe(g);
  }, { immediate: !0 }), Be(() => {
    f.disconnect();
  }), ee(() => [l.value, o.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), Ee(() => {
    const p = d();
    if (!p)
      return;
    const { available: C, contentBox: u } = p;
    u.height > C.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), { updateLocation: d };
} }, fs = W({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Qo }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Ml(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function lo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Jl = !0;
const vl = [];
let no = -1;
function Zl() {
  cancelAnimationFrame(no), no = requestAnimationFrame(() => {
    const e = vl.shift();
    e && e(), vl.length ? Zl() : Jl = !0;
  });
}
const al = { none: null, close: function(e) {
  oo(e.activatorEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, l = [.../* @__PURE__ */ new Set([...pl(e.activatorEl.value, n.contained ? t : void 0), ...pl(e.contentEl.value, n.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, a = (r = t || document.documentElement, gn(r) && r);
  var r;
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((i, c) => {
    i.style.setProperty("--v-body-scroll-x", Q(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", Q(-i.scrollTop)), i !== document.documentElement && i.style.setProperty("--v-scrollbar-offset", Q(o)), i.classList.add("v-overlay-scroll-blocked");
  }), Be(() => {
    l.forEach((i, c) => {
      const m = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), f = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -m, i.scrollTop = -f;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, n, t) {
  let l = !1, o = -1, a = -1;
  function r(s) {
    var i;
    i = () => {
      var f, d;
      const c = performance.now();
      (d = (f = e.updateLocation).value) == null || d.call(f, s), l = (performance.now() - c) / (1e3 / 60) > 2;
    }, !Jl || vl.length ? (vl.push(i), Zl()) : (Jl = !1, i(), Zl());
  }
  a = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      oo(e.activatorEl.value ?? e.contentEl.value, (s) => {
        l ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            r(s);
          });
        })) : r(s);
      });
    });
  }), Be(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(a), cancelAnimationFrame(o);
  });
} }, ms = W({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in al } }, "VOverlay-scroll-strategies");
function oo(e, n) {
  const t = [document, ...pl(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, { passive: !0 });
  }), Be(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const Ql = Symbol.for("vuetify:v-menu"), gs = W({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), ys = W({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...gs() }, "VOverlay-activator");
function hs(e, n) {
  let { isActive: t, isTop: l } = n;
  const o = X();
  let a = !1, r = !1, s = !0;
  const i = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), c = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: m, runCloseDelay: f } = function(x, B) {
    const b = {}, E = (A) => () => {
      if (!De)
        return Promise.resolve(!0);
      const L = A === "openDelay";
      return b.closeDelay && window.clearTimeout(b.closeDelay), delete b.closeDelay, b.openDelay && window.clearTimeout(b.openDelay), delete b.openDelay, new Promise((M) => {
        const H = parseInt(x[A] ?? 0, 10);
        b[A] = window.setTimeout(() => {
          B == null || B(L), M(L);
        }, H);
      });
    };
    return { runCloseDelay: E("closeDelay"), runOpenDelay: E("openDelay") };
  }(e, (x) => {
    x !== (e.openOnHover && a || i.value && r) || e.openOnHover && t.value && !l.value || (t.value !== x && (s = !0), t.value = x);
  }), d = (x) => {
    x.stopPropagation(), o.value = x.currentTarget || x.target, t.value = !t.value;
  }, p = (x) => {
    var B;
    (B = x.sourceCapabilities) != null && B.firesTouchEvents || (a = !0, o.value = x.currentTarget || x.target, m());
  }, C = (x) => {
    a = !1, f();
  }, u = (x) => {
    ul(x.target, ":focus-visible") !== !1 && (r = !0, x.stopPropagation(), o.value = x.currentTarget || x.target, m());
  }, g = (x) => {
    r = !1, x.stopPropagation(), f();
  }, S = y(() => {
    const x = {};
    return c.value && (x.onClick = d), e.openOnHover && (x.onMouseenter = p, x.onMouseleave = C), i.value && (x.onFocus = u, x.onBlur = g), x;
  }), k = y(() => {
    const x = {};
    if (e.openOnHover && (x.onMouseenter = () => {
      a = !0, m();
    }, x.onMouseleave = () => {
      a = !1, f();
    }), i.value && (x.onFocusin = () => {
      r = !0, m();
    }, x.onFocusout = () => {
      r = !1, f();
    }), e.closeOnContentClick) {
      const B = ve(Ql, null);
      x.onClick = () => {
        t.value = !1, B == null || B.closeParents();
      };
    }
    return x;
  }), $ = y(() => {
    const x = {};
    return e.openOnHover && (x.onMouseenter = () => {
      s && (a = !0, s = !1, m());
    }, x.onMouseleave = () => {
      a = !1, f();
    }), x;
  });
  ee(l, (x) => {
    !x || (!e.openOnHover || a || i.value && r) && (!i.value || r || e.openOnHover && a) || (t.value = !1);
  });
  const P = X();
  Le(() => {
    P.value && Ee(() => {
      o.value = ql(P.value);
    });
  });
  const w = we("useActivator");
  let F;
  return ee(() => !!e.activator, (x) => {
    x && De ? (F = sn(), F.run(() => {
      (function(B, b, E) {
        let { activatorEl: A, activatorEvents: L } = E;
        function M() {
          let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K(), N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B.activatorProps;
          I && function(j, G) {
            Object.keys(G).forEach((_) => {
              if (Ul(_)) {
                const T = Ln(_), V = Qt.get(j);
                if (G[_] == null)
                  V == null || V.forEach((D) => {
                    const [O, R] = D;
                    O === T && (j.removeEventListener(T, R), V.delete(D));
                  });
                else if (!V || ![...V].some((D) => D[0] === T && D[1] === G[_])) {
                  j.addEventListener(T, G[_]);
                  const D = V || /* @__PURE__ */ new Set();
                  D.add([T, G[_]]), Qt.has(j) || Qt.set(j, D);
                }
              } else
                G[_] == null ? j.removeAttribute(_) : j.setAttribute(_, G[_]);
            });
          }(I, te(L.value, N));
        }
        function H() {
          let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K(), N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B.activatorProps;
          I && function(j, G) {
            Object.keys(G).forEach((_) => {
              if (Ul(_)) {
                const T = Ln(_), V = Qt.get(j);
                V == null || V.forEach((D) => {
                  const [O, R] = D;
                  O === T && (j.removeEventListener(T, R), V.delete(D));
                });
              } else
                j.removeAttribute(_);
            });
          }(I, te(L.value, N));
        }
        function K() {
          var j, G;
          let I, N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : B.activator;
          if (N)
            if (N === "parent") {
              let _ = (G = (j = b == null ? void 0 : b.proxy) == null ? void 0 : j.$el) == null ? void 0 : G.parentNode;
              for (; _ != null && _.hasAttribute("data-no-activator"); )
                _ = _.parentNode;
              I = _;
            } else
              I = typeof N == "string" ? document.querySelector(N) : "$el" in N ? N.$el : N;
          return A.value = (I == null ? void 0 : I.nodeType) === Node.ELEMENT_NODE ? I : null, A.value;
        }
        ee(() => B.activator, (I, N) => {
          if (N && I !== N) {
            const j = K(N);
            j && H(j);
          }
          I && Ee(() => M());
        }, { immediate: !0 }), ee(() => B.activatorProps, () => {
          M();
        }), Be(() => {
          H();
        });
      })(e, w, { activatorEl: o, activatorEvents: S });
    })) : F && F.stop();
  }, { flush: "post", immediate: !0 }), Be(() => {
    F == null || F.stop();
  }), { activatorEl: o, activatorRef: P, activatorEvents: S, contentEvents: k, scrimEvents: $ };
}
function yn(e) {
  return vn(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Ol(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Ol(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const o = Bt(e.value.background);
          if (o.a == null || o.a === 1) {
            const a = function(r) {
              const s = Math.abs(Xn(Bt(0), Bt(r)));
              return Math.abs(Xn(Bt(16777215), Bt(r))) > Math.min(s, 50) ? "#fff" : "#000";
            }(o);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (Ol(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function He(e, n) {
  const t = y(() => ({ text: St(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = yn(t);
  return { textColorClasses: l, textColorStyles: o };
}
function ot(e, n) {
  const t = y(() => ({ background: St(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = yn(t);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
const wt = W({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function xt(e) {
  return { dimensionStyles: y(() => ({ height: Q(e.height), maxHeight: Q(e.maxHeight), maxWidth: Q(e.maxWidth), minHeight: Q(e.minHeight), minWidth: Q(e.minWidth), width: Q(e.width) })) };
}
const _l = ["sm", "md", "lg", "xl", "xxl"], bs = Symbol.for("vuetify:display");
function ea() {
  const e = ve(bs);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
const Ss = W({ eager: Boolean }, "lazy");
function fe(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (m) => m, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (m) => m;
  const a = we("useProxiedModel"), r = X(e[n] !== void 0 ? e[n] : t), s = tt(n), i = y(s !== n ? () => {
    var m, f, d, p;
    return e[n], !(!((m = a.vnode.props) != null && m.hasOwnProperty(n)) && !((f = a.vnode.props) != null && f.hasOwnProperty(s)) || !((d = a.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`)) && !((p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var m, f;
    return e[n], !(!((m = a.vnode.props) != null && m.hasOwnProperty(n)) || !((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)));
  });
  lt(() => !i.value, () => {
    ee(() => e[n], (m) => {
      r.value = m;
    });
  });
  const c = y({ get() {
    const m = e[n];
    return l(i.value ? m : r.value);
  }, set(m) {
    const f = o(m), d = Ye(i.value ? e[n] : r.value);
    d !== f && l(d) !== m && (r.value = f, a == null || a.emit(`update:${n}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => i.value ? e[n] : r.value }), c;
}
const ta = Symbol.for("vuetify:locale");
function kt() {
  const e = ve(ta);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function jt() {
  const e = ve(ta);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function hn(e, n) {
  const t = Do("RouterLink"), l = y(() => !(!e.href && !e.to)), o = y(() => (l == null ? void 0 : l.value) || Mn(n, "click") || Mn(e, "click"));
  if (typeof t == "string")
    return { isLink: l, isClickable: o, href: Y(e, "href") };
  const a = e.to ? t.useLink(e) : void 0;
  return { isLink: l, isClickable: o, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && y(() => {
    var r, s;
    return e.exact ? (r = a.isExactActive) == null ? void 0 : r.value : (s = a.isActive) == null ? void 0 : s.value;
  }), href: y(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const bn = W({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Nl = !1;
function la() {
  const e = we("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const ao = Symbol.for("vuetify:stack"), Pt = Lt([]), ro = Symbol.for("vuetify:theme"), xe = W({ theme: String }, "theme");
function _e(e) {
  we("provideTheme");
  const n = ve(ro, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? n.name.value), l = y(() => n.themes.value[t.value]), o = y(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), a = { ...n, name: t, current: l, themeClasses: o };
  return ye(ro, a), a;
}
const Wt = W({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ue = (e, n) => {
  let { slots: t } = n;
  const { transition: l, disabled: o, ...a } = e, { component: r = nt, ...s } = typeof l == "object" ? l : {};
  return bt(r, te(typeof l == "string" ? { name: o ? "" : l } : s, a, { disabled: o }), t);
};
function Cs() {
  return !0;
}
function so(e, n, t) {
  if (!e || na(e, t) === !1)
    return !1;
  const l = Go(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(n), !o.some((a) => a == null ? void 0 : a.contains(e.target));
}
function na(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Cs)(e);
}
function io(e, n) {
  const t = Go(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const ws = { mounted(e, n) {
  const t = (o) => function(a, r, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    r._clickOutside.lastMousedownWasOutside && so(a, r, s) && setTimeout(() => {
      na(a, s) && i && i(a);
    }, 0);
  }(o, e, n), l = (o) => {
    e._clickOutside.lastMousedownWasOutside = so(o, e, n);
  };
  io(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: l };
}, unmounted(e, n) {
  e._clickOutside && (io(e, (t) => {
    var a;
    if (!t || !((a = e._clickOutside) != null && a[n.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: o } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[n.instance.$.uid]);
} };
function xs(e) {
  const { modelValue: n, color: t, ...l } = e;
  return v(nt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && v("div", te({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const oa = W({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...ys(), ...re(), ...wt(), ...Ss(), ...fs(), ...ms(), ...xe(), ...Wt() }, "VOverlay"), uo = J()({ name: "VOverlay", directives: { ClickOutside: ws }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...oa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
  var _, T;
  let { slots: t, attrs: l, emit: o } = n;
  const a = fe(e, "modelValue"), r = y({ get: () => a.value, set: (V) => {
    V && e.disabled || (a.value = V);
  } }), { teleportTarget: s } = (i = y(() => e.attach || e.contained), { teleportTarget: y(() => {
    const V = i.value;
    if (V === !0 || !De)
      return;
    const D = V === !1 ? document.body : typeof V == "string" ? document.querySelector(V) : V;
    if (D == null)
      return void Bl(`Unable to locate target ${V}`);
    let O = D.querySelector(":scope > .v-overlay-container");
    return O || (O = document.createElement("div"), O.className = "v-overlay-container", D.appendChild(O)), O;
  }) });
  var i;
  const { themeClasses: c } = _e(e), { rtlClasses: m, isRtl: f } = jt(), { hasContent: d, onAfterLeave: p } = function(V, D) {
    const O = ue(!1), R = y(() => O.value || V.eager || D.value);
    return ee(D, () => O.value = !0), { isBooted: O, hasContent: R, onAfterLeave: function() {
      V.eager || (O.value = !1);
    } };
  }(e, r), C = ot(y(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: u, localTop: g, stackStyles: S } = function(V, D, O) {
    const R = we("useStack"), z = !O, U = ve(ao, void 0), q = Lt({ activeChildren: /* @__PURE__ */ new Set() });
    ye(ao, q);
    const oe = ue(+D.value);
    lt(V, () => {
      var qe;
      const Se = (qe = Pt.at(-1)) == null ? void 0 : qe[1];
      oe.value = Se ? Se + 10 : +D.value, z && Pt.push([R.uid, oe.value]), U == null || U.activeChildren.add(R.uid), Be(() => {
        if (z) {
          const Yt = Ye(Pt).findIndex((Xt) => Xt[0] === R.uid);
          Pt.splice(Yt, 1);
        }
        U == null || U.activeChildren.delete(R.uid);
      });
    });
    const me = ue(!0);
    z && Le(() => {
      var qe;
      const Se = ((qe = Pt.at(-1)) == null ? void 0 : qe[0]) === R.uid;
      setTimeout(() => me.value = Se);
    });
    const Me = y(() => !q.activeChildren.size);
    return { globalTop: un(me), localTop: Me, stackStyles: y(() => ({ zIndex: oe.value })) };
  }(r, Y(e, "zIndex"), e._disableGlobalStack), { activatorEl: k, activatorRef: $, activatorEvents: P, contentEvents: w, scrimEvents: F } = hs(e, { isActive: r, isTop: g }), { dimensionStyles: x } = xt(e), B = function() {
    if (!De)
      return ue(!1);
    const { ssr: V } = ea();
    if (V) {
      const D = ue(!1);
      return at(() => {
        D.value = !0;
      }), D;
    }
    return ue(!0);
  }(), { scopeId: b } = la();
  ee(() => e.disabled, (V) => {
    V && (r.value = !1);
  });
  const E = X(), A = X(), { contentStyles: L, updateLocation: M } = function(V, D) {
    const O = X({}), R = X();
    function z(U) {
      var q;
      (q = R.value) == null || q.call(R, U);
    }
    return De && (lt(() => !(!D.isActive.value || !V.locationStrategy), (U) => {
      var q, oe;
      ee(() => V.locationStrategy, U), Be(() => {
        R.value = void 0;
      }), typeof V.locationStrategy == "function" ? R.value = (q = V.locationStrategy(D, V, O)) == null ? void 0 : q.updateLocation : R.value = (oe = Qo[V.locationStrategy](D, V, O)) == null ? void 0 : oe.updateLocation;
    }), window.addEventListener("resize", z, { passive: !0 }), Be(() => {
      window.removeEventListener("resize", z), R.value = void 0;
    })), { contentStyles: O, updateLocation: R };
  }(e, { isRtl: f, contentEl: A, activatorEl: k, isActive: r });
  function H(V) {
    o("click:outside", V), e.persistent ? G() : r.value = !1;
  }
  function K() {
    return r.value && u.value;
  }
  function I(V) {
    var D, O;
    V.key === "Escape" && u.value && (e.persistent ? G() : (r.value = !1, (D = A.value) != null && D.contains(document.activeElement) && ((O = k.value) == null || O.focus())));
  }
  (function(V, D) {
    if (!De)
      return;
    let O;
    Le(async () => {
      O == null || O.stop(), D.isActive.value && V.scrollStrategy && (O = sn(), await Ee(), O.active && O.run(() => {
        var R;
        typeof V.scrollStrategy == "function" ? V.scrollStrategy(D, V, O) : (R = al[V.scrollStrategy]) == null || R.call(al, D, V, O);
      }));
    }), Be(() => {
      O == null || O.stop();
    });
  })(e, { root: E, contentEl: A, activatorEl: k, isActive: r, updateLocation: M }), De && ee(r, (V) => {
    V ? window.addEventListener("keydown", I) : window.removeEventListener("keydown", I);
  }, { immediate: !0 });
  const N = (T = (_ = we("useRouter")) == null ? void 0 : _.proxy) == null ? void 0 : T.$router;
  lt(() => e.closeOnBack, () => {
    (function(V, D) {
      let O, R, z = !1;
      function U(q) {
        var oe;
        (oe = q.state) != null && oe.replaced || (z = !0, setTimeout(() => z = !1));
      }
      De && (Ee(() => {
        window.addEventListener("popstate", U), O = V == null ? void 0 : V.beforeEach((q, oe, me) => {
          Nl ? z ? D(me) : me() : setTimeout(() => z ? D(me) : me()), Nl = !0;
        }), R = V == null ? void 0 : V.afterEach(() => {
          Nl = !1;
        });
      }), Be(() => {
        window.removeEventListener("popstate", U), O == null || O(), R == null || R();
      }));
    })(N, (V) => {
      u.value && r.value ? (V(!1), e.persistent ? G() : r.value = !1) : V();
    });
  });
  const j = X();
  function G() {
    e.noClickAnimation || A.value && vt(A.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: dl });
  }
  return ee(() => r.value && (e.absolute || e.contained) && s.value == null, (V) => {
    if (V) {
      const D = qo(E.value);
      D && D !== document.scrollingElement && (j.value = D.scrollTop);
    }
  }), ne(() => {
    var V;
    return v(ae, null, [(V = t.activator) == null ? void 0 : V.call(t, { isActive: r.value, props: te({ ref: $ }, P.value, e.activatorProps) }), B.value && d.value && v(zr, { disabled: !s.value, to: s.value }, { default: () => [v("div", te({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": r.value, "v-overlay--contained": e.contained }, c.value, m.value, e.class], style: [S.value, { top: Q(j.value) }, e.style], ref: E }, b, l), [v(xs, te({ color: C, modelValue: r.value && !!e.scrim }, F.value), null), v(Ue, { appear: !0, persisted: !0, transition: e.transition, target: k.value, onAfterLeave: () => {
      p(), o("afterLeave");
    } }, { default: () => {
      var D;
      return [Oe(v("div", te({ ref: A, class: ["v-overlay__content", e.contentClass], style: [x.value, L.value] }, w.value, e.contentProps), [(D = t.default) == null ? void 0 : D.call(t, { isActive: r })]), [[Ct, r.value], [rt("click-outside"), { handler: H, closeConditional: K, include: () => [k.value] }]])];
    } })])] })]);
  }), { activatorEl: k, animateClick: G, contentEl: A, globalTop: u, localTop: g, updateLocation: M };
} }), Rl = Symbol("Forwarded refs");
function jl(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function Sn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[Rl] = t, new Proxy(e, { get(o, a) {
    if (Reflect.has(o, a))
      return Reflect.get(o, a);
    if (typeof a != "symbol" && !a.startsWith("$") && !a.startsWith("__")) {
      for (const r of t)
        if (r.value && Reflect.has(r.value, a)) {
          const s = Reflect.get(r.value, a);
          return typeof s == "function" ? s.bind(r.value) : s;
        }
    }
  }, has(o, a) {
    if (Reflect.has(o, a))
      return !0;
    if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))
      return !1;
    for (const r of t)
      if (r.value && Reflect.has(r.value, a))
        return !0;
    return !1;
  }, set(o, a, r) {
    if (Reflect.has(o, a))
      return Reflect.set(o, a, r);
    if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))
      return !1;
    for (const s of t)
      if (s.value && Reflect.has(s.value, a))
        return Reflect.set(s.value, a, r);
    return !1;
  }, getOwnPropertyDescriptor(o, a) {
    var s;
    const r = Reflect.getOwnPropertyDescriptor(o, a);
    if (r)
      return r;
    if (typeof a != "symbol" && !a.startsWith("$") && !a.startsWith("__")) {
      for (const i of t) {
        if (!i.value)
          continue;
        const c = jl(i.value, a) ?? ("_" in i.value ? jl((s = i.value._) == null ? void 0 : s.setupState, a) : void 0);
        if (c)
          return c;
      }
      for (const i of t) {
        const c = i.value && i.value[Rl];
        if (!c)
          continue;
        const m = c.slice();
        for (; m.length; ) {
          const f = m.shift(), d = jl(f.value, a);
          if (d)
            return d;
          const p = f.value && f.value[Rl];
          p && m.push(...p);
        }
      }
    }
  } });
}
const ks = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), Bs = W({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function Ps(e, n, t, l) {
  const o = X([]), a = X(/* @__PURE__ */ new Map()), r = y(() => l != null && l.transform ? h(n).map((s) => [s, l.transform(s)]) : h(n));
  return Le(() => {
    const s = typeof t == "function" ? t() : h(t), i = typeof s != "string" && typeof s != "number" ? "" : String(s), c = function(p, C, u) {
      var P;
      const g = [], S = (u == null ? void 0 : u.default) ?? ks, k = !!(u != null && u.filterKeys) && Ve(u.filterKeys), $ = Object.keys((u == null ? void 0 : u.customKeyFilter) ?? {}).length;
      if (!(p != null && p.length))
        return g;
      e:
        for (let w = 0; w < p.length; w++) {
          const [F, x = F] = Ve(p[w]), B = {}, b = {};
          let E = -1;
          if (C && !(u != null && u.noFilter)) {
            if (typeof F == "object") {
              const M = k || Object.keys(x);
              for (const H of M) {
                const K = Pe(x, H, x), I = (P = u == null ? void 0 : u.customKeyFilter) == null ? void 0 : P[H];
                if (E = I ? I(K, C, F) : S(K, C, F), E !== -1 && E !== !1)
                  I ? B[H] = E : b[H] = E;
                else if ((u == null ? void 0 : u.filterMode) === "every")
                  continue e;
              }
            } else
              E = S(F, C, F), E !== -1 && E !== !1 && (b.title = E);
            const A = Object.keys(b).length, L = Object.keys(B).length;
            if (!A && !L || (u == null ? void 0 : u.filterMode) === "union" && L !== $ && !A || (u == null ? void 0 : u.filterMode) === "intersection" && (L !== $ || !A))
              continue;
          }
          g.push({ index: w, matches: { ...b, ...B } });
        }
      return g;
    }(r.value, i, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), m = h(n), f = [], d = /* @__PURE__ */ new Map();
    c.forEach((p) => {
      let { index: C, matches: u } = p;
      const g = m[C];
      f.push(g), d.set(g.value, u);
    }), o.value = f, a.value = d;
  }), { filteredItems: o, filteredMatches: a, getMatches: function(s) {
    return a.value.get(s.value);
  } };
}
const ke = W({ tag: { type: String, default: "div" } }, "tag"), _s = W({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), aa = Symbol.for("vuetify:datatable:expanded");
function ra(e) {
  const n = Y(e, "expandOnClick"), t = fe(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function l(r, s) {
    const i = new Set(t.value);
    s ? i.add(r.value) : i.delete(r.value), t.value = i;
  }
  function o(r) {
    return t.value.has(r.value);
  }
  const a = { expand: l, expanded: t, expandOnClick: n, isExpanded: o, toggleExpand: function(r) {
    l(r, !o(r));
  } };
  return ye(aa, a), a;
}
function sa() {
  const e = ve(aa);
  if (!e)
    throw new Error("foo");
  return e;
}
const As = W({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), ia = Symbol.for("vuetify:data-table-group");
function ua(e) {
  return { groupBy: fe(e, "groupBy") };
}
function ca(e) {
  const { groupBy: n, sortBy: t } = e, l = X(/* @__PURE__ */ new Set());
  function o(r) {
    return l.value.has(r.id);
  }
  const a = { sortByWithGroups: y(() => n.value.map((r) => ({ ...r, order: r.order ?? !1 })).concat(t.value)), toggleGroup: function(r) {
    const s = new Set(l.value);
    o(r) ? s.delete(r.id) : s.add(r.id), l.value = s;
  }, opened: l, groupBy: n, extractRows: function(r) {
    return function s(i) {
      const c = [];
      for (const m of i.items)
        "type" in m && m.type === "group" ? c.push(...s(m)) : c.push(m);
      return c;
    }({ type: "group", items: r, id: "dummy", key: "dummy", value: "dummy", depth: 0 });
  }, isGroupOpen: o };
  return ye(ia, a), a;
}
function da() {
  const e = ve(ia);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function pa(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length)
    return [];
  const o = function(s, i) {
    if (!s.length)
      return [];
    const c = /* @__PURE__ */ new Map();
    for (const m of s) {
      const f = Vt(m.raw, i);
      c.has(f) || c.set(f, []), c.get(f).push(m);
    }
    return c;
  }(e, n[0]), a = [], r = n.slice(1);
  return o.forEach((s, i) => {
    const c = n[0], m = `${l}_${c}_${i}`;
    a.push({ depth: t, id: m, key: c, value: i, items: r.length ? pa(s, r, t + 1, m) : s, type: "group" });
  }), a;
}
function va(e, n) {
  const t = [];
  for (const l of e)
    "type" in l && l.type === "group" ? (l.value != null && t.push(l), (n.has(l.id) || l.value == null) && t.push(...va(l.items, n))) : t.push(l);
  return t;
}
function fa(e, n, t) {
  return { flatItems: y(() => n.value.length ? va(pa(e.value, n.value.map((l) => l.key)), t.value) : e.value) };
}
function ma(e) {
  let { page: n, itemsPerPage: t, sortBy: l, groupBy: o, search: a } = e;
  const r = we("VDataTable"), s = y(() => ({ page: n.value, itemsPerPage: t.value, sortBy: l.value, groupBy: o.value, search: a.value }));
  ee(() => a == null ? void 0 : a.value, () => {
    n.value = 1;
  });
  let i = null;
  ee(s, () => {
    it(i, s.value) || (r.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const ga = W({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), ya = Symbol.for("vuetify:data-table-pagination");
function ha(e) {
  return { page: fe(e, "page", void 0, (n) => +(n ?? 1)), itemsPerPage: fe(e, "itemsPerPage", void 0, (n) => +(n ?? 10)) };
}
function ba(e) {
  const { page: n, itemsPerPage: t, itemsLength: l } = e, o = y(() => t.value === -1 ? 0 : t.value * (n.value - 1)), a = y(() => t.value === -1 ? l.value : Math.min(l.value, o.value + t.value)), r = y(() => t.value === -1 || l.value === 0 ? 1 : Math.ceil(l.value / t.value));
  Le(() => {
    n.value > r.value && (n.value = r.value);
  });
  const s = { page: n, itemsPerPage: t, startIndex: o, stopIndex: a, pageCount: r, itemsLength: l, nextPage: function() {
    n.value = et(n.value + 1, 1, r.value);
  }, prevPage: function() {
    n.value = et(n.value - 1, 1, r.value);
  }, setPage: function(i) {
    n.value = et(i, 1, r.value);
  }, setItemsPerPage: function(i) {
    t.value = i, n.value = 1;
  } };
  return ye(ya, s), s;
}
const $s = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var l;
  let { items: n, value: t } = e;
  return new Set(t ? [(l = n[0]) == null ? void 0 : l.value] : []);
}, selectAll: (e) => {
  let { selected: n } = e;
  return n;
} }, Sa = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: n } = e;
  return n;
}, select: (e) => {
  let { items: n, value: t, selected: l } = e;
  for (const o of n)
    t ? l.add(o.value) : l.delete(o.value);
  return l;
}, selectAll: (e) => {
  let { value: n, currentPage: t, selected: l } = e;
  return Sa.select({ items: t, value: n, selected: l });
} }, Ca = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: n } = e;
  return n;
}, select: (e) => {
  let { items: n, value: t, selected: l } = e;
  for (const o of n)
    t ? l.add(o.value) : l.delete(o.value);
  return l;
}, selectAll: (e) => {
  let { value: n, allItems: t, selected: l } = e;
  return Ca.select({ items: t, value: n, selected: l });
} }, Fs = W({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: { type: Function, default: it } }, "DataTable-select"), wa = Symbol.for("vuetify:data-table-selection");
function xa(e, n) {
  let { allItems: t, currentPage: l } = n;
  const o = fe(e, "modelValue", e.modelValue, (p) => new Set(Ve(p).map((C) => {
    var u;
    return ((u = t.value.find((g) => e.valueComparator(C, g.value))) == null ? void 0 : u.value) ?? C;
  })), (p) => [...p.values()]), a = y(() => t.value.filter((p) => p.selectable)), r = y(() => l.value.filter((p) => p.selectable)), s = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return $s;
      case "all":
        return Ca;
      default:
        return Sa;
    }
  });
  function i(p) {
    return Ve(p).every((C) => o.value.has(C.value));
  }
  function c(p, C) {
    const u = s.value.select({ items: p, value: C, selected: new Set(o.value) });
    o.value = u;
  }
  const m = y(() => o.value.size > 0), f = y(() => {
    const p = s.value.allSelected({ allItems: a.value, currentPage: r.value });
    return !!p.length && i(p);
  }), d = { toggleSelect: function(p) {
    c([p], !i([p]));
  }, select: c, selectAll: function(p) {
    const C = s.value.selectAll({ value: p, allItems: a.value, currentPage: r.value, selected: new Set(o.value) });
    o.value = C;
  }, isSelected: i, isSomeSelected: function(p) {
    return Ve(p).some((C) => o.value.has(C.value));
  }, someSelected: m, allSelected: f, showSelectAll: s.value.showSelectAll };
  return ye(wa, d), d;
}
function Al() {
  const e = ve(wa);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
function Cn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = X(), l = X();
  if (De) {
    const o = new ResizeObserver((a) => {
      e == null || e(a, o), a.length && (l.value = n === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    st(() => {
      o.disconnect();
    }), ee(t, (a, r) => {
      r && (o.unobserve(ql(r)), l.value = void 0), a && o.observe(ql(a));
    }, { flush: "post" });
  }
  return { resizeRef: t, contentRect: un(l) };
}
const Vs = W({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), ka = Symbol.for("vuetify:data-table-sort");
function Ba(e) {
  return { sortBy: fe(e, "sortBy"), mustSort: Y(e, "mustSort"), multiSort: Y(e, "multiSort") };
}
function Pa(e) {
  const { sortBy: n, mustSort: t, multiSort: l, page: o } = e, a = { sortBy: n, toggleSort: (r) => {
    if (r.key == null)
      return;
    let s = n.value.map((c) => ({ ...c })) ?? [];
    const i = s.find((c) => c.key === r.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((c) => c.key !== r.key) : i.order = "desc" : s = l.value ? [...s, { key: r.key, order: "asc" }] : [{ key: r.key, order: "asc" }], n.value = s, o && (o.value = 1);
  }, isSorted: function(r) {
    return !!n.value.find((s) => s.key === r.key);
  } };
  return ye(ka, a), a;
}
function Es(e, n, t) {
  const l = kt();
  return { sortedItems: y(() => t.value.length ? function(a, r, s, i) {
    const c = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...a].sort((m, f) => {
      for (let d = 0; d < r.length; d++) {
        const p = r[d].key, C = r[d].order ?? "asc";
        if (C === !1)
          continue;
        let u = Vt(m.raw, p), g = Vt(f.raw, p);
        if (C === "desc" && ([u, g] = [g, u]), i == null ? void 0 : i[p]) {
          const S = i[p](u, g);
          if (!S)
            continue;
          return S;
        }
        if (u instanceof Date && g instanceof Date)
          return u.getTime() - g.getTime();
        if ([u, g] = [u, g].map((S) => S != null ? S.toString().toLocaleLowerCase() : S), u !== g)
          return Zt(u) && Zt(g) ? 0 : Zt(u) ? -1 : Zt(g) ? 1 : isNaN(u) || isNaN(g) ? c.compare(u, g) : Number(u) - Number(g);
      }
      return 0;
    });
  }(n.value, t.value, l.current.value, e.customKeySort) : n.value) };
}
const Ht = W({ border: [Boolean, Number, String] }, "border");
function zt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { borderClasses: y(() => {
    const t = St(e) ? e.value : e.border, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`border-${o}`);
    return l;
  }) };
}
const Is = [null, "default", "comfortable", "compact"], Ge = W({ density: { type: String, default: "default", validator: (e) => Is.includes(e) } }, "density");
function Ke(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { densityClasses: y(() => `${n}--density-${e.density}`) };
}
const Gt = W({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function Kt(e) {
  return { elevationClasses: y(() => {
    const n = St(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const Je = W({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ze(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { roundedClasses: y(() => {
    const t = St(e) ? e.value : e.rounded, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const Ds = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function $l(e, n) {
  return v(ae, null, [e && v("span", { key: "overlay", class: `${n}__overlay` }, null), v("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const ct = W({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ds.includes(e) } }, "variant");
function Fl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = y(() => {
    const { variant: a } = h(e);
    return `${n}--variant-${a}`;
  }), { colorClasses: l, colorStyles: o } = yn(y(() => {
    const { variant: a, color: r } = h(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: r };
  }));
  return { colorClasses: l, colorStyles: o, variantClasses: t };
}
const _a = W({ divided: Boolean, ...Ht(), ...re(), ...Ge(), ...Gt(), ...Je(), ...ke(), ...xe(), ...ct() }, "VBtnGroup"), co = J()({ name: "VBtnGroup", props: _a(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = _e(e), { densityClasses: o } = Ke(e), { borderClasses: a } = zt(e), { elevationClasses: r } = Kt(e), { roundedClasses: s } = Ze(e);
  ut({ VBtn: { height: "auto", color: Y(e, "color"), density: Y(e, "density"), flat: !0, variant: Y(e, "variant") } }), ne(() => v(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, o.value, r.value, s.value, e.class], style: e.style }, t));
} }), Aa = W({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), $a = W({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Fa(e, n) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = we("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = We();
  ye(Symbol.for(`${n.description}:id`), o);
  const a = ve(n, null);
  if (!a) {
    if (!t)
      return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const r = Y(e, "value"), s = y(() => !(!a.disabled.value && !e.disabled));
  a.register({ id: o, value: r, disabled: s }, l), st(() => {
    a.unregister(o);
  });
  const i = y(() => a.isSelected(o)), c = y(() => i.value && [a.selectedClass.value, e.selectedClass]);
  return ee(i, (m) => {
    l.emit("group:selected", { value: m });
  }), { id: o, isSelected: i, toggle: () => a.select(o, !i.value), select: (m) => a.select(o, m), selectedClass: c, value: r, disabled: s, group: a };
}
function Va(e, n) {
  let t = !1;
  const l = Lt([]), o = fe(e, "modelValue", [], (c) => c == null ? [] : po(l, Ve(c)), (c) => {
    const m = function(f, d) {
      const p = [];
      return d.forEach((C) => {
        const u = f.findIndex((g) => g.id === C);
        if (~u) {
          const g = f[u];
          p.push(g.value != null ? g.value : u);
        }
      }), p;
    }(l, c);
    return e.multiple ? m : m[0];
  }), a = we("useGroup");
  function r() {
    const c = l.find((m) => !m.disabled);
    c && e.mandatory === "force" && !o.value.length && (o.value = [c.id]);
  }
  function s(c) {
    if (e.multiple && $t('This method is not supported when using "multiple" prop'), o.value.length) {
      const m = o.value[0], f = l.findIndex((C) => C.id === m);
      let d = (f + c) % l.length, p = l[d];
      for (; p.disabled && d !== f; )
        d = (d + c) % l.length, p = l[d];
      if (p.disabled)
        return;
      o.value = [l[d].id];
    } else {
      const m = l.find((f) => !f.disabled);
      m && (o.value = [m.id]);
    }
  }
  at(() => {
    r();
  }), st(() => {
    t = !0;
  });
  const i = { register: function(c, m) {
    const f = c, d = nl(Symbol.for(`${n.description}:id`), a == null ? void 0 : a.vnode).indexOf(m);
    d > -1 ? l.splice(d, 0, f) : l.push(f);
  }, unregister: function(c) {
    if (t)
      return;
    r();
    const m = l.findIndex((f) => f.id === c);
    l.splice(m, 1);
  }, selected: o, select: function(c, m) {
    const f = l.find((d) => d.id === c);
    if (!m || !(f != null && f.disabled))
      if (e.multiple) {
        const d = o.value.slice(), p = d.findIndex((u) => u === c), C = ~p;
        if (m = m ?? !C, C && e.mandatory && d.length <= 1 || !C && e.max != null && d.length + 1 > e.max)
          return;
        p < 0 && m ? d.push(c) : p >= 0 && !m && d.splice(p, 1), o.value = d;
      } else {
        const d = o.value.includes(c);
        if (e.mandatory && d)
          return;
        o.value = m ?? !d ? [c] : [];
      }
  }, disabled: Y(e, "disabled"), prev: () => s(l.length - 1), next: () => s(1), isSelected: (c) => o.value.includes(c), selectedClass: y(() => e.selectedClass), items: y(() => l), getItemIndex: (c) => function(m, f) {
    const d = po(m, [f]);
    return d.length ? m.findIndex((p) => p.id === d[0]) : -1;
  }(l, c) };
  return ye(n, i), i;
}
function po(e, n) {
  const t = [];
  return n.forEach((l) => {
    const o = e.find((r) => it(l, r.value)), a = e[l];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : a != null && t.push(a.id);
  }), t;
}
const Ea = Symbol.for("vuetify:v-btn-toggle"), Ts = W({ ..._a(), ...Aa() }, "VBtnToggle");
J()({ name: "VBtnToggle", props: Ts(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, next: o, prev: a, select: r, selected: s } = Va(e, Ea);
  return ne(() => {
    const [i] = co.filterProps(e);
    return v(co, te({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var c;
      return [(c = t.default) == null ? void 0 : c.call(t, { isSelected: l, next: o, prev: a, select: r, selected: s })];
    } });
  }), { next: o, prev: a, select: r };
} });
const pe = [String, Function, Object, Array], Os = Symbol.for("vuetify:icons"), fl = W({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), vo = J()({ name: "VComponentIcon", props: fl(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const l = e.icon;
    return v(e.tag, null, { default: () => {
      var o;
      return [e.icon ? v(l, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), Ls = It({ name: "VSvgIcon", inheritAttrs: !1, props: fl(), setup(e, n) {
  let { attrs: t } = n;
  return () => v(e.tag, te(t, { style: null }), { default: () => [v("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? v("path", { d: l[0], "fill-opacity": l[1] }, null) : v("path", { d: l }, null)) : v("path", { d: e.icon }, null)])] });
} });
It({ name: "VLigatureIcon", props: fl(), setup: (e) => () => v(e.tag, null, { default: () => [e.icon] }) }), It({ name: "VClassIcon", props: fl(), setup: (e) => () => v(e.tag, { class: e.icon }, null) });
const Ms = ["x-small", "small", "default", "large", "x-large"], qt = W({ size: { type: [String, Number], default: "default" } }, "size");
function Ut(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return vn(() => {
    let t, l;
    return sl(Ms, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = { width: Q(e.size), height: Q(e.size) }), { sizeClasses: t, sizeStyles: l };
  });
}
const Ns = W({ color: String, start: Boolean, end: Boolean, icon: pe, ...re(), ...qt(), ...ke({ tag: "i" }), ...xe() }, "VIcon"), be = J()({ name: "VIcon", props: Ns(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = X(), { themeClasses: a } = _e(e), { iconData: r } = ((m) => {
    const f = ve(Os);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: y(() => {
      var g;
      const d = h(m);
      if (!d)
        return { component: vo };
      let p = d;
      if (typeof p == "string" && (p = p.trim(), p.startsWith("$") && (p = (g = f.aliases) == null ? void 0 : g[p.slice(1)])), !p)
        throw new Error(`Could not find aliased icon "${d}"`);
      if (Array.isArray(p))
        return { component: Ls, icon: p };
      if (typeof p != "string")
        return { component: vo, icon: p };
      const C = Object.keys(f.sets).find((S) => typeof p == "string" && p.startsWith(`${S}:`)), u = C ? p.slice(C.length + 1) : p;
      return { component: f.sets[C ?? f.defaultSet].component, icon: u };
    }) };
  })(y(() => o.value || e.icon)), { sizeClasses: s } = Ut(e), { textColorClasses: i, textColorStyles: c } = He(Y(e, "color"));
  return ne(() => {
    var f, d;
    const m = (f = l.default) == null ? void 0 : f.call(l);
    return m && (o.value = (d = No(m).filter((p) => p.type === Gr && p.children && typeof p.children == "string")[0]) == null ? void 0 : d.children), v(r.value.component, { tag: e.tag, icon: r.value.icon, class: ["v-icon", "notranslate", a.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: Q(e.size), height: Q(e.size), width: Q(e.size) }, c.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [m] });
  }), {};
} });
function Ia(e, n) {
  const t = X(), l = ue(!1);
  if (dn) {
    const o = new IntersectionObserver((a) => {
      e == null || e(a, o), l.value = !!a.find((r) => r.isIntersecting);
    }, n);
    st(() => {
      o.disconnect();
    }), ee(t, (a, r) => {
      r && (o.unobserve(r), l.value = !1), a && o.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: l };
}
const Rs = W({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...re(), ...qt(), ...ke({ tag: "div" }), ...xe() }, "VProgressCircular"), Da = J()({ name: "VProgressCircular", props: Rs(), setup(e, n) {
  let { slots: t } = n;
  const l = 2 * Math.PI * 20, o = X(), { themeClasses: a } = _e(e), { sizeClasses: r, sizeStyles: s } = Ut(e), { textColorClasses: i, textColorStyles: c } = He(Y(e, "color")), { textColorClasses: m, textColorStyles: f } = He(Y(e, "bgColor")), { intersectionRef: d, isIntersecting: p } = Ia(), { resizeRef: C, contentRect: u } = Cn(), g = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = y(() => Number(e.width)), k = y(() => s.value ? Number(e.size) : u.value ? u.value.width : Math.max(S.value, 32)), $ = y(() => 20 / (1 - S.value / k.value) * 2), P = y(() => S.value / k.value * $.value), w = y(() => Q((100 - g.value) / 100 * l));
  return Le(() => {
    d.value = o.value, C.value = o.value;
  }), ne(() => v(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, r.value, i.value, e.class], style: [s.value, c.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : g.value }, { default: () => [v("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${$.value} ${$.value}` }, [v("circle", { class: ["v-progress-circular__underlay", m.value], style: f.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), v("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": l, "stroke-dashoffset": w.value }, null)]), t.default && v("div", { class: "v-progress-circular__content" }, [t.default({ value: g.value })])] })), {};
} }), fo = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Ta = W({ location: String }, "location");
function Oa(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = jt();
  return { locationStyles: y(() => {
    if (!e.location)
      return {};
    const { side: a, align: r } = Xl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function s(c) {
      return t ? t(c) : 0;
    }
    const i = {};
    return a !== "center" && (n ? i[fo[a]] = `calc(100% - ${s(a)}px)` : i[a] = 0), r !== "center" ? n ? i[fo[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0 : (a === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), i;
  }) };
}
const js = W({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...re(), ...Ta({ location: "top" }), ...Je(), ...ke(), ...xe() }, "VProgressLinear"), La = J()({ name: "VProgressLinear", props: js(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = fe(e, "modelValue"), { isRtl: o, rtlClasses: a } = jt(), { themeClasses: r } = _e(e), { locationStyles: s } = Oa(e), { textColorClasses: i, textColorStyles: c } = He(e, "color"), { backgroundColorClasses: m, backgroundColorStyles: f } = ot(y(() => e.bgColor || e.color)), { backgroundColorClasses: d, backgroundColorStyles: p } = ot(e, "color"), { roundedClasses: C } = Ze(e), { intersectionRef: u, isIntersecting: g } = Ia(), S = y(() => parseInt(e.max, 10)), k = y(() => parseInt(e.height, 10)), $ = y(() => parseFloat(e.bufferValue) / S.value * 100), P = y(() => parseFloat(l.value) / S.value * 100), w = y(() => o.value !== e.reverse), F = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), x = y(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function B(b) {
    if (!u.value)
      return;
    const { left: E, right: A, width: L } = u.value.getBoundingClientRect(), M = w.value ? L - b.clientX + (A - L) : b.clientX - E;
    l.value = Math.round(M / L * S.value);
  }
  return ne(() => v(e.tag, { ref: u, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && g.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, C.value, r.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? Q(k.value) : 0, "--v-progress-linear-height": Q(k.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : P.value, onClick: e.clickable && B }, { default: () => [e.stream && v("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...c.value, [w.value ? "left" : "right"]: Q(-k.value), borderTop: `${Q(k.value / 2)} dotted`, opacity: x.value, top: `calc(50% - ${Q(k.value / 4)})`, width: Q(100 - $.value, "%"), "--v-progress-linear-stream-to": Q(k.value * (w.value ? 1 : -1)) } }, null), v("div", { class: ["v-progress-linear__background", m.value], style: [f.value, { opacity: x.value, width: Q(e.stream ? $.value : 100, "%") }] }, null), v(nt, { name: F.value }, { default: () => [e.indeterminate ? v("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((b) => v("div", { key: b, class: ["v-progress-linear__indeterminate", b, d.value], style: p.value }, null))]) : v("div", { class: ["v-progress-linear__determinate", d.value], style: [p.value, { width: Q(P.value, "%") }] }, null)] }), t.default && v("div", { class: "v-progress-linear__content" }, [t.default({ value: P.value, buffer: $.value })])] })), {};
} }), wn = W({ loading: [Boolean, String] }, "loader");
function xn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { loaderClasses: y(() => ({ [`${n}--loading`]: e.loading })) };
}
function Ma(e, n) {
  var l;
  let { slots: t } = n;
  return v("div", { class: `${e.name}__loader` }, [((l = t.default) == null ? void 0 : l.call(t, { color: e.color, isActive: e.active })) || v(La, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Ws = ["static", "relative", "fixed", "absolute", "sticky"], Hs = W({ position: { type: String, validator: (e) => Ws.includes(e) } }, "position"), en = Symbol("rippleStop"), zs = 80;
function mo(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function tn(e) {
  return e.constructor.name === "TouchEvent";
}
function Na(e) {
  return e.constructor.name === "KeyboardEvent";
}
const ml = { show(e, n) {
  var p;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((p = n == null ? void 0 : n._ripple) != null && p.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
  const { radius: a, scale: r, x: s, y: i, centerX: c, centerY: m } = function(C, u) {
    var x;
    let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = 0, k = 0;
    if (!Na(C)) {
      const B = u.getBoundingClientRect(), b = tn(C) ? C.touches[C.touches.length - 1] : C;
      S = b.clientX - B.left, k = b.clientY - B.top;
    }
    let $ = 0, P = 0.3;
    (x = u._ripple) != null && x.circle ? (P = 0.15, $ = u.clientWidth / 2, $ = g.center ? $ : $ + Math.sqrt((S - $) ** 2 + (k - $) ** 2) / 4) : $ = Math.sqrt(u.clientWidth ** 2 + u.clientHeight ** 2) / 2;
    const w = (u.clientWidth - 2 * $) / 2 + "px", F = (u.clientHeight - 2 * $) / 2 + "px";
    return { radius: $, scale: P, x: g.center ? w : S - $ + "px", y: g.center ? F : k - $ + "px", centerX: w, centerY: F };
  }(e, n, t), f = 2 * a + "px";
  o.className = "v-ripple__animation", o.style.width = f, o.style.height = f, n.appendChild(l);
  const d = window.getComputedStyle(n);
  d && d.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), mo(o, `translate(${s}, ${i}) scale3d(${r},${r},${r})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), mo(o, `translate(${c}, ${m}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var a;
  if (!((a = e == null ? void 0 : e._ripple) != null && a.enabled))
    return;
  const n = e.getElementsByClassName("v-ripple__animation");
  if (n.length === 0)
    return;
  const t = n[n.length - 1];
  if (t.dataset.isHiding)
    return;
  t.dataset.isHiding = "true";
  const l = performance.now() - Number(t.dataset.activated), o = Math.max(250 - l, 0);
  setTimeout(() => {
    t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var r;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, o);
} };
function Ra(e) {
  return e === void 0 || !!e;
}
function Dt(e) {
  const n = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[en]) {
    if (e[en] = !0, tn(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || Na(e), t._ripple.class && (n.class = t._ripple.class), tn(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        ml.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, zs);
    } else
      ml.show(e, t, n);
  }
}
function go(e) {
  e[en] = !0;
}
function Fe(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit)
      return n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, void (n._ripple.showTimer = window.setTimeout(() => {
        Fe(e);
      }));
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), ml.hide(n);
  }
}
function ja(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let Tt = !1;
function Wa(e) {
  Tt || e.keyCode !== Tn.enter && e.keyCode !== Tn.space || (Tt = !0, Dt(e));
}
function Ha(e) {
  Tt = !1, Fe(e);
}
function za(e) {
  Tt && (Tt = !1, Fe(e));
}
function yo(e, n, t) {
  const { value: l, modifiers: o } = n, a = Ra(l);
  if (a || ml.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Kl(l) && l.class && (e._ripple.class = l.class), a && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", go, { passive: !0 }), void e.addEventListener("mousedown", go);
    e.addEventListener("touchstart", Dt, { passive: !0 }), e.addEventListener("touchend", Fe, { passive: !0 }), e.addEventListener("touchmove", ja, { passive: !0 }), e.addEventListener("touchcancel", Fe), e.addEventListener("mousedown", Dt), e.addEventListener("mouseup", Fe), e.addEventListener("mouseleave", Fe), e.addEventListener("keydown", Wa), e.addEventListener("keyup", Ha), e.addEventListener("blur", za), e.addEventListener("dragstart", Fe, { passive: !0 });
  } else
    !a && t && Ga(e);
}
function Ga(e) {
  e.removeEventListener("mousedown", Dt), e.removeEventListener("touchstart", Dt), e.removeEventListener("touchend", Fe), e.removeEventListener("touchmove", ja), e.removeEventListener("touchcancel", Fe), e.removeEventListener("mouseup", Fe), e.removeEventListener("mouseleave", Fe), e.removeEventListener("keydown", Wa), e.removeEventListener("keyup", Ha), e.removeEventListener("dragstart", Fe), e.removeEventListener("blur", za);
}
const Vl = { mounted: function(e, n) {
  yo(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, Ga(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && yo(e, n, Ra(n.oldValue));
} }, Gs = W({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Ea }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Ht(), ...re(), ...Ge(), ...wt(), ...Gt(), ...$a(), ...wn(), ...Ta(), ...Hs(), ...Je(), ...bn(), ...qt(), ...ke({ tag: "button" }), ...xe(), ...ct({ variant: "elevated" }) }, "VBtn"), ft = J()({ name: "VBtn", directives: { Ripple: Vl }, props: Gs(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: o } = _e(e), { borderClasses: a } = zt(e), { colorClasses: r, colorStyles: s, variantClasses: i } = Fl(e), { densityClasses: c } = Ke(e), { dimensionStyles: m } = xt(e), { elevationClasses: f } = Kt(e), { loaderClasses: d } = xn(e), { locationStyles: p } = Oa(e), { positionClasses: C } = function(b) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
    return { positionClasses: y(() => b.position ? `${E}--${b.position}` : void 0) };
  }(e), { roundedClasses: u } = Ze(e), { sizeClasses: g, sizeStyles: S } = Ut(e), k = Fa(e, e.symbol, !1), $ = hn(e, t), P = y(() => {
    var b;
    return e.active !== void 0 ? e.active : $.isLink.value ? (b = $.isActive) == null ? void 0 : b.value : k == null ? void 0 : k.isSelected.value;
  }), w = y(() => (k == null ? void 0 : k.disabled.value) || e.disabled), F = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), x = y(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function B(b) {
    var E;
    w.value || $.isLink.value && (b.metaKey || b.ctrlKey || b.shiftKey || b.button !== 0 || t.target === "_blank") || ((E = $.navigate) == null || E.call($, b), k == null || k.toggle());
  }
  return function(b, E) {
    ee(() => {
      var A;
      return (A = b.isActive) == null ? void 0 : A.value;
    }, (A) => {
      b.isLink.value && A && E && Ee(() => {
        E(!0);
      });
    }, { immediate: !0 });
  }($, k == null ? void 0 : k.select), ne(() => {
    var H, K;
    const b = $.isLink.value ? "a" : e.tag, E = !(!e.prependIcon && !l.prepend), A = !(!e.appendIcon && !l.append), L = !(!e.icon || e.icon === !0), M = (k == null ? void 0 : k.isSelected.value) && (!$.isLink.value || ((H = $.isActive) == null ? void 0 : H.value)) || !k || ((K = $.isActive) == null ? void 0 : K.value);
    return Oe(v(b, { type: b === "a" ? void 0 : "button", class: ["v-btn", k == null ? void 0 : k.selectedClass.value, { "v-btn--active": P.value, "v-btn--block": e.block, "v-btn--disabled": w.value, "v-btn--elevated": F.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, a.value, M ? r.value : void 0, c.value, f.value, d.value, C.value, u.value, g.value, i.value, e.class], style: [M ? s.value : void 0, m.value, p.value, S.value, e.style], disabled: w.value || void 0, href: $.href.value, onClick: B, value: x.value }, { default: () => {
      var I;
      return [$l(!0, "v-btn"), !e.icon && E && v("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? v(Te, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : v(be, { key: "prepend-icon", icon: e.prependIcon }, null)]), v("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && L ? v(be, { key: "content-icon", icon: e.icon }, null) : v(Te, { key: "content-defaults", disabled: !L, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var N;
        return [((N = l.default) == null ? void 0 : N.call(l)) ?? e.text];
      } })]), !e.icon && A && v("span", { key: "append", class: "v-btn__append" }, [l.append ? v(Te, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : v(be, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && v("span", { key: "loader", class: "v-btn__loader" }, [((I = l.loader) == null ? void 0 : I.call(l)) ?? v(Da, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[rt("ripple"), !w.value && e.ripple, null]]);
  }), {};
} }), Ks = W({ text: String, clickable: Boolean, ...re(), ...xe() }, "VLabel"), Ka = J()({ name: "VLabel", props: Ks(), setup(e, n) {
  let { slots: t } = n;
  return ne(() => {
    var l;
    return v("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), qa = Symbol.for("vuetify:selection-control-group"), Ua = W({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: it }, ...re(), ...Ge(), ...xe() }, "SelectionControlGroup"), qs = W({ ...Ua({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
J()({ name: "VSelectionControlGroup", props: qs(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = fe(e, "modelValue"), o = We(), a = y(() => e.id || `v-selection-control-group-${o}`), r = y(() => e.name || a.value), s = /* @__PURE__ */ new Set();
  return ye(qa, { modelValue: l, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), Be(() => {
      s.delete(i);
    });
  } }), ut({ [e.defaultsTarget]: { color: Y(e, "color"), disabled: Y(e, "disabled"), density: Y(e, "density"), error: Y(e, "error"), inline: Y(e, "inline"), modelValue: l, multiple: y(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: r, falseIcon: Y(e, "falseIcon"), trueIcon: Y(e, "trueIcon"), readonly: Y(e, "readonly"), ripple: Y(e, "ripple"), type: Y(e, "type"), valueComparator: Y(e, "valueComparator") } }), ne(() => {
    var i;
    return v("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const Ya = W({ label: String, trueValue: null, falseValue: null, value: null, ...re(), ...Ua() }, "VSelectionControl"), ho = J()({ name: "VSelectionControl", directives: { Ripple: Vl }, inheritAttrs: !1, props: Ya(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { group: o, densityClasses: a, icon: r, model: s, textColorClasses: i, textColorStyles: c, backgroundColorClasses: m, backgroundColorStyles: f, trueValue: d } = function(w) {
    const F = ve(qa, void 0), { densityClasses: x } = Ke(w), B = fe(w, "modelValue"), b = y(() => w.trueValue !== void 0 ? w.trueValue : w.value === void 0 || w.value), E = y(() => w.falseValue !== void 0 && w.falseValue), A = y(() => !!w.multiple || w.multiple == null && Array.isArray(B.value)), L = y({ get() {
      const j = F ? F.modelValue.value : B.value;
      return A.value ? j.some((G) => w.valueComparator(G, b.value)) : w.valueComparator(j, b.value);
    }, set(j) {
      if (w.readonly)
        return;
      const G = j ? b.value : E.value;
      let _ = G;
      A.value && (_ = j ? [...Ve(B.value), G] : Ve(B.value).filter((T) => !w.valueComparator(T, b.value))), F ? F.modelValue.value = _ : B.value = _;
    } }), { textColorClasses: M, textColorStyles: H } = He(y(() => !L.value || w.error || w.disabled ? void 0 : w.color)), { backgroundColorClasses: K, backgroundColorStyles: I } = ot(y(() => !L.value || w.error || w.disabled ? void 0 : w.color)), N = y(() => L.value ? w.trueIcon : w.falseIcon);
    return { group: F, densityClasses: x, trueValue: b, falseValue: E, model: L, textColorClasses: M, textColorStyles: H, backgroundColorClasses: K, backgroundColorStyles: I, icon: N };
  }(e), p = We(), C = y(() => e.id || `input-${p}`), u = ue(!1), g = ue(!1), S = X();
  function k(w) {
    u.value = !0, ul(w.target, ":focus-visible") !== !1 && (g.value = !0);
  }
  function $() {
    u.value = !1, g.value = !1;
  }
  function P(w) {
    e.readonly && o && Ee(() => o.forceUpdate()), s.value = w.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    S.value && (S.value.checked = s.value);
  }), ne(() => {
    var b, E;
    const w = l.label ? l.label({ label: e.label, props: { for: C.value } }) : e.label, [F, x] = pn(t), B = v("input", te({ ref: S, checked: s.value, disabled: !(!e.readonly && !e.disabled), id: C.value, onBlur: $, onFocus: k, onInput: P, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: d.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, x), null);
    return v("div", te({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": u.value, "v-selection-control--focus-visible": g.value, "v-selection-control--inline": e.inline }, a.value, e.class] }, F, { style: e.style }), [v("div", { class: ["v-selection-control__wrapper", i.value], style: c.value }, [(b = l.default) == null ? void 0 : b.call(l, { backgroundColorClasses: m, backgroundColorStyles: f }), Oe(v("div", { class: ["v-selection-control__input"] }, [((E = l.input) == null ? void 0 : E.call(l, { model: s, textColorClasses: i, textColorStyles: c, backgroundColorClasses: m, backgroundColorStyles: f, inputNode: B, icon: r.value, props: { onFocus: k, onBlur: $, id: C.value } })) ?? v(ae, null, [r.value && v(be, { key: "icon", icon: r.value }, null), B])]), [[rt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), w && v(Ka, { for: C.value, clickable: !0, onClick: (A) => A.stopPropagation() }, { default: () => [w] })]);
  }), { isFocused: u, input: S };
} }), Xa = W({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...Ya({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), ht = J()({ name: "VCheckboxBtn", props: Xa(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = fe(e, "indeterminate"), o = fe(e, "modelValue");
  function a(i) {
    l.value && (l.value = !1);
  }
  const r = y(() => l.value ? e.indeterminateIcon : e.falseIcon), s = y(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return ne(() => {
    const i = Rt(ho.filterProps(e)[0], ["modelValue"]);
    return v(ho, te(i, { modelValue: o.value, "onUpdate:modelValue": [(c) => o.value = c, a], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: r.value, trueIcon: s.value, "aria-checked": l.value ? "mixed" : void 0 }), t);
  }), {};
} });
function Ja(e) {
  const { t: n } = kt();
  return { InputIcon: function(t) {
    let { name: l } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], a = e[`onClick:${l}`], r = a && o ? n(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return v(be, { icon: e[`${l}Icon`], "aria-label": r, onClick: a }, null);
  } };
}
const Us = W({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...re(), ...Wt({ transition: { component: Jo, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Ys = J()({ name: "VMessages", props: Us(), setup(e, n) {
  let { slots: t } = n;
  const l = y(() => Ve(e.messages)), { textColorClasses: o, textColorStyles: a } = He(y(() => e.color));
  return ne(() => v(Ue, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((r, s) => v("div", { class: "v-messages__message", key: `${s}-${l.value}` }, [t.message ? t.message({ message: r }) : r]))] })), {};
} }), Za = W({ focused: Boolean, "onUpdate:focused": je() }, "focus");
function kn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = fe(e, "focused");
  return { focusClasses: y(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const Xs = Symbol.for("vuetify:form");
function Qa() {
  return ve(Xs, null);
}
const Js = W({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Za() }, "validation"), Bn = W({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": je(), "onClick:append": je(), ...re(), ...Ge(), ...Js() }, "VInput"), gl = J()({ name: "VInput", props: { ...Bn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const { densityClasses: a } = Ke(e), { rtlClasses: r } = jt(), { InputIcon: s } = Ja(e), i = We(), c = y(() => e.id || `input-${i}`), m = y(() => `${c.value}-messages`), { errorMessages: f, isDirty: d, isDisabled: p, isReadonly: C, isPristine: u, isValid: g, isValidating: S, reset: k, resetValidation: $, validate: P, validationClasses: w } = function(B) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze(), E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : We();
    const A = fe(B, "modelValue"), L = y(() => B.validationValue === void 0 ? A.value : B.validationValue), M = Qa(), H = X([]), K = ue(!0), I = y(() => !(!Ve(A.value === "" ? null : A.value).length && !Ve(L.value === "" ? null : L.value).length)), N = y(() => !!(B.disabled ?? (M == null ? void 0 : M.isDisabled.value))), j = y(() => !!(B.readonly ?? (M == null ? void 0 : M.isReadonly.value))), G = y(() => {
      var q;
      return (q = B.errorMessages) != null && q.length ? Ve(B.errorMessages).slice(0, Math.max(0, +B.maxErrors)) : H.value;
    }), _ = y(() => {
      let q = (B.validateOn ?? (M == null ? void 0 : M.validateOn.value)) || "input";
      q === "lazy" && (q = "input lazy");
      const oe = new Set((q == null ? void 0 : q.split(" ")) ?? []);
      return { blur: oe.has("blur") || oe.has("input"), input: oe.has("input"), submit: oe.has("submit"), lazy: oe.has("lazy") };
    }), T = y(() => {
      var q;
      return !B.error && !((q = B.errorMessages) != null && q.length) && (!B.rules.length || (K.value ? !H.value.length && !_.value.lazy || null : !H.value.length));
    }), V = ue(!1), D = y(() => ({ [`${b}--error`]: T.value === !1, [`${b}--dirty`]: I.value, [`${b}--disabled`]: N.value, [`${b}--readonly`]: j.value })), O = y(() => B.name ?? h(E));
    function R() {
      A.value = null, Ee(z);
    }
    function z() {
      K.value = !0, _.value.lazy ? H.value = [] : U(!0);
    }
    async function U() {
      let q = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const oe = [];
      V.value = !0;
      for (const me of B.rules) {
        if (oe.length >= +(B.maxErrors ?? 1))
          break;
        const Me = typeof me == "function" ? me : () => me, Se = await Me(L.value);
        Se !== !0 && (Se === !1 || typeof Se == "string" ? oe.push(Se || "") : console.warn(`${Se} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return H.value = oe, V.value = !1, K.value = q, H.value;
    }
    return cn(() => {
      M == null || M.register({ id: O.value, validate: U, reset: R, resetValidation: z });
    }), st(() => {
      M == null || M.unregister(O.value);
    }), at(async () => {
      _.value.lazy || await U(!0), M == null || M.update(O.value, T.value, G.value);
    }), lt(() => _.value.input, () => {
      ee(L, () => {
        if (L.value != null)
          U();
        else if (B.focused) {
          const q = ee(() => B.focused, (oe) => {
            oe || U(), q();
          });
        }
      });
    }), lt(() => _.value.blur, () => {
      ee(() => B.focused, (q) => {
        q || U();
      });
    }), ee(T, () => {
      M == null || M.update(O.value, T.value, G.value);
    }), { errorMessages: G, isDirty: I, isDisabled: N, isReadonly: j, isPristine: K, isValid: T, isValidating: V, reset: R, resetValidation: z, validate: U, validationClasses: D };
  }(e, "v-input", c), F = y(() => ({ id: c, messagesId: m, isDirty: d, isDisabled: p, isReadonly: C, isPristine: u, isValid: g, isValidating: S, reset: k, resetValidation: $, validate: P })), x = y(() => {
    var B;
    return (B = e.errorMessages) != null && B.length || !u.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ne(() => {
    var L, M, H, K;
    const B = !(!l.prepend && !e.prependIcon), b = !(!l.append && !e.appendIcon), E = x.value.length > 0, A = !e.hideDetails || e.hideDetails === "auto" && (E || !!l.details);
    return v("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, a.value, r.value, w.value, e.class], style: e.style }, [B && v("div", { key: "prepend", class: "v-input__prepend" }, [(L = l.prepend) == null ? void 0 : L.call(l, F.value), e.prependIcon && v(s, { key: "prepend-icon", name: "prepend" }, null)]), l.default && v("div", { class: "v-input__control" }, [(M = l.default) == null ? void 0 : M.call(l, F.value)]), b && v("div", { key: "append", class: "v-input__append" }, [e.appendIcon && v(s, { key: "append-icon", name: "append" }, null), (H = l.append) == null ? void 0 : H.call(l, F.value)]), A && v("div", { class: "v-input__details" }, [v(Ys, { id: m.value, active: E, messages: x.value }, { message: l.message }), (K = l.details) == null ? void 0 : K.call(l, F.value)])]);
  }), { reset: k, resetValidation: $, validate: P };
} }), Zs = W({ ...Bn(), ...Rt(Xa(), ["inline"]) }, "VCheckbox"), Pn = J()({ name: "VCheckbox", inheritAttrs: !1, props: Zs(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = fe(e, "modelValue"), { isFocused: a, focus: r, blur: s } = kn(e), i = We(), c = y(() => e.id || `checkbox-${i}`);
  return ne(() => {
    const [m, f] = pn(t), [d, p] = gl.filterProps(e), [C, u] = ht.filterProps(e);
    return v(gl, te({ class: ["v-checkbox", e.class] }, m, d, { modelValue: o.value, "onUpdate:modelValue": (g) => o.value = g, id: c.value, focused: a.value, style: e.style }), { ...l, default: (g) => {
      let { id: S, messagesId: k, isDisabled: $, isReadonly: P } = g;
      return v(ht, te(C, { id: S.value, "aria-describedby": k.value, disabled: $.value, readonly: P.value }, f, { modelValue: o.value, "onUpdate:modelValue": (w) => o.value = w, onFocus: r, onBlur: s }), l);
    } });
  }), {};
} }), er = W({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...re(), ...wt() }, "VResponsive"), bo = J()({ name: "VResponsive", props: er(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: y(() => {
      const r = Number(a.aspectRatio);
      return r ? { paddingBottom: String(1 / r * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = xt(e);
  return ne(() => {
    var a;
    return v("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [v("div", { class: "v-responsive__sizer", style: l.value }, null), (a = t.additional) == null ? void 0 : a.call(t), t.default && v("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function So(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const tr = { mounted: function(e, n) {
  if (!dn)
    return;
  const t = n.modifiers || {}, l = n.value, { handler: o, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, r = new IntersectionObserver(function() {
    var f;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
    if (!c)
      return;
    const m = s.some((d) => d.isIntersecting);
    !o || t.quiet && !c.init || t.once && !m && !c.init || o(m, s, i), m && t.once ? So(e, n) : c.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: r }, r.observe(e);
}, unmounted: So }, Qs = W({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...er(), ...re(), ...Wt() }, "VImg"), ei = J()({ name: "VImg", directives: { intersect: tr }, props: Qs(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const o = ue(""), a = X(), r = ue(e.eager ? "loading" : "idle"), s = ue(), i = ue(), c = y(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), m = y(() => c.value.aspect || s.value / i.value || 0);
  function f(B) {
    if ((!e.eager || !B) && (!dn || B || e.eager)) {
      if (r.value = "loading", c.value.lazySrc) {
        const b = new Image();
        b.src = c.value.lazySrc, g(b, null);
      }
      c.value.src && Ee(() => {
        var b, E;
        if (t("loadstart", ((b = a.value) == null ? void 0 : b.currentSrc) || c.value.src), (E = a.value) == null ? void 0 : E.complete) {
          if (a.value.naturalWidth || p(), r.value === "error")
            return;
          m.value || g(a.value, null), d();
        } else
          m.value || g(a.value), C();
      });
    }
  }
  function d() {
    var B;
    C(), r.value = "loaded", t("load", ((B = a.value) == null ? void 0 : B.currentSrc) || c.value.src);
  }
  function p() {
    var B;
    r.value = "error", t("error", ((B = a.value) == null ? void 0 : B.currentSrc) || c.value.src);
  }
  function C() {
    const B = a.value;
    B && (o.value = B.currentSrc || B.src);
  }
  ee(() => e.src, () => {
    f(r.value !== "idle");
  }), ee(m, (B, b) => {
    !B && b && a.value && g(a.value);
  }), cn(() => f());
  let u = -1;
  function g(B) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const E = () => {
      clearTimeout(u);
      const { naturalHeight: A, naturalWidth: L } = B;
      A || L ? (s.value = L, i.value = A) : B.complete || r.value !== "loading" || b == null ? (B.currentSrc.endsWith(".svg") || B.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : u = window.setTimeout(E, b);
    };
    E();
  }
  const S = y(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), k = () => {
    var E;
    if (!c.value.src || r.value === "idle")
      return null;
    const B = v("img", { class: ["v-img__img", S.value], src: c.value.src, srcset: c.value.srcset, alt: e.alt, sizes: e.sizes, ref: a, onLoad: d, onError: p }, null), b = (E = l.sources) == null ? void 0 : E.call(l);
    return v(Ue, { transition: e.transition, appear: !0 }, { default: () => [Oe(b ? v("picture", { class: "v-img__picture" }, [b, B]) : B, [[Ct, r.value === "loaded"]])] });
  }, $ = () => v(Ue, { transition: e.transition }, { default: () => [c.value.lazySrc && r.value !== "loaded" && v("img", { class: ["v-img__img", "v-img__img--preload", S.value], src: c.value.lazySrc, alt: e.alt }, null)] }), P = () => l.placeholder ? v(Ue, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !l.error) && v("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, w = () => l.error ? v(Ue, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && v("div", { class: "v-img__error" }, [l.error()])] }) : null, F = () => e.gradient ? v("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, x = ue(!1);
  {
    const B = ee(m, (b) => {
      b && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          x.value = !0;
        });
      }), B());
    });
  }
  return ne(() => {
    const [B] = bo.filterProps(e);
    return Oe(v(bo, te({ class: ["v-img", { "v-img--booting": !x.value }, e.class], style: [{ width: Q(e.width === "auto" ? s.value : e.width) }, e.style] }, B, { aspectRatio: m.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => v(ae, null, [v(k, null, null), v($, null, null), v(F, null, null), v(P, null, null), v(w, null, null)]), default: l.default }), [[rt("intersect"), { handler: f, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: a, state: r, naturalWidth: s, naturalHeight: i };
} }), ti = W({ start: Boolean, end: Boolean, icon: pe, image: String, ...re(), ...Ge(), ...Je(), ...qt(), ...ke(), ...xe(), ...ct({ variant: "flat" }) }, "VAvatar"), yl = J()({ name: "VAvatar", props: ti(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = _e(e), { colorClasses: o, colorStyles: a, variantClasses: r } = Fl(e), { densityClasses: s } = Ke(e), { roundedClasses: i } = Ze(e), { sizeClasses: c, sizeStyles: m } = Ut(e);
  return ne(() => v(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, o.value, s.value, i.value, c.value, r.value, e.class], style: [a.value, m.value, e.style] }, { default: () => {
    var f;
    return [e.image ? v(ei, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? v(be, { key: "icon", icon: e.icon }, null) : (f = t.default) == null ? void 0 : f.call(t), $l(!1, "v-avatar")];
  } })), {};
} }), lr = Symbol.for("vuetify:v-chip-group"), li = W({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: it }, ...re(), ...Aa({ selectedClass: "v-chip--selected" }), ...ke(), ...xe(), ...ct({ variant: "tonal" }) }, "VChipGroup");
J()({ name: "VChipGroup", props: li(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = _e(e), { isSelected: o, select: a, next: r, prev: s, selected: i } = Va(e, lr);
  return ut({ VChip: { color: Y(e, "color"), disabled: Y(e, "disabled"), filter: Y(e, "filter"), variant: Y(e, "variant") } }), ne(() => v(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var c;
    return [(c = t.default) == null ? void 0 : c.call(t, { isSelected: o, select: a, next: r, prev: s, selected: i.value })];
  } })), {};
} });
const ni = W({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: je(), onClickOnce: je(), ...Ht(), ...re(), ...Ge(), ...Gt(), ...$a(), ...Je(), ...bn(), ...qt(), ...ke({ tag: "span" }), ...xe(), ...ct({ variant: "tonal" }) }, "VChip"), oi = J()({ name: "VChip", directives: { Ripple: Vl }, props: ni(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { t: a } = kt(), { borderClasses: r } = zt(e), { colorClasses: s, colorStyles: i, variantClasses: c } = Fl(e), { densityClasses: m } = Ke(e), { elevationClasses: f } = Kt(e), { roundedClasses: d } = Ze(e), { sizeClasses: p } = Ut(e), { themeClasses: C } = _e(e), u = fe(e, "modelValue"), g = Fa(e, lr, !1), S = hn(e, t), k = y(() => e.link !== !1 && S.isLink.value), $ = y(() => !e.disabled && e.link !== !1 && (!!g || e.link || S.isClickable.value)), P = y(() => ({ "aria-label": a(e.closeLabel), onClick(x) {
    x.stopPropagation(), u.value = !1, l("click:close", x);
  } }));
  function w(x) {
    var B;
    l("click", x), $.value && ((B = S.navigate) == null || B.call(S, x), g == null || g.toggle());
  }
  function F(x) {
    x.key !== "Enter" && x.key !== " " || (x.preventDefault(), w(x));
  }
  return () => {
    const x = S.isLink.value ? "a" : e.tag, B = !(!e.appendIcon && !e.appendAvatar), b = !(!B && !o.append), E = !(!o.close && !e.closable), A = !(!o.filter && !e.filter) && g, L = !(!e.prependIcon && !e.prependAvatar), M = !(!L && !o.prepend), H = !g || g.isSelected.value;
    return u.value && Oe(v(x, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": $.value, "v-chip--filter": A, "v-chip--pill": e.pill }, C.value, r.value, H ? s.value : void 0, m.value, f.value, d.value, p.value, c.value, g == null ? void 0 : g.selectedClass.value, e.class], style: [H ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: S.href.value, tabindex: $.value ? 0 : void 0, onClick: w, onKeydown: $.value && !k.value && F }, { default: () => {
      var K;
      return [$l($.value, "v-chip"), A && v(Zo, { key: "filter" }, { default: () => [Oe(v("div", { class: "v-chip__filter" }, [o.filter ? v(Te, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, o.filter) : v(be, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Ct, g.isSelected.value]])] }), M && v("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? v(Te, { key: "prepend-defaults", disabled: !L, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : v(ae, null, [e.prependIcon && v(be, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && v(yl, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), v("div", { class: "v-chip__content" }, [((K = o.default) == null ? void 0 : K.call(o, { isSelected: g == null ? void 0 : g.isSelected.value, selectedClass: g == null ? void 0 : g.selectedClass.value, select: g == null ? void 0 : g.select, toggle: g == null ? void 0 : g.toggle, value: g == null ? void 0 : g.value.value, disabled: e.disabled })) ?? e.text]), b && v("div", { key: "append", class: "v-chip__append" }, [o.append ? v(Te, { key: "append-defaults", disabled: !B, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : v(ae, null, [e.appendIcon && v(be, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && v(yl, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), E && v("div", te({ key: "close", class: "v-chip__close" }, P.value), [o.close ? v(Te, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : v(be, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[rt("ripple"), $.value && e.ripple, null]]);
  };
} }), ln = Symbol.for("vuetify:list");
function nr() {
  const e = ve(ln, { hasPrepend: ue(!1), updateHasPrepend: () => null }), n = { hasPrepend: ue(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return ye(ln, n), e;
}
function or() {
  return ve(ln, null);
}
const ai = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    const a = /* @__PURE__ */ new Set();
    a.add(n);
    let r = o.get(n);
    for (; r != null; )
      a.add(r), r = o.get(r);
    return a;
  }
  return l.delete(n), l;
}, select: () => null }, ar = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    let a = o.get(n);
    for (l.add(n); a != null && a !== n; )
      l.add(a), a = o.get(a);
    return l;
  }
  return l.delete(n), l;
}, select: () => null }, ri = { open: ar.open, select: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (!t)
    return l;
  const a = [];
  let r = o.get(n);
  for (; r != null; )
    a.push(r), r = o.get(r);
  return new Set(a);
} }, nn = (e) => {
  const n = { select: (t) => {
    let { id: l, value: o, selected: a } = t;
    if (l = Ye(l), e && !o) {
      const r = Array.from(a.entries()).reduce((s, i) => {
        let [c, m] = i;
        return m === "on" ? [...s, c] : s;
      }, []);
      if (r.length === 1 && r[0] === l)
        return a;
    }
    return a.set(l, o ? "on" : "off"), a;
  }, in: (t, l, o) => {
    let a = /* @__PURE__ */ new Map();
    for (const r of t || [])
      a = n.select({ id: r, value: !0, selected: new Map(a), children: l, parents: o });
    return a;
  }, out: (t) => {
    const l = [];
    for (const [o, a] of t.entries())
      a === "on" && l.push(o);
    return l;
  } };
  return n;
}, Co = (e) => {
  const n = nn(e);
  return { select: (t) => {
    let { selected: l, id: o, ...a } = t;
    o = Ye(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return n.select({ ...a, id: o, selected: r });
  }, in: (t, l, o) => {
    let a = /* @__PURE__ */ new Map();
    return t != null && t.length && (a = n.in(t.slice(0, 1), l, o)), a;
  }, out: (t, l, o) => n.out(t, l, o) };
}, Ot = Symbol.for("vuetify:nested"), rr = { id: ue(), root: { register: () => null, unregister: () => null, parents: X(/* @__PURE__ */ new Map()), children: X(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: X(/* @__PURE__ */ new Set()), selected: X(/* @__PURE__ */ new Map()), selectedValues: X([]) } }, si = W({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), ii = (e) => {
  let n = !1;
  const t = X(/* @__PURE__ */ new Map()), l = X(/* @__PURE__ */ new Map()), o = fe(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), a = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((f) => {
          const d = Co(f);
          return { select: (p) => {
            let { id: C, selected: u, children: g, ...S } = p;
            return C = Ye(C), g.has(C) ? u : d.select({ id: C, selected: u, children: g, ...S });
          }, in: d.in, out: d.out };
        })(e.mandatory);
      case "leaf":
        return ((f) => {
          const d = nn(f);
          return { select: (p) => {
            let { id: C, selected: u, children: g, ...S } = p;
            return C = Ye(C), g.has(C) ? u : d.select({ id: C, selected: u, children: g, ...S });
          }, in: d.in, out: d.out };
        })(e.mandatory);
      case "independent":
        return nn(e.mandatory);
      case "single-independent":
        return Co(e.mandatory);
      default:
        return ((f) => {
          const d = { select: (p) => {
            let { id: C, value: u, selected: g, children: S, parents: k } = p;
            C = Ye(C);
            const $ = new Map(g), P = [C];
            for (; P.length; ) {
              const F = P.shift();
              g.set(F, u ? "on" : "off"), S.has(F) && P.push(...S.get(F));
            }
            let w = k.get(C);
            for (; w; ) {
              const F = S.get(w), x = F.every((b) => g.get(b) === "on"), B = F.every((b) => !g.has(b) || g.get(b) === "off");
              g.set(w, x ? "on" : B ? "off" : "indeterminate"), w = k.get(w);
            }
            return f && !u && Array.from(g.entries()).reduce((x, B) => {
              let [b, E] = B;
              return E === "on" ? [...x, b] : x;
            }, []).length === 0 ? $ : g;
          }, in: (p, C, u) => {
            let g = /* @__PURE__ */ new Map();
            for (const S of p || [])
              g = d.select({ id: S, value: !0, selected: new Map(g), children: C, parents: u });
            return g;
          }, out: (p, C) => {
            const u = [];
            for (const [g, S] of p.entries())
              S !== "on" || C.has(g) || u.push(g);
            return u;
          } };
          return d;
        })(e.mandatory);
    }
  }), r = y(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return ri;
      case "single":
        return ai;
      default:
        return ar;
    }
  }), s = fe(e, "selected", e.selected, (f) => a.value.in(f, t.value, l.value), (f) => a.value.out(f, t.value, l.value));
  function i(f) {
    const d = [];
    let p = f;
    for (; p != null; )
      d.unshift(p), p = l.value.get(p);
    return d;
  }
  st(() => {
    n = !0;
  });
  const c = we("nested"), m = { id: ue(), root: { opened: o, selected: s, selectedValues: y(() => {
    const f = [];
    for (const [d, p] of s.value.entries())
      p === "on" && f.push(d);
    return f;
  }), register: (f, d, p) => {
    d && f !== d && l.value.set(f, d), p && t.value.set(f, []), d != null && t.value.set(d, [...t.value.get(d) || [], f]);
  }, unregister: (f) => {
    if (n)
      return;
    t.value.delete(f);
    const d = l.value.get(f);
    if (d) {
      const p = t.value.get(d) ?? [];
      t.value.set(d, p.filter((C) => C !== f));
    }
    l.value.delete(f), o.value.delete(f);
  }, open: (f, d, p) => {
    c.emit("click:open", { id: f, value: d, path: i(f), event: p });
    const C = r.value.open({ id: f, value: d, opened: new Set(o.value), children: t.value, parents: l.value, event: p });
    C && (o.value = C);
  }, openOnSelect: (f, d, p) => {
    const C = r.value.select({ id: f, value: d, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: l.value, event: p });
    C && (o.value = C);
  }, select: (f, d, p) => {
    c.emit("click:select", { id: f, value: d, path: i(f), event: p });
    const C = a.value.select({ id: f, value: d, selected: new Map(s.value), children: t.value, parents: l.value, event: p });
    C && (s.value = C), m.root.openOnSelect(f, d, p);
  }, children: t, parents: l } };
  return ye(Ot, m), m.root;
}, sr = (e, n) => {
  const t = ve(Ot, rr), l = Symbol(We()), o = y(() => e.value !== void 0 ? e.value : l), a = { ...t, id: o, open: (r, s) => t.root.open(o.value, r, s), openOnSelect: (r, s) => t.root.openOnSelect(o.value, r, s), isOpen: y(() => t.root.opened.value.has(o.value)), parent: y(() => t.root.parents.value.get(o.value)), select: (r, s) => t.root.select(o.value, r, s), isSelected: y(() => t.root.selected.value.get(Ye(o.value)) === "on"), isIndeterminate: y(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: y(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, n), st(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), n && ye(Ot, a), a;
}, ui = It({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const l = ve(Ot, rr);
    ye(Ot, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} }), ci = W({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...re(), ...ke() }, "VListGroup"), wo = J()({ name: "VListGroup", props: ci(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: l, open: o, id: a } = sr(Y(e, "value"), !0), r = y(() => `v-list-group--id-${String(a.value)}`), s = or(), { isBooted: i } = function() {
    const p = ue(!1);
    return at(() => {
      window.requestAnimationFrame(() => {
        p.value = !0;
      });
    }), { ssrBootStyles: y(() => p.value ? void 0 : { transition: "none !important" }), isBooted: un(p) };
  }();
  function c(p) {
    o(!l.value, p);
  }
  const m = y(() => ({ onClick: c, class: "v-list-group__header", id: r.value })), f = y(() => l.value ? e.collapseIcon : e.expandIcon), d = y(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && f.value, appendIcon: e.appendIcon || !e.subgroup && f.value, title: e.title, value: e.value } }));
  return ne(() => v(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [t.activator && v(Te, { defaults: d.value }, { default: () => [v(ui, null, { default: () => [t.activator({ props: m.value, isOpen: l.value })] })] }), v(Ue, { transition: { component: ps }, disabled: !i.value }, { default: () => {
    var p;
    return [Oe(v("div", { class: "v-list-group__items", role: "group", "aria-labelledby": r.value }, [(p = t.default) == null ? void 0 : p.call(t)]), [[Ct, l.value]])];
  } })] })), {};
} }), di = zo("v-list-item-subtitle"), pi = zo("v-list-item-title"), vi = W({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: je(), onClickOnce: je(), ...Ht(), ...re(), ...Ge(), ...wt(), ...Gt(), ...Je(), ...bn(), ...ke(), ...xe(), ...ct({ variant: "text" }) }, "VListItem"), hl = J()({ name: "VListItem", directives: { Ripple: Vl }, props: vi(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const a = hn(e, t), r = y(() => e.value === void 0 ? a.href.value : e.value), { select: s, isSelected: i, isIndeterminate: c, isGroupActivator: m, root: f, parent: d, openOnSelect: p } = sr(r, !1), C = or(), u = y(() => {
    var j;
    return e.active !== !1 && (e.active || ((j = a.isActive) == null ? void 0 : j.value) || i.value);
  }), g = y(() => e.link !== !1 && a.isLink.value), S = y(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || e.value != null && !!C)), k = y(() => e.rounded || e.nav), $ = y(() => e.color ?? e.activeColor), P = y(() => ({ color: u.value ? $.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  ee(() => {
    var j;
    return (j = a.isActive) == null ? void 0 : j.value;
  }, (j) => {
    j && d.value != null && f.open(d.value, !0), j && p(j);
  }, { immediate: !0 });
  const { themeClasses: w } = _e(e), { borderClasses: F } = zt(e), { colorClasses: x, colorStyles: B, variantClasses: b } = Fl(P), { densityClasses: E } = Ke(e), { dimensionStyles: A } = xt(e), { elevationClasses: L } = Kt(e), { roundedClasses: M } = Ze(k), H = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), K = y(() => ({ isActive: u.value, select: s, isSelected: i.value, isIndeterminate: c.value }));
  function I(j) {
    var G;
    o("click", j), !m && S.value && ((G = a.navigate) == null || G.call(a, j), e.value != null && s(!i.value, j));
  }
  function N(j) {
    j.key !== "Enter" && j.key !== " " || (j.preventDefault(), I(j));
  }
  return ne(() => {
    const j = g.value ? "a" : e.tag, G = l.title || e.title, _ = l.subtitle || e.subtitle, T = !(!e.appendAvatar && !e.appendIcon), V = !(!T && !l.append), D = !(!e.prependAvatar && !e.prependIcon), O = !(!D && !l.prepend);
    var R, z;
    return C == null || C.updateHasPrepend(O), e.activeColor && (R = "active-color", z = ["color", "base-color"], z = Array.isArray(z) ? z.slice(0, -1).map((U) => `'${U}'`).join(", ") + ` or '${z.at(-1)}'` : `'${z}'`, Bl(`[Vuetify UPGRADE] '${R}' is deprecated, use ${z} instead.`)), Oe(v(j, { class: ["v-list-item", { "v-list-item--active": u.value, "v-list-item--disabled": e.disabled, "v-list-item--link": S.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !O && (C == null ? void 0 : C.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && u.value }, w.value, F.value, x.value, E.value, L.value, H.value, M.value, b.value, e.class], style: [B.value, A.value, e.style], href: a.href.value, tabindex: S.value ? C ? -2 : 0 : void 0, onClick: I, onKeydown: S.value && !g.value && N }, { default: () => {
      var U;
      return [$l(S.value || u.value, "v-list-item"), O && v("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? v(Te, { key: "prepend-defaults", disabled: !D, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var q;
        return [(q = l.prepend) == null ? void 0 : q.call(l, K.value)];
      } }) : v(ae, null, [e.prependAvatar && v(yl, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && v(be, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), v("div", { class: "v-list-item__spacer" }, null)]), v("div", { class: "v-list-item__content", "data-no-activator": "" }, [G && v(pi, { key: "title" }, { default: () => {
        var q;
        return [((q = l.title) == null ? void 0 : q.call(l, { title: e.title })) ?? e.title];
      } }), _ && v(di, { key: "subtitle" }, { default: () => {
        var q;
        return [((q = l.subtitle) == null ? void 0 : q.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (U = l.default) == null ? void 0 : U.call(l, K.value)]), V && v("div", { key: "append", class: "v-list-item__append" }, [l.append ? v(Te, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var q;
        return [(q = l.append) == null ? void 0 : q.call(l, K.value)];
      } }) : v(ae, null, [e.appendIcon && v(be, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && v(yl, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), v("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[rt("ripple"), S.value && e.ripple]]);
  }), {};
} }), fi = W({ color: String, inset: Boolean, sticky: Boolean, title: String, ...re(), ...ke() }, "VListSubheader"), mi = J()({ name: "VListSubheader", props: fi(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: l, textColorStyles: o } = He(Y(e, "color"));
  return ne(() => {
    const a = !(!t.default && !e.title);
    return v(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var r;
      return [a && v("div", { class: "v-list-subheader__text" }, [((r = t.default) == null ? void 0 : r.call(t)) ?? e.title])];
    } });
  }), {};
} }), gi = W({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...re(), ...xe() }, "VDivider"), yi = J()({ name: "VDivider", props: gi(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: l } = _e(e), { textColorClasses: o, textColorStyles: a } = He(Y(e, "color")), r = y(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = Q(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Q(e.thickness)), s;
  });
  return ne(() => v("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class], style: [r.value, a.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), hi = W({ items: Array, returnObject: Boolean }, "VListChildren"), ir = J()({ name: "VListChildren", props: hi(), setup(e, n) {
  let { slots: t } = n;
  return nr(), () => {
    var l, o;
    return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((a) => {
      var p, C;
      let { children: r, props: s, type: i, raw: c } = a;
      if (i === "divider")
        return ((p = t.divider) == null ? void 0 : p.call(t, { props: s })) ?? v(yi, s, null);
      if (i === "subheader")
        return ((C = t.subheader) == null ? void 0 : C.call(t, { props: s })) ?? v(mi, s, null);
      const m = { subtitle: t.subtitle ? (u) => {
        var g;
        return (g = t.subtitle) == null ? void 0 : g.call(t, { ...u, item: c });
      } : void 0, prepend: t.prepend ? (u) => {
        var g;
        return (g = t.prepend) == null ? void 0 : g.call(t, { ...u, item: c });
      } : void 0, append: t.append ? (u) => {
        var g;
        return (g = t.append) == null ? void 0 : g.call(t, { ...u, item: c });
      } : void 0, title: t.title ? (u) => {
        var g;
        return (g = t.title) == null ? void 0 : g.call(t, { ...u, item: c });
      } : void 0 }, [f, d] = wo.filterProps(s);
      return r ? v(wo, te({ value: s == null ? void 0 : s.value }, f), { activator: (u) => {
        let { props: g } = u;
        const S = { ...s, ...g, value: e.returnObject ? c : s.value };
        return t.header ? t.header({ props: S }) : v(hl, S, m);
      }, default: () => v(ir, { items: r }, t) }) : t.item ? t.item({ props: s }) : v(hl, te(s, { value: e.returnObject ? c : s.value }), m);
    }));
  };
} }), ur = W({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: it } }, "list-items");
function on(e, n) {
  const t = Pe(n, e.itemTitle, n), l = Pe(n, e.itemValue, t), o = Pe(n, e.itemChildren), a = { title: t, value: l, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? yt(n, ["children"])[1] : n : Pe(n, e.itemProps) };
  return { title: String(a.title ?? ""), value: a.value, props: a, children: Array.isArray(o) ? cr(e, o) : void 0, raw: n };
}
function cr(e, n) {
  const t = [];
  for (const l of n)
    t.push(on(e, l));
  return t;
}
function bi(e, n) {
  const t = Pe(n, e.itemType, "item"), l = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(n) ? n : Pe(n, e.itemTitle), o = Pe(n, e.itemValue, void 0), a = Pe(n, e.itemChildren), r = { title: l, value: o, ...e.itemProps === !0 ? yt(n, ["children"])[1] : Pe(n, e.itemProps) };
  return { type: t, title: r.title, value: r.value, props: r, children: t === "item" && a ? dr(e, a) : void 0, raw: n };
}
function dr(e, n) {
  const t = [];
  for (const l of n)
    t.push(bi(e, l));
  return t;
}
const Si = W({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...si({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ht(), ...re(), ...Ge(), ...wt(), ...Gt(), itemType: { type: String, default: "type" }, ...ur(), ...Je(), ...ke(), ...xe(), ...ct({ variant: "text" }) }, "VList"), Ci = J()({ name: "VList", props: Si(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: l } = function(b) {
    return { items: y(() => dr(b, b.items)) };
  }(e), { themeClasses: o } = _e(e), { backgroundColorClasses: a, backgroundColorStyles: r } = ot(Y(e, "bgColor")), { borderClasses: s } = zt(e), { densityClasses: i } = Ke(e), { dimensionStyles: c } = xt(e), { elevationClasses: m } = Kt(e), { roundedClasses: f } = Ze(e), { open: d, select: p } = ii(e), C = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), u = Y(e, "activeColor"), g = Y(e, "baseColor"), S = Y(e, "color");
  nr(), ut({ VListGroup: { activeColor: u, baseColor: g, color: S }, VListItem: { activeClass: Y(e, "activeClass"), activeColor: u, baseColor: g, color: S, density: Y(e, "density"), disabled: Y(e, "disabled"), lines: Y(e, "lines"), nav: Y(e, "nav"), variant: Y(e, "variant") } });
  const k = ue(!1), $ = X();
  function P(b) {
    k.value = !0;
  }
  function w(b) {
    k.value = !1;
  }
  function F(b) {
    var E;
    k.value || b.relatedTarget && ((E = $.value) != null && E.contains(b.relatedTarget)) || B();
  }
  function x(b) {
    if ($.value) {
      if (b.key === "ArrowDown")
        B("next");
      else if (b.key === "ArrowUp")
        B("prev");
      else if (b.key === "Home")
        B("first");
      else {
        if (b.key !== "End")
          return;
        B("last");
      }
      b.preventDefault();
    }
  }
  function B(b) {
    if ($.value)
      return il($.value, b);
  }
  return ne(() => v(e.tag, { ref: $, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, a.value, s.value, i.value, m.value, C.value, f.value, e.class], style: [r.value, c.value, e.style], tabindex: e.disabled || k.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: P, onFocusout: w, onFocus: F, onKeydown: x }, { default: () => [v(ir, { items: l.value, returnObject: e.returnObject }, t)] })), { open: d, select: p, focus: B };
} }), wi = W({ id: String, ...Rt(oa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Xo } }), ["absolute"]) }, "VMenu"), xi = J()({ name: "VMenu", props: wi(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = fe(e, "modelValue"), { scopeId: o } = la(), a = We(), r = y(() => e.id || `v-menu-${a}`), s = X(), i = ve(Ql, null), c = ue(0);
  async function m(u) {
    var k, $, P;
    const g = u.relatedTarget, S = u.target;
    await Ee(), l.value && g !== S && ((k = s.value) != null && k.contentEl) && (($ = s.value) != null && $.globalTop) && ![document, s.value.contentEl].includes(S) && !s.value.contentEl.contains(S) && ((P = Yl(s.value.contentEl)[0]) == null || P.focus());
  }
  function f() {
    i == null || i.closeParents();
  }
  function d(u) {
    var g, S, k;
    !e.disabled && u.key === "Tab" && (Ro(Yl((g = s.value) == null ? void 0 : g.contentEl, !1), u.shiftKey ? "prev" : "next", ($) => $.tabIndex >= 0) || (l.value = !1, (k = (S = s.value) == null ? void 0 : S.activatorEl) == null || k.focus()));
  }
  function p(u) {
    var S;
    if (e.disabled)
      return;
    const g = (S = s.value) == null ? void 0 : S.contentEl;
    g && l.value ? u.key === "ArrowDown" ? (u.preventDefault(), il(g, "next")) : u.key === "ArrowUp" && (u.preventDefault(), il(g, "prev")) : ["ArrowDown", "ArrowUp"].includes(u.key) && (l.value = !0, u.preventDefault(), setTimeout(() => setTimeout(() => p(u))));
  }
  ye(Ql, { register() {
    ++c.value;
  }, unregister() {
    --c.value;
  }, closeParents() {
    setTimeout(() => {
      c.value || (l.value = !1, i == null || i.closeParents());
    }, 40);
  } }), ee(l, (u) => {
    u ? (i == null || i.register(), document.addEventListener("focusin", m, { once: !0 })) : (i == null || i.unregister(), document.removeEventListener("focusin", m));
  });
  const C = y(() => te({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": r.value, onKeydown: p }, e.activatorProps));
  return ne(() => {
    const [u] = uo.filterProps(e);
    return v(uo, te({ ref: s, class: ["v-menu", e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (g) => l.value = g, absolute: !0, activatorProps: C.value, "onClick:outside": f, onKeydown: d }, o), { activator: t.activator, default: function() {
      for (var g = arguments.length, S = new Array(g), k = 0; k < g; k++)
        S[k] = arguments[k];
      return v(Te, { root: "VMenu" }, { default: () => {
        var $;
        return [($ = t.default) == null ? void 0 : $.call(t, ...S)];
      } });
    } });
  }), Sn({ id: r, ΨopenChildren: c }, s);
} }), ki = W({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...re(), ...Wt({ transition: { component: Jo } }) }, "VCounter"), Bi = J()({ name: "VCounter", functional: !0, props: ki(), setup(e, n) {
  let { slots: t } = n;
  const l = y(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ne(() => v(Ue, { transition: e.transition }, { default: () => [Oe(v("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Ct, e.active]])] })), {};
} }), Pi = W({ floating: Boolean, ...re() }, "VFieldLabel"), ll = J()({ name: "VFieldLabel", props: Pi(), setup(e, n) {
  let { slots: t } = n;
  return ne(() => v(Ka, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), _i = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], pr = W({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => _i.includes(e) }, "onClick:clear": je(), "onClick:appendInner": je(), "onClick:prependInner": je(), ...re(), ...wn(), ...Je(), ...xe() }, "VField"), xo = J()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Za(), ...pr() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { themeClasses: a } = _e(e), { loaderClasses: r } = xn(e), { focusClasses: s, isFocused: i, focus: c, blur: m } = kn(e), { InputIcon: f } = Ja(e), { roundedClasses: d } = Ze(e), { rtlClasses: p } = jt(), C = y(() => e.dirty || e.active), u = y(() => !(e.singleLine || !e.label && !o.label)), g = We(), S = y(() => e.id || `input-${g}`), k = y(() => `${S.value}-messages`), $ = X(), P = X(), w = X(), F = y(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: x, backgroundColorStyles: B } = ot(Y(e, "bgColor")), { textColorClasses: b, textColorStyles: E } = He(y(() => e.error || e.disabled ? void 0 : C.value && i.value ? e.color : e.baseColor));
  ee(C, (M) => {
    if (u.value) {
      const H = $.value.$el, K = P.value.$el;
      requestAnimationFrame(() => {
        const I = fn(H), N = K.getBoundingClientRect(), j = N.x - I.x, G = N.y - I.y - (I.height / 2 - N.height / 2), _ = N.width / 0.75, T = Math.abs(_ - I.width) > 1 ? { maxWidth: Q(_) } : void 0, V = getComputedStyle(H), D = getComputedStyle(K), O = 1e3 * parseFloat(V.transitionDuration) || 150, R = parseFloat(D.getPropertyValue("--v-field-label-scale")), z = D.getPropertyValue("color");
        H.style.visibility = "visible", K.style.visibility = "hidden", vt(H, { transform: `translate(${j}px, ${G}px) scale(${R})`, color: z, ...T }, { duration: O, easing: dl, direction: M ? "normal" : "reverse" }).finished.then(() => {
          H.style.removeProperty("visibility"), K.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const A = y(() => ({ isActive: C, isFocused: i, controlRef: w, blur: m, focus: c }));
  function L(M) {
    M.target !== document.activeElement && M.preventDefault();
  }
  return ne(() => {
    var j, G, _;
    const M = e.variant === "outlined", H = o["prepend-inner"] || e.prependInnerIcon, K = !(!e.clearable && !o.clear), I = !!(o["append-inner"] || e.appendInnerIcon || K), N = o.label ? o.label({ ...A.value, label: e.label, props: { for: S.value } }) : e.label;
    return v("div", te({ class: ["v-field", { "v-field--active": C.value, "v-field--appended": I, "v-field--center-affix": e.centerAffix ?? !F.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": H, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !N, [`v-field--variant-${e.variant}`]: !0 }, a.value, x.value, s.value, r.value, d.value, p.value, e.class], style: [B.value, e.style], onClick: L }, t), [v("div", { class: "v-field__overlay" }, null), v(Ma, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: o.loader }), H && v("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && v(f, { key: "prepend-icon", name: "prependInner" }, null), (j = o["prepend-inner"]) == null ? void 0 : j.call(o, A.value)]), v("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && u.value && v(ll, { key: "floating-label", ref: P, class: [b.value], floating: !0, for: S.value, style: E.value }, { default: () => [N] }), v(ll, { ref: $, for: S.value }, { default: () => [N] }), (G = o.default) == null ? void 0 : G.call(o, { ...A.value, props: { id: S.value, class: "v-field__input", "aria-describedby": k.value }, focus: c, blur: m })]), K && v(Zo, { key: "clear" }, { default: () => [Oe(v("div", { class: "v-field__clearable", onMousedown: (T) => {
      T.preventDefault(), T.stopPropagation();
    } }, [o.clear ? o.clear() : v(f, { name: "clear" }, null)]), [[Ct, e.dirty]])] }), I && v("div", { key: "append", class: "v-field__append-inner" }, [(_ = o["append-inner"]) == null ? void 0 : _.call(o, A.value), e.appendInnerIcon && v(f, { key: "append-icon", name: "appendInner" }, null)]), v("div", { class: ["v-field__outline", b.value], style: E.value }, [M && v(ae, null, [v("div", { class: "v-field__outline__start" }, null), u.value && v("div", { class: "v-field__outline__notch" }, [v(ll, { ref: P, floating: !0, for: S.value }, { default: () => [N] })]), v("div", { class: "v-field__outline__end" }, null)]), F.value && u.value && v(ll, { ref: P, floating: !0, for: S.value }, { default: () => [N] })])]);
  }), { controlRef: w };
} }), Ai = ["color", "file", "time", "date", "datetime-local", "week", "month"], vr = W({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Bn(), ...pr() }, "VTextField"), an = J()({ name: "VTextField", directives: { Intersect: tr }, inheritAttrs: !1, props: vr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const a = fe(e, "modelValue"), { isFocused: r, focus: s, blur: i } = kn(e), c = y(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), m = y(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), f = y(() => ["plain", "underlined"].includes(e.variant));
  function d(F, x) {
    var B, b;
    e.autofocus && F && ((b = (B = x[0].target) == null ? void 0 : B.focus) == null || b.call(B));
  }
  const p = X(), C = X(), u = X(), g = y(() => Ai.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
  function S() {
    var F;
    u.value !== document.activeElement && ((F = u.value) == null || F.focus()), r.value || s();
  }
  function k(F) {
    l("mousedown:control", F), F.target !== u.value && (S(), F.preventDefault());
  }
  function $(F) {
    S(), l("click:control", F);
  }
  function P(F) {
    F.stopPropagation(), S(), Ee(() => {
      a.value = null, function(x) {
        for (var B = arguments.length, b = new Array(B > 1 ? B - 1 : 0), E = 1; E < B; E++)
          b[E - 1] = arguments[E];
        if (Array.isArray(x))
          for (const A of x)
            A(...b);
        else
          typeof x == "function" && x(...b);
      }(e["onClick:clear"], F);
    });
  }
  function w(F) {
    var B;
    const x = F.target;
    if (a.value = x.value, ((B = e.modelModifiers) == null ? void 0 : B.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const b = [x.selectionStart, x.selectionEnd];
      Ee(() => {
        x.selectionStart = b[0], x.selectionEnd = b[1];
      });
    }
  }
  return ne(() => {
    const F = !!(o.counter || e.counter !== !1 && e.counter != null), x = !(!F && !o.details), [B, b] = pn(t), [{ modelValue: E, ...A }] = gl.filterProps(e), [L] = function(M) {
      return yt(M, Object.keys(xo.props).filter((H) => !Ul(H) && H !== "class" && H !== "style"));
    }(e);
    return v(gl, te({ ref: p, modelValue: a.value, "onUpdate:modelValue": (M) => a.value = M, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, B, A, { centerAffix: !f.value, focused: r.value }), { ...o, default: (M) => {
      let { id: H, isDisabled: K, isDirty: I, isReadonly: N, isValid: j } = M;
      return v(xo, te({ ref: C, onMousedown: k, onClick: $, "onClick:clear": P, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, L, { id: H.value, active: g.value || I.value, dirty: I.value || e.dirty, disabled: K.value, focused: r.value, error: j.value === !1 }), { ...o, default: (G) => {
        let { props: { class: _, ...T } } = G;
        const V = Oe(v("input", te({ ref: u, value: a.value, onInput: w, autofocus: e.autofocus, readonly: N.value, disabled: K.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: S, onBlur: i }, T, b), null), [[rt("intersect"), { handler: d }, null, { once: !0 }]]);
        return v(ae, null, [e.prefix && v("span", { class: "v-text-field__prefix" }, [v("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), o.default ? v("div", { class: _, "data-no-activator": "" }, [o.default(), V]) : Kr(V, { class: _ }), e.suffix && v("span", { class: "v-text-field__suffix" }, [v("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: x ? (M) => {
      var H;
      return v(ae, null, [(H = o.details) == null ? void 0 : H.call(o, M), F && v(ae, null, [v("span", null, null), v(Bi, { active: e.persistentCounter || r.value, value: c.value, max: m.value }, o.counter)])]);
    } : void 0 });
  }), Sn({}, p, C, u);
} }), $i = W({ renderless: Boolean, ...re() }, "VVirtualScrollItem"), Fi = J()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: $i(), emits: { "update:height": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { resizeRef: a, contentRect: r } = Cn(void 0, "border");
  ee(() => {
    var s;
    return (s = r.value) == null ? void 0 : s.height;
  }, (s) => {
    s != null && l("update:height", s);
  }), ne(() => {
    var s, i;
    return e.renderless ? v(ae, null, [(s = o.default) == null ? void 0 : s.call(o, { itemRef: a })]) : v("div", te({ ref: a, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(i = o.default) == null ? void 0 : i.call(o)]);
  });
} }), Vi = W({ itemHeight: { type: [Number, String], default: 48 } }, "virtual");
function Ei(e, n, t) {
  const l = ue(0), o = ue(e.itemHeight), a = y({ get: () => parseInt(o.value ?? 0, 10), set($) {
    o.value = $;
  } }), r = X(), { resizeRef: s, contentRect: i } = Cn();
  Le(() => {
    s.value = r.value;
  });
  const c = ea(), m = /* @__PURE__ */ new Map();
  let f = Array.from({ length: n.value.length });
  const d = y(() => {
    const $ = (i.value && r.value !== document.documentElement ? i.value.height : c.height.value) - ((t == null ? void 0 : t.value) ?? 0);
    return Math.ceil($ / a.value * 1.7 + 1);
  });
  function p($) {
    return f.slice(0, $).reduce((P, w) => P + (w || a.value), 0);
  }
  let C = 0;
  const u = y(() => Math.min(n.value.length, l.value + d.value)), g = y(() => n.value.slice(l.value, u.value).map(($, P) => ({ raw: $, index: P + l.value }))), S = y(() => p(l.value)), k = y(() => p(n.value.length) - p(u.value));
  return ee(() => n.value.length, () => {
    f = Gl(n.value.length).map(() => a.value), m.forEach(($, P) => {
      const w = n.value.indexOf(P);
      w === -1 ? m.delete(P) : f[w] = $;
    });
  }), { containerRef: r, computedItems: g, itemHeight: a, paddingTop: S, paddingBottom: k, scrollToIndex: function($) {
    if (!r.value)
      return;
    const P = p($);
    r.value.scrollTop = P;
  }, handleScroll: function() {
    if (!r.value || !i.value)
      return;
    const $ = i.value.height - 56, P = r.value.scrollTop, w = P < C ? -1 : 1, F = function(E) {
      const A = n.value.length;
      let L = 0, M = 0;
      for (; M < E && L < A; )
        M += f[L++] || a.value;
      return L - 1;
    }(P + $ / 2), x = Math.round(d.value / 3), B = F - x, b = l.value + 2 * x - 1;
    w === -1 && F <= b ? l.value = et(B, 0, n.value.length) : w === 1 && F >= b && (l.value = et(B, 0, n.value.length - d.value)), C = P;
  }, handleItemResize: function($, P) {
    a.value = Math.max(a.value, P), f[$] = P, m.set(n.value[$], P);
  } };
}
const Ii = W({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Vi(), ...re(), ...wt() }, "VVirtualScroll"), Di = J()({ name: "VVirtualScroll", props: Ii(), setup(e, n) {
  let { slots: t } = n;
  const l = we("VVirtualScroll"), { dimensionStyles: o } = xt(e), { containerRef: a, handleScroll: r, handleItemResize: s, scrollToIndex: i, paddingTop: c, paddingBottom: m, computedItems: f } = Ei(e, Y(e, "items"));
  return lt(() => e.renderless, () => {
    at(() => {
      var d;
      a.value = qo(l.vnode.el, !0), (d = a.value) == null || d.addEventListener("scroll", r);
    }), Be(() => {
      var d;
      (d = a.value) == null || d.removeEventListener("scroll", r);
    });
  }), ne(() => {
    const d = f.value.map((p) => v(Fi, { key: p.index, renderless: e.renderless, "onUpdate:height": (C) => s(p.index, C) }, { default: (C) => {
      var u;
      return (u = t.default) == null ? void 0 : u.call(t, { item: p.raw, index: p.index, ...C });
    } }));
    return e.renderless ? v(ae, null, [v("div", { class: "v-virtual-scroll__spacer", style: { paddingTop: Q(c.value) } }, null), d, v("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: Q(m.value) } }, null)]) : v("div", { ref: a, class: ["v-virtual-scroll", e.class], onScroll: r, style: [o.value, e.style] }, [v("div", { class: "v-virtual-scroll__container", style: { paddingTop: Q(c.value), paddingBottom: Q(m.value) } }, [d])]);
  }), { scrollToIndex: i };
} });
function Ti(e, n) {
  const t = ue(!1);
  let l;
  return { onListScroll: function(o) {
    cancelAnimationFrame(l), t.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }, onListKeydown: async function(o) {
    var s, i;
    if (o.key === "Tab" && ((s = n.value) == null || s.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o.key))
      return;
    const a = (i = e.value) == null ? void 0 : i.$el;
    if (!a)
      return;
    o.key !== "Home" && o.key !== "End" || a.scrollTo({ top: o.key === "Home" ? 0 : a.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((c) => requestAnimationFrame(c)), await new Promise((c) => requestAnimationFrame(c)), await new Promise((c) => requestAnimationFrame(c)), await new Promise((c) => {
        if (t.value) {
          const m = ee(t, () => {
            m(), c();
          });
        } else
          c();
      });
    }();
    const r = a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (o.key === "PageDown" || o.key === "Home") {
      const c = a.getBoundingClientRect().top;
      for (const m of r)
        if (m.getBoundingClientRect().top >= c) {
          m.focus();
          break;
        }
    } else {
      const c = a.getBoundingClientRect().bottom;
      for (const m of [...r].reverse())
        if (m.getBoundingClientRect().bottom <= c) {
          m.focus();
          break;
        }
    }
  } };
}
const Oi = W({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...ur({ itemChildren: !1 }) }, "Select"), Li = W({ ...Oi(), ...Rt(vr({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Wt({ transition: { component: Xo } }) }, "VSelect"), Mi = J()({ name: "VSelect", props: Li(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = kt(), o = X(), a = X(), r = X(), s = fe(e, "menu"), i = y({ get: () => s.value, set: (I) => {
    var N;
    s.value && !I && ((N = a.value) != null && N.ΨopenChildren) || (s.value = I);
  } }), { items: c, transformIn: m, transformOut: f } = function(I) {
    const N = y(() => cr(I, I.items)), j = y(() => N.value.some((G) => G.value === null));
    return { items: N, transformIn: function(G) {
      return j.value || (G = G.filter((_) => _ !== null)), G.map((_) => I.returnObject && typeof _ == "string" ? on(I, _) : N.value.find((T) => I.valueComparator(_, T.value)) || on(I, _));
    }, transformOut: function(G) {
      return I.returnObject ? G.map((_) => {
        let { raw: T } = _;
        return T;
      }) : G.map((_) => {
        let { value: T } = _;
        return T;
      });
    } };
  }(e), d = fe(e, "modelValue", [], (I) => m(I === null ? [null] : Ve(I)), (I) => {
    const N = f(I);
    return e.multiple ? N : N[0] ?? null;
  }), p = Qa(), C = y(() => d.value.map((I) => I.value)), u = ue(!1), g = y(() => i.value ? e.closeText : e.openText);
  let S, k = "";
  const $ = y(() => e.hideSelected ? c.value.filter((I) => !d.value.some((N) => N === I)) : c.value), P = y(() => e.hideNoData && !c.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), w = X(), { onListScroll: F, onListKeydown: x } = Ti(w, o);
  function B(I) {
    e.openOnClear && (i.value = !0);
  }
  function b() {
    P.value || (i.value = !i.value);
  }
  function E(I) {
    var G, _;
    if (!I.key || e.readonly || p != null && p.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(I.key) && I.preventDefault(), ["Enter", "ArrowDown", " "].includes(I.key) && (i.value = !0), ["Escape", "Tab"].includes(I.key) && (i.value = !1), I.key === "Home" ? (G = w.value) == null || G.focus("first") : I.key === "End" && ((_ = w.value) == null || _.focus("last")), e.multiple || !function(T) {
      const V = T.key.length === 1, D = !T.ctrlKey && !T.metaKey && !T.altKey;
      return V && D;
    }(I)))
      return;
    const N = performance.now();
    N - S > 1e3 && (k = ""), k += I.key.toLowerCase(), S = N;
    const j = c.value.find((T) => T.title.toLowerCase().startsWith(k));
    j !== void 0 && (d.value = [j]);
  }
  function A(I) {
    if (e.multiple) {
      const N = d.value.findIndex((j) => e.valueComparator(j.value, I.value));
      if (N === -1)
        d.value = [...d.value, I];
      else {
        const j = [...d.value];
        j.splice(N, 1), d.value = j;
      }
    } else
      d.value = [I], i.value = !1;
  }
  function L(I) {
    var N;
    (N = w.value) != null && N.$el.contains(I.relatedTarget) || (i.value = !1);
  }
  function M() {
    var I;
    u.value && ((I = o.value) == null || I.focus());
  }
  function H(I) {
    u.value = !0;
  }
  function K(I) {
    if (I == null)
      d.value = [];
    else if (ul(o.value, ":autofill") || ul(o.value, ":-webkit-autofill")) {
      const N = c.value.find((j) => j.title === I);
      N && A(N);
    } else
      o.value && (o.value.value = "");
  }
  return ee(i, () => {
    if (!e.hideSelected && i.value && d.value.length) {
      const I = $.value.findIndex((N) => d.value.some((j) => e.valueComparator(j.value, N.value)));
      De && window.requestAnimationFrame(() => {
        var N;
        I >= 0 && ((N = r.value) == null || N.scrollToIndex(I));
      });
    }
  }), ne(() => {
    const I = !(!e.chips && !t.chip), N = !!(!e.hideNoData || $.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), j = d.value.length > 0, [G] = an.filterProps(e), _ = j || !u.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return v(an, te({ ref: o }, G, { modelValue: d.value.map((T) => T.props.value).join(", "), "onUpdate:modelValue": K, focused: u.value, "onUpdate:focused": (T) => u.value = T, validationValue: d.externalValue, counterValue: d.value.length, dirty: j, class: ["v-select", { "v-select--active-menu": i.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": d.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, inputmode: "none", placeholder: _, "onClick:clear": B, "onMousedown:control": b, onBlur: L, onKeydown: E, "aria-label": l(g.value), title: l(g.value) }), { ...t, default: () => v(ae, null, [v(xi, te({ ref: a, modelValue: i.value, "onUpdate:modelValue": (T) => i.value = T, activator: "parent", contentClass: "v-select__content", disabled: P.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: M }, e.menuProps), { default: () => [N && v(Ci, { ref: w, selected: C.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (T) => T.preventDefault(), onKeydown: x, onFocusin: H, onScrollPassive: F, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var T, V, D;
      return [(T = t["prepend-item"]) == null ? void 0 : T.call(t), !$.value.length && !e.hideNoData && (((V = t["no-data"]) == null ? void 0 : V.call(t)) ?? v(hl, { title: l(e.noDataText) }, null)), v(Di, { ref: r, renderless: !0, items: $.value }, { default: (O) => {
        var oe;
        let { item: R, index: z, itemRef: U } = O;
        const q = te(R.props, { ref: U, key: z, onClick: () => A(R) });
        return ((oe = t.item) == null ? void 0 : oe.call(t, { item: R, index: z, props: q })) ?? v(hl, q, { prepend: (me) => {
          let { isSelected: Me } = me;
          return v(ae, null, [e.multiple && !e.hideSelected ? v(ht, { key: R.value, modelValue: Me, ripple: !1, tabindex: "-1" }, null) : void 0, R.props.prependIcon && v(be, { icon: R.props.prependIcon }, null)]);
        } });
      } }), (D = t["append-item"]) == null ? void 0 : D.call(t)];
    } })] }), d.value.map((T, V) => {
      const D = { "onClick:close": function(z) {
        z.stopPropagation(), z.preventDefault(), A(T);
      }, onMousedown(z) {
        z.preventDefault(), z.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, O = I ? !!t.chip : !!t.selection, R = O ? jo(I ? t.chip({ item: T, index: V, props: D }) : t.selection({ item: T, index: V })) : void 0;
      if (!O || R)
        return v("div", { key: T.value, class: "v-select__selection" }, [I ? t.chip ? v(Te, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: T.title } } }, { default: () => [R] }) : v(oi, te({ key: "chip", closable: e.closableChips, size: "small", text: T.title, disabled: T.props.disabled }, D), null) : R ?? v("span", { class: "v-select__selection-text" }, [T.title, e.multiple && V < d.value.length - 1 && v("span", { class: "v-select__selection-comma" }, [rl(",")])])]);
    })]), "append-inner": function() {
      var O;
      for (var T = arguments.length, V = new Array(T), D = 0; D < T; D++)
        V[D] = arguments[D];
      return v(ae, null, [(O = t["append-inner"]) == null ? void 0 : O.call(t, ...V), e.menuIcon ? v(be, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Sn({ isFocused: u, menu: i, select: A }, o);
} }), _n = W({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), bl = J()({ name: "VDataTableFooter", props: _n(), setup(e, n) {
  let { slots: t } = n;
  const { t: l } = kt(), { page: o, pageCount: a, startIndex: r, stopIndex: s, itemsLength: i, itemsPerPage: c, setItemsPerPage: m } = function() {
    const d = ve(ya);
    if (!d)
      throw new Error("Missing pagination!");
    return d;
  }(), f = y(() => e.itemsPerPageOptions.map((d) => typeof d == "number" ? { value: d, title: d === -1 ? l("$vuetify.dataFooter.itemsPerPageAll") : String(d) } : { ...d, title: l(d.title) }));
  return () => {
    var d;
    return v("div", { class: "v-data-table-footer" }, [(d = t.prepend) == null ? void 0 : d.call(t), v("div", { class: "v-data-table-footer__items-per-page" }, [v("span", null, [l(e.itemsPerPageText)]), v(Mi, { items: f.value, modelValue: c.value, "onUpdate:modelValue": (p) => m(Number(p)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), v("div", { class: "v-data-table-footer__info" }, [v("div", null, [l(e.pageText, i.value ? r.value + 1 : 0, s.value, i.value)])]), v("div", { class: "v-data-table-footer__pagination" }, [v(ft, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": l(e.firstPageLabel) }, null), v(ft, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": l(e.prevPageLabel) }, null), e.showCurrentPage && v("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), v(ft, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(a.value, o.value + 1), disabled: o.value === a.value, "aria-label": l(e.nextPageLabel) }, null), v(ft, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = a.value, disabled: o.value === a.value, "aria-label": l(e.lastPageLabel) }, null)])]);
  };
} }), An = (ko = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Wl = (e, n) => {
  let { slots: t, attrs: l } = n;
  const o = e.tag ?? "td";
  return v(o, te({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: Q(e.height), width: Q(e.width), left: Q(e.fixedOffset || null) } }, l), { default: () => {
    var a;
    return [(a = t.default) == null ? void 0 : a.call(t)];
  } });
}, Wl.props = ko, Wl);
var ko, Wl;
const Ni = W({ headers: { type: Array, default: () => [] } }, "DataTable-header"), fr = Symbol.for("vuetify:data-table-headers");
function mr(e, n) {
  const t = X([]), l = X([]);
  Le(() => {
    var p, C, u;
    const a = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], r = a.flatMap((g, S) => g.map((k) => ({ column: k, row: S }))), s = a.length, i = { title: "", sortable: !1 }, c = { ...i, width: 48 };
    if ((p = n == null ? void 0 : n.groupBy) != null && p.value.length) {
      const g = r.findIndex((S) => {
        let { column: k } = S;
        return k.key === "data-table-group";
      });
      g < 0 ? r.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : r.splice(g, 1, { column: { ...i, ...r[g].column }, row: r[g].row });
    }
    if ((C = n == null ? void 0 : n.showSelect) != null && C.value) {
      const g = r.findIndex((S) => {
        let { column: k } = S;
        return k.key === "data-table-select";
      });
      g < 0 ? r.unshift({ column: { ...c, key: "data-table-select", rowspan: s }, row: 0 }) : r.splice(g, 1, { column: { ...c, ...r[g].column }, row: r[g].row });
    }
    if ((u = n == null ? void 0 : n.showExpand) != null && u.value) {
      const g = r.findIndex((S) => {
        let { column: k } = S;
        return k.key === "data-table-expand";
      });
      g < 0 ? r.push({ column: { ...c, key: "data-table-expand", rowspan: s }, row: 0 }) : r.splice(g, 1, { column: { ...c, ...r[g].column }, row: r[g].row });
    }
    const m = Gl(s).map(() => []), f = Gl(s).fill(0);
    r.forEach((g) => {
      let { column: S, row: k } = g;
      const $ = S.key ?? (typeof S.value == "string" ? S.value : null), P = S.value ?? S.key ?? null;
      for (let w = k; w <= k + (S.rowspan ?? 1) - 1; w++)
        m[w].push({ ...S, key: $, value: P, fixedOffset: f[w], sortable: S.sortable ?? $ != null }), f[w] += Number(S.width ?? 0);
    }), m.forEach((g) => {
      for (let S = g.length; S--; S >= 0)
        if (g[S].fixed)
          return void (g[S].lastFixed = !0);
    });
    const d = /* @__PURE__ */ new Set();
    t.value = m.map((g) => {
      const S = [];
      for (const k of g)
        d.has(k.key) || (d.add(k.key), S.push(k));
      return S;
    }), l.value = m.at(-1) ?? [];
  });
  const o = { headers: t, columns: l };
  return ye(fr, o), o;
}
function El() {
  const e = ve(fr);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const gr = W({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...wn() }, "VDataTableHeaders"), Sl = J()({ name: "VDataTableHeaders", props: gr(), setup(e, n) {
  let { slots: t, emit: l } = n;
  const { toggleSort: o, sortBy: a, isSorted: r } = function() {
    const P = ve(ka);
    if (!P)
      throw new Error("Missing sort!");
    return P;
  }(), { someSelected: s, allSelected: i, selectAll: c, showSelectAll: m } = Al(), { columns: f, headers: d } = El(), { loaderClasses: p } = xn(e), C = (P, w) => {
    if (e.sticky || P.fixed)
      return { position: "sticky", zIndex: P.fixed ? 4 : e.sticky ? 3 : void 0, left: P.fixed ? Q(P.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${w})` : void 0 };
  };
  function u(P) {
    const w = a.value.find((F) => F.key === P.key);
    return w ? w.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: g, backgroundColorStyles: S } = ot(e, "color"), k = y(() => ({ headers: d.value, columns: f.value, toggleSort: o, isSorted: r, sortBy: a.value, someSelected: s.value, allSelected: i.value, selectAll: c, getSortIcon: u, getFixedStyles: C })), $ = (P) => {
    let { column: w, x: F, y: x } = P;
    const B = w.key === "data-table-select" || w.key === "data-table-expand";
    return v(An, { tag: "th", align: w.align, class: ["v-data-table__th", { "v-data-table__th--sortable": w.sortable, "v-data-table__th--sorted": r(w) }, p.value], style: { width: Q(w.width), minWidth: Q(w.width), ...C(w, x) }, colspan: w.colspan, rowspan: w.rowspan, onClick: w.sortable ? () => o(w) : void 0, lastFixed: w.lastFixed, noPadding: B }, { default: () => {
      var A;
      const b = `column.${w.key}`, E = { column: w, selectAll: c, isSorted: r, toggleSort: o, sortBy: a.value, someSelected: s.value, allSelected: i.value, getSortIcon: u };
      return t[b] ? t[b](E) : w.key === "data-table-select" ? ((A = t["column.data-table-select"]) == null ? void 0 : A.call(t, E)) ?? (m && v(ht, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": c }, null)) : v("div", { class: "v-data-table-header__content" }, [v("span", null, [w.title]), w.sortable && v(be, { key: "icon", class: "v-data-table-header__sort-icon", icon: u(w) }, null), e.multiSort && r(w) && v("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...g.value], style: S.value }, [a.value.findIndex((L) => L.key === w.key) + 1])]);
    } });
  };
  ne(() => v(ae, null, [t.headers ? t.headers(k.value) : d.value.map((P, w) => v("tr", null, [P.map((F, x) => v($, { column: F, x, y: w }, null))])), e.loading && v("tr", { class: "v-data-table-progress" }, [v("th", { colspan: f.value.length }, [v(Ma, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), Ri = W({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), ji = J()({ name: "VDataTableGroupHeaderRow", props: Ri(), setup(e, n) {
  let { slots: t } = n;
  const { isGroupOpen: l, toggleGroup: o, extractRows: a } = da(), { isSelected: r, isSomeSelected: s, select: i } = Al(), { columns: c } = El(), m = y(() => a([e.item]));
  return () => v("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [c.value.map((f) => {
    var d, p;
    if (f.key === "data-table-group") {
      const C = l(e.item) ? "$expand" : "$next", u = () => o(e.item);
      return ((d = t["data-table-group"]) == null ? void 0 : d.call(t, { item: e.item, count: m.value.length, props: { icon: C, onClick: u } })) ?? v(An, { class: "v-data-table-group-header-row__column" }, { default: () => [v(ft, { size: "small", variant: "text", icon: C, onClick: u }, null), v("span", null, [e.item.value]), v("span", null, [rl("("), m.value.length, rl(")")])] });
    }
    if (f.key === "data-table-select") {
      const C = r(m.value), u = s(m.value) && !C, g = (S) => i(m.value, S);
      return ((p = t["data-table-select"]) == null ? void 0 : p.call(t, { props: { modelValue: C, indeterminate: u, "onUpdate:modelValue": g } })) ?? v("td", null, [v(ht, { modelValue: C, indeterminate: u, "onUpdate:modelValue": g }, null)]);
    }
    return v("td", null, null);
  })]);
} }), Wi = W({ index: Number, item: Object, onClick: Function }, "VDataTableRow"), Hi = J()({ name: "VDataTableRow", props: Wi(), setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, toggleSelect: o } = Al(), { isExpanded: a, toggleExpand: r } = sa(), { columns: s } = El();
  ne(() => v("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, c) => v(An, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var p, C;
    const m = e.item, f = `item.${i.key}`, d = { index: e.index, item: m.raw, internalItem: m, value: Vt(m.columns, i.key), column: i, isSelected: l, toggleSelect: o, isExpanded: a, toggleExpand: r };
    return t[f] ? t[f](d) : i.key === "data-table-select" ? ((p = t["item.data-table-select"]) == null ? void 0 : p.call(t, d)) ?? v(ht, { disabled: !m.selectable, modelValue: l([m]), onClick: zl(() => o(m), ["stop"]) }, null) : i.key === "data-table-expand" ? ((C = t["item.data-table-expand"]) == null ? void 0 : C.call(t, d)) ?? v(ft, { icon: a(m) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: zl(() => r(m), ["stop"]) }, null) : To(d.value);
  } }))]));
} }), yr = W({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), Cl = J()({ name: "VDataTableRows", props: yr(), setup(e, n) {
  let { emit: t, slots: l } = n;
  const { columns: o } = El(), { expandOnClick: a, toggleExpand: r, isExpanded: s } = sa(), { isSelected: i, toggleSelect: c } = Al(), { toggleGroup: m, isGroupOpen: f } = da(), { t: d } = kt();
  return ne(() => {
    var p, C;
    return e.loading ? v("tr", { class: "v-data-table-rows-loading", key: "loading" }, [v("td", { colspan: o.value.length }, [((p = l.loading) == null ? void 0 : p.call(l)) ?? d(e.loadingText)])]) : e.loading || e.items.length || e.hideNoData ? v(ae, null, [e.items.map((u, g) => {
      var $;
      if (u.type === "group")
        return l["group-header"] ? l["group-header"]({ index: g, item: u, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: c, toggleGroup: m, isGroupOpen: f }) : v(ji, { key: `group-header_${u.id}`, item: u }, l);
      const S = { index: g, item: u.raw, internalItem: u, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: c }, k = { ...S, props: { key: `item_${u.key ?? u.index}`, onClick: a.value || e["onClick:row"] ? (P) => {
        var w;
        a.value && r(u), (w = e["onClick:row"]) == null || w.call(e, P, { item: u.raw, internalItem: u });
      } : void 0, index: g, item: u } };
      return v(ae, null, [l.item ? l.item(k) : v(Hi, k.props, l), s(u) && (($ = l["expanded-row"]) == null ? void 0 : $.call(l, S))]);
    })]) : v("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [v("td", { colspan: o.value.length }, [((C = l["no-data"]) == null ? void 0 : C.call(l)) ?? d(e.noDataText)])]);
  }), {};
} }), hr = W({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...re(), ...Ge(), ...ke(), ...xe() }, "VTable"), wl = J()({ name: "VTable", props: hr(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = _e(e), { densityClasses: o } = Ke(e);
  return ne(() => v(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, l.value, o.value, e.class], style: e.style }, { default: () => {
    var a, r, s;
    return [(a = t.top) == null ? void 0 : a.call(t), t.default ? v("div", { class: "v-table__wrapper", style: { height: Q(e.height) } }, [v("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), zi = W({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function Gi(e, n, t) {
  return n.map((l, o) => function(a, r, s, i) {
    const c = a.returnObject ? r : Pe(r, a.itemValue), m = Pe(r, a.itemSelectable, !0), f = i.reduce((d, p) => (p.key != null && (d[p.key] = Pe(r, p.value)), d), {});
    return { type: "item", key: a.returnObject ? Pe(r, a.itemValue) : c, index: s, value: c, selectable: m, columns: f, raw: r };
  }(e, l, o, t));
}
function br(e, n) {
  return { items: y(() => Gi(e, e.items, n.value)) };
}
const Sr = W({ ...yr(), width: [String, Number], search: String, ..._s(), ...As(), ...Ni(), ...zi(), ...Fs(), ...Vs(), ...gr(), ...hr() }, "DataTable"), Ki = W({ ...ga(), ...Sr(), ...Bs(), ..._n() }, "VDataTable"), qi = J()({ name: "VDataTable", props: Ki(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const { groupBy: o } = ua(e), { sortBy: a, multiSort: r, mustSort: s } = Ba(e), { page: i, itemsPerPage: c } = ha(e), { columns: m, headers: f } = mr(e, { groupBy: o, showSelect: Y(e, "showSelect"), showExpand: Y(e, "showExpand") }), { items: d } = br(e, m), p = Y(e, "search"), { filteredItems: C } = Ps(e, d, p, { transform: (D) => D.columns }), { toggleSort: u } = Pa({ sortBy: a, multiSort: r, mustSort: s, page: i }), { sortByWithGroups: g, opened: S, extractRows: k, isGroupOpen: $, toggleGroup: P } = ca({ groupBy: o, sortBy: a }), { sortedItems: w } = Es(e, C, g), { flatItems: F } = fa(w, o, S), x = y(() => F.value.length), { startIndex: B, stopIndex: b, pageCount: E, setItemsPerPage: A } = ba({ page: i, itemsPerPage: c, itemsLength: x }), { paginatedItems: L } = function(D) {
    const { items: O, startIndex: R, stopIndex: z, itemsPerPage: U } = D;
    return { paginatedItems: y(() => U.value <= 0 ? O.value : O.value.slice(R.value, z.value)) };
  }({ items: F, startIndex: B, stopIndex: b, itemsPerPage: c }), M = y(() => k(L.value)), { isSelected: H, select: K, selectAll: I, toggleSelect: N, someSelected: j, allSelected: G } = xa(e, { allItems: d, currentPage: M }), { isExpanded: _, toggleExpand: T } = ra(e);
  ma({ page: i, itemsPerPage: c, sortBy: a, groupBy: o, search: p }), ut({ VDataTableRows: { hideNoData: Y(e, "hideNoData"), noDataText: Y(e, "noDataText"), loading: Y(e, "loading"), loadingText: Y(e, "loadingText") } });
  const V = y(() => ({ page: i.value, itemsPerPage: c.value, sortBy: a.value, pageCount: E.value, toggleSort: u, setItemsPerPage: A, someSelected: j.value, allSelected: G.value, isSelected: H, select: K, selectAll: I, toggleSelect: N, isExpanded: _, toggleExpand: T, isGroupOpen: $, toggleGroup: P, items: M.value, groupedItems: L.value, columns: m.value, headers: f.value }));
  return ne(() => {
    const [D] = bl.filterProps(e), [O] = Sl.filterProps(e), [R] = Cl.filterProps(e), [z] = wl.filterProps(e);
    return v(wl, te({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, z), { top: () => {
      var U;
      return (U = l.top) == null ? void 0 : U.call(l, V.value);
    }, default: () => {
      var U, q, oe, me;
      return l.default ? l.default(V.value) : v(ae, null, [(U = l.colgroup) == null ? void 0 : U.call(l, V.value), v("thead", null, [v(Sl, O, l)]), (q = l.thead) == null ? void 0 : q.call(l, V.value), v("tbody", null, [l.body ? l.body(V.value) : v(Cl, te(R, { items: L.value }), l)]), (oe = l.tbody) == null ? void 0 : oe.call(l, V.value), (me = l.tfoot) == null ? void 0 : me.call(l, V.value)]);
    }, bottom: () => l.bottom ? l.bottom(V.value) : v(ae, null, [v(bl, D, { prepend: l["footer.prepend"] })]) });
  }), {};
} }), Ui = W({ itemsLength: { type: [Number, String], required: !0 }, ...ga(), ...Sr(), ..._n() }, "VDataTableServer"), Yi = J()({ name: "VDataTableServer", props: Ui(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const { groupBy: o } = ua(e), { sortBy: a, multiSort: r, mustSort: s } = Ba(e), { page: i, itemsPerPage: c } = ha(e), m = y(() => parseInt(e.itemsLength, 10)), { columns: f, headers: d } = mr(e, { groupBy: o, showSelect: Y(e, "showSelect"), showExpand: Y(e, "showExpand") }), { items: p } = br(e, f), { toggleSort: C } = Pa({ sortBy: a, multiSort: r, mustSort: s, page: i }), { opened: u, isGroupOpen: g, toggleGroup: S, extractRows: k } = ca({ groupBy: o, sortBy: a }), { pageCount: $, setItemsPerPage: P } = ba({ page: i, itemsPerPage: c, itemsLength: m }), { flatItems: w } = fa(p, o, u), { isSelected: F, select: x, selectAll: B, toggleSelect: b, someSelected: E, allSelected: A } = xa(e, { allItems: p, currentPage: p }), { isExpanded: L, toggleExpand: M } = ra(e), H = y(() => k(p.value));
  ma({ page: i, itemsPerPage: c, sortBy: a, groupBy: o, search: Y(e, "search") }), ye("v-data-table", { toggleSort: C, sortBy: a }), ut({ VDataTableRows: { hideNoData: Y(e, "hideNoData"), noDataText: Y(e, "noDataText"), loading: Y(e, "loading"), loadingText: Y(e, "loadingText") } });
  const K = y(() => ({ page: i.value, itemsPerPage: c.value, sortBy: a.value, pageCount: $.value, toggleSort: C, setItemsPerPage: P, someSelected: E.value, allSelected: A.value, isSelected: F, select: x, selectAll: B, toggleSelect: b, isExpanded: L, toggleExpand: M, isGroupOpen: g, toggleGroup: S, items: H.value, groupedItems: w.value, columns: f.value, headers: d.value }));
  ne(() => {
    const [I] = bl.filterProps(e), [N] = Sl.filterProps(e), [j] = Cl.filterProps(e), [G] = wl.filterProps(e);
    return v(wl, te({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, G), { top: () => {
      var _;
      return (_ = l.top) == null ? void 0 : _.call(l, K.value);
    }, default: () => {
      var _, T, V, D;
      return l.default ? l.default(K.value) : v(ae, null, [(_ = l.colgroup) == null ? void 0 : _.call(l, K.value), v("thead", { class: "v-data-table__thead", role: "rowgroup" }, [v(Sl, te(N, { sticky: e.fixedHeader }), l)]), (T = l.thead) == null ? void 0 : T.call(l, K.value), v("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [l.body ? l.body(K.value) : v(Cl, te(j, { items: w.value }), l)]), (V = l.tbody) == null ? void 0 : V.call(l, K.value), (D = l.tfoot) == null ? void 0 : D.call(l, K.value)]);
    }, bottom: () => l.bottom ? l.bottom(K.value) : v(bl, I, { prepend: l["footer.prepend"] }) });
  });
} }), Cr = _l.reduce((e, n) => (e[n] = { type: [Boolean, String, Number], default: !1 }, e), {}), wr = _l.reduce((e, n) => (e["offset" + Mt(n)] = { type: [String, Number], default: null }, e), {}), xr = _l.reduce((e, n) => (e["order" + Mt(n)] = { type: [String, Number], default: null }, e), {}), Bo = { col: Object.keys(Cr), offset: Object.keys(wr), order: Object.keys(xr) };
function Xi(e, n, t) {
  let l = e;
  if (t != null && t !== !1)
    return n && (l += `-${n.replace(e, "")}`), e === "col" && (l = "v-" + l), (e !== "col" || t !== "" && t !== !0) && (l += `-${t}`), l.toLowerCase();
}
const Ji = ["auto", "start", "end", "center", "baseline", "stretch"], Zi = W({ cols: { type: [Boolean, String, Number], default: !1 }, ...Cr, offset: { type: [String, Number], default: null }, ...wr, order: { type: [String, Number], default: null }, ...xr, alignSelf: { type: String, default: null, validator: (e) => Ji.includes(e) }, ...re(), ...ke() }, "VCol"), mt = J()({ name: "VCol", props: Zi(), setup(e, n) {
  let { slots: t } = n;
  const l = y(() => {
    const o = [];
    let a;
    for (a in Bo)
      Bo[a].forEach((s) => {
        const i = e[s], c = Xi(a, s, i);
        c && o.push(c);
      });
    const r = o.some((s) => s.startsWith("v-col-"));
    return o.push({ "v-col": !r || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return bt(e.tag, { class: [l.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), $n = ["start", "end", "center"], kr = ["space-between", "space-around", "space-evenly"];
function Fn(e, n) {
  return _l.reduce((t, l) => (t[e + Mt(l)] = n(), t), {});
}
const Qi = [...$n, "baseline", "stretch"], Br = (e) => Qi.includes(e), Pr = Fn("align", () => ({ type: String, default: null, validator: Br })), eu = [...$n, ...kr], _r = (e) => eu.includes(e), Ar = Fn("justify", () => ({ type: String, default: null, validator: _r })), tu = [...$n, ...kr, "stretch"], $r = (e) => tu.includes(e), Fr = Fn("alignContent", () => ({ type: String, default: null, validator: $r })), Po = { align: Object.keys(Pr), justify: Object.keys(Ar), alignContent: Object.keys(Fr) }, lu = { align: "align", justify: "justify", alignContent: "align-content" };
function nu(e, n, t) {
  let l = lu[e];
  if (t != null)
    return n && (l += `-${n.replace(e, "")}`), l += `-${t}`, l.toLowerCase();
}
const ou = W({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Br }, ...Pr, justify: { type: String, default: null, validator: _r }, ...Ar, alignContent: { type: String, default: null, validator: $r }, ...Fr, ...re(), ...ke() }, "VRow"), Vr = J()({ name: "VRow", props: ou(), setup(e, n) {
  let { slots: t } = n;
  const l = y(() => {
    const o = [];
    let a;
    for (a in Po)
      Po[a].forEach((r) => {
        const s = e[r], i = nu(a, r, s);
        i && o.push(i);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return bt(e.tag, { class: ["v-row", l.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), xl = { background: "--v-theme-surface", border: "transparent", color: "--v-theme-on-surface" }, Er = { colorPercentageChange: 15, colorPercentageDirection: "desc", colors: () => ({ default: xl, footer: { background: void 0, color: void 0 }, header: { background: void 0, color: void 0 }, percentageChange: 15, percentageDirection: "desc" }), columnWidths: () => [], defaultColors: () => xl, density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footerBackgroundColor: void 0, footerColor: void 0, footers: () => [], headerBackgroundColor: void 0, headerColor: void 0, height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 0, searchEvents: () => ({}), searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }, au = Xe({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (n, t) => de(n.$slots, "bottom") }), le = "v-drilldown-table";
function _o(e, n, t = "") {
  let l = e;
  const o = n.length - 1;
  if (o < 0)
    return l === void 0 ? t : l;
  for (let a = 0; a < o; a++) {
    if (l == null)
      return t;
    l = l[n[a]];
  }
  return l == null || l[n[o]] === void 0 ? t : l[n[o]];
}
function ru(e, n, t = "") {
  if (n == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const o = n(e, t);
    return o === void 0 ? t : o;
  }
  if (typeof n == "string")
    return function(o, a, r = "") {
      let s = a;
      return o != null && s && typeof s == "string" ? o[s] !== void 0 ? o[s] : (s = s.replace(/\[(\w+)\]/g, ".$1"), s = s.replace(/^\./, ""), _o(o, s.split("."), r)) : r;
    }(e, n, t);
  if (Array.isArray(n))
    return _o(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
const Ao = (e) => {
  const { id: n, sortBy: t } = e;
  if (t) {
    const l = t.find((o) => o.key === n);
    if (l)
      return l.order;
  }
}, At = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
};
function Ir(e) {
  const n = e.title, t = [n, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : n || "";
}
function Hl(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Ft(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (Hl(e) && Hl(t))
    for (const l in t)
      Hl(t[l]) ? (e[l] || Object.assign(e, { [l]: {} }), Ft(e[l], t[l])) : Object.assign(e, { [l]: t[l] });
  return Ft(e, ...n);
}
const Dr = (e) => {
  const { align: n } = e;
  return { "d-flex align-center": !0, [`justify-${n}`]: n, "justify-start": !n };
}, Tr = (e) => {
  const { level: n } = e;
  return { "d-flex": !0, [`${le}--header-select-all-checkbox`]: !0, [`${le}--header-select-all-checkbox-${n}`]: !0 };
};
function Or(e) {
  return e === "transparent" || e === "none" || e === "inherit" || e === "currentColor" || e === "initial" || e === "unset";
}
function Lr(e) {
  return e.includes("--v-theme");
}
const Mr = (e, n) => {
  if (Or(e))
    return e;
  if (Lr(e))
    return `rgb(var(${e}))`;
  const t = function(l, o) {
    const a = o.global.current.value.colors;
    return Object.entries(a).find(([r]) => r === l);
  }(e, n);
  return t ? `hsl(${kl(t[1])})` : `hsl(${kl(e)})`;
}, su = (e) => {
  const { colors: n, level: t, prop: l = "default", theme: o, type: a } = e, r = { ...n[l] }, s = n == null ? void 0 : n.percentageDirection;
  if (r === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${l}' does not exist`);
  let i = ((c, m, f) => {
    let d = 100, p = (c == null ? void 0 : c.percentageChange) ?? 0;
    return isNaN(p) && (d = 100), p *= m, f !== "desc" && f !== "descending" || (d = 100 - p), f !== "asc" && f !== "ascending" || (d = 0 + p), d < 0 && (d = 0), d > 100 && (d = 100), isNaN(d) && (d = 100), d;
  })(n, t - 1, s);
  return a || Object.entries(r).forEach(([c, m]) => {
    let f = o.global.current.value.colors[m] ?? m;
    if (f || (f = n.default[c] ?? "transparent", f = Mr(f, o)), Or(f))
      return void (r[c] = f);
    if ((c === "color" || t === 0 && s === "asc") && (i = 100), Lr(f))
      return void (r[c] = `rgb(var(${f}))`);
    const d = `/ ${i}%`, p = kl(f);
    if (p.includes("/"))
      return r[c] = `hsl(${p})`;
    r[c] = `hsl(${kl(f)} ${d})`;
  }), r;
};
function kl(e) {
  let n = function(m) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let d = m;
    return Object.entries(f).forEach(([p, C]) => {
      m.toLowerCase() != p.toLowerCase() || (d = C);
    }), d;
  }(e), t = 0, l = 0, o = 0, a = 0, r = 0, s = 0;
  if (n.substring(0, 1) === "#")
    n = function(m) {
      let f = m.replace("#", "");
      f.length === 3 && (f = f.split("").map((u) => u + u).join(""));
      const d = parseInt(f.substring(0, 2), 16), p = parseInt(f.substring(2, 4), 16), C = parseInt(f.substring(4, 6), 16);
      return [d, p, C];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/\d+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/\d+/g)].map(Number), t = n[0], l = n[1], o = n[2], `${t} ${l}% ${o}%`;
  [a, r, s] = n, a /= 255, r /= 255, s /= 255;
  const i = Math.max(a, r, s), c = Math.min(a, r, s);
  if (i === null || !c === null || isNaN(i) || isNaN(c)) {
    const m = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${m})" in it's place.`), m;
  }
  if (t = (i + c) / 2, l = (i + c) / 2, o = (i + c) / 2, i == c)
    t = l = 0;
  else {
    const m = i - c;
    switch (l = o > 0.5 ? m / (2 - i - c) : m / (i + c), i) {
      case a:
        t = (r - s) / m + (r < s ? 6 : 0);
        break;
      case r:
        t = (s - a) / m + 2;
        break;
      case s:
        t = (a - r) / m + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), l = Math.round(100 * l), o = Math.round(100 * o), `${t} ${l}% ${o}%`;
}
const Vn = (e) => {
  const { colors: n, level: t, prop: l = "default", themeColors: o, type: a = null } = e;
  if (typeof n != "object" || n == null)
    return {};
  const r = su({ colors: n, level: t, prop: l, theme: o, type: a });
  return a ? r[a] : r;
}, iu = ["colspan"], uu = Xe({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const n = Pl(), t = e, l = y(() => ((S) => {
    const { isLinearOnly: k, loaderHeight: $ } = S;
    let P = { height: 0, minHeight: 0 };
    return h(k) && (P = { height: h($), minHeight: h($) }), P;
  })({ isLinearOnly: c, loaderHeight: i })), o = y(() => ((S) => {
    const { isLinearOnly: k, loaderHeight: $ } = S;
    return h(k) ? { height: h($), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: c, loaderHeight: i })), a = y(() => ((S) => {
    const { isLinearOnly: k } = S;
    return { [`${le}--loader-tr`]: !0, [`${le}--loader-tr-not-linear`]: !h(k), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: c })), r = y(() => ({ [`${le}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), s = y(() => {
    var S;
    return ((S = t.loaderProps) == null ? void 0 : S.linear) ?? {};
  }), i = y(() => {
    var S, k;
    return function($) {
      return At({ str: $ }) || "2px";
    }(((k = (S = t.loaderProps) == null ? void 0 : S.linear) == null ? void 0 : k.height) || "2px");
  }), c = y(() => {
    let S = !1;
    return t.loaderType !== null && t.loaderType !== !1 && (S = function(k) {
      let $ = !1;
      return k === "linear" && ($ = !0), Array.isArray(k) && ($ = k.length === 1 && k[0] === "linear"), $;
    }(t.loaderType)), S;
  }), m = y(() => {
    var S;
    return ((S = t.loaderProps) == null ? void 0 : S.circular) ?? {};
  }), f = y(() => {
    var S;
    return ((S = t.loaderProps) == null ? void 0 : S.skelton) ?? {};
  }), d = y(() => t.loading), p = y(() => {
    var k, $;
    let S = (($ = (k = t.loaderProps) == null ? void 0 : k.text) == null ? void 0 : $.color) ?? "surface-variant";
    return S = Mr(S, n), { color: S };
  }), C = y(() => t.loadingText || "Loading..."), u = (S) => {
    const k = t.loaderType;
    return Array.isArray(k) ? k.indexOf(S) : 1;
  }, g = (S) => {
    const k = t.loaderType;
    return S === t.loaderType || !!Array.isArray(k) && k.includes(S);
  };
  return (S, k) => {
    const $ = Oo("v-skeleton-loader");
    return Z(), ce("tr", { class: ie(h(a)), style: $e(h(l)) }, [Re("td", { class: "px-0 ma-0", colspan: S.colspan, style: $e(h(o)) }, [S.loading ? (Z(), ge(Vr, { key: 0, class: ie(h(r)), "no-gutters": "" }, { default: se(() => [g("linear") ? (Z(), ge(mt, { key: 0, class: "pa-0 ma-0", order: u("linear") }, { default: se(() => [v(La, Ce(Ie(h(s))), null, 16)]), _: 1 }, 8, ["order"])) : he("", !0), g("circular") ? (Z(), ge(mt, { key: 1, class: "pa-0 my-2", order: u("circular") }, { default: se(() => [v(Da, Ce(Ie(h(m))), null, 16)]), _: 1 }, 8, ["order"])) : he("", !0), g("skelton") ? (Z(), ge(mt, { key: 2, class: "pa-0 ma-0", order: u("skelton") }, { default: se(() => [v($, te(h(f), { loading: h(d) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : he("", !0), g("text") ? (Z(), ge(mt, { key: 3, class: "my-2", order: u("text"), style: $e(h(p)) }, { default: se(() => [rl(To(h(C)), 1)]), _: 1 }, 8, ["order", "style"])) : he("", !0)]), _: 1 }, 8, ["class"])) : he("", !0)], 12, iu)], 6);
  };
} }), En = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of n)
    t[l] = o;
  return t;
}, cu = En(uu, [["__scopeId", "data-v-fbedf16d"]]), du = ["colspan"], pu = ["colspan", "innerHTML"], vu = ["colspan"], fu = ["colspan", "innerHTML"], mu = ["colspan", "onClick"], gu = ["innerHTML"], yu = Xe({ __name: "HeadersSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, headerBackgroundColor: {}, headerColor: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: n }) {
  const t = Nt(), l = n, o = e, a = X(), r = ve(Symbol.for("vuetify:icons")), s = X(!1), i = X(o.items), c = X(o.matchColumnWidths), m = X(o.columnWidths || []), f = X(o.sortAscIcon), d = y(() => o.tableModelValue), p = Pl(), C = y(() => function() {
    const b = o.slotProps.columns;
    if (o.level <= 1 || !c.value)
      return b;
    if (m.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(b).forEach(([E]) => {
      Object.keys(b).length !== parseInt(E) + 1 && b[E].width === void 0 && (b[E].width = m.value[parseInt(E)]);
    }), b;
  }());
  ee(() => o.items, (b) => {
    i.value = b, a.value = (b == null ? void 0 : b.filter((E) => E.selectable)) ?? [], a.value = b == null ? void 0 : b.filter((E) => E.selectable !== !1);
  });
  const u = y(() => ((b) => {
    const { level: E } = b;
    return { [`${le}--header-row`]: !0, [`${le}--header-row-${E}`]: !0 };
  })({ level: o.level })), g = (b, E = "") => ((A) => {
    const { column: L, level: M, slotName: H = "" } = A;
    return { [`${le}--header-row-th`]: !0, [`${le}--header-row-th-${H}`]: H !== "", [`${le}--header-row-th-${H}-${M}`]: H, [`${le}--header-row-th-${M}`]: !0, [`${le}--header-row-th-sortable`]: L.sortable, [`${le}--header-row-th-sortable-default-color`]: L.sortable, [`${L.cellClass}`]: L.cellClass };
  })({ column: b, level: o.level, slotName: E }), S = y(() => {
    const b = o.colors;
    return b && (b.header = { background: o.headerBackgroundColor, color: o.headerColor }, b.percentageChange = o.colorPercentageChange, b.percentageDirection = o.colorPercentageDirection), b;
  }), k = (b, E = !1) => ((A) => {
    const { colors: L, column: M, dataTableExpand: H = !1, level: K, theme: I } = A, N = { minWidth: M.width ? At({ str: M.width }) : "auto", width: M.width ? At({ str: M.width }) : "auto" };
    H && !M.width && (N.width = M.width ? At({ str: M.width }) : "56px", N.minWidth = M.width ? At({ str: M.width }) : "56px");
    const j = Vn({ colors: L, level: K, prop: "header", themeColors: I });
    return N.backgroundColor = j.background, N.color = j.color, N;
  })({ colors: S.value, column: b, dataTableExpand: E, level: o.level, theme: p }), $ = y(() => {
    var b;
    return !o.slotProps.allSelected && ((b = d == null ? void 0 : d.value) == null ? void 0 : b.length) !== 0;
  });
  function P() {
    s.value = !s.value, o.slotProps.selectAll(s.value), l("click:selectAll", s.value);
  }
  ee(() => o.slotProps.allSelected, (b) => {
    s.value = b;
  }), ee(() => o.slotProps.someSelected, () => {
    if (o.slotProps.allSelected)
      return !1;
  });
  const w = y(() => Tr({ level: o.level })), F = (b) => ((E) => {
    const { iconOptions: A, key: L, level: M, sortBy: H } = E;
    return { "fa-fw": (A == null ? void 0 : A.defaultSet) === "fa", "mx-1": !0, [`${le}--header-row-th-sortable-sort-icon`]: !0, [`${le}--header-row-th-sortable-sort-icon-${M}`]: !0, [`${le}--header-row-th-sortable-sort-icon-desc`]: Ao({ id: L, sortBy: H }) === "desc", [`${le}--header-row-th-sortable-sort-icon-asc`]: Ao({ id: L, sortBy: H }) === "asc" };
  })({ iconOptions: r, key: b, level: o.level, sortBy: o.sortBy }), x = y(() => (r == null ? void 0 : r.defaultSet) === "fa" ? "small" : (f.value = (o == null ? void 0 : o.sortAscIcon) ?? "$sortAsc", "default"));
  function B(b) {
    return Ir(b);
  }
  return (b, E) => (Z(), ce(ae, null, [Re("tr", { class: ie(h(u)) }, [(Z(!0), ce(ae, null, Ne(h(C), (A) => {
    return Z(), ce(ae, { key: A }, [h(t)[`column.${A.key}`] ? (Z(), ce("th", { key: 0, class: ie(g(A, A.key)), colspan: A.colspan || 1, style: $e(k(A, !0)) }, [de(b.$slots, `column.${A.key}`, { column: A }, void 0, !0)], 14, du)) : A.key === "data-table-group" || A.key === "data-table-group" ? (Z(), ce("th", { key: 1, class: ie(g(A, "header-data-table-group")), colspan: A.colspan || 1, style: $e(k(A, !0)), innerHTML: B(A) }, null, 14, pu)) : A.key === "data-table-select" || A.key === "data-table-select" && b.showSelect ? (Z(), ce("th", { key: 2, class: ie(g(A, "header-data-table-select")), colspan: A.colspan || 1, style: $e(k(A, !0)) }, [b.selectStrategy !== "single" ? (Z(), ge(Pn, { key: 0, class: ie(h(w)), density: b.density, focused: !1, indeterminate: h($), "model-value": h(s), "onUpdate:modelValue": P }, null, 8, ["class", "density", "indeterminate", "model-value"])) : he("", !0)], 14, vu)) : A.key === "data-table-expand" ? (Z(), ce("th", { key: 3, class: ie(g(A, "data-table-expand")), colspan: A.colspan || 1, style: $e(k(A, !0)), innerHTML: B(A) }, null, 14, fu)) : (Z(), ce("th", { key: 4, class: ie(g(A)), colspan: A.colspan || 1, style: $e(k(A)), onClick: (M) => function(H) {
      H.sortable && o.slotProps.toggleSort(H);
    }(A) }, [Re("div", { class: ie((L = A.align, Dr({ align: L }))) }, [Re("span", { innerHTML: B(A) }, null, 8, gu), A.sortable && h(t)["header.sortIcon"] ? (Z(), ce("span", { key: 0, class: ie(F(A.key)) }, [de(b.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : A.sortable ? (Z(), ge(be, { key: 1, class: ie(F(A.key)), icon: h(f), size: h(x) }, null, 8, ["class", "icon", "size"])) : he("", !0)], 2)], 14, mu))], 64);
    var L;
  }), 128))], 2), b.loaderSettings.loaderType && !h(t).loading ? (Z(), ge(h(cu), { key: 0, colors: b.colors, colspan: b.loaderSettings.colspan, height: b.loaderSettings.height, level: b.level, "loader-props": b.loaderProps, "loader-settings": b.loaderSettings, "loader-type": b.loaderSettings.loaderType, loading: b.loaderSettings.loading || !1, "loading-text": b.loaderSettings.loadingText, size: b.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : he("", !0)], 64));
} }), hu = En(yu, [["__scopeId", "data-v-a77e0096"]]), bu = ["colspan"], Su = ["colspan"], Cu = ["colspan"], wu = ["colspan"], xu = ["innerHTML"], ku = Xe({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: n }) {
  const t = Nt(), l = n, o = e, a = ve(Symbol.for("vuetify:icons")), r = y(() => o.slotProps.columns), s = y(() => o.slotProps.index), i = y(() => o.slotProps.isExpanded), c = y(() => o.slotProps.item), m = y(() => o.slotProps.internalItem), f = y(() => o.slotProps.level), d = y(() => o.slotProps.toggleExpand), p = y(() => o.slotProps.toggleSelect), C = y(() => o.itemSelectable), u = y(() => ((P) => {
    const { expandOnClick: w, level: F, levels: x } = P;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": w && F < x, [`${le}--body-row`]: !0, [`${le}--body-row-${F}`]: !0 };
  })({ expandOnClick: o.expandOnClick, level: o.level, levels: o.levels })), g = (P) => ((w) => {
    const { column: F, elm: x, level: B } = w;
    return { [`${le}--${x}-row-td`]: !0, [`${le}--${x}-row-td-${B}`]: !0, [`${F.cellClass}`]: F.cellClass };
  })({ column: P, elm: "body", level: o.level });
  function S(P) {
    const { isRow: w, internalItem: F, level: x, toggleExpand: B } = P;
    if (!(o.level >= o.levels || o.expandOnClick && !w) && (!o.expandOnClick || w)) {
      if (P.$event) {
        if (!o.expandOnClick)
          return;
        l("click:row", P.$event);
      }
      x === o.level && B(F), l("update:expanded", P);
    }
  }
  const k = y(() => (a == null ? void 0 : a.defaultSet) === "fa" ? "x-small" : "default");
  function $(P, w) {
    return function(F, x) {
      if (!x.key)
        return "";
      const B = ru(F, x.key);
      return x.renderItem ? x.renderItem(B, F, x) : B;
    }(P, w);
  }
  return (P, w) => (Z(), ce("tr", { class: ie(h(u)), onClick: w[2] || (w[2] = (F) => S({ columns: h(r), index: h(s), isExpanded: h(i), isRow: !0, item: h(c), internalItem: h(m), level: h(f), toggleExpand: h(d), $event: F })) }, [(Z(!0), ce(ae, null, Ne(h(r), (F) => (Z(), ce(ae, { key: F }, [P.$slots[`item.${F.key}`] ? (Z(), ce("td", { key: 0, class: ie(g(F)), colspan: F.colspan || 1 }, [de(P.$slots, `item.${F.key}`, { columns: h(r), index: h(s), item: h(c) }, void 0, !0)], 10, bu)) : F.key === "data-table-select" || F.key === "data-table-select" && o.showSelect ? (Z(), ce("td", { key: 1, class: ie(g(F)), colspan: F.colspan || 1 }, [h(t)["item.data-table-select"] ? de(P.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : he("", !0), v(Pn, { class: "d-flex v-simple-checkbox", density: P.density, disabled: h(c).selectable === !1 && h(C) === "selectable", "model-value": P.slotProps.isSelected([h(m)]), onClick: w[0] || (w[0] = zl((x) => function(B) {
    const { internalItem: b, item: E, toggleSelect: A } = B;
    A(b), l("click:row:checkbox", E);
  }({ columns: h(r), index: h(s), internalItem: h(m), item: h(c), level: h(f), toggleSelect: h(p) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, Su)) : F.key === "data-table-expand" || F.key === "data-table-expand" && P.showExpand ? (Z(), ce("td", { key: 2, class: ie(g(F)), colspan: F.colspan || 1 }, [h(f) < P.levels ? (Z(), ce("div", { key: 0, class: ie(["v-drilldown-table--expand-icon", h(i)(h(m)) ? "rotate-180" : ""]), onClick: w[1] || (w[1] = (x) => S({ columns: h(r), index: h(s), isExpanded: h(i), item: h(c), internalItem: h(m), level: h(f), toggleExpand: h(d) })) }, [P.$slots["item.data-table-expand"] ? de(P.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (Z(), ge(be, { key: 1, icon: "$expand", size: h(k) }, null, 8, ["size"]))], 2)) : he("", !0)], 10, Cu)) : (Z(), ce("td", { key: 3, class: ie(g(F)), colspan: F.colspan || 1 }, [Re("span", { innerHTML: $(h(c), F) }, null, 8, xu)], 10, wu))], 64))), 128))], 2));
} }), Bu = En(ku, [["__scopeId", "data-v-1f0d71af"]]), Pu = ["colspan"], _u = ["colspan"], Au = ["colspan", "innerHTML"], $u = ["colspan", "innerHTML"], Fu = ["colspan"], Vu = ["innerHTML"], Eu = Xe({ __name: "TfootSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, footerBackgroundColor: {}, footerColor: {}, footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: n }) {
  const t = Nt(), l = n, o = e, a = X(), r = Pl(), s = X(!1), i = X(o.items), c = y(() => o.tableModelValue), m = y(() => o.footers.length ? o.footers : o.slotProps.columns);
  ee(() => o.items, (P) => {
    i.value = P, a.value = (P == null ? void 0 : P.filter((w) => w.selectable)) ?? [], a.value = P == null ? void 0 : P.filter((w) => w.selectable !== !1);
  });
  const f = y(() => ((P) => {
    const { level: w } = P;
    return { [`${le}--tfoot`]: !0, [`${le}--tfoot-${w}`]: !0 };
  })({ level: o.level })), d = y(() => ((P) => {
    const { level: w } = P;
    return { [`${le}--tfoot-row`]: !0, [`${le}--tfoot-row-${w}`]: !0 };
  })({ level: o.level })), p = (P, w = "") => ((F) => {
    const { column: x, level: B, slotName: b = "" } = F;
    return { [`${le}--tfoot-row-td`]: !0, [`${le}--tfoot-row-td-${b}`]: b !== "", [`${le}--tfoot-row-td-${b}-${B}`]: b, [`${le}--tfoot-row-td-${B}`]: !0, [`${x.cellClass}`]: x.cellClass };
  })({ column: P, level: o.level, slotName: w }), C = y(() => {
    const P = o.colors;
    return P && (P.footer = { background: o.footerBackgroundColor, color: o.footerColor }, P.percentageChange = o.colorPercentageChange, P.percentageDirection = o.colorPercentageDirection), P;
  }), u = y(() => ((P) => {
    const { colors: w, elm: F, level: x, theme: B } = P, b = Vn({ colors: w, level: x, prop: F, themeColors: B });
    return { backgroundColor: b.background, color: b.color };
  })({ colors: C.value, elm: "footer", footerColor: o.footerColor, level: o.level, theme: r })), g = y(() => {
    var P;
    return !o.slotProps.allSelected && ((P = c == null ? void 0 : c.value) == null ? void 0 : P.length) !== 0;
  });
  function S() {
    s.value = !s.value, o.slotProps.selectAll(s.value), l("click:selectAll", s.value);
  }
  ee(() => o.slotProps.allSelected, (P) => {
    s.value = P;
  }), ee(() => o.slotProps.someSelected, () => {
    if (o.slotProps.allSelected)
      return !1;
  });
  const k = y(() => Tr({ level: o.level }));
  function $(P) {
    return Ir(P);
  }
  return (P, w) => {
    var F;
    return (F = h(m)) != null && F.length ? (Z(), ce("tfoot", { key: 0, class: ie(h(f)) }, [Re("tr", { class: ie(h(d)) }, [(Z(!0), ce(ae, null, Ne(h(m), (x) => {
      return Z(), ce(ae, { key: x }, [h(t)[`tfoot.${x.key}`] ? (Z(), ce("th", { key: 0, class: ie(p(x, x.key)), colspan: x.colspan || 1, style: $e(h(u)) }, [de(P.$slots, `tfoot.${x.key}`, { column: x })], 14, Pu)) : x.key === "data-table-select" ? (Z(), ce("th", { key: 1, class: ie(p(x, "tfoot-data-table-select")), colspan: x.colspan || 1, style: $e(h(u)) }, [P.selectStrategy !== "single" ? (Z(), ge(Pn, { key: 0, class: ie(h(k)), density: P.density, focused: !1, indeterminate: h(g), "model-value": h(s), "onUpdate:modelValue": S }, null, 8, ["class", "density", "indeterminate", "model-value"])) : he("", !0)], 14, _u)) : x.key === "data-table-expand" ? (Z(), ce("th", { key: 2, class: ie(p(x, "tfoot-data-table-expand")), colspan: x.colspan || 1, style: $e(h(u)), innerHTML: $(x) }, null, 14, Au)) : x.renderFooterCell ? (Z(), ce("th", { key: 3, class: ie(p(x)), colspan: x.colspan || 1, style: $e(h(u)), innerHTML: $(x) }, null, 14, $u)) : (Z(), ce("th", { key: 4, class: ie(p(x)), colspan: x.colspan || 1, style: $e(h(u)) }, [Re("div", { class: ie((B = x.align, Dr({ align: B }))) }, [Re("span", { innerHTML: $(x) }, null, 8, Vu)], 2)], 14, Fu))], 64);
      var B;
    }), 128))], 2)], 2)) : he("", !0);
  };
} }), Iu = Xe({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchEvents: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: n }) {
  const t = Nt(), l = n, o = e, a = X(""), r = X(!0), s = y(() => o.items), i = y(() => ({ allSelected: o.slotProps.allSelected, columns: o.slotProps.columns, headers: o.slotProps.headers, items: s, itemsPerPage: o.slotProps.itemsPerPage, level: o.level, loading: o.loading, page: o.slotProps.page, pageCount: o.slotProps.pageCount, search: h(a), selectAll: c, setItemsPerPage: o.slotProps.setItemsPerPage, toggleSelectAll: m }));
  function c(p) {
    o.slotProps.selectAll(p), l("click:selectAll", p);
  }
  function m() {
    o.slotProps.selectAll(!o.slotProps.allSelected), l("click:selectAll", !o.slotProps.allSelected);
  }
  at(() => {
    const p = document.querySelector(`[data-id="vdt-top-id-${o.level}"]`);
    (p == null ? void 0 : p.children.length) === 0 && (r.value = !1);
  }), ee(a, () => {
    l("update:search", a.value);
  });
  const f = y(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...o.searchProps })), d = y(() => {
    const p = o.searchContainerCols ?? Er.searchContainerCols();
    return { [`${le}--search-field`]: !0, [`v-col-${p.xs}`]: !0, [`v-col-sm-${p.sm}`]: !0, [`v-col-md-${p.md}`]: !0, [`v-col-lg-${p.lg}`]: !0, [`v-col-xl-${p.xl}`]: !0, [`v-col-xxl-${p.xxl}`]: !0 };
  });
  return (p, C) => h(t).top ? de(p.$slots, "top", Ce(te({ key: 0 }, h(i)))) : (p.showSearch || h(t)["top.left"] || h(t)["top.right"]) && h(r) ? (Z(), ge(mt, { key: 1, lg: "12" }, { default: se(() => [v(Vr, { "data-id": `vdt-top-id-${o.level}` }, { default: se(() => [h(t)["top.left"] ? de(p.$slots, "top.left", Ce(te({ key: 0 }, h(i)))) : p.showSearch ? (Z(), ge(mt, { key: 1, class: ie(["d-flex align-center justify-end", h(d)]) }, { default: se(() => [p.showSearch ? (Z(), ge(an, te({ key: 0 }, h(f), { modelValue: h(a), "onUpdate:modelValue": C[0] || (C[0] = (u) => St(a) ? a.value = u : null), class: "mt-0 pt-0" }, qr(p.searchEvents)), null, 16, ["modelValue"])) : he("", !0)]), _: 1 }, 8, ["class"])) : he("", !0), h(t)["top.right"] ? de(p.$slots, "top.right", Ce(te({ key: 2 }, h(i)))) : he("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : he("", !0);
} });
function $o(e) {
  return typeof e == "function" ? e() : h(e);
}
const Fo = () => {
}, Du = (e) => e();
function Tu(e, n = {}) {
  let t, l, o = Fo;
  const a = (r) => {
    clearTimeout(r), o(), o = Fo;
  };
  return (r) => {
    const s = $o(e), i = $o(n.maxWait);
    return t && a(t), s <= 0 || i !== void 0 && i <= 0 ? (l && (a(l), l = null), Promise.resolve(r())) : new Promise((c, m) => {
      o = n.rejectOnCancel ? m : c, i && !l && (l = setTimeout(() => {
        t && a(t), l = null, c(r());
      }, i)), t = setTimeout(() => {
        l && a(l), l = null, c(r());
      }, s);
    });
  };
}
function Ou(e, n, t = {}) {
  const { eventFilter: l = Du, ...o } = t;
  return ee(e, (a = l, r = n, function(...s) {
    return new Promise((i, c) => {
      Promise.resolve(a(() => r.apply(this, s), { fn: r, thisArg: this, args: s })).then(i).catch(c);
    });
  }), o);
  var a, r;
}
function Vo(e, n, t = {}) {
  const { debounce: l = 0, maxWait: o, ...a } = t;
  return Ou(e, n, { ...a, eventFilter: Tu(l, { maxWait: o }) });
}
const _t = /* @__PURE__ */ new Map(), Lu = Symbol("data"), Mu = ["colspan"], Eo = Xe({ __name: "VDrilldownTable", props: Yr({ colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, defaultColors: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footerBackgroundColor: {}, footerColor: {}, footers: {}, groupBy: {}, headerBackgroundColor: {}, headerColor: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchEvents: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { ...Er }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: n }) {
  const t = n, l = e, { colorPercentageChange: o, colorPercentageDirection: a, defaultColors: r, density: s, footerBackgroundColor: i, footerColor: c, headerBackgroundColor: m, headerColor: f } = rn(l), d = Nt(), p = Xr(), C = ue(null);
  at(() => {
    l.level === 1 && u.level !== 1 || u.server || b();
  }), cn(() => {
    C.value = Object.assign({}, l.server ? Yi : qi);
  });
  let u = Lt(Object.assign({}, l));
  u != null && u.colors && (u.colors.default = { ...xl, ...r.value });
  const g = { ...l, ...u }, S = X(p["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), k = X(""), $ = Pl(), P = y(() => u.sortBy), w = y(() => !!u.loading || u.hideNoData);
  (function(_, T, V) {
    const D = ee(_, (...O) => (Ee(() => D()), T(...O)), V);
  })(l, () => {
    l.level === 1 && u.level !== 1 || b(), u.itemsPerPage = l.itemsPerPage;
  }, { immediate: !1 }), ee(() => l.items, () => {
    l.loading || b();
  }, { deep: !0 }), ee(() => l.loading, () => {
    if (l.loading)
      return u.loading = l.loading, !1;
    b();
  }), Le(() => {
    u.colors && r.value && (u.colors.default = { ...xl, ...r.value });
  });
  const F = (_) => {
    const T = u.loaderType;
    return !(_ && (T === "skelton" || Array.isArray(T) && T.length === 1 && T[0] === "skelton" || !u.showDrilldownWhenLoading));
  }, x = y(() => ((_) => {
    const { elevation: T, fixedHeader: V, isDrilldown: D, isHover: O, isServerSide: R, level: z, separator: U } = _;
    return { [`${le}--child`]: D, [`${le}--fixed-header`]: V, [`${le}--hover`]: O, [`${le}--level-${z}`]: !0, [`${le}--server`]: R, [`${le}--separator-${U}`]: U, [`${le}`]: !0, [`elevation-${T}`]: parseInt(T) > 0 };
  })({ elevation: u.elevation, fixedHeader: u.fixedHeader, isDrilldown: l.isDrilldown, isHover: u.hover, isServerSide: !1, level: u.level, separator: u.separator })), B = y(() => ((_) => {
    const { colors: T, level: V, theme: D } = _;
    let O = {};
    typeof T == "object" && T !== null && (O = Vn({ colors: T, level: V, prop: "default", themeColors: D }));
    const R = { borderBottom: "none" };
    return O.border && (R.borderBottom = `1px solid ${O.border}`), R;
  })({ colors: u.colors, level: u.level, theme: $ }));
  function b() {
    var _;
    l.drilldown ? u = ((T) => {
      const { drilldown: V, item: D, level: O, levels: R, loadedDrilldown: z } = T;
      let U = z;
      const q = D;
      U = Ft(z, V);
      const oe = (z.items || [{}]).find((me) => {
        const Me = me[z.drilldownKey];
        let Se = {};
        return q && (Se = q[z.drilldownKey]), Me === Se;
      });
      return U = Ft(z, oe[z.itemChildrenKey]), R === O && (U.showExpand = !1), U;
    })({ drilldown: l.drilldown, item: l.item, level: l.level, levels: l.levels, loadedDrilldown: u, matchColumnWidths: l.matchColumnWidths }) : (u = Ft(u, l), l.matchColumnWidths && ((_ = u == null ? void 0 : u.columnWidths) == null ? void 0 : _.length) === 0 && (u.columnWidths = ((T) => {
      const { tableId: V } = T, D = [], O = h(V), R = document.querySelectorAll(`[data-vdt-id="${O}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(R).length > 0)
        for (let z = 0; z < R.length; z += 1) {
          const U = R[z];
          D.push(U.offsetWidth);
        }
      return D;
    })({ tableId: S })));
  }
  function E(_) {
    let T = { ...g, ...u, ..._ };
    l.server && (T = { ...u, ...g, ..._ }), ((V) => {
      const { data: D, drilldownData: O, emit: R } = V;
      D.isExpanded(D.internalItem) && R("update:drilldown", O), R("update:expanded", D.item);
    })({ data: _, drilldownData: T, emit: t });
  }
  function A(_) {
    return { items: _.items, itemsPerPage: _.itemsPerPage, page: _.page, search: k.value, server: _.server, sortBy: _.sortBy };
  }
  const L = function(_) {
    const T = Ur();
    function V(R) {
      var z;
      const U = _t.get(_) || /* @__PURE__ */ new Set();
      U.add(R), _t.set(_, U);
      const q = () => D(R);
      return (z = T == null ? void 0 : T.cleanups) == null || z.push(q), q;
    }
    function D(R) {
      const z = _t.get(_);
      z && (z.delete(R), z.size || O());
    }
    function O() {
      _t.delete(_);
    }
    return { on: V, once: function(R) {
      return V(function z(...U) {
        D(z), R(...U);
      });
    }, off: D, emit: function(R, z) {
      var U;
      (U = _t.get(_)) == null || U.forEach((q) => q(R, z));
    }, reset: O };
  }(Lu), M = L.on(function(_) {
    l.level === 1 && _.drilldown.server && t("update:options", { ..._ });
  });
  function H(_) {
    u.itemsPerPage = _;
    const T = A(u), V = { drilldown: { ...l, ...T, itemsPerPage: _ }, itemsPerPage: _, name: "update:itemsPerPage" };
    L.emit(V), t("update:itemsPerPage", _);
  }
  function K(_) {
    u.page = _;
    const T = A(u), V = { drilldown: { ...l, ...T, page: _ }, name: "update:page", page: _ };
    L.emit(V), t("update:page", _);
  }
  Jr(() => {
    M();
  });
  const I = { debounce: u.searchDebounce, maxWait: u.searchMaxWait };
  function N() {
    d.top || d["top.left"] || (u.search = k.value), (d.top || d["top.left"]) && (k.value = l.search || "");
    const _ = A(u), T = { drilldown: { ...l, ..._, search: k.value }, search: k.value };
    L.emit(T), t("update:search", T);
  }
  function j(_) {
    u.sortBy = _;
    const T = A(u), V = { drilldown: { ...l, ...T, sortBy: _ }, name: "update:sortBy", sortBy: _ };
    L.emit(V), t("update:sortBy", _);
  }
  function G() {
  }
  return Vo(() => l.search, () => {
    N();
  }, I), Vo(k, () => {
    d.top || d["top.left"] || N();
  }, I), (_, T) => {
    const V = Oo("VDrilldownTable", !0);
    return h(C) ? (Z(), ge(Do(h(C)), te({ key: 0 }, _.$attrs, { modelValue: h(u).modelValue, "onUpdate:modelValue": [T[5] || (T[5] = (D) => h(u).modelValue = D), G], class: h(x), "data-vdt-id": h(S), density: h(s), "expand-on-click": h(u).expandOnClick, expanded: h(u).expanded, "fixed-header": h(u).fixedHeader, "group-by": h(u).groupBy, headers: h(u).headers, height: h(u).height, "hide-no-data": h(w), hover: h(u).hover, "item-selectable": h(u).itemSelectable, "item-value": h(u).itemValue, items: h(u).items, "items-length": h(u).itemsLength, "items-per-page": h(u).itemsPerPage, "items-per-page-options": h(u).itemsPerPageOptions, loading: (!h(u).loaderType || h(d).loading) && h(u).loading, "multi-sort": h(u).multiSort, "must-sort": h(u).mustSort, "no-data-text": h(u).noDataText, page: h(u).page, "return-object": h(u).returnObject, search: h(k), "select-strategy": h(u).selectStrategy, "show-expand": h(u).showExpand, "sort-by": h(P), style: h(B), "onUpdate:itemsPerPage": H, "onUpdate:page": K, "onUpdate:sortBy": j }), Qe({ top: se((D) => [(Z(), ge(h(Iu), { key: _.level, items: h(u).items, level: h(u).level, loading: h(u).loading, "search-container-cols": h(u).searchContainerCols, "search-events": h(u).searchEvents, "search-props": h(u).searchProps, "show-search": h(u).showSearch ?? !1, "slot-props": D, "onUpdate:search": T[0] || (T[0] = (O) => k.value = O) }, Qe({ _: 2 }, [Ne(h(d), (O, R) => ({ name: R, fn: se((z) => [de(_.$slots, R, Ce(Ie({ ...z })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-events", "search-props", "show-search", "slot-props"]))]), headers: se((D) => [(Z(), ge(h(hu), { key: _.level, colorPercentageChange: h(o), colorPercentageDirection: h(a), colors: h(u).colors, "column-widths": h(u).columnWidths, density: h(s), headerBackgroundColor: h(m), headerColor: h(f), items: h(u).items, level: _.level, "loader-props": h(u).loaderProps, "loader-settings": { colspan: D.columns.length, loaderType: h(u).loaderType, loading: h(u).loading, loadingText: _.loadingText }, "match-column-widths": h(u).matchColumnWidths, "select-strategy": h(u).selectStrategy, "show-select": h(u).showSelect, "slot-props": { ...D }, "sort-asc-icon": h(u).sortAscIcon, "sort-by": h(u).sortBy, "table-model-value": h(u).modelValue }, Qe({ _: 2 }, [Ne(h(d), (O, R) => ({ name: R, fn: se((z) => [de(_.$slots, R, Ce(Ie({ ...z })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "column-widths", "density", "headerBackgroundColor", "headerColor", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: se((D) => [(Z(), ge(h(Bu), { key: _.level, density: h(s), "expand-on-click": h(u).expandOnClick, "group-by": h(u).groupBy, "item-selectable": h(u).itemSelectable, items: h(u).items, level: h(u).level, levels: h(u).levels, "show-expand": h(u).showExpand, "show-select": h(u).showSelect, "slot-props": { level: _.level, ...D }, "onClick:row": T[1] || (T[1] = (O) => {
      t("click:row", O);
    }), "onClick:row:checkbox": T[2] || (T[2] = (O) => {
      t("click:row:checkbox", O);
    }), "onUpdate:expanded": T[3] || (T[3] = (O) => E(O)) }, Qe({ _: 2 }, [Ne(h(d), (O, R) => ({ name: R, fn: se((z) => [de(_.$slots, R, Ce(Ie({ ...z })))]) }))]), 1032, ["density", "expand-on-click", "group-by", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": se(({ columns: D, item: O, internalItem: R }) => {
      var z, U, q, oe, me, Me, Se, qe, Yt, Xt, In;
      return [Re("tr", { class: ie(F((z = O[_.itemChildrenKey]) == null ? void 0 : z.loading) ? "" : "d-none") }, [Re("td", { class: "px-0 ma-0", colspan: D.length, style: { "vertical-align": "top" } }, [(Z(), ge(V, { key: R.key, "column-widths": h(u).columnWidths, defaultColors: h(r), density: h(s), drilldown: h(u), "footer-background-color": h(i), "footer-color": h(c), "header-background-color": h(m), "header-color": h(f), headers: (U = O[_.itemChildrenKey]) == null ? void 0 : U.headers, "is-drilldown": !0, item: O, items: (q = O[_.itemChildrenKey]) == null ? void 0 : q.items, "items-length": (oe = O[_.itemChildrenKey]) == null ? void 0 : oe.itemsLength, "items-per-page": (me = O[_.itemChildrenKey]) == null ? void 0 : me.itemsPerPage, level: _.level + 1, levels: h(u).levels, loaderProps: (Me = O[_.itemChildrenKey]) == null ? void 0 : Me.loaderProps, loaderType: (Se = O[_.itemChildrenKey]) == null ? void 0 : Se.loaderType, loading: (qe = O[_.itemChildrenKey]) == null ? void 0 : qe.loading, loadingText: _.loadingText, "match-column-widths": h(u).matchColumnWidths, "multi-sort": (Yt = O[_.itemChildrenKey]) == null ? void 0 : Yt.multiSort, "no-data-text": h(u).noDataText, server: (Xt = O[_.itemChildrenKey]) == null ? void 0 : Xt.server, "show-footer-row": (In = O[_.itemChildrenKey]) == null ? void 0 : In.showFooterRow, "sort-by": h(u).sortBy, "table-type": h(C), "onUpdate:drilldown": T[4] || (T[4] = (Jt) => E(Jt)), "onUpdate:modelValue": G }, Qe({ default: se(() => [(Z(!0), ce(ae, null, Ne(Object.keys(h(d)), (Jt) => de(_.$slots, Jt)), 256))]), _: 2 }, [Ne(h(d), (Jt, Dn) => ({ name: Dn, fn: se((Nr) => [de(_.$slots, Dn, Ce(Ie({ ...Nr })))]) }))]), 1032, ["column-widths", "defaultColors", "density", "drilldown", "footer-background-color", "footer-color", "header-background-color", "header-color", "headers", "item", "items", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "show-footer-row", "sort-by", "table-type"]))], 8, Mu)], 2)];
    }), "footer.prepend": se(() => [h(d)["footer.prepend"] ? de(_.$slots, "footer.prepend", { key: 0 }) : he("", !0)]), _: 2 }, [h(d).loader ? { name: "loader", fn: se(() => [de(_.$slots, "loader")]), key: "0" } : void 0, h(d).loading ? { name: "loading", fn: se(() => [de(_.$slots, "loading")]), key: "1" } : void 0, h(d).thead ? { name: "thead", fn: se((D) => [de(_.$slots, "thead", Ce(Ie({ ...D, columnWidths: h(u).columnWidths, items: h(u).items, loaderSettings: { colspan: D.columns.length, loaderType: h(u).loaderType, loading: h(u).loading, loadingText: _.loadingText }, matchColumnWidths: h(u).matchColumnWidths, selectStrategy: h(u).selectStrategy, sortBy: h(u).sortBy })))]), key: "2" } : void 0, h(d).body ? { name: "body", fn: se((D) => [de(_.$slots, "body", Ce(Ie({ ...D })))]), key: "3" } : void 0, h(d)["group-header"] ? { name: "group-header", fn: se((D) => [de(_.$slots, "group-header", Ce(Ie({ ...D })))]), key: "4" } : void 0, h(d).tbody ? { name: "tbody", fn: se((D) => [de(_.$slots, "tbody", Ce(Ie({ ...D })))]), key: "5" } : void 0, h(d)["no-data"] ? { name: "no-data", fn: se(() => [de(_.$slots, "no-data")]), key: "6" } : void 0, h(d).tfoot || _.showFooterRow ? { name: "tfoot", fn: se((D) => [h(d).tfoot ? de(_.$slots, "tfoot", Ce(te({ key: 0 }, { ...D }))) : (Z(), ge(h(Eu), { key: _.level, colorPercentageChange: h(o), colorPercentageDirection: h(a), colors: h(u).colors, density: h(s), footerBackgroundColor: h(i), footerColor: h(c), footers: h(u).footers || [], items: h(u).items, level: h(u).level, "select-strategy": h(u).selectStrategy, "show-select": h(u).showSelect, "slot-props": { ...D }, "table-model-value": h(u).modelValue }, Qe({ _: 2 }, [Ne(h(d), (O, R) => ({ name: R, fn: se((z) => [de(_.$slots, R, Ce(Ie({ ...z })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "density", "footerBackgroundColor", "footerColor", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "7" } : void 0, h(d).bottom ? { name: "bottom", fn: se((D) => [(Z(), ge(h(au), { key: _.level, "slot-props": D }, Qe({ _: 2 }, [Ne(h(d), (O, R) => ({ name: R, fn: se((z) => [de(_.$slots, R, Ce(Ie({ ...z })))]) }))]), 1032, ["slot-props"]))]), key: "8" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "fixed-header", "group-by", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : he("", !0);
  };
} });
Eo.install = (e) => {
  e.component("VDrilldownTable", Eo);
};
export {
  Eo as default
};
(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".v-drilldown-table--loader-tr[data-v-fbedf16d]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-fbedf16d]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-fbedf16d]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-fbedf16d]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-a77e0096]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-a77e0096]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-a77e0096]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-a77e0096],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-a77e0096]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-a77e0096]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-a77e0096]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-a77e0096]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-a77e0096],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-a77e0096],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-a77e0096]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-a77e0096]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-1f0d71af]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgba(var(--v-border-color), var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-top:0!important;border-bottom:var(--vdt-border)}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{box-shadow:none}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>th{box-shadow:none!important}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>td{background:unset}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
