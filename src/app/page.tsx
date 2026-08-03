'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PreviewDisclosure } from '@/components/PreviewDisclosure';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionDivider } from '@/components/SectionDivider';

// Lazy-load State Field (Three.js) — first screen renders before it loads
const StateField = dynamic(
  () => import('@/components/StateField').then((m) => ({ default: m.StateField })),
  {
    ssr: false,
    loading: () => (
      <div className="state-field-container">
        <div className="state-field-fallback">
          <span style={{ opacity: 0.4 }}>Loading State Field…</span>
        </div>
      </div>
    ),
  }
);

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const fieldSectionRef = useRef<HTMLElement>(null);

  const STAGE_NAMES = ['Signal', 'Notice', 'Assess', 'Choose', 'Transition'];
  const stageName = useMemo(() => {
    const idx = Math.min(Math.floor(scrollProgress * STAGE_NAMES.length), STAGE_NAMES.length - 1);
    return STAGE_NAMES[idx];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollProgress]);

  useEffect(() => {
    const handleScroll = () => {
      if (!fieldSectionRef.current) return;
      const rect = fieldSectionRef.current.getBoundingClientRect();
      const sectionHeight = fieldSectionRef.current.offsetHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - window.innerHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />

      <main id="main-content">
        {/* ============================================================
            SECTION 1 — HERO
            Category definition. 10-second comprehension target.
            ============================================================ */}
        <section
          className="narrative-hero"
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'var(--color-bg-dark)',
            color: 'var(--color-text-on-dark)',
            overflow: 'hidden',
            padding: 'var(--space-24) var(--space-6)',
          }}
        >
          {/* Atmospheric ice-blue glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse 80% 50% at 50% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 60%),
                radial-gradient(ellipse 40% 40% at 50% 80%, rgba(59, 130, 246, 0.04) 0%, transparent 50%)
              `,
              pointerEvents: 'none',
            }}
          />

          <ScrollReveal motion="compress" delay={200}>
            <div style={{ position: 'relative', textAlign: 'center', maxWidth: '52rem', zIndex: 1 }}>
              {/* Wordmark */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(232, 224, 212, 0.4)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                A field guide to controlled cold
              </p>

              <h1
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  marginBottom: 'var(--space-8)',
                }}
              >
                Cold is a signal. What follows is a choice.
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: 400,
                  color: 'rgba(232, 224, 212, 0.7)',
                  maxWidth: '36rem',
                  margin: '0 auto var(--space-6)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Controlled cold is cold exposure with defined delivery conditions, duration, and exit.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'rgba(232, 224, 212, 0.3)',
                  maxWidth: '36rem',
                  margin: '0 auto var(--space-12)',
                  lineHeight: 'var(--leading-relaxed)',
                  letterSpacing: '0.02em',
                }}
              >
                The Cold Shift examines how cold is delivered, how the body detects it,
                what research supports, and what remains untested.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/field/input/"
                  className="btn-primary"
                >
                  Understand controlled cold
                </Link>
                <Link
                  href="/evidence/"
                  className="btn-secondary"
                >
                  Explore the evidence
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: 'var(--space-8)',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(232, 224, 212, 0.25)',
            }}
          >
            Scroll to explore
          </div>
        </section>

        <SectionDivider variant="signal" />

        {/* ============================================================
            SECTION 2 — WHAT MAKES COLD CONTROLLED?
            ============================================================ */}
        <section className="section narrative-conditions" style={{ background: 'var(--color-surface)' }}>
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
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
              Controlled Cold
            </p>

            <ScrollReveal motion="rise">
              <h2 style={{ marginBottom: 'var(--space-8)' }}>
                Control the conditions before interpreting the response.
              </h2>
            </ScrollReveal>

            <ScrollReveal motion="rise" delay={150}>
              <p className="text-prose" style={{
                padding: 'var(--space-4) 0',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
              }}>
                Cold exposure changes with the medium, temperature, contact area,
                coverage, duration, and method of exit.
              </p>
              <p className="text-prose">
                Controlled cold defines those conditions in advance. That makes a session
                more describable and repeatable. It does not establish a medical, recovery,
                performance, or psychological outcome.
              </p>
            </ScrollReveal>

            <ScrollReveal motion="rise" delay={300}>
              <div style={{ marginTop: 'var(--space-8)' }}>
                <Link
                  href="/field/input/"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.06em',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-border)',
                    paddingBottom: 'var(--space-1)',
                    transition: 'color var(--duration-fast)',
                  }}
                >
                  Compare cold delivery methods →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider variant="thermal" />

        {/* ============================================================
            SECTION 3 — ONE IMPLEMENTATION OF CONTROLLED COLD
            ============================================================ */}
        <section
          className="section"
          style={{
            background: 'var(--color-bg-dark)',
            color: 'var(--color-text-on-dark)',
            padding: 'var(--space-24) var(--space-6)',
          }}
        >
          <div className="container">
            <div style={{ marginBottom: 'var(--space-12)', maxWidth: 'var(--max-width-prose)' }}>
              <ScrollReveal motion="rise">
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(232, 224, 212, 0.4)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  The System
                </p>
                <h2
                  style={{
                    color: 'var(--color-bone)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  One implementation of controlled cold.
                </h2>
              </ScrollReveal>

              <ScrollReveal motion="rise" delay={150}>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'rgba(232, 224, 212, 0.55)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-6)',
                }}>
                  The Ice Sack is BHVD&apos;s wearable dry cold system.
                  Neuropause is the accompanying practice format.
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(232, 224, 212, 0.4)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-6)',
                }}>
                  Product specific thermal performance, tolerability, safety, and outcomes
                  require evidence collected with the final product under defined conditions.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal motion="rise" delay={250}>
              <div style={{
                marginTop: 'var(--space-12)',
                paddingTop: 'var(--space-8)',
                borderTop: '1px solid rgba(232, 224, 212, 0.1)',
                maxWidth: 'var(--max-width-prose)',
              }}>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(232, 224, 212, 0.4)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-6)',
                }}>
                  The Cold Shift is published by BHVD, creator of The Ice Sack and Neuropause.
                </p>
                <a
                  href="https://www.theicesack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    borderColor: 'rgba(232, 224, 212, 0.2)',
                    color: 'var(--color-bone)',
                    fontSize: 'var(--text-xs)',
                  }}
                >
                  See The Ice Sack
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider variant="perception" />

        {/* ============================================================
            SECTION 4 — STATE FIELD
            Signal → Notice → Assess → Choose → Transition
            ============================================================ */}
        <section className="section" style={{
          background: 'var(--color-surface)',
          paddingBottom: 0,
        }}>
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)', textAlign: 'center' }}>
            <ScrollReveal motion="rise">
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-tertiary)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                BHVD Conceptual Model
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  fontWeight: 500,
                  lineHeight: 'var(--leading-snug)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Signal. Notice. Assess. Choose. Transition.
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '32rem',
                margin: '0 auto',
              }}>
                A model for observing the interval between receiving a sensory signal
                and deciding what to do next.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section
          ref={fieldSectionRef}
          className="state-field-section"
          aria-label={`State Practice Model — current stage: ${stageName}`}
        >
          <div style={{ position: 'sticky', top: 0, height: '100vh' }}>
            <StateField progress={scrollProgress} />
          </div>
        </section>
        <div id="after-state-field" />

        <SectionDivider variant="boundary" />

        {/* ============================================================
            SECTION 5 — SEPARATE SUPPORT FROM INTERPRETATION
            Three categories with structurally different visual states.
            ============================================================ */}
        <section
          className="section"
          style={{
            background: 'var(--color-bg-dark)',
            color: 'var(--color-text-on-dark)',
            padding: 'var(--space-32) var(--space-6)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
            <ScrollReveal motion="resistance">
              <h2
                style={{
                  color: 'var(--color-bone)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  marginBottom: 'var(--space-10)',
                }}
              >
                Separate support from interpretation.
              </h2>
            </ScrollReveal>

            <div className="narrative-evidence" style={{
              display: 'grid',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-10)',
            }}>
              {/* Supported — solid left border, grounded */}
              <ScrollReveal motion="rise">
                <div
                  className="evidence-category"
                  data-level="supported"
                  style={{
                    paddingBottom: 'var(--space-6)',
                    paddingLeft: 'var(--space-6)',
                    borderBottom: '1px solid rgba(232, 224, 212, 0.1)',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-bone)',
                    marginBottom: 'var(--space-2)',
                  }}>
                    Supported
                  </p>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(232, 224, 212, 0.5)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}>
                    Statements grounded in identified research or verified product records.
                  </p>
                </div>
              </ScrollReveal>

              {/* Interpreted — dashed left border, lighter density */}
              <ScrollReveal motion="rise" delay={100}>
                <div
                  className="evidence-category"
                  data-level="interpreted"
                  style={{
                    paddingBottom: 'var(--space-6)',
                    paddingLeft: 'var(--space-6)',
                    borderBottom: '1px solid rgba(232, 224, 212, 0.1)',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-bone)',
                    marginBottom: 'var(--space-2)',
                  }}>
                    Interpreted
                  </p>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(232, 224, 212, 0.5)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}>
                    Reasoned connections whose limitations and product relevance are stated.
                  </p>
                </div>
              </ScrollReveal>

              {/* Untested — dotted left border, open/uncertain feel */}
              <ScrollReveal motion="rise" delay={200}>
                <div
                  className="evidence-category"
                  data-level="untested"
                  style={{
                    paddingBottom: 'var(--space-6)',
                    paddingLeft: 'var(--space-6)',
                    borderBottom: '1px solid rgba(232, 224, 212, 0.1)',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-bone)',
                    marginBottom: 'var(--space-2)',
                  }}>
                    Untested
                  </p>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(232, 224, 212, 0.5)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}>
                    BHVD questions requiring direct research.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal motion="rise" delay={300}>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.45)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-8)',
                fontStyle: 'italic',
              }}>
                It is not known whether attention practiced during controlled cold
                transfers beyond the session.
              </p>

              <Link
                href="/evidence/"
                className="btn-secondary"
                style={{
                  borderColor: 'rgba(232, 224, 212, 0.2)',
                  color: 'var(--color-bone)',
                  fontSize: 'var(--text-xs)',
                }}
              >
                Explore the Evidence
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ============================================================
            SECTION 6 — THREE CLEAR PATHS
            ============================================================ */}
        <section
          className="section"
          style={{
            background: 'var(--color-surface)',
            padding: 'var(--space-24) var(--space-6)',
          }}
        >
          <ScrollReveal motion="rise">
            <div className="container" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-4)',
              maxWidth: '24rem',
              margin: '0 auto',
            }}>
              <Link
                href="/field/input/"
                className="btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                Start with Controlled Cold
              </Link>
              <a
                href="https://www.theicesack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spectral"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                Explore The Ice Sack
              </a>
              <Link
                href="/evidence/"
                className="btn-secondary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                Review the Evidence
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <PreviewDisclosure />
      <Footer />
    </>
  );
}
