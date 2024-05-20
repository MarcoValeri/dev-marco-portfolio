import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({isALink = false, content, onClickButton}) => {
    return (
        <>
            {isALink && <Link to="/cookie-policy" className="button" onClick={onClickButton}>{content}</Link>}
            {!isALink && <button className="button" onClick={onClickButton}>{content}</button>}
        </>
    )
}

export default Button;