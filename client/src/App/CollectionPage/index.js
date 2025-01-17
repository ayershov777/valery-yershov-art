import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import WorkComponent from './WorkComponent';

import './CollectionPage.css';

export default function CollectionPage({ collections }) {
  const isSmall = window.matchMedia('(max-width: 640px)').matches;
  let { title } = useParams();

  let collection = collections[title];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (work) => setShow(work);

  return (
    <div className="CollectionPage">
      <VideoModal show={show} handleClose={handleClose} />
      <h3 style={{ padding: '0 2vw', fontSize: isSmall ? '30pt' : '34pt' }}>{title} {(title === 'prior' || title === 'featured') ? 'works' : 'collection'}</h3>
      {collection.works.map((work, idx) =>
        <WorkComponent key={collection.works[idx].title} handleShow={handleShow} work={collection.works[idx]} isEven={idx%2 === 0}/>
      )}
    </div>
  );
}

const VideoModal = ({show, handleClose}) => {
  return !!show &&
    <Modal show={!!show} onHide={handleClose} size="lg" backdropClassName="modal-backdrop">
      <Modal.Header closeButton>
        <Modal.Title>{show.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show.videoUrl 
        ? <video controls={true} autoPlay muted>
            <source src={show.videoUrl} type="video/mp4" />
          </video>
        : <p>Video coming soon!</p>
        }
      </Modal.Body>
      <Modal.Footer />
    </Modal>
};