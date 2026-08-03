import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Safety',
  description: 'Product safety information for The Ice Sack is not yet final. The risk assessment and instructions for use are being completed.',
};

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <header style={{ marginBottom: 'var(--space-16)' }}>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                Product safety information is not yet final.
              </h1>
              <p className="text-prose">
                The Ice Sack risk assessment and final instructions for use are still being
                completed. Do not use this page as product instructions.
              </p>
            </header>

            <div className="text-prose">
              <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: '#fef3c7', border: '1px solid #f59e0b' }}>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 500, color: '#92400e', marginBottom: 'var(--space-3)' }}>
                  This is not medical advice.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: '#78350f', lineHeight: 'var(--leading-relaxed)' }}>
                  Cold exposure can cause injury and can produce cardiovascular, respiratory,
                  neurological, or allergic responses. Individual tolerance does not establish safety.
                </p>
              </div>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                Required before commercial use
              </h2>

              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                The final safety page must be supplied from the approved risk assessment and
                instructions for use. The following items must be addressed before publication:
              </p>

              {/* TODO: OWNER REVIEW — These items require the approved risk assessment */}
              <ol style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                <li>Intended user</li>
                <li>Intended use</li>
                <li>Contraindications</li>
                <li>Warnings</li>
                <li>Precautions</li>
                <li>Required clothing or skin barrier</li>
                <li>Preparation and pre-use inspection</li>
                <li>Maximum approved exposure conditions</li>
                <li>Stop conditions</li>
                <li>Safe exit</li>
                <li>Rewarming</li>
                <li>Cleaning and storage</li>
                <li>Damage or leakage</li>
                <li>Children and vulnerable users</li>
                <li>Medication and medical condition considerations</li>
                <li>Emergency response</li>
                <li>Adverse event contact</li>
                <li>Document version and effective date</li>
              </ol>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
