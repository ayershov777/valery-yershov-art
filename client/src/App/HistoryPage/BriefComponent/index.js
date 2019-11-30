import React, { useState, useEffect, useRef } from 'react';

import ImageComponent from '../../ImageComponent';

import './BriefComponent.css';

export default function BriefComponent({ photo, text }) {
  const screenSmall = window.matchMedia("(max-width: 500px)").matches;
  const screenMedium = !screenSmall && window.matchMedia("(max-width: 1024px)").matches;
  const screenLarge = !screenSmall && !screenMedium;

  const [imageHeight, setImageHeight] = useState(0);
  const [pHeight, setPHeight] = useState(0);
  const pRef = useRef(null);

  useEffect(() => setPHeight(pRef.current.clientHeight));

  return (
    <div className="BriefComponent">
      <ImageComponent setImageHeight={setImageHeight} photo={photo} style={{ 'width': '100vw' }} />
      <p
        ref={pRef}
        style={{
          ...(screenSmall
          ? {
              fontSize: '12pt',
              marginTop: '-6px',
            }
          : {}),
          ...(screenMedium
            ? {
                fontSize: '14pt',
                position: 'relative',
                top: -(imageHeight/2),
                marginBottom: -Math.min(imageHeight/2, pHeight)
              }
            : {}),
          ...(screenLarge
            ? {
                fontSize: '16pt',
                position: 'relative',
                top: -(imageHeight/1.05),
                left: '3vw',
                width: '50%',
                marginBottom: -pHeight,
                background: 'rgba(16, 16, 16, 0.8)'
              }
            : {})
        }}
      >
        {text}
      </p>
    </div>
  );
}
