import type { Metadata } from 'next';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';

export const metadata: Metadata = {
  title: 'Practice — The Neuropause Protocol',
  description: 'Neuropause is a nine-minute practice with three phases: Entry, Load, and Peak.',
};

export default function PracticePage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 05</span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>Practice</h1>
          <p className="text-prose">A nine-minute structured cold session.</p>
        </header>

        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            The Neuropause Protocol.
          </h2>
          <p>
            Neuropause is a nine-minute practice developed by BHVD. It structures a cold
            session into three phases — Entry, Load, and Peak — with the goal of practicing
            deliberate attention during a bounded sensory event.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              The Neuropause Protocol is a BHVD practice structure.
              Its format, timing, and phase progression have not been independently validated.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Three phases. Nine minutes.
          </h2>

          <div style={{ margin: 'var(--space-8) 0' }}>
            <table className="claim-ledger">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Time</th>
                  <th>Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 500 }}>Entry</td>
                  <td>0–3 min</td>
                  <td>
                    Cold contact begins. Notice the thermal signal, your breathing,
                    and the first impulse to react. The task is to observe what is
                    happening while remaining within the product safety limits.
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Load</td>
                  <td>3–6 min</td>
                  <td>
                    The sensation continues. Settle into an unforced breathing rhythm.
                    If comfortable, inhale for four seconds and exhale for six to eight
                    seconds. No breath holding. No forcing.
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Peak</td>
                  <td>6–9 min</td>
                  <td>
                    Attention becomes the practice. Notice what has changed and what
                    has not. Choose deliberately whether to continue. Complete the
                    session at nine minutes or stop sooner if a safety threshold is
                    reached.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-lg)', fontWeight: 500, marginTop: 'var(--space-8)' }}>
            Entry. Load. Peak. One contained session.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-4)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            <p>
              The phase timings organize the Neuropause practice. They do not represent
              measured physiological transitions.
            </p>
            <p style={{ marginTop: 'var(--space-2)' }}>
              Peak refers to the final attentional phase of the practice. It is not a
              measured physiological peak.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            What practice does and does not promise.
          </h2>
          <p>
            Repeated practice with a structured sensory input may improve a person&apos;s
            ability to notice body signals and observe their own reactions during that
            specific type of session. Whether these observations transfer to other areas
            of life is not established.
          </p>
          <p>
            The Cold Shift does not claim that nine minutes of cold practice will change
            your life. It provides a structure for practicing a specific kind of attention
            under specific conditions.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              The claim that structured cold practice improves attention or
              self-regulation in contexts beyond the cold session itself remains a BHVD
              conceptual model. Transfer from cold practice to daily life is untested.
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
