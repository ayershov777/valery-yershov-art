import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './EssayComponent.css';

export default function EssayComponent({ texts }) {
  const [textIdx, setTextIdx] = useState(0);

  const handleAdvanceText = () => {
    if(textIdx < 3) setTextIdx(textIdx+1);
    else setTextIdx(0);
  };

  return (
    <div className="EssayComponent">
      <div className="bio-paragraph">{texts[textIdx]}</div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '4px' }}>
        <Button variant="outline-primary" size="sm" onClick={handleAdvanceText}>read next paragraph</Button>
      </div>
      
    </div>
  );
}
