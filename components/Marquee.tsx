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
        <div className="relative w-full overflow-hidden py-16 md:py-24 my-6 md:my-10">
            {/* Rotation / Slant Wrapper */}
            <div className="-rotate-3 scale-105 w-[110%] -ml-[5%] flex flex-col gap-4 relative">
                
                {/* Ribbon 1: Crimson Spark (Rose) -> Scrolls Right-to-Left */}
                <div className="w-full bg-primary text-background py-3.5 md:py-4.5 overflow-hidden flex border-y-2 border-black/10 shadow-lg relative z-[2]">
                    <div className="flex w-max whitespace-nowrap animate-marquee">
                        {renderWords()}
                        {renderWords()}
                        {renderWords()}
                        {renderWords()}
                    </div>
                </div>

                {/* Ribbon 2: Azure Ascent (Blue) -> Scrolls Left-to-Right */}
                <div className="w-full bg-secondary text-foreground py-3.5 md:py-4.5 overflow-hidden flex border-y-2 border-black/10 shadow-lg -mt-3 relative z-[1]">
                    <div className="flex w-max whitespace-nowrap animate-marquee-reverse">
                        {renderWords()}
                        {renderWords()}
                        {renderWords()}
                        {renderWords()}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Marquee;
