import React, { useState, useEffect, useRef } from 'react';

import ImageComponent from '../../ImageComponent';
import useWindowSize from '../../../hooks/windowSize';

import './BriefComponent.css';

export default function BriefComponent(props) {
  const [width, height] = useWindowSize();
  const [imageHeight, setImageHeight] = useState(0);
  const [pHeight, setPHeight] = useState(0);
  const ref = useRef(null);
  
  const mobileView = (width < (height/1.75));
  const largeView = (width > 823);
  
  useEffect(() => setPHeight(ref.current.clientHeight));

  console.log(pHeight);


  var style = {};
  if(mobileView) style.height = imageHeight + pHeight;//props.setComponentHeight(imageHeight + pHeight);
  else if(largeView) style.height = imageHeight; //props.setComponentHeight(imageHeight);
  else style.height = Math.max(pHeight+(height*.415), imageHeight) //props.setComponentHeight(Math.max(pHeight+(height*.415), imageHeight));

  return (
    <div 
      className={`BriefComponent${ mobileView ? ' Mobile' : '' }${ largeView ? ' Large' : '' }`}
      style={style}
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
      <p ref={ref}>{props.text}</p>
    </div>
  );
}
