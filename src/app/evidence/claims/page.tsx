import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  claims,
  EVIDENCE_CONFIDENCE_LABELS,
  ICE_SACK_APPLICABILITY_LABELS,
  STATEMENT_TYPE_LABELS,
} from '@/lib/content/schema';

export const metadata: Metadata = {
  title: 'Claim Ledger',
  description:
    'The public wording, evidence confidence, limitations, and product applicability of claims used by The Cold Shift.',
};

export default function ClaimLedgerPage() {
  const approvedClaims = claims.filter((claim) => claim.approvalStatus === 'approved');

  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container">
            <header style={{ marginBottom: 'var(--space-16)', maxWidth: 'var(--max-width-prose)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-tertiary)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Evidence records
              </p>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>Claim Ledger</h1>
              <p className="text-prose">
                Claims are published with their exact wording, source relationship,
                limitations, and relevance to The Ice Sack.
              </p>
            </header>

            <div style={{ borderTop: '1px solid var(--color-border-strong)' }}>
              {approvedClaims.map((claim, index) => (
                <Link
                  href={`/evidence/claims/${claim.id}/`}
                  key={claim.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '3.5rem minmax(0, 1fr) auto',
                    gap: 'var(--space-6)',
                    padding: 'var(--space-8) 0',
                    borderBottom: '1px solid var(--color-border)',
                    alignItems: 'start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-spectral)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span
                      className="evidence-badge"
                      data-type={claim.statementType}
                      style={{ marginBottom: 'var(--space-4)' }}
                    >
                      {STATEMENT_TYPE_LABELS[claim.statementType]}
                    </span>
                    <strong
                      style={{
                        display: 'block',
                        maxWidth: '52rem',
                        fontFamily: 'var(--font-editorial)',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 500,
                        lineHeight: 'var(--leading-snug)',
                      }}
                    >
                      {claim.statement}
                    </strong>
                    <span
                      style={{
                        display: 'block',
                        marginTop: 'var(--space-4)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-tertiary)',
                      }}
                    >
                      {EVIDENCE_CONFIDENCE_LABELS[claim.evidenceConfidence]} confidence ·{' '}
                      {ICE_SACK_APPLICABILITY_LABELS[claim.iceSackApplicability]}
                    </span>
                  </span>
                  <span aria-hidden="true" style={{ color: 'var(--color-text-tertiary)' }}>
                    →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/evidence/"
              style={{
                display: 'inline-block',
                marginTop: 'var(--space-12)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-spectral)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Return to Evidence
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
