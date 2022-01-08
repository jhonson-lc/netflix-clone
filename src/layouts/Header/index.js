import React, { useEffect, useState } from 'react';
import { IMAGE_URL } from 'services/settings';
import requests from 'services/settings';
import useMovies from 'hooks/useMovies';
import stringFormat from 'utils/stringFormat';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import Button from 'components/Button';

import './Header.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  const { movies } = useMovies(requests.fetchNetflixOriginals);

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
        <p className="banner__description">{stringFormat(movie?.overview, 150)}</p>
        <div className="banner__btns">
          <Button title="Reproducir" icon={<FaPlay />} />
          <Button
            title="Más Información"
            backgroundColor="rgba(109, 109, 110, 0.7)"
            colorText="white"
            icon={<FaInfoCircle />}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
