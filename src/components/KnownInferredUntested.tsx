'use client';

import { useState } from 'react';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';

/**
 * KnownInferredUntested — Interactive three-state framework.
 * Demonstrates the boundaries of what is known, inferred, and untested.
 * This is a prototype interaction for creative direction review.
 */

interface KIUItem {
  category: 'known' | 'inferred' | 'untested';
  label: string;
  statement: string;
  note: string;
}

const ITEMS: KIUItem[] = [
  {
    category: 'known',
    label: 'Known',
    statement: 'Cutaneous cold is detected through peripheral sensory pathways.',
    note: 'Established physiology. The source ledger includes the foundational TRPM8 record and its limitations.',
  },
  {
    category: 'inferred',
    label: 'Inferred',
    statement: 'A salient thermal signal may provide a practical object of attention during the session.',
    note: 'Research interpretation with limitations. The extent of attentional benefit is not established.',
  },
  {
    category: 'untested',
    label: 'Untested',
    statement: 'Does repeated guided attention during cold improve interoceptive performance or transfer beyond the session?',
    note: 'A research question. Not a product conclusion. Transfer from cold practice to daily life is unknown.',
  },
];

const CATEGORY_COLORS = {
  known: 'var(--color-established)',
  inferred: 'var(--color-supported)',
  untested: 'var(--color-hypothesis)',
} as const;

export function KnownInferredUntested() {
  const [active, setActive] = useState<'known' | 'inferred' | 'untested'>('known');
  const activeItem = ITEMS.find((item) => item.category === active)!;

  return (
    <div className="kiu-container">
      {/* Category tabs */}
      <div className="kiu-tabs" role="tablist" aria-label="Evidence framework">
        {ITEMS.map((item) => (
          <button
            key={item.category}
            role="tab"
            aria-selected={active === item.category}
            aria-controls={`kiu-panel-${item.category}`}
            className="kiu-tab"
            data-active={active === item.category}
            onClick={() => setActive(item.category)}
            type="button"
            style={{
              borderColor: active === item.category ? CATEGORY_COLORS[item.category] : 'transparent',
              color: active === item.category ? CATEGORY_COLORS[item.category] : 'var(--color-text-tertiary)',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div
        id={`kiu-panel-${active}`}
        role="tabpanel"
        className="kiu-panel"
        style={{ borderLeftColor: CATEGORY_COLORS[active] }}
      >
        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-lg)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>
          {activeItem.statement}
        </p>
        <div style={{ marginBottom: 'var(--space-3)' }}>
          {active === 'known' && (
            <StatementTypeBadge type="established_physiology" />
          )}
          {active === 'inferred' && (
            <StatementTypeBadge type="research_interpretation" confidence="preliminary" />
          )}
          {active === 'untested' && (
            <StatementTypeBadge type="bhvd_conceptual_model" confidence="no_direct_evidence" transfer="Untested" />
          )}
        </div>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
          {activeItem.note}
        </p>
      </div>
    </div>
  );
}
