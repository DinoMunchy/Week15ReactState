import React from 'react';
import { TodoItem as TodoItemType } from '../types';

interface TodoItemProps {
  item: TodoItemType;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onToggleStar: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete, onToggleComplete, onToggleStar }) => {
  return (
    <div className={`todo-item ${item.completed ? 'completed' : ''} ${item.starred ? 'starred' : ''}`}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="todo-actions">
        <button onClick={() => onToggleComplete(item.id)}>
          {item.completed ? '✓' : '○'}
        </button>
        <button onClick={() => onToggleStar(item.id)}>
          {item.starred ? '★' : '☆'}
        </button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem; 