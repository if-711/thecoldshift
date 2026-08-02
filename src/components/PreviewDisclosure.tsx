'use client';

import { PREVIEW_MODE } from '@/lib/preview';

/**
 * PreviewDisclosure — shown only when NEXT_PUBLIC_PREVIEW_MODE=true.
 * Not part of the permanent content hierarchy.
 */
export function PreviewDisclosure() {
  if (!PREVIEW_MODE) return null;

  return (
    <div
      className="preview-disclosure"
      role="status"
      aria-label="Preview environment notice"
    >
      Working preview · Research records, product facts, and safety content are still being populated and reviewed
    </div>
  );
}
