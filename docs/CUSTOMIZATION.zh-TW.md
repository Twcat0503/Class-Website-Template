# 自訂教學

本教學帶你走完把模板變成班級自己的網站需要動的全部地方。下面列出的每個修改都只是文字編輯，沒有藏起來的設定步驟。

快速找出還沒填真實內容的地方：

```bash
rg -n "預留" app components
```

`預留` 是模板在每個未完成區塊使用的佔位文字。

## 1. 網站名稱與 Logo

兩個都在 `components/site-shell.tsx` 的 header 裡：

```tsx
<div className="...">
  Logo            {/* 換成 <Image> 或 inline SVG */}
</div>
<span className="...">
  班級名稱        {/* 換成你們班的名稱 */}
</span>
```

要用圖片的話，把檔案放進 `public/`，再把 `Logo` 佔位換掉：

```tsx
import Image from "next/image";

<Image src="/logo.png" alt="班級名稱" width={44} height={44} className="rounded-full" />
```

## 2. 導覽列

編輯 `components/site-shell.tsx` 頂端的 `navItems` 陣列：

```tsx
const navItems = [
  { label: "首頁", href: "/" },
  { label: "關於本班", href: "/about" },
  { label: "成果", href: "/showcase" },
  { label: "成員", href: "/members" },
  { label: "聯絡方式", href: "/contact" },
];
```

同一個陣列同時餵桌面導覽列和可橫向捲動的行動版導覽，改一次兩邊都更新。每個 `href` 都要能在 `app/` 下找到對應頁面；要刪頁面時，`app/` 下的資料夾**和** `navItems` 裡的項目都要一起刪。

## 3. 頁面內容

| 頁面 | 路由 | 檔案 |
|---|---|---|
| 首頁 | `/` | `app/page.tsx` |
| 關於本班 | `/about` | `app/about/page.tsx` |
| 成果 | `/showcase` | `app/showcase/page.tsx` |
| 成員 | `/members` | `app/members/page.tsx` |
| 聯絡方式 | `/contact` | `app/contact/page.tsx` |

把每個 `預留` 換成真實內容。刻意留白、之後才要補的區塊請保留 `預留` 標記，上面的搜尋才會一直好用。

成員頁和聯絡頁通常會出現個人資料（名單、email）。隱私相關期待見 [SECURITY.md](../SECURITY.md)。

## 4. 頁尾

頁尾是 `components/site-shell.tsx` 最下面的 `<footer>` 區塊，分三欄（簡介、其他資訊、聯絡方式），外加一個網域名稱佔位（`your-class.vercel.app`）。把每個 `預留` 和網域都換成自己的。

## 5. 主題

主題系統由三個部分組成：

- `components/theme-toggle.tsx` — 依序從 `localStorage("class-web-theme")`、`prefers-color-scheme`、明亮主題解析初始主題。切換時會在 `<html>` 上寫入 `dark` class 與 `data-theme` attribute，並更新 `--background` / `--foreground` 兩個 CSS variables。
- `app/globals.css` — variable 的預設值，含 `prefers-color-scheme: dark` 的退回邏輯。
- Tailwind `dark:` variants — 直接寫在元件的 class 上。

預期你會動的地方：

- **切換按鈕圖示**。按鈕現在顯示的是純文字 `icon` 佔位，換成你要的 emoji、SVG 或 icon set。
- **按鈕無障礙名稱**。字串 `切換主題` 在 `components/theme-toggle.tsx`。
- **顏色**。改 `app/globals.css` 的 `--background` / `--foreground`，或直接改元件上的 Tailwind classes。

## 6. 字型

字型在 `app/layout.tsx` 用 `next/font` 載入：

```tsx
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
```

把 `Geist` 換成任何[支援的字型](https://nextjs.org/docs/app/api-reference/components/font) — 中文內容常見選擇是 `Noto_Sans_TC`（`subsets: ["latin"]` 可維持原樣，CJK 字glyph靠 unicode-range 載入）。`app/globals.css` 保留系統字型 fallback 鏈；latin subsets 涵蓋不了中文字，fallback 因此很重要。

## 7. Metadata、語言與 favicon

在 `app/layout.tsx`：

```tsx
export const metadata: Metadata = {
  title: "Class Website Template",
  description: "A clean, customizable template for class websites built with Next.js",
};
```

更新標題與描述（想要漂亮的連結預覽就加 `openGraph`），並檢查 `<html lang="...">` — 模板預設是 `zh-Hant`，改成英文站台時要一起改。`app/favicon.ico` 換成班級自己的 favicon。

## 8. 載入畫面

`components/site-shell.tsx` 在 mount 後會顯示 900 ms 的 spinner 覆蓋層：

```tsx
const timer = setTimeout(() => setIsReady(true), 900);
```

調整時間、改 `載入中...` 文字，或直接把 `{!isReady && ...}` 區塊整個刪掉，就沒有開場畫面了。

## 9. 專案識別資訊

更新 `package.json` 的 `name`、`description`、`author`，以及目前指向 `Twcat0503/Class-Website-Template` 的 `homepage` / `repository` / `bugs` URL。Fork 出去的使用者應該把它們改成自己的 fork。

## 10. 部署

網站可以在任何能跑 Next.js 的地方上線（Node.js ≥ 20.9）：

- **Vercel** — 匯入 repository，免設定。
- **Cloudflare Pages** — 用 `npm run pages:build` build，再用 `wrangler pages deploy` 部署 `.vercel/output` 目錄。

模板採 App Router 且沒有設定 `output: "export"`，純靜態空間不夠用 — 請選一個會執行 Next.js 的平台。

---

[README（繁體中文）](../README.zh-TW.md) · [README (English)](../README.md) →
