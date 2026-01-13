# HookHub - MVP Specification

## Overview

HookHub is a web application for discovering and browsing open source Claude Code hooks. It provides a curated directory of hooks that extend Claude Code's functionality, making it easy for developers to find and integrate community-built extensions.

## What are Claude Code Hooks?

Claude Code hooks are extensions that activate at different points in Claude's agentic lifecycle, enabling developers to:
- Automate workflows (formatting, testing, notifications)
- Enforce coding standards and best practices
- Add custom behaviors (sound effects, notifications)
- Control Claude Code's behavior deterministically

Hooks are configured in `.claude/settings.json` and can intercept various lifecycle events.

## MVP Scope

### Core Features

1. **Hook Display Grid**
   - Display hooks in a responsive card-based grid layout
   - Each card shows: name, category, description, and repository link
   - Clean, modern UI with dark mode support

2. **Category Filtering**
   - Filter hooks by category
   - Categories include: General, Developer Tools, Code Quality, Notifications, TDD, SDK/Framework

3. **Search**
   - Text search across hook names and descriptions
   - Real-time filtering as user types
   - Works in combination with category filter

### Out of Scope (Post-MVP)
- User accounts and authentication
- Hook submissions/contributions
- Ratings and reviews
- Hook installation instructions
- API for programmatic access

## Data Model

### Hook

```typescript
interface Hook {
  id: string;
  name: string;
  description: string;
  category: HookCategory;
  repoUrl: string;
  author?: string;
  stars?: number;
}

type HookCategory =
  | 'general'
  | 'developer-tools'
  | 'code-quality'
  | 'notifications'
  | 'tdd'
  | 'sdk';
```

### Initial Hook Data

For MVP, hooks will be stored in a static JSON file. Initial hooks to include:

| Name | Category | Description | Repo |
|------|----------|-------------|------|
| Britfix | General | Converts American English to British English in code comments and docstrings | github.com/... |
| CC Notify | Notifications | Desktop notifications when Claude Code needs input or completes tasks | github.com/... |
| Claudio | Notifications | OS-native sound effects for Claude Code operations | github.com/... |
| TDD Guard | TDD | Monitors file operations to enforce Test-Driven Development principles | github.com/... |
| cchooks | SDK | Python SDK with clean API for simplified hook development | github.com/... |
| claude-hooks | SDK | TypeScript system for configuring Claude Code hooks | github.com/... |
| claude-code-hooks-sdk | SDK | Laravel-inspired PHP SDK with fluent API for hooks | github.com/... |
| TypeScript Quality Hooks | Code Quality | Quality validation for Node.js TypeScript projects | github.com/... |
| Claude Code Hook Comms (HCOM) | Developer Tools | Real-time communication between sub-agents | github.com/... |

## Pages

### Home Page (`/`)

Main page displaying the hook grid with:

1. **Header**
   - Logo/site name "HookHub"
   - Tagline: "Discover Claude Code Hooks"
   - Optional: GitHub link to project

2. **Search Bar**
   - Prominent search input field
   - Placeholder text: "Search hooks..."
   - Real-time filtering on keystroke

3. **Category Filter Bar**
   - Horizontal list of category pills/buttons
   - "All" option selected by default
   - Click to filter grid

4. **Hook Grid**
   - Responsive grid (1 col mobile, 2 cols tablet, 3-4 cols desktop)
   - Hook cards with:
     - Hook name (clickable, links to repo)
     - Category badge
     - Description (truncated to 2-3 lines)
     - "View on GitHub" button/link
   - Empty state when no hooks match search/filter

5. **Footer**
   - Simple footer with credits

## Technical Implementation

### File Structure

```
app/
  page.tsx              # Home page with hook grid
  layout.tsx            # Root layout
  globals.css           # Global styles
  components/
    HookCard.tsx        # Individual hook card component
    HookGrid.tsx        # Grid container for hooks
    CategoryFilter.tsx  # Category filter pills
    SearchBar.tsx       # Search input component
    Header.tsx          # Site header
    Footer.tsx          # Site footer
  data/
    hooks.json          # Static hook data
  types/
    hook.ts             # TypeScript type definitions
```

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Data**: Static JSON (MVP)

### Design Guidelines

- Clean, minimal aesthetic
- Dark mode support via `prefers-color-scheme`
- Responsive design (mobile-first)
- Accessible (semantic HTML, proper contrast)
- Fast load times (static data, no API calls)

## Implementation Steps

1. **Setup Types** - Create TypeScript interfaces for Hook data
2. **Create Hook Data** - Build static JSON with initial hooks
3. **Build Components** - Create HookCard, HookGrid, CategoryFilter, SearchBar components
4. **Build Home Page** - Assemble components on main page
5. **Style with Tailwind** - Apply styling for grid, cards, and responsive layout
6. **Add Search & Filtering** - Implement client-side search and category filtering
7. **Test & Polish** - Verify responsiveness, dark mode, and search functionality

## Success Criteria

- [ ] Grid displays all hooks from data file
- [ ] Search filters hooks by name and description
- [ ] Category filtering works correctly
- [ ] Search and category filter work together
- [ ] Responsive layout on mobile, tablet, desktop
- [ ] Dark mode works automatically
- [ ] Links open correct GitHub repositories
- [ ] Empty state shows when no results match
- [ ] Page loads quickly (< 1s)

## Future Enhancements (Post-MVP)

1. Server-side data fetching from GitHub API
2. Hook submission form
3. Sorting options (by name, stars, date added)
4. Detailed hook pages with installation instructions
5. User contributions and community features
6. Pagination for large hook collections
