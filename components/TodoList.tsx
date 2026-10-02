'use client';

import React from 'react';
import { Todo, FilterType } from '@/types/todo';
import { TodoItem } from './TodoItem';
import { CheckCircle2 } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  filter,
  onToggle,
  onDelete,
}) => {
  if (todos.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-12 text-center text-slate-400 dark:text-slate-500">
        <CheckCircle2 className="w-12 h-12 mb-3 opacity-30 stroke-[1.5]" />
        <p className="text-base font-medium">
          {filter === 'all'
            ? 'No tasks yet. Add one above!'
            : filter === 'active'
            ? 'No active tasks!'
            : 'No completed tasks!'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};