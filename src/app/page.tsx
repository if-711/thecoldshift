'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StatementTypeBadge } from '@/components/StatementTypeBadge';
import { NeuropauseTimeline } from '@/components/NeuropauseTimeline';
import { PreviewDisclosure } from '@/components/PreviewDisclosure';
import { CHAPTERS } from '@/lib/content/chapters';

// Lazy-load State Field (Three.js)
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
            Category definition and thesis.
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
          {/* Subtle radial glow */}
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
              We usually notice a state after it has already begun shaping
              what we feel, think, and do. The Cold Shift starts earlier.
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
              Controlled cold provides a clear, bounded session in which
              sensation, attention, and response can be observed together.
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
              The Ice Sack™ delivers the physical input.{' '}
              Neuropause™ structures the nine minutes.{' '}
              The Cold Shift maps what is known, what is inferred,
              and what remains to be tested.
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
                See the Ice Sack
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
            SECTION 2 — WHAT CONTROLLED COLD MEANS
            Editorial explanation. No scroll spectacle.
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
                Controlled cold is a deliberately designed cold experience defined
                by its delivery method, exposure conditions, duration, and intended use.
              </p>
              <p className="text-prose">
                Most cold exposure is improvised. An ice bath filled by estimation.
                A cold shower with no defined duration. A plunge without a framework
                for what to notice or when to stop.
              </p>
              <p className="text-prose">
                Controlled cold is different. The delivery is bounded: a defined medium,
                a contained surface, and described exposure conditions. The duration is
                structured: nine minutes, divided into three attentional phases. The
                practice is deliberate and repeatable — not endurance,
                not recovery, but attention.
              </p>
              <p className="text-prose">
                The question is not how much cold you can tolerate.
                The question is what you notice while it is happening.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3 — SIGNAL, NOTICE, STAY, CHOOSE, TRANSITION
            The State Field — one defining immersive interaction.
            Height adapts: 300vh desktop, shorter mobile.
            ============================================================ */}
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
            SECTION 4 — NINE MINUTES OF NEUROPAUSE
            Entry, Load, Peak.
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
                Neuropause™
              </p>
              <h2
                style={{
                  color: 'var(--color-bone)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Nine minutes. Three phases.
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'rgba(232, 224, 212, 0.55)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                Neuropause structures the cold session into Entry, Load, and Peak.
                Each phase shifts the attentional task — from orientation, to settling,
                to observation.
              </p>
            </div>

            <NeuropauseTimeline />
          </div>
        </section>

        {/* ============================================================
            SECTION 5 — THE ICE SACK
            Product, role, conversion.
            ============================================================ */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ maxWidth: 'var(--max-width-prose)', marginBottom: 'var(--space-12)' }}>
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
                The System
              </p>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>
                The Ice Sack
              </h2>
              <p className="text-prose">
                A dry cold containment system by BHVD. No water. No filling.
                The session begins when you put it on. It ends when you take it off
                or when the protocol completes.
              </p>
              <p className="text-prose" style={{ marginTop: 'var(--space-4)' }}>
                The Ice Sack delivers the cold input that Neuropause structures.
                It is designed for a consistent, repeatable session — the same
                controlled environment every time.
              </p>
            </div>

            <div style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-deep)',
              maxWidth: '28rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
                marginBottom: 'var(--space-3)',
              }}>
                The Ice Sack™ Origin Edition
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-6)',
              }}>
                Dry cold containment for the Neuropause protocol.
              </p>
              <a
                href="https://bhvd.co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                See the Ice Sack
              </a>
              <p style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-tertiary)',
                lineHeight: 'var(--leading-relaxed)',
                marginTop: 'var(--space-4)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em',
              }}>
                BHVD participates in the controlled cold category through
                The Ice Sack, its dry cold containment product. Cold Shift defines
                the broader category and does not establish guaranteed outcomes
                for any individual product.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 6 — WHAT WE KNOW AND WHAT WE ARE INVESTIGATING
            Evidence boundary + Question Beyond Cold + conversion.
            ============================================================ */}
        <section
          className="section"
          style={{
            background: 'var(--color-bg-dark)',
            color: 'var(--color-text-on-dark)',
            padding: 'var(--space-32) var(--space-6)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--max-width-wide)' }}>
            {/* Evidence boundary */}
            <div style={{ marginBottom: 'var(--space-16)', maxWidth: 'var(--max-width-prose)' }}>
              <h2
                style={{
                  color: 'var(--color-bone)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  marginBottom: 'var(--space-8)',
                }}
              >
                We separate fact from thesis.
              </h2>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-8)',
              }}>
                {[
                  'Established physiology.',
                  'Research interpretation.',
                  'BHVD conceptual models.',
                  'Subjective experience.',
                  'Verified product facts.',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(232, 224, 212, 0.6)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.4)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-6)',
              }}>
                Each is treated differently because they are different.
              </p>

              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.45)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-4)',
              }}>
                Most published research concerns cold water immersion or
                environmental exposure. Those findings provide context, not
                automatic proof for showers, localized cooling, wearable systems,
                cryotherapy, or dry cold containment. Product specific outcomes
                require product specific evidence.
              </p>

              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.35)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-8)',
              }}>
                Controlled cold is not a medical treatment category. Products
                should not be understood as diagnosing, treating, curing, or
                preventing a medical condition unless the specific intended use
                has appropriate evidence and regulatory authorization.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link
                  href="/evidence/"
                  className="btn-secondary"
                  style={{
                    borderColor: 'rgba(232, 224, 212, 0.2)',
                    color: 'var(--color-bone)',
                    fontSize: 'var(--text-xs)',
                  }}
                >
                  Explore the Evidence Standard
                </Link>
                <a
                  href="https://bodymindstate.com/research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    borderColor: 'rgba(232, 224, 212, 0.12)',
                    color: 'rgba(232, 224, 212, 0.5)',
                    fontSize: 'var(--text-xs)',
                  }}
                >
                  Research on Body Mind State ↗
                </a>
              </div>
            </div>

            {/* The question beyond cold */}
            <div style={{
              marginBottom: 'var(--space-16)',
              paddingTop: 'var(--space-12)',
              borderTop: '1px solid rgba(232, 224, 212, 0.1)',
              maxWidth: 'var(--max-width-prose)',
            }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(232, 224, 212, 0.3)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                The Question Beyond Cold
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  fontWeight: 400,
                  color: 'var(--color-bone)',
                  lineHeight: 'var(--leading-snug)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Can repeated practice help someone notice a state earlier,
                remain present with its signals, and choose a response
                with greater awareness?
              </p>

              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.45)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-6)',
              }}>
                We do not yet know whether practice during controlled cold
                transfers beyond the session. BHVD intends to investigate that question.
              </p>

              <StatementTypeBadge
                type="bhvd_conceptual_model"
                confidence="no_direct_evidence"
                transfer="Untested"
              />
            </div>

            {/* Compact field guide navigation */}
            <div style={{
              paddingTop: 'var(--space-12)',
              borderTop: '1px solid rgba(232, 224, 212, 0.1)',
              marginBottom: 'var(--space-16)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(232, 224, 212, 0.3)',
                marginBottom: 'var(--space-6)',
              }}>
                Explore the Field
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-6)',
              }}>
                {CHAPTERS.map((ch) => (
                  <Link
                    key={ch.id}
                    href={
                      ch.slug === 'evidence'
                        ? '/evidence/'
                        : ch.slug === 'system'
                          ? '/system/'
                          : `/field/${ch.slug}/`
                    }
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      color: 'rgba(232, 224, 212, 0.4)',
                      letterSpacing: '0.06em',
                      padding: 'var(--space-2) var(--space-3)',
                      border: '1px solid rgba(232, 224, 212, 0.1)',
                      textDecoration: 'none',
                      transition: 'border-color var(--duration-fast), color var(--duration-fast)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232, 224, 212, 0.3)';
                      e.currentTarget.style.color = 'rgba(232, 224, 212, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232, 224, 212, 0.1)';
                      e.currentTarget.style.color = 'rgba(232, 224, 212, 0.4)';
                    }}
                  >
                    {String(ch.number).padStart(2, '0')} {ch.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/field/input/"
                className="btn-primary"
                style={{
                  background: 'var(--color-bone)',
                  color: 'var(--color-black)',
                }}
              >
                Start with Controlled Cold
              </Link>
            </div>

            {/* Conversion actions */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              paddingTop: 'var(--space-12)',
              borderTop: '1px solid rgba(232, 224, 212, 0.1)',
              maxWidth: '24rem',
            }}>
              <a
                href="https://bhvd.co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'var(--color-bone)',
                  color: 'var(--color-black)',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                Explore the Ice Sack
              </a>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.4)',
              }}>
                Receive research, product, and field updates.{' '}
                <a
                  href="mailto:hello@bhvd.co"
                  style={{ color: 'rgba(232, 224, 212, 0.55)', textDecoration: 'underline' }}
                >
                  Follow the field
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <PreviewDisclosure />
      <Footer />
    </>
  );
}
