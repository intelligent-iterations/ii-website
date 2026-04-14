# ii packages

A statically exported Next.js site for ii open-source packages, deployed on Firebase Hosting with Playwright coverage and branch-based CI/CD.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Playwright for browser coverage and screenshots
- Firebase Analytics for the production web app
- Firebase Hosting for staging and production deploys
- GitHub Actions for branch-based pipelines

## Commands

```bash
pnpm dev
pnpm lint
pnpm build
pnpm test
pnpm test:screenshots
```

## Delivery model

- `dev` branch deploys to the Firebase staging channel after lint, build, and Playwright pass.
- `main` branch deploys to production after the same checks pass.
- Screenshot artifacts are uploaded in CI from `tests/screenshots/`.

## Local workflow

1. Run `pnpm install`.
2. Start the app with `pnpm dev`.
3. Before finishing work, run `pnpm lint` and `pnpm build`.
4. Run `pnpm test` for browser coverage and `pnpm test:screenshots` when refreshing screenshot artifacts.

## Hosting

- Firebase project: `ii-package`
- Static output directory: `out/`
- Production site: `https://ii-package.web.app`

## Testing notes

- Use `data-testid` selectors in Playwright.
- Avoid class- or text-based selectors.
- Keep screenshots committed in `tests/screenshots/`.
