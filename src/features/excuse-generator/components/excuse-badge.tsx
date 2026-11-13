import type { RefObject } from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { type Excuse, type ThemeKey, BADGE_THEMES } from '../../../data/excuses';

interface ExcuseBadgeProps {
  badgeRef: RefObject<HTMLDivElement | null>;
  currentExcuse: Excuse;
  devName: string;
  activeTheme: (typeof BADGE_THEMES)[ThemeKey];
  ticketId: string;
}

export default function ExcuseBadge({
  badgeRef,
  currentExcuse,
  devName,
  activeTheme,
  ticketId,
}: ExcuseBadgeProps) {
  return (
    <div
      ref={badgeRef}
      className={`w-full p-6 sm:p-8 rounded-2xl border-4 ${activeTheme.bg} ${activeTheme.text} ${activeTheme.border} shadow-2xl relative overflow-hidden`}
    >
      <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b-2 border-current/20 font-mono text-xs font-bold uppercase">
        <span className="flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4" />
          OFFICIAL COMPLIANCE WAIVER // {ticketId || 'INCIDENT'}
        </span>
        <span className={`px-2.5 py-0.5 rounded ${activeTheme.accent}`}>
          {currentExcuse.category}
        </span>
      </div>

      <div className="space-y-3 my-4">
        <div className="inline-block font-mono text-[11px] font-black tracking-widest uppercase px-2 py-0.5 border-2 border-current">
          STATUS: {currentExcuse.riskLevel}
        </div>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-none uppercase">
          “{currentExcuse.headline}”
        </h2>
        <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed pt-1">
          {currentExcuse.explanation}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t-2 border-current/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-mono">
        <div>
          <div className="text-[10px] uppercase opacity-75">Verified By</div>
          <div className="text-sm font-black uppercase">
            {devName || 'Anonymous Dev'}
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-current font-black text-xs uppercase tracking-wider -rotate-2 self-start sm:self-auto">
          <ShieldAlert className="w-4 h-4" />
          {currentExcuse.stampText}
        </div>
      </div>
    </div>
  );
}
