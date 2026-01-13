# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 project using the App Router with TypeScript and Tailwind CSS 4.

### Key Files

- `app/` - App Router directory containing pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles and Tailwind theme configuration
- `public/` - Static assets served at root path
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript config with `@/*` path alias mapping to project root

### Styling

Uses Tailwind CSS 4 with PostCSS. Theme variables are defined in `globals.css` using CSS custom properties and `@theme inline` directive. Supports dark mode via `prefers-color-scheme`.
