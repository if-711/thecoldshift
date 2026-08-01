import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <h1 style={{ marginBottom: 'var(--space-6)' }}>Contact</h1>
            <div className="text-prose">
              <p>For questions, corrections, or collaboration inquiries:</p>
              <p><a href="mailto:hello@bhvd.co" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>hello@bhvd.co</a></p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
