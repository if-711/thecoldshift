import Link from 'next/link';

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-black)',
        borderTop: '1px solid rgba(232, 224, 212, 0.06)',
        padding: 'var(--space-16) 0 var(--space-8)',
        fontSize: 'var(--text-sm)',
        color: 'rgba(232, 224, 212, 0.5)',
      }}
    >
      <div className="container">
        {/* Top bar — Brand + Social */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 'var(--space-12)',
          flexWrap: 'wrap',
          gap: 'var(--space-6)',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-lg)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-bone)',
              marginBottom: 'var(--space-3)',
            }}>
              The Cold Shift
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'rgba(232, 224, 212, 0.35)',
              letterSpacing: '0.04em',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Engineered by BHVD
              <br />
              A field guide to controlled cold.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
            <a
              href="https://www.theicesack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                border: '1px solid rgba(232, 224, 212, 0.12)',
                color: 'rgba(232, 224, 212, 0.5)',
                transition: 'all var(--duration-fast)',
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
              }}
              aria-label="Visit The Ice Sack"
            >
              ↗
            </a>
          </div>
        </div>

        {/* Disclosure */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'rgba(232, 224, 212, 0.25)',
          letterSpacing: '0.02em',
          lineHeight: 'var(--leading-relaxed)',
          marginBottom: 'var(--space-8)',
          paddingBottom: 'var(--space-8)',
          borderBottom: '1px solid rgba(232, 224, 212, 0.06)',
        }}>
          The Cold Shift is published by BHVD, maker of The Ice Sack and Neuropause.
          Scientific research, manufacturer supplied statements, and direct product evidence are identified separately.
        </div>

        {/* Links grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
          gap: 'var(--space-8)',
          marginBottom: 'var(--space-12)',
        }}>
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(232, 224, 212, 0.3)',
              marginBottom: 'var(--space-4)',
            }}>
              Controlled Cold
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Link href="/field/input/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Controlled Cold</Link>
              <Link href="/field/signal/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Signal</Link>
              <Link href="/field/notice/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Notice</Link>
              <Link href="/field/choice/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Choice</Link>
              <Link href="/field/practice/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Practice</Link>
            </nav>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(232, 224, 212, 0.3)',
              marginBottom: 'var(--space-4)',
            }}>
              Evidence
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Link href="/evidence/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Evidence Library</Link>
              <Link href="/evidence/claims/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Claim Ledger</Link>
              <Link href="/safety/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Safety</Link>
              <Link href="/editorial-standards/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Editorial Standards</Link>
            </nav>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(232, 224, 212, 0.3)',
              marginBottom: 'var(--space-4)',
            }}>
              System
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Link href="/system/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>The Ice Sack</Link>
              <Link href="/about/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>About BHVD</Link>
              <a href="https://www.theicesack.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>
                theicesack.com ↗
              </a>
            </nav>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(232, 224, 212, 0.3)',
              marginBottom: 'var(--space-4)',
            }}>
              Legal
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Link href="/privacy/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Privacy</Link>
              <Link href="/terms/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Terms</Link>
              <Link href="/contact/" style={{ color: 'rgba(232, 224, 212, 0.5)', transition: 'color var(--duration-fast)' }}>Contact</Link>
            </nav>
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--space-6)',
          borderTop: '1px solid rgba(232, 224, 212, 0.06)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'rgba(232, 224, 212, 0.25)',
          letterSpacing: '0.02em',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
        }}>
          {/* TODO: Confirm legal entity name — BHVD vs BHVD Labs */}
          <span>© {new Date().getFullYear()} BHVD</span>
          <span>Cold is a physical stimulus. Outcomes are not assumed.</span>
        </div>
      </div>
    </footer>
  );
}
