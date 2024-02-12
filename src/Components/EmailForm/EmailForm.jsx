import React, { useState } from 'react';
import './EmailForm.css';

function EmailForm() {
  const [receiverEmail, setReceiverEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Sending email...');
    console.log('To:', receiverEmail);
    console.log('Subject:', subject);
    console.log('Message:', message);

    setReceiverEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="emailform">
        <div className="email-form-container">
        <div className="form-group">
        <label htmlFor="email-formname"><h1>Email-Form</h1></label>
        
      </div>
      <div className="form-group">
        <label htmlFor="receiverEmail">To:</label>
        <input
          type="email"
          id="receiverEmail"
          value={receiverEmail}
          onChange={(e) => setReceiverEmail(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-input"
          rows="5"
        />
      </div>
      <button onClick={handleSend} className="send-button">SEND</button>
    </div>
    </div>
  );
}

export default EmailForm;
