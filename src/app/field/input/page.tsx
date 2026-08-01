import type { Metadata } from 'next';
import { EvidenceBadge } from '@/components/EvidenceDrawer';

export const metadata: Metadata = {
  title: 'Input — What Controlled Cold Is',
  description:
    'Define controlled cold. Differentiate delivery methods. Understand what makes cold exposure a structured sensory input rather than a wellness commodity.',
};

export default function InputPage() {
  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
        {/* Chapter header */}
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-text-tertiary)',
            }}
          >
            Chapter 01
          </span>
          <h1 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            Input
          </h1>
          <p className="text-prose">
            What controlled cold is — and what it is not.
          </p>
        </header>

        {/* Content */}
        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Controlled cold is a stimulus, not a therapy.
          </h2>

          <p>
            Cold exposure means applying a below-normal temperature to the body in a deliberate,
            bounded way. The purpose in this context is to create a clear sensory event — a defined
            physical input that is noticeable, unambiguous, and time-limited.
          </p>

          <p>
            This is not a medical treatment. It is not a performance protocol. It is a sensory
            input that can be used as the basis for a practice of noticing, observing, and choosing.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <EvidenceBadge level="established" />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              Cold is a physical stimulus that activates thermoreceptors in the skin.
              This is established physiology documented in standard references on
              somatosensory neuroscience.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Not all cold is the same.
          </h2>

          <p>
            Research on cold exposure uses a variety of delivery methods, each with different
            temperature profiles, surface contact areas, cooling rates, and physiological
            effects. Borrowing results from one method and applying them to another without
            qualification is not responsible.
          </p>

          {/* Delivery method table */}
          <div style={{ margin: 'var(--space-8) 0', overflowX: 'auto' }}>
            <table className="claim-ledger" style={{ minWidth: '36rem' }}>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Mechanism</th>
                  <th>Typical Temp</th>
                  <th>Transfer to Ice Sack?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 500 }}>Cold water immersion</td>
                  <td>Convective heat loss, full body</td>
                  <td>10–15 °C</td>
                  <td>
                    <EvidenceBadge level="emerging" />
                    <span style={{ fontSize: 'var(--text-xs)', display: 'block', marginTop: '4px', color: 'var(--color-text-tertiary)' }}>
                      Different mechanism. Results do not directly transfer.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Whole-body cryotherapy</td>
                  <td>Cold gas exposure, minimal contact</td>
                  <td>−110 to −140 °C</td>
                  <td>
                    <EvidenceBadge level="emerging" />
                    <span style={{ fontSize: 'var(--text-xs)', display: 'block', marginTop: '4px', color: 'var(--color-text-tertiary)' }}>
                      Very different modality. No direct equivalence.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Local icing / ice packs</td>
                  <td>Conductive, localized</td>
                  <td>0 °C surface</td>
                  <td>
                    <EvidenceBadge level="supported" />
                    <span style={{ fontSize: 'var(--text-xs)', display: 'block', marginTop: '4px', color: 'var(--color-text-tertiary)' }}>
                      Closest mechanism but different coverage area.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Phase-change material (PCM)</td>
                  <td>Conductive, temperature-stable</td>
                  <td>Varies by PCM formulation</td>
                  <td>
                    <EvidenceBadge level="supported" />
                    <span style={{ fontSize: 'var(--text-xs)', display: 'block', marginTop: '4px', color: 'var(--color-text-tertiary)' }}>
                      The Ice Sack uses PCM. But specific PCM research is limited.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Environmental cold</td>
                  <td>Ambient temperature exposure</td>
                  <td>Varies</td>
                  <td>
                    <EvidenceBadge level="emerging" />
                    <span style={{ fontSize: 'var(--text-xs)', display: 'block', marginTop: '4px', color: 'var(--color-text-tertiary)' }}>
                      Uncontrolled variable. Not comparable.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Why this matters.
          </h2>

          <p>
            The Cold Shift uses cold as a starting point — as the raw sensory input for a
            practice that is about awareness, not cold itself. But that starting point must
            be honest about what the cold does and does not do, and about what evidence
            exists for the specific delivery method used.
          </p>

          <p>
            This chapter establishes the rule: every claim about cold on this platform
            identifies which delivery method the evidence comes from, and whether that
            evidence applies to dry cold containment.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <EvidenceBadge level="hypothesis" />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              The Cold Shift framework — that cold can serve as a structured sensory input
              for deliberate state practice — is a BHVD conceptual model. It has not been
              validated as a complete framework by independent research.
            </p>
          </div>
        </div>

        {/* Chapter navigation */}
        <nav
          style={{
            marginTop: 'var(--space-16)',
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <a
            href="/field/signal/"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
            }}
          >
            Next: Signal →
          </a>
        </nav>
      </div>
    </article>
  );
}
