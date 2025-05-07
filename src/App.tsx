import React, { useState } from 'react';
import { TodoItem, TEST_DATA } from './types';
import TodoList from './components/TodoList';
import AddChoreForm from './components/AddChoreForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState<TodoItem[]>(TEST_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = (title: string, description: string) => {
    const newTodo: TodoItem = {
      id: Math.max(...todos.map(t => t.id)) + 1,
      title,
      description,
      completed: false,
      starred: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleToggleStar = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, starred: !todo.starred } : todo
    ));
  };

  return (
    <div className="App">
      <h1>Household Chores</h1>
      <button className="add-chore-button" onClick={() => setIsModalOpen(true)}>
        Add New Chore
      </button>
      <AddChoreForm 
        onAdd={handleCreate} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <TodoList
        items={todos}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
        onToggleStar={handleToggleStar}
      />
    </div>
  );
}

export default App;
