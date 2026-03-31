// AWLAYS PASS THIS OPTIONS WHENEVER MAKING API CALL, IN THIS CASE TMDB API 
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w342/{POSTER_PATH}"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"

export const SUPPORTED_LANGUAGES = [
    {
        identifier: "en",
        name: "English"
    }, {
        identifier: "hindi",
        name: "Hindi"
    }, {
        identifier: "spanish",
        name: "Spanish"
    },
]

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY