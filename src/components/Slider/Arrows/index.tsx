import { FunctionComponent } from 'react';
import styles from './Arrows.module.scss';

type ArrowsProps = { prevSlide: () => void; nextSlide: () => void };

const Arrows: FunctionComponent<ArrowsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <div className={styles.Arrows}>
      <span className={styles.Arrows__left} onClick={prevSlide}>
        &#10094;
      </span>
      <span className={styles.Arrows__right} onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default Arrows;
