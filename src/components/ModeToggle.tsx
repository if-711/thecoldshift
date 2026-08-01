'use client';

// React hooks will be used when mode persistence is added

export type ViewMode = 'field' | 'evidence';

export function ModeToggle({
  mode,
  onModeChange,
}: {
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}) {
  return (
    <div className="mode-toggle" role="group" aria-label="View mode">
      <button
        className="mode-toggle-option"
        aria-pressed={mode === 'field'}
        onClick={() => onModeChange('field')}
      >
        Field
      </button>
      <button
        className="mode-toggle-option"
        aria-pressed={mode === 'evidence'}
        onClick={() => onModeChange('evidence')}
      >
        Evidence
      </button>
    </div>
  );
}
