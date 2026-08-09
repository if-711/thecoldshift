import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  claims,
  sources,
  getSourceById,
} from '@/lib/content/schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return sources.map((source) => ({ id: source.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const source = getSourceById(id);
  if (!source) return {};

  return {
    title: `${source.title} | Source Record`,
    description: `${source.journal}, ${source.year}. PMID ${source.pmid}.`,
  };
}

export default async function SourceRecordPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const source = getSourceById(id);
  if (!source) notFound();
  const relatedClaims = claims.filter(
    (claim) => claim.approvalStatus === 'approved' && claim.sourceIds.includes(source.id)
  );

  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article className="section">
          <div className="container" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <header style={{ marginBottom: 'var(--space-12)', maxWidth: 'var(--max-width-prose)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Primary source record · PMID {source.pmid}
              </p>
              <h1 style={{ fontSize: 'var(--text-4xl)', lineHeight: 'var(--leading-snug)', marginBottom: 'var(--space-6)' }}>
                {source.title}
              </h1>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                {source.authors.join(', ')}
              </p>
            </header>

            <dl
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 15rem), 1fr))',
                gap: 'var(--space-6)',
                padding: 'var(--space-6)',
                background: 'var(--color-bg-deep)',
                marginBottom: 'var(--space-12)',
              }}
            >
              <SourceField label="Journal" value={`${source.journal}, ${source.year}`} />
              <SourceField label="Study type" value={source.studyType.replaceAll('_', ' ')} />
              <SourceField label="Cold method" value={source.coldMethod.replaceAll('_', ' ')} />
              <SourceField label="DOI" value={source.doi} />
            </dl>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
                gap: 'var(--space-12)',
                marginBottom: 'var(--space-16)',
              }}
            >
              <SourceSection title="Population" body={source.population} />
              <SourceSection title="Exposure conditions" body={`${source.temperature}. ${source.duration}.`} />
              <SourceSection title="Outcome measured" body={source.outcomeMeasured} />
              <SourceSection title="Limitations" body={source.limitations} />
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-16)' }}>
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open primary record
              </a>
              <a
                href={`https://doi.org/${source.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Open DOI
              </a>
            </div>

            <section aria-labelledby="related-claims">
              <h2 id="related-claims" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-8)' }}>
                Claims using this source
              </h2>
              <div style={{ borderTop: '1px solid var(--color-border-strong)' }}>
                {relatedClaims.map((claim) => (
                  <Link
                    href={`/evidence/claims/${claim.id}/`}
                    key={claim.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1fr) auto',
                      gap: 'var(--space-6)',
                      padding: 'var(--space-6) 0',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    <span>{claim.statement}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </section>

            <Link
              href="/evidence/"
              style={{
                display: 'inline-block',
                marginTop: 'var(--space-12)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-spectral)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Return to Evidence
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function SourceField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-tertiary)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: 'var(--space-2)',
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: 0, color: 'var(--color-text-secondary)', textTransform: 'capitalize' }}>
        {value}
      </dd>
    </div>
  );
}

function SourceSection({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>{title}</h2>
      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
        {body}
      </p>
    </section>
  );
}
