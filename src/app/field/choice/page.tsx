import type { Metadata } from 'next';
import { StatementTypeBadge } from '@/components/EvidenceDrawer';

export const metadata: Metadata = {
  title: 'Choice — The Interval Between Sensation and Action',
  description: 'The space between feeling cold and deciding what to do about it.',
};

export default function ChoicePage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 04</span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>Choice</h1>
          <p className="text-prose">The interval between sensation and action.</p>
        </header>

        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Sensation produces an impulse. Choice is what follows.
          </h2>
          <p>
            When cold contacts the skin, the signal arrives quickly. What follows — the urge
            to flinch, to remove the source, to tense — is automatic. But there exists a
            brief interval between the sensation arriving and the action being taken.
          </p>
          <p>
            This chapter examines that interval. Not as a mystical pause, but as a window
            where deliberate attention can influence the response — where the person can
            observe the impulse rather than simply follow it.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            This is not about endurance.
          </h2>
          <p>
            The practice is not about tolerating cold longer. It is not about proving anything.
            The choice might be to stay. The choice might be to stop. Both are valid. What
            matters is that the decision is observed and deliberate rather than purely reactive.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              Whether practicing deliberate choice under cold-induced sensory stress improves
              decision-making or self-regulation in other contexts is a BHVD conceptual model.
              It has not been demonstrated in controlled research. Transfer from cold practice
              to daily life is untested.
            </p>
          </div>
        </div>

        <nav style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between' }}>
          <a href="/field/notice/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>← Notice</a>
          <a href="/field/practice/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Next: Practice →</a>
        </nav>
      </div>
    </article>
  );
}
