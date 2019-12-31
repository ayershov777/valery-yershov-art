import React from 'react';

import BriefComponent from './BriefComponent';

import exhibitionHistoryPDF from './exhibition-history.pdf';
import biographyPDF from './biography.pdf';
import ImageComponent from '../ImageComponent';

export default function HistoryPage({ data }) {
  return (
    <div>
      
      <BriefComponent photo={data.photos.artist_portrait} text={data.texts.short} />

      <div style={{ position: 'relative', top: '-18px',  height: '32px', marginBottom: '-18px', zIndex: '-1', backgroundColor: 'rgba(16, 16, 16, 0.9)' }} />
      
      <div
        style={{
          backgroundColor: 'rgba(16, 16, 16, .9)',
          padding: '6px 32px 32px 32px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap' }}
      >
        <div style={{ display: 'inline-block' }}>
          <a href={biographyPDF} style={{ color: "white" }}>
            <h4 style={{ textAlign: 'center' }}>Valery's Amazing Story</h4>
            <ImageComponent photo={data.photos.bio_preview} style={{ width: '256px', border: '1px dashed darkslategray' }} />
          </a>
        </div>
        <div style={{ display: 'inline-block' }}>
          <a href={exhibitionHistoryPDF} style={{ color: "white" }}>
            <h4 style={{ textAlign: 'center' }}>Exhibition History</h4>
            <ImageComponent photo={data.photos.exhibitions_preview} style={{ width: '256px', border: '1px dashed darkslategray' }} />
          </a>
        </div>
      </div>

    </div>
  );
}
