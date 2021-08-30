import { FunctionComponent, useEffect, useState } from 'react';
import styles from './Slider.module.scss';

import firstJPG from '../../assets/blog-1.jpg';
import secondJPG from '../../assets/blog-2.jpg';
import thirdJPG from '../../assets/blog-3.jpg';

import Arrows from './Arrows';
import Content from './Content';
import Dots from './Dots';

type SliderProps = {};

const Slider: FunctionComponent<SliderProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === imageSliderLength ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className={styles.Slider}>
      <Content activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? imageSliderLength : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(
            activeIndex === imageSliderLength ? 0 : activeIndex + 1
          )
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;

export const imageSlider = [
  {
    title: 'First Slider Image',
    description: 'This is the first slider image',
    url: firstJPG
  },
  {
    title: 'Second Slider Image',
    description: 'This is the second slider image',
    url: secondJPG
  },
  {
    title: 'Third Slider Image',
    description: 'This is the third slider image',
    url: thirdJPG
  }
];

export const imageSliderLength = imageSlider.length - 1;
