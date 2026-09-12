import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Adarsh Kushwaha - Creative FullStack Developer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#0a0f18',
                    backgroundImage:
                        'radial-gradient(circle at 85% 15%, rgba(255, 107, 107, 0.25) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(88, 166, 255, 0.2) 0%, transparent 50%)',
                    padding: '60px 80px',
                    fontFamily: 'sans-serif',
                    color: '#fdf6e2',
                }}
            >
                {/* Top Row: Name & Tag */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}
                    >
                        <div
                            style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: '#10b981',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                color: '#94a3b8',
                            }}
                        >
                            ADARSH KUSHWAHA
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 20px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            fontSize: '18px',
                            color: '#e2e8f0',
                        }}
                    >
                        adarshx.dev
                    </div>
                </div>

                {/* Center Main Headline */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    <div
                        style={{
                            fontSize: '72px',
                            fontWeight: 900,
                            lineHeight: 1.05,
                            letterSpacing: '-0.03em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Creative FullStack <br />
                        <span style={{ color: '#ff6b6b' }}>Developer</span>
                    </div>
                    <div
                        style={{
                            fontSize: '28px',
                            color: '#94a3b8',
                            maxWidth: '900px',
                        }}
                    >
                        Building high-performance web applications, motion design, and scalable architectures.
                    </div>
                </div>

                {/* Bottom Row: Tech Stack Tags */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                    }}
                >
                    {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GSAP'].map(
                        (tech) => (
                            <div
                                key={tech}
                                style={{
                                    padding: '8px 18px',
                                    borderRadius: '8px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#cbd5e1',
                                }}
                            >
                                {tech}
                            </div>
                        ),
                    )}
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}
