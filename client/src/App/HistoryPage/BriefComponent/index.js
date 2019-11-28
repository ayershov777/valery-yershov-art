import React, { useState } from 'react';

import ImageComponent from '../../ImageComponent';

import './BriefComponent.css';

import useWindowSize from '../../../hooks/windowSize';

export default function BriefComponent(props) {
  const [width, height] = useWindowSize();
  const mobileView = (width < (height/1.75));
  const largeView = (width > 823);

  const [imageHeight, setImageHeight] = useState(null);
  
  return (
    <div 
      className={`BriefComponent${ mobileView ? ' Mobile' : '' }${ largeView ? ' Large' : '' }`}
      style={{ height: imageHeight }}
    >
      <ImageComponent
        setImageHeight={setImageHeight}
        style={{
          width: '100vw',
          ...(mobileView)
            ? {}
            : {
                position: 'absolute',
                top: 56,
                zIndex: -1
              }
        }}
        photo={props.photo}
      />
      <p>{props.text}</p>
    </div>
  );
}
