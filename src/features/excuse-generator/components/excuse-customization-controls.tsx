import { BADGE_THEMES, type ThemeKey } from '../../../data/excuses';

interface ExcuseCustomizationControlsProps {
  devName: string;
  onDevNameChange: (value: string) => void;
  onThemeChange: (theme: ThemeKey) => void;
  onTicketIdChange: (value: string) => void;
  theme: ThemeKey;
  ticketId: string;
}

export default function ExcuseCustomizationControls({
  devName,
  onDevNameChange,
  onThemeChange,
  onTicketIdChange,
  theme,
  ticketId,
}: ExcuseCustomizationControlsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
      <div>
        <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
          Developer / Scapegoat
        </label>
        <input
          type="text"
          value={devName}
          onChange={(event) => onDevNameChange(event.target.value)}
          maxLength={28}
          placeholder="e.g. Seraaj"
          className="w-full px-3 py-1.5 bg-zinc-950 border border-zinc-700 rounded-lg text-sm font-mono focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
          Incident / Jira ID
        </label>
        <input
          type="text"
          value={ticketId}
          onChange={(event) => onTicketIdChange(event.target.value)}
          maxLength={16}
          placeholder="PROD-911"
          className="w-full px-3 py-1.5 bg-zinc-950 border border-zinc-700 rounded-lg text-sm font-mono uppercase focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
          Badge Style
        </label>
        <div className="flex gap-1.5">
          {(Object.keys(BADGE_THEMES) as ThemeKey[]).map((key) => (
            <button
              key={key}
              onClick={() => onThemeChange(key)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-bold border transition cursor-pointer ${
                theme === key
                  ? 'border-white bg-zinc-800 text-white'
                  : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
