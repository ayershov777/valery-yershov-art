import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './CarouselComponent.css'

function CarouselComponent(props) {
  const [loadingImages, setLoadingImages] = useState(props.slideshow.map(() => true));
  
  const handleImageLoaded = (idx) => {
    let loading = [...loadingImages];
    loading[idx] = false;
    setLoadingImages(loading);
  }

  // handleImageError() {}

  return (
    <div className="CarouselComponent">
      <Carousel className="Carousel" interval={2000}>
        {props.slideshow.map((photos, idx) => (
          <Carousel.Item key={`carousel-image-${idx}`}>
            <div className="frame">
              <img
                className={`carousel-image`}
                src={process.env.PUBLIC_URL + photos.main.src}
                alt={photos.main.alt}
                onLoad={() => handleImageLoaded(idx)}
                style={loadingImages[idx]
                  ? {display: 'none'}
                  : {display: 'inline-block'}}
              />
              {loadingImages[idx] &&
                <img
                  id={`carousel-image-${idx}`}
                  src={process.env.PUBLIC_URL + photos.temp.src}
                  alt={photos.temp.alt}
                />
              }
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;