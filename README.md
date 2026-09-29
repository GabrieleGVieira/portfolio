# Personal Page

Repository of my digital resume, live at: [https://gabrielegvieira.github.io/portfolio](https://gabrielegvieira.github.io/portfolio/)

## Tech stack

- React 16 (Create React App / `react-scripts` 2.1.5)
- Bootstrap (static CSS/JS in `public/`)
- Ant Design Icons
- i18next + react-i18next (English and Portuguese, with browser language detection)
- Deployed to GitHub Pages via `gh-pages`

## Project structure

```
src/
├── components/
│   ├── About/             # About section and service cards
│   ├── LanguageSwitcher/  # EN/PT toggle
│   ├── Projects/          # Featured case studies and other projects
│   ├── Sidebar/
│   ├── Timeline/          # Experience timeline
│   └── common/            # Shared UI (Button, IconLink, SectionHeading)
├── data/                  # links.js, projects.js
├── i18n/                  # i18n setup and locales (en, pt)
└── styles/
```

## Getting started

```bash
yarn install
yarn start
```

The app runs at http://localhost:3000.

## Scripts

| Command       | Description                                   |
| ------------- | --------------------------------------------- |
| `yarn start`  | Start the development server                  |
| `yarn build`  | Create a production build in `build/`         |
| `yarn test`   | Run tests                                     |
| `yarn deploy` | Build and publish `build/` to GitHub Pages    |

The scripts set `NODE_OPTIONS=--openssl-legacy-provider`, which is needed to run this older toolchain on recent Node versions.

## Editing content

- Projects: `src/data/projects.js`
- Links: `src/data/links.js`
- Translations: `src/i18n/locales/en` and `src/i18n/locales/pt`

## Contact

- LinkedIn: https://www.linkedin.com/in/gabrielevieira/
- Email: gabrielevieira.co@gmail.com
