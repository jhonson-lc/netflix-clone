import useMovies from 'hooks/useMovies';
import './Category.css';
import { IMAGE_URL } from 'services/settings';

function Category({ title, fetchUrl, isLarge }) {
  const { movies } = useMovies(fetchUrl);
  return (
    <div className="category">
      <h1 className="category__title">{title}</h1>
      <section className="category__container">
        {movies.map(({ backdrop_path, poster_path, id, name }) => {
          return (
            <img
              key={id}
              className={`category__item ${isLarge && 'category__item--large'}`}
              src={`${IMAGE_URL}${isLarge ? poster_path : backdrop_path}`}
              alt={name}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Category;
