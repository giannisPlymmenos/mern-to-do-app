import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuth } from './auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import AuthProvider from './auth/AuthContext'
import ProtectedRoute from './auth/ProtectedRoute'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './todos/Dashboard'
import AuthTabs from './components/AuthTabs'


function Header() {
  const { user, logout } = useAuth()
  const nav = useNavigate()

  const handleLogout = async () => {
    await logout()
    nav('/login')
  }

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">MERN Tasks</a>
        {!user && <AuthTabs />}
        {user && (
          <button
            onClick={handleLogout}
            className="ml-4 rounded-xl bg-red-600 text-white px-4 py-2 font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-12 py-8 text-center text-xs text-slate-500">
      Built with MERN + Tailwind
    </footer>
  )
}

function Shell({ children }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Header />
      {/* Full width background, centered content */}
      <main className="mx-auto w-full max-w-screen-xl px-4 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Shell>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </AuthProvider>
  )
}
