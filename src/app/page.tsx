'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PreviewDisclosure } from '@/components/PreviewDisclosure';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionDivider } from '@/components/SectionDivider';
import { CategoryShift } from '@/components/CategoryShift';
import { DeliveryMethodComparison } from '@/components/DeliveryMethodComparison';

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
                The Cold Shift
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
                Controlled Cold
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
                Cold exposure defined by method, conditions, duration, and exit.
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
                Cold has often been framed as a test of endurance.
                Controlled cold treats it as a designed exposure.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="#category-shift"
                  className="btn-primary"
                >
                  Understand Controlled Cold
                </Link>
                <Link
                  href="/field/input/"
                  className="btn-secondary"
                >
                  Read the Field Guide
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
            SECTION 2 — THE CATEGORY SHIFT
            The main intellectual argument of the page.
            ============================================================ */}
        <section
          id="category-shift"
          className="section"
          style={{ background: 'var(--color-surface)' }}
        >
          <div className="container" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <ScrollReveal motion="rise">
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
                The Shift
              </p>
              <h2 style={{ marginBottom: 'var(--space-4)', maxWidth: 'var(--max-width-prose)' }}>
                Cold exposure is being reframed.
              </h2>
              <p
                className="text-prose"
                style={{ marginBottom: 'var(--space-10)', maxWidth: 'var(--max-width-prose)' }}
              >
                The conventional approach treats cold as a test of will. An emerging
                approach treats it as a defined exposure with documented conditions.
              </p>
            </ScrollReveal>

            <ScrollReveal motion="rise" delay={150}>
              <CategoryShift />
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider variant="thermal" />

        {/* ============================================================
            SECTION 3 — CATEGORY DEFINITION
            ============================================================ */}
        <section className="section narrative-conditions" style={{ background: 'var(--color-bg-dark)', color: 'var(--color-text-on-dark)' }}>
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
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
                Definition
              </p>
              <h2 style={{ marginBottom: 'var(--space-8)', color: 'var(--color-bone)' }}>
                Controlled cold is deliberate cold exposure with a defined delivery method,
                conditions, duration, and exit.
              </h2>
            </ScrollReveal>

            <ScrollReveal motion="rise" delay={150}>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'rgba(232, 224, 212, 0.6)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-6)',
              }}>
                The category includes water immersion, cryostimulation,
                and other designed temperature experiences.
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.45)',
                lineHeight: 'var(--leading-relaxed)',
                padding: 'var(--space-4) 0',
                borderTop: '1px solid rgba(232, 224, 212, 0.08)',
                borderBottom: '1px solid rgba(232, 224, 212, 0.08)',
                fontStyle: 'italic',
              }}>
                These methods are not physiologically identical and should not be
                treated as interchangeable.
              </p>
            </ScrollReveal>
          </div>
        </section>



        {/* ============================================================
            SECTION 5 — BHVD PRACTICE MODEL
            Proprietary framework. NOT the definition of controlled cold.
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
                BHVD Practice Model
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
                Cold is a signal. What follows is a choice.
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '36rem',
                margin: '0 auto var(--space-4)',
              }}>
                BHVD proposes a practice model for observing the interval between
                a sensory signal and deciding what to do next — a conceptual
                framework, not a biological measurement or treatment.
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '36rem',
                margin: '0 auto var(--space-5)',
                fontWeight: 500,
              }}>
                Signal. Notice. Assess. Choose. Transition.
              </p>
              <p style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-tertiary)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '32rem',
                margin: '0 auto var(--space-4)',
                fontStyle: 'italic',
              }}>
                This is a practice framework, not the definition of controlled cold.
                Whether effects transfer beyond the session remains untested.
              </p>
              <Link
                href="/field/signal/"
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
                Explore the practice model →
              </Link>
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

        <SectionDivider variant="signal" />

        {/* ============================================================
            SECTION 6 — METHODS
            Delivery method comparison.
            ============================================================ */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <ScrollReveal motion="rise">
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
                Methods
              </p>
              <h2 style={{ marginBottom: 'var(--space-4)', maxWidth: 'var(--max-width-prose)' }}>
                Cold is delivered in fundamentally different ways.
              </h2>
              <p className="text-prose" style={{ marginBottom: 'var(--space-8)', maxWidth: 'var(--max-width-prose)' }}>
                Each delivery method differs in heat transfer, contact area, coverage,
                preparation, and physiological effect. Findings should not be transferred
                between methods without qualification.
              </p>
            </ScrollReveal>

            <ScrollReveal motion="rise" delay={150}>
              <DeliveryMethodComparison />
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
                  Explore methods in detail →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider variant="signal" />

        {/* ============================================================
            SECTION 7 — EVIDENCE, WITH LIMITS
            ============================================================ */}
        <section
          className="section"
          style={{
            background: 'var(--color-bg-dark)',
            color: 'var(--color-text-on-dark)',
            padding: 'var(--space-24) var(--space-6)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)' }}>
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
                Evidence
              </p>
              <h2 style={{
                color: 'var(--color-bone)',
                marginBottom: 'var(--space-6)',
              }}>
                What research does and does not establish.
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'rgba(232, 224, 212, 0.55)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-4)',
              }}>
                Cold exposure can produce measurable physiological responses under
                defined conditions. Findings vary by method, temperature, duration,
                and population. Evidence for one delivery method does not automatically
                validate another.
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.4)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-8)',
                fontStyle: 'italic',
              }}>
                Cold exposure is not a medical treatment unless a particular product
                has appropriate evidence and regulatory status.
              </p>
              <div style={{ marginTop: 'var(--space-10)' }}>
                <Link
                  href="/evidence/"
                  className="btn-secondary"
                  style={{
                    borderColor: 'rgba(232, 224, 212, 0.2)',
                    color: 'var(--color-bone)',
                    fontSize: 'var(--text-xs)',
                  }}
                >
                  Explore the Evidence Library
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider variant="thermal" />

        {/* ============================================================
            SECTION 9 — ONE IMPLEMENTATION OF CONTROLLED COLD
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
                  One Implementation
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
                  Neuropause is an attention framework for use during a session.
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
                <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
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
                  <Link
                    href="/system/"
                    className="btn-secondary"
                    style={{
                      borderColor: 'rgba(232, 224, 212, 0.2)',
                      color: 'var(--color-bone)',
                      fontSize: 'var(--text-xs)',
                    }}
                  >
                    Product Details
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============================================================
            SECTION 10 — THREE CLEAR PATHS
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
                Read the Field Guide
              </Link>
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
                Visit The Ice Sack
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <PreviewDisclosure />
      <Footer />
    </>
  );
}
