'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="py-8 sm:py-16">
            <div className="container px-4 sm:px-6">
                <SectionTitle title="My Stack" />

                <div className="space-y-14 sm:space-y-20">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12 gap-4 sm:gap-6" key={key}>
                            <div className="sm:col-span-5">
                                <p className="slide-up text-3xl sm:text-4xl md:text-5xl font-anton leading-none text-muted-foreground uppercase mb-4 sm:mb-0">
                                    {key}
                                </p>
                            </div>

                            <div className="sm:col-span-7 flex gap-x-6 sm:gap-x-10 gap-y-6 sm:gap-y-8 flex-wrap">
                                {value.map((item) => (
                                    <div
                                        className="slide-up flex gap-3 items-center leading-none bg-card/20 sm:bg-transparent px-3 py-2 sm:p-0 rounded-lg border border-border/20 sm:border-none"
                                        key={item.name}
                                    >
                                        <div className="shrink-0">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width="36"
                                                height="36"
                                                className="max-h-8 sm:max-h-10 w-auto"
                                            />
                                        </div>
                                        <span className="text-lg sm:text-2xl capitalize font-medium">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12" key={key}>
                            <div className="sm:col-span-5">
                                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                                    {key}
                                </p>
                            </div>
                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                {value.map((item) => (
                                    <div
                                        className="slide-up flex gap-3.5 items-center leading-none"
                                        key={item.name}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width="40"
                                            height="40"
                                            className="h-10"
                                        />
                                        <span className="text-2xl capitalize">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
