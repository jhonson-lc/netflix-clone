import React from 'react';
import { optionsNavBar } from 'services/settings';
import { useLocation } from 'wouter';
import { stringFormat } from 'utils/stringFormat';

function ElementsNavbar() {
  const [, pushLocation] = useLocation('');
  const handleClick = e => {
    e.target.textContent === 'Inicio'
      ? pushLocation('/')
      : pushLocation(`/${stringFormat(e.target.textContent)}`);
  };

  return (
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
  );
}

export default ElementsNavbar;
