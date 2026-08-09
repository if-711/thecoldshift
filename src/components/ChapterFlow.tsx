import Link from 'next/link';
import { CHAPTERS } from '@/lib/content/chapters';

interface ChapterFlowProps {
  currentChapterId: string;
}

/**
 * Bottom-of-page navigation showing previous/next chapter links.
 * Maintains the narrative flow between field pages, evidence, and system.
 */
export function ChapterFlow({ currentChapterId }: ChapterFlowProps) {
  const currentIndex = CHAPTERS.findIndex((ch) => ch.id === currentChapterId);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const next = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  // Map chapter id to its route
  const getHref = (ch: typeof CHAPTERS[number]) => {
    if (ch.id === 'evidence') return '/evidence/';
    if (ch.id === 'system') return '/system/';
    return `/field/${ch.slug}/`;
  };

  return (
    <nav
      aria-label="Chapter navigation"
      style={{
        display: 'flex',
        justifyContent: prev && next ? 'space-between' : next ? 'flex-end' : 'flex-start',
        alignItems: 'stretch',
        gap: 'var(--space-4)',
        marginTop: 'var(--space-16)',
        paddingTop: 'var(--space-8)',
        borderTop: '1px solid rgba(232, 224, 212, 0.08)',
        flexWrap: 'wrap',
      }}
    >
      {prev && (
        <Link
          href={getHref(prev)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-1)',
            padding: 'var(--space-4) var(--space-6)',
            border: '1px solid rgba(232, 224, 212, 0.1)',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all var(--duration-normal) var(--ease-out)',
            flex: '1 1 auto',
            minWidth: '12rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(232, 224, 212, 0.35)',
            }}
          >
            ← Chapter {String(prev.number).padStart(2, '0')}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-base)',
              fontWeight: 500,
              color: 'var(--color-bone)',
            }}
          >
            {prev.title}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'rgba(232, 224, 212, 0.5)',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {prev.subtitle}
          </span>
        </Link>
      )}

      {next && (
        <Link
          href={getHref(next)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            textAlign: 'right',
            gap: 'var(--space-1)',
            padding: 'var(--space-4) var(--space-6)',
            border: '1px solid rgba(232, 224, 212, 0.1)',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all var(--duration-normal) var(--ease-out)',
            flex: '1 1 auto',
            minWidth: '12rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(232, 224, 212, 0.35)',
            }}
          >
            Chapter {String(next.number).padStart(2, '0')} →
          </span>
          <span
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-base)',
              fontWeight: 500,
              color: 'var(--color-bone)',
            }}
          >
            {next.title}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'rgba(232, 224, 212, 0.5)',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {next.subtitle}
          </span>
        </Link>
      )}
    </nav>
  );
}
