import type { Metadata } from 'next';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';

export const metadata: Metadata = {
  title: 'Neuropause | A BHVD Practice Format',
  description:
    'Neuropause is BHVD\u2019s unvalidated attentional format for use with controlled cold. Learn what the structure proposes and what has not been demonstrated.',
};

export default function PracticePage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 05</span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            A structure for attention, not a proven outcome.
          </h1>
          <p className="text-prose">
            Neuropause is a practice format developed by BHVD for use during a controlled
            cold session. It organizes attention into three named phases.
          </p>
        </header>

        <div className="text-prose">
          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              The format, timing, phase names, safety parameters, and proposed transfer
              beyond the session have not been independently validated.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Three narrative attention phases.
          </h2>

          <p>
            Neuropause organizes a controlled cold session into three named phases.
            These are narrative attention phases, not physiological phases.
          </p>

          <div style={{ margin: 'var(--space-8) 0' }}>
            <table className="claim-ledger">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 500 }}>Entry</td>
                  <td>
                    Notice the initial thermal signal and the first impulse to react.
                    Observe what is happening.
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Load</td>
                  <td>
                    The sensation continues. Settle into an unforced breathing rhythm.
                    Continue to observe.
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Peak</td>
                  <td>
                    Attention becomes the practice. Notice what has changed and what
                    has not. Choose deliberately whether to continue or stop.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-4)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            <p>
              The phase names organize the Neuropause practice. They do not represent
              measured physiological transitions. Peak refers to the final attentional
              phase, not a measured physiological peak.
            </p>
            <p style={{ marginTop: 'var(--space-2)' }}>
              Final product instructions for use govern session duration, stop conditions,
              and safety parameters.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            What the practice does and does not claim.
          </h2>
          <p>
            The intended activity is to notice bodily signals and reactions during the session.
            Whether practice changes this ability has not been established.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              Neuropause does not claim to regulate the nervous system, treat a condition,
              improve mental health, accelerate recovery, or improve performance. It has not
              been shown to improve attention or self-regulation outside the session.
            </p>
          </div>
        </div>

        <nav style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between' }}>
          <a href="/field/choice/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>← Choice</a>
          <a href="/evidence/" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Next: Evidence →</a>
        </nav>
      </div>
    </article>
  );
}
