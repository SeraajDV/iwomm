import ExcuseActions from './components/excuse-actions';
import ExcuseBadge from './components/excuse-badge';
import ExcuseGeneratorHeader from './components/excuse-generator-header';
import ExcuseCustomizationControls from './components/excuse-customization-controls';
import { useExcuseGenerator } from './hooks/use-excuse-generator';

export default function ExcuseGenerator() {
  const {
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
  } = useExcuseGenerator();

  return (
    <div className="w-full max-w-2xl flex flex-col gap-6">
      <ExcuseGeneratorHeader onGenerate={rollNewExcuse} />
      <ExcuseCustomizationControls
        devName={devName}
        onDevNameChange={setDevName}
        onThemeChange={setTheme}
        onTicketIdChange={setTicketId}
        theme={theme}
        ticketId={ticketId}
      />
      <div className="flex justify-center">
        <ExcuseBadge
          badgeRef={badgeRef}
          currentExcuse={currentExcuse}
          devName={devName}
          activeTheme={activeTheme}
          ticketId={ticketId}
        />
      </div>
      <ExcuseActions
        copied={copied}
        isExporting={isExporting}
        onCopy={copyChatMessage}
        onDownload={downloadBadge}
      />
    </div>
  );
}
