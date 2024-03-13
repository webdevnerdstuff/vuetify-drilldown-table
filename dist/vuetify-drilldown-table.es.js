import { defineComponent as de, renderSlot as W, unref as e, computed as y, openBlock as f, createElementBlock as V, normalizeClass as M, normalizeStyle as Q, createElementVNode as re, createBlock as j, withCtx as O, createVNode as ge, normalizeProps as q, guardReactiveProps as Z, createCommentVNode as N, mergeProps as ie, createTextVNode as dt, toDisplayString as ct, useSlots as fe, ref as X, inject as Se, watch as ee, Fragment as ne, renderList as le, withModifiers as ut, onMounted as Ue, isRef as pt, nextTick as ht, getCurrentScope as mt, mergeDefaults as gt, toRefs as yt, useAttrs as ft, shallowRef as vt, onBeforeMount as kt, reactive as Ft, watchEffect as He, onUnmounted as Ct, resolveComponent as wt, resolveDynamicComponent as bt, createSlots as se, defineAsyncComponent as xt } from "vue";
import { VDataTableServer as Pt, VDataTable as Bt } from "vuetify/components";
import { useTheme as Pe } from "vuetify";
import { VRow as qe, VCol as ce } from "vuetify/lib/components/VGrid/index.mjs";
import { VProgressCircular as $t } from "vuetify/lib/components/VProgressCircular/index.mjs";
import { VProgressLinear as Dt } from "vuetify/lib/components/VProgressLinear/index.mjs";
import { VSkeletonLoader as St } from "vuetify/lib/components/VSkeletonLoader/index.mjs";
import { VCheckbox as Ae } from "vuetify/lib/components/VCheckbox/index.mjs";
import { VIcon as Ye } from "vuetify/lib/components/VIcon/index.mjs";
import { VTextField as At } from "vuetify/lib/components/VTextField/index.mjs";
/**
 * @name @wdns/vuetify-drilldown-table
 * @version 1.1.5
 * @description The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's VDataTable and VDataTableServer. It provides a recursive table structure, allowing you to display hierarchical data in a nested format.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-drilldown-table/
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
const Tt = Symbol("data"), be = { background: "--v-theme-surface", border: "transparent", color: "--v-theme-on-surface" }, Je = { colorPercentageChange: 15, colorPercentageDirection: "desc", colors: () => ({ default: be, footer: { background: void 0, color: void 0 }, header: { background: void 0, color: void 0 }, percentageChange: 15, percentageDirection: "desc" }), columnWidths: () => [], defaultColors: () => be, density: "default", drilldownKey: "id", elevation: 0, expandOnClick: !1, filterKeys: void 0, footerBackgroundColor: void 0, footerColor: void 0, footers: () => [], headerBackgroundColor: void 0, headerColor: void 0, height: "auto", hideNoData: !1, hover: !1, isDrilldown: !1, itemChildrenKey: "child", itemSelectable: void 0, itemValue: "id", items: () => [], itemsLength: 0, itemsPerPage: 10, level: 1, levels: 1, loaderProps: () => ({ circular: { bgColor: "theme-surface", color: "primary", indeterminate: !0 }, linear: { color: "surface-variant", height: "2px", indeterminate: !0 }, skelton: { type: "heading@1" }, text: { color: "surface-variant" } }), loaderType: "linear", loading: !1, loadingText: "$vuetify.dataIterator.loadingText", matchColumnWidths: !1, noDataText: "$vuetify.noDataText", noFilter: !1, page: 1, returnObject: !0, search: "", searchContainerCols: () => ({ lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }), searchDebounce: 0, searchMaxWait: 1e3, searchProps: () => ({}), selectStrategy: "page", separator: "default", server: !1, showDrilldownWhenLoading: !0, showExpand: !1, showFooterRow: !1, showSearch: !1, showSelect: !1, sortAscIcon: "$sortAsc", sortBy: () => [], tableType: () => ({}) }, Et = de({ __name: "BottomSlot", props: { slotProps: {} }, setup: (a) => (n, r) => W(n.$slots, "bottom") }), S = "v-drilldown-table";
function je(a, n, r = "") {
  let l = a;
  const t = n.length - 1;
  if (t < 0)
    return l === void 0 ? r : l;
  for (let d = 0; d < t; d++) {
    if (l == null)
      return r;
    l = l[n[d]];
  }
  return l == null || l[n[t]] === void 0 ? r : l[n[t]];
}
function Lt(a, n, r = "") {
  if (n == null)
    return a === void 0 ? r : a;
  if (a !== Object(a)) {
    if (typeof n != "function")
      return r;
    const t = n(a, r);
    return t === void 0 ? r : t;
  }
  if (typeof n == "string")
    return function(t, d, u = "") {
      let p = d;
      return t != null && p && typeof p == "string" ? t[p] !== void 0 ? t[p] : (p = p.replace(/\[(\w+)\]/g, ".$1"), p = p.replace(/^\./, ""), je(t, p.split("."), u)) : u;
    }(a, n, r);
  if (Array.isArray(n))
    return je(a, n, r);
  if (typeof n != "function")
    return r;
  const l = n(a, r);
  return l === void 0 ? r : l;
}
const Re = (a) => {
  const { id: n, sortBy: r } = a;
  if (r) {
    const l = r.find((t) => t.key === n);
    if (l)
      return l.order;
  }
}, ae = (a) => {
  const { str: n, unit: r = "px" } = a;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${r}` : String(n);
};
function Qe(a) {
  const n = a.title, r = [n, a];
  return a.renderer ? a.renderer(...r) : a.renderHeader ? a.renderHeader(...r) : a.renderFooter ? a.renderFooter(...r) : n || "";
}
function De(a) {
  return a && typeof a == "object" && !Array.isArray(a);
}
function ye(a, ...n) {
  if (!n.length)
    return a;
  const r = n.shift();
  if (De(a) && De(r))
    for (const l in r)
      De(r[l]) ? (a[l] || Object.assign(a, { [l]: {} }), ye(a[l], r[l])) : Object.assign(a, { [l]: r[l] });
  return ye(a, ...n);
}
const Xe = (a) => {
  const { align: n } = a;
  return { "d-flex align-center": !0, [`justify-${n}`]: n || !1, "justify-start": !n };
}, Ze = (a) => {
  const { level: n } = a;
  return { "d-flex": !0, [`${S}--header-select-all-checkbox`]: !0, [`${S}--header-select-all-checkbox-${n}`]: !0 };
};
function et(a) {
  return a === "transparent" || a === "none" || a === "inherit" || a === "currentColor" || a === "initial" || a === "unset";
}
function tt(a) {
  return a.includes("--v-theme");
}
const ot = (a, n) => {
  if (et(a))
    return a;
  if (tt(a))
    return `rgb(var(${a}))`;
  const r = function(l, t) {
    const d = t.global.current.value.colors;
    return Object.entries(d).find(([u]) => u === l);
  }(a, n);
  return r ? `hsl(${xe(r[1])})` : `hsl(${xe(a)})`;
}, Ot = (a) => {
  const { colors: n, level: r, prop: l = "default", theme: t, type: d } = a, u = { ...n[l] }, p = n == null ? void 0 : n.percentageDirection;
  if (u === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${l}' does not exist`);
  let $ = ((m, x, P) => {
    let T = 100, g = (m == null ? void 0 : m.percentageChange) ?? 0;
    return isNaN(g) && (T = 100), g *= x, P !== "desc" && P !== "descending" || (T = 100 - g), P !== "asc" && P !== "ascending" || (T = 0 + g), T < 0 && (T = 0), T > 100 && (T = 100), isNaN(T) && (T = 100), x === 0 && (T = 100), T;
  })(n, r - 1, p);
  return d || Object.entries(u).forEach(([m, x]) => {
    let P = t.global.current.value.colors[x] ?? x;
    if (P || (P = n.default[m] ?? "transparent", P = ot(P, t)), et(P))
      return void (u[m] = P);
    if ((m === "color" || r === 0 && p === "asc") && ($ = 100), tt(P))
      return void (u[m] = `rgb(var(${P}))`);
    const T = `/ ${$}%`, g = xe(P);
    if (g.includes("/"))
      return u[m] = `hsl(${g})`;
    u[m] = `hsl(${xe(P)} ${T})`;
  }), u;
};
function xe(a) {
  let n = function(x) {
    const P = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let T = x;
    return Object.entries(P).forEach(([g, K]) => {
      x.toLowerCase() != g.toLowerCase() || (T = K);
    }), T;
  }(a), r = 0, l = 0, t = 0, d = 0, u = 0, p = 0;
  if (n.substring(0, 1) === "#")
    n = function(x) {
      let P = x.replace("#", "");
      P.length === 3 && (P = P.split("").map((I) => I + I).join(""));
      const T = parseInt(P.substring(0, 2), 16), g = parseInt(P.substring(2, 4), 16), K = parseInt(P.substring(4, 6), 16);
      return [T, g, K];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/\d+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/\d+/g)].map(Number), r = n[0], l = n[1], t = n[2], `${r} ${l}% ${t}%`;
  [d, u, p] = n, d /= 255, u /= 255, p /= 255;
  const $ = Math.max(d, u, p), m = Math.min(d, u, p);
  if ($ === null || !m === null || isNaN($) || isNaN(m)) {
    const x = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${x})" in it's place.`), x;
  }
  if (r = ($ + m) / 2, l = ($ + m) / 2, t = ($ + m) / 2, $ == m)
    r = l = 0;
  else {
    const x = $ - m;
    switch (l = t > 0.5 ? x / (2 - $ - m) : x / ($ + m), $) {
      case d:
        r = (u - p) / x + (u < p ? 6 : 0);
        break;
      case u:
        r = (p - d) / x + 2;
        break;
      case p:
        r = (d - u) / x + 4;
    }
    r /= 6;
  }
  return r = Math.round(360 * r), l = Math.round(100 * l), t = Math.round(100 * t), `${r} ${l}% ${t}%`;
}
const Te = (a) => {
  const { colors: n, level: r, prop: l = "default", themeColors: t, type: d = null } = a;
  if (typeof n != "object" || n == null)
    return {};
  const u = Ot({ colors: n, level: r, prop: l, theme: t, type: d });
  return d ? u[d] : u;
}, Mt = ["colspan"], Ee = (a, n) => {
  const r = a.__vccOpts || a;
  for (const [l, t] of n)
    r[l] = t;
  return r;
}, Vt = Ee(de({ __name: "TableLoader", props: { colors: {}, colspan: {}, height: { default: 2 }, level: {}, loaderType: { type: [String, Array, Boolean, null], default: "linear" }, loading: {}, loaderProps: {}, loadingText: { default: "Loading..." }, size: { default: "default" }, textLoader: { type: Boolean, default: !0 } }, setup(a) {
  const n = Pe(), r = a, l = y(() => ((F) => {
    const { isLinearOnly: A, loaderHeight: _ } = F;
    let i = { height: 0, minHeight: 0 };
    return e(A) && (i = { height: ae({ str: e(_) }), minHeight: ae({ str: e(_) }) }), i;
  })({ isLinearOnly: m, loaderHeight: $ })), t = y(() => ((F) => {
    const { isLinearOnly: A, loaderHeight: _ } = F;
    return e(A) ? { height: ae({ str: e(_) }), position: "absolute", top: 0, width: "100%" } : {};
  })({ isLinearOnly: m, loaderHeight: $ })), d = y(() => ((F) => {
    const { isLinearOnly: A } = F;
    return { [`${S}--loader-tr`]: !0, [`${S}--loader-tr-not-linear`]: !e(A), "ma-0": !0, "pa-0": !0, "text-center": !0 };
  })({ isLinearOnly: m })), u = y(() => ({ [`${S}--loader-tr-vrow`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), p = y(() => {
    var F;
    return ((F = r.loaderProps) == null ? void 0 : F.linear) ?? {};
  }), $ = y(() => {
    var F, A;
    return function(_) {
      return ae({ str: _ }) || "2px";
    }(((A = (F = r.loaderProps) == null ? void 0 : F.linear) == null ? void 0 : A.height) || "2px");
  }), m = y(() => {
    let F = !1;
    return r.loaderType !== null && r.loaderType !== !1 && (F = function(A) {
      let _ = !1;
      return A === "linear" && (_ = !0), Array.isArray(A) && (_ = A.length === 1 && A[0] === "linear"), _;
    }(r.loaderType)), F;
  }), x = y(() => {
    var F;
    return ((F = r.loaderProps) == null ? void 0 : F.circular) ?? {};
  }), P = y(() => {
    var F;
    return ((F = r.loaderProps) == null ? void 0 : F.skelton) ?? {};
  }), T = y(() => r.loading), g = y(() => {
    var A, _;
    let F = ((_ = (A = r.loaderProps) == null ? void 0 : A.text) == null ? void 0 : _.color) ?? "surface-variant";
    return F = ot(F, n), { color: F };
  }), K = y(() => r.loadingText || "Loading..."), I = (F) => {
    const A = r.loaderType;
    return Array.isArray(A) ? A.indexOf(F) : 1;
  }, R = (F) => {
    const A = r.loaderType;
    return F === r.loaderType || !!Array.isArray(A) && A.includes(F);
  };
  return (F, A) => (f(), V("tr", { class: M(e(d)), style: Q(e(l)) }, [re("td", { class: "px-0 ma-0", colspan: F.colspan, style: Q(e(t)) }, [F.loading ? (f(), j(qe, { key: 0, class: M(e(u)), "no-gutters": "" }, { default: O(() => [R("linear") ? (f(), j(ce, { key: 0, class: "pa-0 ma-0", order: I("linear") }, { default: O(() => [ge(Dt, q(Z(e(p))), null, 16)]), _: 1 }, 8, ["order"])) : N("", !0), R("circular") ? (f(), j(ce, { key: 1, class: "pa-0 my-2", order: I("circular") }, { default: O(() => [ge($t, q(Z(e(x))), null, 16)]), _: 1 }, 8, ["order"])) : N("", !0), R("skelton") ? (f(), j(ce, { key: 2, class: "pa-0 ma-0", order: I("skelton") }, { default: O(() => [ge(St, ie(e(P), { loading: e(T) }), null, 16, ["loading"])]), _: 1 }, 8, ["order"])) : N("", !0), R("text") ? (f(), j(ce, { key: 3, class: "my-2", order: I("text"), style: Q(e(g)) }, { default: O(() => [dt(ct(e(K)), 1)]), _: 1 }, 8, ["order", "style"])) : N("", !0)]), _: 1 }, 8, ["class"])) : N("", !0)], 12, Mt)], 6));
} }), [["__scopeId", "data-v-b954d026"]]), Wt = ["colspan"], _t = ["colspan", "innerHTML"], Gt = ["colspan"], It = ["colspan", "innerHTML"], Ht = ["colspan", "onClick"], jt = ["innerHTML"], Rt = Ee(de({ __name: "HeadersSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, headerBackgroundColor: {}, headerColor: {}, isTheadSlot: { type: Boolean, default: !1 }, items: {}, loaderProps: {}, loaderSettings: {}, matchColumnWidths: { type: Boolean }, selectStrategy: {}, slotProps: {}, sortAscIcon: {}, tableModelValue: {}, density: {}, level: {}, showSelect: { default: !1 }, sortBy: {} }, emits: ["click:selectAll"], setup(a, { emit: n }) {
  const r = fe(), l = n, t = a, d = X(), u = Se(Symbol.for("vuetify:icons")), p = X(!1), $ = X(t.items), m = X(t.matchColumnWidths), x = X(t.columnWidths || []), P = X(t.sortAscIcon ?? "$sortAsc"), T = y(() => t.tableModelValue), g = Pe(), K = y(() => function() {
    const c = t.slotProps.columns;
    if (t.level <= 1 || !m.value)
      return c;
    if (x.value.length === 0)
      throw new Error("VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.");
    return Object.entries(c).forEach(([L]) => {
      Object.keys(c).length !== parseInt(L) + 1 && c[L].width === void 0 && (c[L].width = x.value[parseInt(L)]);
    }), c;
  }());
  ee(() => t.items, (c) => {
    $.value = c, d.value = (c == null ? void 0 : c.filter((L) => L.selectable)) ?? [], d.value = c == null ? void 0 : c.filter((L) => L.selectable !== !1);
  });
  const I = y(() => ((c) => {
    const { level: L } = c;
    return { [`${S}--header-row`]: !0, [`${S}--header-row-${L}`]: !0 };
  })({ level: t.level })), R = (c, L = "") => ((v) => {
    const { column: Y, level: z, slotName: J = "" } = v;
    return { [`${S}--header-row-th`]: !0, [`${S}--header-row-th-${J}`]: J !== "", [`${S}--header-row-th-${J}-${z}`]: J !== "", [`${S}--header-row-th-${z}`]: !0, [`${S}--header-row-th-sortable`]: Y.sortable || !1, [`${S}--header-row-th-sortable-default-color`]: Y.sortable || !1, [`${Y.cellClass}`]: Y.cellClass || !1 };
  })({ column: c, level: t.level, slotName: L }), F = y(() => {
    const c = t.colors;
    return c && (c.header = { background: t.headerBackgroundColor, color: t.headerColor }, c.percentageChange = t.colorPercentageChange, c.percentageDirection = t.colorPercentageDirection), c;
  }), A = (c, L = !1) => ((v) => {
    const { colors: Y, column: z, dataTableExpand: J = !1, level: Be, theme: $e } = v, te = { minWidth: z.width ? ae({ str: z.width }) : "auto", width: z.width ? ae({ str: z.width }) : "auto" };
    J && !z.width && (te.width = z.width ? ae({ str: z.width }) : "56px", te.minWidth = z.width ? ae({ str: z.width }) : "56px");
    const ue = Te({ colors: Y, level: Be, prop: "header", themeColors: $e });
    return te.backgroundColor = ue.background, te.color = ue.color, te;
  })({ colors: F.value, column: c, dataTableExpand: L, level: t.level, theme: g }), _ = (c) => {
    const L = A(c);
    return t.headerColor === void 0 ? {} : { color: L.color };
  }, i = y(() => {
    var c;
    return !t.slotProps.allSelected && ((c = T == null ? void 0 : T.value) == null ? void 0 : c.length) !== 0;
  });
  function E() {
    p.value = !p.value, t.slotProps.selectAll(p.value), l("click:selectAll", p.value);
  }
  ee(() => t.slotProps.allSelected, (c) => {
    p.value = c;
  }), ee(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const C = y(() => Ze({ level: t.level })), h = (c) => ((L) => {
    const { iconOptions: v, key: Y, level: z, sortBy: J } = L;
    return { "fa-fw": (v == null ? void 0 : v.defaultSet) === "fa", "mx-1": !0, [`${S}--header-row-th-sortable-sort-icon`]: !0, [`${S}--header-row-th-sortable-sort-icon-${z}`]: !0, [`${S}--header-row-th-sortable-sort-icon-desc`]: Re({ id: Y, sortBy: J }) === "desc", [`${S}--header-row-th-sortable-sort-icon-asc`]: Re({ id: Y, sortBy: J }) === "asc" };
  })({ iconOptions: u, key: c, level: t.level, sortBy: t.sortBy }), o = y(() => (u == null ? void 0 : u.defaultSet) === "fa" ? "small" : "default");
  function U(c) {
    return Qe(c);
  }
  return (c, L) => (f(), V(ne, null, [re("tr", { class: M(e(I)) }, [(f(!0), V(ne, null, le(e(K), (v) => {
    return f(), V(ne, { key: v }, [e(r)[`column.${v.key}`] || e(r)[`header.${v.key}`] ? (f(), V("th", { key: 0, class: M(R(v, v.key)), colspan: v.colspan || 1, style: Q(A(v, !0)) }, [W(c.$slots, `header.${v.key}`, { column: v }, void 0, !0)], 14, Wt)) : v.key === "data-table-group" || v.key === "data-table-group" ? (f(), V("th", { key: 1, class: M(R(v, "header-data-table-group")), colspan: v.colspan || 1, style: Q(A(v, !0)), innerHTML: U(v) }, null, 14, _t)) : v.key === "data-table-select" || v.key === "data-table-select" && c.showSelect ? (f(), V("th", { key: 2, class: M(R(v, "header-data-table-select")), colspan: v.colspan || 1, style: Q(A(v, !0)) }, [c.selectStrategy !== "single" ? (f(), j(Ae, { key: 0, class: M(e(C)), density: c.density, focused: !1, indeterminate: e(i), "model-value": e(p), "onUpdate:modelValue": E }, null, 8, ["class", "density", "indeterminate", "model-value"])) : N("", !0)], 14, Gt)) : v.key === "data-table-expand" ? (f(), V("th", { key: 3, class: M(R(v, "data-table-expand")), colspan: v.colspan || 1, style: Q(A(v, !0)), innerHTML: U(v) }, null, 14, It)) : (f(), V("th", { key: 4, class: M(R(v)), colspan: v.colspan || 1, style: Q(A(v)), onClick: (z) => function(J) {
      J.sortable && t.slotProps.toggleSort(J);
    }(v) }, [re("div", { class: M((Y = v.align, Xe({ align: Y }))), style: Q(_(v)) }, [re("span", { innerHTML: U(v) }, null, 8, jt), v.sortable && e(r)["header.sortIcon"] ? (f(), V("span", { key: 0, class: M(h(v.key)) }, [W(c.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : v.sortable ? (f(), j(Ye, { key: 1, class: M(h(v.key)), icon: e(P), size: e(o) }, null, 8, ["class", "icon", "size"])) : N("", !0)], 6)], 14, Ht))], 64);
    var Y;
  }), 128))], 2), c.loaderSettings.loaderType && !e(r).loading ? (f(), j(e(Vt), { key: 0, colors: c.colors, colspan: c.loaderSettings.colspan, height: c.loaderSettings.height, level: c.level, "loader-props": c.loaderProps, "loader-settings": c.loaderSettings, "loader-type": c.loaderSettings.loaderType, loading: c.loaderSettings.loading || !1, "loading-text": c.loaderSettings.loadingText, size: c.loaderSettings.size }, null, 8, ["colors", "colspan", "height", "level", "loader-props", "loader-settings", "loader-type", "loading", "loading-text", "size"])) : N("", !0)], 64));
} }), [["__scopeId", "data-v-384afe75"]]), Nt = ["colspan"], Kt = ["colspan"], zt = ["colspan"], Ut = ["colspan"], qt = ["innerHTML"], Yt = Ee(de({ __name: "ItemSlot", props: { expandOnClick: {}, itemSelectable: {}, items: {}, levels: {}, showExpand: {}, slotProps: {}, density: {}, level: {}, showSelect: {} }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(a, { emit: n }) {
  const r = fe(), l = n, t = a, d = Se(Symbol.for("vuetify:icons")), u = y(() => t.slotProps.columns), p = y(() => t.slotProps.index), $ = y(() => t.slotProps.isExpanded), m = y(() => t.slotProps.item), x = y(() => t.slotProps.internalItem), P = y(() => t.slotProps.level), T = y(() => t.slotProps.toggleExpand), g = y(() => t.slotProps.toggleSelect), K = y(() => t.itemSelectable), I = y(() => ((i) => {
    const { expandOnClick: E, level: C, levels: h } = i;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": E && C < h, [`${S}--body-row`]: !0, [`${S}--body-row-${C}`]: !0 };
  })({ expandOnClick: t.expandOnClick, level: t.level, levels: t.levels })), R = (i) => ((E) => {
    const { column: C, elm: h, level: o } = E;
    return { [`${S}--${h}-row-td`]: !0, [`${S}--${h}-row-td-${o}`]: !0, [`${C.cellClass}`]: C.cellClass || !1 };
  })({ column: i, elm: "body", level: t.level });
  function F(i) {
    const { isRow: E, internalItem: C, level: h, toggleExpand: o } = i;
    if (!(t.level >= t.levels || t.expandOnClick && !E) && (!t.expandOnClick || E)) {
      if (i.$event) {
        if (!t.expandOnClick)
          return;
        l("click:row", i.$event);
      }
      h === t.level && o(C), l("update:expanded", i);
    }
  }
  const A = y(() => (d == null ? void 0 : d.defaultSet) === "fa" ? "x-small" : "default");
  function _(i, E) {
    return function(C, h) {
      if (!h.key)
        return "";
      const o = Lt(C, h.key);
      return h.renderItem ? h.renderItem(o, C, h) : o;
    }(i, E);
  }
  return (i, E) => (f(), V("tr", { class: M(e(I)), onClick: E[2] || (E[2] = (C) => F({ columns: e(u), index: e(p), isExpanded: e($), isRow: !0, item: e(m), internalItem: e(x), level: e(P), toggleExpand: e(T), $event: C })) }, [(f(!0), V(ne, null, le(e(u), (C) => (f(), V(ne, { key: C }, [i.$slots[`item.${C.key}`] ? (f(), V("td", { key: 0, class: M(R(C)), colspan: C.colspan || 1 }, [W(i.$slots, `item.${C.key}`, { columns: e(u), index: e(p), item: e(m) }, void 0, !0)], 10, Nt)) : C.key === "data-table-select" || C.key === "data-table-select" && t.showSelect ? (f(), V("td", { key: 1, class: M(R(C)), colspan: C.colspan || 1 }, [e(r)["item.data-table-select"] ? W(i.$slots, "item.data-table-select", { key: 0 }, void 0, !0) : N("", !0), ge(Ae, { class: "d-flex v-simple-checkbox", density: i.density, disabled: e(m).selectable === !1 && e(K) === "selectable", "model-value": i.slotProps.isSelected([e(x)]), onClick: E[0] || (E[0] = ut((h) => function(o) {
    const { internalItem: U, item: c, toggleSelect: L } = o;
    L(U), l("click:row:checkbox", c);
  }({ columns: e(u), index: e(p), internalItem: e(x), item: e(m), level: e(P), toggleSelect: e(g) }), ["stop"])) }, null, 8, ["density", "disabled", "model-value"])], 10, Kt)) : C.key === "data-table-expand" || C.key === "data-table-expand" && i.showExpand ? (f(), V("td", { key: 2, class: M(R(C)), colspan: C.colspan || 1 }, [e(P) < i.levels ? (f(), V("div", { key: 0, class: M(["v-drilldown-table--expand-icon", e($)(e(x)) ? "rotate-180" : ""]), onClick: E[1] || (E[1] = (h) => F({ columns: e(u), index: e(p), isExpanded: e($), item: e(m), internalItem: e(x), level: e(P), toggleExpand: e(T) })) }, [i.$slots["item.data-table-expand"] ? W(i.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (f(), j(Ye, { key: 1, icon: "$expand", size: e(A) }, null, 8, ["size"]))], 2)) : N("", !0)], 10, zt)) : (f(), V("td", { key: 3, class: M(R(C)), colspan: C.colspan || 1 }, [re("span", { innerHTML: _(e(m), C) }, null, 8, qt)], 10, Ut))], 64))), 128))], 2));
} }), [["__scopeId", "data-v-91892b42"]]), Jt = ["colspan"], Qt = ["colspan"], Xt = ["colspan", "innerHTML"], Zt = ["colspan", "innerHTML"], eo = ["colspan"], to = ["innerHTML"], oo = de({ __name: "TfootSlot", props: { colorPercentageChange: {}, colorPercentageDirection: {}, footerBackgroundColor: {}, footerColor: {}, footers: {}, items: {}, selectStrategy: {}, slotProps: {}, tableModelValue: {}, colors: {}, density: {}, level: {} }, emits: ["click:selectAll"], setup(a, { emit: n }) {
  const r = fe(), l = n, t = a, d = X(), u = Pe(), p = X(!1), $ = X(t.items), m = y(() => t.tableModelValue), x = y(() => t.footers.length ? t.footers : t.slotProps.columns);
  ee(() => t.items, (i) => {
    $.value = i, d.value = (i == null ? void 0 : i.filter((E) => E.selectable)) ?? [], d.value = i == null ? void 0 : i.filter((E) => E.selectable !== !1);
  });
  const P = y(() => ((i) => {
    const { level: E } = i;
    return { [`${S}--tfoot`]: !0, [`${S}--tfoot-${E}`]: !0 };
  })({ level: t.level })), T = y(() => ((i) => {
    const { level: E } = i;
    return { [`${S}--tfoot-row`]: !0, [`${S}--tfoot-row-${E}`]: !0 };
  })({ level: t.level })), g = (i, E = "") => ((C) => {
    const { column: h, level: o, slotName: U = "" } = C;
    return { [`${S}--tfoot-row-td`]: !0, [`${S}--tfoot-row-td-${U}`]: U !== "", [`${S}--tfoot-row-td-${U}-${o}`]: U, [`${S}--tfoot-row-td-${o}`]: !0, [`${h.cellClass}`]: h.cellClass || !1 };
  })({ column: i, level: t.level, slotName: E }), K = y(() => {
    const i = t.colors;
    return i && (i.footer = { background: t.footerBackgroundColor, color: t.footerColor }, i.percentageChange = t.colorPercentageChange, i.percentageDirection = t.colorPercentageDirection), i;
  }), I = y(() => ((i) => {
    const { colors: E, elm: C, level: h, theme: o } = i, U = Te({ colors: E, level: h, prop: C, themeColors: o });
    return { backgroundColor: U.background, color: U.color };
  })({ colors: K.value, elm: "footer", footerColor: t.footerColor, level: t.level, theme: u })), R = y(() => {
    var i;
    return !t.slotProps.allSelected && ((i = m == null ? void 0 : m.value) == null ? void 0 : i.length) !== 0;
  });
  function F() {
    p.value = !p.value, t.slotProps.selectAll(p.value), l("click:selectAll", p.value);
  }
  ee(() => t.slotProps.allSelected, (i) => {
    p.value = i;
  }), ee(() => t.slotProps.someSelected, () => {
    if (t.slotProps.allSelected)
      return !1;
  });
  const A = y(() => Ze({ level: t.level }));
  function _(i) {
    return Qe(i);
  }
  return (i, E) => {
    var C;
    return (C = e(x)) != null && C.length ? (f(), V("tfoot", { key: 0, class: M(e(P)) }, [re("tr", { class: M(e(T)) }, [(f(!0), V(ne, null, le(e(x), (h) => {
      return f(), V(ne, { key: h }, [e(r)[`tfoot.${h.key}`] ? (f(), V("th", { key: 0, class: M(g(h, h.key)), colspan: h.colspan || 1, style: Q(e(I)) }, [W(i.$slots, `tfoot.${h.key}`, { column: h })], 14, Jt)) : h.key === "data-table-select" ? (f(), V("th", { key: 1, class: M(g(h, "tfoot-data-table-select")), colspan: h.colspan || 1, style: Q(e(I)) }, [i.selectStrategy !== "single" ? (f(), j(Ae, { key: 0, class: M(e(A)), density: i.density, focused: !1, indeterminate: e(R), "model-value": e(p), "onUpdate:modelValue": F }, null, 8, ["class", "density", "indeterminate", "model-value"])) : N("", !0)], 14, Qt)) : h.key === "data-table-expand" ? (f(), V("th", { key: 2, class: M(g(h, "tfoot-data-table-expand")), colspan: h.colspan || 1, style: Q(e(I)), innerHTML: _(h) }, null, 14, Xt)) : h.renderFooterCell ? (f(), V("th", { key: 3, class: M(g(h)), colspan: h.colspan || 1, style: Q(e(I)), innerHTML: _(h) }, null, 14, Zt)) : (f(), V("th", { key: 4, class: M(g(h)), colspan: h.colspan || 1, style: Q(e(I)) }, [re("div", { class: M((o = h.align, Xe({ align: o }))) }, [re("span", { innerHTML: _(h) }, null, 8, to)], 2)], 14, eo))], 64);
      var o;
    }), 128))], 2)], 2)) : N("", !0);
  };
} }), lo = de({ __name: "TopSlot", props: { items: {}, level: {}, loading: {}, searchContainerCols: {}, searchProps: {}, showSearch: { type: Boolean }, slotProps: {} }, emits: ["click:selectAll", "update:search"], setup(a, { emit: n }) {
  const r = fe(), l = n, t = a, d = X(""), u = X(!0), p = y(() => t.items), $ = y(() => ({ allSelected: t.slotProps.allSelected, columns: t.slotProps.columns, headers: t.slotProps.headers, items: p, itemsPerPage: t.slotProps.itemsPerPage, level: t.level, loading: t.loading, page: t.slotProps.page, pageCount: t.slotProps.pageCount, search: e(d), selectAll: m, setItemsPerPage: t.slotProps.setItemsPerPage, toggleSelectAll: x }));
  function m(g) {
    t.slotProps.selectAll(g), l("click:selectAll", g);
  }
  function x() {
    t.slotProps.selectAll(!t.slotProps.allSelected), l("click:selectAll", !t.slotProps.allSelected);
  }
  Ue(() => {
    const g = document.querySelector(`[data-id="vdt-top-id-${t.level}"]`);
    (g == null ? void 0 : g.children.length) === 0 && (u.value = !1);
  }), ee(d, () => {
    l("update:search", d.value);
  });
  const P = y(() => ({ density: "compact", hideDetails: !0, label: "Search", singleLine: !0, variant: "underlined", ...t.searchProps })), T = y(() => {
    const g = t.searchContainerCols ?? Je.searchContainerCols();
    return { [`${S}--search-field`]: !0, [`v-col-${g.xs}`]: !0, [`v-col-sm-${g.sm}`]: !0, [`v-col-md-${g.md}`]: !0, [`v-col-lg-${g.lg}`]: !0, [`v-col-xl-${g.xl}`]: !0, [`v-col-xxl-${g.xxl}`]: !0 };
  });
  return (g, K) => e(r).top ? W(g.$slots, "top", q(ie({ key: 0 }, e($)))) : (g.showSearch || e(r)["top.left"] || e(r)["top.right"]) && e(u) ? (f(), j(ce, { key: 1, lg: "12" }, { default: O(() => [ge(qe, { "data-id": `vdt-top-id-${t.level}` }, { default: O(() => [e(r)["top.left"] ? W(g.$slots, "top.left", q(ie({ key: 0 }, e($)))) : g.showSearch ? (f(), j(ce, { key: 1, class: M(["d-flex align-center justify-end", e(T)]) }, { default: O(() => [g.showSearch ? (f(), j(At, ie({ key: 0 }, e(P), { modelValue: e(d), "onUpdate:modelValue": K[0] || (K[0] = (I) => pt(d) ? d.value = I : null), class: "mt-0 pt-0" }), null, 16, ["modelValue"])) : N("", !0)]), _: 1 }, 8, ["class"])) : N("", !0), e(r)["top.right"] ? W(g.$slots, "top.right", q(ie({ key: 2 }, e($)))) : N("", !0)]), _: 3 }, 8, ["data-id"])]), _: 3 })) : N("", !0);
} });
function Ne(a) {
  return typeof a == "function" ? a() : e(a);
}
const Ke = () => {
}, ro = (a) => a();
function ao(a, n = {}) {
  let r, l, t = Ke;
  const d = (u) => {
    clearTimeout(u), t(), t = Ke;
  };
  return (u) => {
    const p = Ne(a), $ = Ne(n.maxWait);
    return r && d(r), p <= 0 || $ !== void 0 && $ <= 0 ? (l && (d(l), l = null), Promise.resolve(u())) : new Promise((m, x) => {
      t = n.rejectOnCancel ? x : m, $ && !l && (l = setTimeout(() => {
        r && d(r), l = null, m(u());
      }, $)), r = setTimeout(() => {
        l && d(l), l = null, m(u());
      }, p);
    });
  };
}
function no(a, n, r = {}) {
  const { eventFilter: l = ro, ...t } = r;
  return ee(a, (d = l, u = n, function(...p) {
    return new Promise(($, m) => {
      Promise.resolve(d(() => u.apply(this, p), { fn: u, thisArg: this, args: p })).then($).catch(m);
    });
  }), t);
  var d, u;
}
function ze(a, n, r = {}) {
  const { debounce: l = 0, maxWait: t, ...d } = r;
  return no(a, n, { ...d, eventFilter: ao(l, { maxWait: t }) });
}
const me = /* @__PURE__ */ new Map(), so = ["colspan"], ko = de({ __name: "VDrilldownTable", props: gt({ colorPercentageChange: {}, colorPercentageDirection: {}, colors: {}, columnWidths: {}, customFilter: {}, customKeyFilter: {}, defaultColors: {}, density: {}, drilldown: {}, drilldownKey: {}, elevation: {}, expandOnClick: {}, expanded: {}, filterKeys: {}, filterMode: {}, fixedFooter: { type: Boolean }, fixedHeader: { type: Boolean }, footerBackgroundColor: {}, footerColor: {}, footers: {}, groupBy: {}, headerBackgroundColor: {}, headerColor: {}, headers: {}, height: {}, hideNoData: {}, hover: {}, isDrilldown: { type: Boolean }, item: {}, itemChildrenKey: {}, itemSelectable: {}, itemValue: {}, items: {}, itemsLength: {}, itemsPerPage: {}, itemsPerPageOptions: {}, level: {}, levels: {}, loaderProps: {}, loaderSize: {}, loaderType: { type: [String, Array, Boolean, null] }, loading: {}, loadingText: {}, matchColumnWidths: { type: Boolean }, modelValue: {}, multiSort: {}, mustSort: {}, noDataText: {}, noFilter: {}, page: {}, returnObject: {}, search: {}, searchContainerCols: {}, searchDebounce: {}, searchMaxWait: {}, searchProps: {}, separator: {}, server: { type: Boolean }, selectStrategy: {}, showDrilldownWhenLoading: { type: Boolean }, showExpand: {}, showFooterRow: { type: Boolean }, showSearch: { type: Boolean }, showSelect: {}, sortAscIcon: {}, sortBy: {}, tableType: {}, width: {} }, { ...Je }), emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:options", "update:itemsPerPage", "update:page", "update:search", "update:sortBy"], setup(a, { emit: n }) {
  const r = n, l = a, t = Se(lt, {}), d = X({ ...l, ...t }), { colorPercentageChange: u, colorPercentageDirection: p, elevation: $, expandOnClick: m, footerBackgroundColor: x, footerColor: P, headerBackgroundColor: T, headerColor: g, hover: K, itemsPerPageOptions: I, loaderProps: R, loaderType: F, separator: A, sortAscIcon: _ } = yt(d.value), i = fe(), E = ft(), C = vt(null), h = y(() => l.density);
  Ue(() => {
    l.level === 1 && o.level !== 1 || o.server || te();
  }), kt(() => {
    C.value = Object.assign({}, l.server ? Pt : Bt);
  });
  let o = Ft(Object.assign({}, l));
  o != null && o.colors && (o.colors.default = { ...be, ...d.value.defaultColors });
  const U = { ...l, ...o }, c = X(E["data-vdt-id"] ?? `v-drilldown-table-${Date.now()}`), L = X(""), v = Pe(), Y = y(() => o.sortBy), z = y(() => !!o.loading || o.hideNoData);
  (function(s, k, G) {
    const w = ee(s, (...b) => (ht(() => w()), k(...b)), G);
  })(l, () => {
    l.level === 1 && o.level !== 1 || te(), o.itemsPerPage = l.itemsPerPage;
  }, { immediate: !1 }), ee(() => l.items, () => {
    l.loading || te();
  }, { deep: !0 }), ee(() => l.loading, () => {
    if (l.loading)
      return o.loading = l.loading, !1;
    te();
  }), He(() => {
    o.colors && d.value.defaultColors && (o.colors.default = { ...be, ...d.value.defaultColors });
  }), He(() => {
    d.value = { ...l, ...t };
  });
  const J = (s) => {
    const k = e(d.value.loaderType);
    return !(s && (k === "skelton" || Array.isArray(k) && k.length === 1 && k[0] === "skelton" || !o.showDrilldownWhenLoading));
  }, Be = y(() => ((s) => {
    const { elevation: k, fixedHeader: G, isDrilldown: w, isHover: b, isServerSide: B, level: D, separator: H } = s;
    return { [`${S}--child`]: w, [`${S}--fixed-header`]: G, [`${S}--hover`]: b, [`${S}--level-${D}`]: !0, [`${S}--server`]: B, [`${S}--separator-${H}`]: H, [`${S}`]: !0, [`elevation-${k}`]: parseInt(k) > 0 };
  })({ elevation: e($), fixedHeader: o.fixedHeader, isDrilldown: l.isDrilldown, isHover: e(K), isServerSide: !1, level: o.level, separator: e(A) })), $e = y(() => ((s) => {
    const { colors: k, level: G, theme: w } = s;
    let b = {};
    typeof k == "object" && k !== null && (b = Te({ colors: k, level: G, prop: "default", themeColors: w }));
    const B = { borderBottom: "none" };
    return b.border && (B.borderBottom = `1px solid ${b.border}`), B;
  })({ colors: o.colors, level: o.level, theme: v }));
  function te() {
    var s;
    l.drilldown ? o = ((k) => {
      const { drilldown: G, item: w, level: b, levels: B, loadedDrilldown: D } = k;
      let H = D;
      const oe = w;
      H = ye(D, G);
      const ke = (D.items || [{}]).find((Fe) => {
        const Ce = Fe[D.drilldownKey];
        let he = {};
        return oe && (he = oe[D.drilldownKey]), Ce === he;
      });
      return H = ye(D, ke[D.itemChildrenKey]), B === b && (H.showExpand = !1), H;
    })({ drilldown: l.drilldown, item: l.item, level: l.level, levels: l.levels, loadedDrilldown: o, matchColumnWidths: l.matchColumnWidths }) : (o = ye(o, l), l.matchColumnWidths && ((s = o == null ? void 0 : o.columnWidths) == null ? void 0 : s.length) === 0 && (o.columnWidths = ((k) => {
      const { tableId: G } = k, w = [], b = e(G), B = document.querySelectorAll(`[data-vdt-id="${b}"] .v-drilldown-table--header-row-th-1`);
      if (Object.keys(B).length > 0)
        for (let D = 0; D < B.length; D += 1) {
          const H = B[D];
          w.push(H.offsetWidth);
        }
      return w;
    })({ tableId: c })));
  }
  function ue(s) {
    let k = { ...U, ...o, ...s };
    l.server && (k = { ...o, ...U, ...s }), ((G) => {
      const { data: w, drilldownData: b, emit: B } = G;
      w.isExpanded(w.internalItem) && B("update:drilldown", b), B("update:expanded", w.item);
    })({ data: s, drilldownData: k, emit: r });
  }
  function ve(s) {
    return { items: s.items, itemsPerPage: s.itemsPerPage, page: s.page, search: L.value, server: s.server, sortBy: s.sortBy };
  }
  const pe = function(s) {
    const k = mt();
    function G(B) {
      var D;
      const H = me.get(s) || /* @__PURE__ */ new Set();
      H.add(B), me.set(s, H);
      const oe = () => w(B);
      return (D = k == null ? void 0 : k.cleanups) == null || D.push(oe), oe;
    }
    function w(B) {
      const D = me.get(s);
      D && (D.delete(B), D.size || b());
    }
    function b() {
      me.delete(s);
    }
    return { on: G, once: function(B) {
      return G(function D(...H) {
        w(D), B(...H);
      });
    }, off: w, emit: function(B, D) {
      var H;
      (H = me.get(s)) == null || H.forEach((oe) => oe(B, D));
    }, reset: b };
  }(Tt), rt = pe.on(function(s) {
    l.level === 1 && s.drilldown.server && r("update:options", { ...s });
  });
  function at(s) {
    o.itemsPerPage = s;
    const k = ve(o), G = { drilldown: { ...l, ...k, itemsPerPage: s }, itemsPerPage: s, name: "update:itemsPerPage" };
    pe.emit(G), r("update:itemsPerPage", s);
  }
  function nt(s) {
    o.page = s;
    const k = ve(o), G = { drilldown: { ...l, ...k, page: s }, name: "update:page", page: s };
    pe.emit(G), r("update:page", s);
  }
  Ct(() => {
    rt();
  });
  const Le = { debounce: o.searchDebounce, maxWait: o.searchMaxWait };
  function Oe() {
    i.top || i["top.left"] || (o.search = L.value), (i.top || i["top.left"]) && (L.value = l.search || "");
    const s = ve(o), k = { drilldown: { ...l, ...s, search: L.value }, search: L.value };
    pe.emit(k), r("update:search", k);
  }
  function st(s) {
    o.sortBy = s;
    const k = ve(o), G = { drilldown: { ...l, ...k, sortBy: s }, name: "update:sortBy", sortBy: s };
    pe.emit(G), r("update:sortBy", s);
  }
  function Me() {
  }
  return ze(() => l.search, () => {
    Oe();
  }, Le), ze(L, () => {
    i.top || i["top.left"] || Oe();
  }, Le), (s, k) => {
    const G = wt("VDrilldownTable", !0);
    return e(C) ? (f(), j(bt(e(C)), ie({ key: 0 }, s.$attrs, { modelValue: e(o).modelValue, "onUpdate:modelValue": [k[5] || (k[5] = (w) => e(o).modelValue = w), Me], class: e(Be), "data-vdt-id": e(c), density: e(h), "expand-on-click": e(m), expanded: e(o).expanded, "fixed-header": e(o).fixedHeader, "group-by": e(o).groupBy, headers: e(o).headers, height: e(o).height, "hide-no-data": e(z), hover: e(K), "item-selectable": e(o).itemSelectable, "item-value": e(o).itemValue, items: e(o).items, "items-length": e(o).itemsLength, "items-per-page": e(o).itemsPerPage, "items-per-page-options": e(I), loading: (!e(F) || e(i).loading) && e(o).loading, "multi-sort": e(o).multiSort, "must-sort": e(o).mustSort, "no-data-text": e(o).noDataText, page: e(o).page, "return-object": e(o).returnObject, search: e(L), "select-strategy": e(o).selectStrategy, "show-expand": e(o).showExpand, "sort-by": e(Y), style: e($e), "onUpdate:itemsPerPage": at, "onUpdate:page": nt, "onUpdate:sortBy": st }), se({ top: O((w) => [(f(), j(e(lo), { key: s.level, items: e(o).items, level: e(o).level, loading: e(o).loading, "search-container-cols": e(o).searchContainerCols, "search-props": e(o).searchProps, "show-search": e(o).showSearch ?? !1, "slot-props": w, "onUpdate:search": k[0] || (k[0] = (b) => L.value = b) }, se({ _: 2 }, [le(e(i), (b, B) => ({ name: B, fn: O((D) => [W(s.$slots, B, q(Z({ ...D })))]) }))]), 1032, ["items", "level", "loading", "search-container-cols", "search-props", "show-search", "slot-props"]))]), headers: O((w) => [(f(), j(e(Rt), { key: s.level, colorPercentageChange: e(u), colorPercentageDirection: e(p), colors: e(o).colors, "column-widths": e(o).columnWidths, density: e(h), headerBackgroundColor: e(d).headerBackgroundColor, headerColor: e(g), items: e(o).items, level: s.level, "loader-props": e(R), "loader-settings": { colspan: w.columns.length, loaderType: e(F), loading: e(o).loading, loadingText: s.loadingText }, "match-column-widths": e(o).matchColumnWidths, "select-strategy": e(o).selectStrategy, "show-select": e(o).showSelect, "slot-props": { ...w }, "sort-asc-icon": e(_), "sort-by": e(o).sortBy, "table-model-value": e(o).modelValue }, se({ _: 2 }, [le(e(i), (b, B) => ({ name: B, fn: O((D) => [W(s.$slots, B, q(Z({ ...D })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "column-widths", "density", "headerBackgroundColor", "headerColor", "items", "level", "loader-props", "loader-settings", "match-column-widths", "select-strategy", "show-select", "slot-props", "sort-asc-icon", "sort-by", "table-model-value"]))]), item: O((w) => [(f(), j(e(Yt), { key: s.level, density: e(h), "expand-on-click": e(m), "group-by": e(o).groupBy, "item-selectable": e(o).itemSelectable, items: e(o).items, level: e(o).level, levels: e(o).levels, "show-expand": e(o).showExpand, "show-select": e(o).showSelect, "slot-props": { level: s.level, ...w }, "onClick:row": k[1] || (k[1] = (b) => {
      r("click:row", b);
    }), "onClick:row:checkbox": k[2] || (k[2] = (b) => {
      r("click:row:checkbox", b);
    }), "onUpdate:expanded": k[3] || (k[3] = (b) => ue(b)) }, se({ _: 2 }, [le(e(i), (b, B) => ({ name: B, fn: O((D) => [W(s.$slots, B, q(Z({ ...D })))]) }))]), 1032, ["density", "expand-on-click", "group-by", "item-selectable", "items", "level", "levels", "show-expand", "show-select", "slot-props"]))]), "expanded-row": O(({ columns: w, item: b, internalItem: B }) => {
      var D, H, oe, ke, Fe, Ce, he, Ve, We, _e, Ge;
      return [re("tr", { class: M(J((D = b[s.itemChildrenKey]) == null ? void 0 : D.loading) ? "" : "d-none") }, [re("td", { class: "px-0 ma-0", colspan: w.length, style: { "vertical-align": "top" } }, [(f(), j(G, { key: B.key, "column-widths": e(o).columnWidths, defaultColors: e(d).defaultColors, density: e(h), drilldown: e(o), "footer-background-color": e(x), "footer-color": e(P), "header-background-color": e(T), "header-color": e(g), headers: (H = b[s.itemChildrenKey]) == null ? void 0 : H.headers, "is-drilldown": !0, item: b, items: (oe = b[s.itemChildrenKey]) == null ? void 0 : oe.items, "items-length": (ke = b[s.itemChildrenKey]) == null ? void 0 : ke.itemsLength, "items-per-page": (Fe = b[s.itemChildrenKey]) == null ? void 0 : Fe.itemsPerPage, level: s.level + 1, levels: e(o).levels, loaderProps: (Ce = b[s.itemChildrenKey]) == null ? void 0 : Ce.loaderProps, loaderType: (he = b[s.itemChildrenKey]) == null ? void 0 : he.loaderType, loading: (Ve = b[s.itemChildrenKey]) == null ? void 0 : Ve.loading, loadingText: s.loadingText, "match-column-widths": e(o).matchColumnWidths, "multi-sort": (We = b[s.itemChildrenKey]) == null ? void 0 : We.multiSort, "no-data-text": e(o).noDataText, server: (_e = b[s.itemChildrenKey]) == null ? void 0 : _e.server, "show-footer-row": (Ge = b[s.itemChildrenKey]) == null ? void 0 : Ge.showFooterRow, "sort-by": e(o).sortBy, "table-type": e(C), "onUpdate:drilldown": k[4] || (k[4] = (we) => ue(we)), "onUpdate:modelValue": Me }, se({ default: O(() => [(f(!0), V(ne, null, le(Object.keys(e(i)), (we) => W(s.$slots, we)), 256))]), _: 2 }, [le(e(i), (we, Ie) => ({ name: Ie, fn: O((it) => [W(s.$slots, Ie, q(Z({ ...it })))]) }))]), 1032, ["column-widths", "defaultColors", "density", "drilldown", "footer-background-color", "footer-color", "header-background-color", "header-color", "headers", "item", "items", "items-length", "items-per-page", "level", "levels", "loaderProps", "loaderType", "loading", "loadingText", "match-column-widths", "multi-sort", "no-data-text", "server", "show-footer-row", "sort-by", "table-type"]))], 8, so)], 2)];
    }), "footer.prepend": O(() => [e(i)["footer.prepend"] ? W(s.$slots, "footer.prepend", { key: 0 }) : N("", !0)]), _: 2 }, [e(i).loader ? { name: "loader", fn: O(() => [W(s.$slots, "loader")]), key: "0" } : void 0, e(i).loading ? { name: "loading", fn: O(() => [W(s.$slots, "loading")]), key: "1" } : void 0, e(i).thead ? { name: "thead", fn: O((w) => [W(s.$slots, "thead", q(Z({ ...w, columnWidths: e(o).columnWidths, items: e(o).items, loaderSettings: { colspan: w.columns.length, loaderType: e(F), loading: e(o).loading, loadingText: s.loadingText }, matchColumnWidths: e(o).matchColumnWidths, selectStrategy: e(o).selectStrategy, sortBy: e(o).sortBy })))]), key: "2" } : void 0, e(i).body ? { name: "body", fn: O((w) => [W(s.$slots, "body", q(Z({ ...w })))]), key: "3" } : void 0, e(i)["group-header"] ? { name: "group-header", fn: O((w) => [W(s.$slots, "group-header", q(Z({ ...w })))]), key: "4" } : void 0, e(i).tbody ? { name: "tbody", fn: O((w) => [W(s.$slots, "tbody", q(Z({ ...w })))]), key: "5" } : void 0, e(i)["no-data"] ? { name: "no-data", fn: O(() => [W(s.$slots, "no-data")]), key: "6" } : void 0, e(i).tfoot || s.showFooterRow ? { name: "tfoot", fn: O((w) => [e(i).tfoot ? W(s.$slots, "tfoot", q(ie({ key: 0 }, { ...w }))) : (f(), j(e(oo), { key: s.level, colorPercentageChange: e(u), colorPercentageDirection: e(p), colors: e(o).colors, density: e(h), footerBackgroundColor: e(x), footerColor: e(P), footers: e(o).footers || [], items: e(o).items, level: e(o).level, "select-strategy": e(o).selectStrategy, "show-select": e(o).showSelect, "slot-props": { ...w }, "table-model-value": e(o).modelValue }, se({ _: 2 }, [le(e(i), (b, B) => ({ name: B, fn: O((D) => [W(s.$slots, B, q(Z({ ...D })))]) }))]), 1032, ["colorPercentageChange", "colorPercentageDirection", "colors", "density", "footerBackgroundColor", "footerColor", "footers", "items", "level", "select-strategy", "show-select", "slot-props", "table-model-value"]))]), key: "7" } : void 0, e(i).bottom ? { name: "bottom", fn: O((w) => [(f(), j(e(Et), { key: s.level, "slot-props": w }, se({ _: 2 }, [le(e(i), (b, B) => ({ name: B, fn: O((D) => [W(s.$slots, B, q(Z({ ...D })))]) }))]), 1032, ["slot-props"]))]), key: "8" } : void 0]), 1040, ["modelValue", "class", "data-vdt-id", "density", "expand-on-click", "expanded", "fixed-header", "group-by", "headers", "height", "hide-no-data", "hover", "item-selectable", "item-value", "items", "items-length", "items-per-page", "items-per-page-options", "loading", "multi-sort", "must-sort", "no-data-text", "page", "return-object", "search", "select-strategy", "show-expand", "sort-by", "style"])) : N("", !0);
  };
} }), lt = Symbol();
function Fo(a = {}) {
  return { install: (n) => {
    n.provide(lt, a), n.component("VDrilldownTable", xt(() => import("./VDrilldownTable-C0KQjzja.mjs")));
  } };
}
export {
  ko as VDrilldownTable,
  Fo as createVDrilldownTable,
  ko as default,
  lt as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".v-drilldown-table--loader-tr[data-v-b954d026]{height:0;position:relative;top:0;width:100%;z-index:100}.v-drilldown-table--loader-tr-not-linear td[data-v-b954d026]{height:0!important}.v-drilldown-table--loader-tr>td[data-v-b954d026]{border:0!important}.v-drilldown-table--loader-tr-vrow[data-v-b954d026]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-384afe75]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-384afe75]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-384afe75]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-384afe75],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-384afe75]{color:rgb(var(--v-theme-on-surface) var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-384afe75]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-384afe75]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-384afe75]{color:rgb(var(--v-theme-on-surface) var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-384afe75],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-384afe75],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-384afe75]{color:rgb(var(--v-theme-on-surface) var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-384afe75]{color:rgb(var(--v-theme-on-surface) var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-91892b42]{cursor:pointer}.v-drilldown-table--footer-row th{color:rgb(var(--v-theme-on-surface) var(--v-medium-emphasis-opacity))}:root{--vdt-border: thin solid rgb(var(--v-border-color) var(--v-border-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgb(var(--v-border-color) var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgb(var(--v-border-color) var(--v-hover-opacity))}.v-drilldown-table--separator-horizontal thead tr th{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tbody>tr:last-child>th,.v-drilldown-table--separator-horizontal tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-horizontal tfoot tr>th,.v-drilldown-table--separator-horizontal tfoot tr>td{border-bottom:var(--vdt-border);border-top:0!important}.v-drilldown-table--separator-vertical thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical thead tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-vertical tbody>tr>td{border-bottom:0!important}.v-drilldown-table--separator-vertical tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th{border-bottom:var(--vdt-border)!important;border-top:0!important}.v-drilldown-table--separator-vertical tfoot tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-vertical tfoot tr th:nth-last-child(2){border-right:0!important}.v-drilldown-table--separator-cell thead tr th{border-bottom:0!important;border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell thead tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr>td:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:first-child>td{border-top:var(--vdt-border)!important}.v-drilldown-table--separator-cell tbody>tr:last-child>td{border-bottom:var(--vdt-border)!important}.v-drilldown-table--separator-cell tfoot>tr th{border-bottom:var(--vdt-border)!important;border-top:0!important}.v-drilldown-table--separator-cell tfoot>tr th:not(:last-child){border-right:var(--vdt-border)!important}.v-drilldown-table tbody{height:2px;min-height:2px;position:relative}.v-drilldown-table .v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{box-shadow:none}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>th{box-shadow:none!important}.v-drilldown-table--fixed-header .v-table__wrapper>table>thead>tr>td{background:unset}.v-drilldown-table .v-data-table-footer{border-bottom:var(--vdt-border);padding-bottom:4px;padding-top:4px}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
