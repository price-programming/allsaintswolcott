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

## TODO: 

- Pages **Events, Sermons, Newsletters, Vestry, Parish Life, Links** aren't
built yet — copy the pattern from `visit.html` or `clergy.html` (same
header/footer, swap the `<section class="page-hero">` and
`<div class="content-columns">` content) to add them, then link them from
the `nav.main-nav` block in every page's `<header>`.
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
