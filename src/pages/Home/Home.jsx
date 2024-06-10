import ButtonAnimated from '../../components/ButtonAnimated/ButtonAnimated';
import CarouselInfinite from '../../components/CarouselInfiniteSkills/CarouselInfiniteSkills';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import TitleElastic from '../../components/TitleElastic/TitleElastic';

import { PROJECTS } from '../../content/projects';

import './Home.scss';

const Home = () => {

    // Get the last four projects from PROJECTS
    const LASTESTPROJECTS = PROJECTS.slice(-4);

    return (
        <>
            <Header headline="Web Developer" />
            <TitleElastic title="LATEST PROJECTS" />
            <div className="home__container-projects">
                {LASTESTPROJECTS.map((project, index) => {
                    return (
                        <ProjectCard key={index} {...project} />
                    )
                })}
            </div>
            <div className="home__container-projects-button">
                <ButtonAnimated
                    url="/portfolio"
                    content="Discover All Projects"
                    size="button-animated__lg"
                    isExternalLink={false}
                />
            </div>
            <div>
                <CarouselInfinite />
            </div>
            <div className="home__container-about-preview">
                <TitleElastic title="Who am I?" />
                <div className="home__about-preview-content">
                    <h4 className="h4">Abot me</h4>
                    <p className="body-3">Today, I'm proud to say I've found my dream job as a web developer, and I still love every Monday morning because of it.</p>
                    <p className="body-3">My main goal is to increase customer satisfaction by delivering robust, maintainable code that reduces technical debt. Currently, I work primarily with Node.js, React, and TypeScript, but I'm a quick learner and can easily adapt to new technologies while maintaining a strong foundation in established ones.</p>
                    <p className="about-me__content-last-line body-3">I'm particularly passionate about the JavaScript environment, as it enables the creation of faster, more responsive web applications, which is why I enjoy using Node.js and React together.</p>
                </div>
                <div className="home__about-preview-btn">
                    <ButtonAnimated
                        url="/about"
                        content="React more about me"
                        size="button-animated__lg"
                        isExternalLink={false}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;