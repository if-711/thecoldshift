'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NeuropauseTimeline } from '@/components/NeuropauseTimeline';
import { PreviewDisclosure } from '@/components/PreviewDisclosure';

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

  const STAGE_NAMES = ['Signal', 'Notice', 'Stay', 'Choose', 'Transition'];
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
            SECTION 1 — THE TRANSITION IS THE PRACTICE
            Category definition. 10-second comprehension target.
            ============================================================ */}
        <section
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
          {/* Background subtle gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(58, 123, 213, 0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

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
              A category initiative by BHVD
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
              The Transition Is the Practice.
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
              Controlled cold is a defined cold session.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.45)',
                maxWidth: '34rem',
                margin: '0 auto var(--space-4)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              The Ice Sack™ delivers the physical input.{' '}
              Neuropause™ structures the nine minutes.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'rgba(232, 224, 212, 0.3)',
                maxWidth: '34rem',
                margin: '0 auto var(--space-12)',
                lineHeight: 'var(--leading-relaxed)',
                letterSpacing: '0.02em',
              }}
            >
              The Cold Shift documents how cold is delivered,
              what cold exposure research supports, and what remains untested.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/field/input/"
                className="btn-primary"
                style={{
                  background: 'var(--color-bone)',
                  color: 'var(--color-black)',
                }}
              >
                Understand Controlled Cold
              </Link>
              <Link
                href="/system/"
                className="btn-secondary"
                style={{
                  borderColor: 'rgba(232, 224, 212, 0.2)',
                  color: 'var(--color-bone)',
                }}
              >
                See The Ice Sack
              </Link>
            </div>
          </div>

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

        {/* ============================================================
            SECTION 2 — WHAT MAKES COLD CONTROLLED?
            Concise definition. Route to deeper Input chapter.
            ============================================================ */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
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
            <h2 style={{ marginBottom: 'var(--space-8)' }}>
              What makes cold controlled?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <p className="text-prose" style={{
                padding: 'var(--space-4) 0',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
              }}>
                Cold exposure varies by delivery method, temperature, contact,
                coverage, duration, and exit.
              </p>
              <p className="text-prose">
                Controlled cold defines those variables in advance.
              </p>
              <p className="text-prose">
                It creates a repeatable session in which sensation, attention,
                and response can be observed together. It does not depend on
                one promised outcome.
              </p>
            </div>

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
                Compare delivery methods →
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3 — ONE SYSTEM. NINE MINUTES.
            Physical system + protocol together before the conceptual model.
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
                One system. Nine minutes.
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'rgba(232, 224, 212, 0.55)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-6)',
              }}>
                The Ice Sack™ is a dry cold containment system.
                You zip in, the cold contact begins, and you can exit whenever needed.
                Neuropause™ structures the session into Entry, Load, and Peak.
              </p>
            </div>

            <NeuropauseTimeline />

            {/* Ownership disclosure + product link */}
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
          </div>
        </section>

        {/* ============================================================
            SECTION 4 — STATE FIELD
            Signal → Notice → Stay → Choose → Transition
            The defining immersive interaction. Conceptual model label visible.
            300vh desktop / 200vh mobile (unchanged).
            ============================================================ */}
        <section className="section" style={{
          background: 'var(--color-bg)',
          paddingBottom: 0,
        }}>
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)', textAlign: 'center' }}>
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
              Signal. Notice. Stay. Choose. Transition.
            </p>
            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '32rem',
              margin: '0 auto',
            }}>
              A BHVD conceptual model for examining the space between
              receiving a signal and choosing what comes next.
            </p>
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

        {/* ============================================================
            SECTION 5 — WE SEPARATE FACT FROM THESIS
            Three categories: Known, Inferred, Untested.
            Transfer honesty statement. Route to Evidence Library.
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
            <h2
              style={{
                color: 'var(--color-bone)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                marginBottom: 'var(--space-10)',
              }}
            >
              We separate fact from thesis.
            </h2>

            <div style={{
              display: 'grid',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-10)',
            }}>
              <div style={{ paddingBottom: 'var(--space-6)', borderBottom: '1px solid rgba(232, 224, 212, 0.1)' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-bone)',
                  marginBottom: 'var(--space-2)',
                }}>
                  Known
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(232, 224, 212, 0.5)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  Evidence-supported physiology and verified product facts.
                </p>
              </div>

              <div style={{ paddingBottom: 'var(--space-6)', borderBottom: '1px solid rgba(232, 224, 212, 0.1)' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-bone)',
                  marginBottom: 'var(--space-2)',
                }}>
                  Inferred
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(232, 224, 212, 0.5)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  Interpretations that connect existing research without claiming direct product proof.
                </p>
              </div>

              <div style={{ paddingBottom: 'var(--space-6)', borderBottom: '1px solid rgba(232, 224, 212, 0.1)' }}>
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
                  BHVD hypotheses requiring product-specific research.
                </p>
              </div>
            </div>

            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'rgba(232, 224, 212, 0.45)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-8)',
              fontStyle: 'italic',
            }}>
              We do not yet know whether practice during controlled cold
              transfers beyond the session. BHVD intends to investigate that question.
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
          </div>
        </section>

        {/* ============================================================
            SECTION 6 — THREE CLEAR PATHS
            End with three actions only. No chapter directory.
            ============================================================ */}
        <section
          className="section"
          style={{
            background: 'var(--color-bg)',
            padding: 'var(--space-24) var(--space-6)',
          }}
        >
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
                background: 'var(--color-bg-dark)',
                color: 'var(--color-bone)',
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
              className="btn-primary"
              style={{
                background: 'var(--color-bone)',
                color: 'var(--color-black)',
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
        </section>
      </main>

      <PreviewDisclosure />
      <Footer />
    </>
  );
}
