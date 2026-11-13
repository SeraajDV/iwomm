import { RefreshCw, Terminal } from 'lucide-react';

interface ExcuseGeneratorHeaderProps {
  onGenerate: () => void;
}

export default function ExcuseGeneratorHeader({
  onGenerate,
}: ExcuseGeneratorHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
      <div className="flex items-center gap-2.5">
        <div className="p-2 bg-amber-400 text-zinc-950 rounded-lg">
          <Terminal className="w-5 h-5 stroke-[2.5]" />
        </div>
        <div>
          <p className="text-xl font-black tracking-tight uppercase text-white">
            It Worked On My Machine™
          </p>
          <p className="text-xs text-zinc-400 font-mono">
            Incident excuse and official liability waiver generator
          </p>
        </div>
      </div>

      <button
        onClick={onGenerate}
        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-rose-950/50 transition cursor-pointer"
      >
        <RefreshCw className="w-4 h-4" />
        Generate Excuse
      </button>
    </header>
  );
}
