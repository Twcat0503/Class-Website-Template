# Class Website Template / 班級網站模板

A clean, customizable class website template built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. Includes light/dark theme toggle, loading animations, and responsive layout for desktop and mobile.

乾淨可自訂的班級網站模板，採用 **Next.js 16** + **Tailwind CSS v4** + **TypeScript**。內建明暗主題切換、載入動畫、RWD 響應式版面。

## Tech Stack / 技術棧

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Linter | ESLint (next/core-web-vitals) |

## Quick Start / 快速開始

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands / 指令

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization Guide / 自訂教學

### 1. Site Name / 網站名稱

Edit `components/site-shell.tsx:47` — replace `班級名稱` with your class name.

### 2. Logo / Logo

Replace the logo placeholder in `components/site-shell.tsx:44` — swap the `Logo` text with an `<Image>` component or your SVG.

### 3. Navigation / 導航列

Edit the `navItems` array in `components/site-shell.tsx:8-14`.

### 4. Pages Content / 頁面內容

All pages under `app/` use placeholder text marked as `預留`. Replace them with your actual content:

| Page | Route | File |
|---|---|---|
| Home | `/` | `app/page.tsx` |
| About | `/about` | `app/about/page.tsx` |
| Showcase | `/showcase` | `app/showcase/page.tsx` |
| Members | `/members` | `app/members/page.tsx` |
| Contact | `/contact` | `app/contact/page.tsx` |

### 5. Theme / 主題

The theme toggle stores preference in localStorage under the key `class-web-theme`.

### 6. Footer / 頁尾

Edit the footer section in `components/site-shell.tsx:91-122`.

### 7. Site Metadata / 網站 Meta

Edit `app/layout.tsx:17-20` to update the site title and description.

### 8. Project Info / 專案資訊

Update `package.json` (name, description, repository URL, etc.) to match your project.

## Project Structure / 目錄結構

```
app/
├── about/page.tsx      # About page
├── contact/page.tsx    # Contact page
├── members/page.tsx    # Members page
├── showcase/page.tsx   # Showcase / projects page
├── favicon.ico
├── globals.css         # Global styles + Tailwind import
├── layout.tsx          # Root layout (metadata, fonts)
└── page.tsx            # Home page
components/
├── site-shell.tsx      # Navigation shell + footer + loading screen
└── theme-toggle.tsx    # Light/dark theme toggle
public/                 # Static assets (images, SVGs)
```

## Deployment / 部署

The template is optimized for **Cloudflare Pages** (`npm run pages:build`) and **Vercel**. Configure your deployment platform after customizing the content.

## License / 授權

[MIT](LICENSE) — Free to use, modify, and distribute for any class or educational purpose.

## Contributing / 貢獻

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

Built with ❤️ for every class. / 獻給每一個班級。
