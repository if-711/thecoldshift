import type { StatementType, EvidenceConfidence } from '@/lib/content/schema';
import { STATEMENT_TYPE_LABELS, EVIDENCE_CONFIDENCE_LABELS } from '@/lib/content/schema';

/**
 * StatementTypeBadge — labels BHVD conceptual models.
 *
 * May render without scientific sources only when it explicitly displays:
 * 1. BHVD Conceptual Model
 * 2. No Direct Evidence
 * 3. Transfer Untested
 *
 * This is the only classification badge that may appear without an
 * approved claim record in the source ledger.
 */
export function StatementTypeBadge({
  type,
  confidence,
  transfer,
}: {
  type: StatementType;
  confidence?: EvidenceConfidence;
  transfer?: string;
}) {
  return (
    <div className="statement-badge" data-type={type}>
      <span className="statement-badge-label">{STATEMENT_TYPE_LABELS[type]}</span>
      {confidence && (
        <span className="statement-badge-meta">
          Evidence: {EVIDENCE_CONFIDENCE_LABELS[confidence]}
        </span>
      )}
      {transfer && (
        <span className="statement-badge-meta">
          Transfer beyond session: {transfer}
        </span>
      )}
    </div>
  );
}
