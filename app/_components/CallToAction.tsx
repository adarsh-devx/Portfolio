'use client';

import React, { useState } from 'react';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { ArrowUpRight, Check, Copy, Sparkles, Mail, Github } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CallToAction = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(GENERAL_INFO.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const githubLink =
        SOCIAL_LINKS.find((item) => item.name.toLowerCase() === 'github')?.url ||
        'https://github.com/adarsh-devx';

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.from('.cta-animate', {
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-16 md:py-24 relative overflow-hidden w-full bg-gradient-to-b from-transparent via-card/10 to-transparent" ref={containerRef}>
            {/* Ambient Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-6xl px-6 sm:px-10 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 md:space-y-10">
                    {/* Status Badge */}
                    <div className="cta-animate inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs sm:text-sm font-medium text-foreground tracking-wide">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        <span>Available for Freelance & Full-Time Roles</span>
                    </div>

                    {/* Bold Headline */}
                    <div className="cta-animate space-y-2">
                        <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] uppercase text-foreground">
                            HAVE A PROJECT <br />
                            <span className="bg-gradient-to-r from-primary via-foreground to-primary/80 bg-clip-text text-transparent">
                                IN MIND?
                            </span>
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="cta-animate text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Whether you need a high-performance web app, fluid motion animations, or want to collaborate on something innovative — let&apos;s talk.
                    </p>

                    {/* Action Buttons */}
                    <div className="cta-animate flex flex-wrap items-center justify-center gap-4 pt-2 w-full sm:w-auto">
                        <a
                            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Get In Touch</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-border bg-card/60 hover:bg-card text-foreground font-medium text-base transition-all duration-300 hover:border-primary/50 hover:scale-105 active:scale-95"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 text-emerald-400" />
                                    <span className="text-emerald-400">Email Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 text-muted-foreground" />
                                    <span>Copy Email</span>
                                </>
                            )}
                        </button>

                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-border bg-card/60 hover:bg-card text-foreground font-medium text-base transition-all duration-300 hover:border-primary/50 hover:scale-105 active:scale-95"
                        >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                        </a>
                    </div>

                    {/* Highlights pills */}
                    <div className="cta-animate pt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground/80 border-t border-border/20 w-full max-w-2xl">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>Fast Turnaround</span>
                        </div>
                        <span className="hidden sm:inline opacity-30">•</span>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>Clean & Scalable Code</span>
                        </div>
                        <span className="hidden sm:inline opacity-30">•</span>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>Pixel-Perfect Motion</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
