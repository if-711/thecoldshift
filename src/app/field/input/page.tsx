import type { Metadata } from 'next';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';
import { DeliveryMethodComparison } from '@/components/DeliveryMethodComparison';

export const metadata: Metadata = {
  title: 'Input — What Controlled Cold Is',
  description:
    'Define controlled cold. Differentiate delivery methods. Understand what makes cold exposure a structured sensory input.',
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
            Controlled cold defines the input.
          </h2>

          <p>
            Cold exposure means applying a below-normal temperature to the body. Controlled cold
            defines the delivery method, contact conditions, duration, intended use, and exit.
            In this framework, those variables create a bounded sensory event that can become
            the object of deliberate attention.
          </p>

          <p>
            The delivery format does not establish a medical, performance, recovery, or therapeutic
            outcome. It establishes the conditions for a practice of noticing, observing, and choosing.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
            Not all cold is the same.
          </h2>

          <p>
            Research on cold exposure uses a variety of delivery methods, each with different
            temperature profiles, surface contact areas, cooling rates, and physiological
            effects. Borrowing results from one method and applying them to another without
            qualification is not responsible.
          </p>

          <div style={{ margin: 'var(--space-8) 0' }}>
            <DeliveryMethodComparison />
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
            <StatementTypeBadge
              type="bhvd_conceptual_model"
              confidence="no_direct_evidence"
              transfer="Untested"
            />
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              The Cold Shift framework — that cold can serve as a structured sensory input
              for deliberate practice — is a BHVD conceptual model. It has not been validated
              as a complete framework by independent research.
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
