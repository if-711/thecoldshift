import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
                marginBottom: 'var(--space-4)',
              }}
            >
              404
            </p>
            <h1 style={{ marginBottom: 'var(--space-6)' }}>Page not found</h1>
            <p className="text-prose" style={{ marginBottom: 'var(--space-8)' }}>
              The page you are looking for does not exist or has been moved.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/"
                className="btn-primary"
              >
                Return home
              </a>
              <a
                href="/field/input/"
                className="btn-secondary"
              >
                Enter the Field
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
