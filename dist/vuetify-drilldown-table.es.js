import { Fragment as pe, reactive as Xt, computed as m, watchEffect as Re, toRefs as gn, isVNode as cs, Comment as ds, capitalize as Ft, unref as b, warn as El, ref as J, provide as ke, inject as Se, shallowRef as de, defineComponent as rt, camelize as Xa, h as $t, getCurrentInstance as ps, onBeforeUnmount as Ze, watch as ae, readonly as mn, onScopeDispose as Le, effectScope as yn, toRaw as nt, TransitionGroup as vs, Transition as mt, createVNode as c, mergeProps as ee, onBeforeMount as hn, nextTick as Fe, withDirectives as Ge, resolveDirective as yt, vShow as Vt, isRef as It, onMounted as ht, toRef as q, Text as fs, resolveDynamicComponent as Ja, Teleport as gs, cloneVNode as ms, createTextVNode as vl, onBeforeUpdate as ys, withModifiers as en, toDisplayString as Za, renderSlot as be, openBlock as ne, createElementBlock as ye, normalizeClass as ge, normalizeStyle as Te, createElementVNode as Ke, createBlock as we, withCtx as fe, normalizeProps as _e, guardReactiveProps as We, createCommentVNode as Ce, useSlots as Jt, renderList as He, getCurrentScope as hs, mergeDefaults as bs, useAttrs as Ss, onUnmounted as xs, resolveComponent as ws, createSlots as dt } from "vue";
import { useTheme as Tl } from "vuetify";
/**
 * @name @wdns/vuetify-drilldown-table
 * @version 1.1.2
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
const ks = Symbol("data");
function O(e, n) {
  return (t) => Object.keys(e).reduce((l, a) => {
    const o = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return l[a] = t && a in t ? { ...o, default: t[a] } : o, n && !l[a].source && (l[a].source = n), l;
  }, {});
}
const ve = O({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Ee = typeof window < "u", bn = Ee && "IntersectionObserver" in window;
function Qa(e, n, t) {
  const l = n.length - 1;
  if (l < 0)
    return e === void 0 ? t : e;
  for (let a = 0; a < l; a++) {
    if (e == null)
      return t;
    e = e[n[a]];
  }
  return e == null || e[n[l]] === void 0 ? t : e[n[l]];
}
function st(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(n).length && t.every((l) => st(e[l], n[l]));
}
function zt(e, n, t) {
  return e != null && n && typeof n == "string" ? e[n] !== void 0 ? e[n] : Qa(e, (n = (n = n.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function De(e, n, t) {
  if (n === !0)
    return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean")
    return t;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const a = n(e, t);
    return a === void 0 ? t : a;
  }
  if (typeof n == "string")
    return zt(e, n, t);
  if (Array.isArray(n))
    return Qa(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
function al(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (t, l) => n + l);
}
function oe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function tn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function fl(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const qn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 }), Un = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function zl(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function eo(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const a of n)
    l.has(a) && (t[a] = e[a]);
  return t;
}
function Yn(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const o in e)
    n.some((s) => s instanceof RegExp ? s.test(o) : s === o) && !(t != null && t.some((s) => s === o)) ? l[o] = e[o] : a[o] = e[o];
  return [l, a];
}
function bt(e, n) {
  const t = { ...e };
  return n.forEach((l) => delete t[l]), t;
}
const to = /^on[^a-z]/, gl = (e) => to.test(e), Cs = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Sn(e) {
  const [n, t] = Yn(e, [to]), l = bt(n, Cs), [a, o] = Yn(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(o, l), [a, o];
}
function Ie(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function at(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function Xn(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function Pt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in n) {
    const o = e[a], s = n[a];
    tn(o) && tn(s) ? l[a] = Pt(o, s, t) : Array.isArray(o) && Array.isArray(s) && t ? l[a] = t(o, s) : l[a] = s;
  }
  return l;
}
function lo(e) {
  return e.map((n) => n.type === pe ? lo(n.children) : n).flat();
}
function vt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (vt.cache.has(e))
    return vt.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return vt.cache.set(e, n), n;
}
function cl(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => cl(e, t)).flat(1);
  if (Array.isArray(n.children))
    return n.children.map((t) => cl(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return cl(e, n.component.subTree).flat(1);
  }
  return [];
}
function xn(e) {
  const n = Xt({}), t = m(e);
  return Re(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, { flush: "sync" }), gn(n);
}
function ml(e, n) {
  return e.includes(n);
}
function Jn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
vt.cache = /* @__PURE__ */ new Map();
const Ne = () => [Function, Array];
function Zn(e, n) {
  return !!(e[n = "on" + Ft(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function ln(e) {
  let n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function no(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const o = n === "next" ? 1 : -1;
  do
    a += o, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? 1)) && a < e.length && a >= 0);
  return l;
}
function yl(e, n) {
  var l, a, o, s;
  const t = ln(e);
  if (n)
    if (n === "first")
      (l = t[0]) == null || l.focus();
    else if (n === "last")
      (a = t.at(-1)) == null || a.focus();
    else if (typeof n == "number")
      (o = t[n]) == null || o.focus();
    else {
      const r = no(t, n);
      r ? r.focus() : yl(e, n === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((s = t[0]) == null || s.focus());
}
function ol(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function hl(e, n) {
  if (!(Ee && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function ao(e) {
  return e.some((n) => !cs(n) || n.type !== ds && (n.type !== pe || ao(n.children))) ? e : null;
}
const oo = ["top", "bottom"], Ps = ["start", "end", "left", "right"];
function nn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = ml(oo, t) ? "start" : ml(Ps, t) ? "top" : "center"), { side: Qn(t, n), align: Qn(l, n) };
}
function Qn(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function Gl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Hl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function ea(e) {
  return { side: e.align, align: e.side };
}
function ta(e) {
  return ml(oo, e.side) ? "y" : "x";
}
class ft {
  constructor(n) {
    let { x: t, y: l, width: a, height: o } = n;
    this.x = t, this.y = l, this.width = a, this.height = o;
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
function la(e, n) {
  return { x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) }, y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) } };
}
function ro(e) {
  return Array.isArray(e) ? new ft({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function wn(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let a, o, s, r, i;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), o = +a[0], s = +a[5], r = +a[12], i = +a[13];
    else {
      if (!l.startsWith("matrix("))
        return new ft(n);
      a = l.slice(7, -1).split(/, /), o = +a[0], s = +a[3], r = +a[4], i = +a[5];
    }
    const u = t.transformOrigin, v = n.x - r - (1 - o) * parseFloat(u), f = n.y - i - (1 - s) * parseFloat(u.slice(u.indexOf(" ") + 1)), p = o ? n.width / o : e.offsetWidth + 1, d = s ? n.height / s : e.offsetHeight + 1;
    return new ft({ x: v, y: f, width: p, height: d });
  }
  return new ft(n);
}
function Bt(e, n, t) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let l;
  try {
    l = e.animate(n, t);
  } catch {
    return { finished: Promise.resolve() };
  }
  return l.finished === void 0 && (l.finished = new Promise((a) => {
    l.onfinish = () => {
      a(l);
    };
  })), l;
}
const rl = /* @__PURE__ */ new WeakMap(), Ct = 2.4, na = 0.2126729, aa = 0.7151522, oa = 0.072175, Bs = 0.55, As = 0.58, _s = 0.57, Fs = 0.62, sl = 0.03, ra = 1.45, $s = 5e-4, Vs = 1.25, Is = 1.25, sa = 0.078, ia = 12.82051282051282, il = 0.06, ua = 1e-3;
function ca(e, n) {
  const t = (e.r / 255) ** Ct, l = (e.g / 255) ** Ct, a = (e.b / 255) ** Ct, o = (n.r / 255) ** Ct, s = (n.g / 255) ** Ct, r = (n.b / 255) ** Ct;
  let i, u = t * na + l * aa + a * oa, v = o * na + s * aa + r * oa;
  if (u <= sl && (u += (sl - u) ** ra), v <= sl && (v += (sl - v) ** ra), Math.abs(v - u) < $s)
    return 0;
  if (v > u) {
    const f = (v ** Bs - u ** As) * Vs;
    i = f < ua ? 0 : f < sa ? f - f * ia * il : f - il;
  } else {
    const f = (v ** Fs - u ** _s) * Is;
    i = f > -ua ? 0 : f > -sa ? f - f * ia * il : f + il;
  }
  return 100 * i;
}
function jt(e) {
  El(`Vuetify: ${e}`);
}
function so(e) {
  El(`Vuetify error: ${e}`);
}
function Kl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const da = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Es = { rgb: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), rgba: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), hsl: (e, n, t, l) => pa({ h: e, s: n, l: t, a: l }), hsla: (e, n, t, l) => pa({ h: e, s: n, l: t, a: l }), hsv: (e, n, t, l) => Gt({ h: e, s: n, v: t, a: l }), hsva: (e, n, t, l) => Gt({ h: e, s: n, v: t, a: l }) };
function Mt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && jt(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && da.test(e)) {
    const { groups: n } = e.match(da), { fn: t, values: l } = n, a = l.split(/,\s*/).map((o) => o.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(o) / 100 : parseFloat(o));
    return Es[t](...a);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || jt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && jt(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(i) {
        return i.startsWith("#") && (i = i.slice(1)), i = i.replace(/([^0-9a-f])/gi, "F"), (i.length === 3 || i.length === 4) && (i = i.split("").map((u) => u + u).join("")), i.length !== 6 && (i = Xn(Xn(i, 6), 8, "F")), i;
      }(l);
      let [a, o, s, r] = function(i) {
        let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const v = [];
        let f = 0;
        for (; f < i.length; )
          v.push(i.substr(f, u)), f += u;
        return v;
      }(l, 2).map((i) => parseInt(i, 16));
      return r = r === void 0 ? r : r / 255, { r: a, g: o, b: s, a: r };
    }(n);
  }
  if (typeof e == "object") {
    if (zl(e, ["r", "g", "b"]))
      return e;
    if (zl(e, ["h", "s", "l"]))
      return Gt(io(e));
    if (zl(e, ["h", "s", "v"]))
      return Gt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Gt(e) {
  const { h: n, s: t, v: l, a } = e, o = (r) => {
    const i = (r + n / 60) % 6;
    return l - l * t * Math.max(Math.min(i, 4 - i, 1), 0);
  }, s = [o(5), o(3), o(1)].map((r) => Math.round(255 * r));
  return { r: s[0], g: s[1], b: s[2], a };
}
function pa(e) {
  return Gt(io(e));
}
function io(e) {
  const { h: n, s: t, l, a } = e, o = l + t * Math.min(l, 1 - l);
  return { h: n, s: o === 0 ? 0 : 2 - 2 * l / o, v: o, a };
}
const bl = Symbol.for("vuetify:defaults");
function kn() {
  const e = Se(bl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Xe(e, n) {
  const t = kn(), l = J(e), a = m(() => {
    if (b(n == null ? void 0 : n.disabled))
      return t.value;
    const o = b(n == null ? void 0 : n.scoped), s = b(n == null ? void 0 : n.reset), r = b(n == null ? void 0 : n.root);
    if (l.value == null && !(o || s || r))
      return t.value;
    let i = Pt(l.value, { prev: t.value });
    if (o)
      return i;
    if (s || r) {
      const u = Number(s || 1 / 0);
      for (let v = 0; v <= u && i && "prev" in i; v++)
        i = i.prev;
      return i && typeof r == "string" && r in i && (i = Pt(Pt(i, { prev: i }), i[r])), i;
    }
    return i.prev ? Pt(i.prev, i) : i;
  });
  return ke(bl, a), a;
}
function Ts() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kn();
  const l = Pe("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = m(() => {
    var r;
    return (r = t.value) == null ? void 0 : r[e._as ?? n];
  }), o = new Proxy(e, { get(r, i) {
    var v, f, p, d;
    const u = Reflect.get(r, i);
    return i === "class" || i === "style" ? [(v = a.value) == null ? void 0 : v[i], u].filter((h) => h != null) : typeof i != "string" || function(h, y) {
      var S, x;
      return ((S = h.props) == null ? void 0 : S[y]) !== void 0 || ((x = h.props) == null ? void 0 : x[vt(y)]) !== void 0;
    }(l.vnode, i) ? u : ((f = a.value) == null ? void 0 : f[i]) ?? ((d = (p = t.value) == null ? void 0 : p.global) == null ? void 0 : d[i]) ?? u;
  } }), s = de();
  return Re(() => {
    if (a.value) {
      const r = Object.entries(a.value).filter((i) => {
        let [u] = i;
        return u.startsWith(u[0].toUpperCase());
      });
      s.value = r.length ? Object.fromEntries(r) : void 0;
    } else
      s.value = void 0;
  }), { props: o, provideSubDefaults: function() {
    const r = function(i) {
      let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pe("injectSelf");
      const { provides: v } = u;
      if (v && i in v)
        return v[i];
    }(bl, l);
    ke(bl, m(() => s.value ? Pt((r == null ? void 0 : r.value) ?? {}, s.value) : r == null ? void 0 : r.value));
  } };
}
function Ht(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return jt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = O(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(t) {
      return eo(t, n);
    }, e.props._as = String, e.setup = function(t, l) {
      const a = kn();
      if (!a.value)
        return e._setup(t, l);
      const { props: o, provideSubDefaults: s } = Ts(t, t._as ?? e.name, a), r = e._setup(o, l);
      return s(), r;
    };
  }
  return e;
}
function le() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? Ht : rt)(n);
}
function uo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return le()({ name: t ?? Ft(Xa(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...ve() }, setup(l, a) {
    let { slots: o } = a;
    return () => {
      var s;
      return $t(l.tag, { class: [e, l.class], style: l.style }, (s = o.default) == null ? void 0 : s.call(o));
    };
  } });
}
function co(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const Sl = "cubic-bezier(0.4, 0, 0.2, 1)";
function va(e, n, t) {
  return Object.keys(e).filter((l) => gl(l) && l.endsWith(n)).reduce((l, a) => (l[a.slice(0, -n.length)] = (o) => e[a](o, t(o)), l), {});
}
function Pe(e, n) {
  const t = ps();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function Ue() {
  const e = Pe(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return vt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let po = 0, dl = /* @__PURE__ */ new WeakMap();
function qe() {
  const e = Pe("getUid");
  if (dl.has(e))
    return dl.get(e);
  {
    const n = po++;
    return dl.set(e, n), n;
  }
}
function vo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (n ? Ds(e) : Cn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function xl(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (Cn(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function Cn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Ds(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function ue(e) {
  Pe("useRender").render = e;
}
function Dl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = J(), l = J();
  if (Ee) {
    const a = new ResizeObserver((o) => {
      e == null || e(o, a), o.length && (l.value = n === "content" ? o[0].contentRect : o[0].target.getBoundingClientRect());
    });
    Ze(() => {
      a.disconnect();
    }), ae(t, (o, s) => {
      s && (a.unobserve(fl(s)), l.value = void 0), o && a.observe(fl(o));
    }, { flush: "post" });
  }
  return { resizeRef: t, contentRect: mn(l) };
}
function gt(e, n) {
  let t;
  function l() {
    t = yn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  ae(e, (a) => {
    a && !t ? l() : a || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Le(() => {
    t == null || t.stop();
  });
}
function xe(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const o = Pe("useProxiedModel"), s = J(e[n] !== void 0 ? e[n] : t), r = vt(n), i = m(r !== n ? () => {
    var v, f, p, d;
    return e[n], !(!((v = o.vnode.props) != null && v.hasOwnProperty(n)) && !((f = o.vnode.props) != null && f.hasOwnProperty(r)) || !((p = o.vnode.props) != null && p.hasOwnProperty(`onUpdate:${n}`)) && !((d = o.vnode.props) != null && d.hasOwnProperty(`onUpdate:${r}`)));
  } : () => {
    var v, f;
    return e[n], !(!((v = o.vnode.props) != null && v.hasOwnProperty(n)) || !((f = o.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)));
  });
  gt(() => !i.value, () => {
    ae(() => e[n], (v) => {
      s.value = v;
    });
  });
  const u = m({ get() {
    const v = e[n];
    return l(i.value ? v : s.value);
  }, set(v) {
    const f = a(v), p = nt(i.value ? e[n] : s.value);
    p !== f && l(p) !== v && (s.value = f, o == null || o.emit(`update:${n}`, f));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => i.value ? e[n] : s.value }), u;
}
qe.reset = () => {
  po = 0, dl = /* @__PURE__ */ new WeakMap();
};
const fo = Symbol.for("vuetify:locale");
function it() {
  const e = Se(fo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Et() {
  const e = Se(fo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const fa = Symbol.for("vuetify:theme"), Be = O({ theme: String }, "theme");
function $e(e) {
  Pe("provideTheme");
  const n = Se(fa, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = m(() => e.theme ?? n.name.value), l = m(() => n.themes.value[t.value]), a = m(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...n, name: t, current: l, themeClasses: a };
  return ke(fa, o), o;
}
const Ve = O({ tag: { type: String, default: "div" } }, "tag"), Ls = O({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Oe(e, n, t) {
  return le()({ name: e, props: Ls({ mode: t, origin: n }), setup(l, a) {
    let { slots: o } = a;
    const s = { onBeforeEnter(r) {
      l.origin && (r.style.transformOrigin = l.origin);
    }, onLeave(r) {
      if (l.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: u, offsetWidth: v, offsetHeight: f } = r;
        r._transitionInitialStyles = { position: r.style.position, top: r.style.top, left: r.style.left, width: r.style.width, height: r.style.height }, r.style.position = "absolute", r.style.top = `${i}px`, r.style.left = `${u}px`, r.style.width = `${v}px`, r.style.height = `${f}px`;
      }
      l.hideOnLeave && r.style.setProperty("display", "none", "important");
    }, onAfterLeave(r) {
      if (l.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
        const { position: i, top: u, left: v, width: f, height: p } = r._transitionInitialStyles;
        delete r._transitionInitialStyles, r.style.position = i || "", r.style.top = u || "", r.style.left = v || "", r.style.width = f || "", r.style.height = p || "";
      }
    } };
    return () => {
      const r = l.group ? vs : mt;
      return $t(r, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : s }, o.default);
    };
  } });
}
function go(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return le()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(l, a) {
    let { slots: o } = a;
    return () => $t(mt, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : n }, o.default);
  } });
}
function mo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = Xa(`offset-${n}`);
  return { onBeforeEnter(o) {
    o._parent = o.parentNode, o._initialStyle = { transition: o.style.transition, overflow: o.style.overflow, [n]: o.style[n] };
  }, onEnter(o) {
    const s = o._initialStyle;
    o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
    const r = `${o[t]}px`;
    o.style[n] = "0", o.offsetHeight, o.style.transition = s.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
      o.style[n] = r;
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(o) {
    o._initialStyle = { transition: "", overflow: o.style.overflow, [n]: o.style[n] }, o.style.overflow = "hidden", o.style[n] = `${o[t]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[n] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), a(o);
  }
  function a(o) {
    const s = o._initialStyle[n];
    o.style.overflow = o._initialStyle.overflow, s != null && (o.style[n] = s), delete o._initialStyle;
  }
}
const Os = O({ target: [Object, Array] }, "v-dialog-transition"), yo = le()({ name: "VDialogTransition", props: Os(), setup(e, n) {
  let { slots: t } = n;
  const l = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, o) {
    var p;
    await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), a.style.visibility = "";
    const { x: s, y: r, sx: i, sy: u, speed: v } = ma(e.target, a), f = Bt(a, [{ transform: `translate(${s}px, ${r}px) scale(${i}, ${u})`, opacity: 0 }, {}], { duration: 225 * v, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (p = ga(a)) == null || p.forEach((d) => {
      Bt(d, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * v, easing: Sl });
    }), f.finished.then(() => o());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, o) {
    var f;
    await new Promise((p) => requestAnimationFrame(p));
    const { x: s, y: r, sx: i, sy: u, speed: v } = ma(e.target, a);
    Bt(a, [{}, { transform: `translate(${s}px, ${r}px) scale(${i}, ${u})`, opacity: 0 }], { duration: 125 * v, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => o()), (f = ga(a)) == null || f.forEach((p) => {
      Bt(p, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * v, easing: Sl });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? c(mt, ee({ name: "dialog-transition" }, l, { css: !1 }), t) : c(mt, { name: "dialog-transition" }, t);
} });
function ga(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function ma(e, n) {
  const t = ro(e), l = wn(n), [a, o] = getComputedStyle(n).transformOrigin.split(" ").map((x) => parseFloat(x)), [s, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  s === "left" || r === "left" ? i -= t.width / 2 : s !== "right" && r !== "right" || (i += t.width / 2);
  let u = t.top + t.height / 2;
  s === "top" || r === "top" ? u -= t.height / 2 : s !== "bottom" && r !== "bottom" || (u += t.height / 2);
  const v = t.width / l.width, f = t.height / l.height, p = Math.max(1, v, f), d = v / p || 0, h = f / p || 0, y = l.width * l.height / (window.innerWidth * window.innerHeight), S = y > 0.12 ? Math.min(1.5, 10 * (y - 0.12) + 1) : 1;
  return { x: i - (a + l.left), y: u - (o + l.top), sx: d, sy: h, speed: S };
}
Oe("fab-transition", "center center", "out-in"), Oe("dialog-bottom-transition"), Oe("dialog-top-transition"), Oe("fade-transition"), Oe("scale-transition"), Oe("scroll-x-transition"), Oe("scroll-x-reverse-transition"), Oe("scroll-y-transition"), Oe("scroll-y-reverse-transition"), Oe("slide-x-transition"), Oe("slide-x-reverse-transition");
const ho = Oe("slide-y-transition");
Oe("slide-y-reverse-transition");
const Ms = go("expand-transition", mo()), bo = go("expand-x-transition", mo("", !0)), Ns = O({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), ze = le(!1)({ name: "VDefaultsProvider", props: Ns(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: l, disabled: a, reset: o, root: s, scoped: r } = gn(e);
  return Xe(l, { reset: o, root: s, scoped: r, disabled: a }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} }), St = O({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function xt(e) {
  return { dimensionStyles: m(() => ({ height: oe(e.height), maxHeight: oe(e.maxHeight), maxWidth: oe(e.maxWidth), minHeight: oe(e.minHeight), minWidth: oe(e.minWidth), width: oe(e.width) })) };
}
const So = O({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ve(), ...St() }, "VResponsive"), ya = le()({ name: "VResponsive", props: So(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: l } = function(o) {
    return { aspectStyles: m(() => {
      const s = Number(o.aspectRatio);
      return s ? { paddingBottom: String(1 / s * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = xt(e);
  return ue(() => {
    var o;
    return c("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [c("div", { class: "v-responsive__sizer", style: l.value }, null), (o = t.additional) == null ? void 0 : o.call(t), t.default && c("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} }), Zt = O({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), tt = (e, n) => {
  let { slots: t } = n;
  const { transition: l, disabled: a, ...o } = e, { component: s = mt, ...r } = typeof l == "object" ? l : {};
  return $t(s, ee(typeof l == "string" ? { name: a ? "" : l } : r, o, { disabled: a }), t);
};
function ha(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const xo = { mounted: function(e, n) {
  if (!bn)
    return;
  const t = n.modifiers || {}, l = n.value, { handler: a, options: o } = typeof l == "object" ? l : { handler: l, options: {} }, s = new IntersectionObserver(function() {
    var f;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const u = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
    if (!u)
      return;
    const v = r.some((p) => p.isIntersecting);
    !a || t.quiet && !u.init || t.once && !v && !u.init || a(v, r, i), v && t.once ? ha(e, n) : u.init = !0;
  }, o);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: s }, s.observe(e);
}, unmounted: ha }, Rs = O({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...So(), ...ve(), ...Zt() }, "VImg"), js = le()({ name: "VImg", directives: { intersect: xo }, props: Rs(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const a = Pe("VImg"), o = de(""), s = J(), r = de(e.eager ? "loading" : "idle"), i = de(), u = de(), v = m(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), f = m(() => v.value.aspect || i.value / u.value || 0);
  function p(k) {
    if ((!e.eager || !k) && (!bn || k || e.eager)) {
      if (r.value = "loading", v.value.lazySrc) {
        const w = new Image();
        w.src = v.value.lazySrc, x(w, null);
      }
      v.value.src && Fe(() => {
        var w;
        t("loadstart", ((w = s.value) == null ? void 0 : w.currentSrc) || v.value.src), setTimeout(() => {
          var P;
          if (!a.isUnmounted)
            if ((P = s.value) != null && P.complete) {
              if (s.value.naturalWidth || h(), r.value === "error")
                return;
              f.value || x(s.value, null), r.value === "loading" && d();
            } else
              f.value || x(s.value), y();
        });
      });
    }
  }
  function d() {
    var k;
    a.isUnmounted || (y(), x(s.value), r.value = "loaded", t("load", ((k = s.value) == null ? void 0 : k.currentSrc) || v.value.src));
  }
  function h() {
    var k;
    a.isUnmounted || (r.value = "error", t("error", ((k = s.value) == null ? void 0 : k.currentSrc) || v.value.src));
  }
  function y() {
    const k = s.value;
    k && (o.value = k.currentSrc || k.src);
  }
  ae(() => e.src, () => {
    p(r.value !== "idle");
  }), ae(f, (k, w) => {
    !k && w && s.value && x(s.value);
  }), hn(() => p());
  let S = -1;
  function x(k) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const P = () => {
      if (clearTimeout(S), a.isUnmounted)
        return;
      const { naturalHeight: $, naturalWidth: D } = k;
      $ || D ? (i.value = D, u.value = $) : k.complete || r.value !== "loading" || w == null ? (k.currentSrc.endsWith(".svg") || k.currentSrc.startsWith("data:image/svg+xml")) && (i.value = 1, u.value = 1) : S = window.setTimeout(P, w);
    };
    P();
  }
  Ze(() => {
    clearTimeout(S);
  });
  const A = m(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), F = () => {
    var P;
    if (!v.value.src || r.value === "idle")
      return null;
    const k = c("img", { class: ["v-img__img", A.value], style: { objectPosition: e.position }, src: v.value.src, srcset: v.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: s, onLoad: d, onError: h }, null), w = (P = l.sources) == null ? void 0 : P.call(l);
    return c(tt, { transition: e.transition, appear: !0 }, { default: () => [Ge(w ? c("picture", { class: "v-img__picture" }, [w, k]) : k, [[Vt, r.value === "loaded"]])] });
  }, C = () => c(tt, { transition: e.transition }, { default: () => [v.value.lazySrc && r.value !== "loaded" && c("img", { class: ["v-img__img", "v-img__img--preload", A.value], style: { objectPosition: e.position }, src: v.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), B = () => l.placeholder ? c(tt, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !l.error) && c("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, _ = () => l.error ? c(tt, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && c("div", { class: "v-img__error" }, [l.error()])] }) : null, V = () => e.gradient ? c("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, g = de(!1);
  {
    const k = ae(f, (w) => {
      w && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          g.value = !0;
        });
      }), k());
    });
  }
  return ue(() => {
    const k = ya.filterProps(e);
    return Ge(c(ya, ee({ class: ["v-img", { "v-img--booting": !g.value }, e.class], style: [{ width: oe(e.width === "auto" ? i.value : e.width) }, e.style] }, k, { aspectRatio: f.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => c(pe, null, [c(F, null, null), c(C, null, null), c(V, null, null), c(B, null, null), c(_, null, null)]), default: l.default }), [[yt("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: s, state: r, naturalWidth: i, naturalHeight: u };
} }), Tt = O({ border: [Boolean, Number, String] }, "border");
function Qt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return { borderClasses: m(() => {
    const t = It(e) ? e.value : e.border, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--border`);
    else if (typeof t == "string" || t === 0)
      for (const a of String(t).split(" "))
        l.push(`border-${a}`);
    return l;
  }) };
}
function Pn(e) {
  return xn(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Kl(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Kl(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const a = Mt(e.value.background);
          if (a.a == null || a.a === 1) {
            const o = function(s) {
              const r = Math.abs(ca(Mt(0), Mt(s)));
              return Math.abs(ca(Mt(16777215), Mt(s))) > Math.min(r, 50) ? "#fff" : "#000";
            }(a);
            t.color = o, t.caretColor = o;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (Kl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function Je(e, n) {
  const t = m(() => ({ text: It(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: a } = Pn(t);
  return { textColorClasses: l, textColorStyles: a };
}
function ot(e, n) {
  const t = m(() => ({ background: It(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: a } = Pn(t);
  return { backgroundColorClasses: l, backgroundColorStyles: a };
}
const wt = O({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function Dt(e) {
  return { elevationClasses: m(() => {
    const n = It(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const Qe = O({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function ut(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return { roundedClasses: m(() => {
    const t = It(e) ? e.value : e.rounded, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const a of String(t).split(" "))
        l.push(`rounded-${a}`);
    return l;
  }) };
}
const Ws = [null, "default", "comfortable", "compact"], Ye = O({ density: { type: String, default: "default", validator: (e) => Ws.includes(e) } }, "density");
function et(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return { densityClasses: m(() => `${n}--density-${e.density}`) };
}
const zs = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ll(e, n) {
  return c(pe, null, [e && c("span", { key: "overlay", class: `${n}__overlay` }, null), c("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const ct = O({ color: String, variant: { type: String, default: "elevated", validator: (e) => zs.includes(e) } }, "variant");
function Ol(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  const t = m(() => {
    const { variant: o } = b(e);
    return `${n}--variant-${o}`;
  }), { colorClasses: l, colorStyles: a } = Pn(m(() => {
    const { variant: o, color: s } = b(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: s };
  }));
  return { colorClasses: l, colorStyles: a, variantClasses: t };
}
const wo = O({ divided: Boolean, ...Tt(), ...ve(), ...Ye(), ...wt(), ...Qe(), ...Ve(), ...Be(), ...ct() }, "VBtnGroup"), ba = le()({ name: "VBtnGroup", props: wo(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = $e(e), { densityClasses: a } = et(e), { borderClasses: o } = Qt(e), { elevationClasses: s } = Dt(e), { roundedClasses: r } = ut(e);
  Xe({ VBtn: { height: "auto", color: q(e, "color"), density: q(e, "density"), flat: !0, variant: q(e, "variant") } }), ue(() => c(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, o.value, a.value, s.value, r.value, e.class], style: e.style }, t));
} }), ko = O({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Co = O({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Po(e, n) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = Pe("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = qe();
  ke(Symbol.for(`${n.description}:id`), a);
  const o = Se(n, null);
  if (!o) {
    if (!t)
      return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const s = q(e, "value"), r = m(() => !(!o.disabled.value && !e.disabled));
  o.register({ id: a, value: s, disabled: r }, l), Ze(() => {
    o.unregister(a);
  });
  const i = m(() => o.isSelected(a)), u = m(() => i.value && [o.selectedClass.value, e.selectedClass]);
  return ae(i, (v) => {
    l.emit("group:selected", { value: v });
  }), { id: a, isSelected: i, toggle: () => o.select(a, !i.value), select: (v) => o.select(a, v), selectedClass: u, value: s, disabled: r, group: o };
}
function Bo(e, n) {
  let t = !1;
  const l = Xt([]), a = xe(e, "modelValue", [], (u) => u == null ? [] : Sa(l, Ie(u)), (u) => {
    const v = function(f, p) {
      const d = [];
      return p.forEach((h) => {
        const y = f.findIndex((S) => S.id === h);
        if (~y) {
          const S = f[y];
          d.push(S.value != null ? S.value : y);
        }
      }), d;
    }(l, u);
    return e.multiple ? v : v[0];
  }), o = Pe("useGroup");
  function s() {
    const u = l.find((v) => !v.disabled);
    u && e.mandatory === "force" && !a.value.length && (a.value = [u.id]);
  }
  function r(u) {
    if (e.multiple && jt('This method is not supported when using "multiple" prop'), a.value.length) {
      const v = a.value[0], f = l.findIndex((h) => h.id === v);
      let p = (f + u) % l.length, d = l[p];
      for (; d.disabled && p !== f; )
        p = (p + u) % l.length, d = l[p];
      if (d.disabled)
        return;
      a.value = [l[p].id];
    } else {
      const v = l.find((f) => !f.disabled);
      v && (a.value = [v.id]);
    }
  }
  ht(() => {
    s();
  }), Ze(() => {
    t = !0;
  });
  const i = { register: function(u, v) {
    const f = u, p = cl(Symbol.for(`${n.description}:id`), o == null ? void 0 : o.vnode).indexOf(v);
    p > -1 ? l.splice(p, 0, f) : l.push(f);
  }, unregister: function(u) {
    if (t)
      return;
    s();
    const v = l.findIndex((f) => f.id === u);
    l.splice(v, 1);
  }, selected: a, select: function(u, v) {
    const f = l.find((p) => p.id === u);
    if (!v || !(f != null && f.disabled))
      if (e.multiple) {
        const p = a.value.slice(), d = p.findIndex((y) => y === u), h = ~d;
        if (v = v ?? !h, h && e.mandatory && p.length <= 1 || !h && e.max != null && p.length + 1 > e.max)
          return;
        d < 0 && v ? p.push(u) : d >= 0 && !v && p.splice(d, 1), a.value = p;
      } else {
        const p = a.value.includes(u);
        if (e.mandatory && p)
          return;
        a.value = v ?? !p ? [u] : [];
      }
  }, disabled: q(e, "disabled"), prev: () => r(l.length - 1), next: () => r(1), isSelected: (u) => a.value.includes(u), selectedClass: m(() => e.selectedClass), items: m(() => l), getItemIndex: (u) => function(v, f) {
    const p = Sa(v, [f]);
    return p.length ? v.findIndex((d) => d.id === p[0]) : -1;
  }(l, u) };
  return ke(n, i), i;
}
function Sa(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((s) => st(l, s.value)), o = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : o != null && t.push(o.id);
  }), t;
}
const Ao = Symbol.for("vuetify:v-btn-toggle"), Gs = O({ ...wo(), ...ko() }, "VBtnToggle");
le()({ name: "VBtnToggle", props: Gs(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, next: a, prev: o, select: s, selected: r } = Bo(e, Ao);
  return ue(() => {
    const i = ba.filterProps(e);
    return c(ba, ee({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var u;
      return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: l, next: a, prev: o, select: s, selected: r })];
    } });
  }), { next: a, prev: o, select: s };
} });
const me = [String, Function, Object, Array], Hs = Symbol.for("vuetify:icons"), wl = O({ icon: { type: me }, tag: { type: String, required: !0 } }, "icon"), xa = le()({ name: "VComponentIcon", props: wl(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const l = e.icon;
    return c(e.tag, null, { default: () => {
      var a;
      return [e.icon ? c(l, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
    } });
  };
} }), Ks = Ht({ name: "VSvgIcon", inheritAttrs: !1, props: wl(), setup(e, n) {
  let { attrs: t } = n;
  return () => c(e.tag, ee(t, { style: null }), { default: () => [c("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? c("path", { d: l[0], "fill-opacity": l[1] }, null) : c("path", { d: l }, null)) : c("path", { d: e.icon }, null)])] });
} });
Ht({ name: "VLigatureIcon", props: wl(), setup: (e) => () => c(e.tag, null, { default: () => [e.icon] }) }), Ht({ name: "VClassIcon", props: wl(), setup: (e) => () => c(e.tag, { class: e.icon }, null) });
const qs = ["x-small", "small", "default", "large", "x-large"], Lt = O({ size: { type: [String, Number], default: "default" } }, "size");
function el(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return xn(() => {
    let t, l;
    return ml(qs, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = { width: oe(e.size), height: oe(e.size) }), { sizeClasses: t, sizeStyles: l };
  });
}
const Us = O({ color: String, start: Boolean, end: Boolean, icon: me, ...ve(), ...Lt(), ...Ve({ tag: "i" }), ...Be() }, "VIcon"), Ae = le()({ name: "VIcon", props: Us(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const a = J(), { themeClasses: o } = $e(e), { iconData: s } = ((v) => {
    const f = Se(Hs);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: m(() => {
      var S;
      const p = b(v);
      if (!p)
        return { component: xa };
      let d = p;
      if (typeof d == "string" && (d = d.trim(), d.startsWith("$") && (d = (S = f.aliases) == null ? void 0 : S[d.slice(1)])), !d)
        throw new Error(`Could not find aliased icon "${p}"`);
      if (Array.isArray(d))
        return { component: Ks, icon: d };
      if (typeof d != "string")
        return { component: xa, icon: d };
      const h = Object.keys(f.sets).find((x) => typeof d == "string" && d.startsWith(`${x}:`)), y = h ? d.slice(h.length + 1) : d;
      return { component: f.sets[h ?? f.defaultSet].component, icon: y };
    }) };
  })(m(() => a.value || e.icon)), { sizeClasses: r } = el(e), { textColorClasses: i, textColorStyles: u } = Je(q(e, "color"));
  return ue(() => {
    var f, p;
    const v = (f = l.default) == null ? void 0 : f.call(l);
    return v && (a.value = (p = lo(v).filter((d) => d.type === fs && d.children && typeof d.children == "string")[0]) == null ? void 0 : p.children), c(s.value.component, { tag: e.tag, icon: s.value.icon, class: ["v-icon", "notranslate", o.value, r.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [r.value ? void 0 : { fontSize: oe(e.size), height: oe(e.size), width: oe(e.size) }, u.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [v] });
  }), {};
} });
function _o(e, n) {
  const t = J(), l = de(!1);
  if (bn) {
    const a = new IntersectionObserver((o) => {
      e == null || e(o, a), l.value = !!o.find((s) => s.isIntersecting);
    }, n);
    Ze(() => {
      a.disconnect();
    }), ae(t, (o, s) => {
      s && (a.unobserve(s), l.value = !1), o && a.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: l };
}
const Ys = O({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ve(), ...Lt(), ...Ve({ tag: "div" }), ...Be() }, "VProgressCircular"), Fo = le()({ name: "VProgressCircular", props: Ys(), setup(e, n) {
  let { slots: t } = n;
  const l = 2 * Math.PI * 20, a = J(), { themeClasses: o } = $e(e), { sizeClasses: s, sizeStyles: r } = el(e), { textColorClasses: i, textColorStyles: u } = Je(q(e, "color")), { textColorClasses: v, textColorStyles: f } = Je(q(e, "bgColor")), { intersectionRef: p, isIntersecting: d } = _o(), { resizeRef: h, contentRect: y } = Dl(), S = m(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = m(() => Number(e.width)), A = m(() => r.value ? Number(e.size) : y.value ? y.value.width : Math.max(x.value, 32)), F = m(() => 20 / (1 - x.value / A.value) * 2), C = m(() => x.value / A.value * F.value), B = m(() => oe((100 - S.value) / 100 * l));
  return Re(() => {
    p.value = a.value, h.value = a.value;
  }), ue(() => c(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": d.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, o.value, s.value, i.value, e.class], style: [r.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : S.value }, { default: () => [c("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${F.value} ${F.value}` }, [c("circle", { class: ["v-progress-circular__underlay", v.value], style: f.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), c("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": B.value }, null)]), t.default && c("div", { class: "v-progress-circular__content" }, [t.default({ value: S.value })])] })), {};
} }), wa = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, $o = O({ location: String }, "location");
function Vo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = Et();
  return { locationStyles: m(() => {
    if (!e.location)
      return {};
    const { side: o, align: s } = nn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function r(u) {
      return t ? t(u) : 0;
    }
    const i = {};
    return o !== "center" && (n ? i[wa[o]] = `calc(100% - ${r(o)}px)` : i[o] = 0), s !== "center" ? n ? i[wa[s]] = `calc(100% - ${r(s)}px)` : i[s] = 0 : (o === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), i;
  }) };
}
const Xs = O({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ve(), ...$o({ location: "top" }), ...Qe(), ...Ve(), ...Be() }, "VProgressLinear"), Io = le()({ name: "VProgressLinear", props: Xs(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = xe(e, "modelValue"), { isRtl: a, rtlClasses: o } = Et(), { themeClasses: s } = $e(e), { locationStyles: r } = Vo(e), { textColorClasses: i, textColorStyles: u } = Je(e, "color"), { backgroundColorClasses: v, backgroundColorStyles: f } = ot(m(() => e.bgColor || e.color)), { backgroundColorClasses: p, backgroundColorStyles: d } = ot(e, "color"), { roundedClasses: h } = ut(e), { intersectionRef: y, isIntersecting: S } = _o(), x = m(() => parseInt(e.max, 10)), A = m(() => parseInt(e.height, 10)), F = m(() => parseFloat(e.bufferValue) / x.value * 100), C = m(() => parseFloat(l.value) / x.value * 100), B = m(() => a.value !== e.reverse), _ = m(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), V = m(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function g(k) {
    if (!y.value)
      return;
    const { left: w, right: P, width: $ } = y.value.getBoundingClientRect(), D = B.value ? $ - k.clientX + (P - $) : k.clientX - w;
    l.value = Math.round(D / $ * x.value);
  }
  return ue(() => c(e.tag, { ref: y, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && S.value, "v-progress-linear--reverse": B.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, h.value, s.value, o.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? oe(A.value) : 0, "--v-progress-linear-height": oe(A.value), ...r.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : C.value, onClick: e.clickable && g }, { default: () => [e.stream && c("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...u.value, [B.value ? "left" : "right"]: oe(-A.value), borderTop: `${oe(A.value / 2)} dotted`, opacity: V.value, top: `calc(50% - ${oe(A.value / 4)})`, width: oe(100 - F.value, "%"), "--v-progress-linear-stream-to": oe(A.value * (B.value ? 1 : -1)) } }, null), c("div", { class: ["v-progress-linear__background", v.value], style: [f.value, { opacity: V.value, width: oe(e.stream ? F.value : 100, "%") }] }, null), c(mt, { name: _.value }, { default: () => [e.indeterminate ? c("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((k) => c("div", { key: k, class: ["v-progress-linear__indeterminate", k, p.value], style: d.value }, null))]) : c("div", { class: ["v-progress-linear__determinate", p.value], style: [d.value, { width: oe(C.value, "%") }] }, null)] }), t.default && c("div", { class: "v-progress-linear__content" }, [t.default({ value: C.value, buffer: F.value })])] })), {};
} }), Bn = O({ loading: [Boolean, String] }, "loader");
function An(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return { loaderClasses: m(() => ({ [`${n}--loading`]: e.loading })) };
}
function Eo(e, n) {
  var l;
  let { slots: t } = n;
  return c("div", { class: `${e.name}__loader` }, [((l = t.default) == null ? void 0 : l.call(t, { color: e.color, isActive: e.active })) || c(Io, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Js = ["static", "relative", "fixed", "absolute", "sticky"], Zs = O({ position: { type: String, validator: (e) => Js.includes(e) } }, "position");
function _n(e, n) {
  const t = Ja("RouterLink"), l = m(() => !(!e.href && !e.to)), a = m(() => (l == null ? void 0 : l.value) || Zn(n, "click") || Zn(e, "click"));
  if (typeof t == "string")
    return { isLink: l, isClickable: a, href: q(e, "href") };
  const o = e.to ? t.useLink(e) : void 0, s = function() {
    const r = Pe("useRoute");
    return m(() => {
      var i;
      return (i = r == null ? void 0 : r.proxy) == null ? void 0 : i.$route;
    });
  }();
  return { isLink: l, isClickable: a, route: o == null ? void 0 : o.route, navigate: o == null ? void 0 : o.navigate, isActive: o && m(() => {
    var r, i, u;
    return e.exact ? s.value ? ((r = o.isExactActive) == null ? void 0 : r.value) && st(o.route.value.query, s.value.query) : (i = o.isExactActive) == null ? void 0 : i.value : (u = o.isActive) == null ? void 0 : u.value;
  }), href: m(() => e.to ? o == null ? void 0 : o.route.value.href : e.href) };
}
const Fn = O({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let ql = !1;
const an = Symbol("rippleStop"), Qs = 80;
function ka(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function on(e) {
  return e.constructor.name === "TouchEvent";
}
function To(e) {
  return e.constructor.name === "KeyboardEvent";
}
const kl = { show(e, n) {
  var d;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((d = n == null ? void 0 : n._ripple) != null && d.enabled))
    return;
  const l = document.createElement("span"), a = document.createElement("span");
  l.appendChild(a), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
  const { radius: o, scale: s, x: r, y: i, centerX: u, centerY: v } = function(h, y) {
    var V;
    let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = 0, A = 0;
    if (!To(h)) {
      const g = y.getBoundingClientRect(), k = on(h) ? h.touches[h.touches.length - 1] : h;
      x = k.clientX - g.left, A = k.clientY - g.top;
    }
    let F = 0, C = 0.3;
    (V = y._ripple) != null && V.circle ? (C = 0.15, F = y.clientWidth / 2, F = S.center ? F : F + Math.sqrt((x - F) ** 2 + (A - F) ** 2) / 4) : F = Math.sqrt(y.clientWidth ** 2 + y.clientHeight ** 2) / 2;
    const B = (y.clientWidth - 2 * F) / 2 + "px", _ = (y.clientHeight - 2 * F) / 2 + "px";
    return { radius: F, scale: C, x: S.center ? B : x - F + "px", y: S.center ? _ : A - F + "px", centerX: B, centerY: _ };
  }(e, n, t), f = 2 * o + "px";
  a.className = "v-ripple__animation", a.style.width = f, a.style.height = f, n.appendChild(l);
  const p = window.getComputedStyle(n);
  p && p.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), ka(a, `translate(${r}, ${i}) scale3d(${s},${s},${s})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), ka(a, `translate(${u}, ${v}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var o;
  if (!((o = e == null ? void 0 : e._ripple) != null && o.enabled))
    return;
  const n = e.getElementsByClassName("v-ripple__animation");
  if (n.length === 0)
    return;
  const t = n[n.length - 1];
  if (t.dataset.isHiding)
    return;
  t.dataset.isHiding = "true";
  const l = performance.now() - Number(t.dataset.activated), a = Math.max(250 - l, 0);
  setTimeout(() => {
    t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var s;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((s = t.parentNode) == null ? void 0 : s.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, a);
} };
function Do(e) {
  return e === void 0 || !!e;
}
function Kt(e) {
  const n = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[an]) {
    if (e[an] = !0, on(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || To(e), t._ripple.class && (n.class = t._ripple.class), on(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        kl.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Qs);
    } else
      kl.show(e, t, n);
  }
}
function Ca(e) {
  e[an] = !0;
}
function Me(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit)
      return n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, void (n._ripple.showTimer = window.setTimeout(() => {
        Me(e);
      }));
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), kl.hide(n);
  }
}
function Lo(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let qt = !1;
function Oo(e) {
  qt || e.keyCode !== qn.enter && e.keyCode !== qn.space || (qt = !0, Kt(e));
}
function Mo(e) {
  qt = !1, Me(e);
}
function No(e) {
  qt && (qt = !1, Me(e));
}
function Pa(e, n, t) {
  const { value: l, modifiers: a } = n, o = Do(l);
  if (o || kl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = a.center, e._ripple.circle = a.circle, tn(l) && l.class && (e._ripple.class = l.class), o && !t) {
    if (a.stop)
      return e.addEventListener("touchstart", Ca, { passive: !0 }), void e.addEventListener("mousedown", Ca);
    e.addEventListener("touchstart", Kt, { passive: !0 }), e.addEventListener("touchend", Me, { passive: !0 }), e.addEventListener("touchmove", Lo, { passive: !0 }), e.addEventListener("touchcancel", Me), e.addEventListener("mousedown", Kt), e.addEventListener("mouseup", Me), e.addEventListener("mouseleave", Me), e.addEventListener("keydown", Oo), e.addEventListener("keyup", Mo), e.addEventListener("blur", No), e.addEventListener("dragstart", Me, { passive: !0 });
  } else
    !o && t && Ro(e);
}
function Ro(e) {
  e.removeEventListener("mousedown", Kt), e.removeEventListener("touchstart", Kt), e.removeEventListener("touchend", Me), e.removeEventListener("touchmove", Lo), e.removeEventListener("touchcancel", Me), e.removeEventListener("mouseup", Me), e.removeEventListener("mouseleave", Me), e.removeEventListener("keydown", Oo), e.removeEventListener("keyup", Mo), e.removeEventListener("dragstart", Me), e.removeEventListener("blur", No);
}
const Ml = { mounted: function(e, n) {
  Pa(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, Ro(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && Pa(e, n, Do(n.oldValue));
} }, ei = O({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Ao }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: me, appendIcon: me, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Tt(), ...ve(), ...Ye(), ...St(), ...wt(), ...Co(), ...Bn(), ...$o(), ...Zs(), ...Qe(), ...Fn(), ...Lt(), ...Ve({ tag: "button" }), ...Be(), ...ct({ variant: "elevated" }) }, "VBtn"), pt = le()({ name: "VBtn", directives: { Ripple: Ml }, props: ei(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: a } = $e(e), { borderClasses: o } = Qt(e), { colorClasses: s, colorStyles: r, variantClasses: i } = Ol(e), { densityClasses: u } = et(e), { dimensionStyles: v } = xt(e), { elevationClasses: f } = Dt(e), { loaderClasses: p } = An(e), { locationStyles: d } = Vo(e), { positionClasses: h } = function(k) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
    return { positionClasses: m(() => k.position ? `${w}--${k.position}` : void 0) };
  }(e), { roundedClasses: y } = ut(e), { sizeClasses: S, sizeStyles: x } = el(e), A = Po(e, e.symbol, !1), F = _n(e, t), C = m(() => {
    var k;
    return e.active !== void 0 ? e.active : F.isLink.value ? (k = F.isActive) == null ? void 0 : k.value : A == null ? void 0 : A.isSelected.value;
  }), B = m(() => (A == null ? void 0 : A.disabled.value) || e.disabled), _ = m(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), V = m(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function g(k) {
    var w;
    B.value || F.isLink.value && (k.metaKey || k.ctrlKey || k.shiftKey || k.button !== 0 || t.target === "_blank") || ((w = F.navigate) == null || w.call(F, k), A == null || A.toggle());
  }
  return function(k, w) {
    ae(() => {
      var P;
      return (P = k.isActive) == null ? void 0 : P.value;
    }, (P) => {
      k.isLink.value && P && w && Fe(() => {
        w(!0);
      });
    }, { immediate: !0 });
  }(F, A == null ? void 0 : A.select), ue(() => {
    var M, T;
    const k = F.isLink.value ? "a" : e.tag, w = !(!e.prependIcon && !l.prepend), P = !(!e.appendIcon && !l.append), $ = !(!e.icon || e.icon === !0), D = (A == null ? void 0 : A.isSelected.value) && (!F.isLink.value || ((M = F.isActive) == null ? void 0 : M.value)) || !A || ((T = F.isActive) == null ? void 0 : T.value);
    return Ge(c(k, { type: k === "a" ? void 0 : "button", class: ["v-btn", A == null ? void 0 : A.selectedClass.value, { "v-btn--active": C.value, "v-btn--block": e.block, "v-btn--disabled": B.value, "v-btn--elevated": _.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, a.value, o.value, D ? s.value : void 0, u.value, f.value, p.value, h.value, y.value, S.value, i.value, e.class], style: [D ? r.value : void 0, v.value, d.value, x.value, e.style], disabled: B.value || void 0, href: F.href.value, onClick: g, value: V.value }, { default: () => {
      var N;
      return [Ll(!0, "v-btn"), !e.icon && w && c("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? c(ze, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : c(Ae, { key: "prepend-icon", icon: e.prependIcon }, null)]), c("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && $ ? c(Ae, { key: "content-icon", icon: e.icon }, null) : c(ze, { key: "content-defaults", disabled: !$, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var K;
        return [((K = l.default) == null ? void 0 : K.call(l)) ?? e.text];
      } })]), !e.icon && P && c("span", { key: "append", class: "v-btn__append" }, [l.append ? c(ze, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : c(Ae, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && c("span", { key: "loader", class: "v-btn__loader" }, [((N = l.loader) == null ? void 0 : N.call(l)) ?? c(Fo, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[yt("ripple"), !B.value && e.ripple, null]]);
  }), {};
} }), ti = O({ start: Boolean, end: Boolean, icon: me, image: String, text: String, ...ve(), ...Ye(), ...Qe(), ...Lt(), ...Ve(), ...Be(), ...ct({ variant: "flat" }) }, "VAvatar"), Ut = le()({ name: "VAvatar", props: ti(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = $e(e), { colorClasses: a, colorStyles: o, variantClasses: s } = Ol(e), { densityClasses: r } = et(e), { roundedClasses: i } = ut(e), { sizeClasses: u, sizeStyles: v } = el(e);
  return ue(() => c(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, a.value, r.value, i.value, u.value, s.value, e.class], style: [o.value, v.value, e.style] }, { default: () => {
    var f;
    return [e.image ? c(js, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? c(Ae, { key: "icon", icon: e.icon }, null) : ((f = t.default) == null ? void 0 : f.call(t)) ?? e.text, Ll(!1, "v-avatar")];
  } })), {};
} }), li = O({ text: String, clickable: Boolean, ...ve(), ...Be() }, "VLabel"), jo = le()({ name: "VLabel", props: li(), setup(e, n) {
  let { slots: t } = n;
  return ue(() => {
    var l;
    return c("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), Wo = Symbol.for("vuetify:selection-control-group"), zo = O({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: me, trueIcon: me, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: st }, ...ve(), ...Ye(), ...Be() }, "SelectionControlGroup"), ni = O({ ...zo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
le()({ name: "VSelectionControlGroup", props: ni(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = xe(e, "modelValue"), a = qe(), o = m(() => e.id || `v-selection-control-group-${a}`), s = m(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return ke(Wo, { modelValue: l, forceUpdate: () => {
    r.forEach((i) => i());
  }, onForceUpdate: (i) => {
    r.add(i), Le(() => {
      r.delete(i);
    });
  } }), Xe({ [e.defaultsTarget]: { color: q(e, "color"), disabled: q(e, "disabled"), density: q(e, "density"), error: q(e, "error"), inline: q(e, "inline"), modelValue: l, multiple: m(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: s, falseIcon: q(e, "falseIcon"), trueIcon: q(e, "trueIcon"), readonly: q(e, "readonly"), ripple: q(e, "ripple"), type: q(e, "type"), valueComparator: q(e, "valueComparator") } }), ue(() => {
    var i;
    return c("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const Go = O({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ve(), ...zo() }, "VSelectionControl"), Ba = le()({ name: "VSelectionControl", directives: { Ripple: Ml }, inheritAttrs: !1, props: Go(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { group: a, densityClasses: o, icon: s, model: r, textColorClasses: i, textColorStyles: u, backgroundColorClasses: v, backgroundColorStyles: f, trueValue: p } = function(B) {
    const _ = Se(Wo, void 0), { densityClasses: V } = et(B), g = xe(B, "modelValue"), k = m(() => B.trueValue !== void 0 ? B.trueValue : B.value === void 0 || B.value), w = m(() => B.falseValue !== void 0 && B.falseValue), P = m(() => !!B.multiple || B.multiple == null && Array.isArray(g.value)), $ = m({ get() {
      const I = _ ? _.modelValue.value : g.value;
      return P.value ? Ie(I).some((R) => B.valueComparator(R, k.value)) : B.valueComparator(I, k.value);
    }, set(I) {
      if (B.readonly)
        return;
      const R = I ? k.value : w.value;
      let j = R;
      P.value && (j = I ? [...Ie(g.value), R] : Ie(g.value).filter((U) => !B.valueComparator(U, k.value))), _ ? _.modelValue.value = j : g.value = j;
    } }), { textColorClasses: D, textColorStyles: M } = Je(m(() => {
      if (!B.error && !B.disabled)
        return $.value ? B.color : B.baseColor;
    })), { backgroundColorClasses: T, backgroundColorStyles: N } = ot(m(() => !$.value || B.error || B.disabled ? void 0 : B.color)), K = m(() => $.value ? B.trueIcon : B.falseIcon);
    return { group: _, densityClasses: V, trueValue: k, falseValue: w, model: $, textColorClasses: D, textColorStyles: M, backgroundColorClasses: T, backgroundColorStyles: N, icon: K };
  }(e), d = qe(), h = m(() => e.id || `input-${d}`), y = de(!1), S = de(!1), x = J();
  function A(B) {
    y.value = !0, hl(B.target, ":focus-visible") !== !1 && (S.value = !0);
  }
  function F() {
    y.value = !1, S.value = !1;
  }
  function C(B) {
    e.readonly && a && Fe(() => a.forceUpdate()), r.value = B.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    x.value && (x.value.checked = r.value);
  }), ue(() => {
    var k, w;
    const B = l.label ? l.label({ label: e.label, props: { for: h.value } }) : e.label, [_, V] = Sn(t), g = c("input", ee({ ref: x, checked: r.value, disabled: !(!e.readonly && !e.disabled), id: h.value, onBlur: F, onFocus: A, onInput: C, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: p.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, V), null);
    return c("div", ee({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": y.value, "v-selection-control--focus-visible": S.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, _, { style: e.style }), [c("div", { class: ["v-selection-control__wrapper", i.value], style: u.value }, [(k = l.default) == null ? void 0 : k.call(l, { backgroundColorClasses: v, backgroundColorStyles: f }), Ge(c("div", { class: ["v-selection-control__input"] }, [((w = l.input) == null ? void 0 : w.call(l, { model: r, textColorClasses: i, textColorStyles: u, backgroundColorClasses: v, backgroundColorStyles: f, inputNode: g, icon: s.value, props: { onFocus: A, onBlur: F, id: h.value } })) ?? c(pe, null, [s.value && c(Ae, { key: "icon", icon: s.value }, null), g])]), [[yt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), B && c(jo, { for: h.value, clickable: !0, onClick: (P) => P.stopPropagation() }, { default: () => [B] })]);
  }), { isFocused: y, input: x };
} }), Ho = O({ indeterminate: Boolean, indeterminateIcon: { type: me, default: "$checkboxIndeterminate" }, ...Go({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), _t = le()({ name: "VCheckboxBtn", props: Ho(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = xe(e, "indeterminate"), a = xe(e, "modelValue");
  function o(i) {
    l.value && (l.value = !1);
  }
  const s = m(() => l.value ? e.indeterminateIcon : e.falseIcon), r = m(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return ue(() => {
    const i = bt(Ba.filterProps(e), ["modelValue"]);
    return c(Ba, ee(i, { modelValue: a.value, "onUpdate:modelValue": [(u) => a.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: s.value, trueIcon: r.value, "aria-checked": l.value ? "mixed" : void 0 }), t);
  }), {};
} });
function Ko(e) {
  const { t: n } = it();
  return { InputIcon: function(t) {
    let { name: l } = t;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], o = e[`onClick:${l}`], s = o && a ? n(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return c(Ae, { icon: e[`${l}Icon`], "aria-label": s, onClick: o }, null);
  } };
}
const ai = O({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ve(), ...Zt({ transition: { component: ho, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), oi = le()({ name: "VMessages", props: ai(), setup(e, n) {
  let { slots: t } = n;
  const l = m(() => Ie(e.messages)), { textColorClasses: a, textColorStyles: o } = Je(m(() => e.color));
  return ue(() => c(tt, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [o.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((s, r) => c("div", { class: "v-messages__message", key: `${r}-${l.value}` }, [t.message ? t.message({ message: s }) : s]))] })), {};
} }), qo = O({ focused: Boolean, "onUpdate:focused": Ne() }, "focus");
function $n(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  const t = xe(e, "focused");
  return { focusClasses: m(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const ri = Symbol.for("vuetify:form");
function Uo() {
  return Se(ri, null);
}
const si = O({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...qo() }, "validation"), Vn = O({ id: String, appendIcon: me, centerAffix: { type: Boolean, default: !0 }, prependIcon: me, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ne(), "onClick:append": Ne(), ...ve(), ...Ye(), ...si() }, "VInput"), Cl = le()({ name: "VInput", props: { ...Vn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: a } = n;
  const { densityClasses: o } = et(e), { rtlClasses: s } = Et(), { InputIcon: r } = Ko(e), i = qe(), u = m(() => e.id || `input-${i}`), v = m(() => `${u.value}-messages`), { errorMessages: f, isDirty: p, isDisabled: d, isReadonly: h, isPristine: y, isValid: S, isValidating: x, reset: A, resetValidation: F, validate: C, validationClasses: B } = function(g) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue(), w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qe();
    const P = xe(g, "modelValue"), $ = m(() => g.validationValue === void 0 ? P.value : g.validationValue), D = Uo(), M = J([]), T = de(!0), N = m(() => !(!Ie(P.value === "" ? null : P.value).length && !Ie($.value === "" ? null : $.value).length)), K = m(() => !!(g.disabled ?? (D == null ? void 0 : D.isDisabled.value))), I = m(() => !!(g.readonly ?? (D == null ? void 0 : D.isReadonly.value))), R = m(() => {
      var z;
      return (z = g.errorMessages) != null && z.length ? Ie(g.errorMessages).concat(M.value).slice(0, Math.max(0, +g.maxErrors)) : M.value;
    }), j = m(() => {
      let z = (g.validateOn ?? (D == null ? void 0 : D.validateOn.value)) || "input";
      z === "lazy" && (z = "input lazy");
      const E = new Set((z == null ? void 0 : z.split(" ")) ?? []);
      return { blur: E.has("blur") || E.has("input"), input: E.has("input"), submit: E.has("submit"), lazy: E.has("lazy") };
    }), U = m(() => {
      var z;
      return !g.error && !((z = g.errorMessages) != null && z.length) && (!g.rules.length || (T.value ? !M.value.length && !j.value.lazy || null : !M.value.length));
    }), te = de(!1), X = m(() => ({ [`${k}--error`]: U.value === !1, [`${k}--dirty`]: N.value, [`${k}--disabled`]: K.value, [`${k}--readonly`]: I.value })), Z = m(() => g.name ?? b(w));
    function L() {
      P.value = null, Fe(W);
    }
    function W() {
      T.value = !0, j.value.lazy ? M.value = [] : G(!0);
    }
    async function G() {
      let z = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const E = [];
      te.value = !0;
      for (const H of g.rules) {
        if (E.length >= +(g.maxErrors ?? 1))
          break;
        const se = typeof H == "function" ? H : () => H, Y = await se($.value);
        Y !== !0 && (Y === !1 || typeof Y == "string" ? E.push(Y || "") : console.warn(`${Y} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return M.value = E, te.value = !1, T.value = z, M.value;
    }
    return hn(() => {
      D == null || D.register({ id: Z.value, validate: G, reset: L, resetValidation: W });
    }), Ze(() => {
      D == null || D.unregister(Z.value);
    }), ht(async () => {
      j.value.lazy || await G(!0), D == null || D.update(Z.value, U.value, R.value);
    }), gt(() => j.value.input, () => {
      ae($, () => {
        if ($.value != null)
          G();
        else if (g.focused) {
          const z = ae(() => g.focused, (E) => {
            E || G(), z();
          });
        }
      });
    }), gt(() => j.value.blur, () => {
      ae(() => g.focused, (z) => {
        z || G();
      });
    }), ae(U, () => {
      D == null || D.update(Z.value, U.value, R.value);
    }), { errorMessages: R, isDirty: N, isDisabled: K, isReadonly: I, isPristine: T, isValid: U, isValidating: te, reset: L, resetValidation: W, validate: G, validationClasses: X };
  }(e, "v-input", u), _ = m(() => ({ id: u, messagesId: v, isDirty: p, isDisabled: d, isReadonly: h, isPristine: y, isValid: S, isValidating: x, reset: A, resetValidation: F, validate: C })), V = m(() => {
    var g;
    return (g = e.errorMessages) != null && g.length || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ue(() => {
    var $, D, M, T;
    const g = !(!l.prepend && !e.prependIcon), k = !(!l.append && !e.appendIcon), w = V.value.length > 0, P = !e.hideDetails || e.hideDetails === "auto" && (w || !!l.details);
    return c("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, s.value, B.value, e.class], style: e.style }, [g && c("div", { key: "prepend", class: "v-input__prepend" }, [($ = l.prepend) == null ? void 0 : $.call(l, _.value), e.prependIcon && c(r, { key: "prepend-icon", name: "prepend" }, null)]), l.default && c("div", { class: "v-input__control" }, [(D = l.default) == null ? void 0 : D.call(l, _.value)]), k && c("div", { key: "append", class: "v-input__append" }, [e.appendIcon && c(r, { key: "append-icon", name: "append" }, null), (M = l.append) == null ? void 0 : M.call(l, _.value)]), P && c("div", { class: "v-input__details" }, [c(oi, { id: v.value, active: w, messages: V.value }, { message: l.message }), (T = l.details) == null ? void 0 : T.call(l, _.value)])]);
  }), { reset: A, resetValidation: F, validate: C, isValid: S, errorMessages: f };
} }), ii = O({ ...Vn(), ...bt(Ho(), ["inline"]) }, "VCheckbox"), In = le()({ name: "VCheckbox", inheritAttrs: !1, props: ii(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const a = xe(e, "modelValue"), { isFocused: o, focus: s, blur: r } = $n(e), i = qe(), u = m(() => e.id || `checkbox-${i}`);
  return ue(() => {
    const [v, f] = Sn(t), p = Cl.filterProps(e), d = _t.filterProps(e);
    return c(Cl, ee({ class: ["v-checkbox", e.class] }, v, p, { modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, id: u.value, focused: o.value, style: e.style }), { ...l, default: (h) => {
      let { id: y, messagesId: S, isDisabled: x, isReadonly: A } = h;
      return c(_t, ee(d, { id: y.value, "aria-describedby": S.value, disabled: x.value, readonly: A.value }, f, { modelValue: a.value, "onUpdate:modelValue": (F) => a.value = F, onFocus: s, onBlur: r }), l);
    } });
  }), {};
} }), Yo = Symbol.for("vuetify:v-chip-group"), ui = O({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: st }, ...ve(), ...ko({ selectedClass: "v-chip--selected" }), ...Ve(), ...Be(), ...ct({ variant: "tonal" }) }, "VChipGroup");
le()({ name: "VChipGroup", props: ui(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = $e(e), { isSelected: a, select: o, next: s, prev: r, selected: i } = Bo(e, Yo);
  return Xe({ VChip: { color: q(e, "color"), disabled: q(e, "disabled"), filter: q(e, "filter"), variant: q(e, "variant") } }), ue(() => c(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: a, select: o, next: s, prev: r, selected: i.value })];
  } })), {};
} });
const ci = O({ activeClass: String, appendAvatar: String, appendIcon: me, closable: Boolean, closeIcon: { type: me, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: me, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Ne(), onClickOnce: Ne(), ...Tt(), ...ve(), ...Ye(), ...wt(), ...Co(), ...Qe(), ...Fn(), ...Lt(), ...Ve({ tag: "span" }), ...Be(), ...ct({ variant: "tonal" }) }, "VChip"), di = le()({ name: "VChip", directives: { Ripple: Ml }, props: ci(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { t: o } = it(), { borderClasses: s } = Qt(e), { colorClasses: r, colorStyles: i, variantClasses: u } = Ol(e), { densityClasses: v } = et(e), { elevationClasses: f } = Dt(e), { roundedClasses: p } = ut(e), { sizeClasses: d } = el(e), { themeClasses: h } = $e(e), y = xe(e, "modelValue"), S = Po(e, Yo, !1), x = _n(e, t), A = m(() => e.link !== !1 && x.isLink.value), F = m(() => !e.disabled && e.link !== !1 && (!!S || e.link || x.isClickable.value)), C = m(() => ({ "aria-label": o(e.closeLabel), onClick(V) {
    V.stopPropagation(), y.value = !1, l("click:close", V);
  } }));
  function B(V) {
    var g;
    l("click", V), F.value && ((g = x.navigate) == null || g.call(x, V), S == null || S.toggle());
  }
  function _(V) {
    V.key !== "Enter" && V.key !== " " || (V.preventDefault(), B(V));
  }
  return () => {
    const V = x.isLink.value ? "a" : e.tag, g = !(!e.appendIcon && !e.appendAvatar), k = !(!g && !a.append), w = !(!a.close && !e.closable), P = !(!a.filter && !e.filter) && S, $ = !(!e.prependIcon && !e.prependAvatar), D = !(!$ && !a.prepend), M = !S || S.isSelected.value;
    return y.value && Ge(c(V, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": F.value, "v-chip--filter": P, "v-chip--pill": e.pill }, h.value, s.value, M ? r.value : void 0, v.value, f.value, p.value, d.value, u.value, S == null ? void 0 : S.selectedClass.value, e.class], style: [M ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: x.href.value, tabindex: F.value ? 0 : void 0, onClick: B, onKeydown: F.value && !A.value && _ }, { default: () => {
      var T;
      return [Ll(F.value, "v-chip"), P && c(bo, { key: "filter" }, { default: () => [Ge(c("div", { class: "v-chip__filter" }, [a.filter ? c(ze, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : c(Ae, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Vt, S.isSelected.value]])] }), D && c("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? c(ze, { key: "prepend-defaults", disabled: !$, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : c(pe, null, [e.prependIcon && c(Ae, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && c(Ut, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), c("div", { class: "v-chip__content" }, [((T = a.default) == null ? void 0 : T.call(a, { isSelected: S == null ? void 0 : S.isSelected.value, selectedClass: S == null ? void 0 : S.selectedClass.value, select: S == null ? void 0 : S.select, toggle: S == null ? void 0 : S.toggle, value: S == null ? void 0 : S.value.value, disabled: e.disabled })) ?? e.text]), k && c("div", { key: "append", class: "v-chip__append" }, [a.append ? c(ze, { key: "append-defaults", disabled: !g, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : c(pe, null, [e.appendIcon && c(Ae, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && c(Ut, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), w && c("button", ee({ key: "close", class: "v-chip__close", type: "button" }, C.value), [a.close ? c(ze, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : c(Ae, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[yt("ripple"), F.value && e.ripple, null]]);
  };
} }), rn = Symbol.for("vuetify:list");
function Xo() {
  const e = Se(rn, { hasPrepend: de(!1), updateHasPrepend: () => null }), n = { hasPrepend: de(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return ke(rn, n), e;
}
function Jo() {
  return Se(rn, null);
}
const pi = { open: (e) => {
  let { id: n, value: t, opened: l, parents: a } = e;
  if (t) {
    const o = /* @__PURE__ */ new Set();
    o.add(n);
    let s = a.get(n);
    for (; s != null; )
      o.add(s), s = a.get(s);
    return o;
  }
  return l.delete(n), l;
}, select: () => null }, Zo = { open: (e) => {
  let { id: n, value: t, opened: l, parents: a } = e;
  if (t) {
    let o = a.get(n);
    for (l.add(n); o != null && o !== n; )
      l.add(o), o = a.get(o);
    return l;
  }
  return l.delete(n), l;
}, select: () => null }, vi = { open: Zo.open, select: (e) => {
  let { id: n, value: t, opened: l, parents: a } = e;
  if (!t)
    return l;
  const o = [];
  let s = a.get(n);
  for (; s != null; )
    o.push(s), s = a.get(s);
  return new Set(o);
} }, sn = (e) => {
  const n = { select: (t) => {
    let { id: l, value: a, selected: o } = t;
    if (l = nt(l), e && !a) {
      const s = Array.from(o.entries()).reduce((r, i) => {
        let [u, v] = i;
        return v === "on" ? [...r, u] : r;
      }, []);
      if (s.length === 1 && s[0] === l)
        return o;
    }
    return o.set(l, a ? "on" : "off"), o;
  }, in: (t, l, a) => {
    let o = /* @__PURE__ */ new Map();
    for (const s of t || [])
      o = n.select({ id: s, value: !0, selected: new Map(o), children: l, parents: a });
    return o;
  }, out: (t) => {
    const l = [];
    for (const [a, o] of t.entries())
      o === "on" && l.push(a);
    return l;
  } };
  return n;
}, Aa = (e) => {
  const n = sn(e);
  return { select: (t) => {
    let { selected: l, id: a, ...o } = t;
    a = nt(a);
    const s = l.has(a) ? /* @__PURE__ */ new Map([[a, l.get(a)]]) : /* @__PURE__ */ new Map();
    return n.select({ ...o, id: a, selected: s });
  }, in: (t, l, a) => {
    let o = /* @__PURE__ */ new Map();
    return t != null && t.length && (o = n.in(t.slice(0, 1), l, a)), o;
  }, out: (t, l, a) => n.out(t, l, a) };
}, Yt = Symbol.for("vuetify:nested"), Qo = { id: de(), root: { register: () => null, unregister: () => null, parents: J(/* @__PURE__ */ new Map()), children: J(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: J(/* @__PURE__ */ new Set()), selected: J(/* @__PURE__ */ new Map()), selectedValues: J([]) } }, fi = O({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), gi = (e) => {
  let n = !1;
  const t = J(/* @__PURE__ */ new Map()), l = J(/* @__PURE__ */ new Map()), a = xe(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), o = m(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((f) => {
          const p = Aa(f);
          return { select: (d) => {
            let { id: h, selected: y, children: S, ...x } = d;
            return h = nt(h), S.has(h) ? y : p.select({ id: h, selected: y, children: S, ...x });
          }, in: p.in, out: p.out };
        })(e.mandatory);
      case "leaf":
        return ((f) => {
          const p = sn(f);
          return { select: (d) => {
            let { id: h, selected: y, children: S, ...x } = d;
            return h = nt(h), S.has(h) ? y : p.select({ id: h, selected: y, children: S, ...x });
          }, in: p.in, out: p.out };
        })(e.mandatory);
      case "independent":
        return sn(e.mandatory);
      case "single-independent":
        return Aa(e.mandatory);
      default:
        return /* @__PURE__ */ ((f) => {
          const p = { select: (d) => {
            let { id: h, value: y, selected: S, children: x, parents: A } = d;
            h = nt(h);
            const F = new Map(S), C = [h];
            for (; C.length; ) {
              const _ = C.shift();
              S.set(_, y ? "on" : "off"), x.has(_) && C.push(...x.get(_));
            }
            let B = A.get(h);
            for (; B; ) {
              const _ = x.get(B), V = _.every((k) => S.get(k) === "on"), g = _.every((k) => !S.has(k) || S.get(k) === "off");
              S.set(B, V ? "on" : g ? "off" : "indeterminate"), B = A.get(B);
            }
            return f && !y && Array.from(S.entries()).reduce((V, g) => {
              let [k, w] = g;
              return w === "on" ? [...V, k] : V;
            }, []).length === 0 ? F : S;
          }, in: (d, h, y) => {
            let S = /* @__PURE__ */ new Map();
            for (const x of d || [])
              S = p.select({ id: x, value: !0, selected: new Map(S), children: h, parents: y });
            return S;
          }, out: (d, h) => {
            const y = [];
            for (const [S, x] of d.entries())
              x !== "on" || h.has(S) || y.push(S);
            return y;
          } };
          return p;
        })(e.mandatory);
    }
  }), s = m(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return vi;
      case "single":
        return pi;
      default:
        return Zo;
    }
  }), r = xe(e, "selected", e.selected, (f) => o.value.in(f, t.value, l.value), (f) => o.value.out(f, t.value, l.value));
  function i(f) {
    const p = [];
    let d = f;
    for (; d != null; )
      p.unshift(d), d = l.value.get(d);
    return p;
  }
  Ze(() => {
    n = !0;
  });
  const u = Pe("nested"), v = { id: de(), root: { opened: a, selected: r, selectedValues: m(() => {
    const f = [];
    for (const [p, d] of r.value.entries())
      d === "on" && f.push(p);
    return f;
  }), register: (f, p, d) => {
    p && f !== p && l.value.set(f, p), d && t.value.set(f, []), p != null && t.value.set(p, [...t.value.get(p) || [], f]);
  }, unregister: (f) => {
    if (n)
      return;
    t.value.delete(f);
    const p = l.value.get(f);
    if (p) {
      const d = t.value.get(p) ?? [];
      t.value.set(p, d.filter((h) => h !== f));
    }
    l.value.delete(f), a.value.delete(f);
  }, open: (f, p, d) => {
    u.emit("click:open", { id: f, value: p, path: i(f), event: d });
    const h = s.value.open({ id: f, value: p, opened: new Set(a.value), children: t.value, parents: l.value, event: d });
    h && (a.value = h);
  }, openOnSelect: (f, p, d) => {
    const h = s.value.select({ id: f, value: p, selected: new Map(r.value), opened: new Set(a.value), children: t.value, parents: l.value, event: d });
    h && (a.value = h);
  }, select: (f, p, d) => {
    u.emit("click:select", { id: f, value: p, path: i(f), event: d });
    const h = o.value.select({ id: f, value: p, selected: new Map(r.value), children: t.value, parents: l.value, event: d });
    h && (r.value = h), v.root.openOnSelect(f, p, d);
  }, children: t, parents: l } };
  return ke(Yt, v), v.root;
}, er = (e, n) => {
  const t = Se(Yt, Qo), l = Symbol(qe()), a = m(() => e.value !== void 0 ? e.value : l), o = { ...t, id: a, open: (s, r) => t.root.open(a.value, s, r), openOnSelect: (s, r) => t.root.openOnSelect(a.value, s, r), isOpen: m(() => t.root.opened.value.has(a.value)), parent: m(() => t.root.parents.value.get(a.value)), select: (s, r) => t.root.select(a.value, s, r), isSelected: m(() => t.root.selected.value.get(nt(a.value)) === "on"), isIndeterminate: m(() => t.root.selected.value.get(a.value) === "indeterminate"), isLeaf: m(() => !t.root.children.value.get(a.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Ze(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && ke(Yt, o), o;
}, mi = Ht({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const l = Se(Yt, Qo);
    ke(Yt, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} }), yi = O({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: me, default: "$collapse" }, expandIcon: { type: me, default: "$expand" }, prependIcon: me, appendIcon: me, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ve(), ...Ve() }, "VListGroup"), _a = le()({ name: "VListGroup", props: yi(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: l, open: a, id: o } = er(q(e, "value"), !0), s = m(() => `v-list-group--id-${String(o.value)}`), r = Jo(), { isBooted: i } = function() {
    const d = de(!1);
    return ht(() => {
      window.requestAnimationFrame(() => {
        d.value = !0;
      });
    }), { ssrBootStyles: m(() => d.value ? void 0 : { transition: "none !important" }), isBooted: mn(d) };
  }();
  function u(d) {
    a(!l.value, d);
  }
  const v = m(() => ({ onClick: u, class: "v-list-group__header", id: s.value })), f = m(() => l.value ? e.collapseIcon : e.expandIcon), p = m(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && f.value, appendIcon: e.appendIcon || !e.subgroup && f.value, title: e.title, value: e.value } }));
  return ue(() => c(e.tag, { class: ["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [t.activator && c(ze, { defaults: p.value }, { default: () => [c(mi, null, { default: () => [t.activator({ props: v.value, isOpen: l.value })] })] }), c(tt, { transition: { component: Ms }, disabled: !i.value }, { default: () => {
    var d;
    return [Ge(c("div", { class: "v-list-group__items", role: "group", "aria-labelledby": s.value }, [(d = t.default) == null ? void 0 : d.call(t)]), [[Vt, l.value]])];
  } })] })), {};
} }), hi = uo("v-list-item-subtitle"), bi = uo("v-list-item-title"), Si = O({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: me, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: me, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number], title: [String, Number], value: null, onClick: Ne(), onClickOnce: Ne(), ...Tt(), ...ve(), ...Ye(), ...St(), ...wt(), ...Qe(), ...Fn(), ...Ve(), ...Be(), ...ct({ variant: "text" }) }, "VListItem"), Pl = le()({ name: "VListItem", directives: { Ripple: Ml }, props: Si(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: a } = n;
  const o = _n(e, t), s = m(() => e.value === void 0 ? o.href.value : e.value), { select: r, isSelected: i, isIndeterminate: u, isGroupActivator: v, root: f, parent: p, openOnSelect: d } = er(s, !1), h = Jo(), y = m(() => {
    var I;
    return e.active !== !1 && (e.active || ((I = o.isActive) == null ? void 0 : I.value) || i.value);
  }), S = m(() => e.link !== !1 && o.isLink.value), x = m(() => !e.disabled && e.link !== !1 && (e.link || o.isClickable.value || e.value != null && !!h)), A = m(() => e.rounded || e.nav), F = m(() => e.color ?? e.activeColor), C = m(() => ({ color: y.value ? F.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  ae(() => {
    var I;
    return (I = o.isActive) == null ? void 0 : I.value;
  }, (I) => {
    I && p.value != null && f.open(p.value, !0), I && d(I);
  }, { immediate: !0 });
  const { themeClasses: B } = $e(e), { borderClasses: _ } = Qt(e), { colorClasses: V, colorStyles: g, variantClasses: k } = Ol(C), { densityClasses: w } = et(e), { dimensionStyles: P } = xt(e), { elevationClasses: $ } = Dt(e), { roundedClasses: D } = ut(A), M = m(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), T = m(() => ({ isActive: y.value, select: r, isSelected: i.value, isIndeterminate: u.value }));
  function N(I) {
    var R;
    a("click", I), !v && x.value && ((R = o.navigate) == null || R.call(o, I), e.value != null && r(!i.value, I));
  }
  function K(I) {
    I.key !== "Enter" && I.key !== " " || (I.preventDefault(), N(I));
  }
  return ue(() => {
    const I = S.value ? "a" : e.tag, R = l.title || e.title != null, j = l.subtitle || e.subtitle != null, U = !(!e.appendAvatar && !e.appendIcon), te = !(!U && !l.append), X = !(!e.prependAvatar && !e.prependIcon), Z = !(!X && !l.prepend);
    var L, W;
    return h == null || h.updateHasPrepend(Z), e.activeColor && (L = "active-color", W = ["color", "base-color"], W = Array.isArray(W) ? W.slice(0, -1).map((G) => `'${G}'`).join(", ") + ` or '${W.at(-1)}'` : `'${W}'`, El(`[Vuetify UPGRADE] '${L}' is deprecated, use ${W} instead.`)), Ge(c(I, { class: ["v-list-item", { "v-list-item--active": y.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !Z && (h == null ? void 0 : h.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && y.value }, B.value, _.value, V.value, w.value, $.value, M.value, D.value, k.value, e.class], style: [g.value, P.value, e.style], href: o.href.value, tabindex: x.value ? h ? -2 : 0 : void 0, onClick: N, onKeydown: x.value && !S.value && K }, { default: () => {
      var G;
      return [Ll(x.value || y.value, "v-list-item"), Z && c("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? c(ze, { key: "prepend-defaults", disabled: !X, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var z;
        return [(z = l.prepend) == null ? void 0 : z.call(l, T.value)];
      } }) : c(pe, null, [e.prependAvatar && c(Ut, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && c(Ae, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), c("div", { class: "v-list-item__spacer" }, null)]), c("div", { class: "v-list-item__content", "data-no-activator": "" }, [R && c(bi, { key: "title" }, { default: () => {
        var z;
        return [((z = l.title) == null ? void 0 : z.call(l, { title: e.title })) ?? e.title];
      } }), j && c(hi, { key: "subtitle" }, { default: () => {
        var z;
        return [((z = l.subtitle) == null ? void 0 : z.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (G = l.default) == null ? void 0 : G.call(l, T.value)]), te && c("div", { key: "append", class: "v-list-item__append" }, [l.append ? c(ze, { key: "append-defaults", disabled: !U, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var z;
        return [(z = l.append) == null ? void 0 : z.call(l, T.value)];
      } }) : c(pe, null, [e.appendIcon && c(Ae, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && c(Ut, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), c("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[yt("ripple"), x.value && e.ripple]]);
  }), {};
} }), xi = O({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ve(), ...Ve() }, "VListSubheader"), wi = le()({ name: "VListSubheader", props: xi(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: l, textColorStyles: a } = Je(q(e, "color"));
  return ue(() => {
    const o = !(!t.default && !e.title);
    return c(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var s;
      return [o && c("div", { class: "v-list-subheader__text" }, [((s = t.default) == null ? void 0 : s.call(t)) ?? e.title])];
    } });
  }), {};
} }), ki = O({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ve(), ...Be() }, "VDivider"), tr = le()({ name: "VDivider", props: ki(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: l } = $e(e), { textColorClasses: a, textColorStyles: o } = Je(q(e, "color")), s = m(() => {
    const r = {};
    return e.length && (r[e.vertical ? "maxHeight" : "maxWidth"] = oe(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = oe(e.thickness)), r;
  });
  return ue(() => c("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, a.value, e.class], style: [s.value, o.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), Ci = O({ items: Array, returnObject: Boolean }, "VListChildren"), lr = le()({ name: "VListChildren", props: Ci(), setup(e, n) {
  let { slots: t } = n;
  return Xo(), () => {
    var l, a;
    return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((o) => {
      var p, d;
      let { children: s, props: r, type: i, raw: u } = o;
      if (i === "divider")
        return ((p = t.divider) == null ? void 0 : p.call(t, { props: r })) ?? c(tr, r, null);
      if (i === "subheader")
        return ((d = t.subheader) == null ? void 0 : d.call(t, { props: r })) ?? c(wi, r, null);
      const v = { subtitle: t.subtitle ? (h) => {
        var y;
        return (y = t.subtitle) == null ? void 0 : y.call(t, { ...h, item: u });
      } : void 0, prepend: t.prepend ? (h) => {
        var y;
        return (y = t.prepend) == null ? void 0 : y.call(t, { ...h, item: u });
      } : void 0, append: t.append ? (h) => {
        var y;
        return (y = t.append) == null ? void 0 : y.call(t, { ...h, item: u });
      } : void 0, title: t.title ? (h) => {
        var y;
        return (y = t.title) == null ? void 0 : y.call(t, { ...h, item: u });
      } : void 0 }, f = _a.filterProps(r);
      return s ? c(_a, ee({ value: r == null ? void 0 : r.value }, f), { activator: (h) => {
        let { props: y } = h;
        const S = { ...r, ...y, value: e.returnObject ? u : r.value };
        return t.header ? t.header({ props: S }) : c(Pl, S, v);
      }, default: () => c(lr, { items: s }, t) }) : t.item ? t.item({ props: r }) : c(Pl, ee(r, { value: e.returnObject ? u : r.value }), v);
    }));
  };
} }), nr = O({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: st } }, "list-items");
function un(e, n) {
  const t = De(n, e.itemTitle, n), l = De(n, e.itemValue, t), a = De(n, e.itemChildren), o = { title: t, value: l, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? bt(n, ["children"]) : n : De(n, e.itemProps) };
  return { title: String(o.title ?? ""), value: o.value, props: o, children: Array.isArray(a) ? ar(e, a) : void 0, raw: n };
}
function ar(e, n) {
  const t = [];
  for (const l of n)
    t.push(un(e, l));
  return t;
}
function Pi(e, n) {
  const t = De(n, e.itemType, "item"), l = /* @__PURE__ */ function(r) {
    return typeof r == "string" || typeof r == "number" || typeof r == "boolean";
  }(n) ? n : De(n, e.itemTitle), a = De(n, e.itemValue, void 0), o = De(n, e.itemChildren), s = { title: l, value: a, ...e.itemProps === !0 ? bt(n, ["children"]) : De(n, e.itemProps) };
  return { type: t, title: s.title, value: s.value, props: s, children: t === "item" && o ? or(e, o) : void 0, raw: n };
}
function or(e, n) {
  const t = [];
  for (const l of n)
    t.push(Pi(e, l));
  return t;
}
const Bi = O({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...fi({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Tt(), ...ve(), ...Ye(), ...St(), ...wt(), itemType: { type: String, default: "type" }, ...nr(), ...Qe(), ...Ve(), ...Be(), ...ct({ variant: "text" }) }, "VList"), Ai = le()({ name: "VList", props: Bi(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: l } = function(w) {
    return { items: m(() => or(w, w.items)) };
  }(e), { themeClasses: a } = $e(e), { backgroundColorClasses: o, backgroundColorStyles: s } = ot(q(e, "bgColor")), { borderClasses: r } = Qt(e), { densityClasses: i } = et(e), { dimensionStyles: u } = xt(e), { elevationClasses: v } = Dt(e), { roundedClasses: f } = ut(e), { open: p, select: d } = gi(e), h = m(() => e.lines ? `v-list--${e.lines}-line` : void 0), y = q(e, "activeColor"), S = q(e, "baseColor"), x = q(e, "color");
  Xo(), Xe({ VListGroup: { activeColor: y, baseColor: S, color: x }, VListItem: { activeClass: q(e, "activeClass"), activeColor: y, baseColor: S, color: x, density: q(e, "density"), disabled: q(e, "disabled"), lines: q(e, "lines"), nav: q(e, "nav"), slim: q(e, "slim"), variant: q(e, "variant") } });
  const A = de(!1), F = J();
  function C(w) {
    A.value = !0;
  }
  function B(w) {
    A.value = !1;
  }
  function _(w) {
    var P;
    A.value || w.relatedTarget && ((P = F.value) != null && P.contains(w.relatedTarget)) || k();
  }
  function V(w) {
    if (F.value) {
      if (w.key === "ArrowDown")
        k("next");
      else if (w.key === "ArrowUp")
        k("prev");
      else if (w.key === "Home")
        k("first");
      else {
        if (w.key !== "End")
          return;
        k("last");
      }
      w.preventDefault();
    }
  }
  function g(w) {
    A.value = !0;
  }
  function k(w) {
    if (F.value)
      return yl(F.value, w);
  }
  return ue(() => c(e.tag, { ref: F, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, a.value, o.value, r.value, i.value, v.value, h.value, f.value, e.class], style: [s.value, u.value, e.style], tabindex: e.disabled || A.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: C, onFocusout: B, onFocus: _, onKeydown: V, onMousedown: g }, { default: () => [c(lr, { items: l.value, returnObject: e.returnObject }, t)] })), { open: p, select: d, focus: k };
} });
function Ul(e, n) {
  return { x: e.x + n.x, y: e.y + n.y };
}
function Fa(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: l } = e;
    return Ul({ x: l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, y: t === "top" ? 0 : t === "bottom" ? n.height : t }, n);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: l } = e;
    return Ul({ x: t === "left" ? 0 : t === "right" ? n.width : t, y: l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l }, n);
  }
  return Ul({ x: n.width / 2, y: n.height / 2 }, n);
}
const rr = { static: function() {
}, connected: function(e, n, t) {
  (Array.isArray(e.target.value) || function(d) {
    for (; d; ) {
      if (window.getComputedStyle(d).position === "fixed")
        return !0;
      d = d.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: a } = xn(() => {
    const d = nn(n.location, e.isRtl.value), h = n.origin === "overlap" ? d : n.origin === "auto" ? Gl(d) : nn(n.origin, e.isRtl.value);
    return d.side === h.side && d.align === Hl(h).align ? { preferredAnchor: ea(d), preferredOrigin: ea(h) } : { preferredAnchor: d, preferredOrigin: h };
  }), [o, s, r, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((d) => m(() => {
    const h = parseFloat(n[d]);
    return isNaN(h) ? 1 / 0 : h;
  })), u = m(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const d = n.offset.split(" ").map(parseFloat);
      return d.length < 2 && d.push(0), d;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let v = !1;
  const f = new ResizeObserver(() => {
    v && p();
  });
  function p() {
    if (v = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => v = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const d = ro(e.target.value), h = function(k, w) {
      w ? k.style.removeProperty("left") : k.style.removeProperty("right");
      const P = wn(k);
      return w ? P.x += parseFloat(k.style.right || 0) : P.x -= parseFloat(k.style.left || 0), P.y -= parseFloat(k.style.top || 0), P;
    }(e.contentEl.value, e.isRtl.value), y = xl(e.contentEl.value);
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = y.reduce((k, w) => {
      const P = w.getBoundingClientRect(), $ = new ft({ x: w === document.documentElement ? 0 : P.x, y: w === document.documentElement ? 0 : P.y, width: w.clientWidth, height: w.clientHeight });
      return k ? new ft({ x: Math.max(k.left, $.left), y: Math.max(k.top, $.top), width: Math.min(k.right, $.right) - Math.max(k.left, $.left), height: Math.min(k.bottom, $.bottom) - Math.max(k.top, $.top) }) : $;
    }, void 0);
    S.x += 12, S.y += 12, S.width -= 24, S.height -= 24;
    let x = { anchor: l.value, origin: a.value };
    function A(k) {
      const w = new ft(h), P = Fa(k.anchor, d), $ = Fa(k.origin, w);
      let { x: D, y: M } = (N = $, { x: (T = P).x - N.x, y: T.y - N.y });
      var T, N;
      switch (k.anchor.side) {
        case "top":
          M -= u.value[0];
          break;
        case "bottom":
          M += u.value[0];
          break;
        case "left":
          D -= u.value[0];
          break;
        case "right":
          D += u.value[0];
      }
      switch (k.anchor.align) {
        case "top":
          M -= u.value[1];
          break;
        case "bottom":
          M += u.value[1];
          break;
        case "left":
          D -= u.value[1];
          break;
        case "right":
          D += u.value[1];
      }
      return w.x += D, w.y += M, w.width = Math.min(w.width, r.value), w.height = Math.min(w.height, i.value), { overflows: la(w, S), x: D, y: M };
    }
    let F = 0, C = 0;
    const B = { x: 0, y: 0 }, _ = { x: !1, y: !1 };
    let V = -1;
    for (; ; ) {
      if (V++ > 10) {
        so("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: k, y: w, overflows: P } = A(x);
      F += k, C += w, h.x += k, h.y += w;
      {
        const $ = ta(x.anchor), D = P.x.before || P.x.after, M = P.y.before || P.y.after;
        let T = !1;
        if (["x", "y"].forEach((N) => {
          if (N === "x" && D && !_.x || N === "y" && M && !_.y) {
            const K = { anchor: { ...x.anchor }, origin: { ...x.origin } }, I = N === "x" ? $ === "y" ? Hl : Gl : $ === "y" ? Gl : Hl;
            K.anchor = I(K.anchor), K.origin = I(K.origin);
            const { overflows: R } = A(K);
            (R[N].before <= P[N].before && R[N].after <= P[N].after || R[N].before + R[N].after < (P[N].before + P[N].after) / 2) && (x = K, T = _[N] = !0);
          }
        }), T)
          continue;
      }
      P.x.before && (F += P.x.before, h.x += P.x.before), P.x.after && (F -= P.x.after, h.x -= P.x.after), P.y.before && (C += P.y.before, h.y += P.y.before), P.y.after && (C -= P.y.after, h.y -= P.y.after);
      {
        const $ = la(h, S);
        B.x = S.width - $.x.before - $.x.after, B.y = S.height - $.y.before - $.y.after, F += $.x.before, h.x += $.x.before, C += $.y.before, h.y += $.y.before;
      }
      break;
    }
    const g = ta(x.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: oe(Yl(C)), left: e.isRtl.value ? void 0 : oe(Yl(F)), right: e.isRtl.value ? oe(Yl(-F)) : void 0, minWidth: oe(g === "y" ? Math.min(o.value, d.width) : o.value), maxWidth: oe($a(at(B.x, o.value === 1 / 0 ? 0 : o.value, r.value))), maxHeight: oe($a(at(B.y, s.value === 1 / 0 ? 0 : s.value, i.value))) }), { available: B, contentBox: h };
  }
  return ae([e.target, e.contentEl], (d, h) => {
    let [y, S] = d, [x, A] = h;
    x && !Array.isArray(x) && f.unobserve(x), y && !Array.isArray(y) && f.observe(y), A && f.unobserve(A), S && f.observe(S);
  }, { immediate: !0 }), Le(() => {
    f.disconnect();
  }), ae(() => [l.value, a.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => p()), Fe(() => {
    const d = p();
    if (!d)
      return;
    const { available: h, contentBox: y } = d;
    y.height > h.y && requestAnimationFrame(() => {
      p(), requestAnimationFrame(() => {
        p();
      });
    });
  }), { updateLocation: p };
} }, _i = O({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in rr }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Yl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function $a(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let cn = !0;
const Bl = [];
let Va = -1;
function dn() {
  cancelAnimationFrame(Va), Va = requestAnimationFrame(() => {
    const e = Bl.shift();
    e && e(), Bl.length ? dn() : cn = !0;
  });
}
const pl = { none: null, close: function(e) {
  Ia(e.targetEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var r;
  const t = (r = e.root.value) == null ? void 0 : r.offsetParent, l = [.../* @__PURE__ */ new Set([...xl(e.targetEl.value, n.contained ? t : void 0), ...xl(e.contentEl.value, n.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, o = (s = t || document.documentElement, Cn(s) && s);
  var s;
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((i, u) => {
    i.style.setProperty("--v-body-scroll-x", oe(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", oe(-i.scrollTop)), i !== document.documentElement && i.style.setProperty("--v-scrollbar-offset", oe(a)), i.classList.add("v-overlay-scroll-blocked");
  }), Le(() => {
    l.forEach((i, u) => {
      const v = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), f = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -v, i.scrollTop = -f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, n, t) {
  let l = !1, a = -1, o = -1;
  function s(r) {
    var i;
    i = () => {
      var f, p;
      const u = performance.now();
      (p = (f = e.updateLocation).value) == null || p.call(f, r), l = (performance.now() - u) / (1e3 / 60) > 2;
    }, !cn || Bl.length ? (Bl.push(i), dn()) : (cn = !1, i(), dn());
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      Ia(e.targetEl.value ?? e.contentEl.value, (r) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            s(r);
          });
        })) : s(r);
      });
    });
  }), Le(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(a);
  });
} }, Fi = O({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in pl } }, "VOverlay-scroll-strategies");
function Ia(e, n) {
  const t = [document, ...xl(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, { passive: !0 });
  }), Le(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const pn = Symbol.for("vuetify:v-menu"), $i = O({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Vi(e, n) {
  let t = () => {
  };
  function l(a) {
    t == null || t();
    const o = Number(a ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      t = function(r, i) {
        if (!Ee || r === 0)
          return i(), () => {
          };
        const u = window.setTimeout(i, r);
        return () => window.clearTimeout(u);
      }(o, () => {
        n == null || n(a), s(a);
      });
    });
  }
  return { clearDelay: t, runOpenDelay: function() {
    return l(!0);
  }, runCloseDelay: function() {
    return l(!1);
  } };
}
const Ii = O({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...$i() }, "VOverlay-activator");
function Ei(e, n) {
  let { isActive: t, isTop: l } = n;
  const a = Pe("useActivator"), o = J();
  let s = !1, r = !1, i = !0;
  const u = m(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), v = m(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), { runOpenDelay: f, runCloseDelay: p } = Vi(e, (P) => {
    P !== (e.openOnHover && s || u.value && r) || e.openOnHover && t.value && !l.value || (t.value !== P && (i = !0), t.value = P);
  }), d = J(), h = (P) => {
    P.stopPropagation(), o.value = P.currentTarget || P.target, t.value || (d.value = [P.clientX, P.clientY]), t.value = !t.value;
  }, y = (P) => {
    var $;
    ($ = P.sourceCapabilities) != null && $.firesTouchEvents || (s = !0, o.value = P.currentTarget || P.target, f());
  }, S = (P) => {
    s = !1, p();
  }, x = (P) => {
    hl(P.target, ":focus-visible") !== !1 && (r = !0, P.stopPropagation(), o.value = P.currentTarget || P.target, f());
  }, A = (P) => {
    r = !1, P.stopPropagation(), p();
  }, F = m(() => {
    const P = {};
    return v.value && (P.onClick = h), e.openOnHover && (P.onMouseenter = y, P.onMouseleave = S), u.value && (P.onFocus = x, P.onBlur = A), P;
  }), C = m(() => {
    const P = {};
    if (e.openOnHover && (P.onMouseenter = () => {
      s = !0, f();
    }, P.onMouseleave = () => {
      s = !1, p();
    }), u.value && (P.onFocusin = () => {
      r = !0, f();
    }, P.onFocusout = () => {
      r = !1, p();
    }), e.closeOnContentClick) {
      const $ = Se(pn, null);
      P.onClick = () => {
        t.value = !1, $ == null || $.closeParents();
      };
    }
    return P;
  }), B = m(() => {
    const P = {};
    return e.openOnHover && (P.onMouseenter = () => {
      i && (s = !0, i = !1, f());
    }, P.onMouseleave = () => {
      s = !1, p();
    }), P;
  });
  ae(l, (P) => {
    !P || (!e.openOnHover || s || u.value && r) && (!u.value || r || e.openOnHover && s) || (t.value = !1);
  }), ae(t, (P) => {
    P || setTimeout(() => {
      d.value = void 0;
    });
  }, { flush: "post" });
  const _ = J();
  Re(() => {
    _.value && Fe(() => {
      o.value = fl(_.value);
    });
  });
  const V = J(), g = m(() => e.target === "cursor" && d.value ? d.value : V.value ? fl(V.value) : Ea(e.target, a) || o.value), k = m(() => Array.isArray(g.value) ? void 0 : g.value);
  let w;
  return ae(() => !!e.activator, (P) => {
    P && Ee ? (w = yn(), w.run(() => {
      (function($, D, M) {
        let { activatorEl: T, activatorEvents: N } = M;
        function K() {
          let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R(), U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.activatorProps;
          j && function(te, X) {
            Object.keys(X).forEach((Z) => {
              if (gl(Z)) {
                const L = Jn(Z), W = rl.get(te);
                if (X[Z] == null)
                  W == null || W.forEach((G) => {
                    const [z, E] = G;
                    z === L && (te.removeEventListener(L, E), W.delete(G));
                  });
                else if (!W || ![...W].some((G) => G[0] === L && G[1] === X[Z])) {
                  te.addEventListener(L, X[Z]);
                  const G = W || /* @__PURE__ */ new Set();
                  G.add([L, X[Z]]), rl.has(te) || rl.set(te, G);
                }
              } else
                X[Z] == null ? te.removeAttribute(Z) : te.setAttribute(Z, X[Z]);
            });
          }(j, ee(N.value, U));
        }
        function I() {
          let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R(), U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.activatorProps;
          j && function(te, X) {
            Object.keys(X).forEach((Z) => {
              if (gl(Z)) {
                const L = Jn(Z), W = rl.get(te);
                W == null || W.forEach((G) => {
                  const [z, E] = G;
                  z === L && (te.removeEventListener(L, E), W.delete(G));
                });
              } else
                te.removeAttribute(Z);
            });
          }(j, ee(N.value, U));
        }
        function R() {
          const j = Ea(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $.activator, D);
          return T.value = (j == null ? void 0 : j.nodeType) === Node.ELEMENT_NODE ? j : void 0, T.value;
        }
        ae(() => $.activator, (j, U) => {
          if (U && j !== U) {
            const te = R(U);
            te && I(te);
          }
          j && Fe(() => K());
        }, { immediate: !0 }), ae(() => $.activatorProps, () => {
          K();
        }), Le(() => {
          I();
        });
      })(e, a, { activatorEl: o, activatorEvents: F });
    })) : w && w.stop();
  }, { flush: "post", immediate: !0 }), Le(() => {
    w == null || w.stop();
  }), { activatorEl: o, activatorRef: _, target: g, targetEl: k, targetRef: V, activatorEvents: F, contentEvents: C, scrimEvents: B };
}
function Ea(e, n) {
  var l, a;
  if (!e)
    return;
  let t;
  if (e === "parent") {
    let o = (a = (l = n == null ? void 0 : n.proxy) == null ? void 0 : l.$el) == null ? void 0 : a.parentNode;
    for (; o != null && o.hasAttribute("data-no-activator"); )
      o = o.parentNode;
    t = o;
  } else
    t = typeof e == "string" ? document.querySelector(e) : "$el" in e ? e.$el : e;
  return t;
}
const Nl = ["sm", "md", "lg", "xl", "xxl"], Ti = Symbol.for("vuetify:display");
function En() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  const t = Se(Ti);
  if (!t)
    throw new Error("Could not find Vuetify display injection");
  const l = m(() => {
    if (!e.mobileBreakpoint)
      return t.mobile.value;
    const o = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < o;
  }), a = m(() => n ? { [`${n}--mobile`]: l.value } : {});
  return { ...t, displayClasses: a, mobile: l };
}
const Di = O({ eager: Boolean }, "lazy");
function sr() {
  const e = Pe("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Ta = Symbol.for("vuetify:stack"), Nt = Xt([]);
function Li() {
  return !0;
}
function Da(e, n, t) {
  if (!e || ir(e, t) === !1)
    return !1;
  const l = co(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((o) => o == null ? void 0 : o.contains(e.target));
}
function ir(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Li)(e);
}
function La(e, n) {
  const t = co(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Oi = { mounted(e, n) {
  const t = (a) => function(o, s, r) {
    const i = typeof r.value == "function" ? r.value : r.value.handler;
    s._clickOutside.lastMousedownWasOutside && Da(o, s, r) && setTimeout(() => {
      ir(o, r) && i && i(o);
    }, 0);
  }(a, e, n), l = (a) => {
    e._clickOutside.lastMousedownWasOutside = Da(a, e, n);
  };
  La(e, (a) => {
    a.addEventListener("click", t, !0), a.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: l };
}, unmounted(e, n) {
  e._clickOutside && (La(e, (t) => {
    var o;
    if (!t || !((o = e._clickOutside) != null && o[n.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: a } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[n.instance.$.uid]);
} };
function Mi(e) {
  const { modelValue: n, color: t, ...l } = e;
  return c(mt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && c("div", ee({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const ur = O({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Ii(), ...ve(), ...St(), ...Di(), ..._i(), ...Fi(), ...Be(), ...Zt() }, "VOverlay"), Oa = le()({ name: "VOverlay", directives: { ClickOutside: Oi }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...ur() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
  var X, Z;
  let { slots: t, attrs: l, emit: a } = n;
  const o = xe(e, "modelValue"), s = m({ get: () => o.value, set: (L) => {
    L && e.disabled || (o.value = L);
  } }), { teleportTarget: r } = function(L) {
    return { teleportTarget: m(() => {
      const W = L.value;
      if (W === !0 || !Ee)
        return;
      const G = W === !1 ? document.body : typeof W == "string" ? document.querySelector(W) : W;
      if (G == null)
        return void El(`Unable to locate target ${W}`);
      let z = G.querySelector(":scope > .v-overlay-container");
      return z || (z = document.createElement("div"), z.className = "v-overlay-container", G.appendChild(z)), z;
    }) };
  }(m(() => e.attach || e.contained)), { themeClasses: i } = $e(e), { rtlClasses: u, isRtl: v } = Et(), { hasContent: f, onAfterLeave: p } = function(L, W) {
    const G = de(!1), z = m(() => G.value || L.eager || W.value);
    return ae(W, () => G.value = !0), { isBooted: G, hasContent: z, onAfterLeave: function() {
      L.eager || (G.value = !1);
    } };
  }(e, s), d = ot(m(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: h, localTop: y, stackStyles: S } = function(L, W, G) {
    const z = Pe("useStack"), E = !G, H = Se(Ta, void 0), se = Xt({ activeChildren: /* @__PURE__ */ new Set() });
    ke(Ta, se);
    const Y = de(+W.value);
    gt(L, () => {
      var he;
      const ie = (he = Nt.at(-1)) == null ? void 0 : he[1];
      Y.value = ie ? ie + 10 : +W.value, E && Nt.push([z.uid, Y.value]), H == null || H.activeChildren.add(z.uid), Le(() => {
        if (E) {
          const je = nt(Nt).findIndex((kt) => kt[0] === z.uid);
          Nt.splice(je, 1);
        }
        H == null || H.activeChildren.delete(z.uid);
      });
    });
    const Q = de(!0);
    E && Re(() => {
      var he;
      const ie = ((he = Nt.at(-1)) == null ? void 0 : he[0]) === z.uid;
      setTimeout(() => Q.value = ie);
    });
    const re = m(() => !se.activeChildren.size);
    return { globalTop: mn(Q), localTop: re, stackStyles: m(() => ({ zIndex: Y.value })) };
  }(s, q(e, "zIndex"), e._disableGlobalStack), { activatorEl: x, activatorRef: A, target: F, targetEl: C, targetRef: B, activatorEvents: _, contentEvents: V, scrimEvents: g } = Ei(e, { isActive: s, isTop: y }), { dimensionStyles: k } = xt(e), w = function() {
    if (!Ee)
      return de(!1);
    const { ssr: L } = En();
    if (L) {
      const W = de(!1);
      return ht(() => {
        W.value = !0;
      }), W;
    }
    return de(!0);
  }(), { scopeId: P } = sr();
  ae(() => e.disabled, (L) => {
    L && (s.value = !1);
  });
  const $ = J(), D = J(), { contentStyles: M, updateLocation: T } = function(L, W) {
    const G = J({}), z = J();
    function E(H) {
      var se;
      (se = z.value) == null || se.call(z, H);
    }
    return Ee && gt(() => !(!W.isActive.value || !L.locationStrategy), (H) => {
      var se, Y;
      ae(() => L.locationStrategy, H), Le(() => {
        window.removeEventListener("resize", E), z.value = void 0;
      }), window.addEventListener("resize", E, { passive: !0 }), typeof L.locationStrategy == "function" ? z.value = (se = L.locationStrategy(W, L, G)) == null ? void 0 : se.updateLocation : z.value = (Y = rr[L.locationStrategy](W, L, G)) == null ? void 0 : Y.updateLocation;
    }), { contentStyles: G, updateLocation: z };
  }(e, { isRtl: v, contentEl: D, target: F, isActive: s });
  function N(L) {
    a("click:outside", L), e.persistent ? U() : s.value = !1;
  }
  function K() {
    return s.value && h.value;
  }
  function I(L) {
    var W, G;
    L.key === "Escape" && h.value && (e.persistent ? U() : (s.value = !1, (W = D.value) != null && W.contains(document.activeElement) && ((G = x.value) == null || G.focus())));
  }
  (function(L, W) {
    if (!Ee)
      return;
    let G;
    Re(async () => {
      G == null || G.stop(), W.isActive.value && L.scrollStrategy && (G = yn(), await Fe(), G.active && G.run(() => {
        var z;
        typeof L.scrollStrategy == "function" ? L.scrollStrategy(W, L, G) : (z = pl[L.scrollStrategy]) == null || z.call(pl, W, L, G);
      }));
    }), Le(() => {
      G == null || G.stop();
    });
  })(e, { root: $, contentEl: D, targetEl: C, isActive: s, updateLocation: T }), Ee && ae(s, (L) => {
    L ? window.addEventListener("keydown", I) : window.removeEventListener("keydown", I);
  }, { immediate: !0 }), Ze(() => {
    Ee && window.removeEventListener("keydown", I);
  });
  const R = (Z = (X = Pe("useRouter")) == null ? void 0 : X.proxy) == null ? void 0 : Z.$router;
  gt(() => e.closeOnBack, () => {
    (function(L, W) {
      let G, z, E = !1;
      function H(se) {
        var Y;
        (Y = se.state) != null && Y.replaced || (E = !0, setTimeout(() => E = !1));
      }
      Ee && (Fe(() => {
        window.addEventListener("popstate", H), G = L == null ? void 0 : L.beforeEach((se, Y, Q) => {
          ql ? E ? W(Q) : Q() : setTimeout(() => E ? W(Q) : Q()), ql = !0;
        }), z = L == null ? void 0 : L.afterEach(() => {
          ql = !1;
        });
      }), Le(() => {
        window.removeEventListener("popstate", H), G == null || G(), z == null || z();
      }));
    })(R, (L) => {
      h.value && s.value ? (L(!1), e.persistent ? U() : s.value = !1) : L();
    });
  });
  const j = J();
  function U() {
    e.noClickAnimation || D.value && Bt(D.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Sl });
  }
  function te() {
    p(), a("afterLeave");
  }
  return ae(() => s.value && (e.absolute || e.contained) && r.value == null, (L) => {
    if (L) {
      const W = vo($.value);
      W && W !== document.scrollingElement && (j.value = W.scrollTop);
    }
  }), ue(() => {
    var L;
    return c(pe, null, [(L = t.activator) == null ? void 0 : L.call(t, { isActive: s.value, props: ee({ ref: A, targetRef: B }, _.value, e.activatorProps) }), !e.disabled && w.value && f.value && c(gs, { disabled: !r.value, to: r.value }, { default: () => [c("div", ee({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": s.value, "v-overlay--contained": e.contained }, i.value, u.value, e.class], style: [S.value, { top: oe(j.value) }, e.style], ref: $ }, P, l), [c(Mi, ee({ color: d, modelValue: !!e.scrim && s.value }, g.value), null), c(tt, { appear: !0, persisted: !0, transition: e.transition, target: F.value, onAfterLeave: te }, { default: () => {
      var W;
      return [Ge(c("div", ee({ ref: D, class: ["v-overlay__content", e.contentClass], style: [k.value, M.value] }, V.value, e.contentProps), [(W = t.default) == null ? void 0 : W.call(t, { isActive: s })]), [[Vt, s.value], [yt("click-outside"), { handler: N, closeConditional: K, include: () => [x.value] }]])];
    } })])] })]);
  }), { activatorEl: x, target: F, animateClick: U, contentEl: D, globalTop: h, localTop: y, updateLocation: T };
} }), Xl = Symbol("Forwarded refs");
function Jl(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function Tn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[Xl] = t, new Proxy(e, { get(a, o) {
    if (Reflect.has(a, o))
      return Reflect.get(a, o);
    if (typeof o != "symbol" && !o.startsWith("$") && !o.startsWith("__")) {
      for (const s of t)
        if (s.value && Reflect.has(s.value, o)) {
          const r = Reflect.get(s.value, o);
          return typeof r == "function" ? r.bind(s.value) : r;
        }
    }
  }, has(a, o) {
    if (Reflect.has(a, o))
      return !0;
    if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))
      return !1;
    for (const s of t)
      if (s.value && Reflect.has(s.value, o))
        return !0;
    return !1;
  }, set(a, o, s) {
    if (Reflect.has(a, o))
      return Reflect.set(a, o, s);
    if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))
      return !1;
    for (const r of t)
      if (r.value && Reflect.has(r.value, o))
        return Reflect.set(r.value, o, s);
    return !1;
  }, getOwnPropertyDescriptor(a, o) {
    var r;
    const s = Reflect.getOwnPropertyDescriptor(a, o);
    if (s)
      return s;
    if (typeof o != "symbol" && !o.startsWith("$") && !o.startsWith("__")) {
      for (const i of t) {
        if (!i.value)
          continue;
        const u = Jl(i.value, o) ?? ("_" in i.value ? Jl((r = i.value._) == null ? void 0 : r.setupState, o) : void 0);
        if (u)
          return u;
      }
      for (const i of t) {
        const u = i.value && i.value[Xl];
        if (!u)
          continue;
        const v = u.slice();
        for (; v.length; ) {
          const f = v.shift(), p = Jl(f.value, o);
          if (p)
            return p;
          const d = f.value && f.value[Xl];
          d && v.push(...d);
        }
      }
    }
  } });
}
const Ni = O({ id: String, ...bt(ur({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: yo } }), ["absolute"]) }, "VMenu"), Ri = le()({ name: "VMenu", props: Ni(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = xe(e, "modelValue"), { scopeId: a } = sr(), o = qe(), s = m(() => e.id || `v-menu-${o}`), r = J(), i = Se(pn, null), u = de(0);
  async function v(y) {
    var A, F, C;
    const S = y.relatedTarget, x = y.target;
    await Fe(), l.value && S !== x && ((A = r.value) != null && A.contentEl) && ((F = r.value) != null && F.globalTop) && ![document, r.value.contentEl].includes(x) && !r.value.contentEl.contains(x) && ((C = ln(r.value.contentEl)[0]) == null || C.focus());
  }
  function f() {
    i == null || i.closeParents();
  }
  function p(y) {
    var S, x, A;
    !e.disabled && y.key === "Tab" && (no(ln((S = r.value) == null ? void 0 : S.contentEl, !1), y.shiftKey ? "prev" : "next", (F) => F.tabIndex >= 0) || (l.value = !1, (A = (x = r.value) == null ? void 0 : x.activatorEl) == null || A.focus()));
  }
  function d(y) {
    var x;
    if (e.disabled)
      return;
    const S = (x = r.value) == null ? void 0 : x.contentEl;
    S && l.value ? y.key === "ArrowDown" ? (y.preventDefault(), yl(S, "next")) : y.key === "ArrowUp" && (y.preventDefault(), yl(S, "prev")) : ["ArrowDown", "ArrowUp"].includes(y.key) && (l.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => d(y))));
  }
  ke(pn, { register() {
    ++u.value;
  }, unregister() {
    --u.value;
  }, closeParents() {
    setTimeout(() => {
      u.value || (l.value = !1, i == null || i.closeParents());
    }, 40);
  } }), ae(l, (y) => {
    y ? (i == null || i.register(), document.addEventListener("focusin", v, { once: !0 })) : (i == null || i.unregister(), document.removeEventListener("focusin", v));
  });
  const h = m(() => ee({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": s.value, onKeydown: d }, e.activatorProps));
  return ue(() => {
    const y = Oa.filterProps(e);
    return c(Oa, ee({ ref: r, class: ["v-menu", e.class], style: e.style }, y, { modelValue: l.value, "onUpdate:modelValue": (S) => l.value = S, absolute: !0, activatorProps: h.value, "onClick:outside": f, onKeydown: p }, a), { activator: t.activator, default: function() {
      for (var S = arguments.length, x = new Array(S), A = 0; A < S; A++)
        x[A] = arguments[A];
      return c(ze, { root: "VMenu" }, { default: () => {
        var F;
        return [(F = t.default) == null ? void 0 : F.call(t, ...x)];
      } });
    } });
  }), Tn({ id: s, ΨopenChildren: u }, r);
} }), ji = O({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ve(), ...Zt({ transition: { component: ho } }) }, "VCounter"), Wi = le()({ name: "VCounter", functional: !0, props: ji(), setup(e, n) {
  let { slots: t } = n;
  const l = m(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ue(() => c(tt, { transition: e.transition }, { default: () => [Ge(c("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Vt, e.active]])] })), {};
} }), zi = O({ floating: Boolean, ...ve() }, "VFieldLabel"), ul = le()({ name: "VFieldLabel", props: zi(), setup(e, n) {
  let { slots: t } = n;
  return ue(() => c(jo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Gi = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], cr = O({ appendInnerIcon: me, bgColor: String, clearable: Boolean, clearIcon: { type: me, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: me, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Gi.includes(e) }, "onClick:clear": Ne(), "onClick:appendInner": Ne(), "onClick:prependInner": Ne(), ...ve(), ...Bn(), ...Qe(), ...Be() }, "VField"), Ma = le()({ name: "VField", inheritAttrs: !1, props: { id: String, ...qo(), ...cr() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { themeClasses: o } = $e(e), { loaderClasses: s } = An(e), { focusClasses: r, isFocused: i, focus: u, blur: v } = $n(e), { InputIcon: f } = Ko(e), { roundedClasses: p } = ut(e), { rtlClasses: d } = Et(), h = m(() => e.dirty || e.active), y = m(() => !(e.singleLine || !e.label && !a.label)), S = qe(), x = m(() => e.id || `input-${S}`), A = m(() => `${x.value}-messages`), F = J(), C = J(), B = J(), _ = m(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: V, backgroundColorStyles: g } = ot(q(e, "bgColor")), { textColorClasses: k, textColorStyles: w } = Je(m(() => e.error || e.disabled ? void 0 : h.value && i.value ? e.color : e.baseColor));
  ae(h, (D) => {
    if (y.value) {
      const M = F.value.$el, T = C.value.$el;
      requestAnimationFrame(() => {
        const N = wn(M), K = T.getBoundingClientRect(), I = K.x - N.x, R = K.y - N.y - (N.height / 2 - K.height / 2), j = K.width / 0.75, U = Math.abs(j - N.width) > 1 ? { maxWidth: oe(j) } : void 0, te = getComputedStyle(M), X = getComputedStyle(T), Z = 1e3 * parseFloat(te.transitionDuration) || 150, L = parseFloat(X.getPropertyValue("--v-field-label-scale")), W = X.getPropertyValue("color");
        M.style.visibility = "visible", T.style.visibility = "hidden", Bt(M, { transform: `translate(${I}px, ${R}px) scale(${L})`, color: W, ...U }, { duration: Z, easing: Sl, direction: D ? "normal" : "reverse" }).finished.then(() => {
          M.style.removeProperty("visibility"), T.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const P = m(() => ({ isActive: h, isFocused: i, controlRef: B, blur: v, focus: u }));
  function $(D) {
    D.target !== document.activeElement && D.preventDefault();
  }
  return ue(() => {
    var I, R, j;
    const D = e.variant === "outlined", M = a["prepend-inner"] || e.prependInnerIcon, T = !(!e.clearable && !a.clear), N = !!(a["append-inner"] || e.appendInnerIcon || T), K = () => a.label ? a.label({ ...P.value, label: e.label, props: { for: x.value } }) : e.label;
    return c("div", ee({ class: ["v-field", { "v-field--active": h.value, "v-field--appended": N, "v-field--center-affix": e.centerAffix ?? !_.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": M, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !K(), [`v-field--variant-${e.variant}`]: !0 }, o.value, V.value, r.value, s.value, p.value, d.value, e.class], style: [g.value, e.style], onClick: $ }, t), [c("div", { class: "v-field__overlay" }, null), c(Eo, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), M && c("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && c(f, { key: "prepend-icon", name: "prependInner" }, null), (I = a["prepend-inner"]) == null ? void 0 : I.call(a, P.value)]), c("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && c(ul, { key: "floating-label", ref: C, class: [k.value], floating: !0, for: x.value, style: w.value }, { default: () => [K()] }), c(ul, { ref: F, for: x.value }, { default: () => [K()] }), (R = a.default) == null ? void 0 : R.call(a, { ...P.value, props: { id: x.value, class: "v-field__input", "aria-describedby": A.value }, focus: u, blur: v })]), T && c(bo, { key: "clear" }, { default: () => [Ge(c("div", { class: "v-field__clearable", onMousedown: (U) => {
      U.preventDefault(), U.stopPropagation();
    } }, [a.clear ? a.clear() : c(f, { name: "clear" }, null)]), [[Vt, e.dirty]])] }), N && c("div", { key: "append", class: "v-field__append-inner" }, [(j = a["append-inner"]) == null ? void 0 : j.call(a, P.value), e.appendInnerIcon && c(f, { key: "append-icon", name: "appendInner" }, null)]), c("div", { class: ["v-field__outline", k.value], style: w.value }, [D && c(pe, null, [c("div", { class: "v-field__outline__start" }, null), y.value && c("div", { class: "v-field__outline__notch" }, [c(ul, { ref: C, floating: !0, for: x.value }, { default: () => [K()] })]), c("div", { class: "v-field__outline__end" }, null)]), _.value && y.value && c(ul, { ref: C, floating: !0, for: x.value }, { default: () => [K()] })])]);
  }), { controlRef: B };
} }), Hi = ["color", "file", "time", "date", "datetime-local", "week", "month"], dr = O({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Vn(), ...cr() }, "VTextField"), vn = le()({ name: "VTextField", directives: { Intersect: xo }, inheritAttrs: !1, props: dr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const o = xe(e, "modelValue"), { isFocused: s, focus: r, blur: i } = $n(e), u = m(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), v = m(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), f = m(() => ["plain", "underlined"].includes(e.variant));
  function p(_, V) {
    var g, k;
    e.autofocus && _ && ((k = (g = V[0].target) == null ? void 0 : g.focus) == null || k.call(g));
  }
  const d = J(), h = J(), y = J(), S = m(() => Hi.includes(e.type) || e.persistentPlaceholder || s.value || e.active);
  function x() {
    var _;
    y.value !== document.activeElement && ((_ = y.value) == null || _.focus()), s.value || r();
  }
  function A(_) {
    l("mousedown:control", _), _.target !== y.value && (x(), _.preventDefault());
  }
  function F(_) {
    x(), l("click:control", _);
  }
  function C(_) {
    _.stopPropagation(), x(), Fe(() => {
      o.value = null, function(V) {
        for (var g = arguments.length, k = new Array(g > 1 ? g - 1 : 0), w = 1; w < g; w++)
          k[w - 1] = arguments[w];
        if (Array.isArray(V))
          for (const P of V)
            P(...k);
        else
          typeof V == "function" && V(...k);
      }(e["onClick:clear"], _);
    });
  }
  function B(_) {
    var g;
    const V = _.target;
    if (o.value = V.value, ((g = e.modelModifiers) == null ? void 0 : g.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const k = [V.selectionStart, V.selectionEnd];
      Fe(() => {
        V.selectionStart = k[0], V.selectionEnd = k[1];
      });
    }
  }
  return ue(() => {
    const _ = !!(a.counter || e.counter !== !1 && e.counter != null), V = !(!_ && !a.details), [g, k] = Sn(t), { modelValue: w, ...P } = Cl.filterProps(e), $ = function(D) {
      return eo(D, Object.keys(Ma.props).filter((M) => !gl(M) && M !== "class" && M !== "style"));
    }(e);
    return c(Cl, ee({ ref: d, modelValue: o.value, "onUpdate:modelValue": (D) => o.value = D, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, g, P, { centerAffix: !f.value, focused: s.value }), { ...a, default: (D) => {
      let { id: M, isDisabled: T, isDirty: N, isReadonly: K, isValid: I } = D;
      return c(Ma, ee({ ref: h, onMousedown: A, onClick: F, "onClick:clear": C, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, $, { id: M.value, active: S.value || N.value, dirty: N.value || e.dirty, disabled: T.value, focused: s.value, error: I.value === !1 }), { ...a, default: (R) => {
        let { props: { class: j, ...U } } = R;
        const te = Ge(c("input", ee({ ref: y, value: o.value, onInput: B, autofocus: e.autofocus, readonly: K.value, disabled: T.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: x, onBlur: i }, U, k), null), [[yt("intersect"), { handler: p }, null, { once: !0 }]]);
        return c(pe, null, [e.prefix && c("span", { class: "v-text-field__prefix" }, [c("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? c("div", { class: j, "data-no-activator": "" }, [a.default(), te]) : ms(te, { class: j }), e.suffix && c("span", { class: "v-text-field__suffix" }, [c("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: V ? (D) => {
      var M;
      return c(pe, null, [(M = a.details) == null ? void 0 : M.call(a, D), _ && c(pe, null, [c("span", null, null), c(Wi, { active: e.persistentCounter || s.value, value: u.value, max: v.value }, a.counter)])]);
    } : void 0 });
  }), Tn({}, d, h, y);
} }), Ki = O({ renderless: Boolean, ...ve() }, "VVirtualScrollItem"), qi = le()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Ki(), emits: { "update:height": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { resizeRef: o, contentRect: s } = Dl(void 0, "border");
  ae(() => {
    var r;
    return (r = s.value) == null ? void 0 : r.height;
  }, (r) => {
    r != null && l("update:height", r);
  }), ue(() => {
    var r, i;
    return e.renderless ? c(pe, null, [(r = a.default) == null ? void 0 : r.call(a, { itemRef: o })]) : c("div", ee({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(i = a.default) == null ? void 0 : i.call(a)]);
  });
} }), Ui = O({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function Yi(e, n) {
  const t = En(), l = de(0);
  Re(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = de(0), o = de(Math.ceil((parseInt(e.height) || t.height.value) / (l.value || 16)) || 1), s = de(0), r = de(0), i = J(), u = J();
  let v = 0;
  const { resizeRef: f, contentRect: p } = Dl();
  Re(() => {
    f.value = i.value;
  });
  const d = m(() => {
    var T;
    return i.value === document.documentElement ? t.height.value : ((T = p.value) == null ? void 0 : T.height) || parseInt(e.height) || 0;
  }), h = m(() => !!(i.value && u.value && d.value && l.value));
  let y = Array.from({ length: n.value.length }), S = Array.from({ length: n.value.length });
  const x = de(0);
  let A = -1;
  const F = function(T, N) {
    let K = 0;
    const I = function() {
      for (var R = arguments.length, j = new Array(R), U = 0; U < R; U++)
        j[U] = arguments[U];
      clearTimeout(K), K = setTimeout(() => T(...j), b(N));
    };
    return I.clear = () => {
      clearTimeout(K);
    }, I.immediate = T, I;
  }(() => {
    const T = performance.now();
    S[0] = 0;
    const N = n.value.length;
    for (let K = 1; K <= N - 1; K++)
      S[K] = (S[K - 1] || 0) + (y[K - 1] || l.value);
    x.value = Math.max(x.value, performance.now() - T);
  }, x), C = ae(h, (T) => {
    T && (C(), v = u.value.offsetTop, F.immediate(), P(), ~A && Fe(() => {
      Ee && window.requestAnimationFrame(() => {
        D(A), A = -1;
      });
    }));
  });
  function B(T) {
    return T = at(T, 0, n.value.length - 1), S[T] || 0;
  }
  function _(T) {
    return function(N, K) {
      let I = N.length - 1, R = 0, j = 0, U = null, te = -1;
      if (N[I] < K)
        return I;
      for (; R <= I; )
        if (j = R + I >> 1, U = N[j], U > K)
          I = j - 1;
        else {
          if (!(U < K))
            return U === K ? j : R;
          te = j, R = j + 1;
        }
      return te;
    }(S, T);
  }
  ae(d, (T, N) => {
    N && P();
  }), Le(() => {
    F.clear();
  });
  let V = 0, g = 0, k = 0, w = -1;
  function P() {
    cancelAnimationFrame(w), w = requestAnimationFrame($);
  }
  function $() {
    if (!i.value || !d.value)
      return;
    const T = V - v, N = Math.sign(g), K = at(_(Math.max(0, T - 100)), 0, n.value.length), I = at(_(T + d.value + 100) + 1, K + 1, n.value.length);
    if ((N !== -1 || K < a.value) && (N !== 1 || I > o.value)) {
      const R = B(a.value) - B(K), j = B(I) - B(o.value);
      Math.max(R, j) > 100 ? (a.value = K, o.value = I) : (K <= 0 && (a.value = K), I >= n.value.length && (o.value = I));
    }
    s.value = B(a.value), r.value = B(n.value.length) - B(o.value);
  }
  function D(T) {
    const N = B(T);
    !i.value || T && !N ? A = T : i.value.scrollTop = N;
  }
  const M = m(() => n.value.slice(a.value, o.value).map((T, N) => ({ raw: T, index: N + a.value })));
  return ae(n, () => {
    y = Array.from({ length: n.value.length }), S = Array.from({ length: n.value.length }), F.immediate(), P();
  }, { deep: !0 }), { containerRef: i, markerRef: u, computedItems: M, paddingTop: s, paddingBottom: r, scrollToIndex: D, handleScroll: function() {
    if (!i.value || !u.value)
      return;
    const T = i.value.scrollTop, N = performance.now();
    N - k > 500 ? (g = Math.sign(T - V), v = u.value.offsetTop) : g = T - V, V = T, k = N, P();
  }, handleScrollend: function() {
    i.value && u.value && (g = 0, k = 0, P());
  }, handleItemResize: function(T, N) {
    const K = y[T], I = l.value;
    l.value = I ? Math.min(l.value, N) : N, K === N && I === l.value || (y[T] = N, F());
  } };
}
const Xi = O({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Ui(), ...ve(), ...St() }, "VVirtualScroll"), Ji = le()({ name: "VVirtualScroll", props: Xi(), setup(e, n) {
  let { slots: t } = n;
  const l = Pe("VVirtualScroll"), { dimensionStyles: a } = xt(e), { containerRef: o, markerRef: s, handleScroll: r, handleScrollend: i, handleItemResize: u, scrollToIndex: v, paddingTop: f, paddingBottom: p, computedItems: d } = Yi(e, q(e, "items"));
  return gt(() => e.renderless, () => {
    function h() {
      var S, x;
      const y = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      o.value === document.documentElement ? (document[y]("scroll", r, { passive: !0 }), document[y]("scrollend", i)) : ((S = o.value) == null || S[y]("scroll", r, { passive: !0 }), (x = o.value) == null || x[y]("scrollend", i));
    }
    ht(() => {
      o.value = vo(l.vnode.el, !0), h(!0);
    }), Le(h);
  }), ue(() => {
    const h = d.value.map((y) => c(qi, { key: y.index, renderless: e.renderless, "onUpdate:height": (S) => u(y.index, S) }, { default: (S) => {
      var x;
      return (x = t.default) == null ? void 0 : x.call(t, { item: y.raw, index: y.index, ...S });
    } }));
    return e.renderless ? c(pe, null, [c("div", { ref: s, class: "v-virtual-scroll__spacer", style: { paddingTop: oe(f.value) } }, null), h, c("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: oe(p.value) } }, null)]) : c("div", { ref: o, class: ["v-virtual-scroll", e.class], onScrollPassive: r, onScrollend: i, style: [a.value, e.style] }, [c("div", { ref: s, class: "v-virtual-scroll__container", style: { paddingTop: oe(f.value), paddingBottom: oe(p.value) } }, [h])]);
  }), { scrollToIndex: v };
} });
function Zi(e, n) {
  const t = de(!1);
  let l;
  return { onListScroll: function(a) {
    cancelAnimationFrame(l), t.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }, onListKeydown: async function(a) {
    var r, i;
    if (a.key === "Tab" && ((r = n.value) == null || r.focus()), !["PageDown", "PageUp", "Home", "End"].includes(a.key))
      return;
    const o = (i = e.value) == null ? void 0 : i.$el;
    if (!o)
      return;
    a.key !== "Home" && a.key !== "End" || o.scrollTo({ top: a.key === "Home" ? 0 : o.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => {
        if (t.value) {
          const v = ae(t, () => {
            v(), u();
          });
        } else
          u();
      });
    }();
    const s = o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const u = o.getBoundingClientRect().top;
      for (const v of s)
        if (v.getBoundingClientRect().top >= u) {
          v.focus();
          break;
        }
    } else {
      const u = o.getBoundingClientRect().bottom;
      for (const v of [...s].reverse())
        if (v.getBoundingClientRect().bottom <= u) {
          v.focus();
          break;
        }
    }
  } };
}
const Qi = O({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: me, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...nr({ itemChildren: !1 }) }, "Select"), eu = O({ ...Qi(), ...bt(dr({ modelValue: null, role: "combobox" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Zt({ transition: { component: yo } }) }, "VSelect"), tu = le()({ name: "VSelect", props: eu(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = it(), a = J(), o = J(), s = J(), r = xe(e, "menu"), i = m({ get: () => r.value, set: (I) => {
    var R;
    r.value && !I && ((R = o.value) != null && R.ΨopenChildren) || (r.value = I);
  } }), { items: u, transformIn: v, transformOut: f } = function(I) {
    const R = m(() => ar(I, I.items)), j = m(() => R.value.some((U) => U.value === null));
    return { items: R, transformIn: function(U) {
      return j.value || (U = U.filter((te) => te !== null)), U.map((te) => I.returnObject && typeof te == "string" ? un(I, te) : R.value.find((X) => I.valueComparator(te, X.value)) || un(I, te));
    }, transformOut: function(U) {
      return I.returnObject ? U.map((te) => {
        let { raw: X } = te;
        return X;
      }) : U.map((te) => {
        let { value: X } = te;
        return X;
      });
    } };
  }(e), p = xe(e, "modelValue", [], (I) => v(I === null ? [null] : Ie(I)), (I) => {
    const R = f(I);
    return e.multiple ? R : R[0] ?? null;
  }), d = m(() => typeof e.counterValue == "function" ? e.counterValue(p.value) : typeof e.counterValue == "number" ? e.counterValue : p.value.length), h = Uo(), y = m(() => p.value.map((I) => I.value)), S = de(!1), x = m(() => i.value ? e.closeText : e.openText);
  let A, F = "";
  const C = m(() => e.hideSelected ? u.value.filter((I) => !p.value.some((R) => R === I)) : u.value), B = m(() => e.hideNoData && !C.value.length || e.readonly || (h == null ? void 0 : h.isReadonly.value)), _ = m(() => {
    var I;
    return { ...e.menuProps, activatorProps: { ...((I = e.menuProps) == null ? void 0 : I.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), V = J(), { onListScroll: g, onListKeydown: k } = Zi(V, a);
  function w(I) {
    e.openOnClear && (i.value = !0);
  }
  function P() {
    B.value || (i.value = !i.value);
  }
  function $(I) {
    var U, te;
    if (!I.key || e.readonly || h != null && h.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(I.key) && I.preventDefault(), ["Enter", "ArrowDown", " "].includes(I.key) && (i.value = !0), ["Escape", "Tab"].includes(I.key) && (i.value = !1), I.key === "Home" ? (U = V.value) == null || U.focus("first") : I.key === "End" && ((te = V.value) == null || te.focus("last")), e.multiple || !function(X) {
      const Z = X.key.length === 1, L = !X.ctrlKey && !X.metaKey && !X.altKey;
      return Z && L;
    }(I)))
      return;
    const R = performance.now();
    R - A > 1e3 && (F = ""), F += I.key.toLowerCase(), A = R;
    const j = u.value.find((X) => X.title.toLowerCase().startsWith(F));
    j !== void 0 && (p.value = [j]);
  }
  function D(I) {
    if (e.multiple) {
      const R = p.value.findIndex((j) => e.valueComparator(j.value, I.value));
      if (R === -1)
        p.value = [...p.value, I];
      else {
        const j = [...p.value];
        j.splice(R, 1), p.value = j;
      }
    } else
      p.value = [I], i.value = !1;
  }
  function M(I) {
    var R;
    (R = V.value) != null && R.$el.contains(I.relatedTarget) || (i.value = !1);
  }
  function T() {
    var I;
    S.value && ((I = a.value) == null || I.focus());
  }
  function N(I) {
    S.value = !0;
  }
  function K(I) {
    if (I == null)
      p.value = [];
    else if (hl(a.value, ":autofill") || hl(a.value, ":-webkit-autofill")) {
      const R = u.value.find((j) => j.title === I);
      R && D(R);
    } else
      a.value && (a.value.value = "");
  }
  return ae(i, () => {
    if (!e.hideSelected && i.value && p.value.length) {
      const I = C.value.findIndex((R) => p.value.some((j) => e.valueComparator(j.value, R.value)));
      Ee && window.requestAnimationFrame(() => {
        var R;
        I >= 0 && ((R = s.value) == null || R.scrollToIndex(I));
      });
    }
  }), ae(C, (I, R) => {
    S.value && (!I.length && e.hideNoData && (i.value = !1), !R.length && I.length && (i.value = !0));
  }), ue(() => {
    const I = !(!e.chips && !t.chip), R = !!(!e.hideNoData || C.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), j = p.value.length > 0, U = vn.filterProps(e), te = j || !S.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return c(vn, ee({ ref: a }, U, { modelValue: p.value.map((X) => X.props.value).join(", "), "onUpdate:modelValue": K, focused: S.value, "onUpdate:focused": (X) => S.value = X, validationValue: p.externalValue, counterValue: d.value, dirty: j, class: ["v-select", { "v-select--active-menu": i.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": p.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, inputmode: "none", placeholder: te, "onClick:clear": w, "onMousedown:control": P, onBlur: M, onKeydown: $, "aria-label": l(x.value), title: l(x.value) }), { ...t, default: () => c(pe, null, [c(Ri, ee({ ref: o, modelValue: i.value, "onUpdate:modelValue": (X) => i.value = X, activator: "parent", contentClass: "v-select__content", disabled: B.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: T }, _.value), { default: () => [R && c(Ai, { ref: V, selected: y.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (X) => X.preventDefault(), onKeydown: k, onFocusin: N, onScrollPassive: g, tabindex: "-1", "aria-live": "polite", color: e.itemColor ?? e.color }, { default: () => {
      var X, Z, L;
      return [(X = t["prepend-item"]) == null ? void 0 : X.call(t), !C.value.length && !e.hideNoData && (((Z = t["no-data"]) == null ? void 0 : Z.call(t)) ?? c(Pl, { title: l(e.noDataText) }, null)), c(Ji, { ref: s, renderless: !0, items: C.value }, { default: (W) => {
        var se;
        let { item: G, index: z, itemRef: E } = W;
        const H = ee(G.props, { ref: E, key: z, onClick: () => D(G) });
        return ((se = t.item) == null ? void 0 : se.call(t, { item: G, index: z, props: H })) ?? c(Pl, ee(H, { role: "option" }), { prepend: (Y) => {
          let { isSelected: Q } = Y;
          return c(pe, null, [e.multiple && !e.hideSelected ? c(_t, { key: G.value, modelValue: Q, ripple: !1, tabindex: "-1" }, null) : void 0, G.props.prependAvatar && c(Ut, { image: G.props.prependAvatar }, null), G.props.prependIcon && c(Ae, { icon: G.props.prependIcon }, null)]);
        } });
      } }), (L = t["append-item"]) == null ? void 0 : L.call(t)];
    } })] }), p.value.map((X, Z) => {
      const L = { "onClick:close": function(z) {
        z.stopPropagation(), z.preventDefault(), D(X);
      }, onMousedown(z) {
        z.preventDefault(), z.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, W = I ? !!t.chip : !!t.selection, G = W ? ao(I ? t.chip({ item: X, index: Z, props: L }) : t.selection({ item: X, index: Z })) : void 0;
      if (!W || G)
        return c("div", { key: X.value, class: "v-select__selection" }, [I ? t.chip ? c(ze, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: X.title } } }, { default: () => [G] }) : c(di, ee({ key: "chip", closable: e.closableChips, size: "small", text: X.title, disabled: X.props.disabled }, L), null) : G ?? c("span", { class: "v-select__selection-text" }, [X.title, e.multiple && Z < p.value.length - 1 && c("span", { class: "v-select__selection-comma" }, [vl(",")])])]);
    })]), "append-inner": function() {
      var W;
      for (var X = arguments.length, Z = new Array(X), L = 0; L < X; L++)
        Z[L] = arguments[L];
      return c(pe, null, [(W = t["append-inner"]) == null ? void 0 : W.call(t, ...Z), e.menuIcon ? c(Ae, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Tn({ isFocused: S, menu: i, select: D }, a);
} }), lu = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), nu = O({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function au(e, n, t, l) {
  const a = J([]), o = J(/* @__PURE__ */ new Map()), s = m(() => l != null && l.transform ? b(n).map((r) => [r, l.transform(r)]) : b(n));
  return Re(() => {
    const r = typeof t == "function" ? t() : b(t), i = typeof r != "string" && typeof r != "number" ? "" : String(r), u = function(d, h, y) {
      var C;
      const S = [], x = (y == null ? void 0 : y.default) ?? lu, A = !!(y != null && y.filterKeys) && Ie(y.filterKeys), F = Object.keys((y == null ? void 0 : y.customKeyFilter) ?? {}).length;
      if (!(d != null && d.length))
        return S;
      e:
        for (let B = 0; B < d.length; B++) {
          const [_, V = _] = Ie(d[B]), g = {}, k = {};
          let w = -1;
          if (h && !(y != null && y.noFilter)) {
            if (typeof _ == "object") {
              const D = A || Object.keys(V);
              for (const M of D) {
                const T = De(V, M, V), N = (C = y == null ? void 0 : y.customKeyFilter) == null ? void 0 : C[M];
                if (w = N ? N(T, h, _) : x(T, h, _), w !== -1 && w !== !1)
                  N ? g[M] = w : k[M] = w;
                else if ((y == null ? void 0 : y.filterMode) === "every")
                  continue e;
              }
            } else
              w = x(_, h, _), w !== -1 && w !== !1 && (k.title = w);
            const P = Object.keys(k).length, $ = Object.keys(g).length;
            if (!P && !$ || (y == null ? void 0 : y.filterMode) === "union" && $ !== F && !P || (y == null ? void 0 : y.filterMode) === "intersection" && ($ !== F || !P))
              continue;
          }
          S.push({ index: B, matches: { ...k, ...g } });
        }
      return S;
    }(s.value, i, { customKeyFilter: { ...e.customKeyFilter, ...b(l == null ? void 0 : l.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), v = b(n), f = [], p = /* @__PURE__ */ new Map();
    u.forEach((d) => {
      let { index: h, matches: y } = d;
      const S = v[h];
      f.push(S), p.set(S.value, y);
    }), a.value = f, o.value = p;
  }), { filteredItems: a, filteredMatches: o, getMatches: function(r) {
    return o.value.get(r.value);
  } };
}
const ou = O({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), pr = Symbol.for("vuetify:datatable:expanded");
function vr(e) {
  const n = q(e, "expandOnClick"), t = xe(e, "expanded", e.expanded, (s) => new Set(s), (s) => [...s.values()]);
  function l(s, r) {
    const i = new Set(t.value);
    r ? i.add(s.value) : i.delete(s.value), t.value = i;
  }
  function a(s) {
    return t.value.has(s.value);
  }
  const o = { expand: l, expanded: t, expandOnClick: n, isExpanded: a, toggleExpand: function(s) {
    l(s, !a(s));
  } };
  return ke(pr, o), o;
}
function fr() {
  const e = Se(pr);
  if (!e)
    throw new Error("foo");
  return e;
}
const ru = O({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), gr = Symbol.for("vuetify:data-table-group");
function mr(e) {
  return { groupBy: xe(e, "groupBy") };
}
function yr(e) {
  const { groupBy: n, sortBy: t } = e, l = J(/* @__PURE__ */ new Set());
  function a(s) {
    return l.value.has(s.id);
  }
  const o = { sortByWithGroups: m(() => n.value.map((s) => ({ ...s, order: s.order ?? !1 })).concat(t.value)), toggleGroup: function(s) {
    const r = new Set(l.value);
    a(s) ? r.delete(s.id) : r.add(s.id), l.value = r;
  }, opened: l, groupBy: n, extractRows: function(s) {
    return function r(i) {
      const u = [];
      for (const v of i.items)
        "type" in v && v.type === "group" ? u.push(...r(v)) : u.push(v);
      return u;
    }({ type: "group", items: s, id: "dummy", key: "dummy", value: "dummy", depth: 0 });
  }, isGroupOpen: a };
  return ke(gr, o), o;
}
function hr() {
  const e = Se(gr);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function br(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length)
    return [];
  const a = function(r, i) {
    if (!r.length)
      return [];
    const u = /* @__PURE__ */ new Map();
    for (const v of r) {
      const f = zt(v.raw, i);
      u.has(f) || u.set(f, []), u.get(f).push(v);
    }
    return u;
  }(e, n[0]), o = [], s = n.slice(1);
  return a.forEach((r, i) => {
    const u = n[0], v = `${l}_${u}_${i}`;
    o.push({ depth: t, id: v, key: u, value: i, items: s.length ? br(r, s, t + 1, v) : r, type: "group" });
  }), o;
}
function Sr(e, n) {
  const t = [];
  for (const l of e)
    "type" in l && l.type === "group" ? (l.value != null && t.push(l), (n.has(l.id) || l.value == null) && t.push(...Sr(l.items, n))) : t.push(l);
  return t;
}
function xr(e, n, t) {
  return { flatItems: m(() => n.value.length ? Sr(br(e.value, n.value.map((l) => l.key)), t.value) : e.value) };
}
function wr(e) {
  let { page: n, itemsPerPage: t, sortBy: l, groupBy: a, search: o } = e;
  const s = Pe("VDataTable"), r = m(() => ({ page: n.value, itemsPerPage: t.value, sortBy: l.value, groupBy: a.value, search: o.value }));
  let i = null;
  ae(r, () => {
    st(i, r.value) || ((i == null ? void 0 : i.search) !== r.value.search && (n.value = 1), s.emit("update:options", r.value), i = r.value);
  }, { deep: !0, immediate: !0 });
}
const kr = O({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), Cr = Symbol.for("vuetify:data-table-pagination");
function Pr(e) {
  return { page: xe(e, "page", void 0, (n) => +(n ?? 1)), itemsPerPage: xe(e, "itemsPerPage", void 0, (n) => +(n ?? 10)) };
}
function Br(e) {
  const { page: n, itemsPerPage: t, itemsLength: l } = e, a = m(() => t.value === -1 ? 0 : t.value * (n.value - 1)), o = m(() => t.value === -1 ? l.value : Math.min(l.value, a.value + t.value)), s = m(() => t.value === -1 || l.value === 0 ? 1 : Math.ceil(l.value / t.value));
  Re(() => {
    n.value > s.value && (n.value = s.value);
  });
  const r = { page: n, itemsPerPage: t, startIndex: a, stopIndex: o, pageCount: s, itemsLength: l, nextPage: function() {
    n.value = at(n.value + 1, 1, s.value);
  }, prevPage: function() {
    n.value = at(n.value - 1, 1, s.value);
  }, setPage: function(i) {
    n.value = at(i, 1, s.value);
  }, setItemsPerPage: function(i) {
    t.value = i, n.value = 1;
  } };
  return ke(Cr, r), r;
}
const su = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var l;
  let { items: n, value: t } = e;
  return new Set(t ? [(l = n[0]) == null ? void 0 : l.value] : []);
}, selectAll: (e) => {
  let { selected: n } = e;
  return n;
} }, Ar = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: n } = e;
  return n;
}, select: (e) => {
  let { items: n, value: t, selected: l } = e;
  for (const a of n)
    t ? l.add(a.value) : l.delete(a.value);
  return l;
}, selectAll: (e) => {
  let { value: n, currentPage: t, selected: l } = e;
  return Ar.select({ items: t, value: n, selected: l });
} }, _r = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: n } = e;
  return n;
}, select: (e) => {
  let { items: n, value: t, selected: l } = e;
  for (const a of n)
    t ? l.add(a.value) : l.delete(a.value);
  return l;
}, selectAll: (e) => {
  let { value: n, allItems: t, selected: l } = e;
  return _r.select({ items: t, value: n, selected: l });
} }, iu = O({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: { type: Function, default: st } }, "DataTable-select"), Fr = Symbol.for("vuetify:data-table-selection");
function $r(e, n) {
  let { allItems: t, currentPage: l } = n;
  const a = xe(e, "modelValue", e.modelValue, (d) => new Set(Ie(d).map((h) => {
    var y;
    return ((y = t.value.find((S) => e.valueComparator(h, S.value))) == null ? void 0 : y.value) ?? h;
  })), (d) => [...d.values()]), o = m(() => t.value.filter((d) => d.selectable)), s = m(() => l.value.filter((d) => d.selectable)), r = m(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return su;
      case "all":
        return _r;
      default:
        return Ar;
    }
  });
  function i(d) {
    return Ie(d).every((h) => a.value.has(h.value));
  }
  function u(d, h) {
    const y = r.value.select({ items: d, value: h, selected: new Set(a.value) });
    a.value = y;
  }
  const v = m(() => a.value.size > 0), f = m(() => {
    const d = r.value.allSelected({ allItems: o.value, currentPage: s.value });
    return !!d.length && i(d);
  }), p = { toggleSelect: function(d) {
    u([d], !i([d]));
  }, select: u, selectAll: function(d) {
    const h = r.value.selectAll({ value: d, allItems: o.value, currentPage: s.value, selected: new Set(a.value) });
    a.value = h;
  }, isSelected: i, isSomeSelected: function(d) {
    return Ie(d).some((h) => a.value.has(h.value));
  }, someSelected: v, allSelected: f, showSelectAll: r.value.showSelectAll };
  return ke(Fr, p), p;
}
function Rl() {
  const e = Se(Fr);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const uu = O({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), Vr = Symbol.for("vuetify:data-table-sort");
function Ir(e) {
  return { sortBy: xe(e, "sortBy"), mustSort: q(e, "mustSort"), multiSort: q(e, "multiSort") };
}
function Er(e) {
  const { sortBy: n, mustSort: t, multiSort: l, page: a } = e, o = { sortBy: n, toggleSort: (s) => {
    if (s.key == null)
      return;
    let r = n.value.map((u) => ({ ...u })) ?? [];
    const i = r.find((u) => u.key === s.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : r = r.filter((u) => u.key !== s.key) : i.order = "desc" : r = l.value ? [...r, { key: s.key, order: "asc" }] : [{ key: s.key, order: "asc" }], n.value = r, a && (a.value = 1);
  }, isSorted: function(s) {
    return !!n.value.find((r) => r.key === s.key);
  } };
  return ke(Vr, o), o;
}
function cu(e, n, t, l) {
  const a = it();
  return { sortedItems: m(() => t.value.length ? function(s, r, i, u) {
    const v = new Intl.Collator(i, { sensitivity: "accent", usage: "sort" });
    return [...s].sort((f, p) => {
      for (let d = 0; d < r.length; d++) {
        const h = r[d].key, y = r[d].order ?? "asc";
        if (y === !1)
          continue;
        let S = zt(f.raw, h), x = zt(p.raw, h);
        if (y === "desc" && ([S, x] = [x, S]), u == null ? void 0 : u[h]) {
          const A = u[h](S, x);
          if (!A)
            continue;
          return A;
        }
        if (S instanceof Date && x instanceof Date)
          return S.getTime() - x.getTime();
        if ([S, x] = [S, x].map((A) => A != null ? A.toString().toLocaleLowerCase() : A), S !== x)
          return ol(S) && ol(x) ? 0 : ol(S) ? -1 : ol(x) ? 1 : isNaN(S) || isNaN(x) ? v.compare(S, x) : Number(S) - Number(x);
      }
      return 0;
    });
  }(n.value, t.value, a.current.value, { ...e.customKeySort, ...l == null ? void 0 : l.value }) : n.value) };
}
const du = O({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 == 0 }, totalVisible: [Number, String], firstIcon: { type: me, default: "$first" }, prevIcon: { type: me, default: "$prev" }, nextIcon: { type: me, default: "$next" }, lastIcon: { type: me, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Tt(), ...ve(), ...Ye(), ...wt(), ...Qe(), ...Lt(), ...Ve({ tag: "nav" }), ...Be(), ...ct({ variant: "text" }) }, "VPagination"), Na = le()({ name: "VPagination", props: du(), emits: { "update:modelValue": (e) => !0, first: (e) => !0, prev: (e) => !0, next: (e) => !0, last: (e) => !0 }, setup(e, n) {
  let { slots: t, emit: l } = n;
  const a = xe(e, "modelValue"), { t: o, n: s } = it(), { isRtl: r } = Et(), { themeClasses: i } = $e(e), { width: u } = En(), v = de(-1);
  Xe(void 0, { scoped: !0 });
  const { resizeRef: f } = Dl((g) => {
    if (!g.length)
      return;
    const { target: k, contentRect: w } = g[0], P = k.querySelector(".v-pagination__list > *");
    if (!P)
      return;
    const $ = w.width, D = P.offsetWidth + 2 * parseFloat(getComputedStyle(P).marginRight);
    v.value = y($, D);
  }), p = m(() => parseInt(e.length, 10)), d = m(() => parseInt(e.start, 10)), h = m(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : v.value >= 0 ? v.value : y(u.value, 58));
  function y(g, k) {
    const w = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(+((g - k * w) / k).toFixed(2)));
  }
  const S = m(() => {
    if (p.value <= 0 || isNaN(p.value) || p.value > Number.MAX_SAFE_INTEGER)
      return [];
    if (h.value <= 0)
      return [];
    if (h.value === 1)
      return [a.value];
    if (p.value <= h.value)
      return al(p.value, d.value);
    const g = h.value % 2 == 0, k = g ? h.value / 2 : Math.floor(h.value / 2), w = g ? k : k + 1, P = p.value - k;
    if (w - a.value >= 0)
      return [...al(Math.max(1, h.value - 1), d.value), e.ellipsis, p.value];
    if (a.value - P >= (g ? 1 : 0)) {
      const $ = h.value - 1, D = p.value - $ + d.value;
      return [d.value, e.ellipsis, ...al($, D)];
    }
    {
      const $ = Math.max(1, h.value - 3), D = $ === 1 ? a.value : a.value - Math.ceil($ / 2) + d.value;
      return [d.value, e.ellipsis, ...al($, D), e.ellipsis, p.value];
    }
  });
  function x(g, k, w) {
    g.preventDefault(), a.value = k, w && l(w, k);
  }
  const { refs: A, updateRef: F } = function() {
    const g = J([]);
    return ys(() => g.value = []), { refs: g, updateRef: function(k, w) {
      g.value[w] = k;
    } };
  }();
  Xe({ VPaginationBtn: { color: q(e, "color"), border: q(e, "border"), density: q(e, "density"), size: q(e, "size"), variant: q(e, "variant"), rounded: q(e, "rounded"), elevation: q(e, "elevation") } });
  const C = m(() => S.value.map((g, k) => {
    const w = (P) => F(P, k);
    if (typeof g == "string")
      return { isActive: !1, key: `ellipsis-${k}`, page: g, props: { ref: w, ellipsis: !0, icon: !0, disabled: !0 } };
    {
      const P = g === a.value;
      return { isActive: P, key: g, page: s(g), props: { ref: w, ellipsis: !1, icon: !0, disabled: !!e.disabled || +e.length < 2, color: P ? e.activeColor : e.color, ariaCurrent: P, ariaLabel: o(P ? e.currentPageAriaLabel : e.pageAriaLabel, g), onClick: ($) => x($, g) } };
    }
  })), B = m(() => {
    const g = !!e.disabled || a.value <= d.value, k = !!e.disabled || a.value >= d.value + p.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (w) => x(w, d.value, "first"), disabled: g, ariaLabel: o(e.firstAriaLabel), ariaDisabled: g } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (w) => x(w, a.value - 1, "prev"), disabled: g, ariaLabel: o(e.previousAriaLabel), ariaDisabled: g }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (w) => x(w, a.value + 1, "next"), disabled: k, ariaLabel: o(e.nextAriaLabel), ariaDisabled: k }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (w) => x(w, d.value + p.value - 1, "last"), disabled: k, ariaLabel: o(e.lastAriaLabel), ariaDisabled: k } : void 0 };
  });
  function _() {
    var k;
    const g = a.value - d.value;
    (k = A.value[g]) == null || k.$el.focus();
  }
  function V(g) {
    g.key === Un.left && !e.disabled && a.value > +e.start ? (a.value = a.value - 1, Fe(_)) : g.key === Un.right && !e.disabled && a.value < d.value + p.value - 1 && (a.value = a.value + 1, Fe(_));
  }
  return ue(() => c(e.tag, { ref: f, class: ["v-pagination", i.value, e.class], style: e.style, role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: V, "data-test": "v-pagination-root" }, { default: () => [c("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && c("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [t.first ? t.first(B.value.first) : c(pt, ee({ _as: "VPaginationBtn" }, B.value.first), null)]), c("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [t.prev ? t.prev(B.value.prev) : c(pt, ee({ _as: "VPaginationBtn" }, B.value.prev), null)]), C.value.map((g, k) => c("li", { key: g.key, class: ["v-pagination__item", { "v-pagination__item--is-active": g.isActive }], "data-test": "v-pagination-item" }, [t.item ? t.item(g) : c(pt, ee({ _as: "VPaginationBtn" }, g.props), { default: () => [g.page] })])), c("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [t.next ? t.next(B.value.next) : c(pt, ee({ _as: "VPaginationBtn" }, B.value.next), null)]), e.showFirstLastPage && c("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [t.last ? t.last(B.value.last) : c(pt, ee({ _as: "VPaginationBtn" }, B.value.last), null)])])] })), {};
} }), Dn = O({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Al = le()({ name: "VDataTableFooter", props: Dn(), setup(e, n) {
  let { slots: t } = n;
  const { t: l } = it(), { page: a, pageCount: o, startIndex: s, stopIndex: r, itemsLength: i, itemsPerPage: u, setItemsPerPage: v } = function() {
    const p = Se(Cr);
    if (!p)
      throw new Error("Missing pagination!");
    return p;
  }(), f = m(() => e.itemsPerPageOptions.map((p) => typeof p == "number" ? { value: p, title: p === -1 ? l("$vuetify.dataFooter.itemsPerPageAll") : String(p) } : { ...p, title: l(p.title) }));
  return ue(() => {
    var d;
    const p = Na.filterProps(e);
    return c("div", { class: "v-data-table-footer" }, [(d = t.prepend) == null ? void 0 : d.call(t), c("div", { class: "v-data-table-footer__items-per-page" }, [c("span", null, [l(e.itemsPerPageText)]), c(tu, { items: f.value, modelValue: u.value, "onUpdate:modelValue": (h) => v(Number(h)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), c("div", { class: "v-data-table-footer__info" }, [c("div", null, [l(e.pageText, i.value ? s.value + 1 : 0, r.value, i.value)])]), c("div", { class: "v-data-table-footer__pagination" }, [c(Na, ee({ modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, density: "comfortable", "first-aria-label": e.firstPageLabel, "last-aria-label": e.lastPageLabel, length: o.value, "next-aria-label": e.nextPageLabel, "previous-aria-label": e.prevPageLabel, rounded: !0, "show-first-last-page": !0, "total-visible": e.showCurrentPage ? 1 : 0, variant: "plain" }, p), null)])]);
  }), {};
} }), Ln = (Ra = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Zl = (e, n) => {
  let { slots: t } = n;
  const l = e.tag ?? "td";
  return c(l, { class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: oe(e.height), width: oe(e.width), left: oe(e.fixedOffset || null) } }, { default: () => {
    var a;
    return [(a = t.default) == null ? void 0 : a.call(t)];
  } });
}, Zl.props = Ra, Zl);
var Ra, Zl;
const pu = O({ headers: Array }, "DataTable-header"), Tr = Symbol.for("vuetify:data-table-headers"), Dr = { title: "", sortable: !1 }, vu = { ...Dr, width: 48 };
function fn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (e.children)
    for (const t of e.children)
      fn(t, n);
  else
    n.push(e);
  return n;
}
function Lr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && Lr(t.children, n);
  return n;
}
function fu(e) {
  if (e.key)
    return e.key === "data-table-group" ? Dr : ["data-table-expand", "data-table-select"].includes(e.key) ? vu : void 0;
}
function On(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => On(t, n + 1))) : n;
}
function gu(e, n) {
  const t = [];
  let l = 0;
  const a = function() {
    const o = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((s) => ({ element: s, priority: 0 }));
    return { enqueue: (s, r) => {
      let i = !1;
      for (let u = 0; u < o.length; u++)
        if (o[u].priority > r) {
          o.splice(u, 0, { element: s, priority: r }), i = !0;
          break;
        }
      i || o.push({ element: s, priority: r });
    }, size: () => o.length, count: () => {
      let s = 0;
      if (!o.length)
        return 0;
      const r = Math.floor(o[0].priority);
      for (let i = 0; i < o.length; i++)
        Math.floor(o[i].priority) === r && (s += 1);
      return s;
    }, dequeue: () => o.shift() };
  }(e);
  for (; a.size() > 0; ) {
    let o = a.count();
    const s = [];
    let r = 1;
    for (; o > 0; ) {
      const { element: i, priority: u } = a.dequeue(), v = n - l - On(i);
      if (s.push({ ...i, rowspan: v ?? 1, colspan: i.children ? fn(i).length : 1 }), i.children)
        for (const f of i.children) {
          const p = u % 1 + r / Math.pow(10, l + 2);
          a.enqueue(f, l + v + p);
        }
      r += 1, o -= 1;
    }
    l += 1, t.push(s);
  }
  return { columns: e.map((o) => fn(o)).flat(), headers: t };
}
function Or(e) {
  const n = [];
  for (const t of e) {
    const l = { ...fu(t), ...t }, a = l.key ?? (typeof l.value == "string" ? l.value : null), o = l.value ?? a ?? null, s = { ...l, key: a, value: o, sortable: l.sortable ?? (l.key != null || !!l.sort), children: l.children ? Or(l.children) : void 0 };
    n.push(s);
  }
  return n;
}
function Mr(e, n) {
  const t = J([]), l = J([]), a = J(), o = J();
  Re(() => {
    var d, h, y;
    const r = (e.headers || Object.keys(e.items[0] ?? {}).map((S) => ({ key: S, title: Ft(S) }))).slice(), i = Lr(r);
    (d = n == null ? void 0 : n.groupBy) != null && d.value.length && !i.has("data-table-group") && r.unshift({ key: "data-table-group", title: "Group" }), (h = n == null ? void 0 : n.showSelect) != null && h.value && !i.has("data-table-select") && r.unshift({ key: "data-table-select" }), (y = n == null ? void 0 : n.showExpand) != null && y.value && !i.has("data-table-expand") && r.push({ key: "data-table-expand" });
    const u = Or(r);
    (function(S) {
      let x = !1;
      function A(B) {
        if (B)
          if (arguments.length > 1 && arguments[1] !== void 0 && arguments[1] && (B.fixed = !0), B.fixed)
            if (B.children)
              for (let _ = B.children.length - 1; _ >= 0; _--)
                A(B.children[_], !0);
            else
              x ? isNaN(+B.width) && so(`Multiple fixed columns should have a static width (key: ${B.key})`) : B.lastFixed = !0, x = !0;
          else if (B.children)
            for (let _ = B.children.length - 1; _ >= 0; _--)
              A(B.children[_]);
          else
            x = !1;
      }
      for (let B = S.length - 1; B >= 0; B--)
        A(S[B]);
      function F(B) {
        let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (!B)
          return _;
        if (B.children) {
          B.fixedOffset = _;
          for (const V of B.children)
            _ = F(V, _);
        } else
          B.fixed && (B.fixedOffset = _, _ += parseFloat(B.width || "0") || 0);
        return _;
      }
      let C = 0;
      for (const B of S)
        C = F(B, C);
    })(u);
    const v = Math.max(...u.map((S) => On(S))) + 1, f = gu(u, v);
    t.value = f.headers, l.value = f.columns;
    const p = f.headers.flat(1);
    a.value = p.reduce((S, x) => (x.sortable && x.key && x.sort && (S[x.key] = x.sort), S), {}), o.value = p.reduce((S, x) => (x.key && x.filter && (S[x.key] = x.filter), S), {});
  });
  const s = { headers: t, columns: l, sortFunctions: a, filterFunctions: o };
  return ke(Tr, s), s;
}
function jl() {
  const e = Se(Tr);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Nr = O({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: me, default: "$sortAsc" }, sortDescIcon: { type: me, default: "$sortDesc" }, ...Bn() }, "VDataTableHeaders"), _l = le()({ name: "VDataTableHeaders", props: Nr(), setup(e, n) {
  let { slots: t } = n;
  const { toggleSort: l, sortBy: a, isSorted: o } = function() {
    const F = Se(Vr);
    if (!F)
      throw new Error("Missing sort!");
    return F;
  }(), { someSelected: s, allSelected: r, selectAll: i, showSelectAll: u } = Rl(), { columns: v, headers: f } = jl(), { loaderClasses: p } = An(e);
  function d(F, C) {
    if (e.sticky || F.fixed)
      return { position: "sticky", left: F.fixed ? oe(F.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${C})` : void 0 };
  }
  function h(F) {
    const C = a.value.find((B) => B.key === F.key);
    return C ? C.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: y, backgroundColorStyles: S } = ot(e, "color"), x = m(() => ({ headers: f.value, columns: v.value, toggleSort: l, isSorted: o, sortBy: a.value, someSelected: s.value, allSelected: r.value, selectAll: i, getSortIcon: h })), A = (F) => {
    let { column: C, x: B, y: _ } = F;
    const V = C.key === "data-table-select" || C.key === "data-table-expand";
    return c(Ln, ee({ tag: "th", align: C.align, class: ["v-data-table__th", { "v-data-table__th--sortable": C.sortable, "v-data-table__th--sorted": o(C), "v-data-table__th--fixed": C.fixed, "v-data-table__th--sticky": e.sticky }, p.value], style: { width: oe(C.width), minWidth: oe(C.minWidth), ...d(C, _) }, colspan: C.colspan, rowspan: C.rowspan, onClick: C.sortable ? () => l(C) : void 0, fixed: C.fixed, lastFixed: C.lastFixed, noPadding: V }, C.headerProps), { default: () => {
      var w;
      const g = `header.${C.key}`, k = { column: C, selectAll: i, isSorted: o, toggleSort: l, sortBy: a.value, someSelected: s.value, allSelected: r.value, getSortIcon: h };
      return t[g] ? t[g](k) : C.key === "data-table-select" ? ((w = t["header.data-table-select"]) == null ? void 0 : w.call(t, k)) ?? (u && c(_t, { modelValue: r.value, indeterminate: s.value && !r.value, "onUpdate:modelValue": i }, null)) : c("div", { class: "v-data-table-header__content" }, [c("span", null, [C.title]), C.sortable && c(Ae, { key: "icon", class: "v-data-table-header__sort-icon", icon: h(C) }, null), e.multiSort && o(C) && c("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...y.value], style: S.value }, [a.value.findIndex((P) => P.key === C.key) + 1])]);
    } });
  };
  ue(() => c(pe, null, [t.headers ? t.headers(x.value) : f.value.map((F, C) => c("tr", null, [F.map((B, _) => c(A, { column: B, x: _, y: C }, null))])), e.loading && c("tr", { class: "v-data-table-progress" }, [c("th", { colspan: v.value.length }, [c(Eo, { name: "v-data-table-progress", absolute: !0, active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), mu = O({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), yu = le()({ name: "VDataTableGroupHeaderRow", props: mu(), setup(e, n) {
  let { slots: t } = n;
  const { isGroupOpen: l, toggleGroup: a, extractRows: o } = hr(), { isSelected: s, isSomeSelected: r, select: i } = Rl(), { columns: u } = jl(), v = m(() => o([e.item]));
  return () => c("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var p, d;
    if (f.key === "data-table-group") {
      const h = l(e.item) ? "$expand" : "$next", y = () => a(e.item);
      return ((p = t["data-table-group"]) == null ? void 0 : p.call(t, { item: e.item, count: v.value.length, props: { icon: h, onClick: y } })) ?? c(Ln, { class: "v-data-table-group-header-row__column" }, { default: () => [c(pt, { size: "small", variant: "text", icon: h, onClick: y }, null), c("span", null, [e.item.value]), c("span", null, [vl("("), v.value.length, vl(")")])] });
    }
    if (f.key === "data-table-select") {
      const h = s(v.value), y = r(v.value) && !h, S = (x) => i(v.value, x);
      return ((d = t["data-table-select"]) == null ? void 0 : d.call(t, { props: { modelValue: h, indeterminate: y, "onUpdate:modelValue": S } })) ?? c("td", null, [c(_t, { modelValue: h, indeterminate: y, "onUpdate:modelValue": S }, null)]);
    }
    return c("td", null, null);
  })]);
} }), hu = O({ index: Number, item: Object, cellProps: [Object, Function], onClick: Ne(), onContextmenu: Ne(), onDblclick: Ne() }, "VDataTableRow"), bu = le()({ name: "VDataTableRow", props: hu(), setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, toggleSelect: a } = Rl(), { isExpanded: o, toggleExpand: s } = fr(), { columns: r } = jl();
  ue(() => c("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }], onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && r.value.map((i, u) => {
    const v = e.item, f = `item.${i.key}`, p = { index: e.index, item: v.raw, internalItem: v, value: zt(v.columns, i.key), column: i, isSelected: l, toggleSelect: a, isExpanded: o, toggleExpand: s }, d = typeof e.cellProps == "function" ? e.cellProps({ index: p.index, item: p.item, internalItem: p.internalItem, value: p.value, column: i }) : e.cellProps, h = typeof i.cellProps == "function" ? i.cellProps({ index: p.index, item: p.item, internalItem: p.internalItem, value: p.value }) : i.cellProps;
    return c(Ln, ee({ align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, d, h), { default: () => {
      var y, S;
      return t[f] ? t[f](p) : i.key === "data-table-select" ? ((y = t["item.data-table-select"]) == null ? void 0 : y.call(t, p)) ?? c(_t, { disabled: !v.selectable, modelValue: l([v]), onClick: en(() => a(v), ["stop"]) }, null) : i.key === "data-table-expand" ? ((S = t["item.data-table-expand"]) == null ? void 0 : S.call(t, p)) ?? c(pt, { icon: o(v) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: en(() => s(v), ["stop"]) }, null) : Za(p.value);
    } });
  })]));
} }), Rr = O({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function] }, "VDataTableRows"), Fl = le()({ name: "VDataTableRows", inheritAttrs: !1, props: Rr(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { columns: a } = jl(), { expandOnClick: o, toggleExpand: s, isExpanded: r } = fr(), { isSelected: i, toggleSelect: u } = Rl(), { toggleGroup: v, isGroupOpen: f } = hr(), { t: p } = it();
  return ue(() => {
    var d, h;
    return !e.loading || e.items.length && !l.loading ? e.loading || e.items.length || e.hideNoData ? c(pe, null, [e.items.map((y, S) => {
      var F;
      if (y.type === "group") {
        const C = { index: S, item: y, columns: a.value, isExpanded: r, toggleExpand: s, isSelected: i, toggleSelect: u, toggleGroup: v, isGroupOpen: f };
        return l["group-header"] ? l["group-header"](C) : c(yu, ee({ key: `group-header_${y.id}`, item: y }, va(t, ":group-header", () => C)), l);
      }
      const x = { index: S, item: y.raw, internalItem: y, columns: a.value, isExpanded: r, toggleExpand: s, isSelected: i, toggleSelect: u }, A = { ...x, props: ee({ key: `item_${y.key ?? y.index}`, onClick: o.value ? () => {
        s(y);
      } : void 0, index: S, item: y, cellProps: e.cellProps }, va(t, ":row", () => x), typeof e.rowProps == "function" ? e.rowProps({ item: x.item, index: x.index, internalItem: x.internalItem }) : e.rowProps) };
      return c(pe, { key: A.props.key }, [l.item ? l.item(A) : c(bu, A.props, l), r(y) && ((F = l["expanded-row"]) == null ? void 0 : F.call(l, x))]);
    })]) : c("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [c("td", { colspan: a.value.length }, [((d = l["no-data"]) == null ? void 0 : d.call(l)) ?? p(e.noDataText)])]) : c("tr", { class: "v-data-table-rows-loading", key: "loading" }, [c("td", { colspan: a.value.length }, [((h = l.loading) == null ? void 0 : h.call(l)) ?? p(e.loadingText)])]);
  }), {};
} }), jr = O({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...ve(), ...Ye(), ...Ve(), ...Be() }, "VTable"), $l = le()({ name: "VTable", props: jr(), setup(e, n) {
  let { slots: t, emit: l } = n;
  const { themeClasses: a } = $e(e), { densityClasses: o } = et(e);
  return ue(() => c(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, a.value, o.value, e.class], style: e.style }, { default: () => {
    var s, r, i;
    return [(s = t.top) == null ? void 0 : s.call(t), t.default ? c("div", { class: "v-table__wrapper", style: { height: oe(e.height) } }, [c("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (i = t.bottom) == null ? void 0 : i.call(t)];
  } })), {};
} }), Su = O({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function xu(e, n, t) {
  return n.map((l, a) => function(o, s, r, i) {
    const u = o.returnObject ? s : De(s, o.itemValue), v = De(s, o.itemSelectable, !0), f = i.reduce((p, d) => (d.key != null && (p[d.key] = De(s, d.value)), p), {});
    return { type: "item", key: o.returnObject ? De(s, o.itemValue) : u, index: r, value: u, selectable: v, columns: f, raw: s };
  }(e, l, a, t));
}
function Wr(e, n) {
  return { items: m(() => xu(e, e.items, n.value)) };
}
const zr = O({ ...Rr(), width: [String, Number], search: String, ...ou(), ...ru(), ...pu(), ...Su(), ...iu(), ...uu(), ...Nr(), ...jr() }, "DataTable"), wu = O({ ...kr(), ...zr(), ...nu(), ...Dn() }, "VDataTable"), ku = le()({ name: "VDataTable", props: wu(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { groupBy: a } = mr(e), { sortBy: o, multiSort: s, mustSort: r } = Ir(e), { page: i, itemsPerPage: u } = Pr(e), { columns: v, headers: f, sortFunctions: p, filterFunctions: d } = Mr(e, { groupBy: a, showSelect: q(e, "showSelect"), showExpand: q(e, "showExpand") }), { items: h } = Wr(e, v), y = q(e, "search"), { filteredItems: S } = au(e, h, y, { transform: (L) => L.columns, customKeyFilter: d }), { toggleSort: x } = Er({ sortBy: o, multiSort: s, mustSort: r, page: i }), { sortByWithGroups: A, opened: F, extractRows: C, isGroupOpen: B, toggleGroup: _ } = yr({ groupBy: a, sortBy: o }), { sortedItems: V } = cu(e, S, A, p), { flatItems: g } = xr(V, a, F), k = m(() => g.value.length), { startIndex: w, stopIndex: P, pageCount: $, setItemsPerPage: D } = Br({ page: i, itemsPerPage: u, itemsLength: k }), { paginatedItems: M } = function(L) {
    const { items: W, startIndex: G, stopIndex: z, itemsPerPage: E } = L;
    return { paginatedItems: m(() => E.value <= 0 ? W.value : W.value.slice(G.value, z.value)) };
  }({ items: g, startIndex: w, stopIndex: P, itemsPerPage: u }), T = m(() => C(M.value)), { isSelected: N, select: K, selectAll: I, toggleSelect: R, someSelected: j, allSelected: U } = $r(e, { allItems: h, currentPage: T }), { isExpanded: te, toggleExpand: X } = vr(e);
  wr({ page: i, itemsPerPage: u, sortBy: o, groupBy: a, search: y }), Xe({ VDataTableRows: { hideNoData: q(e, "hideNoData"), noDataText: q(e, "noDataText"), loading: q(e, "loading"), loadingText: q(e, "loadingText") } });
  const Z = m(() => ({ page: i.value, itemsPerPage: u.value, sortBy: o.value, pageCount: $.value, toggleSort: x, setItemsPerPage: D, someSelected: j.value, allSelected: U.value, isSelected: N, select: K, selectAll: I, toggleSelect: R, isExpanded: te, toggleExpand: X, isGroupOpen: B, toggleGroup: _, items: T.value.map((L) => L.raw), internalItems: T.value, groupedItems: M.value, columns: v.value, headers: f.value }));
  return ue(() => {
    const L = Al.filterProps(e), W = _l.filterProps(e), G = Fl.filterProps(e), z = $l.filterProps(e);
    return c($l, ee({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, z), { top: () => {
      var E;
      return (E = l.top) == null ? void 0 : E.call(l, Z.value);
    }, default: () => {
      var E, H, se, Y, Q, re;
      return l.default ? l.default(Z.value) : c(pe, null, [(E = l.colgroup) == null ? void 0 : E.call(l, Z.value), c("thead", null, [c(_l, W, l)]), (H = l.thead) == null ? void 0 : H.call(l, Z.value), c("tbody", null, [(se = l["body.prepend"]) == null ? void 0 : se.call(l, Z.value), l.body ? l.body(Z.value) : c(Fl, ee(t, G, { items: M.value }), l), (Y = l["body.append"]) == null ? void 0 : Y.call(l, Z.value)]), (Q = l.tbody) == null ? void 0 : Q.call(l, Z.value), (re = l.tfoot) == null ? void 0 : re.call(l, Z.value)]);
    }, bottom: () => l.bottom ? l.bottom(Z.value) : c(pe, null, [c(tr, null, null), c(Al, L, { prepend: l["footer.prepend"] })]) });
  }), {};
} }), Cu = O({ itemsLength: { type: [Number, String], required: !0 }, ...kr(), ...zr(), ...Dn() }, "VDataTableServer"), Pu = le()({ name: "VDataTableServer", props: Cu(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { groupBy: a } = mr(e), { sortBy: o, multiSort: s, mustSort: r } = Ir(e), { page: i, itemsPerPage: u } = Pr(e), v = m(() => parseInt(e.itemsLength, 10)), { columns: f, headers: p } = Mr(e, { groupBy: a, showSelect: q(e, "showSelect"), showExpand: q(e, "showExpand") }), { items: d } = Wr(e, f), { toggleSort: h } = Er({ sortBy: o, multiSort: s, mustSort: r, page: i }), { opened: y, isGroupOpen: S, toggleGroup: x, extractRows: A } = yr({ groupBy: a, sortBy: o }), { pageCount: F, setItemsPerPage: C } = Br({ page: i, itemsPerPage: u, itemsLength: v }), { flatItems: B } = xr(d, a, y), { isSelected: _, select: V, selectAll: g, toggleSelect: k, someSelected: w, allSelected: P } = $r(e, { allItems: d, currentPage: d }), { isExpanded: $, toggleExpand: D } = vr(e), M = m(() => A(d.value));
  wr({ page: i, itemsPerPage: u, sortBy: o, groupBy: a, search: q(e, "search") }), ke("v-data-table", { toggleSort: h, sortBy: o }), Xe({ VDataTableRows: { hideNoData: q(e, "hideNoData"), noDataText: q(e, "noDataText"), loading: q(e, "loading"), loadingText: q(e, "loadingText") } });
  const T = m(() => ({ page: i.value, itemsPerPage: u.value, sortBy: o.value, pageCount: F.value, toggleSort: h, setItemsPerPage: C, someSelected: w.value, allSelected: P.value, isSelected: _, select: V, selectAll: g, toggleSelect: k, isExpanded: $, toggleExpand: D, isGroupOpen: S, toggleGroup: x, items: M.value.map((N) => N.raw), internalItems: M.value, groupedItems: B.value, columns: f.value, headers: p.value }));
  ue(() => {
    const N = Al.filterProps(e), K = _l.filterProps(e), I = Fl.filterProps(e), R = $l.filterProps(e);
    return c($l, ee({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, R), { top: () => {
      var j;
      return (j = l.top) == null ? void 0 : j.call(l, T.value);
    }, default: () => {
      var j, U, te, X, Z, L;
      return l.default ? l.default(T.value) : c(pe, null, [(j = l.colgroup) == null ? void 0 : j.call(l, T.value), c("thead", { class: "v-data-table__thead", role: "rowgroup" }, [c(_l, ee(K, { sticky: e.fixedHeader }), l)]), (U = l.thead) == null ? void 0 : U.call(l, T.value), c("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(te = l["body.prepend"]) == null ? void 0 : te.call(l, T.value), l.body ? l.body(T.value) : c(Fl, ee(t, I, { items: B.value }), l), (X = l["body.append"]) == null ? void 0 : X.call(l, T.value)]), (Z = l.tbody) == null ? void 0 : Z.call(l, T.value), (L = l.tfoot) == null ? void 0 : L.call(l, T.value)]);
    }, bottom: () => l.bottom ? l.bottom(T.value) : c(Al, N, { prepend: l["footer.prepend"] }) });
  });
} }), Gr = Nl.reduce((e, n) => (e[n] = { type: [Boolean, String, Number], default: !1 }, e), {}), Hr = Nl.reduce((e, n) => (e["offset" + Ft(n)] = { type: [String, Number], default: null }, e), {}), Kr = Nl.reduce((e, n) => (e["order" + Ft(n)] = { type: [String, Number], default: null }, e), {}), ja = { col: Object.keys(Gr), offset: Object.keys(Hr), order: Object.keys(Kr) };
function Bu(e, n, t) {
  let l = e;
  if (t != null && t !== !1)
    return n && (l += `-${n.replace(e, "")}`), e === "col" && (l = "v-" + l), (e !== "col" || t !== "" && t !== !0) && (l += `-${t}`), l.toLowerCase();
}
const Au = ["auto", "start", "end", "center", "baseline", "stretch"], _u = O({ cols: { type: [Boolean, String, Number], default: !1 }, ...Gr, offset: { type: [String, Number], default: null }, ...Hr, order: { type: [String, Number], default: null }, ...Kr, alignSelf: { type: String, default: null, validator: (e) => Au.includes(e) }, ...ve(), ...Ve() }, "VCol"), At = le()({ name: "VCol", props: _u(), setup(e, n) {
  let { slots: t } = n;
  const l = m(() => {
    const a = [];
    let o;
    for (o in ja)
      ja[o].forEach((r) => {
        const i = e[r], u = Bu(o, r, i);
        u && a.push(u);
      });
    const s = a.some((r) => r.startsWith("v-col-"));
    return a.push({ "v-col": !s || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), a;
  });
  return () => {
    var a;
    return $t(e.tag, { class: [l.value, e.class], style: e.style }, (a = t.default) == null ? void 0 : a.call(t));
  };
} }), Mn = ["start", "end", "center"], qr = ["space-between", "space-around", "space-evenly"];
function Nn(e, n) {
  return Nl.reduce((t, l) => (t[e + Ft(l)] = n(), t), {});
}
const Fu = [...Mn, "baseline", "stretch"], Ur = (e) => Fu.includes(e), Yr = Nn("align", () => ({ type: String, default: null, validator: Ur })), $u = [...Mn, ...qr], Xr = (e) => $u.includes(e), Jr = Nn("justify", () => ({ type: String, default: null, validator: Xr })), Vu = [...Mn, ...qr, "stretch"], Zr = (e) => Vu.includes(e), Qr = Nn("alignContent", () => ({ type: String, default: null, validator: Zr })), Wa = { align: Object.keys(Yr), justify: Object.keys(Jr), alignContent: Object.keys(Qr) }, Iu = { align: "align", justify: "justify", alignContent: "align-content" };
function Eu(e, n, t) {
  let l = Iu[e];
  if (t != null)
    return n && (l += `-${n.replace(e, "")}`), l += `-${t}`, l.toLowerCase();
}
const Tu = O({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Ur }, ...Yr, justify: { type: String, default: null, validator: Xr }, ...Jr, alignContent: { type: String, default: null, validator: Zr }, ...Qr, ...ve(), ...Ve() }, "VRow"), es = le()({ name: "VRow", props: Tu(), setup(e, n) {
  let { slots: t } = n;
  const l = m(() => {
    const a = [];
    let o;
    for (o in Wa)
      Wa[o].forEach((s) => {
        const r = e[s], i = Eu(o, s, r);
        i && a.push(i);
      });
    return a.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), a;
  });
  return () => {
    var a;
    return $t(e.tag, { class: ["v-row", l.value, e.class], style: e.style }, (a = t.default) == null ? void 0 : a.call(t));
  };
} }), Du = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function Lu(e) {
  return c("div", { class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`] }, [arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []]);
}
function za(e) {
  const [n, t] = e.split("@");
  return Array.from({ length: t }).map(() => Wl(n));
}
function Wl(e) {
  let n = [];
  if (!e)
    return n;
  const t = Du[e];
  if (e !== t) {
    if (e.includes(","))
      return Ga(e);
    if (e.includes("@"))
      return za(e);
    t.includes(",") ? n = Ga(t) : t.includes("@") ? n = za(t) : t && n.push(Wl(t));
  }
  return [Lu(e, n)];
}
function Ga(e) {
  return e.replace(/\s/g, "").split(",").map(Wl);
}
const Ou = O({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...St(), ...wt(), ...Be() }, "VSkeletonLoader"), Mu = le()({ name: "VSkeletonLoader", props: Ou(), setup(e, n) {
  let { slots: t } = n;
  const { backgroundColorClasses: l, backgroundColorStyles: a } = ot(q(e, "color")), { dimensionStyles: o } = xt(e), { elevationClasses: s } = Dt(e), { themeClasses: r } = $e(e), { t: i } = it(), u = m(() => Wl(Ie(e.type).join(",")));
  return ue(() => {
    var f;
    const v = !t.default || e.loading;
    return c("div", { class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, r.value, l.value, s.value], style: [a.value, v ? o.value : {}], "aria-busy": e.boilerplate ? void 0 : v, "aria-live": e.boilerplate ? void 0 : "polite", "aria-label": e.boilerplate ? void 0 : i(e.loadingText), role: e.boilerplate ? void 0 : "alert" }, [v ? u.value : (f = t.default) == null ? void 0 : f.call(t)]);
  }), {};
} }), Vl = { background: "--v-theme-surface", border: "transparent", color: "--v-theme-on-surface" }, ts = { colorPercentageChange: 15, colorPercentageDirection: "desc", colors: () => ({ default: Vl, footer: { background: void 0, color: void 0 }, header: { background: void 0, color: void 0 }, percentageChange: 15, percentageDirection: "desc" }), columnWidths: () => [], defaultColors: () => Vl, density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footerBackgroundColor: void 0, footerColor: void 0, footers: () => [], headerBackgroundColor: void 0, headerColor: void 0, height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 0, searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }, Nu = rt({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (n, t) => be(n.$slots, "bottom") }), ce = "v-drilldown-table";
function Ha(e, n, t = "") {
  let l = e;
  const a = n.length - 1;
  if (a < 0)
    return l === void 0 ? t : l;
  for (let o = 0; o < a; o++) {
    if (l == null)
      return t;
    l = l[n[o]];
  }
  return l == null || l[n[a]] === void 0 ? t : l[n[a]];
}
function Ru(e, n, t = "") {
  if (n == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const a = n(e, t);
    return a === void 0 ? t : a;
  }
  if (typeof n == "string")
    return function(a, o, s = "") {
      let r = o;
      return a != null && r && typeof r == "string" ? a[r] !== void 0 ? a[r] : (r = r.replace(/\[(\w+)\]/g, ".$1"), r = r.replace(/^\./, ""), Ha(a, r.split("."), s)) : s;
    }(e, n, t);
  if (Array.isArray(n))
    return Ha(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
const Ka = (e) => {
  const { id: n, sortBy: t } = e;
  if (t) {
    const l = t.find((a) => a.key === n);
    if (l)
      return l.order;
  }
}, lt = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
};
function ls(e) {
  const n = e.title, t = [n, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : n || "";
}
function Ql(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Wt(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (Ql(e) && Ql(t))
    for (const l in t)
      Ql(t[l]) ? (e[l] || Object.assign(e, { [l]: {} }), Wt(e[l], t[l])) : Object.assign(e, { [l]: t[l] });
  return Wt(e, ...n);
}
const ns = (e) => {
  const { align: n } = e;
  return { "d-flex align-center": !0, [`justify-${n}`]: n || !1, "justify-start": !n };
}, as = (e) => {
  const { level: n } = e;
  return { "d-flex": !0, [`${ce}--header-select-all-checkbox`]: !0, [`${ce}--header-select-all-checkbox-${n}`]: !0 };
};
function os(e) {
  return e === "transparent" || e === "none" || e === "inherit" || e === "currentColor" || e === "initial" || e === "unset";
}
function rs(e) {
  return e.includes("--v-theme");
}
const ss = (e, n) => {
  if (os(e))
    return e;
  if (rs(e))
    return `rgb(var(${e}))`;
  const t = function(l, a) {
    const o = a.global.current.value.colors;
    return Object.entries(o).find(([s]) => s === l);
  }(e, n);
  return t ? `hsl(${Il(t[1])})` : `hsl(${Il(e)})`;
}, ju = (e) => {
  const { colors: n, level: t, prop: l = "default", theme: a, type: o } = e, s = { ...n[l] }, r = n == null ? void 0 : n.percentageDirection;
  if (s === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${l}' does not exist`);
  let i = ((u, v, f) => {
    let p = 100, d = (u == null ? void 0 : u.percentageChange) ?? 0;
    return isNaN(d) && (p = 100), d *= v, f !== "desc" && f !== "descending" || (p = 100 - d), f !== "asc" && f !== "ascending" || (p = 0 + d), p < 0 && (p = 0), p > 100 && (p = 100), isNaN(p) && (p = 100), v === 0 && (p = 100), p;
  })(n, t - 1, r);
  return o || Object.entries(s).forEach(([u, v]) => {
    let f = a.global.current.value.colors[v] ?? v;
    if (f || (f = n.default[u] ?? "transparent", f = ss(f, a)), os(f))
      return void (s[u] = f);
    if ((u === "color" || t === 0 && r === "asc") && (i = 100), rs(f))
      return void (s[u] = `rgb(var(${f}))`);
    const p = `/ ${i}%`, d = Il(f);
    if (d.includes("/"))
      return s[u] = `hsl(${d})`;
    s[u] = `hsl(${Il(f)} ${p})`;
  }), s;
};
function Il(e) {
  let n = function(v) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let p = v;
    return Object.entries(f).forEach(([d, h]) => {
      v.toLowerCase() != d.toLowerCase() || (p = h);
    }), p;
  }(e), t = 0, l = 0, a = 0, o = 0, s = 0, r = 0;
  if (n.substring(0, 1) === "#")
    n = function(v) {
      let f = v.replace("#", "");
      f.length === 3 && (f = f.split("").map((y) => y + y).join(""));
      const p = parseInt(f.substring(0, 2), 16), d = parseInt(f.substring(2, 4), 16), h = parseInt(f.substring(4, 6), 16);
      return [p, d, h];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/\d+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/\d+/g)].map(Number), t = n[0], l = n[1], a = n[2], `${t} ${l}% ${a}%`;
  [o, s, r] = n, o /= 255, s /= 255, r /= 255;
  const i = Math.max(o, s, r), u = Math.min(o, s, r);
  if (i === null || !u === null || isNaN(i) || isNaN(u)) {
    const v = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${v})" in it's place.`), v;
  }
  if (t = (i + u) / 2, l = (i + u) / 2, a = (i + u) / 2, i == u)
    t = l = 0;
  else {
    const v = i - u;
    switch (l = a > 0.5 ? v / (2 - i - u) : v / (i + u), i) {
      case o:
        t = (s - r) / v + (s < r ? 6 : 0);
        break;
      case s:
        t = (r - o) / v + 2;
        break;
      case r:
        t = (o - s) / v + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), l = Math.round(100 * l), a = Math.round(100 * a), `${t} ${l}% ${a}%`;
}
const Rn = (e) => {
  const { colors: n, level: t, prop: l = "default", themeColors: a, type: o = null } = e;
  if (typeof n != "object" || n == null)
    return {};
  const s = ju({ colors: n, level: t, prop: l, theme: a, type: o });
  return o ? s[o] : s;
}, Wu = ["colspan"], zu = rt({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const n = Tl(), t = e, l = m(() => ((x) => {
    const { isLinearOnly: A, loaderHeight: F } = x;
    let C = { height: 0, minHeight: 0 };
    return b(A) && (C = { height: lt({ str: b(F) }), minHeight: lt({ str: b(F) }) }), C;
  })({ isLinearOnly: u, loaderHeight: i })), a = m(() => ((x) => {
    const { isLinearOnly: A, loaderHeight: F } = x;
    return b(A) ? { height: lt({ str: b(F) }), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: u, loaderHeight: i })), o = m(() => ((x) => {
    const { isLinearOnly: A } = x;
    return { [`${ce}--loader-tr`]: !0, [`${ce}--loader-tr-not-linear`]: !b(A), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: u })), s = m(() => ({ [`${ce}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), r = m(() => {
    var x;
    return ((x = t.loaderProps) == null ? void 0 : x.linear) ?? {};
  }), i = m(() => {
    var x, A;
    return function(F) {
      return lt({ str: F }) || "2px";
    }(((A = (x = t.loaderProps) == null ? void 0 : x.linear) == null ? void 0 : A.height) || "2px");
  }), u = m(() => {
    let x = !1;
    return t.loaderType !== null && t.loaderType !== !1 && (x = function(A) {
      let F = !1;
      return A === "linear" && (F = !0), Array.isArray(A) && (F = A.length === 1 && A[0] === "linear"), F;
    }(t.loaderType)), x;
  }), v = m(() => {
    var x;
    return ((x = t.loaderProps) == null ? void 0 : x.circular) ?? {};
  }), f = m(() => {
    var x;
    return ((x = t.loaderProps) == null ? void 0 : x.skelton) ?? {};
  }), p = m(() => t.loading), d = m(() => {
    var A, F;
    let x = ((F = (A = t.loaderProps) == null ? void 0 : A.text) == null ? void 0 : F.color) ?? "surface-variant";
    return x = ss(x, n), { color: x };
  }), h = m(() => t.loadingText || "Loading..."), y = (x) => {
    const A = t.loaderType;
    return Array.isArray(A) ? A.indexOf(x) : 1;
  }, S = (x) => {
    const A = t.loaderType;
    return x === t.loaderType || !!Array.isArray(A) && A.includes(x);
  };
  return (x, A) => (ne(), ye("tr", { class: ge(b(o)), style: Te(b(l)) }, [Ke("td", { class: "px-0 ma-0", colspan: x.colspan, style: Te(b(a)) }, [x.loading ? (ne(), we(es, { key: 0, class: ge(b(s)), "no-gutters": "" }, { default: fe(() => [S("linear") ? (ne(), we(At, { key: 0, class: "pa-0 ma-0", order: y("linear") }, { default: fe(() => [c(Io, _e(We(b(r))), null, 16)]), _: 1 }, 8, ["order"])) : Ce("", !0), S("circular") ? (ne(), we(At, { key: 1, class: "pa-0 my-2", order: y("circular") }, { default: fe(() => [c(Fo, _e(We(b(v))), null, 16)]), _: 1 }, 8, ["order"])) : Ce("", !0), S("skelton") ? (ne(), we(At, { key: 2, class: "pa-0 ma-0", order: y("skelton") }, { default: fe(() => [c(Mu, ee(b(f), { loading: b(p) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : Ce("", !0), S("text") ? (ne(), we(At, { key: 3, class: "my-2", order: y("text"), style: Te(b(d)) }, { default: fe(() => [vl(Za(b(h)), 1)]), _: 1 }, 8, ["order", "style"])) : Ce("", !0)]), _: 1 }, 8, ["class"])) : Ce("", !0)], 12, Wu)], 6));
} }), jn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of n)
    t[l] = a;
  return t;
}, Gu = jn(zu, [["__scopeId", "data-v-b954d026"]]), Hu = ["colspan"], Ku = ["colspan", "innerHTML"], qu = ["colspan"], Uu = ["colspan", "innerHTML"], Yu = ["colspan", "onClick"], Xu = ["innerHTML"], Ju = rt({ __name: "HeadersSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, headerBackgroundColor: {}, headerColor: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: n }) {
  const t = Jt(), l = n, a = e, o = J(), s = Se(Symbol.for("vuetify:icons")), r = J(!1), i = J(a.items), u = J(a.matchColumnWidths), v = J(a.columnWidths || []), f = J(a.sortAscIcon), p = m(() => a.tableModelValue), d = Tl(), h = m(() => function() {
    const w = a.slotProps.columns;
    if (a.level <= 1 || !u.value)
      return w;
    if (v.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(w).forEach(([P]) => {
      Object.keys(w).length !== parseInt(P) + 1 && w[P].width === void 0 && (w[P].width = v.value[parseInt(P)]);
    }), w;
  }());
  ae(() => a.items, (w) => {
    i.value = w, o.value = (w == null ? void 0 : w.filter((P) => P.selectable)) ?? [], o.value = w == null ? void 0 : w.filter((P) => P.selectable !== !1);
  });
  const y = m(() => ((w) => {
    const { level: P } = w;
    return { [`${ce}--header-row`]: !0, [`${ce}--header-row-${P}`]: !0 };
  })({ level: a.level })), S = (w, P = "") => (($) => {
    const { column: D, level: M, slotName: T = "" } = $;
    return { [`${ce}--header-row-th`]: !0, [`${ce}--header-row-th-${T}`]: T !== "", [`${ce}--header-row-th-${T}-${M}`]: T !== "", [`${ce}--header-row-th-${M}`]: !0, [`${ce}--header-row-th-sortable`]: D.sortable || !1, [`${ce}--header-row-th-sortable-default-color`]: D.sortable || !1, [`${D.cellClass}`]: D.cellClass || !1 };
  })({ column: w, level: a.level, slotName: P }), x = m(() => {
    const w = a.colors;
    return w && (w.header = { background: a.headerBackgroundColor, color: a.headerColor }, w.percentageChange = a.colorPercentageChange, w.percentageDirection = a.colorPercentageDirection), w;
  }), A = (w, P = !1) => (($) => {
    const { colors: D, column: M, dataTableExpand: T = !1, level: N, theme: K } = $, I = { minWidth: M.width ? lt({ str: M.width }) : "auto", width: M.width ? lt({ str: M.width }) : "auto" };
    T && !M.width && (I.width = M.width ? lt({ str: M.width }) : "56px", I.minWidth = M.width ? lt({ str: M.width }) : "56px");
    const R = Rn({ colors: D, level: N, prop: "header", themeColors: K });
    return I.backgroundColor = R.background, I.color = R.color, I;
  })({ colors: x.value, column: w, dataTableExpand: P, level: a.level, theme: d }), F = (w) => {
    const P = A(w);
    return a.headerColor === void 0 ? {} : { color: P.color };
  }, C = m(() => {
    var w;
    return !a.slotProps.allSelected && ((w = p == null ? void 0 : p.value) == null ? void 0 : w.length) !== 0;
  });
  function B() {
    r.value = !r.value, a.slotProps.selectAll(r.value), l("click:selectAll", r.value);
  }
  ae(() => a.slotProps.allSelected, (w) => {
    r.value = w;
  }), ae(() => a.slotProps.someSelected, () => {
    if (a.slotProps.allSelected)
      return !1;
  });
  const _ = m(() => as({ level: a.level })), V = (w) => ((P) => {
    const { iconOptions: $, key: D, level: M, sortBy: T } = P;
    return { "fa-fw": ($ == null ? void 0 : $.defaultSet) === "fa", "mx-1": !0, [`${ce}--header-row-th-sortable-sort-icon`]: !0, [`${ce}--header-row-th-sortable-sort-icon-${M}`]: !0, [`${ce}--header-row-th-sortable-sort-icon-desc`]: Ka({ id: D, sortBy: T }) === "desc", [`${ce}--header-row-th-sortable-sort-icon-asc`]: Ka({ id: D, sortBy: T }) === "asc" };
  })({ iconOptions: s, key: w, level: a.level, sortBy: a.sortBy }), g = m(() => (s == null ? void 0 : s.defaultSet) === "fa" ? "small" : (f.value = (a == null ? void 0 : a.sortAscIcon) ?? "$sortAsc", "default"));
  function k(w) {
    return ls(w);
  }
  return (w, P) => (ne(), ye(pe, null, [Ke("tr", { class: ge(b(y)) }, [(ne(!0), ye(pe, null, He(b(h), ($) => {
    return ne(), ye(pe, { key: $ }, [b(t)[`column.${$.key}`] || b(t)[`header.${$.key}`] ? (ne(), ye("th", { key: 0, class: ge(S($, $.key)), colspan: $.colspan || 1, style: Te(A($, !0)) }, [be(w.$slots, `header.${$.key}`, { column: $ }, void 0, !0)], 14, Hu)) : $.key === "data-table-group" || $.key === "data-table-group" ? (ne(), ye("th", { key: 1, class: ge(S($, "header-data-table-group")), colspan: $.colspan || 1, style: Te(A($, !0)), innerHTML: k($) }, null, 14, Ku)) : $.key === "data-table-select" || $.key === "data-table-select" && w.showSelect ? (ne(), ye("th", { key: 2, class: ge(S($, "header-data-table-select")), colspan: $.colspan || 1, style: Te(A($, !0)) }, [w.selectStrategy !== "single" ? (ne(), we(In, { key: 0, class: ge(b(_)), density: w.density, focused: !1, indeterminate: b(C), "model-value": b(r), "onUpdate:modelValue": B }, null, 8, ["class", "density", "indeterminate", "model-value"])) : Ce("", !0)], 14, qu)) : $.key === "data-table-expand" ? (ne(), ye("th", { key: 3, class: ge(S($, "data-table-expand")), colspan: $.colspan || 1, style: Te(A($, !0)), innerHTML: k($) }, null, 14, Uu)) : (ne(), ye("th", { key: 4, class: ge(S($)), colspan: $.colspan || 1, style: Te(A($)), onClick: (M) => function(T) {
      T.sortable && a.slotProps.toggleSort(T);
    }($) }, [Ke("div", { class: ge((D = $.align, ns({ align: D }))), style: Te(F($)) }, [Ke("span", { innerHTML: k($) }, null, 8, Xu), $.sortable && b(t)["header.sortIcon"] ? (ne(), ye("span", { key: 0, class: ge(V($.key)) }, [be(w.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : $.sortable ? (ne(), we(Ae, { key: 1, class: ge(V($.key)), icon: b(f), size: b(g) }, null, 8, ["class", "icon", "size"])) : Ce("", !0)], 6)], 14, Yu))], 64);
    var D;
  }), 128))], 2), w.loaderSettings.loaderType && !b(t).loading ? (ne(), we(b(Gu), { key: 0, colors: w.colors, colspan: w.loaderSettings.colspan, height: w.loaderSettings.height, level: w.level, "loader-props": w.loaderProps, "loader-settings": w.loaderSettings, "loader-type": w.loaderSettings.loaderType, loading: w.loaderSettings.loading || !1, "loading-text": w.loaderSettings.loadingText, size: w.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : Ce("", !0)], 64));
} }), Zu = jn(Ju, [["__scopeId", "data-v-d18d56b2"]]), Qu = ["colspan"], ec = ["colspan"], tc = ["colspan"], lc = ["colspan"], nc = ["innerHTML"], ac = rt({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: n }) {
  const t = Jt(), l = n, a = e, o = Se(Symbol.for("vuetify:icons")), s = m(() => a.slotProps.columns), r = m(() => a.slotProps.index), i = m(() => a.slotProps.isExpanded), u = m(() => a.slotProps.item), v = m(() => a.slotProps.internalItem), f = m(() => a.slotProps.level), p = m(() => a.slotProps.toggleExpand), d = m(() => a.slotProps.toggleSelect), h = m(() => a.itemSelectable), y = m(() => ((C) => {
    const { expandOnClick: B, level: _, levels: V } = C;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": B && _ < V, [`${ce}--body-row`]: !0, [`${ce}--body-row-${_}`]: !0 };
  })({ expandOnClick: a.expandOnClick, level: a.level, levels: a.levels })), S = (C) => ((B) => {
    const { column: _, elm: V, level: g } = B;
    return { [`${ce}--${V}-row-td`]: !0, [`${ce}--${V}-row-td-${g}`]: !0, [`${_.cellClass}`]: _.cellClass || !1 };
  })({ column: C, elm: "body", level: a.level });
  function x(C) {
    const { isRow: B, internalItem: _, level: V, toggleExpand: g } = C;
    if (!(a.level >= a.levels || a.expandOnClick && !B) && (!a.expandOnClick || B)) {
      if (C.$event) {
        if (!a.expandOnClick)
          return;
        l("click:row", C.$event);
      }
      V === a.level && g(_), l("update:expanded", C);
    }
  }
  const A = m(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "x-small" : "default");
  function F(C, B) {
    return function(_, V) {
      if (!V.key)
        return "";
      const g = Ru(_, V.key);
      return V.renderItem ? V.renderItem(g, _, V) : g;
    }(C, B);
  }
  return (C, B) => (ne(), ye("tr", { class: ge(b(y)), onClick: B[2] || (B[2] = (_) => x({ columns: b(s), index: b(r), isExpanded: b(i), isRow: !0, item: b(u), internalItem: b(v), level: b(f), toggleExpand: b(p), $event: _ })) }, [(ne(!0), ye(pe, null, He(b(s), (_) => (ne(), ye(pe, { key: _ }, [C.$slots[`item.${_.key}`] ? (ne(), ye("td", { key: 0, class: ge(S(_)), colspan: _.colspan || 1 }, [be(C.$slots, `item.${_.key}`, { columns: b(s), index: b(r), item: b(u) }, void 0, !0)], 10, Qu)) : _.key === "data-table-select" || _.key === "data-table-select" && a.showSelect ? (ne(), ye("td", { key: 1, class: ge(S(_)), colspan: _.colspan || 1 }, [b(t)["item.data-table-select"] ? be(C.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : Ce("", !0), c(In, { class: "d-flex v-simple-checkbox", density: C.density, disabled: b(u).selectable === !1 && b(h) === "selectable", "model-value": C.slotProps.isSelected([b(v)]), onClick: B[0] || (B[0] = en((V) => function(g) {
    const { internalItem: k, item: w, toggleSelect: P } = g;
    P(k), l("click:row:checkbox", w);
  }({ columns: b(s), index: b(r), internalItem: b(v), item: b(u), level: b(f), toggleSelect: b(d) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, ec)) : _.key === "data-table-expand" || _.key === "data-table-expand" && C.showExpand ? (ne(), ye("td", { key: 2, class: ge(S(_)), colspan: _.colspan || 1 }, [b(f) < C.levels ? (ne(), ye("div", { key: 0, class: ge(["v-drilldown-table--expand-icon", b(i)(b(v)) ? "rotate-180" : ""]), onClick: B[1] || (B[1] = (V) => x({ columns: b(s), index: b(r), isExpanded: b(i), item: b(u), internalItem: b(v), level: b(f), toggleExpand: b(p) })) }, [C.$slots["item.data-table-expand"] ? be(C.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (ne(), we(Ae, { key: 1, icon: "$expand", size: b(A) }, null, 8, ["size"]))], 2)) : Ce("", !0)], 10, tc)) : (ne(), ye("td", { key: 3, class: ge(S(_)), colspan: _.colspan || 1 }, [Ke("span", { innerHTML: F(b(u), _) }, null, 8, nc)], 10, lc))], 64))), 128))], 2));
} }), oc = jn(ac, [["__scopeId", "data-v-91892b42"]]), rc = ["colspan"], sc = ["colspan"], ic = ["colspan", "innerHTML"], uc = ["colspan", "innerHTML"], cc = ["colspan"], dc = ["innerHTML"], pc = rt({ __name: "TfootSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, footerBackgroundColor: {}, footerColor: {}, footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: n }) {
  const t = Jt(), l = n, a = e, o = J(), s = Tl(), r = J(!1), i = J(a.items), u = m(() => a.tableModelValue), v = m(() => a.footers.length ? a.footers : a.slotProps.columns);
  ae(() => a.items, (C) => {
    i.value = C, o.value = (C == null ? void 0 : C.filter((B) => B.selectable)) ?? [], o.value = C == null ? void 0 : C.filter((B) => B.selectable !== !1);
  });
  const f = m(() => ((C) => {
    const { level: B } = C;
    return { [`${ce}--tfoot`]: !0, [`${ce}--tfoot-${B}`]: !0 };
  })({ level: a.level })), p = m(() => ((C) => {
    const { level: B } = C;
    return { [`${ce}--tfoot-row`]: !0, [`${ce}--tfoot-row-${B}`]: !0 };
  })({ level: a.level })), d = (C, B = "") => ((_) => {
    const { column: V, level: g, slotName: k = "" } = _;
    return { [`${ce}--tfoot-row-td`]: !0, [`${ce}--tfoot-row-td-${k}`]: k !== "", [`${ce}--tfoot-row-td-${k}-${g}`]: k, [`${ce}--tfoot-row-td-${g}`]: !0, [`${V.cellClass}`]: V.cellClass || !1 };
  })({ column: C, level: a.level, slotName: B }), h = m(() => {
    const C = a.colors;
    return C && (C.footer = { background: a.footerBackgroundColor, color: a.footerColor }, C.percentageChange = a.colorPercentageChange, C.percentageDirection = a.colorPercentageDirection), C;
  }), y = m(() => ((C) => {
    const { colors: B, elm: _, level: V, theme: g } = C, k = Rn({ colors: B, level: V, prop: _, themeColors: g });
    return { backgroundColor: k.background, color: k.color };
  })({ colors: h.value, elm: "footer", footerColor: a.footerColor, level: a.level, theme: s })), S = m(() => {
    var C;
    return !a.slotProps.allSelected && ((C = u == null ? void 0 : u.value) == null ? void 0 : C.length) !== 0;
  });
  function x() {
    r.value = !r.value, a.slotProps.selectAll(r.value), l("click:selectAll", r.value);
  }
  ae(() => a.slotProps.allSelected, (C) => {
    r.value = C;
  }), ae(() => a.slotProps.someSelected, () => {
    if (a.slotProps.allSelected)
      return !1;
  });
  const A = m(() => as({ level: a.level }));
  function F(C) {
    return ls(C);
  }
  return (C, B) => {
    var _;
    return (_ = b(v)) != null && _.length ? (ne(), ye("tfoot", { key: 0, class: ge(b(f)) }, [Ke("tr", { class: ge(b(p)) }, [(ne(!0), ye(pe, null, He(b(v), (V) => {
      return ne(), ye(pe, { key: V }, [b(t)[`tfoot.${V.key}`] ? (ne(), ye("th", { key: 0, class: ge(d(V, V.key)), colspan: V.colspan || 1, style: Te(b(y)) }, [be(C.$slots, `tfoot.${V.key}`, { column: V })], 14, rc)) : V.key === "data-table-select" ? (ne(), ye("th", { key: 1, class: ge(d(V, "tfoot-data-table-select")), colspan: V.colspan || 1, style: Te(b(y)) }, [C.selectStrategy !== "single" ? (ne(), we(In, { key: 0, class: ge(b(A)), density: C.density, focused: !1, indeterminate: b(S), "model-value": b(r), "onUpdate:modelValue": x }, null, 8, ["class", "density", "indeterminate", "model-value"])) : Ce("", !0)], 14, sc)) : V.key === "data-table-expand" ? (ne(), ye("th", { key: 2, class: ge(d(V, "tfoot-data-table-expand")), colspan: V.colspan || 1, style: Te(b(y)), innerHTML: F(V) }, null, 14, ic)) : V.renderFooterCell ? (ne(), ye("th", { key: 3, class: ge(d(V)), colspan: V.colspan || 1, style: Te(b(y)), innerHTML: F(V) }, null, 14, uc)) : (ne(), ye("th", { key: 4, class: ge(d(V)), colspan: V.colspan || 1, style: Te(b(y)) }, [Ke("div", { class: ge((g = V.align, ns({ align: g }))) }, [Ke("span", { innerHTML: F(V) }, null, 8, dc)], 2)], 14, cc))], 64);
      var g;
    }), 128))], 2)], 2)) : Ce("", !0);
  };
} }), vc = rt({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: n }) {
  const t = Jt(), l = n, a = e, o = J(""), s = J(!0), r = m(() => a.items), i = m(() => ({ allSelected: a.slotProps.allSelected, columns: a.slotProps.columns, headers: a.slotProps.headers, items: r, itemsPerPage: a.slotProps.itemsPerPage, level: a.level, loading: a.loading, page: a.slotProps.page, pageCount: a.slotProps.pageCount, search: b(o), selectAll: u, setItemsPerPage: a.slotProps.setItemsPerPage, toggleSelectAll: v }));
  function u(d) {
    a.slotProps.selectAll(d), l("click:selectAll", d);
  }
  function v() {
    a.slotProps.selectAll(!a.slotProps.allSelected), l("click:selectAll", !a.slotProps.allSelected);
  }
  ht(() => {
    const d = document.querySelector(`[data-id="vdt-top-id-${a.level}"]`);
    (d == null ? void 0 : d.children.length) === 0 && (s.value = !1);
  }), ae(o, () => {
    l("update:search", o.value);
  });
  const f = m(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...a.searchProps })), p = m(() => {
    const d = a.searchContainerCols ?? ts.searchContainerCols();
    return { [`${ce}--search-field`]: !0, [`v-col-${d.xs}`]: !0, [`v-col-sm-${d.sm}`]: !0, [`v-col-md-${d.md}`]: !0, [`v-col-lg-${d.lg}`]: !0, [`v-col-xl-${d.xl}`]: !0, [`v-col-xxl-${d.xxl}`]: !0 };
  });
  return (d, h) => b(t).top ? be(d.$slots, "top", _e(ee({ key: 0 }, b(i)))) : (d.showSearch || b(t)["top.left"] || b(t)["top.right"]) && b(s) ? (ne(), we(At, { key: 1, lg: "12" }, { default: fe(() => [c(es, { "data-id": `vdt-top-id-${a.level}` }, { default: fe(() => [b(t)["top.left"] ? be(d.$slots, "top.left", _e(ee({ key: 0 }, b(i)))) : d.showSearch ? (ne(), we(At, { key: 1, class: ge(["d-flex align-center justify-end", b(p)]) }, { default: fe(() => [d.showSearch ? (ne(), we(vn, ee({ key: 0 }, b(f), { modelValue: b(o), "onUpdate:modelValue": h[0] || (h[0] = (y) => It(o) ? o.value = y : null), class: "mt-0 pt-0" }), null, 16, ["modelValue"])) : Ce("", !0)]), _: 1 }, 8, ["class"])) : Ce("", !0), b(t)["top.right"] ? be(d.$slots, "top.right", _e(ee({ key: 2 }, b(i)))) : Ce("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : Ce("", !0);
} });
function qa(e) {
  return typeof e == "function" ? e() : b(e);
}
const Ua = () => {
}, fc = (e) => e();
function gc(e, n = {}) {
  let t, l, a = Ua;
  const o = (s) => {
    clearTimeout(s), a(), a = Ua;
  };
  return (s) => {
    const r = qa(e), i = qa(n.maxWait);
    return t && o(t), r <= 0 || i !== void 0 && i <= 0 ? (l && (o(l), l = null), Promise.resolve(s())) : new Promise((u, v) => {
      a = n.rejectOnCancel ? v : u, i && !l && (l = setTimeout(() => {
        t && o(t), l = null, u(s());
      }, i)), t = setTimeout(() => {
        l && o(l), l = null, u(s());
      }, r);
    });
  };
}
function mc(e, n, t = {}) {
  const { eventFilter: l = fc, ...a } = t;
  return ae(e, (o = l, s = n, function(...r) {
    return new Promise((i, u) => {
      Promise.resolve(o(() => s.apply(this, r), { fn: s, thisArg: this, args: r })).then(i).catch(u);
    });
  }), a);
  var o, s;
}
function Ya(e, n, t = {}) {
  const { debounce: l = 0, maxWait: a, ...o } = t;
  return mc(e, n, { ...o, eventFilter: gc(l, { maxWait: a }) });
}
const Rt = /* @__PURE__ */ new Map(), yc = ["colspan"], hc = rt({ __name: "VDrilldownTable", props: bs({ colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, defaultColors: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footerBackgroundColor: {}, footerColor: {}, footers: {}, groupBy: {}, headerBackgroundColor: {}, headerColor: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { ...ts }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: n }) {
  const t = n, l = e, a = Se(is, {}), o = J({ ...l, ...a }), { colorPercentageChange: s, colorPercentageDirection: r, elevation: i, expandOnClick: u, footerBackgroundColor: v, footerColor: f, headerBackgroundColor: p, headerColor: d, hover: h, itemsPerPageOptions: y, loaderProps: S, loaderType: x, separator: A, sortAscIcon: F } = gn(o.value), C = Jt(), B = Ss(), _ = de(null), V = m(() => l.density);
  ht(() => {
    l.level === 1 && g.level !== 1 || g.server || I();
  }), hn(() => {
    _.value = Object.assign({}, l.server ? Pu : ku);
  });
  let g = Xt(Object.assign({}, l));
  g != null && g.colors && (g.colors.default = { ...Vl, ...o.value.defaultColors });
  const k = { ...l, ...g }, w = J(B["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), P = J(""), $ = Tl(), D = m(() => g.sortBy), M = m(() => !!g.loading || g.hideNoData);
  (function(E, H, se) {
    const Y = ae(E, (...Q) => (Fe(() => Y()), H(...Q)), se);
  })(l, () => {
    l.level === 1 && g.level !== 1 || I(), g.itemsPerPage = l.itemsPerPage;
  }, { immediate: !1 }), ae(() => l.items, () => {
    l.loading || I();
  }, { deep: !0 }), ae(() => l.loading, () => {
    if (l.loading)
      return g.loading = l.loading, !1;
    I();
  }), Re(() => {
    g.colors && o.value.defaultColors && (g.colors.default = { ...Vl, ...o.value.defaultColors });
  }), Re(() => {
    o.value = { ...l, ...a };
  });
  const T = (E) => {
    const H = b(o.value.loaderType);
    return !(E && (H === "skelton" || Array.isArray(H) && H.length === 1 && H[0] === "skelton" || !g.showDrilldownWhenLoading));
  }, N = m(() => ((E) => {
    const { elevation: H, fixedHeader: se, isDrilldown: Y, isHover: Q, isServerSide: re, level: ie, separator: he } = E;
    return { [`${ce}--child`]: Y, [`${ce}--fixed-header`]: se, [`${ce}--hover`]: Q, [`${ce}--level-${ie}`]: !0, [`${ce}--server`]: re, [`${ce}--separator-${he}`]: he, [`${ce}`]: !0, [`elevation-${H}`]: parseInt(H) > 0 };
  })({ elevation: b(i), fixedHeader: g.fixedHeader, isDrilldown: l.isDrilldown, isHover: b(h), isServerSide: !1, level: g.level, separator: b(A) })), K = m(() => ((E) => {
    const { colors: H, level: se, theme: Y } = E;
    let Q = {};
    typeof H == "object" && H !== null && (Q = Rn({ colors: H, level: se, prop: "default", themeColors: Y }));
    const re = { borderBottom: "none" };
    return Q.border && (re.borderBottom = `1px solid ${Q.border}`), re;
  })({ colors: g.colors, level: g.level, theme: $ }));
  function I() {
    var E;
    l.drilldown ? g = ((H) => {
      const { drilldown: se, item: Y, level: Q, levels: re, loadedDrilldown: ie } = H;
      let he = ie;
      const je = Y;
      he = Wt(ie, se);
      const kt = (ie.items || [{}]).find((tl) => {
        const ll = tl[ie.drilldownKey];
        let Ot = {};
        return je && (Ot = je[ie.drilldownKey]), ll === Ot;
      });
      return he = Wt(ie, kt[ie.itemChildrenKey]), re === Q && (he.showExpand = !1), he;
    })({ drilldown: l.drilldown, item: l.item, level: l.level, levels: l.levels, loadedDrilldown: g, matchColumnWidths: l.matchColumnWidths }) : (g = Wt(g, l), l.matchColumnWidths && ((E = g == null ? void 0 : g.columnWidths) == null ? void 0 : E.length) === 0 && (g.columnWidths = ((H) => {
      const { tableId: se } = H, Y = [], Q = b(se), re = document.querySelectorAll(`[data-vdt-id="${Q}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(re).length > 0)
        for (let ie = 0; ie < re.length; ie += 1) {
          const he = re[ie];
          Y.push(he.offsetWidth);
        }
      return Y;
    })({ tableId: w })));
  }
  function R(E) {
    let H = { ...k, ...g, ...E };
    l.server && (H = { ...g, ...k, ...E }), ((se) => {
      const { data: Y, drilldownData: Q, emit: re } = se;
      Y.isExpanded(Y.internalItem) && re("update:drilldown", Q), re("update:expanded", Y.item);
    })({ data: E, drilldownData: H, emit: t });
  }
  function j(E) {
    return { items: E.items, itemsPerPage: E.itemsPerPage, page: E.page, search: P.value, server: E.server, sortBy: E.sortBy };
  }
  const U = function(E) {
    const H = hs();
    function se(re) {
      var ie;
      const he = Rt.get(E) || /* @__PURE__ */ new Set();
      he.add(re), Rt.set(E, he);
      const je = () => Y(re);
      return (ie = H == null ? void 0 : H.cleanups) == null || ie.push(je), je;
    }
    function Y(re) {
      const ie = Rt.get(E);
      ie && (ie.delete(re), ie.size || Q());
    }
    function Q() {
      Rt.delete(E);
    }
    return { on: se, once: function(re) {
      return se(function ie(...he) {
        Y(ie), re(...he);
      });
    }, off: Y, emit: function(re, ie) {
      var he;
      (he = Rt.get(E)) == null || he.forEach((je) => je(re, ie));
    }, reset: Q };
  }(ks), te = U.on(function(E) {
    l.level === 1 && E.drilldown.server && t("update:options", { ...E });
  });
  function X(E) {
    g.itemsPerPage = E;
    const H = j(g), se = { drilldown: { ...l, ...H, itemsPerPage: E }, itemsPerPage: E, name: "update:itemsPerPage" };
    U.emit(se), t("update:itemsPerPage", E);
  }
  function Z(E) {
    g.page = E;
    const H = j(g), se = { drilldown: { ...l, ...H, page: E }, name: "update:page", page: E };
    U.emit(se), t("update:page", E);
  }
  xs(() => {
    te();
  });
  const L = { debounce: g.searchDebounce, maxWait: g.searchMaxWait };
  function W() {
    C.top || C["top.left"] || (g.search = P.value), (C.top || C["top.left"]) && (P.value = l.search || "");
    const E = j(g), H = { drilldown: { ...l, ...E, search: P.value }, search: P.value };
    U.emit(H), t("update:search", H);
  }
  function G(E) {
    g.sortBy = E;
    const H = j(g), se = { drilldown: { ...l, ...H, sortBy: E }, name: "update:sortBy", sortBy: E };
    U.emit(se), t("update:sortBy", E);
  }
  function z() {
  }
  return Ya(() => l.search, () => {
    W();
  }, L), Ya(P, () => {
    C.top || C["top.left"] || W();
  }, L), (E, H) => {
    const se = ws("VDrilldownTable", !0);
    return b(_) ? (ne(), we(Ja(b(_)), ee({ key: 0 }, E.$attrs, { modelValue: b(g).modelValue, "onUpdate:modelValue": [H[5] || (H[5] = (Y) => b(g).modelValue = Y), z], class: b(N), "data-vdt-id": b(w), density: b(V), "expand-on-click": b(u), expanded: b(g).expanded, "fixed-header": b(g).fixedHeader, "group-by": b(g).groupBy, headers: b(g).headers, height: b(g).height, "hide-no-data": b(M), hover: b(h), "item-selectable": b(g).itemSelectable, "item-value": b(g).itemValue, items: b(g).items, "items-length": b(g).itemsLength, "items-per-page": b(g).itemsPerPage, "items-per-page-options": b(y), loading: (!b(x) || b(C).loading) && b(g).loading, "multi-sort": b(g).multiSort, "must-sort": b(g).mustSort, "no-data-text": b(g).noDataText, page: b(g).page, "return-object": b(g).returnObject, search: b(P), "select-strategy": b(g).selectStrategy, "show-expand": b(g).showExpand, "sort-by": b(D), style: b(K), "onUpdate:itemsPerPage": X, "onUpdate:page": Z, "onUpdate:sortBy": G }), dt({ top: fe((Y) => [(ne(), we(b(vc), { key: E.level, items: b(g).items, level: b(g).level, loading: b(g).loading, "search-container-cols": b(g).searchContainerCols, "search-props": b(g).searchProps, "show-search": b(g).showSearch ?? !1, "slot-props": Y, "onUpdate:search": H[0] || (H[0] = (Q) => P.value = Q) }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-props", "show-search", "slot-props"]))]), headers: fe((Y) => [(ne(), we(b(Zu), { key: E.level, colorPercentageChange: b(s), colorPercentageDirection: b(r), colors: b(g).colors, "column-widths": b(g).columnWidths, density: b(V), headerBackgroundColor: b(o).headerBackgroundColor, headerColor: b(d), items: b(g).items, level: E.level, "loader-props": b(S), "loader-settings": { colspan: Y.columns.length, loaderType: b(x), loading: b(g).loading, loadingText: E.loadingText }, "match-column-widths": b(g).matchColumnWidths, "select-strategy": b(g).selectStrategy, "show-select": b(g).showSelect, "slot-props": { ...Y }, "sort-asc-icon": b(F), "sort-by": b(g).sortBy, "table-model-value": b(g).modelValue }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "column-widths", "density", "headerBackgroundColor", "headerColor", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: fe((Y) => [(ne(), we(b(oc), { key: E.level, density: b(V), "expand-on-click": b(u), "group-by": b(g).groupBy, "item-selectable": b(g).itemSelectable, items: b(g).items, level: b(g).level, levels: b(g).levels, "show-expand": b(g).showExpand, "show-select": b(g).showSelect, "slot-props": { level: E.level, ...Y }, "onClick:row": H[1] || (H[1] = (Q) => {
      t("click:row", Q);
    }), "onClick:row:checkbox": H[2] || (H[2] = (Q) => {
      t("click:row:checkbox", Q);
    }), "onUpdate:expanded": H[3] || (H[3] = (Q) => R(Q)) }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["density", "expand-on-click", "group-by", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": fe(({ columns: Y, item: Q, internalItem: re }) => {
      var ie, he, je, kt, tl, ll, Ot, Wn, zn, Gn, Hn;
      return [Ke("tr", { class: ge(T((ie = Q[E.itemChildrenKey]) == null ? void 0 : ie.loading) ? "" : "d-none") }, [Ke("td", { class: "px-0 ma-0", colspan: Y.length, style: { "vertical-align": "top" } }, [(ne(), we(se, { key: re.key, "column-widths": b(g).columnWidths, defaultColors: b(o).defaultColors, density: b(V), drilldown: b(g), "footer-background-color": b(v), "footer-color": b(f), "header-background-color": b(p), "header-color": b(d), headers: (he = Q[E.itemChildrenKey]) == null ? void 0 : he.headers, "is-drilldown": !0, item: Q, items: (je = Q[E.itemChildrenKey]) == null ? void 0 : je.items, "items-length": (kt = Q[E.itemChildrenKey]) == null ? void 0 : kt.itemsLength, "items-per-page": (tl = Q[E.itemChildrenKey]) == null ? void 0 : tl.itemsPerPage, level: E.level + 1, levels: b(g).levels, loaderProps: (ll = Q[E.itemChildrenKey]) == null ? void 0 : ll.loaderProps, loaderType: (Ot = Q[E.itemChildrenKey]) == null ? void 0 : Ot.loaderType, loading: (Wn = Q[E.itemChildrenKey]) == null ? void 0 : Wn.loading, loadingText: E.loadingText, "match-column-widths": b(g).matchColumnWidths, "multi-sort": (zn = Q[E.itemChildrenKey]) == null ? void 0 : zn.multiSort, "no-data-text": b(g).noDataText, server: (Gn = Q[E.itemChildrenKey]) == null ? void 0 : Gn.server, "show-footer-row": (Hn = Q[E.itemChildrenKey]) == null ? void 0 : Hn.showFooterRow, "sort-by": b(g).sortBy, "table-type": b(_), "onUpdate:drilldown": H[4] || (H[4] = (nl) => R(nl)), "onUpdate:modelValue": z }, dt({ default: fe(() => [(ne(!0), ye(pe, null, He(Object.keys(b(C)), (nl) => be(E.$slots, nl)), 256))]), _: 2 }, [He(b(C), (nl, Kn) => ({ name: Kn, fn: fe((us) => [be(E.$slots, Kn, _e(We({ ...us })))]) }))]), 1032, ["column-widths", "defaultColors", "density", "drilldown", "footer-background-color", "footer-color", "header-background-color", "header-color", "headers", "item", "items", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "show-footer-row", "sort-by", "table-type"]))], 8, yc)], 2)];
    }), "footer.prepend": fe(() => [b(C)["footer.prepend"] ? be(E.$slots, "footer.prepend", { key: 0 }) : Ce("", !0)]), _: 2 }, [b(C).loader ? { name: "loader", fn: fe(() => [be(E.$slots, "loader")]), key: "0" } : void 0, b(C).loading ? { name: "loading", fn: fe(() => [be(E.$slots, "loading")]), key: "1" } : void 0, b(C).thead ? { name: "thead", fn: fe((Y) => [be(E.$slots, "thead", _e(We({ ...Y, columnWidths: b(g).columnWidths, items: b(g).items, loaderSettings: { colspan: Y.columns.length, loaderType: b(x), loading: b(g).loading, loadingText: E.loadingText }, matchColumnWidths: b(g).matchColumnWidths, selectStrategy: b(g).selectStrategy, sortBy: b(g).sortBy })))]), key: "2" } : void 0, b(C).body ? { name: "body", fn: fe((Y) => [be(E.$slots, "body", _e(We({ ...Y })))]), key: "3" } : void 0, b(C)["group-header"] ? { name: "group-header", fn: fe((Y) => [be(E.$slots, "group-header", _e(We({ ...Y })))]), key: "4" } : void 0, b(C).tbody ? { name: "tbody", fn: fe((Y) => [be(E.$slots, "tbody", _e(We({ ...Y })))]), key: "5" } : void 0, b(C)["no-data"] ? { name: "no-data", fn: fe(() => [be(E.$slots, "no-data")]), key: "6" } : void 0, b(C).tfoot || E.showFooterRow ? { name: "tfoot", fn: fe((Y) => [b(C).tfoot ? be(E.$slots, "tfoot", _e(ee({ key: 0 }, { ...Y }))) : (ne(), we(b(pc), { key: E.level, colorPercentageChange: b(s), colorPercentageDirection: b(r), colors: b(g).colors, density: b(V), footerBackgroundColor: b(v), footerColor: b(f), footers: b(g).footers || [], items: b(g).items, level: b(g).level, "select-strategy": b(g).selectStrategy, "show-select": b(g).showSelect, "slot-props": { ...Y }, "table-model-value": b(g).modelValue }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "density", "footerBackgroundColor", "footerColor", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "7" } : void 0, b(C).bottom ? { name: "bottom", fn: fe((Y) => [(ne(), we(b(Nu), { key: E.level, "slot-props": Y }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["slot-props"]))]), key: "8" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "fixed-header", "group-by", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : Ce("", !0);
  };
} }), is = Symbol();
function xc(e = {}) {
  return { install: (n) => {
    n.provide(is, e), n.component("VDrilldownTable", hc);
  } };
}
export {
  hc as VDrilldownTable,
  xc as createVDrilldownTable,
  hc as default,
  is as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".v-drilldown-table--loader-tr[data-v-b954d026]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-b954d026]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-b954d026]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-b954d026]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-d18d56b2]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-d18d56b2]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-d18d56b2]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-d18d56b2],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-d18d56b2]{color:rgb(var(--v-theme-on-surface) var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-d18d56b2]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-d18d56b2]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-d18d56b2]{color:rgb(var(--v-theme-on-surface) var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-d18d56b2],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-d18d56b2],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-d18d56b2]{color:rgb(var(--v-theme-on-surface) var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-d18d56b2]{color:rgb(var(--v-theme-on-surface) var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-91892b42]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgb(var(--v-theme-on-surface) var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgb(var(--v-border-color) var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgb(var(--v-border-color) var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgb(var(--v-border-color) var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-bottom:var(--vdt-border);border-top:0!important}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-bottom:var(--vdt-border)!important;border-top:0!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-bottom:var(--vdt-border)!important;border-top:0!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{box-shadow:none}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>th{box-shadow:none!important}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>td{background:unset}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
