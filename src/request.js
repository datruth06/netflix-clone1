const API_key = 'c140f10e573469ec4a9855bce238f005';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_key}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_key}&with_genres=99`,
};

export default requests;

