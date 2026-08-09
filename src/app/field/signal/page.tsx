import type { Metadata } from 'next';
import { ChapterFlow } from '@/components/ChapterFlow';
import { PhysiologyResponseGrid } from '@/components/PhysiologyResponseGrid';

export const metadata: Metadata = {
  title: 'Signal | How the Body Detects and Responds to Cold',
  description:
    'How temperature-sensitive sensory pathways detect cold at the skin, transmit information toward the central nervous system, and trigger measurable physiological responses.',
};

export default function SignalPage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>
            Signal
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

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Research findings by delivery method.
          </h2>

          <p>
            Cold exposure triggers measurable physiological changes across multiple systems.
            The findings below are organized by delivery method and study context. Each
            response depends on temperature, duration, delivery method, and individual
            factors. Findings from one method do not automatically apply to another.
          </p>
        </div>

        <PhysiologyResponseGrid />

        <div className="text-prose">
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-16)' }}>
            Responses documented in controlled research using various cold exposure methods.
            Individual outcomes vary by method, duration, temperature, and person.
            These findings should not be interpreted as guaranteed outcomes of any specific product.
          </p>

          <p>
            The next chapter, Notice, examines how people perceive and interpret these
            internal body signals. The signal itself is physiology. Its interpretation is
            where individual experience begins.
          </p>
        </div>

        <ChapterFlow currentChapterId="signal" />
      </div>
    </article>
  );
}

