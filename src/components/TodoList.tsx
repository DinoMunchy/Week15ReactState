import React from 'react';
import { TodoItem as TodoItemType } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  items: TodoItemType[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onToggleStar: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDelete, onToggleComplete, onToggleStar }) => {
  return (
    <div className="todo-list">
      {items.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onToggleStar={onToggleStar}
        />
      ))}
    </div>
  );
};

export default TodoList; 