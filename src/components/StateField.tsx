'use client';

import { useRef, useEffect, useState, useMemo } from 'react';

const STAGES = ['INPUT', 'SIGNAL', 'NOTICE', 'CHOICE', 'PRACTICE'] as const;

/**
 * StateField — Abstract thermal field visualization.
 *
 * A single Three.js scene representing movement from neutral input
 * through increasing sensory intensity and back toward observation.
 *
 * Uses material compression, light, and motion — no anatomical,
 * biometric, or medical imagery.
 *
 * Labeled: "Conceptual model. Not a biological measurement."
 */
export function StateField({ progress = 0 }: { progress?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rendererRef = useRef<any>(null);
  const frameRef = useRef<number>(0);
  const [webglSupported, setWebglSupported] = useState(true);

  // Derive current stage from progress (0-1) — pure computation, no effect needed
  const currentStage = useMemo(() => Math.min(
    Math.floor(progress * STAGES.length),
    STAGES.length - 1
  ), [progress]);

  // Initialize Three.js
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Check WebGL support
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let THREE: typeof import('three') | null = null;
    let animating = true;

    const init = async () => {
      try {
        THREE = await import('three');

        const { width, height } = container.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio, 2);

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);

        // Camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 5);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: false,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(dpr);
        rendererRef.current = renderer;

        // --- Particle field ---
        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          // Distributed in a compressed sphere
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          const r = 1.5 + Math.random() * 1.5;

          positions[i3] = r * Math.sin(phi) * Math.cos(theta);
          positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
          positions[i3 + 2] = r * Math.cos(phi);

          // Bone/mineral tones
          const brightness = 0.3 + Math.random() * 0.4;
          colors[i3] = brightness * 0.95;
          colors[i3 + 1] = brightness * 0.92;
          colors[i3 + 2] = brightness * 0.88;

          sizes[i] = 1.5 + Math.random() * 2.5;

          // Slow drift
          velocities[i3] = (Math.random() - 0.5) * 0.002;
          velocities[i3 + 1] = (Math.random() - 0.5) * 0.002;
          velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Vertex shader for point sizes
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

        // --- Central light point ---
        const lightGeo = new THREE.SphereGeometry(0.08, 16, 16);
        const lightMat = new THREE.MeshBasicMaterial({
          color: 0x3a7bd5,
          transparent: true,
          opacity: 0.4,
        });
        const lightPoint = new THREE.Mesh(lightGeo, lightMat);
        scene.add(lightPoint);

        // --- Animate ---
        let time = 0;
        const animate = () => {
          if (!animating) return;
          frameRef.current = requestAnimationFrame(animate);

          if (prefersReducedMotion) {
            renderer.render(scene, camera);
            return;
          }

          time += 0.003;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const posAttr = geometry.getAttribute('position') as any;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const colorAttr = geometry.getAttribute('color') as any;

          // Progress affects field behavior
          const p = progress;
          const compression = 1 - p * 0.4;   // Field compresses as intensity rises
          const spectralBlend = Math.max(0, (p - 0.3) * 1.4); // Blue appears mid-journey

          for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Drift
            posAttr.array[i3] += velocities[i3] * (1 + p * 2);
            posAttr.array[i3 + 1] += velocities[i3 + 1] * (1 + p * 2);
            posAttr.array[i3 + 2] += velocities[i3 + 2] * (1 + p * 2);

            // Contain — pull back toward center
            const x = posAttr.array[i3];
            const y = posAttr.array[i3 + 1];
            const z = posAttr.array[i3 + 2];
            const dist = Math.sqrt(x * x + y * y + z * z);

            if (dist > 3 * compression) {
              posAttr.array[i3] *= 0.995;
              posAttr.array[i3 + 1] *= 0.995;
              posAttr.array[i3 + 2] *= 0.995;
            }

            // Oscillation
            posAttr.array[i3 + 1] += Math.sin(time + i * 0.01) * 0.0005;

            // Color shift with progress
            const base = 0.3 + Math.random() * 0.01;
            colorAttr.array[i3] = base * 0.95 * (1 - spectralBlend) + 0.23 * spectralBlend;
            colorAttr.array[i3 + 1] = base * 0.92 * (1 - spectralBlend) + 0.48 * spectralBlend;
            colorAttr.array[i3 + 2] = base * 0.88 * (1 - spectralBlend) + 0.84 * spectralBlend;
          }

          posAttr.needsUpdate = true;
          colorAttr.needsUpdate = true;

          // Light point pulses
          lightMat.opacity = 0.2 + Math.sin(time * 2) * 0.15 + p * 0.3;
          lightPoint.scale.setScalar(1 + Math.sin(time) * 0.1 + p * 0.5);

          // Slow rotation
          particles.rotation.y = time * 0.1;
          particles.rotation.x = Math.sin(time * 0.05) * 0.1;

          renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
          const { width: w, height: h } = container.getBoundingClientRect();
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          animating = false;
          cancelAnimationFrame(frameRef.current);
          renderer.dispose();
          geometry.dispose();
          material.dispose();
        };
      } catch {
        setWebglSupported(false);
      }
    };

    const cleanup = init();
    return () => {
      animating = false;
      cancelAnimationFrame(frameRef.current);
      cleanup?.then((fn) => fn?.());
    };
  }, [progress]);

  return (
    <div className="state-field-container" ref={containerRef}>
      {webglSupported ? (
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      ) : (
        <div className="state-field-fallback">
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-editorial)' }}>
              {STAGES[currentStage]}
            </div>
            <div style={{ opacity: 0.5, maxWidth: '20rem' }}>
              The State Field represents a conceptual movement from neutral input through sensory intensity toward observation.
            </div>
          </div>
        </div>
      )}

      {/* Stage indicator */}
      <div style={{
        position: 'absolute',
        top: 'var(--space-4)',
        left: 'var(--space-4)',
        display: 'flex',
        gap: 'var(--space-1)',
      }}>
        {STAGES.map((stage, i) => (
          <span
            key={stage}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              letterSpacing: '0.1em',
              color: i === currentStage ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
              transition: 'color var(--duration-normal)',
              padding: '2px 6px',
            }}
          >
            {stage}
          </span>
        ))}
      </div>

      {/* Required label */}
      <span className="state-field-label">
        Conceptual model · Not a biological measurement
      </span>
    </div>
  );
}
