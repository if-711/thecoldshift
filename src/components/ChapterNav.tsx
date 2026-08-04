'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CHAPTERS } from '@/lib/content/chapters';

export function ChapterNav() {
  const pathname = usePathname();

  return (
    <nav className="chapter-nav" aria-label="Chapter navigation">
      {CHAPTERS.map((ch) => {
        const href = ch.slug === 'evidence'
          ? '/evidence/'
          : ch.slug === 'system'
            ? '/system/'
            : `/field/${ch.slug}/`;
        const isCurrent = pathname === href
          || pathname === href.slice(0, -1)
          || (ch.slug === 'evidence' && pathname.startsWith('/evidence'))
          || (ch.slug === 'system' && pathname.startsWith('/system'));

        return (
          <Link
            key={ch.id}
            href={href}
            className="chapter-nav-item"
            aria-current={isCurrent ? 'true' : undefined}
          >
            <span className="chapter-nav-number">
              {String(ch.number).padStart(2, '0')}
            </span>
            {ch.title}
          </Link>
        );
      })}
    </nav>
  );
}
