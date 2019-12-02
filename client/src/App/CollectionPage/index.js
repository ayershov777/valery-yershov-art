import React from 'react';
import { useParams } from 'react-router-dom';

export default function CollectionPage() {
  let { title } = useParams();

  return (
    <div>
      Collection Title: {title}
    </div>
  );
}
