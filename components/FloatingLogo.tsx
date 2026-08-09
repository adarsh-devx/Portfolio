'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const FloatingLogo = () => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isGlitchActive, setIsGlitchActive] = useState(false);

    useEffect(() => {
        let currentProgress = 0;
        
        const interval = setInterval(() => {
            // Random progress steps (between 4% and 11%)
            const increment = Math.floor(Math.random() * 8) + 4;
            currentProgress = Math.min(currentProgress + increment, 100);
            
            setProgress(currentProgress);
            
            if (currentProgress >= 100) {
                clearInterval(interval);
                // Transition to active state after a small delay
                setTimeout(() => {
                    setIsLoaded(true);
                }, 350);
            }
        }, 90);

        return () => clearInterval(interval);
    }, []);

    // Periodic glitch triggers every 3 seconds when site is loaded and not hovered
    useEffect(() => {
        if (!isLoaded || isHovered) {
            setIsGlitchActive(false);
            return;
        }

        const glitchLoop = setInterval(() => {
            setIsGlitchActive(true);
            
            // Turn off glitch after 1000ms (1 second) burst
            setTimeout(() => {
                setIsGlitchActive(false);
            }, 1000);

        }, 3000);

        return () => clearInterval(glitchLoop);
    }, [isLoaded, isHovered]);

    const dynamicSpeed = Math.max(1.8, 8 - (progress / 100) * 6.2);

    return (
        <div className="fixed bottom-5 left-5 md:bottom-8 md:left-8 z-[9999] pointer-events-auto">
            <div 
                className="group relative size-14 md:size-16 flex items-center justify-center cursor-pointer rounded-full bg-background-light/40 backdrop-blur-sm border border-white/5 shadow-lg shadow-black/20 hover:scale-105 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Spinning Outer Orbit Ring */}
                <div 
                    className="absolute inset-1 rounded-full border border-dashed border-primary/40 animate-orbit"
                    style={{ animationDuration: isLoaded ? (isHovered ? '3s' : '8s') : `${dynamicSpeed}s` }}
                ></div>
                
                {/* Spinning Inner Gradient Ring */}
                <div 
                    className="absolute inset-2.5 rounded-full border border-double border-secondary/20 animate-orbit" 
                    style={{ 
                        animationDirection: 'reverse', 
                        animationDuration: isLoaded ? (isHovered ? '4.5s' : '12s') : `${dynamicSpeed * 1.5}s` 
                    }}
                ></div>

                {/* Content Area */}
                <div className="relative flex items-center justify-center">
                    {!isLoaded ? (
                        /* Loading percentage counter */
                        <span className="font-roboto-flex text-xs md:text-sm font-semibold text-secondary/90 animate-pulse select-none">
                            {progress}%
                        </span>
                    ) : (
                        /* Stylized letter 'A' with dynamic glitch and hover modes */
                        <span 
                            className={cn(
                                "font-butter font-bold text-xl md:text-2xl select-none transition-all duration-300",
                                {
                                    // Idle states (Rose color & Glitch styles):
                                    "text-primary glitch-text": !isHovered,
                                    "glitch-active": !isHovered && isGlitchActive,
                                    
                                    // Hover states (Azure Blue color & Liquid warp styles):
                                    "text-secondary scale-110 liquid-target": isHovered
                                }
                            )}
                        >
                            A
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FloatingLogo;
