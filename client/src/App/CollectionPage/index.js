import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import WorkComponent from './WorkComponent';

import './CollectionPage.css'

export default function CollectionPage({ collections }) {
  const isSmall = window.matchMedia('(max-width: 640px)').matches;
  let { title } = useParams();
  let collection = collections[title];

  return (
    <div className="CollectionPage">
      <h3 style={{ fontSize: isSmall ? '20pt' : '32pt' }}>{title} collection</h3>
      {collection.works.map((work, idx) =>
        <WorkComponent work={collection.works[idx]} isEven={idx%2 === 0}/>
      )}
    </div>
  );
}
