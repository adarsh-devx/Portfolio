import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
// import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import Marquee from '@/components/Marquee';

export default function Home() {
    return (
        <div className="page- flex flex-col gap-10 md:gap-16">
            <Banner />
            <AboutMe />
            <Skills />
            {/* <Experiences /> */}
            <Marquee />
            <ProjectList />
        </div>
    );
}
