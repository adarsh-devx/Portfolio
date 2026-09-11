'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section
            className="relative overflow-hidden"
            id="banner"
            ref={containerRef}
        >
            <ArrowAnimation />
            <div className="container min-h-[90svh] sm:min-h-[100svh] py-20 sm:py-0 flex flex-col justify-center items-center text-center relative px-4 sm:px-6">
                <div className="flex flex-col justify-center items-center w-full z-[1]">
                    <h1 className="banner-title slide-up-and-fade leading-none text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[6.5vw] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        <span className="font-butter text-primary uppercase tracking-tighter">
                            FULLSTACK
                        </span>
                        <span className="font-max lowercase text-secondary tracking-wide">
                            dev
                        </span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-[500px] px-2">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Adarsh Kushwaha
                        </span>
                        . A creative FullStack Developer with 1+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </p>
                    <Button
                        as="link"
                        href={`mailto:${GENERAL_INFO.email}`}
                        variant="primary"
                        className="mt-7 sm:mt-9 banner-button slide-up-and-fade"
                    >
                        Let&apos;s Talk
                    </Button>

                    <div className="flex items-center gap-2 mt-4">
                        <span className="size-2.5 sm:size-3 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                            Available for full-time & freelance roles
                        </span>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex absolute bottom-[8%] right-6 md:right-10 lg:right-16 flex-col items-end gap-3 sm:gap-6 md:gap-8 text-right z-[2]">
                <div className="slide-up-and-fade">
                    <h5 className="text-2xl sm:text-3xl md:text-4xl font-anton text-primary mb-0.5 sm:mb-1.5">
                        1+
                    </h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="slide-up-and-fade">
                    <h5 className="text-2xl sm:text-3xl md:text-4xl font-anton text-primary mb-0.5 sm:mb-1.5">
                        5+
                    </h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Completed Projects</p>
                </div>
                <div className="slide-up-and-fade">
                    <h5 className="text-2xl sm:text-3xl md:text-4xl font-anton text-primary mb-0.5 sm:mb-1.5">
                        20K+
                    </h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Hours Worked</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
