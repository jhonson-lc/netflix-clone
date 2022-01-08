import './NavBar.css';
import { Link } from 'wouter';
import ElementsNavBar from 'components/ElementsNavBar';

function NavBar() {
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
        <ElementsNavBar />
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
