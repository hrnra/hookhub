export type HookCategory =
  | 'general'
  | 'developer-tools'
  | 'code-quality'
  | 'notifications'
  | 'tdd'
  | 'sdk';

export interface Hook {
  id: string;
  name: string;
  description: string;
  category: HookCategory;
  repoUrl: string;
  author?: string;
}

export const CATEGORY_LABELS: Record<HookCategory, string> = {
  'general': 'General',
  'developer-tools': 'Developer Tools',
  'code-quality': 'Code Quality',
  'notifications': 'Notifications',
  'tdd': 'TDD',
  'sdk': 'SDK',
};
