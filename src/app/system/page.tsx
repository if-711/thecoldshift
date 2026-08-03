import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Ice Sack | A Wearable Dry Cold System',
  description:
    'Physical product description for The Ice Sack by BHVD. Specifications are manufacturer supplied and do not claim health outcomes.',
};

const publishedSpecifications = [
  ['Delivery format', 'Wearable dry cold'],
  ['Cold core', 'Hex-grid phase-change material'],
  ['Protocol access', 'NFC tap to guided audio'],
  ['Preparation', 'Freeze fully for five hours'],
  ['Cold reserve', 'Rated for 15+ minutes at room temperature'],
  ['Approximate weight', '9.5 lb'],
  ['Packed size', '15 × 10 × 5.5 in'],
  ['Published fit', 'Most body types up to 6 ft 4 in'],
] as const;

const systemSequence = [
  {
    number: '01',
    title: 'Prepare',
    body: 'Freeze the system fully. The phase-change material stores the thermal input before the session begins.',
  },
  {
    number: '02',
    title: 'Wear',
    body: 'The outer shell places dry cold across a broad area without water, filling, or drainage.',
  },
  {
    number: '03',
    title: 'Practice',
    body: 'Neuropause provides an optional attentional format during the session. Session duration and stop conditions are governed by the product instructions for use.',
  },
  {
    number: '04',
    title: 'Exit',
    body: 'End the session. Product instructions for use specify stop conditions and rewarming guidance.',
  },
] as const;

const measurementProgram = [
  'Cold-core temperature over time',
  'Skin-contact temperature by body region',
  'Contact consistency across fit profiles',
  'Session tolerability and stop conditions',
  'Protocol completion and adherence',
  'Reported experience before, during, and after use',
] as const;

export default function SystemPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: '3.5rem' }}>
        <article>
          <header
            className="section section-dark"
            style={{
              minHeight: '78vh',
              display: 'flex',
              alignItems: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 72% 28%, rgba(58, 123, 213, 0.3), transparent 28%), linear-gradient(135deg, transparent 34%, rgba(232, 224, 212, 0.04) 34.2%, transparent 34.5%), linear-gradient(45deg, transparent 62%, rgba(58, 123, 213, 0.08) 62.2%, transparent 62.5%)',
              }}
            />
            <div
              className="container"
              style={{
                position: 'relative',
                paddingTop: 'var(--space-24)',
                paddingBottom: 'var(--space-24)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(232, 224, 212, 0.55)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Chapter 07 · System
              </p>
              <h1
                style={{
                  color: 'var(--color-text-on-dark)',
                  fontSize: 'clamp(3.25rem, 9vw, 7rem)',
                  maxWidth: '10ch',
                  marginBottom: 'var(--space-8)',
                }}
              >
                The cold needs a container.
              </h1>
              <p
                style={{
                  maxWidth: '36rem',
                  fontSize: 'var(--text-xl)',
                  color: 'rgba(232, 224, 212, 0.72)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                The Ice Sack is BHVD’s wearable dry cold system.
                Neuropause is the accompanying practice format.
              </p>
            </div>
          </header>

          <section className="section" aria-labelledby="system-role">
            <div
              className="container"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
                gap: 'var(--space-16)',
                alignItems: 'start',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-tertiary)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Input · Structure · Exit
                </p>
                <h2 id="system-role" style={{ marginBottom: 'var(--space-6)' }}>
                  A delivery system, not a promised outcome.
                </h2>
              </div>
              <div className="text-prose">
                <p>
                  Cold is the physical input. Neuropause provides an optional attentional
                  format. The Ice Sack provides a dry cold delivery system.
                </p>
                <p>
                  Its role is specific: provide broad dry cold contact, hold the session
                  to a defined format, and make the beginning and ending clear. What a
                  person experiences inside that format can vary.
                </p>
              </div>
            </div>
          </section>

          <section
            className="section"
            style={{ background: 'var(--color-bg-deep)' }}
            aria-labelledby="system-sequence"
          >
            <div className="container">
              <div style={{ maxWidth: 'var(--max-width-prose)', marginBottom: 'var(--space-12)' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-tertiary)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  The system sequence
                </p>
                <h2 id="system-sequence">From stored cold to deliberate exit.</h2>
              </div>

              <ol
                style={{
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))',
                  borderTop: '1px solid var(--color-border-strong)',
                }}
              >
                {systemSequence.map((step) => (
                  <li
                    key={step.number}
                    style={{
                      padding: 'var(--space-8) var(--space-6) var(--space-8) 0',
                      borderBottom: '1px solid var(--color-border-strong)',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-spectral)',
                        letterSpacing: '0.08em',
                        marginBottom: 'var(--space-6)',
                      }}
                    >
                      {step.number}
                    </span>
                    <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)' }}>
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--text-sm)',
                        lineHeight: 'var(--leading-relaxed)',
                      }}
                    >
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="section" aria-labelledby="published-specifications">
            <div className="container">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 0.72fr) minmax(0, 1.28fr)',
                  gap: 'var(--space-16)',
                  alignItems: 'start',
                }}
                className="system-spec-grid"
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-tertiary)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    Product facts
                  </p>
                  <h2 id="published-specifications" style={{ marginBottom: 'var(--space-6)' }}>
                    Published system configuration.
                  </h2>
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    These are manufacturer-supplied specifications for the Origin Edition.
                    They describe the product and its use format. They are not evidence of
                    physiological, cognitive, recovery, mood, performance, or therapeutic
                    outcomes.
                  </p>
                </div>

                <dl style={{ borderTop: '1px solid var(--color-border-strong)' }}>
                  {publishedSpecifications.map(([term, description]) => (
                    <div
                      key={term}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(8.5rem, 0.75fr) minmax(0, 1.25fr)',
                        gap: 'var(--space-6)',
                        padding: 'var(--space-4) 0',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      <dt
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-xs)',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: 'var(--color-text-tertiary)',
                        }}
                      >
                        {term}
                      </dt>
                      <dd
                        style={{
                          margin: 0,
                          fontFamily: 'var(--font-editorial)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--color-text)',
                        }}
                      >
                        {description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p
                style={{
                  maxWidth: 'var(--max-width-prose)',
                  marginTop: 'var(--space-8)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-tertiary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Cold-reserve rating is based on BHVD test conditions at room temperature.
                Final production specifications and instructions for use govern.
              </p>
            </div>
          </section>

          <section
            className="section section-dark"
            aria-labelledby="evidence-boundary"
          >
            <div className="container">
              <div style={{ maxWidth: 'var(--max-width-wide)' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(232, 224, 212, 0.5)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Product evidence boundary
                </p>
                <h2
                  id="evidence-boundary"
                  style={{
                    color: 'var(--color-text-on-dark)',
                    maxWidth: '16ch',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  Related research is context. Product testing is evidence.
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))',
                    gap: 'var(--space-12)',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: 'var(--color-text-on-dark)',
                        fontSize: 'var(--text-lg)',
                        marginBottom: 'var(--space-4)',
                      }}
                    >
                      What the wider field can tell us
                    </h3>
                    <p
                      style={{
                        color: 'rgba(232, 224, 212, 0.65)',
                        lineHeight: 'var(--leading-relaxed)',
                      }}
                    >
                      Research can explain how humans detect cold, how responses vary,
                      and how different forms of cooling have been studied. Findings from
                      water immersion, cryotherapy, or localized icing do not automatically
                      establish what The Ice Sack does.
                    </p>
                  </div>
                  <div>
                    <h3
                      style={{
                        color: 'var(--color-text-on-dark)',
                        fontSize: 'var(--text-lg)',
                        marginBottom: 'var(--space-4)',
                      }}
                    >
                      What must be measured directly
                    </h3>
                    <p
                      style={{
                        color: 'rgba(232, 224, 212, 0.65)',
                        lineHeight: 'var(--leading-relaxed)',
                      }}
                    >
                      Thermal delivery, contact behavior, tolerability, protocol use,
                      and any product-specific outcome require evidence collected with
                      the actual system under defined conditions.
                    </p>
                  </div>
                </div>

                <Link
                  href="/evidence/"
                  className="btn-secondary"
                  style={{
                    color: 'var(--color-text-on-dark)',
                    borderColor: 'rgba(232, 224, 212, 0.35)',
                    marginTop: 'var(--space-12)',
                  }}
                >
                  Enter the evidence library
                </Link>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="measurement-program">
            <div className="container">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
                  gap: 'var(--space-16)',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-tertiary)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    What comes next
                  </p>
                  <h2 id="measurement-program" style={{ marginBottom: 'var(--space-6)' }}>
                    Build the product record in public.
                  </h2>
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    The category becomes credible when product questions become testable
                    questions. BHVD intends to publish methods, results, and limitations as
                    direct system testing is completed.
                  </p>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    borderTop: '1px solid var(--color-border-strong)',
                  }}
                >
                  {measurementProgram.map((item, index) => (
                    <li
                      key={item}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '2.5rem 1fr',
                        gap: 'var(--space-4)',
                        padding: 'var(--space-4) 0',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-spectral)',
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            className="section"
            style={{ background: 'var(--color-bg-deep)' }}
            aria-labelledby="origin-edition"
          >
            <div className="container">
              <div
                style={{
                  maxWidth: 'var(--max-width-wide)',
                  padding: 'var(--space-12)',
                  border: '1px solid var(--color-border-strong)',
                  background: 'var(--color-bg)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-tertiary)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  The Ice Sack · Origin Edition
                </p>
                <h2 id="origin-edition" style={{ maxWidth: '14ch', marginBottom: 'var(--space-6)' }}>
                  The first system for the practice.
                </h2>
                <p
                  style={{
                    maxWidth: '36rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  See the full product configuration, current availability, safety
                  information, and reservation terms on The Ice Sack website.
                </p>
                <a
                  href="https://www.theicesack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Explore Origin Edition
                </a>
              </div>
            </div>
          </section>

          <section style={{ padding: 'var(--space-8) 0' }}>
            <div className="container">
              <p
                style={{
                  maxWidth: 'var(--max-width-prose)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-tertiary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Publisher disclosure: The Cold Shift is created by BHVD, maker of The
                Ice Sack. Product specifications are identified as manufacturer supplied.
                Scientific context and product-specific evidence are kept separate.
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
