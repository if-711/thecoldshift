/**
 * Content Validation — The Cold Shift
 *
 * Validates that no claim, source, or product fact violates editorial rules.
 * Run via: npx ts-node --esm src/lib/content/validate.ts
 * Added to CI as a build step.
 */

import { claims, sources, productFacts } from './schema.js';
import type { Claim, Source, ProductFact } from './schema.js';

interface ValidationError {
  type: 'claim' | 'source' | 'product_fact';
  id: string;
  field: string;
  message: string;
}

const errors: ValidationError[] = [];

function validateClaim(claim: Claim): void {
  // 1. Approved scientific statements must have a source
  if (
    claim.approvalStatus === 'approved' &&
    (claim.statementType === 'research_interpretation' ||
      claim.statementType === 'established_physiology') &&
    claim.sourceIds.length === 0
  ) {
    errors.push({
      type: 'claim',
      id: claim.id,
      field: 'sourceIds',
      message: 'Approved scientific statement has no source records.',
    });
  }

  // 2. Approved claim must have limitations
  if (claim.approvalStatus === 'approved' && !claim.limitations.trim()) {
    errors.push({
      type: 'claim',
      id: claim.id,
      field: 'limitations',
      message: 'Approved claim has no limitations statement.',
    });
  }

  // 3. Approved claim must have applicability
  if (claim.approvalStatus === 'approved' && !claim.iceSackApplicability) {
    errors.push({
      type: 'claim',
      id: claim.id,
      field: 'iceSackApplicability',
      message: 'Approved claim has no Ice Sack applicability classification.',
    });
  }

  // 4. Approved record must have a review date
  if (claim.approvalStatus === 'approved' && !claim.lastReviewDate.trim()) {
    errors.push({
      type: 'claim',
      id: claim.id,
      field: 'lastReviewDate',
      message: 'Approved claim has no review date.',
    });
  }

  // 5. Source IDs must reference existing sources
  for (const sourceId of claim.sourceIds) {
    if (!sources.find((s: Source) => s.id === sourceId)) {
      errors.push({
        type: 'claim',
        id: claim.id,
        field: 'sourceIds',
        message: `Source ID "${sourceId}" does not exist in the source ledger.`,
      });
    }
  }
}

function validateSource(source: Source): void {
  if (!source.title.trim()) {
    errors.push({
      type: 'source',
      id: source.id,
      field: 'title',
      message: 'Source has no title.',
    });
  }
  if (!source.pmid.trim()) {
    errors.push({
      type: 'source',
      id: source.id,
      field: 'pmid',
      message: 'Source has no PubMed identifier.',
    });
  }
  if (!source.doi.trim() || !source.url.trim()) {
    errors.push({
      type: 'source',
      id: source.id,
      field: 'doi/url',
      message: 'Source is missing its DOI or primary-record URL.',
    });
  }
  if (!source.limitations.trim()) {
    errors.push({
      type: 'source',
      id: source.id,
      field: 'limitations',
      message: 'Source has no limitations statement.',
    });
  }
}

function validateProductFact(fact: ProductFact): void {
  // Verified product fact must have verification data
  if (fact.verificationStatus === 'verified') {
    if (!fact.measurementMethod.trim()) {
      errors.push({
        type: 'product_fact',
        id: fact.id,
        field: 'measurementMethod',
        message: 'Verified product fact has no measurement method.',
      });
    }
    if (!fact.measuredBy.trim()) {
      errors.push({
        type: 'product_fact',
        id: fact.id,
        field: 'measuredBy',
        message: 'Verified product fact has no measuredBy attribution.',
      });
    }
    if (!fact.dateVerified.trim()) {
      errors.push({
        type: 'product_fact',
        id: fact.id,
        field: 'dateVerified',
        message: 'Verified product fact has no verification date.',
      });
    }
  }
}

function validateUniqueIds(
  type: ValidationError['type'],
  records: Array<{ id: string }>
): void {
  const ids = records.map((record) => record.id);
  for (const id of new Set(ids)) {
    if (ids.filter((candidate) => candidate === id).length > 1) {
      errors.push({
        type,
        id,
        field: 'id',
        message: 'Duplicate record ID.',
      });
    }
  }
}

// Run validation
for (const claim of claims) {
  validateClaim(claim);
}

for (const source of sources) {
  validateSource(source);
}

for (const fact of productFacts) {
  validateProductFact(fact);
}

validateUniqueIds('claim', claims);
validateUniqueIds('source', sources);
validateUniqueIds('product_fact', productFacts);

// Report
if (errors.length > 0) {
  console.error(`\n❌ Content validation failed with ${errors.length} error(s):\n`);
  for (const err of errors) {
    console.error(`  [${err.type}] ${err.id}.${err.field}: ${err.message}`);
  }
  process.exit(1);
} else {
  const claimCount = claims.length;
  const sourceCount = sources.length;
  const factCount = productFacts.length;
  console.log(`\n✅ Content validation passed.`);
  console.log(`   Claims: ${claimCount}  Sources: ${sourceCount}  Product facts: ${factCount}`);
  if (claimCount === 0 && sourceCount === 0 && factCount === 0) {
    console.log(`   Collections are empty — no violations possible.`);
  }
  process.exit(0);
}
