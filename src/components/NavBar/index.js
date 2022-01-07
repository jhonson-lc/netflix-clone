import './NavBar.css';
import { optionsNavBar } from 'services/settings';
import { useLocation } from 'wouter';
import { Link } from 'wouter';

function NavBar() {
  const [, pushLocation] = useLocation('');

  const handleClick = e => {
    e.preventDefault();
    pushLocation(`/${e.target.textContent.toLowerCase().replace(' ', '')}`);
  };
  return (
    <div>
      <section className="navbar">
        <Link to="/">
          <img
            className="navbar__img"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Logo Netflix"
          />
        </Link>
        <nav className="navbar__container">
          <ul className="navbar__list">
            {optionsNavBar.map(item => {
              return (
                <li key={item} onClick={handleClick} className="navbar__item">
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
        <img
          className="navbar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png
"
          alt="Logo Avatar"
        />
      </section>
    </div>
  );
}

export default NavBar;
