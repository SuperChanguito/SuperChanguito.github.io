# SuperChanguito Portfolio

A free, fast portfolio for the apps I build with Claude Code, Gemini, and OpenAI.
Built with [Astro](https://astro.build) and hosted free on GitHub Pages.

## Go live in about 10 minutes

1. **Create the repo.** On GitHub, create a new **public** repo named exactly `SuperChanguito.github.io`.
2. **Push this folder.** Open a terminal in this folder and run Claude Code:
   > "Initialize git, commit everything, and push to https://github.com/SuperChanguito/SuperChanguito.github.io on the main branch."
   (Or do it yourself: `git init && git add . && git commit -m "Initial site" && git branch -M main && git remote add origin <url> && git push -u origin main`.)
3. **Turn on Pages.** In the repo, go to **Settings → Pages → Source → GitHub Actions**.
4. After about 2 minutes, your site is live at **https://superchanguito.github.io**.

Every push to `main` redeploys the site automatically.

## Run it locally
```
npm install
npm run dev      # http://localhost:4321
```

## Add a project
Add a markdown file to `src/content/projects/`. Copy an existing one as a template.
With Claude Code, you can just say:
> "Add a portfolio project for my repo https://github.com/SuperChanguito/<repo>. Read its README and follow CLAUDE.md."

## Turn on the extras (all free)
Edit `src/site.config.ts`:
| Feature | Service | Setting |
|---|---|---|
| Tip jar | [ko-fi.com](https://ko-fi.com) | `kofiUsername` |
| Visitor analytics (privacy-friendly) | [goatcounter.com](https://www.goatcounter.com) | `goatcounterCode` |

Comments use [Giscus](https://giscus.app) (GitHub Discussions; commenters sign in with GitHub). The embed lives in `src/components/Comments.astro`.

## Roadmap (use as GitHub Issues / a Projects board)

**Milestone 1: MVP live**
- [ ] Push to GitHub and enable Pages
- [ ] Add real screenshots / cover images for UScan3D and Camino Companion
- [ ] Fix project dates in the frontmatter
- [ ] Write the About page in your own words

**Milestone 2: Feedback loop**
- [ ] Turn on Cusdis comments
- [ ] Turn on GoatCounter analytics
- [ ] Deploy Camino Companion as a live demo (e.g. its own GitHub Pages site) and add the `demo:` link
- [ ] Publish a GitHub Release for UScan3D with the IPA, and point `download:` at it

**Milestone 3: Audience**
- [ ] Mirror projects on itch.io
- [ ] Share on Reddit (r/ClaudeAI, r/3Dprinting, r/CaminoDeSantiago), X, and Bluesky
- [ ] Add a "built with" comparison post: Claude Code vs Gemini vs Codex on the same task

**Milestone 4: Monetize what gets traction**
- [ ] Ko-fi tip button
- [ ] Pay-what-you-want on itch.io / Lemon Squeezy for the most popular project
