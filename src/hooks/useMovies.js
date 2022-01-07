import { useState, useEffect } from 'react';
import getMovies from 'services/getMovies';

const useMovies = fetchUrl => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies({ fetchUrl: fetchUrl }).then(data => setMovies(data));
  }, [fetchUrl]);

  return { movies };
};

export default useMovies;
