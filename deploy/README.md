# Deployment notes

## Netlify

Netlify only auto-detects **`netlify.toml` at the repository root** (unless you set a different “Base directory” in the Netlify UI for a monorepo). So that file **stays next to `package.json`** on purpose—it isn’t clutter, it’s where Netlify looks.

This project’s root `netlify.toml` includes:

- **Build:** `npm run build`
- **Publish:** `dist`
- **SPA redirect:** all routes → `index.html` (fixes refresh on `/home`, `/quantex`, etc.)

You don’t need a `public/_redirects` file when the redirect is defined here.

## Other hosts

Use whatever that host needs (e.g. Nginx `try_files`, Vercel `vercel.json`). Those aren’t in this folder because each platform expects its config in specific places.
