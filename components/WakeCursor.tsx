'use client';

import React, { useEffect, useRef } from 'react';

interface WakeWave {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    opacity: number;
    color: string;
    speed: number;
}

const WakeCursor: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wavesRef = useRef<WakeWave[]>([]);
    const lastMousePos = useRef<{ x: number; y: number } | null>(null);
    const animationFrameId = useRef<number | null>(null);
    const isHoveringRef = useRef<boolean>(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.parentElement;
        if (!parent) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize canvas to match parent
        const handleResize = () => {
            const rect = parent.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        handleResize();
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(parent);

        // Palette matching portfolio theme (Cyan Blue and Rose Glitch accents)
        const colors = [
            'rgba(88, 166, 255, ',  // Azure Blue
            'rgba(255, 107, 107, ', // Rose Accent
            'rgba(130, 200, 255, ', // Light Glow
        ];

        let colorIndex = 0;

        const spawnWave = (x: number, y: number, speed: number) => {
            const chosenColor = colors[colorIndex % colors.length];
            colorIndex++;

            wavesRef.current.push({
                x,
                y,
                radius: 4,
                maxRadius: Math.min(80, Math.max(35, speed * 2.5)),
                opacity: 0.45,
                color: chosenColor,
                speed: Math.min(2.5, Math.max(1.2, speed * 0.08)),
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            isHoveringRef.current = true;
            const rect = parent.getBoundingClientRect();
            const currentX = e.clientX - rect.x;
            const currentY = e.clientY - rect.y;

            if (lastMousePos.current) {
                const dx = currentX - lastMousePos.current.x;
                const dy = currentY - lastMousePos.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Spawn wake ripples based on movement
                if (dist > 6) {
                    spawnWave(currentX, currentY, dist);
                    lastMousePos.current = { x: currentX, y: currentY };
                }
            } else {
                lastMousePos.current = { x: currentX, y: currentY };
                spawnWave(currentX, currentY, 10);
            }

            if (!animationFrameId.current) {
                startAnimation();
            }
        };

        const handleMouseLeave = () => {
            isHoveringRef.current = false;
            lastMousePos.current = null;
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const activeWaves: WakeWave[] = [];

            for (let i = 0; i < wavesRef.current.length; i++) {
                const wave = wavesRef.current[i];
                wave.radius += wave.speed;
                wave.opacity *= 0.94; // Smooth decay

                if (wave.opacity > 0.01 && wave.radius < wave.maxRadius) {
                    activeWaves.push(wave);

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
                    ctx.strokeStyle = `${wave.color}${wave.opacity})`;
                    ctx.lineWidth = Math.max(1, 2.5 * (1 - wave.radius / wave.maxRadius));
                    ctx.shadowColor = `${wave.color}0.6)`;
                    ctx.shadowBlur = 10;
                    ctx.stroke();

                    // Inner soft ripple
                    ctx.beginPath();
                    ctx.arc(wave.x, wave.y, wave.radius * 0.55, 0, Math.PI * 2);
                    ctx.strokeStyle = `${wave.color}${wave.opacity * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.restore();
                }
            }

            wavesRef.current = activeWaves;

            if (wavesRef.current.length > 0 || isHoveringRef.current) {
                animationFrameId.current = requestAnimationFrame(render);
            } else {
                animationFrameId.current = null;
            }
        };

        const startAnimation = () => {
            if (!animationFrameId.current) {
                animationFrameId.current = requestAnimationFrame(render);
            }
        };

        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            resizeObserver.disconnect();
            parent.removeEventListener('mousemove', handleMouseMove);
            parent.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
        />
    );
};

export default WakeCursor;
