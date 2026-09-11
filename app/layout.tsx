import type { Metadata } from 'next';
import { Anton, Roboto_Flex, Playfair_Display } from 'next/font/google';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import SterlingGateKineticNavigation from '@/components/ui/sterling-gate-kinetic-navigation';
// import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import SmoothScroll from '@/components/SmoothScroll';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import FluidSimulation from '@/components/FluidSimulation';
import FloatingLogo from '@/components/FloatingLogo';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

const playfairDisplay = Playfair_Display({
    weight: ['400', '700'],
    style: ['italic'],
    subsets: ['latin'],
    variable: '--font-playfair',
});

export const metadata: Metadata = {
    title: 'Portfolio - Adarsh Kushwaha',
    description: 'Personal portfolio of Adarsh Kushwaha',
    icons: {
        icon: [
            { url: '/icon.png', sizes: '512x512', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' },
        ],
        apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-MHLY1LNGY5" />
            <Script id="hotjar" strategy="afterInteractive">
                {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} ${playfairDisplay.variable} antialiased`}
            >
                <SmoothScroll>
                    {/* <a
                        href="https://forms.gle/t73XYJgWD5cJNr6e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Frontend dev? I&apos;ll help you polish your resume —
                        completely free.
                    </a> */}
                    <SterlingGateKineticNavigation />
                    <main>{children}</main>
                    <Footer />

                    {/* <CustomCursor /> */}
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <FluidSimulation />
                    <FloatingLogo />
                    <StickyEmail />
                </SmoothScroll>
            </body>
        </html>
    );
}
