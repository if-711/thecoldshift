'use client';

/**
 * CategoryShift — Two-column transition system.
 * Presents the 7 conceptual transitions that define the shift to controlled cold.
 * Desktop: side-by-side columns. Mobile: stacked pairs.
 * Not a product comparison — uses typographic contrast only.
 */

const SHIFTS: { conventional: string; emerging: string }[] = [
  { conventional: 'Extreme cold', emerging: 'Controlled cold' },
  { conventional: 'Endurance test', emerging: 'Designed exposure' },
  { conventional: 'One dramatic session', emerging: 'Repeatable practice' },
  { conventional: 'Cold as punishment', emerging: 'Cold as a designed experience' },
];

export function CategoryShift() {
  return (
    <div className="category-shift">
      {/* Column headers — desktop only */}
      <div className="category-shift-header">
        <span className="category-shift-label">Conventional framing</span>
        <span className="category-shift-label">Emerging framing</span>
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
