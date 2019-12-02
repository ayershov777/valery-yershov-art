import React from 'react';

import BriefComponent from './BriefComponent';
import EssayComponent from './EssayComponent';

export default function HistoryPage({ data }) {
  return (
    <div>
      <BriefComponent photo={data.photos.artist_portrait} text={data.texts.short} />
      <EssayComponent texts={[ data.texts.bio_1, data.texts.bio_2, data.texts.bio_3, data.texts.bio_footer ]} />
    </div>
  );
}
