import type { Metadata } from 'next';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';

export const metadata: Metadata = {
  title: 'Choice | Observing the Response to Cold',
  description: 'Cold produces rapid sensations and action tendencies. A person may still observe the response and decide whether to continue or stop.',
};

export default function ChoicePage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 04</span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            Notice the impulse. Assess the situation. Choose what follows.
          </h1>
          <p className="text-prose">
            Cold can produce rapid sensations and action tendencies, including tension,
            withdrawal, or an urge to end contact. Some responses are automatic. A person
            may still be able to observe the response and decide whether to continue or stop.
          </p>
        </header>

        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            The choice interval.
          </h2>
          <p>
            BHVD calls the observable interval between sensation and action the choice
            interval. This is the brand&apos;s organizing concept, not an established
            universal neurological mechanism.
          </p>
          <p>
            The concept proposes that during a defined cold session, a person may be able
            to notice the impulse before acting on it. This does not imply control over
            autonomic responses.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Choice is not endurance.
          </h2>
          <p>
            Stopping is not failure. Product warnings and stop conditions take precedence
            over the practice.
          </p>
          <p>
            The choice might be to continue. The choice might be to stop. Both are valid.
            What matters is that the decision is observed and deliberate rather than purely
            reactive.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              No direct evidence currently shows that practicing choice during cold
              improves decision-making, self-regulation, or behavior in other settings.
            </p>
          </div>
        </div>

        <nav style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between' }}>
          <a href="/field/notice/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>← Notice</a>
          <a href="/field/practice/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Next: The Practice →</a>
        </nav>
      </div>
    </article>
  );
}
