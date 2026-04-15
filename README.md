# Ankit Kumar Tiwari — Portfolio

Modern React portfolio website built with Vite.

## Run Locally

```bash
npm install
npm run dev
```

Runs on → http://localhost:5173

## Setup Email Form

1. Go to [formspree.io](https://formspree.io) → Create free account
2. Create a new form → Copy your Form ID
3. In `src/components/Contact.jsx`, replace `YOUR_FORM_ID`:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## Deploy to GitHub Pages / Vercel / Netlify

```bash
npm run build
```
Upload the `dist/` folder or connect your GitHub repo.

## Tech Stack

- React 18 + Vite
- Pure CSS with CSS Variables (no Tailwind needed)
- Formspree for contact form
- Google Fonts: Syne + DM Mono + Instrument Sans
