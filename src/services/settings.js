export const API_KEY = '6790a11822d3a4f9c9de9b25e6ea0ffc';
export const API__URL = `https://api.themoviedb.org/3`;
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
export const optionsNavBar = ['Inicio', 'Series', 'Películas', 'Novedades Populares', 'Mi Lista'];

export const home = {
  fetchOriginals: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-ES`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const series = {
  fetchLatest: `/tv/on_the_air?api_key=${API_KEY}&language=es-ES`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchPopular: `/tv/popular?api_key=${API_KEY}&language=es-ES`,
};
