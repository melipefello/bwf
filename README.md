# BWF Primer — personal reference site

Static HTML reference for [Nick-E’s BWF Primer](https://nick-e.com/primer/). Open `index.html` locally or host on **GitHub Pages**.

## Repository

Remote: [github.com/melipefello/bwf](https://github.com/melipefello/bwf)

## GitHub Pages

1. Repository **Settings → Pages**.
2. **Build and deployment**: Source **Deploy from a branch**, branch **main**, folder **/ (root)**.
3. After the first deploy, the site is at **https://melipefello.github.io/bwf/**.

Internal links use root-relative paths (`CSS/`, `DAYS/`, `PROGRAM/`, `NUTRITION/`) so they work on that URL. An empty `.nojekyll` file is included so Jekyll does not touch the site.

**PROGRAM/** — separate 14-day home program (rope + bodyweight) with its own day pages and `localStorage` completion key, independent of the Nick-E build-up in `DAYS/`.

## Credits

Program content © [Nick-E](https://nick-e.com/primer/). This repo is a personal companion reference only.
