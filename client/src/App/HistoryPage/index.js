import React from 'react';

import BriefComponent from './BriefComponent';
import EssayComponent from './EssayComponent'

export default function HistoryPage(props) {
  const photos = props.data.photos;
  const texts = props.data.texts;

  return (
    <div className='HistoryPage'>
      <BriefComponent
        photo={photos.artist_portrait}
        text={texts.short}
      />
      <EssayComponent texts={[ texts.bio_1, texts.bio_2, texts.bio_3, texts.bio_footer ]}/>
    </div>
  );
}
