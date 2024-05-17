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
                    <p className="body-3">Today I am proud about what I have done because I found my dream job: be a great Front End developer.</p>
                    <p className="body-3">This is the reason why I still love every Monday morning.</p>
                    <p className="body-3">My main goal as a Web Developer is to increase customer satisfaction delivering robust code that can reduce maintenance time and technical debt. </p>
                    <p className="body-3">At the moment I am working with Node, React and PHP but because of my knowledge I am able to switch between new and old technologies easily.</p>
                    <p className="body-3">I love the JavaScript environment because it allows creating faster web applications, this is why I am glad of using NodeJS and React together.</p>
                    <p className="about-me__content-last-line body-3">I like PHP too because a lot of businesses in the world have been written with this programming language that version by version is getting faster, more secure and better - especially from the version 8.</p>
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