import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { STATEMENT_TYPE_LABELS, EVIDENCE_CONFIDENCE_LABELS, ICE_SACK_APPLICABILITY_LABELS } from '@/lib/content/schema';

export const metadata: Metadata = {
  title: 'Evidence Library',
  description: 'How claims are classified on The Cold Shift. Three independent fields: statement type, evidence confidence, and Ice Sack applicability.',
};

export default function EvidencePage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container">
            <header style={{ marginBottom: 'var(--space-16)', maxWidth: 'var(--max-width-prose)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 06</span>
              <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>Evidence</h1>
              <p className="text-prose">
                How claims are classified on The Cold Shift.
              </p>
              <p className="text-prose" style={{ marginTop: 'var(--space-4)' }}>
                Every material scientific claim on this platform will include a statement type,
                evidence confidence level, limitations, and an assessment of whether the evidence
                applies to The Ice Sack delivery method. The evidence system is being built.
                No approved claim records exist yet.
              </p>
            </header>

            {/* Three-field classification reference */}
            <section style={{ marginBottom: 'var(--space-16)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-8)' }}>
                Classification system
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', maxWidth: 'var(--max-width-prose)' }}>
                Claims are classified on three independent axes. These are not combined into
                a single score. Each field answers a different question.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))', gap: 'var(--space-8)' }}>
                {/* Statement Type */}
                <div style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-4)' }}>
                    1. Statement Type
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                    What kind of statement is being made?
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {Object.values(STATEMENT_TYPE_LABELS).map((label) => (
                      <li key={label} style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Evidence Confidence */}
                <div style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-4)' }}>
                    2. Evidence Confidence
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                    How strong is the supporting evidence?
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {Object.values(EVIDENCE_CONFIDENCE_LABELS).map((label) => (
                      <li key={label} style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ice Sack Applicability */}
                <div style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-4)' }}>
                    3. Ice Sack Applicability
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                    Does this evidence apply to The Ice Sack?
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {Object.values(ICE_SACK_APPLICABILITY_LABELS).map((label) => (
                      <li key={label} style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Source ledger */}
            <section style={{ marginBottom: 'var(--space-16)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
                Source ledger
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-8)', maxWidth: 'var(--max-width-prose)' }}>
                The source ledger will contain every research source referenced on this platform.
                Source quality, methodological relevance, and claim suitability are evaluated
                individually. The ledger is empty until sources are reviewed and approved.
              </p>

              <div style={{ padding: 'var(--space-8)', border: '1px dashed var(--color-border-strong)', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', letterSpacing: '0.04em' }}>
                  SOURCE LEDGER — NOT YET POPULATED
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)' }}>
                  Approved sources: 0
                </p>
              </div>
            </section>

            {/* Claim ledger */}
            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
                Claim ledger
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-8)', maxWidth: 'var(--max-width-prose)' }}>
                Every material claim made on The Cold Shift will appear here with its
                statement type, evidence confidence, source references, limitations, and
                Ice Sack applicability. Approved claim records will be published when ready.
              </p>

              <div style={{ padding: 'var(--space-8)', border: '1px dashed var(--color-border-strong)', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', letterSpacing: '0.04em' }}>
                  CLAIM LEDGER — NOT YET POPULATED
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)' }}>
                  Approved claims: 0
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
