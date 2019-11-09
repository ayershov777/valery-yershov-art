import React from 'react';

import CarouselComponent from './CarouselComponent';

import { frontPage } from '../../data';

import './HomePage.css'

function HomePage() {
  return (
    <div className="HomePage">
      <CarouselComponent slideshow={frontPage.slideshow} />
    </div>
  );
}

export default HomePage;