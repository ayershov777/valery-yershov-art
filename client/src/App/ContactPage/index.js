import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import './ContactPage.css';

export default function ContactPage() {
  const [subject, setSubject] = useState('');
  const [textBody, setTextBody] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

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
      ? <h2>Thank you, your email has been sent.</h2>
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
            ? <input disabled id="submit" type="submit" value="sending" className="btn btn-outline-primary btn-lg"/>
            : <input id="submit" type="submit" value="send" className="btn btn-outline-primary btn-lg"/>}
          </div>
        </Form>}

    </div>
  );
}
