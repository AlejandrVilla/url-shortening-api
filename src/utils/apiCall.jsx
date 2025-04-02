import axios from "axios";

const isValidUrl = (url) => {
    if (url.length > 0) return true;
    return false;
};

const handleApiCall = async (link) => {
    const API_URL = "https://cleanuri.com/api/v1/shorten";
    const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
    const body = `url=${link}`;
    try {
        const response = await axios.post(`${PROXY_URL}${API_URL}`, body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });
        return response;
    } catch (error) {
        console.error("Error shortening the URL", error);
        return error;
    }
}

export { isValidUrl, handleApiCall };