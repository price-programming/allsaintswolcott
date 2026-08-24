# All Saints' Episcopal Church — Website Starter

A plain HTML/CSS starter site, styled as a modern, sleek alternative to a
page-builder template. No build tools, no framework — just files you can
edit directly and push to GitHub Pages.

## What's here

- `index.html` — homepage
- `visit.html` — service times & directions
- `clergy.html` — clergy / leadership (placeholder content — fill in real names/bios)
- `contact.html` — contact info + map
- `style.css` — all styling, driven by CSS variables at the top of the file

Pages **Events, Sermons, Newsletters, Vestry, Parish Life, Links** aren't
built yet — copy the pattern from `visit.html` or `clergy.html` (same
header/footer, swap the `<section class="page-hero">` and
`<div class="content-columns">` content) to add them, then link them from
the `nav.main-nav` block in every page's `<header>`.

## Design system (edit in `style.css`)

All colors and fonts are CSS variables at the top of `style.css` under `:root`:

```css
--wine: #7a2130;      /* primary accent */
--brass: #a87f3f;     /* secondary accent */
--green: #35503e;     /* tertiary accent */
--parchment: #f3ede0; /* background */
--font-display: "Fraunces", ...;  /* headlines */
--font-body: "Inter", ...;        /* body text */
```

Change these in one place to re-theme the whole site.

## Deploying on GitHub Pages

1. Create a new repository on GitHub (e.g. `allsaintswolcott-site`).
2. Push these files to the repo root (or to a `/docs` folder — see step 4).

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/allsaintswolcott-site.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
   Pick the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub gives you a URL like `https://YOUR-USERNAME.github.io/allsaintswolcott-site/`
   within a minute or two.
6. **Custom domain (optional):** if you want `allsaintswolcott.org` to point
   here instead of Bluehost, add a `CNAME` file to the repo containing just
   your domain name, then update your domain's DNS to point at GitHub Pages
   (GitHub's docs walk through the exact A/CNAME records). You'd cancel or
   downgrade the Bluehost hosting plan once DNS is switched, though you can
   keep the domain registration wherever it currently lives.

## Things worth doing before launch

- Swap the hero photo (currently pulled from the old site) for one you have
  rights to host yourself — drop it in an `/images` folder and update the
  `src` in `index.html`.
- Fill in real clergy names/bios on `clergy.html` — left as a placeholder
  since I couldn't pull that from the public site.
- Since GitHub Pages is static, a real contact form needs a third-party
  service (Formspree, Netlify Forms, etc.) if you want form submissions to
  actually email someone — a `mailto:` link works with zero setup in the
  meantime.
- Run it through Google's Lighthouse (in Chrome DevTools) once deployed to
  check performance/accessibility.
