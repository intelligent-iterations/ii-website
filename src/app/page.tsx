export default function Home() {
  return (
    <main
      data-testid="home-page"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="text-center">
        <h1
          data-testid="home-heading"
          className="text-5xl font-medium tracking-[-0.06em] sm:text-6xl"
        >
          Hello World
        </h1>
        <p
          data-testid="home-description"
          className="mt-4 text-base text-[var(--muted)] sm:text-lg"
        >
          ii packages
        </p>
      </div>
    </main>
  );
}
