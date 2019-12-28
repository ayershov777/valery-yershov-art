import React, { useState } from 'react';

import './ImageComponent.css';

/*
 IMPORTANT:
    1. props.style must contain either width or height, but not neither nor both
    2. the unit for width and height can only be px, vh, or vw
    3. if both width and height are not provided, the image scale will be 1

    failure to accord with these expectations will result in undefined behavior
*/

export default function ImageComponent(props) {
  const [loading, setLoading] = useState(true);
  const [phLoading, setPhLoading] = useState(true);

  const ar = props.photo.pxWidth / props.photo.pxHeight;
  const scale = ((sizeString) => {
    const givenSize = parseInt(sizeString.slice(0, -1));
    const unit = sizeString.slice(-2);
    const originalSize = props.photo.height ? props.photo.pxHeight : props.photo.pxWidth;
    
    if(unit === 'px')
      return givenSize / originalSize;
    if(unit === 'vw')
      return ((givenSize/100) * window.innerWidth) / originalSize;
    if(unit === 'vh')
      return ((givenSize/100) * window.innerHeight) / originalSize;
    return undefined;
  })(props.style.width || props.style.height || `${props.photo.pxWidth}px`);

  const actualWidth = props.photo.pxWidth * scale;
  const actualHeight = props.photo.pxHeight * scale;

  if(props.setImageHeight)
    props.setImageHeight(actualHeight);

  var img = new Image();
  img.onload = () => setPhLoading(false);
  img.src = props.photo.blurUrl;

  return (
    <div
      className='img-container' 
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        backgroundColor: 'gray',
        maxWidth: '100%',
        // width: actualWidth/scale,
        // height: scale*actualHeight,
        ...( loading? { width: actualWidth, height: actualHeight } : {}),
        ...( phLoading ? {} : { backgroundImage: `url(${props.photo.blurUrl})`, backgroundSize: 'cover' }),
      }}
    >
      <img
        className={`loaded-image${loading && ' loading'}`}
        src={props.photo.mainUrl}
        alt={props.photo.alt}
        onLoad={() => setLoading(false)}
        style={{
          ...props.style, 
          ...( props.style.height ? { width: `calc(${props.style.height}*${ar})` } : {} ),
          ...( props.style.width ? { height: `calc(${props.style.width}/${ar})` } : {} ),
          display: (loading ? 'none' : 'inline-block'),
          animation: loading || 'img-blur-in linear 0.6s',
          margin: '-5px -5x -5px -5px'
        }}
      />
    </div>
  );
}
