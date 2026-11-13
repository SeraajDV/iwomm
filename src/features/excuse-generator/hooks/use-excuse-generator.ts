import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { BADGE_THEMES, DEV_EXCUSES, type ThemeKey } from '../../../data/excuses';

export function useExcuseGenerator() {
  const [excuseIndex, setExcuseIndex] = useState(0);
  const [devName, setDevName] = useState('Senior Engineer');
  const [ticketId, setTicketId] = useState('PROD-404');
  const [theme, setTheme] = useState<ThemeKey>('amber');
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  const currentExcuse = DEV_EXCUSES[excuseIndex];
  const activeTheme = BADGE_THEMES[theme];

  const rollNewExcuse = () => {
    let nextIndex = Math.floor(Math.random() * DEV_EXCUSES.length);
    if (nextIndex === excuseIndex) {
      nextIndex = (excuseIndex + 1) % DEV_EXCUSES.length;
    }
    setExcuseIndex(nextIndex);
  };

  const copyChatMessage = async () => {
    const text = `🚨 *[${ticketId}] ${currentExcuse.headline}*\n> ${currentExcuse.explanation}\n_Signed: ${devName} (${currentExcuse.stampText})_`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadBadge = async () => {
    if (!badgeRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(badgeRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = `excuse-badge-${ticketId.toLowerCase() || 'prod'}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setIsExporting(false);
    }
  };

  return {
    activeTheme,
    badgeRef,
    copied,
    currentExcuse,
    devName,
    isExporting,
    setDevName,
    setTicketId,
    setTheme,
    theme,
    ticketId,
    copyChatMessage,
    downloadBadge,
    rollNewExcuse,
  };
}
