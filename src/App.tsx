import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <header className="mx-auto max-w-3xl px-6 py-16">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Vite + React + TypeScript + Tailwind
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Personal Portfolio (Starter)
        </h1>

        <p className="mt-3 text-neutral-300">
          Tailwind v4 is active. Edit <code className="font-mono">src/App.tsx</code> and save.
        </p>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="mt-8 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-base font-medium hover:bg-white/15"
        >
          Count is {count}
        </button>
      </header>
    </div>
  );
}
