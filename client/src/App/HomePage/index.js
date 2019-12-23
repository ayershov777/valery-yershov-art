import React from 'react';

import ImageComponent from '../ImageComponent';
import LogosComponent from './LogosComponent';
import QuotesComponent from './QuotesComponent';
import MapComponent from '../MapComponent';

import Button from 'react-bootstrap/Button';

import './HomePage.css'

function HomePage({ data }) {
  const screenLarge = window.matchMedia("(min-width: 1367px)").matches;
  
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

  const quotes = [
    `Valery does not impose his own readings on his paintings; instead, he plays on the
    ambivalence of meaning filled with ideological and cultural layers, encouraging discussion
    of his work. By placing characters into this unreal space, Yershov highlights the
    unique-subjective human essence, with meaning shifting just beneath the surface. Valery's
    paintings strike and amaze the viewer's imagination, appealing to the viewer on both
    analytical and emotional levels while illuminating many aspects of the human experience`,
    `Valery Yershov's career as one of Russia's most accomplished contemporary artists, spans
    vast geographical, political, and social changes. As a result of bearing witness to these
    tectonic shifts in the collective experience of humanity, the artist and the man have 
    combined in the work, to present an unfettered vision of the world and to provide a
    barometer to some of the most profound cultural developments of the last 50 years.`,
    `Eternity is a mere moment, just long enough for a joke.`
  ];

  const authors = [ 'Natalia Kolodzei', 'Darren Jones', 'Herman Hesse' ];

  return (
    <div className="HomePage">
      <div
        style={{
          backgroundColor: ( screenLarge ? 'rgba(255, 255, 255, 0.5)' : 'none' )
        }}
      >
        <QuotesComponent quotes={quotes} authors={authors} />
        <LogosComponent logos={logos} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '2vw 0 1vw 0'
          }}
        >
          <Button variant="dark" style={{ fontSize: '2vw', textAlign: 'center', textShadow: '0 0 1px black' }}>
            Schedule a studio visit!&nbsp;&nbsp;
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(64, 64, 64, 0.3)' }}>
          <MapComponent />
        </div>
      </div>
      {screenLarge &&
        <div
          style={{
            background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 30vh',
            height: '130vh',
          }}
        />}
    </div>
  );
}

export default HomePage;