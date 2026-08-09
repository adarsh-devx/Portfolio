'use client';
import React from 'react';

const MARQUEE_WORDS = [
    'DESIGN',
    'CODE',
    'FULLSTACK',
    'EXPERIMENT',
    'CREATIVE',
    'DEVELOPER',
    'ANIMATE',
    'PROBLEM SOLVER',
];

const Marquee = () => {
    // Generate identical text blocks for seamless looping
    const renderWords = () => (
        <div className="flex items-center gap-12 pr-12 select-none">
            {MARQUEE_WORDS.map((word, idx) => (
                <React.Fragment key={`${word}-${idx}`}>
                    <span className="font-anton text-4xl md:text-5xl lg:text-6xl tracking-wider leading-none">
                        {word}
                    </span>
                    <span className="size-3.5 md:size-4 rounded-full bg-current opacity-70"></span>
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div className="relative w-full overflow-hidden h-[240px] md:h-[280px] my-6 md:my-10">
            {/* Ribbon 1: Crimson Spark (Rose) -> Tilted Upwards, Scrolls Right-to-Left, Crosses on Left (18%) */}
            <div 
                className="w-[115%] -ml-[7.5%] bg-primary text-background py-4 md:py-5 overflow-hidden flex border-y-2 border-black/15 shadow-2xl absolute top-14 left-0 -rotate-[4deg] scale-105 z-[2]"
                style={{ transformOrigin: '18% center' }}
            >
                <div className="flex w-max whitespace-nowrap animate-marquee">
                    {renderWords()}
                    {renderWords()}
                </div>
            </div>

            {/* Ribbon 2: Azure Ascent (Blue) -> Tilted Downwards, Scrolls Left-to-Right, Crosses on Left (18%) */}
            <div 
                className="w-[115%] -ml-[7.5%] bg-secondary text-foreground py-4 md:py-5 overflow-hidden flex border-y-2 border-black/15 shadow-2xl absolute top-14 left-0 rotate-[4deg] scale-105 z-[1]"
                style={{ transformOrigin: '18% center' }}
            >
                <div className="flex w-max whitespace-nowrap animate-marquee-reverse">
                    {renderWords()}
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
