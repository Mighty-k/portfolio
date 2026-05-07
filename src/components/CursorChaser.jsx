import { useEffect, useRef } from "react";

const lerp = (a, b, n) => a + (b - a) * n;

export default function CursorChaser({
  hoverSelector = "a,button,[data-cursor-expand],.btn-primary,.btn-secondary,.card",
}) {
  const coreRef = useRef(null);
  const haloRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (prefersReduced || isTouch) return;

    // create elements
    const core = document.createElement("div");
    const halo = document.createElement("div");

    core.setAttribute("aria-hidden", "true");
    halo.setAttribute("aria-hidden", "true");

    core.style.cssText = `position:fixed;left:0;top:0;pointer-events:none;z-index:9999; width:8px;height:8px;border-radius:50%;background:#6b8e6f;transform:translate3d(-50%,-50%,0); box-shadow:0 6px 18px rgba(107,142,111,0.18); transition:transform 220ms ease;`;

    halo.style.cssText = `position:fixed;left:0;top:0;pointer-events:none;z-index:9998; width:36px;height:36px;border-radius:50%;background:rgba(107,142,111,0.10); transform:translate3d(-50%,-50%,0); transition: width 280ms ease, height 280ms ease, background 220ms ease, opacity 220ms ease; backdrop-filter: blur(4px);`;

    document.body.appendChild(halo);
    document.body.appendChild(core);

    coreRef.current = core;
    haloRef.current = halo;

    const onPointerMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    let hovering = false;
    const updateHover = (e) => {
      const t = e.target;
      const found = t instanceof Element && !!t.closest(hoverSelector);
      if (found !== hovering) {
        hovering = found;
        if (hovering) {
          halo.style.width = "88px";
          halo.style.height = "88px";
          halo.style.background = "rgba(107,142,111,0.14)";
          core.style.transform = "translate3d(-50%,-50%,0) scale(1.25)";
        } else {
          halo.style.width = "36px";
          halo.style.height = "36px";
          halo.style.background = "rgba(107,142,111,0.10)";
          core.style.transform = "translate3d(-50%,-50%,0) scale(1)";
        }
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", updateHover, { passive: true });
    document.addEventListener("pointerout", updateHover, { passive: true });

    const tick = () => {
      pos.current.tx = lerp(pos.current.tx, pos.current.x, 0.18);
      pos.current.ty = lerp(pos.current.ty, pos.current.y, 0.18);
      const tx = pos.current.tx;
      const ty = pos.current.ty;

      if (coreRef.current) {
        coreRef.current.style.left = tx + "px";
        coreRef.current.style.top = ty + "px";
      }
      if (haloRef.current) {
        haloRef.current.style.left = tx + "px";
        haloRef.current.style.top = ty + "px";
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", updateHover);
      document.removeEventListener("pointerout", updateHover);
      coreRef.current?.remove();
      haloRef.current?.remove();
    };
  }, [hoverSelector]);

  return null;
}
