'use client';

import Link from 'next/link';

export interface PhysiologyResponse {
  id: string;
  title: string;
  statement: string;
  method: string;
  temperature: string;
  duration: string;
  population: string;
  limitation: string;
  iceSackApplicability: string;
  claimId: string;
  sourceIds: string[];
}

const responses: PhysiologyResponse[] = [
  {
    id: 'norepinephrine',
    title: 'Catecholamine findings in cold water immersion',
    statement: 'Norepinephrine rose during head-out cold water immersion at 14 °C.',
    method: 'Cold water immersion',
    temperature: '14 °C',
    duration: '1 hour',
    population: '10 healthy young men',
    limitation: 'Small sample. Water immersion is not The Ice Sack. Different delivery method, contact, and duration.',
    iceSackApplicability: 'Mechanistically relevant — not direct product evidence',
    claimId: 'cold-exposure-increases-norepinephrine',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
  },
  {
    id: 'dopamine',
    title: 'Plasma dopamine changes during cold water immersion',
    statement: 'Dopamine increased during cold water immersion at 14 °C.',
    method: 'Cold water immersion',
    temperature: '14 °C',
    duration: '1 hour',
    population: '10 healthy young men',
    limitation: 'Single study. Water immersion is not dry cold containment. Duration and surface contact differ substantially.',
    iceSackApplicability: 'Mechanistically relevant — not direct product evidence',
    claimId: 'cold-exposure-can-increase-dopamine',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
  },
  {
    id: 'stress-tolerance',
    title: 'Habituation of initial cold water responses',
    statement: 'Repeated cold water immersion reduced the initial cold-shock cardiorespiratory response.',
    method: 'Cold water immersion',
    temperature: '15 °C',
    duration: 'Multiple sessions over days',
    population: 'Healthy adults',
    limitation: 'Habituation was specific to cold water immersion. Transfer to other delivery methods is not established.',
    iceSackApplicability: 'Indirect analogy — different delivery method',
    claimId: 'repeated-cold-water-immersion-can-habituate-initial-response',
    sourceIds: ['tipton-cold-habituation-1998'],
  },
  {
    id: 'hrv',
    title: 'Cardiac autonomic measures across cold methods',
    statement: 'Cold exposure shifted cardiac autonomic measures including heart rate variability.',
    method: 'Mixed (review of multiple methods)',
    temperature: 'Variable across studies',
    duration: 'Variable across studies',
    population: 'Varied',
    limitation: 'Review article. Results vary by delivery method, temperature, duration, and population. No single protocol generalizes.',
    iceSackApplicability: 'Mechanistically relevant — not direct product evidence',
    claimId: 'cardiovascular-response-varies-by-cooling-method',
    sourceIds: ['jdidi-cold-autonomic-review-2024'],
  },
  {
    id: 'inflammation',
    title: 'Inflammatory marker findings in whole body cryostimulation',
    statement: 'Whole body cryostimulation reduced circulating inflammatory markers.',
    method: 'Whole body cryostimulation',
    temperature: '−110 °C to −160 °C chamber',
    duration: '2–3 minutes',
    population: 'Healthy adults',
    limitation: 'Cryostimulation chambers use gas convection, not solid conduction. Delivery method, temperature, and exposure format differ from dry cold containment.',
    iceSackApplicability: 'Indirect analogy — different delivery method',
    claimId: 'cold-exposure-can-reduce-inflammation-markers',
    sourceIds: ['lubkowska-cryostimulation-cytokines-2010'],
  },
  {
    id: 'metabolism',
    title: 'Thermogenesis during cold water immersion',
    statement: 'Metabolic heat production and energy expenditure increased during cold water immersion.',
    method: 'Cold water immersion',
    temperature: '14 °C',
    duration: '1 hour',
    population: '10 healthy young men',
    limitation: 'Water immersion at 14 °C is a substantially different thermal load than wearable dry cold. Metabolic response depends on temperature, duration, coverage, and individual factors.',
    iceSackApplicability: 'Mechanistically relevant — not direct product evidence',
    claimId: 'cold-exposure-increases-metabolic-heat-production',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
  },
];

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: 'var(--space-4)',
  margin: 'var(--space-8) 0',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '0.75rem',
  padding: 'var(--space-6)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-3)',
};

const titleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-xs)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-spectral-bright)',
  lineHeight: 'var(--leading-snug)',
};

const statementStyle: React.CSSProperties = {
  fontSize: 'var(--text-base)',
  lineHeight: 'var(--leading-relaxed)',
  color: 'var(--color-text)',
  margin: 0,
};

const metaStyle: React.CSSProperties = {
  fontSize: 'var(--text-xs)',
  color: 'var(--color-text-tertiary)',
  lineHeight: 'var(--leading-relaxed)',
  margin: 0,
};

const limitStyle: React.CSSProperties = {
  fontSize: 'var(--text-xs)',
  color: 'var(--color-text-tertiary)',
  lineHeight: 'var(--leading-relaxed)',
  fontStyle: 'italic',
  margin: 0,
  paddingTop: 'var(--space-2)',
  borderTop: '1px solid var(--color-border)',
};

const applicabilityStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.625rem',
  letterSpacing: '0.04em',
  color: 'var(--color-text-tertiary)',
  background: 'var(--color-bg-deep)',
  padding: 'var(--space-1) var(--space-2)',
  borderRadius: '0.25rem',
  display: 'inline-block',
  width: 'fit-content',
};

const citationStyle: React.CSSProperties = {
  color: 'var(--color-spectral-bright)',
  textDecoration: 'none',
  marginLeft: '0.125rem',
};

const linkStyle: React.CSSProperties = {
  fontSize: 'var(--text-sm)',
  color: 'var(--color-text-tertiary)',
  textDecoration: 'none',
};

export function PhysiologyResponseGrid() {
  return (
    <div style={gridStyle}>
      {responses.map((r) => (
        <div key={r.id} style={cardStyle}>
          <div style={titleStyle}>{r.title}</div>
          <p style={statementStyle}>
            {r.statement}
            {r.sourceIds.map((sourceId, i) => (
              <Link
                key={sourceId}
                href={`/evidence/sources/${sourceId}`}
                style={citationStyle}
                title="View source"
              >
                <sup>{i + 1}</sup>
              </Link>
            ))}
          </p>
          <p style={metaStyle}>
            <strong>Method:</strong> {r.method} · <strong>Temp:</strong> {r.temperature} · <strong>Duration:</strong> {r.duration}
          </p>
          <p style={metaStyle}>
            <strong>Population:</strong> {r.population}
          </p>
          <p style={limitStyle}>{r.limitation}</p>
          <span style={applicabilityStyle}>{r.iceSackApplicability}</span>
          <Link
            href={`/evidence/claims/${r.claimId}`}
            style={linkStyle}
          >
            View claim record →
          </Link>
        </div>
      ))}
    </div>
  );
}
