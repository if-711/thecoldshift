import type { Metadata } from 'next';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';

export const metadata: Metadata = {
  title: 'Notice — Perceiving Internal Signals',
  description: 'Interoception — how the brain perceives, interprets, and sometimes misinterprets signals from inside the body.',
};

export default function NoticePage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 03</span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>Notice</h1>
          <p className="text-prose">Perceiving and interpreting internal bodily signals.</p>
        </header>

        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Interoception is the perception of internal body signals.
          </h2>
          <p>
            Interoception refers to the brain&apos;s ability to sense, interpret, and integrate signals
            originating from inside the body — heartbeat, breathing, temperature, hunger, pain,
            and other visceral states. It is sometimes described as the body&apos;s &quot;inner sense.&quot;
          </p>
          <p>
            Research distinguishes between interoceptive accuracy (how precisely someone can
            detect a signal), interoceptive sensibility (how much attention someone pays to
            body signals), and interoceptive awareness (the metacognitive understanding of
            one&apos;s own accuracy).
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Cold contact produces a salient cutaneous thermal signal.
          </h2>
          <p>
            Many interoceptive signals are subtle — a slight change in heart rate, a marginal
            shift in breathing. Cold contact is different. When a below-normal temperature
            contacts the skin, the resulting sensation is strong, localized, and difficult to ignore.
          </p>
          <p>
            Deliberate attention to this thermal signal forms part of the BHVD conceptual model
            for structured sensory practice. Whether deliberate attention to cold-induced sensation
            improves general interoceptive accuracy has not been established.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              The idea that cold exposure can function as a structured interoceptive training
              stimulus is a BHVD conceptual model. Cold clearly produces strong cutaneous thermal
              signals. Whether deliberate attention to these signals improves general interoceptive
              accuracy has not been directly studied.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Noticing is not controlling.
          </h2>
          <p>
            The practice described in The Cold Shift is not about controlling body signals
            or suppressing discomfort. It is about noticing them. Noticing the cold. Noticing
            the impulse to remove it. Noticing what the body does automatically versus what
            you choose deliberately.
          </p>
          <p>
            This distinction matters because many cold exposure programs promise &quot;control&quot;
            over the body or nervous system. The Cold Shift does not make that claim.
          </p>
        </div>

        <nav style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between' }}>
          <a href="/field/signal/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>← Signal</a>
          <a href="/field/choice/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Next: Choice →</a>
        </nav>
      </div>
    </article>
  );
}
