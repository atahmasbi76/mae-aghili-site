# Dr. Mae Aghili, DDS website — maeaghili.com

Astro static site. All text, offices and links live in `src/data/site.ts`.

## Run locally
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # outputs to dist/

## Before launch
- Set `showPalettePicker: false` and pick `defaultPalette` in `src/data/site.ts`.
- Replace the photo placeholders (hero blob, about photos) with real photos in `public/`.

## Deploy (Cloudflare Pages)
Connect the GitHub repo in Cloudflare Pages. Build command `npm run build`, output folder `dist`.
