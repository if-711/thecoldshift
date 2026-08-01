'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isHome ? 'transparent' : 'rgba(245, 245, 245, 0.92)',
        backdropFilter: isHome ? 'none' : 'blur(12px)',
        borderBottom: isHome ? 'none' : '1px solid var(--color-border)',
        transition: 'background var(--duration-normal) var(--ease-out)',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '3.5rem',
      }}>
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: isHome ? 'var(--color-bone)' : 'var(--color-text)',
            textDecoration: 'none',
          }}
          aria-label="The Cold Shift — Home"
        >
          The Cold Shift
        </Link>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-6)',
        }}>
          <Link
            href="/field/input/"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isHome ? 'rgba(232, 224, 212, 0.6)' : 'var(--color-text-tertiary)',
              textDecoration: 'none',
              transition: 'color var(--duration-fast)',
            }}
          >
            Field
          </Link>
          <Link
            href="/evidence/"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isHome ? 'rgba(232, 224, 212, 0.6)' : 'var(--color-text-tertiary)',
              textDecoration: 'none',
              transition: 'color var(--duration-fast)',
            }}
          >
            Evidence
          </Link>
          <Link
            href="/safety/"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isHome ? 'rgba(232, 224, 212, 0.6)' : 'var(--color-text-tertiary)',
              textDecoration: 'none',
              transition: 'color var(--duration-fast)',
            }}
          >
            Safety
          </Link>
        </nav>
      </div>
    </header>
  );
}
