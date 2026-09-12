'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[100svh] w-full flex flex-col justify-center items-center bg-black text-[#e8e0d8] px-4 select-none overflow-hidden">
            {/* Massive 404 Display */}
            <h1 className="text-[26vw] sm:text-[22vw] md:text-[240px] lg:text-[320px] font-black tracking-[-0.04em] leading-none text-[#e8e0d8] text-center">
                404
            </h1>

            {/* Ultra-minimalist BACK HOME link */}
            <Link
                href="/"
                className="mt-4 sm:mt-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#e8e0d8] pb-1 border-b border-[#e8e0d8]/80 hover:text-white hover:border-white transition-all duration-200"
            >
                BACK HOME
            </Link>
        </div>
    );
}
