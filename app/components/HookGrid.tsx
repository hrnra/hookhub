import { Hook } from '../types/hook';
import { HookCard } from './HookCard';

interface HookGridProps {
  hooks: Hook[];
}

export function HookGrid({ hooks }: HookGridProps) {
  if (hooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 py-16 dark:border-zinc-700">
        <svg
          className="mb-4 h-12 w-12 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
          No hooks found
        </p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
          Try adjusting your search or filter
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
