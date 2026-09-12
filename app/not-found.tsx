'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles, FolderGit2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('.nf-num', {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
            })
                .from(
                    '.nf-text',
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.1,
                    },
                    '-=0.5',
                )
                .from(
                    '.nf-btn',
                    {
                        scale: 0.9,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.1,
                    },
                    '-=0.3',
                );
        },
        { scope: containerRef },
    );

    return (
        <div
            ref={containerRef}
            className="min-h-[100svh] w-full flex flex-col justify-between items-center px-6 py-12 relative overflow-hidden bg-background text-foreground select-none"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Brand Indicator */}
            <div className="w-full max-w-6xl flex justify-between items-center z-10">
                <Link
                    href="/"
                    className="font-anton text-2xl tracking-tight uppercase hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                    ADARSH<span className="text-primary">*</span>
                </Link>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest px-3 py-1 rounded-full border border-border/40 bg-card/30 backdrop-blur-sm">
                    Error 404
                </div>
            </div>

            {/* Center Content: Massive Vandstrom Style 404 Typography */}
            <div className="flex flex-col items-center text-center max-w-3xl my-auto z-10 py-10">
                {/* Giant 404 Display */}
                <div className="relative">
                    <h1 className="nf-num font-anton text-[28vw] sm:text-[22vw] md:text-[200px] lg:text-[260px] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/70 to-foreground/10">
                        404
                    </h1>
                </div>

                {/* Subtitle & Message */}
                <div className="nf-text mt-6 sm:mt-8 space-y-3">
                    <p className="text-xs sm:text-sm font-mono tracking-widest text-primary uppercase flex items-center justify-center gap-2">
                        <Sparkles className="size-4" />
                        <span>Lost in the Digital Void</span>
                        <Sparkles className="size-4" />
                    </p>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-anton tracking-tight uppercase">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        The coordinate you&apos;re looking for has drifted away or never existed in this dimension.
                    </p>
                </div>

                {/* Action CTA Buttons */}
                <div className="nf-btn flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10">
                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Return to Safety</span>
                    </Link>

                    <Link
                        href="/#selected-projects"
                        className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-border bg-card/60 hover:bg-card text-foreground font-medium text-sm sm:text-base transition-all duration-300 hover:border-primary/50 hover:scale-105 active:scale-95"
                    >
                        <FolderGit2 className="w-4 h-4 text-muted-foreground" />
                        <span>View Projects</span>
                    </Link>
                </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="w-full max-w-6xl flex justify-between items-center text-xs text-muted-foreground/60 border-t border-border/20 pt-4 z-10">
                <span className="font-mono">adarshx.dev</span>
                <span>Designed & Built with passion</span>
            </div>
        </div>
    );
}
