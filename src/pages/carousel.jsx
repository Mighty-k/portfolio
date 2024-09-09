import { useState } from 'react';
import './home.css'; // Make sure to create a corresponding CSS file for styling
const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = (event) => {
    event.preventDefault(); // Prevent default action
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = (event) => {
    event.preventDefault(); // Prevent default action
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='carousel'>
      <button className='left-arrow' onClick={prevSlide}>
        &lt;
      </button>
      <button className='right-arrow' onClick={nextSlide}>
        &gt;
      </button>
      
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div
              
              className='carousel-img'>
                <img src={slide.image} alt='work' className='image' />
              </div>
            )}
            <p >
               <p className='carousel-desc'> {slide.text}</p>
              <a href={slide.link}
              target="_blank"
                    rel="noopener noreferrer"
              >visit</a>
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
