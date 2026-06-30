import { useRef, useEffect } from 'react';

interface BinaryRainProps {
  fontSize?: number;
  color?: string;
  tint?: string;
  speed?: number;
  trail?: number;
}

export default function BinaryRain({
  fontSize = 14,
  color = '#7A9B8E',
  tint = '#FFFFFF',
  speed = 1.5,
  trail = 0.08,
}: BinaryRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.floor(w / fontSize);
      drops = Array(columns)
        .fill(0)
        .map(() => Math.random() * -100);
    };

    const render = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.fillStyle = `rgba(10, 10, 10, ${trail})`;
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const text = Math.random() > 0.5 ? '0' : '1';
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character (white tint)
        if (drops[i] * fontSize > 0) {
          ctx.fillStyle = tint;
          ctx.fillText(text, x, y - fontSize);
        }

        // Trail character (sage green)
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);

        drops[i] += speed;

        if (drops[i] * fontSize > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }

      animationId = requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [fontSize, color, tint, speed, trail]);

  return (
    <canvas
      ref={canvasRef}
      role="presentation"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
}
