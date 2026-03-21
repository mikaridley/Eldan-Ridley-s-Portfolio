# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Production: 404 on refresh (`/home`, `/quantex`, etc.)

This app uses **client-side routing** (React Router). A **full page refresh** on any route asks the **server** for that path (e.g. `/home`). If the server does not return `index.html`, you get **404** and “Failed to load resource” in the console.

**Fix:** configure the host so **non-file URLs** fall back to `index.html` (SPA fallback).

**Netlify (this repo):** root `netlify.toml` sets build, publish, and the SPA redirect. See `deploy/README.md` for why it stays at the repo root.

Other hosts: e.g. Nginx `try_files $uri $uri/ /index.html;` in `location /`.

Redeploy after changing host config.
