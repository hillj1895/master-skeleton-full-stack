# master-skeleton-full-stack

An opinionated full-stack monorepo starter using [Nx](https://nx.dev). Scaffolds a React frontend and NestJS backend in a single workspace with shared tooling configured out of the box.

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Redux Toolkit, React Router v6, Tailwind CSS |
| Backend | NestJS 10 |
| Language | TypeScript 5.5 |
| Monorepo | Nx 19 |
| Testing | Jest, React Testing Library |
| Linting | ESLint 9, Prettier |

## Project Structure

```
apps/
├── frontend-web/   # React application
└── backend/        # NestJS API
libraries/          # Shared code between apps
```

## Getting Started

```bash
# Install dependencies
npm install

# Run frontend and backend concurrently
npm run dev

# Run backend only
npm run dev:backend

# Build for production
npx nx build frontend-web
npx nx build backend
```

## Using as a Template

1. Clone the repo
2. Find and replace `master-skeleton-full-stack` throughout the workspace with your new project name
3. Update the root `package.json` name field
4. Configure your database connection in the backend app
