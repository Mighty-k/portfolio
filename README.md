# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Image optimization

This project now uses `vite-plugin-imagemin` during production builds.

- PNG/JPEG/SVG assets are compressed
- WebP versions are generated for eligible images

Run:

```bash
npm install
npm run build
```

The optimized files are emitted in the build output directory.

---

Restructure summary

- Updated Tailwind configuration with design tokens (colors, fonts, container).
- Rewrote global styles in `src/main.css` to enable Tailwind base/components/utilities, add CSS tokens, and respect `prefers-reduced-motion`.
- Added SEO/meta tags and font preconnect in `index.html`.
- Switched app root to use design tokens in `src/App.jsx`.

Next steps

- Run `npm install` and `npm run dev` to preview locally.
- I can continue by polishing components, adding accessible form handling, and optimizing images — tell me which area to prioritize next.
