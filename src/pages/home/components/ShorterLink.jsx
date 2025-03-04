import { useState } from "react";
import "./shorterLink.scss";
import { getWindowType } from "@utils/utils";

const ShorterLink = () => {
    const [link, setLink] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(link);
    }
    const windowType = getWindowType(window.innerWidth);

    return (
        <form className="shorter-link" onSubmit={handleSubmit} style={{backgroundImage: `url(./icons/bg-shorten-${windowType}.svg)`}}>
            <label htmlFor="link"/>
            <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="text" 
                name="link"
                className="shorter-link-input poppins-bold"
                placeholder="Shorten a link here..."    
            />
            <button type="submit" className="shorter-link-button poppins-bold">Shorten It!</button>
        </form>
    );
}

export default ShorterLink;