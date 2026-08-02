/* ================================================================
   Content Types — The Cold Shift
   Three independent classification fields.
   Source metadata lives in Source records only (not duplicated in Claims).
   ================================================================ */

/* ----------------------------------------------------------------
   Statement Type
   ---------------------------------------------------------------- */
export type StatementType =
  | 'established_physiology'
  | 'research_interpretation'
  | 'bhvd_conceptual_model'
  | 'subjective_experience'
  | 'product_fact';

export const STATEMENT_TYPE_LABELS: Record<StatementType, string> = {
  established_physiology: 'Established Physiology',
  research_interpretation: 'Research Interpretation',
  bhvd_conceptual_model: 'BHVD Conceptual Model',
  subjective_experience: 'Subjective Experience',
  product_fact: 'Product Fact',
};

/* ----------------------------------------------------------------
   Evidence Confidence
   ---------------------------------------------------------------- */
export type EvidenceConfidence =
  | 'high'
  | 'moderate'
  | 'preliminary'
  | 'no_direct_evidence'
  | 'unverified';

export const EVIDENCE_CONFIDENCE_LABELS: Record<EvidenceConfidence, string> = {
  high: 'High',
  moderate: 'Moderate',
  preliminary: 'Preliminary',
  no_direct_evidence: 'No Direct Evidence',
  unverified: 'Unverified',
};

/* ----------------------------------------------------------------
   Ice Sack Applicability
   ---------------------------------------------------------------- */
export type IceSackApplicability =
  | 'direct_product_evidence'
  | 'mechanistically_relevant'
  | 'indirect_analogy'
  | 'not_applicable'
  | 'unknown';

export const ICE_SACK_APPLICABILITY_LABELS: Record<IceSackApplicability, string> = {
  direct_product_evidence: 'Direct Product Evidence',
  mechanistically_relevant: 'Mechanistically Relevant',
  indirect_analogy: 'Indirect Analogy',
  not_applicable: 'Not Applicable',
  unknown: 'Unknown',
};

/* ----------------------------------------------------------------
   Cold delivery method taxonomy
   ---------------------------------------------------------------- */
export type ColdDeliveryMethod =
  | 'dry_cold_containment'
  | 'cold_water_immersion'
  | 'whole_body_cryotherapy'
  | 'localized_cooling'
  | 'pcm_wearable'
  | 'environmental_cold'
  | 'mixed'
  | 'unspecified';

/* ----------------------------------------------------------------
   Study type classification
   ---------------------------------------------------------------- */
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

/* ----------------------------------------------------------------
   Source record — study-level metadata lives here only
   ---------------------------------------------------------------- */
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
  doi: string;
  url: string;
}

/* ----------------------------------------------------------------
   Claim record — references sources by ID, does not duplicate them
   ---------------------------------------------------------------- */
export type ClaimApprovalStatus = 'draft' | 'pending_review' | 'approved' | 'rejected';

export interface Claim {
  id: string;
  /** Exact claim wording */
  statement: string;
  /** Statement type */
  statementType: StatementType;
  /** Evidence confidence */
  evidenceConfidence: EvidenceConfidence;
  /** Source record IDs — study metadata lives in Source records */
  sourceIds: string[];
  /** Evidence synthesis — how sources support this claim */
  evidenceSynthesis: string;
  /** Claim-level limitations */
  limitations: string;
  /** Ice Sack applicability */
  iceSackApplicability: IceSackApplicability;
  /** Which chapter this claim appears in */
  chapterId: string;
  /** Last review date (ISO 8601) */
  lastReviewDate: string;
  /** Who reviewed this claim */
  reviewer: string;
  /** Approval status */
  approvalStatus: ClaimApprovalStatus;
  /** Whether this claim is in public-facing copy */
  inPublicCopy: boolean;
}

/* ----------------------------------------------------------------
   Chapter definition
   ---------------------------------------------------------------- */
export interface Chapter {
  number: number;
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  stateFieldStage: 'signal' | 'notice' | 'stay' | 'choose' | 'transition' | 'evidence' | 'system';
}

/* ----------------------------------------------------------------
   Product fact
   ---------------------------------------------------------------- */
export type VerificationStatus = 'verified' | 'unresolved' | 'pending';

export interface ProductFact {
  id: string;
  category: string;
  fact: string;
  source: string;
  measurementMethod: string;
  measurementDate: string;
  measuredBy: string;
  dateVerified: string;
  publicWording: string;
  verificationStatus: VerificationStatus;
}

/* ----------------------------------------------------------------
   Research audit trail
   ---------------------------------------------------------------- */
export interface SearchRecord {
  date: string;
  database: string;
  query: string;
  resultsCount: number;
  included: number;
  excluded: number;
  exclusionReasons: string[];
}

/* ----------------------------------------------------------------
   Approved collections — empty until reviewed and approved
   ---------------------------------------------------------------- */
export const sources: Source[] = [];
export const claims: Claim[] = [];
export const productFacts: ProductFact[] = [];
export const searchRecords: SearchRecord[] = [];

/* ----------------------------------------------------------------
   Claim lookup — used by EvidenceBadge
   ---------------------------------------------------------------- */
export function getApprovedClaim(claimId: string): Claim | null {
  const claim = claims.find((c) => c.id === claimId);
  if (!claim || claim.approvalStatus !== 'approved') return null;
  return claim;
}

export function getSourcesForClaim(claim: Claim): Source[] {
  return claim.sourceIds
    .map((id) => sources.find((s) => s.id === id))
    .filter((s): s is Source => s !== undefined);
}
