import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EvidenceBadge } from '@/components/EvidenceDrawer';

export const metadata: Metadata = {
  title: 'Evidence Library',
  description: 'Sources, classifications, and the limits of what we know about controlled cold, interoception, and deliberate state practice.',
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
                Sources, classifications, and the limits of what we know.
              </p>
              <p className="text-prose" style={{ marginTop: 'var(--space-4)' }}>
                Every meaningful scientific claim on The Cold Shift includes a source,
                an evidence classification, a limitations statement, and a relevance
                assessment for The Ice Sack delivery method.
              </p>
            </header>

            {/* Classification reference */}
            <section style={{ marginBottom: 'var(--space-16)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-8)' }}>
                Evidence classifications
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))', gap: 'var(--space-4)' }}>
                {[
                  { level: 'established' as const, desc: 'Widely accepted mechanisms supported by authoritative references, replicated research, or strong reviews.' },
                  { level: 'supported' as const, desc: 'A reasonable interpretation supported by multiple sources, with meaningful limitations.' },
                  { level: 'emerging' as const, desc: 'Preliminary, context-dependent, or limited evidence that requires qualification.' },
                  { level: 'hypothesis' as const, desc: 'A conceptual model proposed by BHVD that has not been established scientifically.' },
                  { level: 'subjective' as const, desc: 'An individual report or phenomenological description that cannot be generalized.' },
                ].map(({ level, desc }) => (
                  <div key={level} style={{ padding: 'var(--space-4)', border: '1px solid var(--color-border)' }}>
                    <EvidenceBadge level={level} />
                    <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Source ledger */}
            <section style={{ marginBottom: 'var(--space-16)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
                Foundation research ledger
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-8)', maxWidth: 'var(--max-width-prose)' }}>
                The foundation research program is in progress. Sources will be published here
                as they are reviewed, classified, and verified. Target: 25+ strong sources with
                complete records before public indexing.
              </p>

              <div style={{ padding: 'var(--space-8)', border: '1px dashed var(--color-border-strong)', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', letterSpacing: '0.04em' }}>
                  RESEARCH LEDGER — IN PROGRESS
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)' }}>
                  Sources: 0 of 25 minimum · Classification: pending · Audit trail: pending
                </p>
              </div>
            </section>

            {/* Claim ledger */}
            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
                Claim ledger
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-8)', maxWidth: 'var(--max-width-prose)' }}>
                Every meaningful claim made on The Cold Shift will be catalogued here with its
                classification, source references, limitations, and Ice Sack applicability assessment.
              </p>

              <div style={{ padding: 'var(--space-8)', border: '1px dashed var(--color-border-strong)', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', letterSpacing: '0.04em' }}>
                  CLAIM LEDGER — IN PROGRESS
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)' }}>
                  Claims catalogued: 0 · Pending foundation research completion
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
