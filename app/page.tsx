'use client';

import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { HookGrid } from './components/HookGrid';
import { Hook, HookCategory } from './types/hook';
import hooksData from './data/hooks.json';

const hooks: Hook[] = hooksData as Hook[];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<HookCategory | 'all'>('all');

  const filteredHooks = useMemo(() => {
    return hooks.filter((hook) => {
      const matchesSearch =
        searchQuery === '' ||
        hook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hook.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || hook.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {filteredHooks.length} hook{filteredHooks.length !== 1 ? 's' : ''} found
            </div>
          </div>
          <div className="mb-6">
            <CategoryFilter
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
          <HookGrid hooks={filteredHooks} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
