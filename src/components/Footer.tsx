import Link from 'next/link';

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-12) 0 var(--space-8)',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-text-tertiary)',
      }}
    >
      <div className="container">
        {/* Disclosure */}
        <div className="disclosure-bar" style={{ borderTop: 'none', marginBottom: 'var(--space-8)' }}>
          The Cold Shift is a BHVD field project. The Ice Sack is the first physical system
          developed within this framework. Neuropause is the original nine-minute guided protocol.
        </div>

        {/* Links grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
          gap: 'var(--space-8)',
          marginBottom: 'var(--space-8)',
        }}>
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-tertiary)',
              marginBottom: 'var(--space-4)',
            }}>
              Field
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Link href="/field/input/" style={{ color: 'var(--color-text-secondary)' }}>Input</Link>
              <Link href="/field/signal/" style={{ color: 'var(--color-text-secondary)' }}>Signal</Link>
              <Link href="/field/notice/" style={{ color: 'var(--color-text-secondary)' }}>Notice</Link>
              <Link href="/field/choice/" style={{ color: 'var(--color-text-secondary)' }}>Choice</Link>
              <Link href="/field/practice/" style={{ color: 'var(--color-text-secondary)' }}>Practice</Link>
            </nav>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-tertiary)',
              marginBottom: 'var(--space-4)',
            }}>
              Evidence
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Link href="/evidence/" style={{ color: 'var(--color-text-secondary)' }}>Evidence Library</Link>
              <Link href="/evidence/claims/" style={{ color: 'var(--color-text-secondary)' }}>Claim Ledger</Link>
              <Link href="/safety/" style={{ color: 'var(--color-text-secondary)' }}>Safety</Link>
              <Link href="/editorial-standards/" style={{ color: 'var(--color-text-secondary)' }}>Editorial Standards</Link>
            </nav>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-tertiary)',
              marginBottom: 'var(--space-4)',
            }}>
              System
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Link href="/system/" style={{ color: 'var(--color-text-secondary)' }}>The Ice Sack</Link>
              <Link href="/about/" style={{ color: 'var(--color-text-secondary)' }}>About BHVD</Link>
              <a href="https://www.theicesack.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)' }}>
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
              color: 'var(--color-text-tertiary)',
              marginBottom: 'var(--space-4)',
            }}>
              Legal
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Link href="/privacy/" style={{ color: 'var(--color-text-secondary)' }}>Privacy</Link>
              <Link href="/terms/" style={{ color: 'var(--color-text-secondary)' }}>Terms</Link>
              <Link href="/contact/" style={{ color: 'var(--color-text-secondary)' }}>Contact</Link>
            </nav>
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--space-6)',
          borderTop: '1px solid var(--color-border)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-tertiary)',
          letterSpacing: '0.02em',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
        }}>
          <span>© {new Date().getFullYear()} BHVD</span>
          <span>Cold is a stimulus, not a promised outcome.</span>
        </div>
      </div>
    </footer>
  );
}
