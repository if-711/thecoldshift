/* ================================================================
   Content Types — The Cold Shift
   ================================================================ */

/** Evidence classification levels */
export type EvidenceLevel =
  | 'established'    // ESTABLISHED PHYSIOLOGY
  | 'supported'      // SUPPORTED INTERPRETATION
  | 'emerging'       // EMERGING EVIDENCE
  | 'hypothesis'     // BRAND HYPOTHESIS
  | 'subjective';    // SUBJECTIVE EXPERIENCE

export const EVIDENCE_LABELS: Record<EvidenceLevel, string> = {
  established: 'Established Physiology',
  supported: 'Supported Interpretation',
  emerging: 'Emerging Evidence',
  hypothesis: 'Brand Hypothesis',
  subjective: 'Subjective Experience',
};

export const EVIDENCE_DESCRIPTIONS: Record<EvidenceLevel, string> = {
  established:
    'Widely accepted mechanisms supported by authoritative references, replicated research, or strong reviews.',
  supported:
    'A reasonable interpretation supported by multiple sources, with meaningful limitations.',
  emerging:
    'Preliminary, context-dependent, or limited evidence that requires qualification.',
  hypothesis:
    'A conceptual model proposed by BHVD that has not been established scientifically.',
  subjective:
    'An individual report or phenomenological description that cannot be generalized.',
};

/** Cold delivery method taxonomy */
export type ColdDeliveryMethod =
  | 'dry_cold_containment'
  | 'cold_water_immersion'
  | 'whole_body_cryotherapy'
  | 'localized_cooling'
  | 'pcm_wearable'
  | 'environmental_cold'
  | 'mixed'
  | 'unspecified';

/** Study type classification */
export type StudyType =
  | 'systematic_review'
  | 'meta_analysis'
  | 'rct'
  | 'controlled_trial'
  | 'cohort'
  | 'cross_sectional'
  | 'case_control'
  | 'case_report'
  | 'narrative_review'
  | 'consensus_statement'
  | 'government_guidance'
  | 'textbook'
  | 'other';

/** Research source record */
export interface Source {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  studyType: StudyType;
  population: string;
  coldMethod: ColdDeliveryMethod;
  temperature: string;
  duration: string;
  outcomeMeasured: string;
  limitations: string;
  iceSackRelevance: string;
  evidenceLevel: EvidenceLevel;
  doi: string;
  url: string;
}

/** A claim with evidence backing */
export interface Claim {
  id: string;
  statement: string;
  context: string;
  evidenceLevel: EvidenceLevel;
  sourceIds: string[];
  limitations: string;
  iceSackApplicability: string;
  chapterId: string;
  /** Whether this claim appears in public-facing copy */
  inPublicCopy: boolean;
}

/** Chapter definition */
export interface Chapter {
  number: number;
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  /** The State Field stage this chapter corresponds to */
  stateFieldStage: 'input' | 'signal' | 'notice' | 'choice' | 'practice' | 'evidence' | 'system';
}

/** Product fact sheet entry */
export interface ProductFact {
  id: string;
  category: string;
  fact: string;
  source: string;
  dateVerified: string;
  publicWording: string;
  status: 'verified' | 'unresolved' | 'pending';
}

/** Research audit trail entry */
export interface SearchRecord {
  date: string;
  database: string;
  query: string;
  resultsCount: number;
  included: number;
  excluded: number;
  exclusionReasons: string[];
}
