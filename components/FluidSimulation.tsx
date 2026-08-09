'use client';
import React, { useEffect, useRef } from 'react';

const FluidSimulation: React.FC = () => {
    const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
    const turbulenceRef = useRef<SVGFETurbulenceElement>(null);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let lastMouseX = 0;
        let lastMouseY = 0;
        let velocity = 0;
        let targetScale = 0;
        let currentScale = 0;
        let time = 0;
        let active = false;

        const handleMouseMove = (e: MouseEvent) => {
            if (!active) {
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;
                active = true;
                return;
            }
            mouseX = e.clientX;
            mouseY = e.clientY;

            const dx = mouseX - lastMouseX;
            const dy = mouseY - lastMouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Accumulate velocity based on mouse speed
            velocity += dist * 0.15;

            lastMouseX = mouseX;
            lastMouseY = mouseY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;

        const update = () => {
            time += 0.05;

            // Smoothly decay velocity/displacement scale
            velocity *= 0.88;

            // Cap the maximum distortion to prevent letters from breaking apart
            targetScale = Math.min(velocity, 25);

            // Linear interpolation for smooth warp transitions
            currentScale += (targetScale - currentScale) * 0.15;

            if (displacementRef.current) {
                displacementRef.current.setAttribute('scale', currentScale.toFixed(2));
            }

            if (turbulenceRef.current) {
                // Modify baseFrequency over time to simulate a flowing current
                const bfX = (0.015 + Math.sin(time * 0.4) * 0.005).toFixed(4);
                const bfY = (0.025 + Math.cos(time * 0.3) * 0.005).toFixed(4);
                turbulenceRef.current.setAttribute('baseFrequency', `${bfX} ${bfY}`);
            }

            animationFrameId = requestAnimationFrame(update);
        };

        update();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="liquid-distortion" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence
                        ref={turbulenceRef}
                        type="fractalNoise"
                        baseFrequency="0.015 0.025"
                        numOctaves="2"
                        result="noise"
                    />
                    <feDisplacementMap
                        ref={displacementRef}
                        in="SourceGraphic"
                        in2="noise"
                        scale="0"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default FluidSimulation;
