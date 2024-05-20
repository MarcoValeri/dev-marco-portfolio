import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import CookieBanner from '../CookieBanner/CookieBanner';

import './Footer.scss';

const Footer = () => {

    const setNewCookie = (cookieName, cookieValue, cookieDaysToExpire) => {
        let expires = "";
        if (cookieDaysToExpire) {
            const date = new Date();
            date.setTime(date.getTime() + (cookieDaysToExpire * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = cookieName + "=" + (cookieValue || "") + expires + "; path=/";
    }

    const checkCookieBannerAccept = () => {
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();

            if (cookie.startsWith("cookieBanner=")) {
                let cookieValue = cookie.substring("cookieBanner=".length);
                if (cookieValue === "accepted") {
                    return true;
                } else {
                    return false;
                }
            }
        }

        return false;
    }

    const [isCookiesAccepted, setIsCookiesAccepted] = useState(() => checkCookieBannerAccept() ? true : false);

    const handleClickCookiesAccpet = () => {
        setNewCookie("cookieBanner", "accepted", 30);
        setIsCookiesAccepted(true);
    }

    const getYear = new Date().getFullYear();

    return (
        <>
            <div className="footer">
                <div className="footer__container-social">
                    <div className="footer__container-linkedin">
                        <a href="https://www.linkedin.com/in/valeri-marco/" target="_blank" rel="noreferrer noopener">
                            <IconContext.Provider value={{ className: 'footer__social-icon icon icon__linkedin' }}>
                                <FaLinkedin />
                            </IconContext.Provider>
                        </a>
                    </div>
                    <div className="footer__container-github">
                        <a href="https://github.com/MarcoValeri" target="_blank" rel="noreferrer noopener">
                            <IconContext.Provider value={{ className: 'footer__social-icon icon icon__github--white' }}>
                                <FaGithub />
                            </IconContext.Provider>
                        </a>
                    </div>
                    <div className="footer__container-twitter">
                        <a href="https://twitter.com/MarkoValeri" target="_blank" rel="noreferrer noopener">
                            <IconContext.Provider value={{ className: 'footer__social-icon icon icon__twitter' }}>
                                <FaTwitterSquare />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
                <div className="footer__container-credits">
                    <p className="footer__credits body-4">Made with <span className="footer__heart">&hearts;</span> in London by Marco Valeri - &copy; {getYear} - All rights reserved</p>
                </div>
            </div>
            {!isCookiesAccepted && <CookieBanner onClickAcceptCookies={handleClickCookiesAccpet} />}
        </>
    )

}

export default Footer;