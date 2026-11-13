import { Check, Copy, Download } from 'lucide-react';

interface ExcuseActionsProps {
  copied: boolean;
  isExporting: boolean;
  onCopy: () => Promise<void>;
  onDownload: () => Promise<void>;
}

export default function ExcuseActions({
  copied,
  isExporting,
  onCopy,
  onDownload,
}: ExcuseActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={onCopy}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl font-mono text-sm font-bold transition cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">Copied for Chat!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>Copy Excuse</span>
          </>
        )}
      </button>

      <button
        onClick={onDownload}
        disabled={isExporting}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl font-mono text-sm font-black uppercase tracking-wide shadow-lg transition cursor-pointer disabled:opacity-50"
      >
        <Download className="w-4 h-4 stroke-[2.5]" />
        {isExporting ? 'Rendering PNG...' : 'Download PNG Badge'}
      </button>
    </div>
  );
}
