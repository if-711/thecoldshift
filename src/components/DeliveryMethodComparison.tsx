'use client';

import { useState } from 'react';

/**
 * DeliveryMethodComparison — Prototype interaction.
 * Shows physical differences between cold delivery methods.
 * The Ice Sack profile is based on manufacturer-supplied configuration.
 * Product-specific thermal performance remains a direct testing question.
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
    name: 'Cryotherapy',
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
    id: 'env',
    name: 'Environmental Cold',
    mechanism: 'Ambient convection and radiation',
    medium: 'Cold air, wind, water',
    contact: 'Variable',
    coverage: 'Full body',
    note: 'Uncontrolled. Temperatures, durations, and physiological outcomes vary widely.',
  },
  {
    id: 'ice-sack',
    name: 'The Ice Sack',
    mechanism: 'Solid conduction through encapsulated PCM',
    medium: 'Dry phase-change material system',
    contact: 'Broad dry surface contact through the product shell',
    coverage: 'Full-body containment by design',
    note: 'Manufacturer-supplied configuration. Direct thermal profile, contact consistency, and product-specific outcomes require testing with the production system.',
  },
];

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
    </div>
  );
}
