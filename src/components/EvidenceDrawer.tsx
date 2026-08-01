'use client';

import type { EvidenceLevel } from '@/lib/content/schema';
import { EVIDENCE_LABELS, EVIDENCE_DESCRIPTIONS } from '@/lib/content/schema';

interface EvidenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  claim?: string;
  level?: EvidenceLevel;
  limitations?: string;
  applicability?: string;
  sources?: Array<{
    title: string;
    authors: string;
    journal: string;
    year: number;
    doi?: string;
    studyType: string;
    coldMethod: string;
    limitations: string;
  }>;
}

export function EvidenceDrawer({
  isOpen,
  onClose,
  claim,
  level,
  limitations,
  applicability,
  sources = [],
}: EvidenceDrawerProps) {
  return (
    <>
      <div
        className="evidence-drawer-overlay"
        data-open={isOpen}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="evidence-drawer"
        data-open={isOpen}
        role="complementary"
        aria-label="Evidence details"
        aria-hidden={!isOpen}
      >
        <div className="evidence-drawer-header">
          <div>
            {level && (
              <span className="evidence-badge" data-level={level}>
                {EVIDENCE_LABELS[level]}
              </span>
            )}
            {claim && (
              <p style={{ marginTop: 'var(--space-4)', fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-lg)', fontWeight: 500 }}>
                {claim}
              </p>
            )}
          </div>
          <button
            className="evidence-drawer-close"
            onClick={onClose}
            aria-label="Close evidence drawer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {level && (
          <div style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--color-bg-deep)', borderRadius: '2px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
              Classification
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              {EVIDENCE_DESCRIPTIONS[level]}
            </p>
          </div>
        )}

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

        {applicability && (
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-2)' }}>
              Relevance to The Ice Sack
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              {applicability}
            </p>
          </div>
        )}

        {sources.length > 0 && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-4)' }}>
              Sources ({sources.length})
            </h4>
            {sources.map((source, i) => (
              <div className="evidence-source" key={i}>
                <h5 className="evidence-source-title">{source.title}</h5>
                <dl className="evidence-source-meta">
                  <dt>Authors</dt>
                  <dd>{source.authors}</dd>
                  <dt>Journal</dt>
                  <dd>{source.journal}, {source.year}</dd>
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
      </aside>
    </>
  );
}

/** Inline evidence trigger button */
export function EvidenceTrigger({
  label,
  level,
  onClick,
}: {
  label: string;
  level: EvidenceLevel;
  onClick: () => void;
}) {
  return (
    <button className="evidence-trigger" onClick={onClick} type="button">
      <span className="evidence-badge" data-level={level} style={{ padding: '1px 4px', fontSize: '0.625rem' }}>
        {EVIDENCE_LABELS[level].split(' ')[0]}
      </span>
      {label}
    </button>
  );
}

/** Standalone evidence badge */
export function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  return (
    <span className="evidence-badge" data-level={level}>
      {EVIDENCE_LABELS[level]}
    </span>
  );
}
