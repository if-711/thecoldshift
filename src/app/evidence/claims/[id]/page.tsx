import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  claims,
  getClaimById,
  getSourcesForClaim,
  EVIDENCE_CONFIDENCE_LABELS,
  ICE_SACK_APPLICABILITY_LABELS,
  STATEMENT_TYPE_LABELS,
} from '@/lib/content/schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return claims
    .filter((claim) => claim.approvalStatus === 'approved')
    .map((claim) => ({ id: claim.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const claim = getClaimById(id);
  if (!claim) return {};

  return {
    title: `Claim Record | ${claim.statement.slice(0, 58)}`,
    description: claim.statement,
  };
}

export default async function ClaimRecordPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const claim = getClaimById(id);
  if (!claim || claim.approvalStatus !== 'approved') notFound();
  const claimSources = getSourcesForClaim(claim);

  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <header style={{ marginBottom: 'var(--space-12)', maxWidth: 'var(--max-width-prose)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Permanent claim record
              </p>
              <span
                className="evidence-badge"
                data-type={claim.statementType}
                style={{ marginBottom: 'var(--space-6)' }}
              >
                {STATEMENT_TYPE_LABELS[claim.statementType]}
              </span>
              <h1 style={{ fontSize: 'var(--text-4xl)', lineHeight: 'var(--leading-snug)' }}>
                {claim.statement}
              </h1>
            </header>

            <dl
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 13rem), 1fr))',
                gap: 'var(--space-6)',
                padding: 'var(--space-6)',
                background: 'var(--color-bg-deep)',
                marginBottom: 'var(--space-12)',
              }}
            >
              <RecordField label="Statement type" value={STATEMENT_TYPE_LABELS[claim.statementType]} />
              <RecordField label="Evidence confidence" value={EVIDENCE_CONFIDENCE_LABELS[claim.evidenceConfidence]} />
              <RecordField label="Ice Sack applicability" value={ICE_SACK_APPLICABILITY_LABELS[claim.iceSackApplicability]} />
              <RecordField label="Last reviewed" value={claim.lastReviewDate} />
            </dl>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
                gap: 'var(--space-12)',
                marginBottom: 'var(--space-16)',
              }}
            >
              <section aria-labelledby="claim-synthesis">
                <h2 id="claim-synthesis" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
                  Evidence synthesis
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  {claim.evidenceSynthesis}
                </p>
              </section>
              <section aria-labelledby="claim-limitations">
                <h2 id="claim-limitations" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
                  Limitations
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  {claim.limitations}
                </p>
              </section>
            </div>

            <section aria-labelledby="claim-sources">
              <h2 id="claim-sources" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-8)' }}>
                Supporting records
              </h2>
              {claimSources.length > 0 ? (
                <div style={{ borderTop: '1px solid var(--color-border-strong)' }}>
                  {claimSources.map((source) => (
                    <Link
                      href={`/evidence/sources/${source.id}/`}
                      key={source.id}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) auto',
                        gap: 'var(--space-6)',
                        padding: 'var(--space-6) 0',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      <span>
                        <strong style={{ display: 'block', fontFamily: 'var(--font-editorial)', fontWeight: 500 }}>
                          {source.title}
                        </strong>
                        <span
                          style={{
                            display: 'block',
                            marginTop: 'var(--space-2)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--text-xs)',
                            color: 'var(--color-text-tertiary)',
                          }}
                        >
                          {source.journal}, {source.year} · PMID {source.pmid}
                        </span>
                      </span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  No direct study is cited because this record identifies a BHVD
                  conceptual boundary rather than a demonstrated scientific outcome.
                </p>
              )}
            </section>

            <Link
              href="/evidence/claims/"
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
              Return to claim ledger
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function RecordField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-tertiary)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: 'var(--space-2)',
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: 0, color: 'var(--color-text-secondary)' }}>{value}</dd>
    </div>
  );
}
