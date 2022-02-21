export default async function getVideos({ fetchUrl }) {
  const API__URL = `https://api.themoviedb.org/3${fetchUrl}`;
  return fetch(API__URL)
    .then(res => res.json())
    .then(apiResponse => apiResponse);
}
