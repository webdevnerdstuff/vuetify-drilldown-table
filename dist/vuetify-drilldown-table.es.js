import { Fragment as re, reactive as _t, computed as g, watchEffect as qe, toRefs as ra, capitalize as Ft, warn as ul, watch as J, onScopeDispose as _e, effectScope as Gl, ref as U, unref as x, provide as ge, inject as fe, shallowRef as ue, defineComponent as Xe, camelize as sa, h as gt, getCurrentInstance as ir, TransitionGroup as ur, Transition as nt, createVNode as p, mergeProps as Z, nextTick as Ee, isRef as Ge, onMounted as At, toRaw as Ue, resolveDynamicComponent as ia, toRef as H, readonly as zl, Teleport as cr, withDirectives as Ae, vShow as yt, resolveDirective as Ye, onBeforeUnmount as at, Text as dr, onBeforeMount as Hl, cloneVNode as pr, createTextVNode as pt, withModifiers as fn, resolveComponent as ua, openBlock as Y, createElementBlock as ie, normalizeClass as oe, normalizeStyle as $e, createElementVNode as Re, createBlock as me, withCtx as ae, createCommentVNode as ye, toDisplayString as vr, renderSlot as de, useSlots as $t, renderList as De, getCurrentScope as fr, normalizeProps as Pe, mergeDefaults as mr, onUnmounted as gr, createSlots as et, guardReactiveProps as Ne } from "vue";
import { useTheme as cl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-1
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vuetify-drilldown-table
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
function ot(e, l) {
  if (e === l)
    return !0;
  if (e instanceof Date && l instanceof Date && e.getTime() !== l.getTime() || e !== Object(e) || l !== Object(l))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(l).length && t.every((n) => ot(e[n], l[n]));
}
function qt(e, l, t) {
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
    return qt(e, l, t);
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
function Fl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Al(e) {
  return e && "$el" in e ? e.$el : e;
}
const gn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Vt(e, l, t) {
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    l.some((r) => r instanceof RegExp ? r.test(a) : r === a) && !(t != null && t.some((r) => r === a)) ? n[a] = e[a] : o[a] = e[a];
  return [n, o];
}
function Wl(e, l) {
  const t = { ...e };
  return l.forEach((n) => delete t[n]), t;
}
function Kl(e) {
  return Vt(e, ["class", "style", "id", /^data-/]);
}
function Oe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function xt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(l, Math.min(t, e));
}
function st() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const o in e)
    n[o] = e[o];
  for (const o in l) {
    const a = e[o], r = l[o];
    Fl(a) && Fl(r) ? n[o] = st(a, r, t) : Array.isArray(a) && Array.isArray(r) && t ? n[o] = t(a, r) : n[o] = r;
  }
  return n;
}
function da(e) {
  return e.map((l) => l.type === re ? da(l.children) : l).flat();
}
function tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (tt.cache.has(e))
    return tt.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return tt.cache.set(e, l), l;
}
function Wt(e, l) {
  if (!l || typeof l != "object")
    return [];
  if (Array.isArray(l))
    return l.map((t) => Wt(e, t)).flat(1);
  if (Array.isArray(l.children))
    return l.children.map((t) => Wt(e, t)).flat(1);
  if (l.component) {
    if (Object.getOwnPropertySymbols(l.component.provides).includes(e))
      return [l.component];
    if (l.component.subTree)
      return Wt(e, l.component.subTree).flat(1);
  }
  return [];
}
function Ul(e) {
  const l = _t({}), t = g(e);
  return qe(() => {
    for (const n in t.value)
      l[n] = t.value[n];
  }, { flush: "sync" }), ra(l);
}
function Yt(e, l) {
  return e.includes(l);
}
tt.cache = /* @__PURE__ */ new Map();
const yr = /^on[^a-z]/, $l = (e) => yr.test(e);
function yn(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Te = () => [Function, Array];
function hn(e, l) {
  return !!(e[l = "on" + Ft(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
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
const pa = ["top", "bottom"], hr = ["start", "end", "left", "right"];
function Vl(e, l) {
  let [t, n] = e.split(" ");
  return n || (n = Yt(pa, t) ? "start" : Yt(hr, t) ? "top" : "center"), { side: bn(t, l), align: bn(n, l) };
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
function wn(e) {
  return Yt(pa, e.side) ? "y" : "x";
}
class dt {
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
function xn(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function ql(e) {
  const l = e.getBoundingClientRect(), t = getComputedStyle(e), n = t.transform;
  if (n) {
    let o, a, r, s, i;
    if (n.startsWith("matrix3d("))
      o = n.slice(9, -1).split(/, /), a = +o[0], r = +o[5], s = +o[12], i = +o[13];
    else {
      if (!n.startsWith("matrix("))
        return new dt(l);
      o = n.slice(7, -1).split(/, /), a = +o[0], r = +o[3], s = +o[4], i = +o[5];
    }
    const u = t.transformOrigin, d = l.x - s - (1 - a) * parseFloat(u), v = l.y - i - (1 - r) * parseFloat(u.slice(u.indexOf(" ") + 1)), c = a ? l.width / a : e.offsetWidth + 1, m = r ? l.height / r : e.offsetHeight + 1;
    return new dt({ x: d, y: v, width: c, height: m });
  }
  return new dt(l);
}
function it(e, l, t) {
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
const Gt = /* @__PURE__ */ new WeakMap();
function va(e) {
  ul(`Vuetify: ${e}`);
}
function kn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function M(e, l) {
  return (t) => Object.keys(e).reduce((n, o) => {
    const a = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return n[o] = t && o in t ? { ...a, default: t[o] } : a, l && !n[o].source && (n[o].source = l), n;
  }, {});
}
const se = M({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function lt(e, l) {
  let t;
  function n() {
    t = Gl(), t.run(() => l.length ? l(() => {
      t == null || t.stop(), n();
    }) : l());
  }
  J(e, (o) => {
    o && !t ? n() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), _e(() => {
    t == null || t.stop();
  });
}
const Yl = Symbol.for("vuetify:defaults");
function Xl() {
  const e = fe(Yl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Je(e, l) {
  const t = Xl(), n = U(e), o = g(() => {
    if (x(l == null ? void 0 : l.disabled))
      return t.value;
    const a = x(l == null ? void 0 : l.scoped), r = x(l == null ? void 0 : l.reset), s = x(l == null ? void 0 : l.root);
    let i = st(n.value, { prev: t.value });
    if (a)
      return i;
    if (r || s) {
      const u = Number(r || 1 / 0);
      for (let d = 0; d <= u && i && "prev" in i; d++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = st(st(i, { prev: i }), i[s])), i;
    }
    return i.prev ? st(i.prev, i) : i;
  });
  return ge(Yl, o), o;
}
function br() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xl();
  const n = Se("useDefaults");
  if (l = l ?? n.type.name ?? n.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const o = g(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? l];
  }), a = new Proxy(e, { get(s, i) {
    var d, v, c, m;
    const u = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(d = o.value) == null ? void 0 : d[i], u].filter((h) => h != null) : typeof i != "string" || function(h, k) {
      var f, b;
      return ((f = h.props) == null ? void 0 : f[k]) !== void 0 || ((b = h.props) == null ? void 0 : b[tt(k)]) !== void 0;
    }(n.vnode, i) ? u : ((v = o.value) == null ? void 0 : v[i]) ?? ((m = (c = t.value) == null ? void 0 : c.global) == null ? void 0 : m[i]) ?? u;
  } }), r = ue();
  return qe(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((i) => {
        let [u] = i;
        return u.startsWith(u[0].toUpperCase());
      });
      s.length && (r.value = Object.fromEntries(s));
    }
  }), { props: a, provideSubDefaults: function() {
    lt(r, () => {
      var s;
      Je(st(((s = function(i) {
        const { provides: u } = Se("injectSelf");
        if (u && i in u)
          return u[i];
      }(Yl)) == null ? void 0 : s.value) ?? {}, r.value));
    });
  } };
}
function vt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return va("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = M(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(t) {
      return Vt(t, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, n) {
      const o = Xl();
      if (!o.value)
        return e._setup(t, n);
      const { props: a, provideSubDefaults: r } = br(t, t._as ?? e.name, o), s = e._setup(a, n);
      return r(), s;
    };
  }
  return e;
}
function q() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? vt : Xe)(l);
}
function fa(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return q()({ name: t ?? Ft(sa(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...se() }, setup(n, o) {
    let { slots: a } = o;
    return () => {
      var r;
      return gt(n.tag, { class: [e, n.class], style: n.style }, (r = a.default) == null ? void 0 : r.call(a));
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
const Jt = "cubic-bezier(0.4, 0, 0.2, 1)";
function Se(e, l) {
  const t = ir();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return t;
}
function ze() {
  const e = Se(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return tt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ga = 0, Kt = /* @__PURE__ */ new WeakMap();
function Le() {
  const e = Se("getUid");
  if (Kt.has(e))
    return Kt.get(e);
  {
    const l = ga++;
    return Kt.set(e, l), l;
  }
}
function Zt(e, l) {
  const t = [];
  if (l && e && !l.contains(e))
    return t;
  for (; e && (Jl(e) && t.push(e), e !== l); )
    e = e.parentElement;
  return t;
}
function Jl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
Le.reset = () => {
  ga = 0, Kt = /* @__PURE__ */ new WeakMap();
};
const Ie = typeof window < "u", Zl = Ie && "IntersectionObserver" in window, El = Ie && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function te(e) {
  Se("useRender").render = e;
}
const Sr = M({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Be(e, l, t) {
  return q()({ name: e, props: Sr({ mode: t, origin: l }), setup(n, o) {
    let { slots: a } = o;
    const r = { onBeforeEnter(s) {
      n.origin && (s.style.transformOrigin = n.origin);
    }, onLeave(s) {
      if (n.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: u, offsetWidth: d, offsetHeight: v } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${i}px`, s.style.left = `${u}px`, s.style.width = `${d}px`, s.style.height = `${v}px`;
      }
      n.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (n.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: i, top: u, left: d, width: v, height: c } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = i || "", s.style.top = u || "", s.style.left = d || "", s.style.width = v || "", s.style.height = c || "";
      }
    } };
    return () => {
      const s = n.group ? ur : nt;
      return gt(s, { name: n.disabled ? "" : e, css: !n.disabled, ...n.group ? void 0 : { mode: n.mode }, ...n.disabled ? {} : r }, a.default);
    };
  } });
}
function ya(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return q()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(n, o) {
    let { slots: a } = o;
    return () => gt(nt, { name: n.disabled ? "" : e, css: !n.disabled, ...n.disabled ? {} : l }, a.default);
  } });
}
function ha() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = sa(`offset-${l}`);
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
const wr = M({ target: Object }, "v-dialog-transition"), ba = q()({ name: "VDialogTransition", props: wr(), setup(e, l) {
  let { slots: t } = l;
  const n = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, a) {
    var c;
    await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), o.style.visibility = "";
    const { x: r, y: s, sx: i, sy: u, speed: d } = Bn(e.target, o), v = it(o, [{ transform: `translate(${r}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }, {}], { duration: 225 * d, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (c = Cn(o)) == null || c.forEach((m) => {
      it(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Jt });
    }), v.finished.then(() => a());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, a) {
    var v;
    await new Promise((c) => requestAnimationFrame(c));
    const { x: r, y: s, sx: i, sy: u, speed: d } = Bn(e.target, o);
    it(o, [{}, { transform: `translate(${r}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }], { duration: 125 * d, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => a()), (v = Cn(o)) == null || v.forEach((c) => {
      it(c, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Jt });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? p(nt, Z({ name: "dialog-transition" }, n, { css: !1 }), t) : p(nt, { name: "dialog-transition" }, t);
} });
function Cn(e) {
  var t;
  const l = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return l && [...l];
}
function Bn(e, l) {
  const t = e.getBoundingClientRect(), n = ql(l), [o, a] = getComputedStyle(l).transformOrigin.split(" ").map((b) => parseFloat(b)), [r, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  r === "left" || s === "left" ? i -= t.width / 2 : r !== "right" && s !== "right" || (i += t.width / 2);
  let u = t.top + t.height / 2;
  r === "top" || s === "top" ? u -= t.height / 2 : r !== "bottom" && s !== "bottom" || (u += t.height / 2);
  const d = t.width / n.width, v = t.height / n.height, c = Math.max(1, d, v), m = d / c || 0, h = v / c || 0, k = n.width * n.height / (window.innerWidth * window.innerHeight), f = k > 0.12 ? Math.min(1.5, 10 * (k - 0.12) + 1) : 1;
  return { x: i - (o + n.left), y: u - (a + n.top), sx: m, sy: h, speed: f };
}
Be("fab-transition", "center center", "out-in"), Be("dialog-bottom-transition"), Be("dialog-top-transition"), Be("fade-transition"), Be("scale-transition"), Be("scroll-x-transition"), Be("scroll-x-reverse-transition"), Be("scroll-y-transition"), Be("scroll-y-reverse-transition"), Be("slide-x-transition"), Be("slide-x-reverse-transition");
const Sa = Be("slide-y-transition");
Be("slide-y-reverse-transition");
const xr = ya("expand-transition", ha()), wa = ya("expand-x-transition", ha("", !0)), kr = M({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ve = q(!1)({ name: "VDefaultsProvider", props: kr(), setup(e, l) {
  let { slots: t } = l;
  const { defaults: n, disabled: o, reset: a, root: r, scoped: s } = ra(e);
  return Je(n, { reset: a, root: r, scoped: s, disabled: o }), () => {
    var i;
    return (i = t.default) == null ? void 0 : i.call(t);
  };
} });
function wl(e, l) {
  return { x: e.x + l.x, y: e.y + l.y };
}
function Pn(e, l) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: n } = e;
    return wl({ x: n === "left" ? 0 : n === "center" ? l.width / 2 : n === "right" ? l.width : n, y: t === "top" ? 0 : t === "bottom" ? l.height : t }, l);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: n } = e;
    return wl({ x: t === "left" ? 0 : t === "right" ? l.width : t, y: n === "top" ? 0 : n === "center" ? l.height / 2 : n === "bottom" ? l.height : n }, l);
  }
  return wl({ x: l.width / 2, y: l.height / 2 }, l);
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
  const { preferredAnchor: n, preferredOrigin: o } = Ul(() => {
    const m = Vl(l.location, e.isRtl.value), h = l.origin === "overlap" ? m : l.origin === "auto" ? bl(m) : Vl(l.origin, e.isRtl.value);
    return m.side === h.side && m.align === Sl(h).align ? { preferredAnchor: Sn(m), preferredOrigin: Sn(h) } : { preferredAnchor: m, preferredOrigin: h };
  }), [a, r, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => g(() => {
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
  let d = !1;
  const v = new ResizeObserver(() => {
    d && c();
  });
  function c() {
    if (d = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => d = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const m = e.activatorEl.value.getBoundingClientRect(), h = function(C, S) {
      const F = ql(C);
      return S ? F.x += parseFloat(C.style.right || 0) : F.x -= parseFloat(C.style.left || 0), F.y -= parseFloat(C.style.top || 0), F;
    }(e.contentEl.value, e.isRtl.value), k = Zt(e.contentEl.value);
    k.length || (k.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const f = k.reduce((C, S) => {
      const F = S.getBoundingClientRect(), D = new dt({ x: S === document.documentElement ? 0 : F.x, y: S === document.documentElement ? 0 : F.y, width: S.clientWidth, height: S.clientHeight });
      return C ? new dt({ x: Math.max(C.left, D.left), y: Math.max(C.top, D.top), width: Math.min(C.right, D.right) - Math.max(C.left, D.left), height: Math.min(C.bottom, D.bottom) - Math.max(C.top, D.top) }) : D;
    }, void 0);
    f.x += 12, f.y += 12, f.width -= 24, f.height -= 24;
    let b = { anchor: n.value, origin: o.value };
    function w(C) {
      const S = new dt(h), F = Pn(C.anchor, m), D = Pn(C.origin, S);
      let { x: B, y: A } = (L = D, { x: (I = F).x - L.x, y: I.y - L.y });
      var I, L;
      switch (C.anchor.side) {
        case "top":
          A -= u.value[0];
          break;
        case "bottom":
          A += u.value[0];
          break;
        case "left":
          B -= u.value[0];
          break;
        case "right":
          B += u.value[0];
      }
      switch (C.anchor.align) {
        case "top":
          A -= u.value[1];
          break;
        case "bottom":
          A += u.value[1];
          break;
        case "left":
          B -= u.value[1];
          break;
        case "right":
          B += u.value[1];
      }
      return S.x += B, S.y += A, S.width = Math.min(S.width, s.value), S.height = Math.min(S.height, i.value), { overflows: xn(S, f), x: B, y: A };
    }
    let y = 0, P = 0;
    const V = { x: 0, y: 0 }, E = { x: !1, y: !1 };
    let $ = -1;
    for (; ; ) {
      if ($++ > 10) {
        ul("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: C, y: S, overflows: F } = w(b);
      y += C, P += S, h.x += C, h.y += S;
      {
        const D = wn(b.anchor), B = F.x.before || F.x.after, A = F.y.before || F.y.after;
        let I = !1;
        if (["x", "y"].forEach((L) => {
          if (L === "x" && B && !E.x || L === "y" && A && !E.y) {
            const N = { anchor: { ...b.anchor }, origin: { ...b.origin } }, T = L === "x" ? D === "y" ? Sl : bl : D === "y" ? bl : Sl;
            N.anchor = T(N.anchor), N.origin = T(N.origin);
            const { overflows: z } = w(N);
            (z[L].before <= F[L].before && z[L].after <= F[L].after || z[L].before + z[L].after < (F[L].before + F[L].after) / 2) && (b = N, I = E[L] = !0);
          }
        }), I)
          continue;
      }
      F.x.before && (y += F.x.before, h.x += F.x.before), F.x.after && (y -= F.x.after, h.x -= F.x.after), F.y.before && (P += F.y.before, h.y += F.y.before), F.y.after && (P -= F.y.after, h.y -= F.y.after);
      {
        const D = xn(h, f);
        V.x = f.width - D.x.before - D.x.after, V.y = f.height - D.y.before - D.y.after, y += D.x.before, h.x += D.x.before, P += D.y.before, h.y += D.y.before;
      }
      break;
    }
    const _ = wn(b.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${b.anchor.side} ${b.anchor.align}`, transformOrigin: `${b.origin.side} ${b.origin.align}`, top: X(xl(P)), left: e.isRtl.value ? void 0 : X(xl(y)), right: e.isRtl.value ? X(xl(-y)) : void 0, minWidth: X(_ === "y" ? Math.min(a.value, m.width) : a.value), maxWidth: X(_n(xt(V.x, a.value === 1 / 0 ? 0 : a.value, s.value))), maxHeight: X(_n(xt(V.y, r.value === 1 / 0 ? 0 : r.value, i.value))) }), { available: V, contentBox: h };
  }
  return J([e.activatorEl, e.contentEl], (m, h) => {
    let [k, f] = m, [b, w] = h;
    b && v.unobserve(b), k && v.observe(k), w && v.unobserve(w), f && v.observe(f);
  }, { immediate: !0 }), _e(() => {
    v.disconnect();
  }), J(() => [n.value, o.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => c()), Ee(() => {
    const m = c();
    if (!m)
      return;
    const { available: h, contentBox: k } = m;
    k.height > h.y && requestAnimationFrame(() => {
      c(), requestAnimationFrame(() => {
        c();
      });
    });
  }), { updateLocation: c };
} }, Cr = M({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in xa }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function xl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function _n(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Il = !0;
const Qt = [];
let Fn = -1;
function Ol() {
  cancelAnimationFrame(Fn), Fn = requestAnimationFrame(() => {
    const e = Qt.shift();
    e && e(), Qt.length ? Ol() : Il = !0;
  });
}
const Ut = { none: null, close: function(e) {
  An(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, n = [.../* @__PURE__ */ new Set([...Zt(e.activatorEl.value, l.contained ? t : void 0), ...Zt(e.contentEl.value, l.contained ? t : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, a = (r = t || document.documentElement, Jl(r) && r);
  var r;
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((i, u) => {
    i.style.setProperty("--v-body-scroll-x", X(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", X(-i.scrollTop)), i.style.setProperty("--v-scrollbar-offset", X(o)), i.classList.add("v-overlay-scroll-blocked");
  }), _e(() => {
    n.forEach((i, u) => {
      const d = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), v = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -d, i.scrollTop = -v;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, t) {
  let n = !1, o = -1, a = -1;
  function r(s) {
    var i;
    i = () => {
      var v, c;
      const u = performance.now();
      (c = (v = e.updateLocation).value) == null || c.call(v, s), n = (performance.now() - u) / (1e3 / 60) > 2;
    }, !Il || Qt.length ? (Qt.push(i), Ol()) : (Il = !1, i(), Ol());
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
} }, Br = M({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Ut } }, "VOverlay-scroll-strategies");
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
const Dl = Symbol.for("vuetify:v-menu"), Pr = M({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), _r = M({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Pr() }, "VOverlay-activator");
function Fr(e, l) {
  let { isActive: t, isTop: n } = l;
  const o = U();
  let a = !1, r = !1, s = !0;
  const i = g(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), u = g(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: d, runCloseDelay: v } = function($, _) {
    const C = {}, S = (F) => () => {
      if (!Ie)
        return Promise.resolve(!0);
      const D = F === "openDelay";
      return C.closeDelay && window.clearTimeout(C.closeDelay), delete C.closeDelay, C.openDelay && window.clearTimeout(C.openDelay), delete C.openDelay, new Promise((B) => {
        const A = parseInt($[F] ?? 0, 10);
        C[F] = window.setTimeout(() => {
          _ == null || _(D), B(D);
        }, A);
      });
    };
    return { runCloseDelay: S("closeDelay"), runOpenDelay: S("openDelay") };
  }(e, ($) => {
    $ !== (e.openOnHover && a || i.value && r) || e.openOnHover && t.value && !n.value || (t.value !== $ && (s = !0), t.value = $);
  }), c = ($) => {
    $.stopPropagation(), o.value = $.currentTarget || $.target, t.value = !t.value;
  }, m = ($) => {
    var _;
    (_ = $.sourceCapabilities) != null && _.firesTouchEvents || (a = !0, o.value = $.currentTarget || $.target, d());
  }, h = ($) => {
    a = !1, v();
  }, k = ($) => {
    El && !$.target.matches(":focus-visible") || (r = !0, $.stopPropagation(), o.value = $.currentTarget || $.target, d());
  }, f = ($) => {
    r = !1, $.stopPropagation(), v();
  }, b = g(() => {
    const $ = {};
    return u.value && ($.onClick = c), e.openOnHover && ($.onMouseenter = m, $.onMouseleave = h), i.value && ($.onFocus = k, $.onBlur = f), $;
  }), w = g(() => {
    const $ = {};
    if (e.openOnHover && ($.onMouseenter = () => {
      a = !0, d();
    }, $.onMouseleave = () => {
      a = !1, v();
    }), i.value && ($.onFocusin = () => {
      r = !0, d();
    }, $.onFocusout = () => {
      r = !1, v();
    }), e.closeOnContentClick) {
      const _ = fe(Dl, null);
      $.onClick = () => {
        t.value = !1, _ == null || _.closeParents();
      };
    }
    return $;
  }), y = g(() => {
    const $ = {};
    return e.openOnHover && ($.onMouseenter = () => {
      s && (a = !0, s = !1, d());
    }, $.onMouseleave = () => {
      a = !1, v();
    }), $;
  });
  J(n, ($) => {
    !$ || (!e.openOnHover || a || i.value && r) && (!i.value || r || e.openOnHover && a) || (t.value = !1);
  });
  const P = U();
  qe(() => {
    P.value && Ee(() => {
      o.value = Al(P.value);
    });
  });
  const V = Se("useActivator");
  let E;
  return J(() => !!e.activator, ($) => {
    $ && Ie ? (E = Gl(), E.run(() => {
      (function(_, C, S) {
        let { activatorEl: F, activatorEvents: D } = S;
        function B() {
          let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I(), N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.activatorProps;
          L && function(T, z) {
            Object.keys(z).forEach((j) => {
              if ($l(j)) {
                const W = yn(j), O = Gt.get(T);
                if (z[j] == null)
                  O == null || O.forEach((G) => {
                    const [R, K] = G;
                    R === W && (T.removeEventListener(W, K), O.delete(G));
                  });
                else if (!O || ![...O].some((G) => G[0] === W && G[1] === z[j])) {
                  T.addEventListener(W, z[j]);
                  const G = O || /* @__PURE__ */ new Set();
                  G.add([W, z[j]]), Gt.has(T) || Gt.set(T, G);
                }
              } else
                z[j] == null ? T.removeAttribute(j) : T.setAttribute(j, z[j]);
            });
          }(L, Z(D.value, N));
        }
        function A() {
          let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I(), N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.activatorProps;
          L && function(T, z) {
            Object.keys(z).forEach((j) => {
              if ($l(j)) {
                const W = yn(j), O = Gt.get(T);
                O == null || O.forEach((G) => {
                  const [R, K] = G;
                  R === W && (T.removeEventListener(W, K), O.delete(G));
                });
              } else
                T.removeAttribute(j);
            });
          }(L, Z(D.value, N));
        }
        function I() {
          var T, z;
          let L, N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _.activator;
          if (N)
            if (N === "parent") {
              let j = (z = (T = C == null ? void 0 : C.proxy) == null ? void 0 : T.$el) == null ? void 0 : z.parentNode;
              for (; j.hasAttribute("data-no-activator"); )
                j = j.parentNode;
              L = j;
            } else
              L = typeof N == "string" ? document.querySelector(N) : "$el" in N ? N.$el : N;
          return F.value = (L == null ? void 0 : L.nodeType) === Node.ELEMENT_NODE ? L : null, F.value;
        }
        J(() => _.activator, (L, N) => {
          if (N && L !== N) {
            const T = I(N);
            T && A(T);
          }
          L && Ee(() => B());
        }, { immediate: !0 }), J(() => _.activatorProps, () => {
          B();
        }), _e(() => {
          A();
        });
      })(e, V, { activatorEl: o, activatorEvents: b });
    })) : E && E.stop();
  }, { flush: "post", immediate: !0 }), _e(() => {
    E == null || E.stop();
  }), { activatorEl: o, activatorRef: P, activatorEvents: b, contentEvents: w, scrimEvents: y };
}
function Ql(e) {
  return Ul(() => {
    const l = [], t = {};
    return e.value.background && (kn(e.value.background) ? t.backgroundColor = e.value.background : l.push(`bg-${e.value.background}`)), e.value.text && (kn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: t };
  });
}
function je(e, l) {
  const t = g(() => ({ text: Ge(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = Ql(t);
  return { textColorClasses: n, textColorStyles: o };
}
function ft(e, l) {
  const t = g(() => ({ background: Ge(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = Ql(t);
  return { backgroundColorClasses: n, backgroundColorStyles: o };
}
const Et = M({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function It(e) {
  return { dimensionStyles: g(() => ({ height: X(e.height), maxHeight: X(e.maxHeight), maxWidth: X(e.maxWidth), minHeight: X(e.minHeight), minWidth: X(e.minWidth), width: X(e.width) })) };
}
const dl = ["sm", "md", "lg", "xl", "xxl"], Ar = Symbol.for("vuetify:display");
function $r() {
  if (!Ie)
    return ue(!1);
  const { ssr: e } = function() {
    const l = fe(Ar);
    if (!l)
      throw new Error("Could not find Vuetify display injection");
    return l;
  }();
  if (e) {
    const l = ue(!1);
    return At(() => {
      l.value = !0;
    }), l;
  }
  return ue(!0);
}
const Vr = M({ eager: Boolean }, "lazy");
function ve(e, l, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const a = Se("useProxiedModel"), r = U(e[l] !== void 0 ? e[l] : t), s = tt(l), i = g(s !== l ? () => {
    var d, v, c, m;
    return e[l], !(!((d = a.vnode.props) != null && d.hasOwnProperty(l)) && !((v = a.vnode.props) != null && v.hasOwnProperty(s)) || !((c = a.vnode.props) != null && c.hasOwnProperty(`onUpdate:${l}`)) && !((m = a.vnode.props) != null && m.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var d, v;
    return e[l], !(!((d = a.vnode.props) != null && d.hasOwnProperty(l)) || !((v = a.vnode.props) != null && v.hasOwnProperty(`onUpdate:${l}`)));
  });
  lt(() => !i.value, () => {
    J(() => e[l], (d) => {
      r.value = d;
    });
  });
  const u = g({ get() {
    const d = e[l];
    return n(i.value ? d : r.value);
  }, set(d) {
    const v = o(d), c = Ue(i.value ? e[l] : r.value);
    c !== v && n(c) !== d && (r.value = v, a == null || a.emit(`update:${l}`, v));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => i.value ? e[l] : r.value }), u;
}
const ka = Symbol.for("vuetify:locale");
function ht() {
  const e = fe(ka);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ot() {
  const e = fe(ka);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function en(e, l) {
  const t = ia("RouterLink"), n = g(() => !(!e.href && !e.to)), o = g(() => (n == null ? void 0 : n.value) || hn(l, "click") || hn(e, "click"));
  if (typeof t == "string")
    return { isLink: n, isClickable: o, href: H(e, "href") };
  const a = e.to ? t.useLink(e) : void 0;
  return { isLink: n, isClickable: o, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && g(() => {
    var r, s;
    return e.exact ? (r = a.isExactActive) == null ? void 0 : r.value : (s = a.isActive) == null ? void 0 : s.value;
  }), href: g(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const tn = M({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let kl = !1;
function Ca() {
  const e = Se("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const $n = Symbol.for("vuetify:stack"), St = _t([]), Vn = Symbol.for("vuetify:theme"), be = M({ theme: String }, "theme");
function Ce(e) {
  Se("provideTheme");
  const l = fe(Vn, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const t = g(() => e.theme ?? (l == null ? void 0 : l.name.value)), n = g(() => l.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...l, name: t, themeClasses: n };
  return ge(Vn, o), o;
}
const Dt = M({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ke = (e, l) => {
  let { slots: t } = l;
  const { transition: n, disabled: o, ...a } = e, { component: r = nt, ...s } = typeof n == "object" ? n : {};
  return gt(r, Z(typeof n == "string" ? { name: o ? "" : n } : s, a, { disabled: o }), t);
};
function Er() {
  return !0;
}
function En(e, l, t) {
  if (!e || Ba(e, t) === !1)
    return !1;
  const n = ma(l);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(l), !o.some((a) => a == null ? void 0 : a.contains(e.target));
}
function Ba(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || Er)(e);
}
function In(e, l) {
  const t = ma(e);
  l(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && l(t);
}
const Ir = { mounted(e, l) {
  const t = (o) => function(a, r, s) {
    const i = typeof s.value == "function" ? s.value : s.value.handler;
    r._clickOutside.lastMousedownWasOutside && En(a, r, s) && setTimeout(() => {
      Ba(a, s) && i && i(a);
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
function Or(e) {
  const { modelValue: l, color: t, ...n } = e;
  return p(nt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && p("div", Z({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, n), null)] });
}
const Pa = M({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [String, Boolean], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ..._r(), ...se(), ...Et(), ...Vr(), ...Cr(), ...Br(), ...be(), ...Dt() }, "VOverlay"), On = q()({ name: "VOverlay", directives: { ClickOutside: Ir }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Pa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var j, W;
  let { slots: t, attrs: n, emit: o } = l;
  const a = ve(e, "modelValue"), r = g({ get: () => a.value, set: (O) => {
    O && e.disabled || (a.value = O);
  } }), { teleportTarget: s } = (i = g(() => e.attach || e.contained), { teleportTarget: g(() => {
    const O = i.value;
    if (O === !0 || !Ie)
      return;
    const G = O === !1 ? document.body : typeof O == "string" ? document.querySelector(O) : O;
    if (G == null)
      return void ul(`Unable to locate target ${O}`);
    let R = G.querySelector(":scope > .v-overlay-container");
    return R || (R = document.createElement("div"), R.className = "v-overlay-container", G.appendChild(R)), R;
  }) });
  var i;
  const { themeClasses: u } = Ce(e), { rtlClasses: d, isRtl: v } = Ot(), { hasContent: c, onAfterLeave: m } = function(O, G) {
    const R = ue(!1), K = g(() => R.value || O.eager || G.value);
    return J(G, () => R.value = !0), { isBooted: R, hasContent: K, onAfterLeave: function() {
      O.eager || (R.value = !1);
    } };
  }(e, r), h = ft(g(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: k, localTop: f, stackStyles: b } = function(O, G, R) {
    const K = Se("useStack"), le = !R, ee = fe($n, void 0), Q = _t({ activeChildren: /* @__PURE__ */ new Set() });
    ge($n, Q);
    const ce = ue(+G.value);
    lt(O, () => {
      var bt;
      const Me = (bt = St.at(-1)) == null ? void 0 : bt[1];
      ce.value = Me ? Me + 10 : +G.value, le && St.push([K.uid, ce.value]), ee == null || ee.activeChildren.add(K.uid), _e(() => {
        if (le) {
          const rr = Ue(St).findIndex((sr) => sr[0] === K.uid);
          St.splice(rr, 1);
        }
        ee == null || ee.activeChildren.delete(K.uid);
      });
    });
    const xe = ue(!0);
    le && qe(() => {
      var bt;
      const Me = ((bt = St.at(-1)) == null ? void 0 : bt[0]) === K.uid;
      setTimeout(() => xe.value = Me);
    });
    const hl = g(() => !Q.activeChildren.size);
    return { globalTop: zl(xe), localTop: hl, stackStyles: g(() => ({ zIndex: ce.value })) };
  }(r, H(e, "zIndex"), e._disableGlobalStack), { activatorEl: w, activatorRef: y, activatorEvents: P, contentEvents: V, scrimEvents: E } = Fr(e, { isActive: r, isTop: f }), { dimensionStyles: $ } = It(e), _ = $r(), { scopeId: C } = Ca();
  J(() => e.disabled, (O) => {
    O && (r.value = !1);
  });
  const S = U(), F = U(), { contentStyles: D, updateLocation: B } = function(O, G) {
    const R = U({}), K = U();
    function le(ee) {
      var Q;
      (Q = K.value) == null || Q.call(K, ee);
    }
    return Ie && (lt(() => !(!G.isActive.value || !O.locationStrategy), (ee) => {
      var Q, ce;
      J(() => O.locationStrategy, ee), _e(() => {
        K.value = void 0;
      }), typeof O.locationStrategy == "function" ? K.value = (Q = O.locationStrategy(G, O, R)) == null ? void 0 : Q.updateLocation : K.value = (ce = xa[O.locationStrategy](G, O, R)) == null ? void 0 : ce.updateLocation;
    }), window.addEventListener("resize", le, { passive: !0 }), _e(() => {
      window.removeEventListener("resize", le), K.value = void 0;
    })), { contentStyles: R, updateLocation: K };
  }(e, { isRtl: v, contentEl: F, activatorEl: w, isActive: r });
  function A(O) {
    o("click:outside", O), e.persistent ? z() : r.value = !1;
  }
  function I() {
    return r.value && k.value;
  }
  function L(O) {
    var G, R;
    O.key === "Escape" && k.value && (e.persistent ? z() : (r.value = !1, (G = F.value) != null && G.contains(document.activeElement) && ((R = w.value) == null || R.focus())));
  }
  (function(O, G) {
    if (!Ie)
      return;
    let R;
    qe(async () => {
      R == null || R.stop(), G.isActive.value && O.scrollStrategy && (R = Gl(), await Ee(), R.active && R.run(() => {
        var K;
        typeof O.scrollStrategy == "function" ? O.scrollStrategy(G, O, R) : (K = Ut[O.scrollStrategy]) == null || K.call(Ut, G, O, R);
      }));
    }), _e(() => {
      R == null || R.stop();
    });
  })(e, { root: S, contentEl: F, activatorEl: w, isActive: r, updateLocation: B }), Ie && J(r, (O) => {
    O ? window.addEventListener("keydown", L) : window.removeEventListener("keydown", L);
  }, { immediate: !0 });
  const N = (W = (j = Se("useRouter")) == null ? void 0 : j.proxy) == null ? void 0 : W.$router;
  lt(() => e.closeOnBack, () => {
    (function(O, G) {
      let R, K, le = !1;
      function ee(Q) {
        var ce;
        (ce = Q.state) != null && ce.replaced || (le = !0, setTimeout(() => le = !1));
      }
      Ie && (Ee(() => {
        window.addEventListener("popstate", ee), R = O == null ? void 0 : O.beforeEach((Q, ce, xe) => {
          kl ? le ? G(xe) : xe() : setTimeout(() => le ? G(xe) : xe()), kl = !0;
        }), K = O == null ? void 0 : O.afterEach(() => {
          kl = !1;
        });
      }), _e(() => {
        window.removeEventListener("popstate", ee), R == null || R(), K == null || K();
      }));
    })(N, (O) => {
      k.value && r.value ? (O(!1), e.persistent ? z() : r.value = !1) : O();
    });
  });
  const T = U();
  function z() {
    e.noClickAnimation || F.value && it(F.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Jt });
  }
  return J(() => r.value && (e.absolute || e.contained) && s.value == null, (O) => {
    if (O) {
      const G = function(R) {
        for (; R; ) {
          if (Jl(R))
            return R;
          R = R.parentElement;
        }
        return document.scrollingElement;
      }(S.value);
      G && G !== document.scrollingElement && (T.value = G.scrollTop);
    }
  }), te(() => {
    var O;
    return p(re, null, [(O = t.activator) == null ? void 0 : O.call(t, { isActive: r.value, props: Z({ ref: y }, P.value, e.activatorProps) }), _.value && p(cr, { disabled: !s.value, to: s.value }, { default: () => [c.value && p("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": r.value, "v-overlay--contained": e.contained }, u.value, d.value, e.class], style: [b.value, { top: X(T.value) }, e.style], ref: S }, C, n), [p(Or, Z({ color: h, modelValue: r.value && !!e.scrim }, E.value), null), p(Ke, { appear: !0, persisted: !0, transition: e.transition, target: w.value, onAfterLeave: () => {
      m(), o("afterLeave");
    } }, { default: () => {
      var G;
      return [Ae(p("div", Z({ ref: F, class: ["v-overlay__content", e.contentClass], style: [$.value, D.value] }, V.value, e.contentProps), [(G = t.default) == null ? void 0 : G.call(t, { isActive: r })]), [[yt, r.value], [Ye("click-outside"), { handler: A, closeConditional: I, include: () => [w.value] }]])];
    } })])] })]);
  }), { activatorEl: w, animateClick: z, contentEl: F, globalTop: k, localTop: f, updateLocation: B };
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
function ln(e) {
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
        const d = u.slice();
        for (; d.length; ) {
          const v = d.shift(), c = Bl(v.value, a);
          if (c)
            return c;
          const m = v.value && v.value[Cl];
          m && d.push(...m);
        }
      }
    }
  } });
}
const Dr = (e, l, t) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), Tr = M({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function Lr(e, l, t, n) {
  const o = g(() => typeof (t == null ? void 0 : t.value) != "string" && typeof (t == null ? void 0 : t.value) != "number" ? "" : String(t.value)), a = U([]), r = U(/* @__PURE__ */ new Map()), s = g(() => n != null && n.transform ? x(l).map(n == null ? void 0 : n.transform) : x(l));
  return qe(() => {
    a.value = [], r.value = /* @__PURE__ */ new Map();
    const i = function(d, v, c) {
      var b;
      const m = [], h = (c == null ? void 0 : c.default) ?? Dr, k = !!(c != null && c.filterKeys) && Oe(c.filterKeys), f = Object.keys((c == null ? void 0 : c.customKeyFilter) ?? {}).length;
      if (!(d != null && d.length))
        return m;
      e:
        for (let w = 0; w < d.length; w++) {
          const y = d[w], P = {}, V = {};
          let E = -1;
          if (v && !(c != null && c.noFilter)) {
            if (typeof y == "object") {
              const C = k || Object.keys(y);
              for (const S of C) {
                const F = ke(y, S, y), D = (b = c == null ? void 0 : c.customKeyFilter) == null ? void 0 : b[S];
                if (E = D ? D(F, v, y) : h(F, v, y), E !== -1 && E !== !1)
                  D ? P[S] = E : V[S] = E;
                else if ((c == null ? void 0 : c.filterMode) === "every")
                  continue e;
              }
            } else
              E = h(y, v, y), E !== -1 && E !== !1 && (V.title = E);
            const $ = Object.keys(V).length, _ = Object.keys(P).length;
            if (!$ && !_ || (c == null ? void 0 : c.filterMode) === "union" && _ !== f && !$ || (c == null ? void 0 : c.filterMode) === "intersection" && (_ !== f || !$))
              continue;
          }
          m.push({ index: w, matches: { ...V, ...P } });
        }
      return m;
    }(s.value, o.value, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), u = x(l);
    i.forEach((d) => {
      let { index: v, matches: c } = d;
      const m = u[v];
      a.value.push(m), r.value.set(m.value, c);
    });
  }), { filteredItems: a, filteredMatches: r, getMatches: function(i) {
    return r.value.get(i.value);
  } };
}
const we = M({ tag: { type: String, default: "div" } }, "tag"), Mr = M({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), _a = Symbol.for("vuetify:datatable:expanded");
function Fa(e) {
  const l = H(e, "expandOnClick"), t = ve(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
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
  return ge(_a, a), a;
}
function Aa() {
  const e = fe(_a);
  if (!e)
    throw new Error("foo");
  return e;
}
const Nr = M({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), $a = Symbol.for("vuetify:data-table-group");
function Va(e) {
  return { groupBy: ve(e, "groupBy") };
}
function Ea(e) {
  const { groupBy: l, sortBy: t } = e, n = U(/* @__PURE__ */ new Set());
  function o(r) {
    return n.value.has(r.id);
  }
  const a = { sortByWithGroups: g(() => l.value.map((r) => ({ ...r, order: r.order ?? !1 })).concat(t.value)), toggleGroup: function(r) {
    const s = new Set(n.value);
    o(r) ? s.delete(r.id) : s.add(r.id), n.value = s;
  }, opened: n, groupBy: l, extractRows: function(r) {
    return function s(i) {
      const u = [];
      for (const d of i.items)
        "type" in d && d.type === "group" ? u.push(...s(d)) : u.push(d);
      return u;
    }({ type: "group", items: r, id: "dummy", key: "dummy", value: "dummy", depth: 0 });
  }, isGroupOpen: o };
  return ge($a, a), a;
}
function Ia() {
  const e = fe($a);
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
    for (const d of s) {
      const v = qt(d.raw, i);
      u.has(v) || u.set(v, []), u.get(v).push(d);
    }
    return u;
  }(e, l[0]), a = [], r = l.slice(1);
  return o.forEach((s, i) => {
    const u = l[0], d = `${n}_${u}_${i}`;
    a.push({ depth: t, id: d, key: u, value: i, items: r.length ? Oa(s, r, t + 1, d) : s, type: "group" });
  }), a;
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
  let { page: l, itemsPerPage: t, sortBy: n, groupBy: o, search: a } = e;
  const r = Se("VDataTable"), s = g(() => ({ page: l.value, itemsPerPage: t.value, sortBy: n.value, groupBy: o.value, search: a.value }));
  J(() => a == null ? void 0 : a.value, () => {
    l.value = 1;
  });
  let i = null;
  J(s, () => {
    ot(i, s.value) || (r.emit("update:options", s.value), i = s.value);
  }, { deep: !0, immediate: !0 });
}
const Ma = M({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 } }, "DataTable-paginate"), Na = Symbol.for("vuetify:data-table-pagination");
function Ra(e) {
  return { page: ve(e, "page", void 0, (l) => +(l ?? 1)), itemsPerPage: ve(e, "itemsPerPage", void 0, (l) => +(l ?? 10)) };
}
function ja(e) {
  const { page: l, itemsPerPage: t, itemsLength: n } = e, o = g(() => t.value === -1 ? 0 : t.value * (l.value - 1)), a = g(() => t.value === -1 ? n.value : Math.min(n.value, o.value + t.value)), r = g(() => t.value === -1 || n.value === 0 ? 1 : Math.ceil(n.value / t.value));
  qe(() => {
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
  return ge(Na, s), s;
}
const Rr = { showSelectAll: !1, allSelected: () => [], select: (e) => {
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
} }, jr = M({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] } }, "DataTable-select"), Ha = Symbol.for("vuetify:data-table-selection");
function Wa(e, l) {
  let { allItems: t, currentPage: n } = l;
  const o = ve(e, "modelValue", e.modelValue, (m) => new Set(m), (m) => [...m.values()]), a = g(() => t.value.filter((m) => m.selectable)), r = g(() => n.value.filter((m) => m.selectable)), s = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Rr;
      case "all":
        return za;
      default:
        return Ga;
    }
  });
  function i(m) {
    return Oe(m).every((h) => o.value.has(h.value));
  }
  function u(m, h) {
    const k = s.value.select({ items: m, value: h, selected: new Set(o.value) });
    o.value = k;
  }
  const d = g(() => o.value.size > 0), v = g(() => i(s.value.allSelected({ allItems: a.value, currentPage: r.value }))), c = { toggleSelect: function(m) {
    u([m], !i([m]));
  }, select: u, selectAll: function(m) {
    const h = s.value.selectAll({ value: m, allItems: a.value, currentPage: r.value, selected: new Set(o.value) });
    o.value = h;
  }, isSelected: i, isSomeSelected: function(m) {
    return Oe(m).some((h) => o.value.has(h.value));
  }, someSelected: d, allSelected: v, showSelectAll: s.value.showSelectAll };
  return ge(Ha, c), c;
}
function pl() {
  const e = fe(Ha);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const Gr = M({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), Ka = Symbol.for("vuetify:data-table-sort");
function Ua(e) {
  return { sortBy: ve(e, "sortBy"), mustSort: H(e, "mustSort"), multiSort: H(e, "multiSort") };
}
function qa(e) {
  const { sortBy: l, mustSort: t, multiSort: n, page: o } = e, a = { sortBy: l, toggleSort: (r) => {
    let s = l.value.map((u) => ({ ...u })) ?? [];
    const i = s.find((u) => u.key === r.key);
    i ? i.order === "desc" ? t.value ? i.order = "asc" : s = s.filter((u) => u.key !== r.key) : i.order = "desc" : s = n.value ? [...s, { key: r.key, order: "asc" }] : [{ key: r.key, order: "asc" }], l.value = s, o && (o.value = 1);
  }, isSorted: function(r) {
    return !!l.value.find((s) => s.key === r.key);
  } };
  return ge(Ka, a), a;
}
function zr(e, l, t) {
  const n = ht();
  return { sortedItems: g(() => t.value.length ? function(a, r, s, i) {
    const u = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...a].sort((d, v) => {
      for (let c = 0; c < r.length; c++) {
        const m = r[c].key, h = r[c].order ?? "asc";
        if (h === !1)
          continue;
        let k = qt(d.raw, m), f = qt(v.raw, m);
        if (h === "desc" && ([k, f] = [f, k]), i == null ? void 0 : i[m]) {
          const b = i[m](k, f);
          if (!b)
            continue;
          return b;
        }
        if (k instanceof Date && f instanceof Date)
          return k.getTime() - f.getTime();
        if ([k, f] = [k, f].map((b) => b != null ? b.toString().toLocaleLowerCase() : b), k !== f)
          return isNaN(k) || isNaN(f) ? u.compare(k, f) : Number(k) - Number(f);
      }
      return 0;
    });
  }(l.value, t.value, n.current.value, e.customKeySort) : l.value) };
}
const Tt = M({ border: [Boolean, Number, String] }, "border");
function Lt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { borderClasses: g(() => {
    const t = Ge(e) ? e.value : e.border, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        n.push(`border-${o}`);
    return n;
  }) };
}
const Hr = [null, "default", "comfortable", "compact"], He = M({ density: { type: String, default: "default", validator: (e) => Hr.includes(e) } }, "density");
function We(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { densityClasses: g(() => `${l}--density-${e.density}`) };
}
const Mt = M({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Nt(e) {
  return { elevationClasses: g(() => {
    const l = Ge(e) ? e.value : e.elevation, t = [];
    return l == null || t.push(`elevation-${l}`), t;
  }) };
}
const Ze = M({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Qe(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { roundedClasses: g(() => {
    const t = Ge(e) ? e.value : e.rounded, n = [];
    if (t === !0 || t === "")
      n.push(`${l}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        n.push(`rounded-${o}`);
    return n;
  }) };
}
const Wr = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function vl(e, l) {
  return p(re, null, [e && p("span", { key: "overlay", class: `${l}__overlay` }, null), p("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const rt = M({ color: String, variant: { type: String, default: "elevated", validator: (e) => Wr.includes(e) } }, "variant");
function fl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = g(() => {
    const { variant: a } = x(e);
    return `${l}--variant-${a}`;
  }), { colorClasses: n, colorStyles: o } = Ql(g(() => {
    const { variant: a, color: r } = x(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: r };
  }));
  return { colorClasses: n, colorStyles: o, variantClasses: t };
}
const Ya = M({ divided: Boolean, ...Tt(), ...se(), ...He(), ...Mt(), ...Ze(), ...we(), ...be(), ...rt() }, "VBtnGroup"), Dn = q()({ name: "VBtnGroup", props: Ya(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { densityClasses: o } = We(e), { borderClasses: a } = Lt(e), { elevationClasses: r } = Nt(e), { roundedClasses: s } = Qe(e);
  Je({ VBtn: { height: "auto", color: H(e, "color"), density: H(e, "density"), flat: !0, variant: H(e, "variant") } }), te(() => p(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, n.value, a.value, o.value, r.value, s.value, e.class], style: e.style }, t));
} }), Xa = M({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Ja = M({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Za(e, l) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const n = Se("useGroupItem");
  if (!n)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = Le();
  ge(Symbol.for(`${l.description}:id`), o);
  const a = fe(l, null);
  if (!a) {
    if (!t)
      return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const r = H(e, "value"), s = g(() => a.disabled.value || e.disabled);
  a.register({ id: o, value: r, disabled: s }, n), at(() => {
    a.unregister(o);
  });
  const i = g(() => a.isSelected(o)), u = g(() => i.value && [a.selectedClass.value, e.selectedClass]);
  return J(i, (d) => {
    n.emit("group:selected", { value: d });
  }), { id: o, isSelected: i, toggle: () => a.select(o, !i.value), select: (d) => a.select(o, d), selectedClass: u, value: r, disabled: s, group: a };
}
function Qa(e, l) {
  let t = !1;
  const n = _t([]), o = ve(e, "modelValue", [], (u) => u == null ? [] : Tn(n, Oe(u)), (u) => {
    const d = function(v, c) {
      const m = [];
      return c.forEach((h) => {
        const k = v.findIndex((f) => f.id === h);
        if (~k) {
          const f = v[k];
          m.push(f.value != null ? f.value : k);
        }
      }), m;
    }(n, u);
    return e.multiple ? d : d[0];
  }), a = Se("useGroup");
  function r() {
    const u = n.find((d) => !d.disabled);
    u && e.mandatory === "force" && !o.value.length && (o.value = [u.id]);
  }
  function s(u) {
    if (e.multiple && va('This method is not supported when using "multiple" prop'), o.value.length) {
      const d = o.value[0], v = n.findIndex((h) => h.id === d);
      let c = (v + u) % n.length, m = n[c];
      for (; m.disabled && c !== v; )
        c = (c + u) % n.length, m = n[c];
      if (m.disabled)
        return;
      o.value = [n[c].id];
    } else {
      const d = n.find((v) => !v.disabled);
      d && (o.value = [d.id]);
    }
  }
  At(() => {
    r();
  }), at(() => {
    t = !0;
  });
  const i = { register: function(u, d) {
    const v = u, c = Wt(Symbol.for(`${l.description}:id`), a == null ? void 0 : a.vnode).indexOf(d);
    c > -1 ? n.splice(c, 0, v) : n.push(v);
  }, unregister: function(u) {
    if (t)
      return;
    r();
    const d = n.findIndex((v) => v.id === u);
    n.splice(d, 1);
  }, selected: o, select: function(u, d) {
    const v = n.find((c) => c.id === u);
    if (!d || !(v != null && v.disabled))
      if (e.multiple) {
        const c = o.value.slice(), m = c.findIndex((k) => k === u), h = ~m;
        if (d = d ?? !h, h && e.mandatory && c.length <= 1 || !h && e.max != null && c.length + 1 > e.max)
          return;
        m < 0 && d ? c.push(u) : m >= 0 && !d && c.splice(m, 1), o.value = c;
      } else {
        const c = o.value.includes(u);
        if (e.mandatory && c)
          return;
        o.value = d ?? !c ? [u] : [];
      }
  }, disabled: H(e, "disabled"), prev: () => s(n.length - 1), next: () => s(1), isSelected: (u) => o.value.includes(u), selectedClass: g(() => e.selectedClass), items: g(() => n), getItemIndex: (u) => function(d, v) {
    const c = Tn(d, [v]);
    return c.length ? d.findIndex((m) => m.id === c[0]) : -1;
  }(n, u) };
  return ge(l, i), i;
}
function Tn(e, l) {
  const t = [];
  return l.forEach((n) => {
    const o = e.find((r) => ot(n, r.value)), a = e[n];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : a != null && t.push(a.id);
  }), t;
}
const eo = Symbol.for("vuetify:v-btn-toggle"), Kr = M({ ...Ya(), ...Xa() }, "VBtnToggle");
q()({ name: "VBtnToggle", props: Kr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, next: o, prev: a, select: r, selected: s } = Qa(e, eo);
  return te(() => {
    const [i] = Dn.filterProps(e);
    return p(Dn, Z({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var u;
      return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: n, next: o, prev: a, select: r, selected: s })];
    } });
  }), { next: o, prev: a, select: r };
} });
const pe = [String, Function, Object, Array], Ur = Symbol.for("vuetify:icons"), el = M({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), Ln = q()({ name: "VComponentIcon", props: el(), setup(e, l) {
  let { slots: t } = l;
  return () => {
    const n = e.icon;
    return p(e.tag, null, { default: () => {
      var o;
      return [e.icon ? p(n, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), qr = vt({ name: "VSvgIcon", inheritAttrs: !1, props: el(), setup(e, l) {
  let { attrs: t } = l;
  return () => p(e.tag, Z(t, { style: null }), { default: () => [p("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? p("path", { d: n[0], "fill-opacity": n[1] }, null) : p("path", { d: n }, null)) : p("path", { d: e.icon }, null)])] });
} });
vt({ name: "VLigatureIcon", props: el(), setup: (e) => () => p(e.tag, null, { default: () => [e.icon] }) }), vt({ name: "VClassIcon", props: el(), setup: (e) => () => p(e.tag, { class: e.icon }, null) });
const Yr = ["x-small", "small", "default", "large", "x-large"], Rt = M({ size: { type: [String, Number], default: "default" } }, "size");
function jt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return Ul(() => {
    let t, n;
    return Yt(Yr, e.size) ? t = `${l}--size-${e.size}` : e.size && (n = { width: X(e.size), height: X(e.size) }), { sizeClasses: t, sizeStyles: n };
  });
}
const Xr = M({ color: String, start: Boolean, end: Boolean, icon: pe, ...se(), ...Rt(), ...we({ tag: "i" }), ...be() }, "VIcon"), he = q()({ name: "VIcon", props: Xr(), setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = U(), { themeClasses: a } = Ce(e), { iconData: r } = ((d) => {
    const v = fe(Ur);
    if (!v)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: g(() => {
      var f;
      const c = x(d);
      if (!c)
        return { component: Ln };
      let m = c;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (f = v.aliases) == null ? void 0 : f[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${c}"`);
      if (Array.isArray(m))
        return { component: qr, icon: m };
      if (typeof m != "string")
        return { component: Ln, icon: m };
      const h = Object.keys(v.sets).find((b) => typeof m == "string" && m.startsWith(`${b}:`)), k = h ? m.slice(h.length + 1) : m;
      return { component: v.sets[h ?? v.defaultSet].component, icon: k };
    }) };
  })(g(() => o.value || e.icon)), { sizeClasses: s } = jt(e), { textColorClasses: i, textColorStyles: u } = je(H(e, "color"));
  return te(() => {
    var v, c;
    const d = (v = n.default) == null ? void 0 : v.call(n);
    return d && (o.value = (c = da(d).filter((m) => m.type === dr && m.children && typeof m.children == "string")[0]) == null ? void 0 : c.children), p(r.value.component, { tag: e.tag, icon: r.value.icon, class: ["v-icon", "notranslate", a.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: X(e.size), height: X(e.size), width: X(e.size) }, u.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [d] });
  }), {};
} });
function to(e, l) {
  const t = U(), n = ue(!1);
  if (Zl) {
    const o = new IntersectionObserver((a) => {
      e == null || e(a, o), n.value = !!a.find((r) => r.isIntersecting);
    }, l);
    at(() => {
      o.disconnect();
    }), J(t, (a, r) => {
      r && (o.unobserve(r), n.value = !1), a && o.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: n };
}
const Jr = M({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...Rt(), ...we({ tag: "div" }), ...be() }, "VProgressCircular"), lo = q()({ name: "VProgressCircular", props: Jr(), setup(e, l) {
  let { slots: t } = l;
  const n = 2 * Math.PI * 20, o = U(), { themeClasses: a } = Ce(e), { sizeClasses: r, sizeStyles: s } = jt(e), { textColorClasses: i, textColorStyles: u } = je(H(e, "color")), { textColorClasses: d, textColorStyles: v } = je(H(e, "bgColor")), { intersectionRef: c, isIntersecting: m } = to(), { resizeRef: h, contentRect: k } = function(E) {
    const $ = U(), _ = U();
    if (Ie) {
      const C = new ResizeObserver((S) => {
        E == null || E(S, C), S.length && (_.value = S[0].contentRect);
      });
      at(() => {
        C.disconnect();
      }), J($, (S, F) => {
        F && (C.unobserve(Al(F)), _.value = void 0), S && C.observe(Al(S));
      }, { flush: "post" });
    }
    return { resizeRef: $, contentRect: zl(_) };
  }(), f = g(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), b = g(() => Number(e.width)), w = g(() => s.value ? Number(e.size) : k.value ? k.value.width : Math.max(b.value, 32)), y = g(() => 20 / (1 - b.value / w.value) * 2), P = g(() => b.value / w.value * y.value), V = g(() => X((100 - f.value) / 100 * n));
  return qe(() => {
    c.value = o.value, h.value = o.value;
  }), te(() => p(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": m.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, r.value, i.value, e.class], style: [s.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : f.value }, { default: () => [p("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${y.value} ${y.value}` }, [p("circle", { class: ["v-progress-circular__underlay", d.value], style: v.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": n, "stroke-dashoffset": 0 }, null), p("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": n, "stroke-dashoffset": V.value }, null)]), t.default && p("div", { class: "v-progress-circular__content" }, [t.default({ value: f.value })])] })), {};
} }), Mn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, no = M({ location: String }, "location");
function ao(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: n } = Ot();
  return { locationStyles: g(() => {
    if (!e.location)
      return {};
    const { side: a, align: r } = Vl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, n.value);
    function s(u) {
      return t ? t(u) : 0;
    }
    const i = {};
    return a !== "center" && (l ? i[Mn[a]] = `calc(100% - ${s(a)}px)` : i[a] = 0), r !== "center" ? l ? i[Mn[r]] = `calc(100% - ${s(r)}px)` : i[r] = 0 : (a === "center" ? i.top = i.left = "50%" : i[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", i.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), i;
  }) };
}
const Zr = M({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...no({ location: "top" }), ...Ze(), ...we(), ...be() }, "VProgressLinear"), oo = q()({ name: "VProgressLinear", props: Zr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = ve(e, "modelValue"), { isRtl: o, rtlClasses: a } = Ot(), { themeClasses: r } = Ce(e), { locationStyles: s } = ao(e), { textColorClasses: i, textColorStyles: u } = je(e, "color"), { backgroundColorClasses: d, backgroundColorStyles: v } = ft(g(() => e.bgColor || e.color)), { backgroundColorClasses: c, backgroundColorStyles: m } = ft(e, "color"), { roundedClasses: h } = Qe(e), { intersectionRef: k, isIntersecting: f } = to(), b = g(() => parseInt(e.max, 10)), w = g(() => parseInt(e.height, 10)), y = g(() => parseFloat(e.bufferValue) / b.value * 100), P = g(() => parseFloat(n.value) / b.value * 100), V = g(() => o.value !== e.reverse), E = g(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), $ = g(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function _(C) {
    if (!k.value)
      return;
    const { left: S, right: F, width: D } = k.value.getBoundingClientRect(), B = V.value ? D - C.clientX + (F - D) : C.clientX - S;
    n.value = Math.round(B / D * b.value);
  }
  return te(() => p(e.tag, { ref: k, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && f.value, "v-progress-linear--reverse": V.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, h.value, r.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? X(w.value) : 0, "--v-progress-linear-height": X(w.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : P.value, onClick: e.clickable && _ }, { default: () => [e.stream && p("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...u.value, [V.value ? "left" : "right"]: X(-w.value), borderTop: `${X(w.value / 2)} dotted`, opacity: $.value, top: `calc(50% - ${X(w.value / 4)})`, width: X(100 - y.value, "%"), "--v-progress-linear-stream-to": X(w.value * (V.value ? 1 : -1)) } }, null), p("div", { class: ["v-progress-linear__background", d.value], style: [v.value, { opacity: $.value, width: X(e.stream ? y.value : 100, "%") }] }, null), p(nt, { name: E.value }, { default: () => [e.indeterminate ? p("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((C) => p("div", { key: C, class: ["v-progress-linear__indeterminate", C, c.value], style: m.value }, null))]) : p("div", { class: ["v-progress-linear__determinate", c.value], style: [m.value, { width: X(P.value, "%") }] }, null)] }), t.default && p("div", { class: "v-progress-linear__content" }, [t.default({ value: P.value, buffer: y.value })])] })), {};
} }), nn = M({ loading: [Boolean, String] }, "loader");
function an(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  return { loaderClasses: g(() => ({ [`${l}--loading`]: e.loading })) };
}
function ro(e, l) {
  var n;
  let { slots: t } = l;
  return p("div", { class: `${e.name}__loader` }, [((n = t.default) == null ? void 0 : n.call(t, { color: e.color, isActive: e.active })) || p(oo, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Qr = ["static", "relative", "fixed", "absolute", "sticky"], es = M({ position: { type: String, validator: (e) => Qr.includes(e) } }, "position"), Tl = Symbol("rippleStop"), ts = 80;
function Nn(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function Ll(e) {
  return e.constructor.name === "TouchEvent";
}
function so(e) {
  return e.constructor.name === "KeyboardEvent";
}
const tl = { show(e, l) {
  var m;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((m = l == null ? void 0 : l._ripple) != null && m.enabled))
    return;
  const n = document.createElement("span"), o = document.createElement("span");
  n.appendChild(o), n.className = "v-ripple__container", t.class && (n.className += ` ${t.class}`);
  const { radius: a, scale: r, x: s, y: i, centerX: u, centerY: d } = function(h, k) {
    var $;
    let f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b = 0, w = 0;
    if (!so(h)) {
      const _ = k.getBoundingClientRect(), C = Ll(h) ? h.touches[h.touches.length - 1] : h;
      b = C.clientX - _.left, w = C.clientY - _.top;
    }
    let y = 0, P = 0.3;
    ($ = k._ripple) != null && $.circle ? (P = 0.15, y = k.clientWidth / 2, y = f.center ? y : y + Math.sqrt((b - y) ** 2 + (w - y) ** 2) / 4) : y = Math.sqrt(k.clientWidth ** 2 + k.clientHeight ** 2) / 2;
    const V = (k.clientWidth - 2 * y) / 2 + "px", E = (k.clientHeight - 2 * y) / 2 + "px";
    return { radius: y, scale: P, x: f.center ? V : b - y + "px", y: f.center ? E : w - y + "px", centerX: V, centerY: E };
  }(e, l, t), v = 2 * a + "px";
  o.className = "v-ripple__animation", o.style.width = v, o.style.height = v, l.appendChild(n);
  const c = window.getComputedStyle(l);
  c && c.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Nn(o, `translate(${s}, ${i}) scale3d(${r},${r},${r})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Nn(o, `translate(${u}, ${d}) scale3d(1,1,1)`);
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
function io(e) {
  return e === void 0 || !!e;
}
function Ct(e) {
  const l = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Tl]) {
    if (e[Tl] = !0, Ll(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (l.center = t._ripple.centered || so(e), t._ripple.class && (l.class = t._ripple.class), Ll(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        tl.show(e, t, l);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var n;
        (n = t == null ? void 0 : t._ripple) != null && n.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, ts);
    } else
      tl.show(e, t, l);
  }
}
function Rn(e) {
  e[Tl] = !0;
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
function uo(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let Bt = !1;
function co(e) {
  Bt || e.keyCode !== gn.enter && e.keyCode !== gn.space || (Bt = !0, Ct(e));
}
function po(e) {
  Bt = !1, Fe(e);
}
function vo(e) {
  Bt && (Bt = !1, Fe(e));
}
function jn(e, l, t) {
  const { value: n, modifiers: o } = l, a = io(n);
  if (a || tl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Fl(n) && n.class && (e._ripple.class = n.class), a && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", Rn, { passive: !0 }), void e.addEventListener("mousedown", Rn);
    e.addEventListener("touchstart", Ct, { passive: !0 }), e.addEventListener("touchend", Fe, { passive: !0 }), e.addEventListener("touchmove", uo, { passive: !0 }), e.addEventListener("touchcancel", Fe), e.addEventListener("mousedown", Ct), e.addEventListener("mouseup", Fe), e.addEventListener("mouseleave", Fe), e.addEventListener("keydown", co), e.addEventListener("keyup", po), e.addEventListener("blur", vo), e.addEventListener("dragstart", Fe, { passive: !0 });
  } else
    !a && t && fo(e);
}
function fo(e) {
  e.removeEventListener("mousedown", Ct), e.removeEventListener("touchstart", Ct), e.removeEventListener("touchend", Fe), e.removeEventListener("touchmove", uo), e.removeEventListener("touchcancel", Fe), e.removeEventListener("mouseup", Fe), e.removeEventListener("mouseleave", Fe), e.removeEventListener("keydown", co), e.removeEventListener("keyup", po), e.removeEventListener("dragstart", Fe), e.removeEventListener("blur", vo);
}
const ml = { mounted: function(e, l) {
  jn(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, fo(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && jn(e, l, io(l.oldValue));
} }, ls = M({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: eo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Tt(), ...se(), ...He(), ...Et(), ...Mt(), ...Ja(), ...nn(), ...no(), ...es(), ...Ze(), ...tn(), ...Rt(), ...we({ tag: "button" }), ...be(), ...rt({ variant: "elevated" }) }, "VBtn"), ut = q()({ name: "VBtn", directives: { Ripple: ml }, props: ls(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { themeClasses: o } = Ce(e), { borderClasses: a } = Lt(e), { colorClasses: r, colorStyles: s, variantClasses: i } = fl(e), { densityClasses: u } = We(e), { dimensionStyles: d } = It(e), { elevationClasses: v } = Nt(e), { loaderClasses: c } = an(e), { locationStyles: m } = ao(e), { positionClasses: h } = function(C) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
    return { positionClasses: g(() => C.position ? `${S}--${C.position}` : void 0) };
  }(e), { roundedClasses: k } = Qe(e), { sizeClasses: f, sizeStyles: b } = jt(e), w = Za(e, e.symbol, !1), y = en(e, t), P = g(() => {
    var C;
    return e.active !== void 0 ? e.active : y.isLink.value ? (C = y.isActive) == null ? void 0 : C.value : w == null ? void 0 : w.isSelected.value;
  }), V = g(() => (w == null ? void 0 : w.disabled.value) || e.disabled), E = g(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), $ = g(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function _(C) {
    var S;
    V.value || ((S = y.navigate) == null || S.call(y, C), w == null || w.toggle());
  }
  return function(C, S) {
    J(() => {
      var F;
      return (F = C.isActive) == null ? void 0 : F.value;
    }, (F) => {
      C.isLink.value && F && S && Ee(() => {
        S(!0);
      });
    }, { immediate: !0 });
  }(y, w == null ? void 0 : w.select), te(() => {
    var A, I;
    const C = y.isLink.value ? "a" : e.tag, S = !(!e.prependIcon && !n.prepend), F = !(!e.appendIcon && !n.append), D = !(!e.icon || e.icon === !0), B = (w == null ? void 0 : w.isSelected.value) && (!y.isLink.value || ((A = y.isActive) == null ? void 0 : A.value)) || !w || ((I = y.isActive) == null ? void 0 : I.value);
    return Ae(p(C, { type: C === "a" ? void 0 : "button", class: ["v-btn", w == null ? void 0 : w.selectedClass.value, { "v-btn--active": P.value, "v-btn--block": e.block, "v-btn--disabled": V.value, "v-btn--elevated": E.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, a.value, B ? r.value : void 0, u.value, v.value, c.value, h.value, k.value, f.value, i.value, e.class], style: [B ? s.value : void 0, d.value, m.value, b.value, e.style], disabled: V.value || void 0, href: y.href.value, onClick: _, value: $.value }, { default: () => {
      var L;
      return [vl(!0, "v-btn"), !e.icon && S && p("span", { key: "prepend", class: "v-btn__prepend" }, [n.prepend ? p(Ve, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, n.prepend) : p(he, { key: "prepend-icon", icon: e.prependIcon }, null)]), p("span", { class: "v-btn__content", "data-no-activator": "" }, [!n.default && D ? p(he, { key: "content-icon", icon: e.icon }, null) : p(Ve, { key: "content-defaults", disabled: !D, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var N;
        return [((N = n.default) == null ? void 0 : N.call(n)) ?? e.text];
      } })]), !e.icon && F && p("span", { key: "append", class: "v-btn__append" }, [n.append ? p(Ve, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, n.append) : p(he, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && p("span", { key: "loader", class: "v-btn__loader" }, [((L = n.loader) == null ? void 0 : L.call(n)) ?? p(lo, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Ye("ripple"), !V.value && e.ripple, null]]);
  }), {};
} }), ns = M({ text: String, clickable: Boolean, ...se(), ...be() }, "VLabel"), mo = q()({ name: "VLabel", props: ns(), setup(e, l) {
  let { slots: t } = l;
  return te(() => {
    var n;
    return p("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (n = t.default) == null ? void 0 : n.call(t)]);
  }), {};
} }), go = Symbol.for("vuetify:selection-control-group"), yo = M({ color: String, disabled: Boolean, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: ot }, ...se(), ...He(), ...be() }, "SelectionControlGroup"), as = M({ ...yo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
q()({ name: "VSelectionControlGroup", props: as(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = ve(e, "modelValue"), o = Le(), a = g(() => e.id || `v-selection-control-group-${o}`), r = g(() => e.name || a.value), s = /* @__PURE__ */ new Set();
  return ge(go, { modelValue: n, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), _e(() => {
      s.delete(i);
    });
  } }), Je({ [e.defaultsTarget]: { color: H(e, "color"), disabled: H(e, "disabled"), density: H(e, "density"), error: H(e, "error"), inline: H(e, "inline"), modelValue: n, multiple: g(() => !!e.multiple || e.multiple == null && Array.isArray(n.value)), name: r, falseIcon: H(e, "falseIcon"), trueIcon: H(e, "trueIcon"), readonly: H(e, "readonly"), ripple: H(e, "ripple"), type: H(e, "type"), valueComparator: H(e, "valueComparator") } }), te(() => {
    var i;
    return p("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const ho = M({ label: String, trueValue: null, falseValue: null, value: null, ...se(), ...yo() }, "VSelectionControl"), os = q()({ name: "VSelectionControl", directives: { Ripple: ml }, inheritAttrs: !1, props: ho(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { group: o, densityClasses: a, icon: r, model: s, textColorClasses: i, textColorStyles: u, trueValue: d } = function(y) {
    const P = fe(go, void 0), { densityClasses: V } = We(y), E = ve(y, "modelValue"), $ = g(() => y.trueValue !== void 0 ? y.trueValue : y.value === void 0 || y.value), _ = g(() => y.falseValue !== void 0 && y.falseValue), C = g(() => !!y.multiple || y.multiple == null && Array.isArray(E.value)), S = g({ get() {
      const A = P ? P.modelValue.value : E.value;
      return C.value ? A.some((I) => y.valueComparator(I, $.value)) : y.valueComparator(A, $.value);
    }, set(A) {
      if (y.readonly)
        return;
      const I = A ? $.value : _.value;
      let L = I;
      C.value && (L = A ? [...Oe(E.value), I] : Oe(E.value).filter((N) => !y.valueComparator(N, $.value))), P ? P.modelValue.value = L : E.value = L;
    } }), { textColorClasses: F, textColorStyles: D } = je(g(() => !S.value || y.error || y.disabled ? void 0 : y.color)), B = g(() => S.value ? y.trueIcon : y.falseIcon);
    return { group: P, densityClasses: V, trueValue: $, falseValue: _, model: S, textColorClasses: F, textColorStyles: D, icon: B };
  }(e), v = Le(), c = g(() => e.id || `input-${v}`), m = ue(!1), h = ue(!1), k = U();
  function f(y) {
    m.value = !0, (!El || El && y.target.matches(":focus-visible")) && (h.value = !0);
  }
  function b() {
    m.value = !1, h.value = !1;
  }
  function w(y) {
    e.readonly && o && Ee(() => o.forceUpdate()), s.value = y.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    k.value && (k.value.checked = s.value);
  }), te(() => {
    var E, $;
    const y = n.label ? n.label({ label: e.label, props: { for: c.value } }) : e.label, [P, V] = Kl(t);
    return p("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": m.value, "v-selection-control--focus-visible": h.value, "v-selection-control--inline": e.inline }, a.value, e.class] }, P, { style: e.style }), [p("div", { class: ["v-selection-control__wrapper", i.value], style: u.value }, [(E = n.default) == null ? void 0 : E.call(n), Ae(p("div", { class: ["v-selection-control__input"] }, [r.value && p(he, { key: "icon", icon: r.value }, null), p("input", Z({ ref: k, checked: s.value, disabled: e.disabled, id: c.value, onBlur: b, onFocus: f, onInput: w, "aria-disabled": e.readonly, type: e.type, value: d.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, V), null), ($ = n.input) == null ? void 0 : $.call(n, { model: s, textColorClasses: i, textColorStyles: u, props: { onFocus: f, onBlur: b, id: c.value } })]), [[Ye("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), y && p(mo, { for: c.value, clickable: !0 }, { default: () => [y] })]);
  }), { isFocused: m, input: k };
} }), bo = M({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...ho({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), mt = q()({ name: "VCheckboxBtn", props: bo(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = ve(e, "indeterminate"), o = ve(e, "modelValue");
  function a(i) {
    n.value && (n.value = !1);
  }
  const r = g(() => n.value ? e.indeterminateIcon : e.falseIcon), s = g(() => n.value ? e.indeterminateIcon : e.trueIcon);
  return te(() => p(os, Z(e, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, a], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: r.value, trueIcon: s.value, "aria-checked": n.value ? "mixed" : void 0 }), t)), {};
} });
function So(e) {
  const { t: l } = ht();
  return { InputIcon: function(t) {
    let { name: n } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[n], a = e[`onClick:${n}`], r = a && o ? l(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return p(he, { icon: e[`${n}Icon`], "aria-label": r, onClick: a }, null);
  } };
}
const rs = M({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...Dt({ transition: { component: Sa, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), ss = q()({ name: "VMessages", props: rs(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => Oe(e.messages)), { textColorClasses: o, textColorStyles: a } = je(g(() => e.color));
  return te(() => p(Ke, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && n.value.map((r, s) => p("div", { class: "v-messages__message", key: `${s}-${n.value}` }, [t.message ? t.message({ message: r }) : r]))] })), {};
} }), wo = M({ focused: Boolean, "onUpdate:focused": Te() }, "focus");
function on(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze();
  const t = ve(e, "focused");
  return { focusClasses: g(() => ({ [`${l}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const is = Symbol.for("vuetify:form");
function xo() {
  return fe(is, null);
}
const us = M({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...wo() }, "validation"), rn = M({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Te(), "onClick:append": Te(), ...se(), ...He(), ...us() }, "VInput"), ll = q()({ name: "VInput", props: { ...rn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const { densityClasses: a } = We(e), { rtlClasses: r } = Ot(), { InputIcon: s } = So(e), i = Le(), u = g(() => e.id || `input-${i}`), d = g(() => `${u.value}-messages`), { errorMessages: v, isDirty: c, isDisabled: m, isReadonly: h, isPristine: k, isValid: f, isValidating: b, reset: w, resetValidation: y, validate: P, validationClasses: V } = function(_) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze(), S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le();
    const F = ve(_, "modelValue"), D = g(() => _.validationValue === void 0 ? F.value : _.validationValue), B = xo(), A = U([]), I = ue(!0), L = g(() => !(!Oe(F.value === "" ? null : F.value).length && !Oe(D.value === "" ? null : D.value).length)), N = g(() => !!(_.disabled ?? (B == null ? void 0 : B.isDisabled.value))), T = g(() => !!(_.readonly ?? (B == null ? void 0 : B.isReadonly.value))), z = g(() => _.errorMessages.length ? Oe(_.errorMessages).slice(0, Math.max(0, +_.maxErrors)) : A.value), j = g(() => {
      let Q = (_.validateOn ?? (B == null ? void 0 : B.validateOn.value)) || "input";
      Q === "lazy" && (Q = "input lazy");
      const ce = new Set((Q == null ? void 0 : Q.split(" ")) ?? []);
      return { blur: ce.has("blur") || ce.has("input"), input: ce.has("input"), submit: ce.has("submit"), lazy: ce.has("lazy") };
    }), W = g(() => !_.error && !_.errorMessages.length && (!_.rules.length || (I.value ? !A.value.length && !j.value.lazy || null : !A.value.length))), O = ue(!1), G = g(() => ({ [`${C}--error`]: W.value === !1, [`${C}--dirty`]: L.value, [`${C}--disabled`]: N.value, [`${C}--readonly`]: T.value })), R = g(() => _.name ?? x(S));
    function K() {
      F.value = null, Ee(le);
    }
    function le() {
      I.value = !0, j.value.lazy ? A.value = [] : ee(!0);
    }
    async function ee() {
      let Q = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ce = [];
      O.value = !0;
      for (const xe of _.rules) {
        if (ce.length >= +(_.maxErrors ?? 1))
          break;
        const hl = typeof xe == "function" ? xe : () => xe, Me = await hl(D.value);
        Me !== !0 && (typeof Me == "string" ? ce.push(Me) : console.warn(`${Me} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return A.value = ce, O.value = !1, I.value = Q, A.value;
    }
    return Hl(() => {
      B == null || B.register({ id: R.value, validate: ee, reset: K, resetValidation: le });
    }), at(() => {
      B == null || B.unregister(R.value);
    }), At(async () => {
      j.value.lazy || await ee(!0), B == null || B.update(R.value, W.value, z.value);
    }), lt(() => j.value.input, () => {
      J(D, () => {
        if (D.value != null)
          ee();
        else if (_.focused) {
          const Q = J(() => _.focused, (ce) => {
            ce || ee(), Q();
          });
        }
      });
    }), lt(() => j.value.blur, () => {
      J(() => _.focused, (Q) => {
        Q || ee();
      });
    }), J(W, () => {
      B == null || B.update(R.value, W.value, z.value);
    }), { errorMessages: z, isDirty: L, isDisabled: N, isReadonly: T, isPristine: I, isValid: W, isValidating: O, reset: K, resetValidation: le, validate: ee, validationClasses: G };
  }(e, "v-input", u), E = g(() => ({ id: u, messagesId: d, isDirty: c, isDisabled: m, isReadonly: h, isPristine: k, isValid: f, isValidating: b, reset: w, resetValidation: y, validate: P })), $ = g(() => {
    var _;
    return (_ = e.errorMessages) != null && _.length || !k.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return te(() => {
    var D, B, A, I;
    const _ = !(!n.prepend && !e.prependIcon), C = !(!n.append && !e.appendIcon), S = $.value.length > 0, F = !e.hideDetails || e.hideDetails === "auto" && (S || !!n.details);
    return p("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, a.value, r.value, V.value, e.class], style: e.style }, [_ && p("div", { key: "prepend", class: "v-input__prepend" }, [(D = n.prepend) == null ? void 0 : D.call(n, E.value), e.prependIcon && p(s, { key: "prepend-icon", name: "prepend" }, null)]), n.default && p("div", { class: "v-input__control" }, [(B = n.default) == null ? void 0 : B.call(n, E.value)]), C && p("div", { key: "append", class: "v-input__append" }, [e.appendIcon && p(s, { key: "append-icon", name: "append" }, null), (A = n.append) == null ? void 0 : A.call(n, E.value)]), F && p("div", { class: "v-input__details" }, [p(ss, { id: d.value, active: S, messages: $.value }, { message: n.message }), (I = n.details) == null ? void 0 : I.call(n, E.value)])]);
  }), { reset: w, resetValidation: y, validate: P };
} }), cs = M({ ...rn(), ...Wl(bo(), ["inline"]) }, "VCheckbox"), sn = q()({ name: "VCheckbox", inheritAttrs: !1, props: cs(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = ve(e, "modelValue"), { isFocused: a, focus: r, blur: s } = on(e), i = Le(), u = g(() => e.id || `checkbox-${i}`);
  return te(() => {
    const [d, v] = Kl(t), [c, m] = ll.filterProps(e), [h, k] = mt.filterProps(e);
    return p(ll, Z({ class: ["v-checkbox", e.class] }, d, c, { modelValue: o.value, "onUpdate:modelValue": (f) => o.value = f, id: u.value, focused: a.value, style: e.style }), { ...n, default: (f) => {
      let { id: b, messagesId: w, isDisabled: y, isReadonly: P } = f;
      return p(mt, Z(h, { id: b.value, "aria-describedby": w.value, disabled: y.value, readonly: P.value }, v, { modelValue: o.value, "onUpdate:modelValue": (V) => o.value = V, onFocus: r, onBlur: s }), n);
    } });
  }), {};
} }), ko = M({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...Et() }, "VResponsive"), Gn = q()({ name: "VResponsive", props: ko(), setup(e, l) {
  let { slots: t } = l;
  const { aspectStyles: n } = function(a) {
    return { aspectStyles: g(() => {
      const r = Number(a.aspectRatio);
      return r ? { paddingBottom: String(1 / r * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = It(e);
  return te(() => {
    var a;
    return p("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [p("div", { class: "v-responsive__sizer", style: n.value }, null), (a = t.additional) == null ? void 0 : a.call(t), t.default && p("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function zn(e, l) {
  var n;
  const t = (n = e._observe) == null ? void 0 : n[l.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Co = { mounted: function(e, l) {
  if (!Zl)
    return;
  const t = l.modifiers || {}, n = l.value, { handler: o, options: a } = typeof n == "object" ? n : { handler: n, options: {} }, r = new IntersectionObserver(function() {
    var v;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const u = (v = e._observe) == null ? void 0 : v[l.instance.$.uid];
    if (!u)
      return;
    const d = s.some((c) => c.isIntersecting);
    !o || t.quiet && !u.init || t.once && !d && !u.init || o(d, s, i), d && t.once ? zn(e, l) : u.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: r }, r.observe(e);
}, unmounted: zn }, ds = M({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...ko(), ...se(), ...Dt() }, "VImg"), ps = q()({ name: "VImg", directives: { intersect: Co }, props: ds(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const o = ue(""), a = U(), r = ue(e.eager ? "loading" : "idle"), s = ue(), i = ue(), u = g(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), d = g(() => u.value.aspect || s.value / i.value || 0);
  function v(_) {
    if ((!e.eager || !_) && (!Zl || _ || e.eager)) {
      if (r.value = "loading", u.value.lazySrc) {
        const C = new Image();
        C.src = u.value.lazySrc, f(C, null);
      }
      u.value.src && Ee(() => {
        var C, S;
        if (t("loadstart", ((C = a.value) == null ? void 0 : C.currentSrc) || u.value.src), (S = a.value) == null ? void 0 : S.complete) {
          if (a.value.naturalWidth || m(), r.value === "error")
            return;
          d.value || f(a.value, null), c();
        } else
          d.value || f(a.value), h();
      });
    }
  }
  function c() {
    var _;
    h(), r.value = "loaded", t("load", ((_ = a.value) == null ? void 0 : _.currentSrc) || u.value.src);
  }
  function m() {
    var _;
    r.value = "error", t("error", ((_ = a.value) == null ? void 0 : _.currentSrc) || u.value.src);
  }
  function h() {
    const _ = a.value;
    _ && (o.value = _.currentSrc || _.src);
  }
  J(() => e.src, () => {
    v(r.value !== "idle");
  }), J(d, (_, C) => {
    !_ && C && a.value && f(a.value);
  }), Hl(() => v());
  let k = -1;
  function f(_) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const S = () => {
      clearTimeout(k);
      const { naturalHeight: F, naturalWidth: D } = _;
      F || D ? (s.value = D, i.value = F) : _.complete || r.value !== "loading" || C == null ? (_.currentSrc.endsWith(".svg") || _.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : k = window.setTimeout(S, C);
    };
    S();
  }
  const b = g(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), w = () => {
    var S;
    if (!u.value.src || r.value === "idle")
      return null;
    const _ = p("img", { class: ["v-img__img", b.value], src: u.value.src, srcset: u.value.srcset, alt: e.alt, sizes: e.sizes, ref: a, onLoad: c, onError: m }, null), C = (S = n.sources) == null ? void 0 : S.call(n);
    return p(Ke, { transition: e.transition, appear: !0 }, { default: () => [Ae(C ? p("picture", { class: "v-img__picture" }, [C, _]) : _, [[yt, r.value === "loaded"]])] });
  }, y = () => p(Ke, { transition: e.transition }, { default: () => [u.value.lazySrc && r.value !== "loaded" && p("img", { class: ["v-img__img", "v-img__img--preload", b.value], src: u.value.lazySrc, alt: e.alt }, null)] }), P = () => n.placeholder ? p(Ke, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !n.error) && p("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null, V = () => n.error ? p(Ke, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && p("div", { class: "v-img__error" }, [n.error()])] }) : null, E = () => e.gradient ? p("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, $ = ue(!1);
  {
    const _ = J(d, (C) => {
      C && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          $.value = !0;
        });
      }), _());
    });
  }
  return te(() => {
    const [_] = Gn.filterProps(e);
    return Ae(p(Gn, Z({ class: ["v-img", { "v-img--booting": !$.value }, e.class], style: e.style }, _, { aspectRatio: d.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => p(re, null, [p(w, null, null), p(y, null, null), p(E, null, null), p(P, null, null), p(V, null, null)]), default: n.default }), [[Ye("intersect"), { handler: v, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: a, state: r, naturalWidth: s, naturalHeight: i };
} }), vs = M({ start: Boolean, end: Boolean, icon: pe, image: String, ...se(), ...He(), ...Ze(), ...Rt(), ...we(), ...be(), ...rt({ variant: "flat" }) }, "VAvatar"), nl = q()({ name: "VAvatar", props: vs(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { colorClasses: o, colorStyles: a, variantClasses: r } = fl(e), { densityClasses: s } = We(e), { roundedClasses: i } = Qe(e), { sizeClasses: u, sizeStyles: d } = jt(e);
  return te(() => p(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, o.value, s.value, i.value, u.value, r.value, e.class], style: [a.value, d.value, e.style] }, { default: () => {
    var v;
    return [e.image ? p(ps, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? p(he, { key: "icon", icon: e.icon }, null) : (v = t.default) == null ? void 0 : v.call(t), vl(!1, "v-avatar")];
  } })), {};
} }), Bo = Symbol.for("vuetify:v-chip-group"), fs = M({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: ot }, ...se(), ...Xa({ selectedClass: "v-chip--selected" }), ...we(), ...be(), ...rt({ variant: "tonal" }) }, "VChipGroup");
q()({ name: "VChipGroup", props: fs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { isSelected: o, select: a, next: r, prev: s, selected: i } = Qa(e, Bo);
  return Je({ VChip: { color: H(e, "color"), disabled: H(e, "disabled"), filter: H(e, "filter"), variant: H(e, "variant") } }), te(() => p(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, n.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: o, select: a, next: r, prev: s, selected: i.value })];
  } })), {};
} });
const ms = M({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Te(), onClickOnce: Te(), ...Tt(), ...se(), ...He(), ...Mt(), ...Ja(), ...Ze(), ...tn(), ...Rt(), ...we({ tag: "span" }), ...be(), ...rt({ variant: "tonal" }) }, "VChip"), gs = q()({ name: "VChip", directives: { Ripple: ml }, props: ms(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { t: a } = ht(), { borderClasses: r } = Lt(e), { colorClasses: s, colorStyles: i, variantClasses: u } = fl(e), { densityClasses: d } = We(e), { elevationClasses: v } = Nt(e), { roundedClasses: c } = Qe(e), { sizeClasses: m } = jt(e), { themeClasses: h } = Ce(e), k = ve(e, "modelValue"), f = Za(e, Bo, !1), b = en(e, t), w = g(() => e.link !== !1 && b.isLink.value), y = g(() => !e.disabled && e.link !== !1 && (!!f || e.link || b.isClickable.value)), P = g(() => ({ "aria-label": a(e.closeLabel), onClick($) {
    k.value = !1, n("click:close", $);
  } }));
  function V($) {
    var _;
    n("click", $), y.value && ((_ = b.navigate) == null || _.call(b, $), f == null || f.toggle());
  }
  function E($) {
    $.key !== "Enter" && $.key !== " " || ($.preventDefault(), V($));
  }
  return () => {
    const $ = b.isLink.value ? "a" : e.tag, _ = !(!e.appendIcon && !e.appendAvatar), C = !(!_ && !o.append), S = !(!o.close && !e.closable), F = !(!o.filter && !e.filter) && f, D = !(!e.prependIcon && !e.prependAvatar), B = !(!D && !o.prepend), A = !f || f.isSelected.value;
    return k.value && Ae(p($, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": y.value, "v-chip--filter": F, "v-chip--pill": e.pill }, h.value, r.value, A ? s.value : void 0, d.value, v.value, c.value, m.value, u.value, f == null ? void 0 : f.selectedClass.value, e.class], style: [A ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: b.href.value, tabindex: y.value ? 0 : void 0, onClick: V, onKeydown: y.value && !w.value && E }, { default: () => {
      var I;
      return [vl(y.value, "v-chip"), F && p(wa, { key: "filter" }, { default: () => [Ae(p("div", { class: "v-chip__filter" }, [o.filter ? Ae(p(Ve, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[Ye("slot"), o.filter, "default"]]) : p(he, { key: "filter-icon", icon: e.filterIcon }, null)]), [[yt, f.isSelected.value]])] }), B && p("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? p(Ve, { key: "prepend-defaults", disabled: !D, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : p(re, null, [e.prependIcon && p(he, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && p(nl, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), p("div", { class: "v-chip__content" }, [((I = o.default) == null ? void 0 : I.call(o, { isSelected: f == null ? void 0 : f.isSelected.value, selectedClass: f == null ? void 0 : f.selectedClass.value, select: f == null ? void 0 : f.select, toggle: f == null ? void 0 : f.toggle, value: f == null ? void 0 : f.value.value, disabled: e.disabled })) ?? e.text]), C && p("div", { key: "append", class: "v-chip__append" }, [o.append ? p(Ve, { key: "append-defaults", disabled: !_, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : p(re, null, [e.appendIcon && p(he, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && p(nl, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), S && p("div", Z({ key: "close", class: "v-chip__close" }, P.value), [o.close ? p(Ve, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : p(he, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Ye("ripple"), y.value && e.ripple, null]]);
  };
} }), Ml = Symbol.for("vuetify:list");
function Po() {
  const e = fe(Ml, { hasPrepend: ue(!1), updateHasPrepend: () => null }), l = { hasPrepend: ue(!1), updateHasPrepend: (t) => {
    t && (l.hasPrepend.value = t);
  } };
  return ge(Ml, l), e;
}
function _o() {
  return fe(Ml, null);
}
const ys = { open: (e) => {
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
}, select: () => null }, Fo = { open: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (t) {
    let a = o.get(l);
    for (n.add(l); a != null && a !== l; )
      n.add(a), a = o.get(a);
    return n;
  }
  return n.delete(l), n;
}, select: () => null }, hs = { open: Fo.open, select: (e) => {
  let { id: l, value: t, opened: n, parents: o } = e;
  if (!t)
    return n;
  const a = [];
  let r = o.get(l);
  for (; r != null; )
    a.push(r), r = o.get(r);
  return new Set(a);
} }, Nl = (e) => {
  const l = { select: (t) => {
    let { id: n, value: o, selected: a } = t;
    if (n = Ue(n), e && !o) {
      const r = Array.from(a.entries()).reduce((s, i) => {
        let [u, d] = i;
        return d === "on" ? [...s, u] : s;
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
}, Hn = (e) => {
  const l = Nl(e);
  return { select: (t) => {
    let { selected: n, id: o, ...a } = t;
    o = Ue(o);
    const r = n.has(o) ? /* @__PURE__ */ new Map([[o, n.get(o)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...a, id: o, selected: r });
  }, in: (t, n, o) => {
    let a = /* @__PURE__ */ new Map();
    return t != null && t.length && (a = l.in(t.slice(0, 1), n, o)), a;
  }, out: (t, n, o) => l.out(t, n, o) };
}, Pt = Symbol.for("vuetify:nested"), Ao = { id: ue(), root: { register: () => null, unregister: () => null, parents: U(/* @__PURE__ */ new Map()), children: U(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: U(/* @__PURE__ */ new Set()), selected: U(/* @__PURE__ */ new Map()), selectedValues: U([]) } }, bs = M({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Ss = (e) => {
  let l = !1;
  const t = U(/* @__PURE__ */ new Map()), n = U(/* @__PURE__ */ new Map()), o = ve(e, "opened", e.opened, (v) => new Set(v), (v) => [...v.values()]), a = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((v) => {
          const c = Hn(v);
          return { select: (m) => {
            let { id: h, selected: k, children: f, ...b } = m;
            return h = Ue(h), f.has(h) ? k : c.select({ id: h, selected: k, children: f, ...b });
          }, in: c.in, out: c.out };
        })(e.mandatory);
      case "leaf":
        return ((v) => {
          const c = Nl(v);
          return { select: (m) => {
            let { id: h, selected: k, children: f, ...b } = m;
            return h = Ue(h), f.has(h) ? k : c.select({ id: h, selected: k, children: f, ...b });
          }, in: c.in, out: c.out };
        })(e.mandatory);
      case "independent":
        return Nl(e.mandatory);
      case "single-independent":
        return Hn(e.mandatory);
      default:
        return ((v) => {
          const c = { select: (m) => {
            let { id: h, value: k, selected: f, children: b, parents: w } = m;
            h = Ue(h);
            const y = new Map(f), P = [h];
            for (; P.length; ) {
              const E = P.shift();
              f.set(E, k ? "on" : "off"), b.has(E) && P.push(...b.get(E));
            }
            let V = w.get(h);
            for (; V; ) {
              const E = b.get(V), $ = E.every((C) => f.get(C) === "on"), _ = E.every((C) => !f.has(C) || f.get(C) === "off");
              f.set(V, $ ? "on" : _ ? "off" : "indeterminate"), V = w.get(V);
            }
            return v && !k && Array.from(f.entries()).reduce(($, _) => {
              let [C, S] = _;
              return S === "on" ? [...$, C] : $;
            }, []).length === 0 ? y : f;
          }, in: (m, h, k) => {
            let f = /* @__PURE__ */ new Map();
            for (const b of m || [])
              f = c.select({ id: b, value: !0, selected: new Map(f), children: h, parents: k });
            return f;
          }, out: (m, h) => {
            const k = [];
            for (const [f, b] of m.entries())
              b !== "on" || h.has(f) || k.push(f);
            return k;
          } };
          return c;
        })(e.mandatory);
    }
  }), r = g(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return hs;
      case "single":
        return ys;
      default:
        return Fo;
    }
  }), s = ve(e, "selected", e.selected, (v) => a.value.in(v, t.value, n.value), (v) => a.value.out(v, t.value, n.value));
  function i(v) {
    const c = [];
    let m = v;
    for (; m != null; )
      c.unshift(m), m = n.value.get(m);
    return c;
  }
  at(() => {
    l = !0;
  });
  const u = Se("nested"), d = { id: ue(), root: { opened: o, selected: s, selectedValues: g(() => {
    const v = [];
    for (const [c, m] of s.value.entries())
      m === "on" && v.push(c);
    return v;
  }), register: (v, c, m) => {
    c && v !== c && n.value.set(v, c), m && t.value.set(v, []), c != null && t.value.set(c, [...t.value.get(c) || [], v]);
  }, unregister: (v) => {
    if (l)
      return;
    t.value.delete(v);
    const c = n.value.get(v);
    if (c) {
      const m = t.value.get(c) ?? [];
      t.value.set(c, m.filter((h) => h !== v));
    }
    n.value.delete(v), o.value.delete(v);
  }, open: (v, c, m) => {
    u.emit("click:open", { id: v, value: c, path: i(v), event: m });
    const h = r.value.open({ id: v, value: c, opened: new Set(o.value), children: t.value, parents: n.value, event: m });
    h && (o.value = h);
  }, openOnSelect: (v, c, m) => {
    const h = r.value.select({ id: v, value: c, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: n.value, event: m });
    h && (o.value = h);
  }, select: (v, c, m) => {
    u.emit("click:select", { id: v, value: c, path: i(v), event: m });
    const h = a.value.select({ id: v, value: c, selected: new Map(s.value), children: t.value, parents: n.value, event: m });
    h && (s.value = h), d.root.openOnSelect(v, c, m);
  }, children: t, parents: n } };
  return ge(Pt, d), d.root;
}, $o = (e, l) => {
  const t = fe(Pt, Ao), n = Symbol(Le()), o = g(() => e.value ?? n), a = { ...t, id: o, open: (r, s) => t.root.open(o.value, r, s), openOnSelect: (r, s) => t.root.openOnSelect(o.value, r, s), isOpen: g(() => t.root.opened.value.has(o.value)), parent: g(() => t.root.parents.value.get(o.value)), select: (r, s) => t.root.select(o.value, r, s), isSelected: g(() => t.root.selected.value.get(Ue(o.value)) === "on"), isIndeterminate: g(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: g(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, l), at(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), l && ge(Pt, a), a;
}, ws = vt({ name: "VListGroupActivator", setup(e, l) {
  let { slots: t } = l;
  return (() => {
    const n = fe(Pt, Ao);
    ge(Pt, { ...n, isGroupActivator: !0 });
  })(), () => {
    var n;
    return (n = t.default) == null ? void 0 : n.call(t);
  };
} }), xs = M({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...we() }, "VListGroup"), Wn = q()({ name: "VListGroup", props: xs(), setup(e, l) {
  let { slots: t } = l;
  const { isOpen: n, open: o, id: a } = $o(H(e, "value"), !0), r = g(() => `v-list-group--id-${String(a.value)}`), s = _o(), { isBooted: i } = function() {
    const m = ue(!1);
    return At(() => {
      window.requestAnimationFrame(() => {
        m.value = !0;
      });
    }), { ssrBootStyles: g(() => m.value ? void 0 : { transition: "none !important" }), isBooted: zl(m) };
  }();
  function u(m) {
    o(!n.value, m);
  }
  const d = g(() => ({ onClick: u, class: "v-list-group__header", id: r.value })), v = g(() => n.value ? e.collapseIcon : e.expandIcon), c = g(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return te(() => p(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style }, { default: () => [t.activator && p(Ve, { defaults: c.value }, { default: () => [p(ws, null, { default: () => [t.activator({ props: d.value, isOpen: n.value })] })] }), p(Ke, { transition: { component: xr }, disabled: !i.value }, { default: () => {
    var m;
    return [Ae(p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": r.value }, [(m = t.default) == null ? void 0 : m.call(t)]), [[yt, n.value]])];
  } })] })), {};
} }), ks = fa("v-list-item-subtitle"), Cs = fa("v-list-item-title"), Bs = M({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Te(), onClickOnce: Te(), ...Tt(), ...se(), ...He(), ...Et(), ...Mt(), ...Ze(), ...tn(), ...we(), ...be(), ...rt({ variant: "text" }) }, "VListItem"), al = q()({ name: "VListItem", directives: { Ripple: ml }, props: Bs(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const a = en(e, t), r = g(() => e.value ?? a.href.value), { select: s, isSelected: i, isIndeterminate: u, isGroupActivator: d, root: v, parent: c, openOnSelect: m } = $o(r, !1), h = _o(), k = g(() => {
    var T;
    return e.active !== !1 && (e.active || ((T = a.isActive) == null ? void 0 : T.value) || i.value);
  }), f = g(() => e.link !== !1 && a.isLink.value), b = g(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || e.value != null && !!h)), w = g(() => e.rounded || e.nav), y = g(() => e.color ?? e.activeColor), P = g(() => ({ color: k.value ? y.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  J(() => {
    var T;
    return (T = a.isActive) == null ? void 0 : T.value;
  }, (T) => {
    T && c.value != null && v.open(c.value, !0), T && m(T);
  }, { immediate: !0 });
  const { themeClasses: V } = Ce(e), { borderClasses: E } = Lt(e), { colorClasses: $, colorStyles: _, variantClasses: C } = fl(P), { densityClasses: S } = We(e), { dimensionStyles: F } = It(e), { elevationClasses: D } = Nt(e), { roundedClasses: B } = Qe(w), A = g(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), I = g(() => ({ isActive: k.value, select: s, isSelected: i.value, isIndeterminate: u.value }));
  function L(T) {
    var z;
    o("click", T), !d && b.value && ((z = a.navigate) == null || z.call(a, T), e.value != null && s(!i.value, T));
  }
  function N(T) {
    T.key !== "Enter" && T.key !== " " || (T.preventDefault(), L(T));
  }
  return te(() => {
    const T = f.value ? "a" : e.tag, z = n.title || e.title, j = n.subtitle || e.subtitle, W = !(!e.appendAvatar && !e.appendIcon), O = !(!W && !n.append), G = !(!e.prependAvatar && !e.prependIcon), R = !(!G && !n.prepend);
    var K, le;
    return h == null || h.updateHasPrepend(R), e.activeColor && (K = "active-color", le = ["color", "base-color"], le = Array.isArray(le) ? le.slice(0, -1).map((ee) => `'${ee}'`).join(", ") + ` or '${le.at(-1)}'` : `'${le}'`, ul(`[Vuetify UPGRADE] '${K}' is deprecated, use ${le} instead.`)), Ae(p(T, { class: ["v-list-item", { "v-list-item--active": k.value, "v-list-item--disabled": e.disabled, "v-list-item--link": b.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !R && (h == null ? void 0 : h.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && k.value }, V.value, E.value, $.value, S.value, D.value, A.value, B.value, C.value, e.class], style: [_.value, F.value, e.style], href: a.href.value, tabindex: b.value ? h ? -2 : 0 : void 0, onClick: L, onKeydown: b.value && !f.value && N }, { default: () => {
      var ee;
      return [vl(b.value || k.value, "v-list-item"), R && p("div", { key: "prepend", class: "v-list-item__prepend" }, [n.prepend ? p(Ve, { key: "prepend-defaults", disabled: !G, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.prepend) == null ? void 0 : Q.call(n, I.value)];
      } }) : p(re, null, [e.prependAvatar && p(nl, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(he, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), p("div", { class: "v-list-item__content", "data-no-activator": "" }, [z && p(Cs, { key: "title" }, { default: () => {
        var Q;
        return [((Q = n.title) == null ? void 0 : Q.call(n, { title: e.title })) ?? e.title];
      } }), j && p(ks, { key: "subtitle" }, { default: () => {
        var Q;
        return [((Q = n.subtitle) == null ? void 0 : Q.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ee = n.default) == null ? void 0 : ee.call(n, I.value)]), O && p("div", { key: "append", class: "v-list-item__append" }, [n.append ? p(Ve, { key: "append-defaults", disabled: !W, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.append) == null ? void 0 : Q.call(n, I.value)];
      } }) : p(re, null, [e.appendIcon && p(he, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && p(nl, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[Ye("ripple"), b.value && e.ripple]]);
  }), {};
} }), Ps = M({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...we() }, "VListSubheader"), _s = q()({ name: "VListSubheader", props: Ps(), setup(e, l) {
  let { slots: t } = l;
  const { textColorClasses: n, textColorStyles: o } = je(H(e, "color"));
  return te(() => {
    const a = !(!t.default && !e.title);
    return p(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var r;
      return [a && p("div", { class: "v-list-subheader__text" }, [((r = t.default) == null ? void 0 : r.call(t)) ?? e.title])];
    } });
  }), {};
} }), Fs = M({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...be() }, "VDivider"), As = q()({ name: "VDivider", props: Fs(), setup(e, l) {
  let { attrs: t } = l;
  const { themeClasses: n } = Ce(e), { textColorClasses: o, textColorStyles: a } = je(H(e, "color")), r = g(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = X(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = X(e.thickness)), s;
  });
  return te(() => p("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, n.value, o.value, e.class], style: [r.value, a.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), $s = M({ items: Array }, "VListChildren"), Vo = q()({ name: "VListChildren", props: $s(), setup(e, l) {
  let { slots: t } = l;
  return Po(), () => {
    var n, o;
    return ((n = t.default) == null ? void 0 : n.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((a) => {
      var m, h;
      let { children: r, props: s, type: i, raw: u } = a;
      if (i === "divider")
        return ((m = t.divider) == null ? void 0 : m.call(t, { props: s })) ?? p(As, s, null);
      if (i === "subheader")
        return ((h = t.subheader) == null ? void 0 : h.call(t, { props: s })) ?? p(_s, s, null);
      const d = { subtitle: t.subtitle ? (k) => {
        var f;
        return (f = t.subtitle) == null ? void 0 : f.call(t, { ...k, item: u });
      } : void 0, prepend: t.prepend ? (k) => {
        var f;
        return (f = t.prepend) == null ? void 0 : f.call(t, { ...k, item: u });
      } : void 0, append: t.append ? (k) => {
        var f;
        return (f = t.append) == null ? void 0 : f.call(t, { ...k, item: u });
      } : void 0, title: t.title ? (k) => {
        var f;
        return (f = t.title) == null ? void 0 : f.call(t, { ...k, item: u });
      } : void 0 }, [v, c] = Wn.filterProps(s);
      return r ? p(Wn, Z({ value: s == null ? void 0 : s.value }, v), { activator: (k) => {
        let { props: f } = k;
        return t.header ? t.header({ props: { ...s, ...f } }) : p(al, Z(s, f), d);
      }, default: () => p(Vo, { items: r }, t) }) : t.item ? t.item({ props: s }) : p(al, s, d);
    }));
  };
} }), Eo = M({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Io(e, l) {
  const t = ke(l, e.itemTitle, l), n = e.returnObject ? l : ke(l, e.itemValue, t), o = ke(l, e.itemChildren), a = { title: t, value: n, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? Vt(l, ["children"])[1] : l : ke(l, e.itemProps) };
  return { title: String(a.title ?? ""), value: a.value, props: a, children: Array.isArray(o) ? Oo(e, o) : void 0, raw: l };
}
function Oo(e, l) {
  const t = [];
  for (const n of l)
    t.push(Io(e, n));
  return t;
}
function Vs(e) {
  return function(l, t) {
    function n(a) {
      return a.map((r) => l.value.find((s) => ot(r, s.value)) ?? t(r));
    }
    function o(a) {
      return a.map((r) => {
        let { value: s } = r;
        return s;
      });
    }
    return { items: l, transformIn: n, transformOut: o };
  }(g(() => Oo(e, e.items)), (l) => Io(e, l));
}
function Es(e, l) {
  const t = ke(l, e.itemType, "item"), n = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : ke(l, e.itemTitle), o = ke(l, e.itemValue, void 0), a = ke(l, e.itemChildren), r = { title: n, value: o, ...e.itemProps === !0 ? Vt(l, ["children"])[1] : ke(l, e.itemProps) };
  return { type: t, title: r.title, value: r.value, props: r, children: t === "item" && a ? Do(e, a) : void 0, raw: l };
}
function Do(e, l) {
  const t = [];
  for (const n of l)
    t.push(Es(e, n));
  return t;
}
const Is = M({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...bs({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Tt(), ...se(), ...He(), ...Et(), ...Mt(), itemType: { type: String, default: "type" }, ...Eo(), ...Ze(), ...we(), ...be(), ...rt({ variant: "text" }) }, "VList"), Os = q()({ name: "VList", props: Is(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { items: n } = function(C) {
    return { items: g(() => Do(C, C.items)) };
  }(e), { themeClasses: o } = Ce(e), { backgroundColorClasses: a, backgroundColorStyles: r } = ft(H(e, "bgColor")), { borderClasses: s } = Lt(e), { densityClasses: i } = We(e), { dimensionStyles: u } = It(e), { elevationClasses: d } = Nt(e), { roundedClasses: v } = Qe(e), { open: c, select: m } = Ss(e), h = g(() => e.lines ? `v-list--${e.lines}-line` : void 0), k = H(e, "activeColor"), f = H(e, "baseColor"), b = H(e, "color");
  Po(), Je({ VListGroup: { activeColor: k, baseColor: f, color: b }, VListItem: { activeClass: H(e, "activeClass"), activeColor: k, baseColor: f, color: b, density: H(e, "density"), disabled: H(e, "disabled"), lines: H(e, "lines"), nav: H(e, "nav"), variant: H(e, "variant") } });
  const w = ue(!1), y = U();
  function P(C) {
    w.value = !0;
  }
  function V(C) {
    w.value = !1;
  }
  function E(C) {
    var S;
    w.value || C.relatedTarget && ((S = y.value) != null && S.contains(C.relatedTarget)) || _();
  }
  function $(C) {
    if (y.value) {
      if (C.key === "ArrowDown")
        _("next");
      else if (C.key === "ArrowUp")
        _("prev");
      else if (C.key === "Home")
        _("first");
      else {
        if (C.key !== "End")
          return;
        _("last");
      }
      C.preventDefault();
    }
  }
  function _(C) {
    if (y.value)
      return Xt(y.value, C);
  }
  return te(() => p(e.tag, { ref: y, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, a.value, s.value, i.value, d.value, h.value, v.value, e.class], style: [r.value, u.value, e.style], tabindex: e.disabled || w.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: P, onFocusout: V, onFocus: E, onKeydown: $ }, { default: () => [p(Vo, { items: n.value }, t)] })), { open: c, select: m, focus: _ };
} }), Ds = M({ id: String, ...Wl(Pa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ba } }), ["absolute"]) }, "VMenu"), Ts = q()({ name: "VMenu", props: Ds(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = ve(e, "modelValue"), { scopeId: o } = Ca(), a = Le(), r = g(() => e.id || `v-menu-${a}`), s = U(), i = fe(Dl, null), u = ue(0);
  function d() {
    i == null || i.closeParents();
  }
  function v(h) {
    var k, f;
    e.disabled || h.key === "Tab" && (n.value = !1, (f = (k = s.value) == null ? void 0 : k.activatorEl) == null || f.focus());
  }
  function c(h) {
    var f;
    if (e.disabled)
      return;
    const k = (f = s.value) == null ? void 0 : f.contentEl;
    k && n.value ? h.key === "ArrowDown" ? (h.preventDefault(), Xt(k, "next")) : h.key === "ArrowUp" && (h.preventDefault(), Xt(k, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (n.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => c(h))));
  }
  ge(Dl, { register() {
    ++u.value;
  }, unregister() {
    --u.value;
  }, closeParents() {
    setTimeout(() => {
      u.value || (n.value = !1, i == null || i.closeParents());
    }, 40);
  } }), J(n, (h) => {
    h ? i == null || i.register() : i == null || i.unregister();
  });
  const m = g(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(n.value), "aria-owns": r.value, onKeydown: c }, e.activatorProps));
  return te(() => {
    const [h] = On.filterProps(e);
    return p(On, Z({ ref: s, class: ["v-menu", e.class], style: e.style }, h, { modelValue: n.value, "onUpdate:modelValue": (k) => n.value = k, absolute: !0, activatorProps: m.value, "onClick:outside": d, onKeydown: v }, o), { activator: t.activator, default: function() {
      for (var k = arguments.length, f = new Array(k), b = 0; b < k; b++)
        f[b] = arguments[b];
      return p(Ve, { root: "VMenu" }, { default: () => {
        var w;
        return [(w = t.default) == null ? void 0 : w.call(t, ...f)];
      } });
    } });
  }), ln({ id: r, ΨopenChildren: u }, s);
} }), Ls = M({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...Dt({ transition: { component: Sa } }) }, "VCounter"), Ms = q()({ name: "VCounter", functional: !0, props: Ls(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return te(() => p(Ke, { transition: e.transition }, { default: () => [Ae(p("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: n.value, max: e.max, value: e.value }) : n.value]), [[yt, e.active]])] })), {};
} }), Ns = M({ floating: Boolean, ...se() }, "VFieldLabel"), zt = q()({ name: "VFieldLabel", props: Ns(), setup(e, l) {
  let { slots: t } = l;
  return te(() => p(mo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Rs = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], To = M({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Rs.includes(e) }, "onClick:clear": Te(), "onClick:appendInner": Te(), "onClick:prependInner": Te(), ...se(), ...nn(), ...Ze(), ...be() }, "VField"), Kn = q()({ name: "VField", inheritAttrs: !1, props: { id: String, ...wo(), ...To() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { themeClasses: a } = Ce(e), { loaderClasses: r } = an(e), { focusClasses: s, isFocused: i, focus: u, blur: d } = on(e), { InputIcon: v } = So(e), { roundedClasses: c } = Qe(e), { rtlClasses: m } = Ot(), h = g(() => e.dirty || e.active), k = g(() => !(e.singleLine || !e.label && !o.label)), f = Le(), b = g(() => e.id || `input-${f}`), w = g(() => `${b.value}-messages`), y = U(), P = U(), V = U(), E = g(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: $, backgroundColorStyles: _ } = ft(H(e, "bgColor")), { textColorClasses: C, textColorStyles: S } = je(g(() => e.error || e.disabled ? void 0 : h.value && i.value ? e.color : e.baseColor));
  J(h, (B) => {
    if (k.value) {
      const A = y.value.$el, I = P.value.$el;
      requestAnimationFrame(() => {
        const L = ql(A), N = I.getBoundingClientRect(), T = N.x - L.x, z = N.y - L.y - (L.height / 2 - N.height / 2), j = N.width / 0.75, W = Math.abs(j - L.width) > 1 ? { maxWidth: X(j) } : void 0, O = getComputedStyle(A), G = getComputedStyle(I), R = 1e3 * parseFloat(O.transitionDuration) || 150, K = parseFloat(G.getPropertyValue("--v-field-label-scale")), le = G.getPropertyValue("color");
        A.style.visibility = "visible", I.style.visibility = "hidden", it(A, { transform: `translate(${T}px, ${z}px) scale(${K})`, color: le, ...W }, { duration: R, easing: Jt, direction: B ? "normal" : "reverse" }).finished.then(() => {
          A.style.removeProperty("visibility"), I.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const F = g(() => ({ isActive: h, isFocused: i, controlRef: V, blur: d, focus: u }));
  function D(B) {
    B.target !== document.activeElement && B.preventDefault();
  }
  return te(() => {
    var T, z, j;
    const B = e.variant === "outlined", A = o["prepend-inner"] || e.prependInnerIcon, I = !(!e.clearable && !o.clear), L = !!(o["append-inner"] || e.appendInnerIcon || I), N = o.label ? o.label({ ...F.value, label: e.label, props: { for: b.value } }) : e.label;
    return p("div", Z({ class: ["v-field", { "v-field--active": h.value, "v-field--appended": L, "v-field--center-affix": e.centerAffix ?? !E.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": A, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !N, [`v-field--variant-${e.variant}`]: !0 }, a.value, $.value, s.value, r.value, c.value, m.value, e.class], style: [_.value, S.value, e.style], onClick: D }, t), [p("div", { class: "v-field__overlay" }, null), p(ro, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), A && p("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && p(v, { key: "prepend-icon", name: "prependInner" }, null), (T = o["prepend-inner"]) == null ? void 0 : T.call(o, F.value)]), p("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && k.value && p(zt, { key: "floating-label", ref: P, class: [C.value], floating: !0, for: b.value }, { default: () => [N] }), p(zt, { ref: y, for: b.value }, { default: () => [N] }), (z = o.default) == null ? void 0 : z.call(o, { ...F.value, props: { id: b.value, class: "v-field__input", "aria-describedby": w.value }, focus: u, blur: d })]), I && p(wa, { key: "clear" }, { default: () => [Ae(p("div", { class: "v-field__clearable", onMousedown: (W) => {
      W.preventDefault(), W.stopPropagation();
    } }, [o.clear ? o.clear() : p(v, { name: "clear" }, null)]), [[yt, e.dirty]])] }), L && p("div", { key: "append", class: "v-field__append-inner" }, [(j = o["append-inner"]) == null ? void 0 : j.call(o, F.value), e.appendInnerIcon && p(v, { key: "append-icon", name: "appendInner" }, null)]), p("div", { class: ["v-field__outline", C.value] }, [B && p(re, null, [p("div", { class: "v-field__outline__start" }, null), k.value && p("div", { class: "v-field__outline__notch" }, [p(zt, { ref: P, floating: !0, for: b.value }, { default: () => [N] })]), p("div", { class: "v-field__outline__end" }, null)]), E.value && k.value && p(zt, { ref: P, floating: !0, for: b.value }, { default: () => [N] })])]);
  }), { controlRef: V };
} }), js = ["color", "file", "time", "date", "datetime-local", "week", "month"], Lo = M({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...rn(), ...To() }, "VTextField"), Rl = q()({ name: "VTextField", directives: { Intersect: Co }, inheritAttrs: !1, props: Lo(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const a = ve(e, "modelValue"), { isFocused: r, focus: s, blur: i } = on(e), u = g(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : (a.value ?? "").toString().length), d = g(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), v = g(() => ["plain", "underlined"].includes(e.variant));
  function c(E, $) {
    var _, C;
    e.autofocus && E && ((C = (_ = $[0].target) == null ? void 0 : _.focus) == null || C.call(_));
  }
  const m = U(), h = U(), k = U(), f = g(() => js.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
  function b() {
    var E;
    k.value !== document.activeElement && ((E = k.value) == null || E.focus()), r.value || s();
  }
  function w(E) {
    n("mousedown:control", E), E.target !== k.value && (b(), E.preventDefault());
  }
  function y(E) {
    b(), n("click:control", E);
  }
  function P(E) {
    E.stopPropagation(), b(), Ee(() => {
      a.value = null, function($) {
        for (var _ = arguments.length, C = new Array(_ > 1 ? _ - 1 : 0), S = 1; S < _; S++)
          C[S - 1] = arguments[S];
        if (Array.isArray($))
          for (const F of $)
            F(...C);
        else
          typeof $ == "function" && $(...C);
      }(e["onClick:clear"], E);
    });
  }
  function V(E) {
    var _;
    const $ = E.target;
    if (a.value = $.value, ((_ = e.modelModifiers) == null ? void 0 : _.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const C = [$.selectionStart, $.selectionEnd];
      Ee(() => {
        $.selectionStart = C[0], $.selectionEnd = C[1];
      });
    }
  }
  return te(() => {
    const E = !!(o.counter || e.counter || e.counterValue), $ = !(!E && !o.details), [_, C] = Kl(t), [{ modelValue: S, ...F }] = ll.filterProps(e), [D] = function(B) {
      return Vt(B, Object.keys(Kn.props).filter((A) => !$l(A) && A !== "class" && A !== "style"));
    }(e);
    return p(ll, Z({ ref: m, modelValue: a.value, "onUpdate:modelValue": (B) => a.value = B, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, _, F, { centerAffix: !v.value, focused: r.value }), { ...o, default: (B) => {
      let { id: A, isDisabled: I, isDirty: L, isReadonly: N, isValid: T } = B;
      return p(Kn, Z({ ref: h, onMousedown: w, onClick: y, "onClick:clear": P, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, D, { id: A.value, active: f.value || L.value, dirty: L.value || e.dirty, disabled: I.value, focused: r.value, error: T.value === !1 }), { ...o, default: (z) => {
        let { props: { class: j, ...W } } = z;
        const O = Ae(p("input", Z({ ref: k, value: a.value, onInput: V, autofocus: e.autofocus, readonly: N.value, disabled: I.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: b, onBlur: i }, W, C), null), [[Ye("intersect"), { handler: c }, null, { once: !0 }]]);
        return p(re, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [e.prefix]), o.default ? p("div", { class: j, "data-no-activator": "" }, [o.default(), O]) : pr(O, { class: j }), e.suffix && p("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: $ ? (B) => {
      var A;
      return p(re, null, [(A = o.details) == null ? void 0 : A.call(o, B), E && p(re, null, [p("span", null, null), p(Ms, { active: e.persistentCounter || r.value, value: u.value, max: d.value }, o.counter)])]);
    } : void 0 });
  }), ln({}, m, h, k);
} }), Gs = M({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: ot }, ...Eo({ itemChildren: !1 }) }, "Select"), zs = M({ ...Gs(), ...Wl(Lo({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...Dt({ transition: { component: ba } }) }, "VSelect"), Hs = q()({ name: "VSelect", props: zs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { t: n } = ht(), o = U(), a = U(), r = ve(e, "menu"), s = g({ get: () => r.value, set: (B) => {
    var A;
    r.value && !B && ((A = a.value) != null && A.ΨopenChildren) || (r.value = B);
  } }), { items: i, transformIn: u, transformOut: d } = Vs(e), v = ve(e, "modelValue", [], (B) => u(Oe(B)), (B) => {
    const A = d(B);
    return e.multiple ? A : A[0] ?? null;
  }), c = xo(), m = g(() => v.value.map((B) => i.value.find((A) => e.valueComparator(A.value, B.value)) || B)), h = g(() => m.value.map((B) => B.props.value)), k = ue(!1);
  let f, b = "";
  const w = g(() => e.hideSelected ? i.value.filter((B) => !m.value.some((A) => A === B)) : i.value), y = g(() => e.hideNoData && !i.value.length || e.readonly || (c == null ? void 0 : c.isReadonly.value)), P = U();
  function V(B) {
    e.openOnClear && (s.value = !0);
  }
  function E() {
    y.value || (s.value = !s.value);
  }
  function $(B) {
    var L, N;
    if (e.readonly || c != null && c.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(B.key) && B.preventDefault(), ["Enter", "ArrowDown", " "].includes(B.key) && (s.value = !0), ["Escape", "Tab"].includes(B.key) && (s.value = !1), B.key === "Home" ? (L = P.value) == null || L.focus("first") : B.key === "End" && ((N = P.value) == null || N.focus("last")), e.multiple || !function(T) {
      const z = T.key.length === 1, j = !T.ctrlKey && !T.metaKey && !T.altKey;
      return z && j;
    }(B)))
      return;
    const A = performance.now();
    A - f > 1e3 && (b = ""), b += B.key.toLowerCase(), f = A;
    const I = i.value.find((T) => T.title.toLowerCase().startsWith(b));
    I !== void 0 && (v.value = [I]);
  }
  function _(B) {
    var A;
    B.key === "Tab" && ((A = o.value) == null || A.focus());
  }
  function C(B) {
    if (e.multiple) {
      const A = h.value.findIndex((I) => e.valueComparator(I, B.value));
      if (A === -1)
        v.value = [...v.value, B];
      else {
        const I = [...v.value];
        I.splice(A, 1), v.value = I;
      }
    } else
      v.value = [B], s.value = !1;
  }
  function S(B) {
    var A;
    (A = P.value) != null && A.$el.contains(B.relatedTarget) || (s.value = !1);
  }
  function F() {
    var B;
    k.value && ((B = o.value) == null || B.focus());
  }
  function D(B) {
    k.value = !0;
  }
  return te(() => {
    const B = !(!e.chips && !t.chip), A = !!(!e.hideNoData || w.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), I = v.value.length > 0, [L] = Rl.filterProps(e), N = I || !k.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return p(Rl, Z({ ref: o }, L, { modelValue: v.value.map((T) => T.props.value).join(", "), "onUpdate:modelValue": (T) => {
      T == null && (v.value = []);
    }, focused: k.value, "onUpdate:focused": (T) => k.value = T, validationValue: v.externalValue, dirty: I, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": v.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: N, "onClick:clear": V, "onMousedown:control": E, onBlur: S, onKeydown: $ }), { ...t, default: () => p(re, null, [p(Ts, Z({ ref: a, modelValue: s.value, "onUpdate:modelValue": (T) => s.value = T, activator: "parent", contentClass: "v-select__content", disabled: y.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: F }, e.menuProps), { default: () => [A && p(Os, { ref: P, selected: h.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (T) => T.preventDefault(), onKeydown: _, onFocusin: D, tabindex: "-1" }, { default: () => {
      var T, z, j;
      return [(T = t["prepend-item"]) == null ? void 0 : T.call(t), !w.value.length && !e.hideNoData && (((z = t["no-data"]) == null ? void 0 : z.call(t)) ?? p(al, { title: n(e.noDataText) }, null)), w.value.map((W, O) => {
        var R;
        const G = Z(W.props, { key: O, onClick: () => C(W) });
        return ((R = t.item) == null ? void 0 : R.call(t, { item: W, index: O, props: G })) ?? p(al, G, { prepend: (K) => {
          let { isSelected: le } = K;
          return p(re, null, [e.multiple && !e.hideSelected ? p(mt, { key: W.value, modelValue: le, ripple: !1, tabindex: "-1" }, null) : void 0, W.props.prependIcon && p(he, { icon: W.props.prependIcon }, null)]);
        } });
      }), (j = t["append-item"]) == null ? void 0 : j.call(t)];
    } })] }), m.value.map((T, z) => {
      var W;
      const j = { "onClick:close": function(O) {
        O.stopPropagation(), O.preventDefault(), C(T);
      }, onMousedown(O) {
        O.preventDefault(), O.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return p("div", { key: T.value, class: "v-select__selection" }, [B ? t.chip ? p(Ve, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: T.title } } }, { default: () => {
        var O;
        return [(O = t.chip) == null ? void 0 : O.call(t, { item: T, index: z, props: j })];
      } }) : p(gs, Z({ key: "chip", closable: e.closableChips, size: "small", text: T.title }, j), null) : ((W = t.selection) == null ? void 0 : W.call(t, { item: T, index: z })) ?? p("span", { class: "v-select__selection-text" }, [T.title, e.multiple && z < m.value.length - 1 && p("span", { class: "v-select__selection-comma" }, [pt(",")])])]);
    })]), "append-inner": function() {
      var W;
      for (var T = arguments.length, z = new Array(T), j = 0; j < T; j++)
        z[j] = arguments[j];
      return p(re, null, [(W = t["append-inner"]) == null ? void 0 : W.call(t, ...z), e.menuIcon ? p(he, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), ln({ isFocused: k, menu: s, select: C }, o);
} }), un = M({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), ol = q()({ name: "VDataTableFooter", props: un(), setup(e, l) {
  let { slots: t } = l;
  const { t: n } = ht(), { page: o, pageCount: a, startIndex: r, stopIndex: s, itemsLength: i, itemsPerPage: u, setItemsPerPage: d } = function() {
    const c = fe(Na);
    if (!c)
      throw new Error("Missing pagination!");
    return c;
  }(), v = g(() => e.itemsPerPageOptions.map((c) => ({ ...c, title: n(c.title) })));
  return () => {
    var c;
    return p("div", { class: "v-data-table-footer" }, [(c = t.prepend) == null ? void 0 : c.call(t), p("div", { class: "v-data-table-footer__items-per-page" }, [p("span", null, [n(e.itemsPerPageText)]), p(Hs, { items: v.value, modelValue: u.value, "onUpdate:modelValue": (m) => d(Number(m)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), p("div", { class: "v-data-table-footer__info" }, [p("div", null, [n(e.pageText, i.value ? r.value + 1 : 0, s.value, i.value)])]), p("div", { class: "v-data-table-footer__pagination" }, [p(ut, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": n(e.firstPageLabel) }, null), p(ut, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": n(e.prevPageLabel) }, null), e.showCurrentPage && p("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), p(ut, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(a.value, o.value + 1), disabled: o.value === a.value, "aria-label": n(e.nextPageLabel) }, null), p(ut, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = a.value, disabled: o.value === a.value, "aria-label": n(e.lastPageLabel) }, null)])]);
  };
} }), cn = (Un = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Pl = (e, l) => {
  let { slots: t, attrs: n } = l;
  const o = e.tag ?? "td";
  return p(o, Z({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: X(e.height), width: X(e.width), left: X(e.fixedOffset || null) } }, n), { default: () => {
    var a;
    return [(a = t.default) == null ? void 0 : a.call(t)];
  } });
}, Pl.props = Un, Pl);
var Un, Pl;
const Ws = M({ headers: { type: Array, default: () => [] } }, "DataTable-header"), Mo = Symbol.for("vuetify:data-table-headers");
function No(e, l) {
  const t = U([]), n = U([]);
  J(() => e.headers, () => {
    var m, h, k;
    const a = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], r = a.flatMap((f, b) => f.map((w) => ({ column: w, row: b }))), s = a.length, i = { title: "", sortable: !1 }, u = { ...i, width: 48 };
    if ((m = l == null ? void 0 : l.groupBy) != null && m.value.length) {
      const f = r.findIndex((b) => {
        let { column: w } = b;
        return w.key === "data-table-group";
      });
      f < 0 ? r.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : r.splice(f, 1, { column: { ...i, ...r[f].column }, row: r[f].row });
    }
    if ((h = l == null ? void 0 : l.showSelect) != null && h.value) {
      const f = r.findIndex((b) => {
        let { column: w } = b;
        return w.key === "data-table-select";
      });
      f < 0 ? r.unshift({ column: { ...u, key: "data-table-select", rowspan: s }, row: 0 }) : r.splice(f, 1, { column: { ...u, ...r[f].column }, row: r[f].row });
    }
    if ((k = l == null ? void 0 : l.showExpand) != null && k.value) {
      const f = r.findIndex((b) => {
        let { column: w } = b;
        return w.key === "data-table-expand";
      });
      f < 0 ? r.push({ column: { ...u, key: "data-table-expand", rowspan: s }, row: 0 }) : r.splice(f, 1, { column: { ...u, ...r[f].column }, row: r[f].row });
    }
    const d = mn(s).map(() => []), v = mn(s).fill(0);
    r.forEach((f) => {
      let { column: b, row: w } = f;
      const y = b.key;
      for (let P = w; P <= w + (b.rowspan ?? 1) - 1; P++)
        d[P].push({ ...b, key: y, fixedOffset: v[P], sortable: b.sortable ?? !!b.key }), v[P] += Number(b.width ?? 0);
    }), d.forEach((f) => {
      for (let b = f.length; b--; b >= 0)
        if (f[b].fixed)
          return void (f[b].lastFixed = !0);
    });
    const c = /* @__PURE__ */ new Set();
    t.value = d.map((f) => {
      const b = [];
      for (const w of f)
        c.has(w.key) || (c.add(w.key), b.push(w));
      return b;
    }), n.value = d.at(-1) ?? [];
  }, { deep: !0, immediate: !0 });
  const o = { headers: t, columns: n };
  return ge(Mo, o), o;
}
function gl() {
  const e = fe(Mo);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Ro = M({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...nn() }, "VDataTableHeaders"), rl = q()({ name: "VDataTableHeaders", props: Ro(), setup(e, l) {
  let { slots: t, emit: n } = l;
  const { toggleSort: o, sortBy: a, isSorted: r } = function() {
    const P = fe(Ka);
    if (!P)
      throw new Error("Missing sort!");
    return P;
  }(), { someSelected: s, allSelected: i, selectAll: u, showSelectAll: d } = pl(), { columns: v, headers: c } = gl(), { loaderClasses: m } = an(e), h = (P, V) => {
    if (e.sticky || P.fixed)
      return { position: "sticky", zIndex: P.fixed ? 4 : e.sticky ? 3 : void 0, left: P.fixed ? X(P.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${V})` : void 0 };
  };
  function k(P) {
    const V = a.value.find((E) => E.key === P.key);
    return V ? V.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: f, backgroundColorStyles: b } = ft(e, "color"), w = g(() => ({ headers: c.value, columns: v.value, toggleSort: o, isSorted: r, sortBy: a.value, someSelected: s.value, allSelected: i.value, selectAll: u, getSortIcon: k, getFixedStyles: h })), y = (P) => {
    let { column: V, x: E, y: $ } = P;
    const _ = V.key === "data-table-select" || V.key === "data-table-expand";
    return p(cn, { tag: "th", align: V.align, class: ["v-data-table__th", { "v-data-table__th--sortable": V.sortable, "v-data-table__th--sorted": r(V) }, m.value], style: { width: X(V.width), minWidth: X(V.width), ...h(V, $) }, colspan: V.colspan, rowspan: V.rowspan, onClick: V.sortable ? () => o(V) : void 0, lastFixed: V.lastFixed, noPadding: _ }, { default: () => {
      var F;
      const C = `column.${V.key}`, S = { column: V, selectAll: u, isSorted: r, toggleSort: o, sortBy: a.value, someSelected: s.value, allSelected: i.value, getSortIcon: k };
      return t[C] ? t[C](S) : V.key === "data-table-select" ? ((F = t["column.data-table-select"]) == null ? void 0 : F.call(t, S)) ?? (d && p(mt, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": u }, null)) : p("div", { class: "v-data-table-header__content" }, [p("span", null, [V.title]), V.sortable && p(he, { key: "icon", class: "v-data-table-header__sort-icon", icon: k(V) }, null), e.multiSort && r(V) && p("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...f.value], style: b.value }, [a.value.findIndex((D) => D.key === V.key) + 1])]);
    } });
  };
  te(() => p(re, null, [t.headers ? t.headers(w.value) : c.value.map((P, V) => p("tr", null, [P.map((E, $) => p(y, { column: E, x: $, y: V }, null))])), e.loading && p("tr", { class: "v-data-table-progress" }, [p("th", { colspan: v.value.length }, [p(ro, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), Ks = M({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), Us = q()({ name: "VDataTableGroupHeaderRow", props: Ks(), setup(e, l) {
  let { slots: t } = l;
  const { isGroupOpen: n, toggleGroup: o, extractRows: a } = Ia(), { isSelected: r, isSomeSelected: s, select: i } = pl(), { columns: u } = gl(), d = g(() => a([e.item]));
  return () => p("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((v) => {
    var c, m;
    if (v.key === "data-table-group") {
      const h = n(e.item) ? "$expand" : "$next", k = () => o(e.item);
      return ((c = t["data-table-group"]) == null ? void 0 : c.call(t, { item: e.item, count: d.value.length, props: { icon: h, onClick: k } })) ?? p(cn, { class: "v-data-table-group-header-row__column" }, { default: () => [p(ut, { size: "small", variant: "text", icon: h, onClick: k }, null), p("span", null, [e.item.value]), p("span", null, [pt("("), d.value.length, pt(")")])] });
    }
    if (v.key === "data-table-select") {
      const h = r(d.value), k = s(d.value) && !h, f = (b) => i(d.value, b);
      return ((m = t["data-table-select"]) == null ? void 0 : m.call(t, { props: { modelValue: h, indeterminate: k, "onUpdate:modelValue": f } })) ?? p("td", null, [p(mt, { modelValue: h, indeterminate: k, "onUpdate:modelValue": f }, null)]);
    }
    return p("td", null, null);
  })]);
} }), qs = vt({ name: "VDataTableRow", props: M({ index: Number, item: Object, onClick: Function }, "VDataTableRow")(), setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, toggleSelect: o } = pl(), { isExpanded: a, toggleExpand: r } = Aa(), { columns: s } = gl();
  te(() => p("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, u) => p(cn, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var m, h;
    const d = e.item, v = `item.${i.key}`, c = { index: e.index, item: e.item, columns: s.value, isSelected: n, toggleSelect: o, isExpanded: a, toggleExpand: r };
    return t[v] ? t[v](c) : i.key === "data-table-select" ? ((m = t["item.data-table-select"]) == null ? void 0 : m.call(t, c)) ?? p(mt, { disabled: !d.selectable, modelValue: n([d]), onClick: fn(() => o(d), ["stop"]) }, null) : i.key === "data-table-expand" ? ((h = t["item.data-table-expand"]) == null ? void 0 : h.call(t, c)) ?? p(ut, { icon: a(d) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: fn(() => r(d), ["stop"]) }, null) : ke(d.columns, i.key);
  } }))]));
} }), jo = M({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), sl = q()({ name: "VDataTableRows", props: jo(), setup(e, l) {
  let { emit: t, slots: n } = l;
  const { columns: o } = gl(), { expandOnClick: a, toggleExpand: r, isExpanded: s } = Aa(), { isSelected: i, toggleSelect: u } = pl(), { toggleGroup: d, isGroupOpen: v } = Ia(), { t: c } = ht();
  return te(() => {
    var m;
    return e.loading && n.loading ? p("tr", { class: "v-data-table-rows-loading", key: "loading" }, [p("td", { colspan: o.value.length }, [n.loading()])]) : e.loading || e.items.length || e.hideNoData ? p(re, null, [e.items.map((h, k) => {
      var w;
      if (h.type === "group")
        return n["group-header"] ? n["group-header"]({ index: k, item: h, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: u, toggleGroup: d, isGroupOpen: v }) : p(Us, { key: `group-header_${h.id}`, item: h }, n);
      const f = { index: k, item: h, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: u }, b = { ...f, props: { key: `item_${h.value}`, onClick: a.value || e["onClick:row"] ? (y) => {
        var P;
        a.value && r(h), (P = e["onClick:row"]) == null || P.call(e, y, { item: h });
      } : void 0, index: k, item: h } };
      return p(re, null, [n.item ? n.item(b) : p(qs, b.props, n), s(h) && ((w = n["expanded-row"]) == null ? void 0 : w.call(n, f))]);
    })]) : p("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [p("td", { colspan: o.value.length }, [((m = n["no-data"]) == null ? void 0 : m.call(n)) ?? c(e.noDataText)])]);
  }), {};
} }), Go = M({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...se(), ...He(), ...we(), ...be() }, "VTable"), il = q()({ name: "VTable", props: Go(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { densityClasses: o } = We(e);
  return te(() => p(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, n.value, o.value, e.class], style: e.style }, { default: () => {
    var a, r, s;
    return [(a = t.top) == null ? void 0 : a.call(t), t.default ? p("div", { class: "v-table__wrapper", style: { height: X(e.height) } }, [p("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), Ys = M({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function Xs(e, l, t) {
  return l.map((n, o) => function(a, r, s, i) {
    return { type: "item", index: s, value: a.returnObject ? r : ke(r, a.itemValue), selectable: ke(r, a.itemSelectable, !0), columns: i.reduce((u, d) => (u[d.key] = ke(r, d.value ?? d.key), u), {}), raw: r };
  }(e, n, o, t));
}
function zo(e, l) {
  return { items: g(() => Xs(e, e.items, l.value)) };
}
const Ho = M({ ...jo(), width: [String, Number], search: String, ...Mr(), ...Nr(), ...Ws(), ...Ys(), ...jr(), ...Gr(), ...Ro(), ...Go() }, "DataTable"), Js = M({ ...Ma(), ...Ho(), ...Tr(), ...un() }, "VDataTable"), Zs = q()({ name: "VDataTable", props: Js(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Va(e), { sortBy: a, multiSort: r, mustSort: s } = Ua(e), { page: i, itemsPerPage: u } = Ra(e), { columns: d, headers: v } = No(e, { groupBy: o, showSelect: H(e, "showSelect"), showExpand: H(e, "showExpand") }), { items: c } = zo(e, d), m = H(e, "search"), { filteredItems: h } = Lr(e, c, m, { transform: (G) => G.columns }), { toggleSort: k } = qa({ sortBy: a, multiSort: r, mustSort: s, page: i }), { sortByWithGroups: f, opened: b, extractRows: w, isGroupOpen: y, toggleGroup: P } = Ea({ groupBy: o, sortBy: a }), { sortedItems: V } = zr(e, h, f), { flatItems: E } = Ta(V, o, b), $ = g(() => E.value.length), { startIndex: _, stopIndex: C, pageCount: S, setItemsPerPage: F } = ja({ page: i, itemsPerPage: u, itemsLength: $ }), { paginatedItems: D } = function(G) {
    const { items: R, startIndex: K, stopIndex: le, itemsPerPage: ee } = G;
    return { paginatedItems: g(() => ee.value <= 0 ? R.value : R.value.slice(K.value, le.value)) };
  }({ items: E, startIndex: _, stopIndex: C, itemsPerPage: u }), B = g(() => w(D.value)), { isSelected: A, select: I, selectAll: L, toggleSelect: N, someSelected: T, allSelected: z } = Wa(e, { allItems: c, currentPage: B }), { isExpanded: j, toggleExpand: W } = Fa(e);
  La({ page: i, itemsPerPage: u, sortBy: a, groupBy: o, search: m }), Je({ VDataTableRows: { hideNoData: H(e, "hideNoData"), noDataText: H(e, "noDataText"), loading: H(e, "loading"), loadingText: H(e, "loadingText") } });
  const O = g(() => ({ page: i.value, itemsPerPage: u.value, sortBy: a.value, pageCount: S.value, toggleSort: k, setItemsPerPage: F, someSelected: T.value, allSelected: z.value, isSelected: A, select: I, selectAll: L, toggleSelect: N, isExpanded: j, toggleExpand: W, isGroupOpen: y, toggleGroup: P, items: B.value, groupedItems: D.value, columns: d.value, headers: v.value }));
  return te(() => {
    const [G] = ol.filterProps(e), [R] = rl.filterProps(e), [K] = sl.filterProps(e), [le] = il.filterProps(e);
    return p(il, Z({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, le), { top: () => {
      var ee;
      return (ee = n.top) == null ? void 0 : ee.call(n, O.value);
    }, default: () => {
      var ee, Q, ce, xe;
      return n.default ? n.default(O.value) : p(re, null, [(ee = n.colgroup) == null ? void 0 : ee.call(n, O.value), p("thead", null, [p(rl, R, n)]), (Q = n.thead) == null ? void 0 : Q.call(n, O.value), p("tbody", null, [n.body ? n.body(O.value) : p(sl, Z(K, { items: D.value }), n)]), (ce = n.tbody) == null ? void 0 : ce.call(n, O.value), (xe = n.tfoot) == null ? void 0 : xe.call(n, O.value)]);
    }, bottom: () => n.bottom ? n.bottom(O.value) : p(re, null, [p(ol, G, { prepend: n["footer.prepend"] })]) });
  }), {};
} }), Qs = M({ itemsLength: { type: [Number, String], required: !0 }, ...Ma(), ...Ho(), ...un() }, "VDataTableServer"), ei = q()({ name: "VDataTableServer", props: Qs(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0, "click:row": (e, l) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Va(e), { sortBy: a, multiSort: r, mustSort: s } = Ua(e), { page: i, itemsPerPage: u } = Ra(e), d = g(() => parseInt(e.itemsLength, 10)), { columns: v, headers: c } = No(e, { groupBy: o, showSelect: H(e, "showSelect"), showExpand: H(e, "showExpand") }), { items: m } = zo(e, v), { toggleSort: h } = qa({ sortBy: a, multiSort: r, mustSort: s, page: i }), { opened: k, isGroupOpen: f, toggleGroup: b, extractRows: w } = Ea({ groupBy: o, sortBy: a }), { pageCount: y, setItemsPerPage: P } = ja({ page: i, itemsPerPage: u, itemsLength: d }), { flatItems: V } = Ta(m, o, k), { isSelected: E, select: $, selectAll: _, toggleSelect: C, someSelected: S, allSelected: F } = Wa(e, { allItems: m, currentPage: m }), { isExpanded: D, toggleExpand: B } = Fa(e), A = g(() => w(m.value));
  La({ page: i, itemsPerPage: u, sortBy: a, groupBy: o, search: H(e, "search") }), ge("v-data-table", { toggleSort: h, sortBy: a }), Je({ VDataTableRows: { hideNoData: H(e, "hideNoData"), noDataText: H(e, "noDataText"), loading: H(e, "loading"), loadingText: H(e, "loadingText") } });
  const I = g(() => ({ page: i.value, itemsPerPage: u.value, sortBy: a.value, pageCount: y.value, toggleSort: h, setItemsPerPage: P, someSelected: S.value, allSelected: F.value, isSelected: E, select: $, selectAll: _, toggleSelect: C, isExpanded: D, toggleExpand: B, isGroupOpen: f, toggleGroup: b, items: A.value, groupedItems: V.value, columns: v.value, headers: c.value }));
  te(() => {
    const [L] = ol.filterProps(e), [N] = rl.filterProps(e), [T] = sl.filterProps(e), [z] = il.filterProps(e);
    return p(il, Z({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, z), { top: () => {
      var j;
      return (j = n.top) == null ? void 0 : j.call(n, I.value);
    }, default: () => {
      var j, W, O, G;
      return n.default ? n.default(I.value) : p(re, null, [(j = n.colgroup) == null ? void 0 : j.call(n, I.value), p("thead", { class: "v-data-table__thead", role: "rowgroup" }, [p(rl, Z(N, { sticky: e.fixedHeader }), n)]), (W = n.thead) == null ? void 0 : W.call(n, I.value), p("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [n.body ? n.body(I.value) : p(sl, Z(T, { items: V.value }), n)]), (O = n.tbody) == null ? void 0 : O.call(n, I.value), (G = n.tfoot) == null ? void 0 : G.call(n, I.value)]);
    }, bottom: () => n.bottom ? n.bottom(I.value) : p(ol, L, { prepend: n["footer.prepend"] }) });
  });
} }), ne = "v-drilldown-table";
function qn(e, l) {
  if (e) {
    const t = e.find((n) => n.key === l);
    if (t)
      return t.order;
  }
}
function jl(e, l = "px") {
  if (e != null && e !== "")
    return +e ? `${Number(e)}${l}` : String(e);
}
function Wo(e) {
  const l = e.title, t = [l, e];
  return e.renderer ? e.renderer(...t) : e.renderHeader ? e.renderHeader(...t) : e.renderFooter ? e.renderFooter(...t) : l || "";
}
function _l(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function kt(e, ...l) {
  if (!l.length)
    return e;
  const t = l.shift();
  if (_l(e) && _l(t))
    for (const n in t)
      _l(t[n]) ? (e[n] || Object.assign(e, { [n]: {} }), kt(e[n], t[n])) : Object.assign(e, { [n]: t[n] });
  return kt(e, ...l);
}
const ti = (e) => {
  const { colors: l, level: t, prop: n = "default", theme: o, type: a } = e, r = { ...l[n] }, s = l.percentageDirection;
  if (r === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let i = function(u, d, v) {
    let c = 100, m = u.percentageChange ?? 0;
    return isNaN(m) && (c = 100), m *= d, (v === "desc" || v === "descending") && (c = 100 - m), v !== "asc" && v !== "ascending" || (c = 0 + m), c < 0 && (c = 0), c > 100 && (c = 100), isNaN(c) && (c = 100), c;
  }(l, t - 1, s);
  return a || Object.entries(r).forEach(([u, d]) => {
    let v = o.global.current.value.colors[d] ?? d;
    if (v || (v = "transparent"), v === "transparent" || v === "none" || v === "inherit" || v === "currentColor" || v === "initial" || v === "unset")
      return void (r[u] = v);
    if (u === "text" && t === 0 && s === "asc" && (i = 100), v.includes("--v-theme"))
      return void (r[u] = `rgb(var(${v}))`);
    const c = `/ ${i}%`, m = Yn(v);
    if (m.includes("/"))
      return r[u] = `hsl(${m})`;
    r[u] = `hsl(${Yn(v)} ${c})`;
  }), r;
};
function Yn(e) {
  let l = function(d) {
    const v = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let c = d;
    return Object.entries(v).forEach(([m, h]) => {
      d.toLowerCase() != m.toLowerCase() || (c = h);
    }), c;
  }(e), t = 0, n = 0, o = 0, a = 0, r = 0, s = 0;
  if (l.substring(0, 1) === "#")
    l = function(d) {
      let v = d.replace("#", "");
      v.length === 3 && (v = v.split("").map((k) => k + k).join(""));
      const c = parseInt(v.substring(0, 2), 16), m = parseInt(v.substring(2, 4), 16), h = parseInt(v.substring(4, 6), 16);
      return [c, m, h];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/\d+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/\d+/g)].map(Number), t = l[0], n = l[1], o = l[2], `${t} ${n}% ${o}%`;
  [a, r, s] = l, a /= 255, r /= 255, s /= 255;
  const i = Math.max(a, r, s), u = Math.min(a, r, s);
  if (i === null || !u === null || isNaN(i) || isNaN(u)) {
    const d = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${d})" in it's place.`), d;
  }
  if (t = (i + u) / 2, n = (i + u) / 2, o = (i + u) / 2, i == u)
    t = n = 0;
  else {
    const d = i - u;
    switch (n = o > 0.5 ? d / (2 - i - u) : d / (i + u), i) {
      case a:
        t = (r - s) / d + (r < s ? 6 : 0);
        break;
      case r:
        t = (s - a) / d + 2;
        break;
      case s:
        t = (a - r) / d + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), n = Math.round(100 * n), o = Math.round(100 * o), `${t} ${n}% ${o}%`;
}
const yl = (e) => {
  const { colors: l, level: t, prop: n = "default", themeColors: o, type: a = null } = e;
  if (typeof l != "object" || l === null)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should no be called.');
  const r = ti({ colors: l, level: t, prop: n, theme: o, type: a });
  return a ? r[a] : r;
}, Ko = dl.reduce((e, l) => (e[l] = { type: [Boolean, String, Number], default: !1 }, e), {}), Uo = dl.reduce((e, l) => (e["offset" + Ft(l)] = { type: [String, Number], default: null }, e), {}), qo = dl.reduce((e, l) => (e["order" + Ft(l)] = { type: [String, Number], default: null }, e), {}), Xn = { col: Object.keys(Ko), offset: Object.keys(Uo), order: Object.keys(qo) };
function li(e, l, t) {
  let n = e;
  if (t != null && t !== !1)
    return l && (n += `-${l.replace(e, "")}`), e === "col" && (n = "v-" + n), (e !== "col" || t !== "" && t !== !0) && (n += `-${t}`), n.toLowerCase();
}
const ni = ["auto", "start", "end", "center", "baseline", "stretch"], ai = M({ cols: { type: [Boolean, String, Number], default: !1 }, ...Ko, offset: { type: [String, Number], default: null }, ...Uo, order: { type: [String, Number], default: null }, ...qo, alignSelf: { type: String, default: null, validator: (e) => ni.includes(e) }, ...se(), ...we() }, "VCol"), ct = q()({ name: "VCol", props: ai(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => {
    const o = [];
    let a;
    for (a in Xn)
      Xn[a].forEach((s) => {
        const i = e[s], u = li(a, s, i);
        u && o.push(u);
      });
    const r = o.some((s) => s.startsWith("v-col-"));
    return o.push({ "v-col": !r || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return gt(e.tag, { class: [n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), dn = ["start", "end", "center"], Yo = ["space-between", "space-around", "space-evenly"];
function pn(e, l) {
  return dl.reduce((t, n) => (t[e + Ft(n)] = l(), t), {});
}
const oi = [...dn, "baseline", "stretch"], Xo = (e) => oi.includes(e), Jo = pn("align", () => ({ type: String, default: null, validator: Xo })), ri = [...dn, ...Yo], Zo = (e) => ri.includes(e), Qo = pn("justify", () => ({ type: String, default: null, validator: Zo })), si = [...dn, ...Yo, "stretch"], er = (e) => si.includes(e), tr = pn("alignContent", () => ({ type: String, default: null, validator: er })), Jn = { align: Object.keys(Jo), justify: Object.keys(Qo), alignContent: Object.keys(tr) }, ii = { align: "align", justify: "justify", alignContent: "align-content" };
function ui(e, l, t) {
  let n = ii[e];
  if (t != null)
    return l && (n += `-${l.replace(e, "")}`), n += `-${t}`, n.toLowerCase();
}
const ci = M({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Xo }, ...Jo, justify: { type: String, default: null, validator: Zo }, ...Qo, alignContent: { type: String, default: null, validator: er }, ...tr, ...se(), ...we() }, "VRow"), lr = q()({ name: "VRow", props: ci(), setup(e, l) {
  let { slots: t } = l;
  const n = g(() => {
    const o = [];
    let a;
    for (a in Jn)
      Jn[a].forEach((r) => {
        const s = e[r], i = ui(a, r, s);
        i && o.push(i);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return gt(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), di = ["colspan"], pi = Xe({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, skeltonType: {}, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const l = e, t = cl(), n = g(() => {
    if (typeof l.colors == "object" && l.colors !== null)
      return yl({ colors: l.colors, level: l.level, prop: "loader", themeColors: t });
  }), o = g(() => ((y) => {
    const { isLinearOnly: P, loaderHeight: V } = y;
    let E = {};
    return x(P) && (E = { height: x(V), minHeight: x(V) }), E;
  })({ isLinearOnly: d, loaderHeight: u })), a = g(() => ((y) => {
    const { isLinearOnly: P, loaderHeight: V } = y;
    return x(P) ? { height: x(V), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: d, loaderHeight: u })), r = g(() => ({ [`${ne}--loader-tr`]: !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), s = g(() => ({ [`${ne}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), i = g(() => {
    var y;
    return ((y = n.value) == null ? void 0 : y.linear) || "";
  }), u = g(() => function(y) {
    return jl(y) || "2px";
  }(l.height)), d = g(() => function(y) {
    let P = !1;
    return y === "linear" && (P = !0), Array.isArray(y) && (P = y.length === 1 && y[0] === "linear"), P;
  }(l.loaderType)), v = g(() => {
    var y;
    return (y = n.value) == null ? void 0 : y.bg;
  }), c = g(() => {
    var y;
    return (y = n.value) == null ? void 0 : y.circular;
  }), m = g(() => l.skeltonType || "heading@1"), h = g(() => l.loading), k = g(() => {
    var y;
    return { color: (y = n.value) == null ? void 0 : y.text };
  }), f = g(() => l.loadingText || "Loading..."), b = (y) => {
    const P = l.loaderType;
    return Array.isArray(P) ? P.indexOf(y) : 1;
  }, w = (y) => {
    const P = l.loaderType;
    return y === l.loaderType || !!Array.isArray(P) && P.includes(y);
  };
  return (y, P) => {
    const V = ua("v-skeleton-loader");
    return Y(), ie("tr", { class: oe(x(r)), style: $e(x(o)) }, [Re("td", { class: "px-0 ma-0", colspan: y.colspan, style: $e(x(a)) }, [y.loading ? (Y(), me(lr, { key: 0, class: oe(x(s)), "no-gutters": "" }, { default: ae(() => [w("linear") ? (Y(), me(ct, { key: 0, class: "pa-0 ma-0", order: b("linear") }, { default: ae(() => [p(oo, { color: x(i), height: x(u), indeterminate: "" }, null, 8, ["color", "height"])]), _: 1 }, 8, ["order"])) : ye("", !0), w("circular") ? (Y(), me(ct, { key: 1, class: "pa-0 my-2", order: b("circular") }, { default: ae(() => [p(lo, { "bg-color": x(v), color: x(c), indeterminate: "", size: y.size }, null, 8, ["bg-color", "color", "size"])]), _: 1 }, 8, ["order"])) : ye("", !0), w("skelton") ? (Y(), me(ct, { key: 2, class: "pa-0 ma-0", order: b("skelton") }, { default: ae(() => [p(V, { loading: x(h), type: x(m) }, null, 8, ["loading", "type"])]), _: 1 }, 8, ["order"])) : ye("", !0), w("text") ? (Y(), me(ct, { key: 3, class: "my-2", order: b("text"), style: $e(x(k)) }, { default: ae(() => [pt(vr(x(f)), 1)]), _: 1 }, 8, ["order", "style"])) : ye("", !0)]), _: 1 }, 8, ["class"])) : ye("", !0)], 12, di)], 6);
  };
} }), vn = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, Zn = vn(pi, [["__scopeId", "data-v-e1719200"]]), vi = Xe({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (l, t) => de(l.$slots, "bottom") }), nr = (e) => {
  const { align: l } = e;
  return { "d-flex align-center": !0, [`justify-${l}`]: l, "justify-start": !l };
}, ar = (e) => {
  const { level: l } = e;
  return { "d-flex": !0, [`${ne}--header-select-all-checkbox`]: !0, [`${ne}--header-select-all-checkbox-${l}`]: !0 };
}, fi = ["colspan"], mi = ["colspan"], gi = ["colspan", "innerHTML"], yi = ["colspan", "onClick"], hi = ["innerHTML"], bi = Xe({ __name: "HeadersSlot", props: { isTheadSlot: { type: Boolean, default: !1 }, slotProps: {}, colors: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = cl(), a = U(t.slotProps.allRowsSelected), r = g(() => t.slotProps.allRowsSelected || a.value), s = g(() => t.slotProps.columns), i = g(() => t.slotProps.someSelected), u = g(() => i.value && !t.slotProps.allRowsSelected), d = g(() => ((f) => {
    const { level: b } = f;
    return { [`${ne}--header-row`]: !0, [`${ne}--header-row-${b}`]: !0 };
  })({ level: t.level })), v = (f, b = "") => ((w) => {
    const { colors: y, column: P, level: V, slotName: E = "" } = w;
    return { [`${ne}--header-row-th`]: !0, [`${ne}--header-row-th-${E}`]: E !== "", [`${ne}--header-row-th-${E}-${V}`]: E, [`${ne}--header-row-th-${V}`]: !0, [`${ne}--header-row-th-sortable`]: P.sortable, [`${ne}--header-row-th-sortable-default-color`]: P.sortable && y === !1, [`${P.cellClass}`]: P.cellClass };
  })({ colors: t.colors, column: f, level: t.level, slotName: b }), c = (f, b = !1) => ((w) => {
    const { colors: y, column: P, dataTableExpand: V = !1, level: E, theme: $ } = w, _ = { minWidth: P.width ? jl(P.width) : "auto", width: P.width ? jl(P.width) : "auto" };
    if (V && !P.width && (_.width = "48px", _.minWidth = "48px"), y === !1 || y === null)
      return _;
    const C = yl({ colors: y, level: E, prop: "header", themeColors: $ });
    return _.backgroundColor = C.bg, _.color = C.text, _;
  })({ colors: t.colors, column: f, dataTableExpand: b, level: t.level, theme: o });
  J(a, (f) => {
    t.slotProps.selectAll(f), l("click:selectAll", a.value);
  }), J(r, (f) => {
    a.value = f;
  }), J(i, (f) => {
    f || (a.value = !1);
  });
  const m = g(() => ar({ level: t.level })), h = (f) => ((b) => {
    const { key: w, level: y, sortBy: P } = b;
    return { "px-1": !0, [`${ne}--header-row-th-sortable-sort-icon`]: !0, [`${ne}--header-row-th-sortable-sort-icon-${y}`]: !0, [`${ne}--header-row-th-sortable-sort-icon-desc`]: qn(P, w) === "desc", [`${ne}--header-row-th-sortable-sort-icon-asc`]: qn(P, w) === "asc" };
  })({ key: f, level: t.level, sortBy: t.sortBy });
  function k(f) {
    return Wo(f);
  }
  return (f, b) => (Y(), ie("tr", { class: oe(x(d)) }, [(Y(!0), ie(re, null, De(x(s), (w) => {
    return Y(), ie(re, { key: w }, [x(n)[`column.${w.key}`] ? (Y(), ie("th", { key: 0, class: oe(v(w, w.key)), colspan: w.colspan || 1, style: $e(c(w, !0)) }, [de(f.$slots, `column.${w.key}`, { column: w }, void 0, !0)], 14, fi)) : w.key === "data-table-select" || w.key === "data-table-select" && f.showSelect ? (Y(), ie("th", { key: 1, class: oe(v(w, "header-data-table-select")), colspan: w.colspan || 1, style: $e(c(w, !0)) }, [p(sn, { modelValue: x(a), "onUpdate:modelValue": b[0] || (b[0] = (P) => Ge(a) ? a.value = P : null), class: oe(x(m)), density: f.density, focused: !1, indeterminate: x(u) }, null, 8, ["modelValue", "class", "density", "indeterminate"])], 14, mi)) : w.key === "data-table-expand" ? (Y(), ie("th", { key: 2, class: oe(v(w, "data-table-expand")), colspan: w.colspan || 1, style: $e(c(w, !0)), innerHTML: k(w) }, null, 14, gi)) : (Y(), ie("th", { key: 3, class: oe(v(w)), colspan: w.colspan || 1, style: $e(c(w)), onClick: (P) => function(V) {
      V.sortable && t.slotProps.toggleSort(V);
    }(w) }, [Re("div", { class: oe((y = w.align, nr({ align: y }))) }, [Re("span", { innerHTML: k(w) }, null, 8, hi), w.sortable && x(n)["header.sortIcon"] ? (Y(), ie("span", { key: 0, class: oe(h(w.key)) }, [de(f.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : w.sortable ? (Y(), me(he, { key: 1, class: oe(h(w.key)) }, { default: ae(() => [pt(" mdi mdi-arrow-up ")]), _: 2 }, 1032, ["class"])) : ye("", !0)], 2)], 14, yi))], 64);
    var y;
  }), 128))], 2));
} }), Si = vn(bi, [["__scopeId", "data-v-b30dc087"]]), wi = ["colspan"], xi = ["colspan"], ki = ["colspan"], Ci = ["colspan"], Bi = ["innerHTML"], Pi = Xe({ __name: "ItemSlot", props: { expandOnClick: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = g(() => t.slotProps.columns), a = g(() => t.slotProps.index), r = g(() => t.slotProps.isExpanded), s = g(() => t.slotProps.item), i = g(() => t.slotProps.level), u = g(() => t.slotProps.toggleExpand), d = g(() => t.slotProps.toggleSelect), v = g(() => ((f) => {
    const { expandOnClick: b, level: w, levels: y } = f;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": b && w < y, [`${ne}--body-row`]: !0, [`${ne}--body-row-${w}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), c = (f) => ((b) => {
    const { column: w, elm: y, level: P } = b;
    return { [`${ne}--${y}-row-td`]: !0, [`${ne}--${y}-row-td-${P}`]: !0, [`${w.cellClass}`]: w.cellClass };
  })({ column: f, elm: "body", level: t.level });
  function m(f) {
    const { item: b, level: w, toggleExpand: y } = f;
    if (!(t.level >= t.levels)) {
      if (f.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", f.$event);
      }
      w === t.level && y(b), l("update:expanded", f);
    }
  }
  const h = U(!1);
  function k(f, b) {
    return function(w, y) {
      const P = w[y.key];
      return y.renderItem ? y.renderItem(P, w, y) : P;
    }(f.raw, b);
  }
  return J(() => t.slotProps.allRowsSelected, () => {
    h.value = t.slotProps.allRowsSelected;
  }), (f, b) => (Y(), ie("tr", { class: oe(x(v)), onClick: b[3] || (b[3] = (w) => m({ columns: x(o), index: x(a), isExpanded: x(r), item: x(s), level: x(i), toggleExpand: x(u), $event: w })) }, [(Y(!0), ie(re, null, De(x(o), (w) => (Y(), ie(re, { key: w }, [f.$slots[`item.${w.key}`] ? (Y(), ie("td", { key: 0, class: oe(c(w)), colspan: w.colspan || 1 }, [de(f.$slots, `item.${w.key}`, { columns: x(o), index: x(a), item: x(s) }, void 0, !0)], 10, wi)) : w.key === "data-table-select" || w.key === "data-table-select" && t.showSelect ? (Y(), ie("td", { key: 1, class: oe(c(w)), colspan: w.colspan || 1 }, [x(n)["item.data-table-select"] ? de(f.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : ye("", !0), p(sn, { modelValue: x(h), "onUpdate:modelValue": b[0] || (b[0] = (y) => Ge(h) ? h.value = y : null), class: "d-flex v-simple-checkbox", density: f.density, onClick: b[1] || (b[1] = (y) => function(P) {
    const { item: V, level: E, toggleSelect: $ } = P;
    E === t.level && $(V), l("click:row:checkbox", V);
  }({ columns: x(o), index: x(a), item: x(s), level: x(i), toggleSelect: x(d) })) }, null, 8, ["modelValue", "density"])], 10, xi)) : w.key === "data-table-expand" || w.key === "data-table-expand" && f.showExpand ? (Y(), ie("td", { key: 2, class: oe(c(w)), colspan: w.colspan || 1 }, [x(i) < f.levels ? (Y(), ie("div", { key: 0, class: oe(["v-drilldown-table--expand-icon", x(r)(x(s)) ? "rotate-180" : ""]), onClick: b[2] || (b[2] = (y) => m({ columns: x(o), index: x(a), isExpanded: x(r), item: x(s), level: x(i), toggleExpand: x(u) })) }, [f.$slots["item.data-table-expand"] ? de(f.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (Y(), me(he, { key: 1 }, { default: ae(() => [pt(" mdi-chevron-down ")]), _: 1 }))], 2)) : ye("", !0)], 10, ki)) : (Y(), ie("td", { key: 3, class: oe(c(w)), colspan: w.colspan || 1 }, [Re("span", { innerHTML: k(x(s), w) }, null, 8, Bi)], 10, Ci))], 64))), 128))], 2));
} }), _i = vn(Pi, [["__scopeId", "data-v-12e9f83e"]]), Fi = ["colspan"], Ai = ["colspan"], $i = ["colspan", "innerHTML"], Vi = ["colspan", "innerHTML"], Ei = ["colspan"], Ii = ["innerHTML"], Oi = Xe({ __name: "TfootSlot", props: { footers: {}, slotProps: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = cl(), a = U(t.slotProps.allRowsSelected), r = g(() => t.slotProps.allRowsSelected || a.value), s = g(() => t.footers.length ? t.footers : t.slotProps.columns), i = g(() => t.slotProps.someSelected), u = g(() => i.value && !t.slotProps.allRowsSelected), d = g(() => ((f) => {
    const { level: b } = f;
    return { [`${ne}--tfoot`]: !0, [`${ne}--tfoot-${b}`]: !0 };
  })({ level: t.level })), v = g(() => ((f) => {
    const { level: b } = f;
    return { [`${ne}--tfoot-row`]: !0, [`${ne}--tfoot-row-${b}`]: !0 };
  })({ level: t.level })), c = (f, b = "") => ((w) => {
    const { column: y, level: P, slotName: V = "" } = w;
    return { [`${ne}--tfoot-row-td`]: !0, [`${ne}--tfoot-row-td-${V}`]: V !== "", [`${ne}--tfoot-row-td-${V}-${P}`]: V, [`${ne}--tfoot-row-td-${P}`]: !0, [`${y.cellClass}`]: y.cellClass };
  })({ column: f, level: t.level, slotName: b }), m = g(() => ((f) => {
    const { colors: b, elm: w, level: y, theme: P } = f;
    if (b === !1 || b === null)
      return {};
    const V = yl({ colors: b, level: y, prop: w, themeColors: P });
    return { backgroundColor: V.bg, color: V.text };
  })({ colors: t.colors, elm: "footer", level: t.level, theme: o }));
  J(a, (f) => {
    t.slotProps.selectAll(f), l("click:selectAll", a.value);
  }), J(r, (f) => {
    a.value = f;
  }), J(i, (f) => {
    f || (a.value = !1);
  });
  const h = g(() => ar({ level: t.level }));
  function k(f) {
    return Wo(f);
  }
  return (f, b) => {
    var w;
    return (w = x(s)) != null && w.length ? (Y(), ie("tfoot", { key: 0, class: oe(x(d)) }, [Re("tr", { class: oe(x(v)) }, [(Y(!0), ie(re, null, De(x(s), (y) => {
      return Y(), ie(re, { key: y }, [x(n)[`tfoot.${y.key}`] ? (Y(), ie("th", { key: 0, class: oe(c(y, y.key)), colspan: y.colspan || 1, style: $e(x(m)) }, [de(f.$slots, `tfoot.${y.key}`, { column: y })], 14, Fi)) : y.key === "data-table-select" ? (Y(), ie("th", { key: 1, class: oe(c(y, "tfoot-data-table-select")), colspan: y.colspan || 1, style: $e(x(m)) }, [p(sn, { modelValue: x(a), "onUpdate:modelValue": b[0] || (b[0] = (V) => Ge(a) ? a.value = V : null), class: oe(x(h)), density: f.density, focused: !1, indeterminate: x(u) }, null, 8, ["modelValue", "class", "density", "indeterminate"])], 14, Ai)) : y.key === "data-table-expand" ? (Y(), ie("th", { key: 2, class: oe(c(y, "tfoot-data-table-expand")), colspan: y.colspan || 1, style: $e(x(m)), innerHTML: k(y) }, null, 14, $i)) : y.renderFooterCell ? (Y(), ie("th", { key: 3, class: oe(c(y)), colspan: y.colspan || 1, style: $e(x(m)), innerHTML: k(y) }, null, 14, Vi)) : (Y(), ie("th", { key: 4, class: oe(c(y)), colspan: y.colspan || 1, style: $e(x(m)) }, [Re("div", { class: oe((P = y.align, nr({ align: P }))) }, [Re("span", { innerHTML: k(y) }, null, 8, Ii)], 2)], 14, Ei))], 64);
      var P;
    }), 128))], 2)], 2)) : ye("", !0);
  };
} });
function Qn(e) {
  return typeof e == "function" ? e() : x(e);
}
const ea = () => {
}, Di = (e) => e();
function Ti(e, l = {}) {
  let t, n, o = ea;
  const a = (r) => {
    clearTimeout(r), o(), o = ea;
  };
  return (r) => {
    const s = Qn(e), i = Qn(l.maxWait);
    return t && a(t), s <= 0 || i !== void 0 && i <= 0 ? (n && (a(n), n = null), Promise.resolve(r())) : new Promise((u, d) => {
      o = l.rejectOnCancel ? d : u, i && !n && (n = setTimeout(() => {
        t && a(t), n = null, u(r());
      }, i)), t = setTimeout(() => {
        n && a(n), n = null, u(r());
      }, s);
    });
  };
}
var ta = Object.getOwnPropertySymbols, Li = Object.prototype.hasOwnProperty, Mi = Object.prototype.propertyIsEnumerable, Ni = (e, l) => {
  var t = {};
  for (var n in e)
    Li.call(e, n) && l.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && ta)
    for (var n of ta(e))
      l.indexOf(n) < 0 && Mi.call(e, n) && (t[n] = e[n]);
  return t;
};
function Ri(e, l, t = {}) {
  const n = t, { eventFilter: o = Di } = n, a = Ni(n, ["eventFilter"]);
  return J(e, (r = o, s = l, function(...i) {
    return new Promise((u, d) => {
      Promise.resolve(r(() => s.apply(this, i), { fn: s, thisArg: this, args: i })).then(u).catch(d);
    });
  }), a);
  var r, s;
}
var ji = Object.defineProperty, Gi = Object.defineProperties, zi = Object.getOwnPropertyDescriptors, Ht = Object.getOwnPropertySymbols, la = Object.prototype.hasOwnProperty, na = Object.prototype.propertyIsEnumerable, aa = (e, l, t) => l in e ? ji(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
function or(e, l, t = {}) {
  const n = t, { debounce: o = 0, maxWait: a } = n, r = ((u, d) => {
    var v = {};
    for (var c in u)
      la.call(u, c) && d.indexOf(c) < 0 && (v[c] = u[c]);
    if (u != null && Ht)
      for (var c of Ht(u))
        d.indexOf(c) < 0 && na.call(u, c) && (v[c] = u[c]);
    return v;
  })(n, ["debounce", "maxWait"]);
  return Ri(e, l, (s = ((u, d) => {
    for (var v in d || (d = {}))
      la.call(d, v) && aa(u, v, d[v]);
    if (Ht)
      for (var v of Ht(d))
        na.call(d, v) && aa(u, v, d[v]);
    return u;
  })({}, r), i = { eventFilter: Ti(o, { maxWait: a }) }, Gi(s, zi(i))));
  var s, i;
}
const wt = /* @__PURE__ */ new Map(), Hi = Xe({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchProps: { default: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "comfortable", variant: "underlined" }) }, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = U(""), a = g(() => t.items), r = g(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: a, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: x(o), selectAll: s, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: i }));
  function s(d) {
    t.slotProps.selectAll(d), l("click:selectAll", d);
  }
  function i() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  or(o, () => {
    l("update:search", o.value);
  }, { debounce: 750, maxWait: 1e3 });
  const u = g(() => {
    const d = t.searchProps.cols;
    return { [`${ne}--search-field`]: !0, [`v-col-${d.xs}`]: d.xs, [`v-col-sm-${d.sm}`]: d.sm, [`v-col-md-${d.md}`]: d.md, [`v-col-lg-${d.lg}`]: d.lg, [`v-col-xl-${d.xl}`]: d.xl, [`v-col-xxl-${d.xxl}`]: d.xxl };
  });
  return (d, v) => x(n).top ? de(d.$slots, "top", Pe(Z({ key: 0 }, x(r)))) : d.showSearch || x(n)["top.left"] || x(n)["top.right"] ? (Y(), me(ct, { key: 1, lg: "12" }, { default: ae(() => [p(lr, null, { default: ae(() => [x(n)["top.left"] ? de(d.$slots, "top.left", Pe(Z({ key: 0 }, x(r)))) : d.showSearch ? (Y(), me(ct, { key: 1, class: oe(["d-flex align-center justify-end", x(u)]) }, { default: ae(() => [d.showSearch ? (Y(), me(Rl, { key: 0, modelValue: x(o), "onUpdate:modelValue": v[0] || (v[0] = (c) => Ge(o) ? o.value = c : null), class: "mt-0 pt-0", density: d.searchProps.density, "hide-details": "", label: "Search", "single-line": "", variant: d.searchProps.variant }, null, 8, ["modelValue", "density", "variant"])) : ye("", !0)]), _: 1 }, 8, ["class"])) : ye("", !0), x(n)["top.right"] ? de(d.$slots, "top.right", Pe(Z({ key: 2 }, x(r)))) : ye("", !0)]), _: 3 })]), _: 3 })) : ye("", !0);
} }), Wi = Symbol("data"), Ki = ["colspan"], oa = Xe({ __name: "VDrilldownTable", props: mr({ colors: {}, customFilter: {}, customKeyFilter: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footers: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderHeight: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchDebounce: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, skeltonType: {}, sortBy: {}, tableType: {}, width: {} }, { colors: null, density: "comfortable", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, fixedFooter: !0, fixedHeader: !0, footers: () => [], height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemValue: "id", itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderHeight: "1px", loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", multiSort: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchDebounce: 750, searchMaxWait: 1e3, searchProps: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "comfortable", variant: "underlined" }), server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !0, showSearch: !1, showSelect: !1, skeltonType: "heading@1", sortBy: () => [], tableType: () => ({}), width: "100%" }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: l }) {
  const t = e, n = $t(), o = ue(null);
  At(() => {
    t.level === 1 && a.level !== 1 || a.server || f();
  }), Hl(() => {
    o.value = Object.assign({}, t.server ? ei : Zs);
  });
  let a = _t(Object.assign({}, t));
  const r = { ...t, ...a }, s = U(!1), i = U(""), u = U(""), d = cl(), v = g(() => a.sortBy), c = g(() => !!a.loading || a.hideNoData);
  (function(S, F, D) {
    const B = J(S, (...A) => (Ee(() => B()), F(...A)), D);
  })(t, () => {
    t.level === 1 && a.level !== 1 || f(), a.itemsPerPage = t.itemsPerPage;
  }, { immediate: !1 }), J(() => t.items, () => {
    f();
  }), J(() => t.loading, (S) => {
    S && (a.loading = S), f();
  });
  const m = (S) => {
    const F = a.loaderType;
    return !(S && (F === "skelton" || Array.isArray(F) && F.length === 1 && F[0] === "skelton" || !a.showDrilldownWhenLoading));
  }, h = g(() => ((S) => {
    const { elevation: F, isDrilldown: D, isHover: B, isServerSide: A, level: I } = S;
    return { "pb-2": !0, [`${ne}--child`]: D, [`${ne}--hover`]: B, [`${ne}--level-${I}`]: !0, [`${ne}--server`]: A, [`${ne}`]: !0, [`elevation-${F}`]: parseInt(F) > 0 };
  })({ elevation: a.elevation, isDrilldown: t.isDrilldown, isHover: a.hover, isServerSide: !1, level: a.level })), k = g(() => ((S) => {
    const { colors: F, level: D, theme: B } = S;
    let A = {};
    typeof F == "object" && F !== null && (A = yl({ colors: F, level: D, prop: "default", themeColors: B }));
    const I = { borderBottom: "none" };
    return A.border && (I.borderBottom = `1px solid ${A.border}`), I;
  })({ colors: a.colors, level: a.level, theme: d }));
  function f() {
    var S;
    a = t.drilldown ? ((F) => {
      const { loadedDrilldown: D, drilldown: B, rawItem: A, level: I, levels: L } = F;
      let N = D;
      N = kt(D, B);
      const T = (D.items || [{}]).find((z) => {
        const j = z[D.drilldownKey];
        let W = {};
        return A && (W = A[D.drilldownKey]), j === W;
      });
      return N = kt(D, T[D.itemChildrenKey]), L === I && (N.showExpand = !1), N;
    })({ drilldown: t.drilldown, level: t.level, levels: t.levels, loadedDrilldown: a, rawItem: (S = t.item) == null ? void 0 : S.raw }) : kt(a, t);
  }
  function b(S) {
    s.value = S;
  }
  function w(S) {
    let F = { ...r, ...a, ...S };
    t.server && (F = { ...a, ...r, ...S }), ((D) => {
      const { data: B, drilldownData: A, emit: I } = D;
      B.isExpanded(B.item) && I("update:drilldown", A), I("update:expanded", B.item);
    })({ data: S, drilldownData: F, emit: l });
  }
  function y(S) {
    return { items: S.items, itemsPerPage: S.itemsPerPage, page: S.page, search: u.value, server: S.server, sortBy: S.sortBy };
  }
  const P = function(S) {
    const F = fr();
    function D(I) {
      var L;
      const N = wt.get(S) || /* @__PURE__ */ new Set();
      N.add(I), wt.set(S, N);
      const T = () => B(I);
      return (L = F == null ? void 0 : F.cleanups) == null || L.push(T), T;
    }
    function B(I) {
      const L = wt.get(S);
      L && (L.delete(I), L.size || A());
    }
    function A() {
      wt.delete(S);
    }
    return { on: D, once: function(I) {
      return D(function L(...N) {
        B(L), I(...N);
      });
    }, off: B, emit: function(I, L) {
      var N;
      (N = wt.get(S)) == null || N.forEach((T) => T(I, L));
    }, reset: A };
  }(Wi), V = P.on(function(S) {
    t.level === 1 && S.drilldown.server && l("update:options", { ...S });
  });
  function E(S) {
    a.itemsPerPage = S;
    const F = y(a), D = { drilldown: { ...t, ...F, itemsPerPage: S }, itemsPerPage: S, name: "update:itemsPerPage" };
    P.emit(D), l("update:itemsPerPage", S);
  }
  function $(S) {
    a.page = S;
    const F = y(a), D = { drilldown: { ...t, ...F, page: S }, name: "update:page", page: S };
    P.emit(D), l("update:page", S);
  }
  function _(S) {
    a.sortBy = S;
    const F = y(a), D = { drilldown: { ...t, ...F, sortBy: S }, name: "update:sortBy", sortBy: S };
    P.emit(D), l("update:sortBy", S);
  }
  function C() {
  }
  return gr(() => {
    V();
  }), or(u, () => {
    a.search = u.value;
    const S = y(a), F = { drilldown: { ...t, ...S, search: u.value }, search: u.value };
    P.emit(F), l("update:search", F);
  }, { debounce: a.searchDebounce, maxWait: a.searchMaxWait }), (S, F) => {
    const D = ua("VDrilldownTable", !0);
    return x(o) ? (Y(), me(ia(x(o)), Z({ key: 0 }, S.$attrs, { class: x(h), density: x(a).density, "expand-on-click": x(a).expandOnClick, expanded: x(a).expanded, headers: x(a).headers, height: x(a).height, "hide-no-data": x(c), "item-value": x(a).itemValue, items: x(a).items, "items-length": x(a).itemsLength, "items-per-page": x(a).itemsPerPage, "items-per-page-options": x(a).itemsPerPageOptions, loading: (!x(a).loaderType || x(n).loading) && x(a).loading, "multi-sort": x(a).multiSort, "must-sort": x(a).mustSort, "no-data-text": x(a).noDataText, "no-filter": x(a).noFilter, page: x(a).page, "return-object": x(a).returnObject, search: x(u), "show-expand": x(a).showExpand, "sort-by": x(v), style: x(k), "onUpdate:itemsPerPage": E, "onUpdate:modelValue": C, "onUpdate:page": $, "onUpdate:sortBy": _ }), et({ top: ae((B) => [(Y(), me(x(Hi), { key: S.level, items: x(a).items, level: x(a).level, loading: x(a).loading, "search-props": x(a).searchProps, "show-search": x(a).showSearch ?? !1, "slot-props": B, "onClick:selectAll": F[0] || (F[0] = (A) => b(A)), "onUpdate:search": F[1] || (F[1] = (A) => u.value = A) }, et({ _: 2 }, [De(x(n), (A, I) => ({ name: I, fn: ae((L) => [de(S.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["items", "level", "loading", "search-props", "show-search", "slot-props"]))]), headers: ae((B) => [(Y(), me(x(Si), { key: S.level, colors: x(a).colors, density: x(a).density, level: S.level, "show-select": x(a).showSelect, "slot-props": { allRowsSelected: x(s), ...B }, "sort-by": x(a).sortBy, "onClick:selectAll": F[2] || (F[2] = (A) => b(A)) }, et({ _: 2 }, [De(x(n), (A, I) => ({ name: I, fn: ae((L) => [de(S.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["colors", "density", "level", "show-select", "slot-props", "sort-by"])), x(a).loading && x(a).loaderType && !x(n).loading && S.level === 1 ? (Y(), me(x(Zn), { key: 0, colors: x(a).colors || null, colspan: B.columns.length, height: x(a).loaderHeight, level: x(a).level, "loader-type": x(a).loaderType, loading: x(a).loading || !1, "loading-text": S.loadingText, "skelton-type": x(a).skeltonType }, null, 8, ["colors", "colspan", "height", "level", "loader-type", "loading", "loading-text", "skelton-type"])) : ye("", !0)]), item: ae((B) => [(Y(), me(x(_i), { key: S.level, density: x(a).density, "expand-on-click": x(a).expandOnClick, items: x(a).items, level: x(a).level, levels: x(a).levels, "show-expand": x(a).showExpand, "show-select": x(a).showSelect, "slot-props": { allRowsSelected: x(s), level: S.level, ...B }, "onClick:row": F[3] || (F[3] = (A) => {
      l("click:row", A);
    }), "onClick:row:checkbox": F[4] || (F[4] = (A) => {
      return I = A, console.log("emitClickRowCheckbox"), void l("click:row:checkbox", I);
      var I;
    }), "onUpdate:expanded": F[5] || (F[5] = (A) => w(A)) }, et({ _: 2 }, [De(x(n), (A, I) => ({ name: I, fn: ae((L) => [de(S.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["density", "expand-on-click", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": ae(({ columns: B, item: A }) => {
      var I, L, N, T, z, j, W, O, G, R;
      return [(I = A.raw[S.itemChildrenKey]) != null && I.loading && x(a).loaderType && !x(n).loading ? (Y(), me(x(Zn), { key: 0, class: "pa-0 ma-0", colors: ((L = A.raw[S.itemChildrenKey]) == null ? void 0 : L.colors) ?? null, colspan: B.length, height: A.raw[S.itemChildrenKey].loaderHeight, level: S.level + 1, "loader-type": A.raw[S.itemChildrenKey].loaderType, loading: (N = A.raw[S.itemChildrenKey]) == null ? void 0 : N.loading, "loading-text": S.loadingText, "skelton-type": A.raw[S.itemChildrenKey].skeltonType }, null, 8, ["colors", "colspan", "height", "level", "loader-type", "loading", "loading-text", "skelton-type"])) : ye("", !0), Re("tr", { class: oe(m((T = A.raw[S.itemChildrenKey]) == null ? void 0 : T.loading) ? "" : "d-none") }, [Re("td", { class: "px-0 ma-0", colspan: B.length, style: { "vertical-align": "top" } }, [(Y(), me(D, { key: A.raw, colors: S.colors, drilldown: x(a), headers: (z = A.raw[S.itemChildrenKey]) == null ? void 0 : z.headers, "is-drilldown": !0, item: A, "items-length": (j = A.raw[S.itemChildrenKey]) == null ? void 0 : j.itemsLength, "items-per-page": (W = A.raw[S.itemChildrenKey]) == null ? void 0 : W.itemsPerPage, level: S.level + 1, levels: x(a).levels, loading: (O = A.raw[S.itemChildrenKey]) == null ? void 0 : O.loading, "multi-sort": (G = A.raw[S.itemChildrenKey]) == null ? void 0 : G.multiSort, "no-data-text": x(a).noDataText, "parent-ref": x(i), server: (R = A.raw[S.itemChildrenKey]) == null ? void 0 : R.server, "sort-by": x(a).sortBy, "table-type": x(o), "onUpdate:drilldown": F[6] || (F[6] = (K) => w(K)), "onUpdate:modelValue": C }, et({ default: ae(() => [(Y(!0), ie(re, null, De(Object.keys(x(n)), (K) => de(S.$slots, K)), 256))]), _: 2 }, [De(x(n), (K, le) => ({ name: le, fn: ae((ee) => [de(S.$slots, le, Pe(Ne({ ...ee })))]) }))]), 1032, ["colors", "drilldown", "headers", "item", "items-length", "items-per-page", "level", "levels", "loading", "multi-sort", "no-data-text", "parent-ref", "server", "sort-by", "table-type"]))], 8, Ki)], 2)];
    }), "footer.prepend": ae(() => [x(n)["footer.prepend"] ? de(S.$slots, "footer.prepend", { key: 0 }) : ye("", !0)]), _: 2 }, [x(n).loader ? { name: "loader", fn: ae(() => [de(S.$slots, "loader")]), key: "0" } : void 0, x(n).loading ? { name: "loading", fn: ae(() => [de(S.$slots, "loading")]), key: "1" } : void 0, x(n).thead ? { name: "thead", fn: ae((B) => [de(S.$slots, "thead", Pe(Ne({ ...B })))]), key: "2" } : void 0, x(n).body ? { name: "body", fn: ae((B) => [de(S.$slots, "body", Pe(Ne({ ...B })))]), key: "3" } : void 0, x(n).tbody ? { name: "tbody", fn: ae((B) => [de(S.$slots, "tbody", Pe(Ne({ ...B })))]), key: "4" } : void 0, x(n)["no-data"] ? { name: "no-data", fn: ae(() => [de(S.$slots, "no-data")]), key: "5" } : void 0, x(n).tfoot || S.showFooterRow ? { name: "tfoot", fn: ae((B) => [x(n).tfoot ? de(S.$slots, "tfoot", Pe(Z({ key: 0 }, { ...B }))) : (Y(), me(x(Oi), { key: S.level, colors: x(a).colors || null, density: x(a).density, footers: x(a).footers || [], level: x(a).level, "show-select": x(a).showSelect, "slot-props": { allRowsSelected: x(s), ...B } }, et({ _: 2 }, [De(x(n), (A, I) => ({ name: I, fn: ae((L) => [de(S.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["colors", "density", "footers", "level", "show-select", "slot-props"]))]), key: "6" } : void 0, x(n).bottom ? { name: "bottom", fn: ae((B) => [(Y(), me(x(vi), { key: S.level, "slot-props": B }, et({ _: 2 }, [De(x(n), (A, I) => ({ name: I, fn: ae((L) => [de(S.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["slot-props"]))]), key: "7" } : void 0]), 1040, ["class", "density", "expand-on-click", "expanded", "headers", "height", "hide-no-data", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "no-filter", "page", "return-object", "search", "show-expand", "sort-by", "style"])) : ye("", !0);
  };
} });
oa.install = (e) => {
  e.component("VDrilldownTable", oa);
};
export {
  oa as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset);overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-data-table{width:100%}.v-data-table__table{width:100%;border-collapse:separate;border-spacing:0}.v-data-table__tr--focus{border:1px dotted black}.v-data-table__tr--clickable{cursor:pointer}.v-data-table .v-table__wrapper>table>thead>tr>td,.v-data-table .v-table__wrapper>table>thead>tr th,.v-data-table .v-table__wrapper>table tbody>tr>td,.v-data-table .v-table__wrapper>table tbody>tr th{background:rgb(var(--v-theme-surface))}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end{text-align:end}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end .v-data-table-header__content{flex-direction:row-reverse}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center{text-align:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center .v-data-table-header__content{justify-content:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--no-padding{padding:0 8px}.v-data-table .v-table__wrapper>table>thead>tr>th,.v-data-table .v-table__wrapper>table tbody>tr>th{align-items:center}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--sortable:hover{cursor:pointer;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon{opacity:0}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon{opacity:.5}.v-data-table-column--fixed{position:sticky;z-index:2;left:0}.v-data-table-column--last-fixed{border-right:1px solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-data-table-group-header-row td{background:lightgrey}.v-data-table-group-header-row td>span{padding-left:5px}.v-data-table--loading .v-data-table__td{opacity:.3}.v-data-table-group-header-row__column{padding-left:calc(var(--v-data-table-group-header-row-depth) * 16px)!important}.v-data-table-header__content{display:flex;align-items:center}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;font-size:.875rem;padding:4px;border-radius:50%;background:rgba(var(--v-border-color),var(--v-border-opacity));min-width:20px;min-height:20px;width:20px;height:20px}.v-data-table-progress>th{border:none!important;height:auto!important;padding:0!important}.v-data-table-rows-loading,.v-data-table-rows-no-data{text-align:center}.v-data-table-footer{display:flex;align-items:center;flex-wrap:wrap;padding:0 8px;justify-content:flex-end}.v-data-table-footer__items-per-page{padding-inline-end:24px;display:flex;align-items:center;justify-content:space-between}.v-data-table-footer__items-per-page>span{padding-inline-end:24px}.v-data-table-footer__info{display:flex;padding-inline-end:24px}.v-data-table-footer__pagination{display:flex;align-items:center}.v-data-table-footer__page{padding:0 8px}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:.625rem;min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:.75rem;min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:.875rem;min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:1rem;min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:1.125rem;min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{font-size:1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:.625rem;min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:.75rem;min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:.875rem;min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:1rem;min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:1.125rem;min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn{margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-input--density-default{--select-chips-margin-bottom: 0px}.v-input--density-comfortable{--select-chips-margin-bottom: 2px}.v-input--density-compact{--select-chips-margin-bottom: 4px}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field--variant-outlined{--select-chips-margin-bottom: 2px}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-field--single-line .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select--chips .v-field__input,.v-select--selection-slot .v-field__input{min-height:calc(var(--v-field-input-min-height) + var(--select-chips-margin-bottom) + 2px)}.v-select--chips .v-select__selection,.v-select--selection-slot .v-select__selection{margin-top:2px;margin-bottom:var(--select-chips-margin-bottom)}.v-select--chips .v-select__selection:first-child,.v-select--selection-slot .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.625}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 20px;font-size:.625rem;padding:0 8px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 14px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 20px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-5.6px;margin-inline-end:4px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-8px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:4px;margin-inline-end:-5.6px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-8px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:12px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-4px;margin-inline-end:4px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:4px;margin-inline-end:-4px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:8px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 26px;font-size:.75rem;padding:0 10px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 20px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 26px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-7px;margin-inline-end:5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-10px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:5px;margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-10px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:15px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-5px;margin-inline-end:5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:5px;margin-inline-end:-5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:10px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 32px;font-size:.875rem;padding:0 12px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 26px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 32px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-8.4px;margin-inline-end:6px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-12px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:6px;margin-inline-end:-8.4px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-12px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:18px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-6px;margin-inline-end:6px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:6px;margin-inline-end:-6px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:12px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 38px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 32px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 38px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 44px;font-size:1.125rem;padding:0 17px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 38px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 44px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.9px;margin-inline-end:8.5px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-17px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8.5px;margin-inline-end:-11.9px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-17px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:25.5px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8.5px;margin-inline-end:8.5px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8.5px;margin-inline-end:-8.5px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:17px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{grid-row-start:1;grid-column-start:1;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:grid;grid-template-rows:minmax(100%,1fr);grid-template-columns:1fr;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-grid;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-responsive__sizer,.v-responsive__content{position:relative;grid-row-start:1;grid-column-start:1}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 56px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 48px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 40px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 48px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 40px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 32px;--v-field-padding-bottom: 0px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:var(--v-field-input-min-height);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%;--v-field-input-min-height: max(var(--v-input-control-height, 56px), 1.625rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom))}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-table{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-table .v-table-divider{border-right:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>thead>tr>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity));color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tfoot>tr>td,.v-table .v-table__wrapper>table>tfoot>tr>th{border-top:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{background:rgb(var(--v-theme-surface));box-shadow:inset 0 -1px 0 rgba(var(--v-border-color),var(--v-border-opacity));z-index:1}.v-table.v-table--fixed-footer>tfoot>tr>th,.v-table.v-table--fixed-footer>tfoot>tr>td{background:rgb(var(--v-theme-surface));box-shadow:inset 0 1px 0 rgba(var(--v-border-color),var(--v-border-opacity))}.v-table{--v-table-header-height: 56px;border-radius:inherit;line-height:1.5;max-width:100%}.v-table>.v-table__wrapper>table{width:100%;border-spacing:0}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>th{padding:0 16px;transition:height cubic-bezier(.4,0,.2,1)}.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>th{font-weight:500;user-select:none;text-align:start}.v-table--density-default>.v-table__wrapper>table>tbody>tr>th,.v-table--density-default>.v-table__wrapper>table>thead>tr>th,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) + 0px)}.v-table--density-default>.v-table__wrapper>table>tbody>tr>td,.v-table--density-default>.v-table__wrapper>table>thead>tr>td,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) + 0px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 8px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 8px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>th,.v-table--density-compact>.v-table__wrapper>table>thead>tr>th,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 16px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>td,.v-table--density-compact>.v-table__wrapper>table>thead>tr>td,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 16px)}.v-table__wrapper{border-radius:inherit;overflow:auto}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-table--fixed-height>.v-table__wrapper{overflow-y:auto}.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border-bottom:0px!important;position:sticky;top:0}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th{border-top:0px!important;position:sticky;bottom:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1.v-locale--is-ltr,.v-locale--is-ltr .offset-1{margin-left:8.3333333333%}.offset-1.v-locale--is-rtl,.v-locale--is-rtl .offset-1{margin-right:8.3333333333%}.offset-2.v-locale--is-ltr,.v-locale--is-ltr .offset-2{margin-left:16.6666666667%}.offset-2.v-locale--is-rtl,.v-locale--is-rtl .offset-2{margin-right:16.6666666667%}.offset-3.v-locale--is-ltr,.v-locale--is-ltr .offset-3{margin-left:25%}.offset-3.v-locale--is-rtl,.v-locale--is-rtl .offset-3{margin-right:25%}.offset-4.v-locale--is-ltr,.v-locale--is-ltr .offset-4{margin-left:33.3333333333%}.offset-4.v-locale--is-rtl,.v-locale--is-rtl .offset-4{margin-right:33.3333333333%}.offset-5.v-locale--is-ltr,.v-locale--is-ltr .offset-5{margin-left:41.6666666667%}.offset-5.v-locale--is-rtl,.v-locale--is-rtl .offset-5{margin-right:41.6666666667%}.offset-6.v-locale--is-ltr,.v-locale--is-ltr .offset-6{margin-left:50%}.offset-6.v-locale--is-rtl,.v-locale--is-rtl .offset-6{margin-right:50%}.offset-7.v-locale--is-ltr,.v-locale--is-ltr .offset-7{margin-left:58.3333333333%}.offset-7.v-locale--is-rtl,.v-locale--is-rtl .offset-7{margin-right:58.3333333333%}.offset-8.v-locale--is-ltr,.v-locale--is-ltr .offset-8{margin-left:66.6666666667%}.offset-8.v-locale--is-rtl,.v-locale--is-rtl .offset-8{margin-right:66.6666666667%}.offset-9.v-locale--is-ltr,.v-locale--is-ltr .offset-9{margin-left:75%}.offset-9.v-locale--is-rtl,.v-locale--is-rtl .offset-9{margin-right:75%}.offset-10.v-locale--is-ltr,.v-locale--is-ltr .offset-10{margin-left:83.3333333333%}.offset-10.v-locale--is-rtl,.v-locale--is-rtl .offset-10{margin-right:83.3333333333%}.offset-11.v-locale--is-ltr,.v-locale--is-ltr .offset-11{margin-left:91.6666666667%}.offset-11.v-locale--is-rtl,.v-locale--is-rtl .offset-11{margin-right:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-0{margin-left:0}.offset-sm-0.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-0{margin-right:0}.offset-sm-1.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-1{margin-left:8.3333333333%}.offset-sm-1.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-1{margin-right:8.3333333333%}.offset-sm-2.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-2{margin-left:16.6666666667%}.offset-sm-2.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-2{margin-right:16.6666666667%}.offset-sm-3.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-3{margin-left:25%}.offset-sm-3.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-3{margin-right:25%}.offset-sm-4.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-4{margin-left:33.3333333333%}.offset-sm-4.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-4{margin-right:33.3333333333%}.offset-sm-5.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-5{margin-left:41.6666666667%}.offset-sm-5.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-5{margin-right:41.6666666667%}.offset-sm-6.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-6{margin-left:50%}.offset-sm-6.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-6{margin-right:50%}.offset-sm-7.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-7{margin-left:58.3333333333%}.offset-sm-7.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-7{margin-right:58.3333333333%}.offset-sm-8.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-8{margin-left:66.6666666667%}.offset-sm-8.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-8{margin-right:66.6666666667%}.offset-sm-9.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-9{margin-left:75%}.offset-sm-9.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-9{margin-right:75%}.offset-sm-10.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-10{margin-left:83.3333333333%}.offset-sm-10.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-10{margin-right:83.3333333333%}.offset-sm-11.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-11{margin-left:91.6666666667%}.offset-sm-11.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0.v-locale--is-ltr,.v-locale--is-ltr .offset-md-0{margin-left:0}.offset-md-0.v-locale--is-rtl,.v-locale--is-rtl .offset-md-0{margin-right:0}.offset-md-1.v-locale--is-ltr,.v-locale--is-ltr .offset-md-1{margin-left:8.3333333333%}.offset-md-1.v-locale--is-rtl,.v-locale--is-rtl .offset-md-1{margin-right:8.3333333333%}.offset-md-2.v-locale--is-ltr,.v-locale--is-ltr .offset-md-2{margin-left:16.6666666667%}.offset-md-2.v-locale--is-rtl,.v-locale--is-rtl .offset-md-2{margin-right:16.6666666667%}.offset-md-3.v-locale--is-ltr,.v-locale--is-ltr .offset-md-3{margin-left:25%}.offset-md-3.v-locale--is-rtl,.v-locale--is-rtl .offset-md-3{margin-right:25%}.offset-md-4.v-locale--is-ltr,.v-locale--is-ltr .offset-md-4{margin-left:33.3333333333%}.offset-md-4.v-locale--is-rtl,.v-locale--is-rtl .offset-md-4{margin-right:33.3333333333%}.offset-md-5.v-locale--is-ltr,.v-locale--is-ltr .offset-md-5{margin-left:41.6666666667%}.offset-md-5.v-locale--is-rtl,.v-locale--is-rtl .offset-md-5{margin-right:41.6666666667%}.offset-md-6.v-locale--is-ltr,.v-locale--is-ltr .offset-md-6{margin-left:50%}.offset-md-6.v-locale--is-rtl,.v-locale--is-rtl .offset-md-6{margin-right:50%}.offset-md-7.v-locale--is-ltr,.v-locale--is-ltr .offset-md-7{margin-left:58.3333333333%}.offset-md-7.v-locale--is-rtl,.v-locale--is-rtl .offset-md-7{margin-right:58.3333333333%}.offset-md-8.v-locale--is-ltr,.v-locale--is-ltr .offset-md-8{margin-left:66.6666666667%}.offset-md-8.v-locale--is-rtl,.v-locale--is-rtl .offset-md-8{margin-right:66.6666666667%}.offset-md-9.v-locale--is-ltr,.v-locale--is-ltr .offset-md-9{margin-left:75%}.offset-md-9.v-locale--is-rtl,.v-locale--is-rtl .offset-md-9{margin-right:75%}.offset-md-10.v-locale--is-ltr,.v-locale--is-ltr .offset-md-10{margin-left:83.3333333333%}.offset-md-10.v-locale--is-rtl,.v-locale--is-rtl .offset-md-10{margin-right:83.3333333333%}.offset-md-11.v-locale--is-ltr,.v-locale--is-ltr .offset-md-11{margin-left:91.6666666667%}.offset-md-11.v-locale--is-rtl,.v-locale--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-0{margin-left:0}.offset-lg-0.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-0{margin-right:0}.offset-lg-1.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-1{margin-left:8.3333333333%}.offset-lg-1.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-1{margin-right:8.3333333333%}.offset-lg-2.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-2{margin-left:16.6666666667%}.offset-lg-2.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-2{margin-right:16.6666666667%}.offset-lg-3.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-3{margin-left:25%}.offset-lg-3.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-3{margin-right:25%}.offset-lg-4.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-4{margin-left:33.3333333333%}.offset-lg-4.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-4{margin-right:33.3333333333%}.offset-lg-5.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-5{margin-left:41.6666666667%}.offset-lg-5.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-5{margin-right:41.6666666667%}.offset-lg-6.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-6{margin-left:50%}.offset-lg-6.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-6{margin-right:50%}.offset-lg-7.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-7{margin-left:58.3333333333%}.offset-lg-7.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-7{margin-right:58.3333333333%}.offset-lg-8.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-8{margin-left:66.6666666667%}.offset-lg-8.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-8{margin-right:66.6666666667%}.offset-lg-9.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-9{margin-left:75%}.offset-lg-9.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-9{margin-right:75%}.offset-lg-10.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-10{margin-left:83.3333333333%}.offset-lg-10.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-10{margin-right:83.3333333333%}.offset-lg-11.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-11{margin-left:91.6666666667%}.offset-lg-11.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-0{margin-left:0}.offset-xl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-0{margin-right:0}.offset-xl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-1{margin-left:8.3333333333%}.offset-xl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-1{margin-right:8.3333333333%}.offset-xl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-2{margin-left:16.6666666667%}.offset-xl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-2{margin-right:16.6666666667%}.offset-xl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-3{margin-left:25%}.offset-xl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-3{margin-right:25%}.offset-xl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-4{margin-left:33.3333333333%}.offset-xl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-4{margin-right:33.3333333333%}.offset-xl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-5{margin-left:41.6666666667%}.offset-xl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-5{margin-right:41.6666666667%}.offset-xl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-6{margin-left:50%}.offset-xl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-6{margin-right:50%}.offset-xl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-7{margin-left:58.3333333333%}.offset-xl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-7{margin-right:58.3333333333%}.offset-xl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-8{margin-left:66.6666666667%}.offset-xl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-8{margin-right:66.6666666667%}.offset-xl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-9{margin-left:75%}.offset-xl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-9{margin-right:75%}.offset-xl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-10{margin-left:83.3333333333%}.offset-xl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-10{margin-right:83.3333333333%}.offset-xl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-11{margin-left:91.6666666667%}.offset-xl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-11{margin-right:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-0{margin-left:0}.offset-xxl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-0{margin-right:0}.offset-xxl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-1{margin-right:8.3333333333%}.offset-xxl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-2{margin-right:16.6666666667%}.offset-xxl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-3{margin-left:25%}.offset-xxl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-3{margin-right:25%}.offset-xxl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-4{margin-right:33.3333333333%}.offset-xxl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-5{margin-right:41.6666666667%}.offset-xxl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-6{margin-left:50%}.offset-xxl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-6{margin-right:50%}.offset-xxl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-7{margin-right:58.3333333333%}.offset-xxl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-8{margin-right:66.6666666667%}.offset-xxl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-9{margin-left:75%}.offset-xxl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-9{margin-right:75%}.offset-xxl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-10{margin-right:83.3333333333%}.offset-xxl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-11{margin-left:91.6666666667%}.offset-xxl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-11{margin-right:91.6666666667%}}.v-drilldown-table--loader-tr[data-v-e1719200]{height:0;position:relative;top:0;width:100%;z-index:99999}.v-drilldown-table--loader-tr-vrow[data-v-e1719200]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-b30dc087]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-b30dc087]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-b30dc087]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-b30dc087],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-b30dc087]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-b30dc087]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-b30dc087]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-b30dc087]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-b30dc087],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-b30dc087],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-b30dc087]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-b30dc087]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-12e9f83e]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
