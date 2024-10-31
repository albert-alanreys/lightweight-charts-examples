/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.1
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!(function () {
  "use strict";
  const t = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      wickVisible: !0,
      borderVisible: !0,
      borderColor: "#378658",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickColor: "#737375",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    },
    i = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      openVisible: !0,
      thinBars: !0,
    },
    n = {
      color: "#2196f3",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      lineVisible: !0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
      pointMarkersVisible: !1,
    },
    s = {
      topColor: "rgba( 46, 220, 135, 0.4)",
      bottomColor: "rgba( 40, 221, 100, 0)",
      invertFilledArea: !1,
      lineColor: "#33D778",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      lineVisible: !0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
      pointMarkersVisible: !1,
    },
    e = {
      baseValue: { type: "price", price: 0 },
      topFillColor1: "rgba(38, 166, 154, 0.28)",
      topFillColor2: "rgba(38, 166, 154, 0.05)",
      topLineColor: "rgba(38, 166, 154, 1)",
      bottomFillColor1: "rgba(239, 83, 80, 0.05)",
      bottomFillColor2: "rgba(239, 83, 80, 0.28)",
      bottomLineColor: "rgba(239, 83, 80, 1)",
      lineWidth: 3,
      lineStyle: 0,
      lineType: 0,
      lineVisible: !0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
      pointMarkersVisible: !1,
    },
    r = { color: "#26a69a", base: 0 },
    h = { color: "#2196f3" },
    l = {
      title: "",
      visible: !0,
      lastValueVisible: !0,
      priceLineVisible: !0,
      priceLineSource: 0,
      priceLineWidth: 1,
      priceLineColor: "",
      priceLineStyle: 2,
      baseLineVisible: !0,
      baseLineWidth: 1,
      baseLineColor: "#B2B5BE",
      baseLineStyle: 0,
      priceFormat: { type: "price", precision: 2, minMove: 0.01 },
    };
  var a, o;
  function _(t, i) {
    const n = {
      0: [],
      1: [t.lineWidth, t.lineWidth],
      2: [2 * t.lineWidth, 2 * t.lineWidth],
      3: [6 * t.lineWidth, 6 * t.lineWidth],
      4: [t.lineWidth, 4 * t.lineWidth],
    }[i];
    t.setLineDash(n);
  }
  function u(t, i, n, s) {
    t.beginPath();
    const e = t.lineWidth % 2 ? 0.5 : 0;
    t.moveTo(n, i + e), t.lineTo(s, i + e), t.stroke();
  }
  function c(t, i) {
    if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
  }
  function d(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
  }
  function f(t) {
    if (null === t) throw new Error("Value is null");
    return t;
  }
  function v(t) {
    return f(d(t));
  }
  !(function (t) {
    (t[(t.Simple = 0)] = "Simple"),
      (t[(t.WithSteps = 1)] = "WithSteps"),
      (t[(t.Curved = 2)] = "Curved");
  })(a || (a = {})),
    (function (t) {
      (t[(t.Solid = 0)] = "Solid"),
        (t[(t.Dotted = 1)] = "Dotted"),
        (t[(t.Dashed = 2)] = "Dashed"),
        (t[(t.LargeDashed = 3)] = "LargeDashed"),
        (t[(t.SparseDotted = 4)] = "SparseDotted");
    })(o || (o = {}));
  const p = {
    khaki: "#f0e68c",
    azure: "#f0ffff",
    aliceblue: "#f0f8ff",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    gray: "#808080",
    green: "#008000",
    honeydew: "#f0fff0",
    floralwhite: "#fffaf0",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lemonchiffon: "#fffacd",
    hotpink: "#ff69b4",
    lightyellow: "#ffffe0",
    greenyellow: "#adff2f",
    lightgoldenrodyellow: "#fafad2",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    lightcyan: "#e0ffff",
    magenta: "#f0f",
    maroon: "#800000",
    olive: "#808000",
    orange: "#ffa500",
    oldlace: "#fdf5e6",
    mediumblue: "#0000cd",
    transparent: "#0000",
    lime: "#0f0",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    midnightblue: "#191970",
    orchid: "#da70d6",
    mediumorchid: "#ba55d3",
    mediumturquoise: "#48d1cc",
    orangered: "#ff4500",
    royalblue: "#4169e1",
    powderblue: "#b0e0e6",
    red: "#f00",
    coral: "#ff7f50",
    turquoise: "#40e0d0",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    wheat: "#f5deb3",
    teal: "#008080",
    steelblue: "#4682b4",
    bisque: "#ffe4c4",
    aquamarine: "#7fffd4",
    aqua: "#0ff",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    springgreen: "#00ff7f",
    antiquewhite: "#faebd7",
    burlywood: "#deb887",
    brown: "#a52a2a",
    beige: "#f5f5dc",
    chocolate: "#d2691e",
    chartreuse: "#7fff00",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cadetblue: "#5f9ea0",
    tomato: "#ff6347",
    fuchsia: "#f0f",
    blue: "#00f",
    salmon: "#fa8072",
    blanchedalmond: "#ffebcd",
    slateblue: "#6a5acd",
    slategray: "#708090",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    blueviolet: "#8a2be2",
    black: "#000",
    darkmagenta: "#8b008b",
    darkslateblue: "#483d8b",
    darkkhaki: "#bdb76b",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkgreen: "#006400",
    darkred: "#8b0000",
    dodgerblue: "#1e90ff",
    darkslategray: "#2f4f4f",
    dimgray: "#696969",
    deepskyblue: "#00bfff",
    firebrick: "#b22222",
    forestgreen: "#228b22",
    indigo: "#4b0082",
    ivory: "#fffff0",
    lavenderblush: "#fff0f5",
    feldspar: "#d19275",
    indianred: "#cd5c5c",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslateblue: "#8470ff",
    snow: "#fffafa",
    lightseagreen: "#20b2aa",
    lightsalmon: "#ffa07a",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    mediumpurple: "#9370d8",
    mediumaquamarine: "#66cdaa",
    skyblue: "#87ceeb",
    lavender: "#e6e6fa",
    lightsteelblue: "#b0c4de",
    mediumvioletred: "#c71585",
    mintcream: "#f5fffa",
    navajowhite: "#ffdead",
    navy: "#000080",
    olivedrab: "#6b8e23",
    palevioletred: "#d87093",
    violetred: "#d02090",
    yellow: "#ff0",
    yellowgreen: "#9acd32",
    lawngreen: "#7cfc00",
    pink: "#ffc0cb",
    paleturquoise: "#afeeee",
    palegoldenrod: "#eee8aa",
    darkolivegreen: "#556b2f",
    darkseagreen: "#8fbc8f",
    darkturquoise: "#00ced1",
    peachpuff: "#ffdab9",
    deeppink: "#ff1493",
    violet: "#ee82ee",
    palegreen: "#98fb98",
    mediumseagreen: "#3cb371",
    peru: "#cd853f",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    purple: "#800080",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    papayawhip: "#ffefd5",
    mediumslateblue: "#7b68ee",
    plum: "#dda0dd",
    mediumspringgreen: "#00fa9a",
  };
  function m(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
  }
  function b(t) {
    return t <= 0 || t > 1
      ? Math.min(Math.max(t, 0), 1)
      : Math.round(1e4 * t) / 1e4;
  }
  const w = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
    g = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
    M = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
    x =
      /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;
  function S(t) {
    (t = t.toLowerCase()) in p && (t = p[t]);
    {
      const i = x.exec(t) || M.exec(t);
      if (i)
        return [
          m(parseInt(i[1], 10)),
          m(parseInt(i[2], 10)),
          m(parseInt(i[3], 10)),
          b(i.length < 5 ? 1 : parseFloat(i[4])),
        ];
    }
    {
      const i = g.exec(t);
      if (i)
        return [
          m(parseInt(i[1], 16)),
          m(parseInt(i[2], 16)),
          m(parseInt(i[3], 16)),
          1,
        ];
    }
    {
      const i = w.exec(t);
      if (i)
        return [
          m(17 * parseInt(i[1], 16)),
          m(17 * parseInt(i[2], 16)),
          m(17 * parseInt(i[3], 16)),
          1,
        ];
    }
    throw new Error(`Cannot parse color: ${t}`);
  }
  function k(t) {
    return 0.199 * t[0] + 0.687 * t[1] + 0.114 * t[2];
  }
  function y(t) {
    const i = S(t);
    return {
      t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
      i: k(i) > 160 ? "black" : "white",
    };
  }
  class C {
    constructor() {
      this.h = [];
    }
    l(t, i, n) {
      const s = { o: t, _: i, u: !0 === n };
      this.h.push(s);
    }
    v(t) {
      const i = this.h.findIndex((i) => t === i.o);
      i > -1 && this.h.splice(i, 1);
    }
    p(t) {
      this.h = this.h.filter((i) => i._ !== t);
    }
    m(t, i, n) {
      const s = [...this.h];
      (this.h = this.h.filter((t) => !t.u)), s.forEach((s) => s.o(t, i, n));
    }
    M() {
      return this.h.length > 0;
    }
    S() {
      this.h = [];
    }
  }
  function T(t, ...i) {
    for (const n of i)
      for (const i in n)
        void 0 !== n[i] &&
          ("object" != typeof n[i] || void 0 === t[i] || Array.isArray(n[i])
            ? (t[i] = n[i])
            : T(t[i], n[i]));
    return t;
  }
  function P(t) {
    return "number" == typeof t && isFinite(t);
  }
  function R(t) {
    return "number" == typeof t && t % 1 == 0;
  }
  function D(t) {
    return "string" == typeof t;
  }
  function O(t) {
    return "boolean" == typeof t;
  }
  function B(t) {
    const i = t;
    if (!i || "object" != typeof i) return i;
    let n, s, e;
    for (s in ((n = Array.isArray(i) ? [] : {}), i))
      i.hasOwnProperty(s) &&
        ((e = i[s]), (n[s] = e && "object" == typeof e ? B(e) : e));
    return n;
  }
  function V(t) {
    return null !== t;
  }
  function A(t) {
    return null === t ? void 0 : t;
  }
  const z =
    "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
  function E(t, i, n) {
    return (
      void 0 === i && (i = z), `${(n = void 0 !== n ? `${n} ` : "")}${t}px ${i}`
    );
  }
  class I {
    constructor(t) {
      (this.k = {
        C: 1,
        T: 5,
        P: NaN,
        R: "",
        D: "",
        O: "",
        B: "",
        V: 0,
        A: 0,
        I: 0,
        L: 0,
        N: 0,
      }),
        (this.F = t);
    }
    W() {
      const t = this.k,
        i = this.j(),
        n = this.H();
      return (
        (t.P === i && t.D === n) ||
          ((t.P = i),
          (t.D = n),
          (t.R = E(i, n)),
          (t.L = (2.5 / 12) * i),
          (t.V = t.L),
          (t.A = (i / 12) * t.T),
          (t.I = (i / 12) * t.T),
          (t.N = 0)),
        (t.O = this.$()),
        (t.B = this.U()),
        this.k
      );
    }
    $() {
      return this.F.W().layout.textColor;
    }
    U() {
      return this.F.q();
    }
    j() {
      return this.F.W().layout.fontSize;
    }
    H() {
      return this.F.W().layout.fontFamily;
    }
  }
  class L {
    constructor() {
      this.Y = [];
    }
    Z(t) {
      this.Y = t;
    }
    X(t, i, n) {
      this.Y.forEach((s) => {
        s.X(t, i, n);
      });
    }
  }
  class N {
    X(t, i, n) {
      t.useBitmapCoordinateSpace((t) => this.K(t, i, n));
    }
  }
  class F extends N {
    constructor() {
      super(...arguments), (this.G = null);
    }
    J(t) {
      this.G = t;
    }
    K({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.G || null === this.G.tt) return;
      const s = this.G.tt,
        e = this.G,
        r = (Math.max(1, Math.floor(i)) % 2) / 2,
        h = (h) => {
          t.beginPath();
          for (let l = s.to - 1; l >= s.from; --l) {
            const s = e.it[l],
              a = Math.round(s.nt * i) + r,
              o = s.st * n,
              _ = h * n + r;
            t.moveTo(a, o), t.arc(a, o, _, 0, 2 * Math.PI);
          }
          t.fill();
        };
      e.et > 0 && ((t.fillStyle = e.rt), h(e.ht + e.et)),
        (t.fillStyle = e.lt),
        h(e.ht);
    }
  }
  function W() {
    return {
      it: [{ nt: 0, st: 0, ot: 0, _t: 0 }],
      lt: "",
      rt: "",
      ht: 0,
      et: 0,
      tt: null,
    };
  }
  const j = { from: 0, to: 1 };
  class H {
    constructor(t, i) {
      (this.ut = new L()),
        (this.ct = []),
        (this.dt = []),
        (this.ft = !0),
        (this.F = t),
        (this.vt = i),
        this.ut.Z(this.ct);
    }
    bt(t) {
      const i = this.F.wt();
      i.length !== this.ct.length &&
        ((this.dt = i.map(W)),
        (this.ct = this.dt.map((t) => {
          const i = new F();
          return i.J(t), i;
        })),
        this.ut.Z(this.ct)),
        (this.ft = !0);
    }
    gt() {
      return this.ft && (this.Mt(), (this.ft = !1)), this.ut;
    }
    Mt() {
      const t = 2 === this.vt.W().mode,
        i = this.F.wt(),
        n = this.vt.xt(),
        s = this.F.St();
      i.forEach((i, e) => {
        var r;
        const h = this.dt[e],
          l = i.kt(n);
        if (t || null === l || !i.yt()) return void (h.tt = null);
        const a = f(i.Ct());
        (h.lt = l.Tt),
          (h.ht = l.ht),
          (h.et = l.Pt),
          (h.it[0]._t = l._t),
          (h.it[0].st = i.Dt().Rt(l._t, a.Ot)),
          (h.rt =
            null !== (r = l.Bt) && void 0 !== r
              ? r
              : this.F.Vt(h.it[0].st / i.Dt().At())),
          (h.it[0].ot = n),
          (h.it[0].nt = s.zt(n)),
          (h.tt = j);
      });
    }
  }
  class $ extends N {
    constructor(t) {
      super(), (this.Et = t);
    }
    K({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.Et) return;
      const e = this.Et.It.yt,
        r = this.Et.Lt.yt;
      if (!e && !r) return;
      const h = Math.round(this.Et.nt * n),
        l = Math.round(this.Et.st * s);
      (t.lineCap = "butt"),
        e &&
          h >= 0 &&
          ((t.lineWidth = Math.floor(this.Et.It.et * n)),
          (t.strokeStyle = this.Et.It.O),
          (t.fillStyle = this.Et.It.O),
          _(t, this.Et.It.Nt),
          (function (t, i, n, s) {
            t.beginPath();
            const e = t.lineWidth % 2 ? 0.5 : 0;
            t.moveTo(i + e, n), t.lineTo(i + e, s), t.stroke();
          })(t, h, 0, i.height)),
        r &&
          l >= 0 &&
          ((t.lineWidth = Math.floor(this.Et.Lt.et * s)),
          (t.strokeStyle = this.Et.Lt.O),
          (t.fillStyle = this.Et.Lt.O),
          _(t, this.Et.Lt.Nt),
          u(t, l, 0, i.width));
    }
  }
  class U {
    constructor(t) {
      (this.ft = !0),
        (this.Ft = {
          It: { et: 1, Nt: 0, O: "", yt: !1 },
          Lt: { et: 1, Nt: 0, O: "", yt: !1 },
          nt: 0,
          st: 0,
        }),
        (this.Wt = new $(this.Ft)),
        (this.jt = t);
    }
    bt() {
      this.ft = !0;
    }
    gt() {
      return this.ft && (this.Mt(), (this.ft = !1)), this.Wt;
    }
    Mt() {
      const t = this.jt.yt(),
        i = f(this.jt.Ht()),
        n = i.$t().W().crosshair,
        s = this.Ft;
      if (2 === n.mode) return (s.Lt.yt = !1), void (s.It.yt = !1);
      (s.Lt.yt = t && this.jt.Ut(i)),
        (s.It.yt = t && this.jt.qt()),
        (s.Lt.et = n.horzLine.width),
        (s.Lt.Nt = n.horzLine.style),
        (s.Lt.O = n.horzLine.color),
        (s.It.et = n.vertLine.width),
        (s.It.Nt = n.vertLine.style),
        (s.It.O = n.vertLine.color),
        (s.nt = this.jt.Yt()),
        (s.st = this.jt.Zt());
    }
  }
  function q(t, i, n, s, e, r) {
    t.fillRect(i + r, n, s - 2 * r, r),
      t.fillRect(i + r, n + e - r, s - 2 * r, r),
      t.fillRect(i, n, r, e),
      t.fillRect(i + s - r, n, r, e);
  }
  function Y(t, i, n, s, e, r) {
    t.save(),
      (t.globalCompositeOperation = "copy"),
      (t.fillStyle = r),
      t.fillRect(i, n, s, e),
      t.restore();
  }
  function Z(t, i, n, s, e, r) {
    t.beginPath(),
      t.roundRect
        ? t.roundRect(i, n, s, e, r)
        : (t.lineTo(i + s - r[1], n),
          0 !== r[1] && t.arcTo(i + s, n, i + s, n + r[1], r[1]),
          t.lineTo(i + s, n + e - r[2]),
          0 !== r[2] && t.arcTo(i + s, n + e, i + s - r[2], n + e, r[2]),
          t.lineTo(i + r[3], n + e),
          0 !== r[3] && t.arcTo(i, n + e, i, n + e - r[3], r[3]),
          t.lineTo(i, n + r[0]),
          0 !== r[0] && t.arcTo(i, n, i + r[0], n, r[0]));
  }
  function X(t, i, n, s, e, r, h = 0, l = [0, 0, 0, 0], a = "") {
    if ((t.save(), !h || !a || a === r))
      return Z(t, i, n, s, e, l), (t.fillStyle = r), t.fill(), void t.restore();
    const o = h / 2;
    var _;
    Z(
      t,
      i + o,
      n + o,
      s - h,
      e - h,
      ((_ = -o), l.map((t) => (0 === t ? t : t + _)))
    ),
      "transparent" !== r && ((t.fillStyle = r), t.fill()),
      "transparent" !== a &&
        ((t.lineWidth = h), (t.strokeStyle = a), t.closePath(), t.stroke()),
      t.restore();
  }
  function K(t, i, n, s, e, r, h) {
    t.save(), (t.globalCompositeOperation = "copy");
    const l = t.createLinearGradient(0, 0, 0, e);
    l.addColorStop(0, r),
      l.addColorStop(1, h),
      (t.fillStyle = l),
      t.fillRect(i, n, s, e),
      t.restore();
  }
  class G {
    constructor(t, i) {
      this.J(t, i);
    }
    J(t, i) {
      (this.Et = t), (this.Xt = i);
    }
    At(t, i) {
      return this.Et.yt ? t.P + t.L + t.V : 0;
    }
    X(t, i, n, s) {
      if (!this.Et.yt || 0 === this.Et.Kt.length) return;
      const e = this.Et.O,
        r = this.Xt.t,
        h = t.useBitmapCoordinateSpace((t) => {
          const h = t.context;
          h.font = i.R;
          const l = this.Gt(t, i, n, s),
            a = l.Jt;
          return (
            l.Qt
              ? X(h, a.ti, a.ii, a.ni, a.si, r, a.ei, [a.ht, 0, 0, a.ht], r)
              : X(h, a.ri, a.ii, a.ni, a.si, r, a.ei, [0, a.ht, a.ht, 0], r),
            this.Et.hi &&
              ((h.fillStyle = e), h.fillRect(a.ri, a.li, a.ai - a.ri, a.oi)),
            this.Et._i &&
              ((h.fillStyle = i.B),
              h.fillRect(l.Qt ? a.ui - a.ei : 0, a.ii, a.ei, a.ci - a.ii)),
            l
          );
        });
      t.useMediaCoordinateSpace(({ context: t }) => {
        const n = h.di;
        (t.font = i.R),
          (t.textAlign = h.Qt ? "right" : "left"),
          (t.textBaseline = "middle"),
          (t.fillStyle = e),
          t.fillText(this.Et.Kt, n.fi, (n.ii + n.ci) / 2 + n.pi);
      });
    }
    Gt(t, i, n, s) {
      var e;
      const {
          context: r,
          bitmapSize: h,
          mediaSize: l,
          horizontalPixelRatio: a,
          verticalPixelRatio: o,
        } = t,
        _ = this.Et.hi || !this.Et.mi ? i.T : 0,
        u = this.Et.bi ? i.C : 0,
        c = i.L + this.Xt.wi,
        d = i.V + this.Xt.gi,
        f = i.A,
        v = i.I,
        p = this.Et.Kt,
        m = i.P,
        b = n.Mi(r, p),
        w = Math.ceil(n.xi(r, p)),
        g = m + c + d,
        M = i.C + f + v + w + _,
        x = Math.max(1, Math.floor(o));
      let S = Math.round(g * o);
      S % 2 != x % 2 && (S += 1);
      const k = u > 0 ? Math.max(1, Math.floor(u * a)) : 0,
        y = Math.round(M * a),
        C = Math.round(_ * a),
        T = null !== (e = this.Xt.Si) && void 0 !== e ? e : this.Xt.ki,
        P = Math.round(T * o) - Math.floor(0.5 * o),
        R = Math.floor(P + x / 2 - S / 2),
        D = R + S,
        O = "right" === s,
        B = O ? l.width - u : u,
        V = O ? h.width - k : k;
      let A, z, E;
      return (
        O
          ? ((A = V - y), (z = V - C), (E = B - _ - f - u))
          : ((A = V + y), (z = V + C), (E = B + _ + f)),
        {
          Qt: O,
          Jt: {
            ii: R,
            li: P,
            ci: D,
            ni: y,
            si: S,
            ht: 2 * a,
            ei: k,
            ti: A,
            ri: V,
            ai: z,
            oi: x,
            ui: h.width,
          },
          di: { ii: R / o, ci: D / o, fi: E, pi: b },
        }
      );
    }
  }
  class J {
    constructor(t) {
      (this.yi = { ki: 0, t: "#000", gi: 0, wi: 0 }),
        (this.Ci = {
          Kt: "",
          yt: !1,
          hi: !0,
          mi: !1,
          Bt: "",
          O: "#FFF",
          _i: !1,
          bi: !1,
        }),
        (this.Ti = {
          Kt: "",
          yt: !1,
          hi: !1,
          mi: !0,
          Bt: "",
          O: "#FFF",
          _i: !0,
          bi: !0,
        }),
        (this.ft = !0),
        (this.Pi = new (t || G)(this.Ci, this.yi)),
        (this.Ri = new (t || G)(this.Ti, this.yi));
    }
    Kt() {
      return this.Di(), this.Ci.Kt;
    }
    ki() {
      return this.Di(), this.yi.ki;
    }
    bt() {
      this.ft = !0;
    }
    At(t, i = !1) {
      return Math.max(this.Pi.At(t, i), this.Ri.At(t, i));
    }
    Oi() {
      return this.yi.Si || 0;
    }
    Bi(t) {
      this.yi.Si = t;
    }
    Vi() {
      return this.Di(), this.Ci.yt || this.Ti.yt;
    }
    Ai() {
      return this.Di(), this.Ci.yt;
    }
    gt(t) {
      return (
        this.Di(),
        (this.Ci.hi = this.Ci.hi && t.W().ticksVisible),
        (this.Ti.hi = this.Ti.hi && t.W().ticksVisible),
        this.Pi.J(this.Ci, this.yi),
        this.Ri.J(this.Ti, this.yi),
        this.Pi
      );
    }
    zi() {
      return (
        this.Di(),
        this.Pi.J(this.Ci, this.yi),
        this.Ri.J(this.Ti, this.yi),
        this.Ri
      );
    }
    Di() {
      this.ft &&
        ((this.Ci.hi = !0),
        (this.Ti.hi = !1),
        this.Ei(this.Ci, this.Ti, this.yi));
    }
  }
  class Q extends J {
    constructor(t, i, n) {
      super(), (this.jt = t), (this.Ii = i), (this.Li = n);
    }
    Ei(t, i, n) {
      if (((t.yt = !1), 2 === this.jt.W().mode)) return;
      const s = this.jt.W().horzLine;
      if (!s.labelVisible) return;
      const e = this.Ii.Ct();
      if (!this.jt.yt() || this.Ii.Ni() || null === e) return;
      const r = y(s.labelBackgroundColor);
      (n.t = r.t), (t.O = r.i);
      const h = (2 / 12) * this.Ii.P();
      (n.wi = h), (n.gi = h);
      const l = this.Li(this.Ii);
      (n.ki = l.ki), (t.Kt = this.Ii.Fi(l._t, e)), (t.yt = !0);
    }
  }
  const tt = /[1-9]/g;
  class it {
    constructor() {
      this.Et = null;
    }
    J(t) {
      this.Et = t;
    }
    X(t, i) {
      if (null === this.Et || !1 === this.Et.yt || 0 === this.Et.Kt.length)
        return;
      const n = t.useMediaCoordinateSpace(
        ({ context: t }) => (
          (t.font = i.R), Math.round(i.Wi.xi(t, f(this.Et).Kt, tt))
        )
      );
      if (n <= 0) return;
      const s = i.ji,
        e = n + 2 * s,
        r = e / 2,
        h = this.Et.Hi;
      let l = this.Et.ki,
        a = Math.floor(l - r) + 0.5;
      a < 0
        ? ((l += Math.abs(0 - a)), (a = Math.floor(l - r) + 0.5))
        : a + e > h &&
          ((l -= Math.abs(h - (a + e))), (a = Math.floor(l - r) + 0.5));
      const o = a + e,
        _ = Math.ceil(0 + i.C + i.T + i.L + i.P + i.V);
      t.useBitmapCoordinateSpace(
        ({ context: t, horizontalPixelRatio: n, verticalPixelRatio: s }) => {
          const e = f(this.Et);
          t.fillStyle = e.t;
          const r = Math.round(a * n),
            h = Math.round(0 * s),
            l = Math.round(o * n),
            u = Math.round(_ * s),
            c = Math.round(2 * n);
          if (
            (t.beginPath(),
            t.moveTo(r, h),
            t.lineTo(r, u - c),
            t.arcTo(r, u, r + c, u, c),
            t.lineTo(l - c, u),
            t.arcTo(l, u, l, u - c, c),
            t.lineTo(l, h),
            t.fill(),
            e.hi)
          ) {
            const r = Math.round(e.ki * n),
              l = h,
              a = Math.round((l + i.T) * s);
            t.fillStyle = e.O;
            const o = Math.max(1, Math.floor(n)),
              _ = Math.floor(0.5 * n);
            t.fillRect(r - _, l, o, a - l);
          }
        }
      ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          const n = f(this.Et),
            e = 0 + i.C + i.T + i.L + i.P / 2;
          (t.font = i.R),
            (t.textAlign = "left"),
            (t.textBaseline = "middle"),
            (t.fillStyle = n.O);
          const r = i.Wi.Mi(t, "Apr0");
          t.translate(a + s, e + r), t.fillText(n.Kt, 0, 0);
        });
    }
  }
  class nt {
    constructor(t, i, n) {
      (this.ft = !0),
        (this.Wt = new it()),
        (this.Ft = {
          yt: !1,
          t: "#4c525e",
          O: "white",
          Kt: "",
          Hi: 0,
          ki: NaN,
          hi: !0,
        }),
        (this.vt = t),
        (this.$i = i),
        (this.Li = n);
    }
    bt() {
      this.ft = !0;
    }
    gt() {
      return (
        this.ft && (this.Mt(), (this.ft = !1)), this.Wt.J(this.Ft), this.Wt
      );
    }
    Mt() {
      const t = this.Ft;
      if (((t.yt = !1), 2 === this.vt.W().mode)) return;
      const i = this.vt.W().vertLine;
      if (!i.labelVisible) return;
      const n = this.$i.St();
      if (n.Ni()) return;
      t.Hi = n.Hi();
      const s = this.Li();
      if (null === s) return;
      t.ki = s.ki;
      const e = n.Ui(this.vt.xt());
      (t.Kt = n.qi(f(e))), (t.yt = !0);
      const r = y(i.labelBackgroundColor);
      (t.t = r.t), (t.O = r.i), (t.hi = n.W().ticksVisible);
    }
  }
  class st {
    constructor() {
      (this.Yi = null), (this.Zi = 0);
    }
    Xi() {
      return this.Zi;
    }
    Ki(t) {
      this.Zi = t;
    }
    Dt() {
      return this.Yi;
    }
    Gi(t) {
      this.Yi = t;
    }
    Ji(t) {
      return [];
    }
    Qi() {
      return [];
    }
    yt() {
      return !0;
    }
  }
  var et;
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"),
      (t[(t.Magnet = 1)] = "Magnet"),
      (t[(t.Hidden = 2)] = "Hidden");
  })(et || (et = {}));
  class rt extends st {
    constructor(t, i) {
      super(),
        (this.tn = null),
        (this.nn = NaN),
        (this.sn = 0),
        (this.en = !0),
        (this.rn = new Map()),
        (this.hn = !1),
        (this.ln = NaN),
        (this.an = NaN),
        (this._n = NaN),
        (this.un = NaN),
        (this.$i = t),
        (this.cn = i),
        (this.dn = new H(t, this));
      this.fn = ((t, i) => (n) => {
        const s = i(),
          e = t();
        if (n === f(this.tn).vn()) return { _t: e, ki: s };
        {
          const t = f(n.Ct());
          return { _t: n.pn(s, t), ki: s };
        }
      })(
        () => this.nn,
        () => this.an
      );
      const n = ((t, i) => () => {
        const n = this.$i.St().mn(t()),
          s = i();
        return n && Number.isFinite(s) ? { ot: n, ki: s } : null;
      })(
        () => this.sn,
        () => this.Yt()
      );
      (this.bn = new nt(this, t, n)), (this.wn = new U(this));
    }
    W() {
      return this.cn;
    }
    gn(t, i) {
      (this._n = t), (this.un = i);
    }
    Mn() {
      (this._n = NaN), (this.un = NaN);
    }
    xn() {
      return this._n;
    }
    Sn() {
      return this.un;
    }
    kn(t, i, n) {
      this.hn || (this.hn = !0), (this.en = !0), this.yn(t, i, n);
    }
    xt() {
      return this.sn;
    }
    Yt() {
      return this.ln;
    }
    Zt() {
      return this.an;
    }
    yt() {
      return this.en;
    }
    Cn() {
      (this.en = !1),
        this.Tn(),
        (this.nn = NaN),
        (this.ln = NaN),
        (this.an = NaN),
        (this.tn = null),
        this.Mn();
    }
    Pn(t) {
      return null !== this.tn ? [this.wn, this.dn] : [];
    }
    Ut(t) {
      return t === this.tn && this.cn.horzLine.visible;
    }
    qt() {
      return this.cn.vertLine.visible;
    }
    Rn(t, i) {
      (this.en && this.tn === t) || this.rn.clear();
      const n = [];
      return this.tn === t && n.push(this.Dn(this.rn, i, this.fn)), n;
    }
    Qi() {
      return this.en ? [this.bn] : [];
    }
    Ht() {
      return this.tn;
    }
    On() {
      this.wn.bt(), this.rn.forEach((t) => t.bt()), this.bn.bt(), this.dn.bt();
    }
    Bn(t) {
      return t && !t.vn().Ni() ? t.vn() : null;
    }
    yn(t, i, n) {
      this.Vn(t, i, n) && this.On();
    }
    Vn(t, i, n) {
      const s = this.ln,
        e = this.an,
        r = this.nn,
        h = this.sn,
        l = this.tn,
        a = this.Bn(n);
      (this.sn = t),
        (this.ln = isNaN(t) ? NaN : this.$i.St().zt(t)),
        (this.tn = n);
      const o = null !== a ? a.Ct() : null;
      return (
        null !== a && null !== o
          ? ((this.nn = i), (this.an = a.Rt(i, o)))
          : ((this.nn = NaN), (this.an = NaN)),
        s !== this.ln ||
          e !== this.an ||
          h !== this.sn ||
          r !== this.nn ||
          l !== this.tn
      );
    }
    Tn() {
      const t = this.$i
          .wt()
          .map((t) => t.zn().An())
          .filter(V),
        i = 0 === t.length ? null : Math.max(...t);
      this.sn = null !== i ? i : NaN;
    }
    Dn(t, i, n) {
      let s = t.get(i);
      return void 0 === s && ((s = new Q(this, i, n)), t.set(i, s)), s;
    }
  }
  function ht(t) {
    return "left" === t || "right" === t;
  }
  class lt {
    constructor(t) {
      (this.En = new Map()), (this.In = []), (this.Ln = t);
    }
    Nn(t, i) {
      const n = (function (t, i) {
        return void 0 === t
          ? i
          : { Fn: Math.max(t.Fn, i.Fn), Wn: t.Wn || i.Wn };
      })(this.En.get(t), i);
      this.En.set(t, n);
    }
    jn() {
      return this.Ln;
    }
    Hn(t) {
      const i = this.En.get(t);
      return void 0 === i
        ? { Fn: this.Ln }
        : { Fn: Math.max(this.Ln, i.Fn), Wn: i.Wn };
    }
    $n() {
      this.Un(), (this.In = [{ qn: 0 }]);
    }
    Yn(t) {
      this.Un(), (this.In = [{ qn: 1, Ot: t }]);
    }
    Zn(t) {
      this.Xn(), this.In.push({ qn: 5, Ot: t });
    }
    Un() {
      this.Xn(), this.In.push({ qn: 6 });
    }
    Kn() {
      this.Un(), (this.In = [{ qn: 4 }]);
    }
    Gn(t) {
      this.Un(), this.In.push({ qn: 2, Ot: t });
    }
    Jn(t) {
      this.Un(), this.In.push({ qn: 3, Ot: t });
    }
    Qn() {
      return this.In;
    }
    ts(t) {
      for (const i of t.In) this.ns(i);
      (this.Ln = Math.max(this.Ln, t.Ln)),
        t.En.forEach((t, i) => {
          this.Nn(i, t);
        });
    }
    static ss() {
      return new lt(2);
    }
    static es() {
      return new lt(3);
    }
    ns(t) {
      switch (t.qn) {
        case 0:
          this.$n();
          break;
        case 1:
          this.Yn(t.Ot);
          break;
        case 2:
          this.Gn(t.Ot);
          break;
        case 3:
          this.Jn(t.Ot);
          break;
        case 4:
          this.Kn();
          break;
        case 5:
          this.Zn(t.Ot);
          break;
        case 6:
          this.Xn();
      }
    }
    Xn() {
      const t = this.In.findIndex((t) => 5 === t.qn);
      -1 !== t && this.In.splice(t, 1);
    }
  }
  const at = ".";
  function ot(t, i) {
    if (!P(t)) return "n/a";
    if (!R(i)) throw new TypeError("invalid length");
    if (i < 0 || i > 16) throw new TypeError("invalid length");
    if (0 === i) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i);
  }
  class _t {
    constructor(t, i) {
      if ((i || (i = 1), (P(t) && R(t)) || (t = 100), t < 0))
        throw new TypeError("invalid base");
      (this.Ii = t), (this.rs = i), this.hs();
    }
    format(t) {
      const i = t < 0 ? "−" : "";
      return (t = Math.abs(t)), i + this.ls(t);
    }
    hs() {
      if (((this.os = 0), this.Ii > 0 && this.rs > 0)) {
        let t = this.Ii;
        for (; t > 1; ) (t /= 10), this.os++;
      }
    }
    ls(t) {
      const i = this.Ii / this.rs;
      let n = Math.floor(t),
        s = "";
      const e = void 0 !== this.os ? this.os : NaN;
      if (i > 1) {
        let r = +(Math.round(t * i) - n * i).toFixed(this.os);
        r >= i && ((r -= i), (n += 1)),
          (s = at + ot(+r.toFixed(this.os) * this.rs, e));
      } else (n = Math.round(n * i) / i), e > 0 && (s = at + ot(0, e));
      return n.toFixed(0) + s;
    }
  }
  class ut extends _t {
    constructor(t = 100) {
      super(t);
    }
    format(t) {
      return `${super.format(t)}%`;
    }
  }
  class ct {
    constructor(t) {
      this._s = t;
    }
    format(t) {
      let i = "";
      return (
        t < 0 && ((i = "-"), (t = -t)),
        t < 995
          ? i + this.us(t)
          : t < 999995
          ? i + this.us(t / 1e3) + "K"
          : t < 999999995
          ? ((t = 1e3 * Math.round(t / 1e3)), i + this.us(t / 1e6) + "M")
          : ((t = 1e6 * Math.round(t / 1e6)), i + this.us(t / 1e9) + "B")
      );
    }
    us(t) {
      let i;
      const n = Math.pow(10, this._s);
      return (
        (i =
          (t = Math.round(t * n) / n) >= 1e-15 && t < 1
            ? t.toFixed(this._s).replace(/\.?0+$/, "")
            : String(t)),
        i.replace(/(\.[1-9]*)0+$/, (t, i) => i)
      );
    }
  }
  function dt(t, i, n, s, e, r, h) {
    if (0 === i.length || s.from >= i.length || s.to <= 0) return;
    const { context: l, horizontalPixelRatio: a, verticalPixelRatio: o } = t,
      _ = i[s.from];
    let u = r(t, _),
      c = _;
    if (s.to - s.from < 2) {
      const i = e / 2;
      l.beginPath();
      const n = { nt: _.nt - i, st: _.st },
        s = { nt: _.nt + i, st: _.st };
      l.moveTo(n.nt * a, n.st * o), l.lineTo(s.nt * a, s.st * o), h(t, u, n, s);
    } else {
      const e = (i, n) => {
        h(t, u, c, n), l.beginPath(), (u = i), (c = n);
      };
      let d = c;
      l.beginPath(), l.moveTo(_.nt * a, _.st * o);
      for (let h = s.from + 1; h < s.to; ++h) {
        d = i[h];
        const s = r(t, d);
        switch (n) {
          case 0:
            l.lineTo(d.nt * a, d.st * o);
            break;
          case 1:
            l.lineTo(d.nt * a, i[h - 1].st * o),
              s !== u && (e(s, d), l.lineTo(d.nt * a, i[h - 1].st * o)),
              l.lineTo(d.nt * a, d.st * o);
            break;
          case 2: {
            const [t, n] = mt(i, h - 1, h);
            l.bezierCurveTo(
              t.nt * a,
              t.st * o,
              n.nt * a,
              n.st * o,
              d.nt * a,
              d.st * o
            );
            break;
          }
        }
        1 !== n && s !== u && (e(s, d), l.moveTo(d.nt * a, d.st * o));
      }
      (c !== d || (c === d && 1 === n)) && h(t, u, c, d);
    }
  }
  const ft = 6;
  function vt(t, i) {
    return { nt: t.nt - i.nt, st: t.st - i.st };
  }
  function pt(t, i) {
    return { nt: t.nt / i, st: t.st / i };
  }
  function mt(t, i, n) {
    const s = Math.max(0, i - 1),
      e = Math.min(t.length - 1, n + 1);
    var r, h;
    return [
      ((r = t[i]),
      (h = pt(vt(t[n], t[s]), ft)),
      { nt: r.nt + h.nt, st: r.st + h.st }),
      vt(t[n], pt(vt(t[e], t[i]), ft)),
    ];
  }
  function bt(t, i, n, s, e) {
    const { context: r, horizontalPixelRatio: h, verticalPixelRatio: l } = i;
    r.lineTo(e.nt * h, t * l),
      r.lineTo(s.nt * h, t * l),
      r.closePath(),
      (r.fillStyle = n),
      r.fill();
  }
  class wt extends N {
    constructor() {
      super(...arguments), (this.G = null);
    }
    J(t) {
      this.G = t;
    }
    K(t) {
      var i;
      if (null === this.G) return;
      const { it: n, tt: s, cs: e, et: r, Nt: h, ds: l } = this.G,
        a =
          null !== (i = this.G.fs) && void 0 !== i
            ? i
            : this.G.vs
            ? 0
            : t.mediaSize.height;
      if (null === s) return;
      const o = t.context;
      (o.lineCap = "butt"),
        (o.lineJoin = "round"),
        (o.lineWidth = r),
        _(o, h),
        (o.lineWidth = 1),
        dt(t, n, l, s, e, this.ps.bind(this), bt.bind(null, a));
    }
  }
  function gt(t, i, n) {
    return Math.min(Math.max(t, i), n);
  }
  function Mt(t, i, n) {
    return i - t <= n;
  }
  function xt(t) {
    const i = Math.ceil(t);
    return i % 2 == 0 ? i - 1 : i;
  }
  class St {
    bs(t, i) {
      const n = this.ws,
        { gs: s, Ms: e, xs: r, Ss: h, ks: l, fs: a } = i;
      if (
        void 0 === this.ys ||
        void 0 === n ||
        n.gs !== s ||
        n.Ms !== e ||
        n.xs !== r ||
        n.Ss !== h ||
        n.fs !== a ||
        n.ks !== l
      ) {
        const n = t.context.createLinearGradient(0, 0, 0, l);
        if ((n.addColorStop(0, s), null != a)) {
          const i = gt((a * t.verticalPixelRatio) / l, 0, 1);
          n.addColorStop(i, e), n.addColorStop(i, r);
        }
        n.addColorStop(1, h), (this.ys = n), (this.ws = i);
      }
      return this.ys;
    }
  }
  class kt extends wt {
    constructor() {
      super(...arguments), (this.Cs = new St());
    }
    ps(t, i) {
      return this.Cs.bs(t, {
        gs: i.Ts,
        Ms: "",
        xs: "",
        Ss: i.Ps,
        ks: t.bitmapSize.height,
      });
    }
  }
  function yt(t, i) {
    const n = t.context;
    (n.strokeStyle = i), n.stroke();
  }
  class Ct extends N {
    constructor() {
      super(...arguments), (this.G = null);
    }
    J(t) {
      this.G = t;
    }
    K(t) {
      if (null === this.G) return;
      const { it: i, tt: n, cs: s, ds: e, et: r, Nt: h, Rs: l } = this.G;
      if (null === n) return;
      const a = t.context;
      (a.lineCap = "butt"),
        (a.lineWidth = r * t.verticalPixelRatio),
        _(a, h),
        (a.lineJoin = "round");
      const o = this.Ds.bind(this);
      void 0 !== e && dt(t, i, e, n, s, o, yt),
        l &&
          (function (t, i, n, s, e) {
            const {
              horizontalPixelRatio: r,
              verticalPixelRatio: h,
              context: l,
            } = t;
            let a = null;
            const o = (Math.max(1, Math.floor(r)) % 2) / 2,
              _ = n * h + o;
            for (let n = s.to - 1; n >= s.from; --n) {
              const s = i[n];
              if (s) {
                const i = e(t, s);
                i !== a &&
                  (l.beginPath(),
                  null !== a && l.fill(),
                  (l.fillStyle = i),
                  (a = i));
                const n = Math.round(s.nt * r) + o,
                  u = s.st * h;
                l.moveTo(n, u), l.arc(n, u, _, 0, 2 * Math.PI);
              }
            }
            l.fill();
          })(t, i, l, n, o);
    }
  }
  class Tt extends Ct {
    Ds(t, i) {
      return i.lt;
    }
  }
  function Pt(t, i, n, s, e = 0, r = i.length) {
    let h = r - e;
    for (; 0 < h; ) {
      const r = h >> 1,
        l = e + r;
      s(i[l], n) === t ? ((e = l + 1), (h -= r + 1)) : (h = r);
    }
    return e;
  }
  const Rt = Pt.bind(null, !0),
    Dt = Pt.bind(null, !1);
  function Ot(t, i) {
    return t.ot < i;
  }
  function Bt(t, i) {
    return i < t.ot;
  }
  function Vt(t, i, n) {
    const s = i.Os(),
      e = i.ui(),
      r = Rt(t, s, Ot),
      h = Dt(t, e, Bt);
    if (!n) return { from: r, to: h };
    let l = r,
      a = h;
    return (
      r > 0 && r < t.length && t[r].ot >= s && (l = r - 1),
      h > 0 && h < t.length && t[h - 1].ot <= e && (a = h + 1),
      { from: l, to: a }
    );
  }
  class At {
    constructor(t, i, n) {
      (this.Bs = !0),
        (this.Vs = !0),
        (this.As = !0),
        (this.zs = []),
        (this.Es = null),
        (this.Is = t),
        (this.Ls = i),
        (this.Ns = n);
    }
    bt(t) {
      (this.Bs = !0),
        "data" === t && (this.Vs = !0),
        "options" === t && (this.As = !0);
    }
    gt() {
      return this.Is.yt()
        ? (this.Fs(), null === this.Es ? null : this.Ws)
        : null;
    }
    js() {
      this.zs = this.zs.map((t) =>
        Object.assign(Object.assign({}, t), this.Is.$s().Hs(t.ot))
      );
    }
    Us() {
      this.Es = null;
    }
    Fs() {
      this.Vs && (this.qs(), (this.Vs = !1)),
        this.As && (this.js(), (this.As = !1)),
        this.Bs && (this.Ys(), (this.Bs = !1));
    }
    Ys() {
      const t = this.Is.Dt(),
        i = this.Ls.St();
      if ((this.Us(), i.Ni() || t.Ni())) return;
      const n = i.Zs();
      if (null === n) return;
      if (0 === this.Is.zn().Xs()) return;
      const s = this.Is.Ct();
      null !== s &&
        ((this.Es = Vt(this.zs, n, this.Ns)), this.Ks(t, i, s.Ot), this.Gs());
    }
  }
  class zt extends At {
    constructor(t, i) {
      super(t, i, !0);
    }
    Ks(t, i, n) {
      i.Js(this.zs, A(this.Es)), t.Qs(this.zs, n, A(this.Es));
    }
    te(t, i) {
      return { ot: t, _t: i, nt: NaN, st: NaN };
    }
    qs() {
      const t = this.Is.$s();
      this.zs = this.Is.zn()
        .ie()
        .map((i) => {
          const n = i.Ot[3];
          return this.ne(i.se, n, t);
        });
    }
  }
  class Et extends zt {
    constructor(t, i) {
      super(t, i),
        (this.Ws = new L()),
        (this.ee = new kt()),
        (this.re = new Tt()),
        this.Ws.Z([this.ee, this.re]);
    }
    ne(t, i, n) {
      return Object.assign(Object.assign({}, this.te(t, i)), n.Hs(t));
    }
    Gs() {
      const t = this.Is.W();
      this.ee.J({
        ds: t.lineType,
        it: this.zs,
        Nt: t.lineStyle,
        et: t.lineWidth,
        fs: null,
        vs: t.invertFilledArea,
        tt: this.Es,
        cs: this.Ls.St().he(),
      }),
        this.re.J({
          ds: t.lineVisible ? t.lineType : void 0,
          it: this.zs,
          Nt: t.lineStyle,
          et: t.lineWidth,
          tt: this.Es,
          cs: this.Ls.St().he(),
          Rs: t.pointMarkersVisible
            ? t.pointMarkersRadius || t.lineWidth / 2 + 2
            : void 0,
        });
    }
  }
  class It extends N {
    constructor() {
      super(...arguments), (this.Et = null), (this.le = 0), (this.ae = 0);
    }
    J(t) {
      this.Et = t;
    }
    K({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.Et || 0 === this.Et.zn.length || null === this.Et.tt)
        return;
      if (((this.le = this.oe(i)), this.le >= 2)) {
        Math.max(1, Math.floor(i)) % 2 != this.le % 2 && this.le--;
      }
      this.ae = this.Et._e ? Math.min(this.le, Math.floor(i)) : this.le;
      let s = null;
      const e = this.ae <= this.le && this.Et.he >= Math.floor(1.5 * i);
      for (let r = this.Et.tt.from; r < this.Et.tt.to; ++r) {
        const h = this.Et.zn[r];
        s !== h.ue && ((t.fillStyle = h.ue), (s = h.ue));
        const l = Math.floor(0.5 * this.ae),
          a = Math.round(h.nt * i),
          o = a - l,
          _ = this.ae,
          u = o + _ - 1,
          c = Math.min(h.ce, h.de),
          d = Math.max(h.ce, h.de),
          f = Math.round(c * n) - l,
          v = Math.round(d * n) + l,
          p = Math.max(v - f, this.ae);
        t.fillRect(o, f, _, p);
        const m = Math.ceil(1.5 * this.le);
        if (e) {
          if (this.Et.fe) {
            const i = a - m;
            let s = Math.max(f, Math.round(h.ve * n) - l),
              e = s + _ - 1;
            e > f + p - 1 && ((e = f + p - 1), (s = e - _ + 1)),
              t.fillRect(i, s, o - i, e - s + 1);
          }
          const i = a + m;
          let s = Math.max(f, Math.round(h.pe * n) - l),
            e = s + _ - 1;
          e > f + p - 1 && ((e = f + p - 1), (s = e - _ + 1)),
            t.fillRect(u + 1, s, i - u, e - s + 1);
        }
      }
    }
    oe(t) {
      const i = Math.floor(t);
      return Math.max(
        i,
        Math.floor(
          (function (t, i) {
            return Math.floor(0.3 * t * i);
          })(f(this.Et).he, t)
        )
      );
    }
  }
  class Lt extends At {
    constructor(t, i) {
      super(t, i, !1);
    }
    Ks(t, i, n) {
      i.Js(this.zs, A(this.Es)), t.me(this.zs, n, A(this.Es));
    }
    be(t, i, n) {
      return {
        ot: t,
        we: i.Ot[0],
        ge: i.Ot[1],
        Me: i.Ot[2],
        xe: i.Ot[3],
        nt: NaN,
        ve: NaN,
        ce: NaN,
        de: NaN,
        pe: NaN,
      };
    }
    qs() {
      const t = this.Is.$s();
      this.zs = this.Is.zn()
        .ie()
        .map((i) => this.ne(i.se, i, t));
    }
  }
  class Nt extends Lt {
    constructor() {
      super(...arguments), (this.Ws = new It());
    }
    ne(t, i, n) {
      return Object.assign(Object.assign({}, this.be(t, i, n)), n.Hs(t));
    }
    Gs() {
      const t = this.Is.W();
      this.Ws.J({
        zn: this.zs,
        he: this.Ls.St().he(),
        fe: t.openVisible,
        _e: t.thinBars,
        tt: this.Es,
      });
    }
  }
  class Ft extends wt {
    constructor() {
      super(...arguments), (this.Cs = new St());
    }
    ps(t, i) {
      const n = this.G;
      return this.Cs.bs(t, {
        gs: i.Se,
        Ms: i.ke,
        xs: i.ye,
        Ss: i.Ce,
        ks: t.bitmapSize.height,
        fs: n.fs,
      });
    }
  }
  class Wt extends Ct {
    constructor() {
      super(...arguments), (this.Te = new St());
    }
    Ds(t, i) {
      const n = this.G;
      return this.Te.bs(t, {
        gs: i.Pe,
        Ms: i.Pe,
        xs: i.Re,
        Ss: i.Re,
        ks: t.bitmapSize.height,
        fs: n.fs,
      });
    }
  }
  class jt extends zt {
    constructor(t, i) {
      super(t, i),
        (this.Ws = new L()),
        (this.De = new Ft()),
        (this.Oe = new Wt()),
        this.Ws.Z([this.De, this.Oe]);
    }
    ne(t, i, n) {
      return Object.assign(Object.assign({}, this.te(t, i)), n.Hs(t));
    }
    Gs() {
      const t = this.Is.Ct();
      if (null === t) return;
      const i = this.Is.W(),
        n = this.Is.Dt().Rt(i.baseValue.price, t.Ot),
        s = this.Ls.St().he();
      this.De.J({
        it: this.zs,
        et: i.lineWidth,
        Nt: i.lineStyle,
        ds: i.lineType,
        fs: n,
        vs: !1,
        tt: this.Es,
        cs: s,
      }),
        this.Oe.J({
          it: this.zs,
          et: i.lineWidth,
          Nt: i.lineStyle,
          ds: i.lineVisible ? i.lineType : void 0,
          Rs: i.pointMarkersVisible
            ? i.pointMarkersRadius || i.lineWidth / 2 + 2
            : void 0,
          fs: n,
          tt: this.Es,
          cs: s,
        });
    }
  }
  class Ht extends N {
    constructor() {
      super(...arguments), (this.Et = null), (this.le = 0);
    }
    J(t) {
      this.Et = t;
    }
    K(t) {
      if (null === this.Et || 0 === this.Et.zn.length || null === this.Et.tt)
        return;
      const { horizontalPixelRatio: i } = t;
      if (
        ((this.le = (function (t, i) {
          if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
          const n = 1 - (0.2 * Math.atan(Math.max(4, t) - 4)) / (0.5 * Math.PI),
            s = Math.floor(t * n * i),
            e = Math.floor(t * i),
            r = Math.min(s, e);
          return Math.max(Math.floor(i), r);
        })(this.Et.he, i)),
        this.le >= 2)
      ) {
        Math.floor(i) % 2 != this.le % 2 && this.le--;
      }
      const n = this.Et.zn;
      this.Et.Be && this.Ve(t, n, this.Et.tt),
        this.Et._i && this.Ae(t, n, this.Et.tt);
      const s = this.ze(i);
      (!this.Et._i || this.le > 2 * s) && this.Ee(t, n, this.Et.tt);
    }
    Ve(t, i, n) {
      if (null === this.Et) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "",
        l = Math.min(Math.floor(e), Math.floor(this.Et.he * e));
      l = Math.max(Math.floor(e), Math.min(l, this.le));
      const a = Math.floor(0.5 * l);
      let o = null;
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        n.Ie !== h && ((s.fillStyle = n.Ie), (h = n.Ie));
        const _ = Math.round(Math.min(n.ve, n.pe) * r),
          u = Math.round(Math.max(n.ve, n.pe) * r),
          c = Math.round(n.ce * r),
          d = Math.round(n.de * r);
        let f = Math.round(e * n.nt) - a;
        const v = f + l - 1;
        null !== o && ((f = Math.max(o + 1, f)), (f = Math.min(f, v)));
        const p = v - f + 1;
        s.fillRect(f, c, p, _ - c), s.fillRect(f, u + 1, p, d - u), (o = v);
      }
    }
    ze(t) {
      let i = Math.floor(1 * t);
      this.le <= 2 * i && (i = Math.floor(0.5 * (this.le - 1)));
      const n = Math.max(Math.floor(t), i);
      return this.le <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
    }
    Ae(t, i, n) {
      if (null === this.Et) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "";
      const l = this.ze(e);
      let a = null;
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        n.Le !== h && ((s.fillStyle = n.Le), (h = n.Le));
        let o = Math.round(n.nt * e) - Math.floor(0.5 * this.le);
        const _ = o + this.le - 1,
          u = Math.round(Math.min(n.ve, n.pe) * r),
          c = Math.round(Math.max(n.ve, n.pe) * r);
        if (
          (null !== a && ((o = Math.max(a + 1, o)), (o = Math.min(o, _))),
          this.Et.he * e > 2 * l)
        )
          q(s, o, u, _ - o + 1, c - u + 1, l);
        else {
          const t = _ - o + 1;
          s.fillRect(o, u, t, c - u + 1);
        }
        a = _;
      }
    }
    Ee(t, i, n) {
      if (null === this.Et) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "";
      const l = this.ze(e);
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        let a = Math.round(Math.min(n.ve, n.pe) * r),
          o = Math.round(Math.max(n.ve, n.pe) * r),
          _ = Math.round(n.nt * e) - Math.floor(0.5 * this.le),
          u = _ + this.le - 1;
        if (n.ue !== h) {
          const t = n.ue;
          (s.fillStyle = t), (h = t);
        }
        this.Et._i && ((_ += l), (a += l), (u -= l), (o -= l)),
          a > o || s.fillRect(_, a, u - _ + 1, o - a + 1);
      }
    }
  }
  class $t extends Lt {
    constructor() {
      super(...arguments), (this.Ws = new Ht());
    }
    ne(t, i, n) {
      return Object.assign(Object.assign({}, this.be(t, i, n)), n.Hs(t));
    }
    Gs() {
      const t = this.Is.W();
      this.Ws.J({
        zn: this.zs,
        he: this.Ls.St().he(),
        Be: t.wickVisible,
        _i: t.borderVisible,
        tt: this.Es,
      });
    }
  }
  class Ut {
    constructor(t, i) {
      (this.Ne = t), (this.Ii = i);
    }
    X(t, i, n) {
      this.Ne.draw(t, this.Ii, i, n);
    }
  }
  class qt extends At {
    constructor(t, i, n) {
      super(t, i, !1),
        (this.wn = n),
        (this.Ws = new Ut(this.wn.renderer(), (i) => {
          const n = t.Ct();
          return null === n ? null : t.Dt().Rt(i, n.Ot);
        }));
    }
    Fe(t) {
      return this.wn.priceValueBuilder(t);
    }
    We(t) {
      return this.wn.isWhitespace(t);
    }
    qs() {
      const t = this.Is.$s();
      this.zs = this.Is.zn()
        .ie()
        .map((i) =>
          Object.assign(Object.assign({ ot: i.se, nt: NaN }, t.Hs(i.se)), {
            je: i.He,
          })
        );
    }
    Ks(t, i) {
      i.Js(this.zs, A(this.Es));
    }
    Gs() {
      this.wn.update(
        {
          bars: this.zs.map(Yt),
          barSpacing: this.Ls.St().he(),
          visibleRange: this.Es,
        },
        this.Is.W()
      );
    }
  }
  function Yt(t) {
    return { x: t.nt, time: t.ot, originalData: t.je, barColor: t.ue };
  }
  class Zt extends N {
    constructor() {
      super(...arguments), (this.Et = null), (this.$e = []);
    }
    J(t) {
      (this.Et = t), (this.$e = []);
    }
    K({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.Et || 0 === this.Et.it.length || null === this.Et.tt)
        return;
      this.$e.length || this.Ue(i);
      const s = Math.max(1, Math.floor(n)),
        e = Math.round(this.Et.qe * n) - Math.floor(s / 2),
        r = e + s;
      for (let i = this.Et.tt.from; i < this.Et.tt.to; i++) {
        const h = this.Et.it[i],
          l = this.$e[i - this.Et.tt.from],
          a = Math.round(h.st * n);
        let o, _;
        (t.fillStyle = h.ue),
          a <= e
            ? ((o = a), (_ = r))
            : ((o = e), (_ = a - Math.floor(s / 2) + s)),
          t.fillRect(l.Os, o, l.ui - l.Os + 1, _ - o);
      }
    }
    Ue(t) {
      if (null === this.Et || 0 === this.Et.it.length || null === this.Et.tt)
        return void (this.$e = []);
      const i = Math.ceil(this.Et.he * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
        n = Math.round(this.Et.he * t) - i;
      this.$e = new Array(this.Et.tt.to - this.Et.tt.from);
      for (let i = this.Et.tt.from; i < this.Et.tt.to; i++) {
        const s = this.Et.it[i],
          e = Math.round(s.nt * t);
        let r, h;
        if (n % 2) {
          const t = (n - 1) / 2;
          (r = e - t), (h = e + t);
        } else {
          const t = n / 2;
          (r = e - t), (h = e + t - 1);
        }
        this.$e[i - this.Et.tt.from] = {
          Os: r,
          ui: h,
          Ye: e,
          Ze: s.nt * t,
          ot: s.ot,
        };
      }
      for (let t = this.Et.tt.from + 1; t < this.Et.tt.to; t++) {
        const n = this.$e[t - this.Et.tt.from],
          s = this.$e[t - this.Et.tt.from - 1];
        n.ot === s.ot + 1 &&
          n.Os - s.ui !== i + 1 &&
          (s.Ye > s.Ze ? (s.ui = n.Os - i - 1) : (n.Os = s.ui + i + 1));
      }
      let s = Math.ceil(this.Et.he * t);
      for (let t = this.Et.tt.from; t < this.Et.tt.to; t++) {
        const i = this.$e[t - this.Et.tt.from];
        i.ui < i.Os && (i.ui = i.Os);
        const n = i.ui - i.Os + 1;
        s = Math.min(n, s);
      }
      if (i > 0 && s < 4)
        for (let t = this.Et.tt.from; t < this.Et.tt.to; t++) {
          const i = this.$e[t - this.Et.tt.from];
          i.ui - i.Os + 1 > s && (i.Ye > i.Ze ? (i.ui -= 1) : (i.Os += 1));
        }
    }
  }
  class Xt extends zt {
    constructor() {
      super(...arguments), (this.Ws = new Zt());
    }
    ne(t, i, n) {
      return Object.assign(Object.assign({}, this.te(t, i)), n.Hs(t));
    }
    Gs() {
      const t = {
        it: this.zs,
        he: this.Ls.St().he(),
        tt: this.Es,
        qe: this.Is.Dt().Rt(this.Is.W().base, f(this.Is.Ct()).Ot),
      };
      this.Ws.J(t);
    }
  }
  class Kt extends zt {
    constructor() {
      super(...arguments), (this.Ws = new Tt());
    }
    ne(t, i, n) {
      return Object.assign(Object.assign({}, this.te(t, i)), n.Hs(t));
    }
    Gs() {
      const t = this.Is.W(),
        i = {
          it: this.zs,
          Nt: t.lineStyle,
          ds: t.lineVisible ? t.lineType : void 0,
          et: t.lineWidth,
          Rs: t.pointMarkersVisible
            ? t.pointMarkersRadius || t.lineWidth / 2 + 2
            : void 0,
          tt: this.Es,
          cs: this.Ls.St().he(),
        };
      this.Ws.J(i);
    }
  }
  const Gt = /[2-9]/g;
  class Jt {
    constructor(t = 50) {
      (this.Xe = 0),
        (this.Ke = 1),
        (this.Ge = 1),
        (this.Je = {}),
        (this.Qe = new Map()),
        (this.tr = t);
    }
    ir() {
      (this.Xe = 0),
        this.Qe.clear(),
        (this.Ke = 1),
        (this.Ge = 1),
        (this.Je = {});
    }
    xi(t, i, n) {
      return this.nr(t, i, n).width;
    }
    Mi(t, i, n) {
      const s = this.nr(t, i, n);
      return (
        ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) /
        2
      );
    }
    nr(t, i, n) {
      const s = n || Gt,
        e = String(i).replace(s, "0");
      if (this.Qe.has(e)) return d(this.Qe.get(e)).sr;
      if (this.Xe === this.tr) {
        const t = this.Je[this.Ge];
        delete this.Je[this.Ge], this.Qe.delete(t), this.Ge++, this.Xe--;
      }
      t.save(), (t.textBaseline = "middle");
      const r = t.measureText(e);
      return (
        t.restore(),
        (0 === r.width && i.length) ||
          (this.Qe.set(e, { sr: r, er: this.Ke }),
          (this.Je[this.Ke] = e),
          this.Xe++,
          this.Ke++),
        r
      );
    }
  }
  class Qt {
    constructor(t) {
      (this.rr = null), (this.k = null), (this.hr = "right"), (this.lr = t);
    }
    ar(t, i, n) {
      (this.rr = t), (this.k = i), (this.hr = n);
    }
    X(t) {
      null !== this.k &&
        null !== this.rr &&
        this.rr.X(t, this.k, this.lr, this.hr);
    }
  }
  class ti {
    constructor(t, i, n) {
      (this._r = t),
        (this.lr = new Jt(50)),
        (this.ur = i),
        (this.F = n),
        (this.j = -1),
        (this.Wt = new Qt(this.lr));
    }
    gt() {
      const t = this.F.cr(this.ur);
      if (null === t) return null;
      const i = t.dr(this.ur) ? t.vr() : this.ur.Dt();
      if (null === i) return null;
      const n = t.pr(i);
      if ("overlay" === n) return null;
      const s = this.F.mr();
      return (
        s.P !== this.j && ((this.j = s.P), this.lr.ir()),
        this.Wt.ar(this._r.zi(), s, n),
        this.Wt
      );
    }
  }
  class ii extends N {
    constructor() {
      super(...arguments), (this.Et = null);
    }
    J(t) {
      this.Et = t;
    }
    br(t, i) {
      var n;
      if (!(null === (n = this.Et) || void 0 === n ? void 0 : n.yt))
        return null;
      const { st: s, et: e, wr: r } = this.Et;
      return i >= s - e - 7 && i <= s + e + 7 ? { gr: this.Et, wr: r } : null;
    }
    K({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.Et) return;
      if (!1 === this.Et.yt) return;
      const e = Math.round(this.Et.st * s);
      e < 0 ||
        e > i.height ||
        ((t.lineCap = "butt"),
        (t.strokeStyle = this.Et.O),
        (t.lineWidth = Math.floor(this.Et.et * n)),
        _(t, this.Et.Nt),
        u(t, e, 0, i.width));
    }
  }
  class ni {
    constructor(t) {
      (this.Mr = { st: 0, O: "rgba(0, 0, 0, 0)", et: 1, Nt: 0, yt: !1 }),
        (this.Sr = new ii()),
        (this.ft = !0),
        (this.Is = t),
        (this.Ls = t.$t()),
        this.Sr.J(this.Mr);
    }
    bt() {
      this.ft = !0;
    }
    gt() {
      return this.Is.yt()
        ? (this.ft && (this.kr(), (this.ft = !1)), this.Sr)
        : null;
    }
  }
  class si extends ni {
    constructor(t) {
      super(t);
    }
    kr() {
      this.Mr.yt = !1;
      const t = this.Is.Dt(),
        i = t.yr().yr;
      if (2 !== i && 3 !== i) return;
      const n = this.Is.W();
      if (!n.baseLineVisible || !this.Is.yt()) return;
      const s = this.Is.Ct();
      null !== s &&
        ((this.Mr.yt = !0),
        (this.Mr.st = t.Rt(s.Ot, s.Ot)),
        (this.Mr.O = n.baseLineColor),
        (this.Mr.et = n.baseLineWidth),
        (this.Mr.Nt = n.baseLineStyle));
    }
  }
  class ei extends N {
    constructor() {
      super(...arguments), (this.Et = null);
    }
    J(t) {
      this.Et = t;
    }
    He() {
      return this.Et;
    }
    K({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      const s = this.Et;
      if (null === s) return;
      const e = Math.max(1, Math.floor(i)),
        r = (e % 2) / 2,
        h = Math.round(s.Ze.x * i) + r,
        l = s.Ze.y * n;
      (t.fillStyle = s.Cr), t.beginPath();
      const a = Math.max(2, 1.5 * s.Tr) * i;
      t.arc(h, l, a, 0, 2 * Math.PI, !1),
        t.fill(),
        (t.fillStyle = s.Pr),
        t.beginPath(),
        t.arc(h, l, s.ht * i, 0, 2 * Math.PI, !1),
        t.fill(),
        (t.lineWidth = e),
        (t.strokeStyle = s.Rr),
        t.beginPath(),
        t.arc(h, l, s.ht * i + e / 2, 0, 2 * Math.PI, !1),
        t.stroke();
    }
  }
  const ri = [
    { Dr: 0, Or: 0.25, Br: 4, Vr: 10, Ar: 0.25, zr: 0, Er: 0.4, Ir: 0.8 },
    { Dr: 0.25, Or: 0.525, Br: 10, Vr: 14, Ar: 0, zr: 0, Er: 0.8, Ir: 0 },
    { Dr: 0.525, Or: 1, Br: 14, Vr: 14, Ar: 0, zr: 0, Er: 0, Ir: 0 },
  ];
  function hi(t, i, n, s) {
    return (function (t, i) {
      if ("transparent" === t) return t;
      const n = S(t),
        s = n[3];
      return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${i * s})`;
    })(t, n + (s - n) * i);
  }
  function li(t, i) {
    const n = (t % 2600) / 2600;
    let s;
    for (const t of ri)
      if (n >= t.Dr && n <= t.Or) {
        s = t;
        break;
      }
    c(void 0 !== s, "Last price animation internal logic error");
    const e = (n - s.Dr) / (s.Or - s.Dr);
    return {
      Pr: hi(i, e, s.Ar, s.zr),
      Rr: hi(i, e, s.Er, s.Ir),
      ht: ((r = e), (h = s.Br), (l = s.Vr), h + (l - h) * r),
    };
    var r, h, l;
  }
  class ai {
    constructor(t) {
      (this.Wt = new ei()),
        (this.ft = !0),
        (this.Lr = !0),
        (this.Nr = performance.now()),
        (this.Fr = this.Nr - 1),
        (this.Wr = t);
    }
    jr() {
      (this.Fr = this.Nr - 1), this.bt();
    }
    Hr() {
      if ((this.bt(), 2 === this.Wr.W().lastPriceAnimation)) {
        const t = performance.now(),
          i = this.Fr - t;
        if (i > 0) return void (i < 650 && (this.Fr += 2600));
        (this.Nr = t), (this.Fr = t + 2600);
      }
    }
    bt() {
      this.ft = !0;
    }
    $r() {
      this.Lr = !0;
    }
    yt() {
      return 0 !== this.Wr.W().lastPriceAnimation;
    }
    Ur() {
      switch (this.Wr.W().lastPriceAnimation) {
        case 0:
          return !1;
        case 1:
          return !0;
        case 2:
          return performance.now() <= this.Fr;
      }
    }
    gt() {
      return (
        this.ft
          ? (this.Mt(), (this.ft = !1), (this.Lr = !1))
          : this.Lr && (this.qr(), (this.Lr = !1)),
        this.Wt
      );
    }
    Mt() {
      this.Wt.J(null);
      const t = this.Wr.$t().St(),
        i = t.Zs(),
        n = this.Wr.Ct();
      if (null === i || null === n) return;
      const s = this.Wr.Yr(!0);
      if (s.Zr || !i.Xr(s.se)) return;
      const e = { x: t.zt(s.se), y: this.Wr.Dt().Rt(s._t, n.Ot) },
        r = s.O,
        h = this.Wr.W().lineWidth,
        l = li(this.Kr(), r);
      this.Wt.J({ Cr: r, Tr: h, Pr: l.Pr, Rr: l.Rr, ht: l.ht, Ze: e });
    }
    qr() {
      const t = this.Wt.He();
      if (null !== t) {
        const i = li(this.Kr(), t.Cr);
        (t.Pr = i.Pr), (t.Rr = i.Rr), (t.ht = i.ht);
      }
    }
    Kr() {
      return this.Ur() ? performance.now() - this.Nr : 2599;
    }
  }
  function oi(t, i) {
    return xt(Math.min(Math.max(t, 12), 30) * i);
  }
  function _i(t, i) {
    switch (t) {
      case "arrowDown":
      case "arrowUp":
        return oi(i, 1);
      case "circle":
        return oi(i, 0.8);
      case "square":
        return oi(i, 0.7);
    }
  }
  function ui(t) {
    return (function (t) {
      const i = Math.ceil(t);
      return i % 2 != 0 ? i - 1 : i;
    })(oi(t, 1));
  }
  function ci(t) {
    return Math.max(oi(t, 0.1), 3);
  }
  function di(t, i, n) {
    return i ? t : n ? Math.ceil(t / 2) : 0;
  }
  function fi(t, i, n, s, e) {
    const r = _i("square", n),
      h = (r - 1) / 2,
      l = t - h,
      a = i - h;
    return s >= l && s <= l + r && e >= a && e <= a + r;
  }
  function vi(t, i, n, s) {
    const e = ((_i("arrowUp", s) - 1) / 2) * n.Gr,
      r = ((xt(s / 2) - 1) / 2) * n.Gr;
    i.beginPath(),
      t
        ? (i.moveTo(n.nt - e, n.st),
          i.lineTo(n.nt, n.st - e),
          i.lineTo(n.nt + e, n.st),
          i.lineTo(n.nt + r, n.st),
          i.lineTo(n.nt + r, n.st + e),
          i.lineTo(n.nt - r, n.st + e),
          i.lineTo(n.nt - r, n.st))
        : (i.moveTo(n.nt - e, n.st),
          i.lineTo(n.nt, n.st + e),
          i.lineTo(n.nt + e, n.st),
          i.lineTo(n.nt + r, n.st),
          i.lineTo(n.nt + r, n.st - e),
          i.lineTo(n.nt - r, n.st - e),
          i.lineTo(n.nt - r, n.st)),
      i.fill();
  }
  function pi(t, i, n, s, e, r) {
    return fi(i, n, s, e, r);
  }
  class mi extends N {
    constructor() {
      super(...arguments),
        (this.Et = null),
        (this.lr = new Jt()),
        (this.j = -1),
        (this.H = ""),
        (this.Jr = "");
    }
    J(t) {
      this.Et = t;
    }
    ar(t, i) {
      (this.j === t && this.H === i) ||
        ((this.j = t), (this.H = i), (this.Jr = E(t, i)), this.lr.ir());
    }
    br(t, i) {
      if (null === this.Et || null === this.Et.tt) return null;
      for (let n = this.Et.tt.from; n < this.Et.tt.to; n++) {
        const s = this.Et.it[n];
        if (wi(s, t, i)) return { gr: s.Qr, wr: s.wr };
      }
      return null;
    }
    K({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }, s, e) {
      if (null !== this.Et && null !== this.Et.tt) {
        (t.textBaseline = "middle"), (t.font = this.Jr);
        for (let s = this.Et.tt.from; s < this.Et.tt.to; s++) {
          const e = this.Et.it[s];
          void 0 !== e.Kt &&
            ((e.Kt.Hi = this.lr.xi(t, e.Kt.th)),
            (e.Kt.At = this.j),
            (e.Kt.nt = e.nt - e.Kt.Hi / 2)),
            bi(e, t, i, n);
        }
      }
    }
  }
  function bi(t, i, n, s) {
    (i.fillStyle = t.O),
      void 0 !== t.Kt &&
        (function (t, i, n, s, e, r) {
          t.save(), t.scale(e, r), t.fillText(i, n, s), t.restore();
        })(i, t.Kt.th, t.Kt.nt, t.Kt.st, n, s),
      (function (t, i, n) {
        if (0 === t.Xs) return;
        switch (t.ih) {
          case "arrowDown":
            return void vi(!1, i, n, t.Xs);
          case "arrowUp":
            return void vi(!0, i, n, t.Xs);
          case "circle":
            return void (function (t, i, n) {
              const s = (_i("circle", n) - 1) / 2;
              t.beginPath(),
                t.arc(i.nt, i.st, s * i.Gr, 0, 2 * Math.PI, !1),
                t.fill();
            })(i, n, t.Xs);
          case "square":
            return void (function (t, i, n) {
              const s = _i("square", n),
                e = ((s - 1) * i.Gr) / 2,
                r = i.nt - e,
                h = i.st - e;
              t.fillRect(r, h, s * i.Gr, s * i.Gr);
            })(i, n, t.Xs);
        }
        t.ih;
      })(
        t,
        i,
        (function (t, i, n) {
          const s = (Math.max(1, Math.floor(i)) % 2) / 2;
          return { nt: Math.round(t.nt * i) + s, st: t.st * n, Gr: i };
        })(t, n, s)
      );
  }
  function wi(t, i, n) {
    return (
      !(
        void 0 === t.Kt ||
        !(function (t, i, n, s, e, r) {
          const h = s / 2;
          return e >= t && e <= t + n && r >= i - h && r <= i + h;
        })(t.Kt.nt, t.Kt.st, t.Kt.Hi, t.Kt.At, i, n)
      ) ||
      (function (t, i, n) {
        if (0 === t.Xs) return !1;
        switch (t.ih) {
          case "arrowDown":
          case "arrowUp":
            return pi(0, t.nt, t.st, t.Xs, i, n);
          case "circle":
            return (function (t, i, n, s, e) {
              const r = 2 + _i("circle", n) / 2,
                h = t - s,
                l = i - e;
              return Math.sqrt(h * h + l * l) <= r;
            })(t.nt, t.st, t.Xs, i, n);
          case "square":
            return fi(t.nt, t.st, t.Xs, i, n);
        }
      })(t, i, n)
    );
  }
  function gi(t, i, n, s, e, r, h, l, a) {
    const o = P(n) ? n : n.xe,
      _ = P(n) ? n : n.ge,
      u = P(n) ? n : n.Me,
      c = P(i.size) ? Math.max(i.size, 0) : 1,
      d = ui(l.he()) * c,
      f = d / 2;
    switch (((t.Xs = d), i.position)) {
      case "inBar":
        return (
          (t.st = h.Rt(o, a)),
          void (void 0 !== t.Kt && (t.Kt.st = t.st + f + r + 0.6 * e))
        );
      case "aboveBar":
        return (
          (t.st = h.Rt(_, a) - f - s.nh),
          void 0 !== t.Kt &&
            ((t.Kt.st = t.st - f - 0.6 * e), (s.nh += 1.2 * e)),
          void (s.nh += d + r)
        );
      case "belowBar":
        return (
          (t.st = h.Rt(u, a) + f + s.sh),
          void 0 !== t.Kt &&
            ((t.Kt.st = t.st + f + r + 0.6 * e), (s.sh += 1.2 * e)),
          void (s.sh += d + r)
        );
    }
    i.position;
  }
  class Mi {
    constructor(t, i) {
      (this.ft = !0),
        (this.eh = !0),
        (this.rh = !0),
        (this.hh = null),
        (this.ah = null),
        (this.Wt = new mi()),
        (this.Wr = t),
        (this.$i = i),
        (this.Et = { it: [], tt: null });
    }
    bt(t) {
      (this.ft = !0),
        (this.rh = !0),
        "data" === t && ((this.eh = !0), (this.ah = null));
    }
    gt(t) {
      if (!this.Wr.yt()) return null;
      this.ft && this.oh();
      const i = this.$i.W().layout;
      return this.Wt.ar(i.fontSize, i.fontFamily), this.Wt.J(this.Et), this.Wt;
    }
    _h() {
      if (this.rh) {
        if (this.Wr.uh().length > 0) {
          const t = this.$i.St().he(),
            i = ci(t),
            n = 1.5 * ui(t) + 2 * i,
            s = this.dh();
          this.hh = {
            above: di(n, s.aboveBar, s.inBar),
            below: di(n, s.belowBar, s.inBar),
          };
        } else this.hh = null;
        this.rh = !1;
      }
      return this.hh;
    }
    dh() {
      return (
        null === this.ah &&
          (this.ah = this.Wr.uh().reduce(
            (t, i) => (t[i.position] || (t[i.position] = !0), t),
            { inBar: !1, aboveBar: !1, belowBar: !1 }
          )),
        this.ah
      );
    }
    oh() {
      const t = this.Wr.Dt(),
        i = this.$i.St(),
        n = this.Wr.uh();
      this.eh &&
        ((this.Et.it = n.map((t) => ({
          ot: t.time,
          nt: 0,
          st: 0,
          Xs: 0,
          ih: t.shape,
          O: t.color,
          Qr: t.Qr,
          wr: t.id,
          Kt: void 0,
        }))),
        (this.eh = !1));
      const s = this.$i.W().layout;
      this.Et.tt = null;
      const e = i.Zs();
      if (null === e) return;
      const r = this.Wr.Ct();
      if (null === r) return;
      if (0 === this.Et.it.length) return;
      let h = NaN;
      const l = ci(i.he()),
        a = { nh: l, sh: l };
      this.Et.tt = Vt(this.Et.it, e, !0);
      for (let e = this.Et.tt.from; e < this.Et.tt.to; e++) {
        const o = n[e];
        o.time !== h && ((a.nh = l), (a.sh = l), (h = o.time));
        const _ = this.Et.it[e];
        (_.nt = i.zt(o.time)),
          void 0 !== o.text &&
            o.text.length > 0 &&
            (_.Kt = { th: o.text, nt: 0, st: 0, Hi: 0, At: 0 });
        const u = this.Wr.fh(o.time);
        null !== u && gi(_, o, u, a, s.fontSize, l, t, i, r.Ot);
      }
      this.ft = !1;
    }
  }
  class xi extends ni {
    constructor(t) {
      super(t);
    }
    kr() {
      const t = this.Mr;
      t.yt = !1;
      const i = this.Is.W();
      if (!i.priceLineVisible || !this.Is.yt()) return;
      const n = this.Is.Yr(0 === i.priceLineSource);
      n.Zr ||
        ((t.yt = !0),
        (t.st = n.ki),
        (t.O = this.Is.ph(n.O)),
        (t.et = i.priceLineWidth),
        (t.Nt = i.priceLineStyle));
    }
  }
  class Si extends J {
    constructor(t) {
      super(), (this.jt = t);
    }
    Ei(t, i, n) {
      (t.yt = !1), (i.yt = !1);
      const s = this.jt;
      if (!s.yt()) return;
      const e = s.W(),
        r = e.lastValueVisible,
        h = "" !== s.mh(),
        l = 0 === e.seriesLastValueMode,
        a = s.Yr(!1);
      if (a.Zr) return;
      r && ((t.Kt = this.bh(a, r, l)), (t.yt = 0 !== t.Kt.length)),
        (h || l) && ((i.Kt = this.wh(a, r, h, l)), (i.yt = i.Kt.length > 0));
      const o = s.ph(a.O),
        _ = y(o);
      (n.t = _.t),
        (n.ki = a.ki),
        (i.Bt = s.$t().Vt(a.ki / s.Dt().At())),
        (t.Bt = o),
        (t.O = _.i),
        (i.O = _.i);
    }
    wh(t, i, n, s) {
      let e = "";
      const r = this.jt.mh();
      return (
        n && 0 !== r.length && (e += `${r} `),
        i && s && (e += this.jt.Dt().gh() ? t.Mh : t.xh),
        e.trim()
      );
    }
    bh(t, i, n) {
      return i ? (n ? (this.jt.Dt().gh() ? t.xh : t.Mh) : t.Kt) : "";
    }
  }
  function ki(t, i, n, s) {
    const e = Number.isFinite(i),
      r = Number.isFinite(n);
    return e && r ? t(i, n) : e || r ? (e ? i : n) : s;
  }
  class yi {
    constructor(t, i) {
      (this.Sh = t), (this.kh = i);
    }
    yh(t) {
      return null !== t && this.Sh === t.Sh && this.kh === t.kh;
    }
    Ch() {
      return new yi(this.Sh, this.kh);
    }
    Th() {
      return this.Sh;
    }
    Ph() {
      return this.kh;
    }
    Rh() {
      return this.kh - this.Sh;
    }
    Ni() {
      return (
        this.kh === this.Sh || Number.isNaN(this.kh) || Number.isNaN(this.Sh)
      );
    }
    ts(t) {
      return null === t
        ? this
        : new yi(
            ki(Math.min, this.Th(), t.Th(), -1 / 0),
            ki(Math.max, this.Ph(), t.Ph(), 1 / 0)
          );
    }
    Dh(t) {
      if (!P(t)) return;
      if (0 === this.kh - this.Sh) return;
      const i = 0.5 * (this.kh + this.Sh);
      let n = this.kh - i,
        s = this.Sh - i;
      (n *= t), (s *= t), (this.kh = i + n), (this.Sh = i + s);
    }
    Oh(t) {
      P(t) && ((this.kh += t), (this.Sh += t));
    }
    Bh() {
      return { minValue: this.Sh, maxValue: this.kh };
    }
    static Vh(t) {
      return null === t ? null : new yi(t.minValue, t.maxValue);
    }
  }
  class Ci {
    constructor(t, i) {
      (this.Ah = t), (this.zh = i || null);
    }
    Eh() {
      return this.Ah;
    }
    Ih() {
      return this.zh;
    }
    Bh() {
      return null === this.Ah
        ? null
        : { priceRange: this.Ah.Bh(), margins: this.zh || void 0 };
    }
    static Vh(t) {
      return null === t ? null : new Ci(yi.Vh(t.priceRange), t.margins);
    }
  }
  class Ti extends ni {
    constructor(t, i) {
      super(t), (this.Lh = i);
    }
    kr() {
      const t = this.Mr;
      t.yt = !1;
      const i = this.Lh.W();
      if (!this.Is.yt() || !i.lineVisible) return;
      const n = this.Lh.Nh();
      null !== n &&
        ((t.yt = !0),
        (t.st = n),
        (t.O = i.color),
        (t.et = i.lineWidth),
        (t.Nt = i.lineStyle),
        (t.wr = this.Lh.W().id));
    }
  }
  class Pi extends J {
    constructor(t, i) {
      super(), (this.Wr = t), (this.Lh = i);
    }
    Ei(t, i, n) {
      (t.yt = !1), (i.yt = !1);
      const s = this.Lh.W(),
        e = s.axisLabelVisible,
        r = "" !== s.title,
        h = this.Wr;
      if (!e || !h.yt()) return;
      const l = this.Lh.Nh();
      if (null === l) return;
      r && ((i.Kt = s.title), (i.yt = !0)),
        (i.Bt = h.$t().Vt(l / h.Dt().At())),
        (t.Kt = this.Fh(s.price)),
        (t.yt = !0);
      const a = y(s.axisLabelColor || s.color);
      n.t = a.t;
      const o = s.axisLabelTextColor || a.i;
      (t.O = o), (i.O = o), (n.ki = l);
    }
    Fh(t) {
      const i = this.Wr.Ct();
      return null === i ? "" : this.Wr.Dt().Fi(t, i.Ot);
    }
  }
  class Ri {
    constructor(t, i) {
      (this.Wr = t),
        (this.cn = i),
        (this.Wh = new Ti(t, this)),
        (this._r = new Pi(t, this)),
        (this.jh = new ti(this._r, t, t.$t()));
    }
    Hh(t) {
      T(this.cn, t), this.bt(), this.Wr.$t().$h();
    }
    W() {
      return this.cn;
    }
    Uh() {
      return this.Wh;
    }
    qh() {
      return this.jh;
    }
    Yh() {
      return this._r;
    }
    bt() {
      this.Wh.bt(), this._r.bt();
    }
    Nh() {
      const t = this.Wr,
        i = t.Dt();
      if (t.$t().St().Ni() || i.Ni()) return null;
      const n = t.Ct();
      return null === n ? null : i.Rt(this.cn.price, n.Ot);
    }
  }
  class Di extends st {
    constructor(t) {
      super(), (this.$i = t);
    }
    $t() {
      return this.$i;
    }
  }
  const Oi = {
    Bar: (t, i, n, s) => {
      var e;
      const r = i.upColor,
        h = i.downColor,
        l = f(t(n, s)),
        a = v(l.Ot[0]) <= v(l.Ot[3]);
      return { ue: null !== (e = l.O) && void 0 !== e ? e : a ? r : h };
    },
    Candlestick: (t, i, n, s) => {
      var e, r, h;
      const l = i.upColor,
        a = i.downColor,
        o = i.borderUpColor,
        _ = i.borderDownColor,
        u = i.wickUpColor,
        c = i.wickDownColor,
        d = f(t(n, s)),
        p = v(d.Ot[0]) <= v(d.Ot[3]);
      return {
        ue: null !== (e = d.O) && void 0 !== e ? e : p ? l : a,
        Le: null !== (r = d.Bt) && void 0 !== r ? r : p ? o : _,
        Ie: null !== (h = d.Zh) && void 0 !== h ? h : p ? u : c,
      };
    },
    Custom: (t, i, n, s) => {
      var e;
      return { ue: null !== (e = f(t(n, s)).O) && void 0 !== e ? e : i.color };
    },
    Area: (t, i, n, s) => {
      var e, r, h, l;
      const a = f(t(n, s));
      return {
        ue: null !== (e = a.lt) && void 0 !== e ? e : i.lineColor,
        lt: null !== (r = a.lt) && void 0 !== r ? r : i.lineColor,
        Ts: null !== (h = a.Ts) && void 0 !== h ? h : i.topColor,
        Ps: null !== (l = a.Ps) && void 0 !== l ? l : i.bottomColor,
      };
    },
    Baseline: (t, i, n, s) => {
      var e, r, h, l, a, o;
      const _ = f(t(n, s));
      return {
        ue: _.Ot[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
        Pe: null !== (e = _.Pe) && void 0 !== e ? e : i.topLineColor,
        Re: null !== (r = _.Re) && void 0 !== r ? r : i.bottomLineColor,
        Se: null !== (h = _.Se) && void 0 !== h ? h : i.topFillColor1,
        ke: null !== (l = _.ke) && void 0 !== l ? l : i.topFillColor2,
        ye: null !== (a = _.ye) && void 0 !== a ? a : i.bottomFillColor1,
        Ce: null !== (o = _.Ce) && void 0 !== o ? o : i.bottomFillColor2,
      };
    },
    Line: (t, i, n, s) => {
      var e, r;
      const h = f(t(n, s));
      return {
        ue: null !== (e = h.O) && void 0 !== e ? e : i.color,
        lt: null !== (r = h.O) && void 0 !== r ? r : i.color,
      };
    },
    Histogram: (t, i, n, s) => {
      var e;
      return { ue: null !== (e = f(t(n, s)).O) && void 0 !== e ? e : i.color };
    },
  };
  class Bi {
    constructor(t) {
      (this.Xh = (t, i) => (void 0 !== i ? i.Ot : this.Wr.zn().Kh(t))),
        (this.Wr = t),
        (this.Gh = Oi[t.Jh()]);
    }
    Hs(t, i) {
      return this.Gh(this.Xh, this.Wr.W(), t, i);
    }
  }
  var Vi;
  !(function (t) {
    (t[(t.NearestLeft = -1)] = "NearestLeft"),
      (t[(t.None = 0)] = "None"),
      (t[(t.NearestRight = 1)] = "NearestRight");
  })(Vi || (Vi = {}));
  const Ai = 30;
  class zi {
    constructor() {
      (this.Qh = []), (this.tl = new Map()), (this.il = new Map());
    }
    nl() {
      return this.Xs() > 0 ? this.Qh[this.Qh.length - 1] : null;
    }
    sl() {
      return this.Xs() > 0 ? this.el(0) : null;
    }
    An() {
      return this.Xs() > 0 ? this.el(this.Qh.length - 1) : null;
    }
    Xs() {
      return this.Qh.length;
    }
    Ni() {
      return 0 === this.Xs();
    }
    Xr(t) {
      return null !== this.rl(t, 0);
    }
    Kh(t) {
      return this.hl(t);
    }
    hl(t, i = 0) {
      const n = this.rl(t, i);
      return null === n
        ? null
        : Object.assign(Object.assign({}, this.ll(n)), { se: this.el(n) });
    }
    ie() {
      return this.Qh;
    }
    al(t, i, n) {
      if (this.Ni()) return null;
      let s = null;
      for (const e of n) {
        s = Ei(s, this.ol(t, i, e));
      }
      return s;
    }
    J(t) {
      this.il.clear(), this.tl.clear(), (this.Qh = t);
    }
    el(t) {
      return this.Qh[t].se;
    }
    ll(t) {
      return this.Qh[t];
    }
    rl(t, i) {
      const n = this._l(t);
      if (null === n && 0 !== i)
        switch (i) {
          case -1:
            return this.ul(t);
          case 1:
            return this.cl(t);
          default:
            throw new TypeError("Unknown search mode");
        }
      return n;
    }
    ul(t) {
      let i = this.dl(t);
      return (
        i > 0 && (i -= 1), i !== this.Qh.length && this.el(i) < t ? i : null
      );
    }
    cl(t) {
      const i = this.fl(t);
      return i !== this.Qh.length && t < this.el(i) ? i : null;
    }
    _l(t) {
      const i = this.dl(t);
      return i === this.Qh.length || t < this.Qh[i].se ? null : i;
    }
    dl(t) {
      return Rt(this.Qh, t, (t, i) => t.se < i);
    }
    fl(t) {
      return Dt(this.Qh, t, (t, i) => t.se > i);
    }
    vl(t, i, n) {
      let s = null;
      for (let e = t; e < i; e++) {
        const t = this.Qh[e].Ot[n];
        Number.isNaN(t) ||
          (null === s
            ? (s = { pl: t, ml: t })
            : (t < s.pl && (s.pl = t), t > s.ml && (s.ml = t)));
      }
      return s;
    }
    ol(t, i, n) {
      if (this.Ni()) return null;
      let s = null;
      const e = f(this.sl()),
        r = f(this.An()),
        h = Math.max(t, e),
        l = Math.min(i, r),
        a = Math.ceil(h / Ai) * Ai,
        o = Math.max(a, Math.floor(l / Ai) * Ai);
      {
        const t = this.dl(h),
          e = this.fl(Math.min(l, a, i));
        s = Ei(s, this.vl(t, e, n));
      }
      let _ = this.tl.get(n);
      void 0 === _ && ((_ = new Map()), this.tl.set(n, _));
      for (let t = Math.max(a + 1, h); t < o; t += Ai) {
        const i = Math.floor(t / Ai);
        let e = _.get(i);
        if (void 0 === e) {
          const t = this.dl(i * Ai),
            s = this.fl((i + 1) * Ai - 1);
          (e = this.vl(t, s, n)), _.set(i, e);
        }
        s = Ei(s, e);
      }
      {
        const t = this.dl(o),
          i = this.fl(l);
        s = Ei(s, this.vl(t, i, n));
      }
      return s;
    }
  }
  function Ei(t, i) {
    if (null === t) return i;
    if (null === i) return t;
    return { pl: Math.min(t.pl, i.pl), ml: Math.max(t.ml, i.ml) };
  }
  class Ii {
    constructor(t) {
      this.bl = t;
    }
    X(t, i, n) {
      this.bl.draw(t);
    }
    wl(t, i, n) {
      var s, e;
      null === (e = (s = this.bl).drawBackground) ||
        void 0 === e ||
        e.call(s, t);
    }
  }
  class Li {
    constructor(t) {
      (this.Qe = null), (this.wn = t);
    }
    gt() {
      var t;
      const i = this.wn.renderer();
      if (null === i) return null;
      if ((null === (t = this.Qe) || void 0 === t ? void 0 : t.gl) === i)
        return this.Qe.Ml;
      const n = new Ii(i);
      return (this.Qe = { gl: i, Ml: n }), n;
    }
    xl() {
      var t, i, n;
      return null !==
        (n =
          null === (i = (t = this.wn).zOrder) || void 0 === i
            ? void 0
            : i.call(t)) && void 0 !== n
        ? n
        : "normal";
    }
  }
  function Ni(t) {
    var i, n, s, e, r;
    return {
      Kt: t.text(),
      ki: t.coordinate(),
      Si: null === (i = t.fixedCoordinate) || void 0 === i ? void 0 : i.call(t),
      O: t.textColor(),
      t: t.backColor(),
      yt:
        null ===
          (s = null === (n = t.visible) || void 0 === n ? void 0 : n.call(t)) ||
        void 0 === s ||
        s,
      hi:
        null ===
          (r =
            null === (e = t.tickVisible) || void 0 === e
              ? void 0
              : e.call(t)) ||
        void 0 === r ||
        r,
    };
  }
  class Fi {
    constructor(t, i) {
      (this.Wt = new it()), (this.Sl = t), (this.kl = i);
    }
    gt() {
      return (
        this.Wt.J(Object.assign({ Hi: this.kl.Hi() }, Ni(this.Sl))), this.Wt
      );
    }
  }
  class Wi extends J {
    constructor(t, i) {
      super(), (this.Sl = t), (this.Ii = i);
    }
    Ei(t, i, n) {
      const s = Ni(this.Sl);
      (n.t = s.t), (t.O = s.O);
      const e = (2 / 12) * this.Ii.P();
      (n.wi = e),
        (n.gi = e),
        (n.ki = s.ki),
        (n.Si = s.Si),
        (t.Kt = s.Kt),
        (t.yt = s.yt),
        (t.hi = s.hi);
    }
  }
  class ji {
    constructor(t, i) {
      (this.yl = null),
        (this.Cl = null),
        (this.Tl = null),
        (this.Pl = null),
        (this.Rl = null),
        (this.Dl = t),
        (this.Wr = i);
    }
    Ol() {
      return this.Dl;
    }
    On() {
      var t, i;
      null === (i = (t = this.Dl).updateAllViews) || void 0 === i || i.call(t);
    }
    Pn() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.Dl).paneViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.yl) || void 0 === s ? void 0 : s.gl) === e)
        return this.yl.Ml;
      const r = e.map((t) => new Li(t));
      return (this.yl = { gl: e, Ml: r }), r;
    }
    Qi() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.Dl).timeAxisViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.Cl) || void 0 === s ? void 0 : s.gl) === e)
        return this.Cl.Ml;
      const r = this.Wr.$t().St(),
        h = e.map((t) => new Fi(t, r));
      return (this.Cl = { gl: e, Ml: h }), h;
    }
    Rn() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.Dl).priceAxisViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.Tl) || void 0 === s ? void 0 : s.gl) === e)
        return this.Tl.Ml;
      const r = this.Wr.Dt(),
        h = e.map((t) => new Wi(t, r));
      return (this.Tl = { gl: e, Ml: h }), h;
    }
    Bl() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.Dl).priceAxisPaneViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.Pl) || void 0 === s ? void 0 : s.gl) === e)
        return this.Pl.Ml;
      const r = e.map((t) => new Li(t));
      return (this.Pl = { gl: e, Ml: r }), r;
    }
    Vl() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.Dl).timeAxisPaneViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.Rl) || void 0 === s ? void 0 : s.gl) === e)
        return this.Rl.Ml;
      const r = e.map((t) => new Li(t));
      return (this.Rl = { gl: e, Ml: r }), r;
    }
    Al(t, i) {
      var n, s, e;
      return null !==
        (e =
          null === (s = (n = this.Dl).autoscaleInfo) || void 0 === s
            ? void 0
            : s.call(n, t, i)) && void 0 !== e
        ? e
        : null;
    }
    br(t, i) {
      var n, s, e;
      return null !==
        (e =
          null === (s = (n = this.Dl).hitTest) || void 0 === s
            ? void 0
            : s.call(n, t, i)) && void 0 !== e
        ? e
        : null;
    }
  }
  function Hi(t, i, n, s) {
    t.forEach((t) => {
      i(t).forEach((t) => {
        t.xl() === n && s.push(t);
      });
    });
  }
  function $i(t) {
    return t.Pn();
  }
  function Ui(t) {
    return t.Bl();
  }
  function qi(t) {
    return t.Vl();
  }
  class Yi extends Di {
    constructor(t, i, n, s, e) {
      super(t),
        (this.Et = new zi()),
        (this.Wh = new xi(this)),
        (this.zl = []),
        (this.El = new si(this)),
        (this.Il = null),
        (this.Ll = null),
        (this.Nl = []),
        (this.Fl = []),
        (this.Wl = null),
        (this.jl = []),
        (this.cn = i),
        (this.Hl = n);
      const r = new Si(this);
      (this.rn = [r]),
        (this.jh = new ti(r, this, t)),
        ("Area" !== n && "Line" !== n && "Baseline" !== n) ||
          (this.Il = new ai(this)),
        this.$l(),
        this.Ul(e);
    }
    S() {
      null !== this.Wl && clearTimeout(this.Wl);
    }
    ph(t) {
      return this.cn.priceLineColor || t;
    }
    Yr(t) {
      const i = { Zr: !0 },
        n = this.Dt();
      if (this.$t().St().Ni() || n.Ni() || this.Et.Ni()) return i;
      const s = this.$t().St().Zs(),
        e = this.Ct();
      if (null === s || null === e) return i;
      let r, h;
      if (t) {
        const t = this.Et.nl();
        if (null === t) return i;
        (r = t), (h = t.se);
      } else {
        const t = this.Et.hl(s.ui(), -1);
        if (null === t) return i;
        if (((r = this.Et.Kh(t.se)), null === r)) return i;
        h = t.se;
      }
      const l = r.Ot[3],
        a = this.$s().Hs(h, { Ot: r }),
        o = n.Rt(l, e.Ot);
      return {
        Zr: !1,
        _t: l,
        Kt: n.Fi(l, e.Ot),
        Mh: n.ql(l),
        xh: n.Yl(l, e.Ot),
        O: a.ue,
        ki: o,
        se: h,
      };
    }
    $s() {
      return null !== this.Ll || (this.Ll = new Bi(this)), this.Ll;
    }
    W() {
      return this.cn;
    }
    Hh(t) {
      const i = t.priceScaleId;
      void 0 !== i && i !== this.cn.priceScaleId && this.$t().Zl(this, i),
        T(this.cn, t),
        void 0 !== t.priceFormat && (this.$l(), this.$t().Xl()),
        this.$t().Kl(this),
        this.$t().Gl(),
        this.wn.bt("options");
    }
    J(t, i) {
      this.Et.J(t),
        this.Jl(),
        this.wn.bt("data"),
        this.dn.bt("data"),
        null !== this.Il &&
          (i && i.Ql ? this.Il.Hr() : 0 === t.length && this.Il.jr());
      const n = this.$t().cr(this);
      this.$t().ta(n), this.$t().Kl(this), this.$t().Gl(), this.$t().$h();
    }
    ia(t) {
      (this.Nl = t), this.Jl();
      const i = this.$t().cr(this);
      this.dn.bt("data"),
        this.$t().ta(i),
        this.$t().Kl(this),
        this.$t().Gl(),
        this.$t().$h();
    }
    na() {
      return this.Nl;
    }
    uh() {
      return this.Fl;
    }
    sa(t) {
      const i = new Ri(this, t);
      return this.zl.push(i), this.$t().Kl(this), i;
    }
    ea(t) {
      const i = this.zl.indexOf(t);
      -1 !== i && this.zl.splice(i, 1), this.$t().Kl(this);
    }
    Jh() {
      return this.Hl;
    }
    Ct() {
      const t = this.ra();
      return null === t ? null : { Ot: t.Ot[3], ha: t.ot };
    }
    ra() {
      const t = this.$t().St().Zs();
      if (null === t) return null;
      const i = t.Os();
      return this.Et.hl(i, 1);
    }
    zn() {
      return this.Et;
    }
    fh(t) {
      const i = this.Et.Kh(t);
      return null === i
        ? null
        : "Bar" === this.Hl || "Candlestick" === this.Hl || "Custom" === this.Hl
        ? { we: i.Ot[0], ge: i.Ot[1], Me: i.Ot[2], xe: i.Ot[3] }
        : i.Ot[3];
    }
    la(t) {
      const i = [];
      Hi(this.jl, $i, "top", i);
      const n = this.Il;
      return null !== n && n.yt()
        ? (null === this.Wl &&
            n.Ur() &&
            (this.Wl = setTimeout(() => {
              (this.Wl = null), this.$t().aa();
            }, 0)),
          n.$r(),
          i.unshift(n),
          i)
        : i;
    }
    Pn() {
      const t = [];
      this.oa() || t.push(this.El), t.push(this.wn, this.Wh, this.dn);
      const i = this.zl.map((t) => t.Uh());
      return t.push(...i), Hi(this.jl, $i, "normal", t), t;
    }
    _a() {
      return this.ua($i, "bottom");
    }
    ca(t) {
      return this.ua(Ui, t);
    }
    da(t) {
      return this.ua(qi, t);
    }
    fa(t, i) {
      return this.jl.map((n) => n.br(t, i)).filter((t) => null !== t);
    }
    Ji(t) {
      return [this.jh, ...this.zl.map((t) => t.qh())];
    }
    Rn(t, i) {
      if (i !== this.Yi && !this.oa()) return [];
      const n = [...this.rn];
      for (const t of this.zl) n.push(t.Yh());
      return (
        this.jl.forEach((t) => {
          n.push(...t.Rn());
        }),
        n
      );
    }
    Qi() {
      const t = [];
      return (
        this.jl.forEach((i) => {
          t.push(...i.Qi());
        }),
        t
      );
    }
    Al(t, i) {
      if (void 0 !== this.cn.autoscaleInfoProvider) {
        const n = this.cn.autoscaleInfoProvider(() => {
          const n = this.va(t, i);
          return null === n ? null : n.Bh();
        });
        return Ci.Vh(n);
      }
      return this.va(t, i);
    }
    pa() {
      return this.cn.priceFormat.minMove;
    }
    ma() {
      return this.ba;
    }
    On() {
      var t;
      this.wn.bt(), this.dn.bt();
      for (const t of this.rn) t.bt();
      for (const t of this.zl) t.bt();
      this.Wh.bt(),
        this.El.bt(),
        null === (t = this.Il) || void 0 === t || t.bt(),
        this.jl.forEach((t) => t.On());
    }
    Dt() {
      return f(super.Dt());
    }
    kt(t) {
      if (
        !(
          ("Line" === this.Hl ||
            "Area" === this.Hl ||
            "Baseline" === this.Hl) &&
          this.cn.crosshairMarkerVisible
        )
      )
        return null;
      const i = this.Et.Kh(t);
      if (null === i) return null;
      return {
        _t: i.Ot[3],
        ht: this.wa(),
        Bt: this.ga(),
        Pt: this.Ma(),
        Tt: this.xa(t),
      };
    }
    mh() {
      return this.cn.title;
    }
    yt() {
      return this.cn.visible;
    }
    Sa(t) {
      this.jl.push(new ji(t, this));
    }
    ka(t) {
      this.jl = this.jl.filter((i) => i.Ol() !== t);
    }
    ya() {
      if (this.wn instanceof qt != !1) return (t) => this.wn.Fe(t);
    }
    Ca() {
      if (this.wn instanceof qt != !1) return (t) => this.wn.We(t);
    }
    oa() {
      return !ht(this.Dt().Ta());
    }
    va(t, i) {
      if (!R(t) || !R(i) || this.Et.Ni()) return null;
      const n =
          "Line" === this.Hl ||
          "Area" === this.Hl ||
          "Baseline" === this.Hl ||
          "Histogram" === this.Hl
            ? [3]
            : [2, 1],
        s = this.Et.al(t, i, n);
      let e = null !== s ? new yi(s.pl, s.ml) : null;
      if ("Histogram" === this.Jh()) {
        const t = this.cn.base,
          i = new yi(t, t);
        e = null !== e ? e.ts(i) : i;
      }
      let r = this.dn._h();
      return (
        this.jl.forEach((n) => {
          const s = n.Al(t, i);
          if (null == s ? void 0 : s.priceRange) {
            const t = new yi(s.priceRange.minValue, s.priceRange.maxValue);
            e = null !== e ? e.ts(t) : t;
          }
          var h, l, a, o;
          (null == s ? void 0 : s.margins) &&
            ((h = r),
            (l = s.margins),
            (r = {
              above: Math.max(
                null !== (a = null == h ? void 0 : h.above) && void 0 !== a
                  ? a
                  : 0,
                l.above
              ),
              below: Math.max(
                null !== (o = null == h ? void 0 : h.below) && void 0 !== o
                  ? o
                  : 0,
                l.below
              ),
            }));
        }),
        new Ci(e, r)
      );
    }
    wa() {
      switch (this.Hl) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.cn.crosshairMarkerRadius;
      }
      return 0;
    }
    ga() {
      switch (this.Hl) {
        case "Line":
        case "Area":
        case "Baseline": {
          const t = this.cn.crosshairMarkerBorderColor;
          if (0 !== t.length) return t;
        }
      }
      return null;
    }
    Ma() {
      switch (this.Hl) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.cn.crosshairMarkerBorderWidth;
      }
      return 0;
    }
    xa(t) {
      switch (this.Hl) {
        case "Line":
        case "Area":
        case "Baseline": {
          const t = this.cn.crosshairMarkerBackgroundColor;
          if (0 !== t.length) return t;
        }
      }
      return this.$s().Hs(t).ue;
    }
    $l() {
      switch (this.cn.priceFormat.type) {
        case "custom":
          this.ba = { format: this.cn.priceFormat.formatter };
          break;
        case "volume":
          this.ba = new ct(this.cn.priceFormat.precision);
          break;
        case "percent":
          this.ba = new ut(this.cn.priceFormat.precision);
          break;
        default: {
          const t = Math.pow(10, this.cn.priceFormat.precision);
          this.ba = new _t(t, this.cn.priceFormat.minMove * t);
        }
      }
      null !== this.Yi && this.Yi.Pa();
    }
    Jl() {
      const t = this.$t().St();
      if (!t.Ra() || this.Et.Ni()) return void (this.Fl = []);
      const i = f(this.Et.sl());
      this.Fl = this.Nl.map((n, s) => {
        const e = f(t.Da(n.time, !0)),
          r = e < i ? 1 : -1;
        return {
          time: f(this.Et.hl(e, r)).se,
          position: n.position,
          shape: n.shape,
          color: n.color,
          id: n.id,
          Qr: s,
          text: n.text,
          size: n.size,
          originalTime: n.originalTime,
        };
      });
    }
    Ul(t) {
      switch (((this.dn = new Mi(this, this.$t())), this.Hl)) {
        case "Bar":
          this.wn = new Nt(this, this.$t());
          break;
        case "Candlestick":
          this.wn = new $t(this, this.$t());
          break;
        case "Line":
          this.wn = new Kt(this, this.$t());
          break;
        case "Custom":
          this.wn = new qt(this, this.$t(), d(t));
          break;
        case "Area":
          this.wn = new Et(this, this.$t());
          break;
        case "Baseline":
          this.wn = new jt(this, this.$t());
          break;
        case "Histogram":
          this.wn = new Xt(this, this.$t());
          break;
        default:
          throw Error("Unknown chart style assigned: " + this.Hl);
      }
    }
    ua(t, i) {
      const n = [];
      return Hi(this.jl, t, i, n), n;
    }
  }
  class Zi {
    constructor(t) {
      this.cn = t;
    }
    Oa(t, i, n) {
      let s = t;
      if (0 === this.cn.mode) return s;
      const e = n.vn(),
        r = e.Ct();
      if (null === r) return s;
      const h = e.Rt(t, r),
        l = n
          .Ba()
          .filter((t) => t instanceof Yi)
          .reduce((t, s) => {
            if (n.dr(s) || !s.yt()) return t;
            const e = s.Dt(),
              r = s.zn();
            if (e.Ni() || !r.Xr(i)) return t;
            const h = r.Kh(i);
            if (null === h) return t;
            const l = v(s.Ct());
            return t.concat([e.Rt(h.Ot[3], l.Ot)]);
          }, []);
      if (0 === l.length) return s;
      l.sort((t, i) => Math.abs(t - h) - Math.abs(i - h));
      const a = l[0];
      return (s = e.pn(a, r)), s;
    }
  }
  class Xi extends N {
    constructor() {
      super(...arguments), (this.Et = null);
    }
    J(t) {
      this.Et = t;
    }
    K({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.Et) return;
      const e = Math.max(1, Math.floor(n));
      (t.lineWidth = e),
        (function (t, i) {
          t.save(), t.lineWidth % 2 && t.translate(0.5, 0.5), i(), t.restore();
        })(t, () => {
          const r = f(this.Et);
          if (r.Va) {
            (t.strokeStyle = r.Aa), _(t, r.za), t.beginPath();
            for (const s of r.Ea) {
              const r = Math.round(s.Ia * n);
              t.moveTo(r, -e), t.lineTo(r, i.height + e);
            }
            t.stroke();
          }
          if (r.La) {
            (t.strokeStyle = r.Na), _(t, r.Fa), t.beginPath();
            for (const n of r.Wa) {
              const r = Math.round(n.Ia * s);
              t.moveTo(-e, r), t.lineTo(i.width + e, r);
            }
            t.stroke();
          }
        });
    }
  }
  class Ki {
    constructor(t) {
      (this.Wt = new Xi()), (this.ft = !0), (this.tn = t);
    }
    bt() {
      this.ft = !0;
    }
    gt() {
      if (this.ft) {
        const t = this.tn.$t().W().grid,
          i = {
            La: t.horzLines.visible,
            Va: t.vertLines.visible,
            Na: t.horzLines.color,
            Aa: t.vertLines.color,
            Fa: t.horzLines.style,
            za: t.vertLines.style,
            Wa: this.tn.vn().ja(),
            Ea: (this.tn.$t().St().ja() || []).map((t) => ({ Ia: t.coord })),
          };
        this.Wt.J(i), (this.ft = !1);
      }
      return this.Wt;
    }
  }
  class Gi {
    constructor(t) {
      this.wn = new Ki(t);
    }
    Uh() {
      return this.wn;
    }
  }
  const Ji = { Ha: 4, $a: 1e-4 };
  function Qi(t, i) {
    const n = (100 * (t - i)) / i;
    return i < 0 ? -n : n;
  }
  function tn(t, i) {
    const n = Qi(t.Th(), i),
      s = Qi(t.Ph(), i);
    return new yi(n, s);
  }
  function nn(t, i) {
    const n = (100 * (t - i)) / i + 100;
    return i < 0 ? -n : n;
  }
  function sn(t, i) {
    const n = nn(t.Th(), i),
      s = nn(t.Ph(), i);
    return new yi(n, s);
  }
  function en(t, i) {
    const n = Math.abs(t);
    if (n < 1e-15) return 0;
    const s = Math.log10(n + i.$a) + i.Ha;
    return t < 0 ? -s : s;
  }
  function rn(t, i) {
    const n = Math.abs(t);
    if (n < 1e-15) return 0;
    const s = Math.pow(10, n - i.Ha) - i.$a;
    return t < 0 ? -s : s;
  }
  function hn(t, i) {
    if (null === t) return null;
    const n = en(t.Th(), i),
      s = en(t.Ph(), i);
    return new yi(n, s);
  }
  function ln(t, i) {
    if (null === t) return null;
    const n = rn(t.Th(), i),
      s = rn(t.Ph(), i);
    return new yi(n, s);
  }
  function an(t) {
    if (null === t) return Ji;
    const i = Math.abs(t.Ph() - t.Th());
    if (i >= 1 || i < 1e-15) return Ji;
    const n = Math.ceil(Math.abs(Math.log10(i))),
      s = Ji.Ha + n;
    return { Ha: s, $a: 1 / Math.pow(10, s) };
  }
  class on {
    constructor(t, i) {
      if (
        ((this.Ua = t),
        (this.qa = i),
        (function (t) {
          if (t < 0) return !1;
          for (let i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
          return !0;
        })(this.Ua))
      )
        this.Ya = [2, 2.5, 2];
      else {
        this.Ya = [];
        for (let t = this.Ua; 1 !== t; ) {
          if (t % 2 == 0) this.Ya.push(2), (t /= 2);
          else {
            if (t % 5 != 0) throw new Error("unexpected base");
            this.Ya.push(2, 2.5), (t /= 5);
          }
          if (this.Ya.length > 100)
            throw new Error("something wrong with base");
        }
      }
    }
    Za(t, i, n) {
      const s = 0 === this.Ua ? 0 : 1 / this.Ua;
      let e = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))),
        r = 0,
        h = this.qa[0];
      for (;;) {
        const t = Mt(e, s, 1e-14) && e > s + 1e-14,
          i = Mt(e, n * h, 1e-14),
          l = Mt(e, 1, 1e-14);
        if (!(t && i && l)) break;
        (e /= h), (h = this.qa[++r % this.qa.length]);
      }
      if (
        (e <= s + 1e-14 && (e = s),
        (e = Math.max(1, e)),
        this.Ya.length > 0 &&
          ((l = e), (a = 1), (o = 1e-14), Math.abs(l - a) < o))
      )
        for (r = 0, h = this.Ya[0]; Mt(e, n * h, 1e-14) && e > s + 1e-14; )
          (e /= h), (h = this.Ya[++r % this.Ya.length]);
      var l, a, o;
      return e;
    }
  }
  class _n {
    constructor(t, i, n, s) {
      (this.Xa = []),
        (this.Ii = t),
        (this.Ua = i),
        (this.Ka = n),
        (this.Ga = s);
    }
    Za(t, i) {
      if (t < i) throw new Error("high < low");
      const n = this.Ii.At(),
        s = ((t - i) * this.Ja()) / n,
        e = new on(this.Ua, [2, 2.5, 2]),
        r = new on(this.Ua, [2, 2, 2.5]),
        h = new on(this.Ua, [2.5, 2, 2]),
        l = [];
      return (
        l.push(e.Za(t, i, s), r.Za(t, i, s), h.Za(t, i, s)),
        (function (t) {
          if (t.length < 1) throw Error("array is empty");
          let i = t[0];
          for (let n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
          return i;
        })(l)
      );
    }
    Qa() {
      const t = this.Ii,
        i = t.Ct();
      if (null === i) return void (this.Xa = []);
      const n = t.At(),
        s = this.Ka(n - 1, i),
        e = this.Ka(0, i),
        r = this.Ii.W().entireTextOnly ? this.io() / 2 : 0,
        h = r,
        l = n - 1 - r,
        a = Math.max(s, e),
        o = Math.min(s, e);
      if (a === o) return void (this.Xa = []);
      let _ = this.Za(a, o),
        u = a % _;
      u += u < 0 ? _ : 0;
      const c = a >= o ? 1 : -1;
      let d = null,
        f = 0;
      for (let n = a - u; n > o; n -= _) {
        const s = this.Ga(n, i, !0);
        (null !== d && Math.abs(s - d) < this.Ja()) ||
          s < h ||
          s > l ||
          (f < this.Xa.length
            ? ((this.Xa[f].Ia = s), (this.Xa[f].no = t.so(n)))
            : this.Xa.push({ Ia: s, no: t.so(n) }),
          f++,
          (d = s),
          t.eo() && (_ = this.Za(n * c, o)));
      }
      this.Xa.length = f;
    }
    ja() {
      return this.Xa;
    }
    io() {
      return this.Ii.P();
    }
    Ja() {
      return Math.ceil(2.5 * this.io());
    }
  }
  function un(t) {
    return t.slice().sort((t, i) => f(t.Xi()) - f(i.Xi()));
  }
  var cn;
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"),
      (t[(t.Logarithmic = 1)] = "Logarithmic"),
      (t[(t.Percentage = 2)] = "Percentage"),
      (t[(t.IndexedTo100 = 3)] = "IndexedTo100");
  })(cn || (cn = {}));
  const dn = new ut(),
    fn = new _t(100, 1);
  class vn {
    constructor(t, i, n, s) {
      (this.ro = 0),
        (this.ho = null),
        (this.Ah = null),
        (this.lo = null),
        (this.ao = { oo: !1, _o: null }),
        (this.uo = 0),
        (this.co = 0),
        (this.do = new C()),
        (this.fo = new C()),
        (this.vo = []),
        (this.po = null),
        (this.mo = null),
        (this.bo = null),
        (this.wo = null),
        (this.ba = fn),
        (this.Mo = an(null)),
        (this.xo = t),
        (this.cn = i),
        (this.So = n),
        (this.ko = s),
        (this.yo = new _n(this, 100, this.Co.bind(this), this.To.bind(this)));
    }
    Ta() {
      return this.xo;
    }
    W() {
      return this.cn;
    }
    Hh(t) {
      if (
        (T(this.cn, t),
        this.Pa(),
        void 0 !== t.mode && this.Po({ yr: t.mode }),
        void 0 !== t.scaleMargins)
      ) {
        const i = d(t.scaleMargins.top),
          n = d(t.scaleMargins.bottom);
        if (i < 0 || i > 1)
          throw new Error(
            `Invalid top margin - expect value between 0 and 1, given=${i}`
          );
        if (n < 0 || n > 1)
          throw new Error(
            `Invalid bottom margin - expect value between 0 and 1, given=${n}`
          );
        if (i + n > 1)
          throw new Error(
            `Invalid margins - sum of margins must be less than 1, given=${
              i + n
            }`
          );
        this.Ro(), (this.mo = null);
      }
    }
    Do() {
      return this.cn.autoScale;
    }
    eo() {
      return 1 === this.cn.mode;
    }
    gh() {
      return 2 === this.cn.mode;
    }
    Oo() {
      return 3 === this.cn.mode;
    }
    yr() {
      return {
        Wn: this.cn.autoScale,
        Bo: this.cn.invertScale,
        yr: this.cn.mode,
      };
    }
    Po(t) {
      const i = this.yr();
      let n = null;
      void 0 !== t.Wn && (this.cn.autoScale = t.Wn),
        void 0 !== t.yr &&
          ((this.cn.mode = t.yr),
          (2 !== t.yr && 3 !== t.yr) || (this.cn.autoScale = !0),
          (this.ao.oo = !1)),
        1 === i.yr &&
          t.yr !== i.yr &&
          (!(function (t, i) {
            if (null === t) return !1;
            const n = rn(t.Th(), i),
              s = rn(t.Ph(), i);
            return isFinite(n) && isFinite(s);
          })(this.Ah, this.Mo)
            ? (this.cn.autoScale = !0)
            : ((n = ln(this.Ah, this.Mo)), null !== n && this.Vo(n))),
        1 === t.yr &&
          t.yr !== i.yr &&
          ((n = hn(this.Ah, this.Mo)), null !== n && this.Vo(n));
      const s = i.yr !== this.cn.mode;
      s && (2 === i.yr || this.gh()) && this.Pa(),
        s && (3 === i.yr || this.Oo()) && this.Pa(),
        void 0 !== t.Bo &&
          i.Bo !== t.Bo &&
          ((this.cn.invertScale = t.Bo), this.Ao()),
        this.fo.m(i, this.yr());
    }
    zo() {
      return this.fo;
    }
    P() {
      return this.So.fontSize;
    }
    At() {
      return this.ro;
    }
    Eo(t) {
      this.ro !== t && ((this.ro = t), this.Ro(), (this.mo = null));
    }
    Io() {
      if (this.ho) return this.ho;
      const t = this.At() - this.Lo() - this.No();
      return (this.ho = t), t;
    }
    Eh() {
      return this.Fo(), this.Ah;
    }
    Vo(t, i) {
      const n = this.Ah;
      (i || (null === n && null !== t) || (null !== n && !n.yh(t))) &&
        ((this.mo = null), (this.Ah = t));
    }
    Ni() {
      return this.Fo(), 0 === this.ro || !this.Ah || this.Ah.Ni();
    }
    Wo(t) {
      return this.Bo() ? t : this.At() - 1 - t;
    }
    Rt(t, i) {
      return (
        this.gh() ? (t = Qi(t, i)) : this.Oo() && (t = nn(t, i)), this.To(t, i)
      );
    }
    Qs(t, i, n) {
      this.Fo();
      const s = this.No(),
        e = f(this.Eh()),
        r = e.Th(),
        h = e.Ph(),
        l = this.Io() - 1,
        a = this.Bo(),
        o = l / (h - r),
        _ = void 0 === n ? 0 : n.from,
        u = void 0 === n ? t.length : n.to,
        c = this.jo();
      for (let n = _; n < u; n++) {
        const e = t[n],
          h = e._t;
        if (isNaN(h)) continue;
        let l = h;
        null !== c && (l = c(e._t, i));
        const _ = s + o * (l - r),
          u = a ? _ : this.ro - 1 - _;
        e.st = u;
      }
    }
    me(t, i, n) {
      this.Fo();
      const s = this.No(),
        e = f(this.Eh()),
        r = e.Th(),
        h = e.Ph(),
        l = this.Io() - 1,
        a = this.Bo(),
        o = l / (h - r),
        _ = void 0 === n ? 0 : n.from,
        u = void 0 === n ? t.length : n.to,
        c = this.jo();
      for (let n = _; n < u; n++) {
        const e = t[n];
        let h = e.we,
          l = e.ge,
          _ = e.Me,
          u = e.xe;
        null !== c &&
          ((h = c(e.we, i)),
          (l = c(e.ge, i)),
          (_ = c(e.Me, i)),
          (u = c(e.xe, i)));
        let d = s + o * (h - r),
          f = a ? d : this.ro - 1 - d;
        (e.ve = f),
          (d = s + o * (l - r)),
          (f = a ? d : this.ro - 1 - d),
          (e.ce = f),
          (d = s + o * (_ - r)),
          (f = a ? d : this.ro - 1 - d),
          (e.de = f),
          (d = s + o * (u - r)),
          (f = a ? d : this.ro - 1 - d),
          (e.pe = f);
      }
    }
    pn(t, i) {
      const n = this.Co(t, i);
      return this.Ho(n, i);
    }
    Ho(t, i) {
      let n = t;
      return (
        this.gh()
          ? (n = (function (t, i) {
              return i < 0 && (t = -t), (t / 100) * i + i;
            })(n, i))
          : this.Oo() &&
            (n = (function (t, i) {
              return (t -= 100), i < 0 && (t = -t), (t / 100) * i + i;
            })(n, i)),
        n
      );
    }
    Ba() {
      return this.vo;
    }
    $o() {
      if (this.po) return this.po;
      let t = [];
      for (let i = 0; i < this.vo.length; i++) {
        const n = this.vo[i];
        null === n.Xi() && n.Ki(i + 1), t.push(n);
      }
      return (t = un(t)), (this.po = t), this.po;
    }
    Uo(t) {
      -1 === this.vo.indexOf(t) && (this.vo.push(t), this.Pa(), this.qo());
    }
    Yo(t) {
      const i = this.vo.indexOf(t);
      if (-1 === i) throw new Error("source is not attached to scale");
      this.vo.splice(i, 1),
        0 === this.vo.length && (this.Po({ Wn: !0 }), this.Vo(null)),
        this.Pa(),
        this.qo();
    }
    Ct() {
      let t = null;
      for (const i of this.vo) {
        const n = i.Ct();
        null !== n && (null === t || n.ha < t.ha) && (t = n);
      }
      return null === t ? null : t.Ot;
    }
    Bo() {
      return this.cn.invertScale;
    }
    ja() {
      const t = null === this.Ct();
      if (null !== this.mo && (t || this.mo.Zo === t)) return this.mo.ja;
      this.yo.Qa();
      const i = this.yo.ja();
      return (this.mo = { ja: i, Zo: t }), this.do.m(), i;
    }
    Xo() {
      return this.do;
    }
    Ko(t) {
      this.gh() ||
        this.Oo() ||
        (null === this.bo &&
          null === this.lo &&
          (this.Ni() ||
            ((this.bo = this.ro - t), (this.lo = f(this.Eh()).Ch()))));
    }
    Go(t) {
      if (this.gh() || this.Oo()) return;
      if (null === this.bo) return;
      this.Po({ Wn: !1 }), (t = this.ro - t) < 0 && (t = 0);
      let i = (this.bo + 0.2 * (this.ro - 1)) / (t + 0.2 * (this.ro - 1));
      const n = f(this.lo).Ch();
      (i = Math.max(i, 0.1)), n.Dh(i), this.Vo(n);
    }
    Jo() {
      this.gh() || this.Oo() || ((this.bo = null), (this.lo = null));
    }
    Qo(t) {
      this.Do() ||
        (null === this.wo &&
          null === this.lo &&
          (this.Ni() || ((this.wo = t), (this.lo = f(this.Eh()).Ch()))));
    }
    t_(t) {
      if (this.Do()) return;
      if (null === this.wo) return;
      const i = f(this.Eh()).Rh() / (this.Io() - 1);
      let n = t - this.wo;
      this.Bo() && (n *= -1);
      const s = n * i,
        e = f(this.lo).Ch();
      e.Oh(s), this.Vo(e, !0), (this.mo = null);
    }
    i_() {
      this.Do() || (null !== this.wo && ((this.wo = null), (this.lo = null)));
    }
    ma() {
      return this.ba || this.Pa(), this.ba;
    }
    Fi(t, i) {
      switch (this.cn.mode) {
        case 2:
          return this.n_(Qi(t, i));
        case 3:
          return this.ma().format(nn(t, i));
        default:
          return this.Fh(t);
      }
    }
    so(t) {
      switch (this.cn.mode) {
        case 2:
          return this.n_(t);
        case 3:
          return this.ma().format(t);
        default:
          return this.Fh(t);
      }
    }
    ql(t) {
      return this.Fh(t, f(this.s_()).ma());
    }
    Yl(t, i) {
      return (t = Qi(t, i)), this.n_(t, dn);
    }
    e_() {
      return this.vo;
    }
    r_(t) {
      this.ao = { _o: t, oo: !1 };
    }
    On() {
      this.vo.forEach((t) => t.On());
    }
    Pa() {
      this.mo = null;
      const t = this.s_();
      let i = 100;
      null !== t && (i = Math.round(1 / t.pa())),
        (this.ba = fn),
        this.gh()
          ? ((this.ba = dn), (i = 100))
          : this.Oo()
          ? ((this.ba = new _t(100, 1)), (i = 100))
          : null !== t && (this.ba = t.ma()),
        (this.yo = new _n(this, i, this.Co.bind(this), this.To.bind(this))),
        this.yo.Qa();
    }
    qo() {
      this.po = null;
    }
    s_() {
      return this.vo[0] || null;
    }
    Lo() {
      return this.Bo()
        ? this.cn.scaleMargins.bottom * this.At() + this.co
        : this.cn.scaleMargins.top * this.At() + this.uo;
    }
    No() {
      return this.Bo()
        ? this.cn.scaleMargins.top * this.At() + this.uo
        : this.cn.scaleMargins.bottom * this.At() + this.co;
    }
    Fo() {
      this.ao.oo || ((this.ao.oo = !0), this.h_());
    }
    Ro() {
      this.ho = null;
    }
    To(t, i) {
      if ((this.Fo(), this.Ni())) return 0;
      t = this.eo() && t ? en(t, this.Mo) : t;
      const n = f(this.Eh()),
        s = this.No() + ((this.Io() - 1) * (t - n.Th())) / n.Rh();
      return this.Wo(s);
    }
    Co(t, i) {
      if ((this.Fo(), this.Ni())) return 0;
      const n = this.Wo(t),
        s = f(this.Eh()),
        e = s.Th() + s.Rh() * ((n - this.No()) / (this.Io() - 1));
      return this.eo() ? rn(e, this.Mo) : e;
    }
    Ao() {
      (this.mo = null), this.yo.Qa();
    }
    h_() {
      const t = this.ao._o;
      if (null === t) return;
      let i = null;
      const n = this.e_();
      let s = 0,
        e = 0;
      for (const r of n) {
        if (!r.yt()) continue;
        const n = r.Ct();
        if (null === n) continue;
        const h = r.Al(t.Os(), t.ui());
        let l = h && h.Eh();
        if (null !== l) {
          switch (this.cn.mode) {
            case 1:
              l = hn(l, this.Mo);
              break;
            case 2:
              l = tn(l, n.Ot);
              break;
            case 3:
              l = sn(l, n.Ot);
          }
          if (((i = null === i ? l : i.ts(f(l))), null !== h)) {
            const t = h.Ih();
            null !== t &&
              ((s = Math.max(s, t.above)), (e = Math.max(e, t.below)));
          }
        }
      }
      if (
        ((s === this.uo && e === this.co) ||
          ((this.uo = s), (this.co = e), (this.mo = null), this.Ro()),
        null !== i)
      ) {
        if (i.Th() === i.Ph()) {
          const t = this.s_(),
            n = 5 * (null === t || this.gh() || this.Oo() ? 1 : t.pa());
          this.eo() && (i = ln(i, this.Mo)),
            (i = new yi(i.Th() - n, i.Ph() + n)),
            this.eo() && (i = hn(i, this.Mo));
        }
        if (this.eo()) {
          const t = ln(i, this.Mo),
            n = an(t);
          if (((r = n), (h = this.Mo), r.Ha !== h.Ha || r.$a !== h.$a)) {
            const s = null !== this.lo ? ln(this.lo, this.Mo) : null;
            (this.Mo = n), (i = hn(t, n)), null !== s && (this.lo = hn(s, n));
          }
        }
        this.Vo(i);
      } else
        null === this.Ah && (this.Vo(new yi(-0.5, 0.5)), (this.Mo = an(null)));
      var r, h;
      this.ao.oo = !0;
    }
    jo() {
      return this.gh()
        ? Qi
        : this.Oo()
        ? nn
        : this.eo()
        ? (t) => en(t, this.Mo)
        : null;
    }
    l_(t, i, n) {
      return void 0 === i
        ? (void 0 === n && (n = this.ma()), n.format(t))
        : i(t);
    }
    Fh(t, i) {
      return this.l_(t, this.ko.priceFormatter, i);
    }
    n_(t, i) {
      return this.l_(t, this.ko.percentageFormatter, i);
    }
  }
  class pn {
    constructor(t, i) {
      (this.vo = []),
        (this.a_ = new Map()),
        (this.ro = 0),
        (this.o_ = 0),
        (this.__ = 1e3),
        (this.po = null),
        (this.u_ = new C()),
        (this.kl = t),
        (this.$i = i),
        (this.c_ = new Gi(this));
      const n = i.W();
      (this.d_ = this.f_("left", n.leftPriceScale)),
        (this.v_ = this.f_("right", n.rightPriceScale)),
        this.d_.zo().l(this.p_.bind(this, this.d_), this),
        this.v_.zo().l(this.p_.bind(this, this.v_), this),
        this.m_(n);
    }
    m_(t) {
      if (
        (t.leftPriceScale && this.d_.Hh(t.leftPriceScale),
        t.rightPriceScale && this.v_.Hh(t.rightPriceScale),
        t.localization && (this.d_.Pa(), this.v_.Pa()),
        t.overlayPriceScales)
      ) {
        const i = Array.from(this.a_.values());
        for (const n of i) {
          const i = f(n[0].Dt());
          i.Hh(t.overlayPriceScales), t.localization && i.Pa();
        }
      }
    }
    b_(t) {
      switch (t) {
        case "left":
          return this.d_;
        case "right":
          return this.v_;
      }
      return this.a_.has(t) ? d(this.a_.get(t))[0].Dt() : null;
    }
    S() {
      this.$t().w_().p(this),
        this.d_.zo().p(this),
        this.v_.zo().p(this),
        this.vo.forEach((t) => {
          t.S && t.S();
        }),
        this.u_.m();
    }
    g_() {
      return this.__;
    }
    M_(t) {
      this.__ = t;
    }
    $t() {
      return this.$i;
    }
    Hi() {
      return this.o_;
    }
    At() {
      return this.ro;
    }
    x_(t) {
      (this.o_ = t), this.S_();
    }
    Eo(t) {
      (this.ro = t),
        this.d_.Eo(t),
        this.v_.Eo(t),
        this.vo.forEach((i) => {
          if (this.dr(i)) {
            const n = i.Dt();
            null !== n && n.Eo(t);
          }
        }),
        this.S_();
    }
    Ba() {
      return this.vo;
    }
    dr(t) {
      const i = t.Dt();
      return null === i || (this.d_ !== i && this.v_ !== i);
    }
    Uo(t, i, n) {
      const s = void 0 !== n ? n : this.y_().k_ + 1;
      this.C_(t, i, s);
    }
    Yo(t) {
      const i = this.vo.indexOf(t);
      c(-1 !== i, "removeDataSource: invalid data source"),
        this.vo.splice(i, 1);
      const n = f(t.Dt()).Ta();
      if (this.a_.has(n)) {
        const i = d(this.a_.get(n)),
          s = i.indexOf(t);
        -1 !== s && (i.splice(s, 1), 0 === i.length && this.a_.delete(n));
      }
      const s = t.Dt();
      s && s.Ba().indexOf(t) >= 0 && s.Yo(t),
        null !== s && (s.qo(), this.T_(s)),
        (this.po = null);
    }
    pr(t) {
      return t === this.d_ ? "left" : t === this.v_ ? "right" : "overlay";
    }
    P_() {
      return this.d_;
    }
    R_() {
      return this.v_;
    }
    D_(t, i) {
      t.Ko(i);
    }
    O_(t, i) {
      t.Go(i), this.S_();
    }
    B_(t) {
      t.Jo();
    }
    V_(t, i) {
      t.Qo(i);
    }
    A_(t, i) {
      t.t_(i), this.S_();
    }
    z_(t) {
      t.i_();
    }
    S_() {
      this.vo.forEach((t) => {
        t.On();
      });
    }
    vn() {
      let t = null;
      return (
        this.$i.W().rightPriceScale.visible && 0 !== this.v_.Ba().length
          ? (t = this.v_)
          : this.$i.W().leftPriceScale.visible && 0 !== this.d_.Ba().length
          ? (t = this.d_)
          : 0 !== this.vo.length && (t = this.vo[0].Dt()),
        null === t && (t = this.v_),
        t
      );
    }
    vr() {
      let t = null;
      return (
        this.$i.W().rightPriceScale.visible
          ? (t = this.v_)
          : this.$i.W().leftPriceScale.visible && (t = this.d_),
        t
      );
    }
    T_(t) {
      null !== t && t.Do() && this.E_(t);
    }
    I_(t) {
      const i = this.kl.Zs();
      t.Po({ Wn: !0 }), null !== i && t.r_(i), this.S_();
    }
    L_() {
      this.E_(this.d_), this.E_(this.v_);
    }
    N_() {
      this.T_(this.d_),
        this.T_(this.v_),
        this.vo.forEach((t) => {
          this.dr(t) && this.T_(t.Dt());
        }),
        this.S_(),
        this.$i.$h();
    }
    $o() {
      return null === this.po && (this.po = un(this.vo)), this.po;
    }
    F_() {
      return this.u_;
    }
    W_() {
      return this.c_;
    }
    E_(t) {
      const i = t.e_();
      if (i && i.length > 0 && !this.kl.Ni()) {
        const i = this.kl.Zs();
        null !== i && t.r_(i);
      }
      t.On();
    }
    y_() {
      const t = this.$o();
      if (0 === t.length) return { j_: 0, k_: 0 };
      let i = 0,
        n = 0;
      for (let s = 0; s < t.length; s++) {
        const e = t[s].Xi();
        null !== e && (e < i && (i = e), e > n && (n = e));
      }
      return { j_: i, k_: n };
    }
    C_(t, i, n) {
      let s = this.b_(i);
      if (
        (null === s && (s = this.f_(i, this.$i.W().overlayPriceScales)),
        this.vo.push(t),
        !ht(i))
      ) {
        const n = this.a_.get(i) || [];
        n.push(t), this.a_.set(i, n);
      }
      s.Uo(t), t.Gi(s), t.Ki(n), this.T_(s), (this.po = null);
    }
    p_(t, i, n) {
      i.yr !== n.yr && this.E_(t);
    }
    f_(t, i) {
      const n = Object.assign({ visible: !0, autoScale: !0 }, B(i)),
        s = new vn(t, n, this.$i.W().layout, this.$i.W().localization);
      return s.Eo(this.At()), s;
    }
  }
  class mn {
    constructor(t, i, n = 50) {
      (this.Xe = 0),
        (this.Ke = 1),
        (this.Ge = 1),
        (this.Qe = new Map()),
        (this.Je = new Map()),
        (this.H_ = t),
        (this.U_ = i),
        (this.tr = n);
    }
    q_(t) {
      const i = t.time,
        n = this.U_.cacheKey(i),
        s = this.Qe.get(n);
      if (void 0 !== s) return s.Y_;
      if (this.Xe === this.tr) {
        const t = this.Je.get(this.Ge);
        this.Je.delete(this.Ge), this.Qe.delete(d(t)), this.Ge++, this.Xe--;
      }
      const e = this.H_(t);
      return (
        this.Qe.set(n, { Y_: e, er: this.Ke }),
        this.Je.set(this.Ke, n),
        this.Xe++,
        this.Ke++,
        e
      );
    }
  }
  class bn {
    constructor(t, i) {
      c(t <= i, "right should be >= left"), (this.Z_ = t), (this.X_ = i);
    }
    Os() {
      return this.Z_;
    }
    ui() {
      return this.X_;
    }
    K_() {
      return this.X_ - this.Z_ + 1;
    }
    Xr(t) {
      return this.Z_ <= t && t <= this.X_;
    }
    yh(t) {
      return this.Z_ === t.Os() && this.X_ === t.ui();
    }
  }
  function wn(t, i) {
    return null === t || null === i ? t === i : t.yh(i);
  }
  class gn {
    constructor() {
      (this.G_ = new Map()), (this.Qe = null), (this.J_ = !1);
    }
    Q_(t) {
      (this.J_ = t), (this.Qe = null);
    }
    tu(t, i) {
      this.iu(i), (this.Qe = null);
      for (let n = i; n < t.length; ++n) {
        const i = t[n];
        let s = this.G_.get(i.timeWeight);
        void 0 === s && ((s = []), this.G_.set(i.timeWeight, s)),
          s.push({
            index: n,
            time: i.time,
            weight: i.timeWeight,
            originalTime: i.originalTime,
          });
      }
    }
    nu(t, i) {
      const n = Math.ceil(i / t);
      return (
        (null !== this.Qe && this.Qe.su === n) ||
          (this.Qe = { ja: this.eu(n), su: n }),
        this.Qe.ja
      );
    }
    iu(t) {
      if (0 === t) return void this.G_.clear();
      const i = [];
      this.G_.forEach((n, s) => {
        t <= n[0].index
          ? i.push(s)
          : n.splice(
              Rt(n, t, (i) => i.index < t),
              1 / 0
            );
      });
      for (const t of i) this.G_.delete(t);
    }
    eu(t) {
      let i = [];
      for (const n of Array.from(this.G_.keys()).sort((t, i) => i - t)) {
        if (!this.G_.get(n)) continue;
        const s = i;
        i = [];
        const e = s.length;
        let r = 0;
        const h = d(this.G_.get(n)),
          l = h.length;
        let a = 1 / 0,
          o = -1 / 0;
        for (let n = 0; n < l; n++) {
          const l = h[n],
            _ = l.index;
          for (; r < e; ) {
            const t = s[r],
              n = t.index;
            if (!(n < _)) {
              a = n;
              break;
            }
            r++, i.push(t), (o = n), (a = 1 / 0);
          }
          if (a - _ >= t && _ - o >= t) i.push(l), (o = _);
          else if (this.J_) return s;
        }
        for (; r < e; r++) i.push(s[r]);
      }
      return i;
    }
  }
  class Mn {
    constructor(t) {
      this.ru = t;
    }
    hu() {
      return null === this.ru
        ? null
        : new bn(Math.floor(this.ru.Os()), Math.ceil(this.ru.ui()));
    }
    lu() {
      return this.ru;
    }
    static au() {
      return new Mn(null);
    }
  }
  function xn(t, i) {
    return t.weight > i.weight ? t : i;
  }
  class Sn {
    constructor(t, i, n, s) {
      (this.o_ = 0),
        (this.ou = null),
        (this._u = []),
        (this.wo = null),
        (this.bo = null),
        (this.uu = new gn()),
        (this.cu = new Map()),
        (this.du = Mn.au()),
        (this.fu = !0),
        (this.vu = new C()),
        (this.pu = new C()),
        (this.mu = new C()),
        (this.bu = null),
        (this.wu = null),
        (this.gu = []),
        (this.cn = i),
        (this.ko = n),
        (this.Mu = i.rightOffset),
        (this.xu = i.barSpacing),
        (this.$i = t),
        (this.U_ = s),
        this.Su(),
        this.uu.Q_(i.uniformDistribution);
    }
    W() {
      return this.cn;
    }
    ku(t) {
      T(this.ko, t), this.yu(), this.Su();
    }
    Hh(t, i) {
      var n;
      T(this.cn, t),
        this.cn.fixLeftEdge && this.Cu(),
        this.cn.fixRightEdge && this.Tu(),
        void 0 !== t.barSpacing && this.$i.Gn(t.barSpacing),
        void 0 !== t.rightOffset && this.$i.Jn(t.rightOffset),
        void 0 !== t.minBarSpacing &&
          this.$i.Gn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.xu),
        this.yu(),
        this.Su(),
        this.mu.m();
    }
    mn(t) {
      var i, n;
      return null !==
        (n = null === (i = this._u[t]) || void 0 === i ? void 0 : i.time) &&
        void 0 !== n
        ? n
        : null;
    }
    Ui(t) {
      var i;
      return null !== (i = this._u[t]) && void 0 !== i ? i : null;
    }
    Da(t, i) {
      if (this._u.length < 1) return null;
      if (this.U_.key(t) > this.U_.key(this._u[this._u.length - 1].time))
        return i ? this._u.length - 1 : null;
      const n = Rt(this._u, this.U_.key(t), (t, i) => this.U_.key(t.time) < i);
      return this.U_.key(t) < this.U_.key(this._u[n].time) ? (i ? n : null) : n;
    }
    Ni() {
      return 0 === this.o_ || 0 === this._u.length || null === this.ou;
    }
    Ra() {
      return this._u.length > 0;
    }
    Zs() {
      return this.Pu(), this.du.hu();
    }
    Ru() {
      return this.Pu(), this.du.lu();
    }
    Du() {
      const t = this.Zs();
      if (null === t) return null;
      const i = { from: t.Os(), to: t.ui() };
      return this.Ou(i);
    }
    Ou(t) {
      const i = Math.round(t.from),
        n = Math.round(t.to),
        s = f(this.Bu()),
        e = f(this.Vu());
      return {
        from: f(this.Ui(Math.max(s, i))),
        to: f(this.Ui(Math.min(e, n))),
      };
    }
    Au(t) {
      return { from: f(this.Da(t.from, !0)), to: f(this.Da(t.to, !0)) };
    }
    Hi() {
      return this.o_;
    }
    x_(t) {
      if (!isFinite(t) || t <= 0) return;
      if (this.o_ === t) return;
      const i = this.Ru(),
        n = this.o_;
      if (
        ((this.o_ = t),
        (this.fu = !0),
        this.cn.lockVisibleTimeRangeOnResize && 0 !== n)
      ) {
        const i = (this.xu * t) / n;
        this.xu = i;
      }
      if (this.cn.fixLeftEdge && null !== i && i.Os() <= 0) {
        const i = n - t;
        (this.Mu -= Math.round(i / this.xu) + 1), (this.fu = !0);
      }
      this.zu(), this.Eu();
    }
    zt(t) {
      if (this.Ni() || !R(t)) return 0;
      const i = this.Iu() + this.Mu - t;
      return this.o_ - (i + 0.5) * this.xu - 1;
    }
    Js(t, i) {
      const n = this.Iu(),
        s = void 0 === i ? 0 : i.from,
        e = void 0 === i ? t.length : i.to;
      for (let i = s; i < e; i++) {
        const s = t[i].ot,
          e = n + this.Mu - s,
          r = this.o_ - (e + 0.5) * this.xu - 1;
        t[i].nt = r;
      }
    }
    Lu(t) {
      return Math.ceil(this.Nu(t));
    }
    Jn(t) {
      (this.fu = !0), (this.Mu = t), this.Eu(), this.$i.Fu(), this.$i.$h();
    }
    he() {
      return this.xu;
    }
    Gn(t) {
      this.Wu(t), this.Eu(), this.$i.Fu(), this.$i.$h();
    }
    ju() {
      return this.Mu;
    }
    ja() {
      if (this.Ni()) return null;
      if (null !== this.wu) return this.wu;
      const t = this.xu,
        i =
          ((5 * (this.$i.W().layout.fontSize + 4)) / 8) *
          (this.cn.tickMarkMaxCharacterLength || 8),
        n = Math.round(i / t),
        s = f(this.Zs()),
        e = Math.max(s.Os(), s.Os() - n),
        r = Math.max(s.ui(), s.ui() - n),
        h = this.uu.nu(t, i),
        l = this.Bu() + n,
        a = this.Vu() - n,
        o = this.Hu(),
        _ = this.cn.fixLeftEdge || o,
        u = this.cn.fixRightEdge || o;
      let c = 0;
      for (const t of h) {
        if (!(e <= t.index && t.index <= r)) continue;
        let n;
        c < this.gu.length
          ? ((n = this.gu[c]),
            (n.coord = this.zt(t.index)),
            (n.label = this.$u(t)),
            (n.weight = t.weight))
          : ((n = {
              needAlignCoordinate: !1,
              coord: this.zt(t.index),
              label: this.$u(t),
              weight: t.weight,
            }),
            this.gu.push(n)),
          this.xu > i / 2 && !o
            ? (n.needAlignCoordinate = !1)
            : (n.needAlignCoordinate =
                (_ && t.index <= l) || (u && t.index >= a)),
          c++;
      }
      return (this.gu.length = c), (this.wu = this.gu), this.gu;
    }
    Uu() {
      (this.fu = !0), this.Gn(this.cn.barSpacing), this.Jn(this.cn.rightOffset);
    }
    qu(t) {
      (this.fu = !0), (this.ou = t), this.Eu(), this.Cu();
    }
    Yu(t, i) {
      const n = this.Nu(t),
        s = this.he(),
        e = s + i * (s / 10);
      this.Gn(e),
        this.cn.rightBarStaysOnScroll || this.Jn(this.ju() + (n - this.Nu(t)));
    }
    Ko(t) {
      this.wo && this.i_(),
        null === this.bo &&
          null === this.bu &&
          (this.Ni() || ((this.bo = t), this.Zu()));
    }
    Go(t) {
      if (null === this.bu) return;
      const i = gt(this.o_ - t, 0, this.o_),
        n = gt(this.o_ - f(this.bo), 0, this.o_);
      0 !== i && 0 !== n && this.Gn((this.bu.he * i) / n);
    }
    Jo() {
      null !== this.bo && ((this.bo = null), this.Xu());
    }
    Qo(t) {
      null === this.wo &&
        null === this.bu &&
        (this.Ni() || ((this.wo = t), this.Zu()));
    }
    t_(t) {
      if (null === this.wo) return;
      const i = (this.wo - t) / this.he();
      (this.Mu = f(this.bu).ju + i), (this.fu = !0), this.Eu();
    }
    i_() {
      null !== this.wo && ((this.wo = null), this.Xu());
    }
    Ku() {
      this.Gu(this.cn.rightOffset);
    }
    Gu(t, i = 400) {
      if (!isFinite(t))
        throw new RangeError("offset is required and must be finite number");
      if (!isFinite(i) || i <= 0)
        throw new RangeError(
          "animationDuration (optional) must be finite positive number"
        );
      const n = this.Mu,
        s = performance.now();
      this.$i.Zn({
        Ju: (t) => (t - s) / i >= 1,
        Qu: (e) => {
          const r = (e - s) / i;
          return r >= 1 ? t : n + (t - n) * r;
        },
      });
    }
    bt(t, i) {
      (this.fu = !0), (this._u = t), this.uu.tu(t, i), this.Eu();
    }
    tc() {
      return this.vu;
    }
    nc() {
      return this.pu;
    }
    sc() {
      return this.mu;
    }
    Iu() {
      return this.ou || 0;
    }
    ec(t) {
      const i = t.K_();
      this.Wu(this.o_ / i),
        (this.Mu = t.ui() - this.Iu()),
        this.Eu(),
        (this.fu = !0),
        this.$i.Fu(),
        this.$i.$h();
    }
    rc() {
      const t = this.Bu(),
        i = this.Vu();
      null !== t && null !== i && this.ec(new bn(t, i + this.cn.rightOffset));
    }
    hc(t) {
      const i = new bn(t.from, t.to);
      this.ec(i);
    }
    qi(t) {
      return void 0 !== this.ko.timeFormatter
        ? this.ko.timeFormatter(t.originalTime)
        : this.U_.formatHorzItem(t.time);
    }
    Hu() {
      const { handleScroll: t, handleScale: i } = this.$i.W();
      return !(
        t.horzTouchDrag ||
        t.mouseWheel ||
        t.pressedMouseMove ||
        t.vertTouchDrag ||
        i.axisDoubleClickReset.time ||
        i.axisPressedMouseMove.time ||
        i.mouseWheel ||
        i.pinch
      );
    }
    Bu() {
      return 0 === this._u.length ? null : 0;
    }
    Vu() {
      return 0 === this._u.length ? null : this._u.length - 1;
    }
    lc(t) {
      return (this.o_ - 1 - t) / this.xu;
    }
    Nu(t) {
      const i = this.lc(t),
        n = this.Iu() + this.Mu - i;
      return Math.round(1e6 * n) / 1e6;
    }
    Wu(t) {
      const i = this.xu;
      (this.xu = t), this.zu(), i !== this.xu && ((this.fu = !0), this.ac());
    }
    Pu() {
      if (!this.fu) return;
      if (((this.fu = !1), this.Ni())) return void this.oc(Mn.au());
      const t = this.Iu(),
        i = this.o_ / this.xu,
        n = this.Mu + t,
        s = new bn(n - i + 1, n);
      this.oc(new Mn(s));
    }
    zu() {
      const t = this._c();
      if ((this.xu < t && ((this.xu = t), (this.fu = !0)), 0 !== this.o_)) {
        const t = 0.5 * this.o_;
        this.xu > t && ((this.xu = t), (this.fu = !0));
      }
    }
    _c() {
      return this.cn.fixLeftEdge && this.cn.fixRightEdge && 0 !== this._u.length
        ? this.o_ / this._u.length
        : this.cn.minBarSpacing;
    }
    Eu() {
      const t = this.uc();
      this.Mu > t && ((this.Mu = t), (this.fu = !0));
      const i = this.cc();
      null !== i && this.Mu < i && ((this.Mu = i), (this.fu = !0));
    }
    cc() {
      const t = this.Bu(),
        i = this.ou;
      if (null === t || null === i) return null;
      return (
        t -
        i -
        1 +
        (this.cn.fixLeftEdge ? this.o_ / this.xu : Math.min(2, this._u.length))
      );
    }
    uc() {
      return this.cn.fixRightEdge
        ? 0
        : this.o_ / this.xu - Math.min(2, this._u.length);
    }
    Zu() {
      this.bu = { he: this.he(), ju: this.ju() };
    }
    Xu() {
      this.bu = null;
    }
    $u(t) {
      let i = this.cu.get(t.weight);
      return (
        void 0 === i &&
          ((i = new mn((t) => this.dc(t), this.U_)), this.cu.set(t.weight, i)),
        i.q_(t)
      );
    }
    dc(t) {
      return this.U_.formatTickmark(t, this.ko);
    }
    oc(t) {
      const i = this.du;
      (this.du = t),
        wn(i.hu(), this.du.hu()) || this.vu.m(),
        wn(i.lu(), this.du.lu()) || this.pu.m(),
        this.ac();
    }
    ac() {
      this.wu = null;
    }
    yu() {
      this.ac(), this.cu.clear();
    }
    Su() {
      this.U_.updateFormatter(this.ko);
    }
    Cu() {
      if (!this.cn.fixLeftEdge) return;
      const t = this.Bu();
      if (null === t) return;
      const i = this.Zs();
      if (null === i) return;
      const n = i.Os() - t;
      if (n < 0) {
        const t = this.Mu - n - 1;
        this.Jn(t);
      }
      this.zu();
    }
    Tu() {
      this.Eu(), this.zu();
    }
  }
  class kn {
    X(t, i, n) {
      t.useMediaCoordinateSpace((t) => this.K(t, i, n));
    }
    wl(t, i, n) {
      t.useMediaCoordinateSpace((t) => this.fc(t, i, n));
    }
    fc(t, i, n) {}
  }
  class yn extends kn {
    constructor(t) {
      super(), (this.vc = new Map()), (this.Et = t);
    }
    K(t) {}
    fc(t) {
      if (!this.Et.yt) return;
      const { context: i, mediaSize: n } = t;
      let s = 0;
      for (const t of this.Et.mc) {
        if (0 === t.Kt.length) continue;
        i.font = t.R;
        const e = this.bc(i, t.Kt);
        e > n.width ? (t.Yu = n.width / e) : (t.Yu = 1), (s += t.wc * t.Yu);
      }
      let e = 0;
      switch (this.Et.gc) {
        case "top":
          e = 0;
          break;
        case "center":
          e = Math.max((n.height - s) / 2, 0);
          break;
        case "bottom":
          e = Math.max(n.height - s, 0);
      }
      i.fillStyle = this.Et.O;
      for (const t of this.Et.mc) {
        i.save();
        let s = 0;
        switch (this.Et.Mc) {
          case "left":
            (i.textAlign = "left"), (s = t.wc / 2);
            break;
          case "center":
            (i.textAlign = "center"), (s = n.width / 2);
            break;
          case "right":
            (i.textAlign = "right"), (s = n.width - 1 - t.wc / 2);
        }
        i.translate(s, e),
          (i.textBaseline = "top"),
          (i.font = t.R),
          i.scale(t.Yu, t.Yu),
          i.fillText(t.Kt, 0, t.xc),
          i.restore(),
          (e += t.wc * t.Yu);
      }
    }
    bc(t, i) {
      const n = this.Sc(t.font);
      let s = n.get(i);
      return void 0 === s && ((s = t.measureText(i).width), n.set(i, s)), s;
    }
    Sc(t) {
      let i = this.vc.get(t);
      return void 0 === i && ((i = new Map()), this.vc.set(t, i)), i;
    }
  }
  class Cn {
    constructor(t) {
      (this.ft = !0),
        (this.Ft = { yt: !1, O: "", mc: [], gc: "center", Mc: "center" }),
        (this.Wt = new yn(this.Ft)),
        (this.jt = t);
    }
    bt() {
      this.ft = !0;
    }
    gt() {
      return this.ft && (this.Mt(), (this.ft = !1)), this.Wt;
    }
    Mt() {
      const t = this.jt.W(),
        i = this.Ft;
      (i.yt = t.visible),
        i.yt &&
          ((i.O = t.color),
          (i.Mc = t.horzAlign),
          (i.gc = t.vertAlign),
          (i.mc = [
            {
              Kt: t.text,
              R: E(t.fontSize, t.fontFamily, t.fontStyle),
              wc: 1.2 * t.fontSize,
              xc: 0,
              Yu: 0,
            },
          ]));
    }
  }
  class Tn extends st {
    constructor(t, i) {
      super(), (this.cn = i), (this.wn = new Cn(this));
    }
    Rn() {
      return [];
    }
    Pn() {
      return [this.wn];
    }
    W() {
      return this.cn;
    }
    On() {
      this.wn.bt();
    }
  }
  var Pn, Rn, Dn, On, Bn;
  !(function (t) {
    (t[(t.OnTouchEnd = 0)] = "OnTouchEnd"),
      (t[(t.OnNextTap = 1)] = "OnNextTap");
  })(Pn || (Pn = {}));
  class Vn {
    constructor(t, i, n) {
      (this.kc = []),
        (this.yc = []),
        (this.o_ = 0),
        (this.Cc = null),
        (this.Tc = new C()),
        (this.Pc = new C()),
        (this.Rc = null),
        (this.Dc = t),
        (this.cn = i),
        (this.U_ = n),
        (this.Oc = new I(this)),
        (this.kl = new Sn(this, i.timeScale, this.cn.localization, n)),
        (this.vt = new rt(this, i.crosshair)),
        (this.Bc = new Zi(i.crosshair)),
        (this.Vc = new Tn(this, i.watermark)),
        this.Ac(),
        this.kc[0].M_(2e3),
        (this.zc = this.Ec(0)),
        (this.Ic = this.Ec(1));
    }
    Xl() {
      this.Lc(lt.es());
    }
    $h() {
      this.Lc(lt.ss());
    }
    aa() {
      this.Lc(new lt(1));
    }
    Kl(t) {
      const i = this.Nc(t);
      this.Lc(i);
    }
    Fc() {
      return this.Cc;
    }
    Wc(t) {
      const i = this.Cc;
      (this.Cc = t), null !== i && this.Kl(i.jc), null !== t && this.Kl(t.jc);
    }
    W() {
      return this.cn;
    }
    Hh(t) {
      T(this.cn, t),
        this.kc.forEach((i) => i.m_(t)),
        void 0 !== t.timeScale && this.kl.Hh(t.timeScale),
        void 0 !== t.localization && this.kl.ku(t.localization),
        (t.leftPriceScale || t.rightPriceScale) && this.Tc.m(),
        (this.zc = this.Ec(0)),
        (this.Ic = this.Ec(1)),
        this.Xl();
    }
    Hc(t, i) {
      if ("left" === t) return void this.Hh({ leftPriceScale: i });
      if ("right" === t) return void this.Hh({ rightPriceScale: i });
      const n = this.$c(t);
      null !== n && (n.Dt.Hh(i), this.Tc.m());
    }
    $c(t) {
      for (const i of this.kc) {
        const n = i.b_(t);
        if (null !== n) return { Ht: i, Dt: n };
      }
      return null;
    }
    St() {
      return this.kl;
    }
    Uc() {
      return this.kc;
    }
    qc() {
      return this.Vc;
    }
    Yc() {
      return this.vt;
    }
    Zc() {
      return this.Pc;
    }
    Xc(t, i) {
      t.Eo(i), this.Fu();
    }
    x_(t) {
      (this.o_ = t),
        this.kl.x_(this.o_),
        this.kc.forEach((i) => i.x_(t)),
        this.Fu();
    }
    Ac(t) {
      const i = new pn(this.kl, this);
      void 0 !== t ? this.kc.splice(t, 0, i) : this.kc.push(i);
      const n = void 0 === t ? this.kc.length - 1 : t,
        s = lt.es();
      return s.Nn(n, { Fn: 0, Wn: !0 }), this.Lc(s), i;
    }
    D_(t, i, n) {
      t.D_(i, n);
    }
    O_(t, i, n) {
      t.O_(i, n), this.Gl(), this.Lc(this.Kc(t, 2));
    }
    B_(t, i) {
      t.B_(i), this.Lc(this.Kc(t, 2));
    }
    V_(t, i, n) {
      i.Do() || t.V_(i, n);
    }
    A_(t, i, n) {
      i.Do() || (t.A_(i, n), this.Gl(), this.Lc(this.Kc(t, 2)));
    }
    z_(t, i) {
      i.Do() || (t.z_(i), this.Lc(this.Kc(t, 2)));
    }
    I_(t, i) {
      t.I_(i), this.Lc(this.Kc(t, 2));
    }
    Gc(t) {
      this.kl.Ko(t);
    }
    Jc(t, i) {
      const n = this.St();
      if (n.Ni() || 0 === i) return;
      const s = n.Hi();
      (t = Math.max(1, Math.min(t, s))), n.Yu(t, i), this.Fu();
    }
    Qc(t) {
      this.td(0), this.nd(t), this.sd();
    }
    ed(t) {
      this.kl.Go(t), this.Fu();
    }
    rd() {
      this.kl.Jo(), this.$h();
    }
    td(t) {
      this.kl.Qo(t);
    }
    nd(t) {
      this.kl.t_(t), this.Fu();
    }
    sd() {
      this.kl.i_(), this.$h();
    }
    wt() {
      return this.yc;
    }
    hd(t, i, n, s, e) {
      this.vt.gn(t, i);
      let r = NaN,
        h = this.kl.Lu(t);
      const l = this.kl.Zs();
      null !== l && (h = Math.min(Math.max(l.Os(), h), l.ui()));
      const a = s.vn(),
        o = a.Ct();
      null !== o && (r = a.pn(i, o)),
        (r = this.Bc.Oa(r, h, s)),
        this.vt.kn(h, r, s),
        this.aa(),
        e || this.Pc.m(this.vt.xt(), { x: t, y: i }, n);
    }
    ld(t, i, n) {
      const s = n.vn(),
        e = s.Ct(),
        r = s.Rt(t, f(e)),
        h = this.kl.Da(i, !0),
        l = this.kl.zt(f(h));
      this.hd(l, r, null, n, !0);
    }
    ad(t) {
      this.Yc().Cn(), this.aa(), t || this.Pc.m(null, null, null);
    }
    Gl() {
      const t = this.vt.Ht();
      if (null !== t) {
        const i = this.vt.xn(),
          n = this.vt.Sn();
        this.hd(i, n, null, t);
      }
      this.vt.On();
    }
    od(t, i, n) {
      const s = this.kl.mn(0);
      void 0 !== i && void 0 !== n && this.kl.bt(i, n);
      const e = this.kl.mn(0),
        r = this.kl.Iu(),
        h = this.kl.Zs();
      if (null !== h && null !== s && null !== e) {
        const i = h.Xr(r),
          l = this.U_.key(s) > this.U_.key(e),
          a = null !== t && t > r && !l,
          o = this.kl.W().allowShiftVisibleRangeOnWhitespaceReplacement,
          _ =
            i &&
            (!(void 0 === n) || o) &&
            this.kl.W().shiftVisibleRangeOnNewBar;
        if (a && !_) {
          const i = t - r;
          this.kl.Jn(this.kl.ju() - i);
        }
      }
      this.kl.qu(t);
    }
    ta(t) {
      null !== t && t.N_();
    }
    cr(t) {
      const i = this.kc.find((i) => i.$o().includes(t));
      return void 0 === i ? null : i;
    }
    Fu() {
      this.Vc.On(), this.kc.forEach((t) => t.N_()), this.Gl();
    }
    S() {
      this.kc.forEach((t) => t.S()),
        (this.kc.length = 0),
        (this.cn.localization.priceFormatter = void 0),
        (this.cn.localization.percentageFormatter = void 0),
        (this.cn.localization.timeFormatter = void 0);
    }
    _d() {
      return this.Oc;
    }
    mr() {
      return this.Oc.W();
    }
    w_() {
      return this.Tc;
    }
    ud(t, i, n) {
      const s = this.kc[0],
        e = this.dd(i, t, s, n);
      return this.yc.push(e), 1 === this.yc.length ? this.Xl() : this.$h(), e;
    }
    fd(t) {
      const i = this.cr(t),
        n = this.yc.indexOf(t);
      c(-1 !== n, "Series not found"),
        this.yc.splice(n, 1),
        f(i).Yo(t),
        t.S && t.S();
    }
    Zl(t, i) {
      const n = f(this.cr(t));
      n.Yo(t);
      const s = this.$c(i);
      if (null === s) {
        const s = t.Xi();
        n.Uo(t, i, s);
      } else {
        const e = s.Ht === n ? t.Xi() : void 0;
        s.Ht.Uo(t, i, e);
      }
    }
    rc() {
      const t = lt.ss();
      t.$n(), this.Lc(t);
    }
    vd(t) {
      const i = lt.ss();
      i.Yn(t), this.Lc(i);
    }
    Kn() {
      const t = lt.ss();
      t.Kn(), this.Lc(t);
    }
    Gn(t) {
      const i = lt.ss();
      i.Gn(t), this.Lc(i);
    }
    Jn(t) {
      const i = lt.ss();
      i.Jn(t), this.Lc(i);
    }
    Zn(t) {
      const i = lt.ss();
      i.Zn(t), this.Lc(i);
    }
    Un() {
      const t = lt.ss();
      t.Un(), this.Lc(t);
    }
    pd() {
      return this.cn.rightPriceScale.visible ? "right" : "left";
    }
    md() {
      return this.Ic;
    }
    q() {
      return this.zc;
    }
    Vt(t) {
      const i = this.Ic,
        n = this.zc;
      if (i === n) return i;
      if (
        ((t = Math.max(0, Math.min(100, Math.round(100 * t)))),
        null === this.Rc || this.Rc.Ts !== n || this.Rc.Ps !== i)
      )
        this.Rc = { Ts: n, Ps: i, bd: new Map() };
      else {
        const i = this.Rc.bd.get(t);
        if (void 0 !== i) return i;
      }
      const s = (function (t, i, n) {
        const [s, e, r, h] = S(t),
          [l, a, o, _] = S(i),
          u = [
            m(s + n * (l - s)),
            m(e + n * (a - e)),
            m(r + n * (o - r)),
            b(h + n * (_ - h)),
          ];
        return `rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`;
      })(n, i, t / 100);
      return this.Rc.bd.set(t, s), s;
    }
    Kc(t, i) {
      const n = new lt(i);
      if (null !== t) {
        const s = this.kc.indexOf(t);
        n.Nn(s, { Fn: i });
      }
      return n;
    }
    Nc(t, i) {
      return void 0 === i && (i = 2), this.Kc(this.cr(t), i);
    }
    Lc(t) {
      this.Dc && this.Dc(t), this.kc.forEach((t) => t.W_().Uh().bt());
    }
    dd(t, i, n, s) {
      const e = new Yi(this, t, i, n, s),
        r = void 0 !== t.priceScaleId ? t.priceScaleId : this.pd();
      return n.Uo(e, r), ht(r) || e.Hh(t), e;
    }
    Ec(t) {
      const i = this.cn.layout;
      return "gradient" === i.background.type
        ? 0 === t
          ? i.background.topColor
          : i.background.bottomColor
        : i.background.color;
    }
  }
  function An(t) {
    return !P(t) && !D(t);
  }
  function zn(t) {
    return P(t);
  }
  !(function (t) {
    (t[(t.Disabled = 0)] = "Disabled"),
      (t[(t.Continuous = 1)] = "Continuous"),
      (t[(t.OnDataUpdate = 2)] = "OnDataUpdate");
  })(Rn || (Rn = {})),
    (function (t) {
      (t[(t.LastBar = 0)] = "LastBar"),
        (t[(t.LastVisible = 1)] = "LastVisible");
    })(Dn || (Dn = {})),
    (function (t) {
      (t.Solid = "solid"), (t.VerticalGradient = "gradient");
    })(On || (On = {})),
    (function (t) {
      (t[(t.Year = 0)] = "Year"),
        (t[(t.Month = 1)] = "Month"),
        (t[(t.DayOfMonth = 2)] = "DayOfMonth"),
        (t[(t.Time = 3)] = "Time"),
        (t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
    })(Bn || (Bn = {}));
  const En = (t) => t.getUTCFullYear();
  function In(t, i, n) {
    return i
      .replace(/yyyy/g, ((t) => ot(En(t), 4))(t))
      .replace(/yy/g, ((t) => ot(En(t) % 100, 2))(t))
      .replace(
        /MMMM/g,
        ((t, i) =>
          new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "long",
          }))(t, n)
      )
      .replace(
        /MMM/g,
        ((t, i) =>
          new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "short",
          }))(t, n)
      )
      .replace(/MM/g, ((t) => ot(((t) => t.getUTCMonth() + 1)(t), 2))(t))
      .replace(/dd/g, ((t) => ot(((t) => t.getUTCDate())(t), 2))(t));
  }
  class Ln {
    constructor(t = "yyyy-MM-dd", i = "default") {
      (this.wd = t), (this.gd = i);
    }
    q_(t) {
      return In(t, this.wd, this.gd);
    }
  }
  class Nn {
    constructor(t) {
      this.Md = t || "%h:%m:%s";
    }
    q_(t) {
      return this.Md.replace("%h", ot(t.getUTCHours(), 2))
        .replace("%m", ot(t.getUTCMinutes(), 2))
        .replace("%s", ot(t.getUTCSeconds(), 2));
    }
  }
  const Fn = { xd: "yyyy-MM-dd", Sd: "%h:%m:%s", kd: " ", yd: "default" };
  class Wn {
    constructor(t = {}) {
      const i = Object.assign(Object.assign({}, Fn), t);
      (this.Cd = new Ln(i.xd, i.yd)),
        (this.Td = new Nn(i.Sd)),
        (this.Pd = i.kd);
    }
    q_(t) {
      return `${this.Cd.q_(t)}${this.Pd}${this.Td.q_(t)}`;
    }
  }
  function jn(t) {
    return 60 * t * 60 * 1e3;
  }
  function Hn(t) {
    return 60 * t * 1e3;
  }
  const $n = [
    { Rd: ((Un = 1), 1e3 * Un), Dd: 10 },
    { Rd: Hn(1), Dd: 20 },
    { Rd: Hn(5), Dd: 21 },
    { Rd: Hn(30), Dd: 22 },
    { Rd: jn(1), Dd: 30 },
    { Rd: jn(3), Dd: 31 },
    { Rd: jn(6), Dd: 32 },
    { Rd: jn(12), Dd: 33 },
  ];
  var Un;
  function qn(t, i) {
    if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
    if (t.getUTCDate() !== i.getUTCDate()) return 50;
    for (let n = $n.length - 1; n >= 0; --n)
      if (
        Math.floor(i.getTime() / $n[n].Rd) !==
        Math.floor(t.getTime() / $n[n].Rd)
      )
        return $n[n].Dd;
    return 0;
  }
  function Yn(t) {
    let i = t;
    if ((D(t) && (i = Xn(t)), !An(i)))
      throw new Error("time must be of type BusinessDay");
    const n = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0));
    return { Od: Math.round(n.getTime() / 1e3), Bd: i };
  }
  function Zn(t) {
    if (!zn(t)) throw new Error("time must be of type isUTCTimestamp");
    return { Od: t };
  }
  function Xn(t) {
    const i = new Date(t);
    if (isNaN(i.getTime()))
      throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
    return {
      day: i.getUTCDate(),
      month: i.getUTCMonth() + 1,
      year: i.getUTCFullYear(),
    };
  }
  function Kn(t) {
    D(t.time) && (t.time = Xn(t.time));
  }
  class Gn {
    options() {
      return this.cn;
    }
    setOptions(t) {
      (this.cn = t), this.updateFormatter(t.localization);
    }
    preprocessData(t) {
      Array.isArray(t)
        ? (function (t) {
            t.forEach(Kn);
          })(t)
        : Kn(t);
    }
    createConverterToInternalObj(t) {
      return f(
        (function (t) {
          return 0 === t.length
            ? null
            : An(t[0].time) || D(t[0].time)
            ? Yn
            : Zn;
        })(t)
      );
    }
    key(t) {
      return "object" == typeof t && "Od" in t
        ? t.Od
        : this.key(this.convertHorzItemToInternal(t));
    }
    cacheKey(t) {
      const i = t;
      return void 0 === i.Bd
        ? new Date(1e3 * i.Od).getTime()
        : new Date(Date.UTC(i.Bd.year, i.Bd.month - 1, i.Bd.day)).getTime();
    }
    convertHorzItemToInternal(t) {
      return zn((i = t)) ? Zn(i) : An(i) ? Yn(i) : Yn(Xn(i));
      var i;
    }
    updateFormatter(t) {
      if (!this.cn) return;
      const i = t.dateFormat;
      this.cn.timeScale.timeVisible
        ? (this.Vd = new Wn({
            xd: i,
            Sd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
            kd: "   ",
            yd: t.locale,
          }))
        : (this.Vd = new Ln(i, t.locale));
    }
    formatHorzItem(t) {
      const i = t;
      return this.Vd.q_(new Date(1e3 * i.Od));
    }
    formatTickmark(t, i) {
      const n = (function (t, i, n) {
          switch (t) {
            case 0:
            case 10:
              return i ? (n ? 4 : 3) : 2;
            case 20:
            case 21:
            case 22:
            case 30:
            case 31:
            case 32:
            case 33:
              return i ? 3 : 2;
            case 50:
              return 2;
            case 60:
              return 1;
            case 70:
              return 0;
          }
        })(
          t.weight,
          this.cn.timeScale.timeVisible,
          this.cn.timeScale.secondsVisible
        ),
        s = this.cn.timeScale;
      if (void 0 !== s.tickMarkFormatter) {
        const e = s.tickMarkFormatter(t.originalTime, n, i.locale);
        if (null !== e) return e;
      }
      return (function (t, i, n) {
        const s = {};
        switch (i) {
          case 0:
            s.year = "numeric";
            break;
          case 1:
            s.month = "short";
            break;
          case 2:
            s.day = "numeric";
            break;
          case 3:
            (s.hour12 = !1), (s.hour = "2-digit"), (s.minute = "2-digit");
            break;
          case 4:
            (s.hour12 = !1),
              (s.hour = "2-digit"),
              (s.minute = "2-digit"),
              (s.second = "2-digit");
        }
        const e =
          void 0 === t.Bd
            ? new Date(1e3 * t.Od)
            : new Date(Date.UTC(t.Bd.year, t.Bd.month - 1, t.Bd.day));
        return new Date(
          e.getUTCFullYear(),
          e.getUTCMonth(),
          e.getUTCDate(),
          e.getUTCHours(),
          e.getUTCMinutes(),
          e.getUTCSeconds(),
          e.getUTCMilliseconds()
        ).toLocaleString(n, s);
      })(t.time, n, i.locale);
    }
    maxTickMarkWeight(t) {
      let i = t.reduce(xn, t[0]).weight;
      return i > 30 && i < 50 && (i = 30), i;
    }
    fillWeightsForPoints(t, i) {
      !(function (t, i = 0) {
        if (0 === t.length) return;
        let n = 0 === i ? null : t[i - 1].time.Od,
          s = null !== n ? new Date(1e3 * n) : null,
          e = 0;
        for (let r = i; r < t.length; ++r) {
          const i = t[r],
            h = new Date(1e3 * i.time.Od);
          null !== s && (i.timeWeight = qn(h, s)),
            (e += i.time.Od - (n || i.time.Od)),
            (n = i.time.Od),
            (s = h);
        }
        if (0 === i && t.length > 1) {
          const i = Math.ceil(e / (t.length - 1)),
            n = new Date(1e3 * (t[0].time.Od - i));
          t[0].timeWeight = qn(new Date(1e3 * t[0].time.Od), n);
        }
      })(t, i);
    }
    static Ad(t) {
      return T(
        { localization: { dateFormat: "dd MMM 'yy" } },
        null != t ? t : {}
      );
    }
  }
  function Jn(t) {
    var i = t.width,
      n = t.height;
    if (i < 0) throw new Error("Negative width is not allowed for Size");
    if (n < 0) throw new Error("Negative height is not allowed for Size");
    return { width: i, height: n };
  }
  function Qn(t, i) {
    return t.width === i.width && t.height === i.height;
  }
  var ts = (function () {
    function t(t) {
      var i = this;
      (this._resolutionListener = function () {
        return i._onResolutionChanged();
      }),
        (this._resolutionMediaQueryList = null),
        (this._observers = []),
        (this._window = t),
        this._installResolutionListener();
    }
    return (
      (t.prototype.dispose = function () {
        this._uninstallResolutionListener(), (this._window = null);
      }),
      Object.defineProperty(t.prototype, "value", {
        get: function () {
          return this._window.devicePixelRatio;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.subscribe = function (t) {
        var i = this,
          n = { next: t };
        return (
          this._observers.push(n),
          {
            unsubscribe: function () {
              i._observers = i._observers.filter(function (t) {
                return t !== n;
              });
            },
          }
        );
      }),
      (t.prototype._installResolutionListener = function () {
        if (null !== this._resolutionMediaQueryList)
          throw new Error("Resolution listener is already installed");
        var t = this._window.devicePixelRatio;
        (this._resolutionMediaQueryList = this._window.matchMedia(
          "all and (resolution: ".concat(t, "dppx)")
        )),
          this._resolutionMediaQueryList.addListener(this._resolutionListener);
      }),
      (t.prototype._uninstallResolutionListener = function () {
        null !== this._resolutionMediaQueryList &&
          (this._resolutionMediaQueryList.removeListener(
            this._resolutionListener
          ),
          (this._resolutionMediaQueryList = null));
      }),
      (t.prototype._reinstallResolutionListener = function () {
        this._uninstallResolutionListener(), this._installResolutionListener();
      }),
      (t.prototype._onResolutionChanged = function () {
        var t = this;
        this._observers.forEach(function (i) {
          return i.next(t._window.devicePixelRatio);
        }),
          this._reinstallResolutionListener();
      }),
      t
    );
  })();
  var is = (function () {
    function t(t, i, n) {
      var s;
      (this._canvasElement = null),
        (this._bitmapSizeChangedListeners = []),
        (this._suggestedBitmapSize = null),
        (this._suggestedBitmapSizeChangedListeners = []),
        (this._devicePixelRatioObservable = null),
        (this._canvasElementResizeObserver = null),
        (this._canvasElement = t),
        (this._canvasElementClientSize = Jn({
          width: this._canvasElement.clientWidth,
          height: this._canvasElement.clientHeight,
        })),
        (this._transformBitmapSize =
          null != i
            ? i
            : function (t) {
                return t;
              }),
        (this._allowResizeObserver =
          null === (s = null == n ? void 0 : n.allowResizeObserver) ||
          void 0 === s ||
          s),
        this._chooseAndInitObserver();
    }
    return (
      (t.prototype.dispose = function () {
        var t, i;
        if (null === this._canvasElement) throw new Error("Object is disposed");
        null === (t = this._canvasElementResizeObserver) ||
          void 0 === t ||
          t.disconnect(),
          (this._canvasElementResizeObserver = null),
          null === (i = this._devicePixelRatioObservable) ||
            void 0 === i ||
            i.dispose(),
          (this._devicePixelRatioObservable = null),
          (this._suggestedBitmapSizeChangedListeners.length = 0),
          (this._bitmapSizeChangedListeners.length = 0),
          (this._canvasElement = null);
      }),
      Object.defineProperty(t.prototype, "canvasElement", {
        get: function () {
          if (null === this._canvasElement)
            throw new Error("Object is disposed");
          return this._canvasElement;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "canvasElementClientSize", {
        get: function () {
          return this._canvasElementClientSize;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "bitmapSize", {
        get: function () {
          return Jn({
            width: this.canvasElement.width,
            height: this.canvasElement.height,
          });
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.resizeCanvasElement = function (t) {
        (this._canvasElementClientSize = Jn(t)),
          (this.canvasElement.style.width = "".concat(
            this._canvasElementClientSize.width,
            "px"
          )),
          (this.canvasElement.style.height = "".concat(
            this._canvasElementClientSize.height,
            "px"
          )),
          this._invalidateBitmapSize();
      }),
      (t.prototype.subscribeBitmapSizeChanged = function (t) {
        this._bitmapSizeChangedListeners.push(t);
      }),
      (t.prototype.unsubscribeBitmapSizeChanged = function (t) {
        this._bitmapSizeChangedListeners =
          this._bitmapSizeChangedListeners.filter(function (i) {
            return i !== t;
          });
      }),
      Object.defineProperty(t.prototype, "suggestedBitmapSize", {
        get: function () {
          return this._suggestedBitmapSize;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.subscribeSuggestedBitmapSizeChanged = function (t) {
        this._suggestedBitmapSizeChangedListeners.push(t);
      }),
      (t.prototype.unsubscribeSuggestedBitmapSizeChanged = function (t) {
        this._suggestedBitmapSizeChangedListeners =
          this._suggestedBitmapSizeChangedListeners.filter(function (i) {
            return i !== t;
          });
      }),
      (t.prototype.applySuggestedBitmapSize = function () {
        if (null !== this._suggestedBitmapSize) {
          var t = this._suggestedBitmapSize;
          (this._suggestedBitmapSize = null),
            this._resizeBitmap(t),
            this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize);
        }
      }),
      (t.prototype._resizeBitmap = function (t) {
        var i = this.bitmapSize;
        Qn(i, t) ||
          ((this.canvasElement.width = t.width),
          (this.canvasElement.height = t.height),
          this._emitBitmapSizeChanged(i, t));
      }),
      (t.prototype._emitBitmapSizeChanged = function (t, i) {
        var n = this;
        this._bitmapSizeChangedListeners.forEach(function (s) {
          return s.call(n, t, i);
        });
      }),
      (t.prototype._suggestNewBitmapSize = function (t) {
        var i = this._suggestedBitmapSize,
          n = Jn(this._transformBitmapSize(t, this._canvasElementClientSize)),
          s = Qn(this.bitmapSize, n) ? null : n;
        (null === i && null === s) ||
          (null !== i && null !== s && Qn(i, s)) ||
          ((this._suggestedBitmapSize = s),
          this._emitSuggestedBitmapSizeChanged(i, s));
      }),
      (t.prototype._emitSuggestedBitmapSizeChanged = function (t, i) {
        var n = this;
        this._suggestedBitmapSizeChangedListeners.forEach(function (s) {
          return s.call(n, t, i);
        });
      }),
      (t.prototype._chooseAndInitObserver = function () {
        var t = this;
        this._allowResizeObserver
          ? new Promise(function (t) {
              var i = new ResizeObserver(function (n) {
                t(
                  n.every(function (t) {
                    return "devicePixelContentBoxSize" in t;
                  })
                ),
                  i.disconnect();
              });
              i.observe(document.body, { box: "device-pixel-content-box" });
            })
              .catch(function () {
                return !1;
              })
              .then(function (i) {
                return i
                  ? t._initResizeObserver()
                  : t._initDevicePixelRatioObservable();
              })
          : this._initDevicePixelRatioObservable();
      }),
      (t.prototype._initDevicePixelRatioObservable = function () {
        var t = this;
        if (null !== this._canvasElement) {
          var i = ns(this._canvasElement);
          if (null === i)
            throw new Error("No window is associated with the canvas");
          (this._devicePixelRatioObservable = (function (t) {
            return new ts(t);
          })(i)),
            this._devicePixelRatioObservable.subscribe(function () {
              return t._invalidateBitmapSize();
            }),
            this._invalidateBitmapSize();
        }
      }),
      (t.prototype._invalidateBitmapSize = function () {
        var t, i;
        if (null !== this._canvasElement) {
          var n = ns(this._canvasElement);
          if (null !== n) {
            var s =
                null !==
                  (i =
                    null === (t = this._devicePixelRatioObservable) ||
                    void 0 === t
                      ? void 0
                      : t.value) && void 0 !== i
                  ? i
                  : n.devicePixelRatio,
              e = this._canvasElement.getClientRects(),
              r =
                void 0 !== e[0]
                  ? (function (t, i) {
                      return Jn({
                        width:
                          Math.round(t.left * i + t.width * i) -
                          Math.round(t.left * i),
                        height:
                          Math.round(t.top * i + t.height * i) -
                          Math.round(t.top * i),
                      });
                    })(e[0], s)
                  : Jn({
                      width: this._canvasElementClientSize.width * s,
                      height: this._canvasElementClientSize.height * s,
                    });
            this._suggestNewBitmapSize(r);
          }
        }
      }),
      (t.prototype._initResizeObserver = function () {
        var t = this;
        null !== this._canvasElement &&
          ((this._canvasElementResizeObserver = new ResizeObserver(function (
            i
          ) {
            var n = i.find(function (i) {
              return i.target === t._canvasElement;
            });
            if (
              n &&
              n.devicePixelContentBoxSize &&
              n.devicePixelContentBoxSize[0]
            ) {
              var s = n.devicePixelContentBoxSize[0],
                e = Jn({ width: s.inlineSize, height: s.blockSize });
              t._suggestNewBitmapSize(e);
            }
          })),
          this._canvasElementResizeObserver.observe(this._canvasElement, {
            box: "device-pixel-content-box",
          }));
      }),
      t
    );
  })();
  function ns(t) {
    return t.ownerDocument.defaultView;
  }
  var ss = (function () {
    function t(t, i, n) {
      if (0 === i.width || 0 === i.height)
        throw new TypeError(
          "Rendering target could only be created on a media with positive width and height"
        );
      if (((this._mediaSize = i), 0 === n.width || 0 === n.height))
        throw new TypeError(
          "Rendering target could only be created using a bitmap with positive integer width and height"
        );
      (this._bitmapSize = n), (this._context = t);
    }
    return (
      (t.prototype.useMediaCoordinateSpace = function (t) {
        try {
          return (
            this._context.save(),
            this._context.setTransform(1, 0, 0, 1, 0, 0),
            this._context.scale(
              this._horizontalPixelRatio,
              this._verticalPixelRatio
            ),
            t({ context: this._context, mediaSize: this._mediaSize })
          );
        } finally {
          this._context.restore();
        }
      }),
      (t.prototype.useBitmapCoordinateSpace = function (t) {
        try {
          return (
            this._context.save(),
            this._context.setTransform(1, 0, 0, 1, 0, 0),
            t({
              context: this._context,
              mediaSize: this._mediaSize,
              bitmapSize: this._bitmapSize,
              horizontalPixelRatio: this._horizontalPixelRatio,
              verticalPixelRatio: this._verticalPixelRatio,
            })
          );
        } finally {
          this._context.restore();
        }
      }),
      Object.defineProperty(t.prototype, "_horizontalPixelRatio", {
        get: function () {
          return this._bitmapSize.width / this._mediaSize.width;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "_verticalPixelRatio", {
        get: function () {
          return this._bitmapSize.height / this._mediaSize.height;
        },
        enumerable: !1,
        configurable: !0,
      }),
      t
    );
  })();
  function es(t, i) {
    var n = t.canvasElementClientSize;
    if (0 === n.width || 0 === n.height) return null;
    var s = t.bitmapSize;
    if (0 === s.width || 0 === s.height) return null;
    var e = t.canvasElement.getContext("2d", i);
    return null === e ? null : new ss(e, n, s);
  }
  const rs = "undefined" != typeof window;
  function hs() {
    return (
      !!rs && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    );
  }
  function ls() {
    return !!rs && /iPhone|iPad|iPod/.test(window.navigator.platform);
  }
  function as(t) {
    return t + (t % 2);
  }
  function os(t, i) {
    return t.zd - i.zd;
  }
  function _s(t, i, n) {
    const s = (t.zd - i.zd) / (t.ot - i.ot);
    return Math.sign(s) * Math.min(Math.abs(s), n);
  }
  class us {
    constructor(t, i, n, s) {
      (this.Ed = null),
        (this.Id = null),
        (this.Ld = null),
        (this.Nd = null),
        (this.Fd = null),
        (this.Wd = 0),
        (this.jd = 0),
        (this.Hd = t),
        (this.$d = i),
        (this.Ud = n),
        (this.rs = s);
    }
    qd(t, i) {
      if (null !== this.Ed) {
        if (this.Ed.ot === i) return void (this.Ed.zd = t);
        if (Math.abs(this.Ed.zd - t) < this.rs) return;
      }
      (this.Nd = this.Ld),
        (this.Ld = this.Id),
        (this.Id = this.Ed),
        (this.Ed = { ot: i, zd: t });
    }
    Dr(t, i) {
      if (null === this.Ed || null === this.Id) return;
      if (i - this.Ed.ot > 50) return;
      let n = 0;
      const s = _s(this.Ed, this.Id, this.$d),
        e = os(this.Ed, this.Id),
        r = [s],
        h = [e];
      if (((n += e), null !== this.Ld)) {
        const t = _s(this.Id, this.Ld, this.$d);
        if (Math.sign(t) === Math.sign(s)) {
          const i = os(this.Id, this.Ld);
          if ((r.push(t), h.push(i), (n += i), null !== this.Nd)) {
            const t = _s(this.Ld, this.Nd, this.$d);
            if (Math.sign(t) === Math.sign(s)) {
              const i = os(this.Ld, this.Nd);
              r.push(t), h.push(i), (n += i);
            }
          }
        }
      }
      let l = 0;
      for (let t = 0; t < r.length; ++t) l += (h[t] / n) * r[t];
      Math.abs(l) < this.Hd ||
        ((this.Fd = { zd: t, ot: i }),
        (this.jd = l),
        (this.Wd = (function (t, i) {
          const n = Math.log(i);
          return Math.log((1 * n) / -t) / n;
        })(Math.abs(l), this.Ud)));
    }
    Qu(t) {
      const i = f(this.Fd),
        n = t - i.ot;
      return i.zd + (this.jd * (Math.pow(this.Ud, n) - 1)) / Math.log(this.Ud);
    }
    Ju(t) {
      return null === this.Fd || this.Yd(t) === this.Wd;
    }
    Yd(t) {
      const i = t - f(this.Fd).ot;
      return Math.min(i, this.Wd);
    }
  }
  class cs {
    constructor(t, i) {
      (this.Zd = void 0),
        (this.Xd = void 0),
        (this.Kd = void 0),
        (this.en = !1),
        (this.Gd = t),
        (this.Jd = i),
        this.Qd();
    }
    bt() {
      this.Qd();
    }
    tf() {
      this.Zd && this.Gd.removeChild(this.Zd),
        this.Xd && this.Gd.removeChild(this.Xd),
        (this.Zd = void 0),
        (this.Xd = void 0);
    }
    if() {
      return this.en !== this.nf() || this.Kd !== this.sf();
    }
    sf() {
      return k(S(this.Jd.W().layout.textColor)) > 160 ? "dark" : "light";
    }
    nf() {
      return this.Jd.W().layout.attributionLogo;
    }
    ef() {
      const t = new URL(location.href);
      return t.hostname ? "&utm_source=" + t.hostname + t.pathname : "";
    }
    Qd() {
      this.if() &&
        (this.tf(),
        (this.en = this.nf()),
        this.en &&
          ((this.Kd = this.sf()),
          (this.Xd = document.createElement("style")),
          (this.Xd.innerText =
            "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}"),
          (this.Zd = document.createElement("a")),
          (this.Zd.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.ef()}`),
          (this.Zd.title = "Charting by TradingView"),
          (this.Zd.id = "tv-attr-logo"),
          (this.Zd.target = "_blank"),
          (this.Zd.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>'),
          this.Zd.toggleAttribute("data-dark", "dark" === this.Kd),
          this.Gd.appendChild(this.Xd),
          this.Gd.appendChild(this.Zd)));
    }
  }
  function ds(t, i) {
    const n = f(t.ownerDocument).createElement("canvas");
    t.appendChild(n);
    const s = (function (t, i) {
      if ("device-pixel-content-box" === i.type)
        return new is(t, i.transform, i.options);
      throw new Error("Unsupported binding target");
    })(n, {
      type: "device-pixel-content-box",
      options: { allowResizeObserver: !1 },
      transform: (t, i) => ({
        width: Math.max(t.width, i.width),
        height: Math.max(t.height, i.height),
      }),
    });
    return s.resizeCanvasElement(i), s;
  }
  function fs(t) {
    var i;
    (t.width = 1),
      (t.height = 1),
      null === (i = t.getContext("2d")) ||
        void 0 === i ||
        i.clearRect(0, 0, 1, 1);
  }
  function vs(t, i, n, s) {
    t.wl && t.wl(i, n, s);
  }
  function ps(t, i, n, s) {
    t.X(i, n, s);
  }
  function ms(t, i, n, s) {
    const e = t(n, s);
    for (const t of e) {
      const n = t.gt();
      null !== n && i(n);
    }
  }
  function bs(t) {
    rs &&
      void 0 !== window.chrome &&
      t.addEventListener("mousedown", (t) => {
        if (1 === t.button) return t.preventDefault(), !1;
      });
  }
  class ws {
    constructor(t, i, n) {
      (this.rf = 0),
        (this.hf = null),
        (this.lf = {
          nt: Number.NEGATIVE_INFINITY,
          st: Number.POSITIVE_INFINITY,
        }),
        (this.af = 0),
        (this._f = null),
        (this.uf = {
          nt: Number.NEGATIVE_INFINITY,
          st: Number.POSITIVE_INFINITY,
        }),
        (this.cf = null),
        (this.df = !1),
        (this.ff = null),
        (this.vf = null),
        (this.pf = !1),
        (this.mf = !1),
        (this.bf = !1),
        (this.wf = null),
        (this.gf = null),
        (this.Mf = null),
        (this.xf = null),
        (this.Sf = null),
        (this.kf = null),
        (this.yf = null),
        (this.Cf = 0),
        (this.Tf = !1),
        (this.Pf = !1),
        (this.Rf = !1),
        (this.Df = 0),
        (this.Of = null),
        (this.Bf = !ls()),
        (this.Vf = (t) => {
          this.Af(t);
        }),
        (this.zf = (t) => {
          if (this.Ef(t)) {
            const i = this.If(t);
            if ((++this.af, this._f && this.af > 1)) {
              const { Lf: n } = this.Nf(xs(t), this.uf);
              n < 30 && !this.bf && this.Ff(i, this.jf.Wf), this.Hf();
            }
          } else {
            const i = this.If(t);
            if ((++this.rf, this.hf && this.rf > 1)) {
              const { Lf: n } = this.Nf(xs(t), this.lf);
              n < 5 && !this.mf && this.$f(i, this.jf.Uf), this.qf();
            }
          }
        }),
        (this.Yf = t),
        (this.jf = i),
        (this.cn = n),
        this.Zf();
    }
    S() {
      null !== this.wf && (this.wf(), (this.wf = null)),
        null !== this.gf && (this.gf(), (this.gf = null)),
        null !== this.xf && (this.xf(), (this.xf = null)),
        null !== this.Sf && (this.Sf(), (this.Sf = null)),
        null !== this.kf && (this.kf(), (this.kf = null)),
        null !== this.Mf && (this.Mf(), (this.Mf = null)),
        this.Xf(),
        this.qf();
    }
    Kf(t) {
      this.xf && this.xf();
      const i = this.Gf.bind(this);
      if (
        ((this.xf = () => {
          this.Yf.removeEventListener("mousemove", i);
        }),
        this.Yf.addEventListener("mousemove", i),
        this.Ef(t))
      )
        return;
      const n = this.If(t);
      this.$f(n, this.jf.Jf), (this.Bf = !0);
    }
    qf() {
      null !== this.hf && clearTimeout(this.hf),
        (this.rf = 0),
        (this.hf = null),
        (this.lf = {
          nt: Number.NEGATIVE_INFINITY,
          st: Number.POSITIVE_INFINITY,
        });
    }
    Hf() {
      null !== this._f && clearTimeout(this._f),
        (this.af = 0),
        (this._f = null),
        (this.uf = {
          nt: Number.NEGATIVE_INFINITY,
          st: Number.POSITIVE_INFINITY,
        });
    }
    Gf(t) {
      if (this.Rf || null !== this.vf) return;
      if (this.Ef(t)) return;
      const i = this.If(t);
      this.$f(i, this.jf.Qf), (this.Bf = !0);
    }
    tv(t) {
      const i = ks(t.changedTouches, f(this.Of));
      if (null === i) return;
      if (((this.Df = Ss(t)), null !== this.yf)) return;
      if (this.Pf) return;
      this.Tf = !0;
      const n = this.Nf(xs(i), f(this.vf)),
        { iv: s, nv: e, Lf: r } = n;
      if (this.pf || !(r < 5)) {
        if (!this.pf) {
          const t = 0.5 * s,
            i = e >= t && !this.cn.sv(),
            n = t > e && !this.cn.ev();
          i || n || (this.Pf = !0),
            (this.pf = !0),
            (this.bf = !0),
            this.Xf(),
            this.Hf();
        }
        if (!this.Pf) {
          const n = this.If(t, i);
          this.Ff(n, this.jf.rv), Ms(t);
        }
      }
    }
    hv(t) {
      if (0 !== t.button) return;
      const i = this.Nf(xs(t), f(this.ff)),
        { Lf: n } = i;
      if ((n >= 5 && ((this.mf = !0), this.qf()), this.mf)) {
        const i = this.If(t);
        this.$f(i, this.jf.lv);
      }
    }
    Nf(t, i) {
      const n = Math.abs(i.nt - t.nt),
        s = Math.abs(i.st - t.st);
      return { iv: n, nv: s, Lf: n + s };
    }
    av(t) {
      let i = ks(t.changedTouches, f(this.Of));
      if (
        (null === i && 0 === t.touches.length && (i = t.changedTouches[0]),
        null === i)
      )
        return;
      (this.Of = null),
        (this.Df = Ss(t)),
        this.Xf(),
        (this.vf = null),
        this.kf && (this.kf(), (this.kf = null));
      const n = this.If(t, i);
      if ((this.Ff(n, this.jf.ov), ++this.af, this._f && this.af > 1)) {
        const { Lf: t } = this.Nf(xs(i), this.uf);
        t < 30 && !this.bf && this.Ff(n, this.jf.Wf), this.Hf();
      } else this.bf || (this.Ff(n, this.jf._v), this.jf._v && Ms(t));
      0 === this.af && Ms(t),
        0 === t.touches.length && this.df && ((this.df = !1), Ms(t));
    }
    Af(t) {
      if (0 !== t.button) return;
      const i = this.If(t);
      if (
        ((this.ff = null),
        (this.Rf = !1),
        this.Sf && (this.Sf(), (this.Sf = null)),
        hs())
      ) {
        this.Yf.ownerDocument.documentElement.removeEventListener(
          "mouseleave",
          this.Vf
        );
      }
      if (!this.Ef(t))
        if ((this.$f(i, this.jf.uv), ++this.rf, this.hf && this.rf > 1)) {
          const { Lf: n } = this.Nf(xs(t), this.lf);
          n < 5 && !this.mf && this.$f(i, this.jf.Uf), this.qf();
        } else this.mf || this.$f(i, this.jf.cv);
    }
    Xf() {
      null !== this.cf && (clearTimeout(this.cf), (this.cf = null));
    }
    dv(t) {
      if (null !== this.Of) return;
      const i = t.changedTouches[0];
      (this.Of = i.identifier), (this.Df = Ss(t));
      const n = this.Yf.ownerDocument.documentElement;
      (this.bf = !1),
        (this.pf = !1),
        (this.Pf = !1),
        (this.vf = xs(i)),
        this.kf && (this.kf(), (this.kf = null));
      {
        const i = this.tv.bind(this),
          s = this.av.bind(this);
        (this.kf = () => {
          n.removeEventListener("touchmove", i),
            n.removeEventListener("touchend", s);
        }),
          n.addEventListener("touchmove", i, { passive: !1 }),
          n.addEventListener("touchend", s, { passive: !1 }),
          this.Xf(),
          (this.cf = setTimeout(this.fv.bind(this, t), 240));
      }
      const s = this.If(t, i);
      this.Ff(s, this.jf.vv),
        this._f ||
          ((this.af = 0),
          (this._f = setTimeout(this.Hf.bind(this), 500)),
          (this.uf = xs(i)));
    }
    pv(t) {
      if (0 !== t.button) return;
      const i = this.Yf.ownerDocument.documentElement;
      hs() && i.addEventListener("mouseleave", this.Vf),
        (this.mf = !1),
        (this.ff = xs(t)),
        this.Sf && (this.Sf(), (this.Sf = null));
      {
        const t = this.hv.bind(this),
          n = this.Af.bind(this);
        (this.Sf = () => {
          i.removeEventListener("mousemove", t),
            i.removeEventListener("mouseup", n);
        }),
          i.addEventListener("mousemove", t),
          i.addEventListener("mouseup", n);
      }
      if (((this.Rf = !0), this.Ef(t))) return;
      const n = this.If(t);
      this.$f(n, this.jf.mv),
        this.hf ||
          ((this.rf = 0),
          (this.hf = setTimeout(this.qf.bind(this), 500)),
          (this.lf = xs(t)));
    }
    Zf() {
      this.Yf.addEventListener("mouseenter", this.Kf.bind(this)),
        this.Yf.addEventListener("touchcancel", this.Xf.bind(this));
      {
        const t = this.Yf.ownerDocument,
          i = (t) => {
            this.jf.bv &&
              ((t.composed && this.Yf.contains(t.composedPath()[0])) ||
                (t.target && this.Yf.contains(t.target)) ||
                this.jf.bv());
          };
        (this.gf = () => {
          t.removeEventListener("touchstart", i);
        }),
          (this.wf = () => {
            t.removeEventListener("mousedown", i);
          }),
          t.addEventListener("mousedown", i),
          t.addEventListener("touchstart", i, { passive: !0 });
      }
      ls() &&
        ((this.Mf = () => {
          this.Yf.removeEventListener("dblclick", this.zf);
        }),
        this.Yf.addEventListener("dblclick", this.zf)),
        this.Yf.addEventListener("mouseleave", this.wv.bind(this)),
        this.Yf.addEventListener("touchstart", this.dv.bind(this), {
          passive: !0,
        }),
        bs(this.Yf),
        this.Yf.addEventListener("mousedown", this.pv.bind(this)),
        this.gv(),
        this.Yf.addEventListener("touchmove", () => {}, { passive: !1 });
    }
    gv() {
      (void 0 === this.jf.Mv &&
        void 0 === this.jf.xv &&
        void 0 === this.jf.Sv) ||
        (this.Yf.addEventListener("touchstart", (t) => this.kv(t.touches), {
          passive: !0,
        }),
        this.Yf.addEventListener(
          "touchmove",
          (t) => {
            if (
              2 === t.touches.length &&
              null !== this.yf &&
              void 0 !== this.jf.xv
            ) {
              const i = gs(t.touches[0], t.touches[1]) / this.Cf;
              this.jf.xv(this.yf, i), Ms(t);
            }
          },
          { passive: !1 }
        ),
        this.Yf.addEventListener("touchend", (t) => {
          this.kv(t.touches);
        }));
    }
    kv(t) {
      1 === t.length && (this.Tf = !1),
        2 !== t.length || this.Tf || this.df ? this.yv() : this.Cv(t);
    }
    Cv(t) {
      const i = this.Yf.getBoundingClientRect() || { left: 0, top: 0 };
      (this.yf = {
        nt: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
        st: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
      }),
        (this.Cf = gs(t[0], t[1])),
        void 0 !== this.jf.Mv && this.jf.Mv(),
        this.Xf();
    }
    yv() {
      null !== this.yf &&
        ((this.yf = null), void 0 !== this.jf.Sv && this.jf.Sv());
    }
    wv(t) {
      if ((this.xf && this.xf(), this.Ef(t))) return;
      if (!this.Bf) return;
      const i = this.If(t);
      this.$f(i, this.jf.Tv), (this.Bf = !ls());
    }
    fv(t) {
      const i = ks(t.touches, f(this.Of));
      if (null === i) return;
      const n = this.If(t, i);
      this.Ff(n, this.jf.Pv), (this.bf = !0), (this.df = !0);
    }
    Ef(t) {
      return t.sourceCapabilities &&
        void 0 !== t.sourceCapabilities.firesTouchEvents
        ? t.sourceCapabilities.firesTouchEvents
        : Ss(t) < this.Df + 500;
    }
    Ff(t, i) {
      i && i.call(this.jf, t);
    }
    $f(t, i) {
      i && i.call(this.jf, t);
    }
    If(t, i) {
      const n = i || t,
        s = this.Yf.getBoundingClientRect() || { left: 0, top: 0 };
      return {
        clientX: n.clientX,
        clientY: n.clientY,
        pageX: n.pageX,
        pageY: n.pageY,
        screenX: n.screenX,
        screenY: n.screenY,
        localX: n.clientX - s.left,
        localY: n.clientY - s.top,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        shiftKey: t.shiftKey,
        metaKey: t.metaKey,
        Rv:
          !t.type.startsWith("mouse") &&
          "contextmenu" !== t.type &&
          "click" !== t.type,
        Dv: t.type,
        Ov: n.target,
        Bv: t.view,
        Vv: () => {
          "touchstart" !== t.type && Ms(t);
        },
      };
    }
  }
  function gs(t, i) {
    const n = t.clientX - i.clientX,
      s = t.clientY - i.clientY;
    return Math.sqrt(n * n + s * s);
  }
  function Ms(t) {
    t.cancelable && t.preventDefault();
  }
  function xs(t) {
    return { nt: t.pageX, st: t.pageY };
  }
  function Ss(t) {
    return t.timeStamp || performance.now();
  }
  function ks(t, i) {
    for (let n = 0; n < t.length; ++n) if (t[n].identifier === i) return t[n];
    return null;
  }
  function ys(t) {
    return { jc: t.jc, Av: { wr: t.zv.externalId }, Ev: t.zv.cursorStyle };
  }
  function Cs(t, i, n) {
    for (const s of t) {
      const t = s.gt();
      if (null !== t && t.br) {
        const e = t.br(i, n);
        if (null !== e) return { Bv: s, Av: e };
      }
    }
    return null;
  }
  function Ts(t, i) {
    return (n) => {
      var s, e, r, h;
      return (null !==
        (e = null === (s = n.Dt()) || void 0 === s ? void 0 : s.Ta()) &&
      void 0 !== e
        ? e
        : "") !== i
        ? []
        : null !==
            (h = null === (r = n.ca) || void 0 === r ? void 0 : r.call(n, t)) &&
          void 0 !== h
        ? h
        : [];
    };
  }
  function Ps(t, i, n, s) {
    if (!t.length) return;
    let e = 0;
    const r = n / 2,
      h = t[0].At(s, !0);
    let l = 1 === i ? r - (t[0].Oi() - h / 2) : t[0].Oi() - h / 2 - r;
    l = Math.max(0, l);
    for (let r = 1; r < t.length; r++) {
      const h = t[r],
        a = t[r - 1],
        o = a.At(s, !1),
        _ = h.Oi(),
        u = a.Oi();
      if (1 === i ? _ > u - o : _ < u + o) {
        const s = u - o * i;
        h.Bi(s);
        const r = s - (i * o) / 2;
        if ((1 === i ? r < 0 : r > n) && l > 0) {
          const s = 1 === i ? -1 - r : r - n,
            h = Math.min(s, l);
          for (let n = e; n < t.length; n++) t[n].Bi(t[n].Oi() + i * h);
          l -= h;
        }
      } else (e = r), (l = 1 === i ? u - o - _ : _ - (u + o));
    }
  }
  class Rs {
    constructor(t, i, n, s) {
      (this.Ii = null),
        (this.Iv = null),
        (this.Lv = !1),
        (this.Nv = new Jt(200)),
        (this.Jr = null),
        (this.Fv = 0),
        (this.Wv = !1),
        (this.jv = () => {
          this.Wv || this.tn.Hv().$t().$h();
        }),
        (this.$v = () => {
          this.Wv || this.tn.Hv().$t().$h();
        }),
        (this.tn = t),
        (this.cn = i),
        (this.So = i.layout),
        (this.Oc = n),
        (this.Uv = "left" === s),
        (this.qv = Ts("normal", s)),
        (this.Yv = Ts("top", s)),
        (this.Zv = Ts("bottom", s)),
        (this.Xv = document.createElement("div")),
        (this.Xv.style.height = "100%"),
        (this.Xv.style.overflow = "hidden"),
        (this.Xv.style.width = "25px"),
        (this.Xv.style.left = "0"),
        (this.Xv.style.position = "relative"),
        (this.Kv = ds(this.Xv, Jn({ width: 16, height: 16 }))),
        this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
      const e = this.Kv.canvasElement;
      (e.style.position = "absolute"),
        (e.style.zIndex = "1"),
        (e.style.left = "0"),
        (e.style.top = "0"),
        (this.Gv = ds(this.Xv, Jn({ width: 16, height: 16 }))),
        this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
      const r = this.Gv.canvasElement;
      (r.style.position = "absolute"),
        (r.style.zIndex = "2"),
        (r.style.left = "0"),
        (r.style.top = "0");
      const h = {
        mv: this.Jv.bind(this),
        vv: this.Jv.bind(this),
        lv: this.Qv.bind(this),
        rv: this.Qv.bind(this),
        bv: this.tp.bind(this),
        uv: this.ip.bind(this),
        ov: this.ip.bind(this),
        Uf: this.np.bind(this),
        Wf: this.np.bind(this),
        Jf: this.sp.bind(this),
        Tv: this.ep.bind(this),
      };
      this.rp = new ws(this.Gv.canvasElement, h, {
        sv: () => !this.cn.handleScroll.vertTouchDrag,
        ev: () => !0,
      });
    }
    S() {
      this.rp.S(),
        this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v),
        fs(this.Gv.canvasElement),
        this.Gv.dispose(),
        this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv),
        fs(this.Kv.canvasElement),
        this.Kv.dispose(),
        null !== this.Ii && this.Ii.Xo().p(this),
        (this.Ii = null);
    }
    hp() {
      return this.Xv;
    }
    P() {
      return this.So.fontSize;
    }
    lp() {
      const t = this.Oc.W();
      return this.Jr !== t.R && (this.Nv.ir(), (this.Jr = t.R)), t;
    }
    ap() {
      if (null === this.Ii) return 0;
      let t = 0;
      const i = this.lp(),
        n = f(this.Kv.canvasElement.getContext("2d"));
      n.save();
      const s = this.Ii.ja();
      (n.font = this.op()),
        s.length > 0 &&
          (t = Math.max(
            this.Nv.xi(n, s[0].no),
            this.Nv.xi(n, s[s.length - 1].no)
          ));
      const e = this._p();
      for (let i = e.length; i--; ) {
        const s = this.Nv.xi(n, e[i].Kt());
        s > t && (t = s);
      }
      const r = this.Ii.Ct();
      if (null !== r && null !== this.Iv) {
        const i = this.Ii.pn(1, r),
          s = this.Ii.pn(this.Iv.height - 2, r);
        t = Math.max(
          t,
          this.Nv.xi(
            n,
            this.Ii.Fi(Math.floor(Math.min(i, s)) + 0.11111111111111, r)
          ),
          this.Nv.xi(
            n,
            this.Ii.Fi(Math.ceil(Math.max(i, s)) - 0.11111111111111, r)
          )
        );
      }
      n.restore();
      const h = t || 34;
      return as(Math.ceil(i.C + i.T + i.A + i.I + 5 + h));
    }
    up(t) {
      (null !== this.Iv && Qn(this.Iv, t)) ||
        ((this.Iv = t),
        (this.Wv = !0),
        this.Kv.resizeCanvasElement(t),
        this.Gv.resizeCanvasElement(t),
        (this.Wv = !1),
        (this.Xv.style.width = `${t.width}px`),
        (this.Xv.style.height = `${t.height}px`));
    }
    cp() {
      return f(this.Iv).width;
    }
    Gi(t) {
      this.Ii !== t &&
        (null !== this.Ii && this.Ii.Xo().p(this),
        (this.Ii = t),
        t.Xo().l(this.do.bind(this), this));
    }
    Dt() {
      return this.Ii;
    }
    ir() {
      const t = this.tn.dp();
      this.tn.Hv().$t().I_(t, f(this.Dt()));
    }
    fp(t) {
      if (null === this.Iv) return;
      if (1 !== t) {
        this.vp(), this.Kv.applySuggestedBitmapSize();
        const t = es(this.Kv);
        null !== t &&
          (t.useBitmapCoordinateSpace((t) => {
            this.pp(t), this.Ae(t);
          }),
          this.tn.mp(t, this.Zv),
          this.bp(t),
          this.tn.mp(t, this.qv),
          this.wp(t));
      }
      this.Gv.applySuggestedBitmapSize();
      const i = es(this.Gv);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.gp(i),
        this.tn.mp(i, this.Yv));
    }
    Mp() {
      return this.Kv.bitmapSize;
    }
    xp(t, i, n) {
      const s = this.Mp();
      s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, i, n);
    }
    bt() {
      var t;
      null === (t = this.Ii) || void 0 === t || t.ja();
    }
    Jv(t) {
      if (
        null === this.Ii ||
        this.Ii.Ni() ||
        !this.cn.handleScale.axisPressedMouseMove.price
      )
        return;
      const i = this.tn.Hv().$t(),
        n = this.tn.dp();
      (this.Lv = !0), i.D_(n, this.Ii, t.localY);
    }
    Qv(t) {
      if (null === this.Ii || !this.cn.handleScale.axisPressedMouseMove.price)
        return;
      const i = this.tn.Hv().$t(),
        n = this.tn.dp(),
        s = this.Ii;
      i.O_(n, s, t.localY);
    }
    tp() {
      if (null === this.Ii || !this.cn.handleScale.axisPressedMouseMove.price)
        return;
      const t = this.tn.Hv().$t(),
        i = this.tn.dp(),
        n = this.Ii;
      this.Lv && ((this.Lv = !1), t.B_(i, n));
    }
    ip(t) {
      if (null === this.Ii || !this.cn.handleScale.axisPressedMouseMove.price)
        return;
      const i = this.tn.Hv().$t(),
        n = this.tn.dp();
      (this.Lv = !1), i.B_(n, this.Ii);
    }
    np(t) {
      this.cn.handleScale.axisDoubleClickReset.price && this.ir();
    }
    sp(t) {
      if (null === this.Ii) return;
      !this.tn.Hv().$t().W().handleScale.axisPressedMouseMove.price ||
        this.Ii.gh() ||
        this.Ii.Oo() ||
        this.Sp(1);
    }
    ep(t) {
      this.Sp(0);
    }
    _p() {
      const t = [],
        i = null === this.Ii ? void 0 : this.Ii;
      return (
        ((n) => {
          for (let s = 0; s < n.length; ++s) {
            const e = n[s].Rn(this.tn.dp(), i);
            for (let i = 0; i < e.length; i++) t.push(e[i]);
          }
        })(this.tn.dp().$o()),
        t
      );
    }
    pp({ context: t, bitmapSize: i }) {
      const { width: n, height: s } = i,
        e = this.tn.dp().$t(),
        r = e.q(),
        h = e.md();
      r === h ? Y(t, 0, 0, n, s, r) : K(t, 0, 0, n, s, r, h);
    }
    Ae({ context: t, bitmapSize: i, horizontalPixelRatio: n }) {
      if (null === this.Iv || null === this.Ii || !this.Ii.W().borderVisible)
        return;
      t.fillStyle = this.Ii.W().borderColor;
      const s = Math.max(1, Math.floor(this.lp().C * n));
      let e;
      (e = this.Uv ? i.width - s : 0), t.fillRect(e, 0, s, i.height);
    }
    bp(t) {
      if (null === this.Iv || null === this.Ii) return;
      const i = this.Ii.ja(),
        n = this.Ii.W(),
        s = this.lp(),
        e = this.Uv ? this.Iv.width - s.T : 0;
      n.borderVisible &&
        n.ticksVisible &&
        t.useBitmapCoordinateSpace(
          ({ context: t, horizontalPixelRatio: r, verticalPixelRatio: h }) => {
            t.fillStyle = n.borderColor;
            const l = Math.max(1, Math.floor(h)),
              a = Math.floor(0.5 * h),
              o = Math.round(s.T * r);
            t.beginPath();
            for (const n of i)
              t.rect(Math.floor(e * r), Math.round(n.Ia * h) - a, o, l);
            t.fill();
          }
        ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          var r;
          (t.font = this.op()),
            (t.fillStyle =
              null !== (r = n.textColor) && void 0 !== r
                ? r
                : this.So.textColor),
            (t.textAlign = this.Uv ? "right" : "left"),
            (t.textBaseline = "middle");
          const h = this.Uv ? Math.round(e - s.A) : Math.round(e + s.T + s.A),
            l = i.map((i) => this.Nv.Mi(t, i.no));
          for (let n = i.length; n--; ) {
            const s = i[n];
            t.fillText(s.no, h, s.Ia + l[n]);
          }
        });
    }
    vp() {
      if (null === this.Iv || null === this.Ii) return;
      const t = [],
        i = this.Ii.$o().slice(),
        n = this.tn.dp(),
        s = this.lp();
      this.Ii === n.vr() &&
        this.tn
          .dp()
          .$o()
          .forEach((t) => {
            n.dr(t) && i.push(t);
          });
      const e = this.Ii;
      i.forEach((i) => {
        i.Rn(n, e).forEach((i) => {
          i.Bi(null), i.Vi() && t.push(i);
        });
      }),
        t.forEach((t) => t.Bi(t.ki()));
      this.Ii.W().alignLabels && this.kp(t, s);
    }
    kp(t, i) {
      if (null === this.Iv) return;
      const n = this.Iv.height / 2,
        s = t.filter((t) => t.ki() <= n),
        e = t.filter((t) => t.ki() > n);
      s.sort((t, i) => i.ki() - t.ki()), e.sort((t, i) => t.ki() - i.ki());
      for (const n of t) {
        const t = Math.floor(n.At(i) / 2),
          s = n.ki();
        s > -t && s < t && n.Bi(t),
          s > this.Iv.height - t &&
            s < this.Iv.height + t &&
            n.Bi(this.Iv.height - t);
      }
      Ps(s, 1, this.Iv.height, i), Ps(e, -1, this.Iv.height, i);
    }
    wp(t) {
      if (null === this.Iv) return;
      const i = this._p(),
        n = this.lp(),
        s = this.Uv ? "right" : "left";
      i.forEach((i) => {
        if (i.Ai()) {
          i.gt(f(this.Ii)).X(t, n, this.Nv, s);
        }
      });
    }
    gp(t) {
      if (null === this.Iv || null === this.Ii) return;
      const i = this.tn.Hv().$t(),
        n = [],
        s = this.tn.dp(),
        e = i.Yc().Rn(s, this.Ii);
      e.length && n.push(e);
      const r = this.lp(),
        h = this.Uv ? "right" : "left";
      n.forEach((i) => {
        i.forEach((i) => {
          i.gt(f(this.Ii)).X(t, r, this.Nv, h);
        });
      });
    }
    Sp(t) {
      this.Xv.style.cursor = 1 === t ? "ns-resize" : "default";
    }
    do() {
      const t = this.ap();
      this.Fv < t && this.tn.Hv().$t().Xl(), (this.Fv = t);
    }
    op() {
      return E(this.So.fontSize, this.So.fontFamily);
    }
  }
  function Ds(t, i) {
    var n, s;
    return null !==
      (s = null === (n = t._a) || void 0 === n ? void 0 : n.call(t, i)) &&
      void 0 !== s
      ? s
      : [];
  }
  function Os(t, i) {
    var n, s;
    return null !==
      (s = null === (n = t.Pn) || void 0 === n ? void 0 : n.call(t, i)) &&
      void 0 !== s
      ? s
      : [];
  }
  function Bs(t, i) {
    var n, s;
    return null !==
      (s = null === (n = t.Ji) || void 0 === n ? void 0 : n.call(t, i)) &&
      void 0 !== s
      ? s
      : [];
  }
  function Vs(t, i) {
    var n, s;
    return null !==
      (s = null === (n = t.la) || void 0 === n ? void 0 : n.call(t, i)) &&
      void 0 !== s
      ? s
      : [];
  }
  class As {
    constructor(t, i) {
      (this.Iv = Jn({ width: 0, height: 0 })),
        (this.yp = null),
        (this.Cp = null),
        (this.Tp = null),
        (this.Pp = null),
        (this.Rp = !1),
        (this.Dp = new C()),
        (this.Op = new C()),
        (this.Bp = 0),
        (this.Vp = !1),
        (this.Ap = null),
        (this.zp = !1),
        (this.Ep = null),
        (this.Ip = null),
        (this.Wv = !1),
        (this.jv = () => {
          this.Wv || null === this.Lp || this.$i().$h();
        }),
        (this.$v = () => {
          this.Wv || null === this.Lp || this.$i().$h();
        }),
        (this.Jd = t),
        (this.Lp = i),
        this.Lp.F_().l(this.Np.bind(this), this, !0),
        (this.Fp = document.createElement("td")),
        (this.Fp.style.padding = "0"),
        (this.Fp.style.position = "relative");
      const n = document.createElement("div");
      (n.style.width = "100%"),
        (n.style.height = "100%"),
        (n.style.position = "relative"),
        (n.style.overflow = "hidden"),
        (this.Wp = document.createElement("td")),
        (this.Wp.style.padding = "0"),
        (this.jp = document.createElement("td")),
        (this.jp.style.padding = "0"),
        this.Fp.appendChild(n),
        (this.Kv = ds(n, Jn({ width: 16, height: 16 }))),
        this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
      const s = this.Kv.canvasElement;
      (s.style.position = "absolute"),
        (s.style.zIndex = "1"),
        (s.style.left = "0"),
        (s.style.top = "0"),
        (this.Gv = ds(n, Jn({ width: 16, height: 16 }))),
        this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
      const e = this.Gv.canvasElement;
      (e.style.position = "absolute"),
        (e.style.zIndex = "2"),
        (e.style.left = "0"),
        (e.style.top = "0"),
        (this.Hp = document.createElement("tr")),
        this.Hp.appendChild(this.Wp),
        this.Hp.appendChild(this.Fp),
        this.Hp.appendChild(this.jp),
        this.$p(),
        (this.rp = new ws(this.Gv.canvasElement, this, {
          sv: () => null === this.Ap && !this.Jd.W().handleScroll.vertTouchDrag,
          ev: () => null === this.Ap && !this.Jd.W().handleScroll.horzTouchDrag,
        }));
    }
    S() {
      null !== this.yp && this.yp.S(),
        null !== this.Cp && this.Cp.S(),
        (this.Tp = null),
        this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v),
        fs(this.Gv.canvasElement),
        this.Gv.dispose(),
        this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv),
        fs(this.Kv.canvasElement),
        this.Kv.dispose(),
        null !== this.Lp && this.Lp.F_().p(this),
        this.rp.S();
    }
    dp() {
      return f(this.Lp);
    }
    Up(t) {
      var i, n;
      null !== this.Lp && this.Lp.F_().p(this),
        (this.Lp = t),
        null !== this.Lp &&
          this.Lp.F_().l(As.prototype.Np.bind(this), this, !0),
        this.$p(),
        this.Jd.qp().indexOf(this) === this.Jd.qp().length - 1
          ? ((this.Tp =
              null !== (i = this.Tp) && void 0 !== i
                ? i
                : new cs(this.Fp, this.Jd)),
            this.Tp.bt())
          : (null === (n = this.Tp) || void 0 === n || n.tf(),
            (this.Tp = null));
    }
    Hv() {
      return this.Jd;
    }
    hp() {
      return this.Hp;
    }
    $p() {
      if (null !== this.Lp && (this.Yp(), 0 !== this.$i().wt().length)) {
        if (null !== this.yp) {
          const t = this.Lp.P_();
          this.yp.Gi(f(t));
        }
        if (null !== this.Cp) {
          const t = this.Lp.R_();
          this.Cp.Gi(f(t));
        }
      }
    }
    Zp() {
      null !== this.yp && this.yp.bt(), null !== this.Cp && this.Cp.bt();
    }
    g_() {
      return null !== this.Lp ? this.Lp.g_() : 0;
    }
    M_(t) {
      this.Lp && this.Lp.M_(t);
    }
    Jf(t) {
      if (!this.Lp) return;
      this.Xp();
      const i = t.localX,
        n = t.localY;
      this.Kp(i, n, t);
    }
    mv(t) {
      this.Xp(), this.Gp(), this.Kp(t.localX, t.localY, t);
    }
    Qf(t) {
      var i;
      if (!this.Lp) return;
      this.Xp();
      const n = t.localX,
        s = t.localY;
      this.Kp(n, s, t);
      const e = this.br(n, s);
      this.Jd.Jp(
        null !== (i = null == e ? void 0 : e.Ev) && void 0 !== i ? i : null
      ),
        this.$i().Wc(e && { jc: e.jc, Av: e.Av });
    }
    cv(t) {
      null !== this.Lp && (this.Xp(), this.Qp(t));
    }
    Uf(t) {
      null !== this.Lp && this.tm(this.Op, t);
    }
    Wf(t) {
      this.Uf(t);
    }
    lv(t) {
      this.Xp(), this.im(t), this.Kp(t.localX, t.localY, t);
    }
    uv(t) {
      null !== this.Lp && (this.Xp(), (this.Vp = !1), this.nm(t));
    }
    _v(t) {
      null !== this.Lp && this.Qp(t);
    }
    Pv(t) {
      if (((this.Vp = !0), null === this.Ap)) {
        const i = { x: t.localX, y: t.localY };
        this.sm(i, i, t);
      }
    }
    Tv(t) {
      null !== this.Lp && (this.Xp(), this.Lp.$t().Wc(null), this.rm());
    }
    hm() {
      return this.Dp;
    }
    lm() {
      return this.Op;
    }
    Mv() {
      (this.Bp = 1), this.$i().Un();
    }
    xv(t, i) {
      if (!this.Jd.W().handleScale.pinch) return;
      const n = 5 * (i - this.Bp);
      (this.Bp = i), this.$i().Jc(t.nt, n);
    }
    vv(t) {
      (this.Vp = !1), (this.zp = null !== this.Ap), this.Gp();
      const i = this.$i().Yc();
      null !== this.Ap &&
        i.yt() &&
        ((this.Ep = { x: i.Yt(), y: i.Zt() }),
        (this.Ap = { x: t.localX, y: t.localY }));
    }
    rv(t) {
      if (null === this.Lp) return;
      const i = t.localX,
        n = t.localY;
      if (null === this.Ap) this.im(t);
      else {
        this.zp = !1;
        const s = f(this.Ep),
          e = s.x + (i - this.Ap.x),
          r = s.y + (n - this.Ap.y);
        this.Kp(e, r, t);
      }
    }
    ov(t) {
      0 === this.Hv().W().trackingMode.exitMode && (this.zp = !0),
        this.am(),
        this.nm(t);
    }
    br(t, i) {
      const n = this.Lp;
      return null === n
        ? null
        : (function (t, i, n) {
            const s = t.$o(),
              e = (function (t, i, n) {
                var s, e;
                let r, h;
                for (const o of t) {
                  const t =
                    null !==
                      (e =
                        null === (s = o.fa) || void 0 === s
                          ? void 0
                          : s.call(o, i, n)) && void 0 !== e
                      ? e
                      : [];
                  for (const i of t)
                    (l = i.zOrder),
                      (!(a = null == r ? void 0 : r.zOrder) ||
                        ("top" === l && "top" !== a) ||
                        ("normal" === l && "bottom" === a)) &&
                        ((r = i), (h = o));
                }
                var l, a;
                return r && h ? { zv: r, jc: h } : null;
              })(s, i, n);
            if ("top" === (null == e ? void 0 : e.zv.zOrder)) return ys(e);
            for (const r of s) {
              if (
                e &&
                e.jc === r &&
                "bottom" !== e.zv.zOrder &&
                !e.zv.isBackground
              )
                return ys(e);
              const s = Cs(r.Pn(t), i, n);
              if (null !== s) return { jc: r, Bv: s.Bv, Av: s.Av };
              if (
                e &&
                e.jc === r &&
                "bottom" !== e.zv.zOrder &&
                e.zv.isBackground
              )
                return ys(e);
            }
            return (null == e ? void 0 : e.zv) ? ys(e) : null;
          })(n, t, i);
    }
    om(t, i) {
      f("left" === i ? this.yp : this.Cp).up(
        Jn({ width: t, height: this.Iv.height })
      );
    }
    _m() {
      return this.Iv;
    }
    up(t) {
      Qn(this.Iv, t) ||
        ((this.Iv = t),
        (this.Wv = !0),
        this.Kv.resizeCanvasElement(t),
        this.Gv.resizeCanvasElement(t),
        (this.Wv = !1),
        (this.Fp.style.width = t.width + "px"),
        (this.Fp.style.height = t.height + "px"));
    }
    um() {
      const t = f(this.Lp);
      t.T_(t.P_()), t.T_(t.R_());
      for (const i of t.Ba())
        if (t.dr(i)) {
          const n = i.Dt();
          null !== n && t.T_(n), i.On();
        }
    }
    Mp() {
      return this.Kv.bitmapSize;
    }
    xp(t, i, n) {
      const s = this.Mp();
      s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, i, n);
    }
    fp(t) {
      if (0 === t) return;
      if (null === this.Lp) return;
      if (
        (t > 1 && this.um(),
        null !== this.yp && this.yp.fp(t),
        null !== this.Cp && this.Cp.fp(t),
        1 !== t)
      ) {
        this.Kv.applySuggestedBitmapSize();
        const t = es(this.Kv);
        null !== t &&
          (t.useBitmapCoordinateSpace((t) => {
            this.pp(t);
          }),
          this.Lp &&
            (this.dm(t, Ds),
            this.fm(t),
            this.vm(t),
            this.dm(t, Os),
            this.dm(t, Bs)));
      }
      this.Gv.applySuggestedBitmapSize();
      const i = es(this.Gv);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.pm(i),
        this.dm(i, Vs));
    }
    bm() {
      return this.yp;
    }
    wm() {
      return this.Cp;
    }
    mp(t, i) {
      this.dm(t, i);
    }
    Np() {
      null !== this.Lp && this.Lp.F_().p(this), (this.Lp = null);
    }
    Qp(t) {
      this.tm(this.Dp, t);
    }
    tm(t, i) {
      const n = i.localX,
        s = i.localY;
      t.M() && t.m(this.$i().St().Lu(n), { x: n, y: s }, i);
    }
    pp({ context: t, bitmapSize: i }) {
      const { width: n, height: s } = i,
        e = this.$i(),
        r = e.q(),
        h = e.md();
      r === h ? Y(t, 0, 0, n, s, h) : K(t, 0, 0, n, s, r, h);
    }
    fm(t) {
      const i = f(this.Lp).W_().Uh().gt();
      null !== i && i.X(t, !1);
    }
    vm(t) {
      const i = this.$i().qc();
      this.gm(t, Os, vs, i), this.gm(t, Os, ps, i);
    }
    pm(t) {
      this.gm(t, Os, ps, this.$i().Yc());
    }
    dm(t, i) {
      const n = f(this.Lp).$o();
      for (const s of n) this.gm(t, i, vs, s);
      for (const s of n) this.gm(t, i, ps, s);
    }
    gm(t, i, n, s) {
      const e = f(this.Lp),
        r = e.$t().Fc(),
        h = null !== r && r.jc === s,
        l = null !== r && h && void 0 !== r.Av ? r.Av.gr : void 0;
      ms(i, (i) => n(i, t, h, l), s, e);
    }
    Yp() {
      if (null === this.Lp) return;
      const t = this.Jd,
        i = this.Lp.P_().W().visible,
        n = this.Lp.R_().W().visible;
      i ||
        null === this.yp ||
        (this.Wp.removeChild(this.yp.hp()), this.yp.S(), (this.yp = null)),
        n ||
          null === this.Cp ||
          (this.jp.removeChild(this.Cp.hp()), this.Cp.S(), (this.Cp = null));
      const s = t.$t()._d();
      i &&
        null === this.yp &&
        ((this.yp = new Rs(this, t.W(), s, "left")),
        this.Wp.appendChild(this.yp.hp())),
        n &&
          null === this.Cp &&
          ((this.Cp = new Rs(this, t.W(), s, "right")),
          this.jp.appendChild(this.Cp.hp()));
    }
    Mm(t) {
      return (t.Rv && this.Vp) || null !== this.Ap;
    }
    xm(t) {
      return Math.max(0, Math.min(t, this.Iv.width - 1));
    }
    Sm(t) {
      return Math.max(0, Math.min(t, this.Iv.height - 1));
    }
    Kp(t, i, n) {
      this.$i().hd(this.xm(t), this.Sm(i), n, f(this.Lp));
    }
    rm() {
      this.$i().ad();
    }
    am() {
      this.zp && ((this.Ap = null), this.rm());
    }
    sm(t, i, n) {
      (this.Ap = t), (this.zp = !1), this.Kp(i.x, i.y, n);
      const s = this.$i().Yc();
      this.Ep = { x: s.Yt(), y: s.Zt() };
    }
    $i() {
      return this.Jd.$t();
    }
    nm(t) {
      if (!this.Rp) return;
      const i = this.$i(),
        n = this.dp();
      if (
        (i.z_(n, n.vn()),
        (this.Pp = null),
        (this.Rp = !1),
        i.sd(),
        null !== this.Ip)
      ) {
        const t = performance.now(),
          n = i.St();
        this.Ip.Dr(n.ju(), t), this.Ip.Ju(t) || i.Zn(this.Ip);
      }
    }
    Xp() {
      this.Ap = null;
    }
    Gp() {
      if (!this.Lp) return;
      if (
        (this.$i().Un(),
        document.activeElement !== document.body &&
          document.activeElement !== document.documentElement)
      )
        f(document.activeElement).blur();
      else {
        const t = document.getSelection();
        null !== t && t.removeAllRanges();
      }
      !this.Lp.vn().Ni() && this.$i().St().Ni();
    }
    im(t) {
      if (null === this.Lp) return;
      const i = this.$i(),
        n = i.St();
      if (n.Ni()) return;
      const s = this.Jd.W(),
        e = s.handleScroll,
        r = s.kineticScroll;
      if (
        (!e.pressedMouseMove || t.Rv) &&
        ((!e.horzTouchDrag && !e.vertTouchDrag) || !t.Rv)
      )
        return;
      const h = this.Lp.vn(),
        l = performance.now();
      if (
        (null !== this.Pp ||
          this.Mm(t) ||
          (this.Pp = {
            x: t.clientX,
            y: t.clientY,
            Od: l,
            km: t.localX,
            ym: t.localY,
          }),
        null !== this.Pp &&
          !this.Rp &&
          (this.Pp.x !== t.clientX || this.Pp.y !== t.clientY))
      ) {
        if ((t.Rv && r.touch) || (!t.Rv && r.mouse)) {
          const t = n.he();
          (this.Ip = new us(0.2 / t, 7 / t, 0.997, 15 / t)),
            this.Ip.qd(n.ju(), this.Pp.Od);
        } else this.Ip = null;
        h.Ni() || i.V_(this.Lp, h, t.localY), i.td(t.localX), (this.Rp = !0);
      }
      this.Rp &&
        (h.Ni() || i.A_(this.Lp, h, t.localY),
        i.nd(t.localX),
        null !== this.Ip && this.Ip.qd(n.ju(), l));
    }
  }
  class zs {
    constructor(t, i, n, s, e) {
      (this.ft = !0),
        (this.Iv = Jn({ width: 0, height: 0 })),
        (this.jv = () => this.fp(3)),
        (this.Uv = "left" === t),
        (this.Oc = n._d),
        (this.cn = i),
        (this.Cm = s),
        (this.Tm = e),
        (this.Xv = document.createElement("div")),
        (this.Xv.style.width = "25px"),
        (this.Xv.style.height = "100%"),
        (this.Xv.style.overflow = "hidden"),
        (this.Kv = ds(this.Xv, Jn({ width: 16, height: 16 }))),
        this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    }
    S() {
      this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv),
        fs(this.Kv.canvasElement),
        this.Kv.dispose();
    }
    hp() {
      return this.Xv;
    }
    _m() {
      return this.Iv;
    }
    up(t) {
      Qn(this.Iv, t) ||
        ((this.Iv = t),
        this.Kv.resizeCanvasElement(t),
        (this.Xv.style.width = `${t.width}px`),
        (this.Xv.style.height = `${t.height}px`),
        (this.ft = !0));
    }
    fp(t) {
      if (t < 3 && !this.ft) return;
      if (0 === this.Iv.width || 0 === this.Iv.height) return;
      (this.ft = !1), this.Kv.applySuggestedBitmapSize();
      const i = es(this.Kv);
      null !== i &&
        i.useBitmapCoordinateSpace((t) => {
          this.pp(t), this.Ae(t);
        });
    }
    Mp() {
      return this.Kv.bitmapSize;
    }
    xp(t, i, n) {
      const s = this.Mp();
      s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, i, n);
    }
    Ae({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (!this.Cm()) return;
      t.fillStyle = this.cn.timeScale.borderColor;
      const e = Math.floor(this.Oc.W().C * n),
        r = Math.floor(this.Oc.W().C * s),
        h = this.Uv ? i.width - e : 0;
      t.fillRect(h, 0, e, r);
    }
    pp({ context: t, bitmapSize: i }) {
      Y(t, 0, 0, i.width, i.height, this.Tm());
    }
  }
  function Es(t) {
    return (i) => {
      var n, s;
      return null !==
        (s = null === (n = i.da) || void 0 === n ? void 0 : n.call(i, t)) &&
        void 0 !== s
        ? s
        : [];
    };
  }
  const Is = Es("normal"),
    Ls = Es("top"),
    Ns = Es("bottom");
  class Fs {
    constructor(t, i) {
      (this.Pm = null),
        (this.Rm = null),
        (this.k = null),
        (this.Dm = !1),
        (this.Iv = Jn({ width: 0, height: 0 })),
        (this.Om = new C()),
        (this.Nv = new Jt(5)),
        (this.Wv = !1),
        (this.jv = () => {
          this.Wv || this.Jd.$t().$h();
        }),
        (this.$v = () => {
          this.Wv || this.Jd.$t().$h();
        }),
        (this.Jd = t),
        (this.U_ = i),
        (this.cn = t.W().layout),
        (this.Zd = document.createElement("tr")),
        (this.Bm = document.createElement("td")),
        (this.Bm.style.padding = "0"),
        (this.Vm = document.createElement("td")),
        (this.Vm.style.padding = "0"),
        (this.Xv = document.createElement("td")),
        (this.Xv.style.height = "25px"),
        (this.Xv.style.padding = "0"),
        (this.Am = document.createElement("div")),
        (this.Am.style.width = "100%"),
        (this.Am.style.height = "100%"),
        (this.Am.style.position = "relative"),
        (this.Am.style.overflow = "hidden"),
        this.Xv.appendChild(this.Am),
        (this.Kv = ds(this.Am, Jn({ width: 16, height: 16 }))),
        this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
      const n = this.Kv.canvasElement;
      (n.style.position = "absolute"),
        (n.style.zIndex = "1"),
        (n.style.left = "0"),
        (n.style.top = "0"),
        (this.Gv = ds(this.Am, Jn({ width: 16, height: 16 }))),
        this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
      const s = this.Gv.canvasElement;
      (s.style.position = "absolute"),
        (s.style.zIndex = "2"),
        (s.style.left = "0"),
        (s.style.top = "0"),
        this.Zd.appendChild(this.Bm),
        this.Zd.appendChild(this.Xv),
        this.Zd.appendChild(this.Vm),
        this.zm(),
        this.Jd.$t().w_().l(this.zm.bind(this), this),
        (this.rp = new ws(this.Gv.canvasElement, this, {
          sv: () => !0,
          ev: () => !this.Jd.W().handleScroll.horzTouchDrag,
        }));
    }
    S() {
      this.rp.S(),
        null !== this.Pm && this.Pm.S(),
        null !== this.Rm && this.Rm.S(),
        this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v),
        fs(this.Gv.canvasElement),
        this.Gv.dispose(),
        this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv),
        fs(this.Kv.canvasElement),
        this.Kv.dispose();
    }
    hp() {
      return this.Zd;
    }
    Em() {
      return this.Pm;
    }
    Im() {
      return this.Rm;
    }
    mv(t) {
      if (this.Dm) return;
      this.Dm = !0;
      const i = this.Jd.$t();
      !i.St().Ni() &&
        this.Jd.W().handleScale.axisPressedMouseMove.time &&
        i.Gc(t.localX);
    }
    vv(t) {
      this.mv(t);
    }
    bv() {
      const t = this.Jd.$t();
      !t.St().Ni() &&
        this.Dm &&
        ((this.Dm = !1),
        this.Jd.W().handleScale.axisPressedMouseMove.time && t.rd());
    }
    lv(t) {
      const i = this.Jd.$t();
      !i.St().Ni() &&
        this.Jd.W().handleScale.axisPressedMouseMove.time &&
        i.ed(t.localX);
    }
    rv(t) {
      this.lv(t);
    }
    uv() {
      this.Dm = !1;
      const t = this.Jd.$t();
      (t.St().Ni() && !this.Jd.W().handleScale.axisPressedMouseMove.time) ||
        t.rd();
    }
    ov() {
      this.uv();
    }
    Uf() {
      this.Jd.W().handleScale.axisDoubleClickReset.time && this.Jd.$t().Kn();
    }
    Wf() {
      this.Uf();
    }
    Jf() {
      this.Jd.$t().W().handleScale.axisPressedMouseMove.time && this.Sp(1);
    }
    Tv() {
      this.Sp(0);
    }
    _m() {
      return this.Iv;
    }
    Lm() {
      return this.Om;
    }
    Nm(t, i, n) {
      Qn(this.Iv, t) ||
        ((this.Iv = t),
        (this.Wv = !0),
        this.Kv.resizeCanvasElement(t),
        this.Gv.resizeCanvasElement(t),
        (this.Wv = !1),
        (this.Xv.style.width = `${t.width}px`),
        (this.Xv.style.height = `${t.height}px`),
        this.Om.m(t)),
        null !== this.Pm && this.Pm.up(Jn({ width: i, height: t.height })),
        null !== this.Rm && this.Rm.up(Jn({ width: n, height: t.height }));
    }
    Fm() {
      const t = this.Wm();
      return Math.ceil(t.C + t.T + t.P + t.L + t.V + t.jm);
    }
    bt() {
      this.Jd.$t().St().ja();
    }
    Mp() {
      return this.Kv.bitmapSize;
    }
    xp(t, i, n) {
      const s = this.Mp();
      s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, i, n);
    }
    fp(t) {
      if (0 === t) return;
      if (1 !== t) {
        this.Kv.applySuggestedBitmapSize();
        const i = es(this.Kv);
        null !== i &&
          (i.useBitmapCoordinateSpace((t) => {
            this.pp(t), this.Ae(t), this.Hm(i, Ns);
          }),
          this.bp(i),
          this.Hm(i, Is)),
          null !== this.Pm && this.Pm.fp(t),
          null !== this.Rm && this.Rm.fp(t);
      }
      this.Gv.applySuggestedBitmapSize();
      const i = es(this.Gv);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.$m([...this.Jd.$t().wt(), this.Jd.$t().Yc()], i),
        this.Hm(i, Ls));
    }
    Hm(t, i) {
      const n = this.Jd.$t().wt();
      for (const s of n) ms(i, (i) => vs(i, t, !1, void 0), s, void 0);
      for (const s of n) ms(i, (i) => ps(i, t, !1, void 0), s, void 0);
    }
    pp({ context: t, bitmapSize: i }) {
      Y(t, 0, 0, i.width, i.height, this.Jd.$t().md());
    }
    Ae({ context: t, bitmapSize: i, verticalPixelRatio: n }) {
      if (this.Jd.W().timeScale.borderVisible) {
        t.fillStyle = this.Um();
        const s = Math.max(1, Math.floor(this.Wm().C * n));
        t.fillRect(0, 0, i.width, s);
      }
    }
    bp(t) {
      const i = this.Jd.$t().St(),
        n = i.ja();
      if (!n || 0 === n.length) return;
      const s = this.U_.maxTickMarkWeight(n),
        e = this.Wm(),
        r = i.W();
      r.borderVisible &&
        r.ticksVisible &&
        t.useBitmapCoordinateSpace(
          ({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) => {
            (t.strokeStyle = this.Um()), (t.fillStyle = this.Um());
            const r = Math.max(1, Math.floor(i)),
              h = Math.floor(0.5 * i);
            t.beginPath();
            const l = Math.round(e.T * s);
            for (let s = n.length; s--; ) {
              const e = Math.round(n[s].coord * i);
              t.rect(e - h, 0, r, l);
            }
            t.fill();
          }
        ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          const i = e.C + e.T + e.L + e.P / 2;
          (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            (t.fillStyle = this.$()),
            (t.font = this.op());
          for (const e of n)
            if (e.weight < s) {
              const n = e.needAlignCoordinate
                ? this.qm(t, e.coord, e.label)
                : e.coord;
              t.fillText(e.label, n, i);
            }
          this.Jd.W().timeScale.allowBoldLabels && (t.font = this.Ym());
          for (const e of n)
            if (e.weight >= s) {
              const n = e.needAlignCoordinate
                ? this.qm(t, e.coord, e.label)
                : e.coord;
              t.fillText(e.label, n, i);
            }
        });
    }
    qm(t, i, n) {
      const s = this.Nv.xi(t, n),
        e = s / 2,
        r = Math.floor(i - e) + 0.5;
      return (
        r < 0
          ? (i += Math.abs(0 - r))
          : r + s > this.Iv.width && (i -= Math.abs(this.Iv.width - (r + s))),
        i
      );
    }
    $m(t, i) {
      const n = this.Wm();
      for (const s of t) for (const t of s.Qi()) t.gt().X(i, n);
    }
    Um() {
      return this.Jd.W().timeScale.borderColor;
    }
    $() {
      return this.cn.textColor;
    }
    j() {
      return this.cn.fontSize;
    }
    op() {
      return E(this.j(), this.cn.fontFamily);
    }
    Ym() {
      return E(this.j(), this.cn.fontFamily, "bold");
    }
    Wm() {
      null === this.k &&
        (this.k = {
          C: 1,
          N: NaN,
          L: NaN,
          V: NaN,
          ji: NaN,
          T: 5,
          P: NaN,
          R: "",
          Wi: new Jt(),
          jm: 0,
        });
      const t = this.k,
        i = this.op();
      if (t.R !== i) {
        const n = this.j();
        (t.P = n),
          (t.R = i),
          (t.L = (3 * n) / 12),
          (t.V = (3 * n) / 12),
          (t.ji = (9 * n) / 12),
          (t.N = 0),
          (t.jm = (4 * n) / 12),
          t.Wi.ir();
      }
      return this.k;
    }
    Sp(t) {
      this.Xv.style.cursor = 1 === t ? "ew-resize" : "default";
    }
    zm() {
      const t = this.Jd.$t(),
        i = t.W();
      i.leftPriceScale.visible ||
        null === this.Pm ||
        (this.Bm.removeChild(this.Pm.hp()), this.Pm.S(), (this.Pm = null)),
        i.rightPriceScale.visible ||
          null === this.Rm ||
          (this.Vm.removeChild(this.Rm.hp()), this.Rm.S(), (this.Rm = null));
      const n = { _d: this.Jd.$t()._d() },
        s = () => i.leftPriceScale.borderVisible && t.St().W().borderVisible,
        e = () => t.md();
      i.leftPriceScale.visible &&
        null === this.Pm &&
        ((this.Pm = new zs("left", i, n, s, e)),
        this.Bm.appendChild(this.Pm.hp())),
        i.rightPriceScale.visible &&
          null === this.Rm &&
          ((this.Rm = new zs("right", i, n, s, e)),
          this.Vm.appendChild(this.Rm.hp()));
    }
  }
  const Ws =
    !!rs &&
    !!navigator.userAgentData &&
    navigator.userAgentData.brands.some((t) => t.brand.includes("Chromium")) &&
    !!rs &&
    ((
      null ===
        (js =
          null === navigator || void 0 === navigator
            ? void 0
            : navigator.userAgentData) || void 0 === js
        ? void 0
        : js.platform
    )
      ? "Windows" === navigator.userAgentData.platform
      : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
  var js;
  class Hs {
    constructor(t, i, n) {
      var s;
      (this.Zm = []),
        (this.Xm = 0),
        (this.ro = 0),
        (this.o_ = 0),
        (this.Km = 0),
        (this.Gm = 0),
        (this.Jm = null),
        (this.Qm = !1),
        (this.Dp = new C()),
        (this.Op = new C()),
        (this.Pc = new C()),
        (this.tb = null),
        (this.ib = null),
        (this.Gd = t),
        (this.cn = i),
        (this.U_ = n),
        (this.Zd = document.createElement("div")),
        this.Zd.classList.add("tv-lightweight-charts"),
        (this.Zd.style.overflow = "hidden"),
        (this.Zd.style.direction = "ltr"),
        (this.Zd.style.width = "100%"),
        (this.Zd.style.height = "100%"),
        ((s = this.Zd).style.userSelect = "none"),
        (s.style.webkitUserSelect = "none"),
        (s.style.msUserSelect = "none"),
        (s.style.MozUserSelect = "none"),
        (s.style.webkitTapHighlightColor = "transparent"),
        (this.nb = document.createElement("table")),
        this.nb.setAttribute("cellspacing", "0"),
        this.Zd.appendChild(this.nb),
        (this.sb = this.eb.bind(this)),
        $s(this.cn) && this.rb(!0),
        (this.$i = new Vn(this.Dc.bind(this), this.cn, n)),
        this.$t().Zc().l(this.hb.bind(this), this),
        (this.lb = new Fs(this, this.U_)),
        this.nb.appendChild(this.lb.hp());
      const e = i.autoSize && this.ab();
      let r = this.cn.width,
        h = this.cn.height;
      if (e || 0 === r || 0 === h) {
        const i = t.getBoundingClientRect();
        (r = r || i.width), (h = h || i.height);
      }
      this.ob(r, h),
        this._b(),
        t.appendChild(this.Zd),
        this.ub(),
        this.$i.St().sc().l(this.$i.Xl.bind(this.$i), this),
        this.$i.w_().l(this.$i.Xl.bind(this.$i), this);
    }
    $t() {
      return this.$i;
    }
    W() {
      return this.cn;
    }
    qp() {
      return this.Zm;
    }
    cb() {
      return this.lb;
    }
    S() {
      this.rb(!1),
        0 !== this.Xm && window.cancelAnimationFrame(this.Xm),
        this.$i.Zc().p(this),
        this.$i.St().sc().p(this),
        this.$i.w_().p(this),
        this.$i.S();
      for (const t of this.Zm)
        this.nb.removeChild(t.hp()), t.hm().p(this), t.lm().p(this), t.S();
      (this.Zm = []),
        f(this.lb).S(),
        null !== this.Zd.parentElement &&
          this.Zd.parentElement.removeChild(this.Zd),
        this.Pc.S(),
        this.Dp.S(),
        this.Op.S(),
        this.fb();
    }
    ob(t, i, n = !1) {
      if (this.ro === i && this.o_ === t) return;
      const s = (function (t) {
        const i = Math.floor(t.width),
          n = Math.floor(t.height);
        return Jn({ width: i - (i % 2), height: n - (n % 2) });
      })(Jn({ width: t, height: i }));
      (this.ro = s.height), (this.o_ = s.width);
      const e = this.ro + "px",
        r = this.o_ + "px";
      (f(this.Zd).style.height = e),
        (f(this.Zd).style.width = r),
        (this.nb.style.height = e),
        (this.nb.style.width = r),
        n ? this.pb(lt.es(), performance.now()) : this.$i.Xl();
    }
    fp(t) {
      void 0 === t && (t = lt.es());
      for (let i = 0; i < this.Zm.length; i++) this.Zm[i].fp(t.Hn(i).Fn);
      this.cn.timeScale.visible && this.lb.fp(t.jn());
    }
    Hh(t) {
      const i = $s(this.cn);
      this.$i.Hh(t);
      const n = $s(this.cn);
      n !== i && this.rb(n), this.ub(), this.mb(t);
    }
    hm() {
      return this.Dp;
    }
    lm() {
      return this.Op;
    }
    Zc() {
      return this.Pc;
    }
    bb() {
      null !== this.Jm &&
        (this.pb(this.Jm, performance.now()), (this.Jm = null));
      const t = this.wb(null),
        i = document.createElement("canvas");
      (i.width = t.width), (i.height = t.height);
      const n = f(i.getContext("2d"));
      return this.wb(n), i;
    }
    gb(t) {
      if ("left" === t && !this.Mb()) return 0;
      if ("right" === t && !this.xb()) return 0;
      if (0 === this.Zm.length) return 0;
      return f("left" === t ? this.Zm[0].bm() : this.Zm[0].wm()).cp();
    }
    Sb() {
      return this.cn.autoSize && null !== this.tb;
    }
    kb() {
      return this.Zd;
    }
    Jp(t) {
      (this.ib = t),
        this.ib
          ? this.kb().style.setProperty("cursor", t)
          : this.kb().style.removeProperty("cursor");
    }
    yb() {
      return this.ib;
    }
    Cb() {
      return d(this.Zm[0])._m();
    }
    mb(t) {
      (void 0 !== t.autoSize ||
        !this.tb ||
        (void 0 === t.width && void 0 === t.height)) &&
        (t.autoSize && !this.tb && this.ab(),
        !1 === t.autoSize && null !== this.tb && this.fb(),
        t.autoSize ||
          (void 0 === t.width && void 0 === t.height) ||
          this.ob(t.width || this.o_, t.height || this.ro));
    }
    wb(t) {
      let i = 0,
        n = 0;
      const s = this.Zm[0],
        e = (i, n) => {
          let s = 0;
          for (let e = 0; e < this.Zm.length; e++) {
            const r = this.Zm[e],
              h = f("left" === i ? r.bm() : r.wm()),
              l = h.Mp();
            null !== t && h.xp(t, n, s), (s += l.height);
          }
        };
      if (this.Mb()) {
        e("left", 0);
        i += f(s.bm()).Mp().width;
      }
      for (let s = 0; s < this.Zm.length; s++) {
        const e = this.Zm[s],
          r = e.Mp();
        null !== t && e.xp(t, i, n), (n += r.height);
      }
      if (((i += s.Mp().width), this.xb())) {
        e("right", i);
        i += f(s.wm()).Mp().width;
      }
      const r = (i, n, s) => {
        f("left" === i ? this.lb.Em() : this.lb.Im()).xp(f(t), n, s);
      };
      if (this.cn.timeScale.visible) {
        const i = this.lb.Mp();
        if (null !== t) {
          let e = 0;
          this.Mb() && (r("left", e, n), (e = f(s.bm()).Mp().width)),
            this.lb.xp(t, e, n),
            (e += i.width),
            this.xb() && r("right", e, n);
        }
        n += i.height;
      }
      return Jn({ width: i, height: n });
    }
    Tb() {
      let t = 0,
        i = 0,
        n = 0;
      for (const s of this.Zm)
        this.Mb() &&
          (i = Math.max(
            i,
            f(s.bm()).ap(),
            this.cn.leftPriceScale.minimumWidth
          )),
          this.xb() &&
            (n = Math.max(
              n,
              f(s.wm()).ap(),
              this.cn.rightPriceScale.minimumWidth
            )),
          (t += s.g_());
      (i = as(i)), (n = as(n));
      const s = this.o_,
        e = this.ro,
        r = Math.max(s - i - n, 0),
        h = this.cn.timeScale.visible;
      let l = h ? Math.max(this.lb.Fm(), this.cn.timeScale.minimumHeight) : 0;
      var a;
      l = (a = l) + (a % 2);
      const o = 0 + l,
        _ = e < o ? 0 : e - o,
        u = _ / t;
      let c = 0;
      for (let t = 0; t < this.Zm.length; ++t) {
        const s = this.Zm[t];
        s.Up(this.$i.Uc()[t]);
        let e = 0,
          h = 0;
        (h = t === this.Zm.length - 1 ? _ - c : Math.round(s.g_() * u)),
          (e = Math.max(h, 2)),
          (c += e),
          s.up(Jn({ width: r, height: e })),
          this.Mb() && s.om(i, "left"),
          this.xb() && s.om(n, "right"),
          s.dp() && this.$i.Xc(s.dp(), e);
      }
      this.lb.Nm(Jn({ width: h ? r : 0, height: l }), h ? i : 0, h ? n : 0),
        this.$i.x_(r),
        this.Km !== i && (this.Km = i),
        this.Gm !== n && (this.Gm = n);
    }
    rb(t) {
      t
        ? this.Zd.addEventListener("wheel", this.sb, { passive: !1 })
        : this.Zd.removeEventListener("wheel", this.sb);
    }
    Pb(t) {
      switch (t.deltaMode) {
        case t.DOM_DELTA_PAGE:
          return 120;
        case t.DOM_DELTA_LINE:
          return 32;
      }
      return Ws ? 1 / window.devicePixelRatio : 1;
    }
    eb(t) {
      if (
        !(
          (0 !== t.deltaX && this.cn.handleScroll.mouseWheel) ||
          (0 !== t.deltaY && this.cn.handleScale.mouseWheel)
        )
      )
        return;
      const i = this.Pb(t),
        n = (i * t.deltaX) / 100,
        s = (-i * t.deltaY) / 100;
      if (
        (t.cancelable && t.preventDefault(),
        0 !== s && this.cn.handleScale.mouseWheel)
      ) {
        const i = Math.sign(s) * Math.min(1, Math.abs(s)),
          n = t.clientX - this.Zd.getBoundingClientRect().left;
        this.$t().Jc(n, i);
      }
      0 !== n && this.cn.handleScroll.mouseWheel && this.$t().Qc(-80 * n);
    }
    pb(t, i) {
      var n;
      const s = t.jn();
      3 === s && this.Rb(),
        (3 !== s && 2 !== s) ||
          (this.Db(t),
          this.Ob(t, i),
          this.lb.bt(),
          this.Zm.forEach((t) => {
            t.Zp();
          }),
          3 === (null === (n = this.Jm) || void 0 === n ? void 0 : n.jn()) &&
            (this.Jm.ts(t),
            this.Rb(),
            this.Db(this.Jm),
            this.Ob(this.Jm, i),
            (t = this.Jm),
            (this.Jm = null))),
        this.fp(t);
    }
    Ob(t, i) {
      for (const n of t.Qn()) this.ns(n, i);
    }
    Db(t) {
      const i = this.$i.Uc();
      for (let n = 0; n < i.length; n++) t.Hn(n).Wn && i[n].L_();
    }
    ns(t, i) {
      const n = this.$i.St();
      switch (t.qn) {
        case 0:
          n.rc();
          break;
        case 1:
          n.hc(t.Ot);
          break;
        case 2:
          n.Gn(t.Ot);
          break;
        case 3:
          n.Jn(t.Ot);
          break;
        case 4:
          n.Uu();
          break;
        case 5:
          t.Ot.Ju(i) || n.Jn(t.Ot.Qu(i));
      }
    }
    Dc(t) {
      null !== this.Jm ? this.Jm.ts(t) : (this.Jm = t),
        this.Qm ||
          ((this.Qm = !0),
          (this.Xm = window.requestAnimationFrame((t) => {
            if (((this.Qm = !1), (this.Xm = 0), null !== this.Jm)) {
              const i = this.Jm;
              (this.Jm = null), this.pb(i, t);
              for (const n of i.Qn())
                if (5 === n.qn && !n.Ot.Ju(t)) {
                  this.$t().Zn(n.Ot);
                  break;
                }
            }
          })));
    }
    Rb() {
      this._b();
    }
    _b() {
      const t = this.$i.Uc(),
        i = t.length,
        n = this.Zm.length;
      for (let t = i; t < n; t++) {
        const t = d(this.Zm.pop());
        this.nb.removeChild(t.hp()), t.hm().p(this), t.lm().p(this), t.S();
      }
      for (let s = n; s < i; s++) {
        const i = new As(this, t[s]);
        i.hm().l(this.Bb.bind(this), this),
          i.lm().l(this.Vb.bind(this), this),
          this.Zm.push(i),
          this.nb.insertBefore(i.hp(), this.lb.hp());
      }
      for (let n = 0; n < i; n++) {
        const i = t[n],
          s = this.Zm[n];
        s.dp() !== i ? s.Up(i) : s.$p();
      }
      this.ub(), this.Tb();
    }
    Ab(t, i, n) {
      var s;
      const e = new Map();
      if (null !== t) {
        this.$i.wt().forEach((i) => {
          const n = i.zn().hl(t);
          null !== n && e.set(i, n);
        });
      }
      let r;
      if (null !== t) {
        const i =
          null === (s = this.$i.St().Ui(t)) || void 0 === s
            ? void 0
            : s.originalTime;
        void 0 !== i && (r = i);
      }
      const h = this.$t().Fc(),
        l = null !== h && h.jc instanceof Yi ? h.jc : void 0,
        a = null !== h && void 0 !== h.Av ? h.Av.wr : void 0;
      return {
        zb: r,
        se: null != t ? t : void 0,
        Eb: null != i ? i : void 0,
        Ib: l,
        Lb: e,
        Nb: a,
        Fb: null != n ? n : void 0,
      };
    }
    Bb(t, i, n) {
      this.Dp.m(() => this.Ab(t, i, n));
    }
    Vb(t, i, n) {
      this.Op.m(() => this.Ab(t, i, n));
    }
    hb(t, i, n) {
      this.Pc.m(() => this.Ab(t, i, n));
    }
    ub() {
      const t = this.cn.timeScale.visible ? "" : "none";
      this.lb.hp().style.display = t;
    }
    Mb() {
      return this.Zm[0].dp().P_().W().visible;
    }
    xb() {
      return this.Zm[0].dp().R_().W().visible;
    }
    ab() {
      return (
        "ResizeObserver" in window &&
        ((this.tb = new ResizeObserver((t) => {
          const i = t.find((t) => t.target === this.Gd);
          i && this.ob(i.contentRect.width, i.contentRect.height);
        })),
        this.tb.observe(this.Gd, { box: "border-box" }),
        !0)
      );
    }
    fb() {
      null !== this.tb && this.tb.disconnect(), (this.tb = null);
    }
  }
  function $s(t) {
    return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
  }
  function Us(t) {
    return (
      (function (t) {
        return void 0 !== t.open;
      })(t) ||
      (function (t) {
        return void 0 !== t.value;
      })(t)
    );
  }
  function qs(t, i) {
    var n = {};
    for (var s in t)
      Object.prototype.hasOwnProperty.call(t, s) &&
        i.indexOf(s) < 0 &&
        (n[s] = t[s]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var e = 0;
      for (s = Object.getOwnPropertySymbols(t); e < s.length; e++)
        i.indexOf(s[e]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, s[e]) &&
          (n[s[e]] = t[s[e]]);
    }
    return n;
  }
  function Ys(t, i, n, s) {
    const e = n.value,
      r = { se: i, ot: t, Ot: [e, e, e, e], zb: s };
    return void 0 !== n.color && (r.O = n.color), r;
  }
  function Zs(t, i, n, s) {
    const e = n.value,
      r = { se: i, ot: t, Ot: [e, e, e, e], zb: s };
    return (
      void 0 !== n.lineColor && (r.lt = n.lineColor),
      void 0 !== n.topColor && (r.Ts = n.topColor),
      void 0 !== n.bottomColor && (r.Ps = n.bottomColor),
      r
    );
  }
  function Xs(t, i, n, s) {
    const e = n.value,
      r = { se: i, ot: t, Ot: [e, e, e, e], zb: s };
    return (
      void 0 !== n.topLineColor && (r.Pe = n.topLineColor),
      void 0 !== n.bottomLineColor && (r.Re = n.bottomLineColor),
      void 0 !== n.topFillColor1 && (r.Se = n.topFillColor1),
      void 0 !== n.topFillColor2 && (r.ke = n.topFillColor2),
      void 0 !== n.bottomFillColor1 && (r.ye = n.bottomFillColor1),
      void 0 !== n.bottomFillColor2 && (r.Ce = n.bottomFillColor2),
      r
    );
  }
  function Ks(t, i, n, s) {
    const e = { se: i, ot: t, Ot: [n.open, n.high, n.low, n.close], zb: s };
    return void 0 !== n.color && (e.O = n.color), e;
  }
  function Gs(t, i, n, s) {
    const e = { se: i, ot: t, Ot: [n.open, n.high, n.low, n.close], zb: s };
    return (
      void 0 !== n.color && (e.O = n.color),
      void 0 !== n.borderColor && (e.Bt = n.borderColor),
      void 0 !== n.wickColor && (e.Zh = n.wickColor),
      e
    );
  }
  function Js(t, i, n, s, e) {
    const r = d(e)(n),
      h = Math.max(...r),
      l = Math.min(...r),
      a = r[r.length - 1],
      o = [a, h, l, a],
      _ = n,
      { time: u, color: c } = _;
    return { se: i, ot: t, Ot: o, zb: s, He: qs(_, ["time", "color"]), O: c };
  }
  function Qs(t) {
    return void 0 !== t.Ot;
  }
  function te(t, i) {
    return void 0 !== i.customValues && (t.Wb = i.customValues), t;
  }
  function ie(t) {
    return (i, n, s, e, r, h) =>
      (function (t, i) {
        return i ? i(t) : void 0 === (n = t).open && void 0 === n.value;
        var n;
      })(s, h)
        ? te({ ot: i, se: n, zb: e }, s)
        : te(t(i, n, s, e, r), s);
  }
  function ne(t) {
    return {
      Candlestick: ie(Gs),
      Bar: ie(Ks),
      Area: ie(Zs),
      Baseline: ie(Xs),
      Histogram: ie(Ys),
      Line: ie(Ys),
      Custom: ie(Js),
    }[t];
  }
  function se(t) {
    return { se: 0, jb: new Map(), ha: t };
  }
  function ee(t, i) {
    if (void 0 !== t && 0 !== t.length)
      return { Hb: i.key(t[0].ot), $b: i.key(t[t.length - 1].ot) };
  }
  function re(t) {
    let i;
    return (
      t.forEach((t) => {
        void 0 === i && (i = t.zb);
      }),
      d(i)
    );
  }
  class he {
    constructor(t) {
      (this.Ub = new Map()),
        (this.qb = new Map()),
        (this.Yb = new Map()),
        (this.Zb = []),
        (this.U_ = t);
    }
    S() {
      this.Ub.clear(), this.qb.clear(), this.Yb.clear(), (this.Zb = []);
    }
    Xb(t, i) {
      let n = 0 !== this.Ub.size,
        s = !1;
      const e = this.qb.get(t);
      if (void 0 !== e)
        if (1 === this.qb.size) (n = !1), (s = !0), this.Ub.clear();
        else for (const i of this.Zb) i.pointData.jb.delete(t) && (s = !0);
      let r = [];
      if (0 !== i.length) {
        const n = i.map((t) => t.time),
          e = this.U_.createConverterToInternalObj(i),
          h = ne(t.Jh()),
          l = t.ya(),
          a = t.Ca();
        r = i.map((i, r) => {
          const o = e(i.time),
            _ = this.U_.key(o);
          let u = this.Ub.get(_);
          void 0 === u && ((u = se(o)), this.Ub.set(_, u), (s = !0));
          const c = h(o, u.se, i, n[r], l, a);
          return u.jb.set(t, c), c;
        });
      }
      n && this.Kb(), this.Gb(t, r);
      let h = -1;
      if (s) {
        const t = [];
        this.Ub.forEach((i) => {
          t.push({
            timeWeight: 0,
            time: i.ha,
            pointData: i,
            originalTime: re(i.jb),
          });
        }),
          t.sort((t, i) => this.U_.key(t.time) - this.U_.key(i.time)),
          (h = this.Jb(t));
      }
      return this.Qb(
        t,
        h,
        (function (t, i, n) {
          const s = ee(t, n),
            e = ee(i, n);
          if (void 0 !== s && void 0 !== e)
            return { Ql: s.$b >= e.$b && s.Hb >= e.Hb };
        })(this.qb.get(t), e, this.U_)
      );
    }
    fd(t) {
      return this.Xb(t, []);
    }
    tw(t, i) {
      const n = i;
      !(function (t) {
        void 0 === t.zb && (t.zb = t.time);
      })(n),
        this.U_.preprocessData(i);
      const s = this.U_.createConverterToInternalObj([i])(i.time),
        e = this.Yb.get(t);
      if (void 0 !== e && this.U_.key(s) < this.U_.key(e))
        throw new Error(
          `Cannot update oldest data, last time=${e}, new time=${s}`
        );
      let r = this.Ub.get(this.U_.key(s));
      const h = void 0 === r;
      void 0 === r && ((r = se(s)), this.Ub.set(this.U_.key(s), r));
      const l = ne(t.Jh()),
        a = t.ya(),
        o = t.Ca(),
        _ = l(s, r.se, i, n.zb, a, o);
      r.jb.set(t, _), this.iw(t, _);
      const u = { Ql: Qs(_) };
      if (!h) return this.Qb(t, -1, u);
      const c = {
          timeWeight: 0,
          time: r.ha,
          pointData: r,
          originalTime: re(r.jb),
        },
        d = Rt(this.Zb, this.U_.key(c.time), (t, i) => this.U_.key(t.time) < i);
      this.Zb.splice(d, 0, c);
      for (let t = d; t < this.Zb.length; ++t) le(this.Zb[t].pointData, t);
      return this.U_.fillWeightsForPoints(this.Zb, d), this.Qb(t, d, u);
    }
    iw(t, i) {
      let n = this.qb.get(t);
      void 0 === n && ((n = []), this.qb.set(t, n));
      const s = 0 !== n.length ? n[n.length - 1] : null;
      null === s || this.U_.key(i.ot) > this.U_.key(s.ot)
        ? Qs(i) && n.push(i)
        : Qs(i)
        ? (n[n.length - 1] = i)
        : n.splice(-1, 1),
        this.Yb.set(t, i.ot);
    }
    Gb(t, i) {
      0 !== i.length
        ? (this.qb.set(t, i.filter(Qs)), this.Yb.set(t, i[i.length - 1].ot))
        : (this.qb.delete(t), this.Yb.delete(t));
    }
    Kb() {
      for (const t of this.Zb)
        0 === t.pointData.jb.size && this.Ub.delete(this.U_.key(t.time));
    }
    Jb(t) {
      let i = -1;
      for (let n = 0; n < this.Zb.length && n < t.length; ++n) {
        const s = this.Zb[n],
          e = t[n];
        if (this.U_.key(s.time) !== this.U_.key(e.time)) {
          i = n;
          break;
        }
        (e.timeWeight = s.timeWeight), le(e.pointData, n);
      }
      if (
        (-1 === i &&
          this.Zb.length !== t.length &&
          (i = Math.min(this.Zb.length, t.length)),
        -1 === i)
      )
        return -1;
      for (let n = i; n < t.length; ++n) le(t[n].pointData, n);
      return this.U_.fillWeightsForPoints(t, i), (this.Zb = t), i;
    }
    nw() {
      if (0 === this.qb.size) return null;
      let t = 0;
      return (
        this.qb.forEach((i) => {
          0 !== i.length && (t = Math.max(t, i[i.length - 1].se));
        }),
        t
      );
    }
    Qb(t, i, n) {
      const s = { sw: new Map(), St: { Iu: this.nw() } };
      if (-1 !== i)
        this.qb.forEach((i, e) => {
          s.sw.set(e, { He: i, ew: e === t ? n : void 0 });
        }),
          this.qb.has(t) || s.sw.set(t, { He: [], ew: n }),
          (s.St.rw = this.Zb),
          (s.St.hw = i);
      else {
        const i = this.qb.get(t);
        s.sw.set(t, { He: i || [], ew: n });
      }
      return s;
    }
  }
  function le(t, i) {
    (t.se = i),
      t.jb.forEach((t) => {
        t.se = i;
      });
  }
  function ae(t) {
    const i = { value: t.Ot[3], time: t.zb };
    return void 0 !== t.Wb && (i.customValues = t.Wb), i;
  }
  function oe(t) {
    const i = ae(t);
    return void 0 !== t.O && (i.color = t.O), i;
  }
  function _e(t) {
    const i = ae(t);
    return (
      void 0 !== t.lt && (i.lineColor = t.lt),
      void 0 !== t.Ts && (i.topColor = t.Ts),
      void 0 !== t.Ps && (i.bottomColor = t.Ps),
      i
    );
  }
  function ue(t) {
    const i = ae(t);
    return (
      void 0 !== t.Pe && (i.topLineColor = t.Pe),
      void 0 !== t.Re && (i.bottomLineColor = t.Re),
      void 0 !== t.Se && (i.topFillColor1 = t.Se),
      void 0 !== t.ke && (i.topFillColor2 = t.ke),
      void 0 !== t.ye && (i.bottomFillColor1 = t.ye),
      void 0 !== t.Ce && (i.bottomFillColor2 = t.Ce),
      i
    );
  }
  function ce(t) {
    const i = {
      open: t.Ot[0],
      high: t.Ot[1],
      low: t.Ot[2],
      close: t.Ot[3],
      time: t.zb,
    };
    return void 0 !== t.Wb && (i.customValues = t.Wb), i;
  }
  function de(t) {
    const i = ce(t);
    return void 0 !== t.O && (i.color = t.O), i;
  }
  function fe(t) {
    const i = ce(t),
      { O: n, Bt: s, Zh: e } = t;
    return (
      void 0 !== n && (i.color = n),
      void 0 !== s && (i.borderColor = s),
      void 0 !== e && (i.wickColor = e),
      i
    );
  }
  function ve(t) {
    return {
      Area: _e,
      Line: oe,
      Baseline: ue,
      Histogram: oe,
      Bar: de,
      Candlestick: fe,
      Custom: pe,
    }[t];
  }
  function pe(t) {
    const i = t.zb;
    return Object.assign(Object.assign({}, t.He), { time: i });
  }
  const me = {
      vertLine: {
        color: "#9598A1",
        width: 1,
        style: 3,
        visible: !0,
        labelVisible: !0,
        labelBackgroundColor: "#131722",
      },
      horzLine: {
        color: "#9598A1",
        width: 1,
        style: 3,
        visible: !0,
        labelVisible: !0,
        labelBackgroundColor: "#131722",
      },
      mode: 1,
    },
    be = {
      vertLines: { color: "#D6DCDE", style: 0, visible: !0 },
      horzLines: { color: "#D6DCDE", style: 0, visible: !0 },
    },
    we = {
      background: { type: "solid", color: "#FFFFFF" },
      textColor: "#191919",
      fontSize: 12,
      fontFamily: z,
      attributionLogo: !0,
    },
    ge = {
      autoScale: !0,
      mode: 0,
      invertScale: !1,
      alignLabels: !0,
      borderVisible: !0,
      borderColor: "#2B2B43",
      entireTextOnly: !1,
      visible: !1,
      ticksVisible: !1,
      scaleMargins: { bottom: 0.1, top: 0.2 },
      minimumWidth: 0,
    },
    Me = {
      rightOffset: 0,
      barSpacing: 6,
      minBarSpacing: 0.5,
      fixLeftEdge: !1,
      fixRightEdge: !1,
      lockVisibleTimeRangeOnResize: !1,
      rightBarStaysOnScroll: !1,
      borderVisible: !0,
      borderColor: "#2B2B43",
      visible: !0,
      timeVisible: !1,
      secondsVisible: !0,
      shiftVisibleRangeOnNewBar: !0,
      allowShiftVisibleRangeOnWhitespaceReplacement: !1,
      ticksVisible: !1,
      uniformDistribution: !1,
      minimumHeight: 0,
      allowBoldLabels: !0,
    },
    xe = {
      color: "rgba(0, 0, 0, 0)",
      visible: !1,
      fontSize: 48,
      fontFamily: z,
      fontStyle: "",
      text: "",
      horzAlign: "center",
      vertAlign: "center",
    };
  function Se() {
    return {
      width: 0,
      height: 0,
      autoSize: !1,
      layout: we,
      crosshair: me,
      grid: be,
      overlayPriceScales: Object.assign({}, ge),
      leftPriceScale: Object.assign(Object.assign({}, ge), { visible: !1 }),
      rightPriceScale: Object.assign(Object.assign({}, ge), { visible: !0 }),
      timeScale: Me,
      watermark: xe,
      localization: {
        locale: rs ? navigator.language : "",
        dateFormat: "dd MMM 'yy",
      },
      handleScroll: {
        mouseWheel: !0,
        pressedMouseMove: !0,
        horzTouchDrag: !0,
        vertTouchDrag: !0,
      },
      handleScale: {
        axisPressedMouseMove: { time: !0, price: !0 },
        axisDoubleClickReset: { time: !0, price: !0 },
        mouseWheel: !0,
        pinch: !0,
      },
      kineticScroll: { mouse: !1, touch: !0 },
      trackingMode: { exitMode: 1 },
    };
  }
  class ke {
    constructor(t, i) {
      (this.lw = t), (this.aw = i);
    }
    applyOptions(t) {
      this.lw.$t().Hc(this.aw, t);
    }
    options() {
      return this.Ii().W();
    }
    width() {
      return ht(this.aw) ? this.lw.gb(this.aw) : 0;
    }
    Ii() {
      return f(this.lw.$t().$c(this.aw)).Dt;
    }
  }
  function ye(t, i, n) {
    const s = qs(t, ["time", "originalTime"]),
      e = Object.assign({ time: i }, s);
    return void 0 !== n && (e.originalTime = n), e;
  }
  const Ce = {
    color: "#FF0000",
    price: 0,
    lineStyle: 2,
    lineWidth: 1,
    lineVisible: !0,
    axisLabelVisible: !0,
    title: "",
    axisLabelColor: "",
    axisLabelTextColor: "",
  };
  class Te {
    constructor(t) {
      this.Lh = t;
    }
    applyOptions(t) {
      this.Lh.Hh(t);
    }
    options() {
      return this.Lh.W();
    }
    ow() {
      return this.Lh;
    }
  }
  class Pe {
    constructor(t, i, n, s, e) {
      (this._w = new C()),
        (this.Is = t),
        (this.uw = i),
        (this.cw = n),
        (this.U_ = e),
        (this.dw = s);
    }
    S() {
      this._w.S();
    }
    priceFormatter() {
      return this.Is.ma();
    }
    priceToCoordinate(t) {
      const i = this.Is.Ct();
      return null === i ? null : this.Is.Dt().Rt(t, i.Ot);
    }
    coordinateToPrice(t) {
      const i = this.Is.Ct();
      return null === i ? null : this.Is.Dt().pn(t, i.Ot);
    }
    barsInLogicalRange(t) {
      if (null === t) return null;
      const i = new Mn(new bn(t.from, t.to)).hu(),
        n = this.Is.zn();
      if (n.Ni()) return null;
      const s = n.hl(i.Os(), 1),
        e = n.hl(i.ui(), -1),
        r = f(n.sl()),
        h = f(n.An());
      if (null !== s && null !== e && s.se > e.se)
        return { barsBefore: t.from - r, barsAfter: h - t.to };
      const l = {
        barsBefore: null === s || s.se === r ? t.from - r : s.se - r,
        barsAfter: null === e || e.se === h ? h - t.to : h - e.se,
      };
      return null !== s && null !== e && ((l.from = s.zb), (l.to = e.zb)), l;
    }
    setData(t) {
      this.U_, this.Is.Jh(), this.uw.fw(this.Is, t), this.pw("full");
    }
    update(t) {
      this.Is.Jh(), this.uw.mw(this.Is, t), this.pw("update");
    }
    dataByIndex(t, i) {
      const n = this.Is.zn().hl(t, i);
      if (null === n) return null;
      return ve(this.seriesType())(n);
    }
    data() {
      const t = ve(this.seriesType());
      return this.Is.zn()
        .ie()
        .map((i) => t(i));
    }
    subscribeDataChanged(t) {
      this._w.l(t);
    }
    unsubscribeDataChanged(t) {
      this._w.v(t);
    }
    setMarkers(t) {
      this.U_;
      const i = t.map((t) =>
        ye(t, this.U_.convertHorzItemToInternal(t.time), t.time)
      );
      this.Is.ia(i);
    }
    markers() {
      return this.Is.na().map((t) => ye(t, t.originalTime, void 0));
    }
    applyOptions(t) {
      this.Is.Hh(t);
    }
    options() {
      return B(this.Is.W());
    }
    priceScale() {
      return this.cw.priceScale(this.Is.Dt().Ta());
    }
    createPriceLine(t) {
      const i = T(B(Ce), t),
        n = this.Is.sa(i);
      return new Te(n);
    }
    removePriceLine(t) {
      this.Is.ea(t.ow());
    }
    seriesType() {
      return this.Is.Jh();
    }
    attachPrimitive(t) {
      this.Is.Sa(t),
        t.attached &&
          t.attached({
            chart: this.dw,
            series: this,
            requestUpdate: () => this.Is.$t().Xl(),
          });
    }
    detachPrimitive(t) {
      this.Is.ka(t), t.detached && t.detached();
    }
    pw(t) {
      this._w.M() && this._w.m(t);
    }
  }
  class Re {
    constructor(t, i, n) {
      (this.bw = new C()),
        (this.pu = new C()),
        (this.Om = new C()),
        (this.$i = t),
        (this.kl = t.St()),
        (this.lb = i),
        this.kl.tc().l(this.ww.bind(this)),
        this.kl.nc().l(this.gw.bind(this)),
        this.lb.Lm().l(this.Mw.bind(this)),
        (this.U_ = n);
    }
    S() {
      this.kl.tc().p(this),
        this.kl.nc().p(this),
        this.lb.Lm().p(this),
        this.bw.S(),
        this.pu.S(),
        this.Om.S();
    }
    scrollPosition() {
      return this.kl.ju();
    }
    scrollToPosition(t, i) {
      i ? this.kl.Gu(t, 1e3) : this.$i.Jn(t);
    }
    scrollToRealTime() {
      this.kl.Ku();
    }
    getVisibleRange() {
      const t = this.kl.Du();
      return null === t
        ? null
        : { from: t.from.originalTime, to: t.to.originalTime };
    }
    setVisibleRange(t) {
      const i = {
          from: this.U_.convertHorzItemToInternal(t.from),
          to: this.U_.convertHorzItemToInternal(t.to),
        },
        n = this.kl.Au(i);
      this.$i.vd(n);
    }
    getVisibleLogicalRange() {
      const t = this.kl.Ru();
      return null === t ? null : { from: t.Os(), to: t.ui() };
    }
    setVisibleLogicalRange(t) {
      c(t.from <= t.to, "The from index cannot be after the to index."),
        this.$i.vd(t);
    }
    resetTimeScale() {
      this.$i.Kn();
    }
    fitContent() {
      this.$i.rc();
    }
    logicalToCoordinate(t) {
      const i = this.$i.St();
      return i.Ni() ? null : i.zt(t);
    }
    coordinateToLogical(t) {
      return this.kl.Ni() ? null : this.kl.Lu(t);
    }
    timeToCoordinate(t) {
      const i = this.U_.convertHorzItemToInternal(t),
        n = this.kl.Da(i, !1);
      return null === n ? null : this.kl.zt(n);
    }
    coordinateToTime(t) {
      const i = this.$i.St(),
        n = i.Lu(t),
        s = i.Ui(n);
      return null === s ? null : s.originalTime;
    }
    width() {
      return this.lb._m().width;
    }
    height() {
      return this.lb._m().height;
    }
    subscribeVisibleTimeRangeChange(t) {
      this.bw.l(t);
    }
    unsubscribeVisibleTimeRangeChange(t) {
      this.bw.v(t);
    }
    subscribeVisibleLogicalRangeChange(t) {
      this.pu.l(t);
    }
    unsubscribeVisibleLogicalRangeChange(t) {
      this.pu.v(t);
    }
    subscribeSizeChange(t) {
      this.Om.l(t);
    }
    unsubscribeSizeChange(t) {
      this.Om.v(t);
    }
    applyOptions(t) {
      this.kl.Hh(t);
    }
    options() {
      return Object.assign(Object.assign({}, B(this.kl.W())), {
        barSpacing: this.kl.he(),
      });
    }
    ww() {
      this.bw.M() && this.bw.m(this.getVisibleRange());
    }
    gw() {
      this.pu.M() && this.pu.m(this.getVisibleLogicalRange());
    }
    Mw(t) {
      this.Om.m(t.width, t.height);
    }
  }
  function De(t) {
    if (void 0 === t || "custom" === t.type) return;
    const i = t;
    void 0 !== i.minMove &&
      void 0 === i.precision &&
      (i.precision = (function (t) {
        if (t >= 1) return 0;
        let i = 0;
        for (; i < 8; i++) {
          const n = Math.round(t);
          if (Math.abs(n - t) < 1e-8) return i;
          t *= 10;
        }
        return i;
      })(i.minMove));
  }
  function Oe(t) {
    return (
      (function (t) {
        if (O(t.handleScale)) {
          const i = t.handleScale;
          t.handleScale = {
            axisDoubleClickReset: { time: i, price: i },
            axisPressedMouseMove: { time: i, price: i },
            mouseWheel: i,
            pinch: i,
          };
        } else if (void 0 !== t.handleScale) {
          const { axisPressedMouseMove: i, axisDoubleClickReset: n } =
            t.handleScale;
          O(i) && (t.handleScale.axisPressedMouseMove = { time: i, price: i }),
            O(n) &&
              (t.handleScale.axisDoubleClickReset = { time: n, price: n });
        }
        const i = t.handleScroll;
        O(i) &&
          (t.handleScroll = {
            horzTouchDrag: i,
            vertTouchDrag: i,
            mouseWheel: i,
            pressedMouseMove: i,
          });
      })(t),
      t
    );
  }
  class Be {
    constructor(t, i, n) {
      (this.xw = new Map()),
        (this.Sw = new Map()),
        (this.kw = new C()),
        (this.yw = new C()),
        (this.Cw = new C()),
        (this.Tw = new he(i));
      const s = void 0 === n ? B(Se()) : T(B(Se()), Oe(n));
      (this.U_ = i),
        (this.lw = new Hs(t, s, i)),
        this.lw.hm().l((t) => {
          this.kw.M() && this.kw.m(this.Pw(t()));
        }, this),
        this.lw.lm().l((t) => {
          this.yw.M() && this.yw.m(this.Pw(t()));
        }, this),
        this.lw.Zc().l((t) => {
          this.Cw.M() && this.Cw.m(this.Pw(t()));
        }, this);
      const e = this.lw.$t();
      this.Rw = new Re(e, this.lw.cb(), this.U_);
    }
    remove() {
      this.lw.hm().p(this),
        this.lw.lm().p(this),
        this.lw.Zc().p(this),
        this.Rw.S(),
        this.lw.S(),
        this.xw.clear(),
        this.Sw.clear(),
        this.kw.S(),
        this.yw.S(),
        this.Cw.S(),
        this.Tw.S();
    }
    resize(t, i, n) {
      this.autoSizeActive() || this.lw.ob(t, i, n);
    }
    addCustomSeries(t, i) {
      const n = v(t),
        s = Object.assign(Object.assign({}, h), n.defaultOptions());
      return this.Dw("Custom", s, i, n);
    }
    addAreaSeries(t) {
      return this.Dw("Area", s, t);
    }
    addBaselineSeries(t) {
      return this.Dw("Baseline", e, t);
    }
    addBarSeries(t) {
      return this.Dw("Bar", i, t);
    }
    addCandlestickSeries(i = {}) {
      return (
        (function (t) {
          void 0 !== t.borderColor &&
            ((t.borderUpColor = t.borderColor),
            (t.borderDownColor = t.borderColor)),
            void 0 !== t.wickColor &&
              ((t.wickUpColor = t.wickColor), (t.wickDownColor = t.wickColor));
        })(i),
        this.Dw("Candlestick", t, i)
      );
    }
    addHistogramSeries(t) {
      return this.Dw("Histogram", r, t);
    }
    addLineSeries(t) {
      return this.Dw("Line", n, t);
    }
    removeSeries(t) {
      const i = d(this.xw.get(t)),
        n = this.Tw.fd(i);
      this.lw.$t().fd(i), this.Ow(n), this.xw.delete(t), this.Sw.delete(i);
    }
    fw(t, i) {
      this.Ow(this.Tw.Xb(t, i));
    }
    mw(t, i) {
      this.Ow(this.Tw.tw(t, i));
    }
    subscribeClick(t) {
      this.kw.l(t);
    }
    unsubscribeClick(t) {
      this.kw.v(t);
    }
    subscribeCrosshairMove(t) {
      this.Cw.l(t);
    }
    unsubscribeCrosshairMove(t) {
      this.Cw.v(t);
    }
    subscribeDblClick(t) {
      this.yw.l(t);
    }
    unsubscribeDblClick(t) {
      this.yw.v(t);
    }
    priceScale(t) {
      return new ke(this.lw, t);
    }
    timeScale() {
      return this.Rw;
    }
    applyOptions(t) {
      this.lw.Hh(Oe(t));
    }
    options() {
      return this.lw.W();
    }
    takeScreenshot() {
      return this.lw.bb();
    }
    autoSizeActive() {
      return this.lw.Sb();
    }
    chartElement() {
      return this.lw.kb();
    }
    paneSize() {
      const t = this.lw.Cb();
      return { height: t.height, width: t.width };
    }
    setCrosshairPosition(t, i, n) {
      const s = this.xw.get(n);
      if (void 0 === s) return;
      const e = this.lw.$t().cr(s);
      null !== e && this.lw.$t().ld(t, i, e);
    }
    clearCrosshairPosition() {
      this.lw.$t().ad(!0);
    }
    Dw(t, i, n = {}, s) {
      De(n.priceFormat);
      const e = T(B(l), B(i), n),
        r = this.lw.$t().ud(t, e, s),
        h = new Pe(r, this, this, this, this.U_);
      return this.xw.set(h, r), this.Sw.set(r, h), h;
    }
    Ow(t) {
      const i = this.lw.$t();
      i.od(t.St.Iu, t.St.rw, t.St.hw),
        t.sw.forEach((t, i) => i.J(t.He, t.ew)),
        i.Fu();
    }
    Bw(t) {
      return d(this.Sw.get(t));
    }
    Pw(t) {
      const i = new Map();
      t.Lb.forEach((t, n) => {
        const s = n.Jh(),
          e = ve(s)(t);
        if ("Custom" !== s) c(Us(e));
        else {
          const t = n.Ca();
          c(!t || !1 === t(e));
        }
        i.set(this.Bw(n), e);
      });
      const n = void 0 !== t.Ib && this.Sw.has(t.Ib) ? this.Bw(t.Ib) : void 0;
      return {
        time: t.zb,
        logical: t.se,
        point: t.Eb,
        hoveredSeries: n,
        hoveredObjectId: t.Nb,
        seriesData: i,
        sourceEvent: t.Fb,
      };
    }
  }
  function Ve(t, i, n) {
    let s;
    if (D(t)) {
      const i = document.getElementById(t);
      c(null !== i, `Cannot find element in DOM with id=${t}`), (s = i);
    } else s = t;
    const e = new Be(s, i, n);
    return i.setOptions(e.options()), e;
  }
  const Ae = Object.assign(Object.assign({}, l), h);
  var ze = Object.freeze({
    __proto__: null,
    get ColorType() {
      return On;
    },
    get CrosshairMode() {
      return et;
    },
    get LastPriceAnimationMode() {
      return Rn;
    },
    get LineStyle() {
      return o;
    },
    get LineType() {
      return a;
    },
    get MismatchDirection() {
      return Vi;
    },
    get PriceLineSource() {
      return Dn;
    },
    get PriceScaleMode() {
      return cn;
    },
    get TickMarkType() {
      return Bn;
    },
    get TrackingModeExitMode() {
      return Pn;
    },
    createChart: function (t, i) {
      return Ve(t, new Gn(), Gn.Ad(i));
    },
    createChartEx: Ve,
    customSeriesDefaultOptions: Ae,
    defaultHorzScaleBehavior: function () {
      return Gn;
    },
    isBusinessDay: An,
    isUTCTimestamp: zn,
    version: function () {
      return "4.2.1";
    },
  });
  window.LightweightCharts = ze;
})();
