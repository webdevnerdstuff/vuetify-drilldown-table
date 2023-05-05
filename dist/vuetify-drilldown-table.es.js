import { reactive as Yt, computed as m, watchEffect as yt, toRefs as tn, watch as U, onScopeDispose as Xt, effectScope as ln, inject as be, shallowRef as nn, ref as P, unref as p, provide as ht, defineComponent as pe, getCurrentInstance as on, capitalize as bt, h as Le, onBeforeUnmount as wt, readonly as rn, isRef as ge, toRef as H, createVNode as g, toRaw as an, Transition as Ue, resolveComponent as ut, openBlock as B, createBlock as te, normalizeClass as M, withCtx as I, createCommentVNode as z, normalizeStyle as ae, createTextVNode as Me, toDisplayString as Zt, renderSlot as N, TransitionGroup as sn, camelize as un, mergeProps as le, onBeforeMount as dn, onMounted as cn, Text as pn, withDirectives as Ke, resolveDirective as Jt, nextTick as dt, createElementBlock as L, Fragment as ne, renderList as ie, createElementVNode as me, vShow as Qt, cloneVNode as vn, useSlots as fn, createSlots as Ce, normalizeProps as Ae, guardReactiveProps as Ee } from "vue";
import { useTheme as Ye } from "vuetify";
/**
 * @name vuetify-drilldown-table
 * @version 0.0.2-alpha
 * @description The vuetify-drilldown-table
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
const T = "v-drilldown-table", mn = { colors: { default: !1, required: !1, type: [Object, Boolean] }, debounceDelay: { default: 750, required: !1, type: Number }, density: { default: "comfortable", required: !1, type: String }, drilldown: { default: () => {
}, required: !1, type: Object }, drilldownKey: { default: "id", required: !1, type: String }, elevation: { default: 0, required: !1, type: [Number, String] }, expandOnClick: { default: !1, required: !1, type: Boolean }, footers: { default: () => [], required: !1, type: Array }, headers: { default: () => [], required: !1, type: Array }, hover: { default: !1, required: !1, type: Boolean }, isDrilldown: { default: !1, required: !1, type: Boolean }, item: { default: () => {
}, required: !1, type: Object }, itemChildrenKey: { default: "child", required: !1, type: String }, items: { default: () => {
}, required: !1, type: Array }, level: { default: 0, required: !1, type: Number }, levels: { default: 0, required: !1, type: Number }, loaderType: { default: ["linear", "text"], required: !1, type: [String, Array] }, loading: { default: !1, required: !1, type: Boolean }, loadingText: { default: "$vuetify.dataIterator.loadingText", required: !1, type: String }, noDataText: { default: "$vuetify.noDataText", required: !1, type: String }, searchProps: { default: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "default", variant: "underlined" }), required: !1, type: Object }, showSearch: { default: !1, required: !1, type: Boolean }, skeltonType: { default: "heading@1", required: !1, type: String }, sortBy: { default: () => [], required: !1, type: Array } };
function gn(e, t, n = "default", l) {
  const o = e.colors, r = { ...o[n] }, s = o.percentageDirection, i = e.level;
  if (r === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${n}' does not exist`);
  let c = function(y, d, v) {
    const w = y.colors;
    let f = 100, $ = w.percentageChange ?? 0;
    return isNaN($) && (f = 100), $ *= d, (v === "desc" || v === "descending") && (f = 100 - $), v !== "asc" && v !== "ascending" || (f = 0 + $), f < 0 && (f = 0), f > 100 && (f = 100), isNaN(f) && (f = 100), f;
  }(e, i, s);
  return l || Object.entries(r).forEach(([y, d]) => {
    let v = t.global.current.value.colors[d] ?? d;
    if (v || (v = "transparent"), v === "transparent" || v === "none" || v === "inherit" || v === "currentColor" || v === "initial" || v === "unset")
      return void (r[y] = v);
    if (y === "text" && i === 0 && s === "asc" && (c = 100), v.includes("--v-theme"))
      return void (r[y] = `rgb(var(${v}))`);
    const w = `/ ${c}%`, f = Et(v);
    if (f.includes("/"))
      return r[y] = `hsl(${f})`;
    r[y] = `hsl(${Et(v)} ${w})`;
  }), r;
}
function Et(e) {
  let t = function(d) {
    const v = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let w = d;
    return Object.entries(v).forEach(([f, $]) => {
      d.toLowerCase() != f.toLowerCase() || (w = $);
    }), w;
  }(e), n = 0, l = 0, o = 0, r = 0, s = 0, i = 0;
  if (t.substring(0, 1) === "#")
    t = function(d) {
      let v = d.replace("#", "");
      v.length === 3 && (v = v.split("").map((F) => F + F).join(""));
      const w = parseInt(v.substring(0, 2), 16), f = parseInt(v.substring(2, 4), 16), $ = parseInt(v.substring(4, 6), 16);
      return [w, f, $];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/\d+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/\d+/g)].map(Number), n = t[0], l = t[1], o = t[2], `${n} ${l}% ${o}%`;
  [r, s, i] = t, r /= 255, s /= 255, i /= 255;
  const c = Math.max(r, s, i), y = Math.min(r, s, i);
  if (c === null || !y === null || isNaN(c) || isNaN(y)) {
    const d = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${d})" in it's place.`), d;
  }
  if (n = (c + y) / 2, l = (c + y) / 2, o = (c + y) / 2, c == y)
    n = l = 0;
  else {
    const d = c - y;
    switch (l = o > 0.5 ? d / (2 - c - y) : d / (c + y), c) {
      case r:
        n = (s - i) / d + (s < i ? 6 : 0);
        break;
      case s:
        n = (i - r) / d + 2;
        break;
      case i:
        n = (r - s) / d + 4;
    }
    n /= 6;
  }
  return n = Math.round(360 * n), l = Math.round(100 * l), o = Math.round(100 * o), `${n} ${l}% ${o}%`;
}
function Xe(e, t, n = "default", l = null) {
  if (e.colors === !1)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should no be called.');
  const o = gn(e, t, n, l);
  return l ? o[l] : o;
}
function q(e, t) {
  return (n) => Object.keys(e).reduce((l, o) => {
    const r = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = n && o in n ? { ...r, default: n[o] } : r, t && !l[o].source && (l[o].source = t), l;
  }, {});
}
const Q = q({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function W(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function ct(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Vt = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Ct(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    t.some((s) => s instanceof RegExp ? s.test(r) : s === r) && !(n != null && n.some((s) => s === r)) ? l[r] = e[r] : o[r] = e[r];
  return [l, o];
}
function xt(e) {
  return Ct(e, ["class", "style", "id", /^data-/]);
}
function ke(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ne() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const o in e)
    l[o] = e[o];
  for (const o in t) {
    const r = e[o], s = t[o];
    ct(r) && ct(s) ? l[o] = Ne(r, s, n) : Array.isArray(r) && Array.isArray(s) && n ? l[o] = n(r, s) : l[o] = s;
  }
  return l;
}
function de() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (de.cache.has(e))
    return de.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return de.cache.set(e, t), t;
}
function el(e) {
  const t = Yt({}), n = m(e);
  return yt(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), tn(t);
}
function pt(e, t) {
  return e.includes(t);
}
de.cache = /* @__PURE__ */ new Map();
const yn = /^on[^a-z]/, $e = () => [Function, Array], hn = ["top", "bottom"], bn = ["start", "end", "left", "right"];
function It(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
class ot {
  constructor(t) {
    let { x: n, y: l, width: o, height: r } = t;
    this.x = n, this.y = l, this.width = o, this.height = r;
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
function wn(e, t, n) {
  if (n && (t = { __isVue: !0, $parent: n, $options: t }), t) {
    if (t.$_alreadyWarned = t.$_alreadyWarned || [], t.$_alreadyWarned.includes(e))
      return;
    t.$_alreadyWarned.push(e);
  }
  return `[Vuetify] ${e}` + (t ? function(l) {
    if (l.__isVue && l.$parent) {
      const o = [];
      let r = 0;
      for (; l; ) {
        if (o.length > 0) {
          const s = o[o.length - 1];
          if (s.constructor === l.constructor) {
            r++, l = l.$parent;
            continue;
          }
          r > 0 && (o[o.length - 1] = [s, r], r = 0);
        }
        o.push(l), l = l.$parent;
      }
      return `

found in

` + o.map((s, i) => `${i === 0 ? "---> " : " ".repeat(5 + 2 * i)}${Array.isArray(s) ? `${rt(s[0])}... (${s[1]} recursive calls)` : rt(s)}`).join(`
`);
    }
    return `

(found in ${rt(l)})`;
  }(t) : "");
}
const Cn = /(?:^|[-_])(\w)/g, xn = (e) => e.replace(Cn, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function rt(e, t) {
  if (e.$root === e)
    return "<Root>";
  const n = typeof e == "function" && e.cid != null ? e.options : e.__isVue ? e.$options || e.constructor.options : e || {};
  let l = n.name || n._componentTag;
  const o = n.__file;
  if (!l && o) {
    const r = o.match(/([^/\\]+)\.vue$/);
    l = r == null ? void 0 : r[1];
  }
  return (l ? `<${xn(l)}>` : "<Anonymous>") + (o && t !== !1 ? ` at ${o}` : "");
}
function Tt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function qe(e, t) {
  let n;
  function l() {
    n = ln(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  U(e, (o) => {
    o && !n ? l() : o || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), Xt(() => {
    n == null || n.stop();
  });
}
const kt = Symbol.for("vuetify:defaults");
function $t() {
  const e = be(kt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function tl(e, t) {
  const n = $t(), l = P(e), o = m(() => {
    if (p(t == null ? void 0 : t.disabled))
      return n.value;
    const r = p(t == null ? void 0 : t.scoped), s = p(t == null ? void 0 : t.reset), i = p(t == null ? void 0 : t.root);
    let c = Ne(l.value, { prev: n.value });
    if (r)
      return c;
    if (s || i) {
      const y = Number(s || 1 / 0);
      for (let d = 0; d <= y && c && "prev" in c; d++)
        c = c.prev;
      return c;
    }
    return c.prev ? Ne(c.prev, c) : c;
  });
  return ht(kt, o), o;
}
function kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $t();
  const l = ye("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const o = m(() => {
    var i;
    return (i = n.value) == null ? void 0 : i[e._as ?? t];
  }), r = new Proxy(e, { get(i, c) {
    var d, v, w, f;
    const y = Reflect.get(i, c);
    return c === "class" || c === "style" ? [(d = o.value) == null ? void 0 : d[c], y].filter(($) => $ != null) : typeof c != "string" || function($, F) {
      var C, a;
      return ((C = $.props) == null ? void 0 : C[F]) !== void 0 || ((a = $.props) == null ? void 0 : a[de(F)]) !== void 0;
    }(l.vnode, c) ? y : ((v = o.value) == null ? void 0 : v[c]) ?? ((f = (w = n.value) == null ? void 0 : w.global) == null ? void 0 : f[c]) ?? y;
  } }), s = nn();
  return yt(() => {
    if (o.value) {
      const i = Object.entries(o.value).filter((c) => {
        let [y] = c;
        return y.startsWith(y[0].toUpperCase());
      });
      i.length && (s.value = Object.fromEntries(i));
    }
  }), { props: r, provideSubDefaults: function() {
    qe(s, () => {
      var i;
      tl(Ne(((i = function(c) {
        const { provides: y } = ye("injectSelf");
        if (y && c in y)
          return y[c];
      }(kt)) == null ? void 0 : i.value) ?? {}, s.value));
    });
  } };
}
function Ge(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return function(t, n, l) {
      const o = wn(t, n, l);
      o != null && console.warn(o);
    }("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = q(e.props ?? {}, de(e.name))();
    const t = Object.keys(e.props);
    e.filterProps = function(n) {
      return Ct(n, t, ["class", "style"]);
    }, e.props._as = String, e.setup = function(n, l) {
      const o = $t();
      if (!o.value)
        return e._setup(n, l);
      const { props: r, provideSubDefaults: s } = kn(n, n._as ?? e.name, o), i = e._setup(r, l);
      return s(), i;
    };
  }
  return e;
}
function G() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? Ge : pe)(t);
}
function ye(e, t) {
  const n = on();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function Se() {
  const e = ye(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return de((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ll = 0, Re = /* @__PURE__ */ new WeakMap();
function we() {
  const e = ye("getUid");
  if (Re.has(e))
    return Re.get(e);
  {
    const t = ll++;
    return Re.set(e, t), t;
  }
}
we.reset = () => {
  ll = 0, Re = /* @__PURE__ */ new WeakMap();
};
const St = typeof window < "u", nl = St && "IntersectionObserver" in window, Lt = St && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function Y(e) {
  ye("useRender").render = e;
}
const Pe = q({ tag: { type: String, default: "div" } }, "tag"), Ze = ["sm", "md", "lg", "xl", "xxl"], ol = Ze.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: !1 }, e), {}), rl = Ze.reduce((e, t) => (e["offset" + bt(t)] = { type: [String, Number], default: null }, e), {}), al = Ze.reduce((e, t) => (e["order" + bt(t)] = { type: [String, Number], default: null }, e), {}), Pt = { col: Object.keys(ol), offset: Object.keys(rl), order: Object.keys(al) };
function $n(e, t, n) {
  let l = e;
  if (n != null && n !== !1)
    return t && (l += `-${t.replace(e, "")}`), e === "col" && (l = "v-" + l), (e !== "col" || n !== "" && n !== !0) && (l += `-${n}`), l.toLowerCase();
}
const Sn = ["auto", "start", "end", "center", "baseline", "stretch"], xe = G()({ name: "VCol", props: { cols: { type: [Boolean, String, Number], default: !1 }, ...ol, offset: { type: [String, Number], default: null }, ...rl, order: { type: [String, Number], default: null }, ...al, alignSelf: { type: String, default: null, validator: (e) => Sn.includes(e) }, ...Q(), ...Pe() }, setup(e, t) {
  let { slots: n } = t;
  const l = m(() => {
    const o = [];
    let r;
    for (r in Pt)
      Pt[r].forEach((i) => {
        const c = e[i], y = $n(r, i, c);
        y && o.push(y);
      });
    const s = o.some((i) => i.startsWith("v-col-"));
    return o.push({ "v-col": !s || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), o;
  });
  return () => {
    var o;
    return Le(e.tag, { class: [l.value, e.class], style: e.style }, (o = n.default) == null ? void 0 : o.call(n));
  };
} }), Ft = ["start", "end", "center"], sl = ["space-between", "space-around", "space-evenly"];
function _t(e, t) {
  return Ze.reduce((n, l) => (n[e + bt(l)] = t(), n), {});
}
const Fn = [...Ft, "baseline", "stretch"], il = (e) => Fn.includes(e), ul = _t("align", () => ({ type: String, default: null, validator: il })), _n = [...Ft, ...sl], dl = (e) => _n.includes(e), cl = _t("justify", () => ({ type: String, default: null, validator: dl })), Dn = [...Ft, ...sl, "stretch"], pl = (e) => Dn.includes(e), vl = _t("alignContent", () => ({ type: String, default: null, validator: pl })), Ot = { align: Object.keys(ul), justify: Object.keys(cl), alignContent: Object.keys(vl) }, Bn = { align: "align", justify: "justify", alignContent: "align-content" };
function An(e, t, n) {
  let l = Bn[e];
  if (n != null)
    return t && (l += `-${t.replace(e, "")}`), l += `-${n}`, l.toLowerCase();
}
const fl = G()({ name: "VRow", props: { dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: il }, ...ul, justify: { type: String, default: null, validator: dl }, ...cl, alignContent: { type: String, default: null, validator: pl }, ...vl, ...Q(), ...Pe() }, setup(e, t) {
  let { slots: n } = t;
  const l = m(() => {
    const o = [];
    let r;
    for (r in Ot)
      Ot[r].forEach((s) => {
        const i = e[s], c = An(r, s, i);
        c && o.push(c);
      });
    return o.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), o;
  });
  return () => {
    var o;
    return Le(e.tag, { class: ["v-row", l.value, e.class], style: e.style }, (o = n.default) == null ? void 0 : o.call(n));
  };
} }), En = ["x-small", "small", "default", "large", "x-large"], ml = q({ size: { type: [String, Number], default: "default" } }, "size");
function gl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return el(() => {
    let n, l;
    return pt(En, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: W(e.size), height: W(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const jt = Symbol.for("vuetify:theme"), Fe = q({ theme: String }, "theme");
function Je(e) {
  ye("provideTheme");
  const t = be(jt, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = m(() => e.theme ?? (t == null ? void 0 : t.name.value)), l = m(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), o = { ...t, name: n, themeClasses: l };
  return ht(jt, o), o;
}
function yl(e, t) {
  const n = P(), l = P(!1);
  if (nl) {
    const o = new IntersectionObserver((r) => {
      e == null || e(r, o), l.value = !!r.find((s) => s.isIntersecting);
    }, t);
    wt(() => {
      o.disconnect();
    }), U(n, (r, s) => {
      s && (o.unobserve(s), l.value = !1), r && o.observe(r);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
function hl(e) {
  return el(() => {
    const t = [], n = {};
    return e.value.background && (Tt(e.value.background) ? n.backgroundColor = e.value.background : t.push(`bg-${e.value.background}`)), e.value.text && (Tt(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function he(e, t) {
  const n = m(() => ({ text: ge(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: o } = hl(n);
  return { textColorClasses: l, textColorStyles: o };
}
function vt(e, t) {
  const n = m(() => ({ background: ge(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: o } = hl(n);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
const Vn = G()({ name: "VProgressCircular", props: { bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...Q(), ...ml(), ...Pe({ tag: "div" }), ...Fe() }, setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, o = P(), { themeClasses: r } = Je(e), { sizeClasses: s, sizeStyles: i } = gl(e), { textColorClasses: c, textColorStyles: y } = he(H(e, "color")), { textColorClasses: d, textColorStyles: v } = he(H(e, "bgColor")), { intersectionRef: w, isIntersecting: f } = yl(), { resizeRef: $, contentRect: F } = function(b) {
    const x = P(), _ = P();
    if (St) {
      const A = new ResizeObserver((D) => {
        b == null || b(D, A), D.length && (_.value = D[0].contentRect);
      });
      wt(() => {
        A.disconnect();
      }), U(x, (D, E) => {
        E && (A.unobserve(E), _.value = void 0), D && A.observe(D);
      }, { flush: "post" });
    }
    return { resizeRef: x, contentRect: rn(_) };
  }(), C = m(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), a = m(() => Number(e.width)), h = m(() => i.value ? Number(e.size) : F.value ? F.value.width : Math.max(a.value, 32)), u = m(() => 20 / (1 - a.value / h.value) * 2), S = m(() => a.value / h.value * u.value), k = m(() => W((100 - C.value) / 100 * l));
  return yt(() => {
    w.value = o.value, $.value = o.value;
  }), Y(() => g(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": f.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, r.value, s.value, c.value, e.class], style: [i.value, y.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : C.value }, { default: () => [g("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${u.value} ${u.value}` }, [g("circle", { class: ["v-progress-circular__underlay", d.value], style: v.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": S.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), g("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": S.value, "stroke-dasharray": l, "stroke-dashoffset": k.value }, null)]), n.default && g("div", { class: "v-progress-circular__content" }, [n.default({ value: C.value })])] })), {};
} });
function ce(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const r = ye("useProxiedModel"), s = P(e[t] !== void 0 ? e[t] : n), i = de(t), c = m(i !== t ? () => {
    var d, v, w, f;
    return e[t], !(!((d = r.vnode.props) != null && d.hasOwnProperty(t)) && !((v = r.vnode.props) != null && v.hasOwnProperty(i)) || !((w = r.vnode.props) != null && w.hasOwnProperty(`onUpdate:${t}`)) && !((f = r.vnode.props) != null && f.hasOwnProperty(`onUpdate:${i}`)));
  } : () => {
    var d, v;
    return e[t], !(!((d = r.vnode.props) != null && d.hasOwnProperty(t)) || !((v = r.vnode.props) != null && v.hasOwnProperty(`onUpdate:${t}`)));
  });
  qe(() => !c.value, () => {
    U(() => e[t], (d) => {
      s.value = d;
    });
  });
  const y = m({ get() {
    const d = e[t];
    return l(c.value ? d : s.value);
  }, set(d) {
    const v = o(d), w = an(c.value ? e[t] : s.value);
    w !== v && l(w) !== d && (s.value = v, r == null || r.emit(`update:${t}`, v));
  } });
  return Object.defineProperty(y, "externalValue", { get: () => c.value ? e[t] : s.value }), y;
}
const bl = Symbol.for("vuetify:locale");
function wl() {
  const e = be(bl);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Rt = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, In = q({ location: String }, "location");
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = wl();
  return { locationStyles: m(() => {
    if (!e.location)
      return {};
    const { side: r, align: s } = function(y, d) {
      let [v, w] = y.split(" ");
      return w || (w = pt(hn, v) ? "start" : pt(bn, v) ? "top" : "center"), { side: It(v, d), align: It(w, d) };
    }(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function i(y) {
      return n ? n(y) : 0;
    }
    const c = {};
    return r !== "center" && (t ? c[Rt[r]] = `calc(100% - ${i(r)}px)` : c[r] = 0), s !== "center" ? t ? c[Rt[s]] = `calc(100% - ${i(s)}px)` : c[s] = 0 : (r === "center" ? c.top = c.left = "50%" : c[{ top: "left", bottom: "left", left: "top", right: "top" }[r]] = "50%", c.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[r]), c;
  }) };
}
const Cl = q({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function xl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return { roundedClasses: m(() => {
    const n = ge(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const o of String(n).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const kl = G()({ name: "VProgressLinear", props: { absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...Q(), ...In({ location: "top" }), ...Cl(), ...Pe(), ...Fe() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ce(e, "modelValue"), { isRtl: o } = wl(), { themeClasses: r } = Je(e), { locationStyles: s } = Tn(e), { textColorClasses: i, textColorStyles: c } = he(e, "color"), { backgroundColorClasses: y, backgroundColorStyles: d } = vt(m(() => e.bgColor || e.color)), { backgroundColorClasses: v, backgroundColorStyles: w } = vt(e, "color"), { roundedClasses: f } = xl(e), { intersectionRef: $, isIntersecting: F } = yl(), C = m(() => parseInt(e.max, 10)), a = m(() => parseInt(e.height, 10)), h = m(() => parseFloat(e.bufferValue) / C.value * 100), u = m(() => parseFloat(l.value) / C.value * 100), S = m(() => o.value !== e.reverse), k = m(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), b = m(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function x(_) {
    if (!$.value)
      return;
    const { left: A, right: D, width: E } = $.value.getBoundingClientRect(), V = S.value ? E - _.clientX + (D - E) : _.clientX - A;
    l.value = Math.round(V / E * C.value);
  }
  return Y(() => g(e.tag, { ref: $, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && F.value, "v-progress-linear--reverse": S.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, f.value, r.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? W(a.value) : 0, "--v-progress-linear-height": W(a.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : u.value, onClick: e.clickable && x }, { default: () => [e.stream && g("div", { key: "stream", class: ["v-progress-linear__stream", i.value], style: { ...c.value, [S.value ? "left" : "right"]: W(-a.value), borderTop: `${W(a.value / 2)} dotted`, opacity: b.value, top: `calc(50% - ${W(a.value / 4)})`, width: W(100 - h.value, "%"), "--v-progress-linear-stream-to": W(a.value * (S.value ? 1 : -1)) } }, null), g("div", { class: ["v-progress-linear__background", y.value], style: [d.value, { opacity: b.value, width: W(e.stream ? h.value : 100, "%") }] }, null), g(Ue, { name: k.value }, { default: () => [e.indeterminate ? g("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((_) => g("div", { key: _, class: ["v-progress-linear__indeterminate", _, v.value], style: w.value }, null))]) : g("div", { class: ["v-progress-linear__determinate", v.value], style: [w.value, { width: W(u.value, "%") }] }, null)] }), n.default && g("div", { class: "v-progress-linear__content" }, [n.default({ value: u.value, buffer: h.value })])] })), {};
} }), Dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, Mt = Dt(pe({ __name: "TableLoader", props: { height: { default: "2", required: !1, type: String }, loadedDrilldown: { required: !0, type: Object }, loading: { required: !0, type: Boolean }, loadingText: { default: "Loading...", required: !1, type: String }, size: { default: "default", required: !1, type: String }, textLoader: { default: !0, required: !1, type: Boolean } }, setup(e) {
  const t = e, n = Ye(), l = m(() => {
    if (t.loadedDrilldown.colors !== !1)
      return Xe(t.loadedDrilldown, n, "loader");
  }), o = m(() => ({ [`${T}--table-loader`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), r = m(() => {
    var f;
    return ((f = l.value) == null ? void 0 : f.linear) || "";
  }), s = m(() => {
    var f;
    return (f = l.value) == null ? void 0 : f.bg;
  }), i = m(() => {
    var f;
    return (f = l.value) == null ? void 0 : f.circular;
  }), c = m(() => t.loadedDrilldown.skeltonType || "heading@1"), y = m(() => {
    var f;
    return { color: (f = l.value) == null ? void 0 : f.text };
  }), d = m(() => t.loadingText || "Loading..."), v = (f) => {
    const $ = t.loadedDrilldown.loaderType;
    return Array.isArray($) ? $.indexOf(f) : 1;
  }, w = (f) => {
    const $ = t.loadedDrilldown.loaderType;
    return f === t.loadedDrilldown.loaderType || !!Array.isArray($) && $.includes(f);
  };
  return (f, $) => {
    const F = ut("v-skeleton-loader");
    return e.loading ? (B(), te(fl, { key: 0, class: M(p(o)), "no-gutters": "" }, { default: I(() => [w("linear") ? (B(), te(xe, { key: 0, class: "pa-0 ma-0", order: v("linear") }, { default: I(() => [g(kl, { color: p(r), height: e.height, indeterminate: "" }, null, 8, ["color", "height"])]), _: 1 }, 8, ["order"])) : z("", !0), w("circular") ? (B(), te(xe, { key: 1, class: "pa-0 my-2", order: v("circular") }, { default: I(() => [g(Vn, { "bg-color": p(s), color: p(i), indeterminate: "", size: e.size }, null, 8, ["bg-color", "color", "size"])]), _: 1 }, 8, ["order"])) : z("", !0), w("skelton") ? (B(), te(xe, { key: 2, class: "pa-0 ma-0", order: v("skelton") }, { default: I(() => [g(F, { loading: e.loading, type: p(c) }, null, 8, ["loading", "type"])]), _: 1 }, 8, ["order"])) : z("", !0), w("text") ? (B(), te(xe, { key: 3, class: "my-2", order: v("text"), style: ae(p(y)) }, { default: I(() => [Me(Zt(p(d)), 1)]), _: 1 }, 8, ["order", "style"])) : z("", !0)]), _: 1 }, 8, ["class"])) : z("", !0);
  };
} }), [["__scopeId", "data-v-54ff3e55"]]);
function Nt(e, t = "px") {
  if (e != null && e !== "")
    return +e ? `${Number(e)}${t}` : String(e);
}
function $l(e, t, n) {
  const l = t[e.itemTitle], o = [l, t, n];
  return t.renderer ? t.renderer(...o) : t.renderHeader ? t.renderHeader(...o) : t.renderFooter ? t.renderFooter(...o) : l || "";
}
function at(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Ve(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (at(e) && at(n))
    for (const l in n)
      at(n[l]) ? (e[l] || Object.assign(e, { [l]: {} }), Ve(e[l], n[l])) : Object.assign(e, { [l]: n[l] });
  return Ve(e, ...t);
}
const Ln = pe({ __name: "BottomSlot", props: { loadedDrilldown: { required: !0, type: Object } }, setup: (e) => (t, n) => N(t.$slots, "bottom") });
function Z(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "center center", n = arguments.length > 2 ? arguments[2] : void 0;
  return G()({ name: e, props: { disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: { type: String, default: n }, origin: { type: String, default: t } }, setup(l, o) {
    let { slots: r } = o;
    const s = { onBeforeEnter(i) {
      i.style.transformOrigin = l.origin;
    }, onLeave(i) {
      if (l.leaveAbsolute) {
        const { offsetTop: c, offsetLeft: y, offsetWidth: d, offsetHeight: v } = i;
        i._transitionInitialStyles = { position: i.style.position, top: i.style.top, left: i.style.left, width: i.style.width, height: i.style.height }, i.style.position = "absolute", i.style.top = `${c}px`, i.style.left = `${y}px`, i.style.width = `${d}px`, i.style.height = `${v}px`;
      }
      l.hideOnLeave && i.style.setProperty("display", "none", "important");
    }, onAfterLeave(i) {
      if (l.leaveAbsolute && (i != null && i._transitionInitialStyles)) {
        const { position: c, top: y, left: d, width: v, height: w } = i._transitionInitialStyles;
        delete i._transitionInitialStyles, i.style.position = c || "", i.style.top = y || "", i.style.left = d || "", i.style.width = v || "", i.style.height = w || "";
      }
    } };
    return () => {
      const i = l.group ? sn : Ue;
      return Le(i, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : s }, r.default);
    };
  } });
}
function Sl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return G()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, o) {
    let { slots: r } = o;
    return () => Le(Ue, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, r.default);
  } });
}
function Fl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = un(`offset-${t}`);
  return { onBeforeEnter(r) {
    r._parent = r.parentNode, r._initialStyle = { transition: r.style.transition, overflow: r.style.overflow, [t]: r.style[t] };
  }, onEnter(r) {
    const s = r._initialStyle;
    r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
    const i = `${r[n]}px`;
    r.style[t] = "0", r.offsetHeight, r.style.transition = s.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
      r.style[t] = i;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(r) {
    r._initialStyle = { transition: "", overflow: r.style.overflow, [t]: r.style[t] }, r.style.overflow = "hidden", r.style[t] = `${r[n]}px`, r.offsetHeight, requestAnimationFrame(() => r.style[t] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(r) {
    e && r._parent && r._parent.classList.remove(e), o(r);
  }
  function o(r) {
    const s = r._initialStyle[t];
    r.style.overflow = r._initialStyle.overflow, s != null && (r.style[t] = s), delete r._initialStyle;
  }
}
Z("fab-transition", "center center", "out-in"), Z("dialog-bottom-transition"), Z("dialog-top-transition"), Z("fade-transition"), Z("scale-transition"), Z("scroll-x-transition"), Z("scroll-x-reverse-transition"), Z("scroll-y-transition"), Z("scroll-y-reverse-transition"), Z("slide-x-transition"), Z("slide-x-reverse-transition");
const _l = Z("slide-y-transition");
Z("slide-y-reverse-transition"), Sl("expand-transition", Fl());
const Pn = Sl("expand-x-transition", Fl("", !0)), Dl = q({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Bl = (e, t) => {
  let { slots: n } = t;
  const { transition: l, ...o } = e, { component: r = Ue, ...s } = typeof l == "object" ? l : {};
  return Le(r, le(typeof l == "string" ? { name: l } : s, o), n);
}, On = G()({ name: "VMessages", props: { active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...Q(), ...Dl({ transition: { component: _l, leaveAbsolute: !0, group: !0 } }) }, setup(e, t) {
  let { slots: n } = t;
  const l = m(() => ke(e.messages)), { textColorClasses: o, textColorStyles: r } = he(m(() => e.color));
  return Y(() => g(Bl, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [r.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((s, i) => g("div", { class: "v-messages__message", key: `${i}-${l.value}` }, [n.message ? n.message({ message: s }) : s]))] })), {};
} }), se = [String, Function, Object, Array], jn = Symbol.for("vuetify:icons"), ze = q({ icon: { type: se }, tag: { type: String, required: !0 } }, "icon"), qt = G()({ name: "VComponentIcon", props: ze(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return g(e.tag, null, { default: () => {
      var o;
      return [e.icon ? g(l, null, null) : (o = n.default) == null ? void 0 : o.call(n)];
    } });
  };
} }), Rn = Ge({ name: "VSvgIcon", inheritAttrs: !1, props: ze(), setup(e, t) {
  let { attrs: n } = t;
  return () => g(e.tag, le(n, { style: null }), { default: () => [g("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? g("path", { d: l[0], "fill-opacity": l[1] }, null) : g("path", { d: l }, null)) : g("path", { d: e.icon }, null)])] });
} });
Ge({ name: "VLigatureIcon", props: ze(), setup: (e) => () => g(e.tag, null, { default: () => [e.icon] }) }), Ge({ name: "VClassIcon", props: ze(), setup: (e) => () => g(e.tag, { class: e.icon }, null) });
const Mn = [null, "default", "comfortable", "compact"], Al = q({ density: { type: String, default: "default", validator: (e) => Mn.includes(e) } }, "density");
function El(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return { densityClasses: m(() => `${t}--density-${e.density}`) };
}
const Nn = Symbol.for("vuetify:form"), Vl = q({ focused: Boolean, "onUpdate:focused": $e() }, "focus");
function Bt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  const n = ce(e, "focused");
  return { focusClasses: m(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const qn = q({ disabled: Boolean, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: Boolean, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Vl() }, "validation");
function Gn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : we();
  const l = ce(e, "modelValue"), o = m(() => e.validationValue === void 0 ? l.value : e.validationValue), r = be(Nn, null), s = P([]), i = P(!0), c = m(() => !(!ke(l.value === "" ? null : l.value).length && !ke(o.value === "" ? null : o.value).length)), y = m(() => !(!e.disabled && !(r != null && r.isDisabled.value))), d = m(() => !(!e.readonly && !(r != null && r.isReadonly.value))), v = m(() => e.errorMessages.length ? ke(e.errorMessages).slice(0, Math.max(0, +e.maxErrors)) : s.value), w = m(() => !e.error && !v.value.length && (!e.rules.length || !i.value || null)), f = P(!1), $ = m(() => ({ [`${t}--error`]: w.value === !1, [`${t}--dirty`]: c.value, [`${t}--disabled`]: y.value, [`${t}--readonly`]: d.value })), F = m(() => e.name ?? p(n));
  dn(() => {
    r == null || r.register({ id: F.value, validate: u, reset: a, resetValidation: h });
  }), wt(() => {
    r == null || r.unregister(F.value);
  });
  const C = m(() => e.validateOn || (r == null ? void 0 : r.validateOn.value) || "input");
  function a() {
    h(), l.value = null;
  }
  function h() {
    i.value = !0, s.value = [];
  }
  async function u() {
    const S = [];
    f.value = !0;
    for (const k of e.rules) {
      if (S.length >= +(e.maxErrors ?? 1))
        break;
      const b = typeof k == "function" ? k : () => k, x = await b(o.value);
      x !== !0 && (typeof x == "string" ? S.push(x) : console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    return s.value = S, f.value = !1, i.value = !1, s.value;
  }
  return cn(() => r == null ? void 0 : r.update(F.value, w.value, v.value)), qe(() => C.value === "input", () => {
    U(o, () => {
      if (o.value != null)
        u();
      else if (e.focused) {
        const S = U(() => e.focused, (k) => {
          k || u(), S();
        });
      }
    });
  }), qe(() => C.value === "blur", () => {
    U(() => e.focused, (S) => {
      S || u();
    });
  }), U(w, () => {
    r == null || r.update(F.value, w.value, v.value);
  }), { errorMessages: v, isDirty: c, isDisabled: y, isReadonly: d, isPristine: i, isValid: w, isValidating: f, reset: a, resetValidation: h, validate: u, validationClasses: $ };
}
const zn = q({ color: String, start: Boolean, end: Boolean, icon: se, ...Q(), ...ml(), ...Pe({ tag: "i" }), ...Fe() }, "v-icon"), Qe = G()({ name: "VIcon", props: zn(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const o = P(), { themeClasses: r } = Je(e), { iconData: s } = ((d) => {
    const v = be(jn);
    if (!v)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: m(() => {
      var C;
      const w = p(d);
      if (!w)
        return { component: qt };
      let f = w;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (C = v.aliases) == null ? void 0 : C[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${w}"`);
      if (Array.isArray(f))
        return { component: Rn, icon: f };
      if (typeof f != "string")
        return { component: qt, icon: f };
      const $ = Object.keys(v.sets).find((a) => typeof f == "string" && f.startsWith(`${a}:`)), F = $ ? f.slice($.length + 1) : f;
      return { component: v.sets[$ ?? v.defaultSet].component, icon: F };
    }) };
  })(m(() => o.value || e.icon)), { sizeClasses: i } = gl(e), { textColorClasses: c, textColorStyles: y } = he(H(e, "color"));
  return Y(() => {
    var v, w;
    const d = (v = l.default) == null ? void 0 : v.call(l);
    return d && (o.value = (w = d.filter((f) => f.type === pn && f.children && typeof f.children == "string")[0]) == null ? void 0 : w.children), g(s.value.component, { tag: e.tag, icon: s.value.icon, class: ["v-icon", "notranslate", r.value, i.value, c.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [i.value ? void 0 : { fontSize: W(e.size), height: W(e.size), width: W(e.size) }, y.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [d] });
  }), {};
} });
function Il(e) {
  const { t } = function() {
    const n = be(bl);
    if (!n)
      throw new Error("[Vuetify] Could not find injected locale instance");
    return n;
  }();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], r = e[`onClick:${l}`], s = r && o ? t(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return g(Qe, { icon: e[`${l}Icon`], "aria-label": s, onClick: r }, null);
  } };
}
const At = q({ id: String, appendIcon: se, prependIcon: se, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": $e(), "onClick:append": $e(), ...Q(), ...Al(), ...qn() }, "v-input"), We = G()({ name: "VInput", props: { ...At() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: o } = t;
  const { densityClasses: r } = El(e), { InputIcon: s } = Il(e), i = we(), c = m(() => e.id || `input-${i}`), y = m(() => `${c.value}-messages`), { errorMessages: d, isDirty: v, isDisabled: w, isReadonly: f, isPristine: $, isValid: F, isValidating: C, reset: a, resetValidation: h, validate: u, validationClasses: S } = Gn(e, "v-input", c), k = m(() => ({ id: c, messagesId: y, isDirty: v, isDisabled: w, isReadonly: f, isPristine: $, isValid: F, isValidating: C, reset: a, resetValidation: h, validate: u })), b = m(() => d.value.length > 0 ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages);
  return Y(() => {
    var E, V, O, j;
    const x = !(!l.prepend && !e.prependIcon), _ = !(!l.append && !e.appendIcon), A = b.value.length > 0, D = !e.hideDetails || e.hideDetails === "auto" && (A || !!l.details);
    return g("div", { class: ["v-input", `v-input--${e.direction}`, r.value, S.value, e.class], style: e.style }, [x && g("div", { key: "prepend", class: "v-input__prepend" }, [(E = l.prepend) == null ? void 0 : E.call(l, k.value), e.prependIcon && g(s, { key: "prepend-icon", name: "prepend" }, null)]), l.default && g("div", { class: "v-input__control" }, [(V = l.default) == null ? void 0 : V.call(l, k.value)]), _ && g("div", { key: "append", class: "v-input__append" }, [e.appendIcon && g(s, { key: "append-icon", name: "append" }, null), (O = l.append) == null ? void 0 : O.call(l, k.value)]), D && g("div", { class: "v-input__details" }, [g(On, { id: y.value, active: A, messages: b.value }, { message: l.message }), (j = l.details) == null ? void 0 : j.call(l, k.value)])]);
  }), { reset: a, resetValidation: h, validate: u };
} }), Tl = G()({ name: "VLabel", props: { text: String, clickable: Boolean, ...Q(), ...Fe() }, setup(e, t) {
  let { slots: n } = t;
  return Y(() => {
    var l;
    return g("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Ll = Symbol.for("vuetify:selection-control-group"), Pl = q({ color: String, disabled: Boolean, error: Boolean, id: String, inline: Boolean, falseIcon: se, trueIcon: se, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: function e(t, n) {
  if (t === n)
    return !0;
  if (t instanceof Date && n instanceof Date && t.getTime() !== n.getTime() || t !== Object(t) || n !== Object(n))
    return !1;
  const l = Object.keys(t);
  return l.length === Object.keys(n).length && l.every((o) => e(t[o], n[o]));
} }, ...Fe(), ...Al() }, "v-selection-control-group");
G()({ name: "VSelectionControlGroup", props: { defaultsTarget: { type: String, default: "VSelectionControl" }, ...Q(), ...Pl() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ce(e, "modelValue"), o = we(), r = m(() => e.id || `v-selection-control-group-${o}`), s = m(() => e.name || r.value), i = /* @__PURE__ */ new Set();
  return ht(Ll, { modelValue: l, forceUpdate: () => {
    i.forEach((c) => c());
  }, onForceUpdate: (c) => {
    i.add(c), Xt(() => {
      i.delete(c);
    });
  } }), tl({ [e.defaultsTarget]: { color: H(e, "color"), disabled: H(e, "disabled"), density: H(e, "density"), error: H(e, "error"), inline: H(e, "inline"), modelValue: l, multiple: m(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: s, falseIcon: H(e, "falseIcon"), trueIcon: H(e, "trueIcon"), readonly: H(e, "readonly"), ripple: H(e, "ripple"), type: H(e, "type"), valueComparator: H(e, "valueComparator") } }), Y(() => {
    var c;
    return g("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(c = n.default) == null ? void 0 : c.call(n)]);
  }), {};
} });
const ft = Symbol("rippleStop"), Wn = 80;
function Gt(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function mt(e) {
  return e.constructor.name === "TouchEvent";
}
function Ol(e) {
  return e.constructor.name === "KeyboardEvent";
}
const He = { show(e, t) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((f = t == null ? void 0 : t._ripple) != null && f.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: r, scale: s, x: i, y: c, centerX: y, centerY: d } = function($, F) {
    var x;
    let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, h = 0;
    if (!Ol($)) {
      const _ = F.getBoundingClientRect(), A = mt($) ? $.touches[$.touches.length - 1] : $;
      a = A.clientX - _.left, h = A.clientY - _.top;
    }
    let u = 0, S = 0.3;
    (x = F._ripple) != null && x.circle ? (S = 0.15, u = F.clientWidth / 2, u = C.center ? u : u + Math.sqrt((a - u) ** 2 + (h - u) ** 2) / 4) : u = Math.sqrt(F.clientWidth ** 2 + F.clientHeight ** 2) / 2;
    const k = (F.clientWidth - 2 * u) / 2 + "px", b = (F.clientHeight - 2 * u) / 2 + "px";
    return { radius: u, scale: S, x: C.center ? k : a - u + "px", y: C.center ? b : h - u + "px", centerX: k, centerY: b };
  }(e, t, n), v = 2 * r + "px";
  o.className = "v-ripple__animation", o.style.width = v, o.style.height = v, t.appendChild(l);
  const w = window.getComputedStyle(t);
  w && w.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Gt(o, `translate(${i}, ${c}) scale3d(${s},${s},${s})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Gt(o, `translate(${y}, ${d}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var r;
  if (!((r = e == null ? void 0 : e._ripple) != null && r.enabled))
    return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0)
    return;
  const n = t[t.length - 1];
  if (n.dataset.isHiding)
    return;
  n.dataset.isHiding = "true";
  const l = performance.now() - Number(n.dataset.activated), o = Math.max(250 - l, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var s;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((s = n.parentNode) == null ? void 0 : s.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, o);
} };
function jl(e) {
  return e === void 0 || !!e;
}
function Ie(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[ft]) {
    if (e[ft] = !0, mt(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Ol(e), n._ripple.class && (t.class = n._ripple.class), mt(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        He.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Wn);
    } else
      He.show(e, n, t);
  }
}
function zt(e) {
  e[ft] = !0;
}
function J(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        J(e);
      }));
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), He.hide(t);
  }
}
function Rl(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Te = !1;
function Ml(e) {
  Te || e.keyCode !== Vt.enter && e.keyCode !== Vt.space || (Te = !0, Ie(e));
}
function Nl(e) {
  Te = !1, J(e);
}
function ql(e) {
  Te && (Te = !1, J(e));
}
function Wt(e, t, n) {
  const { value: l, modifiers: o } = t, r = jl(l);
  if (r || He.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = r, e._ripple.centered = o.center, e._ripple.circle = o.circle, ct(l) && l.class && (e._ripple.class = l.class), r && !n) {
    if (o.stop)
      return e.addEventListener("touchstart", zt, { passive: !0 }), void e.addEventListener("mousedown", zt);
    e.addEventListener("touchstart", Ie, { passive: !0 }), e.addEventListener("touchend", J, { passive: !0 }), e.addEventListener("touchmove", Rl, { passive: !0 }), e.addEventListener("touchcancel", J), e.addEventListener("mousedown", Ie), e.addEventListener("mouseup", J), e.addEventListener("mouseleave", J), e.addEventListener("keydown", Ml), e.addEventListener("keyup", Nl), e.addEventListener("blur", ql), e.addEventListener("dragstart", J, { passive: !0 });
  } else
    !r && n && Gl(e);
}
function Gl(e) {
  e.removeEventListener("mousedown", Ie), e.removeEventListener("touchstart", Ie), e.removeEventListener("touchend", J), e.removeEventListener("touchmove", Rl), e.removeEventListener("touchcancel", J), e.removeEventListener("mouseup", J), e.removeEventListener("mouseleave", J), e.removeEventListener("keydown", Ml), e.removeEventListener("keyup", Nl), e.removeEventListener("dragstart", J), e.removeEventListener("blur", ql);
}
const Hn = { mounted: function(e, t) {
  Wt(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, Gl(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Wt(e, t, jl(t.oldValue));
} }, zl = q({ label: String, trueValue: null, falseValue: null, value: null, ...Q(), ...Pl() }, "v-selection-control"), Un = G()({ name: "VSelectionControl", directives: { Ripple: Hn }, inheritAttrs: !1, props: zl(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { group: o, densityClasses: r, icon: s, model: i, textColorClasses: c, textColorStyles: y, trueValue: d } = function(u) {
    const S = be(Ll, void 0), { densityClasses: k } = El(u), b = ce(u, "modelValue"), x = m(() => u.trueValue !== void 0 ? u.trueValue : u.value === void 0 || u.value), _ = m(() => u.falseValue !== void 0 && u.falseValue), A = m(() => !!u.multiple || u.multiple == null && Array.isArray(b.value)), D = m({ get() {
      const j = S ? S.modelValue.value : b.value;
      return A.value ? j.some((R) => u.valueComparator(R, x.value)) : u.valueComparator(j, x.value);
    }, set(j) {
      if (u.readonly)
        return;
      const R = j ? x.value : _.value;
      let K = R;
      A.value && (K = j ? [...ke(b.value), R] : ke(b.value).filter((oe) => !u.valueComparator(oe, x.value))), S ? S.modelValue.value = K : b.value = K;
    } }), { textColorClasses: E, textColorStyles: V } = he(m(() => !D.value || u.error || u.disabled ? void 0 : u.color)), O = m(() => D.value ? u.trueIcon : u.falseIcon);
    return { group: S, densityClasses: k, trueValue: x, falseValue: _, model: D, textColorClasses: E, textColorStyles: V, icon: O };
  }(e), v = we(), w = m(() => e.id || `input-${v}`), f = P(!1), $ = P(!1), F = P();
  function C(u) {
    f.value = !0, (!Lt || Lt && u.target.matches(":focus-visible")) && ($.value = !0);
  }
  function a() {
    f.value = !1, $.value = !1;
  }
  function h(u) {
    e.readonly && o && dt(() => o.forceUpdate()), i.value = u.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    F.value && (F.value.checked = i.value);
  }), Y(() => {
    var b, x;
    const u = l.label ? l.label({ label: e.label, props: { for: w.value } }) : e.label, [S, k] = xt(n);
    return g("div", le({ class: ["v-selection-control", { "v-selection-control--dirty": i.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": f.value, "v-selection-control--focus-visible": $.value, "v-selection-control--inline": e.inline }, r.value, e.class] }, S, { style: e.style }), [g("div", { class: ["v-selection-control__wrapper", c.value], style: y.value }, [(b = l.default) == null ? void 0 : b.call(l), Ke(g("div", { class: ["v-selection-control__input"] }, [s.value && g(Qe, { key: "icon", icon: s.value }, null), g("input", le({ ref: F, checked: i.value, disabled: e.disabled, id: w.value, onBlur: a, onFocus: C, onInput: h, "aria-disabled": e.readonly, type: e.type, value: d.value, name: e.name, "aria-checked": e.type === "checkbox" ? i.value : void 0 }, k), null), (x = l.input) == null ? void 0 : x.call(l, { model: i, textColorClasses: c, textColorStyles: y, props: { onFocus: C, onBlur: a, id: w.value } })]), [[Jt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), u && g(Tl, { for: w.value, clickable: !0 }, { default: () => [u] })]);
  }), { isFocused: f, input: F };
} }), Wl = q({ indeterminate: Boolean, indeterminateIcon: { type: se, default: "$checkboxIndeterminate" }, ...zl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "v-checkbox-btn"), Ht = G()({ name: "VCheckboxBtn", props: Wl(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ce(e, "indeterminate"), o = ce(e, "modelValue");
  function r(c) {
    l.value && (l.value = !1);
  }
  const s = m(() => e.indeterminate ? e.indeterminateIcon : e.falseIcon), i = m(() => e.indeterminate ? e.indeterminateIcon : e.trueIcon);
  return Y(() => g(Un, le(e, { modelValue: o.value, "onUpdate:modelValue": [(c) => o.value = c, r], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: s.value, trueIcon: i.value, "aria-checked": e.indeterminate ? "mixed" : void 0 }), n)), {};
} }), gt = G()({ name: "VCheckbox", inheritAttrs: !1, props: { ...At(), ...function(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}(Wl(), ["inline"]) }, emits: { "update:focused": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { isFocused: o, focus: r, blur: s } = Bt(e), i = we(), c = m(() => e.id || `checkbox-${i}`);
  return Y(() => {
    const [y, d] = xt(n), [v, w] = We.filterProps(e), [f, $] = Ht.filterProps(e);
    return g(We, le({ class: ["v-checkbox", e.class] }, y, v, { id: c.value, focused: o.value, style: e.style }), { ...l, default: (F) => {
      let { id: C, messagesId: a, isDisabled: h, isReadonly: u } = F;
      return g(Ht, le(f, { id: C.value, "aria-describedby": a.value, disabled: h.value, readonly: u.value }, d, { onFocus: r, onBlur: s }), l);
    } });
  }), {};
} }), Kn = ["colspan"], Yn = ["colspan"], Xn = ["colspan", "innerHTML"], Zn = ["colspan", "onClick"], Jn = ["innerHTML"], Qn = Dt(pe({ __name: "HeadersSlot", props: { isTheadSlot: { default: !1, required: !1, type: Boolean }, loadedDrilldown: { required: !0, type: Object }, slotProps: { required: !1, type: Object } }, emits: ["click:selectAll", "update:sortBy"], setup(e, { emit: t }) {
  var C;
  const n = e, l = Ye(), o = P(!((C = n.slotProps) != null && C.allSelected)), r = m(() => {
    var a;
    return (a = n.slotProps) == null ? void 0 : a.columns;
  }), s = m(() => {
    var a;
    return (a = n.slotProps) == null ? void 0 : a.someSelected;
  }), i = m(() => {
    var a;
    return ((a = n.slotProps) == null ? void 0 : a.allSelected) || o.value;
  }), c = m(() => {
    var a;
    return s.value && !((a = n.slotProps) != null && a.allSelected);
  }), y = m(() => ({ [`${T}--header-row`]: !0, [`${T}--header-row-${n.loadedDrilldown.level}`]: !0 })), d = (a, h = "") => ({ [`${T}--header-row-th`]: !0, [`${T}--header-row-th-${h}`]: h !== "", [`${T}--header-row-th-${h}-${n.loadedDrilldown.level}`]: h, [`${T}--header-row-th-${n.loadedDrilldown.level}`]: !0, [`${T}--header-row-th-sortable`]: a.sortable, [`${T}--header-row-th-sortable-default-color`]: a.sortable && n.loadedDrilldown.colors === !1, [`${a.cellClass}`]: a.cellClass }), v = (a, h = !1) => {
    const u = { minWidth: a.width ? Nt(a.width) : "auto", width: a.width ? Nt(a.width) : "auto" };
    if (h && !a.width && (u.width = "48px", u.minWidth = "48px"), n.loadedDrilldown.colors === !1)
      return u;
    const S = Xe(n.loadedDrilldown, l, "header");
    return u.backgroundColor = S.bg, u.color = S.text, u;
  };
  U(o, (a) => {
    var h;
    (h = n.slotProps) == null || h.selectAll(a), t("click:selectAll", o.value);
  }), U(i, (a) => {
    o.value = a;
  }), U(s, (a) => {
    a || (o.value = !1);
  });
  const w = m(() => ({ "d-flex": !0, [`${T}--header-select-all-checkbox`]: !0, [`${T}--header-select-all-checkbox-${n.loadedDrilldown.level}`]: !0 })), f = (a) => ({ "px-1": !0, [`${T}--header-row-th-sortable-sort-icon`]: !0, [`${T}--header-row-th-sortable-sort-icon-${n.loadedDrilldown.level}`]: !0, [`${T}--header-row-th-sortable-sort-icon-desc`]: $(a) === "desc", [`${T}--header-row-th-sortable-sort-icon-asc`]: $(a) === "asc" });
  function $(a) {
    if (n.loadedDrilldown.sortBy) {
      const h = n.loadedDrilldown.sortBy.find((u) => u.key === a);
      if (h)
        return h.order;
    }
  }
  function F(a) {
    return $l(n.loadedDrilldown, a, 0);
  }
  return (a, h) => (B(), L("tr", { class: M(p(y)) }, [(B(!0), L(ne, null, ie(p(r), (u) => {
    return B(), L(ne, { key: u }, [a.$slots[`header.${u.key}`] ? (B(), L("th", { key: 0, class: M(d(u, u.key)), colspan: u.colspan || 1, style: ae(v(u, !0)) }, [Me("a "), N(a.$slots, `header.${u.key}`, { column: u }, void 0, !0)], 14, Kn)) : u.key === "data-table-select" ? (B(), L("th", { key: 1, class: M(d(u, "header-data-table-select")), colspan: u.colspan || 1, style: ae(v(u, !0)) }, [g(gt, { modelValue: p(o), "onUpdate:modelValue": h[0] || (h[0] = (k) => ge(o) ? o.value = k : null), class: M(p(w)), density: e.loadedDrilldown.density, focused: !1, indeterminate: p(c) }, null, 8, ["modelValue", "class", "density", "indeterminate"])], 14, Yn)) : u.key === "data-table-expand" ? (B(), L("th", { key: 2, class: M(d(u, "data-table-expand")), colspan: u.colspan || 1, style: ae(v(u, !0)), innerHTML: F(u) }, null, 14, Xn)) : (B(), L("th", { key: 3, class: M(d(u)), colspan: u.colspan || 1, style: ae(v(u)), onClick: (k) => function(b) {
      var x;
      b.sortable && ((x = n.slotProps) == null || x.toggleSort(b.key), t("update:sortBy", b));
    }(u) }, [me("div", { class: M((S = u.align, { "d-flex align-center": !0, [`justify-${S}`]: S, "justify-start": !S })) }, [me("span", { innerHTML: F(u) }, null, 8, Jn), u.sortable && a.$slots["header.sortIcon"] ? (B(), L("span", { key: 0, class: M(f(u.key)) }, [N(a.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : u.sortable ? (B(), te(Qe, { key: 1, class: M(f(u.key)) }, { default: I(() => [Me(" mdi mdi-arrow-up ")]), _: 2 }, 1032, ["class"])) : z("", !0)], 2)], 14, Zn))], 64);
    var S;
  }), 128))], 2));
} }), [["__scopeId", "data-v-30cfcb6a"]]), eo = ["colspan"], to = ["colspan"], lo = ["innerHTML"], no = Dt(pe({ __name: "ItemSlot", props: { items: { required: !0, type: Array }, loadedDrilldown: { required: !0, type: Object }, slotProps: { required: !0, type: Object } }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(e, { emit: t }) {
  const n = e, l = m(() => n.slotProps.columns), o = m(() => n.slotProps.index), r = m(() => n.slotProps.isExpanded), s = m(() => n.slotProps.item), i = m(() => n.slotProps.level), c = m(() => n.slotProps.toggleExpand), y = m(() => n.slotProps.toggleSelect), d = m(() => {
    const C = n.loadedDrilldown;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": C.expandOnClick && C.level < C.levels, [`${T}--body-row`]: !0, [`${T}--body-row-${C.level}`]: !0 };
  }), v = (C) => ({ [`${T}--body-row-td`]: !0, [`${T}--body-row-td-${n.loadedDrilldown.level}`]: !0, [`${C.cellClass}`]: C.cellClass });
  function w(C) {
    const { item: a, level: h, toggleExpand: u } = C;
    if (!(n.loadedDrilldown.level >= n.loadedDrilldown.levels)) {
      if (C.$event) {
        if (!n.loadedDrilldown.expandOnClick)
          return;
        t("click:row", C.$event);
      }
      h === n.loadedDrilldown.level && u(a), t("update:expanded", C);
    }
  }
  const f = P(!1);
  function $(C) {
    const { item: a, level: h, toggleSelect: u } = C;
    h === n.loadedDrilldown.level && u(a), t("click:row:checkbox", a);
  }
  function F(C, a, h) {
    return function(u, S, k) {
      const b = u[S.key];
      return S.renderItem ? S.renderItem(b, u, S, k) : b;
    }(C.raw, a, h);
  }
  return U(() => n.slotProps.allRowsSelected, () => {
    f.value = n.slotProps.allRowsSelected;
  }), (C, a) => (B(), L("tr", { class: M(p(d)), onClick: a[5] || (a[5] = (h) => w({ columns: p(l), index: p(o), isExpanded: p(r), item: p(s), level: p(i), toggleExpand: p(c), $event: h })) }, [(B(!0), L(ne, null, ie(p(l), (h) => (B(), L(ne, { key: h }, [h.key === "data-table-expand" || e.loadedDrilldown.showExpand ? (B(), L("td", { key: 0, class: M(v(h)), colspan: h.colspan || 1 }, [e.loadedDrilldown.level < e.loadedDrilldown.levels ? (B(), L("div", { key: 0, class: M(["v-drilldown-table--expand-icon", p(r)(p(s)) ? "rotate-180" : ""]), onClick: a[0] || (a[0] = (u) => w({ columns: p(l), index: p(o), isExpanded: p(r), item: p(s), level: p(i), toggleExpand: p(c) })) }, [C.$slots["item.data-table-expand"] ? N(C.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (B(), te(Qe, { key: 1 }, { default: I(() => [Me(" mdi-chevron-down ")]), _: 1 }))], 2)) : z("", !0)], 10, eo)) : h.key === "data-table-select" && C.$slots["item.data-table-select"] ? (B(), L("td", { key: 1, class: M(v(h)) }, [g(gt, { modelValue: p(f), "onUpdate:modelValue": a[1] || (a[1] = (u) => ge(f) ? f.value = u : null), class: "d-flex v-simple-checkbox", density: e.loadedDrilldown.density, onClick: a[2] || (a[2] = (u) => $({ columns: p(l), index: p(o), item: p(s), level: p(i), toggleSelect: p(y) })) }, null, 8, ["modelValue", "density"])], 2)) : h.key === "data-table-select" || e.loadedDrilldown.showSelect ? (B(), L("td", { key: 2, class: M(v(h)) }, [g(gt, { modelValue: p(f), "onUpdate:modelValue": a[3] || (a[3] = (u) => ge(f) ? f.value = u : null), class: "d-flex v-simple-checkbox", density: e.loadedDrilldown.density, onClick: a[4] || (a[4] = (u) => $({ columns: p(l), index: p(o), item: p(s), level: p(i), toggleSelect: p(y) })) }, null, 8, ["modelValue", "density"])], 2)) : C.$slots[`item.${h.key}`] ? N(C.$slots, `item.${h.key}`, { key: 3, colspan: h.colspan || 1, column: h, index: p(o), item: p(s), value: p(s).raw[h.key] }, void 0, !0) : (B(), L("td", { key: 4, class: M(v(h)), colspan: h.colspan || 1 }, [me("span", { innerHTML: F(p(s), h, p(o)) }, null, 8, lo)], 10, to))], 64))), 128))], 2));
} }), [["__scopeId", "data-v-231207fc"]]), oo = { key: 1 }, ro = { class: "v-drilldown-table--footer-row" }, ao = ["colspan", "innerHTML"], so = ["colspan", "innerHTML"], io = ["colspan", "innerHTML"], uo = ["colspan"], co = pe({ __name: "TfootSlot", props: { loadedDrilldown: { required: !0, type: Object } }, setup(e) {
  const t = e, n = Ye(), l = m(() => t.loadedDrilldown.footers), o = (i) => ({ [`${T}--footer-row-td`]: !0, [`${T}--footer-row-td-${t.loadedDrilldown.level}`]: !0, [`${i.cellClass}`]: i.cellClass }), r = m(() => {
    if (t.loadedDrilldown.colors === !1)
      return {};
    const i = Xe(t.loadedDrilldown, n, "footer");
    return { backgroundColor: i.bg, color: i.text };
  });
  function s(i) {
    return $l(t.loadedDrilldown, i, 0);
  }
  return (i, c) => {
    var y;
    return B(), L(ne, null, [i.$slots.tfoot ? N(i.$slots, "tfoot", { key: 0 }) : z("", !0), (y = p(l)) != null && y.length ? (B(), L("tfoot", oo, [me("tr", ro, [(B(!0), L(ne, null, ie(p(l), (d) => (B(), L(ne, { key: d }, [i.$slots[`tfoot.${d.key}`] ? N(i.$slots, `tfoot.${d.key}`, { key: 0, column: d, style: ae(p(r)) }) : d.key === "data-table-select" || e.loadedDrilldown.showSelect ? (B(), L("td", { key: 1, class: M(o(d)), colspan: d.colspan || 1, style: ae(p(r)), innerHTML: s(d) }, null, 14, ao)) : d.key === "data-table-expand" ? (B(), L("td", { key: 2, class: M(o(d)), colspan: d.colspan || 1, style: ae(p(r)), innerHTML: s(d) }, null, 14, so)) : d.renderFooter || d.renderer || d.renderCell ? (B(), L("td", { key: 3, class: M(o(d)), colspan: d.colspan || 1, style: ae(p(r)), innerHTML: s(d) }, null, 14, io)) : (B(), L("td", { key: 4, class: M(o(d)), colspan: d.colspan || 1, style: ae(p(r)) }, Zt(d.title), 15, uo))], 64))), 128))])])) : z("", !0)], 64);
  };
} }), je = G()({ name: "VFieldLabel", props: { floating: Boolean, ...Q() }, setup(e, t) {
  let { slots: n } = t;
  return Y(() => g(Tl, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), po = q({ loading: [Boolean, String] }, "loader");
function vo(e, t) {
  var l;
  let { slots: n } = t;
  return g("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || g(kl, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const fo = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Hl = q({ appendInnerIcon: se, bgColor: String, clearable: Boolean, clearIcon: { type: se, default: "$clear" }, active: Boolean, color: String, baseColor: String, dirty: Boolean, disabled: Boolean, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: se, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => fo.includes(e) }, "onClick:clear": $e(), "onClick:appendInner": $e(), "onClick:prependInner": $e(), ...Q(), ...po(), ...Cl(), ...Fe() }, "v-field"), Ul = G()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Vl(), ...Hl() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const { themeClasses: r } = Je(e), { loaderClasses: s } = function(E) {
    let V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
    return { loaderClasses: m(() => ({ [`${V}--loading`]: E.loading })) };
  }(e), { focusClasses: i, isFocused: c, focus: y, blur: d } = Bt(e), { InputIcon: v } = Il(e), { roundedClasses: w } = xl(e), f = m(() => e.dirty || e.active), $ = m(() => !(e.singleLine || !e.label && !o.label)), F = we(), C = m(() => e.id || `input-${F}`), a = m(() => `${C.value}-messages`), h = P(), u = P(), S = P(), { backgroundColorClasses: k, backgroundColorStyles: b } = vt(H(e, "bgColor")), { textColorClasses: x, textColorStyles: _ } = he(m(() => e.error || e.disabled ? void 0 : f.value && c.value ? e.color : e.baseColor));
  U(f, (E) => {
    if ($.value) {
      const V = h.value.$el, O = u.value.$el;
      requestAnimationFrame(() => {
        const j = function(fe) {
          const ue = fe.getBoundingClientRect(), Oe = getComputedStyle(fe), ee = Oe.transform;
          if (ee) {
            let X, De, Be, tt, lt;
            if (ee.startsWith("matrix3d("))
              X = ee.slice(9, -1).split(/, /), De = +X[0], Be = +X[5], tt = +X[12], lt = +X[13];
            else {
              if (!ee.startsWith("matrix("))
                return new ot(ue);
              X = ee.slice(7, -1).split(/, /), De = +X[0], Be = +X[3], tt = +X[4], lt = +X[5];
            }
            const nt = Oe.transformOrigin, Zl = ue.x - tt - (1 - De) * parseFloat(nt), Jl = ue.y - lt - (1 - Be) * parseFloat(nt.slice(nt.indexOf(" ") + 1)), Ql = De ? ue.width / De : fe.offsetWidth + 1, en = Be ? ue.height / Be : fe.offsetHeight + 1;
            return new ot({ x: Zl, y: Jl, width: Ql, height: en });
          }
          return new ot(ue);
        }(V), R = O.getBoundingClientRect(), K = R.x - j.x, oe = R.y - j.y - (j.height / 2 - R.height / 2), re = R.width / 0.75, ve = Math.abs(re - j.width) > 1 ? { maxWidth: W(re) } : void 0, et = getComputedStyle(V), _e = getComputedStyle(O), Kl = 1e3 * parseFloat(et.transitionDuration) || 150, Yl = parseFloat(_e.getPropertyValue("--v-field-label-scale")), Xl = _e.getPropertyValue("color");
        V.style.visibility = "visible", O.style.visibility = "hidden", function(fe, ue, Oe) {
          if (fe.animate === void 0)
            return { finished: Promise.resolve() };
          let ee;
          try {
            ee = fe.animate(ue, Oe);
          } catch {
            return { finished: Promise.resolve() };
          }
          return ee.finished === void 0 && (ee.finished = new Promise((X) => {
            ee.onfinish = () => {
              X(ee);
            };
          })), ee;
        }(V, { transform: `translate(${K}px, ${oe}px) scale(${Yl})`, color: Xl, ...ve }, { duration: Kl, easing: "cubic-bezier(0.4, 0, 0.2, 1)", direction: E ? "normal" : "reverse" }).finished.then(() => {
          V.style.removeProperty("visibility"), O.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const A = m(() => ({ isActive: f, isFocused: c, controlRef: S, blur: d, focus: y }));
  function D(E) {
    E.target !== document.activeElement && E.preventDefault();
  }
  return Y(() => {
    var K, oe, re;
    const E = e.variant === "outlined", V = o["prepend-inner"] || e.prependInnerIcon, O = !(!e.clearable && !o.clear), j = !!(o["append-inner"] || e.appendInnerIcon || O), R = o.label ? o.label({ label: e.label, props: { for: C.value } }) : e.label;
    return g("div", le({ class: ["v-field", { "v-field--active": f.value, "v-field--appended": j, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": V, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !R, [`v-field--variant-${e.variant}`]: !0 }, r.value, k.value, i.value, s.value, w.value, e.class], style: [b.value, _.value, e.style], onClick: D }, n), [g("div", { class: "v-field__overlay" }, null), g(vo, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), V && g("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && g(v, { key: "prepend-icon", name: "prependInner" }, null), (K = o["prepend-inner"]) == null ? void 0 : K.call(o, A.value)]), g("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && $.value && g(je, { key: "floating-label", ref: u, class: [x.value], floating: !0, for: C.value }, { default: () => [R] }), g(je, { ref: h, for: C.value }, { default: () => [R] }), (oe = o.default) == null ? void 0 : oe.call(o, { ...A.value, props: { id: C.value, class: "v-field__input", "aria-describedby": a.value }, focus: y, blur: d })]), O && g(Pn, { key: "clear" }, { default: () => [Ke(g("div", { class: "v-field__clearable", onMousedown: (ve) => {
      ve.preventDefault(), ve.stopPropagation();
    } }, [o.clear ? o.clear() : g(v, { name: "clear" }, null)]), [[Qt, e.dirty]])] }), j && g("div", { key: "append", class: "v-field__append-inner" }, [(re = o["append-inner"]) == null ? void 0 : re.call(o, A.value), e.appendInnerIcon && g(v, { key: "append-icon", name: "appendInner" }, null)]), g("div", { class: ["v-field__outline", x.value] }, [E && g(ne, null, [g("div", { class: "v-field__outline__start" }, null), $.value && g("div", { class: "v-field__outline__notch" }, [g(je, { ref: u, floating: !0, for: C.value }, { default: () => [R] })]), g("div", { class: "v-field__outline__end" }, null)]), ["plain", "underlined"].includes(e.variant) && $.value && g(je, { ref: u, floating: !0, for: C.value }, { default: () => [R] })])]);
  }), { controlRef: S };
} });
function mo(e) {
  return Ct(e, Object.keys(Ul.props).filter((t) => {
    return n = t, !yn.test(n) && t !== "class" && t !== "style";
    var n;
  }));
}
const go = G()({ name: "VCounter", functional: !0, props: { active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...Q(), ...Dl({ transition: { component: _l } }) }, setup(e, t) {
  let { slots: n } = t;
  const l = m(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return Y(() => g(Bl, { transition: e.transition }, { default: () => [Ke(g("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Qt, e.active]])] })), {};
} });
function Ut(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const yo = { mounted: function(e, t) {
  if (!nl)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: o, options: r } = typeof l == "object" ? l : { handler: l, options: {} }, s = new IntersectionObserver(function() {
    var v;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], c = arguments.length > 1 ? arguments[1] : void 0;
    const y = (v = e._observe) == null ? void 0 : v[t.instance.$.uid];
    if (!y)
      return;
    const d = i.some((w) => w.isIntersecting);
    !o || n.quiet && !y.init || n.once && !d && !y.init || o(d, i, c), d && n.once ? Ut(e, t) : y.init = !0;
  }, r);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: s }, s.observe(e);
}, unmounted: Ut }, st = Symbol("Forwarded refs");
function it(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l)
      return l;
    n = Object.getPrototypeOf(n);
  }
}
const ho = ["color", "file", "time", "date", "datetime-local", "week", "month"], bo = q({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...At(), ...Hl() }, "v-text-field"), wo = G()({ name: "VTextField", directives: { Intersect: yo }, inheritAttrs: !1, props: bo(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const r = ce(e, "modelValue"), { isFocused: s, focus: i, blur: c } = Bt(e), y = m(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : (r.value ?? "").toString().length), d = m(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function v(k, b) {
    var x, _;
    e.autofocus && k && ((_ = (x = b[0].target) == null ? void 0 : x.focus) == null || _.call(x));
  }
  const w = P(), f = P(), $ = P(), F = m(() => ho.includes(e.type) || e.persistentPlaceholder || s.value || e.active);
  function C() {
    var k;
    $.value !== document.activeElement && ((k = $.value) == null || k.focus()), s.value || i();
  }
  function a(k) {
    l("mousedown:control", k), k.target !== $.value && (C(), k.preventDefault());
  }
  function h(k) {
    C(), l("click:control", k);
  }
  function u(k) {
    k.stopPropagation(), C(), dt(() => {
      r.value = null, function(b) {
        for (var x = arguments.length, _ = new Array(x > 1 ? x - 1 : 0), A = 1; A < x; A++)
          _[A - 1] = arguments[A];
        if (Array.isArray(b))
          for (const D of b)
            D(..._);
        else
          typeof b == "function" && b(..._);
      }(e["onClick:clear"], k);
    });
  }
  function S(k) {
    var x;
    const b = k.target;
    if (r.value = b.value, ((x = e.modelModifiers) == null ? void 0 : x.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const _ = [b.selectionStart, b.selectionEnd];
      dt(() => {
        b.selectionStart = _[0], b.selectionEnd = _[1];
      });
    }
  }
  return Y(() => {
    const k = !!(o.counter || e.counter || e.counterValue), b = !(!k && !o.details), [x, _] = xt(n), [{ modelValue: A, ...D }] = We.filterProps(e), [E] = mo(e);
    return g(We, le({ ref: w, modelValue: r.value, "onUpdate:modelValue": (V) => r.value = V, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--flush-details": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, x, D, { focused: s.value }), { ...o, default: (V) => {
      let { id: O, isDisabled: j, isDirty: R, isReadonly: K, isValid: oe } = V;
      return g(Ul, le({ ref: f, onMousedown: a, onClick: h, "onClick:clear": u, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, E, { id: O.value, active: F.value || R.value, dirty: R.value || e.dirty, disabled: j.value, focused: s.value, error: oe.value === !1 }), { ...o, default: (re) => {
        let { props: { class: ve, ...et } } = re;
        const _e = Ke(g("input", le({ ref: $, value: r.value, onInput: S, autofocus: e.autofocus, readonly: K.value, disabled: j.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: C, onBlur: c }, et, _), null), [[Jt("intersect"), { handler: v }, null, { once: !0 }]]);
        return g(ne, null, [e.prefix && g("span", { class: "v-text-field__prefix" }, [e.prefix]), o.default ? g("div", { class: ve, "data-no-activator": "" }, [o.default(), _e]) : vn(_e, { class: ve }), e.suffix && g("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: b ? (V) => {
      var O;
      return g(ne, null, [(O = o.details) == null ? void 0 : O.call(o, V), k && g(ne, null, [g("span", null, null), g(go, { active: e.persistentCounter || s.value, value: y.value, max: d.value }, o.counter)])]);
    } : void 0 });
  }), function(k) {
    for (var b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), _ = 1; _ < b; _++)
      x[_ - 1] = arguments[_];
    return k[st] = x, new Proxy(k, { get(A, D) {
      if (Reflect.has(A, D))
        return Reflect.get(A, D);
      if (typeof D != "symbol" && !D.startsWith("__")) {
        for (const E of x)
          if (E.value && Reflect.has(E.value, D)) {
            const V = Reflect.get(E.value, D);
            return typeof V == "function" ? V.bind(E.value) : V;
          }
      }
    }, has(A, D) {
      if (Reflect.has(A, D))
        return !0;
      if (typeof D == "symbol" || D.startsWith("__"))
        return !1;
      for (const E of x)
        if (E.value && Reflect.has(E.value, D))
          return !0;
      return !1;
    }, getOwnPropertyDescriptor(A, D) {
      var V;
      const E = Reflect.getOwnPropertyDescriptor(A, D);
      if (E)
        return E;
      if (typeof D != "symbol" && !D.startsWith("__")) {
        for (const O of x) {
          if (!O.value)
            continue;
          const j = it(O.value, D) ?? ("_" in O.value ? it((V = O.value._) == null ? void 0 : V.setupState, D) : void 0);
          if (j)
            return j;
        }
        for (const O of x) {
          const j = O.value && O.value[st];
          if (!j)
            continue;
          const R = j.slice();
          for (; R.length; ) {
            const K = R.shift(), oe = it(K.value, D);
            if (oe)
              return oe;
            const re = K.value && K.value[st];
            re && R.push(...re);
          }
        }
      }
    } });
  }({}, w, f, $);
} }), Co = pe({ __name: "TopSlot", props: { loadedDrilldown: { required: !0, type: Object } }, emits: ["update:search"], setup(e, { emit: t }) {
  const n = e, l = P("");
  U(l, () => {
    t("update:search", l.value);
  });
  const o = m(() => {
    const r = n.loadedDrilldown.searchProps.cols;
    return { [`${T}--search-field`]: !0, [`v-col-${r.xs}`]: r.xs, [`v-col-sm-${r.sm}`]: r.sm, [`v-col-md-${r.md}`]: r.md, [`v-col-lg-${r.lg}`]: r.lg, [`v-col-xl-${r.xl}`]: r.xl, [`v-col-xxl-${r.xxl}`]: r.xxl };
  });
  return (r, s) => r.$slots.top ? N(r.$slots, "top", { key: 0 }) : e.loadedDrilldown.showSearch || r.$slots["top.left"] || r.$slots["top.right"] ? (B(), te(xe, { key: 1, lg: "12" }, { default: I(() => [g(fl, null, { default: I(() => [r.$slots["top.left"] ? N(r.$slots, "top.left", { key: 0 }) : e.loadedDrilldown.showSearch ? (B(), te(xe, { key: 1, class: M(["d-flex align-center justify-end", p(o)]) }, { default: I(() => [e.loadedDrilldown.showSearch ? (B(), te(wo, { key: 0, modelValue: p(l), "onUpdate:modelValue": s[0] || (s[0] = (i) => ge(l) ? l.value = i : null), class: "mt-0 pt-0", density: e.loadedDrilldown.searchProps.density, "hide-details": "", label: "Search", "single-line": "", variant: e.loadedDrilldown.searchProps.variant }, null, 8, ["modelValue", "density", "variant"])) : z("", !0)]), _: 1 }, 8, ["class"])) : z("", !0), r.$slots["top.right"] ? N(r.$slots, "top.right", { key: 2 }) : z("", !0)]), _: 3 })]), _: 3 })) : z("", !0);
} }), xo = { key: 0, class: "text-center ma-0 pa-0" }, ko = ["colspan"], $o = ["colspan"], Kt = pe({ __name: "VDrilldownTable", props: { ...mn }, emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:sortBy"], setup(e, { emit: t }) {
  const n = e;
  let l = Yt({ customFilter: void 0, customKeyFilter: void 0, drilldownKey: "", expanded: [], filterKeys: [], filterMode: "some", fixedFooter: !0, fixedHeader: !0, height: "auto", hideNoData: !1, itemChildren: "children", itemChildrenKey: "child", itemProps: "props", itemTitle: "title", itemValue: "id", items: [], itemsPerPage: 10, level: 0, levels: 0, loaderType: "", modelValue: [], noFilter: !1, page: 1, returnObject: !0, searchProps: { cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "compact", variant: "underlined" }, server: !1, showExpand: !1, width: "100%" });
  const o = P(!1), r = P(""), s = P(""), i = Ye(), c = fn(), y = m(() => !!l.loading || l.hideNoData);
  U(n, () => {
    n.level === 0 && l.level !== 0 || function() {
      if (n.drilldown) {
        l = Ve(l, n.drilldown);
        const a = l.items.find((h) => h[l.drilldownKey] === n.item.raw[l.drilldownKey]);
        return l = Ve(l, a[l.itemChildrenKey]), void (n.levels === n.level && (l.showExpand = !1));
      }
      l = Ve(l, n);
    }();
  });
  const d = m(() => {
    const a = l.elevation;
    return { [`${T}`]: !0, [`${T}--level-${l.level}`]: !0, [`${T}--hover`]: l.hover, [`${T}--child`]: n.isDrilldown, [`elevation-${a}`]: parseInt(a) > 0, "pb-2": !0 };
  }), v = m(() => {
    let a = {};
    l.colors && (a = Xe(l, i, "default"));
    const h = { borderBottom: "none" };
    return a.border && (h.borderBottom = `1px solid ${a.border}`), h;
  });
  function w(a) {
    a.isExpanded(a.item) && t("update:drilldown", { ...a, items: l.items }), t("update:expanded", a);
  }
  function f(a) {
    return l.itemsPerPage = a, !0;
  }
  function $() {
  }
  function F() {
  }
  function C(a) {
    l.sortBy = a, t("update:sortBy", a);
  }
  return (a, h) => {
    const u = ut("VDrilldownTable", !0), S = ut("v-data-table");
    return p(l).server ? z("", !0) : (B(), te(S, le({ key: 0 }, a.$attrs, { class: p(d), density: p(l).density, "expand-on-click": p(l).expandOnClick, expanded: p(l).expanded, headers: p(l).headers, height: p(l).height, "hide-no-data": p(y), hover: p(l).hover, "item-title": p(l).itemTitle, "item-value": p(l).itemValue, items: p(l).items, "items-per-page": p(l).itemsPerPage, loading: p(l).loading, "multi-sort": p(l).multiSort, "must-sort": p(l).mustSort, "no-data-text": p(l).noDataText, "no-filter": p(l).noFilter, page: p(l).page, "return-object": p(l).returnObject, search: p(s), "show-expand": p(l).showExpand, "show-select": p(l).showSelect, "sort-by": p(l).sortBy, style: p(v), "onUpdate:itemsPerPage": f, "onUpdate:modelValue": $, "onUpdate:options": F, "onUpdate:sortBy": C }), Ce({ top: I(() => [g(p(Co), { "loaded-drilldown": p(l), "onUpdate:search": h[0] || (h[0] = (k) => s.value = k) }, Ce({ _: 2 }, [ie(a.$slots, (k, b) => ({ name: b, fn: I((x) => [N(a.$slots, b, Ae(Ee({ ...x })))]) }))]), 1032, ["loaded-drilldown"])]), headers: I((k) => [g(p(Qn), { "loaded-drilldown": p(l), "slot-props": { allRowsSelected: p(o), ...k }, "onClick:selectAll": h[1] || (h[1] = (b) => {
      return x = b, void (o.value = x);
      var x;
    }) }, Ce({ _: 2 }, [ie(a.$slots, (b, x) => ({ name: x, fn: I((_) => [N(a.$slots, x, Ae(Ee({ ..._ })))]) }))]), 1032, ["loaded-drilldown", "slot-props"]), p(l).loading ? (B(), L("tr", xo, [me("td", { class: "pa-0", colspan: k.columns.length, style: { "vertical-align": "top" } }, [g(p(Mt), { "loaded-drilldown": p(l), loading: p(l).loading || !1, "loading-text": a.loadingText }, null, 8, ["loaded-drilldown", "loading", "loading-text"])], 8, ko)])) : z("", !0)]), item: I((k) => [g(p(no), { items: p(l).items, "loaded-drilldown": p(l), "slot-props": { allRowsSelected: p(o), level: a.level, ...k }, "onClick:row": h[2] || (h[2] = (b) => {
      t("click:row", b);
    }), "onClick:row:checkbox": h[3] || (h[3] = (b) => {
      t("click:row:checkbox", b);
    }), "onUpdate:expanded": h[4] || (h[4] = (b) => w(b)) }, Ce({ _: 2 }, [ie(a.$slots, (b, x) => ({ name: x, fn: I((_) => [N(a.$slots, x, Ae(Ee({ ..._ })))]) }))]), 1032, ["items", "loaded-drilldown", "slot-props"])]), "expanded-row": I(({ columns: k, item: b }) => [me("tr", null, [me("td", { class: "px-0 ma-0", colspan: k.length, style: { "vertical-align": "top" } }, [b.raw[a.itemChildrenKey].loading ? (B(), te(p(Mt), { key: 0, class: "pa-0 ma-0", "loaded-drilldown": p(l), loading: b.raw[a.itemChildrenKey].loading }, null, 8, ["loaded-drilldown", "loading"])) : z("", !0), g(u, { class: M(b.raw[a.itemChildrenKey].loading ? "d-none" : ""), colors: a.colors, drilldown: p(l), headers: b.raw[a.itemChildrenKey].headers, "is-drilldown": !0, item: b, level: a.level + 1, levels: p(l).levels, loading: b.raw[a.itemChildrenKey].loading, "no-data-text": p(l).noDataText, "parent-ref": p(r), "sort-by": p(l).sortBy, "onUpdate:expanded": h[5] || (h[5] = (x) => w(x)) }, Ce({ default: I(() => [(B(!0), L(ne, null, ie(Object.keys(p(c)), (x) => N(a.$slots, x)), 256))]), _: 2 }, [ie(a.$slots, (x, _) => ({ name: _, fn: I((A) => [N(a.$slots, _, Ae(Ee({ ...A })))]) }))]), 1032, ["class", "colors", "drilldown", "headers", "item", "level", "levels", "loading", "no-data-text", "parent-ref", "sort-by"])], 8, $o)])]), tfoot: I(() => [g(p(co), { "loaded-drilldown": p(l) }, null, 8, ["loaded-drilldown"])]), "footer.prepend": I(() => [a.$slots["footer.prepend"] ? N(a.$slots, "footer.prepend", { key: 0 }) : z("", !0)]), _: 2 }, [a.$slots.body ? { name: "body", fn: I((k) => [N(a.$slots, "body", { props: k })]), key: "0" } : void 0, a.$slots.tbody ? { name: "tbody", fn: I((k) => [N(a.$slots, "tbody", { props: k })]), key: "1" } : void 0, a.$slots["no-data"] ? { name: "no-data", fn: I(() => [N(a.$slots, "no-data")]), key: "2" } : void 0, a.$slots.bottom ? { name: "bottom", fn: I(() => [g(p(Ln), { "loaded-drilldown": p(l) }, Ce({ _: 2 }, [ie(a.$slots, (k, b) => ({ name: b, fn: I((x) => [N(a.$slots, b, Ae(Ee({ ...x })))]) }))]), 1032, ["loaded-drilldown"])]), key: "3" } : void 0]), 1040, ["class", "density", "expand-on-click", "expanded", "headers", "height", "hide-no-data", "hover", "item-title", "item-value", "items", "items-per-page", "loading", "multi-sort", "must-sort", "no-data-text", "no-filter", "page", "return-object", "search", "show-expand", "show-select", "sort-by", "style"]));
  };
} });
Kt.install = (e) => {
  e.component("VDrilldownTable", Kt);
};
export {
  Kt as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1.v-locale--is-ltr,.v-locale--is-ltr .offset-1{margin-left:8.3333333333%}.offset-1.v-locale--is-rtl,.v-locale--is-rtl .offset-1{margin-right:8.3333333333%}.offset-2.v-locale--is-ltr,.v-locale--is-ltr .offset-2{margin-left:16.6666666667%}.offset-2.v-locale--is-rtl,.v-locale--is-rtl .offset-2{margin-right:16.6666666667%}.offset-3.v-locale--is-ltr,.v-locale--is-ltr .offset-3{margin-left:25%}.offset-3.v-locale--is-rtl,.v-locale--is-rtl .offset-3{margin-right:25%}.offset-4.v-locale--is-ltr,.v-locale--is-ltr .offset-4{margin-left:33.3333333333%}.offset-4.v-locale--is-rtl,.v-locale--is-rtl .offset-4{margin-right:33.3333333333%}.offset-5.v-locale--is-ltr,.v-locale--is-ltr .offset-5{margin-left:41.6666666667%}.offset-5.v-locale--is-rtl,.v-locale--is-rtl .offset-5{margin-right:41.6666666667%}.offset-6.v-locale--is-ltr,.v-locale--is-ltr .offset-6{margin-left:50%}.offset-6.v-locale--is-rtl,.v-locale--is-rtl .offset-6{margin-right:50%}.offset-7.v-locale--is-ltr,.v-locale--is-ltr .offset-7{margin-left:58.3333333333%}.offset-7.v-locale--is-rtl,.v-locale--is-rtl .offset-7{margin-right:58.3333333333%}.offset-8.v-locale--is-ltr,.v-locale--is-ltr .offset-8{margin-left:66.6666666667%}.offset-8.v-locale--is-rtl,.v-locale--is-rtl .offset-8{margin-right:66.6666666667%}.offset-9.v-locale--is-ltr,.v-locale--is-ltr .offset-9{margin-left:75%}.offset-9.v-locale--is-rtl,.v-locale--is-rtl .offset-9{margin-right:75%}.offset-10.v-locale--is-ltr,.v-locale--is-ltr .offset-10{margin-left:83.3333333333%}.offset-10.v-locale--is-rtl,.v-locale--is-rtl .offset-10{margin-right:83.3333333333%}.offset-11.v-locale--is-ltr,.v-locale--is-ltr .offset-11{margin-left:91.6666666667%}.offset-11.v-locale--is-rtl,.v-locale--is-rtl .offset-11{margin-right:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-0{margin-left:0}.offset-sm-0.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-0{margin-right:0}.offset-sm-1.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-1{margin-left:8.3333333333%}.offset-sm-1.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-1{margin-right:8.3333333333%}.offset-sm-2.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-2{margin-left:16.6666666667%}.offset-sm-2.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-2{margin-right:16.6666666667%}.offset-sm-3.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-3{margin-left:25%}.offset-sm-3.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-3{margin-right:25%}.offset-sm-4.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-4{margin-left:33.3333333333%}.offset-sm-4.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-4{margin-right:33.3333333333%}.offset-sm-5.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-5{margin-left:41.6666666667%}.offset-sm-5.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-5{margin-right:41.6666666667%}.offset-sm-6.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-6{margin-left:50%}.offset-sm-6.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-6{margin-right:50%}.offset-sm-7.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-7{margin-left:58.3333333333%}.offset-sm-7.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-7{margin-right:58.3333333333%}.offset-sm-8.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-8{margin-left:66.6666666667%}.offset-sm-8.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-8{margin-right:66.6666666667%}.offset-sm-9.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-9{margin-left:75%}.offset-sm-9.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-9{margin-right:75%}.offset-sm-10.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-10{margin-left:83.3333333333%}.offset-sm-10.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-10{margin-right:83.3333333333%}.offset-sm-11.v-locale--is-ltr,.v-locale--is-ltr .offset-sm-11{margin-left:91.6666666667%}.offset-sm-11.v-locale--is-rtl,.v-locale--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0.v-locale--is-ltr,.v-locale--is-ltr .offset-md-0{margin-left:0}.offset-md-0.v-locale--is-rtl,.v-locale--is-rtl .offset-md-0{margin-right:0}.offset-md-1.v-locale--is-ltr,.v-locale--is-ltr .offset-md-1{margin-left:8.3333333333%}.offset-md-1.v-locale--is-rtl,.v-locale--is-rtl .offset-md-1{margin-right:8.3333333333%}.offset-md-2.v-locale--is-ltr,.v-locale--is-ltr .offset-md-2{margin-left:16.6666666667%}.offset-md-2.v-locale--is-rtl,.v-locale--is-rtl .offset-md-2{margin-right:16.6666666667%}.offset-md-3.v-locale--is-ltr,.v-locale--is-ltr .offset-md-3{margin-left:25%}.offset-md-3.v-locale--is-rtl,.v-locale--is-rtl .offset-md-3{margin-right:25%}.offset-md-4.v-locale--is-ltr,.v-locale--is-ltr .offset-md-4{margin-left:33.3333333333%}.offset-md-4.v-locale--is-rtl,.v-locale--is-rtl .offset-md-4{margin-right:33.3333333333%}.offset-md-5.v-locale--is-ltr,.v-locale--is-ltr .offset-md-5{margin-left:41.6666666667%}.offset-md-5.v-locale--is-rtl,.v-locale--is-rtl .offset-md-5{margin-right:41.6666666667%}.offset-md-6.v-locale--is-ltr,.v-locale--is-ltr .offset-md-6{margin-left:50%}.offset-md-6.v-locale--is-rtl,.v-locale--is-rtl .offset-md-6{margin-right:50%}.offset-md-7.v-locale--is-ltr,.v-locale--is-ltr .offset-md-7{margin-left:58.3333333333%}.offset-md-7.v-locale--is-rtl,.v-locale--is-rtl .offset-md-7{margin-right:58.3333333333%}.offset-md-8.v-locale--is-ltr,.v-locale--is-ltr .offset-md-8{margin-left:66.6666666667%}.offset-md-8.v-locale--is-rtl,.v-locale--is-rtl .offset-md-8{margin-right:66.6666666667%}.offset-md-9.v-locale--is-ltr,.v-locale--is-ltr .offset-md-9{margin-left:75%}.offset-md-9.v-locale--is-rtl,.v-locale--is-rtl .offset-md-9{margin-right:75%}.offset-md-10.v-locale--is-ltr,.v-locale--is-ltr .offset-md-10{margin-left:83.3333333333%}.offset-md-10.v-locale--is-rtl,.v-locale--is-rtl .offset-md-10{margin-right:83.3333333333%}.offset-md-11.v-locale--is-ltr,.v-locale--is-ltr .offset-md-11{margin-left:91.6666666667%}.offset-md-11.v-locale--is-rtl,.v-locale--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-0{margin-left:0}.offset-lg-0.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-0{margin-right:0}.offset-lg-1.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-1{margin-left:8.3333333333%}.offset-lg-1.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-1{margin-right:8.3333333333%}.offset-lg-2.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-2{margin-left:16.6666666667%}.offset-lg-2.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-2{margin-right:16.6666666667%}.offset-lg-3.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-3{margin-left:25%}.offset-lg-3.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-3{margin-right:25%}.offset-lg-4.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-4{margin-left:33.3333333333%}.offset-lg-4.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-4{margin-right:33.3333333333%}.offset-lg-5.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-5{margin-left:41.6666666667%}.offset-lg-5.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-5{margin-right:41.6666666667%}.offset-lg-6.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-6{margin-left:50%}.offset-lg-6.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-6{margin-right:50%}.offset-lg-7.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-7{margin-left:58.3333333333%}.offset-lg-7.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-7{margin-right:58.3333333333%}.offset-lg-8.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-8{margin-left:66.6666666667%}.offset-lg-8.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-8{margin-right:66.6666666667%}.offset-lg-9.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-9{margin-left:75%}.offset-lg-9.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-9{margin-right:75%}.offset-lg-10.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-10{margin-left:83.3333333333%}.offset-lg-10.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-10{margin-right:83.3333333333%}.offset-lg-11.v-locale--is-ltr,.v-locale--is-ltr .offset-lg-11{margin-left:91.6666666667%}.offset-lg-11.v-locale--is-rtl,.v-locale--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-0{margin-left:0}.offset-xl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-0{margin-right:0}.offset-xl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-1{margin-left:8.3333333333%}.offset-xl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-1{margin-right:8.3333333333%}.offset-xl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-2{margin-left:16.6666666667%}.offset-xl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-2{margin-right:16.6666666667%}.offset-xl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-3{margin-left:25%}.offset-xl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-3{margin-right:25%}.offset-xl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-4{margin-left:33.3333333333%}.offset-xl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-4{margin-right:33.3333333333%}.offset-xl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-5{margin-left:41.6666666667%}.offset-xl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-5{margin-right:41.6666666667%}.offset-xl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-6{margin-left:50%}.offset-xl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-6{margin-right:50%}.offset-xl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-7{margin-left:58.3333333333%}.offset-xl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-7{margin-right:58.3333333333%}.offset-xl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-8{margin-left:66.6666666667%}.offset-xl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-8{margin-right:66.6666666667%}.offset-xl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-9{margin-left:75%}.offset-xl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-9{margin-right:75%}.offset-xl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-10{margin-left:83.3333333333%}.offset-xl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-10{margin-right:83.3333333333%}.offset-xl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xl-11{margin-left:91.6666666667%}.offset-xl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xl-11{margin-right:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-0{margin-left:0}.offset-xxl-0.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-0{margin-right:0}.offset-xxl-1.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-1.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-1{margin-right:8.3333333333%}.offset-xxl-2.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-2.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-2{margin-right:16.6666666667%}.offset-xxl-3.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-3{margin-left:25%}.offset-xxl-3.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-3{margin-right:25%}.offset-xxl-4.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-4.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-4{margin-right:33.3333333333%}.offset-xxl-5.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-5.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-5{margin-right:41.6666666667%}.offset-xxl-6.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-6{margin-left:50%}.offset-xxl-6.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-6{margin-right:50%}.offset-xxl-7.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-7.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-7{margin-right:58.3333333333%}.offset-xxl-8.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-8.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-8{margin-right:66.6666666667%}.offset-xxl-9.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-9{margin-left:75%}.offset-xxl-9.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-9{margin-right:75%}.offset-xxl-10.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-10.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-10{margin-right:83.3333333333%}.offset-xxl-11.v-locale--is-ltr,.v-locale--is-ltr .offset-xxl-11{margin-left:91.6666666667%}.offset-xxl-11.v-locale--is-rtl,.v-locale--is-rtl .offset-xxl-11{margin-right:91.6666666667%}}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-drilldown-table--table-loader[data-v-54ff3e55]{background:rgb(var(--v-theme-surface))}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 16px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 12px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 8px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;padding-top:var(--v-input-padding-top)}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-drilldown-table--header-select-all-checkbox[data-v-30cfcb6a]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-30cfcb6a]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-30cfcb6a]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-30cfcb6a],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-30cfcb6a]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-30cfcb6a]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-30cfcb6a]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-30cfcb6a]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-30cfcb6a],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-30cfcb6a],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-30cfcb6a]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-30cfcb6a]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-231207fc]{cursor:pointer}.v-drilldown-table--footer-row td{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--flush-details .v-input__details{padding:0}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 6px}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 56px;--v-field-padding-bottom: 6px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 48px;--v-field-padding-bottom: 2px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 40px;--v-field-padding-bottom: -2px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 16px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 12px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 8px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: 6px;--v-field-padding-bottom: 2px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 48px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 40px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 32px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:var(--v-input-control-height, 56px);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px);width:100%}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__prepend-inner,.v-field__append-inner,.v-field__clearable{align-items:flex-start;display:flex;padding-top:var(--v-input-padding-top, 10px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top, 10px);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}')),document.head.appendChild(e)}}catch(l){console.error("vite-plugin-css-injected-by-js",l)}})();
