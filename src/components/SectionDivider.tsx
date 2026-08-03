'use client';

/**
 * SectionDivider — Visual transition element between homepage sections.
 *
 * Creates a gradient threshold that communicates the conceptual shift
 * between sections (e.g., from physical input → neural detection → perception).
 *
 * Variants:
 * - signal: Cold blue propagation line (input → detection)
 * - perception: Diffused warm-cool gradient (detection → interpretation)
 * - boundary: Sharp rule with evidence marker (interpretation → evidence)
 * - thermal: Animated thermal gradient (category → product)
 */

type DividerVariant = 'signal' | 'perception' | 'boundary' | 'thermal';

const VARIANT_STYLES: Record<DividerVariant, { background: string; height: string }> = {
  signal: {
    background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.08) 40%, rgba(59, 130, 246, 0.04) 60%, transparent 100%)',
    height: '8rem',
  },
  perception: {
    background: 'linear-gradient(180deg, transparent 0%, rgba(232, 224, 212, 0.04) 30%, rgba(59, 130, 246, 0.06) 70%, transparent 100%)',
    height: '10rem',
  },
  boundary: {
    background: 'linear-gradient(180deg, transparent 0%, rgba(232, 224, 212, 0.02) 50%, transparent 100%)',
    height: '6rem',
  },
  thermal: {
    background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 20%, rgba(59, 130, 246, 0.05) 50%, rgba(232, 224, 212, 0.03) 80%, transparent 100%)',
    height: '12rem',
  },
};

export function SectionDivider({ variant = 'signal' }: { variant?: DividerVariant }) {
  const { background, height } = VARIANT_STYLES[variant];

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height,
        background,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {variant === 'boundary' && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            maxWidth: '24rem',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(232, 224, 212, 0.08), transparent)',
          }}
        />
      )}
      {variant === 'signal' && (
        <div
          className="signal-pulse"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'var(--color-spectral)',
            opacity: 0.4,
            boxShadow: '0 0 12px 4px rgba(59, 130, 246, 0.3)',
          }}
        />
      )}
    </div>
  );
}
