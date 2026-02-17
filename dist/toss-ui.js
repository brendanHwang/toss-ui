import { jsx as n, Fragment as te, jsxs as y } from "react/jsx-runtime";
import * as l from "react";
import We, { useState as ki, useLayoutEffect as Ci, forwardRef as $r, createElement as bo } from "react";
import * as Bt from "react-dom";
import Ni from "react-dom";
function jr(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (o = jr(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function Ur() {
  for (var e, t, o = 0, r = "", s = arguments.length; o < s; o++) (e = arguments[o]) && (t = jr(e)) && (r && (r += " "), r += t);
  return r;
}
const ir = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, cr = Ur, ft = (e, t) => (o) => {
  var r;
  if (t?.variants == null) return cr(e, o?.class, o?.className);
  const { variants: s, defaultVariants: a } = t, i = Object.keys(s).map((u) => {
    const f = o?.[u], m = a?.[u];
    if (f === null) return null;
    const g = ir(f) || ir(m);
    return s[u][g];
  }), c = o && Object.entries(o).reduce((u, f) => {
    let [m, g] = f;
    return g === void 0 || (u[m] = g), u;
  }, {}), d = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
    let { class: m, className: g, ...x } = f;
    return Object.entries(x).every((b) => {
      let [h, v] = b;
      return Array.isArray(v) ? v.includes({
        ...a,
        ...c
      }[h]) : {
        ...a,
        ...c
      }[h] === v;
    }) ? [
      ...u,
      m,
      g
    ] : u;
  }, []);
  return cr(e, i, d, o?.class, o?.className);
};
function lr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Gr(...e) {
  return (t) => {
    let o = !1;
    const r = e.map((s) => {
      const a = lr(s, t);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const a = r[s];
          typeof a == "function" ? a() : lr(e[s], null);
        }
      };
  };
}
function U(...e) {
  return l.useCallback(Gr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  const t = /* @__PURE__ */ Li(e), o = l.forwardRef((r, s) => {
    const { children: a, ...i } = r, c = l.Children.toArray(a), d = c.find(Mi);
    if (d) {
      const u = d.props.children, f = c.map((m) => m === d ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : m);
      return /* @__PURE__ */ n(t, { ...i, ref: s, children: l.isValidElement(u) ? l.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ n(t, { ...i, ref: s, children: a });
  });
  return o.displayName = `${e}.Slot`, o;
}
var Si = /* @__PURE__ */ tt("Slot");
// @__NO_SIDE_EFFECTS__
function Li(e) {
  const t = l.forwardRef((o, r) => {
    const { children: s, ...a } = o;
    if (l.isValidElement(s)) {
      const i = Ai(s), c = Ei(a, s.props);
      return s.type !== l.Fragment && (c.ref = r ? Gr(r, i) : i), l.cloneElement(s, c);
    }
    return l.Children.count(s) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Kr = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Ri(e) {
  const t = ({ children: o }) => /* @__PURE__ */ n(te, { children: o });
  return t.displayName = `${e}.Slottable`, t.__radixId = Kr, t;
}
function Mi(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Kr;
}
function Ei(e, t) {
  const o = { ...t };
  for (const r in t) {
    const s = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? s && a ? o[r] = (...c) => {
      const d = a(...c);
      return s(...c), d;
    } : s && (o[r] = s) : r === "style" ? o[r] = { ...s, ...a } : r === "className" && (o[r] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function Ai(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Ii = [
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
], D = Ii.reduce((e, t) => {
  const o = /* @__PURE__ */ tt(`Primitive.${t}`), r = l.forwardRef((s, a) => {
    const { asChild: i, ...c } = s, d = i ? o : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n(d, { ...c, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Pi(e, t) {
  e && Bt.flushSync(() => e.dispatchEvent(t));
}
var Yr = Object.freeze({
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
}), Ti = "VisuallyHidden", Di = l.forwardRef(
  (e, t) => /* @__PURE__ */ n(
    D.span,
    {
      ...e,
      ref: t,
      style: { ...Yr, ...e.style }
    }
  )
);
Di.displayName = Ti;
function Oi(e, t) {
  const o = l.createContext(t), r = (a) => {
    const { children: i, ...c } = a, d = l.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ n(o.Provider, { value: d, children: i });
  };
  r.displayName = e + "Provider";
  function s(a) {
    const i = l.useContext(o);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, s];
}
function ie(e, t = []) {
  let o = [];
  function r(a, i) {
    const c = l.createContext(i), d = o.length;
    o = [...o, i];
    const u = (m) => {
      const { scope: g, children: x, ...b } = m, h = g?.[e]?.[d] || c, v = l.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ n(h.Provider, { value: v, children: x });
    };
    u.displayName = a + "Provider";
    function f(m, g) {
      const x = g?.[e]?.[d] || c, b = l.useContext(x);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [u, f];
  }
  const s = () => {
    const a = o.map((i) => l.createContext(i));
    return function(c) {
      const d = c?.[e] || a;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: d } }),
        [c, d]
      );
    };
  };
  return s.scopeName = e, [r, zi(s, ...t)];
}
function zi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const r = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const i = r.reduce((c, { useScope: d, scopeName: u }) => {
        const m = d(a)[`__scope${u}`];
        return { ...c, ...m };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return o.scopeName = t.scopeName, o;
}
function qr(e) {
  const t = e + "CollectionProvider", [o, r] = ie(t), [s, a] = o(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: v, children: w } = h, k = We.useRef(null), C = We.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ n(s, { scope: v, itemMap: C, collectionRef: k, children: w });
  };
  i.displayName = t;
  const c = e + "CollectionSlot", d = /* @__PURE__ */ tt(c), u = We.forwardRef(
    (h, v) => {
      const { scope: w, children: k } = h, C = a(c, w), N = U(v, C.collectionRef);
      return /* @__PURE__ */ n(d, { ref: N, children: k });
    }
  );
  u.displayName = c;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", g = /* @__PURE__ */ tt(f), x = We.forwardRef(
    (h, v) => {
      const { scope: w, children: k, ...C } = h, N = We.useRef(null), R = U(v, N), E = a(f, w);
      return We.useEffect(() => (E.itemMap.set(N, { ref: N, ...C }), () => {
        E.itemMap.delete(N);
      })), /* @__PURE__ */ n(g, { [m]: "", ref: R, children: k });
    }
  );
  x.displayName = f;
  function b(h) {
    const v = a(e + "CollectionConsumer", h);
    return We.useCallback(() => {
      const k = v.collectionRef.current;
      if (!k) return [];
      const C = Array.from(k.querySelectorAll(`[${m}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, M) => C.indexOf(E.ref.current) - C.indexOf(M.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: x },
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
var re = globalThis?.document ? l.useLayoutEffect : () => {
}, _i = l[" useInsertionEffect ".trim().toString()] || re;
function Ie({
  prop: e,
  defaultProp: t,
  onChange: o = () => {
  },
  caller: r
}) {
  const [s, a, i] = Bi({
    defaultProp: t,
    onChange: o
  }), c = e !== void 0, d = c ? e : s;
  {
    const f = l.useRef(e !== void 0);
    l.useEffect(() => {
      const m = f.current;
      m !== c && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = c;
    }, [c, r]);
  }
  const u = l.useCallback(
    (f) => {
      if (c) {
        const m = Wi(f) ? f(e) : f;
        m !== e && i.current?.(m);
      } else
        a(f);
    },
    [c, e, a, i]
  );
  return [d, u];
}
function Bi({
  defaultProp: e,
  onChange: t
}) {
  const [o, r] = l.useState(e), s = l.useRef(o), a = l.useRef(t);
  return _i(() => {
    a.current = t;
  }, [t]), l.useEffect(() => {
    s.current !== o && (a.current?.(o), s.current = o);
  }, [o, s]), [o, r, a];
}
function Wi(e) {
  return typeof e == "function";
}
function Vi(e, t) {
  return l.useReducer((o, r) => t[o][r] ?? o, e);
}
var Ue = (e) => {
  const { present: t, children: o } = e, r = Fi(t), s = typeof o == "function" ? o({ present: r.isPresent }) : l.Children.only(o), a = U(r.ref, Hi(s));
  return typeof o == "function" || r.isPresent ? l.cloneElement(s, { ref: a }) : null;
};
Ue.displayName = "Presence";
function Fi(e) {
  const [t, o] = l.useState(), r = l.useRef(null), s = l.useRef(e), a = l.useRef("none"), i = e ? "mounted" : "unmounted", [c, d] = Vi(i, {
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
  return l.useEffect(() => {
    const u = bt(r.current);
    a.current = c === "mounted" ? u : "none";
  }, [c]), re(() => {
    const u = r.current, f = s.current;
    if (f !== e) {
      const g = a.current, x = bt(u);
      e ? d("MOUNT") : x === "none" || u?.display === "none" ? d("UNMOUNT") : d(f && g !== x ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, d]), re(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, m = (x) => {
        const h = bt(r.current).includes(CSS.escape(x.animationName));
        if (x.target === t && h && (d("ANIMATION_END"), !s.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, g = (x) => {
        x.target === t && (a.current = bt(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: l.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, o(u);
    }, [])
  };
}
function bt(e) {
  return e?.animationName || "none";
}
function Hi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var $i = l[" useId ".trim().toString()] || (() => {
}), ji = 0;
function Ee(e) {
  const [t, o] = l.useState($i());
  return re(() => {
    o((r) => r ?? String(ji++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Ui = l.createContext(void 0);
function Wt(e) {
  const t = l.useContext(Ui);
  return e || t || "ltr";
}
function Pe(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...o) => t.current?.(...o), []);
}
function Gi(e, t = globalThis?.document) {
  const o = Pe(e);
  l.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && o(s);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [o, t]);
}
var Ki = "DismissableLayer", yo = "dismissableLayer.update", Yi = "dismissableLayer.pointerDownOutside", qi = "dismissableLayer.focusOutside", dr, Xr = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Po = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: o = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: c,
      ...d
    } = e, u = l.useContext(Xr), [f, m] = l.useState(null), g = f?.ownerDocument ?? globalThis?.document, [, x] = l.useState({}), b = U(t, (M) => m(M)), h = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(v), k = f ? h.indexOf(f) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, N = k >= w, R = Qi((M) => {
      const S = M.target, O = [...u.branches].some((B) => B.contains(S));
      !N || O || (s?.(M), i?.(M), M.defaultPrevented || c?.());
    }, g), E = Ji((M) => {
      const S = M.target;
      [...u.branches].some((B) => B.contains(S)) || (a?.(M), i?.(M), M.defaultPrevented || c?.());
    }, g);
    return Gi((M) => {
      k === u.layers.size - 1 && (r?.(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
    }, g), l.useEffect(() => {
      if (f)
        return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (dr = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), ur(), () => {
          o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = dr);
        };
    }, [f, g, o, u]), l.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), ur());
    }, [f, u]), l.useEffect(() => {
      const M = () => x({});
      return document.addEventListener(yo, M), () => document.removeEventListener(yo, M);
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
Po.displayName = Ki;
var Xi = "DismissableLayerBranch", Zi = l.forwardRef((e, t) => {
  const o = l.useContext(Xr), r = l.useRef(null), s = U(t, r);
  return l.useEffect(() => {
    const a = r.current;
    if (a)
      return o.branches.add(a), () => {
        o.branches.delete(a);
      };
  }, [o.branches]), /* @__PURE__ */ n(D.div, { ...e, ref: s });
});
Zi.displayName = Xi;
function Qi(e, t = globalThis?.document) {
  const o = Pe(e), r = l.useRef(!1), s = l.useRef(() => {
  });
  return l.useEffect(() => {
    const a = (c) => {
      if (c.target && !r.current) {
        let d = function() {
          Zr(
            Yi,
            o,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = d, t.addEventListener("click", s.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", s.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", s.current);
    };
  }, [t, o]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Ji(e, t = globalThis?.document) {
  const o = Pe(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const s = (a) => {
      a.target && !r.current && Zr(qi, o, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, o]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ur() {
  const e = new CustomEvent(yo);
  document.dispatchEvent(e);
}
function Zr(e, t, o, { discrete: r }) {
  const s = o.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: o });
  t && s.addEventListener(e, t, { once: !0 }), r ? Pi(s, a) : s.dispatchEvent(a);
}
var io = "focusScope.autoFocusOnMount", co = "focusScope.autoFocusOnUnmount", fr = { bubbles: !1, cancelable: !0 }, ec = "FocusScope", To = l.forwardRef((e, t) => {
  const {
    loop: o = !1,
    trapped: r = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...i
  } = e, [c, d] = l.useState(null), u = Pe(s), f = Pe(a), m = l.useRef(null), g = U(t, (h) => d(h)), x = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (r) {
      let h = function(C) {
        if (x.paused || !c) return;
        const N = C.target;
        c.contains(N) ? m.current = N : Me(m.current, { select: !0 });
      }, v = function(C) {
        if (x.paused || !c) return;
        const N = C.relatedTarget;
        N !== null && (c.contains(N) || Me(m.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const R of C)
            R.removedNodes.length > 0 && Me(c);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const k = new MutationObserver(w);
      return c && k.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), k.disconnect();
      };
    }
  }, [r, c, x.paused]), l.useEffect(() => {
    if (c) {
      mr.add(x);
      const h = document.activeElement;
      if (!c.contains(h)) {
        const w = new CustomEvent(io, fr);
        c.addEventListener(io, u), c.dispatchEvent(w), w.defaultPrevented || (tc(ac(Qr(c)), { select: !0 }), document.activeElement === h && Me(c));
      }
      return () => {
        c.removeEventListener(io, u), setTimeout(() => {
          const w = new CustomEvent(co, fr);
          c.addEventListener(co, f), c.dispatchEvent(w), w.defaultPrevented || Me(h ?? document.body, { select: !0 }), c.removeEventListener(co, f), mr.remove(x);
        }, 0);
      };
    }
  }, [c, u, f, x]);
  const b = l.useCallback(
    (h) => {
      if (!o && !r || x.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (v && w) {
        const k = h.currentTarget, [C, N] = oc(k);
        C && N ? !h.shiftKey && w === N ? (h.preventDefault(), o && Me(C, { select: !0 })) : h.shiftKey && w === C && (h.preventDefault(), o && Me(N, { select: !0 })) : w === k && h.preventDefault();
      }
    },
    [o, r, x.paused]
  );
  return /* @__PURE__ */ n(D.div, { tabIndex: -1, ...i, ref: g, onKeyDown: b });
});
To.displayName = ec;
function tc(e, { select: t = !1 } = {}) {
  const o = document.activeElement;
  for (const r of e)
    if (Me(r, { select: t }), document.activeElement !== o) return;
}
function oc(e) {
  const t = Qr(e), o = pr(t, e), r = pr(t.reverse(), e);
  return [o, r];
}
function Qr(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function pr(e, t) {
  for (const o of e)
    if (!rc(o, { upTo: t })) return o;
}
function rc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function nc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && nc(e) && t && e.select();
  }
}
var mr = sc();
function sc() {
  let e = [];
  return {
    add(t) {
      const o = e[0];
      t !== o && o?.pause(), e = hr(e, t), e.unshift(t);
    },
    remove(t) {
      e = hr(e, t), e[0]?.resume();
    }
  };
}
function hr(e, t) {
  const o = [...e], r = o.indexOf(t);
  return r !== -1 && o.splice(r, 1), o;
}
function ac(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ic = "Portal", Do = l.forwardRef((e, t) => {
  const { container: o, ...r } = e, [s, a] = l.useState(!1);
  re(() => a(!0), []);
  const i = o || s && globalThis?.document?.body;
  return i ? Ni.createPortal(/* @__PURE__ */ n(D.div, { ...r, ref: t }), i) : null;
});
Do.displayName = ic;
var lo = 0;
function Jr() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? gr()), document.body.insertAdjacentElement("beforeend", e[1] ?? gr()), lo++, () => {
      lo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), lo--;
    };
  }, []);
}
function gr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var he = function() {
  return he = Object.assign || function(t) {
    for (var o, r = 1, s = arguments.length; r < s; r++) {
      o = arguments[r];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    }
    return t;
  }, he.apply(this, arguments);
};
function en(e, t) {
  var o = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (o[r[s]] = e[r[s]]);
  return o;
}
function cc(e, t, o) {
  if (o || arguments.length === 2) for (var r = 0, s = t.length, a; r < s; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Rt = "right-scroll-bar-position", Mt = "width-before-scroll-bar", lc = "with-scroll-bars-hidden", dc = "--removed-body-scroll-bar-size";
function uo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function uc(e, t) {
  var o = ki(function() {
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
var fc = typeof window < "u" ? l.useLayoutEffect : l.useEffect, vr = /* @__PURE__ */ new WeakMap();
function pc(e, t) {
  var o = uc(null, function(r) {
    return e.forEach(function(s) {
      return uo(s, r);
    });
  });
  return fc(function() {
    var r = vr.get(o);
    if (r) {
      var s = new Set(r), a = new Set(e), i = o.current;
      s.forEach(function(c) {
        a.has(c) || uo(c, null);
      }), a.forEach(function(c) {
        s.has(c) || uo(c, i);
      });
    }
    vr.set(o, e);
  }, [e]), o;
}
function mc(e) {
  return e;
}
function hc(e, t) {
  t === void 0 && (t = mc);
  var o = [], r = !1, s = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return o.length ? o[o.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return o.push(i), function() {
        o = o.filter(function(c) {
          return c !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; o.length; ) {
        var i = o;
        o = [], i.forEach(a);
      }
      o = {
        push: function(c) {
          return a(c);
        },
        filter: function() {
          return o;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (o.length) {
        var c = o;
        o = [], c.forEach(a), i = o;
      }
      var d = function() {
        var f = i;
        i = [], f.forEach(a);
      }, u = function() {
        return Promise.resolve().then(d);
      };
      u(), o = {
        push: function(f) {
          i.push(f), u();
        },
        filter: function(f) {
          return i = i.filter(f), o;
        }
      };
    }
  };
  return s;
}
function gc(e) {
  e === void 0 && (e = {});
  var t = hc(null);
  return t.options = he({ async: !0, ssr: !1 }, e), t;
}
var tn = function(e) {
  var t = e.sideCar, o = en(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, he({}, o));
};
tn.isSideCarExport = !0;
function vc(e, t) {
  return e.useMedium(t), tn;
}
var on = gc(), fo = function() {
}, Vt = l.forwardRef(function(e, t) {
  var o = l.useRef(null), r = l.useState({
    onScrollCapture: fo,
    onWheelCapture: fo,
    onTouchMoveCapture: fo
  }), s = r[0], a = r[1], i = e.forwardProps, c = e.children, d = e.className, u = e.removeScrollBar, f = e.enabled, m = e.shards, g = e.sideCar, x = e.noRelative, b = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, k = w === void 0 ? "div" : w, C = e.gapMode, N = en(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, E = pc([o, t]), M = he(he({}, N), s);
  return l.createElement(
    l.Fragment,
    null,
    f && l.createElement(R, { sideCar: on, removeScrollBar: u, shards: m, noRelative: x, noIsolation: b, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: o, gapMode: C }),
    i ? l.cloneElement(l.Children.only(c), he(he({}, M), { ref: E })) : l.createElement(k, he({}, M, { className: d, ref: E }), c)
  );
});
Vt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vt.classNames = {
  fullWidth: Mt,
  zeroRight: Rt
};
var xc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function bc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = xc();
  return t && e.setAttribute("nonce", t), e;
}
function yc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function wc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var kc = function() {
  var e = 0, t = null;
  return {
    add: function(o) {
      e == 0 && (t = bc()) && (yc(t, o), wc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Cc = function() {
  var e = kc();
  return function(t, o) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && o]);
  };
}, rn = function() {
  var e = Cc(), t = function(o) {
    var r = o.styles, s = o.dynamic;
    return e(r, s), null;
  };
  return t;
}, Nc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, po = function(e) {
  return parseInt(e || "", 10) || 0;
}, Sc = function(e) {
  var t = window.getComputedStyle(document.body), o = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [po(o), po(r), po(s)];
}, Lc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Nc;
  var t = Sc(e), o = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - o + t[2] - t[0])
  };
}, Rc = rn(), Qe = "data-scroll-locked", Mc = function(e, t, o, r) {
  var s = e.left, a = e.top, i = e.right, c = e.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(lc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body[`).concat(Qe, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    o === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    o === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Rt, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Mt, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Rt, " .").concat(Rt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Mt, " .").concat(Mt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Qe, `] {
    `).concat(dc, ": ").concat(c, `px;
  }
`);
}, xr = function() {
  var e = parseInt(document.body.getAttribute(Qe) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ec = function() {
  l.useEffect(function() {
    return document.body.setAttribute(Qe, (xr() + 1).toString()), function() {
      var e = xr() - 1;
      e <= 0 ? document.body.removeAttribute(Qe) : document.body.setAttribute(Qe, e.toString());
    };
  }, []);
}, Ac = function(e) {
  var t = e.noRelative, o = e.noImportant, r = e.gapMode, s = r === void 0 ? "margin" : r;
  Ec();
  var a = l.useMemo(function() {
    return Lc(s);
  }, [s]);
  return l.createElement(Rc, { styles: Mc(a, !t, s, o ? "" : "!important") });
}, wo = !1;
if (typeof window < "u")
  try {
    var yt = Object.defineProperty({}, "passive", {
      get: function() {
        return wo = !0, !0;
      }
    });
    window.addEventListener("test", yt, yt), window.removeEventListener("test", yt, yt);
  } catch {
    wo = !1;
  }
var Ye = wo ? { passive: !1 } : !1, Ic = function(e) {
  return e.tagName === "TEXTAREA";
}, nn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var o = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    o[t] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !Ic(e) && o[t] === "visible")
  );
}, Pc = function(e) {
  return nn(e, "overflowY");
}, Tc = function(e) {
  return nn(e, "overflowX");
}, br = function(e, t) {
  var o = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var s = sn(e, r);
    if (s) {
      var a = an(e, r), i = a[1], c = a[2];
      if (i > c)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== o.body);
  return !1;
}, Dc = function(e) {
  var t = e.scrollTop, o = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    o,
    r
  ];
}, Oc = function(e) {
  var t = e.scrollLeft, o = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    o,
    r
  ];
}, sn = function(e, t) {
  return e === "v" ? Pc(t) : Tc(t);
}, an = function(e, t) {
  return e === "v" ? Dc(t) : Oc(t);
}, zc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, _c = function(e, t, o, r, s) {
  var a = zc(e, window.getComputedStyle(t).direction), i = a * r, c = o.target, d = t.contains(c), u = !1, f = i > 0, m = 0, g = 0;
  do {
    if (!c)
      break;
    var x = an(e, c), b = x[0], h = x[1], v = x[2], w = h - v - a * b;
    (b || w) && sn(e, c) && (m += w, g += b);
    var k = c.parentNode;
    c = k && k.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? k.host : k;
  } while (
    // portaled content
    !d && c !== document.body || // self content
    d && (t.contains(c) || t === c)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(g) < 1) && (u = !0), u;
}, wt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, yr = function(e) {
  return [e.deltaX, e.deltaY];
}, wr = function(e) {
  return e && "current" in e ? e.current : e;
}, Bc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Wc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Vc = 0, qe = [];
function Fc(e) {
  var t = l.useRef([]), o = l.useRef([0, 0]), r = l.useRef(), s = l.useState(Vc++)[0], a = l.useState(rn)[0], i = l.useRef(e);
  l.useEffect(function() {
    i.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var h = cc([e.lockRef.current], (e.shards || []).map(wr), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = l.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = wt(h), k = o.current, C = "deltaX" in h ? h.deltaX : k[0] - w[0], N = "deltaY" in h ? h.deltaY : k[1] - w[1], R, E = h.target, M = Math.abs(C) > Math.abs(N) ? "h" : "v";
    if ("touches" in h && M === "h" && E.type === "range")
      return !1;
    var S = window.getSelection(), O = S && S.anchorNode, B = O ? O === E || O.contains(E) : !1;
    if (B)
      return !1;
    var V = br(M, E);
    if (!V)
      return !0;
    if (V ? R = M : (R = M === "v" ? "h" : "v", V = br(M, E)), !V)
      return !1;
    if (!r.current && "changedTouches" in h && (C || N) && (r.current = R), !R)
      return !0;
    var H = r.current || R;
    return _c(H, v, h, H === "h" ? C : N);
  }, []), d = l.useCallback(function(h) {
    var v = h;
    if (!(!qe.length || qe[qe.length - 1] !== a)) {
      var w = "deltaY" in v ? yr(v) : wt(v), k = t.current.filter(function(R) {
        return R.name === v.type && (R.target === v.target || v.target === R.shadowParent) && Bc(R.delta, w);
      })[0];
      if (k && k.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!k) {
        var C = (i.current.shards || []).map(wr).filter(Boolean).filter(function(R) {
          return R.contains(v.target);
        }), N = C.length > 0 ? c(v, C[0]) : !i.current.noIsolation;
        N && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = l.useCallback(function(h, v, w, k) {
    var C = { name: h, delta: v, target: w, should: k, shadowParent: Hc(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== C;
      });
    }, 1);
  }, []), f = l.useCallback(function(h) {
    o.current = wt(h), r.current = void 0;
  }, []), m = l.useCallback(function(h) {
    u(h.type, yr(h), h.target, c(h, e.lockRef.current));
  }, []), g = l.useCallback(function(h) {
    u(h.type, wt(h), h.target, c(h, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return qe.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", d, Ye), document.addEventListener("touchmove", d, Ye), document.addEventListener("touchstart", f, Ye), function() {
      qe = qe.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", d, Ye), document.removeEventListener("touchmove", d, Ye), document.removeEventListener("touchstart", f, Ye);
    };
  }, []);
  var x = e.removeScrollBar, b = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    b ? l.createElement(a, { styles: Wc(s) }) : null,
    x ? l.createElement(Ac, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Hc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const $c = vc(on, Fc);
var Oo = l.forwardRef(function(e, t) {
  return l.createElement(Vt, he({}, e, { ref: t, sideCar: $c }));
});
Oo.classNames = Vt.classNames;
var jc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xe = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Ct = {}, mo = 0, cn = function(e) {
  return e && (e.host || cn(e.parentNode));
}, Uc = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var r = cn(o);
    return r && e.contains(r) ? r : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Gc = function(e, t, o, r) {
  var s = Uc(t, Array.isArray(e) ? e : [e]);
  Ct[o] || (Ct[o] = /* @__PURE__ */ new WeakMap());
  var a = Ct[o], i = [], c = /* @__PURE__ */ new Set(), d = new Set(s), u = function(m) {
    !m || c.has(m) || (c.add(m), u(m.parentNode));
  };
  s.forEach(u);
  var f = function(m) {
    !m || d.has(m) || Array.prototype.forEach.call(m.children, function(g) {
      if (c.has(g))
        f(g);
      else
        try {
          var x = g.getAttribute(r), b = x !== null && x !== "false", h = (Xe.get(g) || 0) + 1, v = (a.get(g) || 0) + 1;
          Xe.set(g, h), a.set(g, v), i.push(g), h === 1 && b && kt.set(g, !0), v === 1 && g.setAttribute(o, "true"), b || g.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", g, w);
        }
    });
  };
  return f(t), c.clear(), mo++, function() {
    i.forEach(function(m) {
      var g = Xe.get(m) - 1, x = a.get(m) - 1;
      Xe.set(m, g), a.set(m, x), g || (kt.has(m) || m.removeAttribute(r), kt.delete(m)), x || m.removeAttribute(o);
    }), mo--, mo || (Xe = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Ct = {});
  };
}, ln = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), s = jc(e);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live], script"))), Gc(r, s, o, "aria-hidden")) : function() {
    return null;
  };
}, Ft = "Dialog", [dn, un] = ie(Ft), [Kc, fe] = dn(Ft), fn = (e) => {
  const {
    __scopeDialog: t,
    children: o,
    open: r,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, c = l.useRef(null), d = l.useRef(null), [u, f] = Ie({
    prop: r,
    defaultProp: s ?? !1,
    onChange: a,
    caller: Ft
  });
  return /* @__PURE__ */ n(
    Kc,
    {
      scope: t,
      triggerRef: c,
      contentRef: d,
      contentId: Ee(),
      titleId: Ee(),
      descriptionId: Ee(),
      open: u,
      onOpenChange: f,
      onOpenToggle: l.useCallback(() => f((m) => !m), [f]),
      modal: i,
      children: o
    }
  );
};
fn.displayName = Ft;
var pn = "DialogTrigger", mn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(pn, o), a = U(t, s.triggerRef);
    return /* @__PURE__ */ n(
      D.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Bo(s.open),
        ...r,
        ref: a,
        onClick: z(e.onClick, s.onOpenToggle)
      }
    );
  }
);
mn.displayName = pn;
var zo = "DialogPortal", [Yc, hn] = dn(zo, {
  forceMount: void 0
}), gn = (e) => {
  const { __scopeDialog: t, forceMount: o, children: r, container: s } = e, a = fe(zo, t);
  return /* @__PURE__ */ n(Yc, { scope: t, forceMount: o, children: l.Children.map(r, (i) => /* @__PURE__ */ n(Ue, { present: o || a.open, children: /* @__PURE__ */ n(Do, { asChild: !0, container: s, children: i }) })) });
};
gn.displayName = zo;
var At = "DialogOverlay", vn = l.forwardRef(
  (e, t) => {
    const o = hn(At, e.__scopeDialog), { forceMount: r = o.forceMount, ...s } = e, a = fe(At, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ n(Ue, { present: r || a.open, children: /* @__PURE__ */ n(Xc, { ...s, ref: t }) }) : null;
  }
);
vn.displayName = At;
var qc = /* @__PURE__ */ tt("DialogOverlay.RemoveScroll"), Xc = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(At, o);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ n(Oo, { as: qc, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ n(
        D.div,
        {
          "data-state": Bo(s.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Fe = "DialogContent", xn = l.forwardRef(
  (e, t) => {
    const o = hn(Fe, e.__scopeDialog), { forceMount: r = o.forceMount, ...s } = e, a = fe(Fe, e.__scopeDialog);
    return /* @__PURE__ */ n(Ue, { present: r || a.open, children: a.modal ? /* @__PURE__ */ n(Zc, { ...s, ref: t }) : /* @__PURE__ */ n(Qc, { ...s, ref: t }) });
  }
);
xn.displayName = Fe;
var Zc = l.forwardRef(
  (e, t) => {
    const o = fe(Fe, e.__scopeDialog), r = l.useRef(null), s = U(t, o.contentRef, r);
    return l.useEffect(() => {
      const a = r.current;
      if (a) return ln(a);
    }, []), /* @__PURE__ */ n(
      bn,
      {
        ...e,
        ref: s,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: z(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), o.triggerRef.current?.focus();
        }),
        onPointerDownOutside: z(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || c) && a.preventDefault();
        }),
        onFocusOutside: z(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Qc = l.forwardRef(
  (e, t) => {
    const o = fe(Fe, e.__scopeDialog), r = l.useRef(!1), s = l.useRef(!1);
    return /* @__PURE__ */ n(
      bn,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || o.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, s.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const i = a.target;
          o.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && s.current && a.preventDefault();
        }
      }
    );
  }
), bn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: a, ...i } = e, c = fe(Fe, o), d = l.useRef(null), u = U(t, d);
    return Jr(), /* @__PURE__ */ y(te, { children: [
      /* @__PURE__ */ n(
        To,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: s,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ n(
            Po,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": Bo(c.open),
              ...i,
              ref: u,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ y(te, { children: [
        /* @__PURE__ */ n(el, { titleId: c.titleId }),
        /* @__PURE__ */ n(ol, { contentRef: d, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), _o = "DialogTitle", yn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(_o, o);
    return /* @__PURE__ */ n(D.h2, { id: s.titleId, ...r, ref: t });
  }
);
yn.displayName = _o;
var wn = "DialogDescription", kn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(wn, o);
    return /* @__PURE__ */ n(D.p, { id: s.descriptionId, ...r, ref: t });
  }
);
kn.displayName = wn;
var Cn = "DialogClose", Nn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, s = fe(Cn, o);
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
Nn.displayName = Cn;
function Bo(e) {
  return e ? "open" : "closed";
}
var Sn = "DialogTitleWarning", [Jc, Ln] = Oi(Sn, {
  contentName: Fe,
  titleName: _o,
  docsSlug: "dialog"
}), el = ({ titleId: e }) => {
  const t = Ln(Sn), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return l.useEffect(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, tl = "DialogDescriptionWarning", ol = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ln(tl).contentName}}.`;
  return l.useEffect(() => {
    const s = e.current?.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, pt = fn, mt = mn, ht = gn, rt = vn, nt = xn, gt = yn, Ht = kn, Se = Nn, Rn = "AlertDialog", [rl] = ie(Rn, [
  un
]), Le = un(), Mn = (e) => {
  const { __scopeAlertDialog: t, ...o } = e, r = Le(t);
  return /* @__PURE__ */ n(pt, { ...r, ...o, modal: !0 });
};
Mn.displayName = Rn;
var nl = "AlertDialogTrigger", En = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
    return /* @__PURE__ */ n(mt, { ...s, ...r, ref: t });
  }
);
En.displayName = nl;
var sl = "AlertDialogPortal", An = (e) => {
  const { __scopeAlertDialog: t, ...o } = e, r = Le(t);
  return /* @__PURE__ */ n(ht, { ...r, ...o });
};
An.displayName = sl;
var al = "AlertDialogOverlay", In = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
    return /* @__PURE__ */ n(rt, { ...s, ...r, ref: t });
  }
);
In.displayName = al;
var Je = "AlertDialogContent", [il, cl] = rl(Je), ll = /* @__PURE__ */ Ri("AlertDialogContent"), Pn = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, children: r, ...s } = e, a = Le(o), i = l.useRef(null), c = U(t, i), d = l.useRef(null);
    return /* @__PURE__ */ n(
      Jc,
      {
        contentName: Je,
        titleName: Tn,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ n(il, { scope: o, cancelRef: d, children: /* @__PURE__ */ y(
          nt,
          {
            role: "alertdialog",
            ...a,
            ...s,
            ref: c,
            onOpenAutoFocus: z(s.onOpenAutoFocus, (u) => {
              u.preventDefault(), d.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
            children: [
              /* @__PURE__ */ n(ll, { children: r }),
              /* @__PURE__ */ n(ul, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
Pn.displayName = Je;
var Tn = "AlertDialogTitle", Dn = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
    return /* @__PURE__ */ n(gt, { ...s, ...r, ref: t });
  }
);
Dn.displayName = Tn;
var On = "AlertDialogDescription", zn = l.forwardRef((e, t) => {
  const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
  return /* @__PURE__ */ n(Ht, { ...s, ...r, ref: t });
});
zn.displayName = On;
var dl = "AlertDialogAction", _n = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, s = Le(o);
    return /* @__PURE__ */ n(Se, { ...s, ...r, ref: t });
  }
);
_n.displayName = dl;
var Bn = "AlertDialogCancel", Wn = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: o, ...r } = e, { cancelRef: s } = cl(Bn, o), a = Le(o), i = U(t, s);
    return /* @__PURE__ */ n(Se, { ...a, ...r, ref: i });
  }
);
Wn.displayName = Bn;
var ul = ({ contentRef: e }) => {
  const t = `\`${Je}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Je}\` by passing a \`${On}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Je}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return l.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, fl = Mn, pl = En, ml = An, Vn = In, Fn = Pn, Hn = _n, $n = Wn, jn = Dn, Un = zn;
function $t(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function jt(e) {
  const [t, o] = l.useState(void 0);
  return re(() => {
    if (e) {
      o({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const a = s[0];
        let i, c;
        if ("borderBoxSize" in a) {
          const d = a.borderBoxSize, u = Array.isArray(d) ? d[0] : d;
          i = u.inlineSize, c = u.blockSize;
        } else
          i = e.offsetWidth, c = e.offsetHeight;
        o({ width: i, height: c });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      o(void 0);
  }, [e]), t;
}
var Ut = "Checkbox", [hl] = ie(Ut), [gl, Wo] = hl(Ut);
function vl(e) {
  const {
    __scopeCheckbox: t,
    checked: o,
    children: r,
    defaultChecked: s,
    disabled: a,
    form: i,
    name: c,
    onCheckedChange: d,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [g, x] = Ie({
    prop: o,
    defaultProp: s ?? !1,
    onChange: d,
    caller: Ut
  }), [b, h] = l.useState(null), [v, w] = l.useState(null), k = l.useRef(!1), C = b ? !!i || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), N = {
    checked: g,
    disabled: a,
    setChecked: x,
    control: b,
    setControl: h,
    name: c,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: k,
    required: u,
    defaultChecked: Ae(s) ? !1 : s,
    isFormControl: C,
    bubbleInput: v,
    setBubbleInput: w
  };
  return /* @__PURE__ */ n(
    gl,
    {
      scope: t,
      ...N,
      children: xl(m) ? m(N) : r
    }
  );
}
var Gn = "CheckboxTrigger", Kn = l.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: o, ...r }, s) => {
    const {
      control: a,
      value: i,
      disabled: c,
      checked: d,
      required: u,
      setControl: f,
      setChecked: m,
      hasConsumerStoppedPropagationRef: g,
      isFormControl: x,
      bubbleInput: b
    } = Wo(Gn, e), h = U(s, f), v = l.useRef(d);
    return l.useEffect(() => {
      const w = a?.form;
      if (w) {
        const k = () => m(v.current);
        return w.addEventListener("reset", k), () => w.removeEventListener("reset", k);
      }
    }, [a, m]), /* @__PURE__ */ n(
      D.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ae(d) ? "mixed" : d,
        "aria-required": u,
        "data-state": Qn(d),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: i,
        ...r,
        ref: h,
        onKeyDown: z(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: z(o, (w) => {
          m((k) => Ae(k) ? !0 : !k), b && x && (g.current = w.isPropagationStopped(), g.current || w.stopPropagation());
        })
      }
    );
  }
);
Kn.displayName = Gn;
var Vo = l.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: o,
      name: r,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      value: d,
      onCheckedChange: u,
      form: f,
      ...m
    } = e;
    return /* @__PURE__ */ n(
      vl,
      {
        __scopeCheckbox: o,
        checked: s,
        defaultChecked: a,
        disabled: c,
        required: i,
        onCheckedChange: u,
        name: r,
        form: f,
        value: d,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ y(te, { children: [
          /* @__PURE__ */ n(
            Kn,
            {
              ...m,
              ref: t,
              __scopeCheckbox: o
            }
          ),
          g && /* @__PURE__ */ n(
            Zn,
            {
              __scopeCheckbox: o
            }
          )
        ] })
      }
    );
  }
);
Vo.displayName = Ut;
var Yn = "CheckboxIndicator", qn = l.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: o, forceMount: r, ...s } = e, a = Wo(Yn, o);
    return /* @__PURE__ */ n(
      Ue,
      {
        present: r || Ae(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ n(
          D.span,
          {
            "data-state": Qn(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...s,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
qn.displayName = Yn;
var Xn = "CheckboxBubbleInput", Zn = l.forwardRef(
  ({ __scopeCheckbox: e, ...t }, o) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: s,
      checked: a,
      defaultChecked: i,
      required: c,
      disabled: d,
      name: u,
      value: f,
      form: m,
      bubbleInput: g,
      setBubbleInput: x
    } = Wo(Xn, e), b = U(o, x), h = $t(a), v = jt(r);
    l.useEffect(() => {
      const k = g;
      if (!k) return;
      const C = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, E = !s.current;
      if (h !== a && R) {
        const M = new Event("click", { bubbles: E });
        k.indeterminate = Ae(a), R.call(k, Ae(a) ? !1 : a), k.dispatchEvent(M);
      }
    }, [g, h, a, s]);
    const w = l.useRef(Ae(a) ? !1 : a);
    return /* @__PURE__ */ n(
      D.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? w.current,
        required: c,
        disabled: d,
        name: u,
        value: f,
        form: m,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
          ...t.style,
          ...v,
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
Zn.displayName = Xn;
function xl(e) {
  return typeof e == "function";
}
function Ae(e) {
  return e === "indeterminate";
}
function Qn(e) {
  return Ae(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const bl = ["top", "right", "bottom", "left"], Te = Math.min, ne = Math.max, It = Math.round, Nt = Math.floor, ve = (e) => ({
  x: e,
  y: e
}), yl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, wl = {
  start: "end",
  end: "start"
};
function ko(e, t, o) {
  return ne(e, Te(t, o));
}
function Ce(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ne(e) {
  return e.split("-")[0];
}
function st(e) {
  return e.split("-")[1];
}
function Fo(e) {
  return e === "x" ? "y" : "x";
}
function Ho(e) {
  return e === "y" ? "height" : "width";
}
const kl = /* @__PURE__ */ new Set(["top", "bottom"]);
function ge(e) {
  return kl.has(Ne(e)) ? "y" : "x";
}
function $o(e) {
  return Fo(ge(e));
}
function Cl(e, t, o) {
  o === void 0 && (o = !1);
  const r = st(e), s = $o(e), a = Ho(s);
  let i = s === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Pt(i)), [i, Pt(i)];
}
function Nl(e) {
  const t = Pt(e);
  return [Co(e), t, Co(t)];
}
function Co(e) {
  return e.replace(/start|end/g, (t) => wl[t]);
}
const kr = ["left", "right"], Cr = ["right", "left"], Sl = ["top", "bottom"], Ll = ["bottom", "top"];
function Rl(e, t, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? Cr : kr : t ? kr : Cr;
    case "left":
    case "right":
      return t ? Sl : Ll;
    default:
      return [];
  }
}
function Ml(e, t, o, r) {
  const s = st(e);
  let a = Rl(Ne(e), o === "start", r);
  return s && (a = a.map((i) => i + "-" + s), t && (a = a.concat(a.map(Co)))), a;
}
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yl[t]);
}
function El(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jn(e) {
  return typeof e != "number" ? El(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tt(e) {
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
function Nr(e, t, o) {
  let {
    reference: r,
    floating: s
  } = e;
  const a = ge(t), i = $o(t), c = Ho(i), d = Ne(t), u = a === "y", f = r.x + r.width / 2 - s.width / 2, m = r.y + r.height / 2 - s.height / 2, g = r[c] / 2 - s[c] / 2;
  let x;
  switch (d) {
    case "top":
      x = {
        x: f,
        y: r.y - s.height
      };
      break;
    case "bottom":
      x = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      x = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      x = {
        x: r.x - s.width,
        y: m
      };
      break;
    default:
      x = {
        x: r.x,
        y: r.y
      };
  }
  switch (st(t)) {
    case "start":
      x[i] -= g * (o && u ? -1 : 1);
      break;
    case "end":
      x[i] += g * (o && u ? -1 : 1);
      break;
  }
  return x;
}
async function Al(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: r,
    y: s,
    platform: a,
    rects: i,
    elements: c,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: g = !1,
    padding: x = 0
  } = Ce(t, e), b = Jn(x), v = c[g ? m === "floating" ? "reference" : "floating" : m], w = Tt(await a.getClippingRect({
    element: (o = await (a.isElement == null ? void 0 : a.isElement(v))) == null || o ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: d
  })), k = m === "floating" ? {
    x: r,
    y: s,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), N = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Tt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
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
const Il = async (e, t, o) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: a = [],
    platform: i
  } = o, c = a.filter(Boolean), d = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: f,
    y: m
  } = Nr(u, r, d), g = r, x = {}, b = 0;
  for (let v = 0; v < c.length; v++) {
    var h;
    const {
      name: w,
      fn: k
    } = c[v], {
      x: C,
      y: N,
      data: R,
      reset: E
    } = await k({
      x: f,
      y: m,
      initialPlacement: r,
      placement: g,
      strategy: s,
      middlewareData: x,
      rects: u,
      platform: {
        ...i,
        detectOverflow: (h = i.detectOverflow) != null ? h : Al
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    f = C ?? f, m = N ?? m, x = {
      ...x,
      [w]: {
        ...x[w],
        ...R
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (g = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : E.rects), {
      x: f,
      y: m
    } = Nr(u, g, d)), v = -1);
  }
  return {
    x: f,
    y: m,
    placement: g,
    strategy: s,
    middlewareData: x
  };
}, Pl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: r,
      placement: s,
      rects: a,
      platform: i,
      elements: c,
      middlewareData: d
    } = t, {
      element: u,
      padding: f = 0
    } = Ce(e, t) || {};
    if (u == null)
      return {};
    const m = Jn(f), g = {
      x: o,
      y: r
    }, x = $o(s), b = Ho(x), h = await i.getDimensions(u), v = x === "y", w = v ? "top" : "left", k = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", N = a.reference[b] + a.reference[x] - g[x] - a.floating[b], R = g[x] - a.reference[x], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let M = E ? E[C] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(E))) && (M = c.floating[C] || a.floating[b]);
    const S = N / 2 - R / 2, O = M / 2 - h[b] / 2 - 1, B = Te(m[w], O), V = Te(m[k], O), H = B, $ = M - h[b] - V, F = M / 2 - h[b] / 2 + S, j = ko(H, F, $), T = !d.arrow && st(s) != null && F !== j && a.reference[b] / 2 - (F < H ? B : V) - h[b] / 2 < 0, W = T ? F < H ? F - H : F - $ : 0;
    return {
      [x]: g[x] + W,
      data: {
        [x]: j,
        centerOffset: F - j - W,
        ...T && {
          alignmentOffset: W
        }
      },
      reset: T
    };
  }
}), Tl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, r;
      const {
        placement: s,
        middlewareData: a,
        rects: i,
        initialPlacement: c,
        platform: d,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: m = !0,
        fallbackPlacements: g,
        fallbackStrategy: x = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ...v
      } = Ce(e, t);
      if ((o = a.arrow) != null && o.alignmentOffset)
        return {};
      const w = Ne(s), k = ge(c), C = Ne(c) === c, N = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), R = g || (C || !h ? [Pt(c)] : Nl(c)), E = b !== "none";
      !g && E && R.push(...Ml(c, h, b, N));
      const M = [c, ...R], S = await d.detectOverflow(t, v), O = [];
      let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && O.push(S[w]), m) {
        const F = Cl(s, i, N);
        O.push(S[F[0]], S[F[1]]);
      }
      if (B = [...B, {
        placement: s,
        overflows: O
      }], !O.every((F) => F <= 0)) {
        var V, H;
        const F = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, j = M[F];
        if (j && (!(m === "alignment" ? k !== ge(j) : !1) || // We leave the current main axis only if every placement on that axis
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
          switch (x) {
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
              T = c;
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
function Sr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Lr(e) {
  return bl.some((t) => e[t] >= 0);
}
const Dl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o,
        platform: r
      } = t, {
        strategy: s = "referenceHidden",
        ...a
      } = Ce(e, t);
      switch (s) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), c = Sr(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Lr(c)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), c = Sr(i, o.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Lr(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, es = /* @__PURE__ */ new Set(["left", "top"]);
async function Ol(e, t) {
  const {
    placement: o,
    platform: r,
    elements: s
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), i = Ne(o), c = st(o), d = ge(o) === "y", u = es.has(i) ? -1 : 1, f = a && d ? -1 : 1, m = Ce(t, e);
  let {
    mainAxis: g,
    crossAxis: x,
    alignmentAxis: b
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return c && typeof b == "number" && (x = c === "end" ? b * -1 : b), d ? {
    x: x * f,
    y: g * u
  } : {
    x: g * u,
    y: x * f
  };
}
const zl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, r;
      const {
        x: s,
        y: a,
        placement: i,
        middlewareData: c
      } = t, d = await Ol(t, e);
      return i === ((o = c.offset) == null ? void 0 : o.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: s + d.x,
        y: a + d.y,
        data: {
          ...d,
          placement: i
        }
      };
    }
  };
}, _l = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: r,
        placement: s,
        platform: a
      } = t, {
        mainAxis: i = !0,
        crossAxis: c = !1,
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
      }, m = await a.detectOverflow(t, u), g = ge(Ne(s)), x = Fo(g);
      let b = f[x], h = f[g];
      if (i) {
        const w = x === "y" ? "top" : "left", k = x === "y" ? "bottom" : "right", C = b + m[w], N = b - m[k];
        b = ko(C, b, N);
      }
      if (c) {
        const w = g === "y" ? "top" : "left", k = g === "y" ? "bottom" : "right", C = h + m[w], N = h - m[k];
        h = ko(C, h, N);
      }
      const v = d.fn({
        ...t,
        [x]: b,
        [g]: h
      });
      return {
        ...v,
        data: {
          x: v.x - o,
          y: v.y - r,
          enabled: {
            [x]: i,
            [g]: c
          }
        }
      };
    }
  };
}, Bl = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: o,
        y: r,
        placement: s,
        rects: a,
        middlewareData: i
      } = t, {
        offset: c = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = Ce(e, t), f = {
        x: o,
        y: r
      }, m = ge(s), g = Fo(m);
      let x = f[g], b = f[m];
      const h = Ce(c, t), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const C = g === "y" ? "height" : "width", N = a.reference[g] - a.floating[C] + v.mainAxis, R = a.reference[g] + a.reference[C] - v.mainAxis;
        x < N ? x = N : x > R && (x = R);
      }
      if (u) {
        var w, k;
        const C = g === "y" ? "width" : "height", N = es.has(Ne(s)), R = a.reference[m] - a.floating[C] + (N && ((w = i.offset) == null ? void 0 : w[m]) || 0) + (N ? 0 : v.crossAxis), E = a.reference[m] + a.reference[C] + (N ? 0 : ((k = i.offset) == null ? void 0 : k[m]) || 0) - (N ? v.crossAxis : 0);
        b < R ? b = R : b > E && (b = E);
      }
      return {
        [g]: x,
        [m]: b
      };
    }
  };
}, Wl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, r;
      const {
        placement: s,
        rects: a,
        platform: i,
        elements: c
      } = t, {
        apply: d = () => {
        },
        ...u
      } = Ce(e, t), f = await i.detectOverflow(t, u), m = Ne(s), g = st(s), x = ge(s) === "y", {
        width: b,
        height: h
      } = a.floating;
      let v, w;
      m === "top" || m === "bottom" ? (v = m, w = g === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (w = m, v = g === "end" ? "top" : "bottom");
      const k = h - f.top - f.bottom, C = b - f.left - f.right, N = Te(h - f[v], k), R = Te(b - f[w], C), E = !t.middlewareData.shift;
      let M = N, S = R;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (S = C), (r = t.middlewareData.shift) != null && r.enabled.y && (M = k), E && !g) {
        const B = ne(f.left, 0), V = ne(f.right, 0), H = ne(f.top, 0), $ = ne(f.bottom, 0);
        x ? S = b - 2 * (B !== 0 || V !== 0 ? B + V : ne(f.left, f.right)) : M = h - 2 * (H !== 0 || $ !== 0 ? H + $ : ne(f.top, f.bottom));
      }
      await d({
        ...t,
        availableWidth: S,
        availableHeight: M
      });
      const O = await i.getDimensions(c.floating);
      return b !== O.width || h !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Gt() {
  return typeof window < "u";
}
function at(e) {
  return ts(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ye(e) {
  var t;
  return (t = (ts(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ts(e) {
  return Gt() ? e instanceof Node || e instanceof se(e).Node : !1;
}
function de(e) {
  return Gt() ? e instanceof Element || e instanceof se(e).Element : !1;
}
function be(e) {
  return Gt() ? e instanceof HTMLElement || e instanceof se(e).HTMLElement : !1;
}
function Rr(e) {
  return !Gt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
const Vl = /* @__PURE__ */ new Set(["inline", "contents"]);
function vt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: r,
    display: s
  } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + o) && !Vl.has(s);
}
const Fl = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Hl(e) {
  return Fl.has(at(e));
}
const $l = [":popover-open", ":modal"];
function Kt(e) {
  return $l.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const jl = ["transform", "translate", "scale", "rotate", "perspective"], Ul = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Gl = ["paint", "layout", "strict", "content"];
function jo(e) {
  const t = Uo(), o = de(e) ? ue(e) : e;
  return jl.some((r) => o[r] ? o[r] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || Ul.some((r) => (o.willChange || "").includes(r)) || Gl.some((r) => (o.contain || "").includes(r));
}
function Kl(e) {
  let t = De(e);
  for (; be(t) && !ot(t); ) {
    if (jo(t))
      return t;
    if (Kt(t))
      return null;
    t = De(t);
  }
  return null;
}
function Uo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Yl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ot(e) {
  return Yl.has(at(e));
}
function ue(e) {
  return se(e).getComputedStyle(e);
}
function Yt(e) {
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
    Rr(e) && e.host || // Fallback.
    ye(e)
  );
  return Rr(t) ? t.host : t;
}
function os(e) {
  const t = De(e);
  return ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : be(t) && vt(t) ? t : os(t);
}
function ut(e, t, o) {
  var r;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const s = os(e), a = s === ((r = e.ownerDocument) == null ? void 0 : r.body), i = se(s);
  if (a) {
    const c = No(i);
    return t.concat(i, i.visualViewport || [], vt(s) ? s : [], c && o ? ut(c) : []);
  }
  return t.concat(s, ut(s, [], o));
}
function No(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function rs(e) {
  const t = ue(e);
  let o = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = be(e), a = s ? e.offsetWidth : o, i = s ? e.offsetHeight : r, c = It(o) !== a || It(r) !== i;
  return c && (o = a, r = i), {
    width: o,
    height: r,
    $: c
  };
}
function Go(e) {
  return de(e) ? e : e.contextElement;
}
function et(e) {
  const t = Go(e);
  if (!be(t))
    return ve(1);
  const o = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: a
  } = rs(t);
  let i = (a ? It(o.width) : o.width) / r, c = (a ? It(o.height) : o.height) / s;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const ql = /* @__PURE__ */ ve(0);
function ns(e) {
  const t = se(e);
  return !Uo() || !t.visualViewport ? ql : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Xl(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== se(e) ? !1 : t;
}
function He(e, t, o, r) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const s = e.getBoundingClientRect(), a = Go(e);
  let i = ve(1);
  t && (r ? de(r) && (i = et(r)) : i = et(e));
  const c = Xl(a, o, r) ? ns(a) : ve(0);
  let d = (s.left + c.x) / i.x, u = (s.top + c.y) / i.y, f = s.width / i.x, m = s.height / i.y;
  if (a) {
    const g = se(a), x = r && de(r) ? se(r) : r;
    let b = g, h = No(b);
    for (; h && r && x !== b; ) {
      const v = et(h), w = h.getBoundingClientRect(), k = ue(h), C = w.left + (h.clientLeft + parseFloat(k.paddingLeft)) * v.x, N = w.top + (h.clientTop + parseFloat(k.paddingTop)) * v.y;
      d *= v.x, u *= v.y, f *= v.x, m *= v.y, d += C, u += N, b = se(h), h = No(b);
    }
  }
  return Tt({
    width: f,
    height: m,
    x: d,
    y: u
  });
}
function qt(e, t) {
  const o = Yt(e).scrollLeft;
  return t ? t.left + o : He(ye(e)).left + o;
}
function ss(e, t) {
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - qt(e, o), s = o.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function Zl(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: r,
    strategy: s
  } = e;
  const a = s === "fixed", i = ye(r), c = t ? Kt(t.floating) : !1;
  if (r === i || c && a)
    return o;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ve(1);
  const f = ve(0), m = be(r);
  if ((m || !m && !a) && ((at(r) !== "body" || vt(i)) && (d = Yt(r)), be(r))) {
    const x = He(r);
    u = et(r), f.x = x.x + r.clientLeft, f.y = x.y + r.clientTop;
  }
  const g = i && !m && !a ? ss(i, d) : ve(0);
  return {
    width: o.width * u.x,
    height: o.height * u.y,
    x: o.x * u.x - d.scrollLeft * u.x + f.x + g.x,
    y: o.y * u.y - d.scrollTop * u.y + f.y + g.y
  };
}
function Ql(e) {
  return Array.from(e.getClientRects());
}
function Jl(e) {
  const t = ye(e), o = Yt(e), r = e.ownerDocument.body, s = ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -o.scrollLeft + qt(e);
  const c = -o.scrollTop;
  return ue(r).direction === "rtl" && (i += ne(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
const Mr = 25;
function ed(e, t) {
  const o = se(e), r = ye(e), s = o.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, c = 0, d = 0;
  if (s) {
    a = s.width, i = s.height;
    const f = Uo();
    (!f || f && t === "fixed") && (c = s.offsetLeft, d = s.offsetTop);
  }
  const u = qt(r);
  if (u <= 0) {
    const f = r.ownerDocument, m = f.body, g = getComputedStyle(m), x = f.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, b = Math.abs(r.clientWidth - m.clientWidth - x);
    b <= Mr && (a -= b);
  } else u <= Mr && (a += u);
  return {
    width: a,
    height: i,
    x: c,
    y: d
  };
}
const td = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function od(e, t) {
  const o = He(e, !0, t === "fixed"), r = o.top + e.clientTop, s = o.left + e.clientLeft, a = be(e) ? et(e) : ve(1), i = e.clientWidth * a.x, c = e.clientHeight * a.y, d = s * a.x, u = r * a.y;
  return {
    width: i,
    height: c,
    x: d,
    y: u
  };
}
function Er(e, t, o) {
  let r;
  if (t === "viewport")
    r = ed(e, o);
  else if (t === "document")
    r = Jl(ye(e));
  else if (de(t))
    r = od(t, o);
  else {
    const s = ns(e);
    r = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Tt(r);
}
function as(e, t) {
  const o = De(e);
  return o === t || !de(o) || ot(o) ? !1 : ue(o).position === "fixed" || as(o, t);
}
function rd(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let r = ut(e, [], !1).filter((c) => de(c) && at(c) !== "body"), s = null;
  const a = ue(e).position === "fixed";
  let i = a ? De(e) : e;
  for (; de(i) && !ot(i); ) {
    const c = ue(i), d = jo(i);
    !d && c.position === "fixed" && (s = null), (a ? !d && !s : !d && c.position === "static" && !!s && td.has(s.position) || vt(i) && !d && as(e, i)) ? r = r.filter((f) => f !== i) : s = c, i = De(i);
  }
  return t.set(e, r), r;
}
function nd(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: r,
    strategy: s
  } = e;
  const i = [...o === "clippingAncestors" ? Kt(t) ? [] : rd(t, this._c) : [].concat(o), r], c = i[0], d = i.reduce((u, f) => {
    const m = Er(t, f, s);
    return u.top = ne(m.top, u.top), u.right = Te(m.right, u.right), u.bottom = Te(m.bottom, u.bottom), u.left = ne(m.left, u.left), u;
  }, Er(t, c, s));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function sd(e) {
  const {
    width: t,
    height: o
  } = rs(e);
  return {
    width: t,
    height: o
  };
}
function ad(e, t, o) {
  const r = be(t), s = ye(t), a = o === "fixed", i = He(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = ve(0);
  function u() {
    d.x = qt(s);
  }
  if (r || !r && !a)
    if ((at(t) !== "body" || vt(s)) && (c = Yt(t)), r) {
      const x = He(t, !0, a, t);
      d.x = x.x + t.clientLeft, d.y = x.y + t.clientTop;
    } else s && u();
  a && !r && s && u();
  const f = s && !r && !a ? ss(s, c) : ve(0), m = i.left + c.scrollLeft - d.x - f.x, g = i.top + c.scrollTop - d.y - f.y;
  return {
    x: m,
    y: g,
    width: i.width,
    height: i.height
  };
}
function ho(e) {
  return ue(e).position === "static";
}
function Ar(e, t) {
  if (!be(e) || ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return ye(e) === o && (o = o.ownerDocument.body), o;
}
function is(e, t) {
  const o = se(e);
  if (Kt(e))
    return o;
  if (!be(e)) {
    let s = De(e);
    for (; s && !ot(s); ) {
      if (de(s) && !ho(s))
        return s;
      s = De(s);
    }
    return o;
  }
  let r = Ar(e, t);
  for (; r && Hl(r) && ho(r); )
    r = Ar(r, t);
  return r && ot(r) && ho(r) && !jo(r) ? o : r || Kl(e) || o;
}
const id = async function(e) {
  const t = this.getOffsetParent || is, o = this.getDimensions, r = await o(e.floating);
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
const ld = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zl,
  getDocumentElement: ye,
  getClippingRect: nd,
  getOffsetParent: is,
  getElementRects: id,
  getClientRects: Ql,
  getDimensions: sd,
  getScale: et,
  isElement: de,
  isRTL: cd
};
function cs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function dd(e, t) {
  let o = null, r;
  const s = ye(e);
  function a() {
    var c;
    clearTimeout(r), (c = o) == null || c.disconnect(), o = null;
  }
  function i(c, d) {
    c === void 0 && (c = !1), d === void 0 && (d = 1), a();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: m,
      width: g,
      height: x
    } = u;
    if (c || t(), !g || !x)
      return;
    const b = Nt(m), h = Nt(s.clientWidth - (f + g)), v = Nt(s.clientHeight - (m + x)), w = Nt(f), C = {
      rootMargin: -b + "px " + -h + "px " + -v + "px " + -w + "px",
      threshold: ne(0, Te(1, d)) || 1
    };
    let N = !0;
    function R(E) {
      const M = E[0].intersectionRatio;
      if (M !== d) {
        if (!N)
          return i();
        M ? i(!1, M) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !cs(u, e.getBoundingClientRect()) && i(), N = !1;
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
  return i(!0), a;
}
function ud(e, t, o, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = r, u = Go(e), f = s || a ? [...u ? ut(u) : [], ...ut(t)] : [];
  f.forEach((w) => {
    s && w.addEventListener("scroll", o, {
      passive: !0
    }), a && w.addEventListener("resize", o);
  });
  const m = u && c ? dd(u, o) : null;
  let g = -1, x = null;
  i && (x = new ResizeObserver((w) => {
    let [k] = w;
    k && k.target === u && x && (x.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var C;
      (C = x) == null || C.observe(t);
    })), o();
  }), u && !d && x.observe(u), x.observe(t));
  let b, h = d ? He(e) : null;
  d && v();
  function v() {
    const w = He(e);
    h && !cs(h, w) && o(), h = w, b = requestAnimationFrame(v);
  }
  return o(), () => {
    var w;
    f.forEach((k) => {
      s && k.removeEventListener("scroll", o), a && k.removeEventListener("resize", o);
    }), m?.(), (w = x) == null || w.disconnect(), x = null, d && cancelAnimationFrame(b);
  };
}
const fd = zl, pd = _l, md = Tl, hd = Wl, gd = Dl, Ir = Pl, vd = Bl, xd = (e, t, o) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: ld,
    ...o
  }, a = {
    ...s.platform,
    _c: r
  };
  return Il(e, t, {
    ...s,
    platform: a
  });
};
var bd = typeof document < "u", yd = function() {
}, Et = bd ? Ci : yd;
function Dt(e, t) {
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
        if (!Dt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), o = s.length, o !== Object.keys(t).length)
      return !1;
    for (r = o; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = o; r-- !== 0; ) {
      const a = s[r];
      if (!(a === "_owner" && e.$$typeof) && !Dt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ls(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pr(e, t) {
  const o = ls(e);
  return Math.round(t * o) / o;
}
function go(e) {
  const t = l.useRef(e);
  return Et(() => {
    t.current = e;
  }), t;
}
function wd(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: s,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: d,
    open: u
  } = e, [f, m] = l.useState({
    x: 0,
    y: 0,
    strategy: o,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, x] = l.useState(r);
  Dt(g, r) || x(r);
  const [b, h] = l.useState(null), [v, w] = l.useState(null), k = l.useCallback((L) => {
    L !== E.current && (E.current = L, h(L));
  }, []), C = l.useCallback((L) => {
    L !== M.current && (M.current = L, w(L));
  }, []), N = a || b, R = i || v, E = l.useRef(null), M = l.useRef(null), S = l.useRef(f), O = d != null, B = go(d), V = go(s), H = go(u), $ = l.useCallback(() => {
    if (!E.current || !M.current)
      return;
    const L = {
      placement: t,
      strategy: o,
      middleware: g
    };
    V.current && (L.platform = V.current), xd(E.current, M.current, L).then((K) => {
      const oe = {
        ...K,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      F.current && !Dt(S.current, oe) && (S.current = oe, Bt.flushSync(() => {
        m(oe);
      }));
    });
  }, [g, t, o, V, H]);
  Et(() => {
    u === !1 && S.current.isPositioned && (S.current.isPositioned = !1, m((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [u]);
  const F = l.useRef(!1);
  Et(() => (F.current = !0, () => {
    F.current = !1;
  }), []), Et(() => {
    if (N && (E.current = N), R && (M.current = R), N && R) {
      if (B.current)
        return B.current(N, R, $);
      $();
    }
  }, [N, R, $, B, O]);
  const j = l.useMemo(() => ({
    reference: E,
    floating: M,
    setReference: k,
    setFloating: C
  }), [k, C]), T = l.useMemo(() => ({
    reference: N,
    floating: R
  }), [N, R]), W = l.useMemo(() => {
    const L = {
      position: o,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return L;
    const K = Pr(T.floating, f.x), oe = Pr(T.floating, f.y);
    return c ? {
      ...L,
      transform: "translate(" + K + "px, " + oe + "px)",
      ...ls(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: o,
      left: K,
      top: oe
    };
  }, [o, c, T.floating, f.x, f.y]);
  return l.useMemo(() => ({
    ...f,
    update: $,
    refs: j,
    elements: T,
    floatingStyles: W
  }), [f, $, j, T, W]);
}
const kd = (e) => {
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
      return r && t(r) ? r.current != null ? Ir({
        element: r.current,
        padding: s
      }).fn(o) : {} : r ? Ir({
        element: r,
        padding: s
      }).fn(o) : {};
    }
  };
}, Cd = (e, t) => ({
  ...fd(e),
  options: [e, t]
}), Nd = (e, t) => ({
  ...pd(e),
  options: [e, t]
}), Sd = (e, t) => ({
  ...vd(e),
  options: [e, t]
}), Ld = (e, t) => ({
  ...md(e),
  options: [e, t]
}), Rd = (e, t) => ({
  ...hd(e),
  options: [e, t]
}), Md = (e, t) => ({
  ...gd(e),
  options: [e, t]
}), Ed = (e, t) => ({
  ...kd(e),
  options: [e, t]
});
var Ad = "Arrow", ds = l.forwardRef((e, t) => {
  const { children: o, width: r = 10, height: s = 5, ...a } = e;
  return /* @__PURE__ */ n(
    D.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? o : /* @__PURE__ */ n("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ds.displayName = Ad;
var Id = ds, Ko = "Popper", [us, fs] = ie(Ko), [Pd, ps] = us(Ko), ms = (e) => {
  const { __scopePopper: t, children: o } = e, [r, s] = l.useState(null);
  return /* @__PURE__ */ n(Pd, { scope: t, anchor: r, onAnchorChange: s, children: o });
};
ms.displayName = Ko;
var hs = "PopperAnchor", gs = l.forwardRef(
  (e, t) => {
    const { __scopePopper: o, virtualRef: r, ...s } = e, a = ps(hs, o), i = l.useRef(null), c = U(t, i), d = l.useRef(null);
    return l.useEffect(() => {
      const u = d.current;
      d.current = r?.current || i.current, u !== d.current && a.onAnchorChange(d.current);
    }), r ? null : /* @__PURE__ */ n(D.div, { ...s, ref: c });
  }
);
gs.displayName = hs;
var Yo = "PopperContent", [Td, Dd] = us(Yo), vs = l.forwardRef(
  (e, t) => {
    const {
      __scopePopper: o,
      side: r = "bottom",
      sideOffset: s = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: c = 0,
      avoidCollisions: d = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: m = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: x = "optimized",
      onPlaced: b,
      ...h
    } = e, v = ps(Yo, o), [w, k] = l.useState(null), C = U(t, (A) => k(A)), [N, R] = l.useState(null), E = jt(N), M = E?.width ?? 0, S = E?.height ?? 0, O = r + (a !== "center" ? "-" + a : ""), B = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, V = Array.isArray(u) ? u : [u], H = V.length > 0, $ = {
      padding: B,
      boundary: V.filter(zd),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: F, floatingStyles: j, placement: T, isPositioned: W, middlewareData: L } = wd({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...A) => ud(...A, {
        animationFrame: x === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Cd({ mainAxis: s + S, alignmentAxis: i }),
        d && Nd({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Sd() : void 0,
          ...$
        }),
        d && Ld({ ...$ }),
        Rd({
          ...$,
          apply: ({ elements: A, rects: q, availableWidth: J, availableHeight: G }) => {
            const { width: Y, height: X } = q.reference, ae = A.floating.style;
            ae.setProperty("--radix-popper-available-width", `${J}px`), ae.setProperty("--radix-popper-available-height", `${G}px`), ae.setProperty("--radix-popper-anchor-width", `${Y}px`), ae.setProperty("--radix-popper-anchor-height", `${X}px`);
          }
        }),
        N && Ed({ element: N, padding: c }),
        _d({ arrowWidth: M, arrowHeight: S }),
        g && Md({ strategy: "referenceHidden", ...$ })
      ]
    }), [K, oe] = ys(T), pe = Pe(b);
    re(() => {
      W && pe?.();
    }, [W, pe]);
    const we = L.arrow?.x, Q = L.arrow?.y, Z = L.arrow?.centerOffset !== 0, [ce, me] = l.useState();
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
          zIndex: ce,
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
          Td,
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
vs.displayName = Yo;
var xs = "PopperArrow", Od = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, bs = l.forwardRef(function(t, o) {
  const { __scopePopper: r, ...s } = t, a = Dd(xs, r), i = Od[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ n(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ n(
          Id,
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
bs.displayName = xs;
function zd(e) {
  return e !== null;
}
var _d = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: o, rects: r, middlewareData: s } = t, i = s.arrow?.centerOffset !== 0, c = i ? 0 : e.arrowWidth, d = i ? 0 : e.arrowHeight, [u, f] = ys(o), m = { start: "0%", center: "50%", end: "100%" }[f], g = (s.arrow?.x ?? 0) + c / 2, x = (s.arrow?.y ?? 0) + d / 2;
    let b = "", h = "";
    return u === "bottom" ? (b = i ? m : `${g}px`, h = `${-d}px`) : u === "top" ? (b = i ? m : `${g}px`, h = `${r.floating.height + d}px`) : u === "right" ? (b = `${-d}px`, h = i ? m : `${x}px`) : u === "left" && (b = `${r.floating.width + d}px`, h = i ? m : `${x}px`), { data: { x: b, y: h } };
  }
});
function ys(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
var Bd = ms, Wd = gs, Vd = vs, Fd = bs, vo = "rovingFocusGroup.onEntryFocus", Hd = { bubbles: !1, cancelable: !0 }, xt = "RovingFocusGroup", [So, ws, $d] = qr(xt), [jd, Xt] = ie(
  xt,
  [$d]
), [Ud, Gd] = jd(xt), ks = l.forwardRef(
  (e, t) => /* @__PURE__ */ n(So.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ n(So.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ n(Kd, { ...e, ref: t }) }) })
);
ks.displayName = xt;
var Kd = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: s = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: d,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...m
  } = e, g = l.useRef(null), x = U(t, g), b = Wt(a), [h, v] = Ie({
    prop: i,
    defaultProp: c ?? null,
    onChange: d,
    caller: xt
  }), [w, k] = l.useState(!1), C = Pe(u), N = ws(o), R = l.useRef(!1), [E, M] = l.useState(0);
  return l.useEffect(() => {
    const S = g.current;
    if (S)
      return S.addEventListener(vo, C), () => S.removeEventListener(vo, C);
  }, [C]), /* @__PURE__ */ n(
    Ud,
    {
      scope: o,
      orientation: r,
      dir: b,
      loop: s,
      currentTabStopId: h,
      onItemFocus: l.useCallback(
        (S) => v(S),
        [v]
      ),
      onItemShiftTab: l.useCallback(() => k(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => M((S) => S + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => M((S) => S - 1),
        []
      ),
      children: /* @__PURE__ */ n(
        D.div,
        {
          tabIndex: w || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: x,
          style: { outline: "none", ...e.style },
          onMouseDown: z(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: z(e.onFocus, (S) => {
            const O = !R.current;
            if (S.target === S.currentTarget && O && !w) {
              const B = new CustomEvent(vo, Hd);
              if (S.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const V = N().filter((T) => T.focusable), H = V.find((T) => T.active), $ = V.find((T) => T.id === h), j = [H, $, ...V].filter(
                  Boolean
                ).map((T) => T.ref.current);
                Ss(j, f);
              }
            }
            R.current = !1;
          }),
          onBlur: z(e.onBlur, () => k(!1))
        }
      )
    }
  );
}), Cs = "RovingFocusGroupItem", Ns = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: s = !1,
      tabStopId: a,
      children: i,
      ...c
    } = e, d = Ee(), u = a || d, f = Gd(Cs, o), m = f.currentTabStopId === u, g = ws(o), { onFocusableItemAdd: x, onFocusableItemRemove: b, currentTabStopId: h } = f;
    return l.useEffect(() => {
      if (r)
        return x(), () => b();
    }, [r, x, b]), /* @__PURE__ */ n(
      So.ItemSlot,
      {
        scope: o,
        id: u,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ n(
          D.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...c,
            ref: t,
            onMouseDown: z(e.onMouseDown, (v) => {
              r ? f.onItemFocus(u) : v.preventDefault();
            }),
            onFocus: z(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: z(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const w = Xd(v, f.orientation, f.dir);
              if (w !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let C = g().filter((N) => N.focusable).map((N) => N.ref.current);
                if (w === "last") C.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && C.reverse();
                  const N = C.indexOf(v.currentTarget);
                  C = f.loop ? Zd(C, N + 1) : C.slice(N + 1);
                }
                setTimeout(() => Ss(C));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: m, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
Ns.displayName = Cs;
var Yd = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function qd(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Xd(e, t, o) {
  const r = qd(e.key, o);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Yd[r];
}
function Ss(e, t = !1) {
  const o = document.activeElement;
  for (const r of e)
    if (r === o || (r.focus({ preventScroll: t }), document.activeElement !== o)) return;
}
function Zd(e, t) {
  return e.map((o, r) => e[(t + r) % e.length]);
}
var Ls = ks, Rs = Ns, Qd = "Label", Ms = l.forwardRef((e, t) => /* @__PURE__ */ n(
  D.label,
  {
    ...e,
    ref: t,
    onMouseDown: (o) => {
      o.target.closest("button, input, select, textarea") || (e.onMouseDown?.(o), !o.defaultPrevented && o.detail > 1 && o.preventDefault());
    }
  }
));
Ms.displayName = Qd;
var Jd = Ms;
function Tr(e, [t, o]) {
  return Math.min(o, Math.max(t, e));
}
var qo = "Progress", Xo = 100, [eu] = ie(qo), [tu, ou] = eu(qo), Es = l.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: o,
      value: r = null,
      max: s,
      getValueLabel: a = ru,
      ...i
    } = e;
    (s || s === 0) && !Dr(s) && console.error(nu(`${s}`, "Progress"));
    const c = Dr(s) ? s : Xo;
    r !== null && !Or(r, c) && console.error(su(`${r}`, "Progress"));
    const d = Or(r, c) ? r : null, u = Ot(d) ? a(d, c) : void 0;
    return /* @__PURE__ */ n(tu, { scope: o, value: d, max: c, children: /* @__PURE__ */ n(
      D.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": Ot(d) ? d : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": Ps(d, c),
        "data-value": d ?? void 0,
        "data-max": c,
        ...i,
        ref: t
      }
    ) });
  }
);
Es.displayName = qo;
var As = "ProgressIndicator", Is = l.forwardRef(
  (e, t) => {
    const { __scopeProgress: o, ...r } = e, s = ou(As, o);
    return /* @__PURE__ */ n(
      D.div,
      {
        "data-state": Ps(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...r,
        ref: t
      }
    );
  }
);
Is.displayName = As;
function ru(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ps(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ot(e) {
  return typeof e == "number";
}
function Dr(e) {
  return Ot(e) && !isNaN(e) && e > 0;
}
function Or(e, t) {
  return Ot(e) && !isNaN(e) && e <= t && e >= 0;
}
function nu(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Xo}\`.`;
}
function su(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Xo} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Ts = Es, au = Is, Zo = "Radio", [iu, Ds] = ie(Zo), [cu, lu] = iu(Zo), Os = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: o,
      name: r,
      checked: s = !1,
      required: a,
      disabled: i,
      value: c = "on",
      onCheck: d,
      form: u,
      ...f
    } = e, [m, g] = l.useState(null), x = U(t, (v) => g(v)), b = l.useRef(!1), h = m ? u || !!m.closest("form") : !0;
    return /* @__PURE__ */ y(cu, { scope: o, checked: s, disabled: i, children: [
      /* @__PURE__ */ n(
        D.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": s,
          "data-state": Ws(s),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...f,
          ref: x,
          onClick: z(e.onClick, (v) => {
            s || d?.(), h && (b.current = v.isPropagationStopped(), b.current || v.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ n(
        Bs,
        {
          control: m,
          bubbles: !b.current,
          name: r,
          value: c,
          checked: s,
          required: a,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Os.displayName = Zo;
var zs = "RadioIndicator", _s = l.forwardRef(
  (e, t) => {
    const { __scopeRadio: o, forceMount: r, ...s } = e, a = lu(zs, o);
    return /* @__PURE__ */ n(Ue, { present: r || a.checked, children: /* @__PURE__ */ n(
      D.span,
      {
        "data-state": Ws(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...s,
        ref: t
      }
    ) });
  }
);
_s.displayName = zs;
var du = "RadioBubbleInput", Bs = l.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: o,
    bubbles: r = !0,
    ...s
  }, a) => {
    const i = l.useRef(null), c = U(i, a), d = $t(o), u = jt(t);
    return l.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, x = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (d !== o && x) {
        const b = new Event("click", { bubbles: r });
        x.call(f, o), f.dispatchEvent(b);
      }
    }, [d, o, r]), /* @__PURE__ */ n(
      D.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...s,
        tabIndex: -1,
        ref: c,
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
Bs.displayName = du;
function Ws(e) {
  return e ? "checked" : "unchecked";
}
var uu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Zt = "RadioGroup", [fu] = ie(Zt, [
  Xt,
  Ds
]), Vs = Xt(), Fs = Ds(), [pu, mu] = fu(Zt), Hs = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: o,
      name: r,
      defaultValue: s,
      value: a,
      required: i = !1,
      disabled: c = !1,
      orientation: d,
      dir: u,
      loop: f = !0,
      onValueChange: m,
      ...g
    } = e, x = Vs(o), b = Wt(u), [h, v] = Ie({
      prop: a,
      defaultProp: s ?? null,
      onChange: m,
      caller: Zt
    });
    return /* @__PURE__ */ n(
      pu,
      {
        scope: o,
        name: r,
        required: i,
        disabled: c,
        value: h,
        onValueChange: v,
        children: /* @__PURE__ */ n(
          Ls,
          {
            asChild: !0,
            ...x,
            orientation: d,
            dir: b,
            loop: f,
            children: /* @__PURE__ */ n(
              D.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": d,
                "data-disabled": c ? "" : void 0,
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
Hs.displayName = Zt;
var $s = "RadioGroupItem", js = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: o, disabled: r, ...s } = e, a = mu($s, o), i = a.disabled || r, c = Vs(o), d = Fs(o), u = l.useRef(null), f = U(t, u), m = a.value === s.value, g = l.useRef(!1);
    return l.useEffect(() => {
      const x = (h) => {
        uu.includes(h.key) && (g.current = !0);
      }, b = () => g.current = !1;
      return document.addEventListener("keydown", x), document.addEventListener("keyup", b), () => {
        document.removeEventListener("keydown", x), document.removeEventListener("keyup", b);
      };
    }, []), /* @__PURE__ */ n(
      Rs,
      {
        asChild: !0,
        ...c,
        focusable: !i,
        active: m,
        children: /* @__PURE__ */ n(
          Os,
          {
            disabled: i,
            required: a.required,
            checked: m,
            ...d,
            ...s,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(s.value),
            onKeyDown: z((x) => {
              x.key === "Enter" && x.preventDefault();
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
js.displayName = $s;
var hu = "RadioGroupIndicator", Us = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: o, ...r } = e, s = Fs(o);
    return /* @__PURE__ */ n(_s, { ...s, ...r, ref: t });
  }
);
Us.displayName = hu;
var Gs = Hs, Qt = js, Ks = Us, gu = [" ", "Enter", "ArrowUp", "ArrowDown"], vu = [" ", "Enter"], $e = "Select", [Jt, eo, xu] = qr($e), [it] = ie($e, [
  xu,
  fs
]), to = fs(), [bu, Oe] = it($e), [yu, wu] = it($e), Ys = (e) => {
  const {
    __scopeSelect: t,
    children: o,
    open: r,
    defaultOpen: s,
    onOpenChange: a,
    value: i,
    defaultValue: c,
    onValueChange: d,
    dir: u,
    name: f,
    autoComplete: m,
    disabled: g,
    required: x,
    form: b
  } = e, h = to(t), [v, w] = l.useState(null), [k, C] = l.useState(null), [N, R] = l.useState(!1), E = Wt(u), [M, S] = Ie({
    prop: r,
    defaultProp: s ?? !1,
    onChange: a,
    caller: $e
  }), [O, B] = Ie({
    prop: i,
    defaultProp: c,
    onChange: d,
    caller: $e
  }), V = l.useRef(null), H = v ? b || !!v.closest("form") : !0, [$, F] = l.useState(/* @__PURE__ */ new Set()), j = Array.from($).map((T) => T.props.value).join(";");
  return /* @__PURE__ */ n(Bd, { ...h, children: /* @__PURE__ */ y(
    bu,
    {
      required: x,
      scope: t,
      trigger: v,
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
        /* @__PURE__ */ n(Jt.Provider, { scope: t, children: /* @__PURE__ */ n(
          yu,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: l.useCallback((T) => {
              F((W) => new Set(W).add(T));
            }, []),
            onNativeOptionRemove: l.useCallback((T) => {
              F((W) => {
                const L = new Set(W);
                return L.delete(T), L;
              });
            }, []),
            children: o
          }
        ) }),
        H ? /* @__PURE__ */ y(
          ba,
          {
            "aria-hidden": !0,
            required: x,
            tabIndex: -1,
            name: f,
            autoComplete: m,
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
Ys.displayName = $e;
var qs = "SelectTrigger", Xs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, disabled: r = !1, ...s } = e, a = to(o), i = Oe(qs, o), c = i.disabled || r, d = U(t, i.onTriggerChange), u = eo(o), f = l.useRef("touch"), [m, g, x] = wa((h) => {
      const v = u().filter((C) => !C.disabled), w = v.find((C) => C.value === i.value), k = ka(v, h, w);
      k !== void 0 && i.onValueChange(k.value);
    }), b = (h) => {
      c || (i.onOpenChange(!0), x()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ n(Wd, { asChild: !0, ...a, children: /* @__PURE__ */ n(
      D.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": ya(i.value) ? "" : void 0,
        ...s,
        ref: d,
        onClick: z(s.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && b(h);
        }),
        onPointerDown: z(s.onPointerDown, (h) => {
          f.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (b(h), h.preventDefault());
        }),
        onKeyDown: z(s.onKeyDown, (h) => {
          const v = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && g(h.key), !(v && h.key === " ") && gu.includes(h.key) && (b(), h.preventDefault());
        })
      }
    ) });
  }
);
Xs.displayName = qs;
var Zs = "SelectValue", Qs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, className: r, style: s, children: a, placeholder: i = "", ...c } = e, d = Oe(Zs, o), { onValueNodeHasChildrenChange: u } = d, f = a !== void 0, m = U(t, d.onValueNodeChange);
    return re(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ n(
      D.span,
      {
        ...c,
        ref: m,
        style: { pointerEvents: "none" },
        children: ya(d.value) ? /* @__PURE__ */ n(te, { children: i }) : a
      }
    );
  }
);
Qs.displayName = Zs;
var ku = "SelectIcon", Js = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, children: r, ...s } = e;
    return /* @__PURE__ */ n(D.span, { "aria-hidden": !0, ...s, ref: t, children: r || "▼" });
  }
);
Js.displayName = ku;
var Cu = "SelectPortal", ea = (e) => /* @__PURE__ */ n(Do, { asChild: !0, ...e });
ea.displayName = Cu;
var je = "SelectContent", ta = l.forwardRef(
  (e, t) => {
    const o = Oe(je, e.__scopeSelect), [r, s] = l.useState();
    if (re(() => {
      s(new DocumentFragment());
    }, []), !o.open) {
      const a = r;
      return a ? Bt.createPortal(
        /* @__PURE__ */ n(oa, { scope: e.__scopeSelect, children: /* @__PURE__ */ n(Jt.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ n("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ n(ra, { ...e, ref: t });
  }
);
ta.displayName = je;
var le = 10, [oa, ze] = it(je), Nu = "SelectContentImpl", Su = /* @__PURE__ */ tt("SelectContent.RemoveScroll"), ra = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: o,
      position: r = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: c,
      sideOffset: d,
      align: u,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: g,
      collisionPadding: x,
      sticky: b,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...w
    } = e, k = Oe(je, o), [C, N] = l.useState(null), [R, E] = l.useState(null), M = U(t, (A) => N(A)), [S, O] = l.useState(null), [B, V] = l.useState(
      null
    ), H = eo(o), [$, F] = l.useState(!1), j = l.useRef(!1);
    l.useEffect(() => {
      if (C) return ln(C);
    }, [C]), Jr();
    const T = l.useCallback(
      (A) => {
        const [q, ...J] = H().map((X) => X.ref.current), [G] = J.slice(-1), Y = document.activeElement;
        for (const X of A)
          if (X === Y || (X?.scrollIntoView({ block: "nearest" }), X === q && R && (R.scrollTop = 0), X === G && R && (R.scrollTop = R.scrollHeight), X?.focus(), document.activeElement !== Y)) return;
      },
      [H, R]
    ), W = l.useCallback(
      () => T([S, C]),
      [T, S, C]
    );
    l.useEffect(() => {
      $ && W();
    }, [$, W]);
    const { onOpenChange: L, triggerPointerDownPosRef: K } = k;
    l.useEffect(() => {
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
    }, [C, L, K]), l.useEffect(() => {
      const A = () => L(!1);
      return window.addEventListener("blur", A), window.addEventListener("resize", A), () => {
        window.removeEventListener("blur", A), window.removeEventListener("resize", A);
      };
    }, [L]);
    const [oe, pe] = wa((A) => {
      const q = H().filter((Y) => !Y.disabled), J = q.find((Y) => Y.ref.current === document.activeElement), G = ka(q, A, J);
      G && setTimeout(() => G.ref.current.focus());
    }), we = l.useCallback(
      (A, q, J) => {
        const G = !j.current && !J;
        (k.value !== void 0 && k.value === q || G) && (O(A), G && (j.current = !0));
      },
      [k.value]
    ), Q = l.useCallback(() => C?.focus(), [C]), Z = l.useCallback(
      (A, q, J) => {
        const G = !j.current && !J;
        (k.value !== void 0 && k.value === q || G) && V(A);
      },
      [k.value]
    ), ce = r === "popper" ? Lo : na, me = ce === Lo ? {
      side: c,
      sideOffset: d,
      align: u,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: g,
      collisionPadding: x,
      sticky: b,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ n(
      oa,
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
        children: /* @__PURE__ */ n(Oo, { as: Su, allowPinchZoom: !0, children: /* @__PURE__ */ n(
          To,
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
              Po,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (A) => A.preventDefault(),
                onDismiss: () => k.onOpenChange(!1),
                children: /* @__PURE__ */ n(
                  ce,
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
ra.displayName = Nu;
var Lu = "SelectItemAlignedPosition", na = l.forwardRef((e, t) => {
  const { __scopeSelect: o, onPlaced: r, ...s } = e, a = Oe(je, o), i = ze(je, o), [c, d] = l.useState(null), [u, f] = l.useState(null), m = U(t, (M) => f(M)), g = eo(o), x = l.useRef(!1), b = l.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: w, focusSelectedItem: k } = i, C = l.useCallback(() => {
    if (a.trigger && a.valueNode && c && u && h && v && w) {
      const M = a.trigger.getBoundingClientRect(), S = u.getBoundingClientRect(), O = a.valueNode.getBoundingClientRect(), B = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const Y = B.left - S.left, X = O.left - Y, ae = M.left - X, Be = M.width + ae, no = Math.max(Be, S.width), so = window.innerWidth - le, ao = Tr(X, [
          le,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(le, so - no)
        ]);
        c.style.minWidth = Be + "px", c.style.left = ao + "px";
      } else {
        const Y = S.right - B.right, X = window.innerWidth - O.right - Y, ae = window.innerWidth - M.right - X, Be = M.width + ae, no = Math.max(Be, S.width), so = window.innerWidth - le, ao = Tr(X, [
          le,
          Math.max(le, so - no)
        ]);
        c.style.minWidth = Be + "px", c.style.right = ao + "px";
      }
      const V = g(), H = window.innerHeight - le * 2, $ = h.scrollHeight, F = window.getComputedStyle(u), j = parseInt(F.borderTopWidth, 10), T = parseInt(F.paddingTop, 10), W = parseInt(F.borderBottomWidth, 10), L = parseInt(F.paddingBottom, 10), K = j + T + $ + L + W, oe = Math.min(v.offsetHeight * 5, K), pe = window.getComputedStyle(h), we = parseInt(pe.paddingTop, 10), Q = parseInt(pe.paddingBottom, 10), Z = M.top + M.height / 2 - le, ce = H - Z, me = v.offsetHeight / 2, A = v.offsetTop + me, q = j + T + A, J = K - q;
      if (q <= Z) {
        const Y = V.length > 0 && v === V[V.length - 1].ref.current;
        c.style.bottom = "0px";
        const X = u.clientHeight - h.offsetTop - h.offsetHeight, ae = Math.max(
          ce,
          me + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Y ? Q : 0) + X + W
        ), Be = q + ae;
        c.style.height = Be + "px";
      } else {
        const Y = V.length > 0 && v === V[0].ref.current;
        c.style.top = "0px";
        const ae = Math.max(
          Z,
          j + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Y ? we : 0) + me
        ) + J;
        c.style.height = ae + "px", h.scrollTop = q - Z + h.offsetTop;
      }
      c.style.margin = `${le}px 0`, c.style.minHeight = oe + "px", c.style.maxHeight = H + "px", r?.(), requestAnimationFrame(() => x.current = !0);
    }
  }, [
    g,
    a.trigger,
    a.valueNode,
    c,
    u,
    h,
    v,
    w,
    a.dir,
    r
  ]);
  re(() => C(), [C]);
  const [N, R] = l.useState();
  re(() => {
    u && R(window.getComputedStyle(u).zIndex);
  }, [u]);
  const E = l.useCallback(
    (M) => {
      M && b.current === !0 && (C(), k?.(), b.current = !1);
    },
    [C, k]
  );
  return /* @__PURE__ */ n(
    Mu,
    {
      scope: o,
      contentWrapper: c,
      shouldExpandOnScrollRef: x,
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
              ref: m,
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
na.displayName = Lu;
var Ru = "SelectPopperPosition", Lo = l.forwardRef((e, t) => {
  const {
    __scopeSelect: o,
    align: r = "start",
    collisionPadding: s = le,
    ...a
  } = e, i = to(o);
  return /* @__PURE__ */ n(
    Vd,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Lo.displayName = Ru;
var [Mu, Qo] = it(je, {}), Ro = "SelectViewport", sa = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, nonce: r, ...s } = e, a = ze(Ro, o), i = Qo(Ro, o), c = U(t, a.onViewportChange), d = l.useRef(0);
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
      /* @__PURE__ */ n(Jt.Slot, { scope: o, children: /* @__PURE__ */ n(
        D.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
          ref: c,
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
            const f = u.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: g } = i;
            if (g?.current && m) {
              const x = Math.abs(d.current - f.scrollTop);
              if (x > 0) {
                const b = window.innerHeight - le * 2, h = parseFloat(m.style.minHeight), v = parseFloat(m.style.height), w = Math.max(h, v);
                if (w < b) {
                  const k = w + x, C = Math.min(b, k), N = k - C;
                  m.style.height = C + "px", m.style.bottom === "0px" && (f.scrollTop = N > 0 ? N : 0, m.style.justifyContent = "flex-end");
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
sa.displayName = Ro;
var aa = "SelectGroup", [Eu, Au] = it(aa), ia = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e, s = Ee();
    return /* @__PURE__ */ n(Eu, { scope: o, id: s, children: /* @__PURE__ */ n(D.div, { role: "group", "aria-labelledby": s, ...r, ref: t }) });
  }
);
ia.displayName = aa;
var ca = "SelectLabel", la = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e, s = Au(ca, o);
    return /* @__PURE__ */ n(D.div, { id: s.id, ...r, ref: t });
  }
);
la.displayName = ca;
var zt = "SelectItem", [Iu, da] = it(zt), ua = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: o,
      value: r,
      disabled: s = !1,
      textValue: a,
      ...i
    } = e, c = Oe(zt, o), d = ze(zt, o), u = c.value === r, [f, m] = l.useState(a ?? ""), [g, x] = l.useState(!1), b = U(
      t,
      (k) => d.itemRefCallback?.(k, r, s)
    ), h = Ee(), v = l.useRef("touch"), w = () => {
      s || (c.onValueChange(r), c.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ n(
      Iu,
      {
        scope: o,
        value: r,
        disabled: s,
        textId: h,
        isSelected: u,
        onItemTextChange: l.useCallback((k) => {
          m((C) => C || (k?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ n(
          Jt.ItemSlot,
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
                ...i,
                ref: b,
                onFocus: z(i.onFocus, () => x(!0)),
                onBlur: z(i.onBlur, () => x(!1)),
                onClick: z(i.onClick, () => {
                  v.current !== "mouse" && w();
                }),
                onPointerUp: z(i.onPointerUp, () => {
                  v.current === "mouse" && w();
                }),
                onPointerDown: z(i.onPointerDown, (k) => {
                  v.current = k.pointerType;
                }),
                onPointerMove: z(i.onPointerMove, (k) => {
                  v.current = k.pointerType, s ? d.onItemLeave?.() : v.current === "mouse" && k.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: z(i.onPointerLeave, (k) => {
                  k.currentTarget === document.activeElement && d.onItemLeave?.();
                }),
                onKeyDown: z(i.onKeyDown, (k) => {
                  d.searchRef?.current !== "" && k.key === " " || (vu.includes(k.key) && w(), k.key === " " && k.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ua.displayName = zt;
var dt = "SelectItemText", fa = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, className: r, style: s, ...a } = e, i = Oe(dt, o), c = ze(dt, o), d = da(dt, o), u = wu(dt, o), [f, m] = l.useState(null), g = U(
      t,
      (w) => m(w),
      d.onItemTextChange,
      (w) => c.itemTextRefCallback?.(w, d.value, d.disabled)
    ), x = f?.textContent, b = l.useMemo(
      () => /* @__PURE__ */ n("option", { value: d.value, disabled: d.disabled, children: x }, d.value),
      [d.disabled, d.value, x]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = u;
    return re(() => (h(b), () => v(b)), [h, v, b]), /* @__PURE__ */ y(te, { children: [
      /* @__PURE__ */ n(D.span, { id: d.textId, ...a, ref: g }),
      d.isSelected && i.valueNode && !i.valueNodeHasChildren ? Bt.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
fa.displayName = dt;
var pa = "SelectItemIndicator", ma = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e;
    return da(pa, o).isSelected ? /* @__PURE__ */ n(D.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
ma.displayName = pa;
var Mo = "SelectScrollUpButton", ha = l.forwardRef((e, t) => {
  const o = ze(Mo, e.__scopeSelect), r = Qo(Mo, e.__scopeSelect), [s, a] = l.useState(!1), i = U(t, r.onScrollButtonChange);
  return re(() => {
    if (o.viewport && o.isPositioned) {
      let c = function() {
        const u = d.scrollTop > 0;
        a(u);
      };
      const d = o.viewport;
      return c(), d.addEventListener("scroll", c), () => d.removeEventListener("scroll", c);
    }
  }, [o.viewport, o.isPositioned]), s ? /* @__PURE__ */ n(
    va,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: d } = o;
        c && d && (c.scrollTop = c.scrollTop - d.offsetHeight);
      }
    }
  ) : null;
});
ha.displayName = Mo;
var Eo = "SelectScrollDownButton", ga = l.forwardRef((e, t) => {
  const o = ze(Eo, e.__scopeSelect), r = Qo(Eo, e.__scopeSelect), [s, a] = l.useState(!1), i = U(t, r.onScrollButtonChange);
  return re(() => {
    if (o.viewport && o.isPositioned) {
      let c = function() {
        const u = d.scrollHeight - d.clientHeight, f = Math.ceil(d.scrollTop) < u;
        a(f);
      };
      const d = o.viewport;
      return c(), d.addEventListener("scroll", c), () => d.removeEventListener("scroll", c);
    }
  }, [o.viewport, o.isPositioned]), s ? /* @__PURE__ */ n(
    va,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: d } = o;
        c && d && (c.scrollTop = c.scrollTop + d.offsetHeight);
      }
    }
  ) : null;
});
ga.displayName = Eo;
var va = l.forwardRef((e, t) => {
  const { __scopeSelect: o, onAutoScroll: r, ...s } = e, a = ze("SelectScrollButton", o), i = l.useRef(null), c = eo(o), d = l.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return l.useEffect(() => () => d(), [d]), re(() => {
    c().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ n(
    D.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: z(s.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: z(s.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: z(s.onPointerLeave, () => {
        d();
      })
    }
  );
}), Pu = "SelectSeparator", xa = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e;
    return /* @__PURE__ */ n(D.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
xa.displayName = Pu;
var Ao = "SelectArrow", Tu = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: o, ...r } = e, s = to(o), a = Oe(Ao, o), i = ze(Ao, o);
    return a.open && i.position === "popper" ? /* @__PURE__ */ n(Fd, { ...s, ...r, ref: t }) : null;
  }
);
Tu.displayName = Ao;
var Du = "SelectBubbleInput", ba = l.forwardRef(
  ({ __scopeSelect: e, value: t, ...o }, r) => {
    const s = l.useRef(null), a = U(r, s), i = $t(t);
    return l.useEffect(() => {
      const c = s.current;
      if (!c) return;
      const d = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        d,
        "value"
      ).set;
      if (i !== t && f) {
        const m = new Event("change", { bubbles: !0 });
        f.call(c, t), c.dispatchEvent(m);
      }
    }, [i, t]), /* @__PURE__ */ n(
      D.select,
      {
        ...o,
        style: { ...Yr, ...o.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
ba.displayName = Du;
function ya(e) {
  return e === "" || e === void 0;
}
function wa(e) {
  const t = Pe(e), o = l.useRef(""), r = l.useRef(0), s = l.useCallback(
    (i) => {
      const c = o.current + i;
      t(c), (function d(u) {
        o.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => d(""), 1e3));
      })(c);
    },
    [t]
  ), a = l.useCallback(() => {
    o.current = "", window.clearTimeout(r.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [o, s, a];
}
function ka(e, t, o) {
  const s = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = o ? e.indexOf(o) : -1;
  let i = Ou(e, Math.max(a, 0));
  s.length === 1 && (i = i.filter((u) => u !== o));
  const d = i.find(
    (u) => u.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return d !== o ? d : void 0;
}
function Ou(e, t) {
  return e.map((o, r) => e[(t + r) % e.length]);
}
var zu = Ys, Ca = Xs, _u = Qs, Bu = Js, Wu = ea, Na = ta, Vu = sa, Fu = ia, Sa = la, La = ua, Hu = fa, $u = ma, Ra = ha, Ma = ga, Ea = xa, oo = "Switch", [ju] = ie(oo), [Uu, Gu] = ju(oo), Aa = l.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: o,
      name: r,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      value: d = "on",
      onCheckedChange: u,
      form: f,
      ...m
    } = e, [g, x] = l.useState(null), b = U(t, (C) => x(C)), h = l.useRef(!1), v = g ? f || !!g.closest("form") : !0, [w, k] = Ie({
      prop: s,
      defaultProp: a ?? !1,
      onChange: u,
      caller: oo
    });
    return /* @__PURE__ */ y(Uu, { scope: o, checked: w, disabled: c, children: [
      /* @__PURE__ */ n(
        D.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": Da(w),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: d,
          ...m,
          ref: b,
          onClick: z(e.onClick, (C) => {
            k((N) => !N), v && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ n(
        Ta,
        {
          control: g,
          bubbles: !h.current,
          name: r,
          value: d,
          checked: w,
          required: i,
          disabled: c,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Aa.displayName = oo;
var Ia = "SwitchThumb", Pa = l.forwardRef(
  (e, t) => {
    const { __scopeSwitch: o, ...r } = e, s = Gu(Ia, o);
    return /* @__PURE__ */ n(
      D.span,
      {
        "data-state": Da(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Pa.displayName = Ia;
var Ku = "SwitchBubbleInput", Ta = l.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: o,
    bubbles: r = !0,
    ...s
  }, a) => {
    const i = l.useRef(null), c = U(i, a), d = $t(o), u = jt(t);
    return l.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, x = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (d !== o && x) {
        const b = new Event("click", { bubbles: r });
        x.call(f, o), f.dispatchEvent(b);
      }
    }, [d, o, r]), /* @__PURE__ */ n(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: o,
        ...s,
        tabIndex: -1,
        ref: c,
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
Ta.displayName = Ku;
function Da(e) {
  return e ? "checked" : "unchecked";
}
var Oa = Aa, Yu = Pa, ro = "Tabs", [qu] = ie(ro, [
  Xt
]), za = Xt(), [Xu, Jo] = qu(ro), _a = l.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: s,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: c,
      activationMode: d = "automatic",
      ...u
    } = e, f = Wt(c), [m, g] = Ie({
      prop: r,
      onChange: s,
      defaultProp: a ?? "",
      caller: ro
    });
    return /* @__PURE__ */ n(
      Xu,
      {
        scope: o,
        baseId: Ee(),
        value: m,
        onValueChange: g,
        orientation: i,
        dir: f,
        activationMode: d,
        children: /* @__PURE__ */ n(
          D.div,
          {
            dir: f,
            "data-orientation": i,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
_a.displayName = ro;
var Ba = "TabsList", Wa = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, loop: r = !0, ...s } = e, a = Jo(Ba, o), i = za(o);
    return /* @__PURE__ */ n(
      Ls,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ n(
          D.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Wa.displayName = Ba;
var Va = "TabsTrigger", Fa = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, value: r, disabled: s = !1, ...a } = e, i = Jo(Va, o), c = za(o), d = ja(i.baseId, r), u = Ua(i.baseId, r), f = r === i.value;
    return /* @__PURE__ */ n(
      Rs,
      {
        asChild: !0,
        ...c,
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
            ...a,
            ref: t,
            onMouseDown: z(e.onMouseDown, (m) => {
              !s && m.button === 0 && m.ctrlKey === !1 ? i.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: z(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && i.onValueChange(r);
            }),
            onFocus: z(e.onFocus, () => {
              const m = i.activationMode !== "manual";
              !f && !s && m && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Fa.displayName = Va;
var Ha = "TabsContent", $a = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, value: r, forceMount: s, children: a, ...i } = e, c = Jo(Ha, o), d = ja(c.baseId, r), u = Ua(c.baseId, r), f = r === c.value, m = l.useRef(f);
    return l.useEffect(() => {
      const g = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ n(Ue, { present: s || f, children: ({ present: g }) => /* @__PURE__ */ n(
      D.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": d,
        hidden: !g,
        id: u,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: m.current ? "0s" : void 0
        },
        children: g && a
      }
    ) });
  }
);
$a.displayName = Ha;
function ja(e, t) {
  return `${e}-trigger-${t}`;
}
function Ua(e, t) {
  return `${e}-content-${t}`;
}
var Ga = _a, er = Wa, tr = Fa, Ka = $a;
const Zu = (e, t) => {
  const o = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    o[r] = e[r];
  for (let r = 0; r < t.length; r++)
    o[e.length + r] = t[r];
  return o;
}, Qu = (e, t) => ({
  classGroupId: e,
  validator: t
}), Ya = (e = /* @__PURE__ */ new Map(), t = null, o) => ({
  nextPart: e,
  validators: t,
  classGroupId: o
}), _t = "-", zr = [], Ju = "arbitrary..", ef = (e) => {
  const t = of(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return tf(i);
      const c = i.split(_t), d = c[0] === "" && c.length > 1 ? 1 : 0;
      return qa(c, d, t);
    },
    getConflictingClassGroupIds: (i, c) => {
      if (c) {
        const d = r[i], u = o[i];
        return d ? u ? Zu(u, d) : d : u || zr;
      }
      return o[i] || zr;
    }
  };
}, qa = (e, t, o) => {
  if (e.length - t === 0)
    return o.classGroupId;
  const s = e[t], a = o.nextPart.get(s);
  if (a) {
    const u = qa(e, t + 1, a);
    if (u) return u;
  }
  const i = o.validators;
  if (i === null)
    return;
  const c = t === 0 ? e.join(_t) : e.slice(t).join(_t), d = i.length;
  for (let u = 0; u < d; u++) {
    const f = i[u];
    if (f.validator(c))
      return f.classGroupId;
  }
}, tf = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), o = t.indexOf(":"), r = t.slice(0, o);
  return r ? Ju + r : void 0;
})(), of = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e;
  return rf(o, t);
}, rf = (e, t) => {
  const o = Ya();
  for (const r in e) {
    const s = e[r];
    or(s, o, r, t);
  }
  return o;
}, or = (e, t, o, r) => {
  const s = e.length;
  for (let a = 0; a < s; a++) {
    const i = e[a];
    nf(i, t, o, r);
  }
}, nf = (e, t, o, r) => {
  if (typeof e == "string") {
    sf(e, t, o);
    return;
  }
  if (typeof e == "function") {
    af(e, t, o, r);
    return;
  }
  cf(e, t, o, r);
}, sf = (e, t, o) => {
  const r = e === "" ? t : Xa(t, e);
  r.classGroupId = o;
}, af = (e, t, o, r) => {
  if (lf(e)) {
    or(e(r), t, o, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Qu(o, e));
}, cf = (e, t, o, r) => {
  const s = Object.entries(e), a = s.length;
  for (let i = 0; i < a; i++) {
    const [c, d] = s[i];
    or(d, Xa(t, c), o, r);
  }
}, Xa = (e, t) => {
  let o = e;
  const r = t.split(_t), s = r.length;
  for (let a = 0; a < s; a++) {
    const i = r[a];
    let c = o.nextPart.get(i);
    c || (c = Ya(), o.nextPart.set(i, c)), o = c;
  }
  return o;
}, lf = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, df = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const s = (a, i) => {
    o[a] = i, t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let i = o[a];
      if (i !== void 0)
        return i;
      if ((i = r[a]) !== void 0)
        return s(a, i), i;
    },
    set(a, i) {
      a in o ? o[a] = i : s(a, i);
    }
  };
}, Io = "!", _r = ":", uf = [], Br = (e, t, o, r, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: s
}), ff = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (s) => {
    const a = [];
    let i = 0, c = 0, d = 0, u;
    const f = s.length;
    for (let h = 0; h < f; h++) {
      const v = s[h];
      if (i === 0 && c === 0) {
        if (v === _r) {
          a.push(s.slice(d, h)), d = h + 1;
          continue;
        }
        if (v === "/") {
          u = h;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" ? i-- : v === "(" ? c++ : v === ")" && c--;
    }
    const m = a.length === 0 ? s : s.slice(d);
    let g = m, x = !1;
    m.endsWith(Io) ? (g = m.slice(0, -1), x = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(Io) && (g = m.slice(1), x = !0)
    );
    const b = u && u > d ? u - d : void 0;
    return Br(a, x, g, b);
  };
  if (t) {
    const s = t + _r, a = r;
    r = (i) => i.startsWith(s) ? a(i.slice(s.length)) : Br(uf, !1, i, void 0, !0);
  }
  if (o) {
    const s = r;
    r = (a) => o({
      className: a,
      parseClassName: s
    });
  }
  return r;
}, pf = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((o, r) => {
    t.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let s = [];
    for (let a = 0; a < o.length; a++) {
      const i = o[a], c = i[0] === "[", d = t.has(i);
      c || d ? (s.length > 0 && (s.sort(), r.push(...s), s = []), r.push(i)) : s.push(i);
    }
    return s.length > 0 && (s.sort(), r.push(...s)), r;
  };
}, mf = (e) => ({
  cache: df(e.cacheSize),
  parseClassName: ff(e),
  sortModifiers: pf(e),
  ...ef(e)
}), hf = /\s+/, gf = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, i = [], c = e.trim().split(hf);
  let d = "";
  for (let u = c.length - 1; u >= 0; u -= 1) {
    const f = c[u], {
      isExternal: m,
      modifiers: g,
      hasImportantModifier: x,
      baseClassName: b,
      maybePostfixModifierPosition: h
    } = o(f);
    if (m) {
      d = f + (d.length > 0 ? " " + d : d);
      continue;
    }
    let v = !!h, w = r(v ? b.substring(0, h) : b);
    if (!w) {
      if (!v) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (w = r(b), !w) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      v = !1;
    }
    const k = g.length === 0 ? "" : g.length === 1 ? g[0] : a(g).join(":"), C = x ? k + Io : k, N = C + w;
    if (i.indexOf(N) > -1)
      continue;
    i.push(N);
    const R = s(w, v);
    for (let E = 0; E < R.length; ++E) {
      const M = R[E];
      i.push(C + M);
    }
    d = f + (d.length > 0 ? " " + d : d);
  }
  return d;
}, vf = (...e) => {
  let t = 0, o, r, s = "";
  for (; t < e.length; )
    (o = e[t++]) && (r = Za(o)) && (s && (s += " "), s += r);
  return s;
}, Za = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Za(e[r])) && (o && (o += " "), o += t);
  return o;
}, xf = (e, ...t) => {
  let o, r, s, a;
  const i = (d) => {
    const u = t.reduce((f, m) => m(f), e());
    return o = mf(u), r = o.cache.get, s = o.cache.set, a = c, c(d);
  }, c = (d) => {
    const u = r(d);
    if (u)
      return u;
    const f = gf(d, o);
    return s(d, f), f;
  };
  return a = i, (...d) => a(vf(...d));
}, bf = [], ee = (e) => {
  const t = (o) => o[e] || bf;
  return t.isThemeGetter = !0, t;
}, Qa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ja = /^\((?:(\w[\w-]*):)?(.+)\)$/i, yf = /^\d+\/\d+$/, wf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Nf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ze = (e) => yf.test(e), _ = (e) => !!e && !Number.isNaN(Number(e)), Re = (e) => !!e && Number.isInteger(Number(e)), xo = (e) => e.endsWith("%") && _(e.slice(0, -1)), ke = (e) => wf.test(e), ei = () => !0, Lf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kf.test(e) && !Cf.test(e)
), rr = () => !1, Rf = (e) => Nf.test(e), Mf = (e) => Sf.test(e), Ef = (e) => !I(e) && !P(e), Af = (e) => _e(e, ri, rr), I = (e) => Qa.test(e), Ve = (e) => _e(e, ni, Lf), Wr = (e) => _e(e, Bf, _), If = (e) => _e(e, ai, ei), Pf = (e) => _e(e, si, rr), Vr = (e) => _e(e, ti, rr), Tf = (e) => _e(e, oi, Mf), St = (e) => _e(e, ii, Rf), P = (e) => Ja.test(e), lt = (e) => Ge(e, ni), Df = (e) => Ge(e, si), Fr = (e) => Ge(e, ti), Of = (e) => Ge(e, ri), zf = (e) => Ge(e, oi), Lt = (e) => Ge(e, ii, !0), _f = (e) => Ge(e, ai, !0), _e = (e, t, o) => {
  const r = Qa.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, Ge = (e, t, o = !1) => {
  const r = Ja.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, ti = (e) => e === "position" || e === "percentage", oi = (e) => e === "image" || e === "url", ri = (e) => e === "length" || e === "size" || e === "bg-size", ni = (e) => e === "length", Bf = (e) => e === "number", si = (e) => e === "family-name", ai = (e) => e === "number" || e === "weight", ii = (e) => e === "shadow", Wf = () => {
  const e = ee("color"), t = ee("font"), o = ee("text"), r = ee("font-weight"), s = ee("tracking"), a = ee("leading"), i = ee("breakpoint"), c = ee("container"), d = ee("spacing"), u = ee("radius"), f = ee("shadow"), m = ee("inset-shadow"), g = ee("text-shadow"), x = ee("drop-shadow"), b = ee("blur"), h = ee("perspective"), v = ee("aspect"), w = ee("ease"), k = ee("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
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
  }, Re, P, I], H = () => [Re, "auto", P, I], $ = () => ["auto", "min", "max", "fr", P, I], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], j = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], T = () => ["auto", ...S()], W = () => [Ze, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], L = () => [e, P, I], K = () => [...N(), Fr, Vr, {
    position: [P, I]
  }], oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], pe = () => ["auto", "cover", "contain", Of, Af, {
    size: [P, I]
  }], we = () => [xo, lt, Ve], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    P,
    I
  ], Z = () => ["", _, lt, Ve], ce = () => ["solid", "dashed", "dotted", "double"], me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => [_, xo, Fr, Vr], q = () => [
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
      color: [ei],
      container: [ke],
      "drop-shadow": [ke],
      ease: ["in", "out", "in-out"],
      font: [Ef],
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
        aspect: ["auto", "square", Ze, I, P, v]
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
        columns: [_, I, P, c]
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
        basis: [Ze, "full", "auto", c, ...S()]
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
        w: [c, "screen", ...W()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
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
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
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
        text: ["base", o, lt, Ve]
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
        font: [r, _f, If]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", xo, I]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Df, Pf, t]
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
        "line-clamp": [_, "none", P, Wr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
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
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [_, "from-font", "auto", P, Ve]
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
        }, zf, Tf]
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
        border: [...ce(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ce(), "hidden", "none"]
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
        outline: [...ce(), "none", "hidden"]
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
        outline: ["", _, lt, Ve]
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
          Lt,
          St
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
        "inset-shadow": ["none", m, Lt, St]
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
        "ring-offset": [_, Ve]
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
        "text-shadow": ["none", g, Lt, St]
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
          x,
          Lt,
          St
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
        stroke: [_, lt, Ve, Wr]
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
}, Vf = /* @__PURE__ */ xf(Wf);
function p(...e) {
  return Vf(Ur(e));
}
const nr = ft(
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
        /** Default - 기본 버튼 (36px) */
        default: "h-9 px-4 rounded-lg text-[14px]",
        /** Large - 주요 CTA, Dialog 버튼 (44px) */
        lg: "h-11 px-5 rounded-xl text-[15px]",
        /** Extra Large - Dialog/하단 고정 CTA (48px) */
        xl: "h-12 px-6 rounded-xl text-[16px]",
        /** 아이콘 버튼들 */
        icon: "size-9 rounded-lg",
        "icon-sm": "size-7 rounded-md",
        "icon-lg": "size-11 rounded-xl"
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
), ci = l.forwardRef(
  ({ className: e, variant: t, size: o, fullWidth: r, asChild: s = !1, loading: a = !1, disabled: i, children: c, ...d }, u) => /* @__PURE__ */ n(
    s ? Si : "button",
    {
      ref: u,
      "data-slot": "button",
      "data-variant": t,
      "data-size": o,
      disabled: i || a,
      className: p(nr({ variant: t, size: o, fullWidth: r, className: e })),
      ...d,
      children: a ? /* @__PURE__ */ y(te, { children: [
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
      ] }) : c
    }
  )
);
ci.displayName = "Button";
function zg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card",
      className: p(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function _g({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-header",
      className: p(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function Bg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-title",
      className: p("leading-none font-semibold", e),
      ...t
    }
  );
}
function Wg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-description",
      className: p("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Vg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-action",
      className: p(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function Fg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-content",
      className: p("px-6", e),
      ...t
    }
  );
}
function Hg({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "card-footer",
      className: p("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const li = (...e) => e.filter((t, o, r) => !!t && t.trim() !== "" && r.indexOf(t) === o).join(" ").trim();
const Ff = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Hf = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, r) => r ? r.toUpperCase() : o.toLowerCase()
);
const Hr = (e) => {
  const t = Hf(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var $f = {
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
const jf = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Uf = $r(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: a,
    iconNode: i,
    ...c
  }, d) => bo(
    "svg",
    {
      ref: d,
      ...$f,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(o) * 24 / Number(t) : o,
      className: li("lucide", s),
      ...!a && !jf(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...i.map(([u, f]) => bo(u, f)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const Ke = (e, t) => {
  const o = $r(
    ({ className: r, ...s }, a) => bo(Uf, {
      ref: a,
      iconNode: t,
      className: li(
        `lucide-${Ff(Hr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return o.displayName = Hr(e), o;
};
const Gf = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], sr = Ke("check", Gf);
const Kf = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], di = Ke("chevron-down", Kf);
const Yf = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ui = Ke("chevron-right", Yf);
const qf = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Xf = Ke("chevron-up", qf);
const Zf = [["path", { d: "M5 12h14", key: "1ays0h" }]], Qf = Ke("minus", Zf);
const Jf = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ep = Ke("search", Jf);
const tp = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ct = Ke("x", tp), op = l.forwardRef(
  ({
    className: e,
    type: t,
    clearable: o,
    onClear: r,
    leftElement: s,
    rightElement: a,
    error: i,
    success: c,
    value: d,
    ...u
  }, f) => {
    const m = d !== void 0 && d !== "";
    return s || a || o ? /* @__PURE__ */ y("div", { className: "relative", children: [
      s && /* @__PURE__ */ n("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none", children: s }),
      /* @__PURE__ */ n(
        "input",
        {
          type: t,
          ref: f,
          "data-slot": "input",
          value: d,
          className: p(
            // 토스 스타일 Input
            "w-full h-10 rounded-xl",
            "bg-muted border-0",
            "text-[15px] text-foreground placeholder:text-muted-foreground",
            "transition-all duration-150",
            "outline-none",
            "focus:ring-2 focus:ring-primary/30 focus:bg-background",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            // 패딩 조정
            s ? "pl-11" : "px-4",
            a || o ? "pr-11" : "px-4",
            // 상태별 스타일
            i && "ring-2 ring-destructive/30 bg-[#FFEBEE]/30",
            c && "ring-2 ring-[#30C85E]/30 bg-[#E5F9ED]/30",
            e
          ),
          ...u
        }
      ),
      o && m || a ? /* @__PURE__ */ y("div", { className: "absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2", children: [
        o && m && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: r,
            className: "p-1 rounded-full bg-[#B0B8C1] text-white hover:bg-[#8B95A1] transition-colors",
            children: /* @__PURE__ */ n(ct, { className: "size-3.5", strokeWidth: 2.5 })
          }
        ),
        a && !o && /* @__PURE__ */ n("div", { className: "text-muted-foreground", children: a })
      ] }) : null
    ] }) : /* @__PURE__ */ n(
      "input",
      {
        type: t,
        ref: f,
        "data-slot": "input",
        value: d,
        className: p(
          // 토스 스타일 Input
          "w-full h-10 px-3.5 rounded-xl",
          "bg-muted border-0",
          "text-[15px] text-foreground placeholder:text-muted-foreground",
          "transition-all duration-150",
          "outline-none",
          "focus:ring-2 focus:ring-primary/30 focus:bg-background",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          // 상태별 스타일
          i && "ring-2 ring-destructive/30 bg-[#FFEBEE]/30",
          c && "ring-2 ring-[#30C85E]/30 bg-[#E5F9ED]/30",
          e
        ),
        ...u
      }
    );
  }
);
op.displayName = "Input";
const rp = l.forwardRef(
  ({ className: e, value: t, onClear: o, ...r }, s) => {
    const a = t !== void 0 && t !== "";
    return /* @__PURE__ */ y("div", { className: "relative", children: [
      /* @__PURE__ */ n("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none", children: /* @__PURE__ */ n(ep, { className: "size-5" }) }),
      /* @__PURE__ */ n(
        "input",
        {
          ref: s,
          type: "search",
          value: t,
          "data-slot": "search-input",
          className: p(
            // 토스 스타일 검색 Input
            "w-full h-12 rounded-[14px]",
            "bg-muted border-0",
            "text-[15px] text-foreground placeholder:text-muted-foreground",
            "transition-all duration-150",
            "outline-none pl-11",
            a ? "pr-11" : "pr-4",
            "focus:ring-2 focus:ring-primary/30 focus:bg-background",
            // 기본 search input 스타일 제거
            "[&::-webkit-search-cancel-button]:hidden",
            "[&::-webkit-search-decoration]:hidden",
            e
          ),
          ...r
        }
      ),
      a && o && /* @__PURE__ */ n(
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
rp.displayName = "SearchInput";
const np = l.forwardRef(
  ({ className: e, ...t }, o) => /* @__PURE__ */ n(
    "textarea",
    {
      ref: o,
      "data-slot": "textarea",
      className: p(
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
np.displayName = "Textarea";
function $g({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ n(
    Jd,
    {
      "data-slot": "label",
      className: p(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const sp = ft(
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
function jg({ className: e, variant: t, size: o, ...r }) {
  return /* @__PURE__ */ n(
    "span",
    {
      "data-slot": "badge",
      className: p(sp({ variant: t, size: o }), e),
      ...r
    }
  );
}
const ap = ft(
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
function Ug({
  className: e,
  variant: t,
  size: o,
  selected: r = !1,
  onSelect: s,
  children: a,
  ...i
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      "data-slot": "chip",
      "data-selected": r,
      onClick: s,
      className: p(
        ap({
          variant: r ? "selected" : t,
          size: o
        }),
        e
      ),
      ...i,
      children: a
    }
  );
}
const ip = ft(
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
), cp = l.forwardRef(
  ({ className: e, size: t, shape: o, src: r, alt: s, fallback: a, children: i, ...c }, d) => {
    const [u, f] = l.useState(!1), m = l.useMemo(() => a ? a.charAt(0).toUpperCase() : s ? s.charAt(0).toUpperCase() : "?", [a, s]);
    return /* @__PURE__ */ n(
      "div",
      {
        ref: d,
        "data-slot": "avatar",
        className: p(ip({ size: t, shape: o }), e),
        ...c,
        children: r && !u ? /* @__PURE__ */ n(
          "img",
          {
            src: r,
            alt: s || "Avatar",
            onError: () => f(!0),
            className: "aspect-square size-full object-cover"
          }
        ) : i || /* @__PURE__ */ n("div", { className: "flex size-full items-center justify-center bg-muted text-muted-foreground font-semibold", children: m })
      }
    );
  }
);
cp.displayName = "Avatar";
const lp = l.forwardRef(
  ({ className: e, max: t = 4, children: o, ...r }, s) => {
    const a = l.Children.toArray(o), i = a.slice(0, t), c = a.length - t;
    return /* @__PURE__ */ y(
      "div",
      {
        ref: s,
        "data-slot": "avatar-group",
        className: p("flex -space-x-3", e),
        ...r,
        children: [
          i.map((d, u) => /* @__PURE__ */ n(
            "div",
            {
              className: "ring-2 ring-background rounded-full",
              style: { zIndex: i.length - u },
              children: d
            },
            u
          )),
          c > 0 && /* @__PURE__ */ y(
            "div",
            {
              className: "flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground text-[12px] font-semibold ring-2 ring-background",
              style: { zIndex: 0 },
              children: [
                "+",
                c
              ]
            }
          )
        ]
      }
    );
  }
);
lp.displayName = "AvatarGroup";
const dp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Oa,
  {
    ref: o,
    "data-slot": "switch",
    className: p(
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
      Yu,
      {
        className: p(
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
dp.displayName = Oa.displayName;
const up = l.forwardRef(
  ({ className: e, pressed: t = !1, onPressedChange: o, children: r, ...s }, a) => /* @__PURE__ */ n(
    "button",
    {
      ref: a,
      type: "button",
      role: "switch",
      "aria-checked": t,
      "data-state": t ? "on" : "off",
      onClick: () => o?.(!t),
      className: p(
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
up.displayName = "Toggle";
const fi = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Vo,
  {
    ref: o,
    "data-slot": "checkbox",
    className: p(
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
      qn,
      {
        className: p("flex items-center justify-center text-primary-foreground"),
        children: t.checked === "indeterminate" ? /* @__PURE__ */ n(Qf, { className: "size-4 stroke-[3]" }) : /* @__PURE__ */ n(sr, { className: "size-4 stroke-[3]" })
      }
    )
  }
));
fi.displayName = Vo.displayName;
const fp = l.forwardRef(({ className: e, label: t, description: o, id: r, ...s }, a) => {
  const i = l.useId(), c = r || i;
  return /* @__PURE__ */ y(
    "label",
    {
      htmlFor: c,
      className: p(
        "flex items-start gap-3 p-3 -m-3 rounded-xl cursor-pointer",
        "transition-colors hover:bg-muted/30",
        s.disabled && "cursor-not-allowed opacity-40"
      ),
      children: [
        /* @__PURE__ */ n(fi, { ref: a, id: c, className: e, ...s }),
        /* @__PURE__ */ y("div", { className: "flex flex-col gap-0.5 select-none", children: [
          /* @__PURE__ */ n("span", { className: "text-[15px] font-medium text-foreground leading-6", children: t }),
          o && /* @__PURE__ */ n("span", { className: "text-[13px] text-muted-foreground", children: o })
        ] })
      ]
    }
  );
});
fp.displayName = "CheckboxWithLabel";
const pp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Gs,
  {
    ref: o,
    "data-slot": "radio-group",
    className: p("flex flex-col gap-3", e),
    ...t
  }
));
pp.displayName = Gs.displayName;
const mp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Qt,
  {
    ref: o,
    "data-slot": "radio-group-item",
    className: p(
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
    children: /* @__PURE__ */ n(Ks, { className: "flex items-center justify-center size-full", children: /* @__PURE__ */ n("div", { className: "size-3 rounded-full bg-primary" }) })
  }
));
mp.displayName = Qt.displayName;
const hp = l.forwardRef(({ className: e, label: t, description: o, ...r }, s) => /* @__PURE__ */ y(
  "label",
  {
    className: p(
      "flex items-start gap-3 p-3 -m-3 rounded-xl cursor-pointer",
      "transition-colors hover:bg-muted/30",
      r.disabled && "cursor-not-allowed opacity-40"
    ),
    children: [
      /* @__PURE__ */ n(
        Qt,
        {
          ref: s,
          "data-slot": "radio-with-label",
          className: p(
            "aspect-square size-[22px] shrink-0 rounded-full mt-0.5",
            "border-2 border-[#D1D6DB]",
            "transition-all duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
            "disabled:cursor-not-allowed disabled:opacity-40",
            "data-[state=checked]:border-primary",
            e
          ),
          ...r,
          children: /* @__PURE__ */ n(Ks, { className: "flex items-center justify-center size-full", children: /* @__PURE__ */ n("div", { className: "size-3 rounded-full bg-primary" }) })
        }
      ),
      /* @__PURE__ */ y("div", { className: "flex flex-col gap-0.5 select-none", children: [
        /* @__PURE__ */ n("span", { className: "text-[15px] font-medium text-foreground leading-6", children: t }),
        o && /* @__PURE__ */ n("span", { className: "text-[13px] text-muted-foreground", children: o })
      ] })
    ]
  }
));
hp.displayName = "RadioWithLabel";
const gp = l.forwardRef(({ className: e, label: t, description: o, ...r }, s) => /* @__PURE__ */ y(
  Qt,
  {
    ref: s,
    "data-slot": "radio-card",
    className: p(
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
          className: p(
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
gp.displayName = "RadioCard";
const Gg = zu, Kg = Fu, Yg = _u, vp = l.forwardRef(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ y(
  Ca,
  {
    ref: r,
    "data-slot": "select-trigger",
    className: p(
      // 토스 스타일 Select Trigger
      "flex h-12 w-full items-center justify-between gap-2",
      "px-4 rounded-xl bg-muted",
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
      /* @__PURE__ */ n(Bu, { asChild: !0, children: /* @__PURE__ */ n(di, { className: "size-5 text-muted-foreground shrink-0" }) })
    ]
  }
));
vp.displayName = Ca.displayName;
const pi = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Ra,
  {
    ref: o,
    className: p(
      "flex cursor-default items-center justify-center py-2",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(Xf, { className: "size-4" })
  }
));
pi.displayName = Ra.displayName;
const mi = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Ma,
  {
    ref: o,
    className: p(
      "flex cursor-default items-center justify-center py-2",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(di, { className: "size-4" })
  }
));
mi.displayName = Ma.displayName;
const xp = l.forwardRef(({ className: e, children: t, position: o = "popper", ...r }, s) => /* @__PURE__ */ n(Wu, { children: /* @__PURE__ */ y(
  Na,
  {
    ref: s,
    "data-slot": "select-content",
    className: p(
      // 토스 스타일 Select Content
      "relative z-50 max-h-80 min-w-[8rem] overflow-hidden",
      "rounded-2xl bg-card text-foreground",
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
      /* @__PURE__ */ n(pi, {}),
      /* @__PURE__ */ n(
        Vu,
        {
          className: p(
            "p-2",
            o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ n(mi, {})
    ]
  }
) }));
xp.displayName = Na.displayName;
const bp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Sa,
  {
    ref: o,
    "data-slot": "select-label",
    className: p("px-3 py-2 text-[13px] font-semibold text-muted-foreground", e),
    ...t
  }
));
bp.displayName = Sa.displayName;
const yp = l.forwardRef(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ y(
  La,
  {
    ref: r,
    "data-slot": "select-item",
    className: p(
      // 토스 스타일 Select Item
      "relative flex w-full cursor-pointer select-none items-center",
      "py-3 px-3 rounded-xl",
      "text-[15px] text-foreground",
      "outline-none transition-colors",
      "focus:bg-muted",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute right-3 flex size-5 items-center justify-center", children: /* @__PURE__ */ n($u, { children: /* @__PURE__ */ n(sr, { className: "size-5 text-primary" }) }) }),
      /* @__PURE__ */ n(Hu, { children: t })
    ]
  }
));
yp.displayName = La.displayName;
const wp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Ea,
  {
    ref: o,
    className: p("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
wp.displayName = Ea.displayName;
const qg = pt, Xg = mt, kp = ht, Zg = Se, hi = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  rt,
  {
    ref: o,
    "data-slot": "dialog-overlay",
    className: p(
      "fixed inset-0 z-50 bg-black/50",
      // 애니메이션
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
hi.displayName = rt.displayName;
const Cp = l.forwardRef(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ y(kp, { children: [
  /* @__PURE__ */ n(hi, {}),
  /* @__PURE__ */ y(
    nt,
    {
      ref: r,
      "data-slot": "dialog-content",
      className: p(
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
            className: p(
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
Cp.displayName = nt.displayName;
const Np = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "dialog-header",
    className: p("flex flex-col gap-2 text-center sm:text-left", e),
    ...t
  }
);
Np.displayName = "DialogHeader";
const Sp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "dialog-footer",
    className: p(
      "flex flex-row gap-2 mt-5",
      e
    ),
    ...t
  }
);
Sp.displayName = "DialogFooter";
const Lp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  gt,
  {
    ref: o,
    "data-slot": "dialog-title",
    className: p("text-[20px] font-bold text-foreground", e),
    ...t
  }
));
Lp.displayName = gt.displayName;
const Rp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Ht,
  {
    ref: o,
    "data-slot": "dialog-description",
    className: p("text-[15px] text-muted-foreground", e),
    ...t
  }
));
Rp.displayName = Ht.displayName;
const Qg = fl, Jg = pl, Mp = ml, gi = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Vn,
  {
    ref: o,
    "data-slot": "alert-dialog-overlay",
    className: p(
      "fixed inset-0 z-50 bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
gi.displayName = Vn.displayName;
const Ep = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ y(Mp, { children: [
  /* @__PURE__ */ n(gi, {}),
  /* @__PURE__ */ n(
    Fn,
    {
      ref: o,
      "data-slot": "alert-dialog-content",
      className: p(
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
Ep.displayName = Fn.displayName;
const Ap = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "alert-dialog-header",
    className: p("flex flex-col items-center text-center", e),
    ...t
  }
);
Ap.displayName = "AlertDialogHeader";
const Ip = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "alert-dialog-footer",
    className: p("flex flex-row gap-2 mt-5", e),
    ...t
  }
);
Ip.displayName = "AlertDialogFooter";
const Pp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  jn,
  {
    ref: o,
    "data-slot": "alert-dialog-title",
    className: p("text-[17px] font-bold text-foreground", e),
    ...t
  }
));
Pp.displayName = jn.displayName;
const Tp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Un,
  {
    ref: o,
    "data-slot": "alert-dialog-description",
    className: p("text-[15px] text-muted-foreground mt-2", e),
    ...t
  }
));
Tp.displayName = Un.displayName;
const Dp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Hn,
  {
    ref: o,
    className: p(nr({ size: "lg" }), "flex-1", e),
    ...t
  }
));
Dp.displayName = Hn.displayName;
const Op = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  $n,
  {
    ref: o,
    className: p(
      nr({ variant: "outline", size: "lg" }),
      "flex-1",
      e
    ),
    ...t
  }
));
Op.displayName = $n.displayName;
const ev = pt, tv = mt, ov = Se, zp = ht, vi = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  rt,
  {
    ref: o,
    "data-slot": "bottom-sheet-overlay",
    className: p(
      "fixed inset-0 z-50 bg-black/50",
      // 애니메이션
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
vi.displayName = "BottomSheetOverlay";
const _p = l.forwardRef(({ className: e, children: t, showHandle: o = !0, showClose: r = !1, ...s }, a) => /* @__PURE__ */ y(zp, { children: [
  /* @__PURE__ */ n(vi, {}),
  /* @__PURE__ */ y(
    nt,
    {
      ref: a,
      "data-slot": "bottom-sheet-content",
      className: p(
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
            className: p(
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
_p.displayName = "BottomSheetContent";
const Bp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "bottom-sheet-header",
    className: p("px-5 pt-2 pb-4", e),
    ...t
  }
);
Bp.displayName = "BottomSheetHeader";
const Wp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "bottom-sheet-body",
    className: p("px-5 pb-6", e),
    ...t
  }
);
Wp.displayName = "BottomSheetBody";
const Vp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "bottom-sheet-footer",
    className: p(
      "px-5 py-4 border-t border-border",
      "pb-[max(16px,env(safe-area-inset-bottom))]",
      e
    ),
    ...t
  }
);
Vp.displayName = "BottomSheetFooter";
const Fp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  gt,
  {
    ref: o,
    "data-slot": "bottom-sheet-title",
    className: p("text-[20px] font-bold text-foreground", e),
    ...t
  }
));
Fp.displayName = "BottomSheetTitle";
const Hp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Ht,
  {
    ref: o,
    "data-slot": "bottom-sheet-description",
    className: p("text-[15px] text-muted-foreground mt-1", e),
    ...t
  }
));
Hp.displayName = "BottomSheetDescription";
const rv = pt, nv = mt, $p = ht, xi = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  rt,
  {
    ref: o,
    "data-slot": "action-sheet-overlay",
    className: p(
      "fixed inset-0 z-50 bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
xi.displayName = "ActionSheetOverlay";
const jp = l.forwardRef(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ y($p, { children: [
  /* @__PURE__ */ n(xi, {}),
  /* @__PURE__ */ n(
    nt,
    {
      ref: r,
      "data-slot": "action-sheet-content",
      className: p(
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
jp.displayName = "ActionSheetContent";
const Up = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "action-sheet-group",
    className: p(
      "bg-card rounded-2xl overflow-hidden",
      "divide-y divide-border",
      e
    ),
    ...t
  }
);
Up.displayName = "ActionSheetGroup";
const Gp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "action-sheet-title",
    className: p(
      "px-4 py-3 text-center",
      "text-[13px] text-muted-foreground",
      e
    ),
    ...t
  }
);
Gp.displayName = "ActionSheetTitle";
const Kp = l.forwardRef(
  ({ className: e, destructive: t = !1, children: o, ...r }, s) => /* @__PURE__ */ n(
    "button",
    {
      ref: s,
      type: "button",
      "data-slot": "action-sheet-item",
      className: p(
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
Kp.displayName = "ActionSheetItem";
const Yp = l.forwardRef(({ className: e, children: t = "취소", ...o }, r) => /* @__PURE__ */ n(
  Se,
  {
    ref: r,
    "data-slot": "action-sheet-cancel",
    className: p(
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
Yp.displayName = "ActionSheetCancel";
const sv = pt, av = mt, iv = Se, qp = ht, bi = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  rt,
  {
    ref: o,
    "data-slot": "drawer-overlay",
    className: p(
      "fixed inset-0 z-50 bg-black/50",
      // 애니메이션
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
bi.displayName = "DrawerOverlay";
const Xp = l.forwardRef(({ className: e, children: t, side: o = "left", ...r }, s) => /* @__PURE__ */ y(qp, { children: [
  /* @__PURE__ */ n(bi, {}),
  /* @__PURE__ */ n(
    nt,
    {
      ref: s,
      "data-slot": "drawer-content",
      className: p(
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
Xp.displayName = "DrawerContent";
const Zp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "drawer-header",
    className: p(
      "flex items-center justify-between",
      "px-5 pt-[max(20px,env(safe-area-inset-top))] pb-4",
      "border-b border-border",
      e
    ),
    ...t
  }
);
Zp.displayName = "DrawerHeader";
const Qp = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  gt,
  {
    ref: o,
    "data-slot": "drawer-title",
    className: p("text-[17px] font-bold text-foreground", e),
    ...t
  }
));
Qp.displayName = "DrawerTitle";
const Jp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "drawer-body",
    className: p("flex-1 overflow-auto px-5 py-4", e),
    ...t
  }
);
Jp.displayName = "DrawerBody";
const em = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-slot": "drawer-footer",
    className: p(
      "px-5 py-4 border-t border-border",
      "pb-[max(16px,env(safe-area-inset-bottom))]",
      e
    ),
    ...t
  }
);
em.displayName = "DrawerFooter";
const tm = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ y(
  Se,
  {
    ref: o,
    className: p(
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
tm.displayName = "DrawerCloseButton";
const om = l.forwardRef(
  ({ className: e, icon: t, label: o, active: r = !1, badge: s, onClick: a, ...i }, c) => /* @__PURE__ */ y(
    "button",
    {
      ref: c,
      type: "button",
      onClick: a,
      className: p(
        "flex items-center gap-3 w-full px-4 py-3 rounded-xl",
        "text-left transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-primary/30",
        r ? "bg-secondary text-primary font-semibold" : "text-foreground hover:bg-muted",
        e
      ),
      ...i,
      children: [
        t && /* @__PURE__ */ n("span", { className: p("size-6 flex items-center justify-center", r && "text-primary"), children: t }),
        /* @__PURE__ */ n("span", { className: "flex-1 text-[15px]", children: o }),
        s && /* @__PURE__ */ n("span", { className: "text-[11px] font-bold text-primary", children: s })
      ]
    }
  )
);
om.displayName = "DrawerMenuItem";
const yi = l.createContext(void 0);
function rm() {
  const e = l.useContext(yi);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}
function cv({ children: e }) {
  const [t, o] = l.useState([]), r = l.useCallback(
    (a, i) => {
      const c = Math.random().toString(36).substring(2, 9), d = { id: c, message: a, ...i };
      o((f) => [...f, d]);
      const u = i?.duration ?? 2500;
      u > 0 && setTimeout(() => {
        o((f) => f.filter((m) => m.id !== c));
      }, u);
    },
    []
  ), s = l.useCallback((a) => {
    o((i) => i.filter((c) => c.id !== a));
  }, []);
  return /* @__PURE__ */ y(yi.Provider, { value: { toasts: t, toast: r, dismiss: s }, children: [
    e,
    /* @__PURE__ */ n(nm, {})
  ] });
}
function nm() {
  const { toasts: e, dismiss: t } = rm();
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "toast-container",
      className: p(
        "fixed inset-x-0 bottom-0 z-[100]",
        "flex flex-col items-center gap-2",
        "p-4 pb-[max(16px,calc(env(safe-area-inset-bottom)+60px))]",
        "pointer-events-none"
      ),
      children: e.map((o) => /* @__PURE__ */ y(
        "div",
        {
          role: "status",
          className: p(
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
const sm = l.forwardRef(
  ({ className: e, message: t, action: o, onClose: r, ...s }, a) => /* @__PURE__ */ y(
    "div",
    {
      ref: a,
      role: "status",
      "data-slot": "snackbar",
      className: p(
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
sm.displayName = "Snackbar";
const am = l.forwardRef(({ className: e, value: t, indicatorColor: o, ...r }, s) => /* @__PURE__ */ n(
  Ts,
  {
    ref: s,
    "data-slot": "progress",
    className: p(
      // 토스 스타일 Progress
      "relative h-2 w-full overflow-hidden rounded-full bg-muted",
      e
    ),
    ...r,
    children: /* @__PURE__ */ n(
      au,
      {
        className: p(
          "h-full rounded-full transition-all duration-300 ease-out",
          o || "bg-primary"
        ),
        style: { width: `${t || 0}%` }
      }
    )
  }
));
am.displayName = Ts.displayName;
const wi = l.forwardRef(
  ({ className: e, size: t = "default", color: o, ...r }, s) => /* @__PURE__ */ y(
    "div",
    {
      ref: s,
      role: "status",
      "data-slot": "spinner",
      className: p("animate-spin", {
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
wi.displayName = "Spinner";
const im = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ y(
  "div",
  {
    ref: o,
    role: "status",
    "data-slot": "loading-dots",
    className: p("flex items-center gap-1", e),
    ...t,
    children: [
      [0, 1, 2].map((r) => /* @__PURE__ */ n(
        "div",
        {
          className: p(
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
im.displayName = "LoadingDots";
const cm = l.forwardRef(
  ({ className: e, loading: t = !0, blur: o = !1, children: r, ...s }, a) => t ? /* @__PURE__ */ y("div", { ref: a, className: p("relative", e), ...s, children: [
    r,
    /* @__PURE__ */ n(
      "div",
      {
        "data-slot": "loading-overlay",
        className: p(
          "absolute inset-0 flex items-center justify-center",
          "bg-background/60 rounded-inherit",
          o && "backdrop-blur-sm"
        ),
        children: /* @__PURE__ */ n(wi, { size: "lg" })
      }
    )
  ] }) : /* @__PURE__ */ n(te, { children: r })
);
cm.displayName = "LoadingOverlay";
const lv = Ga, lm = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  er,
  {
    ref: o,
    "data-slot": "tabs-list",
    className: p(
      // 토스 스타일 Tabs List - 컴팩트
      "inline-flex items-center gap-0.5 p-0.5 rounded-lg bg-muted",
      e
    ),
    ...t
  }
));
lm.displayName = er.displayName;
const dm = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  tr,
  {
    ref: o,
    "data-slot": "tabs-trigger",
    className: p(
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
dm.displayName = tr.displayName;
const um = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  Ka,
  {
    ref: o,
    "data-slot": "tabs-content",
    className: p(
      "mt-4",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      e
    ),
    ...t
  }
));
um.displayName = Ka.displayName;
const dv = Ga, fm = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  er,
  {
    ref: o,
    "data-slot": "underline-tabs-list",
    className: p(
      // 토스 스타일 밑줄 Tabs
      "flex border-b border-border",
      e
    ),
    ...t
  }
));
fm.displayName = "UnderlineTabsList";
const pm = l.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  tr,
  {
    ref: o,
    "data-slot": "underline-tabs-trigger",
    className: p(
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
pm.displayName = "UnderlineTabsTrigger";
const mm = l.forwardRef(
  ({
    className: e,
    leading: t,
    title: o,
    subtitle: r,
    trailing: s,
    showArrow: a = !0,
    clickable: i = !0,
    disabled: c = !1,
    badge: d,
    badgeVariant: u = "primary",
    onClick: f,
    ...m
  }, g) => {
    const x = {
      primary: "text-primary",
      success: "text-[#30C85E]",
      warning: "text-[#FF9500]",
      destructive: "text-destructive"
    };
    return /* @__PURE__ */ y(
      "div",
      {
        ref: g,
        role: i ? "button" : void 0,
        tabIndex: i && !c ? 0 : void 0,
        "data-slot": "list-item",
        "data-disabled": c || void 0,
        onClick: c ? void 0 : f,
        onKeyDown: i && !c ? (b) => {
          (b.key === "Enter" || b.key === " ") && (b.preventDefault(), f?.(b));
        } : void 0,
        className: p(
          // 토스 스타일 List Item
          "flex items-center gap-3 p-3 bg-card rounded-xl",
          "transition-all duration-150",
          i && !c && [
            "cursor-pointer",
            "hover:bg-muted/50",
            "active:scale-[0.99]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          ],
          c && "opacity-40 cursor-not-allowed",
          e
        ),
        ...m,
        children: [
          t && /* @__PURE__ */ n("div", { className: "shrink-0", children: t }),
          /* @__PURE__ */ y("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ y("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ n("p", { className: "text-[15px] font-semibold text-foreground truncate", children: o }),
              d && /* @__PURE__ */ n(
                "span",
                {
                  className: p(
                    "text-[11px] font-bold shrink-0",
                    x[u]
                  ),
                  children: d
                }
              )
            ] }),
            r && /* @__PURE__ */ n("p", { className: "text-[13px] text-muted-foreground truncate mt-0.5", children: r })
          ] }),
          s && /* @__PURE__ */ n("div", { className: "shrink-0 text-right", children: s }),
          a && i && /* @__PURE__ */ n(ui, { className: "size-5 text-muted-foreground shrink-0" })
        ]
      }
    );
  }
);
mm.displayName = "ListItem";
const hm = l.forwardRef(
  ({
    className: e,
    icon: t,
    title: o,
    subtitle: r,
    selected: s = !1,
    clickable: a = !0,
    disabled: i = !1,
    onClick: c,
    ...d
  }, u) => /* @__PURE__ */ y(
    "div",
    {
      ref: u,
      role: a ? "button" : void 0,
      tabIndex: a && !i ? 0 : void 0,
      "data-slot": "list-item-compact",
      "data-selected": s || void 0,
      "data-disabled": i || void 0,
      onClick: i ? void 0 : c,
      onKeyDown: a && !i ? (f) => {
        (f.key === "Enter" || f.key === " ") && (f.preventDefault(), c?.(f));
      } : void 0,
      className: p(
        // 토스 계좌 선택 스타일 - 컴팩트
        "flex items-center gap-3 px-3 py-2.5 rounded-lg",
        "transition-all duration-150",
        a && !i && [
          "cursor-pointer",
          "hover:bg-muted/30",
          "active:scale-[0.99]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        ],
        // 선택 시 연한 파란 배경
        s && "bg-secondary",
        i && "opacity-40 cursor-not-allowed",
        e
      ),
      ...d,
      children: [
        t && /* @__PURE__ */ n("div", { className: "shrink-0 size-8 rounded-full bg-muted flex items-center justify-center overflow-hidden", children: t }),
        /* @__PURE__ */ y("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ n("p", { className: "text-[14px] font-medium text-foreground truncate", children: o }),
          r && /* @__PURE__ */ n("p", { className: "text-[12px] text-muted-foreground truncate", children: r })
        ] }),
        s && /* @__PURE__ */ n(sr, { className: "size-5 text-primary shrink-0" })
      ]
    }
  )
);
hm.displayName = "ListItemCompact";
const gm = l.forwardRef(
  ({
    className: e,
    icon: t,
    label: o,
    value: r,
    trailing: s,
    showArrow: a = !0,
    clickable: i = !0,
    disabled: c = !1,
    destructive: d = !1,
    onClick: u,
    ...f
  }, m) => /* @__PURE__ */ y(
    "div",
    {
      ref: m,
      role: i ? "button" : void 0,
      tabIndex: i && !c ? 0 : void 0,
      "data-slot": "simple-list-item",
      "data-disabled": c || void 0,
      onClick: c ? void 0 : u,
      onKeyDown: i && !c ? (g) => {
        (g.key === "Enter" || g.key === " ") && (g.preventDefault(), u?.(g));
      } : void 0,
      className: p(
        // 1줄 메뉴/설정 아이템
        "flex items-center gap-3 px-4 py-3 rounded-lg",
        "transition-all duration-150",
        i && !c && [
          "cursor-pointer",
          "hover:bg-muted/30",
          "active:scale-[0.99]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        ],
        c && "opacity-40 cursor-not-allowed",
        e
      ),
      ...f,
      children: [
        t && /* @__PURE__ */ n("div", { className: p(
          "shrink-0 size-5",
          d ? "text-destructive" : "text-muted-foreground"
        ), children: t }),
        /* @__PURE__ */ n("span", { className: p(
          "flex-1 text-[15px]",
          d ? "text-destructive" : "text-foreground"
        ), children: o }),
        r && /* @__PURE__ */ n("span", { className: "text-[14px] text-muted-foreground shrink-0", children: r }),
        s && /* @__PURE__ */ n("div", { className: "shrink-0", children: s }),
        a && i && !s && /* @__PURE__ */ n(ui, { className: "size-5 text-muted-foreground/50 shrink-0" })
      ]
    }
  )
);
gm.displayName = "SimpleListItem";
const vm = l.forwardRef(
  ({ className: e, gap: t = "default", divided: o = !1, children: r, ...s }, a) => /* @__PURE__ */ n(
    "div",
    {
      ref: a,
      "data-slot": "list",
      className: p(
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
vm.displayName = "List";
const xm = l.forwardRef(
  ({ className: e, orientation: t = "horizontal", variant: o = "default", label: r, ...s }, a) => {
    const i = t === "horizontal";
    return r && i ? /* @__PURE__ */ y(
      "div",
      {
        ref: a,
        role: "separator",
        "data-slot": "divider",
        className: p("flex items-center gap-4 my-4", e),
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
        ref: a,
        role: "separator",
        "aria-orientation": t,
        "data-slot": "divider",
        className: p(
          // 토스 스타일 Divider
          "bg-border shrink-0",
          i ? p(
            "w-full",
            o === "default" ? "h-px" : "h-2"
          ) : p(
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
xm.displayName = "Divider";
const bm = l.forwardRef(
  ({ className: e, size: t = "default", ...o }, r) => /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      "data-slot": "spacer",
      "aria-hidden": "true",
      className: p("w-full bg-background", {
        sm: "h-2",
        default: "h-4",
        lg: "h-8",
        xl: "h-12"
      }[t], e),
      ...o
    }
  )
);
bm.displayName = "Spacer";
function xe({
  className: e,
  animation: t = "shimmer",
  ...o
}) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-slot": "skeleton",
      className: p(
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
function ar({
  className: e,
  size: t = "default",
  animation: o,
  ...r
}) {
  return /* @__PURE__ */ n(
    xe,
    {
      animation: o,
      className: p("rounded-full", {
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
function ym({
  className: e,
  lines: t = 1,
  animation: o,
  lastLineWidth: r = "75%",
  ...s
}) {
  return /* @__PURE__ */ n("div", { className: p("space-y-2", e), ...s, children: Array.from({ length: t }).map((a, i) => /* @__PURE__ */ n(
    xe,
    {
      animation: o,
      className: "h-4",
      style: i === t - 1 && t > 1 ? { width: r } : void 0
    },
    i
  )) });
}
function uv({
  className: e,
  animation: t,
  ...o
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      className: p("p-4 rounded-2xl bg-card space-y-4", e),
      ...o,
      children: [
        /* @__PURE__ */ y("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ n(ar, { size: "lg", animation: t }),
          /* @__PURE__ */ y("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ n(xe, { animation: t, className: "h-4 w-24" }),
            /* @__PURE__ */ n(xe, { animation: t, className: "h-3 w-16" })
          ] })
        ] }),
        /* @__PURE__ */ n(ym, { lines: 2, animation: t })
      ]
    }
  );
}
function fv({
  className: e,
  animation: t,
  ...o
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      className: p(
        "flex items-center gap-4 p-4 rounded-2xl bg-card",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ n(ar, { size: "lg", animation: t }),
        /* @__PURE__ */ y("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ n(xe, { animation: t, className: "h-4 w-32" }),
          /* @__PURE__ */ n(xe, { animation: t, className: "h-3 w-20" })
        ] }),
        /* @__PURE__ */ n(xe, { animation: t, className: "h-4 w-16" })
      ]
    }
  );
}
function pv({
  className: e,
  animation: t,
  size: o = "default",
  ...r
}) {
  return /* @__PURE__ */ n(
    xe,
    {
      animation: t,
      className: p("rounded-lg", {
        sm: "h-8 w-20",
        default: "h-10 w-24",
        lg: "h-12 w-32"
      }[o], e),
      ...r
    }
  );
}
function mv({
  className: e,
  animation: t,
  aspectRatio: o = "video",
  ...r
}) {
  return /* @__PURE__ */ n(
    xe,
    {
      animation: t,
      className: p("w-full rounded-xl", {
        square: "aspect-square",
        video: "aspect-video",
        wide: "aspect-[21/9]"
      }[o], e),
      ...r
    }
  );
}
function hv({
  className: e,
  count: t = 3,
  animation: o,
  ...r
}) {
  return /* @__PURE__ */ n("div", { className: p("flex -space-x-2", e), ...r, children: Array.from({ length: t }).map((s, a) => /* @__PURE__ */ n(
    ar,
    {
      size: "sm",
      animation: o,
      className: "border-2 border-background"
    },
    a
  )) });
}
function gv({
  className: e,
  animation: t,
  ...o
}) {
  return /* @__PURE__ */ n(
    xe,
    {
      animation: t,
      className: p("h-10 w-full rounded-lg", e),
      ...o
    }
  );
}
const wm = ft(
  // 토스 스타일 FAB 기본
  p(
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
), km = l.forwardRef(
  ({ className: e, variant: t, size: o, icon: r, label: s, children: a, ...i }, c) => /* @__PURE__ */ y(
    "button",
    {
      ref: c,
      type: "button",
      "data-slot": "fab",
      className: p(wm({ variant: t, size: o, extended: !!s }), e),
      ...i,
      children: [
        r,
        s && /* @__PURE__ */ n("span", { children: s }),
        !r && !s && a
      ]
    }
  )
);
km.displayName = "FAB";
const Cm = l.forwardRef(
  ({ className: e, position: t = "bottom-right", children: o, ...r }, s) => /* @__PURE__ */ n(
    "div",
    {
      ref: s,
      "data-slot": "fab-container",
      className: p(
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
Cm.displayName = "FABContainer";
const Nm = l.forwardRef(
  ({ className: e, icon: t, title: o, description: r, action: s, ...a }, i) => /* @__PURE__ */ y(
    "div",
    {
      ref: i,
      "data-slot": "empty-state",
      className: p(
        "flex flex-col items-center justify-center py-16 px-8 text-center",
        e
      ),
      ...a,
      children: [
        t && /* @__PURE__ */ n("div", { className: "mb-4 text-5xl text-muted-foreground/50", children: t }),
        /* @__PURE__ */ n("h3", { className: "text-[17px] font-semibold text-foreground", children: o }),
        r && /* @__PURE__ */ n("p", { className: "mt-2 text-[15px] text-muted-foreground max-w-xs", children: r }),
        s && /* @__PURE__ */ n(ci, { onClick: s.onClick, className: "mt-6", children: s.label })
      ]
    }
  )
);
Nm.displayName = "EmptyState";
const Sm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M19 12H5M12 19L5 12L12 5" }) }), Lm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M5 12H19M12 5L19 12L12 19" }) }), Rm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 19V5M5 12L12 5L19 12" }) }), Mm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 5V19M19 12L12 19L5 12" }) }), Em = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M15 18L9 12L15 6" }) }), Am = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M9 18L15 12L9 6" }) }), Im = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M18 15L12 9L6 15" }) }), Pm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M6 9L12 15L18 9" }) }), Tm = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), Dm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M3 12H21M3 6H21M3 18H21" }) }), Om = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ n("path", { d: "M21 21L16.5 16.5" })
] }), zm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
] }), _m = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "8", height: "8", rx: "2", fill: "currentColor" }),
  /* @__PURE__ */ n("rect", { x: "13", y: "3", width: "8", height: "8", rx: "2", fill: "currentColor" }),
  /* @__PURE__ */ n("rect", { x: "3", y: "13", width: "8", height: "8", rx: "2", fill: "currentColor" }),
  /* @__PURE__ */ n("rect", { x: "13", y: "13", width: "8", height: "8", rx: "2", fill: "currentColor" })
] }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("rect", { x: "13", y: "3", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("rect", { x: "3", y: "13", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("rect", { x: "13", y: "13", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.8" })
] }) }), Bm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 5V19M5 12H19" }) }), Wm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M5 12H19" }) }), Vm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6L18 18" }) }), Fm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M20 6L9 17L4 12" }) }), Hm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
  /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
] }), $m = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M3 6H5H21" }),
  /* @__PURE__ */ n("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }),
  /* @__PURE__ */ n("path", { d: "M10 11V17M14 11V17" })
] }), jm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
] }), Um = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "18", cy: "5", r: "3" }),
  /* @__PURE__ */ n("circle", { cx: "6", cy: "12", r: "3" }),
  /* @__PURE__ */ n("circle", { cx: "18", cy: "19", r: "3" }),
  /* @__PURE__ */ n("path", { d: "M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" })
] }), Gm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" }),
  /* @__PURE__ */ n("path", { d: "M7 10L12 15L17 10" }),
  /* @__PURE__ */ n("path", { d: "M12 15V3" })
] }), Km = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" }),
  /* @__PURE__ */ n("path", { d: "M17 8L12 3L7 8" }),
  /* @__PURE__ */ n("path", { d: "M12 3V15" })
] }), Ym = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M23 4V10H17" }),
  /* @__PURE__ */ n("path", { d: "M1 20V14H7" }),
  /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
] }), qm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1.5", fill: "currentColor" })
] }), Xm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "5", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "19", r: "1.5", fill: "currentColor" })
] }), Zm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 3H2L10 12.46V19L14 21V12.46L22 3Z" }) }), Qm = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M3 6H21M6 12H18M9 18H15" }) }), Jm = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M12 16V12M12 8H12.01" })
] }), eh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M12 8V12M12 16H12.01" })
] }), th = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
  /* @__PURE__ */ n("path", { d: "M12 9V13M12 17H12.01" })
] }), oh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M9 12L11 14L15 10" })
] }), rh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M15 9L9 15M9 9L15 15" })
] }), nh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
  /* @__PURE__ */ n("path", { d: "M12 17H12.01" })
] }), sh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" }),
  /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" })
] }), ah = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" })
] }), ih = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ n("circle", { cx: "8.5", cy: "7", r: "4" }),
  /* @__PURE__ */ n("path", { d: "M20 8V14M17 11H23" })
] }), ch = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" }) }), lh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), dh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" }),
  /* @__PURE__ */ n("path", { d: "M22 6L12 13L2 6" })
] }), uh = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }) }), fh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0", fill: "currentColor" }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("path", { d: "M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M13.73 21a2 2 0 0 1-3.46 0", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
] }) }), ph = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "2", y: "6", width: "20", height: "14", rx: "2", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "17", cy: "13", r: "2", fill: "white" })
] }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("rect", { x: "2", y: "6", width: "20", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("circle", { cx: "17", cy: "13", r: "2", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("path", { d: "M2 10H22", stroke: "currentColor", strokeWidth: "1.8" })
] }) }), mh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M2 10H22" }),
  /* @__PURE__ */ n("path", { d: "M6 15H10" })
] }), hh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ y(te, { children: [
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
] }) }), gh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "9", fill: "currentColor", fillOpacity: "0.2" }),
  /* @__PURE__ */ n("path", { d: "M12 3V12L18.36 5.64", fill: "currentColor" }),
  /* @__PURE__ */ n("path", { d: "M12 3C16.97 3 21 7.03 21 12H12V3Z", fill: "currentColor" })
] }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }),
  /* @__PURE__ */ n("path", { d: "M12 3V12", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }),
  /* @__PURE__ */ n("path", { d: "M12 12L18.36 5.64", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
] }) }), vh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M23 6L13.5 15.5L8.5 10.5L1 18" }),
  /* @__PURE__ */ n("path", { d: "M17 6H23V12" })
] }), xh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M23 18L13.5 8.5L8.5 13.5L1 6" }),
  /* @__PURE__ */ n("path", { d: "M17 18H23V12" })
] }), bh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M19 5L5 19" }),
  /* @__PURE__ */ n("circle", { cx: "6.5", cy: "6.5", r: "2.5" }),
  /* @__PURE__ */ n("circle", { cx: "17.5", cy: "17.5", r: "2.5" })
] }), yh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M4 4V20L6.5 18L9 20L12 18L15 20L17.5 18L20 20V4L17.5 6L15 4L12 6L9 4L6.5 6L4 4Z" }),
  /* @__PURE__ */ n("path", { d: "M8 10H16M8 14H13" })
] }), wh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
  /* @__PURE__ */ n("path", { d: "M21 15L16 10L5 21" })
] }), kh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "13", r: "4" })
] }), Ch = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("polygon", { points: "5,3 19,12 5,21" }) }), Nh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "6", y: "4", width: "4", height: "16" }),
  /* @__PURE__ */ n("rect", { x: "14", y: "4", width: "4", height: "16" })
] }), Sh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M16 2V6M8 2V6M3 10H21" })
] }), Lh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M12 6V12L16 14" })
] }), Rh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "10", r: "3" })
] }), Mh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
] }), Eh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" })
] }), Ah = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
] }), Ih = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
  /* @__PURE__ */ n("path", { d: "M1 1L23 23" })
] }), Ph = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), Th = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), Dh = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M19 21L12 16L5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", fill: "currentColor" }) : /* @__PURE__ */ n("path", { d: "M19 21L12 16L5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }), Oh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ n("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), zh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M18 13V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
  /* @__PURE__ */ n("path", { d: "M15 3H21V9" }),
  /* @__PURE__ */ n("path", { d: "M10 14L21 3" })
] }), _h = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "7", height: "7" }),
  /* @__PURE__ */ n("rect", { x: "14", y: "3", width: "7", height: "7" }),
  /* @__PURE__ */ n("rect", { x: "3", y: "14", width: "7", height: "7" }),
  /* @__PURE__ */ n("rect", { x: "14", y: "14", width: "3", height: "3" }),
  /* @__PURE__ */ n("rect", { x: "18", y: "14", width: "3", height: "3" }),
  /* @__PURE__ */ n("rect", { x: "14", y: "18", width: "3", height: "3" }),
  /* @__PURE__ */ n("rect", { x: "18", y: "18", width: "3", height: "3" })
] }), Bh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M9 22V18H15V22" }),
  /* @__PURE__ */ n("path", { d: "M8 6H10M8 10H10M8 14H10M14 6H16M14 10H16M14 14H16" })
] }), Wh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M3 21H21" }),
  /* @__PURE__ */ n("path", { d: "M5 21V7L13 3V21" }),
  /* @__PURE__ */ n("path", { d: "M19 21V11L13 7" }),
  /* @__PURE__ */ n("path", { d: "M9 9V9.01M9 13V13.01M9 17V17.01" })
] }), Vh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M3 9H21M3 15H21M9 3V21M15 3V21" })
] }), Fh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M2 22L22 22" }),
  /* @__PURE__ */ n("path", { d: "M3 22V18L8 14L13 17L21 10V22" }),
  /* @__PURE__ */ n("circle", { cx: "17", cy: "5", r: "3" })
] }), Hh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" }),
  /* @__PURE__ */ n("path", { d: "M8 2V18M16 6V22" })
] }), $h = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }),
  /* @__PURE__ */ n("path", { d: "M15 5L19 9" }),
  /* @__PURE__ */ n("path", { d: "M12.5 7.5L14 9M9.5 10.5L11 12M6.5 13.5L8 15" })
] }), jh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M3 9H21" }),
  /* @__PURE__ */ n("path", { d: "M9 21V9" })
] }), Uh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M8 6H16" }),
  /* @__PURE__ */ n("path", { d: "M8 10H8.01M12 10H12.01M16 10H16.01" }),
  /* @__PURE__ */ n("path", { d: "M8 14H8.01M12 14H12.01M16 14H16.01" }),
  /* @__PURE__ */ n("path", { d: "M8 18H8.01M12 18H12.01M16 18H16.01" })
] }), Gh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M16 3H21V8" }),
  /* @__PURE__ */ n("path", { d: "M4 20L21 3" }),
  /* @__PURE__ */ n("path", { d: "M21 16V21H16" }),
  /* @__PURE__ */ n("path", { d: "M15 15L21 21" }),
  /* @__PURE__ */ n("path", { d: "M4 4L9 9" })
] }), Kh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 3V21" }),
  /* @__PURE__ */ n("path", { d: "M5 8L2 12L5 16" }),
  /* @__PURE__ */ n("path", { d: "M19 8L22 12L19 16" }),
  /* @__PURE__ */ n("path", { d: "M2 12H22" })
] }), Yh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  /* @__PURE__ */ n("path", { d: "M14 2V8H20" }),
  /* @__PURE__ */ n("path", { d: "M16 13H8M16 17H8M10 9H8" })
] }), qh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  /* @__PURE__ */ n("path", { d: "M14 2V8H20" })
] }), Xh = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }) }), Zh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M16 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
  /* @__PURE__ */ n("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" })
] }), Qh = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M16 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
  /* @__PURE__ */ n("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }),
  /* @__PURE__ */ n("path", { d: "M9 14L11 16L15 12" })
] }), Jh = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 20V10M18 20V4M6 20V16" }) }), eg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M3 3V21H21" }),
  /* @__PURE__ */ n("path", { d: "M7 14L12 9L16 13L21 8" })
] }), tg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
  /* @__PURE__ */ n("path", { d: "M22 12A10 10 0 0 0 12 2v10z" })
] }), og = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 2L2 7L12 12L22 7L12 2Z" }),
  /* @__PURE__ */ n("path", { d: "M2 17L12 22L22 17" }),
  /* @__PURE__ */ n("path", { d: "M2 12L12 17L22 12" })
] }), rg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ n("path", { d: "M21 21L16.65 16.65" }),
  /* @__PURE__ */ n("path", { d: "M11 8V14M8 11H14" })
] }), ng = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ n("path", { d: "M21 21L16.65 16.65" }),
  /* @__PURE__ */ n("path", { d: "M8 11H14" })
] }), sg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" }) }), ag = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M4 14H10V20M20 10H14V4M14 10L21 3M3 21L10 14" }) }), ig = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("path", { d: "M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" })
] }), cg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 22V12" }),
  /* @__PURE__ */ n("path", { d: "M5 12H19" }),
  /* @__PURE__ */ n("path", { d: "M18 7V5.5a2.5 2.5 0 0 0-5 0V7" }),
  /* @__PURE__ */ n("path", { d: "M6 7V5.5a2.5 2.5 0 0 1 5 0V7" }),
  /* @__PURE__ */ n("rect", { x: "4", y: "7", width: "16", height: "5", rx: "1" })
] }), lg = ({ filled: e = !1, className: t, ...o }) => /* @__PURE__ */ n("svg", { className: p("size-5", t), viewBox: "0 0 24 24", fill: "none", ...o, children: e ? /* @__PURE__ */ n("path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22V15", fill: "currentColor" }) : /* @__PURE__ */ y(te, { children: [
  /* @__PURE__ */ n("path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M4 22V15", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
] }) }), dg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M20.59 13.41L13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }),
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "1.5" })
] }), ug = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
] }), fg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "8", r: "6" }),
  /* @__PURE__ */ n("path", { d: "M15.477 12.89L17 22L12 19L7 22L8.523 12.89" })
] }), pg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }), mg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
  /* @__PURE__ */ n("path", { d: "M9 12L11 14L15 10" })
] }), hg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M6 9V2H18V9" }),
  /* @__PURE__ */ n("path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }),
  /* @__PURE__ */ n("rect", { x: "6", y: "14", width: "12", height: "8" })
] }), gg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ n("path", { d: "M3 9H21M3 15H21M9 3V21M15 3V21" })
] }), vg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" }) }), xg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M4 9H20M4 15H20M10 3L8 21M16 3L14 21" }) }), bg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "6" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "2" })
] }), yg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("path", { d: "M22 12H18L15 21L9 3L6 12H2" }) }), wg = ({ className: e, ...t }) => /* @__PURE__ */ n("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ n("polygon", { points: "3 11 22 2 13 21 11 13 3 11" }) }), kg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M21 4H14M10 4H3M21 12H12M8 12H3M21 20H16M12 20H3" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "4", r: "2" }),
  /* @__PURE__ */ n("circle", { cx: "10", cy: "12", r: "2" }),
  /* @__PURE__ */ n("circle", { cx: "14", cy: "20", r: "2" })
] }), Cg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M12 1V23" }),
  /* @__PURE__ */ n("path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
] }), Ng = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ n("path", { d: "M4 4L8 20L12 8L16 20L20 4" }),
  /* @__PURE__ */ n("path", { d: "M3 10H21M3 14H21" })
] }), Sg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#3182F6" }),
  /* @__PURE__ */ n("path", { d: "M8 12L11 15L16 9", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Lg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#3182F6" }),
  /* @__PURE__ */ n("path", { d: "M7 14L10 11L13 13L17 9", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Rg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#FFB800" }),
  /* @__PURE__ */ n("rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", fill: "white" })
] }), Mg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#0046FF" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "4", fill: "white" })
] }), Eg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#FFCD00" }),
  /* @__PURE__ */ n("ellipse", { cx: "12", cy: "13", rx: "5", ry: "4", fill: "#3C1E1E" })
] }), Ag = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#0066B3" }),
  /* @__PURE__ */ n("path", { d: "M8 12H16M12 8V16", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })
] }), Ig = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#009490" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "4", stroke: "white", strokeWidth: "2" })
] }), Pg = ({ className: e, ...t }) => /* @__PURE__ */ y("svg", { className: p("size-5", e), viewBox: "0 0 24 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10", fill: "#02A64E" }),
  /* @__PURE__ */ n("path", { d: "M12 7V17M8 12H16", stroke: "white", strokeWidth: "2.5", strokeLinecap: "round" })
] }), vv = {
  // Arrow
  ArrowLeft: Sm,
  ArrowRight: Lm,
  ArrowUp: Rm,
  ArrowDown: Mm,
  // Chevron
  ChevronLeft: Em,
  ChevronRight: Am,
  ChevronUp: Im,
  ChevronDown: Pm,
  // Navigation
  Home: Tm,
  Menu: Dm,
  Search: Om,
  Settings: zm,
  Grid: _m,
  // Action
  Plus: Bm,
  Minus: Wm,
  Close: Vm,
  Check: Fm,
  Edit: Hm,
  Trash: $m,
  Copy: jm,
  Share: Um,
  Download: Gm,
  Upload: Km,
  Refresh: Ym,
  MoreHorizontal: qm,
  MoreVertical: Xm,
  Filter: Zm,
  Sort: Qm,
  // Status
  Info: Jm,
  AlertCircle: eh,
  AlertTriangle: th,
  CheckCircle: oh,
  XCircle: rh,
  HelpCircle: nh,
  // User
  User: sh,
  Users: ah,
  UserPlus: ih,
  // Communication
  Send: ch,
  Message: lh,
  Mail: dh,
  Phone: uh,
  Bell: fh,
  // Finance
  Wallet: ph,
  CreditCard: mh,
  Gift: hh,
  Chart: gh,
  TrendingUp: vh,
  TrendingDown: xh,
  Percent: bh,
  Receipt: yh,
  // Media
  Image: wh,
  Camera: kh,
  Play: Ch,
  Pause: Nh,
  // Utility
  Calendar: Sh,
  Clock: Lh,
  MapPin: Rh,
  Lock: Mh,
  Unlock: Eh,
  Eye: Ah,
  EyeOff: Ih,
  Star: Ph,
  Heart: Th,
  Bookmark: Dh,
  Link: Oh,
  ExternalLink: zh,
  QRCode: _h,
  // Real Estate / Appraisal
  Building: Bh,
  BuildingOffice: Wh,
  Apartment: Vh,
  Land: Fh,
  Map: Hh,
  Ruler: $h,
  Area: jh,
  Calculator: Uh,
  Compare: Gh,
  Scale: Kh,
  FileText: Yh,
  File: qh,
  Folder: Xh,
  Clipboard: Zh,
  ClipboardCheck: Qh,
  BarChart: Jh,
  LineChart: eg,
  PieChart: tg,
  Layers: og,
  ZoomIn: rg,
  ZoomOut: ng,
  Maximize: sg,
  Minimize: ag,
  Compass: ig,
  Pin: cg,
  Flag: lg,
  Tag: dg,
  Briefcase: ug,
  Award: fg,
  Shield: pg,
  ShieldCheck: mg,
  Printer: hg,
  Table: gg,
  List: vg,
  Hash: xg,
  Target: bg,
  Activity: yg,
  Dollar: Cg,
  Won: Ng,
  Navigation: wg,
  SlidersHorizontal: kg
}, xv = {
  Toss: Sg,
  TossSecurities: Lg,
  KB: Rg,
  Shinhan: Mg,
  Kakao: Eg,
  Woori: Ag,
  Hana: Ig,
  NH: Pg
};
export {
  rv as ActionSheet,
  Yp as ActionSheetCancel,
  jp as ActionSheetContent,
  Up as ActionSheetGroup,
  Kp as ActionSheetItem,
  xi as ActionSheetOverlay,
  $p as ActionSheetPortal,
  Gp as ActionSheetTitle,
  nv as ActionSheetTrigger,
  yg as ActivityIcon,
  eh as AlertCircleIcon,
  Qg as AlertDialog,
  Dp as AlertDialogAction,
  Op as AlertDialogCancel,
  Ep as AlertDialogContent,
  Tp as AlertDialogDescription,
  Ip as AlertDialogFooter,
  Ap as AlertDialogHeader,
  gi as AlertDialogOverlay,
  Mp as AlertDialogPortal,
  Pp as AlertDialogTitle,
  Jg as AlertDialogTrigger,
  th as AlertTriangleIcon,
  Vh as ApartmentIcon,
  jh as AreaIcon,
  Mm as ArrowDownIcon,
  Sm as ArrowLeftIcon,
  Lm as ArrowRightIcon,
  Rm as ArrowUpIcon,
  cp as Avatar,
  lp as AvatarGroup,
  fg as AwardIcon,
  jg as Badge,
  xv as BankIcon,
  Jh as BarChartIcon,
  fh as BellIcon,
  Dh as BookmarkIcon,
  ev as BottomSheet,
  Wp as BottomSheetBody,
  ov as BottomSheetClose,
  _p as BottomSheetContent,
  Hp as BottomSheetDescription,
  Vp as BottomSheetFooter,
  Bp as BottomSheetHeader,
  vi as BottomSheetOverlay,
  zp as BottomSheetPortal,
  Fp as BottomSheetTitle,
  tv as BottomSheetTrigger,
  ug as BriefcaseIcon,
  Bh as BuildingIcon,
  Wh as BuildingOfficeIcon,
  ci as Button,
  Uh as CalculatorIcon,
  Sh as CalendarIcon,
  kh as CameraIcon,
  zg as Card,
  Vg as CardAction,
  Fg as CardContent,
  Wg as CardDescription,
  Hg as CardFooter,
  _g as CardHeader,
  Bg as CardTitle,
  gh as ChartIcon,
  oh as CheckCircleIcon,
  Fm as CheckIcon,
  fi as Checkbox,
  fp as CheckboxWithLabel,
  Pm as ChevronDownIcon,
  Em as ChevronLeftIcon,
  Am as ChevronRightIcon,
  Im as ChevronUpIcon,
  Ug as Chip,
  Qh as ClipboardCheckIcon,
  Zh as ClipboardIcon,
  Lh as ClockIcon,
  Vm as CloseIcon,
  Gh as CompareIcon,
  ig as CompassIcon,
  jm as CopyIcon,
  mh as CreditCardIcon,
  qg as Dialog,
  Zg as DialogClose,
  Cp as DialogContent,
  Rp as DialogDescription,
  Sp as DialogFooter,
  Np as DialogHeader,
  hi as DialogOverlay,
  kp as DialogPortal,
  Lp as DialogTitle,
  Xg as DialogTrigger,
  xm as Divider,
  Cg as DollarIcon,
  Gm as DownloadIcon,
  sv as Drawer,
  Jp as DrawerBody,
  iv as DrawerClose,
  tm as DrawerCloseButton,
  Xp as DrawerContent,
  em as DrawerFooter,
  Zp as DrawerHeader,
  om as DrawerMenuItem,
  bi as DrawerOverlay,
  qp as DrawerPortal,
  Qp as DrawerTitle,
  av as DrawerTrigger,
  Hm as EditIcon,
  Nm as EmptyState,
  zh as ExternalLinkIcon,
  Ah as EyeIcon,
  Ih as EyeOffIcon,
  km as FAB,
  Cm as FABContainer,
  qh as FileIcon,
  Yh as FileTextIcon,
  Zm as FilterIcon,
  lg as FlagIcon,
  Xh as FolderIcon,
  hh as GiftIcon,
  _m as GridIcon,
  Ig as HanaBankIcon,
  xg as HashIcon,
  Th as HeartIcon,
  nh as HelpCircleIcon,
  Tm as HomeIcon,
  wh as ImageIcon,
  Jm as InfoIcon,
  op as Input,
  Rg as KBBankIcon,
  Eg as KakaoBankIcon,
  $g as Label,
  Fh as LandIcon,
  og as LayersIcon,
  eg as LineChartIcon,
  Oh as LinkIcon,
  vm as List,
  vg as ListIcon,
  mm as ListItem,
  hm as ListItemCompact,
  im as LoadingDots,
  cm as LoadingOverlay,
  Mh as LockIcon,
  dh as MailIcon,
  Hh as MapIcon,
  Rh as MapPinIcon,
  sg as MaximizeIcon,
  Dm as MenuIcon,
  lh as MessageIcon,
  ag as MinimizeIcon,
  Wm as MinusIcon,
  qm as MoreHorizontalIcon,
  Xm as MoreVerticalIcon,
  Pg as NHBankIcon,
  wg as NavigationIcon,
  Nh as PauseIcon,
  bh as PercentIcon,
  uh as PhoneIcon,
  tg as PieChartIcon,
  cg as PinIcon,
  Ch as PlayIcon,
  Bm as PlusIcon,
  hg as PrinterIcon,
  am as Progress,
  _h as QRCodeIcon,
  gp as RadioCard,
  pp as RadioGroup,
  mp as RadioGroupItem,
  hp as RadioWithLabel,
  yh as ReceiptIcon,
  Ym as RefreshIcon,
  $h as RulerIcon,
  Kh as ScaleIcon,
  Om as SearchIcon,
  rp as SearchInput,
  Gg as Select,
  xp as SelectContent,
  Kg as SelectGroup,
  yp as SelectItem,
  bp as SelectLabel,
  wp as SelectSeparator,
  vp as SelectTrigger,
  Yg as SelectValue,
  ch as SendIcon,
  zm as SettingsIcon,
  Um as ShareIcon,
  mg as ShieldCheckIcon,
  pg as ShieldIcon,
  Mg as ShinhanBankIcon,
  gm as SimpleListItem,
  xe as Skeleton,
  hv as SkeletonAvatarGroup,
  pv as SkeletonButton,
  uv as SkeletonCard,
  ar as SkeletonCircle,
  mv as SkeletonImage,
  gv as SkeletonInput,
  fv as SkeletonListItem,
  ym as SkeletonText,
  kg as SlidersHorizontalIcon,
  sm as Snackbar,
  Qm as SortIcon,
  bm as Spacer,
  wi as Spinner,
  Ph as StarIcon,
  dp as Switch,
  gg as TableIcon,
  lv as Tabs,
  um as TabsContent,
  lm as TabsList,
  dm as TabsTrigger,
  dg as TagIcon,
  bg as TargetIcon,
  np as Textarea,
  nm as ToastContainer,
  cv as ToastProvider,
  up as Toggle,
  Sg as TossBankIcon,
  vv as TossIcon,
  Lg as TossSecuritiesIcon,
  $m as TrashIcon,
  xh as TrendingDownIcon,
  vh as TrendingUpIcon,
  dv as UnderlineTabs,
  fm as UnderlineTabsList,
  pm as UnderlineTabsTrigger,
  Eh as UnlockIcon,
  Km as UploadIcon,
  sh as UserIcon,
  ih as UserPlusIcon,
  ah as UsersIcon,
  ph as WalletIcon,
  Ng as WonIcon,
  Ag as WooriBankIcon,
  rh as XCircleIcon,
  rg as ZoomInIcon,
  ng as ZoomOutIcon,
  ip as avatarVariants,
  sp as badgeVariants,
  nr as buttonVariants,
  ap as chipVariants,
  p as cn,
  wm as fabVariants,
  rm as useToast
};
