"use strict";
var E = Object.defineProperty;
var H = Object.getOwnPropertyDescriptor;
var P = Object.getOwnPropertyNames;
var A = Object.prototype.hasOwnProperty;
var S = (n, r, t) => r in n ? E(n, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[r] = t;
var j = (n, r) => {
  for (var t in r)
    E(n, t, { get: r[t], enumerable: !0 });
}, q = (n, r, t, s) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let e of P(r))
      !A.call(n, e) && e !== t && E(n, e, { get: () => r[e], enumerable: !(s = H(r, e)) || s.enumerable });
  return n;
};
var z = (n) => q(E({}, "__esModule", { value: !0 }), n);
var a = (n, r, t) => (S(n, typeof r != "symbol" ? r + "" : r, t), t);

// src/index.ts
var D = {};
j(D, {
  Bench: () => p,
  Task: () => o,
  default: () => C,
  now: () => f
});
module.exports = z(D);

// src/event.ts
function i(n, r = null) {
  let t = new Event(n);
  return Object.defineProperty(t, "task", {
    value: r,
    enumerable: !0,
    writable: !1,
    configurable: !1
  }), t;
}

// src/constants.ts
var V = {
  1: 12.71,
  2: 4.303,
  3: 3.182,
  4: 2.776,
  5: 2.571,
  6: 2.447,
  7: 2.365,
  8: 2.306,
  9: 2.262,
  10: 2.228,
  11: 2.201,
  12: 2.179,
  13: 2.16,
  14: 2.145,
  15: 2.131,
  16: 2.12,
  17: 2.11,
  18: 2.101,
  19: 2.093,
  20: 2.086,
  21: 2.08,
  22: 2.074,
  23: 2.069,
  24: 2.064,
  25: 2.06,
  26: 2.056,
  27: 2.052,
  28: 2.048,
  29: 2.045,
  30: 2.042,
  31: 2.0399,
  32: 2.0378,
  33: 2.0357,
  34: 2.0336,
  35: 2.0315,
  36: 2.0294,
  37: 2.0273,
  38: 2.0252,
  39: 2.0231,
  40: 2.021,
  41: 2.0198,
  42: 2.0186,
  43: 2.0174,
  44: 2.0162,
  45: 2.015,
  46: 2.0138,
  47: 2.0126,
  48: 2.0114,
  49: 2.0102,
  50: 2.009,
  51: 2.0081,
  52: 2.0072,
  53: 2.0063,
  54: 2.0054,
  55: 2.0045,
  56: 2.0036,
  57: 2.0027,
  58: 2.0018,
  59: 2.0009,
  60: 2,
  61: 1.9995,
  62: 1.999,
  63: 1.9985,
  64: 1.998,
  65: 1.9975,
  66: 1.997,
  67: 1.9965,
  68: 1.996,
  69: 1.9955,
  70: 1.995,
  71: 1.9945,
  72: 1.994,
  73: 1.9935,
  74: 1.993,
  75: 1.9925,
  76: 1.992,
  77: 1.9915,
  78: 1.991,
  79: 1.9905,
  80: 1.99,
  81: 1.9897,
  82: 1.9894,
  83: 1.9891,
  84: 1.9888,
  85: 1.9885,
  86: 1.9882,
  87: 1.9879,
  88: 1.9876,
  89: 1.9873,
  90: 1.987,
  91: 1.9867,
  92: 1.9864,
  93: 1.9861,
  94: 1.9858,
  95: 1.9855,
  96: 1.9852,
  97: 1.9849,
  98: 1.9846,
  99: 1.9843,
  100: 1.984,
  101: 1.9838,
  102: 1.9836,
  103: 1.9834,
  104: 1.9832,
  105: 1.983,
  106: 1.9828,
  107: 1.9826,
  108: 1.9824,
  109: 1.9822,
  110: 1.982,
  111: 1.9818,
  112: 1.9816,
  113: 1.9814,
  114: 1.9812,
  115: 1.9819,
  116: 1.9808,
  117: 1.9806,
  118: 1.9804,
  119: 1.9802,
  120: 1.98,
  infinity: 1.96
}, w = V;

// src/utils.ts
var N = (n) => n / 1e6, f = () => {
  var n;
  return typeof ((n = globalThis.process) == null ? void 0 : n.hrtime) == "function" ? N(Number(process.hrtime.bigint())) : performance.now();
}, B = (n) => n.reduce((r, t) => r + t, 0) / n.length || 0, L = (n, r) => n.reduce((s, e) => s + (e - r) ** 2) / (n.length - 1) || 0;

// src/task.ts
var o = class extends EventTarget {
  constructor(t, s, e) {
    super();
    a(this, "bench");
    a(this, "name");
    a(this, "fn");
    a(this, "runs", 0);
    a(this, "result");
    this.bench = t, this.name = s, this.fn = e;
  }
  async run() {
    var c, l, m;
    this.dispatchEvent(i("start", this));
    let t = this.bench.now(), s = 0, e = [];
    for (await this.bench.setup(this, "run"); (s < this.bench.time || this.runs < this.bench.iterations) && !((c = this.bench.signal) != null && c.aborted); ) {
      let h = 0;
      try {
        await Promise.resolve().then(() => (h = this.bench.now(), this.fn()));
      } catch (v) {
        this.setResult({ error: v });
      }
      let u = this.bench.now() - h;
      this.runs += 1, e.push(u), s = this.bench.now() - t;
    }
    await this.bench.teardown(this, "run"), e.sort();
    {
      let h = e[0], u = e[e.length - 1], v = s / this.runs, K = 1 / v, b = B(e), T = L(e, b), k = Math.sqrt(T), g = k / Math.sqrt(e.length), y = e.length - 1, x = w[String(Math.round(y) || 1)] || w.infinity, M = g * x, R = M / b * 100 || 0, O = e[Math.ceil(e.length * (75 / 100)) - 1], _ = e[Math.ceil(e.length * (99 / 100)) - 1], F = e[Math.ceil(e.length * (99.5 / 100)) - 1], I = e[Math.ceil(e.length * (99.9 / 100)) - 1];
      if ((l = this.bench.signal) != null && l.aborted)
        return this;
      this.setResult({
        totalTime: s,
        min: h,
        max: u,
        hz: K,
        period: v,
        samples: e,
        mean: b,
        variance: T,
        sd: k,
        sem: g,
        df: y,
        critical: x,
        moe: M,
        rme: R,
        p75: O,
        p99: _,
        p995: F,
        p999: I
      });
    }
    return (m = this.result) != null && m.error && (this.dispatchEvent(i("error", this)), this.bench.dispatchEvent(i("error", this))), this.dispatchEvent(i("cycle", this)), this.bench.dispatchEvent(i("cycle", this)), this.dispatchEvent(i("complete", this)), this;
  }
  async warmup() {
    var e;
    this.dispatchEvent(i("warmup", this));
    let t = this.bench.now(), s = 0;
    for (this.bench.setup(this, "warmup"); (s < this.bench.warmupTime || this.runs < this.bench.warmupIterations) && !((e = this.bench.signal) != null && e.aborted); ) {
      try {
        await Promise.resolve().then(this.fn);
      } catch (c) {
      }
      this.runs += 1, s = this.bench.now() - t;
    }
    this.bench.teardown(this, "warmup"), this.runs = 0;
  }
  addEventListener(t, s, e) {
    super.addEventListener(t, s, e);
  }
  removeEventListener(t, s, e) {
    super.removeEventListener(t, s, e);
  }
  setResult(t) {
    this.result = { ...this.result, ...t }, Object.freeze(this.reset);
  }
  reset() {
    this.dispatchEvent(i("reset", this)), this.runs = 0, this.result = void 0;
  }
};

// src/bench.ts
var p = class extends EventTarget {
  constructor(t = {}) {
    var s, e, c, l, m, h, u;
    super();
    a(this, "_tasks", /* @__PURE__ */ new Map());
    a(this, "signal");
    a(this, "warmupTime", 100);
    a(this, "warmupIterations", 5);
    a(this, "time", 500);
    a(this, "iterations", 10);
    a(this, "now", f);
    a(this, "setup");
    a(this, "teardown");
    this.now = (s = t.now) != null ? s : this.now, this.warmupTime = (e = t.warmupTime) != null ? e : this.warmupTime, this.warmupIterations = (c = t.warmupIterations) != null ? c : this.warmupIterations, this.time = (l = t.time) != null ? l : this.time, this.iterations = (m = t.iterations) != null ? m : this.iterations, this.signal = t.signal, this.setup = (h = t.setup) != null ? h : () => {
    }, this.teardown = (u = t.teardown) != null ? u : () => {
    }, this.signal && this.signal.addEventListener("abort", () => {
      this.dispatchEvent(i("abort"));
    }, { once: !0 });
  }
  async run() {
    var s;
    this.dispatchEvent(i("start"));
    let t = [];
    for (let e of [...this._tasks.values()])
      (s = this.signal) != null && s.aborted ? t.push(e) : t.push(await e.run());
    return this.dispatchEvent(i("complete")), t;
  }
  async warmup() {
    this.dispatchEvent(i("warmup"));
    for (let [, t] of this._tasks)
      await t.warmup();
  }
  reset() {
    this.dispatchEvent(i("reset")), this._tasks.forEach((t) => {
      t.reset();
    });
  }
  add(t, s) {
    let e = new o(this, t, s);
    return this._tasks.set(t, e), this.dispatchEvent(i("add", e)), this;
  }
  remove(t) {
    let s = this.getTask(t);
    return this.dispatchEvent(i("remove", s)), this._tasks.delete(t), this;
  }
  addEventListener(t, s, e) {
    super.addEventListener(t, s, e);
  }
  removeEventListener(t, s, e) {
    super.removeEventListener(t, s, e);
  }
  get results() {
    return [...this._tasks.values()].map((t) => t.result);
  }
  get tasks() {
    return [...this._tasks.values()];
  }
  getTask(t) {
    return this._tasks.get(t);
  }
};

// src/index.ts
var C = p;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Bench,
  Task,
  now
});
