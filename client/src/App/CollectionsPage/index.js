import React from 'react';

import CoverComponent from './CoverComponent';

import './CollectionsPage.css';

export default function CollectionsPage({ collections }) {
  const isSmall = window.matchMedia('(max-width: 640px)').matches;
  delete collections.prior;

  return (
    <div className="CollectionsPage">
      <h3 style={{  fontSize: isSmall ? '20pt' : '32pt' }}>Collections</h3>
      {Object.keys(collections).map((key, idx) =>
        <CoverComponent collection={collections[key]} title={key} idx={idx} />
      )}
    </div>
  );
}