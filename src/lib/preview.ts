/**
 * Preview Mode Configuration
 *
 * Controls whether prototype fixtures and interactions are available.
 * Default: false. Set NEXT_PUBLIC_PREVIEW_MODE=true in preview environments.
 *
 * The production build must fail if prototype fixtures are imported
 * while preview mode is false.
 */

export const PREVIEW_MODE = process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true';

/**
 * Guard that throws at build time if prototype code is reached in production.
 * Call this at the top of any fixture file.
 */
export function assertPreviewMode(context: string): void {
  if (!PREVIEW_MODE) {
    throw new Error(
      `[PREVIEW GUARD] ${context} is only available when NEXT_PUBLIC_PREVIEW_MODE=true. ` +
      `This code must not be included in production builds.`
    );
  }
}
