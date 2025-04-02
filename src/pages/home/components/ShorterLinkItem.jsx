import { useState } from "react";
import copy from "copy-to-clipboard";
import "./shorterLinkItem.scss";

const ShorterLinkItem = ({ link }) => {
    const [active, setActive] = useState(false);
    
    const handleCopy = () => {
        const isCopy = copy(link.shortUrl);
        if(isCopy) {
            console.log("succesfully copied");
            setActive(true);
        }
        else{
            console.log("an error has ocurred");
            setActive(false);
        }
    };

    return (
        <div className="short-link-item poppins-medium">
            <p className="url">{link.url}</p>
            <div className="short-url-div">
                <p className="short-url">{link.shortUrl}</p>
                <button
                    className={`short-url-button ${active ? "active" : ""}`}
                    onClick={handleCopy}
                >
                    {active? ("Copied!") : ("Copy")}
                </button>
            </div>
        </div>
    );
}

export default ShorterLinkItem;