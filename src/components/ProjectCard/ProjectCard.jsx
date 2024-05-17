import ButtonAnimated from "../ButtonAnimated/ButtonAnimated";

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

import "./ProjectCard.scss";

const ProjectCard = ({projectImage, projectTitle, projectDescription, showRepository, projectRepository, projectUrl, projectShowButton, projectButton}) => {
    return (
        <div className="project-card">
            <div className="project-card__wrapper" style={{backgroundImage: `url('${projectImage}')`}}>
                <div className="project-card__container-title">
                        <h2 className="project-card__title h3">{projectTitle}</h2>
                    </div>
                <div className="project-card__container-description">
                    <p className="project-card__description body-2">{projectDescription}</p>
                </div>
                <div className="project-card__container-buttons">
                    {showRepository && (<div>
                        <a href={projectRepository} rel="noopener noreferrer" target="_blank">
                            <IconContext.Provider value={{className: 'icon icon__github--white'}}>
                                <FaGithub />
                            </IconContext.Provider>
                        </a>
                    </div>)}
                    {projectShowButton && (<div>
                        <ButtonAnimated
                            url={projectUrl}
                            content={projectButton}
                            isExternalLink={true}
                        />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;