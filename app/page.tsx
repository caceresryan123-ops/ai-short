export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold">
        Create AI Shorts in seconds
      </h1>

      <p className="mt-4 text-zinc-400 text-center max-w-xl">
        Generate viral short videos with artificial intelligence.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="/dashboard"
          className="bg-white text-black px-6 py-3 rounded-xl"
        >
          Start creating
        </a>

        <a
          href="/auth/login"
          className="border border-zinc-700 px-6 py-3 rounded-xl"
        >
          Login
        </a>
      </div>
    </main>
  );
}