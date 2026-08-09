'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const prevPathRef = useRef(pathname);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setMenuOpen(false);
    }
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

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(6, 10, 16, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(232, 224, 212, 0.06)',
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
            color: 'var(--color-bone)',
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
            gap: 'var(--space-5)',
          }}
          aria-label="Main navigation"
        >
          <Link href="/#category-shift" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.5)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            Controlled Cold
          </Link>
          <Link href="/field/input/" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.5)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            Methods
          </Link>
          <Link href="/evidence/" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.5)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            Evidence
          </Link>
          <Link href="/field/practice/" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.5)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            BHVD Practice
          </Link>
          <Link href="/safety/" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.5)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            Safety
          </Link>
          <Link href="/system/" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.5)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}>
            The Ice Sack
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
            color: 'var(--color-bone)',
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
          background: 'rgba(6, 10, 16, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(232, 224, 212, 0.06)',
          padding: 'var(--space-4) 0',
          flexDirection: 'column',
        }}
      >
        <Link href="/#category-shift" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.6)', textDecoration: 'none' }}>
          Controlled Cold
        </Link>
        <Link href="/field/input/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.6)', textDecoration: 'none' }}>
          Methods
        </Link>
        <Link href="/evidence/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.6)', textDecoration: 'none' }}>
          Evidence
        </Link>
        <Link href="/field/practice/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.6)', textDecoration: 'none' }}>
          BHVD Practice
        </Link>
        <Link href="/safety/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.6)', textDecoration: 'none' }}>
          Safety
        </Link>
        <Link href="/system/" style={{ display: 'block', padding: 'var(--space-3) var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232, 224, 212, 0.6)', textDecoration: 'none' }}>
          The Ice Sack
        </Link>
      </nav>
    </header>
  );
}
