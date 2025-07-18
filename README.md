# Pack Dashboard Assignment

## Challenge Overview
You are viewing a SvelteKit dashboard project built as part of a job interview assignment. The goal is to display key metrics and visualizations related to uploaded content, using mocked data and a modern Svelte-based stack.

## Tech Stack
- **Framework:** [SvelteKit 2](https://kit.svelte.dev/) with [Svelte 5](https://svelte.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind 4](https://tailwindcss.com/)
- **Charting Library:** [ECharts](https://echarts.apache.org/en/index.html)
- **Mock Data:** Local JSON files

## Getting Started

### 1. Install Dependencies (Required for All Usage)
Before running the app in development or building for production, install the dependencies:
```bash
npm install
```
You only need to do this once (unless dependencies change).

### 2. Development
Start the development server:
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000) (or as indicated in the terminal).

### 3. Production Build & Preview
To build and preview the production version:
```bash
npm run build
npm run preview
```
This will serve the optimized production build locally.

## Project Structure
- `src/lib/components/` — Svelte components (dashboard, charts, tables, layout)
- `src/mock/` — Mocked JSON data for dashboard and usage
- `src/routes/` — SvelteKit routes (dashboard and related pages)