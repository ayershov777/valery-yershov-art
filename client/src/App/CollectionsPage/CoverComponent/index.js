import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ImageComponent from '../../ImageComponent';

import './CoverComponent.css';

export default function CoverComponent({ collection, title, idx }) {
  const [imageHeight, setImageHeight] = useState(0);
  const screenSmall = window.matchMedia('(max-width: 640px)').matches;

  console.log(collection.works);

  const CoverImage = () => (
    <Link to={`/collections/${title}`} className="CollectionLink" style={{ height: imageHeight }}>
      <ImageComponent
        photo={collection.works[collection.coverIndex].photo}
        style={{ width: '40vw' }}
        setImageHeight={setImageHeight}
      />
    </Link>
  );

  const Description = () => (
    <div className="Description">
      <Link to={`/collections/${title}`} style={{ color: 'black', textDecoration: 'none' }}>
        <h3 className='title'>“{title}”</h3>
      </Link>
      <p>{collection.description}</p>
    </div>
  );

  return (
    screenSmall
    ? <div className="CoverComponent-Mobile" style={{ height: `calc(${imageHeight}px + 2vw)` }}>
        <Link to={`/collections/${title}`}>
          <ImageComponent
            photo={collection.works[collection.coverIndex].photo}
            style={{ position: 'relative', width: '92vw' }}
            setImageHeight={setImageHeight}
          />
          <h3
            style={{
              position: 'relative',
              top: `calc(${-imageHeight/2}px - 1.25em)`,
              textAlign: 'center',
              backgroundColor: 'rgba(32, 32, 32, 0.6)',
              color: 'white',
              textShadow: '0 0 5px white',
              lineHeight: '2.5em',
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
