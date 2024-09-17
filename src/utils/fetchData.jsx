export const exerciseOptions = {
        method: 'GET',
        // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
};

export const youtubeOptions = {
  method: 'GET',
  // url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}