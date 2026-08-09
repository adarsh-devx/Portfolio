'use client';
import React from 'react';

const FloatingLogo = () => {
    return (
        <div className="fixed bottom-5 left-5 md:bottom-8 md:left-8 z-[9999] pointer-events-auto">
            <div className="group relative size-14 md:size-16 flex items-center justify-center cursor-pointer rounded-full bg-background-light/40 backdrop-blur-sm border border-white/5 shadow-lg shadow-black/20 hover:scale-105 transition-all duration-300">
                {/* Spinning Outer Orbit Ring */}
                <div className="absolute inset-1 rounded-full border border-dashed border-primary/40 animate-orbit"></div>
                
                {/* Spinning Inner Gradient Ring */}
                <div className="absolute inset-2.5 rounded-full border border-double border-secondary/20 animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>

                {/* Central Letter 'A' with Liquid Distortion */}
                <span className="font-butter text-primary text-xl md:text-2xl font-bold select-none transition-transform duration-300 group-hover:scale-110 liquid-target">
                    A
                </span>
            </div>
        </div>
    );
};

export default FloatingLogo;
