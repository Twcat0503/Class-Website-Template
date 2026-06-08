const infoCards = [
  {
    title: "精神",
    body: "預留",
  },
  {
    title: "預留",
    body: "預留",
  },
  {
    title: "課程",
    body: "預留",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-4">
      <section className="overflow-hidden rounded-3xl border border-white/40 bg-white/70 px-6 py-12 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80 sm:px-10 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
              Class
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              class
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              預留。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-white dark:text-slate-900"
              >
                成果展示
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:hover:border-slate-500"
              >
                認識我們
              </a>
            </div>
            <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-slate-900 dark:text-white">#預留</span>
                <span className="text-xs uppercase tracking-[0.2em]">Logo / Motto</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-slate-900 dark:text-white">#ClassYear</span>
                <span className="text-xs uppercase tracking-[0.2em]">Class Year</span>
              </div>
            </div>
          </div>
          <div className="relative flex h-full flex-col items-center justify-center">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-dashed border-slate-300 bg-white/80 shadow-xl ring-8 ring-sky-200/60 transition hover:-translate-y-1 dark:border-slate-600 dark:bg-slate-900 dark:ring-sky-900/50">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-200">
                班級Logo 
              </span>
            </div>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-300">
              預留
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              About
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">關於班級</h2>
          </div>
          <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:bg-slate-900/80 dark:text-slate-100">
            預留圖文區塊
          </span>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/30 bg-white/70 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {card.body}
              </p>
              <div className="mt-4 h-24 rounded-xl border border-dashed border-slate-300 bg-white/60 text-center text-xs uppercase tracking-[0.2em] text-slate-400 dark:border-slate-700 dark:bg-slate-800/60">
                <div className="flex h-full items-center justify-center">預留圖片</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="rounded-3xl border border-white/30 bg-white/80 p-10 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Results presentation
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">成果發表</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              預留
            </p>
          </div>
          <a
            href="/showcase"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-white dark:text-slate-900"
          >
            前往專題頁
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-white/80 p-4 text-sm text-slate-600 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            >
              <div className="h-36 rounded-xl bg-slate-100 text-center text-xs uppercase tracking-[0.2em] text-slate-400 dark:bg-slate-800">
                <div className="flex h-full items-center justify-center">專題縮圖</div>
              </div>
              <div className="mt-3 font-semibold text-slate-900 dark:text-white">專題 {idx}</div>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-300">
                預留
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="timeline" className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Journey
          </p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">里程紀錄</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {["1", "2", "3"].map((phase, index) => (
            <div
              key={phase}
              className="rounded-2xl border border-white/30 bg-white/70 p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">{phase}</span>
                <span className="rounded-full bg-sky-100 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-sky-700 dark:bg-sky-900/50 dark:text-sky-200">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                預留
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
