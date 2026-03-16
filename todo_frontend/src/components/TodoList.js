import React from 'react';
import TodoItem from './TodoItem';

// PUBLIC_INTERFACE
function TodoList({ todos, onToggle, onDelete }) {
  /** Renders the list of todos. */
  if (todos.length === 0) {
    return <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>No todos yet.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      )}
    </ul>
  );
}

export default TodoList;
