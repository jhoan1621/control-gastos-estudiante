# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production (includes TypeScript compilation)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npx tsc --noEmit` - Check TypeScript without emitting files

## Architecture Overview

This is a React + TypeScript expense tracking application built with Vite. Key architectural patterns:

### Data Persistence
- Uses localStorage for client-side persistence
- All expense data is stored as JSON arrays under the 'gastos' key
- No backend or external API dependencies

### Routing Structure
- React Router DOM handles navigation between 4 main pages:
  - `/` - Home page (Inicio)
  - `/agregar` - Add expense form (AgregarGasto) 
  - `/lista` - Expense list view (ListaGastos)
  - `/resumen` - Summary/analytics (Resumen)

### Component Architecture
- Pages in `src/pages/` handle routing and main functionality
- Reusable components in `src/components/` (currently only GastoItem)
- Central type definitions in `src/types/Gasto.ts`

### State Management
- Uses React hooks (useState, useEffect) for local state
- No global state management (Redux, Context, etc.)
- Each page manages its own state and localStorage interactions

### TypeScript Usage
- All imports of the Gasto interface must use `import type { Gasto }` (not regular import)
- Strict TypeScript configuration with verbatimModuleSyntax enabled

### Styling
- CSS modules approach with component-specific styles in App.css
- Global styles and resets in index.css
- Responsive design with mobile breakpoints

## Key Business Logic

The expense (Gasto) entity has 5 categories: 'comida', 'transporte', 'entretenimiento', 'estudios', 'otros'. The application provides full CRUD operations through the UI with automatic ID generation using timestamps.