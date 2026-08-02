'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [menuOpen]);

  const linkColor = isHome ? 'rgba(232, 224, 212, 0.6)' : 'var(--color-text-tertiary)';

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

        {/* Desktop navigation */}
        <nav
          className="nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-6)',
          }}
          aria-label="Main navigation"
        >
          <Link href="/field/input/" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            Field
          </Link>
          <Link href="/evidence/" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            Evidence
          </Link>
          <Link href="/safety/" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            Safety
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          type="button"
          style={{
            display: 'none', // shown via CSS at narrow widths
            background: 'none',
            border: 'none',
            padding: 'var(--space-2)',
            cursor: 'pointer',
            color: isHome ? 'var(--color-bone)' : 'var(--color-text)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation panel */}
      <nav
        id="mobile-nav"
        className="nav-mobile"
        aria-label="Mobile navigation"
        data-open={menuOpen}
        style={{
          display: 'none', // shown via CSS at narrow widths
          position: 'absolute',
          top: '3.5rem',
          left: 0,
          right: 0,
          background: isHome ? 'rgba(10, 10, 10, 0.95)' : 'rgba(245, 245, 245, 0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'var(--space-4) 0',
          flexDirection: 'column',
        }}
      >
        <Link href="/field/input/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>
          Field
        </Link>
        <Link href="/evidence/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>
          Evidence
        </Link>
        <Link href="/safety/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>
          Safety
        </Link>
        <Link href="/evidence/claims/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>
          Claim Ledger
        </Link>
      </nav>
    </header>
  );
}
