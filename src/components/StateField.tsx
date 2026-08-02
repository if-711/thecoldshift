'use client';

import { useRef, useEffect, useState, useSyncExternalStore } from 'react';

/**
 * State Practice Model stages — the BHVD conceptual framework.
 * NOT a biological sequence, autonomic cycle, or guaranteed outcome.
 */
const STAGES = ['SIGNAL', 'NOTICE', 'STAY', 'CHOOSE', 'TRANSITION'] as const;

// Reduced motion media query via useSyncExternalStore (React 19 pattern)
const reducedMotionQuery =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;

function subscribeReducedMotion(callback: () => void) {
  reducedMotionQuery?.addEventListener('change', callback);
  return () => reducedMotionQuery?.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  return reducedMotionQuery?.matches ?? false;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * StateField — Full-screen immersive scroll visualization.
 *
 * Implements:
 * 1. BHVD State Practice Model — Signal → Notice → Stay → Choose → Transition.
 * 2. WebGL particle field synchronized to scroll progress.
 * 3. Reduced-motion: static stage cards with manual navigation.
 * 4. WebGL fallback: CSS-only gradient field.
 * 5. Skip interaction button.
 * 6. No animation when outside viewport.
 */
export function StateField({ progress = 0 }: { progress?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const progressRef = useRef(progress);
  const [webglSupported, setWebglSupported] = useState(true);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [manualStage, setManualStage] = useState(0);

  // Sync progress prop to ref (outside render, inside effect)
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // Derive current stage
  const currentStage = reducedMotion
    ? manualStage
    : Math.min(Math.floor(progress * STAGES.length), STAGES.length - 1);
const STAGE_DESCRIPTIONS = [
  'A sensory event becomes noticeable.',
  'Attention identifies what is happening.',
  'Remain with the experience while respecting safety limits.',
  'Select whether and how to continue.',
  'The experience continues, changes, or ends.',
] as const;

/** Deterministic stage colors — no random generation */
const STAGE_COLORS = [
  { r: 0.65, g: 0.75, b: 0.85 },  // SIGNAL — cool steel
  { r: 0.45, g: 0.60, b: 0.82 },  // NOTICE — deeper blue
  { r: 0.35, g: 0.55, b: 0.78 },  // STAY — settled indigo
  { r: 0.30, g: 0.50, b: 0.75 },  // CHOOSE — focused
  { r: 0.55, g: 0.70, b: 0.80 },  // TRANSITION — clarity
] as const;

  // Initialize Three.js ONCE (only when motion is allowed)
  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let THREE: any = null;
    let animating = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let renderer: any = null;

    const init = async () => {
      try {
        THREE = await import('three');

        const { width, height } = container.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio, 2);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 5);

        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
        renderer.setSize(width, height);
        renderer.setPixelRatio(dpr);

        // Particle field
        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const basePositions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const theta = (i / particleCount) * Math.PI * 2 * 6.28 + i * 0.1;
          const phi = Math.acos(2 * ((i * 0.618033988749895) % 1) - 1);
          const r = 1.5 + (i % 7) * 0.2;

          const x = r * Math.sin(phi) * Math.cos(theta);
          const y = r * Math.sin(phi) * Math.sin(theta);
          const z = r * Math.cos(phi);

          positions[i3] = x;
          positions[i3 + 1] = y;
          positions[i3 + 2] = z;
          basePositions[i3] = x;
          basePositions[i3 + 1] = y;
          basePositions[i3 + 2] = z;

          const brightness = 0.3 + (i % 10) * 0.04;
          colors[i3] = brightness * 0.95;
          colors[i3 + 1] = brightness * 0.92;
          colors[i3 + 2] = brightness * 0.88;

          sizes[i] = 1.5 + (i % 5) * 0.5;

          velocities[i3] = ((i * 7 % 100) / 100 - 0.5) * 0.002;
          velocities[i3 + 1] = ((i * 13 % 100) / 100 - 0.5) * 0.002;
          velocities[i3 + 2] = ((i * 19 % 100) / 100 - 0.5) * 0.002;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const vertexShader = `
          attribute float size;
          varying vec3 vColor;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `;

        const fragmentShader = `
          varying vec3 vColor;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float alpha = smoothstep(0.5, 0.15, d);
            gl_FragColor = vec4(vColor, alpha * 0.6);
          }
        `;

        const material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          vertexColors: true,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const lightGeo = new THREE.SphereGeometry(0.08, 16, 16);
        const lightMat = new THREE.MeshBasicMaterial({
          color: 0x3a7bd5,
          transparent: true,
          opacity: 0.4,
        });
        const lightPoint = new THREE.Mesh(lightGeo, lightMat);
        scene.add(lightPoint);

        const applyProgress = (p: number, time: number) => {
          const posAttr = geometry.getAttribute('position');
          const colorAttr = geometry.getAttribute('color');

          const stageIdx = Math.min(Math.floor(p * STAGES.length), STAGES.length - 1);
          const stageColor = STAGE_COLORS[stageIdx];
          const nextColor = STAGE_COLORS[Math.min(stageIdx + 1, STAGES.length - 1)];
          const stageProgress = (p * STAGES.length) - stageIdx;

          const targetR = stageColor.r + (nextColor.r - stageColor.r) * stageProgress;
          const targetG = stageColor.g + (nextColor.g - stageColor.g) * stageProgress;
          const targetB = stageColor.b + (nextColor.b - stageColor.b) * stageProgress;

          const compression = 1 - p * 0.35;

          for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            posAttr.array[i3] = basePositions[i3] * compression + velocities[i3] * time * 50;
            posAttr.array[i3 + 1] = basePositions[i3 + 1] * compression + velocities[i3 + 1] * time * 50;
            posAttr.array[i3 + 2] = basePositions[i3 + 2] * compression + velocities[i3 + 2] * time * 50;

            posAttr.array[i3 + 1] += Math.sin(time + i * 0.01) * 0.0005 * (1 + p * 3);

            const x = posAttr.array[i3];
            const y = posAttr.array[i3 + 1];
            const z = posAttr.array[i3 + 2];
            const dist = Math.sqrt(x * x + y * y + z * z);
            if (dist > 3 * compression) {
              posAttr.array[i3] *= 0.995;
              posAttr.array[i3 + 1] *= 0.995;
              posAttr.array[i3 + 2] *= 0.995;
            }

            const particleBrightness = 0.3 + (i % 10) * 0.03;
            colorAttr.array[i3] = particleBrightness * (1 - p * 0.5) + targetR * p * 0.5 + particleBrightness * 0.5;
            colorAttr.array[i3 + 1] = particleBrightness * (1 - p * 0.5) + targetG * p * 0.5 + particleBrightness * 0.5;
            colorAttr.array[i3 + 2] = particleBrightness * (1 - p * 0.5) + targetB * p * 0.5 + particleBrightness * 0.5;
          }

          posAttr.needsUpdate = true;
          colorAttr.needsUpdate = true;

          lightMat.opacity = 0.2 + Math.sin(time * 2) * 0.15 + p * 0.3;
          lightPoint.scale.setScalar(1 + Math.sin(time) * 0.1 + p * 0.5);

          particles.rotation.y = time * 0.1;
          particles.rotation.x = Math.sin(time * 0.05) * 0.1;
        };

        let time = 0;
        const animate = () => {
          if (!animating) return;
          frameRef.current = requestAnimationFrame(animate);
          time += 0.003;
          applyProgress(progressRef.current, time);
          renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
          const { width: w, height: h } = container.getBoundingClientRect();
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };

        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
      } catch {
        setWebglSupported(false);
      }
    };

    const cleanupPromise = init();
    return () => {
      animating = false;
      cancelAnimationFrame(frameRef.current);
      cleanupPromise?.then((fn) => fn?.());
      renderer?.dispose?.();
    };
  }, [reducedMotion]);

  // Static stages for reduced motion / fallback
  const renderStages = () => (
    <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
        {STAGES.map((stage, i) => (
          <button
            key={stage}
            type="button"
            onClick={() => setManualStage(i)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              padding: 'var(--space-3) var(--space-4)',
              borderLeft: i === currentStage
                ? '2px solid rgba(255,255,255,0.6)'
                : '2px solid rgba(255,255,255,0.1)',
              transition: 'border-color 0.3s',
            }}
          >
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              color: i === currentStage ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
              marginBottom: 'var(--space-1)',
              transition: 'color 0.3s',
            }}>
              {stage}
            </span>
            <span style={{
              display: 'block',
              fontSize: 'var(--text-sm)',
              color: i === currentStage ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)',
              lineHeight: 'var(--leading-relaxed)',
              transition: 'color 0.3s',
            }}>
              {STAGE_DESCRIPTIONS[i]}
            </span>
          </button>
        ))}
      </div>
      <p style={{
        fontSize: 'var(--text-xs)',
        color: 'rgba(255,255,255,0.3)',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.05em',
      }}>
        BHVD State Practice Model · Conceptual framework
      </p>
    </div>
  );

  return (
    <div className="state-field-container" ref={containerRef}>
      {!reducedMotion && webglSupported ? (
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      ) : (
        <div className="state-field-fallback">
          {renderStages()}
        </div>
      )}

      {/* Stage indicator overlay (scroll-driven mode) */}
      {!reducedMotion && webglSupported && (
        <>
          <div style={{
            position: 'absolute',
            top: 'var(--space-6)',
            left: 'var(--space-6)',
            right: 'var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
          }}>
            <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
              {STAGES.map((stage, i) => (
                <span
                  key={stage}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.1em',
                    color: i === currentStage ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.2)',
                    transition: 'color var(--duration-normal)',
                    padding: '2px 6px',
                  }}
                >
                  {stage}
                </span>
              ))}
            </div>
            {/* Active stage description */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '24rem',
              lineHeight: 'var(--leading-relaxed)',
              transition: 'opacity var(--duration-normal)',
            }}>
              {STAGE_DESCRIPTIONS[currentStage]}
            </p>
          </div>
        </>
      )}

      {/* Required disclosure */}
      <span className="state-field-label">
        BHVD State Practice Model · Not a biological measurement
      </span>

      {/* Skip button — always visible */}
      <a
        href="#after-state-field"
        className="state-field-skip"
        aria-label="Skip State Field visualization"
      >
        Skip ↓
      </a>
    </div>
  );
}
