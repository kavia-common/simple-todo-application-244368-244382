import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// Key for localStorage
const STORAGE_KEY = 'todos';

// PUBLIC_INTERFACE
function App() {
  /** Main App for the Todo application. Manages todo state and theme. */

  // Theme management
  const [theme, setTheme] = useState('light');

  // Todo state: array of { id, title, completed }
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // PUBLIC_INTERFACE
  const handleAdd = (title) => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), title, completed: false }
    ]);
  };

  // PUBLIC_INTERFACE
  const handleToggle = (id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // PUBLIC_INTERFACE
  const handleDelete = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  // Basic responsive, centered layout for todo app
  return (
    <div className="App">
      <header className="App-header" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        transition: 'background 0.3s'
      }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <main style={{
          width: '100%',
          maxWidth: 430,
          background: 'var(--surface, #fff)',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(60,60,96,0.10)',
          padding: '32px 24px',
          margin: '32px 0',
        }}>
          <h1 style={{marginBottom: 4, fontWeight: 700, fontSize: 32}}>
            Todo List
          </h1>
          <p style={{
            fontSize: 16,
            color: 'var(--text-secondary)',
            marginBottom: 22
          }}>
            Simple, persistent todos. Add, complete, remove.
          </p>
          <TodoInput onAdd={handleAdd} />
          <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
        </main>
      </header>
    </div>
  );
}

export default App;
