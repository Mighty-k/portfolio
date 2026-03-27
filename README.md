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
