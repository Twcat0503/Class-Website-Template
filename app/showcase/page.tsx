const showcaseItems = Array.from({ length: 6 }).map((_, idx) => ({
  title: `範例 ${idx + 1}`,
  summary: "預留",
}));

export default function ShowcasePage() {
  return (
    <div className="space-y-10 pb-6">
      <header className="rounded-3xl border border-white/30 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Results presentation
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">成果發表會</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          預留
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {showcaseItems.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-2xl border border-white/30 bg-white/80 p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="h-36 rounded-xl bg-slate-100 text-center text-xs uppercase tracking-[0.2em] text-slate-400 dark:bg-slate-800">
              <div className="flex h-full items-center justify-center">縮圖 / 影片預留</div>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {item.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-300">
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">技術預留</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">成員預留</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">連結預留</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
