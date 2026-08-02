import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signal — How the Body Detects Temperature',
  description:
    'Thermoreception, TRPM8, and the difference between skin temperature, perceived cold, and core temperature.',
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
            Signal
          </h1>
          <p className="text-prose">
            How the body detects and transmits temperature.
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

          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
            Cutaneous thermoreception is established physiology. Cold-sensitive neurons
            primarily express the TRPM8 ion channel, which activates at skin temperatures
            below approximately 28 °C and increases firing rate as temperature decreases.
            Source records pending — evidence ledger in progress.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Skin temperature is not core temperature.
          </h2>

          <p>
            The temperature your skin registers during cold exposure is not the same as your
            body&apos;s core temperature. Localized cold application changes skin temperature
            rapidly, but core temperature changes slowly and requires sustained, extensive
            cooling.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            The signal is not the interpretation.
          </h2>

          <p>
            When TRPM8 channels activate, they send a signal. That signal arrives in the
            brain. But what happens next — the feeling of discomfort, the urge to remove the
            cold, the interpretation of whether the sensation is tolerable — involves
            processing well beyond thermoreception.
          </p>

          <p>
            The next chapter, Notice, examines how people perceive and interpret these
            internal body signals. The signal itself is physiology. Its interpretation is
            where individual experience begins.
          </p>
        </div>

        <nav style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between' }}>
          <a href="/field/input/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
            ← Input
          </a>
          <a href="/field/notice/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
            Next: Notice →
          </a>
        </nav>
      </div>
    </article>
  );
}
