import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import ImageComponent from '../../ImageComponent';

import './WorkComponent.css';

export default function WorkComponent({ handleShow, work, isEven }) {
  const [imageHeight, setImageHeight] = useState(0);
  const screenSmall = window.matchMedia('(max-width: 640px)').matches;

  const WorkImage = (
    <div
      className="WorkImage"
      style={{ height: imageHeight }}
      onClick={e => {
        if (e.target.requestFullscreen) { // W3C API
          e.target.requestFullscreen();
        } else if (e.target.mozRequestFullscreen) { // Mozilla current API
          e.target.mozRequestFullscreen();
        } else if (e.target.webkitRequestFullscreen) { // Webkit current API
          e.target.webkitRequestFullscreen();
        } // Maybe other prefixed APIs?
      }}
    >
      <ImageComponent photo={work.photo} style={{ width: '40vw' }} setImageHeight={setImageHeight} />
    </div>
  );

  const Description = (
    <div className="Description">
      <div>
        <div>
          <h3>{work.title}</h3>
          {work.videoUrl &&
            <Button onClick={() => handleShow(work)} variant="info" style={{ textShadow: '2px 2px 5px black' }}>Watch 3D video</Button>}
        </div>
        <div style={{ paddingLeft: '32px', paddingTop: '16px' }}>
          <p>Medium: {work.mediumLabel}</p>
          <p>Year: {work.yearLabel}</p>
          <p>Size: {work.sizeLabel}</p>
        </div>
      </div>
    </div>
  );

  return (
    screenSmall
    ? <div className="WorkComponent" style={{ flexDirection: 'column' }}>
        <hr style={{ borderTop: '1px solid white', width: '100%', height: 0 }} />
        <h3 style={{ textAlign: 'center', color: 'white' }}>{work.title}</h3>
        <ImageComponent photo={work.photo} style={{ width: '100%' }} />
        <Button onClick={() => handleShow(work)} variant="info" style={{ marginTop: '4px', width: '100%', textShadow: '2px 2px 5px black' }}>Watch 3D video</Button>
        <div style={{ paddingTop: '16px', color: 'white' }}>
          <p>Medium: {work.mediumLabel}</p>
          <p>Year: {work.yearLabel}</p>
          <p>Size: {work.sizeLabel}</p>
        </div>
      </div>
    : <div className="WorkComponent">
        {isEven
        ? <>{WorkImage}{Description}</>
        : <>{Description}{WorkImage}</>}
      </div>
  );
}