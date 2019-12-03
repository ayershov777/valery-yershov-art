import React from 'react';

import BriefComponent from './BriefComponent';

import exhibitionHistoryPDF from './exhibition-history.pdf';
import biographyPDF from './biography.pdf';

export default function HistoryPage({ data }) {
  return (
    <div>
      <BriefComponent photo={data.photos.artist_portrait} text={data.texts.short} />

      <a href={exhibitionHistoryPDF}>Exhibition History</a> <br />
      <a href={biographyPDF}>Biography</a>

    </div>
  );
}
