'use client';

/**
 * CategoryShift — Two-column transition system.
 * Presents the 7 conceptual transitions that define the shift to controlled cold.
 * Desktop: side-by-side columns. Mobile: stacked pairs.
 * Not a product comparison — uses typographic contrast only.
 */

const SHIFTS: { conventional: string; emerging: string }[] = [
  { conventional: 'Temperature drifts during use', emerging: 'Temperature is set by the material' },
  { conventional: 'Duration varies by tolerance', emerging: 'Duration is defined by the protocol' },
  { conventional: 'Every session is different', emerging: 'Every session is the same' },
  { conventional: 'Hard to know what changed', emerging: 'A consistent baseline to build on' },
];

export function CategoryShift() {
  return (
    <div className="category-shift">
      {/* Column headers — desktop only */}
      <div className="category-shift-header">
        <span className="category-shift-label">Variable exposure</span>
        <span className="category-shift-label">Fixed exposure</span>
      </div>

      {SHIFTS.map((shift, i) => (
        <div key={i} className="category-shift-row">
          <span className="category-shift-from">{shift.conventional}</span>
          <span className="category-shift-arrow" aria-hidden="true">→</span>
          <span className="category-shift-to">{shift.emerging}</span>
        </div>
      ))}
    </div>
  );
}
