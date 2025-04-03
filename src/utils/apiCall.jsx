import axios from "axios";
const TINY_URL_API_KEY = import.meta.env.VITE_TINY_URL_API_KEY

const isValidUrl = (url) => {
    if (url.length > 0) return true;
    return false;
};

const handleApiCall = async (link) => {
    const API_URL = "https://api.tinyurl.com/create";
    const API_KEY = TINY_URL_API_KEY;
    const body = { url: link };
    try {
        const response = await axios.post(API_URL,
            body,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );
        return response;
    } catch (error) {
        console.error("Error shortening the URL", error);
        return error;
    }
}

export { isValidUrl, handleApiCall };