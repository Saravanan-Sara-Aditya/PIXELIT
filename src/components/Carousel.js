import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/Img5.png'
import img2 from '../assets/images/Img6.png';
import img3 from '../assets/images/Img7.png';
import img4 from '../assets/images/img4.png';
import ImageWithSkeleton from '../Layouts/Skeleton';

const slides = [
  {
    // caption: 'Pixel IT Group',
    image: img1,
  },
  {
    // caption: 'Servers',
    image: img2,
  },
  {
    // caption: 'Support',
    image: img3,
  },
  {
    // caption: 'Innovative IT Support for a Future-Ready Business',
    // subCaption: 'Prepare your business for tomorrow’s challenges with our cutting-edge solutions today',
    image: img4,
  },
];

const SlideshowBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ filter: 'brightness(0.9)' }} className="slideshow-banner position-relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide slide-${index} ${index === currentSlide ? 'active' : ''}`}
        >
          <div>
            <ImageWithSkeleton
              style={{ objectFit: 'cover', borderRadius: '0px !important', width: '100%', height: '100vh' }}
              src={slide.image}
            />
          </div>
          <div className="caption-container">
            <h1 className="caption">{slide.caption}</h1>
            {slide.subCaption && <h2 className="subCaption">{slide.subCaption}</h2>}
          </div>
        </div>
      ))}
      <style jsx>{`
        .slideshow-banner {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .active {
          opacity: 1;
        }
        .caption-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        .caption {
          font-size: 4vw;
          font-weight: bold;
          margin: 0;
        }
        .subCaption {
          font-size: 2vw;
          margin-top: 10px;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .caption {
            font-size: 6vw;
          }
          .subCaption {
            font-size: 3vw;
          }
        }

        @media (max-width: 768px) {
          .caption {
            font-size: 8vw;
          }
          .subCaption {
            font-size: 4vw;
          }
        }

        @media (max-width: 576px) {
          .caption {
            font-size: 10vw;
          }
          .subCaption {
            font-size: 5vw;
          }
        }
      `}</style>
    </div>
  );
};

export default SlideshowBanner;
