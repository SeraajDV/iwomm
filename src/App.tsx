import ExcuseGenerator from "./features/excuse-generator/excuse-generator";

export default function App() {
  return (
    <main
      className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 sm:p-8"
      aria-labelledby="app-heading"
    >
      <div className="w-full max-w-3xl flex flex-col gap-6">
        <section className="text-center">
          <p className="mb-2 text-xs font-mono uppercase tracking-[0.28em] text-amber-300">
            Dev incident toolkit
          </p>
          <h1 id="app-heading" className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            It Worked On My Machine™
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
            Generate polished excuse notes, custom badges, and shareable status updates
            for your next deployment incident or engineering handoff.
          </p>
        </section>

        <ExcuseGenerator />
      </div>
    </main>
  );
}