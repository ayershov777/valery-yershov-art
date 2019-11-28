import React from 'react';

import BriefComponent from './BriefComponent';
// import EssayComponent from './'

export default function HistoryPage(props) {
  const photos = props.data.photos;
  const texts = props.data.texts;

  return (
    <div className='HistoryPage'>
      <BriefComponent photo={photos.artist_portrait} text={texts.short} />
      {/* <p style={{backgroundColor: 'black'}}>{texts.bio_1}</p> */}
    </div>
  );
}
