import { Fragment as ae, reactive as _t, computed as g, watchEffect as Re, toRefs as ra, capitalize as At, warn as cl, watch as Z, onScopeDispose as _e, effectScope as Wl, ref as H, unref as b, provide as ye, inject as ve, shallowRef as ue, defineComponent as Ye, camelize as sa, h as ft, getCurrentInstance as ir, TransitionGroup as ur, Transition as lt, createVNode as v, mergeProps as J, nextTick as Ee, isRef as mt, onMounted as Ft, toRaw as Ue, resolveDynamicComponent as ia, toRef as G, readonly as Gl, Teleport as cr, withDirectives as Fe, vShow as gt, resolveDirective as qe, onBeforeUnmount as nt, Text as dr, onBeforeMount as Hl, cloneVNode as pr, createTextVNode as qt, withModifiers as Fl, renderSlot as de, resolveComponent as ua, openBlock as q, createElementBlock as ie, normalizeClass as re, normalizeStyle as $e, createElementVNode as Te, createBlock as me, withCtx as oe, createCommentVNode as ge, toDisplayString as vr, useSlots as $t, renderList as De, getCurrentScope as fr, normalizeProps as Pe, mergeDefaults as mr, useAttrs as gr, onUnmounted as yr, createSlots as Qe, guardReactiveProps as je } from "vue";
import { useTheme as dl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-4
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
function ca(e, l, t) {
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
  return e != null && l && typeof l == "string" ? e[l] !== void 0 ? e[l] : ca(e, (l = (l = l.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
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
    return ca(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
function mn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (t, n) => l + n);
}
function X(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${l}` : void 0;
}
function $l(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Vl(e) {
  return e && "$el" in e ? e.$el : e;
}
const gn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Vt(e, l, t) {
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    l.some((a) => a instanceof RegExp ? a.test(r) : a === r) && !(t != null && t.some((a) => a === r)) ? n[r] = e[r] : o[r] = e[r];
  return [n, o];
}
function Kl(e, l) {
  const t = { ...e };
  return l.forEach((n) => delete t[n]), t;
}
function Ul(e) {
  return Vt(e, ["class", "style", "id", /^data-/]);
}
function Oe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function xt(e) {
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
    $l(r) && $l(a) ? n[o] = rt(r, a, t) : Array.isArray(r) && Array.isArray(a) && t ? n[o] = t(r, a) : n[o] = a;
  }
  return n;
}
function da(e) {
  return e.map((l) => l.type === ae ? da(l.children) : l).flat();
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
function ql(e) {
  const l = _t({}), t = g(e);
  return Re(() => {
    for (const n in t.value)
      l[n] = t.value[n];
  }, { flush: "sync" }), ra(l);
}
function Xt(e, l) {
  return e.includes(l);
}
et.cache = /* @__PURE__ */ new Map();
const hr = /^on[^a-z]/, El = (e) => hr.test(e);
function yn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Le = () => [Function, Array];
function hn(e, l) {
  return !!(e[l = "on" + At(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function Jt(e, l) {
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
      s ? s.focus() : Jt(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((a = t[0]) == null || a.focus());
}
const pa = ["top", "bottom"], br = ["start", "end", "left", "right"];
function Il(e, l) {
  let [t, n] = e.split(" ");
  return n || (n = Xt(pa, t) ? "start" : Xt(br, t) ? "top" : "center"), { side: bn(t, l), align: bn(n, l) };
}
function bn(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function Sl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function wl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Sn(e) {
  return { side: e.align, align: e.side };
}
function wn(e) {
  return Xt(pa, e.side) ? "y" : "x";
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
function xn(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function Yl(e) {
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
    const u = t.transformOrigin, c = l.x - s - (1 - r) * parseFloat(u), d = l.y - i - (1 - a) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = r ? l.width / r : e.offsetWidth + 1, m = a ? l.height / a : e.offsetHeight + 1;
    return new ct({ x: c, y: d, width: f, height: m });
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
function va(e) {
  cl(`Vuetify: ${e}`);
}
function kn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function M(e, l) {
  return (t) => Object.keys(e).reduce((n, o) => {
    const r = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return n[o] = t && o in t ? { ...r, default: t[o] } : r, l && !n[o].source && (n[o].source = l), n;
  }, {});
}
const se = M({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function tt(e, l) {
  let t;
  function n() {
    t = Wl(), t.run(() => l.length ? l(() => {
      t == null || t.stop(), n();
    }) : l());
  }
  Z(e, (o) => {
    o && !t ? n() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), _e(() => {
    t == null || t.stop();
  });
}
const Xl = Symbol.for("vuetify:defaults");
function Jl() {
  const e = ve(Xl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Xe(e, l) {
  const t = Jl(), n = H(e), o = g(() => {
    if (b(l == null ? void 0 : l.disabled))
      return t.value;
    const r = b(l == null ? void 0 : l.scoped), a = b(l == null ? void 0 : l.reset), s = b(l == null ? void 0 : l.root);
    let i = rt(n.value, { prev: t.value });
    if (r)
      return i;
    if (a || s) {
      const u = Number(a || 1 / 0);
      for (let c = 0; c <= u && i && "prev" in i; c++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = rt(rt(i, { prev: i }), i[s])), i;
    }
    return i.prev ? rt(i.prev, i) : i;
  });
  return ye(Xl, o), o;
}
function Sr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Jl();
  const n = Se("useDefaults");
  if (l = l ?? n.type.name ?? n.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const o = g(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? l];
  }), r = new Proxy(e, { get(s, i) {
    var c, d, f, m;
    const u = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(c = o.value) == null ? void 0 : c[i], u].filter((h) => h != null) : typeof i != "string" || function(h, x) {
      var y, B;
      return ((y = h.props) == null ? void 0 : y[x]) !== void 0 || ((B = h.props) == null ? void 0 : B[et(x)]) !== void 0;
    }(n.vnode, i) ? u : ((d = o.value) == null ? void 0 : d[i]) ?? ((m = (f = t.value) == null ? void 0 : f.global) == null ? void 0 : m[i]) ?? u;
  } }), a = ue();
  return Re(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((i) => {
        let [u] = i;
        return u.startsWith(u[0].toUpperCase());
      });
      s.length && (a.value = Object.fromEntries(s));
    }
  }), { props: r, provideSubDefaults: function() {
    tt(a, () => {
      var s;
      Xe(rt(((s = function(i) {
        const { provides: u } = Se("injectSelf");
        if (u && i in u)
          return u[i];
      }(Xl)) == null ? void 0 : s.value) ?? {}, a.value));
    });
  } };
}
function dt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return va("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = M(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(t) {
      return Vt(t, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, n) {
      const o = Jl();
      if (!o.value)
        return e._setup(t, n);
      const { props: r, provideSubDefaults: a } = Sr(t, t._as ?? e.name, o), s = e._setup(r, n);
      return a(), s;
    };
  }
  return e;
}
function Y() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? dt : Ye)(l);
}
function fa(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return Y()({ name: t ?? At(sa(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...se() }, setup(n, o) {
    let { slots: r } = o;
    return () => {
      var a;
      return ft(n.tag, { class: [e, n.class], style: n.style }, (a = r.default) == null ? void 0 : a.call(r));
    };
  } });
}
function ma(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const Zt = "cubic-bezier(0.4, 0, 0.2, 1)";
function Se(e, l) {
  const t = ir();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return t;
}
function We() {
  const e = Se(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return et((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ga = 0, Kt = /* @__PURE__ */ new WeakMap();
function Me() {
  const e = Se("getUid");
  if (Kt.has(e))
    return Kt.get(e);
  {
    const l = ga++;
    return Kt.set(e, l), l;
  }
}
function Qt(e, l) {
  const t = [];
  if (l && e && !l.contains(e))
    return t;
  for (; e && (Zl(e) && t.push(e), e !== l); )
    e = e.parentElement;
  return t;
}
function Zl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
Me.reset = () => {
  ga = 0, Kt = /* @__PURE__ */ new WeakMap();
};
const Ie = typeof window < "u", Ql = Ie && "IntersectionObserver" in window, Ol = Ie && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function le(e) {
  Se("useRender").render = e;
}
const wr = M({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Be(e, l, t) {
  return Y()({ name: e, props: wr({ mode: t, origin: l }), setup(n, o) {
    let { slots: r } = o;
    const a = { onBeforeEnter(s) {
      n.origin && (s.style.transformOrigin = n.origin);
    }, onLeave(s) {
      if (n.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: u, offsetWidth: c, offsetHeight: d } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${i}px`, s.style.left = `${u}px`, s.style.width = `${c}px`, s.style.height = `${d}px`;
      }
      n.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (n.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: i, top: u, left: c, width: d, height: f } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = i || "", s.style.top = u || "", s.style.left = c || "", s.style.width = d || "", s.style.height = f || "";
      }
    } };
    return () => {
      const s = n.group ? ur : lt;
      return ft(s, { name: n.disabled ? "" : e, css: !n.disabled, ...n.group ? void 0 : { mode: n.mode }, ...n.disabled ? {} : a }, r.default);
    };
  } });
}
function ya(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Y()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(n, o) {
    let { slots: r } = o;
    return () => ft(lt, { name: n.disabled ? "" : e, css: !n.disabled, ...n.disabled ? {} : l }, r.default);
  } });
}
function ha() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = sa(`offset-${l}`);
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
const xr = M({ target: Object }, "v-dialog-transition"), ba = Y()({ name: "VDialogTransition", props: xr(), setup(e, l) {
  let { slots: t } = l;
  const n = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, r) {
    var f;
    await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), o.style.visibility = "";
    const { x: a, y: s, sx: i, sy: u, speed: c } = Bn(e.target, o), d = st(o, [{ transform: `translate(${a}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }, {}], { duration: 225 * c, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = Cn(o)) == null || f.forEach((m) => {
      st(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * c, easing: Zt });
    }), d.finished.then(() => r());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, r) {
    var d;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: a, y: s, sx: i, sy: u, speed: c } = Bn(e.target, o);
    st(o, [{}, { transform: `translate(${a}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }], { duration: 125 * c, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => r()), (d = Cn(o)) == null || d.forEach((f) => {
      st(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * c, easing: Zt });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? v(lt, J({ name: "dialog-transition" }, n, { css: !1 }), t) : v(lt, { name: "dialog-transition" }, t);
} });
function Cn(e) {
  var t;
  const l = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return l && [...l];
}
function Bn(e, l) {
  const t = e.getBoundingClientRect(), n = Yl(l), [o, r] = getComputedStyle(l).transformOrigin.split(" ").map((B) => parseFloat(B)), [a, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  a === "left" || s === "left" ? i -= t.width / 2 : a !== "right" && s !== "right" || (i += t.width / 2);
  let u = t.top + t.height / 2;
  a === "top" || s === "top" ? u -= t.height / 2 : a !== "bottom" && s !== "bottom" || (u += t.height / 2);
  const c = t.width / n.width, d = t.height / n.height, f = Math.max(1, c, d), m = c / f || 0, h = d / f || 0, x = n.width * n.height / (window.innerWidth * window.innerHeight), y = x > 0.12 ? Math.min(1.5, 10 * (x - 0.12) + 1) : 1;
  return { x: i - (o + n.left), y: u - (r + n.top), sx: m, sy: h, speed: y };
}
Be("fab-transition", "center center", "out-in"), Be("dialog-bottom-transition"), Be("dialog-top-transition"), Be("fade-transition"), Be("scale-transition"), Be("scroll-x-transition"), Be("scroll-x-reverse-transition"), Be("scroll-y-transition"), Be("scroll-y-reverse-transition"), Be("slide-x-transition"), Be("slide-x-reverse-transition");
const Sa = Be("slide-y-transition");
Be("slide-y-reverse-transition");
const kr = ya("expand-transition", ha()), wa = ya("expand-x-transition", ha("", !0)), Cr = M({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ve = Y(!1)({ name: "VDefaultsProvider", props: Cr(), setup(e, l) {
  let { slots: t } = l;
  const { defaults: n, disabled: o, reset: r, root: a, scoped: s } = ra(e);
  return Xe(n, { reset: r, root: a, scoped: s, disabled: o }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} });
function xl(e, l) {
  return { x: e.x + l.x, y: e.y + l.y };
}
function Pn(e, l) {
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
const xa = { static: function() {
}, connected: function(e, l, t) {
  (function(m) {
    for (; m; ) {
      if (window.getComputedStyle(m).position === "fixed")
        return !0;
      m = m.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: n, preferredOrigin: o } = ql(() => {
    const m = Il(l.location, e.isRtl.value), h = l.origin === "overlap" ? m : l.origin === "auto" ? Sl(m) : Il(l.origin, e.isRtl.value);
    return m.side === h.side && m.align === wl(h).align ? { preferredAnchor: Sn(m), preferredOrigin: Sn(h) } : { preferredAnchor: m, preferredOrigin: h };
  }), [r, a, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => g(() => {
    const h = parseFloat(l[m]);
    return isNaN(h) ? 1 / 0 : h;
  })), u = g(() => {
    if (Array.isArray(l.offset))
      return l.offset;
    if (typeof l.offset == "string") {
      const m = l.offset.split(" ").map(parseFloat);
      return m.length < 2 && m.push(0), m;
    }
    return typeof l.offset == "number" ? [l.offset, 0] : [0, 0];
  });
  let c = !1;
  const d = new ResizeObserver(() => {
    c && f();
  });
  function f() {
    if (c = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => c = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const m = e.activatorEl.value.getBoundingClientRect(), h = function(p, _) {
      const $ = Yl(p);
      return _ ? $.x += parseFloat(p.style.right || 0) : $.x -= parseFloat(p.style.left || 0), $.y -= parseFloat(p.style.top || 0), $;
    }(e.contentEl.value, e.isRtl.value), x = Qt(e.contentEl.value);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const y = x.reduce((p, _) => {
      const $ = _.getBoundingClientRect(), E = new ct({ x: _ === document.documentElement ? 0 : $.x, y: _ === document.documentElement ? 0 : $.y, width: _.clientWidth, height: _.clientHeight });
      return p ? new ct({ x: Math.max(p.left, E.left), y: Math.max(p.top, E.top), width: Math.min(p.right, E.right) - Math.max(p.left, E.left), height: Math.min(p.bottom, E.bottom) - Math.max(p.top, E.top) }) : E;
    }, void 0);
    y.x += 12, y.y += 12, y.width -= 24, y.height -= 24;
    let B = { anchor: n.value, origin: o.value };
    function k(p) {
      const _ = new ct(h), $ = Pn(p.anchor, m), E = Pn(p.origin, _);
      let { x: C, y: V } = (T = E, { x: (O = $).x - T.x, y: O.y - T.y });
      var O, T;
      switch (p.anchor.side) {
        case "top":
          V -= u.value[0];
          break;
        case "bottom":
          V += u.value[0];
          break;
        case "left":
          C -= u.value[0];
          break;
        case "right":
          C += u.value[0];
      }
      switch (p.anchor.align) {
        case "top":
          V -= u.value[1];
          break;
        case "bottom":
          V += u.value[1];
          break;
        case "left":
          C -= u.value[1];
          break;
        case "right":
          C += u.value[1];
      }
      return _.x += C, _.y += V, _.width = Math.min(_.width, s.value), _.height = Math.min(_.height, i.value), { overflows: xn(_, y), x: C, y: V };
    }
    let S = 0, A = 0;
    const F = { x: 0, y: 0 }, I = { x: !1, y: !1 };
    let w = -1;
    for (; ; ) {
      if (w++ > 10) {
        cl("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: p, y: _, overflows: $ } = k(B);
      S += p, A += _, h.x += p, h.y += _;
      {
        const E = wn(B.anchor), C = $.x.before || $.x.after, V = $.y.before || $.y.after;
        let O = !1;
        if (["x", "y"].forEach((T) => {
          if (T === "x" && C && !I.x || T === "y" && V && !I.y) {
            const N = { anchor: { ...B.anchor }, origin: { ...B.origin } }, L = T === "x" ? E === "y" ? wl : Sl : E === "y" ? Sl : wl;
            N.anchor = L(N.anchor), N.origin = L(N.origin);
            const { overflows: W } = k(N);
            (W[T].before <= $[T].before && W[T].after <= $[T].after || W[T].before + W[T].after < ($[T].before + $[T].after) / 2) && (B = N, O = I[T] = !0);
          }
        }), O)
          continue;
      }
      $.x.before && (S += $.x.before, h.x += $.x.before), $.x.after && (S -= $.x.after, h.x -= $.x.after), $.y.before && (A += $.y.before, h.y += $.y.before), $.y.after && (A -= $.y.after, h.y -= $.y.after);
      {
        const E = xn(h, y);
        F.x = y.width - E.x.before - E.x.after, F.y = y.height - E.y.before - E.y.after, S += E.x.before, h.x += E.x.before, A += E.y.before, h.y += E.y.before;
      }
      break;
    }
    const P = wn(B.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${B.anchor.side} ${B.anchor.align}`, transformOrigin: `${B.origin.side} ${B.origin.align}`, top: X(kl(A)), left: e.isRtl.value ? void 0 : X(kl(S)), right: e.isRtl.value ? X(kl(-S)) : void 0, minWidth: X(P === "y" ? Math.min(r.value, m.width) : r.value), maxWidth: X(_n(xt(F.x, r.value === 1 / 0 ? 0 : r.value, s.value))), maxHeight: X(_n(xt(F.y, a.value === 1 / 0 ? 0 : a.value, i.value))) }), { available: F, contentBox: h };
  }
  return Z([e.activatorEl, e.contentEl], (m, h) => {
    let [x, y] = m, [B, k] = h;
    B && d.unobserve(B), x && d.observe(x), k && d.unobserve(k), y && d.observe(y);
  }, { immediate: !0 }), _e(() => {
    d.disconnect();
  }), Z(() => [n.value, o.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => f()), Ee(() => {
    const m = f();
    if (!m)
      return;
    const { available: h, contentBox: x } = m;
    x.height > h.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, Br = M({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in xa }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function kl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function _n(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Dl = !0;
const el = [];
let An = -1;
function Tl() {
  cancelAnimationFrame(An), An = requestAnimationFrame(() => {
    const e = el.shift();
    e && e(), el.length ? Tl() : Dl = !0;
  });
}
const Ut = { none: null, close: function(e) {
  Fn(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, n = [.../* @__PURE__ */ new Set([...Qt(e.activatorEl.value, l.contained ? t : void 0), ...Qt(e.contentEl.value, l.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, r = (a = t || document.documentElement, Zl(a) && a);
  var a;
  r && e.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((i, u) => {
    i.style.setProperty("--v-body-scroll-x", X(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", X(-i.scrollTop)), i.style.setProperty("--v-scrollbar-offset", X(o)), i.classList.add("v-overlay-scroll-blocked");
  }), _e(() => {
    n.forEach((i, u) => {
      const c = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -c, i.scrollTop = -d;
    }), r && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, t) {
  let n = !1, o = -1, r = -1;
  function a(s) {
    var i;
    i = () => {
      var d, f;
      const u = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, s), n = (performance.now() - u) / (1e3 / 60) > 2;
    }, !Dl || el.length ? (el.push(i), Tl()) : (Dl = !1, i(), Tl());
  }
  r = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      Fn(e.activatorEl.value ?? e.contentEl.value, (s) => {
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
} }, Pr = M({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Ut } }, "VOverlay-scroll-strategies");
function Fn(e, l) {
  const t = [document, ...Qt(e)];
  t.forEach((n) => {
    n.addEventListener("scroll", l, { passive: !0 });
  }), _e(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", l);
    });
  });
}
const Ll = Symbol.for("vuetify:v-menu"), _r = M({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Ar = M({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ..._r() }, "VOverlay-activator");
function Fr(e, l) {
  let { isActive: t, isTop: n } = l;
  const o = H();
  let r = !1, a = !1, s = !0;
  const i = g(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), u = g(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: c, runCloseDelay: d } = function(w, P) {
    const p = {}, _ = ($) => () => {
      if (!Ie)
        return Promise.resolve(!0);
      const E = $ === "openDelay";
      return p.closeDelay && window.clearTimeout(p.closeDelay), delete p.closeDelay, p.openDelay && window.clearTimeout(p.openDelay), delete p.openDelay, new Promise((C) => {
        const V = parseInt(w[$] ?? 0, 10);
        p[$] = window.setTimeout(() => {
          P == null || P(E), C(E);
        }, V);
      });
    };
    return { runCloseDelay: _("closeDelay"), runOpenDelay: _("openDelay") };
  }(e, (w) => {
    w !== (e.openOnHover && r || i.value && a) || e.openOnHover && t.value && !n.value || (t.value !== w && (s = !0), t.value = w);
  }), f = (w) => {
    w.stopPropagation(), o.value = w.currentTarget || w.target, t.value = !t.value;
  }, m = (w) => {
    var P;
    (P = w.sourceCapabilities) != null && P.firesTouchEvents || (r = !0, o.value = w.currentTarget || w.target, c());
  }, h = (w) => {
    r = !1, d();
  }, x = (w) => {
    Ol && !w.target.matches(":focus-visible") || (a = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, c());
  }, y = (w) => {
    a = !1, w.stopPropagation(), d();
  }, B = g(() => {
    const w = {};
    return u.value && (w.onClick = f), e.openOnHover && (w.onMouseenter = m, w.onMouseleave = h), i.value && (w.onFocus = x, w.onBlur = y), w;
  }), k = g(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, c();
    }, w.onMouseleave = () => {
      r = !1, d();
    }), i.value && (w.onFocusin = () => {
      a = !0, c();
    }, w.onFocusout = () => {
      a = !1, d();
    }), e.closeOnContentClick) {
      const P = ve(Ll, null);
      w.onClick = () => {
        t.value = !1, P == null || P.closeParents();
      };
    }
    return w;
  }), S = g(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      s && (r = !0, s = !1, c());
    }, w.onMouseleave = () => {
      r = !1, d();
    }), w;
  });
  Z(n, (w) => {
    !w || (!e.openOnHover || r || i.value && a) && (!i.value || a || e.openOnHover && r) || (t.value = !1);
  });
  const A = H();
  Re(() => {
    A.value && Ee(() => {
      o.value = Vl(A.value);
    });
  });
  const F = Se("useActivator");
  let I;
  return Z(() => !!e.activator, (w) => {
    w && Ie ? (I = Wl(), I.run(() => {
      (function(P, p, _) {
        let { activatorEl: $, activatorEvents: E } = _;
        function C() {
          let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O(), N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.activatorProps;
          T && function(L, W) {
            Object.keys(W).forEach((R) => {
              if (El(R)) {
                const K = yn(R), D = zt.get(L);
                if (W[R] == null)
                  D == null || D.forEach((z) => {
                    const [j, U] = z;
                    j === K && (L.removeEventListener(K, U), D.delete(z));
                  });
                else if (!D || ![...D].some((z) => z[0] === K && z[1] === W[R])) {
                  L.addEventListener(K, W[R]);
                  const z = D || /* @__PURE__ */ new Set();
                  z.add([K, W[R]]), zt.has(L) || zt.set(L, z);
                }
              } else
                W[R] == null ? L.removeAttribute(R) : L.setAttribute(R, W[R]);
            });
          }(T, J(E.value, N));
        }
        function V() {
          let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O(), N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.activatorProps;
          T && function(L, W) {
            Object.keys(W).forEach((R) => {
              if (El(R)) {
                const K = yn(R), D = zt.get(L);
                D == null || D.forEach((z) => {
                  const [j, U] = z;
                  j === K && (L.removeEventListener(K, U), D.delete(z));
                });
              } else
                L.removeAttribute(R);
            });
          }(T, J(E.value, N));
        }
        function O() {
          var L, W;
          let T, N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P.activator;
          if (N)
            if (N === "parent") {
              let R = (W = (L = p == null ? void 0 : p.proxy) == null ? void 0 : L.$el) == null ? void 0 : W.parentNode;
              for (; R.hasAttribute("data-no-activator"); )
                R = R.parentNode;
              T = R;
            } else
              T = typeof N == "string" ? document.querySelector(N) : "$el" in N ? N.$el : N;
          return $.value = (T == null ? void 0 : T.nodeType) === Node.ELEMENT_NODE ? T : null, $.value;
        }
        Z(() => P.activator, (T, N) => {
          if (N && T !== N) {
            const L = O(N);
            L && V(L);
          }
          T && Ee(() => C());
        }, { immediate: !0 }), Z(() => P.activatorProps, () => {
          C();
        }), _e(() => {
          V();
        });
      })(e, F, { activatorEl: o, activatorEvents: B });
    })) : I && I.stop();
  }, { flush: "post", immediate: !0 }), _e(() => {
    I == null || I.stop();
  }), { activatorEl: o, activatorRef: A, activatorEvents: B, contentEvents: k, scrimEvents: S };
}
function en(e) {
  return ql(() => {
    const l = [], t = {};
    return e.value.background && (kn(e.value.background) ? t.backgroundColor = e.value.background : l.push(`bg-${e.value.background}`)), e.value.text && (kn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: t };
  });
}
function ze(e, l) {
  const t = g(() => ({ text: mt(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = en(t);
  return { textColorClasses: n, textColorStyles: o };
}
function pt(e, l) {
  const t = g(() => ({ background: mt(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = en(t);
  return { backgroundColorClasses: n, backgroundColorStyles: o };
}
const Et = M({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function It(e) {
  return { dimensionStyles: g(() => ({ height: X(e.height), maxHeight: X(e.maxHeight), maxWidth: X(e.maxWidth), minHeight: X(e.minHeight), minWidth: X(e.minWidth), width: X(e.width) })) };
}
const pl = ["sm", "md", "lg", "xl", "xxl"], $r = Symbol.for("vuetify:display");
function Vr() {
  if (!Ie)
    return ue(!1);
  const { ssr: e } = function() {
    const l = ve($r);
    if (!l)
      throw new Error("Could not find Vuetify display injection");
    return l;
  }();
  if (e) {
    const l = ue(!1);
    return Ft(() => {
      l.value = !0;
    }), l;
  }
  return ue(!0);
}
const Er = M({ eager: Boolean }, "lazy");
function fe(e, l, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const r = Se("useProxiedModel"), a = H(e[l] !== void 0 ? e[l] : t), s = et(l), i = g(s !== l ? () => {
    var c, d, f, m;
    return e[l], !(!((c = r.vnode.props) != null && c.hasOwnProperty(l)) && !((d = r.vnode.props) != null && d.hasOwnProperty(s)) || !((f = r.vnode.props) != null && f.hasOwnProperty(`onUpdate:${l}`)) && !((m = r.vnode.props) != null && m.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var c, d;
    return e[l], !(!((c = r.vnode.props) != null && c.hasOwnProperty(l)) || !((d = r.vnode.props) != null && d.hasOwnProperty(`onUpdate:${l}`)));
  });
  tt(() => !i.value, () => {
    Z(() => e[l], (c) => {
      a.value = c;
    });
  });
  const u = g({ get() {
    const c = e[l];
    return n(i.value ? c : a.value);
  }, set(c) {
    const d = o(c), f = Ue(i.value ? e[l] : a.value);
    f !== d && n(f) !== c && (a.value = d, r == null || r.emit(`update:${l}`, d));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => i.value ? e[l] : a.value }), u;
}
const ka = Symbol.for("vuetify:locale");
function yt() {
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
function tn(e, l) {
  const t = ia("RouterLink"), n = g(() => !(!e.href && !e.to)), o = g(() => (n == null ? void 0 : n.value) || hn(l, "click") || hn(e, "click"));
  if (typeof t == "string")
    return { isLink: n, isClickable: o, href: G(e, "href") };
  const r = e.to ? t.useLink(e) : void 0;
  return { isLink: n, isClickable: o, route: r == null ? void 0 : r.route, navigate: r == null ? void 0 : r.navigate, isActive: r && g(() => {
    var a, s;
    return e.exact ? (a = r.isExactActive) == null ? void 0 : a.value : (s = r.isActive) == null ? void 0 : s.value;
  }), href: g(() => e.to ? r == null ? void 0 : r.route.value.href : e.href) };
}
const ln = M({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Cl = !1;
function Ca() {
  const e = Se("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const $n = Symbol.for("vuetify:stack"), bt = _t([]), Vn = Symbol.for("vuetify:theme"), be = M({ theme: String }, "theme");
function Ce(e) {
  Se("provideTheme");
  const l = ve(Vn, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const t = g(() => e.theme ?? (l == null ? void 0 : l.name.value)), n = g(() => l.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...l, name: t, themeClasses: n };
  return ye(Vn, o), o;
}
const Dt = M({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ke = (e, l) => {
  let { slots: t } = l;
  const { transition: n, disabled: o, ...r } = e, { component: a = lt, ...s } = typeof n == "object" ? n : {};
  return ft(a, J(typeof n == "string" ? { name: o ? "" : n } : s, r, { disabled: o }), t);
};
function Ir() {
  return !0;
}
function En(e, l, t) {
  if (!e || Ba(e, t) === !1)
    return !1;
  const n = ma(l);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(l), !o.some((r) => r == null ? void 0 : r.contains(e.target));
}
function Ba(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || Ir)(e);
}
function In(e, l) {
  const t = ma(e);
  l(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && l(t);
}
const Or = { mounted(e, l) {
  const t = (o) => function(r, a, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    a._clickOutside.lastMousedownWasOutside && En(r, a, s) && setTimeout(() => {
      Ba(r, s) && i && i(r);
    }, 0);
  }(o, e, l), n = (o) => {
    e._clickOutside.lastMousedownWasOutside = En(o, e, l);
  };
  In(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", n, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: t, onMousedown: n };
}, unmounted(e, l) {
  e._clickOutside && (In(e, (t) => {
    var r;
    if (!t || !((r = e._clickOutside) != null && r[l.instance.$.uid]))
      return;
    const { onClick: n, onMousedown: o } = e._clickOutside[l.instance.$.uid];
    t.removeEventListener("click", n, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function Dr(e) {
  const { modelValue: l, color: t, ...n } = e;
  return v(lt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && v("div", J({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, n), null)] });
}
const Pa = M({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [String, Boolean], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Ar(), ...se(), ...Et(), ...Er(), ...Br(), ...Pr(), ...be(), ...Dt() }, "VOverlay"), On = Y()({ name: "VOverlay", directives: { ClickOutside: Or }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Pa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var R, K;
  let { slots: t, attrs: n, emit: o } = l;
  const r = fe(e, "modelValue"), a = g({ get: () => r.value, set: (D) => {
    D && e.disabled || (r.value = D);
  } }), { teleportTarget: s } = (i = g(() => e.attach || e.contained), { teleportTarget: g(() => {
    const D = i.value;
    if (D === !0 || !Ie)
      return;
    const z = D === !1 ? document.body : typeof D == "string" ? document.querySelector(D) : D;
    if (z == null)
      return void cl(`Unable to locate target ${D}`);
    let j = z.querySelector(":scope > .v-overlay-container");
    return j || (j = document.createElement("div"), j.className = "v-overlay-container", z.appendChild(j)), j;
  }) });
  var i;
  const { themeClasses: u } = Ce(e), { rtlClasses: c, isRtl: d } = Ot(), { hasContent: f, onAfterLeave: m } = function(D, z) {
    const j = ue(!1), U = g(() => j.value || D.eager || z.value);
    return Z(z, () => j.value = !0), { isBooted: j, hasContent: U, onAfterLeave: function() {
      D.eager || (j.value = !1);
    } };
  }(e, a), h = pt(g(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: x, localTop: y, stackStyles: B } = function(D, z, j) {
    const U = Se("useStack"), ne = !j, ee = ve($n, void 0), Q = _t({ activeChildren: /* @__PURE__ */ new Set() });
    ye($n, Q);
    const ce = ue(+z.value);
    tt(D, () => {
      var ht;
      const Ne = (ht = bt.at(-1)) == null ? void 0 : ht[1];
      ce.value = Ne ? Ne + 10 : +z.value, ne && bt.push([U.uid, ce.value]), ee == null || ee.activeChildren.add(U.uid), _e(() => {
        if (ne) {
          const rr = Ue(bt).findIndex((sr) => sr[0] === U.uid);
          bt.splice(rr, 1);
        }
        ee == null || ee.activeChildren.delete(U.uid);
      });
    });
    const xe = ue(!0);
    ne && Re(() => {
      var ht;
      const Ne = ((ht = bt.at(-1)) == null ? void 0 : ht[0]) === U.uid;
      setTimeout(() => xe.value = Ne);
    });
    const bl = g(() => !Q.activeChildren.size);
    return { globalTop: Gl(xe), localTop: bl, stackStyles: g(() => ({ zIndex: ce.value })) };
  }(a, G(e, "zIndex"), e._disableGlobalStack), { activatorEl: k, activatorRef: S, activatorEvents: A, contentEvents: F, scrimEvents: I } = Fr(e, { isActive: a, isTop: y }), { dimensionStyles: w } = It(e), P = Vr(), { scopeId: p } = Ca();
  Z(() => e.disabled, (D) => {
    D && (a.value = !1);
  });
  const _ = H(), $ = H(), { contentStyles: E, updateLocation: C } = function(D, z) {
    const j = H({}), U = H();
    function ne(ee) {
      var Q;
      (Q = U.value) == null || Q.call(U, ee);
    }
    return Ie && (tt(() => !(!z.isActive.value || !D.locationStrategy), (ee) => {
      var Q, ce;
      Z(() => D.locationStrategy, ee), _e(() => {
        U.value = void 0;
      }), typeof D.locationStrategy == "function" ? U.value = (Q = D.locationStrategy(z, D, j)) == null ? void 0 : Q.updateLocation : U.value = (ce = xa[D.locationStrategy](z, D, j)) == null ? void 0 : ce.updateLocation;
    }), window.addEventListener("resize", ne, { passive: !0 }), _e(() => {
      window.removeEventListener("resize", ne), U.value = void 0;
    })), { contentStyles: j, updateLocation: U };
  }(e, { isRtl: d, contentEl: $, activatorEl: k, isActive: a });
  function V(D) {
    o("click:outside", D), e.persistent ? W() : a.value = !1;
  }
  function O() {
    return a.value && x.value;
  }
  function T(D) {
    var z, j;
    D.key === "Escape" && x.value && (e.persistent ? W() : (a.value = !1, (z = $.value) != null && z.contains(document.activeElement) && ((j = k.value) == null || j.focus())));
  }
  (function(D, z) {
    if (!Ie)
      return;
    let j;
    Re(async () => {
      j == null || j.stop(), z.isActive.value && D.scrollStrategy && (j = Wl(), await Ee(), j.active && j.run(() => {
        var U;
        typeof D.scrollStrategy == "function" ? D.scrollStrategy(z, D, j) : (U = Ut[D.scrollStrategy]) == null || U.call(Ut, z, D, j);
      }));
    }), _e(() => {
      j == null || j.stop();
    });
  })(e, { root: _, contentEl: $, activatorEl: k, isActive: a, updateLocation: C }), Ie && Z(a, (D) => {
    D ? window.addEventListener("keydown", T) : window.removeEventListener("keydown", T);
  }, { immediate: !0 });
  const N = (K = (R = Se("useRouter")) == null ? void 0 : R.proxy) == null ? void 0 : K.$router;
  tt(() => e.closeOnBack, () => {
    (function(D, z) {
      let j, U, ne = !1;
      function ee(Q) {
        var ce;
        (ce = Q.state) != null && ce.replaced || (ne = !0, setTimeout(() => ne = !1));
      }
      Ie && (Ee(() => {
        window.addEventListener("popstate", ee), j = D == null ? void 0 : D.beforeEach((Q, ce, xe) => {
          Cl ? ne ? z(xe) : xe() : setTimeout(() => ne ? z(xe) : xe()), Cl = !0;
        }), U = D == null ? void 0 : D.afterEach(() => {
          Cl = !1;
        });
      }), _e(() => {
        window.removeEventListener("popstate", ee), j == null || j(), U == null || U();
      }));
    })(N, (D) => {
      x.value && a.value ? (D(!1), e.persistent ? W() : a.value = !1) : D();
    });
  });
  const L = H();
  function W() {
    e.noClickAnimation || $.value && st($.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Zt });
  }
  return Z(() => a.value && (e.absolute || e.contained) && s.value == null, (D) => {
    if (D) {
      const z = function(j) {
        for (; j; ) {
          if (Zl(j))
            return j;
          j = j.parentElement;
        }
        return document.scrollingElement;
      }(_.value);
      z && z !== document.scrollingElement && (L.value = z.scrollTop);
    }
  }), le(() => {
    var D;
    return v(ae, null, [(D = t.activator) == null ? void 0 : D.call(t, { isActive: a.value, props: J({ ref: S }, A.value, e.activatorProps) }), P.value && v(cr, { disabled: !s.value, to: s.value }, { default: () => [f.value && v("div", J({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": a.value, "v-overlay--contained": e.contained }, u.value, c.value, e.class], style: [B.value, { top: X(L.value) }, e.style], ref: _ }, p, n), [v(Dr, J({ color: h, modelValue: a.value && !!e.scrim }, I.value), null), v(Ke, { appear: !0, persisted: !0, transition: e.transition, target: k.value, onAfterLeave: () => {
      m(), o("afterLeave");
    } }, { default: () => {
      var z;
      return [Fe(v("div", J({ ref: $, class: ["v-overlay__content", e.contentClass], style: [w.value, E.value] }, F.value, e.contentProps), [(z = t.default) == null ? void 0 : z.call(t, { isActive: a })]), [[gt, a.value], [qe("click-outside"), { handler: V, closeConditional: O, include: () => [k.value] }]])];
    } })])] })]);
  }), { activatorEl: k, animateClick: W, contentEl: $, globalTop: x, localTop: y, updateLocation: C };
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
function nn(e) {
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
        const u = Pl(i.value, r) ?? ("_" in i.value ? Pl((s = i.value._) == null ? void 0 : s.setupState, r) : void 0);
        if (u)
          return u;
      }
      for (const i of t) {
        const u = i.value && i.value[Bl];
        if (!u)
          continue;
        const c = u.slice();
        for (; c.length; ) {
          const d = c.shift(), f = Pl(d.value, r);
          if (f)
            return f;
          const m = d.value && d.value[Bl];
          m && c.push(...m);
        }
      }
    }
  } });
}
const Tr = (e, l, t) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), Lr = M({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function Mr(e, l, t, n) {
  const o = g(() => typeof (t == null ? void 0 : t.value) != "string" && typeof (t == null ? void 0 : t.value) != "number" ? "" : String(t.value)), r = H([]), a = H(/* @__PURE__ */ new Map()), s = g(() => n != null && n.transform ? b(l).map(n == null ? void 0 : n.transform) : b(l));
  return Re(() => {
    r.value = [], a.value = /* @__PURE__ */ new Map();
    const i = function(c, d, f) {
      var B;
      const m = [], h = (f == null ? void 0 : f.default) ?? Tr, x = !!(f != null && f.filterKeys) && Oe(f.filterKeys), y = Object.keys((f == null ? void 0 : f.customKeyFilter) ?? {}).length;
      if (!(c != null && c.length))
        return m;
      e:
        for (let k = 0; k < c.length; k++) {
          const S = c[k], A = {}, F = {};
          let I = -1;
          if (d && !(f != null && f.noFilter)) {
            if (typeof S == "object") {
              const p = x || Object.keys(S);
              for (const _ of p) {
                const $ = ke(S, _, S), E = (B = f == null ? void 0 : f.customKeyFilter) == null ? void 0 : B[_];
                if (I = E ? E($, d, S) : h($, d, S), I !== -1 && I !== !1)
                  E ? A[_] = I : F[_] = I;
                else if ((f == null ? void 0 : f.filterMode) === "every")
                  continue e;
              }
            } else
              I = h(S, d, S), I !== -1 && I !== !1 && (F.title = I);
            const w = Object.keys(F).length, P = Object.keys(A).length;
            if (!w && !P || (f == null ? void 0 : f.filterMode) === "union" && P !== y && !w || (f == null ? void 0 : f.filterMode) === "intersection" && (P !== y || !w))
              continue;
          }
          m.push({ index: k, matches: { ...F, ...A } });
        }
      return m;
    }(s.value, o.value, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), u = b(l);
    i.forEach((c) => {
      let { index: d, matches: f } = c;
      const m = u[d];
      r.value.push(m), a.value.set(m.value, f);
    });
  }), { filteredItems: r, filteredMatches: a, getMatches: function(i) {
    return a.value.get(i.value);
  } };
}
const we = M({ tag: { type: String, default: "div" } }, "tag"), Nr = M({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), _a = Symbol.for("vuetify:datatable:expanded");
function Aa(e) {
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
  return ye(_a, r), r;
}
function Fa() {
  const e = ve(_a);
  if (!e)
    throw new Error("foo");
  return e;
}
const jr = M({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), $a = Symbol.for("vuetify:data-table-group");
function Va(e) {
  return { groupBy: fe(e, "groupBy") };
}
function Ea(e) {
  const { groupBy: l, sortBy: t } = e, n = H(/* @__PURE__ */ new Set());
  function o(a) {
    return n.value.has(a.id);
  }
  const r = { sortByWithGroups: g(() => l.value.map((a) => ({ ...a, order: a.order ?? !1 })).concat(t.value)), toggleGroup: function(a) {
    const s = new Set(n.value);
    o(a) ? s.delete(a.id) : s.add(a.id), n.value = s;
  }, opened: n, groupBy: l, extractRows: function(a) {
    return function s(i) {
      const u = [];
      for (const c of i.items)
        "type" in c && c.type === "group" ? u.push(...s(c)) : u.push(c);
      return u;
    }({ type: "group", items: a, id: "dummy", key: "dummy", value: "dummy", depth: 0 });
  }, isGroupOpen: o };
  return ye($a, r), r;
}
function Ia() {
  const e = ve($a);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function Oa(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!l.length)
    return [];
  const o = function(s, i) {
    if (!s.length)
      return [];
    const u = /* @__PURE__ */ new Map();
    for (const c of s) {
      const d = Yt(c.raw, i);
      u.has(d) || u.set(d, []), u.get(d).push(c);
    }
    return u;
  }(e, l[0]), r = [], a = l.slice(1);
  return o.forEach((s, i) => {
    const u = l[0], c = `${n}_${u}_${i}`;
    r.push({ depth: t, id: c, key: u, value: i, items: a.length ? Oa(s, a, t + 1, c) : s, type: "group" });
  }), r;
}
function Da(e, l) {
  const t = [];
  for (const n of e)
    "type" in n && n.type === "group" ? (n.value != null && t.push(n), (l.has(n.id) || n.value == null) && t.push(...Da(n.items, l))) : t.push(n);
  return t;
}
function Ta(e, l, t) {
  return { flatItems: g(() => l.value.length ? Da(Oa(e.value, l.value.map((n) => n.key)), t.value) : e.value) };
}
function La(e) {
  let { page: l, itemsPerPage: t, sortBy: n, groupBy: o, search: r } = e;
  const a = Se("VDataTable"), s = g(() => ({ page: l.value, itemsPerPage: t.value, sortBy: n.value, groupBy: o.value, search: r.value }));
  Z(() => r == null ? void 0 : r.value, () => {
    l.value = 1;
  });
  let i = null;
  Z(s, () => {
    at(i, s.value) || (a.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const Ma = M({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), Na = Symbol.for("vuetify:data-table-pagination");
function ja(e) {
  return { page: fe(e, "page", void 0, (l) => +(l ?? 1)), itemsPerPage: fe(e, "itemsPerPage", void 0, (l) => +(l ?? 10)) };
}
function Ra(e) {
  const { page: l, itemsPerPage: t, itemsLength: n } = e, o = g(() => t.value === -1 ? 0 : t.value * (l.value - 1)), r = g(() => t.value === -1 ? n.value : Math.min(n.value, o.value + t.value)), a = g(() => t.value === -1 || n.value === 0 ? 1 : Math.ceil(n.value / t.value));
  Re(() => {
    l.value > a.value && (l.value = a.value);
  });
  const s = { page: l, itemsPerPage: t, startIndex: o, stopIndex: r, pageCount: a, itemsLength: n, nextPage: function() {
    l.value = xt(l.value + 1, 1, a.value);
  }, prevPage: function() {
    l.value = xt(l.value - 1, 1, a.value);
  }, setPage: function(i) {
    l.value = xt(i, 1, a.value);
  }, setItemsPerPage: function(i) {
    t.value = i, l.value = 1;
  } };
  return ye(Na, s), s;
}
const Rr = { showSelectAll: !1, allSelected: () => [], select: (e) => {
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
} }, Wa = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, allItems: t, selected: n } = e;
  return Wa.select({ items: t, value: l, selected: n });
} }, zr = M({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] } }, "DataTable-select"), Ga = Symbol.for("vuetify:data-table-selection");
function Ha(e, l) {
  let { allItems: t, currentPage: n } = l;
  const o = fe(e, "modelValue", e.modelValue, (m) => new Set(m), (m) => [...m.values()]), r = g(() => t.value.filter((m) => m.selectable)), a = g(() => n.value.filter((m) => m.selectable)), s = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Rr;
      case "all":
        return Wa;
      default:
        return za;
    }
  });
  function i(m) {
    return Oe(m).every((h) => o.value.has(h.value));
  }
  function u(m, h) {
    const x = s.value.select({ items: m, value: h, selected: new Set(o.value) });
    o.value = x;
  }
  const c = g(() => o.value.size > 0), d = g(() => i(s.value.allSelected({ allItems: r.value, currentPage: a.value }))), f = { toggleSelect: function(m) {
    u([m], !i([m]));
  }, select: u, selectAll: function(m) {
    const h = s.value.selectAll({ value: m, allItems: r.value, currentPage: a.value, selected: new Set(o.value) });
    o.value = h;
  }, isSelected: i, isSomeSelected: function(m) {
    return Oe(m).some((h) => o.value.has(h.value));
  }, someSelected: c, allSelected: d, showSelectAll: s.value.showSelectAll };
  return ye(Ga, f), f;
}
function vl() {
  const e = ve(Ga);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const Wr = M({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), Ka = Symbol.for("vuetify:data-table-sort");
function Ua(e) {
  return { sortBy: fe(e, "sortBy"), mustSort: G(e, "mustSort"), multiSort: G(e, "multiSort") };
}
function qa(e) {
  const { sortBy: l, mustSort: t, multiSort: n, page: o } = e, r = { sortBy: l, toggleSort: (a) => {
    let s = l.value.map((u) => ({ ...u })) ?? [];
    const i = s.find((u) => u.key === a.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((u) => u.key !== a.key) : i.order = "desc" : s = n.value ? [...s, { key: a.key, order: "asc" }] : [{ key: a.key, order: "asc" }], l.value = s, o && (o.value = 1);
  }, isSorted: function(a) {
    return !!l.value.find((s) => s.key === a.key);
  } };
  return ye(Ka, r), r;
}
function Gr(e, l, t) {
  const n = yt();
  return { sortedItems: g(() => t.value.length ? function(r, a, s, i) {
    const u = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...r].sort((c, d) => {
      for (let f = 0; f < a.length; f++) {
        const m = a[f].key, h = a[f].order ?? "asc";
        if (h === !1)
          continue;
        let x = Yt(c.raw, m), y = Yt(d.raw, m);
        if (h === "desc" && ([x, y] = [y, x]), i == null ? void 0 : i[m]) {
          const B = i[m](x, y);
          if (!B)
            continue;
          return B;
        }
        if (x instanceof Date && y instanceof Date)
          return x.getTime() - y.getTime();
        if ([x, y] = [x, y].map((B) => B != null ? B.toString().toLocaleLowerCase() : B), x !== y)
          return isNaN(x) || isNaN(y) ? u.compare(x, y) : Number(x) - Number(y);
      }
      return 0;
    });
  }(l.value, t.value, n.current.value, e.customKeySort) : l.value) };
}
const Tt = M({ border: [Boolean, Number, String] }, "border");
function Lt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
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
const Hr = [null, "default", "comfortable", "compact"], Ge = M({ density: { type: String, default: "default", validator: (e) => Hr.includes(e) } }, "density");
function He(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { densityClasses: g(() => `${l}--density-${e.density}`) };
}
const Mt = M({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Nt(e) {
  return { elevationClasses: g(() => {
    const l = mt(e) ? e.value : e.elevation, t = [];
    return l == null || t.push(`elevation-${l}`), t;
  }) };
}
const Je = M({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ze(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
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
const Kr = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function fl(e, l) {
  return v(ae, null, [e && v("span", { key: "overlay", class: `${l}__overlay` }, null), v("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const ot = M({ color: String, variant: { type: String, default: "elevated", validator: (e) => Kr.includes(e) } }, "variant");
function ml(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  const t = g(() => {
    const { variant: r } = b(e);
    return `${l}--variant-${r}`;
  }), { colorClasses: n, colorStyles: o } = en(g(() => {
    const { variant: r, color: a } = b(e);
    return { [["elevated", "flat"].includes(r) ? "background" : "text"]: a };
  }));
  return { colorClasses: n, colorStyles: o, variantClasses: t };
}
const Ya = M({ divided: Boolean, ...Tt(), ...se(), ...Ge(), ...Mt(), ...Je(), ...we(), ...be(), ...ot() }, "VBtnGroup"), Dn = Y()({ name: "VBtnGroup", props: Ya(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { densityClasses: o } = He(e), { borderClasses: r } = Lt(e), { elevationClasses: a } = Nt(e), { roundedClasses: s } = Ze(e);
  Xe({ VBtn: { height: "auto", color: G(e, "color"), density: G(e, "density"), flat: !0, variant: G(e, "variant") } }), le(() => v(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, n.value, r.value, o.value, a.value, s.value, e.class], style: e.style }, t));
} }), Xa = M({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Ja = M({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Za(e, l) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const n = Se("useGroupItem");
  if (!n)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = Me();
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
  const i = g(() => r.isSelected(o)), u = g(() => i.value && [r.selectedClass.value, e.selectedClass]);
  return Z(i, (c) => {
    n.emit("group:selected", { value: c });
  }), { id: o, isSelected: i, toggle: () => r.select(o, !i.value), select: (c) => r.select(o, c), selectedClass: u, value: a, disabled: s, group: r };
}
function Qa(e, l) {
  let t = !1;
  const n = _t([]), o = fe(e, "modelValue", [], (u) => u == null ? [] : Tn(n, Oe(u)), (u) => {
    const c = function(d, f) {
      const m = [];
      return f.forEach((h) => {
        const x = d.findIndex((y) => y.id === h);
        if (~x) {
          const y = d[x];
          m.push(y.value != null ? y.value : x);
        }
      }), m;
    }(n, u);
    return e.multiple ? c : c[0];
  }), r = Se("useGroup");
  function a() {
    const u = n.find((c) => !c.disabled);
    u && e.mandatory === "force" && !o.value.length && (o.value = [u.id]);
  }
  function s(u) {
    if (e.multiple && va('This method is not supported when using "multiple" prop'), o.value.length) {
      const c = o.value[0], d = n.findIndex((h) => h.id === c);
      let f = (d + u) % n.length, m = n[f];
      for (; m.disabled && f !== d; )
        f = (f + u) % n.length, m = n[f];
      if (m.disabled)
        return;
      o.value = [n[f].id];
    } else {
      const c = n.find((d) => !d.disabled);
      c && (o.value = [c.id]);
    }
  }
  Ft(() => {
    a();
  }), nt(() => {
    t = !0;
  });
  const i = { register: function(u, c) {
    const d = u, f = Ht(Symbol.for(`${l.description}:id`), r == null ? void 0 : r.vnode).indexOf(c);
    f > -1 ? n.splice(f, 0, d) : n.push(d);
  }, unregister: function(u) {
    if (t)
      return;
    a();
    const c = n.findIndex((d) => d.id === u);
    n.splice(c, 1);
  }, selected: o, select: function(u, c) {
    const d = n.find((f) => f.id === u);
    if (!c || !(d != null && d.disabled))
      if (e.multiple) {
        const f = o.value.slice(), m = f.findIndex((x) => x === u), h = ~m;
        if (c = c ?? !h, h && e.mandatory && f.length <= 1 || !h && e.max != null && f.length + 1 > e.max)
          return;
        m < 0 && c ? f.push(u) : m >= 0 && !c && f.splice(m, 1), o.value = f;
      } else {
        const f = o.value.includes(u);
        if (e.mandatory && f)
          return;
        o.value = c ?? !f ? [u] : [];
      }
  }, disabled: G(e, "disabled"), prev: () => s(n.length - 1), next: () => s(1), isSelected: (u) => o.value.includes(u), selectedClass: g(() => e.selectedClass), items: g(() => n), getItemIndex: (u) => function(c, d) {
    const f = Tn(c, [d]);
    return f.length ? c.findIndex((m) => m.id === f[0]) : -1;
  }(n, u) };
  return ye(l, i), i;
}
function Tn(e, l) {
  const t = [];
  return l.forEach((n) => {
    const o = e.find((a) => at(n, a.value)), r = e[n];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : r != null && t.push(r.id);
  }), t;
}
const eo = Symbol.for("vuetify:v-btn-toggle"), Ur = M({ ...Ya(), ...Xa() }, "VBtnToggle");
Y()({ name: "VBtnToggle", props: Ur(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, next: o, prev: r, select: a, selected: s } = Qa(e, eo);
  return le(() => {
    const [i] = Dn.filterProps(e);
    return v(Dn, J({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var u;
      return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: n, next: o, prev: r, select: a, selected: s })];
    } });
  }), { next: o, prev: r, select: a };
} });
const pe = [String, Function, Object, Array], qr = Symbol.for("vuetify:icons"), tl = M({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), Ln = Y()({ name: "VComponentIcon", props: tl(), setup(e, l) {
  let { slots: t } = l;
  return () => {
    const n = e.icon;
    return v(e.tag, null, { default: () => {
      var o;
      return [e.icon ? v(n, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), Yr = dt({ name: "VSvgIcon", inheritAttrs: !1, props: tl(), setup(e, l) {
  let { attrs: t } = l;
  return () => v(e.tag, J(t, { style: null }), { default: () => [v("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? v("path", { d: n[0], "fill-opacity": n[1] }, null) : v("path", { d: n }, null)) : v("path", { d: e.icon }, null)])] });
} });
dt({ name: "VLigatureIcon", props: tl(), setup: (e) => () => v(e.tag, null, { default: () => [e.icon] }) }), dt({ name: "VClassIcon", props: tl(), setup: (e) => () => v(e.tag, { class: e.icon }, null) });
const Xr = ["x-small", "small", "default", "large", "x-large"], jt = M({ size: { type: [String, Number], default: "default" } }, "size");
function Rt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return ql(() => {
    let t, n;
    return Xt(Xr, e.size) ? t = `${l}--size-${e.size}` : e.size && (n = { width: X(e.size), height: X(e.size) }), { sizeClasses: t, sizeStyles: n };
  });
}
const Jr = M({ color: String, start: Boolean, end: Boolean, icon: pe, ...se(), ...jt(), ...we({ tag: "i" }), ...be() }, "VIcon"), he = Y()({ name: "VIcon", props: Jr(), setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = H(), { themeClasses: r } = Ce(e), { iconData: a } = ((c) => {
    const d = ve(qr);
    if (!d)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: g(() => {
      var y;
      const f = b(c);
      if (!f)
        return { component: Ln };
      let m = f;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (y = d.aliases) == null ? void 0 : y[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(m))
        return { component: Yr, icon: m };
      if (typeof m != "string")
        return { component: Ln, icon: m };
      const h = Object.keys(d.sets).find((B) => typeof m == "string" && m.startsWith(`${B}:`)), x = h ? m.slice(h.length + 1) : m;
      return { component: d.sets[h ?? d.defaultSet].component, icon: x };
    }) };
  })(g(() => o.value || e.icon)), { sizeClasses: s } = Rt(e), { textColorClasses: i, textColorStyles: u } = ze(G(e, "color"));
  return le(() => {
    var d, f;
    const c = (d = n.default) == null ? void 0 : d.call(n);
    return c && (o.value = (f = da(c).filter((m) => m.type === dr && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children), v(a.value.component, { tag: e.tag, icon: a.value.icon, class: ["v-icon", "notranslate", r.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: X(e.size), height: X(e.size), width: X(e.size) }, u.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [c] });
  }), {};
} });
function to(e, l) {
  const t = H(), n = ue(!1);
  if (Ql) {
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
const Zr = M({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...jt(), ...we({ tag: "div" }), ...be() }, "VProgressCircular"), lo = Y()({ name: "VProgressCircular", props: Zr(), setup(e, l) {
  let { slots: t } = l;
  const n = 2 * Math.PI * 20, o = H(), { themeClasses: r } = Ce(e), { sizeClasses: a, sizeStyles: s } = Rt(e), { textColorClasses: i, textColorStyles: u } = ze(G(e, "color")), { textColorClasses: c, textColorStyles: d } = ze(G(e, "bgColor")), { intersectionRef: f, isIntersecting: m } = to(), { resizeRef: h, contentRect: x } = function(I) {
    const w = H(), P = H();
    if (Ie) {
      const p = new ResizeObserver((_) => {
        I == null || I(_, p), _.length && (P.value = _[0].contentRect);
      });
      nt(() => {
        p.disconnect();
      }), Z(w, (_, $) => {
        $ && (p.unobserve(Vl($)), P.value = void 0), _ && p.observe(Vl(_));
      }, { flush: "post" });
    }
    return { resizeRef: w, contentRect: Gl(P) };
  }(), y = g(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), B = g(() => Number(e.width)), k = g(() => s.value ? Number(e.size) : x.value ? x.value.width : Math.max(B.value, 32)), S = g(() => 20 / (1 - B.value / k.value) * 2), A = g(() => B.value / k.value * S.value), F = g(() => X((100 - y.value) / 100 * n));
  return Re(() => {
    f.value = o.value, h.value = o.value;
  }), le(() => v(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": m.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, r.value, a.value, i.value, e.class], style: [s.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : y.value }, { default: () => [v("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${S.value} ${S.value}` }, [v("circle", { class: ["v-progress-circular__underlay", c.value], style: d.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": A.value, "stroke-dasharray": n, "stroke-dashoffset": 0 }, null), v("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": A.value, "stroke-dasharray": n, "stroke-dashoffset": F.value }, null)]), t.default && v("div", { class: "v-progress-circular__content" }, [t.default({ value: y.value })])] })), {};
} }), Mn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, no = M({ location: String }, "location");
function ao(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: n } = Ot();
  return { locationStyles: g(() => {
    if (!e.location)
      return {};
    const { side: r, align: a } = Il(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, n.value);
    function s(u) {
      return t ? t(u) : 0;
    }
    const i = {};
    return r !== "center" && (l ? i[Mn[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0), a !== "center" ? l ? i[Mn[a]] = `calc(100% - ${s(a)}px)` : i[a] = 0 : (r === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[r]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[r]), i;
  }) };
}
const Qr = M({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...no({ location: "top" }), ...Je(), ...we(), ...be() }, "VProgressLinear"), oo = Y()({ name: "VProgressLinear", props: Qr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { isRtl: o, rtlClasses: r } = Ot(), { themeClasses: a } = Ce(e), { locationStyles: s } = ao(e), { textColorClasses: i, textColorStyles: u } = ze(e, "color"), { backgroundColorClasses: c, backgroundColorStyles: d } = pt(g(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: m } = pt(e, "color"), { roundedClasses: h } = Ze(e), { intersectionRef: x, isIntersecting: y } = to(), B = g(() => parseInt(e.max, 10)), k = g(() => parseInt(e.height, 10)), S = g(() => parseFloat(e.bufferValue) / B.value * 100), A = g(() => parseFloat(n.value) / B.value * 100), F = g(() => o.value !== e.reverse), I = g(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), w = g(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function P(p) {
    if (!x.value)
      return;
    const { left: _, right: $, width: E } = x.value.getBoundingClientRect(), C = F.value ? E - p.clientX + ($ - E) : p.clientX - _;
    n.value = Math.round(C / E * B.value);
  }
  return le(() => v(e.tag, { ref: x, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && y.value, "v-progress-linear--reverse": F.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, h.value, a.value, r.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? X(k.value) : 0, "--v-progress-linear-height": X(k.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : A.value, onClick: e.clickable && P }, { default: () => [e.stream && v("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...u.value, [F.value ? "left" : "right"]: X(-k.value), borderTop: `${X(k.value / 2)} dotted`, opacity: w.value, top: `calc(50% - ${X(k.value / 4)})`, width: X(100 - S.value, "%"), "--v-progress-linear-stream-to": X(k.value * (F.value ? 1 : -1)) } }, null), v("div", { class: ["v-progress-linear__background", c.value], style: [d.value, { opacity: w.value, width: X(e.stream ? S.value : 100, "%") }] }, null), v(lt, { name: I.value }, { default: () => [e.indeterminate ? v("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((p) => v("div", { key: p, class: ["v-progress-linear__indeterminate", p, f.value], style: m.value }, null))]) : v("div", { class: ["v-progress-linear__determinate", f.value], style: [m.value, { width: X(A.value, "%") }] }, null)] }), t.default && v("div", { class: "v-progress-linear__content" }, [t.default({ value: A.value, buffer: S.value })])] })), {};
} }), an = M({ loading: [Boolean, String] }, "loader");
function on(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { loaderClasses: g(() => ({ [`${l}--loading`]: e.loading })) };
}
function ro(e, l) {
  var n;
  let { slots: t } = l;
  return v("div", { class: `${e.name}__loader` }, [((n = t.default) == null ? void 0 : n.call(t, { color: e.color, isActive: e.active })) || v(oo, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const es = ["static", "relative", "fixed", "absolute", "sticky"], ts = M({ position: { type: String, validator: (e) => es.includes(e) } }, "position"), Ml = Symbol("rippleStop"), ls = 80;
function Nn(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function Nl(e) {
  return e.constructor.name === "TouchEvent";
}
function so(e) {
  return e.constructor.name === "KeyboardEvent";
}
const ll = { show(e, l) {
  var m;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((m = l == null ? void 0 : l._ripple) != null && m.enabled))
    return;
  const n = document.createElement("span"), o = document.createElement("span");
  n.appendChild(o), n.className = "v-ripple__container", t.class && (n.className += ` ${t.class}`);
  const { radius: r, scale: a, x: s, y: i, centerX: u, centerY: c } = function(h, x) {
    var w;
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, B = 0, k = 0;
    if (!so(h)) {
      const P = x.getBoundingClientRect(), p = Nl(h) ? h.touches[h.touches.length - 1] : h;
      B = p.clientX - P.left, k = p.clientY - P.top;
    }
    let S = 0, A = 0.3;
    (w = x._ripple) != null && w.circle ? (A = 0.15, S = x.clientWidth / 2, S = y.center ? S : S + Math.sqrt((B - S) ** 2 + (k - S) ** 2) / 4) : S = Math.sqrt(x.clientWidth ** 2 + x.clientHeight ** 2) / 2;
    const F = (x.clientWidth - 2 * S) / 2 + "px", I = (x.clientHeight - 2 * S) / 2 + "px";
    return { radius: S, scale: A, x: y.center ? F : B - S + "px", y: y.center ? I : k - S + "px", centerX: F, centerY: I };
  }(e, l, t), d = 2 * r + "px";
  o.className = "v-ripple__animation", o.style.width = d, o.style.height = d, l.appendChild(n);
  const f = window.getComputedStyle(l);
  f && f.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Nn(o, `translate(${s}, ${i}) scale3d(${a},${a},${a})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Nn(o, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function io(e) {
  return e === void 0 || !!e;
}
function Ct(e) {
  const l = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Ml]) {
    if (e[Ml] = !0, Nl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (l.center = t._ripple.centered || so(e), t._ripple.class && (l.class = t._ripple.class), Nl(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        ll.show(e, t, l);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var n;
        (n = t == null ? void 0 : t._ripple) != null && n.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, ls);
    } else
      ll.show(e, t, l);
  }
}
function jn(e) {
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
function uo(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let Bt = !1;
function co(e) {
  Bt || e.keyCode !== gn.enter && e.keyCode !== gn.space || (Bt = !0, Ct(e));
}
function po(e) {
  Bt = !1, Ae(e);
}
function vo(e) {
  Bt && (Bt = !1, Ae(e));
}
function Rn(e, l, t) {
  const { value: n, modifiers: o } = l, r = io(n);
  if (r || ll.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = r, e._ripple.centered = o.center, e._ripple.circle = o.circle, $l(n) && n.class && (e._ripple.class = n.class), r && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", jn, { passive: !0 }), void e.addEventListener("mousedown", jn);
    e.addEventListener("touchstart", Ct, { passive: !0 }), e.addEventListener("touchend", Ae, { passive: !0 }), e.addEventListener("touchmove", uo, { passive: !0 }), e.addEventListener("touchcancel", Ae), e.addEventListener("mousedown", Ct), e.addEventListener("mouseup", Ae), e.addEventListener("mouseleave", Ae), e.addEventListener("keydown", co), e.addEventListener("keyup", po), e.addEventListener("blur", vo), e.addEventListener("dragstart", Ae, { passive: !0 });
  } else
    !r && t && fo(e);
}
function fo(e) {
  e.removeEventListener("mousedown", Ct), e.removeEventListener("touchstart", Ct), e.removeEventListener("touchend", Ae), e.removeEventListener("touchmove", uo), e.removeEventListener("touchcancel", Ae), e.removeEventListener("mouseup", Ae), e.removeEventListener("mouseleave", Ae), e.removeEventListener("keydown", co), e.removeEventListener("keyup", po), e.removeEventListener("dragstart", Ae), e.removeEventListener("blur", vo);
}
const gl = { mounted: function(e, l) {
  Rn(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, fo(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && Rn(e, l, io(l.oldValue));
} }, ns = M({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: eo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), ...Ja(), ...an(), ...no(), ...ts(), ...Je(), ...ln(), ...jt(), ...we({ tag: "button" }), ...be(), ...ot({ variant: "elevated" }) }, "VBtn"), it = Y()({ name: "VBtn", directives: { Ripple: gl }, props: ns(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { themeClasses: o } = Ce(e), { borderClasses: r } = Lt(e), { colorClasses: a, colorStyles: s, variantClasses: i } = ml(e), { densityClasses: u } = He(e), { dimensionStyles: c } = It(e), { elevationClasses: d } = Nt(e), { loaderClasses: f } = on(e), { locationStyles: m } = ao(e), { positionClasses: h } = function(p) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
    return { positionClasses: g(() => p.position ? `${_}--${p.position}` : void 0) };
  }(e), { roundedClasses: x } = Ze(e), { sizeClasses: y, sizeStyles: B } = Rt(e), k = Za(e, e.symbol, !1), S = tn(e, t), A = g(() => {
    var p;
    return e.active !== void 0 ? e.active : S.isLink.value ? (p = S.isActive) == null ? void 0 : p.value : k == null ? void 0 : k.isSelected.value;
  }), F = g(() => (k == null ? void 0 : k.disabled.value) || e.disabled), I = g(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), w = g(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(p) {
    var _;
    F.value || ((_ = S.navigate) == null || _.call(S, p), k == null || k.toggle());
  }
  return function(p, _) {
    Z(() => {
      var $;
      return ($ = p.isActive) == null ? void 0 : $.value;
    }, ($) => {
      p.isLink.value && $ && _ && Ee(() => {
        _(!0);
      });
    }, { immediate: !0 });
  }(S, k == null ? void 0 : k.select), le(() => {
    var V, O;
    const p = S.isLink.value ? "a" : e.tag, _ = !(!e.prependIcon && !n.prepend), $ = !(!e.appendIcon && !n.append), E = !(!e.icon || e.icon === !0), C = (k == null ? void 0 : k.isSelected.value) && (!S.isLink.value || ((V = S.isActive) == null ? void 0 : V.value)) || !k || ((O = S.isActive) == null ? void 0 : O.value);
    return Fe(v(p, { type: p === "a" ? void 0 : "button", class: ["v-btn", k == null ? void 0 : k.selectedClass.value, { "v-btn--active": A.value, "v-btn--block": e.block, "v-btn--disabled": F.value, "v-btn--elevated": I.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, r.value, C ? a.value : void 0, u.value, d.value, f.value, h.value, x.value, y.value, i.value, e.class], style: [C ? s.value : void 0, c.value, m.value, B.value, e.style], disabled: F.value || void 0, href: S.href.value, onClick: P, value: w.value }, { default: () => {
      var T;
      return [fl(!0, "v-btn"), !e.icon && _ && v("span", { key: "prepend", class: "v-btn__prepend" }, [n.prepend ? v(Ve, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, n.prepend) : v(he, { key: "prepend-icon", icon: e.prependIcon }, null)]), v("span", { class: "v-btn__content", "data-no-activator": "" }, [!n.default && E ? v(he, { key: "content-icon", icon: e.icon }, null) : v(Ve, { key: "content-defaults", disabled: !E, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var N;
        return [((N = n.default) == null ? void 0 : N.call(n)) ?? e.text];
      } })]), !e.icon && $ && v("span", { key: "append", class: "v-btn__append" }, [n.append ? v(Ve, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, n.append) : v(he, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && v("span", { key: "loader", class: "v-btn__loader" }, [((T = n.loader) == null ? void 0 : T.call(n)) ?? v(lo, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[qe("ripple"), !F.value && e.ripple, null]]);
  }), {};
} }), as = M({ text: String, clickable: Boolean, ...se(), ...be() }, "VLabel"), mo = Y()({ name: "VLabel", props: as(), setup(e, l) {
  let { slots: t } = l;
  return le(() => {
    var n;
    return v("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (n = t.default) == null ? void 0 : n.call(t)]);
  }), {};
} }), go = Symbol.for("vuetify:selection-control-group"), yo = M({ color: String, disabled: Boolean, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: at }, ...se(), ...Ge(), ...be() }, "SelectionControlGroup"), os = M({ ...yo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
Y()({ name: "VSelectionControlGroup", props: os(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), o = Me(), r = g(() => e.id || `v-selection-control-group-${o}`), a = g(() => e.name || r.value), s = /* @__PURE__ */ new Set();
  return ye(go, { modelValue: n, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), _e(() => {
      s.delete(i);
    });
  } }), Xe({ [e.defaultsTarget]: { color: G(e, "color"), disabled: G(e, "disabled"), density: G(e, "density"), error: G(e, "error"), inline: G(e, "inline"), modelValue: n, multiple: g(() => !!e.multiple || e.multiple == null && Array.isArray(n.value)), name: a, falseIcon: G(e, "falseIcon"), trueIcon: G(e, "trueIcon"), readonly: G(e, "readonly"), ripple: G(e, "ripple"), type: G(e, "type"), valueComparator: G(e, "valueComparator") } }), le(() => {
    var i;
    return v("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const ho = M({ label: String, trueValue: null, falseValue: null, value: null, ...se(), ...yo() }, "VSelectionControl"), rs = Y()({ name: "VSelectionControl", directives: { Ripple: gl }, inheritAttrs: !1, props: ho(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { group: o, densityClasses: r, icon: a, model: s, textColorClasses: i, textColorStyles: u, trueValue: c } = function(S) {
    const A = ve(go, void 0), { densityClasses: F } = He(S), I = fe(S, "modelValue"), w = g(() => S.trueValue !== void 0 ? S.trueValue : S.value === void 0 || S.value), P = g(() => S.falseValue !== void 0 && S.falseValue), p = g(() => !!S.multiple || S.multiple == null && Array.isArray(I.value)), _ = g({ get() {
      const V = A ? A.modelValue.value : I.value;
      return p.value ? V.some((O) => S.valueComparator(O, w.value)) : S.valueComparator(V, w.value);
    }, set(V) {
      if (S.readonly)
        return;
      const O = V ? w.value : P.value;
      let T = O;
      p.value && (T = V ? [...Oe(I.value), O] : Oe(I.value).filter((N) => !S.valueComparator(N, w.value))), A ? A.modelValue.value = T : I.value = T;
    } }), { textColorClasses: $, textColorStyles: E } = ze(g(() => !_.value || S.error || S.disabled ? void 0 : S.color)), C = g(() => _.value ? S.trueIcon : S.falseIcon);
    return { group: A, densityClasses: F, trueValue: w, falseValue: P, model: _, textColorClasses: $, textColorStyles: E, icon: C };
  }(e), d = Me(), f = g(() => e.id || `input-${d}`), m = ue(!1), h = ue(!1), x = H();
  function y(S) {
    m.value = !0, (!Ol || Ol && S.target.matches(":focus-visible")) && (h.value = !0);
  }
  function B() {
    m.value = !1, h.value = !1;
  }
  function k(S) {
    e.readonly && o && Ee(() => o.forceUpdate()), s.value = S.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    x.value && (x.value.checked = s.value);
  }), le(() => {
    var I, w;
    const S = n.label ? n.label({ label: e.label, props: { for: f.value } }) : e.label, [A, F] = Ul(t);
    return v("div", J({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": m.value, "v-selection-control--focus-visible": h.value, "v-selection-control--inline": e.inline }, r.value, e.class] }, A, { style: e.style }), [v("div", { class: ["v-selection-control__wrapper", i.value], style: u.value }, [(I = n.default) == null ? void 0 : I.call(n), Fe(v("div", { class: ["v-selection-control__input"] }, [a.value && v(he, { key: "icon", icon: a.value }, null), v("input", J({ ref: x, checked: s.value, disabled: e.disabled, id: f.value, onBlur: B, onFocus: y, onInput: k, "aria-disabled": e.readonly, type: e.type, value: c.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, F), null), (w = n.input) == null ? void 0 : w.call(n, { model: s, textColorClasses: i, textColorStyles: u, props: { onFocus: y, onBlur: B, id: f.value } })]), [[qe("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), S && v(mo, { for: f.value, clickable: !0 }, { default: () => [S] })]);
  }), { isFocused: m, input: x };
} }), bo = M({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...ho({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), vt = Y()({ name: "VCheckboxBtn", props: bo(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "indeterminate"), o = fe(e, "modelValue");
  function r(i) {
    n.value && (n.value = !1);
  }
  const a = g(() => n.value ? e.indeterminateIcon : e.falseIcon), s = g(() => n.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => v(rs, J(e, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, r], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: a.value, trueIcon: s.value, "aria-checked": n.value ? "mixed" : void 0 }), t)), {};
} });
function So(e) {
  const { t: l } = yt();
  return { InputIcon: function(t) {
    let { name: n } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[n], r = e[`onClick:${n}`], a = r && o ? l(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return v(he, { icon: e[`${n}Icon`], "aria-label": a, onClick: r }, null);
  } };
}
const ss = M({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...Dt({ transition: { component: Sa, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), is = Y()({ name: "VMessages", props: ss(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => Oe(e.messages)), { textColorClasses: o, textColorStyles: r } = ze(g(() => e.color));
  return le(() => v(Ke, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [r.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && n.value.map((a, s) => v("div", { class: "v-messages__message", key: `${s}-${n.value}` }, [t.message ? t.message({ message: a }) : a]))] })), {};
} }), wo = M({ focused: Boolean, "onUpdate:focused": Le() }, "focus");
function rn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  const t = fe(e, "focused");
  return { focusClasses: g(() => ({ [`${l}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const us = Symbol.for("vuetify:form");
function xo() {
  return ve(us, null);
}
const cs = M({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...wo() }, "validation"), sn = M({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Le(), "onClick:append": Le(), ...se(), ...Ge(), ...cs() }, "VInput"), nl = Y()({ name: "VInput", props: { ...sn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const { densityClasses: r } = He(e), { rtlClasses: a } = Ot(), { InputIcon: s } = So(e), i = Me(), u = g(() => e.id || `input-${i}`), c = g(() => `${u.value}-messages`), { errorMessages: d, isDirty: f, isDisabled: m, isReadonly: h, isPristine: x, isValid: y, isValidating: B, reset: k, resetValidation: S, validate: A, validationClasses: F } = function(P) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We(), _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Me();
    const $ = fe(P, "modelValue"), E = g(() => P.validationValue === void 0 ? $.value : P.validationValue), C = xo(), V = H([]), O = ue(!0), T = g(() => !(!Oe($.value === "" ? null : $.value).length && !Oe(E.value === "" ? null : E.value).length)), N = g(() => !!(P.disabled ?? (C == null ? void 0 : C.isDisabled.value))), L = g(() => !!(P.readonly ?? (C == null ? void 0 : C.isReadonly.value))), W = g(() => P.errorMessages.length ? Oe(P.errorMessages).slice(0, Math.max(0, +P.maxErrors)) : V.value), R = g(() => {
      let Q = (P.validateOn ?? (C == null ? void 0 : C.validateOn.value)) || "input";
      Q === "lazy" && (Q = "input lazy");
      const ce = new Set((Q == null ? void 0 : Q.split(" ")) ?? []);
      return { blur: ce.has("blur") || ce.has("input"), input: ce.has("input"), submit: ce.has("submit"), lazy: ce.has("lazy") };
    }), K = g(() => !P.error && !P.errorMessages.length && (!P.rules.length || (O.value ? !V.value.length && !R.value.lazy || null : !V.value.length))), D = ue(!1), z = g(() => ({ [`${p}--error`]: K.value === !1, [`${p}--dirty`]: T.value, [`${p}--disabled`]: N.value, [`${p}--readonly`]: L.value })), j = g(() => P.name ?? b(_));
    function U() {
      $.value = null, Ee(ne);
    }
    function ne() {
      O.value = !0, R.value.lazy ? V.value = [] : ee(!0);
    }
    async function ee() {
      let Q = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ce = [];
      D.value = !0;
      for (const xe of P.rules) {
        if (ce.length >= +(P.maxErrors ?? 1))
          break;
        const bl = typeof xe == "function" ? xe : () => xe, Ne = await bl(E.value);
        Ne !== !0 && (typeof Ne == "string" ? ce.push(Ne) : console.warn(`${Ne} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return V.value = ce, D.value = !1, O.value = Q, V.value;
    }
    return Hl(() => {
      C == null || C.register({ id: j.value, validate: ee, reset: U, resetValidation: ne });
    }), nt(() => {
      C == null || C.unregister(j.value);
    }), Ft(async () => {
      R.value.lazy || await ee(!0), C == null || C.update(j.value, K.value, W.value);
    }), tt(() => R.value.input, () => {
      Z(E, () => {
        if (E.value != null)
          ee();
        else if (P.focused) {
          const Q = Z(() => P.focused, (ce) => {
            ce || ee(), Q();
          });
        }
      });
    }), tt(() => R.value.blur, () => {
      Z(() => P.focused, (Q) => {
        Q || ee();
      });
    }), Z(K, () => {
      C == null || C.update(j.value, K.value, W.value);
    }), { errorMessages: W, isDirty: T, isDisabled: N, isReadonly: L, isPristine: O, isValid: K, isValidating: D, reset: U, resetValidation: ne, validate: ee, validationClasses: z };
  }(e, "v-input", u), I = g(() => ({ id: u, messagesId: c, isDirty: f, isDisabled: m, isReadonly: h, isPristine: x, isValid: y, isValidating: B, reset: k, resetValidation: S, validate: A })), w = g(() => {
    var P;
    return (P = e.errorMessages) != null && P.length || !x.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return le(() => {
    var E, C, V, O;
    const P = !(!n.prepend && !e.prependIcon), p = !(!n.append && !e.appendIcon), _ = w.value.length > 0, $ = !e.hideDetails || e.hideDetails === "auto" && (_ || !!n.details);
    return v("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, r.value, a.value, F.value, e.class], style: e.style }, [P && v("div", { key: "prepend", class: "v-input__prepend" }, [(E = n.prepend) == null ? void 0 : E.call(n, I.value), e.prependIcon && v(s, { key: "prepend-icon", name: "prepend" }, null)]), n.default && v("div", { class: "v-input__control" }, [(C = n.default) == null ? void 0 : C.call(n, I.value)]), p && v("div", { key: "append", class: "v-input__append" }, [e.appendIcon && v(s, { key: "append-icon", name: "append" }, null), (V = n.append) == null ? void 0 : V.call(n, I.value)]), $ && v("div", { class: "v-input__details" }, [v(is, { id: c.value, active: _, messages: w.value }, { message: n.message }), (O = n.details) == null ? void 0 : O.call(n, I.value)])]);
  }), { reset: k, resetValidation: S, validate: A };
} }), ds = M({ ...sn(), ...Kl(bo(), ["inline"]) }, "VCheckbox"), un = Y()({ name: "VCheckbox", inheritAttrs: !1, props: ds(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = fe(e, "modelValue"), { isFocused: r, focus: a, blur: s } = rn(e), i = Me(), u = g(() => e.id || `checkbox-${i}`);
  return le(() => {
    const [c, d] = Ul(t), [f, m] = nl.filterProps(e), [h, x] = vt.filterProps(e);
    return v(nl, J({ class: ["v-checkbox", e.class] }, c, f, { modelValue: o.value, "onUpdate:modelValue": (y) => o.value = y, id: u.value, focused: r.value, style: e.style }), { ...n, default: (y) => {
      let { id: B, messagesId: k, isDisabled: S, isReadonly: A } = y;
      return v(vt, J(h, { id: B.value, "aria-describedby": k.value, disabled: S.value, readonly: A.value }, d, { modelValue: o.value, "onUpdate:modelValue": (F) => o.value = F, onFocus: a, onBlur: s }), n);
    } });
  }), {};
} }), ko = M({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...Et() }, "VResponsive"), zn = Y()({ name: "VResponsive", props: ko(), setup(e, l) {
  let { slots: t } = l;
  const { aspectStyles: n } = function(r) {
    return { aspectStyles: g(() => {
      const a = Number(r.aspectRatio);
      return a ? { paddingBottom: String(1 / a * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = It(e);
  return le(() => {
    var r;
    return v("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [v("div", { class: "v-responsive__sizer", style: n.value }, null), (r = t.additional) == null ? void 0 : r.call(t), t.default && v("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function Wn(e, l) {
  var n;
  const t = (n = e._observe) == null ? void 0 : n[l.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Co = { mounted: function(e, l) {
  if (!Ql)
    return;
  const t = l.modifiers || {}, n = l.value, { handler: o, options: r } = typeof n == "object" ? n : { handler: n, options: {} }, a = new IntersectionObserver(function() {
    var d;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const u = (d = e._observe) == null ? void 0 : d[l.instance.$.uid];
    if (!u)
      return;
    const c = s.some((f) => f.isIntersecting);
    !o || t.quiet && !u.init || t.once && !c && !u.init || o(c, s, i), c && t.once ? Wn(e, l) : u.init = !0;
  }, r);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: a }, a.observe(e);
}, unmounted: Wn }, ps = M({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...ko(), ...se(), ...Dt() }, "VImg"), vs = Y()({ name: "VImg", directives: { intersect: Co }, props: ps(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const o = ue(""), r = H(), a = ue(e.eager ? "loading" : "idle"), s = ue(), i = ue(), u = g(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), c = g(() => u.value.aspect || s.value / i.value || 0);
  function d(P) {
    if ((!e.eager || !P) && (!Ql || P || e.eager)) {
      if (a.value = "loading", u.value.lazySrc) {
        const p = new Image();
        p.src = u.value.lazySrc, y(p, null);
      }
      u.value.src && Ee(() => {
        var p, _;
        if (t("loadstart", ((p = r.value) == null ? void 0 : p.currentSrc) || u.value.src), (_ = r.value) == null ? void 0 : _.complete) {
          if (r.value.naturalWidth || m(), a.value === "error")
            return;
          c.value || y(r.value, null), f();
        } else
          c.value || y(r.value), h();
      });
    }
  }
  function f() {
    var P;
    h(), a.value = "loaded", t("load", ((P = r.value) == null ? void 0 : P.currentSrc) || u.value.src);
  }
  function m() {
    var P;
    a.value = "error", t("error", ((P = r.value) == null ? void 0 : P.currentSrc) || u.value.src);
  }
  function h() {
    const P = r.value;
    P && (o.value = P.currentSrc || P.src);
  }
  Z(() => e.src, () => {
    d(a.value !== "idle");
  }), Z(c, (P, p) => {
    !P && p && r.value && y(r.value);
  }), Hl(() => d());
  let x = -1;
  function y(P) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const _ = () => {
      clearTimeout(x);
      const { naturalHeight: $, naturalWidth: E } = P;
      $ || E ? (s.value = E, i.value = $) : P.complete || a.value !== "loading" || p == null ? (P.currentSrc.endsWith(".svg") || P.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : x = window.setTimeout(_, p);
    };
    _();
  }
  const B = g(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), k = () => {
    var _;
    if (!u.value.src || a.value === "idle")
      return null;
    const P = v("img", { class: ["v-img__img", B.value], src: u.value.src, srcset: u.value.srcset, alt: e.alt, sizes: e.sizes, ref: r, onLoad: f, onError: m }, null), p = (_ = n.sources) == null ? void 0 : _.call(n);
    return v(Ke, { transition: e.transition, appear: !0 }, { default: () => [Fe(p ? v("picture", { class: "v-img__picture" }, [p, P]) : P, [[gt, a.value === "loaded"]])] });
  }, S = () => v(Ke, { transition: e.transition }, { default: () => [u.value.lazySrc && a.value !== "loaded" && v("img", { class: ["v-img__img", "v-img__img--preload", B.value], src: u.value.lazySrc, alt: e.alt }, null)] }), A = () => n.placeholder ? v(Ke, { transition: e.transition, appear: !0 }, { default: () => [(a.value === "loading" || a.value === "error" && !n.error) && v("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null, F = () => n.error ? v(Ke, { transition: e.transition, appear: !0 }, { default: () => [a.value === "error" && v("div", { class: "v-img__error" }, [n.error()])] }) : null, I = () => e.gradient ? v("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, w = ue(!1);
  {
    const P = Z(c, (p) => {
      p && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          w.value = !0;
        });
      }), P());
    });
  }
  return le(() => {
    const [P] = zn.filterProps(e);
    return Fe(v(zn, J({ class: ["v-img", { "v-img--booting": !w.value }, e.class], style: e.style }, P, { aspectRatio: c.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => v(ae, null, [v(k, null, null), v(S, null, null), v(I, null, null), v(A, null, null), v(F, null, null)]), default: n.default }), [[qe("intersect"), { handler: d, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: r, state: a, naturalWidth: s, naturalHeight: i };
} }), fs = M({ start: Boolean, end: Boolean, icon: pe, image: String, ...se(), ...Ge(), ...Je(), ...jt(), ...we(), ...be(), ...ot({ variant: "flat" }) }, "VAvatar"), al = Y()({ name: "VAvatar", props: fs(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { colorClasses: o, colorStyles: r, variantClasses: a } = ml(e), { densityClasses: s } = He(e), { roundedClasses: i } = Ze(e), { sizeClasses: u, sizeStyles: c } = Rt(e);
  return le(() => v(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, o.value, s.value, i.value, u.value, a.value, e.class], style: [r.value, c.value, e.style] }, { default: () => {
    var d;
    return [e.image ? v(vs, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? v(he, { key: "icon", icon: e.icon }, null) : (d = t.default) == null ? void 0 : d.call(t), fl(!1, "v-avatar")];
  } })), {};
} }), Bo = Symbol.for("vuetify:v-chip-group"), ms = M({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: at }, ...se(), ...Xa({ selectedClass: "v-chip--selected" }), ...we(), ...be(), ...ot({ variant: "tonal" }) }, "VChipGroup");
Y()({ name: "VChipGroup", props: ms(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { isSelected: o, select: r, next: a, prev: s, selected: i } = Qa(e, Bo);
  return Xe({ VChip: { color: G(e, "color"), disabled: G(e, "disabled"), filter: G(e, "filter"), variant: G(e, "variant") } }), le(() => v(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, n.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: o, select: r, next: a, prev: s, selected: i.value })];
  } })), {};
} });
const gs = M({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Le(), onClickOnce: Le(), ...Tt(), ...se(), ...Ge(), ...Mt(), ...Ja(), ...Je(), ...ln(), ...jt(), ...we({ tag: "span" }), ...be(), ...ot({ variant: "tonal" }) }, "VChip"), ys = Y()({ name: "VChip", directives: { Ripple: gl }, props: gs(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { t: r } = yt(), { borderClasses: a } = Lt(e), { colorClasses: s, colorStyles: i, variantClasses: u } = ml(e), { densityClasses: c } = He(e), { elevationClasses: d } = Nt(e), { roundedClasses: f } = Ze(e), { sizeClasses: m } = Rt(e), { themeClasses: h } = Ce(e), x = fe(e, "modelValue"), y = Za(e, Bo, !1), B = tn(e, t), k = g(() => e.link !== !1 && B.isLink.value), S = g(() => !e.disabled && e.link !== !1 && (!!y || e.link || B.isClickable.value)), A = g(() => ({ "aria-label": r(e.closeLabel), onClick(w) {
    x.value = !1, n("click:close", w);
  } }));
  function F(w) {
    var P;
    n("click", w), S.value && ((P = B.navigate) == null || P.call(B, w), y == null || y.toggle());
  }
  function I(w) {
    w.key !== "Enter" && w.key !== " " || (w.preventDefault(), F(w));
  }
  return () => {
    const w = B.isLink.value ? "a" : e.tag, P = !(!e.appendIcon && !e.appendAvatar), p = !(!P && !o.append), _ = !(!o.close && !e.closable), $ = !(!o.filter && !e.filter) && y, E = !(!e.prependIcon && !e.prependAvatar), C = !(!E && !o.prepend), V = !y || y.isSelected.value;
    return x.value && Fe(v(w, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": S.value, "v-chip--filter": $, "v-chip--pill": e.pill }, h.value, a.value, V ? s.value : void 0, c.value, d.value, f.value, m.value, u.value, y == null ? void 0 : y.selectedClass.value, e.class], style: [V ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: B.href.value, tabindex: S.value ? 0 : void 0, onClick: F, onKeydown: S.value && !k.value && I }, { default: () => {
      var O;
      return [fl(S.value, "v-chip"), $ && v(wa, { key: "filter" }, { default: () => [Fe(v("div", { class: "v-chip__filter" }, [o.filter ? Fe(v(Ve, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[qe("slot"), o.filter, "default"]]) : v(he, { key: "filter-icon", icon: e.filterIcon }, null)]), [[gt, y.isSelected.value]])] }), C && v("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? v(Ve, { key: "prepend-defaults", disabled: !E, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : v(ae, null, [e.prependIcon && v(he, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && v(al, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), v("div", { class: "v-chip__content" }, [((O = o.default) == null ? void 0 : O.call(o, { isSelected: y == null ? void 0 : y.isSelected.value, selectedClass: y == null ? void 0 : y.selectedClass.value, select: y == null ? void 0 : y.select, toggle: y == null ? void 0 : y.toggle, value: y == null ? void 0 : y.value.value, disabled: e.disabled })) ?? e.text]), p && v("div", { key: "append", class: "v-chip__append" }, [o.append ? v(Ve, { key: "append-defaults", disabled: !P, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : v(ae, null, [e.appendIcon && v(he, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && v(al, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), _ && v("div", J({ key: "close", class: "v-chip__close" }, A.value), [o.close ? v(Ve, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : v(he, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[qe("ripple"), S.value && e.ripple, null]]);
  };
} }), jl = Symbol.for("vuetify:list");
function Po() {
  const e = ve(jl, { hasPrepend: ue(!1), updateHasPrepend: () => null }), l = { hasPrepend: ue(!1), updateHasPrepend: (t) => {
    t && (l.hasPrepend.value = t);
  } };
  return ye(jl, l), e;
}
function _o() {
  return ve(jl, null);
}
const hs = { open: (e) => {
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
}, select: () => null }, Ao = { open: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (t) {
    let r = o.get(l);
    for (n.add(l); r != null && r !== l; )
      n.add(r), r = o.get(r);
    return n;
  }
  return n.delete(l), n;
}, select: () => null }, bs = { open: Ao.open, select: (e) => {
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
        let [u, c] = i;
        return c === "on" ? [...s, u] : s;
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
}, Gn = (e) => {
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
}, Pt = Symbol.for("vuetify:nested"), Fo = { id: ue(), root: { register: () => null, unregister: () => null, parents: H(/* @__PURE__ */ new Map()), children: H(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: H(/* @__PURE__ */ new Set()), selected: H(/* @__PURE__ */ new Map()), selectedValues: H([]) } }, Ss = M({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), ws = (e) => {
  let l = !1;
  const t = H(/* @__PURE__ */ new Map()), n = H(/* @__PURE__ */ new Map()), o = fe(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), r = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((d) => {
          const f = Gn(d);
          return { select: (m) => {
            let { id: h, selected: x, children: y, ...B } = m;
            return h = Ue(h), y.has(h) ? x : f.select({ id: h, selected: x, children: y, ...B });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((d) => {
          const f = Rl(d);
          return { select: (m) => {
            let { id: h, selected: x, children: y, ...B } = m;
            return h = Ue(h), y.has(h) ? x : f.select({ id: h, selected: x, children: y, ...B });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return Rl(e.mandatory);
      case "single-independent":
        return Gn(e.mandatory);
      default:
        return ((d) => {
          const f = { select: (m) => {
            let { id: h, value: x, selected: y, children: B, parents: k } = m;
            h = Ue(h);
            const S = new Map(y), A = [h];
            for (; A.length; ) {
              const I = A.shift();
              y.set(I, x ? "on" : "off"), B.has(I) && A.push(...B.get(I));
            }
            let F = k.get(h);
            for (; F; ) {
              const I = B.get(F), w = I.every((p) => y.get(p) === "on"), P = I.every((p) => !y.has(p) || y.get(p) === "off");
              y.set(F, w ? "on" : P ? "off" : "indeterminate"), F = k.get(F);
            }
            return d && !x && Array.from(y.entries()).reduce((w, P) => {
              let [p, _] = P;
              return _ === "on" ? [...w, p] : w;
            }, []).length === 0 ? S : y;
          }, in: (m, h, x) => {
            let y = /* @__PURE__ */ new Map();
            for (const B of m || [])
              y = f.select({ id: B, value: !0, selected: new Map(y), children: h, parents: x });
            return y;
          }, out: (m, h) => {
            const x = [];
            for (const [y, B] of m.entries())
              B !== "on" || h.has(y) || x.push(y);
            return x;
          } };
          return f;
        })(e.mandatory);
    }
  }), a = g(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return bs;
      case "single":
        return hs;
      default:
        return Ao;
    }
  }), s = fe(e, "selected", e.selected, (d) => r.value.in(d, t.value, n.value), (d) => r.value.out(d, t.value, n.value));
  function i(d) {
    const f = [];
    let m = d;
    for (; m != null; )
      f.unshift(m), m = n.value.get(m);
    return f;
  }
  nt(() => {
    l = !0;
  });
  const u = Se("nested"), c = { id: ue(), root: { opened: o, selected: s, selectedValues: g(() => {
    const d = [];
    for (const [f, m] of s.value.entries())
      m === "on" && d.push(f);
    return d;
  }), register: (d, f, m) => {
    f && d !== f && n.value.set(d, f), m && t.value.set(d, []), f != null && t.value.set(f, [...t.value.get(f) || [], d]);
  }, unregister: (d) => {
    if (l)
      return;
    t.value.delete(d);
    const f = n.value.get(d);
    if (f) {
      const m = t.value.get(f) ?? [];
      t.value.set(f, m.filter((h) => h !== d));
    }
    n.value.delete(d), o.value.delete(d);
  }, open: (d, f, m) => {
    u.emit("click:open", { id: d, value: f, path: i(d), event: m });
    const h = a.value.open({ id: d, value: f, opened: new Set(o.value), children: t.value, parents: n.value, event: m });
    h && (o.value = h);
  }, openOnSelect: (d, f, m) => {
    const h = a.value.select({ id: d, value: f, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: n.value, event: m });
    h && (o.value = h);
  }, select: (d, f, m) => {
    u.emit("click:select", { id: d, value: f, path: i(d), event: m });
    const h = r.value.select({ id: d, value: f, selected: new Map(s.value), children: t.value, parents: n.value, event: m });
    h && (s.value = h), c.root.openOnSelect(d, f, m);
  }, children: t, parents: n } };
  return ye(Pt, c), c.root;
}, $o = (e, l) => {
  const t = ve(Pt, Fo), n = Symbol(Me()), o = g(() => e.value !== void 0 ? e.value : n), r = { ...t, id: o, open: (a, s) => t.root.open(o.value, a, s), openOnSelect: (a, s) => t.root.openOnSelect(o.value, a, s), isOpen: g(() => t.root.opened.value.has(o.value)), parent: g(() => t.root.parents.value.get(o.value)), select: (a, s) => t.root.select(o.value, a, s), isSelected: g(() => t.root.selected.value.get(Ue(o.value)) === "on"), isIndeterminate: g(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: g(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, l), nt(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), l && ye(Pt, r), r;
}, xs = dt({ name: "VListGroupActivator", setup(e, l) {
  let { slots: t } = l;
  return (() => {
    const n = ve(Pt, Fo);
    ye(Pt, { ...n, isGroupActivator: !0 });
  })(), () => {
    var n;
    return (n = t.default) == null ? void 0 : n.call(t);
  };
} }), ks = M({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...we() }, "VListGroup"), Hn = Y()({ name: "VListGroup", props: ks(), setup(e, l) {
  let { slots: t } = l;
  const { isOpen: n, open: o, id: r } = $o(G(e, "value"), !0), a = g(() => `v-list-group--id-${String(r.value)}`), s = _o(), { isBooted: i } = function() {
    const m = ue(!1);
    return Ft(() => {
      window.requestAnimationFrame(() => {
        m.value = !0;
      });
    }), { ssrBootStyles: g(() => m.value ? void 0 : { transition: "none !important" }), isBooted: Gl(m) };
  }();
  function u(m) {
    o(!n.value, m);
  }
  const c = g(() => ({ onClick: u, class: "v-list-group__header", id: a.value })), d = g(() => n.value ? e.collapseIcon : e.expandIcon), f = g(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && d.value, appendIcon: e.appendIcon || !e.subgroup && d.value, title: e.title, value: e.value } }));
  return le(() => v(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style }, { default: () => [t.activator && v(Ve, { defaults: f.value }, { default: () => [v(xs, null, { default: () => [t.activator({ props: c.value, isOpen: n.value })] })] }), v(Ke, { transition: { component: kr }, disabled: !i.value }, { default: () => {
    var m;
    return [Fe(v("div", { class: "v-list-group__items", role: "group", "aria-labelledby": a.value }, [(m = t.default) == null ? void 0 : m.call(t)]), [[gt, n.value]])];
  } })] })), {};
} }), Cs = fa("v-list-item-subtitle"), Bs = fa("v-list-item-title"), Ps = M({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Le(), onClickOnce: Le(), ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), ...Je(), ...ln(), ...we(), ...be(), ...ot({ variant: "text" }) }, "VListItem"), ol = Y()({ name: "VListItem", directives: { Ripple: gl }, props: Ps(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const r = tn(e, t), a = g(() => e.value === void 0 ? r.href.value : e.value), { select: s, isSelected: i, isIndeterminate: u, isGroupActivator: c, root: d, parent: f, openOnSelect: m } = $o(a, !1), h = _o(), x = g(() => {
    var L;
    return e.active !== !1 && (e.active || ((L = r.isActive) == null ? void 0 : L.value) || i.value);
  }), y = g(() => e.link !== !1 && r.isLink.value), B = g(() => !e.disabled && e.link !== !1 && (e.link || r.isClickable.value || e.value != null && !!h)), k = g(() => e.rounded || e.nav), S = g(() => e.color ?? e.activeColor), A = g(() => ({ color: x.value ? S.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Z(() => {
    var L;
    return (L = r.isActive) == null ? void 0 : L.value;
  }, (L) => {
    L && f.value != null && d.open(f.value, !0), L && m(L);
  }, { immediate: !0 });
  const { themeClasses: F } = Ce(e), { borderClasses: I } = Lt(e), { colorClasses: w, colorStyles: P, variantClasses: p } = ml(A), { densityClasses: _ } = He(e), { dimensionStyles: $ } = It(e), { elevationClasses: E } = Nt(e), { roundedClasses: C } = Ze(k), V = g(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), O = g(() => ({ isActive: x.value, select: s, isSelected: i.value, isIndeterminate: u.value }));
  function T(L) {
    var W;
    o("click", L), !c && B.value && ((W = r.navigate) == null || W.call(r, L), e.value != null && s(!i.value, L));
  }
  function N(L) {
    L.key !== "Enter" && L.key !== " " || (L.preventDefault(), T(L));
  }
  return le(() => {
    const L = y.value ? "a" : e.tag, W = n.title || e.title, R = n.subtitle || e.subtitle, K = !(!e.appendAvatar && !e.appendIcon), D = !(!K && !n.append), z = !(!e.prependAvatar && !e.prependIcon), j = !(!z && !n.prepend);
    var U, ne;
    return h == null || h.updateHasPrepend(j), e.activeColor && (U = "active-color", ne = ["color", "base-color"], ne = Array.isArray(ne) ? ne.slice(0, -1).map((ee) => `'${ee}'`).join(", ") + ` or '${ne.at(-1)}'` : `'${ne}'`, cl(`[Vuetify UPGRADE] '${U}' is deprecated, use ${ne} instead.`)), Fe(v(L, { class: ["v-list-item", { "v-list-item--active": x.value, "v-list-item--disabled": e.disabled, "v-list-item--link": B.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !j && (h == null ? void 0 : h.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && x.value }, F.value, I.value, w.value, _.value, E.value, V.value, C.value, p.value, e.class], style: [P.value, $.value, e.style], href: r.href.value, tabindex: B.value ? h ? -2 : 0 : void 0, onClick: T, onKeydown: B.value && !y.value && N }, { default: () => {
      var ee;
      return [fl(B.value || x.value, "v-list-item"), j && v("div", { key: "prepend", class: "v-list-item__prepend" }, [n.prepend ? v(Ve, { key: "prepend-defaults", disabled: !z, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.prepend) == null ? void 0 : Q.call(n, O.value)];
      } }) : v(ae, null, [e.prependAvatar && v(al, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && v(he, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), v("div", { class: "v-list-item__content", "data-no-activator": "" }, [W && v(Bs, { key: "title" }, { default: () => {
        var Q;
        return [((Q = n.title) == null ? void 0 : Q.call(n, { title: e.title })) ?? e.title];
      } }), R && v(Cs, { key: "subtitle" }, { default: () => {
        var Q;
        return [((Q = n.subtitle) == null ? void 0 : Q.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ee = n.default) == null ? void 0 : ee.call(n, O.value)]), D && v("div", { key: "append", class: "v-list-item__append" }, [n.append ? v(Ve, { key: "append-defaults", disabled: !K, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.append) == null ? void 0 : Q.call(n, O.value)];
      } }) : v(ae, null, [e.appendIcon && v(he, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && v(al, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[qe("ripple"), B.value && e.ripple]]);
  }), {};
} }), _s = M({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...we() }, "VListSubheader"), As = Y()({ name: "VListSubheader", props: _s(), setup(e, l) {
  let { slots: t } = l;
  const { textColorClasses: n, textColorStyles: o } = ze(G(e, "color"));
  return le(() => {
    const r = !(!t.default && !e.title);
    return v(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var a;
      return [r && v("div", { class: "v-list-subheader__text" }, [((a = t.default) == null ? void 0 : a.call(t)) ?? e.title])];
    } });
  }), {};
} }), Fs = M({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...be() }, "VDivider"), $s = Y()({ name: "VDivider", props: Fs(), setup(e, l) {
  let { attrs: t } = l;
  const { themeClasses: n } = Ce(e), { textColorClasses: o, textColorStyles: r } = ze(G(e, "color")), a = g(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = X(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = X(e.thickness)), s;
  });
  return le(() => v("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, n.value, o.value, e.class], style: [a.value, r.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), Vs = M({ items: Array }, "VListChildren"), Vo = Y()({ name: "VListChildren", props: Vs(), setup(e, l) {
  let { slots: t } = l;
  return Po(), () => {
    var n, o;
    return ((n = t.default) == null ? void 0 : n.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((r) => {
      var m, h;
      let { children: a, props: s, type: i, raw: u } = r;
      if (i === "divider")
        return ((m = t.divider) == null ? void 0 : m.call(t, { props: s })) ?? v($s, s, null);
      if (i === "subheader")
        return ((h = t.subheader) == null ? void 0 : h.call(t, { props: s })) ?? v(As, s, null);
      const c = { subtitle: t.subtitle ? (x) => {
        var y;
        return (y = t.subtitle) == null ? void 0 : y.call(t, { ...x, item: u });
      } : void 0, prepend: t.prepend ? (x) => {
        var y;
        return (y = t.prepend) == null ? void 0 : y.call(t, { ...x, item: u });
      } : void 0, append: t.append ? (x) => {
        var y;
        return (y = t.append) == null ? void 0 : y.call(t, { ...x, item: u });
      } : void 0, title: t.title ? (x) => {
        var y;
        return (y = t.title) == null ? void 0 : y.call(t, { ...x, item: u });
      } : void 0 }, [d, f] = Hn.filterProps(s);
      return a ? v(Hn, J({ value: s == null ? void 0 : s.value }, d), { activator: (x) => {
        let { props: y } = x;
        return t.header ? t.header({ props: { ...s, ...y } }) : v(ol, J(s, y), c);
      }, default: () => v(Vo, { items: a }, t) }) : t.item ? t.item({ props: s }) : v(ol, s, c);
    }));
  };
} }), Eo = M({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Io(e, l) {
  const t = ke(l, e.itemTitle, l), n = e.returnObject ? l : ke(l, e.itemValue, t), o = ke(l, e.itemChildren), r = { title: t, value: n, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? Vt(l, ["children"])[1] : l : ke(l, e.itemProps) };
  return { title: String(r.title ?? ""), value: r.value, props: r, children: Array.isArray(o) ? Oo(e, o) : void 0, raw: l };
}
function Oo(e, l) {
  const t = [];
  for (const n of l)
    t.push(Io(e, n));
  return t;
}
function Es(e) {
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
  }(g(() => Oo(e, e.items)), (l) => Io(e, l));
}
function Is(e, l) {
  const t = ke(l, e.itemType, "item"), n = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : ke(l, e.itemTitle), o = ke(l, e.itemValue, void 0), r = ke(l, e.itemChildren), a = { title: n, value: o, ...e.itemProps === !0 ? Vt(l, ["children"])[1] : ke(l, e.itemProps) };
  return { type: t, title: a.title, value: a.value, props: a, children: t === "item" && r ? Do(e, r) : void 0, raw: l };
}
function Do(e, l) {
  const t = [];
  for (const n of l)
    t.push(Is(e, n));
  return t;
}
const Os = M({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...Ss({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Tt(), ...se(), ...Ge(), ...Et(), ...Mt(), itemType: { type: String, default: "type" }, ...Eo(), ...Je(), ...we(), ...be(), ...ot({ variant: "text" }) }, "VList"), Ds = Y()({ name: "VList", props: Os(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { items: n } = function(p) {
    return { items: g(() => Do(p, p.items)) };
  }(e), { themeClasses: o } = Ce(e), { backgroundColorClasses: r, backgroundColorStyles: a } = pt(G(e, "bgColor")), { borderClasses: s } = Lt(e), { densityClasses: i } = He(e), { dimensionStyles: u } = It(e), { elevationClasses: c } = Nt(e), { roundedClasses: d } = Ze(e), { open: f, select: m } = ws(e), h = g(() => e.lines ? `v-list--${e.lines}-line` : void 0), x = G(e, "activeColor"), y = G(e, "baseColor"), B = G(e, "color");
  Po(), Xe({ VListGroup: { activeColor: x, baseColor: y, color: B }, VListItem: { activeClass: G(e, "activeClass"), activeColor: x, baseColor: y, color: B, density: G(e, "density"), disabled: G(e, "disabled"), lines: G(e, "lines"), nav: G(e, "nav"), variant: G(e, "variant") } });
  const k = ue(!1), S = H();
  function A(p) {
    k.value = !0;
  }
  function F(p) {
    k.value = !1;
  }
  function I(p) {
    var _;
    k.value || p.relatedTarget && ((_ = S.value) != null && _.contains(p.relatedTarget)) || P();
  }
  function w(p) {
    if (S.value) {
      if (p.key === "ArrowDown")
        P("next");
      else if (p.key === "ArrowUp")
        P("prev");
      else if (p.key === "Home")
        P("first");
      else {
        if (p.key !== "End")
          return;
        P("last");
      }
      p.preventDefault();
    }
  }
  function P(p) {
    if (S.value)
      return Jt(S.value, p);
  }
  return le(() => v(e.tag, { ref: S, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, r.value, s.value, i.value, c.value, h.value, d.value, e.class], style: [a.value, u.value, e.style], tabindex: e.disabled || k.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: A, onFocusout: F, onFocus: I, onKeydown: w }, { default: () => [v(Vo, { items: n.value }, t)] })), { open: f, select: m, focus: P };
} }), Ts = M({ id: String, ...Kl(Pa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ba } }), ["absolute"]) }, "VMenu"), Ls = Y()({ name: "VMenu", props: Ts(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { scopeId: o } = Ca(), r = Me(), a = g(() => e.id || `v-menu-${r}`), s = H(), i = ve(Ll, null), u = ue(0);
  function c() {
    i == null || i.closeParents();
  }
  function d(h) {
    var x, y;
    e.disabled || h.key === "Tab" && (n.value = !1, (y = (x = s.value) == null ? void 0 : x.activatorEl) == null || y.focus());
  }
  function f(h) {
    var y;
    if (e.disabled)
      return;
    const x = (y = s.value) == null ? void 0 : y.contentEl;
    x && n.value ? h.key === "ArrowDown" ? (h.preventDefault(), Jt(x, "next")) : h.key === "ArrowUp" && (h.preventDefault(), Jt(x, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (n.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => f(h))));
  }
  ye(Ll, { register() {
    ++u.value;
  }, unregister() {
    --u.value;
  }, closeParents() {
    setTimeout(() => {
      u.value || (n.value = !1, i == null || i.closeParents());
    }, 40);
  } }), Z(n, (h) => {
    h ? i == null || i.register() : i == null || i.unregister();
  });
  const m = g(() => J({ "aria-haspopup": "menu", "aria-expanded": String(n.value), "aria-owns": a.value, onKeydown: f }, e.activatorProps));
  return le(() => {
    const [h] = On.filterProps(e);
    return v(On, J({ ref: s, class: ["v-menu", e.class], style: e.style }, h, { modelValue: n.value, "onUpdate:modelValue": (x) => n.value = x, absolute: !0, activatorProps: m.value, "onClick:outside": c, onKeydown: d }, o), { activator: t.activator, default: function() {
      for (var x = arguments.length, y = new Array(x), B = 0; B < x; B++)
        y[B] = arguments[B];
      return v(Ve, { root: "VMenu" }, { default: () => {
        var k;
        return [(k = t.default) == null ? void 0 : k.call(t, ...y)];
      } });
    } });
  }), nn({ id: a, ΨopenChildren: u }, s);
} }), Ms = M({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...Dt({ transition: { component: Sa } }) }, "VCounter"), Ns = Y()({ name: "VCounter", functional: !0, props: Ms(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => v(Ke, { transition: e.transition }, { default: () => [Fe(v("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: n.value, max: e.max, value: e.value }) : n.value]), [[gt, e.active]])] })), {};
} }), js = M({ floating: Boolean, ...se() }, "VFieldLabel"), Wt = Y()({ name: "VFieldLabel", props: js(), setup(e, l) {
  let { slots: t } = l;
  return le(() => v(mo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Rs = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], To = M({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Rs.includes(e) }, "onClick:clear": Le(), "onClick:appendInner": Le(), "onClick:prependInner": Le(), ...se(), ...an(), ...Je(), ...be() }, "VField"), Kn = Y()({ name: "VField", inheritAttrs: !1, props: { id: String, ...wo(), ...To() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { themeClasses: r } = Ce(e), { loaderClasses: a } = on(e), { focusClasses: s, isFocused: i, focus: u, blur: c } = rn(e), { InputIcon: d } = So(e), { roundedClasses: f } = Ze(e), { rtlClasses: m } = Ot(), h = g(() => e.dirty || e.active), x = g(() => !(e.singleLine || !e.label && !o.label)), y = Me(), B = g(() => e.id || `input-${y}`), k = g(() => `${B.value}-messages`), S = H(), A = H(), F = H(), I = g(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: w, backgroundColorStyles: P } = pt(G(e, "bgColor")), { textColorClasses: p, textColorStyles: _ } = ze(g(() => e.error || e.disabled ? void 0 : h.value && i.value ? e.color : e.baseColor));
  Z(h, (C) => {
    if (x.value) {
      const V = S.value.$el, O = A.value.$el;
      requestAnimationFrame(() => {
        const T = Yl(V), N = O.getBoundingClientRect(), L = N.x - T.x, W = N.y - T.y - (T.height / 2 - N.height / 2), R = N.width / 0.75, K = Math.abs(R - T.width) > 1 ? { maxWidth: X(R) } : void 0, D = getComputedStyle(V), z = getComputedStyle(O), j = 1e3 * parseFloat(D.transitionDuration) || 150, U = parseFloat(z.getPropertyValue("--v-field-label-scale")), ne = z.getPropertyValue("color");
        V.style.visibility = "visible", O.style.visibility = "hidden", st(V, { transform: `translate(${L}px, ${W}px) scale(${U})`, color: ne, ...K }, { duration: j, easing: Zt, direction: C ? "normal" : "reverse" }).finished.then(() => {
          V.style.removeProperty("visibility"), O.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const $ = g(() => ({ isActive: h, isFocused: i, controlRef: F, blur: c, focus: u }));
  function E(C) {
    C.target !== document.activeElement && C.preventDefault();
  }
  return le(() => {
    var L, W, R;
    const C = e.variant === "outlined", V = o["prepend-inner"] || e.prependInnerIcon, O = !(!e.clearable && !o.clear), T = !!(o["append-inner"] || e.appendInnerIcon || O), N = o.label ? o.label({ ...$.value, label: e.label, props: { for: B.value } }) : e.label;
    return v("div", J({ class: ["v-field", { "v-field--active": h.value, "v-field--appended": T, "v-field--center-affix": e.centerAffix ?? !I.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": V, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !N, [`v-field--variant-${e.variant}`]: !0 }, r.value, w.value, s.value, a.value, f.value, m.value, e.class], style: [P.value, _.value, e.style], onClick: E }, t), [v("div", { class: "v-field__overlay" }, null), v(ro, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), V && v("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && v(d, { key: "prepend-icon", name: "prependInner" }, null), (L = o["prepend-inner"]) == null ? void 0 : L.call(o, $.value)]), v("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && x.value && v(Wt, { key: "floating-label", ref: A, class: [p.value], floating: !0, for: B.value }, { default: () => [N] }), v(Wt, { ref: S, for: B.value }, { default: () => [N] }), (W = o.default) == null ? void 0 : W.call(o, { ...$.value, props: { id: B.value, class: "v-field__input", "aria-describedby": k.value }, focus: u, blur: c })]), O && v(wa, { key: "clear" }, { default: () => [Fe(v("div", { class: "v-field__clearable", onMousedown: (K) => {
      K.preventDefault(), K.stopPropagation();
    } }, [o.clear ? o.clear() : v(d, { name: "clear" }, null)]), [[gt, e.dirty]])] }), T && v("div", { key: "append", class: "v-field__append-inner" }, [(R = o["append-inner"]) == null ? void 0 : R.call(o, $.value), e.appendInnerIcon && v(d, { key: "append-icon", name: "appendInner" }, null)]), v("div", { class: ["v-field__outline", p.value] }, [C && v(ae, null, [v("div", { class: "v-field__outline__start" }, null), x.value && v("div", { class: "v-field__outline__notch" }, [v(Wt, { ref: A, floating: !0, for: B.value }, { default: () => [N] })]), v("div", { class: "v-field__outline__end" }, null)]), I.value && x.value && v(Wt, { ref: A, floating: !0, for: B.value }, { default: () => [N] })])]);
  }), { controlRef: F };
} }), zs = ["color", "file", "time", "date", "datetime-local", "week", "month"], Lo = M({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...sn(), ...To() }, "VTextField"), zl = Y()({ name: "VTextField", directives: { Intersect: Co }, inheritAttrs: !1, props: Lo(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const r = fe(e, "modelValue"), { isFocused: a, focus: s, blur: i } = rn(e), u = g(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : (r.value ?? "").toString().length), c = g(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), d = g(() => ["plain", "underlined"].includes(e.variant));
  function f(I, w) {
    var P, p;
    e.autofocus && I && ((p = (P = w[0].target) == null ? void 0 : P.focus) == null || p.call(P));
  }
  const m = H(), h = H(), x = H(), y = g(() => zs.includes(e.type) || e.persistentPlaceholder || a.value || e.active);
  function B() {
    var I;
    x.value !== document.activeElement && ((I = x.value) == null || I.focus()), a.value || s();
  }
  function k(I) {
    n("mousedown:control", I), I.target !== x.value && (B(), I.preventDefault());
  }
  function S(I) {
    B(), n("click:control", I);
  }
  function A(I) {
    I.stopPropagation(), B(), Ee(() => {
      r.value = null, function(w) {
        for (var P = arguments.length, p = new Array(P > 1 ? P - 1 : 0), _ = 1; _ < P; _++)
          p[_ - 1] = arguments[_];
        if (Array.isArray(w))
          for (const $ of w)
            $(...p);
        else
          typeof w == "function" && w(...p);
      }(e["onClick:clear"], I);
    });
  }
  function F(I) {
    var P;
    const w = I.target;
    if (r.value = w.value, ((P = e.modelModifiers) == null ? void 0 : P.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const p = [w.selectionStart, w.selectionEnd];
      Ee(() => {
        w.selectionStart = p[0], w.selectionEnd = p[1];
      });
    }
  }
  return le(() => {
    const I = !!(o.counter || e.counter || e.counterValue), w = !(!I && !o.details), [P, p] = Ul(t), [{ modelValue: _, ...$ }] = nl.filterProps(e), [E] = function(C) {
      return Vt(C, Object.keys(Kn.props).filter((V) => !El(V) && V !== "class" && V !== "style"));
    }(e);
    return v(nl, J({ ref: m, modelValue: r.value, "onUpdate:modelValue": (C) => r.value = C, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, P, $, { centerAffix: !d.value, focused: a.value }), { ...o, default: (C) => {
      let { id: V, isDisabled: O, isDirty: T, isReadonly: N, isValid: L } = C;
      return v(Kn, J({ ref: h, onMousedown: k, onClick: S, "onClick:clear": A, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, E, { id: V.value, active: y.value || T.value, dirty: T.value || e.dirty, disabled: O.value, focused: a.value, error: L.value === !1 }), { ...o, default: (W) => {
        let { props: { class: R, ...K } } = W;
        const D = Fe(v("input", J({ ref: x, value: r.value, onInput: F, autofocus: e.autofocus, readonly: N.value, disabled: O.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: B, onBlur: i }, K, p), null), [[qe("intersect"), { handler: f }, null, { once: !0 }]]);
        return v(ae, null, [e.prefix && v("span", { class: "v-text-field__prefix" }, [e.prefix]), o.default ? v("div", { class: R, "data-no-activator": "" }, [o.default(), D]) : pr(D, { class: R }), e.suffix && v("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: w ? (C) => {
      var V;
      return v(ae, null, [(V = o.details) == null ? void 0 : V.call(o, C), I && v(ae, null, [v("span", null, null), v(Ns, { active: e.persistentCounter || a.value, value: u.value, max: c.value }, o.counter)])]);
    } : void 0 });
  }), nn({}, m, h, x);
} }), Ws = M({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: at }, ...Eo({ itemChildren: !1 }) }, "Select"), Gs = M({ ...Ws(), ...Kl(Lo({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...Dt({ transition: { component: ba } }) }, "VSelect"), Hs = Y()({ name: "VSelect", props: Gs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { t: n } = yt(), o = H(), r = H(), a = fe(e, "menu"), s = g({ get: () => a.value, set: (C) => {
    var V;
    a.value && !C && ((V = r.value) != null && V.ΨopenChildren) || (a.value = C);
  } }), { items: i, transformIn: u, transformOut: c } = Es(e), d = fe(e, "modelValue", [], (C) => u(C === null ? [null] : Oe(C)), (C) => {
    const V = c(C);
    return e.multiple ? V : V[0] ?? null;
  }), f = xo(), m = g(() => d.value.map((C) => i.value.find((V) => e.valueComparator(V.value, C.value)) || C)), h = g(() => m.value.map((C) => C.props.value)), x = ue(!1);
  let y, B = "";
  const k = g(() => e.hideSelected ? i.value.filter((C) => !m.value.some((V) => V === C)) : i.value), S = g(() => e.hideNoData && !i.value.length || e.readonly || (f == null ? void 0 : f.isReadonly.value)), A = H();
  function F(C) {
    e.openOnClear && (s.value = !0);
  }
  function I() {
    S.value || (s.value = !s.value);
  }
  function w(C) {
    var T, N;
    if (e.readonly || f != null && f.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(C.key) && C.preventDefault(), ["Enter", "ArrowDown", " "].includes(C.key) && (s.value = !0), ["Escape", "Tab"].includes(C.key) && (s.value = !1), C.key === "Home" ? (T = A.value) == null || T.focus("first") : C.key === "End" && ((N = A.value) == null || N.focus("last")), e.multiple || !function(L) {
      const W = L.key.length === 1, R = !L.ctrlKey && !L.metaKey && !L.altKey;
      return W && R;
    }(C)))
      return;
    const V = performance.now();
    V - y > 1e3 && (B = ""), B += C.key.toLowerCase(), y = V;
    const O = i.value.find((L) => L.title.toLowerCase().startsWith(B));
    O !== void 0 && (d.value = [O]);
  }
  function P(C) {
    var V;
    C.key === "Tab" && ((V = o.value) == null || V.focus());
  }
  function p(C) {
    if (e.multiple) {
      const V = h.value.findIndex((O) => e.valueComparator(O, C.value));
      if (V === -1)
        d.value = [...d.value, C];
      else {
        const O = [...d.value];
        O.splice(V, 1), d.value = O;
      }
    } else
      d.value = [C], s.value = !1;
  }
  function _(C) {
    var V;
    (V = A.value) != null && V.$el.contains(C.relatedTarget) || (s.value = !1);
  }
  function $() {
    var C;
    x.value && ((C = o.value) == null || C.focus());
  }
  function E(C) {
    x.value = !0;
  }
  return le(() => {
    const C = !(!e.chips && !t.chip), V = !!(!e.hideNoData || k.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), O = d.value.length > 0, [T] = zl.filterProps(e), N = O || !x.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return v(zl, J({ ref: o }, T, { modelValue: d.value.map((L) => L.props.value).join(", "), "onUpdate:modelValue": (L) => {
      L == null && (d.value = []);
    }, focused: x.value, "onUpdate:focused": (L) => x.value = L, validationValue: d.externalValue, dirty: O, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": d.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: N, "onClick:clear": F, "onMousedown:control": I, onBlur: _, onKeydown: w }), { ...t, default: () => v(ae, null, [v(Ls, J({ ref: r, modelValue: s.value, "onUpdate:modelValue": (L) => s.value = L, activator: "parent", contentClass: "v-select__content", disabled: S.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: $ }, e.menuProps), { default: () => [V && v(Ds, { ref: A, selected: h.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (L) => L.preventDefault(), onKeydown: P, onFocusin: E, tabindex: "-1" }, { default: () => {
      var L, W, R;
      return [(L = t["prepend-item"]) == null ? void 0 : L.call(t), !k.value.length && !e.hideNoData && (((W = t["no-data"]) == null ? void 0 : W.call(t)) ?? v(ol, { title: n(e.noDataText) }, null)), k.value.map((K, D) => {
        var j;
        const z = J(K.props, { key: D, onClick: () => p(K) });
        return ((j = t.item) == null ? void 0 : j.call(t, { item: K, index: D, props: z })) ?? v(ol, z, { prepend: (U) => {
          let { isSelected: ne } = U;
          return v(ae, null, [e.multiple && !e.hideSelected ? v(vt, { key: K.value, modelValue: ne, ripple: !1, tabindex: "-1" }, null) : void 0, K.props.prependIcon && v(he, { icon: K.props.prependIcon }, null)]);
        } });
      }), (R = t["append-item"]) == null ? void 0 : R.call(t)];
    } })] }), m.value.map((L, W) => {
      var K;
      const R = { "onClick:close": function(D) {
        D.stopPropagation(), D.preventDefault(), p(L);
      }, onMousedown(D) {
        D.preventDefault(), D.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return v("div", { key: L.value, class: "v-select__selection" }, [C ? t.chip ? v(Ve, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: L.title } } }, { default: () => {
        var D;
        return [(D = t.chip) == null ? void 0 : D.call(t, { item: L, index: W, props: R })];
      } }) : v(ys, J({ key: "chip", closable: e.closableChips, size: "small", text: L.title }, R), null) : ((K = t.selection) == null ? void 0 : K.call(t, { item: L, index: W })) ?? v("span", { class: "v-select__selection-text" }, [L.title, e.multiple && W < m.value.length - 1 && v("span", { class: "v-select__selection-comma" }, [qt(",")])])]);
    })]), "append-inner": function() {
      var K;
      for (var L = arguments.length, W = new Array(L), R = 0; R < L; R++)
        W[R] = arguments[R];
      return v(ae, null, [(K = t["append-inner"]) == null ? void 0 : K.call(t, ...W), e.menuIcon ? v(he, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), nn({ isFocused: x, menu: s, select: p }, o);
} }), cn = M({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), rl = Y()({ name: "VDataTableFooter", props: cn(), setup(e, l) {
  let { slots: t } = l;
  const { t: n } = yt(), { page: o, pageCount: r, startIndex: a, stopIndex: s, itemsLength: i, itemsPerPage: u, setItemsPerPage: c } = function() {
    const f = ve(Na);
    if (!f)
      throw new Error("Missing pagination!");
    return f;
  }(), d = g(() => e.itemsPerPageOptions.map((f) => ({ ...f, title: n(f.title) })));
  return () => {
    var f;
    return v("div", { class: "v-data-table-footer" }, [(f = t.prepend) == null ? void 0 : f.call(t), v("div", { class: "v-data-table-footer__items-per-page" }, [v("span", null, [n(e.itemsPerPageText)]), v(Hs, { items: d.value, modelValue: u.value, "onUpdate:modelValue": (m) => c(Number(m)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), v("div", { class: "v-data-table-footer__info" }, [v("div", null, [n(e.pageText, i.value ? a.value + 1 : 0, s.value, i.value)])]), v("div", { class: "v-data-table-footer__pagination" }, [v(it, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": n(e.firstPageLabel) }, null), v(it, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": n(e.prevPageLabel) }, null), e.showCurrentPage && v("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), v(it, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(r.value, o.value + 1), disabled: o.value === r.value, "aria-label": n(e.nextPageLabel) }, null), v(it, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = r.value, disabled: o.value === r.value, "aria-label": n(e.lastPageLabel) }, null)])]);
  };
} }), dn = (Un = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, _l = (e, l) => {
  let { slots: t, attrs: n } = l;
  const o = e.tag ?? "td";
  return v(o, J({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: X(e.height), width: X(e.width), left: X(e.fixedOffset || null) } }, n), { default: () => {
    var r;
    return [(r = t.default) == null ? void 0 : r.call(t)];
  } });
}, _l.props = Un, _l);
var Un, _l;
const Ks = M({ headers: { type: Array, default: () => [] } }, "DataTable-header"), Mo = Symbol.for("vuetify:data-table-headers");
function No(e, l) {
  const t = H([]), n = H([]);
  Re(() => {
    var m, h, x;
    const r = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], a = r.flatMap((y, B) => y.map((k) => ({ column: k, row: B }))), s = r.length, i = { title: "", sortable: !1 }, u = { ...i, width: 48 };
    if ((m = l == null ? void 0 : l.groupBy) != null && m.value.length) {
      const y = a.findIndex((B) => {
        let { column: k } = B;
        return k.key === "data-table-group";
      });
      y < 0 ? a.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : a.splice(y, 1, { column: { ...i, ...a[y].column }, row: a[y].row });
    }
    if ((h = l == null ? void 0 : l.showSelect) != null && h.value) {
      const y = a.findIndex((B) => {
        let { column: k } = B;
        return k.key === "data-table-select";
      });
      y < 0 ? a.unshift({ column: { ...u, key: "data-table-select", rowspan: s }, row: 0 }) : a.splice(y, 1, { column: { ...u, ...a[y].column }, row: a[y].row });
    }
    if ((x = l == null ? void 0 : l.showExpand) != null && x.value) {
      const y = a.findIndex((B) => {
        let { column: k } = B;
        return k.key === "data-table-expand";
      });
      y < 0 ? a.push({ column: { ...u, key: "data-table-expand", rowspan: s }, row: 0 }) : a.splice(y, 1, { column: { ...u, ...a[y].column }, row: a[y].row });
    }
    const c = mn(s).map(() => []), d = mn(s).fill(0);
    a.forEach((y) => {
      let { column: B, row: k } = y;
      const S = B.key;
      for (let A = k; A <= k + (B.rowspan ?? 1) - 1; A++)
        c[A].push({ ...B, key: S, fixedOffset: d[A], sortable: B.sortable ?? !!B.key }), d[A] += Number(B.width ?? 0);
    }), c.forEach((y) => {
      for (let B = y.length; B--; B >= 0)
        if (y[B].fixed)
          return void (y[B].lastFixed = !0);
    });
    const f = /* @__PURE__ */ new Set();
    t.value = c.map((y) => {
      const B = [];
      for (const k of y)
        f.has(k.key) || (f.add(k.key), B.push(k));
      return B;
    }), n.value = c.at(-1) ?? [];
  });
  const o = { headers: t, columns: n };
  return ye(Mo, o), o;
}
function yl() {
  const e = ve(Mo);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const jo = M({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...an() }, "VDataTableHeaders"), sl = Y()({ name: "VDataTableHeaders", props: jo(), setup(e, l) {
  let { slots: t, emit: n } = l;
  const { toggleSort: o, sortBy: r, isSorted: a } = function() {
    const A = ve(Ka);
    if (!A)
      throw new Error("Missing sort!");
    return A;
  }(), { someSelected: s, allSelected: i, selectAll: u, showSelectAll: c } = vl(), { columns: d, headers: f } = yl(), { loaderClasses: m } = on(e), h = (A, F) => {
    if (e.sticky || A.fixed)
      return { position: "sticky", zIndex: A.fixed ? 4 : e.sticky ? 3 : void 0, left: A.fixed ? X(A.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${F})` : void 0 };
  };
  function x(A) {
    const F = r.value.find((I) => I.key === A.key);
    return F ? F.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: y, backgroundColorStyles: B } = pt(e, "color"), k = g(() => ({ headers: f.value, columns: d.value, toggleSort: o, isSorted: a, sortBy: r.value, someSelected: s.value, allSelected: i.value, selectAll: u, getSortIcon: x, getFixedStyles: h })), S = (A) => {
    let { column: F, x: I, y: w } = A;
    const P = F.key === "data-table-select" || F.key === "data-table-expand";
    return v(dn, { tag: "th", align: F.align, class: ["v-data-table__th", { "v-data-table__th--sortable": F.sortable, "v-data-table__th--sorted": a(F) }, m.value], style: { width: X(F.width), minWidth: X(F.width), ...h(F, w) }, colspan: F.colspan, rowspan: F.rowspan, onClick: F.sortable ? () => o(F) : void 0, lastFixed: F.lastFixed, noPadding: P }, { default: () => {
      var $;
      const p = `column.${F.key}`, _ = { column: F, selectAll: u, isSorted: a, toggleSort: o, sortBy: r.value, someSelected: s.value, allSelected: i.value, getSortIcon: x };
      return t[p] ? t[p](_) : F.key === "data-table-select" ? (($ = t["column.data-table-select"]) == null ? void 0 : $.call(t, _)) ?? (c && v(vt, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": u }, null)) : v("div", { class: "v-data-table-header__content" }, [v("span", null, [F.title]), F.sortable && v(he, { key: "icon", class: "v-data-table-header__sort-icon", icon: x(F) }, null), e.multiSort && a(F) && v("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...y.value], style: B.value }, [r.value.findIndex((E) => E.key === F.key) + 1])]);
    } });
  };
  le(() => v(ae, null, [t.headers ? t.headers(k.value) : f.value.map((A, F) => v("tr", null, [A.map((I, w) => v(S, { column: I, x: w, y: F }, null))])), e.loading && v("tr", { class: "v-data-table-progress" }, [v("th", { colspan: d.value.length }, [v(ro, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), Us = M({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), qs = Y()({ name: "VDataTableGroupHeaderRow", props: Us(), setup(e, l) {
  let { slots: t } = l;
  const { isGroupOpen: n, toggleGroup: o, extractRows: r } = Ia(), { isSelected: a, isSomeSelected: s, select: i } = vl(), { columns: u } = yl(), c = g(() => r([e.item]));
  return () => v("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((d) => {
    var f, m;
    if (d.key === "data-table-group") {
      const h = n(e.item) ? "$expand" : "$next", x = () => o(e.item);
      return ((f = t["data-table-group"]) == null ? void 0 : f.call(t, { item: e.item, count: c.value.length, props: { icon: h, onClick: x } })) ?? v(dn, { class: "v-data-table-group-header-row__column" }, { default: () => [v(it, { size: "small", variant: "text", icon: h, onClick: x }, null), v("span", null, [e.item.value]), v("span", null, [qt("("), c.value.length, qt(")")])] });
    }
    if (d.key === "data-table-select") {
      const h = a(c.value), x = s(c.value) && !h, y = (B) => i(c.value, B);
      return ((m = t["data-table-select"]) == null ? void 0 : m.call(t, { props: { modelValue: h, indeterminate: x, "onUpdate:modelValue": y } })) ?? v("td", null, [v(vt, { modelValue: h, indeterminate: x, "onUpdate:modelValue": y }, null)]);
    }
    return v("td", null, null);
  })]);
} }), Ys = dt({ name: "VDataTableRow", props: M({ index: Number, item: Object, onClick: Function }, "VDataTableRow")(), setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, toggleSelect: o } = vl(), { isExpanded: r, toggleExpand: a } = Fa(), { columns: s } = yl();
  le(() => v("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, u) => v(dn, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var m, h;
    const c = e.item, d = `item.${i.key}`, f = { index: e.index, item: e.item, columns: s.value, isSelected: n, toggleSelect: o, isExpanded: r, toggleExpand: a };
    return t[d] ? t[d](f) : i.key === "data-table-select" ? ((m = t["item.data-table-select"]) == null ? void 0 : m.call(t, f)) ?? v(vt, { disabled: !c.selectable, modelValue: n([c]), onClick: Fl(() => o(c), ["stop"]) }, null) : i.key === "data-table-expand" ? ((h = t["item.data-table-expand"]) == null ? void 0 : h.call(t, f)) ?? v(it, { icon: r(c) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: Fl(() => a(c), ["stop"]) }, null) : ke(c.columns, i.key);
  } }))]));
} }), Ro = M({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), il = Y()({ name: "VDataTableRows", props: Ro(), setup(e, l) {
  let { emit: t, slots: n } = l;
  const { columns: o } = yl(), { expandOnClick: r, toggleExpand: a, isExpanded: s } = Fa(), { isSelected: i, toggleSelect: u } = vl(), { toggleGroup: c, isGroupOpen: d } = Ia(), { t: f } = yt();
  return le(() => {
    var m;
    return e.loading && n.loading ? v("tr", { class: "v-data-table-rows-loading", key: "loading" }, [v("td", { colspan: o.value.length }, [n.loading()])]) : e.loading || e.items.length || e.hideNoData ? v(ae, null, [e.items.map((h, x) => {
      var k;
      if (h.type === "group")
        return n["group-header"] ? n["group-header"]({ index: x, item: h, columns: o.value, isExpanded: s, toggleExpand: a, isSelected: i, toggleSelect: u, toggleGroup: c, isGroupOpen: d }) : v(qs, { key: `group-header_${h.id}`, item: h }, n);
      const y = { index: x, item: h, columns: o.value, isExpanded: s, toggleExpand: a, isSelected: i, toggleSelect: u }, B = { ...y, props: { key: `item_${h.value}`, onClick: r.value || e["onClick:row"] ? (S) => {
        var A;
        r.value && a(h), (A = e["onClick:row"]) == null || A.call(e, S, { item: h });
      } : void 0, index: x, item: h } };
      return v(ae, null, [n.item ? n.item(B) : v(Ys, B.props, n), s(h) && ((k = n["expanded-row"]) == null ? void 0 : k.call(n, y))]);
    })]) : v("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [v("td", { colspan: o.value.length }, [((m = n["no-data"]) == null ? void 0 : m.call(n)) ?? f(e.noDataText)])]);
  }), {};
} }), zo = M({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...se(), ...Ge(), ...we(), ...be() }, "VTable"), ul = Y()({ name: "VTable", props: zo(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { densityClasses: o } = He(e);
  return le(() => v(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, n.value, o.value, e.class], style: e.style }, { default: () => {
    var r, a, s;
    return [(r = t.top) == null ? void 0 : r.call(t), t.default ? v("div", { class: "v-table__wrapper", style: { height: X(e.height) } }, [v("table", null, [t.default()])]) : (a = t.wrapper) == null ? void 0 : a.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), Xs = M({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function Js(e, l, t) {
  return l.map((n, o) => function(r, a, s, i) {
    return { type: "item", index: s, value: r.returnObject ? a : ke(a, r.itemValue), selectable: ke(a, r.itemSelectable, !0), columns: i.reduce((u, c) => (u[c.key] = ke(a, c.value ?? c.key), u), {}), raw: a };
  }(e, n, o, t));
}
function Wo(e, l) {
  return { items: g(() => Js(e, e.items, l.value)) };
}
const Go = M({ ...Ro(), width: [String, Number], search: String, ...Nr(), ...jr(), ...Ks(), ...Xs(), ...zr(), ...Wr(), ...jo(), ...zo() }, "DataTable"), Zs = M({ ...Ma(), ...Go(), ...Lr(), ...cn() }, "VDataTable"), Qs = Y()({ name: "VDataTable", props: Zs(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Va(e), { sortBy: r, multiSort: a, mustSort: s } = Ua(e), { page: i, itemsPerPage: u } = ja(e), { columns: c, headers: d } = No(e, { groupBy: o, showSelect: G(e, "showSelect"), showExpand: G(e, "showExpand") }), { items: f } = Wo(e, c), m = G(e, "search"), { filteredItems: h } = Mr(e, f, m, { transform: (z) => z.columns }), { toggleSort: x } = qa({ sortBy: r, multiSort: a, mustSort: s, page: i }), { sortByWithGroups: y, opened: B, extractRows: k, isGroupOpen: S, toggleGroup: A } = Ea({ groupBy: o, sortBy: r }), { sortedItems: F } = Gr(e, h, y), { flatItems: I } = Ta(F, o, B), w = g(() => I.value.length), { startIndex: P, stopIndex: p, pageCount: _, setItemsPerPage: $ } = Ra({ page: i, itemsPerPage: u, itemsLength: w }), { paginatedItems: E } = function(z) {
    const { items: j, startIndex: U, stopIndex: ne, itemsPerPage: ee } = z;
    return { paginatedItems: g(() => ee.value <= 0 ? j.value : j.value.slice(U.value, ne.value)) };
  }({ items: I, startIndex: P, stopIndex: p, itemsPerPage: u }), C = g(() => k(E.value)), { isSelected: V, select: O, selectAll: T, toggleSelect: N, someSelected: L, allSelected: W } = Ha(e, { allItems: f, currentPage: C }), { isExpanded: R, toggleExpand: K } = Aa(e);
  La({ page: i, itemsPerPage: u, sortBy: r, groupBy: o, search: m }), Xe({ VDataTableRows: { hideNoData: G(e, "hideNoData"), noDataText: G(e, "noDataText"), loading: G(e, "loading"), loadingText: G(e, "loadingText") } });
  const D = g(() => ({ page: i.value, itemsPerPage: u.value, sortBy: r.value, pageCount: _.value, toggleSort: x, setItemsPerPage: $, someSelected: L.value, allSelected: W.value, isSelected: V, select: O, selectAll: T, toggleSelect: N, isExpanded: R, toggleExpand: K, isGroupOpen: S, toggleGroup: A, items: C.value, groupedItems: E.value, columns: c.value, headers: d.value }));
  return le(() => {
    const [z] = rl.filterProps(e), [j] = sl.filterProps(e), [U] = il.filterProps(e), [ne] = ul.filterProps(e);
    return v(ul, J({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, ne), { top: () => {
      var ee;
      return (ee = n.top) == null ? void 0 : ee.call(n, D.value);
    }, default: () => {
      var ee, Q, ce, xe;
      return n.default ? n.default(D.value) : v(ae, null, [(ee = n.colgroup) == null ? void 0 : ee.call(n, D.value), v("thead", null, [v(sl, j, n)]), (Q = n.thead) == null ? void 0 : Q.call(n, D.value), v("tbody", null, [n.body ? n.body(D.value) : v(il, J(U, { items: E.value }), n)]), (ce = n.tbody) == null ? void 0 : ce.call(n, D.value), (xe = n.tfoot) == null ? void 0 : xe.call(n, D.value)]);
    }, bottom: () => n.bottom ? n.bottom(D.value) : v(ae, null, [v(rl, z, { prepend: n["footer.prepend"] })]) });
  }), {};
} }), ei = M({ itemsLength: { type: [Number, String], required: !0 }, ...Ma(), ...Go(), ...cn() }, "VDataTableServer"), ti = Y()({ name: "VDataTableServer", props: ei(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0, "click:row": (e, l) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Va(e), { sortBy: r, multiSort: a, mustSort: s } = Ua(e), { page: i, itemsPerPage: u } = ja(e), c = g(() => parseInt(e.itemsLength, 10)), { columns: d, headers: f } = No(e, { groupBy: o, showSelect: G(e, "showSelect"), showExpand: G(e, "showExpand") }), { items: m } = Wo(e, d), { toggleSort: h } = qa({ sortBy: r, multiSort: a, mustSort: s, page: i }), { opened: x, isGroupOpen: y, toggleGroup: B, extractRows: k } = Ea({ groupBy: o, sortBy: r }), { pageCount: S, setItemsPerPage: A } = Ra({ page: i, itemsPerPage: u, itemsLength: c }), { flatItems: F } = Ta(m, o, x), { isSelected: I, select: w, selectAll: P, toggleSelect: p, someSelected: _, allSelected: $ } = Ha(e, { allItems: m, currentPage: m }), { isExpanded: E, toggleExpand: C } = Aa(e), V = g(() => k(m.value));
  La({ page: i, itemsPerPage: u, sortBy: r, groupBy: o, search: G(e, "search") }), ye("v-data-table", { toggleSort: h, sortBy: r }), Xe({ VDataTableRows: { hideNoData: G(e, "hideNoData"), noDataText: G(e, "noDataText"), loading: G(e, "loading"), loadingText: G(e, "loadingText") } });
  const O = g(() => ({ page: i.value, itemsPerPage: u.value, sortBy: r.value, pageCount: S.value, toggleSort: h, setItemsPerPage: A, someSelected: _.value, allSelected: $.value, isSelected: I, select: w, selectAll: P, toggleSelect: p, isExpanded: E, toggleExpand: C, isGroupOpen: y, toggleGroup: B, items: V.value, groupedItems: F.value, columns: d.value, headers: f.value }));
  le(() => {
    const [T] = rl.filterProps(e), [N] = sl.filterProps(e), [L] = il.filterProps(e), [W] = ul.filterProps(e);
    return v(ul, J({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, W), { top: () => {
      var R;
      return (R = n.top) == null ? void 0 : R.call(n, O.value);
    }, default: () => {
      var R, K, D, z;
      return n.default ? n.default(O.value) : v(ae, null, [(R = n.colgroup) == null ? void 0 : R.call(n, O.value), v("thead", { class: "v-data-table__thead", role: "rowgroup" }, [v(sl, J(N, { sticky: e.fixedHeader }), n)]), (K = n.thead) == null ? void 0 : K.call(n, O.value), v("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [n.body ? n.body(O.value) : v(il, J(L, { items: F.value }), n)]), (D = n.tbody) == null ? void 0 : D.call(n, O.value), (z = n.tfoot) == null ? void 0 : z.call(n, O.value)]);
    }, bottom: () => n.bottom ? n.bottom(O.value) : v(rl, T, { prepend: n["footer.prepend"] }) });
  });
} }), Ho = pl.reduce((e, l) => (e[l] = { type: [Boolean, String, Number], default: !1 }, e), {}), Ko = pl.reduce((e, l) => (e["offset" + At(l)] = { type: [String, Number], default: null }, e), {}), Uo = pl.reduce((e, l) => (e["order" + At(l)] = { type: [String, Number], default: null }, e), {}), qn = { col: Object.keys(Ho), offset: Object.keys(Ko), order: Object.keys(Uo) };
function li(e, l, t) {
  let n = e;
  if (t != null && t !== !1)
    return l && (n += `-${l.replace(e, "")}`), e === "col" && (n = "v-" + n), (e !== "col" || t !== "" && t !== !0) && (n += `-${t}`), n.toLowerCase();
}
const ni = ["auto", "start", "end", "center", "baseline", "stretch"], ai = M({ cols: { type: [Boolean, String, Number], default: !1 }, ...Ho, offset: { type: [String, Number], default: null }, ...Ko, order: { type: [String, Number], default: null }, ...Uo, alignSelf: { type: String, default: null, validator: (e) => ni.includes(e) }, ...se(), ...we() }, "VCol"), ut = Y()({ name: "VCol", props: ai(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => {
    const o = [];
    let r;
    for (r in qn)
      qn[r].forEach((s) => {
        const i = e[s], u = li(r, s, i);
        u && o.push(u);
      });
    const a = o.some((s) => s.startsWith("v-col-"));
    return o.push({ "v-col": !a || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return ft(e.tag, { class: [n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), pn = ["start", "end", "center"], qo = ["space-between", "space-around", "space-evenly"];
function vn(e, l) {
  return pl.reduce((t, n) => (t[e + At(n)] = l(), t), {});
}
const oi = [...pn, "baseline", "stretch"], Yo = (e) => oi.includes(e), Xo = vn("align", () => ({ type: String, default: null, validator: Yo })), ri = [...pn, ...qo], Jo = (e) => ri.includes(e), Zo = vn("justify", () => ({ type: String, default: null, validator: Jo })), si = [...pn, ...qo, "stretch"], Qo = (e) => si.includes(e), er = vn("alignContent", () => ({ type: String, default: null, validator: Qo })), Yn = { align: Object.keys(Xo), justify: Object.keys(Zo), alignContent: Object.keys(er) }, ii = { align: "align", justify: "justify", alignContent: "align-content" };
function ui(e, l, t) {
  let n = ii[e];
  if (t != null)
    return l && (n += `-${l.replace(e, "")}`), n += `-${t}`, n.toLowerCase();
}
const ci = M({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Yo }, ...Xo, justify: { type: String, default: null, validator: Jo }, ...Zo, alignContent: { type: String, default: null, validator: Qo }, ...er, ...se(), ...we() }, "VRow"), tr = Y()({ name: "VRow", props: ci(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => {
    const o = [];
    let r;
    for (r in Yn)
      Yn[r].forEach((a) => {
        const s = e[a], i = ui(r, a, s);
        i && o.push(i);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return ft(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), di = Ye({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (l, t) => de(l.$slots, "bottom") }), te = "v-drilldown-table";
function Xn(e, l, t = "") {
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
function pi(e, l, t = "") {
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
      return o != null && s && typeof s == "string" ? o[s] !== void 0 ? o[s] : (s = s.replace(/\[(\w+)\]/g, ".$1"), s = s.replace(/^\./, ""), Xn(o, s.split("."), a)) : a;
    }(e, l, t);
  if (Array.isArray(l))
    return Xn(e, l, t);
  if (typeof l != "function")
    return t;
  const n = l(e, t);
  return n === void 0 ? t : n;
}
const Jn = (e) => {
  const { id: l, sortBy: t } = e;
  if (t) {
    const n = t.find((o) => o.key === l);
    if (n)
      return n.order;
  }
}, wt = (e) => {
  const { str: l, unit: t = "px" } = e;
  if (l != null && l !== "")
    return +l ? `${Number(l)}${t}` : String(l);
};
function lr(e) {
  const l = e.title, t = [l, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : l || "";
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
const nr = (e) => {
  const { align: l } = e;
  return { "d-flex align-center": !0, [`justify-${l}`]: l, "justify-start": !l };
}, ar = (e) => {
  const { level: l } = e;
  return { "d-flex": !0, [`${te}--header-select-all-checkbox`]: !0, [`${te}--header-select-all-checkbox-${l}`]: !0 };
}, vi = (e) => {
  const { colors: l, level: t, prop: n = "default", theme: o, type: r } = e, a = { ...l[n] }, s = l.percentageDirection;
  if (a === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let i = ((u, c, d) => {
    let f = 100, m = u.percentageChange ?? 0;
    return isNaN(m) && (f = 100), m *= c, d !== "desc" && d !== "descending" || (f = 100 - m), d !== "asc" && d !== "ascending" || (f = 0 + m), f < 0 && (f = 0), f > 100 && (f = 100), isNaN(f) && (f = 100), f;
  })(l, t - 1, s);
  return r || Object.entries(a).forEach(([u, c]) => {
    let d = o.global.current.value.colors[c] ?? c;
    if (d || (d = "transparent"), d === "transparent" || d === "none" || d === "inherit" || d === "currentColor" || d === "initial" || d === "unset")
      return void (a[u] = d);
    if (u === "text" && t === 0 && s === "asc" && (i = 100), d.includes("--v-theme"))
      return void (a[u] = `rgb(var(${d}))`);
    const f = `/ ${i}%`, m = Zn(d);
    if (m.includes("/"))
      return a[u] = `hsl(${m})`;
    a[u] = `hsl(${Zn(d)} ${f})`;
  }), a;
};
function Zn(e) {
  let l = function(c) {
    const d = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let f = c;
    return Object.entries(d).forEach(([m, h]) => {
      c.toLowerCase() != m.toLowerCase() || (f = h);
    }), f;
  }(e), t = 0, n = 0, o = 0, r = 0, a = 0, s = 0;
  if (l.substring(0, 1) === "#")
    l = function(c) {
      let d = c.replace("#", "");
      d.length === 3 && (d = d.split("").map((x) => x + x).join(""));
      const f = parseInt(d.substring(0, 2), 16), m = parseInt(d.substring(2, 4), 16), h = parseInt(d.substring(4, 6), 16);
      return [f, m, h];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/\d+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/\d+/g)].map(Number), t = l[0], n = l[1], o = l[2], `${t} ${n}% ${o}%`;
  [r, a, s] = l, r /= 255, a /= 255, s /= 255;
  const i = Math.max(r, a, s), u = Math.min(r, a, s);
  if (i === null || !u === null || isNaN(i) || isNaN(u)) {
    const c = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${c})" in it's place.`), c;
  }
  if (t = (i + u) / 2, n = (i + u) / 2, o = (i + u) / 2, i == u)
    t = n = 0;
  else {
    const c = i - u;
    switch (n = o > 0.5 ? c / (2 - i - u) : c / (i + u), i) {
      case r:
        t = (a - s) / c + (a < s ? 6 : 0);
        break;
      case a:
        t = (s - r) / c + 2;
        break;
      case s:
        t = (r - a) / c + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), n = Math.round(100 * n), o = Math.round(100 * o), `${t} ${n}% ${o}%`;
}
const hl = (e) => {
  const { colors: l, level: t, prop: n = "default", themeColors: o, type: r = null } = e;
  if (typeof l != "object" || l === null)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should no be called.');
  const a = vi({ colors: l, level: t, prop: n, theme: o, type: r });
  return r ? a[r] : a;
}, fi = ["colspan"], mi = Ye({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, skeltonType: {}, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const l = e, t = dl(), n = g(() => {
    if (typeof l.colors == "object" && l.colors !== null)
      return hl({ colors: l.colors, level: l.level, prop: "loader", themeColors: t });
  }), o = g(() => ((S) => {
    const { isLinearOnly: A, loaderHeight: F } = S;
    let I = { height: 0, minHeight: 0 };
    return b(A) && (I = { height: b(F), minHeight: b(F) }), I;
  })({ isLinearOnly: c, loaderHeight: u })), r = g(() => ((S) => {
    const { isLinearOnly: A, loaderHeight: F } = S;
    return b(A) ? { height: b(F), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: c, loaderHeight: u })), a = g(() => ((S) => {
    const { isLinearOnly: A } = S;
    return { [`${te}--loader-tr`]: !0, [`${te}--loader-tr-not-linear`]: !b(A), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: c })), s = g(() => ({ [`${te}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), i = g(() => {
    var S;
    return ((S = n.value) == null ? void 0 : S.linear) || "";
  }), u = g(() => function(S) {
    return wt({ str: S }) || "2px";
  }(l.height)), c = g(() => {
    let S = !1;
    return l.loaderType !== null && l.loaderType !== !1 && (S = function(A) {
      let F = !1;
      return A === "linear" && (F = !0), Array.isArray(A) && (F = A.length === 1 && A[0] === "linear"), F;
    }(l.loaderType)), S;
  }), d = g(() => {
    var S;
    return (S = n.value) == null ? void 0 : S.bg;
  }), f = g(() => {
    var S;
    return (S = n.value) == null ? void 0 : S.circular;
  }), m = g(() => l.skeltonType || "heading@1"), h = g(() => l.loading), x = g(() => {
    var S;
    return { color: (S = n.value) == null ? void 0 : S.text };
  }), y = g(() => l.loadingText || "Loading..."), B = (S) => {
    const A = l.loaderType;
    return Array.isArray(A) ? A.indexOf(S) : 1;
  }, k = (S) => {
    const A = l.loaderType;
    return S === l.loaderType || !!Array.isArray(A) && A.includes(S);
  };
  return (S, A) => {
    const F = ua("v-skeleton-loader");
    return q(), ie("tr", { class: re(b(a)), style: $e(b(o)) }, [Te("td", { class: "px-0 ma-0", colspan: S.colspan, style: $e(b(r)) }, [S.loading ? (q(), me(tr, { key: 0, class: re(b(s)), "no-gutters": "" }, { default: oe(() => [k("linear") ? (q(), me(ut, { key: 0, class: "pa-0 ma-0", order: B("linear") }, { default: oe(() => [v(oo, { color: b(i), height: b(u), indeterminate: "" }, null, 8, ["color", "height"])]), _: 1 }, 8, ["order"])) : ge("", !0), k("circular") ? (q(), me(ut, { key: 1, class: "pa-0 my-2", order: B("circular") }, { default: oe(() => [v(lo, { "bg-color": b(d), color: b(f), indeterminate: "", size: S.size }, null, 8, ["bg-color", "color", "size"])]), _: 1 }, 8, ["order"])) : ge("", !0), k("skelton") ? (q(), me(ut, { key: 2, class: "pa-0 ma-0", order: B("skelton") }, { default: oe(() => [v(F, { loading: b(h), type: b(m) }, null, 8, ["loading", "type"])]), _: 1 }, 8, ["order"])) : ge("", !0), k("text") ? (q(), me(ut, { key: 3, class: "my-2", order: B("text"), style: $e(b(x)) }, { default: oe(() => [qt(vr(b(y)), 1)]), _: 1 }, 8, ["order", "style"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0)], 12, fi)], 6);
  };
} }), fn = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, gi = fn(mi, [["__scopeId", "data-v-3653edf1"]]), yi = ["colspan"], hi = ["colspan"], bi = ["colspan", "innerHTML"], Si = ["colspan", "onClick"], wi = ["innerHTML"], xi = Ye({ __name: "HeadersSlot", props: { columnWidths: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, colors: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = H(), r = ve(Symbol.for("vuetify:icons")), a = H(!1), s = H(t.items), i = H(t.matchColumnWidths), u = H(t.columnWidths || []), c = H(t.sortAscIcon), d = g(() => t.tableModelValue), f = dl(), m = g(() => function() {
    const w = t.slotProps.columns;
    if (t.level <= 1 || !i.value)
      return w;
    if (u.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(w).forEach(([P]) => {
      Object.keys(w).length !== parseInt(P) + 1 && w[P].width === void 0 && (w[P].width = u.value[parseInt(P)]);
    }), w;
  }());
  Z(() => t.items, (w) => {
    s.value = w, o.value = (w == null ? void 0 : w.filter((P) => P.selectable)) ?? [], o.value = w == null ? void 0 : w.filter((P) => P.selectable !== !1);
  });
  const h = g(() => ((w) => {
    const { level: P } = w;
    return { [`${te}--header-row`]: !0, [`${te}--header-row-${P}`]: !0 };
  })({ level: t.level })), x = (w, P = "") => ((p) => {
    const { colors: _, column: $, level: E, slotName: C = "" } = p;
    return { [`${te}--header-row-th`]: !0, [`${te}--header-row-th-${C}`]: C !== "", [`${te}--header-row-th-${C}-${E}`]: C, [`${te}--header-row-th-${E}`]: !0, [`${te}--header-row-th-sortable`]: $.sortable, [`${te}--header-row-th-sortable-default-color`]: $.sortable && _ === !1, [`${$.cellClass}`]: $.cellClass };
  })({ colors: t.colors, column: w, level: t.level, slotName: P }), y = (w, P = !1) => ((p) => {
    const { colors: _, column: $, dataTableExpand: E = !1, level: C, theme: V } = p, O = { minWidth: $.width ? wt({ str: $.width }) : "auto", width: $.width ? wt({ str: $.width }) : "auto" };
    if (E && !$.width && (O.width = $.width ? wt({ str: $.width }) : "56px", O.minWidth = $.width ? wt({ str: $.width }) : "56px"), _ === !1 || _ === null)
      return O;
    const T = hl({ colors: _, level: C, prop: "header", themeColors: V });
    return O.backgroundColor = T.bg, O.color = T.text, O;
  })({ colors: t.colors, column: w, dataTableExpand: P, level: t.level, theme: f }), B = g(() => {
    var w;
    return !t.slotProps.allSelected && ((w = d == null ? void 0 : d.value) == null ? void 0 : w.length) !== 0;
  });
  function k() {
    a.value = !a.value, t.slotProps.selectAll(a.value), l("click:selectAll", a.value);
  }
  Z(() => t.slotProps.allSelected, (w) => {
    a.value = w;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const S = g(() => ar({ level: t.level })), A = (w) => ((P) => {
    const { iconOptions: p, key: _, level: $, sortBy: E } = P;
    return { "fa-fw": (p == null ? void 0 : p.defaultSet) === "fa", "mx-1": !0, [`${te}--header-row-th-sortable-sort-icon`]: !0, [`${te}--header-row-th-sortable-sort-icon-${$}`]: !0, [`${te}--header-row-th-sortable-sort-icon-desc`]: Jn({ id: _, sortBy: E }) === "desc", [`${te}--header-row-th-sortable-sort-icon-asc`]: Jn({ id: _, sortBy: E }) === "asc" };
  })({ iconOptions: r, key: w, level: t.level, sortBy: t.sortBy }), F = g(() => (r == null ? void 0 : r.defaultSet) === "fa" ? (c.value = (t == null ? void 0 : t.sortAscIcon) ?? "fas fa-arrow-up", "small") : (c.value = (t == null ? void 0 : t.sortAscIcon) ?? "$sortAsc", "default"));
  function I(w) {
    return lr(w);
  }
  return (w, P) => (q(), ie(ae, null, [Te("tr", { class: re(b(h)) }, [(q(!0), ie(ae, null, De(b(m), (p) => {
    return q(), ie(ae, { key: p }, [b(n)[`column.${p.key}`] ? (q(), ie("th", { key: 0, class: re(x(p, p.key)), colspan: p.colspan || 1, style: $e(y(p, !0)) }, [de(w.$slots, `column.${p.key}`, { column: p }, void 0, !0)], 14, yi)) : p.key === "data-table-select" || p.key === "data-table-select" && w.showSelect ? (q(), ie("th", { key: 1, class: re(x(p, "header-data-table-select")), colspan: p.colspan || 1, style: $e(y(p, !0)) }, [w.selectStrategy !== "single" ? (q(), me(un, { key: 0, class: re(b(S)), density: w.density, focused: !1, indeterminate: b(B), "model-value": b(a), "onUpdate:modelValue": k }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, hi)) : p.key === "data-table-expand" ? (q(), ie("th", { key: 2, class: re(x(p, "data-table-expand")), colspan: p.colspan || 1, style: $e(y(p, !0)), innerHTML: I(p) }, null, 14, bi)) : (q(), ie("th", { key: 3, class: re(x(p)), colspan: p.colspan || 1, style: $e(y(p)), onClick: ($) => function(E) {
      E.sortable && t.slotProps.toggleSort(E);
    }(p) }, [Te("div", { class: re((_ = p.align, nr({ align: _ }))) }, [Te("span", { innerHTML: I(p) }, null, 8, wi), p.sortable && b(n)["header.sortIcon"] ? (q(), ie("span", { key: 0, class: re(A(p.key)) }, [de(w.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : p.sortable ? (q(), me(he, { key: 1, class: re(A(p.key)), icon: b(c), size: b(F) }, null, 8, ["class", "icon", "size"])) : ge("", !0)], 2)], 14, Si))], 64);
    var _;
  }), 128))], 2), w.loaderSettings.loaderType && !b(n).loading ? (q(), me(b(gi), { key: 0, colors: w.colors || null, colspan: w.loaderSettings.colspan, height: w.loaderSettings.height, level: w.level, "loader-type": w.loaderSettings.loaderType, loading: w.loaderSettings.loading || !1, "loading-text": w.loaderSettings.loadingText, size: w.loaderSettings.size, "skelton-type": w.loaderSettings.skeltonType }, null, 8, ["colors", "colspan", "height", "level", "loader-type", "loading", "loading-text", "size", "skelton-type"])) : ge("", !0)], 64));
} }), ki = fn(xi, [["__scopeId", "data-v-5bc45ed7"]]), Ci = ["colspan"], Bi = ["colspan"], Pi = ["colspan"], _i = ["colspan"], Ai = ["innerHTML"], Fi = Ye({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = ve(Symbol.for("vuetify:icons")), r = g(() => t.slotProps.columns), a = g(() => t.slotProps.index), s = g(() => t.slotProps.isExpanded), i = g(() => t.slotProps.item), u = g(() => t.slotProps.level), c = g(() => t.slotProps.toggleExpand), d = g(() => t.slotProps.toggleSelect), f = g(() => t.itemSelectable), m = g(() => ((k) => {
    const { expandOnClick: S, level: A, levels: F } = k;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": S && A < F, [`${te}--body-row`]: !0, [`${te}--body-row-${A}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), h = (k) => ((S) => {
    const { column: A, elm: F, level: I } = S;
    return { [`${te}--${F}-row-td`]: !0, [`${te}--${F}-row-td-${I}`]: !0, [`${A.cellClass}`]: A.cellClass };
  })({ column: k, elm: "body", level: t.level });
  function x(k) {
    const { item: S, level: A, toggleExpand: F } = k;
    if (!(t.level >= t.levels)) {
      if (k.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", k.$event);
      }
      A === t.level && F(S), l("update:expanded", k);
    }
  }
  const y = g(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "x-small" : "default");
  function B(k, S) {
    return function(A, F) {
      if (!F.key)
        return "";
      const I = pi(A, F.key);
      return F.renderItem ? F.renderItem(I, A, F) : I;
    }(k.raw, S);
  }
  return (k, S) => (q(), ie("tr", { class: re(b(m)), onClick: S[2] || (S[2] = (A) => x({ columns: b(r), index: b(a), isExpanded: b(s), item: b(i), level: b(u), toggleExpand: b(c), $event: A })) }, [(q(!0), ie(ae, null, De(b(r), (A) => (q(), ie(ae, { key: A }, [k.$slots[`item.${A.key}`] ? (q(), ie("td", { key: 0, class: re(h(A)), colspan: A.colspan || 1 }, [de(k.$slots, `item.${A.key}`, { columns: b(r), index: b(a), item: b(i) }, void 0, !0)], 10, Ci)) : A.key === "data-table-select" || A.key === "data-table-select" && t.showSelect ? (q(), ie("td", { key: 1, class: re(h(A)), colspan: A.colspan || 1 }, [b(n)["item.data-table-select"] ? de(k.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : ge("", !0), v(un, { class: "d-flex v-simple-checkbox", density: k.density, disabled: b(i).raw.selectable === !1 && b(f) === "selectable", "model-value": k.slotProps.isSelected([b(i)]), onClick: S[0] || (S[0] = Fl((F) => function(I) {
    const { item: w, toggleSelect: P } = I;
    P(w), l("click:row:checkbox", w);
  }({ columns: b(r), index: b(a), item: b(i), level: b(u), toggleSelect: b(d) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, Bi)) : A.key === "data-table-expand" || A.key === "data-table-expand" && k.showExpand ? (q(), ie("td", { key: 2, class: re(h(A)), colspan: A.colspan || 1 }, [b(u) < k.levels ? (q(), ie("div", { key: 0, class: re(["v-drilldown-table--expand-icon", b(s)(b(i)) ? "rotate-180" : ""]), onClick: S[1] || (S[1] = (F) => x({ columns: b(r), index: b(a), isExpanded: b(s), item: b(i), level: b(u), toggleExpand: b(c) })) }, [k.$slots["item.data-table-expand"] ? de(k.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (q(), me(he, { key: 1, icon: "$expand", size: b(y) }, null, 8, ["size"]))], 2)) : ge("", !0)], 10, Pi)) : (q(), ie("td", { key: 3, class: re(h(A)), colspan: A.colspan || 1 }, [Te("span", { innerHTML: B(b(i), A) }, null, 8, Ai)], 10, _i))], 64))), 128))], 2));
} }), $i = fn(Fi, [["__scopeId", "data-v-f25e6c95"]]), Vi = ["colspan"], Ei = ["colspan"], Ii = ["colspan", "innerHTML"], Oi = ["colspan", "innerHTML"], Di = ["colspan"], Ti = ["innerHTML"], Li = Ye({ __name: "TfootSlot", props: { footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = H(), r = dl(), a = H(!1), s = H(t.items), i = g(() => t.tableModelValue), u = g(() => t.footers.length ? t.footers : t.slotProps.columns);
  Z(() => t.items, (k) => {
    s.value = k, o.value = (k == null ? void 0 : k.filter((S) => S.selectable)) ?? [], o.value = k == null ? void 0 : k.filter((S) => S.selectable !== !1);
  });
  const c = g(() => ((k) => {
    const { level: S } = k;
    return { [`${te}--tfoot`]: !0, [`${te}--tfoot-${S}`]: !0 };
  })({ level: t.level })), d = g(() => ((k) => {
    const { level: S } = k;
    return { [`${te}--tfoot-row`]: !0, [`${te}--tfoot-row-${S}`]: !0 };
  })({ level: t.level })), f = (k, S = "") => ((A) => {
    const { column: F, level: I, slotName: w = "" } = A;
    return { [`${te}--tfoot-row-td`]: !0, [`${te}--tfoot-row-td-${w}`]: w !== "", [`${te}--tfoot-row-td-${w}-${I}`]: w, [`${te}--tfoot-row-td-${I}`]: !0, [`${F.cellClass}`]: F.cellClass };
  })({ column: k, level: t.level, slotName: S }), m = g(() => ((k) => {
    const { colors: S, elm: A, level: F, theme: I } = k;
    if (S === !1 || S === null)
      return {};
    const w = hl({ colors: S, level: F, prop: A, themeColors: I });
    return { backgroundColor: w.bg, color: w.text };
  })({ colors: t.colors, elm: "footer", level: t.level, theme: r })), h = g(() => {
    var k;
    return !t.slotProps.allSelected && ((k = i == null ? void 0 : i.value) == null ? void 0 : k.length) !== 0;
  });
  function x() {
    a.value = !a.value, t.slotProps.selectAll(a.value), l("click:selectAll", a.value);
  }
  Z(() => t.slotProps.allSelected, (k) => {
    a.value = k;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const y = g(() => ar({ level: t.level }));
  function B(k) {
    return lr(k);
  }
  return (k, S) => {
    var A;
    return (A = b(u)) != null && A.length ? (q(), ie("tfoot", { key: 0, class: re(b(c)) }, [Te("tr", { class: re(b(d)) }, [(q(!0), ie(ae, null, De(b(u), (F) => {
      return q(), ie(ae, { key: F }, [b(n)[`tfoot.${F.key}`] ? (q(), ie("th", { key: 0, class: re(f(F, F.key)), colspan: F.colspan || 1, style: $e(b(m)) }, [de(k.$slots, `tfoot.${F.key}`, { column: F })], 14, Vi)) : F.key === "data-table-select" ? (q(), ie("th", { key: 1, class: re(f(F, "tfoot-data-table-select")), colspan: F.colspan || 1, style: $e(b(m)) }, [k.selectStrategy !== "single" ? (q(), me(un, { key: 0, class: re(b(y)), density: k.density, focused: !1, indeterminate: b(h), "model-value": b(a), "onUpdate:modelValue": x }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, Ei)) : F.key === "data-table-expand" ? (q(), ie("th", { key: 2, class: re(f(F, "tfoot-data-table-expand")), colspan: F.colspan || 1, style: $e(b(m)), innerHTML: B(F) }, null, 14, Ii)) : F.renderFooterCell ? (q(), ie("th", { key: 3, class: re(f(F)), colspan: F.colspan || 1, style: $e(b(m)), innerHTML: B(F) }, null, 14, Oi)) : (q(), ie("th", { key: 4, class: re(f(F)), colspan: F.colspan || 1, style: $e(b(m)) }, [Te("div", { class: re((I = F.align, nr({ align: I }))) }, [Te("span", { innerHTML: B(F) }, null, 8, Ti)], 2)], 14, Di))], 64);
      var I;
    }), 128))], 2)], 2)) : ge("", !0);
  };
} });
function Qn(e) {
  return typeof e == "function" ? e() : b(e);
}
const ea = () => {
}, Mi = (e) => e();
function Ni(e, l = {}) {
  let t, n, o = ea;
  const r = (a) => {
    clearTimeout(a), o(), o = ea;
  };
  return (a) => {
    const s = Qn(e), i = Qn(l.maxWait);
    return t && r(t), s <= 0 || i !== void 0 && i <= 0 ? (n && (r(n), n = null), Promise.resolve(a())) : new Promise((u, c) => {
      o = l.rejectOnCancel ? c : u, i && !n && (n = setTimeout(() => {
        t && r(t), n = null, u(a());
      }, i)), t = setTimeout(() => {
        n && r(n), n = null, u(a());
      }, s);
    });
  };
}
var ta = Object.getOwnPropertySymbols, ji = Object.prototype.hasOwnProperty, Ri = Object.prototype.propertyIsEnumerable, zi = (e, l) => {
  var t = {};
  for (var n in e)
    ji.call(e, n) && l.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && ta)
    for (var n of ta(e))
      l.indexOf(n) < 0 && Ri.call(e, n) && (t[n] = e[n]);
  return t;
};
function Wi(e, l, t = {}) {
  const n = t, { eventFilter: o = Mi } = n, r = zi(n, ["eventFilter"]);
  return Z(e, (a = o, s = l, function(...i) {
    return new Promise((u, c) => {
      Promise.resolve(a(() => s.apply(this, i), { fn: s, thisArg: this, args: i })).then(u).catch(c);
    });
  }), r);
  var a, s;
}
var Gi = Object.defineProperty, Hi = Object.defineProperties, Ki = Object.getOwnPropertyDescriptors, Gt = Object.getOwnPropertySymbols, la = Object.prototype.hasOwnProperty, na = Object.prototype.propertyIsEnumerable, aa = (e, l, t) => l in e ? Gi(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
function or(e, l, t = {}) {
  const n = t, { debounce: o = 0, maxWait: r } = n, a = ((u, c) => {
    var d = {};
    for (var f in u)
      la.call(u, f) && c.indexOf(f) < 0 && (d[f] = u[f]);
    if (u != null && Gt)
      for (var f of Gt(u))
        c.indexOf(f) < 0 && na.call(u, f) && (d[f] = u[f]);
    return d;
  })(n, ["debounce", "maxWait"]);
  return Wi(e, l, (s = ((u, c) => {
    for (var d in c || (c = {}))
      la.call(c, d) && aa(u, d, c[d]);
    if (Gt)
      for (var d of Gt(c))
        na.call(c, d) && aa(u, d, c[d]);
    return u;
  })({}, a), i = { eventFilter: Ni(o, { maxWait: r }) }, Hi(s, Ki(i))));
  var s, i;
}
const St = /* @__PURE__ */ new Map(), Ui = Ye({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchProps: { default: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "comfortable", variant: "underlined" }) }, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = H(""), r = g(() => t.items), a = g(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: r, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: b(o), selectAll: s, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: i }));
  function s(c) {
    t.slotProps.selectAll(c), l("click:selectAll", c);
  }
  function i() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  or(o, () => {
    l("update:search", o.value);
  }, { debounce: 750, maxWait: 1e3 });
  const u = g(() => {
    const c = t.searchProps.cols;
    return { [`${te}--search-field`]: !0, [`v-col-${c.xs}`]: c.xs, [`v-col-sm-${c.sm}`]: c.sm, [`v-col-md-${c.md}`]: c.md, [`v-col-lg-${c.lg}`]: c.lg, [`v-col-xl-${c.xl}`]: c.xl, [`v-col-xxl-${c.xxl}`]: c.xxl };
  });
  return (c, d) => b(n).top ? de(c.$slots, "top", Pe(J({ key: 0 }, b(a)))) : c.showSearch || b(n)["top.left"] || b(n)["top.right"] ? (q(), me(ut, { key: 1, lg: "12" }, { default: oe(() => [v(tr, null, { default: oe(() => [b(n)["top.left"] ? de(c.$slots, "top.left", Pe(J({ key: 0 }, b(a)))) : c.showSearch ? (q(), me(ut, { key: 1, class: re(["d-flex align-center justify-end", b(u)]) }, { default: oe(() => [c.showSearch ? (q(), me(zl, { key: 0, modelValue: b(o), "onUpdate:modelValue": d[0] || (d[0] = (f) => mt(o) ? o.value = f : null), class: "mt-0 pt-0", density: c.searchProps.density, "hide-details": "", label: "Search", "single-line": "", variant: c.searchProps.variant }, null, 8, ["modelValue", "density", "variant"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0), b(n)["top.right"] ? de(c.$slots, "top.right", Pe(J({ key: 2 }, b(a)))) : ge("", !0)]), _: 3 })]), _: 3 })) : ge("", !0);
} }), qi = Symbol("data"), Yi = ["colspan"], oa = Ye({ __name: "VDrilldownTable", props: mr({ colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footers: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderHeight: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchDebounce: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, skeltonType: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { colors: () => ({ body: { base: "--v-theme-surface", bg: "--v-theme-surface", text: "--v-theme-on-surface" }, default: { base: "primary", bg: "primary", border: "primary", text: "on-primary" }, footer: { bg: "--v-theme-surface", text: "--v-theme-on-surface" }, header: { bg: "primary", text: "on-primary" }, loader: { circular: "primary", color: "primary", linear: "surface-variant", text: "surface-variant" }, percentageChange: 25, percentageDirection: "desc" }), columnWidths: () => [], density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footers: () => [], height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderHeight: "2px", loaderSize: "default", loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, multiSort: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchDebounce: 750, searchMaxWait: 1e3, searchProps: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "comfortable", variant: "underlined" }), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, skeltonType: "heading@1", sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = gr(), r = ue(null);
  Ft(() => {
    t.level === 1 && a.level !== 1 || a.server || y();
  }), Hl(() => {
    r.value = Object.assign({}, t.server ? ti : Qs);
  });
  let a = _t(Object.assign({}, t));
  const s = { ...t, ...a }, i = H(o["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), u = H(""), c = dl(), d = g(() => a.sortBy), f = g(() => !!a.loading || a.hideNoData);
  (function(p, _, $) {
    const E = Z(p, (...C) => (Ee(() => E()), _(...C)), $);
  })(t, () => {
    t.level === 1 && a.level !== 1 || y(), a.itemsPerPage = t.itemsPerPage;
  }, { immediate: !1 }), Z(() => t.items, () => {
    t.loading || y();
  }, { deep: !0 }), Z(() => t.loading, () => {
    if (t.loading)
      return a.loading = t.loading, !1;
    y();
  });
  const m = (p) => {
    const _ = a.loaderType;
    return !(p && (_ === "skelton" || Array.isArray(_) && _.length === 1 && _[0] === "skelton" || !a.showDrilldownWhenLoading));
  }, h = g(() => ((p) => {
    const { elevation: _, isDrilldown: $, isHover: E, isServerSide: C, level: V, separator: O } = p;
    return { [`${te}--child`]: $, [`${te}--hover`]: E, [`${te}--level-${V}`]: !0, [`${te}--server`]: C, [`${te}--separator-${O}`]: O, [`${te}`]: !0, [`elevation-${_}`]: parseInt(_) > 0 };
  })({ elevation: a.elevation, isDrilldown: t.isDrilldown, isHover: a.hover, isServerSide: !1, level: a.level, separator: a.separator })), x = g(() => ((p) => {
    const { colors: _, level: $, theme: E } = p;
    let C = {};
    typeof _ == "object" && _ !== null && (C = hl({ colors: _, level: $, prop: "default", themeColors: E }));
    const V = { borderBottom: "none" };
    return C.border && (V.borderBottom = `1px solid ${C.border}`), V;
  })({ colors: a.colors, level: a.level, theme: c }));
  function y() {
    var p, _;
    t.drilldown ? a = (($) => {
      const { drilldown: E, rawItem: C, level: V, levels: O, loadedDrilldown: T } = $;
      let N = T;
      N = kt(T, E);
      const L = (T.items || [{}]).find((W) => {
        const R = W[T.drilldownKey];
        let K = {};
        return C && (K = C[T.drilldownKey]), R === K;
      });
      return N = kt(T, L[T.itemChildrenKey]), O === V && (N.showExpand = !1), N;
    })({ drilldown: t.drilldown, level: t.level, levels: t.levels, loadedDrilldown: a, matchColumnWidths: t.matchColumnWidths, rawItem: (p = t.item) == null ? void 0 : p.raw }) : (a = kt(a, t), t.matchColumnWidths && ((_ = a == null ? void 0 : a.columnWidths) == null ? void 0 : _.length) === 0 && (a.columnWidths = (($) => {
      const { tableId: E } = $, C = [], V = b(E), O = document.querySelectorAll(`[data-vdt-id="${V}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(O).length > 0)
        for (let T = 0; T < O.length; T += 1) {
          const N = O[T];
          C.push(N.offsetWidth);
        }
      return C;
    })({ tableId: i })));
  }
  function B(p) {
    let _ = { ...s, ...a, ...p };
    t.server && (_ = { ...a, ...s, ...p }), (($) => {
      const { data: E, drilldownData: C, emit: V } = $;
      E.isExpanded(E.item) && V("update:drilldown", C), V("update:expanded", E.item);
    })({ data: p, drilldownData: _, emit: l });
  }
  function k(p) {
    return { items: p.items, itemsPerPage: p.itemsPerPage, page: p.page, search: u.value, server: p.server, sortBy: p.sortBy };
  }
  const S = function(p) {
    const _ = fr();
    function $(V) {
      var O;
      const T = St.get(p) || /* @__PURE__ */ new Set();
      T.add(V), St.set(p, T);
      const N = () => E(V);
      return (O = _ == null ? void 0 : _.cleanups) == null || O.push(N), N;
    }
    function E(V) {
      const O = St.get(p);
      O && (O.delete(V), O.size || C());
    }
    function C() {
      St.delete(p);
    }
    return { on: $, once: function(V) {
      return $(function O(...T) {
        E(O), V(...T);
      });
    }, off: E, emit: function(V, O) {
      var T;
      (T = St.get(p)) == null || T.forEach((N) => N(V, O));
    }, reset: C };
  }(qi), A = S.on(function(p) {
    t.level === 1 && p.drilldown.server && l("update:options", { ...p });
  });
  function F(p) {
    a.itemsPerPage = p;
    const _ = k(a), $ = { drilldown: { ...t, ..._, itemsPerPage: p }, itemsPerPage: p, name: "update:itemsPerPage" };
    S.emit($), l("update:itemsPerPage", p);
  }
  function I(p) {
    a.page = p;
    const _ = k(a), $ = { drilldown: { ...t, ..._, page: p }, name: "update:page", page: p };
    S.emit($), l("update:page", p);
  }
  function w(p) {
    a.sortBy = p;
    const _ = k(a), $ = { drilldown: { ...t, ..._, sortBy: p }, name: "update:sortBy", sortBy: p };
    S.emit($), l("update:sortBy", p);
  }
  function P() {
  }
  return yr(() => {
    A();
  }), or(u, () => {
    a.search = u.value;
    const p = k(a), _ = { drilldown: { ...t, ...p, search: u.value }, search: u.value };
    S.emit(_), l("update:search", _);
  }, { debounce: a.searchDebounce, maxWait: a.searchMaxWait }), (p, _) => {
    const $ = ua("VDrilldownTable", !0);
    return b(r) ? (q(), me(ia(b(r)), J({ key: 0 }, p.$attrs, { modelValue: b(a).modelValue, "onUpdate:modelValue": [_[5] || (_[5] = (E) => b(a).modelValue = E), P], class: b(h), "data-vdt-id": b(i), density: b(a).density, "expand-on-click": b(a).expandOnClick, expanded: b(a).expanded, headers: b(a).headers, height: b(a).height, "hide-no-data": b(f), hover: b(a).hover, "item-selectable": b(a).itemSelectable, "item-value": b(a).itemValue, items: b(a).items, "items-length": b(a).itemsLength, "items-per-page": b(a).itemsPerPage, "items-per-page-options": b(a).itemsPerPageOptions, loading: (!b(a).loaderType || b(n).loading) && b(a).loading, "multi-sort": b(a).multiSort, "must-sort": b(a).mustSort, "no-data-text": b(a).noDataText, page: b(a).page, "return-object": b(a).returnObject, search: b(u), "select-strategy": b(a).selectStrategy, "show-expand": b(a).showExpand, "sort-by": b(d), style: b(x), "onUpdate:itemsPerPage": F, "onUpdate:page": I, "onUpdate:sortBy": w }), Qe({ top: oe((E) => [(q(), me(b(Ui), { key: p.level, items: b(a).items, level: b(a).level, loading: b(a).loading, "search-props": b(a).searchProps, "show-search": b(a).showSearch ?? !1, "slot-props": E, "onUpdate:search": _[0] || (_[0] = (C) => u.value = C) }, Qe({ _: 2 }, [De(b(n), (C, V) => ({ name: V, fn: oe((O) => [de(p.$slots, V, Pe(je({ ...O })))]) }))]), 1032, ["items", "level", "loading", "search-props", "show-search", "slot-props"]))]), headers: oe((E) => [(q(), me(b(ki), { key: p.level, colors: b(a).colors, "column-widths": b(a).columnWidths, density: b(a).density, items: b(a).items, level: p.level, "loader-settings": { colspan: E.columns.length, height: b(a).loaderHeight, loaderType: b(a).loaderType, loading: b(a).loading, loadingText: p.loadingText, size: b(a).loaderSize, skeltonType: b(a).skeltonType }, "match-column-widths": b(a).matchColumnWidths, "select-strategy": b(a).selectStrategy, "show-select": b(a).showSelect, "slot-props": { ...E }, "sort-asc-icon": b(a).sortAscIcon, "sort-by": b(a).sortBy, "table-model-value": b(a).modelValue }, Qe({ _: 2 }, [De(b(n), (C, V) => ({ name: V, fn: oe((O) => [de(p.$slots, V, Pe(je({ ...O })))]) }))]), 1032, ["colors", "column-widths", "density", "items", "level", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: oe((E) => [(q(), me(b($i), { key: p.level, density: b(a).density, "expand-on-click": b(a).expandOnClick, "item-selectable": b(a).itemSelectable, items: b(a).items, level: b(a).level, levels: b(a).levels, "show-expand": b(a).showExpand, "show-select": b(a).showSelect, "slot-props": { level: p.level, ...E }, "onClick:row": _[1] || (_[1] = (C) => {
      l("click:row", C);
    }), "onClick:row:checkbox": _[2] || (_[2] = (C) => {
      l("click:row:checkbox", C);
    }), "onUpdate:expanded": _[3] || (_[3] = (C) => B(C)) }, Qe({ _: 2 }, [De(b(n), (C, V) => ({ name: V, fn: oe((O) => [de(p.$slots, V, Pe(je({ ...O })))]) }))]), 1032, ["density", "expand-on-click", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": oe(({ columns: E, item: C }) => {
      var V, O, T, N, L, W, R, K, D, z, j;
      return [Te("tr", { class: re(m((V = C.raw[p.itemChildrenKey]) == null ? void 0 : V.loading) ? "" : "d-none") }, [Te("td", { class: "px-0 ma-0", colspan: E.length, style: { "vertical-align": "top" } }, [(q(), me($, { key: C.raw, colors: p.colors, "column-widths": b(a).columnWidths, density: b(a).density, drilldown: b(a), headers: (O = C.raw[p.itemChildrenKey]) == null ? void 0 : O.headers, "is-drilldown": !0, item: C, "items-length": (T = C.raw[p.itemChildrenKey]) == null ? void 0 : T.itemsLength, "items-per-page": (N = C.raw[p.itemChildrenKey]) == null ? void 0 : N.itemsPerPage, level: p.level + 1, levels: b(a).levels, loaderHeight: (L = C.raw[p.itemChildrenKey]) == null ? void 0 : L.loaderHeight, loaderSize: (W = C.raw[p.itemChildrenKey]) == null ? void 0 : W.loaderSize, loaderType: (R = C.raw[p.itemChildrenKey]) == null ? void 0 : R.loaderType, loading: (K = C.raw[p.itemChildrenKey]) == null ? void 0 : K.loading, loadingText: p.loadingText, "match-column-widths": b(a).matchColumnWidths, "multi-sort": (D = C.raw[p.itemChildrenKey]) == null ? void 0 : D.multiSort, "no-data-text": b(a).noDataText, server: (z = C.raw[p.itemChildrenKey]) == null ? void 0 : z.server, skeltonType: (j = C.raw[p.itemChildrenKey]) == null ? void 0 : j.skeltonType, "sort-by": b(a).sortBy, "table-type": b(r), "onUpdate:drilldown": _[4] || (_[4] = (U) => B(U)), "onUpdate:modelValue": P }, Qe({ default: oe(() => [(q(!0), ie(ae, null, De(Object.keys(b(n)), (U) => de(p.$slots, U)), 256))]), _: 2 }, [De(b(n), (U, ne) => ({ name: ne, fn: oe((ee) => [de(p.$slots, ne, Pe(je({ ...ee })))]) }))]), 1032, ["colors", "column-widths", "density", "drilldown", "headers", "item", "items-length", "items-per-page", "level", "levels", "loaderHeight", "loaderSize", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "skeltonType", "sort-by", "table-type"]))], 8, Yi)], 2)];
    }), "footer.prepend": oe(() => [b(n)["footer.prepend"] ? de(p.$slots, "footer.prepend", { key: 0 }) : ge("", !0)]), _: 2 }, [b(n).loader ? { name: "loader", fn: oe(() => [de(p.$slots, "loader")]), key: "0" } : void 0, b(n).loading ? { name: "loading", fn: oe(() => [de(p.$slots, "loading")]), key: "1" } : void 0, b(n).thead ? { name: "thead", fn: oe((E) => [de(p.$slots, "thead", Pe(je({ ...E })))]), key: "2" } : void 0, b(n).body ? { name: "body", fn: oe((E) => [de(p.$slots, "body", Pe(je({ ...E })))]), key: "3" } : void 0, b(n).tbody ? { name: "tbody", fn: oe((E) => [de(p.$slots, "tbody", Pe(je({ ...E })))]), key: "4" } : void 0, b(n)["no-data"] ? { name: "no-data", fn: oe(() => [de(p.$slots, "no-data")]), key: "5" } : void 0, b(n).tfoot || p.showFooterRow ? { name: "tfoot", fn: oe((E) => [b(n).tfoot ? de(p.$slots, "tfoot", Pe(J({ key: 0 }, { ...E }))) : (q(), me(b(Li), { key: p.level, colors: b(a).colors || null, density: b(a).density, footers: b(a).footers || [], items: b(a).items, level: b(a).level, "select-strategy": b(a).selectStrategy, "show-select": b(a).showSelect, "slot-props": { ...E }, "table-model-value": b(a).modelValue }, Qe({ _: 2 }, [De(b(n), (C, V) => ({ name: V, fn: oe((O) => [de(p.$slots, V, Pe(je({ ...O })))]) }))]), 1032, ["colors", "density", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "6" } : void 0, b(n).bottom ? { name: "bottom", fn: oe((E) => [(q(), me(b(di), { key: p.level, "slot-props": E }, Qe({ _: 2 }, [De(b(n), (C, V) => ({ name: V, fn: oe((O) => [de(p.$slots, V, Pe(je({ ...O })))]) }))]), 1032, ["slot-props"]))]), key: "7" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : ge("", !0);
  };
} });
oa.install = (e) => {
  e.component("VDrilldownTable", oa);
};
export {
  oa as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset);overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-data-table{width:100%}.v-data-table__table{width:100%;border-collapse:separate;border-spacing:0}.v-data-table__tr--focus{border:1px dotted black}.v-data-table__tr--clickable{cursor:pointer}.v-data-table .v-table__wrapper>table>thead>tr>td,.v-data-table .v-table__wrapper>table>thead>tr th,.v-data-table .v-table__wrapper>table tbody>tr>td,.v-data-table .v-table__wrapper>table tbody>tr th{background:rgb(var(--v-theme-surface))}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end{text-align:end}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end .v-data-table-header__content{flex-direction:row-reverse}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center{text-align:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center .v-data-table-header__content{justify-content:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--no-padding{padding:0 8px}.v-data-table .v-table__wrapper>table>thead>tr>th,.v-data-table .v-table__wrapper>table tbody>tr>th{align-items:center}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--sortable:hover{cursor:pointer;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon{opacity:0}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon{opacity:.5}.v-data-table-column--fixed{position:sticky;z-index:2;left:0}.v-data-table-column--last-fixed{border-right:1px solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-data-table-group-header-row td{background:lightgrey}.v-data-table-group-header-row td>span{padding-left:5px}.v-data-table--loading .v-data-table__td{opacity:.3}.v-data-table-group-header-row__column{padding-left:calc(var(--v-data-table-group-header-row-depth) * 16px)!important}.v-data-table-header__content{display:flex;align-items:center}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;font-size:.875rem;padding:4px;border-radius:50%;background:rgba(var(--v-border-color),var(--v-border-opacity));min-width:20px;min-height:20px;width:20px;height:20px}.v-data-table-progress>th{border:none!important;height:auto!important;padding:0!important}.v-data-table-rows-loading,.v-data-table-rows-no-data{text-align:center}.v-data-table-footer{display:flex;align-items:center;flex-wrap:wrap;padding:0 8px;justify-content:flex-end}.v-data-table-footer__items-per-page{padding-inline-end:24px;display:flex;align-items:center;justify-content:space-between}.v-data-table-footer__items-per-page>span{padding-inline-end:24px}.v-data-table-footer__info{display:flex;padding-inline-end:24px}.v-data-table-footer__pagination{display:flex;align-items:center}.v-data-table-footer__page{padding:0 8px}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn{margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-field--single-line .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select--chips .v-select__selection,.v-select--selection-slot .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select--chips .v-select__selection:first-child,.v-select--selection-slot .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{grid-row-start:1;grid-column-start:1;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:grid;grid-template-rows:minmax(100%,1fr);grid-template-columns:1fr;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-grid;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-responsive__sizer,.v-responsive__content{position:relative;grid-row-start:1;grid-column-start:1}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 54px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 52px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 50px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 46px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 44px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 42px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 38px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 36px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 34px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 46px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 44px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 42px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 38px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 36px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 34px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 30px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 28px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 26px;--v-field-padding-bottom: 0px}.v-field--variant-outlined{--v-input-chips-margin-bottom: 2px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:calc(var(--v-field-input-min-height) + var(--v-input-chips-margin-bottom) + 2px);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%;--v-field-input-min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom))}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-table{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-table .v-table-divider{border-right:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>thead>tr>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity));color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tfoot>tr>td,.v-table .v-table__wrapper>table>tfoot>tr>th{border-top:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{background:rgb(var(--v-theme-surface));box-shadow:inset 0 -1px 0 rgba(var(--v-border-color),var(--v-border-opacity));z-index:1}.v-table.v-table--fixed-footer>tfoot>tr>th,.v-table.v-table--fixed-footer>tfoot>tr>td{background:rgb(var(--v-theme-surface));box-shadow:inset 0 1px 0 rgba(var(--v-border-color),var(--v-border-opacity))}.v-table{--v-table-header-height: 56px;border-radius:inherit;line-height:1.5;max-width:100%}.v-table>.v-table__wrapper>table{width:100%;border-spacing:0}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>th{padding:0 16px;transition:height cubic-bezier(.4,0,.2,1)}.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>th{font-weight:500;user-select:none;text-align:start}.v-table--density-default>.v-table__wrapper>table>tbody>tr>th,.v-table--density-default>.v-table__wrapper>table>thead>tr>th,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) + 0px)}.v-table--density-default>.v-table__wrapper>table>tbody>tr>td,.v-table--density-default>.v-table__wrapper>table>thead>tr>td,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) + 0px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 8px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 8px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>th,.v-table--density-compact>.v-table__wrapper>table>thead>tr>th,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 16px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>td,.v-table--density-compact>.v-table__wrapper>table>thead>tr>td,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 16px)}.v-table__wrapper{border-radius:inherit;overflow:auto}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-table--fixed-height>.v-table__wrapper{overflow-y:auto}.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border-bottom:0px!important;position:sticky;top:0}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th{border-top:0px!important;position:sticky;bottom:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1.v-locale--is-ltr,.v-locale--is-ltr .offset-1{margin-left:8.3333333333%}.offset-1.v-locale--is-rtl,.v-locale--is-rtl .offset-1{margin-right:8.3333333333%}.offset-2.v-locale--is-ltr,.v-locale--is-ltr .offset-2{margin-left:16.6666666667%}.offset-2.v-locale--is-rtl,.v-locale--is-rtl .offset-2{margin-right:16.6666666667%}.offset-3.v-locale--is-ltr,.v-locale--is-ltr .offset-3{margin-left:25%}.offset-3.v-locale--is-rtl,.v-locale--is-rtl .offset-3{margin-right:25%}.offset-4.v-locale--is-ltr,.v-locale--is-ltr .offset-4{margin-left:33.3333333333%}.offset-4.v-locale--is-rtl,.v-locale--is-rtl .offset-4{margin-right:33.3333333333%}.offset-5.v-locale--is-ltr,.v-locale--is-ltr .offset-5{margin-left:41.6666666667%}.offset-5.v-locale--is-rtl,.v-locale--is-rtl .offset-5{margin-right:41.6666666667%}.offset-6.v-locale--is-ltr,.v-locale--is-ltr .offset-6{margin-left:50%}.offset-6.v-locale--is-rtl,.v-locale--is-rtl .offset-6{margin-right:50%}.offset-7.v-locale--is-ltr,.v-locale--is-ltr .offset-7{margin-left:58.3333333333%}.offset-7.v-locale--is-rtl,.v-locale--is-rtl .offset-7{margin-right:58.3333333333%}.offset-8.v-locale--is-ltr,.v-locale--is-ltr .offset-8{margin-left:66.6666666667%}.offset-8.v-locale--is-rtl,.v-locale--is-rtl .offset-8{margin-right:66.6666666667%}.offset-9.v-locale--is-ltr,.v-locale--is-ltr .offset-9{margin-left:75%}.offset-9.v-locale--is-rtl,.v-locale--is-rtl .offset-9{margin-right:75%}.offset-10.v-locale--is-ltr,.v-locale--is-ltr .offset-10{margin-left:83.3333333333%}.offset-10.v-locale--is-rtl,.v-locale--is-rtl .offset-10{margin-right:83.3333333333%}.offset-11.v-locale--is-ltr,.v-locale--is-ltr .offset-11{margin-left:91.6666666667%}.offset-11.v-locale--is-rtl,.v-locale--is-rtl .offset-11{margin-right:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-0{margin-left:0}.offset-sm-0.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-0{margin-right:0}.offset-sm-1.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-1{margin-left:8.3333333333%}.offset-sm-1.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-1{margin-right:8.3333333333%}.offset-sm-2.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-2{margin-left:16.6666666667%}.offset-sm-2.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-2{margin-right:16.6666666667%}.offset-sm-3.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-3{margin-left:25%}.offset-sm-3.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-3{margin-right:25%}.offset-sm-4.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-4{margin-left:33.3333333333%}.offset-sm-4.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-4{margin-right:33.3333333333%}.offset-sm-5.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-5{margin-left:41.6666666667%}.offset-sm-5.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-5{margin-right:41.6666666667%}.offset-sm-6.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-6{margin-left:50%}.offset-sm-6.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-6{margin-right:50%}.offset-sm-7.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-7{margin-left:58.3333333333%}.offset-sm-7.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-7{margin-right:58.3333333333%}.offset-sm-8.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-8{margin-left:66.6666666667%}.offset-sm-8.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-8{margin-right:66.6666666667%}.offset-sm-9.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-9{margin-left:75%}.offset-sm-9.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-9{margin-right:75%}.offset-sm-10.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-10{margin-left:83.3333333333%}.offset-sm-10.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-10{margin-right:83.3333333333%}.offset-sm-11.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-11{margin-left:91.6666666667%}.offset-sm-11.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0.v-locale--is-ltr,.v-locale--is-ltr .offset-md-0{margin-left:0}.offset-md-0.v-locale--is-rtl,.v-locale--is-rtl .offset-md-0{margin-right:0}.offset-md-1.v-locale--is-ltr,.v-locale--is-ltr .offset-md-1{margin-left:8.3333333333%}.offset-md-1.v-locale--is-rtl,.v-locale--is-rtl .offset-md-1{margin-right:8.3333333333%}.offset-md-2.v-locale--is-ltr,.v-locale--is-ltr .offset-md-2{margin-left:16.6666666667%}.offset-md-2.v-locale--is-rtl,.v-locale--is-rtl .offset-md-2{margin-right:16.6666666667%}.offset-md-3.v-locale--is-ltr,.v-locale--is-ltr .offset-md-3{margin-left:25%}.offset-md-3.v-locale--is-rtl,.v-locale--is-rtl .offset-md-3{margin-right:25%}.offset-md-4.v-locale--is-ltr,.v-locale--is-ltr .offset-md-4{margin-left:33.3333333333%}.offset-md-4.v-locale--is-rtl,.v-locale--is-rtl .offset-md-4{margin-right:33.3333333333%}.offset-md-5.v-locale--is-ltr,.v-locale--is-ltr .offset-md-5{margin-left:41.6666666667%}.offset-md-5.v-locale--is-rtl,.v-locale--is-rtl .offset-md-5{margin-right:41.6666666667%}.offset-md-6.v-locale--is-ltr,.v-locale--is-ltr .offset-md-6{margin-left:50%}.offset-md-6.v-locale--is-rtl,.v-locale--is-rtl .offset-md-6{margin-right:50%}.offset-md-7.v-locale--is-ltr,.v-locale--is-ltr .offset-md-7{margin-left:58.3333333333%}.offset-md-7.v-locale--is-rtl,.v-locale--is-rtl .offset-md-7{margin-right:58.3333333333%}.offset-md-8.v-locale--is-ltr,.v-locale--is-ltr .offset-md-8{margin-left:66.6666666667%}.offset-md-8.v-locale--is-rtl,.v-locale--is-rtl .offset-md-8{margin-right:66.6666666667%}.offset-md-9.v-locale--is-ltr,.v-locale--is-ltr .offset-md-9{margin-left:75%}.offset-md-9.v-locale--is-rtl,.v-locale--is-rtl .offset-md-9{margin-right:75%}.offset-md-10.v-locale--is-ltr,.v-locale--is-ltr .offset-md-10{margin-left:83.3333333333%}.offset-md-10.v-locale--is-rtl,.v-locale--is-rtl .offset-md-10{margin-right:83.3333333333%}.offset-md-11.v-locale--is-ltr,.v-locale--is-ltr .offset-md-11{margin-left:91.6666666667%}.offset-md-11.v-locale--is-rtl,.v-locale--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-0{margin-left:0}.offset-lg-0.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-0{margin-right:0}.offset-lg-1.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-1{margin-left:8.3333333333%}.offset-lg-1.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-1{margin-right:8.3333333333%}.offset-lg-2.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-2{margin-left:16.6666666667%}.offset-lg-2.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-2{margin-right:16.6666666667%}.offset-lg-3.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-3{margin-left:25%}.offset-lg-3.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-3{margin-right:25%}.offset-lg-4.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-4{margin-left:33.3333333333%}.offset-lg-4.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-4{margin-right:33.3333333333%}.offset-lg-5.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-5{margin-left:41.6666666667%}.offset-lg-5.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-5{margin-right:41.6666666667%}.offset-lg-6.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-6{margin-left:50%}.offset-lg-6.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-6{margin-right:50%}.offset-lg-7.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-7{margin-left:58.3333333333%}.offset-lg-7.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-7{margin-right:58.3333333333%}.offset-lg-8.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-8{margin-left:66.6666666667%}.offset-lg-8.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-8{margin-right:66.6666666667%}.offset-lg-9.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-9{margin-left:75%}.offset-lg-9.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-9{margin-right:75%}.offset-lg-10.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-10{margin-left:83.3333333333%}.offset-lg-10.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-10{margin-right:83.3333333333%}.offset-lg-11.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-11{margin-left:91.6666666667%}.offset-lg-11.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-0{margin-left:0}.offset-xl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-0{margin-right:0}.offset-xl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-1{margin-left:8.3333333333%}.offset-xl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-1{margin-right:8.3333333333%}.offset-xl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-2{margin-left:16.6666666667%}.offset-xl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-2{margin-right:16.6666666667%}.offset-xl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-3{margin-left:25%}.offset-xl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-3{margin-right:25%}.offset-xl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-4{margin-left:33.3333333333%}.offset-xl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-4{margin-right:33.3333333333%}.offset-xl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-5{margin-left:41.6666666667%}.offset-xl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-5{margin-right:41.6666666667%}.offset-xl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-6{margin-left:50%}.offset-xl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-6{margin-right:50%}.offset-xl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-7{margin-left:58.3333333333%}.offset-xl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-7{margin-right:58.3333333333%}.offset-xl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-8{margin-left:66.6666666667%}.offset-xl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-8{margin-right:66.6666666667%}.offset-xl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-9{margin-left:75%}.offset-xl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-9{margin-right:75%}.offset-xl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-10{margin-left:83.3333333333%}.offset-xl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-10{margin-right:83.3333333333%}.offset-xl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-11{margin-left:91.6666666667%}.offset-xl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-11{margin-right:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-0{margin-left:0}.offset-xxl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-0{margin-right:0}.offset-xxl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-1{margin-right:8.3333333333%}.offset-xxl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-2{margin-right:16.6666666667%}.offset-xxl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-3{margin-left:25%}.offset-xxl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-3{margin-right:25%}.offset-xxl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-4{margin-right:33.3333333333%}.offset-xxl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-5{margin-right:41.6666666667%}.offset-xxl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-6{margin-left:50%}.offset-xxl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-6{margin-right:50%}.offset-xxl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-7{margin-right:58.3333333333%}.offset-xxl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-8{margin-right:66.6666666667%}.offset-xxl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-9{margin-left:75%}.offset-xxl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-9{margin-right:75%}.offset-xxl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-10{margin-right:83.3333333333%}.offset-xxl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-11{margin-left:91.6666666667%}.offset-xxl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-11{margin-right:91.6666666667%}}.v-drilldown-table--loader-tr[data-v-3653edf1]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-3653edf1]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-3653edf1]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-3653edf1]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-5bc45ed7]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-5bc45ed7]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-5bc45ed7]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-5bc45ed7],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-5bc45ed7]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-5bc45ed7]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-5bc45ed7]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-5bc45ed7]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-5bc45ed7],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-5bc45ed7],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-5bc45ed7]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-5bc45ed7]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-f25e6c95]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgba(var(--v-border-color), var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-top:0!important;border-bottom:var(--vdt-border)}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-top:0!important;border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
