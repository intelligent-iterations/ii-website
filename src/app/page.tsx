export default function Home() {
  return (
    <main
      data-testid="home-page"
      className="flex min-h-screen flex-col items-center justify-center px-6"
    >
      <h1
        data-testid="home-heading"
        className="text-4xl font-bold tracking-tight sm:text-5xl"
      >
        ii packages
      </h1>
      <p
        data-testid="home-description"
        className="mt-4 max-w-md text-center text-lg text-gray-500"
      >
        Open-source packages by ii
      </p>
    </main>
  );
}
