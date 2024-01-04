import { Fragment as pe, reactive as Yt, computed as m, watchEffect as Ne, toRefs as gn, isVNode as us, Comment as cs, capitalize as Ft, unref as b, warn as El, ref as J, provide as ke, inject as Se, shallowRef as de, defineComponent as rt, camelize as Ya, h as $t, getCurrentInstance as ds, onBeforeUnmount as Ze, watch as oe, readonly as mn, onScopeDispose as Le, effectScope as yn, toRaw as nt, TransitionGroup as ps, Transition as mt, createVNode as d, mergeProps as te, onBeforeMount as hn, nextTick as Fe, withDirectives as Ge, resolveDirective as yt, vShow as Vt, isRef as It, onMounted as ht, toRef as q, Text as vs, resolveDynamicComponent as Xa, Teleport as fs, cloneVNode as gs, createTextVNode as pl, onBeforeUpdate as ms, withModifiers as en, toDisplayString as Ja, renderSlot as be, openBlock as ne, createElementBlock as ye, normalizeClass as ge, normalizeStyle as De, createElementVNode as Ke, createBlock as we, withCtx as fe, normalizeProps as _e, guardReactiveProps as We, createCommentVNode as Ce, useSlots as Xt, renderList as He, getCurrentScope as ys, mergeDefaults as hs, useAttrs as bs, onUnmounted as Ss, resolveComponent as xs, createSlots as dt } from "vue";
import { useTheme as Dl } from "vuetify";
/**
 * @name @wdns/vuetify-drilldown-table
 * @version 1.0.1
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
const ws = Symbol("data");
function R(e, n) {
  return (t) => Object.keys(e).reduce((l, a) => {
    const o = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return l[a] = t && a in t ? { ...o, default: t[a] } : o, n && !l[a].source && (l[a].source = n), l;
  }, {});
}
const ve = R({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Ee = typeof window < "u", bn = Ee && "IntersectionObserver" in window;
function Za(e, n, t) {
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
  return e != null && n && typeof n == "string" ? e[n] !== void 0 ? e[n] : Za(e, (n = (n = n.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function Te(e, n, t) {
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
    return Za(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
function nl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (t, l) => n + l);
}
function ae(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function tn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function vl(e) {
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
function Qa(e, n) {
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
const eo = /^on[^a-z]/, fl = (e) => eo.test(e), ks = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Sn(e) {
  const [n, t] = Yn(e, [eo]), l = bt(n, ks), [a, o] = Yn(t, ["class", "style", "id", /^data-/]);
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
function to(e) {
  return e.map((n) => n.type === pe ? to(n.children) : n).flat();
}
function vt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (vt.cache.has(e))
    return vt.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return vt.cache.set(e, n), n;
}
function ul(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => ul(e, t)).flat(1);
  if (Array.isArray(n.children))
    return n.children.map((t) => ul(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return ul(e, n.component.subTree).flat(1);
  }
  return [];
}
function xn(e) {
  const n = Yt({}), t = m(e);
  return Ne(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, { flush: "sync" }), gn(n);
}
function gl(e, n) {
  return e.includes(n);
}
function Jn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
vt.cache = /* @__PURE__ */ new Map();
const Re = () => [Function, Array];
function Zn(e, n) {
  return !!(e[n = "on" + Ft(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function ln(e) {
  let n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function lo(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const o = n === "next" ? 1 : -1;
  do
    a += o, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? 1)) && a < e.length && a >= 0);
  return l;
}
function ml(e, n) {
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
      const r = lo(t, n);
      r ? r.focus() : ml(e, n === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((s = t[0]) == null || s.focus());
}
function al(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function yl(e, n) {
  if (!(Ee && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function no(e) {
  return e.some((n) => !us(n) || n.type !== cs && (n.type !== pe || no(n.children))) ? e : null;
}
const ao = ["top", "bottom"], Cs = ["start", "end", "left", "right"];
function nn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = gl(ao, t) ? "start" : gl(Cs, t) ? "top" : "center"), { side: Qn(t, n), align: Qn(l, n) };
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
  return gl(ao, e.side) ? "y" : "x";
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
function oo(e) {
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
    const u = t.transformOrigin, v = n.x - r - (1 - o) * parseFloat(u), f = n.y - i - (1 - s) * parseFloat(u.slice(u.indexOf(" ") + 1)), p = o ? n.width / o : e.offsetWidth + 1, c = s ? n.height / s : e.offsetHeight + 1;
    return new ft({ x: v, y: f, width: p, height: c });
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
const ol = /* @__PURE__ */ new WeakMap(), Ct = 2.4, na = 0.2126729, aa = 0.7151522, oa = 0.072175, Ps = 0.55, Bs = 0.58, As = 0.57, _s = 0.62, rl = 0.03, ra = 1.45, Fs = 5e-4, $s = 1.25, Vs = 1.25, sa = 0.078, ia = 12.82051282051282, sl = 0.06, ua = 1e-3;
function ca(e, n) {
  const t = (e.r / 255) ** Ct, l = (e.g / 255) ** Ct, a = (e.b / 255) ** Ct, o = (n.r / 255) ** Ct, s = (n.g / 255) ** Ct, r = (n.b / 255) ** Ct;
  let i, u = t * na + l * aa + a * oa, v = o * na + s * aa + r * oa;
  if (u <= rl && (u += (rl - u) ** ra), v <= rl && (v += (rl - v) ** ra), Math.abs(v - u) < Fs)
    return 0;
  if (v > u) {
    const f = (v ** Ps - u ** Bs) * $s;
    i = f < ua ? 0 : f < sa ? f - f * ia * sl : f - sl;
  } else {
    const f = (v ** _s - u ** As) * Vs;
    i = f > -ua ? 0 : f > -sa ? f - f * ia * sl : f + sl;
  }
  return 100 * i;
}
function jt(e) {
  El(`Vuetify: ${e}`);
}
function ro(e) {
  El(`Vuetify error: ${e}`);
}
function Kl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const da = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Is = { rgb: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), rgba: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), hsl: (e, n, t, l) => pa({ h: e, s: n, l: t, a: l }), hsla: (e, n, t, l) => pa({ h: e, s: n, l: t, a: l }), hsv: (e, n, t, l) => Gt({ h: e, s: n, v: t, a: l }), hsva: (e, n, t, l) => Gt({ h: e, s: n, v: t, a: l }) };
function Mt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && jt(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && da.test(e)) {
    const { groups: n } = e.match(da), { fn: t, values: l } = n, a = l.split(/,\s*/).map((o) => o.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(o) / 100 : parseFloat(o));
    return Is[t](...a);
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
      return Gt(so(e));
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
  return Gt(so(e));
}
function so(e) {
  const { h: n, s: t, l, a } = e, o = l + t * Math.min(l, 1 - l);
  return { h: n, s: o === 0 ? 0 : 2 - 2 * l / o, v: o, a };
}
const hl = Symbol.for("vuetify:defaults");
function kn() {
  const e = Se(hl);
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
  return ke(hl, a), a;
}
function Es() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kn();
  const l = Pe("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = m(() => {
    var r;
    return (r = t.value) == null ? void 0 : r[e._as ?? n];
  }), o = new Proxy(e, { get(r, i) {
    var v, f, p, c;
    const u = Reflect.get(r, i);
    return i === "class" || i === "style" ? [(v = a.value) == null ? void 0 : v[i], u].filter((h) => h != null) : typeof i != "string" || function(h, y) {
      var S, x;
      return ((S = h.props) == null ? void 0 : S[y]) !== void 0 || ((x = h.props) == null ? void 0 : x[vt(y)]) !== void 0;
    }(l.vnode, i) ? u : ((f = a.value) == null ? void 0 : f[i]) ?? ((c = (p = t.value) == null ? void 0 : p.global) == null ? void 0 : c[i]) ?? u;
  } }), s = de();
  return Ne(() => {
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
    }(hl, l);
    ke(hl, m(() => s.value ? Pt((r == null ? void 0 : r.value) ?? {}, s.value) : r == null ? void 0 : r.value));
  } };
}
function Ht(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return jt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = R(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(t) {
      return Qa(t, n);
    }, e.props._as = String, e.setup = function(t, l) {
      const a = kn();
      if (!a.value)
        return e._setup(t, l);
      const { props: o, provideSubDefaults: s } = Es(t, t._as ?? e.name, a), r = e._setup(o, l);
      return s(), r;
    };
  }
  return e;
}
function le() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? Ht : rt)(n);
}
function io(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return le()({ name: t ?? Ft(Ya(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...ve() }, setup(l, a) {
    let { slots: o } = a;
    return () => {
      var s;
      return $t(l.tag, { class: [e, l.class], style: l.style }, (s = o.default) == null ? void 0 : s.call(o));
    };
  } });
}
function uo(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const bl = "cubic-bezier(0.4, 0, 0.2, 1)";
function va(e, n, t) {
  return Object.keys(e).filter((l) => fl(l) && l.endsWith(n)).reduce((l, a) => (l[a.slice(0, -n.length)] = (o) => e[a](o, t(o)), l), {});
}
function Pe(e, n) {
  const t = ds();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function Ue() {
  const e = Pe(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return vt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let co = 0, cl = /* @__PURE__ */ new WeakMap();
function qe() {
  const e = Pe("getUid");
  if (cl.has(e))
    return cl.get(e);
  {
    const n = co++;
    return cl.set(e, n), n;
  }
}
function po(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (n ? Ds(e) : Cn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Sl(e, n) {
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
function Tl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = J(), l = J();
  if (Ee) {
    const a = new ResizeObserver((o) => {
      e == null || e(o, a), o.length && (l.value = n === "content" ? o[0].contentRect : o[0].target.getBoundingClientRect());
    });
    Ze(() => {
      a.disconnect();
    }), oe(t, (o, s) => {
      s && (a.unobserve(vl(s)), l.value = void 0), o && a.observe(vl(o));
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
  oe(e, (a) => {
    a && !t ? l() : a || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Le(() => {
    t == null || t.stop();
  });
}
function xe(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const o = Pe("useProxiedModel"), s = J(e[n] !== void 0 ? e[n] : t), r = vt(n), i = m(r !== n ? () => {
    var v, f, p, c;
    return e[n], !(!((v = o.vnode.props) != null && v.hasOwnProperty(n)) && !((f = o.vnode.props) != null && f.hasOwnProperty(r)) || !((p = o.vnode.props) != null && p.hasOwnProperty(`onUpdate:${n}`)) && !((c = o.vnode.props) != null && c.hasOwnProperty(`onUpdate:${r}`)));
  } : () => {
    var v, f;
    return e[n], !(!((v = o.vnode.props) != null && v.hasOwnProperty(n)) || !((f = o.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)));
  });
  gt(() => !i.value, () => {
    oe(() => e[n], (v) => {
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
  co = 0, cl = /* @__PURE__ */ new WeakMap();
};
const vo = Symbol.for("vuetify:locale");
function it() {
  const e = Se(vo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Et() {
  const e = Se(vo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const fa = Symbol.for("vuetify:theme"), Be = R({ theme: String }, "theme");
function $e(e) {
  Pe("provideTheme");
  const n = Se(fa, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = m(() => e.theme ?? n.name.value), l = m(() => n.themes.value[t.value]), a = m(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...n, name: t, current: l, themeClasses: a };
  return ke(fa, o), o;
}
const Ve = R({ tag: { type: String, default: "div" } }, "tag"), Ts = R({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Oe(e, n, t) {
  return le()({ name: e, props: Ts({ mode: t, origin: n }), setup(l, a) {
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
      const r = l.group ? ps : mt;
      return $t(r, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : s }, o.default);
    };
  } });
}
function fo(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return le()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(l, a) {
    let { slots: o } = a;
    return () => $t(mt, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : n }, o.default);
  } });
}
function go() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = Ya(`offset-${n}`);
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
const Ls = R({ target: [Object, Array] }, "v-dialog-transition"), mo = le()({ name: "VDialogTransition", props: Ls(), setup(e, n) {
  let { slots: t } = n;
  const l = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, o) {
    var p;
    await new Promise((c) => requestAnimationFrame(c)), await new Promise((c) => requestAnimationFrame(c)), a.style.visibility = "";
    const { x: s, y: r, sx: i, sy: u, speed: v } = ma(e.target, a), f = Bt(a, [{ transform: `translate(${s}px, ${r}px) scale(${i}, ${u})`, opacity: 0 }, {}], { duration: 225 * v, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (p = ga(a)) == null || p.forEach((c) => {
      Bt(c, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * v, easing: bl });
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
      Bt(p, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * v, easing: bl });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(mt, te({ name: "dialog-transition" }, l, { css: !1 }), t) : d(mt, { name: "dialog-transition" }, t);
} });
function ga(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function ma(e, n) {
  const t = oo(e), l = wn(n), [a, o] = getComputedStyle(n).transformOrigin.split(" ").map((x) => parseFloat(x)), [s, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  s === "left" || r === "left" ? i -= t.width / 2 : s !== "right" && r !== "right" || (i += t.width / 2);
  let u = t.top + t.height / 2;
  s === "top" || r === "top" ? u -= t.height / 2 : s !== "bottom" && r !== "bottom" || (u += t.height / 2);
  const v = t.width / l.width, f = t.height / l.height, p = Math.max(1, v, f), c = v / p || 0, h = f / p || 0, y = l.width * l.height / (window.innerWidth * window.innerHeight), S = y > 0.12 ? Math.min(1.5, 10 * (y - 0.12) + 1) : 1;
  return { x: i - (a + l.left), y: u - (o + l.top), sx: c, sy: h, speed: S };
}
Oe("fab-transition", "center center", "out-in"), Oe("dialog-bottom-transition"), Oe("dialog-top-transition"), Oe("fade-transition"), Oe("scale-transition"), Oe("scroll-x-transition"), Oe("scroll-x-reverse-transition"), Oe("scroll-y-transition"), Oe("scroll-y-reverse-transition"), Oe("slide-x-transition"), Oe("slide-x-reverse-transition");
const yo = Oe("slide-y-transition");
Oe("slide-y-reverse-transition");
const Os = fo("expand-transition", go()), ho = fo("expand-x-transition", go("", !0)), Ms = R({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), ze = le(!1)({ name: "VDefaultsProvider", props: Ms(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: l, disabled: a, reset: o, root: s, scoped: r } = gn(e);
  return Xe(l, { reset: o, root: s, scoped: r, disabled: a }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} }), St = R({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function xt(e) {
  return { dimensionStyles: m(() => ({ height: ae(e.height), maxHeight: ae(e.maxHeight), maxWidth: ae(e.maxWidth), minHeight: ae(e.minHeight), minWidth: ae(e.minWidth), width: ae(e.width) })) };
}
const bo = R({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ve(), ...St() }, "VResponsive"), ya = le()({ name: "VResponsive", props: bo(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: l } = function(o) {
    return { aspectStyles: m(() => {
      const s = Number(o.aspectRatio);
      return s ? { paddingBottom: String(1 / s * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = xt(e);
  return ue(() => {
    var o;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: l.value }, null), (o = t.additional) == null ? void 0 : o.call(t), t.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} }), Jt = R({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), tt = (e, n) => {
  let { slots: t } = n;
  const { transition: l, disabled: a, ...o } = e, { component: s = mt, ...r } = typeof l == "object" ? l : {};
  return $t(s, te(typeof l == "string" ? { name: a ? "" : l } : r, o, { disabled: a }), t);
};
function ha(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const So = { mounted: function(e, n) {
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
}, unmounted: ha }, Rs = R({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...bo(), ...ve(), ...Jt() }, "VImg"), Ns = le()({ name: "VImg", directives: { intersect: So }, props: Rs(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const a = Pe("VImg"), o = de(""), s = J(), r = de(e.eager ? "loading" : "idle"), i = de(), u = de(), v = m(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), f = m(() => v.value.aspect || i.value / u.value || 0);
  function p(w) {
    if ((!e.eager || !w) && (!bn || w || e.eager)) {
      if (r.value = "loading", v.value.lazySrc) {
        const k = new Image();
        k.src = v.value.lazySrc, x(k, null);
      }
      v.value.src && Fe(() => {
        var k;
        t("loadstart", ((k = s.value) == null ? void 0 : k.currentSrc) || v.value.src), setTimeout(() => {
          var P;
          if (!a.isUnmounted)
            if ((P = s.value) != null && P.complete) {
              if (s.value.naturalWidth || h(), r.value === "error")
                return;
              f.value || x(s.value, null), r.value === "loading" && c();
            } else
              f.value || x(s.value), y();
        });
      });
    }
  }
  function c() {
    var w;
    a.isUnmounted || (y(), x(s.value), r.value = "loaded", t("load", ((w = s.value) == null ? void 0 : w.currentSrc) || v.value.src));
  }
  function h() {
    var w;
    a.isUnmounted || (r.value = "error", t("error", ((w = s.value) == null ? void 0 : w.currentSrc) || v.value.src));
  }
  function y() {
    const w = s.value;
    w && (o.value = w.currentSrc || w.src);
  }
  oe(() => e.src, () => {
    p(r.value !== "idle");
  }), oe(f, (w, k) => {
    !w && k && s.value && x(s.value);
  }), hn(() => p());
  let S = -1;
  function x(w) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const P = () => {
      if (clearTimeout(S), a.isUnmounted)
        return;
      const { naturalHeight: $, naturalWidth: D } = w;
      $ || D ? (i.value = D, u.value = $) : w.complete || r.value !== "loading" || k == null ? (w.currentSrc.endsWith(".svg") || w.currentSrc.startsWith("data:image/svg+xml")) && (i.value = 1, u.value = 1) : S = window.setTimeout(P, k);
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
    const w = d("img", { class: ["v-img__img", A.value], style: { objectPosition: e.position }, src: v.value.src, srcset: v.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: s, onLoad: c, onError: h }, null), k = (P = l.sources) == null ? void 0 : P.call(l);
    return d(tt, { transition: e.transition, appear: !0 }, { default: () => [Ge(k ? d("picture", { class: "v-img__picture" }, [k, w]) : w, [[Vt, r.value === "loaded"]])] });
  }, C = () => d(tt, { transition: e.transition }, { default: () => [v.value.lazySrc && r.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", A.value], style: { objectPosition: e.position }, src: v.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), B = () => l.placeholder ? d(tt, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !l.error) && d("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, _ = () => l.error ? d(tt, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && d("div", { class: "v-img__error" }, [l.error()])] }) : null, V = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, g = de(!1);
  {
    const w = oe(f, (k) => {
      k && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          g.value = !0;
        });
      }), w());
    });
  }
  return ue(() => {
    const w = ya.filterProps(e);
    return Ge(d(ya, te({ class: ["v-img", { "v-img--booting": !g.value }, e.class], style: [{ width: ae(e.width === "auto" ? i.value : e.width) }, e.style] }, w, { aspectRatio: f.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(pe, null, [d(F, null, null), d(C, null, null), d(V, null, null), d(B, null, null), d(_, null, null)]), default: l.default }), [[yt("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: s, state: r, naturalWidth: i, naturalHeight: u };
} }), Dt = R({ border: [Boolean, Number, String] }, "border");
function Zt(e) {
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
const wt = R({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function Tt(e) {
  return { elevationClasses: m(() => {
    const n = It(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const Qe = R({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
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
const js = [null, "default", "comfortable", "compact"], Ye = R({ density: { type: String, default: "default", validator: (e) => js.includes(e) } }, "density");
function et(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return { densityClasses: m(() => `${n}--density-${e.density}`) };
}
const Ws = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ll(e, n) {
  return d(pe, null, [e && d("span", { key: "overlay", class: `${n}__overlay` }, null), d("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const ct = R({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ws.includes(e) } }, "variant");
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
const xo = R({ divided: Boolean, ...Dt(), ...ve(), ...Ye(), ...wt(), ...Qe(), ...Ve(), ...Be(), ...ct() }, "VBtnGroup"), ba = le()({ name: "VBtnGroup", props: xo(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = $e(e), { densityClasses: a } = et(e), { borderClasses: o } = Zt(e), { elevationClasses: s } = Tt(e), { roundedClasses: r } = ut(e);
  Xe({ VBtn: { height: "auto", color: q(e, "color"), density: q(e, "density"), flat: !0, variant: q(e, "variant") } }), ue(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, o.value, a.value, s.value, r.value, e.class], style: e.style }, t));
} }), wo = R({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), ko = R({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Co(e, n) {
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
  return oe(i, (v) => {
    l.emit("group:selected", { value: v });
  }), { id: a, isSelected: i, toggle: () => o.select(a, !i.value), select: (v) => o.select(a, v), selectedClass: u, value: s, disabled: r, group: o };
}
function Po(e, n) {
  let t = !1;
  const l = Yt([]), a = xe(e, "modelValue", [], (u) => u == null ? [] : Sa(l, Ie(u)), (u) => {
    const v = function(f, p) {
      const c = [];
      return p.forEach((h) => {
        const y = f.findIndex((S) => S.id === h);
        if (~y) {
          const S = f[y];
          c.push(S.value != null ? S.value : y);
        }
      }), c;
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
      let p = (f + u) % l.length, c = l[p];
      for (; c.disabled && p !== f; )
        p = (p + u) % l.length, c = l[p];
      if (c.disabled)
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
    const f = u, p = ul(Symbol.for(`${n.description}:id`), o == null ? void 0 : o.vnode).indexOf(v);
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
        const p = a.value.slice(), c = p.findIndex((y) => y === u), h = ~c;
        if (v = v ?? !h, h && e.mandatory && p.length <= 1 || !h && e.max != null && p.length + 1 > e.max)
          return;
        c < 0 && v ? p.push(u) : c >= 0 && !v && p.splice(c, 1), a.value = p;
      } else {
        const p = a.value.includes(u);
        if (e.mandatory && p)
          return;
        a.value = v ?? !p ? [u] : [];
      }
  }, disabled: q(e, "disabled"), prev: () => r(l.length - 1), next: () => r(1), isSelected: (u) => a.value.includes(u), selectedClass: m(() => e.selectedClass), items: m(() => l), getItemIndex: (u) => function(v, f) {
    const p = Sa(v, [f]);
    return p.length ? v.findIndex((c) => c.id === p[0]) : -1;
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
const Bo = Symbol.for("vuetify:v-btn-toggle"), zs = R({ ...xo(), ...wo() }, "VBtnToggle");
le()({ name: "VBtnToggle", props: zs(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, next: a, prev: o, select: s, selected: r } = Po(e, Bo);
  return ue(() => {
    const i = ba.filterProps(e);
    return d(ba, te({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var u;
      return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: l, next: a, prev: o, select: s, selected: r })];
    } });
  }), { next: a, prev: o, select: s };
} });
const me = [String, Function, Object, Array], Gs = Symbol.for("vuetify:icons"), xl = R({ icon: { type: me }, tag: { type: String, required: !0 } }, "icon"), xa = le()({ name: "VComponentIcon", props: xl(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const l = e.icon;
    return d(e.tag, null, { default: () => {
      var a;
      return [e.icon ? d(l, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
    } });
  };
} }), Hs = Ht({ name: "VSvgIcon", inheritAttrs: !1, props: xl(), setup(e, n) {
  let { attrs: t } = n;
  return () => d(e.tag, te(t, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? d("path", { d: l[0], "fill-opacity": l[1] }, null) : d("path", { d: l }, null)) : d("path", { d: e.icon }, null)])] });
} });
Ht({ name: "VLigatureIcon", props: xl(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), Ht({ name: "VClassIcon", props: xl(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const Ks = ["x-small", "small", "default", "large", "x-large"], Lt = R({ size: { type: [String, Number], default: "default" } }, "size");
function Qt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return xn(() => {
    let t, l;
    return gl(Ks, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = { width: ae(e.size), height: ae(e.size) }), { sizeClasses: t, sizeStyles: l };
  });
}
const qs = R({ color: String, start: Boolean, end: Boolean, icon: me, ...ve(), ...Lt(), ...Ve({ tag: "i" }), ...Be() }, "VIcon"), Ae = le()({ name: "VIcon", props: qs(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const a = J(), { themeClasses: o } = $e(e), { iconData: s } = ((v) => {
    const f = Se(Gs);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: m(() => {
      var S;
      const p = b(v);
      if (!p)
        return { component: xa };
      let c = p;
      if (typeof c == "string" && (c = c.trim(), c.startsWith("$") && (c = (S = f.aliases) == null ? void 0 : S[c.slice(1)])), !c)
        throw new Error(`Could not find aliased icon "${p}"`);
      if (Array.isArray(c))
        return { component: Hs, icon: c };
      if (typeof c != "string")
        return { component: xa, icon: c };
      const h = Object.keys(f.sets).find((x) => typeof c == "string" && c.startsWith(`${x}:`)), y = h ? c.slice(h.length + 1) : c;
      return { component: f.sets[h ?? f.defaultSet].component, icon: y };
    }) };
  })(m(() => a.value || e.icon)), { sizeClasses: r } = Qt(e), { textColorClasses: i, textColorStyles: u } = Je(q(e, "color"));
  return ue(() => {
    var f, p;
    const v = (f = l.default) == null ? void 0 : f.call(l);
    return v && (a.value = (p = to(v).filter((c) => c.type === vs && c.children && typeof c.children == "string")[0]) == null ? void 0 : p.children), d(s.value.component, { tag: e.tag, icon: s.value.icon, class: ["v-icon", "notranslate", o.value, r.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [r.value ? void 0 : { fontSize: ae(e.size), height: ae(e.size), width: ae(e.size) }, u.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [v] });
  }), {};
} });
function Ao(e, n) {
  const t = J(), l = de(!1);
  if (bn) {
    const a = new IntersectionObserver((o) => {
      e == null || e(o, a), l.value = !!o.find((s) => s.isIntersecting);
    }, n);
    Ze(() => {
      a.disconnect();
    }), oe(t, (o, s) => {
      s && (a.unobserve(s), l.value = !1), o && a.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: l };
}
const Us = R({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ve(), ...Lt(), ...Ve({ tag: "div" }), ...Be() }, "VProgressCircular"), _o = le()({ name: "VProgressCircular", props: Us(), setup(e, n) {
  let { slots: t } = n;
  const l = 2 * Math.PI * 20, a = J(), { themeClasses: o } = $e(e), { sizeClasses: s, sizeStyles: r } = Qt(e), { textColorClasses: i, textColorStyles: u } = Je(q(e, "color")), { textColorClasses: v, textColorStyles: f } = Je(q(e, "bgColor")), { intersectionRef: p, isIntersecting: c } = Ao(), { resizeRef: h, contentRect: y } = Tl(), S = m(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = m(() => Number(e.width)), A = m(() => r.value ? Number(e.size) : y.value ? y.value.width : Math.max(x.value, 32)), F = m(() => 20 / (1 - x.value / A.value) * 2), C = m(() => x.value / A.value * F.value), B = m(() => ae((100 - S.value) / 100 * l));
  return Ne(() => {
    p.value = a.value, h.value = a.value;
  }), ue(() => d(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": c.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, o.value, s.value, i.value, e.class], style: [r.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : S.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${F.value} ${F.value}` }, [d("circle", { class: ["v-progress-circular__underlay", v.value], style: f.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": B.value }, null)]), t.default && d("div", { class: "v-progress-circular__content" }, [t.default({ value: S.value })])] })), {};
} }), wa = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Fo = R({ location: String }, "location");
function $o(e) {
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
const Ys = R({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ve(), ...Fo({ location: "top" }), ...Qe(), ...Ve(), ...Be() }, "VProgressLinear"), Vo = le()({ name: "VProgressLinear", props: Ys(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = xe(e, "modelValue"), { isRtl: a, rtlClasses: o } = Et(), { themeClasses: s } = $e(e), { locationStyles: r } = $o(e), { textColorClasses: i, textColorStyles: u } = Je(e, "color"), { backgroundColorClasses: v, backgroundColorStyles: f } = ot(m(() => e.bgColor || e.color)), { backgroundColorClasses: p, backgroundColorStyles: c } = ot(e, "color"), { roundedClasses: h } = ut(e), { intersectionRef: y, isIntersecting: S } = Ao(), x = m(() => parseInt(e.max, 10)), A = m(() => parseInt(e.height, 10)), F = m(() => parseFloat(e.bufferValue) / x.value * 100), C = m(() => parseFloat(l.value) / x.value * 100), B = m(() => a.value !== e.reverse), _ = m(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), V = m(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function g(w) {
    if (!y.value)
      return;
    const { left: k, right: P, width: $ } = y.value.getBoundingClientRect(), D = B.value ? $ - w.clientX + (P - $) : w.clientX - k;
    l.value = Math.round(D / $ * x.value);
  }
  return ue(() => d(e.tag, { ref: y, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && S.value, "v-progress-linear--reverse": B.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, h.value, s.value, o.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ae(A.value) : 0, "--v-progress-linear-height": ae(A.value), ...r.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : C.value, onClick: e.clickable && g }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...u.value, [B.value ? "left" : "right"]: ae(-A.value), borderTop: `${ae(A.value / 2)} dotted`, opacity: V.value, top: `calc(50% - ${ae(A.value / 4)})`, width: ae(100 - F.value, "%"), "--v-progress-linear-stream-to": ae(A.value * (B.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", v.value], style: [f.value, { opacity: V.value, width: ae(e.stream ? F.value : 100, "%") }] }, null), d(mt, { name: _.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((w) => d("div", { key: w, class: ["v-progress-linear__indeterminate", w, p.value], style: c.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", p.value], style: [c.value, { width: ae(C.value, "%") }] }, null)] }), t.default && d("div", { class: "v-progress-linear__content" }, [t.default({ value: C.value, buffer: F.value })])] })), {};
} }), Bn = R({ loading: [Boolean, String] }, "loader");
function An(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return { loaderClasses: m(() => ({ [`${n}--loading`]: e.loading })) };
}
function Io(e, n) {
  var l;
  let { slots: t } = n;
  return d("div", { class: `${e.name}__loader` }, [((l = t.default) == null ? void 0 : l.call(t, { color: e.color, isActive: e.active })) || d(Vo, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Xs = ["static", "relative", "fixed", "absolute", "sticky"], Js = R({ position: { type: String, validator: (e) => Xs.includes(e) } }, "position");
function _n(e, n) {
  const t = Xa("RouterLink"), l = m(() => !(!e.href && !e.to)), a = m(() => (l == null ? void 0 : l.value) || Zn(n, "click") || Zn(e, "click"));
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
const Fn = R({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let ql = !1;
const an = Symbol("rippleStop"), Zs = 80;
function ka(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function on(e) {
  return e.constructor.name === "TouchEvent";
}
function Eo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const wl = { show(e, n) {
  var c;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((c = n == null ? void 0 : n._ripple) != null && c.enabled))
    return;
  const l = document.createElement("span"), a = document.createElement("span");
  l.appendChild(a), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
  const { radius: o, scale: s, x: r, y: i, centerX: u, centerY: v } = function(h, y) {
    var V;
    let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = 0, A = 0;
    if (!Eo(h)) {
      const g = y.getBoundingClientRect(), w = on(h) ? h.touches[h.touches.length - 1] : h;
      x = w.clientX - g.left, A = w.clientY - g.top;
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
    if (n.center = t._ripple.centered || Eo(e), t._ripple.class && (n.class = t._ripple.class), on(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        wl.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Zs);
    } else
      wl.show(e, t, n);
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
    }), wl.hide(n);
  }
}
function To(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let qt = !1;
function Lo(e) {
  qt || e.keyCode !== qn.enter && e.keyCode !== qn.space || (qt = !0, Kt(e));
}
function Oo(e) {
  qt = !1, Me(e);
}
function Mo(e) {
  qt && (qt = !1, Me(e));
}
function Pa(e, n, t) {
  const { value: l, modifiers: a } = n, o = Do(l);
  if (o || wl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = a.center, e._ripple.circle = a.circle, tn(l) && l.class && (e._ripple.class = l.class), o && !t) {
    if (a.stop)
      return e.addEventListener("touchstart", Ca, { passive: !0 }), void e.addEventListener("mousedown", Ca);
    e.addEventListener("touchstart", Kt, { passive: !0 }), e.addEventListener("touchend", Me, { passive: !0 }), e.addEventListener("touchmove", To, { passive: !0 }), e.addEventListener("touchcancel", Me), e.addEventListener("mousedown", Kt), e.addEventListener("mouseup", Me), e.addEventListener("mouseleave", Me), e.addEventListener("keydown", Lo), e.addEventListener("keyup", Oo), e.addEventListener("blur", Mo), e.addEventListener("dragstart", Me, { passive: !0 });
  } else
    !o && t && Ro(e);
}
function Ro(e) {
  e.removeEventListener("mousedown", Kt), e.removeEventListener("touchstart", Kt), e.removeEventListener("touchend", Me), e.removeEventListener("touchmove", To), e.removeEventListener("touchcancel", Me), e.removeEventListener("mouseup", Me), e.removeEventListener("mouseleave", Me), e.removeEventListener("keydown", Lo), e.removeEventListener("keyup", Oo), e.removeEventListener("dragstart", Me), e.removeEventListener("blur", Mo);
}
const Ml = { mounted: function(e, n) {
  Pa(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, Ro(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && Pa(e, n, Do(n.oldValue));
} }, Qs = R({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Bo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: me, appendIcon: me, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Dt(), ...ve(), ...Ye(), ...St(), ...wt(), ...ko(), ...Bn(), ...Fo(), ...Js(), ...Qe(), ...Fn(), ...Lt(), ...Ve({ tag: "button" }), ...Be(), ...ct({ variant: "elevated" }) }, "VBtn"), pt = le()({ name: "VBtn", directives: { Ripple: Ml }, props: Qs(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: a } = $e(e), { borderClasses: o } = Zt(e), { colorClasses: s, colorStyles: r, variantClasses: i } = Ol(e), { densityClasses: u } = et(e), { dimensionStyles: v } = xt(e), { elevationClasses: f } = Tt(e), { loaderClasses: p } = An(e), { locationStyles: c } = $o(e), { positionClasses: h } = function(w) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
    return { positionClasses: m(() => w.position ? `${k}--${w.position}` : void 0) };
  }(e), { roundedClasses: y } = ut(e), { sizeClasses: S, sizeStyles: x } = Qt(e), A = Co(e, e.symbol, !1), F = _n(e, t), C = m(() => {
    var w;
    return e.active !== void 0 ? e.active : F.isLink.value ? (w = F.isActive) == null ? void 0 : w.value : A == null ? void 0 : A.isSelected.value;
  }), B = m(() => (A == null ? void 0 : A.disabled.value) || e.disabled), _ = m(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), V = m(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function g(w) {
    var k;
    B.value || F.isLink.value && (w.metaKey || w.ctrlKey || w.shiftKey || w.button !== 0 || t.target === "_blank") || ((k = F.navigate) == null || k.call(F, w), A == null || A.toggle());
  }
  return function(w, k) {
    oe(() => {
      var P;
      return (P = w.isActive) == null ? void 0 : P.value;
    }, (P) => {
      w.isLink.value && P && k && Fe(() => {
        k(!0);
      });
    }, { immediate: !0 });
  }(F, A == null ? void 0 : A.select), ue(() => {
    var O, T;
    const w = F.isLink.value ? "a" : e.tag, k = !(!e.prependIcon && !l.prepend), P = !(!e.appendIcon && !l.append), $ = !(!e.icon || e.icon === !0), D = (A == null ? void 0 : A.isSelected.value) && (!F.isLink.value || ((O = F.isActive) == null ? void 0 : O.value)) || !A || ((T = F.isActive) == null ? void 0 : T.value);
    return Ge(d(w, { type: w === "a" ? void 0 : "button", class: ["v-btn", A == null ? void 0 : A.selectedClass.value, { "v-btn--active": C.value, "v-btn--block": e.block, "v-btn--disabled": B.value, "v-btn--elevated": _.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, a.value, o.value, D ? s.value : void 0, u.value, f.value, p.value, h.value, y.value, S.value, i.value, e.class], style: [D ? r.value : void 0, v.value, c.value, x.value, e.style], disabled: B.value || void 0, href: F.href.value, onClick: g, value: V.value }, { default: () => {
      var M;
      return [Ll(!0, "v-btn"), !e.icon && k && d("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? d(ze, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : d(Ae, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && $ ? d(Ae, { key: "content-icon", icon: e.icon }, null) : d(ze, { key: "content-defaults", disabled: !$, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var H;
        return [((H = l.default) == null ? void 0 : H.call(l)) ?? e.text];
      } })]), !e.icon && P && d("span", { key: "append", class: "v-btn__append" }, [l.append ? d(ze, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : d(Ae, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((M = l.loader) == null ? void 0 : M.call(l)) ?? d(_o, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[yt("ripple"), !B.value && e.ripple, null]]);
  }), {};
} }), ei = R({ text: String, clickable: Boolean, ...ve(), ...Be() }, "VLabel"), No = le()({ name: "VLabel", props: ei(), setup(e, n) {
  let { slots: t } = n;
  return ue(() => {
    var l;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), jo = Symbol.for("vuetify:selection-control-group"), Wo = R({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: me, trueIcon: me, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: st }, ...ve(), ...Ye(), ...Be() }, "SelectionControlGroup"), ti = R({ ...Wo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
le()({ name: "VSelectionControlGroup", props: ti(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = xe(e, "modelValue"), a = qe(), o = m(() => e.id || `v-selection-control-group-${a}`), s = m(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return ke(jo, { modelValue: l, forceUpdate: () => {
    r.forEach((i) => i());
  }, onForceUpdate: (i) => {
    r.add(i), Le(() => {
      r.delete(i);
    });
  } }), Xe({ [e.defaultsTarget]: { color: q(e, "color"), disabled: q(e, "disabled"), density: q(e, "density"), error: q(e, "error"), inline: q(e, "inline"), modelValue: l, multiple: m(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: s, falseIcon: q(e, "falseIcon"), trueIcon: q(e, "trueIcon"), readonly: q(e, "readonly"), ripple: q(e, "ripple"), type: q(e, "type"), valueComparator: q(e, "valueComparator") } }), ue(() => {
    var i;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const zo = R({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ve(), ...Wo() }, "VSelectionControl"), Ba = le()({ name: "VSelectionControl", directives: { Ripple: Ml }, inheritAttrs: !1, props: zo(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { group: a, densityClasses: o, icon: s, model: r, textColorClasses: i, textColorStyles: u, backgroundColorClasses: v, backgroundColorStyles: f, trueValue: p } = function(B) {
    const _ = Se(jo, void 0), { densityClasses: V } = et(B), g = xe(B, "modelValue"), w = m(() => B.trueValue !== void 0 ? B.trueValue : B.value === void 0 || B.value), k = m(() => B.falseValue !== void 0 && B.falseValue), P = m(() => !!B.multiple || B.multiple == null && Array.isArray(g.value)), $ = m({ get() {
      const I = _ ? _.modelValue.value : g.value;
      return P.value ? Ie(I).some((N) => B.valueComparator(N, w.value)) : B.valueComparator(I, w.value);
    }, set(I) {
      if (B.readonly)
        return;
      const N = I ? w.value : k.value;
      let j = N;
      P.value && (j = I ? [...Ie(g.value), N] : Ie(g.value).filter((U) => !B.valueComparator(U, w.value))), _ ? _.modelValue.value = j : g.value = j;
    } }), { textColorClasses: D, textColorStyles: O } = Je(m(() => {
      if (!B.error && !B.disabled)
        return $.value ? B.color : B.baseColor;
    })), { backgroundColorClasses: T, backgroundColorStyles: M } = ot(m(() => !$.value || B.error || B.disabled ? void 0 : B.color)), H = m(() => $.value ? B.trueIcon : B.falseIcon);
    return { group: _, densityClasses: V, trueValue: w, falseValue: k, model: $, textColorClasses: D, textColorStyles: O, backgroundColorClasses: T, backgroundColorStyles: M, icon: H };
  }(e), c = qe(), h = m(() => e.id || `input-${c}`), y = de(!1), S = de(!1), x = J();
  function A(B) {
    y.value = !0, yl(B.target, ":focus-visible") !== !1 && (S.value = !0);
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
    var w, k;
    const B = l.label ? l.label({ label: e.label, props: { for: h.value } }) : e.label, [_, V] = Sn(t), g = d("input", te({ ref: x, checked: r.value, disabled: !(!e.readonly && !e.disabled), id: h.value, onBlur: F, onFocus: A, onInput: C, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: p.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, V), null);
    return d("div", te({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": y.value, "v-selection-control--focus-visible": S.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, _, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", i.value], style: u.value }, [(w = l.default) == null ? void 0 : w.call(l, { backgroundColorClasses: v, backgroundColorStyles: f }), Ge(d("div", { class: ["v-selection-control__input"] }, [((k = l.input) == null ? void 0 : k.call(l, { model: r, textColorClasses: i, textColorStyles: u, backgroundColorClasses: v, backgroundColorStyles: f, inputNode: g, icon: s.value, props: { onFocus: A, onBlur: F, id: h.value } })) ?? d(pe, null, [s.value && d(Ae, { key: "icon", icon: s.value }, null), g])]), [[yt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), B && d(No, { for: h.value, clickable: !0, onClick: (P) => P.stopPropagation() }, { default: () => [B] })]);
  }), { isFocused: y, input: x };
} }), Go = R({ indeterminate: Boolean, indeterminateIcon: { type: me, default: "$checkboxIndeterminate" }, ...zo({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), _t = le()({ name: "VCheckboxBtn", props: Go(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = xe(e, "indeterminate"), a = xe(e, "modelValue");
  function o(i) {
    l.value && (l.value = !1);
  }
  const s = m(() => l.value ? e.indeterminateIcon : e.falseIcon), r = m(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return ue(() => {
    const i = bt(Ba.filterProps(e), ["modelValue"]);
    return d(Ba, te(i, { modelValue: a.value, "onUpdate:modelValue": [(u) => a.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: s.value, trueIcon: r.value, "aria-checked": l.value ? "mixed" : void 0 }), t);
  }), {};
} });
function Ho(e) {
  const { t: n } = it();
  return { InputIcon: function(t) {
    let { name: l } = t;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], o = e[`onClick:${l}`], s = o && a ? n(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return d(Ae, { icon: e[`${l}Icon`], "aria-label": s, onClick: o }, null);
  } };
}
const li = R({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ve(), ...Jt({ transition: { component: yo, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), ni = le()({ name: "VMessages", props: li(), setup(e, n) {
  let { slots: t } = n;
  const l = m(() => Ie(e.messages)), { textColorClasses: a, textColorStyles: o } = Je(m(() => e.color));
  return ue(() => d(tt, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [o.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((s, r) => d("div", { class: "v-messages__message", key: `${r}-${l.value}` }, [t.message ? t.message({ message: s }) : s]))] })), {};
} }), Ko = R({ focused: Boolean, "onUpdate:focused": Re() }, "focus");
function $n(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  const t = xe(e, "focused");
  return { focusClasses: m(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const ai = Symbol.for("vuetify:form");
function qo() {
  return Se(ai, null);
}
const oi = R({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Ko() }, "validation"), Vn = R({ id: String, appendIcon: me, centerAffix: { type: Boolean, default: !0 }, prependIcon: me, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Re(), "onClick:append": Re(), ...ve(), ...Ye(), ...oi() }, "VInput"), kl = le()({ name: "VInput", props: { ...Vn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: a } = n;
  const { densityClasses: o } = et(e), { rtlClasses: s } = Et(), { InputIcon: r } = Ho(e), i = qe(), u = m(() => e.id || `input-${i}`), v = m(() => `${u.value}-messages`), { errorMessages: f, isDirty: p, isDisabled: c, isReadonly: h, isPristine: y, isValid: S, isValidating: x, reset: A, resetValidation: F, validate: C, validationClasses: B } = function(g) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue(), k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qe();
    const P = xe(g, "modelValue"), $ = m(() => g.validationValue === void 0 ? P.value : g.validationValue), D = qo(), O = J([]), T = de(!0), M = m(() => !(!Ie(P.value === "" ? null : P.value).length && !Ie($.value === "" ? null : $.value).length)), H = m(() => !!(g.disabled ?? (D == null ? void 0 : D.isDisabled.value))), I = m(() => !!(g.readonly ?? (D == null ? void 0 : D.isReadonly.value))), N = m(() => {
      var z;
      return (z = g.errorMessages) != null && z.length ? Ie(g.errorMessages).concat(O.value).slice(0, Math.max(0, +g.maxErrors)) : O.value;
    }), j = m(() => {
      let z = (g.validateOn ?? (D == null ? void 0 : D.validateOn.value)) || "input";
      z === "lazy" && (z = "input lazy");
      const E = new Set((z == null ? void 0 : z.split(" ")) ?? []);
      return { blur: E.has("blur") || E.has("input"), input: E.has("input"), submit: E.has("submit"), lazy: E.has("lazy") };
    }), U = m(() => {
      var z;
      return !g.error && !((z = g.errorMessages) != null && z.length) && (!g.rules.length || (T.value ? !O.value.length && !j.value.lazy || null : !O.value.length));
    }), ee = de(!1), X = m(() => ({ [`${w}--error`]: U.value === !1, [`${w}--dirty`]: M.value, [`${w}--disabled`]: H.value, [`${w}--readonly`]: I.value })), Z = m(() => g.name ?? b(k));
    function L() {
      P.value = null, Fe(W);
    }
    function W() {
      T.value = !0, j.value.lazy ? O.value = [] : G(!0);
    }
    async function G() {
      let z = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const E = [];
      ee.value = !0;
      for (const K of g.rules) {
        if (E.length >= +(g.maxErrors ?? 1))
          break;
        const se = typeof K == "function" ? K : () => K, Y = await se($.value);
        Y !== !0 && (Y === !1 || typeof Y == "string" ? E.push(Y || "") : console.warn(`${Y} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return O.value = E, ee.value = !1, T.value = z, O.value;
    }
    return hn(() => {
      D == null || D.register({ id: Z.value, validate: G, reset: L, resetValidation: W });
    }), Ze(() => {
      D == null || D.unregister(Z.value);
    }), ht(async () => {
      j.value.lazy || await G(!0), D == null || D.update(Z.value, U.value, N.value);
    }), gt(() => j.value.input, () => {
      oe($, () => {
        if ($.value != null)
          G();
        else if (g.focused) {
          const z = oe(() => g.focused, (E) => {
            E || G(), z();
          });
        }
      });
    }), gt(() => j.value.blur, () => {
      oe(() => g.focused, (z) => {
        z || G();
      });
    }), oe(U, () => {
      D == null || D.update(Z.value, U.value, N.value);
    }), { errorMessages: N, isDirty: M, isDisabled: H, isReadonly: I, isPristine: T, isValid: U, isValidating: ee, reset: L, resetValidation: W, validate: G, validationClasses: X };
  }(e, "v-input", u), _ = m(() => ({ id: u, messagesId: v, isDirty: p, isDisabled: c, isReadonly: h, isPristine: y, isValid: S, isValidating: x, reset: A, resetValidation: F, validate: C })), V = m(() => {
    var g;
    return (g = e.errorMessages) != null && g.length || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ue(() => {
    var $, D, O, T;
    const g = !(!l.prepend && !e.prependIcon), w = !(!l.append && !e.appendIcon), k = V.value.length > 0, P = !e.hideDetails || e.hideDetails === "auto" && (k || !!l.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, s.value, B.value, e.class], style: e.style }, [g && d("div", { key: "prepend", class: "v-input__prepend" }, [($ = l.prepend) == null ? void 0 : $.call(l, _.value), e.prependIcon && d(r, { key: "prepend-icon", name: "prepend" }, null)]), l.default && d("div", { class: "v-input__control" }, [(D = l.default) == null ? void 0 : D.call(l, _.value)]), w && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(r, { key: "append-icon", name: "append" }, null), (O = l.append) == null ? void 0 : O.call(l, _.value)]), P && d("div", { class: "v-input__details" }, [d(ni, { id: v.value, active: k, messages: V.value }, { message: l.message }), (T = l.details) == null ? void 0 : T.call(l, _.value)])]);
  }), { reset: A, resetValidation: F, validate: C, isValid: S, errorMessages: f };
} }), ri = R({ ...Vn(), ...bt(Go(), ["inline"]) }, "VCheckbox"), In = le()({ name: "VCheckbox", inheritAttrs: !1, props: ri(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const a = xe(e, "modelValue"), { isFocused: o, focus: s, blur: r } = $n(e), i = qe(), u = m(() => e.id || `checkbox-${i}`);
  return ue(() => {
    const [v, f] = Sn(t), p = kl.filterProps(e), c = _t.filterProps(e);
    return d(kl, te({ class: ["v-checkbox", e.class] }, v, p, { modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, id: u.value, focused: o.value, style: e.style }), { ...l, default: (h) => {
      let { id: y, messagesId: S, isDisabled: x, isReadonly: A } = h;
      return d(_t, te(c, { id: y.value, "aria-describedby": S.value, disabled: x.value, readonly: A.value }, f, { modelValue: a.value, "onUpdate:modelValue": (F) => a.value = F, onFocus: s, onBlur: r }), l);
    } });
  }), {};
} }), si = R({ start: Boolean, end: Boolean, icon: me, image: String, text: String, ...ve(), ...Ye(), ...Qe(), ...Lt(), ...Ve(), ...Be(), ...ct({ variant: "flat" }) }, "VAvatar"), Cl = le()({ name: "VAvatar", props: si(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = $e(e), { colorClasses: a, colorStyles: o, variantClasses: s } = Ol(e), { densityClasses: r } = et(e), { roundedClasses: i } = ut(e), { sizeClasses: u, sizeStyles: v } = Qt(e);
  return ue(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, a.value, r.value, i.value, u.value, s.value, e.class], style: [o.value, v.value, e.style] }, { default: () => {
    var f;
    return [e.image ? d(Ns, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(Ae, { key: "icon", icon: e.icon }, null) : ((f = t.default) == null ? void 0 : f.call(t)) ?? e.text, Ll(!1, "v-avatar")];
  } })), {};
} }), Uo = Symbol.for("vuetify:v-chip-group"), ii = R({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: st }, ...ve(), ...wo({ selectedClass: "v-chip--selected" }), ...Ve(), ...Be(), ...ct({ variant: "tonal" }) }, "VChipGroup");
le()({ name: "VChipGroup", props: ii(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = $e(e), { isSelected: a, select: o, next: s, prev: r, selected: i } = Po(e, Uo);
  return Xe({ VChip: { color: q(e, "color"), disabled: q(e, "disabled"), filter: q(e, "filter"), variant: q(e, "variant") } }), ue(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: a, select: o, next: s, prev: r, selected: i.value })];
  } })), {};
} });
const ui = R({ activeClass: String, appendAvatar: String, appendIcon: me, closable: Boolean, closeIcon: { type: me, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: me, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Re(), onClickOnce: Re(), ...Dt(), ...ve(), ...Ye(), ...wt(), ...ko(), ...Qe(), ...Fn(), ...Lt(), ...Ve({ tag: "span" }), ...Be(), ...ct({ variant: "tonal" }) }, "VChip"), ci = le()({ name: "VChip", directives: { Ripple: Ml }, props: ui(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { t: o } = it(), { borderClasses: s } = Zt(e), { colorClasses: r, colorStyles: i, variantClasses: u } = Ol(e), { densityClasses: v } = et(e), { elevationClasses: f } = Tt(e), { roundedClasses: p } = ut(e), { sizeClasses: c } = Qt(e), { themeClasses: h } = $e(e), y = xe(e, "modelValue"), S = Co(e, Uo, !1), x = _n(e, t), A = m(() => e.link !== !1 && x.isLink.value), F = m(() => !e.disabled && e.link !== !1 && (!!S || e.link || x.isClickable.value)), C = m(() => ({ "aria-label": o(e.closeLabel), onClick(V) {
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
    const V = x.isLink.value ? "a" : e.tag, g = !(!e.appendIcon && !e.appendAvatar), w = !(!g && !a.append), k = !(!a.close && !e.closable), P = !(!a.filter && !e.filter) && S, $ = !(!e.prependIcon && !e.prependAvatar), D = !(!$ && !a.prepend), O = !S || S.isSelected.value;
    return y.value && Ge(d(V, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": F.value, "v-chip--filter": P, "v-chip--pill": e.pill }, h.value, s.value, O ? r.value : void 0, v.value, f.value, p.value, c.value, u.value, S == null ? void 0 : S.selectedClass.value, e.class], style: [O ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: x.href.value, tabindex: F.value ? 0 : void 0, onClick: B, onKeydown: F.value && !A.value && _ }, { default: () => {
      var T;
      return [Ll(F.value, "v-chip"), P && d(ho, { key: "filter" }, { default: () => [Ge(d("div", { class: "v-chip__filter" }, [a.filter ? d(ze, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : d(Ae, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Vt, S.isSelected.value]])] }), D && d("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? d(ze, { key: "prepend-defaults", disabled: !$, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : d(pe, null, [e.prependIcon && d(Ae, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(Cl, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((T = a.default) == null ? void 0 : T.call(a, { isSelected: S == null ? void 0 : S.isSelected.value, selectedClass: S == null ? void 0 : S.selectedClass.value, select: S == null ? void 0 : S.select, toggle: S == null ? void 0 : S.toggle, value: S == null ? void 0 : S.value.value, disabled: e.disabled })) ?? e.text]), w && d("div", { key: "append", class: "v-chip__append" }, [a.append ? d(ze, { key: "append-defaults", disabled: !g, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : d(pe, null, [e.appendIcon && d(Ae, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(Cl, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), k && d("button", te({ key: "close", class: "v-chip__close" }, C.value), [a.close ? d(ze, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : d(Ae, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[yt("ripple"), F.value && e.ripple, null]]);
  };
} }), rn = Symbol.for("vuetify:list");
function Yo() {
  const e = Se(rn, { hasPrepend: de(!1), updateHasPrepend: () => null }), n = { hasPrepend: de(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return ke(rn, n), e;
}
function Xo() {
  return Se(rn, null);
}
const di = { open: (e) => {
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
}, select: () => null }, Jo = { open: (e) => {
  let { id: n, value: t, opened: l, parents: a } = e;
  if (t) {
    let o = a.get(n);
    for (l.add(n); o != null && o !== n; )
      l.add(o), o = a.get(o);
    return l;
  }
  return l.delete(n), l;
}, select: () => null }, pi = { open: Jo.open, select: (e) => {
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
}, Ut = Symbol.for("vuetify:nested"), Zo = { id: de(), root: { register: () => null, unregister: () => null, parents: J(/* @__PURE__ */ new Map()), children: J(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: J(/* @__PURE__ */ new Set()), selected: J(/* @__PURE__ */ new Map()), selectedValues: J([]) } }, vi = R({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), fi = (e) => {
  let n = !1;
  const t = J(/* @__PURE__ */ new Map()), l = J(/* @__PURE__ */ new Map()), a = xe(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), o = m(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((f) => {
          const p = Aa(f);
          return { select: (c) => {
            let { id: h, selected: y, children: S, ...x } = c;
            return h = nt(h), S.has(h) ? y : p.select({ id: h, selected: y, children: S, ...x });
          }, in: p.in, out: p.out };
        })(e.mandatory);
      case "leaf":
        return ((f) => {
          const p = sn(f);
          return { select: (c) => {
            let { id: h, selected: y, children: S, ...x } = c;
            return h = nt(h), S.has(h) ? y : p.select({ id: h, selected: y, children: S, ...x });
          }, in: p.in, out: p.out };
        })(e.mandatory);
      case "independent":
        return sn(e.mandatory);
      case "single-independent":
        return Aa(e.mandatory);
      default:
        return /* @__PURE__ */ ((f) => {
          const p = { select: (c) => {
            let { id: h, value: y, selected: S, children: x, parents: A } = c;
            h = nt(h);
            const F = new Map(S), C = [h];
            for (; C.length; ) {
              const _ = C.shift();
              S.set(_, y ? "on" : "off"), x.has(_) && C.push(...x.get(_));
            }
            let B = A.get(h);
            for (; B; ) {
              const _ = x.get(B), V = _.every((w) => S.get(w) === "on"), g = _.every((w) => !S.has(w) || S.get(w) === "off");
              S.set(B, V ? "on" : g ? "off" : "indeterminate"), B = A.get(B);
            }
            return f && !y && Array.from(S.entries()).reduce((V, g) => {
              let [w, k] = g;
              return k === "on" ? [...V, w] : V;
            }, []).length === 0 ? F : S;
          }, in: (c, h, y) => {
            let S = /* @__PURE__ */ new Map();
            for (const x of c || [])
              S = p.select({ id: x, value: !0, selected: new Map(S), children: h, parents: y });
            return S;
          }, out: (c, h) => {
            const y = [];
            for (const [S, x] of c.entries())
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
        return pi;
      case "single":
        return di;
      default:
        return Jo;
    }
  }), r = xe(e, "selected", e.selected, (f) => o.value.in(f, t.value, l.value), (f) => o.value.out(f, t.value, l.value));
  function i(f) {
    const p = [];
    let c = f;
    for (; c != null; )
      p.unshift(c), c = l.value.get(c);
    return p;
  }
  Ze(() => {
    n = !0;
  });
  const u = Pe("nested"), v = { id: de(), root: { opened: a, selected: r, selectedValues: m(() => {
    const f = [];
    for (const [p, c] of r.value.entries())
      c === "on" && f.push(p);
    return f;
  }), register: (f, p, c) => {
    p && f !== p && l.value.set(f, p), c && t.value.set(f, []), p != null && t.value.set(p, [...t.value.get(p) || [], f]);
  }, unregister: (f) => {
    if (n)
      return;
    t.value.delete(f);
    const p = l.value.get(f);
    if (p) {
      const c = t.value.get(p) ?? [];
      t.value.set(p, c.filter((h) => h !== f));
    }
    l.value.delete(f), a.value.delete(f);
  }, open: (f, p, c) => {
    u.emit("click:open", { id: f, value: p, path: i(f), event: c });
    const h = s.value.open({ id: f, value: p, opened: new Set(a.value), children: t.value, parents: l.value, event: c });
    h && (a.value = h);
  }, openOnSelect: (f, p, c) => {
    const h = s.value.select({ id: f, value: p, selected: new Map(r.value), opened: new Set(a.value), children: t.value, parents: l.value, event: c });
    h && (a.value = h);
  }, select: (f, p, c) => {
    u.emit("click:select", { id: f, value: p, path: i(f), event: c });
    const h = o.value.select({ id: f, value: p, selected: new Map(r.value), children: t.value, parents: l.value, event: c });
    h && (r.value = h), v.root.openOnSelect(f, p, c);
  }, children: t, parents: l } };
  return ke(Ut, v), v.root;
}, Qo = (e, n) => {
  const t = Se(Ut, Zo), l = Symbol(qe()), a = m(() => e.value !== void 0 ? e.value : l), o = { ...t, id: a, open: (s, r) => t.root.open(a.value, s, r), openOnSelect: (s, r) => t.root.openOnSelect(a.value, s, r), isOpen: m(() => t.root.opened.value.has(a.value)), parent: m(() => t.root.parents.value.get(a.value)), select: (s, r) => t.root.select(a.value, s, r), isSelected: m(() => t.root.selected.value.get(nt(a.value)) === "on"), isIndeterminate: m(() => t.root.selected.value.get(a.value) === "indeterminate"), isLeaf: m(() => !t.root.children.value.get(a.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Ze(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && ke(Ut, o), o;
}, gi = Ht({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const l = Se(Ut, Zo);
    ke(Ut, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} }), mi = R({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: me, default: "$collapse" }, expandIcon: { type: me, default: "$expand" }, prependIcon: me, appendIcon: me, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ve(), ...Ve() }, "VListGroup"), _a = le()({ name: "VListGroup", props: mi(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: l, open: a, id: o } = Qo(q(e, "value"), !0), s = m(() => `v-list-group--id-${String(o.value)}`), r = Xo(), { isBooted: i } = function() {
    const c = de(!1);
    return ht(() => {
      window.requestAnimationFrame(() => {
        c.value = !0;
      });
    }), { ssrBootStyles: m(() => c.value ? void 0 : { transition: "none !important" }), isBooted: mn(c) };
  }();
  function u(c) {
    a(!l.value, c);
  }
  const v = m(() => ({ onClick: u, class: "v-list-group__header", id: s.value })), f = m(() => l.value ? e.collapseIcon : e.expandIcon), p = m(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && f.value, appendIcon: e.appendIcon || !e.subgroup && f.value, title: e.title, value: e.value } }));
  return ue(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [t.activator && d(ze, { defaults: p.value }, { default: () => [d(gi, null, { default: () => [t.activator({ props: v.value, isOpen: l.value })] })] }), d(tt, { transition: { component: Os }, disabled: !i.value }, { default: () => {
    var c;
    return [Ge(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": s.value }, [(c = t.default) == null ? void 0 : c.call(t)]), [[Vt, l.value]])];
  } })] })), {};
} }), yi = io("v-list-item-subtitle"), hi = io("v-list-item-title"), bi = R({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: me, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: me, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number], title: [String, Number], value: null, onClick: Re(), onClickOnce: Re(), ...Dt(), ...ve(), ...Ye(), ...St(), ...wt(), ...Qe(), ...Fn(), ...Ve(), ...Be(), ...ct({ variant: "text" }) }, "VListItem"), Pl = le()({ name: "VListItem", directives: { Ripple: Ml }, props: bi(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: a } = n;
  const o = _n(e, t), s = m(() => e.value === void 0 ? o.href.value : e.value), { select: r, isSelected: i, isIndeterminate: u, isGroupActivator: v, root: f, parent: p, openOnSelect: c } = Qo(s, !1), h = Xo(), y = m(() => {
    var I;
    return e.active !== !1 && (e.active || ((I = o.isActive) == null ? void 0 : I.value) || i.value);
  }), S = m(() => e.link !== !1 && o.isLink.value), x = m(() => !e.disabled && e.link !== !1 && (e.link || o.isClickable.value || e.value != null && !!h)), A = m(() => e.rounded || e.nav), F = m(() => e.color ?? e.activeColor), C = m(() => ({ color: y.value ? F.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  oe(() => {
    var I;
    return (I = o.isActive) == null ? void 0 : I.value;
  }, (I) => {
    I && p.value != null && f.open(p.value, !0), I && c(I);
  }, { immediate: !0 });
  const { themeClasses: B } = $e(e), { borderClasses: _ } = Zt(e), { colorClasses: V, colorStyles: g, variantClasses: w } = Ol(C), { densityClasses: k } = et(e), { dimensionStyles: P } = xt(e), { elevationClasses: $ } = Tt(e), { roundedClasses: D } = ut(A), O = m(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), T = m(() => ({ isActive: y.value, select: r, isSelected: i.value, isIndeterminate: u.value }));
  function M(I) {
    var N;
    a("click", I), !v && x.value && ((N = o.navigate) == null || N.call(o, I), e.value != null && r(!i.value, I));
  }
  function H(I) {
    I.key !== "Enter" && I.key !== " " || (I.preventDefault(), M(I));
  }
  return ue(() => {
    const I = S.value ? "a" : e.tag, N = l.title || e.title != null, j = l.subtitle || e.subtitle != null, U = !(!e.appendAvatar && !e.appendIcon), ee = !(!U && !l.append), X = !(!e.prependAvatar && !e.prependIcon), Z = !(!X && !l.prepend);
    var L, W;
    return h == null || h.updateHasPrepend(Z), e.activeColor && (L = "active-color", W = ["color", "base-color"], W = Array.isArray(W) ? W.slice(0, -1).map((G) => `'${G}'`).join(", ") + ` or '${W.at(-1)}'` : `'${W}'`, El(`[Vuetify UPGRADE] '${L}' is deprecated, use ${W} instead.`)), Ge(d(I, { class: ["v-list-item", { "v-list-item--active": y.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !Z && (h == null ? void 0 : h.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && y.value }, B.value, _.value, V.value, k.value, $.value, O.value, D.value, w.value, e.class], style: [g.value, P.value, e.style], href: o.href.value, tabindex: x.value ? h ? -2 : 0 : void 0, onClick: M, onKeydown: x.value && !S.value && H }, { default: () => {
      var G;
      return [Ll(x.value || y.value, "v-list-item"), Z && d("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? d(ze, { key: "prepend-defaults", disabled: !X, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var z;
        return [(z = l.prepend) == null ? void 0 : z.call(l, T.value)];
      } }) : d(pe, null, [e.prependAvatar && d(Cl, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(Ae, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [N && d(hi, { key: "title" }, { default: () => {
        var z;
        return [((z = l.title) == null ? void 0 : z.call(l, { title: e.title })) ?? e.title];
      } }), j && d(yi, { key: "subtitle" }, { default: () => {
        var z;
        return [((z = l.subtitle) == null ? void 0 : z.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (G = l.default) == null ? void 0 : G.call(l, T.value)]), ee && d("div", { key: "append", class: "v-list-item__append" }, [l.append ? d(ze, { key: "append-defaults", disabled: !U, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var z;
        return [(z = l.append) == null ? void 0 : z.call(l, T.value)];
      } }) : d(pe, null, [e.appendIcon && d(Ae, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(Cl, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[yt("ripple"), x.value && e.ripple]]);
  }), {};
} }), Si = R({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ve(), ...Ve() }, "VListSubheader"), xi = le()({ name: "VListSubheader", props: Si(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: l, textColorStyles: a } = Je(q(e, "color"));
  return ue(() => {
    const o = !(!t.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var s;
      return [o && d("div", { class: "v-list-subheader__text" }, [((s = t.default) == null ? void 0 : s.call(t)) ?? e.title])];
    } });
  }), {};
} }), wi = R({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ve(), ...Be() }, "VDivider"), er = le()({ name: "VDivider", props: wi(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: l } = $e(e), { textColorClasses: a, textColorStyles: o } = Je(q(e, "color")), s = m(() => {
    const r = {};
    return e.length && (r[e.vertical ? "maxHeight" : "maxWidth"] = ae(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ae(e.thickness)), r;
  });
  return ue(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, a.value, e.class], style: [s.value, o.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), ki = R({ items: Array, returnObject: Boolean }, "VListChildren"), tr = le()({ name: "VListChildren", props: ki(), setup(e, n) {
  let { slots: t } = n;
  return Yo(), () => {
    var l, a;
    return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((o) => {
      var p, c;
      let { children: s, props: r, type: i, raw: u } = o;
      if (i === "divider")
        return ((p = t.divider) == null ? void 0 : p.call(t, { props: r })) ?? d(er, r, null);
      if (i === "subheader")
        return ((c = t.subheader) == null ? void 0 : c.call(t, { props: r })) ?? d(xi, r, null);
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
      return s ? d(_a, te({ value: r == null ? void 0 : r.value }, f), { activator: (h) => {
        let { props: y } = h;
        const S = { ...r, ...y, value: e.returnObject ? u : r.value };
        return t.header ? t.header({ props: S }) : d(Pl, S, v);
      }, default: () => d(tr, { items: s }, t) }) : t.item ? t.item({ props: r }) : d(Pl, te(r, { value: e.returnObject ? u : r.value }), v);
    }));
  };
} }), lr = R({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: st } }, "list-items");
function un(e, n) {
  const t = Te(n, e.itemTitle, n), l = Te(n, e.itemValue, t), a = Te(n, e.itemChildren), o = { title: t, value: l, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? bt(n, ["children"]) : n : Te(n, e.itemProps) };
  return { title: String(o.title ?? ""), value: o.value, props: o, children: Array.isArray(a) ? nr(e, a) : void 0, raw: n };
}
function nr(e, n) {
  const t = [];
  for (const l of n)
    t.push(un(e, l));
  return t;
}
function Ci(e, n) {
  const t = Te(n, e.itemType, "item"), l = /* @__PURE__ */ function(r) {
    return typeof r == "string" || typeof r == "number" || typeof r == "boolean";
  }(n) ? n : Te(n, e.itemTitle), a = Te(n, e.itemValue, void 0), o = Te(n, e.itemChildren), s = { title: l, value: a, ...e.itemProps === !0 ? bt(n, ["children"]) : Te(n, e.itemProps) };
  return { type: t, title: s.title, value: s.value, props: s, children: t === "item" && o ? ar(e, o) : void 0, raw: n };
}
function ar(e, n) {
  const t = [];
  for (const l of n)
    t.push(Ci(e, l));
  return t;
}
const Pi = R({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...vi({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Dt(), ...ve(), ...Ye(), ...St(), ...wt(), itemType: { type: String, default: "type" }, ...lr(), ...Qe(), ...Ve(), ...Be(), ...ct({ variant: "text" }) }, "VList"), Bi = le()({ name: "VList", props: Pi(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: l } = function(w) {
    return { items: m(() => ar(w, w.items)) };
  }(e), { themeClasses: a } = $e(e), { backgroundColorClasses: o, backgroundColorStyles: s } = ot(q(e, "bgColor")), { borderClasses: r } = Zt(e), { densityClasses: i } = et(e), { dimensionStyles: u } = xt(e), { elevationClasses: v } = Tt(e), { roundedClasses: f } = ut(e), { open: p, select: c } = fi(e), h = m(() => e.lines ? `v-list--${e.lines}-line` : void 0), y = q(e, "activeColor"), S = q(e, "baseColor"), x = q(e, "color");
  Yo(), Xe({ VListGroup: { activeColor: y, baseColor: S, color: x }, VListItem: { activeClass: q(e, "activeClass"), activeColor: y, baseColor: S, color: x, density: q(e, "density"), disabled: q(e, "disabled"), lines: q(e, "lines"), nav: q(e, "nav"), slim: q(e, "slim"), variant: q(e, "variant") } });
  const A = de(!1), F = J();
  function C(w) {
    A.value = !0;
  }
  function B(w) {
    A.value = !1;
  }
  function _(w) {
    var k;
    A.value || w.relatedTarget && ((k = F.value) != null && k.contains(w.relatedTarget)) || g();
  }
  function V(w) {
    if (F.value) {
      if (w.key === "ArrowDown")
        g("next");
      else if (w.key === "ArrowUp")
        g("prev");
      else if (w.key === "Home")
        g("first");
      else {
        if (w.key !== "End")
          return;
        g("last");
      }
      w.preventDefault();
    }
  }
  function g(w) {
    if (F.value)
      return ml(F.value, w);
  }
  return ue(() => d(e.tag, { ref: F, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, o.value, r.value, i.value, v.value, h.value, f.value, e.class], style: [s.value, u.value, e.style], tabindex: e.disabled || A.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: C, onFocusout: B, onFocus: _, onKeydown: V }, { default: () => [d(tr, { items: l.value, returnObject: e.returnObject }, t)] })), { open: p, select: c, focus: g };
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
const or = { static: function() {
}, connected: function(e, n, t) {
  (Array.isArray(e.target.value) || function(c) {
    for (; c; ) {
      if (window.getComputedStyle(c).position === "fixed")
        return !0;
      c = c.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: a } = xn(() => {
    const c = nn(n.location, e.isRtl.value), h = n.origin === "overlap" ? c : n.origin === "auto" ? Gl(c) : nn(n.origin, e.isRtl.value);
    return c.side === h.side && c.align === Hl(h).align ? { preferredAnchor: ea(c), preferredOrigin: ea(h) } : { preferredAnchor: c, preferredOrigin: h };
  }), [o, s, r, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((c) => m(() => {
    const h = parseFloat(n[c]);
    return isNaN(h) ? 1 / 0 : h;
  })), u = m(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const c = n.offset.split(" ").map(parseFloat);
      return c.length < 2 && c.push(0), c;
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
    const c = oo(e.target.value), h = function(w, k) {
      k ? w.style.removeProperty("left") : w.style.removeProperty("right");
      const P = wn(w);
      return k ? P.x += parseFloat(w.style.right || 0) : P.x -= parseFloat(w.style.left || 0), P.y -= parseFloat(w.style.top || 0), P;
    }(e.contentEl.value, e.isRtl.value), y = Sl(e.contentEl.value);
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = y.reduce((w, k) => {
      const P = k.getBoundingClientRect(), $ = new ft({ x: k === document.documentElement ? 0 : P.x, y: k === document.documentElement ? 0 : P.y, width: k.clientWidth, height: k.clientHeight });
      return w ? new ft({ x: Math.max(w.left, $.left), y: Math.max(w.top, $.top), width: Math.min(w.right, $.right) - Math.max(w.left, $.left), height: Math.min(w.bottom, $.bottom) - Math.max(w.top, $.top) }) : $;
    }, void 0);
    S.x += 12, S.y += 12, S.width -= 24, S.height -= 24;
    let x = { anchor: l.value, origin: a.value };
    function A(w) {
      const k = new ft(h), P = Fa(w.anchor, c), $ = Fa(w.origin, k);
      let { x: D, y: O } = (M = $, { x: (T = P).x - M.x, y: T.y - M.y });
      var T, M;
      switch (w.anchor.side) {
        case "top":
          O -= u.value[0];
          break;
        case "bottom":
          O += u.value[0];
          break;
        case "left":
          D -= u.value[0];
          break;
        case "right":
          D += u.value[0];
      }
      switch (w.anchor.align) {
        case "top":
          O -= u.value[1];
          break;
        case "bottom":
          O += u.value[1];
          break;
        case "left":
          D -= u.value[1];
          break;
        case "right":
          D += u.value[1];
      }
      return k.x += D, k.y += O, k.width = Math.min(k.width, r.value), k.height = Math.min(k.height, i.value), { overflows: la(k, S), x: D, y: O };
    }
    let F = 0, C = 0;
    const B = { x: 0, y: 0 }, _ = { x: !1, y: !1 };
    let V = -1;
    for (; ; ) {
      if (V++ > 10) {
        ro("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: w, y: k, overflows: P } = A(x);
      F += w, C += k, h.x += w, h.y += k;
      {
        const $ = ta(x.anchor), D = P.x.before || P.x.after, O = P.y.before || P.y.after;
        let T = !1;
        if (["x", "y"].forEach((M) => {
          if (M === "x" && D && !_.x || M === "y" && O && !_.y) {
            const H = { anchor: { ...x.anchor }, origin: { ...x.origin } }, I = M === "x" ? $ === "y" ? Hl : Gl : $ === "y" ? Gl : Hl;
            H.anchor = I(H.anchor), H.origin = I(H.origin);
            const { overflows: N } = A(H);
            (N[M].before <= P[M].before && N[M].after <= P[M].after || N[M].before + N[M].after < (P[M].before + P[M].after) / 2) && (x = H, T = _[M] = !0);
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
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: ae(Yl(C)), left: e.isRtl.value ? void 0 : ae(Yl(F)), right: e.isRtl.value ? ae(Yl(-F)) : void 0, minWidth: ae(g === "y" ? Math.min(o.value, c.width) : o.value), maxWidth: ae($a(at(B.x, o.value === 1 / 0 ? 0 : o.value, r.value))), maxHeight: ae($a(at(B.y, s.value === 1 / 0 ? 0 : s.value, i.value))) }), { available: B, contentBox: h };
  }
  return oe([e.target, e.contentEl], (c, h) => {
    let [y, S] = c, [x, A] = h;
    x && !Array.isArray(x) && f.unobserve(x), y && !Array.isArray(y) && f.observe(y), A && f.unobserve(A), S && f.observe(S);
  }, { immediate: !0 }), Le(() => {
    f.disconnect();
  }), oe(() => [l.value, a.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => p()), Fe(() => {
    const c = p();
    if (!c)
      return;
    const { available: h, contentBox: y } = c;
    y.height > h.y && requestAnimationFrame(() => {
      p(), requestAnimationFrame(() => {
        p();
      });
    });
  }), { updateLocation: p };
} }, Ai = R({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in or }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
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
const dl = { none: null, close: function(e) {
  Ia(e.targetEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var r;
  const t = (r = e.root.value) == null ? void 0 : r.offsetParent, l = [.../* @__PURE__ */ new Set([...Sl(e.targetEl.value, n.contained ? t : void 0), ...Sl(e.contentEl.value, n.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, o = (s = t || document.documentElement, Cn(s) && s);
  var s;
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((i, u) => {
    i.style.setProperty("--v-body-scroll-x", ae(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", ae(-i.scrollTop)), i !== document.documentElement && i.style.setProperty("--v-scrollbar-offset", ae(a)), i.classList.add("v-overlay-scroll-blocked");
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
} }, _i = R({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in dl } }, "VOverlay-scroll-strategies");
function Ia(e, n) {
  const t = [document, ...Sl(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, { passive: !0 });
  }), Le(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const pn = Symbol.for("vuetify:v-menu"), Fi = R({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), $i = R({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Fi() }, "VOverlay-activator");
function Vi(e, n) {
  let { isActive: t, isTop: l } = n;
  const a = Pe("useActivator"), o = J();
  let s = !1, r = !1, i = !0;
  const u = m(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), v = m(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), { runOpenDelay: f, runCloseDelay: p } = function(P, $) {
    const D = {}, O = (T) => () => {
      if (!Ee)
        return Promise.resolve(!0);
      const M = T === "openDelay";
      return D.closeDelay && window.clearTimeout(D.closeDelay), delete D.closeDelay, D.openDelay && window.clearTimeout(D.openDelay), delete D.openDelay, new Promise((H) => {
        const I = parseInt(P[T] ?? 0, 10);
        D[T] = window.setTimeout(() => {
          $ == null || $(M), H(M);
        }, I);
      });
    };
    return { runCloseDelay: O("closeDelay"), runOpenDelay: O("openDelay") };
  }(e, (P) => {
    P !== (e.openOnHover && s || u.value && r) || e.openOnHover && t.value && !l.value || (t.value !== P && (i = !0), t.value = P);
  }), c = J(), h = (P) => {
    P.stopPropagation(), o.value = P.currentTarget || P.target, t.value || (c.value = [P.clientX, P.clientY]), t.value = !t.value;
  }, y = (P) => {
    var $;
    ($ = P.sourceCapabilities) != null && $.firesTouchEvents || (s = !0, o.value = P.currentTarget || P.target, f());
  }, S = (P) => {
    s = !1, p();
  }, x = (P) => {
    yl(P.target, ":focus-visible") !== !1 && (r = !0, P.stopPropagation(), o.value = P.currentTarget || P.target, f());
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
  oe(l, (P) => {
    !P || (!e.openOnHover || s || u.value && r) && (!u.value || r || e.openOnHover && s) || (t.value = !1);
  }), oe(t, (P) => {
    P || setTimeout(() => {
      c.value = void 0;
    });
  }, { flush: "post" });
  const _ = J();
  Ne(() => {
    _.value && Fe(() => {
      o.value = vl(_.value);
    });
  });
  const V = J(), g = m(() => e.target === "cursor" && c.value ? c.value : V.value ? vl(V.value) : Ea(e.target, a) || o.value), w = m(() => Array.isArray(g.value) ? void 0 : g.value);
  let k;
  return oe(() => !!e.activator, (P) => {
    P && Ee ? (k = yn(), k.run(() => {
      (function($, D, O) {
        let { activatorEl: T, activatorEvents: M } = O;
        function H() {
          let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N(), U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.activatorProps;
          j && function(ee, X) {
            Object.keys(X).forEach((Z) => {
              if (fl(Z)) {
                const L = Jn(Z), W = ol.get(ee);
                if (X[Z] == null)
                  W == null || W.forEach((G) => {
                    const [z, E] = G;
                    z === L && (ee.removeEventListener(L, E), W.delete(G));
                  });
                else if (!W || ![...W].some((G) => G[0] === L && G[1] === X[Z])) {
                  ee.addEventListener(L, X[Z]);
                  const G = W || /* @__PURE__ */ new Set();
                  G.add([L, X[Z]]), ol.has(ee) || ol.set(ee, G);
                }
              } else
                X[Z] == null ? ee.removeAttribute(Z) : ee.setAttribute(Z, X[Z]);
            });
          }(j, te(M.value, U));
        }
        function I() {
          let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N(), U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.activatorProps;
          j && function(ee, X) {
            Object.keys(X).forEach((Z) => {
              if (fl(Z)) {
                const L = Jn(Z), W = ol.get(ee);
                W == null || W.forEach((G) => {
                  const [z, E] = G;
                  z === L && (ee.removeEventListener(L, E), W.delete(G));
                });
              } else
                ee.removeAttribute(Z);
            });
          }(j, te(M.value, U));
        }
        function N() {
          const j = Ea(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $.activator, D);
          return T.value = (j == null ? void 0 : j.nodeType) === Node.ELEMENT_NODE ? j : void 0, T.value;
        }
        oe(() => $.activator, (j, U) => {
          if (U && j !== U) {
            const ee = N(U);
            ee && I(ee);
          }
          j && Fe(() => H());
        }, { immediate: !0 }), oe(() => $.activatorProps, () => {
          H();
        }), Le(() => {
          I();
        });
      })(e, a, { activatorEl: o, activatorEvents: F });
    })) : k && k.stop();
  }, { flush: "post", immediate: !0 }), Le(() => {
    k == null || k.stop();
  }), { activatorEl: o, activatorRef: _, target: g, targetEl: w, targetRef: V, activatorEvents: F, contentEvents: C, scrimEvents: B };
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
const Rl = ["sm", "md", "lg", "xl", "xxl"], Ii = Symbol.for("vuetify:display");
function En() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  const t = Se(Ii);
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
const Ei = R({ eager: Boolean }, "lazy");
function rr() {
  const e = Pe("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Da = Symbol.for("vuetify:stack"), Rt = Yt([]);
function Di() {
  return !0;
}
function Ta(e, n, t) {
  if (!e || sr(e, t) === !1)
    return !1;
  const l = uo(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((o) => o == null ? void 0 : o.contains(e.target));
}
function sr(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Di)(e);
}
function La(e, n) {
  const t = uo(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Ti = { mounted(e, n) {
  const t = (a) => function(o, s, r) {
    const i = typeof r.value == "function" ? r.value : r.value.handler;
    s._clickOutside.lastMousedownWasOutside && Ta(o, s, r) && setTimeout(() => {
      sr(o, r) && i && i(o);
    }, 0);
  }(a, e, n), l = (a) => {
    e._clickOutside.lastMousedownWasOutside = Ta(a, e, n);
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
function Li(e) {
  const { modelValue: n, color: t, ...l } = e;
  return d(mt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", te({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const ir = R({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...$i(), ...ve(), ...St(), ...Ei(), ...Ai(), ..._i(), ...Be(), ...Jt() }, "VOverlay"), Oa = le()({ name: "VOverlay", directives: { ClickOutside: Ti }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...ir() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
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
    return oe(W, () => G.value = !0), { isBooted: G, hasContent: z, onAfterLeave: function() {
      L.eager || (G.value = !1);
    } };
  }(e, s), c = ot(m(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: h, localTop: y, stackStyles: S } = function(L, W, G) {
    const z = Pe("useStack"), E = !G, K = Se(Da, void 0), se = Yt({ activeChildren: /* @__PURE__ */ new Set() });
    ke(Da, se);
    const Y = de(+W.value);
    gt(L, () => {
      var he;
      const ie = (he = Rt.at(-1)) == null ? void 0 : he[1];
      Y.value = ie ? ie + 10 : +W.value, E && Rt.push([z.uid, Y.value]), K == null || K.activeChildren.add(z.uid), Le(() => {
        if (E) {
          const je = nt(Rt).findIndex((kt) => kt[0] === z.uid);
          Rt.splice(je, 1);
        }
        K == null || K.activeChildren.delete(z.uid);
      });
    });
    const Q = de(!0);
    E && Ne(() => {
      var he;
      const ie = ((he = Rt.at(-1)) == null ? void 0 : he[0]) === z.uid;
      setTimeout(() => Q.value = ie);
    });
    const re = m(() => !se.activeChildren.size);
    return { globalTop: mn(Q), localTop: re, stackStyles: m(() => ({ zIndex: Y.value })) };
  }(s, q(e, "zIndex"), e._disableGlobalStack), { activatorEl: x, activatorRef: A, target: F, targetEl: C, targetRef: B, activatorEvents: _, contentEvents: V, scrimEvents: g } = Vi(e, { isActive: s, isTop: y }), { dimensionStyles: w } = xt(e), k = function() {
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
  }(), { scopeId: P } = rr();
  oe(() => e.disabled, (L) => {
    L && (s.value = !1);
  });
  const $ = J(), D = J(), { contentStyles: O, updateLocation: T } = function(L, W) {
    const G = J({}), z = J();
    function E(K) {
      var se;
      (se = z.value) == null || se.call(z, K);
    }
    return Ee && gt(() => !(!W.isActive.value || !L.locationStrategy), (K) => {
      var se, Y;
      oe(() => L.locationStrategy, K), Le(() => {
        window.removeEventListener("resize", E), z.value = void 0;
      }), window.addEventListener("resize", E, { passive: !0 }), typeof L.locationStrategy == "function" ? z.value = (se = L.locationStrategy(W, L, G)) == null ? void 0 : se.updateLocation : z.value = (Y = or[L.locationStrategy](W, L, G)) == null ? void 0 : Y.updateLocation;
    }), { contentStyles: G, updateLocation: z };
  }(e, { isRtl: v, contentEl: D, target: F, isActive: s });
  function M(L) {
    a("click:outside", L), e.persistent ? U() : s.value = !1;
  }
  function H() {
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
    Ne(async () => {
      G == null || G.stop(), W.isActive.value && L.scrollStrategy && (G = yn(), await Fe(), G.active && G.run(() => {
        var z;
        typeof L.scrollStrategy == "function" ? L.scrollStrategy(W, L, G) : (z = dl[L.scrollStrategy]) == null || z.call(dl, W, L, G);
      }));
    }), Le(() => {
      G == null || G.stop();
    });
  })(e, { root: $, contentEl: D, targetEl: C, isActive: s, updateLocation: T }), Ee && oe(s, (L) => {
    L ? window.addEventListener("keydown", I) : window.removeEventListener("keydown", I);
  }, { immediate: !0 }), Ze(() => {
    Ee && window.removeEventListener("keydown", I);
  });
  const N = (Z = (X = Pe("useRouter")) == null ? void 0 : X.proxy) == null ? void 0 : Z.$router;
  gt(() => e.closeOnBack, () => {
    (function(L, W) {
      let G, z, E = !1;
      function K(se) {
        var Y;
        (Y = se.state) != null && Y.replaced || (E = !0, setTimeout(() => E = !1));
      }
      Ee && (Fe(() => {
        window.addEventListener("popstate", K), G = L == null ? void 0 : L.beforeEach((se, Y, Q) => {
          ql ? E ? W(Q) : Q() : setTimeout(() => E ? W(Q) : Q()), ql = !0;
        }), z = L == null ? void 0 : L.afterEach(() => {
          ql = !1;
        });
      }), Le(() => {
        window.removeEventListener("popstate", K), G == null || G(), z == null || z();
      }));
    })(N, (L) => {
      h.value && s.value ? (L(!1), e.persistent ? U() : s.value = !1) : L();
    });
  });
  const j = J();
  function U() {
    e.noClickAnimation || D.value && Bt(D.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: bl });
  }
  function ee() {
    p(), a("afterLeave");
  }
  return oe(() => s.value && (e.absolute || e.contained) && r.value == null, (L) => {
    if (L) {
      const W = po($.value);
      W && W !== document.scrollingElement && (j.value = W.scrollTop);
    }
  }), ue(() => {
    var L;
    return d(pe, null, [(L = t.activator) == null ? void 0 : L.call(t, { isActive: s.value, props: te({ ref: A, targetRef: B }, _.value, e.activatorProps) }), k.value && f.value && d(fs, { disabled: !r.value, to: r.value }, { default: () => [d("div", te({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": s.value, "v-overlay--contained": e.contained }, i.value, u.value, e.class], style: [S.value, { top: ae(j.value) }, e.style], ref: $ }, P, l), [d(Li, te({ color: c, modelValue: s.value && !!e.scrim }, g.value), null), d(tt, { appear: !0, persisted: !0, transition: e.transition, target: F.value, onAfterLeave: ee }, { default: () => {
      var W;
      return [Ge(d("div", te({ ref: D, class: ["v-overlay__content", e.contentClass], style: [w.value, O.value] }, V.value, e.contentProps), [(W = t.default) == null ? void 0 : W.call(t, { isActive: s })]), [[Vt, s.value], [yt("click-outside"), { handler: M, closeConditional: H, include: () => [x.value] }]])];
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
function Dn(e) {
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
          const c = f.value && f.value[Xl];
          c && v.push(...c);
        }
      }
    }
  } });
}
const Oi = R({ id: String, ...bt(ir({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: mo } }), ["absolute"]) }, "VMenu"), Mi = le()({ name: "VMenu", props: Oi(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = xe(e, "modelValue"), { scopeId: a } = rr(), o = qe(), s = m(() => e.id || `v-menu-${o}`), r = J(), i = Se(pn, null), u = de(0);
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
    !e.disabled && y.key === "Tab" && (lo(ln((S = r.value) == null ? void 0 : S.contentEl, !1), y.shiftKey ? "prev" : "next", (F) => F.tabIndex >= 0) || (l.value = !1, (A = (x = r.value) == null ? void 0 : x.activatorEl) == null || A.focus()));
  }
  function c(y) {
    var x;
    if (e.disabled)
      return;
    const S = (x = r.value) == null ? void 0 : x.contentEl;
    S && l.value ? y.key === "ArrowDown" ? (y.preventDefault(), ml(S, "next")) : y.key === "ArrowUp" && (y.preventDefault(), ml(S, "prev")) : ["ArrowDown", "ArrowUp"].includes(y.key) && (l.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => c(y))));
  }
  ke(pn, { register() {
    ++u.value;
  }, unregister() {
    --u.value;
  }, closeParents() {
    setTimeout(() => {
      u.value || (l.value = !1, i == null || i.closeParents());
    }, 40);
  } }), oe(l, (y) => {
    y ? (i == null || i.register(), document.addEventListener("focusin", v, { once: !0 })) : (i == null || i.unregister(), document.removeEventListener("focusin", v));
  });
  const h = m(() => te({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": s.value, onKeydown: c }, e.activatorProps));
  return ue(() => {
    const y = Oa.filterProps(e);
    return d(Oa, te({ ref: r, class: ["v-menu", e.class], style: e.style }, y, { modelValue: l.value, "onUpdate:modelValue": (S) => l.value = S, absolute: !0, activatorProps: h.value, "onClick:outside": f, onKeydown: p }, a), { activator: t.activator, default: function() {
      for (var S = arguments.length, x = new Array(S), A = 0; A < S; A++)
        x[A] = arguments[A];
      return d(ze, { root: "VMenu" }, { default: () => {
        var F;
        return [(F = t.default) == null ? void 0 : F.call(t, ...x)];
      } });
    } });
  }), Dn({ id: s, ΨopenChildren: u }, r);
} }), Ri = R({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ve(), ...Jt({ transition: { component: yo } }) }, "VCounter"), Ni = le()({ name: "VCounter", functional: !0, props: Ri(), setup(e, n) {
  let { slots: t } = n;
  const l = m(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ue(() => d(tt, { transition: e.transition }, { default: () => [Ge(d("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Vt, e.active]])] })), {};
} }), ji = R({ floating: Boolean, ...ve() }, "VFieldLabel"), il = le()({ name: "VFieldLabel", props: ji(), setup(e, n) {
  let { slots: t } = n;
  return ue(() => d(No, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Wi = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ur = R({ appendInnerIcon: me, bgColor: String, clearable: Boolean, clearIcon: { type: me, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: me, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Wi.includes(e) }, "onClick:clear": Re(), "onClick:appendInner": Re(), "onClick:prependInner": Re(), ...ve(), ...Bn(), ...Qe(), ...Be() }, "VField"), Ma = le()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Ko(), ...ur() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { themeClasses: o } = $e(e), { loaderClasses: s } = An(e), { focusClasses: r, isFocused: i, focus: u, blur: v } = $n(e), { InputIcon: f } = Ho(e), { roundedClasses: p } = ut(e), { rtlClasses: c } = Et(), h = m(() => e.dirty || e.active), y = m(() => !(e.singleLine || !e.label && !a.label)), S = qe(), x = m(() => e.id || `input-${S}`), A = m(() => `${x.value}-messages`), F = J(), C = J(), B = J(), _ = m(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: V, backgroundColorStyles: g } = ot(q(e, "bgColor")), { textColorClasses: w, textColorStyles: k } = Je(m(() => e.error || e.disabled ? void 0 : h.value && i.value ? e.color : e.baseColor));
  oe(h, (D) => {
    if (y.value) {
      const O = F.value.$el, T = C.value.$el;
      requestAnimationFrame(() => {
        const M = wn(O), H = T.getBoundingClientRect(), I = H.x - M.x, N = H.y - M.y - (M.height / 2 - H.height / 2), j = H.width / 0.75, U = Math.abs(j - M.width) > 1 ? { maxWidth: ae(j) } : void 0, ee = getComputedStyle(O), X = getComputedStyle(T), Z = 1e3 * parseFloat(ee.transitionDuration) || 150, L = parseFloat(X.getPropertyValue("--v-field-label-scale")), W = X.getPropertyValue("color");
        O.style.visibility = "visible", T.style.visibility = "hidden", Bt(O, { transform: `translate(${I}px, ${N}px) scale(${L})`, color: W, ...U }, { duration: Z, easing: bl, direction: D ? "normal" : "reverse" }).finished.then(() => {
          O.style.removeProperty("visibility"), T.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const P = m(() => ({ isActive: h, isFocused: i, controlRef: B, blur: v, focus: u }));
  function $(D) {
    D.target !== document.activeElement && D.preventDefault();
  }
  return ue(() => {
    var I, N, j;
    const D = e.variant === "outlined", O = a["prepend-inner"] || e.prependInnerIcon, T = !(!e.clearable && !a.clear), M = !!(a["append-inner"] || e.appendInnerIcon || T), H = () => a.label ? a.label({ ...P.value, label: e.label, props: { for: x.value } }) : e.label;
    return d("div", te({ class: ["v-field", { "v-field--active": h.value, "v-field--appended": M, "v-field--center-affix": e.centerAffix ?? !_.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": O, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !H(), [`v-field--variant-${e.variant}`]: !0 }, o.value, V.value, r.value, s.value, p.value, c.value, e.class], style: [g.value, e.style], onClick: $ }, t), [d("div", { class: "v-field__overlay" }, null), d(Io, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), O && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(f, { key: "prepend-icon", name: "prependInner" }, null), (I = a["prepend-inner"]) == null ? void 0 : I.call(a, P.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && d(il, { key: "floating-label", ref: C, class: [w.value], floating: !0, for: x.value, style: k.value }, { default: () => [H()] }), d(il, { ref: F, for: x.value }, { default: () => [H()] }), (N = a.default) == null ? void 0 : N.call(a, { ...P.value, props: { id: x.value, class: "v-field__input", "aria-describedby": A.value }, focus: u, blur: v })]), T && d(ho, { key: "clear" }, { default: () => [Ge(d("div", { class: "v-field__clearable", onMousedown: (U) => {
      U.preventDefault(), U.stopPropagation();
    } }, [a.clear ? a.clear() : d(f, { name: "clear" }, null)]), [[Vt, e.dirty]])] }), M && d("div", { key: "append", class: "v-field__append-inner" }, [(j = a["append-inner"]) == null ? void 0 : j.call(a, P.value), e.appendInnerIcon && d(f, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", w.value], style: k.value }, [D && d(pe, null, [d("div", { class: "v-field__outline__start" }, null), y.value && d("div", { class: "v-field__outline__notch" }, [d(il, { ref: C, floating: !0, for: x.value }, { default: () => [H()] })]), d("div", { class: "v-field__outline__end" }, null)]), _.value && y.value && d(il, { ref: C, floating: !0, for: x.value }, { default: () => [H()] })])]);
  }), { controlRef: B };
} }), zi = ["color", "file", "time", "date", "datetime-local", "week", "month"], cr = R({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Vn(), ...ur() }, "VTextField"), vn = le()({ name: "VTextField", directives: { Intersect: So }, inheritAttrs: !1, props: cr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const o = xe(e, "modelValue"), { isFocused: s, focus: r, blur: i } = $n(e), u = m(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), v = m(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), f = m(() => ["plain", "underlined"].includes(e.variant));
  function p(_, V) {
    var g, w;
    e.autofocus && _ && ((w = (g = V[0].target) == null ? void 0 : g.focus) == null || w.call(g));
  }
  const c = J(), h = J(), y = J(), S = m(() => zi.includes(e.type) || e.persistentPlaceholder || s.value || e.active);
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
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), k = 1; k < g; k++)
          w[k - 1] = arguments[k];
        if (Array.isArray(V))
          for (const P of V)
            P(...w);
        else
          typeof V == "function" && V(...w);
      }(e["onClick:clear"], _);
    });
  }
  function B(_) {
    var g;
    const V = _.target;
    if (o.value = V.value, ((g = e.modelModifiers) == null ? void 0 : g.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const w = [V.selectionStart, V.selectionEnd];
      Fe(() => {
        V.selectionStart = w[0], V.selectionEnd = w[1];
      });
    }
  }
  return ue(() => {
    const _ = !!(a.counter || e.counter !== !1 && e.counter != null), V = !(!_ && !a.details), [g, w] = Sn(t), { modelValue: k, ...P } = kl.filterProps(e), $ = function(D) {
      return Qa(D, Object.keys(Ma.props).filter((O) => !fl(O) && O !== "class" && O !== "style"));
    }(e);
    return d(kl, te({ ref: c, modelValue: o.value, "onUpdate:modelValue": (D) => o.value = D, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, g, P, { centerAffix: !f.value, focused: s.value }), { ...a, default: (D) => {
      let { id: O, isDisabled: T, isDirty: M, isReadonly: H, isValid: I } = D;
      return d(Ma, te({ ref: h, onMousedown: A, onClick: F, "onClick:clear": C, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, $, { id: O.value, active: S.value || M.value, dirty: M.value || e.dirty, disabled: T.value, focused: s.value, error: I.value === !1 }), { ...a, default: (N) => {
        let { props: { class: j, ...U } } = N;
        const ee = Ge(d("input", te({ ref: y, value: o.value, onInput: B, autofocus: e.autofocus, readonly: H.value, disabled: T.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: x, onBlur: i }, U, w), null), [[yt("intersect"), { handler: p }, null, { once: !0 }]]);
        return d(pe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? d("div", { class: j, "data-no-activator": "" }, [a.default(), ee]) : gs(ee, { class: j }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: V ? (D) => {
      var O;
      return d(pe, null, [(O = a.details) == null ? void 0 : O.call(a, D), _ && d(pe, null, [d("span", null, null), d(Ni, { active: e.persistentCounter || s.value, value: u.value, max: v.value }, a.counter)])]);
    } : void 0 });
  }), Dn({}, c, h, y);
} }), Gi = R({ renderless: Boolean, ...ve() }, "VVirtualScrollItem"), Hi = le()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Gi(), emits: { "update:height": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { resizeRef: o, contentRect: s } = Tl(void 0, "border");
  oe(() => {
    var r;
    return (r = s.value) == null ? void 0 : r.height;
  }, (r) => {
    r != null && l("update:height", r);
  }), ue(() => {
    var r, i;
    return e.renderless ? d(pe, null, [(r = a.default) == null ? void 0 : r.call(a, { itemRef: o })]) : d("div", te({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(i = a.default) == null ? void 0 : i.call(a)]);
  });
} }), Ki = R({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function qi(e, n) {
  const t = En(), l = de(0);
  Ne(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = de(0), o = de(Math.ceil((parseInt(e.height) || t.height.value) / (l.value || 16)) || 1), s = de(0), r = de(0), i = J(), u = J();
  let v = 0;
  const { resizeRef: f, contentRect: p } = Tl();
  Ne(() => {
    f.value = i.value;
  });
  const c = m(() => {
    var T;
    return i.value === document.documentElement ? t.height.value : ((T = p.value) == null ? void 0 : T.height) || parseInt(e.height) || 0;
  }), h = m(() => !!(i.value && u.value && c.value && l.value));
  let y = Array.from({ length: n.value.length }), S = Array.from({ length: n.value.length });
  const x = de(0);
  let A = -1;
  const F = function(T, M) {
    let H = 0;
    const I = function() {
      for (var N = arguments.length, j = new Array(N), U = 0; U < N; U++)
        j[U] = arguments[U];
      clearTimeout(H), H = setTimeout(() => T(...j), b(M));
    };
    return I.clear = () => {
      clearTimeout(H);
    }, I.immediate = T, I;
  }(() => {
    const T = performance.now();
    S[0] = 0;
    const M = n.value.length;
    for (let H = 1; H <= M - 1; H++)
      S[H] = (S[H - 1] || 0) + (y[H - 1] || l.value);
    x.value = Math.max(x.value, performance.now() - T);
  }, x), C = oe(h, (T) => {
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
    return function(M, H) {
      let I = M.length - 1, N = 0, j = 0, U = null, ee = -1;
      if (M[I] < H)
        return I;
      for (; N <= I; )
        if (j = N + I >> 1, U = M[j], U > H)
          I = j - 1;
        else {
          if (!(U < H))
            return U === H ? j : N;
          ee = j, N = j + 1;
        }
      return ee;
    }(S, T);
  }
  oe(c, (T, M) => {
    M && P();
  }), Le(() => {
    F.clear();
  });
  let V = 0, g = 0, w = 0, k = -1;
  function P() {
    cancelAnimationFrame(k), k = requestAnimationFrame($);
  }
  function $() {
    if (!i.value || !c.value)
      return;
    const T = V - v, M = Math.sign(g), H = at(_(Math.max(0, T - 100)), 0, n.value.length), I = at(_(T + c.value + 100) + 1, H + 1, n.value.length);
    if ((M !== -1 || H < a.value) && (M !== 1 || I > o.value)) {
      const N = B(a.value) - B(H), j = B(I) - B(o.value);
      Math.max(N, j) > 100 ? (a.value = H, o.value = I) : (H <= 0 && (a.value = H), I >= n.value.length && (o.value = I));
    }
    s.value = B(a.value), r.value = B(n.value.length) - B(o.value);
  }
  function D(T) {
    const M = B(T);
    !i.value || T && !M ? A = T : i.value.scrollTop = M;
  }
  const O = m(() => n.value.slice(a.value, o.value).map((T, M) => ({ raw: T, index: M + a.value })));
  return oe(n, () => {
    y = Array.from({ length: n.value.length }), S = Array.from({ length: n.value.length }), F.immediate(), P();
  }, { deep: !0 }), { containerRef: i, markerRef: u, computedItems: O, paddingTop: s, paddingBottom: r, scrollToIndex: D, handleScroll: function() {
    if (!i.value || !u.value)
      return;
    const T = i.value.scrollTop, M = performance.now();
    M - w > 500 ? (g = Math.sign(T - V), v = u.value.offsetTop) : g = T - V, V = T, w = M, P();
  }, handleScrollend: function() {
    i.value && u.value && (g = 0, w = 0, P());
  }, handleItemResize: function(T, M) {
    const H = y[T], I = l.value;
    l.value = I ? Math.min(l.value, M) : M, H === M && I === l.value || (y[T] = M, F());
  } };
}
const Ui = R({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Ki(), ...ve(), ...St() }, "VVirtualScroll"), Yi = le()({ name: "VVirtualScroll", props: Ui(), setup(e, n) {
  let { slots: t } = n;
  const l = Pe("VVirtualScroll"), { dimensionStyles: a } = xt(e), { containerRef: o, markerRef: s, handleScroll: r, handleScrollend: i, handleItemResize: u, scrollToIndex: v, paddingTop: f, paddingBottom: p, computedItems: c } = qi(e, q(e, "items"));
  return gt(() => e.renderless, () => {
    function h() {
      var S, x;
      const y = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      o.value === document.documentElement ? (document[y]("scroll", r, { passive: !0 }), document[y]("scrollend", i)) : ((S = o.value) == null || S[y]("scroll", r, { passive: !0 }), (x = o.value) == null || x[y]("scrollend", i));
    }
    ht(() => {
      o.value = po(l.vnode.el, !0), h(!0);
    }), Le(h);
  }), ue(() => {
    const h = c.value.map((y) => d(Hi, { key: y.index, renderless: e.renderless, "onUpdate:height": (S) => u(y.index, S) }, { default: (S) => {
      var x;
      return (x = t.default) == null ? void 0 : x.call(t, { item: y.raw, index: y.index, ...S });
    } }));
    return e.renderless ? d(pe, null, [d("div", { ref: s, class: "v-virtual-scroll__spacer", style: { paddingTop: ae(f.value) } }, null), h, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ae(p.value) } }, null)]) : d("div", { ref: o, class: ["v-virtual-scroll", e.class], onScrollPassive: r, onScrollend: i, style: [a.value, e.style] }, [d("div", { ref: s, class: "v-virtual-scroll__container", style: { paddingTop: ae(f.value), paddingBottom: ae(p.value) } }, [h])]);
  }), { scrollToIndex: v };
} });
function Xi(e, n) {
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
          const v = oe(t, () => {
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
const Ji = R({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: me, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...lr({ itemChildren: !1 }) }, "Select"), Zi = R({ ...Ji(), ...bt(cr({ modelValue: null, role: "combobox" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Jt({ transition: { component: mo } }) }, "VSelect"), Qi = le()({ name: "VSelect", props: Zi(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = it(), a = J(), o = J(), s = J(), r = xe(e, "menu"), i = m({ get: () => r.value, set: (I) => {
    var N;
    r.value && !I && ((N = o.value) != null && N.ΨopenChildren) || (r.value = I);
  } }), { items: u, transformIn: v, transformOut: f } = function(I) {
    const N = m(() => nr(I, I.items)), j = m(() => N.value.some((U) => U.value === null));
    return { items: N, transformIn: function(U) {
      return j.value || (U = U.filter((ee) => ee !== null)), U.map((ee) => I.returnObject && typeof ee == "string" ? un(I, ee) : N.value.find((X) => I.valueComparator(ee, X.value)) || un(I, ee));
    }, transformOut: function(U) {
      return I.returnObject ? U.map((ee) => {
        let { raw: X } = ee;
        return X;
      }) : U.map((ee) => {
        let { value: X } = ee;
        return X;
      });
    } };
  }(e), p = xe(e, "modelValue", [], (I) => v(I === null ? [null] : Ie(I)), (I) => {
    const N = f(I);
    return e.multiple ? N : N[0] ?? null;
  }), c = m(() => typeof e.counterValue == "function" ? e.counterValue(p.value) : typeof e.counterValue == "number" ? e.counterValue : p.value.length), h = qo(), y = m(() => p.value.map((I) => I.value)), S = de(!1), x = m(() => i.value ? e.closeText : e.openText);
  let A, F = "";
  const C = m(() => e.hideSelected ? u.value.filter((I) => !p.value.some((N) => N === I)) : u.value), B = m(() => e.hideNoData && !u.value.length || e.readonly || (h == null ? void 0 : h.isReadonly.value)), _ = m(() => {
    var I;
    return { ...e.menuProps, activatorProps: { ...((I = e.menuProps) == null ? void 0 : I.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), V = J(), { onListScroll: g, onListKeydown: w } = Xi(V, a);
  function k(I) {
    e.openOnClear && (i.value = !0);
  }
  function P() {
    B.value || (i.value = !i.value);
  }
  function $(I) {
    var U, ee;
    if (!I.key || e.readonly || h != null && h.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(I.key) && I.preventDefault(), ["Enter", "ArrowDown", " "].includes(I.key) && (i.value = !0), ["Escape", "Tab"].includes(I.key) && (i.value = !1), I.key === "Home" ? (U = V.value) == null || U.focus("first") : I.key === "End" && ((ee = V.value) == null || ee.focus("last")), e.multiple || !function(X) {
      const Z = X.key.length === 1, L = !X.ctrlKey && !X.metaKey && !X.altKey;
      return Z && L;
    }(I)))
      return;
    const N = performance.now();
    N - A > 1e3 && (F = ""), F += I.key.toLowerCase(), A = N;
    const j = u.value.find((X) => X.title.toLowerCase().startsWith(F));
    j !== void 0 && (p.value = [j]);
  }
  function D(I) {
    if (e.multiple) {
      const N = p.value.findIndex((j) => e.valueComparator(j.value, I.value));
      if (N === -1)
        p.value = [...p.value, I];
      else {
        const j = [...p.value];
        j.splice(N, 1), p.value = j;
      }
    } else
      p.value = [I], i.value = !1;
  }
  function O(I) {
    var N;
    (N = V.value) != null && N.$el.contains(I.relatedTarget) || (i.value = !1);
  }
  function T() {
    var I;
    S.value && ((I = a.value) == null || I.focus());
  }
  function M(I) {
    S.value = !0;
  }
  function H(I) {
    if (I == null)
      p.value = [];
    else if (yl(a.value, ":autofill") || yl(a.value, ":-webkit-autofill")) {
      const N = u.value.find((j) => j.title === I);
      N && D(N);
    } else
      a.value && (a.value.value = "");
  }
  return oe(i, () => {
    if (!e.hideSelected && i.value && p.value.length) {
      const I = C.value.findIndex((N) => p.value.some((j) => e.valueComparator(j.value, N.value)));
      Ee && window.requestAnimationFrame(() => {
        var N;
        I >= 0 && ((N = s.value) == null || N.scrollToIndex(I));
      });
    }
  }), ue(() => {
    const I = !(!e.chips && !t.chip), N = !!(!e.hideNoData || C.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), j = p.value.length > 0, U = vn.filterProps(e), ee = j || !S.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(vn, te({ ref: a }, U, { modelValue: p.value.map((X) => X.props.value).join(", "), "onUpdate:modelValue": H, focused: S.value, "onUpdate:focused": (X) => S.value = X, validationValue: p.externalValue, counterValue: c.value, dirty: j, class: ["v-select", { "v-select--active-menu": i.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": p.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, inputmode: "none", placeholder: ee, "onClick:clear": k, "onMousedown:control": P, onBlur: O, onKeydown: $, "aria-label": l(x.value), title: l(x.value) }), { ...t, default: () => d(pe, null, [d(Mi, te({ ref: o, modelValue: i.value, "onUpdate:modelValue": (X) => i.value = X, activator: "parent", contentClass: "v-select__content", disabled: B.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: T }, _.value), { default: () => [N && d(Bi, { ref: V, selected: y.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (X) => X.preventDefault(), onKeydown: w, onFocusin: M, onScrollPassive: g, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var X, Z, L;
      return [(X = t["prepend-item"]) == null ? void 0 : X.call(t), !C.value.length && !e.hideNoData && (((Z = t["no-data"]) == null ? void 0 : Z.call(t)) ?? d(Pl, { title: l(e.noDataText) }, null)), d(Yi, { ref: s, renderless: !0, items: C.value }, { default: (W) => {
        var se;
        let { item: G, index: z, itemRef: E } = W;
        const K = te(G.props, { ref: E, key: z, onClick: () => D(G) });
        return ((se = t.item) == null ? void 0 : se.call(t, { item: G, index: z, props: K })) ?? d(Pl, te(K, { role: "option" }), { prepend: (Y) => {
          let { isSelected: Q } = Y;
          return d(pe, null, [e.multiple && !e.hideSelected ? d(_t, { key: G.value, modelValue: Q, ripple: !1, tabindex: "-1" }, null) : void 0, G.props.prependIcon && d(Ae, { icon: G.props.prependIcon }, null)]);
        } });
      } }), (L = t["append-item"]) == null ? void 0 : L.call(t)];
    } })] }), p.value.map((X, Z) => {
      const L = { "onClick:close": function(z) {
        z.stopPropagation(), z.preventDefault(), D(X);
      }, onMousedown(z) {
        z.preventDefault(), z.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, W = I ? !!t.chip : !!t.selection, G = W ? no(I ? t.chip({ item: X, index: Z, props: L }) : t.selection({ item: X, index: Z })) : void 0;
      if (!W || G)
        return d("div", { key: X.value, class: "v-select__selection" }, [I ? t.chip ? d(ze, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: X.title } } }, { default: () => [G] }) : d(ci, te({ key: "chip", closable: e.closableChips, size: "small", text: X.title, disabled: X.props.disabled }, L), null) : G ?? d("span", { class: "v-select__selection-text" }, [X.title, e.multiple && Z < p.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [pl(",")])])]);
    })]), "append-inner": function() {
      var W;
      for (var X = arguments.length, Z = new Array(X), L = 0; L < X; L++)
        Z[L] = arguments[L];
      return d(pe, null, [(W = t["append-inner"]) == null ? void 0 : W.call(t, ...Z), e.menuIcon ? d(Ae, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Dn({ isFocused: S, menu: i, select: D }, a);
} }), eu = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), tu = R({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function lu(e, n, t, l) {
  const a = J([]), o = J(/* @__PURE__ */ new Map()), s = m(() => l != null && l.transform ? b(n).map((r) => [r, l.transform(r)]) : b(n));
  return Ne(() => {
    const r = typeof t == "function" ? t() : b(t), i = typeof r != "string" && typeof r != "number" ? "" : String(r), u = function(c, h, y) {
      var C;
      const S = [], x = (y == null ? void 0 : y.default) ?? eu, A = !!(y != null && y.filterKeys) && Ie(y.filterKeys), F = Object.keys((y == null ? void 0 : y.customKeyFilter) ?? {}).length;
      if (!(c != null && c.length))
        return S;
      e:
        for (let B = 0; B < c.length; B++) {
          const [_, V = _] = Ie(c[B]), g = {}, w = {};
          let k = -1;
          if (h && !(y != null && y.noFilter)) {
            if (typeof _ == "object") {
              const D = A || Object.keys(V);
              for (const O of D) {
                const T = Te(V, O, V), M = (C = y == null ? void 0 : y.customKeyFilter) == null ? void 0 : C[O];
                if (k = M ? M(T, h, _) : x(T, h, _), k !== -1 && k !== !1)
                  M ? g[O] = k : w[O] = k;
                else if ((y == null ? void 0 : y.filterMode) === "every")
                  continue e;
              }
            } else
              k = x(_, h, _), k !== -1 && k !== !1 && (w.title = k);
            const P = Object.keys(w).length, $ = Object.keys(g).length;
            if (!P && !$ || (y == null ? void 0 : y.filterMode) === "union" && $ !== F && !P || (y == null ? void 0 : y.filterMode) === "intersection" && ($ !== F || !P))
              continue;
          }
          S.push({ index: B, matches: { ...w, ...g } });
        }
      return S;
    }(s.value, i, { customKeyFilter: { ...e.customKeyFilter, ...b(l == null ? void 0 : l.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), v = b(n), f = [], p = /* @__PURE__ */ new Map();
    u.forEach((c) => {
      let { index: h, matches: y } = c;
      const S = v[h];
      f.push(S), p.set(S.value, y);
    }), a.value = f, o.value = p;
  }), { filteredItems: a, filteredMatches: o, getMatches: function(r) {
    return o.value.get(r.value);
  } };
}
const nu = R({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), dr = Symbol.for("vuetify:datatable:expanded");
function pr(e) {
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
  return ke(dr, o), o;
}
function vr() {
  const e = Se(dr);
  if (!e)
    throw new Error("foo");
  return e;
}
const au = R({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), fr = Symbol.for("vuetify:data-table-group");
function gr(e) {
  return { groupBy: xe(e, "groupBy") };
}
function mr(e) {
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
  return ke(fr, o), o;
}
function yr() {
  const e = Se(fr);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function hr(e, n) {
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
    o.push({ depth: t, id: v, key: u, value: i, items: s.length ? hr(r, s, t + 1, v) : r, type: "group" });
  }), o;
}
function br(e, n) {
  const t = [];
  for (const l of e)
    "type" in l && l.type === "group" ? (l.value != null && t.push(l), (n.has(l.id) || l.value == null) && t.push(...br(l.items, n))) : t.push(l);
  return t;
}
function Sr(e, n, t) {
  return { flatItems: m(() => n.value.length ? br(hr(e.value, n.value.map((l) => l.key)), t.value) : e.value) };
}
function xr(e) {
  let { page: n, itemsPerPage: t, sortBy: l, groupBy: a, search: o } = e;
  const s = Pe("VDataTable"), r = m(() => ({ page: n.value, itemsPerPage: t.value, sortBy: l.value, groupBy: a.value, search: o.value }));
  let i = null;
  oe(r, () => {
    st(i, r.value) || ((i == null ? void 0 : i.search) !== r.value.search && (n.value = 1), s.emit("update:options", r.value), i = r.value);
  }, { deep: !0, immediate: !0 });
}
const wr = R({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), kr = Symbol.for("vuetify:data-table-pagination");
function Cr(e) {
  return { page: xe(e, "page", void 0, (n) => +(n ?? 1)), itemsPerPage: xe(e, "itemsPerPage", void 0, (n) => +(n ?? 10)) };
}
function Pr(e) {
  const { page: n, itemsPerPage: t, itemsLength: l } = e, a = m(() => t.value === -1 ? 0 : t.value * (n.value - 1)), o = m(() => t.value === -1 ? l.value : Math.min(l.value, a.value + t.value)), s = m(() => t.value === -1 || l.value === 0 ? 1 : Math.ceil(l.value / t.value));
  Ne(() => {
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
  return ke(kr, r), r;
}
const ou = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var l;
  let { items: n, value: t } = e;
  return new Set(t ? [(l = n[0]) == null ? void 0 : l.value] : []);
}, selectAll: (e) => {
  let { selected: n } = e;
  return n;
} }, Br = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: n } = e;
  return n;
}, select: (e) => {
  let { items: n, value: t, selected: l } = e;
  for (const a of n)
    t ? l.add(a.value) : l.delete(a.value);
  return l;
}, selectAll: (e) => {
  let { value: n, currentPage: t, selected: l } = e;
  return Br.select({ items: t, value: n, selected: l });
} }, Ar = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: n } = e;
  return n;
}, select: (e) => {
  let { items: n, value: t, selected: l } = e;
  for (const a of n)
    t ? l.add(a.value) : l.delete(a.value);
  return l;
}, selectAll: (e) => {
  let { value: n, allItems: t, selected: l } = e;
  return Ar.select({ items: t, value: n, selected: l });
} }, ru = R({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: { type: Function, default: st } }, "DataTable-select"), _r = Symbol.for("vuetify:data-table-selection");
function Fr(e, n) {
  let { allItems: t, currentPage: l } = n;
  const a = xe(e, "modelValue", e.modelValue, (c) => new Set(Ie(c).map((h) => {
    var y;
    return ((y = t.value.find((S) => e.valueComparator(h, S.value))) == null ? void 0 : y.value) ?? h;
  })), (c) => [...c.values()]), o = m(() => t.value.filter((c) => c.selectable)), s = m(() => l.value.filter((c) => c.selectable)), r = m(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return ou;
      case "all":
        return Ar;
      default:
        return Br;
    }
  });
  function i(c) {
    return Ie(c).every((h) => a.value.has(h.value));
  }
  function u(c, h) {
    const y = r.value.select({ items: c, value: h, selected: new Set(a.value) });
    a.value = y;
  }
  const v = m(() => a.value.size > 0), f = m(() => {
    const c = r.value.allSelected({ allItems: o.value, currentPage: s.value });
    return !!c.length && i(c);
  }), p = { toggleSelect: function(c) {
    u([c], !i([c]));
  }, select: u, selectAll: function(c) {
    const h = r.value.selectAll({ value: c, allItems: o.value, currentPage: s.value, selected: new Set(a.value) });
    a.value = h;
  }, isSelected: i, isSomeSelected: function(c) {
    return Ie(c).some((h) => a.value.has(h.value));
  }, someSelected: v, allSelected: f, showSelectAll: r.value.showSelectAll };
  return ke(_r, p), p;
}
function Nl() {
  const e = Se(_r);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const su = R({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), $r = Symbol.for("vuetify:data-table-sort");
function Vr(e) {
  return { sortBy: xe(e, "sortBy"), mustSort: q(e, "mustSort"), multiSort: q(e, "multiSort") };
}
function Ir(e) {
  const { sortBy: n, mustSort: t, multiSort: l, page: a } = e, o = { sortBy: n, toggleSort: (s) => {
    if (s.key == null)
      return;
    let r = n.value.map((u) => ({ ...u })) ?? [];
    const i = r.find((u) => u.key === s.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : r = r.filter((u) => u.key !== s.key) : i.order = "desc" : r = l.value ? [...r, { key: s.key, order: "asc" }] : [{ key: s.key, order: "asc" }], n.value = r, a && (a.value = 1);
  }, isSorted: function(s) {
    return !!n.value.find((r) => r.key === s.key);
  } };
  return ke($r, o), o;
}
function iu(e, n, t, l) {
  const a = it();
  return { sortedItems: m(() => t.value.length ? function(s, r, i, u) {
    const v = new Intl.Collator(i, { sensitivity: "accent", usage: "sort" });
    return [...s].sort((f, p) => {
      for (let c = 0; c < r.length; c++) {
        const h = r[c].key, y = r[c].order ?? "asc";
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
          return al(S) && al(x) ? 0 : al(S) ? -1 : al(x) ? 1 : isNaN(S) || isNaN(x) ? v.compare(S, x) : Number(S) - Number(x);
      }
      return 0;
    });
  }(n.value, t.value, a.current.value, { ...e.customKeySort, ...l == null ? void 0 : l.value }) : n.value) };
}
const uu = R({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 == 0 }, totalVisible: [Number, String], firstIcon: { type: me, default: "$first" }, prevIcon: { type: me, default: "$prev" }, nextIcon: { type: me, default: "$next" }, lastIcon: { type: me, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Dt(), ...ve(), ...Ye(), ...wt(), ...Qe(), ...Lt(), ...Ve({ tag: "nav" }), ...Be(), ...ct({ variant: "text" }) }, "VPagination"), cu = le()({ name: "VPagination", props: uu(), emits: { "update:modelValue": (e) => !0, first: (e) => !0, prev: (e) => !0, next: (e) => !0, last: (e) => !0 }, setup(e, n) {
  let { slots: t, emit: l } = n;
  const a = xe(e, "modelValue"), { t: o, n: s } = it(), { isRtl: r } = Et(), { themeClasses: i } = $e(e), { width: u } = En(), v = de(-1);
  Xe(void 0, { scoped: !0 });
  const { resizeRef: f } = Tl((g) => {
    if (!g.length)
      return;
    const { target: w, contentRect: k } = g[0], P = w.querySelector(".v-pagination__list > *");
    if (!P)
      return;
    const $ = k.width, D = P.offsetWidth + 2 * parseFloat(getComputedStyle(P).marginRight);
    v.value = y($, D);
  }), p = m(() => parseInt(e.length, 10)), c = m(() => parseInt(e.start, 10)), h = m(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : v.value >= 0 ? v.value : y(u.value, 58));
  function y(g, w) {
    const k = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(+((g - w * k) / w).toFixed(2)));
  }
  const S = m(() => {
    if (p.value <= 0 || isNaN(p.value) || p.value > Number.MAX_SAFE_INTEGER)
      return [];
    if (h.value <= 0)
      return [];
    if (h.value === 1)
      return [a.value];
    if (p.value <= h.value)
      return nl(p.value, c.value);
    const g = h.value % 2 == 0, w = g ? h.value / 2 : Math.floor(h.value / 2), k = g ? w : w + 1, P = p.value - w;
    if (k - a.value >= 0)
      return [...nl(Math.max(1, h.value - 1), c.value), e.ellipsis, p.value];
    if (a.value - P >= (g ? 1 : 0)) {
      const $ = h.value - 1, D = p.value - $ + c.value;
      return [c.value, e.ellipsis, ...nl($, D)];
    }
    {
      const $ = Math.max(1, h.value - 3), D = $ === 1 ? a.value : a.value - Math.ceil($ / 2) + c.value;
      return [c.value, e.ellipsis, ...nl($, D), e.ellipsis, p.value];
    }
  });
  function x(g, w, k) {
    g.preventDefault(), a.value = w, k && l(k, w);
  }
  const { refs: A, updateRef: F } = function() {
    const g = J([]);
    return ms(() => g.value = []), { refs: g, updateRef: function(w, k) {
      g.value[k] = w;
    } };
  }();
  Xe({ VPaginationBtn: { color: q(e, "color"), border: q(e, "border"), density: q(e, "density"), size: q(e, "size"), variant: q(e, "variant"), rounded: q(e, "rounded"), elevation: q(e, "elevation") } });
  const C = m(() => S.value.map((g, w) => {
    const k = (P) => F(P, w);
    if (typeof g == "string")
      return { isActive: !1, key: `ellipsis-${w}`, page: g, props: { ref: k, ellipsis: !0, icon: !0, disabled: !0 } };
    {
      const P = g === a.value;
      return { isActive: P, key: g, page: s(g), props: { ref: k, ellipsis: !1, icon: !0, disabled: !!e.disabled || +e.length < 2, color: P ? e.activeColor : e.color, ariaCurrent: P, ariaLabel: o(P ? e.currentPageAriaLabel : e.pageAriaLabel, g), onClick: ($) => x($, g) } };
    }
  })), B = m(() => {
    const g = !!e.disabled || a.value <= c.value, w = !!e.disabled || a.value >= c.value + p.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (k) => x(k, c.value, "first"), disabled: g, ariaLabel: o(e.firstAriaLabel), ariaDisabled: g } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (k) => x(k, a.value - 1, "prev"), disabled: g, ariaLabel: o(e.previousAriaLabel), ariaDisabled: g }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (k) => x(k, a.value + 1, "next"), disabled: w, ariaLabel: o(e.nextAriaLabel), ariaDisabled: w }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (k) => x(k, c.value + p.value - 1, "last"), disabled: w, ariaLabel: o(e.lastAriaLabel), ariaDisabled: w } : void 0 };
  });
  function _() {
    var w;
    const g = a.value - c.value;
    (w = A.value[g]) == null || w.$el.focus();
  }
  function V(g) {
    g.key === Un.left && !e.disabled && a.value > +e.start ? (a.value = a.value - 1, Fe(_)) : g.key === Un.right && !e.disabled && a.value < c.value + p.value - 1 && (a.value = a.value + 1, Fe(_));
  }
  return ue(() => d(e.tag, { ref: f, class: ["v-pagination", i.value, e.class], style: e.style, role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: V, "data-test": "v-pagination-root" }, { default: () => [d("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && d("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [t.first ? t.first(B.value.first) : d(pt, te({ _as: "VPaginationBtn" }, B.value.first), null)]), d("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [t.prev ? t.prev(B.value.prev) : d(pt, te({ _as: "VPaginationBtn" }, B.value.prev), null)]), C.value.map((g, w) => d("li", { key: g.key, class: ["v-pagination__item", { "v-pagination__item--is-active": g.isActive }], "data-test": "v-pagination-item" }, [t.item ? t.item(g) : d(pt, te({ _as: "VPaginationBtn" }, g.props), { default: () => [g.page] })])), d("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [t.next ? t.next(B.value.next) : d(pt, te({ _as: "VPaginationBtn" }, B.value.next), null)]), e.showFirstLastPage && d("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [t.last ? t.last(B.value.last) : d(pt, te({ _as: "VPaginationBtn" }, B.value.last), null)])])] })), {};
} }), Tn = R({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Al = le()({ name: "VDataTableFooter", props: Tn(), setup(e, n) {
  let { slots: t } = n;
  const { t: l } = it(), { page: a, pageCount: o, startIndex: s, stopIndex: r, itemsLength: i, itemsPerPage: u, setItemsPerPage: v } = function() {
    const p = Se(kr);
    if (!p)
      throw new Error("Missing pagination!");
    return p;
  }(), f = m(() => e.itemsPerPageOptions.map((p) => typeof p == "number" ? { value: p, title: p === -1 ? l("$vuetify.dataFooter.itemsPerPageAll") : String(p) } : { ...p, title: l(p.title) }));
  return ue(() => {
    var p;
    return d("div", { class: "v-data-table-footer" }, [(p = t.prepend) == null ? void 0 : p.call(t), d("div", { class: "v-data-table-footer__items-per-page" }, [d("span", null, [l(e.itemsPerPageText)]), d(Qi, { items: f.value, modelValue: u.value, "onUpdate:modelValue": (c) => v(Number(c)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), d("div", { class: "v-data-table-footer__info" }, [d("div", null, [l(e.pageText, i.value ? s.value + 1 : 0, r.value, i.value)])]), d("div", { class: "v-data-table-footer__pagination" }, [d(cu, { modelValue: a.value, "onUpdate:modelValue": (c) => a.value = c, density: "comfortable", "first-aria-label": e.firstPageLabel, "last-aria-label": e.lastPageLabel, length: o.value, "next-aria-label": e.nextPageLabel, "previous-aria-label": e.prevPageLabel, rounded: !0, "show-first-last-page": !0, "total-visible": e.showCurrentPage ? 1 : 0, variant: "plain" }, null)])]);
  }), {};
} }), Ln = (Ra = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Zl = (e, n) => {
  let { slots: t } = n;
  const l = e.tag ?? "td";
  return d(l, { class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: ae(e.height), width: ae(e.width), left: ae(e.fixedOffset || null) } }, { default: () => {
    var a;
    return [(a = t.default) == null ? void 0 : a.call(t)];
  } });
}, Zl.props = Ra, Zl);
var Ra, Zl;
const du = R({ headers: Array }, "DataTable-header"), Er = Symbol.for("vuetify:data-table-headers"), Dr = { title: "", sortable: !1 }, pu = { ...Dr, width: 48 };
function fn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (e.children)
    for (const t of e.children)
      fn(t, n);
  else
    n.push(e);
  return n;
}
function Tr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && Tr(t.children, n);
  return n;
}
function vu(e) {
  if (e.key)
    return e.key === "data-table-group" ? Dr : ["data-table-expand", "data-table-select"].includes(e.key) ? pu : void 0;
}
function On(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => On(t, n + 1))) : n;
}
function fu(e, n) {
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
function Lr(e) {
  const n = [];
  for (const t of e) {
    const l = { ...vu(t), ...t }, a = l.key ?? (typeof l.value == "string" ? l.value : null), o = l.value ?? a ?? null, s = { ...l, key: a, value: o, sortable: l.sortable ?? (l.key != null || !!l.sort), children: l.children ? Lr(l.children) : void 0 };
    n.push(s);
  }
  return n;
}
function Or(e, n) {
  const t = J([]), l = J([]), a = J(), o = J();
  Ne(() => {
    var c, h, y;
    const r = (e.headers || Object.keys(e.items[0] ?? {}).map((S) => ({ key: S, title: Ft(S) }))).slice(), i = Tr(r);
    (c = n == null ? void 0 : n.groupBy) != null && c.value.length && !i.has("data-table-group") && r.unshift({ key: "data-table-group", title: "Group" }), (h = n == null ? void 0 : n.showSelect) != null && h.value && !i.has("data-table-select") && r.unshift({ key: "data-table-select" }), (y = n == null ? void 0 : n.showExpand) != null && y.value && !i.has("data-table-expand") && r.push({ key: "data-table-expand" });
    const u = Lr(r);
    (function(S) {
      let x = !1;
      function A(B) {
        if (B)
          if (arguments.length > 1 && arguments[1] !== void 0 && arguments[1] && (B.fixed = !0), B.fixed)
            if (B.children)
              for (let _ = B.children.length - 1; _ >= 0; _--)
                A(B.children[_], !0);
            else
              x ? isNaN(+B.width) && ro(`Multiple fixed columns should have a static width (key: ${B.key})`) : B.lastFixed = !0, x = !0;
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
    const v = Math.max(...u.map((S) => On(S))) + 1, f = fu(u, v);
    t.value = f.headers, l.value = f.columns;
    const p = f.headers.flat(1);
    a.value = p.reduce((S, x) => (x.sortable && x.key && x.sort && (S[x.key] = x.sort), S), {}), o.value = p.reduce((S, x) => (x.key && x.filter && (S[x.key] = x.filter), S), {});
  });
  const s = { headers: t, columns: l, sortFunctions: a, filterFunctions: o };
  return ke(Er, s), s;
}
function jl() {
  const e = Se(Er);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Mr = R({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: me, default: "$sortAsc" }, sortDescIcon: { type: me, default: "$sortDesc" }, ...Bn() }, "VDataTableHeaders"), _l = le()({ name: "VDataTableHeaders", props: Mr(), setup(e, n) {
  let { slots: t } = n;
  const { toggleSort: l, sortBy: a, isSorted: o } = function() {
    const F = Se($r);
    if (!F)
      throw new Error("Missing sort!");
    return F;
  }(), { someSelected: s, allSelected: r, selectAll: i, showSelectAll: u } = Nl(), { columns: v, headers: f } = jl(), { loaderClasses: p } = An(e);
  function c(F, C) {
    if (e.sticky || F.fixed)
      return { position: "sticky", left: F.fixed ? ae(F.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${C})` : void 0 };
  }
  function h(F) {
    const C = a.value.find((B) => B.key === F.key);
    return C ? C.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: y, backgroundColorStyles: S } = ot(e, "color"), x = m(() => ({ headers: f.value, columns: v.value, toggleSort: l, isSorted: o, sortBy: a.value, someSelected: s.value, allSelected: r.value, selectAll: i, getSortIcon: h })), A = (F) => {
    let { column: C, x: B, y: _ } = F;
    const V = C.key === "data-table-select" || C.key === "data-table-expand";
    return d(Ln, te({ tag: "th", align: C.align, class: ["v-data-table__th", { "v-data-table__th--sortable": C.sortable, "v-data-table__th--sorted": o(C), "v-data-table__th--fixed": C.fixed }, p.value], style: { width: ae(C.width), minWidth: ae(C.minWidth), ...c(C, _) }, colspan: C.colspan, rowspan: C.rowspan, onClick: C.sortable ? () => l(C) : void 0, fixed: C.fixed, lastFixed: C.lastFixed, noPadding: V }, C.headerProps), { default: () => {
      var k;
      const g = `header.${C.key}`, w = { column: C, selectAll: i, isSorted: o, toggleSort: l, sortBy: a.value, someSelected: s.value, allSelected: r.value, getSortIcon: h };
      return t[g] ? t[g](w) : C.key === "data-table-select" ? ((k = t["header.data-table-select"]) == null ? void 0 : k.call(t, w)) ?? (u && d(_t, { modelValue: r.value, indeterminate: s.value && !r.value, "onUpdate:modelValue": i }, null)) : d("div", { class: "v-data-table-header__content" }, [d("span", null, [C.title]), C.sortable && d(Ae, { key: "icon", class: "v-data-table-header__sort-icon", icon: h(C) }, null), e.multiSort && o(C) && d("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...y.value], style: S.value }, [a.value.findIndex((P) => P.key === C.key) + 1])]);
    } });
  };
  ue(() => d(pe, null, [t.headers ? t.headers(x.value) : f.value.map((F, C) => d("tr", null, [F.map((B, _) => d(A, { column: B, x: _, y: C }, null))])), e.loading && d("tr", { class: "v-data-table-progress" }, [d("th", { colspan: v.value.length }, [d(Io, { name: "v-data-table-progress", absolute: !0, active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), gu = R({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), mu = le()({ name: "VDataTableGroupHeaderRow", props: gu(), setup(e, n) {
  let { slots: t } = n;
  const { isGroupOpen: l, toggleGroup: a, extractRows: o } = yr(), { isSelected: s, isSomeSelected: r, select: i } = Nl(), { columns: u } = jl(), v = m(() => o([e.item]));
  return () => d("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var p, c;
    if (f.key === "data-table-group") {
      const h = l(e.item) ? "$expand" : "$next", y = () => a(e.item);
      return ((p = t["data-table-group"]) == null ? void 0 : p.call(t, { item: e.item, count: v.value.length, props: { icon: h, onClick: y } })) ?? d(Ln, { class: "v-data-table-group-header-row__column" }, { default: () => [d(pt, { size: "small", variant: "text", icon: h, onClick: y }, null), d("span", null, [e.item.value]), d("span", null, [pl("("), v.value.length, pl(")")])] });
    }
    if (f.key === "data-table-select") {
      const h = s(v.value), y = r(v.value) && !h, S = (x) => i(v.value, x);
      return ((c = t["data-table-select"]) == null ? void 0 : c.call(t, { props: { modelValue: h, indeterminate: y, "onUpdate:modelValue": S } })) ?? d("td", null, [d(_t, { modelValue: h, indeterminate: y, "onUpdate:modelValue": S }, null)]);
    }
    return d("td", null, null);
  })]);
} }), yu = R({ index: Number, item: Object, cellProps: [Object, Function], onClick: Re(), onContextmenu: Re(), onDblclick: Re() }, "VDataTableRow"), hu = le()({ name: "VDataTableRow", props: yu(), setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, toggleSelect: a } = Nl(), { isExpanded: o, toggleExpand: s } = vr(), { columns: r } = jl();
  ue(() => d("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }], onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && r.value.map((i, u) => {
    const v = e.item, f = `item.${i.key}`, p = { index: e.index, item: v.raw, internalItem: v, value: zt(v.columns, i.key), column: i, isSelected: l, toggleSelect: a, isExpanded: o, toggleExpand: s }, c = typeof e.cellProps == "function" ? e.cellProps({ index: p.index, item: p.item, internalItem: p.internalItem, value: p.value, column: i }) : e.cellProps, h = typeof i.cellProps == "function" ? i.cellProps({ index: p.index, item: p.item, internalItem: p.internalItem, value: p.value }) : i.cellProps;
    return d(Ln, te({ align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, c, h), { default: () => {
      var y, S;
      return t[f] ? t[f](p) : i.key === "data-table-select" ? ((y = t["item.data-table-select"]) == null ? void 0 : y.call(t, p)) ?? d(_t, { disabled: !v.selectable, modelValue: l([v]), onClick: en(() => a(v), ["stop"]) }, null) : i.key === "data-table-expand" ? ((S = t["item.data-table-expand"]) == null ? void 0 : S.call(t, p)) ?? d(pt, { icon: o(v) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: en(() => s(v), ["stop"]) }, null) : Ja(p.value);
    } });
  })]));
} }), Rr = R({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function] }, "VDataTableRows"), Fl = le()({ name: "VDataTableRows", inheritAttrs: !1, props: Rr(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { columns: a } = jl(), { expandOnClick: o, toggleExpand: s, isExpanded: r } = vr(), { isSelected: i, toggleSelect: u } = Nl(), { toggleGroup: v, isGroupOpen: f } = yr(), { t: p } = it();
  return ue(() => {
    var c, h;
    return !e.loading || e.items.length && !l.loading ? e.loading || e.items.length || e.hideNoData ? d(pe, null, [e.items.map((y, S) => {
      var F;
      if (y.type === "group") {
        const C = { index: S, item: y, columns: a.value, isExpanded: r, toggleExpand: s, isSelected: i, toggleSelect: u, toggleGroup: v, isGroupOpen: f };
        return l["group-header"] ? l["group-header"](C) : d(mu, te({ key: `group-header_${y.id}`, item: y }, va(t, ":group-header", () => C)), l);
      }
      const x = { index: S, item: y.raw, internalItem: y, columns: a.value, isExpanded: r, toggleExpand: s, isSelected: i, toggleSelect: u }, A = { ...x, props: te({ key: `item_${y.key ?? y.index}`, onClick: o.value ? () => {
        s(y);
      } : void 0, index: S, item: y, cellProps: e.cellProps }, va(t, ":row", () => x), typeof e.rowProps == "function" ? e.rowProps({ item: x.item, index: x.index, internalItem: x.internalItem }) : e.rowProps) };
      return d(pe, { key: A.props.key }, [l.item ? l.item(A) : d(hu, A.props, l), r(y) && ((F = l["expanded-row"]) == null ? void 0 : F.call(l, x))]);
    })]) : d("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [d("td", { colspan: a.value.length }, [((c = l["no-data"]) == null ? void 0 : c.call(l)) ?? p(e.noDataText)])]) : d("tr", { class: "v-data-table-rows-loading", key: "loading" }, [d("td", { colspan: a.value.length }, [((h = l.loading) == null ? void 0 : h.call(l)) ?? p(e.loadingText)])]);
  }), {};
} }), Nr = R({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...ve(), ...Ye(), ...Ve(), ...Be() }, "VTable"), $l = le()({ name: "VTable", props: Nr(), setup(e, n) {
  let { slots: t, emit: l } = n;
  const { themeClasses: a } = $e(e), { densityClasses: o } = et(e);
  return ue(() => d(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, a.value, o.value, e.class], style: e.style }, { default: () => {
    var s, r, i;
    return [(s = t.top) == null ? void 0 : s.call(t), t.default ? d("div", { class: "v-table__wrapper", style: { height: ae(e.height) } }, [d("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (i = t.bottom) == null ? void 0 : i.call(t)];
  } })), {};
} }), bu = R({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function Su(e, n, t) {
  return n.map((l, a) => function(o, s, r, i) {
    const u = o.returnObject ? s : Te(s, o.itemValue), v = Te(s, o.itemSelectable, !0), f = i.reduce((p, c) => (c.key != null && (p[c.key] = Te(s, c.value)), p), {});
    return { type: "item", key: o.returnObject ? Te(s, o.itemValue) : u, index: r, value: u, selectable: v, columns: f, raw: s };
  }(e, l, a, t));
}
function jr(e, n) {
  return { items: m(() => Su(e, e.items, n.value)) };
}
const Wr = R({ ...Rr(), width: [String, Number], search: String, ...nu(), ...au(), ...du(), ...bu(), ...ru(), ...su(), ...Mr(), ...Nr() }, "DataTable"), xu = R({ ...wr(), ...Wr(), ...tu(), ...Tn() }, "VDataTable"), wu = le()({ name: "VDataTable", props: xu(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { groupBy: a } = gr(e), { sortBy: o, multiSort: s, mustSort: r } = Vr(e), { page: i, itemsPerPage: u } = Cr(e), { columns: v, headers: f, sortFunctions: p, filterFunctions: c } = Or(e, { groupBy: a, showSelect: q(e, "showSelect"), showExpand: q(e, "showExpand") }), { items: h } = jr(e, v), y = q(e, "search"), { filteredItems: S } = lu(e, h, y, { transform: (L) => L.columns, customKeyFilter: c }), { toggleSort: x } = Ir({ sortBy: o, multiSort: s, mustSort: r, page: i }), { sortByWithGroups: A, opened: F, extractRows: C, isGroupOpen: B, toggleGroup: _ } = mr({ groupBy: a, sortBy: o }), { sortedItems: V } = iu(e, S, A, p), { flatItems: g } = Sr(V, a, F), w = m(() => g.value.length), { startIndex: k, stopIndex: P, pageCount: $, setItemsPerPage: D } = Pr({ page: i, itemsPerPage: u, itemsLength: w }), { paginatedItems: O } = function(L) {
    const { items: W, startIndex: G, stopIndex: z, itemsPerPage: E } = L;
    return { paginatedItems: m(() => E.value <= 0 ? W.value : W.value.slice(G.value, z.value)) };
  }({ items: g, startIndex: k, stopIndex: P, itemsPerPage: u }), T = m(() => C(O.value)), { isSelected: M, select: H, selectAll: I, toggleSelect: N, someSelected: j, allSelected: U } = Fr(e, { allItems: h, currentPage: T }), { isExpanded: ee, toggleExpand: X } = pr(e);
  xr({ page: i, itemsPerPage: u, sortBy: o, groupBy: a, search: y }), Xe({ VDataTableRows: { hideNoData: q(e, "hideNoData"), noDataText: q(e, "noDataText"), loading: q(e, "loading"), loadingText: q(e, "loadingText") } });
  const Z = m(() => ({ page: i.value, itemsPerPage: u.value, sortBy: o.value, pageCount: $.value, toggleSort: x, setItemsPerPage: D, someSelected: j.value, allSelected: U.value, isSelected: M, select: H, selectAll: I, toggleSelect: N, isExpanded: ee, toggleExpand: X, isGroupOpen: B, toggleGroup: _, items: T.value.map((L) => L.raw), internalItems: T.value, groupedItems: O.value, columns: v.value, headers: f.value }));
  return ue(() => {
    const L = Al.filterProps(e), W = _l.filterProps(e), G = Fl.filterProps(e), z = $l.filterProps(e);
    return d($l, te({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, z), { top: () => {
      var E;
      return (E = l.top) == null ? void 0 : E.call(l, Z.value);
    }, default: () => {
      var E, K, se, Y, Q, re;
      return l.default ? l.default(Z.value) : d(pe, null, [(E = l.colgroup) == null ? void 0 : E.call(l, Z.value), d("thead", null, [d(_l, W, l)]), (K = l.thead) == null ? void 0 : K.call(l, Z.value), d("tbody", null, [(se = l["body.prepend"]) == null ? void 0 : se.call(l, Z.value), l.body ? l.body(Z.value) : d(Fl, te(t, G, { items: O.value }), l), (Y = l["body.append"]) == null ? void 0 : Y.call(l, Z.value)]), (Q = l.tbody) == null ? void 0 : Q.call(l, Z.value), (re = l.tfoot) == null ? void 0 : re.call(l, Z.value)]);
    }, bottom: () => l.bottom ? l.bottom(Z.value) : d(pe, null, [d(er, null, null), d(Al, L, { prepend: l["footer.prepend"] })]) });
  }), {};
} }), ku = R({ itemsLength: { type: [Number, String], required: !0 }, ...wr(), ...Wr(), ...Tn() }, "VDataTableServer"), Cu = le()({ name: "VDataTableServer", props: ku(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { groupBy: a } = gr(e), { sortBy: o, multiSort: s, mustSort: r } = Vr(e), { page: i, itemsPerPage: u } = Cr(e), v = m(() => parseInt(e.itemsLength, 10)), { columns: f, headers: p } = Or(e, { groupBy: a, showSelect: q(e, "showSelect"), showExpand: q(e, "showExpand") }), { items: c } = jr(e, f), { toggleSort: h } = Ir({ sortBy: o, multiSort: s, mustSort: r, page: i }), { opened: y, isGroupOpen: S, toggleGroup: x, extractRows: A } = mr({ groupBy: a, sortBy: o }), { pageCount: F, setItemsPerPage: C } = Pr({ page: i, itemsPerPage: u, itemsLength: v }), { flatItems: B } = Sr(c, a, y), { isSelected: _, select: V, selectAll: g, toggleSelect: w, someSelected: k, allSelected: P } = Fr(e, { allItems: c, currentPage: c }), { isExpanded: $, toggleExpand: D } = pr(e), O = m(() => A(c.value));
  xr({ page: i, itemsPerPage: u, sortBy: o, groupBy: a, search: q(e, "search") }), ke("v-data-table", { toggleSort: h, sortBy: o }), Xe({ VDataTableRows: { hideNoData: q(e, "hideNoData"), noDataText: q(e, "noDataText"), loading: q(e, "loading"), loadingText: q(e, "loadingText") } });
  const T = m(() => ({ page: i.value, itemsPerPage: u.value, sortBy: o.value, pageCount: F.value, toggleSort: h, setItemsPerPage: C, someSelected: k.value, allSelected: P.value, isSelected: _, select: V, selectAll: g, toggleSelect: w, isExpanded: $, toggleExpand: D, isGroupOpen: S, toggleGroup: x, items: O.value.map((M) => M.raw), internalItems: O.value, groupedItems: B.value, columns: f.value, headers: p.value }));
  ue(() => {
    const M = Al.filterProps(e), H = _l.filterProps(e), I = Fl.filterProps(e), N = $l.filterProps(e);
    return d($l, te({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, N), { top: () => {
      var j;
      return (j = l.top) == null ? void 0 : j.call(l, T.value);
    }, default: () => {
      var j, U, ee, X, Z, L;
      return l.default ? l.default(T.value) : d(pe, null, [(j = l.colgroup) == null ? void 0 : j.call(l, T.value), d("thead", { class: "v-data-table__thead", role: "rowgroup" }, [d(_l, te(H, { sticky: e.fixedHeader }), l)]), (U = l.thead) == null ? void 0 : U.call(l, T.value), d("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(ee = l["body.prepend"]) == null ? void 0 : ee.call(l, T.value), l.body ? l.body(T.value) : d(Fl, te(t, I, { items: B.value }), l), (X = l["body.append"]) == null ? void 0 : X.call(l, T.value)]), (Z = l.tbody) == null ? void 0 : Z.call(l, T.value), (L = l.tfoot) == null ? void 0 : L.call(l, T.value)]);
    }, bottom: () => l.bottom ? l.bottom(T.value) : d(Al, M, { prepend: l["footer.prepend"] }) });
  });
} }), zr = Rl.reduce((e, n) => (e[n] = { type: [Boolean, String, Number], default: !1 }, e), {}), Gr = Rl.reduce((e, n) => (e["offset" + Ft(n)] = { type: [String, Number], default: null }, e), {}), Hr = Rl.reduce((e, n) => (e["order" + Ft(n)] = { type: [String, Number], default: null }, e), {}), Na = { col: Object.keys(zr), offset: Object.keys(Gr), order: Object.keys(Hr) };
function Pu(e, n, t) {
  let l = e;
  if (t != null && t !== !1)
    return n && (l += `-${n.replace(e, "")}`), e === "col" && (l = "v-" + l), (e !== "col" || t !== "" && t !== !0) && (l += `-${t}`), l.toLowerCase();
}
const Bu = ["auto", "start", "end", "center", "baseline", "stretch"], Au = R({ cols: { type: [Boolean, String, Number], default: !1 }, ...zr, offset: { type: [String, Number], default: null }, ...Gr, order: { type: [String, Number], default: null }, ...Hr, alignSelf: { type: String, default: null, validator: (e) => Bu.includes(e) }, ...ve(), ...Ve() }, "VCol"), At = le()({ name: "VCol", props: Au(), setup(e, n) {
  let { slots: t } = n;
  const l = m(() => {
    const a = [];
    let o;
    for (o in Na)
      Na[o].forEach((r) => {
        const i = e[r], u = Pu(o, r, i);
        u && a.push(u);
      });
    const s = a.some((r) => r.startsWith("v-col-"));
    return a.push({ "v-col": !s || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), a;
  });
  return () => {
    var a;
    return $t(e.tag, { class: [l.value, e.class], style: e.style }, (a = t.default) == null ? void 0 : a.call(t));
  };
} }), Mn = ["start", "end", "center"], Kr = ["space-between", "space-around", "space-evenly"];
function Rn(e, n) {
  return Rl.reduce((t, l) => (t[e + Ft(l)] = n(), t), {});
}
const _u = [...Mn, "baseline", "stretch"], qr = (e) => _u.includes(e), Ur = Rn("align", () => ({ type: String, default: null, validator: qr })), Fu = [...Mn, ...Kr], Yr = (e) => Fu.includes(e), Xr = Rn("justify", () => ({ type: String, default: null, validator: Yr })), $u = [...Mn, ...Kr, "stretch"], Jr = (e) => $u.includes(e), Zr = Rn("alignContent", () => ({ type: String, default: null, validator: Jr })), ja = { align: Object.keys(Ur), justify: Object.keys(Xr), alignContent: Object.keys(Zr) }, Vu = { align: "align", justify: "justify", alignContent: "align-content" };
function Iu(e, n, t) {
  let l = Vu[e];
  if (t != null)
    return n && (l += `-${n.replace(e, "")}`), l += `-${t}`, l.toLowerCase();
}
const Eu = R({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: qr }, ...Ur, justify: { type: String, default: null, validator: Yr }, ...Xr, alignContent: { type: String, default: null, validator: Jr }, ...Zr, ...ve(), ...Ve() }, "VRow"), Qr = le()({ name: "VRow", props: Eu(), setup(e, n) {
  let { slots: t } = n;
  const l = m(() => {
    const a = [];
    let o;
    for (o in ja)
      ja[o].forEach((s) => {
        const r = e[s], i = Iu(o, s, r);
        i && a.push(i);
      });
    return a.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), a;
  });
  return () => {
    var a;
    return $t(e.tag, { class: ["v-row", l.value, e.class], style: e.style }, (a = t.default) == null ? void 0 : a.call(t));
  };
} }), Du = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function Tu(e) {
  return d("div", { class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`] }, [arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []]);
}
function Wa(e) {
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
      return za(e);
    if (e.includes("@"))
      return Wa(e);
    t.includes(",") ? n = za(t) : t.includes("@") ? n = Wa(t) : t && n.push(Wl(t));
  }
  return [Tu(e, n)];
}
function za(e) {
  return e.replace(/\s/g, "").split(",").map(Wl);
}
const Lu = R({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...St(), ...wt(), ...Be() }, "VSkeletonLoader"), Ou = le()({ name: "VSkeletonLoader", props: Lu(), setup(e, n) {
  let { slots: t } = n;
  const { backgroundColorClasses: l, backgroundColorStyles: a } = ot(q(e, "color")), { dimensionStyles: o } = xt(e), { elevationClasses: s } = Tt(e), { themeClasses: r } = $e(e), { t: i } = it(), u = m(() => Wl(Ie(e.type).join(",")));
  return ue(() => {
    var f;
    const v = !t.default || e.loading;
    return d("div", { class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, r.value, l.value, s.value], style: [a.value, v ? o.value : {}], "aria-busy": e.boilerplate ? void 0 : v, "aria-live": e.boilerplate ? void 0 : "polite", "aria-label": e.boilerplate ? void 0 : i(e.loadingText), role: e.boilerplate ? void 0 : "alert" }, [v ? u.value : (f = t.default) == null ? void 0 : f.call(t)]);
  }), {};
} }), Vl = { background: "--v-theme-surface", border: "transparent", color: "--v-theme-on-surface" }, es = { colorPercentageChange: 15, colorPercentageDirection: "desc", colors: () => ({ default: Vl, footer: { background: void 0, color: void 0 }, header: { background: void 0, color: void 0 }, percentageChange: 15, percentageDirection: "desc" }), columnWidths: () => [], defaultColors: () => Vl, density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footerBackgroundColor: void 0, footerColor: void 0, footers: () => [], headerBackgroundColor: void 0, headerColor: void 0, height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 0, searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }, Mu = rt({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (n, t) => be(n.$slots, "bottom") }), ce = "v-drilldown-table";
function Ga(e, n, t = "") {
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
      return a != null && r && typeof r == "string" ? a[r] !== void 0 ? a[r] : (r = r.replace(/\[(\w+)\]/g, ".$1"), r = r.replace(/^\./, ""), Ga(a, r.split("."), s)) : s;
    }(e, n, t);
  if (Array.isArray(n))
    return Ga(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
const Ha = (e) => {
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
function ts(e) {
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
const ls = (e) => {
  const { align: n } = e;
  return { "d-flex align-center": !0, [`justify-${n}`]: n || !1, "justify-start": !n };
}, ns = (e) => {
  const { level: n } = e;
  return { "d-flex": !0, [`${ce}--header-select-all-checkbox`]: !0, [`${ce}--header-select-all-checkbox-${n}`]: !0 };
};
function as(e) {
  return e === "transparent" || e === "none" || e === "inherit" || e === "currentColor" || e === "initial" || e === "unset";
}
function os(e) {
  return e.includes("--v-theme");
}
const rs = (e, n) => {
  if (as(e))
    return e;
  if (os(e))
    return `rgb(var(${e}))`;
  const t = function(l, a) {
    const o = a.global.current.value.colors;
    return Object.entries(o).find(([s]) => s === l);
  }(e, n);
  return t ? `hsl(${Il(t[1])})` : `hsl(${Il(e)})`;
}, Nu = (e) => {
  const { colors: n, level: t, prop: l = "default", theme: a, type: o } = e, s = { ...n[l] }, r = n == null ? void 0 : n.percentageDirection;
  if (s === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${l}' does not exist`);
  let i = ((u, v, f) => {
    let p = 100, c = (u == null ? void 0 : u.percentageChange) ?? 0;
    return isNaN(c) && (p = 100), c *= v, f !== "desc" && f !== "descending" || (p = 100 - c), f !== "asc" && f !== "ascending" || (p = 0 + c), p < 0 && (p = 0), p > 100 && (p = 100), isNaN(p) && (p = 100), v === 0 && (p = 100), p;
  })(n, t - 1, r);
  return o || Object.entries(s).forEach(([u, v]) => {
    let f = a.global.current.value.colors[v] ?? v;
    if (f || (f = n.default[u] ?? "transparent", f = rs(f, a)), as(f))
      return void (s[u] = f);
    if ((u === "color" || t === 0 && r === "asc") && (i = 100), os(f))
      return void (s[u] = `rgb(var(${f}))`);
    const p = `/ ${i}%`, c = Il(f);
    if (c.includes("/"))
      return s[u] = `hsl(${c})`;
    s[u] = `hsl(${Il(f)} ${p})`;
  }), s;
};
function Il(e) {
  let n = function(v) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let p = v;
    return Object.entries(f).forEach(([c, h]) => {
      v.toLowerCase() != c.toLowerCase() || (p = h);
    }), p;
  }(e), t = 0, l = 0, a = 0, o = 0, s = 0, r = 0;
  if (n.substring(0, 1) === "#")
    n = function(v) {
      let f = v.replace("#", "");
      f.length === 3 && (f = f.split("").map((y) => y + y).join(""));
      const p = parseInt(f.substring(0, 2), 16), c = parseInt(f.substring(2, 4), 16), h = parseInt(f.substring(4, 6), 16);
      return [p, c, h];
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
const Nn = (e) => {
  const { colors: n, level: t, prop: l = "default", themeColors: a, type: o = null } = e;
  if (typeof n != "object" || n == null)
    return {};
  const s = Nu({ colors: n, level: t, prop: l, theme: a, type: o });
  return o ? s[o] : s;
}, ju = ["colspan"], Wu = rt({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const n = Dl(), t = e, l = m(() => ((x) => {
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
  }), p = m(() => t.loading), c = m(() => {
    var A, F;
    let x = ((F = (A = t.loaderProps) == null ? void 0 : A.text) == null ? void 0 : F.color) ?? "surface-variant";
    return x = rs(x, n), { color: x };
  }), h = m(() => t.loadingText || "Loading..."), y = (x) => {
    const A = t.loaderType;
    return Array.isArray(A) ? A.indexOf(x) : 1;
  }, S = (x) => {
    const A = t.loaderType;
    return x === t.loaderType || !!Array.isArray(A) && A.includes(x);
  };
  return (x, A) => (ne(), ye("tr", { class: ge(b(o)), style: De(b(l)) }, [Ke("td", { class: "px-0 ma-0", colspan: x.colspan, style: De(b(a)) }, [x.loading ? (ne(), we(Qr, { key: 0, class: ge(b(s)), "no-gutters": "" }, { default: fe(() => [S("linear") ? (ne(), we(At, { key: 0, class: "pa-0 ma-0", order: y("linear") }, { default: fe(() => [d(Vo, _e(We(b(r))), null, 16)]), _: 1 }, 8, ["order"])) : Ce("", !0), S("circular") ? (ne(), we(At, { key: 1, class: "pa-0 my-2", order: y("circular") }, { default: fe(() => [d(_o, _e(We(b(v))), null, 16)]), _: 1 }, 8, ["order"])) : Ce("", !0), S("skelton") ? (ne(), we(At, { key: 2, class: "pa-0 ma-0", order: y("skelton") }, { default: fe(() => [d(Ou, te(b(f), { loading: b(p) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : Ce("", !0), S("text") ? (ne(), we(At, { key: 3, class: "my-2", order: y("text"), style: De(b(c)) }, { default: fe(() => [pl(Ja(b(h)), 1)]), _: 1 }, 8, ["order", "style"])) : Ce("", !0)]), _: 1 }, 8, ["class"])) : Ce("", !0)], 12, ju)], 6));
} }), jn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of n)
    t[l] = a;
  return t;
}, zu = jn(Wu, [["__scopeId", "data-v-b954d026"]]), Gu = ["colspan"], Hu = ["colspan", "innerHTML"], Ku = ["colspan"], qu = ["colspan", "innerHTML"], Uu = ["colspan", "onClick"], Yu = ["innerHTML"], Xu = rt({ __name: "HeadersSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, headerBackgroundColor: {}, headerColor: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: n }) {
  const t = Xt(), l = n, a = e, o = J(), s = Se(Symbol.for("vuetify:icons")), r = J(!1), i = J(a.items), u = J(a.matchColumnWidths), v = J(a.columnWidths || []), f = J(a.sortAscIcon), p = m(() => a.tableModelValue), c = Dl(), h = m(() => function() {
    const k = a.slotProps.columns;
    if (a.level <= 1 || !u.value)
      return k;
    if (v.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(k).forEach(([P]) => {
      Object.keys(k).length !== parseInt(P) + 1 && k[P].width === void 0 && (k[P].width = v.value[parseInt(P)]);
    }), k;
  }());
  oe(() => a.items, (k) => {
    i.value = k, o.value = (k == null ? void 0 : k.filter((P) => P.selectable)) ?? [], o.value = k == null ? void 0 : k.filter((P) => P.selectable !== !1);
  });
  const y = m(() => ((k) => {
    const { level: P } = k;
    return { [`${ce}--header-row`]: !0, [`${ce}--header-row-${P}`]: !0 };
  })({ level: a.level })), S = (k, P = "") => (($) => {
    const { column: D, level: O, slotName: T = "" } = $;
    return { [`${ce}--header-row-th`]: !0, [`${ce}--header-row-th-${T}`]: T !== "", [`${ce}--header-row-th-${T}-${O}`]: T !== "", [`${ce}--header-row-th-${O}`]: !0, [`${ce}--header-row-th-sortable`]: D.sortable || !1, [`${ce}--header-row-th-sortable-default-color`]: D.sortable || !1, [`${D.cellClass}`]: D.cellClass || !1 };
  })({ column: k, level: a.level, slotName: P }), x = m(() => {
    const k = a.colors;
    return k && (k.header = { background: a.headerBackgroundColor, color: a.headerColor }, k.percentageChange = a.colorPercentageChange, k.percentageDirection = a.colorPercentageDirection), k;
  }), A = (k, P = !1) => (($) => {
    const { colors: D, column: O, dataTableExpand: T = !1, level: M, theme: H } = $, I = { minWidth: O.width ? lt({ str: O.width }) : "auto", width: O.width ? lt({ str: O.width }) : "auto" };
    T && !O.width && (I.width = O.width ? lt({ str: O.width }) : "56px", I.minWidth = O.width ? lt({ str: O.width }) : "56px");
    const N = Nn({ colors: D, level: M, prop: "header", themeColors: H });
    return I.backgroundColor = N.background, I.color = N.color, I;
  })({ colors: x.value, column: k, dataTableExpand: P, level: a.level, theme: c }), F = (k) => {
    const P = A(k);
    return a.headerColor === void 0 ? {} : { color: P.color };
  }, C = m(() => {
    var k;
    return !a.slotProps.allSelected && ((k = p == null ? void 0 : p.value) == null ? void 0 : k.length) !== 0;
  });
  function B() {
    r.value = !r.value, a.slotProps.selectAll(r.value), l("click:selectAll", r.value);
  }
  oe(() => a.slotProps.allSelected, (k) => {
    r.value = k;
  }), oe(() => a.slotProps.someSelected, () => {
    if (a.slotProps.allSelected)
      return !1;
  });
  const _ = m(() => ns({ level: a.level })), V = (k) => ((P) => {
    const { iconOptions: $, key: D, level: O, sortBy: T } = P;
    return { "fa-fw": ($ == null ? void 0 : $.defaultSet) === "fa", "mx-1": !0, [`${ce}--header-row-th-sortable-sort-icon`]: !0, [`${ce}--header-row-th-sortable-sort-icon-${O}`]: !0, [`${ce}--header-row-th-sortable-sort-icon-desc`]: Ha({ id: D, sortBy: T }) === "desc", [`${ce}--header-row-th-sortable-sort-icon-asc`]: Ha({ id: D, sortBy: T }) === "asc" };
  })({ iconOptions: s, key: k, level: a.level, sortBy: a.sortBy }), g = m(() => (s == null ? void 0 : s.defaultSet) === "fa" ? "small" : (f.value = (a == null ? void 0 : a.sortAscIcon) ?? "$sortAsc", "default"));
  function w(k) {
    return ts(k);
  }
  return (k, P) => (ne(), ye(pe, null, [Ke("tr", { class: ge(b(y)) }, [(ne(!0), ye(pe, null, He(b(h), ($) => {
    return ne(), ye(pe, { key: $ }, [b(t)[`column.${$.key}`] || b(t)[`header.${$.key}`] ? (ne(), ye("th", { key: 0, class: ge(S($, $.key)), colspan: $.colspan || 1, style: De(A($, !0)) }, [be(k.$slots, `header.${$.key}`, { column: $ }, void 0, !0)], 14, Gu)) : $.key === "data-table-group" || $.key === "data-table-group" ? (ne(), ye("th", { key: 1, class: ge(S($, "header-data-table-group")), colspan: $.colspan || 1, style: De(A($, !0)), innerHTML: w($) }, null, 14, Hu)) : $.key === "data-table-select" || $.key === "data-table-select" && k.showSelect ? (ne(), ye("th", { key: 2, class: ge(S($, "header-data-table-select")), colspan: $.colspan || 1, style: De(A($, !0)) }, [k.selectStrategy !== "single" ? (ne(), we(In, { key: 0, class: ge(b(_)), density: k.density, focused: !1, indeterminate: b(C), "model-value": b(r), "onUpdate:modelValue": B }, null, 8, ["class", "density", "indeterminate", "model-value"])) : Ce("", !0)], 14, Ku)) : $.key === "data-table-expand" ? (ne(), ye("th", { key: 3, class: ge(S($, "data-table-expand")), colspan: $.colspan || 1, style: De(A($, !0)), innerHTML: w($) }, null, 14, qu)) : (ne(), ye("th", { key: 4, class: ge(S($)), colspan: $.colspan || 1, style: De(A($)), onClick: (O) => function(T) {
      T.sortable && a.slotProps.toggleSort(T);
    }($) }, [Ke("div", { class: ge((D = $.align, ls({ align: D }))), style: De(F($)) }, [Ke("span", { innerHTML: w($) }, null, 8, Yu), $.sortable && b(t)["header.sortIcon"] ? (ne(), ye("span", { key: 0, class: ge(V($.key)) }, [be(k.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : $.sortable ? (ne(), we(Ae, { key: 1, class: ge(V($.key)), icon: b(f), size: b(g) }, null, 8, ["class", "icon", "size"])) : Ce("", !0)], 6)], 14, Uu))], 64);
    var D;
  }), 128))], 2), k.loaderSettings.loaderType && !b(t).loading ? (ne(), we(b(zu), { key: 0, colors: k.colors, colspan: k.loaderSettings.colspan, height: k.loaderSettings.height, level: k.level, "loader-props": k.loaderProps, "loader-settings": k.loaderSettings, "loader-type": k.loaderSettings.loaderType, loading: k.loaderSettings.loading || !1, "loading-text": k.loaderSettings.loadingText, size: k.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : Ce("", !0)], 64));
} }), Ju = jn(Xu, [["__scopeId", "data-v-315f818f"]]), Zu = ["colspan"], Qu = ["colspan"], ec = ["colspan"], tc = ["colspan"], lc = ["innerHTML"], nc = rt({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: n }) {
  const t = Xt(), l = n, a = e, o = Se(Symbol.for("vuetify:icons")), s = m(() => a.slotProps.columns), r = m(() => a.slotProps.index), i = m(() => a.slotProps.isExpanded), u = m(() => a.slotProps.item), v = m(() => a.slotProps.internalItem), f = m(() => a.slotProps.level), p = m(() => a.slotProps.toggleExpand), c = m(() => a.slotProps.toggleSelect), h = m(() => a.itemSelectable), y = m(() => ((C) => {
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
  return (C, B) => (ne(), ye("tr", { class: ge(b(y)), onClick: B[2] || (B[2] = (_) => x({ columns: b(s), index: b(r), isExpanded: b(i), isRow: !0, item: b(u), internalItem: b(v), level: b(f), toggleExpand: b(p), $event: _ })) }, [(ne(!0), ye(pe, null, He(b(s), (_) => (ne(), ye(pe, { key: _ }, [C.$slots[`item.${_.key}`] ? (ne(), ye("td", { key: 0, class: ge(S(_)), colspan: _.colspan || 1 }, [be(C.$slots, `item.${_.key}`, { columns: b(s), index: b(r), item: b(u) }, void 0, !0)], 10, Zu)) : _.key === "data-table-select" || _.key === "data-table-select" && a.showSelect ? (ne(), ye("td", { key: 1, class: ge(S(_)), colspan: _.colspan || 1 }, [b(t)["item.data-table-select"] ? be(C.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : Ce("", !0), d(In, { class: "d-flex v-simple-checkbox", density: C.density, disabled: b(u).selectable === !1 && b(h) === "selectable", "model-value": C.slotProps.isSelected([b(v)]), onClick: B[0] || (B[0] = en((V) => function(g) {
    const { internalItem: w, item: k, toggleSelect: P } = g;
    P(w), l("click:row:checkbox", k);
  }({ columns: b(s), index: b(r), internalItem: b(v), item: b(u), level: b(f), toggleSelect: b(c) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, Qu)) : _.key === "data-table-expand" || _.key === "data-table-expand" && C.showExpand ? (ne(), ye("td", { key: 2, class: ge(S(_)), colspan: _.colspan || 1 }, [b(f) < C.levels ? (ne(), ye("div", { key: 0, class: ge(["v-drilldown-table--expand-icon", b(i)(b(v)) ? "rotate-180" : ""]), onClick: B[1] || (B[1] = (V) => x({ columns: b(s), index: b(r), isExpanded: b(i), item: b(u), internalItem: b(v), level: b(f), toggleExpand: b(p) })) }, [C.$slots["item.data-table-expand"] ? be(C.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (ne(), we(Ae, { key: 1, icon: "$expand", size: b(A) }, null, 8, ["size"]))], 2)) : Ce("", !0)], 10, ec)) : (ne(), ye("td", { key: 3, class: ge(S(_)), colspan: _.colspan || 1 }, [Ke("span", { innerHTML: F(b(u), _) }, null, 8, lc)], 10, tc))], 64))), 128))], 2));
} }), ac = jn(nc, [["__scopeId", "data-v-91892b42"]]), oc = ["colspan"], rc = ["colspan"], sc = ["colspan", "innerHTML"], ic = ["colspan", "innerHTML"], uc = ["colspan"], cc = ["innerHTML"], dc = rt({ __name: "TfootSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, footerBackgroundColor: {}, footerColor: {}, footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: n }) {
  const t = Xt(), l = n, a = e, o = J(), s = Dl(), r = J(!1), i = J(a.items), u = m(() => a.tableModelValue), v = m(() => a.footers.length ? a.footers : a.slotProps.columns);
  oe(() => a.items, (C) => {
    i.value = C, o.value = (C == null ? void 0 : C.filter((B) => B.selectable)) ?? [], o.value = C == null ? void 0 : C.filter((B) => B.selectable !== !1);
  });
  const f = m(() => ((C) => {
    const { level: B } = C;
    return { [`${ce}--tfoot`]: !0, [`${ce}--tfoot-${B}`]: !0 };
  })({ level: a.level })), p = m(() => ((C) => {
    const { level: B } = C;
    return { [`${ce}--tfoot-row`]: !0, [`${ce}--tfoot-row-${B}`]: !0 };
  })({ level: a.level })), c = (C, B = "") => ((_) => {
    const { column: V, level: g, slotName: w = "" } = _;
    return { [`${ce}--tfoot-row-td`]: !0, [`${ce}--tfoot-row-td-${w}`]: w !== "", [`${ce}--tfoot-row-td-${w}-${g}`]: w, [`${ce}--tfoot-row-td-${g}`]: !0, [`${V.cellClass}`]: V.cellClass || !1 };
  })({ column: C, level: a.level, slotName: B }), h = m(() => {
    const C = a.colors;
    return C && (C.footer = { background: a.footerBackgroundColor, color: a.footerColor }, C.percentageChange = a.colorPercentageChange, C.percentageDirection = a.colorPercentageDirection), C;
  }), y = m(() => ((C) => {
    const { colors: B, elm: _, level: V, theme: g } = C, w = Nn({ colors: B, level: V, prop: _, themeColors: g });
    return { backgroundColor: w.background, color: w.color };
  })({ colors: h.value, elm: "footer", footerColor: a.footerColor, level: a.level, theme: s })), S = m(() => {
    var C;
    return !a.slotProps.allSelected && ((C = u == null ? void 0 : u.value) == null ? void 0 : C.length) !== 0;
  });
  function x() {
    r.value = !r.value, a.slotProps.selectAll(r.value), l("click:selectAll", r.value);
  }
  oe(() => a.slotProps.allSelected, (C) => {
    r.value = C;
  }), oe(() => a.slotProps.someSelected, () => {
    if (a.slotProps.allSelected)
      return !1;
  });
  const A = m(() => ns({ level: a.level }));
  function F(C) {
    return ts(C);
  }
  return (C, B) => {
    var _;
    return (_ = b(v)) != null && _.length ? (ne(), ye("tfoot", { key: 0, class: ge(b(f)) }, [Ke("tr", { class: ge(b(p)) }, [(ne(!0), ye(pe, null, He(b(v), (V) => {
      return ne(), ye(pe, { key: V }, [b(t)[`tfoot.${V.key}`] ? (ne(), ye("th", { key: 0, class: ge(c(V, V.key)), colspan: V.colspan || 1, style: De(b(y)) }, [be(C.$slots, `tfoot.${V.key}`, { column: V })], 14, oc)) : V.key === "data-table-select" ? (ne(), ye("th", { key: 1, class: ge(c(V, "tfoot-data-table-select")), colspan: V.colspan || 1, style: De(b(y)) }, [C.selectStrategy !== "single" ? (ne(), we(In, { key: 0, class: ge(b(A)), density: C.density, focused: !1, indeterminate: b(S), "model-value": b(r), "onUpdate:modelValue": x }, null, 8, ["class", "density", "indeterminate", "model-value"])) : Ce("", !0)], 14, rc)) : V.key === "data-table-expand" ? (ne(), ye("th", { key: 2, class: ge(c(V, "tfoot-data-table-expand")), colspan: V.colspan || 1, style: De(b(y)), innerHTML: F(V) }, null, 14, sc)) : V.renderFooterCell ? (ne(), ye("th", { key: 3, class: ge(c(V)), colspan: V.colspan || 1, style: De(b(y)), innerHTML: F(V) }, null, 14, ic)) : (ne(), ye("th", { key: 4, class: ge(c(V)), colspan: V.colspan || 1, style: De(b(y)) }, [Ke("div", { class: ge((g = V.align, ls({ align: g }))) }, [Ke("span", { innerHTML: F(V) }, null, 8, cc)], 2)], 14, uc))], 64);
      var g;
    }), 128))], 2)], 2)) : Ce("", !0);
  };
} }), pc = rt({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: n }) {
  const t = Xt(), l = n, a = e, o = J(""), s = J(!0), r = m(() => a.items), i = m(() => ({ allSelected: a.slotProps.allSelected, columns: a.slotProps.columns, headers: a.slotProps.headers, items: r, itemsPerPage: a.slotProps.itemsPerPage, level: a.level, loading: a.loading, page: a.slotProps.page, pageCount: a.slotProps.pageCount, search: b(o), selectAll: u, setItemsPerPage: a.slotProps.setItemsPerPage, toggleSelectAll: v }));
  function u(c) {
    a.slotProps.selectAll(c), l("click:selectAll", c);
  }
  function v() {
    a.slotProps.selectAll(!a.slotProps.allSelected), l("click:selectAll", !a.slotProps.allSelected);
  }
  ht(() => {
    const c = document.querySelector(`[data-id="vdt-top-id-${a.level}"]`);
    (c == null ? void 0 : c.children.length) === 0 && (s.value = !1);
  }), oe(o, () => {
    l("update:search", o.value);
  });
  const f = m(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...a.searchProps })), p = m(() => {
    const c = a.searchContainerCols ?? es.searchContainerCols();
    return { [`${ce}--search-field`]: !0, [`v-col-${c.xs}`]: !0, [`v-col-sm-${c.sm}`]: !0, [`v-col-md-${c.md}`]: !0, [`v-col-lg-${c.lg}`]: !0, [`v-col-xl-${c.xl}`]: !0, [`v-col-xxl-${c.xxl}`]: !0 };
  });
  return (c, h) => b(t).top ? be(c.$slots, "top", _e(te({ key: 0 }, b(i)))) : (c.showSearch || b(t)["top.left"] || b(t)["top.right"]) && b(s) ? (ne(), we(At, { key: 1, lg: "12" }, { default: fe(() => [d(Qr, { "data-id": `vdt-top-id-${a.level}` }, { default: fe(() => [b(t)["top.left"] ? be(c.$slots, "top.left", _e(te({ key: 0 }, b(i)))) : c.showSearch ? (ne(), we(At, { key: 1, class: ge(["d-flex align-center justify-end", b(p)]) }, { default: fe(() => [c.showSearch ? (ne(), we(vn, te({ key: 0 }, b(f), { modelValue: b(o), "onUpdate:modelValue": h[0] || (h[0] = (y) => It(o) ? o.value = y : null), class: "mt-0 pt-0" }), null, 16, ["modelValue"])) : Ce("", !0)]), _: 1 }, 8, ["class"])) : Ce("", !0), b(t)["top.right"] ? be(c.$slots, "top.right", _e(te({ key: 2 }, b(i)))) : Ce("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : Ce("", !0);
} });
function Ka(e) {
  return typeof e == "function" ? e() : b(e);
}
const qa = () => {
}, vc = (e) => e();
function fc(e, n = {}) {
  let t, l, a = qa;
  const o = (s) => {
    clearTimeout(s), a(), a = qa;
  };
  return (s) => {
    const r = Ka(e), i = Ka(n.maxWait);
    return t && o(t), r <= 0 || i !== void 0 && i <= 0 ? (l && (o(l), l = null), Promise.resolve(s())) : new Promise((u, v) => {
      a = n.rejectOnCancel ? v : u, i && !l && (l = setTimeout(() => {
        t && o(t), l = null, u(s());
      }, i)), t = setTimeout(() => {
        l && o(l), l = null, u(s());
      }, r);
    });
  };
}
function gc(e, n, t = {}) {
  const { eventFilter: l = vc, ...a } = t;
  return oe(e, (o = l, s = n, function(...r) {
    return new Promise((i, u) => {
      Promise.resolve(o(() => s.apply(this, r), { fn: s, thisArg: this, args: r })).then(i).catch(u);
    });
  }), a);
  var o, s;
}
function Ua(e, n, t = {}) {
  const { debounce: l = 0, maxWait: a, ...o } = t;
  return gc(e, n, { ...o, eventFilter: fc(l, { maxWait: a }) });
}
const Nt = /* @__PURE__ */ new Map(), mc = ["colspan"], yc = rt({ __name: "VDrilldownTable", props: hs({ colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, defaultColors: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footerBackgroundColor: {}, footerColor: {}, footers: {}, groupBy: {}, headerBackgroundColor: {}, headerColor: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { ...es }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: n }) {
  const t = n, l = e, a = Se(ss, {}), o = J({ ...l, ...a }), { colorPercentageChange: s, colorPercentageDirection: r, elevation: i, expandOnClick: u, footerBackgroundColor: v, footerColor: f, headerBackgroundColor: p, headerColor: c, hover: h, itemsPerPageOptions: y, loaderProps: S, loaderType: x, separator: A, sortAscIcon: F } = gn(o.value), C = Xt(), B = bs(), _ = de(null), V = m(() => l.density);
  ht(() => {
    l.level === 1 && g.level !== 1 || g.server || I();
  }), hn(() => {
    _.value = Object.assign({}, l.server ? Cu : wu);
  });
  let g = Yt(Object.assign({}, l));
  g != null && g.colors && (g.colors.default = { ...Vl, ...o.value.defaultColors });
  const w = { ...l, ...g }, k = J(B["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), P = J(""), $ = Dl(), D = m(() => g.sortBy), O = m(() => !!g.loading || g.hideNoData);
  (function(E, K, se) {
    const Y = oe(E, (...Q) => (Fe(() => Y()), K(...Q)), se);
  })(l, () => {
    l.level === 1 && g.level !== 1 || I(), g.itemsPerPage = l.itemsPerPage;
  }, { immediate: !1 }), oe(() => l.items, () => {
    l.loading || I();
  }, { deep: !0 }), oe(() => l.loading, () => {
    if (l.loading)
      return g.loading = l.loading, !1;
    I();
  }), Ne(() => {
    g.colors && o.value.defaultColors && (g.colors.default = { ...Vl, ...o.value.defaultColors });
  }), Ne(() => {
    o.value = { ...l, ...a };
  });
  const T = (E) => {
    const K = b(o.value.loaderType);
    return !(E && (K === "skelton" || Array.isArray(K) && K.length === 1 && K[0] === "skelton" || !g.showDrilldownWhenLoading));
  }, M = m(() => ((E) => {
    const { elevation: K, fixedHeader: se, isDrilldown: Y, isHover: Q, isServerSide: re, level: ie, separator: he } = E;
    return { [`${ce}--child`]: Y, [`${ce}--fixed-header`]: se, [`${ce}--hover`]: Q, [`${ce}--level-${ie}`]: !0, [`${ce}--server`]: re, [`${ce}--separator-${he}`]: he, [`${ce}`]: !0, [`elevation-${K}`]: parseInt(K) > 0 };
  })({ elevation: b(i), fixedHeader: g.fixedHeader, isDrilldown: l.isDrilldown, isHover: b(h), isServerSide: !1, level: g.level, separator: b(A) })), H = m(() => ((E) => {
    const { colors: K, level: se, theme: Y } = E;
    let Q = {};
    typeof K == "object" && K !== null && (Q = Nn({ colors: K, level: se, prop: "default", themeColors: Y }));
    const re = { borderBottom: "none" };
    return Q.border && (re.borderBottom = `1px solid ${Q.border}`), re;
  })({ colors: g.colors, level: g.level, theme: $ }));
  function I() {
    var E;
    l.drilldown ? g = ((K) => {
      const { drilldown: se, item: Y, level: Q, levels: re, loadedDrilldown: ie } = K;
      let he = ie;
      const je = Y;
      he = Wt(ie, se);
      const kt = (ie.items || [{}]).find((el) => {
        const tl = el[ie.drilldownKey];
        let Ot = {};
        return je && (Ot = je[ie.drilldownKey]), tl === Ot;
      });
      return he = Wt(ie, kt[ie.itemChildrenKey]), re === Q && (he.showExpand = !1), he;
    })({ drilldown: l.drilldown, item: l.item, level: l.level, levels: l.levels, loadedDrilldown: g, matchColumnWidths: l.matchColumnWidths }) : (g = Wt(g, l), l.matchColumnWidths && ((E = g == null ? void 0 : g.columnWidths) == null ? void 0 : E.length) === 0 && (g.columnWidths = ((K) => {
      const { tableId: se } = K, Y = [], Q = b(se), re = document.querySelectorAll(`[data-vdt-id="${Q}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(re).length > 0)
        for (let ie = 0; ie < re.length; ie += 1) {
          const he = re[ie];
          Y.push(he.offsetWidth);
        }
      return Y;
    })({ tableId: k })));
  }
  function N(E) {
    let K = { ...w, ...g, ...E };
    l.server && (K = { ...g, ...w, ...E }), ((se) => {
      const { data: Y, drilldownData: Q, emit: re } = se;
      Y.isExpanded(Y.internalItem) && re("update:drilldown", Q), re("update:expanded", Y.item);
    })({ data: E, drilldownData: K, emit: t });
  }
  function j(E) {
    return { items: E.items, itemsPerPage: E.itemsPerPage, page: E.page, search: P.value, server: E.server, sortBy: E.sortBy };
  }
  const U = function(E) {
    const K = ys();
    function se(re) {
      var ie;
      const he = Nt.get(E) || /* @__PURE__ */ new Set();
      he.add(re), Nt.set(E, he);
      const je = () => Y(re);
      return (ie = K == null ? void 0 : K.cleanups) == null || ie.push(je), je;
    }
    function Y(re) {
      const ie = Nt.get(E);
      ie && (ie.delete(re), ie.size || Q());
    }
    function Q() {
      Nt.delete(E);
    }
    return { on: se, once: function(re) {
      return se(function ie(...he) {
        Y(ie), re(...he);
      });
    }, off: Y, emit: function(re, ie) {
      var he;
      (he = Nt.get(E)) == null || he.forEach((je) => je(re, ie));
    }, reset: Q };
  }(ws), ee = U.on(function(E) {
    l.level === 1 && E.drilldown.server && t("update:options", { ...E });
  });
  function X(E) {
    g.itemsPerPage = E;
    const K = j(g), se = { drilldown: { ...l, ...K, itemsPerPage: E }, itemsPerPage: E, name: "update:itemsPerPage" };
    U.emit(se), t("update:itemsPerPage", E);
  }
  function Z(E) {
    g.page = E;
    const K = j(g), se = { drilldown: { ...l, ...K, page: E }, name: "update:page", page: E };
    U.emit(se), t("update:page", E);
  }
  Ss(() => {
    ee();
  });
  const L = { debounce: g.searchDebounce, maxWait: g.searchMaxWait };
  function W() {
    C.top || C["top.left"] || (g.search = P.value), (C.top || C["top.left"]) && (P.value = l.search || "");
    const E = j(g), K = { drilldown: { ...l, ...E, search: P.value }, search: P.value };
    U.emit(K), t("update:search", K);
  }
  function G(E) {
    g.sortBy = E;
    const K = j(g), se = { drilldown: { ...l, ...K, sortBy: E }, name: "update:sortBy", sortBy: E };
    U.emit(se), t("update:sortBy", E);
  }
  function z() {
  }
  return Ua(() => l.search, () => {
    W();
  }, L), Ua(P, () => {
    C.top || C["top.left"] || W();
  }, L), (E, K) => {
    const se = xs("VDrilldownTable", !0);
    return b(_) ? (ne(), we(Xa(b(_)), te({ key: 0 }, E.$attrs, { modelValue: b(g).modelValue, "onUpdate:modelValue": [K[5] || (K[5] = (Y) => b(g).modelValue = Y), z], class: b(M), "data-vdt-id": b(k), density: b(V), "expand-on-click": b(u), expanded: b(g).expanded, "fixed-header": b(g).fixedHeader, "group-by": b(g).groupBy, headers: b(g).headers, height: b(g).height, "hide-no-data": b(O), hover: b(h), "item-selectable": b(g).itemSelectable, "item-value": b(g).itemValue, items: b(g).items, "items-length": b(g).itemsLength, "items-per-page": b(g).itemsPerPage, "items-per-page-options": b(y), loading: (!b(x) || b(C).loading) && b(g).loading, "multi-sort": b(g).multiSort, "must-sort": b(g).mustSort, "no-data-text": b(g).noDataText, page: b(g).page, "return-object": b(g).returnObject, search: b(P), "select-strategy": b(g).selectStrategy, "show-expand": b(g).showExpand, "sort-by": b(D), style: b(H), "onUpdate:itemsPerPage": X, "onUpdate:page": Z, "onUpdate:sortBy": G }), dt({ top: fe((Y) => [(ne(), we(b(pc), { key: E.level, items: b(g).items, level: b(g).level, loading: b(g).loading, "search-container-cols": b(g).searchContainerCols, "search-props": b(g).searchProps, "show-search": b(g).showSearch ?? !1, "slot-props": Y, "onUpdate:search": K[0] || (K[0] = (Q) => P.value = Q) }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-props", "show-search", "slot-props"]))]), headers: fe((Y) => [(ne(), we(b(Ju), { key: E.level, colorPercentageChange: b(s), colorPercentageDirection: b(r), colors: b(g).colors, "column-widths": b(g).columnWidths, density: b(V), headerBackgroundColor: b(o).headerBackgroundColor, headerColor: b(c), items: b(g).items, level: E.level, "loader-props": b(S), "loader-settings": { colspan: Y.columns.length, loaderType: b(x), loading: b(g).loading, loadingText: E.loadingText }, "match-column-widths": b(g).matchColumnWidths, "select-strategy": b(g).selectStrategy, "show-select": b(g).showSelect, "slot-props": { ...Y }, "sort-asc-icon": b(F), "sort-by": b(g).sortBy, "table-model-value": b(g).modelValue }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "column-widths", "density", "headerBackgroundColor", "headerColor", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: fe((Y) => [(ne(), we(b(ac), { key: E.level, density: b(V), "expand-on-click": b(u), "group-by": b(g).groupBy, "item-selectable": b(g).itemSelectable, items: b(g).items, level: b(g).level, levels: b(g).levels, "show-expand": b(g).showExpand, "show-select": b(g).showSelect, "slot-props": { level: E.level, ...Y }, "onClick:row": K[1] || (K[1] = (Q) => {
      t("click:row", Q);
    }), "onClick:row:checkbox": K[2] || (K[2] = (Q) => {
      t("click:row:checkbox", Q);
    }), "onUpdate:expanded": K[3] || (K[3] = (Q) => N(Q)) }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["density", "expand-on-click", "group-by", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": fe(({ columns: Y, item: Q, internalItem: re }) => {
      var ie, he, je, kt, el, tl, Ot, Wn, zn, Gn, Hn;
      return [Ke("tr", { class: ge(T((ie = Q[E.itemChildrenKey]) == null ? void 0 : ie.loading) ? "" : "d-none") }, [Ke("td", { class: "px-0 ma-0", colspan: Y.length, style: { "vertical-align": "top" } }, [(ne(), we(se, { key: re.key, "column-widths": b(g).columnWidths, defaultColors: b(o).defaultColors, density: b(V), drilldown: b(g), "footer-background-color": b(v), "footer-color": b(f), "header-background-color": b(p), "header-color": b(c), headers: (he = Q[E.itemChildrenKey]) == null ? void 0 : he.headers, "is-drilldown": !0, item: Q, items: (je = Q[E.itemChildrenKey]) == null ? void 0 : je.items, "items-length": (kt = Q[E.itemChildrenKey]) == null ? void 0 : kt.itemsLength, "items-per-page": (el = Q[E.itemChildrenKey]) == null ? void 0 : el.itemsPerPage, level: E.level + 1, levels: b(g).levels, loaderProps: (tl = Q[E.itemChildrenKey]) == null ? void 0 : tl.loaderProps, loaderType: (Ot = Q[E.itemChildrenKey]) == null ? void 0 : Ot.loaderType, loading: (Wn = Q[E.itemChildrenKey]) == null ? void 0 : Wn.loading, loadingText: E.loadingText, "match-column-widths": b(g).matchColumnWidths, "multi-sort": (zn = Q[E.itemChildrenKey]) == null ? void 0 : zn.multiSort, "no-data-text": b(g).noDataText, server: (Gn = Q[E.itemChildrenKey]) == null ? void 0 : Gn.server, "show-footer-row": (Hn = Q[E.itemChildrenKey]) == null ? void 0 : Hn.showFooterRow, "sort-by": b(g).sortBy, "table-type": b(_), "onUpdate:drilldown": K[4] || (K[4] = (ll) => N(ll)), "onUpdate:modelValue": z }, dt({ default: fe(() => [(ne(!0), ye(pe, null, He(Object.keys(b(C)), (ll) => be(E.$slots, ll)), 256))]), _: 2 }, [He(b(C), (ll, Kn) => ({ name: Kn, fn: fe((is) => [be(E.$slots, Kn, _e(We({ ...is })))]) }))]), 1032, ["column-widths", "defaultColors", "density", "drilldown", "footer-background-color", "footer-color", "header-background-color", "header-color", "headers", "item", "items", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "show-footer-row", "sort-by", "table-type"]))], 8, mc)], 2)];
    }), "footer.prepend": fe(() => [b(C)["footer.prepend"] ? be(E.$slots, "footer.prepend", { key: 0 }) : Ce("", !0)]), _: 2 }, [b(C).loader ? { name: "loader", fn: fe(() => [be(E.$slots, "loader")]), key: "0" } : void 0, b(C).loading ? { name: "loading", fn: fe(() => [be(E.$slots, "loading")]), key: "1" } : void 0, b(C).thead ? { name: "thead", fn: fe((Y) => [be(E.$slots, "thead", _e(We({ ...Y, columnWidths: b(g).columnWidths, items: b(g).items, loaderSettings: { colspan: Y.columns.length, loaderType: b(x), loading: b(g).loading, loadingText: E.loadingText }, matchColumnWidths: b(g).matchColumnWidths, selectStrategy: b(g).selectStrategy, sortBy: b(g).sortBy })))]), key: "2" } : void 0, b(C).body ? { name: "body", fn: fe((Y) => [be(E.$slots, "body", _e(We({ ...Y })))]), key: "3" } : void 0, b(C)["group-header"] ? { name: "group-header", fn: fe((Y) => [be(E.$slots, "group-header", _e(We({ ...Y })))]), key: "4" } : void 0, b(C).tbody ? { name: "tbody", fn: fe((Y) => [be(E.$slots, "tbody", _e(We({ ...Y })))]), key: "5" } : void 0, b(C)["no-data"] ? { name: "no-data", fn: fe(() => [be(E.$slots, "no-data")]), key: "6" } : void 0, b(C).tfoot || E.showFooterRow ? { name: "tfoot", fn: fe((Y) => [b(C).tfoot ? be(E.$slots, "tfoot", _e(te({ key: 0 }, { ...Y }))) : (ne(), we(b(dc), { key: E.level, colorPercentageChange: b(s), colorPercentageDirection: b(r), colors: b(g).colors, density: b(V), footerBackgroundColor: b(v), footerColor: b(f), footers: b(g).footers || [], items: b(g).items, level: b(g).level, "select-strategy": b(g).selectStrategy, "show-select": b(g).showSelect, "slot-props": { ...Y }, "table-model-value": b(g).modelValue }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "density", "footerBackgroundColor", "footerColor", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "7" } : void 0, b(C).bottom ? { name: "bottom", fn: fe((Y) => [(ne(), we(b(Mu), { key: E.level, "slot-props": Y }, dt({ _: 2 }, [He(b(C), (Q, re) => ({ name: re, fn: fe((ie) => [be(E.$slots, re, _e(We({ ...ie })))]) }))]), 1032, ["slot-props"]))]), key: "8" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "fixed-header", "group-by", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : Ce("", !0);
  };
} }), ss = Symbol();
function Sc(e = {}) {
  return { install: (n) => {
    n.provide(ss, e), n.component("VDrilldownTable", yc);
  } };
}
export {
  yc as VDrilldownTable,
  Sc as createVDrilldownTable,
  yc as default,
  ss as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".v-drilldown-table--loader-tr[data-v-b954d026]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-b954d026]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-b954d026]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-b954d026]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-315f818f]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-315f818f]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-315f818f]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-315f818f],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-315f818f]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-315f818f]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-315f818f]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-315f818f]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-315f818f],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-315f818f],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-315f818f]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-315f818f]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-91892b42]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgba(var(--v-border-color), var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-bottom:var(--vdt-border);border-top:0!important}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-bottom:var(--vdt-border)!important;border-top:0!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-bottom:var(--vdt-border)!important;border-top:0!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{box-shadow:none}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>th{box-shadow:none!important}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>td{background:unset}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
