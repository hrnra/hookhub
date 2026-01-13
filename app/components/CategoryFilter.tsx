'use client';

import { HookCategory, CATEGORY_LABELS } from '../types/hook';

interface CategoryFilterProps {
  selected: HookCategory | 'all';
  onChange: (category: HookCategory | 'all') => void;
}

const CATEGORIES: (HookCategory | 'all')[] = [
  'all',
  'general',
  'developer-tools',
  'code-quality',
  'notifications',
  'tdd',
  'sdk',
];

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => {
        const isSelected = selected === category;
        const label = category === 'all' ? 'All' : CATEGORY_LABELS[category];

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              isSelected
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
