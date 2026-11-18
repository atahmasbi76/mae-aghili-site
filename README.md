# Dr. Mae Aghili, DDS website — maeaghili.com

Astro static site. All text, offices and links live in `src/data/site.ts`.

## Run locally
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # outputs to dist/

## Before launch
- Replace the photo placeholders (hero blob, about photos) with real photos in `public/`.

## Deploy (Cloudflare Workers)
The `mae-aghili-site` Worker in Cloudflare is connected to this repo. Every push to `main`
runs `npm run build` and then `npx wrangler deploy`, which serves `dist/` as static
assets (see `wrangler.jsonc`). Live at https://maeaghili.com and https://www.maeaghili.com.
