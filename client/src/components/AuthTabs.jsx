import { NavLink, useLocation } from 'react-router-dom'

export default function AuthTabs() {
  const { pathname } = useLocation()
  const isLogin = pathname === '/login'
  const isRegister = pathname === '/register'

  return (
    <div className="relative w-48 h-10 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 p-1 overflow-hidden">
      {/* Sliding pill uses left-position animation instead of translate */}
      <div
        className={`absolute top-1 h-8 rounded-lg bg-white shadow-sm transition-[left] duration-300`}
        style={{
          width: 'calc(50% - 0.25rem)',
          left: isRegister ? 'calc(50% + 0.25rem)' : '0.25rem'
        }}
      />
      <div className="relative grid grid-cols-2 h-full text-sm font-medium">
        <NavLink
          to="/login"
          className={`flex items-center justify-center rounded-lg transition-colors duration-300
            ${isLogin ? 'text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={`flex items-center justify-center rounded-lg transition-colors duration-300
            ${isRegister ? 'text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}
        >
          Register
        </NavLink>
      </div>
    </div>
  )
}
