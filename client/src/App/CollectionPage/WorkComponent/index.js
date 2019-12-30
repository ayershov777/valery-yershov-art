import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import ImageComponent from '../../ImageComponent';

import './WorkComponent.css';

export default function WorkComponent({ handleShow, work, isEven }) {
  const [imageHeight, setImageHeight] = useState(0);
  const screenMedium = window.matchMedia('(max-width: 1024px)').matches;

  const history = useHistory();

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
      <ImageComponent photo={work.photo} style={{ width: '50vw' }} setImageHeight={setImageHeight} />
    </div>
  );

  const Description = (
    <div className="Description">
      <div>
        <div>
          <h3>{work.title}</h3>
        </div>
        <br />
        <div style={{ paddingLeft: '24px' }}>
          <p>Size: {work.sizeLabel}</p>
          <p>Medium: {work.mediumLabel}</p>
          <p>Year: {work.yearLabel}</p>
        </div>
        {work.videoUrl &&
          <>
            <br />
            <Button onClick={() => handleShow(work)} variant="dark" style={{ textShadow: '2px 2px 5px black' }}>Watch 3D video</Button>
          </>}
      </div>
      <div style={{ paddingTop: '5vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button onClick={() => history.goBack()} variant="outline-dark" style={{ display:'inline-block', width: '40%', padding: '1px', margin: '2px' }} >back</Button>
        <Button onClick={() => window.scrollTo(0, 0)} variant="outline-dark" style={{ display:'inline-block', width: '40%', padding: '1px', margin: '2px' }} >top</Button>
        <Button onClick={() => history.push('/collections')} variant="outline-dark" style={{ display:'inline-block', width: '40%', padding: '1px', margin: '2px' }} >collections</Button>
      </div>
    </div>
  );

  return (
    screenMedium
    ? <div className="WorkComponent" style={{ flexDirection: 'column' }}>
        <hr style={{ borderTop: '1px solid black', width: '100%', height: 0 }} />
        <h3 style={{ textAlign: 'center', color: 'black' }}>{work.title}</h3>
        <ImageComponent photo={work.photo} style={{ width: '100%' }} />
        {work.videoUrl && <Button variant="dark" onClick={() => handleShow(work)} style={{ marginTop: '4px', width: '100%', textShadow: '2px 2px 5px black' }}>Watch 3D video</Button>}
        <div style={{ paddingTop: '16px', color: 'black' }}>
          <p>Medium: {work.mediumLabel}</p>
          <p>Year: {work.yearLabel}</p>
          <p>Size: {work.sizeLabel}</p>
        </div>
        <div style={{ paddingTop: '3vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button onClick={() => history.goBack()} variant="outline-dark" style={{ display:'inline-block', width: '40%', padding: '1px', margin: '2px' }} >back</Button>
          <Button onClick={() => window.scrollTo(0, 0)} variant="outline-dark" style={{ display:'inline-block', width: '40%', padding: '1px', margin: '2px' }} >top</Button>
          <Button onClick={() => history.push('/collections')} variant="outline-dark" style={{ display:'inline-block', width: '40%', padding: '1px', margin: '2px' }} >collections</Button>
        </div>
      </div>
    : <div className="WorkComponent">
        {isEven
        ? <>{WorkImage}{Description}</>
        : <>{Description}{WorkImage}</>}
      </div>
  );
}