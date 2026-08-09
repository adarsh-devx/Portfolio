'use client';
import React, { useEffect, useState } from 'react';

const FloatingLogo = () => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let currentProgress = 0;
        
        const interval = setInterval(() => {
            // Random increments to feel organic (between 4% and 11% per step)
            const increment = Math.floor(Math.random() * 8) + 4;
            currentProgress = Math.min(currentProgress + increment, 100);
            
            setProgress(currentProgress);
            
            if (currentProgress >= 100) {
                clearInterval(interval);
                // Hold at 100% for 300ms, then smoothly swap to the letter 'A'
                setTimeout(() => {
                    setIsLoaded(true);
                }, 350);
            }
        }, 90); // Reaches 100% in ~1.5 - 2s, matching the preloader

        return () => clearInterval(interval);
    }, []);

    // Calculate dynamic rotation speed based on progress (8s default -> 1.8s at 100%)
    const dynamicSpeed = Math.max(1.8, 8 - (progress / 100) * 6.2);

    return (
        <div className="fixed bottom-5 left-5 md:bottom-8 md:left-8 z-[9999] pointer-events-auto">
            <div className="group relative size-14 md:size-16 flex items-center justify-center cursor-pointer rounded-full bg-background-light/40 backdrop-blur-sm border border-white/5 shadow-lg shadow-black/20 hover:scale-105 transition-all duration-300">
                
                {/* Spinning Outer Orbit Ring */}
                <div 
                    className="absolute inset-1 rounded-full border border-dashed border-primary/40 animate-orbit"
                    style={{ animationDuration: isLoaded ? undefined : `${dynamicSpeed}s` }}
                ></div>
                
                {/* Spinning Inner Gradient Ring */}
                <div 
                    className="absolute inset-2.5 rounded-full border border-double border-secondary/20 animate-orbit" 
                    style={{ 
                        animationDirection: 'reverse', 
                        animationDuration: isLoaded ? '12s' : `${dynamicSpeed * 1.5}s` 
                    }}
                ></div>

                {/* Content Swap Area */}
                <div className="relative flex items-center justify-center">
                    {!isLoaded ? (
                        /* Percentage Counter Display */
                        <span className="font-roboto-flex text-xs md:text-sm font-semibold text-secondary/90 animate-pulse select-none">
                            {progress}%
                        </span>
                    ) : (
                        /* Central Brand Letter 'A' (Fades and scales in after loading completes) */
                        <span className="font-butter text-primary text-xl md:text-2xl font-bold select-none transition-all duration-500 scale-100 opacity-100 animate-fade-in-scale liquid-target">
                            A
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FloatingLogo;
