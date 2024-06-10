import './TechAnimation.scss';

// Import Icons
import { IconContext } from 'react-icons/lib';
import { FaNodeJs, FaReact, FaSass, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiMysql, SiJavascript, SiTypescript } from 'react-icons/si';

const TechAnimation = () => {
    return (
        <div className="tech-animation">
            <IconContext.Provider value={{ className: 'icon icon__node tech-animation__icon-node' }}>
                <FaNodeJs />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'icon icon__react tech-animation__icon-react' }}>
                <FaReact />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'icon icon__typescript tech-animation__icon-typescript' }}>
                <SiTypescript />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'icon icon__javascript tech-animation__icon-javascript' }}>
                <SiJavascript />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'icon icon__mysql tech-animation__icon-mysql' }}>
                <SiMysql />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'icon icon__sass tech-animation__icon-sass' }}>
                <FaSass />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'icon icon__css tech-animation__icon-css' }}>
                <FaCss3Alt />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'icon icon__html tech-animation__icon-html' }}>
                <FaHtml5 />
            </IconContext.Provider>
        </div>
    )
}

export default TechAnimation;