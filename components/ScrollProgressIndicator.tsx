'use client';
import { useLenis } from 'lenis/react';
import { useRef } from 'react';

const ScrollProgressIndicator = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useLenis((lenis) => {
        if (!scrollBarRef.current || !containerRef.current) return;

        const progress = lenis.progress; // value between 0 and 1
        scrollBarRef.current.style.transform = `scaleX(${progress})`;

        if (progress === 0) {
            containerRef.current.style.opacity = '0';
            containerRef.current.style.visibility = 'hidden';
        } else {
            containerRef.current.style.opacity = '1';
            containerRef.current.style.visibility = 'visible';
        }
    });

    return (
        <div 
            ref={containerRef}
            className="fixed top-0 left-5 right-5 md:left-10 md:right-10 h-1.5 z-[9999] bg-white/10 pointer-events-none transition-all duration-300 opacity-0 invisible"
            style={{ transform: 'skewX(-30deg)' }}
        >
            <div
                className="h-full bg-primary origin-left transition-transform duration-75 ease-out"
                style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
                ref={scrollBarRef}
            ></div>
        </div>
    );
};

export default ScrollProgressIndicator;
