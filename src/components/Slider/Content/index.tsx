import { FunctionComponent } from 'react';
import styles from './Content.module.scss';

type ContentProps = { activeIndex: number; imageSlider: any[] };

const Content: FunctionComponent<ContentProps> = ({
  activeIndex,
  imageSlider
}) => {
  return (
    <div className={styles.Content}>
      {imageSlider.map((slide: any, index: number) => (
        <div
          key={index}
          className={
            index === activeIndex
              ? styles.Content__active
              : styles.Content__inactive
          }>
          <img
            className={styles.Content__image}
            src={slide.url}
            alt={`name-${index}`}
          />
          <h2 className={styles.Content__title}>{slide.title}</h2>
          <h3 className={styles.Content__description}>{slide.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default Content;
