'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

/* ================================================================
   Field / Evidence Mode
   Field mode: concise narrative, visual progression, minimal labels.
   Evidence mode: claim markers, source access, limitations, permanent links.
   Evidence mode reveals support and boundaries for the SAME content.
   It does not reveal claims absent from Field mode.
   ================================================================ */

type ViewMode = 'field' | 'evidence';

interface ModeContextValue {
  mode: ViewMode;
  toggle: () => void;
}

const ModeContext = createContext<ModeContextValue>({
  mode: 'field',
  toggle: () => {},
});

export function useModeContext() {
  return useContext(ModeContext);
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ViewMode>('field');

  const toggle = useCallback(() => {
    setMode((prev) => (prev === 'field' ? 'evidence' : 'field'));
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggle }}>
      {children}
    </ModeContext.Provider>
  );
}

/** Toggle button for Field / Evidence mode */
export function ModeToggle() {
  const { mode, toggle } = useModeContext();

  return (
    <button
      className="mode-toggle"
      onClick={toggle}
      type="button"
      aria-pressed={mode === 'evidence'}
      aria-label={`Switch to ${mode === 'field' ? 'Evidence' : 'Field'} mode`}
    >
      <span
        className="mode-toggle-track"
        data-mode={mode}
      >
        <span className="mode-toggle-label" data-active={mode === 'field'}>
          Field
        </span>
        <span className="mode-toggle-label" data-active={mode === 'evidence'}>
          Evidence
        </span>
        <span className="mode-toggle-thumb" data-mode={mode} />
      </span>
    </button>
  );
}

/**
 * Wrapper that shows children only in evidence mode.
 * Critical content must be in semantic HTML regardless of mode.
 * This controls supplementary evidence detail visibility.
 */
export function EvidenceOnly({ children }: { children: ReactNode }) {
  const { mode } = useModeContext();

  return (
    <div
      className="evidence-only"
      data-visible={mode === 'evidence'}
      aria-hidden={mode !== 'evidence'}
    >
      {children}
    </div>
  );
}
