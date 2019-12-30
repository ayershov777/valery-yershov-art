import React, { useState } from 'react';

import './SmoothImage.css';

export default function SmoothImage({ photo, style }) {
  const [blurLoaded, setBlurLoaded] = useState(false);
  const [mainLoaded, setMainLoaded] = useState(false);
  const [highLoaded, setHighLoaded] = useState(false);

  if(highLoaded){
    var loadSrc = null;
    var showSrc = photo.highUrl;
  } else if(mainLoaded) {
    showSrc = photo.mainUrl;
    if(photo.highUrl)
      loadSrc = photo.highUrl;
    else
      loadSrc = null;
  } else if(blurLoaded) {
    loadSrc = photo.mainUrl;
    showSrc = photo.blurUrl;
  } else {
    loadSrc = photo.blurUrl;
    showSrc = null;
  }

  const handleImageLoaded = () => {
    if(!blurLoaded)
      setBlurLoaded(true);
    else if(!mainLoaded)
      setMainLoaded(true);
    else if(photo.highUrl && !highLoaded)
      setHighLoaded(true);
  }
  
  return (
    <div style={{
      // backgroundColor: 'gray',
      ...(style ? style : {}),
    }}>
      {loadSrc && <img
        src={loadSrc}
        style={{ display: 'none' }}
        onLoad={handleImageLoaded}
      />}
      {showSrc && <img
        className="SmoothImage"
        src={showSrc}
        alt={photo.alt}
        style={{
          width: '100%',
          height: '100%' }}
      />}
    </div>
  );
}
