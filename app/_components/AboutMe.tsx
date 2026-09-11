'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section pt-8 sm:pt-16" id="about-me">
            <div className="container px-4 sm:px-6" ref={container}>
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-12 sm:mb-20 slide-up-and-fade leading-tight">
                    I believe in a user centered design approach, ensuring that
                    every project I work on is tailored to meet the specific
                    needs of its users.
                </h2>

                <p className="pb-3 border-b border-border/40 text-muted-foreground slide-up-and-fade text-sm sm:text-base">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 gap-8 md:gap-4 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-3xl sm:text-4xl md:text-5xl slide-up-and-fade font-medium leading-tight">
                            Hi, I&apos;m Adarsh Kushwaha.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-base sm:text-lg text-muted-foreground max-w-[480px] space-y-4">
                            <p className="slide-up-and-fade leading-relaxed">
                                I&apos;m a full-stack web developer dedicated to
                                turning ideas into creative solutions. I
                                specialize in creating seamless and intuitive
                                user experiences.
                            </p>
                            <p className="slide-up-and-fade leading-relaxed">
                                My approach focuses on creating scalable,
                                high-performing solutions tailored to both user
                                needs and business objectives. By prioritizing
                                performance, accessibility, and responsiveness,
                                I strive to deliver experiences that not only
                                engage users but also drive tangible results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
