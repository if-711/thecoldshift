import type { Metadata } from 'next';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';
import { ChapterFlow } from '@/components/ChapterFlow';

export const metadata: Metadata = {
  title: 'Notice | Attention to Internal and Bodily Signals',
  description: 'Interoception concerns how bodily signals are sensed, attended to, interpreted, and evaluated.',
};

export default function NoticePage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 03</span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            A signal can be detected without being interpreted accurately.
          </h1>
          <p className="text-prose">
            Interoception concerns how bodily signals are sensed, attended to, interpreted,
            and evaluated. Research distinguishes task performance, self-reported beliefs,
            attention, and awareness of one&apos;s own accuracy.
          </p>
        </header>

        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Cold contact produces a salient cutaneous signal.
          </h2>
          <p>
            Many interoceptive signals are subtle — a slight change in heart rate, a marginal
            shift in breathing. Cold contact is different. When a below-normal temperature
            contacts the skin, the resulting sensation is strong, localized, and difficult to ignore.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              Cold contact can create a salient cutaneous signal. BHVD proposes using that
              signal as an object of attention during the session. No direct evidence currently
              shows that this practice improves general interoceptive ability.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Noticing is not suppressing.
          </h2>
          <p>
            Noticing does not mean suppressing discomfort or controlling the nervous system.
            It means observing sensation and response while remaining free to stop.
          </p>
        </div>

        <ChapterFlow currentChapterId="notice" />
      </div>
    </article>
  );
}
