import type { Metadata } from 'next';
import { EvidenceBadge } from '@/components/EvidenceDrawer';

export const metadata: Metadata = {
  title: 'Practice — The Nine-Minute Protocol',
  description: 'Repeated structured exposure as deliberate practice. The Neuropause Protocol — a nine-minute guided cold session.',
};

export default function PracticePage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>Chapter 05</span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>Practice</h1>
          <p className="text-prose">Repeated structured exposure as deliberate practice.</p>
        </header>

        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            The Neuropause Protocol.
          </h2>
          <p>
            Neuropause is the original nine-minute guided protocol developed by BHVD.
            It structures a cold session into phases — approach, contact, observe, choose,
            release — with the goal of practicing deliberate attention and response during
            a clear, bounded sensory event.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <EvidenceBadge level="hypothesis" />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              The nine-minute Neuropause Protocol is a BHVD-designed practice structure.
              Its format, timing, and phase progression have not been independently validated.
              The protocol is based on the framework described in earlier chapters, which itself
              is a brand hypothesis.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Structure of a session.
          </h2>

          <div style={{ margin: 'var(--space-8) 0' }}>
            <table className="claim-ledger">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Duration</th>
                  <th>Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 500 }}>Approach</td>
                  <td>~1 min</td>
                  <td>Prepare the environment. Set intention to observe.</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Contact</td>
                  <td>~2 min</td>
                  <td>Place the cold. Notice the initial signal.</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Observe</td>
                  <td>~3 min</td>
                  <td>Attend to sensation. Notice the urge to react.</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Choose</td>
                  <td>~2 min</td>
                  <td>Decide to stay or stop. Make it deliberate.</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Release</td>
                  <td>~1 min</td>
                  <td>Remove the cold. Notice the transition.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            What practice does and does not promise.
          </h2>
          <p>
            Repeated practice with a structured sensory input may improve a person&apos;s
            ability to notice body signals and observe their own reactions during that
            specific type of session. Whether these observations transfer to other areas
            of life — stress management, emotional regulation, decision-making — is not
            established.
          </p>
          <p>
            The Cold Shift does not claim that nine minutes of cold practice will change
            your life. It provides a structure for practicing a specific kind of attention
            under specific conditions. What a person does with that practice is their own.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <EvidenceBadge level="hypothesis" />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              The claim that structured cold practice improves attention, self-regulation,
              or metacognition in contexts beyond the cold session itself remains a BHVD
              brand hypothesis. The limits of behavioral transfer from cold practice to
              daily life are unknown and are an area where future research would be needed
              before making stronger claims.
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
