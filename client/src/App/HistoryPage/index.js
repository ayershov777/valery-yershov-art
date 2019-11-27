import React from 'react';

import ImageComponent from '../ImageComponent';

import './HistoryPage.css';

export default function HistoryPage(props) {
  const photos = props.data.photos;
  const texts = props.data.texts;

  const mq = window.matchMedia("(max-device-width: 560px)");

  console.log(mq.matches)

  return (
    <div className='HistoryPage'>
      <ImageComponent
        style={{
          width: '100vw',
          ...(mq.matches
            ? {}
            : {
                position: 'absolute',
                top: 56,
                zIndex: -1
              })
        }}
        photo={photos.artist_portrait}
      />
      <p>{texts.short}</p>
    </div>
  );
}
