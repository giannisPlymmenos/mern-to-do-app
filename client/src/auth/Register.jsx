import { useState } from 'react'
import { useAuth } from './AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

export default function Register() {
  const { register } = useAuth()
  const nav = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [err, setErr] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(form.email.trim(), form.password)
      nav('/')
    } catch (e) {
      setErr(e?.response?.data?.error || 'Register failed')
    }
  }

  return (
    <AuthLayout title="Create your account" subtitle="Start tracking tasks in seconds.">
      {err && <p className="mb-4 text-sm text-red-500">{err}</p>}
      <form onSubmit={onSubmit} className="grid gap-3">
        <input
          className="rounded-xl border border-slate-300/60 dark:border-slate-700/60 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-slate-300 dark:ring-slate-600"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="rounded-xl border border-slate-300/60 dark:border-slate-700/60 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-slate-300 dark:ring-slate-600"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="mt-1 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-white-900 px-4 py-2 font-medium hover:opacity-90 transition">
          Create account
        </button>
        <p className="text-xs text-slate-500">
          Have an account? <Link to="/login" className="underline">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
