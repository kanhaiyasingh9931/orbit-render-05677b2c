'use client';

import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
      <div className="flex items-center gap-3 flex-1 min-w-0 pr-3">
        <button
          type="button"
          onClick={() => onToggle(todo.id)}
          aria-label={todo.completed ? 'Mark task as incomplete' : 'Mark task as complete'}
          className={`flex-shrink-0 w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${todo.completed ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400'}`}
        >
          {todo.completed && <Check className="w-4 h-4 stroke-[3]" />}
        </button>
        <span
          className={`text-sm sm:text-base truncate transition-all ${todo.completed ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-200 font-medium'}`}
        >
          {todo.text}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};