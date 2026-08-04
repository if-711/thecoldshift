import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChapterNav } from '@/components/ChapterNav';
import { ChapterFlow } from '@/components/ChapterFlow';
import { EvidenceLibraryInteractive } from '@/components/EvidenceLibraryInteractive';
import {
  claims,
  sources,
  productFacts,
  STATEMENT_TYPE_LABELS,
  EVIDENCE_CONFIDENCE_LABELS,
  ICE_SACK_APPLICABILITY_LABELS,
} from '@/lib/content/schema';

export const metadata: Metadata = {
  title: 'Evidence Library',
  description:
    'The source, claim, and product fact records behind The Cold Shift, with explicit limitations and Ice Sack applicability.',
};

export default function EvidencePage() {
  const approvedClaims = claims.filter((claim) => claim.approvalStatus === 'approved');

  return (
    <>
      <Header />
      <div style={{ paddingTop: '3.5rem' }}>
        <div className="container" style={{ paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-2)' }}>
          <ChapterNav />
        </div>
      <main id="main-content">
        <article className="section">
          <div className="container">
            <header style={{ marginBottom: 'var(--space-16)', maxWidth: 'var(--max-width-prose)' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                Chapter 06
              </span>
              <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                Evidence
              </h1>
              <p className="text-prose">
                Every scientific statement needs a source. Every source needs a boundary.
                Every product inference needs an applicability decision.
              </p>
              <p className="text-prose" style={{ marginTop: 'var(--space-4)' }}>
                This first record set contains {sources.length} reviewed sources,{' '}
                {approvedClaims.length} approved claim records, and {productFacts.length}{' '}
                manufacturer-supplied product records. It is a foundation, not a claim
                that the literature search is complete.
              </p>
            </header>

            <section style={{ marginBottom: 'var(--space-16)' }} aria-labelledby="classification-system">
              <h2 id="classification-system" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
                Three independent questions
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-8)',
                  maxWidth: 'var(--max-width-prose)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                The classification fields are not collapsed into a single score.
                A well-established physiological mechanism can still have no direct
                product evidence.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))',
                  gap: 'var(--space-6)',
                }}
              >
                <ClassificationCard
                  number="01"
                  title="Statement type"
                  question="What kind of statement is being made?"
                  labels={Object.values(STATEMENT_TYPE_LABELS)}
                />
                <ClassificationCard
                  number="02"
                  title="Evidence confidence"
                  question="How strong is the supporting evidence?"
                  labels={Object.values(EVIDENCE_CONFIDENCE_LABELS)}
                />
                <ClassificationCard
                  number="03"
                  title="Ice Sack applicability"
                  question="Does the evidence apply to this delivery system?"
                  labels={Object.values(ICE_SACK_APPLICABILITY_LABELS)}
                />
              </div>
            </section>

            <EvidenceLibraryInteractive />

            <section style={{ marginBottom: 'var(--space-16)' }} aria-labelledby="source-ledger">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 'var(--space-6)',
                  marginBottom: 'var(--space-8)',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-tertiary)',
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    Primary records
                  </p>
                  <h2 id="source-ledger" style={{ fontSize: 'var(--text-2xl)' }}>
                    Source ledger
                  </h2>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-tertiary)',
                  }}
                >
                  {sources.length} records · Reviewed 2026-08-01
                </span>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border-strong)' }}>
                {sources.map((source) => (
                  <Link
                    href={`/evidence/sources/${source.id}/`}
                    key={source.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '5rem minmax(0, 1fr) auto',
                      gap: 'var(--space-6)',
                      padding: 'var(--space-6) 0',
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
                      {source.year}
                    </span>
                    <span>
                      <strong
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-editorial)',
                          fontSize: 'var(--text-base)',
                          fontWeight: 500,
                          marginBottom: 'var(--space-2)',
                        }}
                      >
                        {source.title}
                      </strong>
                      <span
                        style={{
                          display: 'block',
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-text-tertiary)',
                        }}
                      >
                        {source.journal} · PMID {source.pmid}
                      </span>
                    </span>
                    <span aria-hidden="true" style={{ color: 'var(--color-text-tertiary)' }}>
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: 'var(--space-16)' }} aria-labelledby="claim-ledger">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 'var(--space-6)',
                  marginBottom: 'var(--space-8)',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-tertiary)',
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    Public wording
                  </p>
                  <h2 id="claim-ledger" style={{ fontSize: 'var(--text-2xl)' }}>
                    Claim ledger
                  </h2>
                </div>
                <Link
                  href="/evidence/claims/"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-spectral)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  View complete ledger
                </Link>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
                  gap: 'var(--space-6)',
                }}
              >
                {approvedClaims.slice(0, 6).map((claim) => (
                  <Link
                    href={`/evidence/claims/${claim.id}/`}
                    key={claim.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: '16rem',
                      padding: 'var(--space-6)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <span
                      className="evidence-badge"
                      data-type={claim.statementType}
                      style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-6)' }}
                    >
                      {STATEMENT_TYPE_LABELS[claim.statementType]}
                    </span>
                    <strong
                      style={{
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
                        marginTop: 'auto',
                        paddingTop: 'var(--space-6)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-tertiary)',
                      }}
                    >
                      {EVIDENCE_CONFIDENCE_LABELS[claim.evidenceConfidence]} confidence ·{' '}
                      {ICE_SACK_APPLICABILITY_LABELS[claim.iceSackApplicability]}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section aria-labelledby="product-records">
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-tertiary)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Separate from scientific claims
              </p>
              <h2 id="product-records" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
                Product fact records
              </h2>
              <p
                style={{
                  maxWidth: 'var(--max-width-prose)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-8)',
                }}
              >
                These records describe the published Origin Edition configuration.
                Their current status is manufacturer supplied and pending completion
                of the underlying public measurement documentation.
              </p>
              <dl style={{ maxWidth: 'var(--max-width-wide)', borderTop: '1px solid var(--color-border-strong)' }}>
                {productFacts.map((fact) => (
                  <div
                    key={fact.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '9rem minmax(0, 1fr) auto',
                      gap: 'var(--space-6)',
                      padding: 'var(--space-4) 0',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-tertiary)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {fact.category}
                    </dt>
                    <dd style={{ margin: 0 }}>{fact.publicWording}</dd>
                    <dd
                      style={{
                        margin: 0,
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-tertiary)',
                        textTransform: 'uppercase',
                      }}
                    >
                      Manufacturer supplied
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <ChapterFlow currentChapterId="evidence" />
        </article>
      </main>
      </div>
      <Footer />
    </>
  );
}

function ClassificationCard({
  number,
  title,
  question,
  labels,
}: {
  number: string;
  title: string;
  question: string;
  labels: string[];
}) {
  return (
    <div style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border)' }}>
      <span
        style={{
          display: 'block',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-spectral)',
          marginBottom: 'var(--space-6)',
        }}
      >
        {number}
      </span>
      <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>{title}</h3>
      <p
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-6)',
        }}
      >
        {question}
      </p>
      <ul style={{ listStyle: 'none', display: 'grid', gap: 'var(--space-2)' }}>
        {labels.map((label) => (
          <li
            key={label}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-tertiary)',
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
