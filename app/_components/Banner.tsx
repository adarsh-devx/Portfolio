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
            <div className="container h-[100svh] min-h-[530px] flex flex-col justify-center items-center text-center relative">
                <div className="flex flex-col justify-center items-center w-full z-[1]">
                    <h1 className="banner-title slide-up-and-fade leading-none text-4xl sm:text-[6.5vw] whitespace-nowrap">
                        <span className="font-butter text-primary uppercase tracking-tighter">
                            FULLSTACK
                        </span>
                        <span className="font-max lowercase text-secondary tracking-wide ml-3">
                            dev
                        </span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground max-w-[500px]">
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
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Let&apos;s Talk
                    </Button>

                    <div className="flex items-center gap-2 mt-3">
                        <span className="size-3 rounded-full bg-white"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time opportunities
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[10%] right-6 md:right-10 lg:right-16 flex flex-col items-end gap-4 md:gap-8 text-right z-[2]">
                <div className="slide-up-and-fade">
                    <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                        1+
                    </h5>
                    <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="slide-up-and-fade">
                    <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                        4+
                    </h5>
                    <p className="text-muted-foreground">Completed Projects</p>
                </div>
                <div className="slide-up-and-fade">
                    <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                        20K+
                    </h5>
                    <p className="text-muted-foreground">Hours Worked</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
