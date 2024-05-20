import Button from '../Button/Button';
import { TbCookieMan, TbCookieManFilled } from 'react-icons/tb';
import { LuMilk } from 'react-icons/lu';

import './CookieBanner.scss';

const CookieBanner = props => {
    return (
        <div className="cookie-banner">
            <div className="cookie-banner__wrapper">
                <div>
                    <TbCookieManFilled className="cookie-banner__cookie-icon icon" />
                    <LuMilk className="cookie-banner__milk-icon icon" />
                    <TbCookieMan className="cookie-banner__cookie-icon icon" />
                </div>
                <div className="cookie-banner__container-content">
                    <p className="body-1">Transparency matters: I use cookies for essential website functions, but I don't collect your data.</p>
                    <p className="body-1">Go for it or check the Cookie Policy</p>
                </div>
                <div className="cookie-banner__container-buttons">
                    <Button content="Got it" onClickButton={props.onClickAcceptCookies} />
                    <Button isALink={true} content="Cookie Policy" onClickButton={props.onClickAcceptCookies} />
                </div>
            </div>
        </div>
    )
}

export default CookieBanner;