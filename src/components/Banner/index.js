import React, { useEffect, useState } from 'react';
import { IMAGE_URL } from 'services/settings';
import requests from 'services/settings';
import useMovies from 'hooks/useMovies';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  const { movies } = useMovies(requests.fetchNetflixOriginals);

  const cutString = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
  }, [movies]);
  return (
    <div className="banner">
      <div
        className="banner__img"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("${IMAGE_URL}${movie?.backdrop_path}")`,
          backgroundPosition: 'center center',
        }}></div>
      <div className="banner__spec">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="banner__description">{cutString(movie?.overview, 150)}</p>
        <div className="banner__btns">
          <div className="button__rep">
            <FaPlay className="btn__icon" />
            <button className="banner__btn ">Reproducir</button>
          </div>
          <div className="button__inf">
            <FaInfoCircle className="btn__icon" />
            <button className="banner__btn banner__btn--info">Mas Información</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
