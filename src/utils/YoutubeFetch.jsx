
export const YoutubeData = async(URL)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY_YOUTUBE,
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(URL, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}