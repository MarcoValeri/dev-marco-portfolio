import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { PAGES } from "../../content/pages";

import "./About.scss";

const About = () => {
    return (
        <>
            <Header />
            <div className="about">
                <div className="about__container-content">
                    <h2 className="about__title h1">About me...</h2>
                    {PAGES.map(aboutPage => aboutPage.page === 'about' && (
                        aboutPage.content.map((content, index) => (
                            <div key={index} className="about__content">
                                <h2 className="h3">{content[0]}</h2>
                                {content[1].map((paragraph, paragraphIndex) => (
                                    <p key={paragraphIndex} className="body-3" dangerouslySetInnerHTML={{__html: paragraph}} />
                                ))}
                            </div>
                        ))
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;