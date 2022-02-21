import styles from './Controls.module.css';
import { useState } from 'react';

function Controls({ category }) {
  const { current } = category;
  const [display, setDisplay] = useState(styles.hidden);

  const handleScroll = e => {
    if (e.target.dataset.side === 'right') {
      current.scrollLeft += current.offsetWidth;
    } else {
      current.scrollLeft -= current.offsetWidth;
    }

    if (current.scrollLeft === 0) {
      setDisplay(styles.hidden);
    } else {
      setDisplay(styles.visible);
    }
  };

  return (
    <section>
      <button data-side="right" className={styles.Button} onClick={handleScroll}>
        <span></span>
        <span></span>
      </button>
      <button
        data-side="left"
        className={`${styles.Button} ${styles.Buttonprev} ${display}`}
        onClick={handleScroll}>
        <span></span>
        <span></span>
      </button>
    </section>
  );
}

export default Controls;
