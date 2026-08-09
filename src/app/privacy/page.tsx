import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <h1 style={{ marginBottom: 'var(--space-6)' }}>Privacy Policy</h1>
            <div className="text-prose">
              <p><strong>Effective date:</strong> August 2026</p>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>What we collect</h2>
              <p>The Cold Shift is a static website hosted on Firebase Hosting. We do not collect personal information, set cookies, or use tracking scripts. We do not use analytics at this time.</p>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Hosting</h2>
              <p>This site is hosted on Google Firebase Hosting. Firebase may collect standard server logs including IP addresses and request metadata as part of normal hosting operations. See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Firebase Privacy Policy</a>.</p>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Contact</h2>
              <p>For privacy questions: <a href="mailto:hello@bhvd.co" style={{ textDecoration: 'underline' }}>hello@bhvd.co</a></p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
