import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import SmoothImage from '../SmoothImage';
// import ImageComponent from '../ImageComponent';
import LogosComponent from './LogosComponent';
import QuotesComponent from './QuotesComponent';

import Button from 'react-bootstrap/Button';

import './HomePage.css';

function HomePage({ data }) {
  const screenTablet = window.matchMedia("(min-width: 760px) and (max-width: 1024px)");
  const screenSmall = window.matchMedia("(max-width: 640px)").matches;
  const screenMedium = window.matchMedia("(min-width: 1024px)").matches;
  const screenLarge = window.matchMedia("(min-width: 1367px)").matches;

  const history = useHistory();

  const logos = [
    data.photos.artsy_logo,
    data.photos.art_miami_logo,
    data.photos.sothebys_logo,
    data.photos.phillips_house_logo,
    data.photos.palm_beach_logo,
    data.photos.art_new_york_logo,
    data.photos.armory_logo,
    data.photos.national_arts_club_logo,
    data.photos.saatchi_logo,
    data.photos.white_box_logo,
    data.photos.kolodzei_logo,
    data.photos.neuberger_logo,
  ];

  const quotes = [
    `Valery does not impose his own readings on his art; instead, he plays on the
    ambivalence of meaning, encouraging discussion of his work.`, /*By placing characters into this unreal space, Yershov highlights the
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

  //hooks
  const [backLoaded, setBackLoaded] = useState(false);

  return (
    <div className="HomePage">
      {!backLoaded && screenLarge && <img
        src="https://valery-yershov-art.s3.amazonaws.com/front.jpg"
        style={{ display: 'none' }}
        onLoad={() => setBackLoaded(true)}
      />}
      {backLoaded && <div
        style={{
          position: 'absolute',
          zIndex: '-1000',
          width: '100vw',
          height: '100%',
          backgroundImage: `url(https://valery-yershov-art.s3.amazonaws.com/front.jpg)`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: 'calc(100vh - 62px)',
          animation: backLoaded && 'fadeIn linear 1.5s'
        }}
      />}
      <div
        style={{
          backgroundColor: ( screenLarge ? 'rgba(255, 255, 255, 0.5)' : 'none' )
        }}
      >

        {/* FrontImageComponent */}
        <div className="flex-center">
          <div
            className="clickable"
            onClick={() => history.push('/collections/featured')}
            style={{ 
              border: '1px solid gray',
              borderRadius: '50%',
              overflow: 'hidden',
              marginTop: '4vh'
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

        {/* art fair component */}
        <div className="flex-center" style={{ marginTop: '3vw', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h3 style={{ color: 'black', maxWidth: '75vw', fontWeight: 700, fontSize: '1.4em'}}>Valery will be presenting his works at Palm Beach Modern + Contemporary, January 9-12</h3>
          <Button style={{ margin: '3vh' }} as={Link} to="/collections/featured" variant="dark">See featured works</Button>
          <SmoothImage photo={data.photos.palm_beach} style={{ backgroundColor: 'white', border: '1px solid gray', marginTop: '1vw', padding: '0 2vw 2vw 2vw', width: screenSmall ? '85vw' : '60vw' }} />
        </div>

        {screenMedium ? <QuotesComponent quotes={quotes} authors={authors} /> : <><br /><br /></>}
        <LogosComponent logos={logos} />
        <br />

        <h3 
            style={{
              backgroundColor: !screenLarge && 'white',
              color: !screenLarge && 'black',
              fontWeight: 500,
              textShadow: screenLarge && `0px 0px 10px #323232`,
              textAlign: 'center',
              padding: '2vw'
            }}
          >
            Valery works in his beautiful studio in Hell's Kitchen, NYC. We invite you to come and visit us!
          </h3>

        {/* StudioComponent */}
        <div
          style={!screenLarge ? {
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
            // paddingTop: '7vh'
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }: {}}
        >
          {/* <h3 
            style={{
              background: !screenLarge && 'linear-gradient(white, rgba(255, 255, 255, 0.3))',
              color: !screenLarge && 'black',
              fontWeight: 500,
              textShadow: `0px 0px 10px ${screenLarge ? '#323232' : 'white'}`,
              textAlign: 'center',
              padding: '2vw'
            }}
          >
            Valery works in his beautiful studio in Hell's Kitchen, NYC. We invite you to come and visit us!
          </h3> */}
          {/* <div></div> */}
          {/* <div
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
            <Button 
              variant="dark"
              style={{
                fontSize: screenLarge ? '2vw' : '5vw',
                textAlign: 'center',
                textShadow: '0 0 1px black',
                marginTop: '4px',
                width: !screenLarge && '100vw' }}
              as={Link}
              to="/contact"
            > Visit the Studio </Button>
          </div> */}
        </div>
        <div
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
            <Button 
              variant="dark"
              style={{
                fontSize: screenLarge ? '2vw' : '5vw',
                textAlign: 'center',
                textShadow: '0 0 1px black',
                margin: '4px 4px',
                width: !screenLarge && 'calc(100vw - 8px)' }}
              as={Link}
              to="/contact"
            > Visit the Studio </Button>
          </div>

      </div>

      {/* FrostComponent */}
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