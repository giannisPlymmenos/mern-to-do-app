export default function AuthHero() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold leading-tight">
          Stay organized. <span className="text-slate-500">Ship faster.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-prose">
          MERN Tasks helps you capture, prioritize, and complete what matters — across devices, instantly.
        </p>
      </div>

      <ul className="space-y-2 text-sm">
        <li className="flex items-start gap-2">
          <span className="mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-500/20 text-green-700 dark:text-green-300">✓</span>
          Realtime task updates with a clean UI
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300">✓</span>
          Secure auth — your tasks are only yours
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300">✓</span>
          Fast, responsive, and mobile-friendly
        </li>
      </ul>

      {/* Hero mock card */}
      <div className="p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-800/60 backdrop-blur shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="h-2 w-20 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-2 w-10 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-48 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-3 w-60 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-3 w-40 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </section>
  )
}
