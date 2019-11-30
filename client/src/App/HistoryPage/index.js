import React from 'react';

import BriefComponent from './BriefComponent';

export default function HistoryPage({ data, exhibitions }) {
  return (
    <div>
      <BriefComponent photo={data.photos.artist_portrait} text={data.texts.short} />
      <h2>This text should always appear in the right place.</h2>
    </div>
  );
}
