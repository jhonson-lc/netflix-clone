export const API_KEY = '6790a11822d3a4f9c9de9b25e6ea0ffc';
export const API__URL = `https://api.themoviedb.org/3`;
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
export const optionsNavBar = ['Inicio', 'Series', 'Películas', 'Novedades Populares', 'Mi Lista'];

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-ES`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchVideos: `/videos?api_key=${API_KEY}`,
};

export default requests;
