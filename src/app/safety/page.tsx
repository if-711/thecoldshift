import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Safety Instructions',
  description:
    'Essential safety guidelines for The Ice Sack cold exposure system. Proper use, precautions, and emergency information.',
  alternates: {
    canonical: 'https://theicesack.com/safety',
  },
};

const contraindications = [
  'Have a cardiovascular condition',
  'Have impaired circulation',
  'Have reduced temperature sensation, neuropathy, or another nerve-related condition',
  'Have Raynaud\u2019s phenomenon, cold urticaria, cryoglobulinemia, or another condition associated with cold sensitivity',
  'Are pregnant',
  'Recently underwent surgery',
  'Have an open wound, active skin condition, or impaired skin integrity',
  'Take medication that may affect circulation, sensation, alertness, blood pressure, or temperature response',
  'Have another condition that could affect your response to cold',
];

const doNotUse = [
  'While sleeping',
  'While impaired by alcohol, drugs, medication, or another substance',
  'While sedated',
  'While physically restrained',
  'While unable to communicate discomfort',
  'While unable to open and exit the product independently',
  'With damaged, leaking, punctured, or altered components',
  'Near an open flame, heater, or direct heat source',
  'In a manner inconsistent with product instructions',
];

const duringUseAlways = [
  'Remain awake and responsive',
  'Keep the zipper and exit path accessible',
  'Monitor your physical response',
  'Follow recommended session instructions',
  'Stop use whenever continued exposure feels unsafe',
];

const exitImmediately = [
  'Chest discomfort',
  'Difficulty breathing',
  'Severe dizziness',
  'Confusion',
  'Loss of coordination',
  'Unusual weakness',
  'Persistent numbness',
  'Significant skin discoloration',
  'Severe discomfort or pain',
];

/* Emergency language — prescribed copy, do not paraphrase */
const EMERGENCY_INSTRUCTION =
  'If you are experiencing chest pain, difficulty breathing, loss of consciousness, severe confusion, or another medical emergency, exit The Ice Sack immediately and call 911 or your local emergency number.';

const sectionHeadingStyle = {
  fontSize: 'var(--text-2xl)',
  marginBottom: 'var(--space-6)',
  marginTop: 'var(--space-16)',
} as const;

const listStyle = {
  marginTop: 'var(--space-4)',
  paddingLeft: 'var(--space-6)',
  display: 'flex' as const,
  flexDirection: 'column' as const,
  gap: 'var(--space-2)',
  fontSize: 'var(--text-sm)',
  color: 'var(--color-text-secondary)',
  lineHeight: 'var(--leading-relaxed)',
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
                Safety Instructions
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-tertiary)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Last Updated: July 30, 2026
              </p>
            </header>

            <div className="text-prose">
              {/* General Wellness Use */}
              <section>
                <h2 style={sectionHeadingStyle}>General Wellness Use</h2>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  The Ice Sack is intended for general wellness use.
                  It is not intended to diagnose, treat, cure, mitigate, or prevent any disease or medical condition.
                </p>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  Cold exposure affects individuals differently. Read and follow all instructions, warnings, care information, and safety guidance before use.
                </p>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)' }}>
                  Individual responses to cold exposure vary. Temperature perception and tolerance may differ between users.
                </p>
              </section>

              {/* Before Use */}
              <section>
                <h2 style={sectionHeadingStyle}>Before Use</h2>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  Do not use The Ice Sack without consulting a qualified healthcare professional if you:
                </p>
                <ul style={listStyle}>
                  {contraindications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-4)' }}>
                  This list is not exhaustive.
                </p>
              </section>

              {/* Do Not Use */}
              <section>
                <h2 style={sectionHeadingStyle}>Do Not Use</h2>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  Do not use The Ice Sack:
                </p>
                <ul style={listStyle}>
                  {doNotUse.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* During Use */}
              <section>
                <h2 style={sectionHeadingStyle}>During Use</h2>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)', fontWeight: 500 }}>
                  Always:
                </p>
                <ul style={listStyle}>
                  {duringUseAlways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)', fontWeight: 500 }}>
                  Exit immediately if you experience:
                </p>
                <ul style={listStyle}>
                  {exitImmediately.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div
                  style={{
                    margin: 'var(--space-8) 0',
                    padding: 'var(--space-6)',
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '8px',
                  }}
                >
                  <p style={{ fontSize: 'var(--text-base)', fontWeight: 500, color: '#fca5a5', marginBottom: 'var(--space-3)' }}>
                    Do not force yourself to complete a session.
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: '#fca5a5', opacity: 0.85 }}>
                    Do not fall asleep inside The Ice Sack. Stay responsive. Exit whenever needed.
                  </p>
                </div>
              </section>

              {/* After Use */}
              <section>
                <h2 style={sectionHeadingStyle}>After Use</h2>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  Allow normal sensation and temperature to return gradually.
                </p>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  Do not apply intense direct heat to numb or unusually cold skin.
                </p>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)' }}>
                  Stop future use and seek qualified medical advice if a concerning reaction persists or recurs.
                </p>
              </section>

              {/* Product Care */}
              <section>
                <h2 style={sectionHeadingStyle}>Product Care</h2>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  Follow all freezing, storage, cleaning, and handling instructions.
                </p>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  Inspect The Ice Sack before every use.
                </p>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)' }}>
                  Do not use the product if it has been punctured, damaged, modified, or is functioning abnormally.
                </p>
              </section>

              {/* Emergency Information */}
              <section>
                <h2 style={sectionHeadingStyle}>Emergency Information</h2>
                <div
                  style={{
                    margin: 'var(--space-4) 0',
                    padding: 'var(--space-6)',
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '8px',
                  }}
                >
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', fontWeight: 500, color: '#fca5a5' }}>
                    {EMERGENCY_INSTRUCTION}
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 style={sectionHeadingStyle}>Contact</h2>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                  For product safety questions or to report an issue, contact{' '}
                  <a
                    href="mailto:safety@theicesack.com"
                    style={{ color: 'var(--color-accent-primary)', textDecoration: 'underline' }}
                  >
                    safety@theicesack.com
                  </a>
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', lineHeight: 'var(--leading-relaxed)' }}>
                  Do not use email for emergencies.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
