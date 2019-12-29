import React from 'react';

import ImageComponent from '../../ImageComponent';

export default function LogosComponent({ logos }) {
  return (
    <div 
      style={{
        marginTop: '-10vw',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
      }}
    >
      {logos.map((logo, idx) =>
        <div key={idx} style={{ minWidth: '20vw', margin: '2vw', height: 'auto', display: 'inline-flex', justifyContent: 'center' }}>
          <div style={{ margin: 'auto '}}>
            <ImageComponent photo={logo} style={{ maxHeight: '14vh', minHeight: '7vh' }} />
          </div>
        </div>
      )}
    </div>
  );
}
