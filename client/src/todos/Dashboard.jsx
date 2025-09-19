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


  const editText = async (id, text) => {
    const newText = text.trim();
    if (!newText) return; // you can also surface a toast or error
    const { data } = await api.put(`/todos/${id}`, { text: newText });
    setTodos(t => t.map(td => (td._id === id ? data : td)));
  };


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
      </div>

      <div className="mb-4">
        <TodoForm onAdd={addTodo} />
      </div>

      <div className="grid gap-3">
        {todos.map((t) => (
          <TodoItem key={t._id} todo={t} onToggle={toggle} onRemove={remove} onEdit={editText} />
        ))}
        {todos.length === 0 && (
          <p className="text-sm text-slate-500">No tasks yet — add your first one! 🎯</p>
        )}
      </div>
      
    </div>
  )
}
