import { Fragment as re, reactive as zt, computed as g, watchEffect as Me, toRefs as sn, isVNode as Jr, Comment as Zr, capitalize as Pt, unref as y, warn as Al, ref as Y, provide as be, inject as fe, shallowRef as ae, defineComponent as Qe, camelize as No, h as Bt, getCurrentInstance as Qr, onBeforeUnmount as it, watch as te, readonly as un, onScopeDispose as Pe, effectScope as cn, toRaw as Xe, TransitionGroup as es, Transition as st, createVNode as v, mergeProps as Q, onBeforeMount as dn, nextTick as $e, withDirectives as Ne, resolveDirective as ut, vShow as At, isRef as _t, onMounted as ct, toRef as X, Text as ts, resolveDynamicComponent as jo, Teleport as ls, cloneVNode as ns, createTextVNode as rl, withModifiers as ql, toDisplayString as Ro, renderSlot as de, openBlock as Z, createElementBlock as ce, normalizeClass as ue, normalizeStyle as Ie, createElementVNode as We, createBlock as he, withCtx as ie, normalizeProps as ke, guardReactiveProps as Oe, createCommentVNode as Se, useSlots as Ht, renderList as Re, toHandlers as os, getCurrentScope as as, mergeDefaults as rs, useAttrs as ss, onUnmounted as is, resolveComponent as us, createSlots as nt } from "vue";
import { useTheme as _l } from "vuetify";
/**
 * @name @wdns/vuetify-drilldown-table
 * @version 1.0.0
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
function R(e, n) {
  return (t) => Object.keys(e).reduce((l, o) => {
    const a = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = t && o in t ? { ...a, default: t[o] } : a, n && !l[o].source && (l[o].source = n), l;
  }, {});
}
const se = R({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Ee = typeof window < "u", pn = Ee && "IntersectionObserver" in window;
function Wo(e, n, t) {
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
function dt(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(n).length && t.every((l) => dt(e[l], n[l]));
}
function Lt(e, n, t) {
  return e != null && n && typeof n == "string" ? e[n] !== void 0 ? e[n] : Wo(e, (n = (n = n.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function _e(e, n, t) {
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
    return Lt(e, n, t);
  if (Array.isArray(n))
    return Wo(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
function ee(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Ul(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function sl(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const On = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Ol(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function zo(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const o of n)
    l.has(o) && (t[o] = e[o]);
  return t;
}
function Ln(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    n.some((r) => r instanceof RegExp ? r.test(a) : r === a) && !(t != null && t.some((r) => r === a)) ? l[a] = e[a] : o[a] = e[a];
  return [l, o];
}
function pt(e, n) {
  const t = { ...e };
  return n.forEach((l) => delete t[l]), t;
}
const Ho = /^on[^a-z]/, il = (e) => Ho.test(e), cs = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function vn(e) {
  const [n, t] = Ln(e, [Ho]), l = pt(n, cs), [o, a] = Ln(t, ["class", "style", "id", /^data-/]);
  return Object.assign(o, n), Object.assign(a, l), [o, a];
}
function Fe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Je(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function Mn(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function St() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const o in e)
    l[o] = e[o];
  for (const o in n) {
    const a = e[o], r = n[o];
    Ul(a) && Ul(r) ? l[o] = St(a, r, t) : Array.isArray(a) && Array.isArray(r) && t ? l[o] = t(a, r) : l[o] = r;
  }
  return l;
}
function Go(e) {
  return e.map((n) => n.type === re ? Go(n.children) : n).flat();
}
function ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ot.cache.has(e))
    return ot.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ot.cache.set(e, n), n;
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
function fn(e) {
  const n = zt({}), t = g(e);
  return Me(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, { flush: "sync" }), sn(n);
}
function ul(e, n) {
  return e.includes(n);
}
function Nn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
ot.cache = /* @__PURE__ */ new Map();
const De = () => [Function, Array];
function jn(e, n) {
  return !!(e[n = "on" + Pt(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function Yl(e) {
  let n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Ko(e, n, t) {
  let l, o = e.indexOf(document.activeElement);
  const a = n === "next" ? 1 : -1;
  do
    o += a, l = e[o];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? 1)) && o < e.length && o >= 0);
  return l;
}
function cl(e, n) {
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
      const s = Ko(t, n);
      s ? s.focus() : cl(e, n === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((r = t[0]) == null || r.focus());
}
function Zt(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function dl(e, n) {
  if (!(Ee && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function qo(e) {
  return e.some((n) => !Jr(n) || n.type !== Zr && (n.type !== re || qo(n.children))) ? e : null;
}
const Uo = ["top", "bottom"], ds = ["start", "end", "left", "right"];
function Xl(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = ul(Uo, t) ? "start" : ul(ds, t) ? "top" : "center"), { side: Rn(t, n), align: Rn(l, n) };
}
function Rn(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function Ll(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Ml(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Wn(e) {
  return { side: e.align, align: e.side };
}
function zn(e) {
  return ul(Uo, e.side) ? "y" : "x";
}
class at {
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
function Hn(e, n) {
  return { x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) }, y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) } };
}
function Yo(e) {
  return Array.isArray(e) ? new at({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function mn(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let o, a, r, s, i;
    if (l.startsWith("matrix3d("))
      o = l.slice(9, -1).split(/, /), a = +o[0], r = +o[5], s = +o[12], i = +o[13];
    else {
      if (!l.startsWith("matrix("))
        return new at(n);
      o = l.slice(7, -1).split(/, /), a = +o[0], r = +o[3], s = +o[4], i = +o[5];
    }
    const c = t.transformOrigin, m = n.x - s - (1 - a) * parseFloat(c), f = n.y - i - (1 - r) * parseFloat(c.slice(c.indexOf(" ") + 1)), d = a ? n.width / a : e.offsetWidth + 1, p = r ? n.height / r : e.offsetHeight + 1;
    return new at({ x: m, y: f, width: d, height: p });
  }
  return new at(n);
}
function xt(e, n, t) {
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
const Qt = /* @__PURE__ */ new WeakMap(), bt = 2.4, Gn = 0.2126729, Kn = 0.7151522, qn = 0.072175, ps = 0.55, vs = 0.58, fs = 0.57, ms = 0.62, el = 0.03, Un = 1.45, gs = 5e-4, ys = 1.25, hs = 1.25, Yn = 0.078, Xn = 12.82051282051282, tl = 0.06, Jn = 1e-3;
function Zn(e, n) {
  const t = (e.r / 255) ** bt, l = (e.g / 255) ** bt, o = (e.b / 255) ** bt, a = (n.r / 255) ** bt, r = (n.g / 255) ** bt, s = (n.b / 255) ** bt;
  let i, c = t * Gn + l * Kn + o * qn, m = a * Gn + r * Kn + s * qn;
  if (c <= el && (c += (el - c) ** Un), m <= el && (m += (el - m) ** Un), Math.abs(m - c) < gs)
    return 0;
  if (m > c) {
    const f = (m ** ps - c ** vs) * ys;
    i = f < Jn ? 0 : f < Yn ? f - f * Xn * tl : f - tl;
  } else {
    const f = (m ** ms - c ** fs) * hs;
    i = f > -Jn ? 0 : f > -Yn ? f - f * Xn * tl : f + tl;
  }
  return 100 * i;
}
function Dt(e) {
  Al(`Vuetify: ${e}`);
}
function Xo(e) {
  Al(`Vuetify error: ${e}`);
}
function Nl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Qn = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, bs = { rgb: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), rgba: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), hsl: (e, n, t, l) => eo({ h: e, s: n, l: t, a: l }), hsla: (e, n, t, l) => eo({ h: e, s: n, l: t, a: l }), hsv: (e, n, t, l) => Mt({ h: e, s: n, v: t, a: l }), hsva: (e, n, t, l) => Mt({ h: e, s: n, v: t, a: l }) };
function Vt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Dt(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Qn.test(e)) {
    const { groups: n } = e.match(Qn), { fn: t, values: l } = n, o = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(a) / 100 : parseFloat(a));
    return bs[t](...o);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || Dt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Dt(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(i) {
        return i.startsWith("#") && (i = i.slice(1)), i = i.replace(/([^0-9a-f])/gi, "F"), (i.length === 3 || i.length === 4) && (i = i.split("").map((c) => c + c).join("")), i.length !== 6 && (i = Mn(Mn(i, 6), 8, "F")), i;
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
    if (Ol(e, ["r", "g", "b"]))
      return e;
    if (Ol(e, ["h", "s", "l"]))
      return Mt(Jo(e));
    if (Ol(e, ["h", "s", "v"]))
      return Mt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Mt(e) {
  const { h: n, s: t, v: l, a: o } = e, a = (s) => {
    const i = (s + n / 60) % 6;
    return l - l * t * Math.max(Math.min(i, 4 - i, 1), 0);
  }, r = [a(5), a(3), a(1)].map((s) => Math.round(255 * s));
  return { r: r[0], g: r[1], b: r[2], a: o };
}
function eo(e) {
  return Mt(Jo(e));
}
function Jo(e) {
  const { h: n, s: t, l, a: o } = e, a = l + t * Math.min(l, 1 - l);
  return { h: n, s: a === 0 ? 0 : 2 - 2 * l / a, v: a, a: o };
}
const pl = Symbol.for("vuetify:defaults");
function gn() {
  const e = fe(pl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function vt(e, n) {
  const t = gn(), l = Y(e), o = g(() => {
    if (y(n == null ? void 0 : n.disabled))
      return t.value;
    const a = y(n == null ? void 0 : n.scoped), r = y(n == null ? void 0 : n.reset), s = y(n == null ? void 0 : n.root);
    if (l.value == null && !(a || r || s))
      return t.value;
    let i = St(l.value, { prev: t.value });
    if (a)
      return i;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let m = 0; m <= c && i && "prev" in i; m++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = St(St(i, { prev: i }), i[s])), i;
    }
    return i.prev ? St(i.prev, i) : i;
  });
  return be(pl, o), o;
}
function Ss() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gn();
  const l = Ce("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const o = g(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), a = new Proxy(e, { get(s, i) {
    var m, f, d, p;
    const c = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(m = o.value) == null ? void 0 : m[i], c].filter((b) => b != null) : typeof i != "string" || function(b, u) {
      var h, S;
      return ((h = b.props) == null ? void 0 : h[u]) !== void 0 || ((S = b.props) == null ? void 0 : S[ot(u)]) !== void 0;
    }(l.vnode, i) ? c : ((f = o.value) == null ? void 0 : f[i]) ?? ((p = (d = t.value) == null ? void 0 : d.global) == null ? void 0 : p[i]) ?? c;
  } }), r = ae();
  return Me(() => {
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
      let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ce("injectSelf");
      const { provides: m } = c;
      if (m && i in m)
        return m[i];
    }(pl, l);
    be(pl, g(() => r.value ? St((s == null ? void 0 : s.value) ?? {}, r.value) : s == null ? void 0 : s.value));
  } };
}
function Nt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Dt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = R(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(t) {
      return zo(t, n);
    }, e.props._as = String, e.setup = function(t, l) {
      const o = gn();
      if (!o.value)
        return e._setup(t, l);
      const { props: a, provideSubDefaults: r } = Ss(t, t._as ?? e.name, o), s = e._setup(a, l);
      return r(), s;
    };
  }
  return e;
}
function J() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? Nt : Qe)(n);
}
function Zo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return J()({ name: t ?? Pt(No(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...se() }, setup(l, o) {
    let { slots: a } = o;
    return () => {
      var r;
      return Bt(l.tag, { class: [e, l.class], style: l.style }, (r = a.default) == null ? void 0 : r.call(a));
    };
  } });
}
function Qo(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const vl = "cubic-bezier(0.4, 0, 0.2, 1)";
function to(e, n, t) {
  return Object.keys(e).filter((l) => il(l) && l.endsWith(n)).reduce((l, o) => (l[o.slice(0, -n.length)] = (a) => e[o](a, t(a)), l), {});
}
function Ce(e, n) {
  const t = Qr();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function He() {
  const e = Ce(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return ot((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ea = 0, ol = /* @__PURE__ */ new WeakMap();
function ze() {
  const e = Ce("getUid");
  if (ol.has(e))
    return ol.get(e);
  {
    const n = ea++;
    return ol.set(e, n), n;
  }
}
function ta(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (n ? xs(e) : yn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function fl(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (yn(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function yn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function xs(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function ne(e) {
  Ce("useRender").render = e;
}
function hn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = Y(), l = Y();
  if (Ee) {
    const o = new ResizeObserver((a) => {
      e == null || e(a, o), a.length && (l.value = n === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    it(() => {
      o.disconnect();
    }), te(t, (a, r) => {
      r && (o.unobserve(sl(r)), l.value = void 0), a && o.observe(sl(a));
    }, { flush: "post" });
  }
  return { resizeRef: t, contentRect: un(l) };
}
function rt(e, n) {
  let t;
  function l() {
    t = cn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  te(e, (o) => {
    o && !t ? l() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Pe(() => {
    t == null || t.stop();
  });
}
function me(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (m) => m, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (m) => m;
  const a = Ce("useProxiedModel"), r = Y(e[n] !== void 0 ? e[n] : t), s = ot(n), i = g(s !== n ? () => {
    var m, f, d, p;
    return e[n], !(!((m = a.vnode.props) != null && m.hasOwnProperty(n)) && !((f = a.vnode.props) != null && f.hasOwnProperty(s)) || !((d = a.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`)) && !((p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var m, f;
    return e[n], !(!((m = a.vnode.props) != null && m.hasOwnProperty(n)) || !((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)));
  });
  rt(() => !i.value, () => {
    te(() => e[n], (m) => {
      r.value = m;
    });
  });
  const c = g({ get() {
    const m = e[n];
    return l(i.value ? m : r.value);
  }, set(m) {
    const f = o(m), d = Xe(i.value ? e[n] : r.value);
    d !== f && l(d) !== m && (r.value = f, a == null || a.emit(`update:${n}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => i.value ? e[n] : r.value }), c;
}
ze.reset = () => {
  ea = 0, ol = /* @__PURE__ */ new WeakMap();
};
const la = Symbol.for("vuetify:locale");
function ft() {
  const e = fe(la);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Gt() {
  const e = fe(la);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const lo = Symbol.for("vuetify:theme"), we = R({ theme: String }, "theme");
function Be(e) {
  Ce("provideTheme");
  const n = fe(lo, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = g(() => e.theme ?? n.name.value), l = g(() => n.themes.value[t.value]), o = g(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), a = { ...n, name: t, current: l, themeClasses: o };
  return be(lo, a), a;
}
const Ae = R({ tag: { type: String, default: "div" } }, "tag"), ws = R({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Ve(e, n, t) {
  return J()({ name: e, props: ws({ mode: t, origin: n }), setup(l, o) {
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
      const s = l.group ? es : st;
      return Bt(s, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : r }, a.default);
    };
  } });
}
function na(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return J()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(l, o) {
    let { slots: a } = o;
    return () => Bt(st, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : n }, a.default);
  } });
}
function oa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = No(`offset-${n}`);
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
const ks = R({ target: [Object, Array] }, "v-dialog-transition"), aa = J()({ name: "VDialogTransition", props: ks(), setup(e, n) {
  let { slots: t } = n;
  const l = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, a) {
    var d;
    await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => requestAnimationFrame(p)), o.style.visibility = "";
    const { x: r, y: s, sx: i, sy: c, speed: m } = oo(e.target, o), f = xt(o, [{ transform: `translate(${r}px, ${s}px) scale(${i}, ${c})`, opacity: 0 }, {}], { duration: 225 * m, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (d = no(o)) == null || d.forEach((p) => {
      xt(p, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * m, easing: vl });
    }), f.finished.then(() => a());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, a) {
    var f;
    await new Promise((d) => requestAnimationFrame(d));
    const { x: r, y: s, sx: i, sy: c, speed: m } = oo(e.target, o);
    xt(o, [{}, { transform: `translate(${r}px, ${s}px) scale(${i}, ${c})`, opacity: 0 }], { duration: 125 * m, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => a()), (f = no(o)) == null || f.forEach((d) => {
      xt(d, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * m, easing: vl });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? v(st, Q({ name: "dialog-transition" }, l, { css: !1 }), t) : v(st, { name: "dialog-transition" }, t);
} });
function no(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function oo(e, n) {
  const t = Yo(e), l = mn(n), [o, a] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [r, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  r === "left" || s === "left" ? i -= t.width / 2 : r !== "right" && s !== "right" || (i += t.width / 2);
  let c = t.top + t.height / 2;
  r === "top" || s === "top" ? c -= t.height / 2 : r !== "bottom" && s !== "bottom" || (c += t.height / 2);
  const m = t.width / l.width, f = t.height / l.height, d = Math.max(1, m, f), p = m / d || 0, b = f / d || 0, u = l.width * l.height / (window.innerWidth * window.innerHeight), h = u > 0.12 ? Math.min(1.5, 10 * (u - 0.12) + 1) : 1;
  return { x: i - (o + l.left), y: c - (a + l.top), sx: p, sy: b, speed: h };
}
Ve("fab-transition", "center center", "out-in"), Ve("dialog-bottom-transition"), Ve("dialog-top-transition"), Ve("fade-transition"), Ve("scale-transition"), Ve("scroll-x-transition"), Ve("scroll-x-reverse-transition"), Ve("scroll-y-transition"), Ve("scroll-y-reverse-transition"), Ve("slide-x-transition"), Ve("slide-x-reverse-transition");
const ra = Ve("slide-y-transition");
Ve("slide-y-reverse-transition");
const Cs = na("expand-transition", oa()), sa = na("expand-x-transition", oa("", !0)), Ps = R({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Le = J(!1)({ name: "VDefaultsProvider", props: Ps(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: l, disabled: o, reset: a, root: r, scoped: s } = sn(e);
  return vt(l, { reset: a, root: r, scoped: s, disabled: o }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} }), mt = R({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function gt(e) {
  return { dimensionStyles: g(() => ({ height: ee(e.height), maxHeight: ee(e.maxHeight), maxWidth: ee(e.maxWidth), minHeight: ee(e.minHeight), minWidth: ee(e.minWidth), width: ee(e.width) })) };
}
const ia = R({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...mt() }, "VResponsive"), ao = J()({ name: "VResponsive", props: ia(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: g(() => {
      const r = Number(a.aspectRatio);
      return r ? { paddingBottom: String(1 / r * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = gt(e);
  return ne(() => {
    var a;
    return v("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [v("div", { class: "v-responsive__sizer", style: l.value }, null), (a = t.additional) == null ? void 0 : a.call(t), t.default && v("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} }), Kt = R({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ye = (e, n) => {
  let { slots: t } = n;
  const { transition: l, disabled: o, ...a } = e, { component: r = st, ...s } = typeof l == "object" ? l : {};
  return Bt(r, Q(typeof l == "string" ? { name: o ? "" : l } : s, a, { disabled: o }), t);
};
function ro(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const ua = { mounted: function(e, n) {
  if (!pn)
    return;
  const t = n.modifiers || {}, l = n.value, { handler: o, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, r = new IntersectionObserver(function() {
    var f;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
    if (!c)
      return;
    const m = s.some((d) => d.isIntersecting);
    !o || t.quiet && !c.init || t.once && !m && !c.init || o(m, s, i), m && t.once ? ro(e, n) : c.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: r }, r.observe(e);
}, unmounted: ro }, Bs = R({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...ia(), ...se(), ...Kt() }, "VImg"), As = J()({ name: "VImg", directives: { intersect: ua }, props: Bs(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const o = ae(""), a = Y(), r = ae(e.eager ? "loading" : "idle"), s = ae(), i = ae(), c = g(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), m = g(() => c.value.aspect || s.value / i.value || 0);
  function f(_) {
    if ((!e.eager || !_) && (!pn || _ || e.eager)) {
      if (r.value = "loading", c.value.lazySrc) {
        const x = new Image();
        x.src = c.value.lazySrc, h(x, null);
      }
      c.value.src && $e(() => {
        var x;
        t("loadstart", ((x = a.value) == null ? void 0 : x.currentSrc) || c.value.src), setTimeout(() => {
          var T;
          if ((T = a.value) != null && T.complete) {
            if (a.value.naturalWidth || p(), r.value === "error")
              return;
            m.value || h(a.value, null), r.value === "loading" && d();
          } else
            m.value || h(a.value), b();
        });
      });
    }
  }
  function d() {
    var _;
    b(), h(a.value), r.value = "loaded", t("load", ((_ = a.value) == null ? void 0 : _.currentSrc) || c.value.src);
  }
  function p() {
    var _;
    r.value = "error", t("error", ((_ = a.value) == null ? void 0 : _.currentSrc) || c.value.src);
  }
  function b() {
    const _ = a.value;
    _ && (o.value = _.currentSrc || _.src);
  }
  te(() => e.src, () => {
    f(r.value !== "idle");
  }), te(m, (_, x) => {
    !_ && x && a.value && h(a.value);
  }), dn(() => f());
  let u = -1;
  function h(_) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const T = () => {
      clearTimeout(u);
      const { naturalHeight: w, naturalWidth: M } = _;
      w || M ? (s.value = M, i.value = w) : _.complete || r.value !== "loading" || x == null ? (_.currentSrc.endsWith(".svg") || _.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : u = window.setTimeout(T, x);
    };
    T();
  }
  const S = g(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), B = () => {
    var T;
    if (!c.value.src || r.value === "idle")
      return null;
    const _ = v("img", { class: ["v-img__img", S.value], style: { objectPosition: e.position }, src: c.value.src, srcset: c.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: a, onLoad: d, onError: p }, null), x = (T = l.sources) == null ? void 0 : T.call(l);
    return v(Ye, { transition: e.transition, appear: !0 }, { default: () => [Ne(x ? v("picture", { class: "v-img__picture" }, [x, _]) : _, [[At, r.value === "loaded"]])] });
  }, $ = () => v(Ye, { transition: e.transition }, { default: () => [c.value.lazySrc && r.value !== "loaded" && v("img", { class: ["v-img__img", "v-img__img--preload", S.value], style: { objectPosition: e.position }, src: c.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), k = () => l.placeholder ? v(Ye, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !l.error) && v("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, C = () => l.error ? v(Ye, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && v("div", { class: "v-img__error" }, [l.error()])] }) : null, A = () => e.gradient ? v("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, I = ae(!1);
  {
    const _ = te(m, (x) => {
      x && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          I.value = !0;
        });
      }), _());
    });
  }
  return ne(() => {
    const _ = ao.filterProps(e);
    return Ne(v(ao, Q({ class: ["v-img", { "v-img--booting": !I.value }, e.class], style: [{ width: ee(e.width === "auto" ? s.value : e.width) }, e.style] }, _, { aspectRatio: m.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => v(re, null, [v(B, null, null), v($, null, null), v(A, null, null), v(k, null, null), v(C, null, null)]), default: l.default }), [[ut("intersect"), { handler: f, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: a, state: r, naturalWidth: s, naturalHeight: i };
} }), qt = R({ border: [Boolean, Number, String] }, "border");
function Ut(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  return { borderClasses: g(() => {
    const t = _t(e) ? e.value : e.border, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`border-${o}`);
    return l;
  }) };
}
function bn(e) {
  return fn(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Nl(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Nl(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const o = Vt(e.value.background);
          if (o.a == null || o.a === 1) {
            const a = function(r) {
              const s = Math.abs(Zn(Vt(0), Vt(r)));
              return Math.abs(Zn(Vt(16777215), Vt(r))) > Math.min(s, 50) ? "#fff" : "#000";
            }(o);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (Nl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function Ge(e, n) {
  const t = g(() => ({ text: _t(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = bn(t);
  return { textColorClasses: l, textColorStyles: o };
}
function Ze(e, n) {
  const t = g(() => ({ background: _t(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = bn(t);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
const Ft = R({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function $t(e) {
  return { elevationClasses: g(() => {
    const n = _t(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const et = R({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function tt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  return { roundedClasses: g(() => {
    const t = _t(e) ? e.value : e.rounded, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const _s = [null, "default", "comfortable", "compact"], Ke = R({ density: { type: String, default: "default", validator: (e) => _s.includes(e) } }, "density");
function qe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  return { densityClasses: g(() => `${n}--density-${e.density}`) };
}
const Fs = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Fl(e, n) {
  return v(re, null, [e && v("span", { key: "overlay", class: `${n}__overlay` }, null), v("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const yt = R({ color: String, variant: { type: String, default: "elevated", validator: (e) => Fs.includes(e) } }, "variant");
function $l(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  const t = g(() => {
    const { variant: a } = y(e);
    return `${n}--variant-${a}`;
  }), { colorClasses: l, colorStyles: o } = bn(g(() => {
    const { variant: a, color: r } = y(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: r };
  }));
  return { colorClasses: l, colorStyles: o, variantClasses: t };
}
const ca = R({ divided: Boolean, ...qt(), ...se(), ...Ke(), ...Ft(), ...et(), ...Ae(), ...we(), ...yt() }, "VBtnGroup"), so = J()({ name: "VBtnGroup", props: ca(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Be(e), { densityClasses: o } = qe(e), { borderClasses: a } = Ut(e), { elevationClasses: r } = $t(e), { roundedClasses: s } = tt(e);
  vt({ VBtn: { height: "auto", color: X(e, "color"), density: X(e, "density"), flat: !0, variant: X(e, "variant") } }), ne(() => v(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, o.value, r.value, s.value, e.class], style: e.style }, t));
} }), da = R({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), pa = R({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function va(e, n) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = Ce("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = ze();
  be(Symbol.for(`${n.description}:id`), o);
  const a = fe(n, null);
  if (!a) {
    if (!t)
      return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const r = X(e, "value"), s = g(() => !(!a.disabled.value && !e.disabled));
  a.register({ id: o, value: r, disabled: s }, l), it(() => {
    a.unregister(o);
  });
  const i = g(() => a.isSelected(o)), c = g(() => i.value && [a.selectedClass.value, e.selectedClass]);
  return te(i, (m) => {
    l.emit("group:selected", { value: m });
  }), { id: o, isSelected: i, toggle: () => a.select(o, !i.value), select: (m) => a.select(o, m), selectedClass: c, value: r, disabled: s, group: a };
}
function fa(e, n) {
  let t = !1;
  const l = zt([]), o = me(e, "modelValue", [], (c) => c == null ? [] : io(l, Fe(c)), (c) => {
    const m = function(f, d) {
      const p = [];
      return d.forEach((b) => {
        const u = f.findIndex((h) => h.id === b);
        if (~u) {
          const h = f[u];
          p.push(h.value != null ? h.value : u);
        }
      }), p;
    }(l, c);
    return e.multiple ? m : m[0];
  }), a = Ce("useGroup");
  function r() {
    const c = l.find((m) => !m.disabled);
    c && e.mandatory === "force" && !o.value.length && (o.value = [c.id]);
  }
  function s(c) {
    if (e.multiple && Dt('This method is not supported when using "multiple" prop'), o.value.length) {
      const m = o.value[0], f = l.findIndex((b) => b.id === m);
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
  ct(() => {
    r();
  }), it(() => {
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
        const d = o.value.slice(), p = d.findIndex((u) => u === c), b = ~p;
        if (m = m ?? !b, b && e.mandatory && d.length <= 1 || !b && e.max != null && d.length + 1 > e.max)
          return;
        p < 0 && m ? d.push(c) : p >= 0 && !m && d.splice(p, 1), o.value = d;
      } else {
        const d = o.value.includes(c);
        if (e.mandatory && d)
          return;
        o.value = m ?? !d ? [c] : [];
      }
  }, disabled: X(e, "disabled"), prev: () => s(l.length - 1), next: () => s(1), isSelected: (c) => o.value.includes(c), selectedClass: g(() => e.selectedClass), items: g(() => l), getItemIndex: (c) => function(m, f) {
    const d = io(m, [f]);
    return d.length ? m.findIndex((p) => p.id === d[0]) : -1;
  }(l, c) };
  return be(n, i), i;
}
function io(e, n) {
  const t = [];
  return n.forEach((l) => {
    const o = e.find((r) => dt(l, r.value)), a = e[l];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : a != null && t.push(a.id);
  }), t;
}
const ma = Symbol.for("vuetify:v-btn-toggle"), $s = R({ ...ca(), ...da() }, "VBtnToggle");
J()({ name: "VBtnToggle", props: $s(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, next: o, prev: a, select: r, selected: s } = fa(e, ma);
  return ne(() => {
    const i = so.filterProps(e);
    return v(so, Q({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var c;
      return [(c = t.default) == null ? void 0 : c.call(t, { isSelected: l, next: o, prev: a, select: r, selected: s })];
    } });
  }), { next: o, prev: a, select: r };
} });
const ve = [String, Function, Object, Array], Vs = Symbol.for("vuetify:icons"), ml = R({ icon: { type: ve }, tag: { type: String, required: !0 } }, "icon"), uo = J()({ name: "VComponentIcon", props: ml(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const l = e.icon;
    return v(e.tag, null, { default: () => {
      var o;
      return [e.icon ? v(l, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), Es = Nt({ name: "VSvgIcon", inheritAttrs: !1, props: ml(), setup(e, n) {
  let { attrs: t } = n;
  return () => v(e.tag, Q(t, { style: null }), { default: () => [v("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? v("path", { d: l[0], "fill-opacity": l[1] }, null) : v("path", { d: l }, null)) : v("path", { d: e.icon }, null)])] });
} });
Nt({ name: "VLigatureIcon", props: ml(), setup: (e) => () => v(e.tag, null, { default: () => [e.icon] }) }), Nt({ name: "VClassIcon", props: ml(), setup: (e) => () => v(e.tag, { class: e.icon }, null) });
const Is = ["x-small", "small", "default", "large", "x-large"], Yt = R({ size: { type: [String, Number], default: "default" } }, "size");
function Xt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  return fn(() => {
    let t, l;
    return ul(Is, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = { width: ee(e.size), height: ee(e.size) }), { sizeClasses: t, sizeStyles: l };
  });
}
const Ts = R({ color: String, start: Boolean, end: Boolean, icon: ve, ...se(), ...Yt(), ...Ae({ tag: "i" }), ...we() }, "VIcon"), xe = J()({ name: "VIcon", props: Ts(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = Y(), { themeClasses: a } = Be(e), { iconData: r } = ((m) => {
    const f = fe(Vs);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: g(() => {
      var h;
      const d = y(m);
      if (!d)
        return { component: uo };
      let p = d;
      if (typeof p == "string" && (p = p.trim(), p.startsWith("$") && (p = (h = f.aliases) == null ? void 0 : h[p.slice(1)])), !p)
        throw new Error(`Could not find aliased icon "${d}"`);
      if (Array.isArray(p))
        return { component: Es, icon: p };
      if (typeof p != "string")
        return { component: uo, icon: p };
      const b = Object.keys(f.sets).find((S) => typeof p == "string" && p.startsWith(`${S}:`)), u = b ? p.slice(b.length + 1) : p;
      return { component: f.sets[b ?? f.defaultSet].component, icon: u };
    }) };
  })(g(() => o.value || e.icon)), { sizeClasses: s } = Xt(e), { textColorClasses: i, textColorStyles: c } = Ge(X(e, "color"));
  return ne(() => {
    var f, d;
    const m = (f = l.default) == null ? void 0 : f.call(l);
    return m && (o.value = (d = Go(m).filter((p) => p.type === ts && p.children && typeof p.children == "string")[0]) == null ? void 0 : d.children), v(r.value.component, { tag: e.tag, icon: r.value.icon, class: ["v-icon", "notranslate", a.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: ee(e.size), height: ee(e.size), width: ee(e.size) }, c.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [m] });
  }), {};
} });
function ga(e, n) {
  const t = Y(), l = ae(!1);
  if (pn) {
    const o = new IntersectionObserver((a) => {
      e == null || e(a, o), l.value = !!a.find((r) => r.isIntersecting);
    }, n);
    it(() => {
      o.disconnect();
    }), te(t, (a, r) => {
      r && (o.unobserve(r), l.value = !1), a && o.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: l };
}
const Ds = R({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...Yt(), ...Ae({ tag: "div" }), ...we() }, "VProgressCircular"), ya = J()({ name: "VProgressCircular", props: Ds(), setup(e, n) {
  let { slots: t } = n;
  const l = 2 * Math.PI * 20, o = Y(), { themeClasses: a } = Be(e), { sizeClasses: r, sizeStyles: s } = Xt(e), { textColorClasses: i, textColorStyles: c } = Ge(X(e, "color")), { textColorClasses: m, textColorStyles: f } = Ge(X(e, "bgColor")), { intersectionRef: d, isIntersecting: p } = ga(), { resizeRef: b, contentRect: u } = hn(), h = g(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = g(() => Number(e.width)), B = g(() => s.value ? Number(e.size) : u.value ? u.value.width : Math.max(S.value, 32)), $ = g(() => 20 / (1 - S.value / B.value) * 2), k = g(() => S.value / B.value * $.value), C = g(() => ee((100 - h.value) / 100 * l));
  return Me(() => {
    d.value = o.value, b.value = o.value;
  }), ne(() => v(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, r.value, i.value, e.class], style: [s.value, c.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : h.value }, { default: () => [v("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${$.value} ${$.value}` }, [v("circle", { class: ["v-progress-circular__underlay", m.value], style: f.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": k.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), v("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": k.value, "stroke-dasharray": l, "stroke-dashoffset": C.value }, null)]), t.default && v("div", { class: "v-progress-circular__content" }, [t.default({ value: h.value })])] })), {};
} }), co = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, ha = R({ location: String }, "location");
function ba(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = Gt();
  return { locationStyles: g(() => {
    if (!e.location)
      return {};
    const { side: a, align: r } = Xl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function s(c) {
      return t ? t(c) : 0;
    }
    const i = {};
    return a !== "center" && (n ? i[co[a]] = `calc(100% - ${s(a)}px)` : i[a] = 0), r !== "center" ? n ? i[co[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0 : (a === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), i;
  }) };
}
const Os = R({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...ha({ location: "top" }), ...et(), ...Ae(), ...we() }, "VProgressLinear"), Sa = J()({ name: "VProgressLinear", props: Os(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = me(e, "modelValue"), { isRtl: o, rtlClasses: a } = Gt(), { themeClasses: r } = Be(e), { locationStyles: s } = ba(e), { textColorClasses: i, textColorStyles: c } = Ge(e, "color"), { backgroundColorClasses: m, backgroundColorStyles: f } = Ze(g(() => e.bgColor || e.color)), { backgroundColorClasses: d, backgroundColorStyles: p } = Ze(e, "color"), { roundedClasses: b } = tt(e), { intersectionRef: u, isIntersecting: h } = ga(), S = g(() => parseInt(e.max, 10)), B = g(() => parseInt(e.height, 10)), $ = g(() => parseFloat(e.bufferValue) / S.value * 100), k = g(() => parseFloat(l.value) / S.value * 100), C = g(() => o.value !== e.reverse), A = g(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), I = g(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function _(x) {
    if (!u.value)
      return;
    const { left: T, right: w, width: M } = u.value.getBoundingClientRect(), N = C.value ? M - x.clientX + (w - M) : x.clientX - T;
    l.value = Math.round(N / M * S.value);
  }
  return ne(() => v(e.tag, { ref: u, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && h.value, "v-progress-linear--reverse": C.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, b.value, r.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ee(B.value) : 0, "--v-progress-linear-height": ee(B.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : k.value, onClick: e.clickable && _ }, { default: () => [e.stream && v("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...c.value, [C.value ? "left" : "right"]: ee(-B.value), borderTop: `${ee(B.value / 2)} dotted`, opacity: I.value, top: `calc(50% - ${ee(B.value / 4)})`, width: ee(100 - $.value, "%"), "--v-progress-linear-stream-to": ee(B.value * (C.value ? 1 : -1)) } }, null), v("div", { class: ["v-progress-linear__background", m.value], style: [f.value, { opacity: I.value, width: ee(e.stream ? $.value : 100, "%") }] }, null), v(st, { name: A.value }, { default: () => [e.indeterminate ? v("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((x) => v("div", { key: x, class: ["v-progress-linear__indeterminate", x, d.value], style: p.value }, null))]) : v("div", { class: ["v-progress-linear__determinate", d.value], style: [p.value, { width: ee(k.value, "%") }] }, null)] }), t.default && v("div", { class: "v-progress-linear__content" }, [t.default({ value: k.value, buffer: $.value })])] })), {};
} }), Sn = R({ loading: [Boolean, String] }, "loader");
function xn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  return { loaderClasses: g(() => ({ [`${n}--loading`]: e.loading })) };
}
function xa(e, n) {
  var l;
  let { slots: t } = n;
  return v("div", { class: `${e.name}__loader` }, [((l = t.default) == null ? void 0 : l.call(t, { color: e.color, isActive: e.active })) || v(Sa, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Ls = ["static", "relative", "fixed", "absolute", "sticky"], Ms = R({ position: { type: String, validator: (e) => Ls.includes(e) } }, "position");
function wn(e, n) {
  const t = jo("RouterLink"), l = g(() => !(!e.href && !e.to)), o = g(() => (l == null ? void 0 : l.value) || jn(n, "click") || jn(e, "click"));
  if (typeof t == "string")
    return { isLink: l, isClickable: o, href: X(e, "href") };
  const a = e.to ? t.useLink(e) : void 0;
  return { isLink: l, isClickable: o, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && g(() => {
    var r, s;
    return e.exact ? (r = a.isExactActive) == null ? void 0 : r.value : (s = a.isActive) == null ? void 0 : s.value;
  }), href: g(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const kn = R({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let jl = !1;
const Jl = Symbol("rippleStop"), Ns = 80;
function po(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Zl(e) {
  return e.constructor.name === "TouchEvent";
}
function wa(e) {
  return e.constructor.name === "KeyboardEvent";
}
const gl = { show(e, n) {
  var p;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((p = n == null ? void 0 : n._ripple) != null && p.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
  const { radius: a, scale: r, x: s, y: i, centerX: c, centerY: m } = function(b, u) {
    var I;
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = 0, B = 0;
    if (!wa(b)) {
      const _ = u.getBoundingClientRect(), x = Zl(b) ? b.touches[b.touches.length - 1] : b;
      S = x.clientX - _.left, B = x.clientY - _.top;
    }
    let $ = 0, k = 0.3;
    (I = u._ripple) != null && I.circle ? (k = 0.15, $ = u.clientWidth / 2, $ = h.center ? $ : $ + Math.sqrt((S - $) ** 2 + (B - $) ** 2) / 4) : $ = Math.sqrt(u.clientWidth ** 2 + u.clientHeight ** 2) / 2;
    const C = (u.clientWidth - 2 * $) / 2 + "px", A = (u.clientHeight - 2 * $) / 2 + "px";
    return { radius: $, scale: k, x: h.center ? C : S - $ + "px", y: h.center ? A : B - $ + "px", centerX: C, centerY: A };
  }(e, n, t), f = 2 * a + "px";
  o.className = "v-ripple__animation", o.style.width = f, o.style.height = f, n.appendChild(l);
  const d = window.getComputedStyle(n);
  d && d.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), po(o, `translate(${s}, ${i}) scale3d(${r},${r},${r})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), po(o, `translate(${c}, ${m}) scale3d(1,1,1)`);
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
function ka(e) {
  return e === void 0 || !!e;
}
function jt(e) {
  const n = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Jl]) {
    if (e[Jl] = !0, Zl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || wa(e), t._ripple.class && (n.class = t._ripple.class), Zl(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        gl.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Ns);
    } else
      gl.show(e, t, n);
  }
}
function vo(e) {
  e[Jl] = !0;
}
function Te(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit)
      return n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, void (n._ripple.showTimer = window.setTimeout(() => {
        Te(e);
      }));
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), gl.hide(n);
  }
}
function Ca(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let Rt = !1;
function Pa(e) {
  Rt || e.keyCode !== On.enter && e.keyCode !== On.space || (Rt = !0, jt(e));
}
function Ba(e) {
  Rt = !1, Te(e);
}
function Aa(e) {
  Rt && (Rt = !1, Te(e));
}
function fo(e, n, t) {
  const { value: l, modifiers: o } = n, a = ka(l);
  if (a || gl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Ul(l) && l.class && (e._ripple.class = l.class), a && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", vo, { passive: !0 }), void e.addEventListener("mousedown", vo);
    e.addEventListener("touchstart", jt, { passive: !0 }), e.addEventListener("touchend", Te, { passive: !0 }), e.addEventListener("touchmove", Ca, { passive: !0 }), e.addEventListener("touchcancel", Te), e.addEventListener("mousedown", jt), e.addEventListener("mouseup", Te), e.addEventListener("mouseleave", Te), e.addEventListener("keydown", Pa), e.addEventListener("keyup", Ba), e.addEventListener("blur", Aa), e.addEventListener("dragstart", Te, { passive: !0 });
  } else
    !a && t && _a(e);
}
function _a(e) {
  e.removeEventListener("mousedown", jt), e.removeEventListener("touchstart", jt), e.removeEventListener("touchend", Te), e.removeEventListener("touchmove", Ca), e.removeEventListener("touchcancel", Te), e.removeEventListener("mouseup", Te), e.removeEventListener("mouseleave", Te), e.removeEventListener("keydown", Pa), e.removeEventListener("keyup", Ba), e.removeEventListener("dragstart", Te), e.removeEventListener("blur", Aa);
}
const Vl = { mounted: function(e, n) {
  fo(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, _a(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && fo(e, n, ka(n.oldValue));
} }, js = R({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: ma }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ve, appendIcon: ve, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...qt(), ...se(), ...Ke(), ...mt(), ...Ft(), ...pa(), ...Sn(), ...ha(), ...Ms(), ...et(), ...kn(), ...Yt(), ...Ae({ tag: "button" }), ...we(), ...yt({ variant: "elevated" }) }, "VBtn"), wt = J()({ name: "VBtn", directives: { Ripple: Vl }, props: js(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: o } = Be(e), { borderClasses: a } = Ut(e), { colorClasses: r, colorStyles: s, variantClasses: i } = $l(e), { densityClasses: c } = qe(e), { dimensionStyles: m } = gt(e), { elevationClasses: f } = $t(e), { loaderClasses: d } = xn(e), { locationStyles: p } = ba(e), { positionClasses: b } = function(x) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
    return { positionClasses: g(() => x.position ? `${T}--${x.position}` : void 0) };
  }(e), { roundedClasses: u } = tt(e), { sizeClasses: h, sizeStyles: S } = Xt(e), B = va(e, e.symbol, !1), $ = wn(e, t), k = g(() => {
    var x;
    return e.active !== void 0 ? e.active : $.isLink.value ? (x = $.isActive) == null ? void 0 : x.value : B == null ? void 0 : B.isSelected.value;
  }), C = g(() => (B == null ? void 0 : B.disabled.value) || e.disabled), A = g(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), I = g(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function _(x) {
    var T;
    C.value || $.isLink.value && (x.metaKey || x.ctrlKey || x.shiftKey || x.button !== 0 || t.target === "_blank") || ((T = $.navigate) == null || T.call($, x), B == null || B.toggle());
  }
  return function(x, T) {
    te(() => {
      var w;
      return (w = x.isActive) == null ? void 0 : w.value;
    }, (w) => {
      x.isLink.value && w && T && $e(() => {
        T(!0);
      });
    }, { immediate: !0 });
  }($, B == null ? void 0 : B.select), ne(() => {
    var W, q;
    const x = $.isLink.value ? "a" : e.tag, T = !(!e.prependIcon && !l.prepend), w = !(!e.appendIcon && !l.append), M = !(!e.icon || e.icon === !0), N = (B == null ? void 0 : B.isSelected.value) && (!$.isLink.value || ((W = $.isActive) == null ? void 0 : W.value)) || !B || ((q = $.isActive) == null ? void 0 : q.value);
    return Ne(v(x, { type: x === "a" ? void 0 : "button", class: ["v-btn", B == null ? void 0 : B.selectedClass.value, { "v-btn--active": k.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": A.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, o.value, a.value, N ? r.value : void 0, c.value, f.value, d.value, b.value, u.value, h.value, i.value, e.class], style: [N ? s.value : void 0, m.value, p.value, S.value, e.style], disabled: C.value || void 0, href: $.href.value, onClick: _, value: I.value }, { default: () => {
      var F;
      return [Fl(!0, "v-btn"), !e.icon && T && v("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? v(Le, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : v(xe, { key: "prepend-icon", icon: e.prependIcon }, null)]), v("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && M ? v(xe, { key: "content-icon", icon: e.icon }, null) : v(Le, { key: "content-defaults", disabled: !M, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var L;
        return [((L = l.default) == null ? void 0 : L.call(l)) ?? e.text];
      } })]), !e.icon && w && v("span", { key: "append", class: "v-btn__append" }, [l.append ? v(Le, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : v(xe, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && v("span", { key: "loader", class: "v-btn__loader" }, [((F = l.loader) == null ? void 0 : F.call(l)) ?? v(ya, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[ut("ripple"), !C.value && e.ripple, null]]);
  }), {};
} }), Rs = R({ text: String, clickable: Boolean, ...se(), ...we() }, "VLabel"), Fa = J()({ name: "VLabel", props: Rs(), setup(e, n) {
  let { slots: t } = n;
  return ne(() => {
    var l;
    return v("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), $a = Symbol.for("vuetify:selection-control-group"), Va = R({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ve, trueIcon: ve, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: dt }, ...se(), ...Ke(), ...we() }, "SelectionControlGroup"), Ws = R({ ...Va({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
J()({ name: "VSelectionControlGroup", props: Ws(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = me(e, "modelValue"), o = ze(), a = g(() => e.id || `v-selection-control-group-${o}`), r = g(() => e.name || a.value), s = /* @__PURE__ */ new Set();
  return be($a, { modelValue: l, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), Pe(() => {
      s.delete(i);
    });
  } }), vt({ [e.defaultsTarget]: { color: X(e, "color"), disabled: X(e, "disabled"), density: X(e, "density"), error: X(e, "error"), inline: X(e, "inline"), modelValue: l, multiple: g(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: r, falseIcon: X(e, "falseIcon"), trueIcon: X(e, "trueIcon"), readonly: X(e, "readonly"), ripple: X(e, "ripple"), type: X(e, "type"), valueComparator: X(e, "valueComparator") } }), ne(() => {
    var i;
    return v("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const Ea = R({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...se(), ...Va() }, "VSelectionControl"), mo = J()({ name: "VSelectionControl", directives: { Ripple: Vl }, inheritAttrs: !1, props: Ea(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { group: o, densityClasses: a, icon: r, model: s, textColorClasses: i, textColorStyles: c, backgroundColorClasses: m, backgroundColorStyles: f, trueValue: d } = function(C) {
    const A = fe($a, void 0), { densityClasses: I } = qe(C), _ = me(C, "modelValue"), x = g(() => C.trueValue !== void 0 ? C.trueValue : C.value === void 0 || C.value), T = g(() => C.falseValue !== void 0 && C.falseValue), w = g(() => !!C.multiple || C.multiple == null && Array.isArray(_.value)), M = g({ get() {
      const j = A ? A.modelValue.value : _.value;
      return w.value ? j.some((K) => C.valueComparator(K, x.value)) : C.valueComparator(j, x.value);
    }, set(j) {
      if (C.readonly)
        return;
      const K = j ? x.value : T.value;
      let P = K;
      w.value && (P = j ? [...Fe(_.value), K] : Fe(_.value).filter((E) => !C.valueComparator(E, x.value))), A ? A.modelValue.value = P : _.value = P;
    } }), { textColorClasses: N, textColorStyles: W } = Ge(g(() => {
      if (!C.error && !C.disabled)
        return M.value ? C.color : C.baseColor;
    })), { backgroundColorClasses: q, backgroundColorStyles: F } = Ze(g(() => !M.value || C.error || C.disabled ? void 0 : C.color)), L = g(() => M.value ? C.trueIcon : C.falseIcon);
    return { group: A, densityClasses: I, trueValue: x, falseValue: T, model: M, textColorClasses: N, textColorStyles: W, backgroundColorClasses: q, backgroundColorStyles: F, icon: L };
  }(e), p = ze(), b = g(() => e.id || `input-${p}`), u = ae(!1), h = ae(!1), S = Y();
  function B(C) {
    u.value = !0, dl(C.target, ":focus-visible") !== !1 && (h.value = !0);
  }
  function $() {
    u.value = !1, h.value = !1;
  }
  function k(C) {
    e.readonly && o && $e(() => o.forceUpdate()), s.value = C.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    S.value && (S.value.checked = s.value);
  }), ne(() => {
    var x, T;
    const C = l.label ? l.label({ label: e.label, props: { for: b.value } }) : e.label, [A, I] = vn(t), _ = v("input", Q({ ref: S, checked: s.value, disabled: !(!e.readonly && !e.disabled), id: b.value, onBlur: $, onFocus: B, onInput: k, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: d.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, I), null);
    return v("div", Q({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": u.value, "v-selection-control--focus-visible": h.value, "v-selection-control--inline": e.inline }, a.value, e.class] }, A, { style: e.style }), [v("div", { class: ["v-selection-control__wrapper", i.value], style: c.value }, [(x = l.default) == null ? void 0 : x.call(l, { backgroundColorClasses: m, backgroundColorStyles: f }), Ne(v("div", { class: ["v-selection-control__input"] }, [((T = l.input) == null ? void 0 : T.call(l, { model: s, textColorClasses: i, textColorStyles: c, backgroundColorClasses: m, backgroundColorStyles: f, inputNode: _, icon: r.value, props: { onFocus: B, onBlur: $, id: b.value } })) ?? v(re, null, [r.value && v(xe, { key: "icon", icon: r.value }, null), _])]), [[ut("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), C && v(Fa, { for: b.value, clickable: !0, onClick: (w) => w.stopPropagation() }, { default: () => [C] })]);
  }), { isFocused: u, input: S };
} }), Ia = R({ indeterminate: Boolean, indeterminateIcon: { type: ve, default: "$checkboxIndeterminate" }, ...Ea({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Ct = J()({ name: "VCheckboxBtn", props: Ia(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = me(e, "indeterminate"), o = me(e, "modelValue");
  function a(i) {
    l.value && (l.value = !1);
  }
  const r = g(() => l.value ? e.indeterminateIcon : e.falseIcon), s = g(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return ne(() => {
    const i = pt(mo.filterProps(e), ["modelValue"]);
    return v(mo, Q(i, { modelValue: o.value, "onUpdate:modelValue": [(c) => o.value = c, a], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: r.value, trueIcon: s.value, "aria-checked": l.value ? "mixed" : void 0 }), t);
  }), {};
} });
function Ta(e) {
  const { t: n } = ft();
  return { InputIcon: function(t) {
    let { name: l } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], a = e[`onClick:${l}`], r = a && o ? n(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return v(xe, { icon: e[`${l}Icon`], "aria-label": r, onClick: a }, null);
  } };
}
const zs = R({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...Kt({ transition: { component: ra, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Hs = J()({ name: "VMessages", props: zs(), setup(e, n) {
  let { slots: t } = n;
  const l = g(() => Fe(e.messages)), { textColorClasses: o, textColorStyles: a } = Ge(g(() => e.color));
  return ne(() => v(Ye, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((r, s) => v("div", { class: "v-messages__message", key: `${s}-${l.value}` }, [t.message ? t.message({ message: r }) : r]))] })), {};
} }), Da = R({ focused: Boolean, "onUpdate:focused": De() }, "focus");
function Cn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  const t = me(e, "focused");
  return { focusClasses: g(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const Gs = Symbol.for("vuetify:form");
function Oa() {
  return fe(Gs, null);
}
const Ks = R({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Da() }, "validation"), Pn = R({ id: String, appendIcon: ve, centerAffix: { type: Boolean, default: !0 }, prependIcon: ve, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": De(), "onClick:append": De(), ...se(), ...Ke(), ...Ks() }, "VInput"), yl = J()({ name: "VInput", props: { ...Pn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const { densityClasses: a } = qe(e), { rtlClasses: r } = Gt(), { InputIcon: s } = Ta(e), i = ze(), c = g(() => e.id || `input-${i}`), m = g(() => `${c.value}-messages`), { errorMessages: f, isDirty: d, isDisabled: p, isReadonly: b, isPristine: u, isValid: h, isValidating: S, reset: B, resetValidation: $, validate: k, validationClasses: C } = function(_) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He(), T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ze();
    const w = me(_, "modelValue"), M = g(() => _.validationValue === void 0 ? w.value : _.validationValue), N = Oa(), W = Y([]), q = ae(!0), F = g(() => !(!Fe(w.value === "" ? null : w.value).length && !Fe(M.value === "" ? null : M.value).length)), L = g(() => !!(_.disabled ?? (N == null ? void 0 : N.isDisabled.value))), j = g(() => !!(_.readonly ?? (N == null ? void 0 : N.isReadonly.value))), K = g(() => {
      var U;
      return (U = _.errorMessages) != null && U.length ? Fe(_.errorMessages).concat(W.value).slice(0, Math.max(0, +_.maxErrors)) : W.value;
    }), P = g(() => {
      let U = (_.validateOn ?? (N == null ? void 0 : N.validateOn.value)) || "input";
      U === "lazy" && (U = "input lazy");
      const le = new Set((U == null ? void 0 : U.split(" ")) ?? []);
      return { blur: le.has("blur") || le.has("input"), input: le.has("input"), submit: le.has("submit"), lazy: le.has("lazy") };
    }), E = g(() => {
      var U;
      return !_.error && !((U = _.errorMessages) != null && U.length) && (!_.rules.length || (q.value ? !W.value.length && !P.value.lazy || null : !W.value.length));
    }), G = ae(!1), z = g(() => ({ [`${x}--error`]: E.value === !1, [`${x}--dirty`]: F.value, [`${x}--disabled`]: L.value, [`${x}--readonly`]: j.value })), V = g(() => _.name ?? y(T));
    function D() {
      w.value = null, $e(O);
    }
    function O() {
      q.value = !0, P.value.lazy ? W.value = [] : H(!0);
    }
    async function H() {
      let U = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const le = [];
      G.value = !0;
      for (const pe of _.rules) {
        if (le.length >= +(_.maxErrors ?? 1))
          break;
        const ge = typeof pe == "function" ? pe : () => pe, ye = await ge(M.value);
        ye !== !0 && (ye === !1 || typeof ye == "string" ? le.push(ye || "") : console.warn(`${ye} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return W.value = le, G.value = !1, q.value = U, W.value;
    }
    return dn(() => {
      N == null || N.register({ id: V.value, validate: H, reset: D, resetValidation: O });
    }), it(() => {
      N == null || N.unregister(V.value);
    }), ct(async () => {
      P.value.lazy || await H(!0), N == null || N.update(V.value, E.value, K.value);
    }), rt(() => P.value.input, () => {
      te(M, () => {
        if (M.value != null)
          H();
        else if (_.focused) {
          const U = te(() => _.focused, (le) => {
            le || H(), U();
          });
        }
      });
    }), rt(() => P.value.blur, () => {
      te(() => _.focused, (U) => {
        U || H();
      });
    }), te(E, () => {
      N == null || N.update(V.value, E.value, K.value);
    }), { errorMessages: K, isDirty: F, isDisabled: L, isReadonly: j, isPristine: q, isValid: E, isValidating: G, reset: D, resetValidation: O, validate: H, validationClasses: z };
  }(e, "v-input", c), A = g(() => ({ id: c, messagesId: m, isDirty: d, isDisabled: p, isReadonly: b, isPristine: u, isValid: h, isValidating: S, reset: B, resetValidation: $, validate: k })), I = g(() => {
    var _;
    return (_ = e.errorMessages) != null && _.length || !u.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ne(() => {
    var M, N, W, q;
    const _ = !(!l.prepend && !e.prependIcon), x = !(!l.append && !e.appendIcon), T = I.value.length > 0, w = !e.hideDetails || e.hideDetails === "auto" && (T || !!l.details);
    return v("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, a.value, r.value, C.value, e.class], style: e.style }, [_ && v("div", { key: "prepend", class: "v-input__prepend" }, [(M = l.prepend) == null ? void 0 : M.call(l, A.value), e.prependIcon && v(s, { key: "prepend-icon", name: "prepend" }, null)]), l.default && v("div", { class: "v-input__control" }, [(N = l.default) == null ? void 0 : N.call(l, A.value)]), x && v("div", { key: "append", class: "v-input__append" }, [e.appendIcon && v(s, { key: "append-icon", name: "append" }, null), (W = l.append) == null ? void 0 : W.call(l, A.value)]), w && v("div", { class: "v-input__details" }, [v(Hs, { id: m.value, active: T, messages: I.value }, { message: l.message }), (q = l.details) == null ? void 0 : q.call(l, A.value)])]);
  }), { reset: B, resetValidation: $, validate: k, isValid: h, errorMessages: f };
} }), qs = R({ ...Pn(), ...pt(Ia(), ["inline"]) }, "VCheckbox"), Bn = J()({ name: "VCheckbox", inheritAttrs: !1, props: qs(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = me(e, "modelValue"), { isFocused: a, focus: r, blur: s } = Cn(e), i = ze(), c = g(() => e.id || `checkbox-${i}`);
  return ne(() => {
    const [m, f] = vn(t), d = yl.filterProps(e), p = Ct.filterProps(e);
    return v(yl, Q({ class: ["v-checkbox", e.class] }, m, d, { modelValue: o.value, "onUpdate:modelValue": (b) => o.value = b, id: c.value, focused: a.value, style: e.style }), { ...l, default: (b) => {
      let { id: u, messagesId: h, isDisabled: S, isReadonly: B } = b;
      return v(Ct, Q(p, { id: u.value, "aria-describedby": h.value, disabled: S.value, readonly: B.value }, f, { modelValue: o.value, "onUpdate:modelValue": ($) => o.value = $, onFocus: r, onBlur: s }), l);
    } });
  }), {};
} }), Us = R({ start: Boolean, end: Boolean, icon: ve, image: String, text: String, ...se(), ...Ke(), ...et(), ...Yt(), ...Ae(), ...we(), ...yt({ variant: "flat" }) }, "VAvatar"), hl = J()({ name: "VAvatar", props: Us(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Be(e), { colorClasses: o, colorStyles: a, variantClasses: r } = $l(e), { densityClasses: s } = qe(e), { roundedClasses: i } = tt(e), { sizeClasses: c, sizeStyles: m } = Xt(e);
  return ne(() => v(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, o.value, s.value, i.value, c.value, r.value, e.class], style: [a.value, m.value, e.style] }, { default: () => {
    var f;
    return [e.image ? v(As, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? v(xe, { key: "icon", icon: e.icon }, null) : ((f = t.default) == null ? void 0 : f.call(t)) ?? e.text, Fl(!1, "v-avatar")];
  } })), {};
} }), La = Symbol.for("vuetify:v-chip-group"), Ys = R({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: dt }, ...se(), ...da({ selectedClass: "v-chip--selected" }), ...Ae(), ...we(), ...yt({ variant: "tonal" }) }, "VChipGroup");
J()({ name: "VChipGroup", props: Ys(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Be(e), { isSelected: o, select: a, next: r, prev: s, selected: i } = fa(e, La);
  return vt({ VChip: { color: X(e, "color"), disabled: X(e, "disabled"), filter: X(e, "filter"), variant: X(e, "variant") } }), ne(() => v(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var c;
    return [(c = t.default) == null ? void 0 : c.call(t, { isSelected: o, select: a, next: r, prev: s, selected: i.value })];
  } })), {};
} });
const Xs = R({ activeClass: String, appendAvatar: String, appendIcon: ve, closable: Boolean, closeIcon: { type: ve, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ve, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: De(), onClickOnce: De(), ...qt(), ...se(), ...Ke(), ...Ft(), ...pa(), ...et(), ...kn(), ...Yt(), ...Ae({ tag: "span" }), ...we(), ...yt({ variant: "tonal" }) }, "VChip"), Js = J()({ name: "VChip", directives: { Ripple: Vl }, props: Xs(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { t: a } = ft(), { borderClasses: r } = Ut(e), { colorClasses: s, colorStyles: i, variantClasses: c } = $l(e), { densityClasses: m } = qe(e), { elevationClasses: f } = $t(e), { roundedClasses: d } = tt(e), { sizeClasses: p } = Xt(e), { themeClasses: b } = Be(e), u = me(e, "modelValue"), h = va(e, La, !1), S = wn(e, t), B = g(() => e.link !== !1 && S.isLink.value), $ = g(() => !e.disabled && e.link !== !1 && (!!h || e.link || S.isClickable.value)), k = g(() => ({ "aria-label": a(e.closeLabel), onClick(I) {
    I.stopPropagation(), u.value = !1, l("click:close", I);
  } }));
  function C(I) {
    var _;
    l("click", I), $.value && ((_ = S.navigate) == null || _.call(S, I), h == null || h.toggle());
  }
  function A(I) {
    I.key !== "Enter" && I.key !== " " || (I.preventDefault(), C(I));
  }
  return () => {
    const I = S.isLink.value ? "a" : e.tag, _ = !(!e.appendIcon && !e.appendAvatar), x = !(!_ && !o.append), T = !(!o.close && !e.closable), w = !(!o.filter && !e.filter) && h, M = !(!e.prependIcon && !e.prependAvatar), N = !(!M && !o.prepend), W = !h || h.isSelected.value;
    return u.value && Ne(v(I, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": $.value, "v-chip--filter": w, "v-chip--pill": e.pill }, b.value, r.value, W ? s.value : void 0, m.value, f.value, d.value, p.value, c.value, h == null ? void 0 : h.selectedClass.value, e.class], style: [W ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: S.href.value, tabindex: $.value ? 0 : void 0, onClick: C, onKeydown: $.value && !B.value && A }, { default: () => {
      var q;
      return [Fl($.value, "v-chip"), w && v(sa, { key: "filter" }, { default: () => [Ne(v("div", { class: "v-chip__filter" }, [o.filter ? v(Le, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, o.filter) : v(xe, { key: "filter-icon", icon: e.filterIcon }, null)]), [[At, h.isSelected.value]])] }), N && v("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? v(Le, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : v(re, null, [e.prependIcon && v(xe, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && v(hl, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), v("div", { class: "v-chip__content" }, [((q = o.default) == null ? void 0 : q.call(o, { isSelected: h == null ? void 0 : h.isSelected.value, selectedClass: h == null ? void 0 : h.selectedClass.value, select: h == null ? void 0 : h.select, toggle: h == null ? void 0 : h.toggle, value: h == null ? void 0 : h.value.value, disabled: e.disabled })) ?? e.text]), x && v("div", { key: "append", class: "v-chip__append" }, [o.append ? v(Le, { key: "append-defaults", disabled: !_, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : v(re, null, [e.appendIcon && v(xe, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && v(hl, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), T && v("div", Q({ key: "close", class: "v-chip__close" }, k.value), [o.close ? v(Le, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : v(xe, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[ut("ripple"), $.value && e.ripple, null]]);
  };
} }), Ql = Symbol.for("vuetify:list");
function Ma() {
  const e = fe(Ql, { hasPrepend: ae(!1), updateHasPrepend: () => null }), n = { hasPrepend: ae(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return be(Ql, n), e;
}
function Na() {
  return fe(Ql, null);
}
const Zs = { open: (e) => {
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
}, select: () => null }, ja = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    let a = o.get(n);
    for (l.add(n); a != null && a !== n; )
      l.add(a), a = o.get(a);
    return l;
  }
  return l.delete(n), l;
}, select: () => null }, Qs = { open: ja.open, select: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (!t)
    return l;
  const a = [];
  let r = o.get(n);
  for (; r != null; )
    a.push(r), r = o.get(r);
  return new Set(a);
} }, en = (e) => {
  const n = { select: (t) => {
    let { id: l, value: o, selected: a } = t;
    if (l = Xe(l), e && !o) {
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
}, go = (e) => {
  const n = en(e);
  return { select: (t) => {
    let { selected: l, id: o, ...a } = t;
    o = Xe(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return n.select({ ...a, id: o, selected: r });
  }, in: (t, l, o) => {
    let a = /* @__PURE__ */ new Map();
    return t != null && t.length && (a = n.in(t.slice(0, 1), l, o)), a;
  }, out: (t, l, o) => n.out(t, l, o) };
}, Wt = Symbol.for("vuetify:nested"), Ra = { id: ae(), root: { register: () => null, unregister: () => null, parents: Y(/* @__PURE__ */ new Map()), children: Y(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: Y(/* @__PURE__ */ new Set()), selected: Y(/* @__PURE__ */ new Map()), selectedValues: Y([]) } }, ei = R({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), ti = (e) => {
  let n = !1;
  const t = Y(/* @__PURE__ */ new Map()), l = Y(/* @__PURE__ */ new Map()), o = me(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), a = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((f) => {
          const d = go(f);
          return { select: (p) => {
            let { id: b, selected: u, children: h, ...S } = p;
            return b = Xe(b), h.has(b) ? u : d.select({ id: b, selected: u, children: h, ...S });
          }, in: d.in, out: d.out };
        })(e.mandatory);
      case "leaf":
        return ((f) => {
          const d = en(f);
          return { select: (p) => {
            let { id: b, selected: u, children: h, ...S } = p;
            return b = Xe(b), h.has(b) ? u : d.select({ id: b, selected: u, children: h, ...S });
          }, in: d.in, out: d.out };
        })(e.mandatory);
      case "independent":
        return en(e.mandatory);
      case "single-independent":
        return go(e.mandatory);
      default:
        return ((f) => {
          const d = { select: (p) => {
            let { id: b, value: u, selected: h, children: S, parents: B } = p;
            b = Xe(b);
            const $ = new Map(h), k = [b];
            for (; k.length; ) {
              const A = k.shift();
              h.set(A, u ? "on" : "off"), S.has(A) && k.push(...S.get(A));
            }
            let C = B.get(b);
            for (; C; ) {
              const A = S.get(C), I = A.every((x) => h.get(x) === "on"), _ = A.every((x) => !h.has(x) || h.get(x) === "off");
              h.set(C, I ? "on" : _ ? "off" : "indeterminate"), C = B.get(C);
            }
            return f && !u && Array.from(h.entries()).reduce((I, _) => {
              let [x, T] = _;
              return T === "on" ? [...I, x] : I;
            }, []).length === 0 ? $ : h;
          }, in: (p, b, u) => {
            let h = /* @__PURE__ */ new Map();
            for (const S of p || [])
              h = d.select({ id: S, value: !0, selected: new Map(h), children: b, parents: u });
            return h;
          }, out: (p, b) => {
            const u = [];
            for (const [h, S] of p.entries())
              S !== "on" || b.has(h) || u.push(h);
            return u;
          } };
          return d;
        })(e.mandatory);
    }
  }), r = g(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Qs;
      case "single":
        return Zs;
      default:
        return ja;
    }
  }), s = me(e, "selected", e.selected, (f) => a.value.in(f, t.value, l.value), (f) => a.value.out(f, t.value, l.value));
  function i(f) {
    const d = [];
    let p = f;
    for (; p != null; )
      d.unshift(p), p = l.value.get(p);
    return d;
  }
  it(() => {
    n = !0;
  });
  const c = Ce("nested"), m = { id: ae(), root: { opened: o, selected: s, selectedValues: g(() => {
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
      t.value.set(d, p.filter((b) => b !== f));
    }
    l.value.delete(f), o.value.delete(f);
  }, open: (f, d, p) => {
    c.emit("click:open", { id: f, value: d, path: i(f), event: p });
    const b = r.value.open({ id: f, value: d, opened: new Set(o.value), children: t.value, parents: l.value, event: p });
    b && (o.value = b);
  }, openOnSelect: (f, d, p) => {
    const b = r.value.select({ id: f, value: d, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: l.value, event: p });
    b && (o.value = b);
  }, select: (f, d, p) => {
    c.emit("click:select", { id: f, value: d, path: i(f), event: p });
    const b = a.value.select({ id: f, value: d, selected: new Map(s.value), children: t.value, parents: l.value, event: p });
    b && (s.value = b), m.root.openOnSelect(f, d, p);
  }, children: t, parents: l } };
  return be(Wt, m), m.root;
}, Wa = (e, n) => {
  const t = fe(Wt, Ra), l = Symbol(ze()), o = g(() => e.value !== void 0 ? e.value : l), a = { ...t, id: o, open: (r, s) => t.root.open(o.value, r, s), openOnSelect: (r, s) => t.root.openOnSelect(o.value, r, s), isOpen: g(() => t.root.opened.value.has(o.value)), parent: g(() => t.root.parents.value.get(o.value)), select: (r, s) => t.root.select(o.value, r, s), isSelected: g(() => t.root.selected.value.get(Xe(o.value)) === "on"), isIndeterminate: g(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: g(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, n), it(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), n && be(Wt, a), a;
}, li = Nt({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const l = fe(Wt, Ra);
    be(Wt, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} }), ni = R({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ve, default: "$collapse" }, expandIcon: { type: ve, default: "$expand" }, prependIcon: ve, appendIcon: ve, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...Ae() }, "VListGroup"), yo = J()({ name: "VListGroup", props: ni(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: l, open: o, id: a } = Wa(X(e, "value"), !0), r = g(() => `v-list-group--id-${String(a.value)}`), s = Na(), { isBooted: i } = function() {
    const p = ae(!1);
    return ct(() => {
      window.requestAnimationFrame(() => {
        p.value = !0;
      });
    }), { ssrBootStyles: g(() => p.value ? void 0 : { transition: "none !important" }), isBooted: un(p) };
  }();
  function c(p) {
    o(!l.value, p);
  }
  const m = g(() => ({ onClick: c, class: "v-list-group__header", id: r.value })), f = g(() => l.value ? e.collapseIcon : e.expandIcon), d = g(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && f.value, appendIcon: e.appendIcon || !e.subgroup && f.value, title: e.title, value: e.value } }));
  return ne(() => v(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [t.activator && v(Le, { defaults: d.value }, { default: () => [v(li, null, { default: () => [t.activator({ props: m.value, isOpen: l.value })] })] }), v(Ye, { transition: { component: Cs }, disabled: !i.value }, { default: () => {
    var p;
    return [Ne(v("div", { class: "v-list-group__items", role: "group", "aria-labelledby": r.value }, [(p = t.default) == null ? void 0 : p.call(t)]), [[At, l.value]])];
  } })] })), {};
} }), oi = Zo("v-list-item-subtitle"), ai = Zo("v-list-item-title"), ri = R({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ve, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ve, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: De(), onClickOnce: De(), ...qt(), ...se(), ...Ke(), ...mt(), ...Ft(), ...et(), ...kn(), ...Ae(), ...we(), ...yt({ variant: "text" }) }, "VListItem"), bl = J()({ name: "VListItem", directives: { Ripple: Vl }, props: ri(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const a = wn(e, t), r = g(() => e.value === void 0 ? a.href.value : e.value), { select: s, isSelected: i, isIndeterminate: c, isGroupActivator: m, root: f, parent: d, openOnSelect: p } = Wa(r, !1), b = Na(), u = g(() => {
    var j;
    return e.active !== !1 && (e.active || ((j = a.isActive) == null ? void 0 : j.value) || i.value);
  }), h = g(() => e.link !== !1 && a.isLink.value), S = g(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || e.value != null && !!b)), B = g(() => e.rounded || e.nav), $ = g(() => e.color ?? e.activeColor), k = g(() => ({ color: u.value ? $.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  te(() => {
    var j;
    return (j = a.isActive) == null ? void 0 : j.value;
  }, (j) => {
    j && d.value != null && f.open(d.value, !0), j && p(j);
  }, { immediate: !0 });
  const { themeClasses: C } = Be(e), { borderClasses: A } = Ut(e), { colorClasses: I, colorStyles: _, variantClasses: x } = $l(k), { densityClasses: T } = qe(e), { dimensionStyles: w } = gt(e), { elevationClasses: M } = $t(e), { roundedClasses: N } = tt(B), W = g(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), q = g(() => ({ isActive: u.value, select: s, isSelected: i.value, isIndeterminate: c.value }));
  function F(j) {
    var K;
    o("click", j), !m && S.value && ((K = a.navigate) == null || K.call(a, j), e.value != null && s(!i.value, j));
  }
  function L(j) {
    j.key !== "Enter" && j.key !== " " || (j.preventDefault(), F(j));
  }
  return ne(() => {
    const j = h.value ? "a" : e.tag, K = l.title || e.title, P = l.subtitle || e.subtitle, E = !(!e.appendAvatar && !e.appendIcon), G = !(!E && !l.append), z = !(!e.prependAvatar && !e.prependIcon), V = !(!z && !l.prepend);
    var D, O;
    return b == null || b.updateHasPrepend(V), e.activeColor && (D = "active-color", O = ["color", "base-color"], O = Array.isArray(O) ? O.slice(0, -1).map((H) => `'${H}'`).join(", ") + ` or '${O.at(-1)}'` : `'${O}'`, Al(`[Vuetify UPGRADE] '${D}' is deprecated, use ${O} instead.`)), Ne(v(j, { class: ["v-list-item", { "v-list-item--active": u.value, "v-list-item--disabled": e.disabled, "v-list-item--link": S.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !V && (b == null ? void 0 : b.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && u.value }, C.value, A.value, I.value, T.value, M.value, W.value, N.value, x.value, e.class], style: [_.value, w.value, e.style], href: a.href.value, tabindex: S.value ? b ? -2 : 0 : void 0, onClick: F, onKeydown: S.value && !h.value && L }, { default: () => {
      var H;
      return [Fl(S.value || u.value, "v-list-item"), V && v("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? v(Le, { key: "prepend-defaults", disabled: !z, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var U;
        return [(U = l.prepend) == null ? void 0 : U.call(l, q.value)];
      } }) : v(re, null, [e.prependAvatar && v(hl, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && v(xe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), v("div", { class: "v-list-item__spacer" }, null)]), v("div", { class: "v-list-item__content", "data-no-activator": "" }, [K && v(ai, { key: "title" }, { default: () => {
        var U;
        return [((U = l.title) == null ? void 0 : U.call(l, { title: e.title })) ?? e.title];
      } }), P && v(oi, { key: "subtitle" }, { default: () => {
        var U;
        return [((U = l.subtitle) == null ? void 0 : U.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (H = l.default) == null ? void 0 : H.call(l, q.value)]), G && v("div", { key: "append", class: "v-list-item__append" }, [l.append ? v(Le, { key: "append-defaults", disabled: !E, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var U;
        return [(U = l.append) == null ? void 0 : U.call(l, q.value)];
      } }) : v(re, null, [e.appendIcon && v(xe, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && v(hl, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), v("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[ut("ripple"), S.value && e.ripple]]);
  }), {};
} }), si = R({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...Ae() }, "VListSubheader"), ii = J()({ name: "VListSubheader", props: si(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: l, textColorStyles: o } = Ge(X(e, "color"));
  return ne(() => {
    const a = !(!t.default && !e.title);
    return v(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var r;
      return [a && v("div", { class: "v-list-subheader__text" }, [((r = t.default) == null ? void 0 : r.call(t)) ?? e.title])];
    } });
  }), {};
} }), ui = R({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...we() }, "VDivider"), ci = J()({ name: "VDivider", props: ui(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: l } = Be(e), { textColorClasses: o, textColorStyles: a } = Ge(X(e, "color")), r = g(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = ee(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ee(e.thickness)), s;
  });
  return ne(() => v("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class], style: [r.value, a.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), di = R({ items: Array, returnObject: Boolean }, "VListChildren"), za = J()({ name: "VListChildren", props: di(), setup(e, n) {
  let { slots: t } = n;
  return Ma(), () => {
    var l, o;
    return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((a) => {
      var d, p;
      let { children: r, props: s, type: i, raw: c } = a;
      if (i === "divider")
        return ((d = t.divider) == null ? void 0 : d.call(t, { props: s })) ?? v(ci, s, null);
      if (i === "subheader")
        return ((p = t.subheader) == null ? void 0 : p.call(t, { props: s })) ?? v(ii, s, null);
      const m = { subtitle: t.subtitle ? (b) => {
        var u;
        return (u = t.subtitle) == null ? void 0 : u.call(t, { ...b, item: c });
      } : void 0, prepend: t.prepend ? (b) => {
        var u;
        return (u = t.prepend) == null ? void 0 : u.call(t, { ...b, item: c });
      } : void 0, append: t.append ? (b) => {
        var u;
        return (u = t.append) == null ? void 0 : u.call(t, { ...b, item: c });
      } : void 0, title: t.title ? (b) => {
        var u;
        return (u = t.title) == null ? void 0 : u.call(t, { ...b, item: c });
      } : void 0 }, f = yo.filterProps(s);
      return r ? v(yo, Q({ value: s == null ? void 0 : s.value }, f), { activator: (b) => {
        let { props: u } = b;
        const h = { ...s, ...u, value: e.returnObject ? c : s.value };
        return t.header ? t.header({ props: h }) : v(bl, h, m);
      }, default: () => v(za, { items: r }, t) }) : t.item ? t.item({ props: s }) : v(bl, Q(s, { value: e.returnObject ? c : s.value }), m);
    }));
  };
} }), Ha = R({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: dt } }, "list-items");
function tn(e, n) {
  const t = _e(n, e.itemTitle, n), l = _e(n, e.itemValue, t), o = _e(n, e.itemChildren), a = { title: t, value: l, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? pt(n, ["children"]) : n : _e(n, e.itemProps) };
  return { title: String(a.title ?? ""), value: a.value, props: a, children: Array.isArray(o) ? Ga(e, o) : void 0, raw: n };
}
function Ga(e, n) {
  const t = [];
  for (const l of n)
    t.push(tn(e, l));
  return t;
}
function pi(e, n) {
  const t = _e(n, e.itemType, "item"), l = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(n) ? n : _e(n, e.itemTitle), o = _e(n, e.itemValue, void 0), a = _e(n, e.itemChildren), r = { title: l, value: o, ...e.itemProps === !0 ? pt(n, ["children"]) : _e(n, e.itemProps) };
  return { type: t, title: r.title, value: r.value, props: r, children: t === "item" && a ? Ka(e, a) : void 0, raw: n };
}
function Ka(e, n) {
  const t = [];
  for (const l of n)
    t.push(pi(e, l));
  return t;
}
const vi = R({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...ei({ selectStrategy: "single-leaf", openStrategy: "list" }), ...qt(), ...se(), ...Ke(), ...mt(), ...Ft(), itemType: { type: String, default: "type" }, ...Ha(), ...et(), ...Ae(), ...we(), ...yt({ variant: "text" }) }, "VList"), fi = J()({ name: "VList", props: vi(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: l } = function(x) {
    return { items: g(() => Ka(x, x.items)) };
  }(e), { themeClasses: o } = Be(e), { backgroundColorClasses: a, backgroundColorStyles: r } = Ze(X(e, "bgColor")), { borderClasses: s } = Ut(e), { densityClasses: i } = qe(e), { dimensionStyles: c } = gt(e), { elevationClasses: m } = $t(e), { roundedClasses: f } = tt(e), { open: d, select: p } = ti(e), b = g(() => e.lines ? `v-list--${e.lines}-line` : void 0), u = X(e, "activeColor"), h = X(e, "baseColor"), S = X(e, "color");
  Ma(), vt({ VListGroup: { activeColor: u, baseColor: h, color: S }, VListItem: { activeClass: X(e, "activeClass"), activeColor: u, baseColor: h, color: S, density: X(e, "density"), disabled: X(e, "disabled"), lines: X(e, "lines"), nav: X(e, "nav"), slim: X(e, "slim"), variant: X(e, "variant") } });
  const B = ae(!1), $ = Y();
  function k(x) {
    B.value = !0;
  }
  function C(x) {
    B.value = !1;
  }
  function A(x) {
    var T;
    B.value || x.relatedTarget && ((T = $.value) != null && T.contains(x.relatedTarget)) || _();
  }
  function I(x) {
    if ($.value) {
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
    if ($.value)
      return cl($.value, x);
  }
  return ne(() => v(e.tag, { ref: $, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, a.value, s.value, i.value, m.value, b.value, f.value, e.class], style: [r.value, c.value, e.style], tabindex: e.disabled || B.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: k, onFocusout: C, onFocus: A, onKeydown: I }, { default: () => [v(za, { items: l.value, returnObject: e.returnObject }, t)] })), { open: d, select: p, focus: _ };
} });
function Rl(e, n) {
  return { x: e.x + n.x, y: e.y + n.y };
}
function ho(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: l } = e;
    return Rl({ x: l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, y: t === "top" ? 0 : t === "bottom" ? n.height : t }, n);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: l } = e;
    return Rl({ x: t === "left" ? 0 : t === "right" ? n.width : t, y: l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l }, n);
  }
  return Rl({ x: n.width / 2, y: n.height / 2 }, n);
}
const qa = { static: function() {
}, connected: function(e, n, t) {
  (Array.isArray(e.target.value) || function(p) {
    for (; p; ) {
      if (window.getComputedStyle(p).position === "fixed")
        return !0;
      p = p.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = fn(() => {
    const p = Xl(n.location, e.isRtl.value), b = n.origin === "overlap" ? p : n.origin === "auto" ? Ll(p) : Xl(n.origin, e.isRtl.value);
    return p.side === b.side && p.align === Ml(b).align ? { preferredAnchor: Wn(p), preferredOrigin: Wn(b) } : { preferredAnchor: p, preferredOrigin: b };
  }), [a, r, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => g(() => {
    const b = parseFloat(n[p]);
    return isNaN(b) ? 1 / 0 : b;
  })), c = g(() => {
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
    }), !e.target.value || !e.contentEl.value)
      return;
    const p = Yo(e.target.value), b = function(x, T) {
      T ? x.style.removeProperty("left") : x.style.removeProperty("right");
      const w = mn(x);
      return T ? w.x += parseFloat(x.style.right || 0) : w.x -= parseFloat(x.style.left || 0), w.y -= parseFloat(x.style.top || 0), w;
    }(e.contentEl.value, e.isRtl.value), u = fl(e.contentEl.value);
    u.length || (u.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const h = u.reduce((x, T) => {
      const w = T.getBoundingClientRect(), M = new at({ x: T === document.documentElement ? 0 : w.x, y: T === document.documentElement ? 0 : w.y, width: T.clientWidth, height: T.clientHeight });
      return x ? new at({ x: Math.max(x.left, M.left), y: Math.max(x.top, M.top), width: Math.min(x.right, M.right) - Math.max(x.left, M.left), height: Math.min(x.bottom, M.bottom) - Math.max(x.top, M.top) }) : M;
    }, void 0);
    h.x += 12, h.y += 12, h.width -= 24, h.height -= 24;
    let S = { anchor: l.value, origin: o.value };
    function B(x) {
      const T = new at(b), w = ho(x.anchor, p), M = ho(x.origin, T);
      let { x: N, y: W } = (F = M, { x: (q = w).x - F.x, y: q.y - F.y });
      var q, F;
      switch (x.anchor.side) {
        case "top":
          W -= c.value[0];
          break;
        case "bottom":
          W += c.value[0];
          break;
        case "left":
          N -= c.value[0];
          break;
        case "right":
          N += c.value[0];
      }
      switch (x.anchor.align) {
        case "top":
          W -= c.value[1];
          break;
        case "bottom":
          W += c.value[1];
          break;
        case "left":
          N -= c.value[1];
          break;
        case "right":
          N += c.value[1];
      }
      return T.x += N, T.y += W, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, i.value), { overflows: Hn(T, h), x: N, y: W };
    }
    let $ = 0, k = 0;
    const C = { x: 0, y: 0 }, A = { x: !1, y: !1 };
    let I = -1;
    for (; ; ) {
      if (I++ > 10) {
        Xo("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x, y: T, overflows: w } = B(S);
      $ += x, k += T, b.x += x, b.y += T;
      {
        const M = zn(S.anchor), N = w.x.before || w.x.after, W = w.y.before || w.y.after;
        let q = !1;
        if (["x", "y"].forEach((F) => {
          if (F === "x" && N && !A.x || F === "y" && W && !A.y) {
            const L = { anchor: { ...S.anchor }, origin: { ...S.origin } }, j = F === "x" ? M === "y" ? Ml : Ll : M === "y" ? Ll : Ml;
            L.anchor = j(L.anchor), L.origin = j(L.origin);
            const { overflows: K } = B(L);
            (K[F].before <= w[F].before && K[F].after <= w[F].after || K[F].before + K[F].after < (w[F].before + w[F].after) / 2) && (S = L, q = A[F] = !0);
          }
        }), q)
          continue;
      }
      w.x.before && ($ += w.x.before, b.x += w.x.before), w.x.after && ($ -= w.x.after, b.x -= w.x.after), w.y.before && (k += w.y.before, b.y += w.y.before), w.y.after && (k -= w.y.after, b.y -= w.y.after);
      {
        const M = Hn(b, h);
        C.x = h.width - M.x.before - M.x.after, C.y = h.height - M.y.before - M.y.after, $ += M.x.before, b.x += M.x.before, k += M.y.before, b.y += M.y.before;
      }
      break;
    }
    const _ = zn(S.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: ee(Wl(k)), left: e.isRtl.value ? void 0 : ee(Wl($)), right: e.isRtl.value ? ee(Wl(-$)) : void 0, minWidth: ee(_ === "y" ? Math.min(a.value, p.width) : a.value), maxWidth: ee(bo(Je(C.x, a.value === 1 / 0 ? 0 : a.value, s.value))), maxHeight: ee(bo(Je(C.y, r.value === 1 / 0 ? 0 : r.value, i.value))) }), { available: C, contentBox: b };
  }
  return te([e.target, e.contentEl], (p, b) => {
    let [u, h] = p, [S, B] = b;
    S && !Array.isArray(S) && f.unobserve(S), u && !Array.isArray(u) && f.observe(u), B && f.unobserve(B), h && f.observe(h);
  }, { immediate: !0 }), Pe(() => {
    f.disconnect();
  }), te(() => [l.value, o.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), $e(() => {
    const p = d();
    if (!p)
      return;
    const { available: b, contentBox: u } = p;
    u.height > b.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), { updateLocation: d };
} }, mi = R({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in qa }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Wl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function bo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let ln = !0;
const Sl = [];
let So = -1;
function nn() {
  cancelAnimationFrame(So), So = requestAnimationFrame(() => {
    const e = Sl.shift();
    e && e(), Sl.length ? nn() : ln = !0;
  });
}
const al = { none: null, close: function(e) {
  xo(e.targetEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, l = [.../* @__PURE__ */ new Set([...fl(e.targetEl.value, n.contained ? t : void 0), ...fl(e.contentEl.value, n.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, a = (r = t || document.documentElement, yn(r) && r);
  var r;
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((i, c) => {
    i.style.setProperty("--v-body-scroll-x", ee(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", ee(-i.scrollTop)), i !== document.documentElement && i.style.setProperty("--v-scrollbar-offset", ee(o)), i.classList.add("v-overlay-scroll-blocked");
  }), Pe(() => {
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
    }, !ln || Sl.length ? (Sl.push(i), nn()) : (ln = !1, i(), nn());
  }
  a = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      xo(e.targetEl.value ?? e.contentEl.value, (s) => {
        l ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            r(s);
          });
        })) : r(s);
      });
    });
  }), Pe(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(a), cancelAnimationFrame(o);
  });
} }, gi = R({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in al } }, "VOverlay-scroll-strategies");
function xo(e, n) {
  const t = [document, ...fl(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, { passive: !0 });
  }), Pe(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const on = Symbol.for("vuetify:v-menu"), yi = R({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), hi = R({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...yi() }, "VOverlay-activator");
function bi(e, n) {
  let { isActive: t, isTop: l } = n;
  const o = Ce("useActivator"), a = Y();
  let r = !1, s = !1, i = !0;
  const c = g(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), m = g(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: d } = function(w, M) {
    const N = {}, W = (q) => () => {
      if (!Ee)
        return Promise.resolve(!0);
      const F = q === "openDelay";
      return N.closeDelay && window.clearTimeout(N.closeDelay), delete N.closeDelay, N.openDelay && window.clearTimeout(N.openDelay), delete N.openDelay, new Promise((L) => {
        const j = parseInt(w[q] ?? 0, 10);
        N[q] = window.setTimeout(() => {
          M == null || M(F), L(F);
        }, j);
      });
    };
    return { runCloseDelay: W("closeDelay"), runOpenDelay: W("openDelay") };
  }(e, (w) => {
    w !== (e.openOnHover && r || c.value && s) || e.openOnHover && t.value && !l.value || (t.value !== w && (i = !0), t.value = w);
  }), p = Y(), b = (w) => {
    w.stopPropagation(), a.value = w.currentTarget || w.target, t.value || (p.value = [w.clientX, w.clientY]), t.value = !t.value;
  }, u = (w) => {
    var M;
    (M = w.sourceCapabilities) != null && M.firesTouchEvents || (r = !0, a.value = w.currentTarget || w.target, f());
  }, h = (w) => {
    r = !1, d();
  }, S = (w) => {
    dl(w.target, ":focus-visible") !== !1 && (s = !0, w.stopPropagation(), a.value = w.currentTarget || w.target, f());
  }, B = (w) => {
    s = !1, w.stopPropagation(), d();
  }, $ = g(() => {
    const w = {};
    return m.value && (w.onClick = b), e.openOnHover && (w.onMouseenter = u, w.onMouseleave = h), c.value && (w.onFocus = S, w.onBlur = B), w;
  }), k = g(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, f();
    }, w.onMouseleave = () => {
      r = !1, d();
    }), c.value && (w.onFocusin = () => {
      s = !0, f();
    }, w.onFocusout = () => {
      s = !1, d();
    }), e.closeOnContentClick) {
      const M = fe(on, null);
      w.onClick = () => {
        t.value = !1, M == null || M.closeParents();
      };
    }
    return w;
  }), C = g(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      i && (r = !0, i = !1, f());
    }, w.onMouseleave = () => {
      r = !1, d();
    }), w;
  });
  te(l, (w) => {
    !w || (!e.openOnHover || r || c.value && s) && (!c.value || s || e.openOnHover && r) || (t.value = !1);
  }), te(t, (w) => {
    w || setTimeout(() => {
      p.value = void 0;
    });
  }, { flush: "post" });
  const A = Y();
  Me(() => {
    A.value && $e(() => {
      a.value = sl(A.value);
    });
  });
  const I = Y(), _ = g(() => e.target === "cursor" && p.value ? p.value : I.value ? sl(I.value) : wo(e.target, o) || a.value), x = g(() => Array.isArray(_.value) ? void 0 : _.value);
  let T;
  return te(() => !!e.activator, (w) => {
    w && Ee ? (T = cn(), T.run(() => {
      (function(M, N, W) {
        let { activatorEl: q, activatorEvents: F } = W;
        function L() {
          let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K(), E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : M.activatorProps;
          P && function(G, z) {
            Object.keys(z).forEach((V) => {
              if (il(V)) {
                const D = Nn(V), O = Qt.get(G);
                if (z[V] == null)
                  O == null || O.forEach((H) => {
                    const [U, le] = H;
                    U === D && (G.removeEventListener(D, le), O.delete(H));
                  });
                else if (!O || ![...O].some((H) => H[0] === D && H[1] === z[V])) {
                  G.addEventListener(D, z[V]);
                  const H = O || /* @__PURE__ */ new Set();
                  H.add([D, z[V]]), Qt.has(G) || Qt.set(G, H);
                }
              } else
                z[V] == null ? G.removeAttribute(V) : G.setAttribute(V, z[V]);
            });
          }(P, Q(F.value, E));
        }
        function j() {
          let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K(), E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : M.activatorProps;
          P && function(G, z) {
            Object.keys(z).forEach((V) => {
              if (il(V)) {
                const D = Nn(V), O = Qt.get(G);
                O == null || O.forEach((H) => {
                  const [U, le] = H;
                  U === D && (G.removeEventListener(D, le), O.delete(H));
                });
              } else
                G.removeAttribute(V);
            });
          }(P, Q(F.value, E));
        }
        function K() {
          const P = wo(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M.activator, N);
          return q.value = (P == null ? void 0 : P.nodeType) === Node.ELEMENT_NODE ? P : void 0, q.value;
        }
        te(() => M.activator, (P, E) => {
          if (E && P !== E) {
            const G = K(E);
            G && j(G);
          }
          P && $e(() => L());
        }, { immediate: !0 }), te(() => M.activatorProps, () => {
          L();
        }), Pe(() => {
          j();
        });
      })(e, o, { activatorEl: a, activatorEvents: $ });
    })) : T && T.stop();
  }, { flush: "post", immediate: !0 }), Pe(() => {
    T == null || T.stop();
  }), { activatorEl: a, activatorRef: A, target: _, targetEl: x, targetRef: I, activatorEvents: $, contentEvents: k, scrimEvents: C };
}
function wo(e, n) {
  var l, o;
  if (!e)
    return;
  let t;
  if (e === "parent") {
    let a = (o = (l = n == null ? void 0 : n.proxy) == null ? void 0 : l.$el) == null ? void 0 : o.parentNode;
    for (; a != null && a.hasAttribute("data-no-activator"); )
      a = a.parentNode;
    t = a;
  } else
    t = typeof e == "string" ? document.querySelector(e) : "$el" in e ? e.$el : e;
  return t;
}
const El = ["sm", "md", "lg", "xl", "xxl"], Si = Symbol.for("vuetify:display");
function Ua() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  const t = fe(Si);
  if (!t)
    throw new Error("Could not find Vuetify display injection");
  const l = g(() => {
    if (!e.mobileBreakpoint)
      return t.mobile.value;
    const a = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < a;
  }), o = g(() => n ? { [`${n}--mobile`]: l.value } : {});
  return { ...t, displayClasses: o, mobile: l };
}
const xi = R({ eager: Boolean }, "lazy");
function Ya() {
  const e = Ce("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const ko = Symbol.for("vuetify:stack"), Et = zt([]);
function wi() {
  return !0;
}
function Co(e, n, t) {
  if (!e || Xa(e, t) === !1)
    return !1;
  const l = Qo(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(n), !o.some((a) => a == null ? void 0 : a.contains(e.target));
}
function Xa(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || wi)(e);
}
function Po(e, n) {
  const t = Qo(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const ki = { mounted(e, n) {
  const t = (o) => function(a, r, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    r._clickOutside.lastMousedownWasOutside && Co(a, r, s) && setTimeout(() => {
      Xa(a, s) && i && i(a);
    }, 0);
  }(o, e, n), l = (o) => {
    e._clickOutside.lastMousedownWasOutside = Co(o, e, n);
  };
  Po(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: l };
}, unmounted(e, n) {
  e._clickOutside && (Po(e, (t) => {
    var a;
    if (!t || !((a = e._clickOutside) != null && a[n.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: o } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[n.instance.$.uid]);
} };
function Ci(e) {
  const { modelValue: n, color: t, ...l } = e;
  return v(st, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && v("div", Q({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const Ja = R({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...hi(), ...se(), ...mt(), ...xi(), ...mi(), ...gi(), ...we(), ...Kt() }, "VOverlay"), Bo = J()({ name: "VOverlay", directives: { ClickOutside: ki }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Ja() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
  var G, z;
  let { slots: t, attrs: l, emit: o } = n;
  const a = me(e, "modelValue"), r = g({ get: () => a.value, set: (V) => {
    V && e.disabled || (a.value = V);
  } }), { teleportTarget: s } = function(V) {
    return { teleportTarget: g(() => {
      const D = V.value;
      if (D === !0 || !Ee)
        return;
      const O = D === !1 ? document.body : typeof D == "string" ? document.querySelector(D) : D;
      if (O == null)
        return void Al(`Unable to locate target ${D}`);
      let H = O.querySelector(":scope > .v-overlay-container");
      return H || (H = document.createElement("div"), H.className = "v-overlay-container", O.appendChild(H)), H;
    }) };
  }(g(() => e.attach || e.contained)), { themeClasses: i } = Be(e), { rtlClasses: c, isRtl: m } = Gt(), { hasContent: f, onAfterLeave: d } = function(V, D) {
    const O = ae(!1), H = g(() => O.value || V.eager || D.value);
    return te(D, () => O.value = !0), { isBooted: O, hasContent: H, onAfterLeave: function() {
      V.eager || (O.value = !1);
    } };
  }(e, r), p = Ze(g(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: b, localTop: u, stackStyles: h } = function(V, D, O) {
    const H = Ce("useStack"), U = !O, le = fe(ko, void 0), pe = zt({ activeChildren: /* @__PURE__ */ new Set() });
    be(ko, pe);
    const ge = ae(+D.value);
    rt(V, () => {
      var Ue;
      const je = (Ue = Et.at(-1)) == null ? void 0 : Ue[1];
      ge.value = je ? je + 10 : +D.value, U && Et.push([H.uid, ge.value]), le == null || le.activeChildren.add(H.uid), Pe(() => {
        if (U) {
          const Jt = Xe(Et).findIndex((ht) => ht[0] === H.uid);
          Et.splice(Jt, 1);
        }
        le == null || le.activeChildren.delete(H.uid);
      });
    });
    const ye = ae(!0);
    U && Me(() => {
      var Ue;
      const je = ((Ue = Et.at(-1)) == null ? void 0 : Ue[0]) === H.uid;
      setTimeout(() => ye.value = je);
    });
    const lt = g(() => !pe.activeChildren.size);
    return { globalTop: un(ye), localTop: lt, stackStyles: g(() => ({ zIndex: ge.value })) };
  }(r, X(e, "zIndex"), e._disableGlobalStack), { activatorEl: S, activatorRef: B, target: $, targetEl: k, targetRef: C, activatorEvents: A, contentEvents: I, scrimEvents: _ } = bi(e, { isActive: r, isTop: u }), { dimensionStyles: x } = gt(e), T = function() {
    if (!Ee)
      return ae(!1);
    const { ssr: V } = Ua();
    if (V) {
      const D = ae(!1);
      return ct(() => {
        D.value = !0;
      }), D;
    }
    return ae(!0);
  }(), { scopeId: w } = Ya();
  te(() => e.disabled, (V) => {
    V && (r.value = !1);
  });
  const M = Y(), N = Y(), { contentStyles: W, updateLocation: q } = function(V, D) {
    const O = Y({}), H = Y();
    function U(le) {
      var pe;
      (pe = H.value) == null || pe.call(H, le);
    }
    return Ee && (rt(() => !(!D.isActive.value || !V.locationStrategy), (le) => {
      var pe, ge;
      te(() => V.locationStrategy, le), Pe(() => {
        H.value = void 0;
      }), typeof V.locationStrategy == "function" ? H.value = (pe = V.locationStrategy(D, V, O)) == null ? void 0 : pe.updateLocation : H.value = (ge = qa[V.locationStrategy](D, V, O)) == null ? void 0 : ge.updateLocation;
    }), window.addEventListener("resize", U, { passive: !0 }), Pe(() => {
      window.removeEventListener("resize", U), H.value = void 0;
    })), { contentStyles: O, updateLocation: H };
  }(e, { isRtl: m, contentEl: N, target: $, isActive: r });
  function F(V) {
    o("click:outside", V), e.persistent ? E() : r.value = !1;
  }
  function L() {
    return r.value && b.value;
  }
  function j(V) {
    var D, O;
    V.key === "Escape" && b.value && (e.persistent ? E() : (r.value = !1, (D = N.value) != null && D.contains(document.activeElement) && ((O = S.value) == null || O.focus())));
  }
  (function(V, D) {
    if (!Ee)
      return;
    let O;
    Me(async () => {
      O == null || O.stop(), D.isActive.value && V.scrollStrategy && (O = cn(), await $e(), O.active && O.run(() => {
        var H;
        typeof V.scrollStrategy == "function" ? V.scrollStrategy(D, V, O) : (H = al[V.scrollStrategy]) == null || H.call(al, D, V, O);
      }));
    }), Pe(() => {
      O == null || O.stop();
    });
  })(e, { root: M, contentEl: N, targetEl: k, isActive: r, updateLocation: q }), Ee && te(r, (V) => {
    V ? window.addEventListener("keydown", j) : window.removeEventListener("keydown", j);
  }, { immediate: !0 });
  const K = (z = (G = Ce("useRouter")) == null ? void 0 : G.proxy) == null ? void 0 : z.$router;
  rt(() => e.closeOnBack, () => {
    (function(V, D) {
      let O, H, U = !1;
      function le(pe) {
        var ge;
        (ge = pe.state) != null && ge.replaced || (U = !0, setTimeout(() => U = !1));
      }
      Ee && ($e(() => {
        window.addEventListener("popstate", le), O = V == null ? void 0 : V.beforeEach((pe, ge, ye) => {
          jl ? U ? D(ye) : ye() : setTimeout(() => U ? D(ye) : ye()), jl = !0;
        }), H = V == null ? void 0 : V.afterEach(() => {
          jl = !1;
        });
      }), Pe(() => {
        window.removeEventListener("popstate", le), O == null || O(), H == null || H();
      }));
    })(K, (V) => {
      b.value && r.value ? (V(!1), e.persistent ? E() : r.value = !1) : V();
    });
  });
  const P = Y();
  function E() {
    e.noClickAnimation || N.value && xt(N.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: vl });
  }
  return te(() => r.value && (e.absolute || e.contained) && s.value == null, (V) => {
    if (V) {
      const D = ta(M.value);
      D && D !== document.scrollingElement && (P.value = D.scrollTop);
    }
  }), ne(() => {
    var V;
    return v(re, null, [(V = t.activator) == null ? void 0 : V.call(t, { isActive: r.value, props: Q({ ref: B, targetRef: C }, A.value, e.activatorProps) }), T.value && f.value && v(ls, { disabled: !s.value, to: s.value }, { default: () => [v("div", Q({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": r.value, "v-overlay--contained": e.contained }, i.value, c.value, e.class], style: [h.value, { top: ee(P.value) }, e.style], ref: M }, w, l), [v(Ci, Q({ color: p, modelValue: r.value && !!e.scrim }, _.value), null), v(Ye, { appear: !0, persisted: !0, transition: e.transition, target: $.value, onAfterLeave: () => {
      d(), o("afterLeave");
    } }, { default: () => {
      var D;
      return [Ne(v("div", Q({ ref: N, class: ["v-overlay__content", e.contentClass], style: [x.value, W.value] }, I.value, e.contentProps), [(D = t.default) == null ? void 0 : D.call(t, { isActive: r })]), [[At, r.value], [ut("click-outside"), { handler: F, closeConditional: L, include: () => [S.value] }]])];
    } })])] })]);
  }), { activatorEl: S, target: $, animateClick: E, contentEl: N, globalTop: b, localTop: u, updateLocation: q };
} }), zl = Symbol("Forwarded refs");
function Hl(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function An(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[zl] = t, new Proxy(e, { get(o, a) {
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
        const c = Hl(i.value, a) ?? ("_" in i.value ? Hl((s = i.value._) == null ? void 0 : s.setupState, a) : void 0);
        if (c)
          return c;
      }
      for (const i of t) {
        const c = i.value && i.value[zl];
        if (!c)
          continue;
        const m = c.slice();
        for (; m.length; ) {
          const f = m.shift(), d = Hl(f.value, a);
          if (d)
            return d;
          const p = f.value && f.value[zl];
          p && m.push(...p);
        }
      }
    }
  } });
}
const Pi = R({ id: String, ...pt(Ja({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: aa } }), ["absolute"]) }, "VMenu"), Bi = J()({ name: "VMenu", props: Pi(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = me(e, "modelValue"), { scopeId: o } = Ya(), a = ze(), r = g(() => e.id || `v-menu-${a}`), s = Y(), i = fe(on, null), c = ae(0);
  async function m(u) {
    var B, $, k;
    const h = u.relatedTarget, S = u.target;
    await $e(), l.value && h !== S && ((B = s.value) != null && B.contentEl) && (($ = s.value) != null && $.globalTop) && ![document, s.value.contentEl].includes(S) && !s.value.contentEl.contains(S) && ((k = Yl(s.value.contentEl)[0]) == null || k.focus());
  }
  function f() {
    i == null || i.closeParents();
  }
  function d(u) {
    var h, S, B;
    !e.disabled && u.key === "Tab" && (Ko(Yl((h = s.value) == null ? void 0 : h.contentEl, !1), u.shiftKey ? "prev" : "next", ($) => $.tabIndex >= 0) || (l.value = !1, (B = (S = s.value) == null ? void 0 : S.activatorEl) == null || B.focus()));
  }
  function p(u) {
    var S;
    if (e.disabled)
      return;
    const h = (S = s.value) == null ? void 0 : S.contentEl;
    h && l.value ? u.key === "ArrowDown" ? (u.preventDefault(), cl(h, "next")) : u.key === "ArrowUp" && (u.preventDefault(), cl(h, "prev")) : ["ArrowDown", "ArrowUp"].includes(u.key) && (l.value = !0, u.preventDefault(), setTimeout(() => setTimeout(() => p(u))));
  }
  be(on, { register() {
    ++c.value;
  }, unregister() {
    --c.value;
  }, closeParents() {
    setTimeout(() => {
      c.value || (l.value = !1, i == null || i.closeParents());
    }, 40);
  } }), te(l, (u) => {
    u ? (i == null || i.register(), document.addEventListener("focusin", m, { once: !0 })) : (i == null || i.unregister(), document.removeEventListener("focusin", m));
  });
  const b = g(() => Q({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": r.value, onKeydown: p }, e.activatorProps));
  return ne(() => {
    const u = Bo.filterProps(e);
    return v(Bo, Q({ ref: s, class: ["v-menu", e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (h) => l.value = h, absolute: !0, activatorProps: b.value, "onClick:outside": f, onKeydown: d }, o), { activator: t.activator, default: function() {
      for (var h = arguments.length, S = new Array(h), B = 0; B < h; B++)
        S[B] = arguments[B];
      return v(Le, { root: "VMenu" }, { default: () => {
        var $;
        return [($ = t.default) == null ? void 0 : $.call(t, ...S)];
      } });
    } });
  }), An({ id: r, ΨopenChildren: c }, s);
} }), Ai = R({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...Kt({ transition: { component: ra } }) }, "VCounter"), _i = J()({ name: "VCounter", functional: !0, props: Ai(), setup(e, n) {
  let { slots: t } = n;
  const l = g(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ne(() => v(Ye, { transition: e.transition }, { default: () => [Ne(v("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[At, e.active]])] })), {};
} }), Fi = R({ floating: Boolean, ...se() }, "VFieldLabel"), ll = J()({ name: "VFieldLabel", props: Fi(), setup(e, n) {
  let { slots: t } = n;
  return ne(() => v(Fa, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), $i = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Za = R({ appendInnerIcon: ve, bgColor: String, clearable: Boolean, clearIcon: { type: ve, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ve, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => $i.includes(e) }, "onClick:clear": De(), "onClick:appendInner": De(), "onClick:prependInner": De(), ...se(), ...Sn(), ...et(), ...we() }, "VField"), Ao = J()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Da(), ...Za() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { themeClasses: a } = Be(e), { loaderClasses: r } = xn(e), { focusClasses: s, isFocused: i, focus: c, blur: m } = Cn(e), { InputIcon: f } = Ta(e), { roundedClasses: d } = tt(e), { rtlClasses: p } = Gt(), b = g(() => e.dirty || e.active), u = g(() => !(e.singleLine || !e.label && !o.label)), h = ze(), S = g(() => e.id || `input-${h}`), B = g(() => `${S.value}-messages`), $ = Y(), k = Y(), C = Y(), A = g(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: I, backgroundColorStyles: _ } = Ze(X(e, "bgColor")), { textColorClasses: x, textColorStyles: T } = Ge(g(() => e.error || e.disabled ? void 0 : b.value && i.value ? e.color : e.baseColor));
  te(b, (N) => {
    if (u.value) {
      const W = $.value.$el, q = k.value.$el;
      requestAnimationFrame(() => {
        const F = mn(W), L = q.getBoundingClientRect(), j = L.x - F.x, K = L.y - F.y - (F.height / 2 - L.height / 2), P = L.width / 0.75, E = Math.abs(P - F.width) > 1 ? { maxWidth: ee(P) } : void 0, G = getComputedStyle(W), z = getComputedStyle(q), V = 1e3 * parseFloat(G.transitionDuration) || 150, D = parseFloat(z.getPropertyValue("--v-field-label-scale")), O = z.getPropertyValue("color");
        W.style.visibility = "visible", q.style.visibility = "hidden", xt(W, { transform: `translate(${j}px, ${K}px) scale(${D})`, color: O, ...E }, { duration: V, easing: vl, direction: N ? "normal" : "reverse" }).finished.then(() => {
          W.style.removeProperty("visibility"), q.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const w = g(() => ({ isActive: b, isFocused: i, controlRef: C, blur: m, focus: c }));
  function M(N) {
    N.target !== document.activeElement && N.preventDefault();
  }
  return ne(() => {
    var j, K, P;
    const N = e.variant === "outlined", W = o["prepend-inner"] || e.prependInnerIcon, q = !(!e.clearable && !o.clear), F = !!(o["append-inner"] || e.appendInnerIcon || q), L = o.label ? o.label({ ...w.value, label: e.label, props: { for: S.value } }) : e.label;
    return v("div", Q({ class: ["v-field", { "v-field--active": b.value, "v-field--appended": F, "v-field--center-affix": e.centerAffix ?? !A.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": W, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !L, [`v-field--variant-${e.variant}`]: !0 }, a.value, I.value, s.value, r.value, d.value, p.value, e.class], style: [_.value, e.style], onClick: M }, t), [v("div", { class: "v-field__overlay" }, null), v(xa, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: o.loader }), W && v("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && v(f, { key: "prepend-icon", name: "prependInner" }, null), (j = o["prepend-inner"]) == null ? void 0 : j.call(o, w.value)]), v("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && u.value && v(ll, { key: "floating-label", ref: k, class: [x.value], floating: !0, for: S.value, style: T.value }, { default: () => [L] }), v(ll, { ref: $, for: S.value }, { default: () => [L] }), (K = o.default) == null ? void 0 : K.call(o, { ...w.value, props: { id: S.value, class: "v-field__input", "aria-describedby": B.value }, focus: c, blur: m })]), q && v(sa, { key: "clear" }, { default: () => [Ne(v("div", { class: "v-field__clearable", onMousedown: (E) => {
      E.preventDefault(), E.stopPropagation();
    } }, [o.clear ? o.clear() : v(f, { name: "clear" }, null)]), [[At, e.dirty]])] }), F && v("div", { key: "append", class: "v-field__append-inner" }, [(P = o["append-inner"]) == null ? void 0 : P.call(o, w.value), e.appendInnerIcon && v(f, { key: "append-icon", name: "appendInner" }, null)]), v("div", { class: ["v-field__outline", x.value], style: T.value }, [N && v(re, null, [v("div", { class: "v-field__outline__start" }, null), u.value && v("div", { class: "v-field__outline__notch" }, [v(ll, { ref: k, floating: !0, for: S.value }, { default: () => [L] })]), v("div", { class: "v-field__outline__end" }, null)]), A.value && u.value && v(ll, { ref: k, floating: !0, for: S.value }, { default: () => [L] })])]);
  }), { controlRef: C };
} }), Vi = ["color", "file", "time", "date", "datetime-local", "week", "month"], Qa = R({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Pn(), ...Za() }, "VTextField"), an = J()({ name: "VTextField", directives: { Intersect: ua }, inheritAttrs: !1, props: Qa(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const a = me(e, "modelValue"), { isFocused: r, focus: s, blur: i } = Cn(e), c = g(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), m = g(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), f = g(() => ["plain", "underlined"].includes(e.variant));
  function d(A, I) {
    var _, x;
    e.autofocus && A && ((x = (_ = I[0].target) == null ? void 0 : _.focus) == null || x.call(_));
  }
  const p = Y(), b = Y(), u = Y(), h = g(() => Vi.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
  function S() {
    var A;
    u.value !== document.activeElement && ((A = u.value) == null || A.focus()), r.value || s();
  }
  function B(A) {
    l("mousedown:control", A), A.target !== u.value && (S(), A.preventDefault());
  }
  function $(A) {
    S(), l("click:control", A);
  }
  function k(A) {
    A.stopPropagation(), S(), $e(() => {
      a.value = null, function(I) {
        for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), T = 1; T < _; T++)
          x[T - 1] = arguments[T];
        if (Array.isArray(I))
          for (const w of I)
            w(...x);
        else
          typeof I == "function" && I(...x);
      }(e["onClick:clear"], A);
    });
  }
  function C(A) {
    var _;
    const I = A.target;
    if (a.value = I.value, ((_ = e.modelModifiers) == null ? void 0 : _.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const x = [I.selectionStart, I.selectionEnd];
      $e(() => {
        I.selectionStart = x[0], I.selectionEnd = x[1];
      });
    }
  }
  return ne(() => {
    const A = !!(o.counter || e.counter !== !1 && e.counter != null), I = !(!A && !o.details), [_, x] = vn(t), { modelValue: T, ...w } = yl.filterProps(e), M = function(N) {
      return zo(N, Object.keys(Ao.props).filter((W) => !il(W) && W !== "class" && W !== "style"));
    }(e);
    return v(yl, Q({ ref: p, modelValue: a.value, "onUpdate:modelValue": (N) => a.value = N, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, _, w, { centerAffix: !f.value, focused: r.value }), { ...o, default: (N) => {
      let { id: W, isDisabled: q, isDirty: F, isReadonly: L, isValid: j } = N;
      return v(Ao, Q({ ref: b, onMousedown: B, onClick: $, "onClick:clear": k, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, M, { id: W.value, active: h.value || F.value, dirty: F.value || e.dirty, disabled: q.value, focused: r.value, error: j.value === !1 }), { ...o, default: (K) => {
        let { props: { class: P, ...E } } = K;
        const G = Ne(v("input", Q({ ref: u, value: a.value, onInput: C, autofocus: e.autofocus, readonly: L.value, disabled: q.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: S, onBlur: i }, E, x), null), [[ut("intersect"), { handler: d }, null, { once: !0 }]]);
        return v(re, null, [e.prefix && v("span", { class: "v-text-field__prefix" }, [v("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), o.default ? v("div", { class: P, "data-no-activator": "" }, [o.default(), G]) : ns(G, { class: P }), e.suffix && v("span", { class: "v-text-field__suffix" }, [v("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: I ? (N) => {
      var W;
      return v(re, null, [(W = o.details) == null ? void 0 : W.call(o, N), A && v(re, null, [v("span", null, null), v(_i, { active: e.persistentCounter || r.value, value: c.value, max: m.value }, o.counter)])]);
    } : void 0 });
  }), An({}, p, b, u);
} }), Ei = R({ renderless: Boolean, ...se() }, "VVirtualScrollItem"), Ii = J()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Ei(), emits: { "update:height": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { resizeRef: a, contentRect: r } = hn(void 0, "border");
  te(() => {
    var s;
    return (s = r.value) == null ? void 0 : s.height;
  }, (s) => {
    s != null && l("update:height", s);
  }), ne(() => {
    var s, i;
    return e.renderless ? v(re, null, [(s = o.default) == null ? void 0 : s.call(o, { itemRef: a })]) : v("div", Q({ ref: a, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(i = o.default) == null ? void 0 : i.call(o)]);
  });
} }), Ti = R({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function Di(e, n) {
  const t = Ua(), l = ae(0);
  Me(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const o = ae(0), a = ae(Math.ceil((parseInt(e.height) || t.height.value) / (l.value || 16)) || 1), r = ae(0), s = ae(0), i = Y(), c = Y();
  let m = 0;
  const { resizeRef: f, contentRect: d } = hn();
  Me(() => {
    f.value = i.value;
  });
  const p = g(() => {
    var F;
    return i.value === document.documentElement ? t.height.value : ((F = d.value) == null ? void 0 : F.height) || parseInt(e.height) || 0;
  }), b = g(() => !!(i.value && c.value && p.value && l.value)), u = /* @__PURE__ */ new Map();
  let h = Array.from({ length: n.value.length });
  const S = Array.from({ length: n.value.length }), B = ae(0);
  let $ = -1;
  const k = function(F, L) {
    let j = 0;
    const K = function() {
      for (var P = arguments.length, E = new Array(P), G = 0; G < P; G++)
        E[G] = arguments[G];
      clearTimeout(j), j = setTimeout(() => F(...E), y(L));
    };
    return K.clear = () => {
      clearTimeout(j);
    }, K.immediate = F, K;
  }(() => {
    const F = performance.now();
    S[0] = 0;
    const L = n.value.length;
    for (let j = 1; j <= L - 1; j++)
      S[j] = (S[j - 1] || 0) + (h[j - 1] || l.value);
    B.value = Math.max(B.value, performance.now() - F);
  }, B), C = te(b, (F) => {
    F && (C(), m = c.value.offsetTop, k.immediate(), M(), ~$ && $e(() => {
      Ee && window.requestAnimationFrame(() => {
        W($), $ = -1;
      });
    }));
  });
  function A(F) {
    return F = Je(F, 0, n.value.length - 1), S[F] || 0;
  }
  function I(F) {
    return function(L, j) {
      let K = L.length - 1, P = 0, E = 0, G = null, z = -1;
      if (L[K] < j)
        return K;
      for (; P <= K; )
        if (E = P + K >> 1, G = L[E], G > j)
          K = E - 1;
        else {
          if (!(G < j))
            return G === j ? E : P;
          z = E, P = E + 1;
        }
      return z;
    }(S, F);
  }
  te(p, (F, L) => {
    L && M();
  }), Pe(() => {
    k.clear();
  });
  let _ = 0, x = 0, T = 0, w = -1;
  function M() {
    cancelAnimationFrame(w), w = requestAnimationFrame(N);
  }
  function N() {
    if (!i.value || !p.value)
      return;
    const F = _ - m, L = Math.sign(x), j = Je(I(Math.max(0, F - 100)), 0, n.value.length), K = Je(I(F + p.value + 100) + 1, j + 1, n.value.length);
    if ((L !== -1 || j < o.value) && (L !== 1 || K > a.value)) {
      const P = A(o.value) - A(j), E = A(K) - A(a.value);
      Math.max(P, E) > 100 ? (o.value = j, a.value = K) : (j <= 0 && (o.value = j), K >= n.value.length && (a.value = K));
    }
    r.value = A(o.value), s.value = A(n.value.length) - A(a.value);
  }
  function W(F) {
    const L = A(F);
    !i.value || F && !L ? $ = F : i.value.scrollTop = L;
  }
  const q = g(() => n.value.slice(o.value, a.value).map((F, L) => ({ raw: F, index: L + o.value })));
  return te(() => n.value.length, () => {
    h = function(F) {
      let L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return Array.from({ length: F }, (j, K) => L + K);
    }(n.value.length).map(() => l.value), u.forEach((F, L) => {
      const j = n.value.indexOf(L);
      j === -1 ? u.delete(L) : h[j] = F;
    }), M();
  }), { containerRef: i, markerRef: c, computedItems: q, paddingTop: r, paddingBottom: s, scrollToIndex: W, handleScroll: function() {
    if (!i.value || !c.value)
      return;
    const F = i.value.scrollTop, L = performance.now();
    L - T > 500 ? (x = Math.sign(F - _), m = c.value.offsetTop) : x = F - _, _ = F, T = L, M();
  }, handleScrollend: function() {
    i.value && c.value && (x = 0, T = 0, M());
  }, handleItemResize: function(F, L) {
    const j = h[F], K = l.value;
    l.value = K ? Math.min(l.value, L) : L, j === L && K === l.value || (h[F] = L, u.set(n.value[F], L), k());
  } };
}
const Oi = R({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Ti(), ...se(), ...mt() }, "VVirtualScroll"), Li = J()({ name: "VVirtualScroll", props: Oi(), setup(e, n) {
  let { slots: t } = n;
  const l = Ce("VVirtualScroll"), { dimensionStyles: o } = gt(e), { containerRef: a, markerRef: r, handleScroll: s, handleScrollend: i, handleItemResize: c, scrollToIndex: m, paddingTop: f, paddingBottom: d, computedItems: p } = Di(e, X(e, "items"));
  return rt(() => e.renderless, () => {
    function b() {
      var h, S;
      const u = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      a.value === document.documentElement ? (document[u]("scroll", s, { passive: !0 }), document[u]("scrollend", i)) : ((h = a.value) == null || h[u]("scroll", s, { passive: !0 }), (S = a.value) == null || S[u]("scrollend", i));
    }
    ct(() => {
      a.value = ta(l.vnode.el, !0), b(!0);
    }), Pe(b);
  }), ne(() => {
    const b = p.value.map((u) => v(Ii, { key: u.index, renderless: e.renderless, "onUpdate:height": (h) => c(u.index, h) }, { default: (h) => {
      var S;
      return (S = t.default) == null ? void 0 : S.call(t, { item: u.raw, index: u.index, ...h });
    } }));
    return e.renderless ? v(re, null, [v("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: ee(f.value) } }, null), b, v("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ee(d.value) } }, null)]) : v("div", { ref: a, class: ["v-virtual-scroll", e.class], onScrollPassive: s, onScrollend: i, style: [o.value, e.style] }, [v("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: ee(f.value), paddingBottom: ee(d.value) } }, [b])]);
  }), { scrollToIndex: m };
} });
function Mi(e, n) {
  const t = ae(!1);
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
          const m = te(t, () => {
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
const Ni = R({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ve, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...Ha({ itemChildren: !1 }) }, "Select"), ji = R({ ...Ni(), ...pt(Qa({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Kt({ transition: { component: aa } }) }, "VSelect"), Ri = J()({ name: "VSelect", props: ji(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = ft(), o = Y(), a = Y(), r = Y(), s = me(e, "menu"), i = g({ get: () => s.value, set: (F) => {
    var L;
    s.value && !F && ((L = a.value) != null && L.ΨopenChildren) || (s.value = F);
  } }), { items: c, transformIn: m, transformOut: f } = function(F) {
    const L = g(() => Ga(F, F.items)), j = g(() => L.value.some((K) => K.value === null));
    return { items: L, transformIn: function(K) {
      return j.value || (K = K.filter((P) => P !== null)), K.map((P) => F.returnObject && typeof P == "string" ? tn(F, P) : L.value.find((E) => F.valueComparator(P, E.value)) || tn(F, P));
    }, transformOut: function(K) {
      return F.returnObject ? K.map((P) => {
        let { raw: E } = P;
        return E;
      }) : K.map((P) => {
        let { value: E } = P;
        return E;
      });
    } };
  }(e), d = me(e, "modelValue", [], (F) => m(F === null ? [null] : Fe(F)), (F) => {
    const L = f(F);
    return e.multiple ? L : L[0] ?? null;
  }), p = Oa(), b = g(() => d.value.map((F) => F.value)), u = ae(!1), h = g(() => i.value ? e.closeText : e.openText);
  let S, B = "";
  const $ = g(() => e.hideSelected ? c.value.filter((F) => !d.value.some((L) => L === F)) : c.value), k = g(() => e.hideNoData && !c.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), C = Y(), { onListScroll: A, onListKeydown: I } = Mi(C, o);
  function _(F) {
    e.openOnClear && (i.value = !0);
  }
  function x() {
    k.value || (i.value = !i.value);
  }
  function T(F) {
    var K, P;
    if (!F.key || e.readonly || p != null && p.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(F.key) && F.preventDefault(), ["Enter", "ArrowDown", " "].includes(F.key) && (i.value = !0), ["Escape", "Tab"].includes(F.key) && (i.value = !1), F.key === "Home" ? (K = C.value) == null || K.focus("first") : F.key === "End" && ((P = C.value) == null || P.focus("last")), e.multiple || !function(E) {
      const G = E.key.length === 1, z = !E.ctrlKey && !E.metaKey && !E.altKey;
      return G && z;
    }(F)))
      return;
    const L = performance.now();
    L - S > 1e3 && (B = ""), B += F.key.toLowerCase(), S = L;
    const j = c.value.find((E) => E.title.toLowerCase().startsWith(B));
    j !== void 0 && (d.value = [j]);
  }
  function w(F) {
    if (e.multiple) {
      const L = d.value.findIndex((j) => e.valueComparator(j.value, F.value));
      if (L === -1)
        d.value = [...d.value, F];
      else {
        const j = [...d.value];
        j.splice(L, 1), d.value = j;
      }
    } else
      d.value = [F], i.value = !1;
  }
  function M(F) {
    var L;
    (L = C.value) != null && L.$el.contains(F.relatedTarget) || (i.value = !1);
  }
  function N() {
    var F;
    u.value && ((F = o.value) == null || F.focus());
  }
  function W(F) {
    u.value = !0;
  }
  function q(F) {
    if (F == null)
      d.value = [];
    else if (dl(o.value, ":autofill") || dl(o.value, ":-webkit-autofill")) {
      const L = c.value.find((j) => j.title === F);
      L && w(L);
    } else
      o.value && (o.value.value = "");
  }
  return te(i, () => {
    if (!e.hideSelected && i.value && d.value.length) {
      const F = $.value.findIndex((L) => d.value.some((j) => e.valueComparator(j.value, L.value)));
      Ee && window.requestAnimationFrame(() => {
        var L;
        F >= 0 && ((L = r.value) == null || L.scrollToIndex(F));
      });
    }
  }), ne(() => {
    const F = !(!e.chips && !t.chip), L = !!(!e.hideNoData || $.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), j = d.value.length > 0, K = an.filterProps(e), P = j || !u.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return v(an, Q({ ref: o }, K, { modelValue: d.value.map((E) => E.props.value).join(", "), "onUpdate:modelValue": q, focused: u.value, "onUpdate:focused": (E) => u.value = E, validationValue: d.externalValue, counterValue: d.value.length, dirty: j, class: ["v-select", { "v-select--active-menu": i.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": d.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, inputmode: "none", placeholder: P, "onClick:clear": _, "onMousedown:control": x, onBlur: M, onKeydown: T, "aria-label": l(h.value), title: l(h.value) }), { ...t, default: () => v(re, null, [v(Bi, Q({ ref: a, modelValue: i.value, "onUpdate:modelValue": (E) => i.value = E, activator: "parent", contentClass: "v-select__content", disabled: k.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: N }, e.menuProps), { default: () => [L && v(fi, { ref: C, selected: b.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (E) => E.preventDefault(), onKeydown: I, onFocusin: W, onScrollPassive: A, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var E, G, z;
      return [(E = t["prepend-item"]) == null ? void 0 : E.call(t), !$.value.length && !e.hideNoData && (((G = t["no-data"]) == null ? void 0 : G.call(t)) ?? v(bl, { title: l(e.noDataText) }, null)), v(Li, { ref: r, renderless: !0, items: $.value }, { default: (V) => {
        var le;
        let { item: D, index: O, itemRef: H } = V;
        const U = Q(D.props, { ref: H, key: O, onClick: () => w(D) });
        return ((le = t.item) == null ? void 0 : le.call(t, { item: D, index: O, props: U })) ?? v(bl, U, { prepend: (pe) => {
          let { isSelected: ge } = pe;
          return v(re, null, [e.multiple && !e.hideSelected ? v(Ct, { key: D.value, modelValue: ge, ripple: !1, tabindex: "-1" }, null) : void 0, D.props.prependIcon && v(xe, { icon: D.props.prependIcon }, null)]);
        } });
      } }), (z = t["append-item"]) == null ? void 0 : z.call(t)];
    } })] }), d.value.map((E, G) => {
      const z = { "onClick:close": function(O) {
        O.stopPropagation(), O.preventDefault(), w(E);
      }, onMousedown(O) {
        O.preventDefault(), O.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, V = F ? !!t.chip : !!t.selection, D = V ? qo(F ? t.chip({ item: E, index: G, props: z }) : t.selection({ item: E, index: G })) : void 0;
      if (!V || D)
        return v("div", { key: E.value, class: "v-select__selection" }, [F ? t.chip ? v(Le, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: E.title } } }, { default: () => [D] }) : v(Js, Q({ key: "chip", closable: e.closableChips, size: "small", text: E.title, disabled: E.props.disabled }, z), null) : D ?? v("span", { class: "v-select__selection-text" }, [E.title, e.multiple && G < d.value.length - 1 && v("span", { class: "v-select__selection-comma" }, [rl(",")])])]);
    })]), "append-inner": function() {
      var V;
      for (var E = arguments.length, G = new Array(E), z = 0; z < E; z++)
        G[z] = arguments[z];
      return v(re, null, [(V = t["append-inner"]) == null ? void 0 : V.call(t, ...G), e.menuIcon ? v(xe, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), An({ isFocused: u, menu: i, select: w }, o);
} }), Wi = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), zi = R({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function Hi(e, n, t, l) {
  const o = Y([]), a = Y(/* @__PURE__ */ new Map()), r = g(() => l != null && l.transform ? y(n).map((s) => [s, l.transform(s)]) : y(n));
  return Me(() => {
    const s = typeof t == "function" ? t() : y(t), i = typeof s != "string" && typeof s != "number" ? "" : String(s), c = function(p, b, u) {
      var k;
      const h = [], S = (u == null ? void 0 : u.default) ?? Wi, B = !!(u != null && u.filterKeys) && Fe(u.filterKeys), $ = Object.keys((u == null ? void 0 : u.customKeyFilter) ?? {}).length;
      if (!(p != null && p.length))
        return h;
      e:
        for (let C = 0; C < p.length; C++) {
          const [A, I = A] = Fe(p[C]), _ = {}, x = {};
          let T = -1;
          if (b && !(u != null && u.noFilter)) {
            if (typeof A == "object") {
              const N = B || Object.keys(I);
              for (const W of N) {
                const q = _e(I, W, I), F = (k = u == null ? void 0 : u.customKeyFilter) == null ? void 0 : k[W];
                if (T = F ? F(q, b, A) : S(q, b, A), T !== -1 && T !== !1)
                  F ? _[W] = T : x[W] = T;
                else if ((u == null ? void 0 : u.filterMode) === "every")
                  continue e;
              }
            } else
              T = S(A, b, A), T !== -1 && T !== !1 && (x.title = T);
            const w = Object.keys(x).length, M = Object.keys(_).length;
            if (!w && !M || (u == null ? void 0 : u.filterMode) === "union" && M !== $ && !w || (u == null ? void 0 : u.filterMode) === "intersection" && (M !== $ || !w))
              continue;
          }
          h.push({ index: C, matches: { ...x, ..._ } });
        }
      return h;
    }(r.value, i, { customKeyFilter: { ...e.customKeyFilter, ...y(l == null ? void 0 : l.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), m = y(n), f = [], d = /* @__PURE__ */ new Map();
    c.forEach((p) => {
      let { index: b, matches: u } = p;
      const h = m[b];
      f.push(h), d.set(h.value, u);
    }), o.value = f, a.value = d;
  }), { filteredItems: o, filteredMatches: a, getMatches: function(s) {
    return a.value.get(s.value);
  } };
}
const Gi = R({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), er = Symbol.for("vuetify:datatable:expanded");
function tr(e) {
  const n = X(e, "expandOnClick"), t = me(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
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
  return be(er, a), a;
}
function lr() {
  const e = fe(er);
  if (!e)
    throw new Error("foo");
  return e;
}
const Ki = R({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), nr = Symbol.for("vuetify:data-table-group");
function or(e) {
  return { groupBy: me(e, "groupBy") };
}
function ar(e) {
  const { groupBy: n, sortBy: t } = e, l = Y(/* @__PURE__ */ new Set());
  function o(r) {
    return l.value.has(r.id);
  }
  const a = { sortByWithGroups: g(() => n.value.map((r) => ({ ...r, order: r.order ?? !1 })).concat(t.value)), toggleGroup: function(r) {
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
  return be(nr, a), a;
}
function rr() {
  const e = fe(nr);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function sr(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length)
    return [];
  const o = function(s, i) {
    if (!s.length)
      return [];
    const c = /* @__PURE__ */ new Map();
    for (const m of s) {
      const f = Lt(m.raw, i);
      c.has(f) || c.set(f, []), c.get(f).push(m);
    }
    return c;
  }(e, n[0]), a = [], r = n.slice(1);
  return o.forEach((s, i) => {
    const c = n[0], m = `${l}_${c}_${i}`;
    a.push({ depth: t, id: m, key: c, value: i, items: r.length ? sr(s, r, t + 1, m) : s, type: "group" });
  }), a;
}
function ir(e, n) {
  const t = [];
  for (const l of e)
    "type" in l && l.type === "group" ? (l.value != null && t.push(l), (n.has(l.id) || l.value == null) && t.push(...ir(l.items, n))) : t.push(l);
  return t;
}
function ur(e, n, t) {
  return { flatItems: g(() => n.value.length ? ir(sr(e.value, n.value.map((l) => l.key)), t.value) : e.value) };
}
function cr(e) {
  let { page: n, itemsPerPage: t, sortBy: l, groupBy: o, search: a } = e;
  const r = Ce("VDataTable"), s = g(() => ({ page: n.value, itemsPerPage: t.value, sortBy: l.value, groupBy: o.value, search: a.value }));
  let i = null;
  te(s, () => {
    dt(i, s.value) || ((i == null ? void 0 : i.search) !== s.value.search && (n.value = 1), r.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const dr = R({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), pr = Symbol.for("vuetify:data-table-pagination");
function vr(e) {
  return { page: me(e, "page", void 0, (n) => +(n ?? 1)), itemsPerPage: me(e, "itemsPerPage", void 0, (n) => +(n ?? 10)) };
}
function fr(e) {
  const { page: n, itemsPerPage: t, itemsLength: l } = e, o = g(() => t.value === -1 ? 0 : t.value * (n.value - 1)), a = g(() => t.value === -1 ? l.value : Math.min(l.value, o.value + t.value)), r = g(() => t.value === -1 || l.value === 0 ? 1 : Math.ceil(l.value / t.value));
  Me(() => {
    n.value > r.value && (n.value = r.value);
  });
  const s = { page: n, itemsPerPage: t, startIndex: o, stopIndex: a, pageCount: r, itemsLength: l, nextPage: function() {
    n.value = Je(n.value + 1, 1, r.value);
  }, prevPage: function() {
    n.value = Je(n.value - 1, 1, r.value);
  }, setPage: function(i) {
    n.value = Je(i, 1, r.value);
  }, setItemsPerPage: function(i) {
    t.value = i, n.value = 1;
  } };
  return be(pr, s), s;
}
const qi = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var l;
  let { items: n, value: t } = e;
  return new Set(t ? [(l = n[0]) == null ? void 0 : l.value] : []);
}, selectAll: (e) => {
  let { selected: n } = e;
  return n;
} }, mr = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: n } = e;
  return n;
}, select: (e) => {
  let { items: n, value: t, selected: l } = e;
  for (const o of n)
    t ? l.add(o.value) : l.delete(o.value);
  return l;
}, selectAll: (e) => {
  let { value: n, currentPage: t, selected: l } = e;
  return mr.select({ items: t, value: n, selected: l });
} }, gr = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: n } = e;
  return n;
}, select: (e) => {
  let { items: n, value: t, selected: l } = e;
  for (const o of n)
    t ? l.add(o.value) : l.delete(o.value);
  return l;
}, selectAll: (e) => {
  let { value: n, allItems: t, selected: l } = e;
  return gr.select({ items: t, value: n, selected: l });
} }, Ui = R({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: { type: Function, default: dt } }, "DataTable-select"), yr = Symbol.for("vuetify:data-table-selection");
function hr(e, n) {
  let { allItems: t, currentPage: l } = n;
  const o = me(e, "modelValue", e.modelValue, (p) => new Set(Fe(p).map((b) => {
    var u;
    return ((u = t.value.find((h) => e.valueComparator(b, h.value))) == null ? void 0 : u.value) ?? b;
  })), (p) => [...p.values()]), a = g(() => t.value.filter((p) => p.selectable)), r = g(() => l.value.filter((p) => p.selectable)), s = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return qi;
      case "all":
        return gr;
      default:
        return mr;
    }
  });
  function i(p) {
    return Fe(p).every((b) => o.value.has(b.value));
  }
  function c(p, b) {
    const u = s.value.select({ items: p, value: b, selected: new Set(o.value) });
    o.value = u;
  }
  const m = g(() => o.value.size > 0), f = g(() => {
    const p = s.value.allSelected({ allItems: a.value, currentPage: r.value });
    return !!p.length && i(p);
  }), d = { toggleSelect: function(p) {
    c([p], !i([p]));
  }, select: c, selectAll: function(p) {
    const b = s.value.selectAll({ value: p, allItems: a.value, currentPage: r.value, selected: new Set(o.value) });
    o.value = b;
  }, isSelected: i, isSomeSelected: function(p) {
    return Fe(p).some((b) => o.value.has(b.value));
  }, someSelected: m, allSelected: f, showSelectAll: s.value.showSelectAll };
  return be(yr, d), d;
}
function Il() {
  const e = fe(yr);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const Yi = R({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), br = Symbol.for("vuetify:data-table-sort");
function Sr(e) {
  return { sortBy: me(e, "sortBy"), mustSort: X(e, "mustSort"), multiSort: X(e, "multiSort") };
}
function xr(e) {
  const { sortBy: n, mustSort: t, multiSort: l, page: o } = e, a = { sortBy: n, toggleSort: (r) => {
    if (r.key == null)
      return;
    let s = n.value.map((c) => ({ ...c })) ?? [];
    const i = s.find((c) => c.key === r.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((c) => c.key !== r.key) : i.order = "desc" : s = l.value ? [...s, { key: r.key, order: "asc" }] : [{ key: r.key, order: "asc" }], n.value = s, o && (o.value = 1);
  }, isSorted: function(r) {
    return !!n.value.find((s) => s.key === r.key);
  } };
  return be(br, a), a;
}
function Xi(e, n, t, l) {
  const o = ft();
  return { sortedItems: g(() => t.value.length ? function(r, s, i, c) {
    const m = new Intl.Collator(i, { sensitivity: "accent", usage: "sort" });
    return [...r].sort((f, d) => {
      for (let p = 0; p < s.length; p++) {
        const b = s[p].key, u = s[p].order ?? "asc";
        if (u === !1)
          continue;
        let h = Lt(f.raw, b), S = Lt(d.raw, b);
        if (u === "desc" && ([h, S] = [S, h]), c == null ? void 0 : c[b]) {
          const B = c[b](h, S);
          if (!B)
            continue;
          return B;
        }
        if (h instanceof Date && S instanceof Date)
          return h.getTime() - S.getTime();
        if ([h, S] = [h, S].map((B) => B != null ? B.toString().toLocaleLowerCase() : B), h !== S)
          return Zt(h) && Zt(S) ? 0 : Zt(h) ? -1 : Zt(S) ? 1 : isNaN(h) || isNaN(S) ? m.compare(h, S) : Number(h) - Number(S);
      }
      return 0;
    });
  }(n.value, t.value, o.current.value, { ...e.customKeySort, ...l == null ? void 0 : l.value }) : n.value) };
}
const _n = R({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), xl = J()({ name: "VDataTableFooter", props: _n(), setup(e, n) {
  let { slots: t } = n;
  const { t: l } = ft(), { page: o, pageCount: a, startIndex: r, stopIndex: s, itemsLength: i, itemsPerPage: c, setItemsPerPage: m } = function() {
    const d = fe(pr);
    if (!d)
      throw new Error("Missing pagination!");
    return d;
  }(), f = g(() => e.itemsPerPageOptions.map((d) => typeof d == "number" ? { value: d, title: d === -1 ? l("$vuetify.dataFooter.itemsPerPageAll") : String(d) } : { ...d, title: l(d.title) }));
  return () => {
    var d;
    return v("div", { class: "v-data-table-footer" }, [(d = t.prepend) == null ? void 0 : d.call(t), v("div", { class: "v-data-table-footer__items-per-page" }, [v("span", null, [l(e.itemsPerPageText)]), v(Ri, { items: f.value, modelValue: c.value, "onUpdate:modelValue": (p) => m(Number(p)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), v("div", { class: "v-data-table-footer__info" }, [v("div", null, [l(e.pageText, i.value ? r.value + 1 : 0, s.value, i.value)])]), v("div", { class: "v-data-table-footer__pagination" }, [v(wt, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": l(e.firstPageLabel) }, null), v(wt, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": l(e.prevPageLabel) }, null), e.showCurrentPage && v("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), v(wt, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(a.value, o.value + 1), disabled: o.value === a.value, "aria-label": l(e.nextPageLabel) }, null), v(wt, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = a.value, disabled: o.value === a.value, "aria-label": l(e.lastPageLabel) }, null)])]);
  };
} }), Fn = (_o = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Gl = (e, n) => {
  let { slots: t } = n;
  const l = e.tag ?? "td";
  return v(l, { class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: ee(e.height), width: ee(e.width), left: ee(e.fixedOffset || null) } }, { default: () => {
    var o;
    return [(o = t.default) == null ? void 0 : o.call(t)];
  } });
}, Gl.props = _o, Gl);
var _o, Gl;
const Ji = R({ headers: Array }, "DataTable-header"), wr = Symbol.for("vuetify:data-table-headers"), kr = { title: "", sortable: !1 }, Zi = { ...kr, width: 48 };
function rn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (e.children)
    for (const t of e.children)
      rn(t, n);
  else
    n.push(e);
  return n;
}
function Cr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && Cr(t.children, n);
  return n;
}
function Qi(e) {
  if (e.key)
    return e.key === "data-table-group" ? kr : ["data-table-expand", "data-table-select"].includes(e.key) ? Zi : void 0;
}
function $n(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => $n(t, n + 1))) : n;
}
function eu(e, n) {
  const t = [];
  let l = 0;
  const o = function() {
    const a = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((r) => ({ element: r, priority: 0 }));
    return { enqueue: (r, s) => {
      let i = !1;
      for (let c = 0; c < a.length; c++)
        if (a[c].priority > s) {
          a.splice(c, 0, { element: r, priority: s }), i = !0;
          break;
        }
      i || a.push({ element: r, priority: s });
    }, size: () => a.length, count: () => {
      let r = 0;
      if (!a.length)
        return 0;
      const s = Math.floor(a[0].priority);
      for (let i = 0; i < a.length; i++)
        Math.floor(a[i].priority) === s && (r += 1);
      return r;
    }, dequeue: () => a.shift() };
  }(e);
  for (; o.size() > 0; ) {
    let a = o.count();
    const r = [];
    let s = 1;
    for (; a > 0; ) {
      const { element: i, priority: c } = o.dequeue(), m = n - l - $n(i);
      if (r.push({ ...i, rowspan: m ?? 1, colspan: i.children ? rn(i).length : 1 }), i.children)
        for (const f of i.children) {
          const d = c % 1 + s / Math.pow(10, l + 1);
          o.enqueue(f, l + m + d);
        }
      s += 1, a -= 1;
    }
    l += 1, t.push(r);
  }
  return { columns: e.map((a) => rn(a)).flat(), headers: t };
}
function Pr(e) {
  const n = [];
  for (const t of e) {
    const l = { ...Qi(t), ...t }, o = l.key ?? (typeof l.value == "string" ? l.value : null), a = l.value ?? o ?? null, r = { ...l, key: o, value: a, sortable: l.sortable ?? (l.key != null || !!l.sort), children: l.children ? Pr(l.children) : void 0 };
    n.push(r);
  }
  return n;
}
function Br(e, n) {
  const t = Y([]), l = Y([]), o = Y(), a = Y();
  Me(() => {
    var p, b, u;
    const s = (e.headers || Object.keys(e.items[0] ?? {}).map((h) => ({ key: h, title: Pt(h) }))).slice(), i = Cr(s);
    (p = n == null ? void 0 : n.groupBy) != null && p.value.length && !i.has("data-table-group") && s.unshift({ key: "data-table-group", title: "Group" }), (b = n == null ? void 0 : n.showSelect) != null && b.value && !i.has("data-table-select") && s.unshift({ key: "data-table-select" }), (u = n == null ? void 0 : n.showExpand) != null && u.value && !i.has("data-table-expand") && s.push({ key: "data-table-expand" });
    const c = Pr(s);
    (function(h) {
      let S = !1;
      function B(C) {
        if (C)
          if (arguments.length > 1 && arguments[1] !== void 0 && arguments[1] && (C.fixed = !0), C.fixed)
            if (C.children)
              for (let A = C.children.length - 1; A >= 0; A--)
                B(C.children[A], !0);
            else
              S ? isNaN(+C.width) && Xo(`Multiple fixed columns should have a static width (key: ${C.key})`) : C.lastFixed = !0, S = !0;
          else if (C.children)
            for (let A = C.children.length - 1; A >= 0; A--)
              B(C.children[A]);
          else
            S = !1;
      }
      for (let C = h.length - 1; C >= 0; C--)
        B(h[C]);
      function $(C) {
        let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (!C)
          return A;
        if (C.children) {
          C.fixedOffset = A;
          for (const I of C.children)
            A = $(I, A);
        } else
          C.fixed && (C.fixedOffset = A, A += parseFloat(C.width || "0") || 0);
        return A;
      }
      let k = 0;
      for (const C of h)
        k = $(C, k);
    })(c);
    const m = Math.max(...c.map((h) => $n(h))) + 1, f = eu(c, m);
    t.value = f.headers, l.value = f.columns;
    const d = f.headers.flat(1);
    o.value = d.reduce((h, S) => (S.sortable && S.key && S.sort && (h[S.key] = S.sort), h), {}), a.value = d.reduce((h, S) => (S.key && S.filter && (h[S.key] = S.filter), h), {});
  });
  const r = { headers: t, columns: l, sortFunctions: o, filterFunctions: a };
  return be(wr, r), r;
}
function Tl() {
  const e = fe(wr);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Ar = R({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: ve, default: "$sortAsc" }, sortDescIcon: { type: ve, default: "$sortDesc" }, ...Sn() }, "VDataTableHeaders"), wl = J()({ name: "VDataTableHeaders", props: Ar(), setup(e, n) {
  let { slots: t } = n;
  const { toggleSort: l, sortBy: o, isSorted: a } = function() {
    const $ = fe(br);
    if (!$)
      throw new Error("Missing sort!");
    return $;
  }(), { someSelected: r, allSelected: s, selectAll: i, showSelectAll: c } = Il(), { columns: m, headers: f } = Tl(), { loaderClasses: d } = xn(e);
  function p($, k) {
    if (e.sticky || $.fixed)
      return { position: "sticky", left: $.fixed ? ee($.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${k})` : void 0 };
  }
  function b($) {
    const k = o.value.find((C) => C.key === $.key);
    return k ? k.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: u, backgroundColorStyles: h } = Ze(e, "color"), S = g(() => ({ headers: f.value, columns: m.value, toggleSort: l, isSorted: a, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: i, getSortIcon: b })), B = ($) => {
    let { column: k, x: C, y: A } = $;
    const I = k.key === "data-table-select" || k.key === "data-table-expand";
    return v(Fn, Q({ tag: "th", align: k.align, class: ["v-data-table__th", { "v-data-table__th--sortable": k.sortable, "v-data-table__th--sorted": a(k), "v-data-table__th--fixed": k.fixed }, d.value], style: { width: ee(k.width), minWidth: ee(k.width), ...p(k, A) }, colspan: k.colspan, rowspan: k.rowspan, onClick: k.sortable ? () => l(k) : void 0, fixed: k.fixed, lastFixed: k.lastFixed, noPadding: I }, k.headerProps), { default: () => {
      var T;
      const _ = `header.${k.key}`, x = { column: k, selectAll: i, isSorted: a, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: b };
      return t[_] ? t[_](x) : k.key === "data-table-select" ? ((T = t["header.data-table-select"]) == null ? void 0 : T.call(t, x)) ?? (c && v(Ct, { modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": i }, null)) : v("div", { class: "v-data-table-header__content" }, [v("span", null, [k.title]), k.sortable && v(xe, { key: "icon", class: "v-data-table-header__sort-icon", icon: b(k) }, null), e.multiSort && a(k) && v("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...u.value], style: h.value }, [o.value.findIndex((w) => w.key === k.key) + 1])]);
    } });
  };
  ne(() => v(re, null, [t.headers ? t.headers(S.value) : f.value.map(($, k) => v("tr", null, [$.map((C, A) => v(B, { column: C, x: A, y: k }, null))])), e.loading && v("tr", { class: "v-data-table-progress" }, [v("th", { colspan: m.value.length }, [v(xa, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), tu = R({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), lu = J()({ name: "VDataTableGroupHeaderRow", props: tu(), setup(e, n) {
  let { slots: t } = n;
  const { isGroupOpen: l, toggleGroup: o, extractRows: a } = rr(), { isSelected: r, isSomeSelected: s, select: i } = Il(), { columns: c } = Tl(), m = g(() => a([e.item]));
  return () => v("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [c.value.map((f) => {
    var d, p;
    if (f.key === "data-table-group") {
      const b = l(e.item) ? "$expand" : "$next", u = () => o(e.item);
      return ((d = t["data-table-group"]) == null ? void 0 : d.call(t, { item: e.item, count: m.value.length, props: { icon: b, onClick: u } })) ?? v(Fn, { class: "v-data-table-group-header-row__column" }, { default: () => [v(wt, { size: "small", variant: "text", icon: b, onClick: u }, null), v("span", null, [e.item.value]), v("span", null, [rl("("), m.value.length, rl(")")])] });
    }
    if (f.key === "data-table-select") {
      const b = r(m.value), u = s(m.value) && !b, h = (S) => i(m.value, S);
      return ((p = t["data-table-select"]) == null ? void 0 : p.call(t, { props: { modelValue: b, indeterminate: u, "onUpdate:modelValue": h } })) ?? v("td", null, [v(Ct, { modelValue: b, indeterminate: u, "onUpdate:modelValue": h }, null)]);
    }
    return v("td", null, null);
  })]);
} }), nu = R({ index: Number, item: Object, cellProps: [Object, Function], onClick: De(), onContextmenu: De(), onDblclick: De() }, "VDataTableRow"), ou = J()({ name: "VDataTableRow", props: nu(), setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, toggleSelect: o } = Il(), { isExpanded: a, toggleExpand: r } = lr(), { columns: s } = Tl();
  ne(() => v("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }], onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && s.value.map((i, c) => {
    const m = e.item, f = `item.${i.key}`, d = { index: e.index, item: m.raw, internalItem: m, value: Lt(m.columns, i.key), column: i, isSelected: l, toggleSelect: o, isExpanded: a, toggleExpand: r }, p = typeof e.cellProps == "function" ? e.cellProps({ index: d.index, item: d.item, internalItem: d.internalItem, value: d.value, column: i }) : e.cellProps, b = typeof i.cellProps == "function" ? i.cellProps({ index: d.index, item: d.item, internalItem: d.internalItem, value: d.value }) : i.cellProps;
    return v(Fn, Q({ align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, p, b), { default: () => {
      var u, h;
      return t[f] ? t[f](d) : i.key === "data-table-select" ? ((u = t["item.data-table-select"]) == null ? void 0 : u.call(t, d)) ?? v(Ct, { disabled: !m.selectable, modelValue: l([m]), onClick: ql(() => o(m), ["stop"]) }, null) : i.key === "data-table-expand" ? ((h = t["item.data-table-expand"]) == null ? void 0 : h.call(t, d)) ?? v(wt, { icon: a(m) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: ql(() => r(m), ["stop"]) }, null) : Ro(d.value);
    } });
  })]));
} }), _r = R({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, rowProps: [Object, Function], cellProps: [Object, Function] }, "VDataTableRows"), kl = J()({ name: "VDataTableRows", inheritAttrs: !1, props: _r(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { columns: o } = Tl(), { expandOnClick: a, toggleExpand: r, isExpanded: s } = lr(), { isSelected: i, toggleSelect: c } = Il(), { toggleGroup: m, isGroupOpen: f } = rr(), { t: d } = ft();
  return ne(() => {
    var p, b;
    return e.loading ? v("tr", { class: "v-data-table-rows-loading", key: "loading" }, [v("td", { colspan: o.value.length }, [((p = l.loading) == null ? void 0 : p.call(l)) ?? d(e.loadingText)])]) : e.loading || e.items.length || e.hideNoData ? v(re, null, [e.items.map((u, h) => {
      var $;
      if (u.type === "group") {
        const k = { index: h, item: u, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: c, toggleGroup: m, isGroupOpen: f };
        return l["group-header"] ? l["group-header"](k) : v(lu, Q({ key: `group-header_${u.id}`, item: u }, to(t, ":group-header", () => k)), l);
      }
      const S = { index: h, item: u.raw, internalItem: u, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: c }, B = { ...S, props: Q({ key: `item_${u.key ?? u.index}`, onClick: a.value ? () => {
        r(u);
      } : void 0, index: h, item: u, cellProps: e.cellProps }, to(t, ":row", () => S), typeof e.rowProps == "function" ? e.rowProps({ item: S.item, index: S.index, internalItem: S.internalItem }) : e.rowProps) };
      return v(re, { key: B.props.key }, [l.item ? l.item(B) : v(ou, B.props, l), s(u) && (($ = l["expanded-row"]) == null ? void 0 : $.call(l, S))]);
    })]) : v("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [v("td", { colspan: o.value.length }, [((b = l["no-data"]) == null ? void 0 : b.call(l)) ?? d(e.noDataText)])]);
  }), {};
} }), Fr = R({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...se(), ...Ke(), ...Ae(), ...we() }, "VTable"), Cl = J()({ name: "VTable", props: Fr(), setup(e, n) {
  let { slots: t, emit: l } = n;
  const { themeClasses: o } = Be(e), { densityClasses: a } = qe(e);
  return ne(() => v(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, o.value, a.value, e.class], style: e.style }, { default: () => {
    var r, s, i;
    return [(r = t.top) == null ? void 0 : r.call(t), t.default ? v("div", { class: "v-table__wrapper", style: { height: ee(e.height) } }, [v("table", null, [t.default()])]) : (s = t.wrapper) == null ? void 0 : s.call(t), (i = t.bottom) == null ? void 0 : i.call(t)];
  } })), {};
} }), au = R({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function ru(e, n, t) {
  return n.map((l, o) => function(a, r, s, i) {
    const c = a.returnObject ? r : _e(r, a.itemValue), m = _e(r, a.itemSelectable, !0), f = i.reduce((d, p) => (p.key != null && (d[p.key] = _e(r, p.value)), d), {});
    return { type: "item", key: a.returnObject ? _e(r, a.itemValue) : c, index: s, value: c, selectable: m, columns: f, raw: r };
  }(e, l, o, t));
}
function $r(e, n) {
  return { items: g(() => ru(e, e.items, n.value)) };
}
const Vr = R({ ..._r(), width: [String, Number], search: String, ...Gi(), ...Ki(), ...Ji(), ...au(), ...Ui(), ...Yi(), ...Ar(), ...Fr() }, "DataTable"), su = R({ ...dr(), ...Vr(), ...zi(), ..._n() }, "VDataTable"), iu = J()({ name: "VDataTable", props: su(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { groupBy: o } = or(e), { sortBy: a, multiSort: r, mustSort: s } = Sr(e), { page: i, itemsPerPage: c } = vr(e), { columns: m, headers: f, sortFunctions: d, filterFunctions: p } = Br(e, { groupBy: o, showSelect: X(e, "showSelect"), showExpand: X(e, "showExpand") }), { items: b } = $r(e, m), u = X(e, "search"), { filteredItems: h } = Hi(e, b, u, { transform: (D) => D.columns, customKeyFilter: p }), { toggleSort: S } = xr({ sortBy: a, multiSort: r, mustSort: s, page: i }), { sortByWithGroups: B, opened: $, extractRows: k, isGroupOpen: C, toggleGroup: A } = ar({ groupBy: o, sortBy: a }), { sortedItems: I } = Xi(e, h, B, d), { flatItems: _ } = ur(I, o, $), x = g(() => _.value.length), { startIndex: T, stopIndex: w, pageCount: M, setItemsPerPage: N } = fr({ page: i, itemsPerPage: c, itemsLength: x }), { paginatedItems: W } = function(D) {
    const { items: O, startIndex: H, stopIndex: U, itemsPerPage: le } = D;
    return { paginatedItems: g(() => le.value <= 0 ? O.value : O.value.slice(H.value, U.value)) };
  }({ items: _, startIndex: T, stopIndex: w, itemsPerPage: c }), q = g(() => k(W.value)), { isSelected: F, select: L, selectAll: j, toggleSelect: K, someSelected: P, allSelected: E } = hr(e, { allItems: b, currentPage: q }), { isExpanded: G, toggleExpand: z } = tr(e);
  cr({ page: i, itemsPerPage: c, sortBy: a, groupBy: o, search: u }), vt({ VDataTableRows: { hideNoData: X(e, "hideNoData"), noDataText: X(e, "noDataText"), loading: X(e, "loading"), loadingText: X(e, "loadingText") } });
  const V = g(() => ({ page: i.value, itemsPerPage: c.value, sortBy: a.value, pageCount: M.value, toggleSort: S, setItemsPerPage: N, someSelected: P.value, allSelected: E.value, isSelected: F, select: L, selectAll: j, toggleSelect: K, isExpanded: G, toggleExpand: z, isGroupOpen: C, toggleGroup: A, items: q.value.map((D) => D.raw), internalItems: q.value, groupedItems: W.value, columns: m.value, headers: f.value }));
  return ne(() => {
    const D = xl.filterProps(e), O = wl.filterProps(e), H = kl.filterProps(e), U = Cl.filterProps(e);
    return v(Cl, Q({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, U), { top: () => {
      var le;
      return (le = l.top) == null ? void 0 : le.call(l, V.value);
    }, default: () => {
      var le, pe, ge, ye, lt, je;
      return l.default ? l.default(V.value) : v(re, null, [(le = l.colgroup) == null ? void 0 : le.call(l, V.value), v("thead", null, [v(wl, O, l)]), (pe = l.thead) == null ? void 0 : pe.call(l, V.value), v("tbody", null, [(ge = l["body.prepend"]) == null ? void 0 : ge.call(l, V.value), l.body ? l.body(V.value) : v(kl, Q(t, H, { items: W.value }), l), (ye = l["body.append"]) == null ? void 0 : ye.call(l, V.value)]), (lt = l.tbody) == null ? void 0 : lt.call(l, V.value), (je = l.tfoot) == null ? void 0 : je.call(l, V.value)]);
    }, bottom: () => l.bottom ? l.bottom(V.value) : v(re, null, [v(xl, D, { prepend: l["footer.prepend"] })]) });
  }), {};
} }), uu = R({ itemsLength: { type: [Number, String], required: !0 }, ...dr(), ...Vr(), ..._n() }, "VDataTableServer"), cu = J()({ name: "VDataTableServer", props: uu(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { groupBy: o } = or(e), { sortBy: a, multiSort: r, mustSort: s } = Sr(e), { page: i, itemsPerPage: c } = vr(e), m = g(() => parseInt(e.itemsLength, 10)), { columns: f, headers: d } = Br(e, { groupBy: o, showSelect: X(e, "showSelect"), showExpand: X(e, "showExpand") }), { items: p } = $r(e, f), { toggleSort: b } = xr({ sortBy: a, multiSort: r, mustSort: s, page: i }), { opened: u, isGroupOpen: h, toggleGroup: S, extractRows: B } = ar({ groupBy: o, sortBy: a }), { pageCount: $, setItemsPerPage: k } = fr({ page: i, itemsPerPage: c, itemsLength: m }), { flatItems: C } = ur(p, o, u), { isSelected: A, select: I, selectAll: _, toggleSelect: x, someSelected: T, allSelected: w } = hr(e, { allItems: p, currentPage: p }), { isExpanded: M, toggleExpand: N } = tr(e), W = g(() => B(p.value));
  cr({ page: i, itemsPerPage: c, sortBy: a, groupBy: o, search: X(e, "search") }), be("v-data-table", { toggleSort: b, sortBy: a }), vt({ VDataTableRows: { hideNoData: X(e, "hideNoData"), noDataText: X(e, "noDataText"), loading: X(e, "loading"), loadingText: X(e, "loadingText") } });
  const q = g(() => ({ page: i.value, itemsPerPage: c.value, sortBy: a.value, pageCount: $.value, toggleSort: b, setItemsPerPage: k, someSelected: T.value, allSelected: w.value, isSelected: A, select: I, selectAll: _, toggleSelect: x, isExpanded: M, toggleExpand: N, isGroupOpen: h, toggleGroup: S, items: W.value.map((F) => F.raw), internalItems: W.value, groupedItems: C.value, columns: f.value, headers: d.value }));
  ne(() => {
    const F = xl.filterProps(e), L = wl.filterProps(e), j = kl.filterProps(e), K = Cl.filterProps(e);
    return v(Cl, Q({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, K), { top: () => {
      var P;
      return (P = l.top) == null ? void 0 : P.call(l, q.value);
    }, default: () => {
      var P, E, G, z, V, D;
      return l.default ? l.default(q.value) : v(re, null, [(P = l.colgroup) == null ? void 0 : P.call(l, q.value), v("thead", { class: "v-data-table__thead", role: "rowgroup" }, [v(wl, Q(L, { sticky: e.fixedHeader }), l)]), (E = l.thead) == null ? void 0 : E.call(l, q.value), v("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(G = l["body.prepend"]) == null ? void 0 : G.call(l, q.value), l.body ? l.body(q.value) : v(kl, Q(t, j, { items: C.value }), l), (z = l["body.append"]) == null ? void 0 : z.call(l, q.value)]), (V = l.tbody) == null ? void 0 : V.call(l, q.value), (D = l.tfoot) == null ? void 0 : D.call(l, q.value)]);
    }, bottom: () => l.bottom ? l.bottom(q.value) : v(xl, F, { prepend: l["footer.prepend"] }) });
  });
} }), Er = El.reduce((e, n) => (e[n] = { type: [Boolean, String, Number], default: !1 }, e), {}), Ir = El.reduce((e, n) => (e["offset" + Pt(n)] = { type: [String, Number], default: null }, e), {}), Tr = El.reduce((e, n) => (e["order" + Pt(n)] = { type: [String, Number], default: null }, e), {}), Fo = { col: Object.keys(Er), offset: Object.keys(Ir), order: Object.keys(Tr) };
function du(e, n, t) {
  let l = e;
  if (t != null && t !== !1)
    return n && (l += `-${n.replace(e, "")}`), e === "col" && (l = "v-" + l), (e !== "col" || t !== "" && t !== !0) && (l += `-${t}`), l.toLowerCase();
}
const pu = ["auto", "start", "end", "center", "baseline", "stretch"], vu = R({ cols: { type: [Boolean, String, Number], default: !1 }, ...Er, offset: { type: [String, Number], default: null }, ...Ir, order: { type: [String, Number], default: null }, ...Tr, alignSelf: { type: String, default: null, validator: (e) => pu.includes(e) }, ...se(), ...Ae() }, "VCol"), kt = J()({ name: "VCol", props: vu(), setup(e, n) {
  let { slots: t } = n;
  const l = g(() => {
    const o = [];
    let a;
    for (a in Fo)
      Fo[a].forEach((s) => {
        const i = e[s], c = du(a, s, i);
        c && o.push(c);
      });
    const r = o.some((s) => s.startsWith("v-col-"));
    return o.push({ "v-col": !r || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return Bt(e.tag, { class: [l.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), Vn = ["start", "end", "center"], Dr = ["space-between", "space-around", "space-evenly"];
function En(e, n) {
  return El.reduce((t, l) => (t[e + Pt(l)] = n(), t), {});
}
const fu = [...Vn, "baseline", "stretch"], Or = (e) => fu.includes(e), Lr = En("align", () => ({ type: String, default: null, validator: Or })), mu = [...Vn, ...Dr], Mr = (e) => mu.includes(e), Nr = En("justify", () => ({ type: String, default: null, validator: Mr })), gu = [...Vn, ...Dr, "stretch"], jr = (e) => gu.includes(e), Rr = En("alignContent", () => ({ type: String, default: null, validator: jr })), $o = { align: Object.keys(Lr), justify: Object.keys(Nr), alignContent: Object.keys(Rr) }, yu = { align: "align", justify: "justify", alignContent: "align-content" };
function hu(e, n, t) {
  let l = yu[e];
  if (t != null)
    return n && (l += `-${n.replace(e, "")}`), l += `-${t}`, l.toLowerCase();
}
const bu = R({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Or }, ...Lr, justify: { type: String, default: null, validator: Mr }, ...Nr, alignContent: { type: String, default: null, validator: jr }, ...Rr, ...se(), ...Ae() }, "VRow"), Wr = J()({ name: "VRow", props: bu(), setup(e, n) {
  let { slots: t } = n;
  const l = g(() => {
    const o = [];
    let a;
    for (a in $o)
      $o[a].forEach((r) => {
        const s = e[r], i = hu(a, r, s);
        i && o.push(i);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return Bt(e.tag, { class: ["v-row", l.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), Su = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function xu(e) {
  return v("div", { class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`] }, [arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []]);
}
function Vo(e) {
  const [n, t] = e.split("@");
  return Array.from({ length: t }).map(() => Dl(n));
}
function Dl(e) {
  let n = [];
  if (!e)
    return n;
  const t = Su[e];
  if (e !== t) {
    if (e.includes(","))
      return Eo(e);
    if (e.includes("@"))
      return Vo(e);
    t.includes(",") ? n = Eo(t) : t.includes("@") ? n = Vo(t) : t && n.push(Dl(t));
  }
  return [xu(e, n)];
}
function Eo(e) {
  return e.replace(/\s/g, "").split(",").map(Dl);
}
const wu = R({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...mt(), ...Ft(), ...we() }, "VSkeletonLoader"), ku = J()({ name: "VSkeletonLoader", props: wu(), setup(e, n) {
  let { slots: t } = n;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ze(X(e, "color")), { dimensionStyles: a } = gt(e), { elevationClasses: r } = $t(e), { themeClasses: s } = Be(e), { t: i } = ft(), c = g(() => Dl(Fe(e.type).join(",")));
  return ne(() => {
    var f;
    const m = !t.default || e.loading;
    return v("div", { class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, m ? a.value : {}], "aria-busy": e.boilerplate ? void 0 : m, "aria-live": e.boilerplate ? void 0 : "polite", "aria-label": e.boilerplate ? void 0 : i(e.loadingText), role: e.boilerplate ? void 0 : "alert" }, [m ? c.value : (f = t.default) == null ? void 0 : f.call(t)]);
  }), {};
} }), Pl = { background: "--v-theme-surface", border: "transparent", color: "--v-theme-on-surface" }, zr = { colorPercentageChange: 15, colorPercentageDirection: "desc", colors: () => ({ default: Pl, footer: { background: void 0, color: void 0 }, header: { background: void 0, color: void 0 }, percentageChange: 15, percentageDirection: "desc" }), columnWidths: () => [], defaultColors: () => Pl, density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footerBackgroundColor: void 0, footerColor: void 0, footers: () => [], headerBackgroundColor: void 0, headerColor: void 0, height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 0, searchEvents: () => ({}), searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }, Cu = Qe({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (n, t) => de(n.$slots, "bottom") }), oe = "v-drilldown-table";
function Io(e, n, t = "") {
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
function Pu(e, n, t = "") {
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
      return o != null && s && typeof s == "string" ? o[s] !== void 0 ? o[s] : (s = s.replace(/\[(\w+)\]/g, ".$1"), s = s.replace(/^\./, ""), Io(o, s.split("."), r)) : r;
    }(e, n, t);
  if (Array.isArray(n))
    return Io(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
const To = (e) => {
  const { id: n, sortBy: t } = e;
  if (t) {
    const l = t.find((o) => o.key === n);
    if (l)
      return l.order;
  }
}, Tt = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
};
function Hr(e) {
  const n = e.title, t = [n, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : n || "";
}
function Kl(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Ot(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (Kl(e) && Kl(t))
    for (const l in t)
      Kl(t[l]) ? (e[l] || Object.assign(e, { [l]: {} }), Ot(e[l], t[l])) : Object.assign(e, { [l]: t[l] });
  return Ot(e, ...n);
}
const Gr = (e) => {
  const { align: n } = e;
  return { "d-flex align-center": !0, [`justify-${n}`]: n, "justify-start": !n };
}, Kr = (e) => {
  const { level: n } = e;
  return { "d-flex": !0, [`${oe}--header-select-all-checkbox`]: !0, [`${oe}--header-select-all-checkbox-${n}`]: !0 };
};
function qr(e) {
  return e === "transparent" || e === "none" || e === "inherit" || e === "currentColor" || e === "initial" || e === "unset";
}
function Ur(e) {
  return e.includes("--v-theme");
}
const Yr = (e, n) => {
  if (qr(e))
    return e;
  if (Ur(e))
    return `rgb(var(${e}))`;
  const t = function(l, o) {
    const a = o.global.current.value.colors;
    return Object.entries(a).find(([r]) => r === l);
  }(e, n);
  return t ? `hsl(${Bl(t[1])})` : `hsl(${Bl(e)})`;
}, Bu = (e) => {
  const { colors: n, level: t, prop: l = "default", theme: o, type: a } = e, r = { ...n[l] }, s = n == null ? void 0 : n.percentageDirection;
  if (r === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${l}' does not exist`);
  let i = ((c, m, f) => {
    let d = 100, p = (c == null ? void 0 : c.percentageChange) ?? 0;
    return isNaN(p) && (d = 100), p *= m, f !== "desc" && f !== "descending" || (d = 100 - p), f !== "asc" && f !== "ascending" || (d = 0 + p), d < 0 && (d = 0), d > 100 && (d = 100), isNaN(d) && (d = 100), d;
  })(n, t - 1, s);
  return a || Object.entries(r).forEach(([c, m]) => {
    let f = o.global.current.value.colors[m] ?? m;
    if (f || (f = n.default[c] ?? "transparent", f = Yr(f, o)), qr(f))
      return void (r[c] = f);
    if ((c === "color" || t === 0 && s === "asc") && (i = 100), Ur(f))
      return void (r[c] = `rgb(var(${f}))`);
    const d = `/ ${i}%`, p = Bl(f);
    if (p.includes("/"))
      return r[c] = `hsl(${p})`;
    r[c] = `hsl(${Bl(f)} ${d})`;
  }), r;
};
function Bl(e) {
  let n = function(m) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let d = m;
    return Object.entries(f).forEach(([p, b]) => {
      m.toLowerCase() != p.toLowerCase() || (d = b);
    }), d;
  }(e), t = 0, l = 0, o = 0, a = 0, r = 0, s = 0;
  if (n.substring(0, 1) === "#")
    n = function(m) {
      let f = m.replace("#", "");
      f.length === 3 && (f = f.split("").map((u) => u + u).join(""));
      const d = parseInt(f.substring(0, 2), 16), p = parseInt(f.substring(2, 4), 16), b = parseInt(f.substring(4, 6), 16);
      return [d, p, b];
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
const In = (e) => {
  const { colors: n, level: t, prop: l = "default", themeColors: o, type: a = null } = e;
  if (typeof n != "object" || n == null)
    return {};
  const r = Bu({ colors: n, level: t, prop: l, theme: o, type: a });
  return a ? r[a] : r;
}, Au = ["colspan"], _u = Qe({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const n = _l(), t = e, l = g(() => ((S) => {
    const { isLinearOnly: B, loaderHeight: $ } = S;
    let k = { height: 0, minHeight: 0 };
    return y(B) && (k = { height: y($), minHeight: y($) }), k;
  })({ isLinearOnly: c, loaderHeight: i })), o = g(() => ((S) => {
    const { isLinearOnly: B, loaderHeight: $ } = S;
    return y(B) ? { height: y($), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: c, loaderHeight: i })), a = g(() => ((S) => {
    const { isLinearOnly: B } = S;
    return { [`${oe}--loader-tr`]: !0, [`${oe}--loader-tr-not-linear`]: !y(B), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: c })), r = g(() => ({ [`${oe}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), s = g(() => {
    var S;
    return ((S = t.loaderProps) == null ? void 0 : S.linear) ?? {};
  }), i = g(() => {
    var S, B;
    return function($) {
      return Tt({ str: $ }) || "2px";
    }(((B = (S = t.loaderProps) == null ? void 0 : S.linear) == null ? void 0 : B.height) || "2px");
  }), c = g(() => {
    let S = !1;
    return t.loaderType !== null && t.loaderType !== !1 && (S = function(B) {
      let $ = !1;
      return B === "linear" && ($ = !0), Array.isArray(B) && ($ = B.length === 1 && B[0] === "linear"), $;
    }(t.loaderType)), S;
  }), m = g(() => {
    var S;
    return ((S = t.loaderProps) == null ? void 0 : S.circular) ?? {};
  }), f = g(() => {
    var S;
    return ((S = t.loaderProps) == null ? void 0 : S.skelton) ?? {};
  }), d = g(() => t.loading), p = g(() => {
    var B, $;
    let S = (($ = (B = t.loaderProps) == null ? void 0 : B.text) == null ? void 0 : $.color) ?? "surface-variant";
    return S = Yr(S, n), { color: S };
  }), b = g(() => t.loadingText || "Loading..."), u = (S) => {
    const B = t.loaderType;
    return Array.isArray(B) ? B.indexOf(S) : 1;
  }, h = (S) => {
    const B = t.loaderType;
    return S === t.loaderType || !!Array.isArray(B) && B.includes(S);
  };
  return (S, B) => (Z(), ce("tr", { class: ue(y(a)), style: Ie(y(l)) }, [We("td", { class: "px-0 ma-0", colspan: S.colspan, style: Ie(y(o)) }, [S.loading ? (Z(), he(Wr, { key: 0, class: ue(y(r)), "no-gutters": "" }, { default: ie(() => [h("linear") ? (Z(), he(kt, { key: 0, class: "pa-0 ma-0", order: u("linear") }, { default: ie(() => [v(Sa, ke(Oe(y(s))), null, 16)]), _: 1 }, 8, ["order"])) : Se("", !0), h("circular") ? (Z(), he(kt, { key: 1, class: "pa-0 my-2", order: u("circular") }, { default: ie(() => [v(ya, ke(Oe(y(m))), null, 16)]), _: 1 }, 8, ["order"])) : Se("", !0), h("skelton") ? (Z(), he(kt, { key: 2, class: "pa-0 ma-0", order: u("skelton") }, { default: ie(() => [v(ku, Q(y(f), { loading: y(d) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : Se("", !0), h("text") ? (Z(), he(kt, { key: 3, class: "my-2", order: u("text"), style: Ie(y(p)) }, { default: ie(() => [rl(Ro(y(b)), 1)]), _: 1 }, 8, ["order", "style"])) : Se("", !0)]), _: 1 }, 8, ["class"])) : Se("", !0)], 12, Au)], 6));
} }), Tn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of n)
    t[l] = o;
  return t;
}, Fu = Tn(_u, [["__scopeId", "data-v-fbedf16d"]]), $u = ["colspan"], Vu = ["colspan", "innerHTML"], Eu = ["colspan"], Iu = ["colspan", "innerHTML"], Tu = ["colspan", "onClick"], Du = ["innerHTML"], Ou = Qe({ __name: "HeadersSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, headerBackgroundColor: {}, headerColor: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: n }) {
  const t = Ht(), l = n, o = e, a = Y(), r = fe(Symbol.for("vuetify:icons")), s = Y(!1), i = Y(o.items), c = Y(o.matchColumnWidths), m = Y(o.columnWidths || []), f = Y(o.sortAscIcon), d = g(() => o.tableModelValue), p = _l(), b = g(() => function() {
    const x = o.slotProps.columns;
    if (o.level <= 1 || !c.value)
      return x;
    if (m.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(x).forEach(([T]) => {
      Object.keys(x).length !== parseInt(T) + 1 && x[T].width === void 0 && (x[T].width = m.value[parseInt(T)]);
    }), x;
  }());
  te(() => o.items, (x) => {
    i.value = x, a.value = (x == null ? void 0 : x.filter((T) => T.selectable)) ?? [], a.value = x == null ? void 0 : x.filter((T) => T.selectable !== !1);
  });
  const u = g(() => ((x) => {
    const { level: T } = x;
    return { [`${oe}--header-row`]: !0, [`${oe}--header-row-${T}`]: !0 };
  })({ level: o.level })), h = (x, T = "") => ((w) => {
    const { column: M, level: N, slotName: W = "" } = w;
    return { [`${oe}--header-row-th`]: !0, [`${oe}--header-row-th-${W}`]: W !== "", [`${oe}--header-row-th-${W}-${N}`]: W, [`${oe}--header-row-th-${N}`]: !0, [`${oe}--header-row-th-sortable`]: M.sortable, [`${oe}--header-row-th-sortable-default-color`]: M.sortable, [`${M.cellClass}`]: M.cellClass };
  })({ column: x, level: o.level, slotName: T }), S = g(() => {
    const x = o.colors;
    return x && (x.header = { background: o.headerBackgroundColor, color: o.headerColor }, x.percentageChange = o.colorPercentageChange, x.percentageDirection = o.colorPercentageDirection), x;
  }), B = (x, T = !1) => ((w) => {
    const { colors: M, column: N, dataTableExpand: W = !1, level: q, theme: F } = w, L = { minWidth: N.width ? Tt({ str: N.width }) : "auto", width: N.width ? Tt({ str: N.width }) : "auto" };
    W && !N.width && (L.width = N.width ? Tt({ str: N.width }) : "56px", L.minWidth = N.width ? Tt({ str: N.width }) : "56px");
    const j = In({ colors: M, level: q, prop: "header", themeColors: F });
    return L.backgroundColor = j.background, L.color = j.color, L;
  })({ colors: S.value, column: x, dataTableExpand: T, level: o.level, theme: p }), $ = g(() => {
    var x;
    return !o.slotProps.allSelected && ((x = d == null ? void 0 : d.value) == null ? void 0 : x.length) !== 0;
  });
  function k() {
    s.value = !s.value, o.slotProps.selectAll(s.value), l("click:selectAll", s.value);
  }
  te(() => o.slotProps.allSelected, (x) => {
    s.value = x;
  }), te(() => o.slotProps.someSelected, () => {
    if (o.slotProps.allSelected)
      return !1;
  });
  const C = g(() => Kr({ level: o.level })), A = (x) => ((T) => {
    const { iconOptions: w, key: M, level: N, sortBy: W } = T;
    return { "fa-fw": (w == null ? void 0 : w.defaultSet) === "fa", "mx-1": !0, [`${oe}--header-row-th-sortable-sort-icon`]: !0, [`${oe}--header-row-th-sortable-sort-icon-${N}`]: !0, [`${oe}--header-row-th-sortable-sort-icon-desc`]: To({ id: M, sortBy: W }) === "desc", [`${oe}--header-row-th-sortable-sort-icon-asc`]: To({ id: M, sortBy: W }) === "asc" };
  })({ iconOptions: r, key: x, level: o.level, sortBy: o.sortBy }), I = g(() => (r == null ? void 0 : r.defaultSet) === "fa" ? "small" : (f.value = (o == null ? void 0 : o.sortAscIcon) ?? "$sortAsc", "default"));
  function _(x) {
    return Hr(x);
  }
  return (x, T) => (Z(), ce(re, null, [We("tr", { class: ue(y(u)) }, [(Z(!0), ce(re, null, Re(y(b), (w) => {
    return Z(), ce(re, { key: w }, [y(t)[`column.${w.key}`] ? (Z(), ce("th", { key: 0, class: ue(h(w, w.key)), colspan: w.colspan || 1, style: Ie(B(w, !0)) }, [de(x.$slots, `column.${w.key}`, { column: w }, void 0, !0)], 14, $u)) : w.key === "data-table-group" || w.key === "data-table-group" ? (Z(), ce("th", { key: 1, class: ue(h(w, "header-data-table-group")), colspan: w.colspan || 1, style: Ie(B(w, !0)), innerHTML: _(w) }, null, 14, Vu)) : w.key === "data-table-select" || w.key === "data-table-select" && x.showSelect ? (Z(), ce("th", { key: 2, class: ue(h(w, "header-data-table-select")), colspan: w.colspan || 1, style: Ie(B(w, !0)) }, [x.selectStrategy !== "single" ? (Z(), he(Bn, { key: 0, class: ue(y(C)), density: x.density, focused: !1, indeterminate: y($), "model-value": y(s), "onUpdate:modelValue": k }, null, 8, ["class", "density", "indeterminate", "model-value"])) : Se("", !0)], 14, Eu)) : w.key === "data-table-expand" ? (Z(), ce("th", { key: 3, class: ue(h(w, "data-table-expand")), colspan: w.colspan || 1, style: Ie(B(w, !0)), innerHTML: _(w) }, null, 14, Iu)) : (Z(), ce("th", { key: 4, class: ue(h(w)), colspan: w.colspan || 1, style: Ie(B(w)), onClick: (N) => function(W) {
      W.sortable && o.slotProps.toggleSort(W);
    }(w) }, [We("div", { class: ue((M = w.align, Gr({ align: M }))) }, [We("span", { innerHTML: _(w) }, null, 8, Du), w.sortable && y(t)["header.sortIcon"] ? (Z(), ce("span", { key: 0, class: ue(A(w.key)) }, [de(x.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : w.sortable ? (Z(), he(xe, { key: 1, class: ue(A(w.key)), icon: y(f), size: y(I) }, null, 8, ["class", "icon", "size"])) : Se("", !0)], 2)], 14, Tu))], 64);
    var M;
  }), 128))], 2), x.loaderSettings.loaderType && !y(t).loading ? (Z(), he(y(Fu), { key: 0, colors: x.colors, colspan: x.loaderSettings.colspan, height: x.loaderSettings.height, level: x.level, "loader-props": x.loaderProps, "loader-settings": x.loaderSettings, "loader-type": x.loaderSettings.loaderType, loading: x.loaderSettings.loading || !1, "loading-text": x.loaderSettings.loadingText, size: x.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : Se("", !0)], 64));
} }), Lu = Tn(Ou, [["__scopeId", "data-v-a77e0096"]]), Mu = ["colspan"], Nu = ["colspan"], ju = ["colspan"], Ru = ["colspan"], Wu = ["innerHTML"], zu = Qe({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: n }) {
  const t = Ht(), l = n, o = e, a = fe(Symbol.for("vuetify:icons")), r = g(() => o.slotProps.columns), s = g(() => o.slotProps.index), i = g(() => o.slotProps.isExpanded), c = g(() => o.slotProps.item), m = g(() => o.slotProps.internalItem), f = g(() => o.slotProps.level), d = g(() => o.slotProps.toggleExpand), p = g(() => o.slotProps.toggleSelect), b = g(() => o.itemSelectable), u = g(() => ((k) => {
    const { expandOnClick: C, level: A, levels: I } = k;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": C && A < I, [`${oe}--body-row`]: !0, [`${oe}--body-row-${A}`]: !0 };
  })({ expandOnClick: o.expandOnClick, level: o.level, levels: o.levels })), h = (k) => ((C) => {
    const { column: A, elm: I, level: _ } = C;
    return { [`${oe}--${I}-row-td`]: !0, [`${oe}--${I}-row-td-${_}`]: !0, [`${A.cellClass}`]: A.cellClass };
  })({ column: k, elm: "body", level: o.level });
  function S(k) {
    const { isRow: C, internalItem: A, level: I, toggleExpand: _ } = k;
    if (!(o.level >= o.levels || o.expandOnClick && !C) && (!o.expandOnClick || C)) {
      if (k.$event) {
        if (!o.expandOnClick)
          return;
        l("click:row", k.$event);
      }
      I === o.level && _(A), l("update:expanded", k);
    }
  }
  const B = g(() => (a == null ? void 0 : a.defaultSet) === "fa" ? "x-small" : "default");
  function $(k, C) {
    return function(A, I) {
      if (!I.key)
        return "";
      const _ = Pu(A, I.key);
      return I.renderItem ? I.renderItem(_, A, I) : _;
    }(k, C);
  }
  return (k, C) => (Z(), ce("tr", { class: ue(y(u)), onClick: C[2] || (C[2] = (A) => S({ columns: y(r), index: y(s), isExpanded: y(i), isRow: !0, item: y(c), internalItem: y(m), level: y(f), toggleExpand: y(d), $event: A })) }, [(Z(!0), ce(re, null, Re(y(r), (A) => (Z(), ce(re, { key: A }, [k.$slots[`item.${A.key}`] ? (Z(), ce("td", { key: 0, class: ue(h(A)), colspan: A.colspan || 1 }, [de(k.$slots, `item.${A.key}`, { columns: y(r), index: y(s), item: y(c) }, void 0, !0)], 10, Mu)) : A.key === "data-table-select" || A.key === "data-table-select" && o.showSelect ? (Z(), ce("td", { key: 1, class: ue(h(A)), colspan: A.colspan || 1 }, [y(t)["item.data-table-select"] ? de(k.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : Se("", !0), v(Bn, { class: "d-flex v-simple-checkbox", density: k.density, disabled: y(c).selectable === !1 && y(b) === "selectable", "model-value": k.slotProps.isSelected([y(m)]), onClick: C[0] || (C[0] = ql((I) => function(_) {
    const { internalItem: x, item: T, toggleSelect: w } = _;
    w(x), l("click:row:checkbox", T);
  }({ columns: y(r), index: y(s), internalItem: y(m), item: y(c), level: y(f), toggleSelect: y(p) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, Nu)) : A.key === "data-table-expand" || A.key === "data-table-expand" && k.showExpand ? (Z(), ce("td", { key: 2, class: ue(h(A)), colspan: A.colspan || 1 }, [y(f) < k.levels ? (Z(), ce("div", { key: 0, class: ue(["v-drilldown-table--expand-icon", y(i)(y(m)) ? "rotate-180" : ""]), onClick: C[1] || (C[1] = (I) => S({ columns: y(r), index: y(s), isExpanded: y(i), item: y(c), internalItem: y(m), level: y(f), toggleExpand: y(d) })) }, [k.$slots["item.data-table-expand"] ? de(k.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (Z(), he(xe, { key: 1, icon: "$expand", size: y(B) }, null, 8, ["size"]))], 2)) : Se("", !0)], 10, ju)) : (Z(), ce("td", { key: 3, class: ue(h(A)), colspan: A.colspan || 1 }, [We("span", { innerHTML: $(y(c), A) }, null, 8, Wu)], 10, Ru))], 64))), 128))], 2));
} }), Hu = Tn(zu, [["__scopeId", "data-v-1f0d71af"]]), Gu = ["colspan"], Ku = ["colspan"], qu = ["colspan", "innerHTML"], Uu = ["colspan", "innerHTML"], Yu = ["colspan"], Xu = ["innerHTML"], Ju = Qe({ __name: "TfootSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, footerBackgroundColor: {}, footerColor: {}, footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: n }) {
  const t = Ht(), l = n, o = e, a = Y(), r = _l(), s = Y(!1), i = Y(o.items), c = g(() => o.tableModelValue), m = g(() => o.footers.length ? o.footers : o.slotProps.columns);
  te(() => o.items, (k) => {
    i.value = k, a.value = (k == null ? void 0 : k.filter((C) => C.selectable)) ?? [], a.value = k == null ? void 0 : k.filter((C) => C.selectable !== !1);
  });
  const f = g(() => ((k) => {
    const { level: C } = k;
    return { [`${oe}--tfoot`]: !0, [`${oe}--tfoot-${C}`]: !0 };
  })({ level: o.level })), d = g(() => ((k) => {
    const { level: C } = k;
    return { [`${oe}--tfoot-row`]: !0, [`${oe}--tfoot-row-${C}`]: !0 };
  })({ level: o.level })), p = (k, C = "") => ((A) => {
    const { column: I, level: _, slotName: x = "" } = A;
    return { [`${oe}--tfoot-row-td`]: !0, [`${oe}--tfoot-row-td-${x}`]: x !== "", [`${oe}--tfoot-row-td-${x}-${_}`]: x, [`${oe}--tfoot-row-td-${_}`]: !0, [`${I.cellClass}`]: I.cellClass };
  })({ column: k, level: o.level, slotName: C }), b = g(() => {
    const k = o.colors;
    return k && (k.footer = { background: o.footerBackgroundColor, color: o.footerColor }, k.percentageChange = o.colorPercentageChange, k.percentageDirection = o.colorPercentageDirection), k;
  }), u = g(() => ((k) => {
    const { colors: C, elm: A, level: I, theme: _ } = k, x = In({ colors: C, level: I, prop: A, themeColors: _ });
    return { backgroundColor: x.background, color: x.color };
  })({ colors: b.value, elm: "footer", footerColor: o.footerColor, level: o.level, theme: r })), h = g(() => {
    var k;
    return !o.slotProps.allSelected && ((k = c == null ? void 0 : c.value) == null ? void 0 : k.length) !== 0;
  });
  function S() {
    s.value = !s.value, o.slotProps.selectAll(s.value), l("click:selectAll", s.value);
  }
  te(() => o.slotProps.allSelected, (k) => {
    s.value = k;
  }), te(() => o.slotProps.someSelected, () => {
    if (o.slotProps.allSelected)
      return !1;
  });
  const B = g(() => Kr({ level: o.level }));
  function $(k) {
    return Hr(k);
  }
  return (k, C) => {
    var A;
    return (A = y(m)) != null && A.length ? (Z(), ce("tfoot", { key: 0, class: ue(y(f)) }, [We("tr", { class: ue(y(d)) }, [(Z(!0), ce(re, null, Re(y(m), (I) => {
      return Z(), ce(re, { key: I }, [y(t)[`tfoot.${I.key}`] ? (Z(), ce("th", { key: 0, class: ue(p(I, I.key)), colspan: I.colspan || 1, style: Ie(y(u)) }, [de(k.$slots, `tfoot.${I.key}`, { column: I })], 14, Gu)) : I.key === "data-table-select" ? (Z(), ce("th", { key: 1, class: ue(p(I, "tfoot-data-table-select")), colspan: I.colspan || 1, style: Ie(y(u)) }, [k.selectStrategy !== "single" ? (Z(), he(Bn, { key: 0, class: ue(y(B)), density: k.density, focused: !1, indeterminate: y(h), "model-value": y(s), "onUpdate:modelValue": S }, null, 8, ["class", "density", "indeterminate", "model-value"])) : Se("", !0)], 14, Ku)) : I.key === "data-table-expand" ? (Z(), ce("th", { key: 2, class: ue(p(I, "tfoot-data-table-expand")), colspan: I.colspan || 1, style: Ie(y(u)), innerHTML: $(I) }, null, 14, qu)) : I.renderFooterCell ? (Z(), ce("th", { key: 3, class: ue(p(I)), colspan: I.colspan || 1, style: Ie(y(u)), innerHTML: $(I) }, null, 14, Uu)) : (Z(), ce("th", { key: 4, class: ue(p(I)), colspan: I.colspan || 1, style: Ie(y(u)) }, [We("div", { class: ue((_ = I.align, Gr({ align: _ }))) }, [We("span", { innerHTML: $(I) }, null, 8, Xu)], 2)], 14, Yu))], 64);
      var _;
    }), 128))], 2)], 2)) : Se("", !0);
  };
} }), Zu = Qe({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchEvents: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: n }) {
  const t = Ht(), l = n, o = e, a = Y(""), r = Y(!0), s = g(() => o.items), i = g(() => ({ allSelected: o.slotProps.allSelected, columns: o.slotProps.columns, headers: o.slotProps.headers, items: s, itemsPerPage: o.slotProps.itemsPerPage, level: o.level, loading: o.loading, page: o.slotProps.page, pageCount: o.slotProps.pageCount, search: y(a), selectAll: c, setItemsPerPage: o.slotProps.setItemsPerPage, toggleSelectAll: m }));
  function c(p) {
    o.slotProps.selectAll(p), l("click:selectAll", p);
  }
  function m() {
    o.slotProps.selectAll(!o.slotProps.allSelected), l("click:selectAll", !o.slotProps.allSelected);
  }
  ct(() => {
    const p = document.querySelector(`[data-id="vdt-top-id-${o.level}"]`);
    (p == null ? void 0 : p.children.length) === 0 && (r.value = !1);
  }), te(a, () => {
    l("update:search", a.value);
  });
  const f = g(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...o.searchProps })), d = g(() => {
    const p = o.searchContainerCols ?? zr.searchContainerCols();
    return { [`${oe}--search-field`]: !0, [`v-col-${p.xs}`]: !0, [`v-col-sm-${p.sm}`]: !0, [`v-col-md-${p.md}`]: !0, [`v-col-lg-${p.lg}`]: !0, [`v-col-xl-${p.xl}`]: !0, [`v-col-xxl-${p.xxl}`]: !0 };
  });
  return (p, b) => y(t).top ? de(p.$slots, "top", ke(Q({ key: 0 }, y(i)))) : (p.showSearch || y(t)["top.left"] || y(t)["top.right"]) && y(r) ? (Z(), he(kt, { key: 1, lg: "12" }, { default: ie(() => [v(Wr, { "data-id": `vdt-top-id-${o.level}` }, { default: ie(() => [y(t)["top.left"] ? de(p.$slots, "top.left", ke(Q({ key: 0 }, y(i)))) : p.showSearch ? (Z(), he(kt, { key: 1, class: ue(["d-flex align-center justify-end", y(d)]) }, { default: ie(() => [p.showSearch ? (Z(), he(an, Q({ key: 0 }, y(f), { modelValue: y(a), "onUpdate:modelValue": b[0] || (b[0] = (u) => _t(a) ? a.value = u : null), class: "mt-0 pt-0" }, os(p.searchEvents)), null, 16, ["modelValue"])) : Se("", !0)]), _: 1 }, 8, ["class"])) : Se("", !0), y(t)["top.right"] ? de(p.$slots, "top.right", ke(Q({ key: 2 }, y(i)))) : Se("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : Se("", !0);
} });
function Do(e) {
  return typeof e == "function" ? e() : y(e);
}
const Oo = () => {
}, Qu = (e) => e();
function ec(e, n = {}) {
  let t, l, o = Oo;
  const a = (r) => {
    clearTimeout(r), o(), o = Oo;
  };
  return (r) => {
    const s = Do(e), i = Do(n.maxWait);
    return t && a(t), s <= 0 || i !== void 0 && i <= 0 ? (l && (a(l), l = null), Promise.resolve(r())) : new Promise((c, m) => {
      o = n.rejectOnCancel ? m : c, i && !l && (l = setTimeout(() => {
        t && a(t), l = null, c(r());
      }, i)), t = setTimeout(() => {
        l && a(l), l = null, c(r());
      }, s);
    });
  };
}
function tc(e, n, t = {}) {
  const { eventFilter: l = Qu, ...o } = t;
  return te(e, (a = l, r = n, function(...s) {
    return new Promise((i, c) => {
      Promise.resolve(a(() => r.apply(this, s), { fn: r, thisArg: this, args: s })).then(i).catch(c);
    });
  }), o);
  var a, r;
}
function Lo(e, n, t = {}) {
  const { debounce: l = 0, maxWait: o, ...a } = t;
  return tc(e, n, { ...a, eventFilter: ec(l, { maxWait: o }) });
}
const It = /* @__PURE__ */ new Map(), lc = Symbol("data"), nc = ["colspan"], Mo = Qe({ __name: "VDrilldownTable", props: rs({ colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, defaultColors: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footerBackgroundColor: {}, footerColor: {}, footers: {}, groupBy: {}, headerBackgroundColor: {}, headerColor: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchEvents: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { ...zr }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: n }) {
  const t = n, l = e, { colorPercentageChange: o, colorPercentageDirection: a, defaultColors: r, density: s, footerBackgroundColor: i, footerColor: c, headerBackgroundColor: m, headerColor: f } = sn(l), d = Ht(), p = ss(), b = ae(null);
  ct(() => {
    l.level === 1 && u.level !== 1 || u.server || x();
  }), dn(() => {
    b.value = Object.assign({}, l.server ? cu : iu);
  });
  let u = zt(Object.assign({}, l));
  u != null && u.colors && (u.colors.default = { ...Pl, ...r.value });
  const h = { ...l, ...u }, S = Y(p["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), B = Y(""), $ = _l(), k = g(() => u.sortBy), C = g(() => !!u.loading || u.hideNoData);
  (function(P, E, G) {
    const z = te(P, (...V) => ($e(() => z()), E(...V)), G);
  })(l, () => {
    l.level === 1 && u.level !== 1 || x(), u.itemsPerPage = l.itemsPerPage;
  }, { immediate: !1 }), te(() => l.items, () => {
    l.loading || x();
  }, { deep: !0 }), te(() => l.loading, () => {
    if (l.loading)
      return u.loading = l.loading, !1;
    x();
  }), Me(() => {
    u.colors && r.value && (u.colors.default = { ...Pl, ...r.value });
  });
  const A = (P) => {
    const E = u.loaderType;
    return !(P && (E === "skelton" || Array.isArray(E) && E.length === 1 && E[0] === "skelton" || !u.showDrilldownWhenLoading));
  }, I = g(() => ((P) => {
    const { elevation: E, fixedHeader: G, isDrilldown: z, isHover: V, isServerSide: D, level: O, separator: H } = P;
    return { [`${oe}--child`]: z, [`${oe}--fixed-header`]: G, [`${oe}--hover`]: V, [`${oe}--level-${O}`]: !0, [`${oe}--server`]: D, [`${oe}--separator-${H}`]: H, [`${oe}`]: !0, [`elevation-${E}`]: parseInt(E) > 0 };
  })({ elevation: u.elevation, fixedHeader: u.fixedHeader, isDrilldown: l.isDrilldown, isHover: u.hover, isServerSide: !1, level: u.level, separator: u.separator })), _ = g(() => ((P) => {
    const { colors: E, level: G, theme: z } = P;
    let V = {};
    typeof E == "object" && E !== null && (V = In({ colors: E, level: G, prop: "default", themeColors: z }));
    const D = { borderBottom: "none" };
    return V.border && (D.borderBottom = `1px solid ${V.border}`), D;
  })({ colors: u.colors, level: u.level, theme: $ }));
  function x() {
    var P;
    l.drilldown ? u = ((E) => {
      const { drilldown: G, item: z, level: V, levels: D, loadedDrilldown: O } = E;
      let H = O;
      const U = z;
      H = Ot(O, G);
      const le = (O.items || [{}]).find((pe) => {
        const ge = pe[O.drilldownKey];
        let ye = {};
        return U && (ye = U[O.drilldownKey]), ge === ye;
      });
      return H = Ot(O, le[O.itemChildrenKey]), D === V && (H.showExpand = !1), H;
    })({ drilldown: l.drilldown, item: l.item, level: l.level, levels: l.levels, loadedDrilldown: u, matchColumnWidths: l.matchColumnWidths }) : (u = Ot(u, l), l.matchColumnWidths && ((P = u == null ? void 0 : u.columnWidths) == null ? void 0 : P.length) === 0 && (u.columnWidths = ((E) => {
      const { tableId: G } = E, z = [], V = y(G), D = document.querySelectorAll(`[data-vdt-id="${V}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(D).length > 0)
        for (let O = 0; O < D.length; O += 1) {
          const H = D[O];
          z.push(H.offsetWidth);
        }
      return z;
    })({ tableId: S })));
  }
  function T(P) {
    let E = { ...h, ...u, ...P };
    l.server && (E = { ...u, ...h, ...P }), ((G) => {
      const { data: z, drilldownData: V, emit: D } = G;
      z.isExpanded(z.internalItem) && D("update:drilldown", V), D("update:expanded", z.item);
    })({ data: P, drilldownData: E, emit: t });
  }
  function w(P) {
    return { items: P.items, itemsPerPage: P.itemsPerPage, page: P.page, search: B.value, server: P.server, sortBy: P.sortBy };
  }
  const M = function(P) {
    const E = as();
    function G(D) {
      var O;
      const H = It.get(P) || /* @__PURE__ */ new Set();
      H.add(D), It.set(P, H);
      const U = () => z(D);
      return (O = E == null ? void 0 : E.cleanups) == null || O.push(U), U;
    }
    function z(D) {
      const O = It.get(P);
      O && (O.delete(D), O.size || V());
    }
    function V() {
      It.delete(P);
    }
    return { on: G, once: function(D) {
      return G(function O(...H) {
        z(O), D(...H);
      });
    }, off: z, emit: function(D, O) {
      var H;
      (H = It.get(P)) == null || H.forEach((U) => U(D, O));
    }, reset: V };
  }(lc), N = M.on(function(P) {
    l.level === 1 && P.drilldown.server && t("update:options", { ...P });
  });
  function W(P) {
    u.itemsPerPage = P;
    const E = w(u), G = { drilldown: { ...l, ...E, itemsPerPage: P }, itemsPerPage: P, name: "update:itemsPerPage" };
    M.emit(G), t("update:itemsPerPage", P);
  }
  function q(P) {
    u.page = P;
    const E = w(u), G = { drilldown: { ...l, ...E, page: P }, name: "update:page", page: P };
    M.emit(G), t("update:page", P);
  }
  is(() => {
    N();
  });
  const F = { debounce: u.searchDebounce, maxWait: u.searchMaxWait };
  function L() {
    d.top || d["top.left"] || (u.search = B.value), (d.top || d["top.left"]) && (B.value = l.search || "");
    const P = w(u), E = { drilldown: { ...l, ...P, search: B.value }, search: B.value };
    M.emit(E), t("update:search", E);
  }
  function j(P) {
    u.sortBy = P;
    const E = w(u), G = { drilldown: { ...l, ...E, sortBy: P }, name: "update:sortBy", sortBy: P };
    M.emit(G), t("update:sortBy", P);
  }
  function K() {
  }
  return Lo(() => l.search, () => {
    L();
  }, F), Lo(B, () => {
    d.top || d["top.left"] || L();
  }, F), (P, E) => {
    const G = us("VDrilldownTable", !0);
    return y(b) ? (Z(), he(jo(y(b)), Q({ key: 0 }, P.$attrs, { modelValue: y(u).modelValue, "onUpdate:modelValue": [E[5] || (E[5] = (z) => y(u).modelValue = z), K], class: y(I), "data-vdt-id": y(S), density: y(s), "expand-on-click": y(u).expandOnClick, expanded: y(u).expanded, "fixed-header": y(u).fixedHeader, "group-by": y(u).groupBy, headers: y(u).headers, height: y(u).height, "hide-no-data": y(C), hover: y(u).hover, "item-selectable": y(u).itemSelectable, "item-value": y(u).itemValue, items: y(u).items, "items-length": y(u).itemsLength, "items-per-page": y(u).itemsPerPage, "items-per-page-options": y(u).itemsPerPageOptions, loading: (!y(u).loaderType || y(d).loading) && y(u).loading, "multi-sort": y(u).multiSort, "must-sort": y(u).mustSort, "no-data-text": y(u).noDataText, page: y(u).page, "return-object": y(u).returnObject, search: y(B), "select-strategy": y(u).selectStrategy, "show-expand": y(u).showExpand, "sort-by": y(k), style: y(_), "onUpdate:itemsPerPage": W, "onUpdate:page": q, "onUpdate:sortBy": j }), nt({ top: ie((z) => [(Z(), he(y(Zu), { key: P.level, items: y(u).items, level: y(u).level, loading: y(u).loading, "search-container-cols": y(u).searchContainerCols, "search-events": y(u).searchEvents, "search-props": y(u).searchProps, "show-search": y(u).showSearch ?? !1, "slot-props": z, "onUpdate:search": E[0] || (E[0] = (V) => B.value = V) }, nt({ _: 2 }, [Re(y(d), (V, D) => ({ name: D, fn: ie((O) => [de(P.$slots, D, ke(Oe({ ...O })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-events", "search-props", "show-search", "slot-props"]))]), headers: ie((z) => [(Z(), he(y(Lu), { key: P.level, colorPercentageChange: y(o), colorPercentageDirection: y(a), colors: y(u).colors, "column-widths": y(u).columnWidths, density: y(s), headerBackgroundColor: y(m), headerColor: y(f), items: y(u).items, level: P.level, "loader-props": y(u).loaderProps, "loader-settings": { colspan: z.columns.length, loaderType: y(u).loaderType, loading: y(u).loading, loadingText: P.loadingText }, "match-column-widths": y(u).matchColumnWidths, "select-strategy": y(u).selectStrategy, "show-select": y(u).showSelect, "slot-props": { ...z }, "sort-asc-icon": y(u).sortAscIcon, "sort-by": y(u).sortBy, "table-model-value": y(u).modelValue }, nt({ _: 2 }, [Re(y(d), (V, D) => ({ name: D, fn: ie((O) => [de(P.$slots, D, ke(Oe({ ...O })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "column-widths", "density", "headerBackgroundColor", "headerColor", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: ie((z) => [(Z(), he(y(Hu), { key: P.level, density: y(s), "expand-on-click": y(u).expandOnClick, "group-by": y(u).groupBy, "item-selectable": y(u).itemSelectable, items: y(u).items, level: y(u).level, levels: y(u).levels, "show-expand": y(u).showExpand, "show-select": y(u).showSelect, "slot-props": { level: P.level, ...z }, "onClick:row": E[1] || (E[1] = (V) => {
      t("click:row", V);
    }), "onClick:row:checkbox": E[2] || (E[2] = (V) => {
      t("click:row:checkbox", V);
    }), "onUpdate:expanded": E[3] || (E[3] = (V) => T(V)) }, nt({ _: 2 }, [Re(y(d), (V, D) => ({ name: D, fn: ie((O) => [de(P.$slots, D, ke(Oe({ ...O })))]) }))]), 1032, ["density", "expand-on-click", "group-by", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": ie(({ columns: z, item: V, internalItem: D }) => {
      var O, H, U, le, pe, ge, ye, lt, je, Ue, Jt;
      return [We("tr", { class: ue(A((O = V[P.itemChildrenKey]) == null ? void 0 : O.loading) ? "" : "d-none") }, [We("td", { class: "px-0 ma-0", colspan: z.length, style: { "vertical-align": "top" } }, [(Z(), he(G, { key: D.key, "column-widths": y(u).columnWidths, defaultColors: y(r), density: y(s), drilldown: y(u), "footer-background-color": y(i), "footer-color": y(c), "header-background-color": y(m), "header-color": y(f), headers: (H = V[P.itemChildrenKey]) == null ? void 0 : H.headers, "is-drilldown": !0, item: V, items: (U = V[P.itemChildrenKey]) == null ? void 0 : U.items, "items-length": (le = V[P.itemChildrenKey]) == null ? void 0 : le.itemsLength, "items-per-page": (pe = V[P.itemChildrenKey]) == null ? void 0 : pe.itemsPerPage, level: P.level + 1, levels: y(u).levels, loaderProps: (ge = V[P.itemChildrenKey]) == null ? void 0 : ge.loaderProps, loaderType: (ye = V[P.itemChildrenKey]) == null ? void 0 : ye.loaderType, loading: (lt = V[P.itemChildrenKey]) == null ? void 0 : lt.loading, loadingText: P.loadingText, "match-column-widths": y(u).matchColumnWidths, "multi-sort": (je = V[P.itemChildrenKey]) == null ? void 0 : je.multiSort, "no-data-text": y(u).noDataText, server: (Ue = V[P.itemChildrenKey]) == null ? void 0 : Ue.server, "show-footer-row": (Jt = V[P.itemChildrenKey]) == null ? void 0 : Jt.showFooterRow, "sort-by": y(u).sortBy, "table-type": y(b), "onUpdate:drilldown": E[4] || (E[4] = (ht) => T(ht)), "onUpdate:modelValue": K }, nt({ default: ie(() => [(Z(!0), ce(re, null, Re(Object.keys(y(d)), (ht) => de(P.$slots, ht)), 256))]), _: 2 }, [Re(y(d), (ht, Dn) => ({ name: Dn, fn: ie((Xr) => [de(P.$slots, Dn, ke(Oe({ ...Xr })))]) }))]), 1032, ["column-widths", "defaultColors", "density", "drilldown", "footer-background-color", "footer-color", "header-background-color", "header-color", "headers", "item", "items", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "show-footer-row", "sort-by", "table-type"]))], 8, nc)], 2)];
    }), "footer.prepend": ie(() => [y(d)["footer.prepend"] ? de(P.$slots, "footer.prepend", { key: 0 }) : Se("", !0)]), _: 2 }, [y(d).loader ? { name: "loader", fn: ie(() => [de(P.$slots, "loader")]), key: "0" } : void 0, y(d).loading ? { name: "loading", fn: ie(() => [de(P.$slots, "loading")]), key: "1" } : void 0, y(d).thead ? { name: "thead", fn: ie((z) => [de(P.$slots, "thead", ke(Oe({ ...z, columnWidths: y(u).columnWidths, items: y(u).items, loaderSettings: { colspan: z.columns.length, loaderType: y(u).loaderType, loading: y(u).loading, loadingText: P.loadingText }, matchColumnWidths: y(u).matchColumnWidths, selectStrategy: y(u).selectStrategy, sortBy: y(u).sortBy })))]), key: "2" } : void 0, y(d).body ? { name: "body", fn: ie((z) => [de(P.$slots, "body", ke(Oe({ ...z })))]), key: "3" } : void 0, y(d)["group-header"] ? { name: "group-header", fn: ie((z) => [de(P.$slots, "group-header", ke(Oe({ ...z })))]), key: "4" } : void 0, y(d).tbody ? { name: "tbody", fn: ie((z) => [de(P.$slots, "tbody", ke(Oe({ ...z })))]), key: "5" } : void 0, y(d)["no-data"] ? { name: "no-data", fn: ie(() => [de(P.$slots, "no-data")]), key: "6" } : void 0, y(d).tfoot || P.showFooterRow ? { name: "tfoot", fn: ie((z) => [y(d).tfoot ? de(P.$slots, "tfoot", ke(Q({ key: 0 }, { ...z }))) : (Z(), he(y(Ju), { key: P.level, colorPercentageChange: y(o), colorPercentageDirection: y(a), colors: y(u).colors, density: y(s), footerBackgroundColor: y(i), footerColor: y(c), footers: y(u).footers || [], items: y(u).items, level: y(u).level, "select-strategy": y(u).selectStrategy, "show-select": y(u).showSelect, "slot-props": { ...z }, "table-model-value": y(u).modelValue }, nt({ _: 2 }, [Re(y(d), (V, D) => ({ name: D, fn: ie((O) => [de(P.$slots, D, ke(Oe({ ...O })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "density", "footerBackgroundColor", "footerColor", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "7" } : void 0, y(d).bottom ? { name: "bottom", fn: ie((z) => [(Z(), he(y(Cu), { key: P.level, "slot-props": z }, nt({ _: 2 }, [Re(y(d), (V, D) => ({ name: D, fn: ie((O) => [de(P.$slots, D, ke(Oe({ ...O })))]) }))]), 1032, ["slot-props"]))]), key: "8" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "fixed-header", "group-by", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : Se("", !0);
  };
} });
Mo.install = (e) => {
  e.component("VDrilldownTable", Mo);
};
export {
  Mo as default
};
(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".v-drilldown-table--loader-tr[data-v-fbedf16d]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-fbedf16d]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-fbedf16d]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-fbedf16d]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-a77e0096]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-a77e0096]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-a77e0096]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-a77e0096],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-a77e0096]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-a77e0096]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-a77e0096]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-a77e0096]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-a77e0096],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-a77e0096],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-a77e0096]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-a77e0096]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-1f0d71af]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgba(var(--v-border-color), var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-top:0!important;border-bottom:var(--vdt-border)}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{box-shadow:none}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>th{box-shadow:none!important}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>td{background:unset}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
