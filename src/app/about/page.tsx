import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About BHVD',
  description: 'The Cold Shift is published by BHVD. This page discloses the ownership relationship.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <header style={{ marginBottom: 'var(--space-16)' }}>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>About BHVD</h1>
            </header>

            <div className="text-prose">
              <p>
                The Cold Shift is published by BHVD.
              </p>
              <p>
                BHVD developed The Ice Sack and the Neuropause practice format.
                The Cold Shift is the field guide: it documents what research supports,
                what BHVD proposes, and what remains untested about controlled cold
                as a category.
              </p>
              {/* TODO: OWNER — Confirm legal entity name (BHVD vs BHVD Labs), registration jurisdiction, and registered agent or principal address */}

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                Ownership and conflicts of interest
              </h2>
              <p>
                BHVD makes and sells The Ice Sack. BHVD built The Cold Shift. This creates
                an inherent conflict of interest: the organization producing the education
                also produces the product.
              </p>
              <p>
                To manage this conflict, The Cold Shift holds every claim — including claims
                about its own product — to the same evidence classification system. Brand
                hypotheses are labeled as brand hypotheses. Unverified product specifications
                are marked as unresolved. Research from other delivery methods is not
                presented as Ice Sack evidence.
              </p>
              <p>
                No sponsors. No advertising. No affiliate revenue. Revenue comes from
                product sales through{' '}
                <a
                  href="https://www.theicesack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  theicesack.com
                </a>
                .
              </p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                Related projects
              </h2>
              <ul style={{ paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <li>
                  <a href="https://bodymindstate.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    Body Mind State
                  </a>{' '}
                  — Nervous system science for the informed human
                </li>
                <li>
                  <a href="https://www.theicesack.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    The Ice Sack
                  </a>{' '}
                  — Wearable dry cold system
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
