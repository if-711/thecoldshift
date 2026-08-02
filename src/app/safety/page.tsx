import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Safety',
  description: 'Safety information for The Ice Sack. This page is pending alignment with the approved product risk assessment.',
};

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <header style={{ marginBottom: 'var(--space-16)' }}>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>Safety</h1>
              <p className="text-prose">
                Cold exposure is a physical stimulus with real physiological effects.
                Not everyone should use it, and no one should use it without understanding
                the risks.
              </p>
            </header>

            <div className="text-prose">
              <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: '#fef3c7', border: '1px solid #f59e0b' }}>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 500, color: '#92400e', marginBottom: 'var(--space-3)' }}>
                  This is not medical advice.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: '#78350f', lineHeight: 'var(--leading-relaxed)' }}>
                  The Cold Shift does not provide medical advice, diagnosis, or treatment.
                  If you have any medical condition or concern, consult a qualified healthcare
                  provider before attempting any cold exposure practice.
                </p>
              </div>

              <div style={{ margin: 'var(--space-12) 0', padding: 'var(--space-8)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>
                  Product safety information is being finalized.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  Ice Sack specific safety information is being finalized against the product
                  risk assessment and Instructions for Use. This page does not replace the
                  instructions supplied with the product.
                </p>
              </div>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                Individual variability
              </h2>
              <p>
                People respond to cold differently. Factors that influence response include
                body composition, age, hormonal status, medication, prior cold exposure
                history, current health status, and individual neurological variation.
              </p>
              <p>
                What feels tolerable to one person may be painful or dangerous to another.
                There is no universal safe duration, temperature, or protocol for cold
                exposure.
              </p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                General guidance
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                The following general cold exposure safety principles apply regardless of
                delivery method. Product-specific guidance will appear above once finalized.
              </p>
              <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <li>Start with shorter durations and milder temperatures</li>
                <li>Stop immediately if you experience unexpected pain, numbness, burning, or confusion</li>
                <li>Monitor skin for signs of cold injury (persistent redness, discoloration, blistering)</li>
                <li>Do not use cold exposure to suppress or override pain signals from an injury</li>
                <li>If you are unsure whether cold exposure is safe for you, ask your doctor</li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
