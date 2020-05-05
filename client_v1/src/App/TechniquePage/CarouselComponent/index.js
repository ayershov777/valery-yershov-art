import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ImageComponent from '../../ImageComponent';

import './CarouselComponent.css'

function CarouselComponent(props) {
  return (
    <div className="CarouselComponent">
      <Carousel className="Carousel" interval={(!window.screenTop && !window.screenY) ? 2000 : 0}>
        {props.slideshow.map((photo, idx) => (
          <Carousel.Item key={`carousel-image-${idx}`}>
            <div className="frame" 
              onClick={e => {
                if (e.target.requestFullscreen) { // W3C API
                  e.target.requestFullscreen();
                } else if (e.target.mozRequestFullscreen) { // Mozilla current API
                  e.target.mozRequestFullscreen();
                } else if (e.target.webkitRequestFullscreen) { // Webkit current API
                  e.target.webkitRequestFullscreen();
                } // Maybe other prefixed APIs?
              }}
            >
              <ImageComponent photo={photo} style={{ }} />
              {/* <img
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
              } */}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;