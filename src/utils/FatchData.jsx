
const options = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY_FATCH,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
const FatchData = async (url) => {
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;

  } catch (error) {
    console.log(error);
    console.log("not able to fatch");
  }
};
export default FatchData;
