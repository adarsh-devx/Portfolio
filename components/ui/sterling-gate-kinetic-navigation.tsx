'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function SterlingGateKineticNavigation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    // Setup Master GSAP Timeline & Hover Interactions
    useEffect(() => {
        if (!containerRef.current) return;

        const navWrap = containerRef.current.querySelector('.nav-overlay-wrapper');
        const menu = containerRef.current.querySelector('.menu-content');
        const overlay = containerRef.current.querySelector('.overlay');
        const bgPanels = containerRef.current.querySelectorAll('.backdrop-layer');
        const menuLinks = containerRef.current.querySelectorAll('.nav-link');
        const menuButton = containerRef.current.querySelector('.nav-close-btn');
        const menuButtonTexts = menuButton?.querySelectorAll('p');
        const menuButtonIcon = menuButton?.querySelector('.menu-button-icon');

        if (!navWrap || !menu || !overlay) return;

        // Set initial state
        gsap.set(navWrap, { display: 'none' });
        gsap.set(overlay, { autoAlpha: 0 });
        gsap.set(menu, { xPercent: 100 });
        gsap.set(bgPanels, { xPercent: 100 });
        gsap.set(menuLinks, { yPercent: 120, rotate: 6 });

        // Build master play/reverse timeline
        const tl = gsap.timeline({
            paused: true,
            onReverseComplete: () => {
                gsap.set(navWrap, { display: 'none' });
            },
        });

        tl.set(navWrap, { display: 'block' })
            .to(overlay, { autoAlpha: 1, duration: 0.45, ease: 'power2.inOut' })
            .to(menu, { xPercent: 0, duration: 0.65, ease: 'expo.out' }, '<')
            .to(
                menuButtonTexts || [],
                { yPercent: -100, duration: 0.4, ease: 'power3.inOut', stagger: 0.08 },
                '<',
            )
            .to(
                menuButtonIcon || [],
                { rotate: 315, duration: 0.55, ease: 'expo.out' },
                '<',
            )
            .to(
                bgPanels,
                { xPercent: 0, stagger: 0.06, duration: 0.65, ease: 'expo.out' },
                '<',
            )
            .to(
                menuLinks,
                { yPercent: 0, rotate: 0, stagger: 0.04, duration: 0.55, ease: 'expo.out' },
                '-=0.4',
            );

        tlRef.current = tl;

        // Shape Hover Listeners
        const menuItems = containerRef.current.querySelectorAll(
            '.menu-list-item[data-shape]',
        );
        const shapesContainer = containerRef.current.querySelector(
            '.ambient-background-shapes',
        );

        const cleanups: (() => void)[] = [];

        menuItems.forEach((item) => {
            const shapeIndex = item.getAttribute('data-shape');
            const shape = shapesContainer
                ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`)
                : null;

            if (!shape) return;

            const shapeEls = shape.querySelectorAll('.shape-element');

            const onEnter = () => {
                if (shapesContainer) {
                    shapesContainer
                        .querySelectorAll('.bg-shape')
                        .forEach((s) => s.classList.remove('active'));
                }
                shape.classList.add('active');

                gsap.fromTo(
                    shapeEls,
                    { scale: 0.55, opacity: 0, rotation: -8 },
                    {
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.55,
                        stagger: 0.06,
                        ease: 'back.out(1.5)',
                        overwrite: 'auto',
                    },
                );
            };

            const onLeave = () => {
                gsap.to(shapeEls, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.25,
                    ease: 'power2.in',
                    onComplete: () => shape.classList.remove('active'),
                    overwrite: 'auto',
                });
            };

            item.addEventListener('mouseenter', onEnter);
            item.addEventListener('mouseleave', onLeave);

            cleanups.push(() => {
                item.removeEventListener('mouseenter', onEnter);
                item.removeEventListener('mouseleave', onLeave);
            });
        });

        return () => {
            tl.kill();
            cleanups.forEach((fn) => fn());
        };
    }, []);

    // Play / Reverse on state toggle with balanced fluid kinetic feel
    useEffect(() => {
        if (!tlRef.current) return;
        if (isMenuOpen) {
            tlRef.current.timeScale(1.0).play();
        } else {
            tlRef.current.timeScale(1.15).reverse();
        }
    }, [isMenuOpen]);

    // Keyboard ESC listener
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    const handleNavigate = (url: string) => {
        setIsMenuOpen(false);
        if (url.startsWith('http') || url.endsWith('.pdf')) {
            window.open(url, '_blank');
        } else {
            router.push(url);
        }
    };

    return (
        <div ref={containerRef} className="sterling-kinetic-nav">
            {/* Header with Fixed Toggle Button */}
            <div className="site-header-wrapper">
                <header className="header">
                    <div className="nav-row">
                        <Link
                            href="/"
                            aria-label="home"
                            className="nav-logo-row"
                        ></Link>
                        <div className="nav-row__right">
                            <button
                                type="button"
                                className="nav-close-btn"
                                onClick={toggleMenu}
                                aria-label="Toggle navigation menu"
                            >
                                <div className="menu-button-text">
                                    <p className="p-large">Menu</p>
                                    <p className="p-large">Close</p>
                                </div>
                                <div className="icon-wrap">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className="menu-button-icon"
                                    >
                                        <path
                                            d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            {/* Fullscreen Overlay Menu */}
            <section className="fullscreen-menu-container">
                <div className="nav-overlay-wrapper">
                    {/* Backdrop Click Close */}
                    <div className="overlay" onClick={closeMenu}></div>

                    {/* Sliding Drawer */}
                    <nav className="menu-content">
                        <div className="menu-bg">
                            <div className="backdrop-layer first"></div>
                            <div className="backdrop-layer second"></div>
                            <div className="backdrop-layer"></div>

                            {/* Abstract Ambient Shapes */}
                            <div className="ambient-background-shapes">
                                {/* Shape 1: Floating circles */}
                                <svg
                                    className="bg-shape bg-shape-1"
                                    viewBox="0 0 400 400"
                                    fill="none"
                                >
                                    <circle
                                        className="shape-element"
                                        cx="80"
                                        cy="120"
                                        r="40"
                                        fill="rgba(88,166,255,0.25)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="300"
                                        cy="80"
                                        r="60"
                                        fill="rgba(255,107,107,0.2)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="200"
                                        cy="300"
                                        r="80"
                                        fill="rgba(88,166,255,0.18)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="350"
                                        cy="280"
                                        r="30"
                                        fill="rgba(255,107,107,0.25)"
                                    />
                                </svg>

                                {/* Shape 2: Wave pattern */}
                                <svg
                                    className="bg-shape bg-shape-2"
                                    viewBox="0 0 400 400"
                                    fill="none"
                                >
                                    <path
                                        className="shape-element"
                                        d="M0 200 Q100 100, 200 200 T 400 200"
                                        stroke="rgba(88,166,255,0.3)"
                                        strokeWidth="60"
                                        fill="none"
                                    />
                                    <path
                                        className="shape-element"
                                        d="M0 280 Q100 180, 200 280 T 400 280"
                                        stroke="rgba(255,107,107,0.22)"
                                        strokeWidth="40"
                                        fill="none"
                                    />
                                </svg>

                                {/* Shape 3: Grid dots */}
                                <svg
                                    className="bg-shape bg-shape-3"
                                    viewBox="0 0 400 400"
                                    fill="none"
                                >
                                    <circle
                                        className="shape-element"
                                        cx="50"
                                        cy="50"
                                        r="8"
                                        fill="rgba(88,166,255,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="150"
                                        cy="50"
                                        r="8"
                                        fill="rgba(255,107,107,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="250"
                                        cy="50"
                                        r="8"
                                        fill="rgba(88,166,255,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="350"
                                        cy="50"
                                        r="8"
                                        fill="rgba(255,107,107,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="100"
                                        cy="150"
                                        r="12"
                                        fill="rgba(255,107,107,0.3)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="200"
                                        cy="150"
                                        r="12"
                                        fill="rgba(88,166,255,0.3)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="300"
                                        cy="150"
                                        r="12"
                                        fill="rgba(255,107,107,0.3)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="50"
                                        cy="250"
                                        r="10"
                                        fill="rgba(88,166,255,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="150"
                                        cy="250"
                                        r="10"
                                        fill="rgba(255,107,107,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="250"
                                        cy="250"
                                        r="10"
                                        fill="rgba(88,166,255,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="350"
                                        cy="250"
                                        r="10"
                                        fill="rgba(255,107,107,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="100"
                                        cy="350"
                                        r="6"
                                        fill="rgba(88,166,255,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="200"
                                        cy="350"
                                        r="6"
                                        fill="rgba(255,107,107,0.35)"
                                    />
                                    <circle
                                        className="shape-element"
                                        cx="300"
                                        cy="350"
                                        r="6"
                                        fill="rgba(88,166,255,0.35)"
                                    />
                                </svg>

                                {/* Shape 4: Organic blobs */}
                                <svg
                                    className="bg-shape bg-shape-4"
                                    viewBox="0 0 400 400"
                                    fill="none"
                                >
                                    <path
                                        className="shape-element"
                                        d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
                                        fill="rgba(88,166,255,0.2)"
                                    />
                                    <path
                                        className="shape-element"
                                        d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
                                        fill="rgba(255,107,107,0.18)"
                                    />
                                </svg>

                                {/* Shape 5: Diagonal lines */}
                                <svg
                                    className="bg-shape bg-shape-5"
                                    viewBox="0 0 400 400"
                                    fill="none"
                                >
                                    <line
                                        className="shape-element"
                                        x1="0"
                                        y1="100"
                                        x2="300"
                                        y2="400"
                                        stroke="rgba(88,166,255,0.25)"
                                        strokeWidth="30"
                                    />
                                    <line
                                        className="shape-element"
                                        x1="100"
                                        y1="0"
                                        x2="400"
                                        y2="300"
                                        stroke="rgba(255,107,107,0.2)"
                                        strokeWidth="25"
                                    />
                                    <line
                                        className="shape-element"
                                        x1="200"
                                        y1="0"
                                        x2="400"
                                        y2="200"
                                        stroke="rgba(88,166,255,0.2)"
                                        strokeWidth="20"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="menu-content-wrapper">
                            <ul className="menu-list">
                                <li className="menu-list-item" data-shape="1">
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate('/#about-me')}
                                        className="nav-link w-inline-block text-left w-full"
                                    >
                                        <p className="nav-link-text">About Me</p>
                                        <div className="nav-link-hover-bg"></div>
                                    </button>
                                </li>
                                <li className="menu-list-item" data-shape="2">
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate('/#selected-projects')}
                                        className="nav-link w-inline-block text-left w-full"
                                    >
                                        <p className="nav-link-text">Selected Work</p>
                                        <div className="nav-link-hover-bg"></div>
                                    </button>
                                </li>
                                <li className="menu-list-item" data-shape="3">
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate('/#skills')}
                                        className="nav-link w-inline-block text-left w-full"
                                    >
                                        <p className="nav-link-text">Skills & Stack</p>
                                        <div className="nav-link-hover-bg"></div>
                                    </button>
                                </li>
                                <li className="menu-list-item" data-shape="4">
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate('/resume.pdf')}
                                        className="nav-link w-inline-block text-left w-full"
                                    >
                                        <p className="nav-link-text">Resume</p>
                                        <div className="nav-link-hover-bg"></div>
                                    </button>
                                </li>
                                <li className="menu-list-item" data-shape="5">
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate('/#contact')}
                                        className="nav-link w-inline-block text-left w-full"
                                    >
                                        <p className="nav-link-text">Get in touch</p>
                                        <div className="nav-link-hover-bg"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    );
}

export { SterlingGateKineticNavigation as Component };
export default SterlingGateKineticNavigation;
