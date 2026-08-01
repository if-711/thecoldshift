import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Editorial Standards',
  description: 'How The Cold Shift classifies evidence, manages conflicts of interest, and maintains scientific accuracy.',
};

export default function EditorialStandardsPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <header style={{ marginBottom: 'var(--space-16)' }}>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>Editorial Standards</h1>
            </header>
            <div className="text-prose">
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>Claims discipline</h2>
              <p>No scientific claim appears in public copy without:</p>
              <ul style={{ paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                <li>A source</li>
                <li>An evidence classification (one of five levels)</li>
                <li>A limitations statement</li>
                <li>A relevance statement explaining whether the research applies to The Ice Sack delivery method</li>
              </ul>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>Delivery method integrity</h2>
              <p>
                Results from cold water immersion, whole-body cryotherapy, local icing, or
                environmental cold exposure are not presented as evidence for dry cold
                containment without explicit qualification. Each delivery method has a
                different mechanism, and evidence does not transfer automatically.
              </p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>Prohibited claims</h2>
              <p>The Cold Shift does not claim that cold exposure:</p>
              <ul style={{ paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                <li>Regulates the nervous system</li>
                <li>Treats pain, inflammation, or any medical condition</li>
                <li>Activates the vagus nerve</li>
                <li>Improves mental health, reduces anxiety, or treats depression</li>
                <li>Boosts immunity</li>
                <li>Enhances athletic performance or accelerates recovery</li>
                <li>Burns fat or aids weight loss</li>
                <li>Is equivalent to meditation, breathwork, or therapy</li>
              </ul>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>Ownership transparency</h2>
              <p>
                BHVD makes The Ice Sack and built The Cold Shift. This conflict of interest
                is disclosed on every page through the footer and on the About page. Product
                claims are held to the same evidence standards as all other claims.
              </p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>Research process</h2>
              <p>
                The foundation research ledger records every search query, database consulted,
                date, inclusion decision, and exclusion decision. The research process can be
                audited. Sources are peer-reviewed publications accessed through PubMed, Europe
                PMC, Crossref, OpenAlex, and direct DOI records.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
