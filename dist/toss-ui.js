import { jsx as n, Fragment as te, jsxs as y } from "react/jsx-runtime";
import * as c from "react";
import Ve, { useState as Ca, useLayoutEffect as Na, forwardRef as Gr, createElement as Co } from "react";
import * as Wt from "react-dom";
import Sa from "react-dom";
function Kr(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (o = Kr(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function Yr() {
  for (var e, t, o = 0, r = "", s = arguments.length; o < s; o++) (e = arguments[o]) && (t = Kr(e)) && (r && (r += " "), r += t);
  return r;
}
const dr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ur = Yr, pt = (e, t) => (o) => {
  var r;
  if (t?.variants == null) return ur(e, o?.class, o?.className);
  const { variants: s, defaultVariants: i } = t, a = Object.keys(s).map((u) => {
    const f = o?.[u], p = i?.[u];
    if (f === null) return null;
    const g = dr(f) || dr(p);
    return s[u][g];
  }), l = o && Object.entries(o).reduce((u, f) => {
    let [p, g] = f;
    return g === void 0 || (u[p] = g), u;
  }, {}), d = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
    let { class: p, className: g, ...v } = f;
    return Object.entries(v).every((b) => {
      let [h, x] = b;
      return Array.isArray(x) ? x.includes({
        ...i,
        ...l
      }[h]) : {
        ...i,
        ...l
      }[h] === x;
    }) ? [
      ...u,
      p,
      g
    ] : u;
  }, []);
  return ur(e, a, d, o?.class, o?.className);
};
function fr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function qr(...e) {
  return (t) => {
    let o = !1;
    const r = e.map((s) => {
      const i = fr(s, t);
      return !o && typeof i == "function" && (o = !0), i;
    });
    if (o)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : fr(e[s], null);
        }
      };
  };
}
function U(...e) {
  return c.useCallback(qr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  const t = /* @__PURE__ */ Ra(e), o = c.forwardRef((r, s) => {
    const { children: i, ...a } = r, l = c.Children.toArray(i), d = l.find(Ea);
    if (d) {
      const u = d.props.children, f = l.map((p) => p === d ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ n(t, { ...a, ref: s, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ n(t, { ...a, ref: s, children: i });
  });
  return o.displayName = `${e}.Slot`, o;
}
var La = /* @__PURE__ */ tt("Slot");
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  const t = c.forwardRef((o, r) => {
    const { children: s, ...i } = o;
    if (c.isValidElement(s)) {
      const a = Ia(s), l = Aa(i, s.props);
      return s.type !== c.Fragment && (l.ref = r ? qr(r, a) : a), c.cloneElement(s, l);
    }
    return c.Children.count(s) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Xr = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Ma(e) {
  const t = ({ children: o }) => /* @__PURE__ */ n(te, { children: o });
  return t.displayName = `${e}.Slottable`, t.__radixId = Xr, t;
}
function Ea(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Xr;
}
function Aa(e, t) {
  const o = { ...t };
  for (const r in t) {
    const s = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? s && i ? o[r] = (...l) => {
      const d = i(...l);
      return s(...l), d;
    } : s && (o[r] = s) : r === "style" ? o[r] = { ...s, ...i } : r === "className" && (o[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function Ia(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Pa = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], D = Pa.reduce((e, t) => {
  const o = /* @__PURE__ */ tt(`Primitive.${t}`), r = c.forwardRef((s, i) => {
    const { asChild: a, ...l } = s, d = a ? o : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n(d, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ta(e, t) {
  e && Wt.flushSync(() => e.dispatchEvent(t));
}
var Zr = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Da = "VisuallyHidden", Oa = c.forwardRef(
  (e, t) => /* @__PURE__ */ n(
    D.span,
    {
      ...e,
      ref: t,
      style: { ...Zr, ...e.style }
    }
  )
);
Oa.displayName = Da;
function za(e, t) {
  const o = c.createContext(t), r = (i) => {
    const { children: a, ...l } = i, d = c.useMemo(() => l, Object.values(l));
    return /* @__PURE__ */ n(o.Provider, { value: d, children: a });
  };
  r.displayName = e + "Provider";
  function s(i) {
    const a = c.useContext(o);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, s];
}
function ae(e, t = []) {
  let o = [];
  function r(i, a) {
    const l = c.createContext(a), d = o.length;
    o = [...o, a];
    const u = (p) => {
      const { scope: g, children: v, ...b } = p, h = g?.[e]?.[d] || l, x = c.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ n(h.Provider, { value: x, children: v });
    };
    u.displayName = i + "Provider";
    function f(p, g) {
      const v = g?.[e]?.[d] || l, b = c.useContext(v);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [u, f];
  }
  const s = () => {
    const i = o.map((a) => c.createContext(a));
    return function(l) {
      const d = l?.[e] || i;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: d } }),
        [l, d]
      );
    };
  };
  return s.scopeName = e, [r, _a(s, ...t)];
}
function _a(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const r = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(i) {
      const a = r.reduce((l, { useScope: d, scopeName: u }) => {
        const p = d(i)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return o.scopeName = t.scopeName, o;
}
function Qr(e) {
  const t = e + "CollectionProvider", [o, r] = ae(t), [s, i] = o(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: x, children: w } = h, k = Ve.useRef(null), C = Ve.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ n(s, { scope: x, itemMap: C, collectionRef: k, children: w });
  };
  a.displayName = t;
  const l = e + "CollectionSlot", d = /* @__PURE__ */ tt(l), u = Ve.forwardRef(
    (h, x) => {
      const { scope: w, children: k } = h, C = i(l, w), N = U(x, C.collectionRef);
      return /* @__PURE__ */ n(d, { ref: N, children: k });
    }
  );
  u.displayName = l;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", g = /* @__PURE__ */ tt(f), v = Ve.forwardRef(
    (h, x) => {
      const { scope: w, children: k, ...C } = h, N = Ve.useRef(null), R = U(x, N), E = i(f, w);
      return Ve.useEffect(() => (E.itemMap.set(N, { ref: N, ...C }), () => {
        E.itemMap.delete(N);
      })), /* @__PURE__ */ n(g, { [p]: "", ref: R, children: k });
    }
  );
  v.displayName = f;
  function b(h) {
    const x = i(e + "CollectionConsumer", h);
    return Ve.useCallback(() => {
      const k = x.collectionRef.current;
      if (!k) return [];
      const C = Array.from(k.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (E, M) => C.indexOf(E.ref.current) - C.indexOf(M.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: v },
    b,
    r
  ];
}
function z(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(s) {
    if (e?.(s), o === !1 || !s.defaultPrevented)
      return t?.(s);
  };
}
var re = globalThis?.document ? c.useLayoutEffect : () => {
}, Ba = c[" useInsertionEffect ".trim().toString()] || re;
function Ie({
  prop: e,
  defaultProp: t,
  onChange: o = () => {
  },
  caller: r
}) {
  const [s, i, a] = Wa({
    defaultProp: t,
    onChange: o
  }), l = e !== void 0, d = l ? e : s;
  {
    const f = c.useRef(e !== void 0);
    c.useEffect(() => {
      const p = f.current;
      p !== l && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = l;
    }, [l, r]);
  }
  const u = c.useCallback(
    (f) => {
      if (l) {
        const p = Va(f) ? f(e) : f;
        p !== e && a.current?.(p);
      } else
        i(f);
    },
    [l, e, i, a]
  );
  return [d, u];
}
function Wa({
  defaultProp: e,
  onChange: t
}) {
  const [o, r] = c.useState(e), s = c.useRef(o), i = c.useRef(t);
  return Ba(() => {
    i.current = t;
  }, [t]), c.useEffect(() => {
    s.current !== o && (i.current?.(o), s.current = o);
  }, [o, s]), [o, r, i];
}
function Va(e) {
  return typeof e == "function";
}
function Fa(e, t) {
  return c.useReducer((o, r) => t[o][r] ?? o, e);
}
var Ge = (e) => {
  const { present: t, children: o } = e, r = Ha(t), s = typeof o == "function" ? o({ present: r.isPresent }) : c.Children.only(o), i = U(r.ref, $a(s));
  return typeof o == "function" || r.isPresent ? c.cloneElement(s, { ref: i }) : null;
};
Ge.displayName = "Presence";
function Ha(e) {
  const [t, o] = c.useState(), r = c.useRef(null), s = c.useRef(e), i = c.useRef("none"), a = e ? "mounted" : "unmounted", [l, d] = Fa(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = yt(r.current);
    i.current = l === "mounted" ? u : "none";
  }, [l]), re(() => {
    const u = r.current, f = s.current;
    if (f !== e) {
      const g = i.current, v = yt(u);
      e ? d("MOUNT") : v === "none" || u?.display === "none" ? d("UNMOUNT") : d(f && g !== v ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, d]), re(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, p = (v) => {
        const h = yt(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && h && (d("ANIMATION_END"), !s.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, g = (v) => {
        v.target === t && (i.current = yt(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: c.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, o(u);
    }, [])
  };
}
function yt(e) {
  return e?.animationName || "none";
}
function $a(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var ja = c[" useId ".trim().toString()] || (() => {
}), Ua = 0;
function Ee(e) {
  const [t, o] = c.useState(ja());
  return re(() => {
    o((r) => r ?? String(Ua++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Ga = c.createContext(void 0);
function Vt(e) {
  const t = c.useContext(Ga);
  return e || t || "ltr";
}
function Pe(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...o) => t.current?.(...o), []);
}
function Ka(e, t = globalThis?.document) {
  const o = Pe(e);
  c.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && o(s);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [o, t]);
}
var Ya = "DismissableLayer", No = "dismissableLayer.update", qa = "dismissableLayer.pointerDownOutside", Xa = "dismissableLayer.focusOutside", pr, Jr = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zo = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: o = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: l,
      ...d
    } = e, u = c.useContext(Jr), [f, p] = c.useState(null), g = f?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = U(t, (M) => p(M)), h = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(x), k = f ? h.indexOf(f) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, N = k >= w, R = Ja((M) => {
      const S = M.target, O = [...u.branches].some((B) => B.contains(S));
      !N || O || (s?.(M), a?.(M), M.defaultPrevented || l?.());
    }, g), E = el((M) => {
      const S = M.target;
      [...u.branches].some((B) => B.contains(S)) || (i?.(M), a?.(M), M.defaultPrevented || l?.());
    }, g);
    return Ka((M) => {
      k === u.layers.size - 1 && (r?.(M), !M.defaultPrevented && l && (M.preventDefault(), l()));
    }, g), c.useEffect(() => {
      if (f)
        return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (pr = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), mr(), () => {
          o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = pr);
        };
    }, [f, g, o, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), mr());
    }, [f, u]), c.useEffect(() => {
      const M = () => v({});
      return document.addEventListener(No, M), () => document.removeEventListener(No, M);
    }, []), /* @__PURE__ */ n(
      D.div,
      {
        ...d,
        ref: b,
        style: {
          pointerEvents: C ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: z(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: z(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: z(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
zo.displayName = Ya;
var Za = "DismissableLayerBranch", Qa = c.forwardRef((e, t) => {
  const o = c.useContext(Jr), r = c.useRef(null), s = U(t, r);
  return c.useEffect(() => {
    const i = r.current;
    if (i)
      return o.branches.add(i), () => {
        o.branches.delete(i);
      };
  }, [o.branches]), /* @__PURE__ */ n(D.div, { ...e, ref: s });
});
Qa.displayName = Za;
function Ja(e, t = globalThis?.document) {
  const o = Pe(e), r = c.useRef(!1), s = c.useRef(() => {
  });
  return c.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let d = function() {
          en(
            qa,
            o,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = d, t.addEventListener("click", s.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", s.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", s.current);
    };
  }, [t, o]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function el(e, t = globalThis?.document) {
  const o = Pe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const s = (i) => {
      i.target && !r.current && en(Xa, o, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, o]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function mr() {
  const e = new CustomEvent(No);
  document.dispatchEvent(e);
}
function en(e, t, o, { discrete: r }) {
  const s = o.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: o });
  t && s.addEventListener(e, t, { once: !0 }), r ? Ta(s, i) : s.dispatchEvent(i);
}
var fo = "focusScope.autoFocusOnMount", po = "focusScope.autoFocusOnUnmount", hr = { bubbles: !1, cancelable: !0 }, tl = "FocusScope", _o = c.forwardRef((e, t) => {
  const {
    loop: o = !1,
    trapped: r = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i,
    ...a
  } = e, [l, d] = c.useState(null), u = Pe(s), f = Pe(i), p = c.useRef(null), g = U(t, (h) => d(h)), v = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let h = function(C) {
        if (v.paused || !l) return;
        const N = C.target;
        l.contains(N) ? p.current = N : Me(p.current, { select: !0 });
      }, x = function(C) {
        if (v.paused || !l) return;
        const N = C.relatedTarget;
        N !== null && (l.contains(N) || Me(p.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const R of C)
            R.removedNodes.length > 0 && Me(l);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", x);
      const k = new MutationObserver(w);
      return l && k.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", x), k.disconnect();
      };
    }
  }, [r, l, v.paused]), c.useEffect(() => {
    if (l) {
      vr.add(v);
      const h = document.activeElement;
      if (!l.contains(h)) {
        const w = new CustomEvent(fo, hr);
        l.addEventListener(fo, u), l.dispatchEvent(w), w.defaultPrevented || (ol(al(tn(l)), { select: !0 }), document.activeElement === h && Me(l));
      }
      return () => {
        l.removeEventListener(fo, u), setTimeout(() => {
          const w = new CustomEvent(po, hr);
          l.addEventListener(po, f), l.dispatchEvent(w), w.defaultPrevented || Me(h ?? document.body, { select: !0 }), l.removeEventListener(po, f), vr.remove(v);
        }, 0);
      };
    }
  }, [l, u, f, v]);
  const b = c.useCallback(
    (h) => {
      if (!o && !r || v.paused) return;
      const x = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (x && w) {
        const k = h.currentTarget, [C, N] = rl(k);
        C && N ? !h.shiftKey && w === N ? (h.preventDefault(), o && Me(C, { select: !0 })) : h.shiftKey && w === C && (h.preventDefault(), o && Me(N, { select: !0 })) : w === k && h.preventDefault();
      }
    },
    [o, r, v.paused]
  );
  return /* @__PURE__ */ n(D.div, { tabIndex: -1, ...a, ref: g, onKeyDown: b });
});
_o.displayName = tl;
function ol(e, { select: t = !1 } = {}) {
  const o = document.activeElement;
  for (const r of e)
    if (Me(r, { select: t }), document.activeElement !== o) return;
}
function rl(e) {
  const t = tn(e), o = gr(t, e), r = gr(t.reverse(), e);
  return [o, r];
}
function tn(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function gr(e, t) {
  for (const o of e)
    if (!nl(o, { upTo: t })) return o;
}
function nl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function sl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && sl(e) && t && e.select();
  }
}
var vr = il();
function il() {
  let e = [];
  return {
    add(t) {
      const o = e[0];
      t !== o && o?.pause(), e = xr(e, t), e.unshift(t);
    },
    remove(t) {
      e = xr(e, t), e[0]?.resume();
    }
  };
}
function xr(e, t) {
  const o = [...e], r = o.indexOf(t);
  return r !== -1 && o.splice(r, 1), o;
}
function al(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ll = "Portal", Bo = c.forwardRef((e, t) => {
  const { container: o, ...r } = e, [s, i] = c.useState(!1);
  re(() => i(!0), []);
  const a = o || s && globalThis?.document?.body;
  return a ? Sa.createPortal(/* @__PURE__ */ n(D.div, { ...r, ref: t }), a) : null;
});
Bo.displayName = ll;
var mo = 0;
function on() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? br()), document.body.insertAdjacentElement("beforeend", e[1] ?? br()), mo++, () => {
      mo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), mo--;
    };
  }, []);
}
function br() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var he = function() {
  return he = Object.assign || function(t) {
    for (var o, r = 1, s = arguments.length; r < s; r++) {
      o = arguments[r];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
  }, he.apply(this, arguments);
};
function rn(e, t) {
  var o = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (o[r[s]] = e[r[s]]);
  return o;
}
function cl(e, t, o) {
  if (o || arguments.length === 2) for (var r = 0, s = t.length, i; r < s; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Mt = "right-scroll-bar-position", Et = "width-before-scroll-bar", dl = "with-scroll-bars-hidden", ul = "--removed-body-scroll-bar-size";
function ho(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fl(e, t) {
  var o = Ca(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return o.value;
        },
        set current(r) {
          var s = o.value;
          s !== r && (o.value = r, o.callback(r, s));
        }
      }
    };
  })[0];
  return o.callback = t, o.facade;
}
var pl = typeof window < "u" ? c.useLayoutEffect : c.useEffect, yr = /* @__PURE__ */ new WeakMap();
function ml(e, t) {
  var o = fl(null, function(r) {
    return e.forEach(function(s) {
      return ho(s, r);
    });
  });
  return pl(function() {
    var r = yr.get(o);
    if (r) {
      var s = new Set(r), i = new Set(e), a = o.current;
      s.forEach(function(l) {
        i.has(l) || ho(l, null);
      }), i.forEach(function(l) {
        s.has(l) || ho(l, a);
      });
    }
    yr.set(o, e);
  }, [e]), o;
}
function hl(e) {
  return e;
}
function gl(e, t) {
  t === void 0 && (t = hl);
  var o = [], r = !1, s = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return o.length ? o[o.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return o.push(a), function() {
        o = o.filter(function(l) {
          return l !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; o.length; ) {
        var a = o;
        o = [], a.forEach(i);
      }
      o = {
        push: function(l) {
          return i(l);
        },
        filter: function() {
          return o;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (o.length) {
        var l = o;
        o = [], l.forEach(i), a = o;
      }
      var d = function() {
        var f = a;
        a = [], f.forEach(i);
      }, u = function() {
        return Promise.resolve().then(d);
      };
      u(), o = {
        push: function(f) {
          a.push(f), u();
        },
        filter: function(f) {
          return a = a.filter(f), o;
        }
      };
    }
  };
  return s;
}
function vl(e) {
  e === void 0 && (e = {});
  var t = gl(null);
  return t.options = he({ async: !0, ssr: !1 }, e), t;
}
var nn = function(e) {
  var t = e.sideCar, o = rn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, he({}, o));
};
nn.isSideCarExport = !0;
function xl(e, t) {
  return e.useMedium(t), nn;
}
var sn = vl(), go = function() {
}, Ft = c.forwardRef(function(e, t) {
  var o = c.useRef(null), r = c.useState({
    onScrollCapture: go,
    onWheelCapture: go,
    onTouchMoveCapture: go
  }), s = r[0], i = r[1], a = e.forwardProps, l = e.children, d = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, g = e.sideCar, v = e.noRelative, b = e.noIsolation, h = e.inert, x = e.allowPinchZoom, w = e.as, k = w === void 0 ? "div" : w, C = e.gapMode, N = rn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, E = ml([o, t]), M = he(he({}, N), s);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(R, { sideCar: sn, removeScrollBar: u, shards: p, noRelative: v, noIsolation: b, inert: h, setCallbacks: i, allowPinchZoom: !!x, lockRef: o, gapMode: C }),
    a ? c.cloneElement(c.Children.only(l), he(he({}, M), { ref: E })) : c.createElement(k, he({}, M, { className: d, ref: E }), l)
  );
});
Ft.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ft.classNames = {
  fullWidth: Et,
  zeroRight: Mt
};
var bl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function yl() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = bl();
  return t && e.setAttribute("nonce", t), e;
}
function wl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function kl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Cl = function() {
  var e = 0, t = null;
  return {
    add: function(o) {
      e == 0 && (t = yl()) && (wl(t, o), kl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Nl = function() {
  var e = Cl();
  return function(t, o) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && o]);
  };
}, an = function() {
  var e = Nl(), t = function(o) {
    var r = o.styles, s = o.dynamic;
    return e(r, s), null;
  };
  return t;
}, Sl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, vo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ll = function(e) {
  var t = window.getComputedStyle(document.body), o = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [vo(o), vo(r), vo(s)];
}, Rl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Sl;
  var t = Ll(e), o = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - o + t[2] - t[0])
  };
}, Ml = an(), Qe = "data-scroll-locked", El = function(e, t, o, r) {
  var s = e.left, i = e.top, a = e.right, l = e.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(dl, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Qe, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    o === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    o === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Mt, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Et, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Mt, " .").concat(Mt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Et, " .").concat(Et, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Qe, `] {
    `).concat(ul, ": ").concat(l, `px;
  }
`);
}, wr = function() {
  var e = parseInt(document.body.getAttribute(Qe) || "0", 10);
  return isFinite(e) ? e : 0;
}, Al = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Qe, (wr() + 1).toString()), function() {
      var e = wr() - 1;
      e <= 0 ? document.body.removeAttribute(Qe) : document.body.setAttribute(Qe, e.toString());
    };
  }, []);
}, Il = function(e) {
  var t = e.noRelative, o = e.noImportant, r = e.gapMode, s = r === void 0 ? "margin" : r;
  Al();
  var i = c.useMemo(function() {
    return Rl(s);
  }, [s]);
  return c.createElement(Ml, { styles: El(i, !t, s, o ? "" : "!important") });
}, So = !1;
if (typeof window < "u")
  try {
    var wt = Object.defineProperty({}, "passive", {
      get: function() {
        return So = !0, !0;
      }
    });
    window.addEventListener("test", wt, wt), window.removeEventListener("test", wt, wt);
  } catch {
    So = !1;
  }
var Ye = So ? { passive: !1 } : !1, Pl = function(e) {
  return e.tagName === "TEXTAREA";
}, ln = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var o = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    o[t] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !Pl(e) && o[t] === "visible")
  );
}, Tl = function(e) {
  return ln(e, "overflowY");
}, Dl = function(e) {
  return ln(e, "overflowX");
}, kr = function(e, t) {
  var o = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var s = cn(e, r);
    if (s) {
      var i = dn(e, r), a = i[1], l = i[2];
      if (a > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== o.body);
  return !1;
}, Ol = function(e) {
  var t = e.scrollTop, o = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    o,
    r
  ];
}, zl = function(e) {
  var t = e.scrollLeft, o = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    o,
    r
  ];
}, cn = function(e, t) {
  return e === "v" ? Tl(t) : Dl(t);
}, dn = function(e, t) {
  return e === "v" ? Ol(t) : zl(t);
}, _l = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Bl = function(e, t, o, r, s) {
  var i = _l(e, window.getComputedStyle(t).direction), a = i * r, l = o.target, d = t.contains(l), u = !1, f = a > 0, p = 0, g = 0;
  do {
    if (!l)
      break;
    var v = dn(e, l), b = v[0], h = v[1], x = v[2], w = h - x - i * b;
    (b || w) && cn(e, l) && (p += w, g += b);
    var k = l.parentNode;
    l = k && k.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? k.host : k;
  } while (
    // portaled content
    !d && l !== document.body || // self content
    d && (t.contains(l) || t === l)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(g) < 1) && (u = !0), u;
}, kt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Cr = function(e) {
  return [e.deltaX, e.deltaY];
}, Nr = function(e) {
  return e && "current" in e ? e.current : e;
}, Wl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Vl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Fl = 0, qe = [];
function Hl(e) {
  var t = c.useRef([]), o = c.useRef([0, 0]), r = c.useRef(), s = c.useState(Fl++)[0], i = c.useState(an)[0], a = c.useRef(e);
  c.useEffect(function() {
    a.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var h = cl([e.lockRef.current], (e.shards || []).map(Nr), !0).filter(Boolean);
      return h.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), h.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = c.useCallback(function(h, x) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var w = kt(h), k = o.current, C = "deltaX" in h ? h.deltaX : k[0] - w[0], N = "deltaY" in h ? h.deltaY : k[1] - w[1], R, E = h.target, M = Math.abs(C) > Math.abs(N) ? "h" : "v";
    if ("touches" in h && M === "h" && E.type === "range")
      return !1;
    var S = window.getSelection(), O = S && S.anchorNode, B = O ? O === E || O.contains(E) : !1;
    if (B)
      return !1;
    var V = kr(M, E);
    if (!V)
      return !0;
    if (V ? R = M : (R = M === "v" ? "h" : "v", V = kr(M, E)), !V)
      return !1;
    if (!r.current && "changedTouches" in h && (C || N) && (r.current = R), !R)
      return !0;
    var H = r.current || R;
    return Bl(H, x, h, H === "h" ? C : N);
  }, []), d = c.useCallback(function(h) {
    var x = h;
    if (!(!qe.length || qe[qe.length - 1] !== i)) {
      var w = "deltaY" in x ? Cr(x) : kt(x), k = t.current.filter(function(R) {
        return R.name === x.type && (R.target === x.target || x.target === R.shadowParent) && Wl(R.delta, w);
      })[0];
      if (k && k.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!k) {
        var C = (a.current.shards || []).map(Nr).filter(Boolean).filter(function(R) {
          return R.contains(x.target);
        }), N = C.length > 0 ? l(x, C[0]) : !a.current.noIsolation;
        N && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(h, x, w, k) {
    var C = { name: h, delta: x, target: w, should: k, shadowParent: $l(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== C;
      });
    }, 1);
  }, []), f = c.useCallback(function(h) {
    o.current = kt(h), r.current = void 0;
  }, []), p = c.useCallback(function(h) {
    u(h.type, Cr(h), h.target, l(h, e.lockRef.current));
  }, []), g = c.useCallback(function(h) {
    u(h.type, kt(h), h.target, l(h, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return qe.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", d, Ye), document.addEventListener("touchmove", d, Ye), document.addEventListener("touchstart", f, Ye), function() {
      qe = qe.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", d, Ye), document.removeEventListener("touchmove", d, Ye), document.removeEventListener("touchstart", f, Ye);
    };
  }, []);
  var v = e.removeScrollBar, b = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    b ? c.createElement(i, { styles: Vl(s) }) : null,
    v ? c.createElement(Il, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function $l(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const jl = xl(sn, Hl);
var Wo = c.forwardRef(function(e, t) {
  return c.createElement(Ft, he({}, e, { ref: t, sideCar: jl }));
});
Wo.classNames = Ft.classNames;
var Ul = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xe = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), Nt = {}, xo = 0, un = function(e) {
  return e && (e.host || un(e.parentNode));
}, Gl = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var r = un(o);
    return r && e.contains(r) ? r : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Kl = function(e, t, o, r) {
  var s = Gl(t, Array.isArray(e) ? e : [e]);
  Nt[o] || (Nt[o] = /* @__PURE__ */ new WeakMap());
  var i = Nt[o], a = [], l = /* @__PURE__ */ new Set(), d = new Set(s), u = function(p) {
    !p || l.has(p) || (l.add(p), u(p.parentNode));
  };
  s.forEach(u);
  var f = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (l.has(g))
        f(g);
      else
        try {
          var v = g.getAttribute(r), b = v !== null && v !== "false", h = (Xe.get(g) || 0) + 1, x = (i.get(g) || 0) + 1;
          Xe.set(g, h), i.set(g, x), a.push(g), h === 1 && b && Ct.set(g, !0), x === 1 && g.setAttribute(o, "true"), b || g.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", g, w);
        }
    });
  };
  return f(t), l.clear(), xo++, function() {
    a.forEach(function(p) {
      var g = Xe.get(p) - 1, v = i.get(p) - 1;
      Xe.set(p, g), i.set(p, v), g || (Ct.has(p) || p.removeAttribute(r), Ct.delete(p)), v || p.removeAttribute(o);
    }), xo--, xo || (Xe = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), Nt = {});
  };
}, fn = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), s = Ul(e);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live], script"))), Kl(r, s, o, "aria-hidden")) : function() {
    return null;
  };
}, Ht = "Dialog", [pn, mn] = ae(Ht), [Yl, fe] = pn(Ht), hn = (e) => {
  const {
    __scopeDialog: t,
    children: o,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, l = c.useRef(null), d = c.useRef(null), [u, f] = Ie({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: Ht
  });
  return /* @__PURE__ */ n(
    Yl,
    {
      scope: t,
      triggerRef: l,
      contentRef: d,
      contentId: Ee(),
      titleId: Ee(),
      descriptionId: Ee(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((p) => !p), [f]),
      modal: a,
      children: o
    }
  );
};
hn.displayName = Ht;
var gn = "DialogTrigger", vn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(gn, o), i = U(t, s.triggerRef);
    return /* @__PURE__ */ n(
      D.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Ho(s.open),
        ...r,
        ref: i,
        onClick: z(e.onClick, s.onOpenToggle)
      }
    );
  }
);
vn.displayName = gn;
var Vo = "DialogPortal", [ql, xn] = pn(Vo, {
  forceMount: void 0
}), bn = (e) => {
  const { __scopeDialog: t, forceMount: o, children: r, container: s } = e, i = fe(Vo, t);
  return /* @__PURE__ */ n(ql, { scope: t, forceMount: o, children: c.Children.map(r, (a) => /* @__PURE__ */ n(Ge, { present: o || i.open, children: /* @__PURE__ */ n(Bo, { asChild: !0, container: s, children: a }) })) });
};
bn.displayName = Vo;
var It = "DialogOverlay", yn = c.forwardRef(
  (e, t) => {
    const o = xn(It, e.__scopeDialog), { forceMount: r = o.forceMount, ...s } = e, i = fe(It, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ n(Ge, { present: r || i.open, children: /* @__PURE__ */ n(Zl, { ...s, ref: t }) }) : null;
  }
);
yn.displayName = It;
var Xl = /* @__PURE__ */ tt("DialogOverlay.RemoveScroll"), Zl = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(It, o);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ n(Wo, { as: Xl, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ n(
        D.div,
        {
          "data-state": Ho(s.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), He = "DialogContent", wn = c.forwardRef(
  (e, t) => {
    const o = xn(He, e.__scopeDialog), { forceMount: r = o.forceMount, ...s } = e, i = fe(He, e.__scopeDialog);
    return /* @__PURE__ */ n(Ge, { present: r || i.open, children: i.modal ? /* @__PURE__ */ n(Ql, { ...s, ref: t }) : /* @__PURE__ */ n(Jl, { ...s, ref: t }) });
  }
);
wn.displayName = He;
var Ql = c.forwardRef(
  (e, t) => {
    const o = fe(He, e.__scopeDialog), r = c.useRef(null), s = U(t, o.contentRef, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return fn(i);
    }, []), /* @__PURE__ */ n(
      kn,
      {
        ...e,
        ref: s,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: z(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), o.triggerRef.current?.focus();
        }),
        onPointerDownOutside: z(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: z(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Jl = c.forwardRef(
  (e, t) => {
    const o = fe(He, e.__scopeDialog), r = c.useRef(!1), s = c.useRef(!1);
    return /* @__PURE__ */ n(
      kn,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          e.onCloseAutoFocus?.(i), i.defaultPrevented || (r.current || o.triggerRef.current?.focus(), i.preventDefault()), r.current = !1, s.current = !1;
        },
        onInteractOutside: (i) => {
          e.onInteractOutside?.(i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const a = i.target;
          o.triggerRef.current?.contains(a) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && s.current && i.preventDefault();
        }
      }
    );
  }
), kn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: i, ...a } = e, l = fe(He, o), d = c.useRef(null), u = U(t, d);
    return on(), /* @__PURE__ */ y(te, { children: [
      /* @__PURE__ */ n(
        _o,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: s,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ n(
            zo,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": Ho(l.open),
              ...a,
              ref: u,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ y(te, { children: [
        /* @__PURE__ */ n(tc, { titleId: l.titleId }),
        /* @__PURE__ */ n(rc, { contentRef: d, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), Fo = "DialogTitle", Cn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(Fo, o);
    return /* @__PURE__ */ n(D.h2, { id: s.titleId, ...r, ref: t });
  }
);
Cn.displayName = Fo;
var Nn = "DialogDescription", Sn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(Nn, o);
    return /* @__PURE__ */ n(D.p, { id: s.descriptionId, ...r, ref: t });
  }
);
Sn.displayName = Nn;
var Ln = "DialogClose", Rn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(Ln, o);
    return /* @__PURE__ */ n(
      D.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: z(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
Rn.displayName = Ln;
function Ho(e) {
  return e ? "open" : "closed";
}
var Mn = "DialogTitleWarning", [ec, En] = za(Mn, {
  contentName: He,
  titleName: Fo,
  docsSlug: "dialog"
}), tc = ({ titleId: e }) => {
  const t = En(Mn), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, oc = "DialogDescriptionWarning", rc = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${En(oc).contentName}}.`;
  return c.useEffect(() => {
    const s = e.current?.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, mt = hn, ht = vn, gt = bn, nt = yn, st = wn, vt = Cn, $t = Sn, Se = Rn, An = "AlertDialog", [nc] = ae(An, [
  mn
]), Le = mn(), In = (e) => {
  const { __scopeAlertDialog: t, ...o } = e, r = Le(t);
  return /* @__PURE__ */ n(mt, { ...r, ...o, modal: !0 });
};
In.displayName = An;
var sc = "AlertDialogTrigger", Pn = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
    return /* @__PURE__ */ n(ht, { ...s, ...r, ref: t });
  }
);
Pn.displayName = sc;
var ic = "AlertDialogPortal", Tn = (e) => {
  const { __scopeAlertDialog: t, ...o } = e, r = Le(t);
  return /* @__PURE__ */ n(gt, { ...r, ...o });
};
Tn.displayName = ic;
var ac = "AlertDialogOverlay", Dn = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
    return /* @__PURE__ */ n(nt, { ...s, ...r, ref: t });
  }
);
Dn.displayName = ac;
var Je = "AlertDialogContent", [lc, cc] = nc(Je), dc = /* @__PURE__ */ Ma("AlertDialogContent"), On = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, children: r, ...s } = e, i = Le(o), a = c.useRef(null), l = U(t, a), d = c.useRef(null);
    return /* @__PURE__ */ n(
      ec,
      {
        contentName: Je,
        titleName: zn,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ n(lc, { scope: o, cancelRef: d, children: /* @__PURE__ */ y(
          st,
          {
            role: "alertdialog",
            ...i,
            ...s,
            ref: l,
            onOpenAutoFocus: z(s.onOpenAutoFocus, (u) => {
              u.preventDefault(), d.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
            children: [
              /* @__PURE__ */ n(dc, { children: r }),
              /* @__PURE__ */ n(fc, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
On.displayName = Je;
var zn = "AlertDialogTitle", _n = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
    return /* @__PURE__ */ n(vt, { ...s, ...r, ref: t });
  }
);
_n.displayName = zn;
var Bn = "AlertDialogDescription", Wn = c.forwardRef((e, t) => {
  const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
  return /* @__PURE__ */ n($t, { ...s, ...r, ref: t });
});
Wn.displayName = Bn;
var uc = "AlertDialogAction", Vn = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
    return /* @__PURE__ */ n(Se, { ...s, ...r, ref: t });
  }
);
Vn.displayName = uc;
var Fn = "AlertDialogCancel", Hn = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, { cancelRef: s } = cc(Fn, o), i = Le(o), a = U(t, s);
    return /* @__PURE__ */ n(Se, { ...i, ...r, ref: a });
  }
);
Hn.displayName = Fn;
var fc = ({ contentRef: e }) => {
  const t = `\`${Je}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Je}\` by passing a \`${Bn}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Je}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return c.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, pc = In, mc = Pn, hc = Tn, $n = Dn, jn = On, Un = Vn, Gn = Hn, Kn = _n, Yn = Wn;
function jt(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Ut(e) {
  const [t, o] = c.useState(void 0);
  return re(() => {
    if (e) {
      o({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let a, l;
        if ("borderBoxSize" in i) {
          const d = i.borderBoxSize, u = Array.isArray(d) ? d[0] : d;
          a = u.inlineSize, l = u.blockSize;
        } else
          a = e.offsetWidth, l = e.offsetHeight;
        o({ width: a, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      o(void 0);
  }, [e]), t;
}
var Gt = "Checkbox", [gc] = ae(Gt), [vc, $o] = gc(Gt);
function xc(e) {
  const {
    __scopeCheckbox: t,
    checked: o,
    children: r,
    defaultChecked: s,
    disabled: i,
    form: a,
    name: l,
    onCheckedChange: d,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [g, v] = Ie({
    prop: o,
    defaultProp: s ?? !1,
    onChange: d,
    caller: Gt
  }), [b, h] = c.useState(null), [x, w] = c.useState(null), k = c.useRef(!1), C = b ? !!a || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), N = {
    checked: g,
    disabled: i,
    setChecked: v,
    control: b,
    setControl: h,
    name: l,
    form: a,
    value: f,
    hasConsumerStoppedPropagationRef: k,
    required: u,
    defaultChecked: Ae(s) ? !1 : s,
    isFormControl: C,
    bubbleInput: x,
    setBubbleInput: w
  };
  return /* @__PURE__ */ n(
    vc,
    {
      scope: t,
      ...N,
      children: bc(p) ? p(N) : r
    }
  );
}
var qn = "CheckboxTrigger", Xn = c.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: o, ...r }, s) => {
    const {
      control: i,
      value: a,
      disabled: l,
      checked: d,
      required: u,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: g,
      isFormControl: v,
      bubbleInput: b
    } = $o(qn, e), h = U(s, f), x = c.useRef(d);
    return c.useEffect(() => {
      const w = i?.form;
      if (w) {
        const k = () => p(x.current);
        return w.addEventListener("reset", k), () => w.removeEventListener("reset", k);
      }
    }, [i, p]), /* @__PURE__ */ n(
      D.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ae(d) ? "mixed" : d,
        "aria-required": u,
        "data-state": ts(d),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: a,
        ...r,
        ref: h,
        onKeyDown: z(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: z(o, (w) => {
          p((k) => Ae(k) ? !0 : !k), b && v && (g.current = w.isPropagationStopped(), g.current || w.stopPropagation());
        })
      }
    );
  }
);
Xn.displayName = qn;
var jo = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: o,
      name: r,
      checked: s,
      defaultChecked: i,
      required: a,
      disabled: l,
      value: d,
      onCheckedChange: u,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ n(
      xc,
      {
        __scopeCheckbox: o,
        checked: s,
        defaultChecked: i,
        disabled: l,
        required: a,
        onCheckedChange: u,
        name: r,
        form: f,
        value: d,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ y(te, { children: [
          /* @__PURE__ */ n(
            Xn,
            {
              ...p,
              ref: t,
              __scopeCheckbox: o
            }
          ),
          g && /* @__PURE__ */ n(
            es,
            {
              __scopeCheckbox: o
            }
          )
        ] })
      }
    );
  }
);
jo.displayName = Gt;
var Zn = "CheckboxIndicator", Qn = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: o, forceMount: r, ...s } = e, i = $o(Zn, o);
    return /* @__PURE__ */ n(
      Ge,
      {
        present: r || Ae(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ n(
          D.span,
          {
            "data-state": ts(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...s,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Qn.displayName = Zn;
var Jn = "CheckboxBubbleInput", es = c.forwardRef(
  ({ __scopeCheckbox: e, ...t }, o) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: s,
      checked: i,
      defaultChecked: a,
      required: l,
      disabled: d,
      name: u,
      value: f,
      form: p,
      bubbleInput: g,
      setBubbleInput: v
    } = $o(Jn, e), b = U(o, v), h = jt(i), x = Ut(r);
    c.useEffect(() => {
      const k = g;
      if (!k) return;
      const C = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, E = !s.current;
      if (h !== i && R) {
        const M = new Event("click", { bubbles: E });
        k.indeterminate = Ae(i), R.call(k, Ae(i) ? !1 : i), k.dispatchEvent(M);
      }
    }, [g, h, i, s]);
    const w = c.useRef(Ae(i) ? !1 : i);
    return /* @__PURE__ */ n(
      D.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? w.current,
        required: l,
        disabled: d,
        name: u,
        value: f,
        form: p,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
          ...t.style,
          ...x,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
es.displayName = Jn;
function bc(e) {
  return typeof e == "function";
}
function Ae(e) {
  return e === "indeterminate";
}
function ts(e) {
  return Ae(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const yc = ["top", "right", "bottom", "left"], Te = Math.min, ne = Math.max, Pt = Math.round, St = Math.floor, ve = (e) => ({
  x: e,
  y: e
}), wc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kc = {
  start: "end",
  end: "start"
};
function Lo(e, t, o) {
  return ne(e, Te(t, o));
}
function Ce(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ne(e) {
  return e.split("-")[0];
}
function it(e) {
  return e.split("-")[1];
}
function Uo(e) {
  return e === "x" ? "y" : "x";
}
function Go(e) {
  return e === "y" ? "height" : "width";
}
const Cc = /* @__PURE__ */ new Set(["top", "bottom"]);
function ge(e) {
  return Cc.has(Ne(e)) ? "y" : "x";
}
function Ko(e) {
  return Uo(ge(e));
}
function Nc(e, t, o) {
  o === void 0 && (o = !1);
  const r = it(e), s = Ko(e), i = Go(s);
  let a = s === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Tt(a)), [a, Tt(a)];
}
function Sc(e) {
  const t = Tt(e);
  return [Ro(e), t, Ro(t)];
}
function Ro(e) {
  return e.replace(/start|end/g, (t) => kc[t]);
}
const Sr = ["left", "right"], Lr = ["right", "left"], Lc = ["top", "bottom"], Rc = ["bottom", "top"];
function Mc(e, t, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? Lr : Sr : t ? Sr : Lr;
    case "left":
    case "right":
      return t ? Lc : Rc;
    default:
      return [];
  }
}
function Ec(e, t, o, r) {
  const s = it(e);
  let i = Mc(Ne(e), o === "start", r);
  return s && (i = i.map((a) => a + "-" + s), t && (i = i.concat(i.map(Ro)))), i;
}
function Tt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wc[t]);
}
function Ac(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function os(e) {
  return typeof e != "number" ? Ac(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Dt(e) {
  const {
    x: t,
    y: o,
    width: r,
    height: s
  } = e;
  return {
    width: r,
    height: s,
    top: o,
    left: t,
    right: t + r,
    bottom: o + s,
    x: t,
    y: o
  };
}
function Rr(e, t, o) {
  let {
    reference: r,
    floating: s
  } = e;
  const i = ge(t), a = Ko(t), l = Go(a), d = Ne(t), u = i === "y", f = r.x + r.width / 2 - s.width / 2, p = r.y + r.height / 2 - s.height / 2, g = r[l] / 2 - s[l] / 2;
  let v;
  switch (d) {
    case "top":
      v = {
        x: f,
        y: r.y - s.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: r.x - s.width,
        y: p
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (it(t)) {
    case "start":
      v[a] -= g * (o && u ? -1 : 1);
      break;
    case "end":
      v[a] += g * (o && u ? -1 : 1);
      break;
  }
  return v;
}
async function Ic(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: r,
    y: s,
    platform: i,
    rects: a,
    elements: l,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: v = 0
  } = Ce(t, e), b = os(v), x = l[g ? p === "floating" ? "reference" : "floating" : p], w = Dt(await i.getClippingRect({
    element: (o = await (i.isElement == null ? void 0 : i.isElement(x))) == null || o ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: d
  })), k = p === "floating" ? {
    x: r,
    y: s,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), N = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Dt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: k,
    offsetParent: C,
    strategy: d
  }) : k);
  return {
    top: (w.top - R.top + b.top) / N.y,
    bottom: (R.bottom - w.bottom + b.bottom) / N.y,
    left: (w.left - R.left + b.left) / N.x,
    right: (R.right - w.right + b.right) / N.x
  };
}
const Pc = async (e, t, o) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: a
  } = o, l = i.filter(Boolean), d = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: f,
    y: p
  } = Rr(u, r, d), g = r, v = {}, b = 0;
  for (let x = 0; x < l.length; x++) {
    var h;
    const {
      name: w,
      fn: k
    } = l[x], {
      x: C,
      y: N,
      data: R,
      reset: E
    } = await k({
      x: f,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: s,
      middlewareData: v,
      rects: u,
      platform: {
        ...a,
        detectOverflow: (h = a.detectOverflow) != null ? h : Ic
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    f = C ?? f, p = N ?? p, v = {
      ...v,
      [w]: {
        ...v[w],
        ...R
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (g = E.placement), E.rects && (u = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : E.rects), {
      x: f,
      y: p
    } = Rr(u, g, d)), x = -1);
  }
  return {
    x: f,
    y: p,
    placement: g,
    strategy: s,
    middlewareData: v
  };
}, Tc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: r,
      placement: s,
      rects: i,
      platform: a,
      elements: l,
      middlewareData: d
    } = t, {
      element: u,
      padding: f = 0
    } = Ce(e, t) || {};
    if (u == null)
      return {};
    const p = os(f), g = {
      x: o,
      y: r
    }, v = Ko(s), b = Go(v), h = await a.getDimensions(u), x = v === "y", w = x ? "top" : "left", k = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", N = i.reference[b] + i.reference[v] - g[v] - i.floating[b], R = g[v] - i.reference[v], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let M = E ? E[C] : 0;
    (!M || !await (a.isElement == null ? void 0 : a.isElement(E))) && (M = l.floating[C] || i.floating[b]);
    const S = N / 2 - R / 2, O = M / 2 - h[b] / 2 - 1, B = Te(p[w], O), V = Te(p[k], O), H = B, $ = M - h[b] - V, F = M / 2 - h[b] / 2 + S, j = Lo(H, F, $), T = !d.arrow && it(s) != null && F !== j && i.reference[b] / 2 - (F < H ? B : V) - h[b] / 2 < 0, W = T ? F < H ? F - H : F - $ : 0;
    return {
      [v]: g[v] + W,
      data: {
        [v]: j,
        centerOffset: F - j - W,
        ...T && {
          alignmentOffset: W
        }
      },
      reset: T
    };
  }
}), Dc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, r;
      const {
        placement: s,
        middlewareData: i,
        rects: a,
        initialPlacement: l,
        platform: d,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ...x
      } = Ce(e, t);
      if ((o = i.arrow) != null && o.alignmentOffset)
        return {};
      const w = Ne(s), k = ge(l), C = Ne(l) === l, N = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), R = g || (C || !h ? [Tt(l)] : Sc(l)), E = b !== "none";
      !g && E && R.push(...Ec(l, h, b, N));
      const M = [l, ...R], S = await d.detectOverflow(t, x), O = [];
      let B = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && O.push(S[w]), p) {
        const F = Nc(s, a, N);
        O.push(S[F[0]], S[F[1]]);
      }
      if (B = [...B, {
        placement: s,
        overflows: O
      }], !O.every((F) => F <= 0)) {
        var V, H;
        const F = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, j = M[F];
        if (j && (!(p === "alignment" ? k !== ge(j) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((L) => ge(L.placement) === k ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: B
            },
            reset: {
              placement: j
            }
          };
        let T = (H = B.filter((W) => W.overflows[0] <= 0).sort((W, L) => W.overflows[1] - L.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!T)
          switch (v) {
            case "bestFit": {
              var $;
              const W = ($ = B.filter((L) => {
                if (E) {
                  const K = ge(L.placement);
                  return K === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((K) => K > 0).reduce((K, oe) => K + oe, 0)]).sort((L, K) => L[1] - K[1])[0]) == null ? void 0 : $[0];
              W && (T = W);
              break;
            }
            case "initialPlacement":
              T = l;
              break;
          }
        if (s !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function Mr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Er(e) {
  return yc.some((t) => e[t] >= 0);
}
const Oc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o,
        platform: r
      } = t, {
        strategy: s = "referenceHidden",
        ...i
      } = Ce(e, t);
      switch (s) {
        case "referenceHidden": {
          const a = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = Mr(a, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Er(l)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = Mr(a, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Er(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, rs = /* @__PURE__ */ new Set(["left", "top"]);
async function zc(e, t) {
  const {
    placement: o,
    platform: r,
    elements: s
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), a = Ne(o), l = it(o), d = ge(o) === "y", u = rs.has(a) ? -1 : 1, f = i && d ? -1 : 1, p = Ce(t, e);
  let {
    mainAxis: g,
    crossAxis: v,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return l && typeof b == "number" && (v = l === "end" ? b * -1 : b), d ? {
    x: v * f,
    y: g * u
  } : {
    x: g * u,
    y: v * f
  };
}
const _c = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, r;
      const {
        x: s,
        y: i,
        placement: a,
        middlewareData: l
      } = t, d = await zc(t, e);
      return a === ((o = l.offset) == null ? void 0 : o.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: s + d.x,
        y: i + d.y,
        data: {
          ...d,
          placement: a
        }
      };
    }
  };
}, Bc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: r,
        placement: s,
        platform: i
      } = t, {
        mainAxis: a = !0,
        crossAxis: l = !1,
        limiter: d = {
          fn: (w) => {
            let {
              x: k,
              y: C
            } = w;
            return {
              x: k,
              y: C
            };
          }
        },
        ...u
      } = Ce(e, t), f = {
        x: o,
        y: r
      }, p = await i.detectOverflow(t, u), g = ge(Ne(s)), v = Uo(g);
      let b = f[v], h = f[g];
      if (a) {
        const w = v === "y" ? "top" : "left", k = v === "y" ? "bottom" : "right", C = b + p[w], N = b - p[k];
        b = Lo(C, b, N);
      }
      if (l) {
        const w = g === "y" ? "top" : "left", k = g === "y" ? "bottom" : "right", C = h + p[w], N = h - p[k];
        h = Lo(C, h, N);
      }
      const x = d.fn({
        ...t,
        [v]: b,
        [g]: h
      });
      return {
        ...x,
        data: {
          x: x.x - o,
          y: x.y - r,
          enabled: {
            [v]: a,
            [g]: l
          }
        }
      };
    }
  };
}, Wc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: o,
        y: r,
        placement: s,
        rects: i,
        middlewareData: a
      } = t, {
        offset: l = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = Ce(e, t), f = {
        x: o,
        y: r
      }, p = ge(s), g = Uo(p);
      let v = f[g], b = f[p];
      const h = Ce(l, t), x = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const C = g === "y" ? "height" : "width", N = i.reference[g] - i.floating[C] + x.mainAxis, R = i.reference[g] + i.reference[C] - x.mainAxis;
        v < N ? v = N : v > R && (v = R);
      }
      if (u) {
        var w, k;
        const C = g === "y" ? "width" : "height", N = rs.has(Ne(s)), R = i.reference[p] - i.floating[C] + (N && ((w = a.offset) == null ? void 0 : w[p]) || 0) + (N ? 0 : x.crossAxis), E = i.reference[p] + i.reference[C] + (N ? 0 : ((k = a.offset) == null ? void 0 : k[p]) || 0) - (N ? x.crossAxis : 0);
        b < R ? b = R : b > E && (b = E);
      }
      return {
        [g]: v,
        [p]: b
      };
    }
  };
}, Vc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, r;
      const {
        placement: s,
        rects: i,
        platform: a,
        elements: l
      } = t, {
        apply: d = () => {
        },
        ...u
      } = Ce(e, t), f = await a.detectOverflow(t, u), p = Ne(s), g = it(s), v = ge(s) === "y", {
        width: b,
        height: h
      } = i.floating;
      let x, w;
      p === "top" || p === "bottom" ? (x = p, w = g === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = p, x = g === "end" ? "top" : "bottom");
      const k = h - f.top - f.bottom, C = b - f.left - f.right, N = Te(h - f[x], k), R = Te(b - f[w], C), E = !t.middlewareData.shift;
      let M = N, S = R;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (S = C), (r = t.middlewareData.shift) != null && r.enabled.y && (M = k), E && !g) {
        const B = ne(f.left, 0), V = ne(f.right, 0), H = ne(f.top, 0), $ = ne(f.bottom, 0);
        v ? S = b - 2 * (B !== 0 || V !== 0 ? B + V : ne(f.left, f.right)) : M = h - 2 * (H !== 0 || $ !== 0 ? H + $ : ne(f.top, f.bottom));
      }
      await d({
        ...t,
        availableWidth: S,
        availableHeight: M
      });
      const O = await a.getDimensions(l.floating);
      return b !== O.width || h !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Kt() {
  return typeof window < "u";
}
function at(e) {
  return ns(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ye(e) {
  var t;
  return (t = (ns(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ns(e) {
  return Kt() ? e instanceof Node || e instanceof se(e).Node : !1;
}
function de(e) {
  return Kt() ? e instanceof Element || e instanceof se(e).Element : !1;
}
function be(e) {
  return Kt() ? e instanceof HTMLElement || e instanceof se(e).HTMLElement : !1;
}
function Ar(e) {
  return !Kt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
const Fc = /* @__PURE__ */ new Set(["inline", "contents"]);
function xt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: r,
    display: s
  } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + o) && !Fc.has(s);
}
const Hc = /* @__PURE__ */ new Set(["table", "td", "th"]);
function $c(e) {
  return Hc.has(at(e));
}
const jc = [":popover-open", ":modal"];
function Yt(e) {
  return jc.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Uc = ["transform", "translate", "scale", "rotate", "perspective"], Gc = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Kc = ["paint", "layout", "strict", "content"];
function Yo(e) {
  const t = qo(), o = de(e) ? ue(e) : e;
  return Uc.some((r) => o[r] ? o[r] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || Gc.some((r) => (o.willChange || "").includes(r)) || Kc.some((r) => (o.contain || "").includes(r));
}
function Yc(e) {
  let t = De(e);
  for (; be(t) && !ot(t); ) {
    if (Yo(t))
      return t;
    if (Yt(t))
      return null;
    t = De(t);
  }
  return null;
}
function qo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const qc = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ot(e) {
  return qc.has(at(e));
}
function ue(e) {
  return se(e).getComputedStyle(e);
}
function qt(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function De(e) {
  if (at(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ar(e) && e.host || // Fallback.
    ye(e)
  );
  return Ar(t) ? t.host : t;
}
function ss(e) {
  const t = De(e);
  return ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : be(t) && xt(t) ? t : ss(t);
}
function ft(e, t, o) {
  var r;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const s = ss(e), i = s === ((r = e.ownerDocument) == null ? void 0 : r.body), a = se(s);
  if (i) {
    const l = Mo(a);
    return t.concat(a, a.visualViewport || [], xt(s) ? s : [], l && o ? ft(l) : []);
  }
  return t.concat(s, ft(s, [], o));
}
function Mo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function is(e) {
  const t = ue(e);
  let o = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = be(e), i = s ? e.offsetWidth : o, a = s ? e.offsetHeight : r, l = Pt(o) !== i || Pt(r) !== a;
  return l && (o = i, r = a), {
    width: o,
    height: r,
    $: l
  };
}
function Xo(e) {
  return de(e) ? e : e.contextElement;
}
function et(e) {
  const t = Xo(e);
  if (!be(t))
    return ve(1);
  const o = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = is(t);
  let a = (i ? Pt(o.width) : o.width) / r, l = (i ? Pt(o.height) : o.height) / s;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
const Xc = /* @__PURE__ */ ve(0);
function as(e) {
  const t = se(e);
  return !qo() || !t.visualViewport ? Xc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Zc(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== se(e) ? !1 : t;
}
function $e(e, t, o, r) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const s = e.getBoundingClientRect(), i = Xo(e);
  let a = ve(1);
  t && (r ? de(r) && (a = et(r)) : a = et(e));
  const l = Zc(i, o, r) ? as(i) : ve(0);
  let d = (s.left + l.x) / a.x, u = (s.top + l.y) / a.y, f = s.width / a.x, p = s.height / a.y;
  if (i) {
    const g = se(i), v = r && de(r) ? se(r) : r;
    let b = g, h = Mo(b);
    for (; h && r && v !== b; ) {
      const x = et(h), w = h.getBoundingClientRect(), k = ue(h), C = w.left + (h.clientLeft + parseFloat(k.paddingLeft)) * x.x, N = w.top + (h.clientTop + parseFloat(k.paddingTop)) * x.y;
      d *= x.x, u *= x.y, f *= x.x, p *= x.y, d += C, u += N, b = se(h), h = Mo(b);
    }
  }
  return Dt({
    width: f,
    height: p,
    x: d,
    y: u
  });
}
function Xt(e, t) {
  const o = qt(e).scrollLeft;
  return t ? t.left + o : $e(ye(e)).left + o;
}
function ls(e, t) {
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - Xt(e, o), s = o.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function Qc(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: r,
    strategy: s
  } = e;
  const i = s === "fixed", a = ye(r), l = t ? Yt(t.floating) : !1;
  if (r === a || l && i)
    return o;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ve(1);
  const f = ve(0), p = be(r);
  if ((p || !p && !i) && ((at(r) !== "body" || xt(a)) && (d = qt(r)), be(r))) {
    const v = $e(r);
    u = et(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const g = a && !p && !i ? ls(a, d) : ve(0);
  return {
    width: o.width * u.x,
    height: o.height * u.y,
    x: o.x * u.x - d.scrollLeft * u.x + f.x + g.x,
    y: o.y * u.y - d.scrollTop * u.y + f.y + g.y
  };
}
function Jc(e) {
  return Array.from(e.getClientRects());
}
function ed(e) {
  const t = ye(e), o = qt(e), r = e.ownerDocument.body, s = ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -o.scrollLeft + Xt(e);
  const l = -o.scrollTop;
  return ue(r).direction === "rtl" && (a += ne(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const Ir = 25;
function td(e, t) {
  const o = se(e), r = ye(e), s = o.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, l = 0, d = 0;
  if (s) {
    i = s.width, a = s.height;
    const f = qo();
    (!f || f && t === "fixed") && (l = s.offsetLeft, d = s.offsetTop);
  }
  const u = Xt(r);
  if (u <= 0) {
    const f = r.ownerDocument, p = f.body, g = getComputedStyle(p), v = f.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, b = Math.abs(r.clientWidth - p.clientWidth - v);
    b <= Ir && (i -= b);
  } else u <= Ir && (i += u);
  return {
    width: i,
    height: a,
    x: l,
    y: d
  };
}
const od = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function rd(e, t) {
  const o = $e(e, !0, t === "fixed"), r = o.top + e.clientTop, s = o.left + e.clientLeft, i = be(e) ? et(e) : ve(1), a = e.clientWidth * i.x, l = e.clientHeight * i.y, d = s * i.x, u = r * i.y;
  return {
    width: a,
    height: l,
    x: d,
    y: u
  };
}
function Pr(e, t, o) {
  let r;
  if (t === "viewport")
    r = td(e, o);
  else if (t === "document")
    r = ed(ye(e));
  else if (de(t))
    r = rd(t, o);
  else {
    const s = as(e);
    r = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Dt(r);
}
function cs(e, t) {
  const o = De(e);
  return o === t || !de(o) || ot(o) ? !1 : ue(o).position === "fixed" || cs(o, t);
}
function nd(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let r = ft(e, [], !1).filter((l) => de(l) && at(l) !== "body"), s = null;
  const i = ue(e).position === "fixed";
  let a = i ? De(e) : e;
  for (; de(a) && !ot(a); ) {
    const l = ue(a), d = Yo(a);
    !d && l.position === "fixed" && (s = null), (i ? !d && !s : !d && l.position === "static" && !!s && od.has(s.position) || xt(a) && !d && cs(e, a)) ? r = r.filter((f) => f !== a) : s = l, a = De(a);
  }
  return t.set(e, r), r;
}
function sd(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: r,
    strategy: s
  } = e;
  const a = [...o === "clippingAncestors" ? Yt(t) ? [] : nd(t, this._c) : [].concat(o), r], l = a[0], d = a.reduce((u, f) => {
    const p = Pr(t, f, s);
    return u.top = ne(p.top, u.top), u.right = Te(p.right, u.right), u.bottom = Te(p.bottom, u.bottom), u.left = ne(p.left, u.left), u;
  }, Pr(t, l, s));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function id(e) {
  const {
    width: t,
    height: o
  } = is(e);
  return {
    width: t,
    height: o
  };
}
function ad(e, t, o) {
  const r = be(t), s = ye(t), i = o === "fixed", a = $e(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = ve(0);
  function u() {
    d.x = Xt(s);
  }
  if (r || !r && !i)
    if ((at(t) !== "body" || xt(s)) && (l = qt(t)), r) {
      const v = $e(t, !0, i, t);
      d.x = v.x + t.clientLeft, d.y = v.y + t.clientTop;
    } else s && u();
  i && !r && s && u();
  const f = s && !r && !i ? ls(s, l) : ve(0), p = a.left + l.scrollLeft - d.x - f.x, g = a.top + l.scrollTop - d.y - f.y;
  return {
    x: p,
    y: g,
    width: a.width,
    height: a.height
  };
}
function bo(e) {
  return ue(e).position === "static";
}
function Tr(e, t) {
  if (!be(e) || ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return ye(e) === o && (o = o.ownerDocument.body), o;
}
function ds(e, t) {
  const o = se(e);
  if (Yt(e))
    return o;
  if (!be(e)) {
    let s = De(e);
    for (; s && !ot(s); ) {
      if (de(s) && !bo(s))
        return s;
      s = De(s);
    }
    return o;
  }
  let r = Tr(e, t);
  for (; r && $c(r) && bo(r); )
    r = Tr(r, t);
  return r && ot(r) && bo(r) && !Yo(r) ? o : r || Yc(e) || o;
}
const ld = async function(e) {
  const t = this.getOffsetParent || ds, o = this.getDimensions, r = await o(e.floating);
  return {
    reference: ad(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function cd(e) {
  return ue(e).direction === "rtl";
}
const dd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qc,
  getDocumentElement: ye,
  getClippingRect: sd,
  getOffsetParent: ds,
  getElementRects: ld,
  getClientRects: Jc,
  getDimensions: id,
  getScale: et,
  isElement: de,
  isRTL: cd
};
function us(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ud(e, t) {
  let o = null, r;
  const s = ye(e);
  function i() {
    var l;
    clearTimeout(r), (l = o) == null || l.disconnect(), o = null;
  }
  function a(l, d) {
    l === void 0 && (l = !1), d === void 0 && (d = 1), i();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: g,
      height: v
    } = u;
    if (l || t(), !g || !v)
      return;
    const b = St(p), h = St(s.clientWidth - (f + g)), x = St(s.clientHeight - (p + v)), w = St(f), C = {
      rootMargin: -b + "px " + -h + "px " + -x + "px " + -w + "px",
      threshold: ne(0, Te(1, d)) || 1
    };
    let N = !0;
    function R(E) {
      const M = E[0].intersectionRatio;
      if (M !== d) {
        if (!N)
          return a();
        M ? a(!1, M) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !us(u, e.getBoundingClientRect()) && a(), N = !1;
    }
    try {
      o = new IntersectionObserver(R, {
        ...C,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(R, C);
    }
    o.observe(e);
  }
  return a(!0), i;
}
function fd(e, t, o, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = r, u = Xo(e), f = s || i ? [...u ? ft(u) : [], ...ft(t)] : [];
  f.forEach((w) => {
    s && w.addEventListener("scroll", o, {
      passive: !0
    }), i && w.addEventListener("resize", o);
  });
  const p = u && l ? ud(u, o) : null;
  let g = -1, v = null;
  a && (v = new ResizeObserver((w) => {
    let [k] = w;
    k && k.target === u && v && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var C;
      (C = v) == null || C.observe(t);
    })), o();
  }), u && !d && v.observe(u), v.observe(t));
  let b, h = d ? $e(e) : null;
  d && x();
  function x() {
    const w = $e(e);
    h && !us(h, w) && o(), h = w, b = requestAnimationFrame(x);
  }
  return o(), () => {
    var w;
    f.forEach((k) => {
      s && k.removeEventListener("scroll", o), i && k.removeEventListener("resize", o);
    }), p?.(), (w = v) == null || w.disconnect(), v = null, d && cancelAnimationFrame(b);
  };
}
const pd = _c, md = Bc, hd = Dc, gd = Vc, vd = Oc, Dr = Tc, xd = Wc, bd = (e, t, o) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: dd,
    ...o
  }, i = {
    ...s.platform,
    _c: r
  };
  return Pc(e, t, {
    ...s,
    platform: i
  });
};
var yd = typeof document < "u", wd = function() {
}, At = yd ? Na : wd;
function Ot(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let o, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (o = e.length, o !== t.length) return !1;
      for (r = o; r-- !== 0; )
        if (!Ot(e[r], t[r]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), o = s.length, o !== Object.keys(t).length)
      return !1;
    for (r = o; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = o; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Ot(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function fs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Or(e, t) {
  const o = fs(e);
  return Math.round(t * o) / o;
}
function yo(e) {
  const t = c.useRef(e);
  return At(() => {
    t.current = e;
  }), t;
}
function kd(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: s,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: l = !0,
    whileElementsMounted: d,
    open: u
  } = e, [f, p] = c.useState({
    x: 0,
    y: 0,
    strategy: o,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, v] = c.useState(r);
  Ot(g, r) || v(r);
  const [b, h] = c.useState(null), [x, w] = c.useState(null), k = c.useCallback((L) => {
    L !== E.current && (E.current = L, h(L));
  }, []), C = c.useCallback((L) => {
    L !== M.current && (M.current = L, w(L));
  }, []), N = i || b, R = a || x, E = c.useRef(null), M = c.useRef(null), S = c.useRef(f), O = d != null, B = yo(d), V = yo(s), H = yo(u), $ = c.useCallback(() => {
    if (!E.current || !M.current)
      return;
    const L = {
      placement: t,
      strategy: o,
      middleware: g
    };
    V.current && (L.platform = V.current), bd(E.current, M.current, L).then((K) => {
      const oe = {
        ...K,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      F.current && !Ot(S.current, oe) && (S.current = oe, Wt.flushSync(() => {
        p(oe);
      }));
    });
  }, [g, t, o, V, H]);
  At(() => {
    u === !1 && S.current.isPositioned && (S.current.isPositioned = !1, p((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [u]);
  const F = c.useRef(!1);
  At(() => (F.current = !0, () => {
    F.current = !1;
  }), []), At(() => {
    if (N && (E.current = N), R && (M.current = R), N && R) {
      if (B.current)
        return B.current(N, R, $);
      $();
    }
  }, [N, R, $, B, O]);
  const j = c.useMemo(() => ({
    reference: E,
    floating: M,
    setReference: k,
    setFloating: C
  }), [k, C]), T = c.useMemo(() => ({
    reference: N,
    floating: R
  }), [N, R]), W = c.useMemo(() => {
    const L = {
      position: o,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return L;
    const K = Or(T.floating, f.x), oe = Or(T.floating, f.y);
    return l ? {
      ...L,
      transform: "translate(" + K + "px, " + oe + "px)",
      ...fs(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: o,
      left: K,
      top: oe
    };
  }, [o, l, T.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: $,
    refs: j,
    elements: T,
    floatingStyles: W
  }), [f, $, j, T, W]);
}
const Cd = (e) => {
  function t(o) {
    return {}.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(o) {
      const {
        element: r,
        padding: s
      } = typeof e == "function" ? e(o) : e;
      return r && t(r) ? r.current != null ? Dr({
        element: r.current,
        padding: s
      }).fn(o) : {} : r ? Dr({
        element: r,
        padding: s
      }).fn(o) : {};
    }
  };
}, Nd = (e, t) => ({
  ...pd(e),
  options: [e, t]
}), Sd = (e, t) => ({
  ...md(e),
  options: [e, t]
}), Ld = (e, t) => ({
  ...xd(e),
  options: [e, t]
}), Rd = (e, t) => ({
  ...hd(e),
  options: [e, t]
}), Md = (e, t) => ({
  ...gd(e),
  options: [e, t]
}), Ed = (e, t) => ({
  ...vd(e),
  options: [e, t]
}), Ad = (e, t) => ({
  ...Cd(e),
  options: [e, t]
});
var Id = "Arrow", ps = c.forwardRef((e, t) => {
  const { children: o, width: r = 10, height: s = 5, ...i } = e;
  return /* @__PURE__ */ n(
    D.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? o : /* @__PURE__ */ n("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ps.displayName = Id;
var Pd = ps, Zo = "Popper", [ms, hs] = ae(Zo), [Td, gs] = ms(Zo), vs = (e) => {
  const { __scopePopper: t, children: o } = e, [r, s] = c.useState(null);
  return /* @__PURE__ */ n(Td, { scope: t, anchor: r, onAnchorChange: s, children: o });
};
vs.displayName = Zo;
var xs = "PopperAnchor", bs = c.forwardRef(
  (e, t) => {
    const { __scopePopper: o, virtualRef: r, ...s } = e, i = gs(xs, o), a = c.useRef(null), l = U(t, a), d = c.useRef(null);
    return c.useEffect(() => {
      const u = d.current;
      d.current = r?.current || a.current, u !== d.current && i.onAnchorChange(d.current);
    }), r ? null : /* @__PURE__ */ n(D.div, { ...s, ref: l });
  }
);
bs.displayName = xs;
var Qo = "PopperContent", [Dd, Od] = ms(Qo), ys = c.forwardRef(
  (e, t) => {
    const {
      __scopePopper: o,
      side: r = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: d = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: b,
      ...h
    } = e, x = gs(Qo, o), [w, k] = c.useState(null), C = U(t, (A) => k(A)), [N, R] = c.useState(null), E = Ut(N), M = E?.width ?? 0, S = E?.height ?? 0, O = r + (i !== "center" ? "-" + i : ""), B = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, V = Array.isArray(u) ? u : [u], H = V.length > 0, $ = {
      padding: B,
      boundary: V.filter(_d),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: F, floatingStyles: j, placement: T, isPositioned: W, middlewareData: L } = kd({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...A) => fd(...A, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        Nd({ mainAxis: s + S, alignmentAxis: a }),
        d && Sd({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Ld() : void 0,
          ...$
        }),
        d && Rd({ ...$ }),
        Md({
          ...$,
          apply: ({ elements: A, rects: q, availableWidth: J, availableHeight: G }) => {
            const { width: Y, height: X } = q.reference, ie = A.floating.style;
            ie.setProperty("--radix-popper-available-width", `${J}px`), ie.setProperty("--radix-popper-available-height", `${G}px`), ie.setProperty("--radix-popper-anchor-width", `${Y}px`), ie.setProperty("--radix-popper-anchor-height", `${X}px`);
          }
        }),
        N && Ad({ element: N, padding: l }),
        Bd({ arrowWidth: M, arrowHeight: S }),
        g && Ed({ strategy: "referenceHidden", ...$ })
      ]
    }), [K, oe] = Cs(T), pe = Pe(b);
    re(() => {
      W && pe?.();
    }, [W, pe]);
    const we = L.arrow?.x, Q = L.arrow?.y, Z = L.arrow?.centerOffset !== 0, [le, me] = c.useState();
    return re(() => {
      w && me(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ n(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...j,
          transform: W ? j.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            L.transformOrigin?.x,
            L.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...L.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ n(
          Dd,
          {
            scope: o,
            placedSide: K,
            onArrowChange: R,
            arrowX: we,
            arrowY: Q,
            shouldHideArrow: Z,
            children: /* @__PURE__ */ n(
              D.div,
              {
                "data-side": K,
                "data-align": oe,
                ...h,
                ref: C,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ys.displayName = Qo;
var ws = "PopperArrow", zd = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ks = c.forwardRef(function(t, o) {
  const { __scopePopper: r, ...s } = t, i = Od(ws, r), a = zd[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ n(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ n(
          Pd,
          {
            ...s,
            ref: o,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ks.displayName = ws;
function _d(e) {
  return e !== null;
}
var Bd = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: o, rects: r, middlewareData: s } = t, a = s.arrow?.centerOffset !== 0, l = a ? 0 : e.arrowWidth, d = a ? 0 : e.arrowHeight, [u, f] = Cs(o), p = { start: "0%", center: "50%", end: "100%" }[f], g = (s.arrow?.x ?? 0) + l / 2, v = (s.arrow?.y ?? 0) + d / 2;
    let b = "", h = "";
    return u === "bottom" ? (b = a ? p : `${g}px`, h = `${-d}px`) : u === "top" ? (b = a ? p : `${g}px`, h = `${r.floating.height + d}px`) : u === "right" ? (b = `${-d}px`, h = a ? p : `${v}px`) : u === "left" && (b = `${r.floating.width + d}px`, h = a ? p : `${v}px`), { data: { x: b, y: h } };
  }
});
function Cs(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
var Wd = vs, Vd = bs, Fd = ys, Hd = ks, wo = "rovingFocusGroup.onEntryFocus", $d = { bubbles: !1, cancelable: !0 }, bt = "RovingFocusGroup", [Eo, Ns, jd] = Qr(bt), [Ud, Zt] = ae(
  bt,
  [jd]
), [Gd, Kd] = Ud(bt), Ss = c.forwardRef(
  (e, t) => /* @__PURE__ */ n(Eo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ n(Eo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ n(Yd, { ...e, ref: t }) }) })
);
Ss.displayName = bt;
var Yd = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: s = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: d,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, g = c.useRef(null), v = U(t, g), b = Vt(i), [h, x] = Ie({
    prop: a,
    defaultProp: l ?? null,
    onChange: d,
    caller: bt
  }), [w, k] = c.useState(!1), C = Pe(u), N = Ns(o), R = c.useRef(!1), [E, M] = c.useState(0);
  return c.useEffect(() => {
    const S = g.current;
    if (S)
      return S.addEventListener(wo, C), () => S.removeEventListener(wo, C);
  }, [C]), /* @__PURE__ */ n(
    Gd,
    {
      scope: o,
      orientation: r,
      dir: b,
      loop: s,
      currentTabStopId: h,
      onItemFocus: c.useCallback(
        (S) => x(S),
        [x]
      ),
      onItemShiftTab: c.useCallback(() => k(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => M((S) => S + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => M((S) => S - 1),
        []
      ),
      children: /* @__PURE__ */ n(
        D.div,
        {
          tabIndex: w || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: z(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: z(e.onFocus, (S) => {
            const O = !R.current;
            if (S.target === S.currentTarget && O && !w) {
              const B = new CustomEvent(wo, $d);
              if (S.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const V = N().filter((T) => T.focusable), H = V.find((T) => T.active), $ = V.find((T) => T.id === h), j = [H, $, ...V].filter(
                  Boolean
                ).map((T) => T.ref.current);
                Ms(j, f);
              }
            }
            R.current = !1;
          }),
          onBlur: z(e.onBlur, () => k(!1))
        }
      )
    }
  );
}), Ls = "RovingFocusGroupItem", Rs = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: s = !1,
      tabStopId: i,
      children: a,
      ...l
    } = e, d = Ee(), u = i || d, f = Kd(Ls, o), p = f.currentTabStopId === u, g = Ns(o), { onFocusableItemAdd: v, onFocusableItemRemove: b, currentTabStopId: h } = f;
    return c.useEffect(() => {
      if (r)
        return v(), () => b();
    }, [r, v, b]), /* @__PURE__ */ n(
      Eo.ItemSlot,
      {
        scope: o,
        id: u,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ n(
          D.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...l,
            ref: t,
            onMouseDown: z(e.onMouseDown, (x) => {
              r ? f.onItemFocus(u) : x.preventDefault();
            }),
            onFocus: z(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: z(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const w = Zd(x, f.orientation, f.dir);
              if (w !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let C = g().filter((N) => N.focusable).map((N) => N.ref.current);
                if (w === "last") C.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && C.reverse();
                  const N = C.indexOf(x.currentTarget);
                  C = f.loop ? Qd(C, N + 1) : C.slice(N + 1);
                }
                setTimeout(() => Ms(C));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: p, hasTabStop: h != null }) : a
          }
        )
      }
    );
  }
);
Rs.displayName = Ls;
var qd = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Xd(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Zd(e, t, o) {
  const r = Xd(e.key, o);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return qd[r];
}
function Ms(e, t = !1) {
  const o = document.activeElement;
  for (const r of e)
    if (r === o || (r.focus({ preventScroll: t }), document.activeElement !== o)) return;
}
function Qd(e, t) {
  return e.map((o, r) => e[(t + r) % e.length]);
}
var Es = Ss, As = Rs, Jd = "Label", Is = c.forwardRef((e, t) => /* @__PURE__ */ n(
  D.label,
  {
    ...e,
    ref: t,
    onMouseDown: (o) => {
      o.target.closest("button, input, select, textarea") || (e.onMouseDown?.(o), !o.defaultPrevented && o.detail > 1 && o.preventDefault());
    }
  }
));
Is.displayName = Jd;
var eu = Is;
function zr(e, [t, o]) {
  return Math.min(o, Math.max(t, e));
}
var Jo = "Progress", er = 100, [tu] = ae(Jo), [ou, ru] = tu(Jo), Ps = c.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: o,
      value: r = null,
      max: s,
      getValueLabel: i = nu,
      ...a
    } = e;
    (s || s === 0) && !_r(s) && console.error(su(`${s}`, "Progress"));
    const l = _r(s) ? s : er;
    r !== null && !Br(r, l) && console.error(iu(`${r}`, "Progress"));
    const d = Br(r, l) ? r : null, u = zt(d) ? i(d, l) : void 0;
    return /* @__PURE__ */ n(ou, { scope: o, value: d, max: l, children: /* @__PURE__ */ n(
      D.div,
      {
        "aria-valuemax": l,
        "aria-valuemin": 0,
        "aria-valuenow": zt(d) ? d : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": Os(d, l),
        "data-value": d ?? void 0,
        "data-max": l,
        ...a,
        ref: t
      }
    ) });
  }
);
Ps.displayName = Jo;
var Ts = "ProgressIndicator", Ds = c.forwardRef(
  (e, t) => {
    const { __scopeProgress: o, ...r } = e, s = ru(Ts, o);
    return /* @__PURE__ */ n(
      D.div,
      {
        "data-state": Os(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...r,
        ref: t
      }
    );
  }
);
Ds.displayName = Ts;
function nu(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Os(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function zt(e) {
  return typeof e == "number";
}
function _r(e) {
  return zt(e) && !isNaN(e) && e > 0;
}
function Br(e, t) {
  return zt(e) && !isNaN(e) && e <= t && e >= 0;
}
function su(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${er}\`.`;
}
function iu(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${er} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var zs = Ps, au = Ds, tr = "Radio", [lu, _s] = ae(tr), [cu, du] = lu(tr), Bs = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: o,
      name: r,
      checked: s = !1,
      required: i,
      disabled: a,
      value: l = "on",
      onCheck: d,
      form: u,
      ...f
    } = e, [p, g] = c.useState(null), v = U(t, (x) => g(x)), b = c.useRef(!1), h = p ? u || !!p.closest("form") : !0;
    return /* @__PURE__ */ y(cu, { scope: o, checked: s, disabled: a, children: [
      /* @__PURE__ */ n(
        D.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": s,
          "data-state": Hs(s),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...f,
          ref: v,
          onClick: z(e.onClick, (x) => {
            s || d?.(), h && (b.current = x.isPropagationStopped(), b.current || x.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ n(
        Fs,
        {
          control: p,
          bubbles: !b.current,
          name: r,
          value: l,
          checked: s,
          required: i,
          disabled: a,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Bs.displayName = tr;
var Ws = "RadioIndicator", Vs = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: o, forceMount: r, ...s } = e, i = du(Ws, o);
    return /* @__PURE__ */ n(Ge, { present: r || i.checked, children: /* @__PURE__ */ n(
      D.span,
      {
        "data-state": Hs(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...s,
        ref: t
      }
    ) });
  }
);
Vs.displayName = Ws;
var uu = "RadioBubbleInput", Fs = c.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: o,
    bubbles: r = !0,
    ...s
  }, i) => {
    const a = c.useRef(null), l = U(a, i), d = jt(o), u = Ut(t);
    return c.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (d !== o && v) {
        const b = new Event("click", { bubbles: r });
        v.call(f, o), f.dispatchEvent(b);
      }
    }, [d, o, r]), /* @__PURE__ */ n(
      D.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...s,
        tabIndex: -1,
        ref: l,
        style: {
          ...s.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Fs.displayName = uu;
function Hs(e) {
  return e ? "checked" : "unchecked";
}
var fu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Qt = "RadioGroup", [pu] = ae(Qt, [
  Zt,
  _s
]), $s = Zt(), js = _s(), [mu, hu] = pu(Qt), Us = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: o,
      name: r,
      defaultValue: s,
      value: i,
      required: a = !1,
      disabled: l = !1,
      orientation: d,
      dir: u,
      loop: f = !0,
      onValueChange: p,
      ...g
    } = e, v = $s(o), b = Vt(u), [h, x] = Ie({
      prop: i,
      defaultProp: s ?? null,
      onChange: p,
      caller: Qt
    });
    return /* @__PURE__ */ n(
      mu,
      {
        scope: o,
        name: r,
        required: a,
        disabled: l,
        value: h,
        onValueChange: x,
        children: /* @__PURE__ */ n(
          Es,
          {
            asChild: !0,
            ...v,
            orientation: d,
            dir: b,
            loop: f,
            children: /* @__PURE__ */ n(
              D.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": d,
                "data-disabled": l ? "" : void 0,
                dir: b,
                ...g,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Us.displayName = Qt;
var Gs = "RadioGroupItem", Ks = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: o, disabled: r, ...s } = e, i = hu(Gs, o), a = i.disabled || r, l = $s(o), d = js(o), u = c.useRef(null), f = U(t, u), p = i.value === s.value, g = c.useRef(!1);
    return c.useEffect(() => {
      const v = (h) => {
        fu.includes(h.key) && (g.current = !0);
      }, b = () => g.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", b), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", b);
      };
    }, []), /* @__PURE__ */ n(
      As,
      {
        asChild: !0,
        ...l,
        focusable: !a,
        active: p,
        children: /* @__PURE__ */ n(
          Bs,
          {
            disabled: a,
            required: i.required,
            checked: p,
            ...d,
            ...s,
            name: i.name,
            ref: f,
            onCheck: () => i.onValueChange(s.value),
            onKeyDown: z((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: z(s.onFocus, () => {
              g.current && u.current?.click();
            })
          }
        )
      }
    );
  }
);
Ks.displayName = Gs;
var gu = "RadioGroupIndicator", Ys = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: o, ...r } = e, s = js(o);
    return /* @__PURE__ */ n(Vs, { ...s, ...r, ref: t });
  }
);
Ys.displayName = gu;
var qs = Us, Jt = Ks, Xs = Ys, vu = [" ", "Enter", "ArrowUp", "ArrowDown"], xu = [" ", "Enter"], je = "Select", [eo, to, bu] = Qr(je), [lt] = ae(je, [
  bu,
  hs
]), oo = hs(), [yu, Oe] = lt(je), [wu, ku] = lt(je), Zs = (e) => {
  const {
    __scopeSelect: t,
    children: o,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    value: a,
    defaultValue: l,
    onValueChange: d,
    dir: u,
    name: f,
    autoComplete: p,
    disabled: g,
    required: v,
    form: b
  } = e, h = oo(t), [x, w] = c.useState(null), [k, C] = c.useState(null), [N, R] = c.useState(!1), E = Vt(u), [M, S] = Ie({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: je
  }), [O, B] = Ie({
    prop: a,
    defaultProp: l,
    onChange: d,
    caller: je
  }), V = c.useRef(null), H = x ? b || !!x.closest("form") : !0, [$, F] = c.useState(/* @__PURE__ */ new Set()), j = Array.from($).map((T) => T.props.value).join(";");
  return /* @__PURE__ */ n(Wd, { ...h, children: /* @__PURE__ */ y(
    yu,
    {
      required: v,
      scope: t,
      trigger: x,
      onTriggerChange: w,
      valueNode: k,
      onValueNodeChange: C,
      valueNodeHasChildren: N,
      onValueNodeHasChildrenChange: R,
      contentId: Ee(),
      value: O,
      onValueChange: B,
      open: M,
      onOpenChange: S,
      dir: E,
      triggerPointerDownPosRef: V,
      disabled: g,
      children: [
        /* @__PURE__ */ n(eo.Provider, { scope: t, children: /* @__PURE__ */ n(
          wu,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((T) => {
              F((W) => new Set(W).add(T));
            }, []),
            onNativeOptionRemove: c.useCallback((T) => {
              F((W) => {
                const L = new Set(W);
                return L.delete(T), L;
              });
            }, []),
            children: o
          }
        ) }),
        H ? /* @__PURE__ */ y(
          ki,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: O,
            onChange: (T) => B(T.target.value),
            disabled: g,
            form: b,
            children: [
              O === void 0 ? /* @__PURE__ */ n("option", { value: "" }) : null,
              Array.from($)
            ]
          },
          j
        ) : null
      ]
    }
  ) });
};
Zs.displayName = je;
var Qs = "SelectTrigger", Js = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, disabled: r = !1, ...s } = e, i = oo(o), a = Oe(Qs, o), l = a.disabled || r, d = U(t, a.onTriggerChange), u = to(o), f = c.useRef("touch"), [p, g, v] = Ni((h) => {
      const x = u().filter((C) => !C.disabled), w = x.find((C) => C.value === a.value), k = Si(x, h, w);
      k !== void 0 && a.onValueChange(k.value);
    }), b = (h) => {
      l || (a.onOpenChange(!0), v()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ n(Vd, { asChild: !0, ...i, children: /* @__PURE__ */ n(
      D.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": Ci(a.value) ? "" : void 0,
        ...s,
        ref: d,
        onClick: z(s.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && b(h);
        }),
        onPointerDown: z(s.onPointerDown, (h) => {
          f.current = h.pointerType;
          const x = h.target;
          x.hasPointerCapture(h.pointerId) && x.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (b(h), h.preventDefault());
        }),
        onKeyDown: z(s.onKeyDown, (h) => {
          const x = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && g(h.key), !(x && h.key === " ") && vu.includes(h.key) && (b(), h.preventDefault());
        })
      }
    ) });
  }
);
Js.displayName = Qs;
var ei = "SelectValue", ti = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, className: r, style: s, children: i, placeholder: a = "", ...l } = e, d = Oe(ei, o), { onValueNodeHasChildrenChange: u } = d, f = i !== void 0, p = U(t, d.onValueNodeChange);
    return re(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ n(
      D.span,
      {
        ...l,
        ref: p,
        style: { pointerEvents: "none" },
        children: Ci(d.value) ? /* @__PURE__ */ n(te, { children: a }) : i
      }
    );
  }
);
ti.displayName = ei;
var Cu = "SelectIcon", oi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, children: r, ...s } = e;
    return /* @__PURE__ */ n(D.span, { "aria-hidden": !0, ...s, ref: t, children: r || "▼" });
  }
);
oi.displayName = Cu;
var Nu = "SelectPortal", ri = (e) => /* @__PURE__ */ n(Bo, { asChild: !0, ...e });
ri.displayName = Nu;
var Ue = "SelectContent", ni = c.forwardRef(
  (e, t) => {
    const o = Oe(Ue, e.__scopeSelect), [r, s] = c.useState();
    if (re(() => {
      s(new DocumentFragment());
    }, []), !o.open) {
      const i = r;
      return i ? Wt.createPortal(
        /* @__PURE__ */ n(si, { scope: e.__scopeSelect, children: /* @__PURE__ */ n(eo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ n("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ n(ii, { ...e, ref: t });
  }
);
ni.displayName = Ue;
var ce = 10, [si, ze] = lt(Ue), Su = "SelectContentImpl", Lu = /* @__PURE__ */ tt("SelectContent.RemoveScroll"), ii = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: o,
      position: r = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: l,
      sideOffset: d,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: v,
      sticky: b,
      hideWhenDetached: h,
      avoidCollisions: x,
      //
      ...w
    } = e, k = Oe(Ue, o), [C, N] = c.useState(null), [R, E] = c.useState(null), M = U(t, (A) => N(A)), [S, O] = c.useState(null), [B, V] = c.useState(
      null
    ), H = to(o), [$, F] = c.useState(!1), j = c.useRef(!1);
    c.useEffect(() => {
      if (C) return fn(C);
    }, [C]), on();
    const T = c.useCallback(
      (A) => {
        const [q, ...J] = H().map((X) => X.ref.current), [G] = J.slice(-1), Y = document.activeElement;
        for (const X of A)
          if (X === Y || (X?.scrollIntoView({ block: "nearest" }), X === q && R && (R.scrollTop = 0), X === G && R && (R.scrollTop = R.scrollHeight), X?.focus(), document.activeElement !== Y)) return;
      },
      [H, R]
    ), W = c.useCallback(
      () => T([S, C]),
      [T, S, C]
    );
    c.useEffect(() => {
      $ && W();
    }, [$, W]);
    const { onOpenChange: L, triggerPointerDownPosRef: K } = k;
    c.useEffect(() => {
      if (C) {
        let A = { x: 0, y: 0 };
        const q = (G) => {
          A = {
            x: Math.abs(Math.round(G.pageX) - (K.current?.x ?? 0)),
            y: Math.abs(Math.round(G.pageY) - (K.current?.y ?? 0))
          };
        }, J = (G) => {
          A.x <= 10 && A.y <= 10 ? G.preventDefault() : C.contains(G.target) || L(!1), document.removeEventListener("pointermove", q), K.current = null;
        };
        return K.current !== null && (document.addEventListener("pointermove", q), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", q), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [C, L, K]), c.useEffect(() => {
      const A = () => L(!1);
      return window.addEventListener("blur", A), window.addEventListener("resize", A), () => {
        window.removeEventListener("blur", A), window.removeEventListener("resize", A);
      };
    }, [L]);
    const [oe, pe] = Ni((A) => {
      const q = H().filter((Y) => !Y.disabled), J = q.find((Y) => Y.ref.current === document.activeElement), G = Si(q, A, J);
      G && setTimeout(() => G.ref.current.focus());
    }), we = c.useCallback(
      (A, q, J) => {
        const G = !j.current && !J;
        (k.value !== void 0 && k.value === q || G) && (O(A), G && (j.current = !0));
      },
      [k.value]
    ), Q = c.useCallback(() => C?.focus(), [C]), Z = c.useCallback(
      (A, q, J) => {
        const G = !j.current && !J;
        (k.value !== void 0 && k.value === q || G) && V(A);
      },
      [k.value]
    ), le = r === "popper" ? Ao : ai, me = le === Ao ? {
      side: l,
      sideOffset: d,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: v,
      sticky: b,
      hideWhenDetached: h,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ n(
      si,
      {
        scope: o,
        content: C,
        viewport: R,
        onViewportChange: E,
        itemRefCallback: we,
        selectedItem: S,
        onItemLeave: Q,
        itemTextRefCallback: Z,
        focusSelectedItem: W,
        selectedItemText: B,
        position: r,
        isPositioned: $,
        searchRef: oe,
        children: /* @__PURE__ */ n(Wo, { as: Lu, allowPinchZoom: !0, children: /* @__PURE__ */ n(
          _o,
          {
            asChild: !0,
            trapped: k.open,
            onMountAutoFocus: (A) => {
              A.preventDefault();
            },
            onUnmountAutoFocus: z(s, (A) => {
              k.trigger?.focus({ preventScroll: !0 }), A.preventDefault();
            }),
            children: /* @__PURE__ */ n(
              zo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (A) => A.preventDefault(),
                onDismiss: () => k.onOpenChange(!1),
                children: /* @__PURE__ */ n(
                  le,
                  {
                    role: "listbox",
                    id: k.contentId,
                    "data-state": k.open ? "open" : "closed",
                    dir: k.dir,
                    onContextMenu: (A) => A.preventDefault(),
                    ...w,
                    ...me,
                    onPlaced: () => F(!0),
                    ref: M,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: z(w.onKeyDown, (A) => {
                      const q = A.ctrlKey || A.altKey || A.metaKey;
                      if (A.key === "Tab" && A.preventDefault(), !q && A.key.length === 1 && pe(A.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(A.key)) {
                        let G = H().filter((Y) => !Y.disabled).map((Y) => Y.ref.current);
                        if (["ArrowUp", "End"].includes(A.key) && (G = G.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(A.key)) {
                          const Y = A.target, X = G.indexOf(Y);
                          G = G.slice(X + 1);
                        }
                        setTimeout(() => T(G)), A.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ii.displayName = Su;
var Ru = "SelectItemAlignedPosition", ai = c.forwardRef((e, t) => {
  const { __scopeSelect: o, onPlaced: r, ...s } = e, i = Oe(Ue, o), a = ze(Ue, o), [l, d] = c.useState(null), [u, f] = c.useState(null), p = U(t, (M) => f(M)), g = to(o), v = c.useRef(!1), b = c.useRef(!0), { viewport: h, selectedItem: x, selectedItemText: w, focusSelectedItem: k } = a, C = c.useCallback(() => {
    if (i.trigger && i.valueNode && l && u && h && x && w) {
      const M = i.trigger.getBoundingClientRect(), S = u.getBoundingClientRect(), O = i.valueNode.getBoundingClientRect(), B = w.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const Y = B.left - S.left, X = O.left - Y, ie = M.left - X, We = M.width + ie, lo = Math.max(We, S.width), co = window.innerWidth - ce, uo = zr(X, [
          ce,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ce, co - lo)
        ]);
        l.style.minWidth = We + "px", l.style.left = uo + "px";
      } else {
        const Y = S.right - B.right, X = window.innerWidth - O.right - Y, ie = window.innerWidth - M.right - X, We = M.width + ie, lo = Math.max(We, S.width), co = window.innerWidth - ce, uo = zr(X, [
          ce,
          Math.max(ce, co - lo)
        ]);
        l.style.minWidth = We + "px", l.style.right = uo + "px";
      }
      const V = g(), H = window.innerHeight - ce * 2, $ = h.scrollHeight, F = window.getComputedStyle(u), j = parseInt(F.borderTopWidth, 10), T = parseInt(F.paddingTop, 10), W = parseInt(F.borderBottomWidth, 10), L = parseInt(F.paddingBottom, 10), K = j + T + $ + L + W, oe = Math.min(x.offsetHeight * 5, K), pe = window.getComputedStyle(h), we = parseInt(pe.paddingTop, 10), Q = parseInt(pe.paddingBottom, 10), Z = M.top + M.height / 2 - ce, le = H - Z, me = x.offsetHeight / 2, A = x.offsetTop + me, q = j + T + A, J = K - q;
      if (q <= Z) {
        const Y = V.length > 0 && x === V[V.length - 1].ref.current;
        l.style.bottom = "0px";
        const X = u.clientHeight - h.offsetTop - h.offsetHeight, ie = Math.max(
          le,
          me + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Y ? Q : 0) + X + W
        ), We = q + ie;
        l.style.height = We + "px";
      } else {
        const Y = V.length > 0 && x === V[0].ref.current;
        l.style.top = "0px";
        const ie = Math.max(
          Z,
          j + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Y ? we : 0) + me
        ) + J;
        l.style.height = ie + "px", h.scrollTop = q - Z + h.offsetTop;
      }
      l.style.margin = `${ce}px 0`, l.style.minHeight = oe + "px", l.style.maxHeight = H + "px", r?.(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    g,
    i.trigger,
    i.valueNode,
    l,
    u,
    h,
    x,
    w,
    i.dir,
    r
  ]);
  re(() => C(), [C]);
  const [N, R] = c.useState();
  re(() => {
    u && R(window.getComputedStyle(u).zIndex);
  }, [u]);
  const E = c.useCallback(
    (M) => {
      M && b.current === !0 && (C(), k?.(), b.current = !1);
    },
    [C, k]
  );
  return /* @__PURE__ */ n(
    Eu,
    {
      scope: o,
      contentWrapper: l,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: d,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: N
          },
          children: /* @__PURE__ */ n(
            D.div,
            {
              ...s,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
ai.displayName = Ru;
var Mu = "SelectPopperPosition", Ao = c.forwardRef((e, t) => {
  const {
    __scopeSelect: o,
    align: r = "start",
    collisionPadding: s = ce,
    ...i
  } = e, a = oo(o);
  return /* @__PURE__ */ n(
    Fd,
    {
      ...a,
      ...i,
      ref: t,
      align: r,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ao.displayName = Mu;
var [Eu, or] = lt(Ue, {}), Io = "SelectViewport", li = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, nonce: r, ...s } = e, i = ze(Io, o), a = or(Io, o), l = U(t, i.onViewportChange), d = c.useRef(0);
    return /* @__PURE__ */ y(te, { children: [
      /* @__PURE__ */ n(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ n(eo.Slot, { scope: o, children: /* @__PURE__ */ n(
        D.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...s.style
          },
          onScroll: z(s.onScroll, (u) => {
            const f = u.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: g } = a;
            if (g?.current && p) {
              const v = Math.abs(d.current - f.scrollTop);
              if (v > 0) {
                const b = window.innerHeight - ce * 2, h = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), w = Math.max(h, x);
                if (w < b) {
                  const k = w + v, C = Math.min(b, k), N = k - C;
                  p.style.height = C + "px", p.style.bottom === "0px" && (f.scrollTop = N > 0 ? N : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            d.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
li.displayName = Io;
var ci = "SelectGroup", [Au, Iu] = lt(ci), di = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e, s = Ee();
    return /* @__PURE__ */ n(Au, { scope: o, id: s, children: /* @__PURE__ */ n(D.div, { role: "group", "aria-labelledby": s, ...r, ref: t }) });
  }
);
di.displayName = ci;
var ui = "SelectLabel", fi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e, s = Iu(ui, o);
    return /* @__PURE__ */ n(D.div, { id: s.id, ...r, ref: t });
  }
);
fi.displayName = ui;
var _t = "SelectItem", [Pu, pi] = lt(_t), mi = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: o,
      value: r,
      disabled: s = !1,
      textValue: i,
      ...a
    } = e, l = Oe(_t, o), d = ze(_t, o), u = l.value === r, [f, p] = c.useState(i ?? ""), [g, v] = c.useState(!1), b = U(
      t,
      (k) => d.itemRefCallback?.(k, r, s)
    ), h = Ee(), x = c.useRef("touch"), w = () => {
      s || (l.onValueChange(r), l.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ n(
      Pu,
      {
        scope: o,
        value: r,
        disabled: s,
        textId: h,
        isSelected: u,
        onItemTextChange: c.useCallback((k) => {
          p((C) => C || (k?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ n(
          eo.ItemSlot,
          {
            scope: o,
            value: r,
            disabled: s,
            textValue: f,
            children: /* @__PURE__ */ n(
              D.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": u && g,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...a,
                ref: b,
                onFocus: z(a.onFocus, () => v(!0)),
                onBlur: z(a.onBlur, () => v(!1)),
                onClick: z(a.onClick, () => {
                  x.current !== "mouse" && w();
                }),
                onPointerUp: z(a.onPointerUp, () => {
                  x.current === "mouse" && w();
                }),
                onPointerDown: z(a.onPointerDown, (k) => {
                  x.current = k.pointerType;
                }),
                onPointerMove: z(a.onPointerMove, (k) => {
                  x.current = k.pointerType, s ? d.onItemLeave?.() : x.current === "mouse" && k.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: z(a.onPointerLeave, (k) => {
                  k.currentTarget === document.activeElement && d.onItemLeave?.();
                }),
                onKeyDown: z(a.onKeyDown, (k) => {
                  d.searchRef?.current !== "" && k.key === " " || (xu.includes(k.key) && w(), k.key === " " && k.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
mi.displayName = _t;
var ut = "SelectItemText", hi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, className: r, style: s, ...i } = e, a = Oe(ut, o), l = ze(ut, o), d = pi(ut, o), u = ku(ut, o), [f, p] = c.useState(null), g = U(
      t,
      (w) => p(w),
      d.onItemTextChange,
      (w) => l.itemTextRefCallback?.(w, d.value, d.disabled)
    ), v = f?.textContent, b = c.useMemo(
      () => /* @__PURE__ */ n("option", { value: d.value, disabled: d.disabled, children: v }, d.value),
      [d.disabled, d.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: x } = u;
    return re(() => (h(b), () => x(b)), [h, x, b]), /* @__PURE__ */ y(te, { children: [
      /* @__PURE__ */ n(D.span, { id: d.textId, ...i, ref: g }),
      d.isSelected && a.valueNode && !a.valueNodeHasChildren ? Wt.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
hi.displayName = ut;
var gi = "SelectItemIndicator", vi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e;
    return pi(gi, o).isSelected ? /* @__PURE__ */ n(D.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
vi.displayName = gi;
var Po = "SelectScrollUpButton", xi = c.forwardRef((e, t) => {
  const o = ze(Po, e.__scopeSelect), r = or(Po, e.__scopeSelect), [s, i] = c.useState(!1), a = U(t, r.onScrollButtonChange);
  return re(() => {
    if (o.viewport && o.isPositioned) {
      let l = function() {
        const u = d.scrollTop > 0;
        i(u);
      };
      const d = o.viewport;
      return l(), d.addEventListener("scroll", l), () => d.removeEventListener("scroll", l);
    }
  }, [o.viewport, o.isPositioned]), s ? /* @__PURE__ */ n(
    yi,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: d } = o;
        l && d && (l.scrollTop = l.scrollTop - d.offsetHeight);
      }
    }
  ) : null;
});
xi.displayName = Po;
var To = "SelectScrollDownButton", bi = c.forwardRef((e, t) => {
  const o = ze(To, e.__scopeSelect), r = or(To, e.__scopeSelect), [s, i] = c.useState(!1), a = U(t, r.onScrollButtonChange);
  return re(() => {
    if (o.viewport && o.isPositioned) {
      let l = function() {
        const u = d.scrollHeight - d.clientHeight, f = Math.ceil(d.scrollTop) < u;
        i(f);
      };
      const d = o.viewport;
      return l(), d.addEventListener("scroll", l), () => d.removeEventListener("scroll", l);
    }
  }, [o.viewport, o.isPositioned]), s ? /* @__PURE__ */ n(
    yi,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: d } = o;
        l && d && (l.scrollTop = l.scrollTop + d.offsetHeight);
      }
    }
  ) : null;
});
bi.displayName = To;
var yi = c.forwardRef((e, t) => {
  const { __scopeSelect: o, onAutoScroll: r, ...s } = e, i = ze("SelectScrollButton", o), a = c.useRef(null), l = to(o), d = c.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return c.useEffect(() => () => d(), [d]), re(() => {
    l().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ n(
    D.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: z(s.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: z(s.onPointerMove, () => {
        i.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: z(s.onPointerLeave, () => {
        d();
      })
    }
  );
}), Tu = "SelectSeparator", wi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e;
    return /* @__PURE__ */ n(D.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
wi.displayName = Tu;
var Do = "SelectArrow", Du = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e, s = oo(o), i = Oe(Do, o), a = ze(Do, o);
    return i.open && a.position === "popper" ? /* @__PURE__ */ n(Hd, { ...s, ...r, ref: t }) : null;
  }
);
Du.displayName = Do;
var Ou = "SelectBubbleInput", ki = c.forwardRef(
  ({ __scopeSelect: e, value: t, ...o }, r) => {
    const s = c.useRef(null), i = U(r, s), a = jt(t);
    return c.useEffect(() => {
      const l = s.current;
      if (!l) return;
      const d = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        d,
        "value"
      ).set;
      if (a !== t && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(l, t), l.dispatchEvent(p);
      }
    }, [a, t]), /* @__PURE__ */ n(
      D.select,
      {
        ...o,
        style: { ...Zr, ...o.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
ki.displayName = Ou;
function Ci(e) {
  return e === "" || e === void 0;
}
function Ni(e) {
  const t = Pe(e), o = c.useRef(""), r = c.useRef(0), s = c.useCallback(
    (a) => {
      const l = o.current + a;
      t(l), (function d(u) {
        o.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => d(""), 1e3));
      })(l);
    },
    [t]
  ), i = c.useCallback(() => {
    o.current = "", window.clearTimeout(r.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [o, s, i];
}
function Si(e, t, o) {
  const s = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = o ? e.indexOf(o) : -1;
  let a = zu(e, Math.max(i, 0));
  s.length === 1 && (a = a.filter((u) => u !== o));
  const d = a.find(
    (u) => u.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return d !== o ? d : void 0;
}
function zu(e, t) {
  return e.map((o, r) => e[(t + r) % e.length]);
}
var _u = Zs, Li = Js, Bu = ti, Wu = oi, Vu = ri, Ri = ni, Fu = li, Hu = di, Mi = fi, Ei = mi, $u = hi, ju = vi, Ai = xi, Ii = bi, Pi = wi, ro = "Switch", [Uu] = ae(ro), [Gu, Ku] = Uu(ro), Ti = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: o,
      name: r,
      checked: s,
      defaultChecked: i,
      required: a,
      disabled: l,
      value: d = "on",
      onCheckedChange: u,
      form: f,
      ...p
    } = e, [g, v] = c.useState(null), b = U(t, (C) => v(C)), h = c.useRef(!1), x = g ? f || !!g.closest("form") : !0, [w, k] = Ie({
      prop: s,
      defaultProp: i ?? !1,
      onChange: u,
      caller: ro
    });
    return /* @__PURE__ */ y(Gu, { scope: o, checked: w, disabled: l, children: [
      /* @__PURE__ */ n(
        D.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": a,
          "data-state": _i(w),
          "data-disabled": l ? "" : void 0,
          disabled: l,
          value: d,
          ...p,
          ref: b,
          onClick: z(e.onClick, (C) => {
            k((N) => !N), x && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ n(
        zi,
        {
          control: g,
          bubbles: !h.current,
          name: r,
          value: d,
          checked: w,
          required: a,
          disabled: l,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ti.displayName = ro;
var Di = "SwitchThumb", Oi = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: o, ...r } = e, s = Ku(Di, o);
    return /* @__PURE__ */ n(
      D.span,
      {
        "data-state": _i(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Oi.displayName = Di;
var Yu = "SwitchBubbleInput", zi = c.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: o,
    bubbles: r = !0,
    ...s
  }, i) => {
    const a = c.useRef(null), l = U(a, i), d = jt(o), u = Ut(t);
    return c.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (d !== o && v) {
        const b = new Event("click", { bubbles: r });
        v.call(f, o), f.dispatchEvent(b);
      }
    }, [d, o, r]), /* @__PURE__ */ n(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: o,
        ...s,
        tabIndex: -1,
        ref: l,
        style: {
          ...s.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
zi.displayName = Yu;
function _i(e) {
  return e ? "checked" : "unchecked";
}
var Bi = Ti, qu = Oi, no = "Tabs", [Xu] = ae(no, [
  Zt
]), Wi = Zt(), [Zu, rr] = Xu(no), Vi = c.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: s,
      defaultValue: i,
      orientation: a = "horizontal",
      dir: l,
      activationMode: d = "automatic",
      ...u
    } = e, f = Vt(l), [p, g] = Ie({
      prop: r,
      onChange: s,
      defaultProp: i ?? "",
      caller: no
    });
    return /* @__PURE__ */ n(
      Zu,
      {
        scope: o,
        baseId: Ee(),
        value: p,
        onValueChange: g,
        orientation: a,
        dir: f,
        activationMode: d,
        children: /* @__PURE__ */ n(
          D.div,
          {
            dir: f,
            "data-orientation": a,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
Vi.displayName = no;
var Fi = "TabsList", Hi = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, loop: r = !0, ...s } = e, i = rr(Fi, o), a = Wi(o);
    return /* @__PURE__ */ n(
      Es,
      {
        asChild: !0,
        ...a,
        orientation: i.orientation,
        dir: i.dir,
        loop: r,
        children: /* @__PURE__ */ n(
          D.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Hi.displayName = Fi;
var $i = "TabsTrigger", ji = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, value: r, disabled: s = !1, ...i } = e, a = rr($i, o), l = Wi(o), d = Ki(a.baseId, r), u = Yi(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ n(
      As,
      {
        asChild: !0,
        ...l,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ n(
          D.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": u,
            "data-state": f ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: d,
            ...i,
            ref: t,
            onMouseDown: z(e.onMouseDown, (p) => {
              !s && p.button === 0 && p.ctrlKey === !1 ? a.onValueChange(r) : p.preventDefault();
            }),
            onKeyDown: z(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && a.onValueChange(r);
            }),
            onFocus: z(e.onFocus, () => {
              const p = a.activationMode !== "manual";
              !f && !s && p && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
ji.displayName = $i;
var Ui = "TabsContent", Gi = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, value: r, forceMount: s, children: i, ...a } = e, l = rr(Ui, o), d = Ki(l.baseId, r), u = Yi(l.baseId, r), f = r === l.value, p = c.useRef(f);
    return c.useEffect(() => {
      const g = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ n(Ge, { present: s || f, children: ({ present: g }) => /* @__PURE__ */ n(
      D.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": d,
        hidden: !g,
        id: u,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: g && i
      }
    ) });
  }
);
Gi.displayName = Ui;
function Ki(e, t) {
  return `${e}-trigger-${t}`;
}
function Yi(e, t) {
  return `${e}-content-${t}`;
}
var nr = Vi, so = Hi, io = ji, qi = Gi;
const Qu = (e, t) => {
  const o = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    o[r] = e[r];
  for (let r = 0; r < t.length; r++)
    o[e.length + r] = t[r];
  return o;
}, Ju = (e, t) => ({
  classGroupId: e,
  validator: t
}), Xi = (e = /* @__PURE__ */ new Map(), t = null, o) => ({
  nextPart: e,
  validators: t,
  classGroupId: o
}), Bt = "-", Wr = [], ef = "arbitrary..", tf = (e) => {
  const t = rf(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return of(a);
      const l = a.split(Bt), d = l[0] === "" && l.length > 1 ? 1 : 0;
      return Zi(l, d, t);
    },
    getConflictingClassGroupIds: (a, l) => {
      if (l) {
        const d = r[a], u = o[a];
        return d ? u ? Qu(u, d) : d : u || Wr;
      }
      return o[a] || Wr;
    }
  };
}, Zi = (e, t, o) => {
  if (e.length - t === 0)
    return o.classGroupId;
  const s = e[t], i = o.nextPart.get(s);
  if (i) {
    const u = Zi(e, t + 1, i);
    if (u) return u;
  }
  const a = o.validators;
  if (a === null)
    return;
  const l = t === 0 ? e.join(Bt) : e.slice(t).join(Bt), d = a.length;
  for (let u = 0; u < d; u++) {
    const f = a[u];
    if (f.validator(l))
      return f.classGroupId;
  }
}, of = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), o = t.indexOf(":"), r = t.slice(0, o);
  return r ? ef + r : void 0;
})(), rf = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e;
  return nf(o, t);
}, nf = (e, t) => {
  const o = Xi();
  for (const r in e) {
    const s = e[r];
    sr(s, o, r, t);
  }
  return o;
}, sr = (e, t, o, r) => {
  const s = e.length;
  for (let i = 0; i < s; i++) {
    const a = e[i];
    sf(a, t, o, r);
  }
}, sf = (e, t, o, r) => {
  if (typeof e == "string") {
    af(e, t, o);
    return;
  }
  if (typeof e == "function") {
    lf(e, t, o, r);
    return;
  }
  cf(e, t, o, r);
}, af = (e, t, o) => {
  const r = e === "" ? t : Qi(t, e);
  r.classGroupId = o;
}, lf = (e, t, o, r) => {
  if (df(e)) {
    sr(e(r), t, o, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Ju(o, e));
}, cf = (e, t, o, r) => {
  const s = Object.entries(e), i = s.length;
  for (let a = 0; a < i; a++) {
    const [l, d] = s[a];
    sr(d, Qi(t, l), o, r);
  }
}, Qi = (e, t) => {
  let o = e;
  const r = t.split(Bt), s = r.length;
  for (let i = 0; i < s; i++) {
    const a = r[i];
    let l = o.nextPart.get(a);
    l || (l = Xi(), o.nextPart.set(a, l)), o = l;
  }
  return o;
}, df = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, uf = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const s = (i, a) => {
    o[i] = a, t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let a = o[i];
      if (a !== void 0)
        return a;
      if ((a = r[i]) !== void 0)
        return s(i, a), a;
    },
    set(i, a) {
      i in o ? o[i] = a : s(i, a);
    }
  };
}, Oo = "!", Vr = ":", ff = [], Fr = (e, t, o, r, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: s
}), pf = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (s) => {
    const i = [];
    let a = 0, l = 0, d = 0, u;
    const f = s.length;
    for (let h = 0; h < f; h++) {
      const x = s[h];
      if (a === 0 && l === 0) {
        if (x === Vr) {
          i.push(s.slice(d, h)), d = h + 1;
          continue;
        }
        if (x === "/") {
          u = h;
          continue;
        }
      }
      x === "[" ? a++ : x === "]" ? a-- : x === "(" ? l++ : x === ")" && l--;
    }
    const p = i.length === 0 ? s : s.slice(d);
    let g = p, v = !1;
    p.endsWith(Oo) ? (g = p.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(Oo) && (g = p.slice(1), v = !0)
    );
    const b = u && u > d ? u - d : void 0;
    return Fr(i, v, g, b);
  };
  if (t) {
    const s = t + Vr, i = r;
    r = (a) => a.startsWith(s) ? i(a.slice(s.length)) : Fr(ff, !1, a, void 0, !0);
  }
  if (o) {
    const s = r;
    r = (i) => o({
      className: i,
      parseClassName: s
    });
  }
  return r;
}, mf = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((o, r) => {
    t.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let s = [];
    for (let i = 0; i < o.length; i++) {
      const a = o[i], l = a[0] === "[", d = t.has(a);
      l || d ? (s.length > 0 && (s.sort(), r.push(...s), s = []), r.push(a)) : s.push(a);
    }
    return s.length > 0 && (s.sort(), r.push(...s)), r;
  };
}, hf = (e) => ({
  cache: uf(e.cacheSize),
  parseClassName: pf(e),
  sortModifiers: mf(e),
  ...tf(e)
}), gf = /\s+/, vf = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = t, a = [], l = e.trim().split(gf);
  let d = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const f = l[u], {
      isExternal: p,
      modifiers: g,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: h
    } = o(f);
    if (p) {
      d = f + (d.length > 0 ? " " + d : d);
      continue;
    }
    let x = !!h, w = r(x ? b.substring(0, h) : b);
    if (!w) {
      if (!x) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (w = r(b), !w) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      x = !1;
    }
    const k = g.length === 0 ? "" : g.length === 1 ? g[0] : i(g).join(":"), C = v ? k + Oo : k, N = C + w;
    if (a.indexOf(N) > -1)
      continue;
    a.push(N);
    const R = s(w, x);
    for (let E = 0; E < R.length; ++E) {
      const M = R[E];
      a.push(C + M);
    }
    d = f + (d.length > 0 ? " " + d : d);
  }
  return d;
}, xf = (...e) => {
  let t = 0, o, r, s = "";
  for (; t < e.length; )
    (o = e[t++]) && (r = Ji(o)) && (s && (s += " "), s += r);
  return s;
}, Ji = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ji(e[r])) && (o && (o += " "), o += t);
  return o;
}, bf = (e, ...t) => {
  let o, r, s, i;
  const a = (d) => {
    const u = t.reduce((f, p) => p(f), e());
    return o = hf(u), r = o.cache.get, s = o.cache.set, i = l, l(d);
  }, l = (d) => {
    const u = r(d);
    if (u)
      return u;
    const f = vf(d, o);
    return s(d, f), f;
  };
  return i = a, (...d) => i(xf(...d));
}, yf = [], ee = (e) => {
  const t = (o) => o[e] || yf;
  return t.isThemeGetter = !0, t;
}, ea = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ta = /^\((?:(\w[\w-]*):)?(.+)\)$/i, wf = /^\d+\/\d+$/, kf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Cf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Sf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Lf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ze = (e) => wf.test(e), _ = (e) => !!e && !Number.isNaN(Number(e)), Re = (e) => !!e && Number.isInteger(Number(e)), ko = (e) => e.endsWith("%") && _(e.slice(0, -1)), ke = (e) => kf.test(e), oa = () => !0, Rf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Cf.test(e) && !Nf.test(e)
), ir = () => !1, Mf = (e) => Sf.test(e), Ef = (e) => Lf.test(e), Af = (e) => !I(e) && !P(e), If = (e) => _e(e, sa, ir), I = (e) => ea.test(e), Fe = (e) => _e(e, ia, Rf), Hr = (e) => _e(e, Wf, _), Pf = (e) => _e(e, la, oa), Tf = (e) => _e(e, aa, ir), $r = (e) => _e(e, ra, ir), Df = (e) => _e(e, na, Ef), Lt = (e) => _e(e, ca, Mf), P = (e) => ta.test(e), dt = (e) => Ke(e, ia), Of = (e) => Ke(e, aa), jr = (e) => Ke(e, ra), zf = (e) => Ke(e, sa), _f = (e) => Ke(e, na), Rt = (e) => Ke(e, ca, !0), Bf = (e) => Ke(e, la, !0), _e = (e, t, o) => {
  const r = ea.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, Ke = (e, t, o = !1) => {
  const r = ta.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, ra = (e) => e === "position" || e === "percentage", na = (e) => e === "image" || e === "url", sa = (e) => e === "length" || e === "size" || e === "bg-size", ia = (e) => e === "length", Wf = (e) => e === "number", aa = (e) => e === "family-name", la = (e) => e === "number" || e === "weight", ca = (e) => e === "shadow", Vf = () => {
  const e = ee("color"), t = ee("font"), o = ee("text"), r = ee("font-weight"), s = ee("tracking"), i = ee("leading"), a = ee("breakpoint"), l = ee("container"), d = ee("spacing"), u = ee("radius"), f = ee("shadow"), p = ee("inset-shadow"), g = ee("text-shadow"), v = ee("drop-shadow"), b = ee("blur"), h = ee("perspective"), x = ee("aspect"), w = ee("ease"), k = ee("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], R = () => [...N(), P, I], E = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], S = () => [P, I, d], O = () => [Ze, "full", "auto", ...S()], B = () => [Re, "none", "subgrid", P, I], V = () => ["auto", {
    span: ["full", Re, P, I]
  }, Re, P, I], H = () => [Re, "auto", P, I], $ = () => ["auto", "min", "max", "fr", P, I], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], j = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], T = () => ["auto", ...S()], W = () => [Ze, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], L = () => [e, P, I], K = () => [...N(), jr, $r, {
    position: [P, I]
  }], oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], pe = () => ["auto", "cover", "contain", zf, If, {
    size: [P, I]
  }], we = () => [ko, dt, Fe], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    P,
    I
  ], Z = () => ["", _, dt, Fe], le = () => ["solid", "dashed", "dotted", "double"], me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => [_, ko, jr, $r], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    P,
    I
  ], J = () => ["none", _, P, I], G = () => ["none", _, P, I], Y = () => [_, P, I], X = () => [Ze, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ke],
      breakpoint: [ke],
      color: [oa],
      container: [ke],
      "drop-shadow": [ke],
      ease: ["in", "out", "in-out"],
      font: [Af],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ke],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ke],
      shadow: [ke],
      spacing: ["px", _],
      text: [ke],
      "text-shadow": [ke],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ze, I, P, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [_, I, P, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: R()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Re, "auto", P, I]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ze, "full", "auto", l, ...S()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [_, Ze, "auto", "initial", "none", I]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _, P, I]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _, P, I]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Re, "first", "last", "none", P, I]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": B()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": B()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...j(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...j()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...j(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...j(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...j(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...j()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: T()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: T()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: T()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: T()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: T()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: T()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: T()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: T()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: T()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": S()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": S()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: W()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...W()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...W()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, dt, Fe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, Bf, Pf]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ko, I]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Of, Tf, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, P, I]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_, "none", P, Hr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", P, I]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", P, I]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...le(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [_, "from-font", "auto", P, Fe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [_, "auto", P, I]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P, I]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", P, I]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: K()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: oe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: pe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Re, P, I],
          radial: ["", P, I],
          conic: [Re, P, I]
        }, _f, Df]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: we()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: we()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: we()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Q()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Z()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Z()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...le(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...le(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...le(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_, P, I]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _, dt, Fe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          Rt,
          Lt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, Rt, Lt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [_, Fe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": L()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, Rt, Lt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_, P, I]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...me(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": me()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [_]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": A()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": A()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": A()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": A()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": A()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": A()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": A()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [P, I]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": A()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [_]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": A()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: K()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: oe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: pe()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", P, I]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          P,
          I
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [_, P, I]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_, P, I]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          Rt,
          Lt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", _, P, I]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_, P, I]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _, P, I]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_, P, I]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _, P, I]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          P,
          I
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [_, P, I]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_, P, I]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _, P, I]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_, P, I]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _, P, I]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_, P, I]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_, P, I]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _, P, I]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", P, I]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [_, "initial", P, I]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, P, I]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_, P, I]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, P, I]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, P, I]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": R()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: G()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": G()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": G()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": G()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Y()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Y()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Y()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [P, I, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: R()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: X()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": X()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": X()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": X()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: L()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: L()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P, I]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", P, I]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [_, dt, Fe, Hr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Ff = /* @__PURE__ */ bf(Vf);
function m(...e) {
  return Ff(Yr(e));
}
const ar = pt(
  // 기본 스타일: 토스 특유의 부드러운 터치 피드백
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-150 outline-none disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        /** Primary - 토스 블루 (#3182F6) */
        default: "bg-primary text-primary-foreground hover:bg-[#1B64DA] focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0",
        /** Secondary - 연한 파랑 배경 */
        secondary: "bg-secondary text-primary hover:bg-[#C7DCFF] focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0",
        /** Outline - 테두리만 */
        outline: "border border-border bg-transparent text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0",
        /** Ghost - 배경 없음, 호버시 배경 */
        ghost: "bg-transparent text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0",
        /** Destructive - 경고/삭제 액션용 빨강 */
        destructive: "bg-destructive text-white hover:bg-[#D63B48] focus-visible:ring-2 focus-visible:ring-destructive/30 focus-visible:ring-offset-0",
        /** Link - 텍스트 링크 스타일 */
        link: "text-primary underline-offset-4 hover:underline active:scale-100",
        /** Muted - 회색 배경, 덜 강조되는 액션 */
        muted: "bg-muted text-muted-foreground hover:bg-[#E5E8EB] focus-visible:ring-2 focus-visible:ring-muted-foreground/30 focus-visible:ring-offset-0"
      },
      size: {
        /** Small - 보조 버튼, 칩 스타일 (28px) */
        sm: "h-7 px-2.5 rounded-md text-[12px] [&_svg:not([class*='size-'])]:size-3.5",
        /** Default - 기본 버튼 (40px) - Input/Select와 통일 */
        default: "h-10 px-4 rounded-lg text-[14px]",
        /** Large - 주요 CTA, Dialog 버튼 (44px) */
        lg: "h-11 px-5 rounded-lg text-[15px]",
        /** Extra Large - Dialog/하단 고정 CTA (48px) */
        xl: "h-12 px-6 rounded-lg text-[16px]",
        /** 아이콘 버튼들 */
        icon: "size-10 rounded-lg",
        "icon-sm": "size-7 rounded-md",
        "icon-lg": "size-11 rounded-lg"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: !1
    }
  }
), rt = c.forwardRef(
  ({ className: e, variant: t, size: o, fullWidth: r, asChild: s = !1, loading: i = !1, disabled: a, children: l, ...d }, u) => /* @__PURE__ */ n(
    s ? La : "button",
    {
      ref: u,
      "data-slot": "button",
      "data-variant": t,
      "data-size": o,
      disabled: a || i,
      className: m(ar({ variant: t, size: o, fullWidth: r, className: e })),
      ...d,
      children: i ? /* @__PURE__ */ y(te, { children: [
        /* @__PURE__ */ y(
          "svg",
          {
            className: "animate-spin size-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ n(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "3"
                }
              ),
              /* @__PURE__ */ n(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n("span", { children: "로딩 중..." })
      ] }) : l
    }
  )
);
rt.displayName = "Button";
function jg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card",
      className: m(
        "bg-white text-card-foreground flex flex-col rounded-lg",
        e
      ),
      ...t
    }
  );
}
function Ug({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-header",
      className: m(
        "flex flex-col gap-1.5 px-5 pt-5",
        e
      ),
      ...t
    }
  );
}
function Gg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-title",
      className: m("leading-none font-semibold", e),
      ...t
    }
  );
}
function Kg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-description",
      className: m("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Yg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-action",
      className: m(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function qg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-content",
      className: m("px-5 pb-5", e),
      ...t
    }
  );
}
function Xg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-footer",
      className: m("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const da = (...e) => e.filter((t, o, r) => !!t && t.trim() !== "" && r.indexOf(t) === o).join(" ").trim();
const Hf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const $f = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, r) => r ? r.toUpperCase() : o.toLowerCase()
);
const Ur = (e) => {
  const t = $f(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var jf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Uf = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Gf = Gr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: i,
    iconNode: a,
    ...l
  }, d) => Co(
    "svg",
    {
      ref: d,
      ...jf,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(o) * 24 / Number(t) : o,
      className: da("lucide", s),
      ...!i && !Uf(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...a.map(([u, f]) => Co(u, f)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Be = (e, t) => {
  const o = Gr(
    ({ className: r, ...s }, i) => Co(Gf, {
      ref: i,
      iconNode: t,
      className: da(
        `lucide-${Hf(Ur(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return o.displayName = Ur(e), o;
};
const Kf = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], lr = Be("check", Kf);
const Yf = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ua = Be("chevron-down", Yf);
const qf = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], fa = Be("chevron-left", qf);
const Xf = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ao = Be("chevron-right", Xf);
const Zf = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Qf = Be("chevron-up", Zf);
const Jf = [["path", { d: "M5 12h14", key: "1ays0h" }]], ep = Be("minus", Jf);
const tp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], op = Be("search", tp);
const rp = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ct = Be("x", rp), np = c.forwardRef(
  ({
    className: e,
    type: t,
    clearable: o,
    onClear: r,
    leftElement: s,
    rightElement: i,
    error: a,
    success: l,
    value: d,
    ...u
  }, f) => {
    const p = d !== void 0 && d !== "";
    return s || i || o ? /* @__PURE__ */ y("div", { className: "relative", children: [
      s && /* @__PURE__ */ n("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none", children: s }),
      /* @__PURE__ */ n(
        "input",
        {
          type: t,
          ref: f,
          "data-slot": "input",
          value: d,
          className: m(
            // 토스 스타일 Input
            "w-full h-10 rounded-lg",
            "bg-muted border-0",
            "text-[15px] text-foreground placeholder:text-muted-foreground",
            "transition-all duration-150",
            "outline-none",
            "focus:ring-2 focus:ring-primary/30 focus:bg-background",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            // 패딩 조정
            s ? "pl-11" : "px-4",
            i || o ? "pr-11" : "px-4",
            // 상태별 스타일
            a && "ring-2 ring-destructive/30 bg-[#FFEBEE]/30",
            l && "ring-2 ring-[#30C85E]/30 bg-[#E5F9ED]/30",
            e
          ),
          ...u
        }
      ),
      o && p || i ? /* @__PURE__ */ y("div", { className: "absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2", children: [
        o && p && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: r,
            className: "p-1 rounded-full bg-[#B0B8C1] text-white hover:bg-[#8B95A1] transition-colors",
            children: /* @__PURE__ */ n(ct, { className: "size-3.5", strokeWidth: 2.5 })
          }
        ),
        i && !o && /* @__PURE__ */ n("div", { className: "text-muted-foreground", children: i })
      ] }) : null
    ] }) : /* @__PURE__ */ n(
      "input",
      {
        type: t,
        ref: f,
        "data-slot": "input",
        value: d,
        className: m(
          // 토스 스타일 Input
          "w-full h-10 px-3.5 rounded-lg",
          "bg-muted border-0",
          "text-[15px] text-foreground placeholder:text-muted-foreground",
          "transition-all duration-150",
          "outline-none",
          "focus:ring-2 focus:ring-primary/30 focus:bg-background",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          // 상태별 스타일
          a && "ring-2 ring-destructive/30 bg-[#FFEBEE]/30",
          l && "ring-2 ring-[#30C85E]/30 bg-[#E5F9ED]/30",
          e
        ),
        ...u
      }
    );
  }
);
np.displayName = "Input";
const sp = c.forwardRef(
  ({ className: e, value: t, onClear: o, ...r }, s) => {
    const i = t !== void 0 && t !== "";
    return /* @__PURE__ */ y("div", { className: "relative", children: [
      /* @__PURE__ */ n("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none", children: /* @__PURE__ */ n(op, { className: "size-5" }) }),
      /* @__PURE__ */ n(
        "input",
        {
          ref: s,
          type: "search",
          value: t,
          "data-slot": "search-input",
          className: m(
            // 토스 스타일 검색 Input - h-10으로 통일
            "w-full h-10 rounded-lg",
            "bg-muted border-0",
            "text-[15px] text-foreground placeholder:text-muted-foreground",
            "transition-all duration-150",
            "outline-none pl-11",
            i ? "pr-11" : "pr-4",
            "focus:ring-2 focus:ring-primary/30 focus:bg-background",
            // 기본 search input 스타일 제거
            "[&::-webkit-search-cancel-button]:hidden",
            "[&::-webkit-search-decoration]:hidden",
            e
          ),
          ...r
        }
      ),
      i && o && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          onClick: o,
          className: "absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-[#B0B8C1] text-white hover:bg-[#8B95A1] transition-colors",
          children: /* @__PURE__ */ n(ct, { className: "size-3.5", strokeWidth: 2.5 })
        }
      )
    ] });
  }
);
sp.displayName = "SearchInput";
const ip = c.forwardRef(
  ({ className: e, ...t }, o) => /* @__PURE__ */ n(
    "textarea",
    {
      ref: o,
      "data-slot": "textarea",
      className: m(
        // 토스 스타일 Textarea
        "w-full min-h-[120px] px-4 py-3 rounded-xl",
        "bg-muted border-0 text-foreground",
        "text-[15px] leading-relaxed placeholder:text-muted-foreground",
        "resize-none outline-none",
        "transition-shadow duration-150",
        "focus:ring-2 focus:ring-primary/30 focus:bg-background",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        e
      ),
      ...t
    }
  )
);
ip.displayName = "Textarea";
function Zg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ n(
    eu,
    {
      "data-slot": "label",
      className: m(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const ap = pt(
  // 토스 스타일 Badge 기본
  "inline-flex items-center justify-center font-semibold transition-colors select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-primary",
        outline: "border-2 border-border bg-transparent text-foreground",
        destructive: "bg-[#FFEBEE] text-destructive",
        success: "bg-[#E5F9ED] text-[#30C85E]",
        warning: "bg-[#FFF3E0] text-[#FF9500]",
        info: "bg-[#E8F3FF] text-primary",
        muted: "bg-muted text-muted-foreground"
      },
      size: {
        default: "h-6 px-2.5 text-[11px] rounded-md",
        sm: "h-5 px-2 text-[10px] rounded",
        lg: "h-7 px-3 text-[13px] rounded-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Qg({ className: e, variant: t, size: o, ...r }) {
  return /* @__PURE__ */ n(
    "span",
    {
      "data-slot": "badge",
      className: m(ap({ variant: t, size: o }), e),
      ...r
    }
  );
}
const lp = pt(
  "inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-150 select-none cursor-pointer active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground hover:bg-[#E5E8EB]",
        selected: "bg-primary text-primary-foreground",
        outline: "border border-border bg-transparent text-foreground hover:bg-muted"
      },
      size: {
        default: "h-8 px-3 text-[13px] rounded-full",
        sm: "h-7 px-2.5 text-[12px] rounded-full",
        lg: "h-10 px-4 text-[15px] rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Jg({
  className: e,
  variant: t,
  size: o,
  selected: r = !1,
  onSelect: s,
  children: i,
  ...a
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      "data-slot": "chip",
      "data-selected": r,
      onClick: s,
      className: m(
        lp({
          variant: r ? "selected" : t,
          size: o
        }),
        e
      ),
      ...a,
      children: i
    }
  );
}
const cp = pt(
  "relative flex shrink-0 overflow-hidden bg-muted",
  {
    variants: {
      size: {
        xs: "size-6 text-[10px]",
        sm: "size-8 text-[12px]",
        default: "size-10 text-[14px]",
        lg: "size-12 text-[16px]",
        xl: "size-16 text-[20px]",
        "2xl": "size-20 text-[24px]"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-xl"
      }
    },
    defaultVariants: {
      size: "default",
      shape: "circle"
    }
  }
), dp = c.forwardRef(
  ({ className: e, size: t, shape: o, src: r, alt: s, fallback: i, children: a, ...l }, d) => {
    const [u, f] = c.useState(!1), p = c.useMemo(() => i ? i.charAt(0).toUpperCase() : s ? s.charAt(0).toUpperCase() : "?", [i, s]);
    return /* @__PURE__ */ n(
      "div",
      {
        ref: d,
        "data-slot": "avatar",
        className: m(cp({ size: t, shape: o }), e),
        ...l,
        children: r && !u ? /* @__PURE__ */ n(
          "img",
          {
            src: r,
            alt: s || "Avatar",
            onError: () => f(!0),
            className: "aspect-square size-full object-cover"
          }
        ) : a || /* @__PURE__ */ n("div", { className: "flex size-full items-center justify-center bg-muted text-muted-foreground font-semibold", children: p })
      }
    );
  }
);
dp.displayName = "Avatar";
const up = c.forwardRef(
  ({ className: e, max: t = 4, children: o, ...r }, s) => {
    const i = c.Children.toArray(o), a = i.slice(0, t), l = i.length - t;
    return /* @__PURE__ */ y(
      "div",
      {
        ref: s,
        "data-slot": "avatar-group",
        className: m("flex -space-x-3", e),
        ...r,
        children: [
          a.map((d, u) => /* @__PURE__ */ n(
            "div",
            {
              className: "ring-2 ring-background rounded-full",
              style: { zIndex: a.length - u },
              children: d
            },
            u
          )),
          l > 0 && /* @__PURE__ */ y(
            "div",
            {
              className: "flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground text-[12px] font-semibold ring-2 ring-background",
              style: { zIndex: 0 },
              children: [
                "+",
                l
              ]
            }
          )
        ]
      }
    );
  }
);
up.displayName = "AvatarGroup";
const fp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Bi,
  {
    ref: o,
    "data-slot": "switch",
    className: m(
      // 토스 스타일 Switch - 컴팩트
      "peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      "disabled:cursor-not-allowed disabled:opacity-40",
      // 상태별 색상
      "data-[state=unchecked]:bg-[#D1D6DB]",
      "data-[state=checked]:bg-primary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(
      qu,
      {
        className: m(
          // 토스 스타일 Thumb - 컴팩트
          "pointer-events-none block size-5 rounded-full bg-white shadow-md",
          "ring-0 transition-transform duration-200",
          "data-[state=unchecked]:translate-x-0.5",
          "data-[state=checked]:translate-x-[18px]"
        )
      }
    )
  }
));
fp.displayName = Bi.displayName;
const pp = c.forwardRef(
  ({ className: e, pressed: t = !1, onPressedChange: o, children: r, ...s }, i) => /* @__PURE__ */ n(
    "button",
    {
      ref: i,
      type: "button",
      role: "switch",
      "aria-checked": t,
      "data-state": t ? "on" : "off",
      onClick: () => o?.(!t),
      className: m(
        // 토스 스타일 Toggle - 컴팩트
        "inline-flex items-center justify-center gap-1.5 px-3 h-8 rounded-lg",
        "font-semibold text-[13px] transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        "disabled:cursor-not-allowed disabled:opacity-40",
        "active:scale-[0.97]",
        // 상태별 스타일
        t ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-[#E5E8EB]",
        e
      ),
      ...s,
      children: r
    }
  )
);
pp.displayName = "Toggle";
const pa = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  jo,
  {
    ref: o,
    "data-slot": "checkbox",
    className: m(
      // 토스 스타일 Checkbox
      "peer size-6 shrink-0 rounded-lg",
      "transition-all duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      "disabled:cursor-not-allowed disabled:opacity-40",
      // 상태별 스타일
      "border-2 border-[#D1D6DB]",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
      "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(
      Qn,
      {
        className: m("flex items-center justify-center text-primary-foreground"),
        children: t.checked === "indeterminate" ? /* @__PURE__ */ n(ep, { className: "size-4 stroke-[3]" }) : /* @__PURE__ */ n(lr, { className: "size-4 stroke-[3]" })
      }
    )
  }
));
pa.displayName = jo.displayName;
const mp = c.forwardRef(({ className: e, label: t, description: o, id: r, ...s }, i) => {
  const a = c.useId(), l = r || a;
  return /* @__PURE__ */ y(
    "label",
    {
      htmlFor: l,
      className: m(
        "flex items-start gap-3 p-3 -m-3 rounded-xl cursor-pointer",
        "transition-colors hover:bg-muted/30",
        s.disabled && "cursor-not-allowed opacity-40"
      ),
      children: [
        /* @__PURE__ */ n(pa, { ref: i, id: l, className: e, ...s }),
        /* @__PURE__ */ y("div", { className: "flex flex-col gap-0.5 select-none", children: [
          /* @__PURE__ */ n("span", { className: "text-[15px] font-medium text-foreground leading-6", children: t }),
          o && /* @__PURE__ */ n("span", { className: "text-[13px] text-muted-foreground", children: o })
        ] })
      ]
    }
  );
});
mp.displayName = "CheckboxWithLabel";
const hp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  qs,
  {
    ref: o,
    "data-slot": "radio-group",
    className: m("flex flex-col gap-3", e),
    ...t
  }
));
hp.displayName = qs.displayName;
const gp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Jt,
  {
    ref: o,
    "data-slot": "radio-group-item",
    className: m(
      // 토스 스타일 Radio - 22px 크기
      "aspect-square size-[22px] shrink-0 rounded-full",
      "border-2 border-[#D1D6DB]",
      "transition-all duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      "disabled:cursor-not-allowed disabled:opacity-40",
      // 선택됨 - 파란 테두리 + 내부 원
      "data-[state=checked]:border-primary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(Xs, { className: "flex items-center justify-center size-full", children: /* @__PURE__ */ n("div", { className: "size-3 rounded-full bg-primary" }) })
  }
));
gp.displayName = Jt.displayName;
const vp = c.forwardRef(({ className: e, label: t, description: o, ...r }, s) => /* @__PURE__ */ y(
  "label",
  {
    className: m(
      "flex items-start gap-3 p-3 -m-3 rounded-xl cursor-pointer",
      "transition-colors hover:bg-muted/30",
      r.disabled && "cursor-not-allowed opacity-40"
    ),
    children: [
      /* @__PURE__ */ n(
        Jt,
        {
          ref: s,
          "data-slot": "radio-with-label",
          className: m(
            "aspect-square size-[22px] shrink-0 rounded-full mt-0.5",
            "border-2 border-[#D1D6DB]",
            "transition-all duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
            "disabled:cursor-not-allowed disabled:opacity-40",
            "data-[state=checked]:border-primary",
            e
          ),
          ...r,
          children: /* @__PURE__ */ n(Xs, { className: "flex items-center justify-center size-full", children: /* @__PURE__ */ n("div", { className: "size-3 rounded-full bg-primary" }) })
        }
      ),
      /* @__PURE__ */ y("div", { className: "flex flex-col gap-0.5 select-none", children: [
        /* @__PURE__ */ n("span", { className: "text-[15px] font-medium text-foreground leading-6", children: t }),
        o && /* @__PURE__ */ n("span", { className: "text-[13px] text-muted-foreground", children: o })
      ] })
    ]
  }
));
vp.displayName = "RadioWithLabel";
const xp = c.forwardRef(({ className: e, label: t, description: o, ...r }, s) => /* @__PURE__ */ y(
  Jt,
  {
    ref: s,
    "data-slot": "radio-card",
    className: m(
      // 토스 스타일 카드형 라디오
      "group flex items-center gap-3 p-3 rounded-xl bg-card",
      "border-2 border-transparent",
      "transition-all duration-150 cursor-pointer",
      "hover:bg-muted/50",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      "disabled:cursor-not-allowed disabled:opacity-40",
      // 선택됨 - 다크모드 지원
      "data-[state=checked]:border-primary data-[state=checked]:bg-secondary",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ y("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ n("p", { className: "text-[15px] font-semibold text-foreground", children: t }),
        o && /* @__PURE__ */ n("p", { className: "text-[13px] text-muted-foreground mt-0.5", children: o })
      ] }),
      /* @__PURE__ */ n(
        "div",
        {
          className: m(
            "size-[22px] shrink-0 rounded-full border-2 border-[#D1D6DB]",
            "flex items-center justify-center",
            "transition-all duration-150",
            "group-data-[state=checked]:border-primary"
          ),
          children: /* @__PURE__ */ n("div", { className: "size-3 rounded-full bg-primary scale-0 transition-transform duration-150 group-data-[state=checked]:scale-100" })
        }
      )
    ]
  }
));
xp.displayName = "RadioCard";
const ev = _u, tv = Hu, ov = Bu, bp = c.forwardRef(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ y(
  Li,
  {
    ref: r,
    "data-slot": "select-trigger",
    className: m(
      // 토스 스타일 Select Trigger
      "flex h-10 w-full items-center justify-between gap-2",
      "px-4 rounded-lg bg-muted",
      "text-[15px] text-foreground placeholder:text-muted-foreground",
      "transition-all duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:bg-background",
      "disabled:cursor-not-allowed disabled:opacity-40",
      "[&>span]:truncate",
      e
    ),
    ...o,
    children: [
      t,
      /* @__PURE__ */ n(Wu, { asChild: !0, children: /* @__PURE__ */ n(ua, { className: "size-5 text-muted-foreground shrink-0" }) })
    ]
  }
));
bp.displayName = Li.displayName;
const ma = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Ai,
  {
    ref: o,
    className: m(
      "flex cursor-default items-center justify-center py-2",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(Qf, { className: "size-4" })
  }
));
ma.displayName = Ai.displayName;
const ha = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Ii,
  {
    ref: o,
    className: m(
      "flex cursor-default items-center justify-center py-2",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(ua, { className: "size-4" })
  }
));
ha.displayName = Ii.displayName;
const yp = c.forwardRef(({ className: e, children: t, position: o = "popper", ...r }, s) => /* @__PURE__ */ n(Vu, { children: /* @__PURE__ */ y(
  Ri,
  {
    ref: s,
    "data-slot": "select-content",
    className: m(
      // 토스 스타일 Select Content
      "relative z-50 max-h-80 min-w-[8rem] overflow-hidden",
      "rounded-xl bg-card text-foreground",
      "shadow-lg border border-border",
      // 애니메이션
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=top]:slide-in-from-bottom-2",
      o === "popper" && "data-[side=bottom]:translate-y-2 data-[side=top]:-translate-y-2",
      e
    ),
    position: o,
    ...r,
    children: [
      /* @__PURE__ */ n(ma, {}),
      /* @__PURE__ */ n(
        Fu,
        {
          className: m(
            "p-2",
            o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ n(ha, {})
    ]
  }
) }));
yp.displayName = Ri.displayName;
const wp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Mi,
  {
    ref: o,
    "data-slot": "select-label",
    className: m("px-3 py-2 text-[13px] font-semibold text-muted-foreground", e),
    ...t
  }
));
wp.displayName = Mi.displayName;
const kp = c.forwardRef(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ y(
  Ei,
  {
    ref: r,
    "data-slot": "select-item",
    className: m(
      // 토스 스타일 Select Item
      "relative flex w-full cursor-pointer select-none items-center",
      "py-2.5 px-3 rounded-lg",
      "text-[15px] text-foreground",
      "outline-none transition-colors",
      "focus:bg-muted",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute right-3 flex size-5 items-center justify-center", children: /* @__PURE__ */ n(ju, { children: /* @__PURE__ */ n(lr, { className: "size-5 text-primary" }) }) }),
      /* @__PURE__ */ n($u, { children: t })
    ]
  }
));
kp.displayName = Ei.displayName;
const Cp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Pi,
  {
    ref: o,
    className: m("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
Cp.displayName = Pi.displayName;
const rv = mt, nv = ht, Np = gt, sv = Se, ga = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  nt,
  {
    ref: o,
    "data-slot": "dialog-overlay",
    className: m(
      "fixed inset-0 z-50 bg-black/50",
      // 애니메이션
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ga.displayName = nt.displayName;
const Sp = c.forwardRef(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ y(Np, { children: [
  /* @__PURE__ */ n(ga, {}),
  /* @__PURE__ */ y(
    st,
    {
      ref: r,
      "data-slot": "dialog-content",
      className: m(
        // 토스 스타일 Dialog
        "fixed left-1/2 top-1/2 z-50 w-[calc(100%-40px)] max-w-md -translate-x-1/2 -translate-y-1/2",
        "rounded-2xl bg-card p-5",
        "shadow-lg",
        // 애니메이션
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
        "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "duration-200",
        e
      ),
      ...o,
      children: [
        t,
        /* @__PURE__ */ y(
          Se,
          {
            className: m(
              "absolute right-4 top-4 p-1.5 rounded-full",
              "text-muted-foreground hover:text-foreground hover:bg-muted hover:rounded-full",
              "transition-all",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
            ),
            children: [
              /* @__PURE__ */ n(ct, { className: "size-5" }),
              /* @__PURE__ */ n("span", { className: "sr-only", children: "Close" })
            ]
          }
        )
      ]
    }
  )
] }));
Sp.displayName = st.displayName;
const Lp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "dialog-header",
    className: m("flex flex-col gap-2 text-center sm:text-left", e),
    ...t
  }
);
Lp.displayName = "DialogHeader";
const Rp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "dialog-footer",
    className: m(
      "flex flex-row gap-2 mt-5",
      e
    ),
    ...t
  }
);
Rp.displayName = "DialogFooter";
const Mp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  vt,
  {
    ref: o,
    "data-slot": "dialog-title",
    className: m("text-[20px] font-bold text-foreground", e),
    ...t
  }
));
Mp.displayName = vt.displayName;
const Ep = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  $t,
  {
    ref: o,
    "data-slot": "dialog-description",
    className: m("text-[15px] text-muted-foreground", e),
    ...t
  }
));
Ep.displayName = $t.displayName;
const iv = pc, av = mc, Ap = hc, va = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  $n,
  {
    ref: o,
    "data-slot": "alert-dialog-overlay",
    className: m(
      "fixed inset-0 z-50 bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
va.displayName = $n.displayName;
const Ip = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ y(Ap, { children: [
  /* @__PURE__ */ n(va, {}),
  /* @__PURE__ */ n(
    jn,
    {
      ref: o,
      "data-slot": "alert-dialog-content",
      className: m(
        // 토스 스타일 Alert Dialog
        "fixed left-1/2 top-1/2 z-50",
        "w-[calc(100%-40px)] max-w-[320px]",
        "-translate-x-1/2 -translate-y-1/2",
        "rounded-2xl bg-card p-5",
        "shadow-lg",
        // 애니메이션
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
        "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "duration-200",
        e
      ),
      ...t
    }
  )
] }));
Ip.displayName = jn.displayName;
const Pp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "alert-dialog-header",
    className: m("flex flex-col items-center text-center", e),
    ...t
  }
);
Pp.displayName = "AlertDialogHeader";
const Tp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "alert-dialog-footer",
    className: m("flex flex-row gap-2 mt-5", e),
    ...t
  }
);
Tp.displayName = "AlertDialogFooter";
const Dp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Kn,
  {
    ref: o,
    "data-slot": "alert-dialog-title",
    className: m("text-[17px] font-bold text-foreground", e),
    ...t
  }
));
Dp.displayName = Kn.displayName;
const Op = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Yn,
  {
    ref: o,
    "data-slot": "alert-dialog-description",
    className: m("text-[15px] text-muted-foreground mt-2", e),
    ...t
  }
));
Op.displayName = Yn.displayName;
const zp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Un,
  {
    ref: o,
    className: m(ar({ size: "lg" }), "flex-1", e),
    ...t
  }
));
zp.displayName = Un.displayName;
const _p = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Gn,
  {
    ref: o,
    className: m(
      ar({ variant: "outline", size: "lg" }),
      "flex-1",
      e
    ),
    ...t
  }
));
_p.displayName = Gn.displayName;
const lv = mt, cv = ht, dv = Se, Bp = gt, xa = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  nt,
  {
    ref: o,
    "data-slot": "bottom-sheet-overlay",
    className: m(
      "fixed inset-0 z-50 bg-black/50",
      // 애니메이션
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
xa.displayName = "BottomSheetOverlay";
const Wp = c.forwardRef(({ className: e, children: t, showHandle: o = !0, showClose: r = !1, ...s }, i) => /* @__PURE__ */ y(Bp, { children: [
  /* @__PURE__ */ n(xa, {}),
  /* @__PURE__ */ y(
    st,
    {
      ref: i,
      "data-slot": "bottom-sheet-content",
      className: m(
        // 토스 스타일 BottomSheet
        "fixed inset-x-0 bottom-0 z-50",
        "rounded-t-3xl bg-card",
        "max-h-[90vh] overflow-auto",
        // 애니메이션
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        "duration-300",
        e
      ),
      ...s,
      children: [
        o && /* @__PURE__ */ n("div", { className: "flex justify-center pt-3 pb-2", children: /* @__PURE__ */ n("div", { className: "w-10 h-1 rounded-full bg-[#D1D6DB]" }) }),
        r && /* @__PURE__ */ y(
          Se,
          {
            className: m(
              "absolute right-4 top-4 p-1 rounded-full",
              "text-muted-foreground hover:text-foreground hover:bg-muted",
              "transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary/30"
            ),
            children: [
              /* @__PURE__ */ n(ct, { className: "size-5" }),
              /* @__PURE__ */ n("span", { className: "sr-only", children: "Close" })
            ]
          }
        ),
        t
      ]
    }
  )
] }));
Wp.displayName = "BottomSheetContent";
const Vp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "bottom-sheet-header",
    className: m("px-5 pt-2 pb-4", e),
    ...t
  }
);
Vp.displayName = "BottomSheetHeader";
const Fp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "bottom-sheet-body",
    className: m("px-5 pb-6", e),
    ...t
  }
);
Fp.displayName = "BottomSheetBody";
const Hp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "bottom-sheet-footer",
    className: m(
      "px-5 py-4 border-t border-border",
      "pb-[max(16px,env(safe-area-inset-bottom))]",
      e
    ),
    ...t
  }
);
Hp.displayName = "BottomSheetFooter";
const $p = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  vt,
  {
    ref: o,
    "data-slot": "bottom-sheet-title",
    className: m("text-[20px] font-bold text-foreground", e),
    ...t
  }
));
$p.displayName = "BottomSheetTitle";
const jp = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  $t,
  {
    ref: o,
    "data-slot": "bottom-sheet-description",
    className: m("text-[15px] text-muted-foreground mt-1", e),
    ...t
  }
));
jp.displayName = "BottomSheetDescription";
const uv = mt, fv = ht, Up = gt, ba = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  nt,
  {
    ref: o,
    "data-slot": "action-sheet-overlay",
    className: m(
      "fixed inset-0 z-50 bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ba.displayName = "ActionSheetOverlay";
const Gp = c.forwardRef(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ y(Up, { children: [
  /* @__PURE__ */ n(ba, {}),
  /* @__PURE__ */ n(
    st,
    {
      ref: r,
      "data-slot": "action-sheet-content",
      className: m(
        // 토스 스타일 ActionSheet
        "fixed inset-x-0 bottom-0 z-50",
        "p-3 pb-[max(12px,env(safe-area-inset-bottom))]",
        // 애니메이션
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        "duration-300",
        e
      ),
      ...o,
      children: t
    }
  )
] }));
Gp.displayName = "ActionSheetContent";
const Kp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "action-sheet-group",
    className: m(
      "bg-card rounded-2xl overflow-hidden",
      "divide-y divide-border",
      e
    ),
    ...t
  }
);
Kp.displayName = "ActionSheetGroup";
const Yp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "action-sheet-title",
    className: m(
      "px-4 py-3 text-center",
      "text-[13px] text-muted-foreground",
      e
    ),
    ...t
  }
);
Yp.displayName = "ActionSheetTitle";
const qp = c.forwardRef(
  ({ className: e, destructive: t = !1, children: o, ...r }, s) => /* @__PURE__ */ n(
    "button",
    {
      ref: s,
      type: "button",
      "data-slot": "action-sheet-item",
      className: m(
        "w-full px-4 py-4",
        "text-[17px] font-medium text-center",
        "transition-colors",
        "hover:bg-muted active:bg-muted",
        "focus:outline-none",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        t ? "text-destructive" : "text-primary",
        e
      ),
      ...r,
      children: o
    }
  )
);
qp.displayName = "ActionSheetItem";
const Xp = c.forwardRef(({ className: e, children: t = "취소", ...o }, r) => /* @__PURE__ */ n(
  Se,
  {
    ref: r,
    "data-slot": "action-sheet-cancel",
    className: m(
      "w-full mt-2 px-4 py-4",
      "bg-card rounded-2xl",
      "text-[17px] font-semibold text-primary text-center",
      "transition-colors",
      "hover:bg-muted active:bg-muted",
      "focus:outline-none",
      e
    ),
    ...o,
    children: t
  }
));
Xp.displayName = "ActionSheetCancel";
const pv = mt, mv = ht, hv = Se, Zp = gt, ya = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  nt,
  {
    ref: o,
    "data-slot": "drawer-overlay",
    className: m(
      "fixed inset-0 z-50 bg-black/50",
      // 애니메이션
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ya.displayName = "DrawerOverlay";
const Qp = c.forwardRef(({ className: e, children: t, side: o = "left", ...r }, s) => /* @__PURE__ */ y(Zp, { children: [
  /* @__PURE__ */ n(ya, {}),
  /* @__PURE__ */ n(
    st,
    {
      ref: s,
      "data-slot": "drawer-content",
      className: m(
        // 토스 스타일 Drawer
        "fixed inset-y-0 z-50",
        "w-[280px] max-w-[85vw]",
        "bg-card flex flex-col",
        "shadow-xl",
        // 방향별 위치
        o === "left" && "left-0 rounded-r-3xl",
        o === "right" && "right-0 rounded-l-3xl",
        // 애니메이션
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        o === "left" && [
          "data-[state=closed]:slide-out-to-left",
          "data-[state=open]:slide-in-from-left"
        ],
        o === "right" && [
          "data-[state=closed]:slide-out-to-right",
          "data-[state=open]:slide-in-from-right"
        ],
        "duration-300",
        e
      ),
      ...r,
      children: t
    }
  )
] }));
Qp.displayName = "DrawerContent";
const Jp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "drawer-header",
    className: m(
      "flex items-center justify-between",
      "px-5 pt-[max(20px,env(safe-area-inset-top))] pb-4",
      "border-b border-border",
      e
    ),
    ...t
  }
);
Jp.displayName = "DrawerHeader";
const em = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  vt,
  {
    ref: o,
    "data-slot": "drawer-title",
    className: m("text-[17px] font-bold text-foreground", e),
    ...t
  }
));
em.displayName = "DrawerTitle";
const tm = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "drawer-body",
    className: m("flex-1 overflow-auto px-5 py-4", e),
    ...t
  }
);
tm.displayName = "DrawerBody";
const om = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "drawer-footer",
    className: m(
      "px-5 py-4 border-t border-border",
      "pb-[max(16px,env(safe-area-inset-bottom))]",
      e
    ),
    ...t
  }
);
om.displayName = "DrawerFooter";
const rm = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ y(
  Se,
  {
    ref: o,
    className: m(
      "p-1.5 rounded-full",
      "text-muted-foreground hover:text-foreground hover:bg-muted",
      "transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-primary/30",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ n(ct, { className: "size-5" }),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "Close" })
    ]
  }
));
rm.displayName = "DrawerCloseButton";
const nm = c.forwardRef(
  ({ className: e, icon: t, label: o, active: r = !1, badge: s, onClick: i, ...a }, l) => /* @__PURE__ */ y(
    "button",
    {
      ref: l,
      type: "button",
      onClick: i,
      className: m(
        "flex items-center gap-3 w-full px-4 py-3 rounded-xl",
        "text-left transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-primary/30",
        r ? "bg-secondary text-primary font-semibold" : "text-foreground hover:bg-muted",
        e
      ),
      ...a,
      children: [
        t && /* @__PURE__ */ n("span", { className: m("size-6 flex items-center justify-center", r && "text-primary"), children: t }),
        /* @__PURE__ */ n("span", { className: "flex-1 text-[15px]", children: o }),
        s && /* @__PURE__ */ n("span", { className: "text-[11px] font-bold text-primary", children: s })
      ]
    }
  )
);
nm.displayName = "DrawerMenuItem";
const wa = c.createContext(void 0);
function sm() {
  const e = c.useContext(wa);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}
function gv({ children: e }) {
  const [t, o] = c.useState([]), r = c.useCallback(
    (i, a) => {
      const l = Math.random().toString(36).substring(2, 9), d = { id: l, message: i, ...a };
      o((f) => [...f, d]);
      const u = a?.duration ?? 2500;
      u > 0 && setTimeout(() => {
        o((f) => f.filter((p) => p.id !== l));
      }, u);
    },
    []
  ), s = c.useCallback((i) => {
    o((a) => a.filter((l) => l.id !== i));
  }, []);
  return /* @__PURE__ */ y(wa.Provider, { value: { toasts: t, toast: r, dismiss: s }, children: [
    e,
    /* @__PURE__ */ n(im, {})
  ] });
}
function im() {
  const { toasts: e, dismiss: t } = sm();
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "toast-container",
      className: m(
        "fixed inset-x-0 bottom-0 z-[100]",
        "flex flex-col items-center gap-2",
        "p-4 pb-[max(16px,calc(env(safe-area-inset-bottom)+60px))]",
        "pointer-events-none"
      ),
      children: e.map((o) => /* @__PURE__ */ y(
        "div",
        {
          role: "status",
          className: m(
            // 토스 실제 스낵바 스타일
            "pointer-events-auto",
            "inline-flex items-center gap-3",
            "px-4 py-3 rounded-[14px]",
            "bg-[#333D4B] text-white",
            "shadow-lg",
            "text-[14px] font-medium",
            // 애니메이션
            "animate-in slide-in-from-bottom-4 fade-in-0 duration-200"
          ),
          children: [
            /* @__PURE__ */ n("span", { className: "flex-1", children: o.message }),
            o.action && /* @__PURE__ */ n(
              "button",
              {
                onClick: () => {
                  o.action?.onClick(), t(o.id);
                },
                className: "shrink-0 font-semibold text-[#4593FC] hover:text-[#85B8FF] transition-colors",
                children: o.action.label
              }
            )
          ]
        },
        o.id
      ))
    }
  );
}
const am = c.forwardRef(
  ({ className: e, message: t, action: o, onClose: r, ...s }, i) => /* @__PURE__ */ y(
    "div",
    {
      ref: i,
      role: "status",
      "data-slot": "snackbar",
      className: m(
        // 토스 스타일 Snackbar
        "inline-flex items-center gap-3",
        "px-4 py-3 rounded-[14px]",
        "bg-[#333D4B] text-white",
        "shadow-lg",
        "text-[14px] font-medium",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ n("span", { className: "flex-1", children: t }),
        o && /* @__PURE__ */ n(
          "button",
          {
            onClick: o.onClick,
            className: "shrink-0 font-semibold text-[#4593FC]",
            children: o.label
          }
        ),
        r && /* @__PURE__ */ n(
          "button",
          {
            onClick: r,
            className: "shrink-0 p-0.5 -mr-1 text-white/60 hover:text-white transition-colors",
            children: /* @__PURE__ */ n(ct, { className: "size-4" })
          }
        )
      ]
    }
  )
);
am.displayName = "Snackbar";
const lm = c.forwardRef(({ className: e, value: t, indicatorColor: o, ...r }, s) => /* @__PURE__ */ n(
  zs,
  {
    ref: s,
    "data-slot": "progress",
    className: m(
      // 토스 스타일 Progress
      "relative h-2 w-full overflow-hidden rounded-full bg-muted",
      e
    ),
    ...r,
    children: /* @__PURE__ */ n(
      au,
      {
        className: m(
          "h-full rounded-full transition-all duration-300 ease-out",
          o || "bg-primary"
        ),
        style: { width: `${t || 0}%` }
      }
    )
  }
));
lm.displayName = zs.displayName;
const ka = c.forwardRef(
  ({ className: e, size: t = "default", color: o, ...r }, s) => /* @__PURE__ */ y(
    "div",
    {
      ref: s,
      role: "status",
      "data-slot": "spinner",
      className: m("animate-spin", {
        sm: "size-4",
        default: "size-6",
        lg: "size-8"
      }[t], e),
      ...r,
      children: [
        /* @__PURE__ */ y(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "size-full",
            children: [
              /* @__PURE__ */ n(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: o || "currentColor",
                  strokeWidth: "3"
                }
              ),
              /* @__PURE__ */ n(
                "path",
                {
                  className: "opacity-75",
                  fill: o || "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n("span", { className: "sr-only", children: "Loading..." })
      ]
    }
  )
);
ka.displayName = "Spinner";
const cm = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ y(
  "div",
  {
    ref: o,
    role: "status",
    "data-slot": "loading-dots",
    className: m("flex items-center gap-1", e),
    ...t,
    children: [
      [0, 1, 2].map((r) => /* @__PURE__ */ n(
        "div",
        {
          className: m(
            "size-2 rounded-full bg-primary",
            "animate-bounce"
          ),
          style: {
            animationDelay: `${r * 0.15}s`,
            animationDuration: "0.6s"
          }
        },
        r
      )),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "Loading..." })
    ]
  }
));
cm.displayName = "LoadingDots";
const dm = c.forwardRef(
  ({ className: e, loading: t = !0, blur: o = !1, children: r, ...s }, i) => t ? /* @__PURE__ */ y("div", { ref: i, className: m("relative", e), ...s, children: [
    r,
    /* @__PURE__ */ n(
      "div",
      {
        "data-slot": "loading-overlay",
        className: m(
          "absolute inset-0 flex items-center justify-center",
          "bg-background/60 rounded-inherit",
          o && "backdrop-blur-sm"
        ),
        children: /* @__PURE__ */ n(ka, { size: "lg" })
      }
    )
  ] }) : /* @__PURE__ */ n(te, { children: r })
);
dm.displayName = "LoadingOverlay";
const vv = nr, um = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  so,
  {
    ref: o,
    "data-slot": "tabs-list",
    className: m(
      // 토스 스타일 Tabs List - 컴팩트
      "inline-flex items-center gap-0.5 p-0.5 rounded-lg bg-muted",
      e
    ),
    ...t
  }
));
um.displayName = so.displayName;
const fm = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  io,
  {
    ref: o,
    "data-slot": "tabs-trigger",
    className: m(
      // 토스 스타일 Tabs Trigger - 컴팩트
      "inline-flex items-center justify-center whitespace-nowrap",
      "px-3 py-1.5 rounded-md",
      "text-[13px] font-semibold text-muted-foreground",
      "transition-all duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      "disabled:pointer-events-none disabled:opacity-40",
      // 선택됨
      "data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
fm.displayName = io.displayName;
const pm = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  qi,
  {
    ref: o,
    "data-slot": "tabs-content",
    className: m(
      "mt-4",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      e
    ),
    ...t
  }
));
pm.displayName = qi.displayName;
const xv = nr, mm = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  so,
  {
    ref: o,
    "data-slot": "underline-tabs-list",
    className: m(
      // 토스 스타일 밑줄 Tabs
      "flex border-b border-border",
      e
    ),
    ...t
  }
));
mm.displayName = "UnderlineTabsList";
const hm = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  io,
  {
    ref: o,
    "data-slot": "underline-tabs-trigger",
    className: m(
      // 토스 스타일 밑줄 Tabs Trigger - 컴팩트
      "relative flex-1 py-2",
      "text-[13px] font-semibold text-muted-foreground",
      "transition-colors",
      "focus-visible:outline-none",
      "disabled:pointer-events-none disabled:opacity-40",
      // 선택됨
      "data-[state=active]:text-foreground",
      // 밑줄
      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
      "after:bg-transparent after:transition-colors",
      "data-[state=active]:after:bg-primary",
      e
    ),
    ...t
  }
));
hm.displayName = "UnderlineTabsTrigger";
const bv = nr, gm = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  so,
  {
    ref: o,
    "data-slot": "bold-tabs-list",
    className: m(
      // 토스증권 스타일 - 배경 없이 탭만 나열
      "flex items-center gap-5",
      e
    ),
    ...t
  }
));
gm.displayName = "BoldTabsList";
const vm = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  io,
  {
    ref: o,
    "data-slot": "bold-tabs-trigger",
    className: m(
      // 토스증권 스타일 - 선택 시 텍스트가 굵어지고 색상 진해짐
      "relative py-2",
      "text-[15px] text-muted-foreground font-normal",
      "transition-all duration-150",
      "focus-visible:outline-none",
      "disabled:pointer-events-none disabled:opacity-40",
      // 선택됨 - 텍스트 굵어지고 진해짐
      "data-[state=active]:text-foreground data-[state=active]:font-bold",
      e
    ),
    ...t
  }
));
vm.displayName = "BoldTabsTrigger";
function xm(e, t, o) {
  const s = o * 2 + 3 + 2;
  if (t <= s)
    return Array.from({ length: t }, (f, p) => p + 1);
  const i = Math.max(e - o, 1), a = Math.min(e + o, t), l = i > 2, d = a < t - 1;
  if (!l && d) {
    const f = 3 + 2 * o;
    return [...Array.from({ length: f }, (g, v) => v + 1), "...", t];
  }
  if (l && !d) {
    const f = 3 + 2 * o;
    return [1, "...", ...Array.from(
      { length: f },
      (g, v) => t - f + v + 1
    )];
  }
  return [1, "...", ...Array.from(
    { length: a - i + 1 },
    (f, p) => i + p
  ), "...", t];
}
const bm = c.forwardRef(
  ({ currentPage: e, totalPages: t, onPageChange: o, siblingCount: r = 1, className: s }, i) => {
    const a = xm(e, t, r), l = () => {
      e > 1 && o(e - 1);
    }, d = () => {
      e < t && o(e + 1);
    };
    return t <= 1 ? null : /* @__PURE__ */ y(
      "nav",
      {
        ref: i,
        "data-slot": "pagination",
        role: "navigation",
        "aria-label": "페이지네이션",
        className: m("flex items-center justify-center gap-1", s),
        children: [
          /* @__PURE__ */ n(
            rt,
            {
              variant: "ghost",
              size: "icon-sm",
              onClick: l,
              disabled: e === 1,
              "aria-label": "이전 페이지",
              children: /* @__PURE__ */ n(fa, { className: "size-4" })
            }
          ),
          a.map((u, f) => {
            if (u === "...")
              return /* @__PURE__ */ n(
                "span",
                {
                  className: "flex items-center justify-center size-8 text-muted-foreground text-[13px]",
                  children: "···"
                },
                `dots-${f}`
              );
            const p = u === e;
            return /* @__PURE__ */ n(
              "button",
              {
                onClick: () => o(u),
                "aria-current": p ? "page" : void 0,
                className: m(
                  // 기본 스타일
                  "flex items-center justify-center",
                  "size-8 rounded-lg",
                  "text-[13px] font-medium",
                  "transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  // 상태별 스타일
                  p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                ),
                children: u
              },
              u
            );
          }),
          /* @__PURE__ */ n(
            rt,
            {
              variant: "ghost",
              size: "icon-sm",
              onClick: d,
              disabled: e === t,
              "aria-label": "다음 페이지",
              children: /* @__PURE__ */ n(ao, { className: "size-4" })
            }
          )
        ]
      }
    );
  }
);
bm.displayName = "Pagination";
const ym = c.forwardRef(
  ({ currentPage: e, totalPages: t, onPageChange: o, className: r }, s) => t <= 1 ? null : /* @__PURE__ */ y(
    "nav",
    {
      ref: s,
      "data-slot": "simple-pagination",
      role: "navigation",
      "aria-label": "페이지네이션",
      className: m("flex items-center justify-center gap-4", r),
      children: [
        /* @__PURE__ */ y(
          rt,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => o(e - 1),
            disabled: e === 1,
            children: [
              /* @__PURE__ */ n(fa, { className: "size-4 mr-1" }),
              "이전"
            ]
          }
        ),
        /* @__PURE__ */ y("span", { className: "text-[13px] text-muted-foreground tabular-nums", children: [
          e,
          " / ",
          t
        ] }),
        /* @__PURE__ */ y(
          rt,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => o(e + 1),
            disabled: e === t,
            children: [
              "다음",
              /* @__PURE__ */ n(ao, { className: "size-4 ml-1" })
            ]
          }
        )
      ]
    }
  )
);
ym.displayName = "SimplePagination";
function wm({
  value: e,
  onValueChange: t,
  options: o,
  size: r = "default",
  fullWidth: s = !1,
  disabled: i = !1,
  className: a
}) {
  const d = {
    sm: {
      container: "h-8 p-0.5 gap-0.5 rounded-lg",
      button: "px-2 text-[12px] rounded-md",
      iconOnly: "w-7"
    },
    default: {
      container: "h-10 p-1 gap-1 rounded-lg",
      button: "px-3 text-[13px] rounded-md",
      iconOnly: "w-9"
    },
    lg: {
      container: "h-12 p-1 gap-1 rounded-xl",
      button: "px-4 text-[14px] rounded-lg",
      iconOnly: "w-11"
    }
  }[r];
  return /* @__PURE__ */ n(
    "div",
    {
      role: "tablist",
      className: m(
        // 컨테이너 - 연한 회색 배경
        "inline-flex items-center bg-muted",
        d.container,
        s && "w-full",
        i && "opacity-40 pointer-events-none",
        a
      ),
      children: o.map((u) => {
        const f = e === u.value, p = u.icon && !u.label;
        return /* @__PURE__ */ y(
          "button",
          {
            role: "tab",
            type: "button",
            "aria-selected": f,
            "aria-disabled": u.disabled || i,
            onClick: () => {
              !u.disabled && !i && t(u.value);
            },
            className: m(
              // 기본 버튼 스타일
              "flex items-center justify-center gap-1.5 h-full font-medium",
              "transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
              d.button,
              p ? d.iconOnly : "",
              s && "flex-1",
              // 선택 상태
              f ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
              // 비활성화
              (u.disabled || i) && "cursor-not-allowed opacity-40"
            ),
            children: [
              u.icon && /* @__PURE__ */ n("span", { className: m(
                "[&>svg]:size-4",
                r === "sm" && "[&>svg]:size-3.5",
                r === "lg" && "[&>svg]:size-5"
              ), children: u.icon }),
              u.label
            ]
          },
          u.value
        );
      })
    }
  );
}
function yv({
  value: e,
  onValueChange: t,
  options: o,
  size: r = "default",
  disabled: s = !1,
  className: i
}) {
  return /* @__PURE__ */ n(
    wm,
    {
      value: e,
      onValueChange: t,
      options: o.map(([a, l]) => ({ value: a, icon: l })),
      size: r,
      disabled: s,
      className: i
    }
  );
}
const km = c.forwardRef(
  ({
    className: e,
    leading: t,
    title: o,
    subtitle: r,
    trailing: s,
    showArrow: i = !0,
    clickable: a = !0,
    disabled: l = !1,
    badge: d,
    badgeVariant: u = "primary",
    onClick: f,
    ...p
  }, g) => {
    const v = {
      primary: "text-primary",
      success: "text-[#30C85E]",
      warning: "text-[#FF9500]",
      destructive: "text-destructive"
    };
    return /* @__PURE__ */ y(
      "div",
      {
        ref: g,
        role: a ? "button" : void 0,
        tabIndex: a && !l ? 0 : void 0,
        "data-slot": "list-item",
        "data-disabled": l || void 0,
        onClick: l ? void 0 : f,
        onKeyDown: a && !l ? (b) => {
          (b.key === "Enter" || b.key === " ") && (b.preventDefault(), f?.(b));
        } : void 0,
        className: m(
          // 토스 스타일 List Item
          "flex items-center gap-3 p-3 bg-card rounded-xl",
          "transition-all duration-150",
          a && !l && [
            "cursor-pointer",
            "hover:bg-muted/50",
            "active:scale-[0.99]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          ],
          l && "opacity-40 cursor-not-allowed",
          e
        ),
        ...p,
        children: [
          t && /* @__PURE__ */ n("div", { className: "shrink-0", children: t }),
          /* @__PURE__ */ y("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ y("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ n("p", { className: "text-[15px] font-semibold text-foreground truncate", children: o }),
              d && /* @__PURE__ */ n(
                "span",
                {
                  className: m(
                    "text-[11px] font-bold shrink-0",
                    v[u]
                  ),
                  children: d
                }
              )
            ] }),
            r && /* @__PURE__ */ n("p", { className: "text-[13px] text-muted-foreground truncate mt-0.5", children: r })
          ] }),
          s && /* @__PURE__ */ n("div", { className: "shrink-0 text-right", children: s }),
          i && a && /* @__PURE__ */ n(ao, { className: "size-5 text-muted-foreground shrink-0" })
        ]
      }
    );
  }
);
km.displayName = "ListItem";
const Cm = c.forwardRef(
  ({
    className: e,
    icon: t,
    title: o,
    subtitle: r,
    selected: s = !1,
    clickable: i = !0,
    disabled: a = !1,
    onClick: l,
    ...d
  }, u) => /* @__PURE__ */ y(
    "div",
    {
      ref: u,
      role: i ? "button" : void 0,
      tabIndex: i && !a ? 0 : void 0,
      "data-slot": "list-item-compact",
      "data-selected": s || void 0,
      "data-disabled": a || void 0,
      onClick: a ? void 0 : l,
      onKeyDown: i && !a ? (f) => {
        (f.key === "Enter" || f.key === " ") && (f.preventDefault(), l?.(f));
      } : void 0,
      className: m(
        // 토스 계좌 선택 스타일 - 컴팩트
        "flex items-center gap-3 px-3 py-2.5 rounded-lg",
        "transition-all duration-150",
        i && !a && [
          "cursor-pointer",
          "hover:bg-muted/30",
          "active:scale-[0.99]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        ],
        // 선택 시 연한 파란 배경
        s && "bg-secondary",
        a && "opacity-40 cursor-not-allowed",
        e
      ),
      ...d,
      children: [
        t && /* @__PURE__ */ n("div", { className: "shrink-0 size-8 rounded-full bg-muted flex items-center justify-center overflow-hidden", children: t }),
        /* @__PURE__ */ y("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ n("p", { className: "text-[14px] font-medium text-foreground truncate", children: o }),
          r && /* @__PURE__ */ n("p", { className: "text-[12px] text-muted-foreground truncate", children: r })
        ] }),
        s && /* @__PURE__ */ n(lr, { className: "size-5 text-primary shrink-0" })
      ]
    }
  )
);
Cm.displayName = "ListItemCompact";
const Nm = c.forwardRef(
  ({
    className: e,
    icon: t,
    label: o,
    value: r,
    trailing: s,
    showArrow: i = !0,
    clickable: a = !0,
    disabled: l = !1,
    destructive: d = !1,
    onClick: u,
    ...f
  }, p) => /* @__PURE__ */ y(
    "div",
    {
      ref: p,
      role: a ? "button" : void 0,
      tabIndex: a && !l ? 0 : void 0,
      "data-slot": "simple-list-item",
      "data-disabled": l || void 0,
      onClick: l ? void 0 : u,
      onKeyDown: a && !l ? (g) => {
        (g.key === "Enter" || g.key === " ") && (g.preventDefault(), u?.(g));
      } : void 0,
      className: m(
        // 1줄 메뉴/설정 아이템
        "flex items-center gap-3 px-4 py-3 rounded-lg",
        "transition-all duration-150",
        a && !l && [
          "cursor-pointer",
          "hover:bg-muted/30",
          "active:scale-[0.99]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        ],
        l && "opacity-40 cursor-not-allowed",
        e
      ),
      ...f,
      children: [
        t && /* @__PURE__ */ n("div", { className: m(
          "shrink-0 size-5",
          d ? "text-destructive" : "text-muted-foreground"
        ), children: t }),
        /* @__PURE__ */ n("span", { className: m(
          "flex-1 text-[15px]",
          d ? "text-destructive" : "text-foreground"
        ), children: o }),
        r && /* @__PURE__ */ n("span", { className: "text-[14px] text-muted-foreground shrink-0", children: r }),
        s && /* @__PURE__ */ n("div", { className: "shrink-0", children: s }),
        i && a && !s && /* @__PURE__ */ n(ao, { className: "size-5 text-muted-foreground/50 shrink-0" })
      ]
    }
  )
);
Nm.displayName = "SimpleListItem";
const Sm = c.forwardRef(
  ({ className: e, gap: t = "default", divided: o = !1, children: r, ...s }, i) => /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      "data-slot": "list",
      className: m(
        "flex flex-col",
        {
          none: "gap-0",
          xs: "gap-0.5",
          sm: "gap-1",
          default: "gap-2"
        }[t],
        o && "divide-y divide-border gap-0 [&>*]:rounded-none [&>*:first-child]:rounded-t-2xl [&>*:last-child]:rounded-b-2xl",
        e
      ),
      ...s,
      children: r
    }
  )
);
Sm.displayName = "List";
const Lm = c.forwardRef(
  ({ className: e, orientation: t = "horizontal", variant: o = "default", label: r, ...s }, i) => {
    const a = t === "horizontal";
    return r && a ? /* @__PURE__ */ y(
      "div",
      {
        ref: i,
        role: "separator",
        "data-slot": "divider",
        className: m("flex items-center gap-4 my-4", e),
        ...s,
        children: [
          /* @__PURE__ */ n("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ n("span", { className: "text-[13px] text-muted-foreground shrink-0", children: r }),
          /* @__PURE__ */ n("div", { className: "flex-1 h-px bg-border" })
        ]
      }
    ) : /* @__PURE__ */ n(
      "div",
      {
        ref: i,
        role: "separator",
        "aria-orientation": t,
        "data-slot": "divider",
        className: m(
          // 토스 스타일 Divider
          "bg-border shrink-0",
          a ? m(
            "w-full",
            o === "default" ? "h-px" : "h-2"
          ) : m(
            "h-full",
            o === "default" ? "w-px" : "w-2"
          ),
          e
        ),
        ...s
      }
    );
  }
);
Lm.displayName = "Divider";
const Rm = c.forwardRef(
  ({ className: e, size: t = "default", ...o }, r) => /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      "data-slot": "spacer",
      "aria-hidden": "true",
      className: m("w-full bg-background", {
        sm: "h-2",
        default: "h-4",
        lg: "h-8",
        xl: "h-12"
      }[t], e),
      ...o
    }
  )
);
Rm.displayName = "Spacer";
function xe({
  className: e,
  animation: t = "shimmer",
  ...o
}) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "skeleton",
      className: m(
        // 기본 스타일
        "rounded-lg bg-muted",
        // 애니메이션
        t === "shimmer" && [
          "relative overflow-hidden",
          "after:absolute after:inset-0",
          "after:translate-x-[-100%]",
          "after:animate-[shimmer_1.5s_infinite]",
          "after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent"
        ],
        t === "pulse" && "animate-pulse",
        e
      ),
      ...o
    }
  );
}
function cr({
  className: e,
  size: t = "default",
  animation: o,
  ...r
}) {
  return /* @__PURE__ */ n(
    xe,
    {
      animation: o,
      className: m("rounded-full", {
        xs: "size-6",
        sm: "size-8",
        default: "size-10",
        lg: "size-12",
        xl: "size-16"
      }[t], e),
      ...r
    }
  );
}
function Mm({
  className: e,
  lines: t = 1,
  animation: o,
  lastLineWidth: r = "75%",
  ...s
}) {
  return /* @__PURE__ */ n("div", { className: m("space-y-2", e), ...s, children: Array.from({ length: t }).map((i, a) => /* @__PURE__ */ n(
    xe,
    {
      animation: o,
      className: "h-4",
      style: a === t - 1 && t > 1 ? { width: r } : void 0
    },
    a
  )) });
}
function wv({
  className: e,
  animation: t,
  ...o
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      className: m("p-4 rounded-2xl bg-card space-y-4", e),
      ...o,
      children: [
        /* @__PURE__ */ y("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ n(cr, { size: "lg", animation: t }),
          /* @__PURE__ */ y("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ n(xe, { animation: t, className: "h-4 w-24" }),
            /* @__PURE__ */ n(xe, { animation: t, className: "h-3 w-16" })
          ] })
        ] }),
        /* @__PURE__ */ n(Mm, { lines: 2, animation: t })
      ]
    }
  );
}
function kv({
  className: e,
  animation: t,
  ...o
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      className: m(
        "flex items-center gap-4 p-4 rounded-2xl bg-card",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ n(cr, { size: "lg", animation: t }),
        /* @__PURE__ */ y("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ n(xe, { animation: t, className: "h-4 w-32" }),
          /* @__PURE__ */ n(xe, { animation: t, className: "h-3 w-20" })
        ] }),
        /* @__PURE__ */ n(xe, { animation: t, className: "h-4 w-16" })
      ]
    }
  );
}
function Cv({
  className: e,
  animation: t,
  size: o = "default",
  ...r
}) {
  return /* @__PURE__ */ n(
    xe,
    {
      animation: t,
      className: m("rounded-lg", {
        sm: "h-8 w-20",
        default: "h-10 w-24",
        lg: "h-12 w-32"
      }[o], e),
      ...r
    }
  );
}
function Nv({
  className: e,
  animation: t,
  aspectRatio: o = "video",
  ...r
}) {
  return /* @__PURE__ */ n(
    xe,
    {
      animation: t,
      className: m("w-full rounded-xl", {
        square: "aspect-square",
        video: "aspect-video",
        wide: "aspect-[21/9]"
      }[o], e),
      ...r
    }
  );
}
function Sv({
  className: e,
  count: t = 3,
  animation: o,
  ...r
}) {
  return /* @__PURE__ */ n("div", { className: m("flex -space-x-2", e), ...r, children: Array.from({ length: t }).map((s, i) => /* @__PURE__ */ n(
    cr,
    {
      size: "sm",
      animation: o,
      className: "border-2 border-background"
    },
    i
  )) });
}
function Lv({
  className: e,
  animation: t,
  ...o
}) {
  return /* @__PURE__ */ n(
    xe,
    {
      animation: t,
      className: m("h-10 w-full rounded-lg", e),
      ...o
    }
  );
}
const Em = pt(
  // 토스 스타일 FAB 기본
  m(
    "inline-flex items-center justify-center",
    "rounded-full shadow-lg",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
    "disabled:pointer-events-none disabled:opacity-40",
    "active:scale-95"
  ),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#1B64DA]",
        secondary: "bg-card text-foreground hover:bg-muted border border-border"
      },
      size: {
        default: "size-14 text-[24px]",
        sm: "size-12 text-[20px]",
        lg: "size-16 text-[28px]"
      },
      extended: {
        true: "px-5 gap-2 text-[15px] font-semibold",
        false: ""
      }
    },
    compoundVariants: [
      {
        extended: !0,
        size: "default",
        className: "h-14 w-auto rounded-full"
      },
      {
        extended: !0,
        size: "sm",
        className: "h-12 w-auto rounded-full"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      extended: !1
    }
  }
), Am = c.forwardRef(
  ({ className: e, variant: t, size: o, icon: r, label: s, children: i, ...a }, l) => /* @__PURE__ */ y(
    "button",
    {
      ref: l,
      type: "button",
      "data-slot": "fab",
      className: m(Em({ variant: t, size: o, extended: !!s }), e),
      ...a,
      children: [
        r,
        s && /* @__PURE__ */ n("span", { children: s }),
        !r && !s && i
      ]
    }
  )
);
Am.displayName = "FAB";
const Im = c.forwardRef(
  ({ className: e, position: t = "bottom-right", children: o, ...r }, s) => /* @__PURE__ */ n(
    "div",
    {
      ref: s,
      "data-slot": "fab-container",
      className: m(
        "fixed bottom-0 z-40",
        "pb-[max(20px,calc(env(safe-area-inset-bottom)+70px))]",
        {
          "bottom-right": "right-4",
          "bottom-left": "left-4",
          "bottom-center": "left-1/2 -translate-x-1/2"
        }[t],
        e
      ),
      ...r,
      children: o
    }
  )
);
Im.displayName = "FABContainer";
const Pm = c.forwardRef(
  ({ className: e, icon: t, title: o, description: r, action: s, ...i }, a) => /* @__PURE__ */ y(
    "div",
    {
      ref: a,
      "data-slot": "empty-state",
      className: m(
        "flex flex-col items-center justify-center py-16 px-8 text-center",
        e
      ),
      ...i,
      children: [
        t && /* @__PURE__ */ n("div", { className: "mb-4 text-5xl text-muted-foreground/50", children: t }),
        /* @__PURE__ */ n("h3", { className: "text-[17px] font-semibold text-foreground", children: o }),
        r && /* @__PURE__ */ n("p", { className: "mt-2 text-[15px] text-muted-foreground max-w-xs", children: r }),
        s && /* @__PURE__ */ n(rt, { onClick: s.onClick, className: "mt-6", children: s.label })
      ]
    }
  )
);
Pm.displayName = "EmptyState";
const Tm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M19 12H5M12 19L5 12L12 5" }) }), Dm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M5 12H19M12 5L19 12L12 19" }) }), Om = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 19V5M5 12L12 5L19 12" }) }), zm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 5V19M19 12L12 19L5 12" }) }), _m = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M15 18L9 12L15 6" }) }), Bm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M9 18L15 12L9 6" }) }), Wm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M18 15L12 9L6 15" }) }), Vm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M6 9L12 15L18 9" }) }), Fm = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), Hm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M3 12H21M3 6H21M3 18H21" }) }), $m = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ n("path", { d: "M21 21L16.5 16.5" })
] }), jm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
] }), Um = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "8", height: "8", rx: "2", fill: "currentColor" }),
  /* @__PURE__ */ n("rect", { x: "13", y: "3", width: "8", height: "8", rx: "2", fill: "currentColor" }),
  /* @__PURE__ */ n("rect", { x: "3", y: "13", width: "8", height: "8", rx: "2", fill: "currentColor" }),
  /* @__PURE__ */ n("rect", { x: "13", y: "13", width: "8", height: "8", rx: "2", fill: "currentColor" })
] }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("rect", { x: "13", y: "3", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("rect", { x: "3", y: "13", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("rect", { x: "13", y: "13", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.8" })
] }) }), Gm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 5V19M5 12H19" }) }), Km = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M5 12H19" }) }), Ym = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6L18 18" }) }), qm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M20 6L9 17L4 12" }) }), Xm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
  /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
] }), Zm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M3 6H5H21" }),
  /* @__PURE__ */ n("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }),
  /* @__PURE__ */ n("path", { d: "M10 11V17M14 11V17" })
] }), Qm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
] }), Jm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "18", cy: "5", r: "3" }),
  /* @__PURE__ */ n("circle", { cx: "6", cy: "12", r: "3" }),
  /* @__PURE__ */ n("circle", { cx: "18", cy: "19", r: "3" }),
  /* @__PURE__ */ n("path", { d: "M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" })
] }), eh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" }),
  /* @__PURE__ */ n("path", { d: "M7 10L12 15L17 10" }),
  /* @__PURE__ */ n("path", { d: "M12 15V3" })
] }), th = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" }),
  /* @__PURE__ */ n("path", { d: "M17 8L12 3L7 8" }),
  /* @__PURE__ */ n("path", { d: "M12 3V15" })
] }), oh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M23 4V10H17" }),
  /* @__PURE__ */ n("path", { d: "M1 20V14H7" }),
  /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
] }), rh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1.5", fill: "currentColor" })
] }), nh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "5", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "19", r: "1.5", fill: "currentColor" })
] }), sh = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 3H2L10 12.46V19L14 21V12.46L22 3Z" }) }), ih = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M3 6H21M6 12H18M9 18H15" }) }), ah = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M12 16V12M12 8H12.01" })
] }), lh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M12 8V12M12 16H12.01" })
] }), ch = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
  /* @__PURE__ */ n("path", { d: "M12 9V13M12 17H12.01" })
] }), dh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M9 12L11 14L15 10" })
] }), uh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M15 9L9 15M9 9L15 15" })
] }), fh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
  /* @__PURE__ */ n("path", { d: "M12 17H12.01" })
] }), ph = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" }),
  /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" })
] }), mh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" })
] }), hh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ n("circle", { cx: "8.5", cy: "7", r: "4" }),
  /* @__PURE__ */ n("path", { d: "M20 8V14M17 11H23" })
] }), gh = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" }) }), vh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), xh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" }),
  /* @__PURE__ */ n("path", { d: "M22 6L12 13L2 6" })
] }), bh = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }) }), yh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0", fill: "currentColor" }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("path", { d: "M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M13.73 21a2 2 0 0 1-3.46 0", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
] }) }), wh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "2", y: "6", width: "20", height: "14", rx: "2", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "17", cy: "13", r: "2", fill: "white" })
] }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "2", y: "6", width: "20", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("circle", { cx: "17", cy: "13", r: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("path", { d: "M2 10H22", stroke: "currentColor", strokeWidth: "1.8" })
] }) }), kh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M2 10H22" }),
  /* @__PURE__ */ n("path", { d: "M6 15H10" })
] }), Ch = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("path", { d: "M5 12H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V12Z", fill: "currentColor" }),
  /* @__PURE__ */ n("path", { d: "M12 8C12 8 12 5 9.5 5C7 5 7 8 9.5 8H12Z", fill: "currentColor" }),
  /* @__PURE__ */ n("path", { d: "M12 8C12 8 12 5 14.5 5C17 5 17 8 14.5 8H12Z", fill: "currentColor" }),
  /* @__PURE__ */ n("rect", { x: "11", y: "8", width: "2", height: "13", fill: "currentColor", fillOpacity: "0.3" })
] }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("path", { d: "M5 12V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V12", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("path", { d: "M12 8V21", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("path", { d: "M12 8C12 8 12 4 9 4C6 4 6 8 9 8", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }),
  /* @__PURE__ */ n("path", { d: "M12 8C12 8 12 4 15 4C18 4 18 8 15 8", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
] }) }), Nh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "9", fill: "currentColor", fillOpacity: "0.2" }),
  /* @__PURE__ */ n("path", { d: "M12 3V12L18.36 5.64", fill: "currentColor" }),
  /* @__PURE__ */ n("path", { d: "M12 3C16.97 3 21 7.03 21 12H12V3Z", fill: "currentColor" })
] }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("path", { d: "M12 3V12", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }),
  /* @__PURE__ */ n("path", { d: "M12 12L18.36 5.64", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
] }) }), Sh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M23 6L13.5 15.5L8.5 10.5L1 18" }),
  /* @__PURE__ */ n("path", { d: "M17 6H23V12" })
] }), Lh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M23 18L13.5 8.5L8.5 13.5L1 6" }),
  /* @__PURE__ */ n("path", { d: "M17 18H23V12" })
] }), Rh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M19 5L5 19" }),
  /* @__PURE__ */ n("circle", { cx: "6.5", cy: "6.5", r: "2.5" }),
  /* @__PURE__ */ n("circle", { cx: "17.5", cy: "17.5", r: "2.5" })
] }), Mh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M4 4V20L6.5 18L9 20L12 18L15 20L17.5 18L20 20V4L17.5 6L15 4L12 6L9 4L6.5 6L4 4Z" }),
  /* @__PURE__ */ n("path", { d: "M8 10H16M8 14H13" })
] }), Eh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
  /* @__PURE__ */ n("path", { d: "M21 15L16 10L5 21" })
] }), Ah = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "13", r: "4" })
] }), Ih = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("polygon", { points: "5,3 19,12 5,21" }) }), Ph = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "6", y: "4", width: "4", height: "16" }),
  /* @__PURE__ */ n("rect", { x: "14", y: "4", width: "4", height: "16" })
] }), Th = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M16 2V6M8 2V6M3 10H21" })
] }), Dh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M12 6V12L16 14" })
] }), Oh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "10", r: "3" })
] }), zh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
] }), _h = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" })
] }), Bh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
] }), Wh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
  /* @__PURE__ */ n("path", { d: "M1 1L23 23" })
] }), Vh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), Fh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), Hh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M19 21L12 16L5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M19 21L12 16L5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), $h = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ n("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), jh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M18 13V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
  /* @__PURE__ */ n("path", { d: "M15 3H21V9" }),
  /* @__PURE__ */ n("path", { d: "M10 14L21 3" })
] }), Uh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "7", height: "7" }),
  /* @__PURE__ */ n("rect", { x: "14", y: "3", width: "7", height: "7" }),
  /* @__PURE__ */ n("rect", { x: "3", y: "14", width: "7", height: "7" }),
  /* @__PURE__ */ n("rect", { x: "14", y: "14", width: "3", height: "3" }),
  /* @__PURE__ */ n("rect", { x: "18", y: "14", width: "3", height: "3" }),
  /* @__PURE__ */ n("rect", { x: "14", y: "18", width: "3", height: "3" }),
  /* @__PURE__ */ n("rect", { x: "18", y: "18", width: "3", height: "3" })
] }), Gh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M9 22V18H15V22" }),
  /* @__PURE__ */ n("path", { d: "M8 6H10M8 10H10M8 14H10M14 6H16M14 10H16M14 14H16" })
] }), Kh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M3 21H21" }),
  /* @__PURE__ */ n("path", { d: "M5 21V7L13 3V21" }),
  /* @__PURE__ */ n("path", { d: "M19 21V11L13 7" }),
  /* @__PURE__ */ n("path", { d: "M9 9V9.01M9 13V13.01M9 17V17.01" })
] }), Yh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M3 9H21M3 15H21M9 3V21M15 3V21" })
] }), qh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M2 22L22 22" }),
  /* @__PURE__ */ n("path", { d: "M3 22V18L8 14L13 17L21 10V22" }),
  /* @__PURE__ */ n("circle", { cx: "17", cy: "5", r: "3" })
] }), Xh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" }),
  /* @__PURE__ */ n("path", { d: "M8 2V18M16 6V22" })
] }), Zh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }),
  /* @__PURE__ */ n("path", { d: "M15 5L19 9" }),
  /* @__PURE__ */ n("path", { d: "M12.5 7.5L14 9M9.5 10.5L11 12M6.5 13.5L8 15" })
] }), Qh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M3 9H21" }),
  /* @__PURE__ */ n("path", { d: "M9 21V9" })
] }), Jh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M8 6H16" }),
  /* @__PURE__ */ n("path", { d: "M8 10H8.01M12 10H12.01M16 10H16.01" }),
  /* @__PURE__ */ n("path", { d: "M8 14H8.01M12 14H12.01M16 14H16.01" }),
  /* @__PURE__ */ n("path", { d: "M8 18H8.01M12 18H12.01M16 18H16.01" })
] }), eg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M16 3H21V8" }),
  /* @__PURE__ */ n("path", { d: "M4 20L21 3" }),
  /* @__PURE__ */ n("path", { d: "M21 16V21H16" }),
  /* @__PURE__ */ n("path", { d: "M15 15L21 21" }),
  /* @__PURE__ */ n("path", { d: "M4 4L9 9" })
] }), tg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 3V21" }),
  /* @__PURE__ */ n("path", { d: "M5 8L2 12L5 16" }),
  /* @__PURE__ */ n("path", { d: "M19 8L22 12L19 16" }),
  /* @__PURE__ */ n("path", { d: "M2 12H22" })
] }), og = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  /* @__PURE__ */ n("path", { d: "M14 2V8H20" }),
  /* @__PURE__ */ n("path", { d: "M16 13H8M16 17H8M10 9H8" })
] }), rg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  /* @__PURE__ */ n("path", { d: "M14 2V8H20" })
] }), ng = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }) }), sg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M16 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
  /* @__PURE__ */ n("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" })
] }), ig = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M16 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
  /* @__PURE__ */ n("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }),
  /* @__PURE__ */ n("path", { d: "M9 14L11 16L15 12" })
] }), ag = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 20V10M18 20V4M6 20V16" }) }), lg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M3 3V21H21" }),
  /* @__PURE__ */ n("path", { d: "M7 14L12 9L16 13L21 8" })
] }), cg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
  /* @__PURE__ */ n("path", { d: "M22 12A10 10 0 0 0 12 2v10z" })
] }), dg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 2L2 7L12 12L22 7L12 2Z" }),
  /* @__PURE__ */ n("path", { d: "M2 17L12 22L22 17" }),
  /* @__PURE__ */ n("path", { d: "M2 12L12 17L22 12" })
] }), ug = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ n("path", { d: "M21 21L16.65 16.65" }),
  /* @__PURE__ */ n("path", { d: "M11 8V14M8 11H14" })
] }), fg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ n("path", { d: "M21 21L16.65 16.65" }),
  /* @__PURE__ */ n("path", { d: "M8 11H14" })
] }), pg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" }) }), mg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M4 14H10V20M20 10H14V4M14 10L21 3M3 21L10 14" }) }), hg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" })
] }), gg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 22V12" }),
  /* @__PURE__ */ n("path", { d: "M5 12H19" }),
  /* @__PURE__ */ n("path", { d: "M18 7V5.5a2.5 2.5 0 0 0-5 0V7" }),
  /* @__PURE__ */ n("path", { d: "M6 7V5.5a2.5 2.5 0 0 1 5 0V7" }),
  /* @__PURE__ */ n("rect", { x: "4", y: "7", width: "16", height: "5", rx: "1" })
] }), vg = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: m("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22V15", fill: "currentColor" }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M4 22V15", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
] }) }), xg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M20.59 13.41L13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }),
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "1.5" })
] }), bg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
] }), yg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "8", r: "6" }),
  /* @__PURE__ */ n("path", { d: "M15.477 12.89L17 22L12 19L7 22L8.523 12.89" })
] }), wg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }), kg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
  /* @__PURE__ */ n("path", { d: "M9 12L11 14L15 10" })
] }), Cg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M6 9V2H18V9" }),
  /* @__PURE__ */ n("path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }),
  /* @__PURE__ */ n("rect", { x: "6", y: "14", width: "12", height: "8" })
] }), Ng = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M3 9H21M3 15H21M9 3V21M15 3V21" })
] }), Sg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" }) }), Lg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M4 9H20M4 15H20M10 3L8 21M16 3L14 21" }) }), Rg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "6" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "2" })
] }), Mg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 12H18L15 21L9 3L6 12H2" }) }), Eg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("polygon", { points: "3 11 22 2 13 21 11 13 3 11" }) }), Ag = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21 4H14M10 4H3M21 12H12M8 12H3M21 20H16M12 20H3" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "4", r: "2" }),
  /* @__PURE__ */ n("circle", { cx: "10", cy: "12", r: "2" }),
  /* @__PURE__ */ n("circle", { cx: "14", cy: "20", r: "2" })
] }), Ig = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 1V23" }),
  /* @__PURE__ */ n("path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
] }), Pg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M4 4L8 20L12 8L16 20L20 4" }),
  /* @__PURE__ */ n("path", { d: "M3 10H21M3 14H21" })
] }), Tg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#3182F6" }),
  /* @__PURE__ */ n("path", { d: "M8 12L11 15L16 9", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Dg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#3182F6" }),
  /* @__PURE__ */ n("path", { d: "M7 14L10 11L13 13L17 9", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Og = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#FFB800" }),
  /* @__PURE__ */ n("rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", fill: "white" })
] }), zg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#0046FF" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "4", fill: "white" })
] }), _g = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#FFCD00" }),
  /* @__PURE__ */ n("ellipse", { cx: "12", cy: "13", rx: "5", ry: "4", fill: "#3C1E1E" })
] }), Bg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#0066B3" }),
  /* @__PURE__ */ n("path", { d: "M8 12H16M12 8V16", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })
] }), Wg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#009490" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "4", stroke: "white", strokeWidth: "2" })
] }), Vg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: m("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#02A64E" }),
  /* @__PURE__ */ n("path", { d: "M12 7V17M8 12H16", stroke: "white", strokeWidth: "2.5", strokeLinecap: "round" })
] }), Rv = {
  // Arrow
  ArrowLeft: Tm,
  ArrowRight: Dm,
  ArrowUp: Om,
  ArrowDown: zm,
  // Chevron
  ChevronLeft: _m,
  ChevronRight: Bm,
  ChevronUp: Wm,
  ChevronDown: Vm,
  // Navigation
  Home: Fm,
  Menu: Hm,
  Search: $m,
  Settings: jm,
  Grid: Um,
  // Action
  Plus: Gm,
  Minus: Km,
  Close: Ym,
  Check: qm,
  Edit: Xm,
  Trash: Zm,
  Copy: Qm,
  Share: Jm,
  Download: eh,
  Upload: th,
  Refresh: oh,
  MoreHorizontal: rh,
  MoreVertical: nh,
  Filter: sh,
  Sort: ih,
  // Status
  Info: ah,
  AlertCircle: lh,
  AlertTriangle: ch,
  CheckCircle: dh,
  XCircle: uh,
  HelpCircle: fh,
  // User
  User: ph,
  Users: mh,
  UserPlus: hh,
  // Communication
  Send: gh,
  Message: vh,
  Mail: xh,
  Phone: bh,
  Bell: yh,
  // Finance
  Wallet: wh,
  CreditCard: kh,
  Gift: Ch,
  Chart: Nh,
  TrendingUp: Sh,
  TrendingDown: Lh,
  Percent: Rh,
  Receipt: Mh,
  // Media
  Image: Eh,
  Camera: Ah,
  Play: Ih,
  Pause: Ph,
  // Utility
  Calendar: Th,
  Clock: Dh,
  MapPin: Oh,
  Lock: zh,
  Unlock: _h,
  Eye: Bh,
  EyeOff: Wh,
  Star: Vh,
  Heart: Fh,
  Bookmark: Hh,
  Link: $h,
  ExternalLink: jh,
  QRCode: Uh,
  // Real Estate / Appraisal
  Building: Gh,
  BuildingOffice: Kh,
  Apartment: Yh,
  Land: qh,
  Map: Xh,
  Ruler: Zh,
  Area: Qh,
  Calculator: Jh,
  Compare: eg,
  Scale: tg,
  FileText: og,
  File: rg,
  Folder: ng,
  Clipboard: sg,
  ClipboardCheck: ig,
  BarChart: ag,
  LineChart: lg,
  PieChart: cg,
  Layers: dg,
  ZoomIn: ug,
  ZoomOut: fg,
  Maximize: pg,
  Minimize: mg,
  Compass: hg,
  Pin: gg,
  Flag: vg,
  Tag: xg,
  Briefcase: bg,
  Award: yg,
  Shield: wg,
  ShieldCheck: kg,
  Printer: Cg,
  Table: Ng,
  List: Sg,
  Hash: Lg,
  Target: Rg,
  Activity: Mg,
  Dollar: Ig,
  Won: Pg,
  Navigation: Eg,
  SlidersHorizontal: Ag
}, Mv = {
  Toss: Tg,
  TossSecurities: Dg,
  KB: Og,
  Shinhan: zg,
  Kakao: _g,
  Woori: Bg,
  Hana: Wg,
  NH: Vg
};
export {
  uv as ActionSheet,
  Xp as ActionSheetCancel,
  Gp as ActionSheetContent,
  Kp as ActionSheetGroup,
  qp as ActionSheetItem,
  ba as ActionSheetOverlay,
  Up as ActionSheetPortal,
  Yp as ActionSheetTitle,
  fv as ActionSheetTrigger,
  Mg as ActivityIcon,
  lh as AlertCircleIcon,
  iv as AlertDialog,
  zp as AlertDialogAction,
  _p as AlertDialogCancel,
  Ip as AlertDialogContent,
  Op as AlertDialogDescription,
  Tp as AlertDialogFooter,
  Pp as AlertDialogHeader,
  va as AlertDialogOverlay,
  Ap as AlertDialogPortal,
  Dp as AlertDialogTitle,
  av as AlertDialogTrigger,
  ch as AlertTriangleIcon,
  Yh as ApartmentIcon,
  Qh as AreaIcon,
  zm as ArrowDownIcon,
  Tm as ArrowLeftIcon,
  Dm as ArrowRightIcon,
  Om as ArrowUpIcon,
  dp as Avatar,
  up as AvatarGroup,
  yg as AwardIcon,
  Qg as Badge,
  Mv as BankIcon,
  ag as BarChartIcon,
  yh as BellIcon,
  bv as BoldTabs,
  gm as BoldTabsList,
  vm as BoldTabsTrigger,
  Hh as BookmarkIcon,
  lv as BottomSheet,
  Fp as BottomSheetBody,
  dv as BottomSheetClose,
  Wp as BottomSheetContent,
  jp as BottomSheetDescription,
  Hp as BottomSheetFooter,
  Vp as BottomSheetHeader,
  xa as BottomSheetOverlay,
  Bp as BottomSheetPortal,
  $p as BottomSheetTitle,
  cv as BottomSheetTrigger,
  bg as BriefcaseIcon,
  Gh as BuildingIcon,
  Kh as BuildingOfficeIcon,
  rt as Button,
  Jh as CalculatorIcon,
  Th as CalendarIcon,
  Ah as CameraIcon,
  jg as Card,
  Yg as CardAction,
  qg as CardContent,
  Kg as CardDescription,
  Xg as CardFooter,
  Ug as CardHeader,
  Gg as CardTitle,
  Nh as ChartIcon,
  dh as CheckCircleIcon,
  qm as CheckIcon,
  pa as Checkbox,
  mp as CheckboxWithLabel,
  Vm as ChevronDownIcon,
  _m as ChevronLeftIcon,
  Bm as ChevronRightIcon,
  Wm as ChevronUpIcon,
  Jg as Chip,
  ig as ClipboardCheckIcon,
  sg as ClipboardIcon,
  Dh as ClockIcon,
  Ym as CloseIcon,
  eg as CompareIcon,
  hg as CompassIcon,
  Qm as CopyIcon,
  kh as CreditCardIcon,
  rv as Dialog,
  sv as DialogClose,
  Sp as DialogContent,
  Ep as DialogDescription,
  Rp as DialogFooter,
  Lp as DialogHeader,
  ga as DialogOverlay,
  Np as DialogPortal,
  Mp as DialogTitle,
  nv as DialogTrigger,
  Lm as Divider,
  Ig as DollarIcon,
  eh as DownloadIcon,
  pv as Drawer,
  tm as DrawerBody,
  hv as DrawerClose,
  rm as DrawerCloseButton,
  Qp as DrawerContent,
  om as DrawerFooter,
  Jp as DrawerHeader,
  nm as DrawerMenuItem,
  ya as DrawerOverlay,
  Zp as DrawerPortal,
  em as DrawerTitle,
  mv as DrawerTrigger,
  Xm as EditIcon,
  Pm as EmptyState,
  jh as ExternalLinkIcon,
  Bh as EyeIcon,
  Wh as EyeOffIcon,
  Am as FAB,
  Im as FABContainer,
  rg as FileIcon,
  og as FileTextIcon,
  sh as FilterIcon,
  vg as FlagIcon,
  ng as FolderIcon,
  Ch as GiftIcon,
  Um as GridIcon,
  Wg as HanaBankIcon,
  Lg as HashIcon,
  Fh as HeartIcon,
  fh as HelpCircleIcon,
  Fm as HomeIcon,
  yv as IconSegmentedControl,
  Eh as ImageIcon,
  ah as InfoIcon,
  np as Input,
  Og as KBBankIcon,
  _g as KakaoBankIcon,
  Zg as Label,
  qh as LandIcon,
  dg as LayersIcon,
  lg as LineChartIcon,
  $h as LinkIcon,
  Sm as List,
  Sg as ListIcon,
  km as ListItem,
  Cm as ListItemCompact,
  cm as LoadingDots,
  dm as LoadingOverlay,
  zh as LockIcon,
  xh as MailIcon,
  Xh as MapIcon,
  Oh as MapPinIcon,
  pg as MaximizeIcon,
  Hm as MenuIcon,
  vh as MessageIcon,
  mg as MinimizeIcon,
  Km as MinusIcon,
  rh as MoreHorizontalIcon,
  nh as MoreVerticalIcon,
  Vg as NHBankIcon,
  Eg as NavigationIcon,
  bm as Pagination,
  Ph as PauseIcon,
  Rh as PercentIcon,
  bh as PhoneIcon,
  cg as PieChartIcon,
  gg as PinIcon,
  Ih as PlayIcon,
  Gm as PlusIcon,
  Cg as PrinterIcon,
  lm as Progress,
  Uh as QRCodeIcon,
  xp as RadioCard,
  hp as RadioGroup,
  gp as RadioGroupItem,
  vp as RadioWithLabel,
  Mh as ReceiptIcon,
  oh as RefreshIcon,
  Zh as RulerIcon,
  tg as ScaleIcon,
  $m as SearchIcon,
  sp as SearchInput,
  wm as SegmentedControl,
  ev as Select,
  yp as SelectContent,
  tv as SelectGroup,
  kp as SelectItem,
  wp as SelectLabel,
  Cp as SelectSeparator,
  bp as SelectTrigger,
  ov as SelectValue,
  gh as SendIcon,
  jm as SettingsIcon,
  Jm as ShareIcon,
  kg as ShieldCheckIcon,
  wg as ShieldIcon,
  zg as ShinhanBankIcon,
  Nm as SimpleListItem,
  ym as SimplePagination,
  xe as Skeleton,
  Sv as SkeletonAvatarGroup,
  Cv as SkeletonButton,
  wv as SkeletonCard,
  cr as SkeletonCircle,
  Nv as SkeletonImage,
  Lv as SkeletonInput,
  kv as SkeletonListItem,
  Mm as SkeletonText,
  Ag as SlidersHorizontalIcon,
  am as Snackbar,
  ih as SortIcon,
  Rm as Spacer,
  ka as Spinner,
  Vh as StarIcon,
  fp as Switch,
  Ng as TableIcon,
  vv as Tabs,
  pm as TabsContent,
  um as TabsList,
  fm as TabsTrigger,
  xg as TagIcon,
  Rg as TargetIcon,
  ip as Textarea,
  im as ToastContainer,
  gv as ToastProvider,
  pp as Toggle,
  Tg as TossBankIcon,
  Rv as TossIcon,
  Dg as TossSecuritiesIcon,
  Zm as TrashIcon,
  Lh as TrendingDownIcon,
  Sh as TrendingUpIcon,
  xv as UnderlineTabs,
  mm as UnderlineTabsList,
  hm as UnderlineTabsTrigger,
  _h as UnlockIcon,
  th as UploadIcon,
  ph as UserIcon,
  hh as UserPlusIcon,
  mh as UsersIcon,
  wh as WalletIcon,
  Pg as WonIcon,
  Bg as WooriBankIcon,
  uh as XCircleIcon,
  ug as ZoomInIcon,
  fg as ZoomOutIcon,
  cp as avatarVariants,
  ap as badgeVariants,
  ar as buttonVariants,
  lp as chipVariants,
  m as cn,
  Em as fabVariants,
  sm as useToast
};
