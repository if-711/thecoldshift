'use client';

import { useState } from 'react';

/**
 * NeuropauseTimeline — Interactive 9-minute Entry/Load/Peak timeline.
 *
 * Classification: Explanation interaction.
 * Disclosure: Phase timings organize the Neuropause practice.
 * They do not represent measured physiological transitions.
 */

interface Phase {
  id: string;
  name: string;
  range: string;
  description: string;
}

const PHASES: Phase[] = [
  {
    id: 'entry',
    name: 'Entry',
    range: '0 – 3 min',
    description:
      'Cold contact begins. Notice the thermal signal, breathing, and first impulse to react. Observe while remaining within product safety limits.',
  },
  {
    id: 'load',
    name: 'Load',
    range: '3 – 6 min',
    description:
      'Sensation continues. Settle into unforced breathing. If comfortable, inhale for 4 seconds and exhale for 6 to 8 seconds. No breath holding. No forcing.',
  },
  {
    id: 'peak',
    name: 'Peak',
    range: '6 – 9 min',
    description:
      'Attention becomes the practice. Notice what changed and what did not. Choose whether to continue. Complete at 9 minutes or stop earlier at the safety threshold.',
  },
];

const PHASE_COLORS = {
  entry: 'var(--color-bone)',
  load: 'var(--color-spectral)',
  peak: 'rgba(255,255,255,0.9)',
} as const;

export function NeuropauseTimeline() {
  const [active, setActive] = useState('entry');
  const activePhase = PHASES.find((p) => p.id === active)!;
  const activeIndex = PHASES.findIndex((p) => p.id === active);

  return (
    <div className="neuropause-timeline">
      {/* 9-minute visual bar */}
      <div
        className="neuropause-bar"
        role="group"
        aria-label="Neuropause 9-minute timeline"
      >
        {PHASES.map((phase) => (
          <button
            key={phase.id}
            type="button"
            className="neuropause-segment"
            data-active={active === phase.id}
            onClick={() => setActive(phase.id)}
            aria-pressed={active === phase.id}
            aria-label={`${phase.name}: ${phase.range}`}
            style={{
              borderColor: active === phase.id
                ? PHASE_COLORS[phase.id as keyof typeof PHASE_COLORS]
                : 'rgba(255,255,255,0.1)',
            }}
          >
            <span className="neuropause-segment-label">{phase.name}</span>
            <span className="neuropause-segment-range">{phase.range}</span>
          </button>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="neuropause-progress">
        <div
          className="neuropause-progress-fill"
          style={{ width: `${((activeIndex + 1) / PHASES.length) * 100}%` }}
        />
      </div>

      {/* Active phase detail */}
      <div className="neuropause-detail">
        <h4 style={{
          fontFamily: 'var(--font-editorial)',
          fontSize: 'var(--text-xl)',
          fontWeight: 500,
          color: 'var(--color-bone)',
          marginBottom: 'var(--space-2)',
        }}>
          {activePhase.name}
        </h4>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'rgba(232, 224, 212, 0.4)',
          letterSpacing: '0.08em',
          marginBottom: 'var(--space-4)',
        }}>
          {activePhase.range}
        </p>
        <p style={{
          fontSize: 'var(--text-base)',
          color: 'rgba(232, 224, 212, 0.7)',
          lineHeight: 'var(--leading-relaxed)',
          maxWidth: '36rem',
        }}>
          {activePhase.description}
        </p>
      </div>

      {/* Disclosure */}
      <p className="neuropause-disclosure">
        The phase timings organize the Neuropause practice. They do not represent
        measured physiological transitions. Peak is the final attentional phase.
        It is not a claimed physiological peak.
      </p>
    </div>
  );
}
