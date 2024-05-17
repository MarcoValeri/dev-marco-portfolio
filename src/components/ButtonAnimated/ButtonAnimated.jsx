import { Link } from "react-router-dom";
import "./ButtonAnimated.scss";

const ButtonAnimated = ({url, content, size, isExternalLink}) => {

    return (
        <div className={`button-animated ${size}`}>
            {isExternalLink && (
                <a className="button-animated__link" href={url} rel="noreferrer noopener" target="_blank">
                    <div className="button-animated__content">
                        {content}
                    </div>
                </a>
            )}
            {!isExternalLink && (
                <Link to={url} className="button-animated__link" rel="noreferrer noopener">
                    <div className="button-animated__content">
                        {content}
                    </div>
                </Link>
            )}
        </div>
    )
}

export default ButtonAnimated;