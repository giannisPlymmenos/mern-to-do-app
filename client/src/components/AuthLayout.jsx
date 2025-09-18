import AuthHero from './AuthHero'

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Form card */}
      <div className="max-w-lg w-full">
        <div className="p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-800/70 backdrop-blur shadow-sm">
          <h2 className="text-2xl font-semibold mb-1">{title}</h2>
          {subtitle && <p className="text-sm text-slate-500 mb-6">{subtitle}</p>}
          {children}
        </div>
      </div>

      {/* Hero (hidden on small screens) */}
      <div className="block">
        <AuthHero />
      </div>
    </div>
  )
}
