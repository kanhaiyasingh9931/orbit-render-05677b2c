'use client';

import React from 'react';
import { CheckCircle, ListTodo } from 'lucide-react';
import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';
import { FilterBar } from '@/components/FilterBar';

export default function Home() {
  const {
    todos,
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    isMounted,
  } = useTodos();

  const totalCount = todos.length;
  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = totalCount - activeCount;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shadow-sm">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Todo Orbit
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A clean, responsive task manager to stay productive.
          </p>
        </header>

        {/* Todo Card Container */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden backdrop-blur-sm">
          {/* Input Area */}
          <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/50">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* List Area */}
          <div className="p-4 sm:p-6 min-h-[280px] flex flex-col justify-start">
            {!isMounted ? (
              <div className="flex-1 flex flex-col items-center justify-center py-12 text-slate-400 dark:text-slate-500 animate-pulse">
                <ListTodo className="w-10 h-10 mb-2 opacity-50" />
                <p className="text-sm font-medium">Loading your tasks...</p>
              </div>
            ) : (
              <TodoList
                todos={filteredTodos}
                filter={filter}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            )}
          </div>

          {/* Filter & Controls Area */}
          {isMounted && totalCount > 0 && (
            <div className="p-4 sm:px-6 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/50">
              <FilterBar
                filter={filter}
                onFilterChange={setFilter}
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={clearCompleted}
              />
            </div>
          )}
        </div>

        {/* Footer info */}
        <footer className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
          <p>Saved automatically in your browser's local storage.</p>
        </footer>
      </div>
    </main>
  );
}