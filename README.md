**English** | [繁體中文](README.zh-TW.md)

<div align="center">

# Class Website Template

**A clean, customizable class website template**

Five ready-made pages, light/dark theme, and a responsive layout — built with Next.js 16, Tailwind CSS v4, and TypeScript. Replace the `預留` placeholders and your class website is live.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-61dafb)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8)](https://tailwindcss.com)
[![Node.js ≥ 20.9](https://img.shields.io/badge/node-%E2%89%A5%2020.9-brightgreen)](package.json)
[![CI](https://github.com/Twcat0503/Class-Website-Template/actions/workflows/ci.yml/badge.svg)](https://github.com/Twcat0503/Class-Website-Template/actions/workflows/ci.yml)

</div>

> **Status:** v1.0.0 template baseline. Every page ships with placeholder content marked `預留` ("reserved"), so nothing needs deleting before it can be filled in. Default UI strings are Traditional Chinese (`lang="zh-Hant"`); see [Customizing](#customizing) below.

## What is this?

Class Website Template is a starter for a class or student-association site: Home, About, Showcase, Members, and Contact, wrapped in one shared shell with sticky navigation, active-link highlighting, a scrollable mobile nav, a loading animation, and a light/dark theme toggle. No UI kit, no CSS-in-JS, no CMS, no analytics — just Next.js, React, and Tailwind utility classes, so students can read and change every line.

## Why this template?

- **Everything in one place.** Navigation, loading screen, and footer live in a single `components/site-shell.tsx`; nav labels are one small array at the top of the file.
- **Placeholders, not demos.** Unfinished sections display `預留`. A search for `預留` lists exactly what a class still has to fill in — nothing is hidden behind fake sample data.
- **Zero runtime extras.** No third-party UI components, no tracking, no cookies. Fonts are self-hosted at build time via `next/font`; the only stored state is the theme preference in `localStorage`.
- **Theme done properly.** Dark mode uses Tailwind `dark:` variants plus CSS variables, falls back to `prefers-color-scheme`, and persists the choice under the `class-web-theme` key.
- **Bilingual repo docs.** The README and the customization guide exist in English and [繁體中文](README.zh-TW.md), with language links at the top of each file.

## Quick start

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check without emitting files |
| `npm run pages:build` | Build for Cloudflare Pages (`next-on-pages`) |

## Customizing

Replace these and the site is yours:

1. **Site name & logo** — `班級名稱` and the `Logo` placeholder in `components/site-shell.tsx`
2. **Navigation** — the `navItems` array in `components/site-shell.tsx`
3. **Page content** — the five pages under `app/` (all placeholder text is marked `預留`)
4. **Theme & fonts** — `app/globals.css`, `components/theme-toggle.tsx`, fonts in `app/layout.tsx`
5. **Metadata & favicon** — `metadata` in `app/layout.tsx`, `app/favicon.ico`
6. **Project identity** — `package.json` (name, description, repository URL)

Full walkthrough with code snippets: [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md) · [docs/CUSTOMIZATION.zh-TW.md](docs/CUSTOMIZATION.zh-TW.md)

## Pages

| Page | Route | File |
|---|---|---|
| Home | `/` | `app/page.tsx` |
| About | `/about` | `app/about/page.tsx` |
| Showcase | `/showcase` | `app/showcase/page.tsx` |
| Members | `/members` | `app/members/page.tsx` |
| Contact | `/contact` | `app/contact/page.tsx` |

## Project structure

```
app/
├── about/page.tsx        # About page
├── contact/page.tsx      # Contact page
├── members/page.tsx      # Members page
├── showcase/page.tsx     # Showcase / projects page
├── favicon.ico
├── globals.css           # Global styles + Tailwind import + CSS variables
├── layout.tsx            # Root layout (metadata, fonts, SiteShell)
└── page.tsx              # Home page
components/
├── site-shell.tsx        # Navigation shell + loading screen + footer
└── theme-toggle.tsx      # Light/dark theme toggle
docs/                     # Customization guides (en / zh-TW)
public/                   # Static assets (images, SVGs)
```

## Deployment

The template runs on any platform that hosts Next.js:

- **Vercel** — zero configuration; import the repository and deploy.
- **Cloudflare Pages** — run `npm run pages:build`; the output lands in `.vercel/output` for `wrangler pages deploy`.

Both paths are exercised by CI (`npm run lint`, `npm run typecheck`, `npm run build`). After customizing the content, configure your deployment platform of choice.

## Documentation

| Document | Contents |
|---|---|
| [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md) | Step-by-step customization guide (English) |
| [docs/CUSTOMIZATION.zh-TW.md](docs/CUSTOMIZATION.zh-TW.md) | 逐步自訂教學（繁體中文） |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Development setup, style, commit and PR rules |
| [SECURITY.md](SECURITY.md) | Vulnerability reporting and data handling |
| [CHANGELOG.md](CHANGELOG.md) | Notable changes (Keep a Changelog format) |

## Contributing

Issues and pull requests in English or 繁體中文 are welcome. Development setup, manual test checklist, and contribution rules are in [CONTRIBUTING.md](CONTRIBUTING.md). For suspected vulnerabilities, see [SECURITY.md](SECURITY.md).

## License

Released under the [MIT](LICENSE) license — free to use, modify, and distribute for any class or educational purpose. Third-party dependencies retain their own licenses.

## Author

Design & development: [twcat0503](https://github.com/Twcat0503)

Built with care for every class. / 獻給每一個班級。
