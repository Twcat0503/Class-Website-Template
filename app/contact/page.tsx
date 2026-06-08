export default function ContactPage() {
  return (
    <div className="space-y-10 pb-6">
      <header className="rounded-3xl border border-white/30 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">聯絡資訊</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          預留
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/30 bg-white/80 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">聯絡管道預留</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>Email</li>
            <li>電話</li>
            <li>預留</li>
          </ul>
          <div className="mt-6 h-32 rounded-xl border border-dashed border-slate-300 bg-white/80 text-center text-xs uppercase tracking-[0.2em] text-slate-400 dark:border-slate-700 dark:bg-slate-800/80">
            <div className="flex h-full items-center justify-center">圖片預留</div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/30 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">其他聯繫方式</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>ig</li>
            <li>合作預留</li>
            <li>預留</li>
          </ul>
          <div className="mt-6 h-36 rounded-xl border border-dashed border-slate-300 bg-white/80 text-center text-xs uppercase tracking-[0.2em] text-slate-400 dark:border-slate-700 dark:bg-slate-800/80">
            <div className="flex h-full items-center justify-center">圖片預留</div>
          </div>
        </div>
      </section>
    </div>
  );
}
