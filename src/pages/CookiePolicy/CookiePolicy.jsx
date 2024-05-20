import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { PAGES } from "../../content/pages";

import "./CookiePolicy.scss";

const CookiePolicy = () => {
    return (
        <>
            <Header headline="Cookie Policy" />
            <div className="cookie-policy">
                <div className="cookie-policy__container">
                    <h2 className="cookie-policy__title h1">Cookie Policy</h2>
                    {PAGES.map(cookiePolicyContent => cookiePolicyContent.page === "cookie policy" && (
                        cookiePolicyContent.content.map((content, index) => (
                            <p key={index} className="body-3" dangerouslySetInnerHTML={{__html: content}} />
                        ))
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CookiePolicy;