import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EvidenceBadge } from '@/components/EvidenceDrawer';

export const metadata: Metadata = {
  title: 'Safety',
  description: 'Safety considerations, contraindications, and individual variability for controlled cold exposure.',
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
                  Cold exposure carries real physiological risks. If you have any medical
                  condition or concern, consult a qualified healthcare provider before
                  attempting any cold exposure practice.
                </p>
              </div>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                Known contraindications
              </h2>
              <p>
                The following conditions may make cold exposure dangerous. This list is not
                exhaustive. Consult a medical professional for guidance specific to your
                situation.
              </p>
              <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <li>Cardiovascular disease or uncontrolled hypertension</li>
                <li>Raynaud&apos;s disease or phenomenon</li>
                <li>Cold urticaria (cold-induced hives)</li>
                <li>Peripheral neuropathy or reduced sensation</li>
                <li>Open wounds or recent surgical sites</li>
                <li>Pregnancy</li>
                <li>Cryoglobulinemia</li>
                <li>Uncontrolled seizure disorders</li>
                <li>Current fever or active infection</li>
              </ul>

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

              <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
                <EvidenceBadge level="established" />
                <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
                  Individual variability in thermoregulatory response is well-established
                  in the physiology literature. Cold tolerance varies with age, sex, body
                  composition, habituation status, and health.
                </p>
              </div>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
                General guidance
              </h2>
              <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <li>Start with shorter durations and milder temperatures</li>
                <li>Never practice cold exposure alone in water</li>
                <li>Stop immediately if you experience numbness, extreme pain, dizziness, or confusion</li>
                <li>Monitor skin for signs of cold injury (white or gray patches, persistent numbness)</li>
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
