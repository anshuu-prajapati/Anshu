# Anshu Prajapati — Portfolio

A React + Vite portfolio themed around agentic AI / orchestration: an
animated router node-graph hero, a typewriter profile panel, an
expandable experience pipeline, a capability "spectrum" dashboard,
a deploy-console for projects, a credentials ledger, and a small
interactive terminal for contact.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # sanity-check the production build
```

## Deploy to GitHub Pages

1. Update `homepage` in `package.json` to your actual Pages URL
   (e.g. `https://<your-username>.github.io/<repo-name>` if it's
   not a `<username>.github.io` root repo).
2. Push this project to a GitHub repo.
3. Run:

```bash
npm install
npm run deploy
```

This builds the site and publishes the `dist` folder to a `gh-pages`
branch via the `gh-pages` package. Enable GitHub Pages on that branch
in your repo settings if it isn't automatic.

## Editing content

- **Profile / bio:** `src/components/About.jsx` — `PROFILE_TEXT` and `SPEC_ROWS`.
- **Experience:** `src/components/Experience.jsx` — `JOBS` array.
- **Skills:** `src/components/Skills.jsx` — `CATEGORIES` array. The `level`
  values (0–100) are illustrative starting points — adjust them to
  whatever feels right.
- **Projects:** `src/components/Projects.jsx` — `PROJECTS` array. Add a
  `link` field per project if/when you have individual repo URLs and
  wire it into the console's "source" action.
- **Certificates / education:** `src/components/Credentials.jsx`.
- **Contact links:** `src/components/Contact.jsx` — `LINKS` object.
- **Colors / fonts / spacing:** `src/index.css` — tokens live at the
  top under `:root`.
