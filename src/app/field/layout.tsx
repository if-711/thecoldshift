import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChapterNav } from '@/components/ChapterNav';

export default function FieldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '3.5rem' }}>
        <div className="container" style={{ paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-2)' }}>
          <ChapterNav />
        </div>
        <main id="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
