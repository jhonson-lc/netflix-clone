import React from 'react';
import styles from './Button.module.css';

function Button({ title, icon, handleClick }) {
  const styleButton = title === 'Reproducir' ? styles.button : styles.button__info;

  return (
    <button onClick={handleClick} className={styleButton}>
      <div>{icon}</div>
      <span>{title}</span>
    </button>
  );
}

export default Button;
