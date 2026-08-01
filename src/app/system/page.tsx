import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EvidenceBadge } from '@/components/EvidenceDrawer';

export const metadata: Metadata = {
  title: 'The Ice Sack System',
  description: 'Verified specifications and facts about The Ice Sack — a dry cold containment system by BHVD.',
};

export default function SystemPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <header style={{ marginBottom: 'var(--space-16)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 07</span>
              <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>System</h1>
              <p className="text-prose">
                The Ice Sack — a dry cold containment system.
              </p>
            </header>

            <div className="text-prose">
              <p>
                The Ice Sack is a physical product developed by BHVD. It is a wearable dry cold
                containment system that uses phase-change material (PCM) to deliver controlled
                temperature to the body without water immersion.
              </p>
              <p>
                This page lists only verified product facts. Information that has not been
                independently verified or that requires additional confirmation is marked as
                unresolved.
              </p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                Product fact sheet
              </h2>

              <div style={{ padding: 'var(--space-8)', border: '1px dashed var(--color-border-strong)', marginBottom: 'var(--space-8)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', letterSpacing: '0.04em', textAlign: 'center' }}>
                  PRODUCT FACT SHEET — PENDING VERIFICATION
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)', textAlign: 'center' }}>
                  Verified facts: 0 · Unresolved items: PCM temperature, session duration,
                  cooling curve, body coverage percentage, physiological effect measurements
                </p>
              </div>

              <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  <strong>Ownership disclosure:</strong> The Ice Sack is a BHVD product.
                  The Cold Shift is a BHVD field project. This page describes a product made
                  by the same organization that built this website. All claims are held to the
                  same evidence standards described in the Evidence Library.
                </p>
              </div>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                Purchase
              </h2>
              <p>
                The Ice Sack is sold through{' '}
                <a
                  href="https://www.theicesack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  theicesack.com
                </a>
                .
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
