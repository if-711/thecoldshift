import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signal | How the Body Detects Cold',
  description:
    'How temperature-sensitive sensory pathways detect cold at the skin and transmit information toward the central nervous system.',
};

export default function SignalPage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>
            Chapter 02
          </span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            Cold begins as sensory information.
          </h1>
          <p className="text-prose">
            Temperature-sensitive sensory pathways detect changes at the skin and transmit
            information toward the central nervous system. TRPM8 contributes to detecting cool
            temperatures and menthol.
          </p>
        </header>

        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Temperature is detected at the skin.
          </h2>

          <p>
            The skin contains specialized sensory neurons called thermoreceptors. When skin
            temperature changes, these receptors generate electrical signals that travel via
            afferent nerve fibers to the spinal cord and brain. This is how the nervous system
            becomes aware of temperature changes in the external environment.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Skin temperature and core temperature are different measurements.
          </h2>

          <p>
            Skin temperature and core temperature are different measurements. A cold surface
            can change local skin temperature without establishing a meaningful change in core
            temperature. The magnitude and timing depend on the exposure conditions.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Detection is not perception.
          </h2>

          <p>
            Detection is not the same as perception. Discomfort, urgency, tolerability, and
            meaning arise from additional physiological and cognitive processing.
          </p>

          <p>
            The next chapter, Notice, examines how people perceive and interpret these
            internal body signals. The signal itself is physiology. Its interpretation is
            where individual experience begins.
          </p>
        </div>

        <nav style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between' }}>
          <a href="/field/input/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
            ← Controlled Cold
          </a>
          <a href="/field/notice/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
            Next: Notice →
          </a>
        </nav>
      </div>
    </article>
  );
}
