import Nav from "../nav/Nav";

import "./Header.scss";

const Header = ({headline}) => {
    return (
        <header className="header">
            <div className="header__container-nav">
                <Nav />
            </div>
            <h1>Marco Valeri</h1>
            <h2>{headline}</h2>
        </header>
    )
}

export default Header;