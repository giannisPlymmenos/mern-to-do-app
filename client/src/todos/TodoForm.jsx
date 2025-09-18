import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const t = text.trim()
        if (!t) return
        onAdd(t)
        setText('')
      }}
      className="flex gap-2"
    >
      <input
        className="flex-1 rounded-xl border border-slate-300/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-800/50 px-3 py-2 outline-none focus:ring-2 ring-slate-300 dark:ring-slate-600"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="rounded-xl px-4 py-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-white-900 font-medium hover:opacity-90 transition">
        Add
      </button>
    </form>
  )
}
