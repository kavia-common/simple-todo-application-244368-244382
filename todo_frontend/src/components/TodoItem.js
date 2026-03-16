import React from 'react';

// PUBLIC_INTERFACE
function TodoItem({ todo, onToggle, onDelete }) {
  /** Displays a single todo item. Allows toggling completion and deletion. */

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid var(--border-color)',
        opacity: todo.completed ? 0.6 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        style={{marginRight: 12}}
      />
      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
          fontSize: 16,
          color: 'var(--text-primary)'
        }}
        aria-label={todo.title}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete"
        style={{
          background: 'none',
          border: 'none',
          color: '#EF4444',
          fontSize: 18,
          cursor: 'pointer',
          marginLeft: 8
        }}
        title="Delete"
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;
