# Project

A single website for our open-source packages. Currently a Hello World scaffold — the goal right now is a working infra foundation: CI/CD, Playwright integration tests with screenshots, dev and prod deployments.

## Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Playwright (integration tests + screenshots)
- **CI/CD**: GitHub Actions — separate pipelines for `dev` and `prod`

## Commands

```bash
pnpm dev                  # local dev server
pnpm build                # production build
pnpm test                 # run Playwright integration tests
pnpm test:screenshots     # capture screenshots of every page
pnpm lint                 # ESLint + TypeScript check
```

Always run `pnpm lint` and `pnpm build` before marking a task complete.

## Testing

- Playwright tests live in `tests/`
- Every page must have a screenshot test; screenshots committed to `tests/screenshots/`
- Screenshot artifacts uploaded on every CI run (accessible from tmux)
- Use `data-testid` attributes for selectors — never select by class or text content

## CI/CD

- `dev` branch → deploys to staging automatically on push
- `main` branch → deploys to prod after all Playwright tests pass
- Never merge to `main` if any Playwright test is failing

## Design

- Minimal — no clutter, generous whitespace
- Must work on desktop and mobile
