# RoMeCoLa Lab — Astro website (GitHub Pages ready)

This is a design **prototype** that can be hosted on GitHub Pages. The 13 research project descriptions, sample publications, and some lab photos appear in the single scrolling homepage. The hero illustration and some other visuals are illustrative, not proof of current lab facilities.

## Easiest publication path (no Node.js needed on your computer)

1. Create a free GitHub account, or sign into your existing one. If creating a new lab repository, the repository owner should be the PI or a lab-owned GitHub organization, not a student.
2. On GitHub: **+ → New repository**. Use name `romecola`, **Public**, and tick **Add a README file** (so that GitHub Desktop can easily clone it). Click **Create repository**.
3. Install GitHub Desktop: <https://desktop.github.com/>. Sign in. Select **File → Clone repository** and choose the new `romecola` repository.
4. On your computer, unzip this archive. Open the inner folder containing `src`, `public`, `.github`, `astro.config.mjs`, `package.json`. Copy **its contents**, not the outer folder itself, into the repository folder created by GitHub Desktop. Replace the original README if asked. The hidden-ish `.github` folder is required!
5. In GitHub Desktop: enter Summary `Initial RoMeCoLa website`, click **Commit to main**, then **Push origin**.
6. On the GitHub repository web page: **Settings → Pages → Build and deployment → Source: GitHub Actions**. If already selected, leave it.
7. Visit the **Actions** tab to monitor the `Deploy Astro site to GitHub Pages` workflow. On success, open **Settings → Pages → Visit site**. Default URL: `https://YOUR-USERNAME.github.io/romecola/`.

If the repository is named differently, the included Astro config will use that repository name automatically when built in GitHub Actions.

## Updates

- Edit the `PROJECTS` and `PUBS` arrays at the bottom of `src/pages/index.astro`.
- Research illustrations are in `public/assets/`.
- The `public/preview.html` file is optional. The website homepage is `src/pages/index.astro`.
- Commit and push changes to `main`; GitHub Actions will redeploy automatically.

## Optional local preview

Install a current Node.js LTS release, then open a terminal in the repository folder:

```shell
npm install
npm run dev
```

Open the URL printed by Astro (usually `http://localhost:4321`). To test a production build, run `npm run build`. You do not need Node.js or any terminal commands to publish this site through GitHub Desktop.

## Permissions and precautions

- GitHub personal repositories: the owner has full control. A collaborator can contribute to the code.
- GitHub organization: grant yourself `Owner`/repository `Admin`; students usually only need repository `Write`, never `Admin`.
- Keep the repository public if you use GitHub Pages on GitHub Free; do not upload private proposals, credentials, grant files, or unpublished results.
- Before announcing the site, verify faculty, students, papers, media rights, and MUN branding requirements.
- Do not upload the ZIP itself as a file in GitHub; unzip it and commit the files and directories **inside** it.

## Workflow details

The included `.github/workflows/deploy.yml` runs `npm install`, `npm run build`, and publishes `dist/` with GitHub Pages Actions. Its permissions grant the workflow only the specific deployment permissions required (`contents: read`, `pages: write`, `id-token: write`).
