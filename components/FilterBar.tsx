'use client';

import React from 'react';
import { FilterType } from '@/types/todo';

export interface FilterBarProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}) => {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
      <span className="font-medium">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-700/60 p-1 rounded-xl">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-150 ${filter === f.value ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'hover:text-slate-900 dark:hover:text-slate-200'}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className={`font-medium transition-colors ${completedCount > 0 ? 'hover:text-rose-500 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
      >
        Clear completed
      </button>
    </div>
  );
};