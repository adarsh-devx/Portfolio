import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="text-muted-foreground text-sm">
                    <p>© {currentYear} Adarsh Kushwaha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
