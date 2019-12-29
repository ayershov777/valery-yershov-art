import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import useWindowSize from '../../hooks/windowSize';

import SmoothImage from '../SmoothImage';
// import ImageComponent from '../ImageComponent';
import LogosComponent from './LogosComponent';
import QuotesComponent from './QuotesComponent';

import Button from 'react-bootstrap/Button';

import './HomePage.css'

function HomePage({ data }) {
  const screenMedium = window.matchMedia("(min-width: 1024px)").matches;
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

        {/* FrontImageComponent */}
        <div className="flex-center">
          <div
            className="clickable"
            onClick={() => history.push('/collections')}
            style={{ 
              border: '4px solid gray',
              borderRadius: '50%',
              overflow: 'hidden',
              marginTop: '2vh'
            }}
          >
            <SmoothImage
              photo={data.photos.octopus}
              style={{
                width: screenMedium ? '45vw' : '90vw',
                height: 
                (() => {
                  let photo = data.photos.octopus;
                  let width = window.innerWidth * (screenMedium ? 0.45 : 0.9);
                  let scale = width / photo.pxWidth;
                  let height = photo.pxHeight * scale;
                  return height;
                })()
              }}
            />
          </div>
        </div>

        <QuotesComponent quotes={quotes} authors={authors} />
        <LogosComponent logos={logos} />

        {/* StudioComponent */}
        <div
          style={{
            backgroundImage: !screenLarge && `url(${data.photos.front.mainUrl})`,
            backgroundSize: 'cover',
            height:
              (() => {
                let photo = data.photos.front;
                let width = window.innerWidth;
                let scale = width / photo.pxWidth;
                let height = photo.pxHeight * scale;
                return height;
              })(),
            paddingTop: '10vh'
          }}
        >
          <h3 
            style={{
              backgroundColor: !screenLarge && 'rgba(255, 255, 255, 0.4)',
              color: !screenLarge && 'black',
              textShadow: `0px 0px 3px ${screenLarge? '#323232' : 'white'}`,
              textAlign: 'center',
              paddingTop: '1vw'
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
              // size={screenLarge ? 'sm': 'lg'}
              style={{
                fontSize: screenLarge? '2vw' : '5vw',
                textAlign: 'center',
                textShadow: '0 0 1px black',
                minWidth: '256px'
              }}
              as={Link}
              to="/contact"
            >
              Visit the Studio
            </Button>
          </div>
        </div>

      </div>

      {/* FrontComponent */}
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