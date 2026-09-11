'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { Check, Copy } from 'lucide-react';
import WakeCursor from '@/components/WakeCursor';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(GENERAL_INFO.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const linkedinLink =
        SOCIAL_LINKS.find((item) => item.name.toLowerCase() === 'linkedin')
            ?.url || 'https://www.linkedin.com/in/adarsh-devx';

    return (
        <footer
            id="contact"
            className="relative w-full overflow-hidden border-t border-border/40 bg-card/20 backdrop-blur-sm mt-16 md:mt-24 pt-16 md:pt-24 pb-3 px-6 sm:px-10 flex flex-col justify-between"
        >
            {/* Full-width interactive Wake Cursor Canvas */}
            <WakeCursor />

            {/* Content Container */}
            <div className="max-w-6xl w-full mx-auto relative z-[1] flex flex-col gap-14 md:gap-20 pb-8 md:pb-12">
                {/* Top Section: Brand Name, Stay Connected, Navigation with generous spacing between them */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-24">
                    {/* Brand Name */}
                    <div className="flex items-center shrink-0">
                        <span className="font-anton text-5xl xs:text-6xl sm:text-7xl md:text-8xl tracking-tight text-foreground uppercase select-none leading-none inline-flex items-start">
                            ADARSH<span className="text-primary text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-none ml-0.5">*</span>
                        </span>
                    </div>

                    {/* Stay Connected Tagline */}
                    <div className="flex items-center shrink-0">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground">
                            Stay
                            <br />
                            connected
                        </h3>
                    </div>

                    {/* Navigation Links (Stacked cleanly on right) */}
                    <div className="flex md:justify-end shrink-0">
                        <nav className="flex flex-row md:flex-col flex-wrap gap-4 md:gap-0 md:space-y-2 text-sm sm:text-base md:text-lg font-medium text-foreground/80">
                            <Link
                                href="/#about-me"
                                className="hover:text-primary transition-colors duration-200"
                            >
                                About
                            </Link>
                            <Link
                                href="/#selected-projects"
                                className="hover:text-primary transition-colors duration-200"
                            >
                                Work
                            </Link>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary transition-colors duration-200"
                            >
                                Resume
                            </a>
                            <a
                                href={linkedinLink}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary transition-colors duration-200"
                            >
                                LinkedIn
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Bottom Section: Direct Contact Details */}
                <div className="flex flex-col items-center text-center">
                    {/* Prominent Email matching 'Stay connected' scale */}
                    <div className="relative group inline-flex items-center justify-center max-w-full px-2">
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="text-base xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 break-all sm:break-normal"
                        >
                            {GENERAL_INFO.email}
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            title="Copy email to clipboard"
                            className="ml-2 sm:ml-3 p-1.5 rounded-full bg-muted/30 hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all duration-200 opacity-80 hover:opacity-100 shrink-0"
                        >
                            {copied ? (
                                <Check size={16} className="text-green-400" />
                            ) : (
                                <Copy size={16} />
                            )}
                        </button>
                    </div>

                    {copied && (
                        <span className="text-xs font-mono text-green-400 animate-fade-in-scale pt-1">
                            Email copied to clipboard!
                        </span>
                    )}
                </div>
            </div>

            {/* Copyright info stuck flush to the bottom */}
            <div className="max-w-6xl w-full mx-auto relative z-[1] border-t border-border/20 pt-3 pb-1 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground/60 gap-2">
                <p>© {currentYear} Adarsh Kushwaha. All rights reserved.</p>
                <p className="font-mono">Designed & Built with passion</p>
            </div>
        </footer>
    );
};

export default Footer;
