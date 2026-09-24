# Portfolio site: notes for Claude Code

Astro static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Adding a project
1. Create `src/content/projects/<slug>.md`. The slug becomes the URL: `/projects/<slug>/`.
2. Frontmatter fields are defined in `src/content.config.ts`: title, tagline, date, status (idea | in-progress | beta | released), platforms, tech, builtWith (AI tools used), repo, demo, download {label, url}, cover, accent, featured.
3. Body: a short intro, then `## Features`, then `## How to install` / `## How to use it`, and end with a question for readers as a `>` blockquote to prompt comments.
4. Screenshots go in `public/images/<slug>/`. Set `cover: /images/<slug>/cover.png`.
5. Run `npm run build` to check that it builds before committing.

## Settings
All toggles (comments, tips, analytics) are in `src/site.config.ts`.

## Conventions
- Plain CSS in `src/styles/global.css` with CSS variables and dark mode through `prefers-color-scheme`.
- No UI framework. Keep it static and fast.
