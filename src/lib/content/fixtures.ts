/**
 * PROTOTYPE FIXTURES — The Cold Shift
 *
 * These records exist only to demonstrate the evidence interface.
 * They are available only when NEXT_PUBLIC_PREVIEW_MODE=true.
 * They must never appear in the indexed production build.
 *
 * Content is deliberately neutral and cannot be mistaken for real claims.
 */

import { assertPreviewMode } from '@/lib/preview';
import type { Claim, Source } from './schema';

// Guard: this file fails the build if imported in production
assertPreviewMode('Prototype fixtures');

export const PROTOTYPE_SOURCE: Source = {
  id: 'proto-source-001',
  pmid: '',
  title: 'Demonstration source record',
  authors: ['Interface Prototype'],
  journal: 'Not a scientific source',
  year: 0,
  studyType: 'other',
  population: 'Not applicable — interface demonstration',
  coldMethod: 'unspecified',
  temperature: 'Not applicable',
  duration: 'Not applicable',
  outcomeMeasured: 'Not applicable',
  limitations: 'This is a prototype record. It does not represent scientific evidence.',
  doi: '',
  url: '',
};

export const PROTOTYPE_CLAIM: Claim = {
  id: 'proto-claim-001',
  statement: 'This record demonstrates how an approved claim will appear.',
  statementType: 'established_physiology',
  evidenceConfidence: 'high',
  sourceIds: ['proto-source-001'],
  evidenceSynthesis: 'This field will contain the synthesis of how sources support a claim.',
  limitations: 'This is a prototype record demonstrating the evidence interface. It is not a scientific claim.',
  iceSackApplicability: 'not_applicable',
  chapterId: 'evidence',
  lastReviewDate: '2026-01-01',
  reviewer: 'Interface prototype',
  approvalStatus: 'approved',
  inPublicCopy: false,
};

/** All prototype fixtures in one array for registry */
export const PROTOTYPE_SOURCES: Source[] = [PROTOTYPE_SOURCE];
export const PROTOTYPE_CLAIMS: Claim[] = [PROTOTYPE_CLAIM];
