import ExcuseGenerator from "./features/excuse-generator/excuse-generator";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 sm:p-8">
      <ExcuseGenerator />
    </main>
  );
}