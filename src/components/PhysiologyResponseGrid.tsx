'use client';

import Link from 'next/link';

export interface PhysiologyResponse {
  id: string;
  title: string;
  statement: string;
  claimId: string;
  sourceIds: string[];
}

const responses: PhysiologyResponse[] = [
  {
    id: 'norepinephrine',
    title: 'Alertness',
    statement: 'Norepinephrine rises during cold exposure.',
    claimId: 'cold-exposure-increases-norepinephrine',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
  },
  {
    id: 'dopamine',
    title: 'Drive',
    statement: 'Dopamine can rise with cold-water exposure.',
    claimId: 'cold-exposure-can-increase-dopamine',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
  },
  {
    id: 'stress-tolerance',
    title: 'Stress tolerance',
    statement: 'Repeated cold can attenuate the initial cold-shock response.',
    claimId: 'repeated-cold-water-immersion-can-habituate-initial-response',
    sourceIds: ['tipton-cold-habituation-1998'],
  },
  {
    id: 'hrv',
    title: 'Autonomic balance',
    statement: 'Cold exposure can shift heart rate variability.',
    claimId: 'cardiovascular-response-varies-by-cooling-method',
    sourceIds: ['jdidi-cold-autonomic-review-2024'],
  },
  {
    id: 'inflammation',
    title: 'Inflammation',
    statement: 'Cold can lower circulating inflammatory markers.',
    claimId: 'cold-exposure-can-reduce-inflammation-markers',
    sourceIds: ['lubkowska-cryostimulation-cytokines-2010'],
  },
  {
    id: 'metabolism',
    title: 'Heat production',
    statement: 'Cold raises metabolic heat production and energy expenditure.',
    claimId: 'cold-exposure-increases-metabolic-heat-production',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
  },
];

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
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
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--color-spectral-bright)',
};

const statementStyle: React.CSSProperties = {
  fontSize: 'var(--text-base)',
  lineHeight: 'var(--leading-relaxed)',
  color: 'var(--color-text)',
  margin: 0,
  flex: 1,
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
          <Link
            href={`/evidence/claims/${r.claimId}`}
            style={linkStyle}
          >
            View claim →
          </Link>
        </div>
      ))}
    </div>
  );
}
