import React from 'react';

import CarouselComponent from '../TechniquePage/CarouselComponent';

import ImageComponent from '../ImageComponent';
import LogosComponent from './LogosComponent';

import './HomePage.css'

function HomePage({ data }) {
  
  const logos = [
    data.photos.sothebys_logo,
    data.photos.phillips_house_logo,
    data.photos.palm_beach_logo,
    data.photos.art_new_york_logo,
    data.photos.armory_logo,
    data.photos.saatchi_logo,
    data.photos.white_box_logo,
    data.photos.kolodzei_logo,
    data.photos.neuberger_logo,
    data.photos.national_arts_club_logo,
  ];

  return (
    <div className="HomePage">
      {/* <CarouselComponent slideshow={frontPage.slideshow} /> */}

    <LogosComponent logos={logos} />

    </div>
  );
}

export default HomePage;