'use client';

import { useState } from 'react';
import {
  EvidenceDrawer,
  EvidenceTrigger,
} from '@/components/EvidenceDrawer';
import { KnownInferredUntested } from '@/components/KnownInferredUntested';
import {
  getApprovedClaim,
  getSourcesForClaim,
} from '@/lib/content/schema';

const FEATURED_CLAIM_ID = 'skin-cooling-can-increase-vascular-resistance';

export function EvidenceLibraryInteractive() {
  const [isOpen, setIsOpen] = useState(false);
  const claim = getApprovedClaim(FEATURED_CLAIM_ID);
  const claimSources = claim ? getSourcesForClaim(claim) : [];

  return (
    <>
      <section style={{ marginBottom: 'var(--space-16)' }} aria-labelledby="evidence-boundaries">
        <div style={{ maxWidth: 'var(--max-width-prose)', marginBottom: 'var(--space-8)' }}>
          <h2 id="evidence-boundaries" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
            Known, inferred, and untested
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            Category creation requires separating observed physiology from interpretation
            and future research questions. These positions should not collapse into one
            confidence score.
          </p>
        </div>
        <KnownInferredUntested />
      </section>

      {claim && (
        <section style={{ marginBottom: 'var(--space-16)' }} aria-labelledby="drawer-example">
          <div
            style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--color-border-strong)',
              background: 'var(--color-bg-deep)',
              maxWidth: 'var(--max-width-prose)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Evidence drawer example
            </p>
            <h2 id="drawer-example" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              Read the claim, then inspect its boundary.
            </h2>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-6)',
              }}
            >
              {claim.statement}
            </p>
            <EvidenceTrigger
              label="Open evidence record"
              claimId={claim.id}
              onClick={() => setIsOpen(true)}
            />
          </div>
        </section>
      )}

      <EvidenceDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        claim={claim}
        claimSources={claimSources}
      />
    </>
  );
}
