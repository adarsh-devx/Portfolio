'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactNode, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function LenisGsapSync() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        lenis.on('scroll', ScrollTrigger.update);

        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();

        return () => {
            lenis.off('scroll', ScrollTrigger.update);
            gsap.ticker.remove(update);
        };
    }, [lenis]);

    return null;
}

type Props = {
    children: ReactNode;
};

const SmoothScroll = ({ children }: Props) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.4,
                syncTouch: true,
                autoRaf: false,
            }}
        >
            <LenisGsapSync />
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;
