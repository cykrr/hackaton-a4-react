# Hackaton de Invierno — React A4 Poster

This is a Vite + React version of the poster rebuilt as a true A4 layout.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Print / export to PDF

Use browser print:

- Paper: A4
- Scale: 100%
- Margins: none / minimum
- Background graphics: enabled

The poster canvas is fixed to `794px × 1123px` on screen and `210mm × 297mm` in print.

## Where to replace the students image

The top-right block is currently a gradient placeholder. Replace the `.hero-placeholder` section in `src/App.tsx` with an `<img>` or set a background image in `src/styles.css` once the final photo/AI render is ready.
