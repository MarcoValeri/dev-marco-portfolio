import TechAnimation from "../TechAnimation/TechAnimation";
import Navigation from "../Navigation/Navigation";

import "./Header.scss";

const Header = ({headline}) => {
    return (
        <header className="header">
            <div className="header__container-nav">
                <Navigation />
            </div>
            <div className="header__container-content">
                <h1 className="header__title h1">Marco Valeri</h1>
                <h2 className="header__sub-title h2">{headline}</h2>
            </div>
            <div className="header__container-tech">
                <TechAnimation />
            </div>
        </header>
    )
}

export default Header;