const fromAPIResponseToMovies = apiResponse => {
  const { results = [] } = apiResponse;
  return results;
};

export default async function getMovies({ fetchUrl }) {
  const API__URL = `https://api.themoviedb.org/3${fetchUrl}`;
  return fetch(API__URL)
    .then(res => res.json())
    .then(fromAPIResponseToMovies);
}
