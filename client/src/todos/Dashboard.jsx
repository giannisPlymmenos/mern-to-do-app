import { useEffect, useState } from 'react'
import api from '../api'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { useAuth } from '../auth/AuthContext'

export default function Dashboard() {
  const [todos, setTodos] = useState([])
  const { logout } = useAuth()

  const load = async () => {
    const { data } = await api.get('/todos')
    setTodos(data)
  }
  useEffect(() => { load() }, [])

  const addTodo = async (text) => {
    const { data } = await api.post('/todos', { text })
    setTodos((t) => [data, ...t])
  }
  const toggle = async (id, completed) => {
    const { data } = await api.put(`/todos/${id}`, { completed })
    setTodos((t) => t.map((td) => (td._id === id ? data : td)))
  }
  const remove = async (id) => {
    await api.delete(`/todos/${id}`)
    setTodos((t) => t.filter((td) => td._id !== id))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Your Tasks</h2>
          <p className="text-sm text-slate-500">Stay on top of your day.</p>
        </div>
        <button
          onClick={logout}
          className="text-sm px-3 py-2 rounded-xl border border-slate-300/70 dark:border-slate-700/70 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          Logout
        </button>
      </div>

      <div className="mb-4">
        <TodoForm onAdd={addTodo} />
      </div>

      <div className="grid gap-3">
        {todos.map((t) => (
          <TodoItem key={t._id} todo={t} onToggle={toggle} onRemove={remove} />
        ))}
        {todos.length === 0 && (
          <p className="text-sm text-slate-500">No tasks yet — add your first one! 🎯</p>
        )}
      </div>
    </div>
  )
}
