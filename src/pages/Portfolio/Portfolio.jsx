import CarouselInfinite from '../../components/CarouselInfiniteSkills/CarouselInfiniteSkills';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import TitleElastic from '../../components/TitleElastic/TitleElastic';

import { PROJECTS } from '../../content/projects';

import './Portfolio.scss';

const Portfolio = () => {
    return (
        <div>
            <Header headline="Portfolio" />
            <TitleElastic title="Portfolio" />
            <div className="portfolio__container-portfolio">
                {PROJECTS.map((project, index) => {
                    return (
                        <ProjectCard key={index} {...project} />
                    )
                })}
            </div>
            <div>
                <CarouselInfinite />
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;