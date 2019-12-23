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
      <h3 style={{ fontSize: isSmall ? '30pt' : '34pt' }}>{title} {title === 'prior' ? 'works' : 'collection'}</h3>
      {collection.works.map((work, idx) =>
        <WorkComponent handleShow={handleShow} work={collection.works[idx]} isEven={idx%2 === 0}/>
      )}
      <div className="flex-center">
        <Button as={Link} to="/collections" variant="outline-light" size="lg">Back to all collections</Button>
      </div>
    </div>
  );
}

const VideoModal = ({show, handleClose}) => {
  console.log(show);
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