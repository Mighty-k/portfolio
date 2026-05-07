// App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Landing from "./pages/home";
import "./main.css";

const CursorChaser = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, {
    stiffness: 90,
    damping: 16,
    mass: 0.25,
  });
  const springY = useSpring(cursorY, {
    stiffness: 90,
    damping: 16,
    mass: 0.25,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const updateCursor = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("pointermove", updateCursor);

    const interactiveSelector =
      'a,button,input,textarea,select,label,[role="button"],[tabindex]:not([tabindex="-1"]),.btn-primary,.btn-secondary,.card,[data-cursor-expand="true"]';

    const updateHoverState = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        setIsHoveringInteractive(false);
        return;
      }

      setIsHoveringInteractive(Boolean(target.closest(interactiveSelector)));
    };

    window.addEventListener("pointerover", updateHoverState);
    window.addEventListener("focusin", updateHoverState);
    window.addEventListener("pointerout", updateHoverState);
    window.addEventListener("focusout", updateHoverState);

    return () => {
      window.removeEventListener("pointermove", updateCursor);
      window.removeEventListener("pointerover", updateHoverState);
      window.removeEventListener("focusin", updateHoverState);
      window.removeEventListener("pointerout", updateHoverState);
      window.removeEventListener("focusout", updateHoverState);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6b8e6f]/25 bg-[#6b8e6f]/10 shadow-[0_0_80px_rgba(107,142,111,0.16)]"
        animate={{
          scale: isHoveringInteractive ? 2.8 : 1,
          opacity: isHoveringInteractive ? 0.3 : 0.14,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ width: 20, height: 20 }}
      />
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6b8e6f] shadow-[0_0_24px_rgba(107,142,111,0.32)]"
        animate={{ scale: isHoveringInteractive ? 1.35 : 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{ width: 8, height: 8 }}
      />
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div
          style={{ backgroundColor: "#fdf8f3", color: "#2d2d2d" }}
          className="min-h-screen text-charcoal font-sans"
        >
          <CursorChaser />
          <Landing />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
