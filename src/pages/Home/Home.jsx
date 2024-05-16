import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import TitleElastic from '../../components/TitleElastic/TitleElastic';

import { PROJECTS } from '../../content/projects';

import './Home.scss';

const Home = () => {

    return (
        <>
            <Header headline="Web Developer" />
            <TitleElastic title="LATEST PROJECTS" />
            <div className="home__container-projects">
                {PROJECTS.map((project, index) => {
                    return (
                        <ProjectCard key={index} {...project} />
                    )
                })}
            </div>
        </>
    )
}

export default Home;