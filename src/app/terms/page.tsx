import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = { title: 'Terms of Use' };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <h1 style={{ marginBottom: 'var(--space-6)' }}>Terms of Use</h1>
            <div className="text-prose">
              <p><strong>Effective date:</strong> August 2026</p>

              {/* TODO: OWNER / COUNSEL — Confirm legal entity name, jurisdiction, and whether
                  this document requires qualified legal review before publication */}

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Not medical advice</h2>
              <p>The Cold Shift provides information about controlled cold exposure. Nothing on this website constitutes medical advice, diagnosis, or treatment. Consult a qualified healthcare provider before attempting any cold exposure practice.</p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>No product instructions</h2>
              <p>This website does not replace the instructions for use supplied with The Ice Sack. Product use must follow the approved instructions for use and any applicable safety guidance provided with the product.</p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Assumption of risk</h2>
              <p>Cold exposure carries real physiological risks including but not limited to hypothermia, cold injury, cardiovascular events, and allergic reactions. By using information from this website, you acknowledge these risks and accept full responsibility for your own actions.</p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Publisher disclosure</h2>
              <p>The Cold Shift is published by BHVD. BHVD makes and sells The Ice Sack. This relationship is disclosed on every page.</p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Intellectual property</h2>
              {/* Entity name confirmed: BHVD */}
              <p>Content on The Cold Shift is &copy; {new Date().getFullYear()} BHVD. &quot;The Cold Shift,&quot; &quot;The Ice Sack,&quot; and &quot;Neuropause&quot; are trademarks of BHVD.</p>

              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Contact</h2>
              {/* TODO: OWNER — Confirm contact email address */}
              <p><a href="mailto:hello@bhvd.co" style={{ textDecoration: 'underline' }}>hello@bhvd.co</a></p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
