import { Fragment as ae, reactive as Pt, computed as g, watchEffect as Re, toRefs as oa, capitalize as _t, warn as ul, watch as Z, onScopeDispose as _e, effectScope as Hl, ref as W, unref as S, provide as ye, inject as ve, shallowRef as ue, defineComponent as Ye, camelize as ra, h as ft, getCurrentInstance as sr, TransitionGroup as ir, Transition as lt, createVNode as d, mergeProps as J, nextTick as Ee, isRef as mt, onMounted as Ft, toRaw as Ue, resolveDynamicComponent as sa, toRef as G, readonly as Gl, Teleport as ur, withDirectives as Ae, vShow as gt, resolveDirective as qe, onBeforeUnmount as nt, Text as cr, onBeforeMount as Wl, cloneVNode as dr, createTextVNode as Ut, withModifiers as Fl, renderSlot as de, resolveComponent as ia, openBlock as U, createElementBlock as ie, normalizeClass as re, normalizeStyle as $e, createElementVNode as Te, createBlock as me, withCtx as oe, createCommentVNode as ge, toDisplayString as pr, useSlots as At, renderList as De, getCurrentScope as vr, normalizeProps as Pe, mergeDefaults as fr, onUnmounted as mr, createSlots as Qe, guardReactiveProps as je } from "vue";
import { useTheme as cl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-3
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
function ua(e, l, t) {
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
function qt(e, l, t) {
  return e != null && l && typeof l == "string" ? e[l] !== void 0 ? e[l] : ua(e, (l = (l = l.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), t) : t;
}
function Se(e, l, t) {
  if (l == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof l != "function")
      return t;
    const o = l(e, t);
    return o === void 0 ? t : o;
  }
  if (typeof l == "string")
    return qt(e, l, t);
  if (Array.isArray(l))
    return ua(e, l, t);
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
function Al(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function $l(e) {
  return e && "$el" in e ? e.$el : e;
}
const gn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function $t(e, l, t) {
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    l.some((r) => r instanceof RegExp ? r.test(a) : r === a) && !(t != null && t.some((r) => r === a)) ? n[a] = e[a] : o[a] = e[a];
  return [n, o];
}
function Kl(e, l) {
  const t = { ...e };
  return l.forEach((n) => delete t[n]), t;
}
function Ul(e) {
  return $t(e, ["class", "style", "id", /^data-/]);
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
    const a = e[o], r = l[o];
    Al(a) && Al(r) ? n[o] = rt(a, r, t) : Array.isArray(a) && Array.isArray(r) && t ? n[o] = t(a, r) : n[o] = r;
  }
  return n;
}
function ca(e) {
  return e.map((l) => l.type === ae ? ca(l.children) : l).flat();
}
function et() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (et.cache.has(e))
    return et.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return et.cache.set(e, l), l;
}
function Gt(e, l) {
  if (!l || typeof l != "object")
    return [];
  if (Array.isArray(l))
    return l.map((t) => Gt(e, t)).flat(1);
  if (Array.isArray(l.children))
    return l.children.map((t) => Gt(e, t)).flat(1);
  if (l.component) {
    if (Object.getOwnPropertySymbols(l.component.provides).includes(e))
      return [l.component];
    if (l.component.subTree)
      return Gt(e, l.component.subTree).flat(1);
  }
  return [];
}
function ql(e) {
  const l = Pt({}), t = g(e);
  return Re(() => {
    for (const n in t.value)
      l[n] = t.value[n];
  }, { flush: "sync" }), oa(l);
}
function Yt(e, l) {
  return e.includes(l);
}
et.cache = /* @__PURE__ */ new Map();
const gr = /^on[^a-z]/, Vl = (e) => gr.test(e);
function yn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Le = () => [Function, Array];
function hn(e, l) {
  return !!(e[l = "on" + _t(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function Xt(e, l) {
  var o, a, r;
  const t = function(s) {
    const i = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((u) => `${u}:not([tabindex="-1"]):not([disabled])`).join(", ");
    return [...s.querySelectorAll(i)];
  }(e), n = t.indexOf(document.activeElement);
  if (l)
    if (l === "first")
      (o = t[0]) == null || o.focus();
    else if (l === "last")
      (a = t.at(-1)) == null || a.focus();
    else {
      let s, i = n;
      const u = l === "next" ? 1 : -1;
      do
        i += u, s = t[i];
      while ((!s || s.offsetParent == null) && i < t.length && i >= 0);
      s ? s.focus() : Xt(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((r = t[0]) == null || r.focus());
}
const da = ["top", "bottom"], yr = ["start", "end", "left", "right"];
function El(e, l) {
  let [t, n] = e.split(" ");
  return n || (n = Yt(da, t) ? "start" : Yt(yr, t) ? "top" : "center"), { side: bn(t, l), align: bn(n, l) };
}
function bn(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function bl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Sl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Sn(e) {
  return { side: e.align, align: e.side };
}
function xn(e) {
  return Yt(da, e.side) ? "y" : "x";
}
class ct {
  constructor(l) {
    let { x: t, y: n, width: o, height: a } = l;
    this.x = t, this.y = n, this.width = o, this.height = a;
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
function wn(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function Yl(e) {
  const l = e.getBoundingClientRect(), t = getComputedStyle(e), n = t.transform;
  if (n) {
    let o, a, r, s, i;
    if (n.startsWith("matrix3d("))
      o = n.slice(9, -1).split(/, /), a = +o[0], r = +o[5], s = +o[12], i = +o[13];
    else {
      if (!n.startsWith("matrix("))
        return new ct(l);
      o = n.slice(7, -1).split(/, /), a = +o[0], r = +o[3], s = +o[4], i = +o[5];
    }
    const u = t.transformOrigin, c = l.x - s - (1 - a) * parseFloat(u), v = l.y - i - (1 - r) * parseFloat(u.slice(u.indexOf(" ") + 1)), p = a ? l.width / a : e.offsetWidth + 1, f = r ? l.height / r : e.offsetHeight + 1;
    return new ct({ x: c, y: v, width: p, height: f });
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
const Rt = /* @__PURE__ */ new WeakMap();
function pa(e) {
  ul(`Vuetify: ${e}`);
}
function kn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function L(e, l) {
  return (t) => Object.keys(e).reduce((n, o) => {
    const a = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return n[o] = t && o in t ? { ...a, default: t[o] } : a, l && !n[o].source && (n[o].source = l), n;
  }, {});
}
const se = L({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
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
const Xl = Symbol.for("vuetify:defaults");
function Jl() {
  const e = ve(Xl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Xe(e, l) {
  const t = Jl(), n = W(e), o = g(() => {
    if (S(l == null ? void 0 : l.disabled))
      return t.value;
    const a = S(l == null ? void 0 : l.scoped), r = S(l == null ? void 0 : l.reset), s = S(l == null ? void 0 : l.root);
    let i = rt(n.value, { prev: t.value });
    if (a)
      return i;
    if (r || s) {
      const u = Number(r || 1 / 0);
      for (let c = 0; c <= u && i && "prev" in i; c++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = rt(rt(i, { prev: i }), i[s])), i;
    }
    return i.prev ? rt(i.prev, i) : i;
  });
  return ye(Xl, o), o;
}
function hr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Jl();
  const n = xe("useDefaults");
  if (l = l ?? n.type.name ?? n.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const o = g(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? l];
  }), a = new Proxy(e, { get(s, i) {
    var c, v, p, f;
    const u = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(c = o.value) == null ? void 0 : c[i], u].filter((y) => y != null) : typeof i != "string" || function(y, k) {
      var h, P;
      return ((h = y.props) == null ? void 0 : h[k]) !== void 0 || ((P = y.props) == null ? void 0 : P[et(k)]) !== void 0;
    }(n.vnode, i) ? u : ((v = o.value) == null ? void 0 : v[i]) ?? ((f = (p = t.value) == null ? void 0 : p.global) == null ? void 0 : f[i]) ?? u;
  } }), r = ue();
  return Re(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((i) => {
        let [u] = i;
        return u.startsWith(u[0].toUpperCase());
      });
      s.length && (r.value = Object.fromEntries(s));
    }
  }), { props: a, provideSubDefaults: function() {
    tt(r, () => {
      var s;
      Xe(rt(((s = function(i) {
        const { provides: u } = xe("injectSelf");
        if (u && i in u)
          return u[i];
      }(Xl)) == null ? void 0 : s.value) ?? {}, r.value));
    });
  } };
}
function dt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return pa("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = L(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(t) {
      return $t(t, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, n) {
      const o = Jl();
      if (!o.value)
        return e._setup(t, n);
      const { props: a, provideSubDefaults: r } = hr(t, t._as ?? e.name, o), s = e._setup(a, n);
      return r(), s;
    };
  }
  return e;
}
function q() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? dt : Ye)(l);
}
function va(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return q()({ name: t ?? _t(ra(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...se() }, setup(n, o) {
    let { slots: a } = o;
    return () => {
      var r;
      return ft(n.tag, { class: [e, n.class], style: n.style }, (r = a.default) == null ? void 0 : r.call(a));
    };
  } });
}
function fa(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const Jt = "cubic-bezier(0.4, 0, 0.2, 1)";
function xe(e, l) {
  const t = sr();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return t;
}
function He() {
  const e = xe(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return et((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ma = 0, Wt = /* @__PURE__ */ new WeakMap();
function Me() {
  const e = xe("getUid");
  if (Wt.has(e))
    return Wt.get(e);
  {
    const l = ma++;
    return Wt.set(e, l), l;
  }
}
function Zt(e, l) {
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
  ma = 0, Wt = /* @__PURE__ */ new WeakMap();
};
const Ie = typeof window < "u", Ql = Ie && "IntersectionObserver" in window, Il = Ie && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function te(e) {
  xe("useRender").render = e;
}
const br = L({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Be(e, l, t) {
  return q()({ name: e, props: br({ mode: t, origin: l }), setup(n, o) {
    let { slots: a } = o;
    const r = { onBeforeEnter(s) {
      n.origin && (s.style.transformOrigin = n.origin);
    }, onLeave(s) {
      if (n.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: u, offsetWidth: c, offsetHeight: v } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${i}px`, s.style.left = `${u}px`, s.style.width = `${c}px`, s.style.height = `${v}px`;
      }
      n.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (n.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: i, top: u, left: c, width: v, height: p } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = i || "", s.style.top = u || "", s.style.left = c || "", s.style.width = v || "", s.style.height = p || "";
      }
    } };
    return () => {
      const s = n.group ? ir : lt;
      return ft(s, { name: n.disabled ? "" : e, css: !n.disabled, ...n.group ? void 0 : { mode: n.mode }, ...n.disabled ? {} : r }, a.default);
    };
  } });
}
function ga(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return q()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(n, o) {
    let { slots: a } = o;
    return () => ft(lt, { name: n.disabled ? "" : e, css: !n.disabled, ...n.disabled ? {} : l }, a.default);
  } });
}
function ya() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = ra(`offset-${l}`);
  return { onBeforeEnter(a) {
    a._parent = a.parentNode, a._initialStyle = { transition: a.style.transition, overflow: a.style.overflow, [l]: a.style[l] };
  }, onEnter(a) {
    const r = a._initialStyle;
    a.style.setProperty("transition", "none", "important"), a.style.overflow = "hidden";
    const s = `${a[t]}px`;
    a.style[l] = "0", a.offsetHeight, a.style.transition = r.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
      a.style[l] = s;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(a) {
    a._initialStyle = { transition: "", overflow: a.style.overflow, [l]: a.style[l] }, a.style.overflow = "hidden", a.style[l] = `${a[t]}px`, a.offsetHeight, requestAnimationFrame(() => a.style[l] = "0");
  }, onAfterLeave: n, onLeaveCancelled: n };
  function n(a) {
    e && a._parent && a._parent.classList.remove(e), o(a);
  }
  function o(a) {
    const r = a._initialStyle[l];
    a.style.overflow = a._initialStyle.overflow, r != null && (a.style[l] = r), delete a._initialStyle;
  }
}
const Sr = L({ target: Object }, "v-dialog-transition"), ha = q()({ name: "VDialogTransition", props: Sr(), setup(e, l) {
  let { slots: t } = l;
  const n = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, a) {
    var p;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), o.style.visibility = "";
    const { x: r, y: s, sx: i, sy: u, speed: c } = Bn(e.target, o), v = st(o, [{ transform: `translate(${r}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }, {}], { duration: 225 * c, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (p = Cn(o)) == null || p.forEach((f) => {
      st(f, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * c, easing: Jt });
    }), v.finished.then(() => a());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, a) {
    var v;
    await new Promise((p) => requestAnimationFrame(p));
    const { x: r, y: s, sx: i, sy: u, speed: c } = Bn(e.target, o);
    st(o, [{}, { transform: `translate(${r}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }], { duration: 125 * c, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => a()), (v = Cn(o)) == null || v.forEach((p) => {
      st(p, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * c, easing: Jt });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(lt, J({ name: "dialog-transition" }, n, { css: !1 }), t) : d(lt, { name: "dialog-transition" }, t);
} });
function Cn(e) {
  var t;
  const l = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return l && [...l];
}
function Bn(e, l) {
  const t = e.getBoundingClientRect(), n = Yl(l), [o, a] = getComputedStyle(l).transformOrigin.split(" ").map((P) => parseFloat(P)), [r, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  r === "left" || s === "left" ? i -= t.width / 2 : r !== "right" && s !== "right" || (i += t.width / 2);
  let u = t.top + t.height / 2;
  r === "top" || s === "top" ? u -= t.height / 2 : r !== "bottom" && s !== "bottom" || (u += t.height / 2);
  const c = t.width / n.width, v = t.height / n.height, p = Math.max(1, c, v), f = c / p || 0, y = v / p || 0, k = n.width * n.height / (window.innerWidth * window.innerHeight), h = k > 0.12 ? Math.min(1.5, 10 * (k - 0.12) + 1) : 1;
  return { x: i - (o + n.left), y: u - (a + n.top), sx: f, sy: y, speed: h };
}
Be("fab-transition", "center center", "out-in"), Be("dialog-bottom-transition"), Be("dialog-top-transition"), Be("fade-transition"), Be("scale-transition"), Be("scroll-x-transition"), Be("scroll-x-reverse-transition"), Be("scroll-y-transition"), Be("scroll-y-reverse-transition"), Be("slide-x-transition"), Be("slide-x-reverse-transition");
const ba = Be("slide-y-transition");
Be("slide-y-reverse-transition");
const xr = ga("expand-transition", ya()), Sa = ga("expand-x-transition", ya("", !0)), wr = L({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ve = q(!1)({ name: "VDefaultsProvider", props: wr(), setup(e, l) {
  let { slots: t } = l;
  const { defaults: n, disabled: o, reset: a, root: r, scoped: s } = oa(e);
  return Xe(n, { reset: a, root: r, scoped: s, disabled: o }), () => {
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
  (function(f) {
    for (; f; ) {
      if (window.getComputedStyle(f).position === "fixed")
        return !0;
      f = f.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: n, preferredOrigin: o } = ql(() => {
    const f = El(l.location, e.isRtl.value), y = l.origin === "overlap" ? f : l.origin === "auto" ? bl(f) : El(l.origin, e.isRtl.value);
    return f.side === y.side && f.align === Sl(y).align ? { preferredAnchor: Sn(f), preferredOrigin: Sn(y) } : { preferredAnchor: f, preferredOrigin: y };
  }), [a, r, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((f) => g(() => {
    const y = parseFloat(l[f]);
    return isNaN(y) ? 1 / 0 : y;
  })), u = g(() => {
    if (Array.isArray(l.offset))
      return l.offset;
    if (typeof l.offset == "string") {
      const f = l.offset.split(" ").map(parseFloat);
      return f.length < 2 && f.push(0), f;
    }
    return typeof l.offset == "number" ? [l.offset, 0] : [0, 0];
  });
  let c = !1;
  const v = new ResizeObserver(() => {
    c && p();
  });
  function p() {
    if (c = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => c = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const f = e.activatorEl.value.getBoundingClientRect(), y = function(b, $) {
      const A = Yl(b);
      return $ ? A.x += parseFloat(b.style.right || 0) : A.x -= parseFloat(b.style.left || 0), A.y -= parseFloat(b.style.top || 0), A;
    }(e.contentEl.value, e.isRtl.value), k = Zt(e.contentEl.value);
    k.length || (k.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const h = k.reduce((b, $) => {
      const A = $.getBoundingClientRect(), E = new ct({ x: $ === document.documentElement ? 0 : A.x, y: $ === document.documentElement ? 0 : A.y, width: $.clientWidth, height: $.clientHeight });
      return b ? new ct({ x: Math.max(b.left, E.left), y: Math.max(b.top, E.top), width: Math.min(b.right, E.right) - Math.max(b.left, E.left), height: Math.min(b.bottom, E.bottom) - Math.max(b.top, E.top) }) : E;
    }, void 0);
    h.x += 12, h.y += 12, h.width -= 24, h.height -= 24;
    let P = { anchor: n.value, origin: o.value };
    function B(b) {
      const $ = new ct(y), A = Pn(b.anchor, f), E = Pn(b.origin, $);
      let { x: _, y: I } = (M = E, { x: (T = A).x - M.x, y: T.y - M.y });
      var T, M;
      switch (b.anchor.side) {
        case "top":
          I -= u.value[0];
          break;
        case "bottom":
          I += u.value[0];
          break;
        case "left":
          _ -= u.value[0];
          break;
        case "right":
          _ += u.value[0];
      }
      switch (b.anchor.align) {
        case "top":
          I -= u.value[1];
          break;
        case "bottom":
          I += u.value[1];
          break;
        case "left":
          _ -= u.value[1];
          break;
        case "right":
          _ += u.value[1];
      }
      return $.x += _, $.y += I, $.width = Math.min($.width, s.value), $.height = Math.min($.height, i.value), { overflows: wn($, h), x: _, y: I };
    }
    let x = 0, F = 0;
    const w = { x: 0, y: 0 }, V = { x: !1, y: !1 };
    let C = -1;
    for (; ; ) {
      if (C++ > 10) {
        ul("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: b, y: $, overflows: A } = B(P);
      x += b, F += $, y.x += b, y.y += $;
      {
        const E = xn(P.anchor), _ = A.x.before || A.x.after, I = A.y.before || A.y.after;
        let T = !1;
        if (["x", "y"].forEach((M) => {
          if (M === "x" && _ && !V.x || M === "y" && I && !V.y) {
            const z = { anchor: { ...P.anchor }, origin: { ...P.origin } }, D = M === "x" ? E === "y" ? Sl : bl : E === "y" ? bl : Sl;
            z.anchor = D(z.anchor), z.origin = D(z.origin);
            const { overflows: H } = B(z);
            (H[M].before <= A[M].before && H[M].after <= A[M].after || H[M].before + H[M].after < (A[M].before + A[M].after) / 2) && (P = z, T = V[M] = !0);
          }
        }), T)
          continue;
      }
      A.x.before && (x += A.x.before, y.x += A.x.before), A.x.after && (x -= A.x.after, y.x -= A.x.after), A.y.before && (F += A.y.before, y.y += A.y.before), A.y.after && (F -= A.y.after, y.y -= A.y.after);
      {
        const E = wn(y, h);
        w.x = h.width - E.x.before - E.x.after, w.y = h.height - E.y.before - E.y.after, x += E.x.before, y.x += E.x.before, F += E.y.before, y.y += E.y.before;
      }
      break;
    }
    const m = xn(P.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${P.anchor.side} ${P.anchor.align}`, transformOrigin: `${P.origin.side} ${P.origin.align}`, top: X(wl(F)), left: e.isRtl.value ? void 0 : X(wl(x)), right: e.isRtl.value ? X(wl(-x)) : void 0, minWidth: X(m === "y" ? Math.min(a.value, f.width) : a.value), maxWidth: X(_n(xt(w.x, a.value === 1 / 0 ? 0 : a.value, s.value))), maxHeight: X(_n(xt(w.y, r.value === 1 / 0 ? 0 : r.value, i.value))) }), { available: w, contentBox: y };
  }
  return Z([e.activatorEl, e.contentEl], (f, y) => {
    let [k, h] = f, [P, B] = y;
    P && v.unobserve(P), k && v.observe(k), B && v.unobserve(B), h && v.observe(h);
  }, { immediate: !0 }), _e(() => {
    v.disconnect();
  }), Z(() => [n.value, o.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => p()), Ee(() => {
    const f = p();
    if (!f)
      return;
    const { available: y, contentBox: k } = f;
    k.height > y.y && requestAnimationFrame(() => {
      p(), requestAnimationFrame(() => {
        p();
      });
    });
  }), { updateLocation: p };
} }, kr = L({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in xa }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function wl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function _n(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ol = !0;
const Qt = [];
let Fn = -1;
function Dl() {
  cancelAnimationFrame(Fn), Fn = requestAnimationFrame(() => {
    const e = Qt.shift();
    e && e(), Qt.length ? Dl() : Ol = !0;
  });
}
const Kt = { none: null, close: function(e) {
  An(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, n = [.../* @__PURE__ */ new Set([...Zt(e.activatorEl.value, l.contained ? t : void 0), ...Zt(e.contentEl.value, l.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, a = (r = t || document.documentElement, Zl(r) && r);
  var r;
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((i, u) => {
    i.style.setProperty("--v-body-scroll-x", X(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", X(-i.scrollTop)), i.style.setProperty("--v-scrollbar-offset", X(o)), i.classList.add("v-overlay-scroll-blocked");
  }), _e(() => {
    n.forEach((i, u) => {
      const c = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), v = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -c, i.scrollTop = -v;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, t) {
  let n = !1, o = -1, a = -1;
  function r(s) {
    var i;
    i = () => {
      var v, p;
      const u = performance.now();
      (p = (v = e.updateLocation).value) == null || p.call(v, s), n = (performance.now() - u) / (1e3 / 60) > 2;
    }, !Ol || Qt.length ? (Qt.push(i), Dl()) : (Ol = !1, i(), Dl());
  }
  a = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      An(e.activatorEl.value ?? e.contentEl.value, (s) => {
        n ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            r(s);
          });
        })) : r(s);
      });
    });
  }), _e(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(a), cancelAnimationFrame(o);
  });
} }, Cr = L({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Kt } }, "VOverlay-scroll-strategies");
function An(e, l) {
  const t = [document, ...Zt(e)];
  t.forEach((n) => {
    n.addEventListener("scroll", l, { passive: !0 });
  }), _e(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", l);
    });
  });
}
const Tl = Symbol.for("vuetify:v-menu"), Br = L({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Pr = L({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Br() }, "VOverlay-activator");
function _r(e, l) {
  let { isActive: t, isTop: n } = l;
  const o = W();
  let a = !1, r = !1, s = !0;
  const i = g(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), u = g(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: c, runCloseDelay: v } = function(C, m) {
    const b = {}, $ = (A) => () => {
      if (!Ie)
        return Promise.resolve(!0);
      const E = A === "openDelay";
      return b.closeDelay && window.clearTimeout(b.closeDelay), delete b.closeDelay, b.openDelay && window.clearTimeout(b.openDelay), delete b.openDelay, new Promise((_) => {
        const I = parseInt(C[A] ?? 0, 10);
        b[A] = window.setTimeout(() => {
          m == null || m(E), _(E);
        }, I);
      });
    };
    return { runCloseDelay: $("closeDelay"), runOpenDelay: $("openDelay") };
  }(e, (C) => {
    C !== (e.openOnHover && a || i.value && r) || e.openOnHover && t.value && !n.value || (t.value !== C && (s = !0), t.value = C);
  }), p = (C) => {
    C.stopPropagation(), o.value = C.currentTarget || C.target, t.value = !t.value;
  }, f = (C) => {
    var m;
    (m = C.sourceCapabilities) != null && m.firesTouchEvents || (a = !0, o.value = C.currentTarget || C.target, c());
  }, y = (C) => {
    a = !1, v();
  }, k = (C) => {
    Il && !C.target.matches(":focus-visible") || (r = !0, C.stopPropagation(), o.value = C.currentTarget || C.target, c());
  }, h = (C) => {
    r = !1, C.stopPropagation(), v();
  }, P = g(() => {
    const C = {};
    return u.value && (C.onClick = p), e.openOnHover && (C.onMouseenter = f, C.onMouseleave = y), i.value && (C.onFocus = k, C.onBlur = h), C;
  }), B = g(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      a = !0, c();
    }, C.onMouseleave = () => {
      a = !1, v();
    }), i.value && (C.onFocusin = () => {
      r = !0, c();
    }, C.onFocusout = () => {
      r = !1, v();
    }), e.closeOnContentClick) {
      const m = ve(Tl, null);
      C.onClick = () => {
        t.value = !1, m == null || m.closeParents();
      };
    }
    return C;
  }), x = g(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      s && (a = !0, s = !1, c());
    }, C.onMouseleave = () => {
      a = !1, v();
    }), C;
  });
  Z(n, (C) => {
    !C || (!e.openOnHover || a || i.value && r) && (!i.value || r || e.openOnHover && a) || (t.value = !1);
  });
  const F = W();
  Re(() => {
    F.value && Ee(() => {
      o.value = $l(F.value);
    });
  });
  const w = xe("useActivator");
  let V;
  return Z(() => !!e.activator, (C) => {
    C && Ie ? (V = Hl(), V.run(() => {
      (function(m, b, $) {
        let { activatorEl: A, activatorEvents: E } = $;
        function _() {
          let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : T(), z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m.activatorProps;
          M && function(D, H) {
            Object.keys(H).forEach((R) => {
              if (Vl(R)) {
                const K = yn(R), O = Rt.get(D);
                if (H[R] == null)
                  O == null || O.forEach((j) => {
                    const [N, Y] = j;
                    N === K && (D.removeEventListener(K, Y), O.delete(j));
                  });
                else if (!O || ![...O].some((j) => j[0] === K && j[1] === H[R])) {
                  D.addEventListener(K, H[R]);
                  const j = O || /* @__PURE__ */ new Set();
                  j.add([K, H[R]]), Rt.has(D) || Rt.set(D, j);
                }
              } else
                H[R] == null ? D.removeAttribute(R) : D.setAttribute(R, H[R]);
            });
          }(M, J(E.value, z));
        }
        function I() {
          let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : T(), z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m.activatorProps;
          M && function(D, H) {
            Object.keys(H).forEach((R) => {
              if (Vl(R)) {
                const K = yn(R), O = Rt.get(D);
                O == null || O.forEach((j) => {
                  const [N, Y] = j;
                  N === K && (D.removeEventListener(K, Y), O.delete(j));
                });
              } else
                D.removeAttribute(R);
            });
          }(M, J(E.value, z));
        }
        function T() {
          var D, H;
          let M, z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m.activator;
          if (z)
            if (z === "parent") {
              let R = (H = (D = b == null ? void 0 : b.proxy) == null ? void 0 : D.$el) == null ? void 0 : H.parentNode;
              for (; R.hasAttribute("data-no-activator"); )
                R = R.parentNode;
              M = R;
            } else
              M = typeof z == "string" ? document.querySelector(z) : "$el" in z ? z.$el : z;
          return A.value = (M == null ? void 0 : M.nodeType) === Node.ELEMENT_NODE ? M : null, A.value;
        }
        Z(() => m.activator, (M, z) => {
          if (z && M !== z) {
            const D = T(z);
            D && I(D);
          }
          M && Ee(() => _());
        }, { immediate: !0 }), Z(() => m.activatorProps, () => {
          _();
        }), _e(() => {
          I();
        });
      })(e, w, { activatorEl: o, activatorEvents: P });
    })) : V && V.stop();
  }, { flush: "post", immediate: !0 }), _e(() => {
    V == null || V.stop();
  }), { activatorEl: o, activatorRef: F, activatorEvents: P, contentEvents: B, scrimEvents: x };
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
const Vt = L({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Et(e) {
  return { dimensionStyles: g(() => ({ height: X(e.height), maxHeight: X(e.maxHeight), maxWidth: X(e.maxWidth), minHeight: X(e.minHeight), minWidth: X(e.minWidth), width: X(e.width) })) };
}
const dl = ["sm", "md", "lg", "xl", "xxl"], Fr = Symbol.for("vuetify:display");
function Ar() {
  if (!Ie)
    return ue(!1);
  const { ssr: e } = function() {
    const l = ve(Fr);
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
const $r = L({ eager: Boolean }, "lazy");
function fe(e, l, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const a = xe("useProxiedModel"), r = W(e[l] !== void 0 ? e[l] : t), s = et(l), i = g(s !== l ? () => {
    var c, v, p, f;
    return e[l], !(!((c = a.vnode.props) != null && c.hasOwnProperty(l)) && !((v = a.vnode.props) != null && v.hasOwnProperty(s)) || !((p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${l}`)) && !((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var c, v;
    return e[l], !(!((c = a.vnode.props) != null && c.hasOwnProperty(l)) || !((v = a.vnode.props) != null && v.hasOwnProperty(`onUpdate:${l}`)));
  });
  tt(() => !i.value, () => {
    Z(() => e[l], (c) => {
      r.value = c;
    });
  });
  const u = g({ get() {
    const c = e[l];
    return n(i.value ? c : r.value);
  }, set(c) {
    const v = o(c), p = Ue(i.value ? e[l] : r.value);
    p !== v && n(p) !== c && (r.value = v, a == null || a.emit(`update:${l}`, v));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => i.value ? e[l] : r.value }), u;
}
const wa = Symbol.for("vuetify:locale");
function yt() {
  const e = ve(wa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function It() {
  const e = ve(wa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function tn(e, l) {
  const t = sa("RouterLink"), n = g(() => !(!e.href && !e.to)), o = g(() => (n == null ? void 0 : n.value) || hn(l, "click") || hn(e, "click"));
  if (typeof t == "string")
    return { isLink: n, isClickable: o, href: G(e, "href") };
  const a = e.to ? t.useLink(e) : void 0;
  return { isLink: n, isClickable: o, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && g(() => {
    var r, s;
    return e.exact ? (r = a.isExactActive) == null ? void 0 : r.value : (s = a.isActive) == null ? void 0 : s.value;
  }), href: g(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const ln = L({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let kl = !1;
function ka() {
  const e = xe("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const $n = Symbol.for("vuetify:stack"), bt = Pt([]), Vn = Symbol.for("vuetify:theme"), be = L({ theme: String }, "theme");
function Ce(e) {
  xe("provideTheme");
  const l = ve(Vn, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const t = g(() => e.theme ?? (l == null ? void 0 : l.name.value)), n = g(() => l.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...l, name: t, themeClasses: n };
  return ye(Vn, o), o;
}
const Ot = L({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ke = (e, l) => {
  let { slots: t } = l;
  const { transition: n, disabled: o, ...a } = e, { component: r = lt, ...s } = typeof n == "object" ? n : {};
  return ft(r, J(typeof n == "string" ? { name: o ? "" : n } : s, a, { disabled: o }), t);
};
function Vr() {
  return !0;
}
function En(e, l, t) {
  if (!e || Ca(e, t) === !1)
    return !1;
  const n = fa(l);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(l), !o.some((a) => a == null ? void 0 : a.contains(e.target));
}
function Ca(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || Vr)(e);
}
function In(e, l) {
  const t = fa(e);
  l(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && l(t);
}
const Er = { mounted(e, l) {
  const t = (o) => function(a, r, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    r._clickOutside.lastMousedownWasOutside && En(a, r, s) && setTimeout(() => {
      Ca(a, s) && i && i(a);
    }, 0);
  }(o, e, l), n = (o) => {
    e._clickOutside.lastMousedownWasOutside = En(o, e, l);
  };
  In(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", n, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: t, onMousedown: n };
}, unmounted(e, l) {
  e._clickOutside && (In(e, (t) => {
    var a;
    if (!t || !((a = e._clickOutside) != null && a[l.instance.$.uid]))
      return;
    const { onClick: n, onMousedown: o } = e._clickOutside[l.instance.$.uid];
    t.removeEventListener("click", n, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function Ir(e) {
  const { modelValue: l, color: t, ...n } = e;
  return d(lt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", J({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, n), null)] });
}
const Ba = L({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [String, Boolean], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Pr(), ...se(), ...Vt(), ...$r(), ...kr(), ...Cr(), ...be(), ...Ot() }, "VOverlay"), On = q()({ name: "VOverlay", directives: { ClickOutside: Er }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Ba() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var R, K;
  let { slots: t, attrs: n, emit: o } = l;
  const a = fe(e, "modelValue"), r = g({ get: () => a.value, set: (O) => {
    O && e.disabled || (a.value = O);
  } }), { teleportTarget: s } = (i = g(() => e.attach || e.contained), { teleportTarget: g(() => {
    const O = i.value;
    if (O === !0 || !Ie)
      return;
    const j = O === !1 ? document.body : typeof O == "string" ? document.querySelector(O) : O;
    if (j == null)
      return void ul(`Unable to locate target ${O}`);
    let N = j.querySelector(":scope > .v-overlay-container");
    return N || (N = document.createElement("div"), N.className = "v-overlay-container", j.appendChild(N)), N;
  }) });
  var i;
  const { themeClasses: u } = Ce(e), { rtlClasses: c, isRtl: v } = It(), { hasContent: p, onAfterLeave: f } = function(O, j) {
    const N = ue(!1), Y = g(() => N.value || O.eager || j.value);
    return Z(j, () => N.value = !0), { isBooted: N, hasContent: Y, onAfterLeave: function() {
      O.eager || (N.value = !1);
    } };
  }(e, r), y = pt(g(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: k, localTop: h, stackStyles: P } = function(O, j, N) {
    const Y = xe("useStack"), ne = !N, le = ve($n, void 0), Q = Pt({ activeChildren: /* @__PURE__ */ new Set() });
    ye($n, Q);
    const ce = ue(+j.value);
    tt(O, () => {
      var ht;
      const Ne = (ht = bt.at(-1)) == null ? void 0 : ht[1];
      ce.value = Ne ? Ne + 10 : +j.value, ne && bt.push([Y.uid, ce.value]), le == null || le.activeChildren.add(Y.uid), _e(() => {
        if (ne) {
          const or = Ue(bt).findIndex((rr) => rr[0] === Y.uid);
          bt.splice(or, 1);
        }
        le == null || le.activeChildren.delete(Y.uid);
      });
    });
    const ke = ue(!0);
    ne && Re(() => {
      var ht;
      const Ne = ((ht = bt.at(-1)) == null ? void 0 : ht[0]) === Y.uid;
      setTimeout(() => ke.value = Ne);
    });
    const hl = g(() => !Q.activeChildren.size);
    return { globalTop: Gl(ke), localTop: hl, stackStyles: g(() => ({ zIndex: ce.value })) };
  }(r, G(e, "zIndex"), e._disableGlobalStack), { activatorEl: B, activatorRef: x, activatorEvents: F, contentEvents: w, scrimEvents: V } = _r(e, { isActive: r, isTop: h }), { dimensionStyles: C } = Et(e), m = Ar(), { scopeId: b } = ka();
  Z(() => e.disabled, (O) => {
    O && (r.value = !1);
  });
  const $ = W(), A = W(), { contentStyles: E, updateLocation: _ } = function(O, j) {
    const N = W({}), Y = W();
    function ne(le) {
      var Q;
      (Q = Y.value) == null || Q.call(Y, le);
    }
    return Ie && (tt(() => !(!j.isActive.value || !O.locationStrategy), (le) => {
      var Q, ce;
      Z(() => O.locationStrategy, le), _e(() => {
        Y.value = void 0;
      }), typeof O.locationStrategy == "function" ? Y.value = (Q = O.locationStrategy(j, O, N)) == null ? void 0 : Q.updateLocation : Y.value = (ce = xa[O.locationStrategy](j, O, N)) == null ? void 0 : ce.updateLocation;
    }), window.addEventListener("resize", ne, { passive: !0 }), _e(() => {
      window.removeEventListener("resize", ne), Y.value = void 0;
    })), { contentStyles: N, updateLocation: Y };
  }(e, { isRtl: v, contentEl: A, activatorEl: B, isActive: r });
  function I(O) {
    o("click:outside", O), e.persistent ? H() : r.value = !1;
  }
  function T() {
    return r.value && k.value;
  }
  function M(O) {
    var j, N;
    O.key === "Escape" && k.value && (e.persistent ? H() : (r.value = !1, (j = A.value) != null && j.contains(document.activeElement) && ((N = B.value) == null || N.focus())));
  }
  (function(O, j) {
    if (!Ie)
      return;
    let N;
    Re(async () => {
      N == null || N.stop(), j.isActive.value && O.scrollStrategy && (N = Hl(), await Ee(), N.active && N.run(() => {
        var Y;
        typeof O.scrollStrategy == "function" ? O.scrollStrategy(j, O, N) : (Y = Kt[O.scrollStrategy]) == null || Y.call(Kt, j, O, N);
      }));
    }), _e(() => {
      N == null || N.stop();
    });
  })(e, { root: $, contentEl: A, activatorEl: B, isActive: r, updateLocation: _ }), Ie && Z(r, (O) => {
    O ? window.addEventListener("keydown", M) : window.removeEventListener("keydown", M);
  }, { immediate: !0 });
  const z = (K = (R = xe("useRouter")) == null ? void 0 : R.proxy) == null ? void 0 : K.$router;
  tt(() => e.closeOnBack, () => {
    (function(O, j) {
      let N, Y, ne = !1;
      function le(Q) {
        var ce;
        (ce = Q.state) != null && ce.replaced || (ne = !0, setTimeout(() => ne = !1));
      }
      Ie && (Ee(() => {
        window.addEventListener("popstate", le), N = O == null ? void 0 : O.beforeEach((Q, ce, ke) => {
          kl ? ne ? j(ke) : ke() : setTimeout(() => ne ? j(ke) : ke()), kl = !0;
        }), Y = O == null ? void 0 : O.afterEach(() => {
          kl = !1;
        });
      }), _e(() => {
        window.removeEventListener("popstate", le), N == null || N(), Y == null || Y();
      }));
    })(z, (O) => {
      k.value && r.value ? (O(!1), e.persistent ? H() : r.value = !1) : O();
    });
  });
  const D = W();
  function H() {
    e.noClickAnimation || A.value && st(A.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Jt });
  }
  return Z(() => r.value && (e.absolute || e.contained) && s.value == null, (O) => {
    if (O) {
      const j = function(N) {
        for (; N; ) {
          if (Zl(N))
            return N;
          N = N.parentElement;
        }
        return document.scrollingElement;
      }($.value);
      j && j !== document.scrollingElement && (D.value = j.scrollTop);
    }
  }), te(() => {
    var O;
    return d(ae, null, [(O = t.activator) == null ? void 0 : O.call(t, { isActive: r.value, props: J({ ref: x }, F.value, e.activatorProps) }), m.value && d(ur, { disabled: !s.value, to: s.value }, { default: () => [p.value && d("div", J({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": r.value, "v-overlay--contained": e.contained }, u.value, c.value, e.class], style: [P.value, { top: X(D.value) }, e.style], ref: $ }, b, n), [d(Ir, J({ color: y, modelValue: r.value && !!e.scrim }, V.value), null), d(Ke, { appear: !0, persisted: !0, transition: e.transition, target: B.value, onAfterLeave: () => {
      f(), o("afterLeave");
    } }, { default: () => {
      var j;
      return [Ae(d("div", J({ ref: A, class: ["v-overlay__content", e.contentClass], style: [C.value, E.value] }, w.value, e.contentProps), [(j = t.default) == null ? void 0 : j.call(t, { isActive: r })]), [[gt, r.value], [qe("click-outside"), { handler: I, closeConditional: T, include: () => [B.value] }]])];
    } })])] })]);
  }), { activatorEl: B, animateClick: H, contentEl: A, globalTop: k, localTop: h, updateLocation: _ };
} }), Cl = Symbol("Forwarded refs");
function Bl(e, l) {
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
  return e[Cl] = t, new Proxy(e, { get(o, a) {
    if (Reflect.has(o, a))
      return Reflect.get(o, a);
    if (typeof a != "symbol" && !a.startsWith("__")) {
      for (const r of t)
        if (r.value && Reflect.has(r.value, a)) {
          const s = Reflect.get(r.value, a);
          return typeof s == "function" ? s.bind(r.value) : s;
        }
    }
  }, has(o, a) {
    if (Reflect.has(o, a))
      return !0;
    if (typeof a == "symbol" || a.startsWith("__"))
      return !1;
    for (const r of t)
      if (r.value && Reflect.has(r.value, a))
        return !0;
    return !1;
  }, getOwnPropertyDescriptor(o, a) {
    var s;
    const r = Reflect.getOwnPropertyDescriptor(o, a);
    if (r)
      return r;
    if (typeof a != "symbol" && !a.startsWith("__")) {
      for (const i of t) {
        if (!i.value)
          continue;
        const u = Bl(i.value, a) ?? ("_" in i.value ? Bl((s = i.value._) == null ? void 0 : s.setupState, a) : void 0);
        if (u)
          return u;
      }
      for (const i of t) {
        const u = i.value && i.value[Cl];
        if (!u)
          continue;
        const c = u.slice();
        for (; c.length; ) {
          const v = c.shift(), p = Bl(v.value, a);
          if (p)
            return p;
          const f = v.value && v.value[Cl];
          f && c.push(...f);
        }
      }
    }
  } });
}
const Or = (e, l, t) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), Dr = L({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function Tr(e, l, t, n) {
  const o = g(() => typeof (t == null ? void 0 : t.value) != "string" && typeof (t == null ? void 0 : t.value) != "number" ? "" : String(t.value)), a = W([]), r = W(/* @__PURE__ */ new Map()), s = g(() => n != null && n.transform ? S(l).map(n == null ? void 0 : n.transform) : S(l));
  return Re(() => {
    a.value = [], r.value = /* @__PURE__ */ new Map();
    const i = function(c, v, p) {
      var P;
      const f = [], y = (p == null ? void 0 : p.default) ?? Or, k = !!(p != null && p.filterKeys) && Oe(p.filterKeys), h = Object.keys((p == null ? void 0 : p.customKeyFilter) ?? {}).length;
      if (!(c != null && c.length))
        return f;
      e:
        for (let B = 0; B < c.length; B++) {
          const x = c[B], F = {}, w = {};
          let V = -1;
          if (v && !(p != null && p.noFilter)) {
            if (typeof x == "object") {
              const b = k || Object.keys(x);
              for (const $ of b) {
                const A = Se(x, $, x), E = (P = p == null ? void 0 : p.customKeyFilter) == null ? void 0 : P[$];
                if (V = E ? E(A, v, x) : y(A, v, x), V !== -1 && V !== !1)
                  E ? F[$] = V : w[$] = V;
                else if ((p == null ? void 0 : p.filterMode) === "every")
                  continue e;
              }
            } else
              V = y(x, v, x), V !== -1 && V !== !1 && (w.title = V);
            const C = Object.keys(w).length, m = Object.keys(F).length;
            if (!C && !m || (p == null ? void 0 : p.filterMode) === "union" && m !== h && !C || (p == null ? void 0 : p.filterMode) === "intersection" && (m !== h || !C))
              continue;
          }
          f.push({ index: B, matches: { ...w, ...F } });
        }
      return f;
    }(s.value, o.value, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), u = S(l);
    i.forEach((c) => {
      let { index: v, matches: p } = c;
      const f = u[v];
      a.value.push(f), r.value.set(f.value, p);
    });
  }), { filteredItems: a, filteredMatches: r, getMatches: function(i) {
    return r.value.get(i.value);
  } };
}
const we = L({ tag: { type: String, default: "div" } }, "tag"), Lr = L({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), Pa = Symbol.for("vuetify:datatable:expanded");
function _a(e) {
  const l = G(e, "expandOnClick"), t = fe(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function n(r, s) {
    const i = new Set(t.value);
    s ? i.add(r.value) : i.delete(r.value), t.value = i;
  }
  function o(r) {
    return t.value.has(r.value);
  }
  const a = { expand: n, expanded: t, expandOnClick: l, isExpanded: o, toggleExpand: function(r) {
    n(r, !o(r));
  } };
  return ye(Pa, a), a;
}
function Fa() {
  const e = ve(Pa);
  if (!e)
    throw new Error("foo");
  return e;
}
const Mr = L({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), Aa = Symbol.for("vuetify:data-table-group");
function $a(e) {
  return { groupBy: fe(e, "groupBy") };
}
function Va(e) {
  const { groupBy: l, sortBy: t } = e, n = W(/* @__PURE__ */ new Set());
  function o(r) {
    return n.value.has(r.id);
  }
  const a = { sortByWithGroups: g(() => l.value.map((r) => ({ ...r, order: r.order ?? !1 })).concat(t.value)), toggleGroup: function(r) {
    const s = new Set(n.value);
    o(r) ? s.delete(r.id) : s.add(r.id), n.value = s;
  }, opened: n, groupBy: l, extractRows: function(r) {
    return function s(i) {
      const u = [];
      for (const c of i.items)
        "type" in c && c.type === "group" ? u.push(...s(c)) : u.push(c);
      return u;
    }({ type: "group", items: r, id: "dummy", key: "dummy", value: "dummy", depth: 0 });
  }, isGroupOpen: o };
  return ye(Aa, a), a;
}
function Ea() {
  const e = ve(Aa);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function Ia(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!l.length)
    return [];
  const o = function(s, i) {
    if (!s.length)
      return [];
    const u = /* @__PURE__ */ new Map();
    for (const c of s) {
      const v = qt(c.raw, i);
      u.has(v) || u.set(v, []), u.get(v).push(c);
    }
    return u;
  }(e, l[0]), a = [], r = l.slice(1);
  return o.forEach((s, i) => {
    const u = l[0], c = `${n}_${u}_${i}`;
    a.push({ depth: t, id: c, key: u, value: i, items: r.length ? Ia(s, r, t + 1, c) : s, type: "group" });
  }), a;
}
function Oa(e, l) {
  const t = [];
  for (const n of e)
    "type" in n && n.type === "group" ? (n.value != null && t.push(n), (l.has(n.id) || n.value == null) && t.push(...Oa(n.items, l))) : t.push(n);
  return t;
}
function Da(e, l, t) {
  return { flatItems: g(() => l.value.length ? Oa(Ia(e.value, l.value.map((n) => n.key)), t.value) : e.value) };
}
function Ta(e) {
  let { page: l, itemsPerPage: t, sortBy: n, groupBy: o, search: a } = e;
  const r = xe("VDataTable"), s = g(() => ({ page: l.value, itemsPerPage: t.value, sortBy: n.value, groupBy: o.value, search: a.value }));
  Z(() => a == null ? void 0 : a.value, () => {
    l.value = 1;
  });
  let i = null;
  Z(s, () => {
    at(i, s.value) || (r.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const La = L({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), Ma = Symbol.for("vuetify:data-table-pagination");
function Na(e) {
  return { page: fe(e, "page", void 0, (l) => +(l ?? 1)), itemsPerPage: fe(e, "itemsPerPage", void 0, (l) => +(l ?? 10)) };
}
function ja(e) {
  const { page: l, itemsPerPage: t, itemsLength: n } = e, o = g(() => t.value === -1 ? 0 : t.value * (l.value - 1)), a = g(() => t.value === -1 ? n.value : Math.min(n.value, o.value + t.value)), r = g(() => t.value === -1 || n.value === 0 ? 1 : Math.ceil(n.value / t.value));
  Re(() => {
    l.value > r.value && (l.value = r.value);
  });
  const s = { page: l, itemsPerPage: t, startIndex: o, stopIndex: a, pageCount: r, itemsLength: n, nextPage: function() {
    l.value = xt(l.value + 1, 1, r.value);
  }, prevPage: function() {
    l.value = xt(l.value - 1, 1, r.value);
  }, setPage: function(i) {
    l.value = xt(i, 1, r.value);
  }, setItemsPerPage: function(i) {
    t.value = i, l.value = 1;
  } };
  return ye(Ma, s), s;
}
const Nr = { showSelectAll: !1, allSelected: () => [], select: (e) => {
  var n;
  let { items: l, value: t } = e;
  return new Set(t ? [(n = l[0]) == null ? void 0 : n.value] : []);
}, selectAll: (e) => {
  let { selected: l } = e;
  return l;
} }, Ra = { showSelectAll: !0, allSelected: (e) => {
  let { currentPage: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, currentPage: t, selected: n } = e;
  return Ra.select({ items: t, value: l, selected: n });
} }, za = { showSelectAll: !0, allSelected: (e) => {
  let { allItems: l } = e;
  return l;
}, select: (e) => {
  let { items: l, value: t, selected: n } = e;
  for (const o of l)
    t ? n.add(o.value) : n.delete(o.value);
  return n;
}, selectAll: (e) => {
  let { value: l, allItems: t, selected: n } = e;
  return za.select({ items: t, value: l, selected: n });
} }, jr = L({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] } }, "DataTable-select"), Ha = Symbol.for("vuetify:data-table-selection");
function Ga(e, l) {
  let { allItems: t, currentPage: n } = l;
  const o = fe(e, "modelValue", e.modelValue, (f) => new Set(f), (f) => [...f.values()]), a = g(() => t.value.filter((f) => f.selectable)), r = g(() => n.value.filter((f) => f.selectable)), s = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Nr;
      case "all":
        return za;
      default:
        return Ra;
    }
  });
  function i(f) {
    return Oe(f).every((y) => o.value.has(y.value));
  }
  function u(f, y) {
    const k = s.value.select({ items: f, value: y, selected: new Set(o.value) });
    o.value = k;
  }
  const c = g(() => o.value.size > 0), v = g(() => i(s.value.allSelected({ allItems: a.value, currentPage: r.value }))), p = { toggleSelect: function(f) {
    u([f], !i([f]));
  }, select: u, selectAll: function(f) {
    const y = s.value.selectAll({ value: f, allItems: a.value, currentPage: r.value, selected: new Set(o.value) });
    o.value = y;
  }, isSelected: i, isSomeSelected: function(f) {
    return Oe(f).some((y) => o.value.has(y.value));
  }, someSelected: c, allSelected: v, showSelectAll: s.value.showSelectAll };
  return ye(Ha, p), p;
}
function pl() {
  const e = ve(Ha);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const Rr = L({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), Wa = Symbol.for("vuetify:data-table-sort");
function Ka(e) {
  return { sortBy: fe(e, "sortBy"), mustSort: G(e, "mustSort"), multiSort: G(e, "multiSort") };
}
function Ua(e) {
  const { sortBy: l, mustSort: t, multiSort: n, page: o } = e, a = { sortBy: l, toggleSort: (r) => {
    let s = l.value.map((u) => ({ ...u })) ?? [];
    const i = s.find((u) => u.key === r.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((u) => u.key !== r.key) : i.order = "desc" : s = n.value ? [...s, { key: r.key, order: "asc" }] : [{ key: r.key, order: "asc" }], l.value = s, o && (o.value = 1);
  }, isSorted: function(r) {
    return !!l.value.find((s) => s.key === r.key);
  } };
  return ye(Wa, a), a;
}
function zr(e, l, t) {
  const n = yt();
  return { sortedItems: g(() => t.value.length ? function(a, r, s, i) {
    const u = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...a].sort((c, v) => {
      for (let p = 0; p < r.length; p++) {
        const f = r[p].key, y = r[p].order ?? "asc";
        if (y === !1)
          continue;
        let k = qt(c.raw, f), h = qt(v.raw, f);
        if (y === "desc" && ([k, h] = [h, k]), i == null ? void 0 : i[f]) {
          const P = i[f](k, h);
          if (!P)
            continue;
          return P;
        }
        if (k instanceof Date && h instanceof Date)
          return k.getTime() - h.getTime();
        if ([k, h] = [k, h].map((P) => P != null ? P.toString().toLocaleLowerCase() : P), k !== h)
          return isNaN(k) || isNaN(h) ? u.compare(k, h) : Number(k) - Number(h);
      }
      return 0;
    });
  }(l.value, t.value, n.current.value, e.customKeySort) : l.value) };
}
const Dt = L({ border: [Boolean, Number, String] }, "border");
function Tt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
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
const Hr = [null, "default", "comfortable", "compact"], Ge = L({ density: { type: String, default: "default", validator: (e) => Hr.includes(e) } }, "density");
function We(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  return { densityClasses: g(() => `${l}--density-${e.density}`) };
}
const Lt = L({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Mt(e) {
  return { elevationClasses: g(() => {
    const l = mt(e) ? e.value : e.elevation, t = [];
    return l == null || t.push(`elevation-${l}`), t;
  }) };
}
const Je = L({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ze(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
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
const Gr = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function vl(e, l) {
  return d(ae, null, [e && d("span", { key: "overlay", class: `${l}__overlay` }, null), d("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const ot = L({ color: String, variant: { type: String, default: "elevated", validator: (e) => Gr.includes(e) } }, "variant");
function fl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  const t = g(() => {
    const { variant: a } = S(e);
    return `${l}--variant-${a}`;
  }), { colorClasses: n, colorStyles: o } = en(g(() => {
    const { variant: a, color: r } = S(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: r };
  }));
  return { colorClasses: n, colorStyles: o, variantClasses: t };
}
const qa = L({ divided: Boolean, ...Dt(), ...se(), ...Ge(), ...Lt(), ...Je(), ...we(), ...be(), ...ot() }, "VBtnGroup"), Dn = q()({ name: "VBtnGroup", props: qa(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { densityClasses: o } = We(e), { borderClasses: a } = Tt(e), { elevationClasses: r } = Mt(e), { roundedClasses: s } = Ze(e);
  Xe({ VBtn: { height: "auto", color: G(e, "color"), density: G(e, "density"), flat: !0, variant: G(e, "variant") } }), te(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, n.value, a.value, o.value, r.value, s.value, e.class], style: e.style }, t));
} }), Ya = L({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Xa = L({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Ja(e, l) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const n = xe("useGroupItem");
  if (!n)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = Me();
  ye(Symbol.for(`${l.description}:id`), o);
  const a = ve(l, null);
  if (!a) {
    if (!t)
      return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const r = G(e, "value"), s = g(() => a.disabled.value || e.disabled);
  a.register({ id: o, value: r, disabled: s }, n), nt(() => {
    a.unregister(o);
  });
  const i = g(() => a.isSelected(o)), u = g(() => i.value && [a.selectedClass.value, e.selectedClass]);
  return Z(i, (c) => {
    n.emit("group:selected", { value: c });
  }), { id: o, isSelected: i, toggle: () => a.select(o, !i.value), select: (c) => a.select(o, c), selectedClass: u, value: r, disabled: s, group: a };
}
function Za(e, l) {
  let t = !1;
  const n = Pt([]), o = fe(e, "modelValue", [], (u) => u == null ? [] : Tn(n, Oe(u)), (u) => {
    const c = function(v, p) {
      const f = [];
      return p.forEach((y) => {
        const k = v.findIndex((h) => h.id === y);
        if (~k) {
          const h = v[k];
          f.push(h.value != null ? h.value : k);
        }
      }), f;
    }(n, u);
    return e.multiple ? c : c[0];
  }), a = xe("useGroup");
  function r() {
    const u = n.find((c) => !c.disabled);
    u && e.mandatory === "force" && !o.value.length && (o.value = [u.id]);
  }
  function s(u) {
    if (e.multiple && pa('This method is not supported when using "multiple" prop'), o.value.length) {
      const c = o.value[0], v = n.findIndex((y) => y.id === c);
      let p = (v + u) % n.length, f = n[p];
      for (; f.disabled && p !== v; )
        p = (p + u) % n.length, f = n[p];
      if (f.disabled)
        return;
      o.value = [n[p].id];
    } else {
      const c = n.find((v) => !v.disabled);
      c && (o.value = [c.id]);
    }
  }
  Ft(() => {
    r();
  }), nt(() => {
    t = !0;
  });
  const i = { register: function(u, c) {
    const v = u, p = Gt(Symbol.for(`${l.description}:id`), a == null ? void 0 : a.vnode).indexOf(c);
    p > -1 ? n.splice(p, 0, v) : n.push(v);
  }, unregister: function(u) {
    if (t)
      return;
    r();
    const c = n.findIndex((v) => v.id === u);
    n.splice(c, 1);
  }, selected: o, select: function(u, c) {
    const v = n.find((p) => p.id === u);
    if (!c || !(v != null && v.disabled))
      if (e.multiple) {
        const p = o.value.slice(), f = p.findIndex((k) => k === u), y = ~f;
        if (c = c ?? !y, y && e.mandatory && p.length <= 1 || !y && e.max != null && p.length + 1 > e.max)
          return;
        f < 0 && c ? p.push(u) : f >= 0 && !c && p.splice(f, 1), o.value = p;
      } else {
        const p = o.value.includes(u);
        if (e.mandatory && p)
          return;
        o.value = c ?? !p ? [u] : [];
      }
  }, disabled: G(e, "disabled"), prev: () => s(n.length - 1), next: () => s(1), isSelected: (u) => o.value.includes(u), selectedClass: g(() => e.selectedClass), items: g(() => n), getItemIndex: (u) => function(c, v) {
    const p = Tn(c, [v]);
    return p.length ? c.findIndex((f) => f.id === p[0]) : -1;
  }(n, u) };
  return ye(l, i), i;
}
function Tn(e, l) {
  const t = [];
  return l.forEach((n) => {
    const o = e.find((r) => at(n, r.value)), a = e[n];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : a != null && t.push(a.id);
  }), t;
}
const Qa = Symbol.for("vuetify:v-btn-toggle"), Wr = L({ ...qa(), ...Ya() }, "VBtnToggle");
q()({ name: "VBtnToggle", props: Wr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, next: o, prev: a, select: r, selected: s } = Za(e, Qa);
  return te(() => {
    const [i] = Dn.filterProps(e);
    return d(Dn, J({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var u;
      return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: n, next: o, prev: a, select: r, selected: s })];
    } });
  }), { next: o, prev: a, select: r };
} });
const pe = [String, Function, Object, Array], Kr = Symbol.for("vuetify:icons"), el = L({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), Ln = q()({ name: "VComponentIcon", props: el(), setup(e, l) {
  let { slots: t } = l;
  return () => {
    const n = e.icon;
    return d(e.tag, null, { default: () => {
      var o;
      return [e.icon ? d(n, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), Ur = dt({ name: "VSvgIcon", inheritAttrs: !1, props: el(), setup(e, l) {
  let { attrs: t } = l;
  return () => d(e.tag, J(t, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? d("path", { d: n[0], "fill-opacity": n[1] }, null) : d("path", { d: n }, null)) : d("path", { d: e.icon }, null)])] });
} });
dt({ name: "VLigatureIcon", props: el(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), dt({ name: "VClassIcon", props: el(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const qr = ["x-small", "small", "default", "large", "x-large"], Nt = L({ size: { type: [String, Number], default: "default" } }, "size");
function jt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  return ql(() => {
    let t, n;
    return Yt(qr, e.size) ? t = `${l}--size-${e.size}` : e.size && (n = { width: X(e.size), height: X(e.size) }), { sizeClasses: t, sizeStyles: n };
  });
}
const Yr = L({ color: String, start: Boolean, end: Boolean, icon: pe, ...se(), ...Nt(), ...we({ tag: "i" }), ...be() }, "VIcon"), he = q()({ name: "VIcon", props: Yr(), setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = W(), { themeClasses: a } = Ce(e), { iconData: r } = ((c) => {
    const v = ve(Kr);
    if (!v)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: g(() => {
      var h;
      const p = S(c);
      if (!p)
        return { component: Ln };
      let f = p;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (h = v.aliases) == null ? void 0 : h[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${p}"`);
      if (Array.isArray(f))
        return { component: Ur, icon: f };
      if (typeof f != "string")
        return { component: Ln, icon: f };
      const y = Object.keys(v.sets).find((P) => typeof f == "string" && f.startsWith(`${P}:`)), k = y ? f.slice(y.length + 1) : f;
      return { component: v.sets[y ?? v.defaultSet].component, icon: k };
    }) };
  })(g(() => o.value || e.icon)), { sizeClasses: s } = jt(e), { textColorClasses: i, textColorStyles: u } = ze(G(e, "color"));
  return te(() => {
    var v, p;
    const c = (v = n.default) == null ? void 0 : v.call(n);
    return c && (o.value = (p = ca(c).filter((f) => f.type === cr && f.children && typeof f.children == "string")[0]) == null ? void 0 : p.children), d(r.value.component, { tag: e.tag, icon: r.value.icon, class: ["v-icon", "notranslate", a.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: X(e.size), height: X(e.size), width: X(e.size) }, u.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [c] });
  }), {};
} });
function eo(e, l) {
  const t = W(), n = ue(!1);
  if (Ql) {
    const o = new IntersectionObserver((a) => {
      e == null || e(a, o), n.value = !!a.find((r) => r.isIntersecting);
    }, l);
    nt(() => {
      o.disconnect();
    }), Z(t, (a, r) => {
      r && (o.unobserve(r), n.value = !1), a && o.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: n };
}
const Xr = L({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...Nt(), ...we({ tag: "div" }), ...be() }, "VProgressCircular"), to = q()({ name: "VProgressCircular", props: Xr(), setup(e, l) {
  let { slots: t } = l;
  const n = 2 * Math.PI * 20, o = W(), { themeClasses: a } = Ce(e), { sizeClasses: r, sizeStyles: s } = jt(e), { textColorClasses: i, textColorStyles: u } = ze(G(e, "color")), { textColorClasses: c, textColorStyles: v } = ze(G(e, "bgColor")), { intersectionRef: p, isIntersecting: f } = eo(), { resizeRef: y, contentRect: k } = function(V) {
    const C = W(), m = W();
    if (Ie) {
      const b = new ResizeObserver(($) => {
        V == null || V($, b), $.length && (m.value = $[0].contentRect);
      });
      nt(() => {
        b.disconnect();
      }), Z(C, ($, A) => {
        A && (b.unobserve($l(A)), m.value = void 0), $ && b.observe($l($));
      }, { flush: "post" });
    }
    return { resizeRef: C, contentRect: Gl(m) };
  }(), h = g(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), P = g(() => Number(e.width)), B = g(() => s.value ? Number(e.size) : k.value ? k.value.width : Math.max(P.value, 32)), x = g(() => 20 / (1 - P.value / B.value) * 2), F = g(() => P.value / B.value * x.value), w = g(() => X((100 - h.value) / 100 * n));
  return Re(() => {
    p.value = o.value, y.value = o.value;
  }), te(() => d(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": f.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, r.value, i.value, e.class], style: [s.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : h.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${x.value} ${x.value}` }, [d("circle", { class: ["v-progress-circular__underlay", c.value], style: v.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": F.value, "stroke-dasharray": n, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": F.value, "stroke-dasharray": n, "stroke-dashoffset": w.value }, null)]), t.default && d("div", { class: "v-progress-circular__content" }, [t.default({ value: h.value })])] })), {};
} }), Mn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, lo = L({ location: String }, "location");
function no(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: n } = It();
  return { locationStyles: g(() => {
    if (!e.location)
      return {};
    const { side: a, align: r } = El(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, n.value);
    function s(u) {
      return t ? t(u) : 0;
    }
    const i = {};
    return a !== "center" && (l ? i[Mn[a]] = `calc(100% - ${s(a)}px)` : i[a] = 0), r !== "center" ? l ? i[Mn[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0 : (a === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), i;
  }) };
}
const Jr = L({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...lo({ location: "top" }), ...Je(), ...we(), ...be() }, "VProgressLinear"), ao = q()({ name: "VProgressLinear", props: Jr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { isRtl: o, rtlClasses: a } = It(), { themeClasses: r } = Ce(e), { locationStyles: s } = no(e), { textColorClasses: i, textColorStyles: u } = ze(e, "color"), { backgroundColorClasses: c, backgroundColorStyles: v } = pt(g(() => e.bgColor || e.color)), { backgroundColorClasses: p, backgroundColorStyles: f } = pt(e, "color"), { roundedClasses: y } = Ze(e), { intersectionRef: k, isIntersecting: h } = eo(), P = g(() => parseInt(e.max, 10)), B = g(() => parseInt(e.height, 10)), x = g(() => parseFloat(e.bufferValue) / P.value * 100), F = g(() => parseFloat(n.value) / P.value * 100), w = g(() => o.value !== e.reverse), V = g(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), C = g(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function m(b) {
    if (!k.value)
      return;
    const { left: $, right: A, width: E } = k.value.getBoundingClientRect(), _ = w.value ? E - b.clientX + (A - E) : b.clientX - $;
    n.value = Math.round(_ / E * P.value);
  }
  return te(() => d(e.tag, { ref: k, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && h.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, y.value, r.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? X(B.value) : 0, "--v-progress-linear-height": X(B.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : F.value, onClick: e.clickable && m }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...u.value, [w.value ? "left" : "right"]: X(-B.value), borderTop: `${X(B.value / 2)} dotted`, opacity: C.value, top: `calc(50% - ${X(B.value / 4)})`, width: X(100 - x.value, "%"), "--v-progress-linear-stream-to": X(B.value * (w.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", c.value], style: [v.value, { opacity: C.value, width: X(e.stream ? x.value : 100, "%") }] }, null), d(lt, { name: V.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((b) => d("div", { key: b, class: ["v-progress-linear__indeterminate", b, p.value], style: f.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", p.value], style: [f.value, { width: X(F.value, "%") }] }, null)] }), t.default && d("div", { class: "v-progress-linear__content" }, [t.default({ value: F.value, buffer: x.value })])] })), {};
} }), an = L({ loading: [Boolean, String] }, "loader");
function on(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  return { loaderClasses: g(() => ({ [`${l}--loading`]: e.loading })) };
}
function oo(e, l) {
  var n;
  let { slots: t } = l;
  return d("div", { class: `${e.name}__loader` }, [((n = t.default) == null ? void 0 : n.call(t, { color: e.color, isActive: e.active })) || d(ao, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Zr = ["static", "relative", "fixed", "absolute", "sticky"], Qr = L({ position: { type: String, validator: (e) => Zr.includes(e) } }, "position"), Ll = Symbol("rippleStop"), es = 80;
function Nn(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function Ml(e) {
  return e.constructor.name === "TouchEvent";
}
function ro(e) {
  return e.constructor.name === "KeyboardEvent";
}
const tl = { show(e, l) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((f = l == null ? void 0 : l._ripple) != null && f.enabled))
    return;
  const n = document.createElement("span"), o = document.createElement("span");
  n.appendChild(o), n.className = "v-ripple__container", t.class && (n.className += ` ${t.class}`);
  const { radius: a, scale: r, x: s, y: i, centerX: u, centerY: c } = function(y, k) {
    var C;
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, P = 0, B = 0;
    if (!ro(y)) {
      const m = k.getBoundingClientRect(), b = Ml(y) ? y.touches[y.touches.length - 1] : y;
      P = b.clientX - m.left, B = b.clientY - m.top;
    }
    let x = 0, F = 0.3;
    (C = k._ripple) != null && C.circle ? (F = 0.15, x = k.clientWidth / 2, x = h.center ? x : x + Math.sqrt((P - x) ** 2 + (B - x) ** 2) / 4) : x = Math.sqrt(k.clientWidth ** 2 + k.clientHeight ** 2) / 2;
    const w = (k.clientWidth - 2 * x) / 2 + "px", V = (k.clientHeight - 2 * x) / 2 + "px";
    return { radius: x, scale: F, x: h.center ? w : P - x + "px", y: h.center ? V : B - x + "px", centerX: w, centerY: V };
  }(e, l, t), v = 2 * a + "px";
  o.className = "v-ripple__animation", o.style.width = v, o.style.height = v, l.appendChild(n);
  const p = window.getComputedStyle(l);
  p && p.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Nn(o, `translate(${s}, ${i}) scale3d(${r},${r},${r})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Nn(o, `translate(${u}, ${c}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var a;
  if (!((a = e == null ? void 0 : e._ripple) != null && a.enabled))
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
      var r;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, o);
} };
function so(e) {
  return e === void 0 || !!e;
}
function kt(e) {
  const l = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Ll]) {
    if (e[Ll] = !0, Ml(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (l.center = t._ripple.centered || ro(e), t._ripple.class && (l.class = t._ripple.class), Ml(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        tl.show(e, t, l);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var n;
        (n = t == null ? void 0 : t._ripple) != null && n.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, es);
    } else
      tl.show(e, t, l);
  }
}
function jn(e) {
  e[Ll] = !0;
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
    }), tl.hide(l);
  }
}
function io(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let Ct = !1;
function uo(e) {
  Ct || e.keyCode !== gn.enter && e.keyCode !== gn.space || (Ct = !0, kt(e));
}
function co(e) {
  Ct = !1, Fe(e);
}
function po(e) {
  Ct && (Ct = !1, Fe(e));
}
function Rn(e, l, t) {
  const { value: n, modifiers: o } = l, a = so(n);
  if (a || tl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Al(n) && n.class && (e._ripple.class = n.class), a && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", jn, { passive: !0 }), void e.addEventListener("mousedown", jn);
    e.addEventListener("touchstart", kt, { passive: !0 }), e.addEventListener("touchend", Fe, { passive: !0 }), e.addEventListener("touchmove", io, { passive: !0 }), e.addEventListener("touchcancel", Fe), e.addEventListener("mousedown", kt), e.addEventListener("mouseup", Fe), e.addEventListener("mouseleave", Fe), e.addEventListener("keydown", uo), e.addEventListener("keyup", co), e.addEventListener("blur", po), e.addEventListener("dragstart", Fe, { passive: !0 });
  } else
    !a && t && vo(e);
}
function vo(e) {
  e.removeEventListener("mousedown", kt), e.removeEventListener("touchstart", kt), e.removeEventListener("touchend", Fe), e.removeEventListener("touchmove", io), e.removeEventListener("touchcancel", Fe), e.removeEventListener("mouseup", Fe), e.removeEventListener("mouseleave", Fe), e.removeEventListener("keydown", uo), e.removeEventListener("keyup", co), e.removeEventListener("dragstart", Fe), e.removeEventListener("blur", po);
}
const ml = { mounted: function(e, l) {
  Rn(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, vo(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && Rn(e, l, so(l.oldValue));
} }, ts = L({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Qa }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Dt(), ...se(), ...Ge(), ...Vt(), ...Lt(), ...Xa(), ...an(), ...lo(), ...Qr(), ...Je(), ...ln(), ...Nt(), ...we({ tag: "button" }), ...be(), ...ot({ variant: "elevated" }) }, "VBtn"), it = q()({ name: "VBtn", directives: { Ripple: ml }, props: ts(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { themeClasses: o } = Ce(e), { borderClasses: a } = Tt(e), { colorClasses: r, colorStyles: s, variantClasses: i } = fl(e), { densityClasses: u } = We(e), { dimensionStyles: c } = Et(e), { elevationClasses: v } = Mt(e), { loaderClasses: p } = on(e), { locationStyles: f } = no(e), { positionClasses: y } = function(b) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
    return { positionClasses: g(() => b.position ? `${$}--${b.position}` : void 0) };
  }(e), { roundedClasses: k } = Ze(e), { sizeClasses: h, sizeStyles: P } = jt(e), B = Ja(e, e.symbol, !1), x = tn(e, t), F = g(() => {
    var b;
    return e.active !== void 0 ? e.active : x.isLink.value ? (b = x.isActive) == null ? void 0 : b.value : B == null ? void 0 : B.isSelected.value;
  }), w = g(() => (B == null ? void 0 : B.disabled.value) || e.disabled), V = g(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), C = g(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function m(b) {
    var $;
    w.value || (($ = x.navigate) == null || $.call(x, b), B == null || B.toggle());
  }
  return function(b, $) {
    Z(() => {
      var A;
      return (A = b.isActive) == null ? void 0 : A.value;
    }, (A) => {
      b.isLink.value && A && $ && Ee(() => {
        $(!0);
      });
    }, { immediate: !0 });
  }(x, B == null ? void 0 : B.select), te(() => {
    var I, T;
    const b = x.isLink.value ? "a" : e.tag, $ = !(!e.prependIcon && !n.prepend), A = !(!e.appendIcon && !n.append), E = !(!e.icon || e.icon === !0), _ = (B == null ? void 0 : B.isSelected.value) && (!x.isLink.value || ((I = x.isActive) == null ? void 0 : I.value)) || !B || ((T = x.isActive) == null ? void 0 : T.value);
    return Ae(d(b, { type: b === "a" ? void 0 : "button", class: ["v-btn", B == null ? void 0 : B.selectedClass.value, { "v-btn--active": F.value, "v-btn--block": e.block, "v-btn--disabled": w.value, "v-btn--elevated": V.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, a.value, _ ? r.value : void 0, u.value, v.value, p.value, y.value, k.value, h.value, i.value, e.class], style: [_ ? s.value : void 0, c.value, f.value, P.value, e.style], disabled: w.value || void 0, href: x.href.value, onClick: m, value: C.value }, { default: () => {
      var M;
      return [vl(!0, "v-btn"), !e.icon && $ && d("span", { key: "prepend", class: "v-btn__prepend" }, [n.prepend ? d(Ve, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, n.prepend) : d(he, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!n.default && E ? d(he, { key: "content-icon", icon: e.icon }, null) : d(Ve, { key: "content-defaults", disabled: !E, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var z;
        return [((z = n.default) == null ? void 0 : z.call(n)) ?? e.text];
      } })]), !e.icon && A && d("span", { key: "append", class: "v-btn__append" }, [n.append ? d(Ve, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, n.append) : d(he, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((M = n.loader) == null ? void 0 : M.call(n)) ?? d(to, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[qe("ripple"), !w.value && e.ripple, null]]);
  }), {};
} }), ls = L({ text: String, clickable: Boolean, ...se(), ...be() }, "VLabel"), fo = q()({ name: "VLabel", props: ls(), setup(e, l) {
  let { slots: t } = l;
  return te(() => {
    var n;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (n = t.default) == null ? void 0 : n.call(t)]);
  }), {};
} }), mo = Symbol.for("vuetify:selection-control-group"), go = L({ color: String, disabled: Boolean, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: at }, ...se(), ...Ge(), ...be() }, "SelectionControlGroup"), ns = L({ ...go({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
q()({ name: "VSelectionControlGroup", props: ns(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), o = Me(), a = g(() => e.id || `v-selection-control-group-${o}`), r = g(() => e.name || a.value), s = /* @__PURE__ */ new Set();
  return ye(mo, { modelValue: n, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), _e(() => {
      s.delete(i);
    });
  } }), Xe({ [e.defaultsTarget]: { color: G(e, "color"), disabled: G(e, "disabled"), density: G(e, "density"), error: G(e, "error"), inline: G(e, "inline"), modelValue: n, multiple: g(() => !!e.multiple || e.multiple == null && Array.isArray(n.value)), name: r, falseIcon: G(e, "falseIcon"), trueIcon: G(e, "trueIcon"), readonly: G(e, "readonly"), ripple: G(e, "ripple"), type: G(e, "type"), valueComparator: G(e, "valueComparator") } }), te(() => {
    var i;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const yo = L({ label: String, trueValue: null, falseValue: null, value: null, ...se(), ...go() }, "VSelectionControl"), as = q()({ name: "VSelectionControl", directives: { Ripple: ml }, inheritAttrs: !1, props: yo(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { group: o, densityClasses: a, icon: r, model: s, textColorClasses: i, textColorStyles: u, trueValue: c } = function(x) {
    const F = ve(mo, void 0), { densityClasses: w } = We(x), V = fe(x, "modelValue"), C = g(() => x.trueValue !== void 0 ? x.trueValue : x.value === void 0 || x.value), m = g(() => x.falseValue !== void 0 && x.falseValue), b = g(() => !!x.multiple || x.multiple == null && Array.isArray(V.value)), $ = g({ get() {
      const I = F ? F.modelValue.value : V.value;
      return b.value ? I.some((T) => x.valueComparator(T, C.value)) : x.valueComparator(I, C.value);
    }, set(I) {
      if (x.readonly)
        return;
      const T = I ? C.value : m.value;
      let M = T;
      b.value && (M = I ? [...Oe(V.value), T] : Oe(V.value).filter((z) => !x.valueComparator(z, C.value))), F ? F.modelValue.value = M : V.value = M;
    } }), { textColorClasses: A, textColorStyles: E } = ze(g(() => !$.value || x.error || x.disabled ? void 0 : x.color)), _ = g(() => $.value ? x.trueIcon : x.falseIcon);
    return { group: F, densityClasses: w, trueValue: C, falseValue: m, model: $, textColorClasses: A, textColorStyles: E, icon: _ };
  }(e), v = Me(), p = g(() => e.id || `input-${v}`), f = ue(!1), y = ue(!1), k = W();
  function h(x) {
    f.value = !0, (!Il || Il && x.target.matches(":focus-visible")) && (y.value = !0);
  }
  function P() {
    f.value = !1, y.value = !1;
  }
  function B(x) {
    e.readonly && o && Ee(() => o.forceUpdate()), s.value = x.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    k.value && (k.value.checked = s.value);
  }), te(() => {
    var V, C;
    const x = n.label ? n.label({ label: e.label, props: { for: p.value } }) : e.label, [F, w] = Ul(t);
    return d("div", J({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": f.value, "v-selection-control--focus-visible": y.value, "v-selection-control--inline": e.inline }, a.value, e.class] }, F, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", i.value], style: u.value }, [(V = n.default) == null ? void 0 : V.call(n), Ae(d("div", { class: ["v-selection-control__input"] }, [r.value && d(he, { key: "icon", icon: r.value }, null), d("input", J({ ref: k, checked: s.value, disabled: e.disabled, id: p.value, onBlur: P, onFocus: h, onInput: B, "aria-disabled": e.readonly, type: e.type, value: c.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, w), null), (C = n.input) == null ? void 0 : C.call(n, { model: s, textColorClasses: i, textColorStyles: u, props: { onFocus: h, onBlur: P, id: p.value } })]), [[qe("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), x && d(fo, { for: p.value, clickable: !0 }, { default: () => [x] })]);
  }), { isFocused: f, input: k };
} }), ho = L({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...yo({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), vt = q()({ name: "VCheckboxBtn", props: ho(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "indeterminate"), o = fe(e, "modelValue");
  function a(i) {
    n.value && (n.value = !1);
  }
  const r = g(() => n.value ? e.indeterminateIcon : e.falseIcon), s = g(() => n.value ? e.indeterminateIcon : e.trueIcon);
  return te(() => d(as, J(e, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, a], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: r.value, trueIcon: s.value, "aria-checked": n.value ? "mixed" : void 0 }), t)), {};
} });
function bo(e) {
  const { t: l } = yt();
  return { InputIcon: function(t) {
    let { name: n } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[n], a = e[`onClick:${n}`], r = a && o ? l(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return d(he, { icon: e[`${n}Icon`], "aria-label": r, onClick: a }, null);
  } };
}
const os = L({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...Ot({ transition: { component: ba, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), rs = q()({ name: "VMessages", props: os(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => Oe(e.messages)), { textColorClasses: o, textColorStyles: a } = ze(g(() => e.color));
  return te(() => d(Ke, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && n.value.map((r, s) => d("div", { class: "v-messages__message", key: `${s}-${n.value}` }, [t.message ? t.message({ message: r }) : r]))] })), {};
} }), So = L({ focused: Boolean, "onUpdate:focused": Le() }, "focus");
function rn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
  const t = fe(e, "focused");
  return { focusClasses: g(() => ({ [`${l}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const ss = Symbol.for("vuetify:form");
function xo() {
  return ve(ss, null);
}
const is = L({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...So() }, "validation"), sn = L({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Le(), "onClick:append": Le(), ...se(), ...Ge(), ...is() }, "VInput"), ll = q()({ name: "VInput", props: { ...sn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const { densityClasses: a } = We(e), { rtlClasses: r } = It(), { InputIcon: s } = bo(e), i = Me(), u = g(() => e.id || `input-${i}`), c = g(() => `${u.value}-messages`), { errorMessages: v, isDirty: p, isDisabled: f, isReadonly: y, isPristine: k, isValid: h, isValidating: P, reset: B, resetValidation: x, validate: F, validationClasses: w } = function(m) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He(), $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Me();
    const A = fe(m, "modelValue"), E = g(() => m.validationValue === void 0 ? A.value : m.validationValue), _ = xo(), I = W([]), T = ue(!0), M = g(() => !(!Oe(A.value === "" ? null : A.value).length && !Oe(E.value === "" ? null : E.value).length)), z = g(() => !!(m.disabled ?? (_ == null ? void 0 : _.isDisabled.value))), D = g(() => !!(m.readonly ?? (_ == null ? void 0 : _.isReadonly.value))), H = g(() => m.errorMessages.length ? Oe(m.errorMessages).slice(0, Math.max(0, +m.maxErrors)) : I.value), R = g(() => {
      let Q = (m.validateOn ?? (_ == null ? void 0 : _.validateOn.value)) || "input";
      Q === "lazy" && (Q = "input lazy");
      const ce = new Set((Q == null ? void 0 : Q.split(" ")) ?? []);
      return { blur: ce.has("blur") || ce.has("input"), input: ce.has("input"), submit: ce.has("submit"), lazy: ce.has("lazy") };
    }), K = g(() => !m.error && !m.errorMessages.length && (!m.rules.length || (T.value ? !I.value.length && !R.value.lazy || null : !I.value.length))), O = ue(!1), j = g(() => ({ [`${b}--error`]: K.value === !1, [`${b}--dirty`]: M.value, [`${b}--disabled`]: z.value, [`${b}--readonly`]: D.value })), N = g(() => m.name ?? S($));
    function Y() {
      A.value = null, Ee(ne);
    }
    function ne() {
      T.value = !0, R.value.lazy ? I.value = [] : le(!0);
    }
    async function le() {
      let Q = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ce = [];
      O.value = !0;
      for (const ke of m.rules) {
        if (ce.length >= +(m.maxErrors ?? 1))
          break;
        const hl = typeof ke == "function" ? ke : () => ke, Ne = await hl(E.value);
        Ne !== !0 && (typeof Ne == "string" ? ce.push(Ne) : console.warn(`${Ne} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return I.value = ce, O.value = !1, T.value = Q, I.value;
    }
    return Wl(() => {
      _ == null || _.register({ id: N.value, validate: le, reset: Y, resetValidation: ne });
    }), nt(() => {
      _ == null || _.unregister(N.value);
    }), Ft(async () => {
      R.value.lazy || await le(!0), _ == null || _.update(N.value, K.value, H.value);
    }), tt(() => R.value.input, () => {
      Z(E, () => {
        if (E.value != null)
          le();
        else if (m.focused) {
          const Q = Z(() => m.focused, (ce) => {
            ce || le(), Q();
          });
        }
      });
    }), tt(() => R.value.blur, () => {
      Z(() => m.focused, (Q) => {
        Q || le();
      });
    }), Z(K, () => {
      _ == null || _.update(N.value, K.value, H.value);
    }), { errorMessages: H, isDirty: M, isDisabled: z, isReadonly: D, isPristine: T, isValid: K, isValidating: O, reset: Y, resetValidation: ne, validate: le, validationClasses: j };
  }(e, "v-input", u), V = g(() => ({ id: u, messagesId: c, isDirty: p, isDisabled: f, isReadonly: y, isPristine: k, isValid: h, isValidating: P, reset: B, resetValidation: x, validate: F })), C = g(() => {
    var m;
    return (m = e.errorMessages) != null && m.length || !k.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return te(() => {
    var E, _, I, T;
    const m = !(!n.prepend && !e.prependIcon), b = !(!n.append && !e.appendIcon), $ = C.value.length > 0, A = !e.hideDetails || e.hideDetails === "auto" && ($ || !!n.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, a.value, r.value, w.value, e.class], style: e.style }, [m && d("div", { key: "prepend", class: "v-input__prepend" }, [(E = n.prepend) == null ? void 0 : E.call(n, V.value), e.prependIcon && d(s, { key: "prepend-icon", name: "prepend" }, null)]), n.default && d("div", { class: "v-input__control" }, [(_ = n.default) == null ? void 0 : _.call(n, V.value)]), b && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(s, { key: "append-icon", name: "append" }, null), (I = n.append) == null ? void 0 : I.call(n, V.value)]), A && d("div", { class: "v-input__details" }, [d(rs, { id: c.value, active: $, messages: C.value }, { message: n.message }), (T = n.details) == null ? void 0 : T.call(n, V.value)])]);
  }), { reset: B, resetValidation: x, validate: F };
} }), us = L({ ...sn(), ...Kl(ho(), ["inline"]) }, "VCheckbox"), un = q()({ name: "VCheckbox", inheritAttrs: !1, props: us(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = fe(e, "modelValue"), { isFocused: a, focus: r, blur: s } = rn(e), i = Me(), u = g(() => e.id || `checkbox-${i}`);
  return te(() => {
    const [c, v] = Ul(t), [p, f] = ll.filterProps(e), [y, k] = vt.filterProps(e);
    return d(ll, J({ class: ["v-checkbox", e.class] }, c, p, { modelValue: o.value, "onUpdate:modelValue": (h) => o.value = h, id: u.value, focused: a.value, style: e.style }), { ...n, default: (h) => {
      let { id: P, messagesId: B, isDisabled: x, isReadonly: F } = h;
      return d(vt, J(y, { id: P.value, "aria-describedby": B.value, disabled: x.value, readonly: F.value }, v, { modelValue: o.value, "onUpdate:modelValue": (w) => o.value = w, onFocus: r, onBlur: s }), n);
    } });
  }), {};
} }), wo = L({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...Vt() }, "VResponsive"), zn = q()({ name: "VResponsive", props: wo(), setup(e, l) {
  let { slots: t } = l;
  const { aspectStyles: n } = function(a) {
    return { aspectStyles: g(() => {
      const r = Number(a.aspectRatio);
      return r ? { paddingBottom: String(1 / r * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = Et(e);
  return te(() => {
    var a;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: n.value }, null), (a = t.additional) == null ? void 0 : a.call(t), t.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function Hn(e, l) {
  var n;
  const t = (n = e._observe) == null ? void 0 : n[l.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const ko = { mounted: function(e, l) {
  if (!Ql)
    return;
  const t = l.modifiers || {}, n = l.value, { handler: o, options: a } = typeof n == "object" ? n : { handler: n, options: {} }, r = new IntersectionObserver(function() {
    var v;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const u = (v = e._observe) == null ? void 0 : v[l.instance.$.uid];
    if (!u)
      return;
    const c = s.some((p) => p.isIntersecting);
    !o || t.quiet && !u.init || t.once && !c && !u.init || o(c, s, i), c && t.once ? Hn(e, l) : u.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: r }, r.observe(e);
}, unmounted: Hn }, cs = L({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...wo(), ...se(), ...Ot() }, "VImg"), ds = q()({ name: "VImg", directives: { intersect: ko }, props: cs(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const o = ue(""), a = W(), r = ue(e.eager ? "loading" : "idle"), s = ue(), i = ue(), u = g(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), c = g(() => u.value.aspect || s.value / i.value || 0);
  function v(m) {
    if ((!e.eager || !m) && (!Ql || m || e.eager)) {
      if (r.value = "loading", u.value.lazySrc) {
        const b = new Image();
        b.src = u.value.lazySrc, h(b, null);
      }
      u.value.src && Ee(() => {
        var b, $;
        if (t("loadstart", ((b = a.value) == null ? void 0 : b.currentSrc) || u.value.src), ($ = a.value) == null ? void 0 : $.complete) {
          if (a.value.naturalWidth || f(), r.value === "error")
            return;
          c.value || h(a.value, null), p();
        } else
          c.value || h(a.value), y();
      });
    }
  }
  function p() {
    var m;
    y(), r.value = "loaded", t("load", ((m = a.value) == null ? void 0 : m.currentSrc) || u.value.src);
  }
  function f() {
    var m;
    r.value = "error", t("error", ((m = a.value) == null ? void 0 : m.currentSrc) || u.value.src);
  }
  function y() {
    const m = a.value;
    m && (o.value = m.currentSrc || m.src);
  }
  Z(() => e.src, () => {
    v(r.value !== "idle");
  }), Z(c, (m, b) => {
    !m && b && a.value && h(a.value);
  }), Wl(() => v());
  let k = -1;
  function h(m) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const $ = () => {
      clearTimeout(k);
      const { naturalHeight: A, naturalWidth: E } = m;
      A || E ? (s.value = E, i.value = A) : m.complete || r.value !== "loading" || b == null ? (m.currentSrc.endsWith(".svg") || m.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : k = window.setTimeout($, b);
    };
    $();
  }
  const P = g(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), B = () => {
    var $;
    if (!u.value.src || r.value === "idle")
      return null;
    const m = d("img", { class: ["v-img__img", P.value], src: u.value.src, srcset: u.value.srcset, alt: e.alt, sizes: e.sizes, ref: a, onLoad: p, onError: f }, null), b = ($ = n.sources) == null ? void 0 : $.call(n);
    return d(Ke, { transition: e.transition, appear: !0 }, { default: () => [Ae(b ? d("picture", { class: "v-img__picture" }, [b, m]) : m, [[gt, r.value === "loaded"]])] });
  }, x = () => d(Ke, { transition: e.transition }, { default: () => [u.value.lazySrc && r.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", P.value], src: u.value.lazySrc, alt: e.alt }, null)] }), F = () => n.placeholder ? d(Ke, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !n.error) && d("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null, w = () => n.error ? d(Ke, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && d("div", { class: "v-img__error" }, [n.error()])] }) : null, V = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, C = ue(!1);
  {
    const m = Z(c, (b) => {
      b && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          C.value = !0;
        });
      }), m());
    });
  }
  return te(() => {
    const [m] = zn.filterProps(e);
    return Ae(d(zn, J({ class: ["v-img", { "v-img--booting": !C.value }, e.class], style: e.style }, m, { aspectRatio: c.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(ae, null, [d(B, null, null), d(x, null, null), d(V, null, null), d(F, null, null), d(w, null, null)]), default: n.default }), [[qe("intersect"), { handler: v, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: a, state: r, naturalWidth: s, naturalHeight: i };
} }), ps = L({ start: Boolean, end: Boolean, icon: pe, image: String, ...se(), ...Ge(), ...Je(), ...Nt(), ...we(), ...be(), ...ot({ variant: "flat" }) }, "VAvatar"), nl = q()({ name: "VAvatar", props: ps(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { colorClasses: o, colorStyles: a, variantClasses: r } = fl(e), { densityClasses: s } = We(e), { roundedClasses: i } = Ze(e), { sizeClasses: u, sizeStyles: c } = jt(e);
  return te(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, o.value, s.value, i.value, u.value, r.value, e.class], style: [a.value, c.value, e.style] }, { default: () => {
    var v;
    return [e.image ? d(ds, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(he, { key: "icon", icon: e.icon }, null) : (v = t.default) == null ? void 0 : v.call(t), vl(!1, "v-avatar")];
  } })), {};
} }), Co = Symbol.for("vuetify:v-chip-group"), vs = L({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: at }, ...se(), ...Ya({ selectedClass: "v-chip--selected" }), ...we(), ...be(), ...ot({ variant: "tonal" }) }, "VChipGroup");
q()({ name: "VChipGroup", props: vs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { isSelected: o, select: a, next: r, prev: s, selected: i } = Za(e, Co);
  return Xe({ VChip: { color: G(e, "color"), disabled: G(e, "disabled"), filter: G(e, "filter"), variant: G(e, "variant") } }), te(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, n.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: o, select: a, next: r, prev: s, selected: i.value })];
  } })), {};
} });
const fs = L({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Le(), onClickOnce: Le(), ...Dt(), ...se(), ...Ge(), ...Lt(), ...Xa(), ...Je(), ...ln(), ...Nt(), ...we({ tag: "span" }), ...be(), ...ot({ variant: "tonal" }) }, "VChip"), ms = q()({ name: "VChip", directives: { Ripple: ml }, props: fs(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { t: a } = yt(), { borderClasses: r } = Tt(e), { colorClasses: s, colorStyles: i, variantClasses: u } = fl(e), { densityClasses: c } = We(e), { elevationClasses: v } = Mt(e), { roundedClasses: p } = Ze(e), { sizeClasses: f } = jt(e), { themeClasses: y } = Ce(e), k = fe(e, "modelValue"), h = Ja(e, Co, !1), P = tn(e, t), B = g(() => e.link !== !1 && P.isLink.value), x = g(() => !e.disabled && e.link !== !1 && (!!h || e.link || P.isClickable.value)), F = g(() => ({ "aria-label": a(e.closeLabel), onClick(C) {
    k.value = !1, n("click:close", C);
  } }));
  function w(C) {
    var m;
    n("click", C), x.value && ((m = P.navigate) == null || m.call(P, C), h == null || h.toggle());
  }
  function V(C) {
    C.key !== "Enter" && C.key !== " " || (C.preventDefault(), w(C));
  }
  return () => {
    const C = P.isLink.value ? "a" : e.tag, m = !(!e.appendIcon && !e.appendAvatar), b = !(!m && !o.append), $ = !(!o.close && !e.closable), A = !(!o.filter && !e.filter) && h, E = !(!e.prependIcon && !e.prependAvatar), _ = !(!E && !o.prepend), I = !h || h.isSelected.value;
    return k.value && Ae(d(C, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": x.value, "v-chip--filter": A, "v-chip--pill": e.pill }, y.value, r.value, I ? s.value : void 0, c.value, v.value, p.value, f.value, u.value, h == null ? void 0 : h.selectedClass.value, e.class], style: [I ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: P.href.value, tabindex: x.value ? 0 : void 0, onClick: w, onKeydown: x.value && !B.value && V }, { default: () => {
      var T;
      return [vl(x.value, "v-chip"), A && d(Sa, { key: "filter" }, { default: () => [Ae(d("div", { class: "v-chip__filter" }, [o.filter ? Ae(d(Ve, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[qe("slot"), o.filter, "default"]]) : d(he, { key: "filter-icon", icon: e.filterIcon }, null)]), [[gt, h.isSelected.value]])] }), _ && d("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? d(Ve, { key: "prepend-defaults", disabled: !E, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : d(ae, null, [e.prependIcon && d(he, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(nl, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((T = o.default) == null ? void 0 : T.call(o, { isSelected: h == null ? void 0 : h.isSelected.value, selectedClass: h == null ? void 0 : h.selectedClass.value, select: h == null ? void 0 : h.select, toggle: h == null ? void 0 : h.toggle, value: h == null ? void 0 : h.value.value, disabled: e.disabled })) ?? e.text]), b && d("div", { key: "append", class: "v-chip__append" }, [o.append ? d(Ve, { key: "append-defaults", disabled: !m, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : d(ae, null, [e.appendIcon && d(he, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(nl, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), $ && d("div", J({ key: "close", class: "v-chip__close" }, F.value), [o.close ? d(Ve, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : d(he, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[qe("ripple"), x.value && e.ripple, null]]);
  };
} }), Nl = Symbol.for("vuetify:list");
function Bo() {
  const e = ve(Nl, { hasPrepend: ue(!1), updateHasPrepend: () => null }), l = { hasPrepend: ue(!1), updateHasPrepend: (t) => {
    t && (l.hasPrepend.value = t);
  } };
  return ye(Nl, l), e;
}
function Po() {
  return ve(Nl, null);
}
const gs = { open: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (t) {
    const a = /* @__PURE__ */ new Set();
    a.add(l);
    let r = o.get(l);
    for (; r != null; )
      a.add(r), r = o.get(r);
    return a;
  }
  return n.delete(l), n;
}, select: () => null }, _o = { open: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (t) {
    let a = o.get(l);
    for (n.add(l); a != null && a !== l; )
      n.add(a), a = o.get(a);
    return n;
  }
  return n.delete(l), n;
}, select: () => null }, ys = { open: _o.open, select: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (!t)
    return n;
  const a = [];
  let r = o.get(l);
  for (; r != null; )
    a.push(r), r = o.get(r);
  return new Set(a);
} }, jl = (e) => {
  const l = { select: (t) => {
    let { id: n, value: o, selected: a } = t;
    if (n = Ue(n), e && !o) {
      const r = Array.from(a.entries()).reduce((s, i) => {
        let [u, c] = i;
        return c === "on" ? [...s, u] : s;
      }, []);
      if (r.length === 1 && r[0] === n)
        return a;
    }
    return a.set(n, o ? "on" : "off"), a;
  }, in: (t, n, o) => {
    let a = /* @__PURE__ */ new Map();
    for (const r of t || [])
      a = l.select({ id: r, value: !0, selected: new Map(a), children: n, parents: o });
    return a;
  }, out: (t) => {
    const n = [];
    for (const [o, a] of t.entries())
      a === "on" && n.push(o);
    return n;
  } };
  return l;
}, Gn = (e) => {
  const l = jl(e);
  return { select: (t) => {
    let { selected: n, id: o, ...a } = t;
    o = Ue(o);
    const r = n.has(o) ? /* @__PURE__ */ new Map([[o, n.get(o)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...a, id: o, selected: r });
  }, in: (t, n, o) => {
    let a = /* @__PURE__ */ new Map();
    return t != null && t.length && (a = l.in(t.slice(0, 1), n, o)), a;
  }, out: (t, n, o) => l.out(t, n, o) };
}, Bt = Symbol.for("vuetify:nested"), Fo = { id: ue(), root: { register: () => null, unregister: () => null, parents: W(/* @__PURE__ */ new Map()), children: W(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: W(/* @__PURE__ */ new Set()), selected: W(/* @__PURE__ */ new Map()), selectedValues: W([]) } }, hs = L({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), bs = (e) => {
  let l = !1;
  const t = W(/* @__PURE__ */ new Map()), n = W(/* @__PURE__ */ new Map()), o = fe(e, "opened", e.opened, (v) => new Set(v), (v) => [...v.values()]), a = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((v) => {
          const p = Gn(v);
          return { select: (f) => {
            let { id: y, selected: k, children: h, ...P } = f;
            return y = Ue(y), h.has(y) ? k : p.select({ id: y, selected: k, children: h, ...P });
          }, in: p.in, out: p.out };
        })(e.mandatory);
      case "leaf":
        return ((v) => {
          const p = jl(v);
          return { select: (f) => {
            let { id: y, selected: k, children: h, ...P } = f;
            return y = Ue(y), h.has(y) ? k : p.select({ id: y, selected: k, children: h, ...P });
          }, in: p.in, out: p.out };
        })(e.mandatory);
      case "independent":
        return jl(e.mandatory);
      case "single-independent":
        return Gn(e.mandatory);
      default:
        return ((v) => {
          const p = { select: (f) => {
            let { id: y, value: k, selected: h, children: P, parents: B } = f;
            y = Ue(y);
            const x = new Map(h), F = [y];
            for (; F.length; ) {
              const V = F.shift();
              h.set(V, k ? "on" : "off"), P.has(V) && F.push(...P.get(V));
            }
            let w = B.get(y);
            for (; w; ) {
              const V = P.get(w), C = V.every((b) => h.get(b) === "on"), m = V.every((b) => !h.has(b) || h.get(b) === "off");
              h.set(w, C ? "on" : m ? "off" : "indeterminate"), w = B.get(w);
            }
            return v && !k && Array.from(h.entries()).reduce((C, m) => {
              let [b, $] = m;
              return $ === "on" ? [...C, b] : C;
            }, []).length === 0 ? x : h;
          }, in: (f, y, k) => {
            let h = /* @__PURE__ */ new Map();
            for (const P of f || [])
              h = p.select({ id: P, value: !0, selected: new Map(h), children: y, parents: k });
            return h;
          }, out: (f, y) => {
            const k = [];
            for (const [h, P] of f.entries())
              P !== "on" || y.has(h) || k.push(h);
            return k;
          } };
          return p;
        })(e.mandatory);
    }
  }), r = g(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return ys;
      case "single":
        return gs;
      default:
        return _o;
    }
  }), s = fe(e, "selected", e.selected, (v) => a.value.in(v, t.value, n.value), (v) => a.value.out(v, t.value, n.value));
  function i(v) {
    const p = [];
    let f = v;
    for (; f != null; )
      p.unshift(f), f = n.value.get(f);
    return p;
  }
  nt(() => {
    l = !0;
  });
  const u = xe("nested"), c = { id: ue(), root: { opened: o, selected: s, selectedValues: g(() => {
    const v = [];
    for (const [p, f] of s.value.entries())
      f === "on" && v.push(p);
    return v;
  }), register: (v, p, f) => {
    p && v !== p && n.value.set(v, p), f && t.value.set(v, []), p != null && t.value.set(p, [...t.value.get(p) || [], v]);
  }, unregister: (v) => {
    if (l)
      return;
    t.value.delete(v);
    const p = n.value.get(v);
    if (p) {
      const f = t.value.get(p) ?? [];
      t.value.set(p, f.filter((y) => y !== v));
    }
    n.value.delete(v), o.value.delete(v);
  }, open: (v, p, f) => {
    u.emit("click:open", { id: v, value: p, path: i(v), event: f });
    const y = r.value.open({ id: v, value: p, opened: new Set(o.value), children: t.value, parents: n.value, event: f });
    y && (o.value = y);
  }, openOnSelect: (v, p, f) => {
    const y = r.value.select({ id: v, value: p, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: n.value, event: f });
    y && (o.value = y);
  }, select: (v, p, f) => {
    u.emit("click:select", { id: v, value: p, path: i(v), event: f });
    const y = a.value.select({ id: v, value: p, selected: new Map(s.value), children: t.value, parents: n.value, event: f });
    y && (s.value = y), c.root.openOnSelect(v, p, f);
  }, children: t, parents: n } };
  return ye(Bt, c), c.root;
}, Ao = (e, l) => {
  const t = ve(Bt, Fo), n = Symbol(Me()), o = g(() => e.value !== void 0 ? e.value : n), a = { ...t, id: o, open: (r, s) => t.root.open(o.value, r, s), openOnSelect: (r, s) => t.root.openOnSelect(o.value, r, s), isOpen: g(() => t.root.opened.value.has(o.value)), parent: g(() => t.root.parents.value.get(o.value)), select: (r, s) => t.root.select(o.value, r, s), isSelected: g(() => t.root.selected.value.get(Ue(o.value)) === "on"), isIndeterminate: g(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: g(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, l), nt(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), l && ye(Bt, a), a;
}, Ss = dt({ name: "VListGroupActivator", setup(e, l) {
  let { slots: t } = l;
  return (() => {
    const n = ve(Bt, Fo);
    ye(Bt, { ...n, isGroupActivator: !0 });
  })(), () => {
    var n;
    return (n = t.default) == null ? void 0 : n.call(t);
  };
} }), xs = L({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...we() }, "VListGroup"), Wn = q()({ name: "VListGroup", props: xs(), setup(e, l) {
  let { slots: t } = l;
  const { isOpen: n, open: o, id: a } = Ao(G(e, "value"), !0), r = g(() => `v-list-group--id-${String(a.value)}`), s = Po(), { isBooted: i } = function() {
    const f = ue(!1);
    return Ft(() => {
      window.requestAnimationFrame(() => {
        f.value = !0;
      });
    }), { ssrBootStyles: g(() => f.value ? void 0 : { transition: "none !important" }), isBooted: Gl(f) };
  }();
  function u(f) {
    o(!n.value, f);
  }
  const c = g(() => ({ onClick: u, class: "v-list-group__header", id: r.value })), v = g(() => n.value ? e.collapseIcon : e.expandIcon), p = g(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return te(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style }, { default: () => [t.activator && d(Ve, { defaults: p.value }, { default: () => [d(Ss, null, { default: () => [t.activator({ props: c.value, isOpen: n.value })] })] }), d(Ke, { transition: { component: xr }, disabled: !i.value }, { default: () => {
    var f;
    return [Ae(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": r.value }, [(f = t.default) == null ? void 0 : f.call(t)]), [[gt, n.value]])];
  } })] })), {};
} }), ws = va("v-list-item-subtitle"), ks = va("v-list-item-title"), Cs = L({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Le(), onClickOnce: Le(), ...Dt(), ...se(), ...Ge(), ...Vt(), ...Lt(), ...Je(), ...ln(), ...we(), ...be(), ...ot({ variant: "text" }) }, "VListItem"), al = q()({ name: "VListItem", directives: { Ripple: ml }, props: Cs(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const a = tn(e, t), r = g(() => e.value === void 0 ? a.href.value : e.value), { select: s, isSelected: i, isIndeterminate: u, isGroupActivator: c, root: v, parent: p, openOnSelect: f } = Ao(r, !1), y = Po(), k = g(() => {
    var D;
    return e.active !== !1 && (e.active || ((D = a.isActive) == null ? void 0 : D.value) || i.value);
  }), h = g(() => e.link !== !1 && a.isLink.value), P = g(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || e.value != null && !!y)), B = g(() => e.rounded || e.nav), x = g(() => e.color ?? e.activeColor), F = g(() => ({ color: k.value ? x.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Z(() => {
    var D;
    return (D = a.isActive) == null ? void 0 : D.value;
  }, (D) => {
    D && p.value != null && v.open(p.value, !0), D && f(D);
  }, { immediate: !0 });
  const { themeClasses: w } = Ce(e), { borderClasses: V } = Tt(e), { colorClasses: C, colorStyles: m, variantClasses: b } = fl(F), { densityClasses: $ } = We(e), { dimensionStyles: A } = Et(e), { elevationClasses: E } = Mt(e), { roundedClasses: _ } = Ze(B), I = g(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), T = g(() => ({ isActive: k.value, select: s, isSelected: i.value, isIndeterminate: u.value }));
  function M(D) {
    var H;
    o("click", D), !c && P.value && ((H = a.navigate) == null || H.call(a, D), e.value != null && s(!i.value, D));
  }
  function z(D) {
    D.key !== "Enter" && D.key !== " " || (D.preventDefault(), M(D));
  }
  return te(() => {
    const D = h.value ? "a" : e.tag, H = n.title || e.title, R = n.subtitle || e.subtitle, K = !(!e.appendAvatar && !e.appendIcon), O = !(!K && !n.append), j = !(!e.prependAvatar && !e.prependIcon), N = !(!j && !n.prepend);
    var Y, ne;
    return y == null || y.updateHasPrepend(N), e.activeColor && (Y = "active-color", ne = ["color", "base-color"], ne = Array.isArray(ne) ? ne.slice(0, -1).map((le) => `'${le}'`).join(", ") + ` or '${ne.at(-1)}'` : `'${ne}'`, ul(`[Vuetify UPGRADE] '${Y}' is deprecated, use ${ne} instead.`)), Ae(d(D, { class: ["v-list-item", { "v-list-item--active": k.value, "v-list-item--disabled": e.disabled, "v-list-item--link": P.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !N && (y == null ? void 0 : y.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && k.value }, w.value, V.value, C.value, $.value, E.value, I.value, _.value, b.value, e.class], style: [m.value, A.value, e.style], href: a.href.value, tabindex: P.value ? y ? -2 : 0 : void 0, onClick: M, onKeydown: P.value && !h.value && z }, { default: () => {
      var le;
      return [vl(P.value || k.value, "v-list-item"), N && d("div", { key: "prepend", class: "v-list-item__prepend" }, [n.prepend ? d(Ve, { key: "prepend-defaults", disabled: !j, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.prepend) == null ? void 0 : Q.call(n, T.value)];
      } }) : d(ae, null, [e.prependAvatar && d(nl, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(he, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [H && d(ks, { key: "title" }, { default: () => {
        var Q;
        return [((Q = n.title) == null ? void 0 : Q.call(n, { title: e.title })) ?? e.title];
      } }), R && d(ws, { key: "subtitle" }, { default: () => {
        var Q;
        return [((Q = n.subtitle) == null ? void 0 : Q.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (le = n.default) == null ? void 0 : le.call(n, T.value)]), O && d("div", { key: "append", class: "v-list-item__append" }, [n.append ? d(Ve, { key: "append-defaults", disabled: !K, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.append) == null ? void 0 : Q.call(n, T.value)];
      } }) : d(ae, null, [e.appendIcon && d(he, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(nl, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[qe("ripple"), P.value && e.ripple]]);
  }), {};
} }), Bs = L({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...we() }, "VListSubheader"), Ps = q()({ name: "VListSubheader", props: Bs(), setup(e, l) {
  let { slots: t } = l;
  const { textColorClasses: n, textColorStyles: o } = ze(G(e, "color"));
  return te(() => {
    const a = !(!t.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var r;
      return [a && d("div", { class: "v-list-subheader__text" }, [((r = t.default) == null ? void 0 : r.call(t)) ?? e.title])];
    } });
  }), {};
} }), _s = L({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...be() }, "VDivider"), Fs = q()({ name: "VDivider", props: _s(), setup(e, l) {
  let { attrs: t } = l;
  const { themeClasses: n } = Ce(e), { textColorClasses: o, textColorStyles: a } = ze(G(e, "color")), r = g(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = X(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = X(e.thickness)), s;
  });
  return te(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, n.value, o.value, e.class], style: [r.value, a.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), As = L({ items: Array }, "VListChildren"), $o = q()({ name: "VListChildren", props: As(), setup(e, l) {
  let { slots: t } = l;
  return Bo(), () => {
    var n, o;
    return ((n = t.default) == null ? void 0 : n.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((a) => {
      var f, y;
      let { children: r, props: s, type: i, raw: u } = a;
      if (i === "divider")
        return ((f = t.divider) == null ? void 0 : f.call(t, { props: s })) ?? d(Fs, s, null);
      if (i === "subheader")
        return ((y = t.subheader) == null ? void 0 : y.call(t, { props: s })) ?? d(Ps, s, null);
      const c = { subtitle: t.subtitle ? (k) => {
        var h;
        return (h = t.subtitle) == null ? void 0 : h.call(t, { ...k, item: u });
      } : void 0, prepend: t.prepend ? (k) => {
        var h;
        return (h = t.prepend) == null ? void 0 : h.call(t, { ...k, item: u });
      } : void 0, append: t.append ? (k) => {
        var h;
        return (h = t.append) == null ? void 0 : h.call(t, { ...k, item: u });
      } : void 0, title: t.title ? (k) => {
        var h;
        return (h = t.title) == null ? void 0 : h.call(t, { ...k, item: u });
      } : void 0 }, [v, p] = Wn.filterProps(s);
      return r ? d(Wn, J({ value: s == null ? void 0 : s.value }, v), { activator: (k) => {
        let { props: h } = k;
        return t.header ? t.header({ props: { ...s, ...h } }) : d(al, J(s, h), c);
      }, default: () => d($o, { items: r }, t) }) : t.item ? t.item({ props: s }) : d(al, s, c);
    }));
  };
} }), Vo = L({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Eo(e, l) {
  const t = Se(l, e.itemTitle, l), n = e.returnObject ? l : Se(l, e.itemValue, t), o = Se(l, e.itemChildren), a = { title: t, value: n, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? $t(l, ["children"])[1] : l : Se(l, e.itemProps) };
  return { title: String(a.title ?? ""), value: a.value, props: a, children: Array.isArray(o) ? Io(e, o) : void 0, raw: l };
}
function Io(e, l) {
  const t = [];
  for (const n of l)
    t.push(Eo(e, n));
  return t;
}
function $s(e) {
  return function(l, t) {
    function n(a) {
      return a.filter((r) => r !== null || l.value.some((s) => s.value === null)).map((r) => l.value.find((s) => at(r, s.value)) ?? t(r));
    }
    function o(a) {
      return a.map((r) => {
        let { value: s } = r;
        return s;
      });
    }
    return { items: l, transformIn: n, transformOut: o };
  }(g(() => Io(e, e.items)), (l) => Eo(e, l));
}
function Vs(e, l) {
  const t = Se(l, e.itemType, "item"), n = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : Se(l, e.itemTitle), o = Se(l, e.itemValue, void 0), a = Se(l, e.itemChildren), r = { title: n, value: o, ...e.itemProps === !0 ? $t(l, ["children"])[1] : Se(l, e.itemProps) };
  return { type: t, title: r.title, value: r.value, props: r, children: t === "item" && a ? Oo(e, a) : void 0, raw: l };
}
function Oo(e, l) {
  const t = [];
  for (const n of l)
    t.push(Vs(e, n));
  return t;
}
const Es = L({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...hs({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Dt(), ...se(), ...Ge(), ...Vt(), ...Lt(), itemType: { type: String, default: "type" }, ...Vo(), ...Je(), ...we(), ...be(), ...ot({ variant: "text" }) }, "VList"), Is = q()({ name: "VList", props: Es(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { items: n } = function(b) {
    return { items: g(() => Oo(b, b.items)) };
  }(e), { themeClasses: o } = Ce(e), { backgroundColorClasses: a, backgroundColorStyles: r } = pt(G(e, "bgColor")), { borderClasses: s } = Tt(e), { densityClasses: i } = We(e), { dimensionStyles: u } = Et(e), { elevationClasses: c } = Mt(e), { roundedClasses: v } = Ze(e), { open: p, select: f } = bs(e), y = g(() => e.lines ? `v-list--${e.lines}-line` : void 0), k = G(e, "activeColor"), h = G(e, "baseColor"), P = G(e, "color");
  Bo(), Xe({ VListGroup: { activeColor: k, baseColor: h, color: P }, VListItem: { activeClass: G(e, "activeClass"), activeColor: k, baseColor: h, color: P, density: G(e, "density"), disabled: G(e, "disabled"), lines: G(e, "lines"), nav: G(e, "nav"), variant: G(e, "variant") } });
  const B = ue(!1), x = W();
  function F(b) {
    B.value = !0;
  }
  function w(b) {
    B.value = !1;
  }
  function V(b) {
    var $;
    B.value || b.relatedTarget && (($ = x.value) != null && $.contains(b.relatedTarget)) || m();
  }
  function C(b) {
    if (x.value) {
      if (b.key === "ArrowDown")
        m("next");
      else if (b.key === "ArrowUp")
        m("prev");
      else if (b.key === "Home")
        m("first");
      else {
        if (b.key !== "End")
          return;
        m("last");
      }
      b.preventDefault();
    }
  }
  function m(b) {
    if (x.value)
      return Xt(x.value, b);
  }
  return te(() => d(e.tag, { ref: x, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, a.value, s.value, i.value, c.value, y.value, v.value, e.class], style: [r.value, u.value, e.style], tabindex: e.disabled || B.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: F, onFocusout: w, onFocus: V, onKeydown: C }, { default: () => [d($o, { items: n.value }, t)] })), { open: p, select: f, focus: m };
} }), Os = L({ id: String, ...Kl(Ba({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ha } }), ["absolute"]) }, "VMenu"), Ds = q()({ name: "VMenu", props: Os(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { scopeId: o } = ka(), a = Me(), r = g(() => e.id || `v-menu-${a}`), s = W(), i = ve(Tl, null), u = ue(0);
  function c() {
    i == null || i.closeParents();
  }
  function v(y) {
    var k, h;
    e.disabled || y.key === "Tab" && (n.value = !1, (h = (k = s.value) == null ? void 0 : k.activatorEl) == null || h.focus());
  }
  function p(y) {
    var h;
    if (e.disabled)
      return;
    const k = (h = s.value) == null ? void 0 : h.contentEl;
    k && n.value ? y.key === "ArrowDown" ? (y.preventDefault(), Xt(k, "next")) : y.key === "ArrowUp" && (y.preventDefault(), Xt(k, "prev")) : ["ArrowDown", "ArrowUp"].includes(y.key) && (n.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => p(y))));
  }
  ye(Tl, { register() {
    ++u.value;
  }, unregister() {
    --u.value;
  }, closeParents() {
    setTimeout(() => {
      u.value || (n.value = !1, i == null || i.closeParents());
    }, 40);
  } }), Z(n, (y) => {
    y ? i == null || i.register() : i == null || i.unregister();
  });
  const f = g(() => J({ "aria-haspopup": "menu", "aria-expanded": String(n.value), "aria-owns": r.value, onKeydown: p }, e.activatorProps));
  return te(() => {
    const [y] = On.filterProps(e);
    return d(On, J({ ref: s, class: ["v-menu", e.class], style: e.style }, y, { modelValue: n.value, "onUpdate:modelValue": (k) => n.value = k, absolute: !0, activatorProps: f.value, "onClick:outside": c, onKeydown: v }, o), { activator: t.activator, default: function() {
      for (var k = arguments.length, h = new Array(k), P = 0; P < k; P++)
        h[P] = arguments[P];
      return d(Ve, { root: "VMenu" }, { default: () => {
        var B;
        return [(B = t.default) == null ? void 0 : B.call(t, ...h)];
      } });
    } });
  }), nn({ id: r, ΨopenChildren: u }, s);
} }), Ts = L({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...Ot({ transition: { component: ba } }) }, "VCounter"), Ls = q()({ name: "VCounter", functional: !0, props: Ts(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return te(() => d(Ke, { transition: e.transition }, { default: () => [Ae(d("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: n.value, max: e.max, value: e.value }) : n.value]), [[gt, e.active]])] })), {};
} }), Ms = L({ floating: Boolean, ...se() }, "VFieldLabel"), zt = q()({ name: "VFieldLabel", props: Ms(), setup(e, l) {
  let { slots: t } = l;
  return te(() => d(fo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Ns = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Do = L({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Ns.includes(e) }, "onClick:clear": Le(), "onClick:appendInner": Le(), "onClick:prependInner": Le(), ...se(), ...an(), ...Je(), ...be() }, "VField"), Kn = q()({ name: "VField", inheritAttrs: !1, props: { id: String, ...So(), ...Do() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { themeClasses: a } = Ce(e), { loaderClasses: r } = on(e), { focusClasses: s, isFocused: i, focus: u, blur: c } = rn(e), { InputIcon: v } = bo(e), { roundedClasses: p } = Ze(e), { rtlClasses: f } = It(), y = g(() => e.dirty || e.active), k = g(() => !(e.singleLine || !e.label && !o.label)), h = Me(), P = g(() => e.id || `input-${h}`), B = g(() => `${P.value}-messages`), x = W(), F = W(), w = W(), V = g(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: C, backgroundColorStyles: m } = pt(G(e, "bgColor")), { textColorClasses: b, textColorStyles: $ } = ze(g(() => e.error || e.disabled ? void 0 : y.value && i.value ? e.color : e.baseColor));
  Z(y, (_) => {
    if (k.value) {
      const I = x.value.$el, T = F.value.$el;
      requestAnimationFrame(() => {
        const M = Yl(I), z = T.getBoundingClientRect(), D = z.x - M.x, H = z.y - M.y - (M.height / 2 - z.height / 2), R = z.width / 0.75, K = Math.abs(R - M.width) > 1 ? { maxWidth: X(R) } : void 0, O = getComputedStyle(I), j = getComputedStyle(T), N = 1e3 * parseFloat(O.transitionDuration) || 150, Y = parseFloat(j.getPropertyValue("--v-field-label-scale")), ne = j.getPropertyValue("color");
        I.style.visibility = "visible", T.style.visibility = "hidden", st(I, { transform: `translate(${D}px, ${H}px) scale(${Y})`, color: ne, ...K }, { duration: N, easing: Jt, direction: _ ? "normal" : "reverse" }).finished.then(() => {
          I.style.removeProperty("visibility"), T.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const A = g(() => ({ isActive: y, isFocused: i, controlRef: w, blur: c, focus: u }));
  function E(_) {
    _.target !== document.activeElement && _.preventDefault();
  }
  return te(() => {
    var D, H, R;
    const _ = e.variant === "outlined", I = o["prepend-inner"] || e.prependInnerIcon, T = !(!e.clearable && !o.clear), M = !!(o["append-inner"] || e.appendInnerIcon || T), z = o.label ? o.label({ ...A.value, label: e.label, props: { for: P.value } }) : e.label;
    return d("div", J({ class: ["v-field", { "v-field--active": y.value, "v-field--appended": M, "v-field--center-affix": e.centerAffix ?? !V.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": I, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !z, [`v-field--variant-${e.variant}`]: !0 }, a.value, C.value, s.value, r.value, p.value, f.value, e.class], style: [m.value, $.value, e.style], onClick: E }, t), [d("div", { class: "v-field__overlay" }, null), d(oo, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), I && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(v, { key: "prepend-icon", name: "prependInner" }, null), (D = o["prepend-inner"]) == null ? void 0 : D.call(o, A.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && k.value && d(zt, { key: "floating-label", ref: F, class: [b.value], floating: !0, for: P.value }, { default: () => [z] }), d(zt, { ref: x, for: P.value }, { default: () => [z] }), (H = o.default) == null ? void 0 : H.call(o, { ...A.value, props: { id: P.value, class: "v-field__input", "aria-describedby": B.value }, focus: u, blur: c })]), T && d(Sa, { key: "clear" }, { default: () => [Ae(d("div", { class: "v-field__clearable", onMousedown: (K) => {
      K.preventDefault(), K.stopPropagation();
    } }, [o.clear ? o.clear() : d(v, { name: "clear" }, null)]), [[gt, e.dirty]])] }), M && d("div", { key: "append", class: "v-field__append-inner" }, [(R = o["append-inner"]) == null ? void 0 : R.call(o, A.value), e.appendInnerIcon && d(v, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", b.value] }, [_ && d(ae, null, [d("div", { class: "v-field__outline__start" }, null), k.value && d("div", { class: "v-field__outline__notch" }, [d(zt, { ref: F, floating: !0, for: P.value }, { default: () => [z] })]), d("div", { class: "v-field__outline__end" }, null)]), V.value && k.value && d(zt, { ref: F, floating: !0, for: P.value }, { default: () => [z] })])]);
  }), { controlRef: w };
} }), js = ["color", "file", "time", "date", "datetime-local", "week", "month"], To = L({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...sn(), ...Do() }, "VTextField"), Rl = q()({ name: "VTextField", directives: { Intersect: ko }, inheritAttrs: !1, props: To(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const a = fe(e, "modelValue"), { isFocused: r, focus: s, blur: i } = rn(e), u = g(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : (a.value ?? "").toString().length), c = g(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), v = g(() => ["plain", "underlined"].includes(e.variant));
  function p(V, C) {
    var m, b;
    e.autofocus && V && ((b = (m = C[0].target) == null ? void 0 : m.focus) == null || b.call(m));
  }
  const f = W(), y = W(), k = W(), h = g(() => js.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
  function P() {
    var V;
    k.value !== document.activeElement && ((V = k.value) == null || V.focus()), r.value || s();
  }
  function B(V) {
    n("mousedown:control", V), V.target !== k.value && (P(), V.preventDefault());
  }
  function x(V) {
    P(), n("click:control", V);
  }
  function F(V) {
    V.stopPropagation(), P(), Ee(() => {
      a.value = null, function(C) {
        for (var m = arguments.length, b = new Array(m > 1 ? m - 1 : 0), $ = 1; $ < m; $++)
          b[$ - 1] = arguments[$];
        if (Array.isArray(C))
          for (const A of C)
            A(...b);
        else
          typeof C == "function" && C(...b);
      }(e["onClick:clear"], V);
    });
  }
  function w(V) {
    var m;
    const C = V.target;
    if (a.value = C.value, ((m = e.modelModifiers) == null ? void 0 : m.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const b = [C.selectionStart, C.selectionEnd];
      Ee(() => {
        C.selectionStart = b[0], C.selectionEnd = b[1];
      });
    }
  }
  return te(() => {
    const V = !!(o.counter || e.counter || e.counterValue), C = !(!V && !o.details), [m, b] = Ul(t), [{ modelValue: $, ...A }] = ll.filterProps(e), [E] = function(_) {
      return $t(_, Object.keys(Kn.props).filter((I) => !Vl(I) && I !== "class" && I !== "style"));
    }(e);
    return d(ll, J({ ref: f, modelValue: a.value, "onUpdate:modelValue": (_) => a.value = _, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, m, A, { centerAffix: !v.value, focused: r.value }), { ...o, default: (_) => {
      let { id: I, isDisabled: T, isDirty: M, isReadonly: z, isValid: D } = _;
      return d(Kn, J({ ref: y, onMousedown: B, onClick: x, "onClick:clear": F, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, E, { id: I.value, active: h.value || M.value, dirty: M.value || e.dirty, disabled: T.value, focused: r.value, error: D.value === !1 }), { ...o, default: (H) => {
        let { props: { class: R, ...K } } = H;
        const O = Ae(d("input", J({ ref: k, value: a.value, onInput: w, autofocus: e.autofocus, readonly: z.value, disabled: T.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: P, onBlur: i }, K, b), null), [[qe("intersect"), { handler: p }, null, { once: !0 }]]);
        return d(ae, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), o.default ? d("div", { class: R, "data-no-activator": "" }, [o.default(), O]) : dr(O, { class: R }), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: C ? (_) => {
      var I;
      return d(ae, null, [(I = o.details) == null ? void 0 : I.call(o, _), V && d(ae, null, [d("span", null, null), d(Ls, { active: e.persistentCounter || r.value, value: u.value, max: c.value }, o.counter)])]);
    } : void 0 });
  }), nn({}, f, y, k);
} }), Rs = L({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: at }, ...Vo({ itemChildren: !1 }) }, "Select"), zs = L({ ...Rs(), ...Kl(To({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...Ot({ transition: { component: ha } }) }, "VSelect"), Hs = q()({ name: "VSelect", props: zs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { t: n } = yt(), o = W(), a = W(), r = fe(e, "menu"), s = g({ get: () => r.value, set: (_) => {
    var I;
    r.value && !_ && ((I = a.value) != null && I.ΨopenChildren) || (r.value = _);
  } }), { items: i, transformIn: u, transformOut: c } = $s(e), v = fe(e, "modelValue", [], (_) => u(_ === null ? [null] : Oe(_)), (_) => {
    const I = c(_);
    return e.multiple ? I : I[0] ?? null;
  }), p = xo(), f = g(() => v.value.map((_) => i.value.find((I) => e.valueComparator(I.value, _.value)) || _)), y = g(() => f.value.map((_) => _.props.value)), k = ue(!1);
  let h, P = "";
  const B = g(() => e.hideSelected ? i.value.filter((_) => !f.value.some((I) => I === _)) : i.value), x = g(() => e.hideNoData && !i.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), F = W();
  function w(_) {
    e.openOnClear && (s.value = !0);
  }
  function V() {
    x.value || (s.value = !s.value);
  }
  function C(_) {
    var M, z;
    if (e.readonly || p != null && p.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(_.key) && _.preventDefault(), ["Enter", "ArrowDown", " "].includes(_.key) && (s.value = !0), ["Escape", "Tab"].includes(_.key) && (s.value = !1), _.key === "Home" ? (M = F.value) == null || M.focus("first") : _.key === "End" && ((z = F.value) == null || z.focus("last")), e.multiple || !function(D) {
      const H = D.key.length === 1, R = !D.ctrlKey && !D.metaKey && !D.altKey;
      return H && R;
    }(_)))
      return;
    const I = performance.now();
    I - h > 1e3 && (P = ""), P += _.key.toLowerCase(), h = I;
    const T = i.value.find((D) => D.title.toLowerCase().startsWith(P));
    T !== void 0 && (v.value = [T]);
  }
  function m(_) {
    var I;
    _.key === "Tab" && ((I = o.value) == null || I.focus());
  }
  function b(_) {
    if (e.multiple) {
      const I = y.value.findIndex((T) => e.valueComparator(T, _.value));
      if (I === -1)
        v.value = [...v.value, _];
      else {
        const T = [...v.value];
        T.splice(I, 1), v.value = T;
      }
    } else
      v.value = [_], s.value = !1;
  }
  function $(_) {
    var I;
    (I = F.value) != null && I.$el.contains(_.relatedTarget) || (s.value = !1);
  }
  function A() {
    var _;
    k.value && ((_ = o.value) == null || _.focus());
  }
  function E(_) {
    k.value = !0;
  }
  return te(() => {
    const _ = !(!e.chips && !t.chip), I = !!(!e.hideNoData || B.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), T = v.value.length > 0, [M] = Rl.filterProps(e), z = T || !k.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(Rl, J({ ref: o }, M, { modelValue: v.value.map((D) => D.props.value).join(", "), "onUpdate:modelValue": (D) => {
      D == null && (v.value = []);
    }, focused: k.value, "onUpdate:focused": (D) => k.value = D, validationValue: v.externalValue, dirty: T, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": v.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: z, "onClick:clear": w, "onMousedown:control": V, onBlur: $, onKeydown: C }), { ...t, default: () => d(ae, null, [d(Ds, J({ ref: a, modelValue: s.value, "onUpdate:modelValue": (D) => s.value = D, activator: "parent", contentClass: "v-select__content", disabled: x.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: A }, e.menuProps), { default: () => [I && d(Is, { ref: F, selected: y.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (D) => D.preventDefault(), onKeydown: m, onFocusin: E, tabindex: "-1" }, { default: () => {
      var D, H, R;
      return [(D = t["prepend-item"]) == null ? void 0 : D.call(t), !B.value.length && !e.hideNoData && (((H = t["no-data"]) == null ? void 0 : H.call(t)) ?? d(al, { title: n(e.noDataText) }, null)), B.value.map((K, O) => {
        var N;
        const j = J(K.props, { key: O, onClick: () => b(K) });
        return ((N = t.item) == null ? void 0 : N.call(t, { item: K, index: O, props: j })) ?? d(al, j, { prepend: (Y) => {
          let { isSelected: ne } = Y;
          return d(ae, null, [e.multiple && !e.hideSelected ? d(vt, { key: K.value, modelValue: ne, ripple: !1, tabindex: "-1" }, null) : void 0, K.props.prependIcon && d(he, { icon: K.props.prependIcon }, null)]);
        } });
      }), (R = t["append-item"]) == null ? void 0 : R.call(t)];
    } })] }), f.value.map((D, H) => {
      var K;
      const R = { "onClick:close": function(O) {
        O.stopPropagation(), O.preventDefault(), b(D);
      }, onMousedown(O) {
        O.preventDefault(), O.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return d("div", { key: D.value, class: "v-select__selection" }, [_ ? t.chip ? d(Ve, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: D.title } } }, { default: () => {
        var O;
        return [(O = t.chip) == null ? void 0 : O.call(t, { item: D, index: H, props: R })];
      } }) : d(ms, J({ key: "chip", closable: e.closableChips, size: "small", text: D.title }, R), null) : ((K = t.selection) == null ? void 0 : K.call(t, { item: D, index: H })) ?? d("span", { class: "v-select__selection-text" }, [D.title, e.multiple && H < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [Ut(",")])])]);
    })]), "append-inner": function() {
      var K;
      for (var D = arguments.length, H = new Array(D), R = 0; R < D; R++)
        H[R] = arguments[R];
      return d(ae, null, [(K = t["append-inner"]) == null ? void 0 : K.call(t, ...H), e.menuIcon ? d(he, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), nn({ isFocused: k, menu: s, select: b }, o);
} }), cn = L({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), ol = q()({ name: "VDataTableFooter", props: cn(), setup(e, l) {
  let { slots: t } = l;
  const { t: n } = yt(), { page: o, pageCount: a, startIndex: r, stopIndex: s, itemsLength: i, itemsPerPage: u, setItemsPerPage: c } = function() {
    const p = ve(Ma);
    if (!p)
      throw new Error("Missing pagination!");
    return p;
  }(), v = g(() => e.itemsPerPageOptions.map((p) => ({ ...p, title: n(p.title) })));
  return () => {
    var p;
    return d("div", { class: "v-data-table-footer" }, [(p = t.prepend) == null ? void 0 : p.call(t), d("div", { class: "v-data-table-footer__items-per-page" }, [d("span", null, [n(e.itemsPerPageText)]), d(Hs, { items: v.value, modelValue: u.value, "onUpdate:modelValue": (f) => c(Number(f)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), d("div", { class: "v-data-table-footer__info" }, [d("div", null, [n(e.pageText, i.value ? r.value + 1 : 0, s.value, i.value)])]), d("div", { class: "v-data-table-footer__pagination" }, [d(it, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": n(e.firstPageLabel) }, null), d(it, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": n(e.prevPageLabel) }, null), e.showCurrentPage && d("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), d(it, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(a.value, o.value + 1), disabled: o.value === a.value, "aria-label": n(e.nextPageLabel) }, null), d(it, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = a.value, disabled: o.value === a.value, "aria-label": n(e.lastPageLabel) }, null)])]);
  };
} }), dn = (Un = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Pl = (e, l) => {
  let { slots: t, attrs: n } = l;
  const o = e.tag ?? "td";
  return d(o, J({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: X(e.height), width: X(e.width), left: X(e.fixedOffset || null) } }, n), { default: () => {
    var a;
    return [(a = t.default) == null ? void 0 : a.call(t)];
  } });
}, Pl.props = Un, Pl);
var Un, Pl;
const Gs = L({ headers: { type: Array, default: () => [] } }, "DataTable-header"), Lo = Symbol.for("vuetify:data-table-headers");
function Mo(e, l) {
  const t = W([]), n = W([]);
  Re(() => {
    var f, y, k;
    const a = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], r = a.flatMap((h, P) => h.map((B) => ({ column: B, row: P }))), s = a.length, i = { title: "", sortable: !1 }, u = { ...i, width: 48 };
    if ((f = l == null ? void 0 : l.groupBy) != null && f.value.length) {
      const h = r.findIndex((P) => {
        let { column: B } = P;
        return B.key === "data-table-group";
      });
      h < 0 ? r.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : r.splice(h, 1, { column: { ...i, ...r[h].column }, row: r[h].row });
    }
    if ((y = l == null ? void 0 : l.showSelect) != null && y.value) {
      const h = r.findIndex((P) => {
        let { column: B } = P;
        return B.key === "data-table-select";
      });
      h < 0 ? r.unshift({ column: { ...u, key: "data-table-select", rowspan: s }, row: 0 }) : r.splice(h, 1, { column: { ...u, ...r[h].column }, row: r[h].row });
    }
    if ((k = l == null ? void 0 : l.showExpand) != null && k.value) {
      const h = r.findIndex((P) => {
        let { column: B } = P;
        return B.key === "data-table-expand";
      });
      h < 0 ? r.push({ column: { ...u, key: "data-table-expand", rowspan: s }, row: 0 }) : r.splice(h, 1, { column: { ...u, ...r[h].column }, row: r[h].row });
    }
    const c = mn(s).map(() => []), v = mn(s).fill(0);
    r.forEach((h) => {
      let { column: P, row: B } = h;
      const x = P.key;
      for (let F = B; F <= B + (P.rowspan ?? 1) - 1; F++)
        c[F].push({ ...P, key: x, fixedOffset: v[F], sortable: P.sortable ?? !!P.key }), v[F] += Number(P.width ?? 0);
    }), c.forEach((h) => {
      for (let P = h.length; P--; P >= 0)
        if (h[P].fixed)
          return void (h[P].lastFixed = !0);
    });
    const p = /* @__PURE__ */ new Set();
    t.value = c.map((h) => {
      const P = [];
      for (const B of h)
        p.has(B.key) || (p.add(B.key), P.push(B));
      return P;
    }), n.value = c.at(-1) ?? [];
  });
  const o = { headers: t, columns: n };
  return ye(Lo, o), o;
}
function gl() {
  const e = ve(Lo);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const No = L({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...an() }, "VDataTableHeaders"), rl = q()({ name: "VDataTableHeaders", props: No(), setup(e, l) {
  let { slots: t, emit: n } = l;
  const { toggleSort: o, sortBy: a, isSorted: r } = function() {
    const F = ve(Wa);
    if (!F)
      throw new Error("Missing sort!");
    return F;
  }(), { someSelected: s, allSelected: i, selectAll: u, showSelectAll: c } = pl(), { columns: v, headers: p } = gl(), { loaderClasses: f } = on(e), y = (F, w) => {
    if (e.sticky || F.fixed)
      return { position: "sticky", zIndex: F.fixed ? 4 : e.sticky ? 3 : void 0, left: F.fixed ? X(F.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${w})` : void 0 };
  };
  function k(F) {
    const w = a.value.find((V) => V.key === F.key);
    return w ? w.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: h, backgroundColorStyles: P } = pt(e, "color"), B = g(() => ({ headers: p.value, columns: v.value, toggleSort: o, isSorted: r, sortBy: a.value, someSelected: s.value, allSelected: i.value, selectAll: u, getSortIcon: k, getFixedStyles: y })), x = (F) => {
    let { column: w, x: V, y: C } = F;
    const m = w.key === "data-table-select" || w.key === "data-table-expand";
    return d(dn, { tag: "th", align: w.align, class: ["v-data-table__th", { "v-data-table__th--sortable": w.sortable, "v-data-table__th--sorted": r(w) }, f.value], style: { width: X(w.width), minWidth: X(w.width), ...y(w, C) }, colspan: w.colspan, rowspan: w.rowspan, onClick: w.sortable ? () => o(w) : void 0, lastFixed: w.lastFixed, noPadding: m }, { default: () => {
      var A;
      const b = `column.${w.key}`, $ = { column: w, selectAll: u, isSorted: r, toggleSort: o, sortBy: a.value, someSelected: s.value, allSelected: i.value, getSortIcon: k };
      return t[b] ? t[b]($) : w.key === "data-table-select" ? ((A = t["column.data-table-select"]) == null ? void 0 : A.call(t, $)) ?? (c && d(vt, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": u }, null)) : d("div", { class: "v-data-table-header__content" }, [d("span", null, [w.title]), w.sortable && d(he, { key: "icon", class: "v-data-table-header__sort-icon", icon: k(w) }, null), e.multiSort && r(w) && d("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...h.value], style: P.value }, [a.value.findIndex((E) => E.key === w.key) + 1])]);
    } });
  };
  te(() => d(ae, null, [t.headers ? t.headers(B.value) : p.value.map((F, w) => d("tr", null, [F.map((V, C) => d(x, { column: V, x: C, y: w }, null))])), e.loading && d("tr", { class: "v-data-table-progress" }, [d("th", { colspan: v.value.length }, [d(oo, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), Ws = L({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), Ks = q()({ name: "VDataTableGroupHeaderRow", props: Ws(), setup(e, l) {
  let { slots: t } = l;
  const { isGroupOpen: n, toggleGroup: o, extractRows: a } = Ea(), { isSelected: r, isSomeSelected: s, select: i } = pl(), { columns: u } = gl(), c = g(() => a([e.item]));
  return () => d("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((v) => {
    var p, f;
    if (v.key === "data-table-group") {
      const y = n(e.item) ? "$expand" : "$next", k = () => o(e.item);
      return ((p = t["data-table-group"]) == null ? void 0 : p.call(t, { item: e.item, count: c.value.length, props: { icon: y, onClick: k } })) ?? d(dn, { class: "v-data-table-group-header-row__column" }, { default: () => [d(it, { size: "small", variant: "text", icon: y, onClick: k }, null), d("span", null, [e.item.value]), d("span", null, [Ut("("), c.value.length, Ut(")")])] });
    }
    if (v.key === "data-table-select") {
      const y = r(c.value), k = s(c.value) && !y, h = (P) => i(c.value, P);
      return ((f = t["data-table-select"]) == null ? void 0 : f.call(t, { props: { modelValue: y, indeterminate: k, "onUpdate:modelValue": h } })) ?? d("td", null, [d(vt, { modelValue: y, indeterminate: k, "onUpdate:modelValue": h }, null)]);
    }
    return d("td", null, null);
  })]);
} }), Us = dt({ name: "VDataTableRow", props: L({ index: Number, item: Object, onClick: Function }, "VDataTableRow")(), setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, toggleSelect: o } = pl(), { isExpanded: a, toggleExpand: r } = Fa(), { columns: s } = gl();
  te(() => d("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, u) => d(dn, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var f, y;
    const c = e.item, v = `item.${i.key}`, p = { index: e.index, item: e.item, columns: s.value, isSelected: n, toggleSelect: o, isExpanded: a, toggleExpand: r };
    return t[v] ? t[v](p) : i.key === "data-table-select" ? ((f = t["item.data-table-select"]) == null ? void 0 : f.call(t, p)) ?? d(vt, { disabled: !c.selectable, modelValue: n([c]), onClick: Fl(() => o(c), ["stop"]) }, null) : i.key === "data-table-expand" ? ((y = t["item.data-table-expand"]) == null ? void 0 : y.call(t, p)) ?? d(it, { icon: a(c) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: Fl(() => r(c), ["stop"]) }, null) : Se(c.columns, i.key);
  } }))]));
} }), jo = L({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), sl = q()({ name: "VDataTableRows", props: jo(), setup(e, l) {
  let { emit: t, slots: n } = l;
  const { columns: o } = gl(), { expandOnClick: a, toggleExpand: r, isExpanded: s } = Fa(), { isSelected: i, toggleSelect: u } = pl(), { toggleGroup: c, isGroupOpen: v } = Ea(), { t: p } = yt();
  return te(() => {
    var f;
    return e.loading && n.loading ? d("tr", { class: "v-data-table-rows-loading", key: "loading" }, [d("td", { colspan: o.value.length }, [n.loading()])]) : e.loading || e.items.length || e.hideNoData ? d(ae, null, [e.items.map((y, k) => {
      var B;
      if (y.type === "group")
        return n["group-header"] ? n["group-header"]({ index: k, item: y, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: u, toggleGroup: c, isGroupOpen: v }) : d(Ks, { key: `group-header_${y.id}`, item: y }, n);
      const h = { index: k, item: y, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: u }, P = { ...h, props: { key: `item_${y.value}`, onClick: a.value || e["onClick:row"] ? (x) => {
        var F;
        a.value && r(y), (F = e["onClick:row"]) == null || F.call(e, x, { item: y });
      } : void 0, index: k, item: y } };
      return d(ae, null, [n.item ? n.item(P) : d(Us, P.props, n), s(y) && ((B = n["expanded-row"]) == null ? void 0 : B.call(n, h))]);
    })]) : d("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [d("td", { colspan: o.value.length }, [((f = n["no-data"]) == null ? void 0 : f.call(n)) ?? p(e.noDataText)])]);
  }), {};
} }), Ro = L({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...se(), ...Ge(), ...we(), ...be() }, "VTable"), il = q()({ name: "VTable", props: Ro(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { densityClasses: o } = We(e);
  return te(() => d(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, n.value, o.value, e.class], style: e.style }, { default: () => {
    var a, r, s;
    return [(a = t.top) == null ? void 0 : a.call(t), t.default ? d("div", { class: "v-table__wrapper", style: { height: X(e.height) } }, [d("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), qs = L({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function Ys(e, l, t) {
  return l.map((n, o) => function(a, r, s, i) {
    return { type: "item", index: s, value: a.returnObject ? r : Se(r, a.itemValue), selectable: Se(r, a.itemSelectable, !0), columns: i.reduce((u, c) => (u[c.key] = Se(r, c.value ?? c.key), u), {}), raw: r };
  }(e, n, o, t));
}
function zo(e, l) {
  return { items: g(() => Ys(e, e.items, l.value)) };
}
const Ho = L({ ...jo(), width: [String, Number], search: String, ...Lr(), ...Mr(), ...Gs(), ...qs(), ...jr(), ...Rr(), ...No(), ...Ro() }, "DataTable"), Xs = L({ ...La(), ...Ho(), ...Dr(), ...cn() }, "VDataTable"), Js = q()({ name: "VDataTable", props: Xs(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = $a(e), { sortBy: a, multiSort: r, mustSort: s } = Ka(e), { page: i, itemsPerPage: u } = Na(e), { columns: c, headers: v } = Mo(e, { groupBy: o, showSelect: G(e, "showSelect"), showExpand: G(e, "showExpand") }), { items: p } = zo(e, c), f = G(e, "search"), { filteredItems: y } = Tr(e, p, f, { transform: (j) => j.columns }), { toggleSort: k } = Ua({ sortBy: a, multiSort: r, mustSort: s, page: i }), { sortByWithGroups: h, opened: P, extractRows: B, isGroupOpen: x, toggleGroup: F } = Va({ groupBy: o, sortBy: a }), { sortedItems: w } = zr(e, y, h), { flatItems: V } = Da(w, o, P), C = g(() => V.value.length), { startIndex: m, stopIndex: b, pageCount: $, setItemsPerPage: A } = ja({ page: i, itemsPerPage: u, itemsLength: C }), { paginatedItems: E } = function(j) {
    const { items: N, startIndex: Y, stopIndex: ne, itemsPerPage: le } = j;
    return { paginatedItems: g(() => le.value <= 0 ? N.value : N.value.slice(Y.value, ne.value)) };
  }({ items: V, startIndex: m, stopIndex: b, itemsPerPage: u }), _ = g(() => B(E.value)), { isSelected: I, select: T, selectAll: M, toggleSelect: z, someSelected: D, allSelected: H } = Ga(e, { allItems: p, currentPage: _ }), { isExpanded: R, toggleExpand: K } = _a(e);
  Ta({ page: i, itemsPerPage: u, sortBy: a, groupBy: o, search: f }), Xe({ VDataTableRows: { hideNoData: G(e, "hideNoData"), noDataText: G(e, "noDataText"), loading: G(e, "loading"), loadingText: G(e, "loadingText") } });
  const O = g(() => ({ page: i.value, itemsPerPage: u.value, sortBy: a.value, pageCount: $.value, toggleSort: k, setItemsPerPage: A, someSelected: D.value, allSelected: H.value, isSelected: I, select: T, selectAll: M, toggleSelect: z, isExpanded: R, toggleExpand: K, isGroupOpen: x, toggleGroup: F, items: _.value, groupedItems: E.value, columns: c.value, headers: v.value }));
  return te(() => {
    const [j] = ol.filterProps(e), [N] = rl.filterProps(e), [Y] = sl.filterProps(e), [ne] = il.filterProps(e);
    return d(il, J({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, ne), { top: () => {
      var le;
      return (le = n.top) == null ? void 0 : le.call(n, O.value);
    }, default: () => {
      var le, Q, ce, ke;
      return n.default ? n.default(O.value) : d(ae, null, [(le = n.colgroup) == null ? void 0 : le.call(n, O.value), d("thead", null, [d(rl, N, n)]), (Q = n.thead) == null ? void 0 : Q.call(n, O.value), d("tbody", null, [n.body ? n.body(O.value) : d(sl, J(Y, { items: E.value }), n)]), (ce = n.tbody) == null ? void 0 : ce.call(n, O.value), (ke = n.tfoot) == null ? void 0 : ke.call(n, O.value)]);
    }, bottom: () => n.bottom ? n.bottom(O.value) : d(ae, null, [d(ol, j, { prepend: n["footer.prepend"] })]) });
  }), {};
} }), Zs = L({ itemsLength: { type: [Number, String], required: !0 }, ...La(), ...Ho(), ...cn() }, "VDataTableServer"), Qs = q()({ name: "VDataTableServer", props: Zs(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0, "click:row": (e, l) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = $a(e), { sortBy: a, multiSort: r, mustSort: s } = Ka(e), { page: i, itemsPerPage: u } = Na(e), c = g(() => parseInt(e.itemsLength, 10)), { columns: v, headers: p } = Mo(e, { groupBy: o, showSelect: G(e, "showSelect"), showExpand: G(e, "showExpand") }), { items: f } = zo(e, v), { toggleSort: y } = Ua({ sortBy: a, multiSort: r, mustSort: s, page: i }), { opened: k, isGroupOpen: h, toggleGroup: P, extractRows: B } = Va({ groupBy: o, sortBy: a }), { pageCount: x, setItemsPerPage: F } = ja({ page: i, itemsPerPage: u, itemsLength: c }), { flatItems: w } = Da(f, o, k), { isSelected: V, select: C, selectAll: m, toggleSelect: b, someSelected: $, allSelected: A } = Ga(e, { allItems: f, currentPage: f }), { isExpanded: E, toggleExpand: _ } = _a(e), I = g(() => B(f.value));
  Ta({ page: i, itemsPerPage: u, sortBy: a, groupBy: o, search: G(e, "search") }), ye("v-data-table", { toggleSort: y, sortBy: a }), Xe({ VDataTableRows: { hideNoData: G(e, "hideNoData"), noDataText: G(e, "noDataText"), loading: G(e, "loading"), loadingText: G(e, "loadingText") } });
  const T = g(() => ({ page: i.value, itemsPerPage: u.value, sortBy: a.value, pageCount: x.value, toggleSort: y, setItemsPerPage: F, someSelected: $.value, allSelected: A.value, isSelected: V, select: C, selectAll: m, toggleSelect: b, isExpanded: E, toggleExpand: _, isGroupOpen: h, toggleGroup: P, items: I.value, groupedItems: w.value, columns: v.value, headers: p.value }));
  te(() => {
    const [M] = ol.filterProps(e), [z] = rl.filterProps(e), [D] = sl.filterProps(e), [H] = il.filterProps(e);
    return d(il, J({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, H), { top: () => {
      var R;
      return (R = n.top) == null ? void 0 : R.call(n, T.value);
    }, default: () => {
      var R, K, O, j;
      return n.default ? n.default(T.value) : d(ae, null, [(R = n.colgroup) == null ? void 0 : R.call(n, T.value), d("thead", { class: "v-data-table__thead", role: "rowgroup" }, [d(rl, J(z, { sticky: e.fixedHeader }), n)]), (K = n.thead) == null ? void 0 : K.call(n, T.value), d("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [n.body ? n.body(T.value) : d(sl, J(D, { items: w.value }), n)]), (O = n.tbody) == null ? void 0 : O.call(n, T.value), (j = n.tfoot) == null ? void 0 : j.call(n, T.value)]);
    }, bottom: () => n.bottom ? n.bottom(T.value) : d(ol, M, { prepend: n["footer.prepend"] }) });
  });
} }), Go = dl.reduce((e, l) => (e[l] = { type: [Boolean, String, Number], default: !1 }, e), {}), Wo = dl.reduce((e, l) => (e["offset" + _t(l)] = { type: [String, Number], default: null }, e), {}), Ko = dl.reduce((e, l) => (e["order" + _t(l)] = { type: [String, Number], default: null }, e), {}), qn = { col: Object.keys(Go), offset: Object.keys(Wo), order: Object.keys(Ko) };
function ei(e, l, t) {
  let n = e;
  if (t != null && t !== !1)
    return l && (n += `-${l.replace(e, "")}`), e === "col" && (n = "v-" + n), (e !== "col" || t !== "" && t !== !0) && (n += `-${t}`), n.toLowerCase();
}
const ti = ["auto", "start", "end", "center", "baseline", "stretch"], li = L({ cols: { type: [Boolean, String, Number], default: !1 }, ...Go, offset: { type: [String, Number], default: null }, ...Wo, order: { type: [String, Number], default: null }, ...Ko, alignSelf: { type: String, default: null, validator: (e) => ti.includes(e) }, ...se(), ...we() }, "VCol"), ut = q()({ name: "VCol", props: li(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => {
    const o = [];
    let a;
    for (a in qn)
      qn[a].forEach((s) => {
        const i = e[s], u = ei(a, s, i);
        u && o.push(u);
      });
    const r = o.some((s) => s.startsWith("v-col-"));
    return o.push({ "v-col": !r || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return ft(e.tag, { class: [n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), pn = ["start", "end", "center"], Uo = ["space-between", "space-around", "space-evenly"];
function vn(e, l) {
  return dl.reduce((t, n) => (t[e + _t(n)] = l(), t), {});
}
const ni = [...pn, "baseline", "stretch"], qo = (e) => ni.includes(e), Yo = vn("align", () => ({ type: String, default: null, validator: qo })), ai = [...pn, ...Uo], Xo = (e) => ai.includes(e), Jo = vn("justify", () => ({ type: String, default: null, validator: Xo })), oi = [...pn, ...Uo, "stretch"], Zo = (e) => oi.includes(e), Qo = vn("alignContent", () => ({ type: String, default: null, validator: Zo })), Yn = { align: Object.keys(Yo), justify: Object.keys(Jo), alignContent: Object.keys(Qo) }, ri = { align: "align", justify: "justify", alignContent: "align-content" };
function si(e, l, t) {
  let n = ri[e];
  if (t != null)
    return l && (n += `-${l.replace(e, "")}`), n += `-${t}`, n.toLowerCase();
}
const ii = L({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: qo }, ...Yo, justify: { type: String, default: null, validator: Xo }, ...Jo, alignContent: { type: String, default: null, validator: Zo }, ...Qo, ...se(), ...we() }, "VRow"), er = q()({ name: "VRow", props: ii(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => {
    const o = [];
    let a;
    for (a in Yn)
      Yn[a].forEach((r) => {
        const s = e[r], i = si(a, r, s);
        i && o.push(i);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return ft(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), ui = Ye({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (l, t) => de(l.$slots, "bottom") }), ee = "v-drilldown-table";
function Xn(e, l) {
  if (e) {
    const t = e.find((n) => n.key === l);
    if (t)
      return t.order;
  }
}
function zl(e, l = "px") {
  if (e != null && e !== "")
    return +e ? `${Number(e)}${l}` : String(e);
}
function tr(e) {
  const l = e.title, t = [l, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : l || "";
}
function _l(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function wt(e, ...l) {
  if (!l.length)
    return e;
  const t = l.shift();
  if (_l(e) && _l(t))
    for (const n in t)
      _l(t[n]) ? (e[n] || Object.assign(e, { [n]: {} }), wt(e[n], t[n])) : Object.assign(e, { [n]: t[n] });
  return wt(e, ...l);
}
const lr = (e) => {
  const { align: l } = e;
  return { "d-flex align-center": !0, [`justify-${l}`]: l, "justify-start": !l };
}, nr = (e) => {
  const { level: l } = e;
  return { "d-flex": !0, [`${ee}--header-select-all-checkbox`]: !0, [`${ee}--header-select-all-checkbox-${l}`]: !0 };
}, ci = (e) => {
  const { colors: l, level: t, prop: n = "default", theme: o, type: a } = e, r = { ...l[n] }, s = l.percentageDirection;
  if (r === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let i = function(u, c, v) {
    let p = 100, f = u.percentageChange ?? 0;
    return isNaN(f) && (p = 100), f *= c, (v === "desc" || v === "descending") && (p = 100 - f), v !== "asc" && v !== "ascending" || (p = 0 + f), p < 0 && (p = 0), p > 100 && (p = 100), isNaN(p) && (p = 100), p;
  }(l, t - 1, s);
  return a || Object.entries(r).forEach(([u, c]) => {
    let v = o.global.current.value.colors[c] ?? c;
    if (v || (v = "transparent"), v === "transparent" || v === "none" || v === "inherit" || v === "currentColor" || v === "initial" || v === "unset")
      return void (r[u] = v);
    if (u === "text" && t === 0 && s === "asc" && (i = 100), v.includes("--v-theme"))
      return void (r[u] = `rgb(var(${v}))`);
    const p = `/ ${i}%`, f = Jn(v);
    if (f.includes("/"))
      return r[u] = `hsl(${f})`;
    r[u] = `hsl(${Jn(v)} ${p})`;
  }), r;
};
function Jn(e) {
  let l = function(c) {
    const v = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let p = c;
    return Object.entries(v).forEach(([f, y]) => {
      c.toLowerCase() != f.toLowerCase() || (p = y);
    }), p;
  }(e), t = 0, n = 0, o = 0, a = 0, r = 0, s = 0;
  if (l.substring(0, 1) === "#")
    l = function(c) {
      let v = c.replace("#", "");
      v.length === 3 && (v = v.split("").map((k) => k + k).join(""));
      const p = parseInt(v.substring(0, 2), 16), f = parseInt(v.substring(2, 4), 16), y = parseInt(v.substring(4, 6), 16);
      return [p, f, y];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/\d+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/\d+/g)].map(Number), t = l[0], n = l[1], o = l[2], `${t} ${n}% ${o}%`;
  [a, r, s] = l, a /= 255, r /= 255, s /= 255;
  const i = Math.max(a, r, s), u = Math.min(a, r, s);
  if (i === null || !u === null || isNaN(i) || isNaN(u)) {
    const c = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${c})" in it's place.`), c;
  }
  if (t = (i + u) / 2, n = (i + u) / 2, o = (i + u) / 2, i == u)
    t = n = 0;
  else {
    const c = i - u;
    switch (n = o > 0.5 ? c / (2 - i - u) : c / (i + u), i) {
      case a:
        t = (r - s) / c + (r < s ? 6 : 0);
        break;
      case r:
        t = (s - a) / c + 2;
        break;
      case s:
        t = (a - r) / c + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), n = Math.round(100 * n), o = Math.round(100 * o), `${t} ${n}% ${o}%`;
}
const yl = (e) => {
  const { colors: l, level: t, prop: n = "default", themeColors: o, type: a = null } = e;
  if (typeof l != "object" || l === null)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should no be called.');
  const r = ci({ colors: l, level: t, prop: n, theme: o, type: a });
  return a ? r[a] : r;
}, di = ["colspan"], pi = Ye({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, skeltonType: {}, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const l = e, t = cl(), n = g(() => {
    if (typeof l.colors == "object" && l.colors !== null)
      return yl({ colors: l.colors, level: l.level, prop: "loader", themeColors: t });
  }), o = g(() => ((x) => {
    const { isLinearOnly: F, loaderHeight: w } = x;
    let V = { height: 0, minHeight: 0 };
    return S(F) && (V = { height: S(w), minHeight: S(w) }), V;
  })({ isLinearOnly: c, loaderHeight: u })), a = g(() => ((x) => {
    const { isLinearOnly: F, loaderHeight: w } = x;
    return S(F) ? { height: S(w), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: c, loaderHeight: u })), r = g(() => ((x) => {
    const { isLinearOnly: F } = x;
    return { [`${ee}--loader-tr`]: !0, [`${ee}--loader-tr-not-linear`]: !S(F), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: c })), s = g(() => ({ [`${ee}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), i = g(() => {
    var x;
    return ((x = n.value) == null ? void 0 : x.linear) || "";
  }), u = g(() => function(x) {
    return zl(x) || "2px";
  }(l.height)), c = g(() => {
    let x = !1;
    return l.loaderType !== null && l.loaderType !== !1 && (x = function(F) {
      let w = !1;
      return F === "linear" && (w = !0), Array.isArray(F) && (w = F.length === 1 && F[0] === "linear"), w;
    }(l.loaderType)), x;
  }), v = g(() => {
    var x;
    return (x = n.value) == null ? void 0 : x.bg;
  }), p = g(() => {
    var x;
    return (x = n.value) == null ? void 0 : x.circular;
  }), f = g(() => l.skeltonType || "heading@1"), y = g(() => l.loading), k = g(() => {
    var x;
    return { color: (x = n.value) == null ? void 0 : x.text };
  }), h = g(() => l.loadingText || "Loading..."), P = (x) => {
    const F = l.loaderType;
    return Array.isArray(F) ? F.indexOf(x) : 1;
  }, B = (x) => {
    const F = l.loaderType;
    return x === l.loaderType || !!Array.isArray(F) && F.includes(x);
  };
  return (x, F) => {
    const w = ia("v-skeleton-loader");
    return U(), ie("tr", { class: re(S(r)), style: $e(S(o)) }, [Te("td", { class: "px-0 ma-0", colspan: x.colspan, style: $e(S(a)) }, [x.loading ? (U(), me(er, { key: 0, class: re(S(s)), "no-gutters": "" }, { default: oe(() => [B("linear") ? (U(), me(ut, { key: 0, class: "pa-0 ma-0", order: P("linear") }, { default: oe(() => [d(ao, { color: S(i), height: S(u), indeterminate: "" }, null, 8, ["color", "height"])]), _: 1 }, 8, ["order"])) : ge("", !0), B("circular") ? (U(), me(ut, { key: 1, class: "pa-0 my-2", order: P("circular") }, { default: oe(() => [d(to, { "bg-color": S(v), color: S(p), indeterminate: "", size: x.size }, null, 8, ["bg-color", "color", "size"])]), _: 1 }, 8, ["order"])) : ge("", !0), B("skelton") ? (U(), me(ut, { key: 2, class: "pa-0 ma-0", order: P("skelton") }, { default: oe(() => [d(w, { loading: S(y), type: S(f) }, null, 8, ["loading", "type"])]), _: 1 }, 8, ["order"])) : ge("", !0), B("text") ? (U(), me(ut, { key: 3, class: "my-2", order: P("text"), style: $e(S(k)) }, { default: oe(() => [Ut(pr(S(h)), 1)]), _: 1 }, 8, ["order", "style"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0)], 12, di)], 6);
  };
} }), fn = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, vi = fn(pi, [["__scopeId", "data-v-c69c3cdf"]]), fi = ["colspan"], mi = ["colspan"], gi = ["colspan", "innerHTML"], yi = ["colspan", "onClick"], hi = ["innerHTML"], bi = Ye({ __name: "HeadersSlot", props: { isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderSettings: {}, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, colors: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = At(), o = W(), a = g(() => t.slotProps.columns), r = ve(Symbol.for("vuetify:icons")), s = W(!1), i = W(t.items), u = W(t.sortAscIcon), c = g(() => t.tableModelValue), v = cl();
  Z(() => t.items, (w) => {
    i.value = w, o.value = (w == null ? void 0 : w.filter((V) => V.selectable)) ?? [], o.value = w == null ? void 0 : w.filter((V) => V.selectable !== !1);
  });
  const p = g(() => ((w) => {
    const { level: V } = w;
    return { [`${ee}--header-row`]: !0, [`${ee}--header-row-${V}`]: !0 };
  })({ level: t.level })), f = (w, V = "") => ((C) => {
    const { colors: m, column: b, level: $, slotName: A = "" } = C;
    return { [`${ee}--header-row-th`]: !0, [`${ee}--header-row-th-${A}`]: A !== "", [`${ee}--header-row-th-${A}-${$}`]: A, [`${ee}--header-row-th-${$}`]: !0, [`${ee}--header-row-th-sortable`]: b.sortable, [`${ee}--header-row-th-sortable-default-color`]: b.sortable && m === !1, [`${b.cellClass}`]: b.cellClass };
  })({ colors: t.colors, column: w, level: t.level, slotName: V }), y = (w, V = !1) => ((C) => {
    const { colors: m, column: b, dataTableExpand: $ = !1, level: A, theme: E } = C, _ = { minWidth: b.width ? zl(b.width) : "auto", width: b.width ? zl(b.width) : "auto" };
    if ($ && !b.width && (_.width = "48px", _.minWidth = "48px"), m === !1 || m === null)
      return _;
    const I = yl({ colors: m, level: A, prop: "header", themeColors: E });
    return _.backgroundColor = I.bg, _.color = I.text, _;
  })({ colors: t.colors, column: w, dataTableExpand: V, level: t.level, theme: v }), k = g(() => {
    var w;
    return !t.slotProps.allSelected && ((w = c == null ? void 0 : c.value) == null ? void 0 : w.length) !== 0;
  });
  function h() {
    s.value = !s.value, t.slotProps.selectAll(s.value), l("click:selectAll", s.value);
  }
  Z(() => t.slotProps.allSelected, (w) => {
    s.value = w;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const P = g(() => nr({ level: t.level })), B = (w) => ((V) => {
    const { iconOptions: C, key: m, level: b, sortBy: $ } = V;
    return { "fa-fw": (C == null ? void 0 : C.defaultSet) === "fa", "mx-1": !0, [`${ee}--header-row-th-sortable-sort-icon`]: !0, [`${ee}--header-row-th-sortable-sort-icon-${b}`]: !0, [`${ee}--header-row-th-sortable-sort-icon-desc`]: Xn($, m) === "desc", [`${ee}--header-row-th-sortable-sort-icon-asc`]: Xn($, m) === "asc" };
  })({ iconOptions: r, key: w, level: t.level, sortBy: t.sortBy }), x = g(() => (r == null ? void 0 : r.defaultSet) === "fa" ? (u.value = (t == null ? void 0 : t.sortAscIcon) ?? "fas fa-arrow-up", "small") : (u.value = (t == null ? void 0 : t.sortAscIcon) ?? "$sortAsc", "default"));
  function F(w) {
    return tr(w);
  }
  return (w, V) => (U(), ie(ae, null, [Te("tr", { class: re(S(p)) }, [(U(!0), ie(ae, null, De(S(a), (C) => {
    return U(), ie(ae, { key: C }, [S(n)[`column.${C.key}`] ? (U(), ie("th", { key: 0, class: re(f(C, C.key)), colspan: C.colspan || 1, style: $e(y(C, !0)) }, [de(w.$slots, `column.${C.key}`, { column: C }, void 0, !0)], 14, fi)) : C.key === "data-table-select" || C.key === "data-table-select" && w.showSelect ? (U(), ie("th", { key: 1, class: re(f(C, "header-data-table-select")), colspan: C.colspan || 1, style: $e(y(C, !0)) }, [w.selectStrategy !== "single" ? (U(), me(un, { key: 0, class: re(S(P)), density: w.density, focused: !1, indeterminate: S(k), "model-value": S(s), "onUpdate:modelValue": h }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, mi)) : C.key === "data-table-expand" ? (U(), ie("th", { key: 2, class: re(f(C, "data-table-expand")), colspan: C.colspan || 1, style: $e(y(C, !0)), innerHTML: F(C) }, null, 14, gi)) : (U(), ie("th", { key: 3, class: re(f(C)), colspan: C.colspan || 1, style: $e(y(C)), onClick: (b) => function($) {
      $.sortable && t.slotProps.toggleSort($);
    }(C) }, [Te("div", { class: re((m = C.align, lr({ align: m }))) }, [Te("span", { innerHTML: F(C) }, null, 8, hi), C.sortable && S(n)["header.sortIcon"] ? (U(), ie("span", { key: 0, class: re(B(C.key)) }, [de(w.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : C.sortable ? (U(), me(he, { key: 1, class: re(B(C.key)), icon: S(u), size: S(x) }, null, 8, ["class", "icon", "size"])) : ge("", !0)], 2)], 14, yi))], 64);
    var m;
  }), 128))], 2), w.loaderSettings.loaderType && !S(n).loading ? (U(), me(S(vi), { key: 0, colors: w.colors || null, colspan: w.loaderSettings.colspan, height: w.loaderSettings.height, level: w.level, "loader-type": w.loaderSettings.loaderType, loading: w.loaderSettings.loading || !1, "loading-text": w.loaderSettings.loadingText, size: w.loaderSettings.size, "skelton-type": w.loaderSettings.skeltonType }, null, 8, ["colors", "colspan", "height", "level", "loader-type", "loading", "loading-text", "size", "skelton-type"])) : ge("", !0)], 64));
} }), Si = fn(bi, [["__scopeId", "data-v-f8097bbc"]]), xi = ["colspan"], wi = ["colspan"], ki = ["colspan"], Ci = ["colspan"], Bi = ["innerHTML"], Pi = Ye({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: l }) {
  const t = e, n = At(), o = ve(Symbol.for("vuetify:icons")), a = g(() => t.slotProps.columns), r = g(() => t.slotProps.index), s = g(() => t.slotProps.isExpanded), i = g(() => t.slotProps.item), u = g(() => t.slotProps.level), c = g(() => t.slotProps.toggleExpand), v = g(() => t.slotProps.toggleSelect), p = g(() => t.itemSelectable), f = g(() => ((B) => {
    const { expandOnClick: x, level: F, levels: w } = B;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": x && F < w, [`${ee}--body-row`]: !0, [`${ee}--body-row-${F}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), y = (B) => ((x) => {
    const { column: F, elm: w, level: V } = x;
    return { [`${ee}--${w}-row-td`]: !0, [`${ee}--${w}-row-td-${V}`]: !0, [`${F.cellClass}`]: F.cellClass };
  })({ column: B, elm: "body", level: t.level });
  function k(B) {
    const { item: x, level: F, toggleExpand: w } = B;
    if (!(t.level >= t.levels)) {
      if (B.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", B.$event);
      }
      F === t.level && w(x), l("update:expanded", B);
    }
  }
  const h = g(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "x-small" : "default");
  function P(B, x) {
    return function(F, w) {
      const V = Se(F, w.key);
      return w.renderItem ? w.renderItem(V, F, w) : V;
    }(B.raw, x);
  }
  return (B, x) => (U(), ie("tr", { class: re(S(f)), onClick: x[2] || (x[2] = (F) => k({ columns: S(a), index: S(r), isExpanded: S(s), item: S(i), level: S(u), toggleExpand: S(c), $event: F })) }, [(U(!0), ie(ae, null, De(S(a), (F) => (U(), ie(ae, { key: F }, [B.$slots[`item.${F.key}`] ? (U(), ie("td", { key: 0, class: re(y(F)), colspan: F.colspan || 1 }, [de(B.$slots, `item.${F.key}`, { columns: S(a), index: S(r), item: S(i) }, void 0, !0)], 10, xi)) : F.key === "data-table-select" || F.key === "data-table-select" && t.showSelect ? (U(), ie("td", { key: 1, class: re(y(F)), colspan: F.colspan || 1 }, [S(n)["item.data-table-select"] ? de(B.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : ge("", !0), d(un, { class: "d-flex v-simple-checkbox", density: B.density, disabled: S(i).raw.selectable === !1 && S(p) === "selectable", "model-value": B.slotProps.isSelected([S(i)]), onClick: x[0] || (x[0] = Fl((w) => function(V) {
    const { item: C, toggleSelect: m } = V;
    m(C), l("click:row:checkbox", C);
  }({ columns: S(a), index: S(r), item: S(i), level: S(u), toggleSelect: S(v) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, wi)) : F.key === "data-table-expand" || F.key === "data-table-expand" && B.showExpand ? (U(), ie("td", { key: 2, class: re(y(F)), colspan: F.colspan || 1 }, [S(u) < B.levels ? (U(), ie("div", { key: 0, class: re(["v-drilldown-table--expand-icon", S(s)(S(i)) ? "rotate-180" : ""]), onClick: x[1] || (x[1] = (w) => k({ columns: S(a), index: S(r), isExpanded: S(s), item: S(i), level: S(u), toggleExpand: S(c) })) }, [B.$slots["item.data-table-expand"] ? de(B.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (U(), me(he, { key: 1, icon: "$expand", size: S(h) }, null, 8, ["size"]))], 2)) : ge("", !0)], 10, ki)) : (U(), ie("td", { key: 3, class: re(y(F)), colspan: F.colspan || 1 }, [Te("span", { innerHTML: P(S(i), F) }, null, 8, Bi)], 10, Ci))], 64))), 128))], 2));
} }), _i = fn(Pi, [["__scopeId", "data-v-f25e6c95"]]), Fi = ["colspan"], Ai = ["colspan"], $i = ["colspan", "innerHTML"], Vi = ["colspan", "innerHTML"], Ei = ["colspan"], Ii = ["innerHTML"], Oi = Ye({ __name: "TfootSlot", props: { footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = At(), o = W(), a = cl(), r = W(!1), s = W(t.items), i = g(() => t.tableModelValue), u = g(() => t.footers.length ? t.footers : t.slotProps.columns);
  Z(() => t.items, (B) => {
    s.value = B, o.value = (B == null ? void 0 : B.filter((x) => x.selectable)) ?? [], o.value = B == null ? void 0 : B.filter((x) => x.selectable !== !1);
  });
  const c = g(() => ((B) => {
    const { level: x } = B;
    return { [`${ee}--tfoot`]: !0, [`${ee}--tfoot-${x}`]: !0 };
  })({ level: t.level })), v = g(() => ((B) => {
    const { level: x } = B;
    return { [`${ee}--tfoot-row`]: !0, [`${ee}--tfoot-row-${x}`]: !0 };
  })({ level: t.level })), p = (B, x = "") => ((F) => {
    const { column: w, level: V, slotName: C = "" } = F;
    return { [`${ee}--tfoot-row-td`]: !0, [`${ee}--tfoot-row-td-${C}`]: C !== "", [`${ee}--tfoot-row-td-${C}-${V}`]: C, [`${ee}--tfoot-row-td-${V}`]: !0, [`${w.cellClass}`]: w.cellClass };
  })({ column: B, level: t.level, slotName: x }), f = g(() => ((B) => {
    const { colors: x, elm: F, level: w, theme: V } = B;
    if (x === !1 || x === null)
      return {};
    const C = yl({ colors: x, level: w, prop: F, themeColors: V });
    return { backgroundColor: C.bg, color: C.text };
  })({ colors: t.colors, elm: "footer", level: t.level, theme: a })), y = g(() => {
    var B;
    return !t.slotProps.allSelected && ((B = i == null ? void 0 : i.value) == null ? void 0 : B.length) !== 0;
  });
  function k() {
    r.value = !r.value, t.slotProps.selectAll(r.value), l("click:selectAll", r.value);
  }
  Z(() => t.slotProps.allSelected, (B) => {
    r.value = B;
  }), Z(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const h = g(() => nr({ level: t.level }));
  function P(B) {
    return tr(B);
  }
  return (B, x) => {
    var F;
    return (F = S(u)) != null && F.length ? (U(), ie("tfoot", { key: 0, class: re(S(c)) }, [Te("tr", { class: re(S(v)) }, [(U(!0), ie(ae, null, De(S(u), (w) => {
      return U(), ie(ae, { key: w }, [S(n)[`tfoot.${w.key}`] ? (U(), ie("th", { key: 0, class: re(p(w, w.key)), colspan: w.colspan || 1, style: $e(S(f)) }, [de(B.$slots, `tfoot.${w.key}`, { column: w })], 14, Fi)) : w.key === "data-table-select" ? (U(), ie("th", { key: 1, class: re(p(w, "tfoot-data-table-select")), colspan: w.colspan || 1, style: $e(S(f)) }, [B.selectStrategy !== "single" ? (U(), me(un, { key: 0, class: re(S(h)), density: B.density, focused: !1, indeterminate: S(y), "model-value": S(r), "onUpdate:modelValue": k }, null, 8, ["class", "density", "indeterminate", "model-value"])) : ge("", !0)], 14, Ai)) : w.key === "data-table-expand" ? (U(), ie("th", { key: 2, class: re(p(w, "tfoot-data-table-expand")), colspan: w.colspan || 1, style: $e(S(f)), innerHTML: P(w) }, null, 14, $i)) : w.renderFooterCell ? (U(), ie("th", { key: 3, class: re(p(w)), colspan: w.colspan || 1, style: $e(S(f)), innerHTML: P(w) }, null, 14, Vi)) : (U(), ie("th", { key: 4, class: re(p(w)), colspan: w.colspan || 1, style: $e(S(f)) }, [Te("div", { class: re((V = w.align, lr({ align: V }))) }, [Te("span", { innerHTML: P(w) }, null, 8, Ii)], 2)], 14, Ei))], 64);
      var V;
    }), 128))], 2)], 2)) : ge("", !0);
  };
} });
function Zn(e) {
  return typeof e == "function" ? e() : S(e);
}
const Qn = () => {
}, Di = (e) => e();
function Ti(e, l = {}) {
  let t, n, o = Qn;
  const a = (r) => {
    clearTimeout(r), o(), o = Qn;
  };
  return (r) => {
    const s = Zn(e), i = Zn(l.maxWait);
    return t && a(t), s <= 0 || i !== void 0 && i <= 0 ? (n && (a(n), n = null), Promise.resolve(r())) : new Promise((u, c) => {
      o = l.rejectOnCancel ? c : u, i && !n && (n = setTimeout(() => {
        t && a(t), n = null, u(r());
      }, i)), t = setTimeout(() => {
        n && a(n), n = null, u(r());
      }, s);
    });
  };
}
var ea = Object.getOwnPropertySymbols, Li = Object.prototype.hasOwnProperty, Mi = Object.prototype.propertyIsEnumerable, Ni = (e, l) => {
  var t = {};
  for (var n in e)
    Li.call(e, n) && l.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && ea)
    for (var n of ea(e))
      l.indexOf(n) < 0 && Mi.call(e, n) && (t[n] = e[n]);
  return t;
};
function ji(e, l, t = {}) {
  const n = t, { eventFilter: o = Di } = n, a = Ni(n, ["eventFilter"]);
  return Z(e, (r = o, s = l, function(...i) {
    return new Promise((u, c) => {
      Promise.resolve(r(() => s.apply(this, i), { fn: s, thisArg: this, args: i })).then(u).catch(c);
    });
  }), a);
  var r, s;
}
var Ri = Object.defineProperty, zi = Object.defineProperties, Hi = Object.getOwnPropertyDescriptors, Ht = Object.getOwnPropertySymbols, ta = Object.prototype.hasOwnProperty, la = Object.prototype.propertyIsEnumerable, na = (e, l, t) => l in e ? Ri(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
function ar(e, l, t = {}) {
  const n = t, { debounce: o = 0, maxWait: a } = n, r = ((u, c) => {
    var v = {};
    for (var p in u)
      ta.call(u, p) && c.indexOf(p) < 0 && (v[p] = u[p]);
    if (u != null && Ht)
      for (var p of Ht(u))
        c.indexOf(p) < 0 && la.call(u, p) && (v[p] = u[p]);
    return v;
  })(n, ["debounce", "maxWait"]);
  return ji(e, l, (s = ((u, c) => {
    for (var v in c || (c = {}))
      ta.call(c, v) && na(u, v, c[v]);
    if (Ht)
      for (var v of Ht(c))
        la.call(c, v) && na(u, v, c[v]);
    return u;
  })({}, r), i = { eventFilter: Ti(o, { maxWait: a }) }, zi(s, Hi(i))));
  var s, i;
}
const St = /* @__PURE__ */ new Map(), Gi = Ye({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchProps: { default: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "comfortable", variant: "underlined" }) }, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: l }) {
  const t = e, n = At(), o = W(""), a = g(() => t.items), r = g(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: a, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: S(o), selectAll: s, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: i }));
  function s(c) {
    t.slotProps.selectAll(c), l("click:selectAll", c);
  }
  function i() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  ar(o, () => {
    l("update:search", o.value);
  }, { debounce: 750, maxWait: 1e3 });
  const u = g(() => {
    const c = t.searchProps.cols;
    return { [`${ee}--search-field`]: !0, [`v-col-${c.xs}`]: c.xs, [`v-col-sm-${c.sm}`]: c.sm, [`v-col-md-${c.md}`]: c.md, [`v-col-lg-${c.lg}`]: c.lg, [`v-col-xl-${c.xl}`]: c.xl, [`v-col-xxl-${c.xxl}`]: c.xxl };
  });
  return (c, v) => S(n).top ? de(c.$slots, "top", Pe(J({ key: 0 }, S(r)))) : c.showSearch || S(n)["top.left"] || S(n)["top.right"] ? (U(), me(ut, { key: 1, lg: "12" }, { default: oe(() => [d(er, null, { default: oe(() => [S(n)["top.left"] ? de(c.$slots, "top.left", Pe(J({ key: 0 }, S(r)))) : c.showSearch ? (U(), me(ut, { key: 1, class: re(["d-flex align-center justify-end", S(u)]) }, { default: oe(() => [c.showSearch ? (U(), me(Rl, { key: 0, modelValue: S(o), "onUpdate:modelValue": v[0] || (v[0] = (p) => mt(o) ? o.value = p : null), class: "mt-0 pt-0", density: c.searchProps.density, "hide-details": "", label: "Search", "single-line": "", variant: c.searchProps.variant }, null, 8, ["modelValue", "density", "variant"])) : ge("", !0)]), _: 1 }, 8, ["class"])) : ge("", !0), S(n)["top.right"] ? de(c.$slots, "top.right", Pe(J({ key: 2 }, S(r)))) : ge("", !0)]), _: 3 })]), _: 3 })) : ge("", !0);
} }), Wi = Symbol("data"), Ki = ["colspan"], aa = Ye({ __name: "VDrilldownTable", props: fr({ colors: {}, customFilter: {}, customKeyFilter: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footers: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderHeight: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchDebounce: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, skeltonType: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { colors: () => ({ body: { base: "--v-theme-surface", bg: "--v-theme-surface", text: "--v-theme-on-surface" }, default: { base: "primary", bg: "primary", border: "primary", text: "on-primary" }, footer: { bg: "--v-theme-surface", text: "--v-theme-on-surface" }, header: { bg: "primary", text: "on-primary" }, loader: { circular: "primary", color: "primary", linear: "surface-variant", text: "surface-variant" }, percentageChange: 25, percentageDirection: "desc" }), density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footers: () => [], height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderHeight: "2px", loaderSize: "default", loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", multiSort: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, search: "", searchDebounce: 750, searchMaxWait: 1e3, searchProps: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "comfortable", variant: "underlined" }), selectStrategy: "page", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, skeltonType: "heading@1", sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: l }) {
  const t = e, n = At(), o = ue(null);
  Ft(() => {
    t.level === 1 && a.level !== 1 || a.server || k();
  }), Wl(() => {
    o.value = Object.assign({}, t.server ? Qs : Js);
  });
  let a = Pt(Object.assign({}, t));
  const r = { ...t, ...a }, s = W(""), i = W(""), u = cl(), c = g(() => a.sortBy), v = g(() => !!a.loading || a.hideNoData);
  (function(m, b, $) {
    const A = Z(m, (...E) => (Ee(() => A()), b(...E)), $);
  })(t, () => {
    t.level === 1 && a.level !== 1 || k(), a.itemsPerPage = t.itemsPerPage;
  }, { immediate: !1 }), Z(() => t.items, () => {
    k();
  }), Z(() => t.loading, (m) => {
    m && (a.loading = m), k();
  });
  const p = (m) => {
    const b = a.loaderType;
    return !(m && (b === "skelton" || Array.isArray(b) && b.length === 1 && b[0] === "skelton" || !a.showDrilldownWhenLoading));
  }, f = g(() => ((m) => {
    const { elevation: b, isDrilldown: $, isHover: A, isServerSide: E, level: _ } = m;
    return { "pb-2": !0, [`${ee}--child`]: $, [`${ee}--hover`]: A, [`${ee}--level-${_}`]: !0, [`${ee}--server`]: E, [`${ee}`]: !0, [`elevation-${b}`]: parseInt(b) > 0 };
  })({ elevation: a.elevation, isDrilldown: t.isDrilldown, isHover: a.hover, isServerSide: !1, level: a.level })), y = g(() => ((m) => {
    const { colors: b, level: $, theme: A } = m;
    let E = {};
    typeof b == "object" && b !== null && (E = yl({ colors: b, level: $, prop: "default", themeColors: A }));
    const _ = { borderBottom: "none" };
    return E.border && (_.borderBottom = `1px solid ${E.border}`), _;
  })({ colors: a.colors, level: a.level, theme: u }));
  function k() {
    var m;
    a = t.drilldown ? ((b) => {
      const { loadedDrilldown: $, drilldown: A, rawItem: E, level: _, levels: I } = b;
      let T = $;
      T = wt($, A);
      const M = ($.items || [{}]).find((z) => {
        const D = z[$.drilldownKey];
        let H = {};
        return E && (H = E[$.drilldownKey]), D === H;
      });
      return T = wt($, M[$.itemChildrenKey]), I === _ && (T.showExpand = !1), T;
    })({ drilldown: t.drilldown, level: t.level, levels: t.levels, loadedDrilldown: a, rawItem: (m = t.item) == null ? void 0 : m.raw }) : wt(a, t);
  }
  function h(m) {
    let b = { ...r, ...a, ...m };
    t.server && (b = { ...a, ...r, ...m }), (($) => {
      const { data: A, drilldownData: E, emit: _ } = $;
      A.isExpanded(A.item) && _("update:drilldown", E), _("update:expanded", A.item);
    })({ data: m, drilldownData: b, emit: l });
  }
  function P(m) {
    return { items: m.items, itemsPerPage: m.itemsPerPage, page: m.page, search: i.value, server: m.server, sortBy: m.sortBy };
  }
  const B = function(m) {
    const b = vr();
    function $(_) {
      var I;
      const T = St.get(m) || /* @__PURE__ */ new Set();
      T.add(_), St.set(m, T);
      const M = () => A(_);
      return (I = b == null ? void 0 : b.cleanups) == null || I.push(M), M;
    }
    function A(_) {
      const I = St.get(m);
      I && (I.delete(_), I.size || E());
    }
    function E() {
      St.delete(m);
    }
    return { on: $, once: function(_) {
      return $(function I(...T) {
        A(I), _(...T);
      });
    }, off: A, emit: function(_, I) {
      var T;
      (T = St.get(m)) == null || T.forEach((M) => M(_, I));
    }, reset: E };
  }(Wi), x = B.on(function(m) {
    t.level === 1 && m.drilldown.server && l("update:options", { ...m });
  });
  function F(m) {
    a.itemsPerPage = m;
    const b = P(a), $ = { drilldown: { ...t, ...b, itemsPerPage: m }, itemsPerPage: m, name: "update:itemsPerPage" };
    B.emit($), l("update:itemsPerPage", m);
  }
  function w(m) {
    a.page = m;
    const b = P(a), $ = { drilldown: { ...t, ...b, page: m }, name: "update:page", page: m };
    B.emit($), l("update:page", m);
  }
  function V(m) {
    a.sortBy = m;
    const b = P(a), $ = { drilldown: { ...t, ...b, sortBy: m }, name: "update:sortBy", sortBy: m };
    B.emit($), l("update:sortBy", m);
  }
  function C() {
  }
  return mr(() => {
    x();
  }), ar(i, () => {
    a.search = i.value;
    const m = P(a), b = { drilldown: { ...t, ...m, search: i.value }, search: i.value };
    B.emit(b), l("update:search", b);
  }, { debounce: a.searchDebounce, maxWait: a.searchMaxWait }), (m, b) => {
    const $ = ia("VDrilldownTable", !0);
    return S(o) ? (U(), me(sa(S(o)), J({ key: 0, modelValue: S(a).modelValue, "onUpdate:modelValue": b[5] || (b[5] = (A) => S(a).modelValue = A) }, m.$attrs, { class: S(f), density: S(a).density, "expand-on-click": S(a).expandOnClick, expanded: S(a).expanded, headers: S(a).headers, height: S(a).height, "hide-no-data": S(v), hover: S(a).hover, "item-selectable": S(a).itemSelectable, "item-value": S(a).itemValue, items: S(a).items, "items-length": S(a).itemsLength, "items-per-page": S(a).itemsPerPage, "items-per-page-options": S(a).itemsPerPageOptions, loading: (!S(a).loaderType || S(n).loading) && S(a).loading, "multi-sort": S(a).multiSort, "must-sort": S(a).mustSort, "no-data-text": S(a).noDataText, page: S(a).page, search: S(i), "select-strategy": S(a).selectStrategy, "show-expand": S(a).showExpand, "sort-by": S(c), style: S(y), "onUpdate:itemsPerPage": F, "onUpdate:modelValue": C, "onUpdate:page": w, "onUpdate:sortBy": V }), Qe({ top: oe((A) => [(U(), me(S(Gi), { key: m.level, items: S(a).items, level: S(a).level, loading: S(a).loading, "search-props": S(a).searchProps, "show-search": S(a).showSearch ?? !1, "slot-props": A, "onUpdate:search": b[0] || (b[0] = (E) => i.value = E) }, Qe({ _: 2 }, [De(S(n), (E, _) => ({ name: _, fn: oe((I) => [de(m.$slots, _, Pe(je({ ...I })))]) }))]), 1032, ["items", "level", "loading", "search-props", "show-search", "slot-props"]))]), headers: oe((A) => [(U(), me(S(Si), { key: m.level, colors: S(a).colors, density: S(a).density, items: S(a).items, level: m.level, "loader-settings": { colspan: A.columns.length, height: S(a).loaderHeight, loaderType: S(a).loaderType, loading: S(a).loading, loadingText: m.loadingText, size: S(a).loaderSize, skeltonType: S(a).skeltonType }, "select-strategy": S(a).selectStrategy, "show-select": S(a).showSelect, "slot-props": { ...A }, "sort-asc-icon": S(a).sortAscIcon, "sort-by": S(a).sortBy, "table-model-value": S(a).modelValue }, Qe({ _: 2 }, [De(S(n), (E, _) => ({ name: _, fn: oe((I) => [de(m.$slots, _, Pe(je({ ...I })))]) }))]), 1032, ["colors", "density", "items", "level", "loader-settings", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: oe((A) => [(U(), me(S(_i), { key: m.level, density: S(a).density, "expand-on-click": S(a).expandOnClick, "item-selectable": S(a).itemSelectable, items: S(a).items, level: S(a).level, levels: S(a).levels, "show-expand": S(a).showExpand, "show-select": S(a).showSelect, "slot-props": { level: m.level, ...A }, "onClick:row": b[1] || (b[1] = (E) => {
      l("click:row", E);
    }), "onClick:row:checkbox": b[2] || (b[2] = (E) => {
      l("click:row:checkbox", E);
    }), "onUpdate:expanded": b[3] || (b[3] = (E) => h(E)) }, Qe({ _: 2 }, [De(S(n), (E, _) => ({ name: _, fn: oe((I) => [de(m.$slots, _, Pe(je({ ...I })))]) }))]), 1032, ["density", "expand-on-click", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": oe(({ columns: A, item: E }) => {
      var _, I, T, M, z, D, H, R, K, O, j;
      return [Te("tr", { class: re(p((_ = E.raw[m.itemChildrenKey]) == null ? void 0 : _.loading) ? "" : "d-none") }, [Te("td", { class: "px-0 ma-0", colspan: A.length, style: { "vertical-align": "top" } }, [(U(), me($, { key: E.raw, colors: m.colors, density: S(a).density, drilldown: S(a), headers: (I = E.raw[m.itemChildrenKey]) == null ? void 0 : I.headers, "is-drilldown": !0, item: E, "items-length": (T = E.raw[m.itemChildrenKey]) == null ? void 0 : T.itemsLength, "items-per-page": (M = E.raw[m.itemChildrenKey]) == null ? void 0 : M.itemsPerPage, level: m.level + 1, levels: S(a).levels, loaderHeight: (z = E.raw[m.itemChildrenKey]) == null ? void 0 : z.loaderHeight, loaderSize: (D = E.raw[m.itemChildrenKey]) == null ? void 0 : D.loaderSize, loaderType: (H = E.raw[m.itemChildrenKey]) == null ? void 0 : H.loaderType, loading: (R = E.raw[m.itemChildrenKey]) == null ? void 0 : R.loading, loadingText: m.loadingText, "multi-sort": (K = E.raw[m.itemChildrenKey]) == null ? void 0 : K.multiSort, "no-data-text": S(a).noDataText, "parent-ref": S(s), server: (O = E.raw[m.itemChildrenKey]) == null ? void 0 : O.server, skeltonType: (j = E.raw[m.itemChildrenKey]) == null ? void 0 : j.skeltonType, "sort-by": S(a).sortBy, "table-type": S(o), "onUpdate:drilldown": b[4] || (b[4] = (N) => h(N)), "onUpdate:modelValue": C }, Qe({ default: oe(() => [(U(!0), ie(ae, null, De(Object.keys(S(n)), (N) => de(m.$slots, N)), 256))]), _: 2 }, [De(S(n), (N, Y) => ({ name: Y, fn: oe((ne) => [de(m.$slots, Y, Pe(je({ ...ne })))]) }))]), 1032, ["colors", "density", "drilldown", "headers", "item", "items-length", "items-per-page", "level", "levels", "loaderHeight", "loaderSize", "loaderType", "loading", "loadingText", "multi-sort", "no-data-text", "parent-ref", "server", "skeltonType", "sort-by", "table-type"]))], 8, Ki)], 2)];
    }), "footer.prepend": oe(() => [S(n)["footer.prepend"] ? de(m.$slots, "footer.prepend", { key: 0 }) : ge("", !0)]), _: 2 }, [S(n).loader ? { name: "loader", fn: oe(() => [de(m.$slots, "loader")]), key: "0" } : void 0, S(n).loading ? { name: "loading", fn: oe(() => [de(m.$slots, "loading")]), key: "1" } : void 0, S(n).thead ? { name: "thead", fn: oe((A) => [de(m.$slots, "thead", Pe(je({ ...A })))]), key: "2" } : void 0, S(n).body ? { name: "body", fn: oe((A) => [de(m.$slots, "body", Pe(je({ ...A })))]), key: "3" } : void 0, S(n).tbody ? { name: "tbody", fn: oe((A) => [de(m.$slots, "tbody", Pe(je({ ...A })))]), key: "4" } : void 0, S(n)["no-data"] ? { name: "no-data", fn: oe(() => [de(m.$slots, "no-data")]), key: "5" } : void 0, S(n).tfoot || m.showFooterRow ? { name: "tfoot", fn: oe((A) => [S(n).tfoot ? de(m.$slots, "tfoot", Pe(J({ key: 0 }, { ...A }))) : (U(), me(S(Oi), { key: m.level, colors: S(a).colors || null, density: S(a).density, footers: S(a).footers || [], items: S(a).items, level: S(a).level, "select-strategy": S(a).selectStrategy, "show-select": S(a).showSelect, "slot-props": { ...A }, "table-model-value": S(a).modelValue }, Qe({ _: 2 }, [De(S(n), (E, _) => ({ name: _, fn: oe((I) => [de(m.$slots, _, Pe(je({ ...I })))]) }))]), 1032, ["colors", "density", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "6" } : void 0, S(n).bottom ? { name: "bottom", fn: oe((A) => [(U(), me(S(ui), { key: m.level, "slot-props": A }, Qe({ _: 2 }, [De(S(n), (E, _) => ({ name: _, fn: oe((I) => [de(m.$slots, _, Pe(je({ ...I })))]) }))]), 1032, ["slot-props"]))]), key: "7" } : void 0]), 1040, ["modelValue", "class", "density", "expand-on-click", "expanded", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "search", "select-strategy", "show-expand", "sort-by", "style"])) : ge("", !0);
  };
} });
aa.install = (e) => {
  e.component("VDrilldownTable", aa);
};
export {
  aa as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset);overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-data-table{width:100%}.v-data-table__table{width:100%;border-collapse:separate;border-spacing:0}.v-data-table__tr--focus{border:1px dotted black}.v-data-table__tr--clickable{cursor:pointer}.v-data-table .v-table__wrapper>table>thead>tr>td,.v-data-table .v-table__wrapper>table>thead>tr th,.v-data-table .v-table__wrapper>table tbody>tr>td,.v-data-table .v-table__wrapper>table tbody>tr th{background:rgb(var(--v-theme-surface))}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end{text-align:end}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end .v-data-table-header__content{flex-direction:row-reverse}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center{text-align:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center .v-data-table-header__content{justify-content:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--no-padding{padding:0 8px}.v-data-table .v-table__wrapper>table>thead>tr>th,.v-data-table .v-table__wrapper>table tbody>tr>th{align-items:center}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--sortable:hover{cursor:pointer;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon{opacity:0}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon{opacity:.5}.v-data-table-column--fixed{position:sticky;z-index:2;left:0}.v-data-table-column--last-fixed{border-right:1px solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-data-table-group-header-row td{background:lightgrey}.v-data-table-group-header-row td>span{padding-left:5px}.v-data-table--loading .v-data-table__td{opacity:.3}.v-data-table-group-header-row__column{padding-left:calc(var(--v-data-table-group-header-row-depth) * 16px)!important}.v-data-table-header__content{display:flex;align-items:center}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;font-size:.875rem;padding:4px;border-radius:50%;background:rgba(var(--v-border-color),var(--v-border-opacity));min-width:20px;min-height:20px;width:20px;height:20px}.v-data-table-progress>th{border:none!important;height:auto!important;padding:0!important}.v-data-table-rows-loading,.v-data-table-rows-no-data{text-align:center}.v-data-table-footer{display:flex;align-items:center;flex-wrap:wrap;padding:0 8px;justify-content:flex-end}.v-data-table-footer__items-per-page{padding-inline-end:24px;display:flex;align-items:center;justify-content:space-between}.v-data-table-footer__items-per-page>span{padding-inline-end:24px}.v-data-table-footer__info{display:flex;padding-inline-end:24px}.v-data-table-footer__pagination{display:flex;align-items:center}.v-data-table-footer__page{padding:0 8px}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn{margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-field--single-line .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select--chips .v-select__selection,.v-select--selection-slot .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select--chips .v-select__selection:first-child,.v-select--selection-slot .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{grid-row-start:1;grid-column-start:1;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:grid;grid-template-rows:minmax(100%,1fr);grid-template-columns:1fr;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-grid;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-responsive__sizer,.v-responsive__content{position:relative;grid-row-start:1;grid-column-start:1}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 54px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 52px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 50px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 46px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 44px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 42px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 38px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 36px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 34px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 46px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 44px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 42px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 38px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 36px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 34px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 30px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 28px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 26px;--v-field-padding-bottom: 0px}.v-field--variant-outlined{--v-input-chips-margin-bottom: 2px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:calc(var(--v-field-input-min-height) + var(--v-input-chips-margin-bottom) + 2px);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%;--v-field-input-min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom))}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-table{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-table .v-table-divider{border-right:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>thead>tr>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity));color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tfoot>tr>td,.v-table .v-table__wrapper>table>tfoot>tr>th{border-top:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{background:rgb(var(--v-theme-surface));box-shadow:inset 0 -1px 0 rgba(var(--v-border-color),var(--v-border-opacity));z-index:1}.v-table.v-table--fixed-footer>tfoot>tr>th,.v-table.v-table--fixed-footer>tfoot>tr>td{background:rgb(var(--v-theme-surface));box-shadow:inset 0 1px 0 rgba(var(--v-border-color),var(--v-border-opacity))}.v-table{--v-table-header-height: 56px;border-radius:inherit;line-height:1.5;max-width:100%}.v-table>.v-table__wrapper>table{width:100%;border-spacing:0}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>th{padding:0 16px;transition:height cubic-bezier(.4,0,.2,1)}.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>th{font-weight:500;user-select:none;text-align:start}.v-table--density-default>.v-table__wrapper>table>tbody>tr>th,.v-table--density-default>.v-table__wrapper>table>thead>tr>th,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) + 0px)}.v-table--density-default>.v-table__wrapper>table>tbody>tr>td,.v-table--density-default>.v-table__wrapper>table>thead>tr>td,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) + 0px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 8px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 8px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>th,.v-table--density-compact>.v-table__wrapper>table>thead>tr>th,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 16px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>td,.v-table--density-compact>.v-table__wrapper>table>thead>tr>td,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 16px)}.v-table__wrapper{border-radius:inherit;overflow:auto}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-table--fixed-height>.v-table__wrapper{overflow-y:auto}.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border-bottom:0px!important;position:sticky;top:0}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th{border-top:0px!important;position:sticky;bottom:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1.v-locale--is-ltr,.v-locale--is-ltr .offset-1{margin-left:8.3333333333%}.offset-1.v-locale--is-rtl,.v-locale--is-rtl .offset-1{margin-right:8.3333333333%}.offset-2.v-locale--is-ltr,.v-locale--is-ltr .offset-2{margin-left:16.6666666667%}.offset-2.v-locale--is-rtl,.v-locale--is-rtl .offset-2{margin-right:16.6666666667%}.offset-3.v-locale--is-ltr,.v-locale--is-ltr .offset-3{margin-left:25%}.offset-3.v-locale--is-rtl,.v-locale--is-rtl .offset-3{margin-right:25%}.offset-4.v-locale--is-ltr,.v-locale--is-ltr .offset-4{margin-left:33.3333333333%}.offset-4.v-locale--is-rtl,.v-locale--is-rtl .offset-4{margin-right:33.3333333333%}.offset-5.v-locale--is-ltr,.v-locale--is-ltr .offset-5{margin-left:41.6666666667%}.offset-5.v-locale--is-rtl,.v-locale--is-rtl .offset-5{margin-right:41.6666666667%}.offset-6.v-locale--is-ltr,.v-locale--is-ltr .offset-6{margin-left:50%}.offset-6.v-locale--is-rtl,.v-locale--is-rtl .offset-6{margin-right:50%}.offset-7.v-locale--is-ltr,.v-locale--is-ltr .offset-7{margin-left:58.3333333333%}.offset-7.v-locale--is-rtl,.v-locale--is-rtl .offset-7{margin-right:58.3333333333%}.offset-8.v-locale--is-ltr,.v-locale--is-ltr .offset-8{margin-left:66.6666666667%}.offset-8.v-locale--is-rtl,.v-locale--is-rtl .offset-8{margin-right:66.6666666667%}.offset-9.v-locale--is-ltr,.v-locale--is-ltr .offset-9{margin-left:75%}.offset-9.v-locale--is-rtl,.v-locale--is-rtl .offset-9{margin-right:75%}.offset-10.v-locale--is-ltr,.v-locale--is-ltr .offset-10{margin-left:83.3333333333%}.offset-10.v-locale--is-rtl,.v-locale--is-rtl .offset-10{margin-right:83.3333333333%}.offset-11.v-locale--is-ltr,.v-locale--is-ltr .offset-11{margin-left:91.6666666667%}.offset-11.v-locale--is-rtl,.v-locale--is-rtl .offset-11{margin-right:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-0{margin-left:0}.offset-sm-0.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-0{margin-right:0}.offset-sm-1.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-1{margin-left:8.3333333333%}.offset-sm-1.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-1{margin-right:8.3333333333%}.offset-sm-2.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-2{margin-left:16.6666666667%}.offset-sm-2.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-2{margin-right:16.6666666667%}.offset-sm-3.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-3{margin-left:25%}.offset-sm-3.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-3{margin-right:25%}.offset-sm-4.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-4{margin-left:33.3333333333%}.offset-sm-4.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-4{margin-right:33.3333333333%}.offset-sm-5.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-5{margin-left:41.6666666667%}.offset-sm-5.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-5{margin-right:41.6666666667%}.offset-sm-6.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-6{margin-left:50%}.offset-sm-6.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-6{margin-right:50%}.offset-sm-7.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-7{margin-left:58.3333333333%}.offset-sm-7.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-7{margin-right:58.3333333333%}.offset-sm-8.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-8{margin-left:66.6666666667%}.offset-sm-8.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-8{margin-right:66.6666666667%}.offset-sm-9.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-9{margin-left:75%}.offset-sm-9.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-9{margin-right:75%}.offset-sm-10.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-10{margin-left:83.3333333333%}.offset-sm-10.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-10{margin-right:83.3333333333%}.offset-sm-11.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-11{margin-left:91.6666666667%}.offset-sm-11.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0.v-locale--is-ltr,.v-locale--is-ltr .offset-md-0{margin-left:0}.offset-md-0.v-locale--is-rtl,.v-locale--is-rtl .offset-md-0{margin-right:0}.offset-md-1.v-locale--is-ltr,.v-locale--is-ltr .offset-md-1{margin-left:8.3333333333%}.offset-md-1.v-locale--is-rtl,.v-locale--is-rtl .offset-md-1{margin-right:8.3333333333%}.offset-md-2.v-locale--is-ltr,.v-locale--is-ltr .offset-md-2{margin-left:16.6666666667%}.offset-md-2.v-locale--is-rtl,.v-locale--is-rtl .offset-md-2{margin-right:16.6666666667%}.offset-md-3.v-locale--is-ltr,.v-locale--is-ltr .offset-md-3{margin-left:25%}.offset-md-3.v-locale--is-rtl,.v-locale--is-rtl .offset-md-3{margin-right:25%}.offset-md-4.v-locale--is-ltr,.v-locale--is-ltr .offset-md-4{margin-left:33.3333333333%}.offset-md-4.v-locale--is-rtl,.v-locale--is-rtl .offset-md-4{margin-right:33.3333333333%}.offset-md-5.v-locale--is-ltr,.v-locale--is-ltr .offset-md-5{margin-left:41.6666666667%}.offset-md-5.v-locale--is-rtl,.v-locale--is-rtl .offset-md-5{margin-right:41.6666666667%}.offset-md-6.v-locale--is-ltr,.v-locale--is-ltr .offset-md-6{margin-left:50%}.offset-md-6.v-locale--is-rtl,.v-locale--is-rtl .offset-md-6{margin-right:50%}.offset-md-7.v-locale--is-ltr,.v-locale--is-ltr .offset-md-7{margin-left:58.3333333333%}.offset-md-7.v-locale--is-rtl,.v-locale--is-rtl .offset-md-7{margin-right:58.3333333333%}.offset-md-8.v-locale--is-ltr,.v-locale--is-ltr .offset-md-8{margin-left:66.6666666667%}.offset-md-8.v-locale--is-rtl,.v-locale--is-rtl .offset-md-8{margin-right:66.6666666667%}.offset-md-9.v-locale--is-ltr,.v-locale--is-ltr .offset-md-9{margin-left:75%}.offset-md-9.v-locale--is-rtl,.v-locale--is-rtl .offset-md-9{margin-right:75%}.offset-md-10.v-locale--is-ltr,.v-locale--is-ltr .offset-md-10{margin-left:83.3333333333%}.offset-md-10.v-locale--is-rtl,.v-locale--is-rtl .offset-md-10{margin-right:83.3333333333%}.offset-md-11.v-locale--is-ltr,.v-locale--is-ltr .offset-md-11{margin-left:91.6666666667%}.offset-md-11.v-locale--is-rtl,.v-locale--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-0{margin-left:0}.offset-lg-0.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-0{margin-right:0}.offset-lg-1.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-1{margin-left:8.3333333333%}.offset-lg-1.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-1{margin-right:8.3333333333%}.offset-lg-2.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-2{margin-left:16.6666666667%}.offset-lg-2.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-2{margin-right:16.6666666667%}.offset-lg-3.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-3{margin-left:25%}.offset-lg-3.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-3{margin-right:25%}.offset-lg-4.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-4{margin-left:33.3333333333%}.offset-lg-4.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-4{margin-right:33.3333333333%}.offset-lg-5.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-5{margin-left:41.6666666667%}.offset-lg-5.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-5{margin-right:41.6666666667%}.offset-lg-6.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-6{margin-left:50%}.offset-lg-6.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-6{margin-right:50%}.offset-lg-7.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-7{margin-left:58.3333333333%}.offset-lg-7.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-7{margin-right:58.3333333333%}.offset-lg-8.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-8{margin-left:66.6666666667%}.offset-lg-8.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-8{margin-right:66.6666666667%}.offset-lg-9.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-9{margin-left:75%}.offset-lg-9.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-9{margin-right:75%}.offset-lg-10.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-10{margin-left:83.3333333333%}.offset-lg-10.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-10{margin-right:83.3333333333%}.offset-lg-11.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-11{margin-left:91.6666666667%}.offset-lg-11.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-0{margin-left:0}.offset-xl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-0{margin-right:0}.offset-xl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-1{margin-left:8.3333333333%}.offset-xl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-1{margin-right:8.3333333333%}.offset-xl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-2{margin-left:16.6666666667%}.offset-xl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-2{margin-right:16.6666666667%}.offset-xl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-3{margin-left:25%}.offset-xl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-3{margin-right:25%}.offset-xl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-4{margin-left:33.3333333333%}.offset-xl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-4{margin-right:33.3333333333%}.offset-xl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-5{margin-left:41.6666666667%}.offset-xl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-5{margin-right:41.6666666667%}.offset-xl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-6{margin-left:50%}.offset-xl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-6{margin-right:50%}.offset-xl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-7{margin-left:58.3333333333%}.offset-xl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-7{margin-right:58.3333333333%}.offset-xl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-8{margin-left:66.6666666667%}.offset-xl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-8{margin-right:66.6666666667%}.offset-xl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-9{margin-left:75%}.offset-xl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-9{margin-right:75%}.offset-xl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-10{margin-left:83.3333333333%}.offset-xl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-10{margin-right:83.3333333333%}.offset-xl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-11{margin-left:91.6666666667%}.offset-xl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-11{margin-right:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-0{margin-left:0}.offset-xxl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-0{margin-right:0}.offset-xxl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-1{margin-right:8.3333333333%}.offset-xxl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-2{margin-right:16.6666666667%}.offset-xxl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-3{margin-left:25%}.offset-xxl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-3{margin-right:25%}.offset-xxl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-4{margin-right:33.3333333333%}.offset-xxl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-5{margin-right:41.6666666667%}.offset-xxl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-6{margin-left:50%}.offset-xxl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-6{margin-right:50%}.offset-xxl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-7{margin-right:58.3333333333%}.offset-xxl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-8{margin-right:66.6666666667%}.offset-xxl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-9{margin-left:75%}.offset-xxl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-9{margin-right:75%}.offset-xxl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-10{margin-right:83.3333333333%}.offset-xxl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-11{margin-left:91.6666666667%}.offset-xxl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-11{margin-right:91.6666666667%}}.v-drilldown-table--loader-tr[data-v-c69c3cdf]{height:0;position:relative;top:0;width:100%;z-index:99999}.v-drilldown-table--loader-tr-not-linear td[data-v-c69c3cdf]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-c69c3cdf]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-c69c3cdf]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-f8097bbc]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-f8097bbc]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-f8097bbc]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-f8097bbc],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-f8097bbc]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-f8097bbc]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-f8097bbc]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-f8097bbc]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-f8097bbc],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-f8097bbc],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-f8097bbc]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-f8097bbc]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-f25e6c95]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
