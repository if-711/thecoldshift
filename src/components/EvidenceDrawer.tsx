'use client';

import { useRef, useEffect, useCallback } from 'react';
import {
  getApprovedClaim,
  STATEMENT_TYPE_LABELS,
  EVIDENCE_CONFIDENCE_LABELS,
  ICE_SACK_APPLICABILITY_LABELS,
} from '@/lib/content/schema';
import type { Claim, Source, StatementType, EvidenceConfidence, IceSackApplicability } from '@/lib/content/schema';
import { PREVIEW_MODE } from '@/lib/preview';

/* ================================================================
   EvidenceBadge — Claim-Bound (Production)
   Accepts an approved claim ID. Renders nothing if the claim
   does not exist or is not approved. In development mode, logs
   a warning to the console.
   ================================================================ */
export function EvidenceBadge({ claimId }: { claimId: string }) {
  const claim = getApprovedClaim(claimId);

  if (!claim) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[EvidenceBadge] Claim "${claimId}" not found or not approved.`);
    }
    return null;
  }

  return (
    <span className="evidence-badge" data-type={claim.statementType}>
      {STATEMENT_TYPE_LABELS[claim.statementType]}
    </span>
  );
}

/* ================================================================
   PrototypeEvidenceBadge — Preview Only
   Renders only when NEXT_PUBLIC_PREVIEW_MODE=true.
   Accepts explicit fixture data, never resolves from the real ledger.
   ================================================================ */
export function PrototypeEvidenceBadge({
  label,
  fixtureId,
}: {
  label: string;
  fixtureId: string;
}) {
  if (!PREVIEW_MODE) return null;

  return (
    <span className="evidence-badge evidence-badge--prototype" data-fixture={fixtureId}>
      <span className="evidence-badge-proto-marker">PROTOTYPE</span>
      {label}
    </span>
  );
}

/* ================================================================
   EvidenceTrigger — Inline clickable trigger
   Opens the Evidence Drawer for a specific claim.
   ================================================================ */
export function EvidenceTrigger({
  label,
  claimId,
  onClick,
}: {
  label: string;
  claimId: string;
  onClick: () => void;
}) {
  const claim = getApprovedClaim(claimId);
  const isPrototype = !claim && PREVIEW_MODE;

  if (!claim && !isPrototype) return null;

  return (
    <button className="evidence-trigger" onClick={onClick} type="button">
      {isPrototype && <span className="evidence-badge-proto-marker">PROTO</span>}
      {label}
    </button>
  );
}

/* ================================================================
   EvidenceDrawer — Accessible Dialog
   Proper dialog with:
   1. aria-labelledby
   2. Focus moves into drawer on open
   3. Focus trap while open
   4. Escape closes
   5. Focus returns to trigger
   6. Closed content is inert
   7. Background interaction disabled
   8. Screen readers receive open/closed state
   ================================================================ */
interface EvidenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  /** Real claim data */
  claim?: Claim | null;
  claimSources?: Source[];
  /** Or prototype fixture data (preview mode only) */
  prototypeData?: {
    statement: string;
    statementType: StatementType;
    evidenceConfidence: EvidenceConfidence;
    iceSackApplicability: IceSackApplicability;
    limitations: string;
    evidenceSynthesis: string;
    sources: Array<{
      title: string;
      authors: string;
      journal: string;
      year: number;
      doi?: string;
      studyType: string;
      coldMethod: string;
      limitations: string;
    }>;
  };
}

export function EvidenceDrawer({
  isOpen,
  onClose,
  claim,
  claimSources = [],
  prototypeData,
}: EvidenceDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = 'evidence-drawer-title';

  // Determine if rendering prototype or real data
  const isPrototype = !claim && !!prototypeData && PREVIEW_MODE;
  const statement = claim?.statement ?? prototypeData?.statement ?? '';
  const stType = claim?.statementType ?? prototypeData?.statementType;
  const evConf = claim?.evidenceConfidence ?? prototypeData?.evidenceConfidence;
  const isAppl = claim?.iceSackApplicability ?? prototypeData?.iceSackApplicability;
  const limitations = claim?.limitations ?? prototypeData?.limitations ?? '';
  const synthesis = claim?.evidenceSynthesis ?? prototypeData?.evidenceSynthesis ?? '';
  const drawerSources = claim
    ? claimSources.map((s) => ({
        title: s.title,
        authors: s.authors.join(', '),
        journal: s.journal,
        year: s.year,
        doi: s.doi,
        studyType: s.studyType,
        coldMethod: s.coldMethod,
        limitations: s.limitations,
      }))
    : prototypeData?.sources ?? [];

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeRef.current?.focus(), 50);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen]);

  // Escape + focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay — prevents background interaction */}
      <div
        className="evidence-drawer-overlay"
        data-open={isOpen}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Dialog */}
      <div
        ref={drawerRef}
        className="evidence-drawer"
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!isOpen}
        {...(!isOpen ? { inert: '' } : {})}
      >
        {/* Prototype banner */}
        {isPrototype && (
          <div className="evidence-drawer-proto-banner">
            Interface prototype · Evidence record not yet populated
          </div>
        )}

        <div className="evidence-drawer-header">
          <div>
            {stType && (
              <span className="evidence-badge" data-type={stType}>
                {isPrototype ? 'Interface Demonstration' : STATEMENT_TYPE_LABELS[stType]}
              </span>
            )}
            <p id={titleId} style={{ marginTop: 'var(--space-4)', fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-lg)', fontWeight: 500 }}>
              {statement}
            </p>
          </div>
          <button
            ref={closeRef}
            className="evidence-drawer-close"
            onClick={onClose}
            aria-label="Close evidence drawer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Three-field classification */}
        <div style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--color-bg-deep)', borderRadius: '2px' }}>
          <dl style={{ display: 'grid', gap: 'var(--space-3)' }}>
            {stType && (
              <div>
                <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Statement Type
                </dt>
                <dd style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  {isPrototype ? 'Interface demonstration' : STATEMENT_TYPE_LABELS[stType]}
                </dd>
              </div>
            )}
            {evConf && (
              <div>
                <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Evidence Confidence
                </dt>
                <dd style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  {isPrototype ? 'Prototype only' : EVIDENCE_CONFIDENCE_LABELS[evConf]}
                </dd>
              </div>
            )}
            {isAppl && (
              <div>
                <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Ice Sack Applicability
                </dt>
                <dd style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  {isPrototype ? 'Not applicable' : ICE_SACK_APPLICABILITY_LABELS[isAppl]}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Evidence synthesis */}
        {synthesis && (
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-2)' }}>
              Evidence Synthesis
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              {synthesis}
            </p>
          </div>
        )}

        {/* Limitations */}
        {limitations && (
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-2)' }}>
              Limitations
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              {limitations}
            </p>
          </div>
        )}

        {/* Sources */}
        {drawerSources.length > 0 && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-4)' }}>
              Sources ({drawerSources.length})
            </h4>
            {drawerSources.map((source, i) => (
              <div className="evidence-source" key={i}>
                <h5 className="evidence-source-title">{source.title}</h5>
                <dl className="evidence-source-meta">
                  <dt>Authors</dt>
                  <dd>{source.authors}</dd>
                  <dt>Journal</dt>
                  <dd>{source.journal}{source.year ? `, ${source.year}` : ''}</dd>
                  <dt>Study Type</dt>
                  <dd>{source.studyType}</dd>
                  <dt>Cold Method</dt>
                  <dd>{source.coldMethod}</dd>
                  <dt>Limitations</dt>
                  <dd>{source.limitations}</dd>
                  {source.doi && (
                    <>
                      <dt>DOI</dt>
                      <dd>
                        <a
                          href={`https://doi.org/${source.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--color-spectral)', textDecoration: 'underline' }}
                        >
                          {source.doi}
                        </a>
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            ))}
          </div>
        )}

        {/* Permanent claim link */}
        {claim && (
          <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
            <a
              href={`/evidence/claims/${claim.id}`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-spectral)', textDecoration: 'underline', letterSpacing: '0.04em' }}
            >
              Permanent claim record →
            </a>
          </div>
        )}
      </div>
    </>
  );
}
