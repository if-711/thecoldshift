import type { Metadata } from 'next';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';
import { DeliveryMethodComparison } from '@/components/DeliveryMethodComparison';

export const metadata: Metadata = {
  title: 'Controlled Cold | Delivery Conditions and Evidence Boundaries',
  description:
    'Learn how cold exposure differs by medium, temperature, contact, coverage, duration, and exit, and why results cannot be transferred automatically between methods.',
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
            Controlled cold begins with defined conditions.
          </h1>
          <p className="text-prose">
            Cold exposure is not one uniform intervention. Water immersion, environmental cold,
            local icing, cryostimulation, and wearable cold systems differ in heat transfer,
            contact, coverage, duration, and physiological effect.
          </p>
          <p className="text-prose" style={{ marginTop: 'var(--space-4)' }}>
            Controlled cold identifies the delivery method and exposure conditions before
            interpreting a person&apos;s response.
          </p>
        </header>

        {/* Content */}
        <div className="text-prose">
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Not all cold is the same.
          </h2>

          <p>
            Research on cold exposure uses a variety of delivery methods, each with different
            temperature profiles, surface contact areas, cooling rates, and physiological
            effects. Findings should not be transferred between methods without qualification.
          </p>

          <div style={{ margin: 'var(--space-8) 0' }}>
            <DeliveryMethodComparison />
          </div>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Defining an exposure is not establishing an outcome.
          </h2>

          <p>
            Defining an exposure does not establish that it is safe for a particular person
            or that it produces a medical, recovery, performance, or psychological benefit.
          </p>

          <div style={{ margin: 'var(--space-8) 0', padding: 'var(--space-6)', background: 'var(--color-bg-deep)', border: '1px solid var(--color-border)' }}>
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              BHVD proposes that a defined cold exposure can serve as an object of deliberate
              attention. This proposition has not been validated as a complete training framework.
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
            }}
          >
            Next: Signal →
          </a>
        </nav>
      </div>
    </article>
  );
}
