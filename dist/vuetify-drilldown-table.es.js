import { Fragment as re, reactive as Pt, computed as y, watchEffect as qe, toRefs as ra, capitalize as _t, warn as ul, watch as J, onScopeDispose as _e, effectScope as zl, ref as K, unref as S, provide as ge, inject as ve, shallowRef as ue, defineComponent as Xe, camelize as sa, h as mt, getCurrentInstance as ir, TransitionGroup as ur, Transition as nt, createVNode as d, mergeProps as Z, nextTick as Ee, isRef as ze, onMounted as Ft, toRaw as Ue, resolveDynamicComponent as ia, toRef as H, readonly as Gl, Teleport as cr, withDirectives as Ae, vShow as gt, resolveDirective as Ye, onBeforeUnmount as at, Text as dr, onBeforeMount as Hl, cloneVNode as pr, createTextVNode as Ut, withModifiers as fn, resolveComponent as ua, openBlock as Y, createElementBlock as ie, normalizeClass as oe, normalizeStyle as $e, createElementVNode as Re, createBlock as me, withCtx as ae, createCommentVNode as ye, toDisplayString as vr, renderSlot as de, useSlots as At, renderList as De, getCurrentScope as fr, normalizeProps as Pe, mergeDefaults as mr, onUnmounted as gr, createSlots as et, guardReactiveProps as Ne } from "vue";
import { useTheme as cl } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 1.0.0-beta-2
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
function $t(e, l, t) {
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
  return $t(e, ["class", "style", "id", /^data-/]);
}
function Oe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function wt(e) {
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
function Ul(e) {
  const l = Pt({}), t = y(e);
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
    const u = t.transformOrigin, c = l.x - s - (1 - a) * parseFloat(u), p = l.y - i - (1 - r) * parseFloat(u.slice(u.indexOf(" ") + 1)), v = a ? l.width / a : e.offsetWidth + 1, f = r ? l.height / r : e.offsetHeight + 1;
    return new dt({ x: c, y: p, width: v, height: f });
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
const jt = /* @__PURE__ */ new WeakMap();
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
    t = zl(), t.run(() => l.length ? l(() => {
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
  const e = ve(Yl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Je(e, l) {
  const t = Xl(), n = K(e), o = y(() => {
    if (S(l == null ? void 0 : l.disabled))
      return t.value;
    const a = S(l == null ? void 0 : l.scoped), r = S(l == null ? void 0 : l.reset), s = S(l == null ? void 0 : l.root);
    let i = st(n.value, { prev: t.value });
    if (a)
      return i;
    if (r || s) {
      const u = Number(r || 1 / 0);
      for (let c = 0; c <= u && i && "prev" in i; c++)
        i = i.prev;
      return i && typeof s == "string" && s in i && (i = st(st(i, { prev: i }), i[s])), i;
    }
    return i.prev ? st(i.prev, i) : i;
  });
  return ge(Yl, o), o;
}
function br() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xl();
  const n = we("useDefaults");
  if (l = l ?? n.type.name ?? n.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const o = y(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? l];
  }), a = new Proxy(e, { get(s, i) {
    var c, p, v, f;
    const u = Reflect.get(s, i);
    return i === "class" || i === "style" ? [(c = o.value) == null ? void 0 : c[i], u].filter((h) => h != null) : typeof i != "string" || function(h, w) {
      var m, x;
      return ((m = h.props) == null ? void 0 : m[w]) !== void 0 || ((x = h.props) == null ? void 0 : x[tt(w)]) !== void 0;
    }(n.vnode, i) ? u : ((p = o.value) == null ? void 0 : p[i]) ?? ((f = (v = t.value) == null ? void 0 : v.global) == null ? void 0 : f[i]) ?? u;
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
        const { provides: u } = we("injectSelf");
        if (u && i in u)
          return u[i];
      }(Yl)) == null ? void 0 : s.value) ?? {}, r.value));
    });
  } };
}
function pt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return va("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = M(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(t) {
      return $t(t, l, ["class", "style"]);
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
  return (l) => (e ? pt : Xe)(l);
}
function fa(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return q()({ name: t ?? _t(sa(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...se() }, setup(n, o) {
    let { slots: a } = o;
    return () => {
      var r;
      return mt(n.tag, { class: [e, n.class], style: n.style }, (r = a.default) == null ? void 0 : r.call(a));
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
function we(e, l) {
  const t = ir();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return t;
}
function Ge() {
  const e = we(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return tt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ga = 0, Wt = /* @__PURE__ */ new WeakMap();
function Le() {
  const e = we("getUid");
  if (Wt.has(e))
    return Wt.get(e);
  {
    const l = ga++;
    return Wt.set(e, l), l;
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
  ga = 0, Wt = /* @__PURE__ */ new WeakMap();
};
const Ie = typeof window < "u", Zl = Ie && "IntersectionObserver" in window, El = Ie && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function te(e) {
  we("useRender").render = e;
}
const Sr = M({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Be(e, l, t) {
  return q()({ name: e, props: Sr({ mode: t, origin: l }), setup(n, o) {
    let { slots: a } = o;
    const r = { onBeforeEnter(s) {
      n.origin && (s.style.transformOrigin = n.origin);
    }, onLeave(s) {
      if (n.leaveAbsolute) {
        const { offsetTop: i, offsetLeft: u, offsetWidth: c, offsetHeight: p } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${i}px`, s.style.left = `${u}px`, s.style.width = `${c}px`, s.style.height = `${p}px`;
      }
      n.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (n.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: i, top: u, left: c, width: p, height: v } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = i || "", s.style.top = u || "", s.style.left = c || "", s.style.width = p || "", s.style.height = v || "";
      }
    } };
    return () => {
      const s = n.group ? ur : nt;
      return mt(s, { name: n.disabled ? "" : e, css: !n.disabled, ...n.group ? void 0 : { mode: n.mode }, ...n.disabled ? {} : r }, a.default);
    };
  } });
}
function ya(e, l) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return q()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(n, o) {
    let { slots: a } = o;
    return () => mt(nt, { name: n.disabled ? "" : e, css: !n.disabled, ...n.disabled ? {} : l }, a.default);
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
    var v;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), o.style.visibility = "";
    const { x: r, y: s, sx: i, sy: u, speed: c } = Bn(e.target, o), p = it(o, [{ transform: `translate(${r}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }, {}], { duration: 225 * c, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (v = Cn(o)) == null || v.forEach((f) => {
      it(f, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * c, easing: Jt });
    }), p.finished.then(() => a());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, a) {
    var p;
    await new Promise((v) => requestAnimationFrame(v));
    const { x: r, y: s, sx: i, sy: u, speed: c } = Bn(e.target, o);
    it(o, [{}, { transform: `translate(${r}px, ${s}px) scale(${i}, ${u})`, opacity: 0 }], { duration: 125 * c, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => a()), (p = Cn(o)) == null || p.forEach((v) => {
      it(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * c, easing: Jt });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(nt, Z({ name: "dialog-transition" }, n, { css: !1 }), t) : d(nt, { name: "dialog-transition" }, t);
} });
function Cn(e) {
  var t;
  const l = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return l && [...l];
}
function Bn(e, l) {
  const t = e.getBoundingClientRect(), n = ql(l), [o, a] = getComputedStyle(l).transformOrigin.split(" ").map((x) => parseFloat(x)), [r, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let i = t.left + t.width / 2;
  r === "left" || s === "left" ? i -= t.width / 2 : r !== "right" && s !== "right" || (i += t.width / 2);
  let u = t.top + t.height / 2;
  r === "top" || s === "top" ? u -= t.height / 2 : r !== "bottom" && s !== "bottom" || (u += t.height / 2);
  const c = t.width / n.width, p = t.height / n.height, v = Math.max(1, c, p), f = c / v || 0, h = p / v || 0, w = n.width * n.height / (window.innerWidth * window.innerHeight), m = w > 0.12 ? Math.min(1.5, 10 * (w - 0.12) + 1) : 1;
  return { x: i - (o + n.left), y: u - (a + n.top), sx: f, sy: h, speed: m };
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
  (function(f) {
    for (; f; ) {
      if (window.getComputedStyle(f).position === "fixed")
        return !0;
      f = f.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: n, preferredOrigin: o } = Ul(() => {
    const f = Vl(l.location, e.isRtl.value), h = l.origin === "overlap" ? f : l.origin === "auto" ? bl(f) : Vl(l.origin, e.isRtl.value);
    return f.side === h.side && f.align === Sl(h).align ? { preferredAnchor: Sn(f), preferredOrigin: Sn(h) } : { preferredAnchor: f, preferredOrigin: h };
  }), [a, r, s, i] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((f) => y(() => {
    const h = parseFloat(l[f]);
    return isNaN(h) ? 1 / 0 : h;
  })), u = y(() => {
    if (Array.isArray(l.offset))
      return l.offset;
    if (typeof l.offset == "string") {
      const f = l.offset.split(" ").map(parseFloat);
      return f.length < 2 && f.push(0), f;
    }
    return typeof l.offset == "number" ? [l.offset, 0] : [0, 0];
  });
  let c = !1;
  const p = new ResizeObserver(() => {
    c && v();
  });
  function v() {
    if (c = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => c = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const f = e.activatorEl.value.getBoundingClientRect(), h = function(B, b) {
      const P = ql(B);
      return b ? P.x += parseFloat(B.style.right || 0) : P.x -= parseFloat(B.style.left || 0), P.y -= parseFloat(B.style.top || 0), P;
    }(e.contentEl.value, e.isRtl.value), w = Zt(e.contentEl.value);
    w.length || (w.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const m = w.reduce((B, b) => {
      const P = b.getBoundingClientRect(), O = new dt({ x: b === document.documentElement ? 0 : P.x, y: b === document.documentElement ? 0 : P.y, width: b.clientWidth, height: b.clientHeight });
      return B ? new dt({ x: Math.max(B.left, O.left), y: Math.max(B.top, O.top), width: Math.min(B.right, O.right) - Math.max(B.left, O.left), height: Math.min(B.bottom, O.bottom) - Math.max(B.top, O.top) }) : O;
    }, void 0);
    m.x += 12, m.y += 12, m.width -= 24, m.height -= 24;
    let x = { anchor: n.value, origin: o.value };
    function _(B) {
      const b = new dt(h), P = Pn(B.anchor, f), O = Pn(B.origin, b);
      let { x: A, y: V } = (L = O, { x: (I = P).x - L.x, y: I.y - L.y });
      var I, L;
      switch (B.anchor.side) {
        case "top":
          V -= u.value[0];
          break;
        case "bottom":
          V += u.value[0];
          break;
        case "left":
          A -= u.value[0];
          break;
        case "right":
          A += u.value[0];
      }
      switch (B.anchor.align) {
        case "top":
          V -= u.value[1];
          break;
        case "bottom":
          V += u.value[1];
          break;
        case "left":
          A -= u.value[1];
          break;
        case "right":
          A += u.value[1];
      }
      return b.x += A, b.y += V, b.width = Math.min(b.width, s.value), b.height = Math.min(b.height, i.value), { overflows: xn(b, m), x: A, y: V };
    }
    let g = 0, C = 0;
    const k = { x: 0, y: 0 }, E = { x: !1, y: !1 };
    let $ = -1;
    for (; ; ) {
      if ($++ > 10) {
        ul("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: B, y: b, overflows: P } = _(x);
      g += B, C += b, h.x += B, h.y += b;
      {
        const O = wn(x.anchor), A = P.x.before || P.x.after, V = P.y.before || P.y.after;
        let I = !1;
        if (["x", "y"].forEach((L) => {
          if (L === "x" && A && !E.x || L === "y" && V && !E.y) {
            const N = { anchor: { ...x.anchor }, origin: { ...x.origin } }, T = L === "x" ? O === "y" ? Sl : bl : O === "y" ? bl : Sl;
            N.anchor = T(N.anchor), N.origin = T(N.origin);
            const { overflows: G } = _(N);
            (G[L].before <= P[L].before && G[L].after <= P[L].after || G[L].before + G[L].after < (P[L].before + P[L].after) / 2) && (x = N, I = E[L] = !0);
          }
        }), I)
          continue;
      }
      P.x.before && (g += P.x.before, h.x += P.x.before), P.x.after && (g -= P.x.after, h.x -= P.x.after), P.y.before && (C += P.y.before, h.y += P.y.before), P.y.after && (C -= P.y.after, h.y -= P.y.after);
      {
        const O = xn(h, m);
        k.x = m.width - O.x.before - O.x.after, k.y = m.height - O.y.before - O.y.after, g += O.x.before, h.x += O.x.before, C += O.y.before, h.y += O.y.before;
      }
      break;
    }
    const F = wn(x.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: X(xl(C)), left: e.isRtl.value ? void 0 : X(xl(g)), right: e.isRtl.value ? X(xl(-g)) : void 0, minWidth: X(F === "y" ? Math.min(a.value, f.width) : a.value), maxWidth: X(_n(wt(k.x, a.value === 1 / 0 ? 0 : a.value, s.value))), maxHeight: X(_n(wt(k.y, r.value === 1 / 0 ? 0 : r.value, i.value))) }), { available: k, contentBox: h };
  }
  return J([e.activatorEl, e.contentEl], (f, h) => {
    let [w, m] = f, [x, _] = h;
    x && p.unobserve(x), w && p.observe(w), _ && p.unobserve(_), m && p.observe(m);
  }, { immediate: !0 }), _e(() => {
    p.disconnect();
  }), J(() => [n.value, o.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => v()), Ee(() => {
    const f = v();
    if (!f)
      return;
    const { available: h, contentBox: w } = f;
    w.height > h.y && requestAnimationFrame(() => {
      v(), requestAnimationFrame(() => {
        v();
      });
    });
  }), { updateLocation: v };
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
const Kt = { none: null, close: function(e) {
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
      const c = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), p = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -c, i.scrollTop = -p;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, t) {
  let n = !1, o = -1, a = -1;
  function r(s) {
    var i;
    i = () => {
      var p, v;
      const u = performance.now();
      (v = (p = e.updateLocation).value) == null || v.call(p, s), n = (performance.now() - u) / (1e3 / 60) > 2;
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
} }, Br = M({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Kt } }, "VOverlay-scroll-strategies");
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
  const o = K();
  let a = !1, r = !1, s = !0;
  const i = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), u = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: c, runCloseDelay: p } = function($, F) {
    const B = {}, b = (P) => () => {
      if (!Ie)
        return Promise.resolve(!0);
      const O = P === "openDelay";
      return B.closeDelay && window.clearTimeout(B.closeDelay), delete B.closeDelay, B.openDelay && window.clearTimeout(B.openDelay), delete B.openDelay, new Promise((A) => {
        const V = parseInt($[P] ?? 0, 10);
        B[P] = window.setTimeout(() => {
          F == null || F(O), A(O);
        }, V);
      });
    };
    return { runCloseDelay: b("closeDelay"), runOpenDelay: b("openDelay") };
  }(e, ($) => {
    $ !== (e.openOnHover && a || i.value && r) || e.openOnHover && t.value && !n.value || (t.value !== $ && (s = !0), t.value = $);
  }), v = ($) => {
    $.stopPropagation(), o.value = $.currentTarget || $.target, t.value = !t.value;
  }, f = ($) => {
    var F;
    (F = $.sourceCapabilities) != null && F.firesTouchEvents || (a = !0, o.value = $.currentTarget || $.target, c());
  }, h = ($) => {
    a = !1, p();
  }, w = ($) => {
    El && !$.target.matches(":focus-visible") || (r = !0, $.stopPropagation(), o.value = $.currentTarget || $.target, c());
  }, m = ($) => {
    r = !1, $.stopPropagation(), p();
  }, x = y(() => {
    const $ = {};
    return u.value && ($.onClick = v), e.openOnHover && ($.onMouseenter = f, $.onMouseleave = h), i.value && ($.onFocus = w, $.onBlur = m), $;
  }), _ = y(() => {
    const $ = {};
    if (e.openOnHover && ($.onMouseenter = () => {
      a = !0, c();
    }, $.onMouseleave = () => {
      a = !1, p();
    }), i.value && ($.onFocusin = () => {
      r = !0, c();
    }, $.onFocusout = () => {
      r = !1, p();
    }), e.closeOnContentClick) {
      const F = ve(Dl, null);
      $.onClick = () => {
        t.value = !1, F == null || F.closeParents();
      };
    }
    return $;
  }), g = y(() => {
    const $ = {};
    return e.openOnHover && ($.onMouseenter = () => {
      s && (a = !0, s = !1, c());
    }, $.onMouseleave = () => {
      a = !1, p();
    }), $;
  });
  J(n, ($) => {
    !$ || (!e.openOnHover || a || i.value && r) && (!i.value || r || e.openOnHover && a) || (t.value = !1);
  });
  const C = K();
  qe(() => {
    C.value && Ee(() => {
      o.value = Al(C.value);
    });
  });
  const k = we("useActivator");
  let E;
  return J(() => !!e.activator, ($) => {
    $ && Ie ? (E = zl(), E.run(() => {
      (function(F, B, b) {
        let { activatorEl: P, activatorEvents: O } = b;
        function A() {
          let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I(), N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.activatorProps;
          L && function(T, G) {
            Object.keys(G).forEach((j) => {
              if ($l(j)) {
                const W = yn(j), D = jt.get(T);
                if (G[j] == null)
                  D == null || D.forEach((z) => {
                    const [R, U] = z;
                    R === W && (T.removeEventListener(W, U), D.delete(z));
                  });
                else if (!D || ![...D].some((z) => z[0] === W && z[1] === G[j])) {
                  T.addEventListener(W, G[j]);
                  const z = D || /* @__PURE__ */ new Set();
                  z.add([W, G[j]]), jt.has(T) || jt.set(T, z);
                }
              } else
                G[j] == null ? T.removeAttribute(j) : T.setAttribute(j, G[j]);
            });
          }(L, Z(O.value, N));
        }
        function V() {
          let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I(), N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.activatorProps;
          L && function(T, G) {
            Object.keys(G).forEach((j) => {
              if ($l(j)) {
                const W = yn(j), D = jt.get(T);
                D == null || D.forEach((z) => {
                  const [R, U] = z;
                  R === W && (T.removeEventListener(W, U), D.delete(z));
                });
              } else
                T.removeAttribute(j);
            });
          }(L, Z(O.value, N));
        }
        function I() {
          var T, G;
          let L, N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F.activator;
          if (N)
            if (N === "parent") {
              let j = (G = (T = B == null ? void 0 : B.proxy) == null ? void 0 : T.$el) == null ? void 0 : G.parentNode;
              for (; j.hasAttribute("data-no-activator"); )
                j = j.parentNode;
              L = j;
            } else
              L = typeof N == "string" ? document.querySelector(N) : "$el" in N ? N.$el : N;
          return P.value = (L == null ? void 0 : L.nodeType) === Node.ELEMENT_NODE ? L : null, P.value;
        }
        J(() => F.activator, (L, N) => {
          if (N && L !== N) {
            const T = I(N);
            T && V(T);
          }
          L && Ee(() => A());
        }, { immediate: !0 }), J(() => F.activatorProps, () => {
          A();
        }), _e(() => {
          V();
        });
      })(e, k, { activatorEl: o, activatorEvents: x });
    })) : E && E.stop();
  }, { flush: "post", immediate: !0 }), _e(() => {
    E == null || E.stop();
  }), { activatorEl: o, activatorRef: C, activatorEvents: x, contentEvents: _, scrimEvents: g };
}
function Ql(e) {
  return Ul(() => {
    const l = [], t = {};
    return e.value.background && (kn(e.value.background) ? t.backgroundColor = e.value.background : l.push(`bg-${e.value.background}`)), e.value.text && (kn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: t };
  });
}
function je(e, l) {
  const t = y(() => ({ text: ze(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = Ql(t);
  return { textColorClasses: n, textColorStyles: o };
}
function vt(e, l) {
  const t = y(() => ({ background: ze(e) ? e.value : l ? e[l] : null })), { colorClasses: n, colorStyles: o } = Ql(t);
  return { backgroundColorClasses: n, backgroundColorStyles: o };
}
const Vt = M({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Et(e) {
  return { dimensionStyles: y(() => ({ height: X(e.height), maxHeight: X(e.maxHeight), maxWidth: X(e.maxWidth), minHeight: X(e.minHeight), minWidth: X(e.minWidth), width: X(e.width) })) };
}
const dl = ["sm", "md", "lg", "xl", "xxl"], Ar = Symbol.for("vuetify:display");
function $r() {
  if (!Ie)
    return ue(!1);
  const { ssr: e } = function() {
    const l = ve(Ar);
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
const Vr = M({ eager: Boolean }, "lazy");
function fe(e, l, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const a = we("useProxiedModel"), r = K(e[l] !== void 0 ? e[l] : t), s = tt(l), i = y(s !== l ? () => {
    var c, p, v, f;
    return e[l], !(!((c = a.vnode.props) != null && c.hasOwnProperty(l)) && !((p = a.vnode.props) != null && p.hasOwnProperty(s)) || !((v = a.vnode.props) != null && v.hasOwnProperty(`onUpdate:${l}`)) && !((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var c, p;
    return e[l], !(!((c = a.vnode.props) != null && c.hasOwnProperty(l)) || !((p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${l}`)));
  });
  lt(() => !i.value, () => {
    J(() => e[l], (c) => {
      r.value = c;
    });
  });
  const u = y({ get() {
    const c = e[l];
    return n(i.value ? c : r.value);
  }, set(c) {
    const p = o(c), v = Ue(i.value ? e[l] : r.value);
    v !== p && n(v) !== c && (r.value = p, a == null || a.emit(`update:${l}`, p));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => i.value ? e[l] : r.value }), u;
}
const ka = Symbol.for("vuetify:locale");
function yt() {
  const e = ve(ka);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function It() {
  const e = ve(ka);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function en(e, l) {
  const t = ia("RouterLink"), n = y(() => !(!e.href && !e.to)), o = y(() => (n == null ? void 0 : n.value) || hn(l, "click") || hn(e, "click"));
  if (typeof t == "string")
    return { isLink: n, isClickable: o, href: H(e, "href") };
  const a = e.to ? t.useLink(e) : void 0;
  return { isLink: n, isClickable: o, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && y(() => {
    var r, s;
    return e.exact ? (r = a.isExactActive) == null ? void 0 : r.value : (s = a.isActive) == null ? void 0 : s.value;
  }), href: y(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const tn = M({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let kl = !1;
function Ca() {
  const e = we("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const $n = Symbol.for("vuetify:stack"), bt = Pt([]), Vn = Symbol.for("vuetify:theme"), be = M({ theme: String }, "theme");
function Ce(e) {
  we("provideTheme");
  const l = ve(Vn, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? (l == null ? void 0 : l.name.value)), n = y(() => l.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...l, name: t, themeClasses: n };
  return ge(Vn, o), o;
}
const Ot = M({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ke = (e, l) => {
  let { slots: t } = l;
  const { transition: n, disabled: o, ...a } = e, { component: r = nt, ...s } = typeof n == "object" ? n : {};
  return mt(r, Z(typeof n == "string" ? { name: o ? "" : n } : s, a, { disabled: o }), t);
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
  return d(nt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", Z({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, n), null)] });
}
const Pa = M({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [String, Boolean], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ..._r(), ...se(), ...Vt(), ...Vr(), ...Cr(), ...Br(), ...be(), ...Ot() }, "VOverlay"), On = q()({ name: "VOverlay", directives: { ClickOutside: Ir }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Pa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var j, W;
  let { slots: t, attrs: n, emit: o } = l;
  const a = fe(e, "modelValue"), r = y({ get: () => a.value, set: (D) => {
    D && e.disabled || (a.value = D);
  } }), { teleportTarget: s } = (i = y(() => e.attach || e.contained), { teleportTarget: y(() => {
    const D = i.value;
    if (D === !0 || !Ie)
      return;
    const z = D === !1 ? document.body : typeof D == "string" ? document.querySelector(D) : D;
    if (z == null)
      return void ul(`Unable to locate target ${D}`);
    let R = z.querySelector(":scope > .v-overlay-container");
    return R || (R = document.createElement("div"), R.className = "v-overlay-container", z.appendChild(R)), R;
  }) });
  var i;
  const { themeClasses: u } = Ce(e), { rtlClasses: c, isRtl: p } = It(), { hasContent: v, onAfterLeave: f } = function(D, z) {
    const R = ue(!1), U = y(() => R.value || D.eager || z.value);
    return J(z, () => R.value = !0), { isBooted: R, hasContent: U, onAfterLeave: function() {
      D.eager || (R.value = !1);
    } };
  }(e, r), h = vt(y(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: w, localTop: m, stackStyles: x } = function(D, z, R) {
    const U = we("useStack"), le = !R, ee = ve($n, void 0), Q = Pt({ activeChildren: /* @__PURE__ */ new Set() });
    ge($n, Q);
    const ce = ue(+z.value);
    lt(D, () => {
      var ht;
      const Me = (ht = bt.at(-1)) == null ? void 0 : ht[1];
      ce.value = Me ? Me + 10 : +z.value, le && bt.push([U.uid, ce.value]), ee == null || ee.activeChildren.add(U.uid), _e(() => {
        if (le) {
          const rr = Ue(bt).findIndex((sr) => sr[0] === U.uid);
          bt.splice(rr, 1);
        }
        ee == null || ee.activeChildren.delete(U.uid);
      });
    });
    const ke = ue(!0);
    le && qe(() => {
      var ht;
      const Me = ((ht = bt.at(-1)) == null ? void 0 : ht[0]) === U.uid;
      setTimeout(() => ke.value = Me);
    });
    const hl = y(() => !Q.activeChildren.size);
    return { globalTop: Gl(ke), localTop: hl, stackStyles: y(() => ({ zIndex: ce.value })) };
  }(r, H(e, "zIndex"), e._disableGlobalStack), { activatorEl: _, activatorRef: g, activatorEvents: C, contentEvents: k, scrimEvents: E } = Fr(e, { isActive: r, isTop: m }), { dimensionStyles: $ } = Et(e), F = $r(), { scopeId: B } = Ca();
  J(() => e.disabled, (D) => {
    D && (r.value = !1);
  });
  const b = K(), P = K(), { contentStyles: O, updateLocation: A } = function(D, z) {
    const R = K({}), U = K();
    function le(ee) {
      var Q;
      (Q = U.value) == null || Q.call(U, ee);
    }
    return Ie && (lt(() => !(!z.isActive.value || !D.locationStrategy), (ee) => {
      var Q, ce;
      J(() => D.locationStrategy, ee), _e(() => {
        U.value = void 0;
      }), typeof D.locationStrategy == "function" ? U.value = (Q = D.locationStrategy(z, D, R)) == null ? void 0 : Q.updateLocation : U.value = (ce = xa[D.locationStrategy](z, D, R)) == null ? void 0 : ce.updateLocation;
    }), window.addEventListener("resize", le, { passive: !0 }), _e(() => {
      window.removeEventListener("resize", le), U.value = void 0;
    })), { contentStyles: R, updateLocation: U };
  }(e, { isRtl: p, contentEl: P, activatorEl: _, isActive: r });
  function V(D) {
    o("click:outside", D), e.persistent ? G() : r.value = !1;
  }
  function I() {
    return r.value && w.value;
  }
  function L(D) {
    var z, R;
    D.key === "Escape" && w.value && (e.persistent ? G() : (r.value = !1, (z = P.value) != null && z.contains(document.activeElement) && ((R = _.value) == null || R.focus())));
  }
  (function(D, z) {
    if (!Ie)
      return;
    let R;
    qe(async () => {
      R == null || R.stop(), z.isActive.value && D.scrollStrategy && (R = zl(), await Ee(), R.active && R.run(() => {
        var U;
        typeof D.scrollStrategy == "function" ? D.scrollStrategy(z, D, R) : (U = Kt[D.scrollStrategy]) == null || U.call(Kt, z, D, R);
      }));
    }), _e(() => {
      R == null || R.stop();
    });
  })(e, { root: b, contentEl: P, activatorEl: _, isActive: r, updateLocation: A }), Ie && J(r, (D) => {
    D ? window.addEventListener("keydown", L) : window.removeEventListener("keydown", L);
  }, { immediate: !0 });
  const N = (W = (j = we("useRouter")) == null ? void 0 : j.proxy) == null ? void 0 : W.$router;
  lt(() => e.closeOnBack, () => {
    (function(D, z) {
      let R, U, le = !1;
      function ee(Q) {
        var ce;
        (ce = Q.state) != null && ce.replaced || (le = !0, setTimeout(() => le = !1));
      }
      Ie && (Ee(() => {
        window.addEventListener("popstate", ee), R = D == null ? void 0 : D.beforeEach((Q, ce, ke) => {
          kl ? le ? z(ke) : ke() : setTimeout(() => le ? z(ke) : ke()), kl = !0;
        }), U = D == null ? void 0 : D.afterEach(() => {
          kl = !1;
        });
      }), _e(() => {
        window.removeEventListener("popstate", ee), R == null || R(), U == null || U();
      }));
    })(N, (D) => {
      w.value && r.value ? (D(!1), e.persistent ? G() : r.value = !1) : D();
    });
  });
  const T = K();
  function G() {
    e.noClickAnimation || P.value && it(P.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Jt });
  }
  return J(() => r.value && (e.absolute || e.contained) && s.value == null, (D) => {
    if (D) {
      const z = function(R) {
        for (; R; ) {
          if (Jl(R))
            return R;
          R = R.parentElement;
        }
        return document.scrollingElement;
      }(b.value);
      z && z !== document.scrollingElement && (T.value = z.scrollTop);
    }
  }), te(() => {
    var D;
    return d(re, null, [(D = t.activator) == null ? void 0 : D.call(t, { isActive: r.value, props: Z({ ref: g }, C.value, e.activatorProps) }), F.value && d(cr, { disabled: !s.value, to: s.value }, { default: () => [v.value && d("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": r.value, "v-overlay--contained": e.contained }, u.value, c.value, e.class], style: [x.value, { top: X(T.value) }, e.style], ref: b }, B, n), [d(Or, Z({ color: h, modelValue: r.value && !!e.scrim }, E.value), null), d(Ke, { appear: !0, persisted: !0, transition: e.transition, target: _.value, onAfterLeave: () => {
      f(), o("afterLeave");
    } }, { default: () => {
      var z;
      return [Ae(d("div", Z({ ref: P, class: ["v-overlay__content", e.contentClass], style: [$.value, O.value] }, k.value, e.contentProps), [(z = t.default) == null ? void 0 : z.call(t, { isActive: r })]), [[gt, r.value], [Ye("click-outside"), { handler: V, closeConditional: I, include: () => [_.value] }]])];
    } })])] })]);
  }), { activatorEl: _, animateClick: G, contentEl: P, globalTop: w, localTop: m, updateLocation: A };
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
        const c = u.slice();
        for (; c.length; ) {
          const p = c.shift(), v = Bl(p.value, a);
          if (v)
            return v;
          const f = p.value && p.value[Cl];
          f && c.push(...f);
        }
      }
    }
  } });
}
const Dr = (e, l, t) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), Tr = M({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function Lr(e, l, t, n) {
  const o = y(() => typeof (t == null ? void 0 : t.value) != "string" && typeof (t == null ? void 0 : t.value) != "number" ? "" : String(t.value)), a = K([]), r = K(/* @__PURE__ */ new Map()), s = y(() => n != null && n.transform ? S(l).map(n == null ? void 0 : n.transform) : S(l));
  return qe(() => {
    a.value = [], r.value = /* @__PURE__ */ new Map();
    const i = function(c, p, v) {
      var x;
      const f = [], h = (v == null ? void 0 : v.default) ?? Dr, w = !!(v != null && v.filterKeys) && Oe(v.filterKeys), m = Object.keys((v == null ? void 0 : v.customKeyFilter) ?? {}).length;
      if (!(c != null && c.length))
        return f;
      e:
        for (let _ = 0; _ < c.length; _++) {
          const g = c[_], C = {}, k = {};
          let E = -1;
          if (p && !(v != null && v.noFilter)) {
            if (typeof g == "object") {
              const B = w || Object.keys(g);
              for (const b of B) {
                const P = Se(g, b, g), O = (x = v == null ? void 0 : v.customKeyFilter) == null ? void 0 : x[b];
                if (E = O ? O(P, p, g) : h(P, p, g), E !== -1 && E !== !1)
                  O ? C[b] = E : k[b] = E;
                else if ((v == null ? void 0 : v.filterMode) === "every")
                  continue e;
              }
            } else
              E = h(g, p, g), E !== -1 && E !== !1 && (k.title = E);
            const $ = Object.keys(k).length, F = Object.keys(C).length;
            if (!$ && !F || (v == null ? void 0 : v.filterMode) === "union" && F !== m && !$ || (v == null ? void 0 : v.filterMode) === "intersection" && (F !== m || !$))
              continue;
          }
          f.push({ index: _, matches: { ...k, ...C } });
        }
      return f;
    }(s.value, o.value, { customKeyFilter: e.customKeyFilter, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), u = S(l);
    i.forEach((c) => {
      let { index: p, matches: v } = c;
      const f = u[p];
      a.value.push(f), r.value.set(f.value, v);
    });
  }), { filteredItems: a, filteredMatches: r, getMatches: function(i) {
    return r.value.get(i.value);
  } };
}
const xe = M({ tag: { type: String, default: "div" } }, "tag"), Mr = M({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), _a = Symbol.for("vuetify:datatable:expanded");
function Fa(e) {
  const l = H(e, "expandOnClick"), t = fe(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
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
  const e = ve(_a);
  if (!e)
    throw new Error("foo");
  return e;
}
const Nr = M({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), $a = Symbol.for("vuetify:data-table-group");
function Va(e) {
  return { groupBy: fe(e, "groupBy") };
}
function Ea(e) {
  const { groupBy: l, sortBy: t } = e, n = K(/* @__PURE__ */ new Set());
  function o(r) {
    return n.value.has(r.id);
  }
  const a = { sortByWithGroups: y(() => l.value.map((r) => ({ ...r, order: r.order ?? !1 })).concat(t.value)), toggleGroup: function(r) {
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
  return ge($a, a), a;
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
      const p = qt(c.raw, i);
      u.has(p) || u.set(p, []), u.get(p).push(c);
    }
    return u;
  }(e, l[0]), a = [], r = l.slice(1);
  return o.forEach((s, i) => {
    const u = l[0], c = `${n}_${u}_${i}`;
    a.push({ depth: t, id: c, key: u, value: i, items: r.length ? Oa(s, r, t + 1, c) : s, type: "group" });
  }), a;
}
function Da(e, l) {
  const t = [];
  for (const n of e)
    "type" in n && n.type === "group" ? (n.value != null && t.push(n), (l.has(n.id) || n.value == null) && t.push(...Da(n.items, l))) : t.push(n);
  return t;
}
function Ta(e, l, t) {
  return { flatItems: y(() => l.value.length ? Da(Oa(e.value, l.value.map((n) => n.key)), t.value) : e.value) };
}
function La(e) {
  let { page: l, itemsPerPage: t, sortBy: n, groupBy: o, search: a } = e;
  const r = we("VDataTable"), s = y(() => ({ page: l.value, itemsPerPage: t.value, sortBy: n.value, groupBy: o.value, search: a.value }));
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
  return { page: fe(e, "page", void 0, (l) => +(l ?? 1)), itemsPerPage: fe(e, "itemsPerPage", void 0, (l) => +(l ?? 10)) };
}
function ja(e) {
  const { page: l, itemsPerPage: t, itemsLength: n } = e, o = y(() => t.value === -1 ? 0 : t.value * (l.value - 1)), a = y(() => t.value === -1 ? n.value : Math.min(n.value, o.value + t.value)), r = y(() => t.value === -1 || n.value === 0 ? 1 : Math.ceil(n.value / t.value));
  qe(() => {
    l.value > r.value && (l.value = r.value);
  });
  const s = { page: l, itemsPerPage: t, startIndex: o, stopIndex: a, pageCount: r, itemsLength: n, nextPage: function() {
    l.value = wt(l.value + 1, 1, r.value);
  }, prevPage: function() {
    l.value = wt(l.value - 1, 1, r.value);
  }, setPage: function(i) {
    l.value = wt(i, 1, r.value);
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
} }, jr = M({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] } }, "DataTable-select"), Ha = Symbol.for("vuetify:data-table-selection");
function Wa(e, l) {
  let { allItems: t, currentPage: n } = l;
  const o = fe(e, "modelValue", e.modelValue, (f) => new Set(f), (f) => [...f.values()]), a = y(() => t.value.filter((f) => f.selectable)), r = y(() => n.value.filter((f) => f.selectable)), s = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Rr;
      case "all":
        return Ga;
      default:
        return za;
    }
  });
  function i(f) {
    return Oe(f).every((h) => o.value.has(h.value));
  }
  function u(f, h) {
    const w = s.value.select({ items: f, value: h, selected: new Set(o.value) });
    o.value = w;
  }
  const c = y(() => o.value.size > 0), p = y(() => i(s.value.allSelected({ allItems: a.value, currentPage: r.value }))), v = { toggleSelect: function(f) {
    u([f], !i([f]));
  }, select: u, selectAll: function(f) {
    const h = s.value.selectAll({ value: f, allItems: a.value, currentPage: r.value, selected: new Set(o.value) });
    o.value = h;
  }, isSelected: i, isSomeSelected: function(f) {
    return Oe(f).some((h) => o.value.has(h.value));
  }, someSelected: c, allSelected: p, showSelectAll: s.value.showSelectAll };
  return ge(Ha, v), v;
}
function pl() {
  const e = ve(Ha);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const zr = M({ sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: Boolean, mustSort: Boolean }, "DataTable-sort"), Ka = Symbol.for("vuetify:data-table-sort");
function Ua(e) {
  return { sortBy: fe(e, "sortBy"), mustSort: H(e, "mustSort"), multiSort: H(e, "multiSort") };
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
function Gr(e, l, t) {
  const n = yt();
  return { sortedItems: y(() => t.value.length ? function(a, r, s, i) {
    const u = new Intl.Collator(s, { sensitivity: "accent", usage: "sort" });
    return [...a].sort((c, p) => {
      for (let v = 0; v < r.length; v++) {
        const f = r[v].key, h = r[v].order ?? "asc";
        if (h === !1)
          continue;
        let w = qt(c.raw, f), m = qt(p.raw, f);
        if (h === "desc" && ([w, m] = [m, w]), i == null ? void 0 : i[f]) {
          const x = i[f](w, m);
          if (!x)
            continue;
          return x;
        }
        if (w instanceof Date && m instanceof Date)
          return w.getTime() - m.getTime();
        if ([w, m] = [w, m].map((x) => x != null ? x.toString().toLocaleLowerCase() : x), w !== m)
          return isNaN(w) || isNaN(m) ? u.compare(w, m) : Number(w) - Number(m);
      }
      return 0;
    });
  }(l.value, t.value, n.current.value, e.customKeySort) : l.value) };
}
const Dt = M({ border: [Boolean, Number, String] }, "border");
function Tt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { borderClasses: y(() => {
    const t = ze(e) ? e.value : e.border, n = [];
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
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { densityClasses: y(() => `${l}--density-${e.density}`) };
}
const Lt = M({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Mt(e) {
  return { elevationClasses: y(() => {
    const l = ze(e) ? e.value : e.elevation, t = [];
    return l == null || t.push(`elevation-${l}`), t;
  }) };
}
const Ze = M({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Qe(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { roundedClasses: y(() => {
    const t = ze(e) ? e.value : e.rounded, n = [];
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
  return d(re, null, [e && d("span", { key: "overlay", class: `${l}__overlay` }, null), d("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const rt = M({ color: String, variant: { type: String, default: "elevated", validator: (e) => Wr.includes(e) } }, "variant");
function fl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  const t = y(() => {
    const { variant: a } = S(e);
    return `${l}--variant-${a}`;
  }), { colorClasses: n, colorStyles: o } = Ql(y(() => {
    const { variant: a, color: r } = S(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: r };
  }));
  return { colorClasses: n, colorStyles: o, variantClasses: t };
}
const Ya = M({ divided: Boolean, ...Dt(), ...se(), ...He(), ...Lt(), ...Ze(), ...xe(), ...be(), ...rt() }, "VBtnGroup"), Dn = q()({ name: "VBtnGroup", props: Ya(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { densityClasses: o } = We(e), { borderClasses: a } = Tt(e), { elevationClasses: r } = Mt(e), { roundedClasses: s } = Qe(e);
  Je({ VBtn: { height: "auto", color: H(e, "color"), density: H(e, "density"), flat: !0, variant: H(e, "variant") } }), te(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, n.value, a.value, o.value, r.value, s.value, e.class], style: e.style }, t));
} }), Xa = M({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Ja = M({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Za(e, l) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const n = we("useGroupItem");
  if (!n)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = Le();
  ge(Symbol.for(`${l.description}:id`), o);
  const a = ve(l, null);
  if (!a) {
    if (!t)
      return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const r = H(e, "value"), s = y(() => a.disabled.value || e.disabled);
  a.register({ id: o, value: r, disabled: s }, n), at(() => {
    a.unregister(o);
  });
  const i = y(() => a.isSelected(o)), u = y(() => i.value && [a.selectedClass.value, e.selectedClass]);
  return J(i, (c) => {
    n.emit("group:selected", { value: c });
  }), { id: o, isSelected: i, toggle: () => a.select(o, !i.value), select: (c) => a.select(o, c), selectedClass: u, value: r, disabled: s, group: a };
}
function Qa(e, l) {
  let t = !1;
  const n = Pt([]), o = fe(e, "modelValue", [], (u) => u == null ? [] : Tn(n, Oe(u)), (u) => {
    const c = function(p, v) {
      const f = [];
      return v.forEach((h) => {
        const w = p.findIndex((m) => m.id === h);
        if (~w) {
          const m = p[w];
          f.push(m.value != null ? m.value : w);
        }
      }), f;
    }(n, u);
    return e.multiple ? c : c[0];
  }), a = we("useGroup");
  function r() {
    const u = n.find((c) => !c.disabled);
    u && e.mandatory === "force" && !o.value.length && (o.value = [u.id]);
  }
  function s(u) {
    if (e.multiple && va('This method is not supported when using "multiple" prop'), o.value.length) {
      const c = o.value[0], p = n.findIndex((h) => h.id === c);
      let v = (p + u) % n.length, f = n[v];
      for (; f.disabled && v !== p; )
        v = (v + u) % n.length, f = n[v];
      if (f.disabled)
        return;
      o.value = [n[v].id];
    } else {
      const c = n.find((p) => !p.disabled);
      c && (o.value = [c.id]);
    }
  }
  Ft(() => {
    r();
  }), at(() => {
    t = !0;
  });
  const i = { register: function(u, c) {
    const p = u, v = Ht(Symbol.for(`${l.description}:id`), a == null ? void 0 : a.vnode).indexOf(c);
    v > -1 ? n.splice(v, 0, p) : n.push(p);
  }, unregister: function(u) {
    if (t)
      return;
    r();
    const c = n.findIndex((p) => p.id === u);
    n.splice(c, 1);
  }, selected: o, select: function(u, c) {
    const p = n.find((v) => v.id === u);
    if (!c || !(p != null && p.disabled))
      if (e.multiple) {
        const v = o.value.slice(), f = v.findIndex((w) => w === u), h = ~f;
        if (c = c ?? !h, h && e.mandatory && v.length <= 1 || !h && e.max != null && v.length + 1 > e.max)
          return;
        f < 0 && c ? v.push(u) : f >= 0 && !c && v.splice(f, 1), o.value = v;
      } else {
        const v = o.value.includes(u);
        if (e.mandatory && v)
          return;
        o.value = c ?? !v ? [u] : [];
      }
  }, disabled: H(e, "disabled"), prev: () => s(n.length - 1), next: () => s(1), isSelected: (u) => o.value.includes(u), selectedClass: y(() => e.selectedClass), items: y(() => n), getItemIndex: (u) => function(c, p) {
    const v = Tn(c, [p]);
    return v.length ? c.findIndex((f) => f.id === v[0]) : -1;
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
    return d(Dn, Z({ class: ["v-btn-toggle", e.class] }, i, { style: e.style }), { default: () => {
      var u;
      return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: n, next: o, prev: a, select: r, selected: s })];
    } });
  }), { next: o, prev: a, select: r };
} });
const pe = [String, Function, Object, Array], Ur = Symbol.for("vuetify:icons"), el = M({ icon: { type: pe }, tag: { type: String, required: !0 } }, "icon"), Ln = q()({ name: "VComponentIcon", props: el(), setup(e, l) {
  let { slots: t } = l;
  return () => {
    const n = e.icon;
    return d(e.tag, null, { default: () => {
      var o;
      return [e.icon ? d(n, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), qr = pt({ name: "VSvgIcon", inheritAttrs: !1, props: el(), setup(e, l) {
  let { attrs: t } = l;
  return () => d(e.tag, Z(t, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? d("path", { d: n[0], "fill-opacity": n[1] }, null) : d("path", { d: n }, null)) : d("path", { d: e.icon }, null)])] });
} });
pt({ name: "VLigatureIcon", props: el(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), pt({ name: "VClassIcon", props: el(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const Yr = ["x-small", "small", "default", "large", "x-large"], Nt = M({ size: { type: [String, Number], default: "default" } }, "size");
function Rt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return Ul(() => {
    let t, n;
    return Yt(Yr, e.size) ? t = `${l}--size-${e.size}` : e.size && (n = { width: X(e.size), height: X(e.size) }), { sizeClasses: t, sizeStyles: n };
  });
}
const Xr = M({ color: String, start: Boolean, end: Boolean, icon: pe, ...se(), ...Nt(), ...xe({ tag: "i" }), ...be() }, "VIcon"), he = q()({ name: "VIcon", props: Xr(), setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = K(), { themeClasses: a } = Ce(e), { iconData: r } = ((c) => {
    const p = ve(Ur);
    if (!p)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: y(() => {
      var m;
      const v = S(c);
      if (!v)
        return { component: Ln };
      let f = v;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (m = p.aliases) == null ? void 0 : m[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${v}"`);
      if (Array.isArray(f))
        return { component: qr, icon: f };
      if (typeof f != "string")
        return { component: Ln, icon: f };
      const h = Object.keys(p.sets).find((x) => typeof f == "string" && f.startsWith(`${x}:`)), w = h ? f.slice(h.length + 1) : f;
      return { component: p.sets[h ?? p.defaultSet].component, icon: w };
    }) };
  })(y(() => o.value || e.icon)), { sizeClasses: s } = Rt(e), { textColorClasses: i, textColorStyles: u } = je(H(e, "color"));
  return te(() => {
    var p, v;
    const c = (p = n.default) == null ? void 0 : p.call(n);
    return c && (o.value = (v = da(c).filter((f) => f.type === dr && f.children && typeof f.children == "string")[0]) == null ? void 0 : v.children), d(r.value.component, { tag: e.tag, icon: r.value.icon, class: ["v-icon", "notranslate", a.value, s.value, i.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: X(e.size), height: X(e.size), width: X(e.size) }, u.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [c] });
  }), {};
} });
function to(e, l) {
  const t = K(), n = ue(!1);
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
const Jr = M({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...Nt(), ...xe({ tag: "div" }), ...be() }, "VProgressCircular"), lo = q()({ name: "VProgressCircular", props: Jr(), setup(e, l) {
  let { slots: t } = l;
  const n = 2 * Math.PI * 20, o = K(), { themeClasses: a } = Ce(e), { sizeClasses: r, sizeStyles: s } = Rt(e), { textColorClasses: i, textColorStyles: u } = je(H(e, "color")), { textColorClasses: c, textColorStyles: p } = je(H(e, "bgColor")), { intersectionRef: v, isIntersecting: f } = to(), { resizeRef: h, contentRect: w } = function(E) {
    const $ = K(), F = K();
    if (Ie) {
      const B = new ResizeObserver((b) => {
        E == null || E(b, B), b.length && (F.value = b[0].contentRect);
      });
      at(() => {
        B.disconnect();
      }), J($, (b, P) => {
        P && (B.unobserve(Al(P)), F.value = void 0), b && B.observe(Al(b));
      }, { flush: "post" });
    }
    return { resizeRef: $, contentRect: Gl(F) };
  }(), m = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = y(() => Number(e.width)), _ = y(() => s.value ? Number(e.size) : w.value ? w.value.width : Math.max(x.value, 32)), g = y(() => 20 / (1 - x.value / _.value) * 2), C = y(() => x.value / _.value * g.value), k = y(() => X((100 - m.value) / 100 * n));
  return qe(() => {
    v.value = o.value, h.value = o.value;
  }), te(() => d(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": f.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, r.value, i.value, e.class], style: [s.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : m.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${g.value} ${g.value}` }, [d("circle", { class: ["v-progress-circular__underlay", c.value], style: p.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": C.value, "stroke-dasharray": n, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": C.value, "stroke-dasharray": n, "stroke-dashoffset": k.value }, null)]), t.default && d("div", { class: "v-progress-circular__content" }, [t.default({ value: m.value })])] })), {};
} }), Mn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, no = M({ location: String }, "location");
function ao(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: n } = It();
  return { locationStyles: y(() => {
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
const Zr = M({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...no({ location: "top" }), ...Ze(), ...xe(), ...be() }, "VProgressLinear"), oo = q()({ name: "VProgressLinear", props: Zr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { isRtl: o, rtlClasses: a } = It(), { themeClasses: r } = Ce(e), { locationStyles: s } = ao(e), { textColorClasses: i, textColorStyles: u } = je(e, "color"), { backgroundColorClasses: c, backgroundColorStyles: p } = vt(y(() => e.bgColor || e.color)), { backgroundColorClasses: v, backgroundColorStyles: f } = vt(e, "color"), { roundedClasses: h } = Qe(e), { intersectionRef: w, isIntersecting: m } = to(), x = y(() => parseInt(e.max, 10)), _ = y(() => parseInt(e.height, 10)), g = y(() => parseFloat(e.bufferValue) / x.value * 100), C = y(() => parseFloat(n.value) / x.value * 100), k = y(() => o.value !== e.reverse), E = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), $ = y(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function F(B) {
    if (!w.value)
      return;
    const { left: b, right: P, width: O } = w.value.getBoundingClientRect(), A = k.value ? O - B.clientX + (P - O) : B.clientX - b;
    n.value = Math.round(A / O * x.value);
  }
  return te(() => d(e.tag, { ref: w, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && m.value, "v-progress-linear--reverse": k.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, h.value, r.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? X(_.value) : 0, "--v-progress-linear-height": X(_.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : C.value, onClick: e.clickable && F }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...u.value, [k.value ? "left" : "right"]: X(-_.value), borderTop: `${X(_.value / 2)} dotted`, opacity: $.value, top: `calc(50% - ${X(_.value / 4)})`, width: X(100 - g.value, "%"), "--v-progress-linear-stream-to": X(_.value * (k.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", c.value], style: [p.value, { opacity: $.value, width: X(e.stream ? g.value : 100, "%") }] }, null), d(nt, { name: E.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((B) => d("div", { key: B, class: ["v-progress-linear__indeterminate", B, v.value], style: f.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", v.value], style: [f.value, { width: X(C.value, "%") }] }, null)] }), t.default && d("div", { class: "v-progress-linear__content" }, [t.default({ value: C.value, buffer: g.value })])] })), {};
} }), nn = M({ loading: [Boolean, String] }, "loader");
function an(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { loaderClasses: y(() => ({ [`${l}--loading`]: e.loading })) };
}
function ro(e, l) {
  var n;
  let { slots: t } = l;
  return d("div", { class: `${e.name}__loader` }, [((n = t.default) == null ? void 0 : n.call(t, { color: e.color, isActive: e.active })) || d(oo, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
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
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((f = l == null ? void 0 : l._ripple) != null && f.enabled))
    return;
  const n = document.createElement("span"), o = document.createElement("span");
  n.appendChild(o), n.className = "v-ripple__container", t.class && (n.className += ` ${t.class}`);
  const { radius: a, scale: r, x: s, y: i, centerX: u, centerY: c } = function(h, w) {
    var $;
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = 0, _ = 0;
    if (!so(h)) {
      const F = w.getBoundingClientRect(), B = Ll(h) ? h.touches[h.touches.length - 1] : h;
      x = B.clientX - F.left, _ = B.clientY - F.top;
    }
    let g = 0, C = 0.3;
    ($ = w._ripple) != null && $.circle ? (C = 0.15, g = w.clientWidth / 2, g = m.center ? g : g + Math.sqrt((x - g) ** 2 + (_ - g) ** 2) / 4) : g = Math.sqrt(w.clientWidth ** 2 + w.clientHeight ** 2) / 2;
    const k = (w.clientWidth - 2 * g) / 2 + "px", E = (w.clientHeight - 2 * g) / 2 + "px";
    return { radius: g, scale: C, x: m.center ? k : x - g + "px", y: m.center ? E : _ - g + "px", centerX: k, centerY: E };
  }(e, l, t), p = 2 * a + "px";
  o.className = "v-ripple__animation", o.style.width = p, o.style.height = p, l.appendChild(n);
  const v = window.getComputedStyle(l);
  v && v.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Nn(o, `translate(${s}, ${i}) scale3d(${r},${r},${r})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
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
function io(e) {
  return e === void 0 || !!e;
}
function kt(e) {
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
let Ct = !1;
function co(e) {
  Ct || e.keyCode !== gn.enter && e.keyCode !== gn.space || (Ct = !0, kt(e));
}
function po(e) {
  Ct = !1, Fe(e);
}
function vo(e) {
  Ct && (Ct = !1, Fe(e));
}
function jn(e, l, t) {
  const { value: n, modifiers: o } = l, a = io(n);
  if (a || tl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Fl(n) && n.class && (e._ripple.class = n.class), a && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", Rn, { passive: !0 }), void e.addEventListener("mousedown", Rn);
    e.addEventListener("touchstart", kt, { passive: !0 }), e.addEventListener("touchend", Fe, { passive: !0 }), e.addEventListener("touchmove", uo, { passive: !0 }), e.addEventListener("touchcancel", Fe), e.addEventListener("mousedown", kt), e.addEventListener("mouseup", Fe), e.addEventListener("mouseleave", Fe), e.addEventListener("keydown", co), e.addEventListener("keyup", po), e.addEventListener("blur", vo), e.addEventListener("dragstart", Fe, { passive: !0 });
  } else
    !a && t && fo(e);
}
function fo(e) {
  e.removeEventListener("mousedown", kt), e.removeEventListener("touchstart", kt), e.removeEventListener("touchend", Fe), e.removeEventListener("touchmove", uo), e.removeEventListener("touchcancel", Fe), e.removeEventListener("mouseup", Fe), e.removeEventListener("mouseleave", Fe), e.removeEventListener("keydown", co), e.removeEventListener("keyup", po), e.removeEventListener("dragstart", Fe), e.removeEventListener("blur", vo);
}
const ml = { mounted: function(e, l) {
  jn(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, fo(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && jn(e, l, io(l.oldValue));
} }, ls = M({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: eo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: pe, appendIcon: pe, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Dt(), ...se(), ...He(), ...Vt(), ...Lt(), ...Ja(), ...nn(), ...no(), ...es(), ...Ze(), ...tn(), ...Nt(), ...xe({ tag: "button" }), ...be(), ...rt({ variant: "elevated" }) }, "VBtn"), ut = q()({ name: "VBtn", directives: { Ripple: ml }, props: ls(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { themeClasses: o } = Ce(e), { borderClasses: a } = Tt(e), { colorClasses: r, colorStyles: s, variantClasses: i } = fl(e), { densityClasses: u } = We(e), { dimensionStyles: c } = Et(e), { elevationClasses: p } = Mt(e), { loaderClasses: v } = an(e), { locationStyles: f } = ao(e), { positionClasses: h } = function(B) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
    return { positionClasses: y(() => B.position ? `${b}--${B.position}` : void 0) };
  }(e), { roundedClasses: w } = Qe(e), { sizeClasses: m, sizeStyles: x } = Rt(e), _ = Za(e, e.symbol, !1), g = en(e, t), C = y(() => {
    var B;
    return e.active !== void 0 ? e.active : g.isLink.value ? (B = g.isActive) == null ? void 0 : B.value : _ == null ? void 0 : _.isSelected.value;
  }), k = y(() => (_ == null ? void 0 : _.disabled.value) || e.disabled), E = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), $ = y(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function F(B) {
    var b;
    k.value || ((b = g.navigate) == null || b.call(g, B), _ == null || _.toggle());
  }
  return function(B, b) {
    J(() => {
      var P;
      return (P = B.isActive) == null ? void 0 : P.value;
    }, (P) => {
      B.isLink.value && P && b && Ee(() => {
        b(!0);
      });
    }, { immediate: !0 });
  }(g, _ == null ? void 0 : _.select), te(() => {
    var V, I;
    const B = g.isLink.value ? "a" : e.tag, b = !(!e.prependIcon && !n.prepend), P = !(!e.appendIcon && !n.append), O = !(!e.icon || e.icon === !0), A = (_ == null ? void 0 : _.isSelected.value) && (!g.isLink.value || ((V = g.isActive) == null ? void 0 : V.value)) || !_ || ((I = g.isActive) == null ? void 0 : I.value);
    return Ae(d(B, { type: B === "a" ? void 0 : "button", class: ["v-btn", _ == null ? void 0 : _.selectedClass.value, { "v-btn--active": C.value, "v-btn--block": e.block, "v-btn--disabled": k.value, "v-btn--elevated": E.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, a.value, A ? r.value : void 0, u.value, p.value, v.value, h.value, w.value, m.value, i.value, e.class], style: [A ? s.value : void 0, c.value, f.value, x.value, e.style], disabled: k.value || void 0, href: g.href.value, onClick: F, value: $.value }, { default: () => {
      var L;
      return [vl(!0, "v-btn"), !e.icon && b && d("span", { key: "prepend", class: "v-btn__prepend" }, [n.prepend ? d(Ve, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, n.prepend) : d(he, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!n.default && O ? d(he, { key: "content-icon", icon: e.icon }, null) : d(Ve, { key: "content-defaults", disabled: !O, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var N;
        return [((N = n.default) == null ? void 0 : N.call(n)) ?? e.text];
      } })]), !e.icon && P && d("span", { key: "append", class: "v-btn__append" }, [n.append ? d(Ve, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, n.append) : d(he, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((L = n.loader) == null ? void 0 : L.call(n)) ?? d(lo, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Ye("ripple"), !k.value && e.ripple, null]]);
  }), {};
} }), ns = M({ text: String, clickable: Boolean, ...se(), ...be() }, "VLabel"), mo = q()({ name: "VLabel", props: ns(), setup(e, l) {
  let { slots: t } = l;
  return te(() => {
    var n;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (n = t.default) == null ? void 0 : n.call(t)]);
  }), {};
} }), go = Symbol.for("vuetify:selection-control-group"), yo = M({ color: String, disabled: Boolean, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: pe, trueIcon: pe, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: ot }, ...se(), ...He(), ...be() }, "SelectionControlGroup"), as = M({ ...yo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
q()({ name: "VSelectionControlGroup", props: as(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), o = Le(), a = y(() => e.id || `v-selection-control-group-${o}`), r = y(() => e.name || a.value), s = /* @__PURE__ */ new Set();
  return ge(go, { modelValue: n, forceUpdate: () => {
    s.forEach((i) => i());
  }, onForceUpdate: (i) => {
    s.add(i), _e(() => {
      s.delete(i);
    });
  } }), Je({ [e.defaultsTarget]: { color: H(e, "color"), disabled: H(e, "disabled"), density: H(e, "density"), error: H(e, "error"), inline: H(e, "inline"), modelValue: n, multiple: y(() => !!e.multiple || e.multiple == null && Array.isArray(n.value)), name: r, falseIcon: H(e, "falseIcon"), trueIcon: H(e, "trueIcon"), readonly: H(e, "readonly"), ripple: H(e, "ripple"), type: H(e, "type"), valueComparator: H(e, "valueComparator") } }), te(() => {
    var i;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(i = t.default) == null ? void 0 : i.call(t)]);
  }), {};
} });
const ho = M({ label: String, trueValue: null, falseValue: null, value: null, ...se(), ...yo() }, "VSelectionControl"), os = q()({ name: "VSelectionControl", directives: { Ripple: ml }, inheritAttrs: !1, props: ho(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const { group: o, densityClasses: a, icon: r, model: s, textColorClasses: i, textColorStyles: u, trueValue: c } = function(g) {
    const C = ve(go, void 0), { densityClasses: k } = We(g), E = fe(g, "modelValue"), $ = y(() => g.trueValue !== void 0 ? g.trueValue : g.value === void 0 || g.value), F = y(() => g.falseValue !== void 0 && g.falseValue), B = y(() => !!g.multiple || g.multiple == null && Array.isArray(E.value)), b = y({ get() {
      const V = C ? C.modelValue.value : E.value;
      return B.value ? V.some((I) => g.valueComparator(I, $.value)) : g.valueComparator(V, $.value);
    }, set(V) {
      if (g.readonly)
        return;
      const I = V ? $.value : F.value;
      let L = I;
      B.value && (L = V ? [...Oe(E.value), I] : Oe(E.value).filter((N) => !g.valueComparator(N, $.value))), C ? C.modelValue.value = L : E.value = L;
    } }), { textColorClasses: P, textColorStyles: O } = je(y(() => !b.value || g.error || g.disabled ? void 0 : g.color)), A = y(() => b.value ? g.trueIcon : g.falseIcon);
    return { group: C, densityClasses: k, trueValue: $, falseValue: F, model: b, textColorClasses: P, textColorStyles: O, icon: A };
  }(e), p = Le(), v = y(() => e.id || `input-${p}`), f = ue(!1), h = ue(!1), w = K();
  function m(g) {
    f.value = !0, (!El || El && g.target.matches(":focus-visible")) && (h.value = !0);
  }
  function x() {
    f.value = !1, h.value = !1;
  }
  function _(g) {
    e.readonly && o && Ee(() => o.forceUpdate()), s.value = g.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    w.value && (w.value.checked = s.value);
  }), te(() => {
    var E, $;
    const g = n.label ? n.label({ label: e.label, props: { for: v.value } }) : e.label, [C, k] = Kl(t);
    return d("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": f.value, "v-selection-control--focus-visible": h.value, "v-selection-control--inline": e.inline }, a.value, e.class] }, C, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", i.value], style: u.value }, [(E = n.default) == null ? void 0 : E.call(n), Ae(d("div", { class: ["v-selection-control__input"] }, [r.value && d(he, { key: "icon", icon: r.value }, null), d("input", Z({ ref: w, checked: s.value, disabled: e.disabled, id: v.value, onBlur: x, onFocus: m, onInput: _, "aria-disabled": e.readonly, type: e.type, value: c.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, k), null), ($ = n.input) == null ? void 0 : $.call(n, { model: s, textColorClasses: i, textColorStyles: u, props: { onFocus: m, onBlur: x, id: v.value } })]), [[Ye("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), g && d(mo, { for: v.value, clickable: !0 }, { default: () => [g] })]);
  }), { isFocused: f, input: w };
} }), bo = M({ indeterminate: Boolean, indeterminateIcon: { type: pe, default: "$checkboxIndeterminate" }, ...ho({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), ft = q()({ name: "VCheckboxBtn", props: bo(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "indeterminate"), o = fe(e, "modelValue");
  function a(i) {
    n.value && (n.value = !1);
  }
  const r = y(() => n.value ? e.indeterminateIcon : e.falseIcon), s = y(() => n.value ? e.indeterminateIcon : e.trueIcon);
  return te(() => d(os, Z(e, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, a], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: r.value, trueIcon: s.value, "aria-checked": n.value ? "mixed" : void 0 }), t)), {};
} });
function So(e) {
  const { t: l } = yt();
  return { InputIcon: function(t) {
    let { name: n } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[n], a = e[`onClick:${n}`], r = a && o ? l(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return d(he, { icon: e[`${n}Icon`], "aria-label": r, onClick: a }, null);
  } };
}
const rs = M({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...Ot({ transition: { component: Sa, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), ss = q()({ name: "VMessages", props: rs(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => Oe(e.messages)), { textColorClasses: o, textColorStyles: a } = je(y(() => e.color));
  return te(() => d(Ke, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && n.value.map((r, s) => d("div", { class: "v-messages__message", key: `${s}-${n.value}` }, [t.message ? t.message({ message: r }) : r]))] })), {};
} }), wo = M({ focused: Boolean, "onUpdate:focused": Te() }, "focus");
function on(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  const t = fe(e, "focused");
  return { focusClasses: y(() => ({ [`${l}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const is = Symbol.for("vuetify:form");
function xo() {
  return ve(is, null);
}
const us = M({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...wo() }, "validation"), rn = M({ id: String, appendIcon: pe, centerAffix: { type: Boolean, default: !0 }, prependIcon: pe, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Te(), "onClick:append": Te(), ...se(), ...He(), ...us() }, "VInput"), ll = q()({ name: "VInput", props: { ...rn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const { densityClasses: a } = We(e), { rtlClasses: r } = It(), { InputIcon: s } = So(e), i = Le(), u = y(() => e.id || `input-${i}`), c = y(() => `${u.value}-messages`), { errorMessages: p, isDirty: v, isDisabled: f, isReadonly: h, isPristine: w, isValid: m, isValidating: x, reset: _, resetValidation: g, validate: C, validationClasses: k } = function(F) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge(), b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le();
    const P = fe(F, "modelValue"), O = y(() => F.validationValue === void 0 ? P.value : F.validationValue), A = xo(), V = K([]), I = ue(!0), L = y(() => !(!Oe(P.value === "" ? null : P.value).length && !Oe(O.value === "" ? null : O.value).length)), N = y(() => !!(F.disabled ?? (A == null ? void 0 : A.isDisabled.value))), T = y(() => !!(F.readonly ?? (A == null ? void 0 : A.isReadonly.value))), G = y(() => F.errorMessages.length ? Oe(F.errorMessages).slice(0, Math.max(0, +F.maxErrors)) : V.value), j = y(() => {
      let Q = (F.validateOn ?? (A == null ? void 0 : A.validateOn.value)) || "input";
      Q === "lazy" && (Q = "input lazy");
      const ce = new Set((Q == null ? void 0 : Q.split(" ")) ?? []);
      return { blur: ce.has("blur") || ce.has("input"), input: ce.has("input"), submit: ce.has("submit"), lazy: ce.has("lazy") };
    }), W = y(() => !F.error && !F.errorMessages.length && (!F.rules.length || (I.value ? !V.value.length && !j.value.lazy || null : !V.value.length))), D = ue(!1), z = y(() => ({ [`${B}--error`]: W.value === !1, [`${B}--dirty`]: L.value, [`${B}--disabled`]: N.value, [`${B}--readonly`]: T.value })), R = y(() => F.name ?? S(b));
    function U() {
      P.value = null, Ee(le);
    }
    function le() {
      I.value = !0, j.value.lazy ? V.value = [] : ee(!0);
    }
    async function ee() {
      let Q = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ce = [];
      D.value = !0;
      for (const ke of F.rules) {
        if (ce.length >= +(F.maxErrors ?? 1))
          break;
        const hl = typeof ke == "function" ? ke : () => ke, Me = await hl(O.value);
        Me !== !0 && (typeof Me == "string" ? ce.push(Me) : console.warn(`${Me} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return V.value = ce, D.value = !1, I.value = Q, V.value;
    }
    return Hl(() => {
      A == null || A.register({ id: R.value, validate: ee, reset: U, resetValidation: le });
    }), at(() => {
      A == null || A.unregister(R.value);
    }), Ft(async () => {
      j.value.lazy || await ee(!0), A == null || A.update(R.value, W.value, G.value);
    }), lt(() => j.value.input, () => {
      J(O, () => {
        if (O.value != null)
          ee();
        else if (F.focused) {
          const Q = J(() => F.focused, (ce) => {
            ce || ee(), Q();
          });
        }
      });
    }), lt(() => j.value.blur, () => {
      J(() => F.focused, (Q) => {
        Q || ee();
      });
    }), J(W, () => {
      A == null || A.update(R.value, W.value, G.value);
    }), { errorMessages: G, isDirty: L, isDisabled: N, isReadonly: T, isPristine: I, isValid: W, isValidating: D, reset: U, resetValidation: le, validate: ee, validationClasses: z };
  }(e, "v-input", u), E = y(() => ({ id: u, messagesId: c, isDirty: v, isDisabled: f, isReadonly: h, isPristine: w, isValid: m, isValidating: x, reset: _, resetValidation: g, validate: C })), $ = y(() => {
    var F;
    return (F = e.errorMessages) != null && F.length || !w.value && p.value.length ? p.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return te(() => {
    var O, A, V, I;
    const F = !(!n.prepend && !e.prependIcon), B = !(!n.append && !e.appendIcon), b = $.value.length > 0, P = !e.hideDetails || e.hideDetails === "auto" && (b || !!n.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, a.value, r.value, k.value, e.class], style: e.style }, [F && d("div", { key: "prepend", class: "v-input__prepend" }, [(O = n.prepend) == null ? void 0 : O.call(n, E.value), e.prependIcon && d(s, { key: "prepend-icon", name: "prepend" }, null)]), n.default && d("div", { class: "v-input__control" }, [(A = n.default) == null ? void 0 : A.call(n, E.value)]), B && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(s, { key: "append-icon", name: "append" }, null), (V = n.append) == null ? void 0 : V.call(n, E.value)]), P && d("div", { class: "v-input__details" }, [d(ss, { id: c.value, active: b, messages: $.value }, { message: n.message }), (I = n.details) == null ? void 0 : I.call(n, E.value)])]);
  }), { reset: _, resetValidation: g, validate: C };
} }), cs = M({ ...rn(), ...Wl(bo(), ["inline"]) }, "VCheckbox"), sn = q()({ name: "VCheckbox", inheritAttrs: !1, props: cs(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n } = l;
  const o = fe(e, "modelValue"), { isFocused: a, focus: r, blur: s } = on(e), i = Le(), u = y(() => e.id || `checkbox-${i}`);
  return te(() => {
    const [c, p] = Kl(t), [v, f] = ll.filterProps(e), [h, w] = ft.filterProps(e);
    return d(ll, Z({ class: ["v-checkbox", e.class] }, c, v, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, id: u.value, focused: a.value, style: e.style }), { ...n, default: (m) => {
      let { id: x, messagesId: _, isDisabled: g, isReadonly: C } = m;
      return d(ft, Z(h, { id: x.value, "aria-describedby": _.value, disabled: g.value, readonly: C.value }, p, { modelValue: o.value, "onUpdate:modelValue": (k) => o.value = k, onFocus: r, onBlur: s }), n);
    } });
  }), {};
} }), ko = M({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...Vt() }, "VResponsive"), zn = q()({ name: "VResponsive", props: ko(), setup(e, l) {
  let { slots: t } = l;
  const { aspectStyles: n } = function(a) {
    return { aspectStyles: y(() => {
      const r = Number(a.aspectRatio);
      return r ? { paddingBottom: String(1 / r * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = Et(e);
  return te(() => {
    var a;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: n.value }, null), (a = t.additional) == null ? void 0 : a.call(t), t.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} });
function Gn(e, l) {
  var n;
  const t = (n = e._observe) == null ? void 0 : n[l.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Co = { mounted: function(e, l) {
  if (!Zl)
    return;
  const t = l.modifiers || {}, n = l.value, { handler: o, options: a } = typeof n == "object" ? n : { handler: n, options: {} }, r = new IntersectionObserver(function() {
    var p;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0;
    const u = (p = e._observe) == null ? void 0 : p[l.instance.$.uid];
    if (!u)
      return;
    const c = s.some((v) => v.isIntersecting);
    !o || t.quiet && !u.init || t.once && !c && !u.init || o(c, s, i), c && t.once ? Gn(e, l) : u.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: r }, r.observe(e);
}, unmounted: Gn }, ds = M({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...ko(), ...se(), ...Ot() }, "VImg"), ps = q()({ name: "VImg", directives: { intersect: Co }, props: ds(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const o = ue(""), a = K(), r = ue(e.eager ? "loading" : "idle"), s = ue(), i = ue(), u = y(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), c = y(() => u.value.aspect || s.value / i.value || 0);
  function p(F) {
    if ((!e.eager || !F) && (!Zl || F || e.eager)) {
      if (r.value = "loading", u.value.lazySrc) {
        const B = new Image();
        B.src = u.value.lazySrc, m(B, null);
      }
      u.value.src && Ee(() => {
        var B, b;
        if (t("loadstart", ((B = a.value) == null ? void 0 : B.currentSrc) || u.value.src), (b = a.value) == null ? void 0 : b.complete) {
          if (a.value.naturalWidth || f(), r.value === "error")
            return;
          c.value || m(a.value, null), v();
        } else
          c.value || m(a.value), h();
      });
    }
  }
  function v() {
    var F;
    h(), r.value = "loaded", t("load", ((F = a.value) == null ? void 0 : F.currentSrc) || u.value.src);
  }
  function f() {
    var F;
    r.value = "error", t("error", ((F = a.value) == null ? void 0 : F.currentSrc) || u.value.src);
  }
  function h() {
    const F = a.value;
    F && (o.value = F.currentSrc || F.src);
  }
  J(() => e.src, () => {
    p(r.value !== "idle");
  }), J(c, (F, B) => {
    !F && B && a.value && m(a.value);
  }), Hl(() => p());
  let w = -1;
  function m(F) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const b = () => {
      clearTimeout(w);
      const { naturalHeight: P, naturalWidth: O } = F;
      P || O ? (s.value = O, i.value = P) : F.complete || r.value !== "loading" || B == null ? (F.currentSrc.endsWith(".svg") || F.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : w = window.setTimeout(b, B);
    };
    b();
  }
  const x = y(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), _ = () => {
    var b;
    if (!u.value.src || r.value === "idle")
      return null;
    const F = d("img", { class: ["v-img__img", x.value], src: u.value.src, srcset: u.value.srcset, alt: e.alt, sizes: e.sizes, ref: a, onLoad: v, onError: f }, null), B = (b = n.sources) == null ? void 0 : b.call(n);
    return d(Ke, { transition: e.transition, appear: !0 }, { default: () => [Ae(B ? d("picture", { class: "v-img__picture" }, [B, F]) : F, [[gt, r.value === "loaded"]])] });
  }, g = () => d(Ke, { transition: e.transition }, { default: () => [u.value.lazySrc && r.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", x.value], src: u.value.lazySrc, alt: e.alt }, null)] }), C = () => n.placeholder ? d(Ke, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !n.error) && d("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null, k = () => n.error ? d(Ke, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && d("div", { class: "v-img__error" }, [n.error()])] }) : null, E = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, $ = ue(!1);
  {
    const F = J(c, (B) => {
      B && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          $.value = !0;
        });
      }), F());
    });
  }
  return te(() => {
    const [F] = zn.filterProps(e);
    return Ae(d(zn, Z({ class: ["v-img", { "v-img--booting": !$.value }, e.class], style: e.style }, F, { aspectRatio: c.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(re, null, [d(_, null, null), d(g, null, null), d(E, null, null), d(C, null, null), d(k, null, null)]), default: n.default }), [[Ye("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: a, state: r, naturalWidth: s, naturalHeight: i };
} }), vs = M({ start: Boolean, end: Boolean, icon: pe, image: String, ...se(), ...He(), ...Ze(), ...Nt(), ...xe(), ...be(), ...rt({ variant: "flat" }) }, "VAvatar"), nl = q()({ name: "VAvatar", props: vs(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { colorClasses: o, colorStyles: a, variantClasses: r } = fl(e), { densityClasses: s } = We(e), { roundedClasses: i } = Qe(e), { sizeClasses: u, sizeStyles: c } = Rt(e);
  return te(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, o.value, s.value, i.value, u.value, r.value, e.class], style: [a.value, c.value, e.style] }, { default: () => {
    var p;
    return [e.image ? d(ps, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(he, { key: "icon", icon: e.icon }, null) : (p = t.default) == null ? void 0 : p.call(t), vl(!1, "v-avatar")];
  } })), {};
} }), Bo = Symbol.for("vuetify:v-chip-group"), fs = M({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: ot }, ...se(), ...Xa({ selectedClass: "v-chip--selected" }), ...xe(), ...be(), ...rt({ variant: "tonal" }) }, "VChipGroup");
q()({ name: "VChipGroup", props: fs(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { isSelected: o, select: a, next: r, prev: s, selected: i } = Qa(e, Bo);
  return Je({ VChip: { color: H(e, "color"), disabled: H(e, "disabled"), filter: H(e, "filter"), variant: H(e, "variant") } }), te(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, n.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = t.default) == null ? void 0 : u.call(t, { isSelected: o, select: a, next: r, prev: s, selected: i.value })];
  } })), {};
} });
const ms = M({ activeClass: String, appendAvatar: String, appendIcon: pe, closable: Boolean, closeIcon: { type: pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Te(), onClickOnce: Te(), ...Dt(), ...se(), ...He(), ...Lt(), ...Ja(), ...Ze(), ...tn(), ...Nt(), ...xe({ tag: "span" }), ...be(), ...rt({ variant: "tonal" }) }, "VChip"), gs = q()({ name: "VChip", directives: { Ripple: ml }, props: ms(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { t: a } = yt(), { borderClasses: r } = Tt(e), { colorClasses: s, colorStyles: i, variantClasses: u } = fl(e), { densityClasses: c } = We(e), { elevationClasses: p } = Mt(e), { roundedClasses: v } = Qe(e), { sizeClasses: f } = Rt(e), { themeClasses: h } = Ce(e), w = fe(e, "modelValue"), m = Za(e, Bo, !1), x = en(e, t), _ = y(() => e.link !== !1 && x.isLink.value), g = y(() => !e.disabled && e.link !== !1 && (!!m || e.link || x.isClickable.value)), C = y(() => ({ "aria-label": a(e.closeLabel), onClick($) {
    w.value = !1, n("click:close", $);
  } }));
  function k($) {
    var F;
    n("click", $), g.value && ((F = x.navigate) == null || F.call(x, $), m == null || m.toggle());
  }
  function E($) {
    $.key !== "Enter" && $.key !== " " || ($.preventDefault(), k($));
  }
  return () => {
    const $ = x.isLink.value ? "a" : e.tag, F = !(!e.appendIcon && !e.appendAvatar), B = !(!F && !o.append), b = !(!o.close && !e.closable), P = !(!o.filter && !e.filter) && m, O = !(!e.prependIcon && !e.prependAvatar), A = !(!O && !o.prepend), V = !m || m.isSelected.value;
    return w.value && Ae(d($, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": g.value, "v-chip--filter": P, "v-chip--pill": e.pill }, h.value, r.value, V ? s.value : void 0, c.value, p.value, v.value, f.value, u.value, m == null ? void 0 : m.selectedClass.value, e.class], style: [V ? i.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: x.href.value, tabindex: g.value ? 0 : void 0, onClick: k, onKeydown: g.value && !_.value && E }, { default: () => {
      var I;
      return [vl(g.value, "v-chip"), P && d(wa, { key: "filter" }, { default: () => [Ae(d("div", { class: "v-chip__filter" }, [o.filter ? Ae(d(Ve, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[Ye("slot"), o.filter, "default"]]) : d(he, { key: "filter-icon", icon: e.filterIcon }, null)]), [[gt, m.isSelected.value]])] }), A && d("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? d(Ve, { key: "prepend-defaults", disabled: !O, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : d(re, null, [e.prependIcon && d(he, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(nl, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((I = o.default) == null ? void 0 : I.call(o, { isSelected: m == null ? void 0 : m.isSelected.value, selectedClass: m == null ? void 0 : m.selectedClass.value, select: m == null ? void 0 : m.select, toggle: m == null ? void 0 : m.toggle, value: m == null ? void 0 : m.value.value, disabled: e.disabled })) ?? e.text]), B && d("div", { key: "append", class: "v-chip__append" }, [o.append ? d(Ve, { key: "append-defaults", disabled: !F, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : d(re, null, [e.appendIcon && d(he, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(nl, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), b && d("div", Z({ key: "close", class: "v-chip__close" }, C.value), [o.close ? d(Ve, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : d(he, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Ye("ripple"), g.value && e.ripple, null]]);
  };
} }), Ml = Symbol.for("vuetify:list");
function Po() {
  const e = ve(Ml, { hasPrepend: ue(!1), updateHasPrepend: () => null }), l = { hasPrepend: ue(!1), updateHasPrepend: (t) => {
    t && (l.hasPrepend.value = t);
  } };
  return ge(Ml, l), e;
}
function _o() {
  return ve(Ml, null);
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
}, Bt = Symbol.for("vuetify:nested"), Ao = { id: ue(), root: { register: () => null, unregister: () => null, parents: K(/* @__PURE__ */ new Map()), children: K(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: K(/* @__PURE__ */ new Set()), selected: K(/* @__PURE__ */ new Map()), selectedValues: K([]) } }, bs = M({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Ss = (e) => {
  let l = !1;
  const t = K(/* @__PURE__ */ new Map()), n = K(/* @__PURE__ */ new Map()), o = fe(e, "opened", e.opened, (p) => new Set(p), (p) => [...p.values()]), a = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((p) => {
          const v = Hn(p);
          return { select: (f) => {
            let { id: h, selected: w, children: m, ...x } = f;
            return h = Ue(h), m.has(h) ? w : v.select({ id: h, selected: w, children: m, ...x });
          }, in: v.in, out: v.out };
        })(e.mandatory);
      case "leaf":
        return ((p) => {
          const v = Nl(p);
          return { select: (f) => {
            let { id: h, selected: w, children: m, ...x } = f;
            return h = Ue(h), m.has(h) ? w : v.select({ id: h, selected: w, children: m, ...x });
          }, in: v.in, out: v.out };
        })(e.mandatory);
      case "independent":
        return Nl(e.mandatory);
      case "single-independent":
        return Hn(e.mandatory);
      default:
        return ((p) => {
          const v = { select: (f) => {
            let { id: h, value: w, selected: m, children: x, parents: _ } = f;
            h = Ue(h);
            const g = new Map(m), C = [h];
            for (; C.length; ) {
              const E = C.shift();
              m.set(E, w ? "on" : "off"), x.has(E) && C.push(...x.get(E));
            }
            let k = _.get(h);
            for (; k; ) {
              const E = x.get(k), $ = E.every((B) => m.get(B) === "on"), F = E.every((B) => !m.has(B) || m.get(B) === "off");
              m.set(k, $ ? "on" : F ? "off" : "indeterminate"), k = _.get(k);
            }
            return p && !w && Array.from(m.entries()).reduce(($, F) => {
              let [B, b] = F;
              return b === "on" ? [...$, B] : $;
            }, []).length === 0 ? g : m;
          }, in: (f, h, w) => {
            let m = /* @__PURE__ */ new Map();
            for (const x of f || [])
              m = v.select({ id: x, value: !0, selected: new Map(m), children: h, parents: w });
            return m;
          }, out: (f, h) => {
            const w = [];
            for (const [m, x] of f.entries())
              x !== "on" || h.has(m) || w.push(m);
            return w;
          } };
          return v;
        })(e.mandatory);
    }
  }), r = y(() => {
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
  }), s = fe(e, "selected", e.selected, (p) => a.value.in(p, t.value, n.value), (p) => a.value.out(p, t.value, n.value));
  function i(p) {
    const v = [];
    let f = p;
    for (; f != null; )
      v.unshift(f), f = n.value.get(f);
    return v;
  }
  at(() => {
    l = !0;
  });
  const u = we("nested"), c = { id: ue(), root: { opened: o, selected: s, selectedValues: y(() => {
    const p = [];
    for (const [v, f] of s.value.entries())
      f === "on" && p.push(v);
    return p;
  }), register: (p, v, f) => {
    v && p !== v && n.value.set(p, v), f && t.value.set(p, []), v != null && t.value.set(v, [...t.value.get(v) || [], p]);
  }, unregister: (p) => {
    if (l)
      return;
    t.value.delete(p);
    const v = n.value.get(p);
    if (v) {
      const f = t.value.get(v) ?? [];
      t.value.set(v, f.filter((h) => h !== p));
    }
    n.value.delete(p), o.value.delete(p);
  }, open: (p, v, f) => {
    u.emit("click:open", { id: p, value: v, path: i(p), event: f });
    const h = r.value.open({ id: p, value: v, opened: new Set(o.value), children: t.value, parents: n.value, event: f });
    h && (o.value = h);
  }, openOnSelect: (p, v, f) => {
    const h = r.value.select({ id: p, value: v, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: n.value, event: f });
    h && (o.value = h);
  }, select: (p, v, f) => {
    u.emit("click:select", { id: p, value: v, path: i(p), event: f });
    const h = a.value.select({ id: p, value: v, selected: new Map(s.value), children: t.value, parents: n.value, event: f });
    h && (s.value = h), c.root.openOnSelect(p, v, f);
  }, children: t, parents: n } };
  return ge(Bt, c), c.root;
}, $o = (e, l) => {
  const t = ve(Bt, Ao), n = Symbol(Le()), o = y(() => e.value ?? n), a = { ...t, id: o, open: (r, s) => t.root.open(o.value, r, s), openOnSelect: (r, s) => t.root.openOnSelect(o.value, r, s), isOpen: y(() => t.root.opened.value.has(o.value)), parent: y(() => t.root.parents.value.get(o.value)), select: (r, s) => t.root.select(o.value, r, s), isSelected: y(() => t.root.selected.value.get(Ue(o.value)) === "on"), isIndeterminate: y(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: y(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, l), at(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), l && ge(Bt, a), a;
}, ws = pt({ name: "VListGroupActivator", setup(e, l) {
  let { slots: t } = l;
  return (() => {
    const n = ve(Bt, Ao);
    ge(Bt, { ...n, isGroupActivator: !0 });
  })(), () => {
    var n;
    return (n = t.default) == null ? void 0 : n.call(t);
  };
} }), xs = M({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: pe, default: "$collapse" }, expandIcon: { type: pe, default: "$expand" }, prependIcon: pe, appendIcon: pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...xe() }, "VListGroup"), Wn = q()({ name: "VListGroup", props: xs(), setup(e, l) {
  let { slots: t } = l;
  const { isOpen: n, open: o, id: a } = $o(H(e, "value"), !0), r = y(() => `v-list-group--id-${String(a.value)}`), s = _o(), { isBooted: i } = function() {
    const f = ue(!1);
    return Ft(() => {
      window.requestAnimationFrame(() => {
        f.value = !0;
      });
    }), { ssrBootStyles: y(() => f.value ? void 0 : { transition: "none !important" }), isBooted: Gl(f) };
  }();
  function u(f) {
    o(!n.value, f);
  }
  const c = y(() => ({ onClick: u, class: "v-list-group__header", id: r.value })), p = y(() => n.value ? e.collapseIcon : e.expandIcon), v = y(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && p.value, appendIcon: e.appendIcon || !e.subgroup && p.value, title: e.title, value: e.value } }));
  return te(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style }, { default: () => [t.activator && d(Ve, { defaults: v.value }, { default: () => [d(ws, null, { default: () => [t.activator({ props: c.value, isOpen: n.value })] })] }), d(Ke, { transition: { component: xr }, disabled: !i.value }, { default: () => {
    var f;
    return [Ae(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": r.value }, [(f = t.default) == null ? void 0 : f.call(t)]), [[gt, n.value]])];
  } })] })), {};
} }), ks = fa("v-list-item-subtitle"), Cs = fa("v-list-item-title"), Bs = M({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: pe, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: pe, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Te(), onClickOnce: Te(), ...Dt(), ...se(), ...He(), ...Vt(), ...Lt(), ...Ze(), ...tn(), ...xe(), ...be(), ...rt({ variant: "text" }) }, "VListItem"), al = q()({ name: "VListItem", directives: { Ripple: ml }, props: Bs(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: t, slots: n, emit: o } = l;
  const a = en(e, t), r = y(() => e.value ?? a.href.value), { select: s, isSelected: i, isIndeterminate: u, isGroupActivator: c, root: p, parent: v, openOnSelect: f } = $o(r, !1), h = _o(), w = y(() => {
    var T;
    return e.active !== !1 && (e.active || ((T = a.isActive) == null ? void 0 : T.value) || i.value);
  }), m = y(() => e.link !== !1 && a.isLink.value), x = y(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || e.value != null && !!h)), _ = y(() => e.rounded || e.nav), g = y(() => e.color ?? e.activeColor), C = y(() => ({ color: w.value ? g.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  J(() => {
    var T;
    return (T = a.isActive) == null ? void 0 : T.value;
  }, (T) => {
    T && v.value != null && p.open(v.value, !0), T && f(T);
  }, { immediate: !0 });
  const { themeClasses: k } = Ce(e), { borderClasses: E } = Tt(e), { colorClasses: $, colorStyles: F, variantClasses: B } = fl(C), { densityClasses: b } = We(e), { dimensionStyles: P } = Et(e), { elevationClasses: O } = Mt(e), { roundedClasses: A } = Qe(_), V = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), I = y(() => ({ isActive: w.value, select: s, isSelected: i.value, isIndeterminate: u.value }));
  function L(T) {
    var G;
    o("click", T), !c && x.value && ((G = a.navigate) == null || G.call(a, T), e.value != null && s(!i.value, T));
  }
  function N(T) {
    T.key !== "Enter" && T.key !== " " || (T.preventDefault(), L(T));
  }
  return te(() => {
    const T = m.value ? "a" : e.tag, G = n.title || e.title, j = n.subtitle || e.subtitle, W = !(!e.appendAvatar && !e.appendIcon), D = !(!W && !n.append), z = !(!e.prependAvatar && !e.prependIcon), R = !(!z && !n.prepend);
    var U, le;
    return h == null || h.updateHasPrepend(R), e.activeColor && (U = "active-color", le = ["color", "base-color"], le = Array.isArray(le) ? le.slice(0, -1).map((ee) => `'${ee}'`).join(", ") + ` or '${le.at(-1)}'` : `'${le}'`, ul(`[Vuetify UPGRADE] '${U}' is deprecated, use ${le} instead.`)), Ae(d(T, { class: ["v-list-item", { "v-list-item--active": w.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !R && (h == null ? void 0 : h.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && w.value }, k.value, E.value, $.value, b.value, O.value, V.value, A.value, B.value, e.class], style: [F.value, P.value, e.style], href: a.href.value, tabindex: x.value ? h ? -2 : 0 : void 0, onClick: L, onKeydown: x.value && !m.value && N }, { default: () => {
      var ee;
      return [vl(x.value || w.value, "v-list-item"), R && d("div", { key: "prepend", class: "v-list-item__prepend" }, [n.prepend ? d(Ve, { key: "prepend-defaults", disabled: !z, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.prepend) == null ? void 0 : Q.call(n, I.value)];
      } }) : d(re, null, [e.prependAvatar && d(nl, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(he, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [G && d(Cs, { key: "title" }, { default: () => {
        var Q;
        return [((Q = n.title) == null ? void 0 : Q.call(n, { title: e.title })) ?? e.title];
      } }), j && d(ks, { key: "subtitle" }, { default: () => {
        var Q;
        return [((Q = n.subtitle) == null ? void 0 : Q.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ee = n.default) == null ? void 0 : ee.call(n, I.value)]), D && d("div", { key: "append", class: "v-list-item__append" }, [n.append ? d(Ve, { key: "append-defaults", disabled: !W, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Q;
        return [(Q = n.append) == null ? void 0 : Q.call(n, I.value)];
      } }) : d(re, null, [e.appendIcon && d(he, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(nl, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[Ye("ripple"), x.value && e.ripple]]);
  }), {};
} }), Ps = M({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...xe() }, "VListSubheader"), _s = q()({ name: "VListSubheader", props: Ps(), setup(e, l) {
  let { slots: t } = l;
  const { textColorClasses: n, textColorStyles: o } = je(H(e, "color"));
  return te(() => {
    const a = !(!t.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var r;
      return [a && d("div", { class: "v-list-subheader__text" }, [((r = t.default) == null ? void 0 : r.call(t)) ?? e.title])];
    } });
  }), {};
} }), Fs = M({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...be() }, "VDivider"), As = q()({ name: "VDivider", props: Fs(), setup(e, l) {
  let { attrs: t } = l;
  const { themeClasses: n } = Ce(e), { textColorClasses: o, textColorStyles: a } = je(H(e, "color")), r = y(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = X(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = X(e.thickness)), s;
  });
  return te(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, n.value, o.value, e.class], style: [r.value, a.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), $s = M({ items: Array }, "VListChildren"), Vo = q()({ name: "VListChildren", props: $s(), setup(e, l) {
  let { slots: t } = l;
  return Po(), () => {
    var n, o;
    return ((n = t.default) == null ? void 0 : n.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((a) => {
      var f, h;
      let { children: r, props: s, type: i, raw: u } = a;
      if (i === "divider")
        return ((f = t.divider) == null ? void 0 : f.call(t, { props: s })) ?? d(As, s, null);
      if (i === "subheader")
        return ((h = t.subheader) == null ? void 0 : h.call(t, { props: s })) ?? d(_s, s, null);
      const c = { subtitle: t.subtitle ? (w) => {
        var m;
        return (m = t.subtitle) == null ? void 0 : m.call(t, { ...w, item: u });
      } : void 0, prepend: t.prepend ? (w) => {
        var m;
        return (m = t.prepend) == null ? void 0 : m.call(t, { ...w, item: u });
      } : void 0, append: t.append ? (w) => {
        var m;
        return (m = t.append) == null ? void 0 : m.call(t, { ...w, item: u });
      } : void 0, title: t.title ? (w) => {
        var m;
        return (m = t.title) == null ? void 0 : m.call(t, { ...w, item: u });
      } : void 0 }, [p, v] = Wn.filterProps(s);
      return r ? d(Wn, Z({ value: s == null ? void 0 : s.value }, p), { activator: (w) => {
        let { props: m } = w;
        return t.header ? t.header({ props: { ...s, ...m } }) : d(al, Z(s, m), c);
      }, default: () => d(Vo, { items: r }, t) }) : t.item ? t.item({ props: s }) : d(al, s, c);
    }));
  };
} }), Eo = M({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Io(e, l) {
  const t = Se(l, e.itemTitle, l), n = e.returnObject ? l : Se(l, e.itemValue, t), o = Se(l, e.itemChildren), a = { title: t, value: n, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? $t(l, ["children"])[1] : l : Se(l, e.itemProps) };
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
  }(y(() => Oo(e, e.items)), (l) => Io(e, l));
}
function Es(e, l) {
  const t = Se(l, e.itemType, "item"), n = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : Se(l, e.itemTitle), o = Se(l, e.itemValue, void 0), a = Se(l, e.itemChildren), r = { title: n, value: o, ...e.itemProps === !0 ? $t(l, ["children"])[1] : Se(l, e.itemProps) };
  return { type: t, title: r.title, value: r.value, props: r, children: t === "item" && a ? Do(e, a) : void 0, raw: l };
}
function Do(e, l) {
  const t = [];
  for (const n of l)
    t.push(Es(e, n));
  return t;
}
const Is = M({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...bs({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Dt(), ...se(), ...He(), ...Vt(), ...Lt(), itemType: { type: String, default: "type" }, ...Eo(), ...Ze(), ...xe(), ...be(), ...rt({ variant: "text" }) }, "VList"), Os = q()({ name: "VList", props: Is(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { items: n } = function(B) {
    return { items: y(() => Do(B, B.items)) };
  }(e), { themeClasses: o } = Ce(e), { backgroundColorClasses: a, backgroundColorStyles: r } = vt(H(e, "bgColor")), { borderClasses: s } = Tt(e), { densityClasses: i } = We(e), { dimensionStyles: u } = Et(e), { elevationClasses: c } = Mt(e), { roundedClasses: p } = Qe(e), { open: v, select: f } = Ss(e), h = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), w = H(e, "activeColor"), m = H(e, "baseColor"), x = H(e, "color");
  Po(), Je({ VListGroup: { activeColor: w, baseColor: m, color: x }, VListItem: { activeClass: H(e, "activeClass"), activeColor: w, baseColor: m, color: x, density: H(e, "density"), disabled: H(e, "disabled"), lines: H(e, "lines"), nav: H(e, "nav"), variant: H(e, "variant") } });
  const _ = ue(!1), g = K();
  function C(B) {
    _.value = !0;
  }
  function k(B) {
    _.value = !1;
  }
  function E(B) {
    var b;
    _.value || B.relatedTarget && ((b = g.value) != null && b.contains(B.relatedTarget)) || F();
  }
  function $(B) {
    if (g.value) {
      if (B.key === "ArrowDown")
        F("next");
      else if (B.key === "ArrowUp")
        F("prev");
      else if (B.key === "Home")
        F("first");
      else {
        if (B.key !== "End")
          return;
        F("last");
      }
      B.preventDefault();
    }
  }
  function F(B) {
    if (g.value)
      return Xt(g.value, B);
  }
  return te(() => d(e.tag, { ref: g, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, a.value, s.value, i.value, c.value, h.value, p.value, e.class], style: [r.value, u.value, e.style], tabindex: e.disabled || _.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: C, onFocusout: k, onFocus: E, onKeydown: $ }, { default: () => [d(Vo, { items: n.value }, t)] })), { open: v, select: f, focus: F };
} }), Ds = M({ id: String, ...Wl(Pa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ba } }), ["absolute"]) }, "VMenu"), Ts = q()({ name: "VMenu", props: Ds(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const n = fe(e, "modelValue"), { scopeId: o } = Ca(), a = Le(), r = y(() => e.id || `v-menu-${a}`), s = K(), i = ve(Dl, null), u = ue(0);
  function c() {
    i == null || i.closeParents();
  }
  function p(h) {
    var w, m;
    e.disabled || h.key === "Tab" && (n.value = !1, (m = (w = s.value) == null ? void 0 : w.activatorEl) == null || m.focus());
  }
  function v(h) {
    var m;
    if (e.disabled)
      return;
    const w = (m = s.value) == null ? void 0 : m.contentEl;
    w && n.value ? h.key === "ArrowDown" ? (h.preventDefault(), Xt(w, "next")) : h.key === "ArrowUp" && (h.preventDefault(), Xt(w, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (n.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => v(h))));
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
  const f = y(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(n.value), "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return te(() => {
    const [h] = On.filterProps(e);
    return d(On, Z({ ref: s, class: ["v-menu", e.class], style: e.style }, h, { modelValue: n.value, "onUpdate:modelValue": (w) => n.value = w, absolute: !0, activatorProps: f.value, "onClick:outside": c, onKeydown: p }, o), { activator: t.activator, default: function() {
      for (var w = arguments.length, m = new Array(w), x = 0; x < w; x++)
        m[x] = arguments[x];
      return d(Ve, { root: "VMenu" }, { default: () => {
        var _;
        return [(_ = t.default) == null ? void 0 : _.call(t, ...m)];
      } });
    } });
  }), ln({ id: r, ΨopenChildren: u }, s);
} }), Ls = M({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...Ot({ transition: { component: Sa } }) }, "VCounter"), Ms = q()({ name: "VCounter", functional: !0, props: Ls(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return te(() => d(Ke, { transition: e.transition }, { default: () => [Ae(d("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: n.value, max: e.max, value: e.value }) : n.value]), [[gt, e.active]])] })), {};
} }), Ns = M({ floating: Boolean, ...se() }, "VFieldLabel"), zt = q()({ name: "VFieldLabel", props: Ns(), setup(e, l) {
  let { slots: t } = l;
  return te(() => d(mo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Rs = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], To = M({ appendInnerIcon: pe, bgColor: String, clearable: Boolean, clearIcon: { type: pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Rs.includes(e) }, "onClick:clear": Te(), "onClick:appendInner": Te(), "onClick:prependInner": Te(), ...se(), ...nn(), ...Ze(), ...be() }, "VField"), Kn = q()({ name: "VField", inheritAttrs: !1, props: { id: String, ...wo(), ...To() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const { themeClasses: a } = Ce(e), { loaderClasses: r } = an(e), { focusClasses: s, isFocused: i, focus: u, blur: c } = on(e), { InputIcon: p } = So(e), { roundedClasses: v } = Qe(e), { rtlClasses: f } = It(), h = y(() => e.dirty || e.active), w = y(() => !(e.singleLine || !e.label && !o.label)), m = Le(), x = y(() => e.id || `input-${m}`), _ = y(() => `${x.value}-messages`), g = K(), C = K(), k = K(), E = y(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: $, backgroundColorStyles: F } = vt(H(e, "bgColor")), { textColorClasses: B, textColorStyles: b } = je(y(() => e.error || e.disabled ? void 0 : h.value && i.value ? e.color : e.baseColor));
  J(h, (A) => {
    if (w.value) {
      const V = g.value.$el, I = C.value.$el;
      requestAnimationFrame(() => {
        const L = ql(V), N = I.getBoundingClientRect(), T = N.x - L.x, G = N.y - L.y - (L.height / 2 - N.height / 2), j = N.width / 0.75, W = Math.abs(j - L.width) > 1 ? { maxWidth: X(j) } : void 0, D = getComputedStyle(V), z = getComputedStyle(I), R = 1e3 * parseFloat(D.transitionDuration) || 150, U = parseFloat(z.getPropertyValue("--v-field-label-scale")), le = z.getPropertyValue("color");
        V.style.visibility = "visible", I.style.visibility = "hidden", it(V, { transform: `translate(${T}px, ${G}px) scale(${U})`, color: le, ...W }, { duration: R, easing: Jt, direction: A ? "normal" : "reverse" }).finished.then(() => {
          V.style.removeProperty("visibility"), I.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const P = y(() => ({ isActive: h, isFocused: i, controlRef: k, blur: c, focus: u }));
  function O(A) {
    A.target !== document.activeElement && A.preventDefault();
  }
  return te(() => {
    var T, G, j;
    const A = e.variant === "outlined", V = o["prepend-inner"] || e.prependInnerIcon, I = !(!e.clearable && !o.clear), L = !!(o["append-inner"] || e.appendInnerIcon || I), N = o.label ? o.label({ ...P.value, label: e.label, props: { for: x.value } }) : e.label;
    return d("div", Z({ class: ["v-field", { "v-field--active": h.value, "v-field--appended": L, "v-field--center-affix": e.centerAffix ?? !E.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": V, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !N, [`v-field--variant-${e.variant}`]: !0 }, a.value, $.value, s.value, r.value, v.value, f.value, e.class], style: [F.value, b.value, e.style], onClick: O }, t), [d("div", { class: "v-field__overlay" }, null), d(ro, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), V && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(p, { key: "prepend-icon", name: "prependInner" }, null), (T = o["prepend-inner"]) == null ? void 0 : T.call(o, P.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && w.value && d(zt, { key: "floating-label", ref: C, class: [B.value], floating: !0, for: x.value }, { default: () => [N] }), d(zt, { ref: g, for: x.value }, { default: () => [N] }), (G = o.default) == null ? void 0 : G.call(o, { ...P.value, props: { id: x.value, class: "v-field__input", "aria-describedby": _.value }, focus: u, blur: c })]), I && d(wa, { key: "clear" }, { default: () => [Ae(d("div", { class: "v-field__clearable", onMousedown: (W) => {
      W.preventDefault(), W.stopPropagation();
    } }, [o.clear ? o.clear() : d(p, { name: "clear" }, null)]), [[gt, e.dirty]])] }), L && d("div", { key: "append", class: "v-field__append-inner" }, [(j = o["append-inner"]) == null ? void 0 : j.call(o, P.value), e.appendInnerIcon && d(p, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", B.value] }, [A && d(re, null, [d("div", { class: "v-field__outline__start" }, null), w.value && d("div", { class: "v-field__outline__notch" }, [d(zt, { ref: C, floating: !0, for: x.value }, { default: () => [N] })]), d("div", { class: "v-field__outline__end" }, null)]), E.value && w.value && d(zt, { ref: C, floating: !0, for: x.value }, { default: () => [N] })])]);
  }), { controlRef: k };
} }), js = ["color", "file", "time", "date", "datetime-local", "week", "month"], Lo = M({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...rn(), ...To() }, "VTextField"), Rl = q()({ name: "VTextField", directives: { Intersect: Co }, inheritAttrs: !1, props: Lo(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: t, emit: n, slots: o } = l;
  const a = fe(e, "modelValue"), { isFocused: r, focus: s, blur: i } = on(e), u = y(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : (a.value ?? "").toString().length), c = y(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), p = y(() => ["plain", "underlined"].includes(e.variant));
  function v(E, $) {
    var F, B;
    e.autofocus && E && ((B = (F = $[0].target) == null ? void 0 : F.focus) == null || B.call(F));
  }
  const f = K(), h = K(), w = K(), m = y(() => js.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
  function x() {
    var E;
    w.value !== document.activeElement && ((E = w.value) == null || E.focus()), r.value || s();
  }
  function _(E) {
    n("mousedown:control", E), E.target !== w.value && (x(), E.preventDefault());
  }
  function g(E) {
    x(), n("click:control", E);
  }
  function C(E) {
    E.stopPropagation(), x(), Ee(() => {
      a.value = null, function($) {
        for (var F = arguments.length, B = new Array(F > 1 ? F - 1 : 0), b = 1; b < F; b++)
          B[b - 1] = arguments[b];
        if (Array.isArray($))
          for (const P of $)
            P(...B);
        else
          typeof $ == "function" && $(...B);
      }(e["onClick:clear"], E);
    });
  }
  function k(E) {
    var F;
    const $ = E.target;
    if (a.value = $.value, ((F = e.modelModifiers) == null ? void 0 : F.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const B = [$.selectionStart, $.selectionEnd];
      Ee(() => {
        $.selectionStart = B[0], $.selectionEnd = B[1];
      });
    }
  }
  return te(() => {
    const E = !!(o.counter || e.counter || e.counterValue), $ = !(!E && !o.details), [F, B] = Kl(t), [{ modelValue: b, ...P }] = ll.filterProps(e), [O] = function(A) {
      return $t(A, Object.keys(Kn.props).filter((V) => !$l(V) && V !== "class" && V !== "style"));
    }(e);
    return d(ll, Z({ ref: f, modelValue: a.value, "onUpdate:modelValue": (A) => a.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, F, P, { centerAffix: !p.value, focused: r.value }), { ...o, default: (A) => {
      let { id: V, isDisabled: I, isDirty: L, isReadonly: N, isValid: T } = A;
      return d(Kn, Z({ ref: h, onMousedown: _, onClick: g, "onClick:clear": C, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, O, { id: V.value, active: m.value || L.value, dirty: L.value || e.dirty, disabled: I.value, focused: r.value, error: T.value === !1 }), { ...o, default: (G) => {
        let { props: { class: j, ...W } } = G;
        const D = Ae(d("input", Z({ ref: w, value: a.value, onInput: k, autofocus: e.autofocus, readonly: N.value, disabled: I.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: x, onBlur: i }, W, B), null), [[Ye("intersect"), { handler: v }, null, { once: !0 }]]);
        return d(re, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), o.default ? d("div", { class: j, "data-no-activator": "" }, [o.default(), D]) : pr(D, { class: j }), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: $ ? (A) => {
      var V;
      return d(re, null, [(V = o.details) == null ? void 0 : V.call(o, A), E && d(re, null, [d("span", null, null), d(Ms, { active: e.persistentCounter || r.value, value: u.value, max: c.value }, o.counter)])]);
    } : void 0 });
  }), ln({}, f, h, w);
} }), zs = M({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: ot }, ...Eo({ itemChildren: !1 }) }, "Select"), Gs = M({ ...zs(), ...Wl(Lo({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...Ot({ transition: { component: ba } }) }, "VSelect"), Hs = q()({ name: "VSelect", props: Gs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: t } = l;
  const { t: n } = yt(), o = K(), a = K(), r = fe(e, "menu"), s = y({ get: () => r.value, set: (A) => {
    var V;
    r.value && !A && ((V = a.value) != null && V.ΨopenChildren) || (r.value = A);
  } }), { items: i, transformIn: u, transformOut: c } = Vs(e), p = fe(e, "modelValue", [], (A) => u(Oe(A)), (A) => {
    const V = c(A);
    return e.multiple ? V : V[0] ?? null;
  }), v = xo(), f = y(() => p.value.map((A) => i.value.find((V) => e.valueComparator(V.value, A.value)) || A)), h = y(() => f.value.map((A) => A.props.value)), w = ue(!1);
  let m, x = "";
  const _ = y(() => e.hideSelected ? i.value.filter((A) => !f.value.some((V) => V === A)) : i.value), g = y(() => e.hideNoData && !i.value.length || e.readonly || (v == null ? void 0 : v.isReadonly.value)), C = K();
  function k(A) {
    e.openOnClear && (s.value = !0);
  }
  function E() {
    g.value || (s.value = !s.value);
  }
  function $(A) {
    var L, N;
    if (e.readonly || v != null && v.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(A.key) && A.preventDefault(), ["Enter", "ArrowDown", " "].includes(A.key) && (s.value = !0), ["Escape", "Tab"].includes(A.key) && (s.value = !1), A.key === "Home" ? (L = C.value) == null || L.focus("first") : A.key === "End" && ((N = C.value) == null || N.focus("last")), e.multiple || !function(T) {
      const G = T.key.length === 1, j = !T.ctrlKey && !T.metaKey && !T.altKey;
      return G && j;
    }(A)))
      return;
    const V = performance.now();
    V - m > 1e3 && (x = ""), x += A.key.toLowerCase(), m = V;
    const I = i.value.find((T) => T.title.toLowerCase().startsWith(x));
    I !== void 0 && (p.value = [I]);
  }
  function F(A) {
    var V;
    A.key === "Tab" && ((V = o.value) == null || V.focus());
  }
  function B(A) {
    if (e.multiple) {
      const V = h.value.findIndex((I) => e.valueComparator(I, A.value));
      if (V === -1)
        p.value = [...p.value, A];
      else {
        const I = [...p.value];
        I.splice(V, 1), p.value = I;
      }
    } else
      p.value = [A], s.value = !1;
  }
  function b(A) {
    var V;
    (V = C.value) != null && V.$el.contains(A.relatedTarget) || (s.value = !1);
  }
  function P() {
    var A;
    w.value && ((A = o.value) == null || A.focus());
  }
  function O(A) {
    w.value = !0;
  }
  return te(() => {
    const A = !(!e.chips && !t.chip), V = !!(!e.hideNoData || _.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), I = p.value.length > 0, [L] = Rl.filterProps(e), N = I || !w.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(Rl, Z({ ref: o }, L, { modelValue: p.value.map((T) => T.props.value).join(", "), "onUpdate:modelValue": (T) => {
      T == null && (p.value = []);
    }, focused: w.value, "onUpdate:focused": (T) => w.value = T, validationValue: p.externalValue, dirty: I, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": p.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: N, "onClick:clear": k, "onMousedown:control": E, onBlur: b, onKeydown: $ }), { ...t, default: () => d(re, null, [d(Ts, Z({ ref: a, modelValue: s.value, "onUpdate:modelValue": (T) => s.value = T, activator: "parent", contentClass: "v-select__content", disabled: g.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: P }, e.menuProps), { default: () => [V && d(Os, { ref: C, selected: h.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (T) => T.preventDefault(), onKeydown: F, onFocusin: O, tabindex: "-1" }, { default: () => {
      var T, G, j;
      return [(T = t["prepend-item"]) == null ? void 0 : T.call(t), !_.value.length && !e.hideNoData && (((G = t["no-data"]) == null ? void 0 : G.call(t)) ?? d(al, { title: n(e.noDataText) }, null)), _.value.map((W, D) => {
        var R;
        const z = Z(W.props, { key: D, onClick: () => B(W) });
        return ((R = t.item) == null ? void 0 : R.call(t, { item: W, index: D, props: z })) ?? d(al, z, { prepend: (U) => {
          let { isSelected: le } = U;
          return d(re, null, [e.multiple && !e.hideSelected ? d(ft, { key: W.value, modelValue: le, ripple: !1, tabindex: "-1" }, null) : void 0, W.props.prependIcon && d(he, { icon: W.props.prependIcon }, null)]);
        } });
      }), (j = t["append-item"]) == null ? void 0 : j.call(t)];
    } })] }), f.value.map((T, G) => {
      var W;
      const j = { "onClick:close": function(D) {
        D.stopPropagation(), D.preventDefault(), B(T);
      }, onMousedown(D) {
        D.preventDefault(), D.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return d("div", { key: T.value, class: "v-select__selection" }, [A ? t.chip ? d(Ve, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: T.title } } }, { default: () => {
        var D;
        return [(D = t.chip) == null ? void 0 : D.call(t, { item: T, index: G, props: j })];
      } }) : d(gs, Z({ key: "chip", closable: e.closableChips, size: "small", text: T.title }, j), null) : ((W = t.selection) == null ? void 0 : W.call(t, { item: T, index: G })) ?? d("span", { class: "v-select__selection-text" }, [T.title, e.multiple && G < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [Ut(",")])])]);
    })]), "append-inner": function() {
      var W;
      for (var T = arguments.length, G = new Array(T), j = 0; j < T; j++)
        G[j] = arguments[j];
      return d(re, null, [(W = t["append-inner"]) == null ? void 0 : W.call(t, ...G), e.menuIcon ? d(he, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), ln({ isFocused: w, menu: s, select: B }, o);
} }), un = M({ prevIcon: { type: String, default: "$prev" }, nextIcon: { type: String, default: "$next" }, firstIcon: { type: String, default: "$first" }, lastIcon: { type: String, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), ol = q()({ name: "VDataTableFooter", props: un(), setup(e, l) {
  let { slots: t } = l;
  const { t: n } = yt(), { page: o, pageCount: a, startIndex: r, stopIndex: s, itemsLength: i, itemsPerPage: u, setItemsPerPage: c } = function() {
    const v = ve(Na);
    if (!v)
      throw new Error("Missing pagination!");
    return v;
  }(), p = y(() => e.itemsPerPageOptions.map((v) => ({ ...v, title: n(v.title) })));
  return () => {
    var v;
    return d("div", { class: "v-data-table-footer" }, [(v = t.prepend) == null ? void 0 : v.call(t), d("div", { class: "v-data-table-footer__items-per-page" }, [d("span", null, [n(e.itemsPerPageText)]), d(Hs, { items: p.value, modelValue: u.value, "onUpdate:modelValue": (f) => c(Number(f)), density: "compact", variant: "outlined", "hide-details": !0 }, null)]), d("div", { class: "v-data-table-footer__info" }, [d("div", null, [n(e.pageText, i.value ? r.value + 1 : 0, s.value, i.value)])]), d("div", { class: "v-data-table-footer__pagination" }, [d(ut, { icon: e.firstIcon, variant: "plain", onClick: () => o.value = 1, disabled: o.value === 1, "aria-label": n(e.firstPageLabel) }, null), d(ut, { icon: e.prevIcon, variant: "plain", onClick: () => o.value = Math.max(1, o.value - 1), disabled: o.value === 1, "aria-label": n(e.prevPageLabel) }, null), e.showCurrentPage && d("span", { key: "page", class: "v-data-table-footer__page" }, [o.value]), d(ut, { icon: e.nextIcon, variant: "plain", onClick: () => o.value = Math.min(a.value, o.value + 1), disabled: o.value === a.value, "aria-label": n(e.nextPageLabel) }, null), d(ut, { icon: e.lastIcon, variant: "plain", onClick: () => o.value = a.value, disabled: o.value === a.value, "aria-label": n(e.lastPageLabel) }, null)])]);
  };
} }), cn = (Un = { align: { type: String, default: "start" }, fixed: Boolean, fixedOffset: [Number, String], height: [Number, String], lastFixed: Boolean, noPadding: Boolean, tag: String, width: [Number, String] }, Pl = (e, l) => {
  let { slots: t, attrs: n } = l;
  const o = e.tag ?? "td";
  return d(o, Z({ class: ["v-data-table__td", { "v-data-table-column--fixed": e.fixed, "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--no-padding": e.noPadding }, `v-data-table-column--align-${e.align}`], style: { height: X(e.height), width: X(e.width), left: X(e.fixedOffset || null) } }, n), { default: () => {
    var a;
    return [(a = t.default) == null ? void 0 : a.call(t)];
  } });
}, Pl.props = Un, Pl);
var Un, Pl;
const Ws = M({ headers: { type: Array, default: () => [] } }, "DataTable-header"), Mo = Symbol.for("vuetify:data-table-headers");
function No(e, l) {
  const t = K([]), n = K([]);
  J(() => e.headers, () => {
    var f, h, w;
    const a = e.headers.length ? Array.isArray(e.headers[0]) ? e.headers : [e.headers] : [], r = a.flatMap((m, x) => m.map((_) => ({ column: _, row: x }))), s = a.length, i = { title: "", sortable: !1 }, u = { ...i, width: 48 };
    if ((f = l == null ? void 0 : l.groupBy) != null && f.value.length) {
      const m = r.findIndex((x) => {
        let { column: _ } = x;
        return _.key === "data-table-group";
      });
      m < 0 ? r.unshift({ column: { ...i, key: "data-table-group", title: "Group", rowspan: s }, row: 0 }) : r.splice(m, 1, { column: { ...i, ...r[m].column }, row: r[m].row });
    }
    if ((h = l == null ? void 0 : l.showSelect) != null && h.value) {
      const m = r.findIndex((x) => {
        let { column: _ } = x;
        return _.key === "data-table-select";
      });
      m < 0 ? r.unshift({ column: { ...u, key: "data-table-select", rowspan: s }, row: 0 }) : r.splice(m, 1, { column: { ...u, ...r[m].column }, row: r[m].row });
    }
    if ((w = l == null ? void 0 : l.showExpand) != null && w.value) {
      const m = r.findIndex((x) => {
        let { column: _ } = x;
        return _.key === "data-table-expand";
      });
      m < 0 ? r.push({ column: { ...u, key: "data-table-expand", rowspan: s }, row: 0 }) : r.splice(m, 1, { column: { ...u, ...r[m].column }, row: r[m].row });
    }
    const c = mn(s).map(() => []), p = mn(s).fill(0);
    r.forEach((m) => {
      let { column: x, row: _ } = m;
      const g = x.key;
      for (let C = _; C <= _ + (x.rowspan ?? 1) - 1; C++)
        c[C].push({ ...x, key: g, fixedOffset: p[C], sortable: x.sortable ?? !!x.key }), p[C] += Number(x.width ?? 0);
    }), c.forEach((m) => {
      for (let x = m.length; x--; x >= 0)
        if (m[x].fixed)
          return void (m[x].lastFixed = !0);
    });
    const v = /* @__PURE__ */ new Set();
    t.value = c.map((m) => {
      const x = [];
      for (const _ of m)
        v.has(_.key) || (v.add(_.key), x.push(_));
      return x;
    }), n.value = c.at(-1) ?? [];
  }, { deep: !0, immediate: !0 });
  const o = { headers: t, columns: n };
  return ge(Mo, o), o;
}
function gl() {
  const e = ve(Mo);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Ro = M({ color: String, sticky: Boolean, multiSort: Boolean, sortAscIcon: { type: pe, default: "$sortAsc" }, sortDescIcon: { type: pe, default: "$sortDesc" }, ...nn() }, "VDataTableHeaders"), rl = q()({ name: "VDataTableHeaders", props: Ro(), setup(e, l) {
  let { slots: t, emit: n } = l;
  const { toggleSort: o, sortBy: a, isSorted: r } = function() {
    const C = ve(Ka);
    if (!C)
      throw new Error("Missing sort!");
    return C;
  }(), { someSelected: s, allSelected: i, selectAll: u, showSelectAll: c } = pl(), { columns: p, headers: v } = gl(), { loaderClasses: f } = an(e), h = (C, k) => {
    if (e.sticky || C.fixed)
      return { position: "sticky", zIndex: C.fixed ? 4 : e.sticky ? 3 : void 0, left: C.fixed ? X(C.fixedOffset) : void 0, top: e.sticky ? `calc(var(--v-table-header-height) * ${k})` : void 0 };
  };
  function w(C) {
    const k = a.value.find((E) => E.key === C.key);
    return k ? k.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
  }
  const { backgroundColorClasses: m, backgroundColorStyles: x } = vt(e, "color"), _ = y(() => ({ headers: v.value, columns: p.value, toggleSort: o, isSorted: r, sortBy: a.value, someSelected: s.value, allSelected: i.value, selectAll: u, getSortIcon: w, getFixedStyles: h })), g = (C) => {
    let { column: k, x: E, y: $ } = C;
    const F = k.key === "data-table-select" || k.key === "data-table-expand";
    return d(cn, { tag: "th", align: k.align, class: ["v-data-table__th", { "v-data-table__th--sortable": k.sortable, "v-data-table__th--sorted": r(k) }, f.value], style: { width: X(k.width), minWidth: X(k.width), ...h(k, $) }, colspan: k.colspan, rowspan: k.rowspan, onClick: k.sortable ? () => o(k) : void 0, lastFixed: k.lastFixed, noPadding: F }, { default: () => {
      var P;
      const B = `column.${k.key}`, b = { column: k, selectAll: u, isSorted: r, toggleSort: o, sortBy: a.value, someSelected: s.value, allSelected: i.value, getSortIcon: w };
      return t[B] ? t[B](b) : k.key === "data-table-select" ? ((P = t["column.data-table-select"]) == null ? void 0 : P.call(t, b)) ?? (c && d(ft, { modelValue: i.value, indeterminate: s.value && !i.value, "onUpdate:modelValue": u }, null)) : d("div", { class: "v-data-table-header__content" }, [d("span", null, [k.title]), k.sortable && d(he, { key: "icon", class: "v-data-table-header__sort-icon", icon: w(k) }, null), e.multiSort && r(k) && d("div", { key: "badge", class: ["v-data-table-header__sort-badge", ...m.value], style: x.value }, [a.value.findIndex((O) => O.key === k.key) + 1])]);
    } });
  };
  te(() => d(re, null, [t.headers ? t.headers(_.value) : v.value.map((C, k) => d("tr", null, [C.map((E, $) => d(g, { column: E, x: $, y: k }, null))])), e.loading && d("tr", { class: "v-data-table-progress" }, [d("th", { colspan: p.value.length }, [d(ro, { name: "v-data-table-progress", active: !0, color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0 }, { default: t.loader })])])]));
} }), Ks = M({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"), Us = q()({ name: "VDataTableGroupHeaderRow", props: Ks(), setup(e, l) {
  let { slots: t } = l;
  const { isGroupOpen: n, toggleGroup: o, extractRows: a } = Ia(), { isSelected: r, isSomeSelected: s, select: i } = pl(), { columns: u } = gl(), c = y(() => a([e.item]));
  return () => d("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((p) => {
    var v, f;
    if (p.key === "data-table-group") {
      const h = n(e.item) ? "$expand" : "$next", w = () => o(e.item);
      return ((v = t["data-table-group"]) == null ? void 0 : v.call(t, { item: e.item, count: c.value.length, props: { icon: h, onClick: w } })) ?? d(cn, { class: "v-data-table-group-header-row__column" }, { default: () => [d(ut, { size: "small", variant: "text", icon: h, onClick: w }, null), d("span", null, [e.item.value]), d("span", null, [Ut("("), c.value.length, Ut(")")])] });
    }
    if (p.key === "data-table-select") {
      const h = r(c.value), w = s(c.value) && !h, m = (x) => i(c.value, x);
      return ((f = t["data-table-select"]) == null ? void 0 : f.call(t, { props: { modelValue: h, indeterminate: w, "onUpdate:modelValue": m } })) ?? d("td", null, [d(ft, { modelValue: h, indeterminate: w, "onUpdate:modelValue": m }, null)]);
    }
    return d("td", null, null);
  })]);
} }), qs = pt({ name: "VDataTableRow", props: M({ index: Number, item: Object, onClick: Function }, "VDataTableRow")(), setup(e, l) {
  let { slots: t } = l;
  const { isSelected: n, toggleSelect: o } = pl(), { isExpanded: a, toggleExpand: r } = Aa(), { columns: s } = gl();
  te(() => d("tr", { class: ["v-data-table__tr", { "v-data-table__tr--clickable": !!e.onClick }], onClick: e.onClick }, [e.item && s.value.map((i, u) => d(cn, { align: i.align, fixed: i.fixed, fixedOffset: i.fixedOffset, lastFixed: i.lastFixed, noPadding: i.key === "data-table-select" || i.key === "data-table-expand", width: i.width }, { default: () => {
    var f, h;
    const c = e.item, p = `item.${i.key}`, v = { index: e.index, item: e.item, columns: s.value, isSelected: n, toggleSelect: o, isExpanded: a, toggleExpand: r };
    return t[p] ? t[p](v) : i.key === "data-table-select" ? ((f = t["item.data-table-select"]) == null ? void 0 : f.call(t, v)) ?? d(ft, { disabled: !c.selectable, modelValue: n([c]), onClick: fn(() => o(c), ["stop"]) }, null) : i.key === "data-table-expand" ? ((h = t["item.data-table-expand"]) == null ? void 0 : h.call(t, v)) ?? d(ut, { icon: a(c) ? "$collapse" : "$expand", size: "small", variant: "text", onClick: fn(() => r(c), ["stop"]) }, null) : Se(c.columns, i.key);
  } }))]));
} }), jo = M({ loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowHeight: Number, "onClick:row": Function }, "VDataTableRows"), sl = q()({ name: "VDataTableRows", props: jo(), setup(e, l) {
  let { emit: t, slots: n } = l;
  const { columns: o } = gl(), { expandOnClick: a, toggleExpand: r, isExpanded: s } = Aa(), { isSelected: i, toggleSelect: u } = pl(), { toggleGroup: c, isGroupOpen: p } = Ia(), { t: v } = yt();
  return te(() => {
    var f;
    return e.loading && n.loading ? d("tr", { class: "v-data-table-rows-loading", key: "loading" }, [d("td", { colspan: o.value.length }, [n.loading()])]) : e.loading || e.items.length || e.hideNoData ? d(re, null, [e.items.map((h, w) => {
      var _;
      if (h.type === "group")
        return n["group-header"] ? n["group-header"]({ index: w, item: h, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: u, toggleGroup: c, isGroupOpen: p }) : d(Us, { key: `group-header_${h.id}`, item: h }, n);
      const m = { index: w, item: h, columns: o.value, isExpanded: s, toggleExpand: r, isSelected: i, toggleSelect: u }, x = { ...m, props: { key: `item_${h.value}`, onClick: a.value || e["onClick:row"] ? (g) => {
        var C;
        a.value && r(h), (C = e["onClick:row"]) == null || C.call(e, g, { item: h });
      } : void 0, index: w, item: h } };
      return d(re, null, [n.item ? n.item(x) : d(qs, x.props, n), s(h) && ((_ = n["expanded-row"]) == null ? void 0 : _.call(n, m))]);
    })]) : d("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [d("td", { colspan: o.value.length }, [((f = n["no-data"]) == null ? void 0 : f.call(n)) ?? v(e.noDataText)])]);
  }), {};
} }), zo = M({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, ...se(), ...He(), ...xe(), ...be() }, "VTable"), il = q()({ name: "VTable", props: zo(), setup(e, l) {
  let { slots: t } = l;
  const { themeClasses: n } = Ce(e), { densityClasses: o } = We(e);
  return te(() => d(e.tag, { class: ["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!t.top, "v-table--has-bottom": !!t.bottom, "v-table--hover": e.hover }, n.value, o.value, e.class], style: e.style }, { default: () => {
    var a, r, s;
    return [(a = t.top) == null ? void 0 : a.call(t), t.default ? d("div", { class: "v-table__wrapper", style: { height: X(e.height) } }, [d("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
  } })), {};
} }), Ys = M({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataTable-items");
function Xs(e, l, t) {
  return l.map((n, o) => function(a, r, s, i) {
    return { type: "item", index: s, value: a.returnObject ? r : Se(r, a.itemValue), selectable: Se(r, a.itemSelectable, !0), columns: i.reduce((u, c) => (u[c.key] = Se(r, c.value ?? c.key), u), {}), raw: r };
  }(e, n, o, t));
}
function Go(e, l) {
  return { items: y(() => Xs(e, e.items, l.value)) };
}
const Ho = M({ ...jo(), width: [String, Number], search: String, ...Mr(), ...Nr(), ...Ws(), ...Ys(), ...jr(), ...zr(), ...Ro(), ...zo() }, "DataTable"), Js = M({ ...Ma(), ...Ho(), ...Tr(), ...un() }, "VDataTable"), Zs = q()({ name: "VDataTable", props: Js(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:groupBy": (e) => !0, "update:expanded": (e) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Va(e), { sortBy: a, multiSort: r, mustSort: s } = Ua(e), { page: i, itemsPerPage: u } = Ra(e), { columns: c, headers: p } = No(e, { groupBy: o, showSelect: H(e, "showSelect"), showExpand: H(e, "showExpand") }), { items: v } = Go(e, c), f = H(e, "search"), { filteredItems: h } = Lr(e, v, f, { transform: (z) => z.columns }), { toggleSort: w } = qa({ sortBy: a, multiSort: r, mustSort: s, page: i }), { sortByWithGroups: m, opened: x, extractRows: _, isGroupOpen: g, toggleGroup: C } = Ea({ groupBy: o, sortBy: a }), { sortedItems: k } = Gr(e, h, m), { flatItems: E } = Ta(k, o, x), $ = y(() => E.value.length), { startIndex: F, stopIndex: B, pageCount: b, setItemsPerPage: P } = ja({ page: i, itemsPerPage: u, itemsLength: $ }), { paginatedItems: O } = function(z) {
    const { items: R, startIndex: U, stopIndex: le, itemsPerPage: ee } = z;
    return { paginatedItems: y(() => ee.value <= 0 ? R.value : R.value.slice(U.value, le.value)) };
  }({ items: E, startIndex: F, stopIndex: B, itemsPerPage: u }), A = y(() => _(O.value)), { isSelected: V, select: I, selectAll: L, toggleSelect: N, someSelected: T, allSelected: G } = Wa(e, { allItems: v, currentPage: A }), { isExpanded: j, toggleExpand: W } = Fa(e);
  La({ page: i, itemsPerPage: u, sortBy: a, groupBy: o, search: f }), Je({ VDataTableRows: { hideNoData: H(e, "hideNoData"), noDataText: H(e, "noDataText"), loading: H(e, "loading"), loadingText: H(e, "loadingText") } });
  const D = y(() => ({ page: i.value, itemsPerPage: u.value, sortBy: a.value, pageCount: b.value, toggleSort: w, setItemsPerPage: P, someSelected: T.value, allSelected: G.value, isSelected: V, select: I, selectAll: L, toggleSelect: N, isExpanded: j, toggleExpand: W, isGroupOpen: g, toggleGroup: C, items: A.value, groupedItems: O.value, columns: c.value, headers: p.value }));
  return te(() => {
    const [z] = ol.filterProps(e), [R] = rl.filterProps(e), [U] = sl.filterProps(e), [le] = il.filterProps(e);
    return d(il, Z({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, le), { top: () => {
      var ee;
      return (ee = n.top) == null ? void 0 : ee.call(n, D.value);
    }, default: () => {
      var ee, Q, ce, ke;
      return n.default ? n.default(D.value) : d(re, null, [(ee = n.colgroup) == null ? void 0 : ee.call(n, D.value), d("thead", null, [d(rl, R, n)]), (Q = n.thead) == null ? void 0 : Q.call(n, D.value), d("tbody", null, [n.body ? n.body(D.value) : d(sl, Z(U, { items: O.value }), n)]), (ce = n.tbody) == null ? void 0 : ce.call(n, D.value), (ke = n.tfoot) == null ? void 0 : ke.call(n, D.value)]);
    }, bottom: () => n.bottom ? n.bottom(D.value) : d(re, null, [d(ol, z, { prepend: n["footer.prepend"] })]) });
  }), {};
} }), Qs = M({ itemsLength: { type: [Number, String], required: !0 }, ...Ma(), ...Ho(), ...un() }, "VDataTableServer"), ei = q()({ name: "VDataTableServer", props: Qs(), emits: { "update:modelValue": (e) => !0, "update:page": (e) => !0, "update:itemsPerPage": (e) => !0, "update:sortBy": (e) => !0, "update:options": (e) => !0, "update:expanded": (e) => !0, "update:groupBy": (e) => !0, "click:row": (e, l) => !0 }, setup(e, l) {
  let { emit: t, slots: n } = l;
  const { groupBy: o } = Va(e), { sortBy: a, multiSort: r, mustSort: s } = Ua(e), { page: i, itemsPerPage: u } = Ra(e), c = y(() => parseInt(e.itemsLength, 10)), { columns: p, headers: v } = No(e, { groupBy: o, showSelect: H(e, "showSelect"), showExpand: H(e, "showExpand") }), { items: f } = Go(e, p), { toggleSort: h } = qa({ sortBy: a, multiSort: r, mustSort: s, page: i }), { opened: w, isGroupOpen: m, toggleGroup: x, extractRows: _ } = Ea({ groupBy: o, sortBy: a }), { pageCount: g, setItemsPerPage: C } = ja({ page: i, itemsPerPage: u, itemsLength: c }), { flatItems: k } = Ta(f, o, w), { isSelected: E, select: $, selectAll: F, toggleSelect: B, someSelected: b, allSelected: P } = Wa(e, { allItems: f, currentPage: f }), { isExpanded: O, toggleExpand: A } = Fa(e), V = y(() => _(f.value));
  La({ page: i, itemsPerPage: u, sortBy: a, groupBy: o, search: H(e, "search") }), ge("v-data-table", { toggleSort: h, sortBy: a }), Je({ VDataTableRows: { hideNoData: H(e, "hideNoData"), noDataText: H(e, "noDataText"), loading: H(e, "loading"), loadingText: H(e, "loadingText") } });
  const I = y(() => ({ page: i.value, itemsPerPage: u.value, sortBy: a.value, pageCount: g.value, toggleSort: h, setItemsPerPage: C, someSelected: b.value, allSelected: P.value, isSelected: E, select: $, selectAll: F, toggleSelect: B, isExpanded: O, toggleExpand: A, isGroupOpen: m, toggleGroup: x, items: V.value, groupedItems: k.value, columns: p.value, headers: v.value }));
  te(() => {
    const [L] = ol.filterProps(e), [N] = rl.filterProps(e), [T] = sl.filterProps(e), [G] = il.filterProps(e);
    return d(il, Z({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, G), { top: () => {
      var j;
      return (j = n.top) == null ? void 0 : j.call(n, I.value);
    }, default: () => {
      var j, W, D, z;
      return n.default ? n.default(I.value) : d(re, null, [(j = n.colgroup) == null ? void 0 : j.call(n, I.value), d("thead", { class: "v-data-table__thead", role: "rowgroup" }, [d(rl, Z(N, { sticky: e.fixedHeader }), n)]), (W = n.thead) == null ? void 0 : W.call(n, I.value), d("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [n.body ? n.body(I.value) : d(sl, Z(T, { items: k.value }), n)]), (D = n.tbody) == null ? void 0 : D.call(n, I.value), (z = n.tfoot) == null ? void 0 : z.call(n, I.value)]);
    }, bottom: () => n.bottom ? n.bottom(I.value) : d(ol, L, { prepend: n["footer.prepend"] }) });
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
function xt(e, ...l) {
  if (!l.length)
    return e;
  const t = l.shift();
  if (_l(e) && _l(t))
    for (const n in t)
      _l(t[n]) ? (e[n] || Object.assign(e, { [n]: {} }), xt(e[n], t[n])) : Object.assign(e, { [n]: t[n] });
  return xt(e, ...l);
}
const ti = (e) => {
  const { colors: l, level: t, prop: n = "default", theme: o, type: a } = e, r = { ...l[n] }, s = l.percentageDirection;
  if (r === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let i = function(u, c, p) {
    let v = 100, f = u.percentageChange ?? 0;
    return isNaN(f) && (v = 100), f *= c, (p === "desc" || p === "descending") && (v = 100 - f), p !== "asc" && p !== "ascending" || (v = 0 + f), v < 0 && (v = 0), v > 100 && (v = 100), isNaN(v) && (v = 100), v;
  }(l, t - 1, s);
  return a || Object.entries(r).forEach(([u, c]) => {
    let p = o.global.current.value.colors[c] ?? c;
    if (p || (p = "transparent"), p === "transparent" || p === "none" || p === "inherit" || p === "currentColor" || p === "initial" || p === "unset")
      return void (r[u] = p);
    if (u === "text" && t === 0 && s === "asc" && (i = 100), p.includes("--v-theme"))
      return void (r[u] = `rgb(var(${p}))`);
    const v = `/ ${i}%`, f = Yn(p);
    if (f.includes("/"))
      return r[u] = `hsl(${f})`;
    r[u] = `hsl(${Yn(p)} ${v})`;
  }), r;
};
function Yn(e) {
  let l = function(c) {
    const p = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let v = c;
    return Object.entries(p).forEach(([f, h]) => {
      c.toLowerCase() != f.toLowerCase() || (v = h);
    }), v;
  }(e), t = 0, n = 0, o = 0, a = 0, r = 0, s = 0;
  if (l.substring(0, 1) === "#")
    l = function(c) {
      let p = c.replace("#", "");
      p.length === 3 && (p = p.split("").map((w) => w + w).join(""));
      const v = parseInt(p.substring(0, 2), 16), f = parseInt(p.substring(2, 4), 16), h = parseInt(p.substring(4, 6), 16);
      return [v, f, h];
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
  const r = ti({ colors: l, level: t, prop: n, theme: o, type: a });
  return a ? r[a] : r;
}, Ko = dl.reduce((e, l) => (e[l] = { type: [Boolean, String, Number], default: !1 }, e), {}), Uo = dl.reduce((e, l) => (e["offset" + _t(l)] = { type: [String, Number], default: null }, e), {}), qo = dl.reduce((e, l) => (e["order" + _t(l)] = { type: [String, Number], default: null }, e), {}), Xn = { col: Object.keys(Ko), offset: Object.keys(Uo), order: Object.keys(qo) };
function li(e, l, t) {
  let n = e;
  if (t != null && t !== !1)
    return l && (n += `-${l.replace(e, "")}`), e === "col" && (n = "v-" + n), (e !== "col" || t !== "" && t !== !0) && (n += `-${t}`), n.toLowerCase();
}
const ni = ["auto", "start", "end", "center", "baseline", "stretch"], ai = M({ cols: { type: [Boolean, String, Number], default: !1 }, ...Ko, offset: { type: [String, Number], default: null }, ...Uo, order: { type: [String, Number], default: null }, ...qo, alignSelf: { type: String, default: null, validator: (e) => ni.includes(e) }, ...se(), ...xe() }, "VCol"), ct = q()({ name: "VCol", props: ai(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => {
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
    return mt(e.tag, { class: [n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), dn = ["start", "end", "center"], Yo = ["space-between", "space-around", "space-evenly"];
function pn(e, l) {
  return dl.reduce((t, n) => (t[e + _t(n)] = l(), t), {});
}
const oi = [...dn, "baseline", "stretch"], Xo = (e) => oi.includes(e), Jo = pn("align", () => ({ type: String, default: null, validator: Xo })), ri = [...dn, ...Yo], Zo = (e) => ri.includes(e), Qo = pn("justify", () => ({ type: String, default: null, validator: Zo })), si = [...dn, ...Yo, "stretch"], er = (e) => si.includes(e), tr = pn("alignContent", () => ({ type: String, default: null, validator: er })), Jn = { align: Object.keys(Jo), justify: Object.keys(Qo), alignContent: Object.keys(tr) }, ii = { align: "align", justify: "justify", alignContent: "align-content" };
function ui(e, l, t) {
  let n = ii[e];
  if (t != null)
    return l && (n += `-${l.replace(e, "")}`), n += `-${t}`, n.toLowerCase();
}
const ci = M({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Xo }, ...Jo, justify: { type: String, default: null, validator: Zo }, ...Qo, alignContent: { type: String, default: null, validator: er }, ...tr, ...se(), ...xe() }, "VRow"), lr = q()({ name: "VRow", props: ci(), setup(e, l) {
  let { slots: t } = l;
  const n = y(() => {
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
    return mt(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (o = t.default) == null ? void 0 : o.call(t));
  };
} }), di = ["colspan"], pi = Xe({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, skeltonType: {}, textLoader: { type: Boolean, default: !0 } }, setup(e) {
  const l = e, t = cl(), n = y(() => {
    if (typeof l.colors == "object" && l.colors !== null)
      return yl({ colors: l.colors, level: l.level, prop: "loader", themeColors: t });
  }), o = y(() => ((g) => {
    const { isLinearOnly: C, loaderHeight: k } = g;
    let E = {};
    return S(C) && (E = { height: S(k), minHeight: S(k) }), E;
  })({ isLinearOnly: c, loaderHeight: u })), a = y(() => ((g) => {
    const { isLinearOnly: C, loaderHeight: k } = g;
    return S(C) ? { height: S(k), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: c, loaderHeight: u })), r = y(() => ({ [`${ne}--loader-tr`]: !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), s = y(() => ({ [`${ne}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), i = y(() => {
    var g;
    return ((g = n.value) == null ? void 0 : g.linear) || "";
  }), u = y(() => function(g) {
    return jl(g) || "2px";
  }(l.height)), c = y(() => {
    let g = !1;
    return l.loaderType !== null && l.loaderType !== !1 && (g = function(C) {
      let k = !1;
      return C === "linear" && (k = !0), Array.isArray(C) && (k = C.length === 1 && C[0] === "linear"), k;
    }(l.loaderType)), g;
  }), p = y(() => {
    var g;
    return (g = n.value) == null ? void 0 : g.bg;
  }), v = y(() => {
    var g;
    return (g = n.value) == null ? void 0 : g.circular;
  }), f = y(() => l.skeltonType || "heading@1"), h = y(() => l.loading), w = y(() => {
    var g;
    return { color: (g = n.value) == null ? void 0 : g.text };
  }), m = y(() => l.loadingText || "Loading..."), x = (g) => {
    const C = l.loaderType;
    return Array.isArray(C) ? C.indexOf(g) : 1;
  }, _ = (g) => {
    const C = l.loaderType;
    return g === l.loaderType || !!Array.isArray(C) && C.includes(g);
  };
  return (g, C) => {
    const k = ua("v-skeleton-loader");
    return Y(), ie("tr", { class: oe(S(r)), style: $e(S(o)) }, [Re("td", { class: "px-0 ma-0", colspan: g.colspan, style: $e(S(a)) }, [g.loading ? (Y(), me(lr, { key: 0, class: oe(S(s)), "no-gutters": "" }, { default: ae(() => [_("linear") ? (Y(), me(ct, { key: 0, class: "pa-0 ma-0", order: x("linear") }, { default: ae(() => [d(oo, { color: S(i), height: S(u), indeterminate: "" }, null, 8, ["color", "height"])]), _: 1 }, 8, ["order"])) : ye("", !0), _("circular") ? (Y(), me(ct, { key: 1, class: "pa-0 my-2", order: x("circular") }, { default: ae(() => [d(lo, { "bg-color": S(p), color: S(v), indeterminate: "", size: g.size }, null, 8, ["bg-color", "color", "size"])]), _: 1 }, 8, ["order"])) : ye("", !0), _("skelton") ? (Y(), me(ct, { key: 2, class: "pa-0 ma-0", order: x("skelton") }, { default: ae(() => [d(k, { loading: S(h), type: S(f) }, null, 8, ["loading", "type"])]), _: 1 }, 8, ["order"])) : ye("", !0), _("text") ? (Y(), me(ct, { key: 3, class: "my-2", order: x("text"), style: $e(S(w)) }, { default: ae(() => [Ut(vr(S(m)), 1)]), _: 1 }, 8, ["order", "style"])) : ye("", !0)]), _: 1 }, 8, ["class"])) : ye("", !0)], 12, di)], 6);
  };
} }), vn = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, Zn = vn(pi, [["__scopeId", "data-v-97f9388c"]]), vi = Xe({ __name: "BottomSlot", props: { slotProps: {} }, setup: (e) => (l, t) => de(l.$slots, "bottom") }), nr = (e) => {
  const { align: l } = e;
  return { "d-flex align-center": !0, [`justify-${l}`]: l, "justify-start": !l };
}, ar = (e) => {
  const { level: l } = e;
  return { "d-flex": !0, [`${ne}--header-select-all-checkbox`]: !0, [`${ne}--header-select-all-checkbox-${l}`]: !0 };
}, fi = ["colspan"], mi = ["colspan"], gi = ["colspan", "innerHTML"], yi = ["colspan", "onClick"], hi = ["innerHTML"], bi = Xe({ __name: "HeadersSlot", props: { isTheadSlot: { type: Boolean, default: !1 }, slotProps: {}, colors: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = At(), o = ve(Symbol.for("vuetify:icons")), a = cl(), r = K(t.slotProps.allRowsSelected), s = y(() => t.slotProps.allRowsSelected || r.value), i = y(() => t.slotProps.columns), u = y(() => t.slotProps.someSelected), c = y(() => u.value && !t.slotProps.allRowsSelected), p = K("$sortAsc"), v = y(() => ((g) => {
    const { level: C } = g;
    return { [`${ne}--header-row`]: !0, [`${ne}--header-row-${C}`]: !0 };
  })({ level: t.level })), f = (g, C = "") => ((k) => {
    const { colors: E, column: $, level: F, slotName: B = "" } = k;
    return { [`${ne}--header-row-th`]: !0, [`${ne}--header-row-th-${B}`]: B !== "", [`${ne}--header-row-th-${B}-${F}`]: B, [`${ne}--header-row-th-${F}`]: !0, [`${ne}--header-row-th-sortable`]: $.sortable, [`${ne}--header-row-th-sortable-default-color`]: $.sortable && E === !1, [`${$.cellClass}`]: $.cellClass };
  })({ colors: t.colors, column: g, level: t.level, slotName: C }), h = (g, C = !1) => ((k) => {
    const { colors: E, column: $, dataTableExpand: F = !1, level: B, theme: b } = k, P = { minWidth: $.width ? jl($.width) : "auto", width: $.width ? jl($.width) : "auto" };
    if (F && !$.width && (P.width = "48px", P.minWidth = "48px"), E === !1 || E === null)
      return P;
    const O = yl({ colors: E, level: B, prop: "header", themeColors: b });
    return P.backgroundColor = O.bg, P.color = O.text, P;
  })({ colors: t.colors, column: g, dataTableExpand: C, level: t.level, theme: a });
  J(r, (g) => {
    t.slotProps.selectAll(g), l("click:selectAll", r.value);
  }), J(s, (g) => {
    r.value = g;
  }), J(u, (g) => {
    g || (r.value = !1);
  });
  const w = y(() => ar({ level: t.level })), m = (g) => ((C) => {
    const { iconOptions: k, key: E, level: $, sortBy: F } = C;
    return { "fa-fw": (k == null ? void 0 : k.defaultSet) === "fa", "mx-1": !0, [`${ne}--header-row-th-sortable-sort-icon`]: !0, [`${ne}--header-row-th-sortable-sort-icon-${$}`]: !0, [`${ne}--header-row-th-sortable-sort-icon-desc`]: qn(F, E) === "desc", [`${ne}--header-row-th-sortable-sort-icon-asc`]: qn(F, E) === "asc" };
  })({ iconOptions: o, key: g, level: t.level, sortBy: t.sortBy }), x = y(() => (o == null ? void 0 : o.defaultSet) === "fa" ? (p.value = "fas fa-arrow-up", "small") : (p.value = "$sortAsc", "default"));
  function _(g) {
    return Wo(g);
  }
  return (g, C) => (Y(), ie("tr", { class: oe(S(v)) }, [(Y(!0), ie(re, null, De(S(i), (k) => {
    return Y(), ie(re, { key: k }, [S(n)[`column.${k.key}`] ? (Y(), ie("th", { key: 0, class: oe(f(k, k.key)), colspan: k.colspan || 1, style: $e(h(k, !0)) }, [de(g.$slots, `column.${k.key}`, { column: k }, void 0, !0)], 14, fi)) : k.key === "data-table-select" || k.key === "data-table-select" && g.showSelect ? (Y(), ie("th", { key: 1, class: oe(f(k, "header-data-table-select")), colspan: k.colspan || 1, style: $e(h(k, !0)) }, [d(sn, { modelValue: S(r), "onUpdate:modelValue": C[0] || (C[0] = ($) => ze(r) ? r.value = $ : null), class: oe(S(w)), density: g.density, focused: !1, indeterminate: S(c) }, null, 8, ["modelValue", "class", "density", "indeterminate"])], 14, mi)) : k.key === "data-table-expand" ? (Y(), ie("th", { key: 2, class: oe(f(k, "data-table-expand")), colspan: k.colspan || 1, style: $e(h(k, !0)), innerHTML: _(k) }, null, 14, gi)) : (Y(), ie("th", { key: 3, class: oe(f(k)), colspan: k.colspan || 1, style: $e(h(k)), onClick: ($) => function(F) {
      F.sortable && t.slotProps.toggleSort(F);
    }(k) }, [Re("div", { class: oe((E = k.align, nr({ align: E }))) }, [Re("span", { innerHTML: _(k) }, null, 8, hi), k.sortable && S(n)["header.sortIcon"] ? (Y(), ie("span", { key: 0, class: oe(m(k.key)) }, [de(g.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : k.sortable ? (Y(), me(he, { key: 1, class: oe(m(k.key)), icon: S(p), size: S(x) }, null, 8, ["class", "icon", "size"])) : ye("", !0)], 2)], 14, yi))], 64);
    var E;
  }), 128))], 2));
} }), Si = vn(bi, [["__scopeId", "data-v-59419b28"]]), wi = ["colspan"], xi = ["colspan"], ki = ["colspan"], Ci = ["colspan"], Bi = ["innerHTML"], Pi = Xe({ __name: "ItemSlot", props: { expandOnClick: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: l }) {
  const t = e, n = At(), o = ve(Symbol.for("vuetify:icons")), a = y(() => t.slotProps.columns), r = y(() => t.slotProps.index), s = y(() => t.slotProps.isExpanded), i = y(() => t.slotProps.item), u = y(() => t.slotProps.level), c = y(() => t.slotProps.toggleExpand), p = y(() => t.slotProps.toggleSelect), v = y(() => ((_) => {
    const { expandOnClick: g, level: C, levels: k } = _;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": g && C < k, [`${ne}--body-row`]: !0, [`${ne}--body-row-${C}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), f = (_) => ((g) => {
    const { column: C, elm: k, level: E } = g;
    return { [`${ne}--${k}-row-td`]: !0, [`${ne}--${k}-row-td-${E}`]: !0, [`${C.cellClass}`]: C.cellClass };
  })({ column: _, elm: "body", level: t.level });
  function h(_) {
    const { item: g, level: C, toggleExpand: k } = _;
    if (!(t.level >= t.levels)) {
      if (_.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", _.$event);
      }
      C === t.level && k(g), l("update:expanded", _);
    }
  }
  const w = K(!1);
  J(() => t.slotProps.allRowsSelected, () => {
    w.value = t.slotProps.allRowsSelected;
  });
  const m = y(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "x-small" : "default");
  function x(_, g) {
    return function(C, k) {
      const E = Se(C, k.key);
      return k.renderItem ? k.renderItem(E, C, k) : E;
    }(_.raw, g);
  }
  return (_, g) => (Y(), ie("tr", { class: oe(S(v)), onClick: g[3] || (g[3] = (C) => h({ columns: S(a), index: S(r), isExpanded: S(s), item: S(i), level: S(u), toggleExpand: S(c), $event: C })) }, [(Y(!0), ie(re, null, De(S(a), (C) => (Y(), ie(re, { key: C }, [_.$slots[`item.${C.key}`] ? (Y(), ie("td", { key: 0, class: oe(f(C)), colspan: C.colspan || 1 }, [de(_.$slots, `item.${C.key}`, { columns: S(a), index: S(r), item: S(i) }, void 0, !0)], 10, wi)) : C.key === "data-table-select" || C.key === "data-table-select" && t.showSelect ? (Y(), ie("td", { key: 1, class: oe(f(C)), colspan: C.colspan || 1 }, [S(n)["item.data-table-select"] ? de(_.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : ye("", !0), d(sn, { modelValue: S(w), "onUpdate:modelValue": g[0] || (g[0] = (k) => ze(w) ? w.value = k : null), class: "d-flex v-simple-checkbox", density: _.density, onClick: g[1] || (g[1] = (k) => function(E) {
    const { item: $, level: F, toggleSelect: B } = E;
    F === t.level && B($), l("click:row:checkbox", $);
  }({ columns: S(a), index: S(r), item: S(i), level: S(u), toggleSelect: S(p) })) }, null, 8, ["modelValue", "density"])], 10, xi)) : C.key === "data-table-expand" || C.key === "data-table-expand" && _.showExpand ? (Y(), ie("td", { key: 2, class: oe(f(C)), colspan: C.colspan || 1 }, [S(u) < _.levels ? (Y(), ie("div", { key: 0, class: oe(["v-drilldown-table--expand-icon", S(s)(S(i)) ? "rotate-180" : ""]), onClick: g[2] || (g[2] = (k) => h({ columns: S(a), index: S(r), isExpanded: S(s), item: S(i), level: S(u), toggleExpand: S(c) })) }, [_.$slots["item.data-table-expand"] ? de(_.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (Y(), me(he, { key: 1, icon: "$expand", size: S(m) }, null, 8, ["size"]))], 2)) : ye("", !0)], 10, ki)) : (Y(), ie("td", { key: 3, class: oe(f(C)), colspan: C.colspan || 1 }, [Re("span", { innerHTML: x(S(i), C) }, null, 8, Bi)], 10, Ci))], 64))), 128))], 2));
} }), _i = vn(Pi, [["__scopeId", "data-v-301ef7e6"]]), Fi = ["colspan"], Ai = ["colspan"], $i = ["colspan", "innerHTML"], Vi = ["colspan", "innerHTML"], Ei = ["colspan"], Ii = ["innerHTML"], Oi = Xe({ __name: "TfootSlot", props: { footers: {}, slotProps: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(e, { emit: l }) {
  const t = e, n = At(), o = cl(), a = K(t.slotProps.allRowsSelected), r = y(() => t.slotProps.allRowsSelected || a.value), s = y(() => t.footers.length ? t.footers : t.slotProps.columns), i = y(() => t.slotProps.someSelected), u = y(() => i.value && !t.slotProps.allRowsSelected), c = y(() => ((m) => {
    const { level: x } = m;
    return { [`${ne}--tfoot`]: !0, [`${ne}--tfoot-${x}`]: !0 };
  })({ level: t.level })), p = y(() => ((m) => {
    const { level: x } = m;
    return { [`${ne}--tfoot-row`]: !0, [`${ne}--tfoot-row-${x}`]: !0 };
  })({ level: t.level })), v = (m, x = "") => ((_) => {
    const { column: g, level: C, slotName: k = "" } = _;
    return { [`${ne}--tfoot-row-td`]: !0, [`${ne}--tfoot-row-td-${k}`]: k !== "", [`${ne}--tfoot-row-td-${k}-${C}`]: k, [`${ne}--tfoot-row-td-${C}`]: !0, [`${g.cellClass}`]: g.cellClass };
  })({ column: m, level: t.level, slotName: x }), f = y(() => ((m) => {
    const { colors: x, elm: _, level: g, theme: C } = m;
    if (x === !1 || x === null)
      return {};
    const k = yl({ colors: x, level: g, prop: _, themeColors: C });
    return { backgroundColor: k.bg, color: k.text };
  })({ colors: t.colors, elm: "footer", level: t.level, theme: o }));
  J(a, (m) => {
    t.slotProps.selectAll(m), l("click:selectAll", a.value);
  }), J(r, (m) => {
    a.value = m;
  }), J(i, (m) => {
    m || (a.value = !1);
  });
  const h = y(() => ar({ level: t.level }));
  function w(m) {
    return Wo(m);
  }
  return (m, x) => {
    var _;
    return (_ = S(s)) != null && _.length ? (Y(), ie("tfoot", { key: 0, class: oe(S(c)) }, [Re("tr", { class: oe(S(p)) }, [(Y(!0), ie(re, null, De(S(s), (g) => {
      return Y(), ie(re, { key: g }, [S(n)[`tfoot.${g.key}`] ? (Y(), ie("th", { key: 0, class: oe(v(g, g.key)), colspan: g.colspan || 1, style: $e(S(f)) }, [de(m.$slots, `tfoot.${g.key}`, { column: g })], 14, Fi)) : g.key === "data-table-select" ? (Y(), ie("th", { key: 1, class: oe(v(g, "tfoot-data-table-select")), colspan: g.colspan || 1, style: $e(S(f)) }, [d(sn, { modelValue: S(a), "onUpdate:modelValue": x[0] || (x[0] = (k) => ze(a) ? a.value = k : null), class: oe(S(h)), density: m.density, focused: !1, indeterminate: S(u) }, null, 8, ["modelValue", "class", "density", "indeterminate"])], 14, Ai)) : g.key === "data-table-expand" ? (Y(), ie("th", { key: 2, class: oe(v(g, "tfoot-data-table-expand")), colspan: g.colspan || 1, style: $e(S(f)), innerHTML: w(g) }, null, 14, $i)) : g.renderFooterCell ? (Y(), ie("th", { key: 3, class: oe(v(g)), colspan: g.colspan || 1, style: $e(S(f)), innerHTML: w(g) }, null, 14, Vi)) : (Y(), ie("th", { key: 4, class: oe(v(g)), colspan: g.colspan || 1, style: $e(S(f)) }, [Re("div", { class: oe((C = g.align, nr({ align: C }))) }, [Re("span", { innerHTML: w(g) }, null, 8, Ii)], 2)], 14, Ei))], 64);
      var C;
    }), 128))], 2)], 2)) : ye("", !0);
  };
} });
function Qn(e) {
  return typeof e == "function" ? e() : S(e);
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
    return t && a(t), s <= 0 || i !== void 0 && i <= 0 ? (n && (a(n), n = null), Promise.resolve(r())) : new Promise((u, c) => {
      o = l.rejectOnCancel ? c : u, i && !n && (n = setTimeout(() => {
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
    return new Promise((u, c) => {
      Promise.resolve(r(() => s.apply(this, i), { fn: s, thisArg: this, args: i })).then(u).catch(c);
    });
  }), a);
  var r, s;
}
var ji = Object.defineProperty, zi = Object.defineProperties, Gi = Object.getOwnPropertyDescriptors, Gt = Object.getOwnPropertySymbols, la = Object.prototype.hasOwnProperty, na = Object.prototype.propertyIsEnumerable, aa = (e, l, t) => l in e ? ji(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
function or(e, l, t = {}) {
  const n = t, { debounce: o = 0, maxWait: a } = n, r = ((u, c) => {
    var p = {};
    for (var v in u)
      la.call(u, v) && c.indexOf(v) < 0 && (p[v] = u[v]);
    if (u != null && Gt)
      for (var v of Gt(u))
        c.indexOf(v) < 0 && na.call(u, v) && (p[v] = u[v]);
    return p;
  })(n, ["debounce", "maxWait"]);
  return Ri(e, l, (s = ((u, c) => {
    for (var p in c || (c = {}))
      la.call(c, p) && aa(u, p, c[p]);
    if (Gt)
      for (var p of Gt(c))
        na.call(c, p) && aa(u, p, c[p]);
    return u;
  })({}, r), i = { eventFilter: Ti(o, { maxWait: a }) }, zi(s, Gi(i))));
  var s, i;
}
const St = /* @__PURE__ */ new Map(), Hi = Xe({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchProps: { default: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "comfortable", variant: "underlined" }) }, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(e, { emit: l }) {
  const t = e, n = At(), o = K(""), a = y(() => t.items), r = y(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: a, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: S(o), selectAll: s, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: i }));
  function s(c) {
    t.slotProps.selectAll(c), l("click:selectAll", c);
  }
  function i() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  or(o, () => {
    l("update:search", o.value);
  }, { debounce: 750, maxWait: 1e3 });
  const u = y(() => {
    const c = t.searchProps.cols;
    return { [`${ne}--search-field`]: !0, [`v-col-${c.xs}`]: c.xs, [`v-col-sm-${c.sm}`]: c.sm, [`v-col-md-${c.md}`]: c.md, [`v-col-lg-${c.lg}`]: c.lg, [`v-col-xl-${c.xl}`]: c.xl, [`v-col-xxl-${c.xxl}`]: c.xxl };
  });
  return (c, p) => S(n).top ? de(c.$slots, "top", Pe(Z({ key: 0 }, S(r)))) : c.showSearch || S(n)["top.left"] || S(n)["top.right"] ? (Y(), me(ct, { key: 1, lg: "12" }, { default: ae(() => [d(lr, null, { default: ae(() => [S(n)["top.left"] ? de(c.$slots, "top.left", Pe(Z({ key: 0 }, S(r)))) : c.showSearch ? (Y(), me(ct, { key: 1, class: oe(["d-flex align-center justify-end", S(u)]) }, { default: ae(() => [c.showSearch ? (Y(), me(Rl, { key: 0, modelValue: S(o), "onUpdate:modelValue": p[0] || (p[0] = (v) => ze(o) ? o.value = v : null), class: "mt-0 pt-0", density: c.searchProps.density, "hide-details": "", label: "Search", "single-line": "", variant: c.searchProps.variant }, null, 8, ["modelValue", "density", "variant"])) : ye("", !0)]), _: 1 }, 8, ["class"])) : ye("", !0), S(n)["top.right"] ? de(c.$slots, "top.right", Pe(Z({ key: 2 }, S(r)))) : ye("", !0)]), _: 3 })]), _: 3 })) : ye("", !0);
} }), Wi = Symbol("data"), Ki = ["colspan"], oa = Xe({ __name: "VDrilldownTable", props: mr({ colors: {}, customFilter: {}, customKeyFilter: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footers: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderHeight: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchDebounce: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, skeltonType: {}, sortBy: {}, tableType: {}, width: {} }, { colors: { body: { base: "--v-theme-surface", bg: "--v-theme-surface", text: "--v-theme-on-surface" }, default: { base: "primary", bg: "primary", border: "primary", text: "on-primary" }, footer: { bg: "--v-theme-surface", text: "--v-theme-on-surface" }, header: { bg: "primary", text: "on-primary" }, loader: { circular: "primary", color: "primary", linear: "surface-variant", text: "surface-variant" }, percentageChange: 25, percentageDirection: "desc" }, density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, fixedFooter: !0, fixedHeader: !0, footers: () => [], height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemValue: "id", itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderHeight: "2px", loaderSize: "default", loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", multiSort: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchDebounce: 750, searchMaxWait: 1e3, searchProps: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "comfortable", variant: "underlined" }), server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, skeltonType: "heading@1", sortBy: () => [], tableType: () => ({}), width: "100%" }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(e, { emit: l }) {
  const t = e, n = At(), o = ue(null);
  Ft(() => {
    t.level === 1 && a.level !== 1 || a.server || m();
  }), Hl(() => {
    o.value = Object.assign({}, t.server ? ei : Zs);
  });
  let a = Pt(Object.assign({}, t));
  const r = { ...t, ...a }, s = K(!1), i = K(""), u = K(""), c = cl(), p = y(() => a.sortBy), v = y(() => !!a.loading || a.hideNoData);
  (function(b, P, O) {
    const A = J(b, (...V) => (Ee(() => A()), P(...V)), O);
  })(t, () => {
    t.level === 1 && a.level !== 1 || m(), a.itemsPerPage = t.itemsPerPage;
  }, { immediate: !1 }), J(() => t.items, () => {
    m();
  }), J(() => t.loading, (b) => {
    b && (a.loading = b), m();
  });
  const f = (b) => {
    const P = a.loaderType;
    return !(b && (P === "skelton" || Array.isArray(P) && P.length === 1 && P[0] === "skelton" || !a.showDrilldownWhenLoading));
  }, h = y(() => ((b) => {
    const { elevation: P, isDrilldown: O, isHover: A, isServerSide: V, level: I } = b;
    return { "pb-2": !0, [`${ne}--child`]: O, [`${ne}--hover`]: A, [`${ne}--level-${I}`]: !0, [`${ne}--server`]: V, [`${ne}`]: !0, [`elevation-${P}`]: parseInt(P) > 0 };
  })({ elevation: a.elevation, isDrilldown: t.isDrilldown, isHover: a.hover, isServerSide: !1, level: a.level })), w = y(() => ((b) => {
    const { colors: P, level: O, theme: A } = b;
    let V = {};
    typeof P == "object" && P !== null && (V = yl({ colors: P, level: O, prop: "default", themeColors: A }));
    const I = { borderBottom: "none" };
    return V.border && (I.borderBottom = `1px solid ${V.border}`), I;
  })({ colors: a.colors, level: a.level, theme: c }));
  function m() {
    var b;
    a = t.drilldown ? ((P) => {
      const { loadedDrilldown: O, drilldown: A, rawItem: V, level: I, levels: L } = P;
      let N = O;
      N = xt(O, A);
      const T = (O.items || [{}]).find((G) => {
        const j = G[O.drilldownKey];
        let W = {};
        return V && (W = V[O.drilldownKey]), j === W;
      });
      return N = xt(O, T[O.itemChildrenKey]), L === I && (N.showExpand = !1), N;
    })({ drilldown: t.drilldown, level: t.level, levels: t.levels, loadedDrilldown: a, rawItem: (b = t.item) == null ? void 0 : b.raw }) : xt(a, t);
  }
  function x(b) {
    s.value = b;
  }
  function _(b) {
    let P = { ...r, ...a, ...b };
    t.server && (P = { ...a, ...r, ...b }), ((O) => {
      const { data: A, drilldownData: V, emit: I } = O;
      A.isExpanded(A.item) && I("update:drilldown", V), I("update:expanded", A.item);
    })({ data: b, drilldownData: P, emit: l });
  }
  function g(b) {
    return { items: b.items, itemsPerPage: b.itemsPerPage, page: b.page, search: u.value, server: b.server, sortBy: b.sortBy };
  }
  const C = function(b) {
    const P = fr();
    function O(I) {
      var L;
      const N = St.get(b) || /* @__PURE__ */ new Set();
      N.add(I), St.set(b, N);
      const T = () => A(I);
      return (L = P == null ? void 0 : P.cleanups) == null || L.push(T), T;
    }
    function A(I) {
      const L = St.get(b);
      L && (L.delete(I), L.size || V());
    }
    function V() {
      St.delete(b);
    }
    return { on: O, once: function(I) {
      return O(function L(...N) {
        A(L), I(...N);
      });
    }, off: A, emit: function(I, L) {
      var N;
      (N = St.get(b)) == null || N.forEach((T) => T(I, L));
    }, reset: V };
  }(Wi), k = C.on(function(b) {
    t.level === 1 && b.drilldown.server && l("update:options", { ...b });
  });
  function E(b) {
    a.itemsPerPage = b;
    const P = g(a), O = { drilldown: { ...t, ...P, itemsPerPage: b }, itemsPerPage: b, name: "update:itemsPerPage" };
    C.emit(O), l("update:itemsPerPage", b);
  }
  function $(b) {
    a.page = b;
    const P = g(a), O = { drilldown: { ...t, ...P, page: b }, name: "update:page", page: b };
    C.emit(O), l("update:page", b);
  }
  function F(b) {
    a.sortBy = b;
    const P = g(a), O = { drilldown: { ...t, ...P, sortBy: b }, name: "update:sortBy", sortBy: b };
    C.emit(O), l("update:sortBy", b);
  }
  function B() {
  }
  return gr(() => {
    k();
  }), or(u, () => {
    a.search = u.value;
    const b = g(a), P = { drilldown: { ...t, ...b, search: u.value }, search: u.value };
    C.emit(P), l("update:search", P);
  }, { debounce: a.searchDebounce, maxWait: a.searchMaxWait }), (b, P) => {
    const O = ua("VDrilldownTable", !0);
    return S(o) ? (Y(), me(ia(S(o)), Z({ key: 0 }, b.$attrs, { class: S(h), density: S(a).density, "expand-on-click": S(a).expandOnClick, expanded: S(a).expanded, headers: S(a).headers, height: S(a).height, "hide-no-data": S(v), "item-value": S(a).itemValue, items: S(a).items, "items-length": S(a).itemsLength, "items-per-page": S(a).itemsPerPage, "items-per-page-options": S(a).itemsPerPageOptions, loading: (!S(a).loaderType || S(n).loading) && S(a).loading, "multi-sort": S(a).multiSort, "must-sort": S(a).mustSort, "no-data-text": S(a).noDataText, "no-filter": S(a).noFilter, page: S(a).page, "return-object": S(a).returnObject, search: S(u), "show-expand": S(a).showExpand, "sort-by": S(p), style: S(w), "onUpdate:itemsPerPage": E, "onUpdate:modelValue": B, "onUpdate:page": $, "onUpdate:sortBy": F }), et({ top: ae((A) => [(Y(), me(S(Hi), { key: b.level, items: S(a).items, level: S(a).level, loading: S(a).loading, "search-props": S(a).searchProps, "show-search": S(a).showSearch ?? !1, "slot-props": A, "onClick:selectAll": P[0] || (P[0] = (V) => x(V)), "onUpdate:search": P[1] || (P[1] = (V) => u.value = V) }, et({ _: 2 }, [De(S(n), (V, I) => ({ name: I, fn: ae((L) => [de(b.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["items", "level", "loading", "search-props", "show-search", "slot-props"]))]), headers: ae((A) => [(Y(), me(S(Si), { key: b.level, colors: S(a).colors, density: S(a).density, level: b.level, "show-select": S(a).showSelect, "slot-props": { allRowsSelected: S(s), ...A }, "sort-by": S(a).sortBy, "onClick:selectAll": P[2] || (P[2] = (V) => x(V)) }, et({ _: 2 }, [De(S(n), (V, I) => ({ name: I, fn: ae((L) => [de(b.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["colors", "density", "level", "show-select", "slot-props", "sort-by"])), S(a).loading && S(a).loaderType && !S(n).loading && b.level === 1 ? (Y(), me(S(Zn), { key: 0, colors: S(a).colors || null, colspan: A.columns.length, height: S(a).loaderHeight, level: S(a).level, "loader-type": S(a).loaderType, loading: S(a).loading || !1, "loading-text": b.loadingText, size: S(a).loaderSize, "skelton-type": S(a).skeltonType }, null, 8, ["colors", "colspan", "height", "level", "loader-type", "loading", "loading-text", "size", "skelton-type"])) : ye("", !0)]), item: ae((A) => [(Y(), me(S(_i), { key: b.level, density: S(a).density, "expand-on-click": S(a).expandOnClick, items: S(a).items, level: S(a).level, levels: S(a).levels, "show-expand": S(a).showExpand, "show-select": S(a).showSelect, "slot-props": { allRowsSelected: S(s), level: b.level, ...A }, "onClick:row": P[3] || (P[3] = (V) => {
      l("click:row", V);
    }), "onClick:row:checkbox": P[4] || (P[4] = (V) => {
      return I = V, console.log("emitClickRowCheckbox"), void l("click:row:checkbox", I);
      var I;
    }), "onUpdate:expanded": P[5] || (P[5] = (V) => _(V)) }, et({ _: 2 }, [De(S(n), (V, I) => ({ name: I, fn: ae((L) => [de(b.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["density", "expand-on-click", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": ae(({ columns: A, item: V }) => {
      var I, L, N, T, G, j, W, D, z, R;
      return [(I = V.raw[b.itemChildrenKey]) != null && I.loading && S(a).loaderType && !S(n).loading ? (Y(), me(S(Zn), { key: 0, class: "pa-0 ma-0", colors: ((L = V.raw[b.itemChildrenKey]) == null ? void 0 : L.colors) ?? null, colspan: A.length, height: V.raw[b.itemChildrenKey].loaderHeight, level: b.level + 1, "loader-type": V.raw[b.itemChildrenKey].loaderType, loading: (N = V.raw[b.itemChildrenKey]) == null ? void 0 : N.loading, "loading-text": b.loadingText, size: V.raw[b.itemChildrenKey].loaderSize, "skelton-type": V.raw[b.itemChildrenKey].skeltonType }, null, 8, ["colors", "colspan", "height", "level", "loader-type", "loading", "loading-text", "size", "skelton-type"])) : ye("", !0), Re("tr", { class: oe(f((T = V.raw[b.itemChildrenKey]) == null ? void 0 : T.loading) ? "" : "d-none") }, [Re("td", { class: "px-0 ma-0", colspan: A.length, style: { "vertical-align": "top" } }, [(Y(), me(O, { key: V.raw, colors: b.colors, drilldown: S(a), headers: (G = V.raw[b.itemChildrenKey]) == null ? void 0 : G.headers, "is-drilldown": !0, item: V, "items-length": (j = V.raw[b.itemChildrenKey]) == null ? void 0 : j.itemsLength, "items-per-page": (W = V.raw[b.itemChildrenKey]) == null ? void 0 : W.itemsPerPage, level: b.level + 1, levels: S(a).levels, loading: (D = V.raw[b.itemChildrenKey]) == null ? void 0 : D.loading, "multi-sort": (z = V.raw[b.itemChildrenKey]) == null ? void 0 : z.multiSort, "no-data-text": S(a).noDataText, "parent-ref": S(i), server: (R = V.raw[b.itemChildrenKey]) == null ? void 0 : R.server, "sort-by": S(a).sortBy, "table-type": S(o), "onUpdate:drilldown": P[6] || (P[6] = (U) => _(U)), "onUpdate:modelValue": B }, et({ default: ae(() => [(Y(!0), ie(re, null, De(Object.keys(S(n)), (U) => de(b.$slots, U)), 256))]), _: 2 }, [De(S(n), (U, le) => ({ name: le, fn: ae((ee) => [de(b.$slots, le, Pe(Ne({ ...ee })))]) }))]), 1032, ["colors", "drilldown", "headers", "item", "items-length", "items-per-page", "level", "levels", "loading", "multi-sort", "no-data-text", "parent-ref", "server", "sort-by", "table-type"]))], 8, Ki)], 2)];
    }), "footer.prepend": ae(() => [S(n)["footer.prepend"] ? de(b.$slots, "footer.prepend", { key: 0 }) : ye("", !0)]), _: 2 }, [S(n).loader ? { name: "loader", fn: ae(() => [de(b.$slots, "loader")]), key: "0" } : void 0, S(n).loading ? { name: "loading", fn: ae(() => [de(b.$slots, "loading")]), key: "1" } : void 0, S(n).thead ? { name: "thead", fn: ae((A) => [de(b.$slots, "thead", Pe(Ne({ ...A })))]), key: "2" } : void 0, S(n).body ? { name: "body", fn: ae((A) => [de(b.$slots, "body", Pe(Ne({ ...A })))]), key: "3" } : void 0, S(n).tbody ? { name: "tbody", fn: ae((A) => [de(b.$slots, "tbody", Pe(Ne({ ...A })))]), key: "4" } : void 0, S(n)["no-data"] ? { name: "no-data", fn: ae(() => [de(b.$slots, "no-data")]), key: "5" } : void 0, S(n).tfoot || b.showFooterRow ? { name: "tfoot", fn: ae((A) => [S(n).tfoot ? de(b.$slots, "tfoot", Pe(Z({ key: 0 }, { ...A }))) : (Y(), me(S(Oi), { key: b.level, colors: S(a).colors || null, density: S(a).density, footers: S(a).footers || [], level: S(a).level, "show-select": S(a).showSelect, "slot-props": { allRowsSelected: S(s), ...A } }, et({ _: 2 }, [De(S(n), (V, I) => ({ name: I, fn: ae((L) => [de(b.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["colors", "density", "footers", "level", "show-select", "slot-props"]))]), key: "6" } : void 0, S(n).bottom ? { name: "bottom", fn: ae((A) => [(Y(), me(S(vi), { key: b.level, "slot-props": A }, et({ _: 2 }, [De(S(n), (V, I) => ({ name: I, fn: ae((L) => [de(b.$slots, I, Pe(Ne({ ...L })))]) }))]), 1032, ["slot-props"]))]), key: "7" } : void 0]), 1040, ["class", "density", "expand-on-click", "expanded", "headers", "height", "hide-no-data", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "no-filter", "page", "return-object", "search", "show-expand", "sort-by", "style"])) : ye("", !0);
  };
} });
oa.install = (e) => {
  e.component("VDrilldownTable", oa);
};
export {
  oa as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset);overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-data-table{width:100%}.v-data-table__table{width:100%;border-collapse:separate;border-spacing:0}.v-data-table__tr--focus{border:1px dotted black}.v-data-table__tr--clickable{cursor:pointer}.v-data-table .v-table__wrapper>table>thead>tr>td,.v-data-table .v-table__wrapper>table>thead>tr th,.v-data-table .v-table__wrapper>table tbody>tr>td,.v-data-table .v-table__wrapper>table tbody>tr th{background:rgb(var(--v-theme-surface))}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end{text-align:end}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end .v-data-table-header__content{flex-direction:row-reverse}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center{text-align:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center .v-data-table-header__content{justify-content:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--no-padding{padding:0 8px}.v-data-table .v-table__wrapper>table>thead>tr>th,.v-data-table .v-table__wrapper>table tbody>tr>th{align-items:center}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--sortable:hover{cursor:pointer;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon{opacity:0}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon{opacity:.5}.v-data-table-column--fixed{position:sticky;z-index:2;left:0}.v-data-table-column--last-fixed{border-right:1px solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-data-table-group-header-row td{background:lightgrey}.v-data-table-group-header-row td>span{padding-left:5px}.v-data-table--loading .v-data-table__td{opacity:.3}.v-data-table-group-header-row__column{padding-left:calc(var(--v-data-table-group-header-row-depth) * 16px)!important}.v-data-table-header__content{display:flex;align-items:center}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;font-size:.875rem;padding:4px;border-radius:50%;background:rgba(var(--v-border-color),var(--v-border-opacity));min-width:20px;min-height:20px;width:20px;height:20px}.v-data-table-progress>th{border:none!important;height:auto!important;padding:0!important}.v-data-table-rows-loading,.v-data-table-rows-no-data{text-align:center}.v-data-table-footer{display:flex;align-items:center;flex-wrap:wrap;padding:0 8px;justify-content:flex-end}.v-data-table-footer__items-per-page{padding-inline-end:24px;display:flex;align-items:center;justify-content:space-between}.v-data-table-footer__items-per-page>span{padding-inline-end:24px}.v-data-table-footer__info{display:flex;padding-inline-end:24px}.v-data-table-footer__pagination{display:flex;align-items:center}.v-data-table-footer__page{padding:0 8px}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:.625rem;min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:.75rem;min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:.875rem;min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:1rem;min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:1.125rem;min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{font-size:1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:.625rem;min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:.75rem;min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:.875rem;min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:1rem;min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:1.125rem;min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn{margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-input--density-default{--select-chips-margin-bottom: 0px}.v-input--density-comfortable{--select-chips-margin-bottom: 2px}.v-input--density-compact{--select-chips-margin-bottom: 4px}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field--variant-outlined{--select-chips-margin-bottom: 2px}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-field--single-line .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select--chips .v-field__input,.v-select--selection-slot .v-field__input{min-height:calc(var(--v-field-input-min-height) + var(--select-chips-margin-bottom) + 2px)}.v-select--chips .v-select__selection,.v-select--selection-slot .v-select__selection{margin-top:2px;margin-bottom:var(--select-chips-margin-bottom)}.v-select--chips .v-select__selection:first-child,.v-select--selection-slot .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.625}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 20px;font-size:.625rem;padding:0 8px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 14px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 20px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-5.6px;margin-inline-end:4px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-8px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:4px;margin-inline-end:-5.6px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-8px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:12px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-4px;margin-inline-end:4px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:4px;margin-inline-end:-4px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:8px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 26px;font-size:.75rem;padding:0 10px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 20px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 26px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-7px;margin-inline-end:5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-10px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:5px;margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-10px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:15px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-5px;margin-inline-end:5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:5px;margin-inline-end:-5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:10px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 32px;font-size:.875rem;padding:0 12px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 26px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 32px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-8.4px;margin-inline-end:6px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-12px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:6px;margin-inline-end:-8.4px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-12px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:18px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-6px;margin-inline-end:6px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:6px;margin-inline-end:-6px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:12px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 38px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 32px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 38px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 44px;font-size:1.125rem;padding:0 17px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 38px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 44px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.9px;margin-inline-end:8.5px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-17px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8.5px;margin-inline-end:-11.9px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-17px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:25.5px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8.5px;margin-inline-end:8.5px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8.5px;margin-inline-end:-8.5px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:17px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{grid-row-start:1;grid-column-start:1;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:grid;grid-template-rows:minmax(100%,1fr);grid-template-columns:1fr;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-grid;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-responsive__sizer,.v-responsive__content{position:relative;grid-row-start:1;grid-column-start:1}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 56px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 48px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 40px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 48px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 40px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 32px;--v-field-padding-bottom: 0px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:var(--v-field-input-min-height);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%;--v-field-input-min-height: max(var(--v-input-control-height, 56px), 1.625rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom))}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-table{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-table .v-table-divider{border-right:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>thead>tr>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity));color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tfoot>tr>td,.v-table .v-table__wrapper>table>tfoot>tr>th{border-top:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{background:rgb(var(--v-theme-surface));box-shadow:inset 0 -1px 0 rgba(var(--v-border-color),var(--v-border-opacity));z-index:1}.v-table.v-table--fixed-footer>tfoot>tr>th,.v-table.v-table--fixed-footer>tfoot>tr>td{background:rgb(var(--v-theme-surface));box-shadow:inset 0 1px 0 rgba(var(--v-border-color),var(--v-border-opacity))}.v-table{--v-table-header-height: 56px;border-radius:inherit;line-height:1.5;max-width:100%}.v-table>.v-table__wrapper>table{width:100%;border-spacing:0}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>th{padding:0 16px;transition:height cubic-bezier(.4,0,.2,1)}.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>th{font-weight:500;user-select:none;text-align:start}.v-table--density-default>.v-table__wrapper>table>tbody>tr>th,.v-table--density-default>.v-table__wrapper>table>thead>tr>th,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) + 0px)}.v-table--density-default>.v-table__wrapper>table>tbody>tr>td,.v-table--density-default>.v-table__wrapper>table>thead>tr>td,.v-table--density-default>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) + 0px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>th,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 8px)}.v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>thead>tr>td,.v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 8px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>th,.v-table--density-compact>.v-table__wrapper>table>thead>tr>th,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>th{height:calc(var(--v-table-header-height) - 16px)}.v-table--density-compact>.v-table__wrapper>table>tbody>tr>td,.v-table--density-compact>.v-table__wrapper>table>thead>tr>td,.v-table--density-compact>.v-table__wrapper>table>tfoot>tr>td{height:calc(var(--v-table-row-height, 52px) - 16px)}.v-table__wrapper{border-radius:inherit;overflow:auto}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-table--fixed-height>.v-table__wrapper{overflow-y:auto}.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border-bottom:0px!important;position:sticky;top:0}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th{border-top:0px!important;position:sticky;bottom:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1.v-locale--is-ltr,.v-locale--is-ltr .offset-1{margin-left:8.3333333333%}.offset-1.v-locale--is-rtl,.v-locale--is-rtl .offset-1{margin-right:8.3333333333%}.offset-2.v-locale--is-ltr,.v-locale--is-ltr .offset-2{margin-left:16.6666666667%}.offset-2.v-locale--is-rtl,.v-locale--is-rtl .offset-2{margin-right:16.6666666667%}.offset-3.v-locale--is-ltr,.v-locale--is-ltr .offset-3{margin-left:25%}.offset-3.v-locale--is-rtl,.v-locale--is-rtl .offset-3{margin-right:25%}.offset-4.v-locale--is-ltr,.v-locale--is-ltr .offset-4{margin-left:33.3333333333%}.offset-4.v-locale--is-rtl,.v-locale--is-rtl .offset-4{margin-right:33.3333333333%}.offset-5.v-locale--is-ltr,.v-locale--is-ltr .offset-5{margin-left:41.6666666667%}.offset-5.v-locale--is-rtl,.v-locale--is-rtl .offset-5{margin-right:41.6666666667%}.offset-6.v-locale--is-ltr,.v-locale--is-ltr .offset-6{margin-left:50%}.offset-6.v-locale--is-rtl,.v-locale--is-rtl .offset-6{margin-right:50%}.offset-7.v-locale--is-ltr,.v-locale--is-ltr .offset-7{margin-left:58.3333333333%}.offset-7.v-locale--is-rtl,.v-locale--is-rtl .offset-7{margin-right:58.3333333333%}.offset-8.v-locale--is-ltr,.v-locale--is-ltr .offset-8{margin-left:66.6666666667%}.offset-8.v-locale--is-rtl,.v-locale--is-rtl .offset-8{margin-right:66.6666666667%}.offset-9.v-locale--is-ltr,.v-locale--is-ltr .offset-9{margin-left:75%}.offset-9.v-locale--is-rtl,.v-locale--is-rtl .offset-9{margin-right:75%}.offset-10.v-locale--is-ltr,.v-locale--is-ltr .offset-10{margin-left:83.3333333333%}.offset-10.v-locale--is-rtl,.v-locale--is-rtl .offset-10{margin-right:83.3333333333%}.offset-11.v-locale--is-ltr,.v-locale--is-ltr .offset-11{margin-left:91.6666666667%}.offset-11.v-locale--is-rtl,.v-locale--is-rtl .offset-11{margin-right:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-0{margin-left:0}.offset-sm-0.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-0{margin-right:0}.offset-sm-1.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-1{margin-left:8.3333333333%}.offset-sm-1.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-1{margin-right:8.3333333333%}.offset-sm-2.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-2{margin-left:16.6666666667%}.offset-sm-2.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-2{margin-right:16.6666666667%}.offset-sm-3.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-3{margin-left:25%}.offset-sm-3.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-3{margin-right:25%}.offset-sm-4.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-4{margin-left:33.3333333333%}.offset-sm-4.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-4{margin-right:33.3333333333%}.offset-sm-5.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-5{margin-left:41.6666666667%}.offset-sm-5.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-5{margin-right:41.6666666667%}.offset-sm-6.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-6{margin-left:50%}.offset-sm-6.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-6{margin-right:50%}.offset-sm-7.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-7{margin-left:58.3333333333%}.offset-sm-7.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-7{margin-right:58.3333333333%}.offset-sm-8.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-8{margin-left:66.6666666667%}.offset-sm-8.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-8{margin-right:66.6666666667%}.offset-sm-9.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-9{margin-left:75%}.offset-sm-9.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-9{margin-right:75%}.offset-sm-10.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-10{margin-left:83.3333333333%}.offset-sm-10.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-10{margin-right:83.3333333333%}.offset-sm-11.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-11{margin-left:91.6666666667%}.offset-sm-11.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0.v-locale--is-ltr,.v-locale--is-ltr .offset-md-0{margin-left:0}.offset-md-0.v-locale--is-rtl,.v-locale--is-rtl .offset-md-0{margin-right:0}.offset-md-1.v-locale--is-ltr,.v-locale--is-ltr .offset-md-1{margin-left:8.3333333333%}.offset-md-1.v-locale--is-rtl,.v-locale--is-rtl .offset-md-1{margin-right:8.3333333333%}.offset-md-2.v-locale--is-ltr,.v-locale--is-ltr .offset-md-2{margin-left:16.6666666667%}.offset-md-2.v-locale--is-rtl,.v-locale--is-rtl .offset-md-2{margin-right:16.6666666667%}.offset-md-3.v-locale--is-ltr,.v-locale--is-ltr .offset-md-3{margin-left:25%}.offset-md-3.v-locale--is-rtl,.v-locale--is-rtl .offset-md-3{margin-right:25%}.offset-md-4.v-locale--is-ltr,.v-locale--is-ltr .offset-md-4{margin-left:33.3333333333%}.offset-md-4.v-locale--is-rtl,.v-locale--is-rtl .offset-md-4{margin-right:33.3333333333%}.offset-md-5.v-locale--is-ltr,.v-locale--is-ltr .offset-md-5{margin-left:41.6666666667%}.offset-md-5.v-locale--is-rtl,.v-locale--is-rtl .offset-md-5{margin-right:41.6666666667%}.offset-md-6.v-locale--is-ltr,.v-locale--is-ltr .offset-md-6{margin-left:50%}.offset-md-6.v-locale--is-rtl,.v-locale--is-rtl .offset-md-6{margin-right:50%}.offset-md-7.v-locale--is-ltr,.v-locale--is-ltr .offset-md-7{margin-left:58.3333333333%}.offset-md-7.v-locale--is-rtl,.v-locale--is-rtl .offset-md-7{margin-right:58.3333333333%}.offset-md-8.v-locale--is-ltr,.v-locale--is-ltr .offset-md-8{margin-left:66.6666666667%}.offset-md-8.v-locale--is-rtl,.v-locale--is-rtl .offset-md-8{margin-right:66.6666666667%}.offset-md-9.v-locale--is-ltr,.v-locale--is-ltr .offset-md-9{margin-left:75%}.offset-md-9.v-locale--is-rtl,.v-locale--is-rtl .offset-md-9{margin-right:75%}.offset-md-10.v-locale--is-ltr,.v-locale--is-ltr .offset-md-10{margin-left:83.3333333333%}.offset-md-10.v-locale--is-rtl,.v-locale--is-rtl .offset-md-10{margin-right:83.3333333333%}.offset-md-11.v-locale--is-ltr,.v-locale--is-ltr .offset-md-11{margin-left:91.6666666667%}.offset-md-11.v-locale--is-rtl,.v-locale--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-0{margin-left:0}.offset-lg-0.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-0{margin-right:0}.offset-lg-1.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-1{margin-left:8.3333333333%}.offset-lg-1.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-1{margin-right:8.3333333333%}.offset-lg-2.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-2{margin-left:16.6666666667%}.offset-lg-2.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-2{margin-right:16.6666666667%}.offset-lg-3.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-3{margin-left:25%}.offset-lg-3.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-3{margin-right:25%}.offset-lg-4.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-4{margin-left:33.3333333333%}.offset-lg-4.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-4{margin-right:33.3333333333%}.offset-lg-5.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-5{margin-left:41.6666666667%}.offset-lg-5.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-5{margin-right:41.6666666667%}.offset-lg-6.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-6{margin-left:50%}.offset-lg-6.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-6{margin-right:50%}.offset-lg-7.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-7{margin-left:58.3333333333%}.offset-lg-7.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-7{margin-right:58.3333333333%}.offset-lg-8.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-8{margin-left:66.6666666667%}.offset-lg-8.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-8{margin-right:66.6666666667%}.offset-lg-9.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-9{margin-left:75%}.offset-lg-9.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-9{margin-right:75%}.offset-lg-10.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-10{margin-left:83.3333333333%}.offset-lg-10.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-10{margin-right:83.3333333333%}.offset-lg-11.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-11{margin-left:91.6666666667%}.offset-lg-11.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-0{margin-left:0}.offset-xl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-0{margin-right:0}.offset-xl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-1{margin-left:8.3333333333%}.offset-xl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-1{margin-right:8.3333333333%}.offset-xl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-2{margin-left:16.6666666667%}.offset-xl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-2{margin-right:16.6666666667%}.offset-xl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-3{margin-left:25%}.offset-xl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-3{margin-right:25%}.offset-xl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-4{margin-left:33.3333333333%}.offset-xl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-4{margin-right:33.3333333333%}.offset-xl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-5{margin-left:41.6666666667%}.offset-xl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-5{margin-right:41.6666666667%}.offset-xl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-6{margin-left:50%}.offset-xl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-6{margin-right:50%}.offset-xl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-7{margin-left:58.3333333333%}.offset-xl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-7{margin-right:58.3333333333%}.offset-xl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-8{margin-left:66.6666666667%}.offset-xl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-8{margin-right:66.6666666667%}.offset-xl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-9{margin-left:75%}.offset-xl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-9{margin-right:75%}.offset-xl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-10{margin-left:83.3333333333%}.offset-xl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-10{margin-right:83.3333333333%}.offset-xl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-11{margin-left:91.6666666667%}.offset-xl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-11{margin-right:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-0{margin-left:0}.offset-xxl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-0{margin-right:0}.offset-xxl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-1{margin-right:8.3333333333%}.offset-xxl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-2{margin-right:16.6666666667%}.offset-xxl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-3{margin-left:25%}.offset-xxl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-3{margin-right:25%}.offset-xxl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-4{margin-right:33.3333333333%}.offset-xxl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-5{margin-right:41.6666666667%}.offset-xxl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-6{margin-left:50%}.offset-xxl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-6{margin-right:50%}.offset-xxl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-7{margin-right:58.3333333333%}.offset-xxl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-8{margin-right:66.6666666667%}.offset-xxl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-9{margin-left:75%}.offset-xxl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-9{margin-right:75%}.offset-xxl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-10{margin-right:83.3333333333%}.offset-xxl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-11{margin-left:91.6666666667%}.offset-xxl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-11{margin-right:91.6666666667%}}.v-drilldown-table--loader-tr[data-v-97f9388c]{height:0;position:relative;top:0;width:100%;z-index:99999}.v-drilldown-table--loader-tr-vrow[data-v-97f9388c]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-59419b28]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-59419b28]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-59419b28]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-59419b28],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-59419b28]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-59419b28]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-59419b28]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-59419b28]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-59419b28],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-59419b28],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-59419b28]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-59419b28]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-301ef7e6]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
