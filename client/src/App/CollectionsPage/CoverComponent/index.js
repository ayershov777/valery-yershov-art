import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import ImageComponent from '../../ImageComponent';
import SmoothImage from '../../SmoothImage';

import './CoverComponent.css';

export default function CoverComponent({ collection, title, idx }) {
  const screenSmall = window.matchMedia('(max-width: 640px)').matches;

  const history = useHistory();

  const CoverImage = () => (
    <Link to={`/collections/${title}`} className="CollectionLink">
      <SmoothImage
        photo={collection.works[collection.coverIndex].photo}
        style={{
          width: '40vw',
          height: 
            (() => {
              let photo = collection.works[collection.coverIndex].photo;
              let width = window.innerWidth * 0.4;
              let scale = width / photo.pxWidth;
              let height = photo.pxHeight * scale;
              return height;
            })()
        }}
      />
    </Link>
  );

  const Description = () => (
    <div className="Description">
      <Link to={`/collections/${title}`} style={{ color: 'black', textDecoration: 'none' }}>
        <h3 className='title'>“{title}”</h3>
      </Link>
      <p>{collection.description}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => history.push(`/collections/${title}`)} style={{ margin: '4px' }} size="sm" variant="outline-dark">view collection</Button>
        <Button onClick={() => history.goBack()} style={{ margin: '4px' }} size="sm" variant="outline-dark">back</Button>
      </div>
    </div>
  );

  return (
    screenSmall
    ? <div className="CoverComponent-Mobile"
        style={{
          position: 'relative',
          height: 
            (() => {
              let photo = collection.works[collection.coverIndex].photo;
              let width = window.innerWidth * 0.92;
              let scale = width / photo.pxWidth;
              let height = photo.pxHeight * scale;
              return `calc(${height}px + 2vw)`;
            })(),
          overflow: 'hidden'
        }}
      >
        <Link to={`/collections/${title}`}>
          <SmoothImage
            photo={collection.works[collection.coverIndex].photo}
            style={{
              width: '92vw',
              height: 
                (() => {
                  let photo = collection.works[collection.coverIndex].photo;
                  let width = window.innerWidth * 0.92;
                  let scale = width / photo.pxWidth;
                  let height = photo.pxHeight * scale;
                  return height;
                })()
            }}
          />
          <h3
            style={{
              display: 'block',
              position: 'relative',
              top: 
                (() => {
                  let photo = collection.works[collection.coverIndex].photo;
                  let width = window.innerWidth * 0.92;
                  let scale = width / photo.pxWidth;
                  let height = photo.pxHeight * scale;
                  return `calc(-${height}px/2 - 2em)`;
                })(),
              lineHeight: '4em',
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.45)',
              color: 'black',
              textShadow: '0 0 5px white',
              textTransform: 'capitalize' }}
          >
            {title}
          </h3>
        </Link>
      </div>
    : <div className="CoverComponent">
        {idx % 2 !== 0
        ? <><CoverImage/><Description/></>
        : <><Description/><CoverImage/></>}
      </div>
  );
}
