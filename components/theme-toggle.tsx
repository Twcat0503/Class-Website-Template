"use client";

import { useEffect, useState } from "react";

const applyTheme = (theme: "light" | "dark") => {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.setProperty(
    "--background",
    isDark ? "#0a0a0a" : "#ffffff",
  );
  document.documentElement.style.setProperty(
    "--foreground",
    isDark ? "#ededed" : "#171717",
  );
};

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("class-web-theme");
  if (stored === "dark") return "dark";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem("class-web-theme", theme);
  }, [theme]);

  const label = "切換主題";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/70 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
    >
      <span className="sr-only">{label}</span>
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-slate-400 text-[11px] uppercase tracking-[0.08em] dark:border-slate-500">
        icon
      </div>
    </button>
  );
}
