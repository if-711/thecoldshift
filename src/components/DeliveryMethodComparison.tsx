'use client';

import { useState } from 'react';

/**
 * DeliveryMethodComparison — Expanded prototype interaction.
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
  preparation: string;
  temperatureProfile: string;
  controllability: string;
  note: string;
}

const METHODS: DeliveryMethod[] = [
  {
    id: 'cwi',
    name: 'Water Immersion',
    mechanism: 'Liquid conduction',
    medium: 'Cold water (tub, barrel, natural body)',
    contact: 'Direct skin contact with liquid',
    coverage: 'Full body or partial',
    preparation: 'Fill container, chill water, measure temperature',
    temperatureProfile: 'Typically 10–15 °C in research protocols',
    controllability: 'Temperature drifts as ice melts. Wetness changes skin conductance. Requires infrastructure, drainage, and temperature monitoring.',
    note: 'Most researched method. The majority of published evidence on cold exposure physiology comes from water immersion. However, water introduces variables — conductance changes with skin wetness, temperature drifts during the session, and setup requires plumbing or manual ice management.',
  },
  {
    id: 'wbc',
    name: 'Cryotherapy Chamber',
    mechanism: 'Gas convection',
    medium: 'Cooled air or nitrogen vapor',
    contact: 'Indirect — gas, not surface contact',
    coverage: 'Whole body',
    preparation: 'Facility operated; no user preparation',
    temperatureProfile: '−110 °C to −160 °C for 2–3 minutes',
    controllability: 'Duration capped at 2–3 minutes by safety limits. Facility-dependent — no home use. Gas convection transfers heat differently than conduction.',
    note: 'Very low temperature, very short duration. The extreme air temperature sounds dramatic, but gas transfers heat far less efficiently than liquid or solid contact. Sessions are too brief for sustained attentional practice, and the method requires a facility visit.',
  },
  {
    id: 'ice-sack',
    name: 'The Ice Sack',
    mechanism: 'Solid conduction through encapsulated PCM',
    medium: 'Dry phase-change material system',
    contact: 'Broad dry surface contact through the product shell',
    coverage: 'Full-body containment by design',
    preparation: 'Freeze fully for five hours',
    temperatureProfile: 'Product specific — requires direct testing data',
    controllability: 'No water, no wetness variable. Stable solid-contact temperature. User controls session duration and exit. Portable — no facility or plumbing.',
    note: 'A dry cold system by BHVD. No water to fill, drain, or monitor. The frozen phase-change shell delivers consistent surface contact without the conductance variables of wetness or the time ceiling of cryotherapy. The user sets duration and exit conditions — the definition of controlled cold.',
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
          <div>
            <dt>Preparation</dt>
            <dd>{activeMethod.preparation}</dd>
          </div>
          <div>
            <dt>Temperature profile</dt>
            <dd>{activeMethod.temperatureProfile}</dd>
          </div>
          <div>
            <dt>Controllability</dt>
            <dd>{activeMethod.controllability}</dd>
          </div>
        </dl>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-4)', fontStyle: 'italic' }}>
          {activeMethod.note}
        </p>
      </div>
    </div>
  );
}
