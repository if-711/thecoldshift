'use client';

import { useState } from 'react';

/**
 * DeliveryMethodComparison — Prototype interaction.
 * Shows physical differences between cold delivery methods.
 * Does NOT include specific Ice Sack measurements (pending verification).
 * Typical temperatures for other methods also require source records.
 */

interface DeliveryMethod {
  id: string;
  name: string;
  mechanism: string;
  medium: string;
  contact: string;
  coverage: string;
  note: string;
}

const METHODS: DeliveryMethod[] = [
  {
    id: 'cwi',
    name: 'Water Immersion',
    mechanism: 'Liquid conduction',
    medium: 'Cold water',
    contact: 'Direct skin contact with liquid',
    coverage: 'Full body or partial',
    note: 'Temperatures, durations, and physiological outcomes require source records before final publication.',
  },
  {
    id: 'wbc',
    name: 'Cold Gas Exposure',
    mechanism: 'Gas convection',
    medium: 'Cooled air or nitrogen vapor',
    contact: 'Indirect through gas',
    coverage: 'Whole body',
    note: 'Temperatures, durations, and physiological outcomes require source records before final publication.',
  },
  {
    id: 'ice',
    name: 'Local Ice Application',
    mechanism: 'Solid conduction',
    medium: 'Ice or ice pack',
    contact: 'Direct or through barrier',
    coverage: 'Localized',
    note: 'Temperatures, durations, and physiological outcomes require source records before final publication.',
  },
  {
    id: 'pcm',
    name: 'Generic PCM Contact',
    mechanism: 'Phase change material conduction',
    medium: 'Encapsulated PCM',
    contact: 'Dry surface contact',
    coverage: 'Varies by design',
    note: 'Temperatures, durations, and physiological outcomes require source records before final publication.',
  },
  {
    id: 'env',
    name: 'Environmental Cold',
    mechanism: 'Ambient convection and radiation',
    medium: 'Cold air, wind, water',
    contact: 'Variable',
    coverage: 'Full body',
    note: 'Uncontrolled. Temperatures, durations, and physiological outcomes vary widely.',
  },
];

const ICE_SACK_PENDING = {
  name: 'The Ice Sack',
  status: 'Product profile pending verified measurements.',
};

export function DeliveryMethodComparison() {
  const [active, setActive] = useState('cwi');
  const activeMethod = METHODS.find((m) => m.id === active)!;

  return (
    <div className="delivery-comparison">
      {/* Method selector */}
      <div className="delivery-tabs" role="tablist" aria-label="Cold delivery methods">
        {METHODS.map((method) => (
          <button
            key={method.id}
            role="tab"
            aria-selected={active === method.id}
            aria-controls={`delivery-panel-${method.id}`}
            className="delivery-tab"
            data-active={active === method.id}
            onClick={() => setActive(method.id)}
            type="button"
          >
            {method.name}
          </button>
        ))}
      </div>

      {/* Active method panel */}
      <div
        id={`delivery-panel-${active}`}
        role="tabpanel"
        className="delivery-panel"
      >
        <h4 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-xl)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>
          {activeMethod.name}
        </h4>
        <dl className="delivery-meta">
          <div>
            <dt>Mechanism</dt>
            <dd>{activeMethod.mechanism}</dd>
          </div>
          <div>
            <dt>Medium</dt>
            <dd>{activeMethod.medium}</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>{activeMethod.contact}</dd>
          </div>
          <div>
            <dt>Coverage</dt>
            <dd>{activeMethod.coverage}</dd>
          </div>
        </dl>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-4)', fontStyle: 'italic' }}>
          {activeMethod.note}
        </p>
      </div>

      {/* Ice Sack — pending */}
      <div className="delivery-icesack-pending">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-1)' }}>
          {ICE_SACK_PENDING.name}
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)' }}>
          {ICE_SACK_PENDING.status}
        </p>
      </div>
    </div>
  );
}
