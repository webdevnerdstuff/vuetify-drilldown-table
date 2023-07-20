import { Fragment as ae, reactive as $t, computed as y, watchEffect as Re, toRefs as ca, capitalize as Vt, warn as pl, watch as Z, onScopeDispose as Be, effectScope as Gl, ref as G, unref as b, provide as ye, inject as ve, shallowRef as ie, defineComponent as Xe, camelize as da, h as gt, getCurrentInstance as mr, TransitionGroup as gr, Transition as nt, createVNode as c, mergeProps as J, nextTick as Ie, isRef as yt, onMounted as at, toRaw as qe, resolveDynamicComponent as pa, toRef as z, readonly as Kl, Teleport as yr, withDirectives as $e, vShow as ht, resolveDirective as Ye, onBeforeUnmount as ot, Text as hr, onBeforeMount as ql, cloneVNode as br, createTextVNode as Yt, withModifiers as $l, renderSlot as de, resolveComponent as va, openBlock as Y, createElementBlock as ce, normalizeClass as se, normalizeStyle as Ae, createElementVNode as Me, createBlock as me, withCtx as re, normalizeProps as be, guardReactiveProps as Ve, createCommentVNode as ge, toDisplayString as Sr, useSlots as Et, renderList as Le, toHandlers as wr, getCurrentScope as xr, mergeDefaults as kr, useAttrs as Cr, onUnmounted as Br, createSlots as et } from "vue";
import { useTheme as vl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-12
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
function fa(e, l, t) {
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
function rt(e, l) {
  if (e === l)
    return !0;
  if (e instanceof Date && l instanceof Date && e.getTime() !== l.getTime() || e !== Object(e) || l !== Object(l))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(l).length && t.every((n) => rt(e[n], l[n]));
}
function Xt(e, l, t) {
  return e != null && l && typeof l == "string" ? e[l] !== void 0 ? e[l] : fa(e, (l = (l = l.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function xe(e, l, t) {
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
    return fa(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
function Vl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (t, n) => l + n);
}
function X(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${l}` : void 0;
}
function El(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Il(e) {
  return e && "$el" in e ? e.$el : e;
}
const Sn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function It(e, l, t) {
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    l.some((a) => a instanceof RegExp ? a.test(r) : a === r) && !(t != null && t.some((a) => a === r)) ? n[r] = e[r] : o[r] = e[r];
  return [n, o];
}
function Ul(e, l) {
  const t = { ...e };
  return l.forEach((n) => delete t[n]), t;
}
function Yl(e) {
  return It(e, ["class", "style", "id", /^data-/]);
}
function De(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function tt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(l, Math.min(t, e));
}
function it() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const o in e)
    n[o] = e[o];
  for (const o in l) {
    const r = e[o], a = l[o];
    El(r) && El(a) ? n[o] = it(r, a, t) : Array.isArray(r) && Array.isArray(a) && t ? n[o] = t(r, a) : n[o] = a;
  }
  return n;
}
function ma(e) {
  return e.map((l) => l.type === ae ? ma(l.children) : l).flat();
}
function lt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (lt.cache.has(e))
    return lt.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return lt.cache.set(e, l), l;
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
  const l = $t({}), t = y(e);
  return Re(() => {
    for (const n in t.value)
      l[n] = t.value[n];
  }, { flush: "sync" }), ca(l);
}
function Jt(e, l) {
  return e.includes(l);
}
lt.cache = /* @__PURE__ */ new Map();
const Pr = /^on[^a-z]/, Ol = (e) => Pr.test(e);
function wn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ne = () => [Function, Array];
function xn(e, l) {
  return !!(e[l = "on" + Vt(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function Zt(e, l) {
  var o, r, a;
  const t = function(s) {
    const i = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((u) => `${u}:not([tabindex="-1"]):not([disabled])`).join(", ");
    return [...s.querySelectorAll(i)];
  }(e), n = t.indexOf(document.activeElement);
  if (l)
    if (l === "first")
      (o = t[0]) == null || o.focus();
    else if (l === "last")
      (r = t.at(-1)) == null || r.focus();
    else {
      let s, i = n;
      const u = l === "next" ? 1 : -1;
      do
        i += u, s = t[i];
      while ((!s || s.offsetParent == null) && i < t.length && i >= 0);
      s ? s.focus() : Zt(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((a = t[0]) == null || a.focus());
}
function Ht(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
const ga = ["top", "bottom"], _r = ["start", "end", "left", "right"];
function Dl(e, l) {
  let [t, n] = e.split(" ");
  return n || (n = Jt(ga, t) ? "start" : Jt(_r, t) ? "top" : "center"), { side: kn(t, l), align: kn(n, l) };
}
function kn(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function wl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function xl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Cn(e) {
  return { side: e.align, align: e.side };
}
function Bn(e) {
  return Jt(ga, e.side) ? "y" : "x";
}
class pt {
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
function Pn(e, l) {
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
        return new pt(l);
      o = n.slice(7, -1).split(/, /), r = +o[0], a = +o[3], s = +o[4], i = +o[5];
    }
    const u = t.transformOrigin, f = l.x - s - (1 - r) * parseFloat(u), p = l.y - i - (1 - a) * parseFloat(u.slice(u.indexOf(" ") + 1)), d = r ? l.width / r : e.offsetWidth + 1, v = a ? l.height / a : e.offsetHeight + 1;
    return new pt({ x: f, y: p, width: d, height: v });
  }
  return new pt(l);
}
function ut(e, l, t) {
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
function Zl(e) {
  pl(`Vuetify: ${e}`);
}
function _n(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function R(e, l) {
  return (t) => Object.keys(e).reduce((n, o) => {
    const r = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return n[o] = t && o in t ? { ...r, default: t[o] } : r, l && !n[o].source && (n[o].source = l), n;
  }, {});
}
const oe = R({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function Ue(e, l) {
  let t;
  function n() {
    t = Gl(), t.run(() => l.length ? l(() => {
      t == null || t.stop(), n();
    }) : l());
  }
  Z(e, (o) => {
    o && !t ? n() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Be(() => {
    t == null || t.stop();
  });
}
const Ql = Symbol.for("vuetify:defaults");
function en() {
  const e = ve(Ql);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Je(e, l) {
  const t = en(), n = G(e), o = y(() => {
    if (b(l == null ? void 0 : l.disabled))
      return t.value;
    const r = b(l == null ? void 0 : l.scoped), a = b(l == null ? void 0 : l.reset), s = b(l == null ? void 0 : l.root);
    let i = it(n.value, { prev: t.value });
    if (r)
      return i;
    if (a || s) {
      const u = Number(a || 1 / 0);
      for (let f = 0; f <= u && i && "prev" in i; f++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = it(it(i, { prev: i }), i[s])), i;
    }
    return i.prev ? it(i.prev, i) : i;
  });
  return ye(Ql, o), o;
}
function Ar() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : en();
  const n = Se("useDefaults");
  if (l = l ?? n.type.name ?? n.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const o = y(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? l];
  }), r = new Proxy(e, { get(s, i) {
    var f, p, d, v;
    const u = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(f = o.value) == null ? void 0 : f[i], u].filter((g) => g != null) : typeof i != "string" || function(g, h) {
      var m, x;
      return ((m = g.props) == null ? void 0 : m[h]) !== void 0 || ((x = g.props) == null ? void 0 : x[lt(h)]) !== void 0;
    }(n.vnode, i) ? u : ((p = o.value) == null ? void 0 : p[i]) ?? ((v = (d = t.value) == null ? void 0 : d.global) == null ? void 0 : v[i]) ?? u;
  } }), a = ie();
  return Re(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((i) => {
        let [u] = i;
        return u.startsWith(u[0].toUpperCase());
      });
      s.length && (a.value = Object.fromEntries(s));
    }
  }), { props: r, provideSubDefaults: function() {
    Ue(a, () => {
      var s;
      Je(it(((s = function(i) {
        const { provides: u } = Se("injectSelf");
        if (u && i in u)
          return u[i];
      }(Ql)) == null ? void 0 : s.value) ?? {}, a.value));
    });
  } };
}
function vt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Zl("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = R(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(t) {
      return It(t, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, n) {
      const o = en();
      if (!o.value)
        return e._setup(t, n);
      const { props: r, provideSubDefaults: a } = Ar(t, t._as ?? e.name, o), s = e._setup(r, n);
      return a(), s;
    };
  }
  return e;
}
function q() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? vt : Xe)(l);
}
function ya(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return q()({ name: t ?? Vt(da(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...oe() }, setup(n, o) {
    let { slots: r } = o;
    return () => {
      var a;
      return gt(n.tag, { class: [e, n.class], style: n.style }, (a = r.default) == null ? void 0 : a.call(r));
    };
  } });
}
function ha(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const Qt = "cubic-bezier(0.4, 0, 0.2, 1)";
function Se(e, l) {
  const t = mr();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return t;
}
function We() {
  const e = Se(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return lt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ba = 0, qt = /* @__PURE__ */ new WeakMap();
function je() {
  const e = Se("getUid");
  if (qt.has(e))
    return qt.get(e);
  {
    const l = ba++;
    return qt.set(e, l), l;
  }
}
function Sa(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (l ? Fr(e) : tn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function el(e, l) {
  const t = [];
  if (l && e && !l.contains(e))
    return t;
  for (; e && (tn(e) && t.push(e), e !== l); )
    e = e.parentElement;
  return t;
}
function tn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Fr(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(l.overflowY);
}
je.reset = () => {
  ba = 0, qt = /* @__PURE__ */ new WeakMap();
};
const Oe = typeof window < "u", ln = Oe && "IntersectionObserver" in window, Tl = Oe && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function le(e) {
  Se("useRender").render = e;
}
const $r = R({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function _e(e, l, t) {
  return q()({ name: e, props: $r({ mode: t, origin: l }), setup(n, o) {
    let { slots: r } = o;
    const a = { onBeforeEnter(s) {
      n.origin && (s.style.transformOrigin = n.origin);
    }, onLeave(s) {
      if (n.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: u, offsetWidth: f, offsetHeight: p } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${i}px`, s.style.left = `${u}px`, s.style.width = `${f}px`, s.style.height = `${p}px`;
      }
      n.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (n.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: i, top: u, left: f, width: p, height: d } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = i || "", s.style.top = u || "", s.style.left = f || "", s.style.width = p || "", s.style.height = d || "";
      }
    } };
    return () => {
      const s = n.group ? gr : nt;
      return gt(s, { name: n.disabled ? "" : e, css: !n.disabled, ...n.group ? void 0 : { mode: n.mode }, ...n.disabled ? {} : a }, r.default);
    };
  } });
}
function wa(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return q()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(n, o) {
    let { slots: r } = o;
    return () => gt(nt, { name: n.disabled ? "" : e, css: !n.disabled, ...n.disabled ? {} : l }, r.default);
  } });
}
function xa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = da(`offset-${l}`);
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
const Vr = R({ target: Object }, "v-dialog-transition"), ka = q()({ name: "VDialogTransition", props: Vr(), setup(e, l) {
  let { slots: t } = l;
  const n = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, r) {
    var d;
    await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), o.style.visibility = "";
    const { x: a, y: s, sx: i, sy: u, speed: f } = Fn(e.target, o), p = ut(o, [{ transform: `translate(${a}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }, {}], { duration: 225 * f, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (d = An(o)) == null || d.forEach((v) => {
      ut(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * f, easing: Qt });
    }), p.finished.then(() => r());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, r) {
    var p;
    await new Promise((d) => requestAnimationFrame(d));
    const { x: a, y: s, sx: i, sy: u, speed: f } = Fn(e.target, o);
    ut(o, [{}, { transform: `translate(${a}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }], { duration: 125 * f, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => r()), (p = An(o)) == null || p.forEach((d) => {
      ut(d, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * f, easing: Qt });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? c(nt, J({ name: "dialog-transition" }, n, { css: !1 }), t) : c(nt, { name: "dialog-transition" }, t);
} });
function An(e) {
  var t;
  const l = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return l && [...l];
}
function Fn(e, l) {
  const t = e.getBoundingClientRect(), n = Jl(l), [o, r] = getComputedStyle(l).transformOrigin.split(" ").map((x) => parseFloat(x)), [a, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  a === "left" || s === "left" ? i -= t.width / 2 : a !== "right" && s !== "right" || (i += t.width / 2);
  let u = t.top + t.height / 2;
  a === "top" || s === "top" ? u -= t.height / 2 : a !== "bottom" && s !== "bottom" || (u += t.height / 2);
  const f = t.width / n.width, p = t.height / n.height, d = Math.max(1, f, p), v = f / d || 0, g = p / d || 0, h = n.width * n.height / (window.innerWidth * window.innerHeight), m = h > 0.12 ? Math.min(1.5, 10 * (h - 0.12) + 1) : 1;
  return { x: i - (o + n.left), y: u - (r + n.top), sx: v, sy: g, speed: m };
}
_e("fab-transition", "center center", "out-in"), _e("dialog-bottom-transition"), _e("dialog-top-transition"), _e("fade-transition"), _e("scale-transition"), _e("scroll-x-transition"), _e("scroll-x-reverse-transition"), _e("scroll-y-transition"), _e("scroll-y-reverse-transition"), _e("slide-x-transition"), _e("slide-x-reverse-transition");
const Ca = _e("slide-y-transition");
_e("slide-y-reverse-transition");
const Er = wa("expand-transition", xa()), Ba = wa("expand-x-transition", xa("", !0)), Ir = R({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ee = q(!1)({ name: "VDefaultsProvider", props: Ir(), setup(e, l) {
  let { slots: t } = l;
  const { defaults: n, disabled: o, reset: r, root: a, scoped: s } = ca(e);
  return Je(n, { reset: r, root: a, scoped: s, disabled: o }), () => {
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
const Pa = { static: function() {
}, connected: function(e, l, t) {
  (function(v) {
    for (; v; ) {
      if (window.getComputedStyle(v).position === "fixed")
        return !0;
      v = v.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: n, preferredOrigin: o } = Xl(() => {
    const v = Dl(l.location, e.isRtl.value), g = l.origin === "overlap" ? v : l.origin === "auto" ? wl(v) : Dl(l.origin, e.isRtl.value);
    return v.side === g.side && v.align === xl(g).align ? { preferredAnchor: Cn(v), preferredOrigin: Cn(g) } : { preferredAnchor: v, preferredOrigin: g };
  }), [r, a, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => y(() => {
    const g = parseFloat(l[v]);
    return isNaN(g) ? 1 / 0 : g;
  })), u = y(() => {
    if (Array.isArray(l.offset))
      return l.offset;
    if (typeof l.offset == "string") {
      const v = l.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof l.offset == "number" ? [l.offset, 0] : [0, 0];
  });
  let f = !1;
  const p = new ResizeObserver(() => {
    f && d();
  });
  function d() {
    if (f = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => f = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const v = e.activatorEl.value.getBoundingClientRect(), g = function(w, D) {
      D ? w.style.removeProperty("left") : w.style.removeProperty("right");
      const S = Jl(w);
      return D ? S.x += parseFloat(w.style.right || 0) : S.x -= parseFloat(w.style.left || 0), S.y -= parseFloat(w.style.top || 0), S;
    }(e.contentEl.value, e.isRtl.value), h = el(e.contentEl.value);
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const m = h.reduce((w, D) => {
      const S = D.getBoundingClientRect(), V = new pt({ x: D === document.documentElement ? 0 : S.x, y: D === document.documentElement ? 0 : S.y, width: D.clientWidth, height: D.clientHeight });
      return w ? new pt({ x: Math.max(w.left, V.left), y: Math.max(w.top, V.top), width: Math.min(w.right, V.right) - Math.max(w.left, V.left), height: Math.min(w.bottom, V.bottom) - Math.max(w.top, V.top) }) : V;
    }, void 0);
    m.x += 12, m.y += 12, m.width -= 24, m.height -= 24;
    let x = { anchor: n.value, origin: o.value };
    function C(w) {
      const D = new pt(g), S = $n(w.anchor, v), V = $n(w.origin, D);
      let { x: O, y: F } = (I = V, { x: ($ = S).x - I.x, y: $.y - I.y });
      var $, I;
      switch (w.anchor.side) {
        case "top":
          F -= u.value[0];
          break;
        case "bottom":
          F += u.value[0];
          break;
        case "left":
          O -= u.value[0];
          break;
        case "right":
          O += u.value[0];
      }
      switch (w.anchor.align) {
        case "top":
          F -= u.value[1];
          break;
        case "bottom":
          F += u.value[1];
          break;
        case "left":
          O -= u.value[1];
          break;
        case "right":
          O += u.value[1];
      }
      return D.x += O, D.y += F, D.width = Math.min(D.width, s.value), D.height = Math.min(D.height, i.value), { overflows: Pn(D, m), x: O, y: F };
    }
    let k = 0, _ = 0;
    const A = { x: 0, y: 0 }, E = { x: !1, y: !1 };
    let B = -1;
    for (; ; ) {
      if (B++ > 10) {
        pl("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: w, y: D, overflows: S } = C(x);
      k += w, _ += D, g.x += w, g.y += D;
      {
        const V = Bn(x.anchor), O = S.x.before || S.x.after, F = S.y.before || S.y.after;
        let $ = !1;
        if (["x", "y"].forEach((I) => {
          if (I === "x" && O && !E.x || I === "y" && F && !E.y) {
            const M = { anchor: { ...x.anchor }, origin: { ...x.origin } }, L = I === "x" ? V === "y" ? xl : wl : V === "y" ? wl : xl;
            M.anchor = L(M.anchor), M.origin = L(M.origin);
            const { overflows: N } = C(M);
            (N[I].before <= S[I].before && N[I].after <= S[I].after || N[I].before + N[I].after < (S[I].before + S[I].after) / 2) && (x = M, $ = E[I] = !0);
          }
        }), $)
          continue;
      }
      S.x.before && (k += S.x.before, g.x += S.x.before), S.x.after && (k -= S.x.after, g.x -= S.x.after), S.y.before && (_ += S.y.before, g.y += S.y.before), S.y.after && (_ -= S.y.after, g.y -= S.y.after);
      {
        const V = Pn(g, m);
        A.x = m.width - V.x.before - V.x.after, A.y = m.height - V.y.before - V.y.after, k += V.x.before, g.x += V.x.before, _ += V.y.before, g.y += V.y.before;
      }
      break;
    }
    const P = Bn(x.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: X(Cl(_)), left: e.isRtl.value ? void 0 : X(Cl(k)), right: e.isRtl.value ? X(Cl(-k)) : void 0, minWidth: X(P === "y" ? Math.min(r.value, v.width) : r.value), maxWidth: X(Vn(tt(A.x, r.value === 1 / 0 ? 0 : r.value, s.value))), maxHeight: X(Vn(tt(A.y, a.value === 1 / 0 ? 0 : a.value, i.value))) }), { available: A, contentBox: g };
  }
  return Z([e.activatorEl, e.contentEl], (v, g) => {
    let [h, m] = v, [x, C] = g;
    x && p.unobserve(x), h && p.observe(h), C && p.unobserve(C), m && p.observe(m);
  }, { immediate: !0 }), Be(() => {
    p.disconnect();
  }), Z(() => [n.value, o.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => d()), Ie(() => {
    const v = d();
    if (!v)
      return;
    const { available: g, contentBox: h } = v;
    h.height > g.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), { updateLocation: d };
} }, Or = R({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Pa }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Cl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Vn(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ll = !0;
const tl = [];
let En = -1;
function Ml() {
  cancelAnimationFrame(En), En = requestAnimationFrame(() => {
    const e = tl.shift();
    e && e(), tl.length ? Ml() : Ll = !0;
  });
}
const Ut = { none: null, close: function(e) {
  In(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, n = [.../* @__PURE__ */ new Set([...el(e.activatorEl.value, l.contained ? t : void 0), ...el(e.contentEl.value, l.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, r = (a = t || document.documentElement, tn(a) && a);
  var a;
  r && e.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((i, u) => {
    i.style.setProperty("--v-body-scroll-x", X(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", X(-i.scrollTop)), i !== document.documentElement && i.style.setProperty("--v-scrollbar-offset", X(o)), i.classList.add("v-overlay-scroll-blocked");
  }), Be(() => {
    n.forEach((i, u) => {
      const f = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), p = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -f, i.scrollTop = -p;
    }), r && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, t) {
  let n = !1, o = -1, r = -1;
  function a(s) {
    var i;
    i = () => {
      var p, d;
      const u = performance.now();
      (d = (p = e.updateLocation).value) == null || d.call(p, s), n = (performance.now() - u) / (1e3 / 60) > 2;
    }, !Ll || tl.length ? (tl.push(i), Ml()) : (Ll = !1, i(), Ml());
  }
  r = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      In(e.activatorEl.value ?? e.contentEl.value, (s) => {
        n ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            a(s);
          });
        })) : a(s);
      });
    });
  }), Be(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(r), cancelAnimationFrame(o);
  });
} }, Dr = R({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Ut } }, "VOverlay-scroll-strategies");
function In(e, l) {
  const t = [document, ...el(e)];
  t.forEach((n) => {
    n.addEventListener("scroll", l, { passive: !0 });
  }), Be(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", l);
    });
  });
}
const Nl = Symbol.for("vuetify:v-menu"), Tr = R({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Lr = R({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Tr() }, "VOverlay-activator");
function Mr(e, l) {
  let { isActive: t, isTop: n } = l;
  const o = G();
  let r = !1, a = !1, s = !0;
  const i = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), u = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: f, runCloseDelay: p } = function(B, P) {
    const w = {}, D = (S) => () => {
      if (!Oe)
        return Promise.resolve(!0);
      const V = S === "openDelay";
      return w.closeDelay && window.clearTimeout(w.closeDelay), delete w.closeDelay, w.openDelay && window.clearTimeout(w.openDelay), delete w.openDelay, new Promise((O) => {
        const F = parseInt(B[S] ?? 0, 10);
        w[S] = window.setTimeout(() => {
          P == null || P(V), O(V);
        }, F);
      });
    };
    return { runCloseDelay: D("closeDelay"), runOpenDelay: D("openDelay") };
  }(e, (B) => {
    B !== (e.openOnHover && r || i.value && a) || e.openOnHover && t.value && !n.value || (t.value !== B && (s = !0), t.value = B);
  }), d = (B) => {
    B.stopPropagation(), o.value = B.currentTarget || B.target, t.value = !t.value;
  }, v = (B) => {
    var P;
    (P = B.sourceCapabilities) != null && P.firesTouchEvents || (r = !0, o.value = B.currentTarget || B.target, f());
  }, g = (B) => {
    r = !1, p();
  }, h = (B) => {
    Tl && !B.target.matches(":focus-visible") || (a = !0, B.stopPropagation(), o.value = B.currentTarget || B.target, f());
  }, m = (B) => {
    a = !1, B.stopPropagation(), p();
  }, x = y(() => {
    const B = {};
    return u.value && (B.onClick = d), e.openOnHover && (B.onMouseenter = v, B.onMouseleave = g), i.value && (B.onFocus = h, B.onBlur = m), B;
  }), C = y(() => {
    const B = {};
    if (e.openOnHover && (B.onMouseenter = () => {
      r = !0, f();
    }, B.onMouseleave = () => {
      r = !1, p();
    }), i.value && (B.onFocusin = () => {
      a = !0, f();
    }, B.onFocusout = () => {
      a = !1, p();
    }), e.closeOnContentClick) {
      const P = ve(Nl, null);
      B.onClick = () => {
        t.value = !1, P == null || P.closeParents();
      };
    }
    return B;
  }), k = y(() => {
    const B = {};
    return e.openOnHover && (B.onMouseenter = () => {
      s && (r = !0, s = !1, f());
    }, B.onMouseleave = () => {
      r = !1, p();
    }), B;
  });
  Z(n, (B) => {
    !B || (!e.openOnHover || r || i.value && a) && (!i.value || a || e.openOnHover && r) || (t.value = !1);
  });
  const _ = G();
  Re(() => {
    _.value && Ie(() => {
      o.value = Il(_.value);
    });
  });
  const A = Se("useActivator");
  let E;
  return Z(() => !!e.activator, (B) => {
    B && Oe ? (E = Gl(), E.run(() => {
      (function(P, w, D) {
        let { activatorEl: S, activatorEvents: V } = D;
        function O() {
          let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $(), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.activatorProps;
          I && function(L, N) {
            Object.keys(N).forEach((H) => {
              if (Ol(H)) {
                const K = wn(H), T = Wt.get(L);
                if (N[H] == null)
                  T == null || T.forEach((j) => {
                    const [W, U] = j;
                    W === K && (L.removeEventListener(K, U), T.delete(j));
                  });
                else if (!T || ![...T].some((j) => j[0] === K && j[1] === N[H])) {
                  L.addEventListener(K, N[H]);
                  const j = T || /* @__PURE__ */ new Set();
                  j.add([K, N[H]]), Wt.has(L) || Wt.set(L, j);
                }
              } else
                N[H] == null ? L.removeAttribute(H) : L.setAttribute(H, N[H]);
            });
          }(I, J(V.value, M));
        }
        function F() {
          let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $(), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.activatorProps;
          I && function(L, N) {
            Object.keys(N).forEach((H) => {
              if (Ol(H)) {
                const K = wn(H), T = Wt.get(L);
                T == null || T.forEach((j) => {
                  const [W, U] = j;
                  W === K && (L.removeEventListener(K, U), T.delete(j));
                });
              } else
                L.removeAttribute(H);
            });
          }(I, J(V.value, M));
        }
        function $() {
          var L, N;
          let I, M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P.activator;
          if (M)
            if (M === "parent") {
              let H = (N = (L = w == null ? void 0 : w.proxy) == null ? void 0 : L.$el) == null ? void 0 : N.parentNode;
              for (; H.hasAttribute("data-no-activator"); )
                H = H.parentNode;
              I = H;
            } else
              I = typeof M == "string" ? document.querySelector(M) : "$el" in M ? M.$el : M;
          return S.value = (I == null ? void 0 : I.nodeType) === Node.ELEMENT_NODE ? I : null, S.value;
        }
        Z(() => P.activator, (I, M) => {
          if (M && I !== M) {
            const L = $(M);
            L && F(L);
          }
          I && Ie(() => O());
        }, { immediate: !0 }), Z(() => P.activatorProps, () => {
          O();
        }), Be(() => {
          F();
        });
      })(e, A, { activatorEl: o, activatorEvents: x });
    })) : E && E.stop();
  }, { flush: "post", immediate: !0 }), Be(() => {
    E == null || E.stop();
  }), { activatorEl: o, activatorRef: _, activatorEvents: x, contentEvents: C, scrimEvents: k };
}
function nn(e) {
  return Xl(() => {
    const l = [], t = {};
    return e.value.background && (_n(e.value.background) ? t.backgroundColor = e.value.background : l.push(`bg-${e.value.background}`)), e.value.text && (_n(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: t };
  });
}
function He(e, l) {
  const t = y(() => ({ text: yt(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = nn(t);
  return { textColorClasses: n, textColorStyles: o };
}
function ft(e, l) {
  const t = y(() => ({ background: yt(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = nn(t);
  return { backgroundColorClasses: n, backgroundColorStyles: o };
}
const bt = R({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function St(e) {
  return { dimensionStyles: y(() => ({ height: X(e.height), maxHeight: X(e.maxHeight), maxWidth: X(e.maxWidth), minHeight: X(e.minHeight), minWidth: X(e.minWidth), width: X(e.width) })) };
}
const fl = ["sm", "md", "lg", "xl", "xxl"], Nr = Symbol.for("vuetify:display");
function _a() {
  const e = ve(Nr);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
const Rr = R({ eager: Boolean }, "lazy");
function fe(e, l, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const r = Se("useProxiedModel"), a = G(e[l] !== void 0 ? e[l] : t), s = lt(l), i = y(s !== l ? () => {
    var f, p, d, v;
    return e[l], !(!((f = r.vnode.props) != null && f.hasOwnProperty(l)) && !((p = r.vnode.props) != null && p.hasOwnProperty(s)) || !((d = r.vnode.props) != null && d.hasOwnProperty(`onUpdate:${l}`)) && !((v = r.vnode.props) != null && v.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var f, p;
    return e[l], !(!((f = r.vnode.props) != null && f.hasOwnProperty(l)) || !((p = r.vnode.props) != null && p.hasOwnProperty(`onUpdate:${l}`)));
  });
  Ue(() => !i.value, () => {
    Z(() => e[l], (f) => {
      a.value = f;
    });
  });
  const u = y({ get() {
    const f = e[l];
    return n(i.value ? f : a.value);
  }, set(f) {
    const p = o(f), d = qe(i.value ? e[l] : a.value);
    d !== p && n(d) !== f && (a.value = p, r == null || r.emit(`update:${l}`, p));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => i.value ? e[l] : a.value }), u;
}
const Aa = Symbol.for("vuetify:locale");
function wt() {
  const e = ve(Aa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ot() {
  const e = ve(Aa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function an(e, l) {
  const t = pa("RouterLink"), n = y(() => !(!e.href && !e.to)), o = y(() => (n == null ? void 0 : n.value) || xn(l, "click") || xn(e, "click"));
  if (typeof t == "string")
    return { isLink: n, isClickable: o, href: z(e, "href") };
  const r = e.to ? t.useLink(e) : void 0;
  return { isLink: n, isClickable: o, route: r == null ? void 0 : r.route, navigate: r == null ? void 0 : r.navigate, isActive: r && y(() => {
    var a, s;
    return e.exact ? (a = r.isExactActive) == null ? void 0 : a.value : (s = r.isActive) == null ? void 0 : s.value;
  }), href: y(() => e.to ? r == null ? void 0 : r.route.value.href : e.href) };
}
const on = R({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Bl = !1;
function Fa() {
  const e = Se("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const On = Symbol.for("vuetify:stack"), kt = $t([]), Dn = Symbol.for("vuetify:theme"), we = R({ theme: String }, "theme");
function Pe(e) {
  Se("provideTheme");
  const l = ve(Dn, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? (l == null ? void 0 : l.name.value)), n = y(() => l.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...l, name: t, themeClasses: n };
  return ye(Dn, o), o;
}
const Dt = R({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ke = (e, l) => {
  let { slots: t } = l;
  const { transition: n, disabled: o, ...r } = e, { component: a = nt, ...s } = typeof n == "object" ? n : {};
  return gt(a, J(typeof n == "string" ? { name: o ? "" : n } : s, r, { disabled: o }), t);
};
function jr() {
  return !0;
}
function Tn(e, l, t) {
  if (!e || $a(e, t) === !1)
    return !1;
  const n = ha(l);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(l), !o.some((r) => r == null ? void 0 : r.contains(e.target));
}
function $a(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || jr)(e);
}
function Ln(e, l) {
  const t = ha(e);
  l(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && l(t);
}
const Hr = { mounted(e, l) {
  const t = (o) => function(r, a, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    a._clickOutside.lastMousedownWasOutside && Tn(r, a, s) && setTimeout(() => {
      $a(r, s) && i && i(r);
    }, 0);
  }(o, e, l), n = (o) => {
    e._clickOutside.lastMousedownWasOutside = Tn(o, e, l);
  };
  Ln(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", n, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: t, onMousedown: n };
}, unmounted(e, l) {
  e._clickOutside && (Ln(e, (t) => {
    var r;
    if (!t || !((r = e._clickOutside) != null && r[l.instance.$.uid]))
      return;
    const { onClick: n, onMousedown: o } = e._clickOutside[l.instance.$.uid];
    t.removeEventListener("click", n, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function Wr(e) {
  const { modelValue: l, color: t, ...n } = e;
  return c(nt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && c("div", J({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, n), null)] });
}
const Va = R({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Lr(), ...oe(), ...bt(), ...Rr(), ...Or(), ...Dr(), ...we(), ...Dt() }, "VOverlay"), Mn = q()({ name: "VOverlay", directives: { ClickOutside: Hr }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Va() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var H, K;
  let { slots: t, attrs: n, emit: o } = l;
  const r = fe(e, "modelValue"), a = y({ get: () => r.value, set: (T) => {
    T && e.disabled || (r.value = T);
  } }), { teleportTarget: s } = (i = y(() => e.attach || e.contained), { teleportTarget: y(() => {
    const T = i.value;
    if (T === !0 || !Oe)
      return;
    const j = T === !1 ? document.body : typeof T == "string" ? document.querySelector(T) : T;
    if (j == null)
      return void pl(`Unable to locate target ${T}`);
    let W = j.querySelector(":scope > .v-overlay-container");
    return W || (W = document.createElement("div"), W.className = "v-overlay-container", j.appendChild(W)), W;
  }) });
  var i;
  const { themeClasses: u } = Pe(e), { rtlClasses: f, isRtl: p } = Ot(), { hasContent: d, onAfterLeave: v } = function(T, j) {
    const W = ie(!1), U = y(() => W.value || T.eager || j.value);
    return Z(j, () => W.value = !0), { isBooted: W, hasContent: U, onAfterLeave: function() {
      T.eager || (W.value = !1);
    } };
  }(e, a), g = ft(y(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: h, localTop: m, stackStyles: x } = function(T, j, W) {
    const U = Se("useStack"), ne = !W, ee = ve(On, void 0), Q = $t({ activeChildren: /* @__PURE__ */ new Set() });
    ye(On, Q);
    const ue = ie(+j.value);
    Ue(T, () => {
      var xt;
      const Te = (xt = kt.at(-1)) == null ? void 0 : xt[1];
      ue.value = Te ? Te + 10 : +j.value, ne && kt.push([U.uid, ue.value]), ee == null || ee.activeChildren.add(U.uid), Be(() => {
        if (ne) {
          const vr = qe(kt).findIndex((fr) => fr[0] === U.uid);
          kt.splice(vr, 1);
        }
        ee == null || ee.activeChildren.delete(U.uid);
      });
    });
    const Ce = ie(!0);
    ne && Re(() => {
      var xt;
      const Te = ((xt = kt.at(-1)) == null ? void 0 : xt[0]) === U.uid;
      setTimeout(() => Ce.value = Te);
    });
    const Sl = y(() => !Q.activeChildren.size);
    return { globalTop: Kl(Ce), localTop: Sl, stackStyles: y(() => ({ zIndex: ue.value })) };
  }(a, z(e, "zIndex"), e._disableGlobalStack), { activatorEl: C, activatorRef: k, activatorEvents: _, contentEvents: A, scrimEvents: E } = Mr(e, { isActive: a, isTop: m }), { dimensionStyles: B } = St(e), P = function() {
    if (!Oe)
      return ie(!1);
    const { ssr: T } = _a();
    if (T) {
      const j = ie(!1);
      return at(() => {
        j.value = !0;
      }), j;
    }
    return ie(!0);
  }(), { scopeId: w } = Fa();
  Z(() => e.disabled, (T) => {
    T && (a.value = !1);
  });
  const D = G(), S = G(), { contentStyles: V, updateLocation: O } = function(T, j) {
    const W = G({}), U = G();
    function ne(ee) {
      var Q;
      (Q = U.value) == null || Q.call(U, ee);
    }
    return Oe && (Ue(() => !(!j.isActive.value || !T.locationStrategy), (ee) => {
      var Q, ue;
      Z(() => T.locationStrategy, ee), Be(() => {
        U.value = void 0;
      }), typeof T.locationStrategy == "function" ? U.value = (Q = T.locationStrategy(j, T, W)) == null ? void 0 : Q.updateLocation : U.value = (ue = Pa[T.locationStrategy](j, T, W)) == null ? void 0 : ue.updateLocation;
    }), window.addEventListener("resize", ne, { passive: !0 }), Be(() => {
      window.removeEventListener("resize", ne), U.value = void 0;
    })), { contentStyles: W, updateLocation: U };
  }(e, { isRtl: p, contentEl: S, activatorEl: C, isActive: a });
  function F(T) {
    o("click:outside", T), e.persistent ? N() : a.value = !1;
  }
  function $() {
    return a.value && h.value;
  }
  function I(T) {
    var j, W;
    T.key === "Escape" && h.value && (e.persistent ? N() : (a.value = !1, (j = S.value) != null && j.contains(document.activeElement) && ((W = C.value) == null || W.focus())));
  }
  (function(T, j) {
    if (!Oe)
      return;
    let W;
    Re(async () => {
      W == null || W.stop(), j.isActive.value && T.scrollStrategy && (W = Gl(), await Ie(), W.active && W.run(() => {
        var U;
        typeof T.scrollStrategy == "function" ? T.scrollStrategy(j, T, W) : (U = Ut[T.scrollStrategy]) == null || U.call(Ut, j, T, W);
      }));
    }), Be(() => {
      W == null || W.stop();
    });
  })(e, { root: D, contentEl: S, activatorEl: C, isActive: a, updateLocation: O }), Oe && Z(a, (T) => {
    T ? window.addEventListener("keydown", I) : window.removeEventListener("keydown", I);
  }, { immediate: !0 });
  const M = (K = (H = Se("useRouter")) == null ? void 0 : H.proxy) == null ? void 0 : K.$router;
  Ue(() => e.closeOnBack, () => {
    (function(T, j) {
      let W, U, ne = !1;
      function ee(Q) {
        var ue;
        (ue = Q.state) != null && ue.replaced || (ne = !0, setTimeout(() => ne = !1));
      }
      Oe && (Ie(() => {
        window.addEventListener("popstate", ee), W = T == null ? void 0 : T.beforeEach((Q, ue, Ce) => {
          Bl ? ne ? j(Ce) : Ce() : setTimeout(() => ne ? j(Ce) : Ce()), Bl = !0;
        }), U = T == null ? void 0 : T.afterEach(() => {
          Bl = !1;
        });
      }), Be(() => {
        window.removeEventListener("popstate", ee), W == null || W(), U == null || U();
      }));
    })(M, (T) => {
      h.value && a.value ? (T(!1), e.persistent ? N() : a.value = !1) : T();
    });
  });
  const L = G();
  function N() {
    e.noClickAnimation || S.value && ut(S.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Qt });
  }
  return Z(() => a.value && (e.absolute || e.contained) && s.value == null, (T) => {
    if (T) {
      const j = Sa(D.value);
      j && j !== document.scrollingElement && (L.value = j.scrollTop);
    }
  }), le(() => {
    var T;
    return c(ae, null, [(T = t.activator) == null ? void 0 : T.call(t, { isActive: a.value, props: J({ ref: k }, _.value, e.activatorProps) }), P.value && d.value && c(yr, { disabled: !s.value, to: s.value }, { default: () => [c("div", J({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": a.value, "v-overlay--contained": e.contained }, u.value, f.value, e.class], style: [x.value, { top: X(L.value) }, e.style], ref: D }, w, n), [c(Wr, J({ color: g, modelValue: a.value && !!e.scrim }, E.value), null), c(Ke, { appear: !0, persisted: !0, transition: e.transition, target: C.value, onAfterLeave: () => {
      v(), o("afterLeave");
    } }, { default: () => {
      var j;
      return [$e(c("div", J({ ref: S, class: ["v-overlay__content", e.contentClass], style: [B.value, V.value] }, A.value, e.contentProps), [(j = t.default) == null ? void 0 : j.call(t, { isActive: a })]), [[ht, a.value], [Ye("click-outside"), { handler: F, closeConditional: $, include: () => [C.value] }]])];
    } })])] })]);
  }), { activatorEl: C, animateClick: N, contentEl: S, globalTop: h, localTop: m, updateLocation: O };
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
function rn(e) {
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
        const u = _l(i.value, r) ?? ("_" in i.value ? _l((s = i.value._) == null ? void 0 : s.setupState, r) : void 0);
        if (u)
          return u;
      }
      for (const i of t) {
        const u = i.value && i.value[Pl];
        if (!u)
          continue;
        const f = u.slice();
        for (; f.length; ) {
          const p = f.shift(), d = _l(p.value, r);
          if (d)
            return d;
          const v = p.value && p.value[Pl];
          v && f.push(...v);
        }
      }
    }
  } });
}
const zr = (e, l, t) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), Gr = R({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function Kr(e, l, t, n) {
  const o = G([]), r = G(/* @__PURE__ */ new Map()), a = y(() => n != null && n.transform ? b(l).map(n == null ? void 0 : n.transform) : b(l));
  return Re(() => {
    const s = typeof t == "function" ? t() : b(t), i = typeof s != "string" && typeof s != "number" ? "" : String(s), u = function(v, g, h) {
      var _;
      const m = [], x = (h == null ? void 0 : h.default) ?? zr, C = !!(h != null && h.filterKeys) && De(h.filterKeys), k = Object.keys((h == null ? void 0 : h.customKeyFilter) ?? {}).length;
      if (!(v != null && v.length))
        return m;
      e:
        for (let A = 0; A < v.length; A++) {
          const E = v[A], B = {}, P = {};
          let w = -1;
          if (g && !(h != null && h.noFilter)) {
            if (typeof E == "object") {
              const V = C || Object.keys(E);
              for (const O of V) {
                const F = xe(E, O, E), $ = (_ = h == null ? void 0 : h.customKeyFilter) == null ? void 0 : _[O];
                if (w = $ ? $(F, g, E) : x(F, g, E), w !== -1 && w !== !1)
                  $ ? B[O] = w : P[O] = w;
                else if ((h == null ? void 0 : h.filterMode) === "every")
                  continue e;
              }
            } else
              w = x(E, g, E), w !== -1 && w !== !1 && (P.title = w);
            const D = Object.keys(P).length, S = Object.keys(B).length;
            if (!D && !S || (h == null ? void 0 : h.filterMode) === "union" && S !== k && !D || (h == null ? void 0 : h.filterMode) === "intersection" && (S !== k || !D))
              continue;
          }
          m.push({ index: A, matches: { ...P, ...B } });
        }
      return m;
    }(a.value, i, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), f = b(l), p = [], d = /* @__PURE__ */ new Map();
    u.forEach((v) => {
      let { index: g, matches: h } = v;
      const m = f[g];
      p.push(m), d.set(m.value, h);
    }), o.value = p, r.value = d;
  }), { filteredItems: o, filteredMatches: r, getMatches: function(s) {
    return r.value.get(s.value);
  } };
}
const ke = R({ tag: { type: String, default: "div" } }, "tag"), qr = R({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), Ea = Symbol.for("vuetify:datatable:expanded");
function Ia(e) {
  const l = z(e, "expandOnClick"), t = fe(e, "expanded", e.expanded, (a) => new Set(a), (a) => [...a.values()]);
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
  return ye(Ea, r), r;
}
function Oa() {
  const e = ve(Ea);
  if (!e)
    throw new Error("foo");
  return e;
}
const Ur = R({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), Da = Symbol.for("vuetify:data-table-group");
function Ta(e) {
  return { groupBy: fe(e, "groupBy") };
}
function La(e) {
  const { groupBy: l, sortBy: t } = e, n = G(/* @__PURE__ */ new Set());
  function o(a) {
    return n.value.has(a.id);
  }
  const r = { sortByWithGroups: y(() => l.value.map((a) => ({ ...a, order: a.order ?? !1 })).concat(t.value)), toggleGroup: function(a) {
    const s = new Set(n.value);
    o(a) ? s.delete(a.id) : s.add(a.id), n.value = s;
  }, opened: n, groupBy: l, extractRows: function(a) {
    return function s(i) {
      const u = [];
      for (const f of i.items)
        "type" in f && f.type === "group" ? u.push(...s(f)) : u.push(f);
      return u;
    }({ type: "group", items: a, id: "dummy", key: "dummy", value: "dummy", depth: 0 });
  }, isGroupOpen: o };
  return ye(Da, r), r;
}
function Ma() {
  const e = ve(Da);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function Na(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!l.length)
    return [];
  const o = function(s, i) {
    if (!s.length)
      return [];
    const u = /* @__PURE__ */ new Map();
    for (const f of s) {
      const p = Xt(f.raw, i);
      u.has(p) || u.set(p, []), u.get(p).push(f);
    }
    return u;
  }(e, l[0]), r = [], a = l.slice(1);
  return o.forEach((s, i) => {
    const u = l[0], f = `${n}_${u}_${i}`;
    r.push({ depth: t, id: f, key: u, value: i, items: a.length ? Na(s, a, t + 1, f) : s, type: "group" });
  }), r;
}
function Ra(e, l) {
  const t = [];
  for (const n of e)
    "type" in n && n.type === "group" ? (n.value != null && t.push(n), (l.has(n.id) || n.value == null) && t.push(...Ra(n.items, l))) : t.push(n);
  return t;
}
function ja(e, l, t) {
  return { flatItems: y(() => l.value.length ? Ra(Na(e.value, l.value.map((n) => n.key)), t.value) : e.value) };
}
function Ha(e) {
  let { page: l, itemsPerPage: t, sortBy: n, groupBy: o, search: r } = e;
  const a = Se("VDataTable"), s = y(() => ({ page: l.value, itemsPerPage: t.value, sortBy: n.value, groupBy: o.value, search: r.value }));
  Z(() => r == null ? void 0 : r.value, () => {
    l.value = 1;
  });
  let i = null;
  Z(s, () => {
    rt(i, s.value) || (a.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const Wa = R({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), za = Symbol.for("vuetify:data-table-pagination");
function Ga(e) {
  return { page: fe(e, "page", void 0, (l) => +(l ?? 1)), itemsPerPage: fe(e, "itemsPerPage", void 0, (l) => +(l ?? 10)) };
}
function Ka(e) {
  const { page: l, itemsPerPage: t, itemsLength: n } = e, o = y(() => t.value === -1 ? 0 : t.value * (l.value - 1)), r = y(() => t.value === -1 ? n.value : Math.min(n.value, o.value + t.value)), a = y(() => t.value === -1 || n.value === 0 ? 1 : Math.ceil(n.value / t.value));
  Re(() => {
    l.value > a.value && (l.value = a.value);
  });
  const s = { page: l, itemsPerPage: t, startIndex: o, stopIndex: r, pageCount: a, itemsLength: n, nextPage: function() {
    l.value = tt(l.value + 1, 1, a.value);
  }, prevPage: function() {
    l.value = tt(l.value - 1, 1, a.value);
  }, setPage: function(i) {
    l.value = tt(i, 1, a.value);
  }, setItemsPerPage: function(i) {
    t.value = i, l.value = 1;
  } };
  return ye(za, s), s;
}
const Yr = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var n;
  let { items: l, value: t } = e;
  return new Set(t ? [(n = l[0]) == null ? void 0 : n.value] : []);
}, selectAll: (e) => {
  let { selected: l } = e;
  return l;
} }, qa = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, currentPage: t, selected: n } = e;
  return qa.select({ items: t, value: l, selected: n });
} }, Ua = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, allItems: t, selected: n } = e;
  return Ua.select({ items: t, value: l, selected: n });
} }, Xr = R({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] } }, "DataTable-select"), Ya = Symbol.for("vuetify:data-table-selection");
function Xa(e, l) {
  let { allItems: t, currentPage: n } = l;
  const o = fe(e, "modelValue", e.modelValue, (v) => new Set(v), (v) => [...v.values()]), r = y(() => t.value.filter((v) => v.selectable)), a = y(() => n.value.filter((v) => v.selectable)), s = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Yr;
      case "all":
        return Ua;
      default:
        return qa;
    }
  });
  function i(v) {
    return De(v).every((g) => o.value.has(g.value));
  }
  function u(v, g) {
    const h = s.value.select({ items: v, value: g, selected: new Set(o.value) });
    o.value = h;
  }
  const f = y(() => o.value.size > 0), p = y(() => i(s.value.allSelected({ allItems: r.value, currentPage: a.value }))), d = { toggleSelect: function(v) {
    u([v], !i([v]));
  }, select: u, selectAll: function(v) {
    const g = s.value.selectAll({ value: v, allItems: r.value, currentPage: a.value, selected: new Set(o.value) });
    o.value = g;
  }, isSelected: i, isSomeSelected: function(v) {
    return De(v).some((g) => o.value.has(g.value));
  }, someSelected: f, allSelected: p, showSelectAll: s.value.showSelectAll };
  return ye(Ya, d), d;
}
function ml() {
  const e = ve(Ya);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
function sn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = G(), n = G();
  if (Oe) {
    const o = new ResizeObserver((r) => {
      e == null || e(r, o), r.length && (n.value = l === "content" ? r[0].contentRect : r[0].target.getBoundingClientRect());
    });
    ot(() => {
      o.disconnect();
    }), Z(t, (r, a) => {
      a && (o.unobserve(Il(a)), n.value = void 0), r && o.observe(Il(r));
    }, { flush: "post" });
  }
  return { resizeRef: t, contentRect: Kl(n) };
}
const Jr = R({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), Ja = Symbol.for("vuetify:data-table-sort");
function Za(e) {
  return { sortBy: fe(e, "sortBy"), mustSort: z(e, "mustSort"), multiSort: z(e, "multiSort") };
}
function Qa(e) {
  const { sortBy: l, mustSort: t, multiSort: n, page: o } = e, r = { sortBy: l, toggleSort: (a) => {
    let s = l.value.map((u) => ({ ...u })) ?? [];
    const i = s.find((u) => u.key === a.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((u) => u.key !== a.key) : i.order = "desc" : s = n.value ? [...s, { key: a.key, order: "asc" }] : [{ key: a.key, order: "asc" }], l.value = s, o && (o.value = 1);
  }, isSorted: function(a) {
    return !!l.value.find((s) => s.key === a.key);
  } };
  return ye(Ja, r), r;
}
function Zr(e, l, t) {
  const n = wt();
  return { sortedItems: y(() => t.value.length ? function(r, a, s, i) {
    const u = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...r].sort((f, p) => {
      for (let d = 0; d < a.length; d++) {
        const v = a[d].key, g = a[d].order ?? "asc";
        if (g === !1)
          continue;
        let h = Xt(f.raw, v), m = Xt(p.raw, v);
        if (g === "desc" && ([h, m] = [m, h]), i == null ? void 0 : i[v]) {
          const x = i[v](h, m);
          if (!x)
            continue;
          return x;
        }
        if (h instanceof Date && m instanceof Date)
          return h.getTime() - m.getTime();
        if ([h, m] = [h, m].map((x) => x != null ? x.toString().toLocaleLowerCase() : x), h !== m)
          return Ht(h) && Ht(m) ? 0 : Ht(h) ? -1 : Ht(m) ? 1 : isNaN(h) || isNaN(m) ? u.compare(h, m) : Number(h) - Number(m);
      }
      return 0;
    });
  }(l.value, t.value, n.current.value, e.customKeySort) : l.value) };
}
const Tt = R({ border: [Boolean, Number, String] }, "border");
function Lt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { borderClasses: y(() => {
    const t = yt(e) ? e.value : e.border, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        n.push(`border-${o}`);
    return n;
  }) };
}
const Qr = [null, "default", "comfortable", "compact"], ze = R({ density: { type: String, default: "default", validator: (e) => Qr.includes(e) } }, "density");
function Ge(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { densityClasses: y(() => `${l}--density-${e.density}`) };
}
const Mt = R({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Nt(e) {
  return { elevationClasses: y(() => {
    const l = yt(e) ? e.value : e.elevation, t = [];
    return l == null || t.push(`elevation-${l}`), t;
  }) };
}
const Ze = R({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Qe(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { roundedClasses: y(() => {
    const t = yt(e) ? e.value : e.rounded, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        n.push(`rounded-${o}`);
    return n;
  }) };
}
const es = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function gl(e, l) {
  return c(ae, null, [e && c("span", { key: "overlay", class: `${l}__overlay` }, null), c("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const st = R({ color: String, variant: { type: String, default: "elevated", validator: (e) => es.includes(e) } }, "variant");
function yl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  const t = y(() => {
    const { variant: r } = b(e);
    return `${l}--variant-${r}`;
  }), { colorClasses: n, colorStyles: o } = nn(y(() => {
    const { variant: r, color: a } = b(e);
    return { [["elevated", "flat"].includes(r) ? "background" : "text"]: a };
  }));
  return { colorClasses: n, colorStyles: o, variantClasses: t };
}
const eo = R({ divided: Boolean, ...Tt(), ...oe(), ...ze(), ...Mt(), ...Ze(), ...ke(), ...we(), ...st() }, "VBtnGroup"), Nn = q()({ name: "VBtnGroup", props: eo(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Pe(e), { densityClasses: o } = Ge(e), { borderClasses: r } = Lt(e), { elevationClasses: a } = Nt(e), { roundedClasses: s } = Qe(e);
  Je({ VBtn: { height: "auto", color: z(e, "color"), density: z(e, "density"), flat: !0, variant: z(e, "variant") } }), le(() => c(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, n.value, r.value, o.value, a.value, s.value, e.class], style: e.style }, t));
} }), to = R({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), lo = R({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function no(e, l) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const n = Se("useGroupItem");
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
  const a = z(e, "value"), s = y(() => r.disabled.value || e.disabled);
  r.register({ id: o, value: a, disabled: s }, n), ot(() => {
    r.unregister(o);
  });
  const i = y(() => r.isSelected(o)), u = y(() => i.value && [r.selectedClass.value, e.selectedClass]);
  return Z(i, (f) => {
    n.emit("group:selected", { value: f });
  }), { id: o, isSelected: i, toggle: () => r.select(o, !i.value), select: (f) => r.select(o, f), selectedClass: u, value: a, disabled: s, group: r };
}
function ao(e, l) {
  let t = !1;
  const n = $t([]), o = fe(e, "modelValue", [], (u) => u == null ? [] : Rn(n, De(u)), (u) => {
    const f = function(p, d) {
      const v = [];
      return d.forEach((g) => {
        const h = p.findIndex((m) => m.id === g);
        if (~h) {
          const m = p[h];
          v.push(m.value != null ? m.value : h);
        }
      }), v;
    }(n, u);
    return e.multiple ? f : f[0];
  }), r = Se("useGroup");
  function a() {
    const u = n.find((f) => !f.disabled);
    u && e.mandatory === "force" && !o.value.length && (o.value = [u.id]);
  }
  function s(u) {
    if (e.multiple && Zl('This method is not supported when using "multiple" prop'), o.value.length) {
      const f = o.value[0], p = n.findIndex((g) => g.id === f);
      let d = (p + u) % n.length, v = n[d];
      for (; v.disabled && d !== p; )
        d = (d + u) % n.length, v = n[d];
      if (v.disabled)
        return;
      o.value = [n[d].id];
    } else {
      const f = n.find((p) => !p.disabled);
      f && (o.value = [f.id]);
    }
  }
  at(() => {
    a();
  }), ot(() => {
    t = !0;
  });
  const i = { register: function(u, f) {
    const p = u, d = Kt(Symbol.for(`${l.description}:id`), r == null ? void 0 : r.vnode).indexOf(f);
    d > -1 ? n.splice(d, 0, p) : n.push(p);
  }, unregister: function(u) {
    if (t)
      return;
    a();
    const f = n.findIndex((p) => p.id === u);
    n.splice(f, 1);
  }, selected: o, select: function(u, f) {
    const p = n.find((d) => d.id === u);
    if (!f || !(p != null && p.disabled))
      if (e.multiple) {
        const d = o.value.slice(), v = d.findIndex((h) => h === u), g = ~v;
        if (f = f ?? !g, g && e.mandatory && d.length <= 1 || !g && e.max != null && d.length + 1 > e.max)
          return;
        v < 0 && f ? d.push(u) : v >= 0 && !f && d.splice(v, 1), o.value = d;
      } else {
        const d = o.value.includes(u);
        if (e.mandatory && d)
          return;
        o.value = f ?? !d ? [u] : [];
      }
  }, disabled: z(e, "disabled"), prev: () => s(n.length - 1), next: () => s(1), isSelected: (u) => o.value.includes(u), selectedClass: y(() => e.selectedClass), items: y(() => n), getItemIndex: (u) => function(f, p) {
    const d = Rn(f, [p]);
    return d.length ? f.findIndex((v) => v.id === d[0]) : -1;
  }(n, u) };
  return ye(l, i), i;
}
function Rn(e, l) {
  const t = [];
  return l.forEach((n) => {
    const o = e.find((a) => rt(n, a.value)), r = e[n];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : r != null && t.push(r.id);
  }), t;
}
const oo = Symbol.for("vuetify:v-btn-toggle"), ts = R({ ...eo(), ...to() }, "VBtnToggle");
q()({ name: "VBtnToggle", props: ts(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, next: o, prev: r, select: a, selected: s } = ao(e, oo);
  return le(() => {
    const [i] = Nn.filterProps(e);
    return c(Nn, J({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var u;
      return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: n, next: o, prev: r, select: a, selected: s })];
    } });
  }), { next: o, prev: r, select: a };
} });
const pe = [String, Function, Object, Array], ls = Symbol.for("vuetify:icons"), ll = R({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), jn = q()({ name: "VComponentIcon", props: ll(), setup(e, l) {
  let { slots: t } = l;
  return () => {
    const n = e.icon;
    return c(e.tag, null, { default: () => {
      var o;
      return [e.icon ? c(n, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), ns = vt({ name: "VSvgIcon", inheritAttrs: !1, props: ll(), setup(e, l) {
  let { attrs: t } = l;
  return () => c(e.tag, J(t, { style: null }), { default: () => [c("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? c("path", { d: n[0], "fill-opacity": n[1] }, null) : c("path", { d: n }, null)) : c("path", { d: e.icon }, null)])] });
} });
vt({ name: "VLigatureIcon", props: ll(), setup: (e) => () => c(e.tag, null, { default: () => [e.icon] }) }), vt({ name: "VClassIcon", props: ll(), setup: (e) => () => c(e.tag, { class: e.icon }, null) });
const as = ["x-small", "small", "default", "large", "x-large"], Rt = R({ size: { type: [String, Number], default: "default" } }, "size");
function jt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return Xl(() => {
    let t, n;
    return Jt(as, e.size) ? t = `${l}--size-${e.size}` : e.size && (n = { width: X(e.size), height: X(e.size) }), { sizeClasses: t, sizeStyles: n };
  });
}
const os = R({ color: String, start: Boolean, end: Boolean, icon: pe, ...oe(), ...Rt(), ...ke({ tag: "i" }), ...we() }, "VIcon"), he = q()({ name: "VIcon", props: os(), setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = G(), { themeClasses: r } = Pe(e), { iconData: a } = ((f) => {
    const p = ve(ls);
    if (!p)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: y(() => {
      var m;
      const d = b(f);
      if (!d)
        return { component: jn };
      let v = d;
      if (typeof v == "string" && (v = v.trim(), v.startsWith("$") && (v = (m = p.aliases) == null ? void 0 : m[v.slice(1)])), !v)
        throw new Error(`Could not find aliased icon "${d}"`);
      if (Array.isArray(v))
        return { component: ns, icon: v };
      if (typeof v != "string")
        return { component: jn, icon: v };
      const g = Object.keys(p.sets).find((x) => typeof v == "string" && v.startsWith(`${x}:`)), h = g ? v.slice(g.length + 1) : v;
      return { component: p.sets[g ?? p.defaultSet].component, icon: h };
    }) };
  })(y(() => o.value || e.icon)), { sizeClasses: s } = jt(e), { textColorClasses: i, textColorStyles: u } = He(z(e, "color"));
  return le(() => {
    var p, d;
    const f = (p = n.default) == null ? void 0 : p.call(n);
    return f && (o.value = (d = ma(f).filter((v) => v.type === hr && v.children && typeof v.children == "string")[0]) == null ? void 0 : d.children), c(a.value.component, { tag: e.tag, icon: a.value.icon, class: ["v-icon", "notranslate", r.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: X(e.size), height: X(e.size), width: X(e.size) }, u.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [f] });
  }), {};
} });
function ro(e, l) {
  const t = G(), n = ie(!1);
  if (ln) {
    const o = new IntersectionObserver((r) => {
      e == null || e(r, o), n.value = !!r.find((a) => a.isIntersecting);
    }, l);
    ot(() => {
      o.disconnect();
    }), Z(t, (r, a) => {
      a && (o.unobserve(a), n.value = !1), r && o.observe(r);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: n };
}
const rs = R({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...oe(), ...Rt(), ...ke({ tag: "div" }), ...we() }, "VProgressCircular"), so = q()({ name: "VProgressCircular", props: rs(), setup(e, l) {
  let { slots: t } = l;
  const n = 2 * Math.PI * 20, o = G(), { themeClasses: r } = Pe(e), { sizeClasses: a, sizeStyles: s } = jt(e), { textColorClasses: i, textColorStyles: u } = He(z(e, "color")), { textColorClasses: f, textColorStyles: p } = He(z(e, "bgColor")), { intersectionRef: d, isIntersecting: v } = ro(), { resizeRef: g, contentRect: h } = sn(), m = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = y(() => Number(e.width)), C = y(() => s.value ? Number(e.size) : h.value ? h.value.width : Math.max(x.value, 32)), k = y(() => 20 / (1 - x.value / C.value) * 2), _ = y(() => x.value / C.value * k.value), A = y(() => X((100 - m.value) / 100 * n));
  return Re(() => {
    d.value = o.value, g.value = o.value;
  }), le(() => c(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": v.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, r.value, a.value, i.value, e.class], style: [s.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : m.value }, { default: () => [c("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${k.value} ${k.value}` }, [c("circle", { class: ["v-progress-circular__underlay", f.value], style: p.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": _.value, "stroke-dasharray": n, "stroke-dashoffset": 0 }, null), c("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": _.value, "stroke-dasharray": n, "stroke-dashoffset": A.value }, null)]), t.default && c("div", { class: "v-progress-circular__content" }, [t.default({ value: m.value })])] })), {};
} }), Hn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, io = R({ location: String }, "location");
function uo(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: n } = Ot();
  return { locationStyles: y(() => {
    if (!e.location)
      return {};
    const { side: r, align: a } = Dl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, n.value);
    function s(u) {
      return t ? t(u) : 0;
    }
    const i = {};
    return r !== "center" && (l ? i[Hn[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0), a !== "center" ? l ? i[Hn[a]] = `calc(100% - ${s(a)}px)` : i[a] = 0 : (r === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[r]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[r]), i;
  }) };
}
const ss = R({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...oe(), ...io({ location: "top" }), ...Ze(), ...ke(), ...we() }, "VProgressLinear"), co = q()({ name: "VProgressLinear", props: ss(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { isRtl: o, rtlClasses: r } = Ot(), { themeClasses: a } = Pe(e), { locationStyles: s } = uo(e), { textColorClasses: i, textColorStyles: u } = He(e, "color"), { backgroundColorClasses: f, backgroundColorStyles: p } = ft(y(() => e.bgColor || e.color)), { backgroundColorClasses: d, backgroundColorStyles: v } = ft(e, "color"), { roundedClasses: g } = Qe(e), { intersectionRef: h, isIntersecting: m } = ro(), x = y(() => parseInt(e.max, 10)), C = y(() => parseInt(e.height, 10)), k = y(() => parseFloat(e.bufferValue) / x.value * 100), _ = y(() => parseFloat(n.value) / x.value * 100), A = y(() => o.value !== e.reverse), E = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), B = y(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function P(w) {
    if (!h.value)
      return;
    const { left: D, right: S, width: V } = h.value.getBoundingClientRect(), O = A.value ? V - w.clientX + (S - V) : w.clientX - D;
    n.value = Math.round(O / V * x.value);
  }
  return le(() => c(e.tag, { ref: h, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && m.value, "v-progress-linear--reverse": A.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, g.value, a.value, r.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? X(C.value) : 0, "--v-progress-linear-height": X(C.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : _.value, onClick: e.clickable && P }, { default: () => [e.stream && c("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...u.value, [A.value ? "left" : "right"]: X(-C.value), borderTop: `${X(C.value / 2)} dotted`, opacity: B.value, top: `calc(50% - ${X(C.value / 4)})`, width: X(100 - k.value, "%"), "--v-progress-linear-stream-to": X(C.value * (A.value ? 1 : -1)) } }, null), c("div", { class: ["v-progress-linear__background", f.value], style: [p.value, { opacity: B.value, width: X(e.stream ? k.value : 100, "%") }] }, null), c(nt, { name: E.value }, { default: () => [e.indeterminate ? c("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((w) => c("div", { key: w, class: ["v-progress-linear__indeterminate", w, d.value], style: v.value }, null))]) : c("div", { class: ["v-progress-linear__determinate", d.value], style: [v.value, { width: X(_.value, "%") }] }, null)] }), t.default && c("div", { class: "v-progress-linear__content" }, [t.default({ value: _.value, buffer: k.value })])] })), {};
} }), un = R({ loading: [Boolean, String] }, "loader");
function cn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { loaderClasses: y(() => ({ [`${l}--loading`]: e.loading })) };
}
function po(e, l) {
  var n;
  let { slots: t } = l;
  return c("div", { class: `${e.name}__loader` }, [((n = t.default) == null ? void 0 : n.call(t, { color: e.color, isActive: e.active })) || c(co, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const is = ["static", "relative", "fixed", "absolute", "sticky"], us = R({ position: { type: String, validator: (e) => is.includes(e) } }, "position"), Rl = Symbol("rippleStop"), cs = 80;
function Wn(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function jl(e) {
  return e.constructor.name === "TouchEvent";
}
function vo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const nl = { show(e, l) {
  var v;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((v = l == null ? void 0 : l._ripple) != null && v.enabled))
    return;
  const n = document.createElement("span"), o = document.createElement("span");
  n.appendChild(o), n.className = "v-ripple__container", t.class && (n.className += ` ${t.class}`);
  const { radius: r, scale: a, x: s, y: i, centerX: u, centerY: f } = function(g, h) {
    var B;
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = 0, C = 0;
    if (!vo(g)) {
      const P = h.getBoundingClientRect(), w = jl(g) ? g.touches[g.touches.length - 1] : g;
      x = w.clientX - P.left, C = w.clientY - P.top;
    }
    let k = 0, _ = 0.3;
    (B = h._ripple) != null && B.circle ? (_ = 0.15, k = h.clientWidth / 2, k = m.center ? k : k + Math.sqrt((x - k) ** 2 + (C - k) ** 2) / 4) : k = Math.sqrt(h.clientWidth ** 2 + h.clientHeight ** 2) / 2;
    const A = (h.clientWidth - 2 * k) / 2 + "px", E = (h.clientHeight - 2 * k) / 2 + "px";
    return { radius: k, scale: _, x: m.center ? A : x - k + "px", y: m.center ? E : C - k + "px", centerX: A, centerY: E };
  }(e, l, t), p = 2 * r + "px";
  o.className = "v-ripple__animation", o.style.width = p, o.style.height = p, l.appendChild(n);
  const d = window.getComputedStyle(l);
  d && d.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Wn(o, `translate(${s}, ${i}) scale3d(${a},${a},${a})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Wn(o, `translate(${u}, ${f}) scale3d(1,1,1)`);
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
function fo(e) {
  return e === void 0 || !!e;
}
function _t(e) {
  const l = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Rl]) {
    if (e[Rl] = !0, jl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (l.center = t._ripple.centered || vo(e), t._ripple.class && (l.class = t._ripple.class), jl(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        nl.show(e, t, l);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var n;
        (n = t == null ? void 0 : t._ripple) != null && n.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, cs);
    } else
      nl.show(e, t, l);
  }
}
function zn(e) {
  e[Rl] = !0;
}
function Fe(e) {
  const l = e.currentTarget;
  if (l != null && l._ripple) {
    if (window.clearTimeout(l._ripple.showTimer), e.type === "touchend" && l._ripple.showTimerCommit)
      return l._ripple.showTimerCommit(), l._ripple.showTimerCommit = null, void (l._ripple.showTimer = window.setTimeout(() => {
        Fe(e);
      }));
    window.setTimeout(() => {
      l._ripple && (l._ripple.touched = !1);
    }), nl.hide(l);
  }
}
function mo(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let At = !1;
function go(e) {
  At || e.keyCode !== Sn.enter && e.keyCode !== Sn.space || (At = !0, _t(e));
}
function yo(e) {
  At = !1, Fe(e);
}
function ho(e) {
  At && (At = !1, Fe(e));
}
function Gn(e, l, t) {
  const { value: n, modifiers: o } = l, r = fo(n);
  if (r || nl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = r, e._ripple.centered = o.center, e._ripple.circle = o.circle, El(n) && n.class && (e._ripple.class = n.class), r && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", zn, { passive: !0 }), void e.addEventListener("mousedown", zn);
    e.addEventListener("touchstart", _t, { passive: !0 }), e.addEventListener("touchend", Fe, { passive: !0 }), e.addEventListener("touchmove", mo, { passive: !0 }), e.addEventListener("touchcancel", Fe), e.addEventListener("mousedown", _t), e.addEventListener("mouseup", Fe), e.addEventListener("mouseleave", Fe), e.addEventListener("keydown", go), e.addEventListener("keyup", yo), e.addEventListener("blur", ho), e.addEventListener("dragstart", Fe, { passive: !0 });
  } else
    !r && t && bo(e);
}
function bo(e) {
  e.removeEventListener("mousedown", _t), e.removeEventListener("touchstart", _t), e.removeEventListener("touchend", Fe), e.removeEventListener("touchmove", mo), e.removeEventListener("touchcancel", Fe), e.removeEventListener("mouseup", Fe), e.removeEventListener("mouseleave", Fe), e.removeEventListener("keydown", go), e.removeEventListener("keyup", yo), e.removeEventListener("dragstart", Fe), e.removeEventListener("blur", ho);
}
const hl = { mounted: function(e, l) {
  Gn(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, bo(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && Gn(e, l, fo(l.oldValue));
} }, ds = R({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: oo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Tt(), ...oe(), ...ze(), ...bt(), ...Mt(), ...lo(), ...un(), ...io(), ...us(), ...Ze(), ...on(), ...Rt(), ...ke({ tag: "button" }), ...we(), ...st({ variant: "elevated" }) }, "VBtn"), ct = q()({ name: "VBtn", directives: { Ripple: hl }, props: ds(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { themeClasses: o } = Pe(e), { borderClasses: r } = Lt(e), { colorClasses: a, colorStyles: s, variantClasses: i } = yl(e), { densityClasses: u } = Ge(e), { dimensionStyles: f } = St(e), { elevationClasses: p } = Nt(e), { loaderClasses: d } = cn(e), { locationStyles: v } = uo(e), { positionClasses: g } = function(w) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
    return { positionClasses: y(() => w.position ? `${D}--${w.position}` : void 0) };
  }(e), { roundedClasses: h } = Qe(e), { sizeClasses: m, sizeStyles: x } = jt(e), C = no(e, e.symbol, !1), k = an(e, t), _ = y(() => {
    var w;
    return e.active !== void 0 ? e.active : k.isLink.value ? (w = k.isActive) == null ? void 0 : w.value : C == null ? void 0 : C.isSelected.value;
  }), A = y(() => (C == null ? void 0 : C.disabled.value) || e.disabled), E = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), B = y(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(w) {
    var D;
    A.value || k.isLink.value && (w.metaKey || w.ctrlKey || w.shiftKey || w.button !== 0 || t.target === "_blank") || ((D = k.navigate) == null || D.call(k, w), C == null || C.toggle());
  }
  return function(w, D) {
    Z(() => {
      var S;
      return (S = w.isActive) == null ? void 0 : S.value;
    }, (S) => {
      w.isLink.value && S && D && Ie(() => {
        D(!0);
      });
    }, { immediate: !0 });
  }(k, C == null ? void 0 : C.select), le(() => {
    var F, $;
    const w = k.isLink.value ? "a" : e.tag, D = !(!e.prependIcon && !n.prepend), S = !(!e.appendIcon && !n.append), V = !(!e.icon || e.icon === !0), O = (C == null ? void 0 : C.isSelected.value) && (!k.isLink.value || ((F = k.isActive) == null ? void 0 : F.value)) || !C || (($ = k.isActive) == null ? void 0 : $.value);
    return $e(c(w, { type: w === "a" ? void 0 : "button", class: ["v-btn", C == null ? void 0 : C.selectedClass.value, { "v-btn--active": _.value, "v-btn--block": e.block, "v-btn--disabled": A.value, "v-btn--elevated": E.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, r.value, O ? a.value : void 0, u.value, p.value, d.value, g.value, h.value, m.value, i.value, e.class], style: [O ? s.value : void 0, f.value, v.value, x.value, e.style], disabled: A.value || void 0, href: k.href.value, onClick: P, value: B.value }, { default: () => {
      var I;
      return [gl(!0, "v-btn"), !e.icon && D && c("span", { key: "prepend", class: "v-btn__prepend" }, [n.prepend ? c(Ee, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, n.prepend) : c(he, { key: "prepend-icon", icon: e.prependIcon }, null)]), c("span", { class: "v-btn__content", "data-no-activator": "" }, [!n.default && V ? c(he, { key: "content-icon", icon: e.icon }, null) : c(Ee, { key: "content-defaults", disabled: !V, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var M;
        return [((M = n.default) == null ? void 0 : M.call(n)) ?? e.text];
      } })]), !e.icon && S && c("span", { key: "append", class: "v-btn__append" }, [n.append ? c(Ee, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, n.append) : c(he, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && c("span", { key: "loader", class: "v-btn__loader" }, [((I = n.loader) == null ? void 0 : I.call(n)) ?? c(so, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Ye("ripple"), !A.value && e.ripple, null]]);
  }), {};
} }), ps = R({ text: String, clickable: Boolean, ...oe(), ...we() }, "VLabel"), So = q()({ name: "VLabel", props: ps(), setup(e, l) {
  let { slots: t } = l;
  return le(() => {
    var n;
    return c("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (n = t.default) == null ? void 0 : n.call(t)]);
  }), {};
} }), wo = Symbol.for("vuetify:selection-control-group"), xo = R({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: rt }, ...oe(), ...ze(), ...we() }, "SelectionControlGroup"), vs = R({ ...xo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
q()({ name: "VSelectionControlGroup", props: vs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), o = je(), r = y(() => e.id || `v-selection-control-group-${o}`), a = y(() => e.name || r.value), s = /* @__PURE__ */ new Set();
  return ye(wo, { modelValue: n, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), Be(() => {
      s.delete(i);
    });
  } }), Je({ [e.defaultsTarget]: { color: z(e, "color"), disabled: z(e, "disabled"), density: z(e, "density"), error: z(e, "error"), inline: z(e, "inline"), modelValue: n, multiple: y(() => !!e.multiple || e.multiple == null && Array.isArray(n.value)), name: a, falseIcon: z(e, "falseIcon"), trueIcon: z(e, "trueIcon"), readonly: z(e, "readonly"), ripple: z(e, "ripple"), type: z(e, "type"), valueComparator: z(e, "valueComparator") } }), le(() => {
    var i;
    return c("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const ko = R({ label: String, trueValue: null, falseValue: null, value: null, ...oe(), ...xo() }, "VSelectionControl"), fs = q()({ name: "VSelectionControl", directives: { Ripple: hl }, inheritAttrs: !1, props: ko(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { group: o, densityClasses: r, icon: a, model: s, textColorClasses: i, textColorStyles: u, trueValue: f } = function(k) {
    const _ = ve(wo, void 0), { densityClasses: A } = Ge(k), E = fe(k, "modelValue"), B = y(() => k.trueValue !== void 0 ? k.trueValue : k.value === void 0 || k.value), P = y(() => k.falseValue !== void 0 && k.falseValue), w = y(() => !!k.multiple || k.multiple == null && Array.isArray(E.value)), D = y({ get() {
      const F = _ ? _.modelValue.value : E.value;
      return w.value ? F.some(($) => k.valueComparator($, B.value)) : k.valueComparator(F, B.value);
    }, set(F) {
      if (k.readonly)
        return;
      const $ = F ? B.value : P.value;
      let I = $;
      w.value && (I = F ? [...De(E.value), $] : De(E.value).filter((M) => !k.valueComparator(M, B.value))), _ ? _.modelValue.value = I : E.value = I;
    } }), { textColorClasses: S, textColorStyles: V } = He(y(() => !D.value || k.error || k.disabled ? void 0 : k.color)), O = y(() => D.value ? k.trueIcon : k.falseIcon);
    return { group: _, densityClasses: A, trueValue: B, falseValue: P, model: D, textColorClasses: S, textColorStyles: V, icon: O };
  }(e), p = je(), d = y(() => e.id || `input-${p}`), v = ie(!1), g = ie(!1), h = G();
  function m(k) {
    v.value = !0, (!Tl || Tl && k.target.matches(":focus-visible")) && (g.value = !0);
  }
  function x() {
    v.value = !1, g.value = !1;
  }
  function C(k) {
    e.readonly && o && Ie(() => o.forceUpdate()), s.value = k.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    h.value && (h.value.checked = s.value);
  }), le(() => {
    var E, B;
    const k = n.label ? n.label({ label: e.label, props: { for: d.value } }) : e.label, [_, A] = Yl(t);
    return c("div", J({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": v.value, "v-selection-control--focus-visible": g.value, "v-selection-control--inline": e.inline }, r.value, e.class] }, _, { style: e.style }), [c("div", { class: ["v-selection-control__wrapper", i.value], style: u.value }, [(E = n.default) == null ? void 0 : E.call(n), $e(c("div", { class: ["v-selection-control__input"] }, [a.value && c(he, { key: "icon", icon: a.value }, null), c("input", J({ ref: h, checked: s.value, disabled: !(!e.readonly && !e.disabled), id: d.value, onBlur: x, onFocus: m, onInput: C, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, A), null), (B = n.input) == null ? void 0 : B.call(n, { model: s, textColorClasses: i, textColorStyles: u, props: { onFocus: m, onBlur: x, id: d.value } })]), [[Ye("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), k && c(So, { for: d.value, clickable: !0 }, { default: () => [k] })]);
  }), { isFocused: v, input: h };
} }), Co = R({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...ko({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), mt = q()({ name: "VCheckboxBtn", props: Co(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "indeterminate"), o = fe(e, "modelValue");
  function r(i) {
    n.value && (n.value = !1);
  }
  const a = y(() => n.value ? e.indeterminateIcon : e.falseIcon), s = y(() => n.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => c(fs, J(e, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, r], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: a.value, trueIcon: s.value, "aria-checked": n.value ? "mixed" : void 0 }), t)), {};
} });
function Bo(e) {
  const { t: l } = wt();
  return { InputIcon: function(t) {
    let { name: n } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[n], r = e[`onClick:${n}`], a = r && o ? l(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return c(he, { icon: e[`${n}Icon`], "aria-label": a, onClick: r }, null);
  } };
}
const ms = R({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...oe(), ...Dt({ transition: { component: Ca, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), gs = q()({ name: "VMessages", props: ms(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => De(e.messages)), { textColorClasses: o, textColorStyles: r } = He(y(() => e.color));
  return le(() => c(Ke, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [r.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && n.value.map((a, s) => c("div", { class: "v-messages__message", key: `${s}-${n.value}` }, [t.message ? t.message({ message: a }) : a]))] })), {};
} }), Po = R({ focused: Boolean, "onUpdate:focused": Ne() }, "focus");
function dn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  const t = fe(e, "focused");
  return { focusClasses: y(() => ({ [`${l}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const ys = Symbol.for("vuetify:form");
function _o() {
  return ve(ys, null);
}
const hs = R({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Po() }, "validation"), pn = R({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ne(), "onClick:append": Ne(), ...oe(), ...ze(), ...hs() }, "VInput"), al = q()({ name: "VInput", props: { ...pn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const { densityClasses: r } = Ge(e), { rtlClasses: a } = Ot(), { InputIcon: s } = Bo(e), i = je(), u = y(() => e.id || `input-${i}`), f = y(() => `${u.value}-messages`), { errorMessages: p, isDirty: d, isDisabled: v, isReadonly: g, isPristine: h, isValid: m, isValidating: x, reset: C, resetValidation: k, validate: _, validationClasses: A } = function(P) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We(), D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : je();
    const S = fe(P, "modelValue"), V = y(() => P.validationValue === void 0 ? S.value : P.validationValue), O = _o(), F = G([]), $ = ie(!0), I = y(() => !(!De(S.value === "" ? null : S.value).length && !De(V.value === "" ? null : V.value).length)), M = y(() => !!(P.disabled ?? (O == null ? void 0 : O.isDisabled.value))), L = y(() => !!(P.readonly ?? (O == null ? void 0 : O.isReadonly.value))), N = y(() => P.errorMessages.length ? De(P.errorMessages).slice(0, Math.max(0, +P.maxErrors)) : F.value), H = y(() => {
      let Q = (P.validateOn ?? (O == null ? void 0 : O.validateOn.value)) || "input";
      Q === "lazy" && (Q = "input lazy");
      const ue = new Set((Q == null ? void 0 : Q.split(" ")) ?? []);
      return { blur: ue.has("blur") || ue.has("input"), input: ue.has("input"), submit: ue.has("submit"), lazy: ue.has("lazy") };
    }), K = y(() => !P.error && !P.errorMessages.length && (!P.rules.length || ($.value ? !F.value.length && !H.value.lazy || null : !F.value.length))), T = ie(!1), j = y(() => ({ [`${w}--error`]: K.value === !1, [`${w}--dirty`]: I.value, [`${w}--disabled`]: M.value, [`${w}--readonly`]: L.value })), W = y(() => P.name ?? b(D));
    function U() {
      S.value = null, Ie(ne);
    }
    function ne() {
      $.value = !0, H.value.lazy ? F.value = [] : ee(!0);
    }
    async function ee() {
      let Q = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ue = [];
      T.value = !0;
      for (const Ce of P.rules) {
        if (ue.length >= +(P.maxErrors ?? 1))
          break;
        const Sl = typeof Ce == "function" ? Ce : () => Ce, Te = await Sl(V.value);
        Te !== !0 && (Te === !1 || typeof Te == "string" ? ue.push(Te || "") : console.warn(`${Te} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return F.value = ue, T.value = !1, $.value = Q, F.value;
    }
    return ql(() => {
      O == null || O.register({ id: W.value, validate: ee, reset: U, resetValidation: ne });
    }), ot(() => {
      O == null || O.unregister(W.value);
    }), at(async () => {
      H.value.lazy || await ee(!0), O == null || O.update(W.value, K.value, N.value);
    }), Ue(() => H.value.input, () => {
      Z(V, () => {
        if (V.value != null)
          ee();
        else if (P.focused) {
          const Q = Z(() => P.focused, (ue) => {
            ue || ee(), Q();
          });
        }
      });
    }), Ue(() => H.value.blur, () => {
      Z(() => P.focused, (Q) => {
        Q || ee();
      });
    }), Z(K, () => {
      O == null || O.update(W.value, K.value, N.value);
    }), { errorMessages: N, isDirty: I, isDisabled: M, isReadonly: L, isPristine: $, isValid: K, isValidating: T, reset: U, resetValidation: ne, validate: ee, validationClasses: j };
  }(e, "v-input", u), E = y(() => ({ id: u, messagesId: f, isDirty: d, isDisabled: v, isReadonly: g, isPristine: h, isValid: m, isValidating: x, reset: C, resetValidation: k, validate: _ })), B = y(() => {
    var P;
    return (P = e.errorMessages) != null && P.length || !h.value && p.value.length ? p.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return le(() => {
    var V, O, F, $;
    const P = !(!n.prepend && !e.prependIcon), w = !(!n.append && !e.appendIcon), D = B.value.length > 0, S = !e.hideDetails || e.hideDetails === "auto" && (D || !!n.details);
    return c("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, r.value, a.value, A.value, e.class], style: e.style }, [P && c("div", { key: "prepend", class: "v-input__prepend" }, [(V = n.prepend) == null ? void 0 : V.call(n, E.value), e.prependIcon && c(s, { key: "prepend-icon", name: "prepend" }, null)]), n.default && c("div", { class: "v-input__control" }, [(O = n.default) == null ? void 0 : O.call(n, E.value)]), w && c("div", { key: "append", class: "v-input__append" }, [e.appendIcon && c(s, { key: "append-icon", name: "append" }, null), (F = n.append) == null ? void 0 : F.call(n, E.value)]), S && c("div", { class: "v-input__details" }, [c(gs, { id: f.value, active: D, messages: B.value }, { message: n.message }), ($ = n.details) == null ? void 0 : $.call(n, E.value)])]);
  }), { reset: C, resetValidation: k, validate: _ };
} }), bs = R({ ...pn(), ...Ul(Co(), ["inline"]) }, "VCheckbox"), vn = q()({ name: "VCheckbox", inheritAttrs: !1, props: bs(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = fe(e, "modelValue"), { isFocused: r, focus: a, blur: s } = dn(e), i = je(), u = y(() => e.id || `checkbox-${i}`);
  return le(() => {
    const [f, p] = Yl(t), [d, v] = al.filterProps(e), [g, h] = mt.filterProps(e);
    return c(al, J({ class: ["v-checkbox", e.class] }, f, d, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, id: u.value, focused: r.value, style: e.style }), { ...n, default: (m) => {
      let { id: x, messagesId: C, isDisabled: k, isReadonly: _ } = m;
      return c(mt, J(g, { id: x.value, "aria-describedby": C.value, disabled: k.value, readonly: _.value }, p, { modelValue: o.value, "onUpdate:modelValue": (A) => o.value = A, onFocus: a, onBlur: s }), n);
    } });
  }), {};
} }), Ao = R({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...oe(), ...bt() }, "VResponsive"), Kn = q()({ name: "VResponsive", props: Ao(), setup(e, l) {
  let { slots: t } = l;
  const { aspectStyles: n } = function(r) {
    return { aspectStyles: y(() => {
      const a = Number(r.aspectRatio);
      return a ? { paddingBottom: String(1 / a * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = St(e);
  return le(() => {
    var r;
    return c("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [c("div", { class: "v-responsive__sizer", style: n.value }, null), (r = t.additional) == null ? void 0 : r.call(t), t.default && c("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function qn(e, l) {
  var n;
  const t = (n = e._observe) == null ? void 0 : n[l.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Fo = { mounted: function(e, l) {
  if (!ln)
    return;
  const t = l.modifiers || {}, n = l.value, { handler: o, options: r } = typeof n == "object" ? n : { handler: n, options: {} }, a = new IntersectionObserver(function() {
    var p;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const u = (p = e._observe) == null ? void 0 : p[l.instance.$.uid];
    if (!u)
      return;
    const f = s.some((d) => d.isIntersecting);
    !o || t.quiet && !u.init || t.once && !f && !u.init || o(f, s, i), f && t.once ? qn(e, l) : u.init = !0;
  }, r);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: a }, a.observe(e);
}, unmounted: qn }, Ss = R({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...Ao(), ...oe(), ...Dt() }, "VImg"), ws = q()({ name: "VImg", directives: { intersect: Fo }, props: Ss(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const o = ie(""), r = G(), a = ie(e.eager ? "loading" : "idle"), s = ie(), i = ie(), u = y(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), f = y(() => u.value.aspect || s.value / i.value || 0);
  function p(P) {
    if ((!e.eager || !P) && (!ln || P || e.eager)) {
      if (a.value = "loading", u.value.lazySrc) {
        const w = new Image();
        w.src = u.value.lazySrc, m(w, null);
      }
      u.value.src && Ie(() => {
        var w, D;
        if (t("loadstart", ((w = r.value) == null ? void 0 : w.currentSrc) || u.value.src), (D = r.value) == null ? void 0 : D.complete) {
          if (r.value.naturalWidth || v(), a.value === "error")
            return;
          f.value || m(r.value, null), d();
        } else
          f.value || m(r.value), g();
      });
    }
  }
  function d() {
    var P;
    g(), a.value = "loaded", t("load", ((P = r.value) == null ? void 0 : P.currentSrc) || u.value.src);
  }
  function v() {
    var P;
    a.value = "error", t("error", ((P = r.value) == null ? void 0 : P.currentSrc) || u.value.src);
  }
  function g() {
    const P = r.value;
    P && (o.value = P.currentSrc || P.src);
  }
  Z(() => e.src, () => {
    p(a.value !== "idle");
  }), Z(f, (P, w) => {
    !P && w && r.value && m(r.value);
  }), ql(() => p());
  let h = -1;
  function m(P) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const D = () => {
      clearTimeout(h);
      const { naturalHeight: S, naturalWidth: V } = P;
      S || V ? (s.value = V, i.value = S) : P.complete || a.value !== "loading" || w == null ? (P.currentSrc.endsWith(".svg") || P.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : h = window.setTimeout(D, w);
    };
    D();
  }
  const x = y(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), C = () => {
    var D;
    if (!u.value.src || a.value === "idle")
      return null;
    const P = c("img", { class: ["v-img__img", x.value], src: u.value.src, srcset: u.value.srcset, alt: e.alt, sizes: e.sizes, ref: r, onLoad: d, onError: v }, null), w = (D = n.sources) == null ? void 0 : D.call(n);
    return c(Ke, { transition: e.transition, appear: !0 }, { default: () => [$e(w ? c("picture", { class: "v-img__picture" }, [w, P]) : P, [[ht, a.value === "loaded"]])] });
  }, k = () => c(Ke, { transition: e.transition }, { default: () => [u.value.lazySrc && a.value !== "loaded" && c("img", { class: ["v-img__img", "v-img__img--preload", x.value], src: u.value.lazySrc, alt: e.alt }, null)] }), _ = () => n.placeholder ? c(Ke, { transition: e.transition, appear: !0 }, { default: () => [(a.value === "loading" || a.value === "error" && !n.error) && c("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null, A = () => n.error ? c(Ke, { transition: e.transition, appear: !0 }, { default: () => [a.value === "error" && c("div", { class: "v-img__error" }, [n.error()])] }) : null, E = () => e.gradient ? c("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, B = ie(!1);
  {
    const P = Z(f, (w) => {
      w && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          B.value = !0;
        });
      }), P());
    });
  }
  return le(() => {
    const [P] = Kn.filterProps(e);
    return $e(c(Kn, J({ class: ["v-img", { "v-img--booting": !B.value }, e.class], style: [{ width: X(e.width === "auto" ? s.value : e.width) }, e.style] }, P, { aspectRatio: f.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => c(ae, null, [c(C, null, null), c(k, null, null), c(E, null, null), c(_, null, null), c(A, null, null)]), default: n.default }), [[Ye("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: r, state: a, naturalWidth: s, naturalHeight: i };
} }), xs = R({ start: Boolean, end: Boolean, icon: pe, image: String, ...oe(), ...ze(), ...Ze(), ...Rt(), ...ke(), ...we(), ...st({ variant: "flat" }) }, "VAvatar"), ol = q()({ name: "VAvatar", props: xs(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Pe(e), { colorClasses: o, colorStyles: r, variantClasses: a } = yl(e), { densityClasses: s } = Ge(e), { roundedClasses: i } = Qe(e), { sizeClasses: u, sizeStyles: f } = jt(e);
  return le(() => c(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, o.value, s.value, i.value, u.value, a.value, e.class], style: [r.value, f.value, e.style] }, { default: () => {
    var p;
    return [e.image ? c(ws, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? c(he, { key: "icon", icon: e.icon }, null) : (p = t.default) == null ? void 0 : p.call(t), gl(!1, "v-avatar")];
  } })), {};
} }), $o = Symbol.for("vuetify:v-chip-group"), ks = R({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: rt }, ...oe(), ...to({ selectedClass: "v-chip--selected" }), ...ke(), ...we(), ...st({ variant: "tonal" }) }, "VChipGroup");
q()({ name: "VChipGroup", props: ks(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Pe(e), { isSelected: o, select: r, next: a, prev: s, selected: i } = ao(e, $o);
  return Je({ VChip: { color: z(e, "color"), disabled: z(e, "disabled"), filter: z(e, "filter"), variant: z(e, "variant") } }), le(() => c(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, n.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: o, select: r, next: a, prev: s, selected: i.value })];
  } })), {};
} });
const Cs = R({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Ne(), onClickOnce: Ne(), ...Tt(), ...oe(), ...ze(), ...Mt(), ...lo(), ...Ze(), ...on(), ...Rt(), ...ke({ tag: "span" }), ...we(), ...st({ variant: "tonal" }) }, "VChip"), Bs = q()({ name: "VChip", directives: { Ripple: hl }, props: Cs(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { t: r } = wt(), { borderClasses: a } = Lt(e), { colorClasses: s, colorStyles: i, variantClasses: u } = yl(e), { densityClasses: f } = Ge(e), { elevationClasses: p } = Nt(e), { roundedClasses: d } = Qe(e), { sizeClasses: v } = jt(e), { themeClasses: g } = Pe(e), h = fe(e, "modelValue"), m = no(e, $o, !1), x = an(e, t), C = y(() => e.link !== !1 && x.isLink.value), k = y(() => !e.disabled && e.link !== !1 && (!!m || e.link || x.isClickable.value)), _ = y(() => ({ "aria-label": r(e.closeLabel), onClick(B) {
    h.value = !1, n("click:close", B);
  } }));
  function A(B) {
    var P;
    n("click", B), k.value && ((P = x.navigate) == null || P.call(x, B), m == null || m.toggle());
  }
  function E(B) {
    B.key !== "Enter" && B.key !== " " || (B.preventDefault(), A(B));
  }
  return () => {
    const B = x.isLink.value ? "a" : e.tag, P = !(!e.appendIcon && !e.appendAvatar), w = !(!P && !o.append), D = !(!o.close && !e.closable), S = !(!o.filter && !e.filter) && m, V = !(!e.prependIcon && !e.prependAvatar), O = !(!V && !o.prepend), F = !m || m.isSelected.value;
    return h.value && $e(c(B, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": k.value, "v-chip--filter": S, "v-chip--pill": e.pill }, g.value, a.value, F ? s.value : void 0, f.value, p.value, d.value, v.value, u.value, m == null ? void 0 : m.selectedClass.value, e.class], style: [F ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: x.href.value, tabindex: k.value ? 0 : void 0, onClick: A, onKeydown: k.value && !C.value && E }, { default: () => {
      var $;
      return [gl(k.value, "v-chip"), S && c(Ba, { key: "filter" }, { default: () => [$e(c("div", { class: "v-chip__filter" }, [o.filter ? $e(c(Ee, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[Ye("slot"), o.filter, "default"]]) : c(he, { key: "filter-icon", icon: e.filterIcon }, null)]), [[ht, m.isSelected.value]])] }), O && c("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? c(Ee, { key: "prepend-defaults", disabled: !V, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : c(ae, null, [e.prependIcon && c(he, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && c(ol, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), c("div", { class: "v-chip__content" }, [(($ = o.default) == null ? void 0 : $.call(o, { isSelected: m == null ? void 0 : m.isSelected.value, selectedClass: m == null ? void 0 : m.selectedClass.value, select: m == null ? void 0 : m.select, toggle: m == null ? void 0 : m.toggle, value: m == null ? void 0 : m.value.value, disabled: e.disabled })) ?? e.text]), w && c("div", { key: "append", class: "v-chip__append" }, [o.append ? c(Ee, { key: "append-defaults", disabled: !P, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : c(ae, null, [e.appendIcon && c(he, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && c(ol, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), D && c("div", J({ key: "close", class: "v-chip__close" }, _.value), [o.close ? c(Ee, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : c(he, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Ye("ripple"), k.value && e.ripple, null]]);
  };
} }), Hl = Symbol.for("vuetify:list");
function Vo() {
  const e = ve(Hl, { hasPrepend: ie(!1), updateHasPrepend: () => null }), l = { hasPrepend: ie(!1), updateHasPrepend: (t) => {
    t && (l.hasPrepend.value = t);
  } };
  return ye(Hl, l), e;
}
function Eo() {
  return ve(Hl, null);
}
const Ps = { open: (e) => {
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
}, select: () => null }, Io = { open: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (t) {
    let r = o.get(l);
    for (n.add(l); r != null && r !== l; )
      n.add(r), r = o.get(r);
    return n;
  }
  return n.delete(l), n;
}, select: () => null }, _s = { open: Io.open, select: (e) => {
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
    if (n = qe(n), e && !o) {
      const a = Array.from(r.entries()).reduce((s, i) => {
        let [u, f] = i;
        return f === "on" ? [...s, u] : s;
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
    o = qe(o);
    const a = n.has(o) ? /* @__PURE__ */ new Map([[o, n.get(o)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...r, id: o, selected: a });
  }, in: (t, n, o) => {
    let r = /* @__PURE__ */ new Map();
    return t != null && t.length && (r = l.in(t.slice(0, 1), n, o)), r;
  }, out: (t, n, o) => l.out(t, n, o) };
}, Ft = Symbol.for("vuetify:nested"), Oo = { id: ie(), root: { register: () => null, unregister: () => null, parents: G(/* @__PURE__ */ new Map()), children: G(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: G(/* @__PURE__ */ new Set()), selected: G(/* @__PURE__ */ new Map()), selectedValues: G([]) } }, As = R({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Fs = (e) => {
  let l = !1;
  const t = G(/* @__PURE__ */ new Map()), n = G(/* @__PURE__ */ new Map()), o = fe(e, "opened", e.opened, (p) => new Set(p), (p) => [...p.values()]), r = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((p) => {
          const d = Un(p);
          return { select: (v) => {
            let { id: g, selected: h, children: m, ...x } = v;
            return g = qe(g), m.has(g) ? h : d.select({ id: g, selected: h, children: m, ...x });
          }, in: d.in, out: d.out };
        })(e.mandatory);
      case "leaf":
        return ((p) => {
          const d = Wl(p);
          return { select: (v) => {
            let { id: g, selected: h, children: m, ...x } = v;
            return g = qe(g), m.has(g) ? h : d.select({ id: g, selected: h, children: m, ...x });
          }, in: d.in, out: d.out };
        })(e.mandatory);
      case "independent":
        return Wl(e.mandatory);
      case "single-independent":
        return Un(e.mandatory);
      default:
        return ((p) => {
          const d = { select: (v) => {
            let { id: g, value: h, selected: m, children: x, parents: C } = v;
            g = qe(g);
            const k = new Map(m), _ = [g];
            for (; _.length; ) {
              const E = _.shift();
              m.set(E, h ? "on" : "off"), x.has(E) && _.push(...x.get(E));
            }
            let A = C.get(g);
            for (; A; ) {
              const E = x.get(A), B = E.every((w) => m.get(w) === "on"), P = E.every((w) => !m.has(w) || m.get(w) === "off");
              m.set(A, B ? "on" : P ? "off" : "indeterminate"), A = C.get(A);
            }
            return p && !h && Array.from(m.entries()).reduce((B, P) => {
              let [w, D] = P;
              return D === "on" ? [...B, w] : B;
            }, []).length === 0 ? k : m;
          }, in: (v, g, h) => {
            let m = /* @__PURE__ */ new Map();
            for (const x of v || [])
              m = d.select({ id: x, value: !0, selected: new Map(m), children: g, parents: h });
            return m;
          }, out: (v, g) => {
            const h = [];
            for (const [m, x] of v.entries())
              x !== "on" || g.has(m) || h.push(m);
            return h;
          } };
          return d;
        })(e.mandatory);
    }
  }), a = y(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return _s;
      case "single":
        return Ps;
      default:
        return Io;
    }
  }), s = fe(e, "selected", e.selected, (p) => r.value.in(p, t.value, n.value), (p) => r.value.out(p, t.value, n.value));
  function i(p) {
    const d = [];
    let v = p;
    for (; v != null; )
      d.unshift(v), v = n.value.get(v);
    return d;
  }
  ot(() => {
    l = !0;
  });
  const u = Se("nested"), f = { id: ie(), root: { opened: o, selected: s, selectedValues: y(() => {
    const p = [];
    for (const [d, v] of s.value.entries())
      v === "on" && p.push(d);
    return p;
  }), register: (p, d, v) => {
    d && p !== d && n.value.set(p, d), v && t.value.set(p, []), d != null && t.value.set(d, [...t.value.get(d) || [], p]);
  }, unregister: (p) => {
    if (l)
      return;
    t.value.delete(p);
    const d = n.value.get(p);
    if (d) {
      const v = t.value.get(d) ?? [];
      t.value.set(d, v.filter((g) => g !== p));
    }
    n.value.delete(p), o.value.delete(p);
  }, open: (p, d, v) => {
    u.emit("click:open", { id: p, value: d, path: i(p), event: v });
    const g = a.value.open({ id: p, value: d, opened: new Set(o.value), children: t.value, parents: n.value, event: v });
    g && (o.value = g);
  }, openOnSelect: (p, d, v) => {
    const g = a.value.select({ id: p, value: d, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: n.value, event: v });
    g && (o.value = g);
  }, select: (p, d, v) => {
    u.emit("click:select", { id: p, value: d, path: i(p), event: v });
    const g = r.value.select({ id: p, value: d, selected: new Map(s.value), children: t.value, parents: n.value, event: v });
    g && (s.value = g), f.root.openOnSelect(p, d, v);
  }, children: t, parents: n } };
  return ye(Ft, f), f.root;
}, Do = (e, l) => {
  const t = ve(Ft, Oo), n = Symbol(je()), o = y(() => e.value !== void 0 ? e.value : n), r = { ...t, id: o, open: (a, s) => t.root.open(o.value, a, s), openOnSelect: (a, s) => t.root.openOnSelect(o.value, a, s), isOpen: y(() => t.root.opened.value.has(o.value)), parent: y(() => t.root.parents.value.get(o.value)), select: (a, s) => t.root.select(o.value, a, s), isSelected: y(() => t.root.selected.value.get(qe(o.value)) === "on"), isIndeterminate: y(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: y(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, l), ot(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), l && ye(Ft, r), r;
}, $s = vt({ name: "VListGroupActivator", setup(e, l) {
  let { slots: t } = l;
  return (() => {
    const n = ve(Ft, Oo);
    ye(Ft, { ...n, isGroupActivator: !0 });
  })(), () => {
    var n;
    return (n = t.default) == null ? void 0 : n.call(t);
  };
} }), Vs = R({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...oe(), ...ke() }, "VListGroup"), Yn = q()({ name: "VListGroup", props: Vs(), setup(e, l) {
  let { slots: t } = l;
  const { isOpen: n, open: o, id: r } = Do(z(e, "value"), !0), a = y(() => `v-list-group--id-${String(r.value)}`), s = Eo(), { isBooted: i } = function() {
    const v = ie(!1);
    return at(() => {
      window.requestAnimationFrame(() => {
        v.value = !0;
      });
    }), { ssrBootStyles: y(() => v.value ? void 0 : { transition: "none !important" }), isBooted: Kl(v) };
  }();
  function u(v) {
    o(!n.value, v);
  }
  const f = y(() => ({ onClick: u, class: "v-list-group__header", id: a.value })), p = y(() => n.value ? e.collapseIcon : e.expandIcon), d = y(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && p.value, appendIcon: e.appendIcon || !e.subgroup && p.value, title: e.title, value: e.value } }));
  return le(() => c(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style }, { default: () => [t.activator && c(Ee, { defaults: d.value }, { default: () => [c($s, null, { default: () => [t.activator({ props: f.value, isOpen: n.value })] })] }), c(Ke, { transition: { component: Er }, disabled: !i.value }, { default: () => {
    var v;
    return [$e(c("div", { class: "v-list-group__items", role: "group", "aria-labelledby": a.value }, [(v = t.default) == null ? void 0 : v.call(t)]), [[ht, n.value]])];
  } })] })), {};
} }), Es = ya("v-list-item-subtitle"), Is = ya("v-list-item-title"), Os = R({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Ne(), onClickOnce: Ne(), ...Tt(), ...oe(), ...ze(), ...bt(), ...Mt(), ...Ze(), ...on(), ...ke(), ...we(), ...st({ variant: "text" }) }, "VListItem"), rl = q()({ name: "VListItem", directives: { Ripple: hl }, props: Os(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const r = an(e, t), a = y(() => e.value === void 0 ? r.href.value : e.value), { select: s, isSelected: i, isIndeterminate: u, isGroupActivator: f, root: p, parent: d, openOnSelect: v } = Do(a, !1), g = Eo(), h = y(() => {
    var L;
    return e.active !== !1 && (e.active || ((L = r.isActive) == null ? void 0 : L.value) || i.value);
  }), m = y(() => e.link !== !1 && r.isLink.value), x = y(() => !e.disabled && e.link !== !1 && (e.link || r.isClickable.value || e.value != null && !!g)), C = y(() => e.rounded || e.nav), k = y(() => e.color ?? e.activeColor), _ = y(() => ({ color: h.value ? k.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Z(() => {
    var L;
    return (L = r.isActive) == null ? void 0 : L.value;
  }, (L) => {
    L && d.value != null && p.open(d.value, !0), L && v(L);
  }, { immediate: !0 });
  const { themeClasses: A } = Pe(e), { borderClasses: E } = Lt(e), { colorClasses: B, colorStyles: P, variantClasses: w } = yl(_), { densityClasses: D } = Ge(e), { dimensionStyles: S } = St(e), { elevationClasses: V } = Nt(e), { roundedClasses: O } = Qe(C), F = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), $ = y(() => ({ isActive: h.value, select: s, isSelected: i.value, isIndeterminate: u.value }));
  function I(L) {
    var N;
    o("click", L), !f && x.value && ((N = r.navigate) == null || N.call(r, L), e.value != null && s(!i.value, L));
  }
  function M(L) {
    L.key !== "Enter" && L.key !== " " || (L.preventDefault(), I(L));
  }
  return le(() => {
    const L = m.value ? "a" : e.tag, N = n.title || e.title, H = n.subtitle || e.subtitle, K = !(!e.appendAvatar && !e.appendIcon), T = !(!K && !n.append), j = !(!e.prependAvatar && !e.prependIcon), W = !(!j && !n.prepend);
    var U, ne;
    return g == null || g.updateHasPrepend(W), e.activeColor && (U = "active-color", ne = ["color", "base-color"], ne = Array.isArray(ne) ? ne.slice(0, -1).map((ee) => `'${ee}'`).join(", ") + ` or '${ne.at(-1)}'` : `'${ne}'`, pl(`[Vuetify UPGRADE] '${U}' is deprecated, use ${ne} instead.`)), $e(c(L, { class: ["v-list-item", { "v-list-item--active": h.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !W && (g == null ? void 0 : g.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && h.value }, A.value, E.value, B.value, D.value, V.value, F.value, O.value, w.value, e.class], style: [P.value, S.value, e.style], href: r.href.value, tabindex: x.value ? g ? -2 : 0 : void 0, onClick: I, onKeydown: x.value && !m.value && M }, { default: () => {
      var ee;
      return [gl(x.value || h.value, "v-list-item"), W && c("div", { key: "prepend", class: "v-list-item__prepend" }, [n.prepend ? c(Ee, { key: "prepend-defaults", disabled: !j, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.prepend) == null ? void 0 : Q.call(n, $.value)];
      } }) : c(ae, null, [e.prependAvatar && c(ol, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && c(he, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), c("div", { class: "v-list-item__content", "data-no-activator": "" }, [N && c(Is, { key: "title" }, { default: () => {
        var Q;
        return [((Q = n.title) == null ? void 0 : Q.call(n, { title: e.title })) ?? e.title];
      } }), H && c(Es, { key: "subtitle" }, { default: () => {
        var Q;
        return [((Q = n.subtitle) == null ? void 0 : Q.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ee = n.default) == null ? void 0 : ee.call(n, $.value)]), T && c("div", { key: "append", class: "v-list-item__append" }, [n.append ? c(Ee, { key: "append-defaults", disabled: !K, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.append) == null ? void 0 : Q.call(n, $.value)];
      } }) : c(ae, null, [e.appendIcon && c(he, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && c(ol, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[Ye("ripple"), x.value && e.ripple]]);
  }), {};
} }), Ds = R({ color: String, inset: Boolean, sticky: Boolean, title: String, ...oe(), ...ke() }, "VListSubheader"), Ts = q()({ name: "VListSubheader", props: Ds(), setup(e, l) {
  let { slots: t } = l;
  const { textColorClasses: n, textColorStyles: o } = He(z(e, "color"));
  return le(() => {
    const r = !(!t.default && !e.title);
    return c(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var a;
      return [r && c("div", { class: "v-list-subheader__text" }, [((a = t.default) == null ? void 0 : a.call(t)) ?? e.title])];
    } });
  }), {};
} }), Ls = R({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...oe(), ...we() }, "VDivider"), Ms = q()({ name: "VDivider", props: Ls(), setup(e, l) {
  let { attrs: t } = l;
  const { themeClasses: n } = Pe(e), { textColorClasses: o, textColorStyles: r } = He(z(e, "color")), a = y(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = X(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = X(e.thickness)), s;
  });
  return le(() => c("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, n.value, o.value, e.class], style: [a.value, r.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), Ns = R({ items: Array }, "VListChildren"), To = q()({ name: "VListChildren", props: Ns(), setup(e, l) {
  let { slots: t } = l;
  return Vo(), () => {
    var n, o;
    return ((n = t.default) == null ? void 0 : n.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((r) => {
      var v, g;
      let { children: a, props: s, type: i, raw: u } = r;
      if (i === "divider")
        return ((v = t.divider) == null ? void 0 : v.call(t, { props: s })) ?? c(Ms, s, null);
      if (i === "subheader")
        return ((g = t.subheader) == null ? void 0 : g.call(t, { props: s })) ?? c(Ts, s, null);
      const f = { subtitle: t.subtitle ? (h) => {
        var m;
        return (m = t.subtitle) == null ? void 0 : m.call(t, { ...h, item: u });
      } : void 0, prepend: t.prepend ? (h) => {
        var m;
        return (m = t.prepend) == null ? void 0 : m.call(t, { ...h, item: u });
      } : void 0, append: t.append ? (h) => {
        var m;
        return (m = t.append) == null ? void 0 : m.call(t, { ...h, item: u });
      } : void 0, title: t.title ? (h) => {
        var m;
        return (m = t.title) == null ? void 0 : m.call(t, { ...h, item: u });
      } : void 0 }, [p, d] = Yn.filterProps(s);
      return a ? c(Yn, J({ value: s == null ? void 0 : s.value }, p), { activator: (h) => {
        let { props: m } = h;
        return t.header ? t.header({ props: { ...s, ...m } }) : c(rl, J(s, m), f);
      }, default: () => c(To, { items: a }, t) }) : t.item ? t.item({ props: s }) : c(rl, s, f);
    }));
  };
} }), Lo = R({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Mo(e, l) {
  const t = xe(l, e.itemTitle, l), n = e.returnObject ? l : xe(l, e.itemValue, t), o = xe(l, e.itemChildren), r = { title: t, value: n, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? It(l, ["children"])[1] : l : xe(l, e.itemProps) };
  return { title: String(r.title ?? ""), value: r.value, props: r, children: Array.isArray(o) ? No(e, o) : void 0, raw: l };
}
function No(e, l) {
  const t = [];
  for (const n of l)
    t.push(Mo(e, n));
  return t;
}
function Rs(e) {
  return function(l, t) {
    function n(r) {
      return r.filter((a) => a !== null || l.value.some((s) => s.value === null)).map((a) => l.value.find((s) => rt(a, s.value)) ?? t(a));
    }
    function o(r) {
      return r.map((a) => {
        let { value: s } = a;
        return s;
      });
    }
    return { items: l, transformIn: n, transformOut: o };
  }(y(() => No(e, e.items)), (l) => Mo(e, l));
}
function js(e, l) {
  const t = xe(l, e.itemType, "item"), n = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : xe(l, e.itemTitle), o = xe(l, e.itemValue, void 0), r = xe(l, e.itemChildren), a = { title: n, value: o, ...e.itemProps === !0 ? It(l, ["children"])[1] : xe(l, e.itemProps) };
  return { type: t, title: a.title, value: a.value, props: a, children: t === "item" && r ? Ro(e, r) : void 0, raw: l };
}
function Ro(e, l) {
  const t = [];
  for (const n of l)
    t.push(js(e, n));
  return t;
}
const Hs = R({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...As({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Tt(), ...oe(), ...ze(), ...bt(), ...Mt(), itemType: { type: String, default: "type" }, ...Lo(), ...Ze(), ...ke(), ...we(), ...st({ variant: "text" }) }, "VList"), Ws = q()({ name: "VList", props: Hs(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { items: n } = function(w) {
    return { items: y(() => Ro(w, w.items)) };
  }(e), { themeClasses: o } = Pe(e), { backgroundColorClasses: r, backgroundColorStyles: a } = ft(z(e, "bgColor")), { borderClasses: s } = Lt(e), { densityClasses: i } = Ge(e), { dimensionStyles: u } = St(e), { elevationClasses: f } = Nt(e), { roundedClasses: p } = Qe(e), { open: d, select: v } = Fs(e), g = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), h = z(e, "activeColor"), m = z(e, "baseColor"), x = z(e, "color");
  Vo(), Je({ VListGroup: { activeColor: h, baseColor: m, color: x }, VListItem: { activeClass: z(e, "activeClass"), activeColor: h, baseColor: m, color: x, density: z(e, "density"), disabled: z(e, "disabled"), lines: z(e, "lines"), nav: z(e, "nav"), variant: z(e, "variant") } });
  const C = ie(!1), k = G();
  function _(w) {
    C.value = !0;
  }
  function A(w) {
    C.value = !1;
  }
  function E(w) {
    var D;
    C.value || w.relatedTarget && ((D = k.value) != null && D.contains(w.relatedTarget)) || P();
  }
  function B(w) {
    if (k.value) {
      if (w.key === "ArrowDown")
        P("next");
      else if (w.key === "ArrowUp")
        P("prev");
      else if (w.key === "Home")
        P("first");
      else {
        if (w.key !== "End")
          return;
        P("last");
      }
      w.preventDefault();
    }
  }
  function P(w) {
    if (k.value)
      return Zt(k.value, w);
  }
  return le(() => c(e.tag, { ref: k, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, r.value, s.value, i.value, f.value, g.value, p.value, e.class], style: [a.value, u.value, e.style], tabindex: e.disabled || C.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: _, onFocusout: A, onFocus: E, onKeydown: B }, { default: () => [c(To, { items: n.value }, t)] })), { open: d, select: v, focus: P };
} }), zs = R({ id: String, ...Ul(Va({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ka } }), ["absolute"]) }, "VMenu"), Gs = q()({ name: "VMenu", props: zs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { scopeId: o } = Fa(), r = je(), a = y(() => e.id || `v-menu-${r}`), s = G(), i = ve(Nl, null), u = ie(0);
  function f() {
    i == null || i.closeParents();
  }
  function p(g) {
    var h, m;
    e.disabled || g.key === "Tab" && (n.value = !1, (m = (h = s.value) == null ? void 0 : h.activatorEl) == null || m.focus());
  }
  function d(g) {
    var m;
    if (e.disabled)
      return;
    const h = (m = s.value) == null ? void 0 : m.contentEl;
    h && n.value ? g.key === "ArrowDown" ? (g.preventDefault(), Zt(h, "next")) : g.key === "ArrowUp" && (g.preventDefault(), Zt(h, "prev")) : ["ArrowDown", "ArrowUp"].includes(g.key) && (n.value = !0, g.preventDefault(), setTimeout(() => setTimeout(() => d(g))));
  }
  ye(Nl, { register() {
    ++u.value;
  }, unregister() {
    --u.value;
  }, closeParents() {
    setTimeout(() => {
      u.value || (n.value = !1, i == null || i.closeParents());
    }, 40);
  } }), Z(n, (g) => {
    g ? i == null || i.register() : i == null || i.unregister();
  });
  const v = y(() => J({ "aria-haspopup": "menu", "aria-expanded": String(n.value), "aria-owns": a.value, onKeydown: d }, e.activatorProps));
  return le(() => {
    const [g] = Mn.filterProps(e);
    return c(Mn, J({ ref: s, class: ["v-menu", e.class], style: e.style }, g, { modelValue: n.value, "onUpdate:modelValue": (h) => n.value = h, absolute: !0, activatorProps: v.value, "onClick:outside": f, onKeydown: p }, o), { activator: t.activator, default: function() {
      for (var h = arguments.length, m = new Array(h), x = 0; x < h; x++)
        m[x] = arguments[x];
      return c(Ee, { root: "VMenu" }, { default: () => {
        var C;
        return [(C = t.default) == null ? void 0 : C.call(t, ...m)];
      } });
    } });
  }), rn({ id: a, ΨopenChildren: u }, s);
} }), Ks = R({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...oe(), ...Dt({ transition: { component: Ca } }) }, "VCounter"), qs = q()({ name: "VCounter", functional: !0, props: Ks(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => c(Ke, { transition: e.transition }, { default: () => [$e(c("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: n.value, max: e.max, value: e.value }) : n.value]), [[ht, e.active]])] })), {};
} }), Us = R({ floating: Boolean, ...oe() }, "VFieldLabel"), zt = q()({ name: "VFieldLabel", props: Us(), setup(e, l) {
  let { slots: t } = l;
  return le(() => c(So, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Ys = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], jo = R({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Ys.includes(e) }, "onClick:clear": Ne(), "onClick:appendInner": Ne(), "onClick:prependInner": Ne(), ...oe(), ...un(), ...Ze(), ...we() }, "VField"), Xn = q()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Po(), ...jo() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { themeClasses: r } = Pe(e), { loaderClasses: a } = cn(e), { focusClasses: s, isFocused: i, focus: u, blur: f } = dn(e), { InputIcon: p } = Bo(e), { roundedClasses: d } = Qe(e), { rtlClasses: v } = Ot(), g = y(() => e.dirty || e.active), h = y(() => !(e.singleLine || !e.label && !o.label)), m = je(), x = y(() => e.id || `input-${m}`), C = y(() => `${x.value}-messages`), k = G(), _ = G(), A = G(), E = y(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: B, backgroundColorStyles: P } = ft(z(e, "bgColor")), { textColorClasses: w, textColorStyles: D } = He(y(() => e.error || e.disabled ? void 0 : g.value && i.value ? e.color : e.baseColor));
  Z(g, (O) => {
    if (h.value) {
      const F = k.value.$el, $ = _.value.$el;
      requestAnimationFrame(() => {
        const I = Jl(F), M = $.getBoundingClientRect(), L = M.x - I.x, N = M.y - I.y - (I.height / 2 - M.height / 2), H = M.width / 0.75, K = Math.abs(H - I.width) > 1 ? { maxWidth: X(H) } : void 0, T = getComputedStyle(F), j = getComputedStyle($), W = 1e3 * parseFloat(T.transitionDuration) || 150, U = parseFloat(j.getPropertyValue("--v-field-label-scale")), ne = j.getPropertyValue("color");
        F.style.visibility = "visible", $.style.visibility = "hidden", ut(F, { transform: `translate(${L}px, ${N}px) scale(${U})`, color: ne, ...K }, { duration: W, easing: Qt, direction: O ? "normal" : "reverse" }).finished.then(() => {
          F.style.removeProperty("visibility"), $.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const S = y(() => ({ isActive: g, isFocused: i, controlRef: A, blur: f, focus: u }));
  function V(O) {
    O.target !== document.activeElement && O.preventDefault();
  }
  return le(() => {
    var L, N, H;
    const O = e.variant === "outlined", F = o["prepend-inner"] || e.prependInnerIcon, $ = !(!e.clearable && !o.clear), I = !!(o["append-inner"] || e.appendInnerIcon || $), M = o.label ? o.label({ ...S.value, label: e.label, props: { for: x.value } }) : e.label;
    return c("div", J({ class: ["v-field", { "v-field--active": g.value, "v-field--appended": I, "v-field--center-affix": e.centerAffix ?? !E.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": F, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !M, [`v-field--variant-${e.variant}`]: !0 }, r.value, B.value, s.value, a.value, d.value, v.value, e.class], style: [P.value, D.value, e.style], onClick: V }, t), [c("div", { class: "v-field__overlay" }, null), c(po, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: o.loader }), F && c("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && c(p, { key: "prepend-icon", name: "prependInner" }, null), (L = o["prepend-inner"]) == null ? void 0 : L.call(o, S.value)]), c("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && c(zt, { key: "floating-label", ref: _, class: [w.value], floating: !0, for: x.value }, { default: () => [M] }), c(zt, { ref: k, for: x.value }, { default: () => [M] }), (N = o.default) == null ? void 0 : N.call(o, { ...S.value, props: { id: x.value, class: "v-field__input", "aria-describedby": C.value }, focus: u, blur: f })]), $ && c(Ba, { key: "clear" }, { default: () => [$e(c("div", { class: "v-field__clearable", onMousedown: (K) => {
      K.preventDefault(), K.stopPropagation();
    } }, [o.clear ? o.clear() : c(p, { name: "clear" }, null)]), [[ht, e.dirty]])] }), I && c("div", { key: "append", class: "v-field__append-inner" }, [(H = o["append-inner"]) == null ? void 0 : H.call(o, S.value), e.appendInnerIcon && c(p, { key: "append-icon", name: "appendInner" }, null)]), c("div", { class: ["v-field__outline", w.value] }, [O && c(ae, null, [c("div", { class: "v-field__outline__start" }, null), h.value && c("div", { class: "v-field__outline__notch" }, [c(zt, { ref: _, floating: !0, for: x.value }, { default: () => [M] })]), c("div", { class: "v-field__outline__end" }, null)]), E.value && h.value && c(zt, { ref: _, floating: !0, for: x.value }, { default: () => [M] })])]);
  }), { controlRef: A };
} }), Xs = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ho = R({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...pn(), ...jo() }, "VTextField"), zl = q()({ name: "VTextField", directives: { Intersect: Fo }, inheritAttrs: !1, props: Ho(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const r = fe(e, "modelValue"), { isFocused: a, focus: s, blur: i } = dn(e), u = y(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : (r.value ?? "").toString().length), f = y(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), p = y(() => ["plain", "underlined"].includes(e.variant));
  function d(E, B) {
    var P, w;
    e.autofocus && E && ((w = (P = B[0].target) == null ? void 0 : P.focus) == null || w.call(P));
  }
  const v = G(), g = G(), h = G(), m = y(() => Xs.includes(e.type) || e.persistentPlaceholder || a.value || e.active);
  function x() {
    var E;
    h.value !== document.activeElement && ((E = h.value) == null || E.focus()), a.value || s();
  }
  function C(E) {
    n("mousedown:control", E), E.target !== h.value && (x(), E.preventDefault());
  }
  function k(E) {
    x(), n("click:control", E);
  }
  function _(E) {
    E.stopPropagation(), x(), Ie(() => {
      r.value = null, function(B) {
        for (var P = arguments.length, w = new Array(P > 1 ? P - 1 : 0), D = 1; D < P; D++)
          w[D - 1] = arguments[D];
        if (Array.isArray(B))
          for (const S of B)
            S(...w);
        else
          typeof B == "function" && B(...w);
      }(e["onClick:clear"], E);
    });
  }
  function A(E) {
    var P;
    const B = E.target;
    if (r.value = B.value, ((P = e.modelModifiers) == null ? void 0 : P.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const w = [B.selectionStart, B.selectionEnd];
      Ie(() => {
        B.selectionStart = w[0], B.selectionEnd = w[1];
      });
    }
  }
  return le(() => {
    const E = !!(o.counter || e.counter || e.counterValue), B = !(!E && !o.details), [P, w] = Yl(t), [{ modelValue: D, ...S }] = al.filterProps(e), [V] = function(O) {
      return It(O, Object.keys(Xn.props).filter((F) => !Ol(F) && F !== "class" && F !== "style"));
    }(e);
    return c(al, J({ ref: v, modelValue: r.value, "onUpdate:modelValue": (O) => r.value = O, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, P, S, { centerAffix: !p.value, focused: a.value }), { ...o, default: (O) => {
      let { id: F, isDisabled: $, isDirty: I, isReadonly: M, isValid: L } = O;
      return c(Xn, J({ ref: g, onMousedown: C, onClick: k, "onClick:clear": _, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, V, { id: F.value, active: m.value || I.value, dirty: I.value || e.dirty, disabled: $.value, focused: a.value, error: L.value === !1 }), { ...o, default: (N) => {
        let { props: { class: H, ...K } } = N;
        const T = $e(c("input", J({ ref: h, value: r.value, onInput: A, autofocus: e.autofocus, readonly: M.value, disabled: $.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: x, onBlur: i }, K, w), null), [[Ye("intersect"), { handler: d }, null, { once: !0 }]]);
        return c(ae, null, [e.prefix && c("span", { class: "v-text-field__prefix" }, [c("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), c("div", { class: H, "data-no-activator": "" }, [o.default ? c(ae, null, [o.default(), T]) : br(T)]), e.suffix && c("span", { class: "v-text-field__suffix" }, [c("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: B ? (O) => {
      var F;
      return c(ae, null, [(F = o.details) == null ? void 0 : F.call(o, O), E && c(ae, null, [c("span", null, null), c(qs, { active: e.persistentCounter || a.value, value: u.value, max: f.value }, o.counter)])]);
    } : void 0 });
  }), rn({}, v, g, h);
} }), Js = R({ renderless: Boolean, ...oe() }, "VVirtualScrollItem"), Zs = q()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Js(), emits: { "update:height": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { resizeRef: r, contentRect: a } = sn(void 0, "border");
  Z(() => {
    var s;
    return (s = a.value) == null ? void 0 : s.height;
  }, (s) => {
    s != null && n("update:height", s);
  }), le(() => {
    var s, i;
    return e.renderless ? c(ae, null, [(s = o.default) == null ? void 0 : s.call(o, { itemRef: r })]) : c("div", J({ ref: r, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(i = o.default) == null ? void 0 : i.call(o)]);
  });
} }), Qs = R({ itemHeight: { type: [Number, String], default: 48 } }, "virtual");
function ei(e, l, t) {
  const n = ie(0), o = ie(e.itemHeight), r = y({ get: () => parseInt(o.value ?? 0, 10), set(k) {
    o.value = k;
  } }), a = G(), { resizeRef: s, contentRect: i } = sn();
  Re(() => {
    s.value = a.value;
  });
  const u = _a(), f = /* @__PURE__ */ new Map();
  let p = Array.from({ length: l.value.length });
  const d = y(() => {
    const k = (i.value && a.value !== document.documentElement ? i.value.height : u.height.value) - ((t == null ? void 0 : t.value) ?? 0);
    return Math.ceil(k / r.value * 1.7 + 1);
  });
  function v(k) {
    return p.slice(0, k).reduce((_, A) => _ + (A || r.value), 0);
  }
  let g = 0;
  const h = y(() => Math.min(l.value.length, n.value + d.value)), m = y(() => l.value.slice(n.value, h.value).map((k, _) => ({ raw: k, index: _ + n.value }))), x = y(() => v(n.value)), C = y(() => v(l.value.length) - v(h.value));
  return Z(() => l.value.length, () => {
    p = Vl(l.value.length).map(() => r.value), f.forEach((k, _) => {
      const A = l.value.indexOf(_);
      A === -1 ? f.delete(_) : p[A] = k;
    });
  }), { containerRef: a, computedItems: m, itemHeight: r, paddingTop: x, paddingBottom: C, scrollToIndex: function(k) {
    if (!a.value)
      return;
    const _ = v(k);
    a.value.scrollTop = _;
  }, handleScroll: function() {
    if (!a.value || !i.value)
      return;
    const k = i.value.height - 56, _ = a.value.scrollTop, A = _ < g ? -1 : 1, E = function(D) {
      const S = l.value.length;
      let V = 0, O = 0;
      for (; O < D && V < S; )
        O += p[V++] || r.value;
      return V - 1;
    }(_ + k / 2), B = Math.round(d.value / 3), P = E - B, w = n.value + 2 * B - 1;
    A === -1 && E <= w ? n.value = tt(P, 0, l.value.length) : A === 1 && E >= w && (n.value = tt(P, 0, l.value.length - d.value)), g = _;
  }, handleItemResize: function(k, _) {
    r.value = Math.max(r.value, _), p[k] = _, f.set(l.value[k], _);
  } };
}
const ti = R({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Qs(), ...oe(), ...bt() }, "VVirtualScroll"), li = q()({ name: "VVirtualScroll", props: ti(), setup(e, l) {
  let { slots: t } = l;
  const n = Se("VVirtualScroll"), { dimensionStyles: o } = St(e), { containerRef: r, handleScroll: a, handleItemResize: s, scrollToIndex: i, paddingTop: u, paddingBottom: f, computedItems: p } = ei(e, z(e, "items"));
  return Ue(() => e.renderless, () => {
    at(() => {
      var d;
      r.value = Sa(n.vnode.el, !0), (d = r.value) == null || d.addEventListener("scroll", a);
    }), Be(() => {
      var d;
      (d = r.value) == null || d.removeEventListener("scroll", a);
    });
  }), le(() => {
    const d = p.value.map((v) => c(Zs, { key: v.index, renderless: e.renderless, "onUpdate:height": (g) => s(v.index, g) }, { default: (g) => {
      var h;
      return (h = t.default) == null ? void 0 : h.call(t, { item: v.raw, index: v.index, ...g });
    } }));
    return e.renderless ? c(ae, null, [c("div", { class: "v-virtual-scroll__spacer", style: { paddingTop: X(u.value) } }, null), d, c("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: X(f.value) } }, null)]) : c("div", { ref: r, class: ["v-virtual-scroll", e.class], onScroll: a, style: [o.value, e.style] }, [c("div", { class: "v-virtual-scroll__container", style: { paddingTop: X(u.value), paddingBottom: X(f.value) } }, [d])]);
  }), { scrollToIndex: i };
} });
function ni(e, l) {
  const t = ie(!1);
  let n;
  return { onListScroll: function(o) {
    cancelAnimationFrame(n), t.value = !0, n = requestAnimationFrame(() => {
      n = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }, onListKeydown: async function(o) {
    var s, i;
    if (o.key === "Tab" && ((s = l.value) == null || s.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o.key))
      return;
    const r = (i = e.value) == null ? void 0 : i.$el;
    if (!r)
      return;
    o.key !== "Home" && o.key !== "End" || r.scrollTo({ top: o.key === "Home" ? 0 : r.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => {
        if (t.value) {
          const f = Z(t, () => {
            f(), u();
          });
        } else
          u();
      });
    }();
    const a = r.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (o.key === "PageDown" || o.key === "Home") {
      const u = r.getBoundingClientRect().top;
      for (const f of a)
        if (f.getBoundingClientRect().top >= u) {
          f.focus();
          break;
        }
    } else {
      const u = r.getBoundingClientRect().bottom;
      for (const f of [...a].reverse())
        if (f.getBoundingClientRect().bottom <= u) {
          f.focus();
          break;
        }
    }
  } };
}
const ai = R({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: rt }, ...Lo({ itemChildren: !1 }) }, "Select"), oi = R({ ...ai(), ...Ul(Ho({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...Dt({ transition: { component: ka } }) }, "VSelect"), ri = q()({ name: "VSelect", props: oi(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { t: n } = wt(), o = G(), r = G(), a = fe(e, "menu"), s = y({ get: () => a.value, set: (F) => {
    var $;
    a.value && !F && (($ = r.value) != null && $.ΨopenChildren) || (a.value = F);
  } }), { items: i, transformIn: u, transformOut: f } = Rs(e), p = fe(e, "modelValue", [], (F) => u(F === null ? [null] : De(F)), (F) => {
    const $ = f(F);
    return e.multiple ? $ : $[0] ?? null;
  }), d = _o(), v = y(() => p.value.map((F) => i.value.find(($) => e.valueComparator($.value, F.value)) || F)), g = y(() => v.value.map((F) => F.props.value)), h = ie(!1);
  let m, x = "";
  const C = y(() => e.hideSelected ? i.value.filter((F) => !v.value.some(($) => $ === F)) : i.value), k = y(() => e.hideNoData && !i.value.length || e.readonly || (d == null ? void 0 : d.isReadonly.value)), _ = G(), { onListScroll: A, onListKeydown: E } = ni(_, o);
  function B(F) {
    e.openOnClear && (s.value = !0);
  }
  function P() {
    k.value || (s.value = !s.value);
  }
  function w(F) {
    var M, L;
    if (e.readonly || d != null && d.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(F.key) && F.preventDefault(), ["Enter", "ArrowDown", " "].includes(F.key) && (s.value = !0), ["Escape", "Tab"].includes(F.key) && (s.value = !1), F.key === "Home" ? (M = _.value) == null || M.focus("first") : F.key === "End" && ((L = _.value) == null || L.focus("last")), e.multiple || !function(N) {
      const H = N.key.length === 1, K = !N.ctrlKey && !N.metaKey && !N.altKey;
      return H && K;
    }(F)))
      return;
    const $ = performance.now();
    $ - m > 1e3 && (x = ""), x += F.key.toLowerCase(), m = $;
    const I = i.value.find((N) => N.title.toLowerCase().startsWith(x));
    I !== void 0 && (p.value = [I]);
  }
  function D(F) {
    if (e.multiple) {
      const $ = g.value.findIndex((I) => e.valueComparator(I, F.value));
      if ($ === -1)
        p.value = [...p.value, F];
      else {
        const I = [...p.value];
        I.splice($, 1), p.value = I;
      }
    } else
      p.value = [F], s.value = !1;
  }
  function S(F) {
    var $;
    ($ = _.value) != null && $.$el.contains(F.relatedTarget) || (s.value = !1);
  }
  function V() {
    var F;
    h.value && ((F = o.value) == null || F.focus());
  }
  function O(F) {
    h.value = !0;
  }
  return le(() => {
    const F = !(!e.chips && !t.chip), $ = !!(!e.hideNoData || C.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), I = p.value.length > 0, [M] = zl.filterProps(e), L = I || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return c(zl, J({ ref: o }, M, { modelValue: p.value.map((N) => N.props.value).join(", "), "onUpdate:modelValue": (N) => {
      N == null && (p.value = []);
    }, focused: h.value, "onUpdate:focused": (N) => h.value = N, validationValue: p.externalValue, dirty: I, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": p.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: L, "onClick:clear": B, "onMousedown:control": P, onBlur: S, onKeydown: w }), { ...t, default: () => c(ae, null, [c(Gs, J({ ref: r, modelValue: s.value, "onUpdate:modelValue": (N) => s.value = N, activator: "parent", contentClass: "v-select__content", disabled: k.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: V }, e.menuProps), { default: () => [$ && c(Ws, { ref: _, selected: g.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (N) => N.preventDefault(), onKeydown: E, onFocusin: O, onScrollPassive: A, tabindex: "-1" }, { default: () => {
      var N, H, K;
      return [(N = t["prepend-item"]) == null ? void 0 : N.call(t), !C.value.length && !e.hideNoData && (((H = t["no-data"]) == null ? void 0 : H.call(t)) ?? c(rl, { title: n(e.noDataText) }, null)), c(li, { renderless: !0, items: C.value }, { default: (T) => {
        var ee;
        let { item: j, index: W, itemRef: U } = T;
        const ne = J(j.props, { ref: U, key: W, onClick: () => D(j) });
        return ((ee = t.item) == null ? void 0 : ee.call(t, { item: j, index: W, props: ne })) ?? c(rl, ne, { prepend: (Q) => {
          let { isSelected: ue } = Q;
          return c(ae, null, [e.multiple && !e.hideSelected ? c(mt, { key: j.value, modelValue: ue, ripple: !1, tabindex: "-1" }, null) : void 0, j.props.prependIcon && c(he, { icon: j.props.prependIcon }, null)]);
        } });
      } }), (K = t["append-item"]) == null ? void 0 : K.call(t)];
    } })] }), v.value.map((N, H) => {
      var T;
      const K = { "onClick:close": function(j) {
        j.stopPropagation(), j.preventDefault(), D(N);
      }, onMousedown(j) {
        j.preventDefault(), j.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return c("div", { key: N.value, class: "v-select__selection" }, [F ? t.chip ? c(Ee, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: N.title } } }, { default: () => {
        var j;
        return [(j = t.chip) == null ? void 0 : j.call(t, { item: N, index: H, props: K })];
      } }) : c(Bs, J({ key: "chip", closable: e.closableChips, size: "small", text: N.title }, K), null) : ((T = t.selection) == null ? void 0 : T.call(t, { item: N, index: H })) ?? c("span", { class: "v-select__selection-text" }, [N.title, e.multiple && H < v.value.length - 1 && c("span", { class: "v-select__selection-comma" }, [Yt(",")])])]);
    })]), "append-inner": function() {
      var T;
      for (var N = arguments.length, H = new Array(N), K = 0; K < N; K++)
        H[K] = arguments[K];
      return c(ae, null, [(T = t["append-inner"]) == null ? void 0 : T.call(t, ...H), e.menuIcon ? c(he, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), rn({ isFocused: h, menu: s, select: D }, o);
} }), fn = R({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), sl = q()({ name: "VDataTableFooter", props: fn(), setup(e, l) {
  let { slots: t } = l;
  const { t: n } = wt(), { page: o, pageCount: r, startIndex: a, stopIndex: s, itemsLength: i, itemsPerPage: u, setItemsPerPage: f } = function() {
    const d = ve(za);
    if (!d)
      throw new Error("Missing pagination!");
    return d;
  }(), p = y(() => e.itemsPerPageOptions.map((d) => ({ ...d, title: n(d.title) })));
  return () => {
    var d;
    return c("div", { class: "v-data-table-footer" }, [(d = t.prepend) == null ? void 0 : d.call(t), c("div", { class: "v-data-table-footer__items-per-page" }, [c("span", null, [n(e.itemsPerPageText)]), c(ri, { items: p.value, modelValue: u.value, "onUpdate:modelValue": (v) => f(Number(v)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), c("div", { class: "v-data-table-footer__info" }, [c("div", null, [n(e.pageText, i.value ? a.value + 1 : 0, s.value, i.value)])]), c("div", { class: "v-data-table-footer__pagination" }, [c(ct, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": n(e.firstPageLabel) }, null), c(ct, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": n(e.prevPageLabel) }, null), e.showCurrentPage && c("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), c(ct, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(r.value, o.value + 1), disabled: o.value === r.value, "aria-label": n(e.nextPageLabel) }, null), c(ct, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = r.value, disabled: o.value === r.value, "aria-label": n(e.lastPageLabel) }, null)])]);
  };
} }), mn = (Jn = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Al = (e, l) => {
  let { slots: t, attrs: n } = l;
  const o = e.tag ?? "td";
  return c(o, J({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: X(e.height), width: X(e.width), left: X(e.fixedOffset || null) } }, n), { default: () => {
    var r;
    return [(r = t.default) == null ? void 0 : r.call(t)];
  } });
}, Al.props = Jn, Al);
var Jn, Al;
const si = R({ headers: { type: Array, default: () => [] } }, "DataTable-header"), Wo = Symbol.for("vuetify:data-table-headers");
function zo(e, l) {
  const t = G([]), n = G([]);
  Re(() => {
    var v, g, h;
    const r = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], a = r.flatMap((m, x) => m.map((C) => ({ column: C, row: x }))), s = r.length, i = { title: "", sortable: !1 }, u = { ...i, width: 48 };
    if ((v = l == null ? void 0 : l.groupBy) != null && v.value.length) {
      const m = a.findIndex((x) => {
        let { column: C } = x;
        return C.key === "data-table-group";
      });
      m < 0 ? a.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : a.splice(m, 1, { column: { ...i, ...a[m].column }, row: a[m].row });
    }
    if ((g = l == null ? void 0 : l.showSelect) != null && g.value) {
      const m = a.findIndex((x) => {
        let { column: C } = x;
        return C.key === "data-table-select";
      });
      m < 0 ? a.unshift({ column: { ...u, key: "data-table-select", rowspan: s }, row: 0 }) : a.splice(m, 1, { column: { ...u, ...a[m].column }, row: a[m].row });
    }
    if ((h = l == null ? void 0 : l.showExpand) != null && h.value) {
      const m = a.findIndex((x) => {
        let { column: C } = x;
        return C.key === "data-table-expand";
      });
      m < 0 ? a.push({ column: { ...u, key: "data-table-expand", rowspan: s }, row: 0 }) : a.splice(m, 1, { column: { ...u, ...a[m].column }, row: a[m].row });
    }
    const f = Vl(s).map(() => []), p = Vl(s).fill(0);
    a.forEach((m) => {
      let { column: x, row: C } = m, k = x.key;
      k == null && (Zl("The header key value must not be null or undefined"), k = "");
      for (let _ = C; _ <= C + (x.rowspan ?? 1) - 1; _++)
        f[_].push({ ...x, key: k, fixedOffset: p[_], sortable: x.sortable ?? !!x.key }), p[_] += Number(x.width ?? 0);
    }), f.forEach((m) => {
      for (let x = m.length; x--; x >= 0)
        if (m[x].fixed)
          return void (m[x].lastFixed = !0);
    });
    const d = /* @__PURE__ */ new Set();
    t.value = f.map((m) => {
      const x = [];
      for (const C of m)
        d.has(C.key) || (d.add(C.key), x.push(C));
      return x;
    }), n.value = f.at(-1) ?? [];
  });
  const o = { headers: t, columns: n };
  return ye(Wo, o), o;
}
function bl() {
  const e = ve(Wo);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Go = R({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...un() }, "VDataTableHeaders"), il = q()({ name: "VDataTableHeaders", props: Go(), setup(e, l) {
  let { slots: t, emit: n } = l;
  const { toggleSort: o, sortBy: r, isSorted: a } = function() {
    const _ = ve(Ja);
    if (!_)
      throw new Error("Missing sort!");
    return _;
  }(), { someSelected: s, allSelected: i, selectAll: u, showSelectAll: f } = ml(), { columns: p, headers: d } = bl(), { loaderClasses: v } = cn(e), g = (_, A) => {
    if (e.sticky || _.fixed)
      return { position: "sticky", zIndex: _.fixed ? 4 : e.sticky ? 3 : void 0, left: _.fixed ? X(_.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${A})` : void 0 };
  };
  function h(_) {
    const A = r.value.find((E) => E.key === _.key);
    return A ? A.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: m, backgroundColorStyles: x } = ft(e, "color"), C = y(() => ({ headers: d.value, columns: p.value, toggleSort: o, isSorted: a, sortBy: r.value, someSelected: s.value, allSelected: i.value, selectAll: u, getSortIcon: h, getFixedStyles: g })), k = (_) => {
    let { column: A, x: E, y: B } = _;
    const P = A.key === "data-table-select" || A.key === "data-table-expand";
    return c(mn, { tag: "th", align: A.align, class: ["v-data-table__th", { "v-data-table__th--sortable": A.sortable, "v-data-table__th--sorted": a(A) }, v.value], style: { width: X(A.width), minWidth: X(A.width), ...g(A, B) }, colspan: A.colspan, rowspan: A.rowspan, onClick: A.sortable ? () => o(A) : void 0, lastFixed: A.lastFixed, noPadding: P }, { default: () => {
      var S;
      const w = `column.${A.key}`, D = { column: A, selectAll: u, isSorted: a, toggleSort: o, sortBy: r.value, someSelected: s.value, allSelected: i.value, getSortIcon: h };
      return t[w] ? t[w](D) : A.key === "data-table-select" ? ((S = t["column.data-table-select"]) == null ? void 0 : S.call(t, D)) ?? (f && c(mt, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": u }, null)) : c("div", { class: "v-data-table-header__content" }, [c("span", null, [A.title]), A.sortable && c(he, { key: "icon", class: "v-data-table-header__sort-icon", icon: h(A) }, null), e.multiSort && a(A) && c("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...m.value], style: x.value }, [r.value.findIndex((V) => V.key === A.key) + 1])]);
    } });
  };
  le(() => c(ae, null, [t.headers ? t.headers(C.value) : d.value.map((_, A) => c("tr", null, [_.map((E, B) => c(k, { column: E, x: B, y: A }, null))])), e.loading && c("tr", { class: "v-data-table-progress" }, [c("th", { colspan: p.value.length }, [c(po, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), ii = R({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), ui = q()({ name: "VDataTableGroupHeaderRow", props: ii(), setup(e, l) {
  let { slots: t } = l;
  const { isGroupOpen: n, toggleGroup: o, extractRows: r } = Ma(), { isSelected: a, isSomeSelected: s, select: i } = ml(), { columns: u } = bl(), f = y(() => r([e.item]));
  return () => c("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((p) => {
    var d, v;
    if (p.key === "data-table-group") {
      const g = n(e.item) ? "$expand" : "$next", h = () => o(e.item);
      return ((d = t["data-table-group"]) == null ? void 0 : d.call(t, { item: e.item, count: f.value.length, props: { icon: g, onClick: h } })) ?? c(mn, { class: "v-data-table-group-header-row__column" }, { default: () => [c(ct, { size: "small", variant: "text", icon: g, onClick: h }, null), c("span", null, [e.item.value]), c("span", null, [Yt("("), f.value.length, Yt(")")])] });
    }
    if (p.key === "data-table-select") {
      const g = a(f.value), h = s(f.value) && !g, m = (x) => i(f.value, x);
      return ((v = t["data-table-select"]) == null ? void 0 : v.call(t, { props: { modelValue: g, indeterminate: h, "onUpdate:modelValue": m } })) ?? c("td", null, [c(mt, { modelValue: g, indeterminate: h, "onUpdate:modelValue": m }, null)]);
    }
    return c("td", null, null);
  })]);
} }), ci = vt({ name: "VDataTableRow", props: R({ index: Number, item: Object, onClick: Function }, "VDataTableRow")(), setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, toggleSelect: o } = ml(), { isExpanded: r, toggleExpand: a } = Oa(), { columns: s } = bl();
  le(() => c("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, u) => c(mn, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var v, g;
    const f = e.item, p = `item.${i.key}`, d = { index: e.index, item: e.item, columns: s.value, isSelected: n, toggleSelect: o, isExpanded: r, toggleExpand: a };
    return t[p] ? t[p](d) : i.key === "data-table-select" ? ((v = t["item.data-table-select"]) == null ? void 0 : v.call(t, d)) ?? c(mt, { disabled: !f.selectable, modelValue: n([f]), onClick: $l(() => o(f), ["stop"]) }, null) : i.key === "data-table-expand" ? ((g = t["item.data-table-expand"]) == null ? void 0 : g.call(t, d)) ?? c(ct, { icon: r(f) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: $l(() => a(f), ["stop"]) }, null) : xe(f.columns, i.key);
  } }))]));
} }), Ko = R({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), ul = q()({ name: "VDataTableRows", props: Ko(), setup(e, l) {
  let { emit: t, slots: n } = l;
  const { columns: o } = bl(), { expandOnClick: r, toggleExpand: a, isExpanded: s } = Oa(), { isSelected: i, toggleSelect: u } = ml(), { toggleGroup: f, isGroupOpen: p } = Ma(), { t: d } = wt();
  return le(() => {
    var v;
    return e.loading && n.loading ? c("tr", { class: "v-data-table-rows-loading", key: "loading" }, [c("td", { colspan: o.value.length }, [n.loading()])]) : e.loading || e.items.length || e.hideNoData ? c(ae, null, [e.items.map((g, h) => {
      var C;
      if (g.type === "group")
        return n["group-header"] ? n["group-header"]({ index: h, item: g, columns: o.value, isExpanded: s, toggleExpand: a, isSelected: i, toggleSelect: u, toggleGroup: f, isGroupOpen: p }) : c(ui, { key: `group-header_${g.id}`, item: g }, n);
      const m = { index: h, item: g, columns: o.value, isExpanded: s, toggleExpand: a, isSelected: i, toggleSelect: u }, x = { ...m, props: { key: `item_${g.key ?? g.index}`, onClick: r.value || e["onClick:row"] ? (k) => {
        var _;
        r.value && a(g), (_ = e["onClick:row"]) == null || _.call(e, k, { item: g });
      } : void 0, index: h, item: g } };
      return c(ae, null, [n.item ? n.item(x) : c(ci, x.props, n), s(g) && ((C = n["expanded-row"]) == null ? void 0 : C.call(n, m))]);
    })]) : c("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [c("td", { colspan: o.value.length }, [((v = n["no-data"]) == null ? void 0 : v.call(n)) ?? d(e.noDataText)])]);
  }), {};
} }), qo = R({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...oe(), ...ze(), ...ke(), ...we() }, "VTable"), cl = q()({ name: "VTable", props: qo(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Pe(e), { densityClasses: o } = Ge(e);
  return le(() => c(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, n.value, o.value, e.class], style: e.style }, { default: () => {
    var r, a, s;
    return [(r = t.top) == null ? void 0 : r.call(t), t.default ? c("div", { class: "v-table__wrapper", style: { height: X(e.height) } }, [c("table", null, [t.default()])]) : (a = t.wrapper) == null ? void 0 : a.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), di = R({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function pi(e, l, t) {
  return l.map((n, o) => function(r, a, s, i) {
    const u = r.returnObject ? a : xe(a, r.itemValue), f = xe(a, r.itemSelectable, !0), p = i.reduce((d, v) => (d[v.key] = xe(a, v.value ?? v.key), d), {});
    return { type: "item", key: r.returnObject ? xe(a, r.itemValue) : u, index: s, value: u, selectable: f, columns: p, raw: a };
  }(e, n, o, t));
}
function Uo(e, l) {
  return { items: y(() => pi(e, e.items, l.value)) };
}
const Yo = R({ ...Ko(), width: [String, Number], search: String, ...qr(), ...Ur(), ...si(), ...di(), ...Xr(), ...Jr(), ...Go(), ...qo() }, "DataTable"), vi = R({ ...Wa(), ...Yo(), ...Gr(), ...fn() }, "VDataTable"), fi = q()({ name: "VDataTable", props: vi(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Ta(e), { sortBy: r, multiSort: a, mustSort: s } = Za(e), { page: i, itemsPerPage: u } = Ga(e), { columns: f, headers: p } = zo(e, { groupBy: o, showSelect: z(e, "showSelect"), showExpand: z(e, "showExpand") }), { items: d } = Uo(e, f), v = z(e, "search"), { filteredItems: g } = Kr(e, d, v, { transform: (j) => j.columns }), { toggleSort: h } = Qa({ sortBy: r, multiSort: a, mustSort: s, page: i }), { sortByWithGroups: m, opened: x, extractRows: C, isGroupOpen: k, toggleGroup: _ } = La({ groupBy: o, sortBy: r }), { sortedItems: A } = Zr(e, g, m), { flatItems: E } = ja(A, o, x), B = y(() => E.value.length), { startIndex: P, stopIndex: w, pageCount: D, setItemsPerPage: S } = Ka({ page: i, itemsPerPage: u, itemsLength: B }), { paginatedItems: V } = function(j) {
    const { items: W, startIndex: U, stopIndex: ne, itemsPerPage: ee } = j;
    return { paginatedItems: y(() => ee.value <= 0 ? W.value : W.value.slice(U.value, ne.value)) };
  }({ items: E, startIndex: P, stopIndex: w, itemsPerPage: u }), O = y(() => C(V.value)), { isSelected: F, select: $, selectAll: I, toggleSelect: M, someSelected: L, allSelected: N } = Xa(e, { allItems: d, currentPage: O }), { isExpanded: H, toggleExpand: K } = Ia(e);
  Ha({ page: i, itemsPerPage: u, sortBy: r, groupBy: o, search: v }), Je({ VDataTableRows: { hideNoData: z(e, "hideNoData"), noDataText: z(e, "noDataText"), loading: z(e, "loading"), loadingText: z(e, "loadingText") } });
  const T = y(() => ({ page: i.value, itemsPerPage: u.value, sortBy: r.value, pageCount: D.value, toggleSort: h, setItemsPerPage: S, someSelected: L.value, allSelected: N.value, isSelected: F, select: $, selectAll: I, toggleSelect: M, isExpanded: H, toggleExpand: K, isGroupOpen: k, toggleGroup: _, items: O.value, groupedItems: V.value, columns: f.value, headers: p.value }));
  return le(() => {
    const [j] = sl.filterProps(e), [W] = il.filterProps(e), [U] = ul.filterProps(e), [ne] = cl.filterProps(e);
    return c(cl, J({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, ne), { top: () => {
      var ee;
      return (ee = n.top) == null ? void 0 : ee.call(n, T.value);
    }, default: () => {
      var ee, Q, ue, Ce;
      return n.default ? n.default(T.value) : c(ae, null, [(ee = n.colgroup) == null ? void 0 : ee.call(n, T.value), c("thead", null, [c(il, W, n)]), (Q = n.thead) == null ? void 0 : Q.call(n, T.value), c("tbody", null, [n.body ? n.body(T.value) : c(ul, J(U, { items: V.value }), n)]), (ue = n.tbody) == null ? void 0 : ue.call(n, T.value), (Ce = n.tfoot) == null ? void 0 : Ce.call(n, T.value)]);
    }, bottom: () => n.bottom ? n.bottom(T.value) : c(ae, null, [c(sl, j, { prepend: n["footer.prepend"] })]) });
  }), {};
} }), mi = R({ itemsLength: { type: [Number, String], required: !0 }, ...Wa(), ...Yo(), ...fn() }, "VDataTableServer"), gi = q()({ name: "VDataTableServer", props: mi(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0, "click:row": (e, l) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Ta(e), { sortBy: r, multiSort: a, mustSort: s } = Za(e), { page: i, itemsPerPage: u } = Ga(e), f = y(() => parseInt(e.itemsLength, 10)), { columns: p, headers: d } = zo(e, { groupBy: o, showSelect: z(e, "showSelect"), showExpand: z(e, "showExpand") }), { items: v } = Uo(e, p), { toggleSort: g } = Qa({ sortBy: r, multiSort: a, mustSort: s, page: i }), { opened: h, isGroupOpen: m, toggleGroup: x, extractRows: C } = La({ groupBy: o, sortBy: r }), { pageCount: k, setItemsPerPage: _ } = Ka({ page: i, itemsPerPage: u, itemsLength: f }), { flatItems: A } = ja(v, o, h), { isSelected: E, select: B, selectAll: P, toggleSelect: w, someSelected: D, allSelected: S } = Xa(e, { allItems: v, currentPage: v }), { isExpanded: V, toggleExpand: O } = Ia(e), F = y(() => C(v.value));
  Ha({ page: i, itemsPerPage: u, sortBy: r, groupBy: o, search: z(e, "search") }), ye("v-data-table", { toggleSort: g, sortBy: r }), Je({ VDataTableRows: { hideNoData: z(e, "hideNoData"), noDataText: z(e, "noDataText"), loading: z(e, "loading"), loadingText: z(e, "loadingText") } });
  const $ = y(() => ({ page: i.value, itemsPerPage: u.value, sortBy: r.value, pageCount: k.value, toggleSort: g, setItemsPerPage: _, someSelected: D.value, allSelected: S.value, isSelected: E, select: B, selectAll: P, toggleSelect: w, isExpanded: V, toggleExpand: O, isGroupOpen: m, toggleGroup: x, items: F.value, groupedItems: A.value, columns: p.value, headers: d.value }));
  le(() => {
    const [I] = sl.filterProps(e), [M] = il.filterProps(e), [L] = ul.filterProps(e), [N] = cl.filterProps(e);
    return c(cl, J({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, N), { top: () => {
      var H;
      return (H = n.top) == null ? void 0 : H.call(n, $.value);
    }, default: () => {
      var H, K, T, j;
      return n.default ? n.default($.value) : c(ae, null, [(H = n.colgroup) == null ? void 0 : H.call(n, $.value), c("thead", { class: "v-data-table__thead", role: "rowgroup" }, [c(il, J(M, { sticky: e.fixedHeader }), n)]), (K = n.thead) == null ? void 0 : K.call(n, $.value), c("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [n.body ? n.body($.value) : c(ul, J(L, { items: A.value }), n)]), (T = n.tbody) == null ? void 0 : T.call(n, $.value), (j = n.tfoot) == null ? void 0 : j.call(n, $.value)]);
    }, bottom: () => n.bottom ? n.bottom($.value) : c(sl, I, { prepend: n["footer.prepend"] }) });
  });
} }), Xo = fl.reduce((e, l) => (e[l] = { type: [Boolean, String, Number], default: !1 }, e), {}), Jo = fl.reduce((e, l) => (e["offset" + Vt(l)] = { type: [String, Number], default: null }, e), {}), Zo = fl.reduce((e, l) => (e["order" + Vt(l)] = { type: [String, Number], default: null }, e), {}), Zn = { col: Object.keys(Xo), offset: Object.keys(Jo), order: Object.keys(Zo) };
function yi(e, l, t) {
  let n = e;
  if (t != null && t !== !1)
    return l && (n += `-${l.replace(e, "")}`), e === "col" && (n = "v-" + n), (e !== "col" || t !== "" && t !== !0) && (n += `-${t}`), n.toLowerCase();
}
const hi = ["auto", "start", "end", "center", "baseline", "stretch"], bi = R({ cols: { type: [Boolean, String, Number], default: !1 }, ...Xo, offset: { type: [String, Number], default: null }, ...Jo, order: { type: [String, Number], default: null }, ...Zo, alignSelf: { type: String, default: null, validator: (e) => hi.includes(e) }, ...oe(), ...ke() }, "VCol"), dt = q()({ name: "VCol", props: bi(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => {
    const o = [];
    let r;
    for (r in Zn)
      Zn[r].forEach((s) => {
        const i = e[s], u = yi(r, s, i);
        u && o.push(u);
      });
    const a = o.some((s) => s.startsWith("v-col-"));
    return o.push({ "v-col": !a || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return gt(e.tag, { class: [n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), gn = ["start", "end", "center"], Qo = ["space-between", "space-around", "space-evenly"];
function yn(e, l) {
  return fl.reduce((t, n) => (t[e + Vt(n)] = l(), t), {});
}
const Si = [...gn, "baseline", "stretch"], er = (e) => Si.includes(e), tr = yn("align", () => ({ type: String, default: null, validator: er })), wi = [...gn, ...Qo], lr = (e) => wi.includes(e), nr = yn("justify", () => ({ type: String, default: null, validator: lr })), xi = [...gn, ...Qo, "stretch"], ar = (e) => xi.includes(e), or = yn("alignContent", () => ({ type: String, default: null, validator: ar })), Qn = { align: Object.keys(tr), justify: Object.keys(nr), alignContent: Object.keys(or) }, ki = { align: "align", justify: "justify", alignContent: "align-content" };
function Ci(e, l, t) {
  let n = ki[e];
  if (t != null)
    return l && (n += `-${l.replace(e, "")}`), n += `-${t}`, n.toLowerCase();
}
const Bi = R({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: er }, ...tr, justify: { type: String, default: null, validator: lr }, ...nr, alignContent: { type: String, default: null, validator: ar }, ...or, ...oe(), ...ke() }, "VRow"), rr = q()({ name: "VRow", props: Bi(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => {
    const o = [];
    let r;
    for (r in Qn)
      Qn[r].forEach((a) => {
        const s = e[a], i = Ci(r, a, s);
        i && o.push(i);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return gt(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), sr = { colors: () => ({ default: { background: "primary", base: "primary", border: "primary", color: "on-primary" }, footer: { background: "--v-theme-surface", color: "--v-theme-on-surface" }, header: { background: "primary", color: "on-primary" }, percentageChange: 15, percentageDirection: "desc", table: { bottomBorder: "primary" } }), columnWidths: () => [], density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footers: () => [], height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, multiSort: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 0, searchEvents: () => ({}), searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }, Pi = Xe({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (l, t) => de(l.$slots, "bottom") }), te = "v-drilldown-table";
function ea(e, l, t = "") {
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
function _i(e, l, t = "") {
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
      return o != null && s && typeof s == "string" ? o[s] !== void 0 ? o[s] : (s = s.replace(/\[(\w+)\]/g, ".$1"), s = s.replace(/^\./, ""), ea(o, s.split("."), a)) : a;
    }(e, l, t);
  if (Array.isArray(l))
    return ea(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
const ta = (e) => {
  const { id: l, sortBy: t } = e;
  if (t) {
    const n = t.find((o) => o.key === l);
    if (n)
      return n.order;
  }
}, Bt = (e) => {
  const { str: l, unit: t = "px" } = e;
  if (l != null && l !== "")
    return +l ? `${Number(l)}${t}` : String(l);
};
function ir(e) {
  const l = e.title, t = [l, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : l || "";
}
function Fl(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Pt(e, ...l) {
  if (!l.length)
    return e;
  const t = l.shift();
  if (Fl(e) && Fl(t))
    for (const n in t)
      Fl(t[n]) ? (e[n] || Object.assign(e, { [n]: {} }), Pt(e[n], t[n])) : Object.assign(e, { [n]: t[n] });
  return Pt(e, ...l);
}
const ur = (e) => {
  const { align: l } = e;
  return { "d-flex align-center": !0, [`justify-${l}`]: l, "justify-start": !l };
}, cr = (e) => {
  const { level: l } = e;
  return { "d-flex": !0, [`${te}--header-select-all-checkbox`]: !0, [`${te}--header-select-all-checkbox-${l}`]: !0 };
};
function dr(e) {
  return e === "transparent" || e === "none" || e === "inherit" || e === "currentColor" || e === "initial" || e === "unset";
}
function pr(e) {
  return e.includes("--v-theme");
}
const Ai = (e, l) => {
  if (dr(e))
    return e;
  if (pr(e))
    return `rgb(var(${e}))`;
  const t = function(n, o) {
    const r = o.global.current.value.colors;
    return Object.entries(r).find(([a]) => a === n);
  }(e, l);
  return t ? `hsl(${dl(t[1])})` : `hsl(${dl(e)})`;
}, Fi = (e) => {
  const { colors: l, level: t, prop: n = "default", theme: o, type: r } = e, a = { ...l[n] }, s = l.percentageDirection;
  if (a === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let i = ((u, f, p) => {
    let d = 100, v = u.percentageChange ?? 0;
    return isNaN(v) && (d = 100), v *= f, p !== "desc" && p !== "descending" || (d = 100 - v), p !== "asc" && p !== "ascending" || (d = 0 + v), d < 0 && (d = 0), d > 100 && (d = 100), isNaN(d) && (d = 100), d;
  })(l, t - 1, s);
  return r || Object.entries(a).forEach(([u, f]) => {
    let p = o.global.current.value.colors[f] ?? f;
    if (p || (p = "transparent"), dr(p))
      return void (a[u] = p);
    if ((u === "color" || t === 0 && s === "asc") && (i = 100), pr(p))
      return void (a[u] = `rgb(var(${p}))`);
    const d = `/ ${i}%`, v = dl(p);
    if (v.includes("/"))
      return a[u] = `hsl(${v})`;
    a[u] = `hsl(${dl(p)} ${d})`;
  }), a;
};
function dl(e) {
  let l = function(f) {
    const p = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let d = f;
    return Object.entries(p).forEach(([v, g]) => {
      f.toLowerCase() != v.toLowerCase() || (d = g);
    }), d;
  }(e), t = 0, n = 0, o = 0, r = 0, a = 0, s = 0;
  if (l.substring(0, 1) === "#")
    l = function(f) {
      let p = f.replace("#", "");
      p.length === 3 && (p = p.split("").map((h) => h + h).join(""));
      const d = parseInt(p.substring(0, 2), 16), v = parseInt(p.substring(2, 4), 16), g = parseInt(p.substring(4, 6), 16);
      return [d, v, g];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/\d+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/\d+/g)].map(Number), t = l[0], n = l[1], o = l[2], `${t} ${n}% ${o}%`;
  [r, a, s] = l, r /= 255, a /= 255, s /= 255;
  const i = Math.max(r, a, s), u = Math.min(r, a, s);
  if (i === null || !u === null || isNaN(i) || isNaN(u)) {
    const f = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${f})" in it's place.`), f;
  }
  if (t = (i + u) / 2, n = (i + u) / 2, o = (i + u) / 2, i == u)
    t = n = 0;
  else {
    const f = i - u;
    switch (n = o > 0.5 ? f / (2 - i - u) : f / (i + u), i) {
      case r:
        t = (a - s) / f + (a < s ? 6 : 0);
        break;
      case a:
        t = (s - r) / f + 2;
        break;
      case s:
        t = (r - a) / f + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), n = Math.round(100 * n), o = Math.round(100 * o), `${t} ${n}% ${o}%`;
}
const hn = (e) => {
  const { colors: l, level: t, prop: n = "default", themeColors: o, type: r = null } = e;
  if (typeof l != "object" || l === null)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should not be called.');
  const a = Fi({ colors: l, level: t, prop: n, theme: o, type: r });
  return r ? a[r] : a;
}, $i = ["colspan"], Vi = Xe({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const l = e, t = vl(), n = y(() => ((x) => {
    const { isLinearOnly: C, loaderHeight: k } = x;
    let _ = { height: 0, minHeight: 0 };
    return b(C) && (_ = { height: b(k), minHeight: b(k) }), _;
  })({ isLinearOnly: u, loaderHeight: i })), o = y(() => ((x) => {
    const { isLinearOnly: C, loaderHeight: k } = x;
    return b(C) ? { height: b(k), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: u, loaderHeight: i })), r = y(() => ((x) => {
    const { isLinearOnly: C } = x;
    return { [`${te}--loader-tr`]: !0, [`${te}--loader-tr-not-linear`]: !b(C), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: u })), a = y(() => ({ [`${te}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), s = y(() => {
    var x;
    return ((x = l.loaderProps) == null ? void 0 : x.linear) ?? {};
  }), i = y(() => {
    var x, C;
    return function(k) {
      return Bt({ str: k }) || "2px";
    }(((C = (x = l.loaderProps) == null ? void 0 : x.linear) == null ? void 0 : C.height) || "2px");
  }), u = y(() => {
    let x = !1;
    return l.loaderType !== null && l.loaderType !== !1 && (x = function(C) {
      let k = !1;
      return C === "linear" && (k = !0), Array.isArray(C) && (k = C.length === 1 && C[0] === "linear"), k;
    }(l.loaderType)), x;
  }), f = y(() => {
    var x;
    return ((x = l.loaderProps) == null ? void 0 : x.circular) ?? {};
  }), p = y(() => {
    var x;
    return ((x = l.loaderProps) == null ? void 0 : x.skelton) ?? {};
  }), d = y(() => l.loading), v = y(() => {
    var C, k;
    let x = ((k = (C = l.loaderProps) == null ? void 0 : C.text) == null ? void 0 : k.color) ?? "surface-variant";
    return x = Ai(x, t), { color: x };
  }), g = y(() => l.loadingText || "Loading..."), h = (x) => {
    const C = l.loaderType;
    return Array.isArray(C) ? C.indexOf(x) : 1;
  }, m = (x) => {
    const C = l.loaderType;
    return x === l.loaderType || !!Array.isArray(C) && C.includes(x);
  };
  return (x, C) => {
    const k = va("v-skeleton-loader");
    return Y(), ce("tr", { class: se(b(r)), style: Ae(b(n)) }, [Me("td", { class: "px-0 ma-0", colspan: x.colspan, style: Ae(b(o)) }, [x.loading ? (Y(), me(rr, { key: 0, class: se(b(a)), "no-gutters": "" }, { default: re(() => [m("linear") ? (Y(), me(dt, { key: 0, class: "pa-0 ma-0", order: h("linear") }, { default: re(() => [c(co, be(Ve(b(s))), null, 16)]), _: 1 }, 8, ["order"])) : ge("", !0), m("circular") ? (Y(), me(dt, { key: 1, class: "pa-0 my-2", order: h("circular") }, { default: re(() => [c(so, be(Ve(b(f))), null, 16)]), _: 1 }, 8, ["order"])) : ge("", !0), m("skelton") ? (Y(), me(dt, { key: 2, class: "pa-0 ma-0", order: h("skelton") }, { default: re(() => [c(k, J(b(p), { loading: b(d) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : ge("", !0), m("text") ? (Y(), me(dt, { key: 3, class: "my-2", order: h("text"), style: Ae(b(v)) }, { default: re(() => [Yt(Sr(b(g)), 1)]), _: 1 }, 8, ["order", "style"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0)], 12, $i)], 6);
  };
} }), bn = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, Ei = bn(Vi, [["__scopeId", "data-v-fbedf16d"]]), Ii = ["colspan"], Oi = ["colspan", "innerHTML"], Di = ["colspan"], Ti = ["colspan", "innerHTML"], Li = ["colspan", "onClick"], Mi = ["innerHTML"], Ni = Xe({ __name: "HeadersSlot", props: { columnWidths: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, colors: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = Et(), o = G(), r = ve(Symbol.for("vuetify:icons")), a = G(!1), s = G(t.items), i = G(t.matchColumnWidths), u = G(t.columnWidths || []), f = G(t.sortAscIcon), p = y(() => t.tableModelValue), d = vl(), v = y(() => function() {
    const B = t.slotProps.columns;
    if (t.level <= 1 || !i.value)
      return B;
    if (u.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(B).forEach(([P]) => {
      Object.keys(B).length !== parseInt(P) + 1 && B[P].width === void 0 && (B[P].width = u.value[parseInt(P)]);
    }), B;
  }());
  Z(() => t.items, (B) => {
    s.value = B, o.value = (B == null ? void 0 : B.filter((P) => P.selectable)) ?? [], o.value = B == null ? void 0 : B.filter((P) => P.selectable !== !1);
  });
  const g = y(() => ((B) => {
    const { level: P } = B;
    return { [`${te}--header-row`]: !0, [`${te}--header-row-${P}`]: !0 };
  })({ level: t.level })), h = (B, P = "") => ((w) => {
    const { colors: D, column: S, level: V, slotName: O = "" } = w;
    return { [`${te}--header-row-th`]: !0, [`${te}--header-row-th-${O}`]: O !== "", [`${te}--header-row-th-${O}-${V}`]: O, [`${te}--header-row-th-${V}`]: !0, [`${te}--header-row-th-sortable`]: S.sortable, [`${te}--header-row-th-sortable-default-color`]: S.sortable && D === !1, [`${S.cellClass}`]: S.cellClass };
  })({ colors: t.colors, column: B, level: t.level, slotName: P }), m = (B, P = !1) => ((w) => {
    const { colors: D, column: S, dataTableExpand: V = !1, level: O, theme: F } = w, $ = { minWidth: S.width ? Bt({ str: S.width }) : "auto", width: S.width ? Bt({ str: S.width }) : "auto" };
    if (V && !S.width && ($.width = S.width ? Bt({ str: S.width }) : "56px", $.minWidth = S.width ? Bt({ str: S.width }) : "56px"), D === !1 || D === null)
      return $;
    const I = hn({ colors: D, level: O, prop: "header", themeColors: F });
    return $.backgroundColor = I.background, $.color = I.color, $;
  })({ colors: t.colors, column: B, dataTableExpand: P, level: t.level, theme: d }), x = y(() => {
    var B;
    return !t.slotProps.allSelected && ((B = p == null ? void 0 : p.value) == null ? void 0 : B.length) !== 0;
  });
  function C() {
    a.value = !a.value, t.slotProps.selectAll(a.value), l("click:selectAll", a.value);
  }
  Z(() => t.slotProps.allSelected, (B) => {
    a.value = B;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const k = y(() => cr({ level: t.level })), _ = (B) => ((P) => {
    const { iconOptions: w, key: D, level: S, sortBy: V } = P;
    return { "fa-fw": (w == null ? void 0 : w.defaultSet) === "fa", "mx-1": !0, [`${te}--header-row-th-sortable-sort-icon`]: !0, [`${te}--header-row-th-sortable-sort-icon-${S}`]: !0, [`${te}--header-row-th-sortable-sort-icon-desc`]: ta({ id: D, sortBy: V }) === "desc", [`${te}--header-row-th-sortable-sort-icon-asc`]: ta({ id: D, sortBy: V }) === "asc" };
  })({ iconOptions: r, key: B, level: t.level, sortBy: t.sortBy }), A = y(() => (r == null ? void 0 : r.defaultSet) === "fa" ? (f.value = (t == null ? void 0 : t.sortAscIcon) ?? "fas fa-arrow-up", "small") : (f.value = (t == null ? void 0 : t.sortAscIcon) ?? "$sortAsc", "default"));
  function E(B) {
    return ir(B);
  }
  return (B, P) => (Y(), ce(ae, null, [Me("tr", { class: se(b(g)) }, [(Y(!0), ce(ae, null, Le(b(v), (w) => {
    return Y(), ce(ae, { key: w }, [b(n)[`column.${w.key}`] ? (Y(), ce("th", { key: 0, class: se(h(w, w.key)), colspan: w.colspan || 1, style: Ae(m(w, !0)) }, [de(B.$slots, `column.${w.key}`, { column: w }, void 0, !0)], 14, Ii)) : w.key === "data-table-group" || w.key === "data-table-group" ? (Y(), ce("th", { key: 1, class: se(h(w, "header-data-table-group")), colspan: w.colspan || 1, style: Ae(m(w, !0)), innerHTML: E(w) }, null, 14, Oi)) : w.key === "data-table-select" || w.key === "data-table-select" && B.showSelect ? (Y(), ce("th", { key: 2, class: se(h(w, "header-data-table-select")), colspan: w.colspan || 1, style: Ae(m(w, !0)) }, [B.selectStrategy !== "single" ? (Y(), me(vn, { key: 0, class: se(b(k)), density: B.density, focused: !1, indeterminate: b(x), "model-value": b(a), "onUpdate:modelValue": C }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, Di)) : w.key === "data-table-expand" ? (Y(), ce("th", { key: 3, class: se(h(w, "data-table-expand")), colspan: w.colspan || 1, style: Ae(m(w, !0)), innerHTML: E(w) }, null, 14, Ti)) : (Y(), ce("th", { key: 4, class: se(h(w)), colspan: w.colspan || 1, style: Ae(m(w)), onClick: (S) => function(V) {
      V.sortable && t.slotProps.toggleSort(V);
    }(w) }, [Me("div", { class: se((D = w.align, ur({ align: D }))) }, [Me("span", { innerHTML: E(w) }, null, 8, Mi), w.sortable && b(n)["header.sortIcon"] ? (Y(), ce("span", { key: 0, class: se(_(w.key)) }, [de(B.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : w.sortable ? (Y(), me(he, { key: 1, class: se(_(w.key)), icon: b(f), size: b(A) }, null, 8, ["class", "icon", "size"])) : ge("", !0)], 2)], 14, Li))], 64);
    var D;
  }), 128))], 2), B.loaderSettings.loaderType && !b(n).loading ? (Y(), me(b(Ei), { key: 0, colors: B.colors || null, colspan: B.loaderSettings.colspan, height: B.loaderSettings.height, level: B.level, "loader-props": B.loaderProps, "loader-settings": B.loaderSettings, "loader-type": B.loaderSettings.loaderType, loading: B.loaderSettings.loading || !1, "loading-text": B.loaderSettings.loadingText, size: B.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : ge("", !0)], 64));
} }), Ri = bn(Ni, [["__scopeId", "data-v-2cc4d4ca"]]), ji = ["colspan"], Hi = ["colspan"], Wi = ["colspan"], zi = ["colspan"], Gi = ["innerHTML"], Ki = Xe({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: l }) {
  const t = e, n = Et(), o = ve(Symbol.for("vuetify:icons")), r = y(() => t.slotProps.columns), a = y(() => t.slotProps.index), s = y(() => t.slotProps.isExpanded), i = y(() => t.slotProps.item), u = y(() => t.slotProps.level), f = y(() => t.slotProps.toggleExpand), p = y(() => t.slotProps.toggleSelect), d = y(() => t.itemSelectable), v = y(() => ((C) => {
    const { expandOnClick: k, level: _, levels: A } = C;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": k && _ < A, [`${te}--body-row`]: !0, [`${te}--body-row-${_}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), g = (C) => ((k) => {
    const { column: _, elm: A, level: E } = k;
    return { [`${te}--${A}-row-td`]: !0, [`${te}--${A}-row-td-${E}`]: !0, [`${_.cellClass}`]: _.cellClass };
  })({ column: C, elm: "body", level: t.level });
  function h(C) {
    const { isRow: k, item: _, level: A, toggleExpand: E } = C;
    if (!(t.level >= t.levels || t.expandOnClick && !k) && (!t.expandOnClick || k)) {
      if (C.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", C.$event);
      }
      A === t.level && E(_), l("update:expanded", C);
    }
  }
  const m = y(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "x-small" : "default");
  function x(C, k) {
    return function(_, A) {
      if (!A.key)
        return "";
      const E = _i(_, A.key);
      return A.renderItem ? A.renderItem(E, _, A) : E;
    }(C.raw, k);
  }
  return (C, k) => (Y(), ce("tr", { class: se(b(v)), onClick: k[2] || (k[2] = (_) => h({ columns: b(r), index: b(a), isExpanded: b(s), isRow: !0, item: b(i), level: b(u), toggleExpand: b(f), $event: _ })) }, [(Y(!0), ce(ae, null, Le(b(r), (_) => (Y(), ce(ae, { key: _ }, [C.$slots[`item.${_.key}`] ? (Y(), ce("td", { key: 0, class: se(g(_)), colspan: _.colspan || 1 }, [de(C.$slots, `item.${_.key}`, { columns: b(r), index: b(a), item: b(i) }, void 0, !0)], 10, ji)) : _.key === "data-table-select" || _.key === "data-table-select" && t.showSelect ? (Y(), ce("td", { key: 1, class: se(g(_)), colspan: _.colspan || 1 }, [b(n)["item.data-table-select"] ? de(C.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : ge("", !0), c(vn, { class: "d-flex v-simple-checkbox", density: C.density, disabled: b(i).raw.selectable === !1 && b(d) === "selectable", "model-value": C.slotProps.isSelected([b(i)]), onClick: k[0] || (k[0] = $l((A) => function(E) {
    const { item: B, toggleSelect: P } = E;
    P(B), l("click:row:checkbox", B);
  }({ columns: b(r), index: b(a), item: b(i), level: b(u), toggleSelect: b(p) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, Hi)) : _.key === "data-table-expand" || _.key === "data-table-expand" && C.showExpand ? (Y(), ce("td", { key: 2, class: se(g(_)), colspan: _.colspan || 1 }, [b(u) < C.levels ? (Y(), ce("div", { key: 0, class: se(["v-drilldown-table--expand-icon", b(s)(b(i)) ? "rotate-180" : ""]), onClick: k[1] || (k[1] = (A) => h({ columns: b(r), index: b(a), isExpanded: b(s), item: b(i), level: b(u), toggleExpand: b(f) })) }, [C.$slots["item.data-table-expand"] ? de(C.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (Y(), me(he, { key: 1, icon: "$expand", size: b(m) }, null, 8, ["size"]))], 2)) : ge("", !0)], 10, Wi)) : (Y(), ce("td", { key: 3, class: se(g(_)), colspan: _.colspan || 1 }, [Me("span", { innerHTML: x(b(i), _) }, null, 8, Gi)], 10, zi))], 64))), 128))], 2));
} }), qi = bn(Ki, [["__scopeId", "data-v-12d9fc59"]]), Ui = ["colspan"], Yi = ["colspan"], Xi = ["colspan", "innerHTML"], Ji = ["colspan", "innerHTML"], Zi = ["colspan"], Qi = ["innerHTML"], eu = Xe({ __name: "TfootSlot", props: { footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = Et(), o = G(), r = vl(), a = G(!1), s = G(t.items), i = y(() => t.tableModelValue), u = y(() => t.footers.length ? t.footers : t.slotProps.columns);
  Z(() => t.items, (C) => {
    s.value = C, o.value = (C == null ? void 0 : C.filter((k) => k.selectable)) ?? [], o.value = C == null ? void 0 : C.filter((k) => k.selectable !== !1);
  });
  const f = y(() => ((C) => {
    const { level: k } = C;
    return { [`${te}--tfoot`]: !0, [`${te}--tfoot-${k}`]: !0 };
  })({ level: t.level })), p = y(() => ((C) => {
    const { level: k } = C;
    return { [`${te}--tfoot-row`]: !0, [`${te}--tfoot-row-${k}`]: !0 };
  })({ level: t.level })), d = (C, k = "") => ((_) => {
    const { column: A, level: E, slotName: B = "" } = _;
    return { [`${te}--tfoot-row-td`]: !0, [`${te}--tfoot-row-td-${B}`]: B !== "", [`${te}--tfoot-row-td-${B}-${E}`]: B, [`${te}--tfoot-row-td-${E}`]: !0, [`${A.cellClass}`]: A.cellClass };
  })({ column: C, level: t.level, slotName: k }), v = y(() => ((C) => {
    const { colors: k, elm: _, level: A, theme: E } = C;
    if (k === !1 || k === null)
      return {};
    const B = hn({ colors: k, level: A, prop: _, themeColors: E });
    return { backgroundColor: B.background, color: B.color };
  })({ colors: t.colors, elm: "footer", level: t.level, theme: r })), g = y(() => {
    var C;
    return !t.slotProps.allSelected && ((C = i == null ? void 0 : i.value) == null ? void 0 : C.length) !== 0;
  });
  function h() {
    a.value = !a.value, t.slotProps.selectAll(a.value), l("click:selectAll", a.value);
  }
  Z(() => t.slotProps.allSelected, (C) => {
    a.value = C;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const m = y(() => cr({ level: t.level }));
  function x(C) {
    return ir(C);
  }
  return (C, k) => {
    var _;
    return (_ = b(u)) != null && _.length ? (Y(), ce("tfoot", { key: 0, class: se(b(f)) }, [Me("tr", { class: se(b(p)) }, [(Y(!0), ce(ae, null, Le(b(u), (A) => {
      return Y(), ce(ae, { key: A }, [b(n)[`tfoot.${A.key}`] ? (Y(), ce("th", { key: 0, class: se(d(A, A.key)), colspan: A.colspan || 1, style: Ae(b(v)) }, [de(C.$slots, `tfoot.${A.key}`, { column: A })], 14, Ui)) : A.key === "data-table-select" ? (Y(), ce("th", { key: 1, class: se(d(A, "tfoot-data-table-select")), colspan: A.colspan || 1, style: Ae(b(v)) }, [C.selectStrategy !== "single" ? (Y(), me(vn, { key: 0, class: se(b(m)), density: C.density, focused: !1, indeterminate: b(g), "model-value": b(a), "onUpdate:modelValue": h }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, Yi)) : A.key === "data-table-expand" ? (Y(), ce("th", { key: 2, class: se(d(A, "tfoot-data-table-expand")), colspan: A.colspan || 1, style: Ae(b(v)), innerHTML: x(A) }, null, 14, Xi)) : A.renderFooterCell ? (Y(), ce("th", { key: 3, class: se(d(A)), colspan: A.colspan || 1, style: Ae(b(v)), innerHTML: x(A) }, null, 14, Ji)) : (Y(), ce("th", { key: 4, class: se(d(A)), colspan: A.colspan || 1, style: Ae(b(v)) }, [Me("div", { class: se((E = A.align, ur({ align: E }))) }, [Me("span", { innerHTML: x(A) }, null, 8, Qi)], 2)], 14, Zi))], 64);
      var E;
    }), 128))], 2)], 2)) : ge("", !0);
  };
} }), tu = Xe({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchEvents: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: l }) {
  const t = e, n = Et(), o = G(""), r = G(!0), a = y(() => t.items), s = y(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: a, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: b(o), selectAll: i, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: u }));
  function i(d) {
    t.slotProps.selectAll(d), l("click:selectAll", d);
  }
  function u() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  at(() => {
    const d = document.querySelector(`[data-id="vdt-top-id-${t.level}"]`);
    (d == null ? void 0 : d.children.length) === 0 && (r.value = !1);
  }), Z(o, () => {
    l("update:search", o.value);
  });
  const f = y(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...t.searchProps })), p = y(() => {
    const d = t.searchContainerCols ?? sr.searchContainerCols();
    return { [`${te}--search-field`]: !0, [`v-col-${d.xs}`]: !0, [`v-col-sm-${d.sm}`]: !0, [`v-col-md-${d.md}`]: !0, [`v-col-lg-${d.lg}`]: !0, [`v-col-xl-${d.xl}`]: !0, [`v-col-xxl-${d.xxl}`]: !0 };
  });
  return (d, v) => b(n).top ? de(d.$slots, "top", be(J({ key: 0 }, b(s)))) : (d.showSearch || b(n)["top.left"] || b(n)["top.right"]) && b(r) ? (Y(), me(dt, { key: 1, lg: "12" }, { default: re(() => [c(rr, { "data-id": `vdt-top-id-${t.level}` }, { default: re(() => [b(n)["top.left"] ? de(d.$slots, "top.left", be(J({ key: 0 }, b(s)))) : d.showSearch ? (Y(), me(dt, { key: 1, class: se(["d-flex align-center justify-end", b(p)]) }, { default: re(() => [d.showSearch ? (Y(), me(zl, J({ key: 0 }, b(f), { modelValue: b(o), "onUpdate:modelValue": v[0] || (v[0] = (g) => yt(o) ? o.value = g : null), class: "mt-0 pt-0" }, wr(d.searchEvents)), null, 16, ["modelValue"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0), b(n)["top.right"] ? de(d.$slots, "top.right", be(J({ key: 2 }, b(s)))) : ge("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : ge("", !0);
} });
function la(e) {
  return typeof e == "function" ? e() : b(e);
}
const na = () => {
}, lu = (e) => e();
function nu(e, l = {}) {
  let t, n, o = na;
  const r = (a) => {
    clearTimeout(a), o(), o = na;
  };
  return (a) => {
    const s = la(e), i = la(l.maxWait);
    return t && r(t), s <= 0 || i !== void 0 && i <= 0 ? (n && (r(n), n = null), Promise.resolve(a())) : new Promise((u, f) => {
      o = l.rejectOnCancel ? f : u, i && !n && (n = setTimeout(() => {
        t && r(t), n = null, u(a());
      }, i)), t = setTimeout(() => {
        n && r(n), n = null, u(a());
      }, s);
    });
  };
}
var aa = Object.getOwnPropertySymbols, au = Object.prototype.hasOwnProperty, ou = Object.prototype.propertyIsEnumerable, ru = (e, l) => {
  var t = {};
  for (var n in e)
    au.call(e, n) && l.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && aa)
    for (var n of aa(e))
      l.indexOf(n) < 0 && ou.call(e, n) && (t[n] = e[n]);
  return t;
};
function su(e, l, t = {}) {
  const n = t, { eventFilter: o = lu } = n, r = ru(n, ["eventFilter"]);
  return Z(e, (a = o, s = l, function(...i) {
    return new Promise((u, f) => {
      Promise.resolve(a(() => s.apply(this, i), { fn: s, thisArg: this, args: i })).then(u).catch(f);
    });
  }), r);
  var a, s;
}
var iu = Object.defineProperty, uu = Object.defineProperties, cu = Object.getOwnPropertyDescriptors, Gt = Object.getOwnPropertySymbols, oa = Object.prototype.hasOwnProperty, ra = Object.prototype.propertyIsEnumerable, sa = (e, l, t) => l in e ? iu(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
function ia(e, l, t = {}) {
  const n = t, { debounce: o = 0, maxWait: r } = n, a = ((u, f) => {
    var p = {};
    for (var d in u)
      oa.call(u, d) && f.indexOf(d) < 0 && (p[d] = u[d]);
    if (u != null && Gt)
      for (var d of Gt(u))
        f.indexOf(d) < 0 && ra.call(u, d) && (p[d] = u[d]);
    return p;
  })(n, ["debounce", "maxWait"]);
  return su(e, l, (s = ((u, f) => {
    for (var p in f || (f = {}))
      oa.call(f, p) && sa(u, p, f[p]);
    if (Gt)
      for (var p of Gt(f))
        ra.call(f, p) && sa(u, p, f[p]);
    return u;
  })({}, a), i = { eventFilter: nu(o, { maxWait: r }) }, uu(s, cu(i))));
  var s, i;
}
const Ct = /* @__PURE__ */ new Map(), du = Symbol("data"), pu = ["colspan"], ua = Xe({ __name: "VDrilldownTable", props: kr({ colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footers: {}, groupBy: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchEvents: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { ...sr }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: l }) {
  const t = e, n = Et(), o = Cr(), r = ie(null);
  at(() => {
    t.level === 1 && a.level !== 1 || a.server || m();
  }), ql(() => {
    r.value = Object.assign({}, t.server ? gi : fi);
  });
  let a = $t(Object.assign({}, t));
  const s = { ...t, ...a }, i = G(o["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), u = G(""), f = vl(), p = y(() => a.sortBy), d = y(() => !!a.loading || a.hideNoData);
  (function(S, V, O) {
    const F = Z(S, (...$) => (Ie(() => F()), V(...$)), O);
  })(t, () => {
    t.level === 1 && a.level !== 1 || m(), a.itemsPerPage = t.itemsPerPage;
  }, { immediate: !1 }), Z(() => t.items, () => {
    t.loading || m();
  }, { deep: !0 }), Z(() => t.loading, () => {
    if (t.loading)
      return a.loading = t.loading, !1;
    m();
  });
  const v = (S) => {
    const V = a.loaderType;
    return !(S && (V === "skelton" || Array.isArray(V) && V.length === 1 && V[0] === "skelton" || !a.showDrilldownWhenLoading));
  }, g = y(() => ((S) => {
    const { elevation: V, fixedHeader: O, isDrilldown: F, isHover: $, isServerSide: I, level: M, separator: L } = S;
    return { [`${te}--child`]: F, [`${te}--fixed-header`]: O, [`${te}--hover`]: $, [`${te}--level-${M}`]: !0, [`${te}--server`]: I, [`${te}--separator-${L}`]: L, [`${te}`]: !0, [`elevation-${V}`]: parseInt(V) > 0 };
  })({ elevation: a.elevation, fixedHeader: a.fixedHeader, isDrilldown: t.isDrilldown, isHover: a.hover, isServerSide: !1, level: a.level, separator: a.separator })), h = y(() => ((S) => {
    const { colors: V, level: O, theme: F } = S;
    let $ = {};
    typeof V == "object" && V !== null && ($ = hn({ colors: V, level: O, prop: "table", themeColors: F }));
    const I = { borderBottom: "none" };
    return $.bottomBorder && (I.borderBottom = `1px solid ${$.bottomBorder}`), I;
  })({ colors: a.colors, level: a.level, theme: f }));
  function m() {
    var S, V;
    t.drilldown ? a = ((O) => {
      const { drilldown: F, rawItem: $, level: I, levels: M, loadedDrilldown: L } = O;
      let N = L;
      N = Pt(L, F);
      const H = (L.items || [{}]).find((K) => {
        const T = K[L.drilldownKey];
        let j = {};
        return $ && (j = $[L.drilldownKey]), T === j;
      });
      return N = Pt(L, H[L.itemChildrenKey]), M === I && (N.showExpand = !1), N;
    })({ drilldown: t.drilldown, level: t.level, levels: t.levels, loadedDrilldown: a, matchColumnWidths: t.matchColumnWidths, rawItem: (S = t.item) == null ? void 0 : S.raw }) : (a = Pt(a, t), t.matchColumnWidths && ((V = a == null ? void 0 : a.columnWidths) == null ? void 0 : V.length) === 0 && (a.columnWidths = ((O) => {
      const { tableId: F } = O, $ = [], I = b(F), M = document.querySelectorAll(`[data-vdt-id="${I}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(M).length > 0)
        for (let L = 0; L < M.length; L += 1) {
          const N = M[L];
          $.push(N.offsetWidth);
        }
      return $;
    })({ tableId: i })));
  }
  function x(S) {
    let V = { ...s, ...a, ...S };
    t.server && (V = { ...a, ...s, ...S }), ((O) => {
      const { data: F, drilldownData: $, emit: I } = O;
      F.isExpanded(F.item) && I("update:drilldown", $), I("update:expanded", F.item);
    })({ data: S, drilldownData: V, emit: l });
  }
  function C(S) {
    return { items: S.items, itemsPerPage: S.itemsPerPage, page: S.page, search: u.value, server: S.server, sortBy: S.sortBy };
  }
  const k = function(S) {
    const V = xr();
    function O(I) {
      var M;
      const L = Ct.get(S) || /* @__PURE__ */ new Set();
      L.add(I), Ct.set(S, L);
      const N = () => F(I);
      return (M = V == null ? void 0 : V.cleanups) == null || M.push(N), N;
    }
    function F(I) {
      const M = Ct.get(S);
      M && (M.delete(I), M.size || $());
    }
    function $() {
      Ct.delete(S);
    }
    return { on: O, once: function(I) {
      return O(function M(...L) {
        F(M), I(...L);
      });
    }, off: F, emit: function(I, M) {
      var L;
      (L = Ct.get(S)) == null || L.forEach((N) => N(I, M));
    }, reset: $ };
  }(du), _ = k.on(function(S) {
    t.level === 1 && S.drilldown.server && l("update:options", { ...S });
  });
  function A(S) {
    a.itemsPerPage = S;
    const V = C(a), O = { drilldown: { ...t, ...V, itemsPerPage: S }, itemsPerPage: S, name: "update:itemsPerPage" };
    k.emit(O), l("update:itemsPerPage", S);
  }
  function E(S) {
    a.page = S;
    const V = C(a), O = { drilldown: { ...t, ...V, page: S }, name: "update:page", page: S };
    k.emit(O), l("update:page", S);
  }
  Br(() => {
    _();
  });
  const B = { debounce: a.searchDebounce, maxWait: a.searchMaxWait };
  function P() {
    n.top || n["top.left"] || (a.search = u.value), (n.top || n["top.left"]) && (u.value = t.search || "");
    const S = C(a), V = { drilldown: { ...t, ...S, search: u.value }, search: u.value };
    k.emit(V), l("update:search", V);
  }
  function w(S) {
    a.sortBy = S;
    const V = C(a), O = { drilldown: { ...t, ...V, sortBy: S }, name: "update:sortBy", sortBy: S };
    k.emit(O), l("update:sortBy", S);
  }
  function D() {
  }
  return ia(() => t.search, () => {
    P();
  }, B), ia(u, () => {
    n.top || n["top.left"] || P();
  }, B), (S, V) => {
    const O = va("VDrilldownTable", !0);
    return b(r) ? (Y(), me(pa(b(r)), J({ key: 0 }, S.$attrs, { modelValue: b(a).modelValue, "onUpdate:modelValue": [V[5] || (V[5] = (F) => b(a).modelValue = F), D], class: b(g), "data-vdt-id": b(i), density: b(a).density, "expand-on-click": b(a).expandOnClick, expanded: b(a).expanded, "fixed-header": b(a).fixedHeader, "group-by": b(a).groupBy, headers: b(a).headers, height: b(a).height, "hide-no-data": b(d), hover: b(a).hover, "item-selectable": b(a).itemSelectable, "item-value": b(a).itemValue, items: b(a).items, "items-length": b(a).itemsLength, "items-per-page": b(a).itemsPerPage, "items-per-page-options": b(a).itemsPerPageOptions, loading: (!b(a).loaderType || b(n).loading) && b(a).loading, "multi-sort": b(a).multiSort, "must-sort": b(a).mustSort, "no-data-text": b(a).noDataText, page: b(a).page, "return-object": b(a).returnObject, search: b(u), "select-strategy": b(a).selectStrategy, "show-expand": b(a).showExpand, "sort-by": b(p), style: b(h), "onUpdate:itemsPerPage": A, "onUpdate:page": E, "onUpdate:sortBy": w }), et({ top: re((F) => [(Y(), me(b(tu), { key: S.level, items: b(a).items, level: b(a).level, loading: b(a).loading, "search-container-cols": b(a).searchContainerCols, "search-events": b(a).searchEvents, "search-props": b(a).searchProps, "show-search": b(a).showSearch ?? !1, "slot-props": F, "onUpdate:search": V[0] || (V[0] = ($) => u.value = $) }, et({ _: 2 }, [Le(b(n), ($, I) => ({ name: I, fn: re((M) => [de(S.$slots, I, be(Ve({ ...M })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-events", "search-props", "show-search", "slot-props"]))]), headers: re((F) => [(Y(), me(b(Ri), { key: S.level, colors: b(a).colors, "column-widths": b(a).columnWidths, density: b(a).density, items: b(a).items, level: S.level, "loader-props": b(a).loaderProps, "loader-settings": { colspan: F.columns.length, loaderType: b(a).loaderType, loading: b(a).loading, loadingText: S.loadingText }, "match-column-widths": b(a).matchColumnWidths, "select-strategy": b(a).selectStrategy, "show-select": b(a).showSelect, "slot-props": { ...F }, "sort-asc-icon": b(a).sortAscIcon, "sort-by": b(a).sortBy, "table-model-value": b(a).modelValue }, et({ _: 2 }, [Le(b(n), ($, I) => ({ name: I, fn: re((M) => [de(S.$slots, I, be(Ve({ ...M })))]) }))]), 1032, ["colors", "column-widths", "density", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: re((F) => [(Y(), me(b(qi), { key: S.level, density: b(a).density, "expand-on-click": b(a).expandOnClick, "group-by": b(a).groupBy, "item-selectable": b(a).itemSelectable, items: b(a).items, level: b(a).level, levels: b(a).levels, "show-expand": b(a).showExpand, "show-select": b(a).showSelect, "slot-props": { level: S.level, ...F }, "onClick:row": V[1] || (V[1] = ($) => {
      l("click:row", $);
    }), "onClick:row:checkbox": V[2] || (V[2] = ($) => {
      l("click:row:checkbox", $);
    }), "onUpdate:expanded": V[3] || (V[3] = ($) => x($)) }, et({ _: 2 }, [Le(b(n), ($, I) => ({ name: I, fn: re((M) => [de(S.$slots, I, be(Ve({ ...M })))]) }))]), 1032, ["density", "expand-on-click", "group-by", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": re(({ columns: F, item: $ }) => {
      var I, M, L, N, H, K, T, j, W;
      return [Me("tr", { class: se(v((I = $.raw[S.itemChildrenKey]) == null ? void 0 : I.loading) ? "" : "d-none") }, [Me("td", { class: "px-0 ma-0", colspan: F.length, style: { "vertical-align": "top" } }, [(Y(), me(O, { key: $.raw, "column-widths": b(a).columnWidths, density: b(a).density, drilldown: b(a), headers: (M = $.raw[S.itemChildrenKey]) == null ? void 0 : M.headers, "is-drilldown": !0, item: $, "items-length": (L = $.raw[S.itemChildrenKey]) == null ? void 0 : L.itemsLength, "items-per-page": (N = $.raw[S.itemChildrenKey]) == null ? void 0 : N.itemsPerPage, level: S.level + 1, levels: b(a).levels, loaderProps: (H = $.raw[S.itemChildrenKey]) == null ? void 0 : H.loaderProps, loaderType: (K = $.raw[S.itemChildrenKey]) == null ? void 0 : K.loaderType, loading: (T = $.raw[S.itemChildrenKey]) == null ? void 0 : T.loading, loadingText: S.loadingText, "match-column-widths": b(a).matchColumnWidths, "multi-sort": (j = $.raw[S.itemChildrenKey]) == null ? void 0 : j.multiSort, "no-data-text": b(a).noDataText, server: (W = $.raw[S.itemChildrenKey]) == null ? void 0 : W.server, "sort-by": b(a).sortBy, "table-type": b(r), "onUpdate:drilldown": V[4] || (V[4] = (U) => x(U)), "onUpdate:modelValue": D }, et({ default: re(() => [(Y(!0), ce(ae, null, Le(Object.keys(b(n)), (U) => de(S.$slots, U)), 256))]), _: 2 }, [Le(b(n), (U, ne) => ({ name: ne, fn: re((ee) => [de(S.$slots, ne, be(Ve({ ...ee })))]) }))]), 1032, ["column-widths", "density", "drilldown", "headers", "item", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "sort-by", "table-type"]))], 8, pu)], 2)];
    }), "footer.prepend": re(() => [b(n)["footer.prepend"] ? de(S.$slots, "footer.prepend", { key: 0 }) : ge("", !0)]), _: 2 }, [b(n).loader ? { name: "loader", fn: re(() => [de(S.$slots, "loader")]), key: "0" } : void 0, b(n).loading ? { name: "loading", fn: re(() => [de(S.$slots, "loading")]), key: "1" } : void 0, b(n).thead ? { name: "thead", fn: re((F) => [de(S.$slots, "thead", be(Ve({ ...F, columnWidths: b(a).columnWidths, items: b(a).items, loaderSettings: { colspan: F.columns.length, loaderType: b(a).loaderType, loading: b(a).loading, loadingText: S.loadingText }, matchColumnWidths: b(a).matchColumnWidths, selectStrategy: b(a).selectStrategy, sortBy: b(a).sortBy })))]), key: "2" } : void 0, b(n).body ? { name: "body", fn: re((F) => [de(S.$slots, "body", be(Ve({ ...F })))]), key: "3" } : void 0, b(n)["group-header"] ? { name: "group-header", fn: re((F) => [de(S.$slots, "group-header", be(Ve({ ...F })))]), key: "4" } : void 0, b(n).tbody ? { name: "tbody", fn: re((F) => [de(S.$slots, "tbody", be(Ve({ ...F })))]), key: "5" } : void 0, b(n)["no-data"] ? { name: "no-data", fn: re(() => [de(S.$slots, "no-data")]), key: "6" } : void 0, b(n).tfoot || S.showFooterRow ? { name: "tfoot", fn: re((F) => [b(n).tfoot ? de(S.$slots, "tfoot", be(J({ key: 0 }, { ...F }))) : (Y(), me(b(eu), { key: S.level, colors: b(a).colors || null, density: b(a).density, footers: b(a).footers || [], items: b(a).items, level: b(a).level, "select-strategy": b(a).selectStrategy, "show-select": b(a).showSelect, "slot-props": { ...F }, "table-model-value": b(a).modelValue }, et({ _: 2 }, [Le(b(n), ($, I) => ({ name: I, fn: re((M) => [de(S.$slots, I, be(Ve({ ...M })))]) }))]), 1032, ["colors", "density", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "7" } : void 0, b(n).bottom ? { name: "bottom", fn: re((F) => [(Y(), me(b(Pi), { key: S.level, "slot-props": F }, et({ _: 2 }, [Le(b(n), ($, I) => ({ name: I, fn: re((M) => [de(S.$slots, I, be(Ve({ ...M })))]) }))]), 1032, ["slot-props"]))]), key: "8" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "fixed-header", "group-by", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : ge("", !0);
  };
} });
ua.install = (e) => {
  e.component("VDrilldownTable", ua);
};
export {
  ua as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-overlay-scroll-blocked:not(html){overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-data-table{width:100%}.v-data-table__table{width:100%;border-collapse:separate;border-spacing:0}.v-data-table__tr--focus{border:1px dotted black}.v-data-table__tr--clickable{cursor:pointer}.v-data-table .v-table__wrapper>table>thead>tr>td,.v-data-table .v-table__wrapper>table>thead>tr th,.v-data-table .v-table__wrapper>table tbody>tr>td,.v-data-table .v-table__wrapper>table tbody>tr th{background:rgb(var(--v-theme-surface))}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end{text-align:end}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end .v-data-table-header__content{flex-direction:row-reverse}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center{text-align:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center .v-data-table-header__content{justify-content:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--no-padding{padding:0 8px}.v-data-table .v-table__wrapper>table>thead>tr>th,.v-data-table .v-table__wrapper>table tbody>tr>th{align-items:center}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--sortable:hover{cursor:pointer;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon{opacity:0}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon{opacity:.5}.v-data-table-column--fixed{position:sticky;z-index:2;left:0}.v-data-table-column--last-fixed{border-right:1px solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-data-table-group-header-row td{background:lightgrey}.v-data-table-group-header-row td>span{padding-left:5px}.v-data-table--loading .v-data-table__td{opacity:.3}.v-data-table-group-header-row__column{padding-left:calc(var(--v-data-table-group-header-row-depth) * 16px)!important}.v-data-table-header__content{display:flex;align-items:center}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;font-size:.875rem;padding:4px;border-radius:50%;background:rgba(var(--v-border-color),var(--v-border-opacity));min-width:20px;min-height:20px;width:20px;height:20px}.v-data-table-progress>th{border:none!important;height:auto!important;padding:0!important}.v-data-table-rows-loading,.v-data-table-rows-no-data{text-align:center}.v-data-table-footer{display:flex;align-items:center;flex-wrap:wrap;padding:0 8px;justify-content:flex-end}.v-data-table-footer__items-per-page{padding-inline-end:24px;display:flex;align-items:center;justify-content:space-between}.v-data-table-footer__items-per-page>span{padding-inline-end:24px}.v-data-table-footer__info{display:flex;padding-inline-end:24px}.v-data-table-footer__pagination{display:flex;align-items:center}.v-data-table-footer__page{padding:0 8px}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn:not(.v-btn-toggle .v-btn){margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;align-items:center;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;-webkit-user-select:none;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{-webkit-user-select:none;user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;-webkit-user-select:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:flex;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-flex;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer~.v-responsive__content{margin-inline-start:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;-webkit-user-select:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;-webkit-user-select:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{-webkit-hyphens:auto;hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-list-group__header.v-list-item--active:hover .v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0;margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;min-height:max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom) + var(--v-input-chips-margin-bottom) + 2px);padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-text-field__prefix__text,.v-text-field__suffix__text{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 56px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 48px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 40px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 48px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 40px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 32px;--v-field-padding-bottom: 0px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom) + var(--v-input-chips-margin-bottom) + 2px);min-width:0;padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-top-left-radius:inherit;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:inherit}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-top-left-radius:0;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-top-left-radius:0;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-top-left-radius:inherit;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:inherit}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-virtual-scroll{display:block;flex:1 1 auto;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-table{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-table .v-table-divider{border-right:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>thead>tr>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity));color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tfoot>tr>td,.v-table .v-table__wrapper>table>tfoot>tr>th{border-top:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{background:rgb(var(--v-theme-surface));box-shadow:inset 0 -1px 0 rgba(var(--v-border-color),var(--v-border-opacity));z-index:1}.v-table.v-table--fixed-footer>tfoot>tr>th,.v-table.v-table--fixed-footer>tfoot>tr>td{background:rgb(var(--v-theme-surface));box-shadow:inset 0 1px 0 rgba(var(--v-border-color),var(--v-border-opacity))}.v-table{--v-table-header-height: 56px;border-radius:inherit;line-height:1.5;max-width:100%}.v-table>.v-table__wrapper>table{width:100%;border-spacing:0}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>th{padding:0 16px;transition:height cubic-bezier(.4,0,.2,1)}.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>th{font-weight:500;-webkit-user-select:none;user-select:none;text-align:start}.v-table--density-default>.v-table__wrapper>table>tbody>tr>th,.v-table--density-default>.v-table__wrapper>table>thead>tr>th,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) + 0px)}.v-table--density-default>.v-table__wrapper>table>tbody>tr>td,.v-table--density-default>.v-table__wrapper>table>thead>tr>td,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) + 0px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 8px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 8px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>th,.v-table--density-compact>.v-table__wrapper>table>thead>tr>th,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 16px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>td,.v-table--density-compact>.v-table__wrapper>table>thead>tr>td,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 16px)}.v-table__wrapper{border-radius:inherit;overflow:auto}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-table--fixed-height>.v-table__wrapper{overflow-y:auto}.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border-bottom:0px!important;position:sticky;top:0}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th{border-top:0px!important;position:sticky;bottom:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1.v-locale--is-ltr,.v-locale--is-ltr .offset-1{margin-left:8.3333333333%}.offset-1.v-locale--is-rtl,.v-locale--is-rtl .offset-1{margin-right:8.3333333333%}.offset-2.v-locale--is-ltr,.v-locale--is-ltr .offset-2{margin-left:16.6666666667%}.offset-2.v-locale--is-rtl,.v-locale--is-rtl .offset-2{margin-right:16.6666666667%}.offset-3.v-locale--is-ltr,.v-locale--is-ltr .offset-3{margin-left:25%}.offset-3.v-locale--is-rtl,.v-locale--is-rtl .offset-3{margin-right:25%}.offset-4.v-locale--is-ltr,.v-locale--is-ltr .offset-4{margin-left:33.3333333333%}.offset-4.v-locale--is-rtl,.v-locale--is-rtl .offset-4{margin-right:33.3333333333%}.offset-5.v-locale--is-ltr,.v-locale--is-ltr .offset-5{margin-left:41.6666666667%}.offset-5.v-locale--is-rtl,.v-locale--is-rtl .offset-5{margin-right:41.6666666667%}.offset-6.v-locale--is-ltr,.v-locale--is-ltr .offset-6{margin-left:50%}.offset-6.v-locale--is-rtl,.v-locale--is-rtl .offset-6{margin-right:50%}.offset-7.v-locale--is-ltr,.v-locale--is-ltr .offset-7{margin-left:58.3333333333%}.offset-7.v-locale--is-rtl,.v-locale--is-rtl .offset-7{margin-right:58.3333333333%}.offset-8.v-locale--is-ltr,.v-locale--is-ltr .offset-8{margin-left:66.6666666667%}.offset-8.v-locale--is-rtl,.v-locale--is-rtl .offset-8{margin-right:66.6666666667%}.offset-9.v-locale--is-ltr,.v-locale--is-ltr .offset-9{margin-left:75%}.offset-9.v-locale--is-rtl,.v-locale--is-rtl .offset-9{margin-right:75%}.offset-10.v-locale--is-ltr,.v-locale--is-ltr .offset-10{margin-left:83.3333333333%}.offset-10.v-locale--is-rtl,.v-locale--is-rtl .offset-10{margin-right:83.3333333333%}.offset-11.v-locale--is-ltr,.v-locale--is-ltr .offset-11{margin-left:91.6666666667%}.offset-11.v-locale--is-rtl,.v-locale--is-rtl .offset-11{margin-right:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-0{margin-left:0}.offset-sm-0.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-0{margin-right:0}.offset-sm-1.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-1{margin-left:8.3333333333%}.offset-sm-1.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-1{margin-right:8.3333333333%}.offset-sm-2.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-2{margin-left:16.6666666667%}.offset-sm-2.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-2{margin-right:16.6666666667%}.offset-sm-3.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-3{margin-left:25%}.offset-sm-3.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-3{margin-right:25%}.offset-sm-4.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-4{margin-left:33.3333333333%}.offset-sm-4.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-4{margin-right:33.3333333333%}.offset-sm-5.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-5{margin-left:41.6666666667%}.offset-sm-5.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-5{margin-right:41.6666666667%}.offset-sm-6.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-6{margin-left:50%}.offset-sm-6.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-6{margin-right:50%}.offset-sm-7.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-7{margin-left:58.3333333333%}.offset-sm-7.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-7{margin-right:58.3333333333%}.offset-sm-8.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-8{margin-left:66.6666666667%}.offset-sm-8.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-8{margin-right:66.6666666667%}.offset-sm-9.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-9{margin-left:75%}.offset-sm-9.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-9{margin-right:75%}.offset-sm-10.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-10{margin-left:83.3333333333%}.offset-sm-10.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-10{margin-right:83.3333333333%}.offset-sm-11.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-11{margin-left:91.6666666667%}.offset-sm-11.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0.v-locale--is-ltr,.v-locale--is-ltr .offset-md-0{margin-left:0}.offset-md-0.v-locale--is-rtl,.v-locale--is-rtl .offset-md-0{margin-right:0}.offset-md-1.v-locale--is-ltr,.v-locale--is-ltr .offset-md-1{margin-left:8.3333333333%}.offset-md-1.v-locale--is-rtl,.v-locale--is-rtl .offset-md-1{margin-right:8.3333333333%}.offset-md-2.v-locale--is-ltr,.v-locale--is-ltr .offset-md-2{margin-left:16.6666666667%}.offset-md-2.v-locale--is-rtl,.v-locale--is-rtl .offset-md-2{margin-right:16.6666666667%}.offset-md-3.v-locale--is-ltr,.v-locale--is-ltr .offset-md-3{margin-left:25%}.offset-md-3.v-locale--is-rtl,.v-locale--is-rtl .offset-md-3{margin-right:25%}.offset-md-4.v-locale--is-ltr,.v-locale--is-ltr .offset-md-4{margin-left:33.3333333333%}.offset-md-4.v-locale--is-rtl,.v-locale--is-rtl .offset-md-4{margin-right:33.3333333333%}.offset-md-5.v-locale--is-ltr,.v-locale--is-ltr .offset-md-5{margin-left:41.6666666667%}.offset-md-5.v-locale--is-rtl,.v-locale--is-rtl .offset-md-5{margin-right:41.6666666667%}.offset-md-6.v-locale--is-ltr,.v-locale--is-ltr .offset-md-6{margin-left:50%}.offset-md-6.v-locale--is-rtl,.v-locale--is-rtl .offset-md-6{margin-right:50%}.offset-md-7.v-locale--is-ltr,.v-locale--is-ltr .offset-md-7{margin-left:58.3333333333%}.offset-md-7.v-locale--is-rtl,.v-locale--is-rtl .offset-md-7{margin-right:58.3333333333%}.offset-md-8.v-locale--is-ltr,.v-locale--is-ltr .offset-md-8{margin-left:66.6666666667%}.offset-md-8.v-locale--is-rtl,.v-locale--is-rtl .offset-md-8{margin-right:66.6666666667%}.offset-md-9.v-locale--is-ltr,.v-locale--is-ltr .offset-md-9{margin-left:75%}.offset-md-9.v-locale--is-rtl,.v-locale--is-rtl .offset-md-9{margin-right:75%}.offset-md-10.v-locale--is-ltr,.v-locale--is-ltr .offset-md-10{margin-left:83.3333333333%}.offset-md-10.v-locale--is-rtl,.v-locale--is-rtl .offset-md-10{margin-right:83.3333333333%}.offset-md-11.v-locale--is-ltr,.v-locale--is-ltr .offset-md-11{margin-left:91.6666666667%}.offset-md-11.v-locale--is-rtl,.v-locale--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-0{margin-left:0}.offset-lg-0.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-0{margin-right:0}.offset-lg-1.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-1{margin-left:8.3333333333%}.offset-lg-1.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-1{margin-right:8.3333333333%}.offset-lg-2.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-2{margin-left:16.6666666667%}.offset-lg-2.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-2{margin-right:16.6666666667%}.offset-lg-3.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-3{margin-left:25%}.offset-lg-3.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-3{margin-right:25%}.offset-lg-4.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-4{margin-left:33.3333333333%}.offset-lg-4.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-4{margin-right:33.3333333333%}.offset-lg-5.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-5{margin-left:41.6666666667%}.offset-lg-5.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-5{margin-right:41.6666666667%}.offset-lg-6.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-6{margin-left:50%}.offset-lg-6.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-6{margin-right:50%}.offset-lg-7.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-7{margin-left:58.3333333333%}.offset-lg-7.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-7{margin-right:58.3333333333%}.offset-lg-8.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-8{margin-left:66.6666666667%}.offset-lg-8.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-8{margin-right:66.6666666667%}.offset-lg-9.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-9{margin-left:75%}.offset-lg-9.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-9{margin-right:75%}.offset-lg-10.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-10{margin-left:83.3333333333%}.offset-lg-10.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-10{margin-right:83.3333333333%}.offset-lg-11.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-11{margin-left:91.6666666667%}.offset-lg-11.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-0{margin-left:0}.offset-xl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-0{margin-right:0}.offset-xl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-1{margin-left:8.3333333333%}.offset-xl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-1{margin-right:8.3333333333%}.offset-xl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-2{margin-left:16.6666666667%}.offset-xl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-2{margin-right:16.6666666667%}.offset-xl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-3{margin-left:25%}.offset-xl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-3{margin-right:25%}.offset-xl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-4{margin-left:33.3333333333%}.offset-xl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-4{margin-right:33.3333333333%}.offset-xl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-5{margin-left:41.6666666667%}.offset-xl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-5{margin-right:41.6666666667%}.offset-xl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-6{margin-left:50%}.offset-xl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-6{margin-right:50%}.offset-xl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-7{margin-left:58.3333333333%}.offset-xl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-7{margin-right:58.3333333333%}.offset-xl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-8{margin-left:66.6666666667%}.offset-xl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-8{margin-right:66.6666666667%}.offset-xl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-9{margin-left:75%}.offset-xl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-9{margin-right:75%}.offset-xl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-10{margin-left:83.3333333333%}.offset-xl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-10{margin-right:83.3333333333%}.offset-xl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-11{margin-left:91.6666666667%}.offset-xl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-11{margin-right:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-0{margin-left:0}.offset-xxl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-0{margin-right:0}.offset-xxl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-1{margin-right:8.3333333333%}.offset-xxl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-2{margin-right:16.6666666667%}.offset-xxl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-3{margin-left:25%}.offset-xxl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-3{margin-right:25%}.offset-xxl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-4{margin-right:33.3333333333%}.offset-xxl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-5{margin-right:41.6666666667%}.offset-xxl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-6{margin-left:50%}.offset-xxl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-6{margin-right:50%}.offset-xxl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-7{margin-right:58.3333333333%}.offset-xxl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-8{margin-right:66.6666666667%}.offset-xxl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-9{margin-left:75%}.offset-xxl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-9{margin-right:75%}.offset-xxl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-10{margin-right:83.3333333333%}.offset-xxl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-11{margin-left:91.6666666667%}.offset-xxl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-11{margin-right:91.6666666667%}}.v-drilldown-table--loader-tr[data-v-fbedf16d]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-fbedf16d]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-fbedf16d]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-fbedf16d]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-2cc4d4ca]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-2cc4d4ca]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-2cc4d4ca]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-2cc4d4ca],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-2cc4d4ca]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-12d9fc59]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgba(var(--v-border-color), var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-top:0!important;border-bottom:var(--vdt-border)}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{box-shadow:none}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>th{box-shadow:none!important}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>td{background:unset}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
