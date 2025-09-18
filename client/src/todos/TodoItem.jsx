export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-800/60">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onToggle(todo._id, e.target.checked)}
        className="h-4 w-4 accent-slate-900 dark:accent-slate-100"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-slate-400' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={() => onRemove(todo._id)}
        className="text-xs px-3 py-1.5 rounded-lg border border-red-300/60 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
      >
        Delete
      </button>
    </div>
  )
}
