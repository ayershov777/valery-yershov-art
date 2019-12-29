import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import ImageComponent from '../ImageComponent';
import LogosComponent from './LogosComponent';
import QuotesComponent from './QuotesComponent';

import Button from 'react-bootstrap/Button';

import './HomePage.css'

function HomePage({ data }) {
  const screenLarge = window.matchMedia("(min-width: 1367px)").matches;

  const history = useHistory();
  
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
    of his work.`, /*By placing characters into this unreal space, Yershov highlights the
    unique-subjective human essence, with meaning shifting just beneath the surface. Valery's
    paintings strike and amaze the viewer's imagination, appealing to the viewer on both
    analytical and emotional levels while illuminating many aspects of the human experience`,*/
    `Valery Yershov's career as one of Russia's most accomplished contemporary artists, spans
    vast geographical, political, and social changes.`/* As a result of bearing witness to these
    tectonic shifts in the collective experience of humanity, the artist and the man have 
    combined in the work, to present an unfettered vision of the world and to provide a
    barometer to some of the most profound cultural developments of the last 50 years.`*/
  ];

  const authors = [ 'Natalia Kolodzei', 'Darren Jones', 'Herman Hesse' ];

  return (
    <div className="HomePage">
      <div
        style={{
          backgroundColor: ( screenLarge ? 'rgba(255, 255, 255, 0.5)' : 'none' )
        }}
      >
        <div
          className="flex-center"
          style={{
            paddingTop: '4vh'
          }}
        >
          <div
            className="front-image"
            onClick={() => history.push('/collections')}
            style={{
              overflow: 'hidden',
              position: 'relative',
              borderRadius: '50%',
              border: '1px solid brown'
            }}
          >
            <ImageComponent
              photo={data.photos.octopus}
              style={{
                width: screenLarge ? '40vw' : '90vw',
                // border: '5px double black',
                // borderRadius: '20vw'
              }}
            />
          </div>
        </div>
        <QuotesComponent quotes={quotes} authors={authors} />
        <LogosComponent logos={logos} />

        {/* StudioComponent */}
        <h3 
          style={{
            textShadow: '0px 0px 2px #323232',
            textAlign: 'center',
            paddingTop: '10vh'
          }}
        >
          Valery works in his beautiful studio in Hell's Kitchen, New York City. We invite you to come and visit us!
        </h3>
        <div
          style={{
            display: 'flex', justifyContent: 'center', padding: '2vw 0 0 0'
          }}
        >
          <Button 
            variant="dark"
            style={{
              fontSize: '2vw', textAlign: 'center', textShadow: '0 0 1px black'
            }}
            as={Link}
            to="/contact"
          >
            Visit the Studio
          </Button>
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