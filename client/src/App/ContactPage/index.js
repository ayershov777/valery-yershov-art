import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './ContactPage.css';

export default function ContactPage() {
  const [subject, setSubject] = useState('');
  const [textBody, setTextBody] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleReset = () => {
    setSent(false);
    setSending(false);
    setSubject('');
    setTextBody('');
    setContactInfo('');
  }

  const onSubmit = e => {
    e.preventDefault();
    setSending(true);
    fetch('/api/v1/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        text: textBody,
        email: contactInfo
      })
    })
    .then(res => res.json())
    .then(json => setSent(true));
  };

  return (
    <div className="ContactPage">
      <h2>Studio Contact</h2>

      {sent
      ? <div>
          <h2>Thank you, your email has been sent.</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="outline-light" onClick={handleReset}>Send another</Button>
          </div>
        </div>
      : <Form onSubmit={onSubmit}>
          <Form.Group>
            <label>Subject:</label>
            <Form.Control type="text" value={subject} onChange={e => setSubject(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <label>Text Body:</label>
            <Form.Control as='textarea' value={textBody} onChange={e => setTextBody(e.target.value)} required rows={7} />
          </Form.Group>
          <Form.Group>
            <label>Your contact information:</label>
            <Form.Control as='textarea' value={contactInfo} onChange={e => setContactInfo(e.target.value)} required />
          </Form.Group>
          <div className="flex-center">
            {sending
            ? <input disabled id="submit" type="submit" value="sending" className="btn btn-outline-light btn-lg"/>
            : <input id="submit" type="submit" value="send" className="btn btn-outline-light btn-lg"/>}
          </div>
        </Form>}

    </div>
  );
}
