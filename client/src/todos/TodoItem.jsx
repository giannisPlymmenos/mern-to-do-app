import { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo, onToggle, onRemove, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      setText(todo.text);
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing, todo.text]);

  const startEdit = () => setEditing(true);
  const cancelEdit = () => {
    setEditing(false);
    setText(todo.text);
  };
  const saveEdit = () => {
    const trimmed = text.trim();
    if (!trimmed || trimmed === todo.text) {
      setEditing(false);
      return;
    }
    onEdit(todo._id, trimmed);
    setEditing(false);
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEdit();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      cancelEdit();
    }
  };

  return (
    <div className="flex items-center break-word gap-3 p-3 rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-800/60">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onToggle(todo._id, e.target.checked)}
        className="h-4 w-4 accent-slate-900 dark:accent-slate-100"
      />

      {/* Text / Editor */}
      {!editing ? (
        <span
          className={`flex-1 break-words whitespace-pre-wrap ${
            todo.completed ? "line-through text-slate-400" : ""
          }`}
        >
          {todo.text}
        </span>
      ) : (
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKey}
          className="flex-1 rounded-lg border border-slate-300/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/70 px-3 py-1.5 outline-none focus:ring-2 ring-slate-300 dark:ring-slate-600"
        />
      )}

      {/* Actions */}
      {!editing ? (
        <div className="flex items-center gap-2">
          <button
            onClick={startEdit}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-300/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onRemove(todo._id)}
            className="text-xs px-3 py-1.5 rounded-lg border border-red-300/60 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button
            onClick={saveEdit}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-white-900 hover:opacity-90 transition"
          >
            Save
          </button>
          <button
            onClick={cancelEdit}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-300/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
