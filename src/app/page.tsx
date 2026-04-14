const launchMetrics = [
  { label: "Delivery", value: "Static export" },
  { label: "Coverage", value: "Desktop + mobile" },
  { label: "Release rails", value: "Staging + live" },
];

const foundationCards = [
  {
    title: "Infrastructure first",
    eyebrow: "Foundation",
    description:
      "This launch starts with a durable shell: static output, Firebase Hosting, and no server runtime to babysit.",
  },
  {
    title: "Tests with a camera on",
    eyebrow: "Playwright",
    description:
      "Every page is covered by Playwright and captured as a screenshot artifact so regressions have a visible paper trail.",
  },
  {
    title: "Two release paths, one standard",
    eyebrow: "CI / CD",
    description:
      "The dev branch moves to staging automatically. Main reaches production only after lint, build, and browser checks clear.",
  },
];

const catalogTracks = [
  {
    name: "Core",
    status: "Index opening",
    summary:
      "Shared primitives and utilities will land into a surface that is already tested, deployable, and easy to extend.",
  },
  {
    name: "Interfaces",
    status: "Curating",
    summary:
      "UI-facing packages can ship into a site with clear sections, stable selectors, and mobile coverage from day one.",
  },
  {
    name: "Tooling",
    status: "Queued",
    summary:
      "Release automation, screenshots, and branch deploys are already part of the repo, so tooling docs have a real home.",
  },
];

const releaseFlow = [
  {
    branch: "dev",
    destination: "staging",
    detail:
      "Pushes trigger lint, build, Playwright, screenshot artifacts, and a staging deploy.",
  },
  {
    branch: "main",
    destination: "live",
    detail:
      "Production is gated behind the same checks, then published to the live Hosting channel.",
  },
];

export default function Home() {
  return (
    <main data-testid="home-page" className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(243, 120, 86, 0.28) 0%, rgba(243, 120, 86, 0.08) 35%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-12">
        <header
          className="flex items-center justify-between border-b border-[var(--line)] pb-4"
          data-testid="site-header"
        >
          <div>
            <p className="label-small">ii packages</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Open-source packages, shipped carefully.
            </p>
          </div>

          <a
            href="#release-flow"
            className="inline-flex items-center rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
            data-testid="release-link"
          >
            Release model
          </a>
        </header>

        <section className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1.25fr)_22rem] lg:gap-12 lg:py-[4.5rem]">
          <div data-testid="hero-panel">
            <p className="label-chip">Launch 01</p>
            <h1
              data-testid="home-heading"
              className="mt-5 max-w-4xl text-5xl font-medium leading-none tracking-[-0.06em] sm:text-6xl lg:text-8xl"
            >
              The public front door for ii&apos;s package work.
            </h1>
            <p
              data-testid="home-description"
              className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl"
            >
              The first release keeps the promise small and real: a package site
              with a stable static foundation, browser coverage, screenshot
              artifacts, and branch-based deploys already wired in.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#launch-surface"
                className="inline-flex items-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--page-bg)] transition hover:-translate-y-0.5 hover:bg-[var(--accent)]"
                data-testid="launch-surface-link"
              >
                Explore the launch surface
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center rounded-full border border-[var(--line-strong)] px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
                data-testid="catalog-link"
              >
                See the catalog tracks
              </a>
            </div>
          </div>

          <aside
            className="panel-surface flex flex-col gap-5 self-start p-6"
            data-testid="launch-metrics"
          >
            <div>
              <p className="label-small">Reality check</p>
              <p className="mt-3 text-base leading-7 text-[var(--muted-strong)]">
                This is not a placeholder splash page. It is the tested delivery
                surface the package catalog can grow into.
              </p>
            </div>

            <div className="space-y-3">
              {launchMetrics.map((metric) => (
                <div
                  key={metric.label}
                  data-testid="launch-metric-card"
                  className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4"
                >
                  <p className="label-small">{metric.label}</p>
                  <p className="mt-1 text-lg font-medium">{metric.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section
          id="launch-surface"
          className="grid gap-5 lg:grid-cols-3"
          data-testid="foundation-grid"
        >
          {foundationCards.map((card) => (
            <article
              key={card.title}
              className="panel-surface p-6"
              data-testid="foundation-card"
            >
              <p className="label-small">{card.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.03em]">
                {card.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                {card.description}
              </p>
            </article>
          ))}
        </section>

        <section
          id="release-flow"
          className="mt-16 grid gap-6 rounded-[2rem] border border-[var(--line-strong)] bg-[var(--surface)] p-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:p-8"
          data-testid="release-flow"
        >
          <div>
            <p className="label-chip">Release flow</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              The repo already knows how to ship.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
              The branching model in the repo is the operating model of the site:
              fast feedback on staging, production only after the checks hold.
            </p>
          </div>

          <div className="grid gap-4" data-testid="release-rail">
            {releaseFlow.map((step) => (
              <article
                key={step.branch}
                className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-soft)] p-5"
                data-testid="release-step"
              >
                <p className="label-small">{step.branch}</p>
                <div className="mt-3 flex items-center gap-3 text-2xl font-medium tracking-[-0.03em]">
                  <span>{step.branch}</span>
                  <span className="text-[var(--accent)]">→</span>
                  <span>{step.destination}</span>
                </div>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted-strong)]">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="catalog"
          className="mt-16 rounded-[2rem] border border-[var(--line)] bg-[var(--surface-soft)] p-6 sm:p-8"
          data-testid="catalog-section"
        >
          <div className="max-w-3xl">
            <p className="label-chip">Catalog tracks</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              A sparse launch on purpose.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
              The site ships before the catalog gets noisy. That keeps every
              future package release attached to a working pipeline, clear test
              selectors, and an interface that already behaves on mobile.
            </p>
          </div>

          <div
            className="mt-8 grid gap-5 md:grid-cols-3"
            data-testid="catalog-grid"
          >
            {catalogTracks.map((track) => (
              <article
                key={track.name}
                className="panel-surface p-6"
                data-testid="catalog-track"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">
                    {track.name}
                  </h3>
                  <span className="label-small rounded-full border border-[var(--line)] px-3 py-1">
                    {track.status}
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-[var(--muted-strong)]">
                  {track.summary}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
