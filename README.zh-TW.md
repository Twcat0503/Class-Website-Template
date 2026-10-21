**[English](README.md)** | **繁體中文**

<div align="center">

# 班級網站模板 Class Website Template

**乾淨、可自訂的班級網站模板**

五個現成頁面、明暗主題、RWD 響應式版面 — 採用 Next.js 16、Tailwind CSS v4 與 TypeScript 建置。把 `預留` 佔位內容換成自己的資料，班級網站就上線了。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-61dafb)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8)](https://tailwindcss.com)
[![Node.js ≥ 20.9](https://img.shields.io/badge/node-%E2%89%A5%2020.9-brightgreen)](package.json)
[![CI](https://github.com/Twcat0503/Class-Website-Template/actions/workflows/ci.yml/badge.svg)](https://github.com/Twcat0503/Class-Website-Template/actions/workflows/ci.yml)

</div>

> **狀態**：v1.0.0 模板基礎版本。每個頁面都以 `預留` 佔位內容出貨，要填的時候直接替換即可，不必先刪掉範例資料。介面預設為繁體中文（`lang="zh-Hant"`），改法見下方[自訂網站](#自訂網站)。

## 這是什麼？

班級網站模板是班級／系學會網站的起手式：首頁、關於本班、成果、成員、聯絡方式五個頁面，共用一個 shell 提供 RWD 響應式版面 — 置頂導覽列、current 頁面高亮、可橫向捲動的行動版導覽、載入動畫與明暗主題切換。沒有 UI 元件庫、沒有 CSS-in-JS、沒有 CMS、沒有分析追蹤 — 只有 Next.js、React 與 Tailwind utility class，學生可以直接讀懂並修改每一行。

## 為什麼選這個模板？

- **所有設計集中一處**。導覽列、載入畫面與頁尾都在同一個 `components/site-shell.tsx`；導覽文字是檔案最頂端一個小陣列。
- **佔位，不是示範**。未完成的區塊顯示 `預留`。搜尋 `預留` 就能列出班級還得填什麼，不會有假資料藏在畫面裡。
- **執行期零額外相依**。沒有第三方 UI 元件、沒有追蹤、沒有 cookie。字型由 `next/font` 在建置時 self-host；唯一儲存的狀態只有放在 `localStorage` 的主題偏好。
- **主題實作扎實**。暗色模式用 Tailwind `dark:` variant 加 CSS variables，比對不到偏好時退回 `prefers-color-scheme`，選擇結果存進 `class-web-theme` 這個 key。
- **雙語 repo 文件**。README 與自訂教學都有英文版和[繁體中文版](README.zh-TW.md)，檔案最上方有語言連結。

## 快速開始

需要 Node.js 20.9 以上版本。

```bash
npm install
npm run dev
```

在瀏覽器開啟 [http://localhost:3000](http://localhost:3000)。

## 指令

| 指令 | 說明 |
|---|---|
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 正式環境 build |
| `npm start` | 啟動正式環境伺服器 |
| `npm run lint` | 執行 ESLint |
| `npm run typecheck` | 只做型別檢查、不輸出檔案 |
| `npm run pages:build` | 為 Cloudflare Pages build（`next-on-pages`） |

## 自訂網站

把以下項目換掉，網站就是你的了：

1. **網站名稱與 Logo** — `components/site-shell.tsx` 裡的 `班級名稱` 與 `Logo` 佔位
2. **導覽列** — `components/site-shell.tsx` 的 `navItems` 陣列
3. **頁面內容** — `app/` 下五個頁面（所有佔位文字都標了 `預留`）
4. **主題與字型** — `app/globals.css`、`components/theme-toggle.tsx`、`app/layout.tsx` 的字型設定
5. **網站 Metadata 與 favicon** — `app/layout.tsx` 的 `metadata`、`app/favicon.ico`
6. **專案識別資訊** — `package.json`（name、description、repository URL）

含程式碼範例的完整教學：[docs/CUSTOMIZATION.zh-TW.md](docs/CUSTOMIZATION.zh-TW.md) · [English](docs/CUSTOMIZATION.md)

## 頁面

| 頁面 | 路由 | 檔案 |
|---|---|---|
| 首頁 | `/` | `app/page.tsx` |
| 關於本班 | `/about` | `app/about/page.tsx` |
| 成果 | `/showcase` | `app/showcase/page.tsx` |
| 成員 | `/members` | `app/members/page.tsx` |
| 聯絡方式 | `/contact` | `app/contact/page.tsx` |

## 專案結構

```
app/
├── about/page.tsx        # 關於本班頁面
├── contact/page.tsx      # 聯絡方式頁面
├── members/page.tsx      # 成員頁面
├── showcase/page.tsx     # 成果／專案頁面
├── favicon.ico
├── globals.css           # 全域樣式 + Tailwind import + CSS variables
├── layout.tsx            # Root layout（metadata、字型、SiteShell）
└── page.tsx              # 首頁
components/
├── site-shell.tsx        # 導覽 shell + 載入畫面 + 頁尾
└── theme-toggle.tsx      # 明暗主題切換
docs/                     # 自訂教學（en / zh-TW）
public/                   # 靜態資源（圖片、SVG）
```

## 部署

模板可跑在任何支援 Next.js 的平台上：

- **Vercel** — 免設定；匯入 repository 直接部署。
- **Cloudflare Pages** — 執行 `npm run pages:build`；輸出在 `.vercel/output`，供 `wrangler pages deploy` 使用。

CI 會驗證這兩條路的基本盤（`npm run lint`、`npm run typecheck`、`npm run build`）。內容改好後，再設定你選用的部署平台。

## 文件

| 文件 | 內容 |
|---|---|
| [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md) | Customization guide (English) |
| [docs/CUSTOMIZATION.zh-TW.md](docs/CUSTOMIZATION.zh-TW.md) | 逐步自訂教學（繁體中文） |
| [CONTRIBUTING.md](CONTRIBUTING.md) | 開發環境、風格、commit 與 PR 規則 |
| [SECURITY.md](SECURITY.md) | 漏洞通報與資料處理 |
| [CHANGELOG.md](CHANGELOG.md) | 重要變更記錄（Keep a Changelog 格式） |

## 貢獻

歡迎用英文或繁體中文開 issue 與 PR。開發環境、手動測試清單與貢獻規則見 [CONTRIBUTING.md](CONTRIBUTING.md)；疑似漏洞見 [SECURITY.md](SECURITY.md)。

## 授權

以 [MIT](LICENSE) 授權釋出 — 任何班級或教育用途皆可自由使用、修改與再散布。第三方相依套件保留各自授權。

## 設計與開發

[twcat0503](https://github.com/Twcat0503)

獻給每一個班級。Built with care for every class.
