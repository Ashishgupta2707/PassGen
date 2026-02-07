# Password Generator

A modern React-based password generator that creates secure, customizable passwords with real-time options and one-click copy functionality.

## Demo


![App screenshot - generator view](public/screenshots/screenshots.png)


## Features

- Generate random passwords with configurable length (4–50).
- Toggle character sets: uppercase, lowercase, numbers, symbols.
- Copy generated password to clipboard (with temporary "Copied!" indicator).
- Visual strength indicator and a simple, responsive UI.

## Tech stack

- React 19
- Vite
- Tailwind CSS
- PostCSS
- ESLint

<!-- ## Repository structure (important files)

- `index.html` — app entry HTML served by Vite
- `src/main.jsx` — React entry
- `src/App.jsx` — main app and UI (password generator logic)
- `src/index.css`, `src/App.css` — styles (Tailwind + custom)
- `tailwind.config.js`, `postcss.config.js` — Tailwind/PostCSS setup
- `package.json` — scripts and dependencies -->

## Getting started (development)

These commands assume you have Node.js (16+) and npm installed.

Open a terminal at the project root and run:

```powershell
npm install
npm run dev
```

Then open the local URL printed by Vite (usually http://localhost:5173/).

Available scripts (from `package.json`):

- `npm run dev` — start dev server
- `npm run build` — build production bundle
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint

<!-- ## How to add screenshots to this README

1. Create the folder `public/screenshots` at the project root. Vite serves files in `public` at the app root, so images will be available at `/screenshots/<name>`.
2. Add one or more screenshots (PNG or JPG). Recommended sizes: 1280×720 (landscape) or 800×600. Keep file sizes reasonable (under 200 KB) for faster loading.
3. Embed screenshots in this README with markdown. Example:

```markdown
![App screenshot - generator view](/screenshots/screenshot-1.png)
```

Place the images in `public/screenshots` and commit them to the repo. When you push the repo or view it locally with Vite running, the images will render in this README when previewed on Git hosting (GitHub/GitLab) or when served by Vite. -->

## Development notes

- The main logic for generating passwords is in `src/App.jsx`. It constructs a character set depending on toggles and generates a string of the chosen length.
- The UI is built with Tailwind utility classes. To change styles, edit `src/App.css` or `tailwind.config.js`.
- The app uses the browser Clipboard API for copying; this works on modern browsers.

## Contributing

Small changes and improvements are welcome. Suggested flow:

1. Create a branch for your change.
2. Make changes and run `npm run dev` locally.
3. Lint and test if you add logic (`npm run lint`).
4. Open a pull request describing the change.

## License

This project currently has no license specified. If you want to make it open-source, add a `LICENSE` file (for example an MIT license).
<!-- 
## Contact

If you want help improving this README or the app, tell me which screenshots you'd like included and I can add example images and updated docs.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
