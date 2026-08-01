'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChapterNav } from '@/components/ChapterNav';
import { EvidenceBadge } from '@/components/EvidenceDrawer';
import { CHAPTERS } from '@/lib/content/chapters';

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
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const total = heroRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
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
            HERO — First screen. Must communicate concept without scrolling.
            ============================================================ */}
        <section
          ref={heroRef}
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
              A BHVD Field Project
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: 'var(--space-6)',
              }}
            >
              The Cold Shift
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: 400,
                color: 'var(--color-bone)',
                marginBottom: 'var(--space-4)',
                lineHeight: 'var(--leading-snug)',
              }}
            >
              Cold is the input. The shift is the practice.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'rgba(232, 224, 212, 0.55)',
                maxWidth: '32rem',
                margin: '0 auto var(--space-4)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              A field guide to controlled cold, sensory awareness,
              and deliberate state practice.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'rgba(232, 224, 212, 0.4)',
                maxWidth: '28rem',
                margin: '0 auto var(--space-12)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              Cold creates a clear sensory event. What follows is individual.
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
                Enter the Field
              </Link>
              <Link
                href="/evidence/"
                className="btn-secondary"
                style={{
                  borderColor: 'rgba(232, 224, 212, 0.2)',
                  color: 'var(--color-bone)',
                }}
              >
                See the Evidence
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
            STATE FIELD — The central interactive visual
            ============================================================ */}
        <section
          style={{
            position: 'relative',
            background: 'var(--color-bg-dark)',
            padding: '0',
          }}
        >
          <div style={{ maxWidth: '100%' }}>
            <StateField progress={scrollProgress} />
          </div>
        </section>

        {/* ============================================================
            CHAPTER OVERVIEW — Seven chapters
            ============================================================ */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ marginBottom: 'var(--space-12)' }}>
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
                The Field Guide
              </p>
              <h2 style={{ maxWidth: '36rem' }}>
                Seven chapters. One practice.
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
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
                    display: 'block',
                    padding: 'var(--space-6)',
                    border: '1px solid var(--color-border)',
                    transition: 'border-color var(--duration-fast), background var(--duration-fast)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                    e.currentTarget.style.background = 'rgba(0,0,0,0.015)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-tertiary)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {String(ch.number).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontSize: 'var(--text-xl)',
                      marginTop: 'var(--space-3)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    {ch.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    {ch.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            EVIDENCE APPROACH — How claims are classified
            ============================================================ */}
        <section className="section" style={{ background: 'var(--color-bg-deep)' }}>
          <div className="container" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <div style={{ marginBottom: 'var(--space-12)' }}>
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
                Evidence Classification
              </p>
              <h2 style={{ maxWidth: '32rem' }}>
                Every claim has a source and a classification.
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              {[
                { level: 'established' as const, desc: 'Widely accepted mechanisms supported by authoritative references, replicated research, or strong reviews.' },
                { level: 'supported' as const, desc: 'A reasonable interpretation supported by multiple sources, with meaningful limitations.' },
                { level: 'emerging' as const, desc: 'Preliminary, context-dependent, or limited evidence that requires qualification.' },
                { level: 'hypothesis' as const, desc: 'A conceptual model proposed by BHVD that has not been established scientifically.' },
                { level: 'subjective' as const, desc: 'An individual report or phenomenological description that cannot be generalized.' },
              ].map(({ level, desc }) => (
                <div
                  key={level}
                  style={{
                    padding: 'var(--space-6)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-bg)',
                  }}
                >
                  <EvidenceBadge level={level} />
                  <p
                    style={{
                      marginTop: 'var(--space-4)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            THESIS STATEMENT
            ============================================================ */}
        <section
          className="section"
          style={{
            background: 'var(--color-bg-dark)',
            color: 'var(--color-text-on-dark)',
            padding: 'var(--space-32) var(--space-6)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                fontWeight: 400,
                lineHeight: 'var(--leading-snug)',
                color: 'var(--color-bone)',
              }}
            >
              Cold provides a clear and controllable sensory input.
              People experience and interpret that input differently.
              The practice is learning to notice sensation, observe the impulse
              to react, and make a deliberate choice about what happens next.
            </p>
            <div style={{ marginTop: 'var(--space-8)' }}>
              <EvidenceBadge level="hypothesis" />
            </div>
          </div>
        </section>

        {/* ============================================================
            NEWSLETTER — One restrained invitation
            ============================================================ */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--max-width-prose)', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'var(--text-xl)',
                fontWeight: 500,
                marginBottom: 'var(--space-4)',
              }}
            >
              Follow the field as the evidence, practice, and system develop.
            </p>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-tertiary)',
                marginBottom: 'var(--space-8)',
              }}
            >
              Newsletter integration pending. Contact{' '}
              <a href="mailto:hello@bhvd.co" style={{ color: 'var(--color-text-secondary)', textDecoration: 'underline' }}>
                hello@bhvd.co
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
