---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

---

## Phase 1: Design Thinking Before Any Code

Never jump straight to code. Spend a moment committing to a clear creative direction first.

**Understand the context:**

- **Purpose**: What exact problem does this solve? What is the user trying to accomplish?
- **Audience**: Who uses it and in what environment? (Professional tool? Consumer app? Portfolio? Dashboard?)
- **Mood**: What feeling should the interface evoke? (Confident, playful, serene, urgent, luxurious, raw?)
- **Constraints**: Framework, performance budget, accessibility requirements, existing brand/system.

**Commit to ONE unforgettable aesthetic direction.** Pick a lane from the spectrum below and push it hard — the sin is being timid or averaged-out, not being too bold:

| Direction              | Character                                                                  |
| ---------------------- | -------------------------------------------------------------------------- |
| Brutalist/Raw          | Exposed structure, heavy borders, monospace, stark contrast                |
| Editorial/Magazine     | Strong typographic hierarchy, white space as design element, pulled quotes |
| Retro-Futuristic       | CRT glow, scanlines, terminal green/amber, retrofuture space-age           |
| Luxury/Refined         | Tight letter-spacing, gold/cream, understated motion, serif headlines      |
| Organic/Natural        | Earthy palettes, irregular shapes, texture, hand-drawn feel                |
| Maximalist/Dense       | Layered information, tight grids, data-rich, every pixel occupied          |
| Toy-like/Playful       | Rounded corners, bold primaries, bouncy animation, friendly iconography    |
| Industrial/Utilitarian | Functional-first, technical annotations, blueprint/schematic feel          |
| Art Deco/Geometric     | Symmetry, gold accents, stepped forms, ornamental borders                  |
| Hyperminimal           | Extreme whitespace, one accent color, type as the only decoration          |

**The UNFORGETTABLE question**: Before writing a line of code, ask: _What is the one thing a user will remember about this interface?_ Design toward that answer deliberately.

---

## Phase 2: Visual System Setup

Establish the visual foundation first, then build components on top of it. Never style ad-hoc.

### Typography — The Most Underused Lever

Typography is the fastest way to make a design feel intentional and human. Rules:

- **Never** use Inter, Roboto, Arial, or system-ui as the primary/display font. These are invisible defaults, not design choices.
- Always load from Google Fonts or use @font-face. Pair a **display font** (headlines, hero) with a **text font** (body, UI). They should have contrast — a slab serif headline with a humanist sans body, or a condensed grotesque with a literary serif.
- Play with `letter-spacing`, `font-variant-numeric`, `font-feature-settings`, `text-transform`, and `line-height` as design tools, not afterthoughts.
- Use **size contrast aggressively**: hero text at 80–160px next to 13px captions is memorable. Graduated scales are timid.
- Great font pairings to consider (never repeat these across generations — always vary):
  - Playfair Display + DM Sans
  - Bebas Neue + Lato
  - Fraunces + IBM Plex Mono
  - Cormorant Garamond + Karla
  - Syne + Epilogue
  - DM Serif Display + Source Sans 3
  - Space Mono + Manrope
  - Righteous + Nunito
  - Archivo Black + Libre Baskerville

### Color Architecture

- Define a **palette with hierarchy**, not a flat list: one dominant, one secondary, one accent, one background, one foreground.
- Use CSS custom properties (`--color-*`) for every color. Never hardcode hex values in component styles.
- Dominant + accent is better than 5 competing colors of equal weight.
- Don't default to black/white. Deep navy + cream. Charcoal + warm stone. Forest green + off-white. These feel designed.
- For dark themes: avoid pure `#000000` backgrounds. Use `#0a0a0f`, `#0d1117`, `#111014`, `#1a1a2e` for depth.
- For light themes: avoid pure `#ffffff`. Use `#fafaf8`, `#f5f0e8`, `#f8f6f2` for warmth.

### Spacing & Layout System

- Define a base unit (4px or 8px) and derive all spacing from it via CSS variables: `--space-1: 4px`, `--space-2: 8px`, etc.
- **Break the grid deliberately** at one or two key moments — a full-bleed element, a rotated label, an oversized number. Grid-breaking draws the eye.
- Use CSS Grid for layout, Flexbox for alignment. Never use tables or float for layout.
- Generous negative space signals confidence. Dense layouts signal expertise. Choose based on context.

---

## Phase 3: Motion & Interaction Design

Motion should feel inevitable, not decorative. Every animation should have a reason.

### Principles

- **Enter animations**: Use staggered reveals on page load. Elements should cascade in (top-to-bottom, or outward from focal point). `animation-delay` is your friend.
- **Micro-interactions**: Hover states should telegraph interactivity. Scale, color shift, underline draw, shadow lift — pick one and be consistent.
- **State transitions**: Loading, empty, error, success states all deserve motion. A spinner is lazy; a morphing shape is designed.
- **Scroll-driven**: Use `@keyframes` + `animation-timeline: scroll()` (modern CSS) or Intersection Observer for scroll reveals.
- **Easing**: `ease-in-out` is forgettable. Use `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out), `cubic-bezier(0.34, 1.56, 0.64, 1)` (overshoot/spring), or `cubic-bezier(0.87, 0, 0.13, 1)` (dramatic) for personality.

### Patterns by Context

- **Landing pages**: One hero entrance animation (stagger text + image). Scroll-triggered section reveals. Hover states on CTAs.
- **Dashboards**: Animated number counters on load. Subtle chart draw-on animations. No entrance animations (they're distracting in productivity tools).
- **Interactive components**: Immediate feedback on every interaction (<100ms). Transition between states, not snap.
- **Portfolios/creative**: Cursor effects, magnetic buttons, image hover reveals, smooth page transitions.

### For React: Use Framer Motion / Motion

```jsx
import { motion } from "motion/react";

// Staggered children
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map((i) => (
    <motion.li key={i} variants={item}>
      {i}
    </motion.li>
  ))}
</motion.ul>;
```

### For HTML/CSS: Pure CSS Animation Patterns

```css
/* Staggered reveal */
.card {
  opacity: 0;
  transform: translateY(24px);
  animation: reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.card:nth-child(1) {
  animation-delay: 0.1s;
}
.card:nth-child(2) {
  animation-delay: 0.2s;
}
/* etc */
@keyframes reveal {
  to {
    opacity: 1;
    transform: none;
  }
}

/* Magnetic hover (JS-assisted) */
/* Spring easing */
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## Phase 4: Atmosphere & Depth

The background and surrounding atmosphere are what separate "designed" from "developer-styled."

### Background Techniques

**Gradient meshes** (CSS):

```css
background:
  radial-gradient(ellipse at 20% 50%, #1a1a3e 0%, transparent 60%),
  radial-gradient(ellipse at 80% 20%, #0d2d1a 0%, transparent 60%),
  radial-gradient(ellipse at 60% 80%, #2d0a1a 0%, transparent 60%), #080808;
```

**Noise texture overlay** (SVG filter):

```css
.noise::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.15;
}
```

**Grid/dot patterns**:

```css
background-image: radial-gradient(circle, #333 1px, transparent 1px);
background-size: 24px 24px;
/* or */
background-image:
  linear-gradient(#1a1a1a 1px, transparent 1px),
  linear-gradient(90deg, #1a1a1a 1px, transparent 1px);
background-size: 40px 40px;
```

**Glowing orbs** (decorative, behind content):

```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  background: radial-gradient(circle, var(--accent), transparent 70%);
  width: 400px;
  height: 400px;
  animation: drift 8s ease-in-out infinite alternate;
}
@keyframes drift {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(40px, -30px);
  }
}
```

### Component Depth Techniques

- **Glassmorphism** (use sparingly, only when background has visual complexity):
  `backdrop-filter: blur(12px); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);`
- **Layered shadows** (instead of a single box-shadow):
  `box-shadow: 0 1px 2px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.15);`
- **Inner borders** via outline or inset box-shadow for premium feel:
  `box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2);`
- **Text shadows** for glow effects:
  `text-shadow: 0 0 40px rgba(var(--accent-rgb), 0.5);`

---

## Phase 5: Interaction Patterns & Components

### Buttons

Never use a plain rectangle. Give buttons character:

- Offset shadow that moves on hover (press effect)
- Border that animates on hover (draw-in)
- Background that slides in on hover (fill from left)
- Icon that shifts position on hover
- Magnetic pull effect (JS mousemove)

```css
/* Sliding fill button */
.btn {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--accent);
  color: var(--accent);
}
.btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s var(--spring);
}
.btn:hover::before {
  transform: scaleX(1);
}
.btn span {
  position: relative;
  z-index: 1;
  mix-blend-mode: difference;
}
```

### Cards

- Use `transform: translateY()` on hover, not just box-shadow change
- Add a subtle gradient overlay that shifts on hover
- Consider `border-image` with gradients for colored borders

### Forms

- Labels that float above input on focus (not inside the input)
- Custom checkbox/radio with CSS only
- Error states with shake animation
- Progress/completion indicators

### Navigation

- Active states that slide between items (moving underline/highlight)
- Hamburger → X morphing animation
- Scroll-aware nav (shrinks/changes color on scroll)

---

## Phase 6: Technical Implementation Standards

### HTML/CSS/JS Artifacts

- All CSS in `<style>` block, all JS in `<script>` block, single file
- Load fonts from Google Fonts via `<link>` in `<head>`
- Use CSS custom properties for the entire design system
- Avoid inline styles except for dynamic JS-driven values
- Structure: variables → reset → layout → components → animations

### React Artifacts

- Single `.jsx` file with default export
- All styles via Tailwind utility classes (only core classes, no arbitrary values) OR a `<style>` tag with CSS variables
- Prefer `useState` + `useEffect` for interactivity; import from `"react"`
- Available libraries: `lucide-react`, `recharts`, `framer-motion` / `motion/react`, `lodash`, `d3`
- Component structure: constants → styled components/CSS → main component → export

### Responsive Design

- Mobile-first by default unless context demands otherwise
- Use `clamp()` for fluid typography: `font-size: clamp(1rem, 4vw, 3rem)`
- Use CSS Grid `auto-fit` / `minmax` for responsive card grids
- Touch targets minimum 44×44px

### Accessibility

- Semantic HTML (use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- Color contrast minimum AA (4.5:1 for text)
- Focus styles that are visible AND designed (not just browser default)
- `aria-label` on icon-only buttons
- Reduced motion: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`

---

## What to NEVER Do

- ❌ **Purple gradient on white/light background** — the most overused AI aesthetic
- ❌ **Inter, Roboto, or system-ui as display font** — invisible default, not a design choice
- ❌ **Flat colored rectangles as buttons** — earned through differentiation
- ❌ **Equal visual weight everywhere** — hierarchy requires contrast
- ❌ **Animations on every element** — dilutes the impact of intentional motion
- ❌ **Glassmorphism on flat backgrounds** — meaningless without visual complexity behind it
- ❌ **Cards with identical shadow, padding, border-radius** — cookie-cutter grid
- ❌ **Stock icon sets used carelessly** — icons should be consistent style and scale
- ❌ **Centering everything** — asymmetry and offset composition are more interesting
- ❌ **Playing it safe** — averaged-out aesthetics are forgettable

---

## Self-Audit Checklist

Before finalizing, ask:

- [ ] Would a professional designer be proud of this? Or embarrassed?
- [ ] Is the typography doing real design work (hierarchy, contrast, personality)?
- [ ] Is there one moment in this interface that is genuinely surprising or delightful?
- [ ] Are animations purposeful, or decorative noise?
- [ ] Does the color palette have clear dominant/accent hierarchy?
- [ ] Is the background adding atmosphere, or is it a flat rectangle?
- [ ] Did I use CSS variables for the entire design system?
- [ ] Are interactive states (hover, focus, active) all designed?
- [ ] Is this accessible at minimum AA contrast?
- [ ] If someone saw only a screenshot, would they know what kind of thing this is?

---

## Remember

Claude is capable of extraordinary creative work. The brief exists as a starting point, not a ceiling. Push the aesthetic direction until it feels genuinely crafted — not generated. Vary wildly between designs: dark and light, serif and sans, minimal and maximal, calm and kinetic. The only failure mode is converging on safe, forgettable, averaged-out output.

**The goal is work that makes someone stop scrolling.**
