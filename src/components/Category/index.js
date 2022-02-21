import React, { useRef } from 'react';
import './Category.css';
import { IMAGE_URL } from 'services/settings';
import useMovies from 'hooks/useMovies';
import { useLocation } from 'wouter';
import Controls from 'components/Controls';

function Category({ title, fetchUrl, isLarge }) {
  const category = useRef(null);
  const { movies } = useMovies(fetchUrl);
  const [, pushLocation] = useLocation('');

  const typeFetch = fetchUrl.substring(1, fetchUrl.lastIndexOf('/'));

  const handleShow = id => {
    const fetchUrl = typeFetch === 'tv' ? 'tv' : 'movie';
    pushLocation(`/${fetchUrl}/${id}`);
  };

  return (
    <div className="category">
      <h1 className="category__title">{title}</h1>

      <section className="category__container" ref={category}>
        {movies.map(({ backdrop_path, poster_path, id, name }) => {
          return (
            backdrop_path && (
              <img
                key={id}
                className={`category__item ${isLarge && 'category__item--large'}`}
                src={`${IMAGE_URL}${isLarge ? poster_path : backdrop_path}`}
                alt={name}
                onClick={() => handleShow(id)}
              />
            )
          );
        })}
      </section>
      <Controls category={category} />
    </div>
  );
}

export default Category;
