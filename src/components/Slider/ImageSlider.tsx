import { useState } from 'react';
import { sliderItem } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ImageSlider.scss';

interface ImageSliderProps {
  slides: sliderItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={slide.title}
          >
            {index === current && (
              <div className='content'>
                <h2>{slide.title}</h2>
                <img src={slide.image} alt='travelImage' className='image' />

                <div className='buttons'>
                  <a href={slide.live} target='_blank' rel='noreferrer'>
                    Live
                  </a>
                  {slide.code && (
                    <a href={slide.code} target='_blank' rel='noreferrer'>
                      {slide.code.length > 1 ? 'Code' : ''}
                    </a>
                  )}
                  <Link to={`projects/${slide.link}`}>Details</Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
