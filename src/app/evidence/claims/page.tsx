import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Claim Ledger',
  description: 'The public claim ledger for The Cold Shift. Every material scientific claim will appear here with its classification, sources, and limitations.',
};

export default function ClaimLedgerPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <header style={{ marginBottom: 'var(--space-16)' }}>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>Claim Ledger</h1>
              <p className="text-prose">
                The public record of every material scientific claim on The Cold Shift.
              </p>
            </header>

            <div className="text-prose">
              <p>
                Each approved claim will include:
              </p>
              <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <li>Exact claim wording</li>
                <li>Statement type</li>
                <li>Evidence confidence</li>
                <li>Source records with study metadata</li>
                <li>Limitations</li>
                <li>Ice Sack applicability</li>
                <li>Last review date</li>
                <li>Approval status</li>
              </ul>

              <div style={{ margin: 'var(--space-12) 0', padding: 'var(--space-8)', border: '1px dashed var(--color-border-strong)', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', letterSpacing: '0.04em' }}>
                  CLAIM LEDGER — NOT YET POPULATED
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)' }}>
                  Approved claim records will appear here when the evidence system is complete.
                </p>
              </div>

              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)' }}>
                The claim ledger is part of the evidence architecture described on the{' '}
                <a href="/evidence/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'underline' }}>
                  Evidence
                </a>{' '}
                page.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
