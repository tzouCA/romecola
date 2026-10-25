import { defineConfig } from 'astro/config';

// GitHub Actions automatically supplies GITHUB_REPOSITORY as "owner/repository".
// No need to edit this file for standard GitHub Pages URLs.
const slug = process.env.GITHUB_REPOSITORY || '';
const [owner, repository] = slug.split('/');
const isRootSite = Boolean(owner && repository && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`);

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: owner && repository && !isRootSite ? `/${repository}/` : '/',
  output: 'static',
});
