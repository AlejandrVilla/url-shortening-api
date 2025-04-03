import { useEffect, useRef, useState } from "react";
import { getWindowType, isValidUrl, handleApiCall } from "@utils/";
import "./shorterLink.scss";

const ShorterLink = ({ links, setLinks }) => {
    const [validUrl, setValidUrl] = useState(true);
    const linkRef = useRef(null);
    const windowType = getWindowType(window.innerWidth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = linkRef.current.value;
        const validLink = isValidUrl(url);
        setValidUrl(validLink);
        if (validLink) {
            const response = await handleApiCall(url);
            if (response.status === 200) {
                const shortUrl = response.data.data.tiny_url;
                setLinks([...links, { url: url, shortUrl: shortUrl }]);
            }
            else if (response.status === 400) {
                setValidUrl(false);
            }
        }
    }

    const style = {
        color: !validUrl ? "red" : "black",
        border: !validUrl ? "2px solid red" : "2px solid black",
    }

    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links));
    }, [links]);

    return (
        <form
            className="shorter-link-form"
            onSubmit={handleSubmit}
            style={{ backgroundImage: `url(./icons/bg-shorten-${windowType}.svg)` }}
        >
            <div className="shorter-link-wrap">
                <label htmlFor="link" />
                <input
                    type="text"
                    name="link"
                    className="shorter-link-input poppins-bold"
                    placeholder="Shorten a link here..."
                    ref={linkRef}
                    style={style}
                />
                {!validUrl && <p style={{ fontStyle: "italic" }} className="error-link poppins-medium">Bad link</p>}
            </div>
            <button type="submit" className="shorter-link-button poppins-bold">Shorten It!</button>
        </form>
    );
}

export default ShorterLink;