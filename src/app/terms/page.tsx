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
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Not medical advice</h2>
              <p>The Cold Shift provides educational information about controlled cold exposure, sensory awareness, and deliberate practice. Nothing on this website constitutes medical advice, diagnosis, or treatment. Consult a qualified healthcare provider before attempting any cold exposure practice.</p>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Assumption of risk</h2>
              <p>Cold exposure carries real physiological risks including but not limited to hypothermia, cold injury, cardiovascular events, and allergic reactions. By using information from this website, you acknowledge these risks and accept full responsibility for your own actions.</p>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Intellectual property</h2>
              <p>Content on The Cold Shift is © {new Date().getFullYear()} BHVD Labs. &quot;The Cold Shift,&quot; &quot;The Ice Sack,&quot; and &quot;Neuropause&quot; are trademarks of BHVD.</p>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-12)' }}>Contact</h2>
              <p><a href="mailto:hello@bhvd.co" style={{ textDecoration: 'underline' }}>hello@bhvd.co</a></p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
