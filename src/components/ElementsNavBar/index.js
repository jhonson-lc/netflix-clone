import React from 'react';
import { optionsNavBar } from 'services/settings';
import { useLocation } from 'wouter';

function ElementsNavbar() {
  const [, pushLocation] = useLocation('');
  const handleClick = e => {
    console.log(e.target.textContent);
    e.target.textContent === 'Inicio'
      ? pushLocation('/')
      : pushLocation(`/${e.target.textContent.toLowerCase().replace(' ', '')}`);
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
