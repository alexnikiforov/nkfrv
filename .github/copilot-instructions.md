<!-- Copilot / AI agent instructions for the nkfrv static site -->

Goal
----
Help maintain and update this repository, which is a small static website with a duplicated "widr" variant (language/layout copy). Focus on file locations, build-free workflows, and project-specific conventions.

Quick architecture
------------------
- Root is a static site: `index.html`, `css/`, `js/`, `img/`, `fonts/`.
- `widr/` contains a parallel copy (alternate variant) with its own `index.html`, `css/`, `js/` and `fr/` subfolder — changes to the root site often need to be mirrored into `widr/`.
- Styling uses SCSS partials in `css/` (`_variables.scss`, `_fonts.scss`) and a compiled `styles.css` alongside `styles.scss`.
- Kube framework appears in `widr/css/kube.css` and `widr/js/kube.js` (vendor files).

Key files to inspect
--------------------
- `index.html` — primary entry.
- `css/styles.scss`, `css/_variables.scss`, `css/_fonts.scss` — edit variables here and recompile SCSS.
- `css/styles.css` — compiled output; keep this in sync if you change SCSS.
- `js/` and `widr/js/` — mostly vendor/minified files (e.g., `wow.min.js`, `kube.min.js`).
- `site.webmanifest` and `CNAME` — PWA/hosting metadata and custom domain.
- `img/icons/` — site icons and favicons.

Developer workflows (practical)
------------------------------
- No npm/pipeline detected. The site ships compiled CSS/JS; you can run the site locally by opening `index.html` in a browser or using a simple static server (e.g., `live-server` or `python -m http.server`).
- To update styles from SCSS:
  - Edit `css/_variables.scss` or `css/styles.scss`.
  - Recompile with `sass css/styles.scss css/styles.css` (install Dart Sass if needed).
- When editing CSS/JS that exists both at root and in `widr/`, mirror edits to both locations unless you intentionally want a variant.
- Vendor JS is usually minified; prefer replacing vendor files with updated minified releases rather than editing them inline.

Conventions & patterns
----------------------
- SCSS partials begin with `_` (e.g., `_variables.scss`). `styles.scss` imports these.
- Keep relative paths intact — HTML links are relative and rely on file structure.
- `widr/` functions as a separate site copy (language/variant). Use it for testing replicated changes.

Deployment notes
----------------
- `CNAME` indicates GitHub Pages hosting with a custom domain. Deploy by pushing to the repository branch configured for Pages (typically `main` or `gh-pages`).
- Avoid changing `site.webmanifest` and `CNAME` unless you understand hosting implications.

Common tasks examples
---------------------
- Change primary color: update `css/_variables.scss` → run `sass css/styles.scss css/styles.css` → verify `index.html` in browser.
- Replace a vendor library: put new minified file in `js/` and `widr/js/`, update any script tags if filenames changed.
- Update icons: edit files under `img/icons/` and ensure favicons referenced in `index.html` are updated.

What an AI assistant should avoid
--------------------------------
- Don't assume a build system (no `package.json` present). Do not add complex build tooling without confirmation.
- Don't remove or rename `CNAME` or `site.webmanifest` without explicit instruction.

If you need more context
-----------------------
- Tell me which files you plan to edit (paths). I will list exact places to update (both root and `widr/`) and produce exact `sass` or copy commands.

End.
