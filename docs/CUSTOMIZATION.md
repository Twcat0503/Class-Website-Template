# Customization Guide

This guide walks through everything a class needs to turn the template into
its own website. Every change listed here is a text edit — no configuration
step is hidden.

A quick way to find everything that still needs real content:

```bash
rg -n "預留" app components
```

`預留` means "reserved"; the template uses it as the placeholder text in every
unfinished section.

## 1. Site name and logo

Both live in the header of `components/site-shell.tsx`:

```tsx
<div className="...">
  Logo            {/* replace with an <Image> or inline SVG */}
</div>
<span className="...">
  班級名稱        {/* replace with your class name */}
</span>
```

To use an image, drop the file in `public/` and swap the `Logo` placeholder:

```tsx
import Image from "next/image";

<Image src="/logo.png" alt="班級名稱" width={44} height={44} className="rounded-full" />
```

## 2. Navigation

Edit the `navItems` array at the top of `components/site-shell.tsx`:

```tsx
const navItems = [
  { label: "首頁", href: "/" },
  { label: "關於本班", href: "/about" },
  { label: "成果", href: "/showcase" },
  { label: "成員", href: "/members" },
  { label: "聯絡方式", href: "/contact" },
];
```

The same array feeds both the desktop navbar and the scrollable mobile nav,
so one edit updates both. Every `href` must have a matching page under
`app/`; to remove a page, delete its folder under `app/` **and** its entry in
`navItems`.

## 3. Page content

| Page | Route | File |
|---|---|---|
| Home | `/` | `app/page.tsx` |
| About | `/about` | `app/about/page.tsx` |
| Showcase | `/showcase` | `app/showcase/page.tsx` |
| Members | `/members` | `app/members/page.tsx` |
| Contact | `/contact` | `app/contact/page.tsx` |

Replace every `預留` with real content. If you intentionally leave a section
unfinished, keep the `預留` marker so the search above stays useful.

Members and contact pages usually carry personal data (rosters, email
addresses). See [SECURITY.md](../SECURITY.md) for the privacy expectations.

## 4. Footer

The footer is the `<footer>` block at the bottom of
`components/site-shell.tsx`. It has three columns (intro, other information,
contact) plus a domain placeholder (`your-class.vercel.app`). Replace each
`預留` and the domain with your own.

## 5. Theme

The theme system is three parts:

- `components/theme-toggle.tsx` — resolves the initial theme from
  `localStorage("class-web-theme")`, then `prefers-color-scheme`, then light.
  Toggling writes the `dark` class and `data-theme` attribute on `<html>` and
  updates the `--background` / `--foreground` CSS variables.
- `app/globals.css` — the default variable values, including the
  `prefers-color-scheme: dark` fallback.
- Tailwind `dark:` variants — used directly in components.

Customizations you are expected to make:

- **Toggle icon.** The button currently shows the literal text `icon` as a
  placeholder. Replace it with an emoji, SVG, or icon set of your choice.
- **Toggle label.** The accessible name is the string `切換主題` in
  `components/theme-toggle.tsx`.
- **Colors.** Edit the `--background` / `--foreground` values in
  `app/globals.css`, or restyle components via their Tailwind classes.

## 6. Fonts

Fonts are loaded with `next/font` in `app/layout.tsx`:

```tsx
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
```

Swap `Geist` for any [supported family](https://nextjs.org/docs/app/api-reference/components/font)
— for Chinese text, `Noto_Sans_TC` is a common choice (`subsets: ["latin"]`
can stay as-is; CJK glyphs load via unicode-range). `app/globals.css` keeps a
system-font fallback chain, and note that Latin subsets do not cover Chinese
glyphs, which is why the fallback matters.

## 7. Metadata, language, and favicon

In `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Class Website Template",
  description: "A clean, customizable template for class websites built with Next.js",
};
```

Update the title and description (add `openGraph` if you want nice link
previews), and set `<html lang="...">` — it ships as `zh-Hant`; change it if
you rebuild the site in English. Replace `app/favicon.ico` with your class
favicon.

## 8. Loading screen

`components/site-shell.tsx` shows a spinner overlay for 900 ms after mount:

```tsx
const timer = setTimeout(() => setIsReady(true), 900);
```

Adjust the delay, change the `載入中...` text, or delete the `{!isReady && ...}`
block to remove the splash entirely.

## 9. Project identity

Update `package.json`: `name`, `description`, `author`, and the
`homepage` / `repository` / `bugs` URLs, which currently point at
`Twcat0503/Class-Website-Template`. Forks should point them at the fork.

## 10. Deployment

The site runs wherever Next.js runs (Node.js ≥ 20.9):

- **Vercel** — import the repository; no configuration required.
- **Cloudflare Pages** — build with `npm run pages:build`, then deploy the
  `.vercel/output` directory with `wrangler pages deploy`.

The template uses App Router pages without `output: "export"`, so a static
file host alone is not enough — pick a platform that runs Next.js.

---

← [README (English)](../README.md) · [README（繁體中文）](../README.zh-TW.md)
