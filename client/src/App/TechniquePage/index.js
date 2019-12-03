import React from 'react';

import CarouselComponent from './CarouselComponent';

export default function TechniquePage({ data }) {
  return (
    <div>
      <CarouselComponent slideshow={[ data.photos.test1, data.photos.test1 ]} />
    </div>
  );
}
