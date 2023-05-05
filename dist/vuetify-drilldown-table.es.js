import { defineComponent as j, resolveComponent as P, openBlock as m, createBlock as q, normalizeClass as B, unref as t, withCtx as D, createVNode as T, createCommentVNode as E, normalizeStyle as G, createTextVNode as Y, toDisplayString as le, renderSlot as A, createElementBlock as b, Fragment as O, renderList as M, isRef as U, createElementVNode as V, mergeProps as oe, createSlots as N, normalizeProps as R, guardReactiveProps as H } from "vue";
/**
 * @name vuetify-drilldown-table
 * @version 0.0.1-alpha
 * @description The vuetify-drilldown-table
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @repository https://github.com/webdevnerdstuff/vuetify-drilldown-table
 * @license MIT License
 */
const k = "v-drilldown-table", re = { colors: { default: !1, required: !1, type: [Object, Boolean] }, debounceDelay: { default: 750, required: !1, type: Number }, density: { default: "comfortable", required: !1, type: String }, drilldown: { default: () => {
}, required: !1, type: Object }, drilldownKey: { default: "id", required: !1, type: String }, elevation: { default: 0, required: !1, type: [Number, String] }, expandOnClick: { default: !1, required: !1, type: Boolean }, footers: { default: () => [], required: !1, type: Array }, headers: { default: () => [], required: !1, type: Array }, hover: { default: !1, required: !1, type: Boolean }, isDrilldown: { default: !1, required: !1, type: Boolean }, item: { default: () => {
}, required: !1, type: Object }, itemChildrenKey: { default: "child", required: !1, type: String }, items: { default: () => {
}, required: !1, type: Array }, level: { default: 0, required: !1, type: Number }, levels: { default: 0, required: !1, type: Number }, loaderType: { default: ["linear", "text"], required: !1, type: [String, Array] }, loading: { default: !1, required: !1, type: Boolean }, loadingText: { default: "$vuetify.dataIterator.loadingText", required: !1, type: String }, noDataText: { default: "$vuetify.noDataText", required: !1, type: String }, searchProps: { default: () => ({ cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "default", variant: "underlined" }), required: !1, type: Object }, showSearch: { default: !1, required: !1, type: Boolean }, skeltonType: { default: "heading@1", required: !1, type: String }, sortBy: { default: () => [], required: !1, type: Array } };
function ae(a, r, o = "default", l) {
  const i = a.colors, d = { ...i[o] }, h = i.percentageDirection, y = a.level;
  if (d === void 0)
    throw new Error(`[VDrilldownTable]: The color option '${o}' does not exist`);
  let v = function(w, n, u) {
    const C = w.colors;
    let c = 100, $ = C.percentageChange ?? 0;
    return isNaN($) && (c = 100), $ *= n, (u === "desc" || u === "descending") && (c = 100 - $), u !== "asc" && u !== "ascending" || (c = 0 + $), c < 0 && (c = 0), c > 100 && (c = 100), isNaN(c) && (c = 100), c;
  }(a, y, h);
  return l || Object.entries(d).forEach(([w, n]) => {
    let u = r.global.current.value.colors[n] ?? n;
    if (u || (u = "transparent"), u === "transparent" || u === "none" || u === "inherit" || u === "currentColor" || u === "initial" || u === "unset")
      return void (d[w] = u);
    if (w === "text" && y === 0 && h === "asc" && (v = 100), u.includes("--v-theme"))
      return void (d[w] = `rgb(var(${u}))`);
    const C = `/ ${v}%`, c = Q(u);
    if (c.includes("/"))
      return d[w] = `hsl(${c})`;
    d[w] = `hsl(${Q(u)} ${C})`;
  }), d;
}
function Q(a) {
  let r = function(n) {
    const u = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let C = n;
    return Object.entries(u).forEach(([c, $]) => {
      n.toLowerCase() != c.toLowerCase() || (C = $);
    }), C;
  }(a), o = 0, l = 0, i = 0, d = 0, h = 0, y = 0;
  if (r.substring(0, 1) === "#")
    r = function(n) {
      let u = n.replace("#", "");
      u.length === 3 && (u = u.split("").map((L) => L + L).join(""));
      const C = parseInt(u.substring(0, 2), 16), c = parseInt(u.substring(2, 4), 16), $ = parseInt(u.substring(4, 6), 16);
      return [C, c, $];
    }(r);
  else if (r.includes("rgb"))
    r = [...r.matchAll(/\d+/g)].map(Number);
  else if (r.includes("hsl"))
    return r = [...r.matchAll(/\d+/g)].map(Number), o = r[0], l = r[1], i = r[2], `${o} ${l}% ${i}%`;
  [d, h, y] = r, d /= 255, h /= 255, y /= 255;
  const v = Math.max(d, h, y), w = Math.min(d, h, y);
  if (v === null || !w === null || isNaN(v) || isNaN(w)) {
    const n = "0 0% 100% / 12%";
    return console.warn(`[VDrilldownTable]: The "color" prop value using "${r}" doesn't exist. Using the value "hsl(${n})" in it's place.`), n;
  }
  if (o = (v + w) / 2, l = (v + w) / 2, i = (v + w) / 2, v == w)
    o = l = 0;
  else {
    const n = v - w;
    switch (l = i > 0.5 ? n / (2 - v - w) : n / (v + w), v) {
      case d:
        o = (h - y) / n + (h < y ? 6 : 0);
        break;
      case h:
        o = (y - d) / n + 2;
        break;
      case y:
        o = (d - h) / n + 4;
    }
    o /= 6;
  }
  return o = Math.round(360 * o), l = Math.round(100 * l), i = Math.round(100 * i), `${o} ${l}% ${i}%`;
}
function W(a, r, o = "default", l = null) {
  if (a.colors === !1)
    throw console.trace(), new Error('The "colors" prop is set to false. This function should no be called.');
  const i = ae(a, r, o, l);
  return l ? i[l] : i;
}
const J = (a, r) => {
  const o = a.__vccOpts || a;
  for (const [l, i] of r)
    o[l] = i;
  return o;
}, X = J(j({ __name: "TableLoader", props: { height: { default: "2", required: !1, type: String }, loadedDrilldown: { required: !0, type: Object }, loading: { required: !0, type: Boolean }, loadingText: { default: "Loading...", required: !1, type: String }, size: { default: "default", required: !1, type: String }, textLoader: { default: !0, required: !1, type: Boolean } }, setup(a) {
  const r = a, o = useTheme(), l = computed(() => {
    if (r.loadedDrilldown.colors !== !1)
      return W(r.loadedDrilldown, o, "loader");
  }), i = computed(() => ({ [`${k}--table-loader`]: !0, "align-center": !1, "d-grid": !1, "flex-column": !0, "ma-0": !0, "pa-0": !0, "text-center": !0 })), d = computed(() => {
    var c;
    return ((c = l.value) == null ? void 0 : c.linear) || "";
  }), h = computed(() => {
    var c;
    return (c = l.value) == null ? void 0 : c.bg;
  }), y = computed(() => {
    var c;
    return (c = l.value) == null ? void 0 : c.circular;
  }), v = computed(() => r.loadedDrilldown.skeltonType || "heading@1"), w = computed(() => {
    var c;
    return { color: (c = l.value) == null ? void 0 : c.text };
  }), n = computed(() => r.loadingText || "Loading..."), u = (c) => {
    const $ = r.loadedDrilldown.loaderType;
    return Array.isArray($) ? $.indexOf(c) : 1;
  }, C = (c) => {
    const $ = r.loadedDrilldown.loaderType;
    return c === r.loadedDrilldown.loaderType || !!Array.isArray($) && $.includes(c);
  };
  return (c, $) => {
    const L = P("v-progress-linear"), F = P("v-col"), e = P("v-progress-circular"), p = P("v-skeleton-loader"), x = P("v-row");
    return a.loading ? (m(), q(x, { key: 0, class: B(t(i)), "no-gutters": "" }, { default: D(() => [C("linear") ? (m(), q(F, { key: 0, class: "pa-0 ma-0", order: u("linear") }, { default: D(() => [T(L, { color: t(d), height: a.height, indeterminate: "" }, null, 8, ["color", "height"])]), _: 1 }, 8, ["order"])) : E("", !0), C("circular") ? (m(), q(F, { key: 1, class: "pa-0 my-2", order: u("circular") }, { default: D(() => [T(e, { "bg-color": t(h), color: t(y), indeterminate: "", size: a.size }, null, 8, ["bg-color", "color", "size"])]), _: 1 }, 8, ["order"])) : E("", !0), C("skelton") ? (m(), q(F, { key: 2, class: "pa-0 ma-0", order: u("skelton") }, { default: D(() => [T(p, { loading: a.loading, type: t(v) }, null, 8, ["loading", "type"])]), _: 1 }, 8, ["order"])) : E("", !0), C("text") ? (m(), q(F, { key: 3, class: "my-2", order: u("text"), style: G(t(w)) }, { default: D(() => [Y(le(t(n)), 1)]), _: 1 }, 8, ["order", "style"])) : E("", !0)]), _: 1 }, 8, ["class"])) : E("", !0);
  };
} }), [["__scopeId", "data-v-54ff3e55"]]);
function Z(a, r = "px") {
  if (a != null && a !== "")
    return +a ? `${Number(a)}${r}` : String(a);
}
function te(a, r, o) {
  const l = r[a.itemTitle], i = [l, r, o];
  return r.renderer ? r.renderer(...i) : r.renderHeader ? r.renderHeader(...i) : r.renderFooter ? r.renderFooter(...i) : l || "";
}
function z(a) {
  return a && typeof a == "object" && !Array.isArray(a);
}
function I(a, ...r) {
  if (!r.length)
    return a;
  const o = r.shift();
  if (z(a) && z(o))
    for (const l in o)
      z(o[l]) ? (a[l] || Object.assign(a, { [l]: {} }), I(a[l], o[l])) : Object.assign(a, { [l]: o[l] });
  return I(a, ...r);
}
const de = j({ __name: "BottomSlot", props: { loadedDrilldown: { required: !0, type: Object } }, setup: (a) => (r, o) => A(r.$slots, "bottom") }), ne = ["colspan"], se = ["colspan"], ie = ["colspan", "innerHTML"], ce = ["colspan", "onClick"], ue = ["innerHTML"], pe = J(j({ __name: "HeadersSlot", props: { isTheadSlot: { default: !1, required: !1, type: Boolean }, loadedDrilldown: { required: !0, type: Object }, slotProps: { required: !1, type: Object } }, emits: ["click:selectAll", "update:sortBy"], setup(a, { emit: r }) {
  var F;
  const o = a, l = useTheme(), i = ref(!((F = o.slotProps) != null && F.allSelected)), d = computed(() => {
    var e;
    return (e = o.slotProps) == null ? void 0 : e.columns;
  }), h = computed(() => {
    var e;
    return (e = o.slotProps) == null ? void 0 : e.someSelected;
  }), y = computed(() => {
    var e;
    return ((e = o.slotProps) == null ? void 0 : e.allSelected) || i.value;
  }), v = computed(() => {
    var e;
    return h.value && !((e = o.slotProps) != null && e.allSelected);
  }), w = computed(() => ({ [`${k}--header-row`]: !0, [`${k}--header-row-${o.loadedDrilldown.level}`]: !0 })), n = (e, p = "") => ({ [`${k}--header-row-th`]: !0, [`${k}--header-row-th-${p}`]: p !== "", [`${k}--header-row-th-${p}-${o.loadedDrilldown.level}`]: p, [`${k}--header-row-th-${o.loadedDrilldown.level}`]: !0, [`${k}--header-row-th-sortable`]: e.sortable, [`${k}--header-row-th-sortable-default-color`]: e.sortable && o.loadedDrilldown.colors === !1, [`${e.cellClass}`]: e.cellClass }), u = (e, p = !1) => {
    const x = { minWidth: e.width ? Z(e.width) : "auto", width: e.width ? Z(e.width) : "auto" };
    if (p && !e.width && (x.width = "48px", x.minWidth = "48px"), o.loadedDrilldown.colors === !1)
      return x;
    const f = W(o.loadedDrilldown, l, "header");
    return x.backgroundColor = f.bg, x.color = f.text, x;
  };
  watch(i, (e) => {
    var p;
    (p = o.slotProps) == null || p.selectAll(e), r("click:selectAll", i.value);
  }), watch(y, (e) => {
    i.value = e;
  }), watch(h, (e) => {
    e || (i.value = !1);
  });
  const C = computed(() => ({ "d-flex": !0, [`${k}--header-select-all-checkbox`]: !0, [`${k}--header-select-all-checkbox-${o.loadedDrilldown.level}`]: !0 })), c = (e) => ({ [`${k}--header-row-th-sortable-sort-icon`]: !0, [`${k}--header-row-th-sortable-sort-icon-${o.loadedDrilldown.level}`]: !0, [`${k}--header-row-th-sortable-sort-icon-desc`]: $(e) === "desc", [`${k}--header-row-th-sortable-sort-icon-asc`]: $(e) === "asc" });
  function $(e) {
    if (o.loadedDrilldown.sortBy) {
      const p = o.loadedDrilldown.sortBy.find((x) => x.key === e);
      if (p)
        return p.order;
    }
  }
  function L(e) {
    return te(o.loadedDrilldown, e, 0);
  }
  return (e, p) => {
    const x = P("v-checkbox"), f = P("v-icon");
    return m(), b("tr", { class: B(t(w)) }, [(m(!0), b(O, null, M(t(d), (s) => {
      return m(), b(O, { key: s }, [e.$slots[`header.${s.key}`] ? (m(), b("th", { key: 0, class: B(n(s, s.key)), colspan: s.colspan || 1, style: G(u(s, !0)) }, [A(e.$slots, `header.${s.key}`, { column: s }, void 0, !0)], 14, ne)) : s.key === "data-table-select" ? (m(), b("th", { key: 1, class: B(n(s, "header-data-table-select")), colspan: s.colspan || 1, style: G(u(s, !0)) }, [T(x, { modelValue: t(i), "onUpdate:modelValue": p[0] || (p[0] = (S) => U(i) ? i.value = S : null), class: B(t(C)), density: a.loadedDrilldown.density, focused: !1, indeterminate: t(v) }, null, 8, ["modelValue", "class", "density", "indeterminate"])], 14, se)) : s.key === "data-table-expand" ? (m(), b("th", { key: 2, class: B(n(s, "data-table-expand")), colspan: s.colspan || 1, style: G(u(s, !0)), innerHTML: L(s) }, null, 14, ie)) : (m(), b("th", { key: 3, class: B(n(s)), colspan: s.colspan || 1, style: G(u(s)), onClick: (S) => function(_) {
        var K;
        _.sortable && ((K = o.slotProps) == null || K.toggleSort(_.key), r("update:sortBy", _));
      }(s) }, [V("div", { class: B((g = s.align, { "d-flex align-center": !0, [`justify-${g}`]: g, "justify-start": !g })) }, [V("span", { innerHTML: L(s) }, null, 8, ue), s.sortable && e.$slots["header.sortIcon"] ? (m(), b("span", { key: 0, class: B(c(s.key)) }, [A(e.$slots, "header.sortIcon", {}, void 0, !0)], 2)) : s.sortable ? (m(), q(f, { key: 1, class: B(c(s.key)) }, { default: D(() => [Y(" mdi mdi-arrow-up ")]), _: 2 }, 1032, ["class"])) : E("", !0)], 2)], 14, ce))], 64);
      var g;
    }), 128))], 2);
  };
} }), [["__scopeId", "data-v-3f4b2637"]]), me = ["colspan"], ye = ["colspan"], he = ["innerHTML"], Fe = J(j({ __name: "ItemSlot", props: { items: { required: !0, type: Array }, loadedDrilldown: { required: !0, type: Object }, slotProps: { required: !0, type: Object } }, emits: ["click:row", "click:row:checkbox", "update:expanded"], setup(a, { emit: r }) {
  const o = a, l = computed(() => o.slotProps.columns), i = computed(() => o.slotProps.index), d = computed(() => o.slotProps.isExpanded), h = computed(() => o.slotProps.item), y = computed(() => o.slotProps.level), v = computed(() => o.slotProps.toggleExpand), w = computed(() => o.slotProps.toggleSelect), n = computed(() => {
    const F = o.loadedDrilldown;
    return { "v-data-table__tr": !0, "v-data-table__tr--clickable": F.expandOnClick && F.level < F.levels, [`${k}--body-row`]: !0, [`${k}--body-row-${F.level}`]: !0 };
  }), u = (F) => ({ [`${k}--body-row-td`]: !0, [`${k}--body-row-td-${o.loadedDrilldown.level}`]: !0, [`${F.cellClass}`]: F.cellClass });
  function C(F) {
    const { item: e, level: p, toggleExpand: x } = F;
    if (!(o.loadedDrilldown.level >= o.loadedDrilldown.levels)) {
      if (F.$event) {
        if (!o.loadedDrilldown.expandOnClick)
          return;
        r("click:row", F.$event);
      }
      p === o.loadedDrilldown.level && x(e), r("update:expanded", F);
    }
  }
  const c = ref(!1);
  function $(F) {
    const { item: e, level: p, toggleSelect: x } = F;
    p === o.loadedDrilldown.level && x(e), r("click:row:checkbox", e);
  }
  function L(F, e, p) {
    return function(x, f, s) {
      const g = x[f.key];
      return f.renderItem ? f.renderItem(g, x, f, s) : g;
    }(F.raw, e, p);
  }
  return watch(() => o.slotProps.allRowsSelected, () => {
    c.value = o.slotProps.allRowsSelected;
  }), (F, e) => {
    const p = P("v-icon"), x = P("v-checkbox");
    return m(), b("tr", { class: B(t(n)), onClick: e[5] || (e[5] = (f) => C({ columns: t(l), index: t(i), isExpanded: t(d), item: t(h), level: t(y), toggleExpand: t(v), $event: f })) }, [(m(!0), b(O, null, M(t(l), (f) => (m(), b(O, { key: f }, [f.key === "data-table-expand" || a.loadedDrilldown.showExpand ? (m(), b("td", { key: 0, class: B(u(f)), colspan: f.colspan || 1 }, [a.loadedDrilldown.level < a.loadedDrilldown.levels ? (m(), b("div", { key: 0, class: B(["v-drilldown-table--expand-icon", t(d)(t(h)) ? "rotate-180" : ""]), onClick: e[0] || (e[0] = (s) => C({ columns: t(l), index: t(i), isExpanded: t(d), item: t(h), level: t(y), toggleExpand: t(v) })) }, [F.$slots["item.data-table-expand"] ? A(F.$slots, "item.data-table-expand", { key: 0 }, void 0, !0) : (m(), q(p, { key: 1 }, { default: D(() => [Y(" mdi-chevron-down ")]), _: 1 }))], 2)) : E("", !0)], 10, me)) : f.key === "data-table-select" && F.$slots["item.data-table-select"] ? (m(), b("td", { key: 1, class: B(u(f)) }, [T(x, { modelValue: t(c), "onUpdate:modelValue": e[1] || (e[1] = (s) => U(c) ? c.value = s : null), class: "d-flex v-simple-checkbox", density: a.loadedDrilldown.density, onClick: e[2] || (e[2] = (s) => $({ columns: t(l), index: t(i), item: t(h), level: t(y), toggleSelect: t(w) })) }, null, 8, ["modelValue", "density"])], 2)) : f.key === "data-table-select" || a.loadedDrilldown.showSelect ? (m(), b("td", { key: 2, class: B(u(f)) }, [T(x, { modelValue: t(c), "onUpdate:modelValue": e[3] || (e[3] = (s) => U(c) ? c.value = s : null), class: "d-flex v-simple-checkbox", density: a.loadedDrilldown.density, onClick: e[4] || (e[4] = (s) => $({ columns: t(l), index: t(i), item: t(h), level: t(y), toggleSelect: t(w) })) }, null, 8, ["modelValue", "density"])], 2)) : F.$slots[`item.${f.key}`] ? A(F.$slots, `item.${f.key}`, { key: 3, colspan: f.colspan || 1, column: f, index: t(i), item: t(h), value: t(h).raw[f.key] }, void 0, !0) : (m(), b("td", { key: 4, class: B(u(f)), colspan: f.colspan || 1 }, [V("span", { innerHTML: L(t(h), f, t(i)) }, null, 8, he)], 10, ye))], 64))), 128))], 2);
  };
} }), [["__scopeId", "data-v-231207fc"]]), we = { key: 1 }, fe = { class: "v-drilldown-table--footer-row" }, ge = ["colspan", "innerHTML"], ve = ["colspan", "innerHTML"], De = ["colspan", "innerHTML"], ke = ["colspan"], be = j({ __name: "TfootSlot", props: { loadedDrilldown: { required: !0, type: Object } }, setup(a) {
  const r = a, o = useTheme(), l = computed(() => r.loadedDrilldown.footers), i = (y) => ({ [`${k}--footer-row-td`]: !0, [`${k}--footer-row-td-${r.loadedDrilldown.level}`]: !0, [`${y.cellClass}`]: y.cellClass }), d = computed(() => {
    if (r.loadedDrilldown.colors === !1)
      return {};
    const y = W(r.loadedDrilldown, o, "footer");
    return { backgroundColor: y.bg, color: y.text };
  });
  function h(y) {
    return te(r.loadedDrilldown, y, 0);
  }
  return (y, v) => {
    var w;
    return m(), b(O, null, [y.$slots.tfoot ? A(y.$slots, "tfoot", { key: 0 }) : E("", !0), (w = t(l)) != null && w.length ? (m(), b("tfoot", we, [V("tr", fe, [(m(!0), b(O, null, M(t(l), (n) => (m(), b(O, { key: n }, [y.$slots[`tfoot.${n.key}`] ? A(y.$slots, `tfoot.${n.key}`, { key: 0, column: n, style: G(t(d)) }) : n.key === "data-table-select" || a.loadedDrilldown.showSelect ? (m(), b("td", { key: 1, class: B(i(n)), colspan: n.colspan || 1, style: G(t(d)), innerHTML: h(n) }, null, 14, ge)) : n.key === "data-table-expand" ? (m(), b("td", { key: 2, class: B(i(n)), colspan: n.colspan || 1, style: G(t(d)), innerHTML: h(n) }, null, 14, ve)) : n.renderFooter || n.renderer || n.renderCell ? (m(), b("td", { key: 3, class: B(i(n)), colspan: n.colspan || 1, style: G(t(d)), innerHTML: h(n) }, null, 14, De)) : (m(), b("td", { key: 4, class: B(i(n)), colspan: n.colspan || 1, style: G(t(d)) }, le(n.title), 15, ke))], 64))), 128))])])) : E("", !0)], 64);
  };
} }), xe = j({ __name: "TopSlot", props: { loadedDrilldown: { required: !0, type: Object } }, emits: ["update:search"], setup(a, { emit: r }) {
  const o = a, l = ref("");
  watch(l, () => {
    r("update:search", l.value);
  });
  const i = computed(() => {
    const d = o.loadedDrilldown.searchProps.cols;
    return { [`${k}--search-field`]: !0, [`v-col-${d.xs}`]: d.xs, [`v-col-sm-${d.sm}`]: d.sm, [`v-col-md-${d.md}`]: d.md, [`v-col-lg-${d.lg}`]: d.lg, [`v-col-xl-${d.xl}`]: d.xl, [`v-col-xxl-${d.xxl}`]: d.xxl };
  });
  return (d, h) => {
    const y = P("v-text-field"), v = P("v-col"), w = P("v-row");
    return d.$slots.top ? A(d.$slots, "top", { key: 0 }) : a.loadedDrilldown.showSearch || d.$slots["top.left"] || d.$slots["top.right"] ? (m(), q(v, { key: 1, lg: "12" }, { default: D(() => [T(w, null, { default: D(() => [d.$slots["top.left"] ? A(d.$slots, "top.left", { key: 0 }) : a.loadedDrilldown.showSearch ? (m(), q(v, { key: 1, class: B(["d-flex align-center justify-end", t(i)]) }, { default: D(() => [a.loadedDrilldown.showSearch ? (m(), q(y, { key: 0, modelValue: t(l), "onUpdate:modelValue": h[0] || (h[0] = (n) => U(l) ? l.value = n : null), class: "mt-0 pt-0", density: a.loadedDrilldown.searchProps.density, "hide-details": "", label: "Search", "single-line": "", variant: a.loadedDrilldown.searchProps.variant }, null, 8, ["modelValue", "density", "variant"])) : E("", !0)]), _: 1 }, 8, ["class"])) : E("", !0), d.$slots["top.right"] ? A(d.$slots, "top.right", { key: 2 }) : E("", !0)]), _: 3 })]), _: 3 })) : E("", !0);
  };
} }), $e = { key: 0, class: "text-center ma-0 pa-0" }, Be = ["colspan"], Ce = ["colspan"], ee = j({ __name: "VDrilldownTable", props: { ...re }, emits: ["click:row", "click:row:checkbox", "update:expanded", "update:drilldown", "update:sortBy"], setup(a, { emit: r }) {
  const o = a;
  let l = reactive({ customFilter: void 0, customKeyFilter: void 0, drilldownKey: "", expanded: [], filterKeys: [], filterMode: "some", fixedFooter: !0, fixedHeader: !0, height: "auto", hideNoData: !1, itemChildren: "children", itemChildrenKey: "child", itemProps: "props", itemTitle: "title", itemValue: "id", items: [], itemsPerPage: 10, level: 0, levels: 0, loaderType: "", modelValue: [], noFilter: !1, page: 1, returnObject: !0, searchProps: { cols: { lg: 3, md: 6, sm: 12, xl: 3, xs: 12, xxl: 2 }, density: "compact", variant: "underlined" }, server: !1, showExpand: !1, width: "100%" });
  const i = ref(!1), d = ref(""), h = ref(""), y = useTheme(), v = useSlots(), w = computed(() => !!l.loading || l.hideNoData);
  watch(o, () => {
    o.level === 0 && l.level !== 0 || function() {
      if (o.drilldown) {
        l = I(l, o.drilldown);
        const e = l.items.find((p) => p[l.drilldownKey] === o.item.raw[l.drilldownKey]);
        return l = I(l, e[l.itemChildrenKey]), void (o.levels === o.level && (l.showExpand = !1));
      }
      l = I(l, o);
    }();
  });
  const n = computed(() => {
    const e = l.elevation;
    return { [`${k}`]: !0, [`${k}--level-${l.level}`]: !0, [`${k}--hover`]: l.hover, [`${k}--child`]: o.isDrilldown, [`elevation-${e}`]: parseInt(e) > 0, "pb-2": !0 };
  }), u = computed(() => {
    let e = {};
    l.colors && (e = W(l, y, "default"));
    const p = { borderBottom: "none" };
    return e.border && (p.borderBottom = `1px solid ${e.border}`), p;
  });
  function C(e) {
    e.isExpanded(e.item) && r("update:drilldown", { ...e, items: l.items }), r("update:expanded", e);
  }
  function c(e) {
    return l.itemsPerPage = e, !0;
  }
  function $() {
  }
  function L() {
  }
  function F(e) {
    l.sortBy = e, r("update:sortBy", e);
  }
  return (e, p) => {
    const x = P("VDrilldownTable", !0), f = P("v-data-table");
    return t(l).server ? E("", !0) : (m(), q(f, oe({ key: 0 }, e.$attrs, { class: t(n), density: t(l).density, "expand-on-click": t(l).expandOnClick, expanded: t(l).expanded, headers: t(l).headers, height: t(l).height, "hide-no-data": t(w), hover: t(l).hover, "item-title": t(l).itemTitle, "item-value": t(l).itemValue, items: t(l).items, "items-per-page": t(l).itemsPerPage, loading: t(l).loading, "multi-sort": t(l).multiSort, "must-sort": t(l).mustSort, "no-data-text": t(l).noDataText, "no-filter": t(l).noFilter, page: t(l).page, "return-object": t(l).returnObject, search: t(h), "show-expand": t(l).showExpand, "show-select": t(l).showSelect, "sort-by": t(l).sortBy, style: t(u), "onUpdate:itemsPerPage": c, "onUpdate:modelValue": $, "onUpdate:options": L, "onUpdate:sortBy": F }), N({ top: D(() => [T(t(xe), { "loaded-drilldown": t(l), "onUpdate:search": p[0] || (p[0] = (s) => h.value = s) }, N({ _: 2 }, [M(e.$slots, (s, g) => ({ name: g, fn: D((S) => [A(e.$slots, g, R(H({ ...S })))]) }))]), 1032, ["loaded-drilldown"])]), headers: D((s) => [T(t(pe), { "loaded-drilldown": t(l), "slot-props": { allRowsSelected: t(i), ...s }, "onClick:selectAll": p[1] || (p[1] = (g) => {
      return S = g, void (i.value = S);
      var S;
    }) }, N({ _: 2 }, [M(e.$slots, (g, S) => ({ name: S, fn: D((_) => [A(e.$slots, S, R(H({ ..._ })))]) }))]), 1032, ["loaded-drilldown", "slot-props"]), t(l).loading ? (m(), b("tr", $e, [V("td", { class: "pa-0", colspan: s.columns.length, style: { "vertical-align": "top" } }, [T(t(X), { "loaded-drilldown": t(l), loading: t(l).loading || !1, "loading-text": e.loadingText }, null, 8, ["loaded-drilldown", "loading", "loading-text"])], 8, Be)])) : E("", !0)]), item: D((s) => [T(t(Fe), { items: t(l).items, "loaded-drilldown": t(l), "slot-props": { allRowsSelected: t(i), level: e.level, ...s }, "onClick:row": p[2] || (p[2] = (g) => {
      r("click:row", g);
    }), "onClick:row:checkbox": p[3] || (p[3] = (g) => {
      r("click:row:checkbox", g);
    }), "onUpdate:expanded": p[4] || (p[4] = (g) => C(g)) }, N({ _: 2 }, [M(e.$slots, (g, S) => ({ name: S, fn: D((_) => [A(e.$slots, S, R(H({ ..._ })))]) }))]), 1032, ["items", "loaded-drilldown", "slot-props"])]), "expanded-row": D(({ columns: s, item: g }) => [V("tr", null, [V("td", { class: "px-0 ma-0", colspan: s.length, style: { "vertical-align": "top" } }, [g.raw[e.itemChildrenKey].loading ? (m(), q(t(X), { key: 0, class: "pa-0 ma-0", "loaded-drilldown": t(l), loading: g.raw[e.itemChildrenKey].loading }, null, 8, ["loaded-drilldown", "loading"])) : E("", !0), T(x, { class: B(g.raw[e.itemChildrenKey].loading ? "d-none" : ""), colors: e.colors, drilldown: t(l), headers: g.raw[e.itemChildrenKey].headers, "is-drilldown": !0, item: g, level: e.level + 1, levels: t(l).levels, loading: g.raw[e.itemChildrenKey].loading, "no-data-text": t(l).noDataText, "parent-ref": t(d), "sort-by": t(l).sortBy, "onUpdate:expanded": p[5] || (p[5] = (S) => C(S)) }, N({ default: D(() => [(m(!0), b(O, null, M(Object.keys(t(v)), (S) => A(e.$slots, S)), 256))]), _: 2 }, [M(e.$slots, (S, _) => ({ name: _, fn: D((K) => [A(e.$slots, _, R(H({ ...K })))]) }))]), 1032, ["class", "colors", "drilldown", "headers", "item", "level", "levels", "loading", "no-data-text", "parent-ref", "sort-by"])], 8, Ce)])]), tfoot: D(() => [T(t(be), { "loaded-drilldown": t(l) }, null, 8, ["loaded-drilldown"])]), "footer.prepend": D(() => [e.$slots["footer.prepend"] ? A(e.$slots, "footer.prepend", { key: 0 }) : E("", !0)]), _: 2 }, [e.$slots.body ? { name: "body", fn: D((s) => [A(e.$slots, "body", { props: s })]), key: "0" } : void 0, e.$slots.tbody ? { name: "tbody", fn: D((s) => [A(e.$slots, "tbody", { props: s })]), key: "1" } : void 0, e.$slots["no-data"] ? { name: "no-data", fn: D(() => [A(e.$slots, "no-data")]), key: "2" } : void 0, e.$slots.bottom ? { name: "bottom", fn: D(() => [T(t(de), { "loaded-drilldown": t(l) }, N({ _: 2 }, [M(e.$slots, (s, g) => ({ name: g, fn: D((S) => [A(e.$slots, g, R(H({ ...S })))]) }))]), 1032, ["loaded-drilldown"])]), key: "3" } : void 0]), 1040, ["class", "density", "expand-on-click", "expanded", "headers", "height", "hide-no-data", "hover", "item-title", "item-value", "items", "items-per-page", "loading", "multi-sort", "must-sort", "no-data-text", "no-filter", "page", "return-object", "search", "show-expand", "show-select", "sort-by", "style"]));
  };
} });
ee.install = (a) => {
  a.component("VDrilldownTable", ee);
};
export {
  ee as default
};
(function(){"use strict";try{if(typeof document<"u"){var l=document.createElement("style");l.appendChild(document.createTextNode(".v-drilldown-table--table-loader[data-v-54ff3e55]{background:rgb(var(--v-theme-surface))}.v-drilldown-table--header-select-all-checkbox[data-v-3f4b2637]{opacity:var(--v-medium-emphasis-opacity)}.v-drilldown-table--header-row-th-sortable[data-v-3f4b2637]{cursor:pointer}.v-drilldown-table--header-row-th-sortable-sort-icon[data-v-3f4b2637]{display:inline-flex;opacity:0;transform:rotate(0);transition:all .25s ease-in-out}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-3f4b2637],.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-3f4b2637]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-3f4b2637]{transform:rotate(0)}.v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-3f4b2637]{transform:rotate(180deg)}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon[data-v-3f4b2637]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));opacity:1}.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-asc[data-v-3f4b2637],.v-drilldown-table--header-row-th-sortable:hover .v-drilldown-table--header-row-th-sortable-sort-icon-desc[data-v-3f4b2637],.v-drilldown-table--header-row-th-sortable-default-color:hover div[data-v-3f4b2637]{color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-drilldown-table--header-row-th-sortable-default-color div[data-v-3f4b2637]{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));transition:all .25s ease-in-out}.v-drilldown-table--expand-icon[data-v-231207fc]{cursor:pointer}.v-drilldown-table--footer-row td{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-20 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-19 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-18 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-17 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-16 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-15 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-14 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-13 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-12 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-11 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-10 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-9 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-8 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-7 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-6 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-5 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-4 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-3 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-2 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-1 .v-table__wrapper table tbody tr:hover td,.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr .v-drilldown-table--level-0 .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}.v-drilldown-table--expand-icon{transform:rotate(0);transition:all .3s ease-in-out}.v-drilldown-table--expand-icon.rotate-180{transform:rotate(180deg)}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr td{background:rgb(var(--v-theme-surface))}.v-drilldown-table--hover tr:hover .v-drilldown-table .v-table__wrapper table tbody tr:hover td{background:rgba(var(--v-border-color),var(--v-hover-opacity))}")),document.head.appendChild(l)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
