import { FunctionComponent } from 'react';
import styles from './Dots.module.scss';

type DotsProps = {
  activeIndex: number;
  onclick: (index: number) => void;
  imageSlider: any[];
};

const Dots: FunctionComponent<DotsProps> = ({
  activeIndex,
  onclick,
  imageSlider
}) => {
  return (
    <div className={styles.Dots}>
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? styles.Dots__active : styles.Dots__inactive
          }`}
          onClick={() => onclick(index)}></span>
      ))}
    </div>
  );
};

export default Dots;
