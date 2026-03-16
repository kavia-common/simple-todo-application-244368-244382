import React, { useState } from 'react';

// PUBLIC_INTERFACE
function TodoInput({ onAdd }) {
  /** Input form for adding a new todo item. */

  const [value, setValue] = useState('');

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: 16, display: 'flex', gap: 8}}>
      <input
        type="text"
        aria-label="Add todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{
          flex: 1,
          padding: '10px',
          fontSize: 16,
          borderRadius: 6,
          border: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)'
        }}
      />
      <button
        type="submit"
        style={{
          background: 'var(--button-bg)',
          color: 'var(--button-text)',
          border: 'none',
          padding: '10px 16px',
          borderRadius: 6,
          fontWeight: 500,
          cursor: 'pointer'
        }}
        aria-label="Add"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
