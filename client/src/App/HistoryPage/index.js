import React from 'react';

import BriefComponent from './BriefComponent';
import EssayComponent from './EssayComponent';

export default function HistoryPage({ data, exhibitions }) {
  return (
    <div>
      <BriefComponent photo={data.photos.artist_portrait} text={data.texts.short} />
      <EssayComponent texts={[ texts.bio_1, texts.bio_2, texts.bio_3, texts.bio_footer ]} />
    </div>
  );
}
